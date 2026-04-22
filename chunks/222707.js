n.d(t, { Nn: () => d, _V: () => c, pt: () => u });
var l = n(531260),
    i = n(615396),
    a = n(788868),
    r = n(88001),
    s = n(985018),
    o = n(466919);
let u = (e) => {
        let { fractionalPremiumInfo: t, selectedPlanId: n, planGroup: l, premiumSubscription: r, isGift: s } = e,
            o = null != r && null != n && (0, i.Ge)(r, n, l);
        return t.isFractionalPremiumActive && (null == r || o) && !s && null != n && a.JM.has(n);
    },
    c = (e) => {
        let {
                selectedPlanId: t,
                planGroup: n,
                premiumSubscription: i,
                isGift: a,
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
                premiumSubscription: i,
                isGift: a,
            }),
            fractionalPremiumInfo: s,
        };
    },
    d = () =>
        s.intl.formatToPlainString(o.default["h1i+H8"], { premiumGroupProductName: (0, r.DP)(), cooldownMonths: r.wl });
