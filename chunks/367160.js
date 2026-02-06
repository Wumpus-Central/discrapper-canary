"use strict";
n.d(t, { _: () => A });
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
    p = n(156312),
    h = n(222707),
    m = n(340034),
    g = n(888751),
    E = n(985018);
let A = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: A,
            paymentSources: I,
            onPaymentSourceChange: T,
            handlePaymentSourceAdd: y,
            isTrial: S,
            planGroup: v,
            setHasAcceptedTerms: C,
            isDiscount: b,
        } = e,
        N = (0, _.L)(e),
        { isEligibleForTrial: R } = (0, p.P5)(),
        {
            error: O,
            isGift: D,
            giftRecipient: L,
            oneTimePurchaseNitroGiftInvoicePreview: w,
            subscriptionPeriodEnd: x,
            trialInvoicePreview: P,
            proratedInvoicePreview: M,
            renewalInvoicePreview: k,
            planSwitchLoading: U,
            plan: G,
            isPrepaid: V,
            discountInvoiceItems: F,
            premiumPlanOptions: B,
            shouldAllowPlanSelect: j,
            isCustomGift: H,
            isEmbeddedIAP: Y,
            inReverseTrial: W,
            hidePersonalInformation: K,
            hasEntitlements: z,
            paymentSourceId: $,
            paymentSourceType: q,
            eligiblePaymentGateways: Z,
            activeSubscription: Q,
            fractionalPremiumInfo: X,
            isPremiumGroupPurchase: J,
        } = N,
        ee = (0, r.jsx)(s.A, {
            shouldUseUnifiedCheckoutUI: !0,
            paymentSources: Object.values(I),
            selectedPaymentSourceId: $,
            newPaymentMethodOptionLabel: z && !S ? E.intl.string(E.t.IGU7El) : null,
            onChange: T,
            onPaymentSourceAdd: y,
            hidePersonalInformation: K,
            isTrial: S,
            paymentGatewayRestrictions: Z,
        }),
        et = (0, f.yf)({
            error: O,
            isGift: D,
            oneTimePurchaseNitroGiftInvoicePreview: w,
            trialInvoicePreview: P,
            proratedInvoicePreview: M,
            renewalInvoicePreview: k,
            planSwitchLoading: U,
        }),
        en = (0, c.V)(t),
        er = (0, d.O8)(),
        ei = (0, h.pt)({
            fractionalPremiumInfo: X,
            selectedPlanId: n,
            planGroup: v,
            premiumSubscription: Q,
            isGift: D,
        }),
        ea = i.useMemo(
            () =>
                ei
                    ? (0, r.jsx)(m.l$, {
                          fractionalPremiumInfo: X,
                          isEligibleForTrial: R,
                          trialPeriodCopy: er,
                          subscriptionPeriodEnd: x,
                      })
                    : J
                      ? (0, r.jsx)(a.wx6, { type: "info", children: (0, h.Nn)() })
                      : null,
            [ei, X, R, er, x, J],
        );
    if (null == et || et.type === f.N$.LOADING) return (0, r.jsx)(o.Ed, {});
    let es = (0, r.jsx)(m.Z$, {
            invoiceSummaryTypeWithPreview: et,
            subscriptionPlan: G,
            isPrepaidPaymentSource: V,
            premiumTrialOffer: en,
            isCustomGift: H,
        }),
        eo = null;
    if (
        !V &&
        (et.type === f.N$.PREMIUM_DEFAULT || et.type === f.N$.PREMIUM_WITH_TRIAL) &&
        null != et.renewalInvoicePreview
    ) {
        let e = (0, g.Gj)(et.invoicePreview, et.renewalInvoicePreview, en);
        eo = (0, r.jsx)(u._, { ...e });
    }
    let el = (0, g.BZ)(et, G, { isPrepaidPaymentSource: V, giftRecipient: L, isPremiumGroupPurchase: J }),
        eu = j
            ? (0, r.jsx)(m.XH, {
                  selectedPlanId: n,
                  priceOptions: A,
                  planOptions: B,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: x,
                  discountInvoiceItems: F,
              })
            : void 0,
        ec = j ? void 0 : (0, r.jsx)(l.f7, { ...el }),
        ed = (0, r.jsx)(m.PI, {
            setHasAcceptedTerms: C,
            isTrial: S,
            isDiscount: b,
            plan: G,
            isGift: D,
            priceOptions: A,
            renewalInvoicePreview: k,
            isEmbeddedIAP: Y,
            paymentSourceType: q,
            inReverseTrial: W,
        });
    return (0, r.jsx)(o.rg, {
        upperInlineNoticeContent: ea,
        planSelectContent: eu,
        purchaseItemContent: ec,
        subscriptionDetailsContent: eo,
        paymentSelectContent: ee,
        invoiceSummaryContent: es,
        legalContent: ed,
    });
};
