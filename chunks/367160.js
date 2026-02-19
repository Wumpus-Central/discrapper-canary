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
        } = R,
        J = (0, r.jsx)(a.A, {
            shouldUseUnifiedCheckoutUI: !0,
            paymentSources: Object.values(S),
            selectedPaymentSourceId: z,
            newPaymentMethodOptionLabel: K && !N ? A.intl.string(A.t.IGU7El) : null,
            onChange: y,
            onPaymentSourceAdd: v,
            hidePersonalInformation: W,
            isTrial: N,
            paymentGatewayRestrictions: q,
        }),
        ee = (0, p.yf)({
            error: D,
            isGift: L,
            oneTimePurchaseNitroGiftInvoicePreview: x,
            trialInvoicePreview: P,
            proratedInvoicePreview: k,
            renewalInvoicePreview: U,
            planSwitchLoading: G,
        }),
        et = (0, d.V)(t),
        en = (0, _.O8)(),
        er = (0, m.pt)({
            fractionalPremiumInfo: X,
            selectedPlanId: n,
            planGroup: C,
            premiumSubscription: Z,
            isGift: L,
        }),
        ei = i.useMemo(
            () =>
                er
                    ? (0, r.jsx)(E.l$, {
                          fractionalPremiumInfo: X,
                          isEligibleForTrial: O,
                          trialPeriodCopy: en,
                          subscriptionPeriodEnd: M,
                      })
                    : Q
                      ? (0, r.jsx)(s.wx6, { type: "info", children: (0, m.Nn)() })
                      : null,
            [er, X, O, en, M, Q],
        );
    if (null == ee || ee.type === p.N$.LOADING) return (0, r.jsx)(l.Ed, {});
    let es = null != et ? et.subscription_trial : void 0,
        ea = (0, r.jsx)(E.Z$, {
            invoiceSummaryTypeWithPreview: ee,
            subscriptionPlan: F,
            isPrepaidPaymentSource: V,
            subscriptionTrial: es,
            isCustomGift: Y,
        }),
        eo = null;
    if (
        !V &&
        (p.IJ.has(ee.type) || ee.type === p.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ee &&
        null != ee.renewalInvoicePreview
    ) {
        let e = (0, g.Gj)(ee.invoicePreview, ee.renewalInvoicePreview, es);
        eo = (0, r.jsx)(c._, { ...e });
    }
    let el = (0, g.BZ)(ee, F, { isPrepaidPaymentSource: V, giftRecipient: w, isPremiumGroupPurchase: Q }),
        eu = j
            ? (0, r.jsx)(E.XH, {
                  selectedPlanId: n,
                  priceOptions: T,
                  planOptions: H,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: M,
                  discountInvoiceItems: B,
              })
            : void 0,
        ec = j ? void 0 : (0, r.jsx)(u.f7, { ...el }),
        ed = (0, r.jsx)(E.PI, {
            planGroup: C,
            activeSubscription: Z,
            setHasAcceptedTerms: b,
            isTrial: N,
            plan: F,
            isGift: L,
            priceOptions: T,
            renewalInvoicePreview: U,
            paymentSourceType: $,
        }),
        e_ = (0, o.kw)({ subscriptionInvoiceRecord: ee.invoicePreview });
    return (0, r.jsx)(l.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeContent: ei,
        planSelectContent: eu,
        purchaseItemContent: ec,
        subscriptionDetailsContent: eo,
        paymentSelectContent: J,
        invoiceSummaryContent: ea,
        legalContent: ed,
        invoiceTotalDueValue: e_,
        invoiceTotalDueLabel: A.intl.string(I.default.R0cZsM),
    });
};
