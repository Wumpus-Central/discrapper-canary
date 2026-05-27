n.d(t, { _: () => j }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(403581),
    a = n(262427),
    s = n(854354),
    o = n(717925),
    u = n(463376),
    c = n(214891),
    d = n(669510),
    p = n(722847),
    m = n(995835),
    h = n(234419),
    C = n(361597),
    A = n(815545),
    y = n(209030),
    E = n(299301),
    P = n(428262),
    S = n(834252),
    f = n(222707),
    _ = n(421094),
    T = n(340034),
    I = n(755880),
    x = n(134638),
    N = n(888751),
    g = n(906234),
    v = n(788868),
    M = n(375708),
    b = n(327105);
let j = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            handlePaymentSourceAdd: j,
            isTrial: R,
            planGroup: L,
            isDiscount: O,
            metadata: D,
        } = e,
        w = (0, y.L)(e),
        { selectedStoreListing: U } = (0, S.P5)(),
        { isEligibleForTrial: k, discountOffer: G } = (0, u.i)(),
        { checkoutPriceOptions: Y, checkoutInvoiceError: F } = (0, p.t4)((e) => ({
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
            premiumPlanOptions: J,
            shouldAllowPlanSelect: $,
            isCustomGift: X,
            hasEntitlements: Q,
            paymentSourceType: ee,
            eligiblePaymentGateways: et,
            activeSubscription: en,
            fractionalPremiumInfo: el,
            disabled: ei,
            isPremiumGroupPurchase: er,
            paymentSourceOptionalWarningCopy: ea,
        } = w,
        es = (0, l.jsx)(_.K, {
            label: M.intl.string(M.t["u+Cw58"]),
            handlePaymentSourceAdd: j,
            isTrial: R,
            isDiscount: O,
            disabled: ei,
            hasEntitlements: Q,
            eligiblePaymentGateways: et,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        eo = (0, h.V)(t),
        { copy: eu, daysCount: ec, userTrialOffer: ed } = (0, C.O8)(),
        ep = (0, f.pt)({
            fractionalPremiumInfo: el,
            selectedPlanId: n,
            planGroup: L,
            premiumSubscription: en,
            isGift: W,
        }),
        em = i.useMemo(() => null != G && null != G.discount && null != Z && (0, A.Ro)(Z, G.discount.id), [G, Z]),
        { setHeaderBadgeText: eh, unsetHeaderBadgeText: eC } = (0, c.v)(),
        eA = W && q.interval === v.WT.YEAR && (0, P.xq)(q.id),
        ey = (0, P.L_)({ planId: q.id, isGift: !0, priceOptions: Y, subscriptionPlan: q });
    i.useEffect(
        () => (
            null != ey && eA && eh(M.intl.formatToPlainString(b.default["Mi5BH/"], { percentOff: ey })),
            () => {
                eC();
            }
        ),
        [ey, eh, eC, eA],
    );
    let eE = i.useMemo(() => {
            if (null != H && H.type === E.N$.PREMIUM_WITH_TRIAL && null != ed)
                return (0, l.jsx)(a.J, {
                    gradientColor: "nitro-pink",
                    Icon: r.t,
                    text: M.intl.format(b.default.IAsfR5, { daysCount: ec }),
                });
            if (null != G && em) {
                let e = G.discount;
                if (e.userUsageLimitInterval === v.Ff.MONTH)
                    return (0, l.jsx)(a.J, {
                        gradientColor: "nitro-pink",
                        Icon: r.t,
                        text: M.intl.format(b.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.userUsageLimitIntervalCount,
                        }),
                    });
            }
            return eA && null != ey
                ? (0, l.jsx)(a.J, {
                      gradientColor: "nitro-pink",
                      Icon: r.t,
                      text: M.intl.format(b.default["7sYIBL"], { savingsPercent: ey }),
                  })
                : null;
        }, [ed, em, G, ec, H, ey, eA]),
        eP = (0, g.G)(q.id),
        eS = i.useMemo(() => (eP ? (0, l.jsx)(I.a, {}) : null), [eP]),
        ef = (0, m.I)({ skuId: q.skuId, isGift: W }),
        e_ = i.useMemo(() => (null != eE ? eE : null != eS ? eS : null), [eE, eS]),
        eT = i.useMemo(() => {
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
                    : er && e.push({ type: "info", message: (0, f.Nn)(), key: "premium-group-purchase-notice" }),
                null != ef && e.push({ directContent: ef, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [ea, ep, el, k, eu, K, er, ef]),
        eI = null != H ? H.invoicePreview : null,
        { priceOptions: ex, planPricesLoading: eN } = (0, P.Pr)(Y, eI, F),
        eg = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eT,
            planSelectContent: $
                ? (0, l.jsx)(T.XH, {
                      disabled: w.disabled,
                      selectedPlanId: n,
                      priceOptions: ex,
                      planOptions: J,
                      subscriptionPeriodEnd: K,
                      planPricesLoading: eN,
                  })
                : void 0,
            paymentMethodContent: es,
            promotionalNoticeContent: e_,
        };
    if (null == H && null != F) return (0, l.jsx)(o.T, { ...eg, legalContent: null });
    if (null == H || H.type === E.N$.LOADING) return (0, l.jsx)(o.E, {});
    let ev = null != eo ? eo.subscription_trial : void 0,
        eM =
            H.type === E.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(T.W9, {
                      invoiceSummaryTypeWithPreview: H,
                      subscriptionPlan: q,
                      isPrepaidPaymentSource: z,
                      subscriptionTrial: ev,
                      isCustomGift: X,
                  }),
        eb = null;
    if (
        !z &&
        (E.IJ.has(H.type) || H.type === E.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in H &&
        null != H.renewalInvoicePreview
    ) {
        let e = (0, N.Gj)(H.invoicePreview, H.renewalInvoicePreview, ev, {
            discountOffer: G,
            isSubscriptionUpdate: null != en,
            fractionalPremiumInfo: el,
        });
        eb = (0, l.jsx)(d._, { ...e });
    }
    let ej = $
            ? void 0
            : (0, l.jsx)(x._, {
                  type: H.type,
                  invoicePreview: H.invoicePreview,
                  storeListing: U,
                  subscriptionPlan: q,
                  isPrepaidPaymentSource: z,
                  giftRecipient: V,
                  isPremiumGroupPurchase: er,
                  guildId: B,
              }),
        eR = (0, l.jsx)(T.PI, {
            planGroup: L,
            activeSubscription: en,
            isTrial: R,
            plan: q,
            isGift: W,
            paymentSourceType: ee,
            isPrepaidPaymentSource: z,
            invoiceSummaryTypeWithPreview: H,
            fractionalPremiumInfo: el,
        }),
        eL =
            H.type === E.N$.PREMIUM_WITH_TRIAL
                ? (0, N.ib)(H.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: H.invoicePreview });
    return (0, l.jsx)(o.T, {
        ...eg,
        purchaseItemContent: ej,
        subscriptionDetailsContent: eb,
        invoiceSummaryContent: eM,
        legalContent: eR,
        invoiceTotalDueValue: eL,
        invoiceTotalDueLabel: W ? M.intl.string(b.default.Zxav97) : M.intl.string(b.default.R0cZsM),
    });
};
