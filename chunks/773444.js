var l = n(531260),
    i = n(615396),
    r = n(682901),
    a = n(88001),
    s = n(792996),
    o = n(107198);
function u(e) {
    let { fractionalPremiumInfo: t, selectedPlanId: n, planGroup: l, premiumSubscription: a, isGift: s } = e;
    if (s || null == n) return !1;
    let o = null == a || (0, i.Ge)(a, n, l);
    return t.isFractionalPremiumActive && o && r.JM.has(n);
}
n.d(
    t,
    {},
    {
        Nn: function () {
            return s.intl.formatToPlainString(o.default["h1i+H8"], {
                premiumGroupProductName: (0, a.DP)(),
                cooldownMonths: 12,
            });
        },
        _V: function (e) {
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
        },
        pt: u,
    },
);
