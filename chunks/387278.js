t.d(r, { Cj: () => u, sR: () => c, vK: () => o });
var n = t(465323),
    l = t(24482),
    i = t(580630),
    s = t(202541),
    a = t(105292);
function c(e) {
    let { targetSubscriptionPlan: r, isGift: t, shouldShowSavingsPercent: n, isEligibleForTrial: l } = e;
    return n && r.interval === s.WT.YEAR && !t && !l;
}
function o(e, r, t) {
    let s = (0, l.z_)(e, r, t);
    if (null == s) return null;
    let c = (0, n.LQ)(s.amount, s.currency);
    return null == c || c <= 0
        ? null
        : a.intl.format(a.t["zYz/ME"], { amount: (0, i.$g)(c, s.currency, { maximumFractionDigits: 0 }) });
}
function u(e, r, t) {
    let n = (0, l.XN)(e, r, t);
    return null == n ? null : a.intl.format(a.t.uVgNlo, { price: (0, i.$g)(n.amount, n.currency) });
}
