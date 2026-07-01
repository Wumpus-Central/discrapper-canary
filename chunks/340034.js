"use strict";
n.d(t, { PI: () => I, W9: () => g, l$: () => A });
var i = n(627968);
n(64700);
var r = n(683071),
    s = n(854354),
    a = n(463376),
    o = n(818824),
    l = n(872452),
    u = n(848584),
    c = n(650170),
    d = n(881489),
    _ = n(531506),
    h = n(458785),
    f = n(299301),
    p = n(888751),
    E = n(375708),
    m = n(327105);
function g(e) {
    let {
            invoiceSummaryTypeWithPreview: t,
            subscriptionPlan: n,
            subscriptionTrial: r,
            isPrepaidPaymentSource: a,
            isCustomGift: o,
        } = e,
        { invoicePreview: l } = t,
        c = [];
    c =
        t.type === f.N$.PREMIUM_GIFT
            ? (0, p.fk)(l, { isCustomGift: o, isPrepaidPaymentSource: a, subscriptionPlan: n })
            : (0, p.IY)(l, {
                  isPrepaidPaymentSource: a,
                  invoiceSummaryType: t.type,
                  subscriptionPlan: n,
                  subscriptionTrial: r,
              }).lineItems;
    let d = (0, s.lp)(l, { manualLineItems: c, includeTaxLineItem: !0 });
    return (0, i.jsx)(u.Vm, { label: E.intl.string(m.default.eoXh7B), lineItems: d, currency: l.currency });
}
function A(e) {
    let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: s, subscriptionPeriodEnd: a } = e,
        { fractionalPremiumBannerMessage: o } = (function (e) {
            let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: r } = e,
                s = (0, d.ds)(),
                a = {};
            return (
                s
                    ? (a = { variant: _.uA.REVERSE_TRIAL })
                    : n && (a = { variant: _.uA.TRIAL, trialPeriod: i, trialEnd: r }),
                { fractionalPremiumBannerMessage: (0, _.NQ)({ fractionalPremiumInfo: t, ...a }) }
            );
        })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: s, subscriptionPeriodEnd: a });
    return null != o && "" !== o ? (0, i.jsx)(r.w, { type: "info", children: o }) : null;
}
function I(e) {
    let {
            isTrial: t,
            plan: n,
            isGift: r,
            paymentSourceType: s,
            activeSubscription: u,
            invoiceSummaryTypeWithPreview: d,
            overrideRenewalDate: _,
            fractionalPremiumInfo: E,
            hideLegalContent: m,
            isInvoiceBilledImmediately: g = !0,
        } = e,
        { immediateDelivery: A } = (0, o.U)(),
        { discountOffer: I, premiumGroupDiscountOffer: T } = (0, a.i)(),
        { checkoutReviewButtonLabel: S } = (0, c.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        }));
    if (d.type === f.N$.LOADING) return null;
    let { invoicePreview: y } = d,
        C = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? y,
        { renewalPrice: N, multiPeriodDiscountAttributes: v } = (0, p.Go)(C, n, T ?? I);
    if (m) return null;
    let R = {
        purchaseButtonText: S,
        totalDue: g ? y.total : 0,
        renewalPrice: N,
        multiPeriodDiscountAttributes: v,
        currency: y.currency,
        interval: n.interval,
        intervalCount: n.intervalCount,
        startDate: (0, h.de)({
            overrideRenewalDate: _,
            currentInvoice: y.id !== C.id ? y : void 0,
            renewalInvoice: C,
            isSubscriptionUpdate: null != u,
            fractionalPremiumInfo: E,
        }),
    };
    return (0, i.jsx)(l._P, {
        variant: { type: r ? l.I0.GiftNitro : t ? l.I0.SubscriptionTrial : l.I0.Subscription, ...R },
        paymentSourceType: s,
        immediateDelivery: A,
    });
}
