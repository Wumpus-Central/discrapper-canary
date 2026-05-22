n.d(t, { _: () => j }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(17928),
    r = n(403581),
    s = n(262427),
    o = n(854354),
    u = n(717925),
    c = n(214891),
    d = n(669510),
    p = n(671744),
    m = n(234419),
    h = n(361597),
    C = n(815545),
    A = n(209030),
    y = n(299301),
    E = n(773669),
    P = n(428262),
    S = n(834252),
    _ = n(222707),
    f = n(421094),
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
        w = (0, A.L)(e),
        { isEligibleForTrial: U, discountOffer: k, selectedStoreListing: Y } = (0, S.P5)(),
        G = (0, p.t4)((e) => e.checkoutPriceOptions),
        F = D?.guild_id ?? void 0,
        {
            isGift: B,
            giftRecipient: W,
            invoiceSummaryTypeWithPreview: V,
            subscriptionPeriodEnd: H,
            proratedInvoicePreview: K,
            plan: Z,
            isPrepaid: q,
            premiumPlanOptions: z,
            shouldAllowPlanSelect: J,
            isCustomGift: $,
            hasEntitlements: X,
            paymentSourceType: Q,
            eligiblePaymentGateways: ee,
            activeSubscription: et,
            fractionalPremiumInfo: en,
            disabled: el,
            isPremiumGroupPurchase: ea,
            paymentSourceOptionalWarningCopy: ei,
        } = w,
        er = (0, l.jsx)(f.K, {
            label: M.intl.string(M.t["u+Cw58"]),
            handlePaymentSourceAdd: j,
            isTrial: R,
            isDiscount: O,
            disabled: el,
            hasEntitlements: X,
            eligiblePaymentGateways: ee,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        es = (0, m.V)(t),
        { copy: eo, daysCount: eu, userTrialOffer: ec } = (0, h.O8)(),
        ed = (0, _.pt)({
            fractionalPremiumInfo: en,
            selectedPlanId: n,
            planGroup: L,
            premiumSubscription: et,
            isGift: B,
        }),
        ep = a.useMemo(() => null != k && null != k.discount && null != K && (0, C.Ro)(K, k.discount.id), [k, K]),
        { setHeaderBadgeText: em, unsetHeaderBadgeText: eh } = (0, c.v)(),
        eC = B && Z.interval === v.WT.YEAR && (0, P.xq)(Z.id),
        eA = (0, P.L_)({ planId: Z.id, isGift: !0, priceOptions: G, subscriptionPlan: Z }),
        ey = ["en-US", "en-GB"].includes((0, i.bG)([E.default], () => E.default.locale));
    a.useEffect(
        () => (
            null != eA && eC && ey && em(M.intl.formatToPlainString(b.default["Mi5BH/"], { percentOff: eA })),
            () => {
                eh();
            }
        ),
        [eA, em, eh, eC, ey],
    );
    let eE = a.useMemo(() => {
            if (null != V && V.type === y.N$.PREMIUM_WITH_TRIAL && null != ec)
                return (0, l.jsx)(s.J, {
                    gradientColor: "nitro-pink",
                    Icon: r.t,
                    text: M.intl.format(b.default.IAsfR5, { daysCount: eu }),
                });
            if (null != k && ep) {
                let e = k.discount;
                if (e.userUsageLimitInterval === v.Ff.MONTH)
                    return (0, l.jsx)(s.J, {
                        gradientColor: "nitro-pink",
                        Icon: r.t,
                        text: M.intl.format(b.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.userUsageLimitIntervalCount,
                        }),
                    });
            }
            return eC && ey && null != eA
                ? (0, l.jsx)(s.J, {
                      gradientColor: "nitro-pink",
                      Icon: r.t,
                      text: M.intl.format(b.default["7sYIBL"], { savingsPercent: eA }),
                  })
                : null;
        }, [ey, ec, ep, k, eu, V, eA, eC]),
        eP = (0, g.G)(Z.id),
        eS = a.useMemo(() => (eP ? (0, l.jsx)(I.a, {}) : null), [eP]),
        e_ = a.useMemo(() => (null != eE ? eE : null != eS ? eS : null), [eE, eS]),
        ef = a.useMemo(() => {
            let e = [];
            return (
                null != ei && e.push({ type: "info", message: ei, key: "payment-source-optional-warning" }),
                ed
                    ? e.push({
                          directContent: (0, l.jsx)(T.l$, {
                              fractionalPremiumInfo: en,
                              isEligibleForTrial: U,
                              trialPeriodCopy: eo,
                              subscriptionPeriodEnd: H,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ea && e.push({ type: "info", message: (0, _.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [ei, ed, en, U, eo, H, ea]),
        eT = (0, P.l6)(G, null != V ? V.invoicePreview?.checkoutContext?.available_plans : void 0),
        eI = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: ef,
            planSelectContent: J
                ? (0, l.jsx)(T.XH, {
                      disabled: w.disabled,
                      selectedPlanId: n,
                      priceOptions: eT,
                      planOptions: z,
                      subscriptionPeriodEnd: H,
                  })
                : void 0,
            paymentSelectContent: er,
            promotionalNoticeContent: e_,
        };
    if (null == V) return (0, l.jsx)(u.T, { ...eI, legalContent: null });
    if (V.type === y.N$.LOADING) return (0, l.jsx)(u.E, {});
    let ex = null != es ? es.subscription_trial : void 0,
        eN =
            V.type === y.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(T.W9, {
                      invoiceSummaryTypeWithPreview: V,
                      subscriptionPlan: Z,
                      isPrepaidPaymentSource: q,
                      subscriptionTrial: ex,
                      isCustomGift: $,
                  }),
        eg = null;
    if (
        !q &&
        (y.IJ.has(V.type) || V.type === y.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in V &&
        null != V.renewalInvoicePreview
    ) {
        let e = (0, N.Gj)(V.invoicePreview, V.renewalInvoicePreview, ex, {
            discountOffer: k,
            isSubscriptionUpdate: null != et,
            fractionalPremiumInfo: en,
        });
        eg = (0, l.jsx)(d._, { ...e });
    }
    let ev = J
            ? void 0
            : (0, l.jsx)(x._, {
                  type: V.type,
                  invoicePreview: V.invoicePreview,
                  storeListing: Y,
                  subscriptionPlan: Z,
                  isPrepaidPaymentSource: q,
                  giftRecipient: W,
                  isPremiumGroupPurchase: ea,
                  guildId: F,
              }),
        eM = (0, l.jsx)(T.PI, {
            planGroup: L,
            activeSubscription: et,
            isTrial: R,
            plan: Z,
            isGift: B,
            paymentSourceType: Q,
            isPrepaidPaymentSource: q,
            invoiceSummaryTypeWithPreview: V,
            fractionalPremiumInfo: en,
        }),
        eb =
            V.type === y.N$.PREMIUM_WITH_TRIAL
                ? (0, N.ib)(V.invoicePreview.currency)
                : (0, o.kw)({ subscriptionInvoiceRecord: V.invoicePreview });
    return (0, l.jsx)(u.T, {
        ...eI,
        purchaseItemContent: ev,
        subscriptionDetailsContent: eg,
        invoiceSummaryContent: eN,
        legalContent: eM,
        invoiceTotalDueValue: eb,
        invoiceTotalDueLabel: B ? M.intl.string(b.default.Zxav97) : M.intl.string(b.default.R0cZsM),
    });
};
