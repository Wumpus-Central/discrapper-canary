r.d(t, { Cj: () => c, sR: () => o, vK: () => u });
var n = r(465323),
    i = r(158045),
    l = r(580630),
    a = r(202541),
    s = r(375708);
function o(e) {
    let { targetSubscriptionPlan: t, isGift: r, shouldShowSavingsPercent: n, isEligibleForTrial: i } = e;
    return n && t.interval === a.WT.YEAR && !r && !i;
}
function u(e, t, r) {
    let a = (0, i.z_)(e, t, r);
    if (null == a) return null;
    let o = (0, n.LQ)(a.amount, a.currency);
    return null == o || o <= 0
        ? null
        : s.intl.format(s.t["zYz/ME"], { amount: (0, l.$g)(o, a.currency, { maximumFractionDigits: 0 }) });
}
function c(e, t, r) {
    let n = (0, i.XN)(e, t, r);
    return null == n ? null : s.intl.format(s.t.uVgNlo, { price: (0, l.$g)(n.amount, n.currency) });
}
