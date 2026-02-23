"use strict";
n.d(t, { _: () => T });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(637141),
    o = n(854354),
    l = n(69882),
    u = n(241989),
    c = n(669510),
    d = n(234419),
    _ = n(446929),
    f = n(494230),
    p = n(299301),
    h = n(156312),
    m = n(222707),
    E = n(340034),
    g = n(888751),
    A = n(985018),
    I = n(756366);
let T = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: T,
            onPaymentSourceChange: S,
            handlePaymentSourceAdd: y,
            isTrial: v,
            planGroup: N,
            setHasAcceptedTerms: C,
            isDiscount: b,
        } = e,
        R = (0, f.L)(e),
        { isEligibleForTrial: O } = (0, h.P5)(),
        {
            error: D,
            isGift: L,
            giftRecipient: w,
            oneTimePurchaseNitroGiftInvoicePreview: x,
            subscriptionPeriodEnd: M,
            trialInvoicePreview: P,
            proratedInvoicePreview: k,
            renewalInvoicePreview: U,
            planSwitchLoading: G,
            plan: F,
            isPrepaid: V,
            discountInvoiceItems: B,
            premiumPlanOptions: H,
            shouldAllowPlanSelect: j,
            isCustomGift: Y,
            hidePersonalInformation: W,
            hasEntitlements: K,
            paymentSourceId: z,
            paymentSourceType: $,
            eligiblePaymentGateways: q,
            activeSubscription: Z,
            fractionalPremiumInfo: X,
            isPremiumGroupPurchase: Q,
            currencyDropdownProps: J,
            paymentSourcesForDropdown: ee,
            defaultPaymentSourceId: et,
        } = R,
        en = i.useMemo(() => (b ? null : (0, r.jsx)(E.rk, { ...J })), [b, J]),
        er = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.A, {
                    shouldUseUnifiedCheckoutUI: !0,
                    paymentSources: ee,
                    selectedPaymentSourceId: z,
                    defaultPaymentSourceId: et,
                    newPaymentMethodOptionLabel: K && !v ? A.intl.string(A.t.IGU7El) : null,
                    onChange: S,
                    onPaymentSourceAdd: y,
                    hidePersonalInformation: W,
                    isTrial: v,
                    paymentGatewayRestrictions: q,
                }),
                en,
            ],
        }),
        ei = (0, p.yf)({
            error: D,
            isGift: L,
            oneTimePurchaseNitroGiftInvoicePreview: x,
            trialInvoicePreview: P,
            proratedInvoicePreview: k,
            renewalInvoicePreview: U,
            planSwitchLoading: G,
        }),
        es = (0, d.V)(t),
        ea = (0, _.O8)(),
        eo = (0, m.pt)({
            fractionalPremiumInfo: X,
            selectedPlanId: n,
            planGroup: N,
            premiumSubscription: Z,
            isGift: L,
        }),
        el = i.useMemo(
            () =>
                eo
                    ? (0, r.jsx)(E.l$, {
                          fractionalPremiumInfo: X,
                          isEligibleForTrial: O,
                          trialPeriodCopy: ea,
                          subscriptionPeriodEnd: M,
                      })
                    : Q
                      ? (0, r.jsx)(s.wx6, { type: "info", children: (0, m.Nn)() })
                      : null,
            [eo, X, O, ea, M, Q],
        );
    if (null == ei || ei.type === p.N$.LOADING) return (0, r.jsx)(l.Ed, {});
    let eu = null != es ? es.subscription_trial : void 0,
        ec =
            ei.type === p.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, r.jsx)(E.W9, {
                      invoiceSummaryTypeWithPreview: ei,
                      subscriptionPlan: F,
                      isPrepaidPaymentSource: V,
                      subscriptionTrial: eu,
                      isCustomGift: Y,
                  }),
        ed = null;
    if (
        !V &&
        (p.IJ.has(ei.type) || ei.type === p.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ei &&
        null != ei.renewalInvoicePreview
    ) {
        let e = (0, g.Gj)(ei.invoicePreview, ei.renewalInvoicePreview, eu);
        ed = (0, r.jsx)(c._, { ...e });
    }
    let e_ = (0, g.BZ)(ei, F, { isPrepaidPaymentSource: V, giftRecipient: w, isPremiumGroupPurchase: Q }),
        ef = j
            ? (0, r.jsx)(E.XH, {
                  selectedPlanId: n,
                  priceOptions: T,
                  planOptions: H,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: M,
                  discountInvoiceItems: B,
              })
            : void 0,
        ep = j ? void 0 : (0, r.jsx)(u.f7, { ...e_ }),
        eh = (0, r.jsx)(E.PI, {
            planGroup: N,
            activeSubscription: Z,
            setHasAcceptedTerms: C,
            isTrial: v,
            plan: F,
            isGift: L,
            priceOptions: T,
            renewalInvoicePreview: U,
            paymentSourceType: $,
        }),
        em =
            ei.type === p.N$.PREMIUM_WITH_TRIAL
                ? (0, g.MT)(ei.invoicePreview.currency)
                : (0, o.kw)({ subscriptionInvoiceRecord: ei.invoicePreview });
    return (0, r.jsx)(l.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeContent: el,
        planSelectContent: ef,
        purchaseItemContent: ep,
        subscriptionDetailsContent: ed,
        paymentSelectContent: er,
        invoiceSummaryContent: ec,
        legalContent: eh,
        invoiceTotalDueValue: em,
        invoiceTotalDueLabel: A.intl.string(I.default.R0cZsM),
    });
};
