n.d(t, {
    A: () => f,
    N: () => u,
}),
    n(896048);
var r = n(439372),
    i = n(954571),
    a = n(723702),
    s = n(837921),
    o = n(970061),
    l = n(652215);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
async function u() {
    if (!a.isPlatformEmbedded) return !1;
    let e = await o.A.hasPermission();
    return s.Ay.shouldDisplayNotifications() && e;
}
class d extends r.A {
    async handlePostConnectionOpen() {
        let e = await u();
        i.default.track(l.HAw.NOTIFICATION_PERMISSION_STATUS, { os_enabled: e });
    }
    constructor(...e) {
        super(...e), c(this, "actions", { POST_CONNECTION_OPEN: this.handlePostConnectionOpen });
    }
}
let f = new d();
