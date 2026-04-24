n.d(t, { PI: () => v, W9: () => N, XH: () => g, l$: () => I });
var l = n(627968),
    a = n(64700),
    i = n(834730),
    r = n(683071),
    s = n(546605),
    o = n(854354),
    u = n(93159),
    c = n(848584),
    d = n(881489),
    p = n(531506),
    m = n(337092),
    h = n(692440),
    A = n(367921),
    C = n(299301),
    _ = n(156312),
    E = n(908419),
    y = n(888751),
    f = n(652215),
    P = n(788868),
    S = n(985018),
    T = n(327105),
    x = n(299279);
let N = (e) => {
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
            t.type === C.N$.PREMIUM_GIFT
                ? (0, y.fk)(s, { isCustomGift: r, isPrepaidPaymentSource: i, subscriptionPlan: n })
                : (0, y.IY)(s, {
                      isPrepaidPaymentSource: i,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: a,
                  }).lineItems;
        let d = (0, o.lp)(s, { manualLineItems: u, includeTaxLineItem: !0 });
        return (0, l.jsx)(c.Vm, { label: S.intl.string(T.default.eoXh7B), lineItems: d, currency: s.currency });
    },
    g = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: r,
                subscriptionPeriodEnd: s,
                showPlanStatusSubText: o,
                disabled: c,
                isInPlanSelectStep: d,
                headingSubText: p,
            } = e,
            h = (0, m.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: r,
                subscriptionPeriodEnd: s,
                showTotal: d,
            }),
            {
                selectedPlan: A,
                selectedPlanPrice: C,
                isPrepaid: _,
                shouldShowHRKEuroWarning: E,
                shouldShowTotalInSubscriptionFlow: f,
                shouldShowUpdatedPaymentModal: S,
                userTrialOffer: T,
                trialPeriodCopy: N,
                isEligibleForTrial: g,
                isEligibleForBOGOPromotion: I,
                premiumSubscriptionPlan: v,
                skuId: b,
            } = h,
            { shouldShowPremiumSwitchPlanSelectText: M, premiumSwitchPlanSelectText: L } = a.useMemo(() => {
                let e = (0, m.U_)(v, { isEligibleForBOGOPromotion: I });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, m.yq)(v, b) : null,
                };
            }, [v, I, b]),
            R = a.useMemo(
                () => (d && g ? (0, m.Ct)(T, { subscriptionPeriodEnd: s, trialPeriodCopy: N }) : p),
                [d, g, T, s, N, p],
            ),
            {
                selectPlan: j,
                premiumSubscription: O,
                userLocale: D,
                priceOptions: w,
                isGift: U,
                isEligibleForDiscount: k,
                shouldUseCalculatedDiscount: Y,
                discountOffer: F,
                discountAmountOff: G,
            } = (0, m.Rx)(h),
            B = a.useMemo(() => (r.length > 0 ? P.hd[r[0]].premiumType : void 0), [r]),
            W = a.useCallback(
                (e) => {
                    j(e.value);
                },
                [j],
            ),
            H = a.useMemo(() => {
                let e = null != F && F.discount.user_usage_limit_interval === P.Ff.MONTH;
                return r.map((t) => {
                    let { isCurrentPlan: n, disabled: l } = (0, m.cD)(O, t),
                        a = (0, y.Rs)(O, {
                            planId: t,
                            isEligibleForDiscount: k,
                            isCurrentPlan: n,
                            disabled: l,
                            userLocale: D,
                            showPlanStatusSubText: o,
                            isInPlanSelectStep: d,
                            discountOffer: F,
                            discountAmountOff: G,
                            isMonthlyDiscountOffer: e,
                            priceOptions: w,
                            isGift: U,
                            shouldUseCalculatedDiscount: Y,
                            isEligibleForTrial: g,
                            isEligibleForBOGOPromotion: I,
                        });
                    return {
                        value: a.id,
                        secondarySubText: a.secondarySubText,
                        primaryText: a.planName,
                        badgeText: a.promoText,
                        subText: a.priceText,
                        isDisabled: a.isDisabled || c,
                    };
                });
            }, [c, o, r, D, k, F, G, w, U, Y, g, I, O, d]);
        return null == B
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      M &&
                          (0, l.jsx)(i.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: x.S,
                              children: L,
                          }),
                      (0, l.jsx)(u.me, {
                          headingComponent: (0, l.jsx)(u.ec, { size: "sm", color: "text-strong", premiumType: B }),
                          headingSubText: R,
                          planRadioOptions: H,
                          value: A?.id ?? "",
                          onChange: W,
                      }),
                      d
                          ? (0, m.LR)({
                                selectedPlan: A,
                                selectedPlanPrice: C,
                                isPrepaid: _,
                                shouldShowHRKEuroWarning: E,
                                shouldShowUpdatedPaymentModal: S,
                                showTotal: d,
                                shouldShowTotalInSubscriptionFlow: f,
                                previewTotalSectionClassName: x.$,
                            })
                          : null,
                  ],
              });
    },
    I = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: a, subscriptionPeriodEnd: i } = e,
            { fractionalPremiumBannerMessage: s } = ((e) => {
                let {
                        fractionalPremiumInfo: t,
                        isEligibleForTrial: n,
                        trialPeriodCopy: l,
                        subscriptionPeriodEnd: a,
                    } = e,
                    i = (0, d.ds)(),
                    r = {};
                return (
                    i
                        ? (r = { variant: p.uA.REVERSE_TRIAL })
                        : n && (r = { variant: p.uA.TRIAL, trialPeriod: l, trialEnd: a }),
                    { fractionalPremiumBannerMessage: (0, p.NQ)({ fractionalPremiumInfo: t, ...r }) }
                );
            })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: a, subscriptionPeriodEnd: i });
        return null != s && "" !== s ? (0, l.jsx)(r.w, { type: "info", children: s }) : null;
    };
