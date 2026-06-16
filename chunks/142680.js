"use strict";
n.d(t, { o: () => iJ }), n(321073);
var i,
    r = n(627968),
    s = n(835245),
    a = n(192308),
    o = n(231723),
    l = n(166532),
    u = n(64700),
    c = n(295405),
    d = n(314671),
    _ = n(735305),
    h = n(343834),
    f = n(926795),
    p = n(284009),
    E = n.n(p),
    m = n(821609),
    g = n(534514),
    A = n(834730),
    I = n(31823),
    T = n(427675),
    S = n(211159),
    y = n(937008),
    C = n(921925),
    N = n(482132),
    v = n(375708),
    R = n(989553);
function O(e) {
    let { handleClose: t } = e,
        n = (0, S.t4)((e) => e.selectedSkuId),
        { application: i } = (0, I.V)(),
        s = (0, T.gU)(),
        { isGift: a, giftRecipient: o } = (0, y.Pv)();
    E()(null != n, "Expected selectedSkuId"), E()(null != i, "Expected application");
    let l = s[n];
    E()(null != l, "Expected sku");
    let u = a
        ? v.intl.formatToPlainString(v.t["2VjPTw"], {
              itemName: l.name,
              giftRecipient: o?.username ?? "your recipient",
          })
        : v.intl.formatToPlainString(v.t.wK0IbP, { applicationName: i.name, itemName: l.name });
    return (0, r.jsxs)(N.dZ, {
        children: [
            (0, r.jsx)(C.A, {}),
            (0, r.jsxs)("div", {
                className: R.EL,
                children: [
                    (0, r.jsx)(g.D, { variant: "heading-xxl/bold", className: R.RS, children: "Success!" }),
                    (0, r.jsx)(A.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: R.yF }),
                    (0, r.jsx)(m.$, { onClick: t, text: v.intl.string(v.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var b = n(702841),
    D = n(86379),
    L = n(545075),
    w = n(426398),
    M = n(590180),
    P = n(20742),
    x = n(430993),
    k = n(579151),
    U = n(599062);
function G() {
    let { refreshCategories: e } = (0, k.A)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P.rQ, { title: v.intl.string(v.t["p8+qtU"]) }),
            (0, r.jsx)(x.c, { children: (0, r.jsx)(U.h, { onRetry: e, errorOrigin: U.A.GIFT_MODAL }) }),
        ],
    });
}
var F = n(534479),
    V = n(652215);
function B(e) {
    let { handleStepChange: t } = e,
        n = (0, S.t4)((e) => e.selectedSkuId),
        { paymentSources: i, hasFetchedPaymentSources: s } = (0, w.jm)(),
        { application: a } = (0, I.V)(),
        o = (0, D.Hp)(),
        c = (0, T.gU)(),
        d = (0, T.Hu)(),
        { isGift: _ } = (0, y.Pv)(),
        [h, f] = u.useState(!0),
        [p, E] = (0, b.yK)([M.A], () => [M.A.isFetchingCategories, M.A.error]);
    return (u.useEffect(() => {
        let e = null != a;
        d && s && e && f(p);
    }, [d, s, a, p]),
    u.useEffect(() => {
        if (h || o || null == n) return;
        let e = c[n];
        _ &&
        (e?.productLine === V.EZt.COLLECTIBLES ||
            e?.productLine === V.EZt.APPLICATION ||
            e?.productLine === V.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(l.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(i).length
              ? t(l.pn.ADD_PAYMENT_STEPS)
              : t(l.pn.REVIEW);
    }, [h, o, t, i, _, c, n]),
    h)
        ? (0, r.jsx)(F.A, {})
        : o
          ? (0, r.jsx)(L.oO, {})
          : null != E
            ? (0, r.jsx)(G, {})
            : null;
}
let j = { key: null, renderStep: (e) => (0, r.jsx)(B, { ...e }), options: { modalSizeGetter: () => "md" } },
    H = { key: null, renderStep: (e) => (0, r.jsx)(d.I, { ...e }) };
l.pn.ADD_PAYMENT_STEPS;
let Y = { key: l.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(f.A, {}) },
    W = { key: l.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(h.A, {}), options: { renderHeader: !0 } },
    K = { key: l.pn.CONFIRM, renderStep: (e) => (0, r.jsx)(O, { ...e }) },
    $ = [Y, W];
var z = n(624210),
    q = n(26279);
async function Z(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === q.Re.DRAFT)
        try {
            await (0, z.Nl)(n.id);
        } catch (e) {}
}
var X = n(925847),
    Q = n(310829),
    J = n(174459),
    ee = n(75304),
    et = n(145659),
    en = n(17928),
    ei = n(444927),
    er = n(964486),
    es = n(793574),
    ea = n(120700),
    eo = n(197510),
    el = n(584160),
    eu = n(480642),
    ec = n(832286),
    ed = n(958340),
    e_ = n(566980),
    eh = n(615310),
    ef = n(489254),
    ep = n(71393),
    eE = n(178368),
    em = n(166403),
    eg = n(473145),
    eA = n(802790),
    eI = n(636441),
    eT = n(587491),
    eS = n(285753),
    ey = n(655857),
    eC = n(121005),
    eN = n(526151),
    ev = n(303557),
    eR = n(898640);
function eO(e) {
    let { message: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eu.s3, { title: v.intl.string(v.t.q9EGps) }),
            (0, r.jsx)(x.c, { children: (0, r.jsx)("p", { className: eR.C, children: t }) }),
        ],
    });
}
var eb = n(989351),
    eD = n(619088),
    eL = n(587187),
    ew = n(130305),
    eM = n(160946),
    eP = n(97352),
    ex = n(83617),
    ek = n(788868);
function eU() {
    let { setCurrency: e, setCurrencies: t } = (0, eN.Oe)(),
        { paymentSourceId: n, activeSubscription: i } = (0, S.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        r = (0, eM.Y)();
    return (
        u.useEffect(() => {
            (0, ex.c_)(n);
        }, [n]),
        u.useEffect(() => {
            let s;
            r &&
                (null != eP.A.get(ek.gD.PREMIUM_MONTH_GUILD) && t((s = (0, ex._w)(ek.gD.PREMIUM_MONTH_GUILD, n, !1))),
                null == n && null != i && null != i.paymentSourceId ? e(i.currency) : null != s && e(s[0]));
        }, [n, i, r, e, t]),
        null
    );
}
var eG = n(121226);
let eF = [l.pn.PLAN_SELECT],
    eV = [ek.pe.GUILD],
    eB = [
        { key: l.pn.PLAN_SELECT, renderStep: (e) => (0, r.jsx)(eD.c, { ...e }), options: { renderHeader: !0 } },
        {
            key: l.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, r.jsx)(eL.d, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    ej = {
        CHECKOUT_FLOW: ea.C.GUILD_BOOST_CHECKOUT,
        CustomCheckoutPredicateStep: function (e) {
            let { handleStepChange: t } = e,
                n = (0, S.t4)((e) => e.activeSubscription),
                { guildId: i, analyticsLocation: s, currency: a } = (0, eN.Oe)(),
                o = (0, D.Hp)(),
                c = (0, eC.A)(),
                { hasFetchedRelatedSubscriptionPlans: d } = (0, ey.Jn)(),
                { hasFetchedPremiumSubscriptionPlan: _ } = (0, ev.l)(),
                h = null != n && null != n.renewalMutations,
                f = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
                p = !c || !d || !_ || null == a || "" === a;
            return ((0, er.Ay)(() => {
                h && J.default.track(V.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: s, guild_id: i });
            }),
            u.useEffect(() => {
                p || o || f || h || t(l.pn.PLAN_SELECT);
            }, [p, o, f, h, t]),
            f)
                ? (0, r.jsx)(eO, { message: v.intl.string(v.t.mOWsF1) })
                : h
                  ? (0, r.jsx)(eO, { message: v.intl.string(v.t.npfhh0) })
                  : p
                    ? (0, r.jsx)(F.A, {})
                    : o
                      ? (0, r.jsx)(L.oO, {})
                      : null;
        },
        STEPS_BEFORE_CHECKOUT: eB,
        CHECKOUT_STEPS: { [l.pn.REVIEW]: ew.b },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            guildId: t,
                            totalNumberOfSlotsToAssign: n = 1,
                            intent: i,
                            disablePremiumUpsell: s,
                            onSubscribeComplete: a,
                            closeGuildPerksModal: o,
                            analyticsLocation: l,
                        },
                        applicationId: u,
                        analyticsSourceLocation: c,
                        stepConfigs: d,
                        loadId: _,
                        onComplete: h,
                        children: f,
                    } = e,
                    p = (0, en.bG)([em.A], () => em.A.getPremiumTypeSubscription()),
                    E = (0, ei.A)(() => n - (0, eg.D$)(eE.A.boostSlots).length);
                return (
                    (0, er.Ay)(() => {
                        null != ed.A.getGuild(t) || ed.A.isGuildFetching(t) || (0, ec.y)(t);
                    }),
                    (0, r.jsx)(eo.M, {
                        activeSubscription: p,
                        stepConfigs: d,
                        skuIDs: eV,
                        loadId: _,
                        unifiedCheckoutFlow: ea.C.GUILD_BOOST_CHECKOUT,
                        children: (0, r.jsxs)(eN.mf, {
                            initialNumGuildBoostsToPurchase: E,
                            disablePremiumUpsell: s,
                            closeGuildPerksModal: o,
                            guildId: t,
                            analyticsLocation: l,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: i,
                            onSubscribeComplete: a,
                            children: [(0, r.jsx)(eU, {}), (0, r.jsx)(eG.B, { onComplete: h }), f],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { numGuildBoostsToPurchase: i, guildId: s, existingAvailableSlotCount: a } = (0, eN.Oe)(),
                    o = (0, eh.bB)(),
                    c = (0, S.t4)((e) => e.purchaseState),
                    d = (0, ef.n)("GuildBoostUnifiedCheckout"),
                    _ = d && (o === l.pn.REVIEW || o === l.pn.CONFIRM),
                    h = (0, eS.A)(_),
                    f = u.useMemo(() => ({ quantity: i }), [i]);
                return d && o === l.pn.CONFIRM
                    ? (0, r.jsx)(eT.A, {
                          mediaUrls: h.mediaUrls,
                          isSuccess: h.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(c === e_.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, r.jsx)(eI.A, {
                                  transitionState: t.transitionState,
                                  guild: ep.A.getGuild(s),
                                  guildBoostQuantity: i + a,
                                  isTransfer: !1,
                                  graphic: e,
                                  onClose: n,
                              }),
                      })
                    : n({
                          ...t,
                          analyticsDataOverride: f,
                          skipUnifiedHeaderForSteps: eF,
                          disableUnsupportedExternalSubscriptionHandler: !0,
                          isMediumModal: !0,
                      });
            },
            tenantAnalyticsLocation: es.A.GUILD_BOOST_PURCHASE_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { plan: t, onClose: n, step: i } = e,
                s = (0, ef.n)("GuildBoostUnifiedCheckout"),
                a = (0, S.t4)((e) => e.purchaseState);
            return i === l.pn.PREMIUM_UPSELL
                ? null
                : i === l.pn.REVIEW
                  ? (0, r.jsx)(eu.s3, { ...(0, el.u)({ skuId: t?.skuId ?? null, step: i }) })
                  : s
                    ? (0, r.jsx)(eu.s3, { title: (0, el.u)({ skuId: null, step: i }).title })
                    : (0, r.jsx)(eA.A, { onClose: () => n(a === e_.h.COMPLETED), currentStep: i, purchaseState: a });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eb.H, { ...e }), options: { renderHeader: !0 } },
    };
var eH = n(529427),
    eY = n(630303),
    eW = n(666646),
    eK = n(871109);
let e$ = u.createContext(void 0);
function ez() {
    let e = u.useContext(e$);
    return E()(null != e, "GuildProductPurchaseContext not found"), e;
}
function eq(e) {
    let { children: t, skuId: n, ...i } = e,
        s = (0, en.bG)([eK.A], () => eK.A.getGuildProduct(n));
    return (
        E()(null != s, "guildProductListing cannot be null"),
        (0, r.jsx)(e$.Provider, { value: { guildProductListing: s, ...i }, children: t })
    );
}
function eZ(e) {
    let { handleClose: t } = e,
        { guildProductListing: i, guildId: s } = ez(),
        o = (0, eW.sw)();
    return (
        (0, er.Ay)(() => {
            var e;
            E()(null != o, "invoicePreview cannot be null"),
                (e = { guildId: s, guildProductListingId: i.id, invoicePreview: o }),
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("57034"),
                        n.e("67837"),
                        n.e("35778"),
                        n.e("47812"),
                        n.e("13583"),
                        n.e("28090"),
                    ]).then(n.bind(n, 779457));
                    return (n) => (0, r.jsx)(t, { ...e, ...n });
                }),
                t();
        }),
        null
    );
}
var eX = n(503698),
    eQ = n.n(eX),
    eJ = n(939249),
    e0 = n(789645),
    e1 = n(935462),
    e2 = n(303612),
    e3 = n(916261),
    e6 = n(575650);
function e4(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(eJ.D, {
        className: eQ()(e3.cG, t),
        onClick: n,
        children: (0, r.jsx)(e0.P, { size: "xs", color: "currentColor", className: e3.yP }),
    });
}
function e5(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, r.jsxs)(e1.rQ, {
        className: eQ()(e3.wx, e6.GI, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(e2.A, { className: e3.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(e4, { className: e3.b, onClose: n }),
        ],
    });
}
var e7 = n(196617);
let e8 = {
    CHECKOUT_FLOW: eH.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [l.pn.REVIEW]: eY.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: i,
            } = e;
            return (0, r.jsx)(eq, { guildId: t, skuId: n, children: i });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: es.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: i } = ez();
        return n === l.pn.CONFIRM
            ? null
            : (0, r.jsx)(e5, { guildProductListing: i, className: e7.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eZ, { ...e }) },
};
var e9 = n(688810),
    te = n(848149),
    tt = n(106778),
    tn = n(228366),
    ti = n(213530),
    tr = n(966971),
    ts = n(758836),
    ta = n(483764);
