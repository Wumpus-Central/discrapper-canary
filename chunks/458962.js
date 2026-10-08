n.d(t, { Y: () => sC });
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
    E = n(642639),
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
    H = n(660183);
function W(e, t) {
    let { nitroPriceLabel: n, nitroPriceAmount: l, standardPriceAmount: i } = e;
    return t && null != n && null != l && null != i && l < i;
}
let V = {
    standardPriceLabel: void 0,
    nitroPriceLabel: void 0,
    standardPriceAmount: void 0,
    nitroPriceAmount: void 0,
    priceCurrency: void 0,
};
function Y(e) {
    let t = (0, S.A)(),
        { games: n } = (0, B.Y)();
    return c.useMemo(() => {
        let l, i;
        if (null == t || null == e) return V;
        let { subscriptionPlanInvoiceItem: r } = (0, L.Sb)(e, t),
            a = r?.subscriptionPlanPrice;
        if (null == a) return V;
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
var K = n(344045),
    Z = n(649975);
function q(e) {
    let { fallback: t, invoicePreview: n } = e,
        { gameName: l } = m(),
        i = (0, S.A)(),
        a = W(
            Y(n),
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
        (0, r.jsx)(G.Vm, { label: H.intl.string(Z.default.eoXh7B), lineItems: d, currency: n.currency })
    );
}
var z = n(349085),
    $ = n(219940);
function Q(e) {
    let { planName: t, invoicePreview: n } = e,
        { gameId: l, gameName: i } = m(),
        a = Y(n),
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
        V = (0, k.J$)(B),
        Y = null != h && "invoicePreview" in h ? h.invoicePreview : null,
        z = (0, r.jsx)(Q, { planName: n.name, invoicePreview: Y }),
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
            isPrepaidPaymentSource: V,
        }),
        ee = h.invoicePreview,
        et =
            (U?.discount != null && (0, L.Ro)(ee, U.discount.id)) || ee.invoiceItems.some((e) => e.discounts.length > 0)
                ? X
                : (0, r.jsx)(q, { fallback: X, invoicePreview: ee }),
        en = null;
    if (!V && _.ME.has(h.type) && "renewalInvoicePreview" in h && null != h.renewalInvoicePreview) {
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
        invoiceTotalDueLabel: H.intl.string(Z.default.R0cZsM),
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
    ep = n(240921);
let em = (0, ep.Ay)({
    name: "2026-04-boosting-pre-checkout-modal-refresh-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function eh(e) {
    return em.useConfig({ location: e }).enabled;
}
var eC = n(251913),
    ef = n(71393),
    eS = n(178368),
    eE = n(166403),
    ey = n(473145),
    eA = n(935462),
    eI = n(775602),
    eg = n(235986),
    eP = n(899343),
    ev = n(997330),
    ex = n(440242);
function e_(e) {
    let { purchaseState: t, currentStep: n, onClose: l } = e,
        [i, a] = (0, eP.f)({
            purchaseState: t,
            currentStep: n,
            initialScene: ev.V1.Scenes.ENTRY,
            purchaseScene: ev.V1.Scenes.STARS,
            errorScene: ev.V1.Scenes.ERROR,
            successScene: ev.V1.Scenes.SUCCESS,
        }),
        s = (0, D.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
    return (0, r.jsxs)(eA.rQ, {
        "data-migration-pending": !0,
        align: eg.A.Align.START,
        className: ex.wx,
        separator: !1,
        children: [
            (0, r.jsx)(ev.V1, {
                className: ex.lY,
                nextScene: i,
                onScenePlay: (e) => a(ev.V1.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: s,
            }),
            (0, r.jsx)("div", { className: ex.qd }),
            (0, r.jsx)(eA.s_, { "data-migration-pending": !0, onClick: l, className: ex.b }),
        ],
    });
}
var eT = n(636441),
    eN = n(587491),
    eb = n(285753),
    ej = n(430993),
    eR = n(86379),
    eO = n(545075),
    eM = n(655857),
    eL = n(534479),
    ek = n(121005),
    ew = n(174459),
    eD = n(280341),
    eU = n(295405);
let [eG, eF, eB] = (0, d.A)();
function eH(e) {
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
        f = (0, et.A)(() => (0, ey.D$)(eS.A.boostSlots).length),
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
    let I = (0, D.bG)([eE.A], () => eE.A.hasFetchedSubscriptions()),
        g = (0, D.bG)([eU.A], () => eU.A.defaultPaymentSourceId),
        P = null != S ? S.paymentSourceId : null,
        v = (0, eD.p)(null != P ? P : I ? g : null);
    return (0, r.jsx)(eG.Provider, {
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
var eW = n(160946),
    eV = n(253390),
    eY = n(97352),
    eK = n(615396),
    eZ = n(202541);
function eq() {
    let { activeSubscription: e, quantity: t } = (0, E.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
        })),
        n = (0, D.bG)([eY.A], () => null == e || null != eY.A.get(e.planId)),
        l = (0, eW.Y)(),
        i = (0, D.bG)([eY.A], () => (null != e ? (0, eK.c9)(e.planId) : null)),
        r = c.useMemo(
            () => (null != e && n && l ? (0, eV.v)(e, t) : [{ planId: eZ.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, l, t],
        ),
        a = c.useMemo(
            () =>
                r.find((e) => {
                    let { planId: t } = e;
                    return eZ.pW.has(t);
                })?.planId ?? eZ.gD.PREMIUM_MONTH_GUILD,
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
var ez = n(652215),
    e$ = n(278651);
function eQ(e) {
    let { message: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eo.s3, { title: H.intl.string(H.t.q9EGps) }),
            (0, r.jsx)(ej.c, { children: (0, r.jsx)("p", { className: e$.C, children: t }) }),
        ],
    });
}
function eJ(e) {
    let { handleStepChange: t } = e,
        n = (0, E.t4)((e) => e.activeSubscription),
        { guildId: l, analyticsLocation: i } = eF(),
        a = (0, eR.Hp)(),
        s = (0, ek.A)(),
        { hasFetchedRelatedSubscriptionPlans: u, displayCurrency: d } = (0, eM.Jn)(),
        { hasFetchedPremiumSubscriptionPlan: p } = eq(),
        m = null != n && null != n.renewalMutations,
        h = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
        C = !s || !u || !p || null == d || "" === d;
    return ((0, en.Ay)(() => {
        m && ew.default.track(ez.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: i, guild_id: l });
    }),
    c.useEffect(() => {
        C || a || h || m || t(o.pn.PLAN_SELECT);
    }, [C, a, h, m, t]),
    h)
        ? (0, r.jsx)(eQ, { message: H.intl.string(H.t.mOWsF1) })
        : m
          ? (0, r.jsx)(eQ, { message: H.intl.string(H.t.npfhh0) })
          : C
            ? (0, r.jsx)(eL.A, {})
            : a
              ? (0, r.jsx)(eO.oO, {})
              : null;
}
var eX = n(482132),
    e0 = n(284009),
    e2 = n.n(e0),
    e1 = n(364840),
    e3 = n(331322),
    e4 = n(123292),
    e7 = n(38021),
    e6 = n(821609),
    e5 = n(659746),
    e8 = n(975571),
    e9 = n(26279),
    te = n(818348),
    tt = n(75048);
function tn(e) {
    let {
        currentStep: t,
        isRefreshEnabled: n,
        backStep: l,
        handleStepChange: i,
        primaryButtonProps: a,
        secondaryButton: s,
        legacySubmitButton: u,
    } = e;
    return t === o.pn.CONFIRM
        ? null
        : t === o.pn.REVIEW
          ? (e2()(null != a, "Missing primaryButtonProps for review step"),
            (0, r.jsx)(eo.lo, { onBackClick: null != l ? () => i(l) : void 0, primaryButtonProps: a }))
          : (0, r.jsx)(e1.j, {
                children: (0, r.jsxs)(e3.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != l ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != l
                            ? (0, r.jsx)(e4.Q, {
                                  text: H.intl.string(H.t["13/7kX"]),
                                  onClick: () => i(l),
                                  variant: "secondary",
                              })
                            : null,
                        (0, r.jsxs)(e3.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(n && t === o.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [s, u],
                        }),
                    ],
                }),
            });
}
function tl(e) {
    let t,
        {
            onClose: n,
            guild: l,
            guildBoostQuantity: i,
            isTransfer: a = !1,
            withAnimation: s = !0,
            paymentSourceType: o,
            didPurchaseOnFractionalPremium: u = !1,
            fallbackGuildName: d,
            customCheckoutFlow: p,
        } = e,
        { theme: m } = (0, e7.wR)(),
        [h, C] = c.useState(ev.V1.Scenes.ENTRY),
        [f, S] = c.useState(!1),
        E = l?.name ?? d;
    return (
        (t = a
            ? null == E
                ? H.intl.format(H.t.P52e1r, {})
                : H.intl.format(H.t["4UnIk9"], { guildName: E })
            : u
              ? H.intl.format(H.t.gFaKd1, { helpCenterLink: e8.A.getArticleURL(ez.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == E
                ? H.intl.format(H.t.SZ5ohR, { guildSubscriptionQuantity: i })
                : H.intl.format(H.t.GxK3Mv, { guildName: E, guildSubscriptionQuantity: i })),
        (0, r.jsxs)("div", {
            className: tt.RP,
            children: [
                s
                    ? (0, r.jsx)(ev.V1, {
                          className: tt.ud,
                          nextScene: h,
                          onScenePlay: (e) => {
                              if (!f)
                                  switch (e) {
                                      case ev.V1.Scenes.ENTRY:
                                          return C(ev.V1.Scenes.IDLE);
                                      case ev.V1.Scenes.IDLE:
                                          return C(ev.V1.Scenes.SUCCESS);
                                      case ev.V1.Scenes.SUCCESS:
                                          return (S(!0), C(ev.V1.Scenes.IDLE));
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, r.jsx)(e5.Ay, {
                    className: tt.E,
                    theme: m,
                    premiumType: eZ.PremiumTypes.TIER_2,
                    type: te.Nc.has(o ?? te.he.UNKNOWN)
                        ? e5.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : e5.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, r.jsx)(y.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: tt.xR,
                    children: t,
                }),
                p === e9.uH.META_QUEST_WEB_REDIRECT_CHECKOUT
                    ? (0, r.jsx)(y.E, {
                          variant: "text-md/medium",
                          color: "interactive-text-default",
                          className: tt.xR,
                          children: (0, r.jsxs)("p", {
                              children: [H.intl.string(H.t.bIVRSQ), " ", H.intl.string(H.t["0UJqOy"])],
                          }),
                      })
                    : (0, r.jsx)(e6.$, {
                          variant: "primary",
                          text:
                              p === e9.uH.MOBILE_WEB_REDIRECT_CHECKOUT
                                  ? H.intl.string(H.t.sRApon)
                                  : H.intl.string(H.t["/iTxgz"]),
                          onClick: n,
                      }),
            ],
        })
    );
}
function ti(e) {
    let { handleClose: t } = e,
        { guildId: n, addPaymentMethodStepState: l, existingAvailableSlotCount: i } = eF(),
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
        p = null != n ? ef.A.getGuild(n) : null,
        m = (0, et.A)(() => (0, eK.b2)(s)),
        h = (0, D.bG)([eY.A], () => (null != a ? (0, eK.c9)(a.planId) : null)),
        { paymentSources: C } = l,
        f = (0, M.g)(C, u),
        S = null != p ? p.name : null != d ? d.name : void 0,
        y = m && null != h && !eZ.YV.has(h.id);
    return (0, r.jsx)(eX.dZ, {
        children: (0, r.jsx)(tl, {
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
var tr = n(683071),
    ta = n(512950),
    ts = n(87719);
let to = (0, ep.Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tu = n(503698),
    tc = n.n(tu),
    td = n(118751),
    tp = n(661531),
    tm = n(408278),
    th = n(834040),
    tC = n(499373),
    tf = n(663803),
    tS = n(320448),
    tE = n(297264),
    ty = n(104510),
    tA = n(866665),
    tI = n(695366),
    tg = n(289873),
    tP = n(726656),
    tv = n(688810),
    tx = n(531260),
    t_ = n(666646),
    tT = n(404374),
    tN = n(543767),
    tb = n(881489),
    tj = n(774962),
    tR = n(477421),
    tO = n(732280),
    tM = n(363476),
    tL = n(898697),
    tk = n(361567);
function tw() {
    return (0, r.jsxs)("div", {
        className: tc()(tk.dt, tk.dE),
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: tk.qq,
            }),
            (0, r.jsx)(y.E, { variant: "text-sm/medium", className: tk.tD, children: H.intl.format(H.t.f5VHKm, {}) }),
        ],
    });
}
function tD(e) {
    let { text: t, color: n } = e;
    return (0, r.jsxs)("div", {
        className: tk.dt,
        children: [(0, r.jsx)(U.t, { size: "md", className: tk.YW, color: n }), (0, r.jsx)("div", { children: t })],
    });
}
var tU = n(773669),
    tG = n(877624),
    tF = n(28863),
    tB = n(406810),
    tH = n(549996),
    tW = n(807098),
    tV = n(637706),
    tY = n(788883),
    tK = n(7667),
    tZ = n(396559);
function tq() {
    let e = (0, tH.c)(tG.C.GUILD_BOOST_CHECKOUT_BANNER),
        t =
            null != e && "guildBoostCheckoutBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.guildBoostCheckoutBanner
                : null,
        n = (0, tW.T)(t?.asset),
        { countdownText: l, terms: i } = (0, tK.A)(e?.promotionId ?? "");
    if (null == e || null == t) return null;
    let a = (0, tV.C)(t.helpArticle, ""),
        s = [t.body, i].filter((e) => "" !== e).join(" ");
    return (0, r.jsxs)("div", {
        className: tZ.kL,
        children: [
            (0, r.jsx)(tY.A, {
                componentType: tG.C.GUILD_BOOST_CHECKOUT_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            (0, r.jsxs)("div", {
                className: tZ.Qs,
                children: [
                    null != n && "" !== n && (0, r.jsx)("img", { src: n, className: tZ.LY, alt: "" }),
                    (0, r.jsxs)("div", {
                        className: tZ.er,
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
                                                (0, r.jsx)(tF.Anchor, {
                                                    className: tZ.nf,
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
                    className: tZ.qW,
                    children: [
                        (0, r.jsx)(tB.ClockIcon, {
                            size: "custom",
                            width: 12,
                            height: 12,
                            color: "currentColor",
                            className: tZ.y,
                        }),
                        (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "text-default", children: l }),
                    ],
                }),
        ],
    });
}
var tz = n(155718),
    t$ = n(803694),
    tQ = n(270537),
    tJ = n(241989),
    tX = n(874638),
    t0 = n(264725);
function t2(e) {
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
function t1(e) {
    return H.intl.format(H.t.IeaYqg, { endDate: e });
}
function t3(e) {
    let { text: t, className: n } = e;
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)("div", { className: tt.bU }),
            (0, r.jsx)(y.E, { variant: "text-sm/normal", className: tt.b7, children: t }),
            (0, r.jsx)("div", { className: tt.bU }),
        ],
    });
}
function t4(e) {
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
    return (0, r.jsx)(tQ.Vm, {
        defaultExpanded: !0,
        label: H.intl.string(Z.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function t7(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: l, renewalInvoicePreview: i } = e;
    return null != n
        ? (0, r.jsx)(t0.Hc, { currentInvoice: l, renewalInvoice: i, isUpdate: t })
        : (0, r.jsx)(t0.Hc, { renewalInvoice: i });
}
function t6(e) {
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
                    [ef.A, ec.A],
                    () => {
                        let e = ef.A.getGuild(t);
                        return null != e ? e : ec.A.isGuildFetching(t) ? null : ec.A.getGuild(t);
                    },
                    [t],
                ),
                o = i.interval,
                u = i.intervalCount,
                d = (0, D.bG)([eY.A], () => eY.A.getForSkuAndInterval((0, k.mH)(eZ.pe.GUILD), o, u));
            e2()(null != d, "Missing guildBoostingSubscriptionPlan");
            let p = (0, k.J$)(n.paymentSourceId),
                m = (0, tb.ds)(),
                h = c.useMemo(() => {
                    if (null != l) {
                        let e = r[0];
                        return (0, k.Om)(l, e.quantity, e.planId);
                    }
                    return r;
                }, [l, r]),
                { analyticsLocations: C } = (0, tv.Ay)(),
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
        P = (0, t$.A)({ location: "GuildBoostReview", message: H.intl.string(Z.default["tK8A/8"]) });
    if (null == A || null == I || null == f) return (0, r.jsx)(v.Ed, { shouldShowUnifiedHeader: !0 });
    let x = (0, r.jsx)(t7, {
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
                startDate: (0, L.de)({ isSubscriptionUpdate: t, currentInvoice: i, renewalInvoice: l }),
            };
        })({
            isSubscriptionUpdate: C,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: I,
            checkoutInvoicePreview: A,
            paymentSources: n,
            paymentSourceId: d,
        }),
        N = (0, r.jsx)(t2, { ...T }),
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
                return (0, tX.Z)(l.invoiceItems).find((t) => eZ.pW.has(t.subscriptionPlanId) && e(t));
            }
            let m = p((e) => e.amount >= 0);
            e2()(null != m, "Missing guild boosting invoice item");
            let h = p((e) => e.amount < 0),
                C = null != h ? m.quantity - h.quantity : m.quantity,
                f = l.invoiceItems.filter((e) => (0, k.xq)(e.subscriptionPlanId)),
                S = f.reduce((e, t) => e + t.amount, 0),
                E = (0, tN.sL)(m) * C,
                y = (0, w.$g)(E, l.currency),
                A = (0, w.CE)(y, c, d),
                I = (0, w.$g)(l.total, l.currency) + (l.currency !== te.Yr.USD ? "*" : ""),
                g = l.subtotal - E - S,
                P = m.discounts.map((e) => {
                    let t = e.amount / m.quantity;
                    return { ...e, amount: t * C };
                }),
                v = P.find((e) => e.type === tz.iS.SUBSCRIPTION_PLAN),
                x = P.find((e) => e.type === tz.iS.ENTITLEMENT),
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
        j = (0, r.jsx)(t4, { ...b }),
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
                graphic: (0, r.jsx)(tJ.a6, {}),
                price: s,
                PriceIcon: c ? U.t : void 0,
                priceTooltip: c ? H.intl.string(Z.default.YUNJJa) : void 0,
                priceSubText: c ? o : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            f,
            b,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: l } = e;
                return !t && n && null != l ? { type: "reverseTrial", text: t1(l.currentPeriodEnd) } : null;
            })({ isPrepaid: S, isReverseTrial: y, premiumSubscription: i }),
        ),
        O = (0, r.jsx)(tJ.f7, { ...R });
    return (0, r.jsx)(v.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: P,
        purchaseItemContent: O,
        subscriptionDetailsContent: x,
        paymentMethodContent: _,
        invoiceSummaryContent: j,
        legalContent: N,
        invoiceTotalDueValue: b.formattedTotal,
        invoiceTotalDueLabel: H.intl.string(Z.default.R0cZsM),
    });
}
var t5 = n(703176);
function t8(e) {
    return "" === e || "-" === e;
}
function t9(e) {
    let { value: t, onChange: n, minValue: l = 1, maxValue: i = 30, ariaLabel: a } = e,
        [s, o] = c.useState(t);
    c.useEffect(() => {
        o(t);
    }, [t]);
    let u = "number" == typeof s;
    function d(e) {
        (o(e), t8(e) || n(e));
    }
    return (0, r.jsxs)("div", {
        className: t5.U$,
        children: [
            (0, r.jsx)(tm.K, {
                variant: "secondary",
                size: "md",
                icon: th.MinusIcon,
                onClick: () => {
                    u && !(s <= l) && d(s - 1);
                },
                "aria-label": H.intl.string(H.t["k+ohJm"]),
                disabled: !u || s <= l,
            }),
            (0, r.jsx)("div", {
                className: t5.WJ,
                children: (0, r.jsx)("input", {
                    className: t5.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${s}`,
                    onChange: (e) =>
                        (function (e) {
                            if (t8(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= l) return void d(l);
                                if (t >= i) return void d(i);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: function () {
                        t8(s) && o(t);
                    },
                }),
            }),
            (0, r.jsx)(tm.K, {
                variant: "secondary",
                size: "md",
                icon: tC.T,
                onClick: () => {
                    u && !(s >= i) && d(s + 1);
                },
                "aria-label": H.intl.string(H.t.w8Sc4B),
                disabled: !u || s >= i,
            }),
        ],
    });
}
function ne(e) {
    let { message: t } = e;
    return (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", className: t5.jH, children: t });
}
function nt(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: t5.Vk,
        children: [
            (0, r.jsx)("div", {
                className: t5.D0,
                children: (0, r.jsx)(U.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: t5.ue,
                    color: tT.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, r.jsx)("div", { className: t5.yP, children: t }),
        ],
    });
}
function nn(e) {
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
                className: tt.mP,
                children: [
                    (0, r.jsxs)("div", {
                        className: tt.E6,
                        children: [
                            (0, r.jsx)(tf.l, {
                                value: n,
                                onChange: (e) => l(e),
                                className: tt.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)("div", { className: tt.$0, children: i }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: tc()(tt.QK, { [tt.S]: t }), children: a }),
                ],
            }),
            (0, r.jsx)("div", { className: tt.J3 }),
            (0, r.jsxs)("div", {
                className: tt.mP,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: H.intl.string(H.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", {
                        className: tc()(tt.__invalid_planSelectorSubtotalPrice, { [tt.S]: t }),
                        children: s,
                    }),
                ],
            }),
            S.map((e, t) => (0, r.jsx)(c.Fragment, { children: e }, t)),
            h,
        ],
    });
}
function nl(e) {
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
        className: t5.xY,
        children: [
            m,
            (0, r.jsxs)("div", {
                className: t5.K3,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-md/medium",
                        className: t5.bk,
                        children: H.intl.string(H.t["r+SebU"]),
                    }),
                    (0, r.jsx)(tS._, { className: t5.bN, color: "currentColor", size: "xs" }),
                    (0, r.jsx)(y.E, { variant: "text-md/medium", className: t5.kX, children: i }),
                ],
            }),
            p,
            h,
            (0, r.jsxs)("div", {
                className: t5.fh,
                children: [
                    (0, r.jsxs)("div", {
                        className: t5.fX,
                        children: [
                            (0, r.jsx)(t9, {
                                value: n,
                                onChange: (e) => l(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)(y.E, { variant: "text-md/medium", className: t5.ny, children: a }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: tc()(t5.El, { [tt.S]: t }), children: s }),
                ],
            }),
            (0, r.jsxs)("div", { className: t5.pw, children: [S, f] }),
            (0, r.jsxs)("div", {
                className: t5.fh,
                children: [
                    (0, r.jsx)(tE.D, {
                        variant: "heading-lg/semibold",
                        className: t5.O3,
                        children: H.intl.string(H.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", { className: tc()(t5.BU, { [tt.S]: t }), children: u }),
                ],
            }),
            A.map((e, t) => (0, r.jsx)(c.Fragment, { children: e }, t)),
        ],
    });
}
function ni(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: l } = e;
    return (0, r.jsxs)("div", {
        className: tt.Mv,
        children: [
            (0, r.jsx)(ty._, { className: tt.T5, color: tp.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, r.jsxs)("div", {
                children: [
                    H.intl.format(H.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != l
                        ? (0, r.jsx)(tA.m, {
                              text: H.intl.formatToPlainString(H.t.SFpsCH, {
                                  canceledCount: n,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, r.jsx)(tI.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: tt.Y5,
                                  color: tp.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function nr(e) {
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
                    ((t = (0, D.bG)([eE.A], () => eE.A.getPremiumTypeSubscription())),
                    (0, D.bG)([eU.A], () =>
                        t?.paymentSourceId != null ? eU.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                C = l.interval,
                f = l.intervalCount,
                S = (0, D.bG)([eY.A], () => eY.A.getForSkuAndInterval((0, k.mH)(eZ.pe.GUILD), C, f)),
                E = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
                A = (0, tx.A)({ forceFetch: !1 });
            e2()(null != S, "Missing guildBoostingSubscriptionPlan");
            let I = [{ planId: S.id, quantity: 1 }],
                g = o?.items.find(
                    (e) => e.planId === eZ.gD.PREMIUM_MONTH_TIER_2 || e.planId === eZ.gD.PREMIUM_YEAR_TIER_2,
                );
            null != g && I.push(g);
            let P = o?.items.find(
                    (e) => e.planId === eZ.gD.PREMIUM_MONTH_GUILD || e.planId === eZ.gD.PREMIUM_YEAR_GUILD,
                ),
                v = null == h || !eZ.uJ.has(h) || null == P,
                { analyticsLocations: x } = (0, tv.Ay)(),
                [_, T] = (0, tN.YV)({
                    subscriptionId: o?.id,
                    items: I,
                    renewal: !0,
                    paymentSourceId: o?.paymentSourceId,
                    currency: p.currency,
                    preventFetch: v,
                    analyticsLocations: x,
                    analyticsLocation: a.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, t_.T)(_, T);
            let N = !v && null == _ && null == T;
            c.useLayoutEffect(() => {
                s(N);
            }, [N, s]);
            let b = (0, tO.V)()?.subscriptionTrial?.skuId === eZ.pe.TIER_2,
                j = k.Ay.hasBoostDiscount(E),
                R = j && null != o && k.Ay.isPremiumAtLeast(k.Ay.getPremiumType(o.planId), eZ.PremiumTypes.TIER_1),
                O = _?.findInvoiceItemByPlanId(S.id),
                M =
                    null != O
                        ? { amount: O.amount, tax: 0, taxInclusive: !0, currency: _.currency }
                        : k.Ay.getPrice(S.id, j, !1, p),
                L = i * M.amount,
                U = (0, tb.ds)() && j && null != o,
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
                            showFractionalPremiumBanner: l === eZ.xc.FP_SUB_PAUSED,
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
                ? (e2()(null != o, "Missing premiumSubscription for discount upsell variant"),
                  (n = H.intl.format(H.t.hf6YOY, { planName: k.Ay.getTierDisplayNameByPlanId(o.planId) })))
                : (n = H.intl.format("upsell_trial" === G.upsellVariant ? H.t.ba1L74 : H.t.fkffDT, {
                      onPremiumSubscriptionClick: u,
                      discountPercentage: (0, td.l9)(tU.default.locale, eZ.oX / 100),
                      freeSubscriptionCount: eZ.M4,
                  }));
            let B = d.filter((e) => (0, ey.I5)(e)).length,
                W = (0, k.J$)(p.paymentSourceId),
                { ipCountryCode: V } = (0, tR.A)(),
                Y = "HR" === V && M.currency === te.Yr.EUR,
                K =
                    U && null != o
                        ? (0, r.jsx)(t3, { text: t1(o.currentPeriodEnd) })
                        : (0, r.jsx)("div", { className: tc()(tt.hA, tt.G3), children: H.intl.string(H.t.jNY1FO) }),
                Z =
                    U && null != o
                        ? (0, r.jsx)(t3, { text: t1(o.currentPeriodEnd), className: tt.jk })
                        : (0, r.jsx)(y.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: t5._X,
                              children: H.intl.string(H.t.jNY1FO),
                          }),
                q = G.showExistingSlotNotice
                    ? (0, r.jsx)(ni, { existingAvailableSlots: d, canceledCount: B, premiumSubscription: o })
                    : null,
                z = G.showFractionalPremiumBanner ? (0, r.jsx)(tL.vi, { fractionalPremiumInfo: A }) : null,
                $ = W
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === eZ.WT.YEAR
                              ? H.intl.string(H.t.YDpAzZ)
                              : t === eZ.WT.MONTH && 1 === n
                                ? H.intl.string(H.t["6ZR3By"])
                                : null;
                      })({ intervalType: C, intervalCount: f }) ?? H.intl.string(H.t.K9Bmze))
                    : H.intl.string(H.t.K9Bmze),
                Q = N
                    ? (0, r.jsx)(tg.y, {})
                    : W
                      ? (0, w.$g)(M.amount, M.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: l, intervalCount: i = 1 } = e,
                                r = (0, w.$g)(t, n);
                            return l === eZ.WT.YEAR
                                ? H.intl.formatToPlainString(H.t["8M04YJ"], { price: r })
                                : l === eZ.WT.MONTH && 1 === i
                                  ? H.intl.formatToPlainString(H.t.VStWCR, { price: r })
                                  : l === eZ.WT.MONTH && i > 1
                                    ? H.intl.formatToPlainString(H.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: C, intervalCount: f, amount: M.amount, currency: M.currency }),
                J = N
                    ? (0, r.jsx)(tg.y, {})
                    : (0, r.jsx)(tM.A, {
                          price: L,
                          currency: M.currency,
                          intervalType: C,
                          intervalCount: f,
                          isPrepaidPaymentSource: W,
                      }),
                X = N
                    ? (0, r.jsx)(tg.y, {})
                    : m && !W
                      ? (0, w.CE)((0, w.$g)(L, M.currency), C, f)
                      : (0, w.$g)(L, M.currency),
                ee = [],
                et = [];
            if (Y) {
                let e = (0, r.jsx)(
                    tP.A,
                    {
                        message: H.intl.formatToPlainString(H.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, w.$g)(7.5345 * L, te.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                (ee.push(e), et.push(e));
            }
            let en = (0, tj.p)("GuildBoostPurchaseModalPlanSelect")
                ? H.intl.string(H.t["+nPHMl"])
                : H.intl.format(H.t.Om31w8, { documentationLink: e8.A.getArticleURL(ez.MVz.LOCALIZED_PRICING) });
            (ee.push((0, r.jsx)(tP.A, { message: en }, "localized-pricing")),
                et.push((0, r.jsx)(ne, { message: en }, "localized-pricing")));
            let el =
                    "reverse_trial" === G.upsellVariant
                        ? (0, r.jsx)(tw, {})
                        : (0, r.jsx)(tD, { text: n, color: tT.k0.PREMIUM_TIER_2 }),
                ei = (0, r.jsx)(tq, {});
            return {
                isLoading: N,
                planLabel: $,
                planPriceContent: Q,
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
                    "reverse_trial" === G.upsellVariant ? (0, r.jsx)(tw, {}) : (0, r.jsx)(nt, { text: n }),
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
    return (0, r.jsx)(p ? nl : nn, {
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
let na = eZ.gD.NONE_MONTH,
    ns = [eZ.pe.GUILD];
function no(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            guildId: l,
            closeGuildPerksModal: i,
            disablePremiumUpsell: a,
            setForceDisableSubmitButton: s,
            forceDisableSubmitButton: u,
            addPaymentMethodStepState: c,
            premiumSubscriptionPaymentSourceId: d,
        } = eF(),
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
        { displayCurrency: S } = (0, eM.Jn)(),
        y = null != d || Object.keys(c.paymentSources).length > 0,
        A = (0, o.Ir)(y ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS),
        I = (0, et.A)(() => (0, ey.D$)(eS.A.boostSlots)),
        g = eh("GuildBoostPurchaseModal"),
        P = to.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        v = g && P,
        x = (0, D.bG)([ec.A], () => (null != l ? ec.A.getGuild(l) : void 0), [l]),
        _ = null != l ? ef.A.getGuild(l) : null,
        T = null == x && null == _,
        N = null != m && m.isPurchasedExternally,
        b = Object.keys(c.paymentSources).length > 0,
        j = (0, D.bG)([eY.A], () => (null != m ? (0, eK.c9)(m.planId) : null)),
        R = (0, D.bG)([eY.A], () => (null == j ? eY.A.get(na) : j));
    if (null == l) throw new f.v({ message: "Missing guildId" });
    e2()(null != R, "Missing nextPremiumSubscriptionPlan");
    let O = (0, r.jsx)(nr, {
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
            (t(), null != i && i(), (0, ts.e)());
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
                  className: e$.xK,
                  children: [
                      (0, r.jsx)(tr.w, {
                          type: "critical",
                          message: H.intl.format(H.t["/m3Y3s"], { paymentGatewayName: te.qm[m.paymentGateway] }),
                          role: "static",
                      }),
                      O,
                  ],
              }))
            : null != l &&
              !ec.A.isGuildFetching(l) &&
              T &&
              (O = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ta.p, {
                          messageType: ta.Y.ERROR,
                          className: e$.MR,
                          children: H.intl.string(H.t.eAn6z2),
                      }),
                      O,
                  ],
              })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eX.dZ, { children: O }),
                (0, r.jsx)(eX.UX, {
                    children: (0, r.jsx)(tn, {
                        currentStep: o.pn.PLAN_SELECT,
                        isRefreshEnabled: g,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: g
                            ? (0, r.jsx)(e6.$, { variant: "secondary", text: H.intl.string(H.t["ETE/oC"]), onClick: t })
                            : (0, r.jsx)(e4.Q, { text: H.intl.string(H.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, r.jsx)(e6.$, {
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
                                a || (null != j && j.premiumSubscriptionType === eZ.PremiumTypes.TIER_2)
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
var nu = n(460905),
    nc = n(183623),
    nd = n(95635),
    np = n(75678),
    nm = n(10392),
    nh = n(82498),
    nC = n(219882),
    nf = n(811611),
    nS = n(392634),
    nE = n(73359);
function ny(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, D.bG)([tU.default], () => tU.default.locale);
    return (0, r.jsxs)("div", {
        className: nE.mH,
        children: [
            (0, r.jsx)(nS.A, {
                icon: ty._,
                iconClassName: nE.pl,
                description: H.intl.formatToPlainString(H.t.sQBgs2, { numFreeGuildSubscriptions: eZ.M4 }),
                color: tp.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, r.jsx)(nS.A, {
                icon: ty._,
                iconClassName: nE.pl,
                description: H.intl.formatToPlainString(H.t["1A6vXi"], { percent: (0, td.l9)(n, eZ.oX / 100) }),
                color: tp.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, r.jsx)(nS.A, { icon: nu.n, iconClassName: nE.zO, description: H.intl.string(H.t.Z9b2x2) }) : null,
            (0, r.jsx)(nS.A, { icon: nc.F, iconClassName: nE.Kg, description: H.intl.string(H.t["8dqG5E"]) }),
            (0, r.jsx)(nS.A, {
                icon: nd.UploadIcon,
                iconClassName: nE.$z,
                description: (0, nC.M6)({
                    legacyCopy: H.intl.string(H.t.cBorIy),
                    rolloutCopy: H.intl.formatToPlainString(H.t["3MdBF7"], {
                        maxFileSize: (0, k.EJ)(eZ.PremiumTypes.TIER_2, { useSpace: !1 }),
                    }),
                }),
            }),
        ],
    });
}
function nA(e) {
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
        { analyticsLocations: p, sourceAnalyticsLocations: m } = (0, tv.Ay)(a.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        h = null == t || null == t.premiumSubscriptionType,
        C = k.Ay.getPrice(eZ.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        f = (0, w.$g)(C.amount, C.currency),
        S = (0, tO.V)(),
        E = S?.trialId,
        A = S?.subscriptionTrial?.skuId === eZ.pe.TIER_2;
    return (
        c.useEffect(() => {
            (ew.default.track(ez.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eZ.e.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: m,
            }),
                (0, nm.sq)(ez.U7l.PREMIUM_UPSELL_VIEWED, m, () => (0, nh.uq)(eZ.e.GUILD_PREMIUM_UPSELL_MODAL)));
        }, [m]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eA.s_, { "data-migration-pending": !0, onClick: n, className: nE.b }),
                (0, r.jsxs)(ej.c, {
                    children: [
                        A && (0, r.jsx)(nf.Vq, { className: nE.Fg }),
                        (0, r.jsx)("div", { className: tc()(nE.Tn, { [nE.NH]: A }) }),
                        (0, r.jsx)(y.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children:
                                null != E
                                    ? H.intl.string(H.t.AoSzEr)
                                    : H.intl.format(H.t["7vePZb"], { monthlyPrice: f }),
                        }),
                        (0, r.jsx)(ny, { shouldUpsellFromNoneTier: h }),
                    ],
                }),
                (0, r.jsx)(e1.j, {
                    children: (0, r.jsxs)(e3.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(e4.Q, { text: H.intl.string(H.t["13/7kX"]), onClick: l, variant: "secondary" }),
                            (0, r.jsxs)(e3.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, r.jsx)(e4.Q, {
                                        text: H.intl.string(H.t["SI/adm"]),
                                        onClick: i,
                                        variant: "secondary",
                                    }),
                                    (0, r.jsx)(e6.$, {
                                        variant: "active",
                                        text: null != E ? H.intl.string(H.t["Gd/XHF"]) : H.intl.string(H.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            (n(),
                                                (0, np.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eZ.pe.TIER_2,
                                                    analyticsLocations: p,
                                                    analyticsObject: {
                                                        ...o,
                                                        section: ez.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
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
function nI(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: l } = e,
        { addPaymentMethodStepState: i, analyticsLocation: a, analyticsSourceLocation: s } = eF(),
        { paymentSourceId: u, activeSubscription: d } = (0, E.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: p } = (0, eM.Jn)(),
        m = (0, D.bG)([eY.A], () => (null != d ? (0, eK.c9)(d.planId) : null)),
        h = (0, D.bG)([eY.A], () => (null == m ? eY.A.get(na) : m));
    (e2()(null != h, "Missing nextPremiumSubscriptionPlan"), e2()(null != p && "" !== p, "Currency not defined"));
    let { paymentSources: C } = i,
        f = null != d ? d.paymentSourceId : null,
        S = Object.keys(C).length > 0,
        y = c.useCallback(() => n(o.pn.PLAN_SELECT), [n]),
        A = c.useCallback(() => n(null != f || S ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS), [n, f, S]);
    return (0, r.jsx)(nA, {
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
var ng = n(277984),
    nP = n(855104),
    nv = n(820739);
async function nx(e, t) {
    await (0, nv.CD)();
    let n = (0, ey.D$)(eS.A.boostSlots);
    return (0, nv.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function n_() {
    let { guildId: e, intent: t, onSubscribeComplete: n, addPaymentMethodStepState: l } = eF(),
        { setIsSubmittingCurrentStep: i } = l,
        { paymentAuthenticationState: r } = (0, er.o)(),
        { setPurchaseState: a, setPurchaseError: s } = (0, E.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
        })),
        o = c.useRef(!1);
    return (
        c.useEffect(() => {
            if (r === eC.oc.PENDING) {
                o.current = !0;
                return;
            }
            async function l() {
                if (null != e)
                    try {
                        (await nx(e, null != t), n?.());
                    } catch (e) {
                        (a(ed.h.FAIL), s(e));
                    }
            }
            o.current && ((o.current = !1), i(!1), r === eC.oc.NONE && null != e && l());
        }, [r, e, t, n, i, a, s]),
        null
    );
}
let nT = [
        { key: o.pn.PLAN_SELECT, renderStep: (e) => (0, r.jsx)(no, { ...e }), options: { renderHeader: !0 } },
        {
            key: o.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, r.jsx)(nI, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    nN = {
        CHECKOUT_FLOW: el.C.GUILD_BOOST_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eJ, { ...e }) },
        STEPS_BEFORE_CHECKOUT: nT,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: function (e) {
                let { handleStepChange: t, handleClose: n, analyticsData: l } = e,
                    { guildId: i, addPaymentMethodStepState: a, premiumSubscriptionPaymentSourceId: s } = eF(),
                    {
                        activeSubscription: u,
                        paymentSourceId: d,
                        setPaymentSourceId: p,
                    } = (0, E.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: m } = (0, eM.Jn)();
                if (null == i) throw new f.v({ message: "Missing guildId" });
                e2()(null != m && "" !== m, "Currency not defined");
                let { paymentSources: h } = a,
                    { newAdditionalPlans: C, currentPremiumSubscriptionPlan: S } = eq(),
                    y = (0, D.bG)([eY.A], () => (null == S ? eY.A.get(na) : S));
                e2()(null != y, "Missing nextPremiumSubscriptionPlan");
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
                            } = eF(),
                            { displayCurrency: C } = (0, eM.Jn)(),
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
                            } = eq(),
                            R = (0, t$.A)({
                                location: "GuildBoostPurchaseModal",
                                message: H.intl.string(Z.default["tK8A/8"]),
                            }),
                            O = (0, t$.iB)({
                                checkoutPaymentSources: _,
                                paymentSourceId: I,
                                location: "GuildBoostPurchaseModal",
                            }),
                            L = (0, nP.gN)(),
                            w = c.useMemo(
                                () => ({
                                    ...l,
                                    location: s,
                                    source: u,
                                    subscription_plan_id: j,
                                    sku_id: (0, k.mH)(eZ.pe.GUILD),
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
                            e2()(null != N, "Missing newAdditionalPlans");
                            let e = (0, M.W)(f, I);
                            g(null);
                            let r = !1;
                            try {
                                (v(ed.h.PURCHASING),
                                    S(!0),
                                    e2()(null != I, "Missing paymentSourceId"),
                                    e2()(null != T, "Missing invoicePreview"));
                                let s = { amount: T.total, currency: T.currency },
                                    u = U.currency ?? T.currency,
                                    c = (0, k.U8)(A, N, u.toLowerCase(), U.paymentSourceId);
                                if (
                                    (ew.default.track(ez.HAw.PAYMENT_FLOW_COMPLETED, {
                                        ...w,
                                        duration_ms: Date.now() - d,
                                        guild_id: i ?? void 0,
                                        application_id: p,
                                    }),
                                    null == A || null == b)
                                ) {
                                    e2()(null != e, "Missing paymentSource");
                                    let t = await (0, ng.Ky)({
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
                                            (e2()(null != e, "Missing paymentSource"),
                                            (t.paymentSource = e),
                                            (t.currency = u)));
                                    let n = await (0, ng.nV)(A, t, s, c, l.location_stack);
                                    if (n.redirectConfirmation) {
                                        r = !0;
                                        return;
                                    }
                                    if (n.pendingCustomerAction) return;
                                }
                                (null == m && t(o.pn.CONFIRM),
                                    v(ed.h.COMPLETED),
                                    null != i && (await nx(i, null != m)),
                                    null != m && n(),
                                    h?.());
                            } catch (t) {
                                (v(ed.h.FAIL),
                                    g(t),
                                    ew.default.track(ez.HAw.PAYMENT_FLOW_FAILED, {
                                        ...D,
                                        payment_error_code: t?.code,
                                        payment_gateway:
                                            null != e
                                                ? e.type === ez.hes.CARD
                                                    ? ez.kM_.STRIPE
                                                    : ez.kM_.BRAINTREE
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
                        (0, r.jsx)(eX.dZ, {
                            children: (0, r.jsx)(t6, {
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
                        (0, r.jsx)(eX.UX, {
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
                    h = (0, D.bG)([eE.A], () => eE.A.getPremiumTypeSubscription()),
                    C = (0, et.A)(() => n - (0, ey.D$)(eS.A.boostSlots).length);
                return (
                    (0, en.Ay)(() => {
                        null != ec.A.getGuild(t) || ec.A.isGuildFetching(t) || (0, eu.y)(t);
                    }),
                    (0, r.jsx)(ei.M, {
                        activeSubscription: h,
                        stepConfigs: d,
                        skuIDs: ns,
                        loadId: p,
                        unifiedCheckoutFlow: el.C.GUILD_BOOST_CHECKOUT,
                        children: (0, r.jsxs)(eH, {
                            initialNumGuildBoostsToPurchase: C,
                            disablePremiumUpsell: i,
                            closeGuildPerksModal: s,
                            guildId: t,
                            analyticsLocation: o,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: l,
                            onSubscribeComplete: a,
                            children: [(0, r.jsx)(n_, {}), m],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { guildId: l, existingAvailableSlotCount: i } = eF(),
                    a = (0, ea.s2)(),
                    { purchaseState: s, quantity: u } = (0, E.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        quantity: e.quantity,
                    })),
                    d = eh("GuildBoostUnifiedCheckout"),
                    p = d && (a === o.pn.REVIEW || a === o.pn.CONFIRM),
                    m = (0, eb.A)(p),
                    h = c.useMemo(() => ({ quantity: u }), [u]);
                return d && a === o.pn.CONFIRM
                    ? (0, r.jsx)(eN.A, {
                          mediaUrls: m.mediaUrls,
                          isSuccess: m.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(s === ed.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, r.jsx)(eT.A, {
                                  transitionState: t.transitionState,
                                  guild: ef.A.getGuild(l),
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
                l = eh("GuildBoostUnifiedCheckout"),
                i = (0, E.t4)((e) => e.purchaseState),
                a = (0, S.A)();
            if (n === o.pn.PREMIUM_UPSELL) return null;
            if (n === o.pn.REVIEW) {
                let e = null != a ? a.skuId : null;
                return (0, r.jsx)(eo.s3, { ...(0, es.u)({ skuId: e, step: n }) });
            }
            return l
                ? (0, r.jsx)(eo.s3, { title: (0, es.u)({ skuId: null, step: n }).title })
                : (0, r.jsx)(e_, { onClose: () => t(i === ed.h.COMPLETED), currentStep: n, purchaseState: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(ti, { ...e }), options: { renderHeader: !0 } },
    };
var nb = n(773882),
    nj = n(192308),
    nR = n(871109);
let nO = c.createContext(void 0);
function nM() {
    let e = c.useContext(nO);
    return (e2()(null != e, "GuildProductPurchaseContext not found"), e);
}
function nL(e) {
    let { children: t, skuId: n, ...l } = e,
        i = (0, D.bG)([nR.A], () => nR.A.getGuildProduct(n));
    return (
        e2()(null != i, "guildProductListing cannot be null"),
        (0, r.jsx)(nO.Provider, { value: { guildProductListing: i, ...l }, children: t })
    );
}
function nk(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: i } = nM(),
        a = (0, E.t4)((e) => e.checkoutInvoicePreview);
    return (
        (0, en.Ay)(() => {
            var e;
            (e2()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: i, guildProductListingId: l.id, invoicePreview: a }),
                (0, nj.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("24774"),
                        n.e("767837"),
                        n.e("434691"),
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
var nw = n(939249),
    nD = n(789645),
    nU = n(303612),
    nG = n(171036),
    nF = n(200791);
function nB(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(nw.D, {
        className: tc()(nG.cG, t),
        onClick: n,
        children: (0, r.jsx)(nD.P, { size: "xs", color: "currentColor", className: nG.yP }),
    });
}
function nH(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, r.jsxs)(eA.rQ, {
        className: tc()(nG.wx, nF.G, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(nU.A, { className: nG.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(nB, { className: nG.b, onClose: n }),
        ],
    });
}
var nW = n(621328);
let nV = {
    CHECKOUT_FLOW: s.C.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [o.pn.REVIEW]: nb.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, r.jsx)(nL, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: a.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = nM();
        return n === o.pn.CONFIRM
            ? null
            : (0, r.jsx)(nH, { guildProductListing: l, className: nW.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(nk, { ...e }) },
};
var nY = n(20742),
    nK = n(684477),
    nZ = n(951305),
    nq = n(1076),
    nz = n(776310),
    n$ = n(73153),
    nQ = n(213530),
    nJ = n(966971),
    nX = n(758836),
    n0 = n(395797);
let n2 = { sliderBodyClassName: n0.Bz };
function n1(e) {
    let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nz.Fk, { ref: n, className: n0.Lb, environment: t.current }),
            (0, r.jsx)(nQ.K, { options: l, className: tc()(n0.Oh, { [n0.R]: !i }) }),
        ],
    });
}
var n3 = n(702841),
    n4 = n(31823),
    n7 = n(427675),
    n6 = n(590180),
    n5 = n(953150),
    n8 = n(524246),
    n9 = n(14368),
    le = n(61750),
    lt = n(614662),
    ln = n(901930);
function ll(e) {
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
        { application: m } = (0, n4.V)(),
        h = (0, n7.gU)(),
        C = (0, n3.bG)([n6.A], () => n6.A.getProduct(s)),
        f = c.useRef(!1);
    (e2()(null != s, "Expected selectedSkuId"), e2()(null != m, "Expected application"));
    let S = h[s];
    e2()(null != S, "Expected sku");
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
            (0, le.A)({
                product: C,
                overrideTitle: A,
                overrideDescription: i,
                overrideGradientColor: a,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: nX.gs.FIAT,
            }));
    }, [C, n, t, y, A, i, a]),
    y)
        ? (0, r.jsx)(eX.dZ, { children: (0, r.jsx)(ln.A, {}) })
        : null;
}
function li(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: i,
            giftRecipient: a,
            giftMessageError: s,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, nZ.Pv)(),
        d = (0, n3.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        p = c.useRef(null),
        m = (0, E.t4)((e) => e.selectedSkuId),
        h = (0, n3.bG)([n6.A], () => n6.A.getProduct(m)),
        { confettiColors: C } = (0, n5.A)(h?.styles);
    return (
        c.useEffect(() => {
            t &&
                null != a &&
                null != m &&
                (u === eZ.vQ.USER_PROFILE_WISHLIST || u === eZ.vQ.DM_CHANNEL_WISHLIST) &&
                n$.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: m, recipientId: a.id });
        }, [t, a, m, u]),
        t
            ? (0, r.jsxs)("div", {
                  ref: p,
                  children: [
                      (0, r.jsx)(lt.A, {
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
                          (0, r.jsx)(n8.A, {
                              confettiTarget: p.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, n9.rA)(h?.categorySkuId),
                              colors: C?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(ll, { ...e })
    );
}
var lr = n(70283),
    la = n(982240),
    ls = n(815996),
    lo = n(993408),
    lu = n(575593),
    lc = n(452027),
    ld = n(922016),
    lp = n(778712),
    lm = n(986687),
    lh = n(999291),
    lC = n(903209),
    lf = n(674658),
    lS = n(898461),
    lE = n(203632),
    ly = n(892118),
    lA = n(536572),
    lI = n(14702),
    lg = n(219103),
    lP = n(431898);
function lv(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: i,
            previewHeaderClassName: a,
            hideProfilePreview: s,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, nZ.Pv)(),
        d = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
        p = k.Ay.canUseShopDiscounts(d),
        m = (0, lh.Ay)(o?.id),
        h = c.useRef(null),
        [C, f] = c.useState(!1),
        { product: S } = (0, lf.q)(t, !0),
        E = c.useMemo(() => (0, lo.fT)(S, p), [S, p]);
    if (null == S || 0 === S.items.length) return null;
    let [A] = S.items,
        I = (0, lA.VG)(S),
        g = null != o && o.id !== d?.id && S.type !== lu.R.BUNDLE && A.type !== lu.R.NAMEPLATE && !s;
    return (0, r.jsxs)("div", {
        className: i,
        children: [
            (0, r.jsx)("div", {
                className: tc()(lP.QU, a),
                children: (0, r.jsx)(lc.D, {
                    label: H.intl.string(H.t.PpoJzt),
                    children:
                        g &&
                        (0, r.jsx)(
                            ld.Y,
                            {
                                targetElementRef: h,
                                align: "center",
                                shouldShow: C,
                                onRequestClose: () => f(!1),
                                preload: () => (0, lC.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(lm.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, lp.FT)(lp._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, lS.T)(A) ? A : null,
                                        pendingProfileEffect: (0, lE.C3)(A) ? A : null,
                                        pendingProfileFrame: (0, ly.s)(A) ? A : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, r.jsx)(nw.D, {
                                        ...l,
                                        className: lP.Nx,
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
                className: tc()(lP.i1, null != u ? lP.cN : lP.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: lP.Ug,
                        children: [
                            (0, r.jsx)(lI.O, { product: S }),
                            (0, r.jsxs)("div", {
                                className: lP.JZ,
                                children: [
                                    (0, r.jsx)(y.E, { variant: "text-md/semibold", children: I }),
                                    (0, r.jsx)(tE.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            S?.type === lu.R.BUNDLE
                                                ? null
                                                : A.type === lu.R.AVATAR_DECORATION
                                                  ? H.intl.string(H.t["7v0T9P"])
                                                  : A.type === lu.R.NAMEPLATE
                                                    ? H.intl.string(H.t.x5CoXR)
                                                    : A.type === lu.R.PROFILE_EFFECT
                                                      ? H.intl.string(H.t.wR5wOo)
                                                      : A.type === lu.R.PROFILE_FRAME
                                                        ? H.intl.string(H.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(lg.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: E,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, r.jsx)("div", {
                            className: lP.Wh,
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
var lx = n(890497),
    l_ = n(896170),
    lT = n(966327),
    lN = n(565860),
    lb = n(994500),
    lj = n(427262),
    lR = n(428863),
    lO = n(435558),
    lM = n.n(lO),
    lL = n(427358);
function lk(e) {
    let t,
        { selectedSkuId: n, validateSelectedGift: l, className: i, recipients: a } = e,
        { giftRecipient: s, setGiftRecipient: o } = (0, nZ.Pv)(),
        { options: u, customMatchSorter: d } = (function (e) {
            let { entriesByUserId: t, options: n } = c.useMemo(() => {
                let t = new Map(),
                    n = e.map((e) => {
                        let n,
                            l,
                            i =
                                ((n = lb.A.getNickname(e.id) ?? lj.Ay.getName(e)),
                                (l = lj.Ay.getUserTag(e)),
                                {
                                    names: Object.keys((0, lN.jP)(e).names),
                                    username: e.username,
                                    baseLabel: n,
                                    userTag: l === n ? void 0 : l,
                                });
                        return (
                            t.set(e.id, i),
                            {
                                id: e.id,
                                value: e.id,
                                label: i.baseLabel,
                                trailing:
                                    null != i.userTag
                                        ? (0, r.jsx)(y.E, {
                                              tag: "span",
                                              variant: "text-md/normal",
                                              color: "text-subtle",
                                              className: lR.X,
                                              children: i.userTag,
                                          })
                                        : void 0,
                                leading: (0, r.jsx)(lT.A, { user: e, size: lp._3.SIZE_20 }),
                            }
                        );
                    });
                return { entriesByUserId: t, options: n };
            }, [e]);
            return {
                options: n,
                customMatchSorter: c.useMemo(
                    () => (e, n) =>
                        (0, l_.Ht)(e, n, { keys: ["label", (e) => t.get(e.value)?.names ?? []] }).map((e) => {
                            let l = t.get(e.value);
                            if (null == l) return e;
                            let i = (function (e, t) {
                                let n = (0, lN.HI)(t);
                                if ("" !== n) return e.find((e) => (0, lN.HI)(e).includes(n));
                            })(l.names, n);
                            return null == i || i === l.username || i === e.label ? e : { ...e, label: i };
                        }),
                    [t],
                ),
            };
        })(
            ((t = (0, D.bG)([lL.A], () => lL.A.getUserAffinitiesMap())),
            c.useMemo(() => lM().sortBy(a, (e) => -(t.get(e.id)?.communicationProbability ?? 0)), [a, t])),
        );
    return (0, r.jsx)("div", {
        className: tc()(i, lR.N),
        children: (0, r.jsx)(lx.Z, {
            selectionMode: "single",
            label: H.intl.string(H.t.xFn72s),
            placeholder: H.intl.string(H.t.R0vK0N),
            value: s?.id,
            onSelectionChange: function (e) {
                let t = a.find((t) => t.id === e);
                null != t && (l(t, n), o(t));
            },
            customMatchSorter: d,
            options: u,
        }),
    });
}
let lw = function (e) {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: i } = e;
    return null == t
        ? null
        : (0, r.jsx)(lk, { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: i });
};
var lD = n(570287);
function lU() {
    let e = (0, D.yK)([lb.A], () => lb.A.getFriendIDs()),
        t = (0, D.yK)([lL.A], () =>
            lL.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: i } = e,
                        r = (0, lD.q)(i);
                    return !t && (n >= 0.1 || l >= 0.1) && r;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = c.useMemo(() => lM().uniq([...e, ...t]), [e, t]);
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
var lG = n(859492),
    lF = n(492275),
    lB = n(968060),
    lH = n(274076),
    lW = n(948388),
    lV = n(976860),
    lY = n(619940);
function lK(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, tv.Ay)(a.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(e4.Q, {
        text: H.intl.string(H.t.J82mpK),
        onClick: function () {
            (t(),
                (0, nj.closeAllModals)(),
                null == n
                    ? (0, ls.Cz)({ analyticsLocations: l, analyticsSource: a.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, lV.pX)(`${ez.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`));
        },
        textVariant: "text-sm/medium",
    });
}
function lZ(e) {
    let {
            hideConfirmStepConfetti: t,
            confettiCanvas: n,
            collectedModalOverrideTitle: l,
            collectedModalOverrideDescription: i,
            collectedModalGradientColor: a,
        } = (0, nq.z)(),
        { analyticsLocations: s } = (0, tv.Ay)();
    return (0, r.jsx)(li, {
        analyticsLocations: s,
        hideConfetti: t,
        confettiCanvas: n,
        collectedModalOverrideTitle: l,
        collectedModalOverrideDescription: i,
        collectedModalGradientColor: a,
        ...e,
    });
}
let lq = {
    [o.pn.GIFT_CUSTOMIZATION]: () => H.intl.string(H.t["JCFN/y"]),
    [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => H.intl.string(H.t.lDbi6H),
    [o.pn.CONFIRM]: () => "",
};
function lz(e) {
    let { step: t } = e,
        n = lq[t];
    return null == n ? null : (0, r.jsx)(nY.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
}
let l$ = {
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
                        } = (0, nZ.Pv)(),
                        { selectedSkuId: m, checkoutInvoicePreview: h } = (0, E.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                        })),
                        C = (0, n7.gU)(),
                        f = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
                        S = lU(),
                        { analyticsLocations: y } = (0, tv.Ay)(a.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL),
                        A = (0, lG.F5)("CollectiblesPaymentModalGiftCustomizationStep"),
                        { nextTier: I, giftsToNextTier: g } = (0, D.cf)([la.Ay], () => ({
                            nextTier: la.Ay.getNextTier(lr.$.GIFTING),
                            giftsToNextTier: la.Ay.getRemainingToNextTier(lr.$.GIFTING),
                        })),
                        P = A && null != I,
                        v = (0, lG.b9)(`CollectiblesPaymentModalGiftCustomizationStep${P ? "" : "-DISABLED"}`);
                    async function x(e, t) {
                        (p(!0),
                            null != s && o(),
                            (await (0, ls.JJ)(e.id, t)) || o(H.intl.string(H.t["4kgVqQ"])),
                            p(!1));
                    }
                    function _() {
                        return (0, r.jsx)(lB.A, {
                            onTextChange: (e) => i?.(e),
                            pendingText: l,
                            currentText: l,
                            disableThemedBackground: !0,
                            className: lY.iX,
                            innerClassName: lY.pt,
                        });
                    }
                    return (
                        (0, en.Ay)(() => {
                            null != m &&
                                null != c &&
                                (d !== eZ.vQ.DM_CHANNEL_WISHLIST &&
                                    ew.default.track(ez.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: m }),
                                x(c, m));
                        }),
                        {
                            renderLeftColumn: function () {
                                return (0, r.jsx)("div", {
                                    className: lY.qL,
                                    children: (0, r.jsx)(lH.t, { isShopGift: !0 }),
                                });
                            },
                            renderRightColumn: function () {
                                let e = (0, lo.pA)({ invoicePreview: h, selectedSkuId: m, skusById: C });
                                return d === eZ.vQ.USER_PROFILE_WISHLIST || d === eZ.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(lW.Z, { giftRecipient: c }),
                                              _(),
                                              null != e &&
                                                  null != m &&
                                                  (0, r.jsx)(lv, {
                                                      skuId: m,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: lY.uW,
                                                      previewHeaderClassName: lY.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: lY.fi,
                                                  children: (0, r.jsx)(lK, { handleClose: n, selectedSkuId: m }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(lw, {
                                                  selectedSkuId: m,
                                                  recipients: S,
                                                  className: lY.uh,
                                                  validateSelectedGift: x,
                                              }),
                                              _(),
                                              null != e &&
                                                  null != m &&
                                                  (0, r.jsx)(lv, {
                                                      skuId: m,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: lY.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            renderBottomContent: function () {
                                return P
                                    ? (0, r.jsx)(lF.A, {
                                          giftsToNextTier: g,
                                          nextTierName: I.name ?? "",
                                          nextTierIcon: (0, lG.Se)(I, v),
                                          analyticsLocations: y,
                                          className: lY.qr,
                                      })
                                    : null;
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == c || c.id === f?.id || l.length > eZ.Jo,
                            loading: u,
                        }
                    );
                })({ handleStepChange: t, handleClose: n }),
                p = c.useMemo(() => ({ loading: d, disabled: u }), [d, u]);
            return (0, r.jsx)(nK.M, {
                paymentModalStepProps: e,
                layout: s.X.TWO_COLUMN,
                renderLeftColumn: l,
                renderRightColumn: i,
                renderBottomContent: o,
                primaryCTAButtonProps: p,
            });
        },
        [o.pn.REVIEW]: nb.p,
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
                        n = c.useRef(new nz.OH()),
                        [l, i] = c.useState(null),
                        [r, a] = c.useState(!1),
                        s = c.useMemo(() => (0, nJ.AB)({ purchaseType: nX.gs.FIAT, skuId: t }), [t]);
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
                    (0, r.jsx)(n1, {
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
                        purchaseType: te.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, r.jsx)(nq.i.Provider, { value: A, children: n }),
                    }),
                ],
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                { skuIDs: l, setCustomConfettiVisible: i } = (0, nq.z)(),
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
                                (i(!1), n(e), n$.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null }));
                            },
                            [n, i],
                        ),
                        paymentModalOnComplete: a,
                    };
                })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: i });
            return n({ ...t, skuId: r, onClose: a, onComplete: s, applicationId: ez.FYj });
        },
        tenantAnalyticsLocation: a.A.COLLECTIBLES_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            { isGift: n } = (0, nZ.Pv)();
        return n ? (0, r.jsx)(lz, { step: t }) : null;
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(lZ, { ...e }), options: n2 },
};
var lQ = n(809029),
    lJ = n(354033),
    lX = n(554146),
    l0 = n(841702),
    l2 = n(758461),
    l1 = n(501419),
    l3 = n(332026),
    l4 = n(810498),
    l7 = n(557679),
    l6 = n(709870),
    l5 = n(37126),
    l8 = n(412260),
    l9 = n(280761),
    ie = n(492462),
    it = n(741231),
    il = n(920050);
n(92737);
var ii = n(607399),
    ir = n(795791);
function ia(e, t) {
    return !e && t === eZ.pe.TIER_2 && !ii.Ct && !ii.KY && null == (0, ir.uM)();
}
var is = n(645795),
    io = n(625494),
    iu = n(45938),
    ic = n(450047);
function id(e) {
    let { rewardSkuIds: t, onClose: n, onRewardModalClose: l } = e,
        { analyticsLocations: i } = (0, tv.Ay)(),
        a = (0, ic.D)(t),
        [s, ...o] = (0, D.yK)([n6.A], () => t.map((e) => n6.A.getProduct(e)).filter((e) => null != e));
    return (0, r.jsx)(eX.UX, {
        children: (0, r.jsx)(e1.j, {
            children: (0, r.jsx)(e6.$, {
                variant: "primary",
                text: H.intl.formatToPlainString(H.t.o18gVZ, { count: t.length }),
                loading: a,
                fullWidth: !0,
                onClick: () => {
                    null != s &&
                        (n(),
                        (0, le.A)({
                            product: s,
                            remainingProducts: o,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: i,
                            purchaseType: nX.gs.PROMOTIONAL,
                            onCloseCallback: l,
                        }));
                },
            }),
        }),
    });
}
var ip = n(49999);
function im(e) {
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
        } = (0, nZ.Pv)(),
        { confirmationFooter: F } = (0, u.cG)(),
        B = (0, l4.px)(_, N, k),
        H = (0, l4.Mq)(_),
        W =
            (0, l3.Wh)({ location: "PremiumPaymentConfirmStep" }) &&
            (0, l7.M)({ isGift: N, giftRecipient: b, selectedPlanId: _?.id }),
        { purchases: V } = (0, l0.Wg)(!1),
        Y = (0, D.bG)([l8.A], () => l8.A.getGiftPromotion()?.id),
        K = (0, D.bG)([l8.A], () => {
            let e = l8.A.getMarketingComponentByType(tG.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        Z = (0, M.g)(m, A),
        q = null != v ? v.orbsReward : null,
        z = null != q && q > 0,
        $ = N && !W && !z && w.length > 0 && w.every((e) => null != V.get(e)) && H,
        Q = { selectedPlan: _, selectedSkuId: C, step: T };
    if (null == _) throw new f.v({ message: "Expected plan to be selected", extraSentryInformation: Q });
    if (null == C) throw new f.v({ message: "Expected selectedSkuId", extraSentryInformation: Q });
    if (null == T) throw new f.v({ message: "Step should be set", extraSentryInformation: Q });
    let J = c.useCallback(() => {
        (l(), a?.());
    }, [l, a]);
    (0, en.Ay)(() => {
        I &&
            ew.default.track(ez.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != y,
                has_any_premium_group: y?.hasAnyPremiumGroup ?? !1,
                subscription_id: y?.id,
            });
    });
    let X = (0, l2.HH)(),
        ee = (0, l9.U)();
    (c.useEffect(() => {
        function e() {
            if (I)
                if (null != y && y.hasAnyPremiumGroup) {
                    ew.default.track(ez.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: y.id });
                    let e = (0, lO.uniqueId)("premium-group-purchase-flow-modal");
                    (0, nj.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("962811"),
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
                                        (io._.dispatch(ez.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                            await t.onClose());
                                    },
                                });
                        },
                        {
                            onCloseRequest: () => {
                                (io._.dispatch(ez.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, nj.closeModal)(e));
                            },
                            modalKey: e,
                        },
                    );
                } else
                    (ew.default.track(ez.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                        has_updated_subscription: null != y,
                        has_any_premium_group: y?.hasAnyPremiumGroup ?? !1,
                    }),
                        io._.dispatch(ez.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED));
            else
                null != q && q > 0
                    ? (0, l6.$)({ orbsAmount: q, openGiftingBadgePostPurchaseModal: N && G ? U : void 0 })
                    : null != ee && ia(N, C)
                      ? (0, it.A)(ez.BVt.NITRO_HOME, {
                            search: (0, ie.stringify)({ perk: il.RIOT_CREDIT_CAMPAIGN_PERK_CARD_ID }),
                        })
                      : ia(N, C) && (X?.id === l5.Ym || X?.name?.includes(l5.YX)) && (0, l5.tu)();
        }
        return (
            io._.subscribe(ez.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                io._.unsubscribe(ez.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [I, y, q, X, ee, N, C, h, U, G]),
        c.useEffect(() => {
            !N || null == b || null == j || R || O || (0, iu.Ik)(b) || L({ onSubscriptionConfirmation: a });
        }, [L, N, b, j, R, O, a]),
        c.useEffect(() => {
            B &&
                null != K &&
                null != Y &&
                (0, l1.qr)(lX.M.GIFTING_PROMOTION_REMINDER, Y, { dismissAction: ip.i.INDIRECT_ACTION });
        }, [K, Y, B]));
    let et = null != p ? is.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != s) t = s(_, J, y);
    else if (N) t = (0, r.jsx)(is.fw, { planId: _.id, onClose: J, shouldUsePostPurchaseRecipientDelivery: W });
    else {
        let e =
            g === _.id
                ? { postSuccessGuild: o }
                : {
                      followupSKUInfo: d,
                      startingPremiumSubscriptionPlanId: g,
                      isDowngrade: null != h && (0, eK.vT)(h, _.id, i),
                  };
        t = (0, r.jsx)(is.Ay, {
            planId: _.id,
            onClose: J,
            paymentSourceType: Z,
            hideClose: null != F,
            startingFractionalPremiumEndsAt: P,
            customCTAType: et,
            ...e,
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(eX.dZ, { children: [(0, r.jsx)(ln.A, {}), t] }),
            null != F && F,
            $ && (0, r.jsx)(id, { rewardSkuIds: w, onClose: J, onRewardModalClose: U }),
        ],
    });
}
let [ih, iC] = (0, d.A)(),
    iS = {
        CHECKOUT_FLOW: s.C.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: lQ.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: l,
                    } = e,
                    i = c.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(ih.Provider, { value: i, children: (0, r.jsx)(u.Qt, { children: l }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                { guildId: l, listing: i } = iC();
            return (0, r.jsx)(lJ.Y, { onClose: t, listing: i, step: n, guildId: l });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(im, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var iE = n(73825),
    iy = n(892349),
    iA = n(35587),
    iI = n(436102),
    ig = n(594832),
    iP = n(811656),
    iv = n(890856),
    ix = n(947641),
    i_ = n(713517),
    iT = n(837015),
    iN = n(929283),
    ib = n(761365),
    ij = n(47840);
function iR(e) {
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
        { isHoveringOrFocusing: C } = (0, i_.A)(h),
        f = !a && !u && C,
        { product: S } = (0, lf.q)(l);
    if (null == S) return null;
    let E = S.items[0];
    return null == E
        ? null
        : ((0, lS.T)(E)
              ? ((n = lu.R.AVATAR_DECORATION),
                (t = (0, r.jsx)(iN.i, { item: E, user: i, isHighlighted: f, avatarSize: lp._3.SIZE_96 })))
              : (0, iT.F)(E) &&
                ((n = lu.R.NAMEPLATE),
                (t = (0, r.jsx)(ib.A, { nameplate: E, user: i, isHighlighted: f, size: "small" }))),
          (0, r.jsxs)(iv.s, {
              ref: m,
              "aria-label": S.name ?? "",
              onClick: function () {
                  null == l || null == s || a || u || s(l);
              },
              focusProps: { within: !0, offset: -2 },
              className: tc()(ij._x, { [ij.Vp]: !a, [ij.mr]: f, [ij.md]: o }),
              children: [
                  (0, r.jsx)("div", {
                      className: tc()(ij.VH, { [ij._Q]: n === lu.R.AVATAR_DECORATION, [ij.M4]: n === lu.R.NAMEPLATE }),
                      children:
                          null != t
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: tc()(ij.i1, { [ij.r9]: a || u }), children: t }),
                                        a &&
                                            (0, r.jsx)(ix.r, {
                                                size: "custom",
                                                width: 48,
                                                height: 48,
                                                color: tp.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                className: ij.j0,
                                            }),
                                    ],
                                })
                              : null,
                  }),
                  (0, r.jsxs)("div", {
                      className: ij.tZ,
                      children: [
                          (0, r.jsx)(tE.D, { variant: "heading-md/extrabold", children: S.name }),
                          (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              children: a ? H.intl.string(H.t["6cfuDj"]) : H.intl.string(H.t.QQsaCc),
                          }),
                      ],
                  }),
              ],
          }));
}
var iO = n(696208),
    iM = n(820287);
function iL(e) {
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
        { isGift: f, claimableRewards: E } = (0, nZ.Pv)();
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
                c = (0, D.bG)([eE.A], () => eE.A.getPremiumTypeSubscription()),
                d = (0, S.A)(),
                p = (0, ea.s2)(),
                { hasEntitlements: m } = (0, iI.X)(n, l),
                h = (null != c && null != c.paymentSourceId) || Object.keys(r).length > 0 || (m && !s);
            var C = a ? H.intl.string(H.t.PDTjLN) : H.intl.string(H.t.XqMe3N),
                f = o.pn.ADD_PAYMENT_STEPS;
            return (
                h && (f = o.pn.REVIEW),
                (0, l4.px)(d, l, i) && p !== o.pn.SELECT_FREE_SKU && (f = o.pn.SELECT_FREE_SKU),
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
    return (0, r.jsx)(iO.H, {
        leading: !m && a && null != i ? (0, r.jsx)(iM.A, { onClick: i }) : void 0,
        actions: P,
        actionsFullWidth: m,
    });
}
var ik = n(144281);
function iw(e) {
    let { handleStepChange: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        l = (0, S.A)(),
        i = (0, ea.s2)(),
        {
            selectedGiftingPromotionRewards: a,
            setSelectedGiftingPromotionRewards: s,
            claimableRewards: u,
        } = (0, nZ.Pv)(),
        d = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
        p = (0, D.yK)([l8.A], () => l8.A.getGiftPromotionRewardSkuIds()),
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
                iR,
                { skuId: e, claimed: null != u && !u.includes(e), user: d, onSelect: v, isSelected: e === h },
                e,
            ),
        ),
        _ = (0, r.jsx)(eX.UX, {
            children: (0, r.jsx)(iL, {
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
            (0, r.jsx)(nY.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: H.intl.string(H.t.OEtqpm),
                subtitle: H.intl.string(H.t.h2nMp0),
            }),
            (0, r.jsx)(ej.c, { children: (0, r.jsx)("div", { className: ik.Dq, children: x }) }),
            _,
        ],
    });
}
function iD(e) {
    let { handleStepChange: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        l = (0, E.t4)((e) => e.quantity),
        i = (0, S.A)(),
        a = (0, ea.s2)(),
        {
            setSelectedGiftingPromotionRewards: s,
            selectedGiftingPromotionRewards: u,
            claimableRewards: d,
        } = (0, nZ.Pv)(),
        p = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
        m = (0, D.yK)([l8.A], () => l8.A.getGiftPromotionRewardSkuIds()),
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
                iR,
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
        v = (0, r.jsx)(eX.UX, {
            children: (0, r.jsx)(iL, {
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
            (0, r.jsx)(nY.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: H.intl.string(H.t.B2MCEq),
                subtitle: H.intl.formatToPlainString(H.t.UGXnmY, { rewardCount: u.length, maxRewardCount: h }),
            }),
            (0, r.jsx)(ej.c, { children: (0, r.jsx)("div", { className: ik.Dq, children: P }) }),
            v,
        ],
    });
}
function iU(e) {
    return (0, l3.Wh)({ location: "PremiumPaymentFreeSKUSelectStep" })
        ? (0, r.jsx)(iD, { ...e })
        : (0, r.jsx)(iw, { ...e });
}
var iG = n(428644),
    iF = n(396533),
    iB = n(699595),
    iH = n(403689),
    iW = n(421108),
    iV = n(860300),
    iY = n(298305),
    iK = n(805161),
    iZ = n(799636);
function iq(e) {
    let { className: t } = e,
        { enabled: n } = iV.J.useConfig({ location: "PremiumGiftPromotionPlanSelectBanner" }),
        l = (0, D.bG)([l8.A], () => {
            let e = l8.A.getMarketingComponentByType(tG.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: i } = (0, nZ.Pv)(),
        a = Math.min(
            (0, E.t4)((e) => e.quantity),
            i?.length ?? 0,
        ),
        s = (0, tW.T)(l?.asset),
        o = (0, tW.T)(l?.backgroundAsset),
        u = (0, D.bG)([l8.A], () => l8.A.getGiftPromotion()),
        c = (0, iW.dA)(u?.endDate, n),
        d = (0, l4.gc)(o);
    return (null != d && ((d.backgroundSize = "cover, auto"), (d.backgroundPosition = "right center, 0% 0%")),
    null == l || null == i || 0 === i.length)
        ? null
        : (0, r.jsx)(iz, {
              className: t,
              graphic: (0, r.jsx)(iY.A, {
                  claimableRewards: i,
                  maxRewardImageSrc: s ?? "",
                  size: lp._3.SIZE_40,
                  imageScaling: 1.25,
              }),
              header: H.intl.formatToPlainString(iK.default.sUvNeI, { count: a }),
              body: i.length > 0 ? H.intl.formatToPlainString(H.t["2h5M+X"], { availableCount: i.length }) : void 0,
              countdown: c,
          });
}
function iz(e) {
    let { className: t, graphic: n, header: l, body: i, countdown: a } = e;
    return (0, r.jsxs)("div", {
        className: tc()(iZ.KE, t),
        children: [
            (0, r.jsxs)("div", {
                className: iZ.SV,
                children: [
                    n,
                    (0, r.jsxs)("div", {
                        className: iZ.ST,
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
                    className: iZ.gO,
                    children: [
                        (0, r.jsx)(tB.ClockIcon, { size: "xs", color: "currentColor" }),
                        (0, r.jsx)(y.E, { variant: "text-md/medium", color: "text-default", children: a }),
                    ],
                }),
        ],
    });
}
var i$ = n(511484),
    iQ = n(462887),
    iJ = n(97808),
    iX = n(736653),
    i0 = n(854627),
    i2 = n(236834);
let i1 = (e) => {
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
    i3 = (e) => {
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
var i4 = n(940223);
let i7 = function (e) {
    let { className: t } = e,
        n = (0, i2.A)(),
        { avatarSrc: l, eventHandlers: i } = (0, i0.A)({ userId: n?.id, size: lp._3.SIZE_32, animateOnHover: !0 }),
        a = (0, iX.DP)(),
        s = (0, iQ.q)(a),
        o = lj.Ay.getName(n);
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: tc()(i4.$6, t),
              children: [
                  (0, r.jsx)("div", {
                      className: i4.H,
                      children: (0, r.jsx)(iJ.eu, { src: l, "aria-label": n.username, size: lp._3.SIZE_32, ...i }),
                  }),
                  (0, r.jsx)(y.E, {
                      variant: "text-xs/bold",
                      className: i4.U_,
                      children: H.intl.format(H.t.oxhCOl, { userName: o }),
                  }),
                  (0, r.jsx)(s ? i1 : i3, { className: i4.q3 }),
              ],
          });
};
var i6 = n(242124),
    i5 = n(69494),
    i8 = n(845012),
    i9 = n(597770),
    re = n(164503),
    rt =
        (((l = rt || {}).PRIMARY = "primary"),
        (l.SECONDARY = "secondary"),
        (l.WARNING = "warning"),
        (l.ERROR = "error"),
        l),
    rn = (((i = rn || {}).SMALL = "small"), (i.LARGE = "large"), (i.NONE = "none"), i);
let rl = { primary: re.cG, secondary: re.QU, warning: re.SO, error: re._r },
    ri = { small: re.EX, large: re.as, none: null };
class rr extends c.PureComponent {
    static Colors = rt;
    static Sizes = rn;
    render() {
        let { icon: e, color: t, children: n, iconSize: l, className: i, iconClassName: a } = this.props;
        return (0, r.jsxs)(eg.A, {
            className: tc()(re.N4, rl[t], i),
            align: eg.A.Align.CENTER,
            children: [
                (0, r.jsx)(e, { className: tc()(re.Kk, ri[l], a), color: "currentColor" }),
                (0, r.jsx)("div", { children: n }),
            ],
        });
    }
}
var ra = n(651540);
function rs(e) {
    let { giftMessage: t = H.intl.string(H.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: l } = (0, nZ.Pv)();
    return !n || (0, iu.Ik)(l)
        ? null
        : (0, r.jsx)(rr, {
              className: ra.z,
              iconSize: rr.Sizes.SMALL,
              icon: i9.GiftIcon,
              color: null == t ? rr.Colors.PRIMARY : rr.Colors.SECONDARY,
              children: t,
          });
}
var ro = n(577381),
    ru = n(593675);
function rc(e) {
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
        A = (0, i$.YJ)(C),
        I = (0, S.A)(),
        g = (0, ea.s2)(),
        { isGift: P, giftRecipient: x, giftMessage: _, claimableRewards: N } = (0, nZ.Pv)(),
        b = (0, iy.p)("PremiumPaymentPlanSelectStep"),
        j = (0, l4.Mq)(I),
        R = (0, n3.bG)([l8.A], () => {
            let e = l8.A.getMarketingComponentByType(tG.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        O = P && j && null != N && N.length > 0 && R,
        M = (0, lG.F5)("PremiumPaymentPlanSelectStep"),
        { nextTier: L, giftsToNextTier: k } = (0, D.cf)([la.Ay], () => ({
            nextTier: la.Ay.getNextTier(lr.$.GIFTING),
            giftsToNextTier: la.Ay.getRemainingToNextTier(lr.$.GIFTING),
        })),
        w = P && M && null != L,
        U = (0, lG.b9)(`PremiumPaymentPlanSelectStep${w ? "" : "-DISABLED"}`),
        { isHidden: G } = iH.A.useConfig({ location: `PremiumPaymentPlanSelectStep${P ? "" : " - DO NOT USE"}` }),
        F = !(0, ig.tA)({ isGift: P, giftRecipient: x }) && !G,
        B = null;
    O
        ? (B = b
              ? (0, r.jsx)("div", {
                    className: tc()(ru.RC, ru.oq, F ? ru.ek : ru.lz),
                    children: (0, r.jsx)(iq, { className: ru.j2 }),
                })
              : (0, r.jsx)(iq, {}))
        : w &&
          (B = (0, r.jsx)("div", {
              className: tc()(ru.RC, F ? ru.ek : ru.lz),
              children: (0, r.jsx)(lF.A, {
                  giftsToNextTier: k,
                  nextTierName: L.name ?? "",
                  nextTierIcon: (0, lG.Se)(L, U),
              }),
          }));
    let W = (m || h) ?? !1,
        V = (0, iA.Wi)(eZ.ZC),
        Y = W || V,
        K = h && null != A && p.includes(A) ? A : p[0],
        Z = (0, n3.bG)([eY.A], () => eY.A.get(K)),
        q = [{ planId: Z?.id, quantity: 1 }],
        [z, $] = c.useState(W),
        [Q, J] = (0, tN.YV)({
            items: q,
            renewal: !1,
            preventFetch: !Y,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
        });
    (c.useEffect(() => {
        W && $(Q?.subscriptionPeriodEnd == null);
    }, [Q, W]),
        (0, iG.A)(
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
    (0, iB.W)({ priceOptions: u, trialId: a, discountInvoicePreview: Q });
    let el = (0, ro.i)({ planSkuId: Z?.skuId, invoice: Q }),
        { ref: ei, onTransitionEnd: er } = (0, iF.A)({ isExpanded: null != el, minHeightOverride: 0 }),
        es = c.useMemo(
            () =>
                P || Z?.skuId !== eZ.pe.TIER_2 || f?.referrerId == null
                    ? (0, r.jsx)("div", { ref: ei, onTransitionEnd: er, style: { overflow: "hidden" }, children: el })
                    : (0, r.jsx)(i7, { className: ru.ZB }),
            [el, P, Z?.skuId, f?.referrerId, ei, er],
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
    if (en) return (0, r.jsx)(v.Ed, { className: ru.QW });
    (e2()(null != g, "Step should be set"), e2()(p.length > 0, "Premium plan options should be set"));
    let eu = P
        ? (0, r.jsx)(i6.$p, { ...eo })
        : (0, r.jsx)(i8.X, { ...eo, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(rs, { giftMessage: _ }),
            !(P && (0, iu.Ik)(x)) && (0, r.jsx)(i5.A, { isEligibleForTrial: m }),
            (0, r.jsxs)(eX.dZ, {
                children: [
                    !b && es,
                    (0, r.jsx)(ln.A, { className: ru.tg }),
                    et ? (0, r.jsx)(tr.w, { type: "critical", message: X, role: "alert" }) : eu,
                    !b &&
                        ee &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: tc()(ru.IM, ru.Go) }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    children: H.intl.format(H.t.BHtnqA, {
                                        link: e8.A.getArticleURL(ez.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(eX.UX, {
                children: [
                    B,
                    (0, r.jsx)(iL, {
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
var rd = n(989790),
    rp = n(110862),
    rm = n(800471),
    rh = n(169801),
    rC = n(876491);
function rf(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: l,
            priceOptions: i,
            activeSubscription: a,
            getAvailableDefaultPlanId: s,
            referralTrialOfferId: u,
            getIsInOneStepSubscriptionCheckout: c,
        } = (0, E.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            getAvailableDefaultPlanId: e.getAvailableDefaultPlanId,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            getIsInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout,
        })),
        { hasPaymentSources: d } = (0, x.j)(),
        { isGift: p, claimableRewards: m } = (0, nZ.Pv)(),
        h = p && null != m && m.length > 0,
        C = (0, tO.V)(u);
    return (0, r.jsx)(rS, {
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
                    getAvailableDefaultPlanId: u,
                    getIsInOneStepSubscriptionCheckout: c,
                } = e;
                l(n);
                let d = o.pn.PLAN_SELECT,
                    p = (0, k.aZ)(t);
                (p !== eZ.pe.TIER_1 && p !== eZ.pe.TIER_2) || n !== eZ.pe.TIER_0 || r || (d = o.pn.WHAT_YOU_LOSE);
                let m = c({ isTrial: (0, rh.t)({ userTrialOffer: a, isGift: r, skuId: n }), selectedSkuId: n });
                (d !== o.pn.WHAT_YOU_LOSE && m && ((d = o.pn.REVIEW), s((0, rm.x)(n, t, u({ skuId: n })))),
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
                getAvailableDefaultPlanId: s,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                (i((0, k.mH)(eZ.pe.TIER_2)),
                    t(eZ.gD.PREMIUM_GROUP_MONTH),
                    n(l ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: eZ.pe.TIER_2 } }));
            })({ setSelectedPlanId: l, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: n }),
        isGift: p,
        priceOptions: i,
        showPromotionalGiftBanner: h,
    });
}
function rS(e) {
    let { selectSku: t, isGift: n, priceOptions: l, showPromotionalGiftBanner: i, onSelectPremiumGroup: a } = e,
        s = (0, rd.FY)({ isGift: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nY.rQ, { titleTextVariant: "heading-lg/semibold", title: H.intl.string(H.t["r+SebU"]) }),
            s
                ? (0, r.jsx)(ej.c, {
                      children: (0, r.jsx)("div", {
                          className: rC.eE,
                          children: (0, r.jsx)(rp.yS, {
                              onSelectSku: (e) => t((0, k.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: l,
                              showPromotionalGiftBanner: i,
                          }),
                      }),
                  })
                : (0, r.jsx)(ej.c, {
                      children: (0, r.jsx)("div", {
                          className: rC.a2,
                          children: (0, r.jsx)(rp.Ay, {
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
var rE = n(825484),
    ry = n(137728);
function rA(e) {
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
        e2()(null != d, "Expected premium type"),
        (0, r.jsx)(ry.A, {
            premiumType: d,
            titleText: H.intl.string(H.t["7VcWW0"]),
            subtitleText: H.intl.format(H.t.Qk34Ik, { subscriptionName: c }),
            footer: (0, r.jsxs)(rE.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(e6.$, {
                        variant: "primary",
                        text: H.intl.string(H.t["3PatSz"]),
                        onClick: () => {
                            s ? (i((0, rm.x)(l, a)), t(o.pn.REVIEW)) : t(o.pn.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(e6.$, { variant: "secondary", onClick: n, text: H.intl.string(H.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
var rI = n(750532);
let rg = [
        {
            key: o.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(rf, { ...e }),
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
            renderStep: (e) => (0, r.jsx)(rA, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: o.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(rc, { ...e }),
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
            renderStep: (e) => (0, r.jsx)(iU, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    rP = {
        CustomHeaderComponent: rI.kc,
        CHECKOUT_FLOW: el.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: rg,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: lQ.E },
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
                    E = (0, D.bG)([eE.A], () => eE.A.getPremiumTypeSubscription()),
                    y = (0, iA.Sq)() ? eZ.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: A, giftRecipient: I } = C;
                if (null != s && !Object.values(eZ.pe).includes(s))
                    throw Error("subscriptionTier must be a premium subscription");
                let g = (0, ig.tA)({ giftRecipient: I, isGift: A ?? !1 }),
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
                (0, iI.s)(v, () => f.onClose(), A ?? !1);
                let _ = c.useMemo(() => [...eZ.oz], []);
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
                    eY.A.isLoadedForPremiumSKUs() || n$.h.wait(() => (0, iE.zS)());
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
                    { isGift: h, giftRecipient: C } = (0, nZ.Pv)(),
                    f = (0, l3.Wh)({ location: "PremiumPaymentModalRenderer" }),
                    S = (0, iy.p)("PremiumPaymentModalRenderer"),
                    y = m === o.pn.CONFIRM && f && (0, l7.M)({ isGift: h, giftRecipient: C, selectedPlanId: d }),
                    A = ia(h, u),
                    I = p === ed.h.PURCHASING;
                return (0, r.jsx)(iP.A, {
                    isConfirmationStep: m === o.pn.CONFIRM && null == s && null == a,
                    isEligibleForWowMoment: A,
                    shouldPrefetchWowMoment: I,
                    children: n({
                        ...t,
                        onClose: i,
                        analyticsSubscriptionType: ez.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        disableDefaultSlideTransformStyling: y,
                        modalSizeOverride: S ? "md" : t.modalSizeOverride,
                        planGroup: eZ.LE,
                        subscriptionTier: l,
                    }),
                });
            },
            tenantAnalyticsLocation: a.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(im, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var rv = n(143582),
    rx = n(241524),
    r_ = n(19311),
    rT = n(4126),
    rN = n(376747),
    rb = n(875632),
    rj = n(938430);
function rR(e) {
    let { step: t, onClose: n } = e,
        l = (0, rx.A)(rN.T);
    return t === o.pn.CONFIRM || t === o.pn.BENEFITS
        ? (0, r.jsx)("div", {})
        : (0, r.jsxs)("div", {
              className: tc()(rb.N1, nF.G),
              children: [
                  !l &&
                      (0, r.jsx)("div", {
                          className: rb.oZ,
                          "aria-hidden": "true",
                          children: (0, r.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: rb.F0,
                          }),
                      }),
                  (0, r.jsx)(nw.D, {
                      className: rb.G3,
                      onClick: () => n(),
                      "aria-label": H.intl.string(H.t.cpT0Cq),
                      children: (0, r.jsx)(nD.P, { size: "md", color: "currentColor", className: rb.ut }),
                  }),
              ],
          });
}
function rO(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: l, application: i, title: a, subtitle: s, description: o } = e;
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: rb.RP,
              children: (0, r.jsxs)(rT.$K, {
                  children: [
                      (0, r.jsx)(rT.KF, { application: i, asset: t }),
                      (0, r.jsx)(rT.kj, { children: a }),
                      (0, r.jsx)(rT.ri, {}),
                      (0, r.jsx)(rT.Mx, { title: s, description: o }),
                      (0, r.jsx)(rT.iH, { applicationId: i.id, storeListingBenefits: n, skuBenefits: l }),
                  ],
              }),
          });
}
function rM(e) {
    let { tierName: t, onConfirm: n, subscription: l } = e;
    return (0, r.jsxs)("div", {
        className: rb.NV,
        children: [
            (0, r.jsx)("img", { src: rj, alt: "", width: 300, height: 126 }),
            (0, r.jsx)(tE.D, {
                className: rb.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: H.intl.format(H.t.wLFT6z, { tier: t }),
            }),
            (0, r.jsx)(y.E, {
                className: rb.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: H.intl.format(H.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, r.jsx)(eX.UX, {
                children: (0, r.jsx)(r_.Ay, {
                    onPrimary: n,
                    primaryCTA: r_.ti.CONTINUE,
                    primaryText: H.intl.string(H.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var rL = n(967198);
let [rk, rw] = (0, d.A)();
function rD(e) {
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
    return (0, r.jsx)(rk.Provider, { value: s, children: l });
}
n(938796);
var rU = n(266060),
    rG = n(163437),
    rF = n(701273),
    rB = n(859860);
function rH(e) {
    let { onConfirm: t, onCancel: n, title: l, subtitle: i, confirmCta: a, showOpenDiscord: s = !0 } = e;
    return (0, r.jsxs)("div", {
        className: rB.RP,
        children: [
            (0, r.jsx)(tE.D, { className: rB.RS, variant: "heading-lg/extrabold", children: l }),
            null != i
                ? (0, r.jsx)(y.E, { className: rB.sT, variant: "text-sm/normal", color: "text-default", children: i })
                : null,
            (0, r.jsxs)("div", {
                className: rB.UD,
                children: [
                    s &&
                        (0, r.jsx)(e6.$, {
                            variant: "primary",
                            text: H.intl.string(H.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, rF.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(e6.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, r.jsx)(e6.$, {
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
function rW(e) {
    let { onConfirm: t, tierName: n, subscription: l } = e;
    return (0, r.jsxs)("div", {
        className: rB.RP,
        children: [
            (0, r.jsx)(tE.D, {
                className: rB.RS,
                variant: "heading-lg/extrabold",
                children: H.intl.format(H.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(y.E, {
                className: rB.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: H.intl.format(H.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: rB.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: rB.__invalid_openDiscordButton,
                        children: (0, r.jsx)(e6.$, {
                            variant: "primary",
                            text: H.intl.string(H.t["8L5bZG"]),
                            onClick: () => (0, rF.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(e6.$, { variant: "secondary", text: H.intl.string(H.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function rV(e) {
    let { handleStepChange: t, handleClose: n } = e,
        l = (0, rU.K)(),
        { subscriptionMetadataRequest: i } = rw(),
        { application: a } = (0, n4.V)(),
        s = (0, n7.S3)(),
        u = (0, rx.A)(rN.Y),
        d = (0, D.bG)([ef.A], () => ef.A.getGuild(i?.guild_id)),
        p = c.useCallback(() => t(o.pn.REVIEW), [t]);
    if (null == s) return null;
    let m = (0, rG.bg)(s.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eX.dZ, {
                children: u
                    ? (0, r.jsx)(rH, {
                          confirmCta: H.intl.string(H.t.PBHFSq),
                          onConfirm: p,
                          onCancel: n,
                          title: H.intl.format(H.t["6n6oXA"], { tier: s.name }),
                          subtitle: m
                              ? H.intl.string(H.t.lzAoKB)
                              : H.intl.formatToPlainString(H.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(rO, {
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
                (0, r.jsx)(eX.UX, {
                    children: (0, r.jsx)(r_.Ay, {
                        onBack: n,
                        backText: H.intl.string(H.t.TQBY1J),
                        onPrimary: p,
                        primaryCTA: r_.ti.CONTINUE,
                        primaryText: H.intl.string(H.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var rY = n(21161);
function rK(e) {
    let t,
        n,
        { handleClose: l, onSubscriptionConfirmation: i } = e,
        a = (0, rU.K)(),
        { application: s } = (0, n4.V)(),
        { readySlideId: u, updatedSubscription: d } = (0, E.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        p = (0, n7.S3)(),
        m = (0, rx.A)(rN.Y),
        { createMultipleConfettiAt: h } = c.useContext(rY.x),
        C = p?.name ?? "";
    function f() {
        (l(), i?.());
    }
    let S = u === o.pn.CONFIRM,
        y = (0, rG.bg)(p?.flags ?? 0),
        A =
            null != a && a.benefits.length > 0
                ? H.intl.formatToPlainString(H.t["+IQQVM"], { benefitCount: a.benefits.length })
                : null,
        { showBenefitsFirst: I } = rw();
    return (
        I
            ? (t = m
                  ? (0, r.jsx)(rW, { tierName: C, onConfirm: f, subscription: d })
                  : (0, r.jsx)(rM, { tierName: C, onConfirm: f, subscription: d }))
            : m
              ? (t = (0, r.jsx)(rH, {
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
                        ? (0, r.jsx)(rO, {
                              icon: a.thumbnail,
                              storeListingBenefits: a.benefits,
                              application: s,
                              title: H.intl.format(H.t["Q+qktS"], { tier: C }),
                              subtitle: H.intl.string(H.t.ECKxXU),
                              description: y
                                  ? H.intl.format(H.t["MAtQk/"], { applicationName: s?.name })
                                  : H.intl.format(H.t.vHkMF4, { tier: C }),
                          })
                        : (0, r.jsx)(eL.A, {})),
                (n = (0, r.jsx)(r_.Ay, {
                    onPrimary: f,
                    primaryCTA: r_.ti.CONTINUE,
                    primaryText: H.intl.string(H.t["JtWl+a"]),
                }))),
        c.useEffect(() => {
            eI.Ay.useReducedMotion && S && h(window.innerWidth / 2, window.innerHeight / 2);
        }, [h, S]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(eX.dZ, { children: [(0, r.jsx)(ln.A, {}), t] }),
                null != n && (0, r.jsx)(eX.UX, { children: n }),
            ],
        })
    );
}
function rZ(e) {
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
        } = (0, eM.Jn)(),
        { setSubscriptionMetadataRequest: m, guildId: h, showBenefitsFirst: C } = rw(),
        f = (0, eR.Hp)(),
        S = (0, ek.A)(),
        y = (0, ea.qv)(),
        { isGift: A } = (0, nZ.Pv)(),
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
        let e = null != t ? eY.A.get(t) : null;
        g ||
            f ||
            (n((t) => {
                let n = null != e ? (0, k.y8)(e.id, !1, A, { paymentSourceId: s.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: p };
            }),
            null != e && (i(e?.skuId), y(I)));
    }, [f, t, A, g, s, p, l, n, a, i, y, I]),
    g)
        ? (0, r.jsx)(eL.A, {})
        : f
          ? (0, r.jsx)(eO.oO, {})
          : null;
}
var rq = n(786567),
    rz = n(918786),
    r$ = n(639574);
let rQ = (e) => {
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
    rJ = {
        CHECKOUT_FLOW: el.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(rZ, { ...e }) },
        CustomHeaderComponent: function (e) {
            let { step: t, onClose: n } = e,
                l = c.useCallback(() => n(!1), [n]);
            return (0, r.jsx)(rR, { step: t, onClose: l });
        },
        STEPS_BEFORE_CHECKOUT: [
            {
                key: o.pn.BENEFITS,
                renderStep: (e) => (0, r.jsx)(rV, { ...e }),
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
                    { subscriptionMetadataRequest: h, showBenefitsFirst: C } = rw(),
                    y = C ? o.pn.BENEFITS : void 0,
                    A = (0, S.A)(),
                    I = (0, n7.S3)();
                if (null == A)
                    throw new f.v({
                        message:
                            "ApplicationPaymentReviewStep: expected plan to be selected, but selected plan is null",
                        extraSentryInformation: { selectedPlan: A, selectedPlanId: m },
                    });
                let g = c.useRef(null),
                    P = (0, rG.bg)(I?.flags ?? 0);
                c.useEffect(() => {
                    null != d && null != g.current && g.current.scrollIntoView({ behavior: "smooth" });
                }, [d]);
                let v = c.useCallback(() => {
                    t(o.pn.ADD_PAYMENT_STEPS);
                }, [t]);
                return s === ed.h.PURCHASING
                    ? (0, r.jsx)(eL.A, {})
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(eX.dZ, {
                                  children:
                                      null == p
                                          ? (0, r.jsx)(r$._, {
                                                planGroup: n,
                                                handlePaymentSourceAdd: v,
                                                metadata: P ? void 0 : h,
                                            })
                                          : (0, r.jsx)(rz.A, {
                                                handlePaymentSourceAdd: v,
                                                planGroup: n,
                                                hasOpenInvoice: null != l,
                                            }),
                              }),
                              (0, r.jsx)(eX.UX, {
                                  children: (0, r.jsx)(rq.U, {
                                      resolveTenantReviewButtonProps: rQ,
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
                return (0, r.jsx)(rD, {
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
                                    (ng.hP(),
                                    (0, rv.f5)(i),
                                    null != a && a(),
                                    null != i && (l || rL.A.getGuildId() !== i) && (0, lV.pX)(ez.BVt.CHANNEL(i))));
                        },
                        [r, a, l, i],
                    );
                return n({ ...t, onClose: s, forceNewPaymentModal: !0 });
            },
            tenantAnalyticsLocation: a.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(rK, { ...e }) },
    };
var rX = n(341774),
    r0 = n(869038),
    r2 = n(852218),
    r1 = n(7133),
    r3 = n(83617);
let [r4, r7] = (0, d.A)();
function r6(e) {
    let { code: t, onClose: n, children: l } = e,
        i = (0, D.bG)([eE.A], () => eE.A.getMostRecentPremiumTypeSubscription()),
        a = (0, D.bG)([eE.A], () => eE.A.hasFetchedMostRecentPremiumTypeSubscription()),
        s = (0, D.bG)([eE.A], () => eE.A.getPremiumTypeSubscription()),
        [u, d] = c.useState(!1),
        [p, m] = c.useState(null),
        [h, C] = c.useState(null),
        [f, S] = c.useState(!1),
        [y, A] = c.useState(!1);
    c.useEffect(() => {
        (u ||
            (0, iu.GM)(t, !1, !0)
                .then((e) => {
                    let t = r1.A.createFromServer(e);
                    (m(t), d(!0), S(t.promotion?.promotionType === r2.pt.THIRD_PARTY_DIRECT_FULFILLMENT));
                })
                .catch((e) => {
                    (C(e), d(!0));
                }),
            a || (0, ng.I8)());
    }, [t, a, u]);
    let I = (0, eD.p)(),
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
        { displayCurrency: L } = (0, eM.Jn)(),
        k = p?.subscriptionPlan,
        w = p?.promotion,
        U = p?.subscriptionTrial,
        G = null != k ? (0, r3._w)(k, P, !1) : [],
        F = O?.currency ?? L ?? G[0],
        B = c.useMemo(() => (null != P ? { paymentSourceId: P, currency: F } : { currency: F }), [P, F]),
        H = c.useMemo(
            () => ({
                load_id: R.loadId,
                location: ez.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                subscription_type: ez.rzx.PREMIUM,
                payment_type: te.fr[te.VV.SUBSCRIPTION],
                subscription_plan_id: k?.id,
                sku_id: k?.skuId,
                checkout_flow: el.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            }),
            [R.loadId, k?.id, k?.skuId],
        ),
        W = c.useCallback(() => {
            n?.(j === ed.h.COMPLETED);
        }, [n, j]),
        V = c.useCallback(async () => {
            let e = (0, M.W)(g, P);
            if (null == e) return !1;
            (x(!0), b(null), N(ed.h.PURCHASING));
            try {
                return (
                    await r0.Ay.redeemGiftCode({ code: t, options: { paymentSource: e } }),
                    N(ed.h.COMPLETED),
                    ew.default.track(ez.HAw.PAYMENT_FLOW_COMPLETED, { ...H }),
                    !0
                );
            } catch (t) {
                return (
                    N(ed.h.FAIL),
                    b(t),
                    ew.default.track(ez.HAw.PAYMENT_FLOW_FAILED, {
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
        Y = c.useRef(!1),
        K = c.useCallback(() => {
            Y.current ||
                ((Y.current = !0),
                V()
                    .then((e) => {
                        _(e ? o.pn.CONFIRM : o.pn.REVIEW);
                    })
                    .finally(() => {
                        Y.current = !1;
                    }));
        }, [V, _]);
    return (
        (0, eC.QR)(v),
        (0, eC.b)(T, v, _, N, !0, K),
        (0, r.jsx)(r4.Provider, {
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
                redeemPromotion: V,
                confirmedUpgrade: y,
                setConfirmedUpgrade: A,
            },
            children: l,
        })
    );
}
var r5 = n(830215),
    r8 = n(264779),
    r9 = n(314019),
    ae = n(554632);
function at(e) {
    let { user: t, code: n, className: l } = e;
    return (0, r.jsx)(y.E, {
        className: tc()(l, r9.iZ),
        variant: "text-md/normal",
        children: H.intl.format(H.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, r.jsx)(
                    iJ.eu,
                    {
                        className: r9.FL,
                        size: lp._3.SIZE_24,
                        src: t.getAvatarURL(null, 24),
                        "aria-label": lj.Ay.getUserTag(t, { decoration: "never" }),
                    },
                    n,
                );
            },
            tag: lj.Ay.getUserTag(t),
            logoutHook: () => {
                r5.A.logout("inbound_promotion_redemption_modal", ez.BVt.BILLING_PROMOTION_REDEMPTION(n));
            },
        }),
    });
}
function an(e) {
    let { promotion: t, code: n, isDirectFulfillment: l } = e,
        i = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
        a = (0, iX.Ay)(),
        s = (0, r8.WD)(t.id, a);
    return (0, r.jsxs)("div", {
        className: r9.rN,
        children: [
            (0, r.jsxs)("div", {
                className: r9.u5,
                children: [
                    (0, r.jsx)("img", { alt: "", src: s, className: r9.hb }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(tE.D, {
                                variant: "heading-xl/bold",
                                className: r9.DD,
                                children: t.inboundHeaderText,
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-sm/normal",
                                className: r9.G3,
                                children: t.inboundBodyText,
                            }),
                        ],
                    }),
                ],
            }),
            l || null == i ? null : (0, r.jsx)(at, { className: r9.KZ, user: i, code: n }),
        ],
    });
}
function al(e) {
    let { title: t, bodyText: n, helpCenterLink: l, showUser: i = !1, user: a, code: s, handleClose: o } = e,
        u = c.useMemo(() => ({ text: H.intl.string(H.t.BddRzS), onClick: o }), [o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: r9.t4,
                children: [
                    (0, r.jsx)("img", { alt: "", src: ae, className: r9.M6 }),
                    (0, r.jsx)(tE.D, { variant: "heading-lg/semibold", className: r9.DD, children: t }),
                    (0, r.jsx)(y.E, { variant: "text-md/normal", className: r9.G3, children: n }),
                    null != l
                        ? (0, r.jsx)(y.E, {
                              variant: "text-md/normal",
                              className: r9.G3,
                              children: H.intl.format(H.t["4uSp2y"], { helpCenterLink: l }),
                          })
                        : null,
                    i && null != a ? (0, r.jsx)(at, { className: r9.EF, user: a, code: s }) : null,
                ],
            }),
            (0, r.jsx)(eo.lo, { primaryButtonProps: u }),
        ],
    });
}
function ai(e) {
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
        } = r7(),
        C = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
        f = (0, eR.Hp)(),
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
                    errorCode: eZ.JR.USER_NOT_VERIFIED,
                };
            if (null != l && l.code === ez.t02.INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED)
                return {
                    title: H.intl.string(H.t.BHxy59),
                    body: H.intl.string(H.t["1wokFq"]),
                    errorCode: eZ.JR.PREVIOUS_SUBSCRIBER,
                };
            if (null == n)
                return {
                    title: H.intl.string(H.t.ARIsMA),
                    body:
                        null != l && l.code === ez.t02.INVALID_GIFT_REDEMPTION_INCORRECT_USER
                            ? H.intl.string(H.t.S8TNKh)
                            : H.intl.string(H.t["1AceQR"]),
                    errorCode: eZ.JR.NO_CODE_BODY,
                };
            if (null != l || null == a || null == s || null == r)
                return {
                    title: H.intl.string(H.t.ARIsMA),
                    body: H.intl.string(H.t["3u+6q7"]),
                    errorCode: eZ.JR.NO_PROMOTION,
                };
            if (n.isClaimed)
                return {
                    title: H.intl.string(H.t.ARIsMA),
                    body: H.intl.string(H.t.u9IQuM),
                    errorCode: eZ.JR.CODE_CLAIMED,
                };
            if (null == i) return null;
            let o = (0, k.EL)(i)?.planId;
            return null != o && i.status === ez.Dmq.ACTIVE && k.Ay.getPremiumType(o) === eZ.PremiumTypes.TIER_2
                ? {
                      title: H.intl.string(H.t.BHxy59),
                      body: H.intl.formatToPlainString(H.t.wpwuoV, {
                          months: s.intervalCount,
                          planName: (0, k.RH)(r.id),
                      }),
                      errorCode: eZ.JR.EXISTING_SUBSCRIBER,
                  }
                : null;
        })({ user: C, giftCode: i, giftCodeResolveError: p, recentSubscription: h, plan: a, promotion: s, trial: u });
    return (c.useEffect(() => {
        S ||
            ew.default.track(ez.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
                is_eligible: null == E && !f,
                error_code: null != E ? E.errorCode : f ? eZ.JR.BLOCKED_PAYMENT : null,
                promotion_id: i?.promotion?.id,
            });
    }, [S, E, f, i]),
    c.useEffect(() => {
        S || null != E || f || t(o.pn.PROMOTION_INFO);
    }, [S, E, f, t]),
    S)
        ? (0, r.jsx)(eL.A, {})
        : null != E
          ? (0, r.jsx)(al, {
                title: E.title,
                bodyText: E.body,
                helpCenterLink: s?.inboundHelpCenterLink ?? "",
                showUser: E.showUser,
                handleClose: n,
                user: C ?? void 0,
                code: l,
            })
          : f
            ? (0, r.jsx)(eO.oO, {})
            : null;
}
function ar(e) {
    let { plan: t, isDirectFulfillment: n, addPaymentMethodStepState: l, handleClose: i } = r7();
    e2()(null != t, "Missing plan");
    let { paymentSources: a, paymentSourceId: s } = l,
        o = (0, M.g)(a, s);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eX.dZ, {
                children: (0, r.jsx)(is.Ay, { hideClose: !0, planId: t.id, onClose: i, paymentSourceType: o }),
            }),
            n
                ? (0, r.jsx)(eX.UX, {
                      children: (0, r.jsx)(iO.H, {
                          actions: [{ text: H.intl.string(H.t.UQvCf7), variant: "primary", onClick: i, size: "md" }],
                      }),
                  })
                : null,
        ],
    });
}
function aa(e) {
    let { handleStepChange: t } = e,
        { promotion: n, code: l, isDirectFulfillment: i } = r7();
    return (
        e2()(null != n, "Missing promotion"),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eX.dZ, { children: (0, r.jsx)(an, { promotion: n, code: l, isDirectFulfillment: i }) }),
                (0, r.jsx)(eX.UX, {
                    children: (0, r.jsx)(eo.lo, {
                        primaryButtonProps: { text: H.intl.string(H.t.PDTjLN), onClick: () => t(o.pn.REVIEW) },
                    }),
                }),
            ],
        })
    );
}
var as = n(732159),
    ao = n(262427),
    au = n(134638);
let ac = { headerBadgePreset: "trial" };
function ad(e) {
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
    let p = i
            ? [{ key: "fractional-premium-notice", directContent: (0, r.jsx)(ap, { fractionalPremiumInfo: a }) }]
            : null,
        m = (0, r.jsx)(am, { plan: t, renewalInvoicePreview: n }),
        h = (0, r.jsx)(ah, { renewalInvoicePreview: n, subscriptionTrial: l });
    return (0, r.jsx)(v.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: ac,
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
            (0, r.jsx)(ao.J, {
                text: H.intl.format(H.t.A1MiZN, { months: l.intervalCount, planName: (0, k.RH)(t.id) }),
            }),
    });
}
function ap(e) {
    let { fractionalPremiumInfo: t } = e,
        n = (0, tL.NQ)({ fractionalPremiumInfo: t, variant: tL.uA.TRIAL });
    return null != n && "" !== n ? (0, r.jsx)(tr.w, { type: "info", message: n, role: "static" }) : null;
}
function am(e) {
    let { plan: t, renewalInvoicePreview: n } = e;
    return (0, r.jsx)(au._, {
        type: _.u$.PREMIUM_WITH_TRIAL,
        invoicePreview: n,
        subscriptionPlan: t,
        isPrepaidPaymentSource: !1,
    });
}
function ah(e) {
    let { renewalInvoicePreview: t, subscriptionTrial: n } = e;
    if (null == t) return (0, r.jsx)(tg.y, {});
    let l = (0, O.Gj)(null, t, n, { isSubscriptionUpdate: !1 });
    return (0, r.jsx)(G._D, { ...l, defaultExpanded: !0 });
}
let aC = [...eZ.oz],
    af = [
        {
            key: o.pn.PROMOTION_INFO,
            renderStep: (e) => (0, r.jsx)(aa, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    ],
    aS = {
        CHECKOUT_FLOW: el.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(ai, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
        STEPS_BEFORE_CHECKOUT: af,
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
                    } = r7();
                e2()(null != l && null != i, "Missing plan or trial");
                let { paymentSources: C, paymentSourceId: f, setPaymentSourceId: S, isSubmittingCurrentStep: A } = u,
                    I = (0, D.bG)([eE.A], () => eE.A.getPremiumTypeSubscription()),
                    { analyticsLocations: P } = (0, tv.Ay)(),
                    {
                        hasAcceptedTerms: v,
                        checkoutPaymentSources: x,
                        checkoutInvoicePreview: _,
                    } = (0, E.t4)((e) => ({
                        hasAcceptedTerms: e.hasAcceptedTerms,
                        checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        checkoutInvoicePreview: e.checkoutInvoicePreview,
                    })),
                    T = (0, tx.A)(),
                    { immediateDelivery: N } = (0, b.U)(),
                    [j, R] = (0, tN.YV)({
                        items: [{ planId: l.id, quantity: 1 }],
                        renewal: !0,
                        paymentSourceId: f,
                        code: n,
                        subscriptionId: I?.id,
                        analyticsLocations: P,
                        analyticsLocation: ez.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                    });
                (0, t_.F)(j, R);
                let U = c.useCallback(async () => {
                        function e() {
                            return t(o.pn.CONFIRM);
                        }
                        null == I || p || null == i || null == a
                            ? (await d()) && e()
                            : (0, nj.openModal)((t) => {
                                  let n;
                                  if (null == _) n = (0, r.jsx)(tg.y, { className: r9.wG });
                                  else {
                                      let e = (0, k.y8)(l.id, !1, !1, s);
                                      n = (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(y.E, {
                                                  className: r9.ex,
                                                  variant: "text-md/normal",
                                                  children: H.intl.format(H.t.DLsu0k, {
                                                      lineItemsHook: function (e, t) {
                                                          return (0, r.jsx)(
                                                              "ul",
                                                              {
                                                                  children: I.items.map((e) => {
                                                                      let t = eZ.hd[e.planId],
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
                                                      newPlanName: eZ.hd[l.id].name,
                                                  }),
                                              }),
                                              (0, r.jsx)(y.E, {
                                                  className: r9.ex,
                                                  variant: "text-sm/normal",
                                                  children: H.intl.format(H.t.KHvyu5, {
                                                      newPlanName: eZ.hd[l.id].name,
                                                      trialMonths: i.intervalCount,
                                                      helpCenterLink:
                                                          a.inboundHelpCenterLink ?? e8.A.getArticleURL(ez.MVz.BILLING),
                                                      planPrice: (0, w.$g)(e.amount, _.currency),
                                                  }),
                                              }),
                                          ],
                                      });
                                  }
                                  return (0, r.jsx)(as.u, {
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
                    F = (0, t$.iB)({
                        checkoutPaymentSources: x,
                        paymentSourceId: f,
                        location: "InboundPromotionReviewStep",
                    }),
                    B = (0, eW.Y)(),
                    W = (0, M.W)(C, f),
                    V = c.useMemo(
                        () => ({
                            prependOption:
                                0 === Object.keys(C).length ? { label: H.intl.string(H.t.iA5vA1), value: null } : null,
                            isTrial: !0,
                        }),
                        [C],
                    );
                if (null != R && null == _)
                    return (0, r.jsx)(al, {
                        title: H.intl.string(H.t.ARIsMA),
                        bodyText: H.intl.string(H.t["3u+6q7"]),
                        helpCenterLink: a?.inboundHelpCenterLink ?? "",
                        handleClose: h,
                        user: void 0,
                        code: n,
                    });
                if (!B || null == _) return (0, r.jsx)(tg.y, {});
                let Y = (0, r.jsx)(g.N, {
                        setPaymentSourceId: S,
                        paymentSourceId: f,
                        location: "InboundPromotionReview",
                        label: H.intl.string(H.t["mmDvV+"]),
                        additionalPaymentSourceDropdownProps: V,
                        onPaymentSourceAdd: () => t(o.pn.ADD_PAYMENT_STEPS),
                        hideCurrencySelect: !0,
                    }),
                    K = (0, L.de)({ renewalInvoice: _, isSubscriptionUpdate: !1 }),
                    { renewalPrice: Z, multiPeriodDiscountAttributes: q } = (0, O.QM)(_, l, {
                        discountOffer: null,
                        subscriptionTrial: i,
                    }),
                    z = H.intl.formatToPlainString(H.t.BQPav6, { planPremiumType: k.Ay.getDisplayName(l.id) }),
                    $ = (0, r.jsx)(G._P, {
                        variant: {
                            type: G.I0.SubscriptionTrial,
                            purchaseButtonText: z,
                            totalDue: 0,
                            renewalPrice: Z,
                            currency: _.currency,
                            interval: l.interval,
                            intervalCount: l.intervalCount,
                            startDate: K,
                            multiPeriodDiscountAttributes: q,
                        },
                        paymentSourceType: (0, M.W)(C, f)?.type ?? null,
                        immediateDelivery: N,
                    }),
                    Q = null;
                return (
                    null == W ? (Q = H.intl.string(H.t.L7jbQV)) : v || (Q = H.intl.string(H.t.XdvBLS)),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(eX.dZ, {
                                children: [
                                    (0, r.jsx)(ln.A, {}),
                                    (0, r.jsx)(ad, {
                                        plan: l,
                                        renewalInvoicePreview: _,
                                        subscriptionTrial: i,
                                        shouldShowFractionalPremiumBanner: T.isFractionalPremiumActive,
                                        fractionalPremiumInfo: T,
                                        paymentMethodContent: Y,
                                        legalContent: $,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(eX.UX, {
                                children: (0, r.jsx)(eo.lo, {
                                    onBackClick: () => t(o.pn.PROMOTION_INFO),
                                    primaryButtonProps: {
                                        text: z,
                                        tooltipText: Q ?? void 0,
                                        disabled: null == W || !W.canRedeemTrial() || F || !v,
                                        loading: A,
                                        onClick: () => {
                                            if (null != W && v) return U();
                                        },
                                        variant: (0, r_.CY)(r_.ti.PURCHASE),
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
                    s = (0, D.bG)([eE.A], () => eE.A.getPremiumTypeSubscription());
                return (0, r.jsx)(ei.M, {
                    activeSubscription: s,
                    stepConfigs: n,
                    skuIDs: aC,
                    loadId: l,
                    unifiedCheckoutFlow: el.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
                    children: (0, r.jsx)(u.Qt, { children: (0, r.jsx)(r6, { code: t, onClose: i, children: a }) }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
                return n({ ...t, shakeWhilePurchasing: !0, tenantManagesPaymentAuth: !0 });
            },
        },
        CustomHeaderComponent: function (e) {
            let { step: t } = e,
                { plan: n, handleClose: l } = r7(),
                i = (0, E.t4)((e) => e.purchaseState);
            return (0, r.jsx)(rX.A, {
                enablePremiumBrandRefresh: !0,
                forceBrandRefreshHeader: !0,
                premiumType: n?.premiumSubscriptionType ?? eZ.PremiumTypes.TIER_2,
                className: r9.X9,
                currentStep: t,
                purchaseState: i,
                hideCloseButton: !0,
                onClose: l,
            });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(ar, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    };
var aE = n(694306);
function ay(e) {
    let { handleClose: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        { application: l } = (0, n4.V)(),
        i = (0, n7.gU)(),
        { isGift: a, giftRecipient: s } = (0, nZ.Pv)();
    (e2()(null != n, "Expected selectedSkuId"), e2()(null != l, "Expected application"));
    let o = i[n];
    e2()(null != o, "Expected sku");
    let u = a
        ? H.intl.formatToPlainString(H.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: s?.username ?? "your recipient",
          })
        : H.intl.formatToPlainString(H.t.wK0IbP, { applicationName: l.name, itemName: o.name });
    return (0, r.jsxs)(eX.dZ, {
        children: [
            (0, r.jsx)(ln.A, {}),
            (0, r.jsxs)("div", {
                className: aE.EL,
                children: [
                    (0, r.jsx)(tE.D, { variant: "heading-xxl/bold", className: aE.RS, children: "Success!" }),
                    (0, r.jsx)(y.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: aE.yF }),
                    (0, r.jsx)(e6.$, { onClick: t, text: H.intl.string(H.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var aA = n(67480),
    aI = n(328968),
    ag = n(371794),
    aP = n(78741);
o.pn.GIFT_CUSTOMIZATION;
let av = {
    CustomHeaderComponent: function (e) {
        let { step: t, onClose: n } = e,
            l = c.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(rR, { step: t, onClose: l });
    },
    CHECKOUT_FLOW: s.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, nZ.Pv)(),
                i = (0, E.t4)((e) => e.selectedSkuId),
                a = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
                o = (0, D.bG)([aA.A], () => (null != i ? aA.A.get(i) : null), [i]),
                u = lU(),
                d = (0, D.bG)([aI.A], () => (null != i ? aI.A.getForSKU(i) : null), [i]),
                p =
                    d?.headerBackground != null && o?.applicationId != null
                        ? (0, ag.YE)(o.applicationId, d.headerBackground, 256)
                        : void 0;
            async function m(e, t) {}
            let h = null == l || l.id === a?.id || t.length > eZ.Jo,
                C = c.useMemo(() => ({ disabled: h }), [h]);
            return (0, r.jsx)(nK.M, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: s.X.TWO_COLUMN,
                renderLeftColumn: function () {
                    return (0, r.jsxs)("div", {
                        className: aP.P6,
                        children: [
                            o?.name != null &&
                                (0, r.jsx)(tE.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != p && (0, r.jsx)("img", { src: p, alt: o?.name ?? "", className: aP.LC }),
                        ],
                    });
                },
                renderRightColumn: function () {
                    return (0, r.jsxs)("div", {
                        className: aP.P6,
                        children: [
                            (0, r.jsx)(lw, { recipients: u, selectedSkuId: i, validateSelectedGift: m }),
                            (0, r.jsx)(lB.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: aP.iX,
                                innerClassName: aP.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: C,
            });
        },
        [o.pn.REVIEW]: nb.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(ay, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: a.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var ax = n(429913),
    a_ = n(733391),
    aT = n(638495),
    aN = n(871123),
    ab = n(26594),
    aj = n(510022),
    aR = n(317560),
    aO = n(275256),
    aM = n(910200),
    aL = n(818189);
function ak(e) {
    let { handleClose: t } = e,
        n = (0, aT.k)(),
        { analyticsLocations: l } = (0, tv.Ay)(),
        { selectedSkuId: i, entitlementsGranted: a } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, n4.V)(),
        o = (0, n7.gU)(),
        { isGift: u, giftRecipient: d } = (0, nZ.Pv)();
    (e2()(null != i, "Expected selectedSkuId"), e2()(null != s, "Expected application"));
    let p = o[i];
    e2()(null != p, "Expected sku");
    let m = a.find((e) => e.sku_id === i),
        h = (0, ab.G)(m, { isGift: u });
    return (c.useEffect(() => {
        u ||
            ((0, aR.j)(n),
            t(),
            (0, aj.n)({ sku: p, application: s, analyticsLocations: l, entitlement: m, contextKey: n }));
    }, [u, p, s, t, l, m, n]),
    u)
        ? (0, r.jsxs)(eX.dZ, {
              children: [
                  (0, r.jsx)(ln.A, {}),
                  (0, r.jsxs)("div", {
                      className: aL.EL,
                      children: [
                          (0, r.jsx)("div", {
                              className: aL.KD,
                              children: (0, r.jsx)(aO.default, {
                                  imageUrl: (0, aN.fq)(p) ?? void 0,
                                  backgroundImageUrl: (0, aN.xf)(p),
                                  altText: p.name,
                                  rewardGraphic: h?.graphic,
                              }),
                          }),
                          (0, r.jsx)(tE.D, {
                              variant: "heading-xl/semibold",
                              className: aL.RS,
                              children: H.intl.string(H.t["5glWta"]),
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-md/normal",
                              children: H.intl.formatToPlainString(H.t["2VjPTw"], {
                                  itemName: p.name,
                                  giftRecipient: d?.username ?? "your recipient",
                              }),
                          }),
                          null != h &&
                              (0, r.jsx)("div", {
                                  className: aL.Is,
                                  children: (0, r.jsx)(aM.O0, { Icon: h.Icon, text: h.text }),
                              }),
                          (0, r.jsx)("div", {
                              className: aL.UD,
                              children: (0, r.jsx)(e6.$, {
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
var aw = n(889137),
    aD = n(742158),
    aU = n(198052),
    aG = n(354972),
    aF = n(650588),
    aB = n(993046),
    aH = n(763827),
    aW = n(403362),
    aV = n(969724),
    aY = n(832163),
    aK = n(2157),
    aZ = n(44724),
    aq = n(980094),
    az = n(366523),
    a$ = n(806931),
    aQ = n(733211);
function aJ(e) {
    let { handleClose: t, sku: n, application: l } = e,
        i = c.useCallback(() => {
            (0, aZ.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        a = c.useCallback(() => {
            t();
            let e = aY.A.getStorefrontState(n.applicationId)?.activePage;
            (0, aN.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: l?.guildId,
                skuId: n.id,
            }) ||
                ((0, nj.closeAllModals)(),
                (0, aZ.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, l]);
    return (0, r.jsx)("div", {
        className: aQ.$O,
        children: (0, r.jsx)(e4.Q, {
            text: H.intl.string(H.t.ImioFL),
            onMouseDown: i,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let aX = {
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
                        } = (0, nZ.Pv)(),
                        A = (0, E.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, n4.V)(),
                        g = (0, D.bG)([F.default], () => F.default.getCurrentUser()),
                        P =
                            ((t = g?.id),
                            (n = lU()),
                            (l = (function (e) {
                                let t = (0, D.bG)([aH.A], () => (aH.A.isConnected() ? aH.A.getChannelId() : null)),
                                    [n, l] = c.useState([]);
                                return (
                                    c.useEffect(() => {
                                        let n = null != t ? aU.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, a$.Xw)(t) && !(0, a$.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        (i.sort((e, t) =>
                                            (0, a$.Ay)(e) && !(0, a$.Ay)(t)
                                                ? -1
                                                : (0, a$.Ay)(t) && !(0, a$.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user)));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (i = (0, D.yK)([F.default], () => S?.map(F.default.getUser).filter(aW.Vq) ?? [], [S])),
                            c.useMemo(
                                () =>
                                    lM().uniqWith(
                                        [...(null != d ? [d] : []), ...i, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, i, l, n],
                            )),
                        v = (0, D.bG)([aA.A], () => (null != A ? aA.A.get(A) : null), [A]),
                        { userPrice: x } = (0, aB.CD)({ sku: v, priceSetAssignmentPurchaseType: ez.lid.GIFT }),
                        _ = (0, aK.D)({ surface: "gift_customization", applicationId: I?.id, skuId: v?.id }),
                        T = (0, aN.fq)(v),
                        N = (0, aN.xf)(v);
                    async function b(e, t) {}
                    function j(e) {
                        null != C && C(null == e ? void 0 : e);
                    }
                    function R() {
                        return (0, r.jsxs)("div", {
                            className: aQ.mT,
                            children: [
                                null != T &&
                                    (0, r.jsx)(az.A, {
                                        containerClassName: aQ.T3,
                                        cardImage: T,
                                        cardBackgroundImage: N,
                                        altText: v?.name ?? "",
                                        shape: "square",
                                    }),
                                (0, r.jsxs)("div", {
                                    className: aQ._T,
                                    children: [
                                        (0, r.jsx)(aF.A, { sound: m, onSelect: j }),
                                        (0, r.jsx)(aG.A, {
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
                            className: aQ.Tc,
                            children: [
                                null != d && (f === eZ.vQ.USER_PROFILE_WISHLIST || f === eZ.vQ.DM_CHANNEL_WISHLIST)
                                    ? (0, r.jsx)(lW.Z, { giftRecipient: d })
                                    : (0, r.jsx)(lw, { selectedSkuId: A, validateSelectedGift: b, recipients: P }),
                                (0, r.jsx)(lB.A, {
                                    onTextChange: (e) => u?.(e),
                                    pendingText: o,
                                    currentText: o,
                                    disableThemedBackground: !0,
                                    className: aQ.iX,
                                    innerClassName: aQ.pt,
                                }),
                                null == v
                                    ? null
                                    : (0, r.jsxs)("div", {
                                          className: aQ.AN,
                                          children: [
                                              (0, r.jsx)(aD.z, {
                                                  className: aQ.jr,
                                                  children: H.intl.string(H.t.PpoJzt),
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: aQ.Wx,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: aQ.Xb,
                                                          children:
                                                              null != v &&
                                                              null != T &&
                                                              (0, r.jsx)(az.A, {
                                                                  containerClassName: aQ.Iy,
                                                                  cardImage: T,
                                                                  cardBackgroundImage: N,
                                                                  altText: v.name,
                                                                  shape: "square",
                                                              }),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                          className: aQ.vz,
                                                          children: [
                                                              null != I && (0, r.jsx)(aq.Q, { application: I }),
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
                                    (0, aV.Ri)(v) &&
                                    (0, r.jsx)(tr.w, {
                                        type: "info",
                                        message: H.intl.string(H.t.lORYb6),
                                        role: "static",
                                    }),
                                null != _ &&
                                    (0, r.jsx)(aM.O0, {
                                        Icon: _.Icon,
                                        text: _.text,
                                        endDatetime: _.endsAt,
                                        tooltip: _.tooltip,
                                    }),
                                null != v && (0, r.jsx)(aJ, { handleClose: s, sku: v, application: I }),
                            ],
                        });
                    }
                    return {
                        renderStepBody: function () {
                            return (0, r.jsxs)("div", { className: aQ.Du, children: [R(), O()] });
                        },
                        getLeftColumnComponent: R,
                        getRightColumnComponent: O,
                        onStepChange: a,
                        onBackClick: s,
                        disabled: null == d || d.id === g?.id || o.length > eZ.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = c.useMemo(() => ({ disabled: i }), [i]);
            return (0, r.jsx)(nK.M, {
                paymentModalStepProps: e,
                layout: s.X.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: a,
            });
        },
        [o.pn.REVIEW]: nb.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(ak, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: l, applicationId: i, isGift: a, skuId: s, ...o } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, ax.h)(t);
                    c.useEffect(() => {
                        null == l || null == n || aA.A.isFetching(n) || null != aA.A.get(n) || (0, a_.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: i, skuId: s }),
                (0, r.jsx)(ei.M, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: i,
                    skuIDs: [s],
                    purchaseType: te.VV.ONE_TIME,
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
            n = (0, aw.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => H.intl.string(H.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => H.intl.string(H.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(nY.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var a0 = n(977445),
    a2 = n(52635),
    a1 = n(211287),
    a3 = n(132500),
    a4 = n(623373),
    a7 = n(739508),
    a6 = n(310829),
    a5 = n(715054);
(0, a3.A)();
var a8 = n(457008),
    a9 = n(145659);
n(322076);
var se = n(318254),
    st = n(132198),
    sn = n(120992),
    sl = n(270927),
    si = n(319820),
    sr = n(831123);
function sa(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: l, isSocialLayerGameItem: i } = (0, si.AO)({ sku: t }),
        a = (0, sl.oO)(l);
    i ? (a = H.intl.string(Z.default.qwSlCO)) : (0, a4.Ab)(l) && (a = H.intl.string(H.t["0TmQRG"]));
    let s = (0, sl.dL)(t),
        o = (0, nX.EZ)(t.id) ? st.m[t.id].render({ className: sr.$ }) : (0, r.jsx)(tJ.WH, { sku: t, product: l });
    return (0, r.jsx)(tJ.f7, { label: s, description: a, graphic: o, price: null != n ? `${n}` : "", PriceIcon: se.C });
}
function ss(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, sn.c)({ applicationId: (0, a6.P)(t), skuIDs: [t] });
    let l = (0, n3.bG)([aA.A], () => aA.A.get(t), [t]);
    return null == l
        ? (0, r.jsx)(tg.y, { type: tg.y.Type.PULSING_ELLIPSIS })
        : (0, r.jsx)(sa, { sku: l, orbPriceAmount: n });
}
function so(e) {
    let { orbBalance: t } = e;
    return (0, r.jsx)(G.vW, { label: H.intl.string(H.t.y0WGqP), value: null != t ? `${t}` : "", Icon: se.C });
}
function su() {
    return H.intl.string(H.t.wmcDyu);
}
function sc() {
    let { immediateDelivery: e } = (0, b.U)(),
        { skuProductLine: t, skuId: n } = sp(),
        l = su(),
        i = (0, c.useMemo)(() => ({ type: G.I0.OrbsRedemption, purchaseButtonText: l }), [l]);
    return t === ez.EZt.SOCIAL_LAYER_GAME_ITEM
        ? (0, r.jsx)(a2.EB, { skuId: n, purchaseButtonText: l, checkoutLegalType: G.I0.OrbsGameShop })
        : (0, r.jsx)(G._P, { variant: i, paymentSourceType: null, immediateDelivery: e });
}
let sd = (0, c.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    skuProductLine: null,
    skuApplicationId: void 0,
    analyticsSourceLocation: void 0,
});
function sp() {
    return (0, c.useContext)(sd);
}
let sm = { payment_gateway: te.kM.VIRTUAL_CURRENCY, currency: ez.Yri.DISCORD_ORB },
    sh = {
        CHECKOUT_FLOW: s.C.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    { primaryButtonProps: n, ...l } = (function (e) {
                        let { handleStepChange: t } = e,
                            { isRedeeming: n, skuId: l, skuApplicationId: i } = sp(),
                            { enabled: a } = a1.A.useConfig({ location: "orb_checkout_review_step" }),
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
                                    } = sp(),
                                    { analyticsLocations: d } = (0, tv.Ay)(),
                                    { setPurchaseState: p, firstConstraintReasonCode: m } = (0, E.t4)((e) => ({
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    h = (0, nP.gN)(),
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
                                            { activitySessionId: s } = (0, n4.V)(),
                                            { hasPaymentSources: u } = (0, x.j)(),
                                            {
                                                loadId: d,
                                                startTime: p,
                                                discoverySessionId: m,
                                            } = (0, E.t4)((e) => e.contextMetadata),
                                            h = (0, nP.gN)(),
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
                                                    payment_gateway: te.ps.VIRTUAL_CURRENCY,
                                                    ...(null != i && {
                                                        price: i.orbPriceAmount ?? void 0,
                                                        regular_price: i.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: ez.Yri.DISCORD_ORB,
                                                    virtual_currency_balance: h,
                                                    ...(null != a && { source: a }),
                                                    ...{
                                                        payment_type: ez.frM[ez.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: a9.r.UNIFIED,
                                                        checkout_flow: el.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [d, m, s, t, n, l, r, a, i, h],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, c.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - p;
                                                    e === ez.HAw.PAYMENT_FLOW_STARTED
                                                        ? ew.default.track(ez.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...C,
                                                              has_saved_payment_source: u,
                                                              payment_gateway: te.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === ez.HAw.PAYMENT_FLOW_LOADED
                                                          ? ew.default.track(ez.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...C,
                                                                has_saved_payment_source: u,
                                                                initial_step: o.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === ez.HAw.PAYMENT_FLOW_CANCELED
                                                            ? ew.default.track(ez.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...C,
                                                                  duration_ms: n,
                                                              })
                                                            : e === ez.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? ew.default.track(ez.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...C,
                                                                    duration_ms: n,
                                                                })
                                                              : e === ez.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? ew.default.track(ez.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...C,
                                                                      duration_ms: n,
                                                                  })
                                                                : ew.default.track(ez.HAw.PAYMENT_FLOW_FAILED, {
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
                                        (f(ez.HAw.PAYMENT_FLOW_FAILED, l), (C.current = null));
                                }, [l, f]);
                                let S = (0, c.useCallback)(() => {
                                        ((C.current = h),
                                            f(ez.HAw.PAYMENT_FLOW_COMPLETED),
                                            i((e) => {
                                                (p(ed.h.COMPLETED),
                                                    t(o.pn.CONFIRM, { fulfillment: { entitlements: e } }));
                                            }));
                                    }, [i, p, h, f, t]),
                                    y = C.current ?? h,
                                    A = null != n ? n.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == n,
                                    errorMessage: (0, c.useMemo)(() => (0, a8.$9)(l, m), [l, m]),
                                    orbPriceAmount: A,
                                    orbBalanceToDisplay: y,
                                    onClickCheckout: S,
                                };
                            })({ handleStepChange: t }),
                            f = (0, a0.uS)(i),
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
                                return { disabled: i, tooltipText: r, text: su() };
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
                            purchaseItemContent: (0, r.jsx)(ss, { skuId: l, orbPriceAmount: a ? u : p }),
                            paymentMethodContent: (0, r.jsx)(so, { orbBalance: m }),
                            legalContent: (0, r.jsx)(sc, {}),
                            primaryButtonProps: I,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({ handleStepChange: t });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(eX.dZ, { children: (0, r.jsx)(v.T_, { ...l }) }),
                        (0, r.jsx)(eX.UX, { children: (0, r.jsx)(eo.lo, { primaryButtonProps: n }) }),
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
                            s = (0, D.bG)([aA.A], () => aA.A.get(t), [t]),
                            o = null != s ? s.productLine : null,
                            u = s?.applicationId ?? (0, a6.P)(t),
                            d = (0, aB.JL)({ sku: s }),
                            { product: p } = (0, lf.q)(t),
                            m = (0, c.useMemo)(() => {
                                if (null != d) return { orbPriceAmount: d.amount };
                                if (null != p) {
                                    let e = (0, a4.CW)({ product: p, hasShopDiscount: a });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [d, p, a]);
                        m?.orbPriceAmount == null &&
                            (0, a7.hD)("Orb price not found for product", {
                                tags: { sku_id: t },
                                fingerprint: ["orb-price-not-found-for-product"],
                            });
                        let {
                                redeemVirtualCurrency: h,
                                isSubmitting: C,
                                error: f,
                            } = (0, a5.Q)({ skuId: t, loadId: n, order: r, onSignFailure: i }),
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
                return (0, r.jsx)(sd.Provider, { value: C, children: i });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l, skuProductLine: i } = sp(),
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
                    })({ orbProductContext: l, skuProductLine: i, overrideAnalyticParams: sm });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: sm,
        },
    },
    sC = {
        [s.C.ORB_CHECKOUT]: {
            flowType: s.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: ez.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: sh,
        },
        [s.C.COLLECTIBLES_CHECKOUT]: {
            flowType: s.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: ez.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: l$,
        },
        [s.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: ez.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: aX,
        },
        [s.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.PREMIUM_CHECKOUT,
            purchaseType: ez.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: rP,
        },
        [s.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            purchaseType: ez.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: aS,
        },
        [s.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: ez.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: av,
        },
        [s.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: ez.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: rJ,
        },
        [s.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: ez.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nV,
            flowType: s.C.GUILD_PRODUCT_CHECKOUT,
        },
        [s.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: iS,
            purchaseType: ez.VVm.SUBSCRIPTION,
        },
        [s.C.GUILD_BOOST_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.GUILD_BOOST_CHECKOUT,
            purchaseType: ez.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: nN,
        },
        [s.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: s.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
            purchaseType: ez.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: ee,
        },
        [s.C.PAST_DUE_MAGIC_LINK_CHECKOUT]: { implemented: !1, flowType: s.C.PAST_DUE_MAGIC_LINK_CHECKOUT },
    };
