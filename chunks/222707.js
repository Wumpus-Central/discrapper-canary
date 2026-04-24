n.d(t, { Nn: () => d, _V: () => c, pt: () => u });
var l = n(531260),
    a = n(615396),
    i = n(788868),
    r = n(88001),
    s = n(985018),
    o = n(466919);
let u = (e) => {
        let { fractionalPremiumInfo: t, selectedPlanId: n, planGroup: l, premiumSubscription: r, isGift: s } = e,
            o = null != r && null != n && (0, a.Ge)(r, n, l);
        return t.isFractionalPremiumActive && (null == r || o) && !s && null != n && i.JM.has(n);
    },
    c = (e) => {
        let {
                selectedPlanId: t,
                planGroup: n,
                premiumSubscription: a,
                isGift: i,
                fractionalPremiumInfoArgs: r = {
                    forceFetch: !1,
                    excludeReverseTrial: !1,
                    excludeReverseTrialFromCountdown: !1,
                },
            } = e,
            s = (0, l.A)(r);
        return {
            showFractionalPremiumBanner: u({
                fractionalPremiumInfo: s,
                selectedPlanId: t,
                planGroup: n,
                premiumSubscription: a,
                isGift: i,
            }),
            fractionalPremiumInfo: s,
        };
    },
    d = () =>
        s.intl.formatToPlainString(o.default["h1i+H8"], { premiumGroupProductName: (0, r.DP)(), cooldownMonths: r.wl });
