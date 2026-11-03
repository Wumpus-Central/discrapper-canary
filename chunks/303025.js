(n.d(t, { _: () => er }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(155718),
    a = n(531260),
    s = n(854354),
    o = n(71804),
    u = n(482419),
    c = n(69882),
    d = n(202475),
    m = n(400612),
    p = n(463376),
    C = n(266060),
    h = n(951305),
    f = n(298208),
    E = n(473617),
    S = n(699595),
    g = n(558620),
    y = n(669510),
    I = n(841907),
    A = n(732280),
    P = n(563020),
    v = n(436102),
    x = n(45938),
    _ = n(24482),
    T = n(683071),
    b = n(212739);
n(216238);
var N = n(202541),
    j = n(833159),
    R = n(105292),
    O = n(307490),
    M = n(577381),
    L = n(222707),
    k = n(340034),
    w = n(503698),
    D = n.n(w),
    U = n(575593),
    G = n(17928),
    F = n(403581),
    B = n(834730),
    H = n(262427),
    W = n(674658),
    V = n(474012),
    Y = n(607123),
    K = n(287809),
    Z = n(843170),
    q = n(189399);
function z(e) {
    let { Icon: t = F.t, iconSize: n, customGraphic: i, gradientColor: r = "nitro-pink", ...a } = e;
    return (0, l.jsx)(H.J, {
        gradientColor: r,
        ...(null != i ? { customGraphic: i } : { Icon: t, iconSize: n }),
        ...a,
    });
}
function $(e) {
    let { skuIds: t, text: n, gradientColor: r = "nitro-pink" } = e,
        a = (0, G.bG)([K.default], () => K.default.getCurrentUser()),
        { product: s } = (0, W.q)(t[0]),
        o = i.useMemo(
            () =>
                null != s && t.length > 1
                    ? R.intl.format(Z.default.XoHiqS, { name: s.name, count: t.length - 1 })
                    : s?.name,
            [s, t.length],
        ),
        u = (0, V.tP)(s);
    return null == u
        ? null
        : (0, l.jsx)(H.A, {
              className: q.Xx,
              gradientColor: r,
              customGraphic: (0, l.jsx)("div", {
                  className: q.yn,
                  children: (0, l.jsx)("div", {
                      className: D()(q.ML, {
                          [q.M]: s?.type === U.R.AVATAR_DECORATION,
                          [q.Hm]: s?.type === U.R.PROFILE_EFFECT,
                          [q.hH]: s?.type === U.R.PROFILE_FRAME,
                          [q.qF]: s?.type === U.R.NAMEPLATE,
                          [q.l2]: s?.type === U.R.BUNDLE,
                      }),
                      children: (0, l.jsx)(Y.pL, {
                          collectiblesItem: u,
                          user: a,
                          nameplatePreviewStyle: q.M4,
                          nameplatePreviewRescalerStyle: q.N1,
                      }),
                  }),
              }),
              children: (0, l.jsxs)("div", {
                  className: q.zN,
                  children: [
                      (0, l.jsx)(B.E, { variant: "body-sm/medium", color: "currentColor", children: n }),
                      null != o && (0, l.jsx)(B.E, { variant: "body-sm/medium", color: "currentColor", children: o }),
                  ],
              }),
          });
}
var Q = n(758476),
    J = n(750532),
    X = n(216641),
    ee = n(377058);
function et(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = R.intl.string(R.t["u+Cw58"]),
            location: u = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: c } = (0, d.Y)(),
        m = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? R.intl.string(R.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: c,
            }),
            [s, n, c],
        );
    return (0, l.jsx)(ee.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: m,
        location: u,
        hideCurrencySelect: r,
    });
}
var en = n(845012),
    el = n(134638),
    ei = n(888751);
