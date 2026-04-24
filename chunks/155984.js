n.d(t, { l: () => p });
var l = n(989349),
    a = n.n(l),
    i = n(17928),
    r = n(295405),
    s = n(97352),
    o = n(166403),
    u = n(927578),
    c = n(652215),
    d = n(818348);
function p() {
    let e = (0, i.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        t = (0, i.bG)([s.A], () => (null != e && null != e.planIdFromItems ? s.A.get(e?.planIdFromItems) : null)),
        n = (0, i.bG)(
            [r.A],
            () => (null != e && null != e.paymentSourceId ? r.A.getPaymentSource(e.paymentSourceId) : null),
            [e],
        ),
        l = null != n && d.AD.has(n.type),
        p = e?.status === c.Dmq.PAST_DUE ? a()().diff(a()(e.currentPeriodStart), "days") : 0;
    return (
        !!(null != e && null != t && (0, u.xq)(t.id)) &&
        l &&
        p >= 0 &&
        p <= (0, u.ji)(e).days &&
        e.status === c.Dmq.PAST_DUE &&
        !e.isPurchasedExternally
    );
}
