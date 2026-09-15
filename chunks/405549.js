(n.d(t, { _: () => eo }), n(321073));
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
    h = n(721836),
    C = n(473617),
    f = n(699595),
    E = n(558620),
    S = n(669510),
    y = n(732280),
    I = n(815545),
    g = n(344159),
    A = n(45938),
    P = n(158045),
    v = n(517950),
    x = n(683071),
    _ = n(834730),
    T = n(212739);
n(216238);
var N = n(202541),
    b = n(182732),
    j = n(375708),
    R = n(580194),
    M = n(73663),
    O = n(577381),
    L = n(222707),
    k = n(340034),
    w = n(503698),
    U = n.n(w),
    D = n(575593),
    G = n(403581),
    F = n(17928),
    B = n(262427),
    H = n(674658),
    W = n(474012),
    Y = n(607123),
    V = n(287809),
    K = n(805161),
    Z = n(225529);
function q(e) {
    let { Icon: t = G.t, iconSize: n, customGraphic: i, gradientColor: r = "nitro-pink", ...a } = e;
    return (0, l.jsx)(B.J, {
        gradientColor: r,
        ...(null != i ? { customGraphic: i } : { Icon: t, iconSize: n }),
        ...a,
    });
}
function z(e) {
    let { skuIds: t, text: n, gradientColor: r = "nitro-pink" } = e,
        a = (0, F.bG)([V.default], () => V.default.getCurrentUser()),
        s = t[0] !== v.a.SUMMER_2026_GOGO_FAKE_SKU_ID ? t[0] : null,
        { product: o } = (0, H.q)(s),
        u = i.useMemo(
            () =>
                null != o && t.length > 1
                    ? j.intl.format(K.default.XoHiqS, { name: o.name, count: t.length - 1 })
                    : o?.name,
            [o, t.length],
        ),
        c = (0, W.tP)(o);
    return null == c
        ? null
        : (0, l.jsx)(B.A, {
              className: Z.Xx,
              gradientColor: r,
              customGraphic: (0, l.jsx)("div", {
                  className: Z.yn,
                  children: (0, l.jsx)("div", {
                      className: U()(Z.ML, {
                          [Z.M]: o?.type === D.R.AVATAR_DECORATION,
                          [Z.Hm]: o?.type === D.R.PROFILE_EFFECT,
                          [Z.hH]: o?.type === D.R.PROFILE_FRAME,
                          [Z.qF]: o?.type === D.R.NAMEPLATE,
                          [Z.l2]: o?.type === D.R.BUNDLE,
                      }),
                      children: (0, l.jsx)(Y.pL, {
                          collectiblesItem: c,
                          user: a,
                          nameplatePreviewStyle: Z.M4,
                          nameplatePreviewRescalerStyle: Z.N1,
                      }),
                  }),
              }),
              children: (0, l.jsxs)("div", {
                  className: Z.zN,
                  children: [
                      (0, l.jsx)(_.E, { variant: "text-sm/medium", color: "currentColor", children: n }),
                      null != u && (0, l.jsx)(_.E, { variant: "text-sm/medium", color: "currentColor", children: u }),
                  ],
              }),
          });
}
var Q = n(753261),
    $ = n(531536),
    J = n(358956);
function X(e) {
    let { fallback: t } = e,
        { enabled: n } = Q.E.useConfig({ location: "PremiumUnifiedCheckoutOrbsRewardNotice" });
    return n
        ? (0, l.jsx)("div", {
              className: J.kL,
              children: (0, l.jsx)($.W, {
                  className: J.Vs,
                  image: (0, l.jsx)("img", {
                      className: J.L8,
                      alt: "",
                      src: "https://cdn.discordapp.com/assets/content/b6d1d954e5c9ccfd2356d7af86ca2a4a59717635cc6f558f731edb2e6046b25c.png",
                  }),
                  title: (0, l.jsx)(_.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: j.intl.formatToPlainString(j.t.vXqqUc, { orbCount: 5e3 }),
                  }),
                  body: (0, l.jsx)(_.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: j.intl.string(j.t.Ev7DO6),
                  }),
              }),
          })
        : t;
}
var ee = n(649975),
    et = n(750532),
    en = n(216641),
    el = n(377058);
