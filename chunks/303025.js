(n.d(t, { _: () => el }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(155718),
    a = n(531260),
    s = n(854354),
    o = n(482419),
    u = n(38785),
    c = n(202475),
    d = n(400612),
    m = n(463376),
    p = n(266060),
    h = n(951305),
    C = n(912195),
    f = n(473617),
    E = n(699595),
    S = n(558620),
    g = n(669510),
    I = n(732280),
    A = n(563020),
    y = n(436102),
    x = n(45938),
    P = n(24482),
    v = n(683071),
    _ = n(212739);
n(216238);
var T = n(202541),
    N = n(833159),
    b = n(105292),
    j = n(307490),
    R = n(577381),
    O = n(222707),
    M = n(340034),
    L = n(503698),
    k = n.n(L),
    w = n(575593),
    D = n(17928),
    U = n(403581),
    G = n(834730),
    F = n(262427),
    B = n(674658),
    H = n(474012),
    W = n(607123),
    V = n(287809),
    Y = n(843170),
    K = n(189399);
function q(e) {
    let { Icon: t = U.t, iconSize: n, customGraphic: i, gradientColor: r = "nitro-pink", ...a } = e;
    return (0, l.jsx)(F.J, {
        gradientColor: r,
        ...(null != i ? { customGraphic: i } : { Icon: t, iconSize: n }),
        ...a,
    });
}
function Z(e) {
    let { skuIds: t, text: n, gradientColor: r = "nitro-pink" } = e,
        a = (0, D.bG)([V.default], () => V.default.getCurrentUser()),
        { product: s } = (0, B.q)(t[0]),
        o = i.useMemo(
            () =>
                null != s && t.length > 1
                    ? b.intl.format(Y.default.XoHiqS, { name: s.name, count: t.length - 1 })
                    : s?.name,
            [s, t.length],
        ),
        u = (0, H.tP)(s);
    return null == u
        ? null
        : (0, l.jsx)(F.A, {
              className: K.Xx,
              gradientColor: r,
              customGraphic: (0, l.jsx)("div", {
                  className: K.yn,
                  children: (0, l.jsx)("div", {
                      className: k()(K.ML, {
                          [K.M]: s?.type === w.R.AVATAR_DECORATION,
                          [K.Hm]: s?.type === w.R.PROFILE_EFFECT,
                          [K.hH]: s?.type === w.R.PROFILE_FRAME,
                          [K.qF]: s?.type === w.R.NAMEPLATE,
                          [K.l2]: s?.type === w.R.BUNDLE,
                      }),
                      children: (0, l.jsx)(W.pL, {
                          collectiblesItem: u,
                          user: a,
                          nameplatePreviewStyle: K.M4,
                          nameplatePreviewRescalerStyle: K.N1,
                      }),
                  }),
              }),
              children: (0, l.jsxs)("div", {
                  className: K.zN,
                  children: [
                      (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "currentColor", children: n }),
                      null != o && (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "currentColor", children: o }),
                  ],
              }),
          });
}
var z = n(758476),
    $ = n(750532),
    Q = n(216641),
    J = n(414051);
function X(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = b.intl.string(b.t["u+Cw58"]),
            location: u = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: d } = (0, c.Y)(),
        m = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? b.intl.string(b.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
            }),
            [s, n, d],
        );
    return (0, l.jsx)(J.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: m,
        location: u,
        hideCurrencySelect: r,
    });
}
var ee = n(845012),
    et = n(134638),
    en = n(888751);
