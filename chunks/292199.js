n.d(t, { A: () => T });
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
var c = n(723702),
    u = n(444431);
let _ = [
    {
        settingKey: "DESKTOP_TTI_LEGACY_OVERLAY_WORKER",
        defaultValue: !1,
        readValue: (e) => (0, c.isWindows)() && o.getConfig({ location: e }).legacyOverlayWorker,
    },
    {
        settingKey: "DESKTOP_PROCESS_POLLING_PERF",
        defaultValue: !1,
        readValue: (e) => (0, c.isWindows)() && (0, u.L)(e).processPollingPerf,
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
            (0, c.isWindows)() &&
            (function (e) {
                let { location: t } = e;
                return a.getConfig({ location: t });
            })({ location: e }).enabled,
        removeWhenDefault: !0,
    },
    {
        settingKey: "DESKTOP_PERF_KEEP_RENDERER_LOG_FILE_OPEN",
        defaultValue: !1,
        readValue: (e) => (0, u.L)(e).keepRendererLogFileOpen,
        removeWhenDefault: !0,
    },
];
var E = n(710195);
let A = !1,
    h = new Map();
async function f(e) {
    let t = window.DiscordNative?.settings;
    t?.set == null || (null != (await t.get(e.settingKey, null)) && (await t.set(e.settingKey, null)));
}
async function I(e, t) {
    if (!(0, c.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let n = e.readValue(t);
    (h.set(e.settingKey, n), !0 === e.removeWhenDefault && n === e.defaultValue)
        ? await f(e)
        : n !== (await window.DiscordNative.settings.get(e.settingKey, e.defaultValue)) &&
          (await window.DiscordNative.settings.set(e.settingKey, n));
}
class p extends i.A {
    stores = new Map().set(E.A, () => {
        if (A)
            for (let e of _) {
                let t = e.readValue("experimentStoreUpdate");
                h.get(e.settingKey) !== t && I(e, "experimentStoreUpdate");
            }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            A ||
                window.DiscordNative?.settings?.set == null ||
                ((0, c.isDesktop)() && ((A = !0), await Promise.all(_.map((e) => I(e, "postConnectionOpen")))));
        },
        LOGOUT: async () => {
            ((A = !1),
                h.clear(),
                (0, c.isDesktop)() &&
                    (await Promise.all(_.filter((e) => !0 === e.removeWhenDefault).map((e) => f(e)))));
        },
    };
}
let T = new p();
