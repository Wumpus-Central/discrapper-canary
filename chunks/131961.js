"use strict";
n.d(t, { o: () => r6 }), n(321073);
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
    W = n(753390);
function K() {
    let e = (0, g.bG)([P.A], () => P.A.hasFetchedSubscriptions());
    return (
        m.useEffect(() => {
            e || (0, W.hP)();
        }, [e]),
        e
    );
}
var $ = n(526151),
    z = n(303557),
    q = n(652215),
    Z = n(375708),
    X = n(898640);
function Q(e) {
    let { message: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.s3, { title: Z.intl.string(Z.t.q9EGps) }),
            (0, r.jsx)(V.c, { children: (0, r.jsx)("p", { className: X.C, children: t }) }),
        ],
    });
}
var J = n(989351),
    ee = n(619088),
    et = n(587187),
    en = n(130305),
    ei = n(160946),
    er = n(97352),
    es = n(83617),
    ea = n(788868);
function eo() {
    let { setCurrency: e, setCurrencies: t } = (0, $.Oe)(),
        { paymentSourceId: n, activeSubscription: i } = (0, v.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        r = (0, ei.Y)();
    return (
        m.useEffect(() => {
            (0, es.c_)(n);
        }, [n]),
        m.useEffect(() => {
            let s;
            r &&
                (null != er.A.get(ea.gD.PREMIUM_MONTH_GUILD) && t((s = (0, es._w)(ea.gD.PREMIUM_MONTH_GUILD, n, !1))),
                null == n && null != i && null != i.paymentSourceId ? e(i.currency) : null != s && e(s[0]));
        }, [n, i, r, e, t]),
        null
    );
}
var el = n(121226);
let eu = [l.pn.PLAN_SELECT],
    ec = [ea.pe.GUILD],
    ed = [
        { key: l.pn.PLAN_SELECT, renderStep: (e) => (0, r.jsx)(ee.c, { ...e }), options: { renderHeader: !0 } },
        {
            key: l.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, r.jsx)(et.d, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    e_ = {
        CHECKOUT_FLOW: S.C.GUILD_BOOST_CHECKOUT,
        CustomCheckoutPredicateStep: function (e) {
            let { handleStepChange: t } = e,
                n = (0, v.t4)((e) => e.activeSubscription),
                { guildId: i, analyticsLocation: s, currency: a } = (0, $.Oe)(),
                o = (0, B.Hp)(),
                u = K(),
                { hasFetchedRelatedSubscriptionPlans: c } = (0, H.Jn)(),
                { hasFetchedPremiumSubscriptionPlan: _ } = (0, z.l)(),
                h = null != n && null != n.renewalMutations,
                f = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
                p = !u || !c || !_ || null == a || "" === a;
            return ((0, I.Ay)(() => {
                h && d.default.track(q.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: s, guild_id: i });
            }),
            m.useEffect(() => {
                p || o || f || h || t(l.pn.PLAN_SELECT);
            }, [p, o, f, h, t]),
            f)
                ? (0, r.jsx)(Q, { message: Z.intl.string(Z.t.mOWsF1) })
                : h
                  ? (0, r.jsx)(Q, { message: Z.intl.string(Z.t.npfhh0) })
                  : p
                    ? (0, r.jsx)(Y.A, {})
                    : o
                      ? (0, r.jsx)(j.oO, {})
                      : null;
        },
        STEPS_BEFORE_CHECKOUT: ed,
        CHECKOUT_STEPS: { [l.pn.REVIEW]: en.b },
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
                        skuIDs: ec,
                        loadId: _,
                        unifiedCheckoutFlow: S.C.GUILD_BOOST_CHECKOUT,
                        children: (0, r.jsxs)($.mf, {
                            initialNumGuildBoostsToPurchase: E,
                            disablePremiumUpsell: s,
                            closeGuildPerksModal: o,
                            guildId: t,
                            analyticsLocation: l,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: i,
                            onSubscribeComplete: a,
                            children: [(0, r.jsx)(eo, {}), (0, r.jsx)(el.B, { onComplete: h }), f],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { numGuildBoostsToPurchase: i, guildId: s, existingAvailableSlotCount: a } = (0, $.Oe)(),
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
                          skipUnifiedHeaderForSteps: eu,
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
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(J.H, { ...e }), options: { renderHeader: !0 } },
    };
var eh = n(529427),
    ef = n(630303),
    ep = n(284009),
    eE = n.n(ep),
    em = n(666646),
    eg = n(871109);
let eA = m.createContext(void 0);
function eI() {
    let e = m.useContext(eA);
    return eE()(null != e, "GuildProductPurchaseContext not found"), e;
}
function eT(e) {
    let { children: t, skuId: n, ...i } = e,
        s = (0, g.bG)([eg.A], () => eg.A.getGuildProduct(n));
    return (
        eE()(null != s, "guildProductListing cannot be null"),
        (0, r.jsx)(eA.Provider, { value: { guildProductListing: s, ...i }, children: t })
    );
}
function eS(e) {
    let { handleClose: t } = e,
        { guildProductListing: i, guildId: s } = eI(),
        o = (0, em.sw)();
    return (
        (0, I.Ay)(() => {
            var e;
            eE()(null != o, "invoicePreview cannot be null"),
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
var ey = n(503698),
    eC = n.n(ey),
    eN = n(939249),
    ev = n(789645),
    eR = n(935462),
    eO = n(303612),
    eb = n(916261),
    eD = n(575650);
function eL(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(eN.D, {
        className: eC()(eb.cG, t),
        onClick: n,
        children: (0, r.jsx)(ev.P, { size: "xs", color: "currentColor", className: eb.yP }),
    });
}
function ew(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, r.jsxs)(eR.rQ, {
        className: eC()(eb.wx, eD.GI, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(eO.A, { className: eb.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(eL, { className: eb.b, onClose: n }),
        ],
    });
}
var eM = n(196617);
let eP = {
    CHECKOUT_FLOW: eh.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [l.pn.REVIEW]: ef.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: i,
            } = e;
            return (0, r.jsx)(eT, { guildId: t, skuId: n, children: i });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: i } = eI();
        return n === l.pn.CONFIRM
            ? null
            : (0, r.jsx)(ew, { guildProductListing: i, className: eM.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eS, { ...e }) },
};
var ex = n(20742),
    ek = n(688810),
    eU = n(848149),
    eG = n(937008),
    eF = n(106778),
    eV = n(228366),
    eB = n(213530),
    ej = n(966971),
    eH = n(758836),
    eY = n(483764);
let eW = { sliderBodyClassName: eY.Bz },
    eK = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eF.Fk, { ref: n, className: eY.Lb, environment: t.current }),
                (0, r.jsx)(eB.K, { options: i, className: eC()(eY.Oh, { [eY.R]: !s }) }),
            ],
        });
    };
var e$ = n(702841),
    ez = n(775602),
    eq = n(31823),
    eZ = n(211083),
    eX = n(427675),
    eQ = n(590180),
    eJ = n(953150),
    e0 = n(524246),
    e1 = n(14368),
    e2 = n(61750),
    e3 = n(972607),
    e6 = n(901930),
    e4 = n(482132);
function e5(e) {
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
        { paymentError: l } = (0, eZ.o)(),
        { application: u } = (0, eq.V)(),
        c = (0, eX.gU)(),
        d = (0, e$.bG)([eQ.A], () => eQ.A.getProduct(i)),
        _ = m.useRef(!1);
    eE()(null != i, "Expected selectedSkuId"), eE()(null != u, "Expected application");
    let h = c[i];
    eE()(null != h, "Expected sku");
    let f = null != l || null != s || null != a,
        p =
            o.length > 0
                ? Z.intl.formatToPlainString(Z.t.VuV3Td, { discountOfferAmount: o[0].discount.amount })
                : void 0;
    return (m.useEffect(() => {
        null == d ||
            f ||
            _.current ||
            ((_.current = !0),
            (0, e2.A)({
                product: d,
                overrideTitle: p,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: eH.gs.FIAT,
            }));
    }, [d, n, t, f, p]),
    f)
        ? (0, r.jsx)(e4.dZ, { children: (0, r.jsx)(e6.A, {}) })
        : null;
}
function e7(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: i,
            hasSentMessage: s,
            giftRecipient: a,
            giftMessageError: o,
            isSendingMessage: l,
            giftingOrigin: u,
        } = (0, eG.Pv)(),
        c = (0, e$.bG)([ez.Ay], () => ez.Ay.useReducedMotion),
        d = m.useRef(null),
        _ = (0, v.t4)((e) => e.selectedSkuId),
        h = (0, e$.bG)([eQ.A], () => eQ.A.getProduct(_)),
        { confettiColors: f } = (0, eJ.A)(h?.styles);
    return (
        m.useEffect(() => {
            t &&
                null != a &&
                null != _ &&
                (u === ea.vQ.USER_PROFILE_WISHLIST || u === ea.vQ.DM_CHANNEL_WISHLIST) &&
                eV.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: _, recipientId: a.id });
        }, [t, a, _, u]),
        t
            ? (0, r.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, r.jsx)(e3.A, {
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
                          (0, r.jsx)(e0.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, e1.rA)(h?.categorySkuId),
                              colors: f?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(e5, { ...e })
    );
}
var e8 = n(123292),
    e9 = n(564064),
    te = n(993408),
    tt = n(575593),
    tn = n(452027),
    ti = n(922016),
    tr = n(778712),
    ts = n(834730),
    ta = n(534514),
    to = n(986687),
    tl = n(999291),
    tu = n(903209),
    tc = n(287809),
    td = n(428262),
    t_ = n(674658),
    th = n(898461),
    tf = n(203632),
    tp = n(892118),
    tE = n(536572),
    tm = n(456839),
    tg = n(219103),
    tA = n(525723),
    tI = n(780651);
