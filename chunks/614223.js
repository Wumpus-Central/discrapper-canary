n.d(t, {
    $g: () => o,
    Kp: () => a,
    nA: () => s
});
var r = n(74538),
    i = n(474936);
function a(e) {
    let { isTrial: t, isGift: n, selectedSkuId: r, startedPaymentFlowWithPaymentSources: a, inReverseTrial: o } = e;
    return !t && !n && !o && null != r && i.YQ.includes(r) && a;
}
function o(e, t, n) {
    let r = !1;
    return e && null != t && null == t.invoiceItems.find((e) => e.subscriptionPlanId === n.id) && (r = !0), r;
}
function s(e, t, n) {
    let a = null != t ? (0, r.Af)(t) : null,
        o = i.mn[e],
        s = null != n ? n : o;
    return null != a ? (s === a.planId && s === i.IW[e] ? (s = i.mn[e]) : s === a.planId && s === i.mn[e] ? (s = i.IW[e]) : (a.planId === i.Xh.PREMIUM_YEAR_TIER_0 || a.planId === i.Xh.PREMIUM_YEAR_TIER_1) && s === i.Xh.PREMIUM_MONTH_TIER_2 && (s = i.Xh.PREMIUM_YEAR_TIER_2)) : s === i.Xh.PREMIUM_YEAR_TIER_1 && (s = i.Xh.PREMIUM_MONTH_TIER_1), s;
}
