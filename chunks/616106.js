n.d(t, { Z: () => f });
var r,
    i,
    l = n(913527),
    o = n.n(l),
    a = n(442837),
    s = n(570140),
    c = n(255078),
    u = n(594174),
    d = n(74538);
let p = !1;
class m extends (i = a.ZP.Store) {
    shouldShowReactivateNotice() {
        let e = u.default.getCurrentUser();
        return !(0, d.I5)(e) && p;
    }
}
(r = "displayName") in m
    ? Object.defineProperty(m, r, {
          value: "SubscriptionRemindersStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (m[r] = "SubscriptionRemindersStore");
let f = new m(s.Z, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            var n;
            let e = c.Z.createFromServer(t);
            if (null == (0, d.Af)(e) || (null == (n = e.metadata) ? void 0 : n.ended_at) == null) return;
            let r = o()(e.metadata.ended_at);
            o()().isBetween(r.clone().add(4, "days"), r.clone().add(11, "days")) && (p = !0);
        }
    },
});