function ei(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = j.intl.string(j.t["u+Cw58"]),
            location: c = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: d } = (0, u.Y)(),
        m = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? j.intl.string(j.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
            }),
            [s, n, d],
        );
    return (0, l.jsx)(el.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: m,
        location: c,
        hideCurrencySelect: r,
    });
}
var er = n(845012),
    ea = n(134638),
    es = n(888751);
function eo(e) {
    let {
            verifiedTrialId: t,
            planGroup: n,
            metadata: w,
            reviewWarningMessage: U,
            handlePaymentSourceAdd: D,
            handleStepChange: G,
        } = e,
        {
            checkoutInvoicePreview: F,
            checkoutPriceOptions: B,
            checkoutInvoiceError: H,
            referralTrialOfferId: W,
            isGift: Y,
            activeSubscription: V,
            shouldDisallowPlanSelection: K,
            expressCheckoutSubmitting: Z,
            shouldUseStripeExpressCheckout: Q,
            premiumPlanOptions: $,
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
        { selectedPlanFromFluxStore: J, selectedPlanId: el } = (0, E.D)(),
        {
            isEligibleForTrial: eo,
            discountOffer: eu,
            premiumGroupDiscountOffer: ec,
            isPremiumGroupPurchase: ed,
        } = (0, d.i)(),
        em = i.useMemo(() => eo && null != t, [eo, t]),
        {
            discriminatedInvoicePreview: ep,
            subscriptionPeriodEnd: eh,
            proratedInvoicePreview: eC,
            purchaseDisabled: ef,
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
                        { isGift: y } = (0, p.Pv)(),
                        {
                            subscriptionPlan: I,
                            purchaseDisabled: g,
                            newItems: A,
                            preventInvoiceFetch: P,
                        } = (0, C.TP)({ selectedPlanId: t, priceOptions: n }),
                        {
                            universalInvoiceRequestParams: v,
                            checkoutInvoiceRequestParams: x,
                            renewalInvoiceRequestParams: _,
                        } = (0, C.jq)({
                            items: A,
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
                                    : { type: "subscription_checkout_invoice", params: x },
                            [v, x, y, t, s, E],
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
                        purchaseDisabled: g,
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
        })({ selectedPlanId: el, verifiedTrialId: t, metadata: w, isVerifiedTrial: em }),
        eE = (0, m.K)(),
        eS = ec ?? eu,
        { giftRecipient: ey } = (0, p.Pv)(),
        eI = Y && (0, A.Ik)(ey),
        eg = (0, h.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: em })) && !ed && !K,
        eA = w?.guild_id ?? void 0,
        eP = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        { paymentSources: ev } = (0, u.j)(),
        {
            hasEntitlements: ex,
            paymentSourceType: e_,
            isPrepaid: eT,
            paymentSourceOptionalWarningCopy: eN,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, en.g)(n, a),
                o = (0, P.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, g.X)(t.id, r),
                d = i.useMemo(
                    () => (u && null == a ? j.intl.format(j.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: s,
                isPrepaid: o,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: J, paymentSources: ev }),
        eb = eC ?? F,
        ej = i.useMemo(
            () => null != eS && null != eS.discount && null != eb && (0, I.Ro)(eb, eS.discount.id),
            [eS, eb],
        ),
        eR = (0, l.jsx)(ei, {
            label: j.intl.string(j.t["u+Cw58"]),
            handlePaymentSourceAdd: D,
            isTrial: em,
            hideCurrencySelect: ej,
            disabled: ef,
            hasEntitlements: ex,
        }),
        eM = (0, y.V)(W),
        eO = Y && J.interval === N.WT.YEAR && (0, P.xq)(J.id),
        eL = (0, P.L_)({ planId: J.id, isGift: !0, priceOptions: B, subscriptionPlan: J }),
        ek = i.useMemo(() => {
            if (null != eL && eO)
                return { headerBadgeText: j.intl.formatToPlainString(ee.default["Mi5BH/"], { percentOff: eL }) };
        }, [eL, eO]),
        ew = (0, et.Fe)(ek),
        { upperInlineNoticeProps: eU, promotionalNoticeContent: eD } = (function (e) {
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
                    isPremiumGroupPurchase: C,
                    fractionalPremiumInfo: f,
                } = e,
                { isGift: S, activeSubscription: y } = (0, h.t4)((e) => ({
                    isGift: e.isGift,
                    activeSubscription: e.activeSubscription,
                })),
                { selectedPlanFromFluxStore: I, selectedPlanId: g } = (0, E.D)(),
                { selectedGiftingPromotionRewards: A } = (0, p.Pv)(),
                { copy: P, daysCount: w, userTrialOffer: U } = (0, M.O8)(),
                D = (0, L.pt)({
                    fractionalPremiumInfo: f,
                    selectedPlanId: g,
                    planGroup: t,
                    premiumSubscription: y,
                    isGift: S,
                }),
                G = i.useMemo(() => {
                    if (null != s && s.type === c.u$.PREMIUM_WITH_TRIAL && null != U)
                        return (0, l.jsx)(q, { text: j.intl.format(ee.default.IAsfR5, { daysCount: w }) });
                    if (null != d && u) {
                        let e = d.discount,
                            t = e.intervalCount;
                        if (e.intervalType === N.Ff.MONTH)
                            return (0, l.jsx)(q, {
                                text: j.intl.format(ee.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                            });
                        if (e.intervalType === N.Ff.YEAR)
                            return (0, l.jsx)(q, {
                                text: j.intl.format(ee.default["tUzT/U"], { percentOff: e.amount }),
                            });
                    }
                    return S && A.length > 0
                        ? (0, l.jsx)(z, { skuIds: A, text: j.intl.format(ee.default["XWo+Bp"], { count: A.length }) })
                        : r && null != n
                          ? (0, l.jsx)(q, { text: j.intl.format(ee.default["7sYIBL"], { savingsPercent: n }) })
                          : null;
                }, [U, u, d, w, s, n, r, S, A]),
                F = (function (e) {
                    let { skuId: t, isGift: n } = e,
                        r = (0, T.O)();
                    return i.useMemo(
                        () =>
                            n || t !== N.pe.TIER_2 || !1 === r
                                ? null
                                : (0, l.jsx)(x.w, {
                                      type: "info",
                                      children: (0, l.jsx)(_.E, {
                                          variant: "text-sm/medium",
                                          children: j.intl.format(b.default.Urtyu9, { days: 7 }),
                                      }),
                                  }),
                        [n, t, r],
                    );
                })({ skuId: I.skuId, isGift: S }),
                B = (0, O.i)({ planSkuId: I.skuId, invoice: a }),
                H = (0, R.Mq)(I) && A.includes(v.a.SUMMER_2026_GOGO_FAKE_SKU_ID),
                W = i.useMemo(() => {
                    let e = G ?? B ?? null;
                    return H ? (0, l.jsx)(X, { fallback: e }) : e;
                }, [H, G, B]);
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        D
                            ? e.push({
                                  directContent: (0, l.jsx)(k.l, {
                                      fractionalPremiumInfo: f,
                                      isEligibleForTrial: m,
                                      trialPeriodCopy: P,
                                      subscriptionPeriodEnd: o,
                                  }),
                                  key: "fractional-premium-notice",
                              })
                            : C && e.push({ type: "info", message: (0, L.Nn)(), key: "premium-group-purchase-notice" }),
                        null != F && e.push({ directContent: F, key: "xbox-perks-notice" }),
                        e.length > 0 ? e : null
                    );
                }, [D, f, m, P, o, C, F]),
                promotionalNoticeContent: W,
            };
        })({
            planGroup: n,
            yearlySavingsPercent: eL,
            isGiftingPremiumYearly: eO,
            mainPreviewInvoice: eb,
            discriminatedInvoicePreview: ep,
            subscriptionPeriodEnd: eh,
            currentInvoiceHasMatchingDiscountOffer: ej,
            discountOffer: eS,
            isEligibleForTrial: eo,
            isPremiumGroupPurchase: ed,
            fractionalPremiumInfo: eP,
        }),
        eG = i.useMemo(() => {
            let e = [];
            (null != U && "" !== U && e.push({ type: "warning", message: U, key: "review-warning" }),
                null != eN && e.push({ type: "info", message: eN, key: "payment-source-optional-warning" }));
            let t = [...e, ...(eU ?? [])];
            return t.length > 0 ? t : null;
        }, [eU, U, eN]),
        eF = null != ep ? ep.invoicePreview : null,
        { priceOptions: eB, planPricesLoading: eH } = (0, P.Pr)(B, eF, H),
        eW = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eG,
            planSelectContent: eg
                ? (0, l.jsx)(er.X, {
                      disabled: ef || Z,
                      selectedPlanId: el,
                      priceOptions: eB,
                      planOptions: $,
                      subscriptionPeriodEnd: eh,
                      planPricesLoading: eH,
                  })
                : void 0,
            paymentMethodContent: eR,
            promotionalNoticeContent: eD,
            headerBadgeConfig: ew,
        };
    if (null == ep && null != H) return (0, l.jsx)(o.T_, { ...eW, legalContent: null });
    if (null == ep || ep.type === c.u$.LOADING)
        return (0, l.jsx)(o.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: ew });
    let eY = null != eM ? eM.subscriptionTrial : void 0,
        eV =
            ep.type === c.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(s.k, {
                      discriminatedInvoicePreview: ep,
                      subscriptionPlan: J,
                      isPrepaidPaymentSource: eT,
                      subscriptionTrial: eY,
                      isCustomGift: eI,
                  }),
        eK = null;
    if (
        !eT &&
        (c.ME.has(ep.type) || ep.type === c.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ep &&
        null != ep.renewalInvoicePreview
    ) {
        let e = (0, es.Gj)(ep.invoicePreview, ep.renewalInvoicePreview, eY, {
            discountOffer: eS,
            isSubscriptionUpdate: null != V,
            fractionalPremiumInfo: eP,
        });
        eK = (0, l.jsx)(S._, { ...e, defaultExpanded: Q });
    }
    let eZ = eg
            ? void 0
            : (0, l.jsx)(ea._, {
                  type: ep.type,
                  invoicePreview: ep.invoicePreview,
                  storeListing: eE,
                  subscriptionPlan: J,
                  isPrepaidPaymentSource: eT,
                  giftRecipient: ey,
                  isPremiumGroupPurchase: ed,
                  guildId: eA,
                  handleStepChange: G,
              }),
        eq = (0, l.jsx)(k.P, {
            activeSubscription: V,
            isTrial: em,
            plan: J,
            isGift: Y,
            paymentSourceType: e_,
            discriminatedInvoicePreview: ep,
            fractionalPremiumInfo: eP,
        }),
        ez =
            ep.type === c.u$.PREMIUM_WITH_TRIAL
                ? (0, es.ib)(ep.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: ep.invoicePreview });
    return (0, l.jsx)(o.T_, {
        ...eW,
        purchaseItemContent: eZ,
        subscriptionDetailsContent: eK,
        invoiceSummaryContent: eV,
        legalContent: eq,
        invoiceTotalDueValue: ez,
        invoiceTotalDueLabel: Y ? j.intl.string(ee.default.Zxav97) : j.intl.string(ee.default.R0cZsM),
    });
}
