n.d(t, { U: () => f });
var i = n(913527),
    r = n.n(i),
    a = n(442837),
    s = n(853872),
    o = n(509545),
    l = n(78839),
    u = n(74538),
    c = n(981631),
    d = n(231338);
function f() {
    let e = (0, a.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
        t = (0, a.e7)([o.Z], () => (null != e && null != e.planIdFromItems ? o.Z.get(null == e ? void 0 : e.planIdFromItems) : null)),
        n = (0, a.e7)([s.Z], () => (null != e && null != e.paymentSourceId ? s.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
        i = null != n && d.Uk.has(n.type),
        f = (null == e ? void 0 : e.status) === c.O0b.PAST_DUE ? r()().diff(r()(e.currentPeriodStart), 'days') : 0;
    return !!(null != e && null != t && (0, u.uZ)(t.id)) && i && f >= 0 && f <= (0, u.lY)(e).days && e.status === c.O0b.PAST_DUE && !e.isPurchasedExternally;
}
