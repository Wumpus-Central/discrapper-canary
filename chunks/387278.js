t.d(r, { Cj: () => d, sR: () => o, vK: () => c });
var n = t(465323),
    i = t(158045),
    l = t(580630),
    a = t(202541),
    s = t(375708);
function o(e) {
    let { targetSubscriptionPlan: r, isGift: t, shouldShowSavingsPercent: n, isEligibleForTrial: i } = e;
    return n && r.interval === a.WT.YEAR && !t && !i;
}
function c(e, r, t) {
    let a = (0, i.z_)(e, r, t);
    if (null == a) return null;
    let o = (0, n.LQ)(a.amount, a.currency);
    return null == o || o <= 0
        ? null
        : s.intl.format(s.t["zYz/ME"], { amount: (0, l.$g)(o, a.currency, { maximumFractionDigits: 0 }) });
}
function d(e, r, t) {
    let n = (0, i.XN)(e, r, t);
    return null == n ? null : s.intl.format(s.t.uVgNlo, { price: (0, l.$g)(n.amount, n.currency) });
}
