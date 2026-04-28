"use strict";
n.d(t, { A: () => c });
var i = n(439372),
    r = n(710195),
    s = n(723702);
let a = (0, n(945810).mj)({
    name: "2026-04-desktop-tti-dnstcp-warmup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function o(e) {
    let { location: t } = e;
    return a.getConfig({ location: t });
}
let l = !1,
    _ = null;
async function d() {
    if (!(0, s.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let { enabled: e } = o({ location: "updateSwitch" }),
        t = "DESKTOP_TTI_DNSTCP_WARMUP";
    e !== (await window.DiscordNative.settings.get(t, !1)) && (await window.DiscordNative.settings.set(t, e)), (_ = e);
}
class u extends i.A {
    stores = new Map().set(r.A, () => {
        if (l) {
            let { enabled: e } = o({ location: "experimentStoreUpdate" });
            _ !== e && d();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            l || window.DiscordNative?.settings?.set == null || ((0, s.isDesktop)() && ((l = !0), await d()));
        },
        LOGOUT: () => {
            (l = !1), (_ = null);
        },
    };
}
let c = new u();
