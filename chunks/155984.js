"use strict";
n.d(t, { l: () => _ });
var i = n(989349),
    r = n.n(i),
    s = n(17928),
    a = n(295405),
    o = n(97352),
    l = n(166403),
    u = n(428262),
    c = n(652215),
    d = n(818348);
function _() {
    let e = (0, s.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
        t = (0, s.bG)([o.A], () => (null != e && null != e.planIdFromItems ? o.A.get(e?.planIdFromItems) : null)),
        n = (0, s.bG)(
            [a.A],
            () => (null != e && null != e.paymentSourceId ? a.A.getPaymentSource(e.paymentSourceId) : null),
            [e],
        ),
        i = null != n && d.AD.has(n.type),
        _ = e?.status === c.Dmq.PAST_DUE ? r()().diff(r()(e.currentPeriodStart), "days") : 0;
    return (
        !!(null != e && null != t && (0, u.xq)(t.id)) &&
        i &&
        _ >= 0 &&
        _ <= (0, u.ji)(e).days &&
        e.status === c.Dmq.PAST_DUE &&
        !e.isPurchasedExternally
    );
}
