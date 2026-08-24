n.d(t, { l: () => g });
var i = n(536637),
    l = n.n(i),
    s = n(17928),
    r = n(295405),
    a = n(97352),
    o = n(166403),
    u = n(158045),
    d = n(652215),
    c = n(818348);
function g() {
    let e = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        t = (0, s.bG)([a.A], () => (null != e && null != e.planIdFromItems ? a.A.get(e?.planIdFromItems) : null)),
        n = (0, s.bG)(
            [r.A],
            () => (null != e && null != e.paymentSourceId ? r.A.getPaymentSource(e.paymentSourceId) : null),
            [e],
        ),
        i = null != n && c.AD.has(n.type),
        g = e?.status === d.Dmq.PAST_DUE ? l()().diff(l()(e.currentPeriodStart), "days") : 0;
    return (
        !!(null != e && null != t && (0, u.xq)(t.id)) &&
        i &&
        g >= 0 &&
        g <= (0, u.ji)(e).days &&
        e.status === d.Dmq.PAST_DUE &&
        !e.isPurchasedExternally
    );
}
