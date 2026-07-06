n.d(t, { cg: () => d, is: () => u, ou: () => c });
var l = n(465323),
    r = n(428262),
    i = n(580630),
    a = n(986883),
    o = n(202541),
    s = n(375708);
function u(e) {
    let { treatment: t, targetSubscriptionPlan: n, isGift: l, shouldShowSavingsPercent: r, isEligibleForTrial: i } = e;
    return t !== a.qS.CONTROL && r && n.interval === o.WT.YEAR && !l && !i;
}
function c(e, t, n, o) {
    switch (e) {
        case a.qS.AMOUNT_OFF:
        case a.qS.AMOUNT_OFF_WITH_MONTHLY_RATE: {
            let e = (0, r.z_)(t, n, o);
            if (null == e) return null;
            let a = (0, l.LQ)(e.amount, e.currency);
            if (null == a || a <= 0) return null;
            return s.intl.format(s.t["zYz/ME"], { amount: (0, i.$g)(a, e.currency, { maximumFractionDigits: 0 }) });
        }
        case a.qS.SAVE_MONTHS: {
            let e = (0, r.qi)(t, n, o);
            if (null == e) return null;
            return s.intl.format(s.t.gSNp1n, { months: e });
        }
        case a.qS.BEST_VALUE:
            return s.intl.string(s.t["+rZsly"]);
        default:
            return null;
    }
}
function d(e, t, n) {
    let l = (0, r.XN)(e, t, n);
    return null == l ? null : s.intl.format(s.t.uVgNlo, { price: (0, i.$g)(l.amount, l.currency) });
}
