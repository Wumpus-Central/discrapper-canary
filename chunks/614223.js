n.d(t, {
    $g: function () {
        return l;
    },
    Kp: function () {
        return a;
    },
    nA: function () {
        return i;
    }
});
var r = n(74538),
    u = n(474936);
function a(e) {
    let { isTrial: t, isGift: n, selectedSkuId: r, startedPaymentFlowWithPaymentSources: a, inReverseTrial: l } = e;
    return !t && !n && !l && null != r && u.YQ.includes(r) && a;
}
function l(e, t, n) {
    let r = !1;
    return e && null != t && null == t.invoiceItems.find((e) => e.subscriptionPlanId === n.id) && (r = !0), r;
}
function i(e, t, n) {
    let a = null != t ? (0, r.Af)(t) : null,
        l = u.mn[e],
        i = null != n ? n : l;
    return null != a ? (i === a.planId && i === u.IW[e] ? (i = u.mn[e]) : i === a.planId && i === u.mn[e] ? (i = u.IW[e]) : (a.planId === u.Xh.PREMIUM_YEAR_TIER_0 || a.planId === u.Xh.PREMIUM_YEAR_TIER_1) && i === u.Xh.PREMIUM_MONTH_TIER_2 && (i = u.Xh.PREMIUM_YEAR_TIER_2)) : i === u.Xh.PREMIUM_YEAR_TIER_1 && (i = u.Xh.PREMIUM_MONTH_TIER_1), i;
}