function er(e) {
    let {
            verifiedTrialId: t,
            planGroup: n,
            metadata: w,
            reviewWarningMessage: D,
            handlePaymentSourceAdd: U,
            handleStepChange: G,
        } = e,
        {
            checkoutInvoicePreview: F,
            checkoutPriceOptions: B,
            checkoutInvoiceError: H,
            referralTrialOfferId: W,
            isGift: V,
            activeSubscription: Y,
            shouldDisallowPlanSelection: K,
            expressCheckoutSubmitting: Z,
            premiumPlanOptions: q,
            isRecurringGiftCheckout: ee,
            giftSubscriptionPlanId: er,
        } = (0, f.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            isGift: e.isGift,
            activeSubscription: e.activeSubscription,
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
            expressCheckoutSubmitting: e.getExpressCheckoutSubmitting(),
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
            isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
            giftSubscriptionPlanId: e.getGiftSubscriptionPlanId(),
        })),
        { selectedPlanFromFluxStore: ea, selectedPlanId: es } = (0, g.D)(),
        { isLoaded: eo, hasFetchFailed: eu } = (0, I.r)(ee);
    if (ee && eu)
        throw new o.v({
            message: "Failed to fetch gift subscription plans (UnifiedCheckoutPremiumReviewStepBody)",
            extraSentryInformation: { selectedPlanId: es, giftSubscriptionPlanId: er },
        });
    let { isEligibleForTrial: ec, discountOffer: ed, isPremiumGroupPurchase: em } = (0, p.i)(),
        ep = i.useMemo(() => ec && null != t, [ec, t]),
        {
            discriminatedInvoicePreview: eC,
            subscriptionPeriodEnd: eh,
            proratedInvoicePreview: ef,
            purchaseDisabled: eE,
        } = (function (e) {
            let { selectedPlanId: t, verifiedTrialId: n, metadata: l, isVerifiedTrial: r = !1 } = e,
                { priceOptions: a, activeSubscription: s } = (0, f.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                })),
                {
                    purchaseDisabled: o,
                    discriminatedInvoicePreview: u,
                    proratedInvoicePreview: c,
                    subscriptionPeriodEnd: d,
                } = (function (e) {
                    let { selectedPlanId: t, priceOptions: n, trialId: l, metadata: r, isTrial: a = !1 } = e,
                        {
                            selectedSkuId: s,
                            setFetchCheckoutInvoicePreviewRequest: o,
                            setFetchRenewalInvoicePreviewRequest: u,
                            checkoutInvoicePreview: c,
                            renewalInvoicePreview: d,
                            quantity: p,
                            primaryInvoicesError: C,
                            giftSubscriptionPlanId: g,
                        } = (0, f.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                            renewalInvoicePreview: e.renewalInvoicePreview,
                            quantity: e.quantity,
                            primaryInvoicesError: e.get("primaryInvoicesError"),
                            giftSubscriptionPlanId: e.getGiftSubscriptionPlanId(),
                        })),
                        { isGift: y } = (0, h.Pv)(),
                        {
                            purchaseDisabled: I,
                            newItems: A,
                            preventInvoiceFetch: P,
                        } = (0, E.TP)({ selectedPlanId: t, priceOptions: n }),
                        v = null != g,
                        x = i.useMemo(() => (null != g ? [{ planId: g, quantity: 1 }] : A), [g, A]),
                        {
                            universalInvoiceRequestParams: _,
                            checkoutInvoiceRequestParams: T,
                            renewalInvoiceRequestParams: b,
                        } = (0, E.jq)({
                            items: x,
                            preventFetch: P,
                            priceOptions: n,
                            trialId: l,
                            subscriptionMetadata: r,
                        }),
                        N = i.useMemo(
                            () =>
                                y && !v
                                    ? {
                                          type: "premium_one_time_gift_purchase_invoice",
                                          params: { ..._, skuId: s, subscriptionPlanId: t, quantity: p },
                                      }
                                    : { type: "subscription_checkout_invoice", params: T },
                            [_, T, y, v, t, s, p],
                        ),
                        j = i.useMemo(
                            () =>
                                v
                                    ? { type: "subscription_renewal_invoice", params: { ...b, subscriptionId: void 0 } }
                                    : y
                                      ? null
                                      : { type: "subscription_renewal_invoice", params: b },
                            [b, y, v],
                        );
                    (i.useEffect(() => {
                        o(N);
                    }, [N, o]),
                        i.useEffect(() => {
                            u(j);
                        }, [j, u]));
                    let { proratedInvoicePreview: R } = i.useMemo(() => ({ proratedInvoicePreview: c }), [c]),
                        { discountInvoiceError: O } = (0, S.W)({ priceOptions: n, trialId: l, metadata: r }),
                        M = i.useMemo(() => C ?? O, [C, O]),
                        L = i.useMemo(
                            () =>
                                v
                                    ? m.u$.SUBSCRIPTION_NEW_PURCHASE
                                    : y
                                      ? m.u$.PREMIUM_GIFT
                                      : a
                                        ? m.u$.PREMIUM_WITH_TRIAL
                                        : m.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [y, a, v],
                        ),
                        { discriminatedInvoicePreview: k } = (0, m.KY)({
                            invoiceError: M,
                            invoiceTypeDiscriminator: L,
                            shouldSetPurchasePreviewErrorFromInvoice: !0,
                        }),
                        w = i.useMemo(() => (null != R ? R.subscriptionPeriodEnd : void 0), [R]);
                    return {
                        checkoutInvoicePreview: c,
                        discriminatedInvoicePreview: k,
                        proratedInvoicePreview: R,
                        renewalInvoicePreview: d,
                        purchaseDisabled: I,
                        invoiceError: M,
                        subscriptionPeriodEnd: w,
                    };
                })({ selectedPlanId: t, priceOptions: a, trialId: n, metadata: l, isTrial: r });
            return {
                purchaseDisabled: o,
                activeSubscription: s,
                subscriptionPeriodEnd: d,
                discriminatedInvoicePreview: u,
                proratedInvoicePreview: c,
            };
        })({ selectedPlanId: es, verifiedTrialId: t, metadata: w, isVerifiedTrial: ep }),
        eS = (0, C.K)(),
        { giftRecipient: eg } = (0, h.Pv)(),
        ey = V && (0, x.Ik)(eg),
        eI = (0, f.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: ep })) && !em && !K,
        eA = w?.guild_id ?? void 0,
        eP = (0, a.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        { paymentSources: ev } = (0, d.j)(),
        {
            hasEntitlements: ex,
            paymentSourceType: e_,
            isPrepaid: eT,
            paymentSourceOptionalWarningCopy: eb,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, f.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, X.g)(n, a),
                o = (0, _.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, v.X)(t.id, r),
                d = i.useMemo(
                    () => (u && null == a ? R.intl.format(R.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: s,
                isPrepaid: o,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: ea, paymentSources: ev }),
        eN = ef ?? F,
        ej = i.useMemo(
            () => null != ed && null != ed.discount && null != eN && (0, P.Ro)(eN, ed.discount.id),
            [ed, eN],
        ),
        eR = (0, l.jsx)(et, {
            label: R.intl.string(R.t["u+Cw58"]),
            handlePaymentSourceAdd: U,
            isTrial: ep,
            hideCurrencySelect: ej,
            disabled: eE,
            hasEntitlements: ex,
        }),
        eO = (0, A.V)(W),
        eM = V && (0, ei.uH)(ea),
        eL = (0, _.L_)({ planId: ea.id, isGift: !0, priceOptions: B, subscriptionPlan: ea }),
        ek = i.useMemo(() => {
            if (null == eN) return !1;
            let { subscriptionPlanInvoiceItem: e } = (0, P.Sb)(eN, ea);
            return e?.discounts.some((e) => e.type === r.iS.QUANTITY_DISCOUNT) ?? !1;
        }, [eN, ea]),
        ew = i.useMemo(
            () =>
                ek
                    ? {}
                    : null != eL && eM
                      ? { headerBadgeText: R.intl.formatToPlainString(Q.default["Mi5BH/"], { percentOff: eL }) }
                      : void 0,
            [ek, eL, eM],
        ),
        eD = (0, J.Fe)(ew),
        { upperInlineNoticeProps: eU, promotionalNoticeContent: eG } = (function (e) {
            let {
                    planGroup: t,
                    giftSavingsPercent: n,
                    isGiftingMultiPeriodPremium: r,
                    hasQuantityDiscount: a,
                    mainPreviewInvoice: s,
                    discriminatedInvoicePreview: o,
                    subscriptionPeriodEnd: u,
                    currentInvoiceHasMatchingDiscountOffer: c,
                    discountOffer: d,
                    isEligibleForTrial: p,
                    isPremiumGroupPurchase: C,
                    fractionalPremiumInfo: E,
                } = e,
                { isGift: S, activeSubscription: y } = (0, f.t4)((e) => ({
                    isGift: e.isGift,
                    activeSubscription: e.activeSubscription,
                })),
                { selectedPlanFromFluxStore: I, selectedPlanId: A } = (0, g.D)(),
                { selectedGiftingPromotionRewards: P } = (0, h.Pv)(),
                { copy: v, daysCount: x, userTrialOffer: _ } = (0, O.O8)(),
                w = (0, L.pt)({
                    fractionalPremiumInfo: E,
                    selectedPlanId: A,
                    planGroup: t,
                    premiumSubscription: y,
                    isGift: S,
                }),
                D = i.useMemo(() => {
                    if (null != o && o.type === m.u$.PREMIUM_WITH_TRIAL && null != _)
                        return (0, l.jsx)(z, { text: R.intl.format(Q.default.IAsfR5, { daysCount: x }) });
                    if (null != d && c) {
                        let e = d.discount,
                            t = e.intervalCount;
                        if (e.intervalType === N.Ff.MONTH)
                            return (0, l.jsx)(z, {
                                text: R.intl.format(Q.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                            });
                        if (e.intervalType === N.Ff.YEAR)
                            return (0, l.jsx)(z, {
                                text: R.intl.format(Q.default["tUzT/U"], { percentOff: e.amount }),
                            });
                    }
                    return S && P.length > 0
                        ? (0, l.jsx)($, { skuIds: P, text: R.intl.format(Q.default["XWo+Bp"], { count: P.length }) })
                        : r && null != n && !a
                          ? (0, l.jsx)(z, {
                                text:
                                    I.interval === N.WT.YEAR
                                        ? R.intl.format(Q.default["7sYIBL"], { savingsPercent: n })
                                        : R.intl.format(Q.default.uCXulJ, {
                                              intervalCount: I.intervalCount,
                                              savingsPercent: n,
                                          }),
                            })
                          : null;
                }, [_, c, d, x, o, n, r, a, I.interval, I.intervalCount, S, P]),
                U = (function (e) {
                    let { skuId: t, isGift: n } = e,
                        r = (0, b.O)();
                    return i.useMemo(
                        () =>
                            n || t !== N.pe.TIER_2 || !1 === r
                                ? null
                                : (0, l.jsx)(T.w, {
                                      type: "info",
                                      message: R.intl.format(j.default.Urtyu9, { days: 7 }),
                                      role: "none",
                                  }),
                        [n, t, r],
                    );
                })({ skuId: I.skuId, isGift: S }),
                G = (0, M.i)({ planSkuId: I.skuId, invoice: s });
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        w
                            ? e.push({
                                  directContent: (0, l.jsx)(k.l, {
                                      fractionalPremiumInfo: E,
                                      isEligibleForTrial: p,
                                      trialPeriodCopy: v,
                                      subscriptionPeriodEnd: u,
                                  }),
                                  key: "fractional-premium-notice",
                              })
                            : C &&
                              e.push({
                                  type: "info",
                                  message: (0, L.Nn)(),
                                  role: "none",
                                  key: "premium-group-purchase-notice",
                              }),
                        null != U && e.push({ directContent: U, key: "xbox-perks-notice" }),
                        e.length > 0 ? e : null
                    );
                }, [w, E, p, v, u, C, U]),
                promotionalNoticeContent: D ?? G ?? null,
            };
        })({
            planGroup: n,
            giftSavingsPercent: eL,
            isGiftingMultiPeriodPremium: eM,
            hasQuantityDiscount: ek,
            mainPreviewInvoice: eN,
            discriminatedInvoicePreview: eC,
            subscriptionPeriodEnd: eh,
            currentInvoiceHasMatchingDiscountOffer: ej,
            discountOffer: ed,
            isEligibleForTrial: ec,
            isPremiumGroupPurchase: em,
            fractionalPremiumInfo: eP,
        }),
        eF = i.useMemo(() => {
            let e = [];
            (null != D && "" !== D && e.push({ type: "warning", message: D, role: "none", key: "review-warning" }),
                null != eb &&
                    e.push({ type: "info", message: eb, role: "status", key: "payment-source-optional-warning" }));
            let t = [...e, ...(eU ?? [])];
            return t.length > 0 ? t : null;
        }, [eU, D, eb]),
        eB = null != eC ? eC.invoicePreview : null,
        { priceOptions: eH, planPricesLoading: eW } = (0, _.Pr)(B, eB, H),
        eV = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eF,
            planSelectContent: eI
                ? (0, l.jsx)(en.X, {
                      disabled: eE || Z,
                      selectedPlanId: es,
                      priceOptions: eH,
                      planOptions: q,
                      subscriptionPeriodEnd: eh,
                      planPricesLoading: eW,
                  })
                : void 0,
            paymentMethodContent: eR,
            promotionalNoticeContent: eG,
            headerBadgeConfig: eD,
        };
    if (null == eC && null != H) return (0, l.jsx)(c.T_, { ...eV, legalContent: null });
    if (null == eC || eC.type === m.u$.LOADING || (ee && !eo))
        return (0, l.jsx)(c.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eD });
    let eY = null != eO ? eO.subscriptionTrial : void 0,
        eK =
            eC.type === m.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(u.k, {
                      discriminatedInvoicePreview: eC,
                      subscriptionPlan: ea,
                      isPrepaidPaymentSource: eT,
                      subscriptionTrial: eY,
                      isCustomGift: ey,
                  }),
        eZ = null;
    if (
        !eT &&
        (m.ME.has(eC.type) || eC.type === m.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in eC &&
        null != eC.renewalInvoicePreview
    ) {
        let e = (0, ei.Gj)(
            eC.invoicePreview,
            eC.renewalInvoicePreview,
            eY,
            ee
                ? { discountOffer: ed, isSubscriptionUpdate: !1 }
                : { discountOffer: ed, isSubscriptionUpdate: null != Y, fractionalPremiumInfo: eP },
        );
        eZ = (0, l.jsx)(y._, { ...e });
    }
    let eq = eI
            ? void 0
            : (0, l.jsx)(el._, {
                  type: eC.type,
                  invoicePreview: eC.invoicePreview,
                  storeListing: eS,
                  subscriptionPlan: ea,
                  isPrepaidPaymentSource: eT,
                  giftRecipient: eg,
                  isPremiumGroupPurchase: em,
                  guildId: eA,
                  handleStepChange: G,
              }),
        ez = (0, l.jsx)(k.P, {
            activeSubscription: ee ? null : Y,
            isTrial: ep,
            plan: ea,
            isGift: V && !ee,
            paymentSourceType: e_,
            discriminatedInvoicePreview: eC,
            fractionalPremiumInfo: ee ? null : eP,
        }),
        e$ =
            eC.type === m.u$.PREMIUM_WITH_TRIAL
                ? (0, ei.ib)(eC.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: eC.invoicePreview });
    return (0, l.jsx)(c.T_, {
        ...eV,
        purchaseItemContent: eq,
        subscriptionDetailsContent: eZ,
        invoiceSummaryContent: eK,
        legalContent: ez,
        invoiceTotalDueValue: e$,
        invoiceTotalDueLabel: V && !ee ? R.intl.string(Q.default.Zxav97) : R.intl.string(Q.default.R0cZsM),
    });
}
