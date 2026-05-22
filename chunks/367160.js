n.d(t, { _: () => L }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(17928),
    r = n(403581),
    s = n(262427),
    o = n(854354),
    u = n(682481),
    c = n(717925),
    d = n(214891),
    p = n(669510),
    m = n(671744),
    h = n(995835),
    C = n(234419),
    A = n(361597),
    y = n(815545),
    E = n(209030),
    P = n(299301),
    S = n(773669),
    _ = n(428262),
    f = n(834252),
    T = n(222707),
    I = n(421094),
    x = n(340034),
    N = n(755880),
    g = n(134638),
    v = n(888751),
    M = n(906234),
    b = n(788868),
    j = n(375708),
    R = n(327105);
let L = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            handlePaymentSourceAdd: L,
            isTrial: O,
            planGroup: D,
            isDiscount: w,
            metadata: U,
        } = e,
        k = (0, E.L)(e),
        { isEligibleForTrial: Y, discountOffer: G, selectedStoreListing: F } = (0, f.P5)(),
        B = (0, m.t4)((e) => e.checkoutPriceOptions),
        W = U?.guild_id ?? void 0,
        {
            isGift: V,
            giftRecipient: H,
            invoiceSummaryTypeWithPreview: K,
            subscriptionPeriodEnd: Z,
            proratedInvoicePreview: q,
            plan: z,
            isPrepaid: J,
            premiumPlanOptions: $,
            shouldAllowPlanSelect: X,
            isCustomGift: Q,
            hasEntitlements: ee,
            paymentSourceType: et,
            eligiblePaymentGateways: en,
            activeSubscription: el,
            fractionalPremiumInfo: ea,
            disabled: ei,
            isPremiumGroupPurchase: er,
            paymentSourceOptionalWarningCopy: es,
        } = k,
        eo = (0, l.jsx)(u.y, {
            children: (0, l.jsx)(I.K, {
                label: j.intl.string(j.t["u+Cw58"]),
                handlePaymentSourceAdd: L,
                isTrial: O,
                isDiscount: w,
                disabled: ei,
                hasEntitlements: ee,
                eligiblePaymentGateways: en,
                shouldUseUnifiedCheckoutUI: !0,
            }),
        }),
        eu = (0, C.V)(t),
        { copy: ec, daysCount: ed, userTrialOffer: ep } = (0, A.O8)(),
        em = (0, T.pt)({
            fractionalPremiumInfo: ea,
            selectedPlanId: n,
            planGroup: D,
            premiumSubscription: el,
            isGift: V,
        }),
        eh = a.useMemo(() => null != G && null != G.discount && null != q && (0, y.Ro)(q, G.discount.id), [G, q]),
        { setHeaderBadgeText: eC, unsetHeaderBadgeText: eA } = (0, d.v)(),
        ey = V && z.interval === b.WT.YEAR && (0, _.xq)(z.id),
        eE = (0, _.L_)({ planId: z.id, isGift: !0, priceOptions: B, subscriptionPlan: z }),
        eP = ["en-US", "en-GB"].includes((0, i.bG)([S.default], () => S.default.locale));
    a.useEffect(
        () => (
            null != eE && ey && eP && eC(j.intl.formatToPlainString(R.default["Mi5BH/"], { percentOff: eE })),
            () => {
                eA();
            }
        ),
        [eE, eC, eA, ey, eP],
    );
    let eS = a.useMemo(() => {
            if (null != K && K.type === P.N$.PREMIUM_WITH_TRIAL && null != ep)
                return (0, l.jsx)(s.J, {
                    gradientColor: "nitro-pink",
                    Icon: r.t,
                    text: j.intl.format(R.default.IAsfR5, { daysCount: ed }),
                });
            if (null != G && eh) {
                let e = G.discount;
                if (e.userUsageLimitInterval === b.Ff.MONTH)
                    return (0, l.jsx)(s.J, {
                        gradientColor: "nitro-pink",
                        Icon: r.t,
                        text: j.intl.format(R.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.userUsageLimitIntervalCount,
                        }),
                    });
            }
            return ey && eP && null != eE
                ? (0, l.jsx)(s.J, {
                      gradientColor: "nitro-pink",
                      Icon: r.t,
                      text: j.intl.format(R.default["7sYIBL"], { savingsPercent: eE }),
                  })
                : null;
        }, [eP, ep, eh, G, ed, K, eE, ey]),
        e_ = (0, M.G)(z.id),
        ef = a.useMemo(() => (e_ ? (0, l.jsx)(N.a, {}) : null), [e_]),
        eT = (0, h.I)({ skuId: z.skuId, isGift: V }),
        eI = a.useMemo(() => (null != eS ? eS : null != ef ? ef : null), [eS, ef]),
        ex = a.useMemo(() => {
            let e = [];
            return (
                null != es && e.push({ type: "info", message: es, key: "payment-source-optional-warning" }),
                em
                    ? e.push({
                          directContent: (0, l.jsx)(x.l$, {
                              fractionalPremiumInfo: ea,
                              isEligibleForTrial: Y,
                              trialPeriodCopy: ec,
                              subscriptionPeriodEnd: Z,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : er && e.push({ type: "info", message: (0, T.Nn)(), key: "premium-group-purchase-notice" }),
                null != eT && e.push({ directContent: eT, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [es, em, ea, Y, ec, Z, er, eT]),
        eN = (0, _.l6)(B, null != K ? K.invoicePreview?.checkoutContext?.available_plans : void 0),
        eg = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: ex,
            planSelectContent: X
                ? (0, l.jsx)(x.XH, {
                      disabled: k.disabled,
                      selectedPlanId: n,
                      priceOptions: eN,
                      planOptions: $,
                      subscriptionPeriodEnd: Z,
                  })
                : void 0,
            paymentMethodContent: eo,
            promotionalNoticeContent: eI,
        };
    if (null == K) return (0, l.jsx)(c.T, { ...eg, legalContent: null });
    if (K.type === P.N$.LOADING) return (0, l.jsx)(c.E, {});
    let ev = null != eu ? eu.subscription_trial : void 0,
        eM =
            K.type === P.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(x.W9, {
                      invoiceSummaryTypeWithPreview: K,
                      subscriptionPlan: z,
                      isPrepaidPaymentSource: J,
                      subscriptionTrial: ev,
                      isCustomGift: Q,
                  }),
        eb = null;
    if (
        !J &&
        (P.IJ.has(K.type) || K.type === P.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in K &&
        null != K.renewalInvoicePreview
    ) {
        let e = (0, v.Gj)(K.invoicePreview, K.renewalInvoicePreview, ev, {
            discountOffer: G,
            isSubscriptionUpdate: null != el,
            fractionalPremiumInfo: ea,
        });
        eb = (0, l.jsx)(p._, { ...e });
    }
    let ej = X
            ? void 0
            : (0, l.jsx)(g._, {
                  type: K.type,
                  invoicePreview: K.invoicePreview,
                  storeListing: F,
                  subscriptionPlan: z,
                  isPrepaidPaymentSource: J,
                  giftRecipient: H,
                  isPremiumGroupPurchase: er,
                  guildId: W,
              }),
        eR = (0, l.jsx)(x.PI, {
            planGroup: D,
            activeSubscription: el,
            isTrial: O,
            plan: z,
            isGift: V,
            paymentSourceType: et,
            isPrepaidPaymentSource: J,
            invoiceSummaryTypeWithPreview: K,
            fractionalPremiumInfo: ea,
        }),
        eL =
            K.type === P.N$.PREMIUM_WITH_TRIAL
                ? (0, v.ib)(K.invoicePreview.currency)
                : (0, o.kw)({ subscriptionInvoiceRecord: K.invoicePreview });
    return (0, l.jsx)(c.T, {
        ...eg,
        purchaseItemContent: ej,
        subscriptionDetailsContent: eb,
        invoiceSummaryContent: eM,
        legalContent: eR,
        invoiceTotalDueValue: eL,
        invoiceTotalDueLabel: V ? j.intl.string(R.default.Zxav97) : j.intl.string(R.default.R0cZsM),
    });
};
