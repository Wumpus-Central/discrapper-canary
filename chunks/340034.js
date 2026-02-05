"use strict";
n.d(t, { XH: () => p, Z$: () => f, l$: () => m });
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(854354),
    s = n(270537),
    o = n(934581),
    l = n(446929),
    u = n(299301),
    c = n(888751),
    d = n(985018),
    _ = n(756366);
let f = (e) => {
        let {
                isPrepaidPaymentSource: t,
                invoiceSummaryTypeWithPreview: n,
                subscriptionPlan: i,
                premiumTrialOffer: o,
                isCustomGift: l,
            } = e,
            { invoicePreview: f } = n,
            p =
                n.type === u.N$.PREMIUM_GIFT
                    ? (0, c.fk)(f, { isCustomGift: l, isPrepaidPaymentSource: t, subscriptionPlan: i })
                    : (0, c.iQ)(f, {
                          isPrepaidPaymentSource: t,
                          invoiceSummaryTypeWithPreview: n,
                          subscriptionPlan: i,
                          premiumTrialOffer: o,
                      }),
            h = (0, a.lp)(f, { manualLineItems: p, addTaxLineItem: !0 });
        return (0, r.jsx)(s.V, {
            label: d.intl.string(_.default.eoXh7B),
            lineItems: h,
            currency: f.currency,
            totalDueLabel: d.intl.string(_.default.R0cZsM),
        });
    },
    p = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: i,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: s,
                discountInvoiceItems: o,
            } = e,
            u = (0, l.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: i,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: s,
                discountInvoiceItems: o,
            });
        return (0, r.jsx)(l.fJ, { planOptions: i, ...u, shouldUseUnifiedCheckoutUI: !0 });
    },
    h = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            a = n ? { variant: o.uA.TRIAL, trialPeriod: r, trialEnd: i } : {};
        return { fractionalPremiumBannerMessage: (0, o.NQ)({ fractionalPremiumInfo: t, ...a }) };
    },
    m = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: a, subscriptionPeriodEnd: s } = e,
            { fractionalPremiumBannerMessage: o } = h({
                fractionalPremiumInfo: t,
                isEligibleForTrial: n,
                trialPeriodCopy: a,
                subscriptionPeriodEnd: s,
            });
        return null != o && "" !== o ? (0, r.jsx)(i.wx6, { type: "info", children: o }) : null;
    };
