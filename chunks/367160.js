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
            handlePaymentSourceAdd: S,
            isTrial: y,
            planGroup: v,
            setHasAcceptedTerms: C,
            isDiscount: N,
        } = e,
        b = (0, _.L)(e),
        { isEligibleForTrial: R } = (0, p.P5)(),
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
            shouldAllowPlanSelect: j,
            isCustomGift: H,
            isEmbeddedIAP: Y,
            inReverseTrial: W,
            hidePersonalInformation: K,
            hasEntitlements: z,
            paymentSourceId: $,
            paymentSourceType: q,
            eligiblePaymentGateways: X,
            activeSubscription: Z,
            fractionalPremiumInfo: Q,
            isPremiumGroupPurchase: J,
        } = b,
        ee = (0, r.jsx)(s.A, {
            shouldUseUnifiedCheckoutUI: !0,
            paymentSources: Object.values(I),
            selectedPaymentSourceId: $,
            newPaymentMethodOptionLabel: z && !y ? E.intl.string(E.t.IGU7El) : null,
            onChange: T,
            onPaymentSourceAdd: S,
            hidePersonalInformation: K,
            isTrial: y,
            paymentGatewayRestrictions: X,
        }),
        et = (0, f.yf)({
            error: O,
            isGift: D,
            oneTimePurchaseNitroGiftInvoicePreview: w,
            trialInvoicePreview: M,
            proratedInvoicePreview: P,
            renewalInvoicePreview: k,
            planSwitchLoading: U,
        }),
        en = (0, c.V)(t),
        er = (0, d.O8)(),
        ei = (0, h.pt)({
            fractionalPremiumInfo: Q,
            selectedPlanId: n,
            planGroup: v,
            premiumSubscription: Z,
            isGift: D,
        }),
        ea = i.useMemo(
            () =>
                ei
                    ? (0, r.jsx)(m.l$, {
                          fractionalPremiumInfo: Q,
                          isEligibleForTrial: R,
                          trialPeriodCopy: er,
                          subscriptionPeriodEnd: x,
                      })
                    : J
                      ? (0, r.jsx)(a.wx6, { type: "info", children: (0, h.Nn)() })
                      : null,
            [ei, Q, R, er, x, J],
        );
    if (null == et || et.type === f.N$.LOADING) return (0, r.jsx)(o.Ed, {});
    let es = null != en ? en.subscription_trial : void 0,
        eo = (0, r.jsx)(m.Z$, {
            invoiceSummaryTypeWithPreview: et,
            subscriptionPlan: G,
            isPrepaidPaymentSource: F,
            subscriptionTrial: es,
            isCustomGift: H,
        }),
        el = null;
    if (
        !F &&
        (et.type === f.N$.PREMIUM_DEFAULT || et.type === f.N$.PREMIUM_WITH_TRIAL) &&
        null != et.renewalInvoicePreview
    ) {
        let e = (0, g.Gj)(et.invoicePreview, et.renewalInvoicePreview, es);
        el = (0, r.jsx)(u._, { ...e });
    }
    let eu = (0, g.BZ)(et, G, { isPrepaidPaymentSource: F, giftRecipient: L, isPremiumGroupPurchase: J }),
        ec = j
            ? (0, r.jsx)(m.XH, {
                  selectedPlanId: n,
                  priceOptions: A,
                  planOptions: B,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: x,
                  discountInvoiceItems: V,
              })
            : void 0,
        ed = j ? void 0 : (0, r.jsx)(l.f7, { ...eu }),
        e_ = (0, r.jsx)(m.PI, {
            setHasAcceptedTerms: C,
            isTrial: y,
            isDiscount: N,
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
        planSelectContent: ec,
        purchaseItemContent: ed,
        subscriptionDetailsContent: el,
        paymentSelectContent: ee,
        invoiceSummaryContent: eo,
        legalContent: e_,
    });
};
