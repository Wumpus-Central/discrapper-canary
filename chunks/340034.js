n.d(t, { PI: () => b, W9: () => g, XH: () => v, l$: () => M });
var l = n(627968),
    a = n(64700),
    i = n(834730),
    r = n(683071),
    s = n(546605),
    o = n(854354),
    u = n(364995),
    c = n(944355),
    d = n(848584),
    p = n(94420),
    m = n(881489),
    h = n(531506),
    C = n(337092),
    A = n(692440),
    y = n(367921),
    E = n(299301),
    P = n(834252),
    S = n(908419),
    _ = n(888751),
    T = n(652215),
    f = n(788868),
    I = n(375708),
    N = n(327105),
    x = n(299279);
let g = (e) => {
        let {
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: a,
                isPrepaidPaymentSource: i,
                isCustomGift: r,
            } = e,
            { invoicePreview: s } = t,
            u = [];
        u =
            t.type === E.N$.PREMIUM_GIFT
                ? (0, _.fk)(s, { isCustomGift: r, isPrepaidPaymentSource: i, subscriptionPlan: n })
                : (0, _.IY)(s, {
                      isPrepaidPaymentSource: i,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: a,
                  }).lineItems;
        let c = (0, o.lp)(s, { manualLineItems: u, includeTaxLineItem: !0 });
        return (0, l.jsx)(d.Vm, { label: I.intl.string(N.default.eoXh7B), lineItems: c, currency: s.currency });
    },
    v = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: r,
                subscriptionPeriodEnd: s,
                showPlanStatusSubText: o,
                disabled: u,
                isInPlanSelectStep: d,
                headingSubText: p,
            } = e,
            m = (0, C.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: r,
                subscriptionPeriodEnd: s,
                showTotal: d,
            }),
            {
                selectedPlan: h,
                selectedPlanPrice: A,
                isPrepaid: y,
                shouldShowHRKEuroWarning: E,
                shouldShowTotalInSubscriptionFlow: P,
                shouldShowUpdatedPaymentModal: S,
                userTrialOffer: T,
                trialPeriodCopy: I,
                isEligibleForTrial: N,
                isEligibleForBOGOPromotion: g,
                premiumSubscriptionPlan: v,
                skuId: M,
            } = m,
            { shouldShowPremiumSwitchPlanSelectText: b, premiumSwitchPlanSelectText: j } = a.useMemo(() => {
                let e = (0, C.U_)(v, { isEligibleForBOGOPromotion: g });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, C.yq)(v, M) : null,
                };
            }, [v, g, M]),
            R = a.useMemo(
                () => (d && N ? (0, C.Ct)(T, { subscriptionPeriodEnd: s, trialPeriodCopy: I }) : p),
                [d, N, T, s, I, p],
            ),
            {
                selectPlan: L,
                premiumSubscription: O,
                userLocale: D,
                priceOptions: w,
                isGift: U,
                isEligibleForDiscount: k,
                shouldUseCalculatedDiscount: Y,
                discountOffer: G,
                discountAmountOff: F,
            } = (0, C.Rx)(m),
            B = a.useMemo(() => (r.length > 0 ? f.hd[r[0]].premiumType : void 0), [r]),
            W = a.useCallback(
                (e) => {
                    L(e.value);
                },
                [L],
            ),
            V = a.useMemo(() => {
                let e = null != G && G.discount.userUsageLimitInterval === f.Ff.MONTH;
                return r.map((t) => {
                    let { isCurrentPlan: n, disabled: l } = (0, C.cD)(O, t),
                        a = (0, _.Rs)(O, {
                            planId: t,
                            isEligibleForDiscount: k,
                            isCurrentPlan: n,
                            disabled: l,
                            userLocale: D,
                            showPlanStatusSubText: o,
                            isInPlanSelectStep: d,
                            discountOffer: G,
                            discountAmountOff: F,
                            isMonthlyDiscountOffer: e,
                            priceOptions: w,
                            isGift: U,
                            shouldUseCalculatedDiscount: Y,
                            isEligibleForTrial: N,
                            isEligibleForBOGOPromotion: g,
                        });
                    return {
                        value: a.id,
                        secondarySubText: a.secondarySubText,
                        primaryText: a.planName,
                        badgeText: a.promoText,
                        subText: a.priceText,
                        isDisabled: a.isDisabled || u,
                    };
                });
            }, [u, o, r, D, k, G, F, w, U, Y, N, g, O, d]);
        return null == B
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      b &&
                          (0, l.jsx)(i.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: x.S,
                              children: j,
                          }),
                      (0, l.jsx)(c.me, {
                          headingComponent: (0, l.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: B }),
                          headingSubText: R,
                          planRadioOptions: V,
                          value: h?.id ?? "",
                          onChange: W,
                      }),
                      d
                          ? (0, C.LR)({
                                selectedPlan: h,
                                selectedPlanPrice: A,
                                isPrepaid: y,
                                shouldShowHRKEuroWarning: E,
                                shouldShowUpdatedPaymentModal: S,
                                showTotal: d,
                                shouldShowTotalInSubscriptionFlow: P,
                                previewTotalSectionClassName: x.$,
                            })
                          : null,
                  ],
              });
    },
    M = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: a, subscriptionPeriodEnd: i } = e,
            { fractionalPremiumBannerMessage: s } = ((e) => {
                let {
                        fractionalPremiumInfo: t,
                        isEligibleForTrial: n,
                        trialPeriodCopy: l,
                        subscriptionPeriodEnd: a,
                    } = e,
                    i = (0, m.ds)(),
                    r = {};
                return (
                    i
                        ? (r = { variant: h.uA.REVERSE_TRIAL })
                        : n && (r = { variant: h.uA.TRIAL, trialPeriod: l, trialEnd: a }),
                    { fractionalPremiumBannerMessage: (0, h.NQ)({ fractionalPremiumInfo: t, ...r }) }
                );
            })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: a, subscriptionPeriodEnd: i });
        return null != s && "" !== s ? (0, l.jsx)(r.w, { type: "info", children: s }) : null;
    };
