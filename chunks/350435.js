n.d(t, { A: () => h });
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
        name: "2026-06-desktop-tti-splash-asset",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    c = [
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
                    return d.getConfig({ location: t });
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
    u = !1,
    _ = new Map();
async function E(e, t) {
    if (!(0, a.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let n = e.readValue(t);
    (n !== (await window.DiscordNative.settings.get(e.settingKey, e.defaultValue)) &&
        (await window.DiscordNative.settings.set(e.settingKey, n)),
        _.set(e.settingKey, n));
}
class A extends i.A {
    stores = new Map().set(r.A, () => {
        if (u)
            for (let e of c) {
                let t = e.readValue("experimentStoreUpdate");
                _.get(e.settingKey) !== t && E(e, "experimentStoreUpdate");
            }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            u ||
                window.DiscordNative?.settings?.set == null ||
                ((0, a.isDesktop)() && ((u = !0), await Promise.all(c.map((e) => E(e, "postConnectionOpen")))));
        },
        LOGOUT: () => {
            ((u = !1), _.clear());
        },
    };
}
let h = new A();
