n.d(t, { A: () => p });
var i = n(439372),
    r = n(933958),
    a = n(626584),
    s = n(616356),
    l = n(763827),
    o = n(723702),
    d = n(19575),
    c = n(198052);
let u = new a.A("CallDisplaySleepManager"),
    _ = null,
    E = !1,
    A = Promise.resolve();
function h() {
    A = A.then(async () => {
        if (E) null == _ && (_ = (await d.Ay.blockDisplaySleep()) ?? null);
        else {
            if (null == _) return;
            let e = _;
            ((_ = null), d.Ay.unblockDisplaySleep(e));
        }
    }).catch((e) => {
        u.error("Failed to update the display sleep blocker", e);
    });
}
function f() {
    let e,
        t =
            null != (e = l.A.getChannelId()) &&
            (c.A.getVideoParticipants(e).length > 0 ||
                (c.A.getStreamParticipants(e).length > 0 && s.A.getAllActiveStreamsForChannel(e).length > 0) ||
                (c.A.getActivityParticipants(e).length > 0 && null != r.Ay.getSelfEmbeddedActivityForChannel(e)));
    t !== E && ((E = t), h());
}
class I extends i.A {
    _initialize() {
        !o.isPlatformEmbedded ||
            __OVERLAY__ ||
            (this.stores = new Map().set(l.A, f).set(c.A, f).set(s.A, f).set(r.Ay, f));
    }
    _terminate() {
        ((E = !1), h());
    }
}
let p = new I();