function tT(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: i,
            className: s,
            previewHeaderClassName: a,
            hideProfilePreview: o,
        } = e,
        { giftRecipient: l, giftRecipientError: u } = (0, eG.Pv)(),
        c = (0, g.bG)([tc.default], () => tc.default.getCurrentUser()),
        d = td.Ay.canUseShopDiscounts(c),
        _ = (0, tl.Ay)(l?.id),
        h = m.useRef(null),
        [f, p] = m.useState(!1),
        { product: E } = (0, t_.q)(t, !0),
        A = m.useMemo(() => (0, te.fT)(E, d), [E, d]),
        I = (0, tA.V_)(E);
    if (null == E || 0 === E.items.length) return null;
    let [T] = E.items,
        S = (0, tE.VG)(E),
        y = null != l && l.id !== c?.id && E.type !== tt.R.BUNDLE && T.type !== tt.R.NAMEPLATE && !o;
    return (0, r.jsxs)("div", {
        className: s,
        children: [
            (0, r.jsx)("div", {
                className: eC()(tI.QU, a),
                children: (0, r.jsx)(tn.D, {
                    label: Z.intl.string(Z.t.PpoJzt),
                    children:
                        y &&
                        (0, r.jsx)(
                            ti.Y,
                            {
                                targetElementRef: h,
                                align: "center",
                                shouldShow: f,
                                onRequestClose: () => p(!1),
                                preload: () => (0, tu.A)(l.id, l.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(to.A, {
                                        ...e,
                                        user: l,
                                        pendingAvatar: l.getAvatarURL(null, (0, tr.FT)(tr._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, th.T)(T) ? T : null,
                                        pendingProfileEffect: (0, tf.C3)(T) ? T : null,
                                        pendingProfileFrame: (0, tp.s)(T) ? T : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...i } = e;
                                    return (0, r.jsx)(eN.D, {
                                        ...i,
                                        className: tI.Nx,
                                        innerRef: h,
                                        onClick: (e) => {
                                            p((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            f ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(ts.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: Z.intl.string(Z.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            _?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: eC()(tI.i1, null != u ? tI.cN : tI.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: tI.Ug,
                        children: [
                            (0, r.jsx)(tm.O, { product: E }),
                            (0, r.jsxs)("div", {
                                className: tI.JZ,
                                children: [
                                    (0, r.jsx)(ts.E, { variant: "text-md/semibold", children: S }),
                                    (0, r.jsx)(ta.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            E?.type === tt.R.BUNDLE
                                                ? null
                                                : T.type === tt.R.AVATAR_DECORATION
                                                  ? Z.intl.string(Z.t["7v0T9P"])
                                                  : T.type === tt.R.NAMEPLATE
                                                    ? Z.intl.string(Z.t.x5CoXR)
                                                    : T.type === tt.R.PROFILE_EFFECT
                                                      ? Z.intl.string(Z.t.wR5wOo)
                                                      : T.type === tt.R.PROFILE_FRAME
                                                        ? Z.intl.string(Z.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(tg.x, {
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
                            className: tI.Wh,
                            children: (0, r.jsx)(ts.E, {
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
var tS = n(783878),
    ty = n(966327),
    tC = n(427262);
let tN = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: i, recipients: s } = e,
        { giftRecipient: a, setGiftRecipient: o } = (0, eG.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: i,
              children: (0, r.jsx)(tS.Z, {
                  selectionMode: "single",
                  label: Z.intl.string(Z.t.xFn72s),
                  placeholder: Z.intl.string(Z.t.R0vK0N),
                  value: a?.id,
                  onSelectionChange: (e) => {
                      let i = s.find((t) => t.id === e);
                      null != i && (n(i, t), o(i));
                  },
                  options: s.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${tC.Ay.getUserTag(e)}`,
                      leading: (0, r.jsx)(ty.A, { user: e, size: tr._3.SIZE_20 }),
                  })),
              }),
          });
};
var tv = n(735438),
    tR = n.n(tv),
    tO = n(427358),
    tb = n(570287),
    tD = n(994500);
function tL() {
    let e = (0, g.yK)([tD.A], () => tD.A.getFriendIDs()),
        t = (0, g.yK)([tO.A], () =>
            tO.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: i, otherUserId: r } = e,
                        s = (0, tb.q)(r);
                    return !t && (n >= 0.1 || i >= 0.1) && s;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = m.useMemo(() => tR().uniq([...e, ...t]), [e, t]);
    return (0, g.yK)(
        [tc.default],
        () =>
            n.reduce((e, t) => {
                let n = tc.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var tw = n(871181),
    tM = n(318007),
    tP = n(285719),
    tx = n(976860),
    tk = n(353791);
function tU(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, ek.Ay)(T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(e8.Q, {
        text: Z.intl.string(Z.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, e9.Cz)({ analyticsLocations: i, analyticsSource: T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, tx.pX)(`${q.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var tG = n(818348);
let tF = (0, m.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        onStepChange: void 0,
    }),
    tV = () => (0, m.useContext)(tF),
    tB = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = tV(),
            { analyticsLocations: i } = (0, ek.Ay)();
        return (0, r.jsx)(e7, { analyticsLocations: i, hideConfetti: t, confettiCanvas: n, ...e });
    },
    tj = {
        [l.pn.GIFT_CUSTOMIZATION]: () => Z.intl.string(Z.t["JCFN/y"]),
        [l.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => Z.intl.string(Z.t.lDbi6H),
        [l.pn.CONFIRM]: () => "",
    },
    tH = (e) => {
        let { step: t } = e,
            n = tj[t];
        return null == n ? null : (0, r.jsx)(ex.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    tY = {
        CHECKOUT_FLOW: eh.CL.COLLECTIBLES_CHECKOUT,
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
                            } = (0, eG.Pv)(),
                            { selectedSkuId: h, checkoutInvoicePreview: f } = (0, v.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            p = (0, eX.gU)(),
                            E = (0, g.bG)([tc.default], () => tc.default.getCurrentUser()),
                            m = tL(),
                            A = async (e, t) => {
                                _(!0),
                                    null != a && o(),
                                    (await (0, e9.JJ)(e.id, t)) || o(Z.intl.string(Z.t["4kgVqQ"])),
                                    _(!1);
                            };
                        (0, I.Ay)(() => {
                            null != h &&
                                null != u &&
                                (c !== ea.vQ.DM_CHANNEL_WISHLIST &&
                                    d.default.track(q.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: h }),
                                A(u, h));
                        });
                        let T = () =>
                            (0, r.jsx)(tw.A, {
                                onTextChange: (e) => s?.(e),
                                pendingText: i,
                                currentText: i,
                                disableThemedBackground: !0,
                                className: tk.iX,
                                innerClassName: tk.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, r.jsx)("div", { className: tk.qL, children: (0, r.jsx)(tM.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, te.pA)({ invoicePreview: f, selectedSkuId: h, skusById: p });
                                return c === ea.vQ.USER_PROFILE_WISHLIST || c === ea.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(tP.Z, { giftRecipient: u }),
                                              T(),
                                              null != e &&
                                                  null != h &&
                                                  (0, r.jsx)(tT, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: tk.uW,
                                                      previewHeaderClassName: tk.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: tk.fi,
                                                  children: (0, r.jsx)(tU, { handleClose: n, selectedSkuId: h }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(tN, {
                                                  selectedSkuId: h,
                                                  recipients: m,
                                                  className: tk.uh,
                                                  validateSelectedGift: A,
                                              }),
                                              T(),
                                              null != e &&
                                                  null != h &&
                                                  (0, r.jsx)(tT, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: tk.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != a || null == u || u.id === E?.id || i.length > ea.Jo,
                            loading: l,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    l = m.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, r.jsx)(eh.Mw, {
                    paymentModalStepProps: e,
                    layout: eh.XZ.TWO_COLUMN,
                    renderLeftColumn: i,
                    renderRightColumn: s,
                    primaryCTAButtonProps: l,
                });
            },
            [l.pn.REVIEW]: ef.p,
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
                            n = m.useRef(new eF.OH()),
                            [i, r] = m.useState(null),
                            [s, a] = m.useState(!1),
                            o = m.useMemo(() => (0, ej.AB)({ purchaseType: eH.gs.FIAT, skuId: t }), [t]);
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
                        (0, r.jsx)(eK, {
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
                            purchaseType: tG.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, r.jsx)(tF.Provider, { value: p, children: i }),
                        }),
                    ],
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { skuIDs: i, setCustomConfettiVisible: r, onStepChange: s } = tV(),
                    { isGift: a } = (0, eG.Pv)(),
                    o = (0, eU.J)(),
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
                                    r(!1), n(e), eV.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
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
                return n({ ...t, skuId: l, onClose: d, onComplete: c, applicationId: q.FYj, onStepChange: s });
            },
            tenantAnalyticsLocation: T.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, eG.Pv)();
            return n ? (0, r.jsx)(tH, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(tB, { ...e }), options: eW },
    };
var tW = n(354033),
    tK = n(786300),
    t$ = n(491057),
    tz = n(496142),
    tq = n(877624),
    tZ = n(554146),
    tX = n(71804),
    tQ = n(426398),
    tJ = n(558620),
    t0 = n(841702),
    t1 = n(367727),
    t2 = n(380619),
    t3 = n(374200),
    t6 = n(771566),
    t4 = n(625494),
    t5 = n(45938),
    t7 = n(615396),
    t8 = n(364840),
    t9 = n(821609),
    ne = n(97808),
    nt = n(912140),
    nn = n(780898),
    ni = n(344346),
    nr = n(837015),
    ns = n(258915);
function na(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: i } = e,
        s = (0, g.bG)([tc.default], () => tc.default.getCurrentUser()),
        a = (0, g.bG)([ez.Ay], () => ez.Ay.useReducedMotion),
        { analyticsLocations: o } = (0, ek.Ay)(),
        l = tr._3.SIZE_32,
        { product: u, isFetching: c } = (0, t_.q)(t),
        [d, _] = m.useState(!1),
        h = u?.items[0],
        {
            isNameplateReward: f,
            nameplateData: p,
            rewardAvatarDecorationSrc: E,
        } = m.useMemo(
            () =>
                null == h
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, nr.F)(h)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: h.skuId,
                                src: h.asset,
                                palette: (0, nn.H6)(h.palette ?? "sky"),
                                imgAlt: h.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, th.T)(h)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, nt.A)({
                                  legacyAssetId: h.asset,
                                  skuId: h.skuId,
                                  size: l,
                                  canAnimate: !a,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [h, l, a],
        );
    return (0, r.jsx)(e4.UX, {
        children: (0, r.jsx)(t8.j, {
            children: (0, r.jsxs)("div", {
                className: ns.W,
                children: [
                    f && null != p
                        ? (0, r.jsx)("div", {
                              className: ns.D,
                              onMouseEnter: () => _(!0),
                              onMouseLeave: () => _(!1),
                              children: (0, r.jsx)(ni.a, {
                                  user: s,
                                  nameplate: null,
                                  nameplateData: p,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: d,
                              }),
                          })
                        : (0, r.jsx)(ne.Js, {
                              "aria-label": s?.username,
                              size: l,
                              src: s?.getAvatarURL(void 0, (0, tr.FT)(l), !a),
                              avatarDecoration: E,
                          }),
                    (0, r.jsx)(t9.$, {
                        variant: "primary",
                        text: Z.intl.string(Z.t.kMYVwv),
                        loading: c,
                        onClick: () => {
                            null != u &&
                                (n(),
                                (0, e2.A)({
                                    product: u,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: o,
                                    purchaseType: eH.gs.PROMOTIONAL,
                                    onCloseCallback: i,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var no = n(216641),
    nl = n(49999);
function nu(e) {
    let t,
        {
            handleClose: i,
            planGroup: s,
            onSubscriptionConfirmation: o,
            renderPurchaseConfirmation: l,
            postSuccessGuild: u,
            followupSKUInfo: c,
            continueSessionToInitialStep: _,
        } = e,
        { paymentSources: h } = (0, tQ.jm)(),
        {
            activeSubscription: f,
            selectedSkuId: p,
            updatedSubscription: E,
            paymentSourceId: A,
            isPremiumGroupPurchase: T,
            startingPremiumSubscriptionPlanId: S,
            startingFractionalPremiumEndsAt: y,
        } = (0, v.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
        })),
        C = (0, tJ.A)(),
        N = (0, D.bB)(),
        {
            isGift: R,
            giftRecipient: O,
            giftCode: b,
            hasSentMessage: L,
            isSendingMessage: w,
            sendGiftMessage: M,
            claimableRewards: P,
            selectedGiftingPromotionReward: x,
            openGiftingBadgePostPurchaseModal: k,
        } = (0, eG.Pv)(),
        { confirmationFooter: U } = (0, t$.cG)(),
        G = (0, t2.px)(C, R, P),
        F = (0, t2.Mq)(C),
        V = (0, t0.Mv)(x, !1),
        B = (0, g.bG)([t3.A], () => t3.A.getGiftPromotion()?.id),
        j = (0, g.bG)([t3.A], () => {
            let e = t3.A.getMarketingComponentByType(tq.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        H = (0, no.g)(h, A),
        Y = R && null != x && null != V && F,
        W = { selectedPlan: C, selectedSkuId: p, step: N };
    if (null == C) throw new tX.v({ message: "Expected plan to be selected", extraSentryInformation: W });
    if (null == p) throw new tX.v({ message: "Expected selectedSkuId", extraSentryInformation: W });
    if (null == N) throw new tX.v({ message: "Step should be set", extraSentryInformation: W });
    let K = m.useCallback(() => {
        i(), o?.();
    }, [i, o]);
    (0, I.Ay)(() => {
        T &&
            d.default.track(q.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != E,
                has_any_premium_group: E?.hasAnyPremiumGroup ?? !1,
                subscription_id: E?.id,
            });
    }),
        m.useEffect(() => {
            function e() {
                if (T)
                    if (null != E && E.hasAnyPremiumGroup) {
                        d.default.track(q.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: E.id });
                        let e = (0, tv.uniqueId)("premium-group-purchase-flow-modal");
                        (0, a.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("17494"),
                                    n.e("44616"),
                                    n.e("96680"),
                                    n.e("85579"),
                                ]).then(n.bind(n, 785606));
                                return (t) =>
                                    (0, r.jsx)(e, {
                                        ...t,
                                        subscription: E,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            t4._.dispatch(q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    t4._.dispatch(q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, a.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        d.default.track(q.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != E,
                            has_any_premium_group: E?.hasAnyPremiumGroup ?? !1,
                        }),
                            t4._.dispatch(q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                t4._.subscribe(q.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    t4._.unsubscribe(q.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [T, E]),
        m.useEffect(() => {
            !R || null == O || null == b || L || w || (0, t5.Ik)(O) || M({ onSubscriptionConfirmation: o });
        }, [M, R, O, b, L, w, o]),
        m.useEffect(() => {
            G &&
                null != j &&
                null != B &&
                (0, t1.qr)(tZ.M.GIFTING_PROMOTION_REMINDER, B, { dismissAction: nl.i.INDIRECT_ACTION });
        }, [j, B, G]);
    let $ = null != _ ? t6.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != l) t = l(C, K, E);
    else if (R) t = (0, r.jsx)(t6.fw, { planId: C.id, onClose: K });
    else {
        let e =
            S === C.id
                ? { postSuccessGuild: u }
                : {
                      followupSKUInfo: c,
                      startingPremiumSubscriptionPlanId: S,
                      isDowngrade: null != f && (0, t7.vT)(f, C.id, s),
                  };
        t = (0, r.jsx)(t6.Ay, {
            planId: C.id,
            onClose: K,
            paymentSourceType: H,
            hideClose: null != U,
            startingFractionalPremiumEndsAt: y,
            customCTAType: $,
            ...e,
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(e4.dZ, { children: [(0, r.jsx)(e6.A, {}), t] }),
            null != U && U,
            Y && null != x && (0, r.jsx)(na, { rewardSkuId: x, onClose: K, onRewardModalClose: k }),
        ],
    });
}
let [nc, nd] = (0, tK.A)(),
    n_ = {
        CHECKOUT_FLOW: eh.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [l.pn.REVIEW]: tz.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: i,
                    } = e,
                    s = m.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(nc.Provider, { value: s, children: (0, r.jsx)(t$.Qt, { children: i }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: (e) => {
            let { onClose: t, step: n } = e,
                { guildId: i, listing: s } = nd();
            return (0, r.jsx)(tW.Y, { onClose: t, listing: s, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(nu, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var nh = n(73825),
    nf = n(960851),
    np = n(607399),
    nE = n(795791),
    nm = n(344159),
    ng = n(561794),
    nA = n(811656),
    nI = n(331322),
    nT = n(187322),
    nS = n(890856),
    ny = n(947641),
    nC = n(661531),
    nN = n(713517),
    nv = n(929283),
    nR = n(761365),
    nO = n(267861);
let nb = (e) => {
    let t,
        n,
        { skuId: i, user: s, claimed: a, onSelect: o, selectedSkuId: l } = e,
        [u, c] = m.useState(null),
        d = m.useCallback((e) => {
            c(e);
        }, []),
        _ = m.useMemo(() => ({ current: u }), [u]),
        { isHoveringOrFocusing: h } = (0, nN.A)(_),
        f = !a && h,
        { product: p } = (0, t_.q)(i);
    if (null == p) return null;
    let E = p.items[0];
    return null == E
        ? null
        : ((0, th.T)(E)
              ? ((n = tt.R.AVATAR_DECORATION),
                (t = (0, r.jsx)(nv.i, { item: E, user: s, isHighlighted: f, avatarSize: tr._3.SIZE_96 })))
              : (0, nr.F)(E) &&
                ((n = tt.R.NAMEPLATE),
                (t = (0, r.jsx)(nR.A, { nameplate: E, user: s, isHighlighted: f, size: "small" }))),
          (0, r.jsx)(nT.vN, {
              children: (0, r.jsxs)(nS.s, {
                  ref: d,
                  "aria-label": p.name ?? "",
                  onClick: () => {
                      null == i || null == o || a || o(i);
                  },
                  className: eC()(nO._x, { [nO.Vp]: !a, [nO.mr]: f, [nO.md]: l === i }),
                  children: [
                      (0, r.jsx)("div", {
                          className: eC()(nO.VH, {
                              [nO._Q]: n === tt.R.AVATAR_DECORATION,
                              [nO.M4]: n === tt.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: eC()(nO.i1, { [nO.Sf]: a }), children: t }),
                                            a &&
                                                (0, r.jsx)(ny.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: nC.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: nO.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, r.jsxs)("div", {
                          className: nO.tZ,
                          children: [
                              (0, r.jsx)(ta.D, { variant: "heading-md/extrabold", children: p.name }),
                              (0, r.jsx)(ts.E, {
                                  variant: "text-sm/normal",
                                  children: a ? Z.intl.string(Z.t["6cfuDj"]) : Z.intl.string(Z.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
var nD = n(696208),
    nL = n(683433);
function nw(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: s,
            showBackButton: a,
            planOptions: o,
            shouldRenderUpdatedPaymentModal: l = !1,
            isTrial: u,
            isNextDisabled: c = !1,
        } = e,
        { paymentSources: d } = (0, tQ.jm)(),
        _ = (0, tJ.A)(),
        { isGift: h, claimableRewards: f } = (0, eG.Pv)();
    i = i ?? d;
    let {
            variant: p,
            text: E,
            onClick: g,
            disabled: A,
        } = nM({
            onStepChange: t,
            selectedPlanId: (n = n ?? _?.id),
            isGift: h,
            claimableRewards: f,
            paymentSources: i,
            shouldRenderUpdatedPaymentModal: l,
            isTrial: u,
            isNextDisabled: c,
        }),
        I = m.useMemo(
            () =>
                null != n && o.includes(n)
                    ? [{ variant: p, text: E, onClick: g, disabled: A }]
                    : [{ variant: "primary", text: Z.intl.string(Z.t.XqMe3N), disabled: !0 }],
            [p, E, g, A, n, o],
        );
    return (0, r.jsx)(nD.H, { leading: a && null != s ? (0, r.jsx)(nL.A, { onClick: s }) : void 0, actions: I });
}
let nM = (e) => {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: i,
            claimableRewards: r,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: a,
            isTrial: o,
            isNextDisabled: u = !1,
        } = e,
        c = (0, g.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        d = (0, tJ.A)(),
        _ = (0, D.bB)(),
        { hasEntitlements: h } = (0, nm.X)(n, i),
        f = (null != c && null != c.paymentSourceId) || Object.keys(s).length > 0 || (h && !o);
    var p = a ? Z.intl.string(Z.t.PDTjLN) : Z.intl.string(Z.t.XqMe3N),
        E = l.pn.ADD_PAYMENT_STEPS;
    return (
        f && (E = l.pn.REVIEW),
        (0, t2.px)(d, i, r) && _ !== l.pn.SELECT_FREE_SKU && (E = l.pn.SELECT_FREE_SKU),
        { variant: "primary", text: p, onClick: () => t(E), disabled: u }
    );
};
var nP = n(328232);
function nx(e) {
    let { handleStepChange: t } = e,
        n = (0, v.t4)((e) => e.selectedSkuId),
        i = (0, tJ.A)(),
        s = (0, D.bB)(),
        { setSelectedGiftingPromotionReward: a, selectedGiftingPromotionReward: o, claimableRewards: u } = (0, eG.Pv)(),
        c = (0, g.bG)([tc.default], () => tc.default.getCurrentUser()),
        d = (0, g.yK)([t3.A], () => t3.A.getGiftPromotionRewardSkuIds()),
        _ = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(u, o),
        [h, f] = m.useState(_),
        [p, E] = m.useState(!1);
    m.useEffect(() => {
        p || null != o || null == _ || (a(_), f(_));
    }, [_, p, o, a]);
    let A = { selectedPlan: i, selectedSkuId: n, step: s };
    if (null == i) throw new tX.v({ message: "Expected plan to be selected", extraSentryInformation: A });
    if (null == n) throw new tX.v({ message: "Expected selectedSkuId", extraSentryInformation: A });
    if (null == s) throw new tX.v({ message: "Step should be set", extraSentryInformation: A });
    let I = m.useMemo(() => null != h && (u ?? []).includes(h), [h, u]),
        T = m.useMemo(() => 0 === d.length || null == h || !I, [d, h, I]);
    m.useEffect(() => {
        if (0 === d.length) {
            f(void 0), a(void 0);
            return;
        }
        (null != h && I && d.includes(h)) || null == h || (f(void 0), a(void 0));
    }, [d, I, h, a]);
    let S = (e) => {
            a(e), f(e), E(!0);
        },
        y = d.map((e) =>
            (0, r.jsx)(
                nb,
                { skuId: e, claimed: null != u && !u.includes(e), user: c, onSelect: S, selectedSkuId: h },
                e,
            ),
        ),
        C = (0, r.jsx)(e4.UX, {
            children: (0, r.jsx)(nw, {
                onStepChange: t,
                onBackClick: () => t(l.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [i.id],
                selectedPlanId: i.id,
                isNextDisabled: T,
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ex.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: Z.intl.string(Z.t.OEtqpm),
                subtitle: Z.intl.string(Z.t.h2nMp0),
            }),
            (0, r.jsx)(V.c, {
                children: (0, r.jsx)(nI.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, r.jsx)("div", { className: nP.Dq, children: y }),
                }),
            }),
            C,
        ],
    });
}
var nk = n(800471),
    nU = n(683071),
    nG = n(38405);
let nF = (e, t, n, i, r) => {
    let s = (0, m.useRef)(!1),
        a = { componentName: e, sentryErrorOptions: r, stateToCapture: i },
        o = (0, m.useRef)(a);
    (0, m.useEffect)(() => {
        o.current = a;
    }),
        (0, m.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: i, stateToCapture: r } = o.current;
            if (t && !s.current) {
                s.current = !0;
                let t = setTimeout(() => {
                    let t = Error(`${e} is taking too long to load.`);
                    nG.A.setExtra({ loadingState: r, loadingTimeSeconds: n }),
                        nG.A.captureException(t, { ...i, tags: { ...i?.tags } });
                }, 1e3 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
var nV = n(38785),
    nB = n(463376),
    nj = n(699595),
    nH = n(543767),
    nY = n(442123),
    nW = n(67948),
    nK = n(807098),
    n$ = n(298305),
    nz = n(387745);
function nq() {
    let e = (0, g.bG)([t3.A], () => {
            let e = t3.A.getMarketingComponentByType(tq.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, eG.Pv)(),
        n = (0, nK.T)(e?.asset),
        i = (0, nK.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, t2.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, t2.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let l = (0, t2.x)(o, a),
        u = e?.assetVariant === nW.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, r.jsxs)("div", {
              className: nz.qD,
              style: l,
              children: [
                  (0, r.jsx)("div", {
                      className: eC()([nz.my], { [nz.R_]: u }),
                      children: (0, r.jsx)(n$.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: u ? tr._3.SIZE_72 : tr._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, r.jsx)(ts.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: Z.intl.string(Z.t.Abiuci),
                  }),
              ],
          });
}
var nZ = n(410516),
    nX = n(361597),
    nQ = n(975571),
    nJ = n(69494),
    n0 = n(622631),
    n1 = n(597770),
    n2 = n(102741),
    n3 = n(296589);
function n6(e) {
    let { giftMessage: t = Z.intl.string(Z.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, eG.Pv)();
    return !n || (0, t5.Ik)(i)
        ? null
        : (0, r.jsx)(n2.A, {
              className: n3.z,
              iconSize: n2.A.Sizes.SMALL,
              icon: n1.o,
              color: null == t ? n2.A.Colors.PRIMARY : n2.A.Colors.SECONDARY,
              children: t,
          });
}
var n4 = n(71867),
    n5 = n(249872);
function n7(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: s, trialId: a, handleClose: o } = e,
        {
            selectedSkuId: u,
            priceOptions: c,
            activeSubscription: d,
            defaultPlanId: _,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        { isPremium: h, isEligibleForTrial: f, isEligibleForDiscount: p, discountOffer: E } = (0, nB.i)(),
        g = (0, nZ.YJ)(E),
        I = (0, tJ.A)(),
        T = (0, D.bB)(),
        { isGift: S, giftRecipient: y, giftMessage: C, claimableRewards: N } = (0, eG.Pv)(),
        R = (0, t2.Mq)(I),
        O = (0, e$.bG)([t3.A], () => {
            let e = t3.A.getMarketingComponentByType(tq.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        b = S && R && null != N && N.length > 0 && O,
        L = (f || p) ?? !1,
        { monthlyDefaultSelected: w } = nY.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${S ? "" : " - DO NOT USE"}`,
        }),
        M = (0, A.A)(w),
        P = m.useMemo(() => {
            let e = _;
            return S && M && null != u && (e = ea.En[u]), (0, td.Tm)({ skuId: u, isPremium: h, defaultPlanId: e });
        }, [u, h, _, S, M]),
        x = p && null != g && P.includes(g) ? g : P[0],
        k = (0, e$.bG)([er.A], () => er.A.get(x)),
        U = [{ planId: k?.id, quantity: 1 }],
        [G, F] = m.useState(L),
        [V, B] = (0, nH.YV)({
            items: U,
            renewal: !1,
            preventFetch: !L,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: c.paymentSourceId,
            currency: c.currency,
        });
    m.useEffect(() => {
        L && F(V?.subscriptionPeriodEnd == null);
    }, [V, L]),
        nF(
            "Payment Modal Plan Select Step",
            G,
            5,
            { proratedInvoicePreview: V, proratedInvoiceError: B, isEligibleForOffer: L },
            { tags: { app_context: "billing" } },
        );
    let j = B?.message ?? Z.intl.string(Z.t.R0RpRX),
        H = L && null == B,
        Y = L && null != B,
        W = H && null == d && V?.subscriptionPeriodEnd == null;
    (0, nj.W)({ priceOptions: c, trialId: a, discountInvoicePreview: V });
    let K = m.useMemo(
        () => ({
            planOptions: P,
            selectedPlanId: I?.id,
            planGroup: i,
            subscriptionPeriodEnd: V?.subscriptionPeriodEnd,
            useCompactGiftComponents: b,
            handleClose: o,
        }),
        [P, I?.id, i, V?.subscriptionPeriodEnd, b, o],
    );
    if (W) return (0, r.jsx)(nV.E, { className: n5.QW });
    eE()(null != T, "Step should be set"), eE()(P.length > 0, "Premium plan options should be set");
    let $ = S
        ? (0, r.jsx)(nX.$p, { ...K })
        : (0, r.jsx)(n0.X, { ...K, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(n6, { giftMessage: C }),
            !(S && (0, t5.Ik)(y)) && (0, r.jsx)(nJ.A, { isEligibleForTrial: f }),
            (0, r.jsxs)(e4.dZ, {
                children: [
                    (0, r.jsx)(n4.P, { className: n5.ZB, planSkuId: k?.skuId }),
                    (0, r.jsx)(e6.A, {}),
                    Y ? (0, r.jsx)(nU.w, { type: "critical", children: j }) : $,
                    H &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: eC()(n5.IM, n5.Go) }),
                                (0, r.jsx)(ts.E, {
                                    variant: "text-xs/normal",
                                    children: Z.intl.format(Z.t.BHtnqA, {
                                        link: nQ.A.getArticleURL(q.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(e4.UX, {
                children: [
                    b && (0, r.jsx)(nq, {}),
                    (0, r.jsx)(nw, {
                        onStepChange: t,
                        onBackClick: () => t(l.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: P,
                        shouldRenderUpdatedPaymentModal: H,
                        isTrial: f,
                    }),
                ],
            }),
        ],
    });
}
var n8 = n(234419),
    n9 = n(862990),
    ie = n(672525);
function it(e) {
    let { isGift: t, skuId: n } = e,
        i = (0, v.t4)((e) => e.referralTrialOfferId ?? void 0),
        r = (0, n8.V)(i);
    return !t && null != r && null != n && ea.TP[r.trial_id].skus.includes(n);
}
var ii = n(634378);
function ir(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: i,
            priceOptions: s,
            activeSubscription: a,
            defaultPlanId: o,
            startedPaymentFlowWithPaymentSources: u,
            referralTrialOfferId: c,
        } = (0, v.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { hasPaymentSources: d } = (0, tQ.jm)(),
        { isGift: _, claimableRewards: h } = (0, eG.Pv)(),
        f = _ && null != h && h.length > 0,
        p = (0, n8.V)(c);
    return (0, r.jsx)(is, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: i,
                    handleStepChange: r,
                    isGift: s,
                    userTrialOffer: a,
                    setSelectedPlanId: o,
                    startedPaymentFlowWithPaymentSources: u,
                    defaultPlanId: c,
                } = e;
                i(n);
                let d = l.pn.PLAN_SELECT,
                    _ = (0, td.aZ)(t);
                (_ !== ea.pe.TIER_1 && _ !== ea.pe.TIER_2) || n !== ea.pe.TIER_0 || s || (d = l.pn.WHAT_YOU_LOSE);
                let h = (function (e) {
                        let { userTrialOffer: t, isGift: n, skuId: i } = e;
                        return !n && null != t && null != i && ea.TP[t.trial_id].skus.includes(i);
                    })({ userTrialOffer: a, isGift: s, skuId: n }),
                    f = (0, nk.vT)({
                        isTrial: h,
                        isGift: s,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: u,
                    });
                d !== l.pn.WHAT_YOU_LOSE && f && ((d = l.pn.REVIEW), o((0, nk.xT)(n, t, c))),
                    r(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: _,
                userTrialOffer: p,
                startedPaymentFlowWithPaymentSources: u,
                setSelectedPlanId: i,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: i, setSelectedSkuId: r } = e;
                r((0, td.mH)(ea.pe.TIER_2)),
                    t(ea.gD.PREMIUM_GROUP_MONTH),
                    n(i ? l.pn.REVIEW : l.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: ea.pe.TIER_2 } });
            })({ setSelectedPlanId: i, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: n }),
        isGift: _,
        priceOptions: s,
        showPromotionalGiftBanner: f,
    });
}
function is(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: s, onSelectPremiumGroup: a } = e,
        o = (0, n9.FY)({ isGift: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ex.rQ, { titleTextVariant: "heading-lg/semibold", title: Z.intl.string(Z.t["r+SebU"]) }),
            o
                ? (0, r.jsx)(V.c, {
                      children: (0, r.jsx)("div", {
                          className: ii.eE,
                          children: (0, r.jsx)(ie.yS, {
                              onSelectSku: (e) => t((0, td.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  })
                : (0, r.jsx)(V.c, {
                      children: (0, r.jsx)("div", {
                          className: ii.a2,
                          children: (0, r.jsx)(ie.Ay, {
                              onSelectSku: (e) => t((0, td.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  }),
        ],
    });
}
var ia = n(825484),
    io = n(137728);
function il(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: s,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSources: o,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: u } = (0, eG.Pv)(),
        c = null != a ? (0, td.EL)(a) : null,
        d = null != c ? (0, td.RH)(c.planId) : null,
        _ = null != c ? (0, td.m6)(c.planId) : null,
        h = (0, nk.vT)({ isTrial: !1, isGift: u, selectedSkuId: i, startedPaymentFlowWithPaymentSources: o });
    return (
        eE()(null != _, "Expected premium type"),
        (0, r.jsx)(io.A, {
            premiumType: _,
            titleText: Z.intl.string(Z.t["7VcWW0"]),
            subtitleText: Z.intl.format(Z.t.Qk34Ik, { subscriptionName: d }),
            footer: (0, r.jsxs)(ia.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(t9.$, {
                        variant: "primary",
                        text: Z.intl.string(Z.t["3PatSz"]),
                        onClick: () => {
                            h ? (s((0, nk.xT)(i, a)), t(l.pn.REVIEW)) : t(l.pn.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(t9.$, { variant: "secondary", onClick: n, text: Z.intl.string(Z.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
let iu = [
        {
            key: l.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(ir, { ...e }),
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
            renderStep: (e) => (0, r.jsx)(il, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: l.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(n7, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, nk.lp)(e) ? null : Z.intl.string(Z.t["r+SebU"])),
                sectionHeaderText: () => Z.intl.string(Z.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: l.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(nx, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    ic = {
        CHECKOUT_FLOW: S.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: iu,
        CHECKOUT_STEPS: { [l.pn.REVIEW]: tz.E },
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
                    p = (0, nf.cg)() ? ea.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: E, giftRecipient: A } = d;
                if (null != a && !Object.values(ea.pe).includes(a))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, ng.tA)({ giftRecipient: A, isGift: E ?? !1 }),
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
                (0, nm.s)(C, () => _.onClose(), E ?? !1);
                let v = m.useMemo(() => [...ea.oz], []);
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
                          children: (0, r.jsx)(t$.Qt, { confirmationFooter: t, children: h }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { subscriptionTier: i },
                    } = e,
                    { onClose: s, renderPurchaseConfirmation: a, continueSessionToInitialStep: o } = t;
                m.useEffect(() => {
                    er.A.isLoadedForPremiumSKUs() || eV.h.wait(() => (0, nh.zS)());
                }, []);
                let { selectedSkuId: u, purchaseState: c } = (0, v.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    d = (0, D.bB)(),
                    {
                        isGift: _,
                        selectedGiftingPromotionReward: h,
                        openGiftingBadgePostPurchaseModal: f,
                    } = (0, eG.Pv)(),
                    p = m.useCallback(
                        (e, t) => {
                            s(e, t), e && _ && null == h && f();
                        },
                        [s, _, h, f],
                    ),
                    E = !_ && u === ea.pe.TIER_2 && !np.Ct && !np.KY && null == (0, nE.uM)(),
                    g = c === b.h.PURCHASING;
                return (0, r.jsx)(nA.A, {
                    isConfirmationStep: d === l.pn.CONFIRM && null == o && null == a,
                    isEligibleForWowMoment: E,
                    shouldPrefetchWowMoment: g,
                    children: n({
                        ...t,
                        onClose: p,
                        analyticsSubscriptionType: q.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: ea.LE,
                        subscriptionTier: i,
                    }),
                });
            },
            tenantAnalyticsLocation: T.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(nu, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var id = n(143582),
    i_ = n(897904),
    ih = n(967198);
let [ip, iE] = (0, tK.A)();
function im(e) {
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
    return (0, r.jsx)(ip.Provider, { value: o, children: i });
}
n(938796);
var ig = n(241524),
    iA = n(266060),
    iI = n(163437),
    iT = n(701273),
    iS = n(425013);
let iy = (e) => {
    let { onConfirm: t, onCancel: n, title: i, subtitle: s, confirmCta: a, showOpenDiscord: o = !0 } = e;
    return (0, r.jsxs)("div", {
        className: iS.RP,
        children: [
            (0, r.jsx)(ta.D, { className: iS.RS, variant: "heading-lg/extrabold", children: i }),
            null != s
                ? (0, r.jsx)(ts.E, { className: iS.sT, variant: "text-sm/normal", color: "text-default", children: s })
                : null,
            (0, r.jsxs)("div", {
                className: iS.UD,
                children: [
                    o &&
                        (0, r.jsx)(t9.$, {
                            variant: "primary",
                            text: Z.intl.string(Z.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, iT.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(t9.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, r.jsx)(t9.$, {
                            variant: "secondary",
                            text: Z.intl.string(Z.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
};
function iC(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: iS.RP,
        children: [
            (0, r.jsx)(ta.D, {
                className: iS.RS,
                variant: "heading-lg/extrabold",
                children: Z.intl.format(Z.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(ts.E, {
                className: iS.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: Z.intl.format(Z.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: iS.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: iS.__invalid_openDiscordButton,
                        children: (0, r.jsx)(t9.$, {
                            variant: "primary",
                            text: Z.intl.string(Z.t["8L5bZG"]),
                            onClick: () => (0, iT.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(t9.$, { variant: "secondary", text: Z.intl.string(Z.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
var iN = n(19311),
    iv = n(376747);
function iR(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, iA.K)(),
        { subscriptionMetadataRequest: s } = iE(),
        { application: a } = (0, eq.V)(),
        o = (0, eX.S3)(),
        u = (0, ig.A)(iv.Y),
        c = (0, g.bG)([w.A], () => w.A.getGuild(s?.guild_id)),
        d = m.useCallback(() => t(l.pn.REVIEW), [t]);
    if (null == o) return null;
    let _ = (0, iI.bg)(o.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e4.dZ, {
                children: u
                    ? (0, r.jsx)(iy, {
                          confirmCta: Z.intl.string(Z.t.PBHFSq),
                          onConfirm: d,
                          onCancel: n,
                          title: Z.intl.format(Z.t["6n6oXA"], { tier: o.name }),
                          subtitle: _
                              ? Z.intl.string(Z.t.lzAoKB)
                              : Z.intl.formatToPlainString(Z.t["GqaY/j"], { guildName: c?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(i_.Uf, {
                          icon: i?.thumbnail,
                          storeListingBenefits: i?.benefits,
                          application: a ?? void 0,
                          title: Z.intl.format(Z.t.haiCxc, { tier: o.name }),
                          subtitle: _ ? Z.intl.string(Z.t.RvtbP5) : Z.intl.string(Z.t.zY39Zu),
                          description: _
                              ? Z.intl.formatToPlainString(Z.t.QCe4rY, { applicationName: a?.name })
                              : Z.intl.string(Z.t.n1Pu8C),
                      }),
            }),
            !u &&
                (0, r.jsx)(e4.UX, {
                    children: (0, r.jsx)(iN.Ay, {
                        onBack: n,
                        backText: Z.intl.string(Z.t.TQBY1J),
                        onPrimary: d,
                        primaryCTA: iN.ti.CONTINUE,
                        primaryText: Z.intl.string(Z.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var iO = n(21161);
function ib(e) {
    let t,
        n,
        { handleClose: i, onSubscriptionConfirmation: s } = e,
        a = (0, iA.K)(),
        { application: o } = (0, eq.V)(),
        { readySlideId: u, updatedSubscription: c } = (0, v.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        d = (0, eX.S3)(),
        _ = (0, ig.A)(iv.Y),
        { createMultipleConfettiAt: h } = m.useContext(iO.x),
        f = d?.name ?? "",
        p = () => {
            i(), s?.();
        },
        E = u === l.pn.CONFIRM,
        g = (0, iI.bg)(d?.flags ?? 0),
        A =
            null != a && a.benefits.length > 0
                ? Z.intl.formatToPlainString(Z.t["+IQQVM"], { benefitCount: a.benefits.length })
                : null,
        { showBenefitsFirst: I } = iE();
    return (
        I
            ? (t = _
                  ? (0, r.jsx)(iC, { tierName: f, onConfirm: p, subscription: c })
                  : (0, r.jsx)(i_.XG, { tierName: f, onConfirm: p, subscription: c }))
            : _
              ? (t = (0, r.jsx)(iy, {
                    title: Z.intl.format(Z.t.ea6tZr, { tierName: f }),
                    subtitle:
                        null != a && a.benefits.length > 0
                            ? Z.intl.formatToPlainString(Z.t.HNepft, { benefits: A })
                            : null,
                    onConfirm: p,
                    confirmCta: Z.intl.string(Z.t.nlkywz),
                }))
              : ((t =
                    null != a && null != o
                        ? (0, r.jsx)(i_.Uf, {
                              icon: a.thumbnail,
                              storeListingBenefits: a.benefits,
                              application: o,
                              title: Z.intl.format(Z.t["Q+qktS"], { tier: f }),
                              subtitle: Z.intl.string(Z.t.ECKxXU),
                              description: g
                                  ? Z.intl.format(Z.t["MAtQk/"], { applicationName: o?.name })
                                  : Z.intl.format(Z.t.vHkMF4, { tier: f }),
                          })
                        : (0, r.jsx)(Y.A, {})),
                (n = (0, r.jsx)(iN.Ay, {
                    onPrimary: p,
                    primaryCTA: iN.ti.CONTINUE,
                    primaryText: Z.intl.string(Z.t["JtWl+a"]),
                }))),
        m.useEffect(() => {
            ez.Ay.useReducedMotion && E && h(window.innerWidth / 2, window.innerHeight / 2);
        }, [h, E]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(e4.dZ, { children: [(0, r.jsx)(e6.A, {}), t] }),
                null != n && (0, r.jsx)(e4.UX, { children: n }),
            ],
        })
    );
}
var iD = n(304072),
    iL = n(427858),
    iw = n(166926),
    iM = n(953761);
let iP = {
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
            { setSubscriptionMetadataRequest: _, guildId: h, showBenefitsFirst: f } = iE(),
            p = (0, B.Hp)(),
            E = K(),
            g = (0, D.l)(),
            { isGift: A } = (0, eG.Pv)(),
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
            let e = null != t ? er.A.get(t) : null;
            T ||
                p ||
                (n((t) => {
                    let n = null != e ? (0, td.y8)(e.id, !1, A, { paymentSourceId: o.paymentSourceId }) : void 0;
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
        return (0, r.jsx)(i_.fs, { step: t, onClose: i });
    },
    STEPS_BEFORE_CHECKOUT: [
        {
            key: l.pn.BENEFITS,
            renderStep: (e) => (0, r.jsx)(iR, { ...e }),
            options: { useBreadcrumbLabel: () => Z.intl.string(Z.t["5LD2+B"]) },
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
                { paymentSources: h } = (0, tQ.jm)(),
                { dropdownCurrencies: f } = (0, H.Jn)(),
                { subscriptionMetadataRequest: p, showBenefitsFirst: E } = iE(),
                g = E ? l.pn.BENEFITS : void 0,
                A = (0, tJ.A)(),
                I = (0, eX.S3)();
            if (null == A)
                throw new tX.v({
                    message: "Expected plan to be selected",
                    extraSentryInformation: { selectedPlan: A },
                });
            let T = m.useRef(null),
                [S, y] = (0, iD.A)(!1, 500),
                C = (0, em.mx)(),
                N = (0, iI.bg)(I?.flags ?? 0);
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
                          (0, r.jsx)(e4.dZ, {
                              children:
                                  null == _
                                      ? (0, r.jsx)(iM._, {
                                            selectedPlanId: A.id,
                                            planGroup: n,
                                            paymentSources: h,
                                            handlePaymentSourceAdd: O,
                                            metadata: N ? void 0 : p,
                                        })
                                      : (0, r.jsx)(iL.A, {
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
                          (0, r.jsx)(e4.UX, {
                              children: (0, r.jsx)(iw.U, {
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
                children: (0, r.jsx)(im, {
                    guildId: u,
                    showBenefitsFirst: c,
                    children: (0, r.jsx)(t$.Qt, { children: l }),
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
                                (W.hP(),
                                (0, id.f5)(r),
                                null != a && a(),
                                null != r && (i || ih.A.getGuildId() !== r) && (0, tx.pX)(q.BVt.CHANNEL(r)));
                    },
                    [s, a, i, r],
                );
            return n({ ...t, onClose: o, forceNewPaymentModal: !0 });
        },
        tenantAnalyticsLocation: T.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(ib, { ...e }) },
};
var ix = n(989553);
function ik(e) {
    let { handleClose: t } = e,
        n = (0, v.t4)((e) => e.selectedSkuId),
        { application: i } = (0, eq.V)(),
        s = (0, eX.gU)(),
        { isGift: a, giftRecipient: o } = (0, eG.Pv)();
    eE()(null != n, "Expected selectedSkuId"), eE()(null != i, "Expected application");
    let l = s[n];
    eE()(null != l, "Expected sku");
    let u = a
        ? Z.intl.formatToPlainString(Z.t["2VjPTw"], {
              itemName: l.name,
              giftRecipient: o?.username ?? "your recipient",
          })
        : Z.intl.formatToPlainString(Z.t.wK0IbP, { applicationName: i.name, itemName: l.name });
    return (0, r.jsxs)(e4.dZ, {
        children: [
            (0, r.jsx)(e6.A, {}),
            (0, r.jsxs)("div", {
                className: ix.EL,
                children: [
                    (0, r.jsx)(ta.D, { variant: "heading-xxl/bold", className: ix.RS, children: "Success!" }),
                    (0, r.jsx)(ts.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: ix.yF }),
                    (0, r.jsx)(t9.$, { onClick: t, text: Z.intl.string(Z.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var iU = n(67480),
    iG = n(328968),
    iF = n(371794),
    iV = n(565756);
l.pn.GIFT_CUSTOMIZATION;
let iB = {
    CHECKOUT_FLOW: eh.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [l.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, eG.Pv)(),
                s = (0, v.t4)((e) => e.selectedSkuId),
                a = (0, g.bG)([tc.default], () => tc.default.getCurrentUser()),
                o = (0, g.bG)([iU.A], () => (null != s ? iU.A.get(s) : null), [s]),
                l = tL(),
                u = (0, g.bG)([iG.A], () => (null != s ? iG.A.getForSKU(s) : null), [s]),
                c =
                    u?.headerBackground != null && o?.applicationId != null
                        ? (0, iF.YE)(o.applicationId, u.headerBackground, 256)
                        : void 0,
                d = async (e, t) => {},
                _ = null == i || i.id === a?.id || t.length > ea.Jo,
                h = m.useMemo(() => ({ disabled: _ }), [_]);
            return (0, r.jsx)(eh.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: eh.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: iV.P6,
                        children: [
                            o?.name != null &&
                                (0, r.jsx)(ta.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != c && (0, r.jsx)("img", { src: c, alt: o?.name ?? "", className: iV.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, r.jsxs)("div", {
                        className: iV.P6,
                        children: [
                            (0, r.jsx)(tN, { recipients: l, selectedSkuId: s, validateSelectedGift: d }),
                            (0, r.jsx)(tw.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: iV.iX,
                                innerClassName: iV.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: h,
            });
        },
        [l.pn.REVIEW]: ef.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(ik, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var ij = n(429913),
    iH = n(733391),
    iY = n(318254),
    iW = n(510022),
    iK = n(317560),
    i$ = n(366523),
    iz = n(910200),
    iq = n(208733);
function iZ(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, ek.Ay)(),
        { selectedSkuId: i, entitlementsGranted: s } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, eq.V)(),
        o = (0, eX.gU)(),
        { isGift: l, giftRecipient: u } = (0, eG.Pv)();
    eE()(null != i, "Expected selectedSkuId"), eE()(null != a, "Expected application");
    let c = o[i];
    eE()(null != c, "Expected sku");
    let d = s.find((e) => e.sku_id === i),
        _ = d?.metadata?.orbs_reward;
    if (
        (m.useEffect(() => {
            l || ((0, iK.j)(), t(), (0, iW.n)({ sku: c, application: a, analyticsLocations: n, orbsReward: _ }));
        }, [l, c, a, t, n, _]),
        !l)
    )
        return null;
    let h = null != _ && _ > 0;
    return (0, r.jsxs)(e4.dZ, {
        children: [
            (0, r.jsx)(e6.A, {}),
            (0, r.jsxs)("div", {
                className: iq.EL,
                children: [
                    (0, r.jsx)(i$.e, { sku: c, shape: "square", containerClassName: iq.LC }),
                    (0, r.jsx)(ta.D, {
                        variant: "heading-xl/semibold",
                        className: iq.RS,
                        children: Z.intl.string(Z.t["5glWta"]),
                    }),
                    (0, r.jsx)(ts.E, {
                        variant: "text-md/normal",
                        children: Z.intl.formatToPlainString(Z.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    h &&
                        (0, r.jsx)("div", {
                            className: iq.Is,
                            children: (0, r.jsx)(iz.A, {
                                Icon: iY.C,
                                text: Z.intl.format(Z.t["ZV+aS9"], { orbCount: _ }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: iq.UD,
                        children: (0, r.jsx)(t9.$, { onClick: t, text: Z.intl.string(Z.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var iX = n(889137),
    iQ = n(742158),
    iJ = n(313961),
    i0 = n(238017),
    i1 = n(650588),
    i2 = n(117218),
    i3 = n(763827),
    i6 = n(403362),
    i4 = n(871123),
    i5 = n(832163),
    i7 = n(44724),
    i8 = n(980094),
    i9 = n(806931),
    re = n(107610);
function rt(e) {
    let { handleClose: t, sku: n, application: i } = e,
        s = m.useCallback(() => {
            (0, i7.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        o = m.useCallback(() => {
            t();
            let e = i5.A.getStorefrontState(n.applicationId)?.activePage;
            (0, i4.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: i?.guildId,
                skuId: n.id,
            }) ||
                ((0, a.closeAllModals)(),
                (0, i7.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, r.jsx)("div", {
        className: re.$O,
        children: (0, r.jsx)(e8.Q, {
            text: Z.intl.string(Z.t.ImioFL),
            onMouseDown: s,
            onClick: o,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let rn = {
    CHECKOUT_FLOW: eh.CL.SLAYER_STOREFRONT_CHECKOUT,
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
                        } = (0, eG.Pv)(),
                        A = (0, v.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, eq.V)(),
                        T = (0, g.bG)([tc.default], () => tc.default.getCurrentUser()),
                        S =
                            ((t = T?.id),
                            (n = tL()),
                            (i = (function (e) {
                                let t = (0, g.bG)([i3.A], () => (i3.A.isConnected() ? i3.A.getChannelId() : null)),
                                    [n, i] = m.useState([]);
                                return (
                                    m.useEffect(() => {
                                        let n = null != t ? iJ.A.getParticipants(t) : [],
                                            r = [],
                                            s = new Set();
                                        for (let t of n)
                                            (!(0, i9.Xw)(t) && !(0, i9.Ay)(t)) ||
                                                t.user.id === e ||
                                                s.has(t.user.id) ||
                                                (s.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, i9.Ay)(e) && !(0, i9.Ay)(t)
                                                ? -1
                                                : (0, i9.Ay)(t) && !(0, i9.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            i(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (s = (0, g.yK)([tc.default], () => E?.map(tc.default.getUser).filter(i6.Vq) ?? [], [E])),
                            m.useMemo(
                                () =>
                                    tR().uniqWith(
                                        [...(null != c ? [c] : []), ...s, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, s, i, n],
                            )),
                        y = (0, g.bG)([iU.A], () => (null != A ? iU.A.get(A) : null), [A]),
                        { userPrice: C } = (0, i2.CD)({ sku: y, priceSetAssignmentPurchaseType: q.lid.GIFT }),
                        N = (0, i4.fq)(y),
                        R = (0, i4.xf)(y),
                        O = async (e, t) => {},
                        b = (e) => {
                            null != f && f(null == e ? void 0 : e);
                        },
                        D = () =>
                            (0, r.jsxs)("div", {
                                className: re.mT,
                                children: [
                                    null != N &&
                                        (0, r.jsx)(i$.A, {
                                            containerClassName: re.T3,
                                            cardImage: N,
                                            cardBackgroundImage: R,
                                            altText: y?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: re._T,
                                        children: [
                                            (0, r.jsx)(i1.A, { sound: _, onSelect: b }),
                                            (0, r.jsx)(i0.A, {
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
                                className: re.Tc,
                                children: [
                                    null != c && (p === ea.vQ.USER_PROFILE_WISHLIST || p === ea.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(tP.Z, { giftRecipient: c })
                                        : (0, r.jsx)(tN, { selectedSkuId: A, validateSelectedGift: O, recipients: S }),
                                    (0, r.jsx)(tw.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: l,
                                        currentText: l,
                                        disableThemedBackground: !0,
                                        className: re.iX,
                                        innerClassName: re.pt,
                                    }),
                                    null == y
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: re.AN,
                                              children: [
                                                  (0, r.jsx)(iQ.z, {
                                                      className: re.jr,
                                                      children: Z.intl.string(Z.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: re.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: re.Xb,
                                                              children:
                                                                  null != y &&
                                                                  null != N &&
                                                                  (0, r.jsx)(i$.A, {
                                                                      containerClassName: re.Iy,
                                                                      cardImage: N,
                                                                      cardBackgroundImage: R,
                                                                      altText: y.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: re.vz,
                                                              children: [
                                                                  null != I && (0, r.jsx)(i8.Q, { application: I }),
                                                                  (0, r.jsx)(ts.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: y.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(ts.E, {
                                                              variant: "text-md/semibold",
                                                              children: C,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != y &&
                                        (0, i4.Ri)(y) &&
                                        (0, r.jsx)(nU.w, { type: "info", children: Z.intl.string(Z.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, r.jsx)(iz.A, {
                                            Icon: iY.C,
                                            text: Z.intl.format(Z.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != y && (0, r.jsx)(rt, { handleClose: o, sku: y, application: I }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, r.jsxs)("div", { className: re.Du, children: [D(), L()] }),
                        getLeftColumnComponent: D,
                        getRightColumnComponent: L,
                        onStepChange: a,
                        onBackClick: o,
                        disabled: null == c || c.id === T?.id || l.length > ea.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = m.useMemo(() => ({ disabled: s }), [s]);
            return (0, r.jsx)(eh.Mw, {
                paymentModalStepProps: e,
                layout: eh.XZ.CUSTOM_STEP_BODY,
                renderStepBody: i,
                primaryCTAButtonProps: a,
            });
        },
        [l.pn.REVIEW]: ef.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(iZ, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: s, isGift: a, skuId: o, ...l } = e;
            return (
                ((e) => {
                    let { applicationId: t, skuId: n } = e,
                        i = (0, ij.h)(t);
                    m.useEffect(() => {
                        null == i ||
                            null == n ||
                            iG.A.isFetchingForSKU(n) ||
                            null != iU.A.get(n) ||
                            (0, iH.Pp)(i.id, n);
                    }, [i, n]);
                })({ applicationId: s, skuId: o }),
                (0, r.jsx)(y.M, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: s,
                    skuIDs: [o],
                    purchaseType: tG.VV.ONE_TIME,
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
            n = (0, iX.YW)(t)
                .with(l.pn.GIFT_CUSTOMIZATION, () => Z.intl.string(Z.t["JCFN/y"]))
                .with(l.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => Z.intl.string(Z.t.lDbi6H))
                .with(l.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(ex.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var ri = n(818824),
    rr = n(944355),
    rs = n(977445),
    ra = n(211287),
    ro = n(623373),
    rl = n(739508),
    ru = n(715054);
(0, s.A)();
var rc = n(136857),
    rd = n(158317),
    r_ = n(855104);
n(322076);
var rh =
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
    rf = n(289873),
    rp = n(241989),
    rE = n(576052),
    rm = n(120992),
    rg = n(194256),
    rA = n(319820),
    rI = n(327105),
    rT = n(200766);
let rS = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: i, isSocialLayerGameItem: s } = (0, rA.AO)({ sku: t }),
            a = (0, rg.oO)(i);
        s ? (a = Z.intl.string(rI.default.qwSlCO)) : (0, ro.Ab)(i) && (a = Z.intl.string(Z.t["0TmQRG"]));
        let o = (0, rg.dL)(t),
            l = (0, eH.EZ)(t.id) ? rE.m[t.id].render({ className: rT.$ }) : (0, r.jsx)(rp.WH, { sku: t, product: i });
        return (0, r.jsx)(rp.f7, {
            label: o,
            description: a,
            graphic: l,
            price: null != n ? `${n}` : "",
            PriceIcon: iY.C,
        });
    },
    ry = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, rm.c)({ applicationId: (0, c.P)(t), skuIDs: [t] });
        let i = (0, e$.bG)([iU.A], () => iU.A.get(t), [t]);
        return null == i
            ? (0, r.jsx)(rf.y, { type: rf.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(rS, { sku: i, orbPriceAmount: n });
    },
    rC = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(rr.vW, { label: Z.intl.string(Z.t.y0WGqP), value: null != t ? `${t}` : "", Icon: iY.C });
    },
    rN = () => Z.intl.string(Z.t.wmcDyu);
function rv() {
    let { immediateDelivery: e } = (0, ri.U)(),
        t = rN();
    return (0, r.jsx)(rr._P, {
        variant: { type: rr.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let rR = (0, m.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    rO = () => (0, m.useContext)(rR),
    rb = { payment_gateway: tG.kM.VIRTUAL_CURRENCY, currency: q.Yri.DISCORD_ORB },
    rD = {
        CHECKOUT_FLOW: eh.CL.ORB_CHECKOUT,
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
                    } = rO(),
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
                            { enabled: _ } = ra.A.useConfig({ location: "orb_checkout_review_step" }),
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
                                    { analyticsLocations: o } = (0, ek.Ay)(),
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
                                    p = (0, r_.gN)(),
                                    E = (0, m.useRef)(p),
                                    { emitOrbCheckoutPaymentFlowEvent: g } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: i,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: s } = (0, eq.V)(),
                                            { hasPaymentSources: a } = (0, tQ.jm)(),
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
                                                    payment_gateway: tG.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: q.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: q.frM[q.VVm.ONE_TIME],
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
                                                    e === q.HAw.PAYMENT_FLOW_STARTED
                                                        ? d.default.track(q.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...f,
                                                              has_saved_payment_source: a,
                                                              payment_gateway: tG.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === q.HAw.PAYMENT_FLOW_LOADED
                                                          ? d.default.track(q.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...f,
                                                                has_saved_payment_source: a,
                                                                initial_step: l.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === q.HAw.PAYMENT_FLOW_CANCELED
                                                            ? d.default.track(q.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...f,
                                                                  duration_ms: n,
                                                              })
                                                            : e === q.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? d.default.track(q.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...f,
                                                                    duration_ms: n,
                                                                })
                                                              : e === q.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? d.default.track(q.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...f,
                                                                      duration_ms: n,
                                                                  })
                                                                : d.default.track(q.HAw.PAYMENT_FLOW_FAILED, {
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
                                        (g(q.HAw.PAYMENT_FLOW_FAILED, i), (E.current = null));
                                }, [i, g]);
                                let A = (0, m.useCallback)(() => {
                                        (E.current = p),
                                            g(q.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                _(b.h.COMPLETED), a(l.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, _, p, g, a]),
                                    I = E.current ?? p,
                                    T = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, tA.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, m.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof rd.FY && null != t)
                                                    switch (t) {
                                                        case rh.INSUFFICIENT_ORB_BALANCE:
                                                            return Z.intl.string(Z.t.keFvXM);
                                                        case rh.SKU_ALREADY_OWNED:
                                                            return Z.intl.string(Z.t.m371Mx);
                                                        case rh.BUNDLE_PARTIALLY_OWNED:
                                                            return Z.intl.string(Z.t.v9oC0p);
                                                        default:
                                                            return Z.intl.string(Z.t.fqJZ11);
                                                    }
                                                return e instanceof rd.j2
                                                    ? Z.intl.string(Z.t["2BmwgV"])
                                                    : e.code === rc.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? Z.intl.string(Z.t.keFvXM)
                                                      : e.code === rc.tG.ALREADY_PURCHASED
                                                        ? Z.intl.string(Z.t.m371Mx)
                                                        : Z.intl.string(Z.t.fqJZ11);
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
                            N = (0, g.bG)([iU.A], () => iU.A.get(t), [t]),
                            R = (0, rs.uS)(N?.applicationId),
                            {
                                disabled: O,
                                tooltipText: D,
                                text: L,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: i = !1 } = e,
                                    { disabled: r, tooltipText: s } = (0, m.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: Z.intl.string(Z.t["c/rcUu"]) }
                                                : !i && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: Z.intl.string(Z.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, i],
                                    );
                                return { disabled: r, tooltipText: s, text: rN() };
                            })({ orbBalance: I, orbPriceAmount: _ ? f : A, isInTestMode: R }),
                            w = (0, m.useMemo)(
                                () => ({ onClick: T, loading: s, text: L, disabled: O, tooltipText: D }),
                                [T, s, L, O, D],
                            ),
                            M = y ? Z.intl.format(Z.t.fsOXXO, {}) : null,
                            P = R ? Z.intl.string(Z.t.OvMyMd) : null;
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
                            purchaseItemContent: (0, r.jsx)(ry, { skuId: t, orbPriceAmount: _ ? p : A }),
                            paymentMethodContent: (0, r.jsx)(rC, { orbBalance: I }),
                            legalContent: (0, r.jsx)(rv, {}),
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
                        (0, r.jsx)(e4.dZ, { children: (0, r.jsx)(nV.T, { ...f }) }),
                        (0, r.jsx)(e4.UX, { children: (0, r.jsx)(N.lo, { primaryButtonProps: _ }) }),
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
                            a = (0, g.bG)([tc.default], () => td.Ay.canUseShopDiscounts(tc.default.getCurrentUser())),
                            o = (0, g.bG)([iU.A], () => iU.A.get(t), [t]),
                            l = (0, i2.JL)({ sku: o }),
                            { product: u } = (0, t_.q)(t),
                            c = (0, m.useMemo)(() => {
                                if (null != l) return { orbPriceAmount: l.amount };
                                if (null != u) {
                                    let e = (0, ro.CW)({ product: u, hasShopDiscount: a });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [l, u, a]);
                        c?.orbPriceAmount == null &&
                            (0, rl.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: d,
                                isSubmitting: _,
                                error: h,
                            } = (0, ru.Q)({ skuId: t, loadId: n, order: s, onSignFailure: r }),
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
                return (0, r.jsx)(rR.Provider, { value: _, children: s });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: i } = rO(),
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
                    })({ orbProductContext: i, overrideAnalyticParams: rb });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: rb,
        },
    },
    rL = {
        [_.C.ORB_CHECKOUT]: {
            flowType: _.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: rD,
        },
        [_.C.COLLECTIBLES_CHECKOUT]: {
            flowType: _.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tY,
        },
        [_.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: rn,
        },
        [_.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.PREMIUM_CHECKOUT,
            purchaseType: q.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: ic,
        },
        [_.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: _.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [_.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: iB,
        },
        [_.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: q.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: iP,
        },
        [_.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eP,
            flowType: _.C.GUILD_PRODUCT_CHECKOUT,
        },
        [_.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: n_,
            purchaseType: q.VVm.SUBSCRIPTION,
        },
        [_.C.GUILD_BOOST_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.GUILD_BOOST_CHECKOUT,
            purchaseType: q.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: e_,
        },
    };
var rw = n(735305),
    rM = n(295405);
let rP = (e) => {
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
                        if (0 === Object.keys(rM.A.paymentSources).length) {
                            if (null != i) return void t.handleStepChange(i);
                            r === tG.VV.SUBSCRIPTION
                                ? t.handleStepChange(n, { trackedFromStep: l.pn.ADD_PAYMENT_STEPS })
                                : t.handleClose();
                        } else t.handleStepChange(n, { trackedFromStep: l.pn.ADD_PAYMENT_STEPS });
                    })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: i, purchaseType: s }),
                [t, n, i, s],
            );
        return (0, r.jsx)(rw.x, { ...i, onReturn: a });
    },
    rx = (e) => {
        let { initialPlanId: t } = e,
            n = (0, v.t4)((e) => e.selectedSkuId),
            i = (0, tJ.A)(),
            { isGift: s, claimableRewards: a } = (0, eG.Pv)(),
            o = it({ isGift: s, skuId: n }),
            u = (0, nk.lp)(o),
            c = (0, t2.px)(i, s, a),
            d = m.useMemo(() => {
                let e = null == t ? l.pn.PLAN_SELECT : l.pn.REVIEW;
                return u && (e = l.pn.REVIEW), c && (e = l.pn.SELECT_FREE_SKU), e;
            }, [u, c, t]);
        return (0, r.jsx)(rP, { paymentModalStepProps: e, returnStep: l.pn.REVIEW, returnStepIfNoPaymentSources: d });
    },
    rk = (e) => {
        let {
            checkoutFlow: t,
            returnStep: n = l.pn.REVIEW,
            returnStepIfNoPaymentSources: i,
            paymentModalStepProps: s,
        } = e;
        return t === _.C.PREMIUM_CHECKOUT
            ? (0, r.jsx)(rx, { ...s })
            : (0, r.jsx)(rP, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: i });
    };
var rU = n(339048),
    rG = n(469778),
    rF = n(315949),
    rV = n(599062);
function rB() {
    let { refreshCategories: e } = (0, rF.A)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ex.rQ, { title: Z.intl.string(Z.t["p8+qtU"]) }),
            (0, r.jsx)(V.c, { children: (0, r.jsx)(rV.h, { onRetry: e, errorOrigin: rV.A.GIFT_MODAL }) }),
        ],
    });
}
function rj(e) {
    let { handleStepChange: t } = e,
        n = (0, v.t4)((e) => e.selectedSkuId),
        { paymentSources: i, hasFetchedPaymentSources: s } = (0, tQ.jm)(),
        { application: a } = (0, eq.V)(),
        o = (0, B.Hp)(),
        u = (0, eX.gU)(),
        c = (0, eX.Hu)(),
        { isGift: d } = (0, eG.Pv)(),
        [_, h] = m.useState(!0),
        [f, p] = (0, e$.yK)([eQ.A], () => [eQ.A.isFetchingCategories, eQ.A.error]);
    return (m.useEffect(() => {
        let e = null != a;
        c && s && e && h(f);
    }, [c, s, a, f]),
    m.useEffect(() => {
        if (_ || o || null == n) return;
        let e = u[n];
        d &&
        (e?.productLine === q.EZt.COLLECTIBLES ||
            e?.productLine === q.EZt.APPLICATION ||
            e?.productLine === q.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(l.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(i).length
              ? t(l.pn.ADD_PAYMENT_STEPS)
              : t(l.pn.REVIEW);
    }, [_, o, t, i, d, u, n]),
    _)
        ? (0, r.jsx)(Y.A, {})
        : o
          ? (0, r.jsx)(j.oO, {})
          : null != p
            ? (0, r.jsx)(rB, {})
            : null;
}
function rH(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: i, continueSessionToInitialStep: s } = e,
        { hasPaymentSources: a } = (0, tQ.jm)(),
        {
            selectedSkuId: o,
            setSelectedPlanId: u,
            activeSubscription: c,
            defaultPlanId: d,
            startedPaymentFlowWithPaymentSources: _,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        h = (0, B.Hp)(),
        f = K(),
        { hasFetchedRelatedSubscriptionPlans: p, subscriptionPriceOptionsLoading: E } = (0, H.Jn)(),
        { isGift: g } = (0, eG.Pv)(),
        A = it({ isGift: g, skuId: o }),
        I = !f || !p || E,
        T = (0, e$.bG)([rG.A], () => rG.A.applicationIdsFetched.has(ea.tv));
    return (nF(
        "Payment Modal",
        I,
        5,
        { hasFetchedSubscriptions: f, hasFetchedSubscriptionPlans: p, subscriptionPriceOptionsLoading: E },
        { tags: { app_context: "billing" } },
    ),
    m.useEffect(() => {
        if ((T || (0, rU.LM)(ea.tv), I || h)) return;
        let e = (0, nk.vT)({ isTrial: A, isGift: g, selectedSkuId: o, startedPaymentFlowWithPaymentSources: _ });
        null != s
            ? i(l.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: s })
            : null != n
              ? n !== ea.gD.PREMIUM_GROUP_MONTH || a
                  ? i(l.pn.REVIEW)
                  : i(l.pn.ADD_PAYMENT_STEPS)
              : e
                ? (u((0, nk.xT)(o, c, d)), i(l.pn.REVIEW))
                : null != t
                  ? i(l.pn.PLAN_SELECT)
                  : i(l.pn.SKU_SELECT);
    }, [s, c, h, T, n, I, i, t, o, u, A, d, g, _, a]),
    I)
        ? (0, r.jsx)(Y.A, {})
        : h
          ? (0, r.jsx)(j.oO, {})
          : null;
}
var rY = n(343834),
    rW = n(830382),
    rK = n(349288),
    r$ = n(94204);
function rz(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsxs)("div", {
            className: r$.a,
            children: [
                (0, r.jsx)(ta.D, { variant: "heading-xl/bold", children: Z.intl.string(Z.t.Q03WWV) }),
                (0, r.jsxs)("p", {
                    children: [
                        (0, r.jsx)(ts.E, { variant: "text-md/normal", children: Z.intl.string(Z.t.BxPxhI) }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)(ts.E, { variant: "text-md/normal", children: Z.intl.string(Z.t.Y3fdOp) }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsxs)(ts.E, {
                            variant: "text-md/normal",
                            children: [
                                Z.intl.string(Z.t.Paa4v4),
                                "\xa0",
                                n
                                    ? Z.intl.string(Z.t.StGVvC)
                                    : (0, r.jsx)(rK.Anchor, { onClick: i, children: Z.intl.string(Z.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function rq() {
    let e = m.useMemo(() => [{ variant: "primary", text: Z.intl.string(Z.t.g8vPzy), disabled: !0 }], []);
    return (0, r.jsx)(nD.H, { actions: e });
}
var rZ = n(599961);
function rX() {
    let [e, t] = m.useState(!1),
        n = async () => {
            t(!0), await (0, rW.lo)();
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nJ.A, {}),
            (0, r.jsx)(e4.dZ, { children: (0, r.jsx)(rz, { className: rZ.r, isEmailResent: e, resendEmail: n }) }),
            (0, r.jsx)(e4.UX, { children: (0, r.jsx)(rq, {}) }),
        ],
    });
}
let rQ = { key: null, renderStep: (e) => (0, r.jsx)(rj, { ...e }), options: { modalSizeGetter: () => "md" } },
    rJ = { key: null, renderStep: (e) => (0, r.jsx)(rH, { ...e }) },
    r0 = [
        { key: l.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(rX, {}) },
        { key: l.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(rY.A, {}), options: { renderHeader: !0 } },
    ];
var r1 = n(246681);
let r2 = (e) => {
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
    r3 = {
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
class r6 {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = rL[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = r3[e]),
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
              ? rQ
              : "subscription" === t
                ? rJ
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(r2, { paymentModalStepProps: e, defaultStep: l.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== _.C.ORB_CHECKOUT)
            return {
                key: l.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(rk, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => Z.intl.string(Z.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(l.pn.REVIEW);
        return {
            key: l.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => Z.intl.string(Z.t.QBnNHq) },
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
            c = this.createDefinedStepConfigsArray([s, ...(null != a ? [a] : []), ...i, o, ...(r ? [] : r0), u]);
        return null != n && c.push({ key: l.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === _.C.ORB_CHECKOUT && null != e
            ? (0, c.P)(e)
            : this.checkoutFlow === _.C.COLLECTIBLES_CHECKOUT
              ? q.FYj
              : this.checkoutFlow === _.C.PREMIUM_CHECKOUT
                ? ea.tv
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
        d.default.track(q.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: s,
            payment_type: q.frM[this.checkoutFlowConfiguration.purchaseType],
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
            ...(this.checkoutFlow === _.C.PREMIUM_CHECKOUT ? { subscription_type: q.rzx.PREMIUM } : {}),
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
            return (0, r.jsx)(r1.UnifiedCheckoutInstance, { ...w, paymentModalOnClose: e, renderModalProps: t });
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
