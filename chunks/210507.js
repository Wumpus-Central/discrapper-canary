n.d(t, {
    Nn: () => d,
    _V: () => u,
    pt: () => c,
});
var r = n(531260),
    i = n(615396),
    a = n(788868),
    o = n(88001),
    s = n(985018),
    l = n(519412);
let c = (e) => {
        let { fractionalPremiumInfo: t, selectedPlanId: n, planGroup: r, premiumSubscription: o, isGift: s } = e,
            l = null != o && null != n && (0, i.Ge)(o, n, r);
        return t.isFractionalPremiumActive && (null == o || l) && !s && null != n && a.JM.has(n);
    },
    u = (e) => {
        let { selectedPlanId: t, planGroup: n, premiumSubscription: i, isGift: a } = e,
            o = (0, r.A)({
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            });
        return {
            showFractionalPremiumBanner: c({
                fractionalPremiumInfo: o,
                selectedPlanId: t,
                planGroup: n,
                premiumSubscription: i,
                isGift: a,
            }),
            fractionalPremiumInfo: o,
        };
    },
    d = () =>
        s.intl.formatToPlainString(l.default["h1i+H8"], {
            premiumGroupProductName: (0, o.DP)(),
            cooldownMonths: o.wl,
        });
