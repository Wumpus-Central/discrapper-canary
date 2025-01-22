var i,
    r,
    l,
    a,
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    u = n(570140),
    d = n(255078),
    m = n(594174),
    h = n(74538);
let f = !1;
class p extends (a = c.ZP.Store) {
    shouldShowReactivateNotice() {
        let e = m.default.getCurrentUser();
        return !(0, h.I5)(e) && f;
    }
}
(l = 'SubscriptionRemindersStore'),
    (r = 'displayName') in (i = p)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new p(u.Z, {
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
            let { subscription: t } = e;
            if (null != t) {
                var n;
                let e = d.Z.createFromServer(t);
                if (null == (0, h.Af)(e) || (null === (n = e.metadata) || void 0 === n ? void 0 : n.ended_at) == null) return;
                let i = s()(e.metadata.ended_at);
                s()().isBetween(i.clone().add(4, 'days'), i.clone().add(11, 'days')) && (f = !0);
            }
        }
    }));
