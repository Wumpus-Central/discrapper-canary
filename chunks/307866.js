"use strict";
n.d(t, { o: () => iK }), n(321073);
var i,
    r = n(627968),
    s = n(835245),
    a = n(192308),
    o = n(231723),
    l = n(166532),
    u = n(925847),
    c = n(310829),
    d = n(174459),
    _ = n(75304),
    h = n(145659),
    f = n(624210),
    p = n(26279);
async function E(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === p.Re.DRAFT)
        try {
            await (0, f.Nl)(n.id);
        } catch (e) {}
}
var m = n(64700),
    g = n(17928),
    A = n(444927),
    I = n(964486),
    T = n(793574),
    S = n(120700),
    y = n(197510),
    C = n(584160),
    N = n(480642),
    v = n(211159),
    R = n(832286),
    O = n(958340),
    b = n(566980),
    D = n(615310),
    L = n(489254),
    w = n(71393),
    M = n(178368),
    P = n(166403),
    x = n(473145),
    k = n(802790),
    U = n(636441),
    G = n(587491),
    F = n(285753),
    V = n(430993),
    B = n(86379),
    j = n(545075),
    H = n(655857),
    Y = n(534479),
    W = n(121005),
    K = n(526151),
    $ = n(303557),
    z = n(652215),
    q = n(375708),
    Z = n(898640);
function X(e) {
    let { message: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.s3, { title: q.intl.string(q.t.q9EGps) }),
            (0, r.jsx)(V.c, { children: (0, r.jsx)("p", { className: Z.C, children: t }) }),
        ],
    });
}
var Q = n(989351),
    J = n(619088),
    ee = n(587187),
    et = n(130305),
    en = n(160946),
    ei = n(97352),
    er = n(83617),
    es = n(788868);
function ea() {
    let { setCurrency: e, setCurrencies: t } = (0, K.Oe)(),
        { paymentSourceId: n, activeSubscription: i } = (0, v.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        r = (0, en.Y)();
    return (
        m.useEffect(() => {
            (0, er.c_)(n);
        }, [n]),
        m.useEffect(() => {
            let s;
            r &&
                (null != ei.A.get(es.gD.PREMIUM_MONTH_GUILD) && t((s = (0, er._w)(es.gD.PREMIUM_MONTH_GUILD, n, !1))),
                null == n && null != i && null != i.paymentSourceId ? e(i.currency) : null != s && e(s[0]));
        }, [n, i, r, e, t]),
        null
    );
}
var eo = n(121226);
let el = [l.pn.PLAN_SELECT],
    eu = [es.pe.GUILD],
    ec = [
        { key: l.pn.PLAN_SELECT, renderStep: (e) => (0, r.jsx)(J.c, { ...e }), options: { renderHeader: !0 } },
        {
            key: l.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, r.jsx)(ee.d, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    ed = {
        CHECKOUT_FLOW: S.C.GUILD_BOOST_CHECKOUT,
        CustomCheckoutPredicateStep: function (e) {
            let { handleStepChange: t } = e,
                n = (0, v.t4)((e) => e.activeSubscription),
                { guildId: i, analyticsLocation: s, currency: a } = (0, K.Oe)(),
                o = (0, B.Hp)(),
                u = (0, W.A)(),
                { hasFetchedRelatedSubscriptionPlans: c } = (0, H.Jn)(),
                { hasFetchedPremiumSubscriptionPlan: _ } = (0, $.l)(),
                h = null != n && null != n.renewalMutations,
                f = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
                p = !u || !c || !_ || null == a || "" === a;
            return ((0, I.Ay)(() => {
                h && d.default.track(z.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: s, guild_id: i });
            }),
            m.useEffect(() => {
                p || o || f || h || t(l.pn.PLAN_SELECT);
            }, [p, o, f, h, t]),
            f)
                ? (0, r.jsx)(X, { message: q.intl.string(q.t.mOWsF1) })
                : h
                  ? (0, r.jsx)(X, { message: q.intl.string(q.t.npfhh0) })
                  : p
                    ? (0, r.jsx)(Y.A, {})
                    : o
                      ? (0, r.jsx)(j.oO, {})
                      : null;
        },
        STEPS_BEFORE_CHECKOUT: ec,
        CHECKOUT_STEPS: { [l.pn.REVIEW]: et.b },
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
                    p = (0, g.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
                    E = (0, A.A)(() => n - (0, x.D$)(M.A.boostSlots).length);
                return (
                    (0, I.Ay)(() => {
                        null != O.A.getGuild(t) || O.A.isGuildFetching(t) || (0, R.y)(t);
                    }),
                    (0, r.jsx)(y.M, {
                        activeSubscription: p,
                        stepConfigs: d,
                        skuIDs: eu,
                        loadId: _,
                        unifiedCheckoutFlow: S.C.GUILD_BOOST_CHECKOUT,
                        children: (0, r.jsxs)(K.mf, {
                            initialNumGuildBoostsToPurchase: E,
                            disablePremiumUpsell: s,
                            closeGuildPerksModal: o,
                            guildId: t,
                            analyticsLocation: l,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: i,
                            onSubscribeComplete: a,
                            children: [(0, r.jsx)(ea, {}), (0, r.jsx)(eo.B, { onComplete: h }), f],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { numGuildBoostsToPurchase: i, guildId: s, existingAvailableSlotCount: a } = (0, K.Oe)(),
                    o = (0, D.bB)(),
                    u = (0, v.t4)((e) => e.purchaseState),
                    c = (0, L.n)("GuildBoostUnifiedCheckout"),
                    d = c && (o === l.pn.REVIEW || o === l.pn.CONFIRM),
                    _ = (0, F.A)(d),
                    h = m.useMemo(() => ({ quantity: i }), [i]);
                return c && o === l.pn.CONFIRM
                    ? (0, r.jsx)(G.A, {
                          mediaUrls: _.mediaUrls,
                          isSuccess: _.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(u === b.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, r.jsx)(U.A, {
                                  transitionState: t.transitionState,
                                  guild: w.A.getGuild(s),
                                  guildBoostQuantity: i + a,
                                  isTransfer: !1,
                                  graphic: e,
                                  onClose: n,
                              }),
                      })
                    : n({
                          ...t,
                          analyticsDataOverride: h,
                          skipUnifiedHeaderForSteps: el,
                          disableUnsupportedExternalSubscriptionHandler: !0,
                          isMediumModal: !0,
                      });
            },
            tenantAnalyticsLocation: T.A.GUILD_BOOST_PURCHASE_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { plan: t, onClose: n, step: i } = e,
                s = (0, L.n)("GuildBoostUnifiedCheckout"),
                a = (0, v.t4)((e) => e.purchaseState);
            return i === l.pn.PREMIUM_UPSELL
                ? null
                : i === l.pn.REVIEW
                  ? (0, r.jsx)(N.s3, { ...(0, C.u)({ skuId: t?.skuId ?? null, step: i }) })
                  : s
                    ? (0, r.jsx)(N.s3, { title: (0, C.u)({ skuId: null, step: i }).title })
                    : (0, r.jsx)(k.A, { onClose: () => n(a === b.h.COMPLETED), currentStep: i, purchaseState: a });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(Q.H, { ...e }), options: { renderHeader: !0 } },
    };
var e_ = n(529427),
    eh = n(630303),
    ef = n(284009),
    ep = n.n(ef),
    eE = n(666646),
    em = n(871109);
let eg = m.createContext(void 0);
function eA() {
    let e = m.useContext(eg);
    return ep()(null != e, "GuildProductPurchaseContext not found"), e;
}
function eI(e) {
    let { children: t, skuId: n, ...i } = e,
        s = (0, g.bG)([em.A], () => em.A.getGuildProduct(n));
    return (
        ep()(null != s, "guildProductListing cannot be null"),
        (0, r.jsx)(eg.Provider, { value: { guildProductListing: s, ...i }, children: t })
    );
}
function eT(e) {
    let { handleClose: t } = e,
        { guildProductListing: i, guildId: s } = eA(),
        o = (0, eE.sw)();
    return (
        (0, I.Ay)(() => {
            var e;
            ep()(null != o, "invoicePreview cannot be null"),
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
var eS = n(503698),
    ey = n.n(eS),
    eC = n(939249),
    eN = n(789645),
    ev = n(935462),
    eR = n(303612),
    eO = n(916261),
    eb = n(575650);
function eD(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(eC.D, {
        className: ey()(eO.cG, t),
        onClick: n,
        children: (0, r.jsx)(eN.P, { size: "xs", color: "currentColor", className: eO.yP }),
    });
}
function eL(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, r.jsxs)(ev.rQ, {
        className: ey()(eO.wx, eb.GI, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(eR.A, { className: eO.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(eD, { className: eO.b, onClose: n }),
        ],
    });
}
var ew = n(196617);
let eM = {
    CHECKOUT_FLOW: e_.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [l.pn.REVIEW]: eh.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: i,
            } = e;
            return (0, r.jsx)(eI, { guildId: t, skuId: n, children: i });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: i } = eA();
        return n === l.pn.CONFIRM
            ? null
            : (0, r.jsx)(eL, { guildProductListing: i, className: ew.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eT, { ...e }) },
};
var eP = n(20742),
    ex = n(688810),
    ek = n(848149),
    eU = n(937008),
    eG = n(106778),
    eF = n(228366),
    eV = n(213530),
    eB = n(966971),
    ej = n(758836),
    eH = n(483764);
let eY = { sliderBodyClassName: eH.Bz },
    eW = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eG.Fk, { ref: n, className: eH.Lb, environment: t.current }),
                (0, r.jsx)(eV.K, { options: i, className: ey()(eH.Oh, { [eH.R]: !s }) }),
            ],
        });
    };
var eK = n(702841),
    e$ = n(775602),
    ez = n(31823),
    eq = n(211083),
    eZ = n(427675),
    eX = n(590180),
    eQ = n(953150),
    eJ = n(524246),
    e0 = n(14368),
    e1 = n(61750),
    e2 = n(972607),
    e3 = n(901930),
    e6 = n(482132);
function e4(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: i,
            purchaseError: s,
            purchasePreviewError: a,
            appliedUserDiscounts: o,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: l } = (0, eq.o)(),
        { application: u } = (0, ez.V)(),
        c = (0, eZ.gU)(),
        d = (0, eK.bG)([eX.A], () => eX.A.getProduct(i)),
        _ = m.useRef(!1);
    ep()(null != i, "Expected selectedSkuId"), ep()(null != u, "Expected application");
    let h = c[i];
    ep()(null != h, "Expected sku");
    let f = null != l || null != s || null != a,
        p =
            o.length > 0
                ? q.intl.formatToPlainString(q.t.VuV3Td, { discountOfferAmount: o[0].discount.amount })
                : void 0;
    return (m.useEffect(() => {
        null == d ||
            f ||
            _.current ||
            ((_.current = !0),
            (0, e1.A)({
                product: d,
                overrideTitle: p,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: ej.gs.FIAT,
            }));
    }, [d, n, t, f, p]),
    f)
        ? (0, r.jsx)(e6.dZ, { children: (0, r.jsx)(e3.A, {}) })
        : null;
}
function e5(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: i,
            hasSentMessage: s,
            giftRecipient: a,
            giftMessageError: o,
            isSendingMessage: l,
            giftingOrigin: u,
        } = (0, eU.Pv)(),
        c = (0, eK.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
        d = m.useRef(null),
        _ = (0, v.t4)((e) => e.selectedSkuId),
        h = (0, eK.bG)([eX.A], () => eX.A.getProduct(_)),
        { confettiColors: f } = (0, eQ.A)(h?.styles);
    return (
        m.useEffect(() => {
            t &&
                null != a &&
                null != _ &&
                (u === es.vQ.USER_PROFILE_WISHLIST || u === es.vQ.DM_CHANNEL_WISHLIST) &&
                eF.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: _, recipientId: a.id });
        }, [t, a, _, u]),
        t
            ? (0, r.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, r.jsx)(e2.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: i,
                          hasSentMessage: s,
                          giftRecipient: a,
                          giftMessageError: o,
                          isSendingMessage: l,
                      }),
                      !e.hideConfetti &&
                          !c &&
                          (0, r.jsx)(eJ.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, e0.rA)(h?.categorySkuId),
                              colors: f?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(e4, { ...e })
    );
}
var e7 = n(123292),
    e8 = n(564064),
    e9 = n(993408),
    te = n(575593),
    tt = n(452027),
    tn = n(922016),
    ti = n(778712),
    tr = n(834730),
    ts = n(534514),
    ta = n(986687),
    to = n(999291),
    tl = n(903209),
    tu = n(287809),
    tc = n(428262),
    td = n(674658),
    t_ = n(898461),
    th = n(203632),
    tf = n(892118),
    tp = n(536572),
    tE = n(456839),
    tm = n(219103),
    tg = n(525723),
    tA = n(780651);
