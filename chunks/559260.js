n.d(t, { Y: () => aL });
var l = n(477900),
    i = n(793574),
    r = n(529427),
    a = n(166532),
    s = n(491057),
    o = n(582128),
    u = n(786300);
let [c, d] = (0, u.A)();
function p(e) {
    let {
            serverName: t,
            regionId: n,
            gameId: i,
            gameName: r,
            isPlanChange: a = !1,
            isPlanUpgrade: s = !1,
            onBack: u,
            children: d,
        } = e,
        p = o.useMemo(() => {
            let e = {};
            return "" !== t && (e.game_server_name = t), "" !== n && (e.game_server_region = n), e;
        }, [t, n]),
        m = o.useMemo(
            () => ({
                subscriptionMetadataRequest: p,
                gameId: i,
                gameName: r,
                isPlanChange: a,
                isPlanUpgrade: s,
                onBack: u,
            }),
            [p, i, r, a, s, u],
        );
    return (0, l.jsx)(c.Provider, { value: m, children: d });
}
var m = n(465657),
    C = n(71804),
    h = n(558620),
    E = n(316915),
    f = n(834730),
    A = n(854354),
    S = n(987666),
    y = n(319668),
    P = n(482419),
    I = n(38785),
    _ = n(202475),
    T = n(400612),
    g = n(463376),
    v = n(473617),
    x = n(818824),
    N = n(596034),
    R = n(669510),
    b = n(888751),
    M = n(216641),
    j = n(815545),
    O = n(428262),
    L = n(580630),
    w = n(17928),
    k = n(936477),
    U = n(287809),
    D = n(652215),
    G = n(375708);
function F(e, t, n) {
    if (null != e.prices[t])
        return (0, O.I8)(e.id, { paymentSourceId: n.paymentSourceId, currency: n.currency, purchaseType: t });
}
function H(e) {
    return G.intl.formatToPlainString(G.t.AbOLNu, { price: (0, L.$g)(e.amount, e.currency) });
}
function B() {
    let e = (0, h.A)(),
        t = (0, E.t4)((e) => e.checkoutPriceOptions);
    return o.useMemo(() => {
        if (null == e)
            return {
                standardPriceLabel: void 0,
                nitroPriceLabel: void 0,
                standardPriceAmount: void 0,
                nitroPriceAmount: void 0,
                priceCurrency: void 0,
            };
        let n = F(e, D.lid.DEFAULT, t),
            l = F(e, D.lid.PREMIUM_TIER_2, t);
        return {
            standardPriceLabel: null != n ? H(n) : void 0,
            nitroPriceLabel: null != l ? H(l) : void 0,
            standardPriceAmount: n?.amount,
            nitroPriceAmount: l?.amount,
            priceCurrency: n?.currency,
        };
    }, [e, t]);
}
var Y = n(275695),
    W = n(327105);
function V(e) {
    let { fallback: t, taxAmount: n } = e,
        { gameName: i } = d(),
        { standardPriceAmount: r, nitroPriceAmount: a, priceCurrency: s } = B();
    if (
        !(0, w.bG)([U.default], () => O.Ay.canUseShopDiscounts(U.default.getCurrentUser())) ||
        null == r ||
        null == a ||
        null == s ||
        a >= r
    )
        return t;
    let o = [
        {
            id: "subscription",
            label: G.intl.formatToPlainString(Y.default["6AKZvg"], { gameName: i }),
            amount: r,
            lineItemType: "main",
        },
        {
            id: "nitro-adjustment",
            label: G.intl.string(Y.default["5z1yII"]),
            amount: -(r - a),
            lineItemType: "adjustment",
        },
        { id: "tax", label: G.intl.string(G.t.jiRvC7), amount: n },
    ];
    return (0, l.jsx)(k.Vm, { label: G.intl.string(W.default.eoXh7B), lineItems: o, currency: s });
}
var K = n(403581),
    Z = n(349085),
    q = n(349423);
function z(e) {
    let { planName: t } = e,
        { gameId: n, gameName: i } = d(),
        { standardPriceLabel: r, nitroPriceLabel: a } = B(),
        s = (0, Z.A)(n, "cover"),
        o = (0, w.bG)([U.default], () => O.Ay.canUseShopDiscounts(U.default.getCurrentUser())) && null != a,
        u = null != s ? (0, l.jsx)("img", { className: q.I, src: s, alt: "" }) : void 0;
    return (0, l.jsx)(k.f7, {
        graphic: u,
        omitDefaultIconBackground: !0,
        label: G.intl.formatToPlainString(Y.default["6AKZvg"], { gameName: i }),
        description: t,
        price: o ? a : (r ?? ""),
        PriceIcon: o ? K.t : void 0,
        priceSubText: o ? r : null,
        priceSubTextHasStrikethrough: !0,
    });
}
function Q(e) {
    let { verifiedPlanId: t, selectedPlan: n, handlePaymentSourceAdd: i } = e,
        {
            checkoutPriceOptions: r,
            checkoutInvoiceError: a,
            activeSubscription: s,
        } = (0, E.t4)((e) => ({
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            activeSubscription: e.activeSubscription,
        })),
        { isPlanChange: u, isPlanUpgrade: c } = d(),
        p = u && !c,
        m = o.useMemo(() => {
            if (!u || null == s || 0 === s.items.length) return;
            let [e] = s.items;
            return [{ ...e, quantity: 1, planId: t }];
        }, [u, s, t]),
        { discriminatedInvoicePreview: C, purchaseDisabled: h } = (function (e) {
            let {
                    selectedPlanId: t,
                    priceOptions: n,
                    trialId: l,
                    metadata: i,
                    newItemsOverride: r,
                    immediateInvoiceUsesRenewal: a,
                    previewAsSubscriptionUpdate: s,
                } = e,
                {
                    setFetchCheckoutInvoicePreviewRequest: u,
                    setFetchRenewalInvoicePreviewRequest: c,
                    primaryInvoicesError: d,
                    activeSubscription: p,
                } = (0, E.t4)((e) => ({
                    setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                    setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                    primaryInvoicesError: e.get("primaryInvoicesError"),
                    activeSubscription: e.activeSubscription,
                })),
                {
                    subscriptionPlan: m,
                    purchaseDisabled: C,
                    preventInvoiceFetch: h,
                    newItems: f,
                } = (0, v.TP)({ selectedPlanId: t, priceOptions: n }),
                { checkoutInvoiceRequestParams: A, renewalInvoiceRequestParams: S } = (0, v.jq)({
                    items: r ?? f,
                    preventFetch: h,
                    priceOptions: n,
                    trialId: l,
                    subscriptionMetadata: i,
                }),
                y = null != p ? p.id : void 0,
                P = o.useMemo(
                    () => ({
                        type: "subscription_checkout_invoice",
                        params: { ...A, subscriptionId: s ? y : void 0, renewal: a ?? !1 },
                    }),
                    [A, a, s, y],
                ),
                I = o.useMemo(() => ({ type: "subscription_renewal_invoice", params: S }), [S]);
            o.useEffect(() => {
                u(P);
            }, [P, u]),
                o.useEffect(() => {
                    c(I);
                }, [I, c]);
            let { discriminatedInvoicePreview: _ } = (0, T.KY)({
                invoiceError: d,
                subscriptionPlan: m,
                invoiceTypeDiscriminator: T.u$.SUBSCRIPTION_NEW_PURCHASE,
                shouldSetPurchasePreviewErrorFromInvoice: !0,
            });
            return { discriminatedInvoicePreview: _, purchaseDisabled: C };
        })({
            selectedPlanId: t,
            priceOptions: r,
            isTrial: !1,
            newItemsOverride: m,
            immediateInvoiceUsesRenewal: p,
            previewAsSubscriptionUpdate: u,
        }),
        { immediateDelivery: w } = (0, x.U)(),
        { discountOffer: k, premiumGroupDiscountOffer: U } = (0, g.i)(),
        D = U ?? k,
        { paymentSources: F } = (0, _.jm)(),
        { paymentGatewayRestrictions: H } = (0, _.Yh)(),
        B = r.paymentSourceId,
        K = (0, M.g)(F, B),
        Z = (0, O.J$)(B),
        q = {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: (0, l.jsx)(z, { planName: n.name }),
            paymentMethodContent: (0, l.jsx)(y.N, {
                label: G.intl.string(G.t["u+Cw58"]),
                onPaymentSourceAdd: i,
                disabled: h,
                additionalPaymentSourceDropdownProps: { paymentGatewayRestrictions: H },
            }),
        };
    if (null == C && null != a) return (0, l.jsx)(I.T_, { ...q, legalContent: null });
    if (null == C || C.type === T.u$.LOADING) return (0, l.jsx)(I.Ed, { shouldShowUnifiedHeader: !0 });
    let Q = (0, l.jsx)(P.k, {
            discriminatedInvoicePreview: C,
            subscriptionPlan: n,
            subscriptionTrial: void 0,
            isPrepaidPaymentSource: Z,
        }),
        $ = C.invoicePreview,
        J =
            (D?.discount != null && (0, j.Ro)($, D.discount.id)) || $.invoiceItems.some((e) => e.discounts.length > 0)
                ? Q
                : (0, l.jsx)(V, { fallback: Q, taxAmount: $.tax }),
        X = u
            ? (0, l.jsx)(f.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "p",
                  children: c ? G.intl.string(Y.default.QBFUMO) : G.intl.string(Y.default.MmcIbA),
              })
            : null,
        ee = null != X ? (0, l.jsxs)(o.Fragment, { children: [J, X] }) : J,
        et = null;
    if (!Z && T.ME.has(C.type) && "renewalInvoicePreview" in C && null != C.renewalInvoicePreview) {
        let e = (0, b.Gj)(C.invoicePreview, C.renewalInvoicePreview, void 0, { isSubscriptionUpdate: null != s });
        et = (0, l.jsx)(R._, { ...e });
    }
    let en = "renewalInvoicePreview" in C ? C.renewalInvoicePreview : null,
        el =
            p && null != en && null != s
                ? (0, l.jsx)(N._, {
                      immediateDelivery: w,
                      paymentSourceType: K,
                      variant: {
                          type: N.I.Subscription,
                          purchaseButtonText: G.intl.string(Y.default.UGbET9),
                          totalDue: 0,
                          renewalPrice: en.total,
                          currency: C.invoicePreview.currency,
                          interval: n.interval,
                          intervalCount: n.intervalCount,
                          startDate: s.currentPeriodEnd,
                      },
                  })
                : (0, l.jsx)(S.$, {
                      activeSubscription: s,
                      plan: n,
                      paymentSourceType: K,
                      discriminatedInvoicePreview: C,
                      discountOffer: D,
                      unifiedLegalType: N.I.Subscription,
                  }),
        ei = p ? (0, L.$g)(0, C.invoicePreview.currency) : (0, A.kw)({ subscriptionInvoiceRecord: C.invoicePreview });
    return (0, l.jsx)(I.T_, {
        ...q,
        subscriptionDetailsContent: et,
        invoiceSummaryContent: ee,
        legalContent: el,
        invoiceTotalDueValue: ei,
        invoiceTotalDueLabel: G.intl.string(W.default.R0cZsM),
    });
}
let $ = (e, t) => {
        let { invoicePreview: n } = t;
        return { disablePurchase: e.disablePurchase || null == n };
    },
    J = {
        CHECKOUT_FLOW: r.CL.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
        CHECKOUT_STEPS: {
            [a.pn.REVIEW]: function (e) {
                let { subscriptionMetadataRequest: t, isPlanChange: n, isPlanUpgrade: i, onBack: r } = d(),
                    a = (0, h.A)(),
                    { selectedPlanId: s, selectedSkuId: u } = (0, E.t4)((e) => ({
                        selectedPlanId: e.selectedPlanId,
                        selectedSkuId: e.selectedSkuId,
                    })),
                    { planGroup: c } = e,
                    p = o.useMemo(() => ({ planGroup: c }), [c]),
                    f = n
                        ? i
                            ? G.intl.string(Y.default.yUWVlo)
                            : G.intl.string(Y.default.UGbET9)
                        : G.intl.string(G.t.YScQSF),
                    A = o.useCallback(
                        (e) => {
                            let { onReviewButtonClick: t, loading: n, disabled: l } = e;
                            return {
                                variant: "active",
                                text: f,
                                dataTestId: "purchase",
                                onClick: t,
                                loading: n,
                                disabled: l,
                            };
                        },
                        [f],
                    ),
                    S = o.useCallback(
                        (e) => {
                            let { handlePaymentSourceAdd: t } = e;
                            if (null == a)
                                throw new C.v({
                                    message: "Expected plan to be selected",
                                    extraSentryInformation: { selectedPlanId: s, selectedSkuId: u },
                                });
                            return (0, l.jsx)(Q, { handlePaymentSourceAdd: t, verifiedPlanId: a.id, selectedPlan: a });
                        },
                        [a, s, u],
                    ),
                    y = o.useCallback(() => {
                        e.handleClose(), r?.();
                    }, [e, r]);
                return (0, l.jsx)(m.Y, {
                    ...e,
                    isBackButtonEligible: null != r,
                    onFooterBackClick: y,
                    subscriptionMetadata: t ?? void 0,
                    renderStepBody: S,
                    resolveInternalState: $,
                    resolveTenantReviewButtonProps: A,
                    customFooterProps: p,
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                    tenantParams: {
                        serverName: t,
                        regionId: n,
                        gameId: i,
                        gameName: r,
                        isPlanChange: a,
                        isPlanUpgrade: o,
                        onBack: u,
                    },
                    children: c,
                } = e;
                return (0, l.jsx)(p, {
                    serverName: t,
                    regionId: n,
                    gameId: i,
                    gameName: r,
                    isPlanChange: a,
                    isPlanUpgrade: o,
                    onBack: u,
                    children: (0, l.jsx)(s.Qt, { children: c }),
                });
            },
            tenantProvidesCheckoutRoot: !1,
            tenantAnalyticsLocation: i.A.GAME_SERVER_SETUP_MODAL,
        },
        CustomHeaderComponent: function (e) {
            let { step: t } = e;
            return t === a.pn.CONFIRM ? (0, l.jsx)("div", {}) : null;
        },
    };
var X = n(444927),
    ee = n(964486),
    et = n(120700),
    en = n(171835),
    el = n(211083),
    ei = n(883645),
    er = n(584160),
    ea = n(480642),
    es = n(832286),
    eo = n(958340),
    eu = n(566980),
    ec = n(489254),
    ed = n(251913),
    ep = n(71393),
    em = n(178368),
    eC = n(166403),
    eh = n(473145),
    eE = n(802790),
    ef = n(636441),
    eA = n(587491),
    eS = n(285753),
    ey = n(430993),
    eP = n(86379),
    eI = n(545075),
    e_ = n(655857),
    eT = n(534479),
    eg = n(121005),
    ev = n(174459),
    ex = n(61299),
    eN = n(295405);
let [eR, eb, eM] = (0, u.A)();
function ej(e) {
    let {
            initialNumGuildBoostsToPurchase: t,
            disablePremiumUpsell: n = !1,
            closeGuildPerksModal: i,
            children: r,
            guildId: a,
            analyticsLocation: s,
            analyticsSourceLocation: u,
            applicationId: c,
            intent: d,
            onSubscribeComplete: p,
        } = e,
        [m, C] = o.useState(!0),
        h = (0, X.A)(() => Date.now()),
        f = (0, X.A)(() => (0, eh.D$)(em.A.boostSlots).length),
        {
            activeSubscription: A,
            setQuantity: S,
            selectedSkuId: y,
        } = (0, E.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            setQuantity: e.setQuantity,
            selectedSkuId: e.selectedSkuId,
        }));
    o.useEffect(() => {
        null != y && S(t);
    }, [y]);
    let P = (0, w.bG)([eC.A], () => eC.A.hasFetchedSubscriptions()),
        I = (0, w.bG)([eN.A], () => eN.A.defaultPaymentSourceId),
        _ = null != A ? A.paymentSourceId : null,
        T = (0, ex._V)(null != _ ? _ : P ? I : null);
    return (0, l.jsx)(eR.Provider, {
        value: {
            disablePremiumUpsell: n,
            closeGuildPerksModal: i,
            guildId: a,
            paymentModalArgs: T,
            premiumSubscriptionPaymentSourceId: _,
            analyticsLocation: s,
            analyticsSourceLocation: u,
            forceDisableSubmitButton: m,
            setForceDisableSubmitButton: C,
            applicationId: c,
            intent: d,
            onSubscribeComplete: p,
            flowStartTime: h,
            existingAvailableSlotCount: f,
        },
        children: r,
    });
}
var eO = n(160946),
    eL = n(253390),
    ew = n(97352),
    ek = n(615396),
    eU = n(202541);
function eD() {
    let { activeSubscription: e, quantity: t } = (0, E.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
        })),
        n = (0, w.bG)([ew.A], () => null == e || null != ew.A.get(e.planId)),
        l = (0, eO.Y)(),
        i = (0, w.bG)([ew.A], () => (null != e ? (0, ek.c9)(e.planId) : null)),
        r = o.useMemo(
            () => (null != e && n && l ? (0, eL.v)(e, t) : [{ planId: eU.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, l, t],
        ),
        a = o.useMemo(
            () =>
                r.find((e) => {
                    let { planId: t } = e;
                    return eU.pW.has(t);
                })?.planId ?? eU.gD.PREMIUM_MONTH_GUILD,
            [r],
        ),
        s = null == e || (n && l);
    return {
        newAdditionalPlans: r,
        currentPremiumSubscriptionPlan: i,
        hasFetchedPremiumSubscriptionPlan: n,
        hasFetchedAdditionalPlans: s,
        premiumGuildSubscriptionPlanId: a,
    };
}
var eG = n(237496);
function eF(e) {
    let { message: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ea.s3, { title: G.intl.string(G.t.q9EGps) }),
            (0, l.jsx)(ey.c, { children: (0, l.jsx)("p", { className: eG.C, children: t }) }),
        ],
    });
}
function eH(e) {
    let { handleStepChange: t } = e,
        n = (0, E.t4)((e) => e.activeSubscription),
        { guildId: i, analyticsLocation: r } = eb(),
        s = (0, eP.Hp)(),
        u = (0, eg.A)(),
        { hasFetchedRelatedSubscriptionPlans: c, displayCurrency: d } = (0, e_.Jn)(),
        { hasFetchedPremiumSubscriptionPlan: p } = eD(),
        m = null != n && null != n.renewalMutations,
        C = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
        h = !u || !c || !p || null == d || "" === d;
    return ((0, ee.Ay)(() => {
        m && ev.default.track(D.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: r, guild_id: i });
    }),
    o.useEffect(() => {
        h || s || C || m || t(a.pn.PLAN_SELECT);
    }, [h, s, C, m, t]),
    C)
        ? (0, l.jsx)(eF, { message: G.intl.string(G.t.mOWsF1) })
        : m
          ? (0, l.jsx)(eF, { message: G.intl.string(G.t.npfhh0) })
          : h
            ? (0, l.jsx)(eT.A, {})
            : s
              ? (0, l.jsx)(eI.oO, {})
              : null;
}
var eB = n(482132),
    eY = n(879100);
function eW(e) {
    let { handleClose: t } = e,
        { guildId: n, paymentModalArgs: i, existingAvailableSlotCount: r } = eb(),
        {
            activeSubscription: a,
            startingFractionalPremiumEndsAt: s,
            customCheckoutFlow: o,
            paymentSourceId: u,
            quantity: c,
        } = (0, E.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            customCheckoutFlow: e.customCheckoutFlow,
            paymentSourceId: e.paymentSourceId,
            quantity: e.quantity,
        })),
        d = (0, w.bG)([eo.A], () => (null != n ? eo.A.getGuild(n) : void 0), [n]),
        p = null != n ? ep.A.getGuild(n) : null,
        m = (0, X.A)(() => (0, ek.b2)(s)),
        C = (0, w.bG)([ew.A], () => (null != a ? (0, ek.c9)(a.planId) : null)),
        { paymentSources: h } = i,
        f = (0, M.g)(h, u),
        A = null != p ? p.name : null != d ? d.name : void 0,
        S = m && null != C && !eU.YV.has(C.id);
    return (0, l.jsx)(eB.dZ, {
        children: (0, l.jsx)(eY.W, {
            guild: p,
            guildBoostQuantity: c + r,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: f,
            fallbackGuildName: A,
            didPurchaseOnFractionalPremium: S,
            customCheckoutFlow: o,
        }),
    });
}
var eV = n(284009),
    eK = n.n(eV),
    eZ = n(683071),
    eq = n(512950),
    ez = n(821609),
    eQ = n(123292),
    e$ = n(87719);
let eJ = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n(321073);
var eX = n(503698),
    e0 = n.n(eX),
    e1 = n(661531),
    e2 = n(408278),
    e4 = n(834040),
    e3 = n(499373),
    e7 = n(663803),
    e6 = n(320448),
    e5 = n(297264),
    e8 = n(104510),
    e9 = n(866665),
    te = n(695366),
    tt = n(289873),
    tn = n(726656),
    tl = n(688810),
    ti = n(531260),
    tr = n(666646),
    ta = n(404374),
    ts = n(543767),
    to = n(881489),
    tu = n(477421),
    tc = n(732280),
    td = n(363476),
    tp = n(531506),
    tm = n(824273);
function tC() {
    return (0, l.jsxs)("div", {
        className: e0()(tm.dt, tm.dE),
        children: [
            (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: tm.qq,
            }),
            (0, l.jsx)(f.E, { variant: "text-sm/medium", className: tm.tD, children: G.intl.format(G.t.f5VHKm, {}) }),
        ],
    });
}
function th(e) {
    let { text: t, color: n } = e;
    return (0, l.jsxs)("div", {
        className: tm.dt,
        children: [(0, l.jsx)(K.t, { size: "md", className: tm.YW, color: n }), (0, l.jsx)("div", { children: t })],
    });
}
var tE = n(773669),
    tf = n(975571),
    tA = n(252424),
    tS = n(155718),
    ty = n(606267),
    tP = n(848584),
    tI = n(241989),
    t_ = n(874638),
    tT = n(692440),
    tg = n(818348),
    tv = n(443593);
