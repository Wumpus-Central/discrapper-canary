n.d(t, {
    $g: () => s,
    Kp: () => a,
    nA: () => o
});
var i = n(74538),
    r = n(474936);
function a(e) {
    let { isTrial: t, isGift: n, selectedSkuId: i, startedPaymentFlowWithPaymentSources: a, inReverseTrial: s } = e;
    return !t && !n && !s && null != i && r.YQ.includes(i) && a;
}
function s(e, t, n) {
    let i = !1;
    return e && null != t && null == t.invoiceItems.find((e) => e.subscriptionPlanId === n.id) && (i = !0), i;
}
function o(e, t, n) {
    let a = null != t ? (0, i.Af)(t) : null,
        s = r.mn[e],
        o = null != n ? n : s;
    return null != a ? (o === a.planId && o === r.IW[e] ? (o = r.mn[e]) : o === a.planId && o === r.mn[e] ? (o = r.IW[e]) : (a.planId === r.Xh.PREMIUM_YEAR_TIER_0 || a.planId === r.Xh.PREMIUM_YEAR_TIER_1) && o === r.Xh.PREMIUM_MONTH_TIER_2 && (o = r.Xh.PREMIUM_YEAR_TIER_2)) : o === r.Xh.PREMIUM_YEAR_TIER_1 && (o = r.Xh.PREMIUM_MONTH_TIER_1), o;
}
