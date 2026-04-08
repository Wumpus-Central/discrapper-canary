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
    v = n(523376);
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
            premiumPlanOptions: $,
            shouldAllowPlanSelect: z,
            isCustomGift: q,
            hidePersonalInformation: Z,
            hasEntitlements: X,
            paymentSourceType: Q,
            eligiblePaymentGateways: J,
            activeSubscription: ee,
            fractionalPremiumInfo: et,
            disabled: en,
            isPremiumGroupPurchase: er,
            currencyDropdownProps: ei,
            paymentSourcesForDropdown: es,
            defaultPaymentSourceId: ea,
            paymentSourceOptionalWarningCopy: eo,
            giftCardCheckboxProps: el,
            giftCardsEnabled: eu,
            handleDropdownPaymentSourceChange: ec,
            dropdownPaymentSourceId: ed,
        } = L,
        e_ = i.useMemo(() => (b ? null : (0, r.jsx)(A.rk, { ...ei })), [b, ei]),
        ef = {
            selectedPaymentSourceId: ed,
            paymentSources: es,
            defaultPaymentSourceId: ea,
            hidePersonalInformation: Z,
            onChange: ec,
            onPaymentSourceAdd: C,
            newPaymentMethodOptionLabel: X && !R ? y.intl.string(y.t.IGU7El) : null,
            isTrial: R,
            paymentGatewayRestrictions: J,
            shouldUseUnifiedCheckoutUI: !0,
        },
        ep = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.nL, {
                    label: y.intl.string(y.t["u+Cw58"]),
                    giftCardsEnabled: eu,
                    giftCardCheckboxProps: el,
                    paymentSourceDropdownProps: ef,
                    disabled: en,
                }),
                e_,
            ],
        }),
        eh = (0, h.yf)({
            error: k,
            isGift: U,
            oneTimePurchaseNitroGiftInvoicePreview: F,
            trialInvoicePreview: B,
            proratedInvoicePreview: H,
            renewalInvoicePreview: j,
            planSwitchLoading: Y,
        }),
        em = (0, d.V)(t),
        { copy: eE, daysCount: eg, userTrialOffer: eA } = (0, _.O8)(),
        eI = (0, g.pt)({
            fractionalPremiumInfo: et,
            selectedPlanId: n,
            planGroup: O,
            premiumSubscription: ee,
            isGift: U,
        }),
        eT = i.useMemo(() => null != M && null != M.discount && null != H && (0, f.Ro)(H, M.discount.id), [M, H]),
        eS = i.useMemo(() => {
            if (null != eh && eh.type === h.N$.PREMIUM_WITH_TRIAL && null != eA)
                return (0, r.jsx)(a.J, {
                    gradientColor: "nitro-pink",
                    Icon: s.tvc,
                    text: y.intl.format(v.default.IAsfR5, { daysCount: eg }),
                });
            if (null != M && eT) {
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
        }, [eA, eT, M, eg, eh]),
        ey = i.useMemo(() => {
            let e = [];
            return (
                null != eo && e.push({ type: "info", message: eo, key: "payment-source-optional-warning" }),
                eI
                    ? e.push({
                          directContent: (0, r.jsx)(A.l$, {
                              fractionalPremiumInfo: et,
                              isEligibleForTrial: w,
                              trialPeriodCopy: eE,
                              subscriptionPeriodEnd: V,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : er && e.push({ type: "info", message: (0, g.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [eo, eI, et, w, eE, V, er]),
        ev = (0, m.l6)(N, null != eh ? eh.invoicePreview?.checkoutContext?.available_plans : void 0),
        eN = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: ey,
            planSelectContent: z
                ? (0, r.jsx)(A.XH, {
                      disabled: L.disabled,
                      selectedPlanId: n,
                      priceOptions: ev,
                      planOptions: $,
                      subscriptionPeriodEnd: V,
                  })
                : void 0,
            paymentSelectContent: ep,
            promotionalNoticeContent: eS,
        };
    if (null == eh) return (0, r.jsx)(l.rg, { ...eN, legalContent: null });
    if (eh.type === h.N$.LOADING) return (0, r.jsx)(l.Ed, {});
    let eC = null != em ? em.subscription_trial : void 0,
        eR =
            eh.type === h.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, r.jsx)(A.W9, {
                      invoiceSummaryTypeWithPreview: eh,
                      subscriptionPlan: W,
                      isPrepaidPaymentSource: K,
                      subscriptionTrial: eC,
                      isCustomGift: q,
                  }),
        eO = null;
    if (
        !K &&
        (h.IJ.has(eh.type) || eh.type === h.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in eh &&
        null != eh.renewalInvoicePreview
    ) {
        let e = (0, T.Gj)(eh.invoicePreview, eh.renewalInvoicePreview, eC, {
            discountOffer: M,
            isSubscriptionUpdate: null != ee,
            fractionalPremiumInfo: et,
        });
        eO = (0, r.jsx)(c._, { ...e });
    }
    let eb = z
            ? void 0
            : (0, r.jsx)(I._, {
                  type: eh.type,
                  invoicePreview: eh.invoicePreview,
                  storeListing: x,
                  subscriptionPlan: W,
                  isPrepaidPaymentSource: K,
                  giftRecipient: G,
                  isPremiumGroupPurchase: er,
                  guildId: P,
              }),
        eD = (0, r.jsx)(A.PI, {
            planGroup: O,
            activeSubscription: ee,
            isTrial: R,
            plan: W,
            isGift: U,
            paymentSourceType: Q,
            isPrepaidPaymentSource: K,
            invoiceSummaryTypeWithPreview: eh,
            fractionalPremiumInfo: et,
        }),
        eL =
            eh.type === h.N$.PREMIUM_WITH_TRIAL
                ? (0, T.ib)(eh.invoicePreview.currency)
                : (0, o.kw)({ subscriptionInvoiceRecord: eh.invoicePreview });
    return (0, r.jsx)(l.rg, {
        ...eN,
        purchaseItemContent: eb,
        subscriptionDetailsContent: eO,
        invoiceSummaryContent: eR,
        legalContent: eD,
        invoiceTotalDueValue: eL,
        invoiceTotalDueLabel: y.intl.string(v.default.R0cZsM),
    });
};
