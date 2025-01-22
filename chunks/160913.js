r.d(n, {
    U: function () {
        return p;
    }
});
var i = r(913527),
    a = r.n(i),
    o = r(442837),
    s = r(853872),
    l = r(509545),
    u = r(78839),
    c = r(74538),
    d = r(981631),
    f = r(231338);
function p() {
    let e = (0, o.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        n = (0, o.e7)([l.Z], () => (null != e && null != e.planIdFromItems ? l.Z.get(null == e ? void 0 : e.planIdFromItems) : null)),
        r = (0, o.e7)([s.Z], () => (null != e && null != e.paymentSourceId ? s.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
        i = null != r && f.Uk.has(r.type),
        p = (null == e ? void 0 : e.status) === d.O0b.PAST_DUE ? a()().diff(a()(e.currentPeriodStart), 'days') : 0;
    return !!(null != e && null != n && (0, c.uZ)(n.id)) && i && p >= 0 && p <= (0, c.lY)(e).days && e.status === d.O0b.PAST_DUE && !e.isPurchasedExternally;
}
