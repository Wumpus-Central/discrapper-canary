t.d(r, { Cj: () => u, sR: () => c, vK: () => o });
var n = t(465323),
    l = t(158045),
    i = t(580630),
    a = t(202541),
    s = t(105292);
function c(e) {
    let { targetSubscriptionPlan: r, isGift: t, shouldShowSavingsPercent: n, isEligibleForTrial: l } = e;
    return n && r.interval === a.WT.YEAR && !t && !l;
}
function o(e, r, t) {
    let a = (0, l.z_)(e, r, t);
    if (null == a) return null;
    let c = (0, n.LQ)(a.amount, a.currency);
    return null == c || c <= 0
        ? null
        : s.intl.format(s.t["zYz/ME"], { amount: (0, i.$g)(c, a.currency, { maximumFractionDigits: 0 }) });
}
function u(e, r, t) {
    let n = (0, l.XN)(e, r, t);
    return null == n ? null : s.intl.format(s.t.uVgNlo, { price: (0, i.$g)(n.amount, n.currency) });
}
