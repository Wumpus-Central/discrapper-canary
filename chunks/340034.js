n.d(t, { PI: () => v, W9: () => N, XH: () => g, l$: () => I });
var l = n(627968),
    i = n(64700),
    a = n(834730),
    r = n(683071),
    s = n(546605),
    o = n(854354),
    u = n(93159),
    c = n(270537),
    d = n(881489),
    p = n(156962),
    m = n(446929),
    h = n(692440),
    A = n(367921),
    _ = n(299301),
    C = n(156312),
    E = n(908419),
    y = n(888751),
    f = n(652215),
    P = n(788868),
    S = n(985018),
    x = n(327105),
    T = n(299279);
let N = (e) => {
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
            t.type === _.N$.PREMIUM_GIFT
                ? (0, y.fk)(s, { isCustomGift: r, isPrepaidPaymentSource: a, subscriptionPlan: n })
                : (0, y.IY)(s, {
                      isPrepaidPaymentSource: a,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: i,
                  }).lineItems;
        let d = (0, o.lp)(s, { manualLineItems: u, includeTaxLineItem: !0 });
        return (0, l.jsx)(c.Vm, { label: S.intl.string(x.default.eoXh7B), lineItems: d, currency: s.currency });
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
                selectedPlanPrice: _,
                isPrepaid: C,
                shouldShowHRKEuroWarning: E,
                shouldShowTotalInSubscriptionFlow: f,
                shouldShowUpdatedPaymentModal: S,
                userTrialOffer: x,
                trialPeriodCopy: N,
                isEligibleForTrial: g,
                isEligibleForBOGOPromotion: I,
                premiumSubscriptionPlan: v,
                skuId: b,
            } = h,
            { shouldShowPremiumSwitchPlanSelectText: R, premiumSwitchPlanSelectText: M } = i.useMemo(() => {
                let e = (0, m.U_)(v, { isEligibleForBOGOPromotion: I });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, m.yq)(v, b) : null,
                };
            }, [v, I, b]),
            j = i.useMemo(
                () => (d && g ? (0, m.Ct)(x, { subscriptionPeriodEnd: s, trialPeriodCopy: N }) : p),
                [d, g, x, s, N, p],
            ),
            {
                selectPlan: L,
                premiumSubscription: O,
                userLocale: D,
                priceOptions: U,
                isGift: w,
                isEligibleForDiscount: k,
                shouldUseCalculatedDiscount: F,
                discountOffer: G,
                discountAmountOff: B,
            } = (0, m.Rx)(h),
            Y = i.useMemo(() => (r.length > 0 ? P.hd[r[0]].premiumType : void 0), [r]),
            W = i.useCallback(
                (e) => {
                    L(e.value);
                },
                [L],
            ),
            V = i.useMemo(() => {
                let e = null != G && G.discount.user_usage_limit_interval === P.Ff.MONTH;
                return r.map((t) => {
                    let { isCurrentPlan: n, disabled: l } = (0, m.cD)(O, t),
                        i = (0, y.Rs)(O, {
                            planId: t,
                            isEligibleForDiscount: k,
                            isCurrentPlan: n,
                            disabled: l,
                            userLocale: D,
                            showPlanStatusSubText: o,
                            isInPlanSelectStep: d,
                            discountOffer: G,
                            discountAmountOff: B,
                            isMonthlyDiscountOffer: e,
                            priceOptions: U,
                            isGift: w,
                            shouldUseCalculatedDiscount: F,
                            isEligibleForTrial: g,
                            isEligibleForBOGOPromotion: I,
                        });
                    return {
                        value: i.id,
                        secondarySubText: i.secondarySubText,
                        primaryText: i.planName,
                        badgeText: i.promoText,
                        subText: i.priceText,
                        isDisabled: i.isDisabled || c,
                    };
                });
            }, [c, o, r, D, k, G, B, U, w, F, g, I, O, d]);
        return null == Y
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      R &&
                          (0, l.jsx)(a.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: T.S,
                              children: M,
                          }),
                      (0, l.jsx)(u.me, {
                          headingComponent: (0, l.jsx)(u.ec, { size: "sm", color: "text-strong", premiumType: Y }),
                          headingSubText: j,
                          planRadioOptions: V,
                          value: A?.id ?? "",
                          onChange: W,
                      }),
                      d
                          ? (0, m.LR)({
                                selectedPlan: A,
                                selectedPlanPrice: _,
                                isPrepaid: C,
                                shouldShowHRKEuroWarning: E,
                                shouldShowUpdatedPaymentModal: S,
                                showTotal: d,
                                shouldShowTotalInSubscriptionFlow: f,
                                previewTotalSectionClassName: T.$,
                            })
                          : null,
                  ],
              });
    },
    I = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: a } = e,
            { fractionalPremiumBannerMessage: s } = ((e) => {
                let {
                        fractionalPremiumInfo: t,
                        isEligibleForTrial: n,
                        trialPeriodCopy: l,
                        subscriptionPeriodEnd: i,
                    } = e,
                    a = (0, d.ds)(),
                    r = {};
                return (
                    a
                        ? (r = { variant: p.uA.REVERSE_TRIAL })
                        : n && (r = { variant: p.uA.TRIAL, trialPeriod: l, trialEnd: i }),
                    { fractionalPremiumBannerMessage: (0, p.NQ)({ fractionalPremiumInfo: t, ...r }) }
                );
            })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: a });
        return null != s && "" !== s ? (0, l.jsx)(r.w, { type: "info", children: s }) : null;
    };
function v(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: i,
            isGift: a,
            paymentSourceType: r,
            activeSubscription: o,
            invoiceSummaryTypeWithPreview: c,
            isPrepaidPaymentSource: d = !1,
            overrideRenewalDate: p,
            fractionalPremiumInfo: m,
            hideLegalContent: P,
            isInvoiceBilledImmediately: S = !0,
        } = e,
        { immediateDelivery: x } = (0, E.U)(),
        { discountOffer: T, paymentSourceId: N, checkoutPaymentSources: g } = (0, C.P5)(),
        I = (0, s.vg)("PremiumUnifiedCheckoutLegal");
    if (c.type === _.N$.LOADING) return null;
    let { invoicePreview: v } = c,
        b = ("renewalInvoicePreview" in c ? c.renewalInvoicePreview : null) ?? v,
        R = b.invoiceItems.find((e) => e.subscriptionPlanId === i.id),
        M = null != R ? (0, y.Re)(R, T).amount : b.subtotal;
    if (P) return null;
    let j = I && null != N && g?.some((e) => e.id === N && null != e.relocationCountry),
        L = {
            purchaseButtonText: (0, A.Ro)({
                productLine: f.EZt.PREMIUM,
                purchaseType: f.VVm.SUBSCRIPTION,
                plan: i,
                premiumSubscription: o,
                isGift: a,
                planGroup: t,
                isPrepaidPaymentSource: d,
                willRelocateStoreCountry: j,
            }),
            totalDue: S ? v.total : 0,
            renewalPrice: M,
            currency: v.currency,
            interval: i.interval,
            intervalCount: i.intervalCount,
            startDate: (0, h.de)({
                overrideRenewalDate: p,
                currentInvoice: v.id !== b.id ? v : void 0,
                renewalInvoice: b,
                isSubscriptionUpdate: null != o,
                fractionalPremiumInfo: m,
            }),
        };
    return (0, l.jsx)(u._P, {
        variant: { type: a ? u.I0.GiftNitro : n ? u.I0.SubscriptionTrial : u.I0.Subscription, ...L },
        paymentSourceType: r,
        immediateDelivery: x,
    });
}
