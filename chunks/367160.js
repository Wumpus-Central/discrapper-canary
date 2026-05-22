n.d(t, { _: () => R }), n(321073);
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
    m = n(995835),
    h = n(234419),
    C = n(361597),
    A = n(815545),
    y = n(209030),
    E = n(299301),
    P = n(773669),
    S = n(428262),
    _ = n(834252),
    f = n(222707),
    T = n(421094),
    I = n(340034),
    x = n(755880),
    N = n(134638),
    g = n(888751),
    v = n(906234),
    M = n(788868),
    b = n(375708),
    j = n(327105);
let R = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            handlePaymentSourceAdd: R,
            isTrial: L,
            planGroup: O,
            isDiscount: D,
            metadata: w,
        } = e,
        U = (0, y.L)(e),
        { isEligibleForTrial: k, discountOffer: Y, selectedStoreListing: G } = (0, _.P5)(),
        F = (0, p.t4)((e) => e.checkoutPriceOptions),
        B = w?.guild_id ?? void 0,
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
            disabled: ea,
            isPremiumGroupPurchase: ei,
            paymentSourceOptionalWarningCopy: er,
        } = U,
        es = (0, l.jsx)(T.K, {
            label: b.intl.string(b.t["u+Cw58"]),
            handlePaymentSourceAdd: R,
            isTrial: L,
            isDiscount: D,
            disabled: ea,
            hasEntitlements: Q,
            eligiblePaymentGateways: et,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        eo = (0, h.V)(t),
        { copy: eu, daysCount: ec, userTrialOffer: ed } = (0, C.O8)(),
        ep = (0, f.pt)({
            fractionalPremiumInfo: el,
            selectedPlanId: n,
            planGroup: O,
            premiumSubscription: en,
            isGift: W,
        }),
        em = a.useMemo(() => null != Y && null != Y.discount && null != Z && (0, A.Ro)(Z, Y.discount.id), [Y, Z]),
        { setHeaderBadgeText: eh, unsetHeaderBadgeText: eC } = (0, c.v)(),
        eA = W && q.interval === M.WT.YEAR && (0, S.xq)(q.id),
        ey = (0, S.L_)({ planId: q.id, isGift: !0, priceOptions: F, subscriptionPlan: q }),
        eE = ["en-US", "en-GB"].includes((0, i.bG)([P.default], () => P.default.locale));
    a.useEffect(
        () => (
            null != ey && eA && eE && eh(b.intl.formatToPlainString(j.default["Mi5BH/"], { percentOff: ey })),
            () => {
                eC();
            }
        ),
        [ey, eh, eC, eA, eE],
    );
    let eP = a.useMemo(() => {
            if (null != H && H.type === E.N$.PREMIUM_WITH_TRIAL && null != ed)
                return (0, l.jsx)(s.J, {
                    gradientColor: "nitro-pink",
                    Icon: r.t,
                    text: b.intl.format(j.default.IAsfR5, { daysCount: ec }),
                });
            if (null != Y && em) {
                let e = Y.discount;
                if (e.userUsageLimitInterval === M.Ff.MONTH)
                    return (0, l.jsx)(s.J, {
                        gradientColor: "nitro-pink",
                        Icon: r.t,
                        text: b.intl.format(j.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.userUsageLimitIntervalCount,
                        }),
                    });
            }
            return eA && eE && null != ey
                ? (0, l.jsx)(s.J, {
                      gradientColor: "nitro-pink",
                      Icon: r.t,
                      text: b.intl.format(j.default["7sYIBL"], { savingsPercent: ey }),
                  })
                : null;
        }, [eE, ed, em, Y, ec, H, ey, eA]),
        eS = (0, v.G)(q.id),
        e_ = a.useMemo(() => (eS ? (0, l.jsx)(x.a, {}) : null), [eS]),
        ef = (0, m.I)({ skuId: q.skuId, isGift: W }),
        eT = a.useMemo(() => (null != eP ? eP : null != e_ ? e_ : null), [eP, e_]),
        eI = a.useMemo(() => {
            let e = [];
            return (
                null != er && e.push({ type: "info", message: er, key: "payment-source-optional-warning" }),
                ep
                    ? e.push({
                          directContent: (0, l.jsx)(I.l$, {
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
        }, [er, ep, el, k, eu, K, ei, ef]),
        ex = (0, S.l6)(F, null != H ? H.invoicePreview?.checkoutContext?.available_plans : void 0),
        eN = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eI,
            planSelectContent: $
                ? (0, l.jsx)(I.XH, {
                      disabled: U.disabled,
                      selectedPlanId: n,
                      priceOptions: ex,
                      planOptions: J,
                      subscriptionPeriodEnd: K,
                  })
                : void 0,
            paymentSelectContent: es,
            promotionalNoticeContent: eT,
        };
    if (null == H) return (0, l.jsx)(u.T, { ...eN, legalContent: null });
    if (H.type === E.N$.LOADING) return (0, l.jsx)(u.E, {});
    let eg = null != eo ? eo.subscription_trial : void 0,
        ev =
            H.type === E.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(I.W9, {
                      invoiceSummaryTypeWithPreview: H,
                      subscriptionPlan: q,
                      isPrepaidPaymentSource: z,
                      subscriptionTrial: eg,
                      isCustomGift: X,
                  }),
        eM = null;
    if (
        !z &&
        (E.IJ.has(H.type) || H.type === E.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in H &&
        null != H.renewalInvoicePreview
    ) {
        let e = (0, g.Gj)(H.invoicePreview, H.renewalInvoicePreview, eg, {
            discountOffer: Y,
            isSubscriptionUpdate: null != en,
            fractionalPremiumInfo: el,
        });
        eM = (0, l.jsx)(d._, { ...e });
    }
    let eb = $
            ? void 0
            : (0, l.jsx)(N._, {
                  type: H.type,
                  invoicePreview: H.invoicePreview,
                  storeListing: G,
                  subscriptionPlan: q,
                  isPrepaidPaymentSource: z,
                  giftRecipient: V,
                  isPremiumGroupPurchase: ei,
                  guildId: B,
              }),
        ej = (0, l.jsx)(I.PI, {
            planGroup: O,
            activeSubscription: en,
            isTrial: L,
            plan: q,
            isGift: W,
            paymentSourceType: ee,
            isPrepaidPaymentSource: z,
            invoiceSummaryTypeWithPreview: H,
            fractionalPremiumInfo: el,
        }),
        eR =
            H.type === E.N$.PREMIUM_WITH_TRIAL
                ? (0, g.ib)(H.invoicePreview.currency)
                : (0, o.kw)({ subscriptionInvoiceRecord: H.invoicePreview });
    return (0, l.jsx)(u.T, {
        ...eN,
        purchaseItemContent: eb,
        subscriptionDetailsContent: eM,
        invoiceSummaryContent: ev,
        legalContent: ej,
        invoiceTotalDueValue: eR,
        invoiceTotalDueLabel: W ? b.intl.string(j.default.Zxav97) : b.intl.string(j.default.R0cZsM),
    });
};
