"use strict";
n.d(t, { ID: () => R, PI: () => w, W9: () => O, XH: () => b, hP: () => M, l$: () => L, rk: () => C });
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
    E = n(371794),
    g = n(156312),
    A = n(908419),
    I = n(888751),
    T = n(652215),
    S = n(788868),
    y = n(985018),
    v = n(756366),
    N = n(772992);
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
        let { label: t = y.intl.string(v.default.eoXh7B), lineItems: n, currency: i } = e;
        return (0, r.jsx)(d.Vm, { label: t, lineItems: n, currency: i });
    },
    O = (e) => {
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
                ? (0, I.fk)(o, { isCustomGift: a, isPrepaidPaymentSource: s, subscriptionPlan: n })
                : (0, I.IY)(o, {
                      isPrepaidPaymentSource: s,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: i,
                  }).lineItems;
        let c = (0, u.lp)(o, { manualLineItems: l, includeTaxLineItem: !0 });
        return (0, r.jsx)(R, { label: y.intl.string(v.default.eoXh7B), lineItems: c, currency: o.currency });
    },
    b = (e) => {
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
                isPrepaid: A,
                shouldShowHRKEuroWarning: T,
                shouldShowTotalInSubscriptionFlow: y,
                shouldShowUpdatedPaymentModal: v,
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
            x = i.useMemo(
                () => (p && O ? (0, f.Ct)(C, { subscriptionPeriodEnd: l, trialPeriodCopy: R }) : h),
                [p, O, C, l, R, h],
            ),
            {
                selectPlan: P,
                premiumSubscription: k,
                userLocale: U,
                priceOptions: G,
                isGift: F,
                isEligibleForDiscount: V,
                shouldUseCalculatedDiscount: B,
                discountOffer: H,
                discountAmountOff: j,
            } = (0, f.Rx)(m),
            Y = i.useMemo(() => (s.length > 0 ? S.hd[s[0]].premiumType : void 0), [s]),
            W = i.useCallback(
                (e) => {
                    P(e.value);
                },
                [P],
            ),
            K = i.useMemo(() => {
                let e = null != H && H.discount.user_usage_limit_interval === S.Ff.MONTH;
                return s.map((t) => {
                    let { isCurrentPlan: n, disabled: r } = (0, f.cD)(k, t),
                        i = (0, I.Rs)(k, {
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
                              className: N.ST,
                              children: M,
                          }),
                      (0, r.jsx)(c.me, {
                          headingComponent: (0, r.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: Y }),
                          headingSubText: x,
                          planRadioOptions: K,
                          value: E?.id ?? "",
                          onChange: W,
                      }),
                      p
                          ? (0, f.LR)({
                                selectedPlan: E,
                                selectedPlanPrice: g,
                                isPrepaid: A,
                                shouldShowHRKEuroWarning: T,
                                shouldShowUpdatedPaymentModal: v,
                                showTotal: p,
                                shouldShowTotalInSubscriptionFlow: y,
                                previewTotalSectionClassName: N.$r,
                            })
                          : null,
                  ],
              });
    },
    D = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            s = n ? { variant: _.uA.TRIAL, trialPeriod: r, trialEnd: i } : {};
        return { fractionalPremiumBannerMessage: (0, _.NQ)({ fractionalPremiumInfo: t, ...s }) };
    },
    L = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: s } = e,
            { fractionalPremiumBannerMessage: a } = D({
                fractionalPremiumInfo: t,
                isEligibleForTrial: n,
                trialPeriodCopy: i,
                subscriptionPeriodEnd: s,
            });
        return null != a && "" !== a ? (0, r.jsx)(o.wx6, { type: "info", children: a }) : null;
    };
function w(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: i,
            isGift: s,
            paymentSourceType: a,
            activeSubscription: o,
            invoiceSummaryTypeWithPreview: l,
            overrideRenewalDate: u,
            fractionalPremiumInfo: d,
            hideLegalContent: _,
        } = e,
        { immediateDelivery: f } = (0, A.U)(),
        { discountOffer: E } = (0, g.P5)();
    if (l.type === m.N$.LOADING) return null;
    let { invoicePreview: S } = l,
        y = ("renewalInvoicePreview" in l ? l.renewalInvoicePreview : null) ?? S,
        v = y.invoiceItems.find((e) => e.subscriptionPlanId === i.id),
        N = null != v ? (0, I.Re)(v, E).amount : y.subtotal;
    if (_) return null;
    let C = {
        purchaseButtonText: (0, h.Ro)({
            productLine: T.EZt.PREMIUM,
            purchaseType: T.VVm.SUBSCRIPTION,
            plan: i,
            premiumSubscription: o,
            isGift: s,
            planGroup: t,
            isPrepaidPaymentSource: !1,
        }),
        totalDue: S.total,
        renewalPrice: N,
        currency: S.currency,
        interval: i.interval,
        intervalCount: i.intervalCount,
        startDate: (0, p.de)({
            overrideRenewalDate: u,
            currentInvoice: S.id !== y.id ? S : void 0,
            renewalInvoice: y,
            isSubscriptionUpdate: null != o,
            fractionalPremiumInfo: d,
        }),
    };
    return (0, r.jsx)(c._P, {
        variant: { type: s ? c.I0.GiftNitro : n ? c.I0.SubscriptionTrial : c.I0.Subscription, ...C },
        paymentSourceType: a,
        immediateDelivery: f,
    });
}
function M(e) {
    let { productLine: t, premiumType: n, applicationId: i, thumbnail: s } = e;
    return n === S.PremiumTypes.TIER_0
        ? (0, r.jsx)(c.DH, {})
        : n === S.PremiumTypes.TIER_2
          ? (0, r.jsx)(c.JW, {})
          : null != i && null != s
            ? (0, r.jsx)("img", { src: (0, E.YE)(i, s, 64), alt: "", className: N.gw })
            : t === T.EZt.APPLICATION
              ? (0, r.jsx)(c.jw, {})
              : void 0;
}
