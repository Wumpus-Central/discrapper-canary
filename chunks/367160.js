"use strict";
n.d(t, { _: () => S }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(637141),
    o = n(262427),
    l = n(854354),
    u = n(69882),
    c = n(669510),
    d = n(234419),
    _ = n(446929),
    f = n(494230),
    p = n(299301),
    h = n(156312),
    m = n(222707),
    E = n(340034),
    g = n(134638),
    A = n(888751),
    I = n(985018),
    T = n(523376);
let S = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: S,
            onPaymentSourceChange: y,
            handlePaymentSourceAdd: v,
            isTrial: N,
            planGroup: C,
            isDiscount: R,
            metadata: O,
        } = e,
        b = (0, f.L)(e),
        { isEligibleForTrial: D, selectedStoreListing: L } = (0, h.P5)(),
        w = O?.guild_id ?? void 0,
        {
            error: M,
            isGift: x,
            giftRecipient: P,
            oneTimePurchaseNitroGiftInvoicePreview: k,
            subscriptionPeriodEnd: U,
            trialInvoicePreview: G,
            proratedInvoicePreview: F,
            renewalInvoicePreview: V,
            planSwitchLoading: B,
            plan: H,
            isPrepaid: j,
            discountInvoiceItems: Y,
            premiumPlanOptions: W,
            shouldAllowPlanSelect: K,
            isCustomGift: $,
            hidePersonalInformation: z,
            hasEntitlements: q,
            paymentSourceId: Z,
            paymentSourceType: X,
            eligiblePaymentGateways: Q,
            activeSubscription: J,
            fractionalPremiumInfo: ee,
            isPremiumGroupPurchase: et,
            currencyDropdownProps: en,
            paymentSourcesForDropdown: er,
            defaultPaymentSourceId: ei,
            paymentSourceOptionalWarningCopy: es,
        } = b,
        ea = i.useMemo(() => (R ? null : (0, r.jsx)(E.rk, { ...en })), [R, en]),
        eo = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.A, {
                    shouldUseUnifiedCheckoutUI: !0,
                    paymentSources: er,
                    selectedPaymentSourceId: Z,
                    defaultPaymentSourceId: ei,
                    newPaymentMethodOptionLabel: q && !N ? I.intl.string(I.t.IGU7El) : null,
                    onChange: y,
                    onPaymentSourceAdd: v,
                    hidePersonalInformation: z,
                    isTrial: N,
                    paymentGatewayRestrictions: Q,
                }),
                ea,
            ],
        }),
        el = (0, p.yf)({
            error: M,
            isGift: x,
            oneTimePurchaseNitroGiftInvoicePreview: k,
            trialInvoicePreview: G,
            proratedInvoicePreview: F,
            renewalInvoicePreview: V,
            planSwitchLoading: B,
        }),
        eu = (0, d.V)(t),
        { copy: ec, daysCount: ed, userTrialOffer: e_ } = (0, _.O8)(),
        ef = (0, m.pt)({
            fractionalPremiumInfo: ee,
            selectedPlanId: n,
            planGroup: C,
            premiumSubscription: J,
            isGift: x,
        }),
        ep = i.useMemo(
            () =>
                null == el || el.type !== p.N$.PREMIUM_WITH_TRIAL || null == e_
                    ? null
                    : (0, r.jsx)(o.J, {
                          gradientColor: "nitro-pink",
                          Icon: s.tvc,
                          text: I.intl.format(T.default.OFkKkc, { daysCount: ed }),
                      }),
            [e_, ed, el],
        ),
        eh = i.useMemo(() => {
            let e = [];
            return (
                null != es && e.push({ type: "info", message: es, key: "payment-source-optional-warning" }),
                ef
                    ? e.push({
                          directContent: (0, r.jsx)(E.l$, {
                              fractionalPremiumInfo: ee,
                              isEligibleForTrial: D,
                              trialPeriodCopy: ec,
                              subscriptionPeriodEnd: U,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : et && e.push({ type: "info", message: (0, m.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [es, ef, ee, D, ec, U, et]);
    if (null == el || el.type === p.N$.LOADING) return (0, r.jsx)(u.Ed, {});
    let em = null != eu ? eu.subscription_trial : void 0,
        eE =
            el.type === p.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, r.jsx)(E.W9, {
                      invoiceSummaryTypeWithPreview: el,
                      subscriptionPlan: H,
                      isPrepaidPaymentSource: j,
                      subscriptionTrial: em,
                      isCustomGift: $,
                  }),
        eg = null;
    if (
        !j &&
        (p.IJ.has(el.type) || el.type === p.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in el &&
        null != el.renewalInvoicePreview
    ) {
        let e = (0, A.Gj)(el.invoicePreview, el.renewalInvoicePreview, em);
        eg = (0, r.jsx)(c._, { ...e });
    }
    let eA = K
            ? (0, r.jsx)(E.XH, {
                  disabled: b.disabled,
                  selectedPlanId: n,
                  priceOptions: S,
                  planOptions: W,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: U,
                  discountInvoiceItems: Y,
              })
            : void 0,
        eI = K
            ? void 0
            : (0, r.jsx)(g._, {
                  type: el.type,
                  invoicePreview: el.invoicePreview,
                  subscriptionPlan: H,
                  storeListing: L,
                  isPrepaidPaymentSource: j,
                  giftRecipient: P,
                  isPremiumGroupPurchase: et,
                  guildId: w,
              }),
        eT = (0, r.jsx)(E.PI, {
            planGroup: C,
            activeSubscription: J,
            isTrial: N,
            plan: H,
            isGift: x,
            priceOptions: S,
            renewalInvoicePreview: V,
            paymentSourceType: X,
        }),
        eS =
            el.type === p.N$.PREMIUM_WITH_TRIAL
                ? (0, A.ib)(el.invoicePreview.currency)
                : (0, l.kw)({ subscriptionInvoiceRecord: el.invoicePreview });
    return (0, r.jsx)(u.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: eh,
        planSelectContent: eA,
        purchaseItemContent: eI,
        subscriptionDetailsContent: eg,
        paymentSelectContent: eo,
        invoiceSummaryContent: eE,
        legalContent: eT,
        invoiceTotalDueValue: eS,
        invoiceTotalDueLabel: I.intl.string(T.default.R0cZsM),
        promotionalNoticeContent: ep,
    });
};
