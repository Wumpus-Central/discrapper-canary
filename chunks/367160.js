n.d(t, { _: () => v }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(403581),
    r = n(262427),
    s = n(854354),
    o = n(725836),
    u = n(717925),
    c = n(669510),
    d = n(234419),
    p = n(361597),
    m = n(815545),
    h = n(209030),
    C = n(299301),
    A = n(428262),
    y = n(834252),
    E = n(222707),
    P = n(421094),
    S = n(340034),
    _ = n(755880),
    T = n(134638),
    f = n(888751),
    I = n(906234),
    x = n(788868),
    N = n(375708),
    g = n(327105);
let v = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            handlePaymentSourceAdd: v,
            isTrial: M,
            planGroup: b,
            isDiscount: j,
            metadata: R,
        } = e,
        L = (0, h.L)(e),
        { isEligibleForTrial: O, discountOffer: D, selectedStoreListing: w, priceOptions: U } = (0, y.P5)(),
        k = R?.guild_id ?? void 0,
        {
            isGift: Y,
            giftRecipient: G,
            invoiceSummaryTypeWithPreview: F,
            subscriptionPeriodEnd: B,
            proratedInvoicePreview: W,
            plan: V,
            isPrepaid: H,
            premiumPlanOptions: K,
            shouldAllowPlanSelect: Z,
            isCustomGift: q,
            hasEntitlements: z,
            paymentSourceType: $,
            eligiblePaymentGateways: J,
            activeSubscription: X,
            fractionalPremiumInfo: Q,
            disabled: ee,
            isPremiumGroupPurchase: et,
            paymentSourceOptionalWarningCopy: en,
        } = L,
        el = (0, l.jsx)(P.K, {
            label: N.intl.string(N.t["u+Cw58"]),
            handlePaymentSourceAdd: v,
            isTrial: M,
            isDiscount: j,
            disabled: ee,
            hasEntitlements: z,
            eligiblePaymentGateways: J,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        ea = (0, d.V)(t),
        { copy: ei, daysCount: er, userTrialOffer: es } = (0, p.O8)(),
        eo = (0, E.pt)({
            fractionalPremiumInfo: Q,
            selectedPlanId: n,
            planGroup: b,
            premiumSubscription: X,
            isGift: Y,
        }),
        eu = a.useMemo(() => null != D && null != D.discount && null != W && (0, m.Ro)(W, D.discount.id), [D, W]),
        { setCheckoutHeaderConfigs: ec } = (0, o.ck)(),
        ed = Y && V.interval === x.WT.YEAR && (0, A.xq)(V.id),
        ep = (0, A.L_)({ planId: V.id, isGift: !0, priceOptions: U, subscriptionPlan: V });
    a.useEffect(
        () => (
            null != ep &&
                ed &&
                ec((e) => ({
                    ...e,
                    headerBadgeText: N.intl.formatToPlainString(g.default["Mi5BH/"], { percentOff: ep }),
                })),
            () => {
                ec((e) => ({ ...e, headerBadgeText: void 0 }));
            }
        ),
        [ep, ec, ed],
    );
    let em = a.useMemo(() => {
            if (null != F && F.type === C.N$.PREMIUM_WITH_TRIAL && null != es)
                return (0, l.jsx)(r.J, {
                    gradientColor: "nitro-pink",
                    Icon: i.t,
                    text: N.intl.format(g.default.IAsfR5, { daysCount: er }),
                });
            if (null != D && eu) {
                let e = D.discount;
                if (e.userUsageLimitInterval === x.Ff.MONTH)
                    return (0, l.jsx)(r.J, {
                        gradientColor: "nitro-pink",
                        Icon: i.t,
                        text: N.intl.format(g.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.userUsageLimitIntervalCount,
                        }),
                    });
            }
            return ed && null != ep
                ? (0, l.jsx)(r.J, {
                      gradientColor: "nitro-pink",
                      Icon: i.t,
                      text: N.intl.format(g.default["7sYIBL"], { savingsPercent: ep }),
                  })
                : null;
        }, [es, eu, D, er, F, ep, ed]),
        eh = (0, I.G)(V.id),
        eC = a.useMemo(() => (eh ? (0, l.jsx)(_.a, {}) : null), [eh]),
        eA = a.useMemo(() => (null != em ? em : null != eC ? eC : null), [em, eC]),
        ey = a.useMemo(() => {
            let e = [];
            return (
                null != en && e.push({ type: "info", message: en, key: "payment-source-optional-warning" }),
                eo
                    ? e.push({
                          directContent: (0, l.jsx)(S.l$, {
                              fractionalPremiumInfo: Q,
                              isEligibleForTrial: O,
                              trialPeriodCopy: ei,
                              subscriptionPeriodEnd: B,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : et && e.push({ type: "info", message: (0, E.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [en, eo, Q, O, ei, B, et]),
        eE = (0, A.l6)(U, null != F ? F.invoicePreview?.checkoutContext?.available_plans : void 0),
        eP = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: ey,
            planSelectContent: Z
                ? (0, l.jsx)(S.XH, {
                      disabled: L.disabled,
                      selectedPlanId: n,
                      priceOptions: eE,
                      planOptions: K,
                      subscriptionPeriodEnd: B,
                  })
                : void 0,
            paymentSelectContent: el,
            promotionalNoticeContent: eA,
        };
    if (null == F) return (0, l.jsx)(u.T, { ...eP, legalContent: null });
    if (F.type === C.N$.LOADING) return (0, l.jsx)(u.E, {});
    let eS = null != ea ? ea.subscription_trial : void 0,
        e_ =
            F.type === C.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(S.W9, {
                      invoiceSummaryTypeWithPreview: F,
                      subscriptionPlan: V,
                      isPrepaidPaymentSource: H,
                      subscriptionTrial: eS,
                      isCustomGift: q,
                  }),
        eT = null;
    if (
        !H &&
        (C.IJ.has(F.type) || F.type === C.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in F &&
        null != F.renewalInvoicePreview
    ) {
        let e = (0, f.Gj)(F.invoicePreview, F.renewalInvoicePreview, eS, {
            discountOffer: D,
            isSubscriptionUpdate: null != X,
            fractionalPremiumInfo: Q,
        });
        eT = (0, l.jsx)(c._, { ...e });
    }
    let ef = Z
            ? void 0
            : (0, l.jsx)(T._, {
                  type: F.type,
                  invoicePreview: F.invoicePreview,
                  storeListing: w,
                  subscriptionPlan: V,
                  isPrepaidPaymentSource: H,
                  giftRecipient: G,
                  isPremiumGroupPurchase: et,
                  guildId: k,
              }),
        eI = (0, l.jsx)(S.PI, {
            planGroup: b,
            activeSubscription: X,
            isTrial: M,
            plan: V,
            isGift: Y,
            paymentSourceType: $,
            isPrepaidPaymentSource: H,
            invoiceSummaryTypeWithPreview: F,
            fractionalPremiumInfo: Q,
        }),
        ex =
            F.type === C.N$.PREMIUM_WITH_TRIAL
                ? (0, f.ib)(F.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: F.invoicePreview });
    return (0, l.jsx)(u.T, {
        ...eP,
        purchaseItemContent: ef,
        subscriptionDetailsContent: eT,
        invoiceSummaryContent: e_,
        legalContent: eI,
        invoiceTotalDueValue: ex,
        invoiceTotalDueLabel: Y ? N.intl.string(g.default.Zxav97) : N.intl.string(g.default.R0cZsM),
    });
};
