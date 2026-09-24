r.d(t, { Cj: () => c, sR: () => u, vK: () => o });
var i = r(465323),
    n = r(158045),
    s = r(580630),
    l = r(202541),
    a = r(375708);
function u(e) {
    let { targetSubscriptionPlan: t, isGift: r, shouldShowSavingsPercent: i, isEligibleForTrial: n } = e;
    return i && t.interval === l.WT.YEAR && !r && !n;
}
function o(e, t, r) {
    let l = (0, n.z_)(e, t, r);
    if (null == l) return null;
    let u = (0, i.LQ)(l.amount, l.currency);
    return null == u || u <= 0
        ? null
        : a.intl.format(a.t["zYz/ME"], { amount: (0, s.$g)(u, l.currency, { maximumFractionDigits: 0 }) });
}
function c(e, t, r) {
    let i = (0, n.XN)(e, t, r);
    return null == i ? null : a.intl.format(a.t.uVgNlo, { price: (0, s.$g)(i.amount, i.currency) });
}
