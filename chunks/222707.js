n.d(t, { Nn: () => d, _V: () => c, pt: () => u });
var l = n(531260),
    i = n(615396),
    r = n(202541),
    a = n(88001),
    s = n(375708),
    o = n(466919);
function u(e) {
    let { fractionalPremiumInfo: t, selectedPlanId: n, planGroup: l, premiumSubscription: a, isGift: s } = e,
        o = null != a && null != n && (0, i.Ge)(a, n, l);
    return t.isFractionalPremiumActive && (null == a || o) && !s && null != n && r.JM.has(n);
}
function c(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            premiumSubscription: i,
            isGift: r,
            fractionalPremiumInfoArgs: a = {
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !1,
            },
        } = e,
        s = (0, l.A)(a);
    return {
        showFractionalPremiumBanner: u({
            fractionalPremiumInfo: s,
            selectedPlanId: t,
            planGroup: n,
            premiumSubscription: i,
            isGift: r,
        }),
        fractionalPremiumInfo: s,
    };
}
function d() {
    return s.intl.formatToPlainString(o.default["h1i+H8"], {
        premiumGroupProductName: (0, a.DP)(),
        cooldownMonths: a.wl,
    });
}
