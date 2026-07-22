n.d(t, { W9: () => y, l$: () => P, PI: () => I });
var l = n(627968);
n(64700);
var i = n(683071),
    r = n(75304),
    a = n(854354),
    s = n(888751),
    o = n(692440),
    u = n(400612),
    c = n(463376),
    d = n(818824),
    p = n(936477),
    m = n(316915);
function h(e) {
    let {
            plan: t,
            paymentSourceType: n,
            activeSubscription: i,
            discriminatedInvoicePreview: r,
            overrideRenewalDate: a,
            fractionalPremiumInfo: h,
            isInvoiceBilledImmediately: C = !0,
            unifiedLegalType: E,
        } = e,
        { immediateDelivery: f } = (0, d.U)(),
        { discountOffer: A, premiumGroupDiscountOffer: S } = (0, c.i)(),
        { checkoutReviewButtonLabel: y } = (0, m.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        }));
    if (r.type === u.u$.LOADING) return null;
    let { invoicePreview: P } = r,
        I = ("renewalInvoicePreview" in r ? r.renewalInvoicePreview : null) ?? P,
        { renewalPrice: _, multiPeriodDiscountAttributes: T } = (0, s.QM)(I, t, S ?? A),
        g = {
            purchaseButtonText: y,
            totalDue: C ? P.total : 0,
            renewalPrice: _,
            multiPeriodDiscountAttributes: T,
            currency: P.currency,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: (0, o.de)({
                overrideRenewalDate: a,
                currentInvoice: C ? P : void 0,
                renewalInvoice: I,
                isSubscriptionUpdate: null != i,
                fractionalPremiumInfo: h,
            }),
        };
    return (0, l.jsx)(p._P, { variant: { type: E, ...g }, paymentSourceType: n, immediateDelivery: f });
}
var C = n(848584),
    E = n(881489),
    f = n(531506),
    A = n(375708),
    S = n(327105);
function y(e) {
    let {
            discriminatedInvoicePreview: t,
            subscriptionPlan: n,
            subscriptionTrial: i,
            isPrepaidPaymentSource: r,
            isCustomGift: o,
        } = e,
        { invoicePreview: c } = t,
        d = [];
    d =
        t.type === u.u$.PREMIUM_GIFT
            ? (0, s.fk)(c, { isCustomGift: o, isPrepaidPaymentSource: r, subscriptionPlan: n })
            : (0, s.IY)(c, {
                  isPrepaidPaymentSource: r,
                  invoiceSummaryType: t.type,
                  subscriptionPlan: n,
                  subscriptionTrial: i,
              }).lineItems;
    let p = (0, a.lp)(c, { manualLineItems: d, includeTaxLineItem: !0 });
    return (0, l.jsx)(C.Vm, { label: A.intl.string(S.default.eoXh7B), lineItems: p, currency: c.currency });
}
function P(e) {
    let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: a } = e,
        { fractionalPremiumBannerMessage: s } = (function (e) {
            let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: l, subscriptionPeriodEnd: i } = e,
                r = (0, E.ds)(),
                a = {};
            return (
                r
                    ? (a = { variant: f.uA.REVERSE_TRIAL })
                    : n && (a = { variant: f.uA.TRIAL, trialPeriod: l, trialEnd: i }),
                { fractionalPremiumBannerMessage: (0, f.NQ)({ fractionalPremiumInfo: t, ...a }) }
            );
        })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: a });
    return null != s && "" !== s ? (0, l.jsx)(i.w, { type: "info", children: s }) : null;
}
function I(e) {
    let { isGift: t, isTrial: n, discriminatedInvoicePreview: i, isInvoiceBilledImmediately: a = !0, ...s } = e,
        { unifiedCheckoutFlow: o } = (0, m.t4)((e) => ({ unifiedCheckoutFlow: e.unifiedCheckoutFlow })),
        c = (function (e) {
            let { isGift: t, isTrial: n, unifiedCheckoutFlow: l } = e;
            return l === r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT
                ? p.I0.SubscriptionApplication
                : t
                  ? p.I0.GiftNitro
                  : n
                    ? p.I0.SubscriptionTrial
                    : p.I0.Subscription;
        })({ isGift: t, isTrial: n, unifiedCheckoutFlow: o });
    return i.type === u.u$.LOADING
        ? null
        : (0, l.jsx)(h, { ...s, discriminatedInvoicePreview: i, isInvoiceBilledImmediately: a, unifiedLegalType: c });
}
