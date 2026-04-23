"use strict";
n.d(t, { A: () => d, N: () => u });
var r = n(439372),
    i = n(954571),
    s = n(723702),
    a = n(837921),
    o = n(970061),
    l = n(652215);
async function u() {
    if (!s.isPlatformEmbedded) return !1;
    let e = await o.A.hasPermission();
    return a.Ay.shouldDisplayNotifications() && e;
}
class c extends r.A {
    actions = { POST_CONNECTION_OPEN: this.handlePostConnectionOpen };
    async handlePostConnectionOpen() {
        let e = await u();
        i.default.track(l.HAw.NOTIFICATION_PERMISSION_STATUS, { os_enabled: e });
    }
}
let d = new c();
