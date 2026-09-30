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
    p = n(266060),
    m = n(951305),
    h = n(263532),
    C = n(473617),
    f = n(699595),
    S = n(558620),
    E = n(669510),
    y = n(732280),
    A = n(815545),
    I = n(344159),
    g = n(45938),
    P = n(158045),
    v = n(683071),
    x = n(834730),
    _ = n(212739);
n(216238);
var T = n(202541),
    N = n(182732),
    b = n(375708),
    j = n(73663),
    R = n(577381),
    O = n(222707),
    M = n(340034),
    L = n(503698),
    k = n.n(L),
    w = n(575593),
    D = n(17928),
    U = n(403581),
    G = n(262427),
    F = n(674658),
    B = n(474012),
    H = n(607123),
    W = n(287809),
    Y = n(805161),
    V = n(225529);
function K(e) {
    let { Icon: t = U.t, iconSize: n, customGraphic: i, gradientColor: r = "nitro-pink", ...a } = e;
    return (0, l.jsx)(G.J, {
        gradientColor: r,
        ...(null != i ? { customGraphic: i } : { Icon: t, iconSize: n }),
        ...a,
    });
}
function q(e) {
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
              className: V.Xx,
              gradientColor: r,
              customGraphic: (0, l.jsx)("div", {
                  className: V.yn,
                  children: (0, l.jsx)("div", {
                      className: k()(V.ML, {
                          [V.M]: s?.type === w.R.AVATAR_DECORATION,
                          [V.Hm]: s?.type === w.R.PROFILE_EFFECT,
                          [V.hH]: s?.type === w.R.PROFILE_FRAME,
                          [V.qF]: s?.type === w.R.NAMEPLATE,
                          [V.l2]: s?.type === w.R.BUNDLE,
                      }),
                      children: (0, l.jsx)(H.pL, {
                          collectiblesItem: u,
                          user: a,
                          nameplatePreviewStyle: V.M4,
                          nameplatePreviewRescalerStyle: V.N1,
                      }),
                  }),
              }),
              children: (0, l.jsxs)("div", {
                  className: V.zN,
                  children: [
                      (0, l.jsx)(x.E, { variant: "text-sm/medium", color: "currentColor", children: n }),
                      null != o && (0, l.jsx)(x.E, { variant: "text-sm/medium", color: "currentColor", children: o }),
                  ],
              }),
          });
}
var Z = n(649975),
    z = n(750532),
    $ = n(216641),
    Q = n(377058);
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
        p = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? b.intl.string(b.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
            }),
            [s, n, d],
        );
    return (0, l.jsx)(Q.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: p,
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
            handleStepChange: D,
        } = e,
        {
            checkoutInvoicePreview: U,
            checkoutPriceOptions: G,
            checkoutInvoiceError: F,
            referralTrialOfferId: B,
            isGift: H,
            activeSubscription: W,
            shouldDisallowPlanSelection: Y,
            expressCheckoutSubmitting: V,
            shouldUseStripeExpressCheckout: Q,
            premiumPlanOptions: en,
        } = (0, h.t4)((e) => ({
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
        { selectedPlanFromFluxStore: el, selectedPlanId: ei } = (0, S.D)(),
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
            proratedInvoicePreview: ep,
            purchaseDisabled: em,
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
                    subscriptionPeriodEnd: p,
                } = (function (e) {
                    let { selectedPlanId: t, priceOptions: n, trialId: l, metadata: r, isTrial: a = !1 } = e,
                        {
                            selectedSkuId: s,
                            setFetchCheckoutInvoicePreviewRequest: o,
                            setFetchRenewalInvoicePreviewRequest: u,
                            checkoutInvoicePreview: d,
                            renewalInvoicePreview: p,
                            quantity: S,
                            primaryInvoicesError: E,
                        } = (0, h.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                            renewalInvoicePreview: e.renewalInvoicePreview,
                            quantity: e.quantity,
                            primaryInvoicesError: e.get("primaryInvoicesError"),
                        })),
                        { isGift: y } = (0, m.Pv)(),
                        {
                            subscriptionPlan: A,
                            purchaseDisabled: I,
                            newItems: g,
                            preventInvoiceFetch: P,
                        } = (0, C.TP)({ selectedPlanId: t, priceOptions: n }),
                        {
                            universalInvoiceRequestParams: v,
                            checkoutInvoiceRequestParams: x,
                            renewalInvoiceRequestParams: _,
                        } = (0, C.jq)({
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
                                          params: { ...v, skuId: s, subscriptionPlanId: t, quantity: S },
                                      }
                                    : { type: "subscription_checkout_invoice", params: x },
                            [v, x, y, t, s, S],
                        ),
                        N = i.useMemo(() => (y ? null : { type: "subscription_renewal_invoice", params: _ }), [_, y]);
                    (i.useEffect(() => {
                        o(T);
                    }, [T, o]),
                        i.useEffect(() => {
                            u(N);
                        }, [N, u]));
                    let { proratedInvoicePreview: b } = i.useMemo(() => ({ proratedInvoicePreview: d }), [d]),
                        { discountInvoiceError: j } = (0, f.W)({ priceOptions: n, trialId: l, metadata: r }),
                        R = i.useMemo(() => E ?? j, [E, j]),
                        O = i.useMemo(
                            () =>
                                y ? c.u$.PREMIUM_GIFT : a ? c.u$.PREMIUM_WITH_TRIAL : c.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [y, a],
                        ),
                        { discriminatedInvoicePreview: M } = (0, c.KY)({
                            invoiceError: R,
                            subscriptionPlan: A,
                            invoiceTypeDiscriminator: O,
                            shouldSetPurchasePreviewErrorFromInvoice: !0,
                        }),
                        L = i.useMemo(() => (null != b ? b.subscriptionPeriodEnd : void 0), [b]);
                    return {
                        checkoutInvoicePreview: d,
                        discriminatedInvoicePreview: M,
                        proratedInvoicePreview: b,
                        renewalInvoicePreview: p,
                        purchaseDisabled: I,
                        invoiceError: R,
                        subscriptionPeriodEnd: L,
                    };
                })({ selectedPlanId: t, priceOptions: a, trialId: n, metadata: l, isTrial: r });
            return {
                purchaseDisabled: o,
                activeSubscription: s,
                subscriptionPeriodEnd: p,
                discriminatedInvoicePreview: u,
                proratedInvoicePreview: d,
            };
        })({ selectedPlanId: ei, verifiedTrialId: t, metadata: L, isVerifiedTrial: eu }),
        eh = (0, p.K)(),
        eC = es ?? ea,
        { giftRecipient: ef } = (0, m.Pv)(),
        eS = H && (0, g.Ik)(ef),
        eE = (0, h.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: eu })) && !eo && !Y,
        ey = L?.guild_id ?? void 0,
        eA = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        { paymentSources: eI } = (0, u.j)(),
        {
            hasEntitlements: eg,
            paymentSourceType: eP,
            isPrepaid: ev,
            paymentSourceOptionalWarningCopy: ex,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, $.g)(n, a),
                o = (0, P.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, I.X)(t.id, r),
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
        })({ subscriptionPlan: el, paymentSources: eI }),
        e_ = ep ?? U,
        eT = i.useMemo(
            () => null != eC && null != eC.discount && null != e_ && (0, A.Ro)(e_, eC.discount.id),
            [eC, e_],
        ),
        eN = (0, l.jsx)(J, {
            label: b.intl.string(b.t["u+Cw58"]),
            handlePaymentSourceAdd: w,
            isTrial: eu,
            hideCurrencySelect: eT,
            disabled: em,
            hasEntitlements: eg,
        }),
        eb = (0, y.V)(B),
        ej = H && el.interval === T.WT.YEAR && (0, P.xq)(el.id),
        eR = (0, P.L_)({ planId: el.id, isGift: !0, priceOptions: G, subscriptionPlan: el }),
        eO = i.useMemo(() => {
            if (null != eR && ej)
                return { headerBadgeText: b.intl.formatToPlainString(Z.default["Mi5BH/"], { percentOff: eR }) };
        }, [eR, ej]),
        eM = (0, z.Fe)(eO),
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
                    isEligibleForTrial: p,
                    isPremiumGroupPurchase: C,
                    fractionalPremiumInfo: f,
                } = e,
                { isGift: E, activeSubscription: y } = (0, h.t4)((e) => ({
                    isGift: e.isGift,
                    activeSubscription: e.activeSubscription,
                })),
                { selectedPlanFromFluxStore: A, selectedPlanId: I } = (0, S.D)(),
                { selectedGiftingPromotionRewards: g } = (0, m.Pv)(),
                { copy: P, daysCount: L, userTrialOffer: k } = (0, j.O8)(),
                w = (0, O.pt)({
                    fractionalPremiumInfo: f,
                    selectedPlanId: I,
                    planGroup: t,
                    premiumSubscription: y,
                    isGift: E,
                }),
                D = i.useMemo(() => {
                    if (null != s && s.type === c.u$.PREMIUM_WITH_TRIAL && null != k)
                        return (0, l.jsx)(K, { text: b.intl.format(Z.default.IAsfR5, { daysCount: L }) });
                    if (null != d && u) {
                        let e = d.discount,
                            t = e.intervalCount;
                        if (e.intervalType === T.Ff.MONTH)
                            return (0, l.jsx)(K, {
                                text: b.intl.format(Z.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                            });
                        if (e.intervalType === T.Ff.YEAR)
                            return (0, l.jsx)(K, {
                                text: b.intl.format(Z.default["tUzT/U"], { percentOff: e.amount }),
                            });
                    }
                    return E && g.length > 0
                        ? (0, l.jsx)(q, { skuIds: g, text: b.intl.format(Z.default["XWo+Bp"], { count: g.length }) })
                        : r && null != n
                          ? (0, l.jsx)(K, { text: b.intl.format(Z.default["7sYIBL"], { savingsPercent: n }) })
                          : null;
                }, [k, u, d, L, s, n, r, E, g]),
                U = (function (e) {
                    let { skuId: t, isGift: n } = e,
                        r = (0, _.O)();
                    return i.useMemo(
                        () =>
                            n || t !== T.pe.TIER_2 || !1 === r
                                ? null
                                : (0, l.jsx)(v.w, {
                                      type: "info",
                                      children: (0, l.jsx)(x.E, {
                                          variant: "text-sm/medium",
                                          children: b.intl.format(N.default.Urtyu9, { days: 7 }),
                                      }),
                                  }),
                        [n, t, r],
                    );
                })({ skuId: A.skuId, isGift: E }),
                G = (0, R.i)({ planSkuId: A.skuId, invoice: a });
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        w
                            ? e.push({
                                  directContent: (0, l.jsx)(M.l, {
                                      fractionalPremiumInfo: f,
                                      isEligibleForTrial: p,
                                      trialPeriodCopy: P,
                                      subscriptionPeriodEnd: o,
                                  }),
                                  key: "fractional-premium-notice",
                              })
                            : C && e.push({ type: "info", message: (0, O.Nn)(), key: "premium-group-purchase-notice" }),
                        null != U && e.push({ directContent: U, key: "xbox-perks-notice" }),
                        e.length > 0 ? e : null
                    );
                }, [w, f, p, P, o, C, U]),
                promotionalNoticeContent: D ?? G ?? null,
            };
        })({
            planGroup: n,
            yearlySavingsPercent: eR,
            isGiftingPremiumYearly: ej,
            mainPreviewInvoice: e_,
            discriminatedInvoicePreview: ec,
            subscriptionPeriodEnd: ed,
            currentInvoiceHasMatchingDiscountOffer: eT,
            discountOffer: eC,
            isEligibleForTrial: er,
            isPremiumGroupPurchase: eo,
            fractionalPremiumInfo: eA,
        }),
        ew = i.useMemo(() => {
            let e = [];
            (null != k && "" !== k && e.push({ type: "warning", message: k, key: "review-warning" }),
                null != ex && e.push({ type: "info", message: ex, key: "payment-source-optional-warning" }));
            let t = [...e, ...(eL ?? [])];
            return t.length > 0 ? t : null;
        }, [eL, k, ex]),
        eD = null != ec ? ec.invoicePreview : null,
        { priceOptions: eU, planPricesLoading: eG } = (0, P.Pr)(G, eD, F),
        eF = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: ew,
            planSelectContent: eE
                ? (0, l.jsx)(X.X, {
                      disabled: em || V,
                      selectedPlanId: ei,
                      priceOptions: eU,
                      planOptions: en,
                      subscriptionPeriodEnd: ed,
                      planPricesLoading: eG,
                  })
                : void 0,
            paymentMethodContent: eN,
            promotionalNoticeContent: ek,
            headerBadgeConfig: eM,
        };
    if (null == ec && null != F) return (0, l.jsx)(o.T_, { ...eF, legalContent: null });
    if (null == ec || ec.type === c.u$.LOADING)
        return (0, l.jsx)(o.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eM });
    let eB = null != eb ? eb.subscriptionTrial : void 0,
        eH =
            ec.type === c.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(s.k, {
                      discriminatedInvoicePreview: ec,
                      subscriptionPlan: el,
                      isPrepaidPaymentSource: ev,
                      subscriptionTrial: eB,
                      isCustomGift: eS,
                  }),
        eW = null;
    if (
        !ev &&
        (c.ME.has(ec.type) || ec.type === c.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ec &&
        null != ec.renewalInvoicePreview
    ) {
        let e = (0, et.Gj)(ec.invoicePreview, ec.renewalInvoicePreview, eB, {
            discountOffer: eC,
            isSubscriptionUpdate: null != W,
            fractionalPremiumInfo: eA,
        });
        eW = (0, l.jsx)(E._, { ...e, defaultExpanded: Q });
    }
    let eY = eE
            ? void 0
            : (0, l.jsx)(ee._, {
                  type: ec.type,
                  invoicePreview: ec.invoicePreview,
                  storeListing: eh,
                  subscriptionPlan: el,
                  isPrepaidPaymentSource: ev,
                  giftRecipient: ef,
                  isPremiumGroupPurchase: eo,
                  guildId: ey,
                  handleStepChange: D,
              }),
        eV = (0, l.jsx)(M.P, {
            activeSubscription: W,
            isTrial: eu,
            plan: el,
            isGift: H,
            paymentSourceType: eP,
            discriminatedInvoicePreview: ec,
            fractionalPremiumInfo: eA,
        }),
        eK =
            ec.type === c.u$.PREMIUM_WITH_TRIAL
                ? (0, et.ib)(ec.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: ec.invoicePreview });
    return (0, l.jsx)(o.T_, {
        ...eF,
        purchaseItemContent: eY,
        subscriptionDetailsContent: eW,
        invoiceSummaryContent: eH,
        legalContent: eV,
        invoiceTotalDueValue: eK,
        invoiceTotalDueLabel: H ? b.intl.string(Z.default.Zxav97) : b.intl.string(Z.default.R0cZsM),
    });
}
