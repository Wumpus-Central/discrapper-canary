i.d(t, { l: () => g });
var n = i(989349),
    s = i.n(n),
    l = i(17928),
    r = i(295405),
    a = i(97352),
    o = i(166403),
    u = i(428262),
    d = i(652215),
    c = i(818348);
function g() {
    let e = (0, l.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        t = (0, l.bG)([a.A], () => (null != e && null != e.planIdFromItems ? a.A.get(e?.planIdFromItems) : null)),
        i = (0, l.bG)(
            [r.A],
            () => (null != e && null != e.paymentSourceId ? r.A.getPaymentSource(e.paymentSourceId) : null),
            [e],
        ),
        n = null != i && c.AD.has(i.type),
        g = e?.status === d.Dmq.PAST_DUE ? s()().diff(s()(e.currentPeriodStart), "days") : 0;
    return (
        !!(null != e && null != t && (0, u.xq)(t.id)) &&
        n &&
        g >= 0 &&
        g <= (0, u.ji)(e).days &&
        e.status === d.Dmq.PAST_DUE &&
        !e.isPurchasedExternally
    );
}
