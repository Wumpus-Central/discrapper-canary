"use strict";
n.d(t, { _: () => N }), n(321073);
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
    f = n(815545),
    p = n(271849),
    h = n(299301),
    m = n(927578),
    E = n(156312),
    g = n(222707),
    A = n(340034),
    I = n(134638),
    T = n(888751),
    S = n(788868),
    y = n(985018),
    v = n(756366);
let N = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: N,
            onPaymentSourceChange: C,
            handlePaymentSourceAdd: R,
            isTrial: O,
            planGroup: b,
            isDiscount: D,
            metadata: L,
        } = e,
        w = (0, p.L)(e),
        { isEligibleForTrial: M, discountOffer: x, selectedStoreListing: P } = (0, E.P5)(),
        k = L?.guild_id ?? void 0,
        {
            error: U,
            isGift: G,
            giftRecipient: F,
            oneTimePurchaseNitroGiftInvoicePreview: V,
            subscriptionPeriodEnd: B,
            trialInvoicePreview: H,
            proratedInvoicePreview: j,
            renewalInvoicePreview: Y,
            planSwitchLoading: W,
            plan: K,
            isPrepaid: $,
            discountInvoiceItems: z,
            premiumPlanOptions: q,
            shouldAllowPlanSelect: Z,
            isCustomGift: X,
            hidePersonalInformation: Q,
            hasEntitlements: J,
            paymentSourceId: ee,
            paymentSourceType: et,
            eligiblePaymentGateways: en,
            activeSubscription: er,
            fractionalPremiumInfo: ei,
            isPremiumGroupPurchase: es,
            currencyDropdownProps: ea,
            paymentSourcesForDropdown: eo,
            defaultPaymentSourceId: el,
            paymentSourceOptionalWarningCopy: eu,
        } = w,
        ec = i.useMemo(() => (D ? null : (0, r.jsx)(A.rk, { ...ea })), [D, ea]),
        ed = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.A, {
                    shouldUseUnifiedCheckoutUI: !0,
                    paymentSources: eo,
                    selectedPaymentSourceId: ee,
                    defaultPaymentSourceId: el,
                    newPaymentMethodOptionLabel: J && !O ? y.intl.string(y.t.IGU7El) : null,
                    onChange: C,
                    onPaymentSourceAdd: R,
                    hidePersonalInformation: Q,
                    isTrial: O,
                    paymentGatewayRestrictions: en,
                }),
                ec,
            ],
        }),
        e_ = (0, h.yf)({
            error: U,
            isGift: G,
            oneTimePurchaseNitroGiftInvoicePreview: V,
            trialInvoicePreview: H,
            proratedInvoicePreview: j,
            renewalInvoicePreview: Y,
            planSwitchLoading: W,
        }),
        ef = (0, d.V)(t),
        { copy: ep, daysCount: eh, userTrialOffer: em } = (0, _.O8)(),
        eE = (0, g.pt)({
            fractionalPremiumInfo: ei,
            selectedPlanId: n,
            planGroup: b,
            premiumSubscription: er,
            isGift: G,
        }),
        eg = i.useMemo(() => null != x && null != x.discount && null != j && (0, f.Ro)(j, x.discount.id), [x, j]),
        eA = i.useMemo(() => {
            if (null != e_ && e_.type === h.N$.PREMIUM_WITH_TRIAL && null != em)
                return (0, r.jsx)(o.J, {
                    gradientColor: "nitro-pink",
                    Icon: s.tvc,
                    text: y.intl.format(v.default.IAsfR5, { daysCount: eh }),
                });
            if (null != x && eg) {
                let e = x.discount;
                if (e.user_usage_limit_interval === S.Ff.MONTH)
                    return (0, r.jsx)(o.J, {
                        gradientColor: "nitro-pink",
                        Icon: s.tvc,
                        text: y.intl.format(v.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.user_usage_limit_interval_count,
                        }),
                    });
            }
            return null;
        }, [em, eg, x, eh, e_]),
        eI = i.useMemo(() => {
            let e = [];
            return (
                null != eu && e.push({ type: "info", message: eu, key: "payment-source-optional-warning" }),
                eE
                    ? e.push({
                          directContent: (0, r.jsx)(A.l$, {
                              fractionalPremiumInfo: ei,
                              isEligibleForTrial: M,
                              trialPeriodCopy: ep,
                              subscriptionPeriodEnd: B,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : es && e.push({ type: "info", message: (0, g.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [eu, eE, ei, M, ep, B, es]);
    if (null == e_ || e_.type === h.N$.LOADING) return (0, r.jsx)(u.Ed, {});
    let eT = null != ef ? ef.subscription_trial : void 0,
        eS = (0, m.l6)(N, e_?.invoicePreview?.checkoutContext?.available_plans),
        ey =
            e_.type === h.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, r.jsx)(A.W9, {
                      invoiceSummaryTypeWithPreview: e_,
                      subscriptionPlan: K,
                      isPrepaidPaymentSource: $,
                      subscriptionTrial: eT,
                      isCustomGift: X,
                  }),
        ev = null;
    if (
        !$ &&
        (h.IJ.has(e_.type) || e_.type === h.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in e_ &&
        null != e_.renewalInvoicePreview
    ) {
        let e = (0, T.Gj)(e_.invoicePreview, e_.renewalInvoicePreview, eT, {
            discountOffer: x,
            isSubscriptionUpdate: null != er,
            fractionalPremiumInfo: ei,
        });
        ev = (0, r.jsx)(c._, { ...e });
    }
    let eN = Z
            ? (0, r.jsx)(A.XH, {
                  disabled: w.disabled,
                  selectedPlanId: n,
                  priceOptions: eS,
                  planOptions: q,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: B,
                  discountInvoiceItems: z,
              })
            : void 0,
        eC = Z
            ? void 0
            : (0, r.jsx)(I._, {
                  type: e_.type,
                  invoicePreview: e_.invoicePreview,
                  storeListing: P,
                  subscriptionPlan: K,
                  isPrepaidPaymentSource: $,
                  giftRecipient: F,
                  isPremiumGroupPurchase: es,
                  guildId: k,
              }),
        eR = (0, r.jsx)(A.PI, {
            planGroup: b,
            activeSubscription: er,
            isTrial: O,
            plan: K,
            isGift: G,
            paymentSourceType: et,
            invoiceSummaryTypeWithPreview: e_,
            fractionalPremiumInfo: ei,
        }),
        eO =
            e_.type === h.N$.PREMIUM_WITH_TRIAL
                ? (0, T.ib)(e_.invoicePreview.currency)
                : (0, l.kw)({ subscriptionInvoiceRecord: e_.invoicePreview });
    return (0, r.jsx)(u.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: eI,
        planSelectContent: eN,
        purchaseItemContent: eC,
        subscriptionDetailsContent: ev,
        paymentSelectContent: ed,
        invoiceSummaryContent: ey,
        legalContent: eR,
        invoiceTotalDueValue: eO,
        invoiceTotalDueLabel: y.intl.string(v.default.R0cZsM),
        promotionalNoticeContent: eA,
    });
};
