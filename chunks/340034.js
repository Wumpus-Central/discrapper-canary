n.d(t, { PI: () => M, W9: () => g, XH: () => x, l$: () => R });
var l = n(627968),
    r = n(64700),
    i = n(834730),
    a = n(683071),
    s = n(546605),
    o = n(854354),
    u = n(364995),
    c = n(463376),
    d = n(944355),
    p = n(848584),
    m = n(571878),
    h = n(881489),
    A = n(531506),
    C = n(361597),
    E = n(692440),
    y = n(367921),
    P = n(299301),
    S = n(908419),
    _ = n(888751),
    f = n(652215),
    I = n(788868),
    T = n(375708),
    N = n(327105),
    v = n(299279);
let g = (e) => {
        let {
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: r,
                isPrepaidPaymentSource: i,
                isCustomGift: a,
            } = e,
            { invoicePreview: s } = t,
            u = [];
        u =
            t.type === P.N$.PREMIUM_GIFT
                ? (0, _.fk)(s, { isCustomGift: a, isPrepaidPaymentSource: i, subscriptionPlan: n })
                : (0, _.IY)(s, {
                      isPrepaidPaymentSource: i,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: r,
                  }).lineItems;
        let c = (0, o.lp)(s, { manualLineItems: u, includeTaxLineItem: !0 });
        return (0, l.jsx)(p.Vm, { label: T.intl.string(N.default.eoXh7B), lineItems: c, currency: s.currency });
    },
    x = (e) => {
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
            h = (0, C.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: a,
                subscriptionPeriodEnd: s,
                showTotal: c,
            }),
            {
                selectedPlan: A,
                selectedPlanPrice: E,
                isPrepaid: y,
                shouldShowHRKEuroWarning: P,
                shouldShowTotalInSubscriptionFlow: S,
                shouldShowUpdatedPaymentModal: f,
                userTrialOffer: N,
                trialPeriodCopy: g,
                isEligibleForTrial: x,
                isEligibleForBOGOPromotion: R,
                premiumSubscriptionPlan: M,
                skuId: b,
            } = h,
            { shouldShowPremiumSwitchPlanSelectText: L, premiumSwitchPlanSelectText: j } = r.useMemo(() => {
                let e = (0, C.U_)(M, { isEligibleForBOGOPromotion: R });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, C.yq)(M, b) : null,
                };
            }, [M, R, b]),
            O = r.useMemo(
                () => (c && x ? (0, C.Ct)(N, { subscriptionPeriodEnd: s, trialPeriodCopy: g }) : p),
                [c, x, N, s, g, p],
            ),
            {
                selectPlan: w,
                premiumSubscription: D,
                userLocale: U,
                priceOptions: k,
                isGift: G,
                isEligibleForDiscount: Y,
                discountInfo: F,
            } = (0, C.Rx)(h),
            B = r.useMemo(() => (a.length > 0 ? I.hd[a[0]].premiumType : void 0), [a]),
            W = r.useCallback(
                (e) => {
                    w(e.value);
                },
                [w],
            ),
            H = r.useMemo(
                () =>
                    a.map((e) => {
                        let { isCurrentPlan: t, disabled: n } = (0, C.cD)(D, e),
                            l = (0, _.Rs)(D, {
                                planId: e,
                                isEligibleForDiscount: Y,
                                isCurrentPlan: t,
                                disabled: n,
                                userLocale: U,
                                showPlanStatusSubText: o,
                                isInPlanSelectStep: c,
                                discountInfo: F,
                                priceOptions: k,
                                isGift: G,
                                isEligibleForTrial: x,
                                isEligibleForBOGOPromotion: R,
                            });
                        return {
                            value: l.id,
                            secondarySubText: m ? null : l.secondarySubText,
                            primaryText: l.planName,
                            badgeText: m ? null : l.promoText,
                            subText: m ? T.intl.string(T.t.ZTNur7) : l.priceText,
                            subTextStrikethrough: m ? null : l.subTextStrikethrough,
                            isDisabled: l.isDisabled || u,
                        };
                    }),
                [u, o, a, U, Y, F, k, G, x, R, D, c, m],
            );
        return null == B
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      L &&
                          (0, l.jsx)(i.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: v.S,
                              children: j,
                          }),
                      (0, l.jsx)(d.me, {
                          headingComponent: (0, l.jsx)(d.ec, { size: "sm", color: "text-strong", premiumType: B }),
                          headingSubText: O,
                          planRadioOptions: H,
                          value: A?.id ?? "",
                          onChange: W,
                      }),
                      c
                          ? (0, C.LR)({
                                selectedPlan: A,
                                selectedPlanPrice: E,
                                isPrepaid: y,
                                shouldShowHRKEuroWarning: P,
                                shouldShowUpdatedPaymentModal: f,
                                showTotal: c,
                                shouldShowTotalInSubscriptionFlow: S,
                                previewTotalSectionClassName: v.$,
                            })
                          : null,
                  ],
              });
    },
    R = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            { fractionalPremiumBannerMessage: s } = ((e) => {
                let {
                        fractionalPremiumInfo: t,
                        isEligibleForTrial: n,
                        trialPeriodCopy: l,
                        subscriptionPeriodEnd: r,
                    } = e,
                    i = (0, h.ds)(),
                    a = {};
                return (
                    i
                        ? (a = { variant: A.uA.REVERSE_TRIAL })
                        : n && (a = { variant: A.uA.TRIAL, trialPeriod: l, trialEnd: r }),
                    { fractionalPremiumBannerMessage: (0, A.NQ)({ fractionalPremiumInfo: t, ...a }) }
                );
            })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i });
        return null != s && "" !== s ? (0, l.jsx)(a.w, { type: "info", children: s }) : null;
    };
