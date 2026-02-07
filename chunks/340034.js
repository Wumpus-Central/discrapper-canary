"use strict";
n.d(t, { PI: () => N, XH: () => y, Z$: () => S, l$: () => C });
var r = n(627968),
    i = n(64700),
    a = n(997101),
    s = n(158954),
    o = n(311907),
    l = n(821891),
    u = n(953689),
    c = n(854354),
    d = n(93159),
    _ = n(270537),
    f = n(934581),
    p = n(446929),
    h = n(299301),
    m = n(615405),
    g = n(927578),
    E = n(156312),
    A = n(888751),
    I = n(985018),
    T = n(756366);
let S = (e) => {
        let {
                isPrepaidPaymentSource: t,
                invoiceSummaryTypeWithPreview: n,
                subscriptionPlan: i,
                subscriptionTrial: a,
                isCustomGift: s,
            } = e,
            { invoicePreview: o } = n,
            l =
                n.type === h.N$.PREMIUM_GIFT
                    ? (0, A.fk)(o, { isCustomGift: s, isPrepaidPaymentSource: t, subscriptionPlan: i })
                    : (0, A.iQ)(o, {
                          isPrepaidPaymentSource: t,
                          invoiceSummaryTypeWithPreview: n,
                          subscriptionPlan: i,
                          subscriptionTrial: a,
                      }).lineItems,
            u = (0, c.lp)(o, { manualLineItems: l, addTaxLineItem: !0 });
        return (0, r.jsx)(_.V, {
            label: I.intl.string(T.default.eoXh7B),
            lineItems: u,
            currency: o.currency,
            totalDueLabel: I.intl.string(T.default.R0cZsM),
        });
    },
    y = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: i,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: s,
                discountInvoiceItems: o,
            } = e,
            l = (0, p.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: i,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: s,
                discountInvoiceItems: o,
            });
        return (0, r.jsx)(p.fJ, { planOptions: i, ...l, shouldUseUnifiedCheckoutUI: !0 });
    },
    v = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            a = n ? { variant: f.uA.TRIAL, trialPeriod: r, trialEnd: i } : {};
        return { fractionalPremiumBannerMessage: (0, f.NQ)({ fractionalPremiumInfo: t, ...a }) };
    },
    C = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: a } = e,
            { fractionalPremiumBannerMessage: o } = v({
                fractionalPremiumInfo: t,
                isEligibleForTrial: n,
                trialPeriodCopy: i,
                subscriptionPeriodEnd: a,
            });
        return null != o && "" !== o ? (0, r.jsx)(s.wx6, { type: "info", children: o }) : null;
    };
function N(e) {
    let {
            setHasAcceptedTerms: t,
            isTrial: n,
            isDiscount: s,
            plan: c,
            isGift: _,
            priceOptions: f,
            renewalInvoicePreview: p,
            isEmbeddedIAP: h,
            paymentSourceType: A,
            inReverseTrial: I,
        } = e,
        { hasAcceptedTerms: T } = (0, E.P5)(),
        S = (0, o.bG)([m.A], () => a.M.EEA_COUNTRIES.has(m.A.ipCountryCodeWithFallback)),
        y = S ? { value: T, onChange: t } : void 0,
        v = (0, g.y8)(c.id, !1, _, f);
    return (
        i.useLayoutEffect(() => {
            t(!S);
        }, [S, t]),
        (0, r.jsxs)(d.tb, {
            immediateDelivery: y,
            children: [
                (0, r.jsx)(l.W, {
                    hide: n || s,
                    subscriptionPlan: c,
                    renewalInvoice: p,
                    isGift: _,
                    paymentSourceType: A,
                    isEmbeddedIAP: h,
                    basePrice: v,
                }),
                (0, r.jsx)(u.n, { isTrial: n, subscriptionPlan: c, inReverseTrial: I, isDiscount: s }),
            ],
        })
    );
}
