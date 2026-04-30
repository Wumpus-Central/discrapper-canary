n.d(t, { PI: () => M, W9: () => I, XH: () => g, l$: () => v });
var l = n(627968),
    a = n(64700),
    i = n(834730),
    s = n(683071),
    r = n(546605),
    o = n(854354),
    u = n(364995),
    c = n(93159),
    d = n(848584),
    p = n(881489),
    m = n(531506),
    h = n(337092),
    A = n(692440),
    C = n(367921),
    E = n(299301),
    y = n(156312),
    P = n(908419),
    S = n(888751),
    _ = n(652215),
    T = n(788868),
    f = n(985018),
    N = n(327105),
    x = n(299279);
let I = (e) => {
        let {
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: a,
                isPrepaidPaymentSource: i,
                isCustomGift: s,
            } = e,
            { invoicePreview: r } = t,
            u = [];
        u =
            t.type === E.N$.PREMIUM_GIFT
                ? (0, S.fk)(r, { isCustomGift: s, isPrepaidPaymentSource: i, subscriptionPlan: n })
                : (0, S.IY)(r, {
                      isPrepaidPaymentSource: i,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: a,
                  }).lineItems;
        let c = (0, o.lp)(r, { manualLineItems: u, includeTaxLineItem: !0 });
        return (0, l.jsx)(d.Vm, { label: f.intl.string(N.default.eoXh7B), lineItems: c, currency: r.currency });
    },
    g = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                subscriptionPeriodEnd: r,
                showPlanStatusSubText: o,
                disabled: u,
                isInPlanSelectStep: d,
                headingSubText: p,
            } = e,
            m = (0, h.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: s,
                subscriptionPeriodEnd: r,
                showTotal: d,
            }),
            {
                selectedPlan: A,
                selectedPlanPrice: C,
                isPrepaid: E,
                shouldShowHRKEuroWarning: y,
                shouldShowTotalInSubscriptionFlow: P,
                shouldShowUpdatedPaymentModal: _,
                userTrialOffer: f,
                trialPeriodCopy: N,
                isEligibleForTrial: I,
                isEligibleForBOGOPromotion: g,
                premiumSubscriptionPlan: v,
                skuId: M,
            } = m,
            { shouldShowPremiumSwitchPlanSelectText: b, premiumSwitchPlanSelectText: R } = a.useMemo(() => {
                let e = (0, h.U_)(v, { isEligibleForBOGOPromotion: g });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, h.yq)(v, M) : null,
                };
            }, [v, g, M]),
            j = a.useMemo(
                () => (d && I ? (0, h.Ct)(f, { subscriptionPeriodEnd: r, trialPeriodCopy: N }) : p),
                [d, I, f, r, N, p],
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
            } = (0, h.Rx)(m),
            B = a.useMemo(() => (s.length > 0 ? T.hd[s[0]].premiumType : void 0), [s]),
            W = a.useCallback(
                (e) => {
                    L(e.value);
                },
                [L],
            ),
            H = a.useMemo(() => {
                let e = null != G && G.discount.user_usage_limit_interval === T.Ff.MONTH;
                return s.map((t) => {
                    let { isCurrentPlan: n, disabled: l } = (0, h.cD)(O, t),
                        a = (0, S.Rs)(O, {
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
                            isEligibleForTrial: I,
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
            }, [u, o, s, D, k, G, F, w, U, Y, I, g, O, d]);
        return null == B
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      b &&
                          (0, l.jsx)(i.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: x.S,
                              children: R,
                          }),
                      (0, l.jsx)(c.me, {
                          headingComponent: (0, l.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: B }),
                          headingSubText: j,
                          planRadioOptions: H,
                          value: A?.id ?? "",
                          onChange: W,
                      }),
                      d
                          ? (0, h.LR)({
                                selectedPlan: A,
                                selectedPlanPrice: C,
                                isPrepaid: E,
                                shouldShowHRKEuroWarning: y,
                                shouldShowUpdatedPaymentModal: _,
                                showTotal: d,
                                shouldShowTotalInSubscriptionFlow: P,
                                previewTotalSectionClassName: x.$,
                            })
                          : null,
                  ],
              });
    },
    v = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: a, subscriptionPeriodEnd: i } = e,
            { fractionalPremiumBannerMessage: r } = ((e) => {
                let {
                        fractionalPremiumInfo: t,
                        isEligibleForTrial: n,
                        trialPeriodCopy: l,
                        subscriptionPeriodEnd: a,
                    } = e,
                    i = (0, p.ds)(),
                    s = {};
                return (
                    i
                        ? (s = { variant: m.uA.REVERSE_TRIAL })
                        : n && (s = { variant: m.uA.TRIAL, trialPeriod: l, trialEnd: a }),
                    { fractionalPremiumBannerMessage: (0, m.NQ)({ fractionalPremiumInfo: t, ...s }) }
                );
            })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: a, subscriptionPeriodEnd: i });
        return null != r && "" !== r ? (0, l.jsx)(s.w, { type: "info", children: r }) : null;
    };
function M(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: a,
            isGift: i,
            paymentSourceType: s,
            activeSubscription: o,
            invoiceSummaryTypeWithPreview: d,
            isPrepaidPaymentSource: p = !1,
            overrideRenewalDate: m,
            fractionalPremiumInfo: h,
            hideLegalContent: T,
            isInvoiceBilledImmediately: f = !0,
        } = e,
        { immediateDelivery: N } = (0, P.U)(),
        { discountOffer: x, paymentSourceId: I } = (0, y.P5)(),
        { checkoutPaymentSources: g } = (0, u.t6)(),
        v = (0, r.vg)("PremiumUnifiedCheckoutLegal");
    if (d.type === E.N$.LOADING) return null;
    let { invoicePreview: M } = d,
        b = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? M,
        R = b.invoiceItems.find((e) => e.subscriptionPlanId === a.id),
        j = null != R ? (0, S.Re)(R, x).amount : b.subtotal;
    if (T) return null;
    let L = v && null != I && g?.some((e) => e.id === I && null != e.relocationCountry),
        O = {
            purchaseButtonText: (0, C.Ro)({
                productLine: _.EZt.PREMIUM,
                purchaseType: _.VVm.SUBSCRIPTION,
                plan: a,
                premiumSubscription: o,
                isGift: i,
                planGroup: t,
                isPrepaidPaymentSource: p,
                willRelocateStoreCountry: L,
            }),
            totalDue: f ? M.total : 0,
            renewalPrice: j,
            currency: M.currency,
            interval: a.interval,
            intervalCount: a.intervalCount,
            startDate: (0, A.de)({
                overrideRenewalDate: m,
                currentInvoice: M.id !== b.id ? M : void 0,
                renewalInvoice: b,
                isSubscriptionUpdate: null != o,
                fractionalPremiumInfo: h,
            }),
        };
    return (0, l.jsx)(c._P, {
        variant: { type: i ? c.I0.GiftNitro : n ? c.I0.SubscriptionTrial : c.I0.Subscription, ...O },
        paymentSourceType: s,
        immediateDelivery: N,
    });
}
