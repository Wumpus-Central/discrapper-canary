n.d(t, { PI: () => b, W9: () => g, XH: () => v, l$: () => M });
var l = n(627968),
    i = n(64700),
    r = n(834730),
    a = n(683071),
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
    f = n(888751),
    _ = n(652215),
    T = n(788868),
    I = n(375708),
    x = n(327105),
    N = n(299279);
let g = (e) => {
        let {
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: i,
                isPrepaidPaymentSource: r,
                isCustomGift: a,
            } = e,
            { invoicePreview: s } = t,
            u = [];
        u =
            t.type === P.N$.PREMIUM_GIFT
                ? (0, f.fk)(s, { isCustomGift: a, isPrepaidPaymentSource: r, subscriptionPlan: n })
                : (0, f.IY)(s, {
                      isPrepaidPaymentSource: r,
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
                planOptions: a,
                subscriptionPeriodEnd: s,
                showPlanStatusSubText: o,
                disabled: u,
                isInPlanSelectStep: c,
                headingSubText: p,
                planPricesLoading: m = !1,
            } = e,
            h = (0, A.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: a,
                subscriptionPeriodEnd: s,
                showTotal: c,
            }),
            {
                selectedPlan: C,
                selectedPlanPrice: y,
                isPrepaid: E,
                shouldShowHRKEuroWarning: P,
                shouldShowTotalInSubscriptionFlow: S,
                shouldShowUpdatedPaymentModal: _,
                userTrialOffer: x,
                trialPeriodCopy: g,
                isEligibleForTrial: v,
                isEligibleForBOGOPromotion: M,
                premiumSubscriptionPlan: b,
                skuId: j,
            } = h,
            { shouldShowPremiumSwitchPlanSelectText: R, premiumSwitchPlanSelectText: L } = i.useMemo(() => {
                let e = (0, A.U_)(b, { isEligibleForBOGOPromotion: M });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, A.yq)(b, j) : null,
                };
            }, [b, M, j]),
            O = i.useMemo(
                () => (c && v ? (0, A.Ct)(x, { subscriptionPeriodEnd: s, trialPeriodCopy: g }) : p),
                [c, v, x, s, g, p],
            ),
            {
                selectPlan: D,
                premiumSubscription: w,
                userLocale: U,
                priceOptions: k,
                isGift: G,
                isEligibleForDiscount: Y,
                discountOffer: F,
                discountAmountOff: B,
            } = (0, A.Rx)(h),
            W = i.useMemo(() => (a.length > 0 ? T.hd[a[0]].premiumType : void 0), [a]),
            V = i.useCallback(
                (e) => {
                    D(e.value);
                },
                [D],
            ),
            H = i.useMemo(() => {
                let e = null != F && F.discount.userUsageLimitInterval === T.Ff.MONTH;
                return a.map((t) => {
                    let { isCurrentPlan: n, disabled: l } = (0, A.cD)(w, t),
                        i = (0, f.Rs)(w, {
                            planId: t,
                            isEligibleForDiscount: Y,
                            isCurrentPlan: n,
                            disabled: l,
                            userLocale: U,
                            showPlanStatusSubText: o,
                            isInPlanSelectStep: c,
                            discountOffer: F,
                            discountAmountOff: B,
                            isMonthlyDiscountOffer: e,
                            priceOptions: k,
                            isGift: G,
                            isEligibleForTrial: v,
                            isEligibleForBOGOPromotion: M,
                        });
                    return {
                        value: i.id,
                        secondarySubText: m ? null : i.secondarySubText,
                        primaryText: i.planName,
                        badgeText: i.promoText,
                        subText: m ? I.intl.string(I.t.ZTNur7) : i.priceText,
                        isDisabled: i.isDisabled || u,
                    };
                });
            }, [u, o, a, U, Y, F, B, k, G, v, M, w, c, m]);
        return null == W
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      R &&
                          (0, l.jsx)(r.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: N.S,
                              children: L,
                          }),
                      (0, l.jsx)(d.me, {
                          headingComponent: (0, l.jsx)(d.ec, { size: "sm", color: "text-strong", premiumType: W }),
                          headingSubText: O,
                          planRadioOptions: H,
                          value: C?.id ?? "",
                          onChange: V,
                      }),
                      c
                          ? (0, A.LR)({
                                selectedPlan: C,
                                selectedPlanPrice: y,
                                isPrepaid: E,
                                shouldShowHRKEuroWarning: P,
                                shouldShowUpdatedPaymentModal: _,
                                showTotal: c,
                                shouldShowTotalInSubscriptionFlow: S,
                                previewTotalSectionClassName: N.$,
                            })
                          : null,
                  ],
              });
    },
    M = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: r } = e,
            { fractionalPremiumBannerMessage: s } = ((e) => {
                let {
                        fractionalPremiumInfo: t,
                        isEligibleForTrial: n,
                        trialPeriodCopy: l,
                        subscriptionPeriodEnd: i,
                    } = e,
                    r = (0, h.ds)(),
                    a = {};
                return (
                    r
                        ? (a = { variant: C.uA.REVERSE_TRIAL })
                        : n && (a = { variant: C.uA.TRIAL, trialPeriod: l, trialEnd: i }),
                    { fractionalPremiumBannerMessage: (0, C.NQ)({ fractionalPremiumInfo: t, ...a }) }
                );
            })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: r });
        return null != s && "" !== s ? (0, l.jsx)(a.w, { type: "info", children: s }) : null;
    };
function b(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: i,
            isGift: r,
            paymentSourceType: a,
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
        L = null != R ? (0, f.Re)(R, N).amount : j.subtotal;
    if (T) return null;
    let O = M && null != g && v?.some((e) => e.id === g && null != e.relocationCountry),
        D = {
            purchaseButtonText: (0, E.Ro)({
                productLine: _.EZt.PREMIUM,
                purchaseType: _.VVm.SUBSCRIPTION,
                plan: i,
                premiumSubscription: o,
                isGift: r,
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
        variant: { type: r ? d.I0.GiftNitro : n ? d.I0.SubscriptionTrial : d.I0.Subscription, ...D },
        paymentSourceType: a,
        immediateDelivery: x,
    });
}
