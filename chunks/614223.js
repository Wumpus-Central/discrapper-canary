n.d(t, {
    $g: () => c,
    Fv: () => s,
    Kp: () => l,
    nA: () => u
});
var r = n(74538),
    i = n(987209),
    a = n(563132),
    o = n(474936);
function s(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, a.JL)(),
        { isGift: r } = (0, i.wD)();
    return l({
        isTrial: null != e && e,
        isGift: r,
        selectedSkuId: n,
        startedPaymentFlowWithPaymentSources: t.current
    });
}
function l(e) {
    let { isTrial: t, isGift: n, selectedSkuId: r, startedPaymentFlowWithPaymentSources: i, inReverseTrial: a } = e;
    return !t && !n && !a && null != r && o.YQ.includes(r) && i;
}
function c(e, t, n) {
    let r = !1;
    return (e && null != t && null == t.invoiceItems.find((e) => e.subscriptionPlanId === n.id) && (r = !0), r);
}
function u(e, t, n) {
    let i = null != t ? (0, r.Af)(t) : null,
        a = o.mn[e],
        s = null != n ? n : a;
    return (null != i ? (s === i.planId && s === o.IW[e] ? (s = o.mn[e]) : s === i.planId && s === o.mn[e] ? (s = o.IW[e]) : (i.planId === o.Xh.PREMIUM_YEAR_TIER_0 || i.planId === o.Xh.PREMIUM_YEAR_TIER_1) && s === o.Xh.PREMIUM_MONTH_TIER_2 && (s = o.Xh.PREMIUM_YEAR_TIER_2)) : s === o.Xh.PREMIUM_YEAR_TIER_1 && (s = o.Xh.PREMIUM_MONTH_TIER_1), s);
}