function b(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: a,
            isGift: i,
            paymentSourceType: r,
            activeSubscription: o,
            invoiceSummaryTypeWithPreview: d,
            isPrepaidPaymentSource: m = !1,
            overrideRenewalDate: h,
            fractionalPremiumInfo: C,
            hideLegalContent: f,
            isInvoiceBilledImmediately: I = !0,
        } = e,
        { immediateDelivery: N } = (0, S.U)(),
        { discountOffer: x } = (0, P.P5)(),
        g = (0, p.t4)((e) => e.paymentSourceId),
        { checkoutPaymentSources: v } = (0, u.t)(),
        M = (0, s.vg)("PremiumUnifiedCheckoutLegal");
    if (d.type === E.N$.LOADING) return null;
    let { invoicePreview: b } = d,
        j = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? b,
        R = j.invoiceItems.find((e) => e.subscriptionPlanId === a.id),
        L = null != R ? (0, _.Re)(R, x).amount : j.subtotal;
    if (f) return null;
    let O = M && null != g && v?.some((e) => e.id === g && null != e.relocationCountry),
        D = {
            purchaseButtonText: (0, y.Ro)({
                productLine: T.EZt.PREMIUM,
                purchaseType: T.VVm.SUBSCRIPTION,
                plan: a,
                premiumSubscription: o,
                isGift: i,
                planGroup: t,
                isPrepaidPaymentSource: m,
                willRelocateStoreCountry: O,
            }),
            totalDue: I ? b.total : 0,
            renewalPrice: L,
            currency: b.currency,
            interval: a.interval,
            intervalCount: a.intervalCount,
            startDate: (0, A.de)({
                overrideRenewalDate: h,
                currentInvoice: b.id !== j.id ? b : void 0,
                renewalInvoice: j,
                isSubscriptionUpdate: null != o,
                fractionalPremiumInfo: C,
            }),
        };
    return (0, l.jsx)(c._P, {
        variant: { type: i ? c.I0.GiftNitro : n ? c.I0.SubscriptionTrial : c.I0.Subscription, ...D },
        paymentSourceType: r,
        immediateDelivery: N,
    });
}
