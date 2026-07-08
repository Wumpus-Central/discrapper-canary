n.d(t, { PI: () => P, W9: () => f, l$: () => y });
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
    C = n(458785),
    h = n(299301),
    E = n(888751),
    A = n(375708),
    S = n(327105);
function f(e) {
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
    return (0, l.jsx)(c.Vm, { label: A.intl.string(S.default.eoXh7B), lineItems: d, currency: o.currency });
}
function y(e) {
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
            fractionalPremiumInfo: A,
            isInvoiceBilledImmediately: S = !0,
        } = e,
        { immediateDelivery: f } = (0, o.U)(),
        { discountOffer: y, premiumGroupDiscountOffer: P } = (0, s.i)(),
        { checkoutReviewButtonLabel: T, unifiedCheckoutFlow: _ } = (0, d.t4)((e) => ({
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        }));
    if (p.type === h.N$.LOADING) return null;
    let { invoicePreview: I } = p,
        g = ("renewalInvoicePreview" in p ? p.renewalInvoicePreview : null) ?? I,
        { renewalPrice: v, multiPeriodDiscountAttributes: x } = (0, E.Go)(g, n, P ?? y),
        N = {
            purchaseButtonText: T,
            totalDue: S ? I.total : 0,
            renewalPrice: v,
            multiPeriodDiscountAttributes: x,
            currency: I.currency,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: (0, C.de)({
                overrideRenewalDate: m,
                currentInvoice: I.id !== g.id ? I : void 0,
                renewalInvoice: g,
                isSubscriptionUpdate: null != c,
                fractionalPremiumInfo: A,
            }),
        },
        R = ((e) => {
            let { isGift: t, isTrial: n, unifiedCheckoutFlow: l } = e;
            return l === r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT
                ? u.I0.SubscriptionApplication
                : t
                  ? u.I0.GiftNitro
                  : n
                    ? u.I0.SubscriptionTrial
                    : u.I0.Subscription;
        })({ isGift: i, isTrial: t, unifiedCheckoutFlow: _ });
    return (0, l.jsx)(u._P, { variant: { type: R, ...N }, paymentSourceType: a, immediateDelivery: f });
}
