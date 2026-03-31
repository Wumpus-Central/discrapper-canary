"use strict";
n.d(t, { PI: () => D, W9: () => C, XH: () => R, l$: () => b, rk: () => N });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(821189),
    u = n(854354),
    c = n(93159),
    d = n(270537),
    _ = n(156962),
    f = n(446929),
    p = n(692440),
    h = n(367921),
    m = n(299301),
    E = n(156312),
    g = n(908419),
    A = n(888751),
    I = n(652215),
    T = n(788868),
    S = n(985018),
    y = n(523376),
    v = n(444186);
let N = (e) => {
        let { className: t, currencies: n, onChange: i, selectedCurrency: s, ...o } = e;
        return (0, r.jsx)(l.f, {
            currencies: n,
            className: a()(v.p2, t),
            children: (0, r.jsx)(l.A, {
                label: S.intl.string(S.t["/AAR02"]),
                selectedCurrency: s,
                currencies: n,
                onChange: i,
                ...o,
            }),
        });
    },
    C = (e) => {
        let {
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: i,
                isPrepaidPaymentSource: s,
                isCustomGift: a,
            } = e,
            { invoicePreview: o } = t,
            l = [];
        l =
            t.type === m.N$.PREMIUM_GIFT
                ? (0, A.fk)(o, { isCustomGift: a, isPrepaidPaymentSource: s, subscriptionPlan: n })
                : (0, A.IY)(o, {
                      isPrepaidPaymentSource: s,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: i,
                  }).lineItems;
        let c = (0, u.lp)(o, { manualLineItems: l, includeTaxLineItem: !0 });
        return (0, r.jsx)(d.Vm, { label: S.intl.string(y.default.eoXh7B), lineItems: c, currency: o.currency });
    },
    R = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                subscriptionPeriodEnd: a,
                discountInvoiceItems: l,
                showPlanStatusSubText: u,
                disabled: d,
                isInPlanSelectStep: _,
                headingSubText: p,
            } = e,
            h = (0, f.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                subscriptionPeriodEnd: a,
                discountInvoiceItems: l,
                showTotal: _,
            }),
            {
                selectedPlan: m,
                selectedPlanPrice: E,
                isPrepaid: g,
                shouldShowHRKEuroWarning: I,
                shouldShowTotalInSubscriptionFlow: S,
                shouldShowUpdatedPaymentModal: y,
                userTrialOffer: N,
                trialPeriodCopy: C,
                isEligibleForTrial: R,
                isEligibleForBOGOPromotion: O,
                premiumSubscriptionPlan: b,
                skuId: D,
            } = h,
            { shouldShowPremiumSwitchPlanSelectText: L, premiumSwitchPlanSelectText: w } = i.useMemo(() => {
                let e = (0, f.U_)(b, { isEligibleForBOGOPromotion: O });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, f.yq)(b, D) : null,
                };
            }, [b, O, D]),
            M = i.useMemo(
                () => (_ && R ? (0, f.Ct)(N, { subscriptionPeriodEnd: a, trialPeriodCopy: C }) : p),
                [_, R, N, a, C, p],
            ),
            {
                selectPlan: P,
                premiumSubscription: x,
                userLocale: k,
                priceOptions: U,
                isGift: G,
                isEligibleForDiscount: F,
                shouldUseCalculatedDiscount: V,
                discountOffer: B,
                discountAmountOff: H,
            } = (0, f.Rx)(h),
            j = i.useMemo(() => (s.length > 0 ? T.hd[s[0]].premiumType : void 0), [s]),
            Y = i.useCallback(
                (e) => {
                    P(e.value);
                },
                [P],
            ),
            W = i.useMemo(() => {
                let e = null != B && B.discount.user_usage_limit_interval === T.Ff.MONTH;
                return s.map((t) => {
                    let { isCurrentPlan: n, disabled: r } = (0, f.cD)(x, t),
                        i = (0, A.Rs)(x, {
                            planId: t,
                            isEligibleForDiscount: F,
                            isCurrentPlan: n,
                            disabled: r,
                            userLocale: k,
                            showPlanStatusSubText: u,
                            isInPlanSelectStep: _,
                            discountOffer: B,
                            discountAmountOff: H,
                            isMonthlyDiscountOffer: e,
                            priceOptions: U,
                            isGift: G,
                            shouldUseCalculatedDiscount: V,
                            isEligibleForTrial: R,
                            isEligibleForBOGOPromotion: O,
                        });
                    return {
                        value: i.id,
                        secondarySubText: i.secondarySubText,
                        primaryText: i.planName,
                        badgeText: i.promoText,
                        subText: i.priceText,
                        isDisabled: i.isDisabled || d,
                    };
                });
            }, [d, u, s, k, F, B, H, U, G, V, R, O, x, _]);
        return null == j
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      L &&
                          (0, r.jsx)(o.EYj, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: v.ST,
                              children: w,
                          }),
                      (0, r.jsx)(c.me, {
                          headingComponent: (0, r.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: j }),
                          headingSubText: M,
                          planRadioOptions: W,
                          value: m?.id ?? "",
                          onChange: Y,
                      }),
                      _
                          ? (0, f.LR)({
                                selectedPlan: m,
                                selectedPlanPrice: E,
                                isPrepaid: g,
                                shouldShowHRKEuroWarning: I,
                                shouldShowUpdatedPaymentModal: y,
                                showTotal: _,
                                shouldShowTotalInSubscriptionFlow: S,
                                previewTotalSectionClassName: v.$r,
                            })
                          : null,
                  ],
              });
    },
    O = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            s = n ? { variant: _.uA.TRIAL, trialPeriod: r, trialEnd: i } : {};
        return { fractionalPremiumBannerMessage: (0, _.NQ)({ fractionalPremiumInfo: t, ...s }) };
    },
    b = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: s } = e,
            { fractionalPremiumBannerMessage: a } = O({
                fractionalPremiumInfo: t,
                isEligibleForTrial: n,
                trialPeriodCopy: i,
                subscriptionPeriodEnd: s,
            });
        return null != a && "" !== a ? (0, r.jsx)(o.wx6, { type: "info", children: a }) : null;
    };
