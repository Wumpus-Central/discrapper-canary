(n.d(t, { _: () => en }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(531260),
    a = n(854354),
    s = n(482419),
    o = n(38785),
    u = n(202475),
    c = n(400612),
    d = n(463376),
    m = n(266060),
    p = n(951305),
    h = n(123816),
    C = n(473617),
    f = n(699595),
    E = n(558620),
    S = n(669510),
    g = n(732280),
    I = n(563020),
    A = n(436102),
    y = n(45938),
    x = n(24482),
    P = n(683071),
    v = n(212739);
n(216238);
var _ = n(202541),
    T = n(181666),
    N = n(105292),
    b = n(462444),
    j = n(577381),
    R = n(222707),
    O = n(340034),
    M = n(503698),
    L = n.n(M),
    k = n(575593),
    w = n(17928),
    D = n(403581),
    U = n(834730),
    G = n(262427),
    F = n(674658),
    B = n(474012),
    H = n(607123),
    W = n(287809),
    V = n(341535),
    Y = n(189399);
function K(e) {
    let { Icon: t = D.t, iconSize: n, customGraphic: i, gradientColor: r = "nitro-pink", ...a } = e;
    return (0, l.jsx)(G.J, {
        gradientColor: r,
        ...(null != i ? { customGraphic: i } : { Icon: t, iconSize: n }),
        ...a,
    });
}
function Z(e) {
    let { skuIds: t, text: n, gradientColor: r = "nitro-pink" } = e,
        a = (0, w.bG)([W.default], () => W.default.getCurrentUser()),
        { product: s } = (0, F.q)(t[0]),
        o = i.useMemo(
            () =>
                null != s && t.length > 1
                    ? N.intl.format(V.default.XoHiqS, { name: s.name, count: t.length - 1 })
                    : s?.name,
            [s, t.length],
        ),
        u = (0, B.tP)(s);
    return null == u
        ? null
        : (0, l.jsx)(G.A, {
              className: Y.Xx,
              gradientColor: r,
              customGraphic: (0, l.jsx)("div", {
                  className: Y.yn,
                  children: (0, l.jsx)("div", {
                      className: L()(Y.ML, {
                          [Y.M]: s?.type === k.R.AVATAR_DECORATION,
                          [Y.Hm]: s?.type === k.R.PROFILE_EFFECT,
                          [Y.hH]: s?.type === k.R.PROFILE_FRAME,
                          [Y.qF]: s?.type === k.R.NAMEPLATE,
                          [Y.l2]: s?.type === k.R.BUNDLE,
                      }),
                      children: (0, l.jsx)(H.pL, {
                          collectiblesItem: u,
                          user: a,
                          nameplatePreviewStyle: Y.M4,
                          nameplatePreviewRescalerStyle: Y.N1,
                      }),
                  }),
              }),
              children: (0, l.jsxs)("div", {
                  className: Y.zN,
                  children: [
                      (0, l.jsx)(U.E, { variant: "text-sm/medium", color: "currentColor", children: n }),
                      null != o && (0, l.jsx)(U.E, { variant: "text-sm/medium", color: "currentColor", children: o }),
                  ],
              }),
          });
}
var q = n(583741),
    z = n(750532),
    $ = n(216641),
    Q = n(414051);
function J(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = N.intl.string(N.t["u+Cw58"]),
            location: c = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: d } = (0, u.Y)(),
        m = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? N.intl.string(N.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
            }),
            [s, n, d],
        );
    return (0, l.jsx)(Q.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: m,
        location: c,
        hideCurrencySelect: r,
    });
}
var X = n(845012),
    ee = n(134638),
    et = n(888751);
