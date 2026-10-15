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
    h = n(123816),
    C = n(473617),
    f = n(699595),
    S = n(558620),
    E = n(669510),
    I = n(732280),
    g = n(563020),
    y = n(436102),
    A = n(45938),
    P = n(158045),
    v = n(683071),
    x = n(212739);
n(216238);
var _ = n(202541),
    T = n(182732),
    N = n(105292),
    b = n(472468),
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
    V = n(805161),
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
var q = n(649975),
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
            label: o = N.intl.string(N.t["u+Cw58"]),
            location: c = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: d } = (0, u.Y)(),
        p = i.useMemo(
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
            shouldExpressCheckoutBeVisible: Y,
            premiumPlanOptions: Q,
        } = (0, h.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            isGift: e.isGift,
            activeSubscription: e.activeSubscription,
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
            expressCheckoutSubmitting: e.getExpressCheckoutSubmitting(),
            shouldExpressCheckoutBeVisible: e.getExpressCheckoutVisibilityState().shouldExpressCheckoutBeVisible,
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
        })),
        { selectedPlanFromFluxStore: en, selectedPlanId: el } = (0, S.D)(),
        {
            isEligibleForTrial: ei,
            discountOffer: er,
            premiumGroupDiscountOffer: ea,
            isPremiumGroupPurchase: es,
        } = (0, d.i)(),
        eo = i.useMemo(() => ei && null != t, [ei, t]),
        {
            discriminatedInvoicePreview: eu,
            subscriptionPeriodEnd: ec,
            proratedInvoicePreview: ed,
            purchaseDisabled: ep,
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
                        { isGift: I } = (0, m.Pv)(),
                        {
                            subscriptionPlan: g,
                            purchaseDisabled: y,
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
                                I
                                    ? {
                                          type: "premium_one_time_gift_purchase_invoice",
                                          params: { ...v, skuId: s, subscriptionPlanId: t, quantity: S },
                                      }
                                    : { type: "subscription_checkout_invoice", params: x },
                            [v, x, I, t, s, S],
                        ),
                        N = i.useMemo(() => (I ? null : { type: "subscription_renewal_invoice", params: _ }), [_, I]);
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
                                I ? c.u$.PREMIUM_GIFT : a ? c.u$.PREMIUM_WITH_TRIAL : c.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [I, a],
                        ),
                        { discriminatedInvoicePreview: M } = (0, c.KY)({
                            invoiceError: R,
                            subscriptionPlan: g,
                            invoiceTypeDiscriminator: O,
                            shouldSetPurchasePreviewErrorFromInvoice: !0,
                        }),
                        L = i.useMemo(() => (null != b ? b.subscriptionPeriodEnd : void 0), [b]);
                    return {
                        checkoutInvoicePreview: d,
                        discriminatedInvoicePreview: M,
                        proratedInvoicePreview: b,
                        renewalInvoicePreview: p,
                        purchaseDisabled: y,
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
        })({ selectedPlanId: el, verifiedTrialId: t, metadata: M, isVerifiedTrial: eo }),
        em = (0, p.K)(),
        eh = ea ?? er,
        { giftRecipient: eC } = (0, m.Pv)(),
        ef = B && (0, A.Ik)(eC),
        eS = (0, h.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: eo })) && !es && !W,
        eE = M?.guild_id ?? void 0,
        eI = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        { paymentSources: eg } = (0, u.j)(),
        {
            hasEntitlements: ey,
            paymentSourceType: eA,
            isPrepaid: eP,
            paymentSourceOptionalWarningCopy: ev,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, $.g)(n, a),
                o = (0, P.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, y.X)(t.id, r),
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
        })({ subscriptionPlan: en, paymentSources: eg }),
        ex = ed ?? D,
        e_ = i.useMemo(
            () => null != eh && null != eh.discount && null != ex && (0, g.Ro)(ex, eh.discount.id),
            [eh, ex],
        ),
        eT = (0, l.jsx)(J, {
            label: N.intl.string(N.t["u+Cw58"]),
            handlePaymentSourceAdd: k,
            isTrial: eo,
            hideCurrencySelect: e_,
            disabled: ep,
            hasEntitlements: ey,
        }),
        eN = (0, I.V)(F),
        eb = B && (0, et.uH)(en),
        ej = (0, P.L_)({ planId: en.id, isGift: !0, priceOptions: U, subscriptionPlan: en }),
        eR = i.useMemo(() => {
            if (null != ej && eb)
                return { headerBadgeText: N.intl.formatToPlainString(q.default["Mi5BH/"], { percentOff: ej }) };
        }, [ej, eb]),
        eO = (0, z.Fe)(eR),
        { upperInlineNoticeProps: eM, promotionalNoticeContent: eL } = (function (e) {
            let {
                    planGroup: t,
                    giftSavingsPercent: n,
                    isGiftingMultiPeriodPremium: r,
                    mainPreviewInvoice: a,
                    discriminatedInvoicePreview: s,
                    subscriptionPeriodEnd: o,
                    currentInvoiceHasMatchingDiscountOffer: u,
                    discountOffer: d,
                    isEligibleForTrial: p,
                    isPremiumGroupPurchase: C,
                    fractionalPremiumInfo: f,
                } = e,
                { isGift: E, activeSubscription: I } = (0, h.t4)((e) => ({
                    isGift: e.isGift,
                    activeSubscription: e.activeSubscription,
                })),
                { selectedPlanFromFluxStore: g, selectedPlanId: y } = (0, S.D)(),
                { selectedGiftingPromotionRewards: A } = (0, m.Pv)(),
                { copy: P, daysCount: M, userTrialOffer: L } = (0, b.O8)(),
                k = (0, R.pt)({
                    fractionalPremiumInfo: f,
                    selectedPlanId: y,
                    planGroup: t,
                    premiumSubscription: I,
                    isGift: E,
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
                    return E && A.length > 0
                        ? (0, l.jsx)(Z, { skuIds: A, text: N.intl.format(q.default["XWo+Bp"], { count: A.length }) })
                        : r && null != n
                          ? (0, l.jsx)(K, {
                                text:
                                    g.interval === _.WT.YEAR
                                        ? N.intl.format(q.default["7sYIBL"], { savingsPercent: n })
                                        : N.intl.format(q.default.uCXulJ, {
                                              intervalCount: g.intervalCount,
                                              savingsPercent: n,
                                          }),
                            })
                          : null;
                }, [L, u, d, M, s, n, r, g.interval, g.intervalCount, E, A]),
                D = (function (e) {
                    let { skuId: t, isGift: n } = e,
                        r = (0, x.O)();
                    return i.useMemo(
                        () =>
                            n || t !== _.pe.TIER_2 || !1 === r
                                ? null
                                : (0, l.jsx)(v.w, {
                                      type: "info",
                                      message: N.intl.format(T.default.Urtyu9, { days: 7 }),
                                      role: "none",
                                  }),
                        [n, t, r],
                    );
                })({ skuId: g.skuId, isGift: E }),
                U = (0, j.i)({ planSkuId: g.skuId, invoice: a });
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        k
                            ? e.push({
                                  directContent: (0, l.jsx)(O.l, {
                                      fractionalPremiumInfo: f,
                                      isEligibleForTrial: p,
                                      trialPeriodCopy: P,
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
                }, [k, f, p, P, o, C, D]),
                promotionalNoticeContent: w ?? U ?? null,
            };
        })({
            planGroup: n,
            giftSavingsPercent: ej,
            isGiftingMultiPeriodPremium: eb,
            mainPreviewInvoice: ex,
            discriminatedInvoicePreview: eu,
            subscriptionPeriodEnd: ec,
            currentInvoiceHasMatchingDiscountOffer: e_,
            discountOffer: eh,
            isEligibleForTrial: ei,
            isPremiumGroupPurchase: es,
            fractionalPremiumInfo: eI,
        }),
        ek = i.useMemo(() => {
            let e = [];
            (null != L && "" !== L && e.push({ type: "warning", message: L, role: "none", key: "review-warning" }),
                null != ev &&
                    e.push({ type: "info", message: ev, role: "status", key: "payment-source-optional-warning" }));
            let t = [...e, ...(eM ?? [])];
            return t.length > 0 ? t : null;
        }, [eM, L, ev]),
        ew = null != eu ? eu.invoicePreview : null,
        { priceOptions: eD, planPricesLoading: eU } = (0, P.Pr)(U, ew, G),
        eG = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: ek,
            planSelectContent: eS
                ? (0, l.jsx)(X.X, {
                      disabled: ep || V,
                      selectedPlanId: el,
                      priceOptions: eD,
                      planOptions: Q,
                      subscriptionPeriodEnd: ec,
                      planPricesLoading: eU,
                  })
                : void 0,
            paymentMethodContent: eT,
            promotionalNoticeContent: eL,
            headerBadgeConfig: eO,
        };
    if (null == eu && null != G) return (0, l.jsx)(o.T_, { ...eG, legalContent: null });
    if (null == eu || eu.type === c.u$.LOADING)
        return (0, l.jsx)(o.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eO });
    let eF = null != eN ? eN.subscriptionTrial : void 0,
        eB =
            eu.type === c.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(s.k, {
                      discriminatedInvoicePreview: eu,
                      subscriptionPlan: en,
                      isPrepaidPaymentSource: eP,
                      subscriptionTrial: eF,
                      isCustomGift: ef,
                  }),
        eH = null;
    if (
        !eP &&
        (c.ME.has(eu.type) || eu.type === c.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in eu &&
        null != eu.renewalInvoicePreview
    ) {
        let e = (0, et.Gj)(eu.invoicePreview, eu.renewalInvoicePreview, eF, {
            discountOffer: eh,
            isSubscriptionUpdate: null != H,
            fractionalPremiumInfo: eI,
        });
        eH = (0, l.jsx)(E._, { ...e, defaultExpanded: Y });
    }
    let eW = eS
            ? void 0
            : (0, l.jsx)(ee._, {
                  type: eu.type,
                  invoicePreview: eu.invoicePreview,
                  storeListing: em,
                  subscriptionPlan: en,
                  isPrepaidPaymentSource: eP,
                  giftRecipient: eC,
                  isPremiumGroupPurchase: es,
                  guildId: eE,
                  handleStepChange: w,
              }),
        eV = (0, l.jsx)(O.P, {
            activeSubscription: H,
            isTrial: eo,
            plan: en,
            isGift: B,
            paymentSourceType: eA,
            discriminatedInvoicePreview: eu,
            fractionalPremiumInfo: eI,
        }),
        eY =
            eu.type === c.u$.PREMIUM_WITH_TRIAL
                ? (0, et.ib)(eu.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: eu.invoicePreview });
    return (0, l.jsx)(o.T_, {
        ...eG,
        purchaseItemContent: eW,
        subscriptionDetailsContent: eH,
        invoiceSummaryContent: eB,
        legalContent: eV,
        invoiceTotalDueValue: eY,
        invoiceTotalDueLabel: B ? N.intl.string(q.default.Zxav97) : N.intl.string(q.default.R0cZsM),
    });
}
