"use strict";
n.d(t, { A: () => _ });
var r = n(439372),
    i = n(217222),
    s = n(353835),
    a = n(723702),
    o = n(532055);
let l = !1,
    u = null;
async function c() {
    if (
        (0, a.isWindows)() &&
        (window.DiscordNative?.settings?.set != null &&
            (await window.DiscordNative.settings.set("enableH264MFElectron", !0)),
        !s.A.getAppHardwareAccelerationEnabled() && window.DiscordNative?.settings?.set != null)
    ) {
        let { enabled: e } = (0, o.W)({ location: "updateSwitch" });
        await window.DiscordNative.settings.set("enableH264MFZeroCopy", e), (u = e);
    }
}
class d extends r.A {
    stores = new Map().set(i.A, () => {
        if (l && !s.A.getAppHardwareAccelerationEnabled()) {
            let { enabled: e } = (0, o.W)({ location: "experimentStoreUpdate" });
            u !== e && c();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            l || window.DiscordNative?.settings?.set == null || ((0, a.isWindows)() && ((l = !0), await c()));
        },
        LOGOUT: () => {
            (l = !1), (u = null);
        },
    };
}
let _ = new d();
