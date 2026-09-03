n.d(t, { A: () => u, N: () => d });
var i = n(439372),
    r = n(174459),
    a = n(723702),
    s = n(19575),
    l = n(479975),
    o = n(652215);
async function d() {
    if (!a.isPlatformEmbedded) return !1;
    let e = await l.A.hasPermission();
    return s.Ay.shouldDisplayNotifications() && e;
}
class c extends i.A {
    actions = { POST_CONNECTION_OPEN: this.handlePostConnectionOpen };
    async handlePostConnectionOpen() {
        let e = await d();
        r.default.track(o.HAw.NOTIFICATION_PERMISSION_STATUS, { os_enabled: e });
    }
}
let u = new c();
