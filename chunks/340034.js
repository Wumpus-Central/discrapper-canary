n.d(t, { P: () => p, l: () => m });
var l = n(477900);
n(582128);
var i = n(683071),
    r = n(75304),
    a = n(987666),
    s = n(463376),
    o = n(557026),
    u = n(206441),
    c = n(881489),
    d = n(531506);
function m(e) {
    let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: a } = e,
        { fractionalPremiumBannerMessage: s } = (function (e) {
            let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: l, subscriptionPeriodEnd: i } = e,
                r = (0, c.ds)(),
                a = {};
            return (
                r
                    ? (a = { variant: d.uA.REVERSE_TRIAL })
                    : n && (a = { variant: d.uA.TRIAL, trialPeriod: l, trialEnd: i }),
                { fractionalPremiumBannerMessage: (0, d.NQ)({ fractionalPremiumInfo: t, ...a }) }
            );
        })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: a });
    return null != s && "" !== s ? (0, l.jsx)(i.w, { type: "info", children: s }) : null;
}
function p(e) {
    let { isGift: t, isTrial: n, isInvoiceBilledImmediately: i = !0, subscriptionTrial: c, ...d } = e,
        { unifiedCheckoutFlow: m } = (0, u.t4)((e) => ({ unifiedCheckoutFlow: e.unifiedCheckoutFlow })),
        p = (function (e) {
            let { isGift: t, isTrial: n, unifiedCheckoutFlow: l } = e;
            return l === r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT
                ? o.I0.SubscriptionApplication
                : t
                  ? o.I0.GiftNitro
                  : n
                    ? o.I0.SubscriptionTrial
                    : o.I0.Subscription;
        })({ isGift: t, isTrial: n, unifiedCheckoutFlow: m }),
        { discountOffer: C, premiumGroupDiscountOffer: h } = (0, s.i)();
    return (0, l.jsx)(a.$, {
        ...d,
        isInvoiceBilledImmediately: i,
        subscriptionTrial: c,
        discountOffer: h ?? C,
        unifiedLegalType: p,
    });
}
