n.d(t, { Y: () => si });
var l,
    i,
    r = n(477900),
    a = n(793574),
    s = n(529427),
    o = n(166532),
    u = n(491057),
    c = n(582128),
    d = n(786300);
let [m, p] = (0, d.A)();
function C(e) {
    let {
            serverName: t,
            regionId: n,
            gameId: l,
            gameName: i,
            isPlanChange: a = !1,
            isPlanUpgrade: s = !1,
            onBack: o,
            children: u,
        } = e,
        d = c.useMemo(() => {
            let e = {};
            return "" !== t && (e.game_server_name = t), "" !== n && (e.game_server_region = n), e;
        }, [t, n]),
        p = c.useMemo(
            () => ({
                subscriptionMetadataRequest: d,
                gameId: l,
                gameName: i,
                isPlanChange: a,
                isPlanUpgrade: s,
                onBack: o,
            }),
            [d, l, i, a, s, o],
        );
    return (0, r.jsx)(m.Provider, { value: p, children: u });
}
var h = n(465657),
    f = n(71804),
    E = n(558620),
    S = n(206441),
    y = n(834730),
    I = n(854354),
    g = n(987666),
    A = n(377058),
    P = n(482419),
    v = n(38785),
    _ = n(202475),
    x = n(400612),
    T = n(463376),
    N = n(473617),
    b = n(818824),
    j = n(596034),
    R = n(669510),
    M = n(888751),
    O = n(216641),
    L = n(815545),
    k = n(158045),
    w = n(580630);
n(321073);
var U = n(17928),
    D = n(403581),
    G = n(557026),
    F = n(287809),
    B = n(252589),
    H = n(375708);
function W(e, t) {
    let { nitroPriceLabel: n, nitroPriceAmount: l, standardPriceAmount: i } = e;
    return t && null != n && null != l && null != i && l < i;
}
let Y = {
    standardPriceLabel: void 0,
    nitroPriceLabel: void 0,
    standardPriceAmount: void 0,
    nitroPriceAmount: void 0,
    priceCurrency: void 0,
};
function V(e) {
    let t = (0, E.A)(),
        { games: n } = (0, B.Y)();
    return c.useMemo(() => {
        let l, i;
        if (null == t || null == e) return Y;
        let { subscriptionPlanInvoiceItem: r } = (0, L.Sb)(e, t),
            a = r?.subscriptionPlanPrice;
        if (null == a) return Y;
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
            nitroPriceLabel: H.intl.formatToPlainString(H.t.AbOLNu, { price: (0, w.$g)(a, s) }),
            standardPriceAmount: i,
            nitroPriceAmount: a,
            priceCurrency: s,
        };
    }, [t, e, n]);
}
var K = n(394107),
    Z = n(583741);
function q(e) {
    let { fallback: t, invoicePreview: n } = e,
        { gameName: l } = p(),
        i = (0, E.A)(),
        a = W(
            V(n),
            (0, U.bG)([F.default], () => k.Ay.canUseShopDiscounts(F.default.getCurrentUser())),
        ),
        s = null != i ? n.findInvoiceItemByPlanId(i.id) : null;
    if (null == s) return t;
    let o = s.subscriptionPlanPrice * s.quantity,
        u = n.subtotal - o,
        c = 0 !== u;
    if (!a && !c) return t;
    let d = [
        {
            id: "subscription",
            label: H.intl.formatToPlainString(K.default["6AKZvg"], { gameName: l }),
            amount: o,
            lineItemType: "main",
            valueIcon: a ? D.t : void 0,
        },
    ];
    return (
        c &&
            d.push({
                id: "proration",
                label: H.intl.string(K.default["0PL2mz"]),
                amount: u,
                lineItemType: "adjustment",
                tooltip: H.intl.string(H.t.JmwQJM),
            }),
        d.push({ id: "tax", label: H.intl.string(H.t.jiRvC7), amount: n.tax }),
        (0, r.jsx)(G.Vm, { label: H.intl.string(Z.default.eoXh7B), lineItems: d, currency: n.currency })
    );
}
var z = n(349085),
    Q = n(219940);
function $(e) {
    let { planName: t, invoicePreview: n } = e,
        { gameId: l, gameName: i } = p(),
        a = V(n),
        s = (0, z.A)(l, "cover"),
        o = W(
            a,
            (0, U.bG)([F.default], () => k.Ay.canUseShopDiscounts(F.default.getCurrentUser())),
        ),
        u = null != s ? (0, r.jsx)("img", { className: Q.I, src: s, alt: "" }) : void 0;
    return (0, r.jsx)(G.f7, {
        graphic: u,
        omitDefaultIconBackground: !0,
        label: H.intl.formatToPlainString(K.default["6AKZvg"], { gameName: i }),
        description: t,
        price: a.nitroPriceLabel ?? a.standardPriceLabel ?? "",
        PriceIcon: o ? D.t : void 0,
        priceSubText: o ? a.standardPriceLabel : null,
        priceSubTextHasStrikethrough: !0,
    });
}
function J(e) {
    let { verifiedPlanId: t, selectedPlan: n, handlePaymentSourceAdd: l } = e,
        {
            checkoutPriceOptions: i,
            checkoutInvoiceError: a,
            activeSubscription: s,
        } = (0, S.t4)((e) => ({
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            activeSubscription: e.activeSubscription,
        })),
        { isPlanChange: o, isPlanUpgrade: u } = p(),
        d = o && !u,
        m = c.useMemo(() => {
            if (!o || null == s || 0 === s.items.length) return;
            let [e] = s.items;
            return [{ ...e, quantity: 1, planId: t }];
        }, [o, s, t]),
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
                    setFetchCheckoutInvoicePreviewRequest: o,
                    setFetchRenewalInvoicePreviewRequest: u,
                    primaryInvoicesError: d,
                    activeSubscription: m,
                } = (0, S.t4)((e) => ({
                    setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                    setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                    primaryInvoicesError: e.get("primaryInvoicesError"),
                    activeSubscription: e.activeSubscription,
                })),
                {
                    subscriptionPlan: p,
                    purchaseDisabled: C,
                    preventInvoiceFetch: h,
                    newItems: f,
                } = (0, N.TP)({ selectedPlanId: t, priceOptions: n }),
                { checkoutInvoiceRequestParams: E, renewalInvoiceRequestParams: y } = (0, N.jq)({
                    items: r ?? f,
                    preventFetch: h,
                    priceOptions: n,
                    trialId: l,
                    subscriptionMetadata: i,
                }),
                I = null != m ? m.id : void 0,
                g = c.useMemo(
                    () => ({
                        type: "subscription_checkout_invoice",
                        params: { ...E, subscriptionId: s ? I : void 0, renewal: a ?? !1 },
                    }),
                    [E, a, s, I],
                ),
                A = c.useMemo(() => ({ type: "subscription_renewal_invoice", params: y }), [y]);
            c.useEffect(() => {
                o(g);
            }, [g, o]),
                c.useEffect(() => {
                    u(A);
                }, [A, u]);
            let { discriminatedInvoicePreview: P } = (0, x.KY)({
                invoiceError: d,
                subscriptionPlan: p,
                invoiceTypeDiscriminator: x.u$.SUBSCRIPTION_NEW_PURCHASE,
                shouldSetPurchasePreviewErrorFromInvoice: !0,
            });
            return { discriminatedInvoicePreview: P, purchaseDisabled: C };
        })({
            selectedPlanId: t,
            priceOptions: i,
            isTrial: !1,
            newItemsOverride: m,
            immediateInvoiceUsesRenewal: d,
            previewAsSubscriptionUpdate: o,
        }),
        { immediateDelivery: f } = (0, b.U)(),
        { discountOffer: E, premiumGroupDiscountOffer: U } = (0, T.i)(),
        D = U ?? E,
        { paymentSources: G } = (0, _.j)(),
        { paymentGatewayRestrictions: F } = (0, _.Y)(),
        B = i.paymentSourceId,
        W = (0, O.g)(G, B),
        Y = (0, k.J$)(B),
        V = null != C && "invoicePreview" in C ? C.invoicePreview : null,
        z = (0, r.jsx)($, { planName: n.name, invoicePreview: V }),
        Q = d
            ? (0, r.jsx)(y.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "p",
                  children: H.intl.string(K.default.MmcIbA),
              })
            : null,
        J = {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: z,
            paymentMethodContent: (0, r.jsx)(A.N, {
                label: H.intl.string(H.t["u+Cw58"]),
                onPaymentSourceAdd: l,
                disabled: h,
                additionalPaymentSourceDropdownProps: { paymentGatewayRestrictions: F },
            }),
            upperInlineNoticeProps: null != Q ? { directContent: Q, key: "gsh-plan-change-notice" } : void 0,
        };
    if (null == C && null != a) return (0, r.jsx)(v.T_, { ...J, legalContent: null });
    if (null == C || C.type === x.u$.LOADING) return (0, r.jsx)(v.Ed, { shouldShowUnifiedHeader: !0 });
    let X = (0, r.jsx)(P.k, {
            discriminatedInvoicePreview: C,
            subscriptionPlan: n,
            subscriptionTrial: void 0,
            isPrepaidPaymentSource: Y,
        }),
        ee = C.invoicePreview,
        et =
            (D?.discount != null && (0, L.Ro)(ee, D.discount.id)) || ee.invoiceItems.some((e) => e.discounts.length > 0)
                ? X
                : (0, r.jsx)(q, { fallback: X, invoicePreview: ee }),
        en = null;
    if (!Y && x.ME.has(C.type) && "renewalInvoicePreview" in C && null != C.renewalInvoicePreview) {
        let e = (0, M.Gj)(C.invoicePreview, C.renewalInvoicePreview, void 0, { isSubscriptionUpdate: null != s });
        en = (0, r.jsx)(R._, { ...e });
    }
    let el = "renewalInvoicePreview" in C ? C.renewalInvoicePreview : null,
        ei =
            d && null != el && null != s
                ? (0, r.jsx)(j._, {
                      immediateDelivery: f,
                      paymentSourceType: W,
                      variant: {
                          type: j.I.Subscription,
                          purchaseButtonText: H.intl.string(K.default.UGbET9),
                          totalDue: 0,
                          renewalPrice: el.total,
                          currency: C.invoicePreview.currency,
                          interval: n.interval,
                          intervalCount: n.intervalCount,
                          startDate: s.currentPeriodEnd,
                      },
                  })
                : (0, r.jsx)(g.$, {
                      activeSubscription: s,
                      plan: n,
                      paymentSourceType: W,
                      discriminatedInvoicePreview: C,
                      discountOffer: D,
                      unifiedLegalType: j.I.Subscription,
                  }),
        er = d ? (0, w.$g)(0, C.invoicePreview.currency) : (0, I.kw)({ subscriptionInvoiceRecord: C.invoicePreview });
    return (0, r.jsx)(v.T_, {
        ...J,
        subscriptionDetailsContent: en,
        invoiceSummaryContent: et,
        legalContent: ei,
        invoiceTotalDueValue: er,
        invoiceTotalDueLabel: H.intl.string(Z.default.R0cZsM),
    });
}
let X = (e, t) => {
        let { invoicePreview: n } = t;
        return { disablePurchase: e.disablePurchase || null == n };
    },
    ee = {
        CHECKOUT_FLOW: s.CL.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: function (e) {
                let { subscriptionMetadataRequest: t, isPlanChange: n, isPlanUpgrade: l, onBack: i } = p(),
                    a = (0, E.A)(),
                    { selectedPlanId: s, selectedSkuId: o } = (0, S.t4)((e) => ({
                        selectedPlanId: e.selectedPlanId,
                        selectedSkuId: e.selectedSkuId,
                    })),
                    { planGroup: u } = e,
                    d = c.useMemo(() => ({ planGroup: u }), [u]),
                    m = n
                        ? l
                            ? H.intl.string(K.default.yUWVlo)
                            : H.intl.string(K.default.UGbET9)
                        : H.intl.string(H.t.YScQSF),
                    C = c.useCallback(
                        (e) => {
                            let { onReviewButtonClick: t, loading: n, disabled: l } = e;
                            return {
                                variant: "active",
                                text: m,
                                dataTestId: "purchase",
                                onClick: t,
                                loading: n,
                                disabled: l,
                            };
                        },
                        [m],
                    ),
                    y = c.useCallback(
                        (e) => {
                            let { handlePaymentSourceAdd: t } = e;
                            if (null == a)
                                throw new f.v({
                                    message: "Expected plan to be selected",
                                    extraSentryInformation: { selectedPlanId: s, selectedSkuId: o },
                                });
                            return (0, r.jsx)(J, { handlePaymentSourceAdd: t, verifiedPlanId: a.id, selectedPlan: a });
                        },
                        [a, s, o],
                    ),
                    I = c.useCallback(() => {
                        e.handleClose(), i?.();
                    }, [e, i]);
                return (0, r.jsx)(h.Y, {
                    ...e,
                    isBackButtonEligible: null != i,
                    onFooterBackClick: I,
                    subscriptionMetadata: t ?? void 0,
                    renderStepBody: y,
                    resolveInternalState: X,
                    resolveTenantReviewButtonProps: C,
                    customFooterProps: d,
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                    tenantParams: {
                        serverName: t,
                        regionId: n,
                        gameId: l,
                        gameName: i,
                        isPlanChange: a,
                        isPlanUpgrade: s,
                        onBack: o,
                    },
                    children: c,
                } = e;
                return (0, r.jsx)(C, {
                    serverName: t,
                    regionId: n,
                    gameId: l,
                    gameName: i,
                    isPlanChange: a,
                    isPlanUpgrade: s,
                    onBack: o,
                    children: (0, r.jsx)(u.Qt, { children: c }),
                });
            },
            tenantProvidesCheckoutRoot: !1,
            tenantAnalyticsLocation: a.A.GAME_SERVER_SETUP_MODAL,
        },
        CustomHeaderComponent: function (e) {
            let { step: t } = e;
            return t === o.pn.CONFIRM ? (0, r.jsx)("div", {}) : null;
        },
    };
var et = n(444927),
    en = n(964486),
    el = n(120700),
    ei = n(626797),
    er = n(211083),
    ea = n(883645),
    es = n(584160),
    eo = n(169797),
    eu = n(832286),
    ec = n(958340),
    ed = n(566980),
    em = n(489254),
    ep = n(251913),
    eC = n(71393),
    eh = n(178368),
    ef = n(166403),
    eE = n(473145),
    eS = n(802790),
    ey = n(636441),
    eI = n(587491),
    eg = n(285753),
    eA = n(430993),
    eP = n(86379),
    ev = n(545075),
    e_ = n(655857),
    ex = n(534479),
    eT = n(121005),
    eN = n(174459),
    eb = n(306775),
    ej = n(295405);
let [eR, eM, eO] = (0, d.A)();
function eL(e) {
    let {
            initialNumGuildBoostsToPurchase: t,
            disablePremiumUpsell: n = !1,
            closeGuildPerksModal: l,
            children: i,
            guildId: a,
            analyticsLocation: s,
            analyticsSourceLocation: o,
            applicationId: u,
            intent: d,
            onSubscribeComplete: m,
        } = e,
        [p, C] = c.useState(!0),
        h = (0, et.A)(() => Date.now()),
        f = (0, et.A)(() => (0, eE.D$)(eh.A.boostSlots).length),
        {
            activeSubscription: E,
            setQuantity: y,
            selectedSkuId: I,
        } = (0, S.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            setQuantity: e.setQuantity,
            selectedSkuId: e.selectedSkuId,
        }));
    c.useEffect(() => {
        null != I && y(t);
    }, [I]);
    let g = (0, U.bG)([ef.A], () => ef.A.hasFetchedSubscriptions()),
        A = (0, U.bG)([ej.A], () => ej.A.defaultPaymentSourceId),
        P = null != E ? E.paymentSourceId : null,
        v = (0, eb._)(null != P ? P : g ? A : null);
    return (0, r.jsx)(eR.Provider, {
        value: {
            disablePremiumUpsell: n,
            closeGuildPerksModal: l,
            guildId: a,
            paymentModalArgs: v,
            premiumSubscriptionPaymentSourceId: P,
            analyticsLocation: s,
            analyticsSourceLocation: o,
            forceDisableSubmitButton: p,
            setForceDisableSubmitButton: C,
            applicationId: u,
            intent: d,
            onSubscribeComplete: m,
            flowStartTime: h,
            existingAvailableSlotCount: f,
        },
        children: i,
    });
}
var ek = n(160946),
    ew = n(253390),
    eU = n(97352),
    eD = n(615396),
    eG = n(202541);
function eF() {
    let { activeSubscription: e, quantity: t } = (0, S.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
        })),
        n = (0, U.bG)([eU.A], () => null == e || null != eU.A.get(e.planId)),
        l = (0, ek.Y)(),
        i = (0, U.bG)([eU.A], () => (null != e ? (0, eD.c9)(e.planId) : null)),
        r = c.useMemo(
            () => (null != e && n && l ? (0, ew.v)(e, t) : [{ planId: eG.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, l, t],
        ),
        a = c.useMemo(
            () =>
                r.find((e) => {
                    let { planId: t } = e;
                    return eG.pW.has(t);
                })?.planId ?? eG.gD.PREMIUM_MONTH_GUILD,
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
var eB = n(652215),
    eH = n(599911);
function eW(e) {
    let { message: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eo.s3, { title: H.intl.string(H.t.q9EGps) }),
            (0, r.jsx)(eA.c, { children: (0, r.jsx)("p", { className: eH.C, children: t }) }),
        ],
    });
}
function eY(e) {
    let { handleStepChange: t } = e,
        n = (0, S.t4)((e) => e.activeSubscription),
        { guildId: l, analyticsLocation: i } = eM(),
        a = (0, eP.Hp)(),
        s = (0, eT.A)(),
        { hasFetchedRelatedSubscriptionPlans: u, displayCurrency: d } = (0, e_.Jn)(),
        { hasFetchedPremiumSubscriptionPlan: m } = eF(),
        p = null != n && null != n.renewalMutations,
        C = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
        h = !s || !u || !m || null == d || "" === d;
    return ((0, en.Ay)(() => {
        p && eN.default.track(eB.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: i, guild_id: l });
    }),
    c.useEffect(() => {
        h || a || C || p || t(o.pn.PLAN_SELECT);
    }, [h, a, C, p, t]),
    C)
        ? (0, r.jsx)(eW, { message: H.intl.string(H.t.mOWsF1) })
        : p
          ? (0, r.jsx)(eW, { message: H.intl.string(H.t.npfhh0) })
          : h
            ? (0, r.jsx)(ex.A, {})
            : a
              ? (0, r.jsx)(ev.oO, {})
              : null;
}
var eV = n(482132),
    eK = n(879100);
function eZ(e) {
    let { handleClose: t } = e,
        { guildId: n, paymentModalArgs: l, existingAvailableSlotCount: i } = eM(),
        {
            activeSubscription: a,
            startingFractionalPremiumEndsAt: s,
            customCheckoutFlow: o,
            paymentSourceId: u,
            quantity: c,
        } = (0, S.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            customCheckoutFlow: e.customCheckoutFlow,
            paymentSourceId: e.paymentSourceId,
            quantity: e.quantity,
        })),
        d = (0, U.bG)([ec.A], () => (null != n ? ec.A.getGuild(n) : void 0), [n]),
        m = null != n ? eC.A.getGuild(n) : null,
        p = (0, et.A)(() => (0, eD.b2)(s)),
        C = (0, U.bG)([eU.A], () => (null != a ? (0, eD.c9)(a.planId) : null)),
        { paymentSources: h } = l,
        f = (0, O.g)(h, u),
        E = null != m ? m.name : null != d ? d.name : void 0,
        y = p && null != C && !eG.YV.has(C.id);
    return (0, r.jsx)(eV.dZ, {
        children: (0, r.jsx)(eK.W, {
            guild: m,
            guildBoostQuantity: c + i,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: f,
            fallbackGuildName: E,
            didPurchaseOnFractionalPremium: y,
            customCheckoutFlow: o,
        }),
    });
}
var eq = n(284009),
    ez = n.n(eq),
    eQ = n(683071),
    e$ = n(512950),
    eJ = n(821609),
    eX = n(123292),
    e0 = n(87719);
let e1 = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var e2 = n(503698),
    e4 = n.n(e2),
    e3 = n(661531),
    e7 = n(408278),
    e6 = n(834040),
    e5 = n(499373),
    e8 = n(663803),
    e9 = n(320448),
    te = n(297264),
    tt = n(104510),
    tn = n(866665),
    tl = n(695366),
    ti = n(289873),
    tr = n(726656),
    ta = n(688810),
    ts = n(531260),
    to = n(666646),
    tu = n(404374),
    tc = n(543767),
    td = n(881489),
    tm = n(774962),
    tp = n(477421),
    tC = n(732280),
    th = n(363476),
    tf = n(531506),
    tE = n(550124);
function tS() {
    return (0, r.jsxs)("div", {
        className: e4()(tE.dt, tE.dE),
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: tE.qq,
            }),
            (0, r.jsx)(y.E, { variant: "text-sm/medium", className: tE.tD, children: H.intl.format(H.t.f5VHKm, {}) }),
        ],
    });
}
function ty(e) {
    let { text: t, color: n } = e;
    return (0, r.jsxs)("div", {
        className: tE.dt,
        children: [(0, r.jsx)(D.t, { size: "md", className: tE.YW, color: n }), (0, r.jsx)("div", { children: t })],
    });
}
var tI = n(773669),
    tg = n(975571),
    tA = n(252424),
    tP = n(877624),
    tv = n(28863),
    t_ = n(406810),
    tx = n(549996),
    tT = n(807098),
    tN = n(637706),
    tb = n(788883),
    tj = n(7667),
    tR = n(396559);
