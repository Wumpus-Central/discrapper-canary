"use strict";
n.d(t, { PI: () => R, W9: () => y, XH: () => v, l$: () => C });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(854354),
    o = n(93159),
    l = n(270537),
    u = n(881489),
    c = n(156962),
    d = n(446929),
    _ = n(692440),
    f = n(367921),
    p = n(299301),
    h = n(156312),
    m = n(908419),
    E = n(888751),
    g = n(652215),
    A = n(788868),
    I = n(985018),
    T = n(327105),
    S = n(299279);
let y = (e) => {
        let {
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: i,
                isPrepaidPaymentSource: s,
                isCustomGift: o,
            } = e,
            { invoicePreview: u } = t,
            c = [];
        c =
            t.type === p.N$.PREMIUM_GIFT
                ? (0, E.fk)(u, { isCustomGift: o, isPrepaidPaymentSource: s, subscriptionPlan: n })
                : (0, E.IY)(u, {
                      isPrepaidPaymentSource: s,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: i,
                  }).lineItems;
        let d = (0, a.lp)(u, { manualLineItems: c, includeTaxLineItem: !0 });
        return (0, r.jsx)(l.Vm, { label: I.intl.string(T.default.eoXh7B), lineItems: d, currency: u.currency });
    },
    v = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: a,
                subscriptionPeriodEnd: l,
                showPlanStatusSubText: u,
                disabled: c,
                isInPlanSelectStep: _,
                headingSubText: f,
            } = e,
            p = (0, d.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: a,
                subscriptionPeriodEnd: l,
                showTotal: _,
            }),
            {
                selectedPlan: h,
                selectedPlanPrice: m,
                isPrepaid: g,
                shouldShowHRKEuroWarning: I,
                shouldShowTotalInSubscriptionFlow: T,
                shouldShowUpdatedPaymentModal: y,
                userTrialOffer: v,
                trialPeriodCopy: N,
                isEligibleForTrial: C,
                isEligibleForBOGOPromotion: R,
                premiumSubscriptionPlan: O,
                skuId: b,
            } = p,
            { shouldShowPremiumSwitchPlanSelectText: D, premiumSwitchPlanSelectText: L } = i.useMemo(() => {
                let e = (0, d.U_)(O, { isEligibleForBOGOPromotion: R });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, d.yq)(O, b) : null,
                };
            }, [O, R, b]),
            w = i.useMemo(
                () => (_ && C ? (0, d.Ct)(v, { subscriptionPeriodEnd: l, trialPeriodCopy: N }) : f),
                [_, C, v, l, N, f],
            ),
            {
                selectPlan: M,
                premiumSubscription: P,
                userLocale: x,
                priceOptions: k,
                isGift: U,
                isEligibleForDiscount: G,
                shouldUseCalculatedDiscount: F,
                discountOffer: V,
                discountAmountOff: B,
            } = (0, d.Rx)(p),
            H = i.useMemo(() => (a.length > 0 ? A.hd[a[0]].premiumType : void 0), [a]),
            j = i.useCallback(
                (e) => {
                    M(e.value);
                },
                [M],
            ),
            Y = i.useMemo(() => {
                let e = null != V && V.discount.user_usage_limit_interval === A.Ff.MONTH;
                return a.map((t) => {
                    let { isCurrentPlan: n, disabled: r } = (0, d.cD)(P, t),
                        i = (0, E.Rs)(P, {
                            planId: t,
                            isEligibleForDiscount: G,
                            isCurrentPlan: n,
                            disabled: r,
                            userLocale: x,
                            showPlanStatusSubText: u,
                            isInPlanSelectStep: _,
                            discountOffer: V,
                            discountAmountOff: B,
                            isMonthlyDiscountOffer: e,
                            priceOptions: k,
                            isGift: U,
                            shouldUseCalculatedDiscount: F,
                            isEligibleForTrial: C,
                            isEligibleForBOGOPromotion: R,
                        });
                    return {
                        value: i.id,
                        secondarySubText: i.secondarySubText,
                        primaryText: i.planName,
                        badgeText: i.promoText,
                        subText: i.priceText,
                        isDisabled: i.isDisabled || c,
                    };
                });
            }, [c, u, a, x, G, V, B, k, U, F, C, R, P, _]);
        return null == H
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      D &&
                          (0, r.jsx)(s.EYj, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: S.S,
                              children: L,
                          }),
                      (0, r.jsx)(o.me, {
                          headingComponent: (0, r.jsx)(o.ec, { size: "sm", color: "text-strong", premiumType: H }),
                          headingSubText: w,
                          planRadioOptions: Y,
                          value: h?.id ?? "",
                          onChange: j,
                      }),
                      _
                          ? (0, d.LR)({
                                selectedPlan: h,
                                selectedPlanPrice: m,
                                isPrepaid: g,
                                shouldShowHRKEuroWarning: I,
                                shouldShowUpdatedPaymentModal: y,
                                showTotal: _,
                                shouldShowTotalInSubscriptionFlow: T,
                                previewTotalSectionClassName: S.$,
                            })
                          : null,
                  ],
              });
    },
    N = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            s = (0, u.ds)(),
            a = {};
        return (
            s ? (a = { variant: c.uA.REVERSE_TRIAL }) : n && (a = { variant: c.uA.TRIAL, trialPeriod: r, trialEnd: i }),
            { fractionalPremiumBannerMessage: (0, c.NQ)({ fractionalPremiumInfo: t, ...a }) }
        );
    },
    C = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: a } = e,
            { fractionalPremiumBannerMessage: o } = N({
                fractionalPremiumInfo: t,
                isEligibleForTrial: n,
                trialPeriodCopy: i,
                subscriptionPeriodEnd: a,
            });
        return null != o && "" !== o ? (0, r.jsx)(s.wx6, { type: "info", children: o }) : null;
    };