function M(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: r,
            isGift: i,
            paymentSourceType: a,
            activeSubscription: o,
            invoiceSummaryTypeWithPreview: p,
            isPrepaidPaymentSource: h = !1,
            overrideRenewalDate: A,
            fractionalPremiumInfo: C,
            hideLegalContent: I,
            isInvoiceBilledImmediately: T = !0,
        } = e,
        { immediateDelivery: N } = (0, S.U)(),
        { discountOffer: v, premiumGroupDiscountOffer: g } = (0, c.i)(),
        x = (0, m.t4)((e) => e.paymentSourceId),
        { checkoutPaymentSources: R } = (0, u.t)(),
        M = (0, s.vg)("PremiumUnifiedCheckoutLegal");
    if (p.type === P.N$.LOADING) return null;
    let { invoicePreview: b } = p,
        L = ("renewalInvoicePreview" in p ? p.renewalInvoicePreview : null) ?? b,
        { renewalPrice: j, multiPeriodDiscountAttributes: O } = (0, _.Go)(L, r, g ?? v);
    if (I) return null;
    let w = M && null != x && R?.some((e) => e.id === x && null != e.relocationCountry),
        D = {
            purchaseButtonText: (0, y.Ro)({
                productLine: f.EZt.PREMIUM,
                purchaseType: f.VVm.SUBSCRIPTION,
                plan: r,
                premiumSubscription: o,
                isGift: i,
                planGroup: t,
                isPrepaidPaymentSource: h,
                willRelocateStoreCountry: w,
            }),
            totalDue: T ? b.total : 0,
            renewalPrice: j,
            multiPeriodDiscountAttributes: O,
            currency: b.currency,
            interval: r.interval,
            intervalCount: r.intervalCount,
            startDate: (0, E.de)({
                overrideRenewalDate: A,
                currentInvoice: b.id !== L.id ? b : void 0,
                renewalInvoice: L,
                isSubscriptionUpdate: null != o,
                fractionalPremiumInfo: C,
            }),
        };
    return (0, l.jsx)(d._P, {
        variant: { type: i ? d.I0.GiftNitro : n ? d.I0.SubscriptionTrial : d.I0.Subscription, ...D },
        paymentSourceType: a,
        immediateDelivery: N,
    });
}