let to = { sliderBodyClassName: ta.Bz },
    tl = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tt.Fk, { ref: n, className: ta.Lb, environment: t.current }),
                (0, r.jsx)(ti.K, { options: i, className: eQ()(ta.Oh, { [ta.R]: !s }) }),
            ],
        });
    };
var tu = n(775602),
    tc = n(211083),
    td = n(953150),
    t_ = n(524246),
    th = n(14368),
    tf = n(61750),
    tp = n(972607);
function tE(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: i,
            purchaseError: s,
            purchasePreviewError: a,
            appliedUserDiscounts: o,
        } = (0, S.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: l } = (0, tc.o)(),
        { application: c } = (0, I.V)(),
        d = (0, T.gU)(),
        _ = (0, b.bG)([M.A], () => M.A.getProduct(i)),
        h = u.useRef(!1);
    E()(null != i, "Expected selectedSkuId"), E()(null != c, "Expected application");
    let f = d[i];
    E()(null != f, "Expected sku");
    let p = null != l || null != s || null != a,
        m =
            o.length > 0
                ? v.intl.formatToPlainString(v.t.VuV3Td, { discountOfferAmount: o[0].discount.amount })
                : void 0;
    return (u.useEffect(() => {
        null == _ ||
            p ||
            h.current ||
            ((h.current = !0),
            (0, tf.A)({
                product: _,
                overrideTitle: m,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: ts.gs.FIAT,
            }));
    }, [_, n, t, p, m]),
    p)
        ? (0, r.jsx)(N.dZ, { children: (0, r.jsx)(C.A, {}) })
        : null;
}
function tm(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: i,
            hasSentMessage: s,
            giftRecipient: a,
            giftMessageError: o,
            isSendingMessage: l,
            giftingOrigin: c,
        } = (0, y.Pv)(),
        d = (0, b.bG)([tu.Ay], () => tu.Ay.useReducedMotion),
        _ = u.useRef(null),
        h = (0, S.t4)((e) => e.selectedSkuId),
        f = (0, b.bG)([M.A], () => M.A.getProduct(h)),
        { confettiColors: p } = (0, td.A)(f?.styles);
    return (
        u.useEffect(() => {
            t &&
                null != a &&
                null != h &&
                (c === ek.vQ.USER_PROFILE_WISHLIST || c === ek.vQ.DM_CHANNEL_WISHLIST) &&
                tn.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: h, recipientId: a.id });
        }, [t, a, h, c]),
        t
            ? (0, r.jsxs)("div", {
                  ref: _,
                  children: [
                      (0, r.jsx)(tp.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: i,
                          hasSentMessage: s,
                          giftRecipient: a,
                          giftMessageError: o,
                          isSendingMessage: l,
                      }),
                      !e.hideConfetti &&
                          !d &&
                          (0, r.jsx)(t_.A, {
                              confettiTarget: _.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, th.rA)(f?.categorySkuId),
                              colors: p?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(tE, { ...e })
    );
}
var tg = n(123292),
    tA = n(564064),
    tI = n(993408),
    tT = n(575593),
    tS = n(452027),
    ty = n(922016),
    tC = n(778712),
    tN = n(986687),
    tv = n(999291),
    tR = n(903209),
    tO = n(287809),
    tb = n(428262),
    tD = n(674658),
    tL = n(898461),
    tw = n(203632),
    tM = n(892118),
    tP = n(536572),
    tx = n(456839),
    tk = n(219103),
    tU = n(525723),
    tG = n(780651);
function tF(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: i,
            className: s,
            previewHeaderClassName: a,
            hideProfilePreview: o,
        } = e,
        { giftRecipient: l, giftRecipientError: c } = (0, y.Pv)(),
        d = (0, en.bG)([tO.default], () => tO.default.getCurrentUser()),
        _ = tb.Ay.canUseShopDiscounts(d),
        h = (0, tv.Ay)(l?.id),
        f = u.useRef(null),
        [p, E] = u.useState(!1),
        { product: m } = (0, tD.q)(t, !0),
        I = u.useMemo(() => (0, tI.fT)(m, _), [m, _]),
        T = (0, tU.V_)(m);
    if (null == m || 0 === m.items.length) return null;
    let [S] = m.items,
        C = (0, tP.VG)(m),
        N = null != l && l.id !== d?.id && m.type !== tT.R.BUNDLE && S.type !== tT.R.NAMEPLATE && !o;
    return (0, r.jsxs)("div", {
        className: s,
        children: [
            (0, r.jsx)("div", {
                className: eQ()(tG.QU, a),
                children: (0, r.jsx)(tS.D, {
                    label: v.intl.string(v.t.PpoJzt),
                    children:
                        N &&
                        (0, r.jsx)(
                            ty.Y,
                            {
                                targetElementRef: f,
                                align: "center",
                                shouldShow: p,
                                onRequestClose: () => E(!1),
                                preload: () => (0, tR.A)(l.id, l.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(tN.A, {
                                        ...e,
                                        user: l,
                                        pendingAvatar: l.getAvatarURL(null, (0, tC.FT)(tC._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, tL.T)(S) ? S : null,
                                        pendingProfileEffect: (0, tw.C3)(S) ? S : null,
                                        pendingProfileFrame: (0, tM.s)(S) ? S : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...i } = e;
                                    return (0, r.jsx)(eJ.D, {
                                        ...i,
                                        className: tG.Nx,
                                        innerRef: f,
                                        onClick: (e) => {
                                            E((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            p ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(A.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: v.intl.string(v.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            h?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: eQ()(tG.i1, null != c ? tG.cN : tG.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: tG.Ug,
                        children: [
                            (0, r.jsx)(tx.O, { product: m }),
                            (0, r.jsxs)("div", {
                                className: tG.JZ,
                                children: [
                                    (0, r.jsx)(A.E, { variant: "text-md/semibold", children: C }),
                                    (0, r.jsx)(g.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            m?.type === tT.R.BUNDLE
                                                ? null
                                                : S.type === tT.R.AVATAR_DECORATION
                                                  ? v.intl.string(v.t["7v0T9P"])
                                                  : S.type === tT.R.NAMEPLATE
                                                    ? v.intl.string(v.t.x5CoXR)
                                                    : S.type === tT.R.PROFILE_EFFECT
                                                      ? v.intl.string(v.t.wR5wOo)
                                                      : S.type === tT.R.PROFILE_FRAME
                                                        ? v.intl.string(v.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(tk.x, {
                                priceAmount: n,
                                priceCurrency: i,
                                discount: I,
                                discountOfferAmount: T,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != c &&
                        (0, r.jsx)("div", {
                            className: tG.Wh,
                            children: (0, r.jsx)(A.E, {
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
var tV = n(783878),
    tB = n(966327),
    tj = n(427262);
let tH = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: i, recipients: s } = e,
        { giftRecipient: a, setGiftRecipient: o } = (0, y.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: i,
              children: (0, r.jsx)(tV.Z, {
                  selectionMode: "single",
                  label: v.intl.string(v.t.xFn72s),
                  placeholder: v.intl.string(v.t.R0vK0N),
                  value: a?.id,
                  onSelectionChange: (e) => {
                      let i = s.find((t) => t.id === e);
                      null != i && (n(i, t), o(i));
                  },
                  options: s.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${tj.Ay.getUserTag(e)}`,
                      leading: (0, r.jsx)(tB.A, { user: e, size: tC._3.SIZE_20 }),
                  })),
              }),
          });
};
var tY = n(735438),
    tW = n.n(tY),
    tK = n(427358),
    t$ = n(570287),
    tz = n(994500);
function tq() {
    let e = (0, en.yK)([tz.A], () => tz.A.getFriendIDs()),
        t = (0, en.yK)([tK.A], () =>
            tK.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: i, otherUserId: r } = e,
                        s = (0, t$.q)(r);
                    return !t && (n >= 0.1 || i >= 0.1) && s;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = u.useMemo(() => tW().uniq([...e, ...t]), [e, t]);
    return (0, en.yK)(
        [tO.default],
        () =>
            n.reduce((e, t) => {
                let n = tO.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var tZ = n(871181),
    tX = n(318007),
    tQ = n(285719),
    tJ = n(976860),
    t0 = n(353791);
function t1(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, e9.Ay)(es.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(tg.Q, {
        text: v.intl.string(v.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, tA.Cz)({ analyticsLocations: i, analyticsSource: es.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, tJ.pX)(`${V.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var t2 = n(818348);
let t3 = (0, u.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        onStepChange: void 0,
    }),
    t6 = () => (0, u.useContext)(t3),
    t4 = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = t6(),
            { analyticsLocations: i } = (0, e9.Ay)();
        return (0, r.jsx)(tm, { analyticsLocations: i, hideConfetti: t, confettiCanvas: n, ...e });
    },
    t5 = {
        [l.pn.GIFT_CUSTOMIZATION]: () => v.intl.string(v.t["JCFN/y"]),
        [l.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => v.intl.string(v.t.lDbi6H),
        [l.pn.CONFIRM]: () => "",
    },
    t7 = (e) => {
        let { step: t } = e,
            n = t5[t];
        return null == n ? null : (0, r.jsx)(P.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    t8 = {
        CHECKOUT_FLOW: eH.CL.COLLECTIBLES_CHECKOUT,
        CHECKOUT_STEPS: {
            [l.pn.GIFT_CUSTOMIZATION]: (e) => {
                let { handleStepChange: t, handleClose: n } = e,
                    {
                        renderLeftColumn: i,
                        renderRightColumn: s,
                        ctaDisabled: a,
                        loading: o,
                    } = ((e) => {
                        let { handleStepChange: t, handleClose: n } = e,
                            {
                                customGiftMessage: i = "",
                                setCustomGiftMessage: s,
                                giftRecipientError: a,
                                setGiftRecipientError: o,
                                validatingGiftRecipient: l,
                                giftRecipient: u,
                                giftingOrigin: c,
                                setValidatingGiftRecipient: d,
                            } = (0, y.Pv)(),
                            { selectedSkuId: _, checkoutInvoicePreview: h } = (0, S.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            f = (0, T.gU)(),
                            p = (0, en.bG)([tO.default], () => tO.default.getCurrentUser()),
                            E = tq(),
                            m = async (e, t) => {
                                d(!0),
                                    null != a && o(),
                                    (await (0, tA.JJ)(e.id, t)) || o(v.intl.string(v.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, er.Ay)(() => {
                            null != _ &&
                                null != u &&
                                (c !== ek.vQ.DM_CHANNEL_WISHLIST &&
                                    J.default.track(V.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: _ }),
                                m(u, _));
                        });
                        let g = () =>
                            (0, r.jsx)(tZ.A, {
                                onTextChange: (e) => s?.(e),
                                pendingText: i,
                                currentText: i,
                                disableThemedBackground: !0,
                                className: t0.iX,
                                innerClassName: t0.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, r.jsx)("div", { className: t0.qL, children: (0, r.jsx)(tX.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, tI.pA)({ invoicePreview: h, selectedSkuId: _, skusById: f });
                                return c === ek.vQ.USER_PROFILE_WISHLIST || c === ek.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(tQ.Z, { giftRecipient: u }),
                                              g(),
                                              null != e &&
                                                  null != _ &&
                                                  (0, r.jsx)(tF, {
                                                      skuId: _,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: t0.uW,
                                                      previewHeaderClassName: t0.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: t0.fi,
                                                  children: (0, r.jsx)(t1, { handleClose: n, selectedSkuId: _ }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(tH, {
                                                  selectedSkuId: _,
                                                  recipients: E,
                                                  className: t0.uh,
                                                  validateSelectedGift: m,
                                              }),
                                              g(),
                                              null != e &&
                                                  null != _ &&
                                                  (0, r.jsx)(tF, {
                                                      skuId: _,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: t0.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != a || null == u || u.id === p?.id || i.length > ek.Jo,
                            loading: l,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    l = u.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, r.jsx)(eH.Mw, {
                    paymentModalStepProps: e,
                    layout: eH.XZ.TWO_COLUMN,
                    renderLeftColumn: i,
                    renderRightColumn: s,
                    primaryCTAButtonProps: l,
                });
            },
            [l.pn.REVIEW]: eY.p,
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let { skuId: t, additionalOptions: n, children: i, ...s } = e,
                    {
                        environment: a,
                        confettiCanvas: o,
                        setConfettiCanvas: l,
                        customConfettiVisible: c,
                        setCustomConfettiVisible: d,
                        customConfettiDisplayOptions: _,
                        hideConfirmStepConfetti: h,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = u.useRef(new tt.OH()),
                            [i, r] = u.useState(null),
                            [s, a] = u.useState(!1),
                            o = u.useMemo(() => (0, tr.AB)({ purchaseType: ts.gs.FIAT, skuId: t }), [t]);
                        return {
                            environment: n,
                            confettiCanvas: i,
                            setConfettiCanvas: r,
                            customConfettiVisible: s,
                            setCustomConfettiVisible: a,
                            customConfettiDisplayOptions: o,
                            hideConfirmStepConfetti: null != o,
                        };
                    })({ skuId: t }),
                    f = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    p = null != n ? n.onStepChange : void 0,
                    E = (0, u.useMemo)(
                        () => ({
                            skuIDs: f,
                            setCustomConfettiVisible: d,
                            hideConfirmStepConfetti: h,
                            confettiCanvas: o,
                            onStepChange: p,
                        }),
                        [f, d, h, o, p],
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(tl, {
                            environment: a,
                            setConfettiCanvas: l,
                            customConfettiDisplayOptions: _,
                            customConfettiVisible: c,
                        }),
                        (0, r.jsx)(eo.M, {
                            ...s,
                            skuIDs: f,
                            stepConfigs: s.stepConfigs,
                            activeSubscription: null,
                            purchaseType: t2.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, r.jsx)(t3.Provider, { value: E, children: i }),
                        }),
                    ],
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { skuIDs: i, setCustomConfettiVisible: r, onStepChange: s } = t6(),
                    { isGift: a } = (0, y.Pv)(),
                    o = (0, te.J)(),
                    {
                        paymentModalSkuId: l,
                        paymentModalOnClose: c,
                        paymentModalOnComplete: d,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: i, setCustomConfettiVisible: r } = e,
                            s = t[0] ?? null,
                            a = u.useCallback(() => {
                                r(!0), i?.();
                            }, [i, r]);
                        return {
                            paymentModalSkuId: s,
                            paymentModalOnClose: u.useCallback(
                                (e) => {
                                    r(!1), n(e), tn.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, r],
                            ),
                            paymentModalOnComplete: a,
                        };
                    })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: i, setCustomConfettiVisible: r }),
                    _ = u.useCallback(
                        (e) => {
                            c(e), e && a && o();
                        },
                        [c, a, o],
                    );
                return n({ ...t, skuId: l, onClose: _, onComplete: d, applicationId: V.FYj, onStepChange: s });
            },
            tenantAnalyticsLocation: es.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, y.Pv)();
            return n ? (0, r.jsx)(t7, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(t4, { ...e }), options: to },
    };
var t9 = n(354033),
    ne = n(786300),
    nt = n(491057),
    nn = n(496142),
    ni = n(394584);
let [nr, ns] = (0, ne.A)(),
    na = {
        CHECKOUT_FLOW: eH.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [l.pn.REVIEW]: nn.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: i,
                    } = e,
                    s = u.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(nr.Provider, { value: s, children: (0, r.jsx)(nt.Qt, { children: i }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: (e) => {
            let { onClose: t, step: n } = e,
                { guildId: i, listing: s } = ns();
            return (0, r.jsx)(t9.Y, { onClose: t, listing: s, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(ni._, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var no = n(73825),
    nl = n(960851),
    nu = n(117945),
    nc = n(344159),
    nd = n(561794),
    n_ = n(811656),
    nh = n(363373),
    nf = n(800471),
    np = n(941796),
    nE = n(957489),
    nm = n(822426);
let ng = [
        {
            key: l.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(nE.F, { ...e }),
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
            key: l.pn.WHAT_YOU_LOSE,
            renderStep: (e) => (0, r.jsx)(nm.K, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: l.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(np.Z, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, nf.lp)(e) ? null : v.intl.string(v.t["r+SebU"])),
                sectionHeaderText: () => v.intl.string(v.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: l.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(nh.j, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    nA = {
        CHECKOUT_FLOW: ea.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: ng,
        CHECKOUT_STEPS: { [l.pn.REVIEW]: nn.E },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            confirmationFooter: t,
                            defaultPlanId: n,
                            referralCode: i,
                            referralTrialOfferId: s,
                            subscriptionTier: a,
                            subscription: o,
                        },
                        stepConfigs: c,
                        loadId: d,
                        giftContextProps: _ = { isGift: !1, giftRecipient: null },
                        renderModalProps: h,
                        children: f,
                    } = e,
                    p = (0, en.bG)([em.A], () => em.A.getPremiumTypeSubscription()),
                    E = (0, nl.cg)() ? ek.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: m, giftRecipient: g } = _;
                if (null != a && !Object.values(ek.pe).includes(a))
                    throw Error("subscriptionTier must be a premium subscription");
                let A = (0, nd.tA)({ giftRecipient: g, isGift: m ?? !1 }),
                    I = u.useMemo(
                        () =>
                            A
                                ? c.map((e) =>
                                      e.key === l.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : c,
                        [c, A],
                    ),
                    T = null != o ? o : p,
                    S = !m && null != T && T.isPurchasedExternally && null != T.paymentGateway;
                (0, nc.s)(T, () => h.onClose(), m ?? !1);
                let y = u.useMemo(() => [...ek.oz], []);
                return S
                    ? null
                    : (0, r.jsx)(eo.M, {
                          loadId: d,
                          activeSubscription: T,
                          stepConfigs: I,
                          skuIDs: y,
                          isGift: m,
                          defaultPlanId: E ?? n,
                          referralCode: i,
                          referralTrialOfferId: s,
                          unifiedCheckoutFlow: ea.C.PREMIUM_CHECKOUT,
                          children: (0, r.jsx)(nt.Qt, { confirmationFooter: t, children: f }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { onClose: i, renderPurchaseConfirmation: s, continueSessionToInitialStep: a } = t;
                u.useEffect(() => {
                    eP.A.isLoadedForPremiumSKUs() || tn.h.wait(() => (0, no.zS)());
                }, []);
                let { selectedSkuId: o, purchaseState: c } = (0, S.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    d = (0, eh.bB)(),
                    {
                        isGift: _,
                        selectedGiftingPromotionReward: h,
                        openGiftingBadgePostPurchaseModal: f,
                    } = (0, y.Pv)(),
                    p = u.useCallback(
                        (e, t) => {
                            i(e, t), e && _ && null == h && f();
                        },
                        [i, _, h, f],
                    ),
                    E = (0, nu.T)(_, o),
                    m = c === e_.h.PURCHASING;
                return (0, r.jsx)(n_.A, {
                    isConfirmationStep: d === l.pn.CONFIRM && null == a && null == s,
                    isEligibleForWowMoment: E,
                    shouldPrefetchWowMoment: m,
                    children: n({
                        ...t,
                        onClose: p,
                        analyticsSubscriptionType: V.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: ek.LE,
                    }),
                });
            },
            tenantAnalyticsLocation: es.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(ni._, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var nI = n(753390),
    nT = n(143582),
    nS = n(897904),
    ny = n(967198);
let [nC, nN] = (0, ne.A)();
function nv(e) {
    let { guildId: t, showBenefitsFirst: n, children: i } = e,
        [s, a] = u.useState(null),
        o = u.useMemo(
            () => ({
                guildId: t,
                showBenefitsFirst: n,
                subscriptionMetadataRequest: s,
                setSubscriptionMetadataRequest: a,
            }),
            [t, n, s],
        );
    return (0, r.jsx)(nC.Provider, { value: o, children: i });
}
n(938796);
var nR = n(241524),
    nO = n(266060),
    nb = n(163437),
    nD = n(701273),
    nL = n(425013);
let nw = (e) => {
    let { onConfirm: t, onCancel: n, title: i, subtitle: s, confirmCta: a, showOpenDiscord: o = !0 } = e;
    return (0, r.jsxs)("div", {
        className: nL.RP,
        children: [
            (0, r.jsx)(g.D, { className: nL.RS, variant: "heading-lg/extrabold", children: i }),
            null != s
                ? (0, r.jsx)(A.E, { className: nL.sT, variant: "text-sm/normal", color: "text-default", children: s })
                : null,
            (0, r.jsxs)("div", {
                className: nL.UD,
                children: [
                    o &&
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: v.intl.string(v.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, nD.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(m.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, r.jsx)(m.$, {
                            variant: "secondary",
                            text: v.intl.string(v.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
};
function nM(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: nL.RP,
        children: [
            (0, r.jsx)(g.D, {
                className: nL.RS,
                variant: "heading-lg/extrabold",
                children: v.intl.format(v.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(A.E, {
                className: nL.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: v.intl.format(v.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: nL.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: nL.__invalid_openDiscordButton,
                        children: (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: v.intl.string(v.t["8L5bZG"]),
                            onClick: () => (0, nD.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(m.$, { variant: "secondary", text: v.intl.string(v.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
var nP = n(19311),
    nx = n(376747);
function nk(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, nO.K)(),
        { subscriptionMetadataRequest: s } = nN(),
        { application: a } = (0, I.V)(),
        o = (0, T.S3)(),
        c = (0, nR.A)(nx.Y),
        d = (0, en.bG)([ep.A], () => ep.A.getGuild(s?.guild_id)),
        _ = u.useCallback(() => t(l.pn.REVIEW), [t]);
    if (null == o) return null;
    let h = (0, nb.bg)(o.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.dZ, {
                children: c
                    ? (0, r.jsx)(nw, {
                          confirmCta: v.intl.string(v.t.PBHFSq),
                          onConfirm: _,
                          onCancel: n,
                          title: v.intl.format(v.t["6n6oXA"], { tier: o.name }),
                          subtitle: h
                              ? v.intl.string(v.t.lzAoKB)
                              : v.intl.formatToPlainString(v.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(nS.Uf, {
                          icon: i?.thumbnail,
                          storeListingBenefits: i?.benefits,
                          application: a ?? void 0,
                          title: v.intl.format(v.t.haiCxc, { tier: o.name }),
                          subtitle: h ? v.intl.string(v.t.RvtbP5) : v.intl.string(v.t.zY39Zu),
                          description: h
                              ? v.intl.formatToPlainString(v.t.QCe4rY, { applicationName: a?.name })
                              : v.intl.string(v.t.n1Pu8C),
                      }),
            }),
            !c &&
                (0, r.jsx)(N.UX, {
                    children: (0, r.jsx)(nP.Ay, {
                        onBack: n,
                        backText: v.intl.string(v.t.TQBY1J),
                        onPrimary: _,
                        primaryCTA: nP.ti.CONTINUE,
                        primaryText: v.intl.string(v.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var nU = n(21161);
function nG(e) {
    let t,
        n,
        { handleClose: i, onSubscriptionConfirmation: s } = e,
        a = (0, nO.K)(),
        { application: o } = (0, I.V)(),
        { readySlideId: c, updatedSubscription: d } = (0, S.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        _ = (0, T.S3)(),
        h = (0, nR.A)(nx.Y),
        { createMultipleConfettiAt: f } = u.useContext(nU.x),
        p = _?.name ?? "",
        E = () => {
            i(), s?.();
        },
        m = c === l.pn.CONFIRM,
        g = (0, nb.bg)(_?.flags ?? 0),
        A =
            null != a && a.benefits.length > 0
                ? v.intl.formatToPlainString(v.t["+IQQVM"], { benefitCount: a.benefits.length })
                : null,
        { showBenefitsFirst: y } = nN();
    return (
        y
            ? (t = h
                  ? (0, r.jsx)(nM, { tierName: p, onConfirm: E, subscription: d })
                  : (0, r.jsx)(nS.XG, { tierName: p, onConfirm: E, subscription: d }))
            : h
              ? (t = (0, r.jsx)(nw, {
                    title: v.intl.format(v.t.ea6tZr, { tierName: p }),
                    subtitle:
                        null != a && a.benefits.length > 0
                            ? v.intl.formatToPlainString(v.t.HNepft, { benefits: A })
                            : null,
                    onConfirm: E,
                    confirmCta: v.intl.string(v.t.nlkywz),
                }))
              : ((t =
                    null != a && null != o
                        ? (0, r.jsx)(nS.Uf, {
                              icon: a.thumbnail,
                              storeListingBenefits: a.benefits,
                              application: o,
                              title: v.intl.format(v.t["Q+qktS"], { tier: p }),
                              subtitle: v.intl.string(v.t.ECKxXU),
                              description: g
                                  ? v.intl.format(v.t["MAtQk/"], { applicationName: o?.name })
                                  : v.intl.format(v.t.vHkMF4, { tier: p }),
                          })
                        : (0, r.jsx)(F.A, {})),
                (n = (0, r.jsx)(nP.Ay, {
                    onPrimary: E,
                    primaryCTA: nP.ti.CONTINUE,
                    primaryText: v.intl.string(v.t["JtWl+a"]),
                }))),
        u.useEffect(() => {
            tu.Ay.useReducedMotion && m && f(window.innerWidth / 2, window.innerHeight / 2);
        }, [f, m]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(N.dZ, { children: [(0, r.jsx)(C.A, {}), t] }),
                null != n && (0, r.jsx)(N.UX, { children: n }),
            ],
        })
    );
}
var nF = n(304072),
    nV = n(71804),
    nB = n(558620),
    nj = n(427858),
    nH = n(166926),
    nY = n(953761);
let nW = {
    CHECKOUT_FLOW: ea.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    CustomCheckoutPredicateStep: function (e) {
        let { initialPlanId: t, setAnalyticsData: n } = e,
            {
                selectedSkuId: i,
                setSelectedSkuId: s,
                setSelectedPlanId: a,
                priceOptions: o,
            } = (0, S.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                priceOptions: e.checkoutPriceOptions,
            })),
            {
                hasFetchedRelatedSubscriptionPlans: c,
                subscriptionPriceOptionsLoading: d,
                displayCurrency: _,
            } = (0, ey.Jn)(),
            { setSubscriptionMetadataRequest: h, guildId: f, showBenefitsFirst: p } = nN(),
            E = (0, D.Hp)(),
            m = (0, eC.A)(),
            g = (0, eh.l)(),
            { isGift: A } = (0, y.Pv)(),
            I = p ? l.pn.BENEFITS : l.pn.REVIEW,
            [T, C] = u.useState(!m || !c || d);
        return (u.useEffect(() => {
            C(!m || !c || d);
        }, [d, c, m]),
        u.useEffect(() => {
            null != f && h({ guild_id: f });
        }, [f, h]),
        u.useEffect(() => {
            a(t);
            let e = null != t ? eP.A.get(t) : null;
            T ||
                E ||
                (n((t) => {
                    let n = null != e ? (0, tb.y8)(e.id, !1, A, { paymentSourceId: o.paymentSourceId }) : void 0;
                    return {
                        ...t,
                        subscription_plan_id: e?.id,
                        price: n?.amount,
                        regular_price: e?.price,
                        currency: _,
                    };
                }),
                null != e && (s(e?.skuId), g(I)));
        }, [E, t, A, T, o, _, i, n, a, s, g, I]),
        T)
            ? (0, r.jsx)(F.A, {})
            : E
              ? (0, r.jsx)(L.oO, {})
              : null;
    },
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            i = u.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(nS.fs, { step: t, onClose: i });
    },
    STEPS_BEFORE_CHECKOUT: [
        {
            key: l.pn.BENEFITS,
            renderStep: (e) => (0, r.jsx)(nk, { ...e }),
            options: { useBreadcrumbLabel: () => v.intl.string(v.t["5LD2+B"]) },
        },
    ],
    CHECKOUT_STEPS: {
        [l.pn.REVIEW]: function (e) {
            let { handleStepChange: t, planGroup: n, openInvoiceId: i, analyticsData: s, analyticsLocation: a } = e,
                {
                    purchaseState: o,
                    contextMetadata: c,
                    purchaseError: d,
                    setCurrency: _,
                    activeSubscription: h,
                } = (0, S.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    contextMetadata: e.contextMetadata,
                    purchaseError: e.purchaseError,
                    setCurrency: e.setCheckoutCurrency,
                    activeSubscription: e.activeSubscription,
                })),
                { paymentSources: f } = (0, w.jm)(),
                { dropdownCurrencies: p } = (0, ey.Jn)(),
                { subscriptionMetadataRequest: E, showBenefitsFirst: m } = nN(),
                g = m ? l.pn.BENEFITS : void 0,
                A = (0, nB.A)(),
                I = (0, T.S3)();
            if (null == A)
                throw new nV.v({
                    message: "Expected plan to be selected",
                    extraSentryInformation: { selectedPlan: A },
                });
            let y = u.useRef(null),
                [C, v] = (0, nF.A)(!1, 500),
                R = (0, eW.mx)(),
                O = (0, nb.bg)(I?.flags ?? 0);
            u.useEffect(() => {
                null != d && null != y.current && y.current.scrollIntoView({ behavior: "smooth" });
            }, [d]);
            let b = u.useRef(null),
                D = u.useCallback(() => {
                    t(l.pn.ADD_PAYMENT_STEPS);
                }, [t]);
            return o === e_.h.PURCHASING
                ? (0, r.jsx)(F.A, {})
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(N.dZ, {
                              children:
                                  null == h
                                      ? (0, r.jsx)(nY._, {
                                            selectedPlanId: A.id,
                                            planGroup: n,
                                            paymentSources: f,
                                            handlePaymentSourceAdd: D,
                                            metadata: O ? void 0 : E,
                                        })
                                      : (0, r.jsx)(nj.A, {
                                            premiumSubscription: h,
                                            paymentSources: f,
                                            handlePaymentSourceAdd: D,
                                            planId: A.id,
                                            planGroup: n,
                                            currencies: p,
                                            onCurrencyChange: (e) => _(e),
                                            hasOpenInvoice: null != i,
                                            purchaseState: o,
                                        }),
                          }),
                          (0, r.jsx)(N.UX, {
                              children: (0, r.jsx)(nH.U, {
                                  premiumSubscription: h ?? null,
                                  onBack: () => null != g && t(g),
                                  handleStepChange: t,
                                  postPurchaseStep: l.pn.CONFIRM,
                                  legalTermsNodeRef: b,
                                  flashLegalTerms: () => v(!0),
                                  analyticsLocation: a,
                                  baseAnalyticsData: s,
                                  flowStartTime: c.startTime,
                                  planGroup: n,
                                  openInvoiceId: i,
                                  metadata: O ? void 0 : E,
                                  backButtonEligible: !!m || void 0,
                                  invoiceError: R,
                                  disablePurchase: E?.guild_id == null && !O,
                                  onPaymentSourceAdd: D,
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
                    loadId: t,
                    applicationId: n,
                    activeSubscription: i,
                    stepConfigs: s,
                    skuId: a,
                    tenantParams: o,
                    children: l,
                } = e,
                { guildId: u, showBenefitsFirst: c } = o;
            return (0, r.jsx)(eo.M, {
                loadId: t,
                applicationId: n,
                activeSubscription: i,
                stepConfigs: s,
                skuIDs: [a],
                unifiedCheckoutFlow: ea.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                children: (0, r.jsx)(nv, {
                    guildId: u,
                    showBenefitsFirst: c,
                    children: (0, r.jsx)(nt.Qt, { children: l }),
                }),
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let {
                    originalPaymentModalProps: t,
                    renderPaymentModal: n,
                    tenantParams: { forcesTransitionToGuild: i, guildId: r },
                } = e,
                s = t.onClose,
                a = t.onComplete,
                o = u.useCallback(
                    (e) => {
                        s(e),
                            e &&
                                null != r &&
                                (nI.hP(),
                                (0, nT.f5)(r),
                                null != a && a(),
                                null != r && (i || ny.A.getGuildId() !== r) && (0, tJ.pX)(V.BVt.CHANNEL(r)));
                    },
                    [s, a, i, r],
                );
            return n({ ...t, onClose: o, forceNewPaymentModal: !0 });
        },
        tenantAnalyticsLocation: es.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(nG, { ...e }) },
};
var nK = n(67480),
    n$ = n(328968),
    nz = n(371794),
    nq = n(565756);
l.pn.GIFT_CUSTOMIZATION;
let nZ = {
    CHECKOUT_FLOW: eH.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [l.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, y.Pv)(),
                s = (0, S.t4)((e) => e.selectedSkuId),
                a = (0, en.bG)([tO.default], () => tO.default.getCurrentUser()),
                o = (0, en.bG)([nK.A], () => (null != s ? nK.A.get(s) : null), [s]),
                l = tq(),
                c = (0, en.bG)([n$.A], () => (null != s ? n$.A.getForSKU(s) : null), [s]),
                d =
                    c?.headerBackground != null && o?.applicationId != null
                        ? (0, nz.YE)(o.applicationId, c.headerBackground, 256)
                        : void 0,
                _ = async (e, t) => {},
                h = null == i || i.id === a?.id || t.length > ek.Jo,
                f = u.useMemo(() => ({ disabled: h }), [h]);
            return (0, r.jsx)(eH.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: eH.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: nq.P6,
                        children: [
                            o?.name != null &&
                                (0, r.jsx)(g.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != d && (0, r.jsx)("img", { src: d, alt: o?.name ?? "", className: nq.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, r.jsxs)("div", {
                        className: nq.P6,
                        children: [
                            (0, r.jsx)(tH, { recipients: l, selectedSkuId: s, validateSelectedGift: _ }),
                            (0, r.jsx)(tZ.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: nq.iX,
                                innerClassName: nq.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: f,
            });
        },
        [l.pn.REVIEW]: eY.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: K,
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: es.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var nX = n(429913),
    nQ = n(733391),
    nJ = n(318254),
    n0 = n(510022),
    n1 = n(317560),
    n2 = n(366523),
    n3 = n(910200),
    n6 = n(208733);
function n4(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, e9.Ay)(),
        { selectedSkuId: i, entitlementsGranted: s } = (0, S.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, I.V)(),
        o = (0, T.gU)(),
        { isGift: l, giftRecipient: c } = (0, y.Pv)();
    E()(null != i, "Expected selectedSkuId"), E()(null != a, "Expected application");
    let d = o[i];
    E()(null != d, "Expected sku");
    let _ = s.find((e) => e.sku_id === i),
        h = _?.metadata?.orbs_reward;
    if (
        (u.useEffect(() => {
            l || ((0, n1.j)(), t(), (0, n0.n)({ sku: d, application: a, analyticsLocations: n, orbsReward: h }));
        }, [l, d, a, t, n, h]),
        !l)
    )
        return null;
    let f = null != h && h > 0;
    return (0, r.jsxs)(N.dZ, {
        children: [
            (0, r.jsx)(C.A, {}),
            (0, r.jsxs)("div", {
                className: n6.EL,
                children: [
                    (0, r.jsx)(n2.e, { sku: d, shape: "square", containerClassName: n6.LC }),
                    (0, r.jsx)(g.D, {
                        variant: "heading-xl/semibold",
                        className: n6.RS,
                        children: v.intl.string(v.t["5glWta"]),
                    }),
                    (0, r.jsx)(A.E, {
                        variant: "text-md/normal",
                        children: v.intl.formatToPlainString(v.t["2VjPTw"], {
                            itemName: d.name,
                            giftRecipient: c?.username ?? "your recipient",
                        }),
                    }),
                    f &&
                        (0, r.jsx)("div", {
                            className: n6.Is,
                            children: (0, r.jsx)(n3.A, {
                                Icon: nJ.C,
                                text: v.intl.format(v.t["ZV+aS9"], { orbCount: h }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: n6.UD,
                        children: (0, r.jsx)(m.$, { onClick: t, text: v.intl.string(v.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var n5 = n(889137),
    n7 = n(742158),
    n8 = n(683071),
    n9 = n(313961),
    ie = n(238017),
    it = n(650588),
    ii = n(117218),
    ir = n(763827),
    is = n(403362),
    ia = n(871123),
    io = n(832163),
    il = n(44724),
    iu = n(980094),
    ic = n(806931),
    id = n(107610);
function i_(e) {
    let { handleClose: t, sku: n, application: i } = e,
        s = u.useCallback(() => {
            (0, il.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        o = u.useCallback(() => {
            t();
            let e = io.A.getStorefrontState(n.applicationId)?.activePage;
            (0, ia.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: i?.guildId,
                skuId: n.id,
            }) ||
                ((0, a.closeAllModals)(),
                (0, il.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, r.jsx)("div", {
        className: id.$O,
        children: (0, r.jsx)(tg.Q, {
            text: v.intl.string(v.t.ImioFL),
            onMouseDown: s,
            onClick: o,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let ih = {
    CHECKOUT_FLOW: eH.CL.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [l.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: i, disabled: s } = ((e) => {
                    var t;
                    let n,
                        i,
                        s,
                        { handleStepChange: a, handleClose: o } = e,
                        {
                            customGiftMessage: l = "",
                            setCustomGiftMessage: c,
                            giftRecipient: d,
                            emojiConfetti: _,
                            soundEffect: h,
                            setEmojiConfetti: f,
                            setSoundEffect: p,
                            giftingOrigin: E,
                            additionalUserIds: m,
                        } = (0, y.Pv)(),
                        g = (0, S.t4)((e) => e.selectedSkuId),
                        { application: T } = (0, I.V)(),
                        C = (0, en.bG)([tO.default], () => tO.default.getCurrentUser()),
                        N =
                            ((t = C?.id),
                            (n = tq()),
                            (i = (function (e) {
                                let t = (0, en.bG)([ir.A], () => (ir.A.isConnected() ? ir.A.getChannelId() : null)),
                                    [n, i] = u.useState([]);
                                return (
                                    u.useEffect(() => {
                                        let n = null != t ? n9.A.getParticipants(t) : [],
                                            r = [],
                                            s = new Set();
                                        for (let t of n)
                                            (!(0, ic.Xw)(t) && !(0, ic.Ay)(t)) ||
                                                t.user.id === e ||
                                                s.has(t.user.id) ||
                                                (s.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, ic.Ay)(e) && !(0, ic.Ay)(t)
                                                ? -1
                                                : (0, ic.Ay)(t) && !(0, ic.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            i(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (s = (0, en.yK)([tO.default], () => m?.map(tO.default.getUser).filter(is.Vq) ?? [], [m])),
                            u.useMemo(
                                () =>
                                    tW().uniqWith(
                                        [...(null != d ? [d] : []), ...s, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, s, i, n],
                            )),
                        R = (0, en.bG)([nK.A], () => (null != g ? nK.A.get(g) : null), [g]),
                        { userPrice: O } = (0, ii.CD)({ sku: R, priceSetAssignmentPurchaseType: V.lid.GIFT }),
                        b = (0, ia.fq)(R),
                        D = (0, ia.xf)(R),
                        L = async (e, t) => {},
                        w = (e) => {
                            null != p && p(null == e ? void 0 : e);
                        },
                        M = () =>
                            (0, r.jsxs)("div", {
                                className: id.mT,
                                children: [
                                    null != b &&
                                        (0, r.jsx)(n2.A, {
                                            containerClassName: id.T3,
                                            cardImage: b,
                                            cardBackgroundImage: D,
                                            altText: R?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: id._T,
                                        children: [
                                            (0, r.jsx)(it.A, { sound: h, onSelect: w }),
                                            (0, r.jsx)(ie.A, {
                                                setEmojiConfetti: f,
                                                emojiConfetti: null == _ ? void 0 : _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        P = () => {
                            let e = R?.orbsReward;
                            return (0, r.jsxs)("div", {
                                className: id.Tc,
                                children: [
                                    null != d && (E === ek.vQ.USER_PROFILE_WISHLIST || E === ek.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(tQ.Z, { giftRecipient: d })
                                        : (0, r.jsx)(tH, { selectedSkuId: g, validateSelectedGift: L, recipients: N }),
                                    (0, r.jsx)(tZ.A, {
                                        onTextChange: (e) => c?.(e),
                                        pendingText: l,
                                        currentText: l,
                                        disableThemedBackground: !0,
                                        className: id.iX,
                                        innerClassName: id.pt,
                                    }),
                                    null == R
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: id.AN,
                                              children: [
                                                  (0, r.jsx)(n7.z, {
                                                      className: id.jr,
                                                      children: v.intl.string(v.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: id.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: id.Xb,
                                                              children:
                                                                  null != R &&
                                                                  null != b &&
                                                                  (0, r.jsx)(n2.A, {
                                                                      containerClassName: id.Iy,
                                                                      cardImage: b,
                                                                      cardBackgroundImage: D,
                                                                      altText: R.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: id.vz,
                                                              children: [
                                                                  null != T && (0, r.jsx)(iu.Q, { application: T }),
                                                                  (0, r.jsx)(A.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: R.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(A.E, { variant: "text-md/semibold", children: O }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != R &&
                                        (0, ia.Ri)(R) &&
                                        (0, r.jsx)(n8.w, { type: "info", children: v.intl.string(v.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, r.jsx)(n3.A, {
                                            Icon: nJ.C,
                                            text: v.intl.format(v.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != R && (0, r.jsx)(i_, { handleClose: o, sku: R, application: T }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, r.jsxs)("div", { className: id.Du, children: [M(), P()] }),
                        getLeftColumnComponent: M,
                        getRightColumnComponent: P,
                        onStepChange: a,
                        onBackClick: o,
                        disabled: null == d || d.id === C?.id || l.length > ek.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = u.useMemo(() => ({ disabled: s }), [s]);
            return (0, r.jsx)(eH.Mw, {
                paymentModalStepProps: e,
                layout: eH.XZ.CUSTOM_STEP_BODY,
                renderStepBody: i,
                primaryCTAButtonProps: a,
            });
        },
        [l.pn.REVIEW]: eY.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(n4, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: s, isGift: a, skuId: o, ...l } = e;
            return (
                ((e) => {
                    let { applicationId: t, skuId: n } = e,
                        i = (0, nX.h)(t);
                    u.useEffect(() => {
                        null == i ||
                            null == n ||
                            n$.A.isFetchingForSKU(n) ||
                            null != nK.A.get(n) ||
                            (0, nQ.Pp)(i.id, n);
                    }, [i, n]);
                })({ applicationId: s, skuId: o }),
                (0, r.jsx)(eo.M, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: s,
                    skuIDs: [o],
                    purchaseType: t2.VV.ONE_TIME,
                    isGift: a,
                    ...l,
                    activeSubscription: null,
                    children: t,
                })
            );
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
            return n({ ...t, analyticsObject: t.analyticsSourceLocation });
        },
        tenantAnalyticsLocation: es.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, n5.YW)(t)
                .with(l.pn.GIFT_CUSTOMIZATION, () => v.intl.string(v.t["JCFN/y"]))
                .with(l.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => v.intl.string(v.t.lDbi6H))
                .with(l.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(P.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var ip = n(274971),
    iE = n(944355),
    im = n(977445),
    ig = n(908419),
    iA = n(211287),
    iI = n(623373),
    iT = n(739508),
    iS = n(715054);
(0, s.A)();
var iy = n(136857),
    iC = n(158317),
    iN = n(855104);
n(322076);
var iv =
        (((i = {})[(i.INSUFFICIENT_ORB_BALANCE = 1e3)] = "INSUFFICIENT_ORB_BALANCE"),
        (i[(i.MISSING_DEPENDENT_SKU_ENTITLEMENT = 1001)] = "MISSING_DEPENDENT_SKU_ENTITLEMENT"),
        (i[(i.SKU_PRODUCT_LINE_NOT_PURCHASABLE = 1002)] = "SKU_PRODUCT_LINE_NOT_PURCHASABLE"),
        (i[(i.SKU_ALREADY_OWNED = 1003)] = "SKU_ALREADY_OWNED"),
        (i[(i.FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION = 1004)] = "FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION"),
        (i[(i.SKU_NOT_AVAILABLE_FOR_DISTRIBUTION = 1005)] = "SKU_NOT_AVAILABLE_FOR_DISTRIBUTION"),
        (i[(i.SKU_MISSING_ORB_PRICE = 1006)] = "SKU_MISSING_ORB_PRICE"),
        (i[(i.SKU_IS_THIRD_PARTY = 1007)] = "SKU_IS_THIRD_PARTY"),
        (i[(i.SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED = 1008)] = "SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED"),
        (i[(i.FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER = 1009)] = "FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER"),
        (i[(i.BUNDLE_PARTIALLY_OWNED = 1010)] = "BUNDLE_PARTIALLY_OWNED"),
        (i[(i.SOCIAL_LAYER_NOT_PURCHASABLE = 1011)] = "SOCIAL_LAYER_NOT_PURCHASABLE"),
        (i[(i.FRAMES_FIAT_EXCLUSIVE = 1012)] = "FRAMES_FIAT_EXCLUSIVE"),
        (i[(i.FIRST_PARTY_NO_ORBS = 1013)] = "FIRST_PARTY_NO_ORBS"),
        i),
    iR = n(289873),
    iO = n(241989),
    ib = n(576052),
    iD = n(120992),
    iL = n(194256),
    iw = n(319820),
    iM = n(327105),
    iP = n(200766);
let ix = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: i, isSocialLayerGameItem: s } = (0, iw.AO)({ sku: t }),
            a = (0, iL.oO)(i);
        s ? (a = v.intl.string(iM.default.qwSlCO)) : (0, iI.Ab)(i) && (a = v.intl.string(v.t["0TmQRG"]));
        let o = (0, iL.dL)(t),
            l = (0, ts.EZ)(t.id) ? ib.m[t.id].render({ className: iP.$ }) : (0, r.jsx)(iO.WH, { sku: t, product: i });
        return (0, r.jsx)(iO.f7, {
            label: o,
            description: a,
            graphic: l,
            price: null != n ? `${n}` : "",
            PriceIcon: nJ.C,
        });
    },
    ik = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, iD.c)({ applicationId: (0, Q.P)(t), skuIDs: [t] });
        let i = (0, b.bG)([nK.A], () => nK.A.get(t), [t]);
        return null == i
            ? (0, r.jsx)(iR.y, { type: iR.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(ix, { sku: i, orbPriceAmount: n });
    },
    iU = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(iE.vW, { label: v.intl.string(v.t.y0WGqP), value: null != t ? `${t}` : "", Icon: nJ.C });
    },
    iG = () => v.intl.string(v.t.wmcDyu);
function iF() {
    let { immediateDelivery: e } = (0, ig.U)(),
        t = iG();
    return (0, r.jsx)(iE._P, {
        variant: { type: iE.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let iV = (0, u.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    iB = () => (0, u.useContext)(iV),
    ij = { payment_gateway: t2.kM.VIRTUAL_CURRENCY, currency: V.Yri.DISCORD_ORB },
    iH = {
        CHECKOUT_FLOW: eH.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [l.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: s,
                        onRedeemVirtualCurrency: a,
                        skuId: o,
                        analyticsSourceLocation: c,
                    } = iB(),
                    { primaryButtonProps: d, ..._ } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                isRedeeming: s,
                                orbRedemptionError: a,
                                onRedeemVirtualCurrency: o,
                                handleStepChange: c,
                            } = e,
                            { enabled: d } = iA.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: _, orderOrbPriceAmount: h } = (0, S.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: f,
                                orbPriceAmount: p,
                                orbBalanceToDisplay: E,
                                onClickCheckout: m,
                                showCollectiblesDiscountWarning: g,
                                errorMessage: A,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: i,
                                        orbProductContext: r,
                                        analyticsSourceLocation: s,
                                        handleStepChange: a,
                                    } = e,
                                    { analyticsLocations: o } = (0, e9.Ay)(),
                                    {
                                        selectedSkuId: c,
                                        setPurchaseState: d,
                                        firstConstraintReasonCode: _,
                                    } = (0, S.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    h = (0, iN.gN)(),
                                    f = (0, u.useRef)(h),
                                    { emitOrbCheckoutPaymentFlowEvent: p } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: i,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: s } = (0, I.V)(),
                                            { hasPaymentSources: a } = (0, w.jm)(),
                                            {
                                                loadId: o,
                                                startTime: c,
                                                discoverySessionId: d,
                                            } = (0, S.t4)((e) => e.contextMetadata),
                                            _ = (0, u.useMemo)(
                                                () => ({
                                                    load_id: o,
                                                    discovery_session_id: d,
                                                    application_id: (0, Q.P)(t),
                                                    location: i,
                                                    location_stack: i,
                                                    sku_id: t,
                                                    activity_session_id: s,
                                                    payment_gateway: t2.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: V.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: V.frM[V.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: et.r.UNIFIED,
                                                        checkout_flow: ea.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [o, d, s, t, i, r, n],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, u.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - c;
                                                    e === V.HAw.PAYMENT_FLOW_STARTED
                                                        ? J.default.track(V.HAw.PAYMENT_FLOW_STARTED, {
                                                              ..._,
                                                              has_saved_payment_source: a,
                                                              payment_gateway: t2.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === V.HAw.PAYMENT_FLOW_LOADED
                                                          ? J.default.track(V.HAw.PAYMENT_FLOW_LOADED, {
                                                                ..._,
                                                                has_saved_payment_source: a,
                                                                initial_step: l.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === V.HAw.PAYMENT_FLOW_CANCELED
                                                            ? J.default.track(V.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ..._,
                                                                  duration_ms: n,
                                                              })
                                                            : e === V.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? J.default.track(V.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ..._,
                                                                    duration_ms: n,
                                                                })
                                                              : e === V.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? J.default.track(V.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ..._,
                                                                      duration_ms: n,
                                                                  })
                                                                : J.default.track(V.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ..._,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [c, _, a],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: r,
                                        analyticsLocations: o,
                                        analyticsSourceLocation: s,
                                    });
                                (0, u.useEffect)(() => {
                                    null != i &&
                                        null !== f.current &&
                                        (p(V.HAw.PAYMENT_FLOW_FAILED, i), (f.current = null));
                                }, [i, p]);
                                let E = (0, u.useCallback)(() => {
                                        (f.current = h),
                                            p(V.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                d(e_.h.COMPLETED),
                                                    a(l.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, d, h, p, a]),
                                    m = f.current ?? h,
                                    g = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, tU.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, u.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof iC.FY && null != t)
                                                    switch (t) {
                                                        case iv.INSUFFICIENT_ORB_BALANCE:
                                                            return v.intl.string(v.t.keFvXM);
                                                        case iv.SKU_ALREADY_OWNED:
                                                            return v.intl.string(v.t.m371Mx);
                                                        case iv.BUNDLE_PARTIALLY_OWNED:
                                                            return v.intl.string(v.t.v9oC0p);
                                                        default:
                                                            return v.intl.string(v.t.fqJZ11);
                                                    }
                                                return e instanceof iC.j2
                                                    ? v.intl.string(v.t["2BmwgV"])
                                                    : e.code === iy.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? v.intl.string(v.t.keFvXM)
                                                      : e.code === iy.tG.ALREADY_PURCHASED
                                                        ? v.intl.string(v.t.m371Mx)
                                                        : v.intl.string(v.t.fqJZ11);
                                            })(i, _),
                                        [i, _],
                                    ),
                                    orbPriceAmount: g,
                                    orbBalanceToDisplay: m,
                                    onClickCheckout: E,
                                    selectedSkuId: c,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                orbRedemptionError: a,
                                onRedeemVirtualCurrency: o,
                                handleStepChange: c,
                            }),
                            T = (0, en.bG)([nK.A], () => nK.A.get(t), [t]),
                            y = (0, im.uS)(T?.applicationId),
                            {
                                disabled: C,
                                tooltipText: N,
                                text: R,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: i = !1 } = e,
                                    { disabled: r, tooltipText: s } = (0, u.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: v.intl.string(v.t["c/rcUu"]) }
                                                : !i && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: v.intl.string(v.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, i],
                                    );
                                return { disabled: r, tooltipText: s, text: iG() };
                            })({ orbBalance: E, orbPriceAmount: d ? _ : p, isInTestMode: y }),
                            O = (0, u.useMemo)(
                                () => ({ onClick: m, loading: s, text: R, disabled: C, tooltipText: N }),
                                [m, s, R, C, N],
                            ),
                            b = g ? v.intl.format(v.t.fsOXXO, {}) : null,
                            D = y ? v.intl.string(v.t.OvMyMd) : null;
                        return {
                            isStepLoading: f,
                            upperInlineNoticeProps: (0, u.useMemo)(() => {
                                if (null != D || null != b || null != A) {
                                    let e = [];
                                    return (
                                        null != D &&
                                            e.push({ type: "warning", message: D, key: "test-mode-warning-notice" }),
                                        null != b &&
                                            e.push({ type: "warning", message: b, key: "orb-checkout-warning-notice" }),
                                        null != A &&
                                            e.push({ type: "critical", message: A, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [D, b, A]),
                            purchaseItemContent: (0, r.jsx)(ik, { skuId: t, orbPriceAmount: d ? h : p }),
                            paymentMethodContent: (0, r.jsx)(iU, { orbBalance: E }),
                            legalContent: (0, r.jsx)(iF, {}),
                            primaryButtonProps: O,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: o,
                        analyticsSourceLocation: c,
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: s,
                        onRedeemVirtualCurrency: a,
                        handleStepChange: t,
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(N.dZ, { children: (0, r.jsx)(ip.T, { ..._ }) }),
                        (0, r.jsx)(N.UX, { children: (0, r.jsx)(eu.lo, { primaryButtonProps: d }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: i, children: s } = e,
                    { order: a, setOrder: o } = (0, S.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: l,
                        isRedeeming: c,
                        orbRedemptionError: d,
                        onRedeemVirtualCurrency: _,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: i, onSignFailure: r, order: s } = e,
                            a = (0, en.bG)([tO.default], () => tb.Ay.canUseShopDiscounts(tO.default.getCurrentUser())),
                            o = (0, en.bG)([nK.A], () => nK.A.get(t), [t]),
                            l = (0, ii.JL)({ sku: o }),
                            { product: c } = (0, tD.q)(t),
                            d = (0, u.useMemo)(() => {
                                if (null != l) return { orbPriceAmount: l.amount };
                                if (null != c) {
                                    let e = (0, iI.CW)({ product: c, hasShopDiscount: a });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [l, c, a]);
                        d?.orbPriceAmount == null &&
                            (0, iT.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: _,
                                isSubmitting: h,
                                error: f,
                            } = (0, iS.Q)({ skuId: t, loadId: n, order: s, onSignFailure: r }),
                            p = (0, u.useCallback)(
                                (e) => {
                                    _(t, n, (n) => {
                                        i?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, _, i],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            orbProductContext: d,
                            onRedeemVirtualCurrency: p,
                            isRedeeming: h,
                            orbRedemptionError: f,
                        };
                    })({ skuId: t, loadId: n, order: a, onSignFailure: o }),
                    h = (0, u.useMemo)(
                        () => ({
                            orbProductContext: l,
                            isRedeeming: c,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: _,
                            skuId: t,
                            analyticsSourceLocation: i,
                        }),
                        [l, c, d, _, t, i],
                    );
                return (0, r.jsx)(iV.Provider, { value: h, children: s });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: i } = iB(),
                    r = ((e) => {
                        let { orbProductContext: t, overrideAnalyticParams: n } = e;
                        return {
                            analyticsDataOverride: (0, u.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...n,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, n]),
                            skipConfirm: !0,
                        };
                    })({ orbProductContext: i, overrideAnalyticParams: ij });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: ij,
        },
    },
    iY = {
        [ee.C.ORB_CHECKOUT]: {
            flowType: ee.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: V.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: iH,
        },
        [ee.C.COLLECTIBLES_CHECKOUT]: {
            flowType: ee.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: V.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: t8,
        },
        [ee.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: ee.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: V.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ih,
        },
        [ee.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: ee.C.PREMIUM_CHECKOUT,
            purchaseType: V.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: nA,
        },
        [ee.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: {
            implemented: !1,
            flowType: ee.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        },
        [ee.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: ee.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: V.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nZ,
        },
        [ee.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: ee.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: V.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: nW,
        },
        [ee.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: V.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: e8,
            flowType: ee.C.GUILD_PRODUCT_CHECKOUT,
        },
        [ee.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: ee.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: na,
            purchaseType: V.VVm.SUBSCRIPTION,
        },
        [ee.C.GUILD_BOOST_CHECKOUT]: {
            implemented: !0,
            flowType: ee.C.GUILD_BOOST_CHECKOUT,
            purchaseType: V.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: ej,
        },
    };
var iW = n(169801),
    iK = n(380619);
let i$ = (e) => {
        let { returnStep: t = l.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: i } = e,
            { purchaseType: s } = (0, S.t4)((e) => ({ purchaseType: e.purchaseType })),
            a = u.useCallback(
                () =>
                    ((e) => {
                        let {
                            paymentModalStepProps: t,
                            returnStep: n = l.pn.REVIEW,
                            returnStepIfNoPaymentSources: i,
                            purchaseType: r,
                        } = e;
                        if (0 === Object.keys(c.A.paymentSources).length) {
                            if (null != i) return void t.handleStepChange(i);
                            r === t2.VV.SUBSCRIPTION
                                ? t.handleStepChange(n, { trackedFromStep: l.pn.ADD_PAYMENT_STEPS })
                                : t.handleClose();
                        } else t.handleStepChange(n, { trackedFromStep: l.pn.ADD_PAYMENT_STEPS });
                    })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: i, purchaseType: s }),
                [t, n, i, s],
            );
        return (0, r.jsx)(_.x, { ...i, onReturn: a });
    },
    iz = (e) => {
        let { initialPlanId: t } = e,
            n = (0, S.t4)((e) => e.selectedSkuId),
            i = (0, nB.A)(),
            { isGift: s, claimableRewards: a } = (0, y.Pv)(),
            o = (0, iW.A)({ isGift: s, skuId: n }),
            c = (0, nf.lp)(o),
            d = (0, iK.px)(i, s, a),
            _ = u.useMemo(() => {
                let e = null == t ? l.pn.PLAN_SELECT : l.pn.REVIEW;
                return c && (e = l.pn.REVIEW), d && (e = l.pn.SELECT_FREE_SKU), e;
            }, [c, d, t]);
        return (0, r.jsx)(i$, { paymentModalStepProps: e, returnStep: l.pn.REVIEW, returnStepIfNoPaymentSources: _ });
    },
    iq = (e) => {
        let {
            checkoutFlow: t,
            returnStep: n = l.pn.REVIEW,
            returnStepIfNoPaymentSources: i,
            paymentModalStepProps: s,
        } = e;
        return t === ee.C.PREMIUM_CHECKOUT
            ? (0, r.jsx)(iz, { ...s })
            : (0, r.jsx)(i$, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: i });
    };
var iZ = n(246681);
let iX = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            i = (0, u.useRef)(!1),
            s = (0, D.Hp)(),
            { handleStepChange: a } = t;
        return ((0, u.useEffect)(() => {
            s || i.current || (a(n), (i.current = !0));
        }, [s, a, n]),
        s)
            ? (0, r.jsx)(L.oO, {})
            : null;
    },
    iQ = {
        [ee.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [ee.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [ee.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [ee.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [ee.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [ee.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [ee.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [ee.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [ee.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [ee.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    };
class iJ {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = iY[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = iQ[e]),
            (this.override_analytic_params =
                this.tenantCheckoutFlowConfig.TENANT_PROVIDER_CONFIGS.overrideAnalyticParams);
    }
    getCheckoutStep(e) {
        return this.tenantCheckoutFlowConfig.CHECKOUT_STEPS[e];
    }
    generateRenderHeader() {
        let { CustomHeaderComponent: e } = this.tenantCheckoutFlowConfig;
        if (null != e) return (t, n, i) => (0, r.jsx)(e, { plan: t, onClose: n, step: i });
    }
    getPredicateStepConfig() {
        let { CustomCheckoutPredicateStep: e } = this.tenantCheckoutFlowConfig,
            { predicateStepType: t } = this.internalCheckoutFlowControls;
        return null != e
            ? { key: null, renderStep: (t) => (0, r.jsx)(e, { ...t }) }
            : "one_time_payment" === t
              ? j
              : "subscription" === t
                ? H
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(iX, { paymentModalStepProps: e, defaultStep: l.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== ee.C.ORB_CHECKOUT)
            return {
                key: l.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(iq, {
                        checkoutFlow: this.checkoutFlow,
                        paymentModalStepProps: e,
                        returnStep: l.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? l.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
            i = this.getCheckoutStep(l.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != i)
            return {
                key: l.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, r.jsx)(i, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => v.intl.string(v.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(l.pn.REVIEW);
        return {
            key: l.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => v.intl.string(v.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n, STEPS_BEFORE_CHECKOUT: i = [] } = this.tenantCheckoutFlowConfig,
            { excludePaymentAuthSteps: r } = this.internalCheckoutFlowControls,
            s = this.getPredicateStepConfig(),
            a = this.getGiftCustomizationStepConfig({ isGift: t }),
            o = this.getAddPaymentStepConfig({ isGift: t }),
            u = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([s, ...(null != a ? [a] : []), ...i, o, ...(r ? [] : $), u]);
        return null != n && c.push({ key: l.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === ee.C.ORB_CHECKOUT && null != e
            ? (0, Q.P)(e)
            : this.checkoutFlow === ee.C.COLLECTIBLES_CHECKOUT
              ? V.FYj
              : this.checkoutFlow === ee.C.PREMIUM_CHECKOUT
                ? ek.tv
                : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
            loadId: t,
            skuId: n,
            skuProductLine: i,
            applicationId: r,
            discoverySessionId: s,
            analyticsLocation: a,
            analyticsLocations: o,
            analyticsObject: l,
            analyticsSourceLocation: u,
            isGift: c,
            eligibleForTrial: d,
        } = e;
        J.default.track(V.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: s,
            payment_type: V.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: i,
            application_id: r,
            location: a ?? l,
            location_stack: o,
            source: u,
            eligible_for_trial: d,
            payment_modal_version: "v2",
            checkout_design: et.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === ee.C.PREMIUM_CHECKOUT ? { subscription_type: V.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    renderCheckoutInstance(e) {
        let {
                additionalOptions: t,
                giftContextProps: i,
                onComplete: l,
                onClose: u,
                skuId: c,
                skuProductLine: d,
                discoverySessionId: _,
                applicationId: h,
                analyticsSourceLocation: f,
                analyticsLocations: p,
                analyticsObject: E,
                tenantParams: m,
                activeSubscription: g = null,
                ...A
            } = e,
            I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            T = arguments.length > 2 ? arguments[2] : void 0,
            S = { current: (this.checkoutFlow === ee.C.PREMIUM_CHECKOUT ? (0, X.A)() : null) ?? (0, s.A)() },
            y = { current: null },
            { modalKey: C } = T,
            N = this.generateRenderHeader(),
            v = h ?? this.getApplicationId(c),
            R = !!(null != i && i.isGift),
            O = !1,
            b = {
                ...A,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: R }),
                onComplete: (e) => {
                    null != l && l(e), (O = !0);
                },
                onClose: u,
                renderHeader: N,
                skuId: c ?? null,
                tenantParams: m ?? {},
                loadId: S.current,
                onOrderCreated: (e) => {
                    (S.current = e.id), (y.current = e);
                },
                discoverySessionId: _,
                activeSubscription: g,
                applicationId: v,
                analyticsLocations: p,
                analyticsObject: E,
                analyticsSourceLocation: f,
                giftContextProps: i,
                additionalOptions: t,
            };
        if ("modal" === I)
            return (0, a.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.resolve().then(n.bind(n, 246681));
                    return (t) => (0, r.jsx)(e, { ...b, renderModalProps: t });
                },
                {
                    ...T,
                    onCloseRequest: () => {
                        null != T.onCloseRequest && T.onCloseRequest(O, S.current),
                            T.skipCloseModalOnCloseRequest || (0, a.closeModal)(C);
                    },
                    onCloseCallback: () => {
                        O ||
                            (Z({ checkoutSucceeded: O, order: y.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: S.current,
                                skuId: c,
                                skuProductLine: d,
                                applicationId: v,
                                discoverySessionId: _,
                                analyticsLocation: A.analyticsLocation,
                                analyticsLocations: p,
                                analyticsObject: E,
                                analyticsSourceLocation: f,
                                isGift: R,
                                eligibleForTrial: null != A.trialId,
                            })),
                            null != T.onCloseCallback && T.onCloseCallback(O),
                            null != u && u(O, c);
                    },
                    modalKey: C,
                },
            );
        {
            let e = A.paymentModalOnClose ?? u,
                t = { transitionState: o.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, r.jsx)(iZ.UnifiedCheckoutInstance, { ...b, paymentModalOnClose: e, renderModalProps: t });
        }
    }
    openCheckoutModal(e) {
        let { modalAPIOptions: t } = e;
        return this.renderCheckoutInstance(e, "modal", t);
    }
    renderStandaloneCheckout(e) {
        return this.renderCheckoutInstance(e, "standalone", { modalKey: "standalone-checkout" });
    }
}
