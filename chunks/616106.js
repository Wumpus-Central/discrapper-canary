n.d(t, { Z: () => p });
var i,
    l,
    a,
    r = n(913527),
    s = n.n(r),
    o = n(442837),
    c = n(570140),
    d = n(255078),
    u = n(594174),
    m = n(74538);
let _ = !1;
class h extends (a = o.ZP.Store) {
    shouldShowReactivateNotice() {
        let e = u.default.getCurrentUser();
        return !(0, m.I5)(e) && _;
    }
}
(l = 'SubscriptionRemindersStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = l);
let p = new h(c.Z, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            var n;
            let e = d.Z.createFromServer(t);
            if (null == (0, m.Af)(e) || (null === (n = e.metadata) || void 0 === n ? void 0 : n.ended_at) == null) return;
            let i = s()(e.metadata.ended_at);
            s()().isBetween(i.clone().add(4, 'days'), i.clone().add(11, 'days')) && (_ = !0);
        }
    }
});