function tM() {
    let e = (0, tx.c)(tP.C.GUILD_BOOST_CHECKOUT_BANNER),
        t =
            null != e && "guildBoostCheckoutBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.guildBoostCheckoutBanner
                : null,
        n = (0, tT.T)(t?.asset),
        { countdownText: l, terms: i } = (0, tj.A)(e?.promotionId ?? "");
    if (null == e || null == t) return null;
    let a = (0, tN.C)(t.helpArticle, ""),
        s = [t.body, i].filter((e) => "" !== e).join(" ");
    return (0, r.jsxs)("div", {
        className: tR.kL,
        children: [
            (0, r.jsx)(tb.A, {
                componentType: tP.C.GUILD_BOOST_CHECKOUT_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            (0, r.jsxs)("div", {
                className: tR.Qs,
                children: [
                    null != n && "" !== n && (0, r.jsx)("img", { src: n, className: tR.LY, alt: "" }),
                    (0, r.jsxs)("div", {
                        className: tR.er,
                        children: [
                            (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "text-default", children: t.header }),
                            (0, r.jsxs)(y.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: [
                                    s,
                                    null != a &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                "" !== s && " ",
                                                (0, r.jsx)(tv.Anchor, {
                                                    className: tR.nf,
                                                    href: a.url,
                                                    children: a.linkText,
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != l &&
                (0, r.jsxs)("div", {
                    className: tR.qW,
                    children: [
                        (0, r.jsx)(t_.ClockIcon, {
                            size: "custom",
                            width: 12,
                            height: 12,
                            color: "currentColor",
                            className: tR.y,
                        }),
                        (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "text-default", children: l }),
                    ],
                }),
        ],
    });
}
var tO = n(155718),
    tL = n(803694),
    tk = n(270537),
    tw = n(241989),
    tU = n(874638),
    tD = n(692440),
    tG = n(818348),
    tF = n(458924);
function tB(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: l,
            totalDue: i,
            currency: a,
            startDate: s,
        } = e,
        { immediateDelivery: o } = (0, b.U)();
    return (0, r.jsx)(j._, {
        variant: {
            type: j.I.Subscription,
            purchaseButtonText: H.intl.string(H.t.eUEeCt),
            totalDue: i,
            renewalPrice: l,
            currency: a,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: s,
        },
        paymentSourceType: t,
        immediateDelivery: o,
    });
}
function tH(e) {
    return H.intl.format(H.t.IeaYqg, { endDate: e });
}
function tW(e) {
    let { text: t, className: n } = e;
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)("div", { className: tF.bU }),
            (0, r.jsx)(y.E, { variant: "text-sm/normal", className: tF.b7, children: t }),
            (0, r.jsx)("div", { className: tF.bU }),
        ],
    });
}
function tY(e) {
    let {
            originalAmount: t,
            basePlanAdjustment: n,
            basePlanInvoiceItems: l,
            guildBoostingAdjustment: i,
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
                label: H.intl.formatToPlainString(H.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, k.Mn)(n.id, !1, l),
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
            label: H.intl.formatToPlainString(H.t.ZSVged, { planName: (0, k.RH)(l[0].subscriptionPlanId) }),
            tooltip: H.intl.string(H.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== i &&
            o.push({
                id: "guild-boosting-adjustment",
                label: H.intl.string(H.t["+as5ZZ"]),
                tooltip: H.intl.string(H.t.JmwQJM),
                amount: i,
                lineItemType: "adjustment",
            }),
        0 !== a.tax && o.push({ id: "tax", label: H.intl.string(H.t.jiRvC7), amount: a.tax, lineItemType: "tax" });
    let { lineItems: u, currency: c } = (0, M.EA)({ id: "main-line-item", amount: t, ...s }),
        d = [...u, ...o];
    return (0, r.jsx)(tk.Vm, {
        defaultExpanded: !0,
        label: H.intl.string(Z.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function tV(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: l, renewalInvoicePreview: i } = e;
    return null != n
        ? (0, r.jsx)(tD.Hc, { currentInvoice: l, renewalInvoice: i, isUpdate: t })
        : (0, r.jsx)(tD.Hc, { renewalInvoice: i });
}
function tK(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: l,
            currentPremiumSubscription: i,
            premiumSubscriptionPaymentSourceId: s,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: u,
            paymentSourceId: d,
            setPaymentSourceId: m,
            onPaymentSourceAdd: p,
        } = e,
        C = (function (e) {
            let {
                    guildId: t,
                    priceOptions: n,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: i,
                    newAdditionalPlans: r,
                } = e,
                s = (0, U.bG)([eC.A, ec.A], () => {
                    let e = eC.A.getGuild(t);
                    return null != e ? e : ec.A.isGuildFetching(t) ? null : ec.A.getGuild(t);
                }, [t]),
                o = i.interval,
                u = i.intervalCount,
                d = (0, U.bG)([eU.A], () => eU.A.getForSkuAndInterval((0, k.mH)(eG.pe.GUILD), o, u));
            ez()(null != d, "Missing guildBoostingSubscriptionPlan");
            let m = (0, k.J$)(n.paymentSourceId),
                p = (0, td.ds)(),
                C = c.useMemo(() => {
                    if (null != l) {
                        let e = r[0];
                        return (0, k.Om)(l, e.quantity, e.planId);
                    }
                    return r;
                }, [l, r]),
                { analyticsLocations: h } = (0, ta.Ay)(),
                {
                    setFetchCheckoutInvoicePreviewRequest: f,
                    setFetchRenewalInvoicePreviewRequest: E,
                    checkoutInvoicePreview: y,
                    renewalInvoicePreview: I,
                } = (0, S.t4)((e) => ({
                    setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                    setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    renewalInvoicePreview: e.renewalInvoicePreview,
                })),
                g = null != l ? l.id : void 0,
                { checkoutInvoicePreviewRequest: A, renewalInvoicePreviewRequest: P } = c.useMemo(() => {
                    let e = {
                        subscriptionId: g,
                        items: C,
                        paymentSourceId: n.paymentSourceId,
                        currency: void 0,
                        analyticsLocations: h,
                    };
                    return {
                        checkoutInvoicePreviewRequest: {
                            type: "subscription_checkout_invoice",
                            params: {
                                ...e,
                                renewal: !1,
                                applyEntitlements: !0,
                                analyticsLocation: a.A.GUILD_BOOSTING_REVIEW_PRORATED,
                            },
                        },
                        renewalInvoicePreviewRequest: {
                            type: "subscription_renewal_invoice",
                            params: { ...e, renewal: !0, analyticsLocation: a.A.GUILD_BOOSTING_REVIEW_RENEWAL },
                        },
                    };
                }, [g, C, n.paymentSourceId, h]);
            return (
                c.useEffect(() => {
                    f(A), E(P);
                }, [f, E, A, P]),
                {
                    guild: s ?? null,
                    guildBoostingSubscriptionPlan: d,
                    isPrepaid: m,
                    isReverseTrial: p,
                    checkoutInvoicePreview: y,
                    renewalInvoicePreview: I,
                    isSubscriptionUpdate: null != l,
                }
            );
        })({
            guildId: t,
            priceOptions: l,
            currentPremiumSubscription: i,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: u,
        }),
        {
            isSubscriptionUpdate: h,
            guild: f,
            isPrepaid: E,
            isReverseTrial: y,
            checkoutInvoicePreview: I,
            renewalInvoicePreview: g,
        } = C,
        P = (0, tL.A)({ location: "GuildBoostReview", message: H.intl.string(Z.default["tK8A/8"]) });
    if (null == I || null == g || null == f) return (0, r.jsx)(v.Ed, { shouldShowUnifiedHeader: !0 });
    let _ = (0, r.jsx)(tV, {
            isSubscriptionUpdate: h,
            premiumSubscription: i,
            checkoutInvoicePreview: I,
            renewalInvoicePreview: g,
        }),
        x = (0, r.jsx)(A.n, {
            setPaymentSourceId: m,
            paymentSourceId: d,
            location: "GuildBoostReview",
            label: H.intl.string(H.t["u+Cw58"]),
            onPaymentSourceAdd: p,
            premiumSubscriptionPaymentSourceId: s,
            hideCurrencySelect: !0,
        }),
        T = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: l,
                checkoutInvoicePreview: i,
                paymentSources: r,
                paymentSourceId: a,
            } = e;
            return {
                paymentSourceType: (0, O.g)(r, a),
                premiumSubscriptionPlan: n,
                renewalPrice: l.subtotal,
                totalDue: i.total,
                currency: i.currency,
                startDate: (0, tD.de)({ isSubscriptionUpdate: t, currentInvoice: i, renewalInvoice: l }),
            };
        })({
            isSubscriptionUpdate: h,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: g,
            checkoutInvoicePreview: I,
            paymentSources: n,
            paymentSourceId: d,
        }),
        N = (0, r.jsx)(tB, { ...T }),
        b = (function (e) {
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
                return (0, tU.Z)(l.invoiceItems).find((t) => eG.pW.has(t.subscriptionPlanId) && e(t));
            }
            let p = m((e) => e.amount >= 0);
            ez()(null != p, "Missing guild boosting invoice item");
            let C = m((e) => e.amount < 0),
                h = null != C ? p.quantity - C.quantity : p.quantity,
                f = l.invoiceItems.filter((e) => (0, k.xq)(e.subscriptionPlanId)),
                E = f.reduce((e, t) => e + t.amount, 0),
                S = (0, tc.sL)(p) * h,
                y = (0, w.$g)(S, l.currency),
                I = (0, w.CE)(y, c, d),
                g = (0, w.$g)(l.total, l.currency) + (l.currency !== tG.Yr.USD ? "*" : ""),
                A = l.subtotal - S - E,
                P = p.discounts.map((e) => {
                    let t = e.amount / p.quantity;
                    return { ...e, amount: t * h };
                }),
                v = P.find((e) => e.type === tO.iS.SUBSCRIPTION_PLAN),
                _ = P.find((e) => e.type === tO.iS.ENTITLEMENT),
                x = p.subscriptionPlanPrice * h;
            return {
                addedQuantity: h,
                guildBoostingSubscriptionPlan: s,
                isPrepaid: o,
                isReverseTrial: u,
                formattedGuildBoostPrice: y,
                formattedGuildBoostRate: I,
                formattedOriginalAmountGuildBoostRate: (0, w.CE)((0, w.$g)(x, l.currency), c, d),
                formattedTotal: g,
                basePlanAdjustment: E,
                basePlanInvoiceItems: f,
                guildBoostingAdjustment: A,
                subscriptionDiscount: v,
                entitlementDiscount: _,
                originalAmount: x,
                premiumSubscription: t,
                checkoutInvoicePreview: l,
                renewalInvoicePreview: i,
                priceOptions: r,
            };
        })({
            premiumSubscription: i,
            premiumSubscriptionPlan: o,
            checkoutInvoicePreview: I,
            renewalInvoicePreview: g,
            priceOptions: l,
            reviewState: C,
        }),
        j = (0, r.jsx)(tY, { ...b }),
        R = (function (e, t, n) {
            let {
                    addedQuantity: l,
                    guildBoostingSubscriptionPlan: i,
                    isPrepaid: a,
                    formattedGuildBoostRate: s,
                    formattedOriginalAmountGuildBoostRate: o,
                    subscriptionDiscount: u,
                } = t,
                c = null != u;
            return {
                label: H.intl.formatToPlainString(H.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, k.Mn)(i.id, !1, a),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, r.jsx)(tw.a6, {}),
                price: s,
                PriceIcon: c ? D.t : void 0,
                priceTooltip: c ? H.intl.string(Z.default.YUNJJa) : void 0,
                priceSubText: c ? o : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            f,
            b,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: l } = e;
                return !t && n && null != l ? { type: "reverseTrial", text: tH(l.currentPeriodEnd) } : null;
            })({ isPrepaid: E, isReverseTrial: y, premiumSubscription: i }),
        ),
        M = (0, r.jsx)(tw.f7, { ...R });
    return (0, r.jsx)(v.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: P,
        purchaseItemContent: M,
        subscriptionDetailsContent: _,
        paymentMethodContent: x,
        invoiceSummaryContent: j,
        legalContent: N,
        invoiceTotalDueValue: b.formattedTotal,
        invoiceTotalDueLabel: H.intl.string(Z.default.R0cZsM),
    });
}
n(26279);
var tZ = n(152228);
function tq(e) {
    return "" === e || "-" === e;
}
function tz(e) {
    let { value: t, onChange: n, minValue: l = 1, maxValue: i = 30, ariaLabel: a } = e,
        [s, o] = c.useState(t);
    c.useEffect(() => {
        o(t);
    }, [t]);
    let u = "number" == typeof s;
    function d(e) {
        o(e), tq(e) || n(e);
    }
    return (0, r.jsxs)("div", {
        className: tZ.U$,
        children: [
            (0, r.jsx)(e7.K, {
                variant: "secondary",
                size: "md",
                icon: e6.MinusIcon,
                onClick: () => {
                    u && !(s <= l) && d(s - 1);
                },
                "aria-label": H.intl.string(H.t["k+ohJm"]),
                disabled: !u || s <= l,
            }),
            (0, r.jsx)("div", {
                className: tZ.WJ,
                children: (0, r.jsx)("input", {
                    className: tZ.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${s}`,
                    onChange: (e) =>
                        (function (e) {
                            if (tq(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= l) return void d(l);
                                if (t >= i) return void d(i);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: function () {
                        tq(s) && o(t);
                    },
                }),
            }),
            (0, r.jsx)(e7.K, {
                variant: "secondary",
                size: "md",
                icon: e5.T,
                onClick: () => {
                    u && !(s >= i) && d(s + 1);
                },
                "aria-label": H.intl.string(H.t.w8Sc4B),
                disabled: !u || s >= i,
            }),
        ],
    });
}
function tQ(e) {
    let { message: t } = e;
    return (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", className: tZ.jH, children: t });
}
function t$(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: tZ.Vk,
        children: [
            (0, r.jsx)("div", {
                className: tZ.D0,
                children: (0, r.jsx)(D.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: tZ.ue,
                    color: tu.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, r.jsx)("div", { className: tZ.yP, children: t }),
        ],
    });
}
function tJ(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: l,
        planLabel: i,
        planPriceContent: a,
        subtotalContent: s,
        refreshSubtotalContent: o,
        legacyDescriptionContent: u,
        refreshDescriptionContent: d,
        fractionalBanner: m,
        existingSlotNotice: p,
        discountCallout: C,
        refreshDiscountCallout: h,
        promoBanner: f,
        legacyPricingNotes: E,
        refreshPricingNotes: S,
    } = e;
    return (0, r.jsxs)("div", {
        children: [
            m,
            u,
            p,
            (0, r.jsxs)("div", {
                className: tF.mP,
                children: [
                    (0, r.jsxs)("div", {
                        className: tF.E6,
                        children: [
                            (0, r.jsx)(e8.l, {
                                value: n,
                                onChange: (e) => l(e),
                                className: tF.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)("div", { className: tF.$0, children: i }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: e4()(tF.QK, { [tF.S]: t }), children: a }),
                ],
            }),
            (0, r.jsx)("div", { className: tF.J3 }),
            (0, r.jsxs)("div", {
                className: tF.mP,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: H.intl.string(H.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", {
                        className: e4()(tF.__invalid_planSelectorSubtotalPrice, { [tF.S]: t }),
                        children: s,
                    }),
                ],
            }),
            E.map((e, t) => (0, r.jsx)(c.Fragment, { children: e }, t)),
            C,
        ],
    });
}
function tX(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: l,
        refreshNextStepLabel: i,
        planLabel: a,
        planPriceContent: s,
        subtotalContent: o,
        refreshSubtotalContent: u,
        legacyDescriptionContent: d,
        refreshDescriptionContent: m,
        fractionalBanner: p,
        existingSlotNotice: C,
        discountCallout: h,
        refreshDiscountCallout: f,
        promoBanner: E,
        legacyPricingNotes: S,
        refreshPricingNotes: I,
    } = e;
    return (0, r.jsxs)("div", {
        className: tZ.xY,
        children: [
            p,
            (0, r.jsxs)("div", {
                className: tZ.K3,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-md/medium",
                        className: tZ.bk,
                        children: H.intl.string(H.t["r+SebU"]),
                    }),
                    (0, r.jsx)(e9._, { className: tZ.bN, color: "currentColor", size: "xs" }),
                    (0, r.jsx)(y.E, { variant: "text-md/medium", className: tZ.kX, children: i }),
                ],
            }),
            m,
            C,
            (0, r.jsxs)("div", {
                className: tZ.fh,
                children: [
                    (0, r.jsxs)("div", {
                        className: tZ.fX,
                        children: [
                            (0, r.jsx)(tz, {
                                value: n,
                                onChange: (e) => l(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)(y.E, { variant: "text-md/medium", className: tZ.ny, children: a }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: e4()(tZ.El, { [tF.S]: t }), children: s }),
                ],
            }),
            (0, r.jsxs)("div", { className: tZ.pw, children: [E, f] }),
            (0, r.jsxs)("div", {
                className: tZ.fh,
                children: [
                    (0, r.jsx)(te.D, {
                        variant: "heading-lg/semibold",
                        className: tZ.O3,
                        children: H.intl.string(H.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", { className: e4()(tZ.BU, { [tF.S]: t }), children: u }),
                ],
            }),
            I.map((e, t) => (0, r.jsx)(c.Fragment, { children: e }, t)),
        ],
    });
}
function t0(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: l } = e;
    return (0, r.jsxs)("div", {
        className: tF.Mv,
        children: [
            (0, r.jsx)(tt._, { className: tF.T5, color: e3.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, r.jsxs)("div", {
                children: [
                    H.intl.format(H.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != l
                        ? (0, r.jsx)(tn.m, {
                              text: H.intl.formatToPlainString(H.t.SFpsCH, {
                                  canceledCount: n,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, r.jsx)(tl.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: tF.Y5,
                                  color: e3.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function t1(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: l,
            setForceDisableSubmitButton: i,
            premiumSubscription: s,
            onClickPremiumSubscriptionLink: o,
            existingAvailableSlots: u = [],
            priceOptions: d,
            isRefreshEnabled: m = !1,
            showRefreshSubtotalRate: p = !1,
            refreshNextStepLabel: C = H.intl.string(H.t.QBnNHq),
        } = e,
        h = (function (e) {
            let t,
                n,
                {
                    premiumSubscriptionPlan: l,
                    numGuildBoosts: i,
                    setForceDisableSubmitButton: s,
                    premiumSubscription: o,
                    onClickPremiumSubscriptionLink: u,
                    existingAvailableSlots: d,
                    priceOptions: m,
                    showRefreshSubtotalRate: p,
                } = e,
                C =
                    ((t = (0, U.bG)([ef.A], () => ef.A.getPremiumTypeSubscription())),
                    (0, U.bG)([ej.A], () =>
                        t?.paymentSourceId != null ? ej.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                h = l.interval,
                f = l.intervalCount,
                E = (0, U.bG)([eU.A], () => eU.A.getForSkuAndInterval((0, k.mH)(eG.pe.GUILD), h, f)),
                S = (0, U.bG)([F.default], () => F.default.getCurrentUser()),
                I = (0, ts.A)({ forceFetch: !1 });
            ez()(null != E, "Missing guildBoostingSubscriptionPlan");
            let g = [{ planId: E.id, quantity: 1 }],
                A = o?.items.find(
                    (e) => e.planId === eG.gD.PREMIUM_MONTH_TIER_2 || e.planId === eG.gD.PREMIUM_YEAR_TIER_2,
                );
            null != A && g.push(A);
            let P = o?.items.find(
                    (e) => e.planId === eG.gD.PREMIUM_MONTH_GUILD || e.planId === eG.gD.PREMIUM_YEAR_GUILD,
                ),
                v = null == C || !eG.uJ.has(C) || null == P,
                { analyticsLocations: _ } = (0, ta.Ay)(),
                [x, T] = (0, tc.YV)({
                    subscriptionId: o?.id,
                    items: g,
                    renewal: !0,
                    paymentSourceId: o?.paymentSourceId,
                    currency: m.currency,
                    preventFetch: v,
                    analyticsLocations: _,
                    analyticsLocation: a.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, to.T)(x, T);
            let N = !v && null == x && null == T;
            c.useLayoutEffect(() => {
                s(N);
            }, [N, s]);
            let b = (0, tC.V)()?.subscriptionTrial?.skuId === eG.pe.TIER_2,
                j = k.Ay.hasBoostDiscount(S),
                R = j && null != o && k.Ay.isPremiumAtLeast(k.Ay.getPremiumType(o.planId), eG.PremiumTypes.TIER_1),
                M = x?.findInvoiceItemByPlanId(E.id),
                O =
                    null != M
                        ? { amount: M.amount, tax: 0, taxInclusive: !0, currency: x.currency }
                        : k.Ay.getPrice(E.id, j, !1, m),
                L = i * O.amount,
                D = (0, td.ds)() && j && null != o,
                G = (function (e) {
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
                            showFractionalPremiumBanner: l === eG.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: d.length,
                    fractionalPremiumState: I.fractionalState,
                    isReverseTrial: D,
                    hasDiscountUpsell: R,
                    withTrialOfferCopyVariant: b,
                });
            "discount" === G.upsellVariant
                ? (ez()(null != o, "Missing premiumSubscription for discount upsell variant"),
                  (n = H.intl.format(H.t.hf6YOY, { planName: k.Ay.getTierDisplayNameByPlanId(o.planId) })))
                : (n = H.intl.format("upsell_trial" === G.upsellVariant ? H.t.ba1L74 : H.t.fkffDT, {
                      onPremiumSubscriptionClick: u,
                      discountPercentage: (0, tA.l9)(tI.default.locale, eG.oX / 100),
                      freeSubscriptionCount: eG.M4,
                  }));
            let B = d.filter((e) => (0, eE.I5)(e)).length,
                W = (0, k.J$)(m.paymentSourceId),
                { ipCountryCode: Y } = (0, tp.A)(),
                V = "HR" === Y && O.currency === tG.Yr.EUR,
                K =
                    D && null != o
                        ? (0, r.jsx)(tW, { text: tH(o.currentPeriodEnd) })
                        : (0, r.jsx)("div", { className: e4()(tF.hA, tF.G3), children: H.intl.string(H.t.jNY1FO) }),
                Z =
                    D && null != o
                        ? (0, r.jsx)(tW, { text: tH(o.currentPeriodEnd), className: tF.jk })
                        : (0, r.jsx)(y.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: tZ._X,
                              children: H.intl.string(H.t.jNY1FO),
                          }),
                q = G.showExistingSlotNotice
                    ? (0, r.jsx)(t0, { existingAvailableSlots: d, canceledCount: B, premiumSubscription: o })
                    : null,
                z = G.showFractionalPremiumBanner ? (0, r.jsx)(tf.vi, { fractionalPremiumInfo: I }) : null,
                Q = W
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === eG.WT.YEAR
                              ? H.intl.string(H.t.YDpAzZ)
                              : t === eG.WT.MONTH && 1 === n
                                ? H.intl.string(H.t["6ZR3By"])
                                : null;
                      })({ intervalType: h, intervalCount: f }) ?? H.intl.string(H.t.K9Bmze))
                    : H.intl.string(H.t.K9Bmze),
                $ = N
                    ? (0, r.jsx)(ti.y, {})
                    : W
                      ? (0, w.$g)(O.amount, O.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: l, intervalCount: i = 1 } = e,
                                r = (0, w.$g)(t, n);
                            return l === eG.WT.YEAR
                                ? H.intl.formatToPlainString(H.t["8M04YJ"], { price: r })
                                : l === eG.WT.MONTH && 1 === i
                                  ? H.intl.formatToPlainString(H.t.VStWCR, { price: r })
                                  : l === eG.WT.MONTH && i > 1
                                    ? H.intl.formatToPlainString(H.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: h, intervalCount: f, amount: O.amount, currency: O.currency }),
                J = N
                    ? (0, r.jsx)(ti.y, {})
                    : (0, r.jsx)(th.A, {
                          price: L,
                          currency: O.currency,
                          intervalType: h,
                          intervalCount: f,
                          isPrepaidPaymentSource: W,
                      }),
                X = N
                    ? (0, r.jsx)(ti.y, {})
                    : p && !W
                      ? (0, w.CE)((0, w.$g)(L, O.currency), h, f)
                      : (0, w.$g)(L, O.currency),
                ee = [],
                et = [];
            if (V) {
                let e = (0, r.jsx)(
                    tr.A,
                    {
                        message: H.intl.formatToPlainString(H.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, w.$g)(7.5345 * L, tG.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                ee.push(e), et.push(e);
            }
            let en = (0, tm.p)("GuildBoostPurchaseModalPlanSelect")
                ? H.intl.string(H.t["+nPHMl"])
                : H.intl.format(H.t.Om31w8, { documentationLink: tg.A.getArticleURL(eB.MVz.LOCALIZED_PRICING) });
            ee.push((0, r.jsx)(tr.A, { message: en }, "localized-pricing")),
                et.push((0, r.jsx)(tQ, { message: en }, "localized-pricing"));
            let el =
                    "reverse_trial" === G.upsellVariant
                        ? (0, r.jsx)(tS, {})
                        : (0, r.jsx)(ty, { text: n, color: tu.k0.PREMIUM_TIER_2 }),
                ei = (0, r.jsx)(tM, {});
            return {
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
                discountCallout: el,
                refreshDiscountCallout:
                    "reverse_trial" === G.upsellVariant ? (0, r.jsx)(tS, {}) : (0, r.jsx)(t$, { text: n }),
                promoBanner: ei,
            };
        })({
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setForceDisableSubmitButton: i,
            premiumSubscription: s,
            onClickPremiumSubscriptionLink: o,
            existingAvailableSlots: u,
            priceOptions: d,
            showRefreshSubtotalRate: p,
        });
    return (0, r.jsx)(m ? tX : tJ, {
        isLoading: h.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: l,
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
        promoBanner: h.promoBanner,
        legacyPricingNotes: h.legacyPricingNotes,
        refreshPricingNotes: h.refreshPricingNotes,
        refreshNextStepLabel: C,
    });
}
let t2 = eG.gD.NONE_MONTH,
    t4 = [eG.pe.GUILD];
function t3(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            guildId: l,
            closeGuildPerksModal: i,
            disablePremiumUpsell: a,
            setForceDisableSubmitButton: u,
            forceDisableSubmitButton: c,
            paymentModalArgs: d,
            premiumSubscriptionPaymentSourceId: m,
        } = eM(),
        {
            paymentSourceId: p,
            activeSubscription: C,
            quantity: h,
            setQuantity: f,
        } = (0, S.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
            setQuantity: e.setQuantity,
        })),
        { displayCurrency: E } = (0, e_.Jn)(),
        y = null != m || Object.keys(d.paymentSources).length > 0,
        I = (0, o.Ir)(y ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS),
        g = (0, et.A)(() => (0, eE.D$)(eh.A.boostSlots)),
        A = (0, em.n)("GuildBoostPurchaseModal"),
        P = e1.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        v = A && P,
        _ = (0, U.bG)([ec.A], () => (null != l ? ec.A.getGuild(l) : void 0), [l]),
        x = null != l ? eC.A.getGuild(l) : null,
        T = null == _ && null == x,
        N = null != C && C.isPurchasedExternally,
        b = Object.keys(d.paymentSources).length > 0,
        j = (0, U.bG)([eU.A], () => (null != C ? (0, eD.c9)(C.planId) : null)),
        R = (0, U.bG)([eU.A], () => (null == j ? eU.A.get(t2) : j));
    if (null == l) throw new s.vd({ message: "Missing guildId" });
    ez()(null != R, "Missing nextPremiumSubscriptionPlan");
    let M = (0, r.jsx)(t1, {
        premiumSubscriptionPlan: R,
        numGuildBoosts: h,
        setNumGuildBoosts: f,
        setForceDisableSubmitButton: u,
        premiumSubscription: C,
        existingAvailableSlots: g,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != i && i(), (0, e0.e)();
        },
        priceOptions:
            null != p ? { paymentSourceId: p, currency: null != E ? E : void 0 } : { currency: null != E ? E : void 0 },
        isRefreshEnabled: A,
        showRefreshSubtotalRate: v,
        refreshNextStepLabel: I,
    });
    return (
        N && null != C && null != C.paymentGateway
            ? (M = (0, r.jsxs)("div", {
                  className: eH.xK,
                  children: [
                      (0, r.jsx)(eQ.w, {
                          type: "critical",
                          children: H.intl.format(H.t["/m3Y3s"], { paymentGatewayName: tG.qm[C.paymentGateway] }),
                      }),
                      M,
                  ],
              }))
            : null != l &&
              !ec.A.isGuildFetching(l) &&
              T &&
              (M = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(e$.p, {
                          messageType: e$.Y.ERROR,
                          className: eH.MR,
                          children: H.intl.string(H.t.eAn6z2),
                      }),
                      M,
                  ],
              })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eV.dZ, { children: M }),
                (0, r.jsx)(eV.UX, {
                    children: (0, r.jsx)(eK._, {
                        currentStep: o.pn.PLAN_SELECT,
                        isRefreshEnabled: A,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: A
                            ? (0, r.jsx)(eJ.$, { variant: "secondary", text: H.intl.string(H.t["ETE/oC"]), onClick: t })
                            : (0, r.jsx)(eX.Q, { text: H.intl.string(H.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, r.jsx)(eJ.$, {
                            variant: "primary",
                            text: H.intl.string(H.t["3PatSz"]),
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
                                a || (null != j && j.premiumSubscriptionType === eG.PremiumTypes.TIER_2)
                                    ? n(null != m || b ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS)
                                    : n(o.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
var t7 = n(364840),
    t6 = n(935462),
    t5 = n(460905),
    t8 = n(183623),
    t9 = n(95635),
    ne = n(331322),
    nt = n(75678),
    nn = n(10392),
    nl = n(82498),
    ni = n(811611),
    nr = n(901017),
    na = n(463995);
function ns(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, U.bG)([tI.default], () => tI.default.locale);
    return (0, r.jsxs)("div", {
        className: na.mH,
        children: [
            (0, r.jsx)(nr.A, {
                icon: tt._,
                iconClassName: na.pl,
                description: H.intl.formatToPlainString(H.t.sQBgs2, { numFreeGuildSubscriptions: eG.M4 }),
                color: e3.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, r.jsx)(nr.A, {
                icon: tt._,
                iconClassName: na.pl,
                description: H.intl.formatToPlainString(H.t["1A6vXi"], { percent: (0, tA.l9)(n, eG.oX / 100) }),
                color: e3.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, r.jsx)(nr.A, { icon: t5.n, iconClassName: na.zO, description: H.intl.string(H.t.Z9b2x2) }) : null,
            (0, r.jsx)(nr.A, { icon: t8.F, iconClassName: na.Kg, description: H.intl.string(H.t["8dqG5E"]) }),
            (0, r.jsx)(nr.A, { icon: t9.UploadIcon, iconClassName: na.$z, description: H.intl.string(H.t.cBorIy) }),
        ],
    });
}
function no(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: l,
            onSkip: i,
            onSubscriptionConfirmation: s,
            analyticsLocation: o,
            analyticsSourceLocation: u,
            priceOptions: d,
        } = e,
        { analyticsLocations: m, sourceAnalyticsLocations: p } = (0, ta.Ay)(a.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        C = null == t || null == t.premiumSubscriptionType,
        h = k.Ay.getPrice(eG.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        f = (0, w.$g)(h.amount, h.currency),
        E = (0, tC.V)(),
        S = E?.trialId,
        I = E?.subscriptionTrial?.skuId === eG.pe.TIER_2;
    return (
        c.useEffect(() => {
            eN.default.track(eB.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eG.e.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: p,
            }),
                (0, nn.sq)(eB.U7l.PREMIUM_UPSELL_VIEWED, p, () => (0, nl.uq)(eG.e.GUILD_PREMIUM_UPSELL_MODAL));
        }, [p]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(t6.s_, { "data-migration-pending": !0, onClick: n, className: na.b }),
                (0, r.jsxs)(eA.c, {
                    children: [
                        I && (0, r.jsx)(ni.Vq, { className: na.Fg }),
                        (0, r.jsx)("div", { className: e4()(na.Tn, { [na.NH]: I }) }),
                        (0, r.jsx)(y.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children:
                                null != S
                                    ? H.intl.string(H.t.AoSzEr)
                                    : H.intl.format(H.t["7vePZb"], { monthlyPrice: f }),
                        }),
                        (0, r.jsx)(ns, { shouldUpsellFromNoneTier: C }),
                    ],
                }),
                (0, r.jsx)(t7.j, {
                    children: (0, r.jsxs)(ne.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(eX.Q, { text: H.intl.string(H.t["13/7kX"]), onClick: l, variant: "secondary" }),
                            (0, r.jsxs)(ne.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, r.jsx)(eX.Q, {
                                        text: H.intl.string(H.t["SI/adm"]),
                                        onClick: i,
                                        variant: "secondary",
                                    }),
                                    (0, r.jsx)(eJ.$, {
                                        variant: "active",
                                        text: null != S ? H.intl.string(H.t["Gd/XHF"]) : H.intl.string(H.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, nt.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eG.pe.TIER_2,
                                                    analyticsLocations: m,
                                                    analyticsObject: {
                                                        ...o,
                                                        section: eB.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: u,
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
function nu(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: l } = e,
        { paymentModalArgs: i, analyticsLocation: a, analyticsSourceLocation: s } = eM(),
        { paymentSourceId: u, activeSubscription: d } = (0, S.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: m } = (0, e_.Jn)(),
        p = (0, U.bG)([eU.A], () => (null != d ? (0, eD.c9)(d.planId) : null)),
        C = (0, U.bG)([eU.A], () => (null == p ? eU.A.get(t2) : p));
    ez()(null != C, "Missing nextPremiumSubscriptionPlan"), ez()(null != m && "" !== m, "Currency not defined");
    let { paymentSources: h } = i,
        f = null != d ? d.paymentSourceId : null,
        E = Object.keys(h).length > 0,
        y = c.useCallback(() => n(o.pn.PLAN_SELECT), [n]),
        I = c.useCallback(() => n(null != f || E ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS), [n, f, E]);
    return (0, r.jsx)(no, {
        premiumSubscriptionPlan: C,
        analyticsLocation: a,
        analyticsSourceLocation: s,
        onClose: t,
        onBack: y,
        onSkip: I,
        onSubscriptionConfirmation: l,
        priceOptions: null != u ? { paymentSourceId: u, currency: m } : { currency: m },
    });
}
var nc = n(277984),
    nd = n(820739);
async function nm(e, t) {
    await (0, nd.CD)();
    let n = (0, eE.D$)(eh.A.boostSlots);
    return (0, nd.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function np() {
    let { guildId: e, intent: t, onSubscribeComplete: n, paymentModalArgs: l } = eM(),
        { setIsSubmittingCurrentStep: i } = l,
        { paymentAuthenticationState: r } = (0, er.o)(),
        { setPurchaseState: a, setPurchaseError: s } = (0, S.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
        })),
        o = c.useRef(!1);
    return (
        c.useEffect(() => {
            if (r === ep.oc.PENDING) {
                o.current = !0;
                return;
            }
            async function l() {
                if (null != e)
                    try {
                        await nm(e, null != t), n?.();
                    } catch (e) {
                        a(ed.h.FAIL), s(e);
                    }
            }
            o.current && ((o.current = !1), i(!1), r === ep.oc.NONE && null != e && l());
        }, [r, e, t, n, i, a, s]),
        null
    );
}
let nC = [
        { key: o.pn.PLAN_SELECT, renderStep: (e) => (0, r.jsx)(t3, { ...e }), options: { renderHeader: !0 } },
        {
            key: o.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, r.jsx)(nu, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    nh = {
        CHECKOUT_FLOW: el.C.GUILD_BOOST_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eY, { ...e }) },
        STEPS_BEFORE_CHECKOUT: nC,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: function (e) {
                let { handleStepChange: t, handleClose: n, analyticsData: l } = e,
                    { guildId: i, paymentModalArgs: a, premiumSubscriptionPaymentSourceId: u } = eM(),
                    {
                        activeSubscription: d,
                        paymentSourceId: m,
                        setPaymentSourceId: p,
                    } = (0, S.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: C } = (0, e_.Jn)();
                if (null == i) throw new s.vd({ message: "Missing guildId" });
                ez()(null != C && "" !== C, "Currency not defined");
                let { paymentSources: h } = a,
                    { newAdditionalPlans: f, currentPremiumSubscriptionPlan: E } = eF(),
                    y = (0, U.bG)([eU.A], () => (null == E ? eU.A.get(t2) : E));
                ez()(null != y, "Missing nextPremiumSubscriptionPlan");
                let I = null != m ? { paymentSourceId: m, currency: C } : { currency: C },
                    g = (function (e) {
                        let { handleStepChange: t, handleClose: n, analyticsData: l } = e,
                            {
                                guildId: i,
                                paymentModalArgs: r,
                                premiumSubscriptionPaymentSourceId: a,
                                analyticsLocation: s,
                                analyticsSourceLocation: u,
                                flowStartTime: d,
                                applicationId: m,
                                intent: p,
                                onSubscribeComplete: C,
                            } = eM(),
                            { displayCurrency: h } = (0, e_.Jn)(),
                            { paymentSources: f, setIsSubmittingCurrentStep: E, isSubmittingCurrentStep: y } = r,
                            {
                                activeSubscription: I,
                                paymentSourceId: g,
                                setPurchaseError: A,
                                hasAcceptedTerms: P,
                                setPurchaseState: v,
                                quantity: _,
                                checkoutPaymentSources: x,
                                invoicePreview: T,
                            } = (0, S.t4)((e) => ({
                                activeSubscription: e.activeSubscription,
                                paymentSourceId: e.paymentSourceId,
                                setPurchaseError: e.setPurchaseError,
                                hasAcceptedTerms: e.hasAcceptedTerms,
                                setPurchaseState: e.setPurchaseState,
                                quantity: e.quantity,
                                checkoutPaymentSources: e.get("checkoutPaymentSources"),
                                invoicePreview: e.checkoutInvoicePreview,
                            })),
                            {
                                newAdditionalPlans: N,
                                currentPremiumSubscriptionPlan: b,
                                premiumGuildSubscriptionPlanId: j,
                            } = eF(),
                            R = (0, tL.A)({
                                location: "GuildBoostPurchaseModal",
                                message: H.intl.string(Z.default["tK8A/8"]),
                            }),
                            M = (0, tL.iB)({
                                checkoutPaymentSources: x,
                                paymentSourceId: g,
                                location: "GuildBoostPurchaseModal",
                            }),
                            L = c.useMemo(
                                () => ({
                                    ...l,
                                    location: s,
                                    source: u,
                                    subscription_plan_id: j,
                                    sku_id: (0, k.mH)(eG.pe.GUILD),
                                    quantity: _,
                                }),
                                [l, s, u, _, j],
                            ),
                            w = c.useMemo(() => {
                                let { guild_id: e, ...t } = L;
                                return t;
                            }, [L]),
                            U = null != g ? { paymentSourceId: g, currency: h ?? void 0 } : { currency: h ?? void 0 };
                        async function D() {
                            ez()(null != N, "Missing newAdditionalPlans");
                            let e = (0, O.W)(f, g);
                            A(null);
                            let r = !1;
                            try {
                                v(ed.h.PURCHASING),
                                    E(!0),
                                    ez()(null != g, "Missing paymentSourceId"),
                                    ez()(null != T, "Missing invoicePreview");
                                let s = { amount: T.total, currency: T.currency },
                                    u = U.currency ?? T.currency,
                                    c = (0, k.U8)(I, N, u.toLowerCase(), U.paymentSourceId);
                                if (
                                    (eN.default.track(eB.HAw.PAYMENT_FLOW_COMPLETED, {
                                        ...L,
                                        duration_ms: Date.now() - d,
                                        guild_id: i ?? void 0,
                                        application_id: m,
                                    }),
                                    null == I || null == b)
                                ) {
                                    ez()(null != e, "Missing paymentSource");
                                    let t = await (0, nc.Ky)({
                                        items: N,
                                        paymentSource: e,
                                        currency: u,
                                        expectedInvoicePrice: s,
                                        expectedRenewalPrice: c,
                                    });
                                    if (t.redirectConfirmation) {
                                        r = !0;
                                        return;
                                    }
                                    if (t.pendingCustomerAction) return;
                                } else {
                                    let t = { items: (0, k.aE)(I, N) };
                                    (t.currency = I.currency ?? u),
                                        (t.paymentSource = null != a ? f[a] : void 0),
                                        null == t.paymentSource &&
                                            (ez()(null != e, "Missing paymentSource"),
                                            (t.paymentSource = e),
                                            (t.currency = u));
                                    let n = await (0, nc.nV)(I, t, s, c, l.location_stack);
                                    if (n.redirectConfirmation) {
                                        r = !0;
                                        return;
                                    }
                                    if (n.pendingCustomerAction) return;
                                }
                                null == p && t(o.pn.CONFIRM),
                                    v(ed.h.COMPLETED),
                                    null != i && (await nm(i, null != p)),
                                    null != p && n(),
                                    C?.();
                            } catch (t) {
                                v(ed.h.FAIL),
                                    A(t),
                                    eN.default.track(eB.HAw.PAYMENT_FLOW_FAILED, {
                                        ...w,
                                        payment_error_code: t?.code,
                                        payment_gateway:
                                            null != e
                                                ? e.type === eB.hes.CARD
                                                    ? eB.kM_.STRIPE
                                                    : eB.kM_.BRAINTREE
                                                : null,
                                        payment_source_id: g,
                                        duration_ms: Date.now() - d,
                                    });
                            } finally {
                                r || E(!1);
                            }
                        }
                        return {
                            text: H.intl.string(H.t.eUEeCt),
                            loading: y,
                            disabled: null == g || !P || null != R || M,
                            onClick: D,
                            variant: "active",
                        };
                    })({ handleStepChange: t, handleClose: n, analyticsData: l }),
                    A = c.useCallback(() => {
                        t(o.pn.ADD_PAYMENT_STEPS), p(null);
                    }, [t, p]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(eV.dZ, {
                            children: (0, r.jsx)(tK, {
                                guildId: i,
                                paymentSources: h,
                                priceOptions: I,
                                currentPremiumSubscription: d,
                                premiumSubscriptionPaymentSourceId: u,
                                premiumSubscriptionPlan: y,
                                newAdditionalPlans: f,
                                paymentSourceId: m,
                                setPaymentSourceId: p,
                                onPaymentSourceAdd: A,
                            }),
                        }),
                        (0, r.jsx)(eV.UX, {
                            children: (0, r.jsx)(eo.lo, {
                                onBackClick: () => t(o.pn.PLAN_SELECT),
                                primaryButtonProps: g,
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
                            intent: l,
                            disablePremiumUpsell: i,
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
                    C = (0, U.bG)([ef.A], () => ef.A.getPremiumTypeSubscription()),
                    h = (0, et.A)(() => n - (0, eE.D$)(eh.A.boostSlots).length);
                return (
                    (0, en.Ay)(() => {
                        null != ec.A.getGuild(t) || ec.A.isGuildFetching(t) || (0, eu.y)(t);
                    }),
                    (0, r.jsx)(ei.M, {
                        activeSubscription: C,
                        stepConfigs: d,
                        skuIDs: t4,
                        loadId: m,
                        unifiedCheckoutFlow: el.C.GUILD_BOOST_CHECKOUT,
                        children: (0, r.jsxs)(eL, {
                            initialNumGuildBoostsToPurchase: h,
                            disablePremiumUpsell: i,
                            closeGuildPerksModal: s,
                            guildId: t,
                            analyticsLocation: o,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: l,
                            onSubscribeComplete: a,
                            children: [(0, r.jsx)(np, {}), p],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { guildId: l, existingAvailableSlotCount: i } = eM(),
                    a = (0, ea.s2)(),
                    { purchaseState: s, quantity: u } = (0, S.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        quantity: e.quantity,
                    })),
                    d = (0, em.n)("GuildBoostUnifiedCheckout"),
                    m = d && (a === o.pn.REVIEW || a === o.pn.CONFIRM),
                    p = (0, eg.A)(m),
                    C = c.useMemo(() => ({ quantity: u }), [u]);
                return d && a === o.pn.CONFIRM
                    ? (0, r.jsx)(eI.A, {
                          mediaUrls: p.mediaUrls,
                          isSuccess: p.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(s === ed.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, r.jsx)(ey.A, {
                                  transitionState: t.transitionState,
                                  guild: eC.A.getGuild(l),
                                  guildBoostQuantity: u + i,
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
            tenantAnalyticsLocation: a.A.GUILD_BOOST_PURCHASE_MODAL,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                l = (0, em.n)("GuildBoostUnifiedCheckout"),
                i = (0, S.t4)((e) => e.purchaseState),
                a = (0, E.A)();
            if (n === o.pn.PREMIUM_UPSELL) return null;
            if (n === o.pn.REVIEW) {
                let e = null != a ? a.skuId : null;
                return (0, r.jsx)(eo.s3, { ...(0, es.u)({ skuId: e, step: n }) });
            }
            return l
                ? (0, r.jsx)(eo.s3, { title: (0, es.u)({ skuId: null, step: n }).title })
                : (0, r.jsx)(eS.A, { onClose: () => t(i === ed.h.COMPLETED), currentStep: n, purchaseState: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eZ, { ...e }), options: { renderHeader: !0 } },
    };
var nf = n(773882),
    nE = n(192308),
    nS = n(871109);
let ny = c.createContext(void 0);
function nI() {
    let e = c.useContext(ny);
    return ez()(null != e, "GuildProductPurchaseContext not found"), e;
}
function ng(e) {
    let { children: t, skuId: n, ...l } = e,
        i = (0, U.bG)([nS.A], () => nS.A.getGuildProduct(n));
    return (
        ez()(null != i, "guildProductListing cannot be null"),
        (0, r.jsx)(ny.Provider, { value: { guildProductListing: i, ...l }, children: t })
    );
}
function nA(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: i } = nI(),
        a = (0, S.t4)((e) => e.checkoutInvoicePreview);
    return (
        (0, en.Ay)(() => {
            var e;
            ez()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: i, guildProductListingId: l.id, invoicePreview: a }),
                (0, nE.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("24774"),
                        n.e("767837"),
                        n.e("835778"),
                        n.e("47812"),
                        n.e("813583"),
                        n.e("228090"),
                    ]).then(n.bind(n, 779457));
                    return (n) => (0, r.jsx)(t, { ...e, ...n });
                }),
                t();
        }),
        null
    );
}
var nP = n(939249),
    nv = n(789645),
    n_ = n(303612),
    nx = n(171036),
    nT = n(200791);
function nN(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(nP.D, {
        className: e4()(nx.cG, t),
        onClick: n,
        children: (0, r.jsx)(nv.P, { size: "xs", color: "currentColor", className: nx.yP }),
    });
}
function nb(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, r.jsxs)(t6.rQ, {
        className: e4()(nx.wx, nT.G, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(n_.A, { className: nx.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(nN, { className: nx.b, onClose: n }),
        ],
    });
}
var nj = n(621328);
let nR = {
    CHECKOUT_FLOW: s.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [o.pn.REVIEW]: nf.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, r.jsx)(ng, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: a.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = nI();
        return n === o.pn.CONFIRM
            ? null
            : (0, r.jsx)(nb, { guildProductListing: l, className: nj.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(nA, { ...e }) },
};
var nM = n(20742),
    nO = n(951305),
    nL = n(1076),
    nk = n(776310),
    nw = n(228366),
    nU = n(213530),
    nD = n(966971),
    nG = n(758836),
    nF = n(395797);
let nB = { sliderBodyClassName: nF.Bz };
function nH(e) {
    let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nk.Fk, { ref: n, className: nF.Lb, environment: t.current }),
            (0, r.jsx)(nU.K, { options: l, className: e4()(nF.Oh, { [nF.R]: !i }) }),
        ],
    });
}
var nW = n(702841),
    nY = n(775602),
    nV = n(31823),
    nK = n(427675),
    nZ = n(590180),
    nq = n(953150),
    nz = n(524246),
    nQ = n(14368),
    n$ = n(61750),
    nJ = n(972607),
    nX = n(901930);
function n0(e) {
    let { handleClose: t, analyticsLocations: n, collectedModalOverrideTitle: l, collectedModalGradientColor: i } = e,
        {
            selectedSkuId: a,
            purchaseError: s,
            purchasePreviewError: o,
            appliedUserDiscounts: u,
        } = (0, S.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: d } = (0, er.o)(),
        { application: m } = (0, nV.V)(),
        p = (0, nK.gU)(),
        C = (0, nW.bG)([nZ.A], () => nZ.A.getProduct(a)),
        h = c.useRef(!1);
    ez()(null != a, "Expected selectedSkuId"), ez()(null != m, "Expected application");
    let f = p[a];
    ez()(null != f, "Expected sku");
    let E = null != d || null != s || null != o,
        y =
            l ??
            (u.length > 0
                ? H.intl.formatToPlainString(H.t.VuV3Td, { discountOfferAmount: u[0].discount.amount })
                : void 0);
    return (c.useEffect(() => {
        null == C ||
            E ||
            h.current ||
            ((h.current = !0),
            (0, n$.A)({
                product: C,
                overrideTitle: y,
                overrideGradientColor: i,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: nG.gs.FIAT,
            }));
    }, [C, n, t, E, y, i]),
    E)
        ? (0, r.jsx)(eV.dZ, { children: (0, r.jsx)(nX.A, {}) })
        : null;
}
function n1(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: i,
            giftRecipient: a,
            giftMessageError: s,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, nO.Pv)(),
        d = (0, nW.bG)([nY.Ay], () => nY.Ay.useReducedMotion),
        m = c.useRef(null),
        p = (0, S.t4)((e) => e.selectedSkuId),
        C = (0, nW.bG)([nZ.A], () => nZ.A.getProduct(p)),
        { confettiColors: h } = (0, nq.A)(C?.styles);
    return (
        c.useEffect(() => {
            t &&
                null != a &&
                null != p &&
                (u === eG.vQ.USER_PROFILE_WISHLIST || u === eG.vQ.DM_CHANNEL_WISHLIST) &&
                nw.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: p, recipientId: a.id });
        }, [t, a, p, u]),
        t
            ? (0, r.jsxs)("div", {
                  ref: m,
                  children: [
                      (0, r.jsx)(nJ.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: l,
                          hasSentMessage: i,
                          giftRecipient: a,
                          giftMessageError: s,
                          isSendingMessage: o,
                      }),
                      !e.hideConfetti &&
                          !d &&
                          (0, r.jsx)(nz.A, {
                              confettiTarget: m.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, nQ.rA)(C?.categorySkuId),
                              colors: h?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(n0, { ...e })
    );
}
var n2 = n(70283),
    n4 = n(982240),
    n3 = n(839534),
    n7 = n(993408),
    n6 = n(575593),
    n5 = n(452027),
    n8 = n(922016),
    n9 = n(778712),
    le = n(986687),
    lt = n(999291),
    ln = n(903209),
    ll = n(674658),
    li = n(898461),
    lr = n(203632),
    la = n(892118),
    ls = n(536572),
    lo = n(14702),
    lu = n(219103),
    lc = n(431898);
function ld(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: i,
            previewHeaderClassName: a,
            hideProfilePreview: s,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, nO.Pv)(),
        d = (0, U.bG)([F.default], () => F.default.getCurrentUser()),
        m = k.Ay.canUseShopDiscounts(d),
        p = (0, lt.Ay)(o?.id),
        C = c.useRef(null),
        [h, f] = c.useState(!1),
        { product: E } = (0, ll.q)(t, !0),
        S = c.useMemo(() => (0, n7.fT)(E, m), [E, m]);
    if (null == E || 0 === E.items.length) return null;
    let [I] = E.items,
        g = (0, ls.VG)(E),
        A = null != o && o.id !== d?.id && E.type !== n6.R.BUNDLE && I.type !== n6.R.NAMEPLATE && !s;
    return (0, r.jsxs)("div", {
        className: i,
        children: [
            (0, r.jsx)("div", {
                className: e4()(lc.QU, a),
                children: (0, r.jsx)(n5.D, {
                    label: H.intl.string(H.t.PpoJzt),
                    children:
                        A &&
                        (0, r.jsx)(
                            n8.Y,
                            {
                                targetElementRef: C,
                                align: "center",
                                shouldShow: h,
                                onRequestClose: () => f(!1),
                                preload: () => (0, ln.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(le.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, n9.FT)(n9._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, li.T)(I) ? I : null,
                                        pendingProfileEffect: (0, lr.C3)(I) ? I : null,
                                        pendingProfileFrame: (0, la.s)(I) ? I : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, r.jsx)(nP.D, {
                                        ...l,
                                        className: lc.Nx,
                                        innerRef: C,
                                        onClick: (e) => {
                                            f((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            h ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(y.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: H.intl.string(H.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            p?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: e4()(lc.i1, null != u ? lc.cN : lc.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: lc.Ug,
                        children: [
                            (0, r.jsx)(lo.O, { product: E }),
                            (0, r.jsxs)("div", {
                                className: lc.JZ,
                                children: [
                                    (0, r.jsx)(y.E, { variant: "text-md/semibold", children: g }),
                                    (0, r.jsx)(te.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            E?.type === n6.R.BUNDLE
                                                ? null
                                                : I.type === n6.R.AVATAR_DECORATION
                                                  ? H.intl.string(H.t["7v0T9P"])
                                                  : I.type === n6.R.NAMEPLATE
                                                    ? H.intl.string(H.t.x5CoXR)
                                                    : I.type === n6.R.PROFILE_EFFECT
                                                      ? H.intl.string(H.t.wR5wOo)
                                                      : I.type === n6.R.PROFILE_FRAME
                                                        ? H.intl.string(H.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(lu.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: S,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, r.jsx)("div", {
                            className: lc.Wh,
                            children: (0, r.jsx)(y.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: u,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var lm = n(890497);
let lp = (0, n(945810).mj)({
    name: "2026-08-gift-recipient-display-name-search",
    kind: "user",
    defaultConfig: { displayNameSearchEnabled: !1, affinityOrderingEnabled: !1 },
    variations: {
        0: { displayNameSearchEnabled: !1, affinityOrderingEnabled: !1 },
        1: { displayNameSearchEnabled: !0, affinityOrderingEnabled: !1 },
        2: { displayNameSearchEnabled: !1, affinityOrderingEnabled: !0 },
        3: { displayNameSearchEnabled: !0, affinityOrderingEnabled: !0 },
    },
});
var lC = n(896170),
    lh = n(966327),
    lf = n(565860),
    lE = n(994500),
    lS = n(427262),
    ly = n(428863),
    lI = n(435558),
    lg = n.n(lI),
    lA = n(427358);
function lP(e) {
    var t;
    let n,
        l,
        { selectedSkuId: i, validateSelectedGift: a, className: s, recipients: o } = e,
        { giftRecipient: u, setGiftRecipient: d } = (0, nO.Pv)(),
        { displayNameSearchEnabled: m, affinityOrderingEnabled: p } = lp.useConfig({
            location: "CollectiblesGiftRecipientPicker",
        }),
        { options: C, customMatchSorter: h } =
            ((n = (0, U.bG)([lA.A], () => lA.A.getUserAffinitiesMap())),
            (t = c.useMemo(
                () => (p ? lg().sortBy(o, (e) => -(n.get(e.id)?.communicationProbability ?? 0)) : o),
                [p, o, n],
            )),
            (l = c.useMemo(
                () =>
                    m
                        ? new Map(
                              t.map((e) => {
                                  let t, n;
                                  return [
                                      e.id,
                                      ((t = lE.A.getNickname(e.id) ?? lS.Ay.getName(e)),
                                      (n = lS.Ay.getUserTag(e)),
                                      {
                                          names: Object.keys((0, lf.jP)(e).names),
                                          username: e.username,
                                          baseLabel: t,
                                          userTag: n === t ? void 0 : n,
                                      }),
                                  ];
                              }),
                          )
                        : null,
                [m, t],
            )),
            {
                options: c.useMemo(
                    () =>
                        t.map((e) => {
                            let t = l?.get(e.id);
                            return {
                                id: e.id,
                                value: e.id,
                                label: t?.baseLabel ?? lS.Ay.getUserTag(e),
                                trailing:
                                    t?.userTag != null
                                        ? (0, r.jsx)(y.E, {
                                              tag: "span",
                                              variant: "text-md/normal",
                                              color: "text-subtle",
                                              className: ly.X,
                                              children: t.userTag,
                                          })
                                        : void 0,
                                leading: (0, r.jsx)(lh.A, { user: e, size: n9._3.SIZE_20 }),
                            };
                        }),
                    [t, l],
                ),
                customMatchSorter: c.useMemo(
                    () =>
                        null == l
                            ? void 0
                            : (e, t) =>
                                  (0, lC.Ht)(e, t, { keys: ["label", (e) => l.get(e.value)?.names ?? []] }).map((e) => {
                                      let n = l.get(e.value);
                                      if (null == n) return e;
                                      let i = (function (e, t) {
                                          let n = (0, lf.HI)(t);
                                          if ("" !== n) return e.find((e) => (0, lf.HI)(e).includes(n));
                                      })(n.names, t);
                                      return null == i || i === n.username || i === e.label ? e : { ...e, label: i };
                                  }),
                    [l],
                ),
            });
    return (0, r.jsx)("div", {
        className: e4()(s, { [ly.N]: null != h }),
        children: (0, r.jsx)(lm.Z, {
            selectionMode: "single",
            label: H.intl.string(H.t.xFn72s),
            placeholder: H.intl.string(H.t.R0vK0N),
            value: u?.id,
            onSelectionChange: function (e) {
                let t = o.find((t) => t.id === e);
                null != t && (a(t, i), d(t));
            },
            customMatchSorter: h,
            options: C,
        }),
    });
}
let lv = function (e) {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: i } = e;
    return null == t
        ? null
        : (0, r.jsx)(lP, { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: i });
};
var l_ = n(570287);
function lx() {
    let e = (0, U.yK)([lE.A], () => lE.A.getFriendIDs()),
        t = (0, U.yK)([lA.A], () =>
            lA.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: i } = e,
                        r = (0, l_.q)(i);
                    return !t && (n >= 0.1 || l >= 0.1) && r;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = c.useMemo(() => lg().uniq([...e, ...t]), [e, t]);
    return (0, U.yK)(
        [F.default],
        () =>
            n.reduce((e, t) => {
                let n = F.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var lT = n(611881),
    lN = n(492275),
    lb = n(871181),
    lj = n(318007),
    lR = n(285719),
    lM = n(976860),
    lO = n(619940);
function lL(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, ta.Ay)(a.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(eX.Q, {
        text: H.intl.string(H.t.J82mpK),
        onClick: function () {
            t(),
                (0, nE.closeAllModals)(),
                null == n
                    ? (0, n3.Cz)({ analyticsLocations: l, analyticsSource: a.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, lM.pX)(`${eB.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
function lk(e) {
    let {
            hideConfirmStepConfetti: t,
            confettiCanvas: n,
            collectedModalOverrideTitle: l,
            collectedModalGradientColor: i,
        } = (0, nL.z)(),
        { analyticsLocations: a } = (0, ta.Ay)();
    return (0, r.jsx)(n1, {
        analyticsLocations: a,
        hideConfetti: t,
        confettiCanvas: n,
        collectedModalOverrideTitle: l,
        collectedModalGradientColor: i,
        ...e,
    });
}
let lw = {
    [o.pn.GIFT_CUSTOMIZATION]: () => H.intl.string(H.t["JCFN/y"]),
    [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => H.intl.string(H.t.lDbi6H),
    [o.pn.CONFIRM]: () => "",
};
function lU(e) {
    let { step: t } = e,
        n = lw[t];
    return null == n ? null : (0, r.jsx)(nM.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
}
let lD = {
    CHECKOUT_FLOW: s.CL.COLLECTIBLES_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                {
                    renderLeftColumn: l,
                    renderRightColumn: i,
                    renderBottomContent: o,
                    ctaDisabled: u,
                    loading: d,
                } = (function (e) {
                    let { handleStepChange: t, handleClose: n } = e,
                        {
                            customGiftMessage: l = "",
                            setCustomGiftMessage: i,
                            giftRecipientError: s,
                            setGiftRecipientError: o,
                            validatingGiftRecipient: u,
                            giftRecipient: c,
                            giftingOrigin: d,
                            setValidatingGiftRecipient: m,
                        } = (0, nO.Pv)(),
                        { selectedSkuId: p, checkoutInvoicePreview: C } = (0, S.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                        })),
                        h = (0, nK.gU)(),
                        f = (0, U.bG)([F.default], () => F.default.getCurrentUser()),
                        E = lx(),
                        { analyticsLocations: y } = (0, ta.Ay)(a.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL),
                        I = (0, lT.F5)("CollectiblesPaymentModalGiftCustomizationStep"),
                        { nextTier: g, giftsToNextTier: A } = (0, U.cf)([n4.Ay], () => ({
                            nextTier: n4.Ay.getNextTier(n2.$.GIFTING),
                            giftsToNextTier: n4.Ay.getRemainingToNextTier(n2.$.GIFTING),
                        })),
                        P = I && null != g;
                    async function v(e, t) {
                        m(!0), null != s && o(), (await (0, n3.JJ)(e.id, t)) || o(H.intl.string(H.t["4kgVqQ"])), m(!1);
                    }
                    function _() {
                        return (0, r.jsx)(lb.A, {
                            onTextChange: (e) => i?.(e),
                            pendingText: l,
                            currentText: l,
                            disableThemedBackground: !0,
                            className: lO.iX,
                            innerClassName: lO.pt,
                        });
                    }
                    return (
                        (0, en.Ay)(() => {
                            null != p &&
                                null != c &&
                                (d !== eG.vQ.DM_CHANNEL_WISHLIST &&
                                    eN.default.track(eB.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: p }),
                                v(c, p));
                        }),
                        {
                            renderLeftColumn: function () {
                                return (0, r.jsx)("div", {
                                    className: lO.qL,
                                    children: (0, r.jsx)(lj.t, { isShopGift: !0 }),
                                });
                            },
                            renderRightColumn: function () {
                                let e = (0, n7.pA)({ invoicePreview: C, selectedSkuId: p, skusById: h });
                                return d === eG.vQ.USER_PROFILE_WISHLIST || d === eG.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(lR.Z, { giftRecipient: c }),
                                              _(),
                                              null != e &&
                                                  null != p &&
                                                  (0, r.jsx)(ld, {
                                                      skuId: p,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: lO.uW,
                                                      previewHeaderClassName: lO.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: lO.fi,
                                                  children: (0, r.jsx)(lL, { handleClose: n, selectedSkuId: p }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(lv, {
                                                  selectedSkuId: p,
                                                  recipients: E,
                                                  className: lO.uh,
                                                  validateSelectedGift: v,
                                              }),
                                              _(),
                                              null != e &&
                                                  null != p &&
                                                  (0, r.jsx)(ld, {
                                                      skuId: p,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: lO.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            renderBottomContent: function () {
                                return P
                                    ? (0, r.jsx)(lN.A, {
                                          giftsToNextTier: A,
                                          nextTierName: g.name ?? "",
                                          nextTierIcon: g.simple_icon_url,
                                          analyticsLocations: y,
                                          className: lO.qr,
                                      })
                                    : null;
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == c || c.id === f?.id || l.length > eG.Jo,
                            loading: u,
                        }
                    );
                })({ handleStepChange: t, handleClose: n }),
                m = c.useMemo(() => ({ loading: d, disabled: u }), [d, u]);
            return (0, r.jsx)(s.Mw, {
                paymentModalStepProps: e,
                layout: s.XZ.TWO_COLUMN,
                renderLeftColumn: l,
                renderRightColumn: i,
                renderBottomContent: o,
                primaryCTAButtonProps: m,
            });
        },
        [o.pn.REVIEW]: nf.p,
    },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { skuId: t, children: n, ...l } = e,
                {
                    environment: i,
                    confettiCanvas: a,
                    setConfettiCanvas: s,
                    customConfettiVisible: o,
                    setCustomConfettiVisible: u,
                    customConfettiDisplayOptions: d,
                    hideConfirmStepConfetti: m,
                } = (function (e) {
                    let { skuId: t } = e,
                        n = c.useRef(new nk.OH()),
                        [l, i] = c.useState(null),
                        [r, a] = c.useState(!1),
                        s = c.useMemo(() => (0, nD.AB)({ purchaseType: nG.gs.FIAT, skuId: t }), [t]);
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
                [C, h] = (0, c.useState)(void 0),
                [f, E] = (0, c.useState)(void 0),
                S = (0, c.useMemo)(
                    () => ({
                        skuIDs: p,
                        setCustomConfettiVisible: u,
                        hideConfirmStepConfetti: m,
                        confettiCanvas: a,
                        collectedModalOverrideTitle: C,
                        setCollectedModalOverrideTitle: h,
                        collectedModalGradientColor: f,
                        setCollectedModalGradientColor: E,
                    }),
                    [p, u, m, a, C, f],
                );
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(nH, {
                        environment: i,
                        setConfettiCanvas: s,
                        customConfettiDisplayOptions: d,
                        customConfettiVisible: o,
                    }),
                    (0, r.jsx)(ei.M, {
                        ...l,
                        skuIDs: p,
                        stepConfigs: l.stepConfigs,
                        activeSubscription: null,
                        purchaseType: tG.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, r.jsx)(nL.i.Provider, { value: S, children: n }),
                    }),
                ],
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                { skuIDs: l, setCustomConfettiVisible: i } = (0, nL.z)(),
                {
                    paymentModalSkuId: r,
                    paymentModalOnClose: a,
                    paymentModalOnComplete: s,
                } = (function (e) {
                    let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: i } = e,
                        r = t[0] ?? null,
                        a = c.useCallback(() => {
                            i(!0), l?.();
                        }, [l, i]);
                    return {
                        paymentModalSkuId: r,
                        paymentModalOnClose: c.useCallback(
                            (e) => {
                                i(!1), n(e), nw.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                            },
                            [n, i],
                        ),
                        paymentModalOnComplete: a,
                    };
                })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: i });
            return n({ ...t, skuId: r, onClose: a, onComplete: s, applicationId: eB.FYj });
        },
        tenantAnalyticsLocation: a.A.COLLECTIBLES_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            { isGift: n } = (0, nO.Pv)();
        return n ? (0, r.jsx)(lU, { step: t }) : null;
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(lk, { ...e }), options: nB },
};
var lG = n(809029),
    lF = n(354033),
    lB = n(554146),
    lH = n(80151),
    lW = n(841702),
    lY = n(367727),
    lV = n(580194),
    lK = n(709870),
    lZ = n(37126),
    lq = n(412260),
    lz = n(607399),
    lQ = n(795791);
function l$(e, t) {
    return !e && t === eG.pe.TIER_2 && !lz.Ct && !lz.KY && null == (0, lQ.uM)();
}
var lJ = n(771566),
    lX = n(625494),
    l0 = n(45938),
    l1 = n(97808),
    l2 = n(912140),
    l4 = n(450047),
    l3 = n(780898),
    l7 = n(344346),
    l6 = n(837015),
    l5 = n(643860);
function l8(e) {
    let { rewardSkuIds: t, onClose: n, onRewardModalClose: l } = e,
        i = (0, U.bG)([F.default], () => F.default.getCurrentUser()),
        a = (0, U.bG)([nY.Ay], () => nY.Ay.useReducedMotion),
        { analyticsLocations: s } = (0, ta.Ay)(),
        o = n9._3.SIZE_32,
        u = (0, l4.D)(t),
        [d, ...m] = (0, U.yK)([nZ.A], () => t.map((e) => nZ.A.getProduct(e)).filter((e) => null != e)),
        [p, C] = c.useState(!1),
        h = d?.items[0],
        {
            isNameplateReward: f,
            nameplateData: E,
            rewardAvatarDecorationSrc: S,
        } = c.useMemo(
            () =>
                null == h
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, l6.F)(h)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: h.skuId,
                                src: h.asset,
                                palette: (0, l3.H6)(h.palette ?? "sky"),
                                imgAlt: h.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, li.T)(h)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, l2.A)({
                                  legacyAssetId: h.asset,
                                  skuId: h.skuId,
                                  size: o,
                                  canAnimate: !a,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [h, o, a],
        );
    return (0, r.jsx)(eV.UX, {
        children: (0, r.jsx)(t7.j, {
            children: (0, r.jsxs)("div", {
                className: l5.W,
                children: [
                    f && null != E
                        ? (0, r.jsx)("div", {
                              className: l5.D,
                              onMouseEnter: () => C(!0),
                              onMouseLeave: () => C(!1),
                              children: (0, r.jsx)(l7.a, {
                                  user: i,
                                  nameplate: null,
                                  nameplateData: E,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: p,
                              }),
                          })
                        : (0, r.jsx)(l1.Js, {
                              "aria-label": i?.username,
                              size: o,
                              src: i?.getAvatarURL(void 0, (0, n9.FT)(o), !a),
                              avatarDecoration: S,
                          }),
                    (0, r.jsx)(eJ.$, {
                        variant: "primary",
                        text: H.intl.formatToPlainString(H.t.o18gVZ, { count: t.length }),
                        loading: u,
                        onClick: () => {
                            null != d &&
                                (n(),
                                (0, n$.A)({
                                    product: d,
                                    remainingProducts: m,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: s,
                                    purchaseType: nG.gs.PROMOTIONAL,
                                    onCloseCallback: l,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var l9 = n(49999);
function ie(e) {
    let t,
        {
            handleClose: l,
            planGroup: i,
            onSubscriptionConfirmation: a,
            renderPurchaseConfirmation: s,
            postSuccessGuild: o,
            followupSKUInfo: d,
            continueSessionToInitialStep: m,
        } = e,
        { paymentSources: p } = (0, _.j)(),
        {
            activeSubscription: C,
            selectedSkuId: h,
            updatedSubscription: y,
            paymentSourceId: I,
            isPremiumGroupPurchase: g,
            startingPremiumSubscriptionPlanId: A,
            startingFractionalPremiumEndsAt: P,
            checkoutInvoicePreview: v,
        } = (0, S.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
        })),
        x = (0, E.A)(),
        T = (0, ea.s2)(),
        {
            isGift: N,
            giftRecipient: b,
            giftCode: j,
            hasSentMessage: R,
            isSendingMessage: M,
            sendGiftMessage: L,
            claimableRewards: k,
            selectedGiftingPromotionRewards: w,
            openGiftingBadgePostPurchaseModal: D,
            canShowGiftingBadgePostPurchase: G,
        } = (0, nO.Pv)(),
        { confirmationFooter: F } = (0, u.cG)(),
        B = (0, lV.px)(x, N, k),
        H = (0, lV.Mq)(x),
        { purchases: W } = (0, lW.Wg)(!1),
        Y = (0, U.bG)([lq.A], () => lq.A.getGiftPromotion()?.id),
        V = (0, U.bG)([lq.A], () => {
            let e = lq.A.getMarketingComponentByType(tP.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        K = (0, O.g)(p, I),
        Z = null != v ? v.orbsReward : null,
        q = null != Z && Z > 0,
        z = N && !q && w.length > 0 && w.every((e) => null != W.get(e)) && H,
        Q = { selectedPlan: x, selectedSkuId: h, step: T };
    if (null == x) throw new f.v({ message: "Expected plan to be selected", extraSentryInformation: Q });
    if (null == h) throw new f.v({ message: "Expected selectedSkuId", extraSentryInformation: Q });
    if (null == T) throw new f.v({ message: "Step should be set", extraSentryInformation: Q });
    let $ = c.useCallback(() => {
        l(), a?.();
    }, [l, a]);
    (0, en.Ay)(() => {
        g &&
            eN.default.track(eB.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != y,
                has_any_premium_group: y?.hasAnyPremiumGroup ?? !1,
                subscription_id: y?.id,
            });
    });
    let J = (0, lH.A)();
    c.useEffect(() => {
        function e() {
            if (g)
                if (null != y && y.hasAnyPremiumGroup) {
                    eN.default.track(eB.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: y.id });
                    let e = (0, lI.uniqueId)("premium-group-purchase-flow-modal");
                    (0, nE.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("76283"),
                                n.e("634508"),
                                n.e("174630"),
                                n.e("448948"),
                                n.e("588070"),
                                n.e("787462"),
                                n.e("485579"),
                            ]).then(n.bind(n, 785606));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    ...t,
                                    subscription: y,
                                    isFromPurchaseFlow: !0,
                                    onClose: async () => {
                                        lX._.dispatch(eB.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await t.onClose();
                                    },
                                });
                        },
                        {
                            onCloseRequest: () => {
                                lX._.dispatch(eB.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, nE.closeModal)(e);
                            },
                            modalKey: e,
                        },
                    );
                } else
                    eN.default.track(eB.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                        has_updated_subscription: null != y,
                        has_any_premium_group: y?.hasAnyPremiumGroup ?? !1,
                    }),
                        lX._.dispatch(eB.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            else
                null != Z && Z > 0
                    ? (0, lK.$)({ orbsAmount: Z, openGiftingBadgePostPurchaseModal: N && G ? D : void 0 })
                    : l$(N, h) && (J?.id === lZ.Ym || J?.name?.includes(lZ.YX)) && (0, lZ.tu)();
        }
        return (
            lX._.subscribe(eB.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                lX._.unsubscribe(eB.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [g, y, Z, J, N, h, C, D, G]),
        c.useEffect(() => {
            !N || null == b || null == j || R || M || (0, l0.Ik)(b) || L({ onSubscriptionConfirmation: a });
        }, [L, N, b, j, R, M, a]),
        c.useEffect(() => {
            B &&
                null != V &&
                null != Y &&
                (0, lY.qr)(lB.M.GIFTING_PROMOTION_REMINDER, Y, { dismissAction: l9.i.INDIRECT_ACTION });
        }, [V, Y, B]);
    let X = null != m ? lJ.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != s) t = s(x, $, y);
    else if (N) t = (0, r.jsx)(lJ.fw, { planId: x.id, onClose: $ });
    else {
        let e =
            A === x.id
                ? { postSuccessGuild: o }
                : {
                      followupSKUInfo: d,
                      startingPremiumSubscriptionPlanId: A,
                      isDowngrade: null != C && (0, eD.vT)(C, x.id, i),
                  };
        t = (0, r.jsx)(lJ.Ay, {
            planId: x.id,
            onClose: $,
            paymentSourceType: K,
            hideClose: null != F,
            startingFractionalPremiumEndsAt: P,
            customCTAType: X,
            ...e,
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(eV.dZ, { children: [(0, r.jsx)(nX.A, {}), t] }),
            null != F && F,
            z && (0, r.jsx)(l8, { rewardSkuIds: w, onClose: $, onRewardModalClose: D }),
        ],
    });
}
let [it, il] = (0, d.A)(),
    ii = {
        CHECKOUT_FLOW: s.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: lG.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: l,
                    } = e,
                    i = c.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(it.Provider, { value: i, children: (0, r.jsx)(u.Qt, { children: l }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                { guildId: l, listing: i } = il();
            return (0, r.jsx)(lF.Y, { onClose: t, listing: i, step: n, guildId: l });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(ie, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var ir = n(73825),
    ia = n(892349),
    is = n(35587),
    io = n(344159),
    iu = n(561794),
    ic = n(811656),
    id = n(890856),
    im = n(947641),
    ip = n(713517),
    iC = n(929283),
    ih = n(761365),
    iE = n(47840);
function iS(e) {
    let t,
        n,
        { skuId: l, user: i, claimed: a, onSelect: s, isSelected: o, disabled: u = !1 } = e,
        [d, m] = c.useState(null),
        p = c.useMemo(() => {
            let e = null;
            return {
                get current() {
                    return e;
                },
                set current(value) {
                    (e = value), m(value);
                },
            };
        }, []),
        C = c.useMemo(() => ({ current: d }), [d]),
        { isHoveringOrFocusing: h } = (0, ip.A)(C),
        f = !a && !u && h,
        { product: E } = (0, ll.q)(l);
    if (null == E) return null;
    let S = E.items[0];
    return null == S
        ? null
        : ((0, li.T)(S)
              ? ((n = n6.R.AVATAR_DECORATION),
                (t = (0, r.jsx)(iC.i, { item: S, user: i, isHighlighted: f, avatarSize: n9._3.SIZE_96 })))
              : (0, l6.F)(S) &&
                ((n = n6.R.NAMEPLATE),
                (t = (0, r.jsx)(ih.A, { nameplate: S, user: i, isHighlighted: f, size: "small" }))),
          (0, r.jsxs)(id.s, {
              ref: p,
              "aria-label": E.name ?? "",
              onClick: function () {
                  null == l || null == s || a || u || s(l);
              },
              focusProps: { within: !0, offset: -2 },
              className: e4()(iE._x, { [iE.Vp]: !a, [iE.mr]: f, [iE.md]: o }),
              children: [
                  (0, r.jsx)("div", {
                      className: e4()(iE.VH, { [iE._Q]: n === n6.R.AVATAR_DECORATION, [iE.M4]: n === n6.R.NAMEPLATE }),
                      children:
                          null != t
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: e4()(iE.i1, { [iE.r9]: a || u }), children: t }),
                                        a &&
                                            (0, r.jsx)(im.r, {
                                                size: "custom",
                                                width: 48,
                                                height: 48,
                                                color: e3.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                className: iE.j0,
                                            }),
                                    ],
                                })
                              : null,
                  }),
                  (0, r.jsxs)("div", {
                      className: iE.tZ,
                      children: [
                          (0, r.jsx)(te.D, { variant: "heading-md/extrabold", children: E.name }),
                          (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              children: a ? H.intl.string(H.t["6cfuDj"]) : H.intl.string(H.t.QQsaCc),
                          }),
                      ],
                  }),
              ],
          }));
}
var iy = n(332026),
    iI = n(696208),
    ig = n(683433);
function iA(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: l,
            onBackClick: i,
            showBackButton: a,
            planOptions: s,
            shouldRenderUpdatedPaymentModal: u = !1,
            isTrial: d,
            isNextDisabled: m = !1,
            useFullWidthActions: p = !1,
        } = e,
        { paymentSources: C } = (0, _.j)(),
        h = (0, E.A)(),
        { isGift: f, claimableRewards: S } = (0, nO.Pv)();
    l = l ?? C;
    let {
            variant: y,
            text: I,
            onClick: g,
            disabled: A,
        } = (function (e) {
            let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: l,
                    claimableRewards: i,
                    paymentSources: r,
                    shouldRenderUpdatedPaymentModal: a,
                    isTrial: s,
                    isNextDisabled: u = !1,
                } = e,
                c = (0, U.bG)([ef.A], () => ef.A.getPremiumTypeSubscription()),
                d = (0, E.A)(),
                m = (0, ea.s2)(),
                { hasEntitlements: p } = (0, io.X)(n, l),
                C = (null != c && null != c.paymentSourceId) || Object.keys(r).length > 0 || (p && !s);
            var h = a ? H.intl.string(H.t.PDTjLN) : H.intl.string(H.t.XqMe3N),
                f = o.pn.ADD_PAYMENT_STEPS;
            return (
                C && (f = o.pn.REVIEW),
                (0, lV.px)(d, l, i) && m !== o.pn.SELECT_FREE_SKU && (f = o.pn.SELECT_FREE_SKU),
                { variant: "primary", text: h, onClick: () => t(f), disabled: u }
            );
        })({
            onStepChange: t,
            selectedPlanId: (n = n ?? h?.id),
            isGift: f,
            claimableRewards: S,
            paymentSources: l,
            shouldRenderUpdatedPaymentModal: u,
            isTrial: d,
            isNextDisabled: m,
        }),
        P = c.useMemo(() => {
            let e =
                null != n && s.includes(n)
                    ? { variant: y, text: I, onClick: g, disabled: A }
                    : { variant: "primary", text: H.intl.string(H.t.XqMe3N), disabled: !0 };
            return p && a && null != i
                ? [{ variant: "secondary", text: H.intl.string(H.t["13/7kX"]), onClick: i }, e]
                : [e];
        }, [y, I, g, A, n, s, p, a, i]);
    return (0, r.jsx)(iI.H, {
        leading: !p && a && null != i ? (0, r.jsx)(ig.A, { onClick: i }) : void 0,
        actions: P,
        actionsFullWidth: p,
    });
}
var iP = n(144281);
function iv(e) {
    let { handleStepChange: t } = e,
        n = (0, S.t4)((e) => e.selectedSkuId),
        l = (0, E.A)(),
        i = (0, ea.s2)(),
        {
            selectedGiftingPromotionRewards: a,
            setSelectedGiftingPromotionRewards: s,
            claimableRewards: u,
        } = (0, nO.Pv)(),
        d = (0, U.bG)([F.default], () => F.default.getCurrentUser()),
        m = (0, U.yK)([lq.A], () => lq.A.getGiftPromotionRewardSkuIds()),
        p = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(u, a[0]),
        [C, h] = c.useState(p),
        [y, I] = c.useState(!1);
    c.useEffect(() => {
        y || null != a[0] || null == p || (s([p]), h(p));
    }, [p, y, a, s]);
    let g = { selectedPlan: l, selectedSkuId: n, step: i };
    if (null == l) throw new f.v({ message: "Expected plan to be selected", extraSentryInformation: g });
    if (null == n) throw new f.v({ message: "Expected selectedSkuId", extraSentryInformation: g });
    if (null == i) throw new f.v({ message: "Step should be set", extraSentryInformation: g });
    let A = c.useMemo(() => null != C && (u ?? []).includes(C), [C, u]),
        P = c.useMemo(() => 0 === m.length || null == C || !A, [m, C, A]);
    function v(e) {
        s([e]), h(e), I(!0);
    }
    c.useEffect(() => {
        if (0 === m.length) {
            h(void 0), s([]);
            return;
        }
        (null != C && A && m.includes(C)) || null == C || (h(void 0), s([]));
    }, [m, A, C, s]);
    let _ = m.map((e) =>
            (0, r.jsx)(
                iS,
                { skuId: e, claimed: null != u && !u.includes(e), user: d, onSelect: v, isSelected: e === C },
                e,
            ),
        ),
        x = (0, r.jsx)(eV.UX, {
            children: (0, r.jsx)(iA, {
                onStepChange: t,
                onBackClick: () => t(o.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [l.id],
                selectedPlanId: l.id,
                isNextDisabled: P,
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nM.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: H.intl.string(H.t.OEtqpm),
                subtitle: H.intl.string(H.t.h2nMp0),
            }),
            (0, r.jsx)(eA.c, { children: (0, r.jsx)("div", { className: iP.Dq, children: _ }) }),
            x,
        ],
    });
}
function i_(e) {
    let { handleStepChange: t } = e,
        n = (0, S.t4)((e) => e.selectedSkuId),
        l = (0, S.t4)((e) => e.quantity),
        i = (0, E.A)(),
        a = (0, ea.s2)(),
        {
            setSelectedGiftingPromotionRewards: s,
            selectedGiftingPromotionRewards: u,
            claimableRewards: d,
        } = (0, nO.Pv)(),
        m = (0, U.bG)([F.default], () => F.default.getCurrentUser()),
        p = (0, U.yK)([lq.A], () => lq.A.getGiftPromotionRewardSkuIds()),
        C = Math.min(l, d?.length ?? 0);
    c.useEffect(() => {
        null == d || (C > 0 && C === d.length ? s(d) : u.length > C && s([]));
    }, [d, C, s, u.length]);
    let h = { selectedPlan: i, selectedSkuId: n, step: a };
    if (null == i) throw new f.v({ message: "Expected plan to be selected", extraSentryInformation: h });
    if (null == n) throw new f.v({ message: "Expected selectedSkuId", extraSentryInformation: h });
    if (null == a) throw new f.v({ message: "Step should be set", extraSentryInformation: h });
    let y = c.useMemo(() => C > 0 && u.length === C && u.every((e) => (d ?? []).includes(e)), [u, d, C]),
        I = c.useMemo(() => 0 === p.length || !y, [p, y]);
    function g(e) {
        u.includes(e) ? s(u.filter((t) => t !== e)) : u.length >= C || s([...u, e]);
    }
    c.useEffect(() => {
        if (0 === p.length) return void s([]);
        let e = u.filter((e) => p.includes(e) && (d ?? []).includes(e));
        e.length !== u.length && s(e);
    }, [p, d, u, s]);
    let A = null != d && C > 0 && u.length >= C,
        P = p.map((e) => {
            let t = u.includes(e);
            return (0, r.jsx)(
                iS,
                {
                    skuId: e,
                    claimed: null != d && !d.includes(e),
                    user: m,
                    onSelect: g,
                    isSelected: t,
                    disabled: !t && A,
                },
                e,
            );
        }),
        v = (0, r.jsx)(eV.UX, {
            children: (0, r.jsx)(iA, {
                onStepChange: t,
                onBackClick: () => t(o.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [i.id],
                selectedPlanId: i.id,
                isNextDisabled: I,
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nM.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: H.intl.string(H.t.B2MCEq),
                subtitle: H.intl.formatToPlainString(H.t.UGXnmY, { rewardCount: u.length, maxRewardCount: C }),
            }),
            (0, r.jsx)(eA.c, { children: (0, r.jsx)("div", { className: iP.Dq, children: P }) }),
            v,
        ],
    });
}
function ix(e) {
    return (0, iy.Wh)({ location: "PremiumPaymentFreeSKUSelectStep" })
        ? (0, r.jsx)(i_, { ...e })
        : (0, r.jsx)(iv, { ...e });
}
var iT = n(428644),
    iN = n(396533),
    ib = n(699595),
    ij = n(403689),
    iR = n(67948),
    iM = n(421108),
    iO = n(753261),
    iL = n(298305),
    ik = n(341535),
    iw = n(799636);
function iU(e) {
    let { className: t } = e,
        n = (0, U.bG)([lq.A], () => {
            let e = lq.A.getMarketingComponentByType(tP.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: l } = (0, nO.Pv)(),
        i = (0, tT.T)(n?.asset),
        a = (0, tT.T)(n?.backgroundAsset),
        s = (0, U.bG)([lq.A], () => lq.A.getGiftPromotion()),
        o = (0, iM.dA)(s?.endDate),
        { enabled: u } = iO.E.useConfig({ location: "PremiumGiftPromotionPlanSelectBanner" }),
        c = n?.gradient,
        d =
            null != c && null != c.colors && c.colors.length >= 2
                ? (0, lV.K5)({ gradient: c.colors, angle: c.angle ?? void 0 })
                : void 0,
        m = (0, lV.gc)(a);
    null != m && ((m.backgroundSize = "cover, auto"), (m.backgroundPosition = "right center, 0% 0%"));
    let p = (0, lV.x)(m, d),
        C = n?.assetVariant === iR.u.LARGE_TILTED;
    return null == n || null == l
        ? null
        : u
          ? (0, r.jsx)(iD, {
                className: t,
                assetUrl: i,
                desktopBody: H.intl.format(ik.default["A/KOOc"], {
                    learnMoreUrl: tg.A.getArticleURL(eB.MVz.NITRO_GIFTING),
                }),
                countdownText: o,
            })
          : (0, r.jsxs)("div", {
                className: e4()(iw.qD, t),
                style: p,
                children: [
                    (0, r.jsx)("div", {
                        className: e4()([iw.my], { [iw.R_]: C }),
                        children: (0, r.jsx)(iL.A, {
                            claimableRewards: l,
                            maxRewardImageSrc: i ?? "",
                            size: C ? n9._3.SIZE_72 : n9._3.SIZE_40,
                            imageScaling: 1.25,
                        }),
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        children: H.intl.string(H.t.Abiuci),
                    }),
                ],
            });
}
function iD(e) {
    let { className: t, assetUrl: n, desktopBody: l, countdownText: i } = e;
    return (0, r.jsxs)("div", {
        className: e4()(iw.KE, t),
        children: [
            (0, r.jsxs)("div", {
                className: iw.SV,
                children: [
                    null != n && "" !== n && (0, r.jsx)("img", { className: iw.L8, alt: "", src: n }),
                    (0, r.jsx)(y.E, { variant: "text-md/medium", color: "text-default", children: l }),
                ],
            }),
            null != i &&
                (0, r.jsxs)("div", {
                    className: iw.gO,
                    children: [
                        (0, r.jsx)(t_.ClockIcon, { size: "xs", color: "currentColor" }),
                        (0, r.jsx)(y.E, { variant: "text-md/medium", color: "text-default", children: i }),
                    ],
                }),
        ],
    });
}
var iG = n(511484),
    iF = n(462887),
    iB = n(736653),
    iH = n(854627),
    iW = n(236834);
let iY = (e) => {
        let { className: t, width: n = 83, height: l = 45 } = e;
        return (0, r.jsxs)("svg", {
            width: n,
            height: l,
            viewBox: "0 0 83 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
                (0, r.jsxs)("g", {
                    opacity: "0.6",
                    children: [
                        (0, r.jsx)("path", {
                            opacity: "0.3",
                            d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                            fill: "url(#paint0_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                            fill: "url(#paint1_linear_1558_55666)",
                        }),
                        (0, r.jsxs)("g", {
                            clipPath: "url(#clip0_1558_55666)",
                            children: [
                                (0, r.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "url(#paint2_linear_1558_55666)",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "url(#paint3_linear_1558_55666)",
                                }),
                                (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "url(#paint4_linear_1558_55666)",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "url(#paint5_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "url(#paint6_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                            fill: "url(#paint7_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                            fill: "url(#paint8_linear_1558_55666)",
                            fillOpacity: "0.9",
                        }),
                        (0, r.jsx)("path", {
                            d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                            fill: "url(#paint9_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                            fill: "url(#paint10_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                            fill: "url(#paint11_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                            fill: "url(#paint12_linear_1558_55666)",
                        }),
                    ],
                }),
                (0, r.jsxs)("defs", {
                    children: [
                        (0, r.jsxs)("linearGradient", {
                            id: "paint0_linear_1558_55666",
                            x1: "0",
                            y1: "23.8981",
                            x2: "92.5783",
                            y2: "23.8981",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint1_linear_1558_55666",
                            x1: "19.5205",
                            y1: "23.9092",
                            x2: "77.3871",
                            y2: "23.9092",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint2_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint3_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint4_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint5_linear_1558_55666",
                            x1: "22.6953",
                            y1: "23.8106",
                            x2: "74.5438",
                            y2: "23.8106",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint6_linear_1558_55666",
                            x1: "33.8516",
                            y1: "23.5132",
                            x2: "64.6392",
                            y2: "23.5132",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint7_linear_1558_55666",
                            x1: "73.1357",
                            y1: "5.12062",
                            x2: "80.0428",
                            y2: "5.12062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint8_linear_1558_55666",
                            x1: "72.3398",
                            y1: "1.21667",
                            x2: "74.7929",
                            y2: "1.21667",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint9_linear_1558_55666",
                            x1: "13.3486",
                            y1: "34.3352",
                            x2: "17.4625",
                            y2: "34.3352",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint10_linear_1558_55666",
                            x1: "74.4932",
                            y1: "40.3635",
                            x2: "78.607",
                            y2: "40.3635",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint11_linear_1558_55666",
                            x1: "17.4795",
                            y1: "35.8773",
                            x2: "19.9325",
                            y2: "35.8773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint12_linear_1558_55666",
                            x1: "78.625",
                            y1: "41.9056",
                            x2: "81.078",
                            y2: "41.9056",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsx)("clipPath", {
                            id: "clip0_1558_55666",
                            children: (0, r.jsx)("rect", {
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
    iV = (e) => {
        let { className: t, width: n = 83, height: l = 45 } = e;
        return (0, r.jsxs)("svg", {
            width: n,
            height: l,
            viewBox: "0 0 83 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
                (0, r.jsxs)("g", {
                    opacity: "0.4",
                    children: [
                        (0, r.jsx)("path", {
                            opacity: "0.3",
                            d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                            fill: "url(#paint0_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                            fill: "url(#paint1_linear_1521_51082)",
                        }),
                        (0, r.jsxs)("g", {
                            clipPath: "url(#clip0_1521_51082)",
                            children: [
                                (0, r.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "url(#paint2_linear_1521_51082)",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "url(#paint3_linear_1521_51082)",
                                }),
                                (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "url(#paint4_linear_1521_51082)",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "url(#paint5_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "url(#paint6_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                            fill: "url(#paint7_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                            fill: "url(#paint8_linear_1521_51082)",
                            fillOpacity: "0.9",
                        }),
                        (0, r.jsx)("path", {
                            d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                            fill: "url(#paint9_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                            fill: "url(#paint10_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                            fill: "url(#paint11_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                            fill: "url(#paint12_linear_1521_51082)",
                        }),
                    ],
                }),
                (0, r.jsxs)("defs", {
                    children: [
                        (0, r.jsxs)("linearGradient", {
                            id: "paint0_linear_1521_51082",
                            x1: "0",
                            y1: "23.8981",
                            x2: "92.5783",
                            y2: "23.8981",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint1_linear_1521_51082",
                            x1: "19.5205",
                            y1: "23.9092",
                            x2: "77.3871",
                            y2: "23.9092",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint2_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint3_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint4_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint5_linear_1521_51082",
                            x1: "22.6953",
                            y1: "23.8106",
                            x2: "74.5438",
                            y2: "23.8106",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint6_linear_1521_51082",
                            x1: "33.8516",
                            y1: "23.5132",
                            x2: "64.6392",
                            y2: "23.5132",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint7_linear_1521_51082",
                            x1: "73.1357",
                            y1: "5.12062",
                            x2: "80.0428",
                            y2: "5.12062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint8_linear_1521_51082",
                            x1: "72.3398",
                            y1: "1.21667",
                            x2: "74.7929",
                            y2: "1.21667",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint9_linear_1521_51082",
                            x1: "13.3486",
                            y1: "34.3352",
                            x2: "17.4625",
                            y2: "34.3352",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint10_linear_1521_51082",
                            x1: "74.4932",
                            y1: "40.3635",
                            x2: "78.607",
                            y2: "40.3635",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint11_linear_1521_51082",
                            x1: "17.4795",
                            y1: "35.8773",
                            x2: "19.9325",
                            y2: "35.8773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint12_linear_1521_51082",
                            x1: "78.625",
                            y1: "41.9056",
                            x2: "81.078",
                            y2: "41.9056",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsx)("clipPath", {
                            id: "clip0_1521_51082",
                            children: (0, r.jsx)("rect", {
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
var iK = n(940223);
let iZ = function (e) {
    let { className: t } = e,
        n = (0, iW.A)(),
        { avatarSrc: l, eventHandlers: i } = (0, iH.A)({ userId: n?.id, size: n9._3.SIZE_32, animateOnHover: !0 }),
        a = (0, iB.DP)(),
        s = (0, iF.q)(a),
        o = lS.Ay.getName(n);
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: e4()(iK.$6, t),
              children: [
                  (0, r.jsx)("div", {
                      className: iK.H,
                      children: (0, r.jsx)(l1.eu, { src: l, "aria-label": n.username, size: n9._3.SIZE_32, ...i }),
                  }),
                  (0, r.jsx)(y.E, {
                      variant: "text-xs/bold",
                      className: iK.U_,
                      children: H.intl.format(H.t.oxhCOl, { userName: o }),
                  }),
                  (0, r.jsx)(s ? iY : iV, { className: iK.q3 }),
              ],
          });
};
var iq = n(73663),
    iz = n(69494),
    iQ = n(845012),
    i$ = n(597770),
    iJ = n(235986),
    iX = n(164503),
    i0 =
        (((l = i0 || {}).PRIMARY = "primary"),
        (l.SECONDARY = "secondary"),
        (l.WARNING = "warning"),
        (l.ERROR = "error"),
        l),
    i1 = (((i = i1 || {}).SMALL = "small"), (i.LARGE = "large"), (i.NONE = "none"), i);
let i2 = { primary: iX.cG, secondary: iX.QU, warning: iX.SO, error: iX._r },
    i4 = { small: iX.EX, large: iX.as, none: null };
class i3 extends c.PureComponent {
    static Colors = i0;
    static Sizes = i1;
    render() {
        let { icon: e, color: t, children: n, iconSize: l, className: i, iconClassName: a } = this.props;
        return (0, r.jsxs)(iJ.A, {
            className: e4()(iX.N4, i2[t], i),
            align: iJ.A.Align.CENTER,
            children: [
                (0, r.jsx)(e, { className: e4()(iX.Kk, i4[l], a), color: "currentColor" }),
                (0, r.jsx)("div", { children: n }),
            ],
        });
    }
}
var i7 = n(651540);
function i6(e) {
    let { giftMessage: t = H.intl.string(H.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: l } = (0, nO.Pv)();
    return !n || (0, l0.Ik)(l)
        ? null
        : (0, r.jsx)(i3, {
              className: i7.z,
              iconSize: i3.Sizes.SMALL,
              icon: i$.GiftIcon,
              color: null == t ? i3.Colors.PRIMARY : i3.Colors.SECONDARY,
              children: t,
          });
}
var i5 = n(577381),
    i8 = n(593675);
function i9(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: l, subscriptionTier: i, trialId: a, handleClose: s } = e,
        {
            priceOptions: u,
            activeSubscription: d,
            premiumPlanOptions: m,
        } = (0, S.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
        })),
        { isEligibleForTrial: p, isEligibleForDiscount: C, discountOffer: h, userTrialOffer: f } = (0, T.i)(),
        I = (0, iG.YJ)(h),
        g = (0, E.A)(),
        A = (0, ea.s2)(),
        { isGift: P, giftRecipient: _, giftMessage: x, claimableRewards: N } = (0, nO.Pv)(),
        b = (0, ia.p)("PremiumPaymentPlanSelectStep"),
        j = (0, lV.Mq)(g),
        R = (0, nW.bG)([lq.A], () => {
            let e = lq.A.getMarketingComponentByType(tP.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        M = P && j && null != N && N.length > 0 && R,
        O = (0, lT.F5)("PremiumPaymentPlanSelectStep"),
        { nextTier: L, giftsToNextTier: k } = (0, U.cf)([n4.Ay], () => ({
            nextTier: n4.Ay.getNextTier(n2.$.GIFTING),
            giftsToNextTier: n4.Ay.getRemainingToNextTier(n2.$.GIFTING),
        })),
        w = P && O && null != L,
        { isHidden: D } = ij.A.useConfig({ location: `PremiumPaymentPlanSelectStep${P ? "" : " - DO NOT USE"}` }),
        G = !(0, iu.tA)({ isGift: P, giftRecipient: _ }) && !D,
        F = null;
    M
        ? (F = b
              ? (0, r.jsx)("div", {
                    className: e4()(i8.RC, i8.oq, G ? i8.ek : i8.lz),
                    children: (0, r.jsx)(iU, { className: i8.j2 }),
                })
              : (0, r.jsx)(iU, {}))
        : w &&
          (F = (0, r.jsx)("div", {
              className: e4()(i8.RC, G ? i8.ek : i8.lz),
              children: (0, r.jsx)(lN.A, {
                  giftsToNextTier: k,
                  nextTierName: L.name ?? "",
                  nextTierIcon: L.simple_icon_url,
              }),
          }));
    let B = (p || C) ?? !1,
        W = (0, is.Wi)(eG.ZC),
        Y = B || W,
        V = C && null != I && m.includes(I) ? I : m[0],
        K = (0, nW.bG)([eU.A], () => eU.A.get(V)),
        Z = [{ planId: K?.id, quantity: 1 }],
        [q, z] = c.useState(B),
        [Q, $] = (0, tc.YV)({
            items: Z,
            renewal: !1,
            preventFetch: !Y,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
        });
    c.useEffect(() => {
        B && z(Q?.subscriptionPeriodEnd == null);
    }, [Q, B]),
        (0, iT.A)(
            "Payment Modal Plan Select Step",
            q,
            5,
            { proratedInvoicePreview: Q, proratedInvoiceError: $, isEligibleForOffer: B },
            { tags: { app_context: "billing" } },
        );
    let J = $?.message ?? H.intl.string(H.t.R0RpRX),
        X = B && null == $,
        ee = B && null != $,
        et = X && null == d && Q?.subscriptionPeriodEnd == null;
    (0, ib.W)({ priceOptions: u, trialId: a, discountInvoicePreview: Q });
    let en = (0, i5.i)({ planSkuId: K?.skuId, invoice: Q }),
        { ref: el, onTransitionEnd: ei } = (0, iN.A)({ isExpanded: null != en, minHeightOverride: 0 }),
        er = c.useMemo(
            () =>
                P || K?.skuId !== eG.pe.TIER_2 || f?.referrerId == null
                    ? (0, r.jsx)("div", { ref: el, onTransitionEnd: ei, style: { overflow: "hidden" }, children: en })
                    : (0, r.jsx)(iZ, { className: i8.ZB }),
            [en, P, K?.skuId, f?.referrerId, el, ei],
        ),
        es = c.useMemo(
            () => ({
                planOptions: m,
                selectedPlanId: g?.id,
                planGroup: l,
                subscriptionPeriodEnd: Q?.subscriptionPeriodEnd,
                useCompactGiftComponents: M,
                handleClose: s,
            }),
            [m, g?.id, l, Q?.subscriptionPeriodEnd, M, s],
        );
    if (et) return (0, r.jsx)(v.Ed, { className: i8.QW });
    ez()(null != A, "Step should be set"), ez()(m.length > 0, "Premium plan options should be set");
    let eo = P
        ? (0, r.jsx)(iq.$p, { ...es })
        : (0, r.jsx)(iQ.X, { ...es, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i6, { giftMessage: x }),
            !(P && (0, l0.Ik)(_)) && (0, r.jsx)(iz.A, { isEligibleForTrial: p }),
            (0, r.jsxs)(eV.dZ, {
                children: [
                    !b && er,
                    (0, r.jsx)(nX.A, { className: i8.tg }),
                    ee ? (0, r.jsx)(eQ.w, { type: "critical", children: J }) : eo,
                    !b &&
                        X &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: e4()(i8.IM, i8.Go) }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    children: H.intl.format(H.t.BHtnqA, {
                                        link: tg.A.getArticleURL(eB.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(eV.UX, {
                children: [
                    F,
                    (0, r.jsx)(iA, {
                        onStepChange: t,
                        onBackClick: () => t(o.pn.SKU_SELECT),
                        showBackButton: null == n && null == i,
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
var re = n(989790),
    rt = n(672525),
    rn = n(800471),
    rl = n(169801),
    ri = n(876491);
function rr(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: l,
            priceOptions: i,
            activeSubscription: a,
            defaultPlanId: s,
            referralTrialOfferId: u,
            getIsInOneStepSubscriptionCheckout: c,
        } = (0, S.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            getIsInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout,
        })),
        { hasPaymentSources: d } = (0, _.j)(),
        { isGift: m, claimableRewards: p } = (0, nO.Pv)(),
        C = m && null != p && p.length > 0,
        h = (0, tC.V)(u);
    return (0, r.jsx)(ra, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: l,
                    handleStepChange: i,
                    isGift: r,
                    userTrialOffer: a,
                    setSelectedPlanId: s,
                    defaultPlanId: u,
                    getIsInOneStepSubscriptionCheckout: c,
                } = e;
                l(n);
                let d = o.pn.PLAN_SELECT,
                    m = (0, k.aZ)(t);
                (m !== eG.pe.TIER_1 && m !== eG.pe.TIER_2) || n !== eG.pe.TIER_0 || r || (d = o.pn.WHAT_YOU_LOSE);
                let p = c({ isTrial: (0, rl.t)({ userTrialOffer: a, isGift: r, skuId: n }), selectedSkuId: n });
                d !== o.pn.WHAT_YOU_LOSE && p && ((d = o.pn.REVIEW), s((0, rn.x)(n, t, u))),
                    i(d, { analyticsDataOverride: { sku_id: n } });
            })({
                getIsInOneStepSubscriptionCheckout: c,
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: m,
                userTrialOffer: h,
                setSelectedPlanId: l,
                defaultPlanId: s,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, k.mH)(eG.pe.TIER_2)),
                    t(eG.gD.PREMIUM_GROUP_MONTH),
                    n(l ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: eG.pe.TIER_2 } });
            })({ setSelectedPlanId: l, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: n }),
        isGift: m,
        priceOptions: i,
        showPromotionalGiftBanner: C,
    });
}
function ra(e) {
    let { selectSku: t, isGift: n, priceOptions: l, showPromotionalGiftBanner: i, onSelectPremiumGroup: a } = e,
        s = (0, re.FY)({ isGift: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nM.rQ, { titleTextVariant: "heading-lg/semibold", title: H.intl.string(H.t["r+SebU"]) }),
            s
                ? (0, r.jsx)(eA.c, {
                      children: (0, r.jsx)("div", {
                          className: ri.eE,
                          children: (0, r.jsx)(rt.yS, {
                              onSelectSku: (e) => t((0, k.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: l,
                              showPromotionalGiftBanner: i,
                          }),
                      }),
                  })
                : (0, r.jsx)(eA.c, {
                      children: (0, r.jsx)("div", {
                          className: ri.a2,
                          children: (0, r.jsx)(rt.Ay, {
                              onSelectSku: (e) => t((0, k.mH)(e)),
                              isGift: n,
                              priceOptions: l,
                              showPromotionalGiftBanner: i,
                          }),
                      }),
                  }),
        ],
    });
}
var rs = n(825484),
    ro = n(137728);
function ru(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: l,
            setSelectedPlanId: i,
            activeSubscription: a,
            isInOneStepSubscriptionCheckout: s,
        } = (0, S.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: !1 }),
        })),
        u = null != a ? (0, k.EL)(a) : null,
        c = null != u ? (0, k.RH)(u.planId) : null,
        d = null != u ? (0, k.m6)(u.planId) : null;
    return (
        ez()(null != d, "Expected premium type"),
        (0, r.jsx)(ro.A, {
            premiumType: d,
            titleText: H.intl.string(H.t["7VcWW0"]),
            subtitleText: H.intl.format(H.t.Qk34Ik, { subscriptionName: c }),
            footer: (0, r.jsxs)(rs.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(eJ.$, {
                        variant: "primary",
                        text: H.intl.string(H.t["3PatSz"]),
                        onClick: () => {
                            s ? (i((0, rn.x)(l, a)), t(o.pn.REVIEW)) : t(o.pn.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(eJ.$, { variant: "secondary", onClick: n, text: H.intl.string(H.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
var rc = n(750532);
let rd = [
        {
            key: o.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(rr, { ...e }),
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
            key: o.pn.WHAT_YOU_LOSE,
            renderStep: (e) => (0, r.jsx)(ru, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: o.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(i9, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) =>
                    (0, S.t4)((t) => t.getIsInOneStepSubscriptionCheckout({ isTrial: e ?? !1 }))
                        ? null
                        : H.intl.string(H.t["r+SebU"]),
                sectionHeaderText: () => H.intl.string(H.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: o.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(ix, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    rm = {
        CustomHeaderComponent: rc.kc,
        CHECKOUT_FLOW: el.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: rd,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: lG.E },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParamsMap: t,
                        tenantParams: {
                            confirmationFooter: n,
                            defaultPlanId: l,
                            referralCode: i,
                            referralTrialOfferId: a,
                            subscriptionTier: s,
                            subscription: d,
                            initialPaymentSourceId: m,
                        },
                        stepConfigs: p,
                        loadId: C,
                        giftContextProps: h = { isGift: !1, giftRecipient: null },
                        renderModalProps: f,
                        children: E,
                    } = e,
                    S = (0, U.bG)([ef.A], () => ef.A.getPremiumTypeSubscription()),
                    y = (0, is.Sq)() ? eG.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: I, giftRecipient: g } = h;
                if (null != s && !Object.values(eG.pe).includes(s))
                    throw Error("subscriptionTier must be a premium subscription");
                let A = (0, iu.tA)({ giftRecipient: g, isGift: I ?? !1 }),
                    P = c.useMemo(
                        () =>
                            A
                                ? p.map((e) =>
                                      e.key === o.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : p,
                        [p, A],
                    ),
                    v = null != d ? d : S,
                    _ = !I && null != v && v.isPurchasedExternally && null != v.paymentGateway;
                (0, io.s)(v, () => f.onClose(), I ?? !1);
                let x = c.useMemo(() => [...eG.oz], []);
                return _
                    ? null
                    : (0, r.jsx)(ei.M, {
                          loadId: C,
                          activeSubscription: v,
                          initialPaymentSourceId: m,
                          stepConfigs: P,
                          skuIDs: x,
                          isGift: I,
                          defaultPlanId: y ?? l,
                          referralCode: i,
                          referralTrialOfferId: a,
                          unifiedCheckoutFlow: el.C.PREMIUM_CHECKOUT,
                          tenantParamsMap: t,
                          children: (0, r.jsx)(u.Qt, { confirmationFooter: n, children: E }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { subscriptionTier: l },
                    } = e,
                    { onClose: i, renderPurchaseConfirmation: a, continueSessionToInitialStep: s } = t;
                c.useEffect(() => {
                    eU.A.isLoadedForPremiumSKUs() || nw.h.wait(() => (0, ir.zS)());
                }, []);
                let { selectedSkuId: u, purchaseState: d } = (0, S.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    m = (0, ea.s2)(),
                    { isGift: p } = (0, nO.Pv)(),
                    C = (0, ia.p)("PremiumPaymentModalRenderer"),
                    h = l$(p, u),
                    f = d === ed.h.PURCHASING;
                return (0, r.jsx)(ic.A, {
                    isConfirmationStep: m === o.pn.CONFIRM && null == s && null == a,
                    isEligibleForWowMoment: h,
                    shouldPrefetchWowMoment: f,
                    children: n({
                        ...t,
                        onClose: i,
                        analyticsSubscriptionType: eB.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        modalSizeOverride: C ? "md" : t.modalSizeOverride,
                        planGroup: eG.LE,
                        subscriptionTier: l,
                    }),
                });
            },
            tenantAnalyticsLocation: a.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(ie, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var rp = n(143582),
    rC = n(241524),
    rh = n(19311),
    rf = n(4126);
let rE = "(max-width: 485px)";
var rS = n(875632),
    ry = n(938430);
function rI(e) {
    let { step: t, onClose: n } = e,
        l = (0, rC.A)("(max-height: 450px)");
    return t === o.pn.CONFIRM || t === o.pn.BENEFITS
        ? (0, r.jsx)("div", {})
        : (0, r.jsxs)("div", {
              className: e4()(rS.N1, nT.G),
              children: [
                  !l &&
                      (0, r.jsx)("div", {
                          className: rS.oZ,
                          "aria-hidden": "true",
                          children: (0, r.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: rS.F0,
                          }),
                      }),
                  (0, r.jsx)(nP.D, {
                      className: rS.G3,
                      onClick: () => n(),
                      "aria-label": H.intl.string(H.t.cpT0Cq),
                      children: (0, r.jsx)(nv.P, { size: "md", color: "currentColor", className: rS.ut }),
                  }),
              ],
          });
}
function rg(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: l, application: i, title: a, subtitle: s, description: o } = e;
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: rS.RP,
              children: (0, r.jsxs)(rf.$K, {
                  children: [
                      (0, r.jsx)(rf.KF, { application: i, asset: t }),
                      (0, r.jsx)(rf.kj, { children: a }),
                      (0, r.jsx)(rf.ri, {}),
                      (0, r.jsx)(rf.Mx, { title: s, description: o }),
                      (0, r.jsx)(rf.iH, { applicationId: i.id, storeListingBenefits: n, skuBenefits: l }),
                  ],
              }),
          });
}
function rA(e) {
    let { tierName: t, onConfirm: n, subscription: l } = e;
    return (0, r.jsxs)("div", {
        className: rS.NV,
        children: [
            (0, r.jsx)("img", { src: ry, alt: "", width: 300, height: 126 }),
            (0, r.jsx)(te.D, {
                className: rS.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: H.intl.format(H.t.wLFT6z, { tier: t }),
            }),
            (0, r.jsx)(y.E, {
                className: rS.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: H.intl.format(H.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, r.jsx)(eV.UX, {
                children: (0, r.jsx)(rh.Ay, {
                    onPrimary: n,
                    primaryCTA: rh.ti.CONTINUE,
                    primaryText: H.intl.string(H.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var rP = n(967198);
let [rv, r_] = (0, d.A)();
function rx(e) {
    let { guildId: t, showBenefitsFirst: n, children: l } = e,
        [i, a] = c.useState(null),
        s = c.useMemo(
            () => ({
                guildId: t,
                showBenefitsFirst: n,
                subscriptionMetadataRequest: i,
                setSubscriptionMetadataRequest: a,
            }),
            [t, n, i],
        );
    return (0, r.jsx)(rv.Provider, { value: s, children: l });
}
n(938796);
var rT = n(266060),
    rN = n(163437),
    rb = n(701273),
    rj = n(859860);
function rR(e) {
    let { onConfirm: t, onCancel: n, title: l, subtitle: i, confirmCta: a, showOpenDiscord: s = !0 } = e;
    return (0, r.jsxs)("div", {
        className: rj.RP,
        children: [
            (0, r.jsx)(te.D, { className: rj.RS, variant: "heading-lg/extrabold", children: l }),
            null != i
                ? (0, r.jsx)(y.E, { className: rj.sT, variant: "text-sm/normal", color: "text-default", children: i })
                : null,
            (0, r.jsxs)("div", {
                className: rj.UD,
                children: [
                    s &&
                        (0, r.jsx)(eJ.$, {
                            variant: "primary",
                            text: H.intl.string(H.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, rb.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(eJ.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, r.jsx)(eJ.$, {
                            variant: "secondary",
                            text: H.intl.string(H.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
}
function rM(e) {
    let { onConfirm: t, tierName: n, subscription: l } = e;
    return (0, r.jsxs)("div", {
        className: rj.RP,
        children: [
            (0, r.jsx)(te.D, {
                className: rj.RS,
                variant: "heading-lg/extrabold",
                children: H.intl.format(H.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(y.E, {
                className: rj.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: H.intl.format(H.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: rj.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: rj.__invalid_openDiscordButton,
                        children: (0, r.jsx)(eJ.$, {
                            variant: "primary",
                            text: H.intl.string(H.t["8L5bZG"]),
                            onClick: () => (0, rb.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(eJ.$, { variant: "secondary", text: H.intl.string(H.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function rO(e) {
    let { handleStepChange: t, handleClose: n } = e,
        l = (0, rT.K)(),
        { subscriptionMetadataRequest: i } = r_(),
        { application: a } = (0, nV.V)(),
        s = (0, nK.S3)(),
        u = (0, rC.A)(rE),
        d = (0, U.bG)([eC.A], () => eC.A.getGuild(i?.guild_id)),
        m = c.useCallback(() => t(o.pn.REVIEW), [t]);
    if (null == s) return null;
    let p = (0, rN.bg)(s.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eV.dZ, {
                children: u
                    ? (0, r.jsx)(rR, {
                          confirmCta: H.intl.string(H.t.PBHFSq),
                          onConfirm: m,
                          onCancel: n,
                          title: H.intl.format(H.t["6n6oXA"], { tier: s.name }),
                          subtitle: p
                              ? H.intl.string(H.t.lzAoKB)
                              : H.intl.formatToPlainString(H.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(rg, {
                          icon: l?.thumbnail,
                          storeListingBenefits: l?.benefits,
                          application: a ?? void 0,
                          title: H.intl.format(H.t.haiCxc, { tier: s.name }),
                          subtitle: p ? H.intl.string(H.t.RvtbP5) : H.intl.string(H.t.zY39Zu),
                          description: p
                              ? H.intl.formatToPlainString(H.t.QCe4rY, { applicationName: a?.name })
                              : H.intl.string(H.t.n1Pu8C),
                      }),
            }),
            !u &&
                (0, r.jsx)(eV.UX, {
                    children: (0, r.jsx)(rh.Ay, {
                        onBack: n,
                        backText: H.intl.string(H.t.TQBY1J),
                        onPrimary: m,
                        primaryCTA: rh.ti.CONTINUE,
                        primaryText: H.intl.string(H.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var rL = n(21161);
function rk(e) {
    let t,
        n,
        { handleClose: l, onSubscriptionConfirmation: i } = e,
        a = (0, rT.K)(),
        { application: s } = (0, nV.V)(),
        { readySlideId: u, updatedSubscription: d } = (0, S.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        m = (0, nK.S3)(),
        p = (0, rC.A)(rE),
        { createMultipleConfettiAt: C } = c.useContext(rL.x),
        h = m?.name ?? "";
    function f() {
        l(), i?.();
    }
    let E = u === o.pn.CONFIRM,
        y = (0, rN.bg)(m?.flags ?? 0),
        I =
            null != a && a.benefits.length > 0
                ? H.intl.formatToPlainString(H.t["+IQQVM"], { benefitCount: a.benefits.length })
                : null,
        { showBenefitsFirst: g } = r_();
    return (
        g
            ? (t = p
                  ? (0, r.jsx)(rM, { tierName: h, onConfirm: f, subscription: d })
                  : (0, r.jsx)(rA, { tierName: h, onConfirm: f, subscription: d }))
            : p
              ? (t = (0, r.jsx)(rR, {
                    title: H.intl.format(H.t.ea6tZr, { tierName: h }),
                    subtitle:
                        null != a && a.benefits.length > 0
                            ? H.intl.formatToPlainString(H.t.HNepft, { benefits: I })
                            : null,
                    onConfirm: f,
                    confirmCta: H.intl.string(H.t.nlkywz),
                }))
              : ((t =
                    null != a && null != s
                        ? (0, r.jsx)(rg, {
                              icon: a.thumbnail,
                              storeListingBenefits: a.benefits,
                              application: s,
                              title: H.intl.format(H.t["Q+qktS"], { tier: h }),
                              subtitle: H.intl.string(H.t.ECKxXU),
                              description: y
                                  ? H.intl.format(H.t["MAtQk/"], { applicationName: s?.name })
                                  : H.intl.format(H.t.vHkMF4, { tier: h }),
                          })
                        : (0, r.jsx)(ex.A, {})),
                (n = (0, r.jsx)(rh.Ay, {
                    onPrimary: f,
                    primaryCTA: rh.ti.CONTINUE,
                    primaryText: H.intl.string(H.t["JtWl+a"]),
                }))),
        c.useEffect(() => {
            nY.Ay.useReducedMotion && E && C(window.innerWidth / 2, window.innerHeight / 2);
        }, [C, E]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(eV.dZ, { children: [(0, r.jsx)(nX.A, {}), t] }),
                null != n && (0, r.jsx)(eV.UX, { children: n }),
            ],
        })
    );
}
function rw(e) {
    let { initialPlanId: t, setAnalyticsData: n } = e,
        {
            selectedSkuId: l,
            setSelectedSkuId: i,
            setSelectedPlanId: a,
            priceOptions: s,
        } = (0, S.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        {
            hasFetchedRelatedSubscriptionPlans: u,
            subscriptionPriceOptionsLoading: d,
            displayCurrency: m,
        } = (0, e_.Jn)(),
        { setSubscriptionMetadataRequest: p, guildId: C, showBenefitsFirst: h } = r_(),
        f = (0, eP.Hp)(),
        E = (0, eT.A)(),
        y = (0, ea.qv)(),
        { isGift: I } = (0, nO.Pv)(),
        g = h ? o.pn.BENEFITS : o.pn.REVIEW,
        [A, P] = c.useState(!E || !u || d);
    return (c.useEffect(() => {
        P(!E || !u || d);
    }, [d, u, E]),
    c.useEffect(() => {
        null != C && p({ guild_id: C });
    }, [C, p]),
    c.useEffect(() => {
        a(t);
        let e = null != t ? eU.A.get(t) : null;
        A ||
            f ||
            (n((t) => {
                let n = null != e ? (0, k.y8)(e.id, !1, I, { paymentSourceId: s.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: m };
            }),
            null != e && (i(e?.skuId), y(g)));
    }, [f, t, I, A, s, m, l, n, a, i, y, g]),
    A)
        ? (0, r.jsx)(ex.A, {})
        : f
          ? (0, r.jsx)(ev.oO, {})
          : null;
}
var rU = n(786948),
    rD = n(970904),
    rG = n(397832);
let rF = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: l } = e;
        return {
            variant: "active",
            text: H.intl.string(H.t.YScQSF),
            dataTestId: "purchase",
            onClick: t,
            loading: n,
            disabled: l,
        };
    },
    rB = {
        CHECKOUT_FLOW: el.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(rw, { ...e }) },
        CustomHeaderComponent: function (e) {
            let { step: t, onClose: n } = e,
                l = c.useCallback(() => n(!1), [n]);
            return (0, r.jsx)(rI, { step: t, onClose: l });
        },
        STEPS_BEFORE_CHECKOUT: [
            {
                key: o.pn.BENEFITS,
                renderStep: (e) => (0, r.jsx)(rO, { ...e }),
                options: { useBreadcrumbLabel: () => H.intl.string(H.t["5LD2+B"]) },
            },
        ],
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: function (e) {
                let { handleStepChange: t, planGroup: n, openInvoiceId: l, analyticsData: i, analyticsLocation: a } = e,
                    {
                        purchaseState: s,
                        contextMetadata: u,
                        purchaseError: d,
                        activeSubscription: m,
                        selectedPlanId: p,
                    } = (0, S.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        contextMetadata: e.contextMetadata,
                        purchaseError: e.purchaseError,
                        activeSubscription: e.activeSubscription,
                        selectedPlanId: e.selectedPlanId,
                    })),
                    { subscriptionMetadataRequest: C, showBenefitsFirst: h } = r_(),
                    y = h ? o.pn.BENEFITS : void 0,
                    I = (0, E.A)(),
                    g = (0, nK.S3)();
                if (null == I)
                    throw new f.v({
                        message:
                            "ApplicationPaymentReviewStep: expected plan to be selected, but selected plan is null",
                        extraSentryInformation: { selectedPlan: I, selectedPlanId: p },
                    });
                let A = c.useRef(null),
                    P = (0, rN.bg)(g?.flags ?? 0);
                c.useEffect(() => {
                    null != d && null != A.current && A.current.scrollIntoView({ behavior: "smooth" });
                }, [d]);
                let v = c.useCallback(() => {
                    t(o.pn.ADD_PAYMENT_STEPS);
                }, [t]);
                return s === ed.h.PURCHASING
                    ? (0, r.jsx)(ex.A, {})
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(eV.dZ, {
                                  children:
                                      null == m
                                          ? (0, r.jsx)(rG._, {
                                                planGroup: n,
                                                handlePaymentSourceAdd: v,
                                                metadata: P ? void 0 : C,
                                            })
                                          : (0, r.jsx)(rD.A, {
                                                handlePaymentSourceAdd: v,
                                                planGroup: n,
                                                hasOpenInvoice: null != l,
                                            }),
                              }),
                              (0, r.jsx)(eV.UX, {
                                  children: (0, r.jsx)(rU.U, {
                                      resolveTenantReviewButtonProps: rF,
                                      onBack: () => null != y && t(y),
                                      handleStepChange: t,
                                      postPurchaseStep: o.pn.CONFIRM,
                                      analyticsLocation: a,
                                      baseAnalyticsData: i,
                                      flowStartTime: u.startTime,
                                      planGroup: n,
                                      openInvoiceId: l,
                                      metadata: P ? void 0 : C,
                                      backButtonEligible: !!h || void 0,
                                      disablePurchase: C?.guild_id == null && !P,
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
                    { guildId: l, showBenefitsFirst: i } = t;
                return (0, r.jsx)(rx, {
                    guildId: l,
                    showBenefitsFirst: i,
                    children: (0, r.jsx)(u.Qt, { children: n }),
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
                    s = c.useCallback(
                        (e) => {
                            r(e),
                                e &&
                                    null != i &&
                                    (nc.hP(),
                                    (0, rp.f5)(i),
                                    null != a && a(),
                                    null != i && (l || rP.A.getGuildId() !== i) && (0, lM.pX)(eB.BVt.CHANNEL(i)));
                        },
                        [r, a, l, i],
                    );
                return n({ ...t, onClose: s, forceNewPaymentModal: !0 });
            },
            tenantAnalyticsLocation: a.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(rk, { ...e }) },
    };
var rH = n(237412),
    rW = n(869038),
    rY = n(852218),
    rV = n(7133),
    rK = n(83617);
let [rZ, rq] = (0, d.A)();
function rz(e) {
    let { code: t, onClose: n, children: l } = e,
        i = (0, U.bG)([ef.A], () => ef.A.getMostRecentPremiumTypeSubscription()),
        a = (0, U.bG)([ef.A], () => ef.A.hasFetchedMostRecentPremiumTypeSubscription()),
        s = (0, U.bG)([ef.A], () => ef.A.getPremiumTypeSubscription()),
        [u, d] = c.useState(!1),
        [m, p] = c.useState(null),
        [C, h] = c.useState(null),
        [f, E] = c.useState(!1),
        [y, I] = c.useState(!1);
    c.useEffect(() => {
        u ||
            (0, l0.GM)(t, !1, !0)
                .then((e) => {
                    let t = rV.A.createFromServer(e);
                    p(t), d(!0), E(t.promotion?.promotionType === rY.pt.THIRD_PARTY_DIRECT_FULFILLMENT);
                })
                .catch((e) => {
                    h(e), d(!0);
                }),
            a || (0, nc.I8)();
    }, [t, a, u]);
    let g = (0, eb._)(),
        { paymentSources: A, paymentSourceId: P, paymentAuthenticationState: v, setIsSubmittingCurrentStep: _ } = g,
        x = (0, ea.qv)(),
        T = (0, ea.s2)(),
        {
            setPurchaseState: N,
            setPurchaseError: b,
            purchaseState: j,
            contextMetadata: R,
            renewalInvoicePreview: M,
        } = (0, S.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            purchaseState: e.purchaseState,
            contextMetadata: e.contextMetadata,
            renewalInvoicePreview: e.checkoutInvoicePreview,
        })),
        { displayCurrency: L } = (0, e_.Jn)(),
        k = m?.subscriptionPlan,
        w = m?.promotion,
        D = m?.subscriptionTrial,
        G = null != k ? (0, rK._w)(k, P, !1) : [],
        F = M?.currency ?? L ?? G[0],
        B = c.useMemo(() => (null != P ? { paymentSourceId: P, currency: F } : { currency: F }), [P, F]),
        H = c.useMemo(
            () => ({
                load_id: R.loadId,
                location: eB.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                subscription_type: eB.rzx.PREMIUM,
                payment_type: tG.fr[tG.VV.SUBSCRIPTION],
                subscription_plan_id: k?.id,
                sku_id: k?.skuId,
                checkout_flow: el.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            }),
            [R.loadId, k?.id, k?.skuId],
        ),
        W = c.useCallback(() => {
            n?.(j === ed.h.COMPLETED);
        }, [n, j]),
        Y = c.useCallback(async () => {
            let e = (0, O.W)(A, P);
            if (null == e) return !1;
            _(!0), b(null), N(ed.h.PURCHASING);
            try {
                return (
                    await rW.Ay.redeemGiftCode({ code: t, options: { paymentSource: e } }),
                    N(ed.h.COMPLETED),
                    eN.default.track(eB.HAw.PAYMENT_FLOW_COMPLETED, { ...H }),
                    !0
                );
            } catch (t) {
                return (
                    N(ed.h.FAIL),
                    b(t),
                    eN.default.track(eB.HAw.PAYMENT_FLOW_FAILED, {
                        ...H,
                        payment_error_code: t?.code,
                        payment_source_id: e.id,
                    }),
                    !1
                );
            } finally {
                _(!1);
            }
        }, [H, t, P, A, _, b, N]),
        V = c.useRef(!1),
        K = c.useCallback(() => {
            V.current ||
                ((V.current = !0),
                Y()
                    .then((e) => {
                        x(e ? o.pn.CONFIRM : o.pn.REVIEW);
                    })
                    .finally(() => {
                        V.current = !1;
                    }));
        }, [Y, x]);
    return (
        (0, ep.QR)(v),
        (0, ep.b)(T, v, x, N, !0, K),
        (0, r.jsx)(rZ.Provider, {
            value: {
                code: t,
                giftCode: m,
                plan: k,
                promotion: w,
                trial: D,
                isDirectFulfillment: f,
                hasResolvedGiftCode: u,
                giftCodeResolveError: C,
                hasFetchedMostRecentPremiumTypeSubscription: a,
                recentSubscription: i,
                premiumSubscription: s,
                paymentModalArgs: g,
                priceOptions: B,
                analyticsData: H,
                handleClose: W,
                redeemPromotion: Y,
                confirmedUpgrade: y,
                setConfirmedUpgrade: I,
            },
            children: l,
        })
    );
}
var rQ = n(830215),
    r$ = n(264779),
    rJ = n(314019),
    rX = n(554632);
function r0(e) {
    let { user: t, code: n, className: l } = e;
    return (0, r.jsx)(y.E, {
        className: e4()(l, rJ.iZ),
        variant: "text-md/normal",
        children: H.intl.format(H.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, r.jsx)(
                    l1.eu,
                    {
                        className: rJ.FL,
                        size: n9._3.SIZE_24,
                        src: t.getAvatarURL(null, 24),
                        "aria-label": lS.Ay.getUserTag(t, { decoration: "never" }),
                    },
                    n,
                );
            },
            tag: lS.Ay.getUserTag(t),
            logoutHook: () => {
                rQ.A.logout("inbound_promotion_redemption_modal", eB.BVt.BILLING_PROMOTION_REDEMPTION(n));
            },
        }),
    });
}
function r1(e) {
    let { promotion: t, code: n, isDirectFulfillment: l } = e,
        i = (0, U.bG)([F.default], () => F.default.getCurrentUser()),
        a = (0, iB.Ay)(),
        s = (0, r$.WD)(t.id, a);
    return (0, r.jsxs)("div", {
        className: rJ.rN,
        children: [
            (0, r.jsxs)("div", {
                className: rJ.u5,
                children: [
                    (0, r.jsx)("img", { alt: "", src: s, className: rJ.hb }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(te.D, {
                                variant: "heading-xl/bold",
                                className: rJ.DD,
                                children: t.inboundHeaderText,
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-sm/normal",
                                className: rJ.G3,
                                children: t.inboundBodyText,
                            }),
                        ],
                    }),
                ],
            }),
            l || null == i ? null : (0, r.jsx)(r0, { className: rJ.KZ, user: i, code: n }),
        ],
    });
}
function r2(e) {
    let { title: t, bodyText: n, helpCenterLink: l, showUser: i = !1, user: a, code: s, handleClose: o } = e,
        u = c.useMemo(() => ({ text: H.intl.string(H.t.BddRzS), onClick: o }), [o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: rJ.t4,
                children: [
                    (0, r.jsx)("img", { alt: "", src: rX, className: rJ.M6 }),
                    (0, r.jsx)(te.D, { variant: "heading-lg/semibold", className: rJ.DD, children: t }),
                    (0, r.jsx)(y.E, { variant: "text-md/normal", className: rJ.G3, children: n }),
                    null != l
                        ? (0, r.jsx)(y.E, {
                              variant: "text-md/normal",
                              className: rJ.G3,
                              children: H.intl.format(H.t["4uSp2y"], { helpCenterLink: l }),
                          })
                        : null,
                    i && null != a ? (0, r.jsx)(r0, { className: rJ.EF, user: a, code: s }) : null,
                ],
            }),
            (0, r.jsx)(eo.lo, { primaryButtonProps: u }),
        ],
    });
}
function r4(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            code: l,
            giftCode: i,
            plan: a,
            promotion: s,
            trial: u,
            hasResolvedGiftCode: d,
            giftCodeResolveError: m,
            hasFetchedMostRecentPremiumTypeSubscription: p,
            recentSubscription: C,
        } = rq(),
        h = (0, U.bG)([F.default], () => F.default.getCurrentUser()),
        f = (0, eP.Hp)(),
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
                    title: H.intl.string(H.t.ARIsMA),
                    body: H.intl.string(H.t.oDWkjN),
                    showUser: !0,
                    errorCode: eG.JR.USER_NOT_VERIFIED,
                };
            if (null != l && l.code === eB.t02.INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED)
                return {
                    title: H.intl.string(H.t.BHxy59),
                    body: H.intl.string(H.t["1wokFq"]),
                    errorCode: eG.JR.PREVIOUS_SUBSCRIBER,
                };
            if (null == n)
                return {
                    title: H.intl.string(H.t.ARIsMA),
                    body:
                        null != l && l.code === eB.t02.INVALID_GIFT_REDEMPTION_INCORRECT_USER
                            ? H.intl.string(H.t.S8TNKh)
                            : H.intl.string(H.t["1AceQR"]),
                    errorCode: eG.JR.NO_CODE_BODY,
                };
            if (null != l || null == a || null == s || null == r)
                return {
                    title: H.intl.string(H.t.ARIsMA),
                    body: H.intl.string(H.t["3u+6q7"]),
                    errorCode: eG.JR.NO_PROMOTION,
                };
            if (n.isClaimed)
                return {
                    title: H.intl.string(H.t.ARIsMA),
                    body: H.intl.string(H.t.u9IQuM),
                    errorCode: eG.JR.CODE_CLAIMED,
                };
            if (null == i) return null;
            let o = (0, k.EL)(i)?.planId;
            return null != o && i.status === eB.Dmq.ACTIVE && k.Ay.getPremiumType(o) === eG.PremiumTypes.TIER_2
                ? {
                      title: H.intl.string(H.t.BHxy59),
                      body: H.intl.formatToPlainString(H.t.wpwuoV, {
                          months: s.intervalCount,
                          planName: (0, k.RH)(r.id),
                      }),
                      errorCode: eG.JR.EXISTING_SUBSCRIBER,
                  }
                : null;
        })({ user: h, giftCode: i, giftCodeResolveError: m, recentSubscription: C, plan: a, promotion: s, trial: u });
    return (c.useEffect(() => {
        E ||
            eN.default.track(eB.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
                is_eligible: null == S && !f,
                error_code: null != S ? S.errorCode : f ? eG.JR.BLOCKED_PAYMENT : null,
                promotion_id: i?.promotion?.id,
            });
    }, [E, S, f, i]),
    c.useEffect(() => {
        E || null != S || f || t(o.pn.PROMOTION_INFO);
    }, [E, S, f, t]),
    E)
        ? (0, r.jsx)(ex.A, {})
        : null != S
          ? (0, r.jsx)(r2, {
                title: S.title,
                bodyText: S.body,
                helpCenterLink: s?.inboundHelpCenterLink ?? "",
                showUser: S.showUser,
                handleClose: n,
                user: h ?? void 0,
                code: l,
            })
          : f
            ? (0, r.jsx)(ev.oO, {})
            : null;
}
function r3(e) {
    let { plan: t, isDirectFulfillment: n, paymentModalArgs: l, handleClose: i } = rq();
    ez()(null != t, "Missing plan");
    let { paymentSources: a, paymentSourceId: s } = l,
        o = (0, O.g)(a, s);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eV.dZ, {
                children: (0, r.jsx)(lJ.Ay, { hideClose: !0, planId: t.id, onClose: i, paymentSourceType: o }),
            }),
            n
                ? (0, r.jsx)(eV.UX, {
                      children: (0, r.jsx)(iI.H, {
                          actions: [{ text: H.intl.string(H.t.UQvCf7), variant: "primary", onClick: i, size: "md" }],
                      }),
                  })
                : null,
        ],
    });
}
function r7(e) {
    let { handleStepChange: t } = e,
        { promotion: n, code: l, isDirectFulfillment: i } = rq();
    return (
        ez()(null != n, "Missing promotion"),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eV.dZ, { children: (0, r.jsx)(r1, { promotion: n, code: l, isDirectFulfillment: i }) }),
                (0, r.jsx)(eV.UX, {
                    children: (0, r.jsx)(eo.lo, {
                        primaryButtonProps: { text: H.intl.string(H.t.PDTjLN), onClick: () => t(o.pn.REVIEW) },
                    }),
                }),
            ],
        })
    );
}
var r6 = n(732159),
    r5 = n(262427),
    r8 = n(134638);
let r9 = { headerBadgePreset: "trial" };
function ae(e) {
    let {
            plan: t,
            renewalInvoicePreview: n,
            subscriptionTrial: l,
            shouldShowFractionalPremiumBanner: i,
            fractionalPremiumInfo: a,
            paymentMethodContent: s,
            legalContent: o,
        } = e,
        [u, d] = c.useMemo(
            () =>
                null == n
                    ? [H.intl.string(Z.default.R0cZsM), void 0]
                    : [H.intl.string(Z.default.R0cZsM), (0, w.$g)(0, n.currency)],
            [n],
        );
    if (null == n) return (0, r.jsx)(v.Ed, { shouldShowUnifiedHeader: !0 });
    let m = i
            ? [{ key: "fractional-premium-notice", directContent: (0, r.jsx)(at, { fractionalPremiumInfo: a }) }]
            : null,
        p = (0, r.jsx)(an, { plan: t, renewalInvoicePreview: n }),
        C = (0, r.jsx)(al, { renewalInvoicePreview: n, subscriptionTrial: l });
    return (0, r.jsx)(v.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: r9,
        upperInlineNoticeProps: m,
        purchaseItemContent: p,
        subscriptionDetailsContent: C,
        invoiceSummaryContent: null,
        paymentMethodContent: s,
        legalContent: o,
        invoiceTotalDueLabel: u,
        invoiceTotalDueValue: d,
        promotionalNoticeContent:
            null != l &&
            (0, r.jsx)(r5.J, {
                text: H.intl.format(H.t.A1MiZN, { months: l.intervalCount, planName: (0, k.RH)(t.id) }),
            }),
    });
}
function at(e) {
    let { fractionalPremiumInfo: t } = e,
        n = (0, tf.NQ)({ fractionalPremiumInfo: t, variant: tf.uA.TRIAL });
    return null != n && "" !== n ? (0, r.jsx)(eQ.w, { type: "info", children: n }) : null;
}
function an(e) {
    let { plan: t, renewalInvoicePreview: n } = e;
    return (0, r.jsx)(r8._, {
        type: x.u$.PREMIUM_WITH_TRIAL,
        invoicePreview: n,
        subscriptionPlan: t,
        isPrepaidPaymentSource: !1,
    });
}
function al(e) {
    let { renewalInvoicePreview: t, subscriptionTrial: n } = e;
    if (null == t) return (0, r.jsx)(ti.y, {});
    let l = (0, M.Gj)(null, t, n, { isSubscriptionUpdate: !1 });
    return (0, r.jsx)(G._D, { ...l, defaultExpanded: !0 });
}
let ai = [...eG.oz],
    ar = [
        {
            key: o.pn.PROMOTION_INFO,
            renderStep: (e) => (0, r.jsx)(r7, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    ],
    aa = {
        CHECKOUT_FLOW: el.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(r4, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
        STEPS_BEFORE_CHECKOUT: ar,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: function (e) {
                let { handleStepChange: t } = e,
                    {
                        code: n,
                        plan: l,
                        trial: i,
                        promotion: a,
                        priceOptions: s,
                        paymentModalArgs: u,
                        redeemPromotion: d,
                        confirmedUpgrade: m,
                        setConfirmedUpgrade: p,
                        handleClose: C,
                    } = rq();
                ez()(null != l && null != i, "Missing plan or trial");
                let { paymentSources: h, paymentSourceId: f, setPaymentSourceId: E, isSubmittingCurrentStep: I } = u,
                    g = (0, U.bG)([ef.A], () => ef.A.getPremiumTypeSubscription()),
                    { analyticsLocations: P } = (0, ta.Ay)(),
                    {
                        hasAcceptedTerms: v,
                        checkoutPaymentSources: _,
                        checkoutInvoicePreview: x,
                    } = (0, S.t4)((e) => ({
                        hasAcceptedTerms: e.hasAcceptedTerms,
                        checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        checkoutInvoicePreview: e.checkoutInvoicePreview,
                    })),
                    T = (0, ts.A)(),
                    { immediateDelivery: N } = (0, b.U)(),
                    [j, R] = (0, tc.YV)({
                        items: [{ planId: l.id, quantity: 1 }],
                        renewal: !0,
                        paymentSourceId: f,
                        code: n,
                        subscriptionId: g?.id,
                        analyticsLocations: P,
                        analyticsLocation: eB.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                    });
                (0, to.F)(j, R);
                let L = c.useCallback(async () => {
                        function e() {
                            return t(o.pn.CONFIRM);
                        }
                        null == g || m || null == i || null == a
                            ? (await d()) && e()
                            : (0, nE.openModal)((t) => {
                                  let n;
                                  if (null == x) n = (0, r.jsx)(ti.y, { className: rJ.wG });
                                  else {
                                      let e = (0, k.y8)(l.id, !1, !1, s);
                                      n = (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(y.E, {
                                                  className: rJ.ex,
                                                  variant: "text-md/normal",
                                                  children: H.intl.format(H.t.DLsu0k, {
                                                      lineItemsHook: function (e, t) {
                                                          return (0, r.jsx)(
                                                              "ul",
                                                              {
                                                                  children: g.items.map((e) => {
                                                                      let t = eG.hd[e.planId],
                                                                          n = H.intl.formatToPlainString(H.t.G0EnAP, {
                                                                              quantity: e.quantity,
                                                                              lineItem: t.name,
                                                                          });
                                                                      return (0, r.jsx)(
                                                                          "li",
                                                                          { children: n },
                                                                          `${g.id}-${e.planId}`,
                                                                      );
                                                                  }),
                                                              },
                                                              t,
                                                          );
                                                      },
                                                      newPlanName: eG.hd[l.id].name,
                                                  }),
                                              }),
                                              (0, r.jsx)(y.E, {
                                                  className: rJ.ex,
                                                  variant: "text-sm/normal",
                                                  children: H.intl.format(H.t.KHvyu5, {
                                                      newPlanName: eG.hd[l.id].name,
                                                      trialMonths: i.intervalCount,
                                                      helpCenterLink:
                                                          a.inboundHelpCenterLink ?? tg.A.getArticleURL(eB.MVz.BILLING),
                                                      planPrice: (0, w.$g)(e.amount, x.currency),
                                                  }),
                                              }),
                                          ],
                                      });
                                  }
                                  return (0, r.jsx)(r6.ConfirmModal, {
                                      onConfirm: async () => {
                                          p(!0), (await d()) && e();
                                      },
                                      title: H.intl.string(H.t.MaZ28z),
                                      cancelText: H.intl.string(H.t["ETE/oC"]),
                                      confirmText: H.intl.string(H.t["wfx/Hp"]),
                                      ...t,
                                      variant: "primary",
                                      children: n,
                                  });
                              });
                    }, [t, g, m, i, a, l, s, x, d, p]),
                    D = (0, tL.iB)({
                        checkoutPaymentSources: _,
                        paymentSourceId: f,
                        location: "InboundPromotionReviewStep",
                    }),
                    F = (0, ek.Y)(),
                    B = (0, O.W)(h, f),
                    W = c.useMemo(
                        () => ({
                            prependOption:
                                0 === Object.keys(h).length ? { label: H.intl.string(H.t.iA5vA1), value: null } : null,
                            isTrial: !0,
                        }),
                        [h],
                    );
                if (null != R && null == x)
                    return (0, r.jsx)(r2, {
                        title: H.intl.string(H.t.ARIsMA),
                        bodyText: H.intl.string(H.t["3u+6q7"]),
                        helpCenterLink: a?.inboundHelpCenterLink ?? "",
                        handleClose: C,
                        user: void 0,
                        code: n,
                    });
                if (!F || null == x) return (0, r.jsx)(ti.y, {});
                let Y = (0, r.jsx)(A.N, {
                        setPaymentSourceId: E,
                        paymentSourceId: f,
                        location: "InboundPromotionReview",
                        label: H.intl.string(H.t["mmDvV+"]),
                        additionalPaymentSourceDropdownProps: W,
                        onPaymentSourceAdd: () => t(o.pn.ADD_PAYMENT_STEPS),
                        hideCurrencySelect: !0,
                    }),
                    V = (0, tD.de)({ renewalInvoice: x, isSubscriptionUpdate: !1 }),
                    { renewalPrice: K, multiPeriodDiscountAttributes: Z } = (0, M.QM)(x, l, {
                        discountOffer: null,
                        subscriptionTrial: i,
                    }),
                    q = H.intl.formatToPlainString(H.t.BQPav6, { planPremiumType: k.Ay.getDisplayName(l.id) }),
                    z = (0, r.jsx)(G._P, {
                        variant: {
                            type: G.I0.SubscriptionTrial,
                            purchaseButtonText: q,
                            totalDue: 0,
                            renewalPrice: K,
                            currency: x.currency,
                            interval: l.interval,
                            intervalCount: l.intervalCount,
                            startDate: V,
                            multiPeriodDiscountAttributes: Z,
                        },
                        paymentSourceType: (0, O.W)(h, f)?.type ?? null,
                        immediateDelivery: N,
                    }),
                    Q = null;
                return (
                    null == B ? (Q = H.intl.string(H.t.L7jbQV)) : v || (Q = H.intl.string(H.t.XdvBLS)),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(eV.dZ, {
                                children: [
                                    (0, r.jsx)(nX.A, {}),
                                    (0, r.jsx)(ae, {
                                        plan: l,
                                        renewalInvoicePreview: x,
                                        subscriptionTrial: i,
                                        shouldShowFractionalPremiumBanner: T.isFractionalPremiumActive,
                                        fractionalPremiumInfo: T,
                                        paymentMethodContent: Y,
                                        legalContent: z,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(eV.UX, {
                                children: (0, r.jsx)(eo.lo, {
                                    onBackClick: () => t(o.pn.PROMOTION_INFO),
                                    primaryButtonProps: {
                                        text: q,
                                        tooltipText: Q ?? void 0,
                                        disabled: null == B || !B.canRedeemTrial() || D || !v,
                                        loading: I,
                                        onClick: () => {
                                            if (null != B && v) return L();
                                        },
                                        variant: (0, rh.CY)(rh.ti.PURCHASE),
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
                        loadId: l,
                        onClose: i,
                        children: a,
                    } = e,
                    s = (0, U.bG)([ef.A], () => ef.A.getPremiumTypeSubscription());
                return (0, r.jsx)(ei.M, {
                    activeSubscription: s,
                    stepConfigs: n,
                    skuIDs: ai,
                    loadId: l,
                    unifiedCheckoutFlow: el.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
                    children: (0, r.jsx)(u.Qt, { children: (0, r.jsx)(rz, { code: t, onClose: i, children: a }) }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
                return n({ ...t, shakeWhilePurchasing: !0, tenantManagesPaymentAuth: !0 });
            },
        },
        CustomHeaderComponent: function (e) {
            let { step: t } = e,
                { plan: n, handleClose: l } = rq(),
                i = (0, S.t4)((e) => e.purchaseState);
            return (0, r.jsx)(rH.A, {
                enablePremiumBrandRefresh: !0,
                forceBrandRefreshHeader: !0,
                premiumType: n?.premiumSubscriptionType ?? eG.PremiumTypes.TIER_2,
                className: rJ.X9,
                currentStep: t,
                purchaseState: i,
                hideCloseButton: !0,
                onClose: l,
            });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(r3, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    };
var as = n(694306);
function ao(e) {
    let { handleClose: t } = e,
        n = (0, S.t4)((e) => e.selectedSkuId),
        { application: l } = (0, nV.V)(),
        i = (0, nK.gU)(),
        { isGift: a, giftRecipient: s } = (0, nO.Pv)();
    ez()(null != n, "Expected selectedSkuId"), ez()(null != l, "Expected application");
    let o = i[n];
    ez()(null != o, "Expected sku");
    let u = a
        ? H.intl.formatToPlainString(H.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: s?.username ?? "your recipient",
          })
        : H.intl.formatToPlainString(H.t.wK0IbP, { applicationName: l.name, itemName: o.name });
    return (0, r.jsxs)(eV.dZ, {
        children: [
            (0, r.jsx)(nX.A, {}),
            (0, r.jsxs)("div", {
                className: as.EL,
                children: [
                    (0, r.jsx)(te.D, { variant: "heading-xxl/bold", className: as.RS, children: "Success!" }),
                    (0, r.jsx)(y.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: as.yF }),
                    (0, r.jsx)(eJ.$, { onClick: t, text: H.intl.string(H.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var au = n(67480),
    ac = n(328968),
    ad = n(371794),
    am = n(78741);
o.pn.GIFT_CUSTOMIZATION;
let ap = {
    CustomHeaderComponent: function (e) {
        let { step: t, onClose: n } = e,
            l = c.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(rI, { step: t, onClose: l });
    },
    CHECKOUT_FLOW: s.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, nO.Pv)(),
                i = (0, S.t4)((e) => e.selectedSkuId),
                a = (0, U.bG)([F.default], () => F.default.getCurrentUser()),
                o = (0, U.bG)([au.A], () => (null != i ? au.A.get(i) : null), [i]),
                u = lx(),
                d = (0, U.bG)([ac.A], () => (null != i ? ac.A.getForSKU(i) : null), [i]),
                m =
                    d?.headerBackground != null && o?.applicationId != null
                        ? (0, ad.YE)(o.applicationId, d.headerBackground, 256)
                        : void 0;
            async function p(e, t) {}
            let C = null == l || l.id === a?.id || t.length > eG.Jo,
                h = c.useMemo(() => ({ disabled: C }), [C]);
            return (0, r.jsx)(s.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: s.XZ.TWO_COLUMN,
                renderLeftColumn: function () {
                    return (0, r.jsxs)("div", {
                        className: am.P6,
                        children: [
                            o?.name != null &&
                                (0, r.jsx)(te.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != m && (0, r.jsx)("img", { src: m, alt: o?.name ?? "", className: am.LC }),
                        ],
                    });
                },
                renderRightColumn: function () {
                    return (0, r.jsxs)("div", {
                        className: am.P6,
                        children: [
                            (0, r.jsx)(lv, { recipients: u, selectedSkuId: i, validateSelectedGift: p }),
                            (0, r.jsx)(lb.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: am.iX,
                                innerClassName: am.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: h,
            });
        },
        [o.pn.REVIEW]: nf.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(ao, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: a.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var aC = n(429913),
    ah = n(733391),
    af = n(871123),
    aE = n(26594),
    aS = n(510022),
    ay = n(317560),
    aI = n(275256),
    ag = n(910200),
    aA = n(818189);
function aP(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, ta.Ay)(),
        { selectedSkuId: l, entitlementsGranted: i } = (0, S.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, nV.V)(),
        s = (0, nK.gU)(),
        { isGift: o, giftRecipient: u } = (0, nO.Pv)();
    ez()(null != l, "Expected selectedSkuId"), ez()(null != a, "Expected application");
    let d = s[l];
    ez()(null != d, "Expected sku");
    let m = i.find((e) => e.sku_id === l),
        p = (0, aE.G)(m, { isGift: o });
    return (c.useEffect(() => {
        o || ((0, ay.j)(), t(), (0, aS.n)({ sku: d, application: a, analyticsLocations: n, entitlement: m }));
    }, [o, d, a, t, n, m]),
    o)
        ? (0, r.jsxs)(eV.dZ, {
              children: [
                  (0, r.jsx)(nX.A, {}),
                  (0, r.jsxs)("div", {
                      className: aA.EL,
                      children: [
                          (0, r.jsx)("div", {
                              className: aA.KD,
                              children: (0, r.jsx)(aI.default, {
                                  imageUrl: (0, af.fq)(d) ?? void 0,
                                  backgroundImageUrl: (0, af.xf)(d),
                                  altText: d.name,
                                  rewardGraphic: p?.graphic,
                              }),
                          }),
                          (0, r.jsx)(te.D, {
                              variant: "heading-xl/semibold",
                              className: aA.RS,
                              children: H.intl.string(H.t["5glWta"]),
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-md/normal",
                              children: H.intl.formatToPlainString(H.t["2VjPTw"], {
                                  itemName: d.name,
                                  giftRecipient: u?.username ?? "your recipient",
                              }),
                          }),
                          null != p &&
                              (0, r.jsx)("div", {
                                  className: aA.Is,
                                  children: (0, r.jsx)(ag.O0, { Icon: p.Icon, text: p.text }),
                              }),
                          (0, r.jsx)("div", {
                              className: aA.UD,
                              children: (0, r.jsx)(eJ.$, {
                                  onClick: t,
                                  text: H.intl.string(H.t.cpT0Cq),
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
var av = n(889137),
    a_ = n(742158),
    ax = n(198052),
    aT = n(238017),
    aN = n(650588),
    ab = n(993046),
    aj = n(763827),
    aR = n(403362),
    aM = n(832163),
    aO = n(31969),
    aL = n(44724),
    ak = n(980094),
    aw = n(366523),
    aU = n(806931),
    aD = n(733211);
function aG(e) {
    let { handleClose: t, sku: n, application: l } = e,
        i = c.useCallback(() => {
            (0, aL.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        a = c.useCallback(() => {
            t();
            let e = aM.A.getStorefrontState(n.applicationId)?.activePage;
            (0, af.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: l?.guildId,
                skuId: n.id,
            }) ||
                ((0, nE.closeAllModals)(),
                (0, aL.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, l]);
    return (0, r.jsx)("div", {
        className: aD.$O,
        children: (0, r.jsx)(eX.Q, {
            text: H.intl.string(H.t.ImioFL),
            onMouseDown: i,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let aF = {
    CHECKOUT_FLOW: s.CL.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: l, disabled: i } = (function (e) {
                    var t;
                    let n,
                        l,
                        i,
                        { handleStepChange: a, handleClose: s } = e,
                        {
                            customGiftMessage: o = "",
                            setCustomGiftMessage: u,
                            giftRecipient: d,
                            emojiConfetti: m,
                            soundEffect: p,
                            setEmojiConfetti: C,
                            setSoundEffect: h,
                            giftingOrigin: f,
                            additionalUserIds: E,
                        } = (0, nO.Pv)(),
                        I = (0, S.t4)((e) => e.selectedSkuId),
                        { application: g } = (0, nV.V)(),
                        A = (0, U.bG)([F.default], () => F.default.getCurrentUser()),
                        P =
                            ((t = A?.id),
                            (n = lx()),
                            (l = (function (e) {
                                let t = (0, U.bG)([aj.A], () => (aj.A.isConnected() ? aj.A.getChannelId() : null)),
                                    [n, l] = c.useState([]);
                                return (
                                    c.useEffect(() => {
                                        let n = null != t ? ax.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, aU.Xw)(t) && !(0, aU.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, aU.Ay)(e) && !(0, aU.Ay)(t)
                                                ? -1
                                                : (0, aU.Ay)(t) && !(0, aU.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (i = (0, U.yK)([F.default], () => E?.map(F.default.getUser).filter(aR.Vq) ?? [], [E])),
                            c.useMemo(
                                () =>
                                    lg().uniqWith(
                                        [...(null != d ? [d] : []), ...i, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, i, l, n],
                            )),
                        v = (0, U.bG)([au.A], () => (null != I ? au.A.get(I) : null), [I]),
                        { userPrice: _ } = (0, ab.CD)({ sku: v, priceSetAssignmentPurchaseType: eB.lid.GIFT }),
                        x = (0, aO.F)("gift_customization", { applicationId: g?.id, skuId: v?.id }),
                        T = (0, af.fq)(v),
                        N = (0, af.xf)(v);
                    async function b(e, t) {}
                    function j(e) {
                        null != h && h(null == e ? void 0 : e);
                    }
                    function R() {
                        return (0, r.jsxs)("div", {
                            className: aD.mT,
                            children: [
                                null != T &&
                                    (0, r.jsx)(aw.A, {
                                        containerClassName: aD.T3,
                                        cardImage: T,
                                        cardBackgroundImage: N,
                                        altText: v?.name ?? "",
                                        shape: "square",
                                    }),
                                (0, r.jsxs)("div", {
                                    className: aD._T,
                                    children: [
                                        (0, r.jsx)(aN.A, { sound: p, onSelect: j }),
                                        (0, r.jsx)(aT.A, {
                                            setEmojiConfetti: C,
                                            emojiConfetti: null == m ? void 0 : m,
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }
                    function M() {
                        return (0, r.jsxs)("div", {
                            className: aD.Tc,
                            children: [
                                null != d && (f === eG.vQ.USER_PROFILE_WISHLIST || f === eG.vQ.DM_CHANNEL_WISHLIST)
                                    ? (0, r.jsx)(lR.Z, { giftRecipient: d })
                                    : (0, r.jsx)(lv, { selectedSkuId: I, validateSelectedGift: b, recipients: P }),
                                (0, r.jsx)(lb.A, {
                                    onTextChange: (e) => u?.(e),
                                    pendingText: o,
                                    currentText: o,
                                    disableThemedBackground: !0,
                                    className: aD.iX,
                                    innerClassName: aD.pt,
                                }),
                                null == v
                                    ? null
                                    : (0, r.jsxs)("div", {
                                          className: aD.AN,
                                          children: [
                                              (0, r.jsx)(a_.z, {
                                                  className: aD.jr,
                                                  children: H.intl.string(H.t.PpoJzt),
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: aD.Wx,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: aD.Xb,
                                                          children:
                                                              null != v &&
                                                              null != T &&
                                                              (0, r.jsx)(aw.A, {
                                                                  containerClassName: aD.Iy,
                                                                  cardImage: T,
                                                                  cardBackgroundImage: N,
                                                                  altText: v.name,
                                                                  shape: "square",
                                                              }),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                          className: aD.vz,
                                                          children: [
                                                              null != g && (0, r.jsx)(ak.Q, { application: g }),
                                                              (0, r.jsx)(y.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: v.name,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, r.jsx)(y.E, { variant: "text-md/semibold", children: _ }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                null != v &&
                                    (0, af.Ri)(v) &&
                                    (0, r.jsx)(eQ.w, { type: "info", children: H.intl.string(H.t.lORYb6) }),
                                null != x &&
                                    (0, r.jsx)(ag.O0, {
                                        Icon: x.Icon,
                                        text: x.text,
                                        endDatetime: x.endsAt,
                                        tooltip: x.tooltip,
                                    }),
                                null != v && (0, r.jsx)(aG, { handleClose: s, sku: v, application: g }),
                            ],
                        });
                    }
                    return {
                        renderStepBody: function () {
                            return (0, r.jsxs)("div", { className: aD.Du, children: [R(), M()] });
                        },
                        getLeftColumnComponent: R,
                        getRightColumnComponent: M,
                        onStepChange: a,
                        onBackClick: s,
                        disabled: null == d || d.id === A?.id || o.length > eG.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = c.useMemo(() => ({ disabled: i }), [i]);
            return (0, r.jsx)(s.Mw, {
                paymentModalStepProps: e,
                layout: s.XZ.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: a,
            });
        },
        [o.pn.REVIEW]: nf.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(aP, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: l, applicationId: i, isGift: a, skuId: s, ...o } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, aC.h)(t);
                    c.useEffect(() => {
                        null == l ||
                            null == n ||
                            ac.A.isFetchingForSKU(n) ||
                            null != au.A.get(n) ||
                            (0, ah.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: i, skuId: s }),
                (0, r.jsx)(ei.M, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: i,
                    skuIDs: [s],
                    purchaseType: tG.VV.ONE_TIME,
                    isGift: a,
                    ...o,
                    activeSubscription: null,
                    children: t,
                })
            );
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
            return n({ ...t, analyticsObject: t.analyticsSourceLocation });
        },
        tenantAnalyticsLocation: a.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, av.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => H.intl.string(H.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => H.intl.string(H.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(nM.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var aB = n(977445),
    aH = n(52635),
    aW = n(211287),
    aY = n(855104),
    aV = n(132500),
    aK = n(623373),
    aZ = n(739508),
    aq = n(310829),
    az = n(715054);
(0, aV.A)();
var aQ = n(457008),
    a$ = n(145659);
n(322076);
var aJ = n(318254),
    aX = n(132198),
    a0 = n(120992),
    a1 = n(994143),
    a2 = n(319820),
    a4 = n(831123);
function a3(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: l, isSocialLayerGameItem: i } = (0, a2.AO)({ sku: t }),
        a = (0, a1.oO)(l);
    i ? (a = H.intl.string(Z.default.qwSlCO)) : (0, aK.Ab)(l) && (a = H.intl.string(H.t["0TmQRG"]));
    let s = (0, a1.dL)(t),
        o = (0, nG.EZ)(t.id) ? aX.m[t.id].render({ className: a4.$ }) : (0, r.jsx)(tw.WH, { sku: t, product: l });
    return (0, r.jsx)(tw.f7, { label: s, description: a, graphic: o, price: null != n ? `${n}` : "", PriceIcon: aJ.C });
}
function a7(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, a0.c)({ applicationId: (0, aq.P)(t), skuIDs: [t] });
    let l = (0, nW.bG)([au.A], () => au.A.get(t), [t]);
    return null == l
        ? (0, r.jsx)(ti.y, { type: ti.y.Type.PULSING_ELLIPSIS })
        : (0, r.jsx)(a3, { sku: l, orbPriceAmount: n });
}
function a6(e) {
    let { orbBalance: t } = e;
    return (0, r.jsx)(G.vW, { label: H.intl.string(H.t.y0WGqP), value: null != t ? `${t}` : "", Icon: aJ.C });
}
function a5() {
    return H.intl.string(H.t.wmcDyu);
}
function a8() {
    let { immediateDelivery: e } = (0, b.U)(),
        { skuProductLine: t, skuId: n } = se(),
        l = a5(),
        i = (0, c.useMemo)(() => ({ type: G.I0.OrbsRedemption, purchaseButtonText: l }), [l]);
    return t === eB.EZt.SOCIAL_LAYER_GAME_ITEM
        ? (0, r.jsx)(aH.EB, { skuId: n, purchaseButtonText: l, checkoutLegalType: G.I0.OrbsGameShop })
        : (0, r.jsx)(G._P, { variant: i, paymentSourceType: null, immediateDelivery: e });
}
let a9 = (0, c.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    skuProductLine: null,
    skuApplicationId: void 0,
    analyticsSourceLocation: void 0,
});
function se() {
    return (0, c.useContext)(a9);
}
let st = { payment_gateway: tG.kM.VIRTUAL_CURRENCY, currency: eB.Yri.DISCORD_ORB },
    sn = {
        CHECKOUT_FLOW: s.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    { primaryButtonProps: n, ...l } = (function (e) {
                        let { handleStepChange: t } = e,
                            { isRedeeming: n, skuId: l, skuApplicationId: i } = se(),
                            { enabled: a } = aW.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: s, orderOrbPriceAmount: u } = (0, S.t4)((e) => {
                                let t = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != t ? t.total : null,
                                    orderOrbPriceAmount:
                                        null != t ? t.getInvoicePreviewLineItemUnitPriceForSku(l) : null,
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
                                        skuApplicationId: a,
                                        skuProductLine: s,
                                        analyticsSourceLocation: u,
                                    } = se(),
                                    { analyticsLocations: d } = (0, ta.Ay)(),
                                    { setPurchaseState: m, firstConstraintReasonCode: p } = (0, S.t4)((e) => ({
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    C = (0, aY.gN)(),
                                    h = (0, c.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: f } = (function (e) {
                                        let {
                                                skuId: t,
                                                skuApplicationId: n,
                                                skuProductLine: l,
                                                orbProductContext: i,
                                                analyticsLocations: r,
                                                analyticsSourceLocation: a,
                                            } = e,
                                            { activitySessionId: s } = (0, nV.V)(),
                                            { hasPaymentSources: u } = (0, _.j)(),
                                            {
                                                loadId: d,
                                                startTime: m,
                                                discoverySessionId: p,
                                            } = (0, S.t4)((e) => e.contextMetadata),
                                            C = (0, c.useMemo)(
                                                () => ({
                                                    load_id: d,
                                                    discovery_session_id: p,
                                                    application_id: n,
                                                    sku_product_line: l,
                                                    location: r,
                                                    location_stack: r,
                                                    sku_id: t,
                                                    activity_session_id: s,
                                                    payment_gateway: tG.ps.VIRTUAL_CURRENCY,
                                                    ...(null != i && {
                                                        price: i.orbPriceAmount ?? void 0,
                                                        regular_price: i.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: eB.Yri.DISCORD_ORB,
                                                    ...(null != a && { source: a }),
                                                    ...{
                                                        payment_type: eB.frM[eB.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: a$.r.UNIFIED,
                                                        checkout_flow: el.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [d, p, s, t, n, l, r, a, i],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, c.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - m;
                                                    e === eB.HAw.PAYMENT_FLOW_STARTED
                                                        ? eN.default.track(eB.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...C,
                                                              has_saved_payment_source: u,
                                                              payment_gateway: tG.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === eB.HAw.PAYMENT_FLOW_LOADED
                                                          ? eN.default.track(eB.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...C,
                                                                has_saved_payment_source: u,
                                                                initial_step: o.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === eB.HAw.PAYMENT_FLOW_CANCELED
                                                            ? eN.default.track(eB.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...C,
                                                                  duration_ms: n,
                                                              })
                                                            : e === eB.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? eN.default.track(eB.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...C,
                                                                    duration_ms: n,
                                                                })
                                                              : e === eB.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? eN.default.track(eB.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...C,
                                                                      duration_ms: n,
                                                                  })
                                                                : eN.default.track(eB.HAw.PAYMENT_FLOW_FAILED, {
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
                                                [m, C, u],
                                            ),
                                        };
                                    })({
                                        skuId: r,
                                        skuApplicationId: a,
                                        skuProductLine: s,
                                        orbProductContext: n,
                                        analyticsLocations: d,
                                        analyticsSourceLocation: u,
                                    });
                                (0, c.useEffect)(() => {
                                    null != l &&
                                        null !== h.current &&
                                        (f(eB.HAw.PAYMENT_FLOW_FAILED, l), (h.current = null));
                                }, [l, f]);
                                let E = (0, c.useCallback)(() => {
                                        (h.current = C),
                                            f(eB.HAw.PAYMENT_FLOW_COMPLETED),
                                            i((e) => {
                                                m(ed.h.COMPLETED),
                                                    t(o.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [i, m, C, f, t]),
                                    y = h.current ?? C,
                                    I = null != n ? n.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == n,
                                    errorMessage: (0, c.useMemo)(() => (0, aQ.$9)(l, p), [l, p]),
                                    orbPriceAmount: I,
                                    orbBalanceToDisplay: y,
                                    onClickCheckout: E,
                                };
                            })({ handleStepChange: t }),
                            f = (0, aB.uS)(i),
                            {
                                disabled: E,
                                tooltipText: y,
                                text: I,
                            } = (function (e) {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: i, tooltipText: r } = (0, c.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: H.intl.string(H.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: H.intl.string(H.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: i, tooltipText: r, text: a5() };
                            })({ orbBalance: p, orbPriceAmount: a ? s : m, isInTestMode: f }),
                            g = (0, c.useMemo)(
                                () => ({ onClick: C, loading: n, text: I, disabled: E, tooltipText: y }),
                                [C, n, I, E, y],
                            ),
                            A = f ? H.intl.string(H.t.OvMyMd) : null;
                        return {
                            isStepLoading: d,
                            upperInlineNoticeProps: (0, c.useMemo)(() => {
                                if (null != A || null != h) {
                                    let e = [];
                                    return (
                                        null != A &&
                                            e.push({ type: "warning", message: A, key: "test-mode-warning-notice" }),
                                        null != h &&
                                            e.push({ type: "critical", message: h, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [A, h]),
                            purchaseItemContent: (0, r.jsx)(a7, { skuId: l, orbPriceAmount: a ? u : m }),
                            paymentMethodContent: (0, r.jsx)(a6, { orbBalance: p }),
                            legalContent: (0, r.jsx)(a8, {}),
                            primaryButtonProps: g,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({ handleStepChange: t });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(eV.dZ, { children: (0, r.jsx)(v.T_, { ...l }) }),
                        (0, r.jsx)(eV.UX, { children: (0, r.jsx)(eo.lo, { primaryButtonProps: n }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: l, children: i } = e,
                    { order: a, setOrder: s } = (0, S.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: o,
                        isRedeeming: u,
                        orbRedemptionError: d,
                        onRedeemVirtualCurrency: m,
                        skuProductLine: p,
                        skuApplicationId: C,
                    } = (function (e) {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: i, order: r } = e,
                            a = (0, U.bG)([F.default], () => k.Ay.canUseShopDiscounts(F.default.getCurrentUser())),
                            s = (0, U.bG)([au.A], () => au.A.get(t), [t]),
                            o = null != s ? s.productLine : null,
                            u = s?.applicationId ?? (0, aq.P)(t),
                            d = (0, ab.JL)({ sku: s }),
                            { product: m } = (0, ll.q)(t),
                            p = (0, c.useMemo)(() => {
                                if (null != d) return { orbPriceAmount: d.amount };
                                if (null != m) {
                                    let e = (0, aK.CW)({ product: m, hasShopDiscount: a });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [d, m, a]);
                        p?.orbPriceAmount == null &&
                            (0, aZ.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: C,
                                isSubmitting: h,
                                error: f,
                            } = (0, az.Q)({ skuId: t, loadId: n, order: r, onSignFailure: i }),
                            E = (0, c.useCallback)(
                                (e) => {
                                    C(t, n, (n) => {
                                        l?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, C, l],
                            );
                        return {
                            skuId: t,
                            skuProductLine: o,
                            skuApplicationId: u,
                            loadId: n,
                            orbProductContext: p,
                            onRedeemVirtualCurrency: E,
                            isRedeeming: h,
                            orbRedemptionError: f,
                        };
                    })({ skuId: t, loadId: n, order: a, onSignFailure: s }),
                    h = (0, c.useMemo)(
                        () => ({
                            orbProductContext: o,
                            isRedeeming: u,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: m,
                            skuId: t,
                            skuProductLine: p,
                            skuApplicationId: C,
                            analyticsSourceLocation: l,
                        }),
                        [o, u, d, m, t, p, C, l],
                    );
                return (0, r.jsx)(a9.Provider, { value: h, children: i });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l, skuProductLine: i } = se(),
                    r = (function (e) {
                        let { orbProductContext: t, skuProductLine: n, overrideAnalyticParams: l } = e;
                        return {
                            analyticsDataOverride: (0, c.useMemo)(
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
                    })({ orbProductContext: l, skuProductLine: i, overrideAnalyticParams: st });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: st,
        },
    };
var sl = n(75304);
let si = {
    [sl.C.ORB_CHECKOUT]: {
        flowType: sl.C.ORB_CHECKOUT,
        implemented: !0,
        purchaseType: eB.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: sn,
    },
    [sl.C.COLLECTIBLES_CHECKOUT]: {
        flowType: sl.C.COLLECTIBLES_CHECKOUT,
        implemented: !0,
        purchaseType: eB.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: lD,
    },
    [sl.C.SLAYER_STOREFRONT_CHECKOUT]: {
        implemented: !0,
        flowType: sl.C.SLAYER_STOREFRONT_CHECKOUT,
        purchaseType: eB.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: aF,
    },
    [sl.C.PREMIUM_CHECKOUT]: {
        implemented: !0,
        flowType: sl.C.PREMIUM_CHECKOUT,
        purchaseType: eB.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: rm,
    },
    [sl.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: {
        implemented: !0,
        flowType: sl.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        purchaseType: eB.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: aa,
    },
    [sl.C.PREMIUM_APPS_OTP_CHECKOUT]: {
        implemented: !0,
        flowType: sl.C.PREMIUM_APPS_OTP_CHECKOUT,
        purchaseType: eB.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: ap,
    },
    [sl.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
        implemented: !0,
        flowType: sl.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        purchaseType: eB.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: rB,
    },
    [sl.C.GUILD_PRODUCT_CHECKOUT]: {
        implemented: !0,
        purchaseType: eB.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: nR,
        flowType: sl.C.GUILD_PRODUCT_CHECKOUT,
    },
    [sl.C.GUILD_ROLE_CHECKOUT]: {
        implemented: !0,
        flowType: sl.C.GUILD_ROLE_CHECKOUT,
        TENANT_CHECKOUT_FLOW_CONFIG: ii,
        purchaseType: eB.VVm.SUBSCRIPTION,
    },
    [sl.C.GUILD_BOOST_CHECKOUT]: {
        implemented: !0,
        flowType: sl.C.GUILD_BOOST_CHECKOUT,
        purchaseType: eB.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: nh,
    },
    [sl.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: {
        implemented: !0,
        flowType: sl.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
        purchaseType: eB.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: ee,
    },
};
