n.d(t, {
    $g: () => a,
    Kp: () => o,
    nA: () => s
});
var r = n(74538),
    i = n(474936);
function o(e) {
    let { isTrial: t, isGift: n, selectedSkuId: r, startedPaymentFlowWithPaymentSources: o, inReverseTrial: a } = e;
    return !t && !n && !a && null != r && i.YQ.includes(r) && o;
}
function a(e, t, n) {
    let r = !1;
    return e && null != t && null == t.invoiceItems.find((e) => e.subscriptionPlanId === n.id) && (r = !0), r;
}
function s(e, t, n) {
    let o = null != t ? (0, r.Af)(t) : null,
        a = i.mn[e],
        s = null != n ? n : a;
    return null != o ? (s === o.planId && s === i.IW[e] ? (s = i.mn[e]) : s === o.planId && s === i.mn[e] ? (s = i.IW[e]) : (o.planId === i.Xh.PREMIUM_YEAR_TIER_0 || o.planId === i.Xh.PREMIUM_YEAR_TIER_1) && s === i.Xh.PREMIUM_MONTH_TIER_2 && (s = i.Xh.PREMIUM_YEAR_TIER_2)) : s === i.Xh.PREMIUM_YEAR_TIER_1 && (s = i.Xh.PREMIUM_MONTH_TIER_1), s;
}
