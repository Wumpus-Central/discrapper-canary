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
    y = n(756366),
    v = n(231711);
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
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: l,
                discountInvoiceItems: u,
                showPlanStatusSubText: d,
                disabled: _,
                isInPlanSelectStep: p,
                headingSubText: h,
            } = e,
            m = (0, f.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: l,
                discountInvoiceItems: u,
                showTotal: p,
            }),
            {
                selectedPlan: E,
                selectedPlanPrice: g,
                isPrepaid: I,
                shouldShowHRKEuroWarning: S,
                shouldShowTotalInSubscriptionFlow: y,
                shouldShowUpdatedPaymentModal: N,
                userTrialOffer: C,
                trialPeriodCopy: R,
                isEligibleForTrial: O,
                isEligibleForBOGOPromotion: b,
                premiumSubscriptionPlan: D,
                skuId: L,
            } = m,
            { shouldShowPremiumSwitchPlanSelectText: w, premiumSwitchPlanSelectText: M } = i.useMemo(() => {
                let e = (0, f.U_)(D, { isEligibleForBOGOPromotion: b });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, f.yq)(D, L) : null,
                };
            }, [D, b, L]),
            P = i.useMemo(
                () => (p && O ? (0, f.Ct)(C, { subscriptionPeriodEnd: l, trialPeriodCopy: R }) : h),
                [p, O, C, l, R, h],
            ),
            {
                selectPlan: x,
                premiumSubscription: k,
                userLocale: U,
                priceOptions: G,
                isGift: F,
                isEligibleForDiscount: V,
                shouldUseCalculatedDiscount: B,
                discountOffer: H,
                discountAmountOff: j,
            } = (0, f.Rx)(m),
            Y = i.useMemo(() => (s.length > 0 ? T.hd[s[0]].premiumType : void 0), [s]),
            W = i.useCallback(
                (e) => {
                    x(e.value);
                },
                [x],
            ),
            K = i.useMemo(() => {
                let e = null != H && H.discount.user_usage_limit_interval === T.Ff.MONTH;
                return s.map((t) => {
                    let { isCurrentPlan: n, disabled: r } = (0, f.cD)(k, t),
                        i = (0, A.Rs)(k, {
                            planId: t,
                            isEligibleForDiscount: V,
                            isCurrentPlan: n,
                            disabled: r,
                            userLocale: U,
                            showPlanStatusSubText: d,
                            isInPlanSelectStep: p,
                            discountOffer: H,
                            discountAmountOff: j,
                            isMonthlyDiscountOffer: e,
                            priceOptions: G,
                            isGift: F,
                            shouldUseCalculatedDiscount: B,
                            isEligibleForTrial: O,
                            isEligibleForBOGOPromotion: b,
                        });
                    return {
                        value: i.id,
                        secondarySubText: i.secondarySubText,
                        primaryText: i.planName,
                        badgeText: i.promoText,
                        subText: i.priceText,
                        isDisabled: i.isDisabled || _,
                    };
                });
            }, [_, d, s, U, V, H, j, G, F, B, O, b, k, p]);
        return null == Y
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      w &&
                          (0, r.jsx)(o.EYj, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: v.ST,
                              children: M,
                          }),
                      (0, r.jsx)(c.me, {
                          headingComponent: (0, r.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: Y }),
                          headingSubText: P,
                          planRadioOptions: K,
                          value: E?.id ?? "",
                          onChange: W,
                      }),
                      p
                          ? (0, f.LR)({
                                selectedPlan: E,
                                selectedPlanPrice: g,
                                isPrepaid: I,
                                shouldShowHRKEuroWarning: S,
                                shouldShowUpdatedPaymentModal: N,
                                showTotal: p,
                                shouldShowTotalInSubscriptionFlow: y,
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
