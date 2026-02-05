"use strict";
n.d(t, { Nn: () => d, _V: () => c, pt: () => u });
var r = n(531260),
    i = n(615396),
    a = n(788868),
    s = n(88001),
    o = n(985018),
    l = n(519412);
let u = (e) => {
        let { fractionalPremiumInfo: t, selectedPlanId: n, planGroup: r, premiumSubscription: s, isGift: o } = e,
            l = null != s && null != n && (0, i.Ge)(s, n, r);
        return t.isFractionalPremiumActive && (null == s || l) && !o && null != n && a.JM.has(n);
    },
    c = (e) => {
        let { selectedPlanId: t, planGroup: n, premiumSubscription: i, isGift: a } = e,
            s = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 });
        return {
            showFractionalPremiumBanner: u({
                fractionalPremiumInfo: s,
                selectedPlanId: t,
                planGroup: n,
                premiumSubscription: i,
                isGift: a,
            }),
            fractionalPremiumInfo: s,
        };
    },
    d = () =>
        o.intl.formatToPlainString(l.default["h1i+H8"], { premiumGroupProductName: (0, s.DP)(), cooldownMonths: s.wl });
