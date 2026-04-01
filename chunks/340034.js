"use strict";
n.d(t, { PI: () => L, W9: () => R, XH: () => O, l$: () => D, rk: () => C });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(821189),
    u = n(854354),
    c = n(93159),
    d = n(270537),
    _ = n(881489),
    f = n(156962),
    p = n(446929),
    h = n(692440),
    m = n(367921),
    E = n(299301),
    g = n(156312),
    A = n(908419),
    I = n(888751),
    T = n(652215),
    S = n(788868),
    y = n(985018),
    v = n(756366),
    N = n(231711);
let C = (e) => {
        let { className: t, currencies: n, onChange: i, selectedCurrency: s, ...o } = e;
        return (0, r.jsx)(l.f, {
            currencies: n,
            className: a()(N.p2, t),
            children: (0, r.jsx)(l.A, {
                label: y.intl.string(y.t["/AAR02"]),
                selectedCurrency: s,
                currencies: n,
                onChange: i,
                ...o,
            }),
        });
    },
    R = (e) => {
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
            t.type === E.N$.PREMIUM_GIFT
                ? (0, I.fk)(o, { isCustomGift: a, isPrepaidPaymentSource: s, subscriptionPlan: n })
                : (0, I.IY)(o, {
                      isPrepaidPaymentSource: s,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: i,
                  }).lineItems;
        let c = (0, u.lp)(o, { manualLineItems: l, includeTaxLineItem: !0 });
        return (0, r.jsx)(d.Vm, { label: y.intl.string(v.default.eoXh7B), lineItems: c, currency: o.currency });
    },
    O = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                subscriptionPeriodEnd: a,
                discountInvoiceItems: l,
                showPlanStatusSubText: u,
                disabled: d,
                isInPlanSelectStep: _,
                headingSubText: f,
            } = e,
            h = (0, p.RO)({
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
                shouldShowHRKEuroWarning: A,
                shouldShowTotalInSubscriptionFlow: T,
                shouldShowUpdatedPaymentModal: y,
                userTrialOffer: v,
                trialPeriodCopy: C,
                isEligibleForTrial: R,
                isEligibleForBOGOPromotion: O,
                premiumSubscriptionPlan: b,
                skuId: D,
            } = h,
            { shouldShowPremiumSwitchPlanSelectText: L, premiumSwitchPlanSelectText: w } = i.useMemo(() => {
                let e = (0, p.U_)(b, { isEligibleForBOGOPromotion: O });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, p.yq)(b, D) : null,
                };
            }, [b, O, D]),
            M = i.useMemo(
                () => (_ && R ? (0, p.Ct)(v, { subscriptionPeriodEnd: a, trialPeriodCopy: C }) : f),
                [_, R, v, a, C, f],
            ),
            {
                selectPlan: x,
                premiumSubscription: P,
                userLocale: k,
                priceOptions: U,
                isGift: G,
                isEligibleForDiscount: F,
                shouldUseCalculatedDiscount: V,
                discountOffer: B,
                discountAmountOff: H,
            } = (0, p.Rx)(h),
            j = i.useMemo(() => (s.length > 0 ? S.hd[s[0]].premiumType : void 0), [s]),
            Y = i.useCallback(
                (e) => {
                    x(e.value);
                },
                [x],
            ),
            W = i.useMemo(() => {
                let e = null != B && B.discount.user_usage_limit_interval === S.Ff.MONTH;
                return s.map((t) => {
                    let { isCurrentPlan: n, disabled: r } = (0, p.cD)(P, t),
                        i = (0, I.Rs)(P, {
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
            }, [d, u, s, k, F, B, H, U, G, V, R, O, P, _]);
        return null == j
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      L &&
                          (0, r.jsx)(o.EYj, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: N.ST,
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
                          ? (0, p.LR)({
                                selectedPlan: m,
                                selectedPlanPrice: E,
                                isPrepaid: g,
                                shouldShowHRKEuroWarning: A,
                                shouldShowUpdatedPaymentModal: y,
                                showTotal: _,
                                shouldShowTotalInSubscriptionFlow: T,
                                previewTotalSectionClassName: N.$r,
                            })
                          : null,
                  ],
              });
    },
    b = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            s = (0, _.ds)(),
            a = {};
        return (
            s ? (a = { variant: f.uA.REVERSE_TRIAL }) : n && (a = { variant: f.uA.TRIAL, trialPeriod: r, trialEnd: i }),
            { fractionalPremiumBannerMessage: (0, f.NQ)({ fractionalPremiumInfo: t, ...a }) }
        );
    },
    D = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: s } = e,
            { fractionalPremiumBannerMessage: a } = b({
                fractionalPremiumInfo: t,
                isEligibleForTrial: n,
                trialPeriodCopy: i,
                subscriptionPeriodEnd: s,
            });
        return null != a && "" !== a ? (0, r.jsx)(o.wx6, { type: "info", children: a }) : null;
    };
function L(e) {
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
            isInvoiceBilledImmediately: p = !0,
        } = e,
        { immediateDelivery: S } = (0, A.U)(),
        { discountOffer: y } = (0, g.P5)();
    if (l.type === E.N$.LOADING) return null;
    let { invoicePreview: v } = l,
        N = ("renewalInvoicePreview" in l ? l.renewalInvoicePreview : null) ?? v,
        C = N.invoiceItems.find((e) => e.subscriptionPlanId === i.id),
        R = null != C ? (0, I.Re)(C, y).amount : N.subtotal;
    if (f) return null;
    let O = {
        purchaseButtonText: (0, m.Ro)({
            productLine: T.EZt.PREMIUM,
            purchaseType: T.VVm.SUBSCRIPTION,
            plan: i,
            premiumSubscription: o,
            isGift: s,
            planGroup: t,
            isPrepaidPaymentSource: u,
        }),
        totalDue: p ? v.total : 0,
        renewalPrice: R,
        currency: v.currency,
        interval: i.interval,
        intervalCount: i.intervalCount,
        startDate: (0, h.de)({
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