function R(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: i,
            isGift: s,
            paymentSourceType: a,
            activeSubscription: l,
            invoiceSummaryTypeWithPreview: u,
            isPrepaidPaymentSource: c = !1,
            overrideRenewalDate: d,
            fractionalPremiumInfo: A,
            hideLegalContent: I,
            isInvoiceBilledImmediately: T = !0,
        } = e,
        { immediateDelivery: S } = (0, m.U)(),
        { discountOffer: y } = (0, h.P5)();
    if (u.type === p.N$.LOADING) return null;
    let { invoicePreview: v } = u,
        N = ("renewalInvoicePreview" in u ? u.renewalInvoicePreview : null) ?? v,
        C = N.invoiceItems.find((e) => e.subscriptionPlanId === i.id),
        R = null != C ? (0, E.Re)(C, y).amount : N.subtotal;
    if (I) return null;
    let O = {
        purchaseButtonText: (0, f.Ro)({
            productLine: g.EZt.PREMIUM,
            purchaseType: g.VVm.SUBSCRIPTION,
            plan: i,
            premiumSubscription: l,
            isGift: s,
            planGroup: t,
            isPrepaidPaymentSource: c,
        }),
        totalDue: T ? v.total : 0,
        renewalPrice: R,
        currency: v.currency,
        interval: i.interval,
        intervalCount: i.intervalCount,
        startDate: (0, _.de)({
            overrideRenewalDate: d,
            currentInvoice: v.id !== N.id ? v : void 0,
            renewalInvoice: N,
            isSubscriptionUpdate: null != l,
            fractionalPremiumInfo: A,
        }),
    };
    return (0, r.jsx)(o._P, {
        variant: { type: s ? o.I0.GiftNitro : n ? o.I0.SubscriptionTrial : o.I0.Subscription, ...O },
        paymentSourceType: a,
        immediateDelivery: S,
    });
}
