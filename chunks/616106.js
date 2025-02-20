n.d(t, { Z: () => h });
var r,
    i,
    a,
    o = n(913527),
    l = n.n(o),
    s = n(442837),
    c = n(570140),
    d = n(255078),
    u = n(594174),
    p = n(74538);
let m = !1;
class f extends (a = s.ZP.Store) {
    shouldShowReactivateNotice() {
        let e = u.default.getCurrentUser();
        return !(0, p.I5)(e) && m;
    }
}
(i = 'SubscriptionRemindersStore'),
    (r = 'displayName') in f
        ? Object.defineProperty(f, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[r] = i);
let h = new f(c.Z, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            var n;
            let e = d.Z.createFromServer(t);
            if (null == (0, p.Af)(e) || (null === (n = e.metadata) || void 0 === n ? void 0 : n.ended_at) == null) return;
            let r = l()(e.metadata.ended_at);
            l()().isBetween(r.clone().add(4, 'days'), r.clone().add(11, 'days')) && (m = !0);
        }
    }
});
