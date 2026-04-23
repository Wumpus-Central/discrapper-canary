"use strict";
n.d(t, { PI: () => v, W9: () => R, XH: () => O, l$: () => y });
var i = n(627968),
    r = n(64700),
    s = n(834730),
    a = n(683071),
    o = n(546605),
    l = n(854354),
    d = n(232467),
    _ = n(848584),
    u = n(881489),
    c = n(531506),
    E = n(337092),
    h = n(692440),
    m = n(367921),
    f = n(299301),
    g = n(156312),
    p = n(908419),
    A = n(888751),
    I = n(652215),
    T = n(788868),
    S = n(985018),
    N = n(327105),
    C = n(299279);
let R = (e) => {
        let {
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: r,
                isPrepaidPaymentSource: s,
                isCustomGift: a,
            } = e,
            { invoicePreview: o } = t,
            d = [];
        d =
            t.type === f.N$.PREMIUM_GIFT
                ? (0, A.fk)(o, { isCustomGift: a, isPrepaidPaymentSource: s, subscriptionPlan: n })
                : (0, A.IY)(o, {
                      isPrepaidPaymentSource: s,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: r,
                  }).lineItems;
        let u = (0, l.lp)(o, { manualLineItems: d, includeTaxLineItem: !0 });
        return (0, i.jsx)(_.Vm, { label: S.intl.string(N.default.eoXh7B), lineItems: u, currency: o.currency });
    },
    O = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: a,
                subscriptionPeriodEnd: o,
                showPlanStatusSubText: l,
                disabled: _,
                isInPlanSelectStep: u,
                headingSubText: c,
            } = e,
            h = (0, E.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: a,
                subscriptionPeriodEnd: o,
                showTotal: u,
            }),
            {
                selectedPlan: m,
                selectedPlanPrice: f,
                isPrepaid: g,
                shouldShowHRKEuroWarning: p,
                shouldShowTotalInSubscriptionFlow: I,
                shouldShowUpdatedPaymentModal: S,
                userTrialOffer: N,
                trialPeriodCopy: R,
                isEligibleForTrial: O,
                isEligibleForBOGOPromotion: y,
                premiumSubscriptionPlan: v,
                skuId: D,
            } = h,
            { shouldShowPremiumSwitchPlanSelectText: L, premiumSwitchPlanSelectText: b } = r.useMemo(() => {
                let e = (0, E.U_)(v, { isEligibleForBOGOPromotion: y });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, E.yq)(v, D) : null,
                };
            }, [v, y, D]),
            w = r.useMemo(
                () => (u && O ? (0, E.Ct)(N, { subscriptionPeriodEnd: o, trialPeriodCopy: R }) : c),
                [u, O, N, o, R, c],
            ),
            {
                selectPlan: P,
                premiumSubscription: k,
                userLocale: M,
                priceOptions: U,
                isGift: x,
                isEligibleForDiscount: G,
                shouldUseCalculatedDiscount: V,
                discountOffer: F,
                discountAmountOff: B,
            } = (0, E.Rx)(h),
            H = r.useMemo(() => (a.length > 0 ? T.hd[a[0]].premiumType : void 0), [a]),
            j = r.useCallback(
                (e) => {
                    P(e.value);
                },
                [P],
            ),
            W = r.useMemo(() => {
                let e = null != F && F.discount.user_usage_limit_interval === T.Ff.MONTH;
                return a.map((t) => {
                    let { isCurrentPlan: n, disabled: i } = (0, E.cD)(k, t),
                        r = (0, A.Rs)(k, {
                            planId: t,
                            isEligibleForDiscount: G,
                            isCurrentPlan: n,
                            disabled: i,
                            userLocale: M,
                            showPlanStatusSubText: l,
                            isInPlanSelectStep: u,
                            discountOffer: F,
                            discountAmountOff: B,
                            isMonthlyDiscountOffer: e,
                            priceOptions: U,
                            isGift: x,
                            shouldUseCalculatedDiscount: V,
                            isEligibleForTrial: O,
                            isEligibleForBOGOPromotion: y,
                        });
                    return {
                        value: r.id,
                        secondarySubText: r.secondarySubText,
                        primaryText: r.planName,
                        badgeText: r.promoText,
                        subText: r.priceText,
                        isDisabled: r.isDisabled || _,
                    };
                });
            }, [_, l, a, M, G, F, B, U, x, V, O, y, k, u]);
        return null == H
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      L &&
                          (0, i.jsx)(s.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: C.S,
                              children: b,
                          }),
                      (0, i.jsx)(d.me, {
                          headingComponent: (0, i.jsx)(d.ec, { size: "sm", color: "text-strong", premiumType: H }),
                          headingSubText: w,
                          planRadioOptions: W,
                          value: m?.id ?? "",
                          onChange: j,
                      }),
                      u
                          ? (0, E.LR)({
                                selectedPlan: m,
                                selectedPlanPrice: f,
                                isPrepaid: g,
                                shouldShowHRKEuroWarning: p,
                                shouldShowUpdatedPaymentModal: S,
                                showTotal: u,
                                shouldShowTotalInSubscriptionFlow: I,
                                previewTotalSectionClassName: C.$,
                            })
                          : null,
                  ],
              });
    },
    y = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: s } = e,
            { fractionalPremiumBannerMessage: o } = ((e) => {
                let {
                        fractionalPremiumInfo: t,
                        isEligibleForTrial: n,
                        trialPeriodCopy: i,
                        subscriptionPeriodEnd: r,
                    } = e,
                    s = (0, u.ds)(),
                    a = {};
                return (
                    s
                        ? (a = { variant: c.uA.REVERSE_TRIAL })
                        : n && (a = { variant: c.uA.TRIAL, trialPeriod: i, trialEnd: r }),
                    { fractionalPremiumBannerMessage: (0, c.NQ)({ fractionalPremiumInfo: t, ...a }) }
                );
            })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: s });
        return null != o && "" !== o ? (0, i.jsx)(a.w, { type: "info", children: o }) : null;
    };
