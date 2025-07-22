n.d(t, { U: () => _ });
var r = n(913527),
    i = n.n(r),
    a = n(442837),
    o = n(853872),
    s = n(509545),
    l = n(78839),
    c = n(74538),
    u = n(981631),
    d = n(231338);
function _() {
    let e = (0, a.e7)([l.Z], () => l.Z.getPremiumTypeSubscription()),
        t = (0, a.e7)([s.Z], () => (null != e && null != e.planIdFromItems ? s.Z.get(null == e ? void 0 : e.planIdFromItems) : null)),
        n = (0, a.e7)([o.Z], () => (null != e && null != e.paymentSourceId ? o.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
        r = null != n && d.Uk.has(n.type),
        _ = (null == e ? void 0 : e.status) === u.O0b.PAST_DUE ? i()().diff(i()(e.currentPeriodStart), 'days') : 0;
    return !!(null != e && null != t && (0, c.uZ)(t.id)) && r && _ >= 0 && _ <= (0, c.lY)(e).days && e.status === u.O0b.PAST_DUE && !e.isPurchasedExternally;
}
