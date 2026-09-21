r.d(t, { Cj: () => d, sR: () => o, vK: () => c });
var i = r(465323),
    n = r(158045),
    l = r(580630),
    s = r(202541),
    a = r(375708);
function o(e) {
    let { targetSubscriptionPlan: t, isGift: r, shouldShowSavingsPercent: i, isEligibleForTrial: n } = e;
    return i && t.interval === s.WT.YEAR && !r && !n;
}
function c(e, t, r) {
    let s = (0, n.z_)(e, t, r);
    if (null == s) return null;
    let o = (0, i.LQ)(s.amount, s.currency);
    return null == o || o <= 0
        ? null
        : a.intl.format(a.t["zYz/ME"], { amount: (0, l.$g)(o, s.currency, { maximumFractionDigits: 0 }) });
}
function d(e, t, r) {
    let i = (0, n.XN)(e, t, r);
    return null == i ? null : a.intl.format(a.t.uVgNlo, { price: (0, l.$g)(i.amount, i.currency) });
}
