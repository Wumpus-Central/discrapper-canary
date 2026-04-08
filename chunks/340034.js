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
    v = n(523376),
    N = n(444186);
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
                showPlanStatusSubText: l,
                disabled: u,
                isInPlanSelectStep: d,
                headingSubText: _,
            } = e,
            f = (0, p.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                subscriptionPeriodEnd: a,
                showTotal: d,
            }),
            {
                selectedPlan: h,
                selectedPlanPrice: m,
                isPrepaid: E,
                shouldShowHRKEuroWarning: g,
                shouldShowTotalInSubscriptionFlow: A,
                shouldShowUpdatedPaymentModal: T,
                userTrialOffer: y,
                trialPeriodCopy: v,
                isEligibleForTrial: C,
                isEligibleForBOGOPromotion: R,
                premiumSubscriptionPlan: O,
                skuId: b,
            } = f,
            { shouldShowPremiumSwitchPlanSelectText: D, premiumSwitchPlanSelectText: L } = i.useMemo(() => {
                let e = (0, p.U_)(O, { isEligibleForBOGOPromotion: R });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, p.yq)(O, b) : null,
                };
            }, [O, R, b]),
            w = i.useMemo(
                () => (d && C ? (0, p.Ct)(y, { subscriptionPeriodEnd: a, trialPeriodCopy: v }) : _),
                [d, C, y, a, v, _],
            ),
            {
                selectPlan: M,
                premiumSubscription: x,
                userLocale: P,
                priceOptions: k,
                isGift: U,
                isEligibleForDiscount: G,
                shouldUseCalculatedDiscount: F,
                discountOffer: V,
                discountAmountOff: B,
            } = (0, p.Rx)(f),
            H = i.useMemo(() => (s.length > 0 ? S.hd[s[0]].premiumType : void 0), [s]),
            j = i.useCallback(
                (e) => {
                    M(e.value);
                },
                [M],
            ),
            Y = i.useMemo(() => {
                let e = null != V && V.discount.user_usage_limit_interval === S.Ff.MONTH;
                return s.map((t) => {
                    let { isCurrentPlan: n, disabled: r } = (0, p.cD)(x, t),
                        i = (0, I.Rs)(x, {
                            planId: t,
                            isEligibleForDiscount: G,
                            isCurrentPlan: n,
                            disabled: r,
                            userLocale: P,
                            showPlanStatusSubText: l,
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
                        isDisabled: i.isDisabled || u,
                    };
                });
            }, [u, l, s, P, G, V, B, k, U, F, C, R, x, d]);
        return null == H
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      D &&
                          (0, r.jsx)(o.EYj, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: N.ST,
                              children: L,
                          }),
                      (0, r.jsx)(c.me, {
                          headingComponent: (0, r.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: H }),
                          headingSubText: w,
                          planRadioOptions: Y,
                          value: h?.id ?? "",
                          onChange: j,
                      }),
                      d
                          ? (0, p.LR)({
                                selectedPlan: h,
                                selectedPlanPrice: m,
                                isPrepaid: E,
                                shouldShowHRKEuroWarning: g,
                                shouldShowUpdatedPaymentModal: T,
                                showTotal: d,
                                shouldShowTotalInSubscriptionFlow: A,
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