function v(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: r,
            isGift: s,
            paymentSourceType: a,
            activeSubscription: l,
            invoiceSummaryTypeWithPreview: _,
            isPrepaidPaymentSource: u = !1,
            overrideRenewalDate: c,
            fractionalPremiumInfo: E,
            hideLegalContent: T,
            isInvoiceBilledImmediately: S = !0,
        } = e,
        { immediateDelivery: N } = (0, p.U)(),
        { discountOffer: C, paymentSourceId: R, checkoutPaymentSources: O } = (0, g.P5)(),
        y = (0, o.vg)("PremiumUnifiedCheckoutLegal");
    if (_.type === f.N$.LOADING) return null;
    let { invoicePreview: v } = _,
        D = ("renewalInvoicePreview" in _ ? _.renewalInvoicePreview : null) ?? v,
        L = D.invoiceItems.find((e) => e.subscriptionPlanId === r.id),
        b = null != L ? (0, A.Re)(L, C).amount : D.subtotal;
    if (T) return null;
    let w = y && null != R && O?.some((e) => e.id === R && null != e.relocationCountry),
        P = {
            purchaseButtonText: (0, m.Ro)({
                productLine: I.EZt.PREMIUM,
                purchaseType: I.VVm.SUBSCRIPTION,
                plan: r,
                premiumSubscription: l,
                isGift: s,
                planGroup: t,
                isPrepaidPaymentSource: u,
                willRelocateStoreCountry: w,
            }),
            totalDue: S ? v.total : 0,
            renewalPrice: b,
            currency: v.currency,
            interval: r.interval,
            intervalCount: r.intervalCount,
            startDate: (0, h.de)({
                overrideRenewalDate: c,
                currentInvoice: v.id !== D.id ? v : void 0,
                renewalInvoice: D,
                isSubscriptionUpdate: null != l,
                fractionalPremiumInfo: E,
            }),
        };
    return (0, i.jsx)(d._P, {
        variant: { type: s ? d.I0.GiftNitro : n ? d.I0.SubscriptionTrial : d.I0.Subscription, ...P },
        paymentSourceType: a,
        immediateDelivery: N,
    });
}