function v(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: a,
            isGift: i,
            paymentSourceType: r,
            activeSubscription: o,
            invoiceSummaryTypeWithPreview: c,
            isPrepaidPaymentSource: d = !1,
            overrideRenewalDate: p,
            fractionalPremiumInfo: m,
            hideLegalContent: P,
            isInvoiceBilledImmediately: S = !0,
        } = e,
        { immediateDelivery: T } = (0, E.U)(),
        { discountOffer: x, paymentSourceId: N, checkoutPaymentSources: g } = (0, _.P5)(),
        I = (0, s.vg)("PremiumUnifiedCheckoutLegal");
    if (c.type === C.N$.LOADING) return null;
    let { invoicePreview: v } = c,
        b = ("renewalInvoicePreview" in c ? c.renewalInvoicePreview : null) ?? v,
        M = b.invoiceItems.find((e) => e.subscriptionPlanId === a.id),
        L = null != M ? (0, y.Re)(M, x).amount : b.subtotal;
    if (P) return null;
    let R = I && null != N && g?.some((e) => e.id === N && null != e.relocationCountry),
        j = {
            purchaseButtonText: (0, A.Ro)({
                productLine: f.EZt.PREMIUM,
                purchaseType: f.VVm.SUBSCRIPTION,
                plan: a,
                premiumSubscription: o,
                isGift: i,
                planGroup: t,
                isPrepaidPaymentSource: d,
                willRelocateStoreCountry: R,
            }),
            totalDue: S ? v.total : 0,
            renewalPrice: L,
            currency: v.currency,
            interval: a.interval,
            intervalCount: a.intervalCount,
            startDate: (0, h.de)({
                overrideRenewalDate: p,
                currentInvoice: v.id !== b.id ? v : void 0,
                renewalInvoice: b,
                isSubscriptionUpdate: null != o,
                fractionalPremiumInfo: m,
            }),
        };
    return (0, l.jsx)(u._P, {
        variant: { type: i ? u.I0.GiftNitro : n ? u.I0.SubscriptionTrial : u.I0.Subscription, ...j },
        paymentSourceType: r,
        immediateDelivery: T,
    });
}
