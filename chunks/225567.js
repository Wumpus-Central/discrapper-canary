"use strict";
n.d(t, { A: () => f });
var i = n(439372),
    r = n(710195),
    s = n(723702),
    a = n(945810);
let o = (0, a.mj)({
        name: "2026-06-desktop-tti-http-cdt",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l = (0, a.mj)({
        name: "2026-06-desktop-tti-splash-asset",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    u = [
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
                    return l.getConfig({ location: t });
                })({ location: e }).enabled,
        },
    ],
    c = !1,
    d = new Map();
async function _(e, t) {
    if (!(0, s.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let n = e.readValue(t);
    n !== (await window.DiscordNative.settings.get(e.settingKey, e.defaultValue)) &&
        (await window.DiscordNative.settings.set(e.settingKey, n)),
        d.set(e.settingKey, n);
}
class h extends i.A {
    stores = new Map().set(r.A, () => {
        if (c)
            for (let e of u) {
                let t = e.readValue("experimentStoreUpdate");
                d.get(e.settingKey) !== t && _(e, "experimentStoreUpdate");
            }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            c ||
                window.DiscordNative?.settings?.set == null ||
                ((0, s.isDesktop)() && ((c = !0), await Promise.all(u.map((e) => _(e, "postConnectionOpen")))));
        },
        LOGOUT: () => {
            (c = !1), d.clear();
        },
    };
}
let f = new h();
