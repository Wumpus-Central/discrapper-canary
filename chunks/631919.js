n.d(t, { Y: () => sr });
var l,
    i,
    r = n(477900),
    a = n(793574),
    s = n(75304),
    o = n(166532),
    u = n(491057),
    c = n(582128),
    d = n(786300);
let [p, m] = (0, d.A)();
function h(e) {
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
            return ("" !== t && (e.game_server_name = t), "" !== n && (e.game_server_region = n), e);
        }, [t, n]),
        m = c.useMemo(
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
    return (0, r.jsx)(p.Provider, { value: m, children: u });
}
var C = n(465657),
    f = n(71804),
    S = n(558620),
    E = n(263532),
    y = n(834730),
    A = n(854354),
    I = n(987666),
    g = n(377058),
    P = n(482419),
    v = n(38785),
    x = n(202475),
    _ = n(400612),
    T = n(463376),
    N = n(473617),
    b = n(818824),
    j = n(596034),
    R = n(669510),
    O = n(888751),
    M = n(216641),
    L = n(563020),
    k = n(158045),
    w = n(580630);
n(321073);
var D = n(17928),
    U = n(403581),
    G = n(25149),
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
    let t = (0, S.A)(),
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
    q = n(583741);
function Z(e) {
    let { fallback: t, invoicePreview: n } = e,
        { gameName: l } = m(),
        i = (0, S.A)(),
        a = W(
            V(n),
            (0, D.bG)([F.default], () => k.Ay.canUseShopDiscounts(F.default.getCurrentUser())),
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
            valueIcon: a ? U.t : void 0,
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
        (0, r.jsx)(G.Vm, { label: H.intl.string(q.default.eoXh7B), lineItems: d, currency: n.currency })
    );
}
var z = n(349085),
    $ = n(219940);
function Q(e) {
    let { planName: t, invoicePreview: n } = e,
        { gameId: l, gameName: i } = m(),
        a = V(n),
        s = (0, z.A)(l, "cover"),
        o = W(
            a,
            (0, D.bG)([F.default], () => k.Ay.canUseShopDiscounts(F.default.getCurrentUser())),
        ),
        u = null != s ? (0, r.jsx)("img", { className: $.I, src: s, alt: "" }) : void 0;
    return (0, r.jsx)(G.f7, {
        graphic: u,
        omitDefaultIconBackground: !0,
        label: H.intl.formatToPlainString(K.default["6AKZvg"], { gameName: i }),
        description: t,
        price: a.nitroPriceLabel ?? a.standardPriceLabel ?? "",
        PriceIcon: o ? U.t : void 0,
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
        } = (0, E.t4)((e) => ({
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            activeSubscription: e.activeSubscription,
        })),
        { isPlanChange: o, isPlanUpgrade: u } = m(),
        d = o && !u,
        p = c.useMemo(() => {
            if (!o || null == s || 0 === s.items.length) return;
            let [e] = s.items;
            return [{ ...e, quantity: 1, planId: t }];
        }, [o, s, t]),
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
                    setFetchCheckoutInvoicePreviewRequest: o,
                    setFetchRenewalInvoicePreviewRequest: u,
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
                    purchaseDisabled: h,
                    preventInvoiceFetch: C,
                    newItems: f,
                } = (0, N.TP)({ selectedPlanId: t, priceOptions: n }),
                { checkoutInvoiceRequestParams: S, renewalInvoiceRequestParams: y } = (0, N.jq)({
                    items: r ?? f,
                    preventFetch: C,
                    priceOptions: n,
                    trialId: l,
                    subscriptionMetadata: i,
                }),
                A = null != p ? p.id : void 0,
                I = c.useMemo(
                    () => ({
                        type: "subscription_checkout_invoice",
                        params: { ...S, subscriptionId: s ? A : void 0, renewal: a ?? !1 },
                    }),
                    [S, a, s, A],
                ),
                g = c.useMemo(() => ({ type: "subscription_renewal_invoice", params: y }), [y]);
            (c.useEffect(() => {
                o(I);
            }, [I, o]),
                c.useEffect(() => {
                    u(g);
                }, [g, u]));
            let { discriminatedInvoicePreview: P } = (0, _.KY)({
                invoiceError: d,
                subscriptionPlan: m,
                invoiceTypeDiscriminator: _.u$.SUBSCRIPTION_NEW_PURCHASE,
                shouldSetPurchasePreviewErrorFromInvoice: !0,
            });
            return { discriminatedInvoicePreview: P, purchaseDisabled: h };
        })({
            selectedPlanId: t,
            priceOptions: i,
            isTrial: !1,
            newItemsOverride: p,
            immediateInvoiceUsesRenewal: d,
            previewAsSubscriptionUpdate: o,
        }),
        { immediateDelivery: f } = (0, b.U)(),
        { discountOffer: S, premiumGroupDiscountOffer: D } = (0, T.i)(),
        U = D ?? S,
        { paymentSources: G } = (0, x.j)(),
        { paymentGatewayRestrictions: F } = (0, x.Y)(),
        B = i.paymentSourceId,
        W = (0, M.g)(G, B),
        Y = (0, k.J$)(B),
        V = null != h && "invoicePreview" in h ? h.invoicePreview : null,
        z = (0, r.jsx)(Q, { planName: n.name, invoicePreview: V }),
        $ = d
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
            paymentMethodContent: (0, r.jsx)(g.N, {
                label: H.intl.string(H.t["u+Cw58"]),
                onPaymentSourceAdd: l,
                disabled: C,
                additionalPaymentSourceDropdownProps: { paymentGatewayRestrictions: F },
            }),
            upperInlineNoticeProps: null != $ ? { directContent: $, key: "gsh-plan-change-notice" } : void 0,
        };
    if (null == h && null != a) return (0, r.jsx)(v.T_, { ...J, legalContent: null });
    if (null == h || h.type === _.u$.LOADING) return (0, r.jsx)(v.Ed, { shouldShowUnifiedHeader: !0 });
    let X = (0, r.jsx)(P.k, {
            discriminatedInvoicePreview: h,
            subscriptionPlan: n,
            subscriptionTrial: void 0,
            isPrepaidPaymentSource: Y,
        }),
        ee = h.invoicePreview,
        et =
            (U?.discount != null && (0, L.Ro)(ee, U.discount.id)) || ee.invoiceItems.some((e) => e.discounts.length > 0)
                ? X
                : (0, r.jsx)(Z, { fallback: X, invoicePreview: ee }),
        en = null;
    if (!Y && _.ME.has(h.type) && "renewalInvoicePreview" in h && null != h.renewalInvoicePreview) {
        let e = (0, O.Gj)(h.invoicePreview, h.renewalInvoicePreview, void 0, { isSubscriptionUpdate: null != s });
        en = (0, r.jsx)(R._, { ...e });
    }
    let el = "renewalInvoicePreview" in h ? h.renewalInvoicePreview : null,
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
                          currency: h.invoicePreview.currency,
                          interval: n.interval,
                          intervalCount: n.intervalCount,
                          startDate: s.currentPeriodEnd,
                      },
                  })
                : (0, r.jsx)(I.$, {
                      activeSubscription: s,
                      plan: n,
                      paymentSourceType: W,
                      discriminatedInvoicePreview: h,
                      discountOffer: U,
                      unifiedLegalType: j.I.Subscription,
                  }),
        er = d ? (0, w.$g)(0, h.invoicePreview.currency) : (0, A.kw)({ subscriptionInvoiceRecord: h.invoicePreview });
    return (0, r.jsx)(v.T_, {
        ...J,
        subscriptionDetailsContent: en,
        invoiceSummaryContent: et,
        legalContent: ei,
        invoiceTotalDueValue: er,
        invoiceTotalDueLabel: H.intl.string(q.default.R0cZsM),
    });
}
let X = (e, t) => {
        let { invoicePreview: n } = t;
        return { disablePurchase: e.disablePurchase || null == n };
    },
    ee = {
        CHECKOUT_FLOW: s.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: function (e) {
                let { subscriptionMetadataRequest: t, isPlanChange: n, isPlanUpgrade: l, onBack: i } = m(),
                    a = (0, S.A)(),
                    { selectedPlanId: s, selectedSkuId: o } = (0, E.t4)((e) => ({
                        selectedPlanId: e.selectedPlanId,
                        selectedSkuId: e.selectedSkuId,
                    })),
                    { planGroup: u } = e,
                    d = c.useMemo(() => ({ planGroup: u }), [u]),
                    p = n
                        ? l
                            ? H.intl.string(K.default.yUWVlo)
                            : H.intl.string(K.default.UGbET9)
                        : H.intl.string(H.t.YScQSF),
                    h = c.useCallback(
                        (e) => {
                            let { onReviewButtonClick: t, loading: n, disabled: l } = e;
                            return {
                                variant: "active",
                                text: p,
                                dataTestId: "purchase",
                                onClick: t,
                                loading: n,
                                disabled: l,
                            };
                        },
                        [p],
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
                    A = c.useCallback(() => {
                        (e.handleClose(), i?.());
                    }, [e, i]);
                return (0, r.jsx)(C.Y, {
                    ...e,
                    isBackButtonEligible: null != i,
                    onFooterBackClick: A,
                    subscriptionMetadata: t ?? void 0,
                    renderStepBody: y,
                    resolveInternalState: X,
                    resolveTenantReviewButtonProps: h,
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
                return (0, r.jsx)(h, {
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
    ei = n(952423),
    er = n(211083),
    ea = n(883645),
    es = n(584160),
    eo = n(169797),
    eu = n(832286),
    ec = n(958340),
    ed = n(566980),
    ep = n(489254),
    em = n(251913),
    eh = n(71393),
    eC = n(178368),
    ef = n(166403),
    eS = n(473145),
    eE = n(802790),
    ey = n(636441),
    eA = n(587491),
    eI = n(285753),
    eg = n(430993),
    eP = n(86379),
    ev = n(545075),
    ex = n(655857),
    e_ = n(534479),
    eT = n(121005),
    eN = n(174459),
    eb = n(280341),
    ej = n(295405);
let [eR, eO, eM] = (0, d.A)();
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
            onSubscribeComplete: p,
        } = e,
        [m, h] = c.useState(!0),
        C = (0, et.A)(() => Date.now()),
        f = (0, et.A)(() => (0, eS.D$)(eC.A.boostSlots).length),
        {
            activeSubscription: S,
            setQuantity: y,
            selectedSkuId: A,
        } = (0, E.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            setQuantity: e.setQuantity,
            selectedSkuId: e.selectedSkuId,
        }));
    c.useEffect(() => {
        null != A && y(t);
    }, [A]);
    let I = (0, D.bG)([ef.A], () => ef.A.hasFetchedSubscriptions()),
        g = (0, D.bG)([ej.A], () => ej.A.defaultPaymentSourceId),
        P = null != S ? S.paymentSourceId : null,
        v = (0, eb.p)(null != P ? P : I ? g : null);
    return (0, r.jsx)(eR.Provider, {
        value: {
            disablePremiumUpsell: n,
            closeGuildPerksModal: l,
            guildId: a,
            addPaymentMethodStepState: v,
            premiumSubscriptionPaymentSourceId: P,
            analyticsLocation: s,
            analyticsSourceLocation: o,
            forceDisableSubmitButton: m,
            setForceDisableSubmitButton: h,
            applicationId: u,
            intent: d,
            onSubscribeComplete: p,
            flowStartTime: C,
            existingAvailableSlotCount: f,
        },
        children: i,
    });
}
var ek = n(160946),
    ew = n(253390),
    eD = n(97352),
    eU = n(615396),
    eG = n(202541);
function eF() {
    let { activeSubscription: e, quantity: t } = (0, E.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
        })),
        n = (0, D.bG)([eD.A], () => null == e || null != eD.A.get(e.planId)),
        l = (0, ek.Y)(),
        i = (0, D.bG)([eD.A], () => (null != e ? (0, eU.c9)(e.planId) : null)),
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
    eH = n(278651);
function eW(e) {
    let { message: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eo.s3, { title: H.intl.string(H.t.q9EGps) }),
            (0, r.jsx)(eg.c, { children: (0, r.jsx)("p", { className: eH.C, children: t }) }),
        ],
    });
}
function eY(e) {
    let { handleStepChange: t } = e,
        n = (0, E.t4)((e) => e.activeSubscription),
        { guildId: l, analyticsLocation: i } = eO(),
        a = (0, eP.Hp)(),
        s = (0, eT.A)(),
        { hasFetchedRelatedSubscriptionPlans: u, displayCurrency: d } = (0, ex.Jn)(),
        { hasFetchedPremiumSubscriptionPlan: p } = eF(),
        m = null != n && null != n.renewalMutations,
        h = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
        C = !s || !u || !p || null == d || "" === d;
    return ((0, en.Ay)(() => {
        m && eN.default.track(eB.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: i, guild_id: l });
    }),
    c.useEffect(() => {
        C || a || h || m || t(o.pn.PLAN_SELECT);
    }, [C, a, h, m, t]),
    h)
        ? (0, r.jsx)(eW, { message: H.intl.string(H.t.mOWsF1) })
        : m
          ? (0, r.jsx)(eW, { message: H.intl.string(H.t.npfhh0) })
          : C
            ? (0, r.jsx)(e_.A, {})
            : a
              ? (0, r.jsx)(ev.oO, {})
              : null;
}
var eV = n(482132),
    eK = n(580360);
function eq(e) {
    let { handleClose: t } = e,
        { guildId: n, addPaymentMethodStepState: l, existingAvailableSlotCount: i } = eO(),
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
        d = (0, D.bG)([ec.A], () => (null != n ? ec.A.getGuild(n) : void 0), [n]),
        p = null != n ? eh.A.getGuild(n) : null,
        m = (0, et.A)(() => (0, eU.b2)(s)),
        h = (0, D.bG)([eD.A], () => (null != a ? (0, eU.c9)(a.planId) : null)),
        { paymentSources: C } = l,
        f = (0, M.g)(C, u),
        S = null != p ? p.name : null != d ? d.name : void 0,
        y = m && null != h && !eG.YV.has(h.id);
    return (0, r.jsx)(eV.dZ, {
        children: (0, r.jsx)(eK.W, {
            guild: p,
            guildBoostQuantity: c + i,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: f,
            fallbackGuildName: S,
            didPurchaseOnFractionalPremium: y,
            customCheckoutFlow: o,
        }),
    });
}
var eZ = n(284009),
    ez = n.n(eZ),
    e$ = n(683071),
    eQ = n(512950),
    eJ = n(821609),
    eX = n(123292),
    e0 = n(87719);
let e2 = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var e1 = n(503698),
    e3 = n.n(e1),
    e4 = n(118751),
    e7 = n(661531),
    e5 = n(408278),
    e6 = n(834040),
    e8 = n(499373),
    e9 = n(663803),
    te = n(320448),
    tt = n(297264),
    tn = n(104510),
    tl = n(866665),
    ti = n(695366),
    tr = n(289873),
    ta = n(726656),
    ts = n(688810),
    to = n(531260),
    tu = n(666646),
    tc = n(404374),
    td = n(543767),
    tp = n(881489),
    tm = n(774962),
    th = n(477421),
    tC = n(732280),
    tf = n(363476),
    tS = n(898697),
    tE = n(361567);