function tx(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: i,
            totalDue: r,
            currency: a,
            startDate: s,
        } = e,
        { immediateDelivery: o } = (0, x.U)();
    return (0, l.jsx)(N._, {
        variant: {
            type: N.I.Subscription,
            purchaseButtonText: G.intl.string(G.t.eUEeCt),
            totalDue: r,
            renewalPrice: i,
            currency: a,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: s,
        },
        paymentSourceType: t,
        immediateDelivery: o,
    });
}
function tN(e) {
    return G.intl.format(G.t.IeaYqg, { endDate: e });
}
function tR(e) {
    let { text: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: n,
        children: [
            (0, l.jsx)("div", { className: tv.bU }),
            (0, l.jsx)(f.E, { variant: "text-sm/normal", className: tv.b7, children: t }),
            (0, l.jsx)("div", { className: tv.bU }),
        ],
    });
}
function tb(e) {
    let {
            originalAmount: t,
            basePlanAdjustment: n,
            basePlanInvoiceItems: i,
            guildBoostingAdjustment: r,
            checkoutInvoicePreview: a,
        } = e,
        s = (function (e) {
            let {
                addedQuantity: t,
                guildBoostingSubscriptionPlan: n,
                isPrepaid: l,
                formattedGuildBoostPrice: i,
                formattedGuildBoostRate: r,
                subscriptionDiscount: a,
                entitlementDiscount: s,
                originalAmount: o,
                checkoutInvoicePreview: u,
            } = e;
            return {
                label: G.intl.formatToPlainString(G.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, O.Mn)(n.id, !1, l),
                }),
                value: l ? i : r,
                subscriptionDiscount: a,
                entitlementDiscount: s,
                originalAmount: o,
                currency: u.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
            };
        })(e),
        o = [];
    0 !== n &&
        o.push({
            id: "base-plan-adjustment",
            label: G.intl.formatToPlainString(G.t.ZSVged, { planName: (0, O.RH)(i[0].subscriptionPlanId) }),
            tooltip: G.intl.string(G.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== r &&
            o.push({
                id: "guild-boosting-adjustment",
                label: G.intl.string(G.t["+as5ZZ"]),
                tooltip: G.intl.string(G.t.JmwQJM),
                amount: r,
                lineItemType: "adjustment",
            }),
        0 !== a.tax && o.push({ id: "tax", label: G.intl.string(G.t.jiRvC7), amount: a.tax, lineItemType: "tax" });
    let { lineItems: u, currency: c } = (0, b.EA)({ id: "main-line-item", amount: t, ...s }),
        d = [...u, ...o];
    return (0, l.jsx)(tP.Vm, {
        defaultExpanded: !0,
        label: G.intl.string(W.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function tM(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: i, renewalInvoicePreview: r } = e;
    return null != n
        ? (0, l.jsx)(tT.Hc, { currentInvoice: i, renewalInvoice: r, isUpdate: t })
        : (0, l.jsx)(tT.Hc, { renewalInvoice: r });
}
function tj(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: r,
            currentPremiumSubscription: a,
            premiumSubscriptionPaymentSourceId: s,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: u,
            paymentSourceId: c,
            setPaymentSourceId: d,
            onPaymentSourceAdd: p,
        } = e,
        m = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: l,
                    currentPremiumSubscription: r,
                    premiumSubscriptionPlan: a,
                    newAdditionalPlans: s,
                } = e,
                o = (0, w.bG)([ep.A, eo.A], () => {
                    let e = ep.A.getGuild(n);
                    return null != e ? e : eo.A.isGuildFetching(n) ? null : eo.A.getGuild(n);
                }, [n]),
                u = a.interval,
                c = a.intervalCount,
                d = (0, w.bG)([ew.A], () => ew.A.getForSkuAndInterval((0, O.mH)(eU.pe.GUILD), u, c));
            eK()(null != d, "Missing guildBoostingSubscriptionPlan");
            let p = (0, O.J$)(l.paymentSourceId),
                m = (0, to.ds)();
            t = null != r ? (0, O.Om)(r, s[0].quantity, s[0].planId) : s;
            let { analyticsLocations: C } = (0, tl.Ay)(),
                [h, E] = (0, ts.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: C,
                    analyticsLocation: i.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [f, A] = (0, ts.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: C,
                    analyticsLocation: i.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, tr.OQ)({
                    checkoutInvoicePreview: h,
                    checkoutInvoiceError: E,
                    renewalInvoicePreview: f,
                    renewalInvoiceError: A,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: d,
                    isPrepaid: p,
                    isReverseTrial: m,
                    checkoutInvoicePreview: h,
                    renewalInvoicePreview: f,
                    isSubscriptionUpdate: null != r,
                }
            );
        })({
            guildId: t,
            priceOptions: r,
            currentPremiumSubscription: a,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: u,
        }),
        {
            isSubscriptionUpdate: C,
            guild: h,
            isPrepaid: E,
            isReverseTrial: f,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: S,
        } = m,
        P = (0, ty.A)({ location: "GuildBoostReview", message: G.intl.string(W.default["tK8A/8"]) });
    if (null == A || null == S || null == h) return (0, l.jsx)(I.Ed, { shouldShowUnifiedHeader: !0 });
    let _ = (0, l.jsx)(tM, {
            isSubscriptionUpdate: C,
            premiumSubscription: a,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: S,
        }),
        T = (0, l.jsx)(y.n, {
            setPaymentSourceId: d,
            paymentSourceId: c,
            location: "GuildBoostReview",
            label: G.intl.string(G.t["u+Cw58"]),
            onPaymentSourceAdd: p,
            premiumSubscriptionPaymentSourceId: s,
            hideCurrencySelect: !0,
        }),
        g = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: l,
                checkoutInvoicePreview: i,
                paymentSources: r,
                paymentSourceId: a,
            } = e;
            return {
                paymentSourceType: (0, M.g)(r, a),
                premiumSubscriptionPlan: n,
                renewalPrice: l.subtotal,
                totalDue: i.total,
                currency: i.currency,
                startDate: (0, tT.de)({ isSubscriptionUpdate: t, currentInvoice: i, renewalInvoice: l }),
            };
        })({
            isSubscriptionUpdate: C,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: S,
            checkoutInvoicePreview: A,
            paymentSources: n,
            paymentSourceId: c,
        }),
        v = (0, l.jsx)(tx, { ...g }),
        x = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    checkoutInvoicePreview: l,
                    renewalInvoicePreview: i,
                    priceOptions: r,
                    reviewState: a,
                } = e,
                { guildBoostingSubscriptionPlan: s, isPrepaid: o, isReverseTrial: u } = a,
                c = n.interval,
                d = n.intervalCount;
            function p(e) {
                return (0, t_.Z)(l.invoiceItems).find((t) => eU.pW.has(t.subscriptionPlanId) && e(t));
            }
            let m = p((e) => e.amount >= 0);
            eK()(null != m, "Missing guild boosting invoice item");
            let C = p((e) => e.amount < 0),
                h = null != C ? m.quantity - C.quantity : m.quantity,
                E = l.invoiceItems.filter((e) => (0, O.xq)(e.subscriptionPlanId)),
                f = E.reduce((e, t) => e + t.amount, 0),
                A = (0, ts.sL)(m) * h,
                S = (0, L.$g)(A, l.currency),
                y = (0, L.CE)(S, c, d),
                P = (0, L.$g)(l.total, l.currency) + (l.currency !== tg.Yr.USD ? "*" : ""),
                I = l.subtotal - A - f,
                _ = m.discounts.map((e) => {
                    let t = e.amount / m.quantity;
                    return { ...e, amount: t * h };
                }),
                T = _.find((e) => e.type === tS.iS.SUBSCRIPTION_PLAN),
                g = _.find((e) => e.type === tS.iS.ENTITLEMENT),
                v = m.subscriptionPlanPrice * h;
            return {
                addedQuantity: h,
                guildBoostingSubscriptionPlan: s,
                isPrepaid: o,
                isReverseTrial: u,
                formattedGuildBoostPrice: S,
                formattedGuildBoostRate: y,
                formattedOriginalAmountGuildBoostRate: (0, L.CE)((0, L.$g)(v, l.currency), c, d),
                formattedTotal: P,
                basePlanAdjustment: f,
                basePlanInvoiceItems: E,
                guildBoostingAdjustment: I,
                subscriptionDiscount: T,
                entitlementDiscount: g,
                originalAmount: v,
                premiumSubscription: t,
                checkoutInvoicePreview: l,
                renewalInvoicePreview: i,
                priceOptions: r,
            };
        })({
            premiumSubscription: a,
            premiumSubscriptionPlan: o,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: S,
            priceOptions: r,
            reviewState: m,
        }),
        N = (0, l.jsx)(tb, { ...x }),
        R = (function (e, t, n) {
            let {
                    addedQuantity: i,
                    guildBoostingSubscriptionPlan: r,
                    isPrepaid: a,
                    formattedGuildBoostRate: s,
                    formattedOriginalAmountGuildBoostRate: o,
                    subscriptionDiscount: u,
                } = t,
                c = null != u;
            return {
                label: G.intl.formatToPlainString(G.t.a3cAOg, {
                    numGuildSubscriptions: i,
                    planName: (0, O.Mn)(r.id, !1, a),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, l.jsx)(tI.a6, {}),
                price: s,
                PriceIcon: c ? K.t : void 0,
                priceTooltip: c ? G.intl.string(W.default.YUNJJa) : void 0,
                priceSubText: c ? o : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            h,
            x,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: l } = e;
                return !t && n && null != l ? { type: "reverseTrial", text: tN(l.currentPeriodEnd) } : null;
            })({ isPrepaid: E, isReverseTrial: f, premiumSubscription: a }),
        ),
        b = (0, l.jsx)(tI.f7, { ...R });
    return (0, l.jsx)(I.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: P,
        purchaseItemContent: b,
        subscriptionDetailsContent: _,
        paymentMethodContent: T,
        invoiceSummaryContent: N,
        legalContent: v,
        invoiceTotalDueValue: x.formattedTotal,
        invoiceTotalDueLabel: G.intl.string(W.default.R0cZsM),
    });
}
n(26279);
var tO = n(651311);
function tL(e) {
    return "" === e || "-" === e;
}
function tw(e) {
    let { value: t, onChange: n, minValue: i = 1, maxValue: r = 30, ariaLabel: a } = e,
        [s, u] = o.useState(t);
    o.useEffect(() => {
        u(t);
    }, [t]);
    let c = "number" == typeof s;
    function d(e) {
        u(e), tL(e) || n(e);
    }
    return (0, l.jsxs)("div", {
        className: tO.U$,
        children: [
            (0, l.jsx)(e2.K, {
                variant: "secondary",
                size: "md",
                icon: e4.Q,
                onClick: () => {
                    c && !(s <= i) && d(s - 1);
                },
                "aria-label": G.intl.string(G.t["k+ohJm"]),
                disabled: !c || s <= i,
            }),
            (0, l.jsx)("div", {
                className: tO.WJ,
                children: (0, l.jsx)("input", {
                    className: tO.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${s}`,
                    onChange: (e) =>
                        (function (e) {
                            if (tL(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= i) return void d(i);
                                if (t >= r) return void d(r);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: function () {
                        tL(s) && u(t);
                    },
                }),
            }),
            (0, l.jsx)(e2.K, {
                variant: "secondary",
                size: "md",
                icon: e3.T,
                onClick: () => {
                    c && !(s >= r) && d(s + 1);
                },
                "aria-label": G.intl.string(G.t.w8Sc4B),
                disabled: !c || s >= r,
            }),
        ],
    });
}
function tk(e) {
    let { message: t } = e;
    return (0, l.jsx)(f.E, { variant: "text-xs/normal", color: "text-muted", className: tO.jH, children: t });
}
function tU(e) {
    let { text: t } = e;
    return (0, l.jsxs)("div", {
        className: tO.Vk,
        children: [
            (0, l.jsx)("div", {
                className: tO.D0,
                children: (0, l.jsx)(K.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: tO.ue,
                    color: ta.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, l.jsx)("div", { className: tO.yP, children: t }),
        ],
    });
}
function tD(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        planLabel: r,
        planPriceContent: a,
        subtotalContent: s,
        refreshSubtotalContent: u,
        legacyDescriptionContent: c,
        refreshDescriptionContent: d,
        fractionalBanner: p,
        existingSlotNotice: m,
        discountCallout: C,
        refreshDiscountCallout: h,
        legacyPricingNotes: E,
        refreshPricingNotes: A,
    } = e;
    return (0, l.jsxs)("div", {
        children: [
            p,
            c,
            m,
            (0, l.jsxs)("div", {
                className: tv.mP,
                children: [
                    (0, l.jsxs)("div", {
                        className: tv.E6,
                        children: [
                            (0, l.jsx)(e7.l, {
                                value: n,
                                onChange: (e) => i(e),
                                className: tv.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, l.jsx)("div", { className: tv.$0, children: r }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: e0()(tv.QK, { [tv.S]: t }), children: a }),
                ],
            }),
            (0, l.jsx)("div", { className: tv.J3 }),
            (0, l.jsxs)("div", {
                className: tv.mP,
                children: [
                    (0, l.jsx)(f.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: G.intl.string(G.t.RtA7nR),
                    }),
                    (0, l.jsx)("div", {
                        className: e0()(tv.__invalid_planSelectorSubtotalPrice, { [tv.S]: t }),
                        children: s,
                    }),
                ],
            }),
            E.map((e, t) => (0, l.jsx)(o.Fragment, { children: e }, t)),
            C,
        ],
    });
}
function tG(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        refreshNextStepLabel: r,
        planLabel: a,
        planPriceContent: s,
        subtotalContent: u,
        refreshSubtotalContent: c,
        legacyDescriptionContent: d,
        refreshDescriptionContent: p,
        fractionalBanner: m,
        existingSlotNotice: C,
        discountCallout: h,
        refreshDiscountCallout: E,
        legacyPricingNotes: A,
        refreshPricingNotes: S,
    } = e;
    return (0, l.jsxs)("div", {
        className: tO.xY,
        children: [
            m,
            (0, l.jsxs)("div", {
                className: tO.K3,
                children: [
                    (0, l.jsx)(f.E, {
                        variant: "text-md/medium",
                        className: tO.bk,
                        children: G.intl.string(G.t["r+SebU"]),
                    }),
                    (0, l.jsx)(e6._, { className: tO.bN, color: "currentColor", size: "xs" }),
                    (0, l.jsx)(f.E, { variant: "text-md/medium", className: tO.kX, children: r }),
                ],
            }),
            p,
            C,
            (0, l.jsxs)("div", {
                className: tO.fh,
                children: [
                    (0, l.jsxs)("div", {
                        className: tO.fX,
                        children: [
                            (0, l.jsx)(tw, {
                                value: n,
                                onChange: (e) => i(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, l.jsx)(f.E, { variant: "text-md/medium", className: tO.ny, children: a }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: e0()(tO.El, { [tv.S]: t }), children: s }),
                ],
            }),
            E,
            (0, l.jsxs)("div", {
                className: tO.fh,
                children: [
                    (0, l.jsx)(e5.D, {
                        variant: "heading-lg/semibold",
                        className: tO.O3,
                        children: G.intl.string(G.t.RtA7nR),
                    }),
                    (0, l.jsx)("div", { className: e0()(tO.BU, { [tv.S]: t }), children: c }),
                ],
            }),
            S.map((e, t) => (0, l.jsx)(o.Fragment, { children: e }, t)),
        ],
    });
}
function tF(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: i } = e;
    return (0, l.jsxs)("div", {
        className: tv.Mv,
        children: [
            (0, l.jsx)(e8._, { className: tv.T5, color: e1.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, l.jsxs)("div", {
                children: [
                    G.intl.format(G.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != i
                        ? (0, l.jsx)(e9.m, {
                              text: G.intl.formatToPlainString(G.t.SFpsCH, {
                                  canceledCount: n,
                                  date: i.currentPeriodEnd,
                              }),
                              children: (0, l.jsx)(te.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: tv.Y5,
                                  color: e1.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function tH(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: r,
            setForceDisableSubmitButton: a,
            premiumSubscription: s,
            onClickPremiumSubscriptionLink: u,
            existingAvailableSlots: c = [],
            priceOptions: d,
            isRefreshEnabled: p = !1,
            showRefreshSubtotalRate: m = !1,
            refreshNextStepLabel: C = G.intl.string(G.t.QBnNHq),
        } = e,
        h = (function (e) {
            let t,
                n,
                {
                    premiumSubscriptionPlan: r,
                    numGuildBoosts: a,
                    setForceDisableSubmitButton: s,
                    premiumSubscription: u,
                    onClickPremiumSubscriptionLink: c,
                    existingAvailableSlots: d,
                    priceOptions: p,
                    showRefreshSubtotalRate: m,
                } = e,
                C =
                    ((t = (0, w.bG)([eC.A], () => eC.A.getPremiumTypeSubscription())),
                    (0, w.bG)([eN.A], () =>
                        t?.paymentSourceId != null ? eN.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                h = r.interval,
                E = r.intervalCount,
                A = (0, w.bG)([ew.A], () => ew.A.getForSkuAndInterval((0, O.mH)(eU.pe.GUILD), h, E)),
                S = (0, w.bG)([U.default], () => U.default.getCurrentUser()),
                y = (0, ti.A)({ forceFetch: !1 });
            eK()(null != A, "Missing guildBoostingSubscriptionPlan");
            let P = [{ planId: A.id, quantity: 1 }],
                I = u?.items.find(
                    (e) => e.planId === eU.gD.PREMIUM_MONTH_TIER_2 || e.planId === eU.gD.PREMIUM_YEAR_TIER_2,
                );
            null != I && P.push(I);
            let _ = u?.items.find(
                    (e) => e.planId === eU.gD.PREMIUM_MONTH_GUILD || e.planId === eU.gD.PREMIUM_YEAR_GUILD,
                ),
                T = null == C || !eU.uJ.has(C) || null == _,
                { analyticsLocations: g } = (0, tl.Ay)(),
                [v, x] = (0, ts.YV)({
                    subscriptionId: u?.id,
                    items: P,
                    renewal: !0,
                    paymentSourceId: u?.paymentSourceId,
                    currency: p.currency,
                    preventFetch: T,
                    analyticsLocations: g,
                    analyticsLocation: i.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, tr.Tr)(v, x);
            let N = !T && null == v && null == x;
            o.useLayoutEffect(() => {
                s(N);
            }, [N, s]);
            let R = (0, tc.V)()?.subscription_trial?.sku_id === eU.pe.TIER_2,
                b = O.Ay.hasBoostDiscount(S),
                M = b && null != u && O.Ay.isPremiumAtLeast(O.Ay.getPremiumType(u.planId), eU.PremiumTypes.TIER_1),
                j = v?.findInvoiceItemByPlanId(A.id),
                k =
                    null != j
                        ? { amount: j.amount, tax: 0, taxInclusive: !0, currency: v.currency }
                        : O.Ay.getPrice(A.id, b, !1, p),
                F = a * k.amount,
                H = (0, to.ds)() && b && null != u,
                B = (function (e) {
                    let t,
                        {
                            existingAvailableSlotsCount: n,
                            fractionalPremiumState: l,
                            isReverseTrial: i,
                            hasDiscountUpsell: r,
                            withTrialOfferCopyVariant: a,
                        } = e;
                    return (
                        (t = i ? "reverse_trial" : r ? "discount" : a ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: n > 0,
                            showFractionalPremiumBanner: l === eU.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: d.length,
                    fractionalPremiumState: y.fractionalState,
                    isReverseTrial: H,
                    hasDiscountUpsell: M,
                    withTrialOfferCopyVariant: R,
                });
            "discount" === B.upsellVariant
                ? (eK()(null != u, "Missing premiumSubscription for discount upsell variant"),
                  (n = G.intl.format(G.t.hf6YOY, { planName: O.Ay.getTierDisplayNameByPlanId(u.planId) })))
                : (n = G.intl.format("upsell_trial" === B.upsellVariant ? G.t.ba1L74 : G.t.fkffDT, {
                      onPremiumSubscriptionClick: c,
                      discountPercentage: (0, tA.l9)(tE.default.locale, eU.oX / 100),
                      freeSubscriptionCount: eU.M4,
                  }));
            let Y = d.filter((e) => (0, eh.I5)(e)).length,
                W = (0, O.J$)(p.paymentSourceId),
                { ipCountryCode: V } = (0, tu.A)(),
                K = "HR" === V && k.currency === tg.Yr.EUR,
                Z =
                    H && null != u
                        ? (0, l.jsx)(tR, { text: tN(u.currentPeriodEnd) })
                        : (0, l.jsx)("div", { className: e0()(tv.hA, tv.G3), children: G.intl.string(G.t.jNY1FO) }),
                q =
                    H && null != u
                        ? (0, l.jsx)(tR, { text: tN(u.currentPeriodEnd), className: tv.jk })
                        : (0, l.jsx)(f.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: tO._X,
                              children: G.intl.string(G.t.jNY1FO),
                          }),
                z = B.showExistingSlotNotice
                    ? (0, l.jsx)(tF, { existingAvailableSlots: d, canceledCount: Y, premiumSubscription: u })
                    : null,
                Q = B.showFractionalPremiumBanner ? (0, l.jsx)(tp.vi, { fractionalPremiumInfo: y }) : null,
                $ = W
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === eU.WT.YEAR
                              ? G.intl.string(G.t.YDpAzZ)
                              : t === eU.WT.MONTH && 1 === n
                                ? G.intl.string(G.t["6ZR3By"])
                                : null;
                      })({ intervalType: h, intervalCount: E }) ?? G.intl.string(G.t.K9Bmze))
                    : G.intl.string(G.t.K9Bmze),
                J = N
                    ? (0, l.jsx)(tt.y, {})
                    : W
                      ? (0, L.$g)(k.amount, k.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: l, intervalCount: i = 1 } = e,
                                r = (0, L.$g)(t, n);
                            return l === eU.WT.YEAR
                                ? G.intl.formatToPlainString(G.t["8M04YJ"], { price: r })
                                : l === eU.WT.MONTH && 1 === i
                                  ? G.intl.formatToPlainString(G.t.VStWCR, { price: r })
                                  : l === eU.WT.MONTH && i > 1
                                    ? G.intl.formatToPlainString(G.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: h, intervalCount: E, amount: k.amount, currency: k.currency }),
                X = N
                    ? (0, l.jsx)(tt.y, {})
                    : (0, l.jsx)(td.A, {
                          price: F,
                          currency: k.currency,
                          intervalType: h,
                          intervalCount: E,
                          isPrepaidPaymentSource: W,
                      }),
                ee = N
                    ? (0, l.jsx)(tt.y, {})
                    : m && !W
                      ? (0, L.CE)((0, L.$g)(F, k.currency), h, E)
                      : (0, L.$g)(F, k.currency),
                et = [],
                en = [];
            if (K) {
                let e = (0, l.jsx)(
                    tn.A,
                    {
                        message: G.intl.formatToPlainString(G.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, L.$g)(7.5345 * F, tg.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                et.push(e), en.push(e);
            }
            let el = G.intl.format(G.t.Om31w8, { documentationLink: tf.A.getArticleURL(D.MVz.LOCALIZED_PRICING) });
            return (
                et.push((0, l.jsx)(tn.A, { message: el }, "localized-pricing")),
                en.push((0, l.jsx)(tk, { message: el }, "localized-pricing")),
                {
                    isLoading: N,
                    planLabel: $,
                    planPriceContent: J,
                    subtotalContent: X,
                    refreshSubtotalContent: ee,
                    legacyDescriptionContent: Z,
                    refreshDescriptionContent: q,
                    existingSlotNotice: z,
                    fractionalBanner: Q,
                    legacyPricingNotes: et,
                    refreshPricingNotes: en,
                    discountCallout:
                        "reverse_trial" === B.upsellVariant
                            ? (0, l.jsx)(tC, {})
                            : (0, l.jsx)(th, { text: n, color: ta.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === B.upsellVariant ? (0, l.jsx)(tC, {}) : (0, l.jsx)(tU, { text: n }),
                }
            );
        })({
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setForceDisableSubmitButton: a,
            premiumSubscription: s,
            onClickPremiumSubscriptionLink: u,
            existingAvailableSlots: c,
            priceOptions: d,
            showRefreshSubtotalRate: m,
        });
    return (0, l.jsx)(p ? tG : tD, {
        isLoading: h.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: r,
        planLabel: h.planLabel,
        planPriceContent: h.planPriceContent,
        subtotalContent: h.subtotalContent,
        refreshSubtotalContent: h.refreshSubtotalContent,
        legacyDescriptionContent: h.legacyDescriptionContent,
        refreshDescriptionContent: h.refreshDescriptionContent,
        fractionalBanner: h.fractionalBanner,
        existingSlotNotice: h.existingSlotNotice,
        discountCallout: h.discountCallout,
        refreshDiscountCallout: h.refreshDiscountCallout,
        legacyPricingNotes: h.legacyPricingNotes,
        refreshPricingNotes: h.refreshPricingNotes,
        refreshNextStepLabel: C,
    });
}
let tB = eU.gD.NONE_MONTH,
    tY = [eU.pe.GUILD];
function tW(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            guildId: i,
            closeGuildPerksModal: s,
            disablePremiumUpsell: o,
            setForceDisableSubmitButton: u,
            forceDisableSubmitButton: c,
            paymentModalArgs: d,
            premiumSubscriptionPaymentSourceId: p,
        } = eb(),
        {
            paymentSourceId: m,
            activeSubscription: C,
            quantity: h,
            setQuantity: f,
        } = (0, E.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
            setQuantity: e.setQuantity,
        })),
        { displayCurrency: A } = (0, e_.Jn)(),
        S = null != p || Object.keys(d.paymentSources).length > 0,
        y = (0, a.Ir)(S ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS),
        P = (0, X.A)(() => (0, eh.D$)(em.A.boostSlots)),
        I = (0, ec.n)("GuildBoostPurchaseModal"),
        _ = eJ.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        T = I && _,
        g = (0, w.bG)([eo.A], () => (null != i ? eo.A.getGuild(i) : void 0), [i]),
        v = null != i ? ep.A.getGuild(i) : null,
        x = null == g && null == v,
        N = null != C && C.isPurchasedExternally,
        R = Object.keys(d.paymentSources).length > 0,
        b = (0, w.bG)([ew.A], () => (null != C ? (0, ek.c9)(C.planId) : null)),
        M = (0, w.bG)([ew.A], () => (null == b ? ew.A.get(tB) : b));
    if (null == i) throw new r.vd({ message: "Missing guildId" });
    eK()(null != M, "Missing nextPremiumSubscriptionPlan");
    let j = (0, l.jsx)(tH, {
        premiumSubscriptionPlan: M,
        numGuildBoosts: h,
        setNumGuildBoosts: f,
        setForceDisableSubmitButton: u,
        premiumSubscription: C,
        existingAvailableSlots: P,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != s && s(), (0, e$.e)();
        },
        priceOptions:
            null != m ? { paymentSourceId: m, currency: null != A ? A : void 0 } : { currency: null != A ? A : void 0 },
        isRefreshEnabled: I,
        showRefreshSubtotalRate: T,
        refreshNextStepLabel: y,
    });
    return (
        N && null != C && null != C.paymentGateway
            ? (j = (0, l.jsxs)("div", {
                  className: eG.xK,
                  children: [
                      (0, l.jsx)(eZ.w, {
                          type: "critical",
                          children: G.intl.format(G.t["/m3Y3s"], { paymentGatewayName: tg.qm[C.paymentGateway] }),
                      }),
                      j,
                  ],
              }))
            : null != i &&
              !eo.A.isGuildFetching(i) &&
              x &&
              (j = (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(eq.p, {
                          messageType: eq.Y.ERROR,
                          className: eG.MR,
                          children: G.intl.string(G.t.eAn6z2),
                      }),
                      j,
                  ],
              })),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(eB.dZ, { children: j }),
                (0, l.jsx)(eB.UX, {
                    children: (0, l.jsx)(eY._, {
                        currentStep: a.pn.PLAN_SELECT,
                        isRefreshEnabled: I,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: I
                            ? (0, l.jsx)(ez.$, { variant: "secondary", text: G.intl.string(G.t["ETE/oC"]), onClick: t })
                            : (0, l.jsx)(eQ.Q, { text: G.intl.string(G.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, l.jsx)(ez.$, {
                            variant: "primary",
                            text: G.intl.string(G.t["3PatSz"]),
                            type: "submit",
                            disabled: (function (e) {
                                let {
                                    forceDisableSubmitButton: t,
                                    numGuildBoostsToPurchase: n,
                                    isDisabledBecauseExternalSubscription: l,
                                    isMissingGuildInformation: i,
                                } = e;
                                return t || 0 === n || l || i;
                            })({
                                forceDisableSubmitButton: c,
                                numGuildBoostsToPurchase: h,
                                isDisabledBecauseExternalSubscription: N,
                                isMissingGuildInformation: x,
                            }),
                            onClick: function () {
                                o || (null != b && b.premiumSubscriptionType === eU.PremiumTypes.TIER_2)
                                    ? n(null != p || R ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS)
                                    : n(a.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
var tV = n(364840),
    tK = n(935462),
    tZ = n(460905),
    tq = n(183623),
    tz = n(95635),
    tQ = n(331322),
    t$ = n(532794),
    tJ = n(811611),
    tX = n(901017),
    t0 = n(648484);
function t1(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, w.bG)([tE.default], () => tE.default.locale);
    return (0, l.jsxs)("div", {
        className: t0.mH,
        children: [
            (0, l.jsx)(tX.A, {
                icon: e8._,
                iconClassName: t0.pl,
                description: G.intl.formatToPlainString(G.t.sQBgs2, { numFreeGuildSubscriptions: eU.M4 }),
                color: e1.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, l.jsx)(tX.A, {
                icon: e8._,
                iconClassName: t0.pl,
                description: G.intl.formatToPlainString(G.t["1A6vXi"], { percent: (0, tA.l9)(n, eU.oX / 100) }),
                color: e1.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, l.jsx)(tX.A, { icon: tZ.n, iconClassName: t0.zO, description: G.intl.string(G.t.Z9b2x2) }) : null,
            (0, l.jsx)(tX.A, { icon: tq.F, iconClassName: t0.Kg, description: G.intl.string(G.t["8dqG5E"]) }),
            (0, l.jsx)(tX.A, { icon: tz.J, iconClassName: t0.$z, description: G.intl.string(G.t.cBorIy) }),
        ],
    });
}
function t2(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: r,
            onSkip: a,
            onSubscriptionConfirmation: s,
            analyticsLocation: u,
            analyticsSourceLocation: c,
            priceOptions: d,
        } = e,
        { analyticsLocations: p, sourceAnalyticsLocations: m } = (0, tl.Ay)(i.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        C = null == t || null == t.premiumSubscriptionType,
        h = O.Ay.getPrice(eU.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        E = (0, L.$g)(h.amount, h.currency),
        A = (0, tc.V)(),
        S = A?.trial_id,
        y = A?.subscription_trial?.sku_id === eU.pe.TIER_2;
    return (
        o.useEffect(() => {
            ev.default.track(D.HAw.PREMIUM_UPSELL_VIEWED, { type: eU.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: m });
        }, [m]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tK.s_, { "data-migration-pending": !0, onClick: n, className: t0.b }),
                (0, l.jsxs)(ey.c, {
                    children: [
                        y && (0, l.jsx)(tJ.Vq, { className: t0.Fg }),
                        (0, l.jsx)("div", { className: e0()(t0.Tn, { [t0.NH]: y }) }),
                        (0, l.jsx)(f.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children:
                                null != S
                                    ? G.intl.string(G.t.AoSzEr)
                                    : G.intl.format(G.t["7vePZb"], { monthlyPrice: E }),
                        }),
                        (0, l.jsx)(t1, { shouldUpsellFromNoneTier: C }),
                    ],
                }),
                (0, l.jsx)(tV.j, {
                    children: (0, l.jsxs)(tQ.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(eQ.Q, { text: G.intl.string(G.t["13/7kX"]), onClick: r, variant: "secondary" }),
                            (0, l.jsxs)(tQ.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, l.jsx)(eQ.Q, {
                                        text: G.intl.string(G.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, l.jsx)(ez.$, {
                                        variant: "active",
                                        text: null != S ? G.intl.string(G.t["Gd/XHF"]) : G.intl.string(G.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, t$.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eU.pe.TIER_2,
                                                    analyticsLocations: p,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: D.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: c,
                                                    onSubscriptionConfirmation: s,
                                                    trialId: S,
                                                });
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function t4(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: i } = e,
        { paymentModalArgs: r, analyticsLocation: s, analyticsSourceLocation: u } = eb(),
        { paymentSourceId: c, activeSubscription: d } = (0, E.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: p } = (0, e_.Jn)(),
        m = (0, w.bG)([ew.A], () => (null != d ? (0, ek.c9)(d.planId) : null)),
        C = (0, w.bG)([ew.A], () => (null == m ? ew.A.get(tB) : m));
    eK()(null != C, "Missing nextPremiumSubscriptionPlan"), eK()(null != p && "" !== p, "Currency not defined");
    let { paymentSources: h } = r,
        f = null != d ? d.paymentSourceId : null,
        A = Object.keys(h).length > 0,
        S = o.useCallback(() => n(a.pn.PLAN_SELECT), [n]),
        y = o.useCallback(() => n(null != f || A ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS), [n, f, A]);
    return (0, l.jsx)(t2, {
        premiumSubscriptionPlan: C,
        analyticsLocation: s,
        analyticsSourceLocation: u,
        onClose: t,
        onBack: S,
        onSkip: y,
        onSubscriptionConfirmation: i,
        priceOptions: null != c ? { paymentSourceId: c, currency: p } : { currency: p },
    });
}
var t3 = n(277984),
    t7 = n(364995),
    t6 = n(820739);
async function t5(e, t) {
    await (0, t6.CD)();
    let n = (0, eh.D$)(em.A.boostSlots);
    return (0, t6.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function t8() {
    let { guildId: e, intent: t, onSubscribeComplete: n, paymentModalArgs: l } = eb(),
        { setIsSubmittingCurrentStep: i } = l,
        { paymentAuthenticationState: r } = (0, el.o)(),
        { setPurchaseState: a, setPurchaseError: s } = (0, E.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
        })),
        u = o.useRef(!1);
    return (
        o.useEffect(() => {
            if (r === ed.oc.PENDING) {
                u.current = !0;
                return;
            }
            async function l() {
                if (null != e)
                    try {
                        await t5(e, null != t), n?.();
                    } catch (e) {
                        a(eu.h.FAIL), s(e);
                    }
            }
            u.current && ((u.current = !1), i(!1), r === ed.oc.NONE && null != e && l());
        }, [r, e, t, n, i, a, s]),
        null
    );
}
let t9 = [
        { key: a.pn.PLAN_SELECT, renderStep: (e) => (0, l.jsx)(tW, { ...e }), options: { renderHeader: !0 } },
        {
            key: a.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, l.jsx)(t4, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    ne = {
        CHECKOUT_FLOW: et.C.GUILD_BOOST_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(eH, { ...e }) },
        STEPS_BEFORE_CHECKOUT: t9,
        CHECKOUT_STEPS: {
            [a.pn.REVIEW]: function (e) {
                let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                    { guildId: s, paymentModalArgs: u, premiumSubscriptionPaymentSourceId: c } = eb(),
                    {
                        activeSubscription: d,
                        paymentSourceId: p,
                        setPaymentSourceId: m,
                    } = (0, E.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: C } = (0, e_.Jn)();
                if (null == s) throw new r.vd({ message: "Missing guildId" });
                eK()(null != C && "" !== C, "Currency not defined");
                let { paymentSources: h } = u,
                    { newAdditionalPlans: f, currentPremiumSubscriptionPlan: A } = eD(),
                    S = (0, w.bG)([ew.A], () => (null == A ? ew.A.get(tB) : A));
                eK()(null != S, "Missing nextPremiumSubscriptionPlan");
                let y = null != p ? { paymentSourceId: p, currency: C } : { currency: C },
                    P = (function (e) {
                        let { handleStepChange: t, handleClose: n, analyticsData: l } = e,
                            {
                                guildId: i,
                                paymentModalArgs: r,
                                premiumSubscriptionPaymentSourceId: s,
                                analyticsLocation: u,
                                analyticsSourceLocation: c,
                                flowStartTime: d,
                                applicationId: p,
                                intent: m,
                                onSubscribeComplete: C,
                            } = eb(),
                            { displayCurrency: h } = (0, e_.Jn)(),
                            { paymentSources: f, setIsSubmittingCurrentStep: A, isSubmittingCurrentStep: S } = r,
                            {
                                activeSubscription: y,
                                paymentSourceId: P,
                                setPurchaseError: I,
                                hasAcceptedTerms: _,
                                setPurchaseState: T,
                                quantity: g,
                            } = (0, E.t4)((e) => ({
                                activeSubscription: e.activeSubscription,
                                paymentSourceId: e.paymentSourceId,
                                setPurchaseError: e.setPurchaseError,
                                hasAcceptedTerms: e.hasAcceptedTerms,
                                setPurchaseState: e.setPurchaseState,
                                quantity: e.quantity,
                            })),
                            v = (0, tr.sw)(),
                            {
                                newAdditionalPlans: x,
                                currentPremiumSubscriptionPlan: N,
                                premiumGuildSubscriptionPlanId: R,
                            } = eD(),
                            b = (0, ty.A)({
                                location: "GuildBoostPurchaseModal",
                                message: G.intl.string(W.default["tK8A/8"]),
                            }),
                            { checkoutPaymentSources: j } = (0, t7.t)(),
                            L = (0, ty.iB)({
                                checkoutPaymentSources: j,
                                paymentSourceId: P,
                                location: "GuildBoostPurchaseModal",
                            }),
                            w = o.useMemo(
                                () => ({
                                    ...l,
                                    location: u,
                                    source: c,
                                    subscription_plan_id: R,
                                    sku_id: (0, O.mH)(eU.pe.GUILD),
                                    quantity: g,
                                }),
                                [l, u, c, g, R],
                            ),
                            k = o.useMemo(() => {
                                let { guild_id: e, ...t } = w;
                                return t;
                            }, [w]),
                            U = null != P ? { paymentSourceId: P, currency: h ?? void 0 } : { currency: h ?? void 0 };
                        async function F() {
                            eK()(null != x, "Missing newAdditionalPlans");
                            let e = (0, M.W)(f, P);
                            I(null);
                            let r = !1;
                            try {
                                T(eu.h.PURCHASING),
                                    A(!0),
                                    eK()(null != P, "Missing paymentSourceId"),
                                    eK()(null != v, "Missing invoicePreview");
                                let o = { amount: v.total, currency: v.currency },
                                    u = U.currency ?? v.currency,
                                    c = (0, O.U8)(y, x, u.toLowerCase(), U.paymentSourceId);
                                if (
                                    (ev.default.track(D.HAw.PAYMENT_FLOW_COMPLETED, {
                                        ...w,
                                        duration_ms: Date.now() - d,
                                        guild_id: i ?? void 0,
                                        application_id: p,
                                    }),
                                    null == y || null == N)
                                ) {
                                    eK()(null != e, "Missing paymentSource");
                                    let t = await (0, t3.Ky)({
                                        items: x,
                                        paymentSource: e,
                                        currency: u,
                                        expectedInvoicePrice: o,
                                        expectedRenewalPrice: c,
                                    });
                                    if (t.redirectConfirmation) {
                                        r = !0;
                                        return;
                                    }
                                    if (t.pendingCustomerAction) return;
                                } else {
                                    let t = { items: (0, O.aE)(y, x) };
                                    (t.currency = y.currency ?? u),
                                        (t.paymentSource = null != s ? f[s] : void 0),
                                        null == t.paymentSource &&
                                            (eK()(null != e, "Missing paymentSource"),
                                            (t.paymentSource = e),
                                            (t.currency = u));
                                    let n = await (0, t3.nV)(y, t, o, c, l.location_stack);
                                    if (n.redirectConfirmation) {
                                        r = !0;
                                        return;
                                    }
                                    if (n.pendingCustomerAction) return;
                                }
                                null == m && t(a.pn.CONFIRM),
                                    T(eu.h.COMPLETED),
                                    null != i && (await t5(i, null != m)),
                                    null != m && n(),
                                    C?.();
                            } catch (t) {
                                T(eu.h.FAIL),
                                    I(t),
                                    ev.default.track(D.HAw.PAYMENT_FLOW_FAILED, {
                                        ...k,
                                        payment_error_code: t?.code,
                                        payment_gateway:
                                            null != e ? (e.type === D.hes.CARD ? D.kM_.STRIPE : D.kM_.BRAINTREE) : null,
                                        payment_source_id: P,
                                        duration_ms: Date.now() - d,
                                    });
                            } finally {
                                r || A(!1);
                            }
                        }
                        return {
                            text: G.intl.string(G.t.eUEeCt),
                            loading: S,
                            disabled: null == P || !_ || null != b || L,
                            onClick: F,
                            variant: "active",
                        };
                    })({ handleStepChange: t, handleClose: n, analyticsData: i }),
                    I = o.useCallback(() => {
                        t(a.pn.ADD_PAYMENT_STEPS), m(null);
                    }, [t, m]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eB.dZ, {
                            children: (0, l.jsx)(tj, {
                                guildId: s,
                                paymentSources: h,
                                priceOptions: y,
                                currentPremiumSubscription: d,
                                premiumSubscriptionPaymentSourceId: c,
                                premiumSubscriptionPlan: S,
                                newAdditionalPlans: f,
                                paymentSourceId: p,
                                setPaymentSourceId: m,
                                onPaymentSourceAdd: I,
                            }),
                        }),
                        (0, l.jsx)(eB.UX, {
                            children: (0, l.jsx)(ea.lo, {
                                onBackClick: () => t(a.pn.PLAN_SELECT),
                                primaryButtonProps: P,
                            }),
                        }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            guildId: t,
                            totalNumberOfSlotsToAssign: n = 1,
                            intent: i,
                            disablePremiumUpsell: r,
                            onSubscribeComplete: a,
                            closeGuildPerksModal: s,
                            analyticsLocation: o,
                        },
                        applicationId: u,
                        analyticsSourceLocation: c,
                        stepConfigs: d,
                        loadId: p,
                        children: m,
                    } = e,
                    C = (0, w.bG)([eC.A], () => eC.A.getPremiumTypeSubscription()),
                    h = (0, X.A)(() => n - (0, eh.D$)(em.A.boostSlots).length);
                return (
                    (0, ee.Ay)(() => {
                        null != eo.A.getGuild(t) || eo.A.isGuildFetching(t) || (0, es.y)(t);
                    }),
                    (0, l.jsx)(en.M, {
                        activeSubscription: C,
                        stepConfigs: d,
                        skuIDs: tY,
                        loadId: p,
                        unifiedCheckoutFlow: et.C.GUILD_BOOST_CHECKOUT,
                        children: (0, l.jsxs)(ej, {
                            initialNumGuildBoostsToPurchase: h,
                            disablePremiumUpsell: r,
                            closeGuildPerksModal: s,
                            guildId: t,
                            analyticsLocation: o,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: i,
                            onSubscribeComplete: a,
                            children: [(0, l.jsx)(t8, {}), m],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { guildId: i, existingAvailableSlotCount: r } = eb(),
                    s = (0, ei.s2)(),
                    { purchaseState: u, quantity: c } = (0, E.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        quantity: e.quantity,
                    })),
                    d = (0, ec.n)("GuildBoostUnifiedCheckout"),
                    p = d && (s === a.pn.REVIEW || s === a.pn.CONFIRM),
                    m = (0, eS.A)(p),
                    C = o.useMemo(() => ({ quantity: c }), [c]);
                return d && s === a.pn.CONFIRM
                    ? (0, l.jsx)(eA.A, {
                          mediaUrls: m.mediaUrls,
                          isSuccess: m.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(u === eu.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, l.jsx)(ef.A, {
                                  transitionState: t.transitionState,
                                  guild: ep.A.getGuild(i),
                                  guildBoostQuantity: c + r,
                                  isTransfer: !1,
                                  graphic: e,
                                  onClose: n,
                              }),
                      })
                    : n({
                          ...t,
                          analyticsDataOverride: C,
                          disableUnsupportedExternalSubscriptionHandler: !0,
                          isMediumModal: !0,
                      });
            },
            tenantAnalyticsLocation: i.A.GUILD_BOOST_PURCHASE_MODAL,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                i = (0, ec.n)("GuildBoostUnifiedCheckout"),
                r = (0, E.t4)((e) => e.purchaseState),
                s = (0, h.A)();
            if (n === a.pn.PREMIUM_UPSELL) return null;
            if (n === a.pn.REVIEW) {
                let e = null != s ? s.skuId : null;
                return (0, l.jsx)(ea.s3, { ...(0, er.u)({ skuId: e, step: n }) });
            }
            return i
                ? (0, l.jsx)(ea.s3, { title: (0, er.u)({ skuId: null, step: n }).title })
                : (0, l.jsx)(eE.A, { onClose: () => t(r === eu.h.COMPLETED), currentStep: n, purchaseState: r });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(eW, { ...e }), options: { renderHeader: !0 } },
    };
var nt = n(773882),
    nn = n(192308),
    nl = n(871109);
let ni = o.createContext(void 0);
function nr() {
    let e = o.useContext(ni);
    return eK()(null != e, "GuildProductPurchaseContext not found"), e;
}
function na(e) {
    let { children: t, skuId: n, ...i } = e,
        r = (0, w.bG)([nl.A], () => nl.A.getGuildProduct(n));
    return (
        eK()(null != r, "guildProductListing cannot be null"),
        (0, l.jsx)(ni.Provider, { value: { guildProductListing: r, ...i }, children: t })
    );
}
function ns(e) {
    let { handleClose: t } = e,
        { guildProductListing: i, guildId: r } = nr(),
        a = (0, tr.sw)();
    return (
        (0, ee.Ay)(() => {
            var e;
            eK()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: r, guildProductListingId: i.id, invoicePreview: a }),
                (0, nn.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("3650"),
                        n.e("67837"),
                        n.e("35778"),
                        n.e("47812"),
                        n.e("13583"),
                        n.e("28090"),
                    ]).then(n.bind(n, 779457));
                    return (n) => (0, l.jsx)(t, { ...e, ...n });
                }),
                t();
        }),
        null
    );
}
var no = n(939249),
    nu = n(789645),
    nc = n(303612),
    nd = n(711085),
    np = n(564778);
function nm(e) {
    let { className: t, onClose: n } = e;
    return (0, l.jsx)(no.D, {
        className: e0()(nd.cG, t),
        onClick: n,
        children: (0, l.jsx)(nu.P, { size: "xs", color: "currentColor", className: nd.yP }),
    });
}
function nC(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, l.jsxs)(tK.rQ, {
        className: e0()(nd.wx, np.G, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, l.jsx)(nc.A, { className: nd.F0, listing: t, imageSize: 500, alt: "" }),
            (0, l.jsx)(nm, { className: nd.b, onClose: n }),
        ],
    });
}
var nh = n(995489);
let nE = {
    CHECKOUT_FLOW: r.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [a.pn.REVIEW]: nt.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: i,
            } = e;
            return (0, l.jsx)(na, { guildId: t, skuId: n, children: i });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: i.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: i } = nr();
        return n === a.pn.CONFIRM
            ? null
            : (0, l.jsx)(nC, { guildProductListing: i, className: nh.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(ns, { ...e }) },
};
var nf = n(20742),
    nA = n(951305),
    nS = n(776310),
    ny = n(228366),
    nP = n(213530),
    nI = n(966971),
    n_ = n(758836),
    nT = n(453308);
let ng = { sliderBodyClassName: nT.Bz };
function nv(e) {
    let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nS.Fk, { ref: n, className: nT.Lb, environment: t.current }),
            (0, l.jsx)(nP.K, { options: i, className: e0()(nT.Oh, { [nT.R]: !r }) }),
        ],
    });
}
var nx = n(702841),
    nN = n(775602),
    nR = n(31823),
    nb = n(427675),
    nM = n(590180),
    nj = n(953150),
    nO = n(524246),
    nL = n(14368),
    nw = n(61750),
    nk = n(972607),
    nU = n(901930);
function nD(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: i,
            purchaseError: r,
            purchasePreviewError: a,
            appliedUserDiscounts: s,
        } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: u } = (0, el.o)(),
        { application: c } = (0, nR.V)(),
        d = (0, nb.gU)(),
        p = (0, nx.bG)([nM.A], () => nM.A.getProduct(i)),
        m = o.useRef(!1);
    eK()(null != i, "Expected selectedSkuId"), eK()(null != c, "Expected application");
    let C = d[i];
    eK()(null != C, "Expected sku");
    let h = null != u || null != r || null != a,
        f =
            s.length > 0
                ? G.intl.formatToPlainString(G.t.VuV3Td, { discountOfferAmount: s[0].discount.amount })
                : void 0;
    return (o.useEffect(() => {
        null == p ||
            h ||
            m.current ||
            ((m.current = !0),
            (0, nw.A)({
                product: p,
                overrideTitle: f,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: n_.gs.FIAT,
            }));
    }, [p, n, t, h, f]),
    h)
        ? (0, l.jsx)(eB.dZ, { children: (0, l.jsx)(nU.A, {}) })
        : null;
}
function nG(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: i,
            hasSentMessage: r,
            giftRecipient: a,
            giftMessageError: s,
            isSendingMessage: u,
            giftingOrigin: c,
        } = (0, nA.Pv)(),
        d = (0, nx.bG)([nN.Ay], () => nN.Ay.useReducedMotion),
        p = o.useRef(null),
        m = (0, E.t4)((e) => e.selectedSkuId),
        C = (0, nx.bG)([nM.A], () => nM.A.getProduct(m)),
        { confettiColors: h } = (0, nj.A)(C?.styles);
    return (
        o.useEffect(() => {
            t &&
                null != a &&
                null != m &&
                (c === eU.vQ.USER_PROFILE_WISHLIST || c === eU.vQ.DM_CHANNEL_WISHLIST) &&
                ny.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: m, recipientId: a.id });
        }, [t, a, m, c]),
        t
            ? (0, l.jsxs)("div", {
                  ref: p,
                  children: [
                      (0, l.jsx)(nk.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: i,
                          hasSentMessage: r,
                          giftRecipient: a,
                          giftMessageError: s,
                          isSendingMessage: u,
                      }),
                      !e.hideConfetti &&
                          !d &&
                          (0, l.jsx)(nO.A, {
                              confettiTarget: p.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, nL.rA)(C?.categorySkuId),
                              colors: h?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, l.jsx)(nD, { ...e })
    );
}
var nF = n(70283),
    nH = n(982240),
    nB = n(839534),
    nY = n(993408),
    nW = n(575593),
    nV = n(452027),
    nK = n(922016),
    nZ = n(778712),
    nq = n(986687),
    nz = n(999291),
    nQ = n(903209),
    n$ = n(674658),
    nJ = n(898461),
    nX = n(203632),
    n0 = n(892118),
    n1 = n(536572),
    n2 = n(14702),
    n4 = n(219103),
    n3 = n(608147);
function n7(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: i,
            className: r,
            previewHeaderClassName: a,
            hideProfilePreview: s,
        } = e,
        { giftRecipient: u, giftRecipientError: c } = (0, nA.Pv)(),
        d = (0, w.bG)([U.default], () => U.default.getCurrentUser()),
        p = O.Ay.canUseShopDiscounts(d),
        m = (0, nz.Ay)(u?.id),
        C = o.useRef(null),
        [h, E] = o.useState(!1),
        { product: A } = (0, n$.q)(t, !0),
        S = o.useMemo(() => (0, nY.fT)(A, p), [A, p]);
    if (null == A || 0 === A.items.length) return null;
    let [y] = A.items,
        P = (0, n1.VG)(A),
        I = null != u && u.id !== d?.id && A.type !== nW.R.BUNDLE && y.type !== nW.R.NAMEPLATE && !s;
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsx)("div", {
                className: e0()(n3.QU, a),
                children: (0, l.jsx)(nV.D, {
                    label: G.intl.string(G.t.PpoJzt),
                    children:
                        I &&
                        (0, l.jsx)(
                            nK.Y,
                            {
                                targetElementRef: C,
                                align: "center",
                                shouldShow: h,
                                onRequestClose: () => E(!1),
                                preload: () => (0, nQ.A)(u.id, u.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, l.jsx)(nq.A, {
                                        ...e,
                                        user: u,
                                        pendingAvatar: u.getAvatarURL(null, (0, nZ.FT)(nZ._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, nJ.T)(y) ? y : null,
                                        pendingProfileEffect: (0, nX.C3)(y) ? y : null,
                                        pendingProfileFrame: (0, n0.s)(y) ? y : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...i } = e;
                                    return (0, l.jsx)(no.D, {
                                        ...i,
                                        className: n3.Nx,
                                        innerRef: C,
                                        onClick: (e) => {
                                            E((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            h ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, l.jsx)(f.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: G.intl.string(G.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            m?.userId,
                        ),
                }),
            }),
            (0, l.jsxs)("div", {
                className: e0()(n3.i1, null != c ? n3.cN : n3.no),
                children: [
                    (0, l.jsxs)("div", {
                        className: n3.Ug,
                        children: [
                            (0, l.jsx)(n2.O, { product: A }),
                            (0, l.jsxs)("div", {
                                className: n3.JZ,
                                children: [
                                    (0, l.jsx)(f.E, { variant: "text-md/semibold", children: P }),
                                    (0, l.jsx)(e5.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            A?.type === nW.R.BUNDLE
                                                ? null
                                                : y.type === nW.R.AVATAR_DECORATION
                                                  ? G.intl.string(G.t["7v0T9P"])
                                                  : y.type === nW.R.NAMEPLATE
                                                    ? G.intl.string(G.t.x5CoXR)
                                                    : y.type === nW.R.PROFILE_EFFECT
                                                      ? G.intl.string(G.t.wR5wOo)
                                                      : y.type === nW.R.PROFILE_FRAME
                                                        ? G.intl.string(G.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(n4.x, {
                                priceAmount: n,
                                priceCurrency: i,
                                discount: S,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != c &&
                        (0, l.jsx)("div", {
                            className: n3.Wh,
                            children: (0, l.jsx)(f.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: c,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var n6 = n(783878),
    n5 = n(966327),
    n8 = n(427262);
let n9 = function (e) {
    let { selectedSkuId: t, validateSelectedGift: n, className: i, recipients: r } = e,
        { giftRecipient: a, setGiftRecipient: s } = (0, nA.Pv)();
    return null == t
        ? null
        : (0, l.jsx)("div", {
              className: i,
              children: (0, l.jsx)(n6.Z, {
                  selectionMode: "single",
                  label: G.intl.string(G.t.xFn72s),
                  placeholder: G.intl.string(G.t.R0vK0N),
                  value: a?.id,
                  onSelectionChange: function (e) {
                      if (null == t) return;
                      let l = r.find((t) => t.id === e);
                      null != l && (n(l, t), s(l));
                  },
                  options: r.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${n8.Ay.getUserTag(e)}`,
                      leading: (0, l.jsx)(n5.A, { user: e, size: nZ._3.SIZE_20 }),
                  })),
              }),
          });
};
var le = n(435558),
    lt = n.n(le),
    ln = n(427358),
    ll = n(570287),
    li = n(994500);
