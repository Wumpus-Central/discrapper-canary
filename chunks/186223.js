t.d(r, { Cj: () => d, sR: () => c, vK: () => o });
var i = t(465323),
    n = t(158045),
    l = t(580630),
    a = t(202541),
    s = t(375708);
function c(e) {
    let { targetSubscriptionPlan: r, isGift: t, shouldShowSavingsPercent: i, isEligibleForTrial: n } = e;
    return i && r.interval === a.WT.YEAR && !t && !n;
}
function o(e, r, t) {
    let a = (0, n.z_)(e, r, t);
    if (null == a) return null;
    let c = (0, i.LQ)(a.amount, a.currency);
    return null == c || c <= 0
        ? null
        : s.intl.format(s.t["zYz/ME"], { amount: (0, l.$g)(c, a.currency, { maximumFractionDigits: 0 }) });
}
function d(e, r, t) {
    let i = (0, n.XN)(e, r, t);
    return null == i ? null : s.intl.format(s.t.uVgNlo, { price: (0, l.$g)(i.amount, i.currency) });
}
