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
    I = n(421094),
    f = n(340034),
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
        { isEligibleForTrial: k, discountOffer: G } = (0, u.i)(),
        { checkoutPriceOptions: Y, checkoutInvoiceError: F } = (0, m.t4)((e) => ({
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
        })),
        B = w?.guild_id ?? void 0,
        {
            isGift: W,
            giftRecipient: H,
            invoiceSummaryTypeWithPreview: V,
            subscriptionPeriodEnd: K,
            proratedInvoicePreview: Z,
            plan: q,
            isPrepaid: z,
            premiumPlanOptions: $,
            shouldAllowPlanSelect: J,
            isCustomGift: X,
            hasEntitlements: Q,
            paymentSourceType: ee,
            eligiblePaymentGateways: et,
            activeSubscription: en,
            fractionalPremiumInfo: el,
            disabled: er,
            isPremiumGroupPurchase: ei,
            paymentSourceOptionalWarningCopy: ea,
        } = D,
        es = (0, l.jsx)(I.K, {
            label: R.intl.string(R.t["u+Cw58"]),
            handlePaymentSourceAdd: b,
            isTrial: L,
            isDiscount: O,
            disabled: er,
            hasEntitlements: Q,
            eligiblePaymentGateways: et,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        eo = (0, A.V)(t),
        { copy: eu, daysCount: ec, userTrialOffer: ed } = (0, C.O8)(),
        ep = (0, _.pt)({
            fractionalPremiumInfo: el,
            selectedPlanId: n,
            planGroup: j,
            premiumSubscription: en,
            isGift: W,
        }),
        em = r.useMemo(() => null != G && null != G.discount && null != Z && (0, E.Ro)(Z, G.discount.id), [G, Z]),
        { setHeaderBadgeText: eh, unsetHeaderBadgeText: eA } = (0, d.v)(),
        eC = W && q.interval === x.WT.YEAR && (0, S.xq)(q.id),
        eE = (0, S.L_)({ planId: q.id, isGift: !0, priceOptions: Y, subscriptionPlan: q });
    r.useEffect(
        () => (
            null != eE && eC && eh(R.intl.formatToPlainString(M.default["Mi5BH/"], { percentOff: eE })),
            () => {
                eA();
            }
        ),
        [eE, eh, eA, eC],
    );
    let ey = r.useMemo(() => {
            if (null != V && V.type === P.N$.PREMIUM_WITH_TRIAL && null != ed)
                return (0, l.jsx)(a.J, {
                    gradientColor: "nitro-pink",
                    Icon: i.t,
                    text: R.intl.format(M.default.IAsfR5, { daysCount: ec }),
                });
            if (null != G && em) {
                let e = G.discount;
                if (e.userUsageLimitInterval === x.Ff.MONTH)
                    return (0, l.jsx)(a.J, {
                        gradientColor: "nitro-pink",
                        Icon: i.t,
                        text: R.intl.format(M.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.userUsageLimitIntervalCount,
                        }),
                    });
                if (e.userUsageLimitInterval === x.Ff.YEAR)
                    return (0, l.jsx)(a.J, {
                        gradientColor: "nitro-pink",
                        text: R.intl.format(M.default["tUzT/U"], { percentOff: e.amount }),
                    });
            }
            return eC && null != eE
                ? (0, l.jsx)(a.J, {
                      gradientColor: "nitro-pink",
                      Icon: i.t,
                      text: R.intl.format(M.default["7sYIBL"], { savingsPercent: eE }),
                  })
                : null;
        }, [ed, em, G, ec, V, eE, eC]),
        eP = (0, g.G)(q.id),
        eS = r.useMemo(() => (eP ? (0, l.jsx)(T.a, {}) : null), [eP]),
        e_ = (0, h.I)({ skuId: q.skuId, isGift: W }),
        eI = r.useMemo(() => (null != ey ? ey : null != eS ? eS : null), [ey, eS]),
        ef = r.useMemo(() => {
            let e = [];
            return (
                null != ea && e.push({ type: "info", message: ea, key: "payment-source-optional-warning" }),
                ep
                    ? e.push({
                          directContent: (0, l.jsx)(f.l$, {
                              fractionalPremiumInfo: el,
                              isEligibleForTrial: k,
                              trialPeriodCopy: eu,
                              subscriptionPeriodEnd: K,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ei && e.push({ type: "info", message: (0, _.Nn)(), key: "premium-group-purchase-notice" }),
                null != e_ && e.push({ directContent: e_, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [ea, ep, el, k, eu, K, ei, e_]),
        eT = null != V ? V.invoicePreview : null,
        { priceOptions: eN, planPricesLoading: ev } = (0, S.Pr)(Y, eT, F),
        eg = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: ef,
            planSelectContent: J
                ? (0, l.jsx)(f.XH, {
                      disabled: D.disabled,
                      selectedPlanId: n,
                      priceOptions: eN,
                      planOptions: $,
                      subscriptionPeriodEnd: K,
                      planPricesLoading: ev,
                  })
                : void 0,
            paymentMethodContent: es,
            promotionalNoticeContent: eI,
        };
    if (null == V && null != F) return (0, l.jsx)(o.T, { ...eg, legalContent: null });
    if (null == V || V.type === P.N$.LOADING) return (0, l.jsx)(o.E, {});
    let ex = null != eo ? eo.subscription_trial : void 0,
        eR =
            V.type === P.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(f.W9, {
                      invoiceSummaryTypeWithPreview: V,
                      subscriptionPlan: q,
                      isPrepaidPaymentSource: z,
                      subscriptionTrial: ex,
                      isCustomGift: X,
                  }),
        eM = null;
    if (
        !z &&
        (P.IJ.has(V.type) || V.type === P.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in V &&
        null != V.renewalInvoicePreview
    ) {
        let e = (0, v.Gj)(V.invoicePreview, V.renewalInvoicePreview, ex, {
            discountOffer: G,
            isSubscriptionUpdate: null != en,
            fractionalPremiumInfo: el,
        });
        eM = (0, l.jsx)(p._, { ...e });
    }
    let eb = J
            ? void 0
            : (0, l.jsx)(N._, {
                  type: V.type,
                  invoicePreview: V.invoicePreview,
                  storeListing: U,
                  subscriptionPlan: q,
                  isPrepaidPaymentSource: z,
                  giftRecipient: H,
                  isPremiumGroupPurchase: ei,
                  guildId: B,
              }),
        eL = (0, l.jsx)(f.PI, {
            planGroup: j,
            activeSubscription: en,
            isTrial: L,
            plan: q,
            isGift: W,
            paymentSourceType: ee,
            isPrepaidPaymentSource: z,
            invoiceSummaryTypeWithPreview: V,
            fractionalPremiumInfo: el,
        }),
        ej =
            V.type === P.N$.PREMIUM_WITH_TRIAL
                ? (0, v.ib)(V.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: V.invoicePreview });
    return (0, l.jsx)(o.T, {
        ...eg,
        purchaseItemContent: eb,
        subscriptionDetailsContent: eM,
        invoiceSummaryContent: eR,
        legalContent: eL,
        invoiceTotalDueValue: ej,
        invoiceTotalDueLabel: W ? R.intl.string(M.default.Zxav97) : R.intl.string(M.default.R0cZsM),
    });
};