function en(e) {
    let {
            verifiedTrialId: t,
            planGroup: n,
            metadata: M,
            reviewWarningMessage: L,
            handlePaymentSourceAdd: k,
            handleStepChange: w,
        } = e,
        {
            checkoutInvoicePreview: D,
            checkoutPriceOptions: U,
            checkoutInvoiceError: G,
            referralTrialOfferId: F,
            isGift: B,
            activeSubscription: H,
            shouldDisallowPlanSelection: W,
            expressCheckoutSubmitting: V,
            premiumPlanOptions: Y,
        } = (0, h.t4)((e) => ({
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
        { selectedPlanFromFluxStore: Q, selectedPlanId: en } = (0, E.D)(),
        {
            isEligibleForTrial: el,
            discountOffer: ei,
            premiumGroupDiscountOffer: er,
            isPremiumGroupPurchase: ea,
        } = (0, d.i)(),
        es = i.useMemo(() => el && null != t, [el, t]),
        {
            discriminatedInvoicePreview: eo,
            subscriptionPeriodEnd: eu,
            proratedInvoicePreview: ec,
            purchaseDisabled: ed,
        } = (function (e) {
            let { selectedPlanId: t, verifiedTrialId: n, metadata: l, isVerifiedTrial: r = !1 } = e,
                { priceOptions: a, activeSubscription: s } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                })),
                {
                    purchaseDisabled: o,
                    discriminatedInvoicePreview: u,
                    proratedInvoicePreview: d,
                    subscriptionPeriodEnd: m,
                } = (function (e) {
                    let { selectedPlanId: t, priceOptions: n, trialId: l, metadata: r, isTrial: a = !1 } = e,
                        {
                            selectedSkuId: s,
                            setFetchCheckoutInvoicePreviewRequest: o,
                            setFetchRenewalInvoicePreviewRequest: u,
                            checkoutInvoicePreview: d,
                            renewalInvoicePreview: m,
                            quantity: E,
                            primaryInvoicesError: S,
                        } = (0, h.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                            renewalInvoicePreview: e.renewalInvoicePreview,
                            quantity: e.quantity,
                            primaryInvoicesError: e.get("primaryInvoicesError"),
                        })),
                        { isGift: g } = (0, p.Pv)(),
                        {
                            purchaseDisabled: I,
                            newItems: A,
                            preventInvoiceFetch: y,
                        } = (0, C.TP)({ selectedPlanId: t, priceOptions: n }),
                        {
                            universalInvoiceRequestParams: x,
                            checkoutInvoiceRequestParams: P,
                            renewalInvoiceRequestParams: v,
                        } = (0, C.jq)({
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
                                          params: { ...x, skuId: s, subscriptionPlanId: t, quantity: E },
                                      }
                                    : { type: "subscription_checkout_invoice", params: P },
                            [x, P, g, t, s, E],
                        ),
                        T = i.useMemo(() => (g ? null : { type: "subscription_renewal_invoice", params: v }), [v, g]);
                    (i.useEffect(() => {
                        o(_);
                    }, [_, o]),
                        i.useEffect(() => {
                            u(T);
                        }, [T, u]));
                    let { proratedInvoicePreview: N } = i.useMemo(() => ({ proratedInvoicePreview: d }), [d]),
                        { discountInvoiceError: b } = (0, f.W)({ priceOptions: n, trialId: l, metadata: r }),
                        j = i.useMemo(() => S ?? b, [S, b]),
                        R = i.useMemo(
                            () =>
                                g ? c.u$.PREMIUM_GIFT : a ? c.u$.PREMIUM_WITH_TRIAL : c.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [g, a],
                        ),
                        { discriminatedInvoicePreview: O } = (0, c.KY)({
                            invoiceError: j,
                            invoiceTypeDiscriminator: R,
                            shouldSetPurchasePreviewErrorFromInvoice: !0,
                        }),
                        M = i.useMemo(() => (null != N ? N.subscriptionPeriodEnd : void 0), [N]);
                    return {
                        checkoutInvoicePreview: d,
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
                proratedInvoicePreview: d,
            };
        })({ selectedPlanId: en, verifiedTrialId: t, metadata: M, isVerifiedTrial: es }),
        em = (0, m.K)(),
        ep = er ?? ei,
        { giftRecipient: eh } = (0, p.Pv)(),
        eC = B && (0, y.Ik)(eh),
        ef = (0, h.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: es })) && !ea && !W,
        eE = M?.guild_id ?? void 0,
        eS = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        { paymentSources: eg } = (0, u.j)(),
        {
            hasEntitlements: eI,
            paymentSourceType: eA,
            isPrepaid: ey,
            paymentSourceOptionalWarningCopy: ex,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, $.g)(n, a),
                o = (0, x.J$)(l.paymentSourceId),
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
        })({ subscriptionPlan: Q, paymentSources: eg }),
        eP = ec ?? D,
        ev = i.useMemo(
            () => null != ep && null != ep.discount && null != eP && (0, I.Ro)(eP, ep.discount.id),
            [ep, eP],
        ),
        e_ = (0, l.jsx)(J, {
            label: N.intl.string(N.t["u+Cw58"]),
            handlePaymentSourceAdd: k,
            isTrial: es,
            hideCurrencySelect: ev,
            disabled: ed,
            hasEntitlements: eI,
        }),
        eT = (0, g.V)(F),
        eN = B && (0, et.uH)(Q),
        eb = (0, x.L_)({ planId: Q.id, isGift: !0, priceOptions: U, subscriptionPlan: Q }),
        ej = i.useMemo(() => {
            if (null != eb && eN)
                return { headerBadgeText: N.intl.formatToPlainString(q.default["Mi5BH/"], { percentOff: eb }) };
        }, [eb, eN]),
        eR = (0, z.Fe)(ej),
        { upperInlineNoticeProps: eO, promotionalNoticeContent: eM } = (function (e) {
            let {
                    planGroup: t,
                    giftSavingsPercent: n,
                    isGiftingMultiPeriodPremium: r,
                    mainPreviewInvoice: a,
                    discriminatedInvoicePreview: s,
                    subscriptionPeriodEnd: o,
                    currentInvoiceHasMatchingDiscountOffer: u,
                    discountOffer: d,
                    isEligibleForTrial: m,
                    isPremiumGroupPurchase: C,
                    fractionalPremiumInfo: f,
                } = e,
                { isGift: S, activeSubscription: g } = (0, h.t4)((e) => ({
                    isGift: e.isGift,
                    activeSubscription: e.activeSubscription,
                })),
                { selectedPlanFromFluxStore: I, selectedPlanId: A } = (0, E.D)(),
                { selectedGiftingPromotionRewards: y } = (0, p.Pv)(),
                { copy: x, daysCount: M, userTrialOffer: L } = (0, b.O8)(),
                k = (0, R.pt)({
                    fractionalPremiumInfo: f,
                    selectedPlanId: A,
                    planGroup: t,
                    premiumSubscription: g,
                    isGift: S,
                }),
                w = i.useMemo(() => {
                    if (null != s && s.type === c.u$.PREMIUM_WITH_TRIAL && null != L)
                        return (0, l.jsx)(K, { text: N.intl.format(q.default.IAsfR5, { daysCount: M }) });
                    if (null != d && u) {
                        let e = d.discount,
                            t = e.intervalCount;
                        if (e.intervalType === _.Ff.MONTH)
                            return (0, l.jsx)(K, {
                                text: N.intl.format(q.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                            });
                        if (e.intervalType === _.Ff.YEAR)
                            return (0, l.jsx)(K, {
                                text: N.intl.format(q.default["tUzT/U"], { percentOff: e.amount }),
                            });
                    }
                    return S && y.length > 0
                        ? (0, l.jsx)(Z, { skuIds: y, text: N.intl.format(q.default["XWo+Bp"], { count: y.length }) })
                        : r && null != n
                          ? (0, l.jsx)(K, {
                                text:
                                    I.interval === _.WT.YEAR
                                        ? N.intl.format(q.default["7sYIBL"], { savingsPercent: n })
                                        : N.intl.format(q.default.uCXulJ, {
                                              intervalCount: I.intervalCount,
                                              savingsPercent: n,
                                          }),
                            })
                          : null;
                }, [L, u, d, M, s, n, r, I.interval, I.intervalCount, S, y]),
                D = (function (e) {
                    let { skuId: t, isGift: n } = e,
                        r = (0, v.O)();
                    return i.useMemo(
                        () =>
                            n || t !== _.pe.TIER_2 || !1 === r
                                ? null
                                : (0, l.jsx)(P.w, {
                                      type: "info",
                                      message: N.intl.format(T.default.Urtyu9, { days: 7 }),
                                      role: "none",
                                  }),
                        [n, t, r],
                    );
                })({ skuId: I.skuId, isGift: S }),
                U = (0, j.i)({ planSkuId: I.skuId, invoice: a });
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        k
                            ? e.push({
                                  directContent: (0, l.jsx)(O.l, {
                                      fractionalPremiumInfo: f,
                                      isEligibleForTrial: m,
                                      trialPeriodCopy: x,
                                      subscriptionPeriodEnd: o,
                                  }),
                                  key: "fractional-premium-notice",
                              })
                            : C &&
                              e.push({
                                  type: "info",
                                  message: (0, R.Nn)(),
                                  role: "none",
                                  key: "premium-group-purchase-notice",
                              }),
                        null != D && e.push({ directContent: D, key: "xbox-perks-notice" }),
                        e.length > 0 ? e : null
                    );
                }, [k, f, m, x, o, C, D]),
                promotionalNoticeContent: w ?? U ?? null,
            };
        })({
            planGroup: n,
            giftSavingsPercent: eb,
            isGiftingMultiPeriodPremium: eN,
            mainPreviewInvoice: eP,
            discriminatedInvoicePreview: eo,
            subscriptionPeriodEnd: eu,
            currentInvoiceHasMatchingDiscountOffer: ev,
            discountOffer: ep,
            isEligibleForTrial: el,
            isPremiumGroupPurchase: ea,
            fractionalPremiumInfo: eS,
        }),
        eL = i.useMemo(() => {
            let e = [];
            (null != L && "" !== L && e.push({ type: "warning", message: L, role: "none", key: "review-warning" }),
                null != ex &&
                    e.push({ type: "info", message: ex, role: "status", key: "payment-source-optional-warning" }));
            let t = [...e, ...(eO ?? [])];
            return t.length > 0 ? t : null;
        }, [eO, L, ex]),
        ek = null != eo ? eo.invoicePreview : null,
        { priceOptions: ew, planPricesLoading: eD } = (0, x.Pr)(U, ek, G),
        eU = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eL,
            planSelectContent: ef
                ? (0, l.jsx)(X.X, {
                      disabled: ed || V,
                      selectedPlanId: en,
                      priceOptions: ew,
                      planOptions: Y,
                      subscriptionPeriodEnd: eu,
                      planPricesLoading: eD,
                  })
                : void 0,
            paymentMethodContent: e_,
            promotionalNoticeContent: eM,
            headerBadgeConfig: eR,
        };
    if (null == eo && null != G) return (0, l.jsx)(o.T_, { ...eU, legalContent: null });
    if (null == eo || eo.type === c.u$.LOADING)
        return (0, l.jsx)(o.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eR });
    let eG = null != eT ? eT.subscriptionTrial : void 0,
        eF =
            eo.type === c.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(s.k, {
                      discriminatedInvoicePreview: eo,
                      subscriptionPlan: Q,
                      isPrepaidPaymentSource: ey,
                      subscriptionTrial: eG,
                      isCustomGift: eC,
                  }),
        eB = null;
    if (
        !ey &&
        (c.ME.has(eo.type) || eo.type === c.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in eo &&
        null != eo.renewalInvoicePreview
    ) {
        let e = (0, et.Gj)(eo.invoicePreview, eo.renewalInvoicePreview, eG, {
            discountOffer: ep,
            isSubscriptionUpdate: null != H,
            fractionalPremiumInfo: eS,
        });
        eB = (0, l.jsx)(S._, { ...e });
    }
    let eH = ef
            ? void 0
            : (0, l.jsx)(ee._, {
                  type: eo.type,
                  invoicePreview: eo.invoicePreview,
                  storeListing: em,
                  subscriptionPlan: Q,
                  isPrepaidPaymentSource: ey,
                  giftRecipient: eh,
                  isPremiumGroupPurchase: ea,
                  guildId: eE,
                  handleStepChange: w,
              }),
        eW = (0, l.jsx)(O.P, {
            activeSubscription: H,
            isTrial: es,
            plan: Q,
            isGift: B,
            paymentSourceType: eA,
            discriminatedInvoicePreview: eo,
            fractionalPremiumInfo: eS,
        }),
        eV =
            eo.type === c.u$.PREMIUM_WITH_TRIAL
                ? (0, et.ib)(eo.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: eo.invoicePreview });
    return (0, l.jsx)(o.T_, {
        ...eU,
        purchaseItemContent: eH,
        subscriptionDetailsContent: eB,
        invoiceSummaryContent: eF,
        legalContent: eW,
        invoiceTotalDueValue: eV,
        invoiceTotalDueLabel: B ? N.intl.string(q.default.Zxav97) : N.intl.string(q.default.R0cZsM),
    });
}
