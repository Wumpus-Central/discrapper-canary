n.d(t, { PI: () => y, W9: () => f, l$: () => S });
var l = n(627968);
n(64700);
var i = n(683071),
    r = n(854354),
    a = n(463376),
    s = n(818824),
    o = n(944355),
    u = n(270537),
    c = n(650170),
    d = n(881489),
    p = n(531506),
    m = n(458785),
    h = n(299301),
    C = n(888751),
    E = n(375708),
    A = n(327105);
function f(e) {
    let {
            invoiceSummaryTypeWithPreview: t,
            subscriptionPlan: n,
            subscriptionTrial: i,
            isPrepaidPaymentSource: a,
            isCustomGift: s,
        } = e,
        { invoicePreview: o } = t,
        c = [];
    c =
        t.type === h.N$.PREMIUM_GIFT
            ? (0, C.fk)(o, { isCustomGift: s, isPrepaidPaymentSource: a, subscriptionPlan: n })
            : (0, C.IY)(o, {
                  isPrepaidPaymentSource: a,
                  invoiceSummaryType: t.type,
                  subscriptionPlan: n,
                  subscriptionTrial: i,
              }).lineItems;
    let d = (0, r.lp)(o, { manualLineItems: c, includeTaxLineItem: !0 });
    return (0, l.jsx)(u.Vm, { label: E.intl.string(A.default.eoXh7B), lineItems: d, currency: o.currency });
}
function S(e) {
    let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: a } = e,
        { fractionalPremiumBannerMessage: s } = (function (e) {
            let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: l, subscriptionPeriodEnd: i } = e,
                r = (0, d.ds)(),
                a = {};
            return (
                r
                    ? (a = { variant: p.uA.REVERSE_TRIAL })
                    : n && (a = { variant: p.uA.TRIAL, trialPeriod: l, trialEnd: i }),
                { fractionalPremiumBannerMessage: (0, p.NQ)({ fractionalPremiumInfo: t, ...a }) }
            );
        })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: a });
    return null != s && "" !== s ? (0, l.jsx)(i.w, { type: "info", children: s }) : null;
}
function y(e) {
    let {
            isTrial: t,
            plan: n,
            isGift: i,
            paymentSourceType: r,
            activeSubscription: u,
            invoiceSummaryTypeWithPreview: d,
            overrideRenewalDate: p,
            fractionalPremiumInfo: E,
            hideLegalContent: A,
            isInvoiceBilledImmediately: f = !0,
        } = e,
        { immediateDelivery: S } = (0, s.U)(),
        { discountOffer: y, premiumGroupDiscountOffer: P } = (0, a.i)(),
        { checkoutReviewButtonLabel: I } = (0, c.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        }));
    if (d.type === h.N$.LOADING) return null;
    let { invoicePreview: T } = d,
        _ = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? T,
        { renewalPrice: g, multiPeriodDiscountAttributes: v } = (0, C.Go)(_, n, P ?? y);
    if (A) return null;
    let x = {
        purchaseButtonText: I,
        totalDue: f ? T.total : 0,
        renewalPrice: g,
        multiPeriodDiscountAttributes: v,
        currency: T.currency,
        interval: n.interval,
        intervalCount: n.intervalCount,
        startDate: (0, m.de)({
            overrideRenewalDate: p,
            currentInvoice: T.id !== _.id ? T : void 0,
            renewalInvoice: _,
            isSubscriptionUpdate: null != u,
            fractionalPremiumInfo: E,
        }),
    };
    return (0, l.jsx)(o._P, {
        variant: { type: i ? o.I0.GiftNitro : t ? o.I0.SubscriptionTrial : o.I0.Subscription, ...x },
        paymentSourceType: r,
        immediateDelivery: S,
    });
}
