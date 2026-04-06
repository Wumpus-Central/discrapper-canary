"use strict";
n.d(t, { _: () => N }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(262427),
    o = n(854354),
    l = n(69882),
    u = n(93159),
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
            handlePaymentSourceAdd: C,
            isTrial: R,
            planGroup: O,
            isDiscount: b,
            metadata: D,
        } = e,
        L = (0, p.L)(e),
        { isEligibleForTrial: w, discountOffer: M, selectedStoreListing: x } = (0, E.P5)(),
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
            paymentSourceType: J,
            eligiblePaymentGateways: ee,
            activeSubscription: et,
            fractionalPremiumInfo: en,
            disabled: er,
            isPremiumGroupPurchase: ei,
            currencyDropdownProps: es,
            paymentSourcesForDropdown: ea,
            defaultPaymentSourceId: eo,
            paymentSourceOptionalWarningCopy: el,
            giftCardCheckboxProps: eu,
            giftCardsEnabled: ec,
            handleDropdownPaymentSourceChange: ed,
            dropdownPaymentSourceId: e_,
        } = L,
        ef = i.useMemo(() => (b ? null : (0, r.jsx)(A.rk, { ...es })), [b, es]),
        ep = {
            selectedPaymentSourceId: e_,
            paymentSources: ea,
            defaultPaymentSourceId: eo,
            hidePersonalInformation: X,
            onChange: ed,
            onPaymentSourceAdd: C,
            newPaymentMethodOptionLabel: Q && !R ? y.intl.string(y.t.IGU7El) : null,
            isTrial: R,
            paymentGatewayRestrictions: ee,
            shouldUseUnifiedCheckoutUI: !0,
        },
        eh = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.nL, {
                    label: y.intl.string(y.t["u+Cw58"]),
                    giftCardsEnabled: ec,
                    giftCardCheckboxProps: eu,
                    paymentSourceDropdownProps: ep,
                    disabled: er,
                }),
                ef,
            ],
        }),
        em = (0, h.yf)({
            error: k,
            isGift: U,
            oneTimePurchaseNitroGiftInvoicePreview: F,
            trialInvoicePreview: B,
            proratedInvoicePreview: H,
            renewalInvoicePreview: j,
            planSwitchLoading: Y,
        }),
        eE = (0, d.V)(t),
        { copy: eg, daysCount: eA, userTrialOffer: eI } = (0, _.O8)(),
        eT = (0, g.pt)({
            fractionalPremiumInfo: en,
            selectedPlanId: n,
            planGroup: O,
            premiumSubscription: et,
            isGift: U,
        }),
        eS = i.useMemo(() => null != M && null != M.discount && null != H && (0, f.Ro)(H, M.discount.id), [M, H]),
        ey = i.useMemo(() => {
            if (null != em && em.type === h.N$.PREMIUM_WITH_TRIAL && null != eI)
                return (0, r.jsx)(a.J, {
                    gradientColor: "nitro-pink",
                    Icon: s.tvc,
                    text: y.intl.format(v.default.IAsfR5, { daysCount: eA }),
                });
            if (null != M && eS) {
                let e = M.discount;
                if (e.user_usage_limit_interval === S.Ff.MONTH)
                    return (0, r.jsx)(a.J, {
                        gradientColor: "nitro-pink",
                        Icon: s.tvc,
                        text: y.intl.format(v.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.user_usage_limit_interval_count,
                        }),
                    });
            }
            return null;
        }, [eI, eS, M, eA, em]),
        ev = i.useMemo(() => {
            let e = [];
            return (
                null != el && e.push({ type: "info", message: el, key: "payment-source-optional-warning" }),
                eT
                    ? e.push({
                          directContent: (0, r.jsx)(A.l$, {
                              fractionalPremiumInfo: en,
                              isEligibleForTrial: w,
                              trialPeriodCopy: eg,
                              subscriptionPeriodEnd: V,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ei && e.push({ type: "info", message: (0, g.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [el, eT, en, w, eg, V, ei]);
    if (null == em || em.type === h.N$.LOADING) return (0, r.jsx)(l.Ed, {});
    let eN = null != eE ? eE.subscription_trial : void 0,
        eC = (0, m.l6)(N, em?.invoicePreview?.checkoutContext?.available_plans),
        eR =
            em.type === h.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, r.jsx)(A.W9, {
                      invoiceSummaryTypeWithPreview: em,
                      subscriptionPlan: W,
                      isPrepaidPaymentSource: K,
                      subscriptionTrial: eN,
                      isCustomGift: Z,
                  }),
        eO = null;
    if (
        !K &&
        (h.IJ.has(em.type) || em.type === h.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in em &&
        null != em.renewalInvoicePreview
    ) {
        let e = (0, T.Gj)(em.invoicePreview, em.renewalInvoicePreview, eN, {
            discountOffer: M,
            isSubscriptionUpdate: null != et,
            fractionalPremiumInfo: en,
        });
        eO = (0, r.jsx)(c._, { ...e });
    }
    let eb = q
            ? (0, r.jsx)(A.XH, {
                  disabled: L.disabled,
                  selectedPlanId: n,
                  priceOptions: eC,
                  planOptions: z,
                  subscriptionPeriodEnd: V,
                  discountInvoiceItems: $,
              })
            : void 0,
        eD = q
            ? void 0
            : (0, r.jsx)(I._, {
                  type: em.type,
                  invoicePreview: em.invoicePreview,
                  storeListing: x,
                  subscriptionPlan: W,
                  isPrepaidPaymentSource: K,
                  giftRecipient: G,
                  isPremiumGroupPurchase: ei,
                  guildId: P,
              }),
        eL = (0, r.jsx)(A.PI, {
            planGroup: O,
            activeSubscription: et,
            isTrial: R,
            plan: W,
            isGift: U,
            paymentSourceType: J,
            isPrepaidPaymentSource: K,
            invoiceSummaryTypeWithPreview: em,
            fractionalPremiumInfo: en,
        }),
        ew =
            em.type === h.N$.PREMIUM_WITH_TRIAL
                ? (0, T.ib)(em.invoicePreview.currency)
                : (0, o.kw)({ subscriptionInvoiceRecord: em.invoicePreview });
    return (0, r.jsx)(l.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: ev,
        planSelectContent: eb,
        purchaseItemContent: eD,
        subscriptionDetailsContent: eO,
        paymentSelectContent: eh,
        invoiceSummaryContent: eR,
        legalContent: eL,
        invoiceTotalDueValue: ew,
        invoiceTotalDueLabel: y.intl.string(v.default.R0cZsM),
        promotionalNoticeContent: ey,
    });
};
