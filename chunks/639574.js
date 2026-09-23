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
    C = n(263532),
    h = n(473617),
    f = n(699595),
    E = n(558620),
    S = n(669510),
    y = n(732280),
    I = n(815545),
    A = n(344159),
    g = n(45938),
    P = n(158045),
    v = n(683071),
    _ = n(834730),
    x = n(212739);
n(216238);
var T = n(202541),
    N = n(181666),
    b = n(375708),
    j = n(73663),
    R = n(577381),
    M = n(222707),
    O = n(340034),
    L = n(503698),
    k = n.n(L),
    w = n(575593),
    U = n(403581),
    D = n(17928),
    G = n(262427),
    F = n(674658),
    B = n(474012),
    H = n(607123),
    W = n(287809),
    Y = n(341535),
    K = n(225529);
function V(e) {
    let { Icon: t = U.t, iconSize: n, customGraphic: i, gradientColor: r = "nitro-pink", ...a } = e;
    return (0, l.jsx)(G.J, {
        gradientColor: r,
        ...(null != i ? { customGraphic: i } : { Icon: t, iconSize: n }),
        ...a,
    });
}
function Z(e) {
    let { skuIds: t, text: n, gradientColor: r = "nitro-pink" } = e,
        a = (0, D.bG)([W.default], () => W.default.getCurrentUser()),
        { product: s } = (0, F.q)(t[0]),
        o = i.useMemo(
            () =>
                null != s && t.length > 1
                    ? b.intl.format(Y.default.XoHiqS, { name: s.name, count: t.length - 1 })
                    : s?.name,
            [s, t.length],
        ),
        u = (0, B.tP)(s);
    return null == u
        ? null
        : (0, l.jsx)(G.A, {
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
                      children: (0, l.jsx)(H.pL, {
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
                      (0, l.jsx)(_.E, { variant: "text-sm/medium", color: "currentColor", children: n }),
                      null != o && (0, l.jsx)(_.E, { variant: "text-sm/medium", color: "currentColor", children: o }),
                  ],
              }),
          });
}
var q = n(583741),
    z = n(750532),
    Q = n(216641),
    $ = n(377058);
