"use strict";
n.d(t, { PI: () => R, W9: () => v, XH: () => C, l$: () => O });
var r = n(627968),
    i = n(64700),
    s = n(834730),
    a = n(683071),
    o = n(546605),
    l = n(854354),
    u = n(93159),
    c = n(270537),
    d = n(881489),
    _ = n(156962),
    f = n(446929),
    p = n(692440),
    h = n(367921),
    E = n(299301),
    m = n(156312),
    g = n(908419),
    A = n(888751),
    I = n(652215),
    T = n(788868),
    S = n(985018),
    y = n(327105),
    N = n(299279);
let v = (e) => {
        let {
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: i,
                isPrepaidPaymentSource: s,
                isCustomGift: a,
            } = e,
            { invoicePreview: o } = t,
            u = [];
        u =
            t.type === E.N$.PREMIUM_GIFT
                ? (0, A.fk)(o, { isCustomGift: a, isPrepaidPaymentSource: s, subscriptionPlan: n })
                : (0, A.IY)(o, {
                      isPrepaidPaymentSource: s,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: i,
                  }).lineItems;
        let d = (0, l.lp)(o, { manualLineItems: u, includeTaxLineItem: !0 });
        return (0, r.jsx)(c.Vm, { label: S.intl.string(y.default.eoXh7B), lineItems: d, currency: o.currency });
    },
    C = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: a,
                subscriptionPeriodEnd: o,
                showPlanStatusSubText: l,
                disabled: c,
                isInPlanSelectStep: d,
                headingSubText: _,
            } = e,
            p = (0, f.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: a,
                subscriptionPeriodEnd: o,
                showTotal: d,
            }),
            {
                selectedPlan: h,
                selectedPlanPrice: E,
                isPrepaid: m,
                shouldShowHRKEuroWarning: g,
                shouldShowTotalInSubscriptionFlow: I,
                shouldShowUpdatedPaymentModal: S,
                userTrialOffer: y,
                trialPeriodCopy: v,
                isEligibleForTrial: C,
                isEligibleForBOGOPromotion: O,
                premiumSubscriptionPlan: R,
                skuId: b,
            } = p,
            { shouldShowPremiumSwitchPlanSelectText: D, premiumSwitchPlanSelectText: L } = i.useMemo(() => {
                let e = (0, f.U_)(R, { isEligibleForBOGOPromotion: O });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, f.yq)(R, b) : null,
                };
            }, [R, O, b]),
            w = i.useMemo(
                () => (d && C ? (0, f.Ct)(y, { subscriptionPeriodEnd: o, trialPeriodCopy: v }) : _),
                [d, C, y, o, v, _],
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
            } = (0, f.Rx)(p),
            H = i.useMemo(() => (a.length > 0 ? T.hd[a[0]].premiumType : void 0), [a]),
            j = i.useCallback(
                (e) => {
                    M(e.value);
                },
                [M],
            ),
            Y = i.useMemo(() => {
                let e = null != V && V.discount.user_usage_limit_interval === T.Ff.MONTH;
                return a.map((t) => {
                    let { isCurrentPlan: n, disabled: r } = (0, f.cD)(P, t),
                        i = (0, A.Rs)(P, {
                            planId: t,
                            isEligibleForDiscount: G,
                            isCurrentPlan: n,
                            disabled: r,
                            userLocale: x,
                            showPlanStatusSubText: l,
                            isInPlanSelectStep: d,
                            discountOffer: V,
                            discountAmountOff: B,
                            isMonthlyDiscountOffer: e,
                            priceOptions: k,
                            isGift: U,
                            shouldUseCalculatedDiscount: F,
                            isEligibleForTrial: C,
                            isEligibleForBOGOPromotion: O,
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
            }, [c, l, a, x, G, V, B, k, U, F, C, O, P, d]);
        return null == H
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      D &&
                          (0, r.jsx)(s.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: N.S,
                              children: L,
                          }),
                      (0, r.jsx)(u.me, {
                          headingComponent: (0, r.jsx)(u.ec, { size: "sm", color: "text-strong", premiumType: H }),
                          headingSubText: w,
                          planRadioOptions: Y,
                          value: h?.id ?? "",
                          onChange: j,
                      }),
                      d
                          ? (0, f.LR)({
                                selectedPlan: h,
                                selectedPlanPrice: E,
                                isPrepaid: m,
                                shouldShowHRKEuroWarning: g,
                                shouldShowUpdatedPaymentModal: S,
                                showTotal: d,
                                shouldShowTotalInSubscriptionFlow: I,
                                previewTotalSectionClassName: N.$,
                            })
                          : null,
                  ],
              });
    },
    O = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: s } = e,
            { fractionalPremiumBannerMessage: o } = ((e) => {
                let {
                        fractionalPremiumInfo: t,
                        isEligibleForTrial: n,
                        trialPeriodCopy: r,
                        subscriptionPeriodEnd: i,
                    } = e,
                    s = (0, d.ds)(),
                    a = {};
                return (
                    s
                        ? (a = { variant: _.uA.REVERSE_TRIAL })
                        : n && (a = { variant: _.uA.TRIAL, trialPeriod: r, trialEnd: i }),
                    { fractionalPremiumBannerMessage: (0, _.NQ)({ fractionalPremiumInfo: t, ...a }) }
                );
            })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: s });
        return null != o && "" !== o ? (0, r.jsx)(a.w, { type: "info", children: o }) : null;
    };
function R(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: i,
            isGift: s,
            paymentSourceType: a,
            activeSubscription: l,
            invoiceSummaryTypeWithPreview: c,
            isPrepaidPaymentSource: d = !1,
            overrideRenewalDate: _,
            fractionalPremiumInfo: f,
            hideLegalContent: T,
            isInvoiceBilledImmediately: S = !0,
        } = e,
        { immediateDelivery: y } = (0, g.U)(),
        { discountOffer: N, paymentSourceId: v, checkoutPaymentSources: C } = (0, m.P5)(),
        O = (0, o.vg)("PremiumUnifiedCheckoutLegal");
    if (c.type === E.N$.LOADING) return null;
    let { invoicePreview: R } = c,
        b = ("renewalInvoicePreview" in c ? c.renewalInvoicePreview : null) ?? R,
        D = b.invoiceItems.find((e) => e.subscriptionPlanId === i.id),
        L = null != D ? (0, A.Re)(D, N).amount : b.subtotal;
    if (T) return null;
    let w = O && null != v && C?.some((e) => e.id === v && null != e.relocationCountry),
        M = {
            purchaseButtonText: (0, h.Ro)({
                productLine: I.EZt.PREMIUM,
                purchaseType: I.VVm.SUBSCRIPTION,
                plan: i,
                premiumSubscription: l,
                isGift: s,
                planGroup: t,
                isPrepaidPaymentSource: d,
                willRelocateStoreCountry: w,
            }),
            totalDue: S ? R.total : 0,
            renewalPrice: L,
            currency: R.currency,
            interval: i.interval,
            intervalCount: i.intervalCount,
            startDate: (0, p.de)({
                overrideRenewalDate: _,
                currentInvoice: R.id !== b.id ? R : void 0,
                renewalInvoice: b,
                isSubscriptionUpdate: null != l,
                fractionalPremiumInfo: f,
            }),
        };
    return (0, r.jsx)(u._P, {
        variant: { type: s ? u.I0.GiftNitro : n ? u.I0.SubscriptionTrial : u.I0.Subscription, ...M },
        paymentSourceType: a,
        immediateDelivery: y,
    });
}