function ty() {
    return (0, r.jsxs)("div", {
        className: e3()(tE.dt, tE.dE),
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
function tA(e) {
    let { text: t, color: n } = e;
    return (0, r.jsxs)("div", {
        className: tE.dt,
        children: [(0, r.jsx)(U.t, { size: "md", className: tE.YW, color: n }), (0, r.jsx)("div", { children: t })],
    });
}
var tI = n(773669),
    tg = n(975571),
    tP = n(877624),
    tv = n(28863),
    tx = n(406810),
    t_ = n(549996),
    tT = n(807098),
    tN = n(637706),
    tb = n(788883),
    tj = n(7667),
    tR = n(396559);
function tO() {
    let e = (0, t_.c)(tP.C.GUILD_BOOST_CHECKOUT_BANNER),
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
                        (0, r.jsx)(tx.ClockIcon, {
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
var tM = n(155718),
    tL = n(803694),
    tk = n(270537),
    tw = n(241989),
    tD = n(874638),
    tU = n(898627),
    tG = n(818348),
    tF = n(75048);
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
    (0 !== n &&
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
        0 !== a.tax && o.push({ id: "tax", label: H.intl.string(H.t.jiRvC7), amount: a.tax, lineItemType: "tax" }));
    let { lineItems: u, currency: c } = (0, O.EA)({ id: "main-line-item", amount: t, ...s }),
        d = [...u, ...o];
    return (0, r.jsx)(tk.Vm, {
        defaultExpanded: !0,
        label: H.intl.string(q.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function tV(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: l, renewalInvoicePreview: i } = e;
    return null != n
        ? (0, r.jsx)(tU.Hc, { currentInvoice: l, renewalInvoice: i, isUpdate: t })
        : (0, r.jsx)(tU.Hc, { renewalInvoice: i });
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
            setPaymentSourceId: p,
            onPaymentSourceAdd: m,
        } = e,
        h = (function (e) {
            let {
                    guildId: t,
                    priceOptions: n,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: i,
                    newAdditionalPlans: r,
                } = e,
                s = (0, D.bG)(
                    [eh.A, ec.A],
                    () => {
                        let e = eh.A.getGuild(t);
                        return null != e ? e : ec.A.isGuildFetching(t) ? null : ec.A.getGuild(t);
                    },
                    [t],
                ),
                o = i.interval,
                u = i.intervalCount,
                d = (0, D.bG)([eD.A], () => eD.A.getForSkuAndInterval((0, k.mH)(eG.pe.GUILD), o, u));
            ez()(null != d, "Missing guildBoostingSubscriptionPlan");
            let p = (0, k.J$)(n.paymentSourceId),
                m = (0, tp.ds)(),
                h = c.useMemo(() => {
                    if (null != l) {
                        let e = r[0];
                        return (0, k.Om)(l, e.quantity, e.planId);
                    }
                    return r;
                }, [l, r]),
                { analyticsLocations: C } = (0, ts.Ay)(),
                {
                    setFetchCheckoutInvoicePreviewRequest: f,
                    setFetchRenewalInvoicePreviewRequest: S,
                    checkoutInvoicePreview: y,
                    renewalInvoicePreview: A,
                } = (0, E.t4)((e) => ({
                    setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                    setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    renewalInvoicePreview: e.renewalInvoicePreview,
                })),
                I = null != l ? l.id : void 0,
                { checkoutInvoicePreviewRequest: g, renewalInvoicePreviewRequest: P } = c.useMemo(() => {
                    let e = {
                        subscriptionId: I,
                        items: h,
                        paymentSourceId: n.paymentSourceId,
                        currency: void 0,
                        analyticsLocations: C,
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
                }, [I, h, n.paymentSourceId, C]);
            return (
                c.useEffect(() => {
                    (f(g), S(P));
                }, [f, S, g, P]),
                {
                    guild: s ?? null,
                    guildBoostingSubscriptionPlan: d,
                    isPrepaid: p,
                    isReverseTrial: m,
                    checkoutInvoicePreview: y,
                    renewalInvoicePreview: A,
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
            isSubscriptionUpdate: C,
            guild: f,
            isPrepaid: S,
            isReverseTrial: y,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: I,
        } = h,
        P = (0, tL.A)({ location: "GuildBoostReview", message: H.intl.string(q.default["tK8A/8"]) });
    if (null == A || null == I || null == f) return (0, r.jsx)(v.Ed, { shouldShowUnifiedHeader: !0 });
    let x = (0, r.jsx)(tV, {
            isSubscriptionUpdate: C,
            premiumSubscription: i,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: I,
        }),
        _ = (0, r.jsx)(g.n, {
            setPaymentSourceId: p,
            paymentSourceId: d,
            location: "GuildBoostReview",
            label: H.intl.string(H.t["u+Cw58"]),
            onPaymentSourceAdd: m,
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
                paymentSourceType: (0, M.g)(r, a),
                premiumSubscriptionPlan: n,
                renewalPrice: l.subtotal,
                totalDue: i.total,
                currency: i.currency,
                startDate: (0, tU.de)({ isSubscriptionUpdate: t, currentInvoice: i, renewalInvoice: l }),
            };
        })({
            isSubscriptionUpdate: C,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: I,
            checkoutInvoicePreview: A,
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
            function p(e) {
                return (0, tD.Z)(l.invoiceItems).find((t) => eG.pW.has(t.subscriptionPlanId) && e(t));
            }
            let m = p((e) => e.amount >= 0);
            ez()(null != m, "Missing guild boosting invoice item");
            let h = p((e) => e.amount < 0),
                C = null != h ? m.quantity - h.quantity : m.quantity,
                f = l.invoiceItems.filter((e) => (0, k.xq)(e.subscriptionPlanId)),
                S = f.reduce((e, t) => e + t.amount, 0),
                E = (0, td.sL)(m) * C,
                y = (0, w.$g)(E, l.currency),
                A = (0, w.CE)(y, c, d),
                I = (0, w.$g)(l.total, l.currency) + (l.currency !== tG.Yr.USD ? "*" : ""),
                g = l.subtotal - E - S,
                P = m.discounts.map((e) => {
                    let t = e.amount / m.quantity;
                    return { ...e, amount: t * C };
                }),
                v = P.find((e) => e.type === tM.iS.SUBSCRIPTION_PLAN),
                x = P.find((e) => e.type === tM.iS.ENTITLEMENT),
                _ = m.subscriptionPlanPrice * C;
            return {
                addedQuantity: C,
                guildBoostingSubscriptionPlan: s,
                isPrepaid: o,
                isReverseTrial: u,
                formattedGuildBoostPrice: y,
                formattedGuildBoostRate: A,
                formattedOriginalAmountGuildBoostRate: (0, w.CE)((0, w.$g)(_, l.currency), c, d),
                formattedTotal: I,
                basePlanAdjustment: S,
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
            premiumSubscription: i,
            premiumSubscriptionPlan: o,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: I,
            priceOptions: l,
            reviewState: h,
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
                PriceIcon: c ? U.t : void 0,
                priceTooltip: c ? H.intl.string(q.default.YUNJJa) : void 0,
                priceSubText: c ? o : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            f,
            b,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: l } = e;
                return !t && n && null != l ? { type: "reverseTrial", text: tH(l.currentPeriodEnd) } : null;
            })({ isPrepaid: S, isReverseTrial: y, premiumSubscription: i }),
        ),
        O = (0, r.jsx)(tw.f7, { ...R });
    return (0, r.jsx)(v.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: P,
        purchaseItemContent: O,
        subscriptionDetailsContent: x,
        paymentMethodContent: _,
        invoiceSummaryContent: j,
        legalContent: N,
        invoiceTotalDueValue: b.formattedTotal,
        invoiceTotalDueLabel: H.intl.string(q.default.R0cZsM),
    });
}
n(26279);
var tq = n(703176);
function tZ(e) {
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
        (o(e), tZ(e) || n(e));
    }
    return (0, r.jsxs)("div", {
        className: tq.U$,
        children: [
            (0, r.jsx)(e5.K, {
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
                className: tq.WJ,
                children: (0, r.jsx)("input", {
                    className: tq.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${s}`,
                    onChange: (e) =>
                        (function (e) {
                            if (tZ(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= l) return void d(l);
                                if (t >= i) return void d(i);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: function () {
                        tZ(s) && o(t);
                    },
                }),
            }),
            (0, r.jsx)(e5.K, {
                variant: "secondary",
                size: "md",
                icon: e8.T,
                onClick: () => {
                    u && !(s >= i) && d(s + 1);
                },
                "aria-label": H.intl.string(H.t.w8Sc4B),
                disabled: !u || s >= i,
            }),
        ],
    });
}
function t$(e) {
    let { message: t } = e;
    return (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", className: tq.jH, children: t });
}
function tQ(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: tq.Vk,
        children: [
            (0, r.jsx)("div", {
                className: tq.D0,
                children: (0, r.jsx)(U.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: tq.ue,
                    color: tc.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, r.jsx)("div", { className: tq.yP, children: t }),
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
        fractionalBanner: p,
        existingSlotNotice: m,
        discountCallout: h,
        refreshDiscountCallout: C,
        promoBanner: f,
        legacyPricingNotes: S,
        refreshPricingNotes: E,
    } = e;
    return (0, r.jsxs)("div", {
        children: [
            p,
            u,
            m,
            (0, r.jsxs)("div", {
                className: tF.mP,
                children: [
                    (0, r.jsxs)("div", {
                        className: tF.E6,
                        children: [
                            (0, r.jsx)(e9.l, {
                                value: n,
                                onChange: (e) => l(e),
                                className: tF.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)("div", { className: tF.$0, children: i }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: e3()(tF.QK, { [tF.S]: t }), children: a }),
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
                        className: e3()(tF.__invalid_planSelectorSubtotalPrice, { [tF.S]: t }),
                        children: s,
                    }),
                ],
            }),
            S.map((e, t) => (0, r.jsx)(c.Fragment, { children: e }, t)),
            h,
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
        refreshDescriptionContent: p,
        fractionalBanner: m,
        existingSlotNotice: h,
        discountCallout: C,
        refreshDiscountCallout: f,
        promoBanner: S,
        legacyPricingNotes: E,
        refreshPricingNotes: A,
    } = e;
    return (0, r.jsxs)("div", {
        className: tq.xY,
        children: [
            m,
            (0, r.jsxs)("div", {
                className: tq.K3,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-md/medium",
                        className: tq.bk,
                        children: H.intl.string(H.t["r+SebU"]),
                    }),
                    (0, r.jsx)(te._, { className: tq.bN, color: "currentColor", size: "xs" }),
                    (0, r.jsx)(y.E, { variant: "text-md/medium", className: tq.kX, children: i }),
                ],
            }),
            p,
            h,
            (0, r.jsxs)("div", {
                className: tq.fh,
                children: [
                    (0, r.jsxs)("div", {
                        className: tq.fX,
                        children: [
                            (0, r.jsx)(tz, {
                                value: n,
                                onChange: (e) => l(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)(y.E, { variant: "text-md/medium", className: tq.ny, children: a }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: e3()(tq.El, { [tF.S]: t }), children: s }),
                ],
            }),
            (0, r.jsxs)("div", { className: tq.pw, children: [S, f] }),
            (0, r.jsxs)("div", {
                className: tq.fh,
                children: [
                    (0, r.jsx)(tt.D, {
                        variant: "heading-lg/semibold",
                        className: tq.O3,
                        children: H.intl.string(H.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", { className: e3()(tq.BU, { [tF.S]: t }), children: u }),
                ],
            }),
            A.map((e, t) => (0, r.jsx)(c.Fragment, { children: e }, t)),
        ],
    });
}
function t0(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: l } = e;
    return (0, r.jsxs)("div", {
        className: tF.Mv,
        children: [
            (0, r.jsx)(tn._, { className: tF.T5, color: e7.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, r.jsxs)("div", {
                children: [
                    H.intl.format(H.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != l
                        ? (0, r.jsx)(tl.m, {
                              text: H.intl.formatToPlainString(H.t.SFpsCH, {
                                  canceledCount: n,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, r.jsx)(ti.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: tF.Y5,
                                  color: e7.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function t2(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: l,
            setForceDisableSubmitButton: i,
            premiumSubscription: s,
            onClickPremiumSubscriptionLink: o,
            existingAvailableSlots: u = [],
            priceOptions: d,
            isRefreshEnabled: p = !1,
            showRefreshSubtotalRate: m = !1,
            refreshNextStepLabel: h = H.intl.string(H.t.QBnNHq),
        } = e,
        C = (function (e) {
            let t,
                n,
                {
                    premiumSubscriptionPlan: l,
                    numGuildBoosts: i,
                    setForceDisableSubmitButton: s,
                    premiumSubscription: o,
                    onClickPremiumSubscriptionLink: u,
                    existingAvailableSlots: d,
                    priceOptions: p,
                    showRefreshSubtotalRate: m,
                } = e,
                h =
                    ((t = (0, D.bG)([ef.A], () => ef.A.getPremiumTypeSubscription())),
                    (0, D.bG)([ej.A], () =>
                        t?.paymentSourceId != null ? ej.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                C = l.interval,
                f = l.intervalCount,
                S = (0, D.bG)([eD.A], () => eD.A.getForSkuAndInterval((0, k.mH)(eG.pe.GUILD), C, f)),
                E = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
                A = (0, to.A)({ forceFetch: !1 });
            ez()(null != S, "Missing guildBoostingSubscriptionPlan");
            let I = [{ planId: S.id, quantity: 1 }],
                g = o?.items.find(
                    (e) => e.planId === eG.gD.PREMIUM_MONTH_TIER_2 || e.planId === eG.gD.PREMIUM_YEAR_TIER_2,
                );
            null != g && I.push(g);
            let P = o?.items.find(
                    (e) => e.planId === eG.gD.PREMIUM_MONTH_GUILD || e.planId === eG.gD.PREMIUM_YEAR_GUILD,
                ),
                v = null == h || !eG.uJ.has(h) || null == P,
                { analyticsLocations: x } = (0, ts.Ay)(),
                [_, T] = (0, td.YV)({
                    subscriptionId: o?.id,
                    items: I,
                    renewal: !0,
                    paymentSourceId: o?.paymentSourceId,
                    currency: p.currency,
                    preventFetch: v,
                    analyticsLocations: x,
                    analyticsLocation: a.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, tu.T)(_, T);
            let N = !v && null == _ && null == T;
            c.useLayoutEffect(() => {
                s(N);
            }, [N, s]);
            let b = (0, tC.V)()?.subscriptionTrial?.skuId === eG.pe.TIER_2,
                j = k.Ay.hasBoostDiscount(E),
                R = j && null != o && k.Ay.isPremiumAtLeast(k.Ay.getPremiumType(o.planId), eG.PremiumTypes.TIER_1),
                O = _?.findInvoiceItemByPlanId(S.id),
                M =
                    null != O
                        ? { amount: O.amount, tax: 0, taxInclusive: !0, currency: _.currency }
                        : k.Ay.getPrice(S.id, j, !1, p),
                L = i * M.amount,
                U = (0, tp.ds)() && j && null != o,
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
                    fractionalPremiumState: A.fractionalState,
                    isReverseTrial: U,
                    hasDiscountUpsell: R,
                    withTrialOfferCopyVariant: b,
                });
            "discount" === G.upsellVariant
                ? (ez()(null != o, "Missing premiumSubscription for discount upsell variant"),
                  (n = H.intl.format(H.t.hf6YOY, { planName: k.Ay.getTierDisplayNameByPlanId(o.planId) })))
                : (n = H.intl.format("upsell_trial" === G.upsellVariant ? H.t.ba1L74 : H.t.fkffDT, {
                      onPremiumSubscriptionClick: u,
                      discountPercentage: (0, e4.l9)(tI.default.locale, eG.oX / 100),
                      freeSubscriptionCount: eG.M4,
                  }));
            let B = d.filter((e) => (0, eS.I5)(e)).length,
                W = (0, k.J$)(p.paymentSourceId),
                { ipCountryCode: Y } = (0, th.A)(),
                V = "HR" === Y && M.currency === tG.Yr.EUR,
                K =
                    U && null != o
                        ? (0, r.jsx)(tW, { text: tH(o.currentPeriodEnd) })
                        : (0, r.jsx)("div", { className: e3()(tF.hA, tF.G3), children: H.intl.string(H.t.jNY1FO) }),
                q =
                    U && null != o
                        ? (0, r.jsx)(tW, { text: tH(o.currentPeriodEnd), className: tF.jk })
                        : (0, r.jsx)(y.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: tq._X,
                              children: H.intl.string(H.t.jNY1FO),
                          }),
                Z = G.showExistingSlotNotice
                    ? (0, r.jsx)(t0, { existingAvailableSlots: d, canceledCount: B, premiumSubscription: o })
                    : null,
                z = G.showFractionalPremiumBanner ? (0, r.jsx)(tS.vi, { fractionalPremiumInfo: A }) : null,
                $ = W
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === eG.WT.YEAR
                              ? H.intl.string(H.t.YDpAzZ)
                              : t === eG.WT.MONTH && 1 === n
                                ? H.intl.string(H.t["6ZR3By"])
                                : null;
                      })({ intervalType: C, intervalCount: f }) ?? H.intl.string(H.t.K9Bmze))
                    : H.intl.string(H.t.K9Bmze),
                Q = N
                    ? (0, r.jsx)(tr.y, {})
                    : W
                      ? (0, w.$g)(M.amount, M.currency)
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
                        })({ intervalType: C, intervalCount: f, amount: M.amount, currency: M.currency }),
                J = N
                    ? (0, r.jsx)(tr.y, {})
                    : (0, r.jsx)(tf.A, {
                          price: L,
                          currency: M.currency,
                          intervalType: C,
                          intervalCount: f,
                          isPrepaidPaymentSource: W,
                      }),
                X = N
                    ? (0, r.jsx)(tr.y, {})
                    : m && !W
                      ? (0, w.CE)((0, w.$g)(L, M.currency), C, f)
                      : (0, w.$g)(L, M.currency),
                ee = [],
                et = [];
            if (V) {
                let e = (0, r.jsx)(
                    ta.A,
                    {
                        message: H.intl.formatToPlainString(H.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, w.$g)(7.5345 * L, tG.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                (ee.push(e), et.push(e));
            }
            let en = (0, tm.p)("GuildBoostPurchaseModalPlanSelect")
                ? H.intl.string(H.t["+nPHMl"])
                : H.intl.format(H.t.Om31w8, { documentationLink: tg.A.getArticleURL(eB.MVz.LOCALIZED_PRICING) });
            (ee.push((0, r.jsx)(ta.A, { message: en }, "localized-pricing")),
                et.push((0, r.jsx)(t$, { message: en }, "localized-pricing")));
            let el =
                    "reverse_trial" === G.upsellVariant
                        ? (0, r.jsx)(ty, {})
                        : (0, r.jsx)(tA, { text: n, color: tc.k0.PREMIUM_TIER_2 }),
                ei = (0, r.jsx)(tO, {});
            return {
                isLoading: N,
                planLabel: $,
                planPriceContent: Q,
                subtotalContent: J,
                refreshSubtotalContent: X,
                legacyDescriptionContent: K,
                refreshDescriptionContent: q,
                existingSlotNotice: Z,
                fractionalBanner: z,
                legacyPricingNotes: ee,
                refreshPricingNotes: et,
                discountCallout: el,
                refreshDiscountCallout:
                    "reverse_trial" === G.upsellVariant ? (0, r.jsx)(ty, {}) : (0, r.jsx)(tQ, { text: n }),
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
            showRefreshSubtotalRate: m,
        });
    return (0, r.jsx)(p ? tX : tJ, {
        isLoading: C.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: l,
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
        promoBanner: C.promoBanner,
        legacyPricingNotes: C.legacyPricingNotes,
        refreshPricingNotes: C.refreshPricingNotes,
        refreshNextStepLabel: h,
    });
}
let t1 = eG.gD.NONE_MONTH,
    t3 = [eG.pe.GUILD];
function t4(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            guildId: l,
            closeGuildPerksModal: i,
            disablePremiumUpsell: a,
            setForceDisableSubmitButton: s,
            forceDisableSubmitButton: u,
            addPaymentMethodStepState: c,
            premiumSubscriptionPaymentSourceId: d,
        } = eO(),
        {
            paymentSourceId: p,
            activeSubscription: m,
            quantity: h,
            setQuantity: C,
        } = (0, E.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
            setQuantity: e.setQuantity,
        })),
        { displayCurrency: S } = (0, ex.Jn)(),
        y = null != d || Object.keys(c.paymentSources).length > 0,
        A = (0, o.Ir)(y ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS),
        I = (0, et.A)(() => (0, eS.D$)(eC.A.boostSlots)),
        g = (0, ep.n)("GuildBoostPurchaseModal"),
        P = e2.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        v = g && P,
        x = (0, D.bG)([ec.A], () => (null != l ? ec.A.getGuild(l) : void 0), [l]),
        _ = null != l ? eh.A.getGuild(l) : null,
        T = null == x && null == _,
        N = null != m && m.isPurchasedExternally,
        b = Object.keys(c.paymentSources).length > 0,
        j = (0, D.bG)([eD.A], () => (null != m ? (0, eU.c9)(m.planId) : null)),
        R = (0, D.bG)([eD.A], () => (null == j ? eD.A.get(t1) : j));
    if (null == l) throw new f.v({ message: "Missing guildId" });
    ez()(null != R, "Missing nextPremiumSubscriptionPlan");
    let O = (0, r.jsx)(t2, {
        premiumSubscriptionPlan: R,
        numGuildBoosts: h,
        setNumGuildBoosts: C,
        setForceDisableSubmitButton: s,
        premiumSubscription: m,
        existingAvailableSlots: I,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            (t(), null != i && i(), (0, e0.e)());
        },
        priceOptions:
            null != p ? { paymentSourceId: p, currency: null != S ? S : void 0 } : { currency: null != S ? S : void 0 },
        isRefreshEnabled: g,
        showRefreshSubtotalRate: v,
        refreshNextStepLabel: A,
    });
    return (
        N && null != m && null != m.paymentGateway
            ? (O = (0, r.jsxs)("div", {
                  className: eH.xK,
                  children: [
                      (0, r.jsx)(e$.w, {
                          type: "critical",
                          children: H.intl.format(H.t["/m3Y3s"], { paymentGatewayName: tG.qm[m.paymentGateway] }),
                      }),
                      O,
                  ],
              }))
            : null != l &&
              !ec.A.isGuildFetching(l) &&
              T &&
              (O = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(eQ.p, {
                          messageType: eQ.Y.ERROR,
                          className: eH.MR,
                          children: H.intl.string(H.t.eAn6z2),
                      }),
                      O,
                  ],
              })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eV.dZ, { children: O }),
                (0, r.jsx)(eV.UX, {
                    children: (0, r.jsx)(eK._, {
                        currentStep: o.pn.PLAN_SELECT,
                        isRefreshEnabled: g,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: g
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
                                forceDisableSubmitButton: u,
                                numGuildBoostsToPurchase: h,
                                isDisabledBecauseExternalSubscription: N,
                                isMissingGuildInformation: T,
                            }),
                            onClick: function () {
                                a || (null != j && j.premiumSubscriptionType === eG.PremiumTypes.TIER_2)
                                    ? n(null != d || b ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS)
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
    t5 = n(935462),
    t6 = n(460905),
    t8 = n(183623),
    t9 = n(95635),
    ne = n(331322),
    nt = n(75678),
    nn = n(10392),
    nl = n(82498),
    ni = n(219882),
    nr = n(811611),
    na = n(392634),
    ns = n(73359);
function no(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, D.bG)([tI.default], () => tI.default.locale);
    return (0, r.jsxs)("div", {
        className: ns.mH,
        children: [
            (0, r.jsx)(na.A, {
                icon: tn._,
                iconClassName: ns.pl,
                description: H.intl.formatToPlainString(H.t.sQBgs2, { numFreeGuildSubscriptions: eG.M4 }),
                color: e7.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, r.jsx)(na.A, {
                icon: tn._,
                iconClassName: ns.pl,
                description: H.intl.formatToPlainString(H.t["1A6vXi"], { percent: (0, e4.l9)(n, eG.oX / 100) }),
                color: e7.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, r.jsx)(na.A, { icon: t6.n, iconClassName: ns.zO, description: H.intl.string(H.t.Z9b2x2) }) : null,
            (0, r.jsx)(na.A, { icon: t8.F, iconClassName: ns.Kg, description: H.intl.string(H.t["8dqG5E"]) }),
            (0, r.jsx)(na.A, {
                icon: t9.UploadIcon,
                iconClassName: ns.$z,
                description: (0, ni.M6)({
                    legacyCopy: H.intl.string(H.t.cBorIy),
                    rolloutCopy: H.intl.formatToPlainString(H.t["3MdBF7"], {
                        maxFileSize: (0, k.EJ)(eG.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
            }),
        ],
    });
}
function nu(e) {
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
        { analyticsLocations: p, sourceAnalyticsLocations: m } = (0, ts.Ay)(a.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        h = null == t || null == t.premiumSubscriptionType,
        C = k.Ay.getPrice(eG.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        f = (0, w.$g)(C.amount, C.currency),
        S = (0, tC.V)(),
        E = S?.trialId,
        A = S?.subscriptionTrial?.skuId === eG.pe.TIER_2;
    return (
        c.useEffect(() => {
            (eN.default.track(eB.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eG.e.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: m,
            }),
                (0, nn.sq)(eB.U7l.PREMIUM_UPSELL_VIEWED, m, () => (0, nl.uq)(eG.e.GUILD_PREMIUM_UPSELL_MODAL)));
        }, [m]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(t5.s_, { "data-migration-pending": !0, onClick: n, className: ns.b }),
                (0, r.jsxs)(eg.c, {
                    children: [
                        A && (0, r.jsx)(nr.Vq, { className: ns.Fg }),
                        (0, r.jsx)("div", { className: e3()(ns.Tn, { [ns.NH]: A }) }),
                        (0, r.jsx)(y.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children:
                                null != E
                                    ? H.intl.string(H.t.AoSzEr)
                                    : H.intl.format(H.t["7vePZb"], { monthlyPrice: f }),
                        }),
                        (0, r.jsx)(no, { shouldUpsellFromNoneTier: h }),
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
                                        text: null != E ? H.intl.string(H.t["Gd/XHF"]) : H.intl.string(H.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            (n(),
                                                (0, nt.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eG.pe.TIER_2,
                                                    analyticsLocations: p,
                                                    analyticsObject: {
                                                        ...o,
                                                        section: eB.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: u,
                                                    onSubscriptionConfirmation: s,
                                                    trialId: E,
                                                }));
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
function nc(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: l } = e,
        { addPaymentMethodStepState: i, analyticsLocation: a, analyticsSourceLocation: s } = eO(),
        { paymentSourceId: u, activeSubscription: d } = (0, E.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: p } = (0, ex.Jn)(),
        m = (0, D.bG)([eD.A], () => (null != d ? (0, eU.c9)(d.planId) : null)),
        h = (0, D.bG)([eD.A], () => (null == m ? eD.A.get(t1) : m));
    (ez()(null != h, "Missing nextPremiumSubscriptionPlan"), ez()(null != p && "" !== p, "Currency not defined"));
    let { paymentSources: C } = i,
        f = null != d ? d.paymentSourceId : null,
        S = Object.keys(C).length > 0,
        y = c.useCallback(() => n(o.pn.PLAN_SELECT), [n]),
        A = c.useCallback(() => n(null != f || S ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS), [n, f, S]);
    return (0, r.jsx)(nu, {
        premiumSubscriptionPlan: h,
        analyticsLocation: a,
        analyticsSourceLocation: s,
        onClose: t,
        onBack: y,
        onSkip: A,
        onSubscriptionConfirmation: l,
        priceOptions: null != u ? { paymentSourceId: u, currency: p } : { currency: p },
    });
}
var nd = n(277984),
    np = n(855104),
    nm = n(820739);
async function nh(e, t) {
    await (0, nm.CD)();
    let n = (0, eS.D$)(eC.A.boostSlots);
    return (0, nm.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function nC() {
    let { guildId: e, intent: t, onSubscribeComplete: n, addPaymentMethodStepState: l } = eO(),
        { setIsSubmittingCurrentStep: i } = l,
        { paymentAuthenticationState: r } = (0, er.o)(),
        { setPurchaseState: a, setPurchaseError: s } = (0, E.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
        })),
        o = c.useRef(!1);
    return (
        c.useEffect(() => {
            if (r === em.oc.PENDING) {
                o.current = !0;
                return;
            }
            async function l() {
                if (null != e)
                    try {
                        (await nh(e, null != t), n?.());
                    } catch (e) {
                        (a(ed.h.FAIL), s(e));
                    }
            }
            o.current && ((o.current = !1), i(!1), r === em.oc.NONE && null != e && l());
        }, [r, e, t, n, i, a, s]),
        null
    );
}
let nf = [
        { key: o.pn.PLAN_SELECT, renderStep: (e) => (0, r.jsx)(t4, { ...e }), options: { renderHeader: !0 } },
        {
            key: o.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, r.jsx)(nc, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    nS = {
        CHECKOUT_FLOW: el.C.GUILD_BOOST_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eY, { ...e }) },
        STEPS_BEFORE_CHECKOUT: nf,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: function (e) {
                let { handleStepChange: t, handleClose: n, analyticsData: l } = e,
                    { guildId: i, addPaymentMethodStepState: a, premiumSubscriptionPaymentSourceId: s } = eO(),
                    {
                        activeSubscription: u,
                        paymentSourceId: d,
                        setPaymentSourceId: p,
                    } = (0, E.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: m } = (0, ex.Jn)();
                if (null == i) throw new f.v({ message: "Missing guildId" });
                ez()(null != m && "" !== m, "Currency not defined");
                let { paymentSources: h } = a,
                    { newAdditionalPlans: C, currentPremiumSubscriptionPlan: S } = eF(),
                    y = (0, D.bG)([eD.A], () => (null == S ? eD.A.get(t1) : S));
                ez()(null != y, "Missing nextPremiumSubscriptionPlan");
                let A = null != d ? { paymentSourceId: d, currency: m } : { currency: m },
                    I = (function (e) {
                        let { handleStepChange: t, handleClose: n, analyticsData: l } = e,
                            {
                                guildId: i,
                                addPaymentMethodStepState: r,
                                premiumSubscriptionPaymentSourceId: a,
                                analyticsLocation: s,
                                analyticsSourceLocation: u,
                                flowStartTime: d,
                                applicationId: p,
                                intent: m,
                                onSubscribeComplete: h,
                            } = eO(),
                            { displayCurrency: C } = (0, ex.Jn)(),
                            { paymentSources: f, setIsSubmittingCurrentStep: S, isSubmittingCurrentStep: y } = r,
                            {
                                activeSubscription: A,
                                paymentSourceId: I,
                                setPurchaseError: g,
                                hasAcceptedTerms: P,
                                setPurchaseState: v,
                                quantity: x,
                                checkoutPaymentSources: _,
                                invoicePreview: T,
                            } = (0, E.t4)((e) => ({
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
                                message: H.intl.string(q.default["tK8A/8"]),
                            }),
                            O = (0, tL.iB)({
                                checkoutPaymentSources: _,
                                paymentSourceId: I,
                                location: "GuildBoostPurchaseModal",
                            }),
                            L = (0, np.gN)(),
                            w = c.useMemo(
                                () => ({
                                    ...l,
                                    location: s,
                                    source: u,
                                    subscription_plan_id: j,
                                    sku_id: (0, k.mH)(eG.pe.GUILD),
                                    quantity: x,
                                    virtual_currency_balance: L,
                                }),
                                [l, s, u, x, j, L],
                            ),
                            D = c.useMemo(() => {
                                let { guild_id: e, ...t } = w;
                                return t;
                            }, [w]),
                            U = null != I ? { paymentSourceId: I, currency: C ?? void 0 } : { currency: C ?? void 0 };
                        async function G() {
                            ez()(null != N, "Missing newAdditionalPlans");
                            let e = (0, M.W)(f, I);
                            g(null);
                            let r = !1;
                            try {
                                (v(ed.h.PURCHASING),
                                    S(!0),
                                    ez()(null != I, "Missing paymentSourceId"),
                                    ez()(null != T, "Missing invoicePreview"));
                                let s = { amount: T.total, currency: T.currency },
                                    u = U.currency ?? T.currency,
                                    c = (0, k.U8)(A, N, u.toLowerCase(), U.paymentSourceId);
                                if (
                                    (eN.default.track(eB.HAw.PAYMENT_FLOW_COMPLETED, {
                                        ...w,
                                        duration_ms: Date.now() - d,
                                        guild_id: i ?? void 0,
                                        application_id: p,
                                    }),
                                    null == A || null == b)
                                ) {
                                    ez()(null != e, "Missing paymentSource");
                                    let t = await (0, nd.Ky)({
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
                                    let t = { items: (0, k.aE)(A, N) };
                                    ((t.currency = A.currency ?? u),
                                        (t.paymentSource = null != a ? f[a] : void 0),
                                        null == t.paymentSource &&
                                            (ez()(null != e, "Missing paymentSource"),
                                            (t.paymentSource = e),
                                            (t.currency = u)));
                                    let n = await (0, nd.nV)(A, t, s, c, l.location_stack);
                                    if (n.redirectConfirmation) {
                                        r = !0;
                                        return;
                                    }
                                    if (n.pendingCustomerAction) return;
                                }
                                (null == m && t(o.pn.CONFIRM),
                                    v(ed.h.COMPLETED),
                                    null != i && (await nh(i, null != m)),
                                    null != m && n(),
                                    h?.());
                            } catch (t) {
                                (v(ed.h.FAIL),
                                    g(t),
                                    eN.default.track(eB.HAw.PAYMENT_FLOW_FAILED, {
                                        ...D,
                                        payment_error_code: t?.code,
                                        payment_gateway:
                                            null != e
                                                ? e.type === eB.hes.CARD
                                                    ? eB.kM_.STRIPE
                                                    : eB.kM_.BRAINTREE
                                                : null,
                                        payment_source_id: I,
                                        duration_ms: Date.now() - d,
                                    }));
                            } finally {
                                r || S(!1);
                            }
                        }
                        return {
                            text: H.intl.string(H.t.eUEeCt),
                            loading: y,
                            disabled: null == I || !P || null != R || O,
                            onClick: G,
                            variant: "active",
                        };
                    })({ handleStepChange: t, handleClose: n, analyticsData: l }),
                    g = c.useCallback(() => {
                        (t(o.pn.ADD_PAYMENT_STEPS), p(null));
                    }, [t, p]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(eV.dZ, {
                            children: (0, r.jsx)(tK, {
                                guildId: i,
                                paymentSources: h,
                                priceOptions: A,
                                currentPremiumSubscription: u,
                                premiumSubscriptionPaymentSourceId: s,
                                premiumSubscriptionPlan: y,
                                newAdditionalPlans: C,
                                paymentSourceId: d,
                                setPaymentSourceId: p,
                                onPaymentSourceAdd: g,
                            }),
                        }),
                        (0, r.jsx)(eV.UX, {
                            children: (0, r.jsx)(eo.lo, {
                                onBackClick: () => t(o.pn.PLAN_SELECT),
                                primaryButtonProps: I,
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
                        loadId: p,
                        children: m,
                    } = e,
                    h = (0, D.bG)([ef.A], () => ef.A.getPremiumTypeSubscription()),
                    C = (0, et.A)(() => n - (0, eS.D$)(eC.A.boostSlots).length);
                return (
                    (0, en.Ay)(() => {
                        null != ec.A.getGuild(t) || ec.A.isGuildFetching(t) || (0, eu.y)(t);
                    }),
                    (0, r.jsx)(ei.M, {
                        activeSubscription: h,
                        stepConfigs: d,
                        skuIDs: t3,
                        loadId: p,
                        unifiedCheckoutFlow: el.C.GUILD_BOOST_CHECKOUT,
                        children: (0, r.jsxs)(eL, {
                            initialNumGuildBoostsToPurchase: C,
                            disablePremiumUpsell: i,
                            closeGuildPerksModal: s,
                            guildId: t,
                            analyticsLocation: o,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: l,
                            onSubscribeComplete: a,
                            children: [(0, r.jsx)(nC, {}), m],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { guildId: l, existingAvailableSlotCount: i } = eO(),
                    a = (0, ea.s2)(),
                    { purchaseState: s, quantity: u } = (0, E.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        quantity: e.quantity,
                    })),
                    d = (0, ep.n)("GuildBoostUnifiedCheckout"),
                    p = d && (a === o.pn.REVIEW || a === o.pn.CONFIRM),
                    m = (0, eI.A)(p),
                    h = c.useMemo(() => ({ quantity: u }), [u]);
                return d && a === o.pn.CONFIRM
                    ? (0, r.jsx)(eA.A, {
                          mediaUrls: m.mediaUrls,
                          isSuccess: m.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(s === ed.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, r.jsx)(ey.A, {
                                  transitionState: t.transitionState,
                                  guild: eh.A.getGuild(l),
                                  guildBoostQuantity: u + i,
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
            tenantAnalyticsLocation: a.A.GUILD_BOOST_PURCHASE_MODAL,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                l = (0, ep.n)("GuildBoostUnifiedCheckout"),
                i = (0, E.t4)((e) => e.purchaseState),
                a = (0, S.A)();
            if (n === o.pn.PREMIUM_UPSELL) return null;
            if (n === o.pn.REVIEW) {
                let e = null != a ? a.skuId : null;
                return (0, r.jsx)(eo.s3, { ...(0, es.u)({ skuId: e, step: n }) });
            }
            return l
                ? (0, r.jsx)(eo.s3, { title: (0, es.u)({ skuId: null, step: n }).title })
                : (0, r.jsx)(eE.A, { onClose: () => t(i === ed.h.COMPLETED), currentStep: n, purchaseState: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eq, { ...e }), options: { renderHeader: !0 } },
    };
var nE = n(773882),
    ny = n(192308),
    nA = n(871109);
let nI = c.createContext(void 0);
function ng() {
    let e = c.useContext(nI);
    return (ez()(null != e, "GuildProductPurchaseContext not found"), e);
}
function nP(e) {
    let { children: t, skuId: n, ...l } = e,
        i = (0, D.bG)([nA.A], () => nA.A.getGuildProduct(n));
    return (
        ez()(null != i, "guildProductListing cannot be null"),
        (0, r.jsx)(nI.Provider, { value: { guildProductListing: i, ...l }, children: t })
    );
}
function nv(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: i } = ng(),
        a = (0, E.t4)((e) => e.checkoutInvoicePreview);
    return (
        (0, en.Ay)(() => {
            var e;
            (ez()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: i, guildProductListingId: l.id, invoicePreview: a }),
                (0, ny.openModalLazy)(async () => {
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
                t());
        }),
        null
    );
}
var nx = n(939249),
    n_ = n(789645),
    nT = n(303612),
    nN = n(171036),
    nb = n(200791);
function nj(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(nx.D, {
        className: e3()(nN.cG, t),
        onClick: n,
        children: (0, r.jsx)(n_.P, { size: "xs", color: "currentColor", className: nN.yP }),
    });
}
function nR(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, r.jsxs)(t5.rQ, {
        className: e3()(nN.wx, nb.G, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(nT.A, { className: nN.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(nj, { className: nN.b, onClose: n }),
        ],
    });
}
var nO = n(621328);
let nM = {
    CHECKOUT_FLOW: s.C.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [o.pn.REVIEW]: nE.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, r.jsx)(nP, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: a.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = ng();
        return n === o.pn.CONFIRM
            ? null
            : (0, r.jsx)(nR, { guildProductListing: l, className: nO.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(nv, { ...e }) },
};
var nL = n(20742),
    nk = n(684477),
    nw = n(951305),
    nD = n(1076),
    nU = n(776310),
    nG = n(228366),
    nF = n(213530),
    nB = n(966971),
    nH = n(758836),
    nW = n(395797);
let nY = { sliderBodyClassName: nW.Bz };
function nV(e) {
    let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nU.Fk, { ref: n, className: nW.Lb, environment: t.current }),
            (0, r.jsx)(nF.K, { options: l, className: e3()(nW.Oh, { [nW.R]: !i }) }),
        ],
    });
}
var nK = n(702841),
    nq = n(775602),
    nZ = n(31823),
    nz = n(427675),
    n$ = n(590180),
    nQ = n(953150),
    nJ = n(524246),
    nX = n(14368),
    n0 = n(61750),
    n2 = n(614662),
    n1 = n(901930);
function n3(e) {
    let {
            handleClose: t,
            analyticsLocations: n,
            collectedModalOverrideTitle: l,
            collectedModalOverrideDescription: i,
            collectedModalGradientColor: a,
        } = e,
        {
            selectedSkuId: s,
            purchaseError: o,
            purchasePreviewError: u,
            appliedUserDiscounts: d,
        } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: p } = (0, er.o)(),
        { application: m } = (0, nZ.V)(),
        h = (0, nz.gU)(),
        C = (0, nK.bG)([n$.A], () => n$.A.getProduct(s)),
        f = c.useRef(!1);
    (ez()(null != s, "Expected selectedSkuId"), ez()(null != m, "Expected application"));
    let S = h[s];
    ez()(null != S, "Expected sku");
    let y = null != p || null != o || null != u,
        A =
            l ??
            (d.length > 0
                ? H.intl.formatToPlainString(H.t.VuV3Td, { discountOfferAmount: d[0].discount.amount })
                : void 0);
    return (c.useEffect(() => {
        null == C ||
            y ||
            f.current ||
            ((f.current = !0),
            (0, n0.A)({
                product: C,
                overrideTitle: A,
                overrideDescription: i,
                overrideGradientColor: a,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: nH.gs.FIAT,
            }));
    }, [C, n, t, y, A, i, a]),
    y)
        ? (0, r.jsx)(eV.dZ, { children: (0, r.jsx)(n1.A, {}) })
        : null;
}
function n4(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: i,
            giftRecipient: a,
            giftMessageError: s,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, nw.Pv)(),
        d = (0, nK.bG)([nq.Ay], () => nq.Ay.useReducedMotion),
        p = c.useRef(null),
        m = (0, E.t4)((e) => e.selectedSkuId),
        h = (0, nK.bG)([n$.A], () => n$.A.getProduct(m)),
        { confettiColors: C } = (0, nQ.A)(h?.styles);
    return (
        c.useEffect(() => {
            t &&
                null != a &&
                null != m &&
                (u === eG.vQ.USER_PROFILE_WISHLIST || u === eG.vQ.DM_CHANNEL_WISHLIST) &&
                nG.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: m, recipientId: a.id });
        }, [t, a, m, u]),
        t
            ? (0, r.jsxs)("div", {
                  ref: p,
                  children: [
                      (0, r.jsx)(n2.A, {
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
                          (0, r.jsx)(nJ.A, {
                              confettiTarget: p.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, nX.rA)(h?.categorySkuId),
                              colors: C?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(n3, { ...e })
    );
}
var n7 = n(70283),
    n5 = n(982240),
    n6 = n(815996),
    n8 = n(993408),
    n9 = n(575593),
    le = n(452027),
    lt = n(922016),
    ln = n(778712),
    ll = n(986687),
    li = n(999291),
    lr = n(903209),
    la = n(674658),
    ls = n(898461),
    lo = n(203632),
    lu = n(892118),
    lc = n(536572),
    ld = n(14702),
    lp = n(219103),
    lm = n(431898);
function lh(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: i,
            previewHeaderClassName: a,
            hideProfilePreview: s,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, nw.Pv)(),
        d = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
        p = k.Ay.canUseShopDiscounts(d),
        m = (0, li.Ay)(o?.id),
        h = c.useRef(null),
        [C, f] = c.useState(!1),
        { product: S } = (0, la.q)(t, !0),
        E = c.useMemo(() => (0, n8.fT)(S, p), [S, p]);
    if (null == S || 0 === S.items.length) return null;
    let [A] = S.items,
        I = (0, lc.VG)(S),
        g = null != o && o.id !== d?.id && S.type !== n9.R.BUNDLE && A.type !== n9.R.NAMEPLATE && !s;
    return (0, r.jsxs)("div", {
        className: i,
        children: [
            (0, r.jsx)("div", {
                className: e3()(lm.QU, a),
                children: (0, r.jsx)(le.D, {
                    label: H.intl.string(H.t.PpoJzt),
                    children:
                        g &&
                        (0, r.jsx)(
                            lt.Y,
                            {
                                targetElementRef: h,
                                align: "center",
                                shouldShow: C,
                                onRequestClose: () => f(!1),
                                preload: () => (0, lr.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(ll.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, ln.FT)(ln._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, ls.T)(A) ? A : null,
                                        pendingProfileEffect: (0, lo.C3)(A) ? A : null,
                                        pendingProfileFrame: (0, lu.s)(A) ? A : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, r.jsx)(nx.D, {
                                        ...l,
                                        className: lm.Nx,
                                        innerRef: h,
                                        onClick: (e) => {
                                            (f((e) => !e), t?.(e));
                                        },
                                        onMouseDown: (e) => {
                                            C ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(y.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: H.intl.string(H.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            m?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: e3()(lm.i1, null != u ? lm.cN : lm.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: lm.Ug,
                        children: [
                            (0, r.jsx)(ld.O, { product: S }),
                            (0, r.jsxs)("div", {
                                className: lm.JZ,
                                children: [
                                    (0, r.jsx)(y.E, { variant: "text-md/semibold", children: I }),
                                    (0, r.jsx)(tt.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            S?.type === n9.R.BUNDLE
                                                ? null
                                                : A.type === n9.R.AVATAR_DECORATION
                                                  ? H.intl.string(H.t["7v0T9P"])
                                                  : A.type === n9.R.NAMEPLATE
                                                    ? H.intl.string(H.t.x5CoXR)
                                                    : A.type === n9.R.PROFILE_EFFECT
                                                      ? H.intl.string(H.t.wR5wOo)
                                                      : A.type === n9.R.PROFILE_FRAME
                                                        ? H.intl.string(H.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(lp.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: E,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, r.jsx)("div", {
                            className: lm.Wh,
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
var lC = n(890497);
let lf = (0, n(945810).mj)({
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
var lS = n(896170),
    lE = n(966327),
    ly = n(565860),
    lA = n(994500),
    lI = n(427262),
    lg = n(428863),
    lP = n(435558),
    lv = n.n(lP),
    lx = n(427358);
function l_(e) {
    var t;
    let n,
        l,
        { selectedSkuId: i, validateSelectedGift: a, className: s, recipients: o } = e,
        { giftRecipient: u, setGiftRecipient: d } = (0, nw.Pv)(),
        { displayNameSearchEnabled: p, affinityOrderingEnabled: m } = lf.useConfig({
            location: "CollectiblesGiftRecipientPicker",
        }),
        { options: h, customMatchSorter: C } =
            ((n = (0, D.bG)([lx.A], () => lx.A.getUserAffinitiesMap())),
            (t = c.useMemo(
                () => (m ? lv().sortBy(o, (e) => -(n.get(e.id)?.communicationProbability ?? 0)) : o),
                [m, o, n],
            )),
            (l = c.useMemo(
                () =>
                    p
                        ? new Map(
                              t.map((e) => {
                                  let t, n;
                                  return [
                                      e.id,
                                      ((t = lA.A.getNickname(e.id) ?? lI.Ay.getName(e)),
                                      (n = lI.Ay.getUserTag(e)),
                                      {
                                          names: Object.keys((0, ly.jP)(e).names),
                                          username: e.username,
                                          baseLabel: t,
                                          userTag: n === t ? void 0 : n,
                                      }),
                                  ];
                              }),
                          )
                        : null,
                [p, t],
            )),
            {
                options: c.useMemo(
                    () =>
                        t.map((e) => {
                            let t = l?.get(e.id);
                            return {
                                id: e.id,
                                value: e.id,
                                label: t?.baseLabel ?? lI.Ay.getUserTag(e),
                                trailing:
                                    t?.userTag != null
                                        ? (0, r.jsx)(y.E, {
                                              tag: "span",
                                              variant: "text-md/normal",
                                              color: "text-subtle",
                                              className: lg.X,
                                              children: t.userTag,
                                          })
                                        : void 0,
                                leading: (0, r.jsx)(lE.A, { user: e, size: ln._3.SIZE_20 }),
                            };
                        }),
                    [t, l],
                ),
                customMatchSorter: c.useMemo(
                    () =>
                        null == l
                            ? void 0
                            : (e, t) =>
                                  (0, lS.Ht)(e, t, { keys: ["label", (e) => l.get(e.value)?.names ?? []] }).map((e) => {
                                      let n = l.get(e.value);
                                      if (null == n) return e;
                                      let i = (function (e, t) {
                                          let n = (0, ly.HI)(t);
                                          if ("" !== n) return e.find((e) => (0, ly.HI)(e).includes(n));
                                      })(n.names, t);
                                      return null == i || i === n.username || i === e.label ? e : { ...e, label: i };
                                  }),
                    [l],
                ),
            });
    return (0, r.jsx)("div", {
        className: e3()(s, { [lg.N]: null != C }),
        children: (0, r.jsx)(lC.Z, {
            selectionMode: "single",
            label: H.intl.string(H.t.xFn72s),
            placeholder: H.intl.string(H.t.R0vK0N),
            value: u?.id,
            onSelectionChange: function (e) {
                let t = o.find((t) => t.id === e);
                null != t && (a(t, i), d(t));
            },
            customMatchSorter: C,
            options: h,
        }),
    });
}
let lT = function (e) {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: i } = e;
    return null == t
        ? null
        : (0, r.jsx)(l_, { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: i });
};
var lN = n(570287);
function lb() {
    let e = (0, D.yK)([lA.A], () => lA.A.getFriendIDs()),
        t = (0, D.yK)([lx.A], () =>
            lx.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: i } = e,
                        r = (0, lN.q)(i);
                    return !t && (n >= 0.1 || l >= 0.1) && r;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = c.useMemo(() => lv().uniq([...e, ...t]), [e, t]);
    return (0, D.yK)(
        [F.default],
        () =>
            n.reduce((e, t) => {
                let n = F.default.getUser(t);
                return (null == n || n.bot || e.push(n), e);
            }, []),
        [n],
    );
}
var lj = n(859492),
    lR = n(492275),
    lO = n(968060),
    lM = n(274076),
    lL = n(948388),
    lk = n(976860),
    lw = n(619940);
function lD(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, ts.Ay)(a.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(eX.Q, {
        text: H.intl.string(H.t.J82mpK),
        onClick: function () {
            (t(),
                (0, ny.closeAllModals)(),
                null == n
                    ? (0, n6.Cz)({ analyticsLocations: l, analyticsSource: a.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, lk.pX)(`${eB.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`));
        },
        textVariant: "text-sm/medium",
    });
}
function lU(e) {
    let {
            hideConfirmStepConfetti: t,
            confettiCanvas: n,
            collectedModalOverrideTitle: l,
            collectedModalOverrideDescription: i,
            collectedModalGradientColor: a,
        } = (0, nD.z)(),
        { analyticsLocations: s } = (0, ts.Ay)();
    return (0, r.jsx)(n4, {
        analyticsLocations: s,
        hideConfetti: t,
        confettiCanvas: n,
        collectedModalOverrideTitle: l,
        collectedModalOverrideDescription: i,
        collectedModalGradientColor: a,
        ...e,
    });
}
let lG = {
    [o.pn.GIFT_CUSTOMIZATION]: () => H.intl.string(H.t["JCFN/y"]),
    [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => H.intl.string(H.t.lDbi6H),
    [o.pn.CONFIRM]: () => "",
};
function lF(e) {
    let { step: t } = e,
        n = lG[t];
    return null == n ? null : (0, r.jsx)(nL.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
}
let lB = {
    CHECKOUT_FLOW: s.C.COLLECTIBLES_CHECKOUT,
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
                            setValidatingGiftRecipient: p,
                        } = (0, nw.Pv)(),
                        { selectedSkuId: m, checkoutInvoicePreview: h } = (0, E.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                        })),
                        C = (0, nz.gU)(),
                        f = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
                        S = lb(),
                        { analyticsLocations: y } = (0, ts.Ay)(a.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL),
                        A = (0, lj.F5)("CollectiblesPaymentModalGiftCustomizationStep"),
                        { nextTier: I, giftsToNextTier: g } = (0, D.cf)([n5.Ay], () => ({
                            nextTier: n5.Ay.getNextTier(n7.$.GIFTING),
                            giftsToNextTier: n5.Ay.getRemainingToNextTier(n7.$.GIFTING),
                        })),
                        P = A && null != I,
                        v = (0, lj.b9)(`CollectiblesPaymentModalGiftCustomizationStep${P ? "" : "-DISABLED"}`);
                    async function x(e, t) {
                        (p(!0),
                            null != s && o(),
                            (await (0, n6.JJ)(e.id, t)) || o(H.intl.string(H.t["4kgVqQ"])),
                            p(!1));
                    }
                    function _() {
                        return (0, r.jsx)(lO.A, {
                            onTextChange: (e) => i?.(e),
                            pendingText: l,
                            currentText: l,
                            disableThemedBackground: !0,
                            className: lw.iX,
                            innerClassName: lw.pt,
                        });
                    }
                    return (
                        (0, en.Ay)(() => {
                            null != m &&
                                null != c &&
                                (d !== eG.vQ.DM_CHANNEL_WISHLIST &&
                                    eN.default.track(eB.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: m }),
                                x(c, m));
                        }),
                        {
                            renderLeftColumn: function () {
                                return (0, r.jsx)("div", {
                                    className: lw.qL,
                                    children: (0, r.jsx)(lM.t, { isShopGift: !0 }),
                                });
                            },
                            renderRightColumn: function () {
                                let e = (0, n8.pA)({ invoicePreview: h, selectedSkuId: m, skusById: C });
                                return d === eG.vQ.USER_PROFILE_WISHLIST || d === eG.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(lL.Z, { giftRecipient: c }),
                                              _(),
                                              null != e &&
                                                  null != m &&
                                                  (0, r.jsx)(lh, {
                                                      skuId: m,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: lw.uW,
                                                      previewHeaderClassName: lw.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: lw.fi,
                                                  children: (0, r.jsx)(lD, { handleClose: n, selectedSkuId: m }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(lT, {
                                                  selectedSkuId: m,
                                                  recipients: S,
                                                  className: lw.uh,
                                                  validateSelectedGift: x,
                                              }),
                                              _(),
                                              null != e &&
                                                  null != m &&
                                                  (0, r.jsx)(lh, {
                                                      skuId: m,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: lw.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            renderBottomContent: function () {
                                return P
                                    ? (0, r.jsx)(lR.A, {
                                          giftsToNextTier: g,
                                          nextTierName: I.name ?? "",
                                          nextTierIcon: (0, lj.Se)(I, v),
                                          analyticsLocations: y,
                                          className: lw.qr,
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
                p = c.useMemo(() => ({ loading: d, disabled: u }), [d, u]);
            return (0, r.jsx)(nk.M, {
                paymentModalStepProps: e,
                layout: s.X.TWO_COLUMN,
                renderLeftColumn: l,
                renderRightColumn: i,
                renderBottomContent: o,
                primaryCTAButtonProps: p,
            });
        },
        [o.pn.REVIEW]: nE.p,
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
                    hideConfirmStepConfetti: p,
                } = (function (e) {
                    let { skuId: t } = e,
                        n = c.useRef(new nU.OH()),
                        [l, i] = c.useState(null),
                        [r, a] = c.useState(!1),
                        s = c.useMemo(() => (0, nB.AB)({ purchaseType: nH.gs.FIAT, skuId: t }), [t]);
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
                [h, C] = (0, c.useState)(void 0),
                [f, S] = (0, c.useState)(void 0),
                [E, y] = (0, c.useState)(void 0),
                A = (0, c.useMemo)(
                    () => ({
                        skuIDs: m,
                        setCustomConfettiVisible: u,
                        hideConfirmStepConfetti: p,
                        confettiCanvas: a,
                        collectedModalOverrideTitle: h,
                        setCollectedModalOverrideTitle: C,
                        collectedModalOverrideDescription: f,
                        setCollectedModalOverrideDescription: S,
                        collectedModalGradientColor: E,
                        setCollectedModalGradientColor: y,
                    }),
                    [m, u, p, a, h, f, E],
                );
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(nV, {
                        environment: i,
                        setConfettiCanvas: s,
                        customConfettiDisplayOptions: d,
                        customConfettiVisible: o,
                    }),
                    (0, r.jsx)(ei.M, {
                        ...l,
                        skuIDs: m,
                        stepConfigs: l.stepConfigs,
                        activeSubscription: null,
                        purchaseType: tG.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, r.jsx)(nD.i.Provider, { value: A, children: n }),
                    }),
                ],
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                { skuIDs: l, setCustomConfettiVisible: i } = (0, nD.z)(),
                {
                    paymentModalSkuId: r,
                    paymentModalOnClose: a,
                    paymentModalOnComplete: s,
                } = (function (e) {
                    let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: i } = e,
                        r = t[0] ?? null,
                        a = c.useCallback(() => {
                            (i(!0), l?.());
                        }, [l, i]);
                    return {
                        paymentModalSkuId: r,
                        paymentModalOnClose: c.useCallback(
                            (e) => {
                                (i(!1), n(e), nG.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null }));
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
            { isGift: n } = (0, nw.Pv)();
        return n ? (0, r.jsx)(lF, { step: t }) : null;
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(lU, { ...e }), options: nY },
};
var lH = n(809029),
    lW = n(354033),
    lY = n(554146),
    lV = n(841702),
    lK = n(758461),
    lq = n(367727),
    lZ = n(332026),
    lz = n(810498),
    l$ = n(557679),
    lQ = n(709870),
    lJ = n(37126),
    lX = n(412260),
    l0 = n(280761),
    l2 = n(492462),
    l1 = n(741231),
    l3 = n(920050);
n(92737);
var l4 = n(607399),
    l7 = n(795791);
function l5(e, t) {
    return !e && t === eG.pe.TIER_2 && !l4.Ct && !l4.KY && null == (0, l7.uM)();
}
var l6 = n(645795),
    l8 = n(625494),
    l9 = n(45938),
    ie = n(450047);
function it(e) {
    let { rewardSkuIds: t, onClose: n, onRewardModalClose: l } = e,
        { analyticsLocations: i } = (0, ts.Ay)(),
        a = (0, ie.D)(t),
        [s, ...o] = (0, D.yK)([n$.A], () => t.map((e) => n$.A.getProduct(e)).filter((e) => null != e));
    return (0, r.jsx)(eV.UX, {
        children: (0, r.jsx)(t7.j, {
            children: (0, r.jsx)(eJ.$, {
                variant: "primary",
                text: H.intl.formatToPlainString(H.t.o18gVZ, { count: t.length }),
                loading: a,
                fullWidth: !0,
                onClick: () => {
                    null != s &&
                        (n(),
                        (0, n0.A)({
                            product: s,
                            remainingProducts: o,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: i,
                            purchaseType: nH.gs.PROMOTIONAL,
                            onCloseCallback: l,
                        }));
                },
            }),
        }),
    });
}
var il = n(49999);
function ii(e) {
    let t,
        {
            handleClose: l,
            planGroup: i,
            onSubscriptionConfirmation: a,
            renderPurchaseConfirmation: s,
            postSuccessGuild: o,
            followupSKUInfo: d,
            continueSessionToInitialStep: p,
        } = e,
        { paymentSources: m } = (0, x.j)(),
        {
            activeSubscription: h,
            selectedSkuId: C,
            updatedSubscription: y,
            paymentSourceId: A,
            isPremiumGroupPurchase: I,
            startingPremiumSubscriptionPlanId: g,
            startingFractionalPremiumEndsAt: P,
            checkoutInvoicePreview: v,
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
        _ = (0, S.A)(),
        T = (0, ea.s2)(),
        {
            isGift: N,
            giftRecipient: b,
            giftCode: j,
            hasSentMessage: R,
            isSendingMessage: O,
            sendGiftMessage: L,
            claimableRewards: k,
            selectedGiftingPromotionRewards: w,
            openGiftingBadgePostPurchaseModal: U,
            canShowGiftingBadgePostPurchase: G,
        } = (0, nw.Pv)(),
        { confirmationFooter: F } = (0, u.cG)(),
        B = (0, lz.px)(_, N, k),
        H = (0, lz.Mq)(_),
        W =
            (0, lZ.Wh)({ location: "PremiumPaymentConfirmStep" }) &&
            (0, l$.M)({ isGift: N, giftRecipient: b, selectedPlanId: _?.id }),
        { purchases: Y } = (0, lV.Wg)(!1),
        V = (0, D.bG)([lX.A], () => lX.A.getGiftPromotion()?.id),
        K = (0, D.bG)([lX.A], () => {
            let e = lX.A.getMarketingComponentByType(tP.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        q = (0, M.g)(m, A),
        Z = null != v ? v.orbsReward : null,
        z = null != Z && Z > 0,
        $ = N && !W && !z && w.length > 0 && w.every((e) => null != Y.get(e)) && H,
        Q = { selectedPlan: _, selectedSkuId: C, step: T };
    if (null == _) throw new f.v({ message: "Expected plan to be selected", extraSentryInformation: Q });
    if (null == C) throw new f.v({ message: "Expected selectedSkuId", extraSentryInformation: Q });
    if (null == T) throw new f.v({ message: "Step should be set", extraSentryInformation: Q });
    let J = c.useCallback(() => {
        (l(), a?.());
    }, [l, a]);
    (0, en.Ay)(() => {
        I &&
            eN.default.track(eB.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != y,
                has_any_premium_group: y?.hasAnyPremiumGroup ?? !1,
                subscription_id: y?.id,
            });
    });
    let X = (0, lK.HH)(),
        ee = (0, l0.U)();
    (c.useEffect(() => {
        function e() {
            if (I)
                if (null != y && y.hasAnyPremiumGroup) {
                    eN.default.track(eB.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: y.id });
                    let e = (0, lP.uniqueId)("premium-group-purchase-flow-modal");
                    (0, ny.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("76283"),
                                n.e("634508"),
                                n.e("96680"),
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
                                        (l8._.dispatch(eB.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                            await t.onClose());
                                    },
                                });
                        },
                        {
                            onCloseRequest: () => {
                                (l8._.dispatch(eB.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, ny.closeModal)(e));
                            },
                            modalKey: e,
                        },
                    );
                } else
                    (eN.default.track(eB.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                        has_updated_subscription: null != y,
                        has_any_premium_group: y?.hasAnyPremiumGroup ?? !1,
                    }),
                        l8._.dispatch(eB.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED));
            else
                null != Z && Z > 0
                    ? (0, lQ.$)({ orbsAmount: Z, openGiftingBadgePostPurchaseModal: N && G ? U : void 0 })
                    : null != ee && l5(N, C)
                      ? (0, l1.A)(eB.BVt.NITRO_HOME, {
                            search: (0, l2.stringify)({ perk: l3.RIOT_CREDIT_CAMPAIGN_PERK_CARD_ID }),
                        })
                      : l5(N, C) && (X?.id === lJ.Ym || X?.name?.includes(lJ.YX)) && (0, lJ.tu)();
        }
        return (
            l8._.subscribe(eB.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                l8._.unsubscribe(eB.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [I, y, Z, X, ee, N, C, h, U, G]),
        c.useEffect(() => {
            !N || null == b || null == j || R || O || (0, l9.Ik)(b) || L({ onSubscriptionConfirmation: a });
        }, [L, N, b, j, R, O, a]),
        c.useEffect(() => {
            B &&
                null != K &&
                null != V &&
                (0, lq.qr)(lY.M.GIFTING_PROMOTION_REMINDER, V, { dismissAction: il.i.INDIRECT_ACTION });
        }, [K, V, B]));
    let et = null != p ? l6.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != s) t = s(_, J, y);
    else if (N) t = (0, r.jsx)(l6.fw, { planId: _.id, onClose: J, shouldUsePostPurchaseRecipientDelivery: W });
    else {
        let e =
            g === _.id
                ? { postSuccessGuild: o }
                : {
                      followupSKUInfo: d,
                      startingPremiumSubscriptionPlanId: g,
                      isDowngrade: null != h && (0, eU.vT)(h, _.id, i),
                  };
        t = (0, r.jsx)(l6.Ay, {
            planId: _.id,
            onClose: J,
            paymentSourceType: q,
            hideClose: null != F,
            startingFractionalPremiumEndsAt: P,
            customCTAType: et,
            ...e,
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(eV.dZ, { children: [(0, r.jsx)(n1.A, {}), t] }),
            null != F && F,
            $ && (0, r.jsx)(it, { rewardSkuIds: w, onClose: J, onRewardModalClose: U }),
        ],
    });
}
let [ir, ia] = (0, d.A)(),
    is = {
        CHECKOUT_FLOW: s.C.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: lH.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: l,
                    } = e,
                    i = c.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(ir.Provider, { value: i, children: (0, r.jsx)(u.Qt, { children: l }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                { guildId: l, listing: i } = ia();
            return (0, r.jsx)(lW.Y, { onClose: t, listing: i, step: n, guildId: l });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(ii, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var io = n(73825),
    iu = n(892349),
    ic = n(35587),
    id = n(436102),
    ip = n(594832),
    im = n(811656),
    ih = n(890856),
    iC = n(947641),
    iS = n(713517),
    iE = n(837015),
    iy = n(929283),
    iA = n(761365),
    iI = n(47840);
function ig(e) {
    let t,
        n,
        { skuId: l, user: i, claimed: a, onSelect: s, isSelected: o, disabled: u = !1 } = e,
        [d, p] = c.useState(null),
        m = c.useMemo(() => {
            let e = null;
            return {
                get current() {
                    return e;
                },
                set current(value) {
                    ((e = value), p(value));
                },
            };
        }, []),
        h = c.useMemo(() => ({ current: d }), [d]),
        { isHoveringOrFocusing: C } = (0, iS.A)(h),
        f = !a && !u && C,
        { product: S } = (0, la.q)(l);
    if (null == S) return null;
    let E = S.items[0];
    return null == E
        ? null
        : ((0, ls.T)(E)
              ? ((n = n9.R.AVATAR_DECORATION),
                (t = (0, r.jsx)(iy.i, { item: E, user: i, isHighlighted: f, avatarSize: ln._3.SIZE_96 })))
              : (0, iE.F)(E) &&
                ((n = n9.R.NAMEPLATE),
                (t = (0, r.jsx)(iA.A, { nameplate: E, user: i, isHighlighted: f, size: "small" }))),
          (0, r.jsxs)(ih.s, {
              ref: m,
              "aria-label": S.name ?? "",
              onClick: function () {
                  null == l || null == s || a || u || s(l);
              },
              focusProps: { within: !0, offset: -2 },
              className: e3()(iI._x, { [iI.Vp]: !a, [iI.mr]: f, [iI.md]: o }),
              children: [
                  (0, r.jsx)("div", {
                      className: e3()(iI.VH, { [iI._Q]: n === n9.R.AVATAR_DECORATION, [iI.M4]: n === n9.R.NAMEPLATE }),
                      children:
                          null != t
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: e3()(iI.i1, { [iI.r9]: a || u }), children: t }),
                                        a &&
                                            (0, r.jsx)(iC.r, {
                                                size: "custom",
                                                width: 48,
                                                height: 48,
                                                color: e7.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                className: iI.j0,
                                            }),
                                    ],
                                })
                              : null,
                  }),
                  (0, r.jsxs)("div", {
                      className: iI.tZ,
                      children: [
                          (0, r.jsx)(tt.D, { variant: "heading-md/extrabold", children: S.name }),
                          (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              children: a ? H.intl.string(H.t["6cfuDj"]) : H.intl.string(H.t.QQsaCc),
                          }),
                      ],
                  }),
              ],
          }));
}
var iP = n(696208),
    iv = n(820287);
function ix(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: l,
            onBackClick: i,
            showBackButton: a,
            planOptions: s,
            shouldRenderUpdatedPaymentModal: u = !1,
            isTrial: d,
            isNextDisabled: p = !1,
            useFullWidthActions: m = !1,
        } = e,
        { paymentSources: h } = (0, x.j)(),
        C = (0, S.A)(),
        { isGift: f, claimableRewards: E } = (0, nw.Pv)();
    l = l ?? h;
    let {
            variant: y,
            text: A,
            onClick: I,
            disabled: g,
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
                c = (0, D.bG)([ef.A], () => ef.A.getPremiumTypeSubscription()),
                d = (0, S.A)(),
                p = (0, ea.s2)(),
                { hasEntitlements: m } = (0, id.X)(n, l),
                h = (null != c && null != c.paymentSourceId) || Object.keys(r).length > 0 || (m && !s);
            var C = a ? H.intl.string(H.t.PDTjLN) : H.intl.string(H.t.XqMe3N),
                f = o.pn.ADD_PAYMENT_STEPS;
            return (
                h && (f = o.pn.REVIEW),
                (0, lz.px)(d, l, i) && p !== o.pn.SELECT_FREE_SKU && (f = o.pn.SELECT_FREE_SKU),
                { variant: "primary", text: C, onClick: () => t(f), disabled: u }
            );
        })({
            onStepChange: t,
            selectedPlanId: (n = n ?? C?.id),
            isGift: f,
            claimableRewards: E,
            paymentSources: l,
            shouldRenderUpdatedPaymentModal: u,
            isTrial: d,
            isNextDisabled: p,
        }),
        P = c.useMemo(() => {
            let e =
                null != n && s.includes(n)
                    ? { variant: y, text: A, onClick: I, disabled: g }
                    : { variant: "primary", text: H.intl.string(H.t.XqMe3N), disabled: !0 };
            return m && a && null != i
                ? [{ variant: "secondary", text: H.intl.string(H.t["13/7kX"]), onClick: i }, e]
                : [e];
        }, [y, A, I, g, n, s, m, a, i]);
    return (0, r.jsx)(iP.H, {
        leading: !m && a && null != i ? (0, r.jsx)(iv.A, { onClick: i }) : void 0,
        actions: P,
        actionsFullWidth: m,
    });
}
var i_ = n(144281);
function iT(e) {
    let { handleStepChange: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        l = (0, S.A)(),
        i = (0, ea.s2)(),
        {
            selectedGiftingPromotionRewards: a,
            setSelectedGiftingPromotionRewards: s,
            claimableRewards: u,
        } = (0, nw.Pv)(),
        d = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
        p = (0, D.yK)([lX.A], () => lX.A.getGiftPromotionRewardSkuIds()),
        m = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(u, a[0]),
        [h, C] = c.useState(m),
        [y, A] = c.useState(!1);
    c.useEffect(() => {
        y || null != a[0] || null == m || (s([m]), C(m));
    }, [m, y, a, s]);
    let I = { selectedPlan: l, selectedSkuId: n, step: i };
    if (null == l) throw new f.v({ message: "Expected plan to be selected", extraSentryInformation: I });
    if (null == n) throw new f.v({ message: "Expected selectedSkuId", extraSentryInformation: I });
    if (null == i) throw new f.v({ message: "Step should be set", extraSentryInformation: I });
    let g = c.useMemo(() => null != h && (u ?? []).includes(h), [h, u]),
        P = c.useMemo(() => 0 === p.length || null == h || !g, [p, h, g]);
    function v(e) {
        (s([e]), C(e), A(!0));
    }
    c.useEffect(() => {
        if (0 === p.length) {
            (C(void 0), s([]));
            return;
        }
        (null != h && g && p.includes(h)) || null == h || (C(void 0), s([]));
    }, [p, g, h, s]);
    let x = p.map((e) =>
            (0, r.jsx)(
                ig,
                { skuId: e, claimed: null != u && !u.includes(e), user: d, onSelect: v, isSelected: e === h },
                e,
            ),
        ),
        _ = (0, r.jsx)(eV.UX, {
            children: (0, r.jsx)(ix, {
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
            (0, r.jsx)(nL.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: H.intl.string(H.t.OEtqpm),
                subtitle: H.intl.string(H.t.h2nMp0),
            }),
            (0, r.jsx)(eg.c, { children: (0, r.jsx)("div", { className: i_.Dq, children: x }) }),
            _,
        ],
    });
}
function iN(e) {
    let { handleStepChange: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        l = (0, E.t4)((e) => e.quantity),
        i = (0, S.A)(),
        a = (0, ea.s2)(),
        {
            setSelectedGiftingPromotionRewards: s,
            selectedGiftingPromotionRewards: u,
            claimableRewards: d,
        } = (0, nw.Pv)(),
        p = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
        m = (0, D.yK)([lX.A], () => lX.A.getGiftPromotionRewardSkuIds()),
        h = Math.min(l, d?.length ?? 0);
    c.useEffect(() => {
        null == d || (h > 0 && h === d.length ? s(d) : u.length > h && s([]));
    }, [d, h, s, u.length]);
    let C = { selectedPlan: i, selectedSkuId: n, step: a };
    if (null == i) throw new f.v({ message: "Expected plan to be selected", extraSentryInformation: C });
    if (null == n) throw new f.v({ message: "Expected selectedSkuId", extraSentryInformation: C });
    if (null == a) throw new f.v({ message: "Step should be set", extraSentryInformation: C });
    let y = c.useMemo(() => h > 0 && u.length === h && u.every((e) => (d ?? []).includes(e)), [u, d, h]),
        A = c.useMemo(() => 0 === m.length || !y, [m, y]);
    function I(e) {
        1 === h ? s([e]) : u.includes(e) ? s(u.filter((t) => t !== e)) : u.length >= h || s([...u, e]);
    }
    c.useEffect(() => {
        if (0 === m.length) return void s([]);
        let e = u.filter((e) => m.includes(e) && (d ?? []).includes(e));
        e.length !== u.length && s(e);
    }, [m, d, u, s]);
    let g = null != d && h > 0 && u.length >= h,
        P = m.map((e) => {
            let t = u.includes(e);
            return (0, r.jsx)(
                ig,
                {
                    skuId: e,
                    claimed: null != d && !d.includes(e),
                    user: p,
                    onSelect: I,
                    isSelected: t,
                    disabled: !t && g && h > 1,
                },
                e,
            );
        }),
        v = (0, r.jsx)(eV.UX, {
            children: (0, r.jsx)(ix, {
                onStepChange: t,
                onBackClick: () => t(o.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [i.id],
                selectedPlanId: i.id,
                isNextDisabled: A,
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nL.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: H.intl.string(H.t.B2MCEq),
                subtitle: H.intl.formatToPlainString(H.t.UGXnmY, { rewardCount: u.length, maxRewardCount: h }),
            }),
            (0, r.jsx)(eg.c, { children: (0, r.jsx)("div", { className: i_.Dq, children: P }) }),
            v,
        ],
    });
}
function ib(e) {
    return (0, lZ.Wh)({ location: "PremiumPaymentFreeSKUSelectStep" })
        ? (0, r.jsx)(iN, { ...e })
        : (0, r.jsx)(iT, { ...e });
}
var ij = n(428644),
    iR = n(396533),
    iO = n(699595),
    iM = n(403689),
    iL = n(421108),
    ik = n(860300),
    iw = n(298305),
    iD = n(341535),
    iU = n(799636);
function iG(e) {
    let { className: t } = e,
        { enabled: n } = ik.J.useConfig({ location: "PremiumGiftPromotionPlanSelectBanner" }),
        l = (0, D.bG)([lX.A], () => {
            let e = lX.A.getMarketingComponentByType(tP.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: i } = (0, nw.Pv)(),
        a = Math.min(
            (0, E.t4)((e) => e.quantity),
            i?.length ?? 0,
        ),
        s = (0, tT.T)(l?.asset),
        o = (0, tT.T)(l?.backgroundAsset),
        u = (0, D.bG)([lX.A], () => lX.A.getGiftPromotion()),
        c = (0, iL.dA)(u?.endDate, n),
        d = (0, lz.gc)(o);
    return (null != d && ((d.backgroundSize = "cover, auto"), (d.backgroundPosition = "right center, 0% 0%")),
    null == l || null == i || 0 === i.length)
        ? null
        : (0, r.jsx)(iF, {
              className: t,
              graphic: (0, r.jsx)(iw.A, {
                  claimableRewards: i,
                  maxRewardImageSrc: s ?? "",
                  size: ln._3.SIZE_40,
                  imageScaling: 1.25,
              }),
              header: H.intl.formatToPlainString(iD.default.sUvNeI, { count: a }),
              body: i.length > 0 ? H.intl.formatToPlainString(H.t["2h5M+X"], { availableCount: i.length }) : void 0,
              countdown: c,
          });
}
function iF(e) {
    let { className: t, graphic: n, header: l, body: i, countdown: a } = e;
    return (0, r.jsxs)("div", {
        className: e3()(iU.KE, t),
        children: [
            (0, r.jsxs)("div", {
                className: iU.SV,
                children: [
                    n,
                    (0, r.jsxs)("div", {
                        className: iU.ST,
                        children: [
                            (0, r.jsx)(y.E, { variant: "text-md/medium", color: "text-default", children: l }),
                            null != i &&
                                (0, r.jsx)(y.E, { variant: "text-md/normal", color: "text-subtle", children: i }),
                        ],
                    }),
                ],
            }),
            null != a &&
                (0, r.jsxs)("div", {
                    className: iU.gO,
                    children: [
                        (0, r.jsx)(tx.ClockIcon, { size: "xs", color: "currentColor" }),
                        (0, r.jsx)(y.E, { variant: "text-md/medium", color: "text-default", children: a }),
                    ],
                }),
        ],
    });
}
var iB = n(511484),
    iH = n(462887),
    iW = n(97808),
    iY = n(736653),
    iV = n(854627),
    iK = n(236834);
let iq = (e) => {
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
    iZ = (e) => {
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
var iz = n(940223);
let i$ = function (e) {
    let { className: t } = e,
        n = (0, iK.A)(),
        { avatarSrc: l, eventHandlers: i } = (0, iV.A)({ userId: n?.id, size: ln._3.SIZE_32, animateOnHover: !0 }),
        a = (0, iY.DP)(),
        s = (0, iH.q)(a),
        o = lI.Ay.getName(n);
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: e3()(iz.$6, t),
              children: [
                  (0, r.jsx)("div", {
                      className: iz.H,
                      children: (0, r.jsx)(iW.eu, { src: l, "aria-label": n.username, size: ln._3.SIZE_32, ...i }),
                  }),
                  (0, r.jsx)(y.E, {
                      variant: "text-xs/bold",
                      className: iz.U_,
                      children: H.intl.format(H.t.oxhCOl, { userName: o }),
                  }),
                  (0, r.jsx)(s ? iq : iZ, { className: iz.q3 }),
              ],
          });
};
var iQ = n(242124),
    iJ = n(69494),
    iX = n(845012),
    i0 = n(597770),
    i2 = n(235986),
    i1 = n(164503),
    i3 =
        (((l = i3 || {}).PRIMARY = "primary"),
        (l.SECONDARY = "secondary"),
        (l.WARNING = "warning"),
        (l.ERROR = "error"),
        l),
    i4 = (((i = i4 || {}).SMALL = "small"), (i.LARGE = "large"), (i.NONE = "none"), i);
let i7 = { primary: i1.cG, secondary: i1.QU, warning: i1.SO, error: i1._r },
    i5 = { small: i1.EX, large: i1.as, none: null };
class i6 extends c.PureComponent {
    static Colors = i3;
    static Sizes = i4;
    render() {
        let { icon: e, color: t, children: n, iconSize: l, className: i, iconClassName: a } = this.props;
        return (0, r.jsxs)(i2.A, {
            className: e3()(i1.N4, i7[t], i),
            align: i2.A.Align.CENTER,
            children: [
                (0, r.jsx)(e, { className: e3()(i1.Kk, i5[l], a), color: "currentColor" }),
                (0, r.jsx)("div", { children: n }),
            ],
        });
    }
}
var i8 = n(651540);
function i9(e) {
    let { giftMessage: t = H.intl.string(H.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: l } = (0, nw.Pv)();
    return !n || (0, l9.Ik)(l)
        ? null
        : (0, r.jsx)(i6, {
              className: i8.z,
              iconSize: i6.Sizes.SMALL,
              icon: i0.GiftIcon,
              color: null == t ? i6.Colors.PRIMARY : i6.Colors.SECONDARY,
              children: t,
          });
}
var re = n(577381),
    rt = n(593675);
function rn(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: l, subscriptionTier: i, trialId: a, handleClose: s } = e,
        {
            priceOptions: u,
            activeSubscription: d,
            premiumPlanOptions: p,
        } = (0, E.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
        })),
        { isEligibleForTrial: m, isEligibleForDiscount: h, discountOffer: C, userTrialOffer: f } = (0, T.i)(),
        A = (0, iB.YJ)(C),
        I = (0, S.A)(),
        g = (0, ea.s2)(),
        { isGift: P, giftRecipient: x, giftMessage: _, claimableRewards: N } = (0, nw.Pv)(),
        b = (0, iu.p)("PremiumPaymentPlanSelectStep"),
        j = (0, lz.Mq)(I),
        R = (0, nK.bG)([lX.A], () => {
            let e = lX.A.getMarketingComponentByType(tP.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        O = P && j && null != N && N.length > 0 && R,
        M = (0, lj.F5)("PremiumPaymentPlanSelectStep"),
        { nextTier: L, giftsToNextTier: k } = (0, D.cf)([n5.Ay], () => ({
            nextTier: n5.Ay.getNextTier(n7.$.GIFTING),
            giftsToNextTier: n5.Ay.getRemainingToNextTier(n7.$.GIFTING),
        })),
        w = P && M && null != L,
        U = (0, lj.b9)(`PremiumPaymentPlanSelectStep${w ? "" : "-DISABLED"}`),
        { isHidden: G } = iM.A.useConfig({ location: `PremiumPaymentPlanSelectStep${P ? "" : " - DO NOT USE"}` }),
        F = !(0, ip.tA)({ isGift: P, giftRecipient: x }) && !G,
        B = null;
    O
        ? (B = b
              ? (0, r.jsx)("div", {
                    className: e3()(rt.RC, rt.oq, F ? rt.ek : rt.lz),
                    children: (0, r.jsx)(iG, { className: rt.j2 }),
                })
              : (0, r.jsx)(iG, {}))
        : w &&
          (B = (0, r.jsx)("div", {
              className: e3()(rt.RC, F ? rt.ek : rt.lz),
              children: (0, r.jsx)(lR.A, {
                  giftsToNextTier: k,
                  nextTierName: L.name ?? "",
                  nextTierIcon: (0, lj.Se)(L, U),
              }),
          }));
    let W = (m || h) ?? !1,
        Y = (0, ic.Wi)(eG.ZC),
        V = W || Y,
        K = h && null != A && p.includes(A) ? A : p[0],
        q = (0, nK.bG)([eD.A], () => eD.A.get(K)),
        Z = [{ planId: q?.id, quantity: 1 }],
        [z, $] = c.useState(W),
        [Q, J] = (0, td.YV)({
            items: Z,
            renewal: !1,
            preventFetch: !V,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
        });
    (c.useEffect(() => {
        W && $(Q?.subscriptionPeriodEnd == null);
    }, [Q, W]),
        (0, ij.A)(
            "Payment Modal Plan Select Step",
            z,
            5,
            { proratedInvoicePreview: Q, proratedInvoiceError: J, isEligibleForOffer: W },
            { tags: { app_context: "billing" } },
        ));
    let X = J?.message ?? H.intl.string(H.t.R0RpRX),
        ee = W && null == J,
        et = W && null != J,
        en = ee && null == d && Q?.subscriptionPeriodEnd == null;
    (0, iO.W)({ priceOptions: u, trialId: a, discountInvoicePreview: Q });
    let el = (0, re.i)({ planSkuId: q?.skuId, invoice: Q }),
        { ref: ei, onTransitionEnd: er } = (0, iR.A)({ isExpanded: null != el, minHeightOverride: 0 }),
        es = c.useMemo(
            () =>
                P || q?.skuId !== eG.pe.TIER_2 || f?.referrerId == null
                    ? (0, r.jsx)("div", { ref: ei, onTransitionEnd: er, style: { overflow: "hidden" }, children: el })
                    : (0, r.jsx)(i$, { className: rt.ZB }),
            [el, P, q?.skuId, f?.referrerId, ei, er],
        ),
        eo = c.useMemo(
            () => ({
                planOptions: p,
                selectedPlanId: I?.id,
                planGroup: l,
                subscriptionPeriodEnd: Q?.subscriptionPeriodEnd,
                useCompactGiftComponents: O,
                handleClose: s,
            }),
            [p, I?.id, l, Q?.subscriptionPeriodEnd, O, s],
        );
    if (en) return (0, r.jsx)(v.Ed, { className: rt.QW });
    (ez()(null != g, "Step should be set"), ez()(p.length > 0, "Premium plan options should be set"));
    let eu = P
        ? (0, r.jsx)(iQ.$p, { ...eo })
        : (0, r.jsx)(iX.X, { ...eo, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i9, { giftMessage: _ }),
            !(P && (0, l9.Ik)(x)) && (0, r.jsx)(iJ.A, { isEligibleForTrial: m }),
            (0, r.jsxs)(eV.dZ, {
                children: [
                    !b && es,
                    (0, r.jsx)(n1.A, { className: rt.tg }),
                    et ? (0, r.jsx)(e$.w, { type: "critical", children: X }) : eu,
                    !b &&
                        ee &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: e3()(rt.IM, rt.Go) }),
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
                    B,
                    (0, r.jsx)(ix, {
                        onStepChange: t,
                        onBackClick: () => t(o.pn.SKU_SELECT),
                        showBackButton: null == n && null == i,
                        planOptions: p,
                        shouldRenderUpdatedPaymentModal: ee,
                        isTrial: m,
                        useFullWidthActions: b,
                    }),
                ],
            }),
        ],
    });
}
var rl = n(989790),
    ri = n(110862),
    rr = n(800471),
    ra = n(169801),
    rs = n(876491);
function ro(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: l,
            priceOptions: i,
            activeSubscription: a,
            defaultPlanId: s,
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
        { hasPaymentSources: d } = (0, x.j)(),
        { isGift: p, claimableRewards: m } = (0, nw.Pv)(),
        h = p && null != m && m.length > 0,
        C = (0, tC.V)(u);
    return (0, r.jsx)(ru, {
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
                    p = (0, k.aZ)(t);
                (p !== eG.pe.TIER_1 && p !== eG.pe.TIER_2) || n !== eG.pe.TIER_0 || r || (d = o.pn.WHAT_YOU_LOSE);
                let m = c({ isTrial: (0, ra.t)({ userTrialOffer: a, isGift: r, skuId: n }), selectedSkuId: n });
                (d !== o.pn.WHAT_YOU_LOSE && m && ((d = o.pn.REVIEW), s((0, rr.x)(n, t, u))),
                    i(d, { analyticsDataOverride: { sku_id: n } }));
            })({
                getIsInOneStepSubscriptionCheckout: c,
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: p,
                userTrialOffer: C,
                setSelectedPlanId: l,
                defaultPlanId: s,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                (i((0, k.mH)(eG.pe.TIER_2)),
                    t(eG.gD.PREMIUM_GROUP_MONTH),
                    n(l ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: eG.pe.TIER_2 } }));
            })({ setSelectedPlanId: l, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: n }),
        isGift: p,
        priceOptions: i,
        showPromotionalGiftBanner: h,
    });
}
function ru(e) {
    let { selectSku: t, isGift: n, priceOptions: l, showPromotionalGiftBanner: i, onSelectPremiumGroup: a } = e,
        s = (0, rl.FY)({ isGift: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nL.rQ, { titleTextVariant: "heading-lg/semibold", title: H.intl.string(H.t["r+SebU"]) }),
            s
                ? (0, r.jsx)(eg.c, {
                      children: (0, r.jsx)("div", {
                          className: rs.eE,
                          children: (0, r.jsx)(ri.yS, {
                              onSelectSku: (e) => t((0, k.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: l,
                              showPromotionalGiftBanner: i,
                          }),
                      }),
                  })
                : (0, r.jsx)(eg.c, {
                      children: (0, r.jsx)("div", {
                          className: rs.a2,
                          children: (0, r.jsx)(ri.Ay, {
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
var rc = n(825484),
    rd = n(137728);
function rp(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: l,
            setSelectedPlanId: i,
            activeSubscription: a,
            isInOneStepSubscriptionCheckout: s,
        } = (0, E.t4)((e) => ({
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
        (0, r.jsx)(rd.A, {
            premiumType: d,
            titleText: H.intl.string(H.t["7VcWW0"]),
            subtitleText: H.intl.format(H.t.Qk34Ik, { subscriptionName: c }),
            footer: (0, r.jsxs)(rc.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(eJ.$, {
                        variant: "primary",
                        text: H.intl.string(H.t["3PatSz"]),
                        onClick: () => {
                            s ? (i((0, rr.x)(l, a)), t(o.pn.REVIEW)) : t(o.pn.PLAN_SELECT);
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
var rm = n(750532);
let rh = [
        {
            key: o.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(ro, { ...e }),
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
            renderStep: (e) => (0, r.jsx)(rp, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: o.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(rn, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) =>
                    (0, E.t4)((t) => t.getIsInOneStepSubscriptionCheckout({ isTrial: e ?? !1 }))
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
            renderStep: (e) => (0, r.jsx)(ib, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    rC = {
        CustomHeaderComponent: rm.kc,
        CHECKOUT_FLOW: el.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: rh,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: lH.E },
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
                            initialPaymentSourceId: p,
                        },
                        stepConfigs: m,
                        loadId: h,
                        giftContextProps: C = { isGift: !1, giftRecipient: null },
                        renderModalProps: f,
                        children: S,
                    } = e,
                    E = (0, D.bG)([ef.A], () => ef.A.getPremiumTypeSubscription()),
                    y = (0, ic.Sq)() ? eG.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: A, giftRecipient: I } = C;
                if (null != s && !Object.values(eG.pe).includes(s))
                    throw Error("subscriptionTier must be a premium subscription");
                let g = (0, ip.tA)({ giftRecipient: I, isGift: A ?? !1 }),
                    P = c.useMemo(
                        () =>
                            g
                                ? m.map((e) =>
                                      e.key === o.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : m,
                        [m, g],
                    ),
                    v = null != d ? d : E,
                    x = !A && null != v && v.isPurchasedExternally && null != v.paymentGateway;
                (0, id.s)(v, () => f.onClose(), A ?? !1);
                let _ = c.useMemo(() => [...eG.oz], []);
                return x
                    ? null
                    : (0, r.jsx)(ei.M, {
                          loadId: h,
                          activeSubscription: v,
                          initialPaymentSourceId: p,
                          stepConfigs: P,
                          skuIDs: _,
                          isGift: A,
                          defaultPlanId: y ?? l,
                          referralCode: i,
                          referralTrialOfferId: a,
                          unifiedCheckoutFlow: el.C.PREMIUM_CHECKOUT,
                          tenantParamsMap: t,
                          children: (0, r.jsx)(u.Qt, { confirmationFooter: n, children: S }),
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
                    eD.A.isLoadedForPremiumSKUs() || nG.h.wait(() => (0, io.zS)());
                }, []);
                let {
                        selectedSkuId: u,
                        selectedPlanId: d,
                        purchaseState: p,
                    } = (0, E.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        selectedPlanId: e.selectedPlanId,
                        purchaseState: e.purchaseState,
                    })),
                    m = (0, ea.s2)(),
                    { isGift: h, giftRecipient: C } = (0, nw.Pv)(),
                    f = (0, lZ.Wh)({ location: "PremiumPaymentModalRenderer" }),
                    S = (0, iu.p)("PremiumPaymentModalRenderer"),
                    y = m === o.pn.CONFIRM && f && (0, l$.M)({ isGift: h, giftRecipient: C, selectedPlanId: d }),
                    A = l5(h, u),
                    I = p === ed.h.PURCHASING;
                return (0, r.jsx)(im.A, {
                    isConfirmationStep: m === o.pn.CONFIRM && null == s && null == a,
                    isEligibleForWowMoment: A,
                    shouldPrefetchWowMoment: I,
                    children: n({
                        ...t,
                        onClose: i,
                        analyticsSubscriptionType: eB.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        disableDefaultSlideTransformStyling: y,
                        modalSizeOverride: S ? "md" : t.modalSizeOverride,
                        planGroup: eG.LE,
                        subscriptionTier: l,
                    }),
                });
            },
            tenantAnalyticsLocation: a.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(ii, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var rf = n(143582),
    rS = n(241524),
    rE = n(19311),
    ry = n(4126);
let rA = "(max-width: 485px)";
var rI = n(875632),
    rg = n(938430);
function rP(e) {
    let { step: t, onClose: n } = e,
        l = (0, rS.A)("(max-height: 450px)");
    return t === o.pn.CONFIRM || t === o.pn.BENEFITS
        ? (0, r.jsx)("div", {})
        : (0, r.jsxs)("div", {
              className: e3()(rI.N1, nb.G),
              children: [
                  !l &&
                      (0, r.jsx)("div", {
                          className: rI.oZ,
                          "aria-hidden": "true",
                          children: (0, r.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: rI.F0,
                          }),
                      }),
                  (0, r.jsx)(nx.D, {
                      className: rI.G3,
                      onClick: () => n(),
                      "aria-label": H.intl.string(H.t.cpT0Cq),
                      children: (0, r.jsx)(n_.P, { size: "md", color: "currentColor", className: rI.ut }),
                  }),
              ],
          });
}
function rv(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: l, application: i, title: a, subtitle: s, description: o } = e;
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: rI.RP,
              children: (0, r.jsxs)(ry.$K, {
                  children: [
                      (0, r.jsx)(ry.KF, { application: i, asset: t }),
                      (0, r.jsx)(ry.kj, { children: a }),
                      (0, r.jsx)(ry.ri, {}),
                      (0, r.jsx)(ry.Mx, { title: s, description: o }),
                      (0, r.jsx)(ry.iH, { applicationId: i.id, storeListingBenefits: n, skuBenefits: l }),
                  ],
              }),
          });
}
function rx(e) {
    let { tierName: t, onConfirm: n, subscription: l } = e;
    return (0, r.jsxs)("div", {
        className: rI.NV,
        children: [
            (0, r.jsx)("img", { src: rg, alt: "", width: 300, height: 126 }),
            (0, r.jsx)(tt.D, {
                className: rI.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: H.intl.format(H.t.wLFT6z, { tier: t }),
            }),
            (0, r.jsx)(y.E, {
                className: rI.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: H.intl.format(H.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, r.jsx)(eV.UX, {
                children: (0, r.jsx)(rE.Ay, {
                    onPrimary: n,
                    primaryCTA: rE.ti.CONTINUE,
                    primaryText: H.intl.string(H.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var r_ = n(967198);
let [rT, rN] = (0, d.A)();
function rb(e) {
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
    return (0, r.jsx)(rT.Provider, { value: s, children: l });
}
n(938796);
var rj = n(266060),
    rR = n(163437),
    rO = n(701273),
    rM = n(859860);
function rL(e) {
    let { onConfirm: t, onCancel: n, title: l, subtitle: i, confirmCta: a, showOpenDiscord: s = !0 } = e;
    return (0, r.jsxs)("div", {
        className: rM.RP,
        children: [
            (0, r.jsx)(tt.D, { className: rM.RS, variant: "heading-lg/extrabold", children: l }),
            null != i
                ? (0, r.jsx)(y.E, { className: rM.sT, variant: "text-sm/normal", color: "text-default", children: i })
                : null,
            (0, r.jsxs)("div", {
                className: rM.UD,
                children: [
                    s &&
                        (0, r.jsx)(eJ.$, {
                            variant: "primary",
                            text: H.intl.string(H.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, rO.A)("application_sub_mweb_success_modal"),
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
function rk(e) {
    let { onConfirm: t, tierName: n, subscription: l } = e;
    return (0, r.jsxs)("div", {
        className: rM.RP,
        children: [
            (0, r.jsx)(tt.D, {
                className: rM.RS,
                variant: "heading-lg/extrabold",
                children: H.intl.format(H.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(y.E, {
                className: rM.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: H.intl.format(H.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: rM.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: rM.__invalid_openDiscordButton,
                        children: (0, r.jsx)(eJ.$, {
                            variant: "primary",
                            text: H.intl.string(H.t["8L5bZG"]),
                            onClick: () => (0, rO.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(eJ.$, { variant: "secondary", text: H.intl.string(H.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function rw(e) {
    let { handleStepChange: t, handleClose: n } = e,
        l = (0, rj.K)(),
        { subscriptionMetadataRequest: i } = rN(),
        { application: a } = (0, nZ.V)(),
        s = (0, nz.S3)(),
        u = (0, rS.A)(rA),
        d = (0, D.bG)([eh.A], () => eh.A.getGuild(i?.guild_id)),
        p = c.useCallback(() => t(o.pn.REVIEW), [t]);
    if (null == s) return null;
    let m = (0, rR.bg)(s.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eV.dZ, {
                children: u
                    ? (0, r.jsx)(rL, {
                          confirmCta: H.intl.string(H.t.PBHFSq),
                          onConfirm: p,
                          onCancel: n,
                          title: H.intl.format(H.t["6n6oXA"], { tier: s.name }),
                          subtitle: m
                              ? H.intl.string(H.t.lzAoKB)
                              : H.intl.formatToPlainString(H.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(rv, {
                          icon: l?.thumbnail,
                          storeListingBenefits: l?.benefits,
                          application: a ?? void 0,
                          title: H.intl.format(H.t.haiCxc, { tier: s.name }),
                          subtitle: m ? H.intl.string(H.t.RvtbP5) : H.intl.string(H.t.zY39Zu),
                          description: m
                              ? H.intl.formatToPlainString(H.t.QCe4rY, { applicationName: a?.name })
                              : H.intl.string(H.t.n1Pu8C),
                      }),
            }),
            !u &&
                (0, r.jsx)(eV.UX, {
                    children: (0, r.jsx)(rE.Ay, {
                        onBack: n,
                        backText: H.intl.string(H.t.TQBY1J),
                        onPrimary: p,
                        primaryCTA: rE.ti.CONTINUE,
                        primaryText: H.intl.string(H.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var rD = n(21161);
function rU(e) {
    let t,
        n,
        { handleClose: l, onSubscriptionConfirmation: i } = e,
        a = (0, rj.K)(),
        { application: s } = (0, nZ.V)(),
        { readySlideId: u, updatedSubscription: d } = (0, E.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        p = (0, nz.S3)(),
        m = (0, rS.A)(rA),
        { createMultipleConfettiAt: h } = c.useContext(rD.x),
        C = p?.name ?? "";
    function f() {
        (l(), i?.());
    }
    let S = u === o.pn.CONFIRM,
        y = (0, rR.bg)(p?.flags ?? 0),
        A =
            null != a && a.benefits.length > 0
                ? H.intl.formatToPlainString(H.t["+IQQVM"], { benefitCount: a.benefits.length })
                : null,
        { showBenefitsFirst: I } = rN();
    return (
        I
            ? (t = m
                  ? (0, r.jsx)(rk, { tierName: C, onConfirm: f, subscription: d })
                  : (0, r.jsx)(rx, { tierName: C, onConfirm: f, subscription: d }))
            : m
              ? (t = (0, r.jsx)(rL, {
                    title: H.intl.format(H.t.ea6tZr, { tierName: C }),
                    subtitle:
                        null != a && a.benefits.length > 0
                            ? H.intl.formatToPlainString(H.t.HNepft, { benefits: A })
                            : null,
                    onConfirm: f,
                    confirmCta: H.intl.string(H.t.nlkywz),
                }))
              : ((t =
                    null != a && null != s
                        ? (0, r.jsx)(rv, {
                              icon: a.thumbnail,
                              storeListingBenefits: a.benefits,
                              application: s,
                              title: H.intl.format(H.t["Q+qktS"], { tier: C }),
                              subtitle: H.intl.string(H.t.ECKxXU),
                              description: y
                                  ? H.intl.format(H.t["MAtQk/"], { applicationName: s?.name })
                                  : H.intl.format(H.t.vHkMF4, { tier: C }),
                          })
                        : (0, r.jsx)(e_.A, {})),
                (n = (0, r.jsx)(rE.Ay, {
                    onPrimary: f,
                    primaryCTA: rE.ti.CONTINUE,
                    primaryText: H.intl.string(H.t["JtWl+a"]),
                }))),
        c.useEffect(() => {
            nq.Ay.useReducedMotion && S && h(window.innerWidth / 2, window.innerHeight / 2);
        }, [h, S]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(eV.dZ, { children: [(0, r.jsx)(n1.A, {}), t] }),
                null != n && (0, r.jsx)(eV.UX, { children: n }),
            ],
        })
    );
}
function rG(e) {
    let { initialPlanId: t, setAnalyticsData: n } = e,
        {
            selectedSkuId: l,
            setSelectedSkuId: i,
            setSelectedPlanId: a,
            priceOptions: s,
        } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        {
            hasFetchedRelatedSubscriptionPlans: u,
            subscriptionPriceOptionsLoading: d,
            displayCurrency: p,
        } = (0, ex.Jn)(),
        { setSubscriptionMetadataRequest: m, guildId: h, showBenefitsFirst: C } = rN(),
        f = (0, eP.Hp)(),
        S = (0, eT.A)(),
        y = (0, ea.qv)(),
        { isGift: A } = (0, nw.Pv)(),
        I = C ? o.pn.BENEFITS : o.pn.REVIEW,
        [g, P] = c.useState(!S || !u || d);
    return (c.useEffect(() => {
        P(!S || !u || d);
    }, [d, u, S]),
    c.useEffect(() => {
        null != h && m({ guild_id: h });
    }, [h, m]),
    c.useEffect(() => {
        a(t);
        let e = null != t ? eD.A.get(t) : null;
        g ||
            f ||
            (n((t) => {
                let n = null != e ? (0, k.y8)(e.id, !1, A, { paymentSourceId: s.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: p };
            }),
            null != e && (i(e?.skuId), y(I)));
    }, [f, t, A, g, s, p, l, n, a, i, y, I]),
    g)
        ? (0, r.jsx)(e_.A, {})
        : f
          ? (0, r.jsx)(ev.oO, {})
          : null;
}
var rF = n(786567),
    rB = n(918786),
    rH = n(639574);
let rW = (e) => {
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
    rY = {
        CHECKOUT_FLOW: el.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(rG, { ...e }) },
        CustomHeaderComponent: function (e) {
            let { step: t, onClose: n } = e,
                l = c.useCallback(() => n(!1), [n]);
            return (0, r.jsx)(rP, { step: t, onClose: l });
        },
        STEPS_BEFORE_CHECKOUT: [
            {
                key: o.pn.BENEFITS,
                renderStep: (e) => (0, r.jsx)(rw, { ...e }),
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
                        activeSubscription: p,
                        selectedPlanId: m,
                    } = (0, E.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        contextMetadata: e.contextMetadata,
                        purchaseError: e.purchaseError,
                        activeSubscription: e.activeSubscription,
                        selectedPlanId: e.selectedPlanId,
                    })),
                    { subscriptionMetadataRequest: h, showBenefitsFirst: C } = rN(),
                    y = C ? o.pn.BENEFITS : void 0,
                    A = (0, S.A)(),
                    I = (0, nz.S3)();
                if (null == A)
                    throw new f.v({
                        message:
                            "ApplicationPaymentReviewStep: expected plan to be selected, but selected plan is null",
                        extraSentryInformation: { selectedPlan: A, selectedPlanId: m },
                    });
                let g = c.useRef(null),
                    P = (0, rR.bg)(I?.flags ?? 0);
                c.useEffect(() => {
                    null != d && null != g.current && g.current.scrollIntoView({ behavior: "smooth" });
                }, [d]);
                let v = c.useCallback(() => {
                    t(o.pn.ADD_PAYMENT_STEPS);
                }, [t]);
                return s === ed.h.PURCHASING
                    ? (0, r.jsx)(e_.A, {})
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(eV.dZ, {
                                  children:
                                      null == p
                                          ? (0, r.jsx)(rH._, {
                                                planGroup: n,
                                                handlePaymentSourceAdd: v,
                                                metadata: P ? void 0 : h,
                                            })
                                          : (0, r.jsx)(rB.A, {
                                                handlePaymentSourceAdd: v,
                                                planGroup: n,
                                                hasOpenInvoice: null != l,
                                            }),
                              }),
                              (0, r.jsx)(eV.UX, {
                                  children: (0, r.jsx)(rF.U, {
                                      resolveTenantReviewButtonProps: rW,
                                      onBack: () => null != y && t(y),
                                      handleStepChange: t,
                                      postPurchaseStep: o.pn.CONFIRM,
                                      analyticsLocation: a,
                                      baseAnalyticsData: i,
                                      flowStartTime: u.startTime,
                                      planGroup: n,
                                      openInvoiceId: l,
                                      metadata: P ? void 0 : h,
                                      backButtonEligible: !!C || void 0,
                                      disablePurchase: h?.guild_id == null && !P,
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
                return (0, r.jsx)(rb, {
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
                            (r(e),
                                e &&
                                    null != i &&
                                    (nd.hP(),
                                    (0, rf.f5)(i),
                                    null != a && a(),
                                    null != i && (l || r_.A.getGuildId() !== i) && (0, lk.pX)(eB.BVt.CHANNEL(i))));
                        },
                        [r, a, l, i],
                    );
                return n({ ...t, onClose: s, forceNewPaymentModal: !0 });
            },
            tenantAnalyticsLocation: a.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(rU, { ...e }) },
    };
var rV = n(341774),
    rK = n(869038),
    rq = n(852218),
    rZ = n(7133),
    rz = n(83617);
let [r$, rQ] = (0, d.A)();
function rJ(e) {
    let { code: t, onClose: n, children: l } = e,
        i = (0, D.bG)([ef.A], () => ef.A.getMostRecentPremiumTypeSubscription()),
        a = (0, D.bG)([ef.A], () => ef.A.hasFetchedMostRecentPremiumTypeSubscription()),
        s = (0, D.bG)([ef.A], () => ef.A.getPremiumTypeSubscription()),
        [u, d] = c.useState(!1),
        [p, m] = c.useState(null),
        [h, C] = c.useState(null),
        [f, S] = c.useState(!1),
        [y, A] = c.useState(!1);
    c.useEffect(() => {
        (u ||
            (0, l9.GM)(t, !1, !0)
                .then((e) => {
                    let t = rZ.A.createFromServer(e);
                    (m(t), d(!0), S(t.promotion?.promotionType === rq.pt.THIRD_PARTY_DIRECT_FULFILLMENT));
                })
                .catch((e) => {
                    (C(e), d(!0));
                }),
            a || (0, nd.I8)());
    }, [t, a, u]);
    let I = (0, eb.p)(),
        { paymentSources: g, paymentSourceId: P, paymentAuthenticationState: v, setIsSubmittingCurrentStep: x } = I,
        _ = (0, ea.qv)(),
        T = (0, ea.s2)(),
        {
            setPurchaseState: N,
            setPurchaseError: b,
            purchaseState: j,
            contextMetadata: R,
            renewalInvoicePreview: O,
        } = (0, E.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            purchaseState: e.purchaseState,
            contextMetadata: e.contextMetadata,
            renewalInvoicePreview: e.checkoutInvoicePreview,
        })),
        { displayCurrency: L } = (0, ex.Jn)(),
        k = p?.subscriptionPlan,
        w = p?.promotion,
        U = p?.subscriptionTrial,
        G = null != k ? (0, rz._w)(k, P, !1) : [],
        F = O?.currency ?? L ?? G[0],
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
            let e = (0, M.W)(g, P);
            if (null == e) return !1;
            (x(!0), b(null), N(ed.h.PURCHASING));
            try {
                return (
                    await rK.Ay.redeemGiftCode({ code: t, options: { paymentSource: e } }),
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
                x(!1);
            }
        }, [H, t, P, g, x, b, N]),
        V = c.useRef(!1),
        K = c.useCallback(() => {
            V.current ||
                ((V.current = !0),
                Y()
                    .then((e) => {
                        _(e ? o.pn.CONFIRM : o.pn.REVIEW);
                    })
                    .finally(() => {
                        V.current = !1;
                    }));
        }, [Y, _]);
    return (
        (0, em.QR)(v),
        (0, em.b)(T, v, _, N, !0, K),
        (0, r.jsx)(r$.Provider, {
            value: {
                code: t,
                giftCode: p,
                plan: k,
                promotion: w,
                trial: U,
                isDirectFulfillment: f,
                hasResolvedGiftCode: u,
                giftCodeResolveError: h,
                hasFetchedMostRecentPremiumTypeSubscription: a,
                recentSubscription: i,
                premiumSubscription: s,
                addPaymentMethodStepState: I,
                priceOptions: B,
                analyticsData: H,
                handleClose: W,
                redeemPromotion: Y,
                confirmedUpgrade: y,
                setConfirmedUpgrade: A,
            },
            children: l,
        })
    );
}
var rX = n(830215),
    r0 = n(264779),
    r2 = n(314019),
    r1 = n(554632);
function r3(e) {
    let { user: t, code: n, className: l } = e;
    return (0, r.jsx)(y.E, {
        className: e3()(l, r2.iZ),
        variant: "text-md/normal",
        children: H.intl.format(H.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, r.jsx)(
                    iW.eu,
                    {
                        className: r2.FL,
                        size: ln._3.SIZE_24,
                        src: t.getAvatarURL(null, 24),
                        "aria-label": lI.Ay.getUserTag(t, { decoration: "never" }),
                    },
                    n,
                );
            },
            tag: lI.Ay.getUserTag(t),
            logoutHook: () => {
                rX.A.logout("inbound_promotion_redemption_modal", eB.BVt.BILLING_PROMOTION_REDEMPTION(n));
            },
        }),
    });
}
function r4(e) {
    let { promotion: t, code: n, isDirectFulfillment: l } = e,
        i = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
        a = (0, iY.Ay)(),
        s = (0, r0.WD)(t.id, a);
    return (0, r.jsxs)("div", {
        className: r2.rN,
        children: [
            (0, r.jsxs)("div", {
                className: r2.u5,
                children: [
                    (0, r.jsx)("img", { alt: "", src: s, className: r2.hb }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(tt.D, {
                                variant: "heading-xl/bold",
                                className: r2.DD,
                                children: t.inboundHeaderText,
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-sm/normal",
                                className: r2.G3,
                                children: t.inboundBodyText,
                            }),
                        ],
                    }),
                ],
            }),
            l || null == i ? null : (0, r.jsx)(r3, { className: r2.KZ, user: i, code: n }),
        ],
    });
}
function r7(e) {
    let { title: t, bodyText: n, helpCenterLink: l, showUser: i = !1, user: a, code: s, handleClose: o } = e,
        u = c.useMemo(() => ({ text: H.intl.string(H.t.BddRzS), onClick: o }), [o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: r2.t4,
                children: [
                    (0, r.jsx)("img", { alt: "", src: r1, className: r2.M6 }),
                    (0, r.jsx)(tt.D, { variant: "heading-lg/semibold", className: r2.DD, children: t }),
                    (0, r.jsx)(y.E, { variant: "text-md/normal", className: r2.G3, children: n }),
                    null != l
                        ? (0, r.jsx)(y.E, {
                              variant: "text-md/normal",
                              className: r2.G3,
                              children: H.intl.format(H.t["4uSp2y"], { helpCenterLink: l }),
                          })
                        : null,
                    i && null != a ? (0, r.jsx)(r3, { className: r2.EF, user: a, code: s }) : null,
                ],
            }),
            (0, r.jsx)(eo.lo, { primaryButtonProps: u }),
        ],
    });
}
function r5(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            code: l,
            giftCode: i,
            plan: a,
            promotion: s,
            trial: u,
            hasResolvedGiftCode: d,
            giftCodeResolveError: p,
            hasFetchedMostRecentPremiumTypeSubscription: m,
            recentSubscription: h,
        } = rQ(),
        C = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
        f = (0, eP.Hp)(),
        S = !d || !m,
        E = (function (e) {
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
        })({ user: C, giftCode: i, giftCodeResolveError: p, recentSubscription: h, plan: a, promotion: s, trial: u });
    return (c.useEffect(() => {
        S ||
            eN.default.track(eB.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
                is_eligible: null == E && !f,
                error_code: null != E ? E.errorCode : f ? eG.JR.BLOCKED_PAYMENT : null,
                promotion_id: i?.promotion?.id,
            });
    }, [S, E, f, i]),
    c.useEffect(() => {
        S || null != E || f || t(o.pn.PROMOTION_INFO);
    }, [S, E, f, t]),
    S)
        ? (0, r.jsx)(e_.A, {})
        : null != E
          ? (0, r.jsx)(r7, {
                title: E.title,
                bodyText: E.body,
                helpCenterLink: s?.inboundHelpCenterLink ?? "",
                showUser: E.showUser,
                handleClose: n,
                user: C ?? void 0,
                code: l,
            })
          : f
            ? (0, r.jsx)(ev.oO, {})
            : null;
}
function r6(e) {
    let { plan: t, isDirectFulfillment: n, addPaymentMethodStepState: l, handleClose: i } = rQ();
    ez()(null != t, "Missing plan");
    let { paymentSources: a, paymentSourceId: s } = l,
        o = (0, M.g)(a, s);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eV.dZ, {
                children: (0, r.jsx)(l6.Ay, { hideClose: !0, planId: t.id, onClose: i, paymentSourceType: o }),
            }),
            n
                ? (0, r.jsx)(eV.UX, {
                      children: (0, r.jsx)(iP.H, {
                          actions: [{ text: H.intl.string(H.t.UQvCf7), variant: "primary", onClick: i, size: "md" }],
                      }),
                  })
                : null,
        ],
    });
}
function r8(e) {
    let { handleStepChange: t } = e,
        { promotion: n, code: l, isDirectFulfillment: i } = rQ();
    return (
        ez()(null != n, "Missing promotion"),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eV.dZ, { children: (0, r.jsx)(r4, { promotion: n, code: l, isDirectFulfillment: i }) }),
                (0, r.jsx)(eV.UX, {
                    children: (0, r.jsx)(eo.lo, {
                        primaryButtonProps: { text: H.intl.string(H.t.PDTjLN), onClick: () => t(o.pn.REVIEW) },
                    }),
                }),
            ],
        })
    );
}
var r9 = n(732159),
    ae = n(262427),
    at = n(134638);
let an = { headerBadgePreset: "trial" };
function al(e) {
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
                    ? [H.intl.string(q.default.R0cZsM), void 0]
                    : [H.intl.string(q.default.R0cZsM), (0, w.$g)(0, n.currency)],
            [n],
        );
    if (null == n) return (0, r.jsx)(v.Ed, { shouldShowUnifiedHeader: !0 });
    let p = i
            ? [{ key: "fractional-premium-notice", directContent: (0, r.jsx)(ai, { fractionalPremiumInfo: a }) }]
            : null,
        m = (0, r.jsx)(ar, { plan: t, renewalInvoicePreview: n }),
        h = (0, r.jsx)(aa, { renewalInvoicePreview: n, subscriptionTrial: l });
    return (0, r.jsx)(v.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: an,
        upperInlineNoticeProps: p,
        purchaseItemContent: m,
        subscriptionDetailsContent: h,
        invoiceSummaryContent: null,
        paymentMethodContent: s,
        legalContent: o,
        invoiceTotalDueLabel: u,
        invoiceTotalDueValue: d,
        promotionalNoticeContent:
            null != l &&
            (0, r.jsx)(ae.J, {
                text: H.intl.format(H.t.A1MiZN, { months: l.intervalCount, planName: (0, k.RH)(t.id) }),
            }),
    });
}
function ai(e) {
    let { fractionalPremiumInfo: t } = e,
        n = (0, tS.NQ)({ fractionalPremiumInfo: t, variant: tS.uA.TRIAL });
    return null != n && "" !== n ? (0, r.jsx)(e$.w, { type: "info", children: n }) : null;
}
function ar(e) {
    let { plan: t, renewalInvoicePreview: n } = e;
    return (0, r.jsx)(at._, {
        type: _.u$.PREMIUM_WITH_TRIAL,
        invoicePreview: n,
        subscriptionPlan: t,
        isPrepaidPaymentSource: !1,
    });
}
function aa(e) {
    let { renewalInvoicePreview: t, subscriptionTrial: n } = e;
    if (null == t) return (0, r.jsx)(tr.y, {});
    let l = (0, O.Gj)(null, t, n, { isSubscriptionUpdate: !1 });
    return (0, r.jsx)(G._D, { ...l, defaultExpanded: !0 });
}
let as = [...eG.oz],
    ao = [
        {
            key: o.pn.PROMOTION_INFO,
            renderStep: (e) => (0, r.jsx)(r8, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    ],
    au = {
        CHECKOUT_FLOW: el.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(r5, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
        STEPS_BEFORE_CHECKOUT: ao,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: function (e) {
                let { handleStepChange: t } = e,
                    {
                        code: n,
                        plan: l,
                        trial: i,
                        promotion: a,
                        priceOptions: s,
                        addPaymentMethodStepState: u,
                        redeemPromotion: d,
                        confirmedUpgrade: p,
                        setConfirmedUpgrade: m,
                        handleClose: h,
                    } = rQ();
                ez()(null != l && null != i, "Missing plan or trial");
                let { paymentSources: C, paymentSourceId: f, setPaymentSourceId: S, isSubmittingCurrentStep: A } = u,
                    I = (0, D.bG)([ef.A], () => ef.A.getPremiumTypeSubscription()),
                    { analyticsLocations: P } = (0, ts.Ay)(),
                    {
                        hasAcceptedTerms: v,
                        checkoutPaymentSources: x,
                        checkoutInvoicePreview: _,
                    } = (0, E.t4)((e) => ({
                        hasAcceptedTerms: e.hasAcceptedTerms,
                        checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        checkoutInvoicePreview: e.checkoutInvoicePreview,
                    })),
                    T = (0, to.A)(),
                    { immediateDelivery: N } = (0, b.U)(),
                    [j, R] = (0, td.YV)({
                        items: [{ planId: l.id, quantity: 1 }],
                        renewal: !0,
                        paymentSourceId: f,
                        code: n,
                        subscriptionId: I?.id,
                        analyticsLocations: P,
                        analyticsLocation: eB.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                    });
                (0, tu.F)(j, R);
                let L = c.useCallback(async () => {
                        function e() {
                            return t(o.pn.CONFIRM);
                        }
                        null == I || p || null == i || null == a
                            ? (await d()) && e()
                            : (0, ny.openModal)((t) => {
                                  let n;
                                  if (null == _) n = (0, r.jsx)(tr.y, { className: r2.wG });
                                  else {
                                      let e = (0, k.y8)(l.id, !1, !1, s);
                                      n = (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(y.E, {
                                                  className: r2.ex,
                                                  variant: "text-md/normal",
                                                  children: H.intl.format(H.t.DLsu0k, {
                                                      lineItemsHook: function (e, t) {
                                                          return (0, r.jsx)(
                                                              "ul",
                                                              {
                                                                  children: I.items.map((e) => {
                                                                      let t = eG.hd[e.planId],
                                                                          n = H.intl.formatToPlainString(H.t.G0EnAP, {
                                                                              quantity: e.quantity,
                                                                              lineItem: t.name,
                                                                          });
                                                                      return (0, r.jsx)(
                                                                          "li",
                                                                          { children: n },
                                                                          `${I.id}-${e.planId}`,
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
                                                  className: r2.ex,
                                                  variant: "text-sm/normal",
                                                  children: H.intl.format(H.t.KHvyu5, {
                                                      newPlanName: eG.hd[l.id].name,
                                                      trialMonths: i.intervalCount,
                                                      helpCenterLink:
                                                          a.inboundHelpCenterLink ?? tg.A.getArticleURL(eB.MVz.BILLING),
                                                      planPrice: (0, w.$g)(e.amount, _.currency),
                                                  }),
                                              }),
                                          ],
                                      });
                                  }
                                  return (0, r.jsx)(r9.u, {
                                      onConfirm: async () => {
                                          (m(!0), (await d()) && e());
                                      },
                                      title: H.intl.string(H.t.MaZ28z),
                                      cancelText: H.intl.string(H.t["ETE/oC"]),
                                      confirmText: H.intl.string(H.t["wfx/Hp"]),
                                      ...t,
                                      variant: "primary",
                                      children: n,
                                  });
                              });
                    }, [t, I, p, i, a, l, s, _, d, m]),
                    U = (0, tL.iB)({
                        checkoutPaymentSources: x,
                        paymentSourceId: f,
                        location: "InboundPromotionReviewStep",
                    }),
                    F = (0, ek.Y)(),
                    B = (0, M.W)(C, f),
                    W = c.useMemo(
                        () => ({
                            prependOption:
                                0 === Object.keys(C).length ? { label: H.intl.string(H.t.iA5vA1), value: null } : null,
                            isTrial: !0,
                        }),
                        [C],
                    );
                if (null != R && null == _)
                    return (0, r.jsx)(r7, {
                        title: H.intl.string(H.t.ARIsMA),
                        bodyText: H.intl.string(H.t["3u+6q7"]),
                        helpCenterLink: a?.inboundHelpCenterLink ?? "",
                        handleClose: h,
                        user: void 0,
                        code: n,
                    });
                if (!F || null == _) return (0, r.jsx)(tr.y, {});
                let Y = (0, r.jsx)(g.N, {
                        setPaymentSourceId: S,
                        paymentSourceId: f,
                        location: "InboundPromotionReview",
                        label: H.intl.string(H.t["mmDvV+"]),
                        additionalPaymentSourceDropdownProps: W,
                        onPaymentSourceAdd: () => t(o.pn.ADD_PAYMENT_STEPS),
                        hideCurrencySelect: !0,
                    }),
                    V = (0, tU.de)({ renewalInvoice: _, isSubscriptionUpdate: !1 }),
                    { renewalPrice: K, multiPeriodDiscountAttributes: q } = (0, O.QM)(_, l, {
                        discountOffer: null,
                        subscriptionTrial: i,
                    }),
                    Z = H.intl.formatToPlainString(H.t.BQPav6, { planPremiumType: k.Ay.getDisplayName(l.id) }),
                    z = (0, r.jsx)(G._P, {
                        variant: {
                            type: G.I0.SubscriptionTrial,
                            purchaseButtonText: Z,
                            totalDue: 0,
                            renewalPrice: K,
                            currency: _.currency,
                            interval: l.interval,
                            intervalCount: l.intervalCount,
                            startDate: V,
                            multiPeriodDiscountAttributes: q,
                        },
                        paymentSourceType: (0, M.W)(C, f)?.type ?? null,
                        immediateDelivery: N,
                    }),
                    $ = null;
                return (
                    null == B ? ($ = H.intl.string(H.t.L7jbQV)) : v || ($ = H.intl.string(H.t.XdvBLS)),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(eV.dZ, {
                                children: [
                                    (0, r.jsx)(n1.A, {}),
                                    (0, r.jsx)(al, {
                                        plan: l,
                                        renewalInvoicePreview: _,
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
                                        text: Z,
                                        tooltipText: $ ?? void 0,
                                        disabled: null == B || !B.canRedeemTrial() || U || !v,
                                        loading: A,
                                        onClick: () => {
                                            if (null != B && v) return L();
                                        },
                                        variant: (0, rE.CY)(rE.ti.PURCHASE),
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
                    s = (0, D.bG)([ef.A], () => ef.A.getPremiumTypeSubscription());
                return (0, r.jsx)(ei.M, {
                    activeSubscription: s,
                    stepConfigs: n,
                    skuIDs: as,
                    loadId: l,
                    unifiedCheckoutFlow: el.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
                    children: (0, r.jsx)(u.Qt, { children: (0, r.jsx)(rJ, { code: t, onClose: i, children: a }) }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
                return n({ ...t, shakeWhilePurchasing: !0, tenantManagesPaymentAuth: !0 });
            },
        },
        CustomHeaderComponent: function (e) {
            let { step: t } = e,
                { plan: n, handleClose: l } = rQ(),
                i = (0, E.t4)((e) => e.purchaseState);
            return (0, r.jsx)(rV.A, {
                enablePremiumBrandRefresh: !0,
                forceBrandRefreshHeader: !0,
                premiumType: n?.premiumSubscriptionType ?? eG.PremiumTypes.TIER_2,
                className: r2.X9,
                currentStep: t,
                purchaseState: i,
                hideCloseButton: !0,
                onClose: l,
            });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(r6, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    };
var ac = n(694306);
function ad(e) {
    let { handleClose: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        { application: l } = (0, nZ.V)(),
        i = (0, nz.gU)(),
        { isGift: a, giftRecipient: s } = (0, nw.Pv)();
    (ez()(null != n, "Expected selectedSkuId"), ez()(null != l, "Expected application"));
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
            (0, r.jsx)(n1.A, {}),
            (0, r.jsxs)("div", {
                className: ac.EL,
                children: [
                    (0, r.jsx)(tt.D, { variant: "heading-xxl/bold", className: ac.RS, children: "Success!" }),
                    (0, r.jsx)(y.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: ac.yF }),
                    (0, r.jsx)(eJ.$, { onClick: t, text: H.intl.string(H.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var ap = n(67480),
    am = n(328968),
    ah = n(371794),
    aC = n(78741);
o.pn.GIFT_CUSTOMIZATION;
let af = {
    CustomHeaderComponent: function (e) {
        let { step: t, onClose: n } = e,
            l = c.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(rP, { step: t, onClose: l });
    },
    CHECKOUT_FLOW: s.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, nw.Pv)(),
                i = (0, E.t4)((e) => e.selectedSkuId),
                a = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
                o = (0, D.bG)([ap.A], () => (null != i ? ap.A.get(i) : null), [i]),
                u = lb(),
                d = (0, D.bG)([am.A], () => (null != i ? am.A.getForSKU(i) : null), [i]),
                p =
                    d?.headerBackground != null && o?.applicationId != null
                        ? (0, ah.YE)(o.applicationId, d.headerBackground, 256)
                        : void 0;
            async function m(e, t) {}
            let h = null == l || l.id === a?.id || t.length > eG.Jo,
                C = c.useMemo(() => ({ disabled: h }), [h]);
            return (0, r.jsx)(nk.M, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: s.X.TWO_COLUMN,
                renderLeftColumn: function () {
                    return (0, r.jsxs)("div", {
                        className: aC.P6,
                        children: [
                            o?.name != null &&
                                (0, r.jsx)(tt.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != p && (0, r.jsx)("img", { src: p, alt: o?.name ?? "", className: aC.LC }),
                        ],
                    });
                },
                renderRightColumn: function () {
                    return (0, r.jsxs)("div", {
                        className: aC.P6,
                        children: [
                            (0, r.jsx)(lT, { recipients: u, selectedSkuId: i, validateSelectedGift: m }),
                            (0, r.jsx)(lO.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: aC.iX,
                                innerClassName: aC.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: C,
            });
        },
        [o.pn.REVIEW]: nE.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(ad, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: a.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var aS = n(429913),
    aE = n(733391),
    ay = n(871123),
    aA = n(26594),
    aI = n(510022),
    ag = n(317560),
    aP = n(275256),
    av = n(910200),
    ax = n(818189);
function a_(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, ts.Ay)(),
        { selectedSkuId: l, entitlementsGranted: i } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, nZ.V)(),
        s = (0, nz.gU)(),
        { isGift: o, giftRecipient: u } = (0, nw.Pv)();
    (ez()(null != l, "Expected selectedSkuId"), ez()(null != a, "Expected application"));
    let d = s[l];
    ez()(null != d, "Expected sku");
    let p = i.find((e) => e.sku_id === l),
        m = (0, aA.G)(p, { isGift: o });
    return (c.useEffect(() => {
        o || ((0, ag.j)(), t(), (0, aI.n)({ sku: d, application: a, analyticsLocations: n, entitlement: p }));
    }, [o, d, a, t, n, p]),
    o)
        ? (0, r.jsxs)(eV.dZ, {
              children: [
                  (0, r.jsx)(n1.A, {}),
                  (0, r.jsxs)("div", {
                      className: ax.EL,
                      children: [
                          (0, r.jsx)("div", {
                              className: ax.KD,
                              children: (0, r.jsx)(aP.default, {
                                  imageUrl: (0, ay.fq)(d) ?? void 0,
                                  backgroundImageUrl: (0, ay.xf)(d),
                                  altText: d.name,
                                  rewardGraphic: m?.graphic,
                              }),
                          }),
                          (0, r.jsx)(tt.D, {
                              variant: "heading-xl/semibold",
                              className: ax.RS,
                              children: H.intl.string(H.t["5glWta"]),
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-md/normal",
                              children: H.intl.formatToPlainString(H.t["2VjPTw"], {
                                  itemName: d.name,
                                  giftRecipient: u?.username ?? "your recipient",
                              }),
                          }),
                          null != m &&
                              (0, r.jsx)("div", {
                                  className: ax.Is,
                                  children: (0, r.jsx)(av.O0, { Icon: m.Icon, text: m.text }),
                              }),
                          (0, r.jsx)("div", {
                              className: ax.UD,
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
var aT = n(889137),
    aN = n(742158),
    ab = n(198052),
    aj = n(354972),
    aR = n(650588),
    aO = n(993046),
    aM = n(763827),
    aL = n(403362),
    ak = n(832163),
    aw = n(2157),
    aD = n(44724),
    aU = n(980094),
    aG = n(366523),
    aF = n(806931),
    aB = n(733211);
function aH(e) {
    let { handleClose: t, sku: n, application: l } = e,
        i = c.useCallback(() => {
            (0, aD.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        a = c.useCallback(() => {
            t();
            let e = ak.A.getStorefrontState(n.applicationId)?.activePage;
            (0, ay.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: l?.guildId,
                skuId: n.id,
            }) ||
                ((0, ny.closeAllModals)(),
                (0, aD.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, l]);
    return (0, r.jsx)("div", {
        className: aB.$O,
        children: (0, r.jsx)(eX.Q, {
            text: H.intl.string(H.t.ImioFL),
            onMouseDown: i,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let aW = {
    CHECKOUT_FLOW: s.C.SLAYER_STOREFRONT_CHECKOUT,
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
                            emojiConfetti: p,
                            soundEffect: m,
                            setEmojiConfetti: h,
                            setSoundEffect: C,
                            giftingOrigin: f,
                            additionalUserIds: S,
                        } = (0, nw.Pv)(),
                        A = (0, E.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, nZ.V)(),
                        g = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
                        P =
                            ((t = g?.id),
                            (n = lb()),
                            (l = (function (e) {
                                let t = (0, D.bG)([aM.A], () => (aM.A.isConnected() ? aM.A.getChannelId() : null)),
                                    [n, l] = c.useState([]);
                                return (
                                    c.useEffect(() => {
                                        let n = null != t ? ab.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, aF.Xw)(t) && !(0, aF.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        (i.sort((e, t) =>
                                            (0, aF.Ay)(e) && !(0, aF.Ay)(t)
                                                ? -1
                                                : (0, aF.Ay)(t) && !(0, aF.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user)));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (i = (0, D.yK)([F.default], () => S?.map(F.default.getUser).filter(aL.Vq) ?? [], [S])),
                            c.useMemo(
                                () =>
                                    lv().uniqWith(
                                        [...(null != d ? [d] : []), ...i, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, i, l, n],
                            )),
                        v = (0, D.bG)([ap.A], () => (null != A ? ap.A.get(A) : null), [A]),
                        { userPrice: x } = (0, aO.CD)({ sku: v, priceSetAssignmentPurchaseType: eB.lid.GIFT }),
                        _ = (0, aw.D)({ surface: "gift_customization", applicationId: I?.id, skuId: v?.id }),
                        T = (0, ay.fq)(v),
                        N = (0, ay.xf)(v);
                    async function b(e, t) {}
                    function j(e) {
                        null != C && C(null == e ? void 0 : e);
                    }
                    function R() {
                        return (0, r.jsxs)("div", {
                            className: aB.mT,
                            children: [
                                null != T &&
                                    (0, r.jsx)(aG.A, {
                                        containerClassName: aB.T3,
                                        cardImage: T,
                                        cardBackgroundImage: N,
                                        altText: v?.name ?? "",
                                        shape: "square",
                                    }),
                                (0, r.jsxs)("div", {
                                    className: aB._T,
                                    children: [
                                        (0, r.jsx)(aR.A, { sound: m, onSelect: j }),
                                        (0, r.jsx)(aj.A, {
                                            setEmojiConfetti: h,
                                            emojiConfetti: null == p ? void 0 : p,
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }
                    function O() {
                        return (0, r.jsxs)("div", {
                            className: aB.Tc,
                            children: [
                                null != d && (f === eG.vQ.USER_PROFILE_WISHLIST || f === eG.vQ.DM_CHANNEL_WISHLIST)
                                    ? (0, r.jsx)(lL.Z, { giftRecipient: d })
                                    : (0, r.jsx)(lT, { selectedSkuId: A, validateSelectedGift: b, recipients: P }),
                                (0, r.jsx)(lO.A, {
                                    onTextChange: (e) => u?.(e),
                                    pendingText: o,
                                    currentText: o,
                                    disableThemedBackground: !0,
                                    className: aB.iX,
                                    innerClassName: aB.pt,
                                }),
                                null == v
                                    ? null
                                    : (0, r.jsxs)("div", {
                                          className: aB.AN,
                                          children: [
                                              (0, r.jsx)(aN.z, {
                                                  className: aB.jr,
                                                  children: H.intl.string(H.t.PpoJzt),
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: aB.Wx,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: aB.Xb,
                                                          children:
                                                              null != v &&
                                                              null != T &&
                                                              (0, r.jsx)(aG.A, {
                                                                  containerClassName: aB.Iy,
                                                                  cardImage: T,
                                                                  cardBackgroundImage: N,
                                                                  altText: v.name,
                                                                  shape: "square",
                                                              }),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                          className: aB.vz,
                                                          children: [
                                                              null != I && (0, r.jsx)(aU.Q, { application: I }),
                                                              (0, r.jsx)(y.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: v.name,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, r.jsx)(y.E, { variant: "text-md/semibold", children: x }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                null != v &&
                                    (0, ay.Ri)(v) &&
                                    (0, r.jsx)(e$.w, { type: "info", children: H.intl.string(H.t.lORYb6) }),
                                null != _ &&
                                    (0, r.jsx)(av.O0, {
                                        Icon: _.Icon,
                                        text: _.text,
                                        endDatetime: _.endsAt,
                                        tooltip: _.tooltip,
                                    }),
                                null != v && (0, r.jsx)(aH, { handleClose: s, sku: v, application: I }),
                            ],
                        });
                    }
                    return {
                        renderStepBody: function () {
                            return (0, r.jsxs)("div", { className: aB.Du, children: [R(), O()] });
                        },
                        getLeftColumnComponent: R,
                        getRightColumnComponent: O,
                        onStepChange: a,
                        onBackClick: s,
                        disabled: null == d || d.id === g?.id || o.length > eG.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = c.useMemo(() => ({ disabled: i }), [i]);
            return (0, r.jsx)(nk.M, {
                paymentModalStepProps: e,
                layout: s.X.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: a,
            });
        },
        [o.pn.REVIEW]: nE.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(a_, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: l, applicationId: i, isGift: a, skuId: s, ...o } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, aS.h)(t);
                    c.useEffect(() => {
                        null == l || null == n || ap.A.isFetching(n) || null != ap.A.get(n) || (0, aE.Pp)(l.id, n);
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
            n = (0, aT.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => H.intl.string(H.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => H.intl.string(H.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(nL.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var aY = n(977445),
    aV = n(52635),
    aK = n(211287),
    aq = n(132500),
    aZ = n(623373),
    az = n(739508),
    a$ = n(310829),
    aQ = n(715054);
(0, aq.A)();
var aJ = n(457008),
    aX = n(145659);
n(322076);
var a0 = n(318254),
    a2 = n(132198),
    a1 = n(120992),
    a3 = n(270927),
    a4 = n(319820),
    a7 = n(831123);
function a5(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: l, isSocialLayerGameItem: i } = (0, a4.AO)({ sku: t }),
        a = (0, a3.oO)(l);
    i ? (a = H.intl.string(q.default.qwSlCO)) : (0, aZ.Ab)(l) && (a = H.intl.string(H.t["0TmQRG"]));
    let s = (0, a3.dL)(t),
        o = (0, nH.EZ)(t.id) ? a2.m[t.id].render({ className: a7.$ }) : (0, r.jsx)(tw.WH, { sku: t, product: l });
    return (0, r.jsx)(tw.f7, { label: s, description: a, graphic: o, price: null != n ? `${n}` : "", PriceIcon: a0.C });
}
function a6(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, a1.c)({ applicationId: (0, a$.P)(t), skuIDs: [t] });
    let l = (0, nK.bG)([ap.A], () => ap.A.get(t), [t]);
    return null == l
        ? (0, r.jsx)(tr.y, { type: tr.y.Type.PULSING_ELLIPSIS })
        : (0, r.jsx)(a5, { sku: l, orbPriceAmount: n });
}
function a8(e) {
    let { orbBalance: t } = e;
    return (0, r.jsx)(G.vW, { label: H.intl.string(H.t.y0WGqP), value: null != t ? `${t}` : "", Icon: a0.C });
}
function a9() {
    return H.intl.string(H.t.wmcDyu);
}
function se() {
    let { immediateDelivery: e } = (0, b.U)(),
        { skuProductLine: t, skuId: n } = sn(),
        l = a9(),
        i = (0, c.useMemo)(() => ({ type: G.I0.OrbsRedemption, purchaseButtonText: l }), [l]);
    return t === eB.EZt.SOCIAL_LAYER_GAME_ITEM
        ? (0, r.jsx)(aV.EB, { skuId: n, purchaseButtonText: l, checkoutLegalType: G.I0.OrbsGameShop })
        : (0, r.jsx)(G._P, { variant: i, paymentSourceType: null, immediateDelivery: e });
}
let st = (0, c.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    skuProductLine: null,
    skuApplicationId: void 0,
    analyticsSourceLocation: void 0,
});
function sn() {
    return (0, c.useContext)(st);
}
let sl = { payment_gateway: tG.kM.VIRTUAL_CURRENCY, currency: eB.Yri.DISCORD_ORB },
    si = {
        CHECKOUT_FLOW: s.C.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    { primaryButtonProps: n, ...l } = (function (e) {
                        let { handleStepChange: t } = e,
                            { isRedeeming: n, skuId: l, skuApplicationId: i } = sn(),
                            { enabled: a } = aK.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: s, orderOrbPriceAmount: u } = (0, E.t4)((e) => {
                                let t = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != t ? t.total : null,
                                    orderOrbPriceAmount:
                                        null != t ? t.getInvoicePreviewLineItemUnitPriceForSku(l) : null,
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
                                        skuApplicationId: a,
                                        skuProductLine: s,
                                        analyticsSourceLocation: u,
                                    } = sn(),
                                    { analyticsLocations: d } = (0, ts.Ay)(),
                                    { setPurchaseState: p, firstConstraintReasonCode: m } = (0, E.t4)((e) => ({
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    h = (0, np.gN)(),
                                    C = (0, c.useRef)(h),
                                    { emitOrbCheckoutPaymentFlowEvent: f } = (function (e) {
                                        let {
                                                skuId: t,
                                                skuApplicationId: n,
                                                skuProductLine: l,
                                                orbProductContext: i,
                                                analyticsLocations: r,
                                                analyticsSourceLocation: a,
                                            } = e,
                                            { activitySessionId: s } = (0, nZ.V)(),
                                            { hasPaymentSources: u } = (0, x.j)(),
                                            {
                                                loadId: d,
                                                startTime: p,
                                                discoverySessionId: m,
                                            } = (0, E.t4)((e) => e.contextMetadata),
                                            h = (0, np.gN)(),
                                            C = (0, c.useMemo)(
                                                () => ({
                                                    load_id: d,
                                                    discovery_session_id: m,
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
                                                    virtual_currency_balance: h,
                                                    ...(null != a && { source: a }),
                                                    ...{
                                                        payment_type: eB.frM[eB.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: aX.r.UNIFIED,
                                                        checkout_flow: el.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [d, m, s, t, n, l, r, a, i, h],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, c.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - p;
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
                                                [p, C, u],
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
                                        null !== C.current &&
                                        (f(eB.HAw.PAYMENT_FLOW_FAILED, l), (C.current = null));
                                }, [l, f]);
                                let S = (0, c.useCallback)(() => {
                                        ((C.current = h),
                                            f(eB.HAw.PAYMENT_FLOW_COMPLETED),
                                            i((e) => {
                                                (p(ed.h.COMPLETED),
                                                    t(o.pn.CONFIRM, { fulfillment: { entitlements: e } }));
                                            }));
                                    }, [i, p, h, f, t]),
                                    y = C.current ?? h,
                                    A = null != n ? n.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == n,
                                    errorMessage: (0, c.useMemo)(() => (0, aJ.$9)(l, m), [l, m]),
                                    orbPriceAmount: A,
                                    orbBalanceToDisplay: y,
                                    onClickCheckout: S,
                                };
                            })({ handleStepChange: t }),
                            f = (0, aY.uS)(i),
                            {
                                disabled: S,
                                tooltipText: y,
                                text: A,
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
                                return { disabled: i, tooltipText: r, text: a9() };
                            })({ orbBalance: m, orbPriceAmount: a ? s : p, isInTestMode: f }),
                            I = (0, c.useMemo)(
                                () => ({ onClick: h, loading: n, text: A, disabled: S, tooltipText: y }),
                                [h, n, A, S, y],
                            ),
                            g = f ? H.intl.string(H.t.OvMyMd) : null;
                        return {
                            isStepLoading: d,
                            upperInlineNoticeProps: (0, c.useMemo)(() => {
                                if (null != g || null != C) {
                                    let e = [];
                                    return (
                                        null != g &&
                                            e.push({ type: "warning", message: g, key: "test-mode-warning-notice" }),
                                        null != C &&
                                            e.push({ type: "critical", message: C, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [g, C]),
                            purchaseItemContent: (0, r.jsx)(a6, { skuId: l, orbPriceAmount: a ? u : p }),
                            paymentMethodContent: (0, r.jsx)(a8, { orbBalance: m }),
                            legalContent: (0, r.jsx)(se, {}),
                            primaryButtonProps: I,
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
                    { order: a, setOrder: s } = (0, E.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: o,
                        isRedeeming: u,
                        orbRedemptionError: d,
                        onRedeemVirtualCurrency: p,
                        skuProductLine: m,
                        skuApplicationId: h,
                    } = (function (e) {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: i, order: r } = e,
                            a = (0, D.bG)([F.default], () => k.Ay.canUseShopDiscounts(F.default.getCurrentUser())),
                            s = (0, D.bG)([ap.A], () => ap.A.get(t), [t]),
                            o = null != s ? s.productLine : null,
                            u = s?.applicationId ?? (0, a$.P)(t),
                            d = (0, aO.JL)({ sku: s }),
                            { product: p } = (0, la.q)(t),
                            m = (0, c.useMemo)(() => {
                                if (null != d) return { orbPriceAmount: d.amount };
                                if (null != p) {
                                    let e = (0, aZ.CW)({ product: p, hasShopDiscount: a });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [d, p, a]);
                        m?.orbPriceAmount == null &&
                            (0, az.hD)("Orb price not found for product", {
                                tags: { sku_id: t },
                                fingerprint: ["orb-price-not-found-for-product"],
                            });
                        let {
                                redeemVirtualCurrency: h,
                                isSubmitting: C,
                                error: f,
                            } = (0, aQ.Q)({ skuId: t, loadId: n, order: r, onSignFailure: i }),
                            S = (0, c.useCallback)(
                                (e) => {
                                    h(t, n, (n) => {
                                        (l?.({ entitlements: n, skuId: t }), e(n));
                                    });
                                },
                                [t, n, h, l],
                            );
                        return {
                            skuId: t,
                            skuProductLine: o,
                            skuApplicationId: u,
                            loadId: n,
                            orbProductContext: m,
                            onRedeemVirtualCurrency: S,
                            isRedeeming: C,
                            orbRedemptionError: f,
                        };
                    })({ skuId: t, loadId: n, order: a, onSignFailure: s }),
                    C = (0, c.useMemo)(
                        () => ({
                            orbProductContext: o,
                            isRedeeming: u,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: p,
                            skuId: t,
                            skuProductLine: m,
                            skuApplicationId: h,
                            analyticsSourceLocation: l,
                        }),
                        [o, u, d, p, t, m, h, l],
                    );
                return (0, r.jsx)(st.Provider, { value: C, children: i });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l, skuProductLine: i } = sn(),
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
                    })({ orbProductContext: l, skuProductLine: i, overrideAnalyticParams: sl });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: sl,
        },
    },
    sr = {
        [s.C.ORB_CHECKOUT]: {
            flowType: s.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: eB.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: si,
        },
        [s.C.COLLECTIBLES_CHECKOUT]: {
            flowType: s.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: eB.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: lB,
        },
        [s.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: eB.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: aW,
        },
        [s.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.PREMIUM_CHECKOUT,
            purchaseType: eB.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: rC,
        },
        [s.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            purchaseType: eB.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: au,
        },
        [s.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: eB.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: af,
        },
        [s.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: eB.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: rY,
        },
        [s.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: eB.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nM,
            flowType: s.C.GUILD_PRODUCT_CHECKOUT,
        },
        [s.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: is,
            purchaseType: eB.VVm.SUBSCRIPTION,
        },
        [s.C.GUILD_BOOST_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.GUILD_BOOST_CHECKOUT,
            purchaseType: eB.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: nS,
        },
        [s.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
            purchaseType: eB.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: ee,
        },
        [s.C.PAST_DUE_MAGIC_LINK_CHECKOUT]: { implemented: !1, flowType: s.C.PAST_DUE_MAGIC_LINK_CHECKOUT },
    };
