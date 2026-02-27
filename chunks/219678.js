"use strict";
n.d(t, { A: () => p });
var r = n(439372),
    i = n(217222),
    s = n(353835),
    a = n(723702),
    o = n(751496),
    l = n(532055);
let u = !1,
    c = null,
    d = null;
async function _() {
    if ((0, a.isWindows)() && !s.A.getAppHardwareAccelerationEnabled() && window.DiscordNative?.settings?.set != null) {
        let { enabled: e } = (0, o.b)({ location: "updateSwitch" });
        await window.DiscordNative.settings.set("enableH264MFElectron", e), (c = e);
        let { enabled: t } = (0, l.W)({ location: "updateSwitch" });
        await window.DiscordNative.settings.set("enableH264MFZeroCopy", t), (d = t);
    }
}
class f extends r.A {
    stores = new Map().set(i.A, () => {
        if (u && !s.A.getAppHardwareAccelerationEnabled()) {
            let { enabled: e } = (0, o.b)({ location: "experimentStoreUpdate" }),
                { enabled: t } = (0, l.W)({ location: "experimentStoreUpdate" });
            (c !== e || d !== t) && _();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            u || window.DiscordNative?.settings?.set == null || ((0, a.isWindows)() && ((u = !0), await _()));
        },
        LOGOUT: () => {
            (u = !1), (c = null), (d = null);
        },
    };
}
let p = new f();
