r.d(n, {
    $g: function () {
        return s;
    },
    Kp: function () {
        return o;
    },
    nA: function () {
        return l;
    }
});
var i = r(74538),
    a = r(474936);
function o(e) {
    let { isTrial: n, isGift: r, selectedSkuId: i, startedPaymentFlowWithPaymentSources: o, inReverseTrial: s } = e;
    return !n && !r && !s && null != i && a.YQ.includes(i) && o;
}
function s(e, n, r) {
    let i = !1;
    return e && null != n && null == n.invoiceItems.find((e) => e.subscriptionPlanId === r.id) && (i = !0), i;
}
function l(e, n, r) {
    let o = null != n ? (0, i.Af)(n) : null,
        s = a.mn[e],
        l = null != r ? r : s;
    return null != o ? (l === o.planId && l === a.IW[e] ? (l = a.mn[e]) : l === o.planId && l === a.mn[e] ? (l = a.IW[e]) : (o.planId === a.Xh.PREMIUM_YEAR_TIER_0 || o.planId === a.Xh.PREMIUM_YEAR_TIER_1) && l === a.Xh.PREMIUM_MONTH_TIER_2 && (l = a.Xh.PREMIUM_YEAR_TIER_2)) : l === a.Xh.PREMIUM_YEAR_TIER_1 && (l = a.Xh.PREMIUM_MONTH_TIER_1), l;
}
