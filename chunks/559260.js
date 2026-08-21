n.d(t, { Y: () => aH });
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
    h = n(71804),
    C = n(558620),
    f = n(87725),
    E = n(834730),
    S = n(854354),
    y = n(987666),
    A = n(377058),
    P = n(482419),
    I = n(38785),
    g = n(202475),
    v = n(400612),
    _ = n(463376),
    T = n(473617),
    x = n(818824),
    N = n(596034),
    b = n(669510),
    R = n(888751),
    j = n(216641),
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
function Y(e) {
    let t = (0, C.A)(),
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
var W = n(667378),
    V = n(893292);
function K(e) {
    let { fallback: t, invoicePreview: n } = e,
        { gameName: i } = d(),
        r = (0, C.A)(),
        a = B(
            Y(n),
            (0, k.bG)([D.default], () => O.Ay.canUseShopDiscounts(D.default.getCurrentUser())),
        ),
        s = null != r ? n.findInvoiceItemByPlanId(r.id) : null;
    if (null == s) return t;
    let o = s.subscriptionPlanPrice * s.quantity,
        u = n.subtotal - o,
        c = 0 !== u;
    if (!a && !c) return t;
    let p = [
        {
            id: "subscription",
            label: F.intl.formatToPlainString(W.default["6AKZvg"], { gameName: i }),
            amount: o,
            lineItemType: "main",
            valueIcon: a ? w.t : void 0,
        },
    ];
    return (
        c &&
            p.push({
                id: "proration",
                label: F.intl.string(W.default["0PL2mz"]),
                amount: u,
                lineItemType: "adjustment",
                tooltip: F.intl.string(F.t.JmwQJM),
            }),
        p.push({ id: "tax", label: F.intl.string(F.t.jiRvC7), amount: n.tax }),
        (0, l.jsx)(U.Vm, { label: F.intl.string(V.default.eoXh7B), lineItems: p, currency: n.currency })
    );
}
var q = n(349085),
    Z = n(219940);
function z(e) {
    let { planName: t, invoicePreview: n } = e,
        { gameId: i, gameName: r } = d(),
        a = Y(n),
        s = (0, q.A)(i, "cover"),
        o = B(
            a,
            (0, k.bG)([D.default], () => O.Ay.canUseShopDiscounts(D.default.getCurrentUser())),
        ),
        u = null != s ? (0, l.jsx)("img", { className: Z.I, src: s, alt: "" }) : void 0;
    return (0, l.jsx)(U.f7, {
        graphic: u,
        omitDefaultIconBackground: !0,
        label: F.intl.formatToPlainString(W.default["6AKZvg"], { gameName: r }),
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
        p = u && !c,
        m = o.useMemo(() => {
            if (!u || null == s || 0 === s.items.length) return;
            let [e] = s.items;
            return [{ ...e, quantity: 1, planId: t }];
        }, [u, s, t]),
        { discriminatedInvoicePreview: h, purchaseDisabled: C } = (function (e) {
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
                } = (0, f.t4)((e) => ({
                    setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                    setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                    primaryInvoicesError: e.get("primaryInvoicesError"),
                    activeSubscription: e.activeSubscription,
                })),
                {
                    subscriptionPlan: m,
                    purchaseDisabled: h,
                    preventInvoiceFetch: C,
                    newItems: E,
                } = (0, T.TP)({ selectedPlanId: t, priceOptions: n }),
                { checkoutInvoiceRequestParams: S, renewalInvoiceRequestParams: y } = (0, T.jq)({
                    items: r ?? E,
                    preventFetch: C,
                    priceOptions: n,
                    trialId: l,
                    subscriptionMetadata: i,
                }),
                A = null != p ? p.id : void 0,
                P = o.useMemo(
                    () => ({
                        type: "subscription_checkout_invoice",
                        params: { ...S, subscriptionId: s ? A : void 0, renewal: a ?? !1 },
                    }),
                    [S, a, s, A],
                ),
                I = o.useMemo(() => ({ type: "subscription_renewal_invoice", params: y }), [y]);
            o.useEffect(() => {
                u(P);
            }, [P, u]),
                o.useEffect(() => {
                    c(I);
                }, [I, c]);
            let { discriminatedInvoicePreview: g } = (0, v.KY)({
                invoiceError: d,
                subscriptionPlan: m,
                invoiceTypeDiscriminator: v.u$.SUBSCRIPTION_NEW_PURCHASE,
                shouldSetPurchasePreviewErrorFromInvoice: !0,
            });
            return { discriminatedInvoicePreview: g, purchaseDisabled: h };
        })({
            selectedPlanId: t,
            priceOptions: r,
            isTrial: !1,
            newItemsOverride: m,
            immediateInvoiceUsesRenewal: p,
            previewAsSubscriptionUpdate: u,
        }),
        { immediateDelivery: k } = (0, x.U)(),
        { discountOffer: w, premiumGroupDiscountOffer: U } = (0, _.i)(),
        D = U ?? w,
        { paymentSources: G } = (0, g.j)(),
        { paymentGatewayRestrictions: B } = (0, g.Y)(),
        H = r.paymentSourceId,
        Y = (0, j.g)(G, H),
        q = (0, O.J$)(H),
        Z = null != h && "invoicePreview" in h ? h.invoicePreview : null,
        Q = (0, l.jsx)(z, { planName: n.name, invoicePreview: Z }),
        $ = p
            ? (0, l.jsx)(E.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "p",
                  children: F.intl.string(W.default.MmcIbA),
              })
            : null,
        J = {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: Q,
            paymentMethodContent: (0, l.jsx)(A.N, {
                label: F.intl.string(F.t["u+Cw58"]),
                onPaymentSourceAdd: i,
                disabled: C,
                additionalPaymentSourceDropdownProps: { paymentGatewayRestrictions: B },
            }),
            upperInlineNoticeProps: null != $ ? { directContent: $, key: "gsh-plan-change-notice" } : void 0,
        };
    if (null == h && null != a) return (0, l.jsx)(I.T_, { ...J, legalContent: null });
    if (null == h || h.type === v.u$.LOADING) return (0, l.jsx)(I.Ed, { shouldShowUnifiedHeader: !0 });
    let X = (0, l.jsx)(P.k, {
            discriminatedInvoicePreview: h,
            subscriptionPlan: n,
            subscriptionTrial: void 0,
            isPrepaidPaymentSource: q,
        }),
        ee = h.invoicePreview,
        et =
            (D?.discount != null && (0, M.Ro)(ee, D.discount.id)) || ee.invoiceItems.some((e) => e.discounts.length > 0)
                ? X
                : (0, l.jsx)(K, { fallback: X, invoicePreview: ee }),
        en = null;
    if (!q && v.ME.has(h.type) && "renewalInvoicePreview" in h && null != h.renewalInvoicePreview) {
        let e = (0, R.Gj)(h.invoicePreview, h.renewalInvoicePreview, void 0, { isSubscriptionUpdate: null != s });
        en = (0, l.jsx)(b._, { ...e });
    }
    let el = "renewalInvoicePreview" in h ? h.renewalInvoicePreview : null,
        ei =
            p && null != el && null != s
                ? (0, l.jsx)(N._, {
                      immediateDelivery: k,
                      paymentSourceType: Y,
                      variant: {
                          type: N.I.Subscription,
                          purchaseButtonText: F.intl.string(W.default.UGbET9),
                          totalDue: 0,
                          renewalPrice: el.total,
                          currency: h.invoicePreview.currency,
                          interval: n.interval,
                          intervalCount: n.intervalCount,
                          startDate: s.currentPeriodEnd,
                      },
                  })
                : (0, l.jsx)(y.$, {
                      activeSubscription: s,
                      plan: n,
                      paymentSourceType: Y,
                      discriminatedInvoicePreview: h,
                      discountOffer: D,
                      unifiedLegalType: N.I.Subscription,
                  }),
        er = p ? (0, L.$g)(0, h.invoicePreview.currency) : (0, S.kw)({ subscriptionInvoiceRecord: h.invoicePreview });
    return (0, l.jsx)(I.T_, {
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
                    a = (0, C.A)(),
                    { selectedPlanId: s, selectedSkuId: u } = (0, f.t4)((e) => ({
                        selectedPlanId: e.selectedPlanId,
                        selectedSkuId: e.selectedSkuId,
                    })),
                    { planGroup: c } = e,
                    p = o.useMemo(() => ({ planGroup: c }), [c]),
                    E = n
                        ? i
                            ? F.intl.string(W.default.yUWVlo)
                            : F.intl.string(W.default.UGbET9)
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
                                throw new h.v({
                                    message: "Expected plan to be selected",
                                    extraSentryInformation: { selectedPlanId: s, selectedSkuId: u },
                                });
                            return (0, l.jsx)(Q, { handlePaymentSourceAdd: t, verifiedPlanId: a.id, selectedPlan: a });
                        },
                        [a, s, u],
                    ),
                    A = o.useCallback(() => {
                        e.handleClose(), r?.();
                    }, [e, r]);
                return (0, l.jsx)(m.Y, {
                    ...e,
                    isBackButtonEligible: null != r,
                    onFooterBackClick: A,
                    subscriptionMetadata: t ?? void 0,
                    renderStepBody: y,
                    resolveInternalState: $,
                    resolveTenantReviewButtonProps: S,
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
    ep = n(71393),
    em = n(178368),
    eh = n(166403),
    eC = n(473145),
    ef = n(802790),
    eE = n(636441),
    eS = n(587491),
    ey = n(285753),
    eA = n(430993),
    eP = n(86379),
    eI = n(545075),
    eg = n(655857),
    ev = n(534479),
    e_ = n(121005),
    eT = n(174459),
    ex = n(61299),
    eN = n(295405);
let [eb, eR, ej] = (0, u.A)();
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
            onSubscribeComplete: p,
        } = e,
        [m, h] = o.useState(!0),
        C = (0, X.A)(() => Date.now()),
        E = (0, X.A)(() => (0, eC.D$)(em.A.boostSlots).length),
        {
            activeSubscription: S,
            setQuantity: y,
            selectedSkuId: A,
        } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            setQuantity: e.setQuantity,
            selectedSkuId: e.selectedSkuId,
        }));
    o.useEffect(() => {
        null != A && y(t);
    }, [A]);
    let P = (0, k.bG)([eh.A], () => eh.A.hasFetchedSubscriptions()),
        I = (0, k.bG)([eN.A], () => eN.A.defaultPaymentSourceId),
        g = null != S ? S.paymentSourceId : null,
        v = (0, ex._V)(null != g ? g : P ? I : null);
    return (0, l.jsx)(eb.Provider, {
        value: {
            disablePremiumUpsell: n,
            closeGuildPerksModal: i,
            guildId: a,
            paymentModalArgs: v,
            premiumSubscriptionPaymentSourceId: g,
            analyticsLocation: s,
            analyticsSourceLocation: u,
            forceDisableSubmitButton: m,
            setForceDisableSubmitButton: h,
            applicationId: c,
            intent: d,
            onSubscribeComplete: p,
            flowStartTime: C,
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
            (0, l.jsx)(eA.c, { children: (0, l.jsx)("p", { className: eF.C, children: t }) }),
        ],
    });
}
function eH(e) {
    let { handleStepChange: t } = e,
        n = (0, f.t4)((e) => e.activeSubscription),
        { guildId: i, analyticsLocation: r } = eR(),
        s = (0, eP.Hp)(),
        u = (0, e_.A)(),
        { hasFetchedRelatedSubscriptionPlans: c, displayCurrency: d } = (0, eg.Jn)(),
        { hasFetchedPremiumSubscriptionPlan: p } = eD(),
        m = null != n && null != n.renewalMutations,
        h = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
        C = !u || !c || !p || null == d || "" === d;
    return ((0, ee.Ay)(() => {
        m && eT.default.track(eG.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: r, guild_id: i });
    }),
    o.useEffect(() => {
        C || s || h || m || t(a.pn.PLAN_SELECT);
    }, [C, s, h, m, t]),
    h)
        ? (0, l.jsx)(eB, { message: F.intl.string(F.t.mOWsF1) })
        : m
          ? (0, l.jsx)(eB, { message: F.intl.string(F.t.npfhh0) })
          : C
            ? (0, l.jsx)(ev.A, {})
            : s
              ? (0, l.jsx)(eI.oO, {})
              : null;
}
var eY = n(482132),
    eW = n(879100);