function D(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: i,
            isGift: s,
            paymentSourceType: a,
            activeSubscription: o,
            invoiceSummaryTypeWithPreview: l,
            isPrepaidPaymentSource: u = !1,
            overrideRenewalDate: d,
            fractionalPremiumInfo: _,
            hideLegalContent: f,
            isInvoiceBilledImmediately: T = !0,
        } = e,
        { immediateDelivery: S } = (0, g.U)(),
        { discountOffer: y } = (0, E.P5)();
    if (l.type === m.N$.LOADING) return null;
    let { invoicePreview: v } = l,
        N = ("renewalInvoicePreview" in l ? l.renewalInvoicePreview : null) ?? v,
        C = N.invoiceItems.find((e) => e.subscriptionPlanId === i.id),
        R = null != C ? (0, A.Re)(C, y).amount : N.subtotal;
    if (f) return null;
    let O = {
        purchaseButtonText: (0, h.Ro)({
            productLine: I.EZt.PREMIUM,
            purchaseType: I.VVm.SUBSCRIPTION,
            plan: i,
            premiumSubscription: o,
            isGift: s,
            planGroup: t,
            isPrepaidPaymentSource: u,
        }),
        totalDue: T ? v.total : 0,
        renewalPrice: R,
        currency: v.currency,
        interval: i.interval,
        intervalCount: i.intervalCount,
        startDate: (0, p.de)({
            overrideRenewalDate: d,
            currentInvoice: v.id !== N.id ? v : void 0,
            renewalInvoice: N,
            isSubscriptionUpdate: null != o,
            fractionalPremiumInfo: _,
        }),
    };
    return (0, r.jsx)(c._P, {
        variant: { type: s ? c.I0.GiftNitro : n ? c.I0.SubscriptionTrial : c.I0.Subscription, ...O },
        paymentSourceType: a,
        immediateDelivery: S,
    });
}
