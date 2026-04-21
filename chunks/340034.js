"use strict";
n.d(t, { PI: () => O, W9: () => v, XH: () => N, l$: () => R });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(546605),
    o = n(854354),
    l = n(93159),
    u = n(270537),
    c = n(881489),
    d = n(934581),
    _ = n(446929),
    f = n(692440),
    p = n(367921),
    h = n(299301),
    m = n(156312),
    E = n(908419),
    g = n(888751),
    A = n(652215),
    I = n(788868),
    T = n(985018),
    S = n(327105),
    y = n(299279);
let v = (e) => {
        let {
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: i,
                isPrepaidPaymentSource: s,
                isCustomGift: a,
            } = e,
            { invoicePreview: l } = t,
            c = [];
        c =
            t.type === h.N$.PREMIUM_GIFT
                ? (0, g.fk)(l, { isCustomGift: a, isPrepaidPaymentSource: s, subscriptionPlan: n })
                : (0, g.IY)(l, {
                      isPrepaidPaymentSource: s,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: i,
                  }).lineItems;
        let d = (0, o.lp)(l, { manualLineItems: c, includeTaxLineItem: !0 });
        return (0, r.jsx)(u.Vm, { label: T.intl.string(S.default.eoXh7B), lineItems: d, currency: l.currency });
    },
    N = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: a,
                subscriptionPeriodEnd: o,
                showPlanStatusSubText: u,
                disabled: c,
                isInPlanSelectStep: d,
                headingSubText: f,
            } = e,
            p = (0, _.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: a,
                subscriptionPeriodEnd: o,
                showTotal: d,
            }),
            {
                selectedPlan: h,
                selectedPlanPrice: m,
                isPrepaid: E,
                shouldShowHRKEuroWarning: A,
                shouldShowTotalInSubscriptionFlow: T,
                shouldShowUpdatedPaymentModal: S,
                userTrialOffer: v,
                trialPeriodCopy: N,
                isEligibleForTrial: C,
                isEligibleForBOGOPromotion: R,
                premiumSubscriptionPlan: O,
                skuId: b,
            } = p,
            { shouldShowPremiumSwitchPlanSelectText: D, premiumSwitchPlanSelectText: L } = i.useMemo(() => {
                let e = (0, _.U_)(O, { isEligibleForBOGOPromotion: R });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, _.yq)(O, b) : null,
                };
            }, [O, R, b]),
            w = i.useMemo(
                () => (d && C ? (0, _.Ct)(v, { subscriptionPeriodEnd: o, trialPeriodCopy: N }) : f),
                [d, C, v, o, N, f],
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
            } = (0, _.Rx)(p),
            H = i.useMemo(() => (a.length > 0 ? I.hd[a[0]].premiumType : void 0), [a]),
            j = i.useCallback(
                (e) => {
                    M(e.value);
                },
                [M],
            ),
            Y = i.useMemo(() => {
                let e = null != V && V.discount.user_usage_limit_interval === I.Ff.MONTH;
                return a.map((t) => {
                    let { isCurrentPlan: n, disabled: r } = (0, _.cD)(P, t),
                        i = (0, g.Rs)(P, {
                            planId: t,
                            isEligibleForDiscount: G,
                            isCurrentPlan: n,
                            disabled: r,
                            userLocale: x,
                            showPlanStatusSubText: u,
                            isInPlanSelectStep: d,
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
            }, [c, u, a, x, G, V, B, k, U, F, C, R, P, d]);
        return null == H
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      D &&
                          (0, r.jsx)(s.EYj, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: y.S,
                              children: L,
                          }),
                      (0, r.jsx)(l.me, {
                          headingComponent: (0, r.jsx)(l.ec, { size: "sm", color: "text-strong", premiumType: H }),
                          headingSubText: w,
                          planRadioOptions: Y,
                          value: h?.id ?? "",
                          onChange: j,
                      }),
                      d
                          ? (0, _.LR)({
                                selectedPlan: h,
                                selectedPlanPrice: m,
                                isPrepaid: E,
                                shouldShowHRKEuroWarning: A,
                                shouldShowUpdatedPaymentModal: S,
                                showTotal: d,
                                shouldShowTotalInSubscriptionFlow: T,
                                previewTotalSectionClassName: y.$,
                            })
                          : null,
                  ],
              });
    },
    C = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            s = (0, c.ds)(),
            a = {};
        return (
            s ? (a = { variant: d.uA.REVERSE_TRIAL }) : n && (a = { variant: d.uA.TRIAL, trialPeriod: r, trialEnd: i }),
            { fractionalPremiumBannerMessage: (0, d.NQ)({ fractionalPremiumInfo: t, ...a }) }
        );
    },
    R = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: a } = e,
            { fractionalPremiumBannerMessage: o } = C({
                fractionalPremiumInfo: t,
                isEligibleForTrial: n,
                trialPeriodCopy: i,
                subscriptionPeriodEnd: a,
            });
        return null != o && "" !== o ? (0, r.jsx)(s.wx6, { type: "info", children: o }) : null;
    };
function O(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: i,
            isGift: s,
            paymentSourceType: o,
            activeSubscription: u,
            invoiceSummaryTypeWithPreview: c,
            isPrepaidPaymentSource: d = !1,
            overrideRenewalDate: _,
            fractionalPremiumInfo: I,
            hideLegalContent: T,
            isInvoiceBilledImmediately: S = !0,
        } = e,
        { immediateDelivery: y } = (0, E.U)(),
        { discountOffer: v, paymentSourceId: N, checkoutPaymentSources: C } = (0, m.P5)(),
        R = (0, a.vg)("PremiumUnifiedCheckoutLegal");
    if (c.type === h.N$.LOADING) return null;
    let { invoicePreview: O } = c,
        b = ("renewalInvoicePreview" in c ? c.renewalInvoicePreview : null) ?? O,
        D = b.invoiceItems.find((e) => e.subscriptionPlanId === i.id),
        L = null != D ? (0, g.Re)(D, v).amount : b.subtotal;
    if (T) return null;
    let w = R && null != N && C?.some((e) => e.id === N && null != e.relocationCountry),
        M = {
            purchaseButtonText: (0, p.Ro)({
                productLine: A.EZt.PREMIUM,
                purchaseType: A.VVm.SUBSCRIPTION,
                plan: i,
                premiumSubscription: u,
                isGift: s,
                planGroup: t,
                isPrepaidPaymentSource: d,
                willRelocateStoreCountry: w,
            }),
            totalDue: S ? O.total : 0,
            renewalPrice: L,
            currency: O.currency,
            interval: i.interval,
            intervalCount: i.intervalCount,
            startDate: (0, f.de)({
                overrideRenewalDate: _,
                currentInvoice: O.id !== b.id ? O : void 0,
                renewalInvoice: b,
                isSubscriptionUpdate: null != u,
                fractionalPremiumInfo: I,
            }),
        };
    return (0, r.jsx)(l._P, {
        variant: { type: s ? l.I0.GiftNitro : n ? l.I0.SubscriptionTrial : l.I0.Subscription, ...M },
        paymentSourceType: o,
        immediateDelivery: y,
    });
}
