n.d(t, { Z: () => h });
var r,
    i,
    a,
    l = n(913527),
    o = n.n(l),
    s = n(442837),
    c = n(570140),
    u = n(255078),
    d = n(594174),
    p = n(74538);
let m = !1;
class f extends (a = s.ZP.Store) {
    shouldShowReactivateNotice() {
        let e = d.default.getCurrentUser();
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
            let e = u.Z.createFromServer(t);
            if (null == (0, p.Af)(e) || (null == (n = e.metadata) ? void 0 : n.ended_at) == null) return;
            let r = o()(e.metadata.ended_at);
            o()().isBetween(r.clone().add(4, 'days'), r.clone().add(11, 'days')) && (m = !0);
        }
    }
});
