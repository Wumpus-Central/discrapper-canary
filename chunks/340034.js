"use strict";
n.d(t, { PI: () => b, XH: () => v, Z$: () => y, l$: () => C });
var r = n(627968),
    i = n(64700),
    s = n(997101),
    a = n(158954),
    o = n(311907),
    l = n(821891),
    u = n(953689),
    c = n(854354),
    d = n(93159),
    _ = n(270537),
    f = n(156962),
    p = n(446929),
    h = n(299301),
    m = n(615405),
    E = n(927578),
    g = n(156312),
    A = n(888751),
    I = n(788868),
    T = n(985018),
    S = n(756366);
let y = (e) => {
        let {
                isPrepaidPaymentSource: t,
                invoiceSummaryTypeWithPreview: n,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isCustomGift: a,
            } = e,
            { invoicePreview: o } = n,
            l =
                n.type === h.N$.PREMIUM_GIFT
                    ? (0, A.fk)(o, { isCustomGift: a, isPrepaidPaymentSource: t, subscriptionPlan: i })
                    : (0, A.iQ)(o, {
                          isPrepaidPaymentSource: t,
                          invoiceSummaryTypeWithPreview: n,
                          subscriptionPlan: i,
                          subscriptionTrial: s,
                      }).lineItems,
            u = (0, c.lp)(o, { manualLineItems: l, addTaxLineItem: !0 });
        return (0, r.jsx)(_.Vm, { label: T.intl.string(S.default.eoXh7B), lineItems: u, currency: o.currency });
    },
    v = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: o,
                discountInvoiceItems: l,
                showSecondarySubTexts: u,
            } = e,
            c = (0, p.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: o,
                discountInvoiceItems: l,
            }),
            { selectedPlan: _ } = c,
            {
                selectPlan: f,
                premiumSubscription: h,
                userLocale: m,
                discountOffer: E,
                priceOptions: g,
                isGift: T,
                shouldUseCalculatedDiscount: S,
                isEligibleForBOGOPromotion: y,
            } = (0, p.Rx)(c),
            v = i.useMemo(() => (s.length > 0 ? I.hd[s[0]].premiumType : void 0), [s]),
            N = i.useCallback(
                (e) => {
                    f(e.value);
                },
                [f],
            ),
            C = i.useMemo(
                () =>
                    s.map((e) => {
                        let { isCurrentPlan: t, disabled: n } = (0, p.cD)(h, e),
                            r = (0, A.Rs)(h, {
                                planId: e,
                                disabled: n,
                                userLocale: m,
                                discountOffer: E,
                                priceOptions: g,
                                isGift: T,
                                isCurrentPlan: t,
                                shouldUseCalculatedDiscount: S,
                                isEligibleForBOGOPromotion: y,
                                showSecondarySubTexts: u,
                            });
                        return {
                            value: r.id,
                            secondarySubText: r.secondarySubText,
                            primaryText: r.planName,
                            badgeText: r.promoText,
                            subText: r.priceText,
                            isDisabled: r.isDisabled,
                        };
                    }),
                [u, s, m, E, g, T, S, y, h],
            );
        return null == v
            ? null
            : (0, r.jsx)(d.me, {
                  headingComponent: (0, r.jsx)(d.ec, { size: "sm", color: "text-strong", premiumType: v }),
                  planRadioOptions: C,
                  value: _?.id ?? "",
                  onChange: N,
              });
    },
    N = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            s = n ? { variant: f.uA.TRIAL, trialPeriod: r, trialEnd: i } : {};
        return { fractionalPremiumBannerMessage: (0, f.NQ)({ fractionalPremiumInfo: t, ...s }) };
    },
    C = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: s } = e,
            { fractionalPremiumBannerMessage: o } = N({
                fractionalPremiumInfo: t,
                isEligibleForTrial: n,
                trialPeriodCopy: i,
                subscriptionPeriodEnd: s,
            });
        return null != o && "" !== o ? (0, r.jsx)(a.wx6, { type: "info", children: o }) : null;
    };
function b(e) {
    let {
            setHasAcceptedTerms: t,
            isTrial: n,
            isDiscount: a,
            plan: c,
            isGift: _,
            priceOptions: f,
            renewalInvoicePreview: p,
            isEmbeddedIAP: h,
            paymentSourceType: A,
            inReverseTrial: I,
        } = e,
        { hasAcceptedTerms: T } = (0, g.P5)(),
        S = (0, o.bG)([m.A], () => s.M.EEA_COUNTRIES.has(m.A.ipCountryCodeWithFallback)),
        y = S ? { value: T, onChange: t } : void 0,
        v = (0, E.y8)(c.id, !1, _, f);
    return (
        i.useLayoutEffect(() => {
            t(!S);
        }, [S, t]),
        (0, r.jsxs)(d.tb, {
            immediateDelivery: y,
            children: [
                (0, r.jsx)(l.W, {
                    hide: n || a,
                    subscriptionPlan: c,
                    renewalInvoice: p,
                    isGift: _,
                    paymentSourceType: A,
                    isEmbeddedIAP: h,
                    basePrice: v,
                }),
                (0, r.jsx)(u.n, { isTrial: n, subscriptionPlan: c, inReverseTrial: I, isDiscount: a }),
            ],
        })
    );
}
