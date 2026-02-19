"use strict";
n.d(t, { PI: () => R, W9: () => v, XH: () => N, l$: () => b });
var r = n(627968),
    i = n(64700),
    s = n(997101),
    a = n(158954),
    o = n(311907),
    l = n(854354),
    u = n(93159),
    c = n(270537),
    d = n(156962),
    _ = n(446929),
    f = n(367921),
    p = n(299301),
    h = n(615405),
    m = n(927578),
    E = n(156312),
    g = n(888751),
    A = n(652215),
    I = n(788868),
    T = n(985018),
    S = n(756366),
    y = n(772992);
let v = (e) => {
        let {
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: i,
                isPrepaidPaymentSource: s,
                isCustomGift: a,
            } = e,
            { invoicePreview: o } = t,
            u =
                t.type === p.N$.PREMIUM_GIFT
                    ? (0, g.fk)(o, { isCustomGift: a, isPrepaidPaymentSource: s, subscriptionPlan: n })
                    : (0, g.IY)(o, {
                          isPrepaidPaymentSource: s,
                          invoiceSummaryTypeWithPreview: t,
                          subscriptionPlan: n,
                          subscriptionTrial: i,
                      }).lineItems,
            d = (0, l.lp)(o, { manualLineItems: u, includeTaxLineItem: !0 });
        return (0, r.jsx)(c.Vm, { label: T.intl.string(S.default.eoXh7B), lineItems: d, currency: o.currency });
    },
    N = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: o,
                discountInvoiceItems: l,
                showSecondarySubTexts: c,
                isInPlanSelectStep: d,
            } = e,
            f = (0, _.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: o,
                discountInvoiceItems: l,
                showTotal: d,
            }),
            {
                selectedPlan: p,
                selectedPlanPrice: h,
                isPrepaid: m,
                shouldShowHRKEuroWarning: E,
                shouldShowTotalInSubscriptionFlow: A,
                shouldShowUpdatedPaymentModal: T,
                userTrialOffer: S,
                trialPeriodCopy: v,
                isEligibleForTrial: N,
            } = f,
            C = i.useMemo(
                () => (d && N ? (0, _.Ct)(S, { subscriptionPeriodEnd: o, trialPeriodCopy: v }) : void 0),
                [d, N, S, o, v],
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
            } = (0, _.Rx)(f),
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
                        let { isCurrentPlan: t, disabled: n } = (0, _.cD)(R, e),
                            r = (0, g.Rs)(R, {
                                planId: e,
                                isCurrentPlan: t,
                                disabled: n,
                                userLocale: O,
                                showSecondarySubTexts: c,
                                isInPlanSelectStep: d,
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
                [c, s, O, M, D, L, w, N, x, R, d],
            );
        return null == P
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(u.me, {
                          headingComponent: (0, r.jsx)(u.ec, { size: "sm", color: "text-strong", premiumType: P }),
                          headingSubText: C,
                          planRadioOptions: U,
                          value: p?.id ?? "",
                          onChange: k,
                      }),
                      d
                          ? (0, _.LR)({
                                selectedPlan: p,
                                selectedPlanPrice: h,
                                isPrepaid: m,
                                shouldShowHRKEuroWarning: E,
                                shouldShowUpdatedPaymentModal: T,
                                showTotal: d,
                                shouldShowTotalInSubscriptionFlow: A,
                                previewTotalSectionClassName: y.$,
                            })
                          : null,
                  ],
              });
    },
    C = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            s = n ? { variant: d.uA.TRIAL, trialPeriod: r, trialEnd: i } : {};
        return { fractionalPremiumBannerMessage: (0, d.NQ)({ fractionalPremiumInfo: t, ...s }) };
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
            planGroup: t,
            setHasAcceptedTerms: n,
            isTrial: a,
            plan: l,
            isGift: c,
            priceOptions: d,
            renewalInvoicePreview: _,
            paymentSourceType: p,
            activeSubscription: g,
        } = e,
        { hasAcceptedTerms: I } = (0, E.P5)(),
        T = (0, o.bG)([h.A], () => s.M.EEA_COUNTRIES.has(h.A.ipCountryCodeWithFallback)),
        S = T ? { value: I, onChange: n } : void 0,
        y = (0, m.y8)(l.id, !1, c, d);
    i.useLayoutEffect(() => {
        n(!T);
    }, [T, n]);
    let v = {
        purchaseButtonText: (0, f.Ro)({
            productLine: A.EZt.PREMIUM,
            purchaseType: A.VVm.SUBSCRIPTION,
            plan: l,
            premiumSubscription: g,
            isGift: c,
            planGroup: t,
            isPrepaidPaymentSource: !1,
        }),
        totalDue: y.amount,
        renewalPrice: _?.subtotal ?? y.amount,
        currency: _?.currency ?? y.currency,
        interval: l.interval,
        intervalCount: l.intervalCount,
        startDate: _?.subscriptionPeriodStart ?? new Date(),
    };
    return (0, r.jsx)(u._P, {
        variant: { type: c ? u.I0.GiftNitro : a ? u.I0.SubscriptionTrial : u.I0.Subscription, ...v },
        paymentSourceType: p,
        immediateDelivery: S,
    });
}
