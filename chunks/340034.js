n.d(t, { PI: () => M, W9: () => v, XH: () => x, l$: () => R });
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
    m = n(211159),
    h = n(881489),
    A = n(531506),
    E = n(361597),
    C = n(458785),
    y = n(367921),
    _ = n(299301),
    S = n(908419),
    P = n(888751),
    I = n(652215),
    f = n(788868),
    T = n(375708),
    N = n(327105),
    g = n(299279);
let v = (e) => {
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
            t.type === _.N$.PREMIUM_GIFT
                ? (0, P.fk)(s, { isCustomGift: a, isPrepaidPaymentSource: i, subscriptionPlan: n })
                : (0, P.IY)(s, {
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
            h = (0, E.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: a,
                subscriptionPeriodEnd: s,
                showTotal: c,
            }),
            {
                selectedPlan: A,
                selectedPlanPrice: C,
                isPrepaid: y,
                shouldShowHRKEuroWarning: _,
                shouldShowTotalInSubscriptionFlow: S,
                shouldShowUpdatedPaymentModal: I,
                userTrialOffer: N,
                trialPeriodCopy: v,
                isEligibleForTrial: x,
                isEligibleForBOGOPromotion: R,
                premiumSubscriptionPlan: M,
                skuId: b,
            } = h,
            { shouldShowPremiumSwitchPlanSelectText: L, premiumSwitchPlanSelectText: O } = r.useMemo(() => {
                let e = (0, E.U_)(M, { isEligibleForBOGOPromotion: R });
                return {
                    shouldShowPremiumSwitchPlanSelectText: e,
                    premiumSwitchPlanSelectText: e ? (0, E.yq)(M, b) : null,
                };
            }, [M, R, b]),
            j = r.useMemo(
                () => (c && x ? (0, E.Ct)(N, { subscriptionPeriodEnd: s, trialPeriodCopy: v }) : p),
                [c, x, N, s, v, p],
            ),
            {
                selectPlan: w,
                premiumSubscription: D,
                userLocale: U,
                priceOptions: k,
                isGift: G,
                isEligibleForDiscount: F,
                discountInfo: Y,
            } = (0, E.Rx)(h),
            B = r.useMemo(() => (a.length > 0 ? f.hd[a[0]].premiumType : void 0), [a]),
            W = r.useCallback(
                (e) => {
                    w(e.value);
                },
                [w],
            ),
            H = r.useMemo(
                () =>
                    a.map((e) => {
                        let { isCurrentPlan: t, disabled: n } = (0, E.cD)(D, e),
                            l = (0, P.Rs)(D, {
                                planId: e,
                                isEligibleForDiscount: F,
                                isCurrentPlan: t,
                                disabled: n,
                                userLocale: U,
                                showPlanStatusSubText: o,
                                isInPlanSelectStep: c,
                                discountInfo: Y,
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
                [u, o, a, U, F, Y, k, G, x, R, D, c, m],
            );
        return null == B
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      L &&
                          (0, l.jsx)(i.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: g.S,
                              children: O,
                          }),
                      (0, l.jsx)(d.me, {
                          headingComponent: (0, l.jsx)(d.ec, { size: "sm", color: "text-strong", premiumType: B }),
                          headingSubText: j,
                          planRadioOptions: H,
                          value: A?.id ?? "",
                          onChange: W,
                      }),
                      c
                          ? (0, E.LR)({
                                selectedPlan: A,
                                selectedPlanPrice: C,
                                isPrepaid: y,
                                shouldShowHRKEuroWarning: _,
                                shouldShowUpdatedPaymentModal: I,
                                showTotal: c,
                                shouldShowTotalInSubscriptionFlow: S,
                                previewTotalSectionClassName: g.$,
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
            fractionalPremiumInfo: E,
            hideLegalContent: f,
            isInvoiceBilledImmediately: T = !0,
        } = e,
        { immediateDelivery: N } = (0, S.U)(),
        { discountOffer: g, premiumGroupDiscountOffer: v } = (0, c.i)(),
        x = (0, m.t4)((e) => e.paymentSourceId),
        { checkoutPaymentSources: R } = (0, u.t)(),
        M = (0, s.vg)("PremiumUnifiedCheckoutLegal");
    if (p.type === _.N$.LOADING) return null;
    let { invoicePreview: b } = p,
        L = ("renewalInvoicePreview" in p ? p.renewalInvoicePreview : null) ?? b,
        { renewalPrice: O, multiPeriodDiscountAttributes: j } = (0, P.Go)(L, r, v ?? g);
    if (f) return null;
    let w = M && null != x && R?.some((e) => e.id === x && null != e.relocationCountry),
        D = {
            purchaseButtonText: (0, y.Ro)({
                productLine: I.EZt.PREMIUM,
                purchaseType: I.VVm.SUBSCRIPTION,
                plan: r,
                premiumSubscription: o,
                isGift: i,
                planGroup: t,
                isPrepaidPaymentSource: h,
                willRelocateStoreCountry: w,
            }),
            totalDue: T ? b.total : 0,
            renewalPrice: O,
            multiPeriodDiscountAttributes: j,
            currency: b.currency,
            interval: r.interval,
            intervalCount: r.intervalCount,
            startDate: (0, C.de)({
                overrideRenewalDate: A,
                currentInvoice: b.id !== L.id ? b : void 0,
                renewalInvoice: L,
                isSubscriptionUpdate: null != o,
                fractionalPremiumInfo: E,
            }),
        };
    return (0, l.jsx)(d._P, {
        variant: { type: i ? d.I0.GiftNitro : n ? d.I0.SubscriptionTrial : d.I0.Subscription, ...D },
        paymentSourceType: a,
        immediateDelivery: N,
    });
}