function lr() {
    let e = (0, w.yK)([li.A], () => li.A.getFriendIDs()),
        t = (0, w.yK)([ln.A], () =>
            ln.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: i } = e,
                        r = (0, ll.q)(i);
                    return !t && (n >= 0.1 || l >= 0.1) && r;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = o.useMemo(() => lt().uniq([...e, ...t]), [e, t]);
    return (0, w.yK)(
        [U.default],
        () =>
            n.reduce((e, t) => {
                let n = U.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var la = n(611881),
    ls = n(492275),
    lo = n(871181),
    lu = n(318007),
    lc = n(285719),
    ld = n(976860),
    lp = n(595543);
function lm(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: r } = (0, tl.Ay)(i.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, l.jsx)(eQ.Q, {
        text: G.intl.string(G.t.J82mpK),
        onClick: function () {
            t(),
                (0, nn.closeAllModals)(),
                null == n
                    ? (0, nB.Cz)({ analyticsLocations: r, analyticsSource: i.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, ld.pX)(`${D.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
let lC = (0, o.createContext)({
    setCustomConfettiVisible: () => {},
    confettiCanvas: null,
    hideConfirmStepConfetti: !1,
    skuIDs: [],
});
function lh() {
    return (0, o.useContext)(lC);
}
function lE(e) {
    let { hideConfirmStepConfetti: t, confettiCanvas: n } = lh(),
        { analyticsLocations: i } = (0, tl.Ay)();
    return (0, l.jsx)(nG, { analyticsLocations: i, hideConfetti: t, confettiCanvas: n, ...e });
}
let lf = {
    [a.pn.GIFT_CUSTOMIZATION]: () => G.intl.string(G.t["JCFN/y"]),
    [a.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => G.intl.string(G.t.lDbi6H),
    [a.pn.CONFIRM]: () => "",
};
function lA(e) {
    let { step: t } = e,
        n = lf[t];
    return null == n ? null : (0, l.jsx)(nf.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
}
let lS = {
    CHECKOUT_FLOW: r.CL.COLLECTIBLES_CHECKOUT,
    CHECKOUT_STEPS: {
        [a.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                {
                    renderLeftColumn: a,
                    renderRightColumn: s,
                    renderBottomContent: u,
                    ctaDisabled: c,
                    loading: d,
                } = (function (e) {
                    let { handleStepChange: t, handleClose: n } = e,
                        {
                            customGiftMessage: r = "",
                            setCustomGiftMessage: a,
                            giftRecipientError: s,
                            setGiftRecipientError: o,
                            validatingGiftRecipient: u,
                            giftRecipient: c,
                            giftingOrigin: d,
                            setValidatingGiftRecipient: p,
                        } = (0, nA.Pv)(),
                        { selectedSkuId: m, checkoutInvoicePreview: C } = (0, E.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                        })),
                        h = (0, nb.gU)(),
                        f = (0, w.bG)([U.default], () => U.default.getCurrentUser()),
                        A = lr(),
                        { analyticsLocations: S } = (0, tl.Ay)(i.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL),
                        y = (0, la.F5)("CollectiblesPaymentModalGiftCustomizationStep"),
                        { nextTier: P, giftsToNextTier: I } = (0, w.cf)([nH.Ay], () => ({
                            nextTier: nH.Ay.getNextTier(nF.$.GIFTING),
                            giftsToNextTier: nH.Ay.getRemainingToNextTier(nF.$.GIFTING),
                        })),
                        _ = y && null != P;
                    async function T(e, t) {
                        p(!0), null != s && o(), (await (0, nB.JJ)(e.id, t)) || o(G.intl.string(G.t["4kgVqQ"])), p(!1);
                    }
                    function g() {
                        return (0, l.jsx)(lo.A, {
                            onTextChange: (e) => a?.(e),
                            pendingText: r,
                            currentText: r,
                            disableThemedBackground: !0,
                            className: lp.iX,
                            innerClassName: lp.pt,
                        });
                    }
                    return (
                        (0, ee.Ay)(() => {
                            null != m &&
                                null != c &&
                                (d !== eU.vQ.DM_CHANNEL_WISHLIST &&
                                    ev.default.track(D.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: m }),
                                T(c, m));
                        }),
                        {
                            renderLeftColumn: function () {
                                return (0, l.jsx)("div", {
                                    className: lp.qL,
                                    children: (0, l.jsx)(lu.t, { isShopGift: !0 }),
                                });
                            },
                            renderRightColumn: function () {
                                let e = (0, nY.pA)({ invoicePreview: C, selectedSkuId: m, skusById: h });
                                return d === eU.vQ.USER_PROFILE_WISHLIST || d === eU.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, l.jsxs)("div", {
                                          children: [
                                              (0, l.jsx)(lc.Z, { giftRecipient: c }),
                                              g(),
                                              null != e &&
                                                  null != m &&
                                                  (0, l.jsx)(n7, {
                                                      skuId: m,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: lp.uW,
                                                      previewHeaderClassName: lp.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, l.jsx)("div", {
                                                  className: lp.fi,
                                                  children: (0, l.jsx)(lm, { handleClose: n, selectedSkuId: m }),
                                              }),
                                          ],
                                      })
                                    : (0, l.jsxs)("div", {
                                          children: [
                                              (0, l.jsx)(n9, {
                                                  selectedSkuId: m,
                                                  recipients: A,
                                                  className: lp.uh,
                                                  validateSelectedGift: T,
                                              }),
                                              g(),
                                              null != e &&
                                                  null != m &&
                                                  (0, l.jsx)(n7, {
                                                      skuId: m,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: lp.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            renderBottomContent: function () {
                                return _
                                    ? (0, l.jsx)(ls.A, {
                                          giftsToNextTier: I,
                                          nextTierName: P.name ?? "",
                                          nextTierIcon: P.simple_icon_url,
                                          analyticsLocations: S,
                                          className: lp.qr,
                                      })
                                    : null;
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == c || c.id === f?.id || r.length > eU.Jo,
                            loading: u,
                        }
                    );
                })({ handleStepChange: t, handleClose: n }),
                p = o.useMemo(() => ({ loading: d, disabled: c }), [d, c]);
            return (0, l.jsx)(r.Mw, {
                paymentModalStepProps: e,
                layout: r.XZ.TWO_COLUMN,
                renderLeftColumn: a,
                renderRightColumn: s,
                renderBottomContent: u,
                primaryCTAButtonProps: p,
            });
        },
        [a.pn.REVIEW]: nt.p,
    },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { skuId: t, children: n, ...i } = e,
                {
                    environment: r,
                    confettiCanvas: a,
                    setConfettiCanvas: s,
                    customConfettiVisible: u,
                    setCustomConfettiVisible: c,
                    customConfettiDisplayOptions: d,
                    hideConfirmStepConfetti: p,
                } = (function (e) {
                    let { skuId: t } = e,
                        n = o.useRef(new nS.OH()),
                        [l, i] = o.useState(null),
                        [r, a] = o.useState(!1),
                        s = o.useMemo(() => (0, nI.AB)({ purchaseType: n_.gs.FIAT, skuId: t }), [t]);
                    return {
                        environment: n,
                        confettiCanvas: l,
                        setConfettiCanvas: i,
                        customConfettiVisible: r,
                        setCustomConfettiVisible: a,
                        customConfettiDisplayOptions: s,
                        hideConfirmStepConfetti: null != s,
                    };
                })({ skuId: t }),
                m = (function (e) {
                    let { skuId: t } = e;
                    return null != t ? [t] : [];
                })({ skuId: t }),
                C = (0, o.useMemo)(
                    () => ({ skuIDs: m, setCustomConfettiVisible: c, hideConfirmStepConfetti: p, confettiCanvas: a }),
                    [m, c, p, a],
                );
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(nv, {
                        environment: r,
                        setConfettiCanvas: s,
                        customConfettiDisplayOptions: d,
                        customConfettiVisible: u,
                    }),
                    (0, l.jsx)(en.M, {
                        ...i,
                        skuIDs: m,
                        stepConfigs: i.stepConfigs,
                        activeSubscription: null,
                        purchaseType: tg.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, l.jsx)(lC.Provider, { value: C, children: n }),
                    }),
                ],
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                { skuIDs: l, setCustomConfettiVisible: i } = lh(),
                {
                    paymentModalSkuId: r,
                    paymentModalOnClose: a,
                    paymentModalOnComplete: s,
                } = (function (e) {
                    let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: i } = e,
                        r = t[0] ?? null,
                        a = o.useCallback(() => {
                            i(!0), l?.();
                        }, [l, i]);
                    return {
                        paymentModalSkuId: r,
                        paymentModalOnClose: o.useCallback(
                            (e) => {
                                i(!1), n(e), ny.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                            },
                            [n, i],
                        ),
                        paymentModalOnComplete: a,
                    };
                })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: i });
            return n({ ...t, skuId: r, onClose: a, onComplete: s, applicationId: D.FYj });
        },
        tenantAnalyticsLocation: i.A.COLLECTIBLES_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            { isGift: n } = (0, nA.Pv)();
        return n ? (0, l.jsx)(lA, { step: t }) : null;
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(lE, { ...e }), options: ng },
};
var ly = n(809029),
    lP = n(354033),
    lI = n(877624),
    l_ = n(554146),
    lT = n(841702),
    lg = n(367727),
    lv = n(380619),
    lx = n(709870),
    lN = n(412260),
    lR = n(771566),
    lb = n(625494),
    lM = n(45938),
    lj = n(97808),
    lO = n(912140),
    lL = n(780898),
    lw = n(344346),
    lk = n(837015),
    lU = n(400699);
function lD(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: i } = e,
        r = (0, w.bG)([U.default], () => U.default.getCurrentUser()),
        a = (0, w.bG)([nN.Ay], () => nN.Ay.useReducedMotion),
        { analyticsLocations: s } = (0, tl.Ay)(),
        u = nZ._3.SIZE_32,
        { product: c, isFetching: d } = (0, n$.q)(t),
        [p, m] = o.useState(!1),
        C = c?.items[0],
        {
            isNameplateReward: h,
            nameplateData: E,
            rewardAvatarDecorationSrc: f,
        } = o.useMemo(
            () =>
                null == C
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, lk.F)(C)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: C.skuId,
                                src: C.asset,
                                palette: (0, lL.H6)(C.palette ?? "sky"),
                                imgAlt: C.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, nJ.T)(C)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, lO.A)({
                                  legacyAssetId: C.asset,
                                  skuId: C.skuId,
                                  size: u,
                                  canAnimate: !a,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [C, u, a],
        );
    return (0, l.jsx)(eB.UX, {
        children: (0, l.jsx)(tV.j, {
            children: (0, l.jsxs)("div", {
                className: lU.W,
                children: [
                    h && null != E
                        ? (0, l.jsx)("div", {
                              className: lU.D,
                              onMouseEnter: () => m(!0),
                              onMouseLeave: () => m(!1),
                              children: (0, l.jsx)(lw.a, {
                                  user: r,
                                  nameplate: null,
                                  nameplateData: E,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: p,
                              }),
                          })
                        : (0, l.jsx)(lj.Js, {
                              "aria-label": r?.username,
                              size: u,
                              src: r?.getAvatarURL(void 0, (0, nZ.FT)(u), !a),
                              avatarDecoration: f,
                          }),
                    (0, l.jsx)(ez.$, {
                        variant: "primary",
                        text: G.intl.string(G.t.kMYVwv),
                        loading: d,
                        onClick: () => {
                            null != c &&
                                (n(),
                                (0, nw.A)({
                                    product: c,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: s,
                                    purchaseType: n_.gs.PROMOTIONAL,
                                    onCloseCallback: i,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var lG = n(49999);
function lF(e) {
    let t,
        {
            handleClose: i,
            planGroup: r,
            onSubscriptionConfirmation: a,
            renderPurchaseConfirmation: u,
            postSuccessGuild: c,
            followupSKUInfo: d,
            continueSessionToInitialStep: p,
        } = e,
        { paymentSources: m } = (0, _.jm)(),
        {
            activeSubscription: f,
            selectedSkuId: A,
            updatedSubscription: S,
            paymentSourceId: y,
            isPremiumGroupPurchase: P,
            startingPremiumSubscriptionPlanId: I,
            startingFractionalPremiumEndsAt: T,
            checkoutInvoicePreview: g,
        } = (0, E.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
        })),
        v = (0, h.A)(),
        x = (0, ei.s2)(),
        {
            isGift: N,
            giftRecipient: R,
            giftCode: b,
            hasSentMessage: j,
            isSendingMessage: O,
            sendGiftMessage: L,
            claimableRewards: k,
            selectedGiftingPromotionReward: U,
            openGiftingBadgePostPurchaseModal: G,
        } = (0, nA.Pv)(),
        { confirmationFooter: F } = (0, s.cG)(),
        H = (0, lv.px)(v, N, k),
        B = (0, lv.Mq)(v),
        Y = (0, lT.Mv)(U, !1),
        W = (0, w.bG)([lN.A], () => lN.A.getGiftPromotion()?.id),
        V = (0, w.bG)([lN.A], () => {
            let e = lN.A.getMarketingComponentByType(lI.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        K = (0, M.g)(m, y),
        Z = N && null != U && null != Y && B,
        q = { selectedPlan: v, selectedSkuId: A, step: x };
    if (null == v) throw new C.v({ message: "Expected plan to be selected", extraSentryInformation: q });
    if (null == A) throw new C.v({ message: "Expected selectedSkuId", extraSentryInformation: q });
    if (null == x) throw new C.v({ message: "Step should be set", extraSentryInformation: q });
    let z = o.useCallback(() => {
        i(), a?.();
    }, [i, a]);
    (0, ee.Ay)(() => {
        P &&
            ev.default.track(D.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != S,
                has_any_premium_group: S?.hasAnyPremiumGroup ?? !1,
                subscription_id: S?.id,
            });
    });
    let Q = null != g ? g.orbsReward : null;
    o.useEffect(() => {
        function e() {
            if (P)
                if (null != S && S.hasAnyPremiumGroup) {
                    ev.default.track(D.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: S.id });
                    let e = (0, le.uniqueId)("premium-group-purchase-flow-modal");
                    (0, nn.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("33587"),
                                n.e("86248"),
                                n.e("74630"),
                                n.e("48948"),
                                n.e("85579"),
                            ]).then(n.bind(n, 785606));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    ...t,
                                    subscription: S,
                                    isFromPurchaseFlow: !0,
                                    onClose: async () => {
                                        lb._.dispatch(D.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await t.onClose();
                                    },
                                });
                        },
                        {
                            onCloseRequest: () => {
                                lb._.dispatch(D.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, nn.closeModal)(e);
                            },
                            modalKey: e,
                        },
                    );
                } else
                    ev.default.track(D.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                        has_updated_subscription: null != S,
                        has_any_premium_group: S?.hasAnyPremiumGroup ?? !1,
                    }),
                        lb._.dispatch(D.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            else null != Q && Q > 0 && (0, lx.$)({ orbsAmount: Q });
        }
        return (
            lb._.subscribe(D.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                lb._.unsubscribe(D.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [P, S, Q]),
        o.useEffect(() => {
            !N || null == R || null == b || j || O || (0, lM.Ik)(R) || L({ onSubscriptionConfirmation: a });
        }, [L, N, R, b, j, O, a]),
        o.useEffect(() => {
            H &&
                null != V &&
                null != W &&
                (0, lg.qr)(l_.M.GIFTING_PROMOTION_REMINDER, W, { dismissAction: lG.i.INDIRECT_ACTION });
        }, [V, W, H]);
    let $ = null != p ? lR.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != u) t = u(v, z, S);
    else if (N) t = (0, l.jsx)(lR.fw, { planId: v.id, onClose: z });
    else {
        let e =
            I === v.id
                ? { postSuccessGuild: c }
                : {
                      followupSKUInfo: d,
                      startingPremiumSubscriptionPlanId: I,
                      isDowngrade: null != f && (0, ek.vT)(f, v.id, r),
                  };
        t = (0, l.jsx)(lR.Ay, {
            planId: v.id,
            onClose: z,
            paymentSourceType: K,
            hideClose: null != F,
            startingFractionalPremiumEndsAt: T,
            customCTAType: $,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(eB.dZ, { children: [(0, l.jsx)(nU.A, {}), t] }),
            null != F && F,
            Z && null != U && (0, l.jsx)(lD, { rewardSkuId: U, onClose: z, onRewardModalClose: G }),
        ],
    });
}
let [lH, lB] = (0, u.A)(),
    lY = {
        CHECKOUT_FLOW: r.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [a.pn.REVIEW]: ly.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: i,
                    } = e,
                    r = o.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, l.jsx)(lH.Provider, { value: r, children: (0, l.jsx)(s.Qt, { children: i }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                { guildId: i, listing: r } = lB();
            return (0, l.jsx)(lP.Y, { onClose: t, listing: r, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(lF, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var lW = n(73825),
    lV = n(35587),
    lK = n(607399),
    lZ = n(795791),
    lq = n(344159),
    lz = n(561794),
    lQ = n(811656),
    l$ = n(259678),
    lJ = n(890856),
    lX = n(947641),
    l0 = n(713517),
    l1 = n(929283),
    l2 = n(761365),
    l4 = n(819997);
function l3(e) {
    let t,
        n,
        { skuId: i, user: r, claimed: a, onSelect: s, selectedSkuId: u } = e,
        [c, d] = o.useState(null),
        p = o.useCallback((e) => {
            d(e);
        }, []),
        m = o.useMemo(() => ({ current: c }), [c]),
        { isHoveringOrFocusing: C } = (0, l0.A)(m),
        h = !a && C,
        { product: E } = (0, n$.q)(i);
    if (null == E) return null;
    let A = E.items[0];
    return null == A
        ? null
        : ((0, nJ.T)(A)
              ? ((n = nW.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(l1.i, { item: A, user: r, isHighlighted: h, avatarSize: nZ._3.SIZE_96 })))
              : (0, lk.F)(A) &&
                ((n = nW.R.NAMEPLATE),
                (t = (0, l.jsx)(l2.A, { nameplate: A, user: r, isHighlighted: h, size: "small" }))),
          (0, l.jsx)(l$.vN, {
              children: (0, l.jsxs)(lJ.s, {
                  ref: p,
                  "aria-label": E.name ?? "",
                  onClick: function () {
                      null == i || null == s || a || s(i);
                  },
                  className: e0()(l4._x, { [l4.Vp]: !a, [l4.mr]: h, [l4.md]: u === i }),
                  children: [
                      (0, l.jsx)("div", {
                          className: e0()(l4.VH, {
                              [l4._Q]: n === nW.R.AVATAR_DECORATION,
                              [l4.M4]: n === nW.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: e0()(l4.i1, { [l4.Sf]: a }), children: t }),
                                            a &&
                                                (0, l.jsx)(lX.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: e1.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: l4.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: l4.tZ,
                          children: [
                              (0, l.jsx)(e5.D, { variant: "heading-md/extrabold", children: E.name }),
                              (0, l.jsx)(f.E, {
                                  variant: "text-sm/normal",
                                  children: a ? G.intl.string(G.t["6cfuDj"]) : G.intl.string(G.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
}
var l7 = n(696208),
    l6 = n(683433);
function l5(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: r,
            showBackButton: s,
            planOptions: u,
            shouldRenderUpdatedPaymentModal: c = !1,
            isTrial: d,
            isNextDisabled: p = !1,
        } = e,
        { paymentSources: m } = (0, _.jm)(),
        C = (0, h.A)(),
        { isGift: E, claimableRewards: f } = (0, nA.Pv)();
    i = i ?? m;
    let {
            variant: A,
            text: S,
            onClick: y,
            disabled: P,
        } = (function (e) {
            let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: l,
                    claimableRewards: i,
                    paymentSources: r,
                    shouldRenderUpdatedPaymentModal: s,
                    isTrial: o,
                    isNextDisabled: u = !1,
                } = e,
                c = (0, w.bG)([eC.A], () => eC.A.getPremiumTypeSubscription()),
                d = (0, h.A)(),
                p = (0, ei.s2)(),
                { hasEntitlements: m } = (0, lq.X)(n, l),
                C = (null != c && null != c.paymentSourceId) || Object.keys(r).length > 0 || (m && !o);
            var E = s ? G.intl.string(G.t.PDTjLN) : G.intl.string(G.t.XqMe3N),
                f = a.pn.ADD_PAYMENT_STEPS;
            return (
                C && (f = a.pn.REVIEW),
                (0, lv.px)(d, l, i) && p !== a.pn.SELECT_FREE_SKU && (f = a.pn.SELECT_FREE_SKU),
                { variant: "primary", text: E, onClick: () => t(f), disabled: u }
            );
        })({
            onStepChange: t,
            selectedPlanId: (n = n ?? C?.id),
            isGift: E,
            claimableRewards: f,
            paymentSources: i,
            shouldRenderUpdatedPaymentModal: c,
            isTrial: d,
            isNextDisabled: p,
        }),
        I = o.useMemo(
            () =>
                null != n && u.includes(n)
                    ? [{ variant: A, text: S, onClick: y, disabled: P }]
                    : [{ variant: "primary", text: G.intl.string(G.t.XqMe3N), disabled: !0 }],
            [A, S, y, P, n, u],
        );
    return (0, l.jsx)(l7.H, { leading: s && null != r ? (0, l.jsx)(l6.A, { onClick: r }) : void 0, actions: I });
}
var l8 = n(331968);
function l9(e) {
    let { handleStepChange: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        i = (0, h.A)(),
        r = (0, ei.s2)(),
        { setSelectedGiftingPromotionReward: s, selectedGiftingPromotionReward: u, claimableRewards: c } = (0, nA.Pv)(),
        d = (0, w.bG)([U.default], () => U.default.getCurrentUser()),
        p = (0, w.yK)([lN.A], () => lN.A.getGiftPromotionRewardSkuIds()),
        m = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(c, u),
        [f, A] = o.useState(m),
        [S, y] = o.useState(!1);
    o.useEffect(() => {
        S || null != u || null == m || (s(m), A(m));
    }, [m, S, u, s]);
    let P = { selectedPlan: i, selectedSkuId: n, step: r };
    if (null == i) throw new C.v({ message: "Expected plan to be selected", extraSentryInformation: P });
    if (null == n) throw new C.v({ message: "Expected selectedSkuId", extraSentryInformation: P });
    if (null == r) throw new C.v({ message: "Step should be set", extraSentryInformation: P });
    let I = o.useMemo(() => null != f && (c ?? []).includes(f), [f, c]),
        _ = o.useMemo(() => 0 === p.length || null == f || !I, [p, f, I]);
    function T(e) {
        s(e), A(e), y(!0);
    }
    o.useEffect(() => {
        if (0 === p.length) {
            A(void 0), s(void 0);
            return;
        }
        (null != f && I && p.includes(f)) || null == f || (A(void 0), s(void 0));
    }, [p, I, f, s]);
    let g = p.map((e) =>
            (0, l.jsx)(
                l3,
                { skuId: e, claimed: null != c && !c.includes(e), user: d, onSelect: T, selectedSkuId: f },
                e,
            ),
        ),
        v = (0, l.jsx)(eB.UX, {
            children: (0, l.jsx)(l5, {
                onStepChange: t,
                onBackClick: () => t(a.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [i.id],
                selectedPlanId: i.id,
                isNextDisabled: _,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nf.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: G.intl.string(G.t.OEtqpm),
                subtitle: G.intl.string(G.t.h2nMp0),
            }),
            (0, l.jsx)(ey.c, {
                children: (0, l.jsx)(tQ.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: l8.Dq, children: g }),
                }),
            }),
            v,
        ],
    });
}
var ie = n(428644),
    it = n(396533),
    il = n(699595),
    ii = n(664504),
    ir = n(67948),
    ia = n(807098),
    is = n(298305),
    io = n(973513);
function iu() {
    let e = (0, w.bG)([lN.A], () => {
            let e = lN.A.getMarketingComponentByType(lI.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, nA.Pv)(),
        n = (0, ia.T)(e?.asset),
        i = (0, ia.T)(e?.backgroundAsset),
        r = e?.gradient,
        a =
            null != r && null != r.colors && r.colors.length >= 2
                ? (0, lv.K5)({ gradient: r.colors, angle: r.angle ?? void 0 })
                : void 0,
        s = (0, lv.gc)(i);
    null != s && ((s.backgroundSize = "cover, auto"), (s.backgroundPosition = "right center, 0% 0%"));
    let o = (0, lv.x)(s, a),
        u = e?.assetVariant === ir.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: io.qD,
              style: o,
              children: [
                  (0, l.jsx)("div", {
                      className: e0()([io.my], { [io.R_]: u }),
                      children: (0, l.jsx)(is.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: u ? nZ._3.SIZE_72 : nZ._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(f.E, {
                      variant: "text-md/medium",
                      color: "text-overlay-light",
                      children: G.intl.string(G.t.Abiuci),
                  }),
              ],
          });
}
var ic = n(410516),
    id = n(462887),
    ip = n(736653),
    im = n(854627),
    iC = n(236834);
let ih = (e) => {
        let { className: t, width: n = 83, height: i = 45 } = e;
        return (0, l.jsxs)("svg", {
            width: n,
            height: i,
            viewBox: "0 0 83 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
                (0, l.jsxs)("g", {
                    opacity: "0.6",
                    children: [
                        (0, l.jsx)("path", {
                            opacity: "0.3",
                            d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                            fill: "url(#paint0_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                            fill: "url(#paint1_linear_1558_55666)",
                        }),
                        (0, l.jsxs)("g", {
                            clipPath: "url(#clip0_1558_55666)",
                            children: [
                                (0, l.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "url(#paint2_linear_1558_55666)",
                                }),
                                (0, l.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "white",
                                }),
                                (0, l.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "url(#paint3_linear_1558_55666)",
                                }),
                                (0, l.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "white",
                                }),
                                (0, l.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "url(#paint4_linear_1558_55666)",
                                }),
                                (0, l.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                        (0, l.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "url(#paint5_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "white",
                        }),
                        (0, l.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "url(#paint6_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "white",
                        }),
                        (0, l.jsx)("path", {
                            d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                            fill: "url(#paint7_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                            fill: "url(#paint8_linear_1558_55666)",
                            fillOpacity: "0.9",
                        }),
                        (0, l.jsx)("path", {
                            d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                            fill: "url(#paint9_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                            fill: "url(#paint10_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                            fill: "url(#paint11_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                            fill: "url(#paint12_linear_1558_55666)",
                        }),
                    ],
                }),
                (0, l.jsxs)("defs", {
                    children: [
                        (0, l.jsxs)("linearGradient", {
                            id: "paint0_linear_1558_55666",
                            x1: "0",
                            y1: "23.8981",
                            x2: "92.5783",
                            y2: "23.8981",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint1_linear_1558_55666",
                            x1: "19.5205",
                            y1: "23.9092",
                            x2: "77.3871",
                            y2: "23.9092",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint2_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint3_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint4_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint5_linear_1558_55666",
                            x1: "22.6953",
                            y1: "23.8106",
                            x2: "74.5438",
                            y2: "23.8106",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint6_linear_1558_55666",
                            x1: "33.8516",
                            y1: "23.5132",
                            x2: "64.6392",
                            y2: "23.5132",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint7_linear_1558_55666",
                            x1: "73.1357",
                            y1: "5.12062",
                            x2: "80.0428",
                            y2: "5.12062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint8_linear_1558_55666",
                            x1: "72.3398",
                            y1: "1.21667",
                            x2: "74.7929",
                            y2: "1.21667",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint9_linear_1558_55666",
                            x1: "13.3486",
                            y1: "34.3352",
                            x2: "17.4625",
                            y2: "34.3352",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint10_linear_1558_55666",
                            x1: "74.4932",
                            y1: "40.3635",
                            x2: "78.607",
                            y2: "40.3635",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint11_linear_1558_55666",
                            x1: "17.4795",
                            y1: "35.8773",
                            x2: "19.9325",
                            y2: "35.8773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint12_linear_1558_55666",
                            x1: "78.625",
                            y1: "41.9056",
                            x2: "81.078",
                            y2: "41.9056",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsx)("clipPath", {
                            id: "clip0_1558_55666",
                            children: (0, l.jsx)("rect", {
                                width: "16.3534",
                                height: "16.3534",
                                fill: "white",
                                transform: "translate(39.6143 14.9869)",
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    iE = (e) => {
        let { className: t, width: n = 83, height: i = 45 } = e;
        return (0, l.jsxs)("svg", {
            width: n,
            height: i,
            viewBox: "0 0 83 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
                (0, l.jsxs)("g", {
                    opacity: "0.4",
                    children: [
                        (0, l.jsx)("path", {
                            opacity: "0.3",
                            d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                            fill: "url(#paint0_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                            fill: "url(#paint1_linear_1521_51082)",
                        }),
                        (0, l.jsxs)("g", {
                            clipPath: "url(#clip0_1521_51082)",
                            children: [
                                (0, l.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "url(#paint2_linear_1521_51082)",
                                }),
                                (0, l.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "white",
                                }),
                                (0, l.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "url(#paint3_linear_1521_51082)",
                                }),
                                (0, l.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "white",
                                }),
                                (0, l.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "url(#paint4_linear_1521_51082)",
                                }),
                                (0, l.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                        (0, l.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "url(#paint5_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "white",
                        }),
                        (0, l.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "url(#paint6_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "white",
                        }),
                        (0, l.jsx)("path", {
                            d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                            fill: "url(#paint7_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                            fill: "url(#paint8_linear_1521_51082)",
                            fillOpacity: "0.9",
                        }),
                        (0, l.jsx)("path", {
                            d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                            fill: "url(#paint9_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                            fill: "url(#paint10_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                            fill: "url(#paint11_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                            fill: "url(#paint12_linear_1521_51082)",
                        }),
                    ],
                }),
                (0, l.jsxs)("defs", {
                    children: [
                        (0, l.jsxs)("linearGradient", {
                            id: "paint0_linear_1521_51082",
                            x1: "0",
                            y1: "23.8981",
                            x2: "92.5783",
                            y2: "23.8981",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint1_linear_1521_51082",
                            x1: "19.5205",
                            y1: "23.9092",
                            x2: "77.3871",
                            y2: "23.9092",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint2_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint3_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint4_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint5_linear_1521_51082",
                            x1: "22.6953",
                            y1: "23.8106",
                            x2: "74.5438",
                            y2: "23.8106",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint6_linear_1521_51082",
                            x1: "33.8516",
                            y1: "23.5132",
                            x2: "64.6392",
                            y2: "23.5132",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint7_linear_1521_51082",
                            x1: "73.1357",
                            y1: "5.12062",
                            x2: "80.0428",
                            y2: "5.12062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint8_linear_1521_51082",
                            x1: "72.3398",
                            y1: "1.21667",
                            x2: "74.7929",
                            y2: "1.21667",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint9_linear_1521_51082",
                            x1: "13.3486",
                            y1: "34.3352",
                            x2: "17.4625",
                            y2: "34.3352",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint10_linear_1521_51082",
                            x1: "74.4932",
                            y1: "40.3635",
                            x2: "78.607",
                            y2: "40.3635",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint11_linear_1521_51082",
                            x1: "17.4795",
                            y1: "35.8773",
                            x2: "19.9325",
                            y2: "35.8773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint12_linear_1521_51082",
                            x1: "78.625",
                            y1: "41.9056",
                            x2: "81.078",
                            y2: "41.9056",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsx)("clipPath", {
                            id: "clip0_1521_51082",
                            children: (0, l.jsx)("rect", {
                                width: "16.3534",
                                height: "16.3534",
                                fill: "white",
                                transform: "translate(39.6143 14.9869)",
                            }),
                        }),
                    ],
                }),
            ],
        });
    };
var iA = n(465606);
let iS = function (e) {
    let { className: t } = e,
        n = (0, iC.A)(),
        { avatarSrc: i, eventHandlers: r } = (0, im.A)({ userId: n?.id, size: nZ._3.SIZE_32, animateOnHover: !0 }),
        a = (0, ip.DP)(),
        s = (0, id.q)(a),
        o = n8.Ay.getName(n);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: e0()(iA.$6, t),
              children: [
                  (0, l.jsx)("div", {
                      className: iA.H,
                      children: (0, l.jsx)(lj.eu, { src: i, "aria-label": n.username, size: nZ._3.SIZE_32, ...r }),
                  }),
                  (0, l.jsx)(f.E, {
                      variant: "text-xs/bold",
                      className: iA.U_,
                      children: G.intl.format(G.t.oxhCOl, { userName: o }),
                  }),
                  (0, l.jsx)(s ? ih : iE, { className: iA.q3 }),
              ],
          });
};
var iy = n(361597),
    iP = n(69494),
    iI = n(845012),
    i_ = n(597770),
    iT = n(102741),
    ig = n(324837);
function iv(e) {
    let { giftMessage: t = G.intl.string(G.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, nA.Pv)();
    return !n || (0, lM.Ik)(i)
        ? null
        : (0, l.jsx)(iT.A, {
              className: ig.z,
              iconSize: iT.A.Sizes.SMALL,
              icon: i_.o,
              color: null == t ? iT.A.Colors.PRIMARY : iT.A.Colors.SECONDARY,
              children: t,
          });
}
var ix = n(577381),
    iN = n(172328);
function iR(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: r, trialId: s, handleClose: u } = e,
        {
            selectedSkuId: c,
            priceOptions: d,
            activeSubscription: p,
            defaultPlanId: m,
        } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        {
            isPremium: C,
            isEligibleForTrial: A,
            isEligibleForDiscount: S,
            discountOffer: y,
            userTrialOffer: P,
        } = (0, g.i)(),
        _ = (0, ic.YJ)(y),
        T = (0, h.A)(),
        v = (0, ei.s2)(),
        { isGift: x, giftRecipient: N, giftMessage: R, claimableRewards: b } = (0, nA.Pv)(),
        M = (0, lv.Mq)(T),
        j = (0, nx.bG)([lN.A], () => {
            let e = lN.A.getMarketingComponentByType(lI.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        L = x && M && null != b && b.length > 0 && j,
        k = (0, la.F5)("PremiumPaymentPlanSelectStep"),
        { nextTier: U, giftsToNextTier: F } = (0, w.cf)([nH.Ay], () => ({
            nextTier: nH.Ay.getNextTier(nF.$.GIFTING),
            giftsToNextTier: nH.Ay.getRemainingToNextTier(nF.$.GIFTING),
        })),
        H = x && k && null != U,
        B = !(0, lz.tA)({ isGift: x, giftRecipient: N }),
        Y = null;
    L
        ? (Y = (0, l.jsx)(iu, {}))
        : H &&
          (Y = (0, l.jsx)("div", {
              className: e0()(iN.v$, B ? iN.CC : iN.RV),
              children: (0, l.jsx)(ls.A, {
                  giftsToNextTier: F,
                  nextTierName: U.name ?? "",
                  nextTierIcon: U.simple_icon_url,
              }),
          }));
    let W = (A || S) ?? !1,
        V = (0, lV.Wi)(eU.ZC),
        K = W || V,
        { monthlyDefaultSelected: Z } = ii.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${x ? "" : " - DO NOT USE"}`,
        }),
        q = (0, X.A)(Z),
        z = o.useMemo(() => {
            let e = m;
            return x && q && null != c && (e = eU.En[c]), (0, O.Tm)({ skuId: c, isPremium: C, defaultPlanId: e });
        }, [c, C, m, x, q]),
        Q = S && null != _ && z.includes(_) ? _ : z[0],
        $ = (0, nx.bG)([ew.A], () => ew.A.get(Q)),
        J = [{ planId: $?.id, quantity: 1 }],
        [ee, et] = o.useState(W),
        [en, el] = (0, ts.YV)({
            items: J,
            renewal: !1,
            preventFetch: !K,
            applyEntitlements: !0,
            trialId: s,
            paymentSourceId: d.paymentSourceId,
            currency: d.currency,
        });
    o.useEffect(() => {
        W && et(en?.subscriptionPeriodEnd == null);
    }, [en, W]),
        (0, ie.A)(
            "Payment Modal Plan Select Step",
            ee,
            5,
            { proratedInvoicePreview: en, proratedInvoiceError: el, isEligibleForOffer: W },
            { tags: { app_context: "billing" } },
        );
    let er = el?.message ?? G.intl.string(G.t.R0RpRX),
        ea = W && null == el,
        es = W && null != el,
        eo = ea && null == p && en?.subscriptionPeriodEnd == null;
    (0, il.W)({ priceOptions: d, trialId: s, discountInvoicePreview: en });
    let eu = (0, ix.i)({ planSkuId: $?.skuId, invoice: en }),
        { ref: ec, onTransitionEnd: ed } = (0, it.A)({ isExpanded: null != eu, minHeightOverride: 0 }),
        ep = o.useMemo(
            () =>
                x || $?.skuId !== eU.pe.TIER_2 || P?.referrer_id == null
                    ? (0, l.jsx)("div", { ref: ec, onTransitionEnd: ed, style: { overflow: "hidden" }, children: eu })
                    : (0, l.jsx)(iS, { className: iN.ZB }),
            [eu, x, $?.skuId, P?.referrer_id, ec, ed],
        ),
        em = o.useMemo(
            () => ({
                planOptions: z,
                selectedPlanId: T?.id,
                planGroup: i,
                subscriptionPeriodEnd: en?.subscriptionPeriodEnd,
                useCompactGiftComponents: L,
                handleClose: u,
            }),
            [z, T?.id, i, en?.subscriptionPeriodEnd, L, u],
        );
    if (eo) return (0, l.jsx)(I.Ed, { className: iN.QW });
    eK()(null != v, "Step should be set"), eK()(z.length > 0, "Premium plan options should be set");
    let eC = x
        ? (0, l.jsx)(iy.$p, { ...em })
        : (0, l.jsx)(iI.X, { ...em, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(iv, { giftMessage: R }),
            !(x && (0, lM.Ik)(N)) && (0, l.jsx)(iP.A, { isEligibleForTrial: A }),
            (0, l.jsxs)(eB.dZ, {
                children: [
                    ep,
                    (0, l.jsx)(nU.A, { className: iN.tg }),
                    es ? (0, l.jsx)(eZ.w, { type: "critical", children: er }) : eC,
                    ea &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: e0()(iN.IM, iN.Go) }),
                                (0, l.jsx)(f.E, {
                                    variant: "text-xs/normal",
                                    children: G.intl.format(G.t.BHtnqA, {
                                        link: tf.A.getArticleURL(D.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(eB.UX, {
                children: [
                    Y,
                    (0, l.jsx)(l5, {
                        onStepChange: t,
                        onBackClick: () => t(a.pn.SKU_SELECT),
                        showBackButton: null == n && null == r,
                        planOptions: z,
                        shouldRenderUpdatedPaymentModal: ea,
                        isTrial: A,
                    }),
                ],
            }),
        ],
    });
}
var ib = n(862990),
    iM = n(672525),
    ij = n(800471),
    iO = n(169801),
    iL = n(640098);
function iw(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: i,
            priceOptions: r,
            activeSubscription: s,
            defaultPlanId: o,
            referralTrialOfferId: u,
            getIsInOneStepSubscriptionCheckout: c,
        } = (0, E.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            getIsInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout,
        })),
        { hasPaymentSources: d } = (0, _.jm)(),
        { isGift: p, claimableRewards: m } = (0, nA.Pv)(),
        C = p && null != m && m.length > 0,
        h = (0, tc.V)(u);
    return (0, l.jsx)(ik, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: l,
                    handleStepChange: i,
                    isGift: r,
                    userTrialOffer: s,
                    setSelectedPlanId: o,
                    defaultPlanId: u,
                    getIsInOneStepSubscriptionCheckout: c,
                } = e;
                l(n);
                let d = a.pn.PLAN_SELECT,
                    p = (0, O.aZ)(t);
                (p !== eU.pe.TIER_1 && p !== eU.pe.TIER_2) || n !== eU.pe.TIER_0 || r || (d = a.pn.WHAT_YOU_LOSE);
                let m = c({ isTrial: (0, iO.t)({ userTrialOffer: s, isGift: r, skuId: n }), selectedSkuId: n });
                d !== a.pn.WHAT_YOU_LOSE && m && ((d = a.pn.REVIEW), o((0, ij.x)(n, t, u))),
                    i(d, { analyticsDataOverride: { sku_id: n } });
            })({
                getIsInOneStepSubscriptionCheckout: c,
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: p,
                userTrialOffer: h,
                setSelectedPlanId: i,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, O.mH)(eU.pe.TIER_2)),
                    t(eU.gD.PREMIUM_GROUP_MONTH),
                    n(l ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: eU.pe.TIER_2 } });
            })({ setSelectedPlanId: i, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: n }),
        isGift: p,
        priceOptions: r,
        showPromotionalGiftBanner: C,
    });
}
function ik(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: a } = e,
        s = (0, ib.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nf.rQ, { titleTextVariant: "heading-lg/semibold", title: G.intl.string(G.t["r+SebU"]) }),
            s
                ? (0, l.jsx)(ey.c, {
                      children: (0, l.jsx)("div", {
                          className: iL.eE,
                          children: (0, l.jsx)(iM.yS, {
                              onSelectSku: (e) => t((0, O.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, l.jsx)(ey.c, {
                      children: (0, l.jsx)("div", {
                          className: iL.a2,
                          children: (0, l.jsx)(iM.Ay, {
                              onSelectSku: (e) => t((0, O.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  }),
        ],
    });
}
var iU = n(825484),
    iD = n(137728);
function iG(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: r,
            activeSubscription: s,
            isInOneStepSubscriptionCheckout: o,
        } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: !1 }),
        })),
        u = null != s ? (0, O.EL)(s) : null,
        c = null != u ? (0, O.RH)(u.planId) : null,
        d = null != u ? (0, O.m6)(u.planId) : null;
    return (
        eK()(null != d, "Expected premium type"),
        (0, l.jsx)(iD.A, {
            premiumType: d,
            titleText: G.intl.string(G.t["7VcWW0"]),
            subtitleText: G.intl.format(G.t.Qk34Ik, { subscriptionName: c }),
            footer: (0, l.jsxs)(iU.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(ez.$, {
                        variant: "primary",
                        text: G.intl.string(G.t["3PatSz"]),
                        onClick: () => {
                            o ? (r((0, ij.x)(i, s)), t(a.pn.REVIEW)) : t(a.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(ez.$, { variant: "secondary", onClick: n, text: G.intl.string(G.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
var iF = n(750532);
let iH = [
        {
            key: a.pn.SKU_SELECT,
            renderStep: (e) => (0, l.jsx)(iw, { ...e }),
            options: {
                renderHeader: !1,
                hideSlider: !0,
                modalSizeGetter: (e) => {
                    let { canCurrentlyPurchasePremiumGroup: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: a.pn.WHAT_YOU_LOSE,
            renderStep: (e) => (0, l.jsx)(iG, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: a.pn.PLAN_SELECT,
            renderStep: (e) => (0, l.jsx)(iR, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) =>
                    (0, E.t4)((t) => t.getIsInOneStepSubscriptionCheckout({ isTrial: e ?? !1 }))
                        ? null
                        : G.intl.string(G.t["r+SebU"]),
                sectionHeaderText: () => G.intl.string(G.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: a.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, l.jsx)(l9, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    iB = {
        CustomHeaderComponent: iF.kc,
        CHECKOUT_FLOW: et.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: iH,
        CHECKOUT_STEPS: { [a.pn.REVIEW]: ly.E },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParamsMap: t,
                        tenantParams: {
                            confirmationFooter: n,
                            defaultPlanId: i,
                            referralCode: r,
                            referralTrialOfferId: u,
                            subscriptionTier: c,
                            subscription: d,
                            initialPaymentSourceId: p,
                        },
                        stepConfigs: m,
                        loadId: C,
                        giftContextProps: h = { isGift: !1, giftRecipient: null },
                        renderModalProps: E,
                        children: f,
                    } = e,
                    A = (0, w.bG)([eC.A], () => eC.A.getPremiumTypeSubscription()),
                    S = (0, lV.Sq)() ? eU.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: y, giftRecipient: P } = h;
                if (null != c && !Object.values(eU.pe).includes(c))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, lz.tA)({ giftRecipient: P, isGift: y ?? !1 }),
                    _ = o.useMemo(
                        () =>
                            I
                                ? m.map((e) =>
                                      e.key === a.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : m,
                        [m, I],
                    ),
                    T = null != d ? d : A,
                    g = !y && null != T && T.isPurchasedExternally && null != T.paymentGateway;
                (0, lq.s)(T, () => E.onClose(), y ?? !1);
                let v = o.useMemo(() => [...eU.oz], []);
                return g
                    ? null
                    : (0, l.jsx)(en.M, {
                          loadId: C,
                          activeSubscription: T,
                          initialPaymentSourceId: p,
                          stepConfigs: _,
                          skuIDs: v,
                          isGift: y,
                          defaultPlanId: S ?? i,
                          referralCode: r,
                          referralTrialOfferId: u,
                          unifiedCheckoutFlow: et.C.PREMIUM_CHECKOUT,
                          tenantParamsMap: t,
                          children: (0, l.jsx)(s.Qt, { confirmationFooter: n, children: f }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { subscriptionTier: i },
                    } = e,
                    { onClose: r, renderPurchaseConfirmation: s, continueSessionToInitialStep: u } = t;
                o.useEffect(() => {
                    ew.A.isLoadedForPremiumSKUs() || ny.h.wait(() => (0, lW.zS)());
                }, []);
                let { selectedSkuId: c, purchaseState: d } = (0, E.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    p = (0, ei.s2)(),
                    { isGift: m } = (0, nA.Pv)(),
                    C = !m && c === eU.pe.TIER_2 && !lK.Ct && !lK.KY && null == (0, lZ.uM)(),
                    h = d === eu.h.PURCHASING;
                return (0, l.jsx)(lQ.A, {
                    isConfirmationStep: p === a.pn.CONFIRM && null == u && null == s,
                    isEligibleForWowMoment: C,
                    shouldPrefetchWowMoment: h,
                    children: n({
                        ...t,
                        onClose: r,
                        analyticsSubscriptionType: D.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: eU.LE,
                        subscriptionTier: i,
                    }),
                });
            },
            tenantAnalyticsLocation: i.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(lF, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var iY = n(143582),
    iW = n(241524),
    iV = n(19311),
    iK = n(4126);
let iZ = "(max-width: 485px)";
var iq = n(476481),
    iz = n(938430);
function iQ(e) {
    let { step: t, onClose: n } = e,
        i = (0, iW.A)("(max-height: 450px)");
    return t === a.pn.CONFIRM || t === a.pn.BENEFITS
        ? (0, l.jsx)("div", {})
        : (0, l.jsxs)("div", {
              className: e0()(iq.N1, np.G),
              children: [
                  !i &&
                      (0, l.jsx)("div", {
                          className: iq.oZ,
                          "aria-hidden": "true",
                          children: (0, l.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: iq.F0,
                          }),
                      }),
                  (0, l.jsx)(no.D, {
                      className: iq.G3,
                      onClick: () => n(),
                      "aria-label": G.intl.string(G.t.cpT0Cq),
                      children: (0, l.jsx)(nu.P, { size: "md", color: "currentColor", className: iq.ut }),
                  }),
              ],
          });
}
function i$(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: i, application: r, title: a, subtitle: s, description: o } = e;
    return null == r
        ? null
        : (0, l.jsx)("div", {
              className: iq.RP,
              children: (0, l.jsxs)(iK.$K, {
                  children: [
                      (0, l.jsx)(iK.KF, { application: r, asset: t }),
                      (0, l.jsx)(iK.kj, { children: a }),
                      (0, l.jsx)(iK.ri, {}),
                      (0, l.jsx)(iK.Mx, { title: s, description: o }),
                      (0, l.jsx)(iK.iH, { applicationId: r.id, storeListingBenefits: n, skuBenefits: i }),
                  ],
              }),
          });
}
function iJ(e) {
    let { tierName: t, onConfirm: n, subscription: i } = e;
    return (0, l.jsxs)("div", {
        className: iq.NV,
        children: [
            (0, l.jsx)("img", { src: iz, alt: "", width: 300, height: 126 }),
            (0, l.jsx)(e5.D, {
                className: iq.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: G.intl.format(G.t.wLFT6z, { tier: t }),
            }),
            (0, l.jsx)(f.E, {
                className: iq.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: G.intl.format(G.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, l.jsx)(eB.UX, {
                children: (0, l.jsx)(iV.Ay, {
                    onPrimary: n,
                    primaryCTA: iV.ti.CONTINUE,
                    primaryText: G.intl.string(G.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var iX = n(967198);
let [i0, i1] = (0, u.A)();
function i2(e) {
    let { guildId: t, showBenefitsFirst: n, children: i } = e,
        [r, a] = o.useState(null),
        s = o.useMemo(
            () => ({
                guildId: t,
                showBenefitsFirst: n,
                subscriptionMetadataRequest: r,
                setSubscriptionMetadataRequest: a,
            }),
            [t, n, r],
        );
    return (0, l.jsx)(i0.Provider, { value: s, children: i });
}
n(938796);
var i4 = n(266060),
    i3 = n(163437),
    i7 = n(701273),
    i6 = n(841885);
function i5(e) {
    let { onConfirm: t, onCancel: n, title: i, subtitle: r, confirmCta: a, showOpenDiscord: s = !0 } = e;
    return (0, l.jsxs)("div", {
        className: i6.RP,
        children: [
            (0, l.jsx)(e5.D, { className: i6.RS, variant: "heading-lg/extrabold", children: i }),
            null != r
                ? (0, l.jsx)(f.E, { className: i6.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, l.jsxs)("div", {
                className: i6.UD,
                children: [
                    s &&
                        (0, l.jsx)(ez.$, {
                            variant: "primary",
                            text: G.intl.string(G.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, i7.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, l.jsx)(ez.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, l.jsx)(ez.$, {
                            variant: "secondary",
                            text: G.intl.string(G.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
}
function i8(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, l.jsxs)("div", {
        className: i6.RP,
        children: [
            (0, l.jsx)(e5.D, {
                className: i6.RS,
                variant: "heading-lg/extrabold",
                children: G.intl.format(G.t.wLFT6z, { tier: n }),
            }),
            (0, l.jsx)(f.E, {
                className: i6.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: G.intl.format(G.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, l.jsxs)("div", {
                className: i6.UD,
                children: [
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: i6.__invalid_openDiscordButton,
                        children: (0, l.jsx)(ez.$, {
                            variant: "primary",
                            text: G.intl.string(G.t["8L5bZG"]),
                            onClick: () => (0, i7.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, l.jsx)(ez.$, { variant: "secondary", text: G.intl.string(G.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function i9(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, i4.K)(),
        { subscriptionMetadataRequest: r } = i1(),
        { application: s } = (0, nR.V)(),
        u = (0, nb.S3)(),
        c = (0, iW.A)(iZ),
        d = (0, w.bG)([ep.A], () => ep.A.getGuild(r?.guild_id)),
        p = o.useCallback(() => t(a.pn.REVIEW), [t]);
    if (null == u) return null;
    let m = (0, i3.bg)(u.flags);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eB.dZ, {
                children: c
                    ? (0, l.jsx)(i5, {
                          confirmCta: G.intl.string(G.t.PBHFSq),
                          onConfirm: p,
                          onCancel: n,
                          title: G.intl.format(G.t["6n6oXA"], { tier: u.name }),
                          subtitle: m
                              ? G.intl.string(G.t.lzAoKB)
                              : G.intl.formatToPlainString(G.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, l.jsx)(i$, {
                          icon: i?.thumbnail,
                          storeListingBenefits: i?.benefits,
                          application: s ?? void 0,
                          title: G.intl.format(G.t.haiCxc, { tier: u.name }),
                          subtitle: m ? G.intl.string(G.t.RvtbP5) : G.intl.string(G.t.zY39Zu),
                          description: m
                              ? G.intl.formatToPlainString(G.t.QCe4rY, { applicationName: s?.name })
                              : G.intl.string(G.t.n1Pu8C),
                      }),
            }),
            !c &&
                (0, l.jsx)(eB.UX, {
                    children: (0, l.jsx)(iV.Ay, {
                        onBack: n,
                        backText: G.intl.string(G.t.TQBY1J),
                        onPrimary: p,
                        primaryCTA: iV.ti.CONTINUE,
                        primaryText: G.intl.string(G.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var re = n(21161);
function rt(e) {
    let t,
        n,
        { handleClose: i, onSubscriptionConfirmation: r } = e,
        s = (0, i4.K)(),
        { application: u } = (0, nR.V)(),
        { readySlideId: c, updatedSubscription: d } = (0, E.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        p = (0, nb.S3)(),
        m = (0, iW.A)(iZ),
        { createMultipleConfettiAt: C } = o.useContext(re.x),
        h = p?.name ?? "";
    function f() {
        i(), r?.();
    }
    let A = c === a.pn.CONFIRM,
        S = (0, i3.bg)(p?.flags ?? 0),
        y =
            null != s && s.benefits.length > 0
                ? G.intl.formatToPlainString(G.t["+IQQVM"], { benefitCount: s.benefits.length })
                : null,
        { showBenefitsFirst: P } = i1();
    return (
        P
            ? (t = m
                  ? (0, l.jsx)(i8, { tierName: h, onConfirm: f, subscription: d })
                  : (0, l.jsx)(iJ, { tierName: h, onConfirm: f, subscription: d }))
            : m
              ? (t = (0, l.jsx)(i5, {
                    title: G.intl.format(G.t.ea6tZr, { tierName: h }),
                    subtitle:
                        null != s && s.benefits.length > 0
                            ? G.intl.formatToPlainString(G.t.HNepft, { benefits: y })
                            : null,
                    onConfirm: f,
                    confirmCta: G.intl.string(G.t.nlkywz),
                }))
              : ((t =
                    null != s && null != u
                        ? (0, l.jsx)(i$, {
                              icon: s.thumbnail,
                              storeListingBenefits: s.benefits,
                              application: u,
                              title: G.intl.format(G.t["Q+qktS"], { tier: h }),
                              subtitle: G.intl.string(G.t.ECKxXU),
                              description: S
                                  ? G.intl.format(G.t["MAtQk/"], { applicationName: u?.name })
                                  : G.intl.format(G.t.vHkMF4, { tier: h }),
                          })
                        : (0, l.jsx)(eT.A, {})),
                (n = (0, l.jsx)(iV.Ay, {
                    onPrimary: f,
                    primaryCTA: iV.ti.CONTINUE,
                    primaryText: G.intl.string(G.t["JtWl+a"]),
                }))),
        o.useEffect(() => {
            nN.Ay.useReducedMotion && A && C(window.innerWidth / 2, window.innerHeight / 2);
        }, [C, A]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(eB.dZ, { children: [(0, l.jsx)(nU.A, {}), t] }),
                null != n && (0, l.jsx)(eB.UX, { children: n }),
            ],
        })
    );
}
function rn(e) {
    let { initialPlanId: t, setAnalyticsData: n } = e,
        {
            selectedSkuId: i,
            setSelectedSkuId: r,
            setSelectedPlanId: s,
            priceOptions: u,
        } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        {
            hasFetchedRelatedSubscriptionPlans: c,
            subscriptionPriceOptionsLoading: d,
            displayCurrency: p,
        } = (0, e_.Jn)(),
        { setSubscriptionMetadataRequest: m, guildId: C, showBenefitsFirst: h } = i1(),
        f = (0, eP.Hp)(),
        A = (0, eg.A)(),
        S = (0, ei.qv)(),
        { isGift: y } = (0, nA.Pv)(),
        P = h ? a.pn.BENEFITS : a.pn.REVIEW,
        [I, _] = o.useState(!A || !c || d);
    return (o.useEffect(() => {
        _(!A || !c || d);
    }, [d, c, A]),
    o.useEffect(() => {
        null != C && m({ guild_id: C });
    }, [C, m]),
    o.useEffect(() => {
        s(t);
        let e = null != t ? ew.A.get(t) : null;
        I ||
            f ||
            (n((t) => {
                let n = null != e ? (0, O.y8)(e.id, !1, y, { paymentSourceId: u.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: p };
            }),
            null != e && (r(e?.skuId), S(P)));
    }, [f, t, y, I, u, p, i, n, s, r, S, P]),
    I)
        ? (0, l.jsx)(eT.A, {})
        : f
          ? (0, l.jsx)(eI.oO, {})
          : null;
}
var rl = n(649791),
    ri = n(427858),
    rr = n(696730);
let ra = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: l } = e;
        return {
            variant: "active",
            text: G.intl.string(G.t.YScQSF),
            dataTestId: "purchase",
            onClick: t,
            loading: n,
            disabled: l,
        };
    },
    rs = {
        CHECKOUT_FLOW: et.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(rn, { ...e }) },
        CustomHeaderComponent: function (e) {
            let { step: t, onClose: n } = e,
                i = o.useCallback(() => n(!1), [n]);
            return (0, l.jsx)(iQ, { step: t, onClose: i });
        },
        STEPS_BEFORE_CHECKOUT: [
            {
                key: a.pn.BENEFITS,
                renderStep: (e) => (0, l.jsx)(i9, { ...e }),
                options: { useBreadcrumbLabel: () => G.intl.string(G.t["5LD2+B"]) },
            },
        ],
        CHECKOUT_STEPS: {
            [a.pn.REVIEW]: function (e) {
                let { handleStepChange: t, planGroup: n, openInvoiceId: i, analyticsData: r, analyticsLocation: s } = e,
                    {
                        purchaseState: u,
                        contextMetadata: c,
                        purchaseError: d,
                        activeSubscription: p,
                    } = (0, E.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        contextMetadata: e.contextMetadata,
                        purchaseError: e.purchaseError,
                        activeSubscription: e.activeSubscription,
                    })),
                    { subscriptionMetadataRequest: m, showBenefitsFirst: f } = i1(),
                    A = f ? a.pn.BENEFITS : void 0,
                    S = (0, h.A)(),
                    y = (0, nb.S3)();
                if (null == S)
                    throw new C.v({
                        message: "Expected plan to be selected",
                        extraSentryInformation: { selectedPlan: S },
                    });
                let P = o.useRef(null),
                    I = (0, i3.bg)(y?.flags ?? 0);
                o.useEffect(() => {
                    null != d && null != P.current && P.current.scrollIntoView({ behavior: "smooth" });
                }, [d]);
                let _ = o.useCallback(() => {
                    t(a.pn.ADD_PAYMENT_STEPS);
                }, [t]);
                return u === eu.h.PURCHASING
                    ? (0, l.jsx)(eT.A, {})
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(eB.dZ, {
                                  children:
                                      null == p
                                          ? (0, l.jsx)(rr._, {
                                                selectedPlan: S,
                                                verifiedPlanId: S.id,
                                                planGroup: n,
                                                handlePaymentSourceAdd: _,
                                                metadata: I ? void 0 : m,
                                            })
                                          : (0, l.jsx)(ri.A, {
                                                selectedPlan: S,
                                                verifiedPlanId: S.id,
                                                handlePaymentSourceAdd: _,
                                                planGroup: n,
                                                hasOpenInvoice: null != i,
                                                purchaseState: u,
                                            }),
                              }),
                              (0, l.jsx)(eB.UX, {
                                  children: (0, l.jsx)(rl.U, {
                                      resolveTenantReviewButtonProps: ra,
                                      onBack: () => null != A && t(A),
                                      handleStepChange: t,
                                      postPurchaseStep: a.pn.CONFIRM,
                                      analyticsLocation: s,
                                      baseAnalyticsData: r,
                                      flowStartTime: c.startTime,
                                      planGroup: n,
                                      openInvoiceId: i,
                                      metadata: I ? void 0 : m,
                                      backButtonEligible: !!f || void 0,
                                      disablePurchase: m?.guild_id == null && !I,
                                      onPaymentSourceAdd: _,
                                  }),
                              }),
                          ],
                      });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { tenantParams: t, children: n } = e,
                    { guildId: i, showBenefitsFirst: r } = t;
                return (0, l.jsx)(i2, {
                    guildId: i,
                    showBenefitsFirst: r,
                    children: (0, l.jsx)(s.Qt, { children: n }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { forcesTransitionToGuild: l, guildId: i },
                    } = e,
                    r = t.onClose,
                    a = t.onComplete,
                    s = o.useCallback(
                        (e) => {
                            r(e),
                                e &&
                                    null != i &&
                                    (t3.hP(),
                                    (0, iY.f5)(i),
                                    null != a && a(),
                                    null != i && (l || iX.A.getGuildId() !== i) && (0, ld.pX)(D.BVt.CHANNEL(i)));
                        },
                        [r, a, l, i],
                    );
                return n({ ...t, onClose: s, forceNewPaymentModal: !0 });
            },
            tenantAnalyticsLocation: i.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(rt, { ...e }) },
    };
var ro = n(237412),
    ru = n(132500),
    rc = n(869038),
    rd = n(852218),
    rp = n(7133),
    rm = n(83617);
let [rC, rh] = (0, u.A)();
function rE(e) {
    let { code: t, onClose: n, children: i } = e,
        r = (0, w.bG)([eC.A], () => eC.A.getMostRecentPremiumTypeSubscription()),
        s = (0, w.bG)([eC.A], () => eC.A.hasFetchedMostRecentPremiumTypeSubscription()),
        u = (0, w.bG)([eC.A], () => eC.A.getPremiumTypeSubscription()),
        [c, d] = o.useState(!1),
        [p, m] = o.useState(null),
        [C, h] = o.useState(null),
        [f, A] = o.useState(!1),
        [S, y] = o.useState(!1);
    o.useEffect(() => {
        c ||
            (0, lM.GM)(t, !1, !0)
                .then((e) => {
                    let t = rp.A.createFromServer(e);
                    m(t), d(!0), A(t.promotion?.promotionType === rd.pt.THIRD_PARTY_DIRECT_FULFILLMENT);
                })
                .catch((e) => {
                    h(e), d(!0);
                }),
            s || (0, t3.I8)();
    }, [t, s, c]);
    let P = (0, ex._V)(),
        { paymentSources: I, paymentSourceId: _, paymentAuthenticationState: T, setIsSubmittingCurrentStep: g } = P,
        v = (0, ei.qv)(),
        x = (0, ei.s2)(),
        N = (0, E.t4)((e) => e.setPurchaseState),
        R = (0, E.t4)((e) => e.setPurchaseError),
        b = (0, E.t4)((e) => e.purchaseState),
        { displayCurrency: j } = (0, e_.Jn)(),
        O = (0, tr.sw)(),
        L = p?.subscriptionPlan,
        k = p?.promotion,
        U = p?.subscriptionTrial,
        G = null != L ? (0, rm._w)(L, _, !1) : [],
        F = O?.currency ?? j ?? G[0],
        H = o.useMemo(() => (null != _ ? { paymentSourceId: _, currency: F } : { currency: F }), [_, F]),
        [B] = (0, X.A)(() => [(0, ru.A)()]),
        Y = o.useMemo(
            () => ({
                load_id: B,
                location: D.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                subscription_type: D.rzx.PREMIUM,
                payment_type: tg.fr[tg.VV.SUBSCRIPTION],
                subscription_plan_id: L?.id,
                sku_id: L?.skuId,
                checkout_flow: et.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            }),
            [B, L?.id, L?.skuId],
        ),
        W = o.useCallback(() => {
            n?.(b === eu.h.COMPLETED);
        }, [n, b]),
        V = o.useCallback(async () => {
            let e = (0, M.W)(I, _);
            if (null == e) return !1;
            g(!0), R(null), N(eu.h.PURCHASING);
            try {
                return (
                    await rc.A.redeemGiftCode({ code: t, options: { paymentSource: e } }),
                    N(eu.h.COMPLETED),
                    ev.default.track(D.HAw.PAYMENT_FLOW_COMPLETED, { ...Y }),
                    !0
                );
            } catch (t) {
                return (
                    N(eu.h.FAIL),
                    R(t),
                    ev.default.track(D.HAw.PAYMENT_FLOW_FAILED, {
                        ...Y,
                        payment_error_code: t?.code,
                        payment_source_id: e.id,
                    }),
                    !1
                );
            } finally {
                g(!1);
            }
        }, [Y, t, _, I, g, R, N]),
        K = o.useRef(!1),
        Z = o.useCallback(() => {
            K.current ||
                ((K.current = !0),
                V()
                    .then((e) => {
                        v(e ? a.pn.CONFIRM : a.pn.REVIEW);
                    })
                    .finally(() => {
                        K.current = !1;
                    }));
        }, [V, v]);
    return (
        (0, ed.QR)(T),
        (0, ed.b)(x, T, v, N, !0, Z),
        (0, l.jsx)(rC.Provider, {
            value: {
                code: t,
                giftCode: p,
                plan: L,
                promotion: k,
                trial: U,
                isDirectFulfillment: f,
                hasResolvedGiftCode: c,
                giftCodeResolveError: C,
                hasFetchedMostRecentPremiumTypeSubscription: s,
                recentSubscription: r,
                premiumSubscription: u,
                paymentModalArgs: P,
                priceOptions: H,
                analyticsData: Y,
                handleClose: W,
                redeemPromotion: V,
                confirmedUpgrade: S,
                setConfirmedUpgrade: y,
            },
            children: i,
        })
    );
}
var rf = n(830215),
    rA = n(264779),
    rS = n(448126),
    ry = n(554632);
function rP(e) {
    let { user: t, code: n, className: i } = e;
    return (0, l.jsx)(f.E, {
        className: e0()(i, rS.iZ),
        variant: "text-md/normal",
        children: G.intl.format(G.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, l.jsx)(
                    lj.eu,
                    {
                        className: rS.FL,
                        size: nZ._3.SIZE_24,
                        src: t.getAvatarURL(null, 24),
                        "aria-label": n8.Ay.getUserTag(t, { decoration: "never" }),
                    },
                    n,
                );
            },
            tag: n8.Ay.getUserTag(t),
            logoutHook: () => {
                rf.A.logout("inbound_promotion_redemption_modal", D.BVt.BILLING_PROMOTION_REDEMPTION(n));
            },
        }),
    });
}
function rI(e) {
    let { promotion: t, code: n, isDirectFulfillment: i } = e,
        r = (0, w.bG)([U.default], () => U.default.getCurrentUser()),
        a = (0, ip.Ay)(),
        s = (0, rA.WD)(t.id, a);
    return (0, l.jsxs)("div", {
        className: rS.rN,
        children: [
            (0, l.jsxs)("div", {
                className: rS.u5,
                children: [
                    (0, l.jsx)("img", { alt: "", src: s, className: rS.hb }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(e5.D, {
                                variant: "heading-xl/bold",
                                className: rS.DD,
                                children: t.inboundHeaderText,
                            }),
                            (0, l.jsx)(f.E, {
                                variant: "text-sm/normal",
                                className: rS.G3,
                                children: t.inboundBodyText,
                            }),
                        ],
                    }),
                ],
            }),
            i || null == r ? null : (0, l.jsx)(rP, { className: rS.KZ, user: r, code: n }),
        ],
    });
}
function r_(e) {
    let { title: t, bodyText: n, helpCenterLink: i, showUser: r = !1, user: a, code: s, handleClose: u } = e,
        c = o.useMemo(() => ({ text: G.intl.string(G.t.BddRzS), onClick: u }), [u]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: rS.t4,
                children: [
                    (0, l.jsx)("img", { alt: "", src: ry, className: rS.M6 }),
                    (0, l.jsx)(e5.D, { variant: "heading-lg/semibold", className: rS.DD, children: t }),
                    (0, l.jsx)(f.E, { variant: "text-md/normal", className: rS.G3, children: n }),
                    null != i
                        ? (0, l.jsx)(f.E, {
                              variant: "text-md/normal",
                              className: rS.G3,
                              children: G.intl.format(G.t["4uSp2y"], { helpCenterLink: i }),
                          })
                        : null,
                    r && null != a ? (0, l.jsx)(rP, { className: rS.EF, user: a, code: s }) : null,
                ],
            }),
            (0, l.jsx)(ea.lo, { primaryButtonProps: c }),
        ],
    });
}
function rT(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            code: i,
            giftCode: r,
            plan: s,
            promotion: u,
            trial: c,
            hasResolvedGiftCode: d,
            giftCodeResolveError: p,
            hasFetchedMostRecentPremiumTypeSubscription: m,
            recentSubscription: C,
        } = rh(),
        h = (0, w.bG)([U.default], () => U.default.getCurrentUser()),
        E = (0, eP.Hp)(),
        f = !d || !m,
        A = (function (e) {
            let {
                user: t,
                giftCode: n,
                giftCodeResolveError: l,
                recentSubscription: i,
                plan: r,
                promotion: a,
                trial: s,
            } = e;
            if (null != t && !t.verified)
                return {
                    title: G.intl.string(G.t.ARIsMA),
                    body: G.intl.string(G.t.oDWkjN),
                    showUser: !0,
                    errorCode: eU.JR.USER_NOT_VERIFIED,
                };
            if (null != l && l.code === D.t02.INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED)
                return {
                    title: G.intl.string(G.t.BHxy59),
                    body: G.intl.string(G.t["1wokFq"]),
                    errorCode: eU.JR.PREVIOUS_SUBSCRIBER,
                };
            if (null == n)
                return {
                    title: G.intl.string(G.t.ARIsMA),
                    body:
                        null != l && l.code === D.t02.INVALID_GIFT_REDEMPTION_INCORRECT_USER
                            ? G.intl.string(G.t.S8TNKh)
                            : G.intl.string(G.t["1AceQR"]),
                    errorCode: eU.JR.NO_CODE_BODY,
                };
            if (null != l || null == a || null == s || null == r)
                return {
                    title: G.intl.string(G.t.ARIsMA),
                    body: G.intl.string(G.t["3u+6q7"]),
                    errorCode: eU.JR.NO_PROMOTION,
                };
            if (n.isClaimed)
                return {
                    title: G.intl.string(G.t.ARIsMA),
                    body: G.intl.string(G.t.u9IQuM),
                    errorCode: eU.JR.CODE_CLAIMED,
                };
            if (null == i) return null;
            let o = (0, O.EL)(i)?.planId;
            return null != o && i.status === D.Dmq.ACTIVE && O.Ay.getPremiumType(o) === eU.PremiumTypes.TIER_2
                ? {
                      title: G.intl.string(G.t.BHxy59),
                      body: G.intl.formatToPlainString(G.t.wpwuoV, {
                          months: s.intervalCount,
                          planName: (0, O.RH)(r.id),
                      }),
                      errorCode: eU.JR.EXISTING_SUBSCRIBER,
                  }
                : null;
        })({ user: h, giftCode: r, giftCodeResolveError: p, recentSubscription: C, plan: s, promotion: u, trial: c });
    return (o.useEffect(() => {
        f ||
            ev.default.track(D.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
                is_eligible: null == A && !E,
                error_code: null != A ? A.errorCode : E ? eU.JR.BLOCKED_PAYMENT : null,
                promotion_id: r?.promotion?.id,
            });
    }, [f, A, E, r]),
    o.useEffect(() => {
        f || null != A || E || t(a.pn.PROMOTION_INFO);
    }, [f, A, E, t]),
    f)
        ? (0, l.jsx)(eT.A, {})
        : null != A
          ? (0, l.jsx)(r_, {
                title: A.title,
                bodyText: A.body,
                helpCenterLink: u?.inboundHelpCenterLink ?? "",
                showUser: A.showUser,
                handleClose: n,
                user: h ?? void 0,
                code: i,
            })
          : E
            ? (0, l.jsx)(eI.oO, {})
            : null;
}
function rg(e) {
    let { plan: t, isDirectFulfillment: n, paymentModalArgs: i, handleClose: r } = rh();
    eK()(null != t, "Missing plan");
    let { paymentSources: a, paymentSourceId: s } = i,
        o = (0, M.g)(a, s);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eB.dZ, {
                children: (0, l.jsx)(lR.Ay, { hideClose: !0, planId: t.id, onClose: r, paymentSourceType: o }),
            }),
            n
                ? (0, l.jsx)(eB.UX, {
                      children: (0, l.jsx)(l7.H, {
                          actions: [{ text: G.intl.string(G.t.UQvCf7), variant: "primary", onClick: r, size: "md" }],
                      }),
                  })
                : null,
        ],
    });
}
function rv(e) {
    let { handleStepChange: t } = e,
        { promotion: n, code: i, isDirectFulfillment: r } = rh();
    return (
        eK()(null != n, "Missing promotion"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(eB.dZ, { children: (0, l.jsx)(rI, { promotion: n, code: i, isDirectFulfillment: r }) }),
                (0, l.jsx)(eB.UX, {
                    children: (0, l.jsx)(ea.lo, {
                        primaryButtonProps: { text: G.intl.string(G.t.PDTjLN), onClick: () => t(a.pn.REVIEW) },
                    }),
                }),
            ],
        })
    );
}
var rx = n(732159),
    rN = n(262427),
    rR = n(134638);
let rb = { headerBadgePreset: "trial" };
function rM(e) {
    let {
            plan: t,
            renewalInvoicePreview: n,
            subscriptionTrial: i,
            shouldShowFractionalPremiumBanner: r,
            fractionalPremiumInfo: a,
            paymentMethodContent: s,
            legalContent: u,
        } = e,
        [c, d] = o.useMemo(
            () =>
                null == n
                    ? [G.intl.string(W.default.R0cZsM), void 0]
                    : [G.intl.string(W.default.R0cZsM), (0, L.$g)(0, n.currency)],
            [n],
        );
    if (null == n) return (0, l.jsx)(I.Ed, { shouldShowUnifiedHeader: !0 });
    let p = r
            ? [{ key: "fractional-premium-notice", directContent: (0, l.jsx)(rj, { fractionalPremiumInfo: a }) }]
            : null,
        m = (0, l.jsx)(rO, { plan: t, renewalInvoicePreview: n }),
        C = (0, l.jsx)(rL, { renewalInvoicePreview: n, subscriptionTrial: i });
    return (0, l.jsx)(I.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: rb,
        upperInlineNoticeProps: p,
        purchaseItemContent: m,
        subscriptionDetailsContent: C,
        invoiceSummaryContent: null,
        paymentMethodContent: s,
        legalContent: u,
        invoiceTotalDueLabel: c,
        invoiceTotalDueValue: d,
        promotionalNoticeContent:
            null != i &&
            (0, l.jsx)(rN.J, {
                text: G.intl.format(G.t.A1MiZN, { months: i.intervalCount, planName: (0, O.RH)(t.id) }),
            }),
    });
}
function rj(e) {
    let { fractionalPremiumInfo: t } = e,
        n = (0, tp.NQ)({ fractionalPremiumInfo: t, variant: tp.uA.TRIAL });
    return null != n && "" !== n ? (0, l.jsx)(eZ.w, { type: "info", children: n }) : null;
}
function rO(e) {
    let { plan: t, renewalInvoicePreview: n } = e;
    return (0, l.jsx)(rR._, {
        type: T.u$.PREMIUM_WITH_TRIAL,
        invoicePreview: n,
        subscriptionPlan: t,
        isPrepaidPaymentSource: !1,
    });
}
function rL(e) {
    let { renewalInvoicePreview: t, subscriptionTrial: n } = e;
    if (null == t) return (0, l.jsx)(tt.y, {});
    let i = (0, b.Gj)(null, t, n, { isSubscriptionUpdate: !1 });
    return (0, l.jsx)(k._D, { ...i, defaultExpanded: !0 });
}
let rw = [...eU.oz],
    rk = [
        {
            key: a.pn.PROMOTION_INFO,
            renderStep: (e) => (0, l.jsx)(rv, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    ],
    rU = {
        CHECKOUT_FLOW: et.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(rT, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
        STEPS_BEFORE_CHECKOUT: rk,
        CHECKOUT_STEPS: {
            [a.pn.REVIEW]: function (e) {
                let { handleStepChange: t } = e,
                    {
                        code: n,
                        plan: i,
                        trial: r,
                        promotion: s,
                        priceOptions: u,
                        paymentModalArgs: c,
                        redeemPromotion: d,
                        confirmedUpgrade: p,
                        setConfirmedUpgrade: m,
                        handleClose: C,
                    } = rh();
                eK()(null != i && null != r, "Missing plan or trial");
                let { paymentSources: h, paymentSourceId: A, setPaymentSourceId: S, isSubmittingCurrentStep: P } = c,
                    I = (0, w.bG)([eC.A], () => eC.A.getPremiumTypeSubscription()),
                    { analyticsLocations: T } = (0, tl.Ay)(),
                    g = (0, E.t4)((e) => e.hasAcceptedTerms),
                    v = (0, ti.A)(),
                    { immediateDelivery: N } = (0, x.U)(),
                    [R, j] = (0, ts.YV)({
                        items: [{ planId: i.id, quantity: 1 }],
                        renewal: !0,
                        paymentSourceId: A,
                        code: n,
                        subscriptionId: I?.id,
                        analyticsLocations: T,
                        analyticsLocation: D.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                    });
                (0, tr.F0)(R, j);
                let U = (0, tr.sw)(),
                    F = o.useCallback(async () => {
                        function e() {
                            return t(a.pn.CONFIRM);
                        }
                        null == I || p || null == r || null == s
                            ? (await d()) && e()
                            : (0, nn.openModal)((t) => {
                                  let n;
                                  if (null == U) n = (0, l.jsx)(tt.y, { className: rS.wG });
                                  else {
                                      let e = (0, O.y8)(i.id, !1, !1, u);
                                      n = (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(f.E, {
                                                  className: rS.ex,
                                                  variant: "text-md/normal",
                                                  children: G.intl.format(G.t.DLsu0k, {
                                                      lineItemsHook: function (e, t) {
                                                          return (0, l.jsx)(
                                                              "ul",
                                                              {
                                                                  children: I.items.map((e) => {
                                                                      let t = eU.hd[e.planId],
                                                                          n = G.intl.formatToPlainString(G.t.G0EnAP, {
                                                                              quantity: e.quantity,
                                                                              lineItem: t.name,
                                                                          });
                                                                      return (0, l.jsx)(
                                                                          "li",
                                                                          { children: n },
                                                                          `${I.id}-${e.planId}`,
                                                                      );
                                                                  }),
                                                              },
                                                              t,
                                                          );
                                                      },
                                                      newPlanName: eU.hd[i.id].name,
                                                  }),
                                              }),
                                              (0, l.jsx)(f.E, {
                                                  className: rS.ex,
                                                  variant: "text-sm/normal",
                                                  children: G.intl.format(G.t.KHvyu5, {
                                                      newPlanName: eU.hd[i.id].name,
                                                      trialMonths: r.intervalCount,
                                                      helpCenterLink:
                                                          s.inboundHelpCenterLink ?? tf.A.getArticleURL(D.MVz.BILLING),
                                                      planPrice: (0, L.$g)(e.amount, U.currency),
                                                  }),
                                              }),
                                          ],
                                      });
                                  }
                                  return (0, l.jsx)(rx.ConfirmModal, {
                                      onConfirm: async () => {
                                          m(!0), (await d()) && e();
                                      },
                                      title: G.intl.string(G.t.MaZ28z),
                                      cancelText: G.intl.string(G.t["ETE/oC"]),
                                      confirmText: G.intl.string(G.t["wfx/Hp"]),
                                      ...t,
                                      variant: "primary",
                                      children: n,
                                  });
                              });
                    }, [t, I, p, r, s, i, u, U, d, m]),
                    H = (0, _.kc)(),
                    B = (0, ty.iB)({
                        checkoutPaymentSources: H,
                        paymentSourceId: A,
                        location: "InboundPromotionReviewStep",
                    }),
                    Y = (0, eO.Y)(),
                    W = (0, M.W)(h, A),
                    V = o.useMemo(
                        () => ({
                            prependOption:
                                0 === Object.keys(h).length ? { label: G.intl.string(G.t.iA5vA1), value: null } : null,
                            isTrial: !0,
                        }),
                        [h],
                    );
                if (null != j && null == U)
                    return (0, l.jsx)(r_, {
                        title: G.intl.string(G.t.ARIsMA),
                        bodyText: G.intl.string(G.t["3u+6q7"]),
                        helpCenterLink: s?.inboundHelpCenterLink ?? "",
                        handleClose: C,
                        user: void 0,
                        code: n,
                    });
                if (!Y || null == U) return (0, l.jsx)(tt.y, {});
                let K = (0, l.jsx)(y.N, {
                        setPaymentSourceId: S,
                        paymentSourceId: A,
                        location: "InboundPromotionReview",
                        label: G.intl.string(G.t["mmDvV+"]),
                        additionalPaymentSourceDropdownProps: V,
                        onPaymentSourceAdd: () => t(a.pn.ADD_PAYMENT_STEPS),
                        hideCurrencySelect: !0,
                    }),
                    { renewalPrice: Z } = (0, b.QM)(U, i, null),
                    q = G.intl.formatToPlainString(G.t.BQPav6, { planPremiumType: O.Ay.getDisplayName(i.id) }),
                    z = (0, l.jsx)(k._P, {
                        variant: {
                            type: k.I0.SubscriptionTrial,
                            purchaseButtonText: q,
                            totalDue: 0,
                            renewalPrice: Z,
                            currency: U.currency,
                            interval: i.interval,
                            intervalCount: i.intervalCount,
                            startDate: (0, tT.de)({ renewalInvoice: U, isSubscriptionUpdate: !1 }),
                        },
                        paymentSourceType: (0, M.W)(h, A)?.type ?? null,
                        immediateDelivery: N,
                    }),
                    Q = null;
                return (
                    null == W ? (Q = G.intl.string(G.t.L7jbQV)) : g || (Q = G.intl.string(G.t.XdvBLS)),
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsxs)(eB.dZ, {
                                children: [
                                    (0, l.jsx)(nU.A, {}),
                                    (0, l.jsx)(rM, {
                                        plan: i,
                                        renewalInvoicePreview: U,
                                        subscriptionTrial: r,
                                        shouldShowFractionalPremiumBanner: v.isFractionalPremiumActive,
                                        fractionalPremiumInfo: v,
                                        paymentMethodContent: K,
                                        legalContent: z,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(eB.UX, {
                                children: (0, l.jsx)(ea.lo, {
                                    onBackClick: () => t(a.pn.PROMOTION_INFO),
                                    primaryButtonProps: {
                                        text: q,
                                        tooltipText: Q ?? void 0,
                                        disabled: null == W || !W.canRedeemTrial() || B || !g,
                                        loading: P,
                                        onClick: () => {
                                            if (null != W && g) return F();
                                        },
                                        variant: (0, iV.CY)(iV.ti.PURCHASE),
                                    },
                                }),
                            }),
                        ],
                    })
                );
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { code: t },
                        stepConfigs: n,
                        loadId: i,
                        onClose: r,
                        children: a,
                    } = e,
                    o = (0, w.bG)([eC.A], () => eC.A.getPremiumTypeSubscription());
                return (0, l.jsx)(en.M, {
                    activeSubscription: o,
                    stepConfigs: n,
                    skuIDs: rw,
                    loadId: i,
                    unifiedCheckoutFlow: et.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
                    children: (0, l.jsx)(s.Qt, { children: (0, l.jsx)(rE, { code: t, onClose: r, children: a }) }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
                return n({ ...t, shakeWhilePurchasing: !0, tenantManagesPaymentAuth: !0 });
            },
        },
        CustomHeaderComponent: function (e) {
            let { step: t } = e,
                { plan: n, handleClose: i } = rh(),
                r = (0, E.t4)((e) => e.purchaseState);
            return (0, l.jsx)(ro.A, {
                enablePremiumBrandRefresh: !0,
                forceBrandRefreshHeader: !0,
                premiumType: n?.premiumSubscriptionType ?? eU.PremiumTypes.TIER_2,
                className: rS.X9,
                currentStep: t,
                purchaseState: r,
                hideCloseButton: !0,
                onClose: i,
            });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(rg, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    };
var rD = n(388614);
function rG(e) {
    let { handleClose: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        { application: i } = (0, nR.V)(),
        r = (0, nb.gU)(),
        { isGift: a, giftRecipient: s } = (0, nA.Pv)();
    eK()(null != n, "Expected selectedSkuId"), eK()(null != i, "Expected application");
    let o = r[n];
    eK()(null != o, "Expected sku");
    let u = a
        ? G.intl.formatToPlainString(G.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: s?.username ?? "your recipient",
          })
        : G.intl.formatToPlainString(G.t.wK0IbP, { applicationName: i.name, itemName: o.name });
    return (0, l.jsxs)(eB.dZ, {
        children: [
            (0, l.jsx)(nU.A, {}),
            (0, l.jsxs)("div", {
                className: rD.EL,
                children: [
                    (0, l.jsx)(e5.D, { variant: "heading-xxl/bold", className: rD.RS, children: "Success!" }),
                    (0, l.jsx)(f.E, { variant: "text-md/normal", children: u }),
                    (0, l.jsx)("div", { className: rD.yF }),
                    (0, l.jsx)(ez.$, { onClick: t, text: G.intl.string(G.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var rF = n(67480),
    rH = n(328968),
    rB = n(371794),
    rY = n(738900);
a.pn.GIFT_CUSTOMIZATION;
let rW = {
    CustomHeaderComponent: function (e) {
        let { step: t, onClose: n } = e,
            i = o.useCallback(() => n(!1), [n]);
        return (0, l.jsx)(iQ, { step: t, onClose: i });
    },
    CHECKOUT_FLOW: r.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [a.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, nA.Pv)(),
                a = (0, E.t4)((e) => e.selectedSkuId),
                s = (0, w.bG)([U.default], () => U.default.getCurrentUser()),
                u = (0, w.bG)([rF.A], () => (null != a ? rF.A.get(a) : null), [a]),
                c = lr(),
                d = (0, w.bG)([rH.A], () => (null != a ? rH.A.getForSKU(a) : null), [a]),
                p =
                    d?.headerBackground != null && u?.applicationId != null
                        ? (0, rB.YE)(u.applicationId, d.headerBackground, 256)
                        : void 0;
            async function m(e, t) {}
            let C = null == i || i.id === s?.id || t.length > eU.Jo,
                h = o.useMemo(() => ({ disabled: C }), [C]);
            return (0, l.jsx)(r.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: r.XZ.TWO_COLUMN,
                renderLeftColumn: function () {
                    return (0, l.jsxs)("div", {
                        className: rY.P6,
                        children: [
                            u?.name != null &&
                                (0, l.jsx)(e5.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: u.name,
                                }),
                            null != p && (0, l.jsx)("img", { src: p, alt: u?.name ?? "", className: rY.LC }),
                        ],
                    });
                },
                renderRightColumn: function () {
                    return (0, l.jsxs)("div", {
                        className: rY.P6,
                        children: [
                            (0, l.jsx)(n9, { recipients: c, selectedSkuId: a, validateSelectedGift: m }),
                            (0, l.jsx)(lo.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: rY.iX,
                                innerClassName: rY.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: h,
            });
        },
        [a.pn.REVIEW]: nt.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(rG, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: i.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var rV = n(429913),
    rK = n(733391),
    rZ = n(871123),
    rq = n(26594),
    rz = n(510022),
    rQ = n(317560),
    r$ = n(275256),
    rJ = n(910200),
    rX = n(752453);
function r0(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, tl.Ay)(),
        { selectedSkuId: i, entitlementsGranted: r } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, nR.V)(),
        s = (0, nb.gU)(),
        { isGift: u, giftRecipient: c } = (0, nA.Pv)();
    eK()(null != i, "Expected selectedSkuId"), eK()(null != a, "Expected application");
    let d = s[i];
    eK()(null != d, "Expected sku");
    let p = r.find((e) => e.sku_id === i),
        m = (0, rq.G)(p, { isGift: u });
    return (o.useEffect(() => {
        u || ((0, rQ.j)(), t(), (0, rz.n)({ sku: d, application: a, analyticsLocations: n, entitlement: p }));
    }, [u, d, a, t, n, p]),
    u)
        ? (0, l.jsxs)(eB.dZ, {
              children: [
                  (0, l.jsx)(nU.A, {}),
                  (0, l.jsxs)("div", {
                      className: rX.EL,
                      children: [
                          (0, l.jsx)("div", {
                              className: rX.KD,
                              children: (0, l.jsx)(r$.default, {
                                  imageUrl: (0, rZ.fq)(d) ?? void 0,
                                  backgroundImageUrl: (0, rZ.xf)(d),
                                  altText: d.name,
                                  rewardGraphic: m?.graphic,
                              }),
                          }),
                          (0, l.jsx)(e5.D, {
                              variant: "heading-xl/semibold",
                              className: rX.RS,
                              children: G.intl.string(G.t["5glWta"]),
                          }),
                          (0, l.jsx)(f.E, {
                              variant: "text-md/normal",
                              children: G.intl.formatToPlainString(G.t["2VjPTw"], {
                                  itemName: d.name,
                                  giftRecipient: c?.username ?? "your recipient",
                              }),
                          }),
                          null != m &&
                              (0, l.jsx)("div", {
                                  className: rX.Is,
                                  children: (0, l.jsx)(rJ.O0, { Icon: m.Icon, text: m.text }),
                              }),
                          (0, l.jsx)("div", {
                              className: rX.UD,
                              children: (0, l.jsx)(ez.$, {
                                  onClick: t,
                                  text: G.intl.string(G.t.cpT0Cq),
                                  fullWidth: !0,
                              }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
n(801541);
var r1 = n(889137),
    r2 = n(742158),
    r4 = n(313961),
    r3 = n(238017),
    r7 = n(650588),
    r6 = n(993046),
    r5 = n(763827),
    r8 = n(403362),
    r9 = n(832163),
    ae = n(31969),
    at = n(44724),
    an = n(980094),
    al = n(366523),
    ai = n(806931),
    ar = n(726866);
function aa(e) {
    let { handleClose: t, sku: n, application: i } = e,
        r = o.useCallback(() => {
            (0, at.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        a = o.useCallback(() => {
            t();
            let e = r9.A.getStorefrontState(n.applicationId)?.activePage;
            (0, rZ.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: i?.guildId,
                skuId: n.id,
            }) ||
                ((0, nn.closeAllModals)(),
                (0, at.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, l.jsx)("div", {
        className: ar.$O,
        children: (0, l.jsx)(eQ.Q, {
            text: G.intl.string(G.t.ImioFL),
            onMouseDown: r,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let as = {
    CHECKOUT_FLOW: r.CL.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [a.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: i, disabled: a } = (function (e) {
                    var t;
                    let n,
                        i,
                        r,
                        { handleStepChange: a, handleClose: s } = e,
                        {
                            customGiftMessage: u = "",
                            setCustomGiftMessage: c,
                            giftRecipient: d,
                            emojiConfetti: p,
                            soundEffect: m,
                            setEmojiConfetti: C,
                            setSoundEffect: h,
                            giftingOrigin: A,
                            additionalUserIds: S,
                        } = (0, nA.Pv)(),
                        y = (0, E.t4)((e) => e.selectedSkuId),
                        { application: P } = (0, nR.V)(),
                        I = (0, w.bG)([U.default], () => U.default.getCurrentUser()),
                        _ =
                            ((t = I?.id),
                            (n = lr()),
                            (i = (function (e) {
                                let t = (0, w.bG)([r5.A], () => (r5.A.isConnected() ? r5.A.getChannelId() : null)),
                                    [n, l] = o.useState([]);
                                return (
                                    o.useEffect(() => {
                                        let n = null != t ? r4.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, ai.Xw)(t) && !(0, ai.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, ai.Ay)(e) && !(0, ai.Ay)(t)
                                                ? -1
                                                : (0, ai.Ay)(t) && !(0, ai.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, w.yK)([U.default], () => S?.map(U.default.getUser).filter(r8.Vq) ?? [], [S])),
                            o.useMemo(
                                () =>
                                    lt().uniqWith(
                                        [...(null != d ? [d] : []), ...r, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, r, i, n],
                            )),
                        T = (0, w.bG)([rF.A], () => (null != y ? rF.A.get(y) : null), [y]),
                        { userPrice: g } = (0, r6.CD)({ sku: T, priceSetAssignmentPurchaseType: D.lid.GIFT }),
                        v = (0, ae.F)("gift_customization", { applicationId: P?.id, skuId: T?.id }),
                        x = (0, rZ.fq)(T),
                        N = (0, rZ.xf)(T);
                    async function R(e, t) {}
                    function b(e) {
                        null != h && h(null == e ? void 0 : e);
                    }
                    function M() {
                        return (0, l.jsxs)("div", {
                            className: ar.mT,
                            children: [
                                null != x &&
                                    (0, l.jsx)(al.A, {
                                        containerClassName: ar.T3,
                                        cardImage: x,
                                        cardBackgroundImage: N,
                                        altText: T?.name ?? "",
                                        shape: "square",
                                    }),
                                (0, l.jsxs)("div", {
                                    className: ar._T,
                                    children: [
                                        (0, l.jsx)(r7.A, { sound: m, onSelect: b }),
                                        (0, l.jsx)(r3.A, {
                                            setEmojiConfetti: C,
                                            emojiConfetti: null == p ? void 0 : p,
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }
                    function j() {
                        return (0, l.jsxs)("div", {
                            className: ar.Tc,
                            children: [
                                null != d && (A === eU.vQ.USER_PROFILE_WISHLIST || A === eU.vQ.DM_CHANNEL_WISHLIST)
                                    ? (0, l.jsx)(lc.Z, { giftRecipient: d })
                                    : (0, l.jsx)(n9, { selectedSkuId: y, validateSelectedGift: R, recipients: _ }),
                                (0, l.jsx)(lo.A, {
                                    onTextChange: (e) => c?.(e),
                                    pendingText: u,
                                    currentText: u,
                                    disableThemedBackground: !0,
                                    className: ar.iX,
                                    innerClassName: ar.pt,
                                }),
                                null == T
                                    ? null
                                    : (0, l.jsxs)("div", {
                                          className: ar.AN,
                                          children: [
                                              (0, l.jsx)(r2.z, {
                                                  className: ar.jr,
                                                  children: G.intl.string(G.t.PpoJzt),
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: ar.Wx,
                                                  children: [
                                                      (0, l.jsx)("div", {
                                                          className: ar.Xb,
                                                          children:
                                                              null != T &&
                                                              null != x &&
                                                              (0, l.jsx)(al.A, {
                                                                  containerClassName: ar.Iy,
                                                                  cardImage: x,
                                                                  cardBackgroundImage: N,
                                                                  altText: T.name,
                                                                  shape: "square",
                                                              }),
                                                      }),
                                                      (0, l.jsxs)("div", {
                                                          className: ar.vz,
                                                          children: [
                                                              null != P && (0, l.jsx)(an.Q, { application: P }),
                                                              (0, l.jsx)(f.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: T.name,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)(f.E, { variant: "text-md/semibold", children: g }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                null != T &&
                                    (0, rZ.Ri)(T) &&
                                    (0, l.jsx)(eZ.w, { type: "info", children: G.intl.string(G.t.lORYb6) }),
                                null != v &&
                                    (0, l.jsx)(rJ.O0, {
                                        Icon: v.Icon,
                                        text: v.text,
                                        endDatetime: v.endsAt,
                                        tooltip: v.tooltip,
                                    }),
                                null != T && (0, l.jsx)(aa, { handleClose: s, sku: T, application: P }),
                            ],
                        });
                    }
                    return {
                        renderStepBody: function () {
                            return (0, l.jsxs)("div", { className: ar.Du, children: [M(), j()] });
                        },
                        getLeftColumnComponent: M,
                        getRightColumnComponent: j,
                        onStepChange: a,
                        onBackClick: s,
                        disabled: null == d || d.id === I?.id || u.length > eU.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                s = o.useMemo(() => ({ disabled: a }), [a]);
            return (0, l.jsx)(r.Mw, {
                paymentModalStepProps: e,
                layout: r.XZ.CUSTOM_STEP_BODY,
                renderStepBody: i,
                primaryCTAButtonProps: s,
            });
        },
        [a.pn.REVIEW]: nt.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(r0, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: r, isGift: a, skuId: s, ...u } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, rV.h)(t);
                    o.useEffect(() => {
                        null == l ||
                            null == n ||
                            rH.A.isFetchingForSKU(n) ||
                            null != rF.A.get(n) ||
                            (0, rK.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: r, skuId: s }),
                (0, l.jsx)(en.M, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: r,
                    skuIDs: [s],
                    purchaseType: tg.VV.ONE_TIME,
                    isGift: a,
                    ...u,
                    activeSubscription: null,
                    children: t,
                })
            );
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
            return n({ ...t, analyticsObject: t.analyticsSourceLocation });
        },
        tenantAnalyticsLocation: i.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, r1.YW)(t)
                .with(a.pn.GIFT_CUSTOMIZATION, () => G.intl.string(G.t["JCFN/y"]))
                .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => G.intl.string(G.t.lDbi6H))
                .with(a.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, l.jsx)(nf.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var ao = n(977445),
    au = n(52635),
    ac = n(211287),
    ad = n(855104),
    ap = n(623373),
    am = n(739508),
    aC = n(310829),
    ah = n(715054);
(0, ru.A)();
var aE = n(457008),
    af = n(145659);
n(322076);
var aA = n(318254),
    aS = n(132198),
    ay = n(120992),
    aP = n(630934),
    aI = n(319820),
    a_ = n(871094);
function aT(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: i, isSocialLayerGameItem: r } = (0, aI.AO)({ sku: t }),
        a = (0, aP.oO)(i);
    r ? (a = G.intl.string(W.default.qwSlCO)) : (0, ap.Ab)(i) && (a = G.intl.string(G.t["0TmQRG"]));
    let s = (0, aP.dL)(t),
        o = (0, n_.EZ)(t.id) ? aS.m[t.id].render({ className: a_.$ }) : (0, l.jsx)(tI.WH, { sku: t, product: i });
    return (0, l.jsx)(tI.f7, { label: s, description: a, graphic: o, price: null != n ? `${n}` : "", PriceIcon: aA.C });
}
function ag(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, ay.c)({ applicationId: (0, aC.P)(t), skuIDs: [t] });
    let i = (0, nx.bG)([rF.A], () => rF.A.get(t), [t]);
    return null == i
        ? (0, l.jsx)(tt.y, { type: tt.y.Type.PULSING_ELLIPSIS })
        : (0, l.jsx)(aT, { sku: i, orbPriceAmount: n });
}
function av(e) {
    let { orbBalance: t } = e;
    return (0, l.jsx)(k.vW, { label: G.intl.string(G.t.y0WGqP), value: null != t ? `${t}` : "", Icon: aA.C });
}
function ax() {
    return G.intl.string(G.t.wmcDyu);
}
function aN() {
    let { immediateDelivery: e } = (0, x.U)(),
        { skuProductLine: t, skuId: n } = ab(),
        i = ax(),
        r = (0, o.useMemo)(() => ({ type: k.I0.OrbsRedemption, purchaseButtonText: i }), [i]);
    return t === D.EZt.SOCIAL_LAYER_GAME_ITEM
        ? (0, l.jsx)(au.EB, { skuId: n, purchaseButtonText: i, checkoutLegalType: k.I0.OrbsGameShop })
        : (0, l.jsx)(k._P, { variant: r, paymentSourceType: null, immediateDelivery: e });
}
let aR = (0, o.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    skuProductLine: null,
    skuApplicationId: void 0,
    analyticsSourceLocation: void 0,
});
function ab() {
    return (0, o.useContext)(aR);
}
let aM = { payment_gateway: tg.kM.VIRTUAL_CURRENCY, currency: D.Yri.DISCORD_ORB },
    aj = {
        CHECKOUT_FLOW: r.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [a.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    { primaryButtonProps: n, ...i } = (function (e) {
                        let { handleStepChange: t } = e,
                            { isRedeeming: n, skuId: i, skuApplicationId: r } = ab(),
                            { enabled: s } = ac.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: u, orderOrbPriceAmount: c } = (0, E.t4)((e) => {
                                let t = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != t ? t.total : null,
                                    orderOrbPriceAmount:
                                        null != t ? t.getInvoicePreviewLineItemUnitPriceForSku(i) : null,
                                };
                            }),
                            {
                                isStepLoading: d,
                                orbPriceAmount: p,
                                orbBalanceToDisplay: m,
                                onClickCheckout: C,
                                errorMessage: h,
                            } = ((e) => {
                                let { handleStepChange: t } = e,
                                    {
                                        orbProductContext: n,
                                        orbRedemptionError: l,
                                        onRedeemVirtualCurrency: i,
                                        skuId: r,
                                        skuApplicationId: s,
                                        skuProductLine: u,
                                        analyticsSourceLocation: c,
                                    } = ab(),
                                    { analyticsLocations: d } = (0, tl.Ay)(),
                                    { setPurchaseState: p, firstConstraintReasonCode: m } = (0, E.t4)((e) => ({
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    C = (0, ad.gN)(),
                                    h = (0, o.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: f } = (function (e) {
                                        let {
                                                skuId: t,
                                                skuApplicationId: n,
                                                skuProductLine: l,
                                                orbProductContext: i,
                                                analyticsLocations: r,
                                                analyticsSourceLocation: s,
                                            } = e,
                                            { activitySessionId: u } = (0, nR.V)(),
                                            { hasPaymentSources: c } = (0, _.jm)(),
                                            {
                                                loadId: d,
                                                startTime: p,
                                                discoverySessionId: m,
                                            } = (0, E.t4)((e) => e.contextMetadata),
                                            C = (0, o.useMemo)(
                                                () => ({
                                                    load_id: d,
                                                    discovery_session_id: m,
                                                    application_id: n,
                                                    sku_product_line: l,
                                                    location: r,
                                                    location_stack: r,
                                                    sku_id: t,
                                                    activity_session_id: u,
                                                    payment_gateway: tg.ps.VIRTUAL_CURRENCY,
                                                    ...(null != i && {
                                                        price: i.orbPriceAmount ?? void 0,
                                                        regular_price: i.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: D.Yri.DISCORD_ORB,
                                                    ...(null != s && { source: s }),
                                                    ...{
                                                        payment_type: D.frM[D.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: af.r.UNIFIED,
                                                        checkout_flow: et.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [d, m, u, t, n, l, r, s, i],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, o.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - p;
                                                    e === D.HAw.PAYMENT_FLOW_STARTED
                                                        ? ev.default.track(D.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...C,
                                                              has_saved_payment_source: c,
                                                              payment_gateway: tg.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === D.HAw.PAYMENT_FLOW_LOADED
                                                          ? ev.default.track(D.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...C,
                                                                has_saved_payment_source: c,
                                                                initial_step: a.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === D.HAw.PAYMENT_FLOW_CANCELED
                                                            ? ev.default.track(D.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...C,
                                                                  duration_ms: n,
                                                              })
                                                            : e === D.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? ev.default.track(D.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...C,
                                                                    duration_ms: n,
                                                                })
                                                              : e === D.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? ev.default.track(D.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...C,
                                                                      duration_ms: n,
                                                                  })
                                                                : ev.default.track(D.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...C,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [p, C, c],
                                            ),
                                        };
                                    })({
                                        skuId: r,
                                        skuApplicationId: s,
                                        skuProductLine: u,
                                        orbProductContext: n,
                                        analyticsLocations: d,
                                        analyticsSourceLocation: c,
                                    });
                                (0, o.useEffect)(() => {
                                    null != l &&
                                        null !== h.current &&
                                        (f(D.HAw.PAYMENT_FLOW_FAILED, l), (h.current = null));
                                }, [l, f]);
                                let A = (0, o.useCallback)(() => {
                                        (h.current = C),
                                            f(D.HAw.PAYMENT_FLOW_COMPLETED),
                                            i((e) => {
                                                p(eu.h.COMPLETED),
                                                    t(a.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [i, p, C, f, t]),
                                    S = h.current ?? C,
                                    y = null != n ? n.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == n,
                                    errorMessage: (0, o.useMemo)(() => (0, aE.$9)(l, m), [l, m]),
                                    orbPriceAmount: y,
                                    orbBalanceToDisplay: S,
                                    onClickCheckout: A,
                                };
                            })({ handleStepChange: t }),
                            f = (0, ao.uS)(r),
                            {
                                disabled: A,
                                tooltipText: S,
                                text: y,
                            } = (function (e) {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: i, tooltipText: r } = (0, o.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: G.intl.string(G.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: G.intl.string(G.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: i, tooltipText: r, text: ax() };
                            })({ orbBalance: m, orbPriceAmount: s ? u : p, isInTestMode: f }),
                            P = (0, o.useMemo)(
                                () => ({ onClick: C, loading: n, text: y, disabled: A, tooltipText: S }),
                                [C, n, y, A, S],
                            ),
                            I = f ? G.intl.string(G.t.OvMyMd) : null;
                        return {
                            isStepLoading: d,
                            upperInlineNoticeProps: (0, o.useMemo)(() => {
                                if (null != I || null != h) {
                                    let e = [];
                                    return (
                                        null != I &&
                                            e.push({ type: "warning", message: I, key: "test-mode-warning-notice" }),
                                        null != h &&
                                            e.push({ type: "critical", message: h, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [I, h]),
                            purchaseItemContent: (0, l.jsx)(ag, { skuId: i, orbPriceAmount: s ? c : p }),
                            paymentMethodContent: (0, l.jsx)(av, { orbBalance: m }),
                            legalContent: (0, l.jsx)(aN, {}),
                            primaryButtonProps: P,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({ handleStepChange: t });
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eB.dZ, { children: (0, l.jsx)(I.T_, { ...i }) }),
                        (0, l.jsx)(eB.UX, { children: (0, l.jsx)(ea.lo, { primaryButtonProps: n }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: i, children: r } = e,
                    { order: a, setOrder: s } = (0, E.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: u,
                        isRedeeming: c,
                        orbRedemptionError: d,
                        onRedeemVirtualCurrency: p,
                        skuProductLine: m,
                        skuApplicationId: C,
                    } = (function (e) {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: i, order: r } = e,
                            a = (0, w.bG)([U.default], () => O.Ay.canUseShopDiscounts(U.default.getCurrentUser())),
                            s = (0, w.bG)([rF.A], () => rF.A.get(t), [t]),
                            u = null != s ? s.productLine : null,
                            c = s?.applicationId ?? (0, aC.P)(t),
                            d = (0, r6.JL)({ sku: s }),
                            { product: p } = (0, n$.q)(t),
                            m = (0, o.useMemo)(() => {
                                if (null != d) return { orbPriceAmount: d.amount };
                                if (null != p) {
                                    let e = (0, ap.CW)({ product: p, hasShopDiscount: a });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [d, p, a]);
                        m?.orbPriceAmount == null &&
                            (0, am.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: C,
                                isSubmitting: h,
                                error: E,
                            } = (0, ah.Q)({ skuId: t, loadId: n, order: r, onSignFailure: i }),
                            f = (0, o.useCallback)(
                                (e) => {
                                    C(t, n, (n) => {
                                        l?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, C, l],
                            );
                        return {
                            skuId: t,
                            skuProductLine: u,
                            skuApplicationId: c,
                            loadId: n,
                            orbProductContext: m,
                            onRedeemVirtualCurrency: f,
                            isRedeeming: h,
                            orbRedemptionError: E,
                        };
                    })({ skuId: t, loadId: n, order: a, onSignFailure: s }),
                    h = (0, o.useMemo)(
                        () => ({
                            orbProductContext: u,
                            isRedeeming: c,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: p,
                            skuId: t,
                            skuProductLine: m,
                            skuApplicationId: C,
                            analyticsSourceLocation: i,
                        }),
                        [u, c, d, p, t, m, C, i],
                    );
                return (0, l.jsx)(aR.Provider, { value: h, children: r });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l, skuProductLine: i } = ab(),
                    r = (function (e) {
                        let { orbProductContext: t, skuProductLine: n, overrideAnalyticParams: l } = e;
                        return {
                            analyticsDataOverride: (0, o.useMemo)(
                                () => ({
                                    ...l,
                                    sku_product_line: n ?? void 0,
                                    ...(null != t && {
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    }),
                                }),
                                [t, n, l],
                            ),
                            skipConfirm: !0,
                        };
                    })({ orbProductContext: l, skuProductLine: i, overrideAnalyticParams: aM });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: aM,
        },
    };
var aO = n(75304);
let aL = {
    [aO.C.ORB_CHECKOUT]: {
        flowType: aO.C.ORB_CHECKOUT,
        implemented: !0,
        purchaseType: D.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: aj,
    },
    [aO.C.COLLECTIBLES_CHECKOUT]: {
        flowType: aO.C.COLLECTIBLES_CHECKOUT,
        implemented: !0,
        purchaseType: D.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: lS,
    },
    [aO.C.SLAYER_STOREFRONT_CHECKOUT]: {
        implemented: !0,
        flowType: aO.C.SLAYER_STOREFRONT_CHECKOUT,
        purchaseType: D.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: as,
    },
    [aO.C.PREMIUM_CHECKOUT]: {
        implemented: !0,
        flowType: aO.C.PREMIUM_CHECKOUT,
        purchaseType: D.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: iB,
    },
    [aO.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: {
        implemented: !0,
        flowType: aO.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        purchaseType: D.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: rU,
    },
    [aO.C.PREMIUM_APPS_OTP_CHECKOUT]: {
        implemented: !0,
        flowType: aO.C.PREMIUM_APPS_OTP_CHECKOUT,
        purchaseType: D.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: rW,
    },
    [aO.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
        implemented: !0,
        flowType: aO.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        purchaseType: D.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: rs,
    },
    [aO.C.GUILD_PRODUCT_CHECKOUT]: {
        implemented: !0,
        purchaseType: D.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: nE,
        flowType: aO.C.GUILD_PRODUCT_CHECKOUT,
    },
    [aO.C.GUILD_ROLE_CHECKOUT]: {
        implemented: !0,
        flowType: aO.C.GUILD_ROLE_CHECKOUT,
        TENANT_CHECKOUT_FLOW_CONFIG: lY,
        purchaseType: D.VVm.SUBSCRIPTION,
    },
    [aO.C.GUILD_BOOST_CHECKOUT]: {
        implemented: !0,
        flowType: aO.C.GUILD_BOOST_CHECKOUT,
        purchaseType: D.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: ne,
    },
    [aO.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: {
        implemented: !0,
        flowType: aO.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
        purchaseType: D.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: J,
    },
};
