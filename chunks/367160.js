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
    C = n(234419),
    A = n(361597),
    E = n(815545),
    y = n(209030),
    P = n(299301),
    S = n(428262),
    f = n(222707),
    _ = n(421094),
    T = n(340034),
    I = n(755880),
    N = n(134638),
    x = n(888751),
    g = n(906234),
    v = n(788868),
    M = n(375708),
    R = n(327105);
let b = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            handlePaymentSourceAdd: b,
            isTrial: j,
            planGroup: L,
            isDiscount: O,
            metadata: D,
        } = e,
        w = (0, y.L)(e),
        U = (0, c.K)(),
        { isEligibleForTrial: k, discountOffer: G } = (0, u.i)(),
        { checkoutPriceOptions: Y, checkoutInvoiceError: F } = (0, m.t4)((e) => ({
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
        })),
        B = D?.guild_id ?? void 0,
        {
            isGift: W,
            giftRecipient: V,
            invoiceSummaryTypeWithPreview: H,
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
        } = w,
        es = (0, l.jsx)(_.K, {
            label: M.intl.string(M.t["u+Cw58"]),
            handlePaymentSourceAdd: b,
            isTrial: j,
            isDiscount: O,
            disabled: er,
            hasEntitlements: Q,
            eligiblePaymentGateways: et,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        eo = (0, C.V)(t),
        { copy: eu, daysCount: ec, userTrialOffer: ed } = (0, A.O8)(),
        ep = (0, f.pt)({
            fractionalPremiumInfo: el,
            selectedPlanId: n,
            planGroup: L,
            premiumSubscription: en,
            isGift: W,
        }),
        em = r.useMemo(() => null != G && null != G.discount && null != Z && (0, E.Ro)(Z, G.discount.id), [G, Z]),
        { setHeaderBadgeText: eh, unsetHeaderBadgeText: eC } = (0, d.v)(),
        eA = W && q.interval === v.WT.YEAR && (0, S.xq)(q.id),
        eE = (0, S.L_)({ planId: q.id, isGift: !0, priceOptions: Y, subscriptionPlan: q });
    r.useEffect(
        () => (
            null != eE && eA && eh(M.intl.formatToPlainString(R.default["Mi5BH/"], { percentOff: eE })),
            () => {
                eC();
            }
        ),
        [eE, eh, eC, eA],
    );
    let ey = r.useMemo(() => {
            if (null != H && H.type === P.N$.PREMIUM_WITH_TRIAL && null != ed)
                return (0, l.jsx)(a.J, {
                    gradientColor: "nitro-pink",
                    Icon: i.t,
                    text: M.intl.format(R.default.IAsfR5, { daysCount: ec }),
                });
            if (null != G && em) {
                let e = G.discount;
                if (e.userUsageLimitInterval === v.Ff.MONTH)
                    return (0, l.jsx)(a.J, {
                        gradientColor: "nitro-pink",
                        Icon: i.t,
                        text: M.intl.format(R.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.userUsageLimitIntervalCount,
                        }),
                    });
            }
            return eA && null != eE
                ? (0, l.jsx)(a.J, {
                      gradientColor: "nitro-pink",
                      Icon: i.t,
                      text: M.intl.format(R.default["7sYIBL"], { savingsPercent: eE }),
                  })
                : null;
        }, [ed, em, G, ec, H, eE, eA]),
        eP = (0, g.G)(q.id),
        eS = r.useMemo(() => (eP ? (0, l.jsx)(I.a, {}) : null), [eP]),
        ef = (0, h.I)({ skuId: q.skuId, isGift: W }),
        e_ = r.useMemo(() => (null != ey ? ey : null != eS ? eS : null), [ey, eS]),
        eT = r.useMemo(() => {
            let e = [];
            return (
                null != ea && e.push({ type: "info", message: ea, key: "payment-source-optional-warning" }),
                ep
                    ? e.push({
                          directContent: (0, l.jsx)(T.l$, {
                              fractionalPremiumInfo: el,
                              isEligibleForTrial: k,
                              trialPeriodCopy: eu,
                              subscriptionPeriodEnd: K,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ei && e.push({ type: "info", message: (0, f.Nn)(), key: "premium-group-purchase-notice" }),
                null != ef && e.push({ directContent: ef, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [ea, ep, el, k, eu, K, ei, ef]),
        eI = null != H ? H.invoicePreview : null,
        { priceOptions: eN, planPricesLoading: ex } = (0, S.Pr)(Y, eI, F),
        eg = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eT,
            planSelectContent: J
                ? (0, l.jsx)(T.XH, {
                      disabled: w.disabled,
                      selectedPlanId: n,
                      priceOptions: eN,
                      planOptions: $,
                      subscriptionPeriodEnd: K,
                      planPricesLoading: ex,
                  })
                : void 0,
            paymentMethodContent: es,
            promotionalNoticeContent: e_,
        };
    if (null == H && null != F) return (0, l.jsx)(o.T, { ...eg, legalContent: null });
    if (null == H || H.type === P.N$.LOADING) return (0, l.jsx)(o.E, {});
    let ev = null != eo ? eo.subscription_trial : void 0,
        eM =
            H.type === P.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(T.W9, {
                      invoiceSummaryTypeWithPreview: H,
                      subscriptionPlan: q,
                      isPrepaidPaymentSource: z,
                      subscriptionTrial: ev,
                      isCustomGift: X,
                  }),
        eR = null;
    if (
        !z &&
        (P.IJ.has(H.type) || H.type === P.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in H &&
        null != H.renewalInvoicePreview
    ) {
        let e = (0, x.Gj)(H.invoicePreview, H.renewalInvoicePreview, ev, {
            discountOffer: G,
            isSubscriptionUpdate: null != en,
            fractionalPremiumInfo: el,
        });
        eR = (0, l.jsx)(p._, { ...e });
    }
    let eb = J
            ? void 0
            : (0, l.jsx)(N._, {
                  type: H.type,
                  invoicePreview: H.invoicePreview,
                  storeListing: U,
                  subscriptionPlan: q,
                  isPrepaidPaymentSource: z,
                  giftRecipient: V,
                  isPremiumGroupPurchase: ei,
                  guildId: B,
              }),
        ej = (0, l.jsx)(T.PI, {
            planGroup: L,
            activeSubscription: en,
            isTrial: j,
            plan: q,
            isGift: W,
            paymentSourceType: ee,
            isPrepaidPaymentSource: z,
            invoiceSummaryTypeWithPreview: H,
            fractionalPremiumInfo: el,
        }),
        eL =
            H.type === P.N$.PREMIUM_WITH_TRIAL
                ? (0, x.ib)(H.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: H.invoicePreview });
    return (0, l.jsx)(o.T, {
        ...eg,
        purchaseItemContent: eb,
        subscriptionDetailsContent: eR,
        invoiceSummaryContent: eM,
        legalContent: ej,
        invoiceTotalDueValue: eL,
        invoiceTotalDueLabel: W ? M.intl.string(R.default.Zxav97) : M.intl.string(R.default.R0cZsM),
    });
};
