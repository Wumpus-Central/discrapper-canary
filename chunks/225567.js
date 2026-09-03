n.d(t, { A: () => A });
var i = n(439372),
    r = n(710195),
    a = n(723702),
    s = n(945810);
let l = (0, s.mj)({
        name: "2026-06-desktop-tti-http-cdt",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    o = (0, s.mj)({
        name: "2026-06-desktop-tti-splash-asset",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = [
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
                    return o.getConfig({ location: t });
                })({ location: e }).enabled,
        },
    ],
    c = !1,
    u = new Map();
async function _(e, t) {
    if (!(0, a.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let n = e.readValue(t);
    n !== (await window.DiscordNative.settings.get(e.settingKey, e.defaultValue)) &&
        (await window.DiscordNative.settings.set(e.settingKey, n)),
        u.set(e.settingKey, n);
}
class E extends i.A {
    stores = new Map().set(r.A, () => {
        if (c)
            for (let e of d) {
                let t = e.readValue("experimentStoreUpdate");
                u.get(e.settingKey) !== t && _(e, "experimentStoreUpdate");
            }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            c ||
                window.DiscordNative?.settings?.set == null ||
                ((0, a.isDesktop)() && ((c = !0), await Promise.all(d.map((e) => _(e, "postConnectionOpen")))));
        },
        LOGOUT: () => {
            (c = !1), u.clear();
        },
    };
}
let A = new E();
