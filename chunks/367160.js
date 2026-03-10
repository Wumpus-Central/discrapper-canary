"use strict";
n.d(t, { _: () => I }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(637141),
    a = n(854354),
    o = n(69882),
    l = n(669510),
    u = n(234419),
    c = n(446929),
    d = n(494230),
    _ = n(299301),
    f = n(156312),
    p = n(222707),
    h = n(340034),
    m = n(134638),
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
            metadata: C,
        } = e,
        R = (0, d.L)(e),
        { isEligibleForTrial: O, selectedStoreListing: b } = (0, f.P5)(),
        D = C?.guild_id ?? void 0,
        {
            error: L,
            isGift: w,
            giftRecipient: M,
            oneTimePurchaseNitroGiftInvoicePreview: x,
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
            hidePersonalInformation: K,
            hasEntitlements: $,
            paymentSourceId: z,
            paymentSourceType: q,
            eligiblePaymentGateways: Z,
            activeSubscription: X,
            fractionalPremiumInfo: Q,
            isPremiumGroupPurchase: J,
            currencyDropdownProps: ee,
            paymentSourcesForDropdown: et,
            defaultPaymentSourceId: en,
            paymentSourceOptionalWarningCopy: er,
        } = R,
        ei = i.useMemo(() => (N ? null : (0, r.jsx)(h.rk, { ...ee })), [N, ee]),
        es = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.A, {
                    shouldUseUnifiedCheckoutUI: !0,
                    paymentSources: et,
                    selectedPaymentSourceId: z,
                    defaultPaymentSourceId: en,
                    newPaymentMethodOptionLabel: $ && !y ? g.intl.string(g.t.IGU7El) : null,
                    onChange: T,
                    onPaymentSourceAdd: S,
                    hidePersonalInformation: K,
                    isTrial: y,
                    paymentGatewayRestrictions: Z,
                }),
                ei,
            ],
        }),
        ea = (0, _.yf)({
            error: L,
            isGift: w,
            oneTimePurchaseNitroGiftInvoicePreview: x,
            trialInvoicePreview: k,
            proratedInvoicePreview: U,
            renewalInvoicePreview: G,
            planSwitchLoading: F,
        }),
        eo = (0, u.V)(t),
        el = (0, c.O8)(),
        eu = (0, p.pt)({
            fractionalPremiumInfo: Q,
            selectedPlanId: n,
            planGroup: v,
            premiumSubscription: X,
            isGift: w,
        }),
        ec = i.useMemo(() => {
            let e = [];
            return (
                null != er && e.push({ type: "info", message: er, key: "payment-source-optional-warning" }),
                eu
                    ? e.push({
                          directContent: (0, r.jsx)(h.l$, {
                              fractionalPremiumInfo: Q,
                              isEligibleForTrial: O,
                              trialPeriodCopy: el,
                              subscriptionPeriodEnd: P,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : J && e.push({ type: "info", message: (0, p.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [er, eu, Q, O, el, P, J]);
    if (null == ea || ea.type === _.N$.LOADING) return (0, r.jsx)(o.Ed, {});
    let ed = null != eo ? eo.subscription_trial : void 0,
        e_ =
            ea.type === _.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, r.jsx)(h.W9, {
                      invoiceSummaryTypeWithPreview: ea,
                      subscriptionPlan: V,
                      isPrepaidPaymentSource: B,
                      subscriptionTrial: ed,
                      isCustomGift: W,
                  }),
        ef = null;
    if (
        !B &&
        (_.IJ.has(ea.type) || ea.type === _.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ea &&
        null != ea.renewalInvoicePreview
    ) {
        let e = (0, E.Gj)(ea.invoicePreview, ea.renewalInvoicePreview, ed);
        ef = (0, r.jsx)(l._, { ...e });
    }
    let ep = Y
            ? (0, r.jsx)(h.XH, {
                  disabled: R.disabled,
                  selectedPlanId: n,
                  priceOptions: I,
                  planOptions: j,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: P,
                  discountInvoiceItems: H,
              })
            : void 0,
        eh = Y
            ? void 0
            : (0, r.jsx)(m._, {
                  type: ea.type,
                  invoicePreview: ea.invoicePreview,
                  subscriptionPlan: V,
                  storeListing: b,
                  isPrepaidPaymentSource: B,
                  giftRecipient: M,
                  isPremiumGroupPurchase: J,
                  guildId: D,
              }),
        em = (0, r.jsx)(h.PI, {
            planGroup: v,
            activeSubscription: X,
            isTrial: y,
            plan: V,
            isGift: w,
            priceOptions: I,
            renewalInvoicePreview: G,
            paymentSourceType: q,
        }),
        eE =
            ea.type === _.N$.PREMIUM_WITH_TRIAL
                ? (0, E.MT)(ea.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: ea.invoicePreview });
    return (0, r.jsx)(o.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: ec,
        planSelectContent: ep,
        purchaseItemContent: eh,
        subscriptionDetailsContent: ef,
        paymentSelectContent: es,
        invoiceSummaryContent: e_,
        legalContent: em,
        invoiceTotalDueValue: eE,
        invoiceTotalDueLabel: g.intl.string(A.default.R0cZsM),
    });
};