function tI(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: i,
            className: s,
            previewHeaderClassName: a,
            hideProfilePreview: o,
        } = e,
        { giftRecipient: l, giftRecipientError: u } = (0, eU.Pv)(),
        c = (0, g.bG)([tu.default], () => tu.default.getCurrentUser()),
        d = tc.Ay.canUseShopDiscounts(c),
        _ = (0, to.Ay)(l?.id),
        h = m.useRef(null),
        [f, p] = m.useState(!1),
        { product: E } = (0, td.q)(t, !0),
        A = m.useMemo(() => (0, e9.fT)(E, d), [E, d]),
        I = (0, tg.V_)(E);
    if (null == E || 0 === E.items.length) return null;
    let [T] = E.items,
        S = (0, tp.VG)(E),
        y = null != l && l.id !== c?.id && E.type !== te.R.BUNDLE && T.type !== te.R.NAMEPLATE && !o;
    return (0, r.jsxs)("div", {
        className: s,
        children: [
            (0, r.jsx)("div", {
                className: ey()(tA.QU, a),
                children: (0, r.jsx)(tt.D, {
                    label: q.intl.string(q.t.PpoJzt),
                    children:
                        y &&
                        (0, r.jsx)(
                            tn.Y,
                            {
                                targetElementRef: h,
                                align: "center",
                                shouldShow: f,
                                onRequestClose: () => p(!1),
                                preload: () => (0, tl.A)(l.id, l.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(ta.A, {
                                        ...e,
                                        user: l,
                                        pendingAvatar: l.getAvatarURL(null, (0, ti.FT)(ti._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, t_.T)(T) ? T : null,
                                        pendingProfileEffect: (0, th.C3)(T) ? T : null,
                                        pendingProfileFrame: (0, tf.s)(T) ? T : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...i } = e;
                                    return (0, r.jsx)(eC.D, {
                                        ...i,
                                        className: tA.Nx,
                                        innerRef: h,
                                        onClick: (e) => {
                                            p((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            f ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(tr.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: q.intl.string(q.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            _?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: ey()(tA.i1, null != u ? tA.cN : tA.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: tA.Ug,
                        children: [
                            (0, r.jsx)(tE.O, { product: E }),
                            (0, r.jsxs)("div", {
                                className: tA.JZ,
                                children: [
                                    (0, r.jsx)(tr.E, { variant: "text-md/semibold", children: S }),
                                    (0, r.jsx)(ts.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            E?.type === te.R.BUNDLE
                                                ? null
                                                : T.type === te.R.AVATAR_DECORATION
                                                  ? q.intl.string(q.t["7v0T9P"])
                                                  : T.type === te.R.NAMEPLATE
                                                    ? q.intl.string(q.t.x5CoXR)
                                                    : T.type === te.R.PROFILE_EFFECT
                                                      ? q.intl.string(q.t.wR5wOo)
                                                      : T.type === te.R.PROFILE_FRAME
                                                        ? q.intl.string(q.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(tm.x, {
                                priceAmount: n,
                                priceCurrency: i,
                                discount: A,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, r.jsx)("div", {
                            className: tA.Wh,
                            children: (0, r.jsx)(tr.E, {
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
var tT = n(783878),
    tS = n(966327),
    ty = n(427262);
let tC = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: i, recipients: s } = e,
        { giftRecipient: a, setGiftRecipient: o } = (0, eU.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: i,
              children: (0, r.jsx)(tT.Z, {
                  selectionMode: "single",
                  label: q.intl.string(q.t.xFn72s),
                  placeholder: q.intl.string(q.t.R0vK0N),
                  value: a?.id,
                  onSelectionChange: (e) => {
                      let i = s.find((t) => t.id === e);
                      null != i && (n(i, t), o(i));
                  },
                  options: s.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${ty.Ay.getUserTag(e)}`,
                      leading: (0, r.jsx)(tS.A, { user: e, size: ti._3.SIZE_20 }),
                  })),
              }),
          });
};
var tN = n(735438),
    tv = n.n(tN),
    tR = n(427358),
    tO = n(570287),
    tb = n(994500);
function tD() {
    let e = (0, g.yK)([tb.A], () => tb.A.getFriendIDs()),
        t = (0, g.yK)([tR.A], () =>
            tR.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: i, otherUserId: r } = e,
                        s = (0, tO.q)(r);
                    return !t && (n >= 0.1 || i >= 0.1) && s;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = m.useMemo(() => tv().uniq([...e, ...t]), [e, t]);
    return (0, g.yK)(
        [tu.default],
        () =>
            n.reduce((e, t) => {
                let n = tu.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var tL = n(871181),
    tw = n(318007),
    tM = n(285719),
    tP = n(976860),
    tx = n(353791);
function tk(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, ex.Ay)(T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(e7.Q, {
        text: q.intl.string(q.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, e8.Cz)({ analyticsLocations: i, analyticsSource: T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, tP.pX)(`${z.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var tU = n(818348);
let tG = (0, m.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        onStepChange: void 0,
    }),
    tF = () => (0, m.useContext)(tG),
    tV = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = tF(),
            { analyticsLocations: i } = (0, ex.Ay)();
        return (0, r.jsx)(e5, { analyticsLocations: i, hideConfetti: t, confettiCanvas: n, ...e });
    },
    tB = {
        [l.pn.GIFT_CUSTOMIZATION]: () => q.intl.string(q.t["JCFN/y"]),
        [l.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => q.intl.string(q.t.lDbi6H),
        [l.pn.CONFIRM]: () => "",
    },
    tj = (e) => {
        let { step: t } = e,
            n = tB[t];
        return null == n ? null : (0, r.jsx)(eP.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    tH = {
        CHECKOUT_FLOW: e_.CL.COLLECTIBLES_CHECKOUT,
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
                                setValidatingGiftRecipient: _,
                            } = (0, eU.Pv)(),
                            { selectedSkuId: h, checkoutInvoicePreview: f } = (0, v.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            p = (0, eZ.gU)(),
                            E = (0, g.bG)([tu.default], () => tu.default.getCurrentUser()),
                            m = tD(),
                            A = async (e, t) => {
                                _(!0),
                                    null != a && o(),
                                    (await (0, e8.JJ)(e.id, t)) || o(q.intl.string(q.t["4kgVqQ"])),
                                    _(!1);
                            };
                        (0, I.Ay)(() => {
                            null != h &&
                                null != u &&
                                (c !== es.vQ.DM_CHANNEL_WISHLIST &&
                                    d.default.track(z.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: h }),
                                A(u, h));
                        });
                        let T = () =>
                            (0, r.jsx)(tL.A, {
                                onTextChange: (e) => s?.(e),
                                pendingText: i,
                                currentText: i,
                                disableThemedBackground: !0,
                                className: tx.iX,
                                innerClassName: tx.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, r.jsx)("div", { className: tx.qL, children: (0, r.jsx)(tw.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, e9.pA)({ invoicePreview: f, selectedSkuId: h, skusById: p });
                                return c === es.vQ.USER_PROFILE_WISHLIST || c === es.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(tM.Z, { giftRecipient: u }),
                                              T(),
                                              null != e &&
                                                  null != h &&
                                                  (0, r.jsx)(tI, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: tx.uW,
                                                      previewHeaderClassName: tx.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: tx.fi,
                                                  children: (0, r.jsx)(tk, { handleClose: n, selectedSkuId: h }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(tC, {
                                                  selectedSkuId: h,
                                                  recipients: m,
                                                  className: tx.uh,
                                                  validateSelectedGift: A,
                                              }),
                                              T(),
                                              null != e &&
                                                  null != h &&
                                                  (0, r.jsx)(tI, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: tx.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != a || null == u || u.id === E?.id || i.length > es.Jo,
                            loading: l,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    l = m.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, r.jsx)(e_.Mw, {
                    paymentModalStepProps: e,
                    layout: e_.XZ.TWO_COLUMN,
                    renderLeftColumn: i,
                    renderRightColumn: s,
                    primaryCTAButtonProps: l,
                });
            },
            [l.pn.REVIEW]: eh.p,
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let { skuId: t, additionalOptions: n, children: i, ...s } = e,
                    {
                        environment: a,
                        confettiCanvas: o,
                        setConfettiCanvas: l,
                        customConfettiVisible: u,
                        setCustomConfettiVisible: c,
                        customConfettiDisplayOptions: d,
                        hideConfirmStepConfetti: _,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = m.useRef(new eG.OH()),
                            [i, r] = m.useState(null),
                            [s, a] = m.useState(!1),
                            o = m.useMemo(() => (0, eB.AB)({ purchaseType: ej.gs.FIAT, skuId: t }), [t]);
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
                    h = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    f = null != n ? n.onStepChange : void 0,
                    p = (0, m.useMemo)(
                        () => ({
                            skuIDs: h,
                            setCustomConfettiVisible: c,
                            hideConfirmStepConfetti: _,
                            confettiCanvas: o,
                            onStepChange: f,
                        }),
                        [h, c, _, o, f],
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(eW, {
                            environment: a,
                            setConfettiCanvas: l,
                            customConfettiDisplayOptions: d,
                            customConfettiVisible: u,
                        }),
                        (0, r.jsx)(y.M, {
                            ...s,
                            skuIDs: h,
                            stepConfigs: s.stepConfigs,
                            activeSubscription: null,
                            purchaseType: tU.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, r.jsx)(tG.Provider, { value: p, children: i }),
                        }),
                    ],
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { skuIDs: i, setCustomConfettiVisible: r, onStepChange: s } = tF(),
                    { isGift: a } = (0, eU.Pv)(),
                    o = (0, ek.J)(),
                    {
                        paymentModalSkuId: l,
                        paymentModalOnClose: u,
                        paymentModalOnComplete: c,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: i, setCustomConfettiVisible: r } = e,
                            s = t[0] ?? null,
                            a = m.useCallback(() => {
                                r(!0), i?.();
                            }, [i, r]);
                        return {
                            paymentModalSkuId: s,
                            paymentModalOnClose: m.useCallback(
                                (e) => {
                                    r(!1), n(e), eF.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, r],
                            ),
                            paymentModalOnComplete: a,
                        };
                    })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: i, setCustomConfettiVisible: r }),
                    d = m.useCallback(
                        (e) => {
                            u(e), e && a && o();
                        },
                        [u, a, o],
                    );
                return n({ ...t, skuId: l, onClose: d, onComplete: c, applicationId: z.FYj, onStepChange: s });
            },
            tenantAnalyticsLocation: T.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, eU.Pv)();
            return n ? (0, r.jsx)(tj, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(tV, { ...e }), options: eY },
    };
var tY = n(354033),
    tW = n(786300),
    tK = n(491057),
    t$ = n(496142),
    tz = n(394584);
let [tq, tZ] = (0, tW.A)(),
    tX = {
        CHECKOUT_FLOW: e_.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [l.pn.REVIEW]: t$.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: i,
                    } = e,
                    s = m.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(tq.Provider, { value: s, children: (0, r.jsx)(tK.Qt, { children: i }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: (e) => {
            let { onClose: t, step: n } = e,
                { guildId: i, listing: s } = tZ();
            return (0, r.jsx)(tY.Y, { onClose: t, listing: s, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(tz._, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var tQ = n(73825),
    tJ = n(960851),
    t0 = n(117945),
    t1 = n(344159),
    t2 = n(561794),
    t3 = n(811656),
    t6 = n(363373),
    t4 = n(800471),
    t5 = n(941796),
    t7 = n(957489),
    t8 = n(822426);
let t9 = [
        {
            key: l.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(t7.F, { ...e }),
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
            renderStep: (e) => (0, r.jsx)(t8.K, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: l.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(t5.Z, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, t4.lp)(e) ? null : q.intl.string(q.t["r+SebU"])),
                sectionHeaderText: () => q.intl.string(q.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: l.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(t6.j, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    ne = {
        CHECKOUT_FLOW: S.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: t9,
        CHECKOUT_STEPS: { [l.pn.REVIEW]: t$.E },
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
                        stepConfigs: u,
                        loadId: c,
                        giftContextProps: d = { isGift: !1, giftRecipient: null },
                        renderModalProps: _,
                        children: h,
                    } = e,
                    f = (0, g.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
                    p = (0, tJ.cg)() ? es.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: E, giftRecipient: A } = d;
                if (null != a && !Object.values(es.pe).includes(a))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, t2.tA)({ giftRecipient: A, isGift: E ?? !1 }),
                    T = m.useMemo(
                        () =>
                            I
                                ? u.map((e) =>
                                      e.key === l.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : u,
                        [u, I],
                    ),
                    C = null != o ? o : f,
                    N = !E && null != C && C.isPurchasedExternally && null != C.paymentGateway;
                (0, t1.s)(C, () => _.onClose(), E ?? !1);
                let v = m.useMemo(() => [...es.oz], []);
                return N
                    ? null
                    : (0, r.jsx)(y.M, {
                          loadId: c,
                          activeSubscription: C,
                          stepConfigs: T,
                          skuIDs: v,
                          isGift: E,
                          defaultPlanId: p ?? n,
                          referralCode: i,
                          referralTrialOfferId: s,
                          unifiedCheckoutFlow: S.C.PREMIUM_CHECKOUT,
                          children: (0, r.jsx)(tK.Qt, { confirmationFooter: t, children: h }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { onClose: i, renderPurchaseConfirmation: s, continueSessionToInitialStep: a } = t;
                m.useEffect(() => {
                    ei.A.isLoadedForPremiumSKUs() || eF.h.wait(() => (0, tQ.zS)());
                }, []);
                let { selectedSkuId: o, purchaseState: u } = (0, v.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    c = (0, D.bB)(),
                    {
                        isGift: d,
                        selectedGiftingPromotionReward: _,
                        openGiftingBadgePostPurchaseModal: h,
                    } = (0, eU.Pv)(),
                    f = m.useCallback(
                        (e, t) => {
                            i(e, t), e && d && null == _ && h();
                        },
                        [i, d, _, h],
                    ),
                    p = (0, t0.T)(d, o),
                    E = u === b.h.PURCHASING;
                return (0, r.jsx)(t3.A, {
                    isConfirmationStep: c === l.pn.CONFIRM && null == a && null == s,
                    isEligibleForWowMoment: p,
                    shouldPrefetchWowMoment: E,
                    children: n({
                        ...t,
                        onClose: f,
                        analyticsSubscriptionType: z.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: es.LE,
                    }),
                });
            },
            tenantAnalyticsLocation: T.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(tz._, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var nt = n(753390),
    nn = n(143582),
    ni = n(897904),
    nr = n(967198);
let [ns, na] = (0, tW.A)();
function no(e) {
    let { guildId: t, showBenefitsFirst: n, children: i } = e,
        [s, a] = m.useState(null),
        o = m.useMemo(
            () => ({
                guildId: t,
                showBenefitsFirst: n,
                subscriptionMetadataRequest: s,
                setSubscriptionMetadataRequest: a,
            }),
            [t, n, s],
        );
    return (0, r.jsx)(ns.Provider, { value: o, children: i });
}
n(938796);
var nl = n(241524),
    nu = n(266060),
    nc = n(163437),
    nd = n(821609),
    n_ = n(701273),
    nh = n(425013);
let nf = (e) => {
    let { onConfirm: t, onCancel: n, title: i, subtitle: s, confirmCta: a, showOpenDiscord: o = !0 } = e;
    return (0, r.jsxs)("div", {
        className: nh.RP,
        children: [
            (0, r.jsx)(ts.D, { className: nh.RS, variant: "heading-lg/extrabold", children: i }),
            null != s
                ? (0, r.jsx)(tr.E, { className: nh.sT, variant: "text-sm/normal", color: "text-default", children: s })
                : null,
            (0, r.jsxs)("div", {
                className: nh.UD,
                children: [
                    o &&
                        (0, r.jsx)(nd.$, {
                            variant: "primary",
                            text: q.intl.string(q.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, n_.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(nd.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, r.jsx)(nd.$, {
                            variant: "secondary",
                            text: q.intl.string(q.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
};
function np(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: nh.RP,
        children: [
            (0, r.jsx)(ts.D, {
                className: nh.RS,
                variant: "heading-lg/extrabold",
                children: q.intl.format(q.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(tr.E, {
                className: nh.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: q.intl.format(q.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: nh.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: nh.__invalid_openDiscordButton,
                        children: (0, r.jsx)(nd.$, {
                            variant: "primary",
                            text: q.intl.string(q.t["8L5bZG"]),
                            onClick: () => (0, n_.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(nd.$, { variant: "secondary", text: q.intl.string(q.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
var nE = n(19311),
    nm = n(376747);
function ng(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, nu.K)(),
        { subscriptionMetadataRequest: s } = na(),
        { application: a } = (0, ez.V)(),
        o = (0, eZ.S3)(),
        u = (0, nl.A)(nm.Y),
        c = (0, g.bG)([w.A], () => w.A.getGuild(s?.guild_id)),
        d = m.useCallback(() => t(l.pn.REVIEW), [t]);
    if (null == o) return null;
    let _ = (0, nc.bg)(o.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e6.dZ, {
                children: u
                    ? (0, r.jsx)(nf, {
                          confirmCta: q.intl.string(q.t.PBHFSq),
                          onConfirm: d,
                          onCancel: n,
                          title: q.intl.format(q.t["6n6oXA"], { tier: o.name }),
                          subtitle: _
                              ? q.intl.string(q.t.lzAoKB)
                              : q.intl.formatToPlainString(q.t["GqaY/j"], { guildName: c?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(ni.Uf, {
                          icon: i?.thumbnail,
                          storeListingBenefits: i?.benefits,
                          application: a ?? void 0,
                          title: q.intl.format(q.t.haiCxc, { tier: o.name }),
                          subtitle: _ ? q.intl.string(q.t.RvtbP5) : q.intl.string(q.t.zY39Zu),
                          description: _
                              ? q.intl.formatToPlainString(q.t.QCe4rY, { applicationName: a?.name })
                              : q.intl.string(q.t.n1Pu8C),
                      }),
            }),
            !u &&
                (0, r.jsx)(e6.UX, {
                    children: (0, r.jsx)(nE.Ay, {
                        onBack: n,
                        backText: q.intl.string(q.t.TQBY1J),
                        onPrimary: d,
                        primaryCTA: nE.ti.CONTINUE,
                        primaryText: q.intl.string(q.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var nA = n(21161);
function nI(e) {
    let t,
        n,
        { handleClose: i, onSubscriptionConfirmation: s } = e,
        a = (0, nu.K)(),
        { application: o } = (0, ez.V)(),
        { readySlideId: u, updatedSubscription: c } = (0, v.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        d = (0, eZ.S3)(),
        _ = (0, nl.A)(nm.Y),
        { createMultipleConfettiAt: h } = m.useContext(nA.x),
        f = d?.name ?? "",
        p = () => {
            i(), s?.();
        },
        E = u === l.pn.CONFIRM,
        g = (0, nc.bg)(d?.flags ?? 0),
        A =
            null != a && a.benefits.length > 0
                ? q.intl.formatToPlainString(q.t["+IQQVM"], { benefitCount: a.benefits.length })
                : null,
        { showBenefitsFirst: I } = na();
    return (
        I
            ? (t = _
                  ? (0, r.jsx)(np, { tierName: f, onConfirm: p, subscription: c })
                  : (0, r.jsx)(ni.XG, { tierName: f, onConfirm: p, subscription: c }))
            : _
              ? (t = (0, r.jsx)(nf, {
                    title: q.intl.format(q.t.ea6tZr, { tierName: f }),
                    subtitle:
                        null != a && a.benefits.length > 0
                            ? q.intl.formatToPlainString(q.t.HNepft, { benefits: A })
                            : null,
                    onConfirm: p,
                    confirmCta: q.intl.string(q.t.nlkywz),
                }))
              : ((t =
                    null != a && null != o
                        ? (0, r.jsx)(ni.Uf, {
                              icon: a.thumbnail,
                              storeListingBenefits: a.benefits,
                              application: o,
                              title: q.intl.format(q.t["Q+qktS"], { tier: f }),
                              subtitle: q.intl.string(q.t.ECKxXU),
                              description: g
                                  ? q.intl.format(q.t["MAtQk/"], { applicationName: o?.name })
                                  : q.intl.format(q.t.vHkMF4, { tier: f }),
                          })
                        : (0, r.jsx)(Y.A, {})),
                (n = (0, r.jsx)(nE.Ay, {
                    onPrimary: p,
                    primaryCTA: nE.ti.CONTINUE,
                    primaryText: q.intl.string(q.t["JtWl+a"]),
                }))),
        m.useEffect(() => {
            e$.Ay.useReducedMotion && E && h(window.innerWidth / 2, window.innerHeight / 2);
        }, [h, E]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(e6.dZ, { children: [(0, r.jsx)(e3.A, {}), t] }),
                null != n && (0, r.jsx)(e6.UX, { children: n }),
            ],
        })
    );
}
var nT = n(304072),
    nS = n(71804),
    ny = n(426398),
    nC = n(558620),
    nN = n(427858),
    nv = n(166926),
    nR = n(953761);
let nO = {
    CHECKOUT_FLOW: S.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    CustomCheckoutPredicateStep: function (e) {
        let { initialPlanId: t, setAnalyticsData: n } = e,
            {
                selectedSkuId: i,
                setSelectedSkuId: s,
                setSelectedPlanId: a,
                priceOptions: o,
            } = (0, v.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                priceOptions: e.checkoutPriceOptions,
            })),
            {
                hasFetchedRelatedSubscriptionPlans: u,
                subscriptionPriceOptionsLoading: c,
                displayCurrency: d,
            } = (0, H.Jn)(),
            { setSubscriptionMetadataRequest: _, guildId: h, showBenefitsFirst: f } = na(),
            p = (0, B.Hp)(),
            E = (0, W.A)(),
            g = (0, D.l)(),
            { isGift: A } = (0, eU.Pv)(),
            I = f ? l.pn.BENEFITS : l.pn.REVIEW,
            [T, S] = m.useState(!E || !u || c);
        return (m.useEffect(() => {
            S(!E || !u || c);
        }, [c, u, E]),
        m.useEffect(() => {
            null != h && _({ guild_id: h });
        }, [h, _]),
        m.useEffect(() => {
            a(t);
            let e = null != t ? ei.A.get(t) : null;
            T ||
                p ||
                (n((t) => {
                    let n = null != e ? (0, tc.y8)(e.id, !1, A, { paymentSourceId: o.paymentSourceId }) : void 0;
                    return {
                        ...t,
                        subscription_plan_id: e?.id,
                        price: n?.amount,
                        regular_price: e?.price,
                        currency: d,
                    };
                }),
                null != e && (s(e?.skuId), g(I)));
        }, [p, t, A, T, o, d, i, n, a, s, g, I]),
        T)
            ? (0, r.jsx)(Y.A, {})
            : p
              ? (0, r.jsx)(j.oO, {})
              : null;
    },
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            i = m.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(ni.fs, { step: t, onClose: i });
    },
    STEPS_BEFORE_CHECKOUT: [
        {
            key: l.pn.BENEFITS,
            renderStep: (e) => (0, r.jsx)(ng, { ...e }),
            options: { useBreadcrumbLabel: () => q.intl.string(q.t["5LD2+B"]) },
        },
    ],
    CHECKOUT_STEPS: {
        [l.pn.REVIEW]: function (e) {
            let { handleStepChange: t, planGroup: n, openInvoiceId: i, analyticsData: s, analyticsLocation: a } = e,
                {
                    purchaseState: o,
                    contextMetadata: u,
                    purchaseError: c,
                    setCurrency: d,
                    activeSubscription: _,
                } = (0, v.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    contextMetadata: e.contextMetadata,
                    purchaseError: e.purchaseError,
                    setCurrency: e.setCheckoutCurrency,
                    activeSubscription: e.activeSubscription,
                })),
                { paymentSources: h } = (0, ny.jm)(),
                { dropdownCurrencies: f } = (0, H.Jn)(),
                { subscriptionMetadataRequest: p, showBenefitsFirst: E } = na(),
                g = E ? l.pn.BENEFITS : void 0,
                A = (0, nC.A)(),
                I = (0, eZ.S3)();
            if (null == A)
                throw new nS.v({
                    message: "Expected plan to be selected",
                    extraSentryInformation: { selectedPlan: A },
                });
            let T = m.useRef(null),
                [S, y] = (0, nT.A)(!1, 500),
                C = (0, eE.mx)(),
                N = (0, nc.bg)(I?.flags ?? 0);
            m.useEffect(() => {
                null != c && null != T.current && T.current.scrollIntoView({ behavior: "smooth" });
            }, [c]);
            let R = m.useRef(null),
                O = m.useCallback(() => {
                    t(l.pn.ADD_PAYMENT_STEPS);
                }, [t]);
            return o === b.h.PURCHASING
                ? (0, r.jsx)(Y.A, {})
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(e6.dZ, {
                              children:
                                  null == _
                                      ? (0, r.jsx)(nR._, {
                                            selectedPlanId: A.id,
                                            planGroup: n,
                                            paymentSources: h,
                                            handlePaymentSourceAdd: O,
                                            metadata: N ? void 0 : p,
                                        })
                                      : (0, r.jsx)(nN.A, {
                                            premiumSubscription: _,
                                            paymentSources: h,
                                            handlePaymentSourceAdd: O,
                                            planId: A.id,
                                            planGroup: n,
                                            currencies: f,
                                            onCurrencyChange: (e) => d(e),
                                            hasOpenInvoice: null != i,
                                            purchaseState: o,
                                        }),
                          }),
                          (0, r.jsx)(e6.UX, {
                              children: (0, r.jsx)(nv.U, {
                                  premiumSubscription: _ ?? null,
                                  onBack: () => null != g && t(g),
                                  handleStepChange: t,
                                  postPurchaseStep: l.pn.CONFIRM,
                                  legalTermsNodeRef: R,
                                  flashLegalTerms: () => y(!0),
                                  analyticsLocation: a,
                                  baseAnalyticsData: s,
                                  flowStartTime: u.startTime,
                                  planGroup: n,
                                  openInvoiceId: i,
                                  metadata: N ? void 0 : p,
                                  backButtonEligible: !!E || void 0,
                                  invoiceError: C,
                                  disablePurchase: p?.guild_id == null && !N,
                                  onPaymentSourceAdd: O,
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
            return (0, r.jsx)(y.M, {
                loadId: t,
                applicationId: n,
                activeSubscription: i,
                stepConfigs: s,
                skuIDs: [a],
                unifiedCheckoutFlow: S.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                children: (0, r.jsx)(no, {
                    guildId: u,
                    showBenefitsFirst: c,
                    children: (0, r.jsx)(tK.Qt, { children: l }),
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
                o = m.useCallback(
                    (e) => {
                        s(e),
                            e &&
                                null != r &&
                                (nt.hP(),
                                (0, nn.f5)(r),
                                null != a && a(),
                                null != r && (i || nr.A.getGuildId() !== r) && (0, tP.pX)(z.BVt.CHANNEL(r)));
                    },
                    [s, a, i, r],
                );
            return n({ ...t, onClose: o, forceNewPaymentModal: !0 });
        },
        tenantAnalyticsLocation: T.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(nI, { ...e }) },
};
var nb = n(989553);
function nD(e) {
    let { handleClose: t } = e,
        n = (0, v.t4)((e) => e.selectedSkuId),
        { application: i } = (0, ez.V)(),
        s = (0, eZ.gU)(),
        { isGift: a, giftRecipient: o } = (0, eU.Pv)();
    ep()(null != n, "Expected selectedSkuId"), ep()(null != i, "Expected application");
    let l = s[n];
    ep()(null != l, "Expected sku");
    let u = a
        ? q.intl.formatToPlainString(q.t["2VjPTw"], {
              itemName: l.name,
              giftRecipient: o?.username ?? "your recipient",
          })
        : q.intl.formatToPlainString(q.t.wK0IbP, { applicationName: i.name, itemName: l.name });
    return (0, r.jsxs)(e6.dZ, {
        children: [
            (0, r.jsx)(e3.A, {}),
            (0, r.jsxs)("div", {
                className: nb.EL,
                children: [
                    (0, r.jsx)(ts.D, { variant: "heading-xxl/bold", className: nb.RS, children: "Success!" }),
                    (0, r.jsx)(tr.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: nb.yF }),
                    (0, r.jsx)(nd.$, { onClick: t, text: q.intl.string(q.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var nL = n(67480),
    nw = n(328968),
    nM = n(371794),
    nP = n(565756);
l.pn.GIFT_CUSTOMIZATION;
let nx = {
    CHECKOUT_FLOW: e_.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [l.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, eU.Pv)(),
                s = (0, v.t4)((e) => e.selectedSkuId),
                a = (0, g.bG)([tu.default], () => tu.default.getCurrentUser()),
                o = (0, g.bG)([nL.A], () => (null != s ? nL.A.get(s) : null), [s]),
                l = tD(),
                u = (0, g.bG)([nw.A], () => (null != s ? nw.A.getForSKU(s) : null), [s]),
                c =
                    u?.headerBackground != null && o?.applicationId != null
                        ? (0, nM.YE)(o.applicationId, u.headerBackground, 256)
                        : void 0,
                d = async (e, t) => {},
                _ = null == i || i.id === a?.id || t.length > es.Jo,
                h = m.useMemo(() => ({ disabled: _ }), [_]);
            return (0, r.jsx)(e_.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: e_.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: nP.P6,
                        children: [
                            o?.name != null &&
                                (0, r.jsx)(ts.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != c && (0, r.jsx)("img", { src: c, alt: o?.name ?? "", className: nP.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, r.jsxs)("div", {
                        className: nP.P6,
                        children: [
                            (0, r.jsx)(tC, { recipients: l, selectedSkuId: s, validateSelectedGift: d }),
                            (0, r.jsx)(tL.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: nP.iX,
                                innerClassName: nP.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: h,
            });
        },
        [l.pn.REVIEW]: eh.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(nD, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var nk = n(429913),
    nU = n(733391),
    nG = n(318254),
    nF = n(510022),
    nV = n(317560),
    nB = n(366523),
    nj = n(910200),
    nH = n(208733);
function nY(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, ex.Ay)(),
        { selectedSkuId: i, entitlementsGranted: s } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, ez.V)(),
        o = (0, eZ.gU)(),
        { isGift: l, giftRecipient: u } = (0, eU.Pv)();
    ep()(null != i, "Expected selectedSkuId"), ep()(null != a, "Expected application");
    let c = o[i];
    ep()(null != c, "Expected sku");
    let d = s.find((e) => e.sku_id === i),
        _ = d?.metadata?.orbs_reward;
    if (
        (m.useEffect(() => {
            l || ((0, nV.j)(), t(), (0, nF.n)({ sku: c, application: a, analyticsLocations: n, orbsReward: _ }));
        }, [l, c, a, t, n, _]),
        !l)
    )
        return null;
    let h = null != _ && _ > 0;
    return (0, r.jsxs)(e6.dZ, {
        children: [
            (0, r.jsx)(e3.A, {}),
            (0, r.jsxs)("div", {
                className: nH.EL,
                children: [
                    (0, r.jsx)(nB.e, { sku: c, shape: "square", containerClassName: nH.LC }),
                    (0, r.jsx)(ts.D, {
                        variant: "heading-xl/semibold",
                        className: nH.RS,
                        children: q.intl.string(q.t["5glWta"]),
                    }),
                    (0, r.jsx)(tr.E, {
                        variant: "text-md/normal",
                        children: q.intl.formatToPlainString(q.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    h &&
                        (0, r.jsx)("div", {
                            className: nH.Is,
                            children: (0, r.jsx)(nj.A, {
                                Icon: nG.C,
                                text: q.intl.format(q.t["ZV+aS9"], { orbCount: _ }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: nH.UD,
                        children: (0, r.jsx)(nd.$, { onClick: t, text: q.intl.string(q.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var nW = n(889137),
    nK = n(742158),
    n$ = n(683071),
    nz = n(313961),
    nq = n(238017),
    nZ = n(650588),
    nX = n(117218),
    nQ = n(763827),
    nJ = n(403362),
    n0 = n(871123),
    n1 = n(832163),
    n2 = n(44724),
    n3 = n(980094),
    n6 = n(806931),
    n4 = n(107610);
function n5(e) {
    let { handleClose: t, sku: n, application: i } = e,
        s = m.useCallback(() => {
            (0, n2.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        o = m.useCallback(() => {
            t();
            let e = n1.A.getStorefrontState(n.applicationId)?.activePage;
            (0, n0.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: i?.guildId,
                skuId: n.id,
            }) ||
                ((0, a.closeAllModals)(),
                (0, n2.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, r.jsx)("div", {
        className: n4.$O,
        children: (0, r.jsx)(e7.Q, {
            text: q.intl.string(q.t.ImioFL),
            onMouseDown: s,
            onClick: o,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let n7 = {
    CHECKOUT_FLOW: e_.CL.SLAYER_STOREFRONT_CHECKOUT,
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
                            setCustomGiftMessage: u,
                            giftRecipient: c,
                            emojiConfetti: d,
                            soundEffect: _,
                            setEmojiConfetti: h,
                            setSoundEffect: f,
                            giftingOrigin: p,
                            additionalUserIds: E,
                        } = (0, eU.Pv)(),
                        A = (0, v.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, ez.V)(),
                        T = (0, g.bG)([tu.default], () => tu.default.getCurrentUser()),
                        S =
                            ((t = T?.id),
                            (n = tD()),
                            (i = (function (e) {
                                let t = (0, g.bG)([nQ.A], () => (nQ.A.isConnected() ? nQ.A.getChannelId() : null)),
                                    [n, i] = m.useState([]);
                                return (
                                    m.useEffect(() => {
                                        let n = null != t ? nz.A.getParticipants(t) : [],
                                            r = [],
                                            s = new Set();
                                        for (let t of n)
                                            (!(0, n6.Xw)(t) && !(0, n6.Ay)(t)) ||
                                                t.user.id === e ||
                                                s.has(t.user.id) ||
                                                (s.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, n6.Ay)(e) && !(0, n6.Ay)(t)
                                                ? -1
                                                : (0, n6.Ay)(t) && !(0, n6.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            i(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (s = (0, g.yK)([tu.default], () => E?.map(tu.default.getUser).filter(nJ.Vq) ?? [], [E])),
                            m.useMemo(
                                () =>
                                    tv().uniqWith(
                                        [...(null != c ? [c] : []), ...s, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, s, i, n],
                            )),
                        y = (0, g.bG)([nL.A], () => (null != A ? nL.A.get(A) : null), [A]),
                        { userPrice: C } = (0, nX.CD)({ sku: y, priceSetAssignmentPurchaseType: z.lid.GIFT }),
                        N = (0, n0.fq)(y),
                        R = (0, n0.xf)(y),
                        O = async (e, t) => {},
                        b = (e) => {
                            null != f && f(null == e ? void 0 : e);
                        },
                        D = () =>
                            (0, r.jsxs)("div", {
                                className: n4.mT,
                                children: [
                                    null != N &&
                                        (0, r.jsx)(nB.A, {
                                            containerClassName: n4.T3,
                                            cardImage: N,
                                            cardBackgroundImage: R,
                                            altText: y?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: n4._T,
                                        children: [
                                            (0, r.jsx)(nZ.A, { sound: _, onSelect: b }),
                                            (0, r.jsx)(nq.A, {
                                                setEmojiConfetti: h,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        L = () => {
                            let e = y?.orbsReward;
                            return (0, r.jsxs)("div", {
                                className: n4.Tc,
                                children: [
                                    null != c && (p === es.vQ.USER_PROFILE_WISHLIST || p === es.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(tM.Z, { giftRecipient: c })
                                        : (0, r.jsx)(tC, { selectedSkuId: A, validateSelectedGift: O, recipients: S }),
                                    (0, r.jsx)(tL.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: l,
                                        currentText: l,
                                        disableThemedBackground: !0,
                                        className: n4.iX,
                                        innerClassName: n4.pt,
                                    }),
                                    null == y
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: n4.AN,
                                              children: [
                                                  (0, r.jsx)(nK.z, {
                                                      className: n4.jr,
                                                      children: q.intl.string(q.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: n4.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: n4.Xb,
                                                              children:
                                                                  null != y &&
                                                                  null != N &&
                                                                  (0, r.jsx)(nB.A, {
                                                                      containerClassName: n4.Iy,
                                                                      cardImage: N,
                                                                      cardBackgroundImage: R,
                                                                      altText: y.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: n4.vz,
                                                              children: [
                                                                  null != I && (0, r.jsx)(n3.Q, { application: I }),
                                                                  (0, r.jsx)(tr.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: y.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(tr.E, {
                                                              variant: "text-md/semibold",
                                                              children: C,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != y &&
                                        (0, n0.Ri)(y) &&
                                        (0, r.jsx)(n$.w, { type: "info", children: q.intl.string(q.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, r.jsx)(nj.A, {
                                            Icon: nG.C,
                                            text: q.intl.format(q.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != y && (0, r.jsx)(n5, { handleClose: o, sku: y, application: I }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, r.jsxs)("div", { className: n4.Du, children: [D(), L()] }),
                        getLeftColumnComponent: D,
                        getRightColumnComponent: L,
                        onStepChange: a,
                        onBackClick: o,
                        disabled: null == c || c.id === T?.id || l.length > es.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = m.useMemo(() => ({ disabled: s }), [s]);
            return (0, r.jsx)(e_.Mw, {
                paymentModalStepProps: e,
                layout: e_.XZ.CUSTOM_STEP_BODY,
                renderStepBody: i,
                primaryCTAButtonProps: a,
            });
        },
        [l.pn.REVIEW]: eh.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(nY, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: s, isGift: a, skuId: o, ...l } = e;
            return (
                ((e) => {
                    let { applicationId: t, skuId: n } = e,
                        i = (0, nk.h)(t);
                    m.useEffect(() => {
                        null == i ||
                            null == n ||
                            nw.A.isFetchingForSKU(n) ||
                            null != nL.A.get(n) ||
                            (0, nU.Pp)(i.id, n);
                    }, [i, n]);
                })({ applicationId: s, skuId: o }),
                (0, r.jsx)(y.M, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: s,
                    skuIDs: [o],
                    purchaseType: tU.VV.ONE_TIME,
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
        tenantAnalyticsLocation: T.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, nW.YW)(t)
                .with(l.pn.GIFT_CUSTOMIZATION, () => q.intl.string(q.t["JCFN/y"]))
                .with(l.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => q.intl.string(q.t.lDbi6H))
                .with(l.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(eP.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var n8 = n(38785),
    n9 = n(818824),
    ie = n(944355),
    it = n(977445),
    ii = n(211287),
    ir = n(623373),
    is = n(739508),
    ia = n(715054);
(0, s.A)();
var io = n(136857),
    il = n(158317),
    iu = n(855104);
n(322076);
var ic =
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
    id = n(289873),
    i_ = n(241989),
    ih = n(576052),
    ip = n(120992),
    iE = n(194256),
    im = n(319820),
    ig = n(327105),
    iA = n(200766);
let iI = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: i, isSocialLayerGameItem: s } = (0, im.AO)({ sku: t }),
            a = (0, iE.oO)(i);
        s ? (a = q.intl.string(ig.default.qwSlCO)) : (0, ir.Ab)(i) && (a = q.intl.string(q.t["0TmQRG"]));
        let o = (0, iE.dL)(t),
            l = (0, ej.EZ)(t.id) ? ih.m[t.id].render({ className: iA.$ }) : (0, r.jsx)(i_.WH, { sku: t, product: i });
        return (0, r.jsx)(i_.f7, {
            label: o,
            description: a,
            graphic: l,
            price: null != n ? `${n}` : "",
            PriceIcon: nG.C,
        });
    },
    iT = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, ip.c)({ applicationId: (0, c.P)(t), skuIDs: [t] });
        let i = (0, eK.bG)([nL.A], () => nL.A.get(t), [t]);
        return null == i
            ? (0, r.jsx)(id.y, { type: id.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(iI, { sku: i, orbPriceAmount: n });
    },
    iS = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(ie.vW, { label: q.intl.string(q.t.y0WGqP), value: null != t ? `${t}` : "", Icon: nG.C });
    },
    iy = () => q.intl.string(q.t.wmcDyu);
function iC() {
    let { immediateDelivery: e } = (0, n9.U)(),
        t = iy();
    return (0, r.jsx)(ie._P, {
        variant: { type: ie.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let iN = (0, m.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    iv = () => (0, m.useContext)(iN),
    iR = { payment_gateway: tU.kM.VIRTUAL_CURRENCY, currency: z.Yri.DISCORD_ORB },
    iO = {
        CHECKOUT_FLOW: e_.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [l.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: s,
                        onRedeemVirtualCurrency: a,
                        skuId: o,
                        analyticsSourceLocation: u,
                    } = iv(),
                    { primaryButtonProps: _, ...f } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                isRedeeming: s,
                                orbRedemptionError: a,
                                onRedeemVirtualCurrency: o,
                                handleStepChange: u,
                            } = e,
                            { enabled: _ } = ii.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: f, orderOrbPriceAmount: p } = (0, v.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: E,
                                orbPriceAmount: A,
                                orbBalanceToDisplay: I,
                                onClickCheckout: T,
                                showCollectiblesDiscountWarning: y,
                                errorMessage: C,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: i,
                                        orbProductContext: r,
                                        analyticsSourceLocation: s,
                                        handleStepChange: a,
                                    } = e,
                                    { analyticsLocations: o } = (0, ex.Ay)(),
                                    {
                                        selectedSkuId: u,
                                        setPurchaseState: _,
                                        firstConstraintReasonCode: f,
                                    } = (0, v.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    p = (0, iu.gN)(),
                                    E = (0, m.useRef)(p),
                                    { emitOrbCheckoutPaymentFlowEvent: g } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: i,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: s } = (0, ez.V)(),
                                            { hasPaymentSources: a } = (0, ny.jm)(),
                                            {
                                                loadId: o,
                                                startTime: u,
                                                discoverySessionId: _,
                                            } = (0, v.t4)((e) => e.contextMetadata),
                                            f = (0, m.useMemo)(
                                                () => ({
                                                    load_id: o,
                                                    discovery_session_id: _,
                                                    application_id: (0, c.P)(t),
                                                    location: i,
                                                    location_stack: i,
                                                    sku_id: t,
                                                    activity_session_id: s,
                                                    payment_gateway: tU.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: z.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: z.frM[z.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: h.r.UNIFIED,
                                                        checkout_flow: S.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [o, _, s, t, i, r, n],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, m.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === z.HAw.PAYMENT_FLOW_STARTED
                                                        ? d.default.track(z.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...f,
                                                              has_saved_payment_source: a,
                                                              payment_gateway: tU.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === z.HAw.PAYMENT_FLOW_LOADED
                                                          ? d.default.track(z.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...f,
                                                                has_saved_payment_source: a,
                                                                initial_step: l.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === z.HAw.PAYMENT_FLOW_CANCELED
                                                            ? d.default.track(z.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...f,
                                                                  duration_ms: n,
                                                              })
                                                            : e === z.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? d.default.track(z.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...f,
                                                                    duration_ms: n,
                                                                })
                                                              : e === z.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? d.default.track(z.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...f,
                                                                      duration_ms: n,
                                                                  })
                                                                : d.default.track(z.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...f,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [u, f, a],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: r,
                                        analyticsLocations: o,
                                        analyticsSourceLocation: s,
                                    });
                                (0, m.useEffect)(() => {
                                    null != i &&
                                        null !== E.current &&
                                        (g(z.HAw.PAYMENT_FLOW_FAILED, i), (E.current = null));
                                }, [i, g]);
                                let A = (0, m.useCallback)(() => {
                                        (E.current = p),
                                            g(z.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                _(b.h.COMPLETED), a(l.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, _, p, g, a]),
                                    I = E.current ?? p,
                                    T = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, tg.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, m.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof il.FY && null != t)
                                                    switch (t) {
                                                        case ic.INSUFFICIENT_ORB_BALANCE:
                                                            return q.intl.string(q.t.keFvXM);
                                                        case ic.SKU_ALREADY_OWNED:
                                                            return q.intl.string(q.t.m371Mx);
                                                        case ic.BUNDLE_PARTIALLY_OWNED:
                                                            return q.intl.string(q.t.v9oC0p);
                                                        default:
                                                            return q.intl.string(q.t.fqJZ11);
                                                    }
                                                return e instanceof il.j2
                                                    ? q.intl.string(q.t["2BmwgV"])
                                                    : e.code === io.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? q.intl.string(q.t.keFvXM)
                                                      : e.code === io.tG.ALREADY_PURCHASED
                                                        ? q.intl.string(q.t.m371Mx)
                                                        : q.intl.string(q.t.fqJZ11);
                                            })(i, f),
                                        [i, f],
                                    ),
                                    orbPriceAmount: T,
                                    orbBalanceToDisplay: I,
                                    onClickCheckout: A,
                                    selectedSkuId: u,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                orbRedemptionError: a,
                                onRedeemVirtualCurrency: o,
                                handleStepChange: u,
                            }),
                            N = (0, g.bG)([nL.A], () => nL.A.get(t), [t]),
                            R = (0, it.uS)(N?.applicationId),
                            {
                                disabled: O,
                                tooltipText: D,
                                text: L,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: i = !1 } = e,
                                    { disabled: r, tooltipText: s } = (0, m.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: q.intl.string(q.t["c/rcUu"]) }
                                                : !i && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: q.intl.string(q.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, i],
                                    );
                                return { disabled: r, tooltipText: s, text: iy() };
                            })({ orbBalance: I, orbPriceAmount: _ ? f : A, isInTestMode: R }),
                            w = (0, m.useMemo)(
                                () => ({ onClick: T, loading: s, text: L, disabled: O, tooltipText: D }),
                                [T, s, L, O, D],
                            ),
                            M = y ? q.intl.format(q.t.fsOXXO, {}) : null,
                            P = R ? q.intl.string(q.t.OvMyMd) : null;
                        return {
                            isStepLoading: E,
                            upperInlineNoticeProps: (0, m.useMemo)(() => {
                                if (null != P || null != M || null != C) {
                                    let e = [];
                                    return (
                                        null != P &&
                                            e.push({ type: "warning", message: P, key: "test-mode-warning-notice" }),
                                        null != M &&
                                            e.push({ type: "warning", message: M, key: "orb-checkout-warning-notice" }),
                                        null != C &&
                                            e.push({ type: "critical", message: C, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [P, M, C]),
                            purchaseItemContent: (0, r.jsx)(iT, { skuId: t, orbPriceAmount: _ ? p : A }),
                            paymentMethodContent: (0, r.jsx)(iS, { orbBalance: I }),
                            legalContent: (0, r.jsx)(iC, {}),
                            primaryButtonProps: w,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: o,
                        analyticsSourceLocation: u,
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: s,
                        onRedeemVirtualCurrency: a,
                        handleStepChange: t,
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(e6.dZ, { children: (0, r.jsx)(n8.T, { ...f }) }),
                        (0, r.jsx)(e6.UX, { children: (0, r.jsx)(N.lo, { primaryButtonProps: _ }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: i, children: s } = e,
                    { order: a, setOrder: o } = (0, v.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: l,
                        isRedeeming: u,
                        orbRedemptionError: c,
                        onRedeemVirtualCurrency: d,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: i, onSignFailure: r, order: s } = e,
                            a = (0, g.bG)([tu.default], () => tc.Ay.canUseShopDiscounts(tu.default.getCurrentUser())),
                            o = (0, g.bG)([nL.A], () => nL.A.get(t), [t]),
                            l = (0, nX.JL)({ sku: o }),
                            { product: u } = (0, td.q)(t),
                            c = (0, m.useMemo)(() => {
                                if (null != l) return { orbPriceAmount: l.amount };
                                if (null != u) {
                                    let e = (0, ir.CW)({ product: u, hasShopDiscount: a });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [l, u, a]);
                        c?.orbPriceAmount == null &&
                            (0, is.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: d,
                                isSubmitting: _,
                                error: h,
                            } = (0, ia.Q)({ skuId: t, loadId: n, order: s, onSignFailure: r }),
                            f = (0, m.useCallback)(
                                (e) => {
                                    d(t, n, (n) => {
                                        i?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, d, i],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            orbProductContext: c,
                            onRedeemVirtualCurrency: f,
                            isRedeeming: _,
                            orbRedemptionError: h,
                        };
                    })({ skuId: t, loadId: n, order: a, onSignFailure: o }),
                    _ = (0, m.useMemo)(
                        () => ({
                            orbProductContext: l,
                            isRedeeming: u,
                            orbRedemptionError: c,
                            onRedeemVirtualCurrency: d,
                            skuId: t,
                            analyticsSourceLocation: i,
                        }),
                        [l, u, c, d, t, i],
                    );
                return (0, r.jsx)(iN.Provider, { value: _, children: s });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: i } = iv(),
                    r = ((e) => {
                        let { orbProductContext: t, overrideAnalyticParams: n } = e;
                        return {
                            analyticsDataOverride: (0, m.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...n,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, n]),
                            skipConfirm: !0,
                        };
                    })({ orbProductContext: i, overrideAnalyticParams: iR });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: iR,
        },
    },
    ib = {
        [_.C.ORB_CHECKOUT]: {
            flowType: _.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: z.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: iO,
        },
        [_.C.COLLECTIBLES_CHECKOUT]: {
            flowType: _.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: z.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tH,
        },
        [_.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: z.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: n7,
        },
        [_.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.PREMIUM_CHECKOUT,
            purchaseType: z.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: ne,
        },
        [_.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: _.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [_.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: z.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nx,
        },
        [_.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: z.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: nO,
        },
        [_.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: z.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eM,
            flowType: _.C.GUILD_PRODUCT_CHECKOUT,
        },
        [_.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: tX,
            purchaseType: z.VVm.SUBSCRIPTION,
        },
        [_.C.GUILD_BOOST_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.GUILD_BOOST_CHECKOUT,
            purchaseType: z.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: ed,
        },
    };
var iD = n(735305),
    iL = n(169801),
    iw = n(380619),
    iM = n(295405);
let iP = (e) => {
        let { returnStep: t = l.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: i } = e,
            { purchaseType: s } = (0, v.t4)((e) => ({ purchaseType: e.purchaseType })),
            a = m.useCallback(
                () =>
                    ((e) => {
                        let {
                            paymentModalStepProps: t,
                            returnStep: n = l.pn.REVIEW,
                            returnStepIfNoPaymentSources: i,
                            purchaseType: r,
                        } = e;
                        if (0 === Object.keys(iM.A.paymentSources).length) {
                            if (null != i) return void t.handleStepChange(i);
                            r === tU.VV.SUBSCRIPTION
                                ? t.handleStepChange(n, { trackedFromStep: l.pn.ADD_PAYMENT_STEPS })
                                : t.handleClose();
                        } else t.handleStepChange(n, { trackedFromStep: l.pn.ADD_PAYMENT_STEPS });
                    })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: i, purchaseType: s }),
                [t, n, i, s],
            );
        return (0, r.jsx)(iD.x, { ...i, onReturn: a });
    },
    ix = (e) => {
        let { initialPlanId: t } = e,
            n = (0, v.t4)((e) => e.selectedSkuId),
            i = (0, nC.A)(),
            { isGift: s, claimableRewards: a } = (0, eU.Pv)(),
            o = (0, iL.A)({ isGift: s, skuId: n }),
            u = (0, t4.lp)(o),
            c = (0, iw.px)(i, s, a),
            d = m.useMemo(() => {
                let e = null == t ? l.pn.PLAN_SELECT : l.pn.REVIEW;
                return u && (e = l.pn.REVIEW), c && (e = l.pn.SELECT_FREE_SKU), e;
            }, [u, c, t]);
        return (0, r.jsx)(iP, { paymentModalStepProps: e, returnStep: l.pn.REVIEW, returnStepIfNoPaymentSources: d });
    },
    ik = (e) => {
        let {
            checkoutFlow: t,
            returnStep: n = l.pn.REVIEW,
            returnStepIfNoPaymentSources: i,
            paymentModalStepProps: s,
        } = e;
        return t === _.C.PREMIUM_CHECKOUT
            ? (0, r.jsx)(ix, { ...s })
            : (0, r.jsx)(iP, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: i });
    };
var iU = n(434574),
    iG = n(343834),
    iF = n(926795);
let iV = { key: null, renderStep: (e) => (0, r.jsx)(iU.L, { ...e }), options: { modalSizeGetter: () => "md" } },
    iB = { key: null, renderStep: (e) => (0, r.jsx)(iU.z, { ...e }) },
    ij = [
        { key: l.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(iF.A, {}) },
        { key: l.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(iG.A, {}), options: { renderHeader: !0 } },
    ];
var iH = n(246681);
let iY = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            i = (0, m.useRef)(!1),
            s = (0, B.Hp)(),
            { handleStepChange: a } = t;
        return ((0, m.useEffect)(() => {
            s || i.current || (a(n), (i.current = !0));
        }, [s, a, n]),
        s)
            ? (0, r.jsx)(j.oO, {})
            : null;
    },
    iW = {
        [_.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [_.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [_.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [_.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [_.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [_.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [_.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [_.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [_.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [_.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    };
class iK {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = ib[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = iW[e]),
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
              ? iV
              : "subscription" === t
                ? iB
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(iY, { paymentModalStepProps: e, defaultStep: l.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== _.C.ORB_CHECKOUT)
            return {
                key: l.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(ik, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => q.intl.string(q.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(l.pn.REVIEW);
        return {
            key: l.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => q.intl.string(q.t.QBnNHq) },
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
            c = this.createDefinedStepConfigsArray([s, ...(null != a ? [a] : []), ...i, o, ...(r ? [] : ij), u]);
        return null != n && c.push({ key: l.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === _.C.ORB_CHECKOUT && null != e
            ? (0, c.P)(e)
            : this.checkoutFlow === _.C.COLLECTIBLES_CHECKOUT
              ? z.FYj
              : this.checkoutFlow === _.C.PREMIUM_CHECKOUT
                ? es.tv
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
            eligibleForTrial: f,
        } = e;
        d.default.track(z.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: s,
            payment_type: z.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: i,
            application_id: r,
            location: a ?? l,
            location_stack: o,
            source: u,
            eligible_for_trial: f,
            payment_modal_version: "v2",
            checkout_design: h.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === _.C.PREMIUM_CHECKOUT ? { subscription_type: z.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    renderCheckoutInstance(e) {
        let {
                additionalOptions: t,
                giftContextProps: i,
                onComplete: l,
                onClose: c,
                skuId: d,
                skuProductLine: h,
                discoverySessionId: f,
                applicationId: p,
                analyticsSourceLocation: m,
                analyticsLocations: g,
                analyticsObject: A,
                tenantParams: I,
                activeSubscription: T = null,
                ...S
            } = e,
            y = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            C = arguments.length > 2 ? arguments[2] : void 0,
            N = { current: (this.checkoutFlow === _.C.PREMIUM_CHECKOUT ? (0, u.A)() : null) ?? (0, s.A)() },
            v = { current: null },
            { modalKey: R } = C,
            O = this.generateRenderHeader(),
            b = p ?? this.getApplicationId(d),
            D = !!(null != i && i.isGift),
            L = !1,
            w = {
                ...S,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: D }),
                onComplete: (e) => {
                    null != l && l(e), (L = !0);
                },
                onClose: c,
                renderHeader: O,
                skuId: d ?? null,
                tenantParams: I ?? {},
                loadId: N.current,
                onOrderCreated: (e) => {
                    (N.current = e.id), (v.current = e);
                },
                discoverySessionId: f,
                activeSubscription: T,
                applicationId: b,
                analyticsLocations: g,
                analyticsObject: A,
                analyticsSourceLocation: m,
                giftContextProps: i,
                additionalOptions: t,
            };
        if ("modal" === y)
            return (0, a.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.resolve().then(n.bind(n, 246681));
                    return (t) => (0, r.jsx)(e, { ...w, renderModalProps: t });
                },
                {
                    ...C,
                    onCloseRequest: () => {
                        null != C.onCloseRequest && C.onCloseRequest(L, N.current),
                            C.skipCloseModalOnCloseRequest || (0, a.closeModal)(R);
                    },
                    onCloseCallback: () => {
                        L ||
                            (E({ checkoutSucceeded: L, order: v.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: N.current,
                                skuId: d,
                                skuProductLine: h,
                                applicationId: b,
                                discoverySessionId: f,
                                analyticsLocation: S.analyticsLocation,
                                analyticsLocations: g,
                                analyticsObject: A,
                                analyticsSourceLocation: m,
                                isGift: D,
                                eligibleForTrial: null != S.trialId,
                            })),
                            null != C.onCloseCallback && C.onCloseCallback(L),
                            null != c && c(L, d);
                    },
                    modalKey: R,
                },
            );
        {
            let e = S.paymentModalOnClose ?? c,
                t = { transitionState: o.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, r.jsx)(iH.UnifiedCheckoutInstance, { ...w, paymentModalOnClose: e, renderModalProps: t });
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
