n.d(t, { PI: () => b, W9: () => g, XH: () => v, l$: () => M });
var l = n(627968),
    i = n(64700),
    a = n(834730),
    r = n(683071),
    s = n(546605),
    o = n(854354),
    u = n(364995),
    c = n(463376),
    d = n(944355),
    p = n(848584),
    m = n(722847),
    h = n(881489),
    C = n(531506),
    A = n(361597),
    y = n(692440),
    E = n(367921),
    P = n(299301),
    S = n(908419),
    _ = n(888751),
    f = n(652215),
    T = n(788868),
    I = n(375708),
    x = n(327105),
    N = n(299279);
let g = (e) => {
        let {
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: i,
                isPrepaidPaymentSource: a,
                isCustomGift: r,
            } = e,
            { invoicePreview: s } = t,
            u = [];
        u =
            t.type === P.N$.PREMIUM_GIFT
                ? (0, _.fk)(s, { isCustomGift: r, isPrepaidPaymentSource: a, subscriptionPlan: n })
                : (0, _.IY)(s, {
                      isPrepaidPaymentSource: a,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: i,
                  }).lineItems;
        let c = (0, o.lp)(s, { manualLineItems: u, includeTaxLineItem: !0 });
        return (0, l.jsx)(p.Vm, { label: I.intl.string(x.default.eoXh7B), lineItems: c, currency: s.currency });
    },
    v = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: r,
                subscriptionPeriodEnd: s,
                showPlanStatusSubText: o,
                disabled: u,
                isInPlanSelectStep: c,
                headingSubText: p,
            } = e,
            m = (0, A.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: r,
                subscriptionPeriodEnd: s,
                showTotal: c,
            }),
            {
                selectedPlan: h,
                selectedPlanPrice: C,
                isPrepaid: y,
                shouldShowHRKEuroWarning: E,
                shouldShowTotalInSubscriptionFlow: P,
                shouldShowUpdatedPaymentModal: S,
                userTrialOffer: f,
                trialPeriodCopy: I,
                isEligibleForTrial: x,
                isEligibleForBOGOPromotion: g,
                premiumSubscriptionPlan: v,
                skuId: M,
            } = m,
            { shouldShowPremiumSwitchPlanSelectText: b, premiumSwitchPlanSelectText: j } = i.useMemo(() => {
                let e = (0, A.U_)(v, { isEligibleForBOGOPromotion: g });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, A.yq)(v, M) : null,
                };
            }, [v, g, M]),
            R = i.useMemo(
                () => (c && x ? (0, A.Ct)(f, { subscriptionPeriodEnd: s, trialPeriodCopy: I }) : p),
                [c, x, f, s, I, p],
            ),
            {
                selectPlan: L,
                premiumSubscription: O,
                userLocale: D,
                priceOptions: w,
                isGift: U,
                isEligibleForDiscount: k,
                discountOffer: G,
                discountAmountOff: Y,
            } = (0, A.Rx)(m),
            F = i.useMemo(() => (r.length > 0 ? T.hd[r[0]].premiumType : void 0), [r]),
            B = i.useCallback(
                (e) => {
                    L(e.value);
                },
                [L],
            ),
            W = i.useMemo(() => {
                let e = null != G && G.discount.userUsageLimitInterval === T.Ff.MONTH;
                return r.map((t) => {
                    let { isCurrentPlan: n, disabled: l } = (0, A.cD)(O, t),
                        i = (0, _.Rs)(O, {
                            planId: t,
                            isEligibleForDiscount: k,
                            isCurrentPlan: n,
                            disabled: l,
                            userLocale: D,
                            showPlanStatusSubText: o,
                            isInPlanSelectStep: c,
                            discountOffer: G,
                            discountAmountOff: Y,
                            isMonthlyDiscountOffer: e,
                            priceOptions: w,
                            isGift: U,
                            isEligibleForTrial: x,
                            isEligibleForBOGOPromotion: g,
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
            }, [u, o, r, D, k, G, Y, w, U, x, g, O, c]);
        return null == F
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      b &&
                          (0, l.jsx)(a.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: N.S,
                              children: j,
                          }),
                      (0, l.jsx)(d.me, {
                          headingComponent: (0, l.jsx)(d.ec, { size: "sm", color: "text-strong", premiumType: F }),
                          headingSubText: R,
                          planRadioOptions: W,
                          value: h?.id ?? "",
                          onChange: B,
                      }),
                      c
                          ? (0, A.LR)({
                                selectedPlan: h,
                                selectedPlanPrice: C,
                                isPrepaid: y,
                                shouldShowHRKEuroWarning: E,
                                shouldShowUpdatedPaymentModal: S,
                                showTotal: c,
                                shouldShowTotalInSubscriptionFlow: P,
                                previewTotalSectionClassName: N.$,
                            })
                          : null,
                  ],
              });
    },
    M = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: a } = e,
            { fractionalPremiumBannerMessage: s } = ((e) => {
                let {
                        fractionalPremiumInfo: t,
                        isEligibleForTrial: n,
                        trialPeriodCopy: l,
                        subscriptionPeriodEnd: i,
                    } = e,
                    a = (0, h.ds)(),
                    r = {};
                return (
                    a
                        ? (r = { variant: C.uA.REVERSE_TRIAL })
                        : n && (r = { variant: C.uA.TRIAL, trialPeriod: l, trialEnd: i }),
                    { fractionalPremiumBannerMessage: (0, C.NQ)({ fractionalPremiumInfo: t, ...r }) }
                );
            })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: a });
        return null != s && "" !== s ? (0, l.jsx)(r.w, { type: "info", children: s }) : null;
    };
