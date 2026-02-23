"use strict";
n.d(t, { A: () => d });
var r = n(439372),
    i = n(217222),
    s = n(723702),
    a = n(480862);
let o = !1,
    l = null;
async function u() {
    if ((0, s.isLinux)() && window.DiscordNative?.settings?.set != null) {
        let { enabled: e } = (0, a.n)({ location: "updateSwitch" });
        await window.DiscordNative.settings.set("enableLibOpenH264Electron", e), (l = e);
    }
}
class c extends r.A {
    stores = new Map().set(i.A, () => {
        if (o) {
            let { enabled: e } = (0, a.n)({ location: "experimentStoreUpdate" });
            l !== e && u();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            o || window.DiscordNative?.settings?.set == null || ((0, s.isLinux)() && ((o = !0), await u()));
        },
        LOGOUT: () => {
            (o = !1), (l = null);
        },
    };
}
let d = new c();
