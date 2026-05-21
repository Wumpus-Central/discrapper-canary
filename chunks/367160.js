n.d(t, { _: () => b }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(17928),
    r = n(403581),
    s = n(262427),
    o = n(854354),
    u = n(717925),
    c = n(214891),
    d = n(669510),
    p = n(234419),
    m = n(361597),
    h = n(815545),
    C = n(209030),
    A = n(299301),
    y = n(773669),
    E = n(428262),
    P = n(834252),
    S = n(222707),
    _ = n(421094),
    f = n(340034),
    T = n(755880),
    I = n(134638),
    x = n(888751),
    N = n(906234),
    g = n(788868),
    v = n(375708),
    M = n(327105);
let b = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            handlePaymentSourceAdd: b,
            isTrial: j,
            planGroup: R,
            isDiscount: L,
            metadata: O,
        } = e,
        D = (0, C.L)(e),
        { isEligibleForTrial: w, discountOffer: U, selectedStoreListing: k, priceOptions: Y } = (0, P.P5)(),
        G = O?.guild_id ?? void 0,
        {
            isGift: F,
            giftRecipient: B,
            invoiceSummaryTypeWithPreview: W,
            subscriptionPeriodEnd: V,
            proratedInvoicePreview: H,
            plan: K,
            isPrepaid: Z,
            premiumPlanOptions: q,
            shouldAllowPlanSelect: z,
            isCustomGift: $,
            hasEntitlements: J,
            paymentSourceType: X,
            eligiblePaymentGateways: Q,
            activeSubscription: ee,
            fractionalPremiumInfo: et,
            disabled: en,
            isPremiumGroupPurchase: el,
            paymentSourceOptionalWarningCopy: ea,
        } = D,
        ei = (0, l.jsx)(_.K, {
            label: v.intl.string(v.t["u+Cw58"]),
            handlePaymentSourceAdd: b,
            isTrial: j,
            isDiscount: L,
            disabled: en,
            hasEntitlements: J,
            eligiblePaymentGateways: Q,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        er = (0, p.V)(t),
        { copy: es, daysCount: eo, userTrialOffer: eu } = (0, m.O8)(),
        ec = (0, S.pt)({
            fractionalPremiumInfo: et,
            selectedPlanId: n,
            planGroup: R,
            premiumSubscription: ee,
            isGift: F,
        }),
        ed = a.useMemo(() => null != U && null != U.discount && null != H && (0, h.Ro)(H, U.discount.id), [U, H]),
        { setHeaderBadgeText: ep, unsetHeaderBadgeText: em } = (0, c.v)(),
        eh = F && K.interval === g.WT.YEAR && (0, E.xq)(K.id),
        eC = (0, E.L_)({ planId: K.id, isGift: !0, priceOptions: Y, subscriptionPlan: K }),
        eA = ["en-US", "en-GB"].includes((0, i.bG)([y.default], () => y.default.locale));
    a.useEffect(
        () => (
            null != eC && eh && eA && ep(v.intl.formatToPlainString(M.default["Mi5BH/"], { percentOff: eC })),
            () => {
                em();
            }
        ),
        [eC, ep, em, eh, eA],
    );
    let ey = a.useMemo(() => {
            if (null != W && W.type === A.N$.PREMIUM_WITH_TRIAL && null != eu)
                return (0, l.jsx)(s.J, {
                    gradientColor: "nitro-pink",
                    Icon: r.t,
                    text: v.intl.format(M.default.IAsfR5, { daysCount: eo }),
                });
            if (null != U && ed) {
                let e = U.discount;
                if (e.userUsageLimitInterval === g.Ff.MONTH)
                    return (0, l.jsx)(s.J, {
                        gradientColor: "nitro-pink",
                        Icon: r.t,
                        text: v.intl.format(M.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.userUsageLimitIntervalCount,
                        }),
                    });
            }
            return eh && eA && null != eC
                ? (0, l.jsx)(s.J, {
                      gradientColor: "nitro-pink",
                      Icon: r.t,
                      text: v.intl.format(M.default["7sYIBL"], { savingsPercent: eC }),
                  })
                : null;
        }, [eA, eu, ed, U, eo, W, eC, eh]),
        eE = (0, N.G)(K.id),
        eP = a.useMemo(() => (eE ? (0, l.jsx)(T.a, {}) : null), [eE]),
        eS = a.useMemo(() => (null != ey ? ey : null != eP ? eP : null), [ey, eP]),
        e_ = a.useMemo(() => {
            let e = [];
            return (
                null != ea && e.push({ type: "info", message: ea, key: "payment-source-optional-warning" }),
                ec
                    ? e.push({
                          directContent: (0, l.jsx)(f.l$, {
                              fractionalPremiumInfo: et,
                              isEligibleForTrial: w,
                              trialPeriodCopy: es,
                              subscriptionPeriodEnd: V,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : el && e.push({ type: "info", message: (0, S.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [ea, ec, et, w, es, V, el]),
        ef = (0, E.l6)(Y, null != W ? W.invoicePreview?.checkoutContext?.available_plans : void 0),
        eT = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: e_,
            planSelectContent: z
                ? (0, l.jsx)(f.XH, {
                      disabled: D.disabled,
                      selectedPlanId: n,
                      priceOptions: ef,
                      planOptions: q,
                      subscriptionPeriodEnd: V,
                  })
                : void 0,
            paymentSelectContent: ei,
            promotionalNoticeContent: eS,
        };
    if (null == W) return (0, l.jsx)(u.T, { ...eT, legalContent: null });
    if (W.type === A.N$.LOADING) return (0, l.jsx)(u.E, {});
    let eI = null != er ? er.subscription_trial : void 0,
        ex =
            W.type === A.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(f.W9, {
                      invoiceSummaryTypeWithPreview: W,
                      subscriptionPlan: K,
                      isPrepaidPaymentSource: Z,
                      subscriptionTrial: eI,
                      isCustomGift: $,
                  }),
        eN = null;
    if (
        !Z &&
        (A.IJ.has(W.type) || W.type === A.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in W &&
        null != W.renewalInvoicePreview
    ) {
        let e = (0, x.Gj)(W.invoicePreview, W.renewalInvoicePreview, eI, {
            discountOffer: U,
            isSubscriptionUpdate: null != ee,
            fractionalPremiumInfo: et,
        });
        eN = (0, l.jsx)(d._, { ...e });
    }
    let eg = z
            ? void 0
            : (0, l.jsx)(I._, {
                  type: W.type,
                  invoicePreview: W.invoicePreview,
                  storeListing: k,
                  subscriptionPlan: K,
                  isPrepaidPaymentSource: Z,
                  giftRecipient: B,
                  isPremiumGroupPurchase: el,
                  guildId: G,
              }),
        ev = (0, l.jsx)(f.PI, {
            planGroup: R,
            activeSubscription: ee,
            isTrial: j,
            plan: K,
            isGift: F,
            paymentSourceType: X,
            isPrepaidPaymentSource: Z,
            invoiceSummaryTypeWithPreview: W,
            fractionalPremiumInfo: et,
        }),
        eM =
            W.type === A.N$.PREMIUM_WITH_TRIAL
                ? (0, x.ib)(W.invoicePreview.currency)
                : (0, o.kw)({ subscriptionInvoiceRecord: W.invoicePreview });
    return (0, l.jsx)(u.T, {
        ...eT,
        purchaseItemContent: eg,
        subscriptionDetailsContent: eN,
        invoiceSummaryContent: ex,
        legalContent: ev,
        invoiceTotalDueValue: eM,
        invoiceTotalDueLabel: F ? v.intl.string(M.default.Zxav97) : v.intl.string(M.default.R0cZsM),
    });
};
