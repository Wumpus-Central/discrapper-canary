n.d(t, { PI: () => M, W9: () => I, XH: () => g, l$: () => v });
var l = n(627968),
    i = n(64700),
    a = n(834730),
    r = n(683071),
    s = n(546605),
    o = n(854354),
    u = n(364995),
    c = n(93159),
    d = n(848584),
    p = n(881489),
    m = n(531506),
    h = n(337092),
    C = n(692440),
    A = n(367921),
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
                subscriptionTrial: i,
                isPrepaidPaymentSource: a,
                isCustomGift: r,
            } = e,
            { invoicePreview: s } = t,
            u = [];
        u =
            t.type === E.N$.PREMIUM_GIFT
                ? (0, S.fk)(s, { isCustomGift: r, isPrepaidPaymentSource: a, subscriptionPlan: n })
                : (0, S.IY)(s, {
                      isPrepaidPaymentSource: a,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: i,
                  }).lineItems;
        let c = (0, o.lp)(s, { manualLineItems: u, includeTaxLineItem: !0 });
        return (0, l.jsx)(d.Vm, { label: f.intl.string(N.default.eoXh7B), lineItems: c, currency: s.currency });
    },
    g = (e) => {
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
            m = (0, h.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: r,
                subscriptionPeriodEnd: s,
                showTotal: d,
            }),
            {
                selectedPlan: C,
                selectedPlanPrice: A,
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
            { shouldShowPremiumSwitchPlanSelectText: b, premiumSwitchPlanSelectText: R } = i.useMemo(() => {
                let e = (0, h.U_)(v, { isEligibleForBOGOPromotion: g });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, h.yq)(v, M) : null,
                };
            }, [v, g, M]),
            j = i.useMemo(
                () => (d && I ? (0, h.Ct)(f, { subscriptionPeriodEnd: s, trialPeriodCopy: N }) : p),
                [d, I, f, s, N, p],
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
            B = i.useMemo(() => (r.length > 0 ? T.hd[r[0]].premiumType : void 0), [r]),
            W = i.useCallback(
                (e) => {
                    L(e.value);
                },
                [L],
            ),
            H = i.useMemo(() => {
                let e = null != G && G.discount.user_usage_limit_interval === T.Ff.MONTH;
                return r.map((t) => {
                    let { isCurrentPlan: n, disabled: l } = (0, h.cD)(O, t),
                        i = (0, S.Rs)(O, {
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
                        value: i.id,
                        secondarySubText: i.secondarySubText,
                        primaryText: i.planName,
                        badgeText: i.promoText,
                        subText: i.priceText,
                        isDisabled: i.isDisabled || u,
                    };
                });
            }, [u, o, r, D, k, G, F, w, U, Y, I, g, O, d]);
        return null == B
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      b &&
                          (0, l.jsx)(a.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: x.S,
                              children: R,
                          }),
                      (0, l.jsx)(c.me, {
                          headingComponent: (0, l.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: B }),
                          headingSubText: j,
                          planRadioOptions: H,
                          value: C?.id ?? "",
                          onChange: W,
                      }),
                      d
                          ? (0, h.LR)({
                                selectedPlan: C,
                                selectedPlanPrice: A,
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
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: a } = e,
            { fractionalPremiumBannerMessage: s } = ((e) => {
                let {
                        fractionalPremiumInfo: t,
                        isEligibleForTrial: n,
                        trialPeriodCopy: l,
                        subscriptionPeriodEnd: i,
                    } = e,
                    a = (0, p.ds)(),
                    r = {};
                return (
                    a
                        ? (r = { variant: m.uA.REVERSE_TRIAL })
                        : n && (r = { variant: m.uA.TRIAL, trialPeriod: l, trialEnd: i }),
                    { fractionalPremiumBannerMessage: (0, m.NQ)({ fractionalPremiumInfo: t, ...r }) }
                );
            })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: i, subscriptionPeriodEnd: a });
        return null != s && "" !== s ? (0, l.jsx)(r.w, { type: "info", children: s }) : null;
    };
function M(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: i,
            isGift: a,
            paymentSourceType: r,
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
        v = (0, s.vg)("PremiumUnifiedCheckoutLegal");
    if (d.type === E.N$.LOADING) return null;
    let { invoicePreview: M } = d,
        b = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? M,
        R = b.invoiceItems.find((e) => e.subscriptionPlanId === i.id),
        j = null != R ? (0, S.Re)(R, x).amount : b.subtotal;
    if (T) return null;
    let L = v && null != I && g?.some((e) => e.id === I && null != e.relocationCountry),
        O = {
            purchaseButtonText: (0, A.Ro)({
                productLine: _.EZt.PREMIUM,
                purchaseType: _.VVm.SUBSCRIPTION,
                plan: i,
                premiumSubscription: o,
                isGift: a,
                planGroup: t,
                isPrepaidPaymentSource: p,
                willRelocateStoreCountry: L,
            }),
            totalDue: f ? M.total : 0,
            renewalPrice: j,
            currency: M.currency,
            interval: i.interval,
            intervalCount: i.intervalCount,
            startDate: (0, C.de)({
                overrideRenewalDate: m,
                currentInvoice: M.id !== b.id ? M : void 0,
                renewalInvoice: b,
                isSubscriptionUpdate: null != o,
                fractionalPremiumInfo: h,
            }),
        };
    return (0, l.jsx)(c._P, {
        variant: { type: a ? c.I0.GiftNitro : n ? c.I0.SubscriptionTrial : c.I0.Subscription, ...O },
        paymentSourceType: r,
        immediateDelivery: N,
    });
}
