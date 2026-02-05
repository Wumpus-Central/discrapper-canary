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
        } = e,
        C = (0, _.L)(e),
        { isEligibleForTrial: b } = (0, p.P5)(),
        {
            error: N,
            isGift: R,
            giftRecipient: O,
            oneTimePurchaseNitroGiftInvoicePreview: D,
            subscriptionPeriodEnd: L,
            trialInvoicePreview: w,
            proratedInvoicePreview: x,
            renewalInvoicePreview: P,
            planSwitchLoading: M,
            plan: k,
            isPrepaid: U,
            discountInvoiceItems: G,
            premiumPlanOptions: V,
            shouldAllowPlanSelect: F,
            isCustomGift: B,
            hidePersonalInformation: j,
            hasEntitlements: H,
            paymentSourceId: Y,
            eligiblePaymentGateways: W,
            activeSubscription: K,
            fractionalPremiumInfo: z,
            isPremiumGroupPurchase: $,
        } = C,
        q = (0, r.jsx)(s.A, {
            shouldUseUnifiedCheckoutUI: !0,
            paymentSources: Object.values(I),
            selectedPaymentSourceId: Y,
            newPaymentMethodOptionLabel: H && !S ? E.intl.string(E.t.IGU7El) : null,
            onChange: T,
            onPaymentSourceAdd: y,
            hidePersonalInformation: j,
            isTrial: S,
            paymentGatewayRestrictions: W,
        }),
        Z = (0, f.yf)({
            error: N,
            isGift: R,
            oneTimePurchaseNitroGiftInvoicePreview: D,
            trialInvoicePreview: w,
            proratedInvoicePreview: x,
            renewalInvoicePreview: P,
            planSwitchLoading: M,
        }),
        Q = (0, c.V)(t),
        X = (0, d.O8)(),
        J = (0, h.pt)({ fractionalPremiumInfo: z, selectedPlanId: n, planGroup: v, premiumSubscription: K, isGift: R }),
        ee = i.useMemo(
            () =>
                J
                    ? (0, r.jsx)(m.l$, {
                          fractionalPremiumInfo: z,
                          isEligibleForTrial: b,
                          trialPeriodCopy: X,
                          subscriptionPeriodEnd: L,
                      })
                    : $
                      ? (0, r.jsx)(a.wx6, { type: "info", children: (0, h.Nn)() })
                      : null,
            [J, z, b, X, L, $],
        );
    if (null == Z || Z.type === f.N$.LOADING) return (0, r.jsx)(o.Ed, {});
    let et = (0, r.jsx)(m.Z$, {
            invoiceSummaryTypeWithPreview: Z,
            subscriptionPlan: k,
            isPrepaidPaymentSource: U,
            premiumTrialOffer: Q,
            isCustomGift: B,
        }),
        en = null;
    if (
        !U &&
        (Z.type === f.N$.PREMIUM_DEFAULT || Z.type === f.N$.PREMIUM_WITH_TRIAL) &&
        null != Z.renewalInvoicePreview
    ) {
        let e = (0, g.Gj)(Z.invoicePreview, Z.renewalInvoicePreview, Q);
        en = (0, r.jsx)(u._, { ...e });
    }
    let er = (0, g.BZ)(Z, k, { isPrepaidPaymentSource: U, giftRecipient: O, isPremiumGroupPurchase: $ }),
        ei = F
            ? (0, r.jsx)(m.XH, {
                  selectedPlanId: n,
                  priceOptions: A,
                  planOptions: V,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: L,
                  discountInvoiceItems: G,
              })
            : void 0,
        ea = F ? void 0 : (0, r.jsx)(l.f7, { ...er });
    return (0, r.jsx)(o.rg, {
        upperInlineNoticeContent: ee,
        planSelectContent: ei,
        purchaseItemContent: ea,
        subscriptionDetailsContent: en,
        paymentSelectContent: q,
        invoiceSummaryContent: et,
    });
};
