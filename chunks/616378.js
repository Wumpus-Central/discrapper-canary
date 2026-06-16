n.d(t, { o: () => lg }), n(321073);
var l,
    r = n(627968),
    i = n(835245),
    s = n(192308),
    a = n(231723),
    o = n(166532),
    u = n(64700),
    c = n(295405),
    d = n(314671),
    C = n(735305),
    p = n(343834),
    m = n(926795),
    _ = n(284009),
    E = n.n(_),
    T = n(821609),
    S = n(534514),
    I = n(834730),
    h = n(31823),
    A = n(427675),
    f = n(211159),
    O = n(937008),
    g = n(921925),
    x = n(482132),
    P = n(375708),
    N = n(989553);
function R(e) {
    let { handleClose: t } = e,
        n = (0, f.t4)((e) => e.selectedSkuId),
        { application: l } = (0, h.V)(),
        i = (0, A.gU)(),
        { isGift: s, giftRecipient: a } = (0, O.Pv)();
    E()(null != n, "Expected selectedSkuId"), E()(null != l, "Expected application");
    let o = i[n];
    E()(null != o, "Expected sku");
    let u = s
        ? P.intl.formatToPlainString(P.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: a?.username ?? "your recipient",
          })
        : P.intl.formatToPlainString(P.t.wK0IbP, { applicationName: l.name, itemName: o.name });
    return (0, r.jsxs)(x.dZ, {
        children: [
            (0, r.jsx)(g.A, {}),
            (0, r.jsxs)("div", {
                className: N.EL,
                children: [
                    (0, r.jsx)(S.D, { variant: "heading-xxl/bold", className: N.RS, children: "Success!" }),
                    (0, r.jsx)(I.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: N.yF }),
                    (0, r.jsx)(T.$, { onClick: t, text: P.intl.string(P.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var v = n(702841),
    y = n(86379),
    j = n(545075),
    U = n(426398),
    L = n(590180),
    M = n(20742),
    k = n(430993),
    b = n(579151),
    F = n(599062);
function D() {
    let { refreshCategories: e } = (0, b.A)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(M.rQ, { title: P.intl.string(P.t["p8+qtU"]) }),
            (0, r.jsx)(k.c, { children: (0, r.jsx)(F.h, { onRetry: e, errorOrigin: F.A.GIFT_MODAL }) }),
        ],
    });
}
var w = n(534479),
    G = n(652215);
function H(e) {
    let { handleStepChange: t } = e,
        n = (0, f.t4)((e) => e.selectedSkuId),
        { paymentSources: l, hasFetchedPaymentSources: i } = (0, U.jm)(),
        { application: s } = (0, h.V)(),
        a = (0, y.Hp)(),
        c = (0, A.gU)(),
        d = (0, A.Hu)(),
        { isGift: C } = (0, O.Pv)(),
        [p, m] = u.useState(!0),
        [_, E] = (0, v.yK)([L.A], () => [L.A.isFetchingCategories, L.A.error]);
    return (u.useEffect(() => {
        let e = null != s;
        d && i && e && m(_);
    }, [d, i, s, _]),
    u.useEffect(() => {
        if (p || a || null == n) return;
        let e = c[n];
        C &&
        (e?.productLine === G.EZt.COLLECTIBLES ||
            e?.productLine === G.EZt.APPLICATION ||
            e?.productLine === G.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(o.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(l).length
              ? t(o.pn.ADD_PAYMENT_STEPS)
              : t(o.pn.REVIEW);
    }, [p, a, t, l, C, c, n]),
    p)
        ? (0, r.jsx)(w.A, {})
        : a
          ? (0, r.jsx)(j.oO, {})
          : null != E
            ? (0, r.jsx)(D, {})
            : null;
}
let K = { key: null, renderStep: (e) => (0, r.jsx)(H, { ...e }), options: { modalSizeGetter: () => "md" } },
    B = { key: null, renderStep: (e) => (0, r.jsx)(d.I, { ...e }) };
o.pn.ADD_PAYMENT_STEPS;
let W = { key: o.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(m.A, {}) },
    V = { key: o.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(p.A, {}), options: { renderHeader: !0 } },
    Y = { key: o.pn.CONFIRM, renderStep: (e) => (0, r.jsx)(R, { ...e }) },
    z = [W, V];
var Z = n(624210),
    X = n(26279);
async function Q(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === X.Re.DRAFT)
        try {
            await (0, Z.Nl)(n.id);
        } catch (e) {}
}
var q = n(925847),
    J = n(310829),
    $ = n(174459),
    ee = n(75304),
    et = n(145659),
    en = n(793574),
    el = n(529427),
    er = n(630303),
    ei = n(964486),
    es = n(666646),
    ea = n(17928),
    eo = n(871109);
let eu = u.createContext(void 0);
function ec() {
    let e = u.useContext(eu);
    return E()(null != e, "GuildProductPurchaseContext not found"), e;
}
function ed(e) {
    let { children: t, skuId: n, ...l } = e,
        i = (0, ea.bG)([eo.A], () => eo.A.getGuildProduct(n));
    return (
        E()(null != i, "guildProductListing cannot be null"),
        (0, r.jsx)(eu.Provider, { value: { guildProductListing: i, ...l }, children: t })
    );
}
function eC(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: i } = ec(),
        a = (0, es.sw)();
    return (
        (0, ei.Ay)(() => {
            var e;
            E()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: i, guildProductListingId: l.id, invoicePreview: a }),
                (0, s.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("34796"),
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
var ep = n(503698),
    em = n.n(ep),
    e_ = n(939249),
    eE = n(789645),
    eT = n(935462),
    eS = n(303612),
    eI = n(916261),
    eh = n(575650);
function eA(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(e_.D, {
        className: em()(eI.cG, t),
        onClick: n,
        children: (0, r.jsx)(eE.P, { size: "xs", color: "currentColor", className: eI.yP }),
    });
}
function ef(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, r.jsxs)(eT.rQ, {
        className: em()(eI.wx, eh.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(eS.A, { className: eI.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(eA, { className: eI.b, onClose: n }),
        ],
    });
}
var eO = n(196617);
let eg = {
    CHECKOUT_FLOW: el.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [o.pn.REVIEW]: er.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, r.jsx)(ed, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: en.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = ec();
        return n === o.pn.CONFIRM
            ? null
            : (0, r.jsx)(ef, { guildProductListing: l, className: eO.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eC, { ...e }) },
};
var ex = n(688810),
    eP = n(197510),
    eN = n(848149),
    eR = n(106778),
    ev = n(228366),
    ey = n(213530),
    ej = n(966971),
    eU = n(758836),
    eL = n(483764);
let eM = { sliderBodyClassName: eL.Bz },
    ek = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: i } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eR.Fk, { ref: n, className: eL.Lb, environment: t.current }),
                (0, r.jsx)(ey.K, { options: l, className: em()(eL.Oh, { [eL.R]: !i }) }),
            ],
        });
    };
var eb = n(775602),
    eF = n(211083),
    eD = n(953150),
    ew = n(524246),
    eG = n(14368),
    eH = n(61750),
    eK = n(972607),
    eB = n(788868);
function eW(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: l,
            purchaseError: i,
            purchasePreviewError: s,
            appliedUserDiscounts: a,
        } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: o } = (0, eF.o)(),
        { application: c } = (0, h.V)(),
        d = (0, A.gU)(),
        C = (0, v.bG)([L.A], () => L.A.getProduct(l)),
        p = u.useRef(!1);
    E()(null != l, "Expected selectedSkuId"), E()(null != c, "Expected application");
    let m = d[l];
    E()(null != m, "Expected sku");
    let _ = null != o || null != i || null != s,
        T =
            a.length > 0
                ? P.intl.formatToPlainString(P.t.VuV3Td, { discountOfferAmount: a[0].discount.amount })
                : void 0;
    return (u.useEffect(() => {
        null == C ||
            _ ||
            p.current ||
            ((p.current = !0),
            (0, eH.A)({
                product: C,
                overrideTitle: T,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: eU.gs.FIAT,
            }));
    }, [C, n, t, _, T]),
    _)
        ? (0, r.jsx)(x.dZ, { children: (0, r.jsx)(g.A, {}) })
        : null;
}
function eV(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: i,
            giftRecipient: s,
            giftMessageError: a,
            isSendingMessage: o,
            giftingOrigin: c,
        } = (0, O.Pv)(),
        d = (0, v.bG)([eb.Ay], () => eb.Ay.useReducedMotion),
        C = u.useRef(null),
        p = (0, f.t4)((e) => e.selectedSkuId),
        m = (0, v.bG)([L.A], () => L.A.getProduct(p)),
        { confettiColors: _ } = (0, eD.A)(m?.styles);
    return (
        u.useEffect(() => {
            t &&
                null != s &&
                null != p &&
                (c === eB.vQ.USER_PROFILE_WISHLIST || c === eB.vQ.DM_CHANNEL_WISHLIST) &&
                ev.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: p, recipientId: s.id });
        }, [t, s, p, c]),
        t
            ? (0, r.jsxs)("div", {
                  ref: C,
                  children: [
                      (0, r.jsx)(eK.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: l,
                          hasSentMessage: i,
                          giftRecipient: s,
                          giftMessageError: a,
                          isSendingMessage: o,
                      }),
                      !e.hideConfetti &&
                          !d &&
                          (0, r.jsx)(ew.A, {
                              confettiTarget: C.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, eG.rA)(m?.categorySkuId),
                              colors: _?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(eW, { ...e })
    );
}
var eY = n(123292),
    ez = n(564064),
    eZ = n(993408),
    eX = n(575593),
    eQ = n(452027),
    eq = n(922016),
    eJ = n(778712),
    e$ = n(986687),
    e0 = n(999291),
    e1 = n(903209),
    e6 = n(287809),
    e7 = n(428262),
    e2 = n(674658),
    e3 = n(898461),
    e8 = n(203632),
    e4 = n(892118),
    e9 = n(536572),
    e5 = n(456839),
    te = n(219103),
    tt = n(525723),
    tn = n(780651);
function tl(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: i,
            previewHeaderClassName: s,
            hideProfilePreview: a,
        } = e,
        { giftRecipient: o, giftRecipientError: c } = (0, O.Pv)(),
        d = (0, ea.bG)([e6.default], () => e6.default.getCurrentUser()),
        C = e7.Ay.canUseShopDiscounts(d),
        p = (0, e0.Ay)(o?.id),
        m = u.useRef(null),
        [_, E] = u.useState(!1),
        { product: T } = (0, e2.q)(t, !0),
        h = u.useMemo(() => (0, eZ.fT)(T, C), [T, C]),
        A = (0, tt.V_)(T);
    if (null == T || 0 === T.items.length) return null;
    let [f] = T.items,
        g = (0, e9.VG)(T),
        x = null != o && o.id !== d?.id && T.type !== eX.R.BUNDLE && f.type !== eX.R.NAMEPLATE && !a;
    return (0, r.jsxs)("div", {
        className: i,
        children: [
            (0, r.jsx)("div", {
                className: em()(tn.QU, s),
                children: (0, r.jsx)(eQ.D, {
                    label: P.intl.string(P.t.PpoJzt),
                    children:
                        x &&
                        (0, r.jsx)(
                            eq.Y,
                            {
                                targetElementRef: m,
                                align: "center",
                                shouldShow: _,
                                onRequestClose: () => E(!1),
                                preload: () => (0, e1.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(e$.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, eJ.FT)(eJ._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, e3.T)(f) ? f : null,
                                        pendingProfileEffect: (0, e8.C3)(f) ? f : null,
                                        pendingProfileFrame: (0, e4.s)(f) ? f : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, r.jsx)(e_.D, {
                                        ...l,
                                        className: tn.Nx,
                                        innerRef: m,
                                        onClick: (e) => {
                                            E((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            _ ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(I.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: P.intl.string(P.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            p?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: em()(tn.i1, null != c ? tn.cN : tn.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: tn.Ug,
                        children: [
                            (0, r.jsx)(e5.O, { product: T }),
                            (0, r.jsxs)("div", {
                                className: tn.JZ,
                                children: [
                                    (0, r.jsx)(I.E, { variant: "text-md/semibold", children: g }),
                                    (0, r.jsx)(S.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            T?.type === eX.R.BUNDLE
                                                ? null
                                                : f.type === eX.R.AVATAR_DECORATION
                                                  ? P.intl.string(P.t["7v0T9P"])
                                                  : f.type === eX.R.NAMEPLATE
                                                    ? P.intl.string(P.t.x5CoXR)
                                                    : f.type === eX.R.PROFILE_EFFECT
                                                      ? P.intl.string(P.t.wR5wOo)
                                                      : f.type === eX.R.PROFILE_FRAME
                                                        ? P.intl.string(P.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(te.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: h,
                                discountOfferAmount: A,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != c &&
                        (0, r.jsx)("div", {
                            className: tn.Wh,
                            children: (0, r.jsx)(I.E, {
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
var tr = n(783878),
    ti = n(966327),
    ts = n(427262);
let ta = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: i } = e,
        { giftRecipient: s, setGiftRecipient: a } = (0, O.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: l,
              children: (0, r.jsx)(tr.Z, {
                  selectionMode: "single",
                  label: P.intl.string(P.t.xFn72s),
                  placeholder: P.intl.string(P.t.R0vK0N),
                  value: s?.id,
                  onSelectionChange: (e) => {
                      let l = i.find((t) => t.id === e);
                      null != l && (n(l, t), a(l));
                  },
                  options: i.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${ts.Ay.getUserTag(e)}`,
                      leading: (0, r.jsx)(ti.A, { user: e, size: eJ._3.SIZE_20 }),
                  })),
              }),
          });
};
var to = n(735438),
    tu = n.n(to),
    tc = n(427358),
    td = n(570287),
    tC = n(994500);
function tp() {
    let e = (0, ea.yK)([tC.A], () => tC.A.getFriendIDs()),
        t = (0, ea.yK)([tc.A], () =>
            tc.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: r } = e,
                        i = (0, td.q)(r);
                    return !t && (n >= 0.1 || l >= 0.1) && i;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = u.useMemo(() => tu().uniq([...e, ...t]), [e, t]);
    return (0, ea.yK)(
        [e6.default],
        () =>
            n.reduce((e, t) => {
                let n = e6.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var tm = n(871181),
    t_ = n(318007),
    tE = n(285719),
    tT = n(976860),
    tS = n(353791);
function tI(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, ex.Ay)(en.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(eY.Q, {
        text: P.intl.string(P.t.J82mpK),
        onClick: function () {
            t(),
                (0, s.closeAllModals)(),
                null == n
                    ? (0, ez.Cz)({ analyticsLocations: l, analyticsSource: en.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, tT.pX)(`${G.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var th = n(818348);
let tA = (0, u.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        onStepChange: void 0,
    }),
    tf = () => (0, u.useContext)(tA),
    tO = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = tf(),
            { analyticsLocations: l } = (0, ex.Ay)();
        return (0, r.jsx)(eV, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
    },
    tg = {
        [o.pn.GIFT_CUSTOMIZATION]: () => P.intl.string(P.t["JCFN/y"]),
        [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => P.intl.string(P.t.lDbi6H),
        [o.pn.CONFIRM]: () => "",
    },
    tx = (e) => {
        let { step: t } = e,
            n = tg[t];
        return null == n ? null : (0, r.jsx)(M.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    tP = {
        CHECKOUT_FLOW: el.CL.COLLECTIBLES_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.GIFT_CUSTOMIZATION]: (e) => {
                let { handleStepChange: t, handleClose: n } = e,
                    {
                        renderLeftColumn: l,
                        renderRightColumn: i,
                        ctaDisabled: s,
                        loading: a,
                    } = ((e) => {
                        let { handleStepChange: t, handleClose: n } = e,
                            {
                                customGiftMessage: l = "",
                                setCustomGiftMessage: i,
                                giftRecipientError: s,
                                setGiftRecipientError: a,
                                validatingGiftRecipient: o,
                                giftRecipient: u,
                                giftingOrigin: c,
                                setValidatingGiftRecipient: d,
                            } = (0, O.Pv)(),
                            { selectedSkuId: C, checkoutInvoicePreview: p } = (0, f.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            m = (0, A.gU)(),
                            _ = (0, ea.bG)([e6.default], () => e6.default.getCurrentUser()),
                            E = tp(),
                            T = async (e, t) => {
                                d(!0),
                                    null != s && a(),
                                    (await (0, ez.JJ)(e.id, t)) || a(P.intl.string(P.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, ei.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== eB.vQ.DM_CHANNEL_WISHLIST &&
                                    $.default.track(G.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                T(u, C));
                        });
                        let S = () =>
                            (0, r.jsx)(tm.A, {
                                onTextChange: (e) => i?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: tS.iX,
                                innerClassName: tS.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, r.jsx)("div", { className: tS.qL, children: (0, r.jsx)(t_.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, eZ.pA)({ invoicePreview: p, selectedSkuId: C, skusById: m });
                                return c === eB.vQ.USER_PROFILE_WISHLIST || c === eB.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(tE.Z, { giftRecipient: u }),
                                              S(),
                                              null != e &&
                                                  null != C &&
                                                  (0, r.jsx)(tl, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: tS.uW,
                                                      previewHeaderClassName: tS.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: tS.fi,
                                                  children: (0, r.jsx)(tI, { handleClose: n, selectedSkuId: C }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(ta, {
                                                  selectedSkuId: C,
                                                  recipients: E,
                                                  className: tS.uh,
                                                  validateSelectedGift: T,
                                              }),
                                              S(),
                                              null != e &&
                                                  null != C &&
                                                  (0, r.jsx)(tl, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: tS.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == u || u.id === _?.id || l.length > eB.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    o = u.useMemo(() => ({ loading: a, disabled: s }), [a, s]);
                return (0, r.jsx)(el.Mw, {
                    paymentModalStepProps: e,
                    layout: el.XZ.TWO_COLUMN,
                    renderLeftColumn: l,
                    renderRightColumn: i,
                    primaryCTAButtonProps: o,
                });
            },
            [o.pn.REVIEW]: er.p,
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let { skuId: t, additionalOptions: n, children: l, ...i } = e,
                    {
                        environment: s,
                        confettiCanvas: a,
                        setConfettiCanvas: o,
                        customConfettiVisible: c,
                        setCustomConfettiVisible: d,
                        customConfettiDisplayOptions: C,
                        hideConfirmStepConfetti: p,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = u.useRef(new eR.OH()),
                            [l, r] = u.useState(null),
                            [i, s] = u.useState(!1),
                            a = u.useMemo(() => (0, ej.AB)({ purchaseType: eU.gs.FIAT, skuId: t }), [t]);
                        return {
                            environment: n,
                            confettiCanvas: l,
                            setConfettiCanvas: r,
                            customConfettiVisible: i,
                            setCustomConfettiVisible: s,
                            customConfettiDisplayOptions: a,
                            hideConfirmStepConfetti: null != a,
                        };
                    })({ skuId: t }),
                    m = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    _ = null != n ? n.onStepChange : void 0,
                    E = (0, u.useMemo)(
                        () => ({
                            skuIDs: m,
                            setCustomConfettiVisible: d,
                            hideConfirmStepConfetti: p,
                            confettiCanvas: a,
                            onStepChange: _,
                        }),
                        [m, d, p, a, _],
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ek, {
                            environment: s,
                            setConfettiCanvas: o,
                            customConfettiDisplayOptions: C,
                            customConfettiVisible: c,
                        }),
                        (0, r.jsx)(eP.M, {
                            ...i,
                            skuIDs: m,
                            stepConfigs: i.stepConfigs,
                            activeSubscription: null,
                            purchaseType: th.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, r.jsx)(tA.Provider, { value: E, children: l }),
                        }),
                    ],
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { skuIDs: l, setCustomConfettiVisible: r, onStepChange: i } = tf(),
                    { isGift: s } = (0, O.Pv)(),
                    a = (0, eN.J)(),
                    {
                        paymentModalSkuId: o,
                        paymentModalOnClose: c,
                        paymentModalOnComplete: d,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: r } = e,
                            i = t[0] ?? null,
                            s = u.useCallback(() => {
                                r(!0), l?.();
                            }, [l, r]);
                        return {
                            paymentModalSkuId: i,
                            paymentModalOnClose: u.useCallback(
                                (e) => {
                                    r(!1), n(e), ev.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, r],
                            ),
                            paymentModalOnComplete: s,
                        };
                    })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: r }),
                    C = u.useCallback(
                        (e) => {
                            c(e), e && s && a();
                        },
                        [c, s, a],
                    );
                return n({ ...t, skuId: o, onClose: C, onComplete: d, applicationId: G.FYj, onStepChange: i });
            },
            tenantAnalyticsLocation: en.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, O.Pv)();
            return n ? (0, r.jsx)(tx, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(tO, { ...e }), options: eM },
    };
var tN = n(354033),
    tR = n(786300),
    tv = n(491057),
    ty = n(496142),
    tj = n(394584);
let [tU, tL] = (0, tR.A)(),
    tM = {
        CHECKOUT_FLOW: el.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: ty.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: l,
                    } = e,
                    i = u.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(tU.Provider, { value: i, children: (0, r.jsx)(tv.Qt, { children: l }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: (e) => {
            let { onClose: t, step: n } = e,
                { guildId: l, listing: i } = tL();
            return (0, r.jsx)(tN.Y, { onClose: t, listing: i, step: n, guildId: l });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(tj._, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var tk = n(73825),
    tb = n(120700),
    tF = n(960851),
    tD = n(117945),
    tw = n(344159),
    tG = n(561794),
    tH = n(97352),
    tK = n(166403),
    tB = n(566980),
    tW = n(615310),
    tV = n(811656),
    tY = n(363373),
    tz = n(800471),
    tZ = n(941796),
    tX = n(957489),
    tQ = n(822426);
let tq = [
        {
            key: o.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(tX.F, { ...e }),
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
            renderStep: (e) => (0, r.jsx)(tQ.K, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: o.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(tZ.Z, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, tz.lp)(e) ? null : P.intl.string(P.t["r+SebU"])),
                sectionHeaderText: () => P.intl.string(P.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: o.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(tY.j, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    tJ = {
        CHECKOUT_FLOW: tb.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: tq,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: ty.E },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            confirmationFooter: t,
                            defaultPlanId: n,
                            referralCode: l,
                            referralTrialOfferId: i,
                            subscriptionTier: s,
                            subscription: a,
                        },
                        stepConfigs: c,
                        loadId: d,
                        giftContextProps: C = { isGift: !1, giftRecipient: null },
                        renderModalProps: p,
                        children: m,
                    } = e,
                    _ = (0, ea.bG)([tK.A], () => tK.A.getPremiumTypeSubscription()),
                    E = (0, tF.cg)() ? eB.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: T, giftRecipient: S } = C;
                if (null != s && !Object.values(eB.pe).includes(s))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, tG.tA)({ giftRecipient: S, isGift: T ?? !1 }),
                    h = u.useMemo(
                        () =>
                            I
                                ? c.map((e) =>
                                      e.key === o.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : c,
                        [c, I],
                    ),
                    A = null != a ? a : _,
                    f = !T && null != A && A.isPurchasedExternally && null != A.paymentGateway;
                (0, tw.s)(A, () => p.onClose(), T ?? !1);
                let O = u.useMemo(() => [...eB.oz], []);
                return f
                    ? null
                    : (0, r.jsx)(eP.M, {
                          loadId: d,
                          activeSubscription: A,
                          stepConfigs: h,
                          skuIDs: O,
                          isGift: T,
                          defaultPlanId: E ?? n,
                          referralCode: l,
                          referralTrialOfferId: i,
                          unifiedCheckoutFlow: tb.C.PREMIUM_CHECKOUT,
                          children: (0, r.jsx)(tv.Qt, { confirmationFooter: t, children: m }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { onClose: l, renderPurchaseConfirmation: i, continueSessionToInitialStep: s } = t;
                u.useEffect(() => {
                    tH.A.isLoadedForPremiumSKUs() || ev.h.wait(() => (0, tk.zS)());
                }, []);
                let { selectedSkuId: a, purchaseState: c } = (0, f.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    d = (0, tW.bB)(),
                    {
                        isGift: C,
                        selectedGiftingPromotionReward: p,
                        openGiftingBadgePostPurchaseModal: m,
                    } = (0, O.Pv)(),
                    _ = u.useCallback(
                        (e, t) => {
                            l(e, t), e && C && null == p && m();
                        },
                        [l, C, p, m],
                    ),
                    E = (0, tD.T)(C, a),
                    T = c === tB.h.PURCHASING;
                return (0, r.jsx)(tV.A, {
                    isConfirmationStep: d === o.pn.CONFIRM && null == s && null == i,
                    isEligibleForWowMoment: E,
                    shouldPrefetchWowMoment: T,
                    children: n({
                        ...t,
                        onClose: _,
                        analyticsSubscriptionType: G.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: eB.LE,
                    }),
                });
            },
            tenantAnalyticsLocation: en.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(tj._, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var t$ = n(753390),
    t0 = n(143582),
    t1 = n(897904),
    t6 = n(967198);
let [t7, t2] = (0, tR.A)();
function t3(e) {
    let { guildId: t, showBenefitsFirst: n, children: l } = e,
        [i, s] = u.useState(null),
        a = u.useMemo(
            () => ({
                guildId: t,
                showBenefitsFirst: n,
                subscriptionMetadataRequest: i,
                setSubscriptionMetadataRequest: s,
            }),
            [t, n, i],
        );
    return (0, r.jsx)(t7.Provider, { value: a, children: l });
}
n(938796);
var t8 = n(241524),
    t4 = n(266060),
    t9 = n(163437),
    t5 = n(701273),
    ne = n(425013);
let nt = (e) => {
    let { onConfirm: t, onCancel: n, title: l, subtitle: i, confirmCta: s, showOpenDiscord: a = !0 } = e;
    return (0, r.jsxs)("div", {
        className: ne.RP,
        children: [
            (0, r.jsx)(S.D, { className: ne.RS, variant: "heading-lg/extrabold", children: l }),
            null != i
                ? (0, r.jsx)(I.E, { className: ne.sT, variant: "text-sm/normal", color: "text-default", children: i })
                : null,
            (0, r.jsxs)("div", {
                className: ne.UD,
                children: [
                    a &&
                        (0, r.jsx)(T.$, {
                            variant: "primary",
                            text: P.intl.string(P.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, t5.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(T.$, { variant: "secondary", text: s, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, r.jsx)(T.$, {
                            variant: "secondary",
                            text: P.intl.string(P.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
};
function nn(e) {
    let { onConfirm: t, tierName: n, subscription: l } = e;
    return (0, r.jsxs)("div", {
        className: ne.RP,
        children: [
            (0, r.jsx)(S.D, {
                className: ne.RS,
                variant: "heading-lg/extrabold",
                children: P.intl.format(P.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(I.E, {
                className: ne.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: P.intl.format(P.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: ne.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ne.__invalid_openDiscordButton,
                        children: (0, r.jsx)(T.$, {
                            variant: "primary",
                            text: P.intl.string(P.t["8L5bZG"]),
                            onClick: () => (0, t5.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(T.$, { variant: "secondary", text: P.intl.string(P.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
var nl = n(71393),
    nr = n(19311),
    ni = n(376747);
function ns(e) {
    let { handleStepChange: t, handleClose: n } = e,
        l = (0, t4.K)(),
        { subscriptionMetadataRequest: i } = t2(),
        { application: s } = (0, h.V)(),
        a = (0, A.S3)(),
        c = (0, t8.A)(ni.Y),
        d = (0, ea.bG)([nl.A], () => nl.A.getGuild(i?.guild_id)),
        C = u.useCallback(() => t(o.pn.REVIEW), [t]);
    if (null == a) return null;
    let p = (0, t9.bg)(a.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(x.dZ, {
                children: c
                    ? (0, r.jsx)(nt, {
                          confirmCta: P.intl.string(P.t.PBHFSq),
                          onConfirm: C,
                          onCancel: n,
                          title: P.intl.format(P.t["6n6oXA"], { tier: a.name }),
                          subtitle: p
                              ? P.intl.string(P.t.lzAoKB)
                              : P.intl.formatToPlainString(P.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(t1.Uf, {
                          icon: l?.thumbnail,
                          storeListingBenefits: l?.benefits,
                          application: s ?? void 0,
                          title: P.intl.format(P.t.haiCxc, { tier: a.name }),
                          subtitle: p ? P.intl.string(P.t.RvtbP5) : P.intl.string(P.t.zY39Zu),
                          description: p
                              ? P.intl.formatToPlainString(P.t.QCe4rY, { applicationName: s?.name })
                              : P.intl.string(P.t.n1Pu8C),
                      }),
            }),
            !c &&
                (0, r.jsx)(x.UX, {
                    children: (0, r.jsx)(nr.Ay, {
                        onBack: n,
                        backText: P.intl.string(P.t.TQBY1J),
                        onPrimary: C,
                        primaryCTA: nr.ti.CONTINUE,
                        primaryText: P.intl.string(P.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var na = n(21161);
function no(e) {
    let t,
        n,
        { handleClose: l, onSubscriptionConfirmation: i } = e,
        s = (0, t4.K)(),
        { application: a } = (0, h.V)(),
        { readySlideId: c, updatedSubscription: d } = (0, f.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        C = (0, A.S3)(),
        p = (0, t8.A)(ni.Y),
        { createMultipleConfettiAt: m } = u.useContext(na.x),
        _ = C?.name ?? "",
        E = () => {
            l(), i?.();
        },
        T = c === o.pn.CONFIRM,
        S = (0, t9.bg)(C?.flags ?? 0),
        I =
            null != s && s.benefits.length > 0
                ? P.intl.formatToPlainString(P.t["+IQQVM"], { benefitCount: s.benefits.length })
                : null,
        { showBenefitsFirst: O } = t2();
    return (
        O
            ? (t = p
                  ? (0, r.jsx)(nn, { tierName: _, onConfirm: E, subscription: d })
                  : (0, r.jsx)(t1.XG, { tierName: _, onConfirm: E, subscription: d }))
            : p
              ? (t = (0, r.jsx)(nt, {
                    title: P.intl.format(P.t.ea6tZr, { tierName: _ }),
                    subtitle:
                        null != s && s.benefits.length > 0
                            ? P.intl.formatToPlainString(P.t.HNepft, { benefits: I })
                            : null,
                    onConfirm: E,
                    confirmCta: P.intl.string(P.t.nlkywz),
                }))
              : ((t =
                    null != s && null != a
                        ? (0, r.jsx)(t1.Uf, {
                              icon: s.thumbnail,
                              storeListingBenefits: s.benefits,
                              application: a,
                              title: P.intl.format(P.t["Q+qktS"], { tier: _ }),
                              subtitle: P.intl.string(P.t.ECKxXU),
                              description: S
                                  ? P.intl.format(P.t["MAtQk/"], { applicationName: a?.name })
                                  : P.intl.format(P.t.vHkMF4, { tier: _ }),
                          })
                        : (0, r.jsx)(w.A, {})),
                (n = (0, r.jsx)(nr.Ay, {
                    onPrimary: E,
                    primaryCTA: nr.ti.CONTINUE,
                    primaryText: P.intl.string(P.t["JtWl+a"]),
                }))),
        u.useEffect(() => {
            eb.Ay.useReducedMotion && T && m(window.innerWidth / 2, window.innerHeight / 2);
        }, [m, T]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(x.dZ, { children: [(0, r.jsx)(g.A, {}), t] }),
                null != n && (0, r.jsx)(x.UX, { children: n }),
            ],
        })
    );
}
var nu = n(655857),
    nc = n(121005),
    nd = n(304072),
    nC = n(71804),
    np = n(558620),
    nm = n(427858),
    n_ = n(166926),
    nE = n(953761);
let nT = {
    CHECKOUT_FLOW: tb.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    CustomCheckoutPredicateStep: function (e) {
        let { initialPlanId: t, setAnalyticsData: n } = e,
            {
                selectedSkuId: l,
                setSelectedSkuId: i,
                setSelectedPlanId: s,
                priceOptions: a,
            } = (0, f.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                priceOptions: e.checkoutPriceOptions,
            })),
            {
                hasFetchedRelatedSubscriptionPlans: c,
                subscriptionPriceOptionsLoading: d,
                displayCurrency: C,
            } = (0, nu.Jn)(),
            { setSubscriptionMetadataRequest: p, guildId: m, showBenefitsFirst: _ } = t2(),
            E = (0, y.Hp)(),
            T = (0, nc.A)(),
            S = (0, tW.l)(),
            { isGift: I } = (0, O.Pv)(),
            h = _ ? o.pn.BENEFITS : o.pn.REVIEW,
            [A, g] = u.useState(!T || !c || d);
        return (u.useEffect(() => {
            g(!T || !c || d);
        }, [d, c, T]),
        u.useEffect(() => {
            null != m && p({ guild_id: m });
        }, [m, p]),
        u.useEffect(() => {
            s(t);
            let e = null != t ? tH.A.get(t) : null;
            A ||
                E ||
                (n((t) => {
                    let n = null != e ? (0, e7.y8)(e.id, !1, I, { paymentSourceId: a.paymentSourceId }) : void 0;
                    return {
                        ...t,
                        subscription_plan_id: e?.id,
                        price: n?.amount,
                        regular_price: e?.price,
                        currency: C,
                    };
                }),
                null != e && (i(e?.skuId), S(h)));
        }, [E, t, I, A, a, C, l, n, s, i, S, h]),
        A)
            ? (0, r.jsx)(w.A, {})
            : E
              ? (0, r.jsx)(j.oO, {})
              : null;
    },
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            l = u.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(t1.fs, { step: t, onClose: l });
    },
    STEPS_BEFORE_CHECKOUT: [
        {
            key: o.pn.BENEFITS,
            renderStep: (e) => (0, r.jsx)(ns, { ...e }),
            options: { useBreadcrumbLabel: () => P.intl.string(P.t["5LD2+B"]) },
        },
    ],
    CHECKOUT_STEPS: {
        [o.pn.REVIEW]: function (e) {
            let { handleStepChange: t, planGroup: n, openInvoiceId: l, analyticsData: i, analyticsLocation: s } = e,
                {
                    purchaseState: a,
                    contextMetadata: c,
                    purchaseError: d,
                    setCurrency: C,
                    activeSubscription: p,
                } = (0, f.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    contextMetadata: e.contextMetadata,
                    purchaseError: e.purchaseError,
                    setCurrency: e.setCheckoutCurrency,
                    activeSubscription: e.activeSubscription,
                })),
                { paymentSources: m } = (0, U.jm)(),
                { dropdownCurrencies: _ } = (0, nu.Jn)(),
                { subscriptionMetadataRequest: E, showBenefitsFirst: T } = t2(),
                S = T ? o.pn.BENEFITS : void 0,
                I = (0, np.A)(),
                h = (0, A.S3)();
            if (null == I)
                throw new nC.v({
                    message: "Expected plan to be selected",
                    extraSentryInformation: { selectedPlan: I },
                });
            let O = u.useRef(null),
                [g, P] = (0, nd.A)(!1, 500),
                N = (0, es.mx)(),
                R = (0, t9.bg)(h?.flags ?? 0);
            u.useEffect(() => {
                null != d && null != O.current && O.current.scrollIntoView({ behavior: "smooth" });
            }, [d]);
            let v = u.useRef(null),
                y = u.useCallback(() => {
                    t(o.pn.ADD_PAYMENT_STEPS);
                }, [t]);
            return a === tB.h.PURCHASING
                ? (0, r.jsx)(w.A, {})
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(x.dZ, {
                              children:
                                  null == p
                                      ? (0, r.jsx)(nE._, {
                                            selectedPlanId: I.id,
                                            planGroup: n,
                                            paymentSources: m,
                                            handlePaymentSourceAdd: y,
                                            metadata: R ? void 0 : E,
                                        })
                                      : (0, r.jsx)(nm.A, {
                                            premiumSubscription: p,
                                            paymentSources: m,
                                            handlePaymentSourceAdd: y,
                                            planId: I.id,
                                            planGroup: n,
                                            currencies: _,
                                            onCurrencyChange: (e) => C(e),
                                            hasOpenInvoice: null != l,
                                            purchaseState: a,
                                        }),
                          }),
                          (0, r.jsx)(x.UX, {
                              children: (0, r.jsx)(n_.U, {
                                  premiumSubscription: p ?? null,
                                  onBack: () => null != S && t(S),
                                  handleStepChange: t,
                                  postPurchaseStep: o.pn.CONFIRM,
                                  legalTermsNodeRef: v,
                                  flashLegalTerms: () => P(!0),
                                  analyticsLocation: s,
                                  baseAnalyticsData: i,
                                  flowStartTime: c.startTime,
                                  planGroup: n,
                                  openInvoiceId: l,
                                  metadata: R ? void 0 : E,
                                  backButtonEligible: !!T || void 0,
                                  invoiceError: N,
                                  disablePurchase: E?.guild_id == null && !R,
                                  onPaymentSourceAdd: y,
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
                    activeSubscription: l,
                    stepConfigs: i,
                    skuId: s,
                    tenantParams: a,
                    children: o,
                } = e,
                { guildId: u, showBenefitsFirst: c } = a;
            return (0, r.jsx)(eP.M, {
                loadId: t,
                applicationId: n,
                activeSubscription: l,
                stepConfigs: i,
                skuIDs: [s],
                unifiedCheckoutFlow: tb.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                children: (0, r.jsx)(t3, {
                    guildId: u,
                    showBenefitsFirst: c,
                    children: (0, r.jsx)(tv.Qt, { children: o }),
                }),
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let {
                    originalPaymentModalProps: t,
                    renderPaymentModal: n,
                    tenantParams: { forcesTransitionToGuild: l, guildId: r },
                } = e,
                i = t.onClose,
                s = t.onComplete,
                a = u.useCallback(
                    (e) => {
                        i(e),
                            e &&
                                null != r &&
                                (t$.hP(),
                                (0, t0.f5)(r),
                                null != s && s(),
                                null != r && (l || t6.A.getGuildId() !== r) && (0, tT.pX)(G.BVt.CHANNEL(r)));
                    },
                    [i, s, l, r],
                );
            return n({ ...t, onClose: a, forceNewPaymentModal: !0 });
        },
        tenantAnalyticsLocation: en.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(no, { ...e }) },
};
var nS = n(67480),
    nI = n(328968),
    nh = n(371794),
    nA = n(565756);
o.pn.GIFT_CUSTOMIZATION;
let nf = {
    CHECKOUT_FLOW: el.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, O.Pv)(),
                i = (0, f.t4)((e) => e.selectedSkuId),
                s = (0, ea.bG)([e6.default], () => e6.default.getCurrentUser()),
                a = (0, ea.bG)([nS.A], () => (null != i ? nS.A.get(i) : null), [i]),
                o = tp(),
                c = (0, ea.bG)([nI.A], () => (null != i ? nI.A.getForSKU(i) : null), [i]),
                d =
                    c?.headerBackground != null && a?.applicationId != null
                        ? (0, nh.YE)(a.applicationId, c.headerBackground, 256)
                        : void 0,
                C = async (e, t) => {},
                p = null == l || l.id === s?.id || t.length > eB.Jo,
                m = u.useMemo(() => ({ disabled: p }), [p]);
            return (0, r.jsx)(el.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: el.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: nA.P6,
                        children: [
                            a?.name != null &&
                                (0, r.jsx)(S.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: a.name,
                                }),
                            null != d && (0, r.jsx)("img", { src: d, alt: a?.name ?? "", className: nA.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, r.jsxs)("div", {
                        className: nA.P6,
                        children: [
                            (0, r.jsx)(ta, { recipients: o, selectedSkuId: i, validateSelectedGift: C }),
                            (0, r.jsx)(tm.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: nA.iX,
                                innerClassName: nA.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: m,
            });
        },
        [o.pn.REVIEW]: er.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: Y,
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: en.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var nO = n(429913),
    ng = n(733391),
    nx = n(318254),
    nP = n(510022),
    nN = n(317560),
    nR = n(366523),
    nv = n(910200),
    ny = n(208733);
function nj(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, ex.Ay)(),
        { selectedSkuId: l, entitlementsGranted: i } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, h.V)(),
        a = (0, A.gU)(),
        { isGift: o, giftRecipient: c } = (0, O.Pv)();
    E()(null != l, "Expected selectedSkuId"), E()(null != s, "Expected application");
    let d = a[l];
    E()(null != d, "Expected sku");
    let C = i.find((e) => e.sku_id === l),
        p = C?.metadata?.orbs_reward;
    if (
        (u.useEffect(() => {
            o || ((0, nN.j)(), t(), (0, nP.n)({ sku: d, application: s, analyticsLocations: n, orbsReward: p }));
        }, [o, d, s, t, n, p]),
        !o)
    )
        return null;
    let m = null != p && p > 0;
    return (0, r.jsxs)(x.dZ, {
        children: [
            (0, r.jsx)(g.A, {}),
            (0, r.jsxs)("div", {
                className: ny.EL,
                children: [
                    (0, r.jsx)(nR.e, { sku: d, shape: "square", containerClassName: ny.LC }),
                    (0, r.jsx)(S.D, {
                        variant: "heading-xl/semibold",
                        className: ny.RS,
                        children: P.intl.string(P.t["5glWta"]),
                    }),
                    (0, r.jsx)(I.E, {
                        variant: "text-md/normal",
                        children: P.intl.formatToPlainString(P.t["2VjPTw"], {
                            itemName: d.name,
                            giftRecipient: c?.username ?? "your recipient",
                        }),
                    }),
                    m &&
                        (0, r.jsx)("div", {
                            className: ny.Is,
                            children: (0, r.jsx)(nv.A, {
                                Icon: nx.C,
                                text: P.intl.format(P.t["ZV+aS9"], { orbCount: p }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: ny.UD,
                        children: (0, r.jsx)(T.$, { onClick: t, text: P.intl.string(P.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var nU = n(889137),
    nL = n(742158),
    nM = n(683071),
    nk = n(313961),
    nb = n(238017),
    nF = n(650588),
    nD = n(117218),
    nw = n(763827),
    nG = n(403362),
    nH = n(871123),
    nK = n(832163),
    nB = n(44724),
    nW = n(980094),
    nV = n(806931),
    nY = n(107610);
function nz(e) {
    let { handleClose: t, sku: n, application: l } = e,
        i = u.useCallback(() => {
            (0, nB.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        a = u.useCallback(() => {
            t();
            let e = nK.A.getStorefrontState(n.applicationId)?.activePage;
            (0, nH.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: l?.guildId,
                skuId: n.id,
            }) ||
                ((0, s.closeAllModals)(),
                (0, nB.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, l]);
    return (0, r.jsx)("div", {
        className: nY.$O,
        children: (0, r.jsx)(eY.Q, {
            text: P.intl.string(P.t.ImioFL),
            onMouseDown: i,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let nZ = {
    CHECKOUT_FLOW: el.CL.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: l, disabled: i } = ((e) => {
                    var t;
                    let n,
                        l,
                        i,
                        { handleStepChange: s, handleClose: a } = e,
                        {
                            customGiftMessage: o = "",
                            setCustomGiftMessage: c,
                            giftRecipient: d,
                            emojiConfetti: C,
                            soundEffect: p,
                            setEmojiConfetti: m,
                            setSoundEffect: _,
                            giftingOrigin: E,
                            additionalUserIds: T,
                        } = (0, O.Pv)(),
                        S = (0, f.t4)((e) => e.selectedSkuId),
                        { application: A } = (0, h.V)(),
                        g = (0, ea.bG)([e6.default], () => e6.default.getCurrentUser()),
                        x =
                            ((t = g?.id),
                            (n = tp()),
                            (l = (function (e) {
                                let t = (0, ea.bG)([nw.A], () => (nw.A.isConnected() ? nw.A.getChannelId() : null)),
                                    [n, l] = u.useState([]);
                                return (
                                    u.useEffect(() => {
                                        let n = null != t ? nk.A.getParticipants(t) : [],
                                            r = [],
                                            i = new Set();
                                        for (let t of n)
                                            (!(0, nV.Xw)(t) && !(0, nV.Ay)(t)) ||
                                                t.user.id === e ||
                                                i.has(t.user.id) ||
                                                (i.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, nV.Ay)(e) && !(0, nV.Ay)(t)
                                                ? -1
                                                : (0, nV.Ay)(t) && !(0, nV.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (i = (0, ea.yK)([e6.default], () => T?.map(e6.default.getUser).filter(nG.Vq) ?? [], [T])),
                            u.useMemo(
                                () =>
                                    tu().uniqWith(
                                        [...(null != d ? [d] : []), ...i, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, i, l, n],
                            )),
                        N = (0, ea.bG)([nS.A], () => (null != S ? nS.A.get(S) : null), [S]),
                        { userPrice: R } = (0, nD.CD)({ sku: N, priceSetAssignmentPurchaseType: G.lid.GIFT }),
                        v = (0, nH.fq)(N),
                        y = (0, nH.xf)(N),
                        j = async (e, t) => {},
                        U = (e) => {
                            null != _ && _(null == e ? void 0 : e);
                        },
                        L = () =>
                            (0, r.jsxs)("div", {
                                className: nY.mT,
                                children: [
                                    null != v &&
                                        (0, r.jsx)(nR.A, {
                                            containerClassName: nY.T3,
                                            cardImage: v,
                                            cardBackgroundImage: y,
                                            altText: N?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: nY._T,
                                        children: [
                                            (0, r.jsx)(nF.A, { sound: p, onSelect: U }),
                                            (0, r.jsx)(nb.A, {
                                                setEmojiConfetti: m,
                                                emojiConfetti: null == C ? void 0 : C,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        M = () => {
                            let e = N?.orbsReward;
                            return (0, r.jsxs)("div", {
                                className: nY.Tc,
                                children: [
                                    null != d && (E === eB.vQ.USER_PROFILE_WISHLIST || E === eB.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(tE.Z, { giftRecipient: d })
                                        : (0, r.jsx)(ta, { selectedSkuId: S, validateSelectedGift: j, recipients: x }),
                                    (0, r.jsx)(tm.A, {
                                        onTextChange: (e) => c?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: nY.iX,
                                        innerClassName: nY.pt,
                                    }),
                                    null == N
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: nY.AN,
                                              children: [
                                                  (0, r.jsx)(nL.z, {
                                                      className: nY.jr,
                                                      children: P.intl.string(P.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: nY.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: nY.Xb,
                                                              children:
                                                                  null != N &&
                                                                  null != v &&
                                                                  (0, r.jsx)(nR.A, {
                                                                      containerClassName: nY.Iy,
                                                                      cardImage: v,
                                                                      cardBackgroundImage: y,
                                                                      altText: N.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: nY.vz,
                                                              children: [
                                                                  null != A && (0, r.jsx)(nW.Q, { application: A }),
                                                                  (0, r.jsx)(I.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: N.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(I.E, { variant: "text-md/semibold", children: R }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != N &&
                                        (0, nH.Ri)(N) &&
                                        (0, r.jsx)(nM.w, { type: "info", children: P.intl.string(P.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, r.jsx)(nv.A, {
                                            Icon: nx.C,
                                            text: P.intl.format(P.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != N && (0, r.jsx)(nz, { handleClose: a, sku: N, application: A }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, r.jsxs)("div", { className: nY.Du, children: [L(), M()] }),
                        getLeftColumnComponent: L,
                        getRightColumnComponent: M,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == d || d.id === g?.id || o.length > eB.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                s = u.useMemo(() => ({ disabled: i }), [i]);
            return (0, r.jsx)(el.Mw, {
                paymentModalStepProps: e,
                layout: el.XZ.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: s,
            });
        },
        [o.pn.REVIEW]: er.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(nj, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: l, applicationId: i, isGift: s, skuId: a, ...o } = e;
            return (
                ((e) => {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, nO.h)(t);
                    u.useEffect(() => {
                        null == l ||
                            null == n ||
                            nI.A.isFetchingForSKU(n) ||
                            null != nS.A.get(n) ||
                            (0, ng.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: i, skuId: a }),
                (0, r.jsx)(eP.M, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: i,
                    skuIDs: [a],
                    purchaseType: th.VV.ONE_TIME,
                    isGift: s,
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
        tenantAnalyticsLocation: en.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, nU.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => P.intl.string(P.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => P.intl.string(P.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(M.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var nX = n(274971),
    nQ = n(480642),
    nq = n(944355),
    nJ = n(977445),
    n$ = n(908419),
    n0 = n(211287),
    n1 = n(623373),
    n6 = n(739508),
    n7 = n(715054);
(0, i.A)();
var n2 = n(136857),
    n3 = n(158317),
    n8 = n(855104);
n(322076);
var n4 =
        (((l = {})[(l.INSUFFICIENT_ORB_BALANCE = 1e3)] = "INSUFFICIENT_ORB_BALANCE"),
        (l[(l.MISSING_DEPENDENT_SKU_ENTITLEMENT = 1001)] = "MISSING_DEPENDENT_SKU_ENTITLEMENT"),
        (l[(l.SKU_PRODUCT_LINE_NOT_PURCHASABLE = 1002)] = "SKU_PRODUCT_LINE_NOT_PURCHASABLE"),
        (l[(l.SKU_ALREADY_OWNED = 1003)] = "SKU_ALREADY_OWNED"),
        (l[(l.FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION = 1004)] = "FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION"),
        (l[(l.SKU_NOT_AVAILABLE_FOR_DISTRIBUTION = 1005)] = "SKU_NOT_AVAILABLE_FOR_DISTRIBUTION"),
        (l[(l.SKU_MISSING_ORB_PRICE = 1006)] = "SKU_MISSING_ORB_PRICE"),
        (l[(l.SKU_IS_THIRD_PARTY = 1007)] = "SKU_IS_THIRD_PARTY"),
        (l[(l.SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED = 1008)] = "SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED"),
        (l[(l.FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER = 1009)] = "FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER"),
        (l[(l.BUNDLE_PARTIALLY_OWNED = 1010)] = "BUNDLE_PARTIALLY_OWNED"),
        (l[(l.SOCIAL_LAYER_NOT_PURCHASABLE = 1011)] = "SOCIAL_LAYER_NOT_PURCHASABLE"),
        (l[(l.FRAMES_FIAT_EXCLUSIVE = 1012)] = "FRAMES_FIAT_EXCLUSIVE"),
        (l[(l.FIRST_PARTY_NO_ORBS = 1013)] = "FIRST_PARTY_NO_ORBS"),
        l),
    n9 = n(289873),
    n5 = n(241989),
    le = n(576052),
    lt = n(120992),
    ln = n(194256),
    ll = n(319820),
    lr = n(327105),
    li = n(200766);
let ls = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: i } = (0, ll.AO)({ sku: t }),
            s = (0, ln.oO)(l);
        i ? (s = P.intl.string(lr.default.qwSlCO)) : (0, n1.Ab)(l) && (s = P.intl.string(P.t["0TmQRG"]));
        let a = (0, ln.dL)(t),
            o = (0, eU.EZ)(t.id) ? le.m[t.id].render({ className: li.$ }) : (0, r.jsx)(n5.WH, { sku: t, product: l });
        return (0, r.jsx)(n5.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: nx.C,
        });
    },
    la = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, lt.c)({ applicationId: (0, J.P)(t), skuIDs: [t] });
        let l = (0, v.bG)([nS.A], () => nS.A.get(t), [t]);
        return null == l
            ? (0, r.jsx)(n9.y, { type: n9.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(ls, { sku: l, orbPriceAmount: n });
    },
    lo = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(nq.vW, { label: P.intl.string(P.t.y0WGqP), value: null != t ? `${t}` : "", Icon: nx.C });
    },
    lu = () => P.intl.string(P.t.wmcDyu);
function lc() {
    let { immediateDelivery: e } = (0, n$.U)(),
        t = lu();
    return (0, r.jsx)(nq._P, {
        variant: { type: nq.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let ld = (0, u.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    lC = () => (0, u.useContext)(ld),
    lp = { payment_gateway: th.kM.VIRTUAL_CURRENCY, currency: G.Yri.DISCORD_ORB },
    lm = {
        CHECKOUT_FLOW: el.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: i,
                        onRedeemVirtualCurrency: s,
                        skuId: a,
                        analyticsSourceLocation: c,
                    } = lC(),
                    { primaryButtonProps: d, ...C } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                isRedeeming: i,
                                orbRedemptionError: s,
                                onRedeemVirtualCurrency: a,
                                handleStepChange: c,
                            } = e,
                            { enabled: d } = n0.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: C, orderOrbPriceAmount: p } = (0, f.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: m,
                                orbPriceAmount: _,
                                orbBalanceToDisplay: E,
                                onClickCheckout: T,
                                showCollectiblesDiscountWarning: S,
                                errorMessage: I,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: l,
                                        orbProductContext: r,
                                        analyticsSourceLocation: i,
                                        handleStepChange: s,
                                    } = e,
                                    { analyticsLocations: a } = (0, ex.Ay)(),
                                    {
                                        selectedSkuId: c,
                                        setPurchaseState: d,
                                        firstConstraintReasonCode: C,
                                    } = (0, f.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    p = (0, n8.gN)(),
                                    m = (0, u.useRef)(p),
                                    { emitOrbCheckoutPaymentFlowEvent: _ } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: i } = (0, h.V)(),
                                            { hasPaymentSources: s } = (0, U.jm)(),
                                            {
                                                loadId: a,
                                                startTime: c,
                                                discoverySessionId: d,
                                            } = (0, f.t4)((e) => e.contextMetadata),
                                            C = (0, u.useMemo)(
                                                () => ({
                                                    load_id: a,
                                                    discovery_session_id: d,
                                                    application_id: (0, J.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: i,
                                                    payment_gateway: th.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: G.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: G.frM[G.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: et.r.UNIFIED,
                                                        checkout_flow: tb.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [a, d, i, t, l, r, n],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, u.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - c;
                                                    e === G.HAw.PAYMENT_FLOW_STARTED
                                                        ? $.default.track(G.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...C,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: th.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === G.HAw.PAYMENT_FLOW_LOADED
                                                          ? $.default.track(G.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...C,
                                                                has_saved_payment_source: s,
                                                                initial_step: o.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === G.HAw.PAYMENT_FLOW_CANCELED
                                                            ? $.default.track(G.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...C,
                                                                  duration_ms: n,
                                                              })
                                                            : e === G.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? $.default.track(G.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...C,
                                                                    duration_ms: n,
                                                                })
                                                              : e === G.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? $.default.track(G.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...C,
                                                                      duration_ms: n,
                                                                  })
                                                                : $.default.track(G.HAw.PAYMENT_FLOW_FAILED, {
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
                                                [c, C, s],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: r,
                                        analyticsLocations: a,
                                        analyticsSourceLocation: i,
                                    });
                                (0, u.useEffect)(() => {
                                    null != l &&
                                        null !== m.current &&
                                        (_(G.HAw.PAYMENT_FLOW_FAILED, l), (m.current = null));
                                }, [l, _]);
                                let E = (0, u.useCallback)(() => {
                                        (m.current = p),
                                            _(G.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                d(tB.h.COMPLETED),
                                                    s(o.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, d, p, _, s]),
                                    T = m.current ?? p,
                                    S = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, tt.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, u.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof n3.FY && null != t)
                                                    switch (t) {
                                                        case n4.INSUFFICIENT_ORB_BALANCE:
                                                            return P.intl.string(P.t.keFvXM);
                                                        case n4.SKU_ALREADY_OWNED:
                                                            return P.intl.string(P.t.m371Mx);
                                                        case n4.BUNDLE_PARTIALLY_OWNED:
                                                            return P.intl.string(P.t.v9oC0p);
                                                        default:
                                                            return P.intl.string(P.t.fqJZ11);
                                                    }
                                                return e instanceof n3.j2
                                                    ? P.intl.string(P.t["2BmwgV"])
                                                    : e.code === n2.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? P.intl.string(P.t.keFvXM)
                                                      : e.code === n2.tG.ALREADY_PURCHASED
                                                        ? P.intl.string(P.t.m371Mx)
                                                        : P.intl.string(P.t.fqJZ11);
                                            })(l, C),
                                        [l, C],
                                    ),
                                    orbPriceAmount: S,
                                    orbBalanceToDisplay: T,
                                    onClickCheckout: E,
                                    selectedSkuId: c,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                orbRedemptionError: s,
                                onRedeemVirtualCurrency: a,
                                handleStepChange: c,
                            }),
                            A = (0, ea.bG)([nS.A], () => nS.A.get(t), [t]),
                            O = (0, nJ.uS)(A?.applicationId),
                            {
                                disabled: g,
                                tooltipText: x,
                                text: N,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: r, tooltipText: i } = (0, u.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: P.intl.string(P.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: P.intl.string(P.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: r, tooltipText: i, text: lu() };
                            })({ orbBalance: E, orbPriceAmount: d ? C : _, isInTestMode: O }),
                            R = (0, u.useMemo)(
                                () => ({ onClick: T, loading: i, text: N, disabled: g, tooltipText: x }),
                                [T, i, N, g, x],
                            ),
                            v = S ? P.intl.format(P.t.fsOXXO, {}) : null,
                            y = O ? P.intl.string(P.t.OvMyMd) : null;
                        return {
                            isStepLoading: m,
                            upperInlineNoticeProps: (0, u.useMemo)(() => {
                                if (null != y || null != v || null != I) {
                                    let e = [];
                                    return (
                                        null != y &&
                                            e.push({ type: "warning", message: y, key: "test-mode-warning-notice" }),
                                        null != v &&
                                            e.push({ type: "warning", message: v, key: "orb-checkout-warning-notice" }),
                                        null != I &&
                                            e.push({ type: "critical", message: I, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [y, v, I]),
                            purchaseItemContent: (0, r.jsx)(la, { skuId: t, orbPriceAmount: d ? p : _ }),
                            paymentMethodContent: (0, r.jsx)(lo, { orbBalance: E }),
                            legalContent: (0, r.jsx)(lc, {}),
                            primaryButtonProps: R,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: a,
                        analyticsSourceLocation: c,
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: i,
                        onRedeemVirtualCurrency: s,
                        handleStepChange: t,
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(x.dZ, { children: (0, r.jsx)(nX.T, { ...C }) }),
                        (0, r.jsx)(x.UX, { children: (0, r.jsx)(nQ.lo, { primaryButtonProps: d }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: l, children: i } = e,
                    { order: s, setOrder: a } = (0, f.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: o,
                        isRedeeming: c,
                        orbRedemptionError: d,
                        onRedeemVirtualCurrency: C,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: r, order: i } = e,
                            s = (0, ea.bG)([e6.default], () => e7.Ay.canUseShopDiscounts(e6.default.getCurrentUser())),
                            a = (0, ea.bG)([nS.A], () => nS.A.get(t), [t]),
                            o = (0, nD.JL)({ sku: a }),
                            { product: c } = (0, e2.q)(t),
                            d = (0, u.useMemo)(() => {
                                if (null != o) return { orbPriceAmount: o.amount };
                                if (null != c) {
                                    let e = (0, n1.CW)({ product: c, hasShopDiscount: s });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [o, c, s]);
                        d?.orbPriceAmount == null &&
                            (0, n6.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: C,
                                isSubmitting: p,
                                error: m,
                            } = (0, n7.Q)({ skuId: t, loadId: n, order: i, onSignFailure: r }),
                            _ = (0, u.useCallback)(
                                (e) => {
                                    C(t, n, (n) => {
                                        l?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, C, l],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            orbProductContext: d,
                            onRedeemVirtualCurrency: _,
                            isRedeeming: p,
                            orbRedemptionError: m,
                        };
                    })({ skuId: t, loadId: n, order: s, onSignFailure: a }),
                    p = (0, u.useMemo)(
                        () => ({
                            orbProductContext: o,
                            isRedeeming: c,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: C,
                            skuId: t,
                            analyticsSourceLocation: l,
                        }),
                        [o, c, d, C, t, l],
                    );
                return (0, r.jsx)(ld.Provider, { value: p, children: i });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l } = lC(),
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
                    })({ orbProductContext: l, overrideAnalyticParams: lp });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: lp,
        },
    },
    l_ = {
        [ee.C.ORB_CHECKOUT]: {
            flowType: ee.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: G.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: lm,
        },
        [ee.C.COLLECTIBLES_CHECKOUT]: {
            flowType: ee.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: G.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tP,
        },
        [ee.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: ee.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: G.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nZ,
        },
        [ee.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: ee.C.PREMIUM_CHECKOUT,
            purchaseType: G.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: tJ,
        },
        [ee.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: {
            implemented: !1,
            flowType: ee.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        },
        [ee.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: ee.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: G.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nf,
        },
        [ee.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: ee.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: G.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: nT,
        },
        [ee.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: G.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eg,
            flowType: ee.C.GUILD_PRODUCT_CHECKOUT,
        },
        [ee.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: ee.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: tM,
            purchaseType: G.VVm.SUBSCRIPTION,
        },
        [ee.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: ee.C.GUILD_BOOST_CHECKOUT },
    };
var lE = n(169801),
    lT = n(380619);
let lS = (e) => {
        let { returnStep: t = o.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
            { purchaseType: i } = (0, f.t4)((e) => ({ purchaseType: e.purchaseType })),
            s = u.useCallback(
                () =>
                    ((e) => {
                        let {
                            paymentModalStepProps: t,
                            returnStep: n = o.pn.REVIEW,
                            returnStepIfNoPaymentSources: l,
                            purchaseType: r,
                        } = e;
                        if (0 === Object.keys(c.A.paymentSources).length) {
                            if (null != l) return void t.handleStepChange(l);
                            r === th.VV.SUBSCRIPTION
                                ? t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS })
                                : t.handleClose();
                        } else t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS });
                    })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l, purchaseType: i }),
                [t, n, l, i],
            );
        return (0, r.jsx)(C.x, { ...l, onReturn: s });
    },
    lI = (e) => {
        let { initialPlanId: t } = e,
            n = (0, f.t4)((e) => e.selectedSkuId),
            l = (0, np.A)(),
            { isGift: i, claimableRewards: s } = (0, O.Pv)(),
            a = (0, lE.A)({ isGift: i, skuId: n }),
            c = (0, tz.lp)(a),
            d = (0, lT.px)(l, i, s),
            C = u.useMemo(() => {
                let e = null == t ? o.pn.PLAN_SELECT : o.pn.REVIEW;
                return c && (e = o.pn.REVIEW), d && (e = o.pn.SELECT_FREE_SKU), e;
            }, [c, d, t]);
        return (0, r.jsx)(lS, { paymentModalStepProps: e, returnStep: o.pn.REVIEW, returnStepIfNoPaymentSources: C });
    },
    lh = (e) => {
        let {
            checkoutFlow: t,
            returnStep: n = o.pn.REVIEW,
            returnStepIfNoPaymentSources: l,
            paymentModalStepProps: i,
        } = e;
        return t === ee.C.PREMIUM_CHECKOUT
            ? (0, r.jsx)(lI, { ...i })
            : (0, r.jsx)(lS, { paymentModalStepProps: i, returnStep: n, returnStepIfNoPaymentSources: l });
    };
var lA = n(246681);
let lf = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, u.useRef)(!1),
            i = (0, y.Hp)(),
            { handleStepChange: s } = t;
        return ((0, u.useEffect)(() => {
            i || l.current || (s(n), (l.current = !0));
        }, [i, s, n]),
        i)
            ? (0, r.jsx)(j.oO, {})
            : null;
    },
    lO = {
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
class lg {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = l_[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = lO[e]),
            (this.override_analytic_params =
                this.tenantCheckoutFlowConfig.TENANT_PROVIDER_CONFIGS.overrideAnalyticParams);
    }
    getCheckoutStep(e) {
        return this.tenantCheckoutFlowConfig.CHECKOUT_STEPS[e];
    }
    generateRenderHeader() {
        let { CustomHeaderComponent: e } = this.tenantCheckoutFlowConfig;
        if (null != e) return (t, n, l) => (0, r.jsx)(e, { plan: t, onClose: n, step: l });
    }
    getPredicateStepConfig() {
        let { CustomCheckoutPredicateStep: e } = this.tenantCheckoutFlowConfig,
            { predicateStepType: t } = this.internalCheckoutFlowControls;
        return null != e
            ? { key: null, renderStep: (t) => (0, r.jsx)(e, { ...t }) }
            : "one_time_payment" === t
              ? K
              : "subscription" === t
                ? B
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(lf, { paymentModalStepProps: e, defaultStep: o.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== ee.C.ORB_CHECKOUT)
            return {
                key: o.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(lh, {
                        checkoutFlow: this.checkoutFlow,
                        paymentModalStepProps: e,
                        returnStep: o.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? o.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
            l = this.getCheckoutStep(o.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != l)
            return {
                key: o.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, r.jsx)(l, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => P.intl.string(P.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(o.pn.REVIEW);
        return {
            key: o.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => P.intl.string(P.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n, STEPS_BEFORE_CHECKOUT: l = [] } = this.tenantCheckoutFlowConfig,
            { excludePaymentAuthSteps: r } = this.internalCheckoutFlowControls,
            i = this.getPredicateStepConfig(),
            s = this.getGiftCustomizationStepConfig({ isGift: t }),
            a = this.getAddPaymentStepConfig({ isGift: t }),
            u = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([i, ...(null != s ? [s] : []), ...l, a, ...(r ? [] : z), u]);
        return null != n && c.push({ key: o.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === ee.C.ORB_CHECKOUT && null != e
            ? (0, J.P)(e)
            : this.checkoutFlow === ee.C.COLLECTIBLES_CHECKOUT
              ? G.FYj
              : this.checkoutFlow === ee.C.PREMIUM_CHECKOUT
                ? eB.tv
                : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
            loadId: t,
            skuId: n,
            skuProductLine: l,
            applicationId: r,
            discoverySessionId: i,
            analyticsLocation: s,
            analyticsLocations: a,
            analyticsObject: o,
            analyticsSourceLocation: u,
            isGift: c,
            eligibleForTrial: d,
        } = e;
        $.default.track(G.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: i,
            payment_type: G.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: l,
            application_id: r,
            location: s ?? o,
            location_stack: a,
            source: u,
            eligible_for_trial: d,
            payment_modal_version: "v2",
            checkout_design: et.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === ee.C.PREMIUM_CHECKOUT ? { subscription_type: G.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    renderCheckoutInstance(e) {
        let {
                additionalOptions: t,
                giftContextProps: l,
                onComplete: o,
                onClose: u,
                skuId: c,
                skuProductLine: d,
                discoverySessionId: C,
                applicationId: p,
                analyticsSourceLocation: m,
                analyticsLocations: _,
                analyticsObject: E,
                tenantParams: T,
                activeSubscription: S = null,
                ...I
            } = e,
            h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            A = arguments.length > 2 ? arguments[2] : void 0,
            f = { current: (this.checkoutFlow === ee.C.PREMIUM_CHECKOUT ? (0, q.A)() : null) ?? (0, i.A)() },
            O = { current: null },
            { modalKey: g } = A,
            x = this.generateRenderHeader(),
            P = p ?? this.getApplicationId(c),
            N = !!(null != l && l.isGift),
            R = !1,
            v = {
                ...I,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: N }),
                onComplete: (e) => {
                    null != o && o(e), (R = !0);
                },
                onClose: u,
                renderHeader: x,
                skuId: c ?? null,
                tenantParams: T ?? {},
                loadId: f.current,
                onOrderCreated: (e) => {
                    (f.current = e.id), (O.current = e);
                },
                discoverySessionId: C,
                activeSubscription: S,
                applicationId: P,
                analyticsLocations: _,
                analyticsObject: E,
                analyticsSourceLocation: m,
                giftContextProps: l,
                additionalOptions: t,
            };
        if ("modal" === h)
            return (0, s.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.resolve().then(n.bind(n, 246681));
                    return (t) => (0, r.jsx)(e, { ...v, renderModalProps: t });
                },
                {
                    ...A,
                    onCloseRequest: () => {
                        null != A.onCloseRequest && A.onCloseRequest(R, f.current),
                            A.skipCloseModalOnCloseRequest || (0, s.closeModal)(g);
                    },
                    onCloseCallback: () => {
                        R ||
                            (Q({ checkoutSucceeded: R, order: O.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: f.current,
                                skuId: c,
                                skuProductLine: d,
                                applicationId: P,
                                discoverySessionId: C,
                                analyticsLocation: I.analyticsLocation,
                                analyticsLocations: _,
                                analyticsObject: E,
                                analyticsSourceLocation: m,
                                isGift: N,
                                eligibleForTrial: null != I.trialId,
                            })),
                            null != A.onCloseCallback && A.onCloseCallback(R),
                            null != u && u(R, c);
                    },
                    modalKey: g,
                },
            );
        {
            let e = { transitionState: a.ip.ENTERED, onClose: G.tEg };
            return (0, r.jsx)(lA.UnifiedCheckoutInstance, { ...v, renderModalProps: e });
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
