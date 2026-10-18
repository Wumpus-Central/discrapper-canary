n.d(t, { A: () => m });
var i = n(439372),
    r = n(945810);
let a = (0, r.mj)({
        name: "2026-09-windows-native-premap",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    s = (0, r.mj)({
        name: "2026-09-desktop-tti-shader-cache",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l = (0, r.mj)({
        name: "2026-06-desktop-tti-http-cdt",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    o = (0, r.mj)({
        name: "2026-10-desktop-tti-perf",
        kind: "user",
        defaultConfig: { legacyOverlayWorker: !1 },
        variations: { 0: { legacyOverlayWorker: !1 }, 1: { legacyOverlayWorker: !0 } },
    }),
    d = (0, r.mj)({
        name: "2026-06-desktop-tti-splash-asset",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var c = n(287809),
    u = n(723702),
    _ = n(444431);
let E = [
    {
        settingKey: "DESKTOP_TTI_LEGACY_OVERLAY_WORKER",
        defaultValue: !1,
        readValue: (e) => (0, u.isWindows)() && o.getConfig({ location: e }).legacyOverlayWorker,
    },
    {
        settingKey: "DESKTOP_PROCESS_POLLING_PERF",
        defaultValue: !1,
        readValue: (e) => (0, u.isWindows)() && (0, _.L)(e).processPollingPerf,
    },
    {
        settingKey: "DESKTOP_TTI_HTTP_CDT",
        defaultValue: !1,
        readValue: (e) =>
            (function (e) {
                let { location: t } = e;
                return l.getConfig({ location: t });
            })({ location: e }).enabled,
    },
    {
        settingKey: "DESKTOP_TTI_SPLASH_USE_WEBP",
        defaultValue: !1,
        readValue: (e) =>
            (function (e) {
                let { location: t } = e;
                return d.getConfig({ location: t });
            })({ location: e }).enabled,
    },
    {
        settingKey: "DESKTOP_TTI_REMOVE_SHADER_CACHE_CLEAR",
        defaultValue: !1,
        readValue: (e) =>
            (function (e) {
                let { location: t } = e;
                return s.getConfig({ location: t });
            })({ location: e }).enabled,
    },
    {
        settingKey: "DESKTOP_NATIVE_PREMAP",
        defaultValue: !1,
        readValue: (e) =>
            (0, u.isWindows)() &&
            (function (e) {
                let { location: t } = e;
                return a.getConfig({ location: t });
            })({ location: e }).enabled,
        removeWhenDefault: !0,
    },
    {
        settingKey: "DESKTOP_PERF_KEEP_RENDERER_LOG_FILE_OPEN",
        defaultValue: !1,
        readValue: (e) => (0, _.L)(e).keepRendererLogFileOpen,
        removeWhenDefault: !0,
    },
    {
        settingKey: "DESKTOP_STAFF_LARGE_LOG_FILES",
        defaultValue: !1,
        readValue: () => c.default.getCurrentUser()?.isStaff() === !0,
        removeWhenDefault: !0,
    },
];
var A = n(710195);
let h = !1,
    f = new Map();
async function I(e) {
    let t = window.DiscordNative?.settings;
    t?.set == null || (null != (await t.get(e.settingKey, null)) && (await t.set(e.settingKey, null)));
}
async function p(e, t) {
    if (!(0, u.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let n = e.readValue(t);
    (f.set(e.settingKey, n), !0 === e.removeWhenDefault && n === e.defaultValue)
        ? await I(e)
        : n !== (await window.DiscordNative.settings.get(e.settingKey, e.defaultValue)) &&
          (await window.DiscordNative.settings.set(e.settingKey, n));
}
class T extends i.A {
    stores = new Map().set(A.A, () => {
        if (h)
            for (let e of E) {
                let t = e.readValue("experimentStoreUpdate");
                f.get(e.settingKey) !== t && p(e, "experimentStoreUpdate");
            }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            h ||
                window.DiscordNative?.settings?.set == null ||
                ((0, u.isDesktop)() && ((h = !0), await Promise.all(E.map((e) => p(e, "postConnectionOpen")))));
        },
        LOGOUT: async () => {
            ((h = !1),
                f.clear(),
                (0, u.isDesktop)() &&
                    (await Promise.all(E.filter((e) => !0 === e.removeWhenDefault).map((e) => I(e)))));
        },
    };
}
let m = new T();
