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
    m = n(927578),
    E = n(371794),
    g = n(908419),
    A = n(888751),
    I = n(652215),
    T = n(788868),
    S = n(985018),
    y = n(523376),
    v = n(232970);
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
                isPrepaid: g,
                shouldShowHRKEuroWarning: I,
                shouldShowTotalInSubscriptionFlow: S,
                shouldShowUpdatedPaymentModal: y,
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
            B = i.useMemo(() => (s.length > 0 ? T.hd[s[0]].premiumType : void 0), [s]),
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
                            r = (0, A.Rs)(P, {
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
                              className: v.ST,
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
                                isPrepaid: g,
                                shouldShowHRKEuroWarning: I,
                                shouldShowUpdatedPaymentModal: y,
                                showTotal: _,
                                shouldShowTotalInSubscriptionFlow: S,
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
            priceOptions: a,
            renewalInvoicePreview: o,
            paymentSourceType: l,
            activeSubscription: u,
        } = e,
        { immediateDelivery: d } = (0, g.U)(),
        _ = (0, m.y8)(i.id, !1, s, a),
        f = {
            purchaseButtonText: (0, p.Ro)({
                productLine: I.EZt.PREMIUM,
                purchaseType: I.VVm.SUBSCRIPTION,
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
function w(e) {
    let { productLine: t, premiumType: n, applicationId: i, thumbnail: s } = e;
    return n === T.PremiumTypes.TIER_0
        ? (0, r.jsx)(c.DH, {})
        : n === T.PremiumTypes.TIER_2
          ? (0, r.jsx)(c.JW, {})
          : null != i && null != s
            ? (0, r.jsx)("img", { src: (0, E.YE)(i, s, 64), alt: "", className: v.gw })
            : t === I.EZt.APPLICATION
              ? (0, r.jsx)(c.jw, {})
              : void 0;
}
