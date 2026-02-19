"use strict";
n.d(t, { PI: () => R, XH: () => N, Z$: () => v, l$: () => b });
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
    S = n(756366),
    y = n(772992);
let v = (e) => {
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
    N = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: o,
                discountInvoiceItems: l,
                showSecondarySubTexts: u,
                isInPlanSelectStep: c,
            } = e,
            _ = (0, p.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: o,
                discountInvoiceItems: l,
                showTotal: c,
            }),
            {
                selectedPlan: f,
                selectedPlanPrice: h,
                isPrepaid: m,
                shouldShowHRKEuroWarning: E,
                shouldShowTotalInSubscriptionFlow: g,
                shouldShowUpdatedPaymentModal: T,
                userTrialOffer: S,
                trialPeriodCopy: v,
                isEligibleForTrial: N,
            } = _,
            C = i.useMemo(
                () => (c && N ? (0, p.Ct)(S, { subscriptionPeriodEnd: o, trialPeriodCopy: v }) : void 0),
                [c, N, S, o, v],
            ),
            {
                selectPlan: b,
                premiumSubscription: R,
                userLocale: O,
                priceOptions: D,
                isGift: L,
                shouldUseCalculatedDiscount: w,
                isEligibleForBOGOPromotion: x,
                discountOffer: M,
            } = (0, p.Rx)(_),
            P = i.useMemo(() => (s.length > 0 ? I.hd[s[0]].premiumType : void 0), [s]),
            k = i.useCallback(
                (e) => {
                    b(e.value);
                },
                [b],
            ),
            U = i.useMemo(
                () =>
                    s.map((e) => {
                        let { isCurrentPlan: t, disabled: n } = (0, p.cD)(R, e),
                            r = (0, A.Rs)(R, {
                                planId: e,
                                isCurrentPlan: t,
                                disabled: n,
                                userLocale: O,
                                showSecondarySubTexts: u,
                                isInPlanSelectStep: c,
                                discountOffer: M,
                                priceOptions: D,
                                isGift: L,
                                shouldUseCalculatedDiscount: w,
                                isEligibleForTrial: N,
                                isEligibleForBOGOPromotion: x,
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
                [u, s, O, M, D, L, w, N, x, R, c],
            );
        return null == P
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.me, {
                          headingComponent: (0, r.jsx)(d.ec, { size: "sm", color: "text-strong", premiumType: P }),
                          headingSubText: C,
                          planRadioOptions: U,
                          value: f?.id ?? "",
                          onChange: k,
                      }),
                      c
                          ? (0, p.LR)({
                                selectedPlan: f,
                                selectedPlanPrice: h,
                                isPrepaid: m,
                                shouldShowHRKEuroWarning: E,
                                shouldShowUpdatedPaymentModal: T,
                                showTotal: c,
                                shouldShowTotalInSubscriptionFlow: g,
                                previewTotalSectionClassName: y.$,
                            })
                          : null,
                  ],
              });
    },
    C = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            s = n ? { variant: f.uA.TRIAL, trialPeriod: r, trialEnd: i } : {};
        return { fractionalPremiumBannerMessage: (0, f.NQ)({ fractionalPremiumInfo: t, ...s }) };
    },
    b = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: s } = e,
            { fractionalPremiumBannerMessage: o } = C({
                fractionalPremiumInfo: t,
                isEligibleForTrial: n,
                trialPeriodCopy: i,
                subscriptionPeriodEnd: s,
            });
        return null != o && "" !== o ? (0, r.jsx)(a.wx6, { type: "info", children: o }) : null;
    };
function R(e) {
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
