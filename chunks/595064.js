"use strict";
n.d(t, { A: () => _ });
var i = n(439372),
    r = n(710195),
    s = n(723702);
let a = (0, n(945810).mj)({
        name: "2026-06-desktop-tti-http-cdt",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    o = [
        {
            settingKey: "DESKTOP_TTI_HTTP_CDT",
            defaultValue: !1,
            readValue: (e) =>
                (function (e) {
                    let { location: t } = e;
                    return a.getConfig({ location: t });
                })({ location: e }).enabled,
        },
    ],
    l = !1,
    u = new Map();
async function c(e, t) {
    if (!(0, s.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let n = e.readValue(t);
    n !== (await window.DiscordNative.settings.get(e.settingKey, e.defaultValue)) &&
        (await window.DiscordNative.settings.set(e.settingKey, n)),
        u.set(e.settingKey, n);
}
class d extends i.A {
    stores = new Map().set(r.A, () => {
        if (l)
            for (let e of o) {
                let t = e.readValue("experimentStoreUpdate");
                u.get(e.settingKey) !== t && c(e, "experimentStoreUpdate");
            }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            l ||
                window.DiscordNative?.settings?.set == null ||
                ((0, s.isDesktop)() && ((l = !0), await Promise.all(o.map((e) => c(e, "postConnectionOpen")))));
        },
        LOGOUT: () => {
            (l = !1), u.clear();
        },
    };
}
let _ = new d();
