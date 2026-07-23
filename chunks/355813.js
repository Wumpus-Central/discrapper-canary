n.d(t, { l: () => E, P: () => f });
var l = n(627968);
n(64700);
var i = n(683071),
    r = n(75304),
    a = n(888751),
    s = n(692440),
    o = n(400612),
    u = n(818824),
    c = n(936477),
    d = n(316915);
function p(e) {
    let {
            plan: t,
            paymentSourceType: n,
            activeSubscription: i,
            discriminatedInvoicePreview: r,
            overrideRenewalDate: p,
            fractionalPremiumInfo: m,
            isInvoiceBilledImmediately: h = !0,
            unifiedLegalType: C,
            discountOffer: E,
        } = e,
        { immediateDelivery: f } = (0, u.U)(),
        { checkoutReviewButtonLabel: A } = (0, d.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        }));
    if (r.type === o.u$.LOADING) return null;
    let { invoicePreview: S } = r,
        y = ("renewalInvoicePreview" in r ? r.renewalInvoicePreview : null) ?? S,
        { renewalPrice: P, multiPeriodDiscountAttributes: I } = (0, a.QM)(y, t, E),
        _ = {
            purchaseButtonText: A,
            totalDue: h ? S.total : 0,
            renewalPrice: P,
            multiPeriodDiscountAttributes: I,
            currency: S.currency,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: (0, s.de)({
                overrideRenewalDate: p,
                currentInvoice: h ? S : void 0,
                renewalInvoice: y,
                isSubscriptionUpdate: null != i,
                fractionalPremiumInfo: m,
            }),
        };
    return (0, l.jsx)(c._P, { variant: { type: C, ..._ }, paymentSourceType: n, immediateDelivery: f });
}
var m = n(463376),
    h = n(881489),
    C = n(531506);
function E(e) {
    let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: a } = e,
        { fractionalPremiumBannerMessage: s } = (function (e) {
            let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: l, subscriptionPeriodEnd: i } = e,
                r = (0, h.ds)(),
                a = {};
            return (
                r
                    ? (a = { variant: C.uA.REVERSE_TRIAL })
                    : n && (a = { variant: C.uA.TRIAL, trialPeriod: l, trialEnd: i }),
                { fractionalPremiumBannerMessage: (0, C.NQ)({ fractionalPremiumInfo: t, ...a }) }
            );
        })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: a });
    return null != s && "" !== s ? (0, l.jsx)(i.w, { type: "info", children: s }) : null;
}
function f(e) {
    let { isGift: t, isTrial: n, isInvoiceBilledImmediately: i = !0, ...a } = e,
        { unifiedCheckoutFlow: s } = (0, d.t4)((e) => ({ unifiedCheckoutFlow: e.unifiedCheckoutFlow })),
        o = (function (e) {
            let { isGift: t, isTrial: n, unifiedCheckoutFlow: l } = e;
            return l === r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT
                ? c.I0.SubscriptionApplication
                : t
                  ? c.I0.GiftNitro
                  : n
                    ? c.I0.SubscriptionTrial
                    : c.I0.Subscription;
        })({ isGift: t, isTrial: n, unifiedCheckoutFlow: s }),
        { discountOffer: u, premiumGroupDiscountOffer: h } = (0, m.i)();
    return (0, l.jsx)(p, { ...a, isInvoiceBilledImmediately: i, discountOffer: h ?? u, unifiedLegalType: o });
}
