"use strict";
n.d(t, { Nn: () => d, _V: () => c, pt: () => u });
var r = n(531260),
    i = n(615396),
    s = n(788868),
    a = n(88001),
    o = n(985018),
    l = n(519412);
let u = (e) => {
        let { fractionalPremiumInfo: t, selectedPlanId: n, planGroup: r, premiumSubscription: a, isGift: o } = e,
            l = null != a && null != n && (0, i.Ge)(a, n, r);
        return t.isFractionalPremiumActive && (null == a || l) && !o && null != n && s.JM.has(n);
    },
    c = (e) => {
        let {
                selectedPlanId: t,
                planGroup: n,
                premiumSubscription: i,
                isGift: s,
                fractionalPremiumInfoArgs: a = {
                    forceFetch: !1,
                    excludeReverseTrial: !1,
                    excludeReverseTrialFromCountdown: !1,
                },
            } = e,
            o = (0, r.A)(a);
        return {
            showFractionalPremiumBanner: u({
                fractionalPremiumInfo: o,
                selectedPlanId: t,
                planGroup: n,
                premiumSubscription: i,
                isGift: s,
            }),
            fractionalPremiumInfo: o,
        };
    },
    d = () =>
        o.intl.formatToPlainString(l.default["h1i+H8"], { premiumGroupProductName: (0, a.DP)(), cooldownMonths: a.wl });
