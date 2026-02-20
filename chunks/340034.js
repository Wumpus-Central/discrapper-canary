"use strict";
n.d(t, { ID: () => R, PI: () => x, W9: () => O, XH: () => D, l$: () => w, rk: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(997101),
    l = n(158954),
    u = n(311907),
    c = n(821189),
    d = n(854354),
    _ = n(93159),
    f = n(270537),
    p = n(156962),
    h = n(446929),
    m = n(367921),
    E = n(299301),
    g = n(615405),
    A = n(927578),
    I = n(156312),
    T = n(888751),
    S = n(652215),
    y = n(788868),
    v = n(985018),
    N = n(756366),
    C = n(772992);
let b = (e) => {
        let { className: t, currencies: n, onChange: i, selectedCurrency: s, ...o } = e;
        return (0, r.jsx)(c.f, {
            currencies: n,
            className: a()(C.p, t),
            children: (0, r.jsx)(c.A, {
                label: v.intl.string(v.t["/AAR02"]),
                selectedCurrency: s,
                currencies: n,
                onChange: i,
                ...o,
            }),
        });
    },
    R = (e) => {
        let { label: t = v.intl.string(N.default.eoXh7B), lineItems: n, currency: s, hasSubscriptionCredit: a } = e,
            o = i.useMemo(() => (a ? v.intl.string(v.t.A7Hpfs) : void 0), [a]);
        return (0, r.jsx)(f.Vm, { label: t, lineItems: n, currency: s, collapsedContentLabelOverride: o });
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
            l = [],
            u = null;
        if (t.type === E.N$.PREMIUM_GIFT)
            l = (0, T.fk)(o, { isCustomGift: a, isPrepaidPaymentSource: s, subscriptionPlan: n });
        else {
            let e = (0, T.IY)(o, {
                isPrepaidPaymentSource: s,
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: i,
            });
            (l = e.lineItems), (u = e.entitlementDiscount);
        }
        let c = (0, d.lp)(o, { manualLineItems: l, includeTaxLineItem: !0 });
        return (0, r.jsx)(R, {
            label: v.intl.string(N.default.eoXh7B),
            lineItems: c,
            currency: o.currency,
            hasSubscriptionCredit: null != u,
        });
    },
    D = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: o,
                discountInvoiceItems: l,
                showSecondarySubTexts: u,
                isInPlanSelectStep: c,
            } = e,
            d = (0, h.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: o,
                discountInvoiceItems: l,
                showTotal: c,
            }),
            {
                selectedPlan: f,
                selectedPlanPrice: p,
                isPrepaid: m,
                shouldShowHRKEuroWarning: E,
                shouldShowTotalInSubscriptionFlow: g,
                shouldShowUpdatedPaymentModal: A,
                userTrialOffer: I,
                trialPeriodCopy: S,
                isEligibleForTrial: v,
            } = d,
            N = i.useMemo(
                () => (c && v ? (0, h.Ct)(I, { subscriptionPeriodEnd: o, trialPeriodCopy: S }) : void 0),
                [c, v, I, o, S],
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
            } = (0, h.Rx)(d),
            P = i.useMemo(() => (s.length > 0 ? y.hd[s[0]].premiumType : void 0), [s]),
            k = i.useCallback(
                (e) => {
                    b(e.value);
                },
                [b],
            ),
            U = i.useMemo(
                () =>
                    s.map((e) => {
                        let { isCurrentPlan: t, disabled: n } = (0, h.cD)(R, e),
                            r = (0, T.Rs)(R, {
                                planId: e,
                                isCurrentPlan: t,
                                disabled: n,
                                userLocale: O,
                                showSecondarySubTexts: u,
                                isInPlanSelectStep: c,
                                discountOffer: M,
                                priceOptions: D,
                                isGift: L,
                                shouldUseCalculatedDiscount: w,
                                isEligibleForTrial: v,
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
                [u, s, O, M, D, L, w, v, x, R, c],
            );
        return null == P
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(_.me, {
                          headingComponent: (0, r.jsx)(_.ec, { size: "sm", color: "text-strong", premiumType: P }),
                          headingSubText: N,
                          planRadioOptions: U,
                          value: f?.id ?? "",
                          onChange: k,
                      }),
                      c
                          ? (0, h.LR)({
                                selectedPlan: f,
                                selectedPlanPrice: p,
                                isPrepaid: m,
                                shouldShowHRKEuroWarning: E,
                                shouldShowUpdatedPaymentModal: A,
                                showTotal: c,
                                shouldShowTotalInSubscriptionFlow: g,
                                previewTotalSectionClassName: C.$,
                            })
                          : null,
                  ],
              });
    },
    L = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            s = n ? { variant: p.uA.TRIAL, trialPeriod: r, trialEnd: i } : {};
        return { fractionalPremiumBannerMessage: (0, p.NQ)({ fractionalPremiumInfo: t, ...s }) };
    },
    w = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: s } = e,
            { fractionalPremiumBannerMessage: a } = L({
                fractionalPremiumInfo: t,
                isEligibleForTrial: n,
                trialPeriodCopy: i,
                subscriptionPeriodEnd: s,
            });
        return null != a && "" !== a ? (0, r.jsx)(l.wx6, { type: "info", children: a }) : null;
    };
function x(e) {
    let {
            planGroup: t,
            setHasAcceptedTerms: n,
            isTrial: s,
            plan: a,
            isGift: l,
            priceOptions: c,
            renewalInvoicePreview: d,
            paymentSourceType: f,
            activeSubscription: p,
        } = e,
        { hasAcceptedTerms: h } = (0, I.P5)(),
        E = (0, u.bG)([g.A], () => o.M.EEA_COUNTRIES.has(g.A.ipCountryCodeWithFallback)),
        T = E ? { value: h, onChange: n } : void 0,
        y = (0, A.y8)(a.id, !1, l, c);
    i.useLayoutEffect(() => {
        n(!E);
    }, [E, n]);
    let v = {
        purchaseButtonText: (0, m.Ro)({
            productLine: S.EZt.PREMIUM,
            purchaseType: S.VVm.SUBSCRIPTION,
            plan: a,
            premiumSubscription: p,
            isGift: l,
            planGroup: t,
            isPrepaidPaymentSource: !1,
        }),
        totalDue: y.amount,
        renewalPrice: d?.subtotal ?? y.amount,
        currency: d?.currency ?? y.currency,
        interval: a.interval,
        intervalCount: a.intervalCount,
        startDate: d?.subscriptionPeriodStart ?? new Date(),
    };
    return (0, r.jsx)(_._P, {
        variant: { type: l ? _.I0.GiftNitro : s ? _.I0.SubscriptionTrial : _.I0.Subscription, ...v },
        paymentSourceType: f,
        immediateDelivery: T,
    });
}
