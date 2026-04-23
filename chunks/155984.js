"use strict";
n.d(t, { l: () => c });
var i = n(989349),
    r = n.n(i),
    s = n(17928),
    a = n(295405),
    o = n(97352),
    l = n(166403),
    d = n(927578),
    _ = n(652215),
    u = n(818348);
function c() {
    let e = (0, s.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
        t = (0, s.bG)([o.A], () => (null != e && null != e.planIdFromItems ? o.A.get(e?.planIdFromItems) : null)),
        n = (0, s.bG)(
            [a.A],
            () => (null != e && null != e.paymentSourceId ? a.A.getPaymentSource(e.paymentSourceId) : null),
            [e],
        ),
        i = null != n && u.AD.has(n.type),
        c = e?.status === _.Dmq.PAST_DUE ? r()().diff(r()(e.currentPeriodStart), "days") : 0;
    return (
        !!(null != e && null != t && (0, d.xq)(t.id)) &&
        i &&
        c >= 0 &&
        c <= (0, d.ji)(e).days &&
        e.status === _.Dmq.PAST_DUE &&
        !e.isPurchasedExternally
    );
}
