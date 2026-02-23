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
            isDiscount: C,
        } = e,
        b = (0, f.L)(e),
        { isEligibleForTrial: R } = (0, h.P5)(),
        {
            error: O,
            isGift: D,
            giftRecipient: L,
            oneTimePurchaseNitroGiftInvoicePreview: w,
            subscriptionPeriodEnd: x,
            trialInvoicePreview: M,
            proratedInvoicePreview: P,
            renewalInvoicePreview: k,
            planSwitchLoading: U,
            plan: G,
            isPrepaid: F,
            discountInvoiceItems: V,
            premiumPlanOptions: B,
            shouldAllowPlanSelect: H,
            isCustomGift: j,
            hidePersonalInformation: Y,
            hasEntitlements: W,
            paymentSourceId: K,
            paymentSourceType: z,
            eligiblePaymentGateways: $,
            activeSubscription: q,
            fractionalPremiumInfo: X,
            isPremiumGroupPurchase: Z,
            currencyDropdownProps: Q,
            paymentSourcesForDropdown: J,
            defaultPaymentSourceId: ee,
        } = b,
        et = i.useMemo(() => (C ? null : (0, r.jsx)(E.rk, { ...Q })), [C, Q]),
        en = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.A, {
                    shouldUseUnifiedCheckoutUI: !0,
                    paymentSources: J,
                    selectedPaymentSourceId: K,
                    defaultPaymentSourceId: ee,
                    newPaymentMethodOptionLabel: W && !v ? A.intl.string(A.t.IGU7El) : null,
                    onChange: S,
                    onPaymentSourceAdd: y,
                    hidePersonalInformation: Y,
                    isTrial: v,
                    paymentGatewayRestrictions: $,
                }),
                et,
            ],
        }),
        er = (0, p.yf)({
            error: O,
            isGift: D,
            oneTimePurchaseNitroGiftInvoicePreview: w,
            trialInvoicePreview: M,
            proratedInvoicePreview: P,
            renewalInvoicePreview: k,
            planSwitchLoading: U,
        }),
        ei = (0, d.V)(t),
        es = (0, _.O8)(),
        ea = (0, m.pt)({
            fractionalPremiumInfo: X,
            selectedPlanId: n,
            planGroup: N,
            premiumSubscription: q,
            isGift: D,
        }),
        eo = i.useMemo(
            () =>
                ea
                    ? (0, r.jsx)(E.l$, {
                          fractionalPremiumInfo: X,
                          isEligibleForTrial: R,
                          trialPeriodCopy: es,
                          subscriptionPeriodEnd: x,
                      })
                    : Z
                      ? (0, r.jsx)(s.wx6, { type: "info", children: (0, m.Nn)() })
                      : null,
            [ea, X, R, es, x, Z],
        );
    if (null == er || er.type === p.N$.LOADING) return (0, r.jsx)(l.Ed, {});
    let el = null != ei ? ei.subscription_trial : void 0,
        eu =
            er.type === p.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, r.jsx)(E.W9, {
                      invoiceSummaryTypeWithPreview: er,
                      subscriptionPlan: G,
                      isPrepaidPaymentSource: F,
                      subscriptionTrial: el,
                      isCustomGift: j,
                  }),
        ec = null;
    if (
        !F &&
        (p.IJ.has(er.type) || er.type === p.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in er &&
        null != er.renewalInvoicePreview
    ) {
        let e = (0, g.Gj)(er.invoicePreview, er.renewalInvoicePreview, el);
        ec = (0, r.jsx)(c._, { ...e });
    }
    let ed = (0, g.BZ)(er, G, { isPrepaidPaymentSource: F, giftRecipient: L, isPremiumGroupPurchase: Z }),
        e_ = H
            ? (0, r.jsx)(E.XH, {
                  selectedPlanId: n,
                  priceOptions: T,
                  planOptions: B,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: x,
                  discountInvoiceItems: V,
              })
            : void 0,
        ef = H ? void 0 : (0, r.jsx)(u.f7, { ...ed }),
        ep = (0, r.jsx)(E.PI, {
            planGroup: N,
            activeSubscription: q,
            isTrial: v,
            plan: G,
            isGift: D,
            priceOptions: T,
            renewalInvoicePreview: k,
            paymentSourceType: z,
        }),
        eh =
            er.type === p.N$.PREMIUM_WITH_TRIAL
                ? (0, g.MT)(er.invoicePreview.currency)
                : (0, o.kw)({ subscriptionInvoiceRecord: er.invoicePreview });
    return (0, r.jsx)(l.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeContent: eo,
        planSelectContent: e_,
        purchaseItemContent: ef,
        subscriptionDetailsContent: ec,
        paymentSelectContent: en,
        invoiceSummaryContent: eu,
        legalContent: ep,
        invoiceTotalDueValue: eh,
        invoiceTotalDueLabel: A.intl.string(I.default.R0cZsM),
    });
};