function el(e) {
    let {
            verifiedTrialId: t,
            planGroup: n,
            metadata: L,
            reviewWarningMessage: k,
            handlePaymentSourceAdd: w,
            handleStepChange: D,
        } = e,
        {
            checkoutInvoicePreview: U,
            checkoutPriceOptions: G,
            checkoutInvoiceError: F,
            referralTrialOfferId: B,
            isGift: H,
            activeSubscription: W,
            shouldDisallowPlanSelection: V,
            expressCheckoutSubmitting: Y,
            premiumPlanOptions: K,
        } = (0, C.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            isGift: e.isGift,
            activeSubscription: e.activeSubscription,
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
            expressCheckoutSubmitting: e.getExpressCheckoutSubmitting(),
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
        })),
        { selectedPlanFromFluxStore: J, selectedPlanId: el } = (0, S.D)(),
        { isEligibleForTrial: ei, discountOffer: er, isPremiumGroupPurchase: ea } = (0, m.i)(),
        es = i.useMemo(() => ei && null != t, [ei, t]),
        {
            discriminatedInvoicePreview: eo,
            subscriptionPeriodEnd: eu,
            proratedInvoicePreview: ec,
            purchaseDisabled: ed,
        } = (function (e) {
            let { selectedPlanId: t, verifiedTrialId: n, metadata: l, isVerifiedTrial: r = !1 } = e,
                { priceOptions: a, activeSubscription: s } = (0, C.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                })),
                {
                    purchaseDisabled: o,
                    discriminatedInvoicePreview: u,
                    proratedInvoicePreview: c,
                    subscriptionPeriodEnd: m,
                } = (function (e) {
                    let { selectedPlanId: t, priceOptions: n, trialId: l, metadata: r, isTrial: a = !1 } = e,
                        {
                            selectedSkuId: s,
                            setFetchCheckoutInvoicePreviewRequest: o,
                            setFetchRenewalInvoicePreviewRequest: u,
                            checkoutInvoicePreview: c,
                            renewalInvoicePreview: m,
                            quantity: p,
                            primaryInvoicesError: S,
                        } = (0, C.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                            renewalInvoicePreview: e.renewalInvoicePreview,
                            quantity: e.quantity,
                            primaryInvoicesError: e.get("primaryInvoicesError"),
                        })),
                        { isGift: g } = (0, h.Pv)(),
                        {
                            purchaseDisabled: I,
                            newItems: A,
                            preventInvoiceFetch: y,
                        } = (0, f.TP)({ selectedPlanId: t, priceOptions: n }),
                        {
                            universalInvoiceRequestParams: x,
                            checkoutInvoiceRequestParams: P,
                            renewalInvoiceRequestParams: v,
                        } = (0, f.jq)({
                            items: A,
                            preventFetch: y,
                            priceOptions: n,
                            trialId: l,
                            subscriptionMetadata: r,
                        }),
                        _ = i.useMemo(
                            () =>
                                g
                                    ? {
                                          type: "premium_one_time_gift_purchase_invoice",
                                          params: { ...x, skuId: s, subscriptionPlanId: t, quantity: p },
                                      }
                                    : { type: "subscription_checkout_invoice", params: P },
                            [x, P, g, t, s, p],
                        ),
                        T = i.useMemo(() => (g ? null : { type: "subscription_renewal_invoice", params: v }), [v, g]);
                    (i.useEffect(() => {
                        o(_);
                    }, [_, o]),
                        i.useEffect(() => {
                            u(T);
                        }, [T, u]));
                    let { proratedInvoicePreview: N } = i.useMemo(() => ({ proratedInvoicePreview: c }), [c]),
                        { discountInvoiceError: b } = (0, E.W)({ priceOptions: n, trialId: l, metadata: r }),
                        j = i.useMemo(() => S ?? b, [S, b]),
                        R = i.useMemo(
                            () =>
                                g ? d.u$.PREMIUM_GIFT : a ? d.u$.PREMIUM_WITH_TRIAL : d.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [g, a],
                        ),
                        { discriminatedInvoicePreview: O } = (0, d.KY)({
                            invoiceError: j,
                            invoiceTypeDiscriminator: R,
                            shouldSetPurchasePreviewErrorFromInvoice: !0,
                        }),
                        M = i.useMemo(() => (null != N ? N.subscriptionPeriodEnd : void 0), [N]);
                    return {
                        checkoutInvoicePreview: c,
                        discriminatedInvoicePreview: O,
                        proratedInvoicePreview: N,
                        renewalInvoicePreview: m,
                        purchaseDisabled: I,
                        invoiceError: j,
                        subscriptionPeriodEnd: M,
                    };
                })({ selectedPlanId: t, priceOptions: a, trialId: n, metadata: l, isTrial: r });
            return {
                purchaseDisabled: o,
                activeSubscription: s,
                subscriptionPeriodEnd: m,
                discriminatedInvoicePreview: u,
                proratedInvoicePreview: c,
            };
        })({ selectedPlanId: el, verifiedTrialId: t, metadata: L, isVerifiedTrial: es }),
        em = (0, p.K)(),
        { giftRecipient: ep } = (0, h.Pv)(),
        eh = H && (0, x.Ik)(ep),
        eC = (0, C.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: es })) && !ea && !V,
        ef = L?.guild_id ?? void 0,
        eE = (0, a.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        { paymentSources: eS } = (0, c.j)(),
        {
            hasEntitlements: eg,
            paymentSourceType: eI,
            isPrepaid: eA,
            paymentSourceOptionalWarningCopy: ey,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, C.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, Q.g)(n, a),
                o = (0, P.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, y.X)(t.id, r),
                d = i.useMemo(
                    () => (u && null == a ? b.intl.format(b.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: s,
                isPrepaid: o,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: J, paymentSources: eS }),
        ex = ec ?? U,
        eP = i.useMemo(
            () => null != er && null != er.discount && null != ex && (0, A.Ro)(ex, er.discount.id),
            [er, ex],
        ),
        ev = (0, l.jsx)(X, {
            label: b.intl.string(b.t["u+Cw58"]),
            handlePaymentSourceAdd: w,
            isTrial: es,
            hideCurrencySelect: eP,
            disabled: ed,
            hasEntitlements: eg,
        }),
        e_ = (0, I.V)(B),
        eT = H && (0, en.uH)(J),
        eN = (0, P.L_)({ planId: J.id, isGift: !0, priceOptions: G, subscriptionPlan: J }),
        eb = i.useMemo(() => {
            if (null == ex) return !1;
            let { subscriptionPlanInvoiceItem: e } = (0, A.Sb)(ex, J);
            return e?.discounts.some((e) => e.type === r.iS.QUANTITY_DISCOUNT) ?? !1;
        }, [ex, J]),
        ej = i.useMemo(
            () =>
                eb
                    ? {}
                    : null != eN && eT
                      ? { headerBadgeText: b.intl.formatToPlainString(z.default["Mi5BH/"], { percentOff: eN }) }
                      : void 0,
            [eb, eN, eT],
        ),
        eR = (0, $.Fe)(ej),
        { upperInlineNoticeProps: eO, promotionalNoticeContent: eM } = (function (e) {
            let {
                    planGroup: t,
                    giftSavingsPercent: n,
                    isGiftingMultiPeriodPremium: r,
                    hasQuantityDiscount: a,
                    mainPreviewInvoice: s,
                    discriminatedInvoicePreview: o,
                    subscriptionPeriodEnd: u,
                    currentInvoiceHasMatchingDiscountOffer: c,
                    discountOffer: m,
                    isEligibleForTrial: p,
                    isPremiumGroupPurchase: f,
                    fractionalPremiumInfo: E,
                } = e,
                { isGift: g, activeSubscription: I } = (0, C.t4)((e) => ({
                    isGift: e.isGift,
                    activeSubscription: e.activeSubscription,
                })),
                { selectedPlanFromFluxStore: A, selectedPlanId: y } = (0, S.D)(),
                { selectedGiftingPromotionRewards: x } = (0, h.Pv)(),
                { copy: P, daysCount: L, userTrialOffer: k } = (0, j.O8)(),
                w = (0, O.pt)({
                    fractionalPremiumInfo: E,
                    selectedPlanId: y,
                    planGroup: t,
                    premiumSubscription: I,
                    isGift: g,
                }),
                D = i.useMemo(() => {
                    if (null != o && o.type === d.u$.PREMIUM_WITH_TRIAL && null != k)
                        return (0, l.jsx)(q, { text: b.intl.format(z.default.IAsfR5, { daysCount: L }) });
                    if (null != m && c) {
                        let e = m.discount,
                            t = e.intervalCount;
                        if (e.intervalType === T.Ff.MONTH)
                            return (0, l.jsx)(q, {
                                text: b.intl.format(z.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                            });
                        if (e.intervalType === T.Ff.YEAR)
                            return (0, l.jsx)(q, {
                                text: b.intl.format(z.default["tUzT/U"], { percentOff: e.amount }),
                            });
                    }
                    return g && x.length > 0
                        ? (0, l.jsx)(Z, { skuIds: x, text: b.intl.format(z.default["XWo+Bp"], { count: x.length }) })
                        : r && null != n && !a
                          ? (0, l.jsx)(q, {
                                text:
                                    A.interval === T.WT.YEAR
                                        ? b.intl.format(z.default["7sYIBL"], { savingsPercent: n })
                                        : b.intl.format(z.default.uCXulJ, {
                                              intervalCount: A.intervalCount,
                                              savingsPercent: n,
                                          }),
                            })
                          : null;
                }, [k, c, m, L, o, n, r, a, A.interval, A.intervalCount, g, x]),
                U = (function (e) {
                    let { skuId: t, isGift: n } = e,
                        r = (0, _.O)();
                    return i.useMemo(
                        () =>
                            n || t !== T.pe.TIER_2 || !1 === r
                                ? null
                                : (0, l.jsx)(v.w, {
                                      type: "info",
                                      message: b.intl.format(N.default.Urtyu9, { days: 7 }),
                                      role: "none",
                                  }),
                        [n, t, r],
                    );
                })({ skuId: A.skuId, isGift: g }),
                G = (0, R.i)({ planSkuId: A.skuId, invoice: s });
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        w
                            ? e.push({
                                  directContent: (0, l.jsx)(M.l, {
                                      fractionalPremiumInfo: E,
                                      isEligibleForTrial: p,
                                      trialPeriodCopy: P,
                                      subscriptionPeriodEnd: u,
                                  }),
                                  key: "fractional-premium-notice",
                              })
                            : f &&
                              e.push({
                                  type: "info",
                                  message: (0, O.Nn)(),
                                  role: "none",
                                  key: "premium-group-purchase-notice",
                              }),
                        null != U && e.push({ directContent: U, key: "xbox-perks-notice" }),
                        e.length > 0 ? e : null
                    );
                }, [w, E, p, P, u, f, U]),
                promotionalNoticeContent: D ?? G ?? null,
            };
        })({
            planGroup: n,
            giftSavingsPercent: eN,
            isGiftingMultiPeriodPremium: eT,
            hasQuantityDiscount: eb,
            mainPreviewInvoice: ex,
            discriminatedInvoicePreview: eo,
            subscriptionPeriodEnd: eu,
            currentInvoiceHasMatchingDiscountOffer: eP,
            discountOffer: er,
            isEligibleForTrial: ei,
            isPremiumGroupPurchase: ea,
            fractionalPremiumInfo: eE,
        }),
        eL = i.useMemo(() => {
            let e = [];
            (null != k && "" !== k && e.push({ type: "warning", message: k, role: "none", key: "review-warning" }),
                null != ey &&
                    e.push({ type: "info", message: ey, role: "status", key: "payment-source-optional-warning" }));
            let t = [...e, ...(eO ?? [])];
            return t.length > 0 ? t : null;
        }, [eO, k, ey]),
        ek = null != eo ? eo.invoicePreview : null,
        { priceOptions: ew, planPricesLoading: eD } = (0, P.Pr)(G, ek, F),
        eU = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eL,
            planSelectContent: eC
                ? (0, l.jsx)(ee.X, {
                      disabled: ed || Y,
                      selectedPlanId: el,
                      priceOptions: ew,
                      planOptions: K,
                      subscriptionPeriodEnd: eu,
                      planPricesLoading: eD,
                  })
                : void 0,
            paymentMethodContent: ev,
            promotionalNoticeContent: eM,
            headerBadgeConfig: eR,
        };
    if (null == eo && null != F) return (0, l.jsx)(u.T_, { ...eU, legalContent: null });
    if (null == eo || eo.type === d.u$.LOADING)
        return (0, l.jsx)(u.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eR });
    let eG = null != e_ ? e_.subscriptionTrial : void 0,
        eF =
            eo.type === d.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(o.k, {
                      discriminatedInvoicePreview: eo,
                      subscriptionPlan: J,
                      isPrepaidPaymentSource: eA,
                      subscriptionTrial: eG,
                      isCustomGift: eh,
                  }),
        eB = null;
    if (
        !eA &&
        (d.ME.has(eo.type) || eo.type === d.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in eo &&
        null != eo.renewalInvoicePreview
    ) {
        let e = (0, en.Gj)(eo.invoicePreview, eo.renewalInvoicePreview, eG, {
            discountOffer: er,
            isSubscriptionUpdate: null != W,
            fractionalPremiumInfo: eE,
        });
        eB = (0, l.jsx)(g._, { ...e });
    }
    let eH = eC
            ? void 0
            : (0, l.jsx)(et._, {
                  type: eo.type,
                  invoicePreview: eo.invoicePreview,
                  storeListing: em,
                  subscriptionPlan: J,
                  isPrepaidPaymentSource: eA,
                  giftRecipient: ep,
                  isPremiumGroupPurchase: ea,
                  guildId: ef,
                  handleStepChange: D,
              }),
        eW = (0, l.jsx)(M.P, {
            activeSubscription: W,
            isTrial: es,
            plan: J,
            isGift: H,
            paymentSourceType: eI,
            discriminatedInvoicePreview: eo,
            fractionalPremiumInfo: eE,
        }),
        eV =
            eo.type === d.u$.PREMIUM_WITH_TRIAL
                ? (0, en.ib)(eo.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: eo.invoicePreview });
    return (0, l.jsx)(u.T_, {
        ...eU,
        purchaseItemContent: eH,
        subscriptionDetailsContent: eB,
        invoiceSummaryContent: eF,
        legalContent: eW,
        invoiceTotalDueValue: eV,
        invoiceTotalDueLabel: H ? b.intl.string(z.default.Zxav97) : b.intl.string(z.default.R0cZsM),
    });
}
