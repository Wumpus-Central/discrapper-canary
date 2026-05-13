n.d(t, { PI: () => M, W9: () => I, XH: () => g, l$: () => v });
var l = n(627968),
    a = n(64700),
    i = n(834730),
    r = n(683071),
    s = n(546605),
    o = n(854354),
    u = n(364995),
    c = n(474367),
    d = n(848584),
    p = n(881489),
    m = n(531506),
    h = n(337092),
    C = n(692440),
    A = n(367921),
    E = n(299301),
    y = n(49960),
    P = n(908419),
    S = n(888751),
    _ = n(652215),
    T = n(788868),
    f = n(375708),
    x = n(327105),
    N = n(299279);
let I = (e) => {
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
                ? (0, S.fk)(s, { isCustomGift: r, isPrepaidPaymentSource: i, subscriptionPlan: n })
                : (0, S.IY)(s, {
                      isPrepaidPaymentSource: i,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: a,
                  }).lineItems;
        let c = (0, o.lp)(s, { manualLineItems: u, includeTaxLineItem: !0 });
        return (0, l.jsx)(d.Vm, { label: f.intl.string(x.default.eoXh7B), lineItems: c, currency: s.currency });
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
                trialPeriodCopy: x,
                isEligibleForTrial: I,
                isEligibleForBOGOPromotion: g,
                premiumSubscriptionPlan: v,
                skuId: M,
            } = m,
            { shouldShowPremiumSwitchPlanSelectText: j, premiumSwitchPlanSelectText: b } = a.useMemo(() => {
                let e = (0, h.U_)(v, { isEligibleForBOGOPromotion: g });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, h.yq)(v, M) : null,
                };
            }, [v, g, M]),
            R = a.useMemo(
                () => (d && I ? (0, h.Ct)(f, { subscriptionPeriodEnd: s, trialPeriodCopy: x }) : p),
                [d, I, f, s, x, p],
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
            B = a.useMemo(() => (r.length > 0 ? T.hd[r[0]].premiumType : void 0), [r]),
            W = a.useCallback(
                (e) => {
                    L(e.value);
                },
                [L],
            ),
            V = a.useMemo(() => {
                let e = null != G && G.discount.userUsageLimitInterval === T.Ff.MONTH;
                return r.map((t) => {
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
            }, [u, o, r, D, k, G, F, w, U, Y, I, g, O, d]);
        return null == B
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      j &&
                          (0, l.jsx)(i.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: N.S,
                              children: b,
                          }),
                      (0, l.jsx)(c.me, {
                          headingComponent: (0, l.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: B }),
                          headingSubText: R,
                          planRadioOptions: V,
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
                                previewTotalSectionClassName: N.$,
                            })
                          : null,
                  ],
              });
    },
    v = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: a, subscriptionPeriodEnd: i } = e,
            { fractionalPremiumBannerMessage: s } = ((e) => {
                let {
                        fractionalPremiumInfo: t,
                        isEligibleForTrial: n,
                        trialPeriodCopy: l,
                        subscriptionPeriodEnd: a,
                    } = e,
                    i = (0, p.ds)(),
                    r = {};
                return (
                    i
                        ? (r = { variant: m.uA.REVERSE_TRIAL })
                        : n && (r = { variant: m.uA.TRIAL, trialPeriod: l, trialEnd: a }),
                    { fractionalPremiumBannerMessage: (0, m.NQ)({ fractionalPremiumInfo: t, ...r }) }
                );
            })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: a, subscriptionPeriodEnd: i });
        return null != s && "" !== s ? (0, l.jsx)(r.w, { type: "info", children: s }) : null;
    };
function M(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: a,
            isGift: i,
            paymentSourceType: r,
            activeSubscription: o,
            invoiceSummaryTypeWithPreview: d,
            isPrepaidPaymentSource: p = !1,
            overrideRenewalDate: m,
            fractionalPremiumInfo: h,
            hideLegalContent: T,
            isInvoiceBilledImmediately: f = !0,
        } = e,
        { immediateDelivery: x } = (0, P.U)(),
        { discountOffer: N, paymentSourceId: I } = (0, y.P5)(),
        { checkoutPaymentSources: g } = (0, u.t)(),
        v = (0, s.vg)("PremiumUnifiedCheckoutLegal");
    if (d.type === E.N$.LOADING) return null;
    let { invoicePreview: M } = d,
        j = ("renewalInvoicePreview" in d ? d.renewalInvoicePreview : null) ?? M,
        b = j.invoiceItems.find((e) => e.subscriptionPlanId === a.id),
        R = null != b ? (0, S.Re)(b, N).amount : j.subtotal;
    if (T) return null;
    let L = v && null != I && g?.some((e) => e.id === I && null != e.relocationCountry),
        O = {
            purchaseButtonText: (0, A.Ro)({
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
            renewalPrice: R,
            currency: M.currency,
            interval: a.interval,
            intervalCount: a.intervalCount,
            startDate: (0, C.de)({
                overrideRenewalDate: m,
                currentInvoice: M.id !== j.id ? M : void 0,
                renewalInvoice: j,
                isSubscriptionUpdate: null != o,
                fractionalPremiumInfo: h,
            }),
        };
    return (0, l.jsx)(c._P, {
        variant: { type: i ? c.I0.GiftNitro : n ? c.I0.SubscriptionTrial : c.I0.Subscription, ...O },
        paymentSourceType: r,
        immediateDelivery: x,
    });
}
