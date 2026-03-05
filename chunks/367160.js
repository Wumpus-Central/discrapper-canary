"use strict";
n.d(t, { _: () => I }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(637141),
    a = n(854354),
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
    E = n(888751),
    g = n(985018),
    A = n(756366);
let I = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: I,
            onPaymentSourceChange: T,
            handlePaymentSourceAdd: S,
            isTrial: y,
            planGroup: v,
            isDiscount: N,
        } = e,
        C = (0, _.L)(e),
        { isEligibleForTrial: R } = (0, p.P5)(),
        {
            error: O,
            isGift: b,
            giftRecipient: D,
            oneTimePurchaseNitroGiftInvoicePreview: L,
            subscriptionPeriodEnd: w,
            trialInvoicePreview: M,
            proratedInvoicePreview: x,
            renewalInvoicePreview: P,
            planSwitchLoading: k,
            plan: U,
            isPrepaid: G,
            discountInvoiceItems: F,
            premiumPlanOptions: V,
            shouldAllowPlanSelect: B,
            isCustomGift: H,
            hidePersonalInformation: j,
            hasEntitlements: Y,
            paymentSourceId: W,
            paymentSourceType: K,
            eligiblePaymentGateways: $,
            activeSubscription: z,
            fractionalPremiumInfo: q,
            isPremiumGroupPurchase: Z,
            currencyDropdownProps: X,
            paymentSourcesForDropdown: Q,
            defaultPaymentSourceId: J,
            paymentSourceOptionalWarningCopy: ee,
        } = C,
        et = i.useMemo(() => (N ? null : (0, r.jsx)(m.rk, { ...X })), [N, X]),
        en = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.A, {
                    shouldUseUnifiedCheckoutUI: !0,
                    paymentSources: Q,
                    selectedPaymentSourceId: W,
                    defaultPaymentSourceId: J,
                    newPaymentMethodOptionLabel: Y && !y ? g.intl.string(g.t.IGU7El) : null,
                    onChange: T,
                    onPaymentSourceAdd: S,
                    hidePersonalInformation: j,
                    isTrial: y,
                    paymentGatewayRestrictions: $,
                }),
                et,
            ],
        }),
        er = (0, f.yf)({
            error: O,
            isGift: b,
            oneTimePurchaseNitroGiftInvoicePreview: L,
            trialInvoicePreview: M,
            proratedInvoicePreview: x,
            renewalInvoicePreview: P,
            planSwitchLoading: k,
        }),
        ei = (0, c.V)(t),
        es = (0, d.O8)(),
        ea = (0, h.pt)({
            fractionalPremiumInfo: q,
            selectedPlanId: n,
            planGroup: v,
            premiumSubscription: z,
            isGift: b,
        }),
        eo = i.useMemo(() => {
            let e = [];
            return (
                null != ee && e.push({ type: "info", message: ee, key: "payment-source-optional-warning" }),
                ea
                    ? e.push({
                          directContent: (0, r.jsx)(m.l$, {
                              fractionalPremiumInfo: q,
                              isEligibleForTrial: R,
                              trialPeriodCopy: es,
                              subscriptionPeriodEnd: w,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : Z && e.push({ type: "info", message: (0, h.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [ee, ea, q, R, es, w, Z]);
    if (null == er || er.type === f.N$.LOADING) return (0, r.jsx)(o.Ed, {});
    let el = null != ei ? ei.subscription_trial : void 0,
        eu =
            er.type === f.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, r.jsx)(m.W9, {
                      invoiceSummaryTypeWithPreview: er,
                      subscriptionPlan: U,
                      isPrepaidPaymentSource: G,
                      subscriptionTrial: el,
                      isCustomGift: H,
                  }),
        ec = null;
    if (
        !G &&
        (f.IJ.has(er.type) || er.type === f.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in er &&
        null != er.renewalInvoicePreview
    ) {
        let e = (0, E.Gj)(er.invoicePreview, er.renewalInvoicePreview, el);
        ec = (0, r.jsx)(u._, { ...e });
    }
    let ed = (0, E.BZ)(er, U, { isPrepaidPaymentSource: G, giftRecipient: D, isPremiumGroupPurchase: Z }),
        e_ = B
            ? (0, r.jsx)(m.XH, {
                  selectedPlanId: n,
                  priceOptions: I,
                  planOptions: V,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: w,
                  discountInvoiceItems: F,
              })
            : void 0,
        ef = B ? void 0 : (0, r.jsx)(l.f7, { ...ed }),
        ep = (0, r.jsx)(m.PI, {
            planGroup: v,
            activeSubscription: z,
            isTrial: y,
            plan: U,
            isGift: b,
            priceOptions: I,
            renewalInvoicePreview: P,
            paymentSourceType: K,
        }),
        eh =
            er.type === f.N$.PREMIUM_WITH_TRIAL
                ? (0, E.MT)(er.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: er.invoicePreview });
    return (0, r.jsx)(o.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: eo,
        planSelectContent: e_,
        purchaseItemContent: ef,
        subscriptionDetailsContent: ec,
        paymentSelectContent: en,
        invoiceSummaryContent: eu,
        legalContent: ep,
        invoiceTotalDueValue: eh,
        invoiceTotalDueLabel: g.intl.string(A.default.R0cZsM),
    });
};
