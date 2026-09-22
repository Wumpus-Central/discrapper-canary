r.d(t, { Cj: () => c, sR: () => o, vK: () => u });
var n = r(465323),
    i = r(158045),
    l = r(580630),
    s = r(202541),
    a = r(375708);
function o(e) {
    let { targetSubscriptionPlan: t, isGift: r, shouldShowSavingsPercent: n, isEligibleForTrial: i } = e;
    return n && t.interval === s.WT.YEAR && !r && !i;
}
function u(e, t, r) {
    let s = (0, i.z_)(e, t, r);
    if (null == s) return null;
    let o = (0, n.LQ)(s.amount, s.currency);
    return null == o || o <= 0
        ? null
        : a.intl.format(a.t["zYz/ME"], { amount: (0, l.$g)(o, s.currency, { maximumFractionDigits: 0 }) });
}
function c(e, t, r) {
    let n = (0, i.XN)(e, t, r);
    return null == n ? null : a.intl.format(a.t.uVgNlo, { price: (0, l.$g)(n.amount, n.currency) });
}
