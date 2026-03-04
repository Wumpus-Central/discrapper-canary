"use strict";
n.d(t, { ID: () => N, PI: () => D, W9: () => C, XH: () => R, l$: () => b, rk: () => v });
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
    m = n(927578),
    E = n(908419),
    g = n(888751),
    A = n(652215),
    I = n(788868),
    T = n(985018),
    S = n(756366),
    y = n(772992);
let v = (e) => {
        let { className: t, currencies: n, onChange: i, selectedCurrency: s, ...o } = e;
        return (0, r.jsx)(l.f, {
            currencies: n,
            className: a()(y.p2, t),
            children: (0, r.jsx)(l.A, {
                label: T.intl.string(T.t["/AAR02"]),
                selectedCurrency: s,
                currencies: n,
                onChange: i,
                ...o,
            }),
        });
    },
    N = (e) => {
        let { label: t = T.intl.string(S.default.eoXh7B), lineItems: n, currency: s, hasSubscriptionCredit: a } = e,
            o = i.useMemo(() => (a ? T.intl.string(T.t.A7Hpfs) : void 0), [a]);
        return (0, r.jsx)(d.Vm, { label: t, lineItems: n, currency: s, collapsedContentLabelOverride: o });
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
            l = [],
            c = null;
        if (t.type === h.N$.PREMIUM_GIFT)
            l = (0, g.fk)(o, { isCustomGift: a, isPrepaidPaymentSource: s, subscriptionPlan: n });
        else {
            let e = (0, g.IY)(o, {
                isPrepaidPaymentSource: s,
                invoiceSummaryType: t.type,
                subscriptionPlan: n,
                subscriptionTrial: i,
            });
            (l = e.lineItems), (c = e.entitlementDiscount);
        }
        let d = (0, u.lp)(o, { manualLineItems: l, includeTaxLineItem: !0 });
        return (0, r.jsx)(N, {
            label: T.intl.string(S.default.eoXh7B),
            lineItems: d,
            currency: o.currency,
            hasSubscriptionCredit: null != c,
        });
    },
    R = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: l,
                discountInvoiceItems: u,
                showSecondarySubTexts: d,
                isInPlanSelectStep: _,
                headingSubText: p,
            } = e,
            h = (0, f.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: l,
                discountInvoiceItems: u,
                showTotal: _,
            }),
            {
                selectedPlan: m,
                selectedPlanPrice: E,
                isPrepaid: A,
                shouldShowHRKEuroWarning: T,
                shouldShowTotalInSubscriptionFlow: S,
                shouldShowUpdatedPaymentModal: v,
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
                () => (_ && R ? (0, f.Ct)(N, { subscriptionPeriodEnd: l, trialPeriodCopy: C }) : p),
                [_, R, N, l, C, p],
            ),
            {
                selectPlan: x,
                premiumSubscription: P,
                userLocale: k,
                priceOptions: U,
                isGift: G,
                shouldUseCalculatedDiscount: F,
                discountOffer: V,
            } = (0, f.Rx)(h),
            B = i.useMemo(() => (s.length > 0 ? I.hd[s[0]].premiumType : void 0), [s]),
            H = i.useCallback(
                (e) => {
                    x(e.value);
                },
                [x],
            ),
            j = i.useMemo(
                () =>
                    s.map((e) => {
                        let { isCurrentPlan: t, disabled: n } = (0, f.cD)(P, e),
                            r = (0, g.Rs)(P, {
                                planId: e,
                                isCurrentPlan: t,
                                disabled: n,
                                userLocale: k,
                                showSecondarySubTexts: d,
                                isInPlanSelectStep: _,
                                discountOffer: V,
                                priceOptions: U,
                                isGift: G,
                                shouldUseCalculatedDiscount: F,
                                isEligibleForTrial: R,
                                isEligibleForBOGOPromotion: O,
                            });
                        return {
                            value: r.id,
                            secondarySubText: r.secondarySubText,
                            primaryText: r.planName,
                            badgeText: r.promoText,
                            subText: r.priceText,
                            isDisabled: r.isDisabled,
                        };
                    }),
                [d, s, k, V, U, G, F, R, O, P, _],
            );
        return null == B
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      L &&
                          (0, r.jsx)(o.EYj, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: y.ST,
                              children: w,
                          }),
                      (0, r.jsx)(c.me, {
                          headingComponent: (0, r.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: B }),
                          headingSubText: M,
                          planRadioOptions: j,
                          value: m?.id ?? "",
                          onChange: H,
                      }),
                      _
                          ? (0, f.LR)({
                                selectedPlan: m,
                                selectedPlanPrice: E,
                                isPrepaid: A,
                                shouldShowHRKEuroWarning: T,
                                shouldShowUpdatedPaymentModal: v,
                                showTotal: _,
                                shouldShowTotalInSubscriptionFlow: S,
                                previewTotalSectionClassName: y.$r,
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
            priceOptions: a,
            renewalInvoicePreview: o,
            paymentSourceType: l,
            activeSubscription: u,
        } = e,
        { immediateDelivery: d } = (0, E.U)(),
        _ = (0, m.y8)(i.id, !1, s, a),
        f = {
            purchaseButtonText: (0, p.Ro)({
                productLine: A.EZt.PREMIUM,
                purchaseType: A.VVm.SUBSCRIPTION,
                plan: i,
                premiumSubscription: u,
                isGift: s,
                planGroup: t,
                isPrepaidPaymentSource: !1,
            }),
            totalDue: _.amount,
            renewalPrice: o?.subtotal ?? _.amount,
            currency: o?.currency ?? _.currency,
            interval: i.interval,
            intervalCount: i.intervalCount,
            startDate: o?.subscriptionPeriodEnd ?? new Date(),
        };
    return (0, r.jsx)(c._P, {
        variant: { type: s ? c.I0.GiftNitro : n ? c.I0.SubscriptionTrial : c.I0.Subscription, ...f },
        paymentSourceType: l,
        immediateDelivery: d,
    });
}
