"use strict";
n.d(t, { ID: () => N, PI: () => D, W9: () => C, XH: () => b, l$: () => O, rk: () => v });
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
            className: a()(y.p, t),
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
                invoiceSummaryTypeWithPreview: t,
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
    b = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: o,
                discountInvoiceItems: l,
                showSecondarySubTexts: u,
                isInPlanSelectStep: d,
            } = e,
            _ = (0, f.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: o,
                discountInvoiceItems: l,
                showTotal: d,
            }),
            {
                selectedPlan: p,
                selectedPlanPrice: h,
                isPrepaid: m,
                shouldShowHRKEuroWarning: E,
                shouldShowTotalInSubscriptionFlow: A,
                shouldShowUpdatedPaymentModal: T,
                userTrialOffer: S,
                trialPeriodCopy: v,
                isEligibleForTrial: N,
            } = _,
            C = i.useMemo(
                () => (d && N ? (0, f.Ct)(S, { subscriptionPeriodEnd: o, trialPeriodCopy: v }) : void 0),
                [d, N, S, o, v],
            ),
            {
                selectPlan: b,
                premiumSubscription: R,
                userLocale: O,
                priceOptions: D,
                isGift: L,
                shouldUseCalculatedDiscount: w,
                isEligibleForBOGOPromotion: x,
                discountOffer: M,
            } = (0, f.Rx)(_),
            P = i.useMemo(() => (s.length > 0 ? I.hd[s[0]].premiumType : void 0), [s]),
            k = i.useCallback(
                (e) => {
                    b(e.value);
                },
                [b],
            ),
            U = i.useMemo(
                () =>
                    s.map((e) => {
                        let { isCurrentPlan: t, disabled: n } = (0, f.cD)(R, e),
                            r = (0, g.Rs)(R, {
                                planId: e,
                                isCurrentPlan: t,
                                disabled: n,
                                userLocale: O,
                                showSecondarySubTexts: u,
                                isInPlanSelectStep: d,
                                discountOffer: M,
                                priceOptions: D,
                                isGift: L,
                                shouldUseCalculatedDiscount: w,
                                isEligibleForTrial: N,
                                isEligibleForBOGOPromotion: x,
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
                [u, s, O, M, D, L, w, N, x, R, d],
            );
        return null == P
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.me, {
                          headingComponent: (0, r.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: P }),
                          headingSubText: C,
                          planRadioOptions: U,
                          value: p?.id ?? "",
                          onChange: k,
                      }),
                      d
                          ? (0, f.LR)({
                                selectedPlan: p,
                                selectedPlanPrice: h,
                                isPrepaid: m,
                                shouldShowHRKEuroWarning: E,
                                shouldShowUpdatedPaymentModal: T,
                                showTotal: d,
                                shouldShowTotalInSubscriptionFlow: A,
                                previewTotalSectionClassName: y.$,
                            })
                          : null,
                  ],
              });
    },
    R = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            s = n ? { variant: _.uA.TRIAL, trialPeriod: r, trialEnd: i } : {};
        return { fractionalPremiumBannerMessage: (0, _.NQ)({ fractionalPremiumInfo: t, ...s }) };
    },
    O = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: s } = e,
            { fractionalPremiumBannerMessage: a } = R({
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
            startDate: o?.subscriptionPeriodStart ?? new Date(),
        };
    return (0, r.jsx)(c._P, {
        variant: { type: s ? c.I0.GiftNitro : n ? c.I0.SubscriptionTrial : c.I0.Subscription, ...f },
        paymentSourceType: l,
        immediateDelivery: d,
    });
}
