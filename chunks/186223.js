"use strict";
n.d(t, { cg: () => d, is: () => u, ou: () => c });
var i = n(465323),
    r = n(428262),
    s = n(580630),
    a = n(986883),
    o = n(788868),
    l = n(375708);
function u(e) {
    let { treatment: t, targetSubscriptionPlan: n, isGift: i, shouldShowSavingsPercent: r, isEligibleForTrial: s } = e;
    return t !== a.qS.CONTROL && r && n.interval === o.WT.YEAR && !i && !s;
}
function c(e, t, n, o) {
    switch (e) {
        case a.qS.AMOUNT_OFF:
        case a.qS.AMOUNT_OFF_WITH_MONTHLY_RATE: {
            let e = (0, r.z_)(t, n, o);
            if (null == e) return null;
            let a = (0, i.LQ)(e.amount, e.currency);
            if (null == a || a <= 0) return null;
            return l.intl.format(l.t["zYz/ME"], { amount: (0, s.$g)(a, e.currency, { maximumFractionDigits: 0 }) });
        }
        case a.qS.SAVE_MONTHS: {
            let e = (0, r.qi)(t, n, o);
            if (null == e) return null;
            return l.intl.format(l.t.gSNp1n, { months: e });
        }
        case a.qS.BEST_VALUE:
            return l.intl.string(l.t["+rZsly"]);
        default:
            return null;
    }
}
function d(e, t, n) {
    let i = (0, r.XN)(e, t, n);
    return null == i ? null : l.intl.format(l.t.uVgNlo, { price: (0, s.$g)(i.amount, i.currency) });
}
