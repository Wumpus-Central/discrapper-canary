"use strict";
n.d(t, { l: () => _ });
var r = n(989349),
    i = n.n(r),
    a = n(311907),
    s = n(295405),
    o = n(97352),
    l = n(166403),
    u = n(927578),
    c = n(652215),
    d = n(818348);
function _() {
    let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
        t = (0, a.bG)([o.A], () => (null != e && null != e.planIdFromItems ? o.A.get(e?.planIdFromItems) : null)),
        n = (0, a.bG)(
            [s.A],
            () => (null != e && null != e.paymentSourceId ? s.A.getPaymentSource(e.paymentSourceId) : null),
            [e],
        ),
        r = null != n && d.AD.has(n.type),
        _ = e?.status === c.Dmq.PAST_DUE ? i()().diff(i()(e.currentPeriodStart), "days") : 0;
    return (
        !!(null != e && null != t && (0, u.xq)(t.id)) &&
        r &&
        _ >= 0 &&
        _ <= (0, u.ji)(e).days &&
        e.status === c.Dmq.PAST_DUE &&
        !e.isPurchasedExternally
    );
}
