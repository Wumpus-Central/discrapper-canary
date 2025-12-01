n.d(t, { Z: () => m });
var r,
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(255078),
    c = n(594174),
    u = n(74538);
function d(e, t, n) {
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
let f = !1;
function p(e) {
    let { subscription: t } = e;
    if (null != t) {
        var n;
        let e = l.Z.createFromServer(t);
        if (null == (0, u.Af)(e) || (null == (n = e.metadata) ? void 0 : n.ended_at) == null) return;
        let r = a()(e.metadata.ended_at);
        a()().isBetween(r.clone().add(4, "days"), r.clone().add(11, "days")) && (f = !0);
    }
}
class _ extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.default);
    }
    shouldShowReactivateNotice() {
        let e = c.default.getCurrentUser();
        return !(0, u.I5)(e) && f;
    }
}
d(_, "displayName", "SubscriptionRemindersStore");
let m = new _(s.Z, { BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: p });
