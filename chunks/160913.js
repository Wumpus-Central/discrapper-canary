n.d(t, { U: () => f });
var r = n(913527),
    i = n.n(r),
    o = n(442837),
    a = n(853872),
    s = n(509545),
    l = n(78839),
    c = n(74538),
    u = n(981631),
    d = n(231338);
function f() {
    let e = (0, o.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
        t = (0, o.e7)([s.Z], () => (null != e && null != e.planIdFromItems ? s.Z.get(null == e ? void 0 : e.planIdFromItems) : null)),
        n = (0, o.e7)([a.Z], () => (null != e && null != e.paymentSourceId ? a.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
        r = null != n && d.Uk.has(n.type),
        f = (null == e ? void 0 : e.status) === u.O0b.PAST_DUE ? i()().diff(i()(e.currentPeriodStart), 'days') : 0;
    return !!(null != e && null != t && (0, c.uZ)(t.id)) && r && f >= 0 && f <= (0, c.lY)(e).days && e.status === u.O0b.PAST_DUE && !e.isPurchasedExternally;
}
