var l = n(477900);
n(582128);
var i = n(683071),
    r = n(881489),
    a = n(781949);
n.d(
    t,
    {},
    {
        l: function (e) {
            let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: s, subscriptionPeriodEnd: o } = e,
                { fractionalPremiumBannerMessage: u } = (function (e) {
                    let {
                            fractionalPremiumInfo: t,
                            isEligibleForTrial: n,
                            trialPeriodCopy: l,
                            subscriptionPeriodEnd: i,
                        } = e,
                        s = (0, r.ds)(),
                        o = {};
                    return (
                        s
                            ? (o = { variant: a.uA.REVERSE_TRIAL })
                            : n && (o = { variant: a.uA.TRIAL, trialPeriod: l, trialEnd: i }),
                        { fractionalPremiumBannerMessage: (0, a.NQ)({ fractionalPremiumInfo: t, ...o }) }
                    );
                })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: s, subscriptionPeriodEnd: o });
            return null != u && "" !== u ? (0, l.jsx)(i.w, { type: "info", message: u, role: "none" }) : null;
        },
    },
);
