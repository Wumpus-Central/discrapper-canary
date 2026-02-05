"use strict";
n.d(t, { A: () => _ });
var r = n(439372),
    i = n(217222),
    a = n(353835),
    s = n(723702),
    o = n(751496);
let l = !1,
    u = null;
async function c() {
    if ((0, s.isWindows)() && !a.A.getAppHardwareAccelerationEnabled() && window.DiscordNative?.settings?.set != null) {
        let { enabled: e } = (0, o.b)({ location: "updateSwitch" });
        await window.DiscordNative.settings.set("enableH264MFElectron", e), (u = e);
    }
}
class d extends r.A {
    stores = new Map().set(i.A, () => {
        if (l && !a.A.getAppHardwareAccelerationEnabled()) {
            let { enabled: e } = (0, o.b)({ location: "experimentStoreUpdate" });
            u !== e && c();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            l || window.DiscordNative?.settings?.set == null || ((0, s.isWindows)() && ((l = !0), await c()));
        },
        LOGOUT: () => {
            (l = !1), (u = null);
        },
    };
}
let _ = new d();
