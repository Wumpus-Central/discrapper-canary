n.d(t, {
    $g: () => c,
    Fv: () => s,
    Kp: () => l,
    nA: () => u
});
var r = n(74538),
    i = n(987209),
    o = n(563132),
    a = n(474936);
function s(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, o.JL)(),
        { isGift: r } = (0, i.wD)();
    return l({
        isTrial: null != e && e,
        isGift: r,
        selectedSkuId: n,
        startedPaymentFlowWithPaymentSources: t.current
    });
}
function l(e) {
    let { isTrial: t, isGift: n, selectedSkuId: r, startedPaymentFlowWithPaymentSources: i, inReverseTrial: o } = e;
    return !t && !n && !o && null != r && a.YQ.includes(r) && i;
}
function c(e, t, n) {
    let r = !1;
    return e && null != t && null == t.invoiceItems.find((e) => e.subscriptionPlanId === n.id) && (r = !0), r;
}
function u(e, t, n) {
    let i = null != t ? (0, r.Af)(t) : null,
        o = a.mn[e],
        s = null != n ? n : o;
    return null != i ? (s === i.planId && s === a.IW[e] ? (s = a.mn[e]) : s === i.planId && s === a.mn[e] ? (s = a.IW[e]) : (i.planId === a.Xh.PREMIUM_YEAR_TIER_0 || i.planId === a.Xh.PREMIUM_YEAR_TIER_1) && s === a.Xh.PREMIUM_MONTH_TIER_2 && (s = a.Xh.PREMIUM_YEAR_TIER_2)) : s === a.Xh.PREMIUM_YEAR_TIER_1 && (s = a.Xh.PREMIUM_MONTH_TIER_1), s;
}
