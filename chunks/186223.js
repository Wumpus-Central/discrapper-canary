r.d(t, { Cj: () => d, sR: () => c, vK: () => u });
var s = r(465323),
    i = r(158045),
    l = r(580630),
    n = r(202541),
    a = r(375708);
function c(e) {
    let { targetSubscriptionPlan: t, isGift: r, shouldShowSavingsPercent: s, isEligibleForTrial: i } = e;
    return s && t.interval === n.WT.YEAR && !r && !i;
}
function u(e, t, r) {
    let n = (0, i.z_)(e, t, r);
    if (null == n) return null;
    let c = (0, s.LQ)(n.amount, n.currency);
    return null == c || c <= 0
        ? null
        : a.intl.format(a.t["zYz/ME"], { amount: (0, l.$g)(c, n.currency, { maximumFractionDigits: 0 }) });
}
function d(e, t, r) {
    let s = (0, i.XN)(e, t, r);
    return null == s ? null : a.intl.format(a.t.uVgNlo, { price: (0, l.$g)(s.amount, s.currency) });
}
