n.d(t, { PI: () => P, W9: () => y, l$: () => S });
var l = n(627968);
n(64700);
var i = n(683071),
    r = n(75304),
    a = n(854354),
    s = n(463376),
    o = n(818824),
    u = n(944355),
    c = n(270537),
    d = n(6938),
    p = n(881489),
    m = n(531506),
    C = n(692440),
    h = n(299301),
    E = n(888751),
    f = n(375708),
    A = n(327105);
function y(e) {
    let {
            invoiceSummaryTypeWithPreview: t,
            subscriptionPlan: n,
            subscriptionTrial: i,
            isPrepaidPaymentSource: r,
            isCustomGift: s,
        } = e,
        { invoicePreview: o } = t,
        u = [];
    u =
        t.type === h.N$.PREMIUM_GIFT
            ? (0, E.fk)(o, { isCustomGift: s, isPrepaidPaymentSource: r, subscriptionPlan: n })
            : (0, E.IY)(o, {
                  isPrepaidPaymentSource: r,
                  invoiceSummaryType: t.type,
                  subscriptionPlan: n,
                  subscriptionTrial: i,
              }).lineItems;
    let d = (0, a.lp)(o, { manualLineItems: u, includeTaxLineItem: !0 });
    return (0, l.jsx)(c.Vm, { label: f.intl.string(A.default.eoXh7B), lineItems: d, currency: o.currency });
}
function S(e) {
    let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: a } = e,
        { fractionalPremiumBannerMessage: s } = (function (e) {
            let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: l, subscriptionPeriodEnd: i } = e,
                r = (0, p.ds)(),
                a = {};
            return (
                r
                    ? (a = { variant: m.uA.REVERSE_TRIAL })
                    : n && (a = { variant: m.uA.TRIAL, trialPeriod: l, trialEnd: i }),
                { fractionalPremiumBannerMessage: (0, m.NQ)({ fractionalPremiumInfo: t, ...a }) }
            );
        })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: a });
    return null != s && "" !== s ? (0, l.jsx)(i.w, { type: "info", children: s }) : null;
}
function P(e) {
    let {
            isTrial: t,
            plan: n,
            isGift: i,
            paymentSourceType: a,
            activeSubscription: c,
            invoiceSummaryTypeWithPreview: p,
            overrideRenewalDate: m,
            fractionalPremiumInfo: f,
            isInvoiceBilledImmediately: A = !0,
        } = e,
        { immediateDelivery: y } = (0, o.U)(),
        { discountOffer: S, premiumGroupDiscountOffer: P } = (0, s.i)(),
        { checkoutReviewButtonLabel: I, unifiedCheckoutFlow: _ } = (0, d.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        }));
    if (p.type === h.N$.LOADING) return null;
    let { invoicePreview: T } = p,
        g = ("renewalInvoicePreview" in p ? p.renewalInvoicePreview : null) ?? T,
        { renewalPrice: x, multiPeriodDiscountAttributes: v } = (0, E.Go)(g, n, P ?? S),
        N = {
            purchaseButtonText: I,
            totalDue: A ? T.total : 0,
            renewalPrice: x,
            multiPeriodDiscountAttributes: v,
            currency: T.currency,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: (0, C.de)({
                overrideRenewalDate: m,
                currentInvoice: A ? T : void 0,
                renewalInvoice: g,
                isSubscriptionUpdate: null != c,
                fractionalPremiumInfo: f,
            }),
        },
        M = (function (e) {
            let { isGift: t, isTrial: n, unifiedCheckoutFlow: l } = e;
            return l === r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT
                ? u.I0.SubscriptionApplication
                : t
                  ? u.I0.GiftNitro
                  : n
                    ? u.I0.SubscriptionTrial
                    : u.I0.Subscription;
        })({ isGift: i, isTrial: t, unifiedCheckoutFlow: _ });
    return (0, l.jsx)(u._P, { variant: { type: M, ...N }, paymentSourceType: a, immediateDelivery: y });
}
