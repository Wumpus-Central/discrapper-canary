n.d(t, { _: () => b }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(403581),
    a = n(262427),
    s = n(854354),
    o = n(717925),
    u = n(463376),
    c = n(266060),
    d = n(214891),
    p = n(669510),
    m = n(722847),
    h = n(995835),
    A = n(234419),
    C = n(361597),
    E = n(815545),
    y = n(271849),
    P = n(299301),
    S = n(428262),
    _ = n(222707),
    f = n(421094),
    I = n(340034),
    T = n(755880),
    N = n(134638),
    v = n(888751),
    g = n(906234),
    x = n(788868),
    R = n(375708),
    M = n(327105);
let b = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            handlePaymentSourceAdd: b,
            isTrial: L,
            planGroup: j,
            isDiscount: O,
            metadata: w,
        } = e,
        D = (0, y.L)(e),
        U = (0, c.K)(),
        { isEligibleForTrial: k, discountOffer: G, premiumGroupDiscountOffer: Y } = (0, u.i)(),
        F = Y ?? G,
        { checkoutPriceOptions: B, checkoutInvoiceError: W } = (0, m.t4)((e) => ({
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
        })),
        H = w?.guild_id ?? void 0,
        {
            isGift: V,
            giftRecipient: K,
            invoiceSummaryTypeWithPreview: Z,
            subscriptionPeriodEnd: q,
            proratedInvoicePreview: z,
            plan: $,
            isPrepaid: J,
            premiumPlanOptions: X,
            shouldAllowPlanSelect: Q,
            isCustomGift: ee,
            hasEntitlements: et,
            paymentSourceType: en,
            eligiblePaymentGateways: el,
            activeSubscription: er,
            fractionalPremiumInfo: ei,
            disabled: ea,
            isPremiumGroupPurchase: es,
            paymentSourceOptionalWarningCopy: eo,
        } = D,
        eu = (0, l.jsx)(f.K, {
            label: R.intl.string(R.t["u+Cw58"]),
            handlePaymentSourceAdd: b,
            isTrial: L,
            isDiscount: O,
            disabled: ea,
            hasEntitlements: et,
            eligiblePaymentGateways: el,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        ec = (0, A.V)(t),
        { copy: ed, daysCount: ep, userTrialOffer: em } = (0, C.O8)(),
        eh = (0, _.pt)({
            fractionalPremiumInfo: ei,
            selectedPlanId: n,
            planGroup: j,
            premiumSubscription: er,
            isGift: V,
        }),
        eA = r.useMemo(() => null != F && null != F.discount && null != z && (0, E.Ro)(z, F.discount.id), [F, z]),
        { setHeaderBadgeText: eC, unsetHeaderBadgeText: eE } = (0, d.v)(),
        ey = V && $.interval === x.WT.YEAR && (0, S.xq)($.id),
        eP = (0, S.L_)({ planId: $.id, isGift: !0, priceOptions: B, subscriptionPlan: $ });
    r.useEffect(
        () => (
            null != eP && ey && eC(R.intl.formatToPlainString(M.default["Mi5BH/"], { percentOff: eP })),
            () => {
                eE();
            }
        ),
        [eP, eC, eE, ey],
    );
    let eS = r.useMemo(() => {
            if (null != Z && Z.type === P.N$.PREMIUM_WITH_TRIAL && null != em)
                return (0, l.jsx)(a.J, {
                    gradientColor: "nitro-pink",
                    Icon: i.t,
                    text: R.intl.format(M.default.IAsfR5, { daysCount: ep }),
                });
            if (null != F && eA) {
                let e = F.discount,
                    t = F.getFullIntervalCount();
                if (e.userUsageLimitInterval === x.Ff.MONTH)
                    return (0, l.jsx)(a.J, {
                        gradientColor: "nitro-pink",
                        Icon: i.t,
                        text: R.intl.format(M.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === x.Ff.YEAR)
                    return (0, l.jsx)(a.J, {
                        gradientColor: "nitro-pink",
                        text: R.intl.format(M.default["tUzT/U"], { percentOff: e.amount }),
                    });
            }
            return ey && null != eP
                ? (0, l.jsx)(a.J, {
                      gradientColor: "nitro-pink",
                      Icon: i.t,
                      text: R.intl.format(M.default["7sYIBL"], { savingsPercent: eP }),
                  })
                : null;
        }, [em, eA, F, ep, Z, eP, ey]),
        e_ = (0, g.G)($.id),
        ef = r.useMemo(() => (e_ ? (0, l.jsx)(T.a, {}) : null), [e_]),
        eI = (0, h.I)({ skuId: $.skuId, isGift: V }),
        eT = r.useMemo(() => (null != eS ? eS : null != ef ? ef : null), [eS, ef]),
        eN = r.useMemo(() => {
            let e = [];
            return (
                null != eo && e.push({ type: "info", message: eo, key: "payment-source-optional-warning" }),
                eh
                    ? e.push({
                          directContent: (0, l.jsx)(I.l$, {
                              fractionalPremiumInfo: ei,
                              isEligibleForTrial: k,
                              trialPeriodCopy: ed,
                              subscriptionPeriodEnd: q,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : es && e.push({ type: "info", message: (0, _.Nn)(), key: "premium-group-purchase-notice" }),
                null != eI && e.push({ directContent: eI, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [eo, eh, ei, k, ed, q, es, eI]),
        ev = null != Z ? Z.invoicePreview : null,
        { priceOptions: eg, planPricesLoading: ex } = (0, S.Pr)(B, ev, W),
        eR = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eN,
            planSelectContent: Q
                ? (0, l.jsx)(I.XH, {
                      disabled: D.disabled,
                      selectedPlanId: n,
                      priceOptions: eg,
                      planOptions: X,
                      subscriptionPeriodEnd: q,
                      planPricesLoading: ex,
                  })
                : void 0,
            paymentMethodContent: eu,
            promotionalNoticeContent: eT,
        };
    if (null == Z && null != W) return (0, l.jsx)(o.T, { ...eR, legalContent: null });
    if (null == Z || Z.type === P.N$.LOADING) return (0, l.jsx)(o.E, {});
    let eM = null != ec ? ec.subscription_trial : void 0,
        eb =
            Z.type === P.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(I.W9, {
                      invoiceSummaryTypeWithPreview: Z,
                      subscriptionPlan: $,
                      isPrepaidPaymentSource: J,
                      subscriptionTrial: eM,
                      isCustomGift: ee,
                  }),
        eL = null;
    if (
        !J &&
        (P.IJ.has(Z.type) || Z.type === P.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in Z &&
        null != Z.renewalInvoicePreview
    ) {
        let e = (0, v.Gj)(Z.invoicePreview, Z.renewalInvoicePreview, eM, {
            discountOffer: F,
            isSubscriptionUpdate: null != er,
            fractionalPremiumInfo: ei,
        });
        eL = (0, l.jsx)(p._, { ...e });
    }
    let ej = Q
            ? void 0
            : (0, l.jsx)(N._, {
                  type: Z.type,
                  invoicePreview: Z.invoicePreview,
                  storeListing: U,
                  subscriptionPlan: $,
                  isPrepaidPaymentSource: J,
                  giftRecipient: K,
                  isPremiumGroupPurchase: es,
                  guildId: H,
              }),
        eO = (0, l.jsx)(I.PI, {
            planGroup: j,
            activeSubscription: er,
            isTrial: L,
            plan: $,
            isGift: V,
            paymentSourceType: en,
            isPrepaidPaymentSource: J,
            invoiceSummaryTypeWithPreview: Z,
            fractionalPremiumInfo: ei,
        }),
        ew =
            Z.type === P.N$.PREMIUM_WITH_TRIAL
                ? (0, v.ib)(Z.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: Z.invoicePreview });
    return (0, l.jsx)(o.T, {
        ...eR,
        purchaseItemContent: ej,
        subscriptionDetailsContent: eL,
        invoiceSummaryContent: eb,
        legalContent: eO,
        invoiceTotalDueValue: ew,
        invoiceTotalDueLabel: V ? R.intl.string(M.default.Zxav97) : R.intl.string(M.default.R0cZsM),
    });
};
