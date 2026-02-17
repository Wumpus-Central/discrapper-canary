"use strict";
n.d(t, { _: () => y });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(637141),
    o = n(854354),
    l = n(69882),
    u = n(241989),
    c = n(669510),
    d = n(234419),
    _ = n(446929),
    f = n(494230),
    h = n(299301),
    p = n(156312),
    g = n(222707),
    E = n(340034),
    A = n(888751),
    I = n(985018),
    T = n(756366);
let y = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: y,
            paymentSources: S,
            onPaymentSourceChange: v,
            handlePaymentSourceAdd: C,
            isTrial: b,
            planGroup: N,
            setHasAcceptedTerms: R,
            isDiscount: O,
        } = e,
        D = (0, f.L)(e),
        { isEligibleForTrial: L } = (0, p.P5)(),
        {
            error: w,
            isGift: x,
            giftRecipient: P,
            oneTimePurchaseNitroGiftInvoicePreview: M,
            subscriptionPeriodEnd: k,
            trialInvoicePreview: U,
            proratedInvoicePreview: G,
            renewalInvoicePreview: F,
            planSwitchLoading: V,
            plan: B,
            isPrepaid: j,
            discountInvoiceItems: H,
            premiumPlanOptions: Y,
            shouldAllowPlanSelect: W,
            isCustomGift: K,
            isEmbeddedIAP: $,
            inReverseTrial: z,
            hidePersonalInformation: q,
            hasEntitlements: X,
            paymentSourceId: Z,
            paymentSourceType: Q,
            eligiblePaymentGateways: J,
            activeSubscription: ee,
            fractionalPremiumInfo: et,
            isPremiumGroupPurchase: en,
        } = D,
        er = (0, r.jsx)(s.A, {
            shouldUseUnifiedCheckoutUI: !0,
            paymentSources: Object.values(S),
            selectedPaymentSourceId: Z,
            newPaymentMethodOptionLabel: X && !b ? I.intl.string(I.t.IGU7El) : null,
            onChange: v,
            onPaymentSourceAdd: C,
            hidePersonalInformation: q,
            isTrial: b,
            paymentGatewayRestrictions: J,
        }),
        ei = (0, h.yf)({
            error: w,
            isGift: x,
            oneTimePurchaseNitroGiftInvoicePreview: M,
            trialInvoicePreview: U,
            proratedInvoicePreview: G,
            renewalInvoicePreview: F,
            planSwitchLoading: V,
        }),
        ea = (0, d.V)(t),
        es = (0, _.O8)(),
        eo = (0, g.pt)({
            fractionalPremiumInfo: et,
            selectedPlanId: n,
            planGroup: N,
            premiumSubscription: ee,
            isGift: x,
        }),
        el = i.useMemo(
            () =>
                eo
                    ? (0, r.jsx)(E.l$, {
                          fractionalPremiumInfo: et,
                          isEligibleForTrial: L,
                          trialPeriodCopy: es,
                          subscriptionPeriodEnd: k,
                      })
                    : en
                      ? (0, r.jsx)(a.wx6, { type: "info", children: (0, g.Nn)() })
                      : null,
            [eo, et, L, es, k, en],
        );
    if (null == ei || ei.type === h.N$.LOADING) return (0, r.jsx)(l.Ed, {});
    let eu = null != ea ? ea.subscription_trial : void 0,
        ec = (0, r.jsx)(E.Z$, {
            invoiceSummaryTypeWithPreview: ei,
            subscriptionPlan: B,
            isPrepaidPaymentSource: j,
            subscriptionTrial: eu,
            isCustomGift: K,
        }),
        ed = null;
    if (
        !j &&
        (h.IJ.has(ei.type) || ei.type === h.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ei &&
        null != ei.renewalInvoicePreview
    ) {
        let e = (0, A.Gj)(ei.invoicePreview, ei.renewalInvoicePreview, eu);
        ed = (0, r.jsx)(c._, { ...e });
    }
    let e_ = (0, A.BZ)(ei, B, { isPrepaidPaymentSource: j, giftRecipient: P, isPremiumGroupPurchase: en }),
        ef = W
            ? (0, r.jsx)(E.XH, {
                  selectedPlanId: n,
                  priceOptions: y,
                  planOptions: Y,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: k,
                  discountInvoiceItems: H,
              })
            : void 0,
        eh = W ? void 0 : (0, r.jsx)(u.f7, { ...e_ }),
        ep = (0, r.jsx)(E.PI, {
            setHasAcceptedTerms: R,
            isTrial: b,
            isDiscount: O,
            plan: B,
            isGift: x,
            priceOptions: y,
            renewalInvoicePreview: F,
            isEmbeddedIAP: $,
            paymentSourceType: Q,
            inReverseTrial: z,
        }),
        em = (0, o.kw)({ subscriptionInvoiceRecord: ei.invoicePreview });
    return (0, r.jsx)(l.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeContent: el,
        planSelectContent: ef,
        purchaseItemContent: eh,
        subscriptionDetailsContent: ed,
        paymentSelectContent: er,
        invoiceSummaryContent: ec,
        legalContent: ep,
        invoiceTotalDueValue: em,
        invoiceTotalDueLabel: I.intl.string(T.default.R0cZsM),
    });
};
