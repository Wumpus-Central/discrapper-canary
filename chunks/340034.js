"use strict";
n.d(t, { PI: () => N, XH: () => v, Z$: () => S, l$: () => b });
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
    h = n(446929),
    p = n(299301),
    g = n(615405),
    E = n(927578),
    A = n(156312),
    I = n(888751),
    T = n(985018),
    y = n(756366);
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
                n.type === p.N$.PREMIUM_GIFT
                    ? (0, I.fk)(o, { isCustomGift: s, isPrepaidPaymentSource: t, subscriptionPlan: i })
                    : (0, I.iQ)(o, {
                          isPrepaidPaymentSource: t,
                          invoiceSummaryTypeWithPreview: n,
                          subscriptionPlan: i,
                          subscriptionTrial: a,
                      }).lineItems,
            u = (0, c.lp)(o, { manualLineItems: l, addTaxLineItem: !0 });
        return (0, r.jsx)(_.V, {
            label: T.intl.string(y.default.eoXh7B),
            lineItems: u,
            currency: o.currency,
            totalDueLabel: T.intl.string(y.default.R0cZsM),
        });
    },
    v = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: i,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: s,
                discountInvoiceItems: o,
            } = e,
            l = (0, h.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: i,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: s,
                discountInvoiceItems: o,
            });
        return (0, r.jsx)(h.gH, { planOptions: i, ...l });
    },
    C = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            a = n ? { variant: f.uA.TRIAL, trialPeriod: r, trialEnd: i } : {};
        return { fractionalPremiumBannerMessage: (0, f.NQ)({ fractionalPremiumInfo: t, ...a }) };
    },
    b = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: a } = e,
            { fractionalPremiumBannerMessage: o } = C({
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
            renewalInvoicePreview: h,
            isEmbeddedIAP: p,
            paymentSourceType: I,
            inReverseTrial: T,
        } = e,
        { hasAcceptedTerms: y } = (0, A.P5)(),
        S = (0, o.bG)([g.A], () => a.M.EEA_COUNTRIES.has(g.A.ipCountryCodeWithFallback)),
        v = S ? { value: y, onChange: t } : void 0,
        C = (0, E.y8)(c.id, !1, _, f);
    return (
        i.useLayoutEffect(() => {
            t(!S);
        }, [S, t]),
        (0, r.jsxs)(d.tb, {
            immediateDelivery: v,
            children: [
                (0, r.jsx)(l.W, {
                    hide: n || s,
                    subscriptionPlan: c,
                    renewalInvoice: h,
                    isGift: _,
                    paymentSourceType: I,
                    isEmbeddedIAP: p,
                    basePrice: C,
                }),
                (0, r.jsx)(u.n, { isTrial: n, subscriptionPlan: c, inReverseTrial: T, isDiscount: s }),
            ],
        })
    );
}
