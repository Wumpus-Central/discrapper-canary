n.d(t, { A: () => f });
var i = n(439372),
    r = n(710195),
    a = n(723702),
    s = n(945810);
let l = (0, s.mj)({
        name: "2026-09-desktop-tti-shader-cache",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    o = (0, s.mj)({
        name: "2026-06-desktop-tti-http-cdt",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = (0, s.mj)({
        name: "2026-10-desktop-tti-perf",
        kind: "user",
        defaultConfig: { legacyOverlayWorker: !1 },
        variations: { 0: { legacyOverlayWorker: !1 }, 1: { legacyOverlayWorker: !0 } },
    }),
    c = (0, s.mj)({
        name: "2026-06-desktop-tti-splash-asset",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    u = [
        {
            settingKey: "DESKTOP_TTI_LEGACY_OVERLAY_WORKER",
            defaultValue: !1,
            readValue: (e) => (0, a.isWindows)() && d.getConfig({ location: e }).legacyOverlayWorker,
        },
        {
            settingKey: "DESKTOP_TTI_HTTP_CDT",
            defaultValue: !1,
            readValue: (e) =>
                (function (e) {
                    let { location: t } = e;
                    return o.getConfig({ location: t });
                })({ location: e }).enabled,
        },
        {
            settingKey: "DESKTOP_TTI_SPLASH_USE_WEBP",
            defaultValue: !1,
            readValue: (e) =>
                (function (e) {
                    let { location: t } = e;
                    return c.getConfig({ location: t });
                })({ location: e }).enabled,
        },
        {
            settingKey: "DESKTOP_TTI_REMOVE_SHADER_CACHE_CLEAR",
            defaultValue: !1,
            readValue: (e) =>
                (function (e) {
                    let { location: t } = e;
                    return l.getConfig({ location: t });
                })({ location: e }).enabled,
        },
    ],
    _ = !1,
    E = new Map();
async function A(e, t) {
    if (!(0, a.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let n = e.readValue(t);
    (n !== (await window.DiscordNative.settings.get(e.settingKey, e.defaultValue)) &&
        (await window.DiscordNative.settings.set(e.settingKey, n)),
        E.set(e.settingKey, n));
}
class h extends i.A {
    stores = new Map().set(r.A, () => {
        if (_)
            for (let e of u) {
                let t = e.readValue("experimentStoreUpdate");
                E.get(e.settingKey) !== t && A(e, "experimentStoreUpdate");
            }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            _ ||
                window.DiscordNative?.settings?.set == null ||
                ((0, a.isDesktop)() && ((_ = !0), await Promise.all(u.map((e) => A(e, "postConnectionOpen")))));
        },
        LOGOUT: () => {
            ((_ = !1), E.clear());
        },
    };
}
let f = new h();
