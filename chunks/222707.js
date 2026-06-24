"use strict";
n.d(t, { Nn: () => d, _V: () => c, pt: () => u });
var i = n(531260),
    r = n(615396),
    s = n(788868),
    a = n(88001),
    o = n(375708),
    l = n(466919);
function u(e) {
    let { fractionalPremiumInfo: t, selectedPlanId: n, planGroup: i, premiumSubscription: a, isGift: o } = e,
        l = null != a && null != n && (0, r.Ge)(a, n, i);
    return t.isFractionalPremiumActive && (null == a || l) && !o && null != n && s.JM.has(n);
}
function c(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            premiumSubscription: r,
            isGift: s,
            fractionalPremiumInfoArgs: a = {
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !1,
            },
        } = e,
        o = (0, i.A)(a);
    return {
        showFractionalPremiumBanner: u({
            fractionalPremiumInfo: o,
            selectedPlanId: t,
            planGroup: n,
            premiumSubscription: r,
            isGift: s,
        }),
        fractionalPremiumInfo: o,
    };
}
function d() {
    return o.intl.formatToPlainString(l.default["h1i+H8"], {
        premiumGroupProductName: (0, a.DP)(),
        cooldownMonths: a.wl,
    });
}
