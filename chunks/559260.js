n.d(t, { Y: () => aK });
var l = n(477900),
    i = n(793574),
    r = n(529427),
    a = n(166532),
    s = n(491057),
    o = n(582128),
    u = n(786300);
let [c, d] = (0, u.A)();
function m(e) {
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
        m = o.useMemo(() => {
            let e = {};
            return "" !== t && (e.game_server_name = t), "" !== n && (e.game_server_region = n), e;
        }, [t, n]),
        p = o.useMemo(
            () => ({
                subscriptionMetadataRequest: m,
                gameId: i,
                gameName: r,
                isPlanChange: a,
                isPlanUpgrade: s,
                onBack: u,
            }),
            [m, i, r, a, s, u],
        );
    return (0, l.jsx)(c.Provider, { value: p, children: d });
}
var p = n(465657),
    C = n(71804),
    h = n(558620),
    f = n(87725),
    E = n(834730),
    S = n(854354),
    y = n(987666),
    I = n(377058),
    A = n(482419),
    g = n(38785),
    P = n(202475),
    v = n(400612),
    x = n(463376),
    _ = n(473617),
    T = n(818824),
    N = n(596034),
    b = n(669510),
    j = n(888751),
    R = n(216641),
    M = n(815545),
    O = n(158045),
    L = n(580630);
n(321073);
var k = n(17928),
    w = n(403581),
    U = n(936477),
    D = n(287809),
    G = n(252589),
    F = n(375708);
function B(e, t) {
    let { nitroPriceLabel: n, nitroPriceAmount: l, standardPriceAmount: i } = e;
    return t && null != n && null != l && null != i && l < i;
}
let H = {
    standardPriceLabel: void 0,
    nitroPriceLabel: void 0,
    standardPriceAmount: void 0,
    nitroPriceAmount: void 0,
    priceCurrency: void 0,
};
function W(e) {
    let t = (0, h.A)(),
        { games: n } = (0, G.Y)();
    return o.useMemo(() => {
        let l, i;
        if (null == t || null == e) return H;
        let { subscriptionPlanInvoiceItem: r } = (0, M.Sb)(e, t),
            a = r?.subscriptionPlanPrice;
        if (null == a) return H;
        let s = e.currency;
        for (let e of n) {
            let n = e.plans?.find((e) => e.id === t.skuId);
            if (null != n) {
                n.priceCurrency === s && ((l = n.standardPriceLabel), (i = n.standardPriceAmount));
                break;
            }
        }
        return {
            standardPriceLabel: l,
            nitroPriceLabel: F.intl.formatToPlainString(F.t.AbOLNu, { price: (0, L.$g)(a, s) }),
            standardPriceAmount: i,
            nitroPriceAmount: a,
            priceCurrency: s,
        };
    }, [t, e, n]);
}
var Y = n(632847),
    V = n(477729);
function K(e) {
    let { fallback: t, invoicePreview: n } = e,
        { gameName: i } = d(),
        r = (0, h.A)(),
        a = B(
            W(n),
            (0, k.bG)([D.default], () => O.Ay.canUseShopDiscounts(D.default.getCurrentUser())),
        ),
        s = null != r ? n.findInvoiceItemByPlanId(r.id) : null;
    if (null == s) return t;
    let o = s.subscriptionPlanPrice * s.quantity,
        u = n.subtotal - o,
        c = 0 !== u;
    if (!a && !c) return t;
    let m = [
        {
            id: "subscription",
            label: F.intl.formatToPlainString(Y.default["6AKZvg"], { gameName: i }),
            amount: o,
            lineItemType: "main",
            valueIcon: a ? w.t : void 0,
        },
    ];
    return (
        c &&
            m.push({
                id: "proration",
                label: F.intl.string(Y.default["0PL2mz"]),
                amount: u,
                lineItemType: "adjustment",
                tooltip: F.intl.string(F.t.JmwQJM),
            }),
        m.push({ id: "tax", label: F.intl.string(F.t.jiRvC7), amount: n.tax }),
        (0, l.jsx)(U.Vm, { label: F.intl.string(V.default.eoXh7B), lineItems: m, currency: n.currency })
    );
}
var Z = n(349085),
    q = n(219940);
function z(e) {
    let { planName: t, invoicePreview: n } = e,
        { gameId: i, gameName: r } = d(),
        a = W(n),
        s = (0, Z.A)(i, "cover"),
        o = B(
            a,
            (0, k.bG)([D.default], () => O.Ay.canUseShopDiscounts(D.default.getCurrentUser())),
        ),
        u = null != s ? (0, l.jsx)("img", { className: q.I, src: s, alt: "" }) : void 0;
    return (0, l.jsx)(U.f7, {
        graphic: u,
        omitDefaultIconBackground: !0,
        label: F.intl.formatToPlainString(Y.default["6AKZvg"], { gameName: r }),
        description: t,
        price: a.nitroPriceLabel ?? a.standardPriceLabel ?? "",
        PriceIcon: o ? w.t : void 0,
        priceSubText: o ? a.standardPriceLabel : null,
        priceSubTextHasStrikethrough: !0,
    });
}
function Q(e) {
    let { verifiedPlanId: t, selectedPlan: n, handlePaymentSourceAdd: i } = e,
        {
            checkoutPriceOptions: r,
            checkoutInvoiceError: a,
            activeSubscription: s,
        } = (0, f.t4)((e) => ({
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            activeSubscription: e.activeSubscription,
        })),
        { isPlanChange: u, isPlanUpgrade: c } = d(),
        m = u && !c,
        p = o.useMemo(() => {
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
                    activeSubscription: m,
                } = (0, f.t4)((e) => ({
                    setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                    setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                    primaryInvoicesError: e.get("primaryInvoicesError"),
                    activeSubscription: e.activeSubscription,
                })),
                {
                    subscriptionPlan: p,
                    purchaseDisabled: C,
                    preventInvoiceFetch: h,
                    newItems: E,
                } = (0, _.TP)({ selectedPlanId: t, priceOptions: n }),
                { checkoutInvoiceRequestParams: S, renewalInvoiceRequestParams: y } = (0, _.jq)({
                    items: r ?? E,
                    preventFetch: h,
                    priceOptions: n,
                    trialId: l,
                    subscriptionMetadata: i,
                }),
                I = null != m ? m.id : void 0,
                A = o.useMemo(
                    () => ({
                        type: "subscription_checkout_invoice",
                        params: { ...S, subscriptionId: s ? I : void 0, renewal: a ?? !1 },
                    }),
                    [S, a, s, I],
                ),
                g = o.useMemo(() => ({ type: "subscription_renewal_invoice", params: y }), [y]);
            o.useEffect(() => {
                u(A);
            }, [A, u]),
                o.useEffect(() => {
                    c(g);
                }, [g, c]);
            let { discriminatedInvoicePreview: P } = (0, v.KY)({
                invoiceError: d,
                subscriptionPlan: p,
                invoiceTypeDiscriminator: v.u$.SUBSCRIPTION_NEW_PURCHASE,
                shouldSetPurchasePreviewErrorFromInvoice: !0,
            });
            return { discriminatedInvoicePreview: P, purchaseDisabled: C };
        })({
            selectedPlanId: t,
            priceOptions: r,
            isTrial: !1,
            newItemsOverride: p,
            immediateInvoiceUsesRenewal: m,
            previewAsSubscriptionUpdate: u,
        }),
        { immediateDelivery: k } = (0, T.U)(),
        { discountOffer: w, premiumGroupDiscountOffer: U } = (0, x.i)(),
        D = U ?? w,
        { paymentSources: G } = (0, P.j)(),
        { paymentGatewayRestrictions: B } = (0, P.Y)(),
        H = r.paymentSourceId,
        W = (0, R.g)(G, H),
        Z = (0, O.J$)(H),
        q = null != C && "invoicePreview" in C ? C.invoicePreview : null,
        Q = (0, l.jsx)(z, { planName: n.name, invoicePreview: q }),
        $ = m
            ? (0, l.jsx)(E.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "p",
                  children: F.intl.string(Y.default.MmcIbA),
              })
            : null,
        J = {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: Q,
            paymentMethodContent: (0, l.jsx)(I.N, {
                label: F.intl.string(F.t["u+Cw58"]),
                onPaymentSourceAdd: i,
                disabled: h,
                additionalPaymentSourceDropdownProps: { paymentGatewayRestrictions: B },
            }),
            upperInlineNoticeProps: null != $ ? { directContent: $, key: "gsh-plan-change-notice" } : void 0,
        };
    if (null == C && null != a) return (0, l.jsx)(g.T_, { ...J, legalContent: null });
    if (null == C || C.type === v.u$.LOADING) return (0, l.jsx)(g.Ed, { shouldShowUnifiedHeader: !0 });
    let X = (0, l.jsx)(A.k, {
            discriminatedInvoicePreview: C,
            subscriptionPlan: n,
            subscriptionTrial: void 0,
            isPrepaidPaymentSource: Z,
        }),
        ee = C.invoicePreview,
        et =
            (D?.discount != null && (0, M.Ro)(ee, D.discount.id)) || ee.invoiceItems.some((e) => e.discounts.length > 0)
                ? X
                : (0, l.jsx)(K, { fallback: X, invoicePreview: ee }),
        en = null;
    if (!Z && v.ME.has(C.type) && "renewalInvoicePreview" in C && null != C.renewalInvoicePreview) {
        let e = (0, j.Gj)(C.invoicePreview, C.renewalInvoicePreview, void 0, { isSubscriptionUpdate: null != s });
        en = (0, l.jsx)(b._, { ...e });
    }
    let el = "renewalInvoicePreview" in C ? C.renewalInvoicePreview : null,
        ei =
            m && null != el && null != s
                ? (0, l.jsx)(N._, {
                      immediateDelivery: k,
                      paymentSourceType: W,
                      variant: {
                          type: N.I.Subscription,
                          purchaseButtonText: F.intl.string(Y.default.UGbET9),
                          totalDue: 0,
                          renewalPrice: el.total,
                          currency: C.invoicePreview.currency,
                          interval: n.interval,
                          intervalCount: n.intervalCount,
                          startDate: s.currentPeriodEnd,
                      },
                  })
                : (0, l.jsx)(y.$, {
                      activeSubscription: s,
                      plan: n,
                      paymentSourceType: W,
                      discriminatedInvoicePreview: C,
                      discountOffer: D,
                      unifiedLegalType: N.I.Subscription,
                  }),
        er = m ? (0, L.$g)(0, C.invoicePreview.currency) : (0, S.kw)({ subscriptionInvoiceRecord: C.invoicePreview });
    return (0, l.jsx)(g.T_, {
        ...J,
        subscriptionDetailsContent: en,
        invoiceSummaryContent: et,
        legalContent: ei,
        invoiceTotalDueValue: er,
        invoiceTotalDueLabel: F.intl.string(V.default.R0cZsM),
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
                    { selectedPlanId: s, selectedSkuId: u } = (0, f.t4)((e) => ({
                        selectedPlanId: e.selectedPlanId,
                        selectedSkuId: e.selectedSkuId,
                    })),
                    { planGroup: c } = e,
                    m = o.useMemo(() => ({ planGroup: c }), [c]),
                    E = n
                        ? i
                            ? F.intl.string(Y.default.yUWVlo)
                            : F.intl.string(Y.default.UGbET9)
                        : F.intl.string(F.t.YScQSF),
                    S = o.useCallback(
                        (e) => {
                            let { onReviewButtonClick: t, loading: n, disabled: l } = e;
                            return {
                                variant: "active",
                                text: E,
                                dataTestId: "purchase",
                                onClick: t,
                                loading: n,
                                disabled: l,
                            };
                        },
                        [E],
                    ),
                    y = o.useCallback(
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
                    I = o.useCallback(() => {
                        e.handleClose(), r?.();
                    }, [e, r]);
                return (0, l.jsx)(p.Y, {
                    ...e,
                    isBackButtonEligible: null != r,
                    onFooterBackClick: I,
                    subscriptionMetadata: t ?? void 0,
                    renderStepBody: y,
                    resolveInternalState: $,
                    resolveTenantReviewButtonProps: S,
                    customFooterProps: m,
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
                return (0, l.jsx)(m, {
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
    en = n(626797),
    el = n(211083),
    ei = n(883645),
    er = n(584160),
    ea = n(480642),
    es = n(832286),
    eo = n(958340),
    eu = n(566980),
    ec = n(489254),
    ed = n(251913),
    em = n(71393),
    ep = n(178368),
    eC = n(166403),
    eh = n(473145),
    ef = n(802790),
    eE = n(636441),
    eS = n(587491),
    ey = n(285753),
    eI = n(430993),
    eA = n(86379),
    eg = n(545075),
    eP = n(655857),
    ev = n(534479),
    ex = n(121005),
    e_ = n(174459),
    eT = n(469155),
    eN = n(295405);
let [eb, ej, eR] = (0, u.A)();
function eM(e) {
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
            onSubscribeComplete: m,
        } = e,
        [p, C] = o.useState(!0),
        h = (0, X.A)(() => Date.now()),
        E = (0, X.A)(() => (0, eh.D$)(ep.A.boostSlots).length),
        {
            activeSubscription: S,
            setQuantity: y,
            selectedSkuId: I,
        } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            setQuantity: e.setQuantity,
            selectedSkuId: e.selectedSkuId,
        }));
    o.useEffect(() => {
        null != I && y(t);
    }, [I]);
    let A = (0, k.bG)([eC.A], () => eC.A.hasFetchedSubscriptions()),
        g = (0, k.bG)([eN.A], () => eN.A.defaultPaymentSourceId),
        P = null != S ? S.paymentSourceId : null,
        v = (0, eT._V)(null != P ? P : A ? g : null);
    return (0, l.jsx)(eb.Provider, {
        value: {
            disablePremiumUpsell: n,
            closeGuildPerksModal: i,
            guildId: a,
            paymentModalArgs: v,
            premiumSubscriptionPaymentSourceId: P,
            analyticsLocation: s,
            analyticsSourceLocation: u,
            forceDisableSubmitButton: p,
            setForceDisableSubmitButton: C,
            applicationId: c,
            intent: d,
            onSubscribeComplete: m,
            flowStartTime: h,
            existingAvailableSlotCount: E,
        },
        children: r,
    });
}
var eO = n(160946),
    eL = n(253390),
    ek = n(97352),
    ew = n(615396),
    eU = n(202541);
function eD() {
    let { activeSubscription: e, quantity: t } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
        })),
        n = (0, k.bG)([ek.A], () => null == e || null != ek.A.get(e.planId)),
        l = (0, eO.Y)(),
        i = (0, k.bG)([ek.A], () => (null != e ? (0, ew.c9)(e.planId) : null)),
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
var eG = n(652215),
    eF = n(599911);
function eB(e) {
    let { message: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ea.s3, { title: F.intl.string(F.t.q9EGps) }),
            (0, l.jsx)(eI.c, { children: (0, l.jsx)("p", { className: eF.C, children: t }) }),
        ],
    });
}
function eH(e) {
    let { handleStepChange: t } = e,
        n = (0, f.t4)((e) => e.activeSubscription),
        { guildId: i, analyticsLocation: r } = ej(),
        s = (0, eA.Hp)(),
        u = (0, ex.A)(),
        { hasFetchedRelatedSubscriptionPlans: c, displayCurrency: d } = (0, eP.Jn)(),
        { hasFetchedPremiumSubscriptionPlan: m } = eD(),
        p = null != n && null != n.renewalMutations,
        C = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
        h = !u || !c || !m || null == d || "" === d;
    return ((0, ee.Ay)(() => {
        p && e_.default.track(eG.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: r, guild_id: i });
    }),
    o.useEffect(() => {
        h || s || C || p || t(a.pn.PLAN_SELECT);
    }, [h, s, C, p, t]),
    C)
        ? (0, l.jsx)(eB, { message: F.intl.string(F.t.mOWsF1) })
        : p
          ? (0, l.jsx)(eB, { message: F.intl.string(F.t.npfhh0) })
          : h
            ? (0, l.jsx)(ev.A, {})
            : s
              ? (0, l.jsx)(eg.oO, {})
              : null;
}
var eW = n(482132),
    eY = n(879100);
function eV(e) {
    let { handleClose: t } = e,
        { guildId: n, paymentModalArgs: i, existingAvailableSlotCount: r } = ej(),
        {
            activeSubscription: a,
            startingFractionalPremiumEndsAt: s,
            customCheckoutFlow: o,
            paymentSourceId: u,
            quantity: c,
        } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            customCheckoutFlow: e.customCheckoutFlow,
            paymentSourceId: e.paymentSourceId,
            quantity: e.quantity,
        })),
        d = (0, k.bG)([eo.A], () => (null != n ? eo.A.getGuild(n) : void 0), [n]),
        m = null != n ? em.A.getGuild(n) : null,
        p = (0, X.A)(() => (0, ew.b2)(s)),
        C = (0, k.bG)([ek.A], () => (null != a ? (0, ew.c9)(a.planId) : null)),
        { paymentSources: h } = i,
        E = (0, R.g)(h, u),
        S = null != m ? m.name : null != d ? d.name : void 0,
        y = p && null != C && !eU.YV.has(C.id);
    return (0, l.jsx)(eW.dZ, {
        children: (0, l.jsx)(eY.W, {
            guild: m,
            guildBoostQuantity: c + r,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: E,
            fallbackGuildName: S,
            didPurchaseOnFractionalPremium: y,
            customCheckoutFlow: o,
        }),
    });
}
var eK = n(284009),
    eZ = n.n(eK),
    eq = n(683071),
    ez = n(512950),
    eQ = n(821609),
    e$ = n(123292),
    eJ = n(87719);
let eX = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var e0 = n(503698),
    e2 = n.n(e0),
    e1 = n(661531),
    e4 = n(408278),
    e3 = n(834040),
    e7 = n(499373),
    e6 = n(663803),
    e5 = n(320448),
    e8 = n(297264),
    e9 = n(104510),
    te = n(866665),
    tt = n(695366),
    tn = n(289873),
    tl = n(726656),
    ti = n(688810),
    tr = n(531260),
    ta = n(666646),
    ts = n(404374),
    to = n(543767),
    tu = n(881489),
    tc = n(774962),
    td = n(477421),
    tm = n(732280),
    tp = n(363476),
    tC = n(531506),
    th = n(550124);
function tf() {
    return (0, l.jsxs)("div", {
        className: e2()(th.dt, th.dE),
        children: [
            (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: th.qq,
            }),
            (0, l.jsx)(E.E, { variant: "text-sm/medium", className: th.tD, children: F.intl.format(F.t.f5VHKm, {}) }),
        ],
    });
}
function tE(e) {
    let { text: t, color: n } = e;
    return (0, l.jsxs)("div", {
        className: th.dt,
        children: [(0, l.jsx)(w.t, { size: "md", className: th.YW, color: n }), (0, l.jsx)("div", { children: t })],
    });
}
var tS = n(773669),
    ty = n(975571),
    tI = n(252424),
    tA = n(155718),
    tg = n(803694),
    tP = n(848584),
    tv = n(241989),
    tx = n(874638),
    t_ = n(692440),
    tT = n(818348),
    tN = n(458924);
