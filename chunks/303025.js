(n.d(t, { _: () => er }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(531260),
    a = n(860841),
    s = n(854354),
    o = n(71804),
    u = n(482419),
    c = n(69882),
    d = n(202475),
    m = n(463376),
    p = n(266060),
    h = n(951305),
    C = n(298208),
    f = n(473617),
    E = n(699595),
    S = n(558620),
    g = n(669510),
    y = n(841907),
    I = n(732280),
    A = n(436102),
    P = n(45938),
    v = n(24482),
    x = n(683071),
    _ = n(212739);
n(216238);
var T = n(202541),
    b = n(833159),
    N = n(105292),
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
function Z(e) {
    let { Icon: t = U.t, iconSize: n, customGraphic: i, gradientColor: r = "nitro-pink", ...a } = e;
    return (0, l.jsx)(F.J, {
        gradientColor: r,
        ...(null != i ? { customGraphic: i } : { Icon: t, iconSize: n }),
        ...a,
    });
}
function q(e) {
    let { skuIds: t, text: n, gradientColor: r = "nitro-pink" } = e,
        a = (0, D.bG)([V.default], () => V.default.getCurrentUser()),
        { product: s } = (0, B.q)(t[0]),
        o = i.useMemo(
            () =>
                null != s && t.length > 1
                    ? N.intl.format(Y.default.XoHiqS, { name: s.name, count: t.length - 1 })
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
                      (0, l.jsx)(G.E, { variant: "body-sm/medium", color: "currentColor", children: n }),
                      null != o && (0, l.jsx)(G.E, { variant: "body-sm/medium", color: "currentColor", children: o }),
                  ],
              }),
          });
}
var z = n(758476);
let $ = i.memo(function (e) {
        let { giftSavingsPercent: t, isGiftingMultiPeriodPremium: n, discriminatedInvoicePreview: r } = e,
            {
                isGift: s,
                checkoutInvoicePreview: o,
                hasQuantityDiscount: u,
            } = (0, C.t4)((e) => ({
                isGift: e.isGift,
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                hasQuantityDiscount: e.getInvoiceHasQuantityDiscount(),
            })),
            { discountOffer: d, currentInvoiceHasMatchingDiscountOffer: p } = (0, m.i)(),
            { selectedPlanFromFluxStore: f } = (0, S.D)(),
            { selectedGiftingPromotionRewards: E } = (0, h.Pv)(),
            { daysCount: g, userTrialOffer: y } = (0, j.O8)(),
            I = i.useMemo(() => {
                if (null != r && r.type === a.u$.PREMIUM_WITH_TRIAL && null != y)
                    return (0, l.jsx)(Z, { text: N.intl.format(z.default.IAsfR5, { daysCount: g }) });
                if (null != d && p) {
                    let e = d.discount,
                        t = e.intervalCount;
                    if (e.intervalType === T.Ff.MONTH)
                        return (0, l.jsx)(Z, {
                            text: N.intl.format(z.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                        });
                    if (e.intervalType === T.Ff.YEAR)
                        return (0, l.jsx)(Z, { text: N.intl.format(z.default["tUzT/U"], { percentOff: e.amount }) });
                }
                return s && E.length > 0
                    ? (0, l.jsx)(q, { skuIds: E, text: N.intl.format(z.default["XWo+Bp"], { count: E.length }) })
                    : n && null != t && !u
                      ? (0, l.jsx)(Z, {
                            text:
                                f.interval === T.WT.YEAR
                                    ? N.intl.format(z.default["7sYIBL"], { savingsPercent: t })
                                    : N.intl.format(z.default.uCXulJ, {
                                          intervalCount: f.intervalCount,
                                          savingsPercent: t,
                                      }),
                        })
                      : null;
            }, [y, p, d, g, r, t, n, u, f.interval, f.intervalCount, s, E]),
            A = (0, R.i)({ planSkuId: f.skuId, invoice: o }),
            P = I ?? A ?? null;
        return null == P ? null : (0, l.jsx)(c.iA, { children: P });
    }),
    Q = i.memo(function (e) {
        let { planGroup: t, fractionalPremiumInfo: n, coreUpperInlineNoticeProps: r } = e,
            {
                isGift: a,
                activeSubscription: s,
                subscriptionPeriodEnd: o,
            } = (0, C.t4)((e) => ({
                isGift: e.isGift,
                activeSubscription: e.activeSubscription,
                subscriptionPeriodEnd: e.getInvoiceSubscriptionPeriodEnd(),
            })),
            { isEligibleForTrial: u, isPremiumGroupPurchase: d } = (0, m.i)(),
            { selectedPlanFromFluxStore: p, selectedPlanId: h } = (0, S.D)(),
            { copy: f } = (0, j.O8)(),
            E = (0, O.pt)({
                fractionalPremiumInfo: n,
                selectedPlanId: h,
                planGroup: t,
                premiumSubscription: s,
                isGift: a,
            }),
            g = (function (e) {
                let { skuId: t, isGift: n } = e,
                    r = (0, _.O)();
                return i.useMemo(
                    () =>
                        n || t !== T.pe.TIER_2 || !1 === r
                            ? null
                            : (0, l.jsx)(x.w, {
                                  type: "info",
                                  message: N.intl.format(b.default.Urtyu9, { days: 7 }),
                                  role: "none",
                              }),
                    [n, t, r],
                );
            })({ skuId: p.skuId, isGift: a }),
            y = i.useMemo(() => {
                let e = [];
                return (
                    E
                        ? e.push({
                              directContent: (0, l.jsx)(M.l, {
                                  fractionalPremiumInfo: n,
                                  isEligibleForTrial: u,
                                  trialPeriodCopy: f,
                                  subscriptionPeriodEnd: o,
                              }),
                              key: "fractional-premium-notice",
                          })
                        : d &&
                          e.push({
                              type: "info",
                              message: (0, O.Nn)(),
                              role: "none",
                              key: "premium-group-purchase-notice",
                          }),
                    null != g && e.push({ directContent: g, key: "xbox-perks-notice" }),
                    e.length > 0 ? e : null
                );
            }, [E, n, u, f, o, d, g]),
            I = i.useMemo(() => {
                let e = [...(r ?? []), ...(y ?? [])];
                return e.length > 0 ? e : null;
            }, [r, y]);
        return (0, l.jsx)(c.zJ, { upperInlineNoticeProps: I, shouldShowGlobalNotices: !0 });
    });
var J = n(750532),
    X = n(216641),
    ee = n(377058);
function et(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = N.intl.string(N.t["u+Cw58"]),
            location: u = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: c } = (0, d.Y)(),
        m = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? N.intl.string(N.t.IGU7El) : null,
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
            metadata: x,
            reviewWarningMessage: _,
            handlePaymentSourceAdd: T,
            handleStepChange: b,
        } = e,
        {
            checkoutInvoicePreview: j,
            hasQuantityDiscount: R,
            checkoutPriceOptions: O,
            checkoutInvoiceError: L,
            referralTrialOfferId: k,
            isGift: w,
            activeSubscription: D,
            shouldDisallowPlanSelection: U,
            expressCheckoutSubmitting: G,
            premiumPlanOptions: F,
            setPurchasePreviewError: B,
            isRecurringGiftCheckout: H,
            giftSubscriptionPlanId: W,
        } = (0, C.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            hasQuantityDiscount: e.getInvoiceHasQuantityDiscount(),
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            isGift: e.isGift,
            activeSubscription: e.activeSubscription,
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
            expressCheckoutSubmitting: e.getExpressCheckoutSubmitting(),
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
            setPurchasePreviewError: e.setPurchasePreviewError,
            isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
            giftSubscriptionPlanId: e.getGiftSubscriptionPlanId(),
        })),
        { selectedPlanFromFluxStore: V, selectedPlanId: Y } = (0, S.D)(),
        { isLoaded: K, hasFetchFailed: Z } = (0, y.r)(H);
    if (H && Z)
        throw new o.v({
            message: "Failed to fetch gift subscription plans (UnifiedCheckoutPremiumReviewStepBody)",
            extraSentryInformation: { selectedPlanId: Y, giftSubscriptionPlanId: W },
        });
    let {
            isEligibleForTrial: q,
            discountOffer: ee,
            isPremiumGroupPurchase: er,
            currentInvoiceHasMatchingDiscountOffer: ea,
        } = (0, m.i)(),
        es = i.useMemo(() => q && null != t, [q, t]),
        { purchaseDisabled: eo, consolidatedInvoiceError: eu } = (function (e) {
            let { selectedPlanId: t, priceOptions: n, trialId: l, metadata: r } = e,
                {
                    selectedSkuId: a,
                    setFetchCheckoutInvoicePreviewRequest: s,
                    setFetchRenewalInvoicePreviewRequest: o,
                    checkoutInvoicePreview: u,
                    renewalInvoicePreview: c,
                    quantity: d,
                    primaryInvoicesError: m,
                    giftSubscriptionPlanId: p,
                } = (0, C.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                    setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    renewalInvoicePreview: e.renewalInvoicePreview,
                    quantity: e.quantity,
                    primaryInvoicesError: e.get("primaryInvoicesError"),
                    giftSubscriptionPlanId: e.getGiftSubscriptionPlanId(),
                })),
                { isGift: S } = (0, h.Pv)(),
                {
                    purchaseDisabled: g,
                    newItems: y,
                    preventInvoiceFetch: I,
                } = (0, f.TP)({ selectedPlanId: t, priceOptions: n }),
                A = null != p,
                P = i.useMemo(() => (null != p ? [{ planId: p, quantity: 1 }] : y), [p, y]),
                {
                    universalInvoiceRequestParams: v,
                    checkoutInvoiceRequestParams: x,
                    renewalInvoiceRequestParams: _,
                } = (0, f.jq)({ items: P, preventFetch: I, priceOptions: n, trialId: l, subscriptionMetadata: r }),
                T = i.useMemo(
                    () =>
                        S && !A
                            ? {
                                  type: "premium_one_time_gift_purchase_invoice",
                                  params: { ...v, skuId: a, subscriptionPlanId: t, quantity: d },
                              }
                            : { type: "subscription_checkout_invoice", params: x },
                    [v, x, S, A, t, a, d],
                ),
                b = i.useMemo(
                    () =>
                        A
                            ? { type: "subscription_renewal_invoice", params: { ..._, subscriptionId: void 0 } }
                            : S
                              ? null
                              : { type: "subscription_renewal_invoice", params: _ },
                    [_, S, A],
                );
            (i.useEffect(() => {
                s(T);
            }, [T, s]),
                i.useEffect(() => {
                    o(b);
                }, [b, o]));
            let { discountInvoiceError: N } = (0, E.W)({ priceOptions: n, trialId: l, metadata: r });
            return {
                checkoutInvoicePreview: u,
                renewalInvoicePreview: c,
                purchaseDisabled: g,
                consolidatedInvoiceError: i.useMemo(() => m ?? N, [m, N]),
            };
        })({ selectedPlanId: Y, priceOptions: O, trialId: t, metadata: x });
    i.useEffect(() => {
        B(eu);
    }, [eu, B]);
    let { discriminatedInvoicePreview: ec, subscriptionPeriodEnd: ed } = (0, C.t4)((e) => ({
            subscriptionPeriodEnd: e.getInvoiceSubscriptionPeriodEnd(),
            discriminatedInvoicePreview: e.getPremiumDiscriminatedInvoicePreview({ invoiceError: eu, isTrial: es }),
        })),
        em = (0, p.K)(),
        { giftRecipient: ep } = (0, h.Pv)(),
        eh = w && (0, P.Ik)(ep),
        eC = (0, C.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: es })) && !er && !U,
        ef = x?.guild_id ?? void 0,
        eE = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        { paymentSources: eS } = (0, d.j)(),
        {
            hasEntitlements: eg,
            paymentSourceType: ey,
            isPrepaid: eI,
            paymentSourceOptionalWarningCopy: eA,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, C.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, X.g)(n, a),
                o = (0, v.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, A.X)(t.id, r),
                d = i.useMemo(
                    () => (u && null == a ? N.intl.format(N.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: s,
                isPrepaid: o,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: V, paymentSources: eS }),
        eP = (0, l.jsx)(et, {
            label: N.intl.string(N.t["u+Cw58"]),
            handlePaymentSourceAdd: T,
            isTrial: es,
            hideCurrencySelect: ea,
            disabled: eo,
            hasEntitlements: eg,
        }),
        ev = (0, I.V)(k),
        ex = w && (0, ei.uH)(V),
        e_ = (0, v.L_)({ planId: V.id, isGift: !0, priceOptions: O, subscriptionPlan: V }),
        eT = i.useMemo(
            () =>
                R
                    ? {}
                    : null != e_ && ex
                      ? { headerBadgeText: N.intl.formatToPlainString(z.default["Mi5BH/"], { percentOff: e_ }) }
                      : void 0,
            [R, e_, ex],
        ),
        eb = (0, J.Fe)(eT),
        eN = i.useMemo(() => {
            let e = [];
            return (
                null != _ && "" !== _ && e.push({ type: "warning", message: _, role: "none", key: "review-warning" }),
                null != eA &&
                    e.push({ type: "info", message: eA, role: "status", key: "payment-source-optional-warning" }),
                e.length > 0 ? e : null
            );
        }, [_, eA]),
        ej = (0, l.jsx)($, {
            giftSavingsPercent: e_,
            isGiftingMultiPeriodPremium: ex,
            discriminatedInvoicePreview: ec,
        }),
        { priceOptions: eR, planPricesLoading: eO } = (0, v.Pr)(O, j, L),
        eM = {
            planSelectContent: eC
                ? (0, l.jsx)(en.X, {
                      disabled: eo || G,
                      selectedPlanId: Y,
                      priceOptions: eR,
                      planOptions: F,
                      subscriptionPeriodEnd: ed,
                      planPricesLoading: eO,
                  })
                : void 0,
            upperInlineNoticeContent: (0, l.jsx)(Q, {
                planGroup: n,
                fractionalPremiumInfo: eE,
                coreUpperInlineNoticeProps: eN,
            }),
            paymentMethodContent: eP,
            promotionalNoticeContent: ej,
            tenantProvidesPromotionalNoticeContainer: !0,
            headerBadgeConfig: eb,
        };
    if (null == ec && null != L) return (0, l.jsx)(c.T_, { ...eM, legalContent: null });
    if (null == ec || ec.type === a.u$.LOADING || (H && !K))
        return (0, l.jsx)(c.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eb });
    let eL = null != ev ? ev.subscriptionTrial : void 0,
        ek =
            ec.type === a.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(u.k, {
                      discriminatedInvoicePreview: ec,
                      subscriptionPlan: V,
                      isPrepaidPaymentSource: eI,
                      subscriptionTrial: eL,
                      isCustomGift: eh,
                  }),
        ew = null;
    if (
        !eI &&
        (a.ME.has(ec.type) || ec.type === a.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ec &&
        null != ec.renewalInvoicePreview
    ) {
        let e = (0, ei.Gj)(
            ec.invoicePreview,
            ec.renewalInvoicePreview,
            eL,
            H
                ? { discountOffer: ee, isSubscriptionUpdate: !1 }
                : { discountOffer: ee, isSubscriptionUpdate: null != D, fractionalPremiumInfo: eE },
        );
        ew = (0, l.jsx)(g._, { ...e });
    }
    let eD = eC
            ? void 0
            : (0, l.jsx)(el._, {
                  type: ec.type,
                  invoicePreview: ec.invoicePreview,
                  storeListing: em,
                  subscriptionPlan: V,
                  isPrepaidPaymentSource: eI,
                  giftRecipient: ep,
                  isPremiumGroupPurchase: er,
                  guildId: ef,
                  handleStepChange: b,
              }),
        eU = (0, l.jsx)(M.P, {
            activeSubscription: H ? null : D,
            isTrial: es,
            plan: V,
            isGift: w && !H,
            paymentSourceType: ey,
            discriminatedInvoicePreview: ec,
            fractionalPremiumInfo: H ? null : eE,
        }),
        eG =
            ec.type === a.u$.PREMIUM_WITH_TRIAL
                ? (0, ei.ib)(ec.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: ec.invoicePreview });
    return (0, l.jsx)(c.T_, {
        ...eM,
        purchaseItemContent: eD,
        subscriptionDetailsContent: ew,
        invoiceSummaryContent: ek,
        legalContent: eU,
        invoiceTotalDueValue: eG,
        invoiceTotalDueLabel: w && !H ? N.intl.string(z.default.Zxav97) : N.intl.string(z.default.R0cZsM),
    });
}
