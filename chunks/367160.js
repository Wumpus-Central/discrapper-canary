"use strict";
n.d(t, { _: () => v }), n(321073);
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
    m = n(156312),
    E = n(222707),
    g = n(340034),
    A = n(134638),
    I = n(888751),
    T = n(788868),
    S = n(985018),
    y = n(756366);
let v = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: v,
            onPaymentSourceChange: N,
            handlePaymentSourceAdd: C,
            isTrial: R,
            planGroup: O,
            isDiscount: b,
            metadata: D,
        } = e,
        L = (0, p.L)(e),
        { isEligibleForTrial: w, selectedStoreListing: M, discountOffer: x } = (0, m.P5)(),
        P = D?.guild_id ?? void 0,
        {
            error: k,
            isGift: U,
            giftRecipient: G,
            oneTimePurchaseNitroGiftInvoicePreview: F,
            subscriptionPeriodEnd: V,
            trialInvoicePreview: B,
            proratedInvoicePreview: H,
            renewalInvoicePreview: j,
            planSwitchLoading: Y,
            plan: W,
            isPrepaid: K,
            discountInvoiceItems: $,
            premiumPlanOptions: z,
            shouldAllowPlanSelect: q,
            isCustomGift: Z,
            hidePersonalInformation: X,
            hasEntitlements: Q,
            paymentSourceId: J,
            paymentSourceType: ee,
            eligiblePaymentGateways: et,
            activeSubscription: en,
            fractionalPremiumInfo: er,
            isPremiumGroupPurchase: ei,
            currencyDropdownProps: es,
            paymentSourcesForDropdown: ea,
            defaultPaymentSourceId: eo,
            paymentSourceOptionalWarningCopy: el,
        } = L,
        eu = i.useMemo(() => (b ? null : (0, r.jsx)(g.rk, { ...es })), [b, es]),
        ec = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.A, {
                    shouldUseUnifiedCheckoutUI: !0,
                    paymentSources: ea,
                    selectedPaymentSourceId: J,
                    defaultPaymentSourceId: eo,
                    newPaymentMethodOptionLabel: Q && !R ? S.intl.string(S.t.IGU7El) : null,
                    onChange: N,
                    onPaymentSourceAdd: C,
                    hidePersonalInformation: X,
                    isTrial: R,
                    paymentGatewayRestrictions: et,
                }),
                eu,
            ],
        }),
        ed = (0, h.yf)({
            error: k,
            isGift: U,
            oneTimePurchaseNitroGiftInvoicePreview: F,
            trialInvoicePreview: B,
            proratedInvoicePreview: H,
            renewalInvoicePreview: j,
            planSwitchLoading: Y,
        }),
        e_ = (0, d.V)(t),
        { copy: ef, daysCount: ep, userTrialOffer: eh } = (0, _.O8)(),
        em = (0, E.pt)({
            fractionalPremiumInfo: er,
            selectedPlanId: n,
            planGroup: O,
            premiumSubscription: en,
            isGift: U,
        }),
        eE = i.useMemo(() => null != x && null != x.discount && null != H && (0, f.Ro)(H, x.discount.id), [x, H]),
        eg = i.useMemo(() => {
            if (null != ed && ed.type === h.N$.PREMIUM_WITH_TRIAL && null != eh)
                return (0, r.jsx)(o.J, {
                    gradientColor: "nitro-pink",
                    Icon: s.tvc,
                    text: S.intl.format(y.default.IAsfR5, { daysCount: ep }),
                });
            if (null != x && eE) {
                let e = x.discount;
                if (e.user_usage_limit_interval === T.Ff.MONTH)
                    return (0, r.jsx)(o.J, {
                        gradientColor: "nitro-pink",
                        Icon: s.tvc,
                        text: S.intl.format(y.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.user_usage_limit_interval_count,
                        }),
                    });
            }
            return null;
        }, [eh, eE, x, ep, ed]),
        eA = i.useMemo(() => {
            let e = [];
            return (
                null != el && e.push({ type: "info", message: el, key: "payment-source-optional-warning" }),
                em
                    ? e.push({
                          directContent: (0, r.jsx)(g.l$, {
                              fractionalPremiumInfo: er,
                              isEligibleForTrial: w,
                              trialPeriodCopy: ef,
                              subscriptionPeriodEnd: V,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ei && e.push({ type: "info", message: (0, E.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [el, em, er, w, ef, V, ei]);
    if (null == ed || ed.type === h.N$.LOADING) return (0, r.jsx)(u.Ed, {});
    let eI = null != e_ ? e_.subscription_trial : void 0,
        eT =
            ed.type === h.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, r.jsx)(g.W9, {
                      invoiceSummaryTypeWithPreview: ed,
                      subscriptionPlan: W,
                      isPrepaidPaymentSource: K,
                      subscriptionTrial: eI,
                      isCustomGift: Z,
                  }),
        eS = null;
    if (
        !K &&
        (h.IJ.has(ed.type) || ed.type === h.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ed &&
        null != ed.renewalInvoicePreview
    ) {
        let e = (0, I.Gj)(ed.invoicePreview, ed.renewalInvoicePreview, eI, {
            discountOffer: x,
            isSubscriptionUpdate: null != en,
        });
        eS = (0, r.jsx)(c._, { ...e });
    }
    let ey = q
            ? (0, r.jsx)(g.XH, {
                  disabled: L.disabled,
                  selectedPlanId: n,
                  priceOptions: v,
                  planOptions: z,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: V,
                  discountInvoiceItems: $,
              })
            : void 0,
        ev = q
            ? void 0
            : (0, r.jsx)(A._, {
                  type: ed.type,
                  invoicePreview: ed.invoicePreview,
                  subscriptionPlan: W,
                  storeListing: M,
                  isPrepaidPaymentSource: K,
                  giftRecipient: G,
                  isPremiumGroupPurchase: ei,
                  guildId: P,
              }),
        eN = (0, r.jsx)(g.PI, {
            planGroup: O,
            activeSubscription: en,
            isTrial: R,
            plan: W,
            isGift: U,
            paymentSourceType: ee,
            invoiceSummaryTypeWithPreview: ed,
        }),
        eC =
            ed.type === h.N$.PREMIUM_WITH_TRIAL
                ? (0, I.ib)(ed.invoicePreview.currency)
                : (0, l.kw)({ subscriptionInvoiceRecord: ed.invoicePreview });
    return (0, r.jsx)(u.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: eA,
        planSelectContent: ey,
        purchaseItemContent: ev,
        subscriptionDetailsContent: eS,
        paymentSelectContent: ec,
        invoiceSummaryContent: eT,
        legalContent: eN,
        invoiceTotalDueValue: eC,
        invoiceTotalDueLabel: S.intl.string(y.default.R0cZsM),
        promotionalNoticeContent: eg,
    });
};
