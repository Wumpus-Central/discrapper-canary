n.d(t, { _: () => R }), n(321073);
var l = n(627968),
    i = n(64700),
    a = n(403581),
    r = n(262427),
    s = n(854354),
    o = n(682481),
    u = n(717925),
    c = n(463376),
    d = n(214891),
    p = n(669510),
    m = n(722847),
    h = n(995835),
    C = n(234419),
    A = n(361597),
    y = n(815545),
    E = n(209030),
    P = n(299301),
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
        U = (0, E.L)(e),
        { selectedStoreListing: k } = (0, _.P5)(),
        { isEligibleForTrial: G, discountOffer: Y } = (0, c.i)(),
        F = (0, m.t4)((e) => e.checkoutPriceOptions),
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
            disabled: ei,
            isPremiumGroupPurchase: ea,
            paymentSourceOptionalWarningCopy: er,
        } = U,
        es = (0, l.jsx)(o.y, {
            children: (0, l.jsx)(T.K, {
                label: b.intl.string(b.t["u+Cw58"]),
                handlePaymentSourceAdd: R,
                isTrial: L,
                isDiscount: D,
                disabled: ei,
                hasEntitlements: Q,
                eligiblePaymentGateways: et,
                shouldUseUnifiedCheckoutUI: !0,
            }),
        }),
        eo = (0, C.V)(t),
        { copy: eu, daysCount: ec, userTrialOffer: ed } = (0, A.O8)(),
        ep = (0, f.pt)({
            fractionalPremiumInfo: el,
            selectedPlanId: n,
            planGroup: O,
            premiumSubscription: en,
            isGift: W,
        }),
        em = i.useMemo(() => null != Y && null != Y.discount && null != Z && (0, y.Ro)(Z, Y.discount.id), [Y, Z]),
        { setHeaderBadgeText: eh, unsetHeaderBadgeText: eC } = (0, d.v)(),
        eA = W && q.interval === M.WT.YEAR && (0, S.xq)(q.id),
        ey = (0, S.L_)({ planId: q.id, isGift: !0, priceOptions: F, subscriptionPlan: q });
    i.useEffect(
        () => (
            null != ey && eA && eh(b.intl.formatToPlainString(j.default["Mi5BH/"], { percentOff: ey })),
            () => {
                eC();
            }
        ),
        [ey, eh, eC, eA],
    );
    let eE = i.useMemo(() => {
            if (null != H && H.type === P.N$.PREMIUM_WITH_TRIAL && null != ed)
                return (0, l.jsx)(r.J, {
                    gradientColor: "nitro-pink",
                    Icon: a.t,
                    text: b.intl.format(j.default.IAsfR5, { daysCount: ec }),
                });
            if (null != Y && em) {
                let e = Y.discount;
                if (e.userUsageLimitInterval === M.Ff.MONTH)
                    return (0, l.jsx)(r.J, {
                        gradientColor: "nitro-pink",
                        Icon: a.t,
                        text: b.intl.format(j.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.userUsageLimitIntervalCount,
                        }),
                    });
            }
            return eA && null != ey
                ? (0, l.jsx)(r.J, {
                      gradientColor: "nitro-pink",
                      Icon: a.t,
                      text: b.intl.format(j.default["7sYIBL"], { savingsPercent: ey }),
                  })
                : null;
        }, [ed, em, Y, ec, H, ey, eA]),
        eP = (0, v.G)(q.id),
        eS = i.useMemo(() => (eP ? (0, l.jsx)(x.a, {}) : null), [eP]),
        e_ = (0, h.I)({ skuId: q.skuId, isGift: W }),
        ef = i.useMemo(() => (null != eE ? eE : null != eS ? eS : null), [eE, eS]),
        eT = i.useMemo(() => {
            let e = [];
            return (
                null != er && e.push({ type: "info", message: er, key: "payment-source-optional-warning" }),
                ep
                    ? e.push({
                          directContent: (0, l.jsx)(I.l$, {
                              fractionalPremiumInfo: el,
                              isEligibleForTrial: G,
                              trialPeriodCopy: eu,
                              subscriptionPeriodEnd: K,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ea && e.push({ type: "info", message: (0, f.Nn)(), key: "premium-group-purchase-notice" }),
                null != e_ && e.push({ directContent: e_, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [er, ep, el, G, eu, K, ea, e_]),
        eI = (0, S.l6)(F, null != H ? H.invoicePreview?.checkoutContext?.available_plans : void 0),
        ex = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eT,
            planSelectContent: $
                ? (0, l.jsx)(I.XH, {
                      disabled: U.disabled,
                      selectedPlanId: n,
                      priceOptions: eI,
                      planOptions: J,
                      subscriptionPeriodEnd: K,
                  })
                : void 0,
            paymentMethodContent: es,
            promotionalNoticeContent: ef,
        };
    if (null == H) return (0, l.jsx)(u.T, { ...ex, legalContent: null });
    if (H.type === P.N$.LOADING) return (0, l.jsx)(u.E, {});
    let eN = null != eo ? eo.subscription_trial : void 0,
        eg =
            H.type === P.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(I.W9, {
                      invoiceSummaryTypeWithPreview: H,
                      subscriptionPlan: q,
                      isPrepaidPaymentSource: z,
                      subscriptionTrial: eN,
                      isCustomGift: X,
                  }),
        ev = null;
    if (
        !z &&
        (P.IJ.has(H.type) || H.type === P.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in H &&
        null != H.renewalInvoicePreview
    ) {
        let e = (0, g.Gj)(H.invoicePreview, H.renewalInvoicePreview, eN, {
            discountOffer: Y,
            isSubscriptionUpdate: null != en,
            fractionalPremiumInfo: el,
        });
        ev = (0, l.jsx)(p._, { ...e });
    }
    let eM = $
            ? void 0
            : (0, l.jsx)(N._, {
                  type: H.type,
                  invoicePreview: H.invoicePreview,
                  storeListing: k,
                  subscriptionPlan: q,
                  isPrepaidPaymentSource: z,
                  giftRecipient: V,
                  isPremiumGroupPurchase: ea,
                  guildId: B,
              }),
        eb = (0, l.jsx)(I.PI, {
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
        ej =
            H.type === P.N$.PREMIUM_WITH_TRIAL
                ? (0, g.ib)(H.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: H.invoicePreview });
    return (0, l.jsx)(u.T, {
        ...ex,
        purchaseItemContent: eM,
        subscriptionDetailsContent: ev,
        invoiceSummaryContent: eg,
        legalContent: eb,
        invoiceTotalDueValue: ej,
        invoiceTotalDueLabel: W ? b.intl.string(j.default.Zxav97) : b.intl.string(j.default.R0cZsM),
    });
};
