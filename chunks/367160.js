"use strict";
n.d(t, { _: () => I });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(637141),
    o = n(69882),
    l = n(241989),
    u = n(669510),
    c = n(234419),
    d = n(446929),
    _ = n(494230),
    f = n(299301),
    h = n(156312),
    p = n(222707),
    g = n(340034),
    E = n(888751),
    A = n(985018);
let I = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: I,
            paymentSources: T,
            onPaymentSourceChange: y,
            handlePaymentSourceAdd: S,
            isTrial: v,
            planGroup: C,
            setHasAcceptedTerms: b,
            isDiscount: N,
        } = e,
        R = (0, _.L)(e),
        { isEligibleForTrial: O } = (0, h.P5)(),
        {
            error: D,
            isGift: L,
            giftRecipient: w,
            oneTimePurchaseNitroGiftInvoicePreview: x,
            subscriptionPeriodEnd: P,
            trialInvoicePreview: M,
            proratedInvoicePreview: k,
            renewalInvoicePreview: U,
            planSwitchLoading: G,
            plan: F,
            isPrepaid: V,
            discountInvoiceItems: B,
            premiumPlanOptions: j,
            shouldAllowPlanSelect: H,
            isCustomGift: Y,
            isEmbeddedIAP: W,
            inReverseTrial: K,
            hidePersonalInformation: $,
            hasEntitlements: z,
            paymentSourceId: q,
            paymentSourceType: X,
            eligiblePaymentGateways: Z,
            activeSubscription: Q,
            fractionalPremiumInfo: J,
            isPremiumGroupPurchase: ee,
        } = R,
        et = (0, r.jsx)(s.A, {
            shouldUseUnifiedCheckoutUI: !0,
            paymentSources: Object.values(T),
            selectedPaymentSourceId: q,
            newPaymentMethodOptionLabel: z && !v ? A.intl.string(A.t.IGU7El) : null,
            onChange: y,
            onPaymentSourceAdd: S,
            hidePersonalInformation: $,
            isTrial: v,
            paymentGatewayRestrictions: Z,
        }),
        en = (0, f.yf)({
            error: D,
            isGift: L,
            oneTimePurchaseNitroGiftInvoicePreview: x,
            trialInvoicePreview: M,
            proratedInvoicePreview: k,
            renewalInvoicePreview: U,
            planSwitchLoading: G,
        }),
        er = (0, c.V)(t),
        ei = (0, d.O8)(),
        ea = (0, p.pt)({
            fractionalPremiumInfo: J,
            selectedPlanId: n,
            planGroup: C,
            premiumSubscription: Q,
            isGift: L,
        }),
        es = i.useMemo(
            () =>
                ea
                    ? (0, r.jsx)(g.l$, {
                          fractionalPremiumInfo: J,
                          isEligibleForTrial: O,
                          trialPeriodCopy: ei,
                          subscriptionPeriodEnd: P,
                      })
                    : ee
                      ? (0, r.jsx)(a.wx6, { type: "info", children: (0, p.Nn)() })
                      : null,
            [ea, J, O, ei, P, ee],
        );
    if (null == en || en.type === f.N$.LOADING) return (0, r.jsx)(o.Ed, {});
    let eo = null != er ? er.subscription_trial : void 0,
        el = (0, r.jsx)(g.Z$, {
            invoiceSummaryTypeWithPreview: en,
            subscriptionPlan: F,
            isPrepaidPaymentSource: V,
            subscriptionTrial: eo,
            isCustomGift: Y,
        }),
        eu = null;
    if (
        !V &&
        (en.type === f.N$.PREMIUM_DEFAULT || en.type === f.N$.PREMIUM_WITH_TRIAL) &&
        null != en.renewalInvoicePreview
    ) {
        let e = (0, E.Gj)(en.invoicePreview, en.renewalInvoicePreview, eo);
        eu = (0, r.jsx)(u._, { ...e });
    }
    let ec = (0, E.BZ)(en, F, { isPrepaidPaymentSource: V, giftRecipient: w, isPremiumGroupPurchase: ee }),
        ed = H
            ? (0, r.jsx)(g.XH, {
                  selectedPlanId: n,
                  priceOptions: I,
                  planOptions: j,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: P,
                  discountInvoiceItems: B,
              })
            : void 0,
        e_ = H ? void 0 : (0, r.jsx)(l.f7, { ...ec }),
        ef = (0, r.jsx)(g.PI, {
            setHasAcceptedTerms: b,
            isTrial: v,
            isDiscount: N,
            plan: F,
            isGift: L,
            priceOptions: I,
            renewalInvoicePreview: U,
            isEmbeddedIAP: W,
            paymentSourceType: X,
            inReverseTrial: K,
        });
    return (0, r.jsx)(o.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeContent: es,
        planSelectContent: ed,
        purchaseItemContent: e_,
        subscriptionDetailsContent: eu,
        paymentSelectContent: et,
        invoiceSummaryContent: el,
        legalContent: ef,
    });
};