function b(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: i,
            isGift: a,
            paymentSourceType: r,
            activeSubscription: o,
            invoiceSummaryTypeWithPreview: p,
            isPrepaidPaymentSource: h = !1,
            overrideRenewalDate: C,
            fractionalPremiumInfo: A,
            hideLegalContent: T,
            isInvoiceBilledImmediately: I = !0,
        } = e,
        { immediateDelivery: x } = (0, S.U)(),
        { discountOffer: N } = (0, c.i)(),
        g = (0, m.t4)((e) => e.paymentSourceId),
        { checkoutPaymentSources: v } = (0, u.t)(),
        M = (0, s.vg)("PremiumUnifiedCheckoutLegal");
    if (p.type === P.N$.LOADING) return null;
    let { invoicePreview: b } = p,
        j = ("renewalInvoicePreview" in p ? p.renewalInvoicePreview : null) ?? b,
        R = j.invoiceItems.find((e) => e.subscriptionPlanId === i.id),
        L = null != R ? (0, _.Re)(R, N).amount : j.subtotal;
    if (T) return null;
    let O = M && null != g && v?.some((e) => e.id === g && null != e.relocationCountry),
        D = {
            purchaseButtonText: (0, E.Ro)({
                productLine: f.EZt.PREMIUM,
                purchaseType: f.VVm.SUBSCRIPTION,
                plan: i,
                premiumSubscription: o,
                isGift: a,
                planGroup: t,
                isPrepaidPaymentSource: h,
                willRelocateStoreCountry: O,
            }),
            totalDue: I ? b.total : 0,
            renewalPrice: L,
            currency: b.currency,
            interval: i.interval,
            intervalCount: i.intervalCount,
            startDate: (0, y.de)({
                overrideRenewalDate: C,
                currentInvoice: b.id !== j.id ? b : void 0,
                renewalInvoice: j,
                isSubscriptionUpdate: null != o,
                fractionalPremiumInfo: A,
            }),
        };
    return (0, l.jsx)(d._P, {
        variant: { type: a ? d.I0.GiftNitro : n ? d.I0.SubscriptionTrial : d.I0.Subscription, ...D },
        paymentSourceType: r,
        immediateDelivery: x,
    });
}
