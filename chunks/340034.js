"use strict";
n.d(t, { ID: () => C, PI: () => L, W9: () => R, XH: () => O, hP: () => w, l$: () => D, rk: () => N });
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
    p = n(367921),
    h = n(299301),
    m = n(371794),
    E = n(156312),
    g = n(908419),
    A = n(888751),
    I = n(652215),
    T = n(788868),
    S = n(985018),
    y = n(756366),
    v = n(772992);
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
        let { label: t = S.intl.string(y.default.eoXh7B), lineItems: n, currency: s, hasSubscriptionCredit: a } = e,
            o = i.useMemo(() => (a ? S.intl.string(S.t.A7Hpfs) : void 0), [a]);
        return (0, r.jsx)(d.Vm, { label: t, lineItems: n, currency: s, collapsedContentLabelOverride: o });
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
            l = [],
            c = null;
        if (t.type === h.N$.PREMIUM_GIFT)
            l = (0, A.fk)(o, { isCustomGift: a, isPrepaidPaymentSource: s, subscriptionPlan: n });
        else {
            let e = (0, A.IY)(o, {
                isPrepaidPaymentSource: s,
                invoiceSummaryType: t.type,
                subscriptionPlan: n,
                subscriptionTrial: i,
            });
            (l = e.lineItems), (c = e.entitlementDiscount);
        }
        let d = (0, u.lp)(o, { manualLineItems: l, includeTaxLineItem: !0 });
        return (0, r.jsx)(C, {
            label: S.intl.string(y.default.eoXh7B),
            lineItems: d,
            currency: o.currency,
            hasSubscriptionCredit: null != c,
        });
    },
    O = (e) => {
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
            Y = i.useMemo(() => (s.length > 0 ? T.hd[s[0]].premiumType : void 0), [s]),
            W = i.useCallback(
                (e) => {
                    P(e.value);
                },
                [P],
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
                          headingSubText: x,
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
    b = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            s = n ? { variant: _.uA.TRIAL, trialPeriod: r, trialEnd: i } : {};
        return { fractionalPremiumBannerMessage: (0, _.NQ)({ fractionalPremiumInfo: t, ...s }) };
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
        } = e,
        { immediateDelivery: u } = (0, g.U)(),
        { discountOffer: d } = (0, E.P5)();
    if (l.type === h.N$.LOADING) return null;
    let { invoicePreview: _ } = l,
        f = ("renewalInvoicePreview" in l ? l.renewalInvoicePreview : null) ?? _,
        m = f.invoiceItems.find((e) => e.subscriptionPlanId === i.id),
        T = null != m ? (0, A.Re)(m, d).amount : f.subtotal,
        S = {
            purchaseButtonText: (0, p.Ro)({
                productLine: I.EZt.PREMIUM,
                purchaseType: I.VVm.SUBSCRIPTION,
                plan: i,
                premiumSubscription: o,
                isGift: s,
                planGroup: t,
                isPrepaidPaymentSource: !1,
            }),
            totalDue: _.total,
            renewalPrice: T,
            currency: _.currency,
            interval: i.interval,
            intervalCount: i.intervalCount,
            startDate: _.subscriptionPeriodEnd,
        };
    return (0, r.jsx)(c._P, {
        variant: { type: s ? c.I0.GiftNitro : n ? c.I0.SubscriptionTrial : c.I0.Subscription, ...S },
        paymentSourceType: a,
        immediateDelivery: u,
    });
}
function w(e) {
    let { productLine: t, premiumType: n, applicationId: i, thumbnail: s } = e;
    return n === T.PremiumTypes.TIER_0
        ? (0, r.jsx)(c.DH, {})
        : n === T.PremiumTypes.TIER_2
          ? (0, r.jsx)(c.JW, {})
          : null != i && null != s
            ? (0, r.jsx)("img", { src: (0, m.YE)(i, s, 64), alt: "", className: v.gw })
            : t === I.EZt.APPLICATION
              ? (0, r.jsx)(c.jw, {})
              : void 0;
}
