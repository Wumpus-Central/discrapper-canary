"use strict";
n.d(t, { A: () => u, N: () => d });
var i = n(439372),
    r = n(954571),
    s = n(723702),
    a = n(19575),
    o = n(756876),
    l = n(652215);
async function d() {
    if (!s.isPlatformEmbedded) return !1;
    let e = await o.A.hasPermission();
    return a.Ay.shouldDisplayNotifications() && e;
}
class _ extends i.A {
    actions = { POST_CONNECTION_OPEN: this.handlePostConnectionOpen };
    async handlePostConnectionOpen() {
        let e = await d();
        r.default.track(l.HAw.NOTIFICATION_PERMISSION_STATUS, { os_enabled: e });
    }
}
let u = new _();