function tb(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: i,
            totalDue: r,
            currency: a,
            startDate: s,
        } = e,
        { immediateDelivery: o } = (0, T.U)();
    return (0, l.jsx)(N._, {
        variant: {
            type: N.I.Subscription,
            purchaseButtonText: F.intl.string(F.t.eUEeCt),
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
function tj(e) {
    return F.intl.format(F.t.IeaYqg, { endDate: e });
}
function tR(e) {
    let { text: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: n,
        children: [
            (0, l.jsx)("div", { className: tN.bU }),
            (0, l.jsx)(E.E, { variant: "text-sm/normal", className: tN.b7, children: t }),
            (0, l.jsx)("div", { className: tN.bU }),
        ],
    });
}
function tM(e) {
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
                label: F.intl.formatToPlainString(F.t.a3cAOg, {
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
            label: F.intl.formatToPlainString(F.t.ZSVged, { planName: (0, O.RH)(i[0].subscriptionPlanId) }),
            tooltip: F.intl.string(F.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== r &&
            o.push({
                id: "guild-boosting-adjustment",
                label: F.intl.string(F.t["+as5ZZ"]),
                tooltip: F.intl.string(F.t.JmwQJM),
                amount: r,
                lineItemType: "adjustment",
            }),
        0 !== a.tax && o.push({ id: "tax", label: F.intl.string(F.t.jiRvC7), amount: a.tax, lineItemType: "tax" });
    let { lineItems: u, currency: c } = (0, j.EA)({ id: "main-line-item", amount: t, ...s }),
        d = [...u, ...o];
    return (0, l.jsx)(tP.Vm, {
        defaultExpanded: !0,
        label: F.intl.string(V.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function tO(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: i, renewalInvoicePreview: r } = e;
    return null != n
        ? (0, l.jsx)(t_.Hc, { currentInvoice: i, renewalInvoice: r, isUpdate: t })
        : (0, l.jsx)(t_.Hc, { renewalInvoice: r });
}
function tL(e) {
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
            onPaymentSourceAdd: m,
        } = e,
        p = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: l,
                    currentPremiumSubscription: r,
                    premiumSubscriptionPlan: a,
                    newAdditionalPlans: s,
                } = e,
                o = (0, k.bG)([em.A, eo.A], () => {
                    let e = em.A.getGuild(n);
                    return null != e ? e : eo.A.isGuildFetching(n) ? null : eo.A.getGuild(n);
                }, [n]),
                u = a.interval,
                c = a.intervalCount,
                d = (0, k.bG)([ek.A], () => ek.A.getForSkuAndInterval((0, O.mH)(eU.pe.GUILD), u, c));
            eZ()(null != d, "Missing guildBoostingSubscriptionPlan");
            let m = (0, O.J$)(l.paymentSourceId),
                p = (0, tu.ds)();
            t = null != r ? (0, O.Om)(r, s[0].quantity, s[0].planId) : s;
            let { analyticsLocations: C } = (0, ti.Ay)(),
                [h, f] = (0, to.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: C,
                    analyticsLocation: i.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [E, S] = (0, to.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: C,
                    analyticsLocation: i.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, ta.OQ)({
                    checkoutInvoicePreview: h,
                    checkoutInvoiceError: f,
                    renewalInvoicePreview: E,
                    renewalInvoiceError: S,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: d,
                    isPrepaid: m,
                    isReverseTrial: p,
                    checkoutInvoicePreview: h,
                    renewalInvoicePreview: E,
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
            isPrepaid: f,
            isReverseTrial: E,
            checkoutInvoicePreview: S,
            renewalInvoicePreview: y,
        } = p,
        A = (0, tg.A)({ location: "GuildBoostReview", message: F.intl.string(V.default["tK8A/8"]) });
    if (null == S || null == y || null == h) return (0, l.jsx)(g.Ed, { shouldShowUnifiedHeader: !0 });
    let P = (0, l.jsx)(tO, {
            isSubscriptionUpdate: C,
            premiumSubscription: a,
            checkoutInvoicePreview: S,
            renewalInvoicePreview: y,
        }),
        v = (0, l.jsx)(I.n, {
            setPaymentSourceId: d,
            paymentSourceId: c,
            location: "GuildBoostReview",
            label: F.intl.string(F.t["u+Cw58"]),
            onPaymentSourceAdd: m,
            premiumSubscriptionPaymentSourceId: s,
            hideCurrencySelect: !0,
        }),
        x = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: l,
                checkoutInvoicePreview: i,
                paymentSources: r,
                paymentSourceId: a,
            } = e;
            return {
                paymentSourceType: (0, R.g)(r, a),
                premiumSubscriptionPlan: n,
                renewalPrice: l.subtotal,
                totalDue: i.total,
                currency: i.currency,
                startDate: (0, t_.de)({ isSubscriptionUpdate: t, currentInvoice: i, renewalInvoice: l }),
            };
        })({
            isSubscriptionUpdate: C,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: y,
            checkoutInvoicePreview: S,
            paymentSources: n,
            paymentSourceId: c,
        }),
        _ = (0, l.jsx)(tb, { ...x }),
        T = (function (e) {
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
            function m(e) {
                return (0, tx.Z)(l.invoiceItems).find((t) => eU.pW.has(t.subscriptionPlanId) && e(t));
            }
            let p = m((e) => e.amount >= 0);
            eZ()(null != p, "Missing guild boosting invoice item");
            let C = m((e) => e.amount < 0),
                h = null != C ? p.quantity - C.quantity : p.quantity,
                f = l.invoiceItems.filter((e) => (0, O.xq)(e.subscriptionPlanId)),
                E = f.reduce((e, t) => e + t.amount, 0),
                S = (0, to.sL)(p) * h,
                y = (0, L.$g)(S, l.currency),
                I = (0, L.CE)(y, c, d),
                A = (0, L.$g)(l.total, l.currency) + (l.currency !== tT.Yr.USD ? "*" : ""),
                g = l.subtotal - S - E,
                P = p.discounts.map((e) => {
                    let t = e.amount / p.quantity;
                    return { ...e, amount: t * h };
                }),
                v = P.find((e) => e.type === tA.iS.SUBSCRIPTION_PLAN),
                x = P.find((e) => e.type === tA.iS.ENTITLEMENT),
                _ = p.subscriptionPlanPrice * h;
            return {
                addedQuantity: h,
                guildBoostingSubscriptionPlan: s,
                isPrepaid: o,
                isReverseTrial: u,
                formattedGuildBoostPrice: y,
                formattedGuildBoostRate: I,
                formattedOriginalAmountGuildBoostRate: (0, L.CE)((0, L.$g)(_, l.currency), c, d),
                formattedTotal: A,
                basePlanAdjustment: E,
                basePlanInvoiceItems: f,
                guildBoostingAdjustment: g,
                subscriptionDiscount: v,
                entitlementDiscount: x,
                originalAmount: _,
                premiumSubscription: t,
                checkoutInvoicePreview: l,
                renewalInvoicePreview: i,
                priceOptions: r,
            };
        })({
            premiumSubscription: a,
            premiumSubscriptionPlan: o,
            checkoutInvoicePreview: S,
            renewalInvoicePreview: y,
            priceOptions: r,
            reviewState: p,
        }),
        N = (0, l.jsx)(tM, { ...T }),
        b = (function (e, t, n) {
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
                label: F.intl.formatToPlainString(F.t.a3cAOg, {
                    numGuildSubscriptions: i,
                    planName: (0, O.Mn)(r.id, !1, a),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, l.jsx)(tv.a6, {}),
                price: s,
                PriceIcon: c ? w.t : void 0,
                priceTooltip: c ? F.intl.string(V.default.YUNJJa) : void 0,
                priceSubText: c ? o : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            h,
            T,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: l } = e;
                return !t && n && null != l ? { type: "reverseTrial", text: tj(l.currentPeriodEnd) } : null;
            })({ isPrepaid: f, isReverseTrial: E, premiumSubscription: a }),
        ),
        j = (0, l.jsx)(tv.f7, { ...b });
    return (0, l.jsx)(g.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: A,
        purchaseItemContent: j,
        subscriptionDetailsContent: P,
        paymentMethodContent: v,
        invoiceSummaryContent: N,
        legalContent: _,
        invoiceTotalDueValue: T.formattedTotal,
        invoiceTotalDueLabel: F.intl.string(V.default.R0cZsM),
    });
}
n(26279);
var tk = n(152228);
function tw(e) {
    return "" === e || "-" === e;
}
function tU(e) {
    let { value: t, onChange: n, minValue: i = 1, maxValue: r = 30, ariaLabel: a } = e,
        [s, u] = o.useState(t);
    o.useEffect(() => {
        u(t);
    }, [t]);
    let c = "number" == typeof s;
    function d(e) {
        u(e), tw(e) || n(e);
    }
    return (0, l.jsxs)("div", {
        className: tk.U$,
        children: [
            (0, l.jsx)(e4.K, {
                variant: "secondary",
                size: "md",
                icon: e3.MinusIcon,
                onClick: () => {
                    c && !(s <= i) && d(s - 1);
                },
                "aria-label": F.intl.string(F.t["k+ohJm"]),
                disabled: !c || s <= i,
            }),
            (0, l.jsx)("div", {
                className: tk.WJ,
                children: (0, l.jsx)("input", {
                    className: tk.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${s}`,
                    onChange: (e) =>
                        (function (e) {
                            if (tw(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= i) return void d(i);
                                if (t >= r) return void d(r);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: function () {
                        tw(s) && u(t);
                    },
                }),
            }),
            (0, l.jsx)(e4.K, {
                variant: "secondary",
                size: "md",
                icon: e7.T,
                onClick: () => {
                    c && !(s >= r) && d(s + 1);
                },
                "aria-label": F.intl.string(F.t.w8Sc4B),
                disabled: !c || s >= r,
            }),
        ],
    });
}
function tD(e) {
    let { message: t } = e;
    return (0, l.jsx)(E.E, { variant: "text-xs/normal", color: "text-muted", className: tk.jH, children: t });
}
function tG(e) {
    let { text: t } = e;
    return (0, l.jsxs)("div", {
        className: tk.Vk,
        children: [
            (0, l.jsx)("div", {
                className: tk.D0,
                children: (0, l.jsx)(w.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: tk.ue,
                    color: ts.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, l.jsx)("div", { className: tk.yP, children: t }),
        ],
    });
}
function tF(e) {
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
        fractionalBanner: m,
        existingSlotNotice: p,
        discountCallout: C,
        refreshDiscountCallout: h,
        legacyPricingNotes: f,
        refreshPricingNotes: S,
    } = e;
    return (0, l.jsxs)("div", {
        children: [
            m,
            c,
            p,
            (0, l.jsxs)("div", {
                className: tN.mP,
                children: [
                    (0, l.jsxs)("div", {
                        className: tN.E6,
                        children: [
                            (0, l.jsx)(e6.l, {
                                value: n,
                                onChange: (e) => i(e),
                                className: tN.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, l.jsx)("div", { className: tN.$0, children: r }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: e2()(tN.QK, { [tN.S]: t }), children: a }),
                ],
            }),
            (0, l.jsx)("div", { className: tN.J3 }),
            (0, l.jsxs)("div", {
                className: tN.mP,
                children: [
                    (0, l.jsx)(E.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: F.intl.string(F.t.RtA7nR),
                    }),
                    (0, l.jsx)("div", {
                        className: e2()(tN.__invalid_planSelectorSubtotalPrice, { [tN.S]: t }),
                        children: s,
                    }),
                ],
            }),
            f.map((e, t) => (0, l.jsx)(o.Fragment, { children: e }, t)),
            C,
        ],
    });
}
function tB(e) {
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
        refreshDescriptionContent: m,
        fractionalBanner: p,
        existingSlotNotice: C,
        discountCallout: h,
        refreshDiscountCallout: f,
        legacyPricingNotes: S,
        refreshPricingNotes: y,
    } = e;
    return (0, l.jsxs)("div", {
        className: tk.xY,
        children: [
            p,
            (0, l.jsxs)("div", {
                className: tk.K3,
                children: [
                    (0, l.jsx)(E.E, {
                        variant: "text-md/medium",
                        className: tk.bk,
                        children: F.intl.string(F.t["r+SebU"]),
                    }),
                    (0, l.jsx)(e5._, { className: tk.bN, color: "currentColor", size: "xs" }),
                    (0, l.jsx)(E.E, { variant: "text-md/medium", className: tk.kX, children: r }),
                ],
            }),
            m,
            C,
            (0, l.jsxs)("div", {
                className: tk.fh,
                children: [
                    (0, l.jsxs)("div", {
                        className: tk.fX,
                        children: [
                            (0, l.jsx)(tU, {
                                value: n,
                                onChange: (e) => i(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, l.jsx)(E.E, { variant: "text-md/medium", className: tk.ny, children: a }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: e2()(tk.El, { [tN.S]: t }), children: s }),
                ],
            }),
            f,
            (0, l.jsxs)("div", {
                className: tk.fh,
                children: [
                    (0, l.jsx)(e8.D, {
                        variant: "heading-lg/semibold",
                        className: tk.O3,
                        children: F.intl.string(F.t.RtA7nR),
                    }),
                    (0, l.jsx)("div", { className: e2()(tk.BU, { [tN.S]: t }), children: c }),
                ],
            }),
            y.map((e, t) => (0, l.jsx)(o.Fragment, { children: e }, t)),
        ],
    });
}
function tH(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: i } = e;
    return (0, l.jsxs)("div", {
        className: tN.Mv,
        children: [
            (0, l.jsx)(e9._, { className: tN.T5, color: e1.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, l.jsxs)("div", {
                children: [
                    F.intl.format(F.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != i
                        ? (0, l.jsx)(te.m, {
                              text: F.intl.formatToPlainString(F.t.SFpsCH, {
                                  canceledCount: n,
                                  date: i.currentPeriodEnd,
                              }),
                              children: (0, l.jsx)(tt.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: tN.Y5,
                                  color: e1.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function tW(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: r,
            setForceDisableSubmitButton: a,
            premiumSubscription: s,
            onClickPremiumSubscriptionLink: u,
            existingAvailableSlots: c = [],
            priceOptions: d,
            isRefreshEnabled: m = !1,
            showRefreshSubtotalRate: p = !1,
            refreshNextStepLabel: C = F.intl.string(F.t.QBnNHq),
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
                    priceOptions: m,
                    showRefreshSubtotalRate: p,
                } = e,
                C =
                    ((t = (0, k.bG)([eC.A], () => eC.A.getPremiumTypeSubscription())),
                    (0, k.bG)([eN.A], () =>
                        t?.paymentSourceId != null ? eN.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                h = r.interval,
                f = r.intervalCount,
                S = (0, k.bG)([ek.A], () => ek.A.getForSkuAndInterval((0, O.mH)(eU.pe.GUILD), h, f)),
                y = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
                I = (0, tr.A)({ forceFetch: !1 });
            eZ()(null != S, "Missing guildBoostingSubscriptionPlan");
            let A = [{ planId: S.id, quantity: 1 }],
                g = u?.items.find(
                    (e) => e.planId === eU.gD.PREMIUM_MONTH_TIER_2 || e.planId === eU.gD.PREMIUM_YEAR_TIER_2,
                );
            null != g && A.push(g);
            let P = u?.items.find(
                    (e) => e.planId === eU.gD.PREMIUM_MONTH_GUILD || e.planId === eU.gD.PREMIUM_YEAR_GUILD,
                ),
                v = null == C || !eU.uJ.has(C) || null == P,
                { analyticsLocations: x } = (0, ti.Ay)(),
                [_, T] = (0, to.YV)({
                    subscriptionId: u?.id,
                    items: A,
                    renewal: !0,
                    paymentSourceId: u?.paymentSourceId,
                    currency: m.currency,
                    preventFetch: v,
                    analyticsLocations: x,
                    analyticsLocation: i.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, ta.Tr)(_, T);
            let N = !v && null == _ && null == T;
            o.useLayoutEffect(() => {
                s(N);
            }, [N, s]);
            let b = (0, tm.V)()?.subscriptionTrial?.skuId === eU.pe.TIER_2,
                j = O.Ay.hasBoostDiscount(y),
                R = j && null != u && O.Ay.isPremiumAtLeast(O.Ay.getPremiumType(u.planId), eU.PremiumTypes.TIER_1),
                M = _?.findInvoiceItemByPlanId(S.id),
                w =
                    null != M
                        ? { amount: M.amount, tax: 0, taxInclusive: !0, currency: _.currency }
                        : O.Ay.getPrice(S.id, j, !1, m),
                U = a * w.amount,
                G = (0, tu.ds)() && j && null != u,
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
                    fractionalPremiumState: I.fractionalState,
                    isReverseTrial: G,
                    hasDiscountUpsell: R,
                    withTrialOfferCopyVariant: b,
                });
            "discount" === B.upsellVariant
                ? (eZ()(null != u, "Missing premiumSubscription for discount upsell variant"),
                  (n = F.intl.format(F.t.hf6YOY, { planName: O.Ay.getTierDisplayNameByPlanId(u.planId) })))
                : (n = F.intl.format("upsell_trial" === B.upsellVariant ? F.t.ba1L74 : F.t.fkffDT, {
                      onPremiumSubscriptionClick: c,
                      discountPercentage: (0, tI.l9)(tS.default.locale, eU.oX / 100),
                      freeSubscriptionCount: eU.M4,
                  }));
            let H = d.filter((e) => (0, eh.I5)(e)).length,
                W = (0, O.J$)(m.paymentSourceId),
                { ipCountryCode: Y } = (0, td.A)(),
                V = "HR" === Y && w.currency === tT.Yr.EUR,
                K =
                    G && null != u
                        ? (0, l.jsx)(tR, { text: tj(u.currentPeriodEnd) })
                        : (0, l.jsx)("div", { className: e2()(tN.hA, tN.G3), children: F.intl.string(F.t.jNY1FO) }),
                Z =
                    G && null != u
                        ? (0, l.jsx)(tR, { text: tj(u.currentPeriodEnd), className: tN.jk })
                        : (0, l.jsx)(E.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: tk._X,
                              children: F.intl.string(F.t.jNY1FO),
                          }),
                q = B.showExistingSlotNotice
                    ? (0, l.jsx)(tH, { existingAvailableSlots: d, canceledCount: H, premiumSubscription: u })
                    : null,
                z = B.showFractionalPremiumBanner ? (0, l.jsx)(tC.vi, { fractionalPremiumInfo: I }) : null,
                Q = W
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === eU.WT.YEAR
                              ? F.intl.string(F.t.YDpAzZ)
                              : t === eU.WT.MONTH && 1 === n
                                ? F.intl.string(F.t["6ZR3By"])
                                : null;
                      })({ intervalType: h, intervalCount: f }) ?? F.intl.string(F.t.K9Bmze))
                    : F.intl.string(F.t.K9Bmze),
                $ = N
                    ? (0, l.jsx)(tn.y, {})
                    : W
                      ? (0, L.$g)(w.amount, w.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: l, intervalCount: i = 1 } = e,
                                r = (0, L.$g)(t, n);
                            return l === eU.WT.YEAR
                                ? F.intl.formatToPlainString(F.t["8M04YJ"], { price: r })
                                : l === eU.WT.MONTH && 1 === i
                                  ? F.intl.formatToPlainString(F.t.VStWCR, { price: r })
                                  : l === eU.WT.MONTH && i > 1
                                    ? F.intl.formatToPlainString(F.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: h, intervalCount: f, amount: w.amount, currency: w.currency }),
                J = N
                    ? (0, l.jsx)(tn.y, {})
                    : (0, l.jsx)(tp.A, {
                          price: U,
                          currency: w.currency,
                          intervalType: h,
                          intervalCount: f,
                          isPrepaidPaymentSource: W,
                      }),
                X = N
                    ? (0, l.jsx)(tn.y, {})
                    : p && !W
                      ? (0, L.CE)((0, L.$g)(U, w.currency), h, f)
                      : (0, L.$g)(U, w.currency),
                ee = [],
                et = [];
            if (V) {
                let e = (0, l.jsx)(
                    tl.A,
                    {
                        message: F.intl.formatToPlainString(F.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, L.$g)(7.5345 * U, tT.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                ee.push(e), et.push(e);
            }
            let en = (0, tc.p)("GuildBoostPurchaseModalPlanSelect")
                ? F.intl.string(F.t["+nPHMl"])
                : F.intl.format(F.t.Om31w8, { documentationLink: ty.A.getArticleURL(eG.MVz.LOCALIZED_PRICING) });
            return (
                ee.push((0, l.jsx)(tl.A, { message: en }, "localized-pricing")),
                et.push((0, l.jsx)(tD, { message: en }, "localized-pricing")),
                {
                    isLoading: N,
                    planLabel: Q,
                    planPriceContent: $,
                    subtotalContent: J,
                    refreshSubtotalContent: X,
                    legacyDescriptionContent: K,
                    refreshDescriptionContent: Z,
                    existingSlotNotice: q,
                    fractionalBanner: z,
                    legacyPricingNotes: ee,
                    refreshPricingNotes: et,
                    discountCallout:
                        "reverse_trial" === B.upsellVariant
                            ? (0, l.jsx)(tf, {})
                            : (0, l.jsx)(tE, { text: n, color: ts.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === B.upsellVariant ? (0, l.jsx)(tf, {}) : (0, l.jsx)(tG, { text: n }),
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
            showRefreshSubtotalRate: p,
        });
    return (0, l.jsx)(m ? tB : tF, {
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
let tY = eU.gD.NONE_MONTH,
    tV = [eU.pe.GUILD];
function tK(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            guildId: i,
            closeGuildPerksModal: s,
            disablePremiumUpsell: o,
            setForceDisableSubmitButton: u,
            forceDisableSubmitButton: c,
            paymentModalArgs: d,
            premiumSubscriptionPaymentSourceId: m,
        } = ej(),
        {
            paymentSourceId: p,
            activeSubscription: C,
            quantity: h,
            setQuantity: E,
        } = (0, f.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
            setQuantity: e.setQuantity,
        })),
        { displayCurrency: S } = (0, eP.Jn)(),
        y = null != m || Object.keys(d.paymentSources).length > 0,
        I = (0, a.Ir)(y ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS),
        A = (0, X.A)(() => (0, eh.D$)(ep.A.boostSlots)),
        g = (0, ec.n)("GuildBoostPurchaseModal"),
        P = eX.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        v = g && P,
        x = (0, k.bG)([eo.A], () => (null != i ? eo.A.getGuild(i) : void 0), [i]),
        _ = null != i ? em.A.getGuild(i) : null,
        T = null == x && null == _,
        N = null != C && C.isPurchasedExternally,
        b = Object.keys(d.paymentSources).length > 0,
        j = (0, k.bG)([ek.A], () => (null != C ? (0, ew.c9)(C.planId) : null)),
        R = (0, k.bG)([ek.A], () => (null == j ? ek.A.get(tY) : j));
    if (null == i) throw new r.vd({ message: "Missing guildId" });
    eZ()(null != R, "Missing nextPremiumSubscriptionPlan");
    let M = (0, l.jsx)(tW, {
        premiumSubscriptionPlan: R,
        numGuildBoosts: h,
        setNumGuildBoosts: E,
        setForceDisableSubmitButton: u,
        premiumSubscription: C,
        existingAvailableSlots: A,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != s && s(), (0, eJ.e)();
        },
        priceOptions:
            null != p ? { paymentSourceId: p, currency: null != S ? S : void 0 } : { currency: null != S ? S : void 0 },
        isRefreshEnabled: g,
        showRefreshSubtotalRate: v,
        refreshNextStepLabel: I,
    });
    return (
        N && null != C && null != C.paymentGateway
            ? (M = (0, l.jsxs)("div", {
                  className: eF.xK,
                  children: [
                      (0, l.jsx)(eq.w, {
                          type: "critical",
                          children: F.intl.format(F.t["/m3Y3s"], { paymentGatewayName: tT.qm[C.paymentGateway] }),
                      }),
                      M,
                  ],
              }))
            : null != i &&
              !eo.A.isGuildFetching(i) &&
              T &&
              (M = (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(ez.p, {
                          messageType: ez.Y.ERROR,
                          className: eF.MR,
                          children: F.intl.string(F.t.eAn6z2),
                      }),
                      M,
                  ],
              })),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(eW.dZ, { children: M }),
                (0, l.jsx)(eW.UX, {
                    children: (0, l.jsx)(eY._, {
                        currentStep: a.pn.PLAN_SELECT,
                        isRefreshEnabled: g,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: g
                            ? (0, l.jsx)(eQ.$, { variant: "secondary", text: F.intl.string(F.t["ETE/oC"]), onClick: t })
                            : (0, l.jsx)(e$.Q, { text: F.intl.string(F.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, l.jsx)(eQ.$, {
                            variant: "primary",
                            text: F.intl.string(F.t["3PatSz"]),
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
                                isMissingGuildInformation: T,
                            }),
                            onClick: function () {
                                o || (null != j && j.premiumSubscriptionType === eU.PremiumTypes.TIER_2)
                                    ? n(null != m || b ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS)
                                    : n(a.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
var tZ = n(364840),
    tq = n(935462),
    tz = n(460905),
    tQ = n(183623),
    t$ = n(95635),
    tJ = n(331322),
    tX = n(532794),
    t0 = n(811611),
    t2 = n(901017),
    t1 = n(463995);
function t4(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, k.bG)([tS.default], () => tS.default.locale);
    return (0, l.jsxs)("div", {
        className: t1.mH,
        children: [
            (0, l.jsx)(t2.A, {
                icon: e9._,
                iconClassName: t1.pl,
                description: F.intl.formatToPlainString(F.t.sQBgs2, { numFreeGuildSubscriptions: eU.M4 }),
                color: e1.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, l.jsx)(t2.A, {
                icon: e9._,
                iconClassName: t1.pl,
                description: F.intl.formatToPlainString(F.t["1A6vXi"], { percent: (0, tI.l9)(n, eU.oX / 100) }),
                color: e1.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, l.jsx)(t2.A, { icon: tz.n, iconClassName: t1.zO, description: F.intl.string(F.t.Z9b2x2) }) : null,
            (0, l.jsx)(t2.A, { icon: tQ.F, iconClassName: t1.Kg, description: F.intl.string(F.t["8dqG5E"]) }),
            (0, l.jsx)(t2.A, { icon: t$.UploadIcon, iconClassName: t1.$z, description: F.intl.string(F.t.cBorIy) }),
        ],
    });
}
function t3(e) {
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
        { analyticsLocations: m, sourceAnalyticsLocations: p } = (0, ti.Ay)(i.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        C = null == t || null == t.premiumSubscriptionType,
        h = O.Ay.getPrice(eU.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        f = (0, L.$g)(h.amount, h.currency),
        S = (0, tm.V)(),
        y = S?.trialId,
        I = S?.subscriptionTrial?.skuId === eU.pe.TIER_2;
    return (
        o.useEffect(() => {
            e_.default.track(eG.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eU.e.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: p,
            });
        }, [p]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tq.s_, { "data-migration-pending": !0, onClick: n, className: t1.b }),
                (0, l.jsxs)(eI.c, {
                    children: [
                        I && (0, l.jsx)(t0.Vq, { className: t1.Fg }),
                        (0, l.jsx)("div", { className: e2()(t1.Tn, { [t1.NH]: I }) }),
                        (0, l.jsx)(E.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children:
                                null != y
                                    ? F.intl.string(F.t.AoSzEr)
                                    : F.intl.format(F.t["7vePZb"], { monthlyPrice: f }),
                        }),
                        (0, l.jsx)(t4, { shouldUpsellFromNoneTier: C }),
                    ],
                }),
                (0, l.jsx)(tZ.j, {
                    children: (0, l.jsxs)(tJ.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(e$.Q, { text: F.intl.string(F.t["13/7kX"]), onClick: r, variant: "secondary" }),
                            (0, l.jsxs)(tJ.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, l.jsx)(e$.Q, {
                                        text: F.intl.string(F.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, l.jsx)(eQ.$, {
                                        variant: "active",
                                        text: null != y ? F.intl.string(F.t["Gd/XHF"]) : F.intl.string(F.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, tX.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eU.pe.TIER_2,
                                                    analyticsLocations: m,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: eG.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: c,
                                                    onSubscriptionConfirmation: s,
                                                    trialId: y,
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
function t7(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: i } = e,
        { paymentModalArgs: r, analyticsLocation: s, analyticsSourceLocation: u } = ej(),
        { paymentSourceId: c, activeSubscription: d } = (0, f.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: m } = (0, eP.Jn)(),
        p = (0, k.bG)([ek.A], () => (null != d ? (0, ew.c9)(d.planId) : null)),
        C = (0, k.bG)([ek.A], () => (null == p ? ek.A.get(tY) : p));
    eZ()(null != C, "Missing nextPremiumSubscriptionPlan"), eZ()(null != m && "" !== m, "Currency not defined");
    let { paymentSources: h } = r,
        E = null != d ? d.paymentSourceId : null,
        S = Object.keys(h).length > 0,
        y = o.useCallback(() => n(a.pn.PLAN_SELECT), [n]),
        I = o.useCallback(() => n(null != E || S ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS), [n, E, S]);
    return (0, l.jsx)(t3, {
        premiumSubscriptionPlan: C,
        analyticsLocation: s,
        analyticsSourceLocation: u,
        onClose: t,
        onBack: y,
        onSkip: I,
        onSubscriptionConfirmation: i,
        priceOptions: null != c ? { paymentSourceId: c, currency: m } : { currency: m },
    });
}
var t6 = n(277984),
    t5 = n(820739);
async function t8(e, t) {
    await (0, t5.CD)();
    let n = (0, eh.D$)(ep.A.boostSlots);
    return (0, t5.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function t9() {
    let { guildId: e, intent: t, onSubscribeComplete: n, paymentModalArgs: l } = ej(),
        { setIsSubmittingCurrentStep: i } = l,
        { paymentAuthenticationState: r } = (0, el.o)(),
        { setPurchaseState: a, setPurchaseError: s } = (0, f.t4)((e) => ({
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
                        await t8(e, null != t), n?.();
                    } catch (e) {
                        a(eu.h.FAIL), s(e);
                    }
            }
            u.current && ((u.current = !1), i(!1), r === ed.oc.NONE && null != e && l());
        }, [r, e, t, n, i, a, s]),
        null
    );
}
let ne = [
        { key: a.pn.PLAN_SELECT, renderStep: (e) => (0, l.jsx)(tK, { ...e }), options: { renderHeader: !0 } },
        {
            key: a.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, l.jsx)(t7, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    nt = {
        CHECKOUT_FLOW: et.C.GUILD_BOOST_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(eH, { ...e }) },
        STEPS_BEFORE_CHECKOUT: ne,
        CHECKOUT_STEPS: {
            [a.pn.REVIEW]: function (e) {
                let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                    { guildId: s, paymentModalArgs: u, premiumSubscriptionPaymentSourceId: c } = ej(),
                    {
                        activeSubscription: d,
                        paymentSourceId: m,
                        setPaymentSourceId: p,
                    } = (0, f.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: C } = (0, eP.Jn)();
                if (null == s) throw new r.vd({ message: "Missing guildId" });
                eZ()(null != C && "" !== C, "Currency not defined");
                let { paymentSources: h } = u,
                    { newAdditionalPlans: E, currentPremiumSubscriptionPlan: S } = eD(),
                    y = (0, k.bG)([ek.A], () => (null == S ? ek.A.get(tY) : S));
                eZ()(null != y, "Missing nextPremiumSubscriptionPlan");
                let I = null != m ? { paymentSourceId: m, currency: C } : { currency: C },
                    A = (function (e) {
                        let { handleStepChange: t, handleClose: n, analyticsData: l } = e,
                            {
                                guildId: i,
                                paymentModalArgs: r,
                                premiumSubscriptionPaymentSourceId: s,
                                analyticsLocation: u,
                                analyticsSourceLocation: c,
                                flowStartTime: d,
                                applicationId: m,
                                intent: p,
                                onSubscribeComplete: C,
                            } = ej(),
                            { displayCurrency: h } = (0, eP.Jn)(),
                            { paymentSources: E, setIsSubmittingCurrentStep: S, isSubmittingCurrentStep: y } = r,
                            {
                                activeSubscription: I,
                                paymentSourceId: A,
                                setPurchaseError: g,
                                hasAcceptedTerms: P,
                                setPurchaseState: v,
                                quantity: x,
                                checkoutPaymentSources: _,
                            } = (0, f.t4)((e) => ({
                                activeSubscription: e.activeSubscription,
                                paymentSourceId: e.paymentSourceId,
                                setPurchaseError: e.setPurchaseError,
                                hasAcceptedTerms: e.hasAcceptedTerms,
                                setPurchaseState: e.setPurchaseState,
                                quantity: e.quantity,
                                checkoutPaymentSources: e.get("checkoutPaymentSources"),
                            })),
                            T = (0, ta.sw)(),
                            {
                                newAdditionalPlans: N,
                                currentPremiumSubscriptionPlan: b,
                                premiumGuildSubscriptionPlanId: j,
                            } = eD(),
                            M = (0, tg.A)({
                                location: "GuildBoostPurchaseModal",
                                message: F.intl.string(V.default["tK8A/8"]),
                            }),
                            L = (0, tg.iB)({
                                checkoutPaymentSources: _,
                                paymentSourceId: A,
                                location: "GuildBoostPurchaseModal",
                            }),
                            k = o.useMemo(
                                () => ({
                                    ...l,
                                    location: u,
                                    source: c,
                                    subscription_plan_id: j,
                                    sku_id: (0, O.mH)(eU.pe.GUILD),
                                    quantity: x,
                                }),
                                [l, u, c, x, j],
                            ),
                            w = o.useMemo(() => {
                                let { guild_id: e, ...t } = k;
                                return t;
                            }, [k]),
                            U = null != A ? { paymentSourceId: A, currency: h ?? void 0 } : { currency: h ?? void 0 };
                        async function D() {
                            eZ()(null != N, "Missing newAdditionalPlans");
                            let e = (0, R.W)(E, A);
                            g(null);
                            let r = !1;
                            try {
                                v(eu.h.PURCHASING),
                                    S(!0),
                                    eZ()(null != A, "Missing paymentSourceId"),
                                    eZ()(null != T, "Missing invoicePreview");
                                let o = { amount: T.total, currency: T.currency },
                                    u = U.currency ?? T.currency,
                                    c = (0, O.U8)(I, N, u.toLowerCase(), U.paymentSourceId);
                                if (
                                    (e_.default.track(eG.HAw.PAYMENT_FLOW_COMPLETED, {
                                        ...k,
                                        duration_ms: Date.now() - d,
                                        guild_id: i ?? void 0,
                                        application_id: m,
                                    }),
                                    null == I || null == b)
                                ) {
                                    eZ()(null != e, "Missing paymentSource");
                                    let t = await (0, t6.Ky)({
                                        items: N,
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
                                    let t = { items: (0, O.aE)(I, N) };
                                    (t.currency = I.currency ?? u),
                                        (t.paymentSource = null != s ? E[s] : void 0),
                                        null == t.paymentSource &&
                                            (eZ()(null != e, "Missing paymentSource"),
                                            (t.paymentSource = e),
                                            (t.currency = u));
                                    let n = await (0, t6.nV)(I, t, o, c, l.location_stack);
                                    if (n.redirectConfirmation) {
                                        r = !0;
                                        return;
                                    }
                                    if (n.pendingCustomerAction) return;
                                }
                                null == p && t(a.pn.CONFIRM),
                                    v(eu.h.COMPLETED),
                                    null != i && (await t8(i, null != p)),
                                    null != p && n(),
                                    C?.();
                            } catch (t) {
                                v(eu.h.FAIL),
                                    g(t),
                                    e_.default.track(eG.HAw.PAYMENT_FLOW_FAILED, {
                                        ...w,
                                        payment_error_code: t?.code,
                                        payment_gateway:
                                            null != e
                                                ? e.type === eG.hes.CARD
                                                    ? eG.kM_.STRIPE
                                                    : eG.kM_.BRAINTREE
                                                : null,
                                        payment_source_id: A,
                                        duration_ms: Date.now() - d,
                                    });
                            } finally {
                                r || S(!1);
                            }
                        }
                        return {
                            text: F.intl.string(F.t.eUEeCt),
                            loading: y,
                            disabled: null == A || !P || null != M || L,
                            onClick: D,
                            variant: "active",
                        };
                    })({ handleStepChange: t, handleClose: n, analyticsData: i }),
                    g = o.useCallback(() => {
                        t(a.pn.ADD_PAYMENT_STEPS), p(null);
                    }, [t, p]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eW.dZ, {
                            children: (0, l.jsx)(tL, {
                                guildId: s,
                                paymentSources: h,
                                priceOptions: I,
                                currentPremiumSubscription: d,
                                premiumSubscriptionPaymentSourceId: c,
                                premiumSubscriptionPlan: y,
                                newAdditionalPlans: E,
                                paymentSourceId: m,
                                setPaymentSourceId: p,
                                onPaymentSourceAdd: g,
                            }),
                        }),
                        (0, l.jsx)(eW.UX, {
                            children: (0, l.jsx)(ea.lo, {
                                onBackClick: () => t(a.pn.PLAN_SELECT),
                                primaryButtonProps: A,
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
                        loadId: m,
                        children: p,
                    } = e,
                    C = (0, k.bG)([eC.A], () => eC.A.getPremiumTypeSubscription()),
                    h = (0, X.A)(() => n - (0, eh.D$)(ep.A.boostSlots).length);
                return (
                    (0, ee.Ay)(() => {
                        null != eo.A.getGuild(t) || eo.A.isGuildFetching(t) || (0, es.y)(t);
                    }),
                    (0, l.jsx)(en.M, {
                        activeSubscription: C,
                        stepConfigs: d,
                        skuIDs: tV,
                        loadId: m,
                        unifiedCheckoutFlow: et.C.GUILD_BOOST_CHECKOUT,
                        children: (0, l.jsxs)(eM, {
                            initialNumGuildBoostsToPurchase: h,
                            disablePremiumUpsell: r,
                            closeGuildPerksModal: s,
                            guildId: t,
                            analyticsLocation: o,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: i,
                            onSubscribeComplete: a,
                            children: [(0, l.jsx)(t9, {}), p],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { guildId: i, existingAvailableSlotCount: r } = ej(),
                    s = (0, ei.s2)(),
                    { purchaseState: u, quantity: c } = (0, f.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        quantity: e.quantity,
                    })),
                    d = (0, ec.n)("GuildBoostUnifiedCheckout"),
                    m = d && (s === a.pn.REVIEW || s === a.pn.CONFIRM),
                    p = (0, ey.A)(m),
                    C = o.useMemo(() => ({ quantity: c }), [c]);
                return d && s === a.pn.CONFIRM
                    ? (0, l.jsx)(eS.A, {
                          mediaUrls: p.mediaUrls,
                          isSuccess: p.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(u === eu.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, l.jsx)(eE.A, {
                                  transitionState: t.transitionState,
                                  guild: em.A.getGuild(i),
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
                r = (0, f.t4)((e) => e.purchaseState),
                s = (0, h.A)();
            if (n === a.pn.PREMIUM_UPSELL) return null;
            if (n === a.pn.REVIEW) {
                let e = null != s ? s.skuId : null;
                return (0, l.jsx)(ea.s3, { ...(0, er.u)({ skuId: e, step: n }) });
            }
            return i
                ? (0, l.jsx)(ea.s3, { title: (0, er.u)({ skuId: null, step: n }).title })
                : (0, l.jsx)(ef.A, { onClose: () => t(r === eu.h.COMPLETED), currentStep: n, purchaseState: r });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(eV, { ...e }), options: { renderHeader: !0 } },
    };
var nn = n(773882),
    nl = n(192308),
    ni = n(871109);
let nr = o.createContext(void 0);
function na() {
    let e = o.useContext(nr);
    return eZ()(null != e, "GuildProductPurchaseContext not found"), e;
}
function ns(e) {
    let { children: t, skuId: n, ...i } = e,
        r = (0, k.bG)([ni.A], () => ni.A.getGuildProduct(n));
    return (
        eZ()(null != r, "guildProductListing cannot be null"),
        (0, l.jsx)(nr.Provider, { value: { guildProductListing: r, ...i }, children: t })
    );
}
function no(e) {
    let { handleClose: t } = e,
        { guildProductListing: i, guildId: r } = na(),
        a = (0, ta.sw)();
    return (
        (0, ee.Ay)(() => {
            var e;
            eZ()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: r, guildProductListingId: i.id, invoicePreview: a }),
                (0, nl.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("24774"),
                        n.e("767837"),
                        n.e("835778"),
                        n.e("47812"),
                        n.e("813583"),
                        n.e("228090"),
                    ]).then(n.bind(n, 779457));
                    return (n) => (0, l.jsx)(t, { ...e, ...n });
                }),
                t();
        }),
        null
    );
}
var nu = n(939249),
    nc = n(789645),
    nd = n(303612),
    nm = n(171036),
    np = n(200791);
function nC(e) {
    let { className: t, onClose: n } = e;
    return (0, l.jsx)(nu.D, {
        className: e2()(nm.cG, t),
        onClick: n,
        children: (0, l.jsx)(nc.P, { size: "xs", color: "currentColor", className: nm.yP }),
    });
}
function nh(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, l.jsxs)(tq.rQ, {
        className: e2()(nm.wx, np.G, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, l.jsx)(nd.A, { className: nm.F0, listing: t, imageSize: 500, alt: "" }),
            (0, l.jsx)(nC, { className: nm.b, onClose: n }),
        ],
    });
}
var nf = n(621328);
let nE = {
    CHECKOUT_FLOW: r.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [a.pn.REVIEW]: nn.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: i,
            } = e;
            return (0, l.jsx)(ns, { guildId: t, skuId: n, children: i });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: i.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: i } = na();
        return n === a.pn.CONFIRM
            ? null
            : (0, l.jsx)(nh, { guildProductListing: i, className: nf.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(no, { ...e }) },
};
var nS = n(20742),
    ny = n(951305),
    nI = n(1076),
    nA = n(776310),
    ng = n(228366),
    nP = n(213530),
    nv = n(966971),
    nx = n(758836),
    n_ = n(395797);
let nT = { sliderBodyClassName: n_.Bz };
function nN(e) {
    let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nA.Fk, { ref: n, className: n_.Lb, environment: t.current }),
            (0, l.jsx)(nP.K, { options: i, className: e2()(n_.Oh, { [n_.R]: !r }) }),
        ],
    });
}
var nb = n(702841),
    nj = n(775602),
    nR = n(31823),
    nM = n(427675),
    nO = n(590180),
    nL = n(953150),
    nk = n(524246),
    nw = n(14368),
    nU = n(61750),
    nD = n(972607),
    nG = n(901930);
function nF(e) {
    let { handleClose: t, analyticsLocations: n, collectedModalOverrideTitle: i, collectedModalGradientColor: r } = e,
        {
            selectedSkuId: a,
            purchaseError: s,
            purchasePreviewError: u,
            appliedUserDiscounts: c,
        } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: d } = (0, el.o)(),
        { application: m } = (0, nR.V)(),
        p = (0, nM.gU)(),
        C = (0, nb.bG)([nO.A], () => nO.A.getProduct(a)),
        h = o.useRef(!1);
    eZ()(null != a, "Expected selectedSkuId"), eZ()(null != m, "Expected application");
    let E = p[a];
    eZ()(null != E, "Expected sku");
    let S = null != d || null != s || null != u,
        y =
            i ??
            (c.length > 0
                ? F.intl.formatToPlainString(F.t.VuV3Td, { discountOfferAmount: c[0].discount.amount })
                : void 0);
    return (o.useEffect(() => {
        null == C ||
            S ||
            h.current ||
            ((h.current = !0),
            (0, nU.A)({
                product: C,
                overrideTitle: y,
                overrideGradientColor: r,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: nx.gs.FIAT,
            }));
    }, [C, n, t, S, y, r]),
    S)
        ? (0, l.jsx)(eW.dZ, { children: (0, l.jsx)(nG.A, {}) })
        : null;
}
function nB(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: i,
            hasSentMessage: r,
            giftRecipient: a,
            giftMessageError: s,
            isSendingMessage: u,
            giftingOrigin: c,
        } = (0, ny.Pv)(),
        d = (0, nb.bG)([nj.Ay], () => nj.Ay.useReducedMotion),
        m = o.useRef(null),
        p = (0, f.t4)((e) => e.selectedSkuId),
        C = (0, nb.bG)([nO.A], () => nO.A.getProduct(p)),
        { confettiColors: h } = (0, nL.A)(C?.styles);
    return (
        o.useEffect(() => {
            t &&
                null != a &&
                null != p &&
                (c === eU.vQ.USER_PROFILE_WISHLIST || c === eU.vQ.DM_CHANNEL_WISHLIST) &&
                ng.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: p, recipientId: a.id });
        }, [t, a, p, c]),
        t
            ? (0, l.jsxs)("div", {
                  ref: m,
                  children: [
                      (0, l.jsx)(nD.A, {
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
                          (0, l.jsx)(nk.A, {
                              confettiTarget: m.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, nw.rA)(C?.categorySkuId),
                              colors: h?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, l.jsx)(nF, { ...e })
    );
}
var nH = n(70283),
    nW = n(982240),
    nY = n(839534),
    nV = n(993408),
    nK = n(575593),
    nZ = n(452027),
    nq = n(922016),
    nz = n(778712),
    nQ = n(986687),
    n$ = n(999291),
    nJ = n(903209),
    nX = n(674658),
    n0 = n(898461),
    n2 = n(203632),
    n1 = n(892118),
    n4 = n(536572),
    n3 = n(14702),
    n7 = n(219103),
    n6 = n(431898);
function n5(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: i,
            className: r,
            previewHeaderClassName: a,
            hideProfilePreview: s,
        } = e,
        { giftRecipient: u, giftRecipientError: c } = (0, ny.Pv)(),
        d = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
        m = O.Ay.canUseShopDiscounts(d),
        p = (0, n$.Ay)(u?.id),
        C = o.useRef(null),
        [h, f] = o.useState(!1),
        { product: S } = (0, nX.q)(t, !0),
        y = o.useMemo(() => (0, nV.fT)(S, m), [S, m]);
    if (null == S || 0 === S.items.length) return null;
    let [I] = S.items,
        A = (0, n4.VG)(S),
        g = null != u && u.id !== d?.id && S.type !== nK.R.BUNDLE && I.type !== nK.R.NAMEPLATE && !s;
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsx)("div", {
                className: e2()(n6.QU, a),
                children: (0, l.jsx)(nZ.D, {
                    label: F.intl.string(F.t.PpoJzt),
                    children:
                        g &&
                        (0, l.jsx)(
                            nq.Y,
                            {
                                targetElementRef: C,
                                align: "center",
                                shouldShow: h,
                                onRequestClose: () => f(!1),
                                preload: () => (0, nJ.A)(u.id, u.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, l.jsx)(nQ.A, {
                                        ...e,
                                        user: u,
                                        pendingAvatar: u.getAvatarURL(null, (0, nz.FT)(nz._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, n0.T)(I) ? I : null,
                                        pendingProfileEffect: (0, n2.C3)(I) ? I : null,
                                        pendingProfileFrame: (0, n1.s)(I) ? I : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...i } = e;
                                    return (0, l.jsx)(nu.D, {
                                        ...i,
                                        className: n6.Nx,
                                        innerRef: C,
                                        onClick: (e) => {
                                            f((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            h ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, l.jsx)(E.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: F.intl.string(F.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            p?.userId,
                        ),
                }),
            }),
            (0, l.jsxs)("div", {
                className: e2()(n6.i1, null != c ? n6.cN : n6.no),
                children: [
                    (0, l.jsxs)("div", {
                        className: n6.Ug,
                        children: [
                            (0, l.jsx)(n3.O, { product: S }),
                            (0, l.jsxs)("div", {
                                className: n6.JZ,
                                children: [
                                    (0, l.jsx)(E.E, { variant: "text-md/semibold", children: A }),
                                    (0, l.jsx)(e8.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            S?.type === nK.R.BUNDLE
                                                ? null
                                                : I.type === nK.R.AVATAR_DECORATION
                                                  ? F.intl.string(F.t["7v0T9P"])
                                                  : I.type === nK.R.NAMEPLATE
                                                    ? F.intl.string(F.t.x5CoXR)
                                                    : I.type === nK.R.PROFILE_EFFECT
                                                      ? F.intl.string(F.t.wR5wOo)
                                                      : I.type === nK.R.PROFILE_FRAME
                                                        ? F.intl.string(F.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(n7.x, {
                                priceAmount: n,
                                priceCurrency: i,
                                discount: y,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != c &&
                        (0, l.jsx)("div", {
                            className: n6.Wh,
                            children: (0, l.jsx)(E.E, {
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
var n8 = n(890497),
    n9 = n(966327),
    le = n(427262);
let lt = function (e) {
    let { selectedSkuId: t, validateSelectedGift: n, className: i, recipients: r } = e,
        { giftRecipient: a, setGiftRecipient: s } = (0, ny.Pv)();
    return null == t
        ? null
        : (0, l.jsx)("div", {
              className: i,
              children: (0, l.jsx)(n8.Z, {
                  selectionMode: "single",
                  label: F.intl.string(F.t.xFn72s),
                  placeholder: F.intl.string(F.t.R0vK0N),
                  value: a?.id,
                  onSelectionChange: function (e) {
                      if (null == t) return;
                      let l = r.find((t) => t.id === e);
                      null != l && (n(l, t), s(l));
                  },
                  options: r.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${le.Ay.getUserTag(e)}`,
                      leading: (0, l.jsx)(n9.A, { user: e, size: nz._3.SIZE_20 }),
                  })),
              }),
          });
};
var ln = n(435558),
    ll = n.n(ln),
    li = n(427358),
    lr = n(570287),
    la = n(994500);
function ls() {
    let e = (0, k.yK)([la.A], () => la.A.getFriendIDs()),
        t = (0, k.yK)([li.A], () =>
            li.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: i } = e,
                        r = (0, lr.q)(i);
                    return !t && (n >= 0.1 || l >= 0.1) && r;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = o.useMemo(() => ll().uniq([...e, ...t]), [e, t]);
    return (0, k.yK)(
        [D.default],
        () =>
            n.reduce((e, t) => {
                let n = D.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var lo = n(611881),
    lu = n(492275),
    lc = n(871181),
    ld = n(318007),
    lm = n(285719),
    lp = n(976860),
    lC = n(619940);
function lh(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: r } = (0, ti.Ay)(i.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, l.jsx)(e$.Q, {
        text: F.intl.string(F.t.J82mpK),
        onClick: function () {
            t(),
                (0, nl.closeAllModals)(),
                null == n
                    ? (0, nY.Cz)({ analyticsLocations: r, analyticsSource: i.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, lp.pX)(`${eG.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
function lf(e) {
    let {
            hideConfirmStepConfetti: t,
            confettiCanvas: n,
            collectedModalOverrideTitle: i,
            collectedModalGradientColor: r,
        } = (0, nI.z)(),
        { analyticsLocations: a } = (0, ti.Ay)();
    return (0, l.jsx)(nB, {
        analyticsLocations: a,
        hideConfetti: t,
        confettiCanvas: n,
        collectedModalOverrideTitle: i,
        collectedModalGradientColor: r,
        ...e,
    });
}
let lE = {
    [a.pn.GIFT_CUSTOMIZATION]: () => F.intl.string(F.t["JCFN/y"]),
    [a.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => F.intl.string(F.t.lDbi6H),
    [a.pn.CONFIRM]: () => "",
};
function lS(e) {
    let { step: t } = e,
        n = lE[t];
    return null == n ? null : (0, l.jsx)(nS.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
}
let ly = {
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
                            setValidatingGiftRecipient: m,
                        } = (0, ny.Pv)(),
                        { selectedSkuId: p, checkoutInvoicePreview: C } = (0, f.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                        })),
                        h = (0, nM.gU)(),
                        E = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
                        S = ls(),
                        { analyticsLocations: y } = (0, ti.Ay)(i.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL),
                        I = (0, lo.F5)("CollectiblesPaymentModalGiftCustomizationStep"),
                        { nextTier: A, giftsToNextTier: g } = (0, k.cf)([nW.Ay], () => ({
                            nextTier: nW.Ay.getNextTier(nH.$.GIFTING),
                            giftsToNextTier: nW.Ay.getRemainingToNextTier(nH.$.GIFTING),
                        })),
                        P = I && null != A;
                    async function v(e, t) {
                        m(!0), null != s && o(), (await (0, nY.JJ)(e.id, t)) || o(F.intl.string(F.t["4kgVqQ"])), m(!1);
                    }
                    function x() {
                        return (0, l.jsx)(lc.A, {
                            onTextChange: (e) => a?.(e),
                            pendingText: r,
                            currentText: r,
                            disableThemedBackground: !0,
                            className: lC.iX,
                            innerClassName: lC.pt,
                        });
                    }
                    return (
                        (0, ee.Ay)(() => {
                            null != p &&
                                null != c &&
                                (d !== eU.vQ.DM_CHANNEL_WISHLIST &&
                                    e_.default.track(eG.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: p }),
                                v(c, p));
                        }),
                        {
                            renderLeftColumn: function () {
                                return (0, l.jsx)("div", {
                                    className: lC.qL,
                                    children: (0, l.jsx)(ld.t, { isShopGift: !0 }),
                                });
                            },
                            renderRightColumn: function () {
                                let e = (0, nV.pA)({ invoicePreview: C, selectedSkuId: p, skusById: h });
                                return d === eU.vQ.USER_PROFILE_WISHLIST || d === eU.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, l.jsxs)("div", {
                                          children: [
                                              (0, l.jsx)(lm.Z, { giftRecipient: c }),
                                              x(),
                                              null != e &&
                                                  null != p &&
                                                  (0, l.jsx)(n5, {
                                                      skuId: p,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: lC.uW,
                                                      previewHeaderClassName: lC.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, l.jsx)("div", {
                                                  className: lC.fi,
                                                  children: (0, l.jsx)(lh, { handleClose: n, selectedSkuId: p }),
                                              }),
                                          ],
                                      })
                                    : (0, l.jsxs)("div", {
                                          children: [
                                              (0, l.jsx)(lt, {
                                                  selectedSkuId: p,
                                                  recipients: S,
                                                  className: lC.uh,
                                                  validateSelectedGift: v,
                                              }),
                                              x(),
                                              null != e &&
                                                  null != p &&
                                                  (0, l.jsx)(n5, {
                                                      skuId: p,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: lC.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            renderBottomContent: function () {
                                return P
                                    ? (0, l.jsx)(lu.A, {
                                          giftsToNextTier: g,
                                          nextTierName: A.name ?? "",
                                          nextTierIcon: A.simple_icon_url,
                                          analyticsLocations: y,
                                          className: lC.qr,
                                      })
                                    : null;
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == c || c.id === E?.id || r.length > eU.Jo,
                            loading: u,
                        }
                    );
                })({ handleStepChange: t, handleClose: n }),
                m = o.useMemo(() => ({ loading: d, disabled: c }), [d, c]);
            return (0, l.jsx)(r.Mw, {
                paymentModalStepProps: e,
                layout: r.XZ.TWO_COLUMN,
                renderLeftColumn: a,
                renderRightColumn: s,
                renderBottomContent: u,
                primaryCTAButtonProps: m,
            });
        },
        [a.pn.REVIEW]: nn.p,
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
                    hideConfirmStepConfetti: m,
                } = (function (e) {
                    let { skuId: t } = e,
                        n = o.useRef(new nA.OH()),
                        [l, i] = o.useState(null),
                        [r, a] = o.useState(!1),
                        s = o.useMemo(() => (0, nv.AB)({ purchaseType: nx.gs.FIAT, skuId: t }), [t]);
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
                p = (function (e) {
                    let { skuId: t } = e;
                    return null != t ? [t] : [];
                })({ skuId: t }),
                [C, h] = (0, o.useState)(void 0),
                [f, E] = (0, o.useState)(void 0),
                S = (0, o.useMemo)(
                    () => ({
                        skuIDs: p,
                        setCustomConfettiVisible: c,
                        hideConfirmStepConfetti: m,
                        confettiCanvas: a,
                        collectedModalOverrideTitle: C,
                        setCollectedModalOverrideTitle: h,
                        collectedModalGradientColor: f,
                        setCollectedModalGradientColor: E,
                    }),
                    [p, c, m, a, C, f],
                );
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(nN, {
                        environment: r,
                        setConfettiCanvas: s,
                        customConfettiDisplayOptions: d,
                        customConfettiVisible: u,
                    }),
                    (0, l.jsx)(en.M, {
                        ...i,
                        skuIDs: p,
                        stepConfigs: i.stepConfigs,
                        activeSubscription: null,
                        purchaseType: tT.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, l.jsx)(nI.i.Provider, { value: S, children: n }),
                    }),
                ],
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                { skuIDs: l, setCustomConfettiVisible: i } = (0, nI.z)(),
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
                                i(!1), n(e), ng.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                            },
                            [n, i],
                        ),
                        paymentModalOnComplete: a,
                    };
                })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: i });
            return n({ ...t, skuId: r, onClose: a, onComplete: s, applicationId: eG.FYj });
        },
        tenantAnalyticsLocation: i.A.COLLECTIBLES_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            { isGift: n } = (0, ny.Pv)();
        return n ? (0, l.jsx)(lS, { step: t }) : null;
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(lf, { ...e }), options: nT },
};
var lI = n(809029),
    lA = n(354033),
    lg = n(877624),
    lP = n(554146),
    lv = n(80151),
    lx = n(841702),
    l_ = n(367727),
    lT = n(580194),
    lN = n(709870),
    lb = n(37126),
    lj = n(412260),
    lR = n(607399),
    lM = n(795791);
function lO(e, t) {
    return !e && t === eU.pe.TIER_2 && !lR.Ct && !lR.KY && null == (0, lM.uM)();
}
var lL = n(771566),
    lk = n(625494),
    lw = n(45938),
    lU = n(97808),
    lD = n(912140),
    lG = n(780898),
    lF = n(344346),
    lB = n(837015),
    lH = n(643860);
function lW(e) {
    let { rewardSkuIds: t, onClose: n, onRewardModalClose: i } = e,
        r = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
        a = (0, k.bG)([nj.Ay], () => nj.Ay.useReducedMotion),
        { analyticsLocations: s } = (0, ti.Ay)(),
        u = nz._3.SIZE_32,
        { products: c, isFetching: d } = (0, nX.D)(t),
        [m, ...p] = c,
        [C, h] = o.useState(!1),
        f = m?.items[0],
        {
            isNameplateReward: E,
            nameplateData: S,
            rewardAvatarDecorationSrc: y,
        } = o.useMemo(
            () =>
                null == f
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, lB.F)(f)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: f.skuId,
                                src: f.asset,
                                palette: (0, lG.H6)(f.palette ?? "sky"),
                                imgAlt: f.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, n0.T)(f)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, lD.A)({
                                  legacyAssetId: f.asset,
                                  skuId: f.skuId,
                                  size: u,
                                  canAnimate: !a,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [f, u, a],
        );
    return (0, l.jsx)(eW.UX, {
        children: (0, l.jsx)(tZ.j, {
            children: (0, l.jsxs)("div", {
                className: lH.W,
                children: [
                    E && null != S
                        ? (0, l.jsx)("div", {
                              className: lH.D,
                              onMouseEnter: () => h(!0),
                              onMouseLeave: () => h(!1),
                              children: (0, l.jsx)(lF.a, {
                                  user: r,
                                  nameplate: null,
                                  nameplateData: S,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: C,
                              }),
                          })
                        : (0, l.jsx)(lU.Js, {
                              "aria-label": r?.username,
                              size: u,
                              src: r?.getAvatarURL(void 0, (0, nz.FT)(u), !a),
                              avatarDecoration: y,
                          }),
                    (0, l.jsx)(eQ.$, {
                        variant: "primary",
                        text: F.intl.string(F.t.kMYVwv),
                        loading: d,
                        onClick: () => {
                            null != m &&
                                (n(),
                                (0, nU.A)({
                                    product: m,
                                    remainingProducts: p,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: s,
                                    purchaseType: nx.gs.PROMOTIONAL,
                                    onCloseCallback: i,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var lY = n(49999);
function lV(e) {
    let t,
        {
            handleClose: i,
            planGroup: r,
            onSubscriptionConfirmation: a,
            renderPurchaseConfirmation: u,
            postSuccessGuild: c,
            followupSKUInfo: d,
            continueSessionToInitialStep: m,
        } = e,
        { paymentSources: p } = (0, P.j)(),
        {
            activeSubscription: E,
            selectedSkuId: S,
            updatedSubscription: y,
            paymentSourceId: I,
            isPremiumGroupPurchase: A,
            startingPremiumSubscriptionPlanId: g,
            startingFractionalPremiumEndsAt: v,
            checkoutInvoicePreview: x,
        } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
        })),
        _ = (0, h.A)(),
        T = (0, ei.s2)(),
        {
            isGift: N,
            giftRecipient: b,
            giftCode: j,
            hasSentMessage: M,
            isSendingMessage: O,
            sendGiftMessage: L,
            claimableRewards: w,
            selectedGiftingPromotionRewards: U,
            openGiftingBadgePostPurchaseModal: D,
        } = (0, ny.Pv)(),
        { confirmationFooter: G } = (0, s.cG)(),
        F = (0, lT.px)(_, N, w),
        B = (0, lT.Mq)(_),
        { purchases: H } = (0, lx.Wg)(!1),
        W = (0, k.bG)([lj.A], () => lj.A.getGiftPromotion()?.id),
        Y = (0, k.bG)([lj.A], () => {
            let e = lj.A.getMarketingComponentByType(lg.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        V = (0, R.g)(p, I),
        K = null != x ? x.orbsReward : null,
        Z = null != K && K > 0,
        q = N && !Z && U.length > 0 && U.every((e) => null != H.get(e)) && B,
        z = { selectedPlan: _, selectedSkuId: S, step: T };
    if (null == _) throw new C.v({ message: "Expected plan to be selected", extraSentryInformation: z });
    if (null == S) throw new C.v({ message: "Expected selectedSkuId", extraSentryInformation: z });
    if (null == T) throw new C.v({ message: "Step should be set", extraSentryInformation: z });
    let Q = o.useCallback(() => {
        i(), a?.();
    }, [i, a]);
    (0, ee.Ay)(() => {
        A &&
            e_.default.track(eG.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != y,
                has_any_premium_group: y?.hasAnyPremiumGroup ?? !1,
                subscription_id: y?.id,
            });
    });
    let $ = (0, lv.A)();
    o.useEffect(() => {
        function e() {
            if (A)
                if (null != y && y.hasAnyPremiumGroup) {
                    e_.default.track(eG.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: y.id });
                    let e = (0, ln.uniqueId)("premium-group-purchase-flow-modal");
                    (0, nl.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("76283"),
                                n.e("634508"),
                                n.e("174630"),
                                n.e("448948"),
                                n.e("485579"),
                            ]).then(n.bind(n, 785606));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    ...t,
                                    subscription: y,
                                    isFromPurchaseFlow: !0,
                                    onClose: async () => {
                                        lk._.dispatch(eG.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await t.onClose();
                                    },
                                });
                        },
                        {
                            onCloseRequest: () => {
                                lk._.dispatch(eG.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, nl.closeModal)(e);
                            },
                            modalKey: e,
                        },
                    );
                } else
                    e_.default.track(eG.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                        has_updated_subscription: null != y,
                        has_any_premium_group: y?.hasAnyPremiumGroup ?? !1,
                    }),
                        lk._.dispatch(eG.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            else
                null != K && K > 0
                    ? (0, lN.$)({ orbsAmount: K })
                    : lO(N, S) && ($?.id === lb.Ym || $?.name?.includes(lb.YX)) && (0, lb.tu)();
        }
        return (
            lk._.subscribe(eG.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                lk._.unsubscribe(eG.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [A, y, K, $, N, S, E]),
        o.useEffect(() => {
            !N || null == b || null == j || M || O || (0, lw.Ik)(b) || L({ onSubscriptionConfirmation: a });
        }, [L, N, b, j, M, O, a]),
        o.useEffect(() => {
            F &&
                null != Y &&
                null != W &&
                (0, l_.qr)(lP.M.GIFTING_PROMOTION_REMINDER, W, { dismissAction: lY.i.INDIRECT_ACTION });
        }, [Y, W, F]);
    let J = null != m ? lL.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != u) t = u(_, Q, y);
    else if (N) t = (0, l.jsx)(lL.fw, { planId: _.id, onClose: Q });
    else {
        let e =
            g === _.id
                ? { postSuccessGuild: c }
                : {
                      followupSKUInfo: d,
                      startingPremiumSubscriptionPlanId: g,
                      isDowngrade: null != E && (0, ew.vT)(E, _.id, r),
                  };
        t = (0, l.jsx)(lL.Ay, {
            planId: _.id,
            onClose: Q,
            paymentSourceType: V,
            hideClose: null != G,
            startingFractionalPremiumEndsAt: v,
            customCTAType: J,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(eW.dZ, { children: [(0, l.jsx)(nG.A, {}), t] }),
            null != G && G,
            q && (0, l.jsx)(lW, { rewardSkuIds: U, onClose: Q, onRewardModalClose: D }),
        ],
    });
}
let [lK, lZ] = (0, u.A)(),
    lq = {
        CHECKOUT_FLOW: r.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [a.pn.REVIEW]: lI.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: i,
                    } = e,
                    r = o.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, l.jsx)(lK.Provider, { value: r, children: (0, l.jsx)(s.Qt, { children: i }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                { guildId: i, listing: r } = lZ();
            return (0, l.jsx)(lA.Y, { onClose: t, listing: r, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(lV, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var lz = n(73825),
    lQ = n(892349),
    l$ = n(35587),
    lJ = n(344159),
    lX = n(594832),
    l0 = n(811656),
    l2 = n(259678),
    l1 = n(890856),
    l4 = n(947641),
    l3 = n(713517),
    l7 = n(929283),
    l6 = n(761365),
    l5 = n(47840);
function l8(e) {
    let t,
        n,
        { skuId: i, user: r, claimed: a, onSelect: s, isSelected: u, disabled: c = !1 } = e,
        [d, m] = o.useState(null),
        p = o.useCallback((e) => {
            m(e);
        }, []),
        C = o.useMemo(() => ({ current: d }), [d]),
        { isHoveringOrFocusing: h } = (0, l3.A)(C),
        f = !a && !c && h,
        { product: S } = (0, nX.q)(i);
    if (null == S) return null;
    let y = S.items[0];
    return null == y
        ? null
        : ((0, n0.T)(y)
              ? ((n = nK.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(l7.i, { item: y, user: r, isHighlighted: f, avatarSize: nz._3.SIZE_96 })))
              : (0, lB.F)(y) &&
                ((n = nK.R.NAMEPLATE),
                (t = (0, l.jsx)(l6.A, { nameplate: y, user: r, isHighlighted: f, size: "small" }))),
          (0, l.jsx)(l2.vN, {
              children: (0, l.jsxs)(l1.s, {
                  ref: p,
                  "aria-label": S.name ?? "",
                  onClick: function () {
                      null == i || null == s || a || c || s(i);
                  },
                  className: e2()(l5._x, { [l5.Vp]: !a, [l5.mr]: f, [l5.md]: u }),
                  children: [
                      (0, l.jsx)("div", {
                          className: e2()(l5.VH, {
                              [l5._Q]: n === nK.R.AVATAR_DECORATION,
                              [l5.M4]: n === nK.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: e2()(l5.i1, { [l5.r9]: a || c }),
                                                children: t,
                                            }),
                                            a &&
                                                (0, l.jsx)(l4.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: e1.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: l5.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: l5.tZ,
                          children: [
                              (0, l.jsx)(e8.D, { variant: "heading-md/extrabold", children: S.name }),
                              (0, l.jsx)(E.E, {
                                  variant: "text-sm/normal",
                                  children: a ? F.intl.string(F.t["6cfuDj"]) : F.intl.string(F.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
}
var l9 = n(332026),
    ie = n(696208),
    it = n(683433);
function il(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: r,
            showBackButton: s,
            planOptions: u,
            shouldRenderUpdatedPaymentModal: c = !1,
            isTrial: d,
            isNextDisabled: m = !1,
            useFullWidthActions: p = !1,
        } = e,
        { paymentSources: C } = (0, P.j)(),
        f = (0, h.A)(),
        { isGift: E, claimableRewards: S } = (0, ny.Pv)();
    i = i ?? C;
    let {
            variant: y,
            text: I,
            onClick: A,
            disabled: g,
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
                c = (0, k.bG)([eC.A], () => eC.A.getPremiumTypeSubscription()),
                d = (0, h.A)(),
                m = (0, ei.s2)(),
                { hasEntitlements: p } = (0, lJ.X)(n, l),
                C = (null != c && null != c.paymentSourceId) || Object.keys(r).length > 0 || (p && !o);
            var f = s ? F.intl.string(F.t.PDTjLN) : F.intl.string(F.t.XqMe3N),
                E = a.pn.ADD_PAYMENT_STEPS;
            return (
                C && (E = a.pn.REVIEW),
                (0, lT.px)(d, l, i) && m !== a.pn.SELECT_FREE_SKU && (E = a.pn.SELECT_FREE_SKU),
                { variant: "primary", text: f, onClick: () => t(E), disabled: u }
            );
        })({
            onStepChange: t,
            selectedPlanId: (n = n ?? f?.id),
            isGift: E,
            claimableRewards: S,
            paymentSources: i,
            shouldRenderUpdatedPaymentModal: c,
            isTrial: d,
            isNextDisabled: m,
        }),
        v = o.useMemo(() => {
            let e =
                null != n && u.includes(n)
                    ? { variant: y, text: I, onClick: A, disabled: g }
                    : { variant: "primary", text: F.intl.string(F.t.XqMe3N), disabled: !0 };
            return p && s && null != r
                ? [{ variant: "secondary", text: F.intl.string(F.t["13/7kX"]), onClick: r }, e]
                : [e];
        }, [y, I, A, g, n, u, p, s, r]);
    return (0, l.jsx)(ie.H, {
        leading: !p && s && null != r ? (0, l.jsx)(it.A, { onClick: r }) : void 0,
        actions: v,
        actionsFullWidth: p,
    });
}
var ii = n(144281);
function ir(e) {
    let { handleStepChange: t } = e,
        n = (0, f.t4)((e) => e.selectedSkuId),
        i = (0, h.A)(),
        r = (0, ei.s2)(),
        {
            selectedGiftingPromotionRewards: s,
            setSelectedGiftingPromotionRewards: u,
            claimableRewards: c,
        } = (0, ny.Pv)(),
        d = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
        m = (0, k.yK)([lj.A], () => lj.A.getGiftPromotionRewardSkuIds()),
        p = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(c, s[0]),
        [E, S] = o.useState(p),
        [y, I] = o.useState(!1);
    o.useEffect(() => {
        y || null != s[0] || null == p || (u([p]), S(p));
    }, [p, y, s, u]);
    let A = { selectedPlan: i, selectedSkuId: n, step: r };
    if (null == i) throw new C.v({ message: "Expected plan to be selected", extraSentryInformation: A });
    if (null == n) throw new C.v({ message: "Expected selectedSkuId", extraSentryInformation: A });
    if (null == r) throw new C.v({ message: "Step should be set", extraSentryInformation: A });
    let g = o.useMemo(() => null != E && (c ?? []).includes(E), [E, c]),
        P = o.useMemo(() => 0 === m.length || null == E || !g, [m, E, g]);
    function v(e) {
        u([e]), S(e), I(!0);
    }
    o.useEffect(() => {
        if (0 === m.length) {
            S(void 0), u([]);
            return;
        }
        (null != E && g && m.includes(E)) || null == E || (S(void 0), u([]));
    }, [m, g, E, u]);
    let x = m.map((e) =>
            (0, l.jsx)(
                l8,
                { skuId: e, claimed: null != c && !c.includes(e), user: d, onSelect: v, isSelected: e === E },
                e,
            ),
        ),
        _ = (0, l.jsx)(eW.UX, {
            children: (0, l.jsx)(il, {
                onStepChange: t,
                onBackClick: () => t(a.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [i.id],
                selectedPlanId: i.id,
                isNextDisabled: P,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nS.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: F.intl.string(F.t.OEtqpm),
                subtitle: F.intl.string(F.t.h2nMp0),
            }),
            (0, l.jsx)(eI.c, { children: (0, l.jsx)("div", { className: ii.Dq, children: x }) }),
            _,
        ],
    });
}
function ia(e) {
    let { handleStepChange: t } = e,
        n = (0, f.t4)((e) => e.selectedSkuId),
        i = (0, f.t4)((e) => e.quantity),
        r = (0, h.A)(),
        s = (0, ei.s2)(),
        {
            setSelectedGiftingPromotionRewards: u,
            selectedGiftingPromotionRewards: c,
            claimableRewards: d,
        } = (0, ny.Pv)(),
        m = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
        p = (0, k.yK)([lj.A], () => lj.A.getGiftPromotionRewardSkuIds()),
        E = Math.min(i, d?.length ?? 0);
    o.useEffect(() => {
        null == d || (E > 0 && E === d.length ? u(d) : c.length > E && u([]));
    }, [d, E, u, c.length]);
    let S = { selectedPlan: r, selectedSkuId: n, step: s };
    if (null == r) throw new C.v({ message: "Expected plan to be selected", extraSentryInformation: S });
    if (null == n) throw new C.v({ message: "Expected selectedSkuId", extraSentryInformation: S });
    if (null == s) throw new C.v({ message: "Step should be set", extraSentryInformation: S });
    let y = o.useMemo(() => E > 0 && c.length === E && c.every((e) => (d ?? []).includes(e)), [c, d, E]),
        I = o.useMemo(() => 0 === p.length || !y, [p, y]);
    function A(e) {
        c.includes(e) ? u(c.filter((t) => t !== e)) : c.length >= E || u([...c, e]);
    }
    o.useEffect(() => {
        if (0 === p.length) return void u([]);
        let e = c.filter((e) => p.includes(e) && (d ?? []).includes(e));
        e.length !== c.length && u(e);
    }, [p, d, c, u]);
    let g = null != d && E > 0 && c.length >= E,
        P = p.map((e) => {
            let t = c.includes(e);
            return (0, l.jsx)(
                l8,
                {
                    skuId: e,
                    claimed: null != d && !d.includes(e),
                    user: m,
                    onSelect: A,
                    isSelected: t,
                    disabled: !t && g,
                },
                e,
            );
        }),
        v = (0, l.jsx)(eW.UX, {
            children: (0, l.jsx)(il, {
                onStepChange: t,
                onBackClick: () => t(a.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [r.id],
                selectedPlanId: r.id,
                isNextDisabled: I,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nS.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: F.intl.string(F.t.B2MCEq),
                subtitle: F.intl.formatToPlainString(F.t.UGXnmY, { rewardCount: c.length, maxRewardCount: E }),
            }),
            (0, l.jsx)(eI.c, { children: (0, l.jsx)("div", { className: ii.Dq, children: P }) }),
            v,
        ],
    });
}
function is(e) {
    return (0, l9.Wh)({ location: "PremiumPaymentFreeSKUSelectStep" })
        ? (0, l.jsx)(ia, { ...e })
        : (0, l.jsx)(ir, { ...e });
}
var io = n(428644),
    iu = n(396533),
    ic = n(699595),
    id = n(403689),
    im = n(67948),
    ip = n(406810),
    iC = n(421108),
    ih = n(807098),
    iE = n(753261),
    iS = n(298305),
    iy = n(270115),
    iI = n(799636);
function iA(e) {
    let { className: t } = e,
        n = (0, k.bG)([lj.A], () => {
            let e = lj.A.getMarketingComponentByType(lg.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: i } = (0, ny.Pv)(),
        r = (0, ih.T)(n?.asset),
        a = (0, ih.T)(n?.backgroundAsset),
        s = (0, k.bG)([lj.A], () => lj.A.getGiftPromotion()),
        o = (0, iC.dA)(s?.endDate),
        { enabled: u } = iE.E.useConfig({ location: "PremiumGiftPromotionPlanSelectBanner" }),
        c = n?.gradient,
        d =
            null != c && null != c.colors && c.colors.length >= 2
                ? (0, lT.K5)({ gradient: c.colors, angle: c.angle ?? void 0 })
                : void 0,
        m = (0, lT.gc)(a);
    null != m && ((m.backgroundSize = "cover, auto"), (m.backgroundPosition = "right center, 0% 0%"));
    let p = (0, lT.x)(m, d),
        C = n?.assetVariant === im.u.LARGE_TILTED;
    return null == n || null == i
        ? null
        : u
          ? (0, l.jsx)(ig, {
                className: t,
                assetUrl: r,
                desktopBody: F.intl.format(iy.default["A/KOOc"], {
                    learnMoreUrl: ty.A.getArticleURL(eG.MVz.NITRO_GIFTING),
                }),
                countdownText: o,
            })
          : (0, l.jsxs)("div", {
                className: e2()(iI.qD, t),
                style: p,
                children: [
                    (0, l.jsx)("div", {
                        className: e2()([iI.my], { [iI.R_]: C }),
                        children: (0, l.jsx)(iS.A, {
                            claimableRewards: i,
                            maxRewardImageSrc: r ?? "",
                            size: C ? nz._3.SIZE_72 : nz._3.SIZE_40,
                            imageScaling: 1.25,
                        }),
                    }),
                    (0, l.jsx)(E.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        children: F.intl.string(F.t.Abiuci),
                    }),
                ],
            });
}
function ig(e) {
    let { className: t, assetUrl: n, desktopBody: i, countdownText: r } = e;
    return (0, l.jsxs)("div", {
        className: e2()(iI.KE, t),
        children: [
            (0, l.jsxs)("div", {
                className: iI.SV,
                children: [
                    null != n && "" !== n && (0, l.jsx)("img", { className: iI.L8, alt: "", src: n }),
                    (0, l.jsx)(E.E, { variant: "text-md/medium", color: "text-default", children: i }),
                ],
            }),
            null != r &&
                (0, l.jsxs)("div", {
                    className: iI.gO,
                    children: [
                        (0, l.jsx)(ip.ClockIcon, { size: "xs", color: "currentColor" }),
                        (0, l.jsx)(E.E, { variant: "text-md/medium", color: "text-default", children: r }),
                    ],
                }),
        ],
    });
}
var iP = n(511484),
    iv = n(462887),
    ix = n(736653),
    i_ = n(854627),
    iT = n(236834);
let iN = (e) => {
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
    ib = (e) => {
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
var ij = n(940223);
let iR = function (e) {
    let { className: t } = e,
        n = (0, iT.A)(),
        { avatarSrc: i, eventHandlers: r } = (0, i_.A)({ userId: n?.id, size: nz._3.SIZE_32, animateOnHover: !0 }),
        a = (0, ix.DP)(),
        s = (0, iv.q)(a),
        o = le.Ay.getName(n);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: e2()(ij.$6, t),
              children: [
                  (0, l.jsx)("div", {
                      className: ij.H,
                      children: (0, l.jsx)(lU.eu, { src: i, "aria-label": n.username, size: nz._3.SIZE_32, ...r }),
                  }),
                  (0, l.jsx)(E.E, {
                      variant: "text-xs/bold",
                      className: ij.U_,
                      children: F.intl.format(F.t.oxhCOl, { userName: o }),
                  }),
                  (0, l.jsx)(s ? iN : ib, { className: ij.q3 }),
              ],
          });
};
var iM = n(73663),
    iO = n(69494),
    iL = n(845012),
    ik = n(597770),
    iw = n(102741),
    iU = n(651540);
function iD(e) {
    let { giftMessage: t = F.intl.string(F.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, ny.Pv)();
    return !n || (0, lw.Ik)(i)
        ? null
        : (0, l.jsx)(iw.A, {
              className: iU.z,
              iconSize: iw.A.Sizes.SMALL,
              icon: ik.GiftIcon,
              color: null == t ? iw.A.Colors.PRIMARY : iw.A.Colors.SECONDARY,
              children: t,
          });
}
var iG = n(577381),
    iF = n(593675);
function iB(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: r, trialId: s, handleClose: u } = e,
        {
            priceOptions: c,
            activeSubscription: d,
            premiumPlanOptions: m,
        } = (0, f.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
        })),
        { isEligibleForTrial: p, isEligibleForDiscount: C, discountOffer: S, userTrialOffer: y } = (0, x.i)(),
        I = (0, iP.YJ)(S),
        A = (0, h.A)(),
        P = (0, ei.s2)(),
        { isGift: v, giftRecipient: _, giftMessage: T, claimableRewards: N } = (0, ny.Pv)(),
        b = (0, lQ.p)("PremiumPaymentPlanSelectStep"),
        j = (0, lT.Mq)(A),
        R = (0, nb.bG)([lj.A], () => {
            let e = lj.A.getMarketingComponentByType(lg.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        M = v && j && null != N && N.length > 0 && R,
        O = (0, lo.F5)("PremiumPaymentPlanSelectStep"),
        { nextTier: L, giftsToNextTier: w } = (0, k.cf)([nW.Ay], () => ({
            nextTier: nW.Ay.getNextTier(nH.$.GIFTING),
            giftsToNextTier: nW.Ay.getRemainingToNextTier(nH.$.GIFTING),
        })),
        U = v && O && null != L,
        { isHidden: D } = id.A.useConfig({ location: `PremiumPaymentPlanSelectStep${v ? "" : " - DO NOT USE"}` }),
        G = !(0, lX.tA)({ isGift: v, giftRecipient: _ }) && !D,
        B = null;
    M
        ? (B = b
              ? (0, l.jsx)("div", {
                    className: e2()(iF.RC, iF.oq, G ? iF.ek : iF.lz),
                    children: (0, l.jsx)(iA, { className: iF.j2 }),
                })
              : (0, l.jsx)(iA, {}))
        : U &&
          (B = (0, l.jsx)("div", {
              className: e2()(iF.RC, G ? iF.ek : iF.lz),
              children: (0, l.jsx)(lu.A, {
                  giftsToNextTier: w,
                  nextTierName: L.name ?? "",
                  nextTierIcon: L.simple_icon_url,
              }),
          }));
    let H = (p || C) ?? !1,
        W = (0, l$.Wi)(eU.ZC),
        Y = H || W,
        V = C && null != I && m.includes(I) ? I : m[0],
        K = (0, nb.bG)([ek.A], () => ek.A.get(V)),
        Z = [{ planId: K?.id, quantity: 1 }],
        [q, z] = o.useState(H),
        [Q, $] = (0, to.YV)({
            items: Z,
            renewal: !1,
            preventFetch: !Y,
            applyEntitlements: !0,
            trialId: s,
            paymentSourceId: c.paymentSourceId,
            currency: c.currency,
        });
    o.useEffect(() => {
        H && z(Q?.subscriptionPeriodEnd == null);
    }, [Q, H]),
        (0, io.A)(
            "Payment Modal Plan Select Step",
            q,
            5,
            { proratedInvoicePreview: Q, proratedInvoiceError: $, isEligibleForOffer: H },
            { tags: { app_context: "billing" } },
        );
    let J = $?.message ?? F.intl.string(F.t.R0RpRX),
        X = H && null == $,
        ee = H && null != $,
        et = X && null == d && Q?.subscriptionPeriodEnd == null;
    (0, ic.W)({ priceOptions: c, trialId: s, discountInvoicePreview: Q });
    let en = (0, iG.i)({ planSkuId: K?.skuId, invoice: Q }),
        { ref: el, onTransitionEnd: er } = (0, iu.A)({ isExpanded: null != en, minHeightOverride: 0 }),
        ea = o.useMemo(
            () =>
                v || K?.skuId !== eU.pe.TIER_2 || y?.referrerId == null
                    ? (0, l.jsx)("div", { ref: el, onTransitionEnd: er, style: { overflow: "hidden" }, children: en })
                    : (0, l.jsx)(iR, { className: iF.ZB }),
            [en, v, K?.skuId, y?.referrerId, el, er],
        ),
        es = o.useMemo(
            () => ({
                planOptions: m,
                selectedPlanId: A?.id,
                planGroup: i,
                subscriptionPeriodEnd: Q?.subscriptionPeriodEnd,
                useCompactGiftComponents: M,
                handleClose: u,
            }),
            [m, A?.id, i, Q?.subscriptionPeriodEnd, M, u],
        );
    if (et) return (0, l.jsx)(g.Ed, { className: iF.QW });
    eZ()(null != P, "Step should be set"), eZ()(m.length > 0, "Premium plan options should be set");
    let eo = v
        ? (0, l.jsx)(iM.$p, { ...es })
        : (0, l.jsx)(iL.X, { ...es, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(iD, { giftMessage: T }),
            !(v && (0, lw.Ik)(_)) && (0, l.jsx)(iO.A, { isEligibleForTrial: p }),
            (0, l.jsxs)(eW.dZ, {
                children: [
                    !b && ea,
                    (0, l.jsx)(nG.A, { className: iF.tg }),
                    ee ? (0, l.jsx)(eq.w, { type: "critical", children: J }) : eo,
                    !b &&
                        X &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: e2()(iF.IM, iF.Go) }),
                                (0, l.jsx)(E.E, {
                                    variant: "text-xs/normal",
                                    children: F.intl.format(F.t.BHtnqA, {
                                        link: ty.A.getArticleURL(eG.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(eW.UX, {
                children: [
                    B,
                    (0, l.jsx)(il, {
                        onStepChange: t,
                        onBackClick: () => t(a.pn.SKU_SELECT),
                        showBackButton: null == n && null == r,
                        planOptions: m,
                        shouldRenderUpdatedPaymentModal: X,
                        isTrial: p,
                        useFullWidthActions: b,
                    }),
                ],
            }),
        ],
    });
}
var iH = n(862990),
    iW = n(672525),
    iY = n(800471),
    iV = n(169801),
    iK = n(876491);
function iZ(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: i,
            priceOptions: r,
            activeSubscription: s,
            defaultPlanId: o,
            referralTrialOfferId: u,
            getIsInOneStepSubscriptionCheckout: c,
        } = (0, f.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            getIsInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout,
        })),
        { hasPaymentSources: d } = (0, P.j)(),
        { isGift: m, claimableRewards: p } = (0, ny.Pv)(),
        C = m && null != p && p.length > 0,
        h = (0, tm.V)(u);
    return (0, l.jsx)(iq, {
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
                    m = (0, O.aZ)(t);
                (m !== eU.pe.TIER_1 && m !== eU.pe.TIER_2) || n !== eU.pe.TIER_0 || r || (d = a.pn.WHAT_YOU_LOSE);
                let p = c({ isTrial: (0, iV.t)({ userTrialOffer: s, isGift: r, skuId: n }), selectedSkuId: n });
                d !== a.pn.WHAT_YOU_LOSE && p && ((d = a.pn.REVIEW), o((0, iY.x)(n, t, u))),
                    i(d, { analyticsDataOverride: { sku_id: n } });
            })({
                getIsInOneStepSubscriptionCheckout: c,
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: m,
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
        isGift: m,
        priceOptions: r,
        showPromotionalGiftBanner: C,
    });
}
function iq(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: a } = e,
        s = (0, iH.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nS.rQ, { titleTextVariant: "heading-lg/semibold", title: F.intl.string(F.t["r+SebU"]) }),
            s
                ? (0, l.jsx)(eI.c, {
                      children: (0, l.jsx)("div", {
                          className: iK.eE,
                          children: (0, l.jsx)(iW.yS, {
                              onSelectSku: (e) => t((0, O.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, l.jsx)(eI.c, {
                      children: (0, l.jsx)("div", {
                          className: iK.a2,
                          children: (0, l.jsx)(iW.Ay, {
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
var iz = n(825484),
    iQ = n(137728);
function i$(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: r,
            activeSubscription: s,
            isInOneStepSubscriptionCheckout: o,
        } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: !1 }),
        })),
        u = null != s ? (0, O.EL)(s) : null,
        c = null != u ? (0, O.RH)(u.planId) : null,
        d = null != u ? (0, O.m6)(u.planId) : null;
    return (
        eZ()(null != d, "Expected premium type"),
        (0, l.jsx)(iQ.A, {
            premiumType: d,
            titleText: F.intl.string(F.t["7VcWW0"]),
            subtitleText: F.intl.format(F.t.Qk34Ik, { subscriptionName: c }),
            footer: (0, l.jsxs)(iz.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(eQ.$, {
                        variant: "primary",
                        text: F.intl.string(F.t["3PatSz"]),
                        onClick: () => {
                            o ? (r((0, iY.x)(i, s)), t(a.pn.REVIEW)) : t(a.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(eQ.$, { variant: "secondary", onClick: n, text: F.intl.string(F.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
var iJ = n(750532);
let iX = [
        {
            key: a.pn.SKU_SELECT,
            renderStep: (e) => (0, l.jsx)(iZ, { ...e }),
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
            renderStep: (e) => (0, l.jsx)(i$, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: a.pn.PLAN_SELECT,
            renderStep: (e) => (0, l.jsx)(iB, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) =>
                    (0, f.t4)((t) => t.getIsInOneStepSubscriptionCheckout({ isTrial: e ?? !1 }))
                        ? null
                        : F.intl.string(F.t["r+SebU"]),
                sectionHeaderText: () => F.intl.string(F.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: a.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, l.jsx)(is, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    i0 = {
        CustomHeaderComponent: iJ.kc,
        CHECKOUT_FLOW: et.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: iX,
        CHECKOUT_STEPS: { [a.pn.REVIEW]: lI.E },
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
                            initialPaymentSourceId: m,
                        },
                        stepConfigs: p,
                        loadId: C,
                        giftContextProps: h = { isGift: !1, giftRecipient: null },
                        renderModalProps: f,
                        children: E,
                    } = e,
                    S = (0, k.bG)([eC.A], () => eC.A.getPremiumTypeSubscription()),
                    y = (0, l$.Sq)() ? eU.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: I, giftRecipient: A } = h;
                if (null != c && !Object.values(eU.pe).includes(c))
                    throw Error("subscriptionTier must be a premium subscription");
                let g = (0, lX.tA)({ giftRecipient: A, isGift: I ?? !1 }),
                    P = o.useMemo(
                        () =>
                            g
                                ? p.map((e) =>
                                      e.key === a.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : p,
                        [p, g],
                    ),
                    v = null != d ? d : S,
                    x = !I && null != v && v.isPurchasedExternally && null != v.paymentGateway;
                (0, lJ.s)(v, () => f.onClose(), I ?? !1);
                let _ = o.useMemo(() => [...eU.oz], []);
                return x
                    ? null
                    : (0, l.jsx)(en.M, {
                          loadId: C,
                          activeSubscription: v,
                          initialPaymentSourceId: m,
                          stepConfigs: P,
                          skuIDs: _,
                          isGift: I,
                          defaultPlanId: y ?? i,
                          referralCode: r,
                          referralTrialOfferId: u,
                          unifiedCheckoutFlow: et.C.PREMIUM_CHECKOUT,
                          tenantParamsMap: t,
                          children: (0, l.jsx)(s.Qt, { confirmationFooter: n, children: E }),
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
                    ek.A.isLoadedForPremiumSKUs() || ng.h.wait(() => (0, lz.zS)());
                }, []);
                let { selectedSkuId: c, purchaseState: d } = (0, f.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    m = (0, ei.s2)(),
                    { isGift: p } = (0, ny.Pv)(),
                    C = (0, lQ.p)("PremiumPaymentModalRenderer"),
                    h = lO(p, c),
                    E = d === eu.h.PURCHASING;
                return (0, l.jsx)(l0.A, {
                    isConfirmationStep: m === a.pn.CONFIRM && null == u && null == s,
                    isEligibleForWowMoment: h,
                    shouldPrefetchWowMoment: E,
                    children: n({
                        ...t,
                        onClose: r,
                        analyticsSubscriptionType: eG.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        modalSizeOverride: C ? "md" : t.modalSizeOverride,
                        planGroup: eU.LE,
                        subscriptionTier: i,
                    }),
                });
            },
            tenantAnalyticsLocation: i.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(lV, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var i2 = n(143582),
    i1 = n(241524),
    i4 = n(19311),
    i3 = n(4126);
let i7 = "(max-width: 485px)";
var i6 = n(875632),
    i5 = n(938430);
function i8(e) {
    let { step: t, onClose: n } = e,
        i = (0, i1.A)("(max-height: 450px)");
    return t === a.pn.CONFIRM || t === a.pn.BENEFITS
        ? (0, l.jsx)("div", {})
        : (0, l.jsxs)("div", {
              className: e2()(i6.N1, np.G),
              children: [
                  !i &&
                      (0, l.jsx)("div", {
                          className: i6.oZ,
                          "aria-hidden": "true",
                          children: (0, l.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: i6.F0,
                          }),
                      }),
                  (0, l.jsx)(nu.D, {
                      className: i6.G3,
                      onClick: () => n(),
                      "aria-label": F.intl.string(F.t.cpT0Cq),
                      children: (0, l.jsx)(nc.P, { size: "md", color: "currentColor", className: i6.ut }),
                  }),
              ],
          });
}
function i9(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: i, application: r, title: a, subtitle: s, description: o } = e;
    return null == r
        ? null
        : (0, l.jsx)("div", {
              className: i6.RP,
              children: (0, l.jsxs)(i3.$K, {
                  children: [
                      (0, l.jsx)(i3.KF, { application: r, asset: t }),
                      (0, l.jsx)(i3.kj, { children: a }),
                      (0, l.jsx)(i3.ri, {}),
                      (0, l.jsx)(i3.Mx, { title: s, description: o }),
                      (0, l.jsx)(i3.iH, { applicationId: r.id, storeListingBenefits: n, skuBenefits: i }),
                  ],
              }),
          });
}
function re(e) {
    let { tierName: t, onConfirm: n, subscription: i } = e;
    return (0, l.jsxs)("div", {
        className: i6.NV,
        children: [
            (0, l.jsx)("img", { src: i5, alt: "", width: 300, height: 126 }),
            (0, l.jsx)(e8.D, {
                className: i6.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: F.intl.format(F.t.wLFT6z, { tier: t }),
            }),
            (0, l.jsx)(E.E, {
                className: i6.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: F.intl.format(F.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, l.jsx)(eW.UX, {
                children: (0, l.jsx)(i4.Ay, {
                    onPrimary: n,
                    primaryCTA: i4.ti.CONTINUE,
                    primaryText: F.intl.string(F.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var rt = n(967198);
let [rn, rl] = (0, u.A)();
function ri(e) {
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
    return (0, l.jsx)(rn.Provider, { value: s, children: i });
}
n(938796);
var rr = n(266060),
    ra = n(163437),
    rs = n(701273),
    ro = n(859860);
function ru(e) {
    let { onConfirm: t, onCancel: n, title: i, subtitle: r, confirmCta: a, showOpenDiscord: s = !0 } = e;
    return (0, l.jsxs)("div", {
        className: ro.RP,
        children: [
            (0, l.jsx)(e8.D, { className: ro.RS, variant: "heading-lg/extrabold", children: i }),
            null != r
                ? (0, l.jsx)(E.E, { className: ro.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, l.jsxs)("div", {
                className: ro.UD,
                children: [
                    s &&
                        (0, l.jsx)(eQ.$, {
                            variant: "primary",
                            text: F.intl.string(F.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, rs.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, l.jsx)(eQ.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, l.jsx)(eQ.$, {
                            variant: "secondary",
                            text: F.intl.string(F.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
}
function rc(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, l.jsxs)("div", {
        className: ro.RP,
        children: [
            (0, l.jsx)(e8.D, {
                className: ro.RS,
                variant: "heading-lg/extrabold",
                children: F.intl.format(F.t.wLFT6z, { tier: n }),
            }),
            (0, l.jsx)(E.E, {
                className: ro.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: F.intl.format(F.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, l.jsxs)("div", {
                className: ro.UD,
                children: [
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ro.__invalid_openDiscordButton,
                        children: (0, l.jsx)(eQ.$, {
                            variant: "primary",
                            text: F.intl.string(F.t["8L5bZG"]),
                            onClick: () => (0, rs.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, l.jsx)(eQ.$, { variant: "secondary", text: F.intl.string(F.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function rd(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, rr.K)(),
        { subscriptionMetadataRequest: r } = rl(),
        { application: s } = (0, nR.V)(),
        u = (0, nM.S3)(),
        c = (0, i1.A)(i7),
        d = (0, k.bG)([em.A], () => em.A.getGuild(r?.guild_id)),
        m = o.useCallback(() => t(a.pn.REVIEW), [t]);
    if (null == u) return null;
    let p = (0, ra.bg)(u.flags);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eW.dZ, {
                children: c
                    ? (0, l.jsx)(ru, {
                          confirmCta: F.intl.string(F.t.PBHFSq),
                          onConfirm: m,
                          onCancel: n,
                          title: F.intl.format(F.t["6n6oXA"], { tier: u.name }),
                          subtitle: p
                              ? F.intl.string(F.t.lzAoKB)
                              : F.intl.formatToPlainString(F.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, l.jsx)(i9, {
                          icon: i?.thumbnail,
                          storeListingBenefits: i?.benefits,
                          application: s ?? void 0,
                          title: F.intl.format(F.t.haiCxc, { tier: u.name }),
                          subtitle: p ? F.intl.string(F.t.RvtbP5) : F.intl.string(F.t.zY39Zu),
                          description: p
                              ? F.intl.formatToPlainString(F.t.QCe4rY, { applicationName: s?.name })
                              : F.intl.string(F.t.n1Pu8C),
                      }),
            }),
            !c &&
                (0, l.jsx)(eW.UX, {
                    children: (0, l.jsx)(i4.Ay, {
                        onBack: n,
                        backText: F.intl.string(F.t.TQBY1J),
                        onPrimary: m,
                        primaryCTA: i4.ti.CONTINUE,
                        primaryText: F.intl.string(F.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var rm = n(21161);
function rp(e) {
    let t,
        n,
        { handleClose: i, onSubscriptionConfirmation: r } = e,
        s = (0, rr.K)(),
        { application: u } = (0, nR.V)(),
        { readySlideId: c, updatedSubscription: d } = (0, f.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        m = (0, nM.S3)(),
        p = (0, i1.A)(i7),
        { createMultipleConfettiAt: C } = o.useContext(rm.x),
        h = m?.name ?? "";
    function E() {
        i(), r?.();
    }
    let S = c === a.pn.CONFIRM,
        y = (0, ra.bg)(m?.flags ?? 0),
        I =
            null != s && s.benefits.length > 0
                ? F.intl.formatToPlainString(F.t["+IQQVM"], { benefitCount: s.benefits.length })
                : null,
        { showBenefitsFirst: A } = rl();
    return (
        A
            ? (t = p
                  ? (0, l.jsx)(rc, { tierName: h, onConfirm: E, subscription: d })
                  : (0, l.jsx)(re, { tierName: h, onConfirm: E, subscription: d }))
            : p
              ? (t = (0, l.jsx)(ru, {
                    title: F.intl.format(F.t.ea6tZr, { tierName: h }),
                    subtitle:
                        null != s && s.benefits.length > 0
                            ? F.intl.formatToPlainString(F.t.HNepft, { benefits: I })
                            : null,
                    onConfirm: E,
                    confirmCta: F.intl.string(F.t.nlkywz),
                }))
              : ((t =
                    null != s && null != u
                        ? (0, l.jsx)(i9, {
                              icon: s.thumbnail,
                              storeListingBenefits: s.benefits,
                              application: u,
                              title: F.intl.format(F.t["Q+qktS"], { tier: h }),
                              subtitle: F.intl.string(F.t.ECKxXU),
                              description: y
                                  ? F.intl.format(F.t["MAtQk/"], { applicationName: u?.name })
                                  : F.intl.format(F.t.vHkMF4, { tier: h }),
                          })
                        : (0, l.jsx)(ev.A, {})),
                (n = (0, l.jsx)(i4.Ay, {
                    onPrimary: E,
                    primaryCTA: i4.ti.CONTINUE,
                    primaryText: F.intl.string(F.t["JtWl+a"]),
                }))),
        o.useEffect(() => {
            nj.Ay.useReducedMotion && S && C(window.innerWidth / 2, window.innerHeight / 2);
        }, [C, S]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(eW.dZ, { children: [(0, l.jsx)(nG.A, {}), t] }),
                null != n && (0, l.jsx)(eW.UX, { children: n }),
            ],
        })
    );
}
function rC(e) {
    let { initialPlanId: t, setAnalyticsData: n } = e,
        {
            selectedSkuId: i,
            setSelectedSkuId: r,
            setSelectedPlanId: s,
            priceOptions: u,
        } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        {
            hasFetchedRelatedSubscriptionPlans: c,
            subscriptionPriceOptionsLoading: d,
            displayCurrency: m,
        } = (0, eP.Jn)(),
        { setSubscriptionMetadataRequest: p, guildId: C, showBenefitsFirst: h } = rl(),
        E = (0, eA.Hp)(),
        S = (0, ex.A)(),
        y = (0, ei.qv)(),
        { isGift: I } = (0, ny.Pv)(),
        A = h ? a.pn.BENEFITS : a.pn.REVIEW,
        [g, P] = o.useState(!S || !c || d);
    return (o.useEffect(() => {
        P(!S || !c || d);
    }, [d, c, S]),
    o.useEffect(() => {
        null != C && p({ guild_id: C });
    }, [C, p]),
    o.useEffect(() => {
        s(t);
        let e = null != t ? ek.A.get(t) : null;
        g ||
            E ||
            (n((t) => {
                let n = null != e ? (0, O.y8)(e.id, !1, I, { paymentSourceId: u.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: m };
            }),
            null != e && (r(e?.skuId), y(A)));
    }, [E, t, I, g, u, m, i, n, s, r, y, A]),
    g)
        ? (0, l.jsx)(ev.A, {})
        : E
          ? (0, l.jsx)(eg.oO, {})
          : null;
}
var rh = n(786948),
    rf = n(970904),
    rE = n(766383);
let rS = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: l } = e;
        return {
            variant: "active",
            text: F.intl.string(F.t.YScQSF),
            dataTestId: "purchase",
            onClick: t,
            loading: n,
            disabled: l,
        };
    },
    ry = {
        CHECKOUT_FLOW: et.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(rC, { ...e }) },
        CustomHeaderComponent: function (e) {
            let { step: t, onClose: n } = e,
                i = o.useCallback(() => n(!1), [n]);
            return (0, l.jsx)(i8, { step: t, onClose: i });
        },
        STEPS_BEFORE_CHECKOUT: [
            {
                key: a.pn.BENEFITS,
                renderStep: (e) => (0, l.jsx)(rd, { ...e }),
                options: { useBreadcrumbLabel: () => F.intl.string(F.t["5LD2+B"]) },
            },
        ],
        CHECKOUT_STEPS: {
            [a.pn.REVIEW]: function (e) {
                let { handleStepChange: t, planGroup: n, openInvoiceId: i, analyticsData: r, analyticsLocation: s } = e,
                    {
                        purchaseState: u,
                        contextMetadata: c,
                        purchaseError: d,
                        activeSubscription: m,
                        selectedPlanId: p,
                    } = (0, f.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        contextMetadata: e.contextMetadata,
                        purchaseError: e.purchaseError,
                        activeSubscription: e.activeSubscription,
                        selectedPlanId: e.selectedPlanId,
                    })),
                    { subscriptionMetadataRequest: E, showBenefitsFirst: S } = rl(),
                    y = S ? a.pn.BENEFITS : void 0,
                    I = (0, h.A)(),
                    A = (0, nM.S3)();
                if (null == I)
                    throw new C.v({
                        message:
                            "ApplicationPaymentReviewStep: expected plan to be selected, but selected plan is null",
                        extraSentryInformation: { selectedPlan: I, selectedPlanId: p },
                    });
                let g = o.useRef(null),
                    P = (0, ra.bg)(A?.flags ?? 0);
                o.useEffect(() => {
                    null != d && null != g.current && g.current.scrollIntoView({ behavior: "smooth" });
                }, [d]);
                let v = o.useCallback(() => {
                    t(a.pn.ADD_PAYMENT_STEPS);
                }, [t]);
                return u === eu.h.PURCHASING
                    ? (0, l.jsx)(ev.A, {})
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(eW.dZ, {
                                  children:
                                      null == m
                                          ? (0, l.jsx)(rE._, {
                                                planGroup: n,
                                                handlePaymentSourceAdd: v,
                                                metadata: P ? void 0 : E,
                                            })
                                          : (0, l.jsx)(rf.A, {
                                                handlePaymentSourceAdd: v,
                                                planGroup: n,
                                                hasOpenInvoice: null != i,
                                            }),
                              }),
                              (0, l.jsx)(eW.UX, {
                                  children: (0, l.jsx)(rh.U, {
                                      resolveTenantReviewButtonProps: rS,
                                      onBack: () => null != y && t(y),
                                      handleStepChange: t,
                                      postPurchaseStep: a.pn.CONFIRM,
                                      analyticsLocation: s,
                                      baseAnalyticsData: r,
                                      flowStartTime: c.startTime,
                                      planGroup: n,
                                      openInvoiceId: i,
                                      metadata: P ? void 0 : E,
                                      backButtonEligible: !!S || void 0,
                                      disablePurchase: E?.guild_id == null && !P,
                                      onPaymentSourceAdd: v,
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
                return (0, l.jsx)(ri, {
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
                                    (t6.hP(),
                                    (0, i2.f5)(i),
                                    null != a && a(),
                                    null != i && (l || rt.A.getGuildId() !== i) && (0, lp.pX)(eG.BVt.CHANNEL(i)));
                        },
                        [r, a, l, i],
                    );
                return n({ ...t, onClose: s, forceNewPaymentModal: !0 });
            },
            tenantAnalyticsLocation: i.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(rp, { ...e }) },
    };
var rI = n(237412),
    rA = n(869038),
    rg = n(852218),
    rP = n(7133),
    rv = n(83617);
let [rx, r_] = (0, u.A)();
function rT(e) {
    let { code: t, onClose: n, children: i } = e,
        r = (0, k.bG)([eC.A], () => eC.A.getMostRecentPremiumTypeSubscription()),
        s = (0, k.bG)([eC.A], () => eC.A.hasFetchedMostRecentPremiumTypeSubscription()),
        u = (0, k.bG)([eC.A], () => eC.A.getPremiumTypeSubscription()),
        [c, d] = o.useState(!1),
        [m, p] = o.useState(null),
        [C, h] = o.useState(null),
        [E, S] = o.useState(!1),
        [y, I] = o.useState(!1);
    o.useEffect(() => {
        c ||
            (0, lw.GM)(t, !1, !0)
                .then((e) => {
                    let t = rP.A.createFromServer(e);
                    p(t), d(!0), S(t.promotion?.promotionType === rg.pt.THIRD_PARTY_DIRECT_FULFILLMENT);
                })
                .catch((e) => {
                    h(e), d(!0);
                }),
            s || (0, t6.I8)();
    }, [t, s, c]);
    let A = (0, eT._V)(),
        { paymentSources: g, paymentSourceId: P, paymentAuthenticationState: v, setIsSubmittingCurrentStep: x } = A,
        _ = (0, ei.qv)(),
        T = (0, ei.s2)(),
        {
            setPurchaseState: N,
            setPurchaseError: b,
            purchaseState: j,
            contextMetadata: M,
        } = (0, f.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            purchaseState: e.purchaseState,
            contextMetadata: e.contextMetadata,
        })),
        { displayCurrency: O } = (0, eP.Jn)(),
        L = (0, ta.sw)(),
        w = m?.subscriptionPlan,
        U = m?.promotion,
        D = m?.subscriptionTrial,
        G = null != w ? (0, rv._w)(w, P, !1) : [],
        F = L?.currency ?? O ?? G[0],
        B = o.useMemo(() => (null != P ? { paymentSourceId: P, currency: F } : { currency: F }), [P, F]),
        H = o.useMemo(
            () => ({
                load_id: M.loadId,
                location: eG.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                subscription_type: eG.rzx.PREMIUM,
                payment_type: tT.fr[tT.VV.SUBSCRIPTION],
                subscription_plan_id: w?.id,
                sku_id: w?.skuId,
                checkout_flow: et.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            }),
            [M.loadId, w?.id, w?.skuId],
        ),
        W = o.useCallback(() => {
            n?.(j === eu.h.COMPLETED);
        }, [n, j]),
        Y = o.useCallback(async () => {
            let e = (0, R.W)(g, P);
            if (null == e) return !1;
            x(!0), b(null), N(eu.h.PURCHASING);
            try {
                return (
                    await rA.A.redeemGiftCode({ code: t, options: { paymentSource: e } }),
                    N(eu.h.COMPLETED),
                    e_.default.track(eG.HAw.PAYMENT_FLOW_COMPLETED, { ...H }),
                    !0
                );
            } catch (t) {
                return (
                    N(eu.h.FAIL),
                    b(t),
                    e_.default.track(eG.HAw.PAYMENT_FLOW_FAILED, {
                        ...H,
                        payment_error_code: t?.code,
                        payment_source_id: e.id,
                    }),
                    !1
                );
            } finally {
                x(!1);
            }
        }, [H, t, P, g, x, b, N]),
        V = o.useRef(!1),
        K = o.useCallback(() => {
            V.current ||
                ((V.current = !0),
                Y()
                    .then((e) => {
                        _(e ? a.pn.CONFIRM : a.pn.REVIEW);
                    })
                    .finally(() => {
                        V.current = !1;
                    }));
        }, [Y, _]);
    return (
        (0, ed.QR)(v),
        (0, ed.b)(T, v, _, N, !0, K),
        (0, l.jsx)(rx.Provider, {
            value: {
                code: t,
                giftCode: m,
                plan: w,
                promotion: U,
                trial: D,
                isDirectFulfillment: E,
                hasResolvedGiftCode: c,
                giftCodeResolveError: C,
                hasFetchedMostRecentPremiumTypeSubscription: s,
                recentSubscription: r,
                premiumSubscription: u,
                paymentModalArgs: A,
                priceOptions: B,
                analyticsData: H,
                handleClose: W,
                redeemPromotion: Y,
                confirmedUpgrade: y,
                setConfirmedUpgrade: I,
            },
            children: i,
        })
    );
}
var rN = n(830215),
    rb = n(264779),
    rj = n(314019),
    rR = n(554632);
function rM(e) {
    let { user: t, code: n, className: i } = e;
    return (0, l.jsx)(E.E, {
        className: e2()(i, rj.iZ),
        variant: "text-md/normal",
        children: F.intl.format(F.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, l.jsx)(
                    lU.eu,
                    {
                        className: rj.FL,
                        size: nz._3.SIZE_24,
                        src: t.getAvatarURL(null, 24),
                        "aria-label": le.Ay.getUserTag(t, { decoration: "never" }),
                    },
                    n,
                );
            },
            tag: le.Ay.getUserTag(t),
            logoutHook: () => {
                rN.A.logout("inbound_promotion_redemption_modal", eG.BVt.BILLING_PROMOTION_REDEMPTION(n));
            },
        }),
    });
}
function rO(e) {
    let { promotion: t, code: n, isDirectFulfillment: i } = e,
        r = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
        a = (0, ix.Ay)(),
        s = (0, rb.WD)(t.id, a);
    return (0, l.jsxs)("div", {
        className: rj.rN,
        children: [
            (0, l.jsxs)("div", {
                className: rj.u5,
                children: [
                    (0, l.jsx)("img", { alt: "", src: s, className: rj.hb }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(e8.D, {
                                variant: "heading-xl/bold",
                                className: rj.DD,
                                children: t.inboundHeaderText,
                            }),
                            (0, l.jsx)(E.E, {
                                variant: "text-sm/normal",
                                className: rj.G3,
                                children: t.inboundBodyText,
                            }),
                        ],
                    }),
                ],
            }),
            i || null == r ? null : (0, l.jsx)(rM, { className: rj.KZ, user: r, code: n }),
        ],
    });
}
function rL(e) {
    let { title: t, bodyText: n, helpCenterLink: i, showUser: r = !1, user: a, code: s, handleClose: u } = e,
        c = o.useMemo(() => ({ text: F.intl.string(F.t.BddRzS), onClick: u }), [u]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: rj.t4,
                children: [
                    (0, l.jsx)("img", { alt: "", src: rR, className: rj.M6 }),
                    (0, l.jsx)(e8.D, { variant: "heading-lg/semibold", className: rj.DD, children: t }),
                    (0, l.jsx)(E.E, { variant: "text-md/normal", className: rj.G3, children: n }),
                    null != i
                        ? (0, l.jsx)(E.E, {
                              variant: "text-md/normal",
                              className: rj.G3,
                              children: F.intl.format(F.t["4uSp2y"], { helpCenterLink: i }),
                          })
                        : null,
                    r && null != a ? (0, l.jsx)(rM, { className: rj.EF, user: a, code: s }) : null,
                ],
            }),
            (0, l.jsx)(ea.lo, { primaryButtonProps: c }),
        ],
    });
}
function rk(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            code: i,
            giftCode: r,
            plan: s,
            promotion: u,
            trial: c,
            hasResolvedGiftCode: d,
            giftCodeResolveError: m,
            hasFetchedMostRecentPremiumTypeSubscription: p,
            recentSubscription: C,
        } = r_(),
        h = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
        f = (0, eA.Hp)(),
        E = !d || !p,
        S = (function (e) {
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
                    title: F.intl.string(F.t.ARIsMA),
                    body: F.intl.string(F.t.oDWkjN),
                    showUser: !0,
                    errorCode: eU.JR.USER_NOT_VERIFIED,
                };
            if (null != l && l.code === eG.t02.INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED)
                return {
                    title: F.intl.string(F.t.BHxy59),
                    body: F.intl.string(F.t["1wokFq"]),
                    errorCode: eU.JR.PREVIOUS_SUBSCRIBER,
                };
            if (null == n)
                return {
                    title: F.intl.string(F.t.ARIsMA),
                    body:
                        null != l && l.code === eG.t02.INVALID_GIFT_REDEMPTION_INCORRECT_USER
                            ? F.intl.string(F.t.S8TNKh)
                            : F.intl.string(F.t["1AceQR"]),
                    errorCode: eU.JR.NO_CODE_BODY,
                };
            if (null != l || null == a || null == s || null == r)
                return {
                    title: F.intl.string(F.t.ARIsMA),
                    body: F.intl.string(F.t["3u+6q7"]),
                    errorCode: eU.JR.NO_PROMOTION,
                };
            if (n.isClaimed)
                return {
                    title: F.intl.string(F.t.ARIsMA),
                    body: F.intl.string(F.t.u9IQuM),
                    errorCode: eU.JR.CODE_CLAIMED,
                };
            if (null == i) return null;
            let o = (0, O.EL)(i)?.planId;
            return null != o && i.status === eG.Dmq.ACTIVE && O.Ay.getPremiumType(o) === eU.PremiumTypes.TIER_2
                ? {
                      title: F.intl.string(F.t.BHxy59),
                      body: F.intl.formatToPlainString(F.t.wpwuoV, {
                          months: s.intervalCount,
                          planName: (0, O.RH)(r.id),
                      }),
                      errorCode: eU.JR.EXISTING_SUBSCRIBER,
                  }
                : null;
        })({ user: h, giftCode: r, giftCodeResolveError: m, recentSubscription: C, plan: s, promotion: u, trial: c });
    return (o.useEffect(() => {
        E ||
            e_.default.track(eG.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
                is_eligible: null == S && !f,
                error_code: null != S ? S.errorCode : f ? eU.JR.BLOCKED_PAYMENT : null,
                promotion_id: r?.promotion?.id,
            });
    }, [E, S, f, r]),
    o.useEffect(() => {
        E || null != S || f || t(a.pn.PROMOTION_INFO);
    }, [E, S, f, t]),
    E)
        ? (0, l.jsx)(ev.A, {})
        : null != S
          ? (0, l.jsx)(rL, {
                title: S.title,
                bodyText: S.body,
                helpCenterLink: u?.inboundHelpCenterLink ?? "",
                showUser: S.showUser,
                handleClose: n,
                user: h ?? void 0,
                code: i,
            })
          : f
            ? (0, l.jsx)(eg.oO, {})
            : null;
}
function rw(e) {
    let { plan: t, isDirectFulfillment: n, paymentModalArgs: i, handleClose: r } = r_();
    eZ()(null != t, "Missing plan");
    let { paymentSources: a, paymentSourceId: s } = i,
        o = (0, R.g)(a, s);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eW.dZ, {
                children: (0, l.jsx)(lL.Ay, { hideClose: !0, planId: t.id, onClose: r, paymentSourceType: o }),
            }),
            n
                ? (0, l.jsx)(eW.UX, {
                      children: (0, l.jsx)(ie.H, {
                          actions: [{ text: F.intl.string(F.t.UQvCf7), variant: "primary", onClick: r, size: "md" }],
                      }),
                  })
                : null,
        ],
    });
}
function rU(e) {
    let { handleStepChange: t } = e,
        { promotion: n, code: i, isDirectFulfillment: r } = r_();
    return (
        eZ()(null != n, "Missing promotion"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(eW.dZ, { children: (0, l.jsx)(rO, { promotion: n, code: i, isDirectFulfillment: r }) }),
                (0, l.jsx)(eW.UX, {
                    children: (0, l.jsx)(ea.lo, {
                        primaryButtonProps: { text: F.intl.string(F.t.PDTjLN), onClick: () => t(a.pn.REVIEW) },
                    }),
                }),
            ],
        })
    );
}
var rD = n(732159),
    rG = n(262427),
    rF = n(134638);
let rB = { headerBadgePreset: "trial" };
function rH(e) {
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
                    ? [F.intl.string(V.default.R0cZsM), void 0]
                    : [F.intl.string(V.default.R0cZsM), (0, L.$g)(0, n.currency)],
            [n],
        );
    if (null == n) return (0, l.jsx)(g.Ed, { shouldShowUnifiedHeader: !0 });
    let m = r
            ? [{ key: "fractional-premium-notice", directContent: (0, l.jsx)(rW, { fractionalPremiumInfo: a }) }]
            : null,
        p = (0, l.jsx)(rY, { plan: t, renewalInvoicePreview: n }),
        C = (0, l.jsx)(rV, { renewalInvoicePreview: n, subscriptionTrial: i });
    return (0, l.jsx)(g.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: rB,
        upperInlineNoticeProps: m,
        purchaseItemContent: p,
        subscriptionDetailsContent: C,
        invoiceSummaryContent: null,
        paymentMethodContent: s,
        legalContent: u,
        invoiceTotalDueLabel: c,
        invoiceTotalDueValue: d,
        promotionalNoticeContent:
            null != i &&
            (0, l.jsx)(rG.J, {
                text: F.intl.format(F.t.A1MiZN, { months: i.intervalCount, planName: (0, O.RH)(t.id) }),
            }),
    });
}
function rW(e) {
    let { fractionalPremiumInfo: t } = e,
        n = (0, tC.NQ)({ fractionalPremiumInfo: t, variant: tC.uA.TRIAL });
    return null != n && "" !== n ? (0, l.jsx)(eq.w, { type: "info", children: n }) : null;
}
function rY(e) {
    let { plan: t, renewalInvoicePreview: n } = e;
    return (0, l.jsx)(rF._, {
        type: v.u$.PREMIUM_WITH_TRIAL,
        invoicePreview: n,
        subscriptionPlan: t,
        isPrepaidPaymentSource: !1,
    });
}
function rV(e) {
    let { renewalInvoicePreview: t, subscriptionTrial: n } = e;
    if (null == t) return (0, l.jsx)(tn.y, {});
    let i = (0, j.Gj)(null, t, n, { isSubscriptionUpdate: !1 });
    return (0, l.jsx)(U._D, { ...i, defaultExpanded: !0 });
}
let rK = [...eU.oz],
    rZ = [
        {
            key: a.pn.PROMOTION_INFO,
            renderStep: (e) => (0, l.jsx)(rU, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    ],
    rq = {
        CHECKOUT_FLOW: et.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(rk, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
        STEPS_BEFORE_CHECKOUT: rZ,
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
                        confirmedUpgrade: m,
                        setConfirmedUpgrade: p,
                        handleClose: C,
                    } = r_();
                eZ()(null != i && null != r, "Missing plan or trial");
                let { paymentSources: h, paymentSourceId: S, setPaymentSourceId: y, isSubmittingCurrentStep: A } = c,
                    g = (0, k.bG)([eC.A], () => eC.A.getPremiumTypeSubscription()),
                    { analyticsLocations: P } = (0, ti.Ay)(),
                    { hasAcceptedTerms: v, checkoutPaymentSources: x } = (0, f.t4)((e) => ({
                        hasAcceptedTerms: e.hasAcceptedTerms,
                        checkoutPaymentSources: e.get("checkoutPaymentSources"),
                    })),
                    _ = (0, tr.A)(),
                    { immediateDelivery: N } = (0, T.U)(),
                    [b, M] = (0, to.YV)({
                        items: [{ planId: i.id, quantity: 1 }],
                        renewal: !0,
                        paymentSourceId: S,
                        code: n,
                        subscriptionId: g?.id,
                        analyticsLocations: P,
                        analyticsLocation: eG.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                    });
                (0, ta.F0)(b, M);
                let w = (0, ta.sw)(),
                    D = o.useCallback(async () => {
                        function e() {
                            return t(a.pn.CONFIRM);
                        }
                        null == g || m || null == r || null == s
                            ? (await d()) && e()
                            : (0, nl.openModal)((t) => {
                                  let n;
                                  if (null == w) n = (0, l.jsx)(tn.y, { className: rj.wG });
                                  else {
                                      let e = (0, O.y8)(i.id, !1, !1, u);
                                      n = (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(E.E, {
                                                  className: rj.ex,
                                                  variant: "text-md/normal",
                                                  children: F.intl.format(F.t.DLsu0k, {
                                                      lineItemsHook: function (e, t) {
                                                          return (0, l.jsx)(
                                                              "ul",
                                                              {
                                                                  children: g.items.map((e) => {
                                                                      let t = eU.hd[e.planId],
                                                                          n = F.intl.formatToPlainString(F.t.G0EnAP, {
                                                                              quantity: e.quantity,
                                                                              lineItem: t.name,
                                                                          });
                                                                      return (0, l.jsx)(
                                                                          "li",
                                                                          { children: n },
                                                                          `${g.id}-${e.planId}`,
                                                                      );
                                                                  }),
                                                              },
                                                              t,
                                                          );
                                                      },
                                                      newPlanName: eU.hd[i.id].name,
                                                  }),
                                              }),
                                              (0, l.jsx)(E.E, {
                                                  className: rj.ex,
                                                  variant: "text-sm/normal",
                                                  children: F.intl.format(F.t.KHvyu5, {
                                                      newPlanName: eU.hd[i.id].name,
                                                      trialMonths: r.intervalCount,
                                                      helpCenterLink:
                                                          s.inboundHelpCenterLink ?? ty.A.getArticleURL(eG.MVz.BILLING),
                                                      planPrice: (0, L.$g)(e.amount, w.currency),
                                                  }),
                                              }),
                                          ],
                                      });
                                  }
                                  return (0, l.jsx)(rD.ConfirmModal, {
                                      onConfirm: async () => {
                                          p(!0), (await d()) && e();
                                      },
                                      title: F.intl.string(F.t.MaZ28z),
                                      cancelText: F.intl.string(F.t["ETE/oC"]),
                                      confirmText: F.intl.string(F.t["wfx/Hp"]),
                                      ...t,
                                      variant: "primary",
                                      children: n,
                                  });
                              });
                    }, [t, g, m, r, s, i, u, w, d, p]),
                    G = (0, tg.iB)({
                        checkoutPaymentSources: x,
                        paymentSourceId: S,
                        location: "InboundPromotionReviewStep",
                    }),
                    B = (0, eO.Y)(),
                    H = (0, R.W)(h, S),
                    W = o.useMemo(
                        () => ({
                            prependOption:
                                0 === Object.keys(h).length ? { label: F.intl.string(F.t.iA5vA1), value: null } : null,
                            isTrial: !0,
                        }),
                        [h],
                    );
                if (null != M && null == w)
                    return (0, l.jsx)(rL, {
                        title: F.intl.string(F.t.ARIsMA),
                        bodyText: F.intl.string(F.t["3u+6q7"]),
                        helpCenterLink: s?.inboundHelpCenterLink ?? "",
                        handleClose: C,
                        user: void 0,
                        code: n,
                    });
                if (!B || null == w) return (0, l.jsx)(tn.y, {});
                let Y = (0, l.jsx)(I.N, {
                        setPaymentSourceId: y,
                        paymentSourceId: S,
                        location: "InboundPromotionReview",
                        label: F.intl.string(F.t["mmDvV+"]),
                        additionalPaymentSourceDropdownProps: W,
                        onPaymentSourceAdd: () => t(a.pn.ADD_PAYMENT_STEPS),
                        hideCurrencySelect: !0,
                    }),
                    V = (0, t_.de)({ renewalInvoice: w, isSubscriptionUpdate: !1 }),
                    { renewalPrice: K, multiPeriodDiscountAttributes: Z } = (0, j.QM)(w, i, {
                        discountOffer: null,
                        subscriptionTrial: r,
                    }),
                    q = F.intl.formatToPlainString(F.t.BQPav6, { planPremiumType: O.Ay.getDisplayName(i.id) }),
                    z = (0, l.jsx)(U._P, {
                        variant: {
                            type: U.I0.SubscriptionTrial,
                            purchaseButtonText: q,
                            totalDue: 0,
                            renewalPrice: K,
                            currency: w.currency,
                            interval: i.interval,
                            intervalCount: i.intervalCount,
                            startDate: V,
                            multiPeriodDiscountAttributes: Z,
                        },
                        paymentSourceType: (0, R.W)(h, S)?.type ?? null,
                        immediateDelivery: N,
                    }),
                    Q = null;
                return (
                    null == H ? (Q = F.intl.string(F.t.L7jbQV)) : v || (Q = F.intl.string(F.t.XdvBLS)),
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsxs)(eW.dZ, {
                                children: [
                                    (0, l.jsx)(nG.A, {}),
                                    (0, l.jsx)(rH, {
                                        plan: i,
                                        renewalInvoicePreview: w,
                                        subscriptionTrial: r,
                                        shouldShowFractionalPremiumBanner: _.isFractionalPremiumActive,
                                        fractionalPremiumInfo: _,
                                        paymentMethodContent: Y,
                                        legalContent: z,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(eW.UX, {
                                children: (0, l.jsx)(ea.lo, {
                                    onBackClick: () => t(a.pn.PROMOTION_INFO),
                                    primaryButtonProps: {
                                        text: q,
                                        tooltipText: Q ?? void 0,
                                        disabled: null == H || !H.canRedeemTrial() || G || !v,
                                        loading: A,
                                        onClick: () => {
                                            if (null != H && v) return D();
                                        },
                                        variant: (0, i4.CY)(i4.ti.PURCHASE),
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
                    o = (0, k.bG)([eC.A], () => eC.A.getPremiumTypeSubscription());
                return (0, l.jsx)(en.M, {
                    activeSubscription: o,
                    stepConfigs: n,
                    skuIDs: rK,
                    loadId: i,
                    unifiedCheckoutFlow: et.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
                    children: (0, l.jsx)(s.Qt, { children: (0, l.jsx)(rT, { code: t, onClose: r, children: a }) }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
                return n({ ...t, shakeWhilePurchasing: !0, tenantManagesPaymentAuth: !0 });
            },
        },
        CustomHeaderComponent: function (e) {
            let { step: t } = e,
                { plan: n, handleClose: i } = r_(),
                r = (0, f.t4)((e) => e.purchaseState);
            return (0, l.jsx)(rI.A, {
                enablePremiumBrandRefresh: !0,
                forceBrandRefreshHeader: !0,
                premiumType: n?.premiumSubscriptionType ?? eU.PremiumTypes.TIER_2,
                className: rj.X9,
                currentStep: t,
                purchaseState: r,
                hideCloseButton: !0,
                onClose: i,
            });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(rw, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    };
var rz = n(694306);
function rQ(e) {
    let { handleClose: t } = e,
        n = (0, f.t4)((e) => e.selectedSkuId),
        { application: i } = (0, nR.V)(),
        r = (0, nM.gU)(),
        { isGift: a, giftRecipient: s } = (0, ny.Pv)();
    eZ()(null != n, "Expected selectedSkuId"), eZ()(null != i, "Expected application");
    let o = r[n];
    eZ()(null != o, "Expected sku");
    let u = a
        ? F.intl.formatToPlainString(F.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: s?.username ?? "your recipient",
          })
        : F.intl.formatToPlainString(F.t.wK0IbP, { applicationName: i.name, itemName: o.name });
    return (0, l.jsxs)(eW.dZ, {
        children: [
            (0, l.jsx)(nG.A, {}),
            (0, l.jsxs)("div", {
                className: rz.EL,
                children: [
                    (0, l.jsx)(e8.D, { variant: "heading-xxl/bold", className: rz.RS, children: "Success!" }),
                    (0, l.jsx)(E.E, { variant: "text-md/normal", children: u }),
                    (0, l.jsx)("div", { className: rz.yF }),
                    (0, l.jsx)(eQ.$, { onClick: t, text: F.intl.string(F.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var r$ = n(67480),
    rJ = n(328968),
    rX = n(371794),
    r0 = n(78741);
a.pn.GIFT_CUSTOMIZATION;
let r2 = {
    CustomHeaderComponent: function (e) {
        let { step: t, onClose: n } = e,
            i = o.useCallback(() => n(!1), [n]);
        return (0, l.jsx)(i8, { step: t, onClose: i });
    },
    CHECKOUT_FLOW: r.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [a.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, ny.Pv)(),
                a = (0, f.t4)((e) => e.selectedSkuId),
                s = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
                u = (0, k.bG)([r$.A], () => (null != a ? r$.A.get(a) : null), [a]),
                c = ls(),
                d = (0, k.bG)([rJ.A], () => (null != a ? rJ.A.getForSKU(a) : null), [a]),
                m =
                    d?.headerBackground != null && u?.applicationId != null
                        ? (0, rX.YE)(u.applicationId, d.headerBackground, 256)
                        : void 0;
            async function p(e, t) {}
            let C = null == i || i.id === s?.id || t.length > eU.Jo,
                h = o.useMemo(() => ({ disabled: C }), [C]);
            return (0, l.jsx)(r.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: r.XZ.TWO_COLUMN,
                renderLeftColumn: function () {
                    return (0, l.jsxs)("div", {
                        className: r0.P6,
                        children: [
                            u?.name != null &&
                                (0, l.jsx)(e8.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: u.name,
                                }),
                            null != m && (0, l.jsx)("img", { src: m, alt: u?.name ?? "", className: r0.LC }),
                        ],
                    });
                },
                renderRightColumn: function () {
                    return (0, l.jsxs)("div", {
                        className: r0.P6,
                        children: [
                            (0, l.jsx)(lt, { recipients: c, selectedSkuId: a, validateSelectedGift: p }),
                            (0, l.jsx)(lc.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: r0.iX,
                                innerClassName: r0.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: h,
            });
        },
        [a.pn.REVIEW]: nn.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(rQ, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: i.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var r1 = n(429913),
    r4 = n(733391),
    r3 = n(871123),
    r7 = n(26594),
    r6 = n(510022),
    r5 = n(317560),
    r8 = n(275256),
    r9 = n(910200),
    ae = n(40570);
function at(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, ti.Ay)(),
        { selectedSkuId: i, entitlementsGranted: r } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, nR.V)(),
        s = (0, nM.gU)(),
        { isGift: u, giftRecipient: c } = (0, ny.Pv)();
    eZ()(null != i, "Expected selectedSkuId"), eZ()(null != a, "Expected application");
    let d = s[i];
    eZ()(null != d, "Expected sku");
    let m = r.find((e) => e.sku_id === i),
        p = (0, r7.G)(m, { isGift: u });
    return (o.useEffect(() => {
        u || ((0, r5.j)(), t(), (0, r6.n)({ sku: d, application: a, analyticsLocations: n, entitlement: m }));
    }, [u, d, a, t, n, m]),
    u)
        ? (0, l.jsxs)(eW.dZ, {
              children: [
                  (0, l.jsx)(nG.A, {}),
                  (0, l.jsxs)("div", {
                      className: ae.EL,
                      children: [
                          (0, l.jsx)("div", {
                              className: ae.KD,
                              children: (0, l.jsx)(r8.default, {
                                  imageUrl: (0, r3.fq)(d) ?? void 0,
                                  backgroundImageUrl: (0, r3.xf)(d),
                                  altText: d.name,
                                  rewardGraphic: p?.graphic,
                              }),
                          }),
                          (0, l.jsx)(e8.D, {
                              variant: "heading-xl/semibold",
                              className: ae.RS,
                              children: F.intl.string(F.t["5glWta"]),
                          }),
                          (0, l.jsx)(E.E, {
                              variant: "text-md/normal",
                              children: F.intl.formatToPlainString(F.t["2VjPTw"], {
                                  itemName: d.name,
                                  giftRecipient: c?.username ?? "your recipient",
                              }),
                          }),
                          null != p &&
                              (0, l.jsx)("div", {
                                  className: ae.Is,
                                  children: (0, l.jsx)(r9.O0, { Icon: p.Icon, text: p.text }),
                              }),
                          (0, l.jsx)("div", {
                              className: ae.UD,
                              children: (0, l.jsx)(eQ.$, {
                                  onClick: t,
                                  text: F.intl.string(F.t.cpT0Cq),
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
var an = n(889137),
    al = n(742158),
    ai = n(198052),
    ar = n(238017),
    aa = n(650588),
    as = n(993046),
    ao = n(763827),
    au = n(403362),
    ac = n(832163),
    ad = n(31969),
    am = n(44724),
    ap = n(980094),
    aC = n(366523),
    ah = n(806931),
    af = n(733211);
function aE(e) {
    let { handleClose: t, sku: n, application: i } = e,
        r = o.useCallback(() => {
            (0, am.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        a = o.useCallback(() => {
            t();
            let e = ac.A.getStorefrontState(n.applicationId)?.activePage;
            (0, r3.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: i?.guildId,
                skuId: n.id,
            }) ||
                ((0, nl.closeAllModals)(),
                (0, am.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, l.jsx)("div", {
        className: af.$O,
        children: (0, l.jsx)(e$.Q, {
            text: F.intl.string(F.t.ImioFL),
            onMouseDown: r,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let aS = {
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
                            emojiConfetti: m,
                            soundEffect: p,
                            setEmojiConfetti: C,
                            setSoundEffect: h,
                            giftingOrigin: S,
                            additionalUserIds: y,
                        } = (0, ny.Pv)(),
                        I = (0, f.t4)((e) => e.selectedSkuId),
                        { application: A } = (0, nR.V)(),
                        g = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
                        P =
                            ((t = g?.id),
                            (n = ls()),
                            (i = (function (e) {
                                let t = (0, k.bG)([ao.A], () => (ao.A.isConnected() ? ao.A.getChannelId() : null)),
                                    [n, l] = o.useState([]);
                                return (
                                    o.useEffect(() => {
                                        let n = null != t ? ai.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, ah.Xw)(t) && !(0, ah.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, ah.Ay)(e) && !(0, ah.Ay)(t)
                                                ? -1
                                                : (0, ah.Ay)(t) && !(0, ah.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, k.yK)([D.default], () => y?.map(D.default.getUser).filter(au.Vq) ?? [], [y])),
                            o.useMemo(
                                () =>
                                    ll().uniqWith(
                                        [...(null != d ? [d] : []), ...r, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, r, i, n],
                            )),
                        v = (0, k.bG)([r$.A], () => (null != I ? r$.A.get(I) : null), [I]),
                        { userPrice: x } = (0, as.CD)({ sku: v, priceSetAssignmentPurchaseType: eG.lid.GIFT }),
                        _ = (0, ad.F)("gift_customization", { applicationId: A?.id, skuId: v?.id }),
                        T = (0, r3.fq)(v),
                        N = (0, r3.xf)(v);
                    async function b(e, t) {}
                    function j(e) {
                        null != h && h(null == e ? void 0 : e);
                    }
                    function R() {
                        return (0, l.jsxs)("div", {
                            className: af.mT,
                            children: [
                                null != T &&
                                    (0, l.jsx)(aC.A, {
                                        containerClassName: af.T3,
                                        cardImage: T,
                                        cardBackgroundImage: N,
                                        altText: v?.name ?? "",
                                        shape: "square",
                                    }),
                                (0, l.jsxs)("div", {
                                    className: af._T,
                                    children: [
                                        (0, l.jsx)(aa.A, { sound: p, onSelect: j }),
                                        (0, l.jsx)(ar.A, {
                                            setEmojiConfetti: C,
                                            emojiConfetti: null == m ? void 0 : m,
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }
                    function M() {
                        return (0, l.jsxs)("div", {
                            className: af.Tc,
                            children: [
                                null != d && (S === eU.vQ.USER_PROFILE_WISHLIST || S === eU.vQ.DM_CHANNEL_WISHLIST)
                                    ? (0, l.jsx)(lm.Z, { giftRecipient: d })
                                    : (0, l.jsx)(lt, { selectedSkuId: I, validateSelectedGift: b, recipients: P }),
                                (0, l.jsx)(lc.A, {
                                    onTextChange: (e) => c?.(e),
                                    pendingText: u,
                                    currentText: u,
                                    disableThemedBackground: !0,
                                    className: af.iX,
                                    innerClassName: af.pt,
                                }),
                                null == v
                                    ? null
                                    : (0, l.jsxs)("div", {
                                          className: af.AN,
                                          children: [
                                              (0, l.jsx)(al.z, {
                                                  className: af.jr,
                                                  children: F.intl.string(F.t.PpoJzt),
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: af.Wx,
                                                  children: [
                                                      (0, l.jsx)("div", {
                                                          className: af.Xb,
                                                          children:
                                                              null != v &&
                                                              null != T &&
                                                              (0, l.jsx)(aC.A, {
                                                                  containerClassName: af.Iy,
                                                                  cardImage: T,
                                                                  cardBackgroundImage: N,
                                                                  altText: v.name,
                                                                  shape: "square",
                                                              }),
                                                      }),
                                                      (0, l.jsxs)("div", {
                                                          className: af.vz,
                                                          children: [
                                                              null != A && (0, l.jsx)(ap.Q, { application: A }),
                                                              (0, l.jsx)(E.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: v.name,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)(E.E, { variant: "text-md/semibold", children: x }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                null != v &&
                                    (0, r3.Ri)(v) &&
                                    (0, l.jsx)(eq.w, { type: "info", children: F.intl.string(F.t.lORYb6) }),
                                null != _ &&
                                    (0, l.jsx)(r9.O0, {
                                        Icon: _.Icon,
                                        text: _.text,
                                        endDatetime: _.endsAt,
                                        tooltip: _.tooltip,
                                    }),
                                null != v && (0, l.jsx)(aE, { handleClose: s, sku: v, application: A }),
                            ],
                        });
                    }
                    return {
                        renderStepBody: function () {
                            return (0, l.jsxs)("div", { className: af.Du, children: [R(), M()] });
                        },
                        getLeftColumnComponent: R,
                        getRightColumnComponent: M,
                        onStepChange: a,
                        onBackClick: s,
                        disabled: null == d || d.id === g?.id || u.length > eU.Jo,
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
        [a.pn.REVIEW]: nn.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(at, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: r, isGift: a, skuId: s, ...u } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, r1.h)(t);
                    o.useEffect(() => {
                        null == l ||
                            null == n ||
                            rJ.A.isFetchingForSKU(n) ||
                            null != r$.A.get(n) ||
                            (0, r4.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: r, skuId: s }),
                (0, l.jsx)(en.M, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: r,
                    skuIDs: [s],
                    purchaseType: tT.VV.ONE_TIME,
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
            n = (0, an.YW)(t)
                .with(a.pn.GIFT_CUSTOMIZATION, () => F.intl.string(F.t["JCFN/y"]))
                .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => F.intl.string(F.t.lDbi6H))
                .with(a.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, l.jsx)(nS.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var ay = n(977445),
    aI = n(52635),
    aA = n(211287),
    ag = n(855104),
    aP = n(132500),
    av = n(623373),
    ax = n(739508),
    a_ = n(310829),
    aT = n(715054);
(0, aP.A)();
var aN = n(457008),
    ab = n(145659);
n(322076);
var aj = n(318254),
    aR = n(132198),
    aM = n(120992),
    aO = n(994143),
    aL = n(319820),
    ak = n(831123);
function aw(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: i, isSocialLayerGameItem: r } = (0, aL.AO)({ sku: t }),
        a = (0, aO.oO)(i);
    r ? (a = F.intl.string(V.default.qwSlCO)) : (0, av.Ab)(i) && (a = F.intl.string(F.t["0TmQRG"]));
    let s = (0, aO.dL)(t),
        o = (0, nx.EZ)(t.id) ? aR.m[t.id].render({ className: ak.$ }) : (0, l.jsx)(tv.WH, { sku: t, product: i });
    return (0, l.jsx)(tv.f7, { label: s, description: a, graphic: o, price: null != n ? `${n}` : "", PriceIcon: aj.C });
}
function aU(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, aM.c)({ applicationId: (0, a_.P)(t), skuIDs: [t] });
    let i = (0, nb.bG)([r$.A], () => r$.A.get(t), [t]);
    return null == i
        ? (0, l.jsx)(tn.y, { type: tn.y.Type.PULSING_ELLIPSIS })
        : (0, l.jsx)(aw, { sku: i, orbPriceAmount: n });
}
function aD(e) {
    let { orbBalance: t } = e;
    return (0, l.jsx)(U.vW, { label: F.intl.string(F.t.y0WGqP), value: null != t ? `${t}` : "", Icon: aj.C });
}
function aG() {
    return F.intl.string(F.t.wmcDyu);
}
function aF() {
    let { immediateDelivery: e } = (0, T.U)(),
        { skuProductLine: t, skuId: n } = aH(),
        i = aG(),
        r = (0, o.useMemo)(() => ({ type: U.I0.OrbsRedemption, purchaseButtonText: i }), [i]);
    return t === eG.EZt.SOCIAL_LAYER_GAME_ITEM
        ? (0, l.jsx)(aI.EB, { skuId: n, purchaseButtonText: i, checkoutLegalType: U.I0.OrbsGameShop })
        : (0, l.jsx)(U._P, { variant: r, paymentSourceType: null, immediateDelivery: e });
}
let aB = (0, o.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    skuProductLine: null,
    skuApplicationId: void 0,
    analyticsSourceLocation: void 0,
});
function aH() {
    return (0, o.useContext)(aB);
}
let aW = { payment_gateway: tT.kM.VIRTUAL_CURRENCY, currency: eG.Yri.DISCORD_ORB },
    aY = {
        CHECKOUT_FLOW: r.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [a.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    { primaryButtonProps: n, ...i } = (function (e) {
                        let { handleStepChange: t } = e,
                            { isRedeeming: n, skuId: i, skuApplicationId: r } = aH(),
                            { enabled: s } = aA.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: u, orderOrbPriceAmount: c } = (0, f.t4)((e) => {
                                let t = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != t ? t.total : null,
                                    orderOrbPriceAmount:
                                        null != t ? t.getInvoicePreviewLineItemUnitPriceForSku(i) : null,
                                };
                            }),
                            {
                                isStepLoading: d,
                                orbPriceAmount: m,
                                orbBalanceToDisplay: p,
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
                                    } = aH(),
                                    { analyticsLocations: d } = (0, ti.Ay)(),
                                    { setPurchaseState: m, firstConstraintReasonCode: p } = (0, f.t4)((e) => ({
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    C = (0, ag.gN)(),
                                    h = (0, o.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: E } = (function (e) {
                                        let {
                                                skuId: t,
                                                skuApplicationId: n,
                                                skuProductLine: l,
                                                orbProductContext: i,
                                                analyticsLocations: r,
                                                analyticsSourceLocation: s,
                                            } = e,
                                            { activitySessionId: u } = (0, nR.V)(),
                                            { hasPaymentSources: c } = (0, P.j)(),
                                            {
                                                loadId: d,
                                                startTime: m,
                                                discoverySessionId: p,
                                            } = (0, f.t4)((e) => e.contextMetadata),
                                            C = (0, o.useMemo)(
                                                () => ({
                                                    load_id: d,
                                                    discovery_session_id: p,
                                                    application_id: n,
                                                    sku_product_line: l,
                                                    location: r,
                                                    location_stack: r,
                                                    sku_id: t,
                                                    activity_session_id: u,
                                                    payment_gateway: tT.ps.VIRTUAL_CURRENCY,
                                                    ...(null != i && {
                                                        price: i.orbPriceAmount ?? void 0,
                                                        regular_price: i.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: eG.Yri.DISCORD_ORB,
                                                    ...(null != s && { source: s }),
                                                    ...{
                                                        payment_type: eG.frM[eG.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: ab.r.UNIFIED,
                                                        checkout_flow: et.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [d, p, u, t, n, l, r, s, i],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, o.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - m;
                                                    e === eG.HAw.PAYMENT_FLOW_STARTED
                                                        ? e_.default.track(eG.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...C,
                                                              has_saved_payment_source: c,
                                                              payment_gateway: tT.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === eG.HAw.PAYMENT_FLOW_LOADED
                                                          ? e_.default.track(eG.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...C,
                                                                has_saved_payment_source: c,
                                                                initial_step: a.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === eG.HAw.PAYMENT_FLOW_CANCELED
                                                            ? e_.default.track(eG.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...C,
                                                                  duration_ms: n,
                                                              })
                                                            : e === eG.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? e_.default.track(eG.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...C,
                                                                    duration_ms: n,
                                                                })
                                                              : e === eG.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? e_.default.track(eG.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...C,
                                                                      duration_ms: n,
                                                                  })
                                                                : e_.default.track(eG.HAw.PAYMENT_FLOW_FAILED, {
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
                                                [m, C, c],
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
                                        (E(eG.HAw.PAYMENT_FLOW_FAILED, l), (h.current = null));
                                }, [l, E]);
                                let S = (0, o.useCallback)(() => {
                                        (h.current = C),
                                            E(eG.HAw.PAYMENT_FLOW_COMPLETED),
                                            i((e) => {
                                                m(eu.h.COMPLETED),
                                                    t(a.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [i, m, C, E, t]),
                                    y = h.current ?? C,
                                    I = null != n ? n.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == n,
                                    errorMessage: (0, o.useMemo)(() => (0, aN.$9)(l, p), [l, p]),
                                    orbPriceAmount: I,
                                    orbBalanceToDisplay: y,
                                    onClickCheckout: S,
                                };
                            })({ handleStepChange: t }),
                            E = (0, ay.uS)(r),
                            {
                                disabled: S,
                                tooltipText: y,
                                text: I,
                            } = (function (e) {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: i, tooltipText: r } = (0, o.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: F.intl.string(F.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: F.intl.string(F.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: i, tooltipText: r, text: aG() };
                            })({ orbBalance: p, orbPriceAmount: s ? u : m, isInTestMode: E }),
                            A = (0, o.useMemo)(
                                () => ({ onClick: C, loading: n, text: I, disabled: S, tooltipText: y }),
                                [C, n, I, S, y],
                            ),
                            g = E ? F.intl.string(F.t.OvMyMd) : null;
                        return {
                            isStepLoading: d,
                            upperInlineNoticeProps: (0, o.useMemo)(() => {
                                if (null != g || null != h) {
                                    let e = [];
                                    return (
                                        null != g &&
                                            e.push({ type: "warning", message: g, key: "test-mode-warning-notice" }),
                                        null != h &&
                                            e.push({ type: "critical", message: h, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [g, h]),
                            purchaseItemContent: (0, l.jsx)(aU, { skuId: i, orbPriceAmount: s ? c : m }),
                            paymentMethodContent: (0, l.jsx)(aD, { orbBalance: p }),
                            legalContent: (0, l.jsx)(aF, {}),
                            primaryButtonProps: A,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({ handleStepChange: t });
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eW.dZ, { children: (0, l.jsx)(g.T_, { ...i }) }),
                        (0, l.jsx)(eW.UX, { children: (0, l.jsx)(ea.lo, { primaryButtonProps: n }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: i, children: r } = e,
                    { order: a, setOrder: s } = (0, f.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: u,
                        isRedeeming: c,
                        orbRedemptionError: d,
                        onRedeemVirtualCurrency: m,
                        skuProductLine: p,
                        skuApplicationId: C,
                    } = (function (e) {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: i, order: r } = e,
                            a = (0, k.bG)([D.default], () => O.Ay.canUseShopDiscounts(D.default.getCurrentUser())),
                            s = (0, k.bG)([r$.A], () => r$.A.get(t), [t]),
                            u = null != s ? s.productLine : null,
                            c = s?.applicationId ?? (0, a_.P)(t),
                            d = (0, as.JL)({ sku: s }),
                            { product: m } = (0, nX.q)(t),
                            p = (0, o.useMemo)(() => {
                                if (null != d) return { orbPriceAmount: d.amount };
                                if (null != m) {
                                    let e = (0, av.CW)({ product: m, hasShopDiscount: a });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [d, m, a]);
                        p?.orbPriceAmount == null &&
                            (0, ax.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: C,
                                isSubmitting: h,
                                error: f,
                            } = (0, aT.Q)({ skuId: t, loadId: n, order: r, onSignFailure: i }),
                            E = (0, o.useCallback)(
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
                            orbProductContext: p,
                            onRedeemVirtualCurrency: E,
                            isRedeeming: h,
                            orbRedemptionError: f,
                        };
                    })({ skuId: t, loadId: n, order: a, onSignFailure: s }),
                    h = (0, o.useMemo)(
                        () => ({
                            orbProductContext: u,
                            isRedeeming: c,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: m,
                            skuId: t,
                            skuProductLine: p,
                            skuApplicationId: C,
                            analyticsSourceLocation: i,
                        }),
                        [u, c, d, m, t, p, C, i],
                    );
                return (0, l.jsx)(aB.Provider, { value: h, children: r });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l, skuProductLine: i } = aH(),
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
                    })({ orbProductContext: l, skuProductLine: i, overrideAnalyticParams: aW });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: aW,
        },
    };
var aV = n(75304);
let aK = {
    [aV.C.ORB_CHECKOUT]: {
        flowType: aV.C.ORB_CHECKOUT,
        implemented: !0,
        purchaseType: eG.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: aY,
    },
    [aV.C.COLLECTIBLES_CHECKOUT]: {
        flowType: aV.C.COLLECTIBLES_CHECKOUT,
        implemented: !0,
        purchaseType: eG.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: ly,
    },
    [aV.C.SLAYER_STOREFRONT_CHECKOUT]: {
        implemented: !0,
        flowType: aV.C.SLAYER_STOREFRONT_CHECKOUT,
        purchaseType: eG.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: aS,
    },
    [aV.C.PREMIUM_CHECKOUT]: {
        implemented: !0,
        flowType: aV.C.PREMIUM_CHECKOUT,
        purchaseType: eG.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: i0,
    },
    [aV.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: {
        implemented: !0,
        flowType: aV.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        purchaseType: eG.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: rq,
    },
    [aV.C.PREMIUM_APPS_OTP_CHECKOUT]: {
        implemented: !0,
        flowType: aV.C.PREMIUM_APPS_OTP_CHECKOUT,
        purchaseType: eG.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: r2,
    },
    [aV.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
        implemented: !0,
        flowType: aV.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        purchaseType: eG.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: ry,
    },
    [aV.C.GUILD_PRODUCT_CHECKOUT]: {
        implemented: !0,
        purchaseType: eG.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: nE,
        flowType: aV.C.GUILD_PRODUCT_CHECKOUT,
    },
    [aV.C.GUILD_ROLE_CHECKOUT]: {
        implemented: !0,
        flowType: aV.C.GUILD_ROLE_CHECKOUT,
        TENANT_CHECKOUT_FLOW_CONFIG: lq,
        purchaseType: eG.VVm.SUBSCRIPTION,
    },
    [aV.C.GUILD_BOOST_CHECKOUT]: {
        implemented: !0,
        flowType: aV.C.GUILD_BOOST_CHECKOUT,
        purchaseType: eG.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: nt,
    },
    [aV.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: {
        implemented: !0,
        flowType: aV.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
        purchaseType: eG.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: J,
    },
};
