n.d(t, { A: () => p });
var i = n(439372),
    r = n(710195),
    a = n(723702),
    s = n(945810);
let l = (0, s.mj)({
        name: "2026-09-windows-native-premap",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    o = (0, s.mj)({
        name: "2026-09-desktop-tti-shader-cache",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = (0, s.mj)({
        name: "2026-06-desktop-tti-http-cdt",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    c = (0, s.mj)({
        name: "2026-10-desktop-tti-perf",
        kind: "user",
        defaultConfig: { legacyOverlayWorker: !1 },
        variations: { 0: { legacyOverlayWorker: !1 }, 1: { legacyOverlayWorker: !0 } },
    }),
    u = (0, s.mj)({
        name: "2026-06-desktop-tti-splash-asset",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    _ = [
        {
            settingKey: "DESKTOP_TTI_LEGACY_OVERLAY_WORKER",
            defaultValue: !1,
            readValue: (e) => (0, a.isWindows)() && c.getConfig({ location: e }).legacyOverlayWorker,
        },
        {
            settingKey: "DESKTOP_TTI_HTTP_CDT",
            defaultValue: !1,
            readValue: (e) =>
                (function (e) {
                    let { location: t } = e;
                    return d.getConfig({ location: t });
                })({ location: e }).enabled,
        },
        {
            settingKey: "DESKTOP_TTI_SPLASH_USE_WEBP",
            defaultValue: !1,
            readValue: (e) =>
                (function (e) {
                    let { location: t } = e;
                    return u.getConfig({ location: t });
                })({ location: e }).enabled,
        },
        {
            settingKey: "DESKTOP_TTI_REMOVE_SHADER_CACHE_CLEAR",
            defaultValue: !1,
            readValue: (e) =>
                (function (e) {
                    let { location: t } = e;
                    return o.getConfig({ location: t });
                })({ location: e }).enabled,
        },
        {
            settingKey: "DESKTOP_NATIVE_PREMAP",
            defaultValue: !1,
            readValue: (e) =>
                (0, a.isWindows)() &&
                (function (e) {
                    let { location: t } = e;
                    return l.getConfig({ location: t });
                })({ location: e }).enabled,
            removeWhenDefault: !0,
        },
    ],
    E = !1,
    A = new Map();
async function h(e) {
    let t = window.DiscordNative?.settings;
    t?.set == null || (null != (await t.get(e.settingKey, null)) && (await t.set(e.settingKey, null)));
}
async function f(e, t) {
    if (!(0, a.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let n = e.readValue(t);
    (A.set(e.settingKey, n), !0 === e.removeWhenDefault && n === e.defaultValue)
        ? await h(e)
        : n !== (await window.DiscordNative.settings.get(e.settingKey, e.defaultValue)) &&
          (await window.DiscordNative.settings.set(e.settingKey, n));
}
class I extends i.A {
    stores = new Map().set(r.A, () => {
        if (E)
            for (let e of _) {
                let t = e.readValue("experimentStoreUpdate");
                A.get(e.settingKey) !== t && f(e, "experimentStoreUpdate");
            }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            E ||
                window.DiscordNative?.settings?.set == null ||
                ((0, a.isDesktop)() && ((E = !0), await Promise.all(_.map((e) => f(e, "postConnectionOpen")))));
        },
        LOGOUT: async () => {
            ((E = !1),
                A.clear(),
                (0, a.isDesktop)() &&
                    (await Promise.all(_.filter((e) => !0 === e.removeWhenDefault).map((e) => h(e)))));
        },
    };
}
let p = new I();