function J(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = b.intl.string(b.t["u+Cw58"]),
            location: c = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: d } = (0, u.Y)(),
        m = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? b.intl.string(b.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
            }),
            [s, n, d],
        );
    return (0, l.jsx)($.N, {
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
            metadata: L,
            reviewWarningMessage: k,
            handlePaymentSourceAdd: w,
            handleStepChange: U,
        } = e,
        {
            checkoutInvoicePreview: D,
            checkoutPriceOptions: G,
            checkoutInvoiceError: F,
            referralTrialOfferId: B,
            isGift: H,
            activeSubscription: W,
            shouldDisallowPlanSelection: Y,
            expressCheckoutSubmitting: K,
            shouldUseStripeExpressCheckout: $,
            premiumPlanOptions: en,
        } = (0, C.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            isGift: e.isGift,
            activeSubscription: e.activeSubscription,
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
            shouldUseStripeExpressCheckout: e.getShouldUseStripeExpressCheckout(),
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
        })),
        { selectedPlanFromFluxStore: el, selectedPlanId: ei } = (0, E.D)(),
        {
            isEligibleForTrial: er,
            discountOffer: ea,
            premiumGroupDiscountOffer: es,
            isPremiumGroupPurchase: eo,
        } = (0, d.i)(),
        eu = i.useMemo(() => er && null != t, [er, t]),
        {
            discriminatedInvoicePreview: ec,
            subscriptionPeriodEnd: ed,
            proratedInvoicePreview: em,
            purchaseDisabled: ep,
        } = (function (e) {
            let { selectedPlanId: t, verifiedTrialId: n, metadata: l, isVerifiedTrial: r = !1 } = e,
                { priceOptions: a, activeSubscription: s } = (0, C.t4)((e) => ({
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
                        } = (0, C.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                            renewalInvoicePreview: e.renewalInvoicePreview,
                            quantity: e.quantity,
                            primaryInvoicesError: e.get("primaryInvoicesError"),
                        })),
                        { isGift: y } = (0, p.Pv)(),
                        {
                            subscriptionPlan: I,
                            purchaseDisabled: A,
                            newItems: g,
                            preventInvoiceFetch: P,
                        } = (0, h.TP)({ selectedPlanId: t, priceOptions: n }),
                        {
                            universalInvoiceRequestParams: v,
                            checkoutInvoiceRequestParams: _,
                            renewalInvoiceRequestParams: x,
                        } = (0, h.jq)({
                            items: g,
                            preventFetch: P,
                            priceOptions: n,
                            trialId: l,
                            subscriptionMetadata: r,
                        }),
                        T = i.useMemo(
                            () =>
                                y
                                    ? {
                                          type: "premium_one_time_gift_purchase_invoice",
                                          params: { ...v, skuId: s, subscriptionPlanId: t, quantity: E },
                                      }
                                    : { type: "subscription_checkout_invoice", params: _ },
                            [v, _, y, t, s, E],
                        ),
                        N = i.useMemo(() => (y ? null : { type: "subscription_renewal_invoice", params: x }), [x, y]);
                    (i.useEffect(() => {
                        o(T);
                    }, [T, o]),
                        i.useEffect(() => {
                            u(N);
                        }, [N, u]));
                    let { proratedInvoicePreview: b } = i.useMemo(() => ({ proratedInvoicePreview: d }), [d]),
                        { discountInvoiceError: j } = (0, f.W)({ priceOptions: n, trialId: l, metadata: r }),
                        R = i.useMemo(() => S ?? j, [S, j]),
                        M = i.useMemo(
                            () =>
                                y ? c.u$.PREMIUM_GIFT : a ? c.u$.PREMIUM_WITH_TRIAL : c.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [y, a],
                        ),
                        { discriminatedInvoicePreview: O } = (0, c.KY)({
                            invoiceError: R,
                            subscriptionPlan: I,
                            invoiceTypeDiscriminator: M,
                            shouldSetPurchasePreviewErrorFromInvoice: !0,
                        }),
                        L = i.useMemo(() => (null != b ? b.subscriptionPeriodEnd : void 0), [b]);
                    return {
                        checkoutInvoicePreview: d,
                        discriminatedInvoicePreview: O,
                        proratedInvoicePreview: b,
                        renewalInvoicePreview: m,
                        purchaseDisabled: A,
                        invoiceError: R,
                        subscriptionPeriodEnd: L,
                    };
                })({ selectedPlanId: t, priceOptions: a, trialId: n, metadata: l, isTrial: r });
            return {
                purchaseDisabled: o,
                activeSubscription: s,
                subscriptionPeriodEnd: m,
                discriminatedInvoicePreview: u,
                proratedInvoicePreview: d,
            };
        })({ selectedPlanId: ei, verifiedTrialId: t, metadata: L, isVerifiedTrial: eu }),
        eC = (0, m.K)(),
        eh = es ?? ea,
        { giftRecipient: ef } = (0, p.Pv)(),
        eE = H && (0, g.Ik)(ef),
        eS = (0, C.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: eu })) && !eo && !Y,
        ey = L?.guild_id ?? void 0,
        eI = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        { paymentSources: eA } = (0, u.j)(),
        {
            hasEntitlements: eg,
            paymentSourceType: eP,
            isPrepaid: ev,
            paymentSourceOptionalWarningCopy: e_,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, C.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, Q.g)(n, a),
                o = (0, P.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, A.X)(t.id, r),
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
        })({ subscriptionPlan: el, paymentSources: eA }),
        ex = em ?? D,
        eT = i.useMemo(
            () => null != eh && null != eh.discount && null != ex && (0, I.Ro)(ex, eh.discount.id),
            [eh, ex],
        ),
        eN = (0, l.jsx)(J, {
            label: b.intl.string(b.t["u+Cw58"]),
            handlePaymentSourceAdd: w,
            isTrial: eu,
            hideCurrencySelect: eT,
            disabled: ep,
            hasEntitlements: eg,
        }),
        eb = (0, y.V)(B),
        ej = H && el.interval === T.WT.YEAR && (0, P.xq)(el.id),
        eR = (0, P.L_)({ planId: el.id, isGift: !0, priceOptions: G, subscriptionPlan: el }),
        eM = i.useMemo(() => {
            if (null != eR && ej)
                return { headerBadgeText: b.intl.formatToPlainString(q.default["Mi5BH/"], { percentOff: eR }) };
        }, [eR, ej]),
        eO = (0, z.Fe)(eM),
        { upperInlineNoticeProps: eL, promotionalNoticeContent: ek } = (function (e) {
            let {
                    planGroup: t,
                    yearlySavingsPercent: n,
                    isGiftingPremiumYearly: r,
                    mainPreviewInvoice: a,
                    discriminatedInvoicePreview: s,
                    subscriptionPeriodEnd: o,
                    currentInvoiceHasMatchingDiscountOffer: u,
                    discountOffer: d,
                    isEligibleForTrial: m,
                    isPremiumGroupPurchase: h,
                    fractionalPremiumInfo: f,
                } = e,
                { isGift: S, activeSubscription: y } = (0, C.t4)((e) => ({
                    isGift: e.isGift,
                    activeSubscription: e.activeSubscription,
                })),
                { selectedPlanFromFluxStore: I, selectedPlanId: A } = (0, E.D)(),
                { selectedGiftingPromotionRewards: g } = (0, p.Pv)(),
                { copy: P, daysCount: L, userTrialOffer: k } = (0, j.O8)(),
                w = (0, M.pt)({
                    fractionalPremiumInfo: f,
                    selectedPlanId: A,
                    planGroup: t,
                    premiumSubscription: y,
                    isGift: S,
                }),
                U = i.useMemo(() => {
                    if (null != s && s.type === c.u$.PREMIUM_WITH_TRIAL && null != k)
                        return (0, l.jsx)(V, { text: b.intl.format(q.default.IAsfR5, { daysCount: L }) });
                    if (null != d && u) {
                        let e = d.discount,
                            t = e.intervalCount;
                        if (e.intervalType === T.Ff.MONTH)
                            return (0, l.jsx)(V, {
                                text: b.intl.format(q.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                            });
                        if (e.intervalType === T.Ff.YEAR)
                            return (0, l.jsx)(V, {
                                text: b.intl.format(q.default["tUzT/U"], { percentOff: e.amount }),
                            });
                    }
                    return S && g.length > 0
                        ? (0, l.jsx)(Z, { skuIds: g, text: b.intl.format(q.default["XWo+Bp"], { count: g.length }) })
                        : r && null != n
                          ? (0, l.jsx)(V, { text: b.intl.format(q.default["7sYIBL"], { savingsPercent: n }) })
                          : null;
                }, [k, u, d, L, s, n, r, S, g]),
                D = (function (e) {
                    let { skuId: t, isGift: n } = e,
                        r = (0, x.O)();
                    return i.useMemo(
                        () =>
                            n || t !== T.pe.TIER_2 || !1 === r
                                ? null
                                : (0, l.jsx)(v.w, {
                                      type: "info",
                                      children: (0, l.jsx)(_.E, {
                                          variant: "text-sm/medium",
                                          children: b.intl.format(N.default.Urtyu9, { days: 7 }),
                                      }),
                                  }),
                        [n, t, r],
                    );
                })({ skuId: I.skuId, isGift: S }),
                G = (0, R.i)({ planSkuId: I.skuId, invoice: a });
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        w
                            ? e.push({
                                  directContent: (0, l.jsx)(O.l, {
                                      fractionalPremiumInfo: f,
                                      isEligibleForTrial: m,
                                      trialPeriodCopy: P,
                                      subscriptionPeriodEnd: o,
                                  }),
                                  key: "fractional-premium-notice",
                              })
                            : h && e.push({ type: "info", message: (0, M.Nn)(), key: "premium-group-purchase-notice" }),
                        null != D && e.push({ directContent: D, key: "xbox-perks-notice" }),
                        e.length > 0 ? e : null
                    );
                }, [w, f, m, P, o, h, D]),
                promotionalNoticeContent: U ?? G ?? null,
            };
        })({
            planGroup: n,
            yearlySavingsPercent: eR,
            isGiftingPremiumYearly: ej,
            mainPreviewInvoice: ex,
            discriminatedInvoicePreview: ec,
            subscriptionPeriodEnd: ed,
            currentInvoiceHasMatchingDiscountOffer: eT,
            discountOffer: eh,
            isEligibleForTrial: er,
            isPremiumGroupPurchase: eo,
            fractionalPremiumInfo: eI,
        }),
        ew = i.useMemo(() => {
            let e = [];
            (null != k && "" !== k && e.push({ type: "warning", message: k, key: "review-warning" }),
                null != e_ && e.push({ type: "info", message: e_, key: "payment-source-optional-warning" }));
            let t = [...e, ...(eL ?? [])];
            return t.length > 0 ? t : null;
        }, [eL, k, e_]),
        eU = null != ec ? ec.invoicePreview : null,
        { priceOptions: eD, planPricesLoading: eG } = (0, P.Pr)(G, eU, F),
        eF = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: ew,
            planSelectContent: eS
                ? (0, l.jsx)(X.X, {
                      disabled: ep || K,
                      selectedPlanId: ei,
                      priceOptions: eD,
                      planOptions: en,
                      subscriptionPeriodEnd: ed,
                      planPricesLoading: eG,
                  })
                : void 0,
            paymentMethodContent: eN,
            promotionalNoticeContent: ek,
            headerBadgeConfig: eO,
        };
    if (null == ec && null != F) return (0, l.jsx)(o.T_, { ...eF, legalContent: null });
    if (null == ec || ec.type === c.u$.LOADING)
        return (0, l.jsx)(o.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eO });
    let eB = null != eb ? eb.subscriptionTrial : void 0,
        eH =
            ec.type === c.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(s.k, {
                      discriminatedInvoicePreview: ec,
                      subscriptionPlan: el,
                      isPrepaidPaymentSource: ev,
                      subscriptionTrial: eB,
                      isCustomGift: eE,
                  }),
        eW = null;
    if (
        !ev &&
        (c.ME.has(ec.type) || ec.type === c.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ec &&
        null != ec.renewalInvoicePreview
    ) {
        let e = (0, et.Gj)(ec.invoicePreview, ec.renewalInvoicePreview, eB, {
            discountOffer: eh,
            isSubscriptionUpdate: null != W,
            fractionalPremiumInfo: eI,
        });
        eW = (0, l.jsx)(S._, { ...e, defaultExpanded: $ });
    }
    let eY = eS
            ? void 0
            : (0, l.jsx)(ee._, {
                  type: ec.type,
                  invoicePreview: ec.invoicePreview,
                  storeListing: eC,
                  subscriptionPlan: el,
                  isPrepaidPaymentSource: ev,
                  giftRecipient: ef,
                  isPremiumGroupPurchase: eo,
                  guildId: ey,
                  handleStepChange: U,
              }),
        eK = (0, l.jsx)(O.P, {
            activeSubscription: W,
            isTrial: eu,
            plan: el,
            isGift: H,
            paymentSourceType: eP,
            discriminatedInvoicePreview: ec,
            fractionalPremiumInfo: eI,
        }),
        eV =
            ec.type === c.u$.PREMIUM_WITH_TRIAL
                ? (0, et.ib)(ec.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: ec.invoicePreview });
    return (0, l.jsx)(o.T_, {
        ...eF,
        purchaseItemContent: eY,
        subscriptionDetailsContent: eW,
        invoiceSummaryContent: eH,
        legalContent: eK,
        invoiceTotalDueValue: eV,
        invoiceTotalDueLabel: H ? b.intl.string(q.default.Zxav97) : b.intl.string(q.default.R0cZsM),
    });
}