function eV(e) {
    let { handleClose: t } = e,
        { guildId: n, paymentModalArgs: i, existingAvailableSlotCount: r } = eR(),
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
        p = null != n ? ep.A.getGuild(n) : null,
        m = (0, X.A)(() => (0, ew.b2)(s)),
        h = (0, k.bG)([ek.A], () => (null != a ? (0, ew.c9)(a.planId) : null)),
        { paymentSources: C } = i,
        E = (0, j.g)(C, u),
        S = null != p ? p.name : null != d ? d.name : void 0,
        y = m && null != h && !eU.YV.has(h.id);
    return (0, l.jsx)(eY.dZ, {
        children: (0, l.jsx)(eW.W, {
            guild: p,
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
    eq = n.n(eK),
    eZ = n(683071),
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
    e8 = n(320448),
    e5 = n(297264),
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
    tp = n(732280),
    tm = n(363476),
    th = n(531506),
    tC = n(550124);
function tf() {
    return (0, l.jsxs)("div", {
        className: e2()(tC.dt, tC.dE),
        children: [
            (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: tC.qq,
            }),
            (0, l.jsx)(E.E, { variant: "text-sm/medium", className: tC.tD, children: F.intl.format(F.t.f5VHKm, {}) }),
        ],
    });
}
function tE(e) {
    let { text: t, color: n } = e;
    return (0, l.jsxs)("div", {
        className: tC.dt,
        children: [(0, l.jsx)(w.t, { size: "md", className: tC.YW, color: n }), (0, l.jsx)("div", { children: t })],
    });
}
var tS = n(773669),
    ty = n(975571),
    tA = n(252424),
    tP = n(155718),
    tI = n(803694),
    tg = n(848584),
    tv = n(241989),
    t_ = n(874638),
    tT = n(692440),
    tx = n(818348),
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
        { immediateDelivery: o } = (0, x.U)();
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
function tR(e) {
    return F.intl.format(F.t.IeaYqg, { endDate: e });
}
function tj(e) {
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
    let { lineItems: u, currency: c } = (0, R.EA)({ id: "main-line-item", amount: t, ...s }),
        d = [...u, ...o];
    return (0, l.jsx)(tg.Vm, {
        defaultExpanded: !0,
        label: F.intl.string(V.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function tO(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: i, renewalInvoicePreview: r } = e;
    return null != n
        ? (0, l.jsx)(tT.Hc, { currentInvoice: i, renewalInvoice: r, isUpdate: t })
        : (0, l.jsx)(tT.Hc, { renewalInvoice: r });
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
                o = (0, k.bG)([ep.A, eo.A], () => {
                    let e = ep.A.getGuild(n);
                    return null != e ? e : eo.A.isGuildFetching(n) ? null : eo.A.getGuild(n);
                }, [n]),
                u = a.interval,
                c = a.intervalCount,
                d = (0, k.bG)([ek.A], () => ek.A.getForSkuAndInterval((0, O.mH)(eU.pe.GUILD), u, c));
            eq()(null != d, "Missing guildBoostingSubscriptionPlan");
            let p = (0, O.J$)(l.paymentSourceId),
                m = (0, tu.ds)();
            t = null != r ? (0, O.Om)(r, s[0].quantity, s[0].planId) : s;
            let { analyticsLocations: h } = (0, ti.Ay)(),
                [C, f] = (0, to.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: h,
                    analyticsLocation: i.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [E, S] = (0, to.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: h,
                    analyticsLocation: i.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, ta.OQ)({
                    checkoutInvoicePreview: C,
                    checkoutInvoiceError: f,
                    renewalInvoicePreview: E,
                    renewalInvoiceError: S,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: d,
                    isPrepaid: p,
                    isReverseTrial: m,
                    checkoutInvoicePreview: C,
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
            isSubscriptionUpdate: h,
            guild: C,
            isPrepaid: f,
            isReverseTrial: E,
            checkoutInvoicePreview: S,
            renewalInvoicePreview: y,
        } = m,
        P = (0, tI.A)({ location: "GuildBoostReview", message: F.intl.string(V.default["tK8A/8"]) });
    if (null == S || null == y || null == C) return (0, l.jsx)(I.Ed, { shouldShowUnifiedHeader: !0 });
    let g = (0, l.jsx)(tO, {
            isSubscriptionUpdate: h,
            premiumSubscription: a,
            checkoutInvoicePreview: S,
            renewalInvoicePreview: y,
        }),
        v = (0, l.jsx)(A.n, {
            setPaymentSourceId: d,
            paymentSourceId: c,
            location: "GuildBoostReview",
            label: F.intl.string(F.t["u+Cw58"]),
            onPaymentSourceAdd: p,
            premiumSubscriptionPaymentSourceId: s,
            hideCurrencySelect: !0,
        }),
        _ = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: l,
                checkoutInvoicePreview: i,
                paymentSources: r,
                paymentSourceId: a,
            } = e;
            return {
                paymentSourceType: (0, j.g)(r, a),
                premiumSubscriptionPlan: n,
                renewalPrice: l.subtotal,
                totalDue: i.total,
                currency: i.currency,
                startDate: (0, tT.de)({ isSubscriptionUpdate: t, currentInvoice: i, renewalInvoice: l }),
            };
        })({
            isSubscriptionUpdate: h,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: y,
            checkoutInvoicePreview: S,
            paymentSources: n,
            paymentSourceId: c,
        }),
        T = (0, l.jsx)(tb, { ..._ }),
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
            eq()(null != m, "Missing guild boosting invoice item");
            let h = p((e) => e.amount < 0),
                C = null != h ? m.quantity - h.quantity : m.quantity,
                f = l.invoiceItems.filter((e) => (0, O.xq)(e.subscriptionPlanId)),
                E = f.reduce((e, t) => e + t.amount, 0),
                S = (0, to.sL)(m) * C,
                y = (0, L.$g)(S, l.currency),
                A = (0, L.CE)(y, c, d),
                P = (0, L.$g)(l.total, l.currency) + (l.currency !== tx.Yr.USD ? "*" : ""),
                I = l.subtotal - S - E,
                g = m.discounts.map((e) => {
                    let t = e.amount / m.quantity;
                    return { ...e, amount: t * C };
                }),
                v = g.find((e) => e.type === tP.iS.SUBSCRIPTION_PLAN),
                _ = g.find((e) => e.type === tP.iS.ENTITLEMENT),
                T = m.subscriptionPlanPrice * C;
            return {
                addedQuantity: C,
                guildBoostingSubscriptionPlan: s,
                isPrepaid: o,
                isReverseTrial: u,
                formattedGuildBoostPrice: y,
                formattedGuildBoostRate: A,
                formattedOriginalAmountGuildBoostRate: (0, L.CE)((0, L.$g)(T, l.currency), c, d),
                formattedTotal: P,
                basePlanAdjustment: E,
                basePlanInvoiceItems: f,
                guildBoostingAdjustment: I,
                subscriptionDiscount: v,
                entitlementDiscount: _,
                originalAmount: T,
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
            reviewState: m,
        }),
        N = (0, l.jsx)(tM, { ...x }),
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
            C,
            x,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: l } = e;
                return !t && n && null != l ? { type: "reverseTrial", text: tR(l.currentPeriodEnd) } : null;
            })({ isPrepaid: f, isReverseTrial: E, premiumSubscription: a }),
        ),
        R = (0, l.jsx)(tv.f7, { ...b });
    return (0, l.jsx)(I.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: P,
        purchaseItemContent: R,
        subscriptionDetailsContent: g,
        paymentMethodContent: v,
        invoiceSummaryContent: N,
        legalContent: T,
        invoiceTotalDueValue: x.formattedTotal,
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
        fractionalBanner: p,
        existingSlotNotice: m,
        discountCallout: h,
        refreshDiscountCallout: C,
        legacyPricingNotes: f,
        refreshPricingNotes: S,
    } = e;
    return (0, l.jsxs)("div", {
        children: [
            p,
            c,
            m,
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
            h,
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
        refreshDescriptionContent: p,
        fractionalBanner: m,
        existingSlotNotice: h,
        discountCallout: C,
        refreshDiscountCallout: f,
        legacyPricingNotes: S,
        refreshPricingNotes: y,
    } = e;
    return (0, l.jsxs)("div", {
        className: tk.xY,
        children: [
            m,
            (0, l.jsxs)("div", {
                className: tk.K3,
                children: [
                    (0, l.jsx)(E.E, {
                        variant: "text-md/medium",
                        className: tk.bk,
                        children: F.intl.string(F.t["r+SebU"]),
                    }),
                    (0, l.jsx)(e8._, { className: tk.bN, color: "currentColor", size: "xs" }),
                    (0, l.jsx)(E.E, { variant: "text-md/medium", className: tk.kX, children: r }),
                ],
            }),
            p,
            h,
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
                    (0, l.jsx)(e5.D, {
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
function tY(e) {
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
            refreshNextStepLabel: h = F.intl.string(F.t.QBnNHq),
        } = e,
        C = (function (e) {
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
                h =
                    ((t = (0, k.bG)([eh.A], () => eh.A.getPremiumTypeSubscription())),
                    (0, k.bG)([eN.A], () =>
                        t?.paymentSourceId != null ? eN.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                C = r.interval,
                f = r.intervalCount,
                S = (0, k.bG)([ek.A], () => ek.A.getForSkuAndInterval((0, O.mH)(eU.pe.GUILD), C, f)),
                y = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
                A = (0, tr.A)({ forceFetch: !1 });
            eq()(null != S, "Missing guildBoostingSubscriptionPlan");
            let P = [{ planId: S.id, quantity: 1 }],
                I = u?.items.find(
                    (e) => e.planId === eU.gD.PREMIUM_MONTH_TIER_2 || e.planId === eU.gD.PREMIUM_YEAR_TIER_2,
                );
            null != I && P.push(I);
            let g = u?.items.find(
                    (e) => e.planId === eU.gD.PREMIUM_MONTH_GUILD || e.planId === eU.gD.PREMIUM_YEAR_GUILD,
                ),
                v = null == h || !eU.uJ.has(h) || null == g,
                { analyticsLocations: _ } = (0, ti.Ay)(),
                [T, x] = (0, to.YV)({
                    subscriptionId: u?.id,
                    items: P,
                    renewal: !0,
                    paymentSourceId: u?.paymentSourceId,
                    currency: p.currency,
                    preventFetch: v,
                    analyticsLocations: _,
                    analyticsLocation: i.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, ta.Tr)(T, x);
            let N = !v && null == T && null == x;
            o.useLayoutEffect(() => {
                s(N);
            }, [N, s]);
            let b = (0, tp.V)()?.subscriptionTrial?.skuId === eU.pe.TIER_2,
                R = O.Ay.hasBoostDiscount(y),
                j = R && null != u && O.Ay.isPremiumAtLeast(O.Ay.getPremiumType(u.planId), eU.PremiumTypes.TIER_1),
                M = T?.findInvoiceItemByPlanId(S.id),
                w =
                    null != M
                        ? { amount: M.amount, tax: 0, taxInclusive: !0, currency: T.currency }
                        : O.Ay.getPrice(S.id, R, !1, p),
                U = a * w.amount,
                G = (0, tu.ds)() && R && null != u,
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
                    fractionalPremiumState: A.fractionalState,
                    isReverseTrial: G,
                    hasDiscountUpsell: j,
                    withTrialOfferCopyVariant: b,
                });
            "discount" === B.upsellVariant
                ? (eq()(null != u, "Missing premiumSubscription for discount upsell variant"),
                  (n = F.intl.format(F.t.hf6YOY, { planName: O.Ay.getTierDisplayNameByPlanId(u.planId) })))
                : (n = F.intl.format("upsell_trial" === B.upsellVariant ? F.t.ba1L74 : F.t.fkffDT, {
                      onPremiumSubscriptionClick: c,
                      discountPercentage: (0, tA.l9)(tS.default.locale, eU.oX / 100),
                      freeSubscriptionCount: eU.M4,
                  }));
            let H = d.filter((e) => (0, eC.I5)(e)).length,
                Y = (0, O.J$)(p.paymentSourceId),
                { ipCountryCode: W } = (0, td.A)(),
                V = "HR" === W && w.currency === tx.Yr.EUR,
                K =
                    G && null != u
                        ? (0, l.jsx)(tj, { text: tR(u.currentPeriodEnd) })
                        : (0, l.jsx)("div", { className: e2()(tN.hA, tN.G3), children: F.intl.string(F.t.jNY1FO) }),
                q =
                    G && null != u
                        ? (0, l.jsx)(tj, { text: tR(u.currentPeriodEnd), className: tN.jk })
                        : (0, l.jsx)(E.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: tk._X,
                              children: F.intl.string(F.t.jNY1FO),
                          }),
                Z = B.showExistingSlotNotice
                    ? (0, l.jsx)(tH, { existingAvailableSlots: d, canceledCount: H, premiumSubscription: u })
                    : null,
                z = B.showFractionalPremiumBanner ? (0, l.jsx)(th.vi, { fractionalPremiumInfo: A }) : null,
                Q = Y
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === eU.WT.YEAR
                              ? F.intl.string(F.t.YDpAzZ)
                              : t === eU.WT.MONTH && 1 === n
                                ? F.intl.string(F.t["6ZR3By"])
                                : null;
                      })({ intervalType: C, intervalCount: f }) ?? F.intl.string(F.t.K9Bmze))
                    : F.intl.string(F.t.K9Bmze),
                $ = N
                    ? (0, l.jsx)(tn.y, {})
                    : Y
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
                        })({ intervalType: C, intervalCount: f, amount: w.amount, currency: w.currency }),
                J = N
                    ? (0, l.jsx)(tn.y, {})
                    : (0, l.jsx)(tm.A, {
                          price: U,
                          currency: w.currency,
                          intervalType: C,
                          intervalCount: f,
                          isPrepaidPaymentSource: Y,
                      }),
                X = N
                    ? (0, l.jsx)(tn.y, {})
                    : m && !Y
                      ? (0, L.CE)((0, L.$g)(U, w.currency), C, f)
                      : (0, L.$g)(U, w.currency),
                ee = [],
                et = [];
            if (V) {
                let e = (0, l.jsx)(
                    tl.A,
                    {
                        message: F.intl.formatToPlainString(F.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, L.$g)(7.5345 * U, tx.Yr.HRK),
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
                    refreshDescriptionContent: q,
                    existingSlotNotice: Z,
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
            showRefreshSubtotalRate: m,
        });
    return (0, l.jsx)(p ? tB : tF, {
        isLoading: C.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: r,
        planLabel: C.planLabel,
        planPriceContent: C.planPriceContent,
        subtotalContent: C.subtotalContent,
        refreshSubtotalContent: C.refreshSubtotalContent,
        legacyDescriptionContent: C.legacyDescriptionContent,
        refreshDescriptionContent: C.refreshDescriptionContent,
        fractionalBanner: C.fractionalBanner,
        existingSlotNotice: C.existingSlotNotice,
        discountCallout: C.discountCallout,
        refreshDiscountCallout: C.refreshDiscountCallout,
        legacyPricingNotes: C.legacyPricingNotes,
        refreshPricingNotes: C.refreshPricingNotes,
        refreshNextStepLabel: h,
    });
}
let tW = eU.gD.NONE_MONTH,
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
            premiumSubscriptionPaymentSourceId: p,
        } = eR(),
        {
            paymentSourceId: m,
            activeSubscription: h,
            quantity: C,
            setQuantity: E,
        } = (0, f.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
            setQuantity: e.setQuantity,
        })),
        { displayCurrency: S } = (0, eg.Jn)(),
        y = null != p || Object.keys(d.paymentSources).length > 0,
        A = (0, a.Ir)(y ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS),
        P = (0, X.A)(() => (0, eC.D$)(em.A.boostSlots)),
        I = (0, ec.n)("GuildBoostPurchaseModal"),
        g = eX.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        v = I && g,
        _ = (0, k.bG)([eo.A], () => (null != i ? eo.A.getGuild(i) : void 0), [i]),
        T = null != i ? ep.A.getGuild(i) : null,
        x = null == _ && null == T,
        N = null != h && h.isPurchasedExternally,
        b = Object.keys(d.paymentSources).length > 0,
        R = (0, k.bG)([ek.A], () => (null != h ? (0, ew.c9)(h.planId) : null)),
        j = (0, k.bG)([ek.A], () => (null == R ? ek.A.get(tW) : R));
    if (null == i) throw new r.vd({ message: "Missing guildId" });
    eq()(null != j, "Missing nextPremiumSubscriptionPlan");
    let M = (0, l.jsx)(tY, {
        premiumSubscriptionPlan: j,
        numGuildBoosts: C,
        setNumGuildBoosts: E,
        setForceDisableSubmitButton: u,
        premiumSubscription: h,
        existingAvailableSlots: P,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != s && s(), (0, eJ.e)();
        },
        priceOptions:
            null != m ? { paymentSourceId: m, currency: null != S ? S : void 0 } : { currency: null != S ? S : void 0 },
        isRefreshEnabled: I,
        showRefreshSubtotalRate: v,
        refreshNextStepLabel: A,
    });
    return (
        N && null != h && null != h.paymentGateway
            ? (M = (0, l.jsxs)("div", {
                  className: eF.xK,
                  children: [
                      (0, l.jsx)(eZ.w, {
                          type: "critical",
                          children: F.intl.format(F.t["/m3Y3s"], { paymentGatewayName: tx.qm[h.paymentGateway] }),
                      }),
                      M,
                  ],
              }))
            : null != i &&
              !eo.A.isGuildFetching(i) &&
              x &&
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
                (0, l.jsx)(eY.dZ, { children: M }),
                (0, l.jsx)(eY.UX, {
                    children: (0, l.jsx)(eW._, {
                        currentStep: a.pn.PLAN_SELECT,
                        isRefreshEnabled: I,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: I
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
                                numGuildBoostsToPurchase: C,
                                isDisabledBecauseExternalSubscription: N,
                                isMissingGuildInformation: x,
                            }),
                            onClick: function () {
                                o || (null != R && R.premiumSubscriptionType === eU.PremiumTypes.TIER_2)
                                    ? n(null != p || b ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS)
                                    : n(a.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
var tq = n(364840),
    tZ = n(935462),
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
                description: F.intl.formatToPlainString(F.t["1A6vXi"], { percent: (0, tA.l9)(n, eU.oX / 100) }),
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
        { analyticsLocations: p, sourceAnalyticsLocations: m } = (0, ti.Ay)(i.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        h = null == t || null == t.premiumSubscriptionType,
        C = O.Ay.getPrice(eU.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        f = (0, L.$g)(C.amount, C.currency),
        S = (0, tp.V)(),
        y = S?.trialId,
        A = S?.subscriptionTrial?.skuId === eU.pe.TIER_2;
    return (
        o.useEffect(() => {
            eT.default.track(eG.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eU.e.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: m,
            });
        }, [m]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tZ.s_, { "data-migration-pending": !0, onClick: n, className: t1.b }),
                (0, l.jsxs)(eA.c, {
                    children: [
                        A && (0, l.jsx)(t0.Vq, { className: t1.Fg }),
                        (0, l.jsx)("div", { className: e2()(t1.Tn, { [t1.NH]: A }) }),
                        (0, l.jsx)(E.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children:
                                null != y
                                    ? F.intl.string(F.t.AoSzEr)
                                    : F.intl.format(F.t["7vePZb"], { monthlyPrice: f }),
                        }),
                        (0, l.jsx)(t4, { shouldUpsellFromNoneTier: h }),
                    ],
                }),
                (0, l.jsx)(tq.j, {
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
                                                    analyticsLocations: p,
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
        { paymentModalArgs: r, analyticsLocation: s, analyticsSourceLocation: u } = eR(),
        { paymentSourceId: c, activeSubscription: d } = (0, f.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: p } = (0, eg.Jn)(),
        m = (0, k.bG)([ek.A], () => (null != d ? (0, ew.c9)(d.planId) : null)),
        h = (0, k.bG)([ek.A], () => (null == m ? ek.A.get(tW) : m));
    eq()(null != h, "Missing nextPremiumSubscriptionPlan"), eq()(null != p && "" !== p, "Currency not defined");
    let { paymentSources: C } = r,
        E = null != d ? d.paymentSourceId : null,
        S = Object.keys(C).length > 0,
        y = o.useCallback(() => n(a.pn.PLAN_SELECT), [n]),
        A = o.useCallback(() => n(null != E || S ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS), [n, E, S]);
    return (0, l.jsx)(t3, {
        premiumSubscriptionPlan: h,
        analyticsLocation: s,
        analyticsSourceLocation: u,
        onClose: t,
        onBack: y,
        onSkip: A,
        onSubscriptionConfirmation: i,
        priceOptions: null != c ? { paymentSourceId: c, currency: p } : { currency: p },
    });
}
var t6 = n(277984),
    t8 = n(820739);
async function t5(e, t) {
    await (0, t8.CD)();
    let n = (0, eC.D$)(em.A.boostSlots);
    return (0, t8.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function t9() {
    let { guildId: e, intent: t, onSubscribeComplete: n, paymentModalArgs: l } = eR(),
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
                    { guildId: s, paymentModalArgs: u, premiumSubscriptionPaymentSourceId: c } = eR(),
                    {
                        activeSubscription: d,
                        paymentSourceId: p,
                        setPaymentSourceId: m,
                    } = (0, f.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: h } = (0, eg.Jn)();
                if (null == s) throw new r.vd({ message: "Missing guildId" });
                eq()(null != h && "" !== h, "Currency not defined");
                let { paymentSources: C } = u,
                    { newAdditionalPlans: E, currentPremiumSubscriptionPlan: S } = eD(),
                    y = (0, k.bG)([ek.A], () => (null == S ? ek.A.get(tW) : S));
                eq()(null != y, "Missing nextPremiumSubscriptionPlan");
                let A = null != p ? { paymentSourceId: p, currency: h } : { currency: h },
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
                                onSubscribeComplete: h,
                            } = eR(),
                            { displayCurrency: C } = (0, eg.Jn)(),
                            { paymentSources: E, setIsSubmittingCurrentStep: S, isSubmittingCurrentStep: y } = r,
                            {
                                activeSubscription: A,
                                paymentSourceId: P,
                                setPurchaseError: I,
                                hasAcceptedTerms: g,
                                setPurchaseState: v,
                                quantity: _,
                                checkoutPaymentSources: T,
                            } = (0, f.t4)((e) => ({
                                activeSubscription: e.activeSubscription,
                                paymentSourceId: e.paymentSourceId,
                                setPurchaseError: e.setPurchaseError,
                                hasAcceptedTerms: e.hasAcceptedTerms,
                                setPurchaseState: e.setPurchaseState,
                                quantity: e.quantity,
                                checkoutPaymentSources: e.get("checkoutPaymentSources"),
                            })),
                            x = (0, ta.sw)(),
                            {
                                newAdditionalPlans: N,
                                currentPremiumSubscriptionPlan: b,
                                premiumGuildSubscriptionPlanId: R,
                            } = eD(),
                            M = (0, tI.A)({
                                location: "GuildBoostPurchaseModal",
                                message: F.intl.string(V.default["tK8A/8"]),
                            }),
                            L = (0, tI.iB)({
                                checkoutPaymentSources: T,
                                paymentSourceId: P,
                                location: "GuildBoostPurchaseModal",
                            }),
                            k = o.useMemo(
                                () => ({
                                    ...l,
                                    location: u,
                                    source: c,
                                    subscription_plan_id: R,
                                    sku_id: (0, O.mH)(eU.pe.GUILD),
                                    quantity: _,
                                }),
                                [l, u, c, _, R],
                            ),
                            w = o.useMemo(() => {
                                let { guild_id: e, ...t } = k;
                                return t;
                            }, [k]),
                            U = null != P ? { paymentSourceId: P, currency: C ?? void 0 } : { currency: C ?? void 0 };
                        async function D() {
                            eq()(null != N, "Missing newAdditionalPlans");
                            let e = (0, j.W)(E, P);
                            I(null);
                            let r = !1;
                            try {
                                v(eu.h.PURCHASING),
                                    S(!0),
                                    eq()(null != P, "Missing paymentSourceId"),
                                    eq()(null != x, "Missing invoicePreview");
                                let o = { amount: x.total, currency: x.currency },
                                    u = U.currency ?? x.currency,
                                    c = (0, O.U8)(A, N, u.toLowerCase(), U.paymentSourceId);
                                if (
                                    (eT.default.track(eG.HAw.PAYMENT_FLOW_COMPLETED, {
                                        ...k,
                                        duration_ms: Date.now() - d,
                                        guild_id: i ?? void 0,
                                        application_id: p,
                                    }),
                                    null == A || null == b)
                                ) {
                                    eq()(null != e, "Missing paymentSource");
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
                                    let t = { items: (0, O.aE)(A, N) };
                                    (t.currency = A.currency ?? u),
                                        (t.paymentSource = null != s ? E[s] : void 0),
                                        null == t.paymentSource &&
                                            (eq()(null != e, "Missing paymentSource"),
                                            (t.paymentSource = e),
                                            (t.currency = u));
                                    let n = await (0, t6.nV)(A, t, o, c, l.location_stack);
                                    if (n.redirectConfirmation) {
                                        r = !0;
                                        return;
                                    }
                                    if (n.pendingCustomerAction) return;
                                }
                                null == m && t(a.pn.CONFIRM),
                                    v(eu.h.COMPLETED),
                                    null != i && (await t5(i, null != m)),
                                    null != m && n(),
                                    h?.();
                            } catch (t) {
                                v(eu.h.FAIL),
                                    I(t),
                                    eT.default.track(eG.HAw.PAYMENT_FLOW_FAILED, {
                                        ...w,
                                        payment_error_code: t?.code,
                                        payment_gateway:
                                            null != e
                                                ? e.type === eG.hes.CARD
                                                    ? eG.kM_.STRIPE
                                                    : eG.kM_.BRAINTREE
                                                : null,
                                        payment_source_id: P,
                                        duration_ms: Date.now() - d,
                                    });
                            } finally {
                                r || S(!1);
                            }
                        }
                        return {
                            text: F.intl.string(F.t.eUEeCt),
                            loading: y,
                            disabled: null == P || !g || null != M || L,
                            onClick: D,
                            variant: "active",
                        };
                    })({ handleStepChange: t, handleClose: n, analyticsData: i }),
                    I = o.useCallback(() => {
                        t(a.pn.ADD_PAYMENT_STEPS), m(null);
                    }, [t, m]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eY.dZ, {
                            children: (0, l.jsx)(tL, {
                                guildId: s,
                                paymentSources: C,
                                priceOptions: A,
                                currentPremiumSubscription: d,
                                premiumSubscriptionPaymentSourceId: c,
                                premiumSubscriptionPlan: y,
                                newAdditionalPlans: E,
                                paymentSourceId: p,
                                setPaymentSourceId: m,
                                onPaymentSourceAdd: I,
                            }),
                        }),
                        (0, l.jsx)(eY.UX, {
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
                    h = (0, k.bG)([eh.A], () => eh.A.getPremiumTypeSubscription()),
                    C = (0, X.A)(() => n - (0, eC.D$)(em.A.boostSlots).length);
                return (
                    (0, ee.Ay)(() => {
                        null != eo.A.getGuild(t) || eo.A.isGuildFetching(t) || (0, es.y)(t);
                    }),
                    (0, l.jsx)(en.M, {
                        activeSubscription: h,
                        stepConfigs: d,
                        skuIDs: tV,
                        loadId: p,
                        unifiedCheckoutFlow: et.C.GUILD_BOOST_CHECKOUT,
                        children: (0, l.jsxs)(eM, {
                            initialNumGuildBoostsToPurchase: C,
                            disablePremiumUpsell: r,
                            closeGuildPerksModal: s,
                            guildId: t,
                            analyticsLocation: o,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: i,
                            onSubscribeComplete: a,
                            children: [(0, l.jsx)(t9, {}), m],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { guildId: i, existingAvailableSlotCount: r } = eR(),
                    s = (0, ei.s2)(),
                    { purchaseState: u, quantity: c } = (0, f.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        quantity: e.quantity,
                    })),
                    d = (0, ec.n)("GuildBoostUnifiedCheckout"),
                    p = d && (s === a.pn.REVIEW || s === a.pn.CONFIRM),
                    m = (0, ey.A)(p),
                    h = o.useMemo(() => ({ quantity: c }), [c]);
                return d && s === a.pn.CONFIRM
                    ? (0, l.jsx)(eS.A, {
                          mediaUrls: m.mediaUrls,
                          isSuccess: m.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(u === eu.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, l.jsx)(eE.A, {
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
                          analyticsDataOverride: h,
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
                s = (0, C.A)();
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
    return eq()(null != e, "GuildProductPurchaseContext not found"), e;
}
function ns(e) {
    let { children: t, skuId: n, ...i } = e,
        r = (0, k.bG)([ni.A], () => ni.A.getGuildProduct(n));
    return (
        eq()(null != r, "guildProductListing cannot be null"),
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
            eq()(null != a, "invoicePreview cannot be null"),
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
    np = n(171036),
    nm = n(200791);
function nh(e) {
    let { className: t, onClose: n } = e;
    return (0, l.jsx)(nu.D, {
        className: e2()(np.cG, t),
        onClick: n,
        children: (0, l.jsx)(nc.P, { size: "xs", color: "currentColor", className: np.yP }),
    });
}
function nC(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, l.jsxs)(tZ.rQ, {
        className: e2()(np.wx, nm.G, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, l.jsx)(nd.A, { className: np.F0, listing: t, imageSize: 500, alt: "" }),
            (0, l.jsx)(nh, { className: np.b, onClose: n }),
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
            : (0, l.jsx)(nC, { guildProductListing: i, className: nf.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(no, { ...e }) },
};
var nS = n(20742),
    ny = n(951305),
    nA = n(1076),
    nP = n(776310),
    nI = n(228366),
    ng = n(213530),
    nv = n(966971),
    n_ = n(758836),
    nT = n(395797);
let nx = { sliderBodyClassName: nT.Bz };
function nN(e) {
    let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nP.Fk, { ref: n, className: nT.Lb, environment: t.current }),
            (0, l.jsx)(ng.K, { options: i, className: e2()(nT.Oh, { [nT.R]: !r }) }),
        ],
    });
}
var nb = n(702841),
    nR = n(775602),
    nj = n(31823),
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
        { application: p } = (0, nj.V)(),
        m = (0, nM.gU)(),
        h = (0, nb.bG)([nO.A], () => nO.A.getProduct(a)),
        C = o.useRef(!1);
    eq()(null != a, "Expected selectedSkuId"), eq()(null != p, "Expected application");
    let E = m[a];
    eq()(null != E, "Expected sku");
    let S = null != d || null != s || null != u,
        y =
            i ??
            (c.length > 0
                ? F.intl.formatToPlainString(F.t.VuV3Td, { discountOfferAmount: c[0].discount.amount })
                : void 0);
    return (o.useEffect(() => {
        null == h ||
            S ||
            C.current ||
            ((C.current = !0),
            (0, nU.A)({
                product: h,
                overrideTitle: y,
                overrideGradientColor: r,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: n_.gs.FIAT,
            }));
    }, [h, n, t, S, y, r]),
    S)
        ? (0, l.jsx)(eY.dZ, { children: (0, l.jsx)(nG.A, {}) })
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
        d = (0, nb.bG)([nR.Ay], () => nR.Ay.useReducedMotion),
        p = o.useRef(null),
        m = (0, f.t4)((e) => e.selectedSkuId),
        h = (0, nb.bG)([nO.A], () => nO.A.getProduct(m)),
        { confettiColors: C } = (0, nL.A)(h?.styles);
    return (
        o.useEffect(() => {
            t &&
                null != a &&
                null != m &&
                (c === eU.vQ.USER_PROFILE_WISHLIST || c === eU.vQ.DM_CHANNEL_WISHLIST) &&
                nI.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: m, recipientId: a.id });
        }, [t, a, m, c]),
        t
            ? (0, l.jsxs)("div", {
                  ref: p,
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
                              confettiTarget: p.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, nw.rA)(h?.categorySkuId),
                              colors: C?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, l.jsx)(nF, { ...e })
    );
}
var nH = n(70283),
    nY = n(982240),
    nW = n(839534),
    nV = n(993408),
    nK = n(575593),
    nq = n(452027),
    nZ = n(922016),
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
function n8(e) {
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
        p = O.Ay.canUseShopDiscounts(d),
        m = (0, n$.Ay)(u?.id),
        h = o.useRef(null),
        [C, f] = o.useState(!1),
        { product: S } = (0, nX.q)(t, !0),
        y = o.useMemo(() => (0, nV.fT)(S, p), [S, p]);
    if (null == S || 0 === S.items.length) return null;
    let [A] = S.items,
        P = (0, n4.VG)(S),
        I = null != u && u.id !== d?.id && S.type !== nK.R.BUNDLE && A.type !== nK.R.NAMEPLATE && !s;
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsx)("div", {
                className: e2()(n6.QU, a),
                children: (0, l.jsx)(nq.D, {
                    label: F.intl.string(F.t.PpoJzt),
                    children:
                        I &&
                        (0, l.jsx)(
                            nZ.Y,
                            {
                                targetElementRef: h,
                                align: "center",
                                shouldShow: C,
                                onRequestClose: () => f(!1),
                                preload: () => (0, nJ.A)(u.id, u.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, l.jsx)(nQ.A, {
                                        ...e,
                                        user: u,
                                        pendingAvatar: u.getAvatarURL(null, (0, nz.FT)(nz._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, n0.T)(A) ? A : null,
                                        pendingProfileEffect: (0, n2.C3)(A) ? A : null,
                                        pendingProfileFrame: (0, n1.s)(A) ? A : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...i } = e;
                                    return (0, l.jsx)(nu.D, {
                                        ...i,
                                        className: n6.Nx,
                                        innerRef: h,
                                        onClick: (e) => {
                                            f((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            C ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, l.jsx)(E.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: F.intl.string(F.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            m?.userId,
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
                                    (0, l.jsx)(E.E, { variant: "text-md/semibold", children: P }),
                                    (0, l.jsx)(e5.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            S?.type === nK.R.BUNDLE
                                                ? null
                                                : A.type === nK.R.AVATAR_DECORATION
                                                  ? F.intl.string(F.t["7v0T9P"])
                                                  : A.type === nK.R.NAMEPLATE
                                                    ? F.intl.string(F.t.x5CoXR)
                                                    : A.type === nK.R.PROFILE_EFFECT
                                                      ? F.intl.string(F.t.wR5wOo)
                                                      : A.type === nK.R.PROFILE_FRAME
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
var n5 = n(783878),
    n9 = n(966327),
    le = n(427262);
let lt = function (e) {
    let { selectedSkuId: t, validateSelectedGift: n, className: i, recipients: r } = e,
        { giftRecipient: a, setGiftRecipient: s } = (0, ny.Pv)();
    return null == t
        ? null
        : (0, l.jsx)("div", {
              className: i,
              children: (0, l.jsx)(n5.Z, {
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
    lp = n(285719),
    lm = n(976860),
    lh = n(619940);
function lC(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: r } = (0, ti.Ay)(i.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, l.jsx)(e$.Q, {
        text: F.intl.string(F.t.J82mpK),
        onClick: function () {
            t(),
                (0, nl.closeAllModals)(),
                null == n
                    ? (0, nW.Cz)({ analyticsLocations: r, analyticsSource: i.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, lm.pX)(`${eG.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
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
        } = (0, nA.z)(),
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
                            setValidatingGiftRecipient: p,
                        } = (0, ny.Pv)(),
                        { selectedSkuId: m, checkoutInvoicePreview: h } = (0, f.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                        })),
                        C = (0, nM.gU)(),
                        E = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
                        S = ls(),
                        { analyticsLocations: y } = (0, ti.Ay)(i.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL),
                        A = (0, lo.F5)("CollectiblesPaymentModalGiftCustomizationStep"),
                        { nextTier: P, giftsToNextTier: I } = (0, k.cf)([nY.Ay], () => ({
                            nextTier: nY.Ay.getNextTier(nH.$.GIFTING),
                            giftsToNextTier: nY.Ay.getRemainingToNextTier(nH.$.GIFTING),
                        })),
                        g = A && null != P;
                    async function v(e, t) {
                        p(!0), null != s && o(), (await (0, nW.JJ)(e.id, t)) || o(F.intl.string(F.t["4kgVqQ"])), p(!1);
                    }
                    function _() {
                        return (0, l.jsx)(lc.A, {
                            onTextChange: (e) => a?.(e),
                            pendingText: r,
                            currentText: r,
                            disableThemedBackground: !0,
                            className: lh.iX,
                            innerClassName: lh.pt,
                        });
                    }
                    return (
                        (0, ee.Ay)(() => {
                            null != m &&
                                null != c &&
                                (d !== eU.vQ.DM_CHANNEL_WISHLIST &&
                                    eT.default.track(eG.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: m }),
                                v(c, m));
                        }),
                        {
                            renderLeftColumn: function () {
                                return (0, l.jsx)("div", {
                                    className: lh.qL,
                                    children: (0, l.jsx)(ld.t, { isShopGift: !0 }),
                                });
                            },
                            renderRightColumn: function () {
                                let e = (0, nV.pA)({ invoicePreview: h, selectedSkuId: m, skusById: C });
                                return d === eU.vQ.USER_PROFILE_WISHLIST || d === eU.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, l.jsxs)("div", {
                                          children: [
                                              (0, l.jsx)(lp.Z, { giftRecipient: c }),
                                              _(),
                                              null != e &&
                                                  null != m &&
                                                  (0, l.jsx)(n8, {
                                                      skuId: m,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: lh.uW,
                                                      previewHeaderClassName: lh.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, l.jsx)("div", {
                                                  className: lh.fi,
                                                  children: (0, l.jsx)(lC, { handleClose: n, selectedSkuId: m }),
                                              }),
                                          ],
                                      })
                                    : (0, l.jsxs)("div", {
                                          children: [
                                              (0, l.jsx)(lt, {
                                                  selectedSkuId: m,
                                                  recipients: S,
                                                  className: lh.uh,
                                                  validateSelectedGift: v,
                                              }),
                                              _(),
                                              null != e &&
                                                  null != m &&
                                                  (0, l.jsx)(n8, {
                                                      skuId: m,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: lh.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            renderBottomContent: function () {
                                return g
                                    ? (0, l.jsx)(lu.A, {
                                          giftsToNextTier: I,
                                          nextTierName: P.name ?? "",
                                          nextTierIcon: P.simple_icon_url,
                                          analyticsLocations: y,
                                          className: lh.qr,
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
                    hideConfirmStepConfetti: p,
                } = (function (e) {
                    let { skuId: t } = e,
                        n = o.useRef(new nP.OH()),
                        [l, i] = o.useState(null),
                        [r, a] = o.useState(!1),
                        s = o.useMemo(() => (0, nv.AB)({ purchaseType: n_.gs.FIAT, skuId: t }), [t]);
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
                [h, C] = (0, o.useState)(void 0),
                [f, E] = (0, o.useState)(void 0),
                S = (0, o.useMemo)(
                    () => ({
                        skuIDs: m,
                        setCustomConfettiVisible: c,
                        hideConfirmStepConfetti: p,
                        confettiCanvas: a,
                        collectedModalOverrideTitle: h,
                        setCollectedModalOverrideTitle: C,
                        collectedModalGradientColor: f,
                        setCollectedModalGradientColor: E,
                    }),
                    [m, c, p, a, h, f],
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
                        skuIDs: m,
                        stepConfigs: i.stepConfigs,
                        activeSubscription: null,
                        purchaseType: tx.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, l.jsx)(nA.i.Provider, { value: S, children: n }),
                    }),
                ],
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                { skuIDs: l, setCustomConfettiVisible: i } = (0, nA.z)(),
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
                                i(!1), n(e), nI.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
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
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(lf, { ...e }), options: nx },
};
var lA = n(809029),
    lP = n(354033),
    lI = n(877624),
    lg = n(554146),
    lv = n(80151),
    l_ = n(841702),
    lT = n(367727),
    lx = n(580194),
    lN = n(709870),
    lb = n(37126),
    lR = n(412260),
    lj = n(607399),
    lM = n(795791);
function lO(e, t) {
    return !e && t === eU.pe.TIER_2 && !lj.Ct && !lj.KY && null == (0, lM.uM)();
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
function lY(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: i } = e,
        r = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
        a = (0, k.bG)([nR.Ay], () => nR.Ay.useReducedMotion),
        { analyticsLocations: s } = (0, ti.Ay)(),
        u = nz._3.SIZE_32,
        { product: c, isFetching: d } = (0, nX.q)(t),
        [p, m] = o.useState(!1),
        h = c?.items[0],
        {
            isNameplateReward: C,
            nameplateData: f,
            rewardAvatarDecorationSrc: E,
        } = o.useMemo(
            () =>
                null == h
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, lB.F)(h)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: h.skuId,
                                src: h.asset,
                                palette: (0, lG.H6)(h.palette ?? "sky"),
                                imgAlt: h.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, n0.T)(h)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, lD.A)({
                                  legacyAssetId: h.asset,
                                  skuId: h.skuId,
                                  size: u,
                                  canAnimate: !a,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [h, u, a],
        );
    return (0, l.jsx)(eY.UX, {
        children: (0, l.jsx)(tq.j, {
            children: (0, l.jsxs)("div", {
                className: lH.W,
                children: [
                    C && null != f
                        ? (0, l.jsx)("div", {
                              className: lH.D,
                              onMouseEnter: () => m(!0),
                              onMouseLeave: () => m(!1),
                              children: (0, l.jsx)(lF.a, {
                                  user: r,
                                  nameplate: null,
                                  nameplateData: f,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: p,
                              }),
                          })
                        : (0, l.jsx)(lU.Js, {
                              "aria-label": r?.username,
                              size: u,
                              src: r?.getAvatarURL(void 0, (0, nz.FT)(u), !a),
                              avatarDecoration: E,
                          }),
                    (0, l.jsx)(eQ.$, {
                        variant: "primary",
                        text: F.intl.string(F.t.kMYVwv),
                        loading: d,
                        onClick: () => {
                            null != c &&
                                (n(),
                                (0, nU.A)({
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
var lW = n(49999);
function lV(e) {
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
        { paymentSources: m } = (0, g.j)(),
        {
            activeSubscription: E,
            selectedSkuId: S,
            updatedSubscription: y,
            paymentSourceId: A,
            isPremiumGroupPurchase: P,
            startingPremiumSubscriptionPlanId: I,
            startingFractionalPremiumEndsAt: v,
            checkoutInvoicePreview: _,
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
        T = (0, C.A)(),
        x = (0, ei.s2)(),
        {
            isGift: N,
            giftRecipient: b,
            giftCode: R,
            hasSentMessage: M,
            isSendingMessage: O,
            sendGiftMessage: L,
            claimableRewards: w,
            selectedGiftingPromotionReward: U,
            openGiftingBadgePostPurchaseModal: D,
        } = (0, ny.Pv)(),
        { confirmationFooter: G } = (0, s.cG)(),
        F = (0, lx.px)(T, N, w),
        B = (0, lx.Mq)(T),
        H = (0, l_.Mv)(U, !1),
        Y = (0, k.bG)([lR.A], () => lR.A.getGiftPromotion()?.id),
        W = (0, k.bG)([lR.A], () => {
            let e = lR.A.getMarketingComponentByType(lI.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        V = (0, j.g)(m, A),
        K = null != _ ? _.orbsReward : null,
        q = null != K && K > 0,
        Z = N && !q && null != U && null != H && B,
        z = { selectedPlan: T, selectedSkuId: S, step: x };
    if (null == T) throw new h.v({ message: "Expected plan to be selected", extraSentryInformation: z });
    if (null == S) throw new h.v({ message: "Expected selectedSkuId", extraSentryInformation: z });
    if (null == x) throw new h.v({ message: "Step should be set", extraSentryInformation: z });
    let Q = o.useCallback(() => {
        i(), a?.();
    }, [i, a]);
    (0, ee.Ay)(() => {
        P &&
            eT.default.track(eG.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != y,
                has_any_premium_group: y?.hasAnyPremiumGroup ?? !1,
                subscription_id: y?.id,
            });
    });
    let $ = (0, lv.A)();
    o.useEffect(() => {
        function e() {
            if (P)
                if (null != y && y.hasAnyPremiumGroup) {
                    eT.default.track(eG.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: y.id });
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
                    eT.default.track(eG.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
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
    }, [P, y, K, $, N, S, E]),
        o.useEffect(() => {
            !N || null == b || null == R || M || O || (0, lw.Ik)(b) || L({ onSubscriptionConfirmation: a });
        }, [L, N, b, R, M, O, a]),
        o.useEffect(() => {
            F &&
                null != W &&
                null != Y &&
                (0, lT.qr)(lg.M.GIFTING_PROMOTION_REMINDER, Y, { dismissAction: lW.i.INDIRECT_ACTION });
        }, [W, Y, F]);
    let J = null != p ? lL.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != u) t = u(T, Q, y);
    else if (N) t = (0, l.jsx)(lL.fw, { planId: T.id, onClose: Q });
    else {
        let e =
            I === T.id
                ? { postSuccessGuild: c }
                : {
                      followupSKUInfo: d,
                      startingPremiumSubscriptionPlanId: I,
                      isDowngrade: null != E && (0, ew.vT)(E, T.id, r),
                  };
        t = (0, l.jsx)(lL.Ay, {
            planId: T.id,
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
            (0, l.jsxs)(eY.dZ, { children: [(0, l.jsx)(nG.A, {}), t] }),
            null != G && G,
            Z && null != U && (0, l.jsx)(lY, { rewardSkuId: U, onClose: Q, onRewardModalClose: D }),
        ],
    });
}
let [lK, lq] = (0, u.A)(),
    lZ = {
        CHECKOUT_FLOW: r.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [a.pn.REVIEW]: lA.E },
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
                { guildId: i, listing: r } = lq();
            return (0, l.jsx)(lP.Y, { onClose: t, listing: r, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(lV, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var lz = n(73825),
    lQ = n(35587),
    l$ = n(344159),
    lJ = n(594832),
    lX = n(811656),
    l0 = n(259678),
    l2 = n(890856),
    l1 = n(947641),
    l4 = n(713517),
    l3 = n(929283),
    l7 = n(761365),
    l6 = n(47840);
function l8(e) {
    let t,
        n,
        { skuId: i, user: r, claimed: a, onSelect: s, selectedSkuId: u } = e,
        [c, d] = o.useState(null),
        p = o.useCallback((e) => {
            d(e);
        }, []),
        m = o.useMemo(() => ({ current: c }), [c]),
        { isHoveringOrFocusing: h } = (0, l4.A)(m),
        C = !a && h,
        { product: f } = (0, nX.q)(i);
    if (null == f) return null;
    let S = f.items[0];
    return null == S
        ? null
        : ((0, n0.T)(S)
              ? ((n = nK.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(l3.i, { item: S, user: r, isHighlighted: C, avatarSize: nz._3.SIZE_96 })))
              : (0, lB.F)(S) &&
                ((n = nK.R.NAMEPLATE),
                (t = (0, l.jsx)(l7.A, { nameplate: S, user: r, isHighlighted: C, size: "small" }))),
          (0, l.jsx)(l0.vN, {
              children: (0, l.jsxs)(l2.s, {
                  ref: p,
                  "aria-label": f.name ?? "",
                  onClick: function () {
                      null == i || null == s || a || s(i);
                  },
                  className: e2()(l6._x, { [l6.Vp]: !a, [l6.mr]: C, [l6.md]: u === i }),
                  children: [
                      (0, l.jsx)("div", {
                          className: e2()(l6.VH, {
                              [l6._Q]: n === nK.R.AVATAR_DECORATION,
                              [l6.M4]: n === nK.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: e2()(l6.i1, { [l6.Sf]: a }), children: t }),
                                            a &&
                                                (0, l.jsx)(l1.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: e1.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: l6.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: l6.tZ,
                          children: [
                              (0, l.jsx)(e5.D, { variant: "heading-md/extrabold", children: f.name }),
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
var l5 = n(696208),
    l9 = n(683433);
function ie(e) {
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
        { paymentSources: m } = (0, g.j)(),
        h = (0, C.A)(),
        { isGift: f, claimableRewards: E } = (0, ny.Pv)();
    i = i ?? m;
    let {
            variant: S,
            text: y,
            onClick: A,
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
                c = (0, k.bG)([eh.A], () => eh.A.getPremiumTypeSubscription()),
                d = (0, C.A)(),
                p = (0, ei.s2)(),
                { hasEntitlements: m } = (0, l$.X)(n, l),
                h = (null != c && null != c.paymentSourceId) || Object.keys(r).length > 0 || (m && !o);
            var f = s ? F.intl.string(F.t.PDTjLN) : F.intl.string(F.t.XqMe3N),
                E = a.pn.ADD_PAYMENT_STEPS;
            return (
                h && (E = a.pn.REVIEW),
                (0, lx.px)(d, l, i) && p !== a.pn.SELECT_FREE_SKU && (E = a.pn.SELECT_FREE_SKU),
                { variant: "primary", text: f, onClick: () => t(E), disabled: u }
            );
        })({
            onStepChange: t,
            selectedPlanId: (n = n ?? h?.id),
            isGift: f,
            claimableRewards: E,
            paymentSources: i,
            shouldRenderUpdatedPaymentModal: c,
            isTrial: d,
            isNextDisabled: p,
        }),
        I = o.useMemo(
            () =>
                null != n && u.includes(n)
                    ? [{ variant: S, text: y, onClick: A, disabled: P }]
                    : [{ variant: "primary", text: F.intl.string(F.t.XqMe3N), disabled: !0 }],
            [S, y, A, P, n, u],
        );
    return (0, l.jsx)(l5.H, { leading: s && null != r ? (0, l.jsx)(l9.A, { onClick: r }) : void 0, actions: I });
}
var it = n(144281);
function il(e) {
    let { handleStepChange: t } = e,
        n = (0, f.t4)((e) => e.selectedSkuId),
        i = (0, C.A)(),
        r = (0, ei.s2)(),
        { setSelectedGiftingPromotionReward: s, selectedGiftingPromotionReward: u, claimableRewards: c } = (0, ny.Pv)(),
        d = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
        p = (0, k.yK)([lR.A], () => lR.A.getGiftPromotionRewardSkuIds()),
        m = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(c, u),
        [E, S] = o.useState(m),
        [y, A] = o.useState(!1);
    o.useEffect(() => {
        y || null != u || null == m || (s(m), S(m));
    }, [m, y, u, s]);
    let P = { selectedPlan: i, selectedSkuId: n, step: r };
    if (null == i) throw new h.v({ message: "Expected plan to be selected", extraSentryInformation: P });
    if (null == n) throw new h.v({ message: "Expected selectedSkuId", extraSentryInformation: P });
    if (null == r) throw new h.v({ message: "Step should be set", extraSentryInformation: P });
    let I = o.useMemo(() => null != E && (c ?? []).includes(E), [E, c]),
        g = o.useMemo(() => 0 === p.length || null == E || !I, [p, E, I]);
    function v(e) {
        s(e), S(e), A(!0);
    }
    o.useEffect(() => {
        if (0 === p.length) {
            S(void 0), s(void 0);
            return;
        }
        (null != E && I && p.includes(E)) || null == E || (S(void 0), s(void 0));
    }, [p, I, E, s]);
    let _ = p.map((e) =>
            (0, l.jsx)(
                l8,
                { skuId: e, claimed: null != c && !c.includes(e), user: d, onSelect: v, selectedSkuId: E },
                e,
            ),
        ),
        T = (0, l.jsx)(eY.UX, {
            children: (0, l.jsx)(ie, {
                onStepChange: t,
                onBackClick: () => t(a.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [i.id],
                selectedPlanId: i.id,
                isNextDisabled: g,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nS.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: F.intl.string(F.t.OEtqpm),
                subtitle: F.intl.string(F.t.h2nMp0),
            }),
            (0, l.jsx)(eA.c, {
                children: (0, l.jsx)(tJ.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: it.Dq, children: _ }),
                }),
            }),
            T,
        ],
    });
}
var ii = n(428644),
    ir = n(396533),
    ia = n(699595),
    is = n(403689),
    io = n(67948),
    iu = n(406810),
    ic = n(421108),
    id = n(807098),
    ip = n(753261),
    im = n(298305),
    ih = n(715138),
    iC = n(799636);
function iE() {
    let e = (0, k.bG)([lR.A], () => {
            let e = lR.A.getMarketingComponentByType(lI.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, ny.Pv)(),
        n = (0, id.T)(e?.asset),
        i = (0, id.T)(e?.backgroundAsset),
        r = (0, k.bG)([lR.A], () => lR.A.getGiftPromotion()),
        a = (0, ic.dA)(r?.endDate),
        { enabled: s } = ip.E.useConfig({ location: "PremiumGiftPromotionPlanSelectBanner" }),
        o = e?.gradient,
        u =
            null != o && null != o.colors && o.colors.length >= 2
                ? (0, lx.K5)({ gradient: o.colors, angle: o.angle ?? void 0 })
                : void 0,
        c = (0, lx.gc)(i);
    null != c && ((c.backgroundSize = "cover, auto"), (c.backgroundPosition = "right center, 0% 0%"));
    let d = (0, lx.x)(c, u),
        p = e?.assetVariant === io.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : s
          ? (0, l.jsx)(iS, {
                assetUrl: n,
                desktopBody: F.intl.format(ih.default["A/KOOc"], { learnMoreUrl: "" }),
                countdownText: a,
            })
          : (0, l.jsxs)("div", {
                className: iC.qD,
                style: d,
                children: [
                    (0, l.jsx)("div", {
                        className: e2()([iC.my], { [iC.R_]: p }),
                        children: (0, l.jsx)(im.A, {
                            claimableRewards: t,
                            maxRewardImageSrc: n ?? "",
                            size: p ? nz._3.SIZE_72 : nz._3.SIZE_40,
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
function iS(e) {
    let { assetUrl: t, desktopBody: n, countdownText: i } = e;
    return (0, l.jsxs)("div", {
        className: iC.KE,
        children: [
            (0, l.jsxs)("div", {
                className: iC.SV,
                children: [
                    null != t && "" !== t && (0, l.jsx)("img", { className: iC.L8, alt: "", src: t }),
                    (0, l.jsx)(E.E, { variant: "text-md/medium", color: "text-default", children: n }),
                ],
            }),
            null != i &&
                (0, l.jsxs)("div", {
                    className: iC.gO,
                    children: [
                        (0, l.jsx)(iu.ClockIcon, { size: "xs", color: "currentColor" }),
                        (0, l.jsx)(E.E, { variant: "text-md/medium", color: "text-default", children: i }),
                    ],
                }),
        ],
    });
}
var iy = n(511484),
    iA = n(462887),
    iP = n(736653),
    iI = n(854627),
    ig = n(236834);
let iv = (e) => {
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
    i_ = (e) => {
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
var iT = n(940223);
let ix = function (e) {
    let { className: t } = e,
        n = (0, ig.A)(),
        { avatarSrc: i, eventHandlers: r } = (0, iI.A)({ userId: n?.id, size: nz._3.SIZE_32, animateOnHover: !0 }),
        a = (0, iP.DP)(),
        s = (0, iA.q)(a),
        o = le.Ay.getName(n);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: e2()(iT.$6, t),
              children: [
                  (0, l.jsx)("div", {
                      className: iT.H,
                      children: (0, l.jsx)(lU.eu, { src: i, "aria-label": n.username, size: nz._3.SIZE_32, ...r }),
                  }),
                  (0, l.jsx)(E.E, {
                      variant: "text-xs/bold",
                      className: iT.U_,
                      children: F.intl.format(F.t.oxhCOl, { userName: o }),
                  }),
                  (0, l.jsx)(s ? iv : i_, { className: iT.q3 }),
              ],
          });
};
var iN = n(92886),
    ib = n(69494),
    iR = n(845012),
    ij = n(597770),
    iM = n(102741),
    iO = n(651540);
function iL(e) {
    let { giftMessage: t = F.intl.string(F.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, ny.Pv)();
    return !n || (0, lw.Ik)(i)
        ? null
        : (0, l.jsx)(iM.A, {
              className: iO.z,
              iconSize: iM.A.Sizes.SMALL,
              icon: ij.GiftIcon,
              color: null == t ? iM.A.Colors.PRIMARY : iM.A.Colors.SECONDARY,
              children: t,
          });
}
var ik = n(577381),
    iw = n(593675);
function iU(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: r, trialId: s, handleClose: u } = e,
        {
            selectedSkuId: c,
            priceOptions: d,
            activeSubscription: p,
            defaultPlanId: m,
        } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        {
            isPremium: h,
            isEligibleForTrial: S,
            isEligibleForDiscount: y,
            discountOffer: A,
            userTrialOffer: P,
        } = (0, _.i)(),
        g = (0, iy.YJ)(A),
        v = (0, C.A)(),
        T = (0, ei.s2)(),
        { isGift: x, giftRecipient: N, giftMessage: b, claimableRewards: R } = (0, ny.Pv)(),
        j = (0, lx.Mq)(v),
        M = (0, nb.bG)([lR.A], () => {
            let e = lR.A.getMarketingComponentByType(lI.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        L = x && j && null != R && R.length > 0 && M,
        w = (0, lo.F5)("PremiumPaymentPlanSelectStep"),
        { nextTier: U, giftsToNextTier: D } = (0, k.cf)([nY.Ay], () => ({
            nextTier: nY.Ay.getNextTier(nH.$.GIFTING),
            giftsToNextTier: nY.Ay.getRemainingToNextTier(nH.$.GIFTING),
        })),
        G = x && w && null != U,
        { isHidden: B } = is.A.useConfig({ location: `PremiumPaymentPlanSelectStep${x ? "" : " - DO NOT USE"}` }),
        H = (0, lJ.tA)({ isGift: x, giftRecipient: N }),
        Y = null;
    L
        ? (Y = (0, l.jsx)(iE, {}))
        : G &&
          (Y = (0, l.jsx)("div", {
              className: e2()(iw.v$, H || B ? iw.RV : iw.CC),
              children: (0, l.jsx)(lu.A, {
                  giftsToNextTier: D,
                  nextTierName: U.name ?? "",
                  nextTierIcon: U.simple_icon_url,
              }),
          }));
    let W = (S || y) ?? !1,
        V = (0, lQ.Wi)(eU.ZC),
        K = W || V,
        q = o.useMemo(() => (0, O.Tm)({ skuId: c, isPremium: h, defaultPlanId: m }), [c, h, m]),
        Z = y && null != g && q.includes(g) ? g : q[0],
        z = (0, nb.bG)([ek.A], () => ek.A.get(Z)),
        Q = [{ planId: z?.id, quantity: 1 }],
        [$, J] = o.useState(W),
        [X, ee] = (0, to.YV)({
            items: Q,
            renewal: !1,
            preventFetch: !K,
            applyEntitlements: !0,
            trialId: s,
            paymentSourceId: d.paymentSourceId,
            currency: d.currency,
        });
    o.useEffect(() => {
        W && J(X?.subscriptionPeriodEnd == null);
    }, [X, W]),
        (0, ii.A)(
            "Payment Modal Plan Select Step",
            $,
            5,
            { proratedInvoicePreview: X, proratedInvoiceError: ee, isEligibleForOffer: W },
            { tags: { app_context: "billing" } },
        );
    let et = ee?.message ?? F.intl.string(F.t.R0RpRX),
        en = W && null == ee,
        el = W && null != ee,
        er = en && null == p && X?.subscriptionPeriodEnd == null;
    (0, ia.W)({ priceOptions: d, trialId: s, discountInvoicePreview: X });
    let ea = (0, ik.i)({ planSkuId: z?.skuId, invoice: X }),
        { ref: es, onTransitionEnd: eo } = (0, ir.A)({ isExpanded: null != ea, minHeightOverride: 0 }),
        eu = o.useMemo(
            () =>
                x || z?.skuId !== eU.pe.TIER_2 || P?.referrerId == null
                    ? (0, l.jsx)("div", { ref: es, onTransitionEnd: eo, style: { overflow: "hidden" }, children: ea })
                    : (0, l.jsx)(ix, { className: iw.ZB }),
            [ea, x, z?.skuId, P?.referrerId, es, eo],
        ),
        ec = o.useMemo(
            () => ({
                planOptions: q,
                selectedPlanId: v?.id,
                planGroup: i,
                subscriptionPeriodEnd: X?.subscriptionPeriodEnd,
                useCompactGiftComponents: L,
                handleClose: u,
            }),
            [q, v?.id, i, X?.subscriptionPeriodEnd, L, u],
        );
    if (er) return (0, l.jsx)(I.Ed, { className: iw.QW });
    eq()(null != T, "Step should be set"), eq()(q.length > 0, "Premium plan options should be set");
    let ed = x
        ? (0, l.jsx)(iN.$p, { ...ec })
        : (0, l.jsx)(iR.X, { ...ec, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(iL, { giftMessage: b }),
            !(x && (0, lw.Ik)(N)) && (0, l.jsx)(ib.A, { isEligibleForTrial: S }),
            (0, l.jsxs)(eY.dZ, {
                children: [
                    eu,
                    (0, l.jsx)(nG.A, { className: iw.tg }),
                    el ? (0, l.jsx)(eZ.w, { type: "critical", children: et }) : ed,
                    en &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: e2()(iw.IM, iw.Go) }),
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
            (0, l.jsxs)(eY.UX, {
                children: [
                    Y,
                    (0, l.jsx)(ie, {
                        onStepChange: t,
                        onBackClick: () => t(a.pn.SKU_SELECT),
                        showBackButton: null == n && null == r,
                        planOptions: q,
                        shouldRenderUpdatedPaymentModal: en,
                        isTrial: S,
                    }),
                ],
            }),
        ],
    });
}
var iD = n(862990),
    iG = n(672525),
    iF = n(800471),
    iB = n(169801),
    iH = n(876491);
function iY(e) {
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
        { hasPaymentSources: d } = (0, g.j)(),
        { isGift: p, claimableRewards: m } = (0, ny.Pv)(),
        h = p && null != m && m.length > 0,
        C = (0, tp.V)(u);
    return (0, l.jsx)(iW, {
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
                let m = c({ isTrial: (0, iB.t)({ userTrialOffer: s, isGift: r, skuId: n }), selectedSkuId: n });
                d !== a.pn.WHAT_YOU_LOSE && m && ((d = a.pn.REVIEW), o((0, iF.x)(n, t, u))),
                    i(d, { analyticsDataOverride: { sku_id: n } });
            })({
                getIsInOneStepSubscriptionCheckout: c,
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: p,
                userTrialOffer: C,
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
        showPromotionalGiftBanner: h,
    });
}
function iW(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: a } = e,
        s = (0, iD.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nS.rQ, { titleTextVariant: "heading-lg/semibold", title: F.intl.string(F.t["r+SebU"]) }),
            s
                ? (0, l.jsx)(eA.c, {
                      children: (0, l.jsx)("div", {
                          className: iH.eE,
                          children: (0, l.jsx)(iG.yS, {
                              onSelectSku: (e) => t((0, O.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, l.jsx)(eA.c, {
                      children: (0, l.jsx)("div", {
                          className: iH.a2,
                          children: (0, l.jsx)(iG.Ay, {
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
var iV = n(825484),
    iK = n(137728);
function iq(e) {
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
        eq()(null != d, "Expected premium type"),
        (0, l.jsx)(iK.A, {
            premiumType: d,
            titleText: F.intl.string(F.t["7VcWW0"]),
            subtitleText: F.intl.format(F.t.Qk34Ik, { subscriptionName: c }),
            footer: (0, l.jsxs)(iV.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(eQ.$, {
                        variant: "primary",
                        text: F.intl.string(F.t["3PatSz"]),
                        onClick: () => {
                            o ? (r((0, iF.x)(i, s)), t(a.pn.REVIEW)) : t(a.pn.PLAN_SELECT);
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
var iZ = n(750532);
let iz = [
        {
            key: a.pn.SKU_SELECT,
            renderStep: (e) => (0, l.jsx)(iY, { ...e }),
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
            renderStep: (e) => (0, l.jsx)(iq, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: a.pn.PLAN_SELECT,
            renderStep: (e) => (0, l.jsx)(iU, { ...e }),
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
            renderStep: (e) => (0, l.jsx)(il, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    iQ = {
        CustomHeaderComponent: iZ.kc,
        CHECKOUT_FLOW: et.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: iz,
        CHECKOUT_STEPS: { [a.pn.REVIEW]: lA.E },
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
                        loadId: h,
                        giftContextProps: C = { isGift: !1, giftRecipient: null },
                        renderModalProps: f,
                        children: E,
                    } = e,
                    S = (0, k.bG)([eh.A], () => eh.A.getPremiumTypeSubscription()),
                    y = (0, lQ.Sq)() ? eU.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: A, giftRecipient: P } = C;
                if (null != c && !Object.values(eU.pe).includes(c))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, lJ.tA)({ giftRecipient: P, isGift: A ?? !1 }),
                    g = o.useMemo(
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
                    v = null != d ? d : S,
                    _ = !A && null != v && v.isPurchasedExternally && null != v.paymentGateway;
                (0, l$.s)(v, () => f.onClose(), A ?? !1);
                let T = o.useMemo(() => [...eU.oz], []);
                return _
                    ? null
                    : (0, l.jsx)(en.M, {
                          loadId: h,
                          activeSubscription: v,
                          initialPaymentSourceId: p,
                          stepConfigs: g,
                          skuIDs: T,
                          isGift: A,
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
                    ek.A.isLoadedForPremiumSKUs() || nI.h.wait(() => (0, lz.zS)());
                }, []);
                let { selectedSkuId: c, purchaseState: d } = (0, f.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    p = (0, ei.s2)(),
                    { isGift: m } = (0, ny.Pv)(),
                    h = lO(m, c),
                    C = d === eu.h.PURCHASING;
                return (0, l.jsx)(lX.A, {
                    isConfirmationStep: p === a.pn.CONFIRM && null == u && null == s,
                    isEligibleForWowMoment: h,
                    shouldPrefetchWowMoment: C,
                    children: n({
                        ...t,
                        onClose: r,
                        analyticsSubscriptionType: eG.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
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
var i$ = n(143582),
    iJ = n(241524),
    iX = n(19311),
    i0 = n(4126);
let i2 = "(max-width: 485px)";
var i1 = n(875632),
    i4 = n(938430);
function i3(e) {
    let { step: t, onClose: n } = e,
        i = (0, iJ.A)("(max-height: 450px)");
    return t === a.pn.CONFIRM || t === a.pn.BENEFITS
        ? (0, l.jsx)("div", {})
        : (0, l.jsxs)("div", {
              className: e2()(i1.N1, nm.G),
              children: [
                  !i &&
                      (0, l.jsx)("div", {
                          className: i1.oZ,
                          "aria-hidden": "true",
                          children: (0, l.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: i1.F0,
                          }),
                      }),
                  (0, l.jsx)(nu.D, {
                      className: i1.G3,
                      onClick: () => n(),
                      "aria-label": F.intl.string(F.t.cpT0Cq),
                      children: (0, l.jsx)(nc.P, { size: "md", color: "currentColor", className: i1.ut }),
                  }),
              ],
          });
}
function i7(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: i, application: r, title: a, subtitle: s, description: o } = e;
    return null == r
        ? null
        : (0, l.jsx)("div", {
              className: i1.RP,
              children: (0, l.jsxs)(i0.$K, {
                  children: [
                      (0, l.jsx)(i0.KF, { application: r, asset: t }),
                      (0, l.jsx)(i0.kj, { children: a }),
                      (0, l.jsx)(i0.ri, {}),
                      (0, l.jsx)(i0.Mx, { title: s, description: o }),
                      (0, l.jsx)(i0.iH, { applicationId: r.id, storeListingBenefits: n, skuBenefits: i }),
                  ],
              }),
          });
}
function i6(e) {
    let { tierName: t, onConfirm: n, subscription: i } = e;
    return (0, l.jsxs)("div", {
        className: i1.NV,
        children: [
            (0, l.jsx)("img", { src: i4, alt: "", width: 300, height: 126 }),
            (0, l.jsx)(e5.D, {
                className: i1.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: F.intl.format(F.t.wLFT6z, { tier: t }),
            }),
            (0, l.jsx)(E.E, {
                className: i1.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: F.intl.format(F.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, l.jsx)(eY.UX, {
                children: (0, l.jsx)(iX.Ay, {
                    onPrimary: n,
                    primaryCTA: iX.ti.CONTINUE,
                    primaryText: F.intl.string(F.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var i8 = n(967198);
let [i5, i9] = (0, u.A)();
function re(e) {
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
    return (0, l.jsx)(i5.Provider, { value: s, children: i });
}
n(938796);
var rt = n(266060),
    rn = n(163437),
    rl = n(701273),
    ri = n(859860);
function rr(e) {
    let { onConfirm: t, onCancel: n, title: i, subtitle: r, confirmCta: a, showOpenDiscord: s = !0 } = e;
    return (0, l.jsxs)("div", {
        className: ri.RP,
        children: [
            (0, l.jsx)(e5.D, { className: ri.RS, variant: "heading-lg/extrabold", children: i }),
            null != r
                ? (0, l.jsx)(E.E, { className: ri.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, l.jsxs)("div", {
                className: ri.UD,
                children: [
                    s &&
                        (0, l.jsx)(eQ.$, {
                            variant: "primary",
                            text: F.intl.string(F.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, rl.A)("application_sub_mweb_success_modal"),
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
function ra(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, l.jsxs)("div", {
        className: ri.RP,
        children: [
            (0, l.jsx)(e5.D, {
                className: ri.RS,
                variant: "heading-lg/extrabold",
                children: F.intl.format(F.t.wLFT6z, { tier: n }),
            }),
            (0, l.jsx)(E.E, {
                className: ri.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: F.intl.format(F.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, l.jsxs)("div", {
                className: ri.UD,
                children: [
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ri.__invalid_openDiscordButton,
                        children: (0, l.jsx)(eQ.$, {
                            variant: "primary",
                            text: F.intl.string(F.t["8L5bZG"]),
                            onClick: () => (0, rl.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, l.jsx)(eQ.$, { variant: "secondary", text: F.intl.string(F.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function rs(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, rt.K)(),
        { subscriptionMetadataRequest: r } = i9(),
        { application: s } = (0, nj.V)(),
        u = (0, nM.S3)(),
        c = (0, iJ.A)(i2),
        d = (0, k.bG)([ep.A], () => ep.A.getGuild(r?.guild_id)),
        p = o.useCallback(() => t(a.pn.REVIEW), [t]);
    if (null == u) return null;
    let m = (0, rn.bg)(u.flags);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eY.dZ, {
                children: c
                    ? (0, l.jsx)(rr, {
                          confirmCta: F.intl.string(F.t.PBHFSq),
                          onConfirm: p,
                          onCancel: n,
                          title: F.intl.format(F.t["6n6oXA"], { tier: u.name }),
                          subtitle: m
                              ? F.intl.string(F.t.lzAoKB)
                              : F.intl.formatToPlainString(F.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, l.jsx)(i7, {
                          icon: i?.thumbnail,
                          storeListingBenefits: i?.benefits,
                          application: s ?? void 0,
                          title: F.intl.format(F.t.haiCxc, { tier: u.name }),
                          subtitle: m ? F.intl.string(F.t.RvtbP5) : F.intl.string(F.t.zY39Zu),
                          description: m
                              ? F.intl.formatToPlainString(F.t.QCe4rY, { applicationName: s?.name })
                              : F.intl.string(F.t.n1Pu8C),
                      }),
            }),
            !c &&
                (0, l.jsx)(eY.UX, {
                    children: (0, l.jsx)(iX.Ay, {
                        onBack: n,
                        backText: F.intl.string(F.t.TQBY1J),
                        onPrimary: p,
                        primaryCTA: iX.ti.CONTINUE,
                        primaryText: F.intl.string(F.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var ro = n(21161);
function ru(e) {
    let t,
        n,
        { handleClose: i, onSubscriptionConfirmation: r } = e,
        s = (0, rt.K)(),
        { application: u } = (0, nj.V)(),
        { readySlideId: c, updatedSubscription: d } = (0, f.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        p = (0, nM.S3)(),
        m = (0, iJ.A)(i2),
        { createMultipleConfettiAt: h } = o.useContext(ro.x),
        C = p?.name ?? "";
    function E() {
        i(), r?.();
    }
    let S = c === a.pn.CONFIRM,
        y = (0, rn.bg)(p?.flags ?? 0),
        A =
            null != s && s.benefits.length > 0
                ? F.intl.formatToPlainString(F.t["+IQQVM"], { benefitCount: s.benefits.length })
                : null,
        { showBenefitsFirst: P } = i9();
    return (
        P
            ? (t = m
                  ? (0, l.jsx)(ra, { tierName: C, onConfirm: E, subscription: d })
                  : (0, l.jsx)(i6, { tierName: C, onConfirm: E, subscription: d }))
            : m
              ? (t = (0, l.jsx)(rr, {
                    title: F.intl.format(F.t.ea6tZr, { tierName: C }),
                    subtitle:
                        null != s && s.benefits.length > 0
                            ? F.intl.formatToPlainString(F.t.HNepft, { benefits: A })
                            : null,
                    onConfirm: E,
                    confirmCta: F.intl.string(F.t.nlkywz),
                }))
              : ((t =
                    null != s && null != u
                        ? (0, l.jsx)(i7, {
                              icon: s.thumbnail,
                              storeListingBenefits: s.benefits,
                              application: u,
                              title: F.intl.format(F.t["Q+qktS"], { tier: C }),
                              subtitle: F.intl.string(F.t.ECKxXU),
                              description: y
                                  ? F.intl.format(F.t["MAtQk/"], { applicationName: u?.name })
                                  : F.intl.format(F.t.vHkMF4, { tier: C }),
                          })
                        : (0, l.jsx)(ev.A, {})),
                (n = (0, l.jsx)(iX.Ay, {
                    onPrimary: E,
                    primaryCTA: iX.ti.CONTINUE,
                    primaryText: F.intl.string(F.t["JtWl+a"]),
                }))),
        o.useEffect(() => {
            nR.Ay.useReducedMotion && S && h(window.innerWidth / 2, window.innerHeight / 2);
        }, [h, S]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(eY.dZ, { children: [(0, l.jsx)(nG.A, {}), t] }),
                null != n && (0, l.jsx)(eY.UX, { children: n }),
            ],
        })
    );
}
function rc(e) {
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
            displayCurrency: p,
        } = (0, eg.Jn)(),
        { setSubscriptionMetadataRequest: m, guildId: h, showBenefitsFirst: C } = i9(),
        E = (0, eP.Hp)(),
        S = (0, e_.A)(),
        y = (0, ei.qv)(),
        { isGift: A } = (0, ny.Pv)(),
        P = C ? a.pn.BENEFITS : a.pn.REVIEW,
        [I, g] = o.useState(!S || !c || d);
    return (o.useEffect(() => {
        g(!S || !c || d);
    }, [d, c, S]),
    o.useEffect(() => {
        null != h && m({ guild_id: h });
    }, [h, m]),
    o.useEffect(() => {
        s(t);
        let e = null != t ? ek.A.get(t) : null;
        I ||
            E ||
            (n((t) => {
                let n = null != e ? (0, O.y8)(e.id, !1, A, { paymentSourceId: u.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: p };
            }),
            null != e && (r(e?.skuId), y(P)));
    }, [E, t, A, I, u, p, i, n, s, r, y, P]),
    I)
        ? (0, l.jsx)(ev.A, {})
        : E
          ? (0, l.jsx)(eI.oO, {})
          : null;
}
var rd = n(649791),
    rp = n(427858),
    rm = n(766383);
let rh = (e) => {
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
    rC = {
        CHECKOUT_FLOW: et.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(rc, { ...e }) },
        CustomHeaderComponent: function (e) {
            let { step: t, onClose: n } = e,
                i = o.useCallback(() => n(!1), [n]);
            return (0, l.jsx)(i3, { step: t, onClose: i });
        },
        STEPS_BEFORE_CHECKOUT: [
            {
                key: a.pn.BENEFITS,
                renderStep: (e) => (0, l.jsx)(rs, { ...e }),
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
                        activeSubscription: p,
                    } = (0, f.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        contextMetadata: e.contextMetadata,
                        purchaseError: e.purchaseError,
                        activeSubscription: e.activeSubscription,
                    })),
                    { subscriptionMetadataRequest: m, showBenefitsFirst: E } = i9(),
                    S = E ? a.pn.BENEFITS : void 0,
                    y = (0, C.A)(),
                    A = (0, nM.S3)();
                if (null == y)
                    throw new h.v({
                        message: "Expected plan to be selected",
                        extraSentryInformation: { selectedPlan: y },
                    });
                let P = o.useRef(null),
                    I = (0, rn.bg)(A?.flags ?? 0);
                o.useEffect(() => {
                    null != d && null != P.current && P.current.scrollIntoView({ behavior: "smooth" });
                }, [d]);
                let g = o.useCallback(() => {
                    t(a.pn.ADD_PAYMENT_STEPS);
                }, [t]);
                return u === eu.h.PURCHASING
                    ? (0, l.jsx)(ev.A, {})
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(eY.dZ, {
                                  children:
                                      null == p
                                          ? (0, l.jsx)(rm._, {
                                                selectedPlan: y,
                                                verifiedPlanId: y.id,
                                                planGroup: n,
                                                handlePaymentSourceAdd: g,
                                                metadata: I ? void 0 : m,
                                            })
                                          : (0, l.jsx)(rp.A, {
                                                selectedPlan: y,
                                                verifiedPlanId: y.id,
                                                handlePaymentSourceAdd: g,
                                                planGroup: n,
                                                hasOpenInvoice: null != i,
                                                purchaseState: u,
                                            }),
                              }),
                              (0, l.jsx)(eY.UX, {
                                  children: (0, l.jsx)(rd.U, {
                                      resolveTenantReviewButtonProps: rh,
                                      onBack: () => null != S && t(S),
                                      handleStepChange: t,
                                      postPurchaseStep: a.pn.CONFIRM,
                                      analyticsLocation: s,
                                      baseAnalyticsData: r,
                                      flowStartTime: c.startTime,
                                      planGroup: n,
                                      openInvoiceId: i,
                                      metadata: I ? void 0 : m,
                                      backButtonEligible: !!E || void 0,
                                      disablePurchase: m?.guild_id == null && !I,
                                      onPaymentSourceAdd: g,
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
                return (0, l.jsx)(re, {
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
                                    (0, i$.f5)(i),
                                    null != a && a(),
                                    null != i && (l || i8.A.getGuildId() !== i) && (0, lm.pX)(eG.BVt.CHANNEL(i)));
                        },
                        [r, a, l, i],
                    );
                return n({ ...t, onClose: s, forceNewPaymentModal: !0 });
            },
            tenantAnalyticsLocation: i.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(ru, { ...e }) },
    };
var rf = n(237412),
    rE = n(869038),
    rS = n(852218),
    ry = n(7133),
    rA = n(83617);
let [rP, rI] = (0, u.A)();
function rg(e) {
    let { code: t, onClose: n, children: i } = e,
        r = (0, k.bG)([eh.A], () => eh.A.getMostRecentPremiumTypeSubscription()),
        s = (0, k.bG)([eh.A], () => eh.A.hasFetchedMostRecentPremiumTypeSubscription()),
        u = (0, k.bG)([eh.A], () => eh.A.getPremiumTypeSubscription()),
        [c, d] = o.useState(!1),
        [p, m] = o.useState(null),
        [h, C] = o.useState(null),
        [E, S] = o.useState(!1),
        [y, A] = o.useState(!1);
    o.useEffect(() => {
        c ||
            (0, lw.GM)(t, !1, !0)
                .then((e) => {
                    let t = ry.A.createFromServer(e);
                    m(t), d(!0), S(t.promotion?.promotionType === rS.pt.THIRD_PARTY_DIRECT_FULFILLMENT);
                })
                .catch((e) => {
                    C(e), d(!0);
                }),
            s || (0, t6.I8)();
    }, [t, s, c]);
    let P = (0, ex._V)(),
        { paymentSources: I, paymentSourceId: g, paymentAuthenticationState: v, setIsSubmittingCurrentStep: _ } = P,
        T = (0, ei.qv)(),
        x = (0, ei.s2)(),
        {
            setPurchaseState: N,
            setPurchaseError: b,
            purchaseState: R,
            contextMetadata: M,
        } = (0, f.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            purchaseState: e.purchaseState,
            contextMetadata: e.contextMetadata,
        })),
        { displayCurrency: O } = (0, eg.Jn)(),
        L = (0, ta.sw)(),
        w = p?.subscriptionPlan,
        U = p?.promotion,
        D = p?.subscriptionTrial,
        G = null != w ? (0, rA._w)(w, g, !1) : [],
        F = L?.currency ?? O ?? G[0],
        B = o.useMemo(() => (null != g ? { paymentSourceId: g, currency: F } : { currency: F }), [g, F]),
        H = o.useMemo(
            () => ({
                load_id: M.loadId,
                location: eG.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                subscription_type: eG.rzx.PREMIUM,
                payment_type: tx.fr[tx.VV.SUBSCRIPTION],
                subscription_plan_id: w?.id,
                sku_id: w?.skuId,
                checkout_flow: et.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            }),
            [M.loadId, w?.id, w?.skuId],
        ),
        Y = o.useCallback(() => {
            n?.(R === eu.h.COMPLETED);
        }, [n, R]),
        W = o.useCallback(async () => {
            let e = (0, j.W)(I, g);
            if (null == e) return !1;
            _(!0), b(null), N(eu.h.PURCHASING);
            try {
                return (
                    await rE.A.redeemGiftCode({ code: t, options: { paymentSource: e } }),
                    N(eu.h.COMPLETED),
                    eT.default.track(eG.HAw.PAYMENT_FLOW_COMPLETED, { ...H }),
                    !0
                );
            } catch (t) {
                return (
                    N(eu.h.FAIL),
                    b(t),
                    eT.default.track(eG.HAw.PAYMENT_FLOW_FAILED, {
                        ...H,
                        payment_error_code: t?.code,
                        payment_source_id: e.id,
                    }),
                    !1
                );
            } finally {
                _(!1);
            }
        }, [H, t, g, I, _, b, N]),
        V = o.useRef(!1),
        K = o.useCallback(() => {
            V.current ||
                ((V.current = !0),
                W()
                    .then((e) => {
                        T(e ? a.pn.CONFIRM : a.pn.REVIEW);
                    })
                    .finally(() => {
                        V.current = !1;
                    }));
        }, [W, T]);
    return (
        (0, ed.QR)(v),
        (0, ed.b)(x, v, T, N, !0, K),
        (0, l.jsx)(rP.Provider, {
            value: {
                code: t,
                giftCode: p,
                plan: w,
                promotion: U,
                trial: D,
                isDirectFulfillment: E,
                hasResolvedGiftCode: c,
                giftCodeResolveError: h,
                hasFetchedMostRecentPremiumTypeSubscription: s,
                recentSubscription: r,
                premiumSubscription: u,
                paymentModalArgs: P,
                priceOptions: B,
                analyticsData: H,
                handleClose: Y,
                redeemPromotion: W,
                confirmedUpgrade: y,
                setConfirmedUpgrade: A,
            },
            children: i,
        })
    );
}
var rv = n(830215),
    r_ = n(264779),
    rT = n(314019),
    rx = n(554632);
function rN(e) {
    let { user: t, code: n, className: i } = e;
    return (0, l.jsx)(E.E, {
        className: e2()(i, rT.iZ),
        variant: "text-md/normal",
        children: F.intl.format(F.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, l.jsx)(
                    lU.eu,
                    {
                        className: rT.FL,
                        size: nz._3.SIZE_24,
                        src: t.getAvatarURL(null, 24),
                        "aria-label": le.Ay.getUserTag(t, { decoration: "never" }),
                    },
                    n,
                );
            },
            tag: le.Ay.getUserTag(t),
            logoutHook: () => {
                rv.A.logout("inbound_promotion_redemption_modal", eG.BVt.BILLING_PROMOTION_REDEMPTION(n));
            },
        }),
    });
}
function rb(e) {
    let { promotion: t, code: n, isDirectFulfillment: i } = e,
        r = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
        a = (0, iP.Ay)(),
        s = (0, r_.WD)(t.id, a);
    return (0, l.jsxs)("div", {
        className: rT.rN,
        children: [
            (0, l.jsxs)("div", {
                className: rT.u5,
                children: [
                    (0, l.jsx)("img", { alt: "", src: s, className: rT.hb }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(e5.D, {
                                variant: "heading-xl/bold",
                                className: rT.DD,
                                children: t.inboundHeaderText,
                            }),
                            (0, l.jsx)(E.E, {
                                variant: "text-sm/normal",
                                className: rT.G3,
                                children: t.inboundBodyText,
                            }),
                        ],
                    }),
                ],
            }),
            i || null == r ? null : (0, l.jsx)(rN, { className: rT.KZ, user: r, code: n }),
        ],
    });
}
function rR(e) {
    let { title: t, bodyText: n, helpCenterLink: i, showUser: r = !1, user: a, code: s, handleClose: u } = e,
        c = o.useMemo(() => ({ text: F.intl.string(F.t.BddRzS), onClick: u }), [u]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: rT.t4,
                children: [
                    (0, l.jsx)("img", { alt: "", src: rx, className: rT.M6 }),
                    (0, l.jsx)(e5.D, { variant: "heading-lg/semibold", className: rT.DD, children: t }),
                    (0, l.jsx)(E.E, { variant: "text-md/normal", className: rT.G3, children: n }),
                    null != i
                        ? (0, l.jsx)(E.E, {
                              variant: "text-md/normal",
                              className: rT.G3,
                              children: F.intl.format(F.t["4uSp2y"], { helpCenterLink: i }),
                          })
                        : null,
                    r && null != a ? (0, l.jsx)(rN, { className: rT.EF, user: a, code: s }) : null,
                ],
            }),
            (0, l.jsx)(ea.lo, { primaryButtonProps: c }),
        ],
    });
}
function rj(e) {
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
            recentSubscription: h,
        } = rI(),
        C = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
        f = (0, eP.Hp)(),
        E = !d || !m,
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
        })({ user: C, giftCode: r, giftCodeResolveError: p, recentSubscription: h, plan: s, promotion: u, trial: c });
    return (o.useEffect(() => {
        E ||
            eT.default.track(eG.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
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
          ? (0, l.jsx)(rR, {
                title: S.title,
                bodyText: S.body,
                helpCenterLink: u?.inboundHelpCenterLink ?? "",
                showUser: S.showUser,
                handleClose: n,
                user: C ?? void 0,
                code: i,
            })
          : f
            ? (0, l.jsx)(eI.oO, {})
            : null;
}
function rM(e) {
    let { plan: t, isDirectFulfillment: n, paymentModalArgs: i, handleClose: r } = rI();
    eq()(null != t, "Missing plan");
    let { paymentSources: a, paymentSourceId: s } = i,
        o = (0, j.g)(a, s);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eY.dZ, {
                children: (0, l.jsx)(lL.Ay, { hideClose: !0, planId: t.id, onClose: r, paymentSourceType: o }),
            }),
            n
                ? (0, l.jsx)(eY.UX, {
                      children: (0, l.jsx)(l5.H, {
                          actions: [{ text: F.intl.string(F.t.UQvCf7), variant: "primary", onClick: r, size: "md" }],
                      }),
                  })
                : null,
        ],
    });
}
function rO(e) {
    let { handleStepChange: t } = e,
        { promotion: n, code: i, isDirectFulfillment: r } = rI();
    return (
        eq()(null != n, "Missing promotion"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(eY.dZ, { children: (0, l.jsx)(rb, { promotion: n, code: i, isDirectFulfillment: r }) }),
                (0, l.jsx)(eY.UX, {
                    children: (0, l.jsx)(ea.lo, {
                        primaryButtonProps: { text: F.intl.string(F.t.PDTjLN), onClick: () => t(a.pn.REVIEW) },
                    }),
                }),
            ],
        })
    );
}
var rL = n(732159),
    rk = n(262427),
    rw = n(134638);
let rU = { headerBadgePreset: "trial" };
function rD(e) {
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
    if (null == n) return (0, l.jsx)(I.Ed, { shouldShowUnifiedHeader: !0 });
    let p = r
            ? [{ key: "fractional-premium-notice", directContent: (0, l.jsx)(rG, { fractionalPremiumInfo: a }) }]
            : null,
        m = (0, l.jsx)(rF, { plan: t, renewalInvoicePreview: n }),
        h = (0, l.jsx)(rB, { renewalInvoicePreview: n, subscriptionTrial: i });
    return (0, l.jsx)(I.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: rU,
        upperInlineNoticeProps: p,
        purchaseItemContent: m,
        subscriptionDetailsContent: h,
        invoiceSummaryContent: null,
        paymentMethodContent: s,
        legalContent: u,
        invoiceTotalDueLabel: c,
        invoiceTotalDueValue: d,
        promotionalNoticeContent:
            null != i &&
            (0, l.jsx)(rk.J, {
                text: F.intl.format(F.t.A1MiZN, { months: i.intervalCount, planName: (0, O.RH)(t.id) }),
            }),
    });
}
function rG(e) {
    let { fractionalPremiumInfo: t } = e,
        n = (0, th.NQ)({ fractionalPremiumInfo: t, variant: th.uA.TRIAL });
    return null != n && "" !== n ? (0, l.jsx)(eZ.w, { type: "info", children: n }) : null;
}
function rF(e) {
    let { plan: t, renewalInvoicePreview: n } = e;
    return (0, l.jsx)(rw._, {
        type: v.u$.PREMIUM_WITH_TRIAL,
        invoicePreview: n,
        subscriptionPlan: t,
        isPrepaidPaymentSource: !1,
    });
}
function rB(e) {
    let { renewalInvoicePreview: t, subscriptionTrial: n } = e;
    if (null == t) return (0, l.jsx)(tn.y, {});
    let i = (0, R.Gj)(null, t, n, { isSubscriptionUpdate: !1 });
    return (0, l.jsx)(U._D, { ...i, defaultExpanded: !0 });
}
let rH = [...eU.oz],
    rY = [
        {
            key: a.pn.PROMOTION_INFO,
            renderStep: (e) => (0, l.jsx)(rO, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    ],
    rW = {
        CHECKOUT_FLOW: et.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(rj, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
        STEPS_BEFORE_CHECKOUT: rY,
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
                        handleClose: h,
                    } = rI();
                eq()(null != i && null != r, "Missing plan or trial");
                let { paymentSources: C, paymentSourceId: S, setPaymentSourceId: y, isSubmittingCurrentStep: P } = c,
                    I = (0, k.bG)([eh.A], () => eh.A.getPremiumTypeSubscription()),
                    { analyticsLocations: g } = (0, ti.Ay)(),
                    { hasAcceptedTerms: v, checkoutPaymentSources: _ } = (0, f.t4)((e) => ({
                        hasAcceptedTerms: e.hasAcceptedTerms,
                        checkoutPaymentSources: e.get("checkoutPaymentSources"),
                    })),
                    T = (0, tr.A)(),
                    { immediateDelivery: N } = (0, x.U)(),
                    [b, M] = (0, to.YV)({
                        items: [{ planId: i.id, quantity: 1 }],
                        renewal: !0,
                        paymentSourceId: S,
                        code: n,
                        subscriptionId: I?.id,
                        analyticsLocations: g,
                        analyticsLocation: eG.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                    });
                (0, ta.F0)(b, M);
                let w = (0, ta.sw)(),
                    D = o.useCallback(async () => {
                        function e() {
                            return t(a.pn.CONFIRM);
                        }
                        null == I || p || null == r || null == s
                            ? (await d()) && e()
                            : (0, nl.openModal)((t) => {
                                  let n;
                                  if (null == w) n = (0, l.jsx)(tn.y, { className: rT.wG });
                                  else {
                                      let e = (0, O.y8)(i.id, !1, !1, u);
                                      n = (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(E.E, {
                                                  className: rT.ex,
                                                  variant: "text-md/normal",
                                                  children: F.intl.format(F.t.DLsu0k, {
                                                      lineItemsHook: function (e, t) {
                                                          return (0, l.jsx)(
                                                              "ul",
                                                              {
                                                                  children: I.items.map((e) => {
                                                                      let t = eU.hd[e.planId],
                                                                          n = F.intl.formatToPlainString(F.t.G0EnAP, {
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
                                              (0, l.jsx)(E.E, {
                                                  className: rT.ex,
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
                                  return (0, l.jsx)(rL.ConfirmModal, {
                                      onConfirm: async () => {
                                          m(!0), (await d()) && e();
                                      },
                                      title: F.intl.string(F.t.MaZ28z),
                                      cancelText: F.intl.string(F.t["ETE/oC"]),
                                      confirmText: F.intl.string(F.t["wfx/Hp"]),
                                      ...t,
                                      variant: "primary",
                                      children: n,
                                  });
                              });
                    }, [t, I, p, r, s, i, u, w, d, m]),
                    G = (0, tI.iB)({
                        checkoutPaymentSources: _,
                        paymentSourceId: S,
                        location: "InboundPromotionReviewStep",
                    }),
                    B = (0, eO.Y)(),
                    H = (0, j.W)(C, S),
                    Y = o.useMemo(
                        () => ({
                            prependOption:
                                0 === Object.keys(C).length ? { label: F.intl.string(F.t.iA5vA1), value: null } : null,
                            isTrial: !0,
                        }),
                        [C],
                    );
                if (null != M && null == w)
                    return (0, l.jsx)(rR, {
                        title: F.intl.string(F.t.ARIsMA),
                        bodyText: F.intl.string(F.t["3u+6q7"]),
                        helpCenterLink: s?.inboundHelpCenterLink ?? "",
                        handleClose: h,
                        user: void 0,
                        code: n,
                    });
                if (!B || null == w) return (0, l.jsx)(tn.y, {});
                let W = (0, l.jsx)(A.N, {
                        setPaymentSourceId: y,
                        paymentSourceId: S,
                        location: "InboundPromotionReview",
                        label: F.intl.string(F.t["mmDvV+"]),
                        additionalPaymentSourceDropdownProps: Y,
                        onPaymentSourceAdd: () => t(a.pn.ADD_PAYMENT_STEPS),
                        hideCurrencySelect: !0,
                    }),
                    V = (0, tT.de)({ renewalInvoice: w, isSubscriptionUpdate: !1 }),
                    { renewalPrice: K, multiPeriodDiscountAttributes: q } = (0, R.QM)(w, i, {
                        discountOffer: null,
                        subscriptionTrial: r,
                    }),
                    Z = F.intl.formatToPlainString(F.t.BQPav6, { planPremiumType: O.Ay.getDisplayName(i.id) }),
                    z = (0, l.jsx)(U._P, {
                        variant: {
                            type: U.I0.SubscriptionTrial,
                            purchaseButtonText: Z,
                            totalDue: 0,
                            renewalPrice: K,
                            currency: w.currency,
                            interval: i.interval,
                            intervalCount: i.intervalCount,
                            startDate: V,
                            multiPeriodDiscountAttributes: q,
                        },
                        paymentSourceType: (0, j.W)(C, S)?.type ?? null,
                        immediateDelivery: N,
                    }),
                    Q = null;
                return (
                    null == H ? (Q = F.intl.string(F.t.L7jbQV)) : v || (Q = F.intl.string(F.t.XdvBLS)),
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsxs)(eY.dZ, {
                                children: [
                                    (0, l.jsx)(nG.A, {}),
                                    (0, l.jsx)(rD, {
                                        plan: i,
                                        renewalInvoicePreview: w,
                                        subscriptionTrial: r,
                                        shouldShowFractionalPremiumBanner: T.isFractionalPremiumActive,
                                        fractionalPremiumInfo: T,
                                        paymentMethodContent: W,
                                        legalContent: z,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(eY.UX, {
                                children: (0, l.jsx)(ea.lo, {
                                    onBackClick: () => t(a.pn.PROMOTION_INFO),
                                    primaryButtonProps: {
                                        text: Z,
                                        tooltipText: Q ?? void 0,
                                        disabled: null == H || !H.canRedeemTrial() || G || !v,
                                        loading: P,
                                        onClick: () => {
                                            if (null != H && v) return D();
                                        },
                                        variant: (0, iX.CY)(iX.ti.PURCHASE),
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
                    o = (0, k.bG)([eh.A], () => eh.A.getPremiumTypeSubscription());
                return (0, l.jsx)(en.M, {
                    activeSubscription: o,
                    stepConfigs: n,
                    skuIDs: rH,
                    loadId: i,
                    unifiedCheckoutFlow: et.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
                    children: (0, l.jsx)(s.Qt, { children: (0, l.jsx)(rg, { code: t, onClose: r, children: a }) }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
                return n({ ...t, shakeWhilePurchasing: !0, tenantManagesPaymentAuth: !0 });
            },
        },
        CustomHeaderComponent: function (e) {
            let { step: t } = e,
                { plan: n, handleClose: i } = rI(),
                r = (0, f.t4)((e) => e.purchaseState);
            return (0, l.jsx)(rf.A, {
                enablePremiumBrandRefresh: !0,
                forceBrandRefreshHeader: !0,
                premiumType: n?.premiumSubscriptionType ?? eU.PremiumTypes.TIER_2,
                className: rT.X9,
                currentStep: t,
                purchaseState: r,
                hideCloseButton: !0,
                onClose: i,
            });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(rM, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    };
var rV = n(694306);
function rK(e) {
    let { handleClose: t } = e,
        n = (0, f.t4)((e) => e.selectedSkuId),
        { application: i } = (0, nj.V)(),
        r = (0, nM.gU)(),
        { isGift: a, giftRecipient: s } = (0, ny.Pv)();
    eq()(null != n, "Expected selectedSkuId"), eq()(null != i, "Expected application");
    let o = r[n];
    eq()(null != o, "Expected sku");
    let u = a
        ? F.intl.formatToPlainString(F.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: s?.username ?? "your recipient",
          })
        : F.intl.formatToPlainString(F.t.wK0IbP, { applicationName: i.name, itemName: o.name });
    return (0, l.jsxs)(eY.dZ, {
        children: [
            (0, l.jsx)(nG.A, {}),
            (0, l.jsxs)("div", {
                className: rV.EL,
                children: [
                    (0, l.jsx)(e5.D, { variant: "heading-xxl/bold", className: rV.RS, children: "Success!" }),
                    (0, l.jsx)(E.E, { variant: "text-md/normal", children: u }),
                    (0, l.jsx)("div", { className: rV.yF }),
                    (0, l.jsx)(eQ.$, { onClick: t, text: F.intl.string(F.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var rq = n(67480),
    rZ = n(328968),
    rz = n(371794),
    rQ = n(78741);
a.pn.GIFT_CUSTOMIZATION;
let r$ = {
    CustomHeaderComponent: function (e) {
        let { step: t, onClose: n } = e,
            i = o.useCallback(() => n(!1), [n]);
        return (0, l.jsx)(i3, { step: t, onClose: i });
    },
    CHECKOUT_FLOW: r.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [a.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, ny.Pv)(),
                a = (0, f.t4)((e) => e.selectedSkuId),
                s = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
                u = (0, k.bG)([rq.A], () => (null != a ? rq.A.get(a) : null), [a]),
                c = ls(),
                d = (0, k.bG)([rZ.A], () => (null != a ? rZ.A.getForSKU(a) : null), [a]),
                p =
                    d?.headerBackground != null && u?.applicationId != null
                        ? (0, rz.YE)(u.applicationId, d.headerBackground, 256)
                        : void 0;
            async function m(e, t) {}
            let h = null == i || i.id === s?.id || t.length > eU.Jo,
                C = o.useMemo(() => ({ disabled: h }), [h]);
            return (0, l.jsx)(r.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: r.XZ.TWO_COLUMN,
                renderLeftColumn: function () {
                    return (0, l.jsxs)("div", {
                        className: rQ.P6,
                        children: [
                            u?.name != null &&
                                (0, l.jsx)(e5.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: u.name,
                                }),
                            null != p && (0, l.jsx)("img", { src: p, alt: u?.name ?? "", className: rQ.LC }),
                        ],
                    });
                },
                renderRightColumn: function () {
                    return (0, l.jsxs)("div", {
                        className: rQ.P6,
                        children: [
                            (0, l.jsx)(lt, { recipients: c, selectedSkuId: a, validateSelectedGift: m }),
                            (0, l.jsx)(lc.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: rQ.iX,
                                innerClassName: rQ.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: C,
            });
        },
        [a.pn.REVIEW]: nn.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(rK, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: i.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var rJ = n(429913),
    rX = n(733391),
    r0 = n(871123),
    r2 = n(26594),
    r1 = n(510022),
    r4 = n(317560),
    r3 = n(275256),
    r7 = n(910200),
    r6 = n(40570);
function r8(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, ti.Ay)(),
        { selectedSkuId: i, entitlementsGranted: r } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, nj.V)(),
        s = (0, nM.gU)(),
        { isGift: u, giftRecipient: c } = (0, ny.Pv)();
    eq()(null != i, "Expected selectedSkuId"), eq()(null != a, "Expected application");
    let d = s[i];
    eq()(null != d, "Expected sku");
    let p = r.find((e) => e.sku_id === i),
        m = (0, r2.G)(p, { isGift: u });
    return (o.useEffect(() => {
        u || ((0, r4.j)(), t(), (0, r1.n)({ sku: d, application: a, analyticsLocations: n, entitlement: p }));
    }, [u, d, a, t, n, p]),
    u)
        ? (0, l.jsxs)(eY.dZ, {
              children: [
                  (0, l.jsx)(nG.A, {}),
                  (0, l.jsxs)("div", {
                      className: r6.EL,
                      children: [
                          (0, l.jsx)("div", {
                              className: r6.KD,
                              children: (0, l.jsx)(r3.default, {
                                  imageUrl: (0, r0.fq)(d) ?? void 0,
                                  backgroundImageUrl: (0, r0.xf)(d),
                                  altText: d.name,
                                  rewardGraphic: m?.graphic,
                              }),
                          }),
                          (0, l.jsx)(e5.D, {
                              variant: "heading-xl/semibold",
                              className: r6.RS,
                              children: F.intl.string(F.t["5glWta"]),
                          }),
                          (0, l.jsx)(E.E, {
                              variant: "text-md/normal",
                              children: F.intl.formatToPlainString(F.t["2VjPTw"], {
                                  itemName: d.name,
                                  giftRecipient: c?.username ?? "your recipient",
                              }),
                          }),
                          null != m &&
                              (0, l.jsx)("div", {
                                  className: r6.Is,
                                  children: (0, l.jsx)(r7.O0, { Icon: m.Icon, text: m.text }),
                              }),
                          (0, l.jsx)("div", {
                              className: r6.UD,
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
var r5 = n(889137),
    r9 = n(742158),
    ae = n(198052),
    at = n(238017),
    an = n(650588),
    al = n(993046),
    ai = n(763827),
    ar = n(403362),
    aa = n(832163),
    as = n(31969),
    ao = n(44724),
    au = n(980094),
    ac = n(366523),
    ad = n(806931),
    ap = n(733211);
function am(e) {
    let { handleClose: t, sku: n, application: i } = e,
        r = o.useCallback(() => {
            (0, ao.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        a = o.useCallback(() => {
            t();
            let e = aa.A.getStorefrontState(n.applicationId)?.activePage;
            (0, r0.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: i?.guildId,
                skuId: n.id,
            }) ||
                ((0, nl.closeAllModals)(),
                (0, ao.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, l.jsx)("div", {
        className: ap.$O,
        children: (0, l.jsx)(e$.Q, {
            text: F.intl.string(F.t.ImioFL),
            onMouseDown: r,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let ah = {
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
                            setEmojiConfetti: h,
                            setSoundEffect: C,
                            giftingOrigin: S,
                            additionalUserIds: y,
                        } = (0, ny.Pv)(),
                        A = (0, f.t4)((e) => e.selectedSkuId),
                        { application: P } = (0, nj.V)(),
                        I = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
                        g =
                            ((t = I?.id),
                            (n = ls()),
                            (i = (function (e) {
                                let t = (0, k.bG)([ai.A], () => (ai.A.isConnected() ? ai.A.getChannelId() : null)),
                                    [n, l] = o.useState([]);
                                return (
                                    o.useEffect(() => {
                                        let n = null != t ? ae.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, ad.Xw)(t) && !(0, ad.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, ad.Ay)(e) && !(0, ad.Ay)(t)
                                                ? -1
                                                : (0, ad.Ay)(t) && !(0, ad.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, k.yK)([D.default], () => y?.map(D.default.getUser).filter(ar.Vq) ?? [], [y])),
                            o.useMemo(
                                () =>
                                    ll().uniqWith(
                                        [...(null != d ? [d] : []), ...r, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, r, i, n],
                            )),
                        v = (0, k.bG)([rq.A], () => (null != A ? rq.A.get(A) : null), [A]),
                        { userPrice: _ } = (0, al.CD)({ sku: v, priceSetAssignmentPurchaseType: eG.lid.GIFT }),
                        T = (0, as.F)("gift_customization", { applicationId: P?.id, skuId: v?.id }),
                        x = (0, r0.fq)(v),
                        N = (0, r0.xf)(v);
                    async function b(e, t) {}
                    function R(e) {
                        null != C && C(null == e ? void 0 : e);
                    }
                    function j() {
                        return (0, l.jsxs)("div", {
                            className: ap.mT,
                            children: [
                                null != x &&
                                    (0, l.jsx)(ac.A, {
                                        containerClassName: ap.T3,
                                        cardImage: x,
                                        cardBackgroundImage: N,
                                        altText: v?.name ?? "",
                                        shape: "square",
                                    }),
                                (0, l.jsxs)("div", {
                                    className: ap._T,
                                    children: [
                                        (0, l.jsx)(an.A, { sound: m, onSelect: R }),
                                        (0, l.jsx)(at.A, {
                                            setEmojiConfetti: h,
                                            emojiConfetti: null == p ? void 0 : p,
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }
                    function M() {
                        return (0, l.jsxs)("div", {
                            className: ap.Tc,
                            children: [
                                null != d && (S === eU.vQ.USER_PROFILE_WISHLIST || S === eU.vQ.DM_CHANNEL_WISHLIST)
                                    ? (0, l.jsx)(lp.Z, { giftRecipient: d })
                                    : (0, l.jsx)(lt, { selectedSkuId: A, validateSelectedGift: b, recipients: g }),
                                (0, l.jsx)(lc.A, {
                                    onTextChange: (e) => c?.(e),
                                    pendingText: u,
                                    currentText: u,
                                    disableThemedBackground: !0,
                                    className: ap.iX,
                                    innerClassName: ap.pt,
                                }),
                                null == v
                                    ? null
                                    : (0, l.jsxs)("div", {
                                          className: ap.AN,
                                          children: [
                                              (0, l.jsx)(r9.z, {
                                                  className: ap.jr,
                                                  children: F.intl.string(F.t.PpoJzt),
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: ap.Wx,
                                                  children: [
                                                      (0, l.jsx)("div", {
                                                          className: ap.Xb,
                                                          children:
                                                              null != v &&
                                                              null != x &&
                                                              (0, l.jsx)(ac.A, {
                                                                  containerClassName: ap.Iy,
                                                                  cardImage: x,
                                                                  cardBackgroundImage: N,
                                                                  altText: v.name,
                                                                  shape: "square",
                                                              }),
                                                      }),
                                                      (0, l.jsxs)("div", {
                                                          className: ap.vz,
                                                          children: [
                                                              null != P && (0, l.jsx)(au.Q, { application: P }),
                                                              (0, l.jsx)(E.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: v.name,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)(E.E, { variant: "text-md/semibold", children: _ }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                null != v &&
                                    (0, r0.Ri)(v) &&
                                    (0, l.jsx)(eZ.w, { type: "info", children: F.intl.string(F.t.lORYb6) }),
                                null != T &&
                                    (0, l.jsx)(r7.O0, {
                                        Icon: T.Icon,
                                        text: T.text,
                                        endDatetime: T.endsAt,
                                        tooltip: T.tooltip,
                                    }),
                                null != v && (0, l.jsx)(am, { handleClose: s, sku: v, application: P }),
                            ],
                        });
                    }
                    return {
                        renderStepBody: function () {
                            return (0, l.jsxs)("div", { className: ap.Du, children: [j(), M()] });
                        },
                        getLeftColumnComponent: j,
                        getRightColumnComponent: M,
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
        [a.pn.REVIEW]: nn.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(r8, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: r, isGift: a, skuId: s, ...u } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, rJ.h)(t);
                    o.useEffect(() => {
                        null == l ||
                            null == n ||
                            rZ.A.isFetchingForSKU(n) ||
                            null != rq.A.get(n) ||
                            (0, rX.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: r, skuId: s }),
                (0, l.jsx)(en.M, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: r,
                    skuIDs: [s],
                    purchaseType: tx.VV.ONE_TIME,
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
            n = (0, r5.YW)(t)
                .with(a.pn.GIFT_CUSTOMIZATION, () => F.intl.string(F.t["JCFN/y"]))
                .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => F.intl.string(F.t.lDbi6H))
                .with(a.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, l.jsx)(nS.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var aC = n(977445),
    af = n(52635),
    aE = n(211287),
    aS = n(855104),
    ay = n(132500),
    aA = n(623373),
    aP = n(739508),
    aI = n(310829),
    ag = n(715054);
(0, ay.A)();
var av = n(457008),
    a_ = n(145659);
n(322076);
var aT = n(318254),
    ax = n(132198),
    aN = n(120992),
    ab = n(630934),
    aR = n(319820),
    aj = n(831123);
function aM(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: i, isSocialLayerGameItem: r } = (0, aR.AO)({ sku: t }),
        a = (0, ab.oO)(i);
    r ? (a = F.intl.string(V.default.qwSlCO)) : (0, aA.Ab)(i) && (a = F.intl.string(F.t["0TmQRG"]));
    let s = (0, ab.dL)(t),
        o = (0, n_.EZ)(t.id) ? ax.m[t.id].render({ className: aj.$ }) : (0, l.jsx)(tv.WH, { sku: t, product: i });
    return (0, l.jsx)(tv.f7, { label: s, description: a, graphic: o, price: null != n ? `${n}` : "", PriceIcon: aT.C });
}
function aO(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, aN.c)({ applicationId: (0, aI.P)(t), skuIDs: [t] });
    let i = (0, nb.bG)([rq.A], () => rq.A.get(t), [t]);
    return null == i
        ? (0, l.jsx)(tn.y, { type: tn.y.Type.PULSING_ELLIPSIS })
        : (0, l.jsx)(aM, { sku: i, orbPriceAmount: n });
}
function aL(e) {
    let { orbBalance: t } = e;
    return (0, l.jsx)(U.vW, { label: F.intl.string(F.t.y0WGqP), value: null != t ? `${t}` : "", Icon: aT.C });
}
function ak() {
    return F.intl.string(F.t.wmcDyu);
}
function aw() {
    let { immediateDelivery: e } = (0, x.U)(),
        { skuProductLine: t, skuId: n } = aD(),
        i = ak(),
        r = (0, o.useMemo)(() => ({ type: U.I0.OrbsRedemption, purchaseButtonText: i }), [i]);
    return t === eG.EZt.SOCIAL_LAYER_GAME_ITEM
        ? (0, l.jsx)(af.EB, { skuId: n, purchaseButtonText: i, checkoutLegalType: U.I0.OrbsGameShop })
        : (0, l.jsx)(U._P, { variant: r, paymentSourceType: null, immediateDelivery: e });
}
let aU = (0, o.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    skuProductLine: null,
    skuApplicationId: void 0,
    analyticsSourceLocation: void 0,
});
function aD() {
    return (0, o.useContext)(aU);
}
let aG = { payment_gateway: tx.kM.VIRTUAL_CURRENCY, currency: eG.Yri.DISCORD_ORB },
    aF = {
        CHECKOUT_FLOW: r.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [a.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    { primaryButtonProps: n, ...i } = (function (e) {
                        let { handleStepChange: t } = e,
                            { isRedeeming: n, skuId: i, skuApplicationId: r } = aD(),
                            { enabled: s } = aE.A.useConfig({ location: "orb_checkout_review_step" }),
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
                                orbPriceAmount: p,
                                orbBalanceToDisplay: m,
                                onClickCheckout: h,
                                errorMessage: C,
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
                                    } = aD(),
                                    { analyticsLocations: d } = (0, ti.Ay)(),
                                    { setPurchaseState: p, firstConstraintReasonCode: m } = (0, f.t4)((e) => ({
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    h = (0, aS.gN)(),
                                    C = (0, o.useRef)(h),
                                    { emitOrbCheckoutPaymentFlowEvent: E } = (function (e) {
                                        let {
                                                skuId: t,
                                                skuApplicationId: n,
                                                skuProductLine: l,
                                                orbProductContext: i,
                                                analyticsLocations: r,
                                                analyticsSourceLocation: s,
                                            } = e,
                                            { activitySessionId: u } = (0, nj.V)(),
                                            { hasPaymentSources: c } = (0, g.j)(),
                                            {
                                                loadId: d,
                                                startTime: p,
                                                discoverySessionId: m,
                                            } = (0, f.t4)((e) => e.contextMetadata),
                                            h = (0, o.useMemo)(
                                                () => ({
                                                    load_id: d,
                                                    discovery_session_id: m,
                                                    application_id: n,
                                                    sku_product_line: l,
                                                    location: r,
                                                    location_stack: r,
                                                    sku_id: t,
                                                    activity_session_id: u,
                                                    payment_gateway: tx.ps.VIRTUAL_CURRENCY,
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
                                                        checkout_design: a_.r.UNIFIED,
                                                        checkout_flow: et.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [d, m, u, t, n, l, r, s, i],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, o.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - p;
                                                    e === eG.HAw.PAYMENT_FLOW_STARTED
                                                        ? eT.default.track(eG.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...h,
                                                              has_saved_payment_source: c,
                                                              payment_gateway: tx.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === eG.HAw.PAYMENT_FLOW_LOADED
                                                          ? eT.default.track(eG.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...h,
                                                                has_saved_payment_source: c,
                                                                initial_step: a.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === eG.HAw.PAYMENT_FLOW_CANCELED
                                                            ? eT.default.track(eG.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...h,
                                                                  duration_ms: n,
                                                              })
                                                            : e === eG.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? eT.default.track(eG.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...h,
                                                                    duration_ms: n,
                                                                })
                                                              : e === eG.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? eT.default.track(eG.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...h,
                                                                      duration_ms: n,
                                                                  })
                                                                : eT.default.track(eG.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...h,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [p, h, c],
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
                                        null !== C.current &&
                                        (E(eG.HAw.PAYMENT_FLOW_FAILED, l), (C.current = null));
                                }, [l, E]);
                                let S = (0, o.useCallback)(() => {
                                        (C.current = h),
                                            E(eG.HAw.PAYMENT_FLOW_COMPLETED),
                                            i((e) => {
                                                p(eu.h.COMPLETED),
                                                    t(a.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [i, p, h, E, t]),
                                    y = C.current ?? h,
                                    A = null != n ? n.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == n,
                                    errorMessage: (0, o.useMemo)(() => (0, av.$9)(l, m), [l, m]),
                                    orbPriceAmount: A,
                                    orbBalanceToDisplay: y,
                                    onClickCheckout: S,
                                };
                            })({ handleStepChange: t }),
                            E = (0, aC.uS)(r),
                            {
                                disabled: S,
                                tooltipText: y,
                                text: A,
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
                                return { disabled: i, tooltipText: r, text: ak() };
                            })({ orbBalance: m, orbPriceAmount: s ? u : p, isInTestMode: E }),
                            P = (0, o.useMemo)(
                                () => ({ onClick: h, loading: n, text: A, disabled: S, tooltipText: y }),
                                [h, n, A, S, y],
                            ),
                            I = E ? F.intl.string(F.t.OvMyMd) : null;
                        return {
                            isStepLoading: d,
                            upperInlineNoticeProps: (0, o.useMemo)(() => {
                                if (null != I || null != C) {
                                    let e = [];
                                    return (
                                        null != I &&
                                            e.push({ type: "warning", message: I, key: "test-mode-warning-notice" }),
                                        null != C &&
                                            e.push({ type: "critical", message: C, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [I, C]),
                            purchaseItemContent: (0, l.jsx)(aO, { skuId: i, orbPriceAmount: s ? c : p }),
                            paymentMethodContent: (0, l.jsx)(aL, { orbBalance: m }),
                            legalContent: (0, l.jsx)(aw, {}),
                            primaryButtonProps: P,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({ handleStepChange: t });
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eY.dZ, { children: (0, l.jsx)(I.T_, { ...i }) }),
                        (0, l.jsx)(eY.UX, { children: (0, l.jsx)(ea.lo, { primaryButtonProps: n }) }),
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
                        onRedeemVirtualCurrency: p,
                        skuProductLine: m,
                        skuApplicationId: h,
                    } = (function (e) {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: i, order: r } = e,
                            a = (0, k.bG)([D.default], () => O.Ay.canUseShopDiscounts(D.default.getCurrentUser())),
                            s = (0, k.bG)([rq.A], () => rq.A.get(t), [t]),
                            u = null != s ? s.productLine : null,
                            c = s?.applicationId ?? (0, aI.P)(t),
                            d = (0, al.JL)({ sku: s }),
                            { product: p } = (0, nX.q)(t),
                            m = (0, o.useMemo)(() => {
                                if (null != d) return { orbPriceAmount: d.amount };
                                if (null != p) {
                                    let e = (0, aA.CW)({ product: p, hasShopDiscount: a });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [d, p, a]);
                        m?.orbPriceAmount == null &&
                            (0, aP.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: h,
                                isSubmitting: C,
                                error: f,
                            } = (0, ag.Q)({ skuId: t, loadId: n, order: r, onSignFailure: i }),
                            E = (0, o.useCallback)(
                                (e) => {
                                    h(t, n, (n) => {
                                        l?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, h, l],
                            );
                        return {
                            skuId: t,
                            skuProductLine: u,
                            skuApplicationId: c,
                            loadId: n,
                            orbProductContext: m,
                            onRedeemVirtualCurrency: E,
                            isRedeeming: C,
                            orbRedemptionError: f,
                        };
                    })({ skuId: t, loadId: n, order: a, onSignFailure: s }),
                    C = (0, o.useMemo)(
                        () => ({
                            orbProductContext: u,
                            isRedeeming: c,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: p,
                            skuId: t,
                            skuProductLine: m,
                            skuApplicationId: h,
                            analyticsSourceLocation: i,
                        }),
                        [u, c, d, p, t, m, h, i],
                    );
                return (0, l.jsx)(aU.Provider, { value: C, children: r });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l, skuProductLine: i } = aD(),
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
                    })({ orbProductContext: l, skuProductLine: i, overrideAnalyticParams: aG });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: aG,
        },
    };
var aB = n(75304);
let aH = {
    [aB.C.ORB_CHECKOUT]: {
        flowType: aB.C.ORB_CHECKOUT,
        implemented: !0,
        purchaseType: eG.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: aF,
    },
    [aB.C.COLLECTIBLES_CHECKOUT]: {
        flowType: aB.C.COLLECTIBLES_CHECKOUT,
        implemented: !0,
        purchaseType: eG.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: ly,
    },
    [aB.C.SLAYER_STOREFRONT_CHECKOUT]: {
        implemented: !0,
        flowType: aB.C.SLAYER_STOREFRONT_CHECKOUT,
        purchaseType: eG.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: ah,
    },
    [aB.C.PREMIUM_CHECKOUT]: {
        implemented: !0,
        flowType: aB.C.PREMIUM_CHECKOUT,
        purchaseType: eG.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: iQ,
    },
    [aB.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: {
        implemented: !0,
        flowType: aB.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        purchaseType: eG.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: rW,
    },
    [aB.C.PREMIUM_APPS_OTP_CHECKOUT]: {
        implemented: !0,
        flowType: aB.C.PREMIUM_APPS_OTP_CHECKOUT,
        purchaseType: eG.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: r$,
    },
    [aB.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
        implemented: !0,
        flowType: aB.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        purchaseType: eG.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: rC,
    },
    [aB.C.GUILD_PRODUCT_CHECKOUT]: {
        implemented: !0,
        purchaseType: eG.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: nE,
        flowType: aB.C.GUILD_PRODUCT_CHECKOUT,
    },
    [aB.C.GUILD_ROLE_CHECKOUT]: {
        implemented: !0,
        flowType: aB.C.GUILD_ROLE_CHECKOUT,
        TENANT_CHECKOUT_FLOW_CONFIG: lZ,
        purchaseType: eG.VVm.SUBSCRIPTION,
    },
    [aB.C.GUILD_BOOST_CHECKOUT]: {
        implemented: !0,
        flowType: aB.C.GUILD_BOOST_CHECKOUT,
        purchaseType: eG.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: nt,
    },
    [aB.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: {
        implemented: !0,
        flowType: aB.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
        purchaseType: eG.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: J,
    },
};
