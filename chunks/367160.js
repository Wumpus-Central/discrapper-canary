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
            paymentSources: S,
            onPaymentSourceChange: y,
            handlePaymentSourceAdd: v,
            isTrial: N,
            planGroup: C,
            setHasAcceptedTerms: b,
            isDiscount: R,
        } = e,
        O = (0, f.L)(e),
        { isEligibleForTrial: D } = (0, h.P5)(),
        {
            error: L,
            isGift: w,
            giftRecipient: x,
            oneTimePurchaseNitroGiftInvoicePreview: M,
            subscriptionPeriodEnd: P,
            trialInvoicePreview: k,
            proratedInvoicePreview: U,
            renewalInvoicePreview: G,
            planSwitchLoading: F,
            plan: V,
            isPrepaid: B,
            discountInvoiceItems: H,
            premiumPlanOptions: j,
            shouldAllowPlanSelect: Y,
            isCustomGift: W,
            isEmbeddedIAP: K,
            inReverseTrial: z,
            hidePersonalInformation: $,
            hasEntitlements: q,
            paymentSourceId: Z,
            paymentSourceType: X,
            eligiblePaymentGateways: Q,
            activeSubscription: J,
            fractionalPremiumInfo: ee,
            isPremiumGroupPurchase: et,
        } = O,
        en = (0, r.jsx)(a.A, {
            shouldUseUnifiedCheckoutUI: !0,
            paymentSources: Object.values(S),
            selectedPaymentSourceId: Z,
            newPaymentMethodOptionLabel: q && !N ? A.intl.string(A.t.IGU7El) : null,
            onChange: y,
            onPaymentSourceAdd: v,
            hidePersonalInformation: $,
            isTrial: N,
            paymentGatewayRestrictions: Q,
        }),
        er = (0, p.yf)({
            error: L,
            isGift: w,
            oneTimePurchaseNitroGiftInvoicePreview: M,
            trialInvoicePreview: k,
            proratedInvoicePreview: U,
            renewalInvoicePreview: G,
            planSwitchLoading: F,
        }),
        ei = (0, d.V)(t),
        es = (0, _.O8)(),
        ea = (0, m.pt)({
            fractionalPremiumInfo: ee,
            selectedPlanId: n,
            planGroup: C,
            premiumSubscription: J,
            isGift: w,
        }),
        eo = i.useMemo(
            () =>
                ea
                    ? (0, r.jsx)(E.l$, {
                          fractionalPremiumInfo: ee,
                          isEligibleForTrial: D,
                          trialPeriodCopy: es,
                          subscriptionPeriodEnd: P,
                      })
                    : et
                      ? (0, r.jsx)(s.wx6, { type: "info", children: (0, m.Nn)() })
                      : null,
            [ea, ee, D, es, P, et],
        );
    if (null == er || er.type === p.N$.LOADING) return (0, r.jsx)(l.Ed, {});
    let el = null != ei ? ei.subscription_trial : void 0,
        eu = (0, r.jsx)(E.Z$, {
            invoiceSummaryTypeWithPreview: er,
            subscriptionPlan: V,
            isPrepaidPaymentSource: B,
            subscriptionTrial: el,
            isCustomGift: W,
        }),
        ec = null;
    if (
        !B &&
        (p.IJ.has(er.type) || er.type === p.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in er &&
        null != er.renewalInvoicePreview
    ) {
        let e = (0, g.Gj)(er.invoicePreview, er.renewalInvoicePreview, el);
        ec = (0, r.jsx)(c._, { ...e });
    }
    let ed = (0, g.BZ)(er, V, { isPrepaidPaymentSource: B, giftRecipient: x, isPremiumGroupPurchase: et }),
        e_ = Y
            ? (0, r.jsx)(E.XH, {
                  selectedPlanId: n,
                  priceOptions: T,
                  planOptions: j,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: P,
                  discountInvoiceItems: H,
              })
            : void 0,
        ef = Y ? void 0 : (0, r.jsx)(u.f7, { ...ed }),
        ep = (0, r.jsx)(E.PI, {
            setHasAcceptedTerms: b,
            isTrial: N,
            isDiscount: R,
            plan: V,
            isGift: w,
            priceOptions: T,
            renewalInvoicePreview: G,
            isEmbeddedIAP: K,
            paymentSourceType: X,
            inReverseTrial: z,
        }),
        eh = (0, o.kw)({ subscriptionInvoiceRecord: er.invoicePreview });
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
