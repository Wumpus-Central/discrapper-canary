n.d(t, { vd: () => nH.v, Mw: () => nB, UnifiedCheckoutFlowManagerSingletons: () => nq, XZ: () => r.X, CL: () => r.C });
var l,
    r = n(75304);
n(321073);
var i = n(627968),
    s = n(835245),
    a = n(192308),
    o = n(166532),
    u = n(7764),
    c = n(624210),
    d = n(26279);
async function C(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === d.Re.DRAFT)
        try {
            await (0, c.Nl)(n.id);
        } catch (e) {}
}
var p = n(925847),
    _ = n(310829),
    E = n(174459),
    m = n(145659),
    T = n(793574),
    I = n(862241),
    S = n(284009),
    O = n.n(S),
    A = n(964486),
    h = n(666646),
    N = n(64700),
    g = n(17928),
    f = n(871109);
let P = N.createContext(void 0);
function x() {
    let e = N.useContext(P);
    return O()(null != e, "GuildProductPurchaseContext not found"), e;
}
function R(e) {
    let { children: t, skuId: n, ...l } = e,
        r = (0, g.bG)([f.A], () => f.A.getGuildProduct(n));
    return (
        O()(null != r, "guildProductListing cannot be null"),
        (0, i.jsx)(P.Provider, { value: { guildProductListing: r, ...l }, children: t })
    );
}
function U(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: r } = x(),
        s = (0, h.sw)();
    return (
        (0, A.Ay)(() => {
            var e;
            O()(null != s, "invoicePreview cannot be null"),
                (e = { guildId: r, guildProductListingId: l.id, invoicePreview: s }),
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("66731"),
                        n.e("47539"),
                        n.e("67837"),
                        n.e("35778"),
                        n.e("47812"),
                        n.e("13583"),
                        n.e("28090"),
                    ]).then(n.bind(n, 779457));
                    return (n) => (0, i.jsx)(t, { ...e, ...n });
                }),
                t();
        }),
        null
    );
}
var v = n(503698),
    L = n.n(v),
    M = n(939249),
    y = n(789645),
    j = n(935462),
    k = n(303612),
    F = n(916261),
    b = n(575650);
function D(e) {
    let { className: t, onClose: n } = e;
    return (0, i.jsx)(M.D, {
        className: L()(F.cG, t),
        onClick: n,
        children: (0, i.jsx)(y.P, { size: "xs", color: "currentColor", className: F.yP }),
    });
}
function w(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, i.jsxs)(j.rQ, {
        className: L()(F.wx, b.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)(k.A, { className: F.F0, listing: t, imageSize: 500, alt: "" }),
            (0, i.jsx)(D, { className: F.b, onClose: n }),
        ],
    });
}
var H = n(196617);
let G = {
    CHECKOUT_FLOW: r.C.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [o.pn.REVIEW]: I._M },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, i.jsx)(R, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = x();
        return n === o.pn.CONFIRM
            ? null
            : (0, i.jsx)(w, { guildProductListing: l, className: H.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(U, { ...e }) },
};
var K = n(20742),
    B = n(688810),
    W = n(197510),
    V = n(848149),
    Y = n(937008),
    z = n(106778),
    Z = n(228366),
    X = n(213530),
    Q = n(966971),
    q = n(758836),
    J = n(483764);
let $ = { sliderBodyClassName: J.Bz },
    ee = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(z.Fk, { ref: n, className: J.Lb, environment: t.current }),
                (0, i.jsx)(X.K, { options: l, className: L()(J.Oh, { [J.R]: !r }) }),
            ],
        });
    };
var et = n(702841),
    en = n(775602),
    el = n(31823),
    er = n(211083),
    ei = n(427675),
    es = n(211159),
    ea = n(590180),
    eo = n(953150),
    eu = n(524246),
    ec = n(14368),
    ed = n(61750),
    eC = n(972607),
    ep = n(482132),
    e_ = n(921925),
    eE = n(788868),
    em = n(375708);
function eT(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: l,
            purchaseError: r,
            purchasePreviewError: s,
            appliedUserDiscounts: a,
        } = (0, es.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: o } = (0, er.o)(),
        { application: u } = (0, el.V)(),
        c = (0, ei.gU)(),
        d = (0, et.bG)([ea.A], () => ea.A.getProduct(l)),
        C = N.useRef(!1);
    O()(null != l, "Expected selectedSkuId"), O()(null != u, "Expected application");
    let p = c[l];
    O()(null != p, "Expected sku");
    let _ = null != o || null != r || null != s,
        E =
            a.length > 0
                ? em.intl.formatToPlainString(em.t.VuV3Td, { discountOfferAmount: a[0].discount.amount })
                : void 0;
    return (N.useEffect(() => {
        null == d ||
            _ ||
            C.current ||
            ((C.current = !0),
            (0, ed.A)({
                product: d,
                overrideTitle: E,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: q.gs.FIAT,
            }));
    }, [d, n, t, _, E]),
    _)
        ? (0, i.jsx)(ep.dZ, { children: (0, i.jsx)(e_.A, {}) })
        : null;
}
function eI(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: r,
            giftRecipient: s,
            giftMessageError: a,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, Y.Pv)(),
        c = (0, et.bG)([en.A], () => en.A.useReducedMotion),
        d = N.useRef(null),
        C = (0, es.t4)((e) => e.selectedSkuId),
        p = (0, et.bG)([ea.A], () => ea.A.getProduct(C)),
        { confettiColors: _ } = (0, eo.A)(p?.styles);
    return (
        N.useEffect(() => {
            t &&
                null != s &&
                null != C &&
                (u === eE.vQ.USER_PROFILE_WISHLIST || u === eE.vQ.DM_CHANNEL_WISHLIST) &&
                Z.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: C, recipientId: s.id });
        }, [t, s, C, u]),
        t
            ? (0, i.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, i.jsx)(eC.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: l,
                          hasSentMessage: r,
                          giftRecipient: s,
                          giftMessageError: a,
                          isSendingMessage: o,
                      }),
                      !e.hideConfetti &&
                          !c &&
                          (0, i.jsx)(eu.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, ec.rA)(p?.categorySkuId),
                              colors: _?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, i.jsx)(eT, { ...e })
    );
}
var eS = n(123292),
    eO = n(859040),
    eA = n(993408),
    eh = n(575593),
    eN = n(452027),
    eg = n(922016),
    ef = n(778712),
    eP = n(834730),
    ex = n(534514),
    eR = n(986687),
    eU = n(999291),
    ev = n(903209),
    eL = n(287809),
    eM = n(428262),
    ey = n(674658),
    ej = n(898461),
    ek = n(203632),
    eF = n(892118),
    eb = n(536572),
    eD = n(14702),
    ew = n(219103),
    eH = n(525723),
    eG = n(780651);
function eK(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: r,
            previewHeaderClassName: s,
            hideProfilePreview: a,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, Y.Pv)(),
        c = (0, g.bG)([eL.default], () => eL.default.getCurrentUser()),
        d = eM.Ay.canUseShopDiscounts(c),
        C = (0, eU.Ay)(o?.id),
        p = N.useRef(null),
        [_, E] = N.useState(!1),
        { product: m } = (0, ey.q)(t, !0),
        T = N.useMemo(() => (0, eA.fT)(m, d), [m, d]),
        I = (0, eH.V_)(m);
    if (null == m || 0 === m.items.length) return null;
    let [S] = m.items,
        O = (0, eb.VG)(m),
        A = null != o && o.id !== c?.id && m.type !== eh.R.BUNDLE && S.type !== eh.R.NAMEPLATE && !a;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)("div", {
                className: L()(eG.QU, s),
                children: (0, i.jsx)(eN.D, {
                    label: em.intl.string(em.t.PpoJzt),
                    children:
                        A &&
                        (0, i.jsx)(
                            eg.Y,
                            {
                                targetElementRef: p,
                                align: "center",
                                shouldShow: _,
                                onRequestClose: () => E(!1),
                                preload: () => (0, ev.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(eR.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, ef.FT)(ef._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, ej.T)(S) ? S : null,
                                        pendingProfileEffect: (0, ek.C3)(S) ? S : null,
                                        pendingProfileFrame: (0, eF.s)(S) ? S : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, i.jsx)(M.D, {
                                        ...l,
                                        className: eG.Nx,
                                        innerRef: p,
                                        onClick: (e) => {
                                            E((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            _ ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, i.jsx)(eP.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: em.intl.string(em.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            C?.userId,
                        ),
                }),
            }),
            (0, i.jsxs)("div", {
                className: L()(eG.i1, null != u ? eG.cN : eG.no),
                children: [
                    (0, i.jsxs)("div", {
                        className: eG.Ug,
                        children: [
                            (0, i.jsx)(eD.O, { product: m }),
                            (0, i.jsxs)("div", {
                                className: eG.JZ,
                                children: [
                                    (0, i.jsx)(eP.E, { variant: "text-md/semibold", children: O }),
                                    (0, i.jsx)(ex.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            m?.type === eh.R.BUNDLE
                                                ? null
                                                : S.type === eh.R.AVATAR_DECORATION
                                                  ? em.intl.string(em.t["7v0T9P"])
                                                  : S.type === eh.R.NAMEPLATE
                                                    ? em.intl.string(em.t.x5CoXR)
                                                    : S.type === eh.R.PROFILE_EFFECT
                                                      ? em.intl.string(em.t.wR5wOo)
                                                      : S.type === eh.R.PROFILE_FRAME
                                                        ? em.intl.string(em.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(ew.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: T,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, i.jsx)("div", {
                            className: eG.Wh,
                            children: (0, i.jsx)(eP.E, {
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
var eB = n(783878),
    eW = n(966327),
    eV = n(427262);
let eY = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: r } = e,
        { giftRecipient: s, setGiftRecipient: a } = (0, Y.Pv)();
    return null == t
        ? null
        : (0, i.jsx)("div", {
              className: l,
              children: (0, i.jsx)(eB.Z, {
                  selectionMode: "single",
                  label: em.intl.string(em.t.xFn72s),
                  placeholder: em.intl.string(em.t.R0vK0N),
                  value: s?.id,
                  onSelectionChange: (e) => {
                      let l = r.find((t) => t.id === e);
                      null != l && (n(l, t), a(l));
                  },
                  options: r.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${eV.Ay.getUserTag(e)}`,
                      leading: (0, i.jsx)(eW.A, { user: e, size: ef._3.SIZE_20 }),
                  })),
              }),
          });
};
var ez = n(735438),
    eZ = n.n(ez),
    eX = n(427358),
    eQ = n(570287),
    eq = n(994500);
function eJ() {
    let e = (0, g.yK)([eq.A], () => eq.A.getFriendIDs()),
        t = (0, g.yK)([eX.A], () =>
            eX.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: r } = e,
                        i = (0, eQ.q)(r);
                    return !t && (n >= 0.1 || l >= 0.1) && i;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = N.useMemo(() => eZ().uniq([...e, ...t]), [e, t]);
    return (0, g.yK)(
        [eL.default],
        () =>
            n.reduce((e, t) => {
                let n = eL.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var e$ = n(871181),
    e0 = n(318007),
    e1 = n(285719),
    e2 = n(976860),
    e7 = n(652215),
    e8 = n(353791);
function e3(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, B.Ay)(T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(eS.Q, {
        text: em.intl.string(em.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, eO.Cz)({ analyticsLocations: l, analyticsSource: T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, e2.pX)(`${e7.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var e6 = n(818348);
let e5 = (0, N.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        onStepChange: void 0,
    }),
    e4 = () => (0, N.useContext)(e5),
    e9 = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = e4(),
            { analyticsLocations: l } = (0, B.Ay)();
        return (0, i.jsx)(eI, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
    },
    te = {
        [o.pn.GIFT_CUSTOMIZATION]: () => em.intl.string(em.t["JCFN/y"]),
        [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => em.intl.string(em.t.lDbi6H),
        [o.pn.CONFIRM]: () => "",
    },
    tt = (e) => {
        let { step: t } = e,
            n = te[t];
        return null == n ? null : (0, i.jsx)(K.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    tn = {
        CHECKOUT_FLOW: r.C.COLLECTIBLES_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.GIFT_CUSTOMIZATION]: (e) => {
                let { handleStepChange: t, handleClose: n } = e,
                    {
                        renderLeftColumn: l,
                        renderRightColumn: s,
                        ctaDisabled: a,
                        loading: o,
                    } = ((e) => {
                        let { handleStepChange: t, handleClose: n } = e,
                            {
                                customGiftMessage: l = "",
                                setCustomGiftMessage: r,
                                giftRecipientError: s,
                                setGiftRecipientError: a,
                                validatingGiftRecipient: o,
                                giftRecipient: u,
                                giftingOrigin: c,
                                setValidatingGiftRecipient: d,
                            } = (0, Y.Pv)(),
                            { selectedSkuId: C, checkoutInvoicePreview: p } = (0, es.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            _ = (0, ei.gU)(),
                            m = (0, g.bG)([eL.default], () => eL.default.getCurrentUser()),
                            T = eJ(),
                            I = async (e, t) => {
                                d(!0),
                                    null != s && a(),
                                    (await (0, eO.JJ)(e.id, t)) || a(em.intl.string(em.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, A.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== eE.vQ.DM_CHANNEL_WISHLIST &&
                                    E.default.track(e7.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                I(u, C));
                        });
                        let S = () =>
                            (0, i.jsx)(e$.A, {
                                onTextChange: (e) => r?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: e8.iX,
                                innerClassName: e8.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, i.jsx)("div", { className: e8.qL, children: (0, i.jsx)(e0.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, eA.pA)({ invoicePreview: p, selectedSkuId: C, skusById: _ });
                                return c === eE.vQ.USER_PROFILE_WISHLIST || c === eE.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(e1.Z, { giftRecipient: u }),
                                              S(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(eK, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e8.uW,
                                                      previewHeaderClassName: e8.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, i.jsx)("div", {
                                                  className: e8.fi,
                                                  children: (0, i.jsx)(e3, { handleClose: n, selectedSkuId: C }),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(eY, {
                                                  selectedSkuId: C,
                                                  recipients: T,
                                                  className: e8.uh,
                                                  validateSelectedGift: I,
                                              }),
                                              S(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(eK, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e8.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == u || u.id === m?.id || l.length > eE.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = N.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, i.jsx)(nB, {
                    paymentModalStepProps: e,
                    layout: r.X.TWO_COLUMN,
                    renderLeftColumn: l,
                    renderRightColumn: s,
                    primaryCTAButtonProps: u,
                });
            },
            [o.pn.REVIEW]: I._M,
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let { skuId: t, additionalOptions: n, children: l, ...r } = e,
                    {
                        environment: s,
                        confettiCanvas: a,
                        setConfettiCanvas: o,
                        customConfettiVisible: u,
                        setCustomConfettiVisible: c,
                        customConfettiDisplayOptions: d,
                        hideConfirmStepConfetti: C,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = N.useRef(new z.OH()),
                            [l, r] = N.useState(null),
                            [i, s] = N.useState(!1),
                            a = N.useMemo(() => (0, Q.AB)({ purchaseType: q.gs.FIAT, skuId: t }), [t]);
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
                    p = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    _ = null != n ? n.onStepChange : void 0,
                    E = (0, N.useMemo)(
                        () => ({
                            skuIDs: p,
                            setCustomConfettiVisible: c,
                            hideConfirmStepConfetti: C,
                            confettiCanvas: a,
                            onStepChange: _,
                        }),
                        [p, c, C, a, _],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ee, {
                            environment: s,
                            setConfettiCanvas: o,
                            customConfettiDisplayOptions: d,
                            customConfettiVisible: u,
                        }),
                        (0, i.jsx)(W.CheckoutRootProvider, {
                            ...r,
                            skuIDs: p,
                            stepConfigs: r.stepConfigs,
                            activeSubscription: null,
                            purchaseType: e6.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, i.jsx)(e5.Provider, { value: E, children: l }),
                        }),
                    ],
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { skuIDs: l, setCustomConfettiVisible: r, onStepChange: i } = e4(),
                    { isGift: s } = (0, Y.Pv)(),
                    a = (0, V.J)(),
                    {
                        paymentModalSkuId: o,
                        paymentModalOnClose: u,
                        paymentModalOnComplete: c,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: r } = e,
                            i = t[0] ?? null,
                            s = N.useCallback(() => {
                                r(!0), l?.();
                            }, [l, r]);
                        return {
                            paymentModalSkuId: i,
                            paymentModalOnClose: N.useCallback(
                                (e) => {
                                    r(!1), n(e), Z.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, r],
                            ),
                            paymentModalOnComplete: s,
                        };
                    })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: r }),
                    d = N.useCallback(
                        (e) => {
                            u(e), e && s && a();
                        },
                        [u, s, a],
                    );
                return n({ ...t, skuId: o, onClose: d, onComplete: c, applicationId: e7.FYj, onStepChange: i });
            },
            tenantAnalyticsLocation: T.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, Y.Pv)();
            return n ? (0, i.jsx)(tt, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(e9, { ...e }), options: $ },
    };
var tl = n(354033),
    tr = n(786300),
    ti = n(491057),
    ts = n(394584);
let [ta, to] = (0, tr.A)(),
    tu = {
        CHECKOUT_FLOW: r.C.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: I._M },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: l,
                    } = e,
                    r = N.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, i.jsx)(ta.Provider, { value: r, children: (0, i.jsx)(ti.Qt, { children: l }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: (e) => {
            let { onClose: t, step: n } = e,
                { guildId: l, listing: r } = to();
            return (0, i.jsx)(tl.Y, { onClose: t, listing: r, step: n, guildId: l });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, i.jsx)(ts._, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var tc = n(73825),
    td = n(120700),
    tC = n(960851),
    tp = n(117945),
    t_ = n(561794),
    tE = n(97352),
    tm = n(166403),
    tT = n(566980),
    tI = n(615310),
    tS = n(811656),
    tO = n(363373),
    tA = n(800471),
    th = n(941796),
    tN = n(957489),
    tg = n(822426);
let tf = [
        {
            key: o.pn.SKU_SELECT,
            renderStep: (e) => (0, i.jsx)(tN.F, { ...e }),
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
            renderStep: (e) => (0, i.jsx)(tg.K, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: o.pn.PLAN_SELECT,
            renderStep: (e) => (0, i.jsx)(th.Z, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, tA.lp)(e) ? null : em.intl.string(em.t["r+SebU"])),
                sectionHeaderText: () => em.intl.string(em.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: o.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, i.jsx)(tO.j, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    tP = {
        CHECKOUT_FLOW: td.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: tf,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: I._M },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            confirmationFooter: t,
                            defaultPlanId: n,
                            referralCode: l,
                            referralTrialOfferId: r,
                            subscriptionTier: s,
                            subscription: a,
                        },
                        stepConfigs: u,
                        loadId: c,
                        giftContextProps: d = { isGift: !1, giftRecipient: null },
                        children: C,
                    } = e,
                    p = (0, g.bG)([tm.A], () => tm.A.getPremiumTypeSubscription()),
                    _ = (0, tC.cg)() ? eE.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: E, giftRecipient: m } = d;
                if (null != s && !Object.values(eE.pe).includes(s))
                    throw Error("subscriptionTier must be a premium subscription");
                let T = (0, t_.tA)({ giftRecipient: m, isGift: E ?? !1 }),
                    I = N.useMemo(
                        () =>
                            T
                                ? u.map((e) =>
                                      e.key === o.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : u,
                        [u, T],
                    ),
                    S = N.useMemo(() => [...eE.oz], []);
                return (0, i.jsx)(W.CheckoutRootProvider, {
                    loadId: c,
                    activeSubscription: null != a ? a : p,
                    stepConfigs: I,
                    skuIDs: S,
                    isGift: E,
                    defaultPlanId: _ ?? n,
                    referralCode: l,
                    referralTrialOfferId: r,
                    unifiedCheckoutFlow: td.C.PREMIUM_CHECKOUT,
                    children: (0, i.jsx)(ti.Qt, { confirmationFooter: t, children: C }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { onClose: l, renderPurchaseConfirmation: r, continueSessionToInitialStep: s } = t;
                N.useEffect(() => {
                    tE.A.isLoadedForPremiumSKUs() || Z.h.wait(() => (0, tc.zS)());
                }, []);
                let { selectedSkuId: a, purchaseState: u } = (0, es.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    c = (0, tI.bB)(),
                    {
                        isGift: d,
                        selectedGiftingPromotionReward: C,
                        openGiftingBadgePostPurchaseModal: p,
                    } = (0, Y.Pv)(),
                    _ = N.useCallback(
                        (e, t) => {
                            l(e, t), e && d && null == C && p();
                        },
                        [l, d, C, p],
                    ),
                    E = (0, tp.T)(d, a),
                    m = u === tT.h.PURCHASING;
                return (0, i.jsx)(tS.A, {
                    isConfirmationStep: c === o.pn.CONFIRM && null == s && null == r,
                    isEligibleForWowMoment: E,
                    shouldPrefetchWowMoment: m,
                    children: n({
                        ...t,
                        onClose: _,
                        analyticsSubscriptionType: e7.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: eE.LE,
                    }),
                });
            },
            tenantAnalyticsLocation: T.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, i.jsx)(ts._, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var tx = n(67480),
    tR = n(328968),
    tU = n(371794),
    tv = n(565756);
o.pn.GIFT_CUSTOMIZATION;
let tL = {
    CHECKOUT_FLOW: r.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, Y.Pv)(),
                s = (0, es.t4)((e) => e.selectedSkuId),
                a = (0, g.bG)([eL.default], () => eL.default.getCurrentUser()),
                o = (0, g.bG)([tx.A], () => (null != s ? tx.A.get(s) : null), [s]),
                u = eJ(),
                c = (0, g.bG)([tR.A], () => (null != s ? tR.A.getForSKU(s) : null), [s]),
                d =
                    c?.headerBackground != null && o?.applicationId != null
                        ? (0, tU.YE)(o.applicationId, c.headerBackground, 256)
                        : void 0,
                C = async (e, t) => {},
                p = null == l || l.id === a?.id || t.length > eE.Jo,
                _ = N.useMemo(() => ({ disabled: p }), [p]);
            return (0, i.jsx)(nB, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: r.X.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, i.jsxs)("div", {
                        className: tv.P6,
                        children: [
                            o?.name != null &&
                                (0, i.jsx)(ex.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != d && (0, i.jsx)("img", { src: d, alt: o?.name ?? "", className: tv.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, i.jsxs)("div", {
                        className: tv.P6,
                        children: [
                            (0, i.jsx)(eY, { recipients: u, selectedSkuId: s, validateSelectedGift: C }),
                            (0, i.jsx)(e$.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: tv.iX,
                                innerClassName: tv.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: _,
            });
        },
        [o.pn.REVIEW]: I._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: u.zX,
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var tM = n(429913),
    ty = n(733391),
    tj = n(821609),
    tk = n(318254),
    tF = n(262427),
    tb = n(510022),
    tD = n(317560),
    tw = n(366523),
    tH = n(208733);
function tG(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, B.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, es.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, el.V)(),
        a = (0, ei.gU)(),
        { isGift: o, giftRecipient: u } = (0, Y.Pv)();
    O()(null != l, "Expected selectedSkuId"), O()(null != s, "Expected application");
    let c = a[l];
    O()(null != c, "Expected sku");
    let d = r.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (N.useEffect(() => {
            o || ((0, tD.j)(), t(), (0, tb.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: C }));
        }, [o, c, s, t, n, C]),
        !o)
    )
        return null;
    let p = null != C && C > 0;
    return (0, i.jsxs)(ep.dZ, {
        children: [
            (0, i.jsx)(e_.A, {}),
            (0, i.jsxs)("div", {
                className: tH.EL,
                children: [
                    (0, i.jsx)(tw.e, { sku: c, shape: "square", containerClassName: tH.LC }),
                    (0, i.jsx)(ex.D, {
                        variant: "heading-xl/semibold",
                        className: tH.RS,
                        children: em.intl.string(em.t["5glWta"]),
                    }),
                    (0, i.jsx)(eP.E, {
                        variant: "text-md/normal",
                        children: em.intl.formatToPlainString(em.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    p &&
                        (0, i.jsx)("div", {
                            className: tH.Is,
                            children: (0, i.jsx)(tF.J, {
                                Icon: tk.C,
                                text: em.intl.format(em.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: tH.UD,
                        children: (0, i.jsx)(tj.$, { onClick: t, text: em.intl.string(em.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var tK = n(889137),
    tB = n(742158),
    tW = n(683071),
    tV = n(313961),
    tY = n(238017),
    tz = n(650588),
    tZ = n(723090),
    tX = n(763827),
    tQ = n(403362),
    tq = n(871123),
    tJ = n(832163),
    t$ = n(44724),
    t0 = n(980094),
    t1 = n(806931),
    t2 = n(107610);
function t7(e) {
    let { handleClose: t, sku: n, application: l } = e,
        r = N.useCallback(() => {
            (0, t$.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        s = N.useCallback(() => {
            t();
            let e = tJ.A.getStorefrontState(n.applicationId)?.activePage;
            (0, tq.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: l?.guildId,
                skuId: n.id,
            }) ||
                ((0, a.closeAllModals)(),
                (0, t$.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, l]);
    return (0, i.jsx)("div", {
        className: t2.$O,
        children: (0, i.jsx)(eS.Q, {
            text: em.intl.string(em.t.ImioFL),
            onMouseDown: r,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let t8 = {
    CHECKOUT_FLOW: r.C.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: l, disabled: s } = ((e) => {
                    var t;
                    let n,
                        l,
                        r,
                        { handleStepChange: s, handleClose: a } = e,
                        {
                            customGiftMessage: o = "",
                            setCustomGiftMessage: u,
                            giftRecipient: c,
                            emojiConfetti: d,
                            soundEffect: C,
                            setEmojiConfetti: p,
                            setSoundEffect: _,
                            giftingOrigin: E,
                            additionalUserIds: m,
                        } = (0, Y.Pv)(),
                        T = (0, es.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, el.V)(),
                        S = (0, g.bG)([eL.default], () => eL.default.getCurrentUser()),
                        O =
                            ((t = S?.id),
                            (n = eJ()),
                            (l = (function (e) {
                                let t = (0, g.bG)([tX.A], () => (tX.A.isConnected() ? tX.A.getChannelId() : null)),
                                    [n, l] = N.useState([]);
                                return (
                                    N.useEffect(() => {
                                        let n = null != t ? tV.A.getParticipants(t) : [],
                                            r = [],
                                            i = new Set();
                                        for (let t of n)
                                            (!(0, t1.Xw)(t) && !(0, t1.Ay)(t)) ||
                                                t.user.id === e ||
                                                i.has(t.user.id) ||
                                                (i.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, t1.Ay)(e) && !(0, t1.Ay)(t)
                                                ? -1
                                                : (0, t1.Ay)(t) && !(0, t1.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, g.yK)([eL.default], () => m?.map(eL.default.getUser).filter(tQ.Vq) ?? [], [m])),
                            N.useMemo(
                                () =>
                                    eZ().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        A = (0, g.bG)([tx.A], () => (null != T ? tx.A.get(T) : null), [T]),
                        { userPrice: h } = (0, tZ.CD)({ sku: A, priceSetAssignmentPurchaseType: e7.lid.GIFT }),
                        f = (0, tq.fq)(A),
                        P = (0, tq.xf)(A),
                        x = async (e, t) => {},
                        R = (e) => {
                            null != _ && _(null == e ? void 0 : e);
                        },
                        U = () =>
                            (0, i.jsxs)("div", {
                                className: t2.mT,
                                children: [
                                    null != f &&
                                        (0, i.jsx)(tw.A, {
                                            containerClassName: t2.T3,
                                            cardImage: f,
                                            cardBackgroundImage: P,
                                            altText: A?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: t2._T,
                                        children: [
                                            (0, i.jsx)(tz.A, { sound: C, onSelect: R }),
                                            (0, i.jsx)(tY.A, {
                                                setEmojiConfetti: p,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        v = () => {
                            let e = A?.orbsReward;
                            return (0, i.jsxs)("div", {
                                className: t2.Tc,
                                children: [
                                    null != c && (E === eE.vQ.USER_PROFILE_WISHLIST || E === eE.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(e1.Z, { giftRecipient: c })
                                        : (0, i.jsx)(eY, { selectedSkuId: T, validateSelectedGift: x, recipients: O }),
                                    (0, i.jsx)(e$.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: t2.iX,
                                        innerClassName: t2.pt,
                                    }),
                                    null == A
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: t2.AN,
                                              children: [
                                                  (0, i.jsx)(tB.z, {
                                                      className: t2.jr,
                                                      children: em.intl.string(em.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: t2.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: t2.Xb,
                                                              children:
                                                                  null != A &&
                                                                  null != f &&
                                                                  (0, i.jsx)(tw.A, {
                                                                      containerClassName: t2.Iy,
                                                                      cardImage: f,
                                                                      cardBackgroundImage: P,
                                                                      altText: A.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: t2.vz,
                                                              children: [
                                                                  null != I && (0, i.jsx)(t0.Q, { application: I }),
                                                                  (0, i.jsx)(eP.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: A.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(eP.E, {
                                                              variant: "text-md/semibold",
                                                              children: h,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != A &&
                                        (0, tq.Ri)(A) &&
                                        (0, i.jsx)(tW.w, { type: "info", children: em.intl.string(em.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(tF.J, {
                                            Icon: tk.C,
                                            text: em.intl.format(em.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != A && (0, i.jsx)(t7, { handleClose: a, sku: A, application: I }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: t2.Du, children: [U(), v()] }),
                        getLeftColumnComponent: U,
                        getRightColumnComponent: v,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === S?.id || o.length > eE.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = N.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(nB, {
                paymentModalStepProps: e,
                layout: r.X.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: a,
            });
        },
        [o.pn.REVIEW]: I._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(tG, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: l, applicationId: r, isGift: s, skuId: a, ...o } = e;
            return (
                ((e) => {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, tM.h)(t);
                    N.useEffect(() => {
                        null == l ||
                            null == n ||
                            tR.A.isFetchingForSKU(n) ||
                            null != tx.A.get(n) ||
                            (0, ty.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: r, skuId: a }),
                (0, i.jsx)(W.CheckoutRootProvider, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: r,
                    skuIDs: [a],
                    purchaseType: e6.VV.ONE_TIME,
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
        tenantAnalyticsLocation: T.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, tK.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => em.intl.string(em.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => em.intl.string(em.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(K.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var t3 = n(274971),
    t6 = n(480642),
    t5 = n(944355),
    t4 = n(977445),
    t9 = n(908419),
    ne = n(211287),
    nt = n(623373),
    nn = n(739508),
    nl = n(715054);
(0, s.A)();
var nr = n(136857),
    ni = n(158317),
    ns = n(855104),
    na = n(426398);
n(322076);
var no =
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
    nu = n(289873),
    nc = n(241989),
    nd = n(576052),
    nC = n(120992),
    np = n(194256),
    n_ = n(319820),
    nE = n(327105),
    nm = n(200766);
let nT = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, n_.AO)({ sku: t }),
            s = (0, np.oO)(l);
        r ? (s = em.intl.string(nE.default.qwSlCO)) : (0, nt.Ab)(l) && (s = em.intl.string(em.t["0TmQRG"]));
        let a = (0, np.dL)(t),
            o = (0, q.EZ)(t.id) ? nd.m[t.id].render({ className: nm.$ }) : (0, i.jsx)(nc.WH, { sku: t, product: l });
        return (0, i.jsx)(nc.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: tk.C,
        });
    },
    nI = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, nC.c)({ applicationId: (0, _.P)(t), skuIDs: [t] });
        let l = (0, et.bG)([tx.A], () => tx.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(nu.y, { type: nu.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(nT, { sku: l, orbPriceAmount: n });
    },
    nS = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(t5.vW, { label: em.intl.string(em.t.y0WGqP), value: null != t ? `${t}` : "", Icon: tk.C });
    },
    nO = () => em.intl.string(em.t.wmcDyu);
function nA() {
    let { immediateDelivery: e } = (0, t9.U)(),
        t = nO();
    return (0, i.jsx)(t5._P, {
        variant: { type: t5.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let nh = (0, N.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    nN = () => (0, N.useContext)(nh),
    ng = { payment_gateway: e6.kM.VIRTUAL_CURRENCY, currency: e7.Yri.DISCORD_ORB },
    nf = {
        CHECKOUT_FLOW: r.C.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: r,
                        onRedeemVirtualCurrency: s,
                        skuId: a,
                        analyticsSourceLocation: u,
                    } = nN(),
                    { primaryButtonProps: c, ...d } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                isRedeeming: r,
                                orbRedemptionError: s,
                                onRedeemVirtualCurrency: a,
                                handleStepChange: u,
                            } = e,
                            { enabled: c } = ne.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: d, orderOrbPriceAmount: C } = (0, es.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: p,
                                orbPriceAmount: T,
                                orbBalanceToDisplay: I,
                                onClickCheckout: S,
                                showCollectiblesDiscountWarning: O,
                                errorMessage: A,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: l,
                                        orbProductContext: r,
                                        analyticsSourceLocation: i,
                                        handleStepChange: s,
                                    } = e,
                                    { analyticsLocations: a } = (0, B.Ay)(),
                                    {
                                        selectedSkuId: u,
                                        setPurchaseState: c,
                                        firstConstraintReasonCode: d,
                                    } = (0, es.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    C = (0, ns.gN)(),
                                    p = (0, N.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: T } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: i } = (0, el.V)(),
                                            { hasPaymentSources: s } = (0, na.jm)(),
                                            {
                                                loadId: a,
                                                startTime: u,
                                                discoverySessionId: c,
                                            } = (0, es.t4)((e) => e.contextMetadata),
                                            d = (0, N.useMemo)(
                                                () => ({
                                                    load_id: a,
                                                    discovery_session_id: c,
                                                    application_id: (0, _.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: i,
                                                    payment_gateway: e6.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: e7.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: e7.frM[e7.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: m.r.UNIFIED,
                                                        checkout_flow: td.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [a, c, i, t, l, r, n],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, N.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === e7.HAw.PAYMENT_FLOW_STARTED
                                                        ? E.default.track(e7.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...d,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: e6.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === e7.HAw.PAYMENT_FLOW_LOADED
                                                          ? E.default.track(e7.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...d,
                                                                has_saved_payment_source: s,
                                                                initial_step: o.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === e7.HAw.PAYMENT_FLOW_CANCELED
                                                            ? E.default.track(e7.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...d,
                                                                  duration_ms: n,
                                                              })
                                                            : e === e7.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? E.default.track(e7.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...d,
                                                                    duration_ms: n,
                                                                })
                                                              : e === e7.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? E.default.track(e7.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                  })
                                                                : E.default.track(e7.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [u, d, s],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: r,
                                        analyticsLocations: a,
                                        analyticsSourceLocation: i,
                                    });
                                (0, N.useEffect)(() => {
                                    null != l &&
                                        null !== p.current &&
                                        (T(e7.HAw.PAYMENT_FLOW_FAILED, l), (p.current = null));
                                }, [l, T]);
                                let I = (0, N.useCallback)(() => {
                                        (p.current = C),
                                            T(e7.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(tT.h.COMPLETED),
                                                    s(o.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, C, T, s]),
                                    S = p.current ?? C,
                                    O = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, eH.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, N.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof ni.FY && null != t)
                                                    switch (t) {
                                                        case no.INSUFFICIENT_ORB_BALANCE:
                                                            return em.intl.string(em.t.keFvXM);
                                                        case no.SKU_ALREADY_OWNED:
                                                            return em.intl.string(em.t.m371Mx);
                                                        case no.BUNDLE_PARTIALLY_OWNED:
                                                            return em.intl.string(em.t.v9oC0p);
                                                        default:
                                                            return em.intl.string(em.t.fqJZ11);
                                                    }
                                                return e instanceof ni.j2
                                                    ? em.intl.string(em.t["2BmwgV"])
                                                    : e.code === nr.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? em.intl.string(em.t.keFvXM)
                                                      : e.code === nr.tG.ALREADY_PURCHASED
                                                        ? em.intl.string(em.t.m371Mx)
                                                        : em.intl.string(em.t.fqJZ11);
                                            })(l, d),
                                        [l, d],
                                    ),
                                    orbPriceAmount: O,
                                    orbBalanceToDisplay: S,
                                    onClickCheckout: I,
                                    selectedSkuId: u,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                orbRedemptionError: s,
                                onRedeemVirtualCurrency: a,
                                handleStepChange: u,
                            }),
                            h = (0, g.bG)([tx.A], () => tx.A.get(t), [t]),
                            f = (0, t4.uS)(h?.applicationId),
                            {
                                disabled: P,
                                tooltipText: x,
                                text: R,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: r, tooltipText: i } = (0, N.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: em.intl.string(em.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: em.intl.string(em.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: r, tooltipText: i, text: nO() };
                            })({ orbBalance: I, orbPriceAmount: c ? d : T, isInTestMode: f }),
                            U = (0, N.useMemo)(
                                () => ({ onClick: S, loading: r, text: R, disabled: P, tooltipText: x }),
                                [S, r, R, P, x],
                            ),
                            v = O ? em.intl.format(em.t.fsOXXO, {}) : null,
                            L = f ? em.intl.string(em.t.OvMyMd) : null;
                        return {
                            isStepLoading: p,
                            upperInlineNoticeProps: (0, N.useMemo)(() => {
                                if (null != L || null != v || null != A) {
                                    let e = [];
                                    return (
                                        null != L &&
                                            e.push({ type: "warning", message: L, key: "test-mode-warning-notice" }),
                                        null != v &&
                                            e.push({ type: "warning", message: v, key: "orb-checkout-warning-notice" }),
                                        null != A &&
                                            e.push({ type: "critical", message: A, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [L, v, A]),
                            purchaseItemContent: (0, i.jsx)(nI, { skuId: t, orbPriceAmount: c ? C : T }),
                            paymentMethodContent: (0, i.jsx)(nS, { orbBalance: I }),
                            legalContent: (0, i.jsx)(nA, {}),
                            primaryButtonProps: U,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: a,
                        analyticsSourceLocation: u,
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: r,
                        onRedeemVirtualCurrency: s,
                        handleStepChange: t,
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ep.dZ, { children: (0, i.jsx)(t3.T, { ...d }) }),
                        (0, i.jsx)(ep.UX, { children: (0, i.jsx)(t6.lo, { primaryButtonProps: c }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: l, children: r } = e,
                    { order: s, setOrder: a } = (0, es.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: o,
                        isRedeeming: u,
                        orbRedemptionError: c,
                        onRedeemVirtualCurrency: d,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: r, order: i } = e,
                            s = (0, g.bG)([eL.default], () => eM.Ay.canUseShopDiscounts(eL.default.getCurrentUser())),
                            a = (0, g.bG)([tx.A], () => tx.A.get(t), [t]),
                            o = (0, tZ.JL)({ sku: a }),
                            { product: u } = (0, ey.q)(t),
                            c = (0, N.useMemo)(() => {
                                if (null != o) return { orbPriceAmount: o.amount };
                                if (null != u) {
                                    let e = (0, nt.CW)({ product: u, hasShopDiscount: s });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [o, u, s]);
                        c?.orbPriceAmount == null &&
                            (0, nn.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: d,
                                isSubmitting: C,
                                error: p,
                            } = (0, nl.Q)({ skuId: t, loadId: n, order: i, onSignFailure: r }),
                            _ = (0, N.useCallback)(
                                (e) => {
                                    d(t, n, (n) => {
                                        l?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, d, l],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            orbProductContext: c,
                            onRedeemVirtualCurrency: _,
                            isRedeeming: C,
                            orbRedemptionError: p,
                        };
                    })({ skuId: t, loadId: n, order: s, onSignFailure: a }),
                    C = (0, N.useMemo)(
                        () => ({
                            orbProductContext: o,
                            isRedeeming: u,
                            orbRedemptionError: c,
                            onRedeemVirtualCurrency: d,
                            skuId: t,
                            analyticsSourceLocation: l,
                        }),
                        [o, u, c, d, t, l],
                    );
                return (0, i.jsx)(nh.Provider, { value: C, children: r });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l } = nN(),
                    r = ((e) => {
                        let { orbProductContext: t, overrideAnalyticParams: n } = e;
                        return {
                            analyticsDataOverride: (0, N.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...n,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, n]),
                            skipConfirm: !0,
                        };
                    })({ orbProductContext: l, overrideAnalyticParams: ng });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: ng,
        },
    },
    nP = {
        [r.C.ORB_CHECKOUT]: {
            flowType: r.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: e7.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nf,
        },
        [r.C.COLLECTIBLES_CHECKOUT]: {
            flowType: r.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: e7.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tn,
        },
        [r.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: e7.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: t8,
        },
        [r.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.PREMIUM_CHECKOUT,
            purchaseType: e7.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: tP,
        },
        [r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [r.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: e7.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tL,
        },
        [r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [r.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: e7.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: G,
            flowType: r.C.GUILD_PRODUCT_CHECKOUT,
        },
        [r.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: tu,
            purchaseType: e7.VVm.SUBSCRIPTION,
        },
        [r.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: r.C.GUILD_BOOST_CHECKOUT },
    };
var nx = n(735305),
    nR = n(169801),
    nU = n(380619),
    nv = n(295405),
    nL = n(558620);
let nM = (e) => {
        let { returnStep: t = o.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
            { purchaseType: r } = (0, es.t4)((e) => ({ purchaseType: e.purchaseType })),
            s = N.useCallback(
                () =>
                    ((e) => {
                        let {
                            paymentModalStepProps: t,
                            returnStep: n = o.pn.REVIEW,
                            returnStepIfNoPaymentSources: l,
                            purchaseType: r,
                        } = e;
                        if (0 === Object.keys(nv.A.paymentSources).length) {
                            if (null != l) return void t.handleStepChange(l);
                            r === e6.VV.SUBSCRIPTION
                                ? t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS })
                                : t.handleClose();
                        } else t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS });
                    })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l, purchaseType: r }),
                [t, n, l, r],
            );
        return (0, i.jsx)(nx.x, { ...l, onReturn: s });
    },
    ny = (e) => {
        let { initialPlanId: t, referralTrialOfferId: n } = e,
            l = (0, es.t4)((e) => e.selectedSkuId),
            r = (0, nL.A)(),
            { isGift: s, claimableRewards: a } = (0, Y.Pv)(),
            u = (0, nR.A)({ isGift: s, skuId: l, referralTrialOfferId: n }),
            c = (0, tA.lp)(u),
            d = (0, nU.px)(r, s, a),
            C = N.useMemo(() => {
                let e = null == t ? o.pn.PLAN_SELECT : o.pn.REVIEW;
                return c && (e = o.pn.REVIEW), d && (e = o.pn.SELECT_FREE_SKU), e;
            }, [c, d, t]);
        return (0, i.jsx)(nM, { paymentModalStepProps: e, returnStep: o.pn.REVIEW, returnStepIfNoPaymentSources: C });
    },
    nj = (e) => {
        let {
            checkoutFlow: t,
            returnStep: n = o.pn.REVIEW,
            returnStepIfNoPaymentSources: l,
            paymentModalStepProps: s,
        } = e;
        return t === r.C.PREMIUM_CHECKOUT
            ? (0, i.jsx)(ny, { ...s })
            : (0, i.jsx)(nM, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: l });
    };
var nk = n(86379),
    nF = n(545075);
let nb = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, N.useRef)(!1),
            r = (0, nk.Hp)(),
            { handleStepChange: s } = t;
        return ((0, N.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(nF.oO, {})
            : null;
    },
    nD = {
        [r.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [r.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [r.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [r.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [r.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [r.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [r.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [r.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    };
class nw {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = nP[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = nD[e]),
            (this.override_analytic_params =
                this.tenantCheckoutFlowConfig.TENANT_PROVIDER_CONFIGS.overrideAnalyticParams);
    }
    getCheckoutStep(e) {
        return this.tenantCheckoutFlowConfig.CHECKOUT_STEPS[e];
    }
    generateRenderHeader() {
        let { CustomHeaderComponent: e } = this.tenantCheckoutFlowConfig;
        if (null != e) return (t, n, l) => (0, i.jsx)(e, { plan: t, onClose: n, step: l });
    }
    getPredicateStepConfig() {
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? u.kO
            : "subscription" === e
              ? u.r3
              : {
                    key: null,
                    renderStep: (e) => (0, i.jsx)(nb, { paymentModalStepProps: e, defaultStep: o.pn.REVIEW }),
                };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== r.C.ORB_CHECKOUT)
            return {
                key: o.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, i.jsx)(nj, {
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
                renderStep: (e) => (0, i.jsx)(l, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => em.intl.string(em.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(o.pn.REVIEW);
        return {
            key: o.pn.REVIEW,
            renderStep: (t) => (0, i.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => em.intl.string(em.t.QBnNHq) },
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
            c = this.getReviewStepConfig(),
            d = this.createDefinedStepConfigsArray([i, ...(null != s ? [s] : []), ...l, a, ...(r ? [] : u.hh), c]);
        return null != n && d.push({ key: o.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), d;
    }
    getApplicationId(e) {
        return this.checkoutFlow === r.C.ORB_CHECKOUT && null != e
            ? (0, _.P)(e)
            : this.checkoutFlow === r.C.COLLECTIBLES_CHECKOUT
              ? e7.FYj
              : this.checkoutFlow === r.C.PREMIUM_CHECKOUT
                ? eE.tv
                : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
            loadId: t,
            skuId: n,
            skuProductLine: l,
            applicationId: i,
            discoverySessionId: s,
            analyticsLocation: a,
            analyticsLocations: o,
            analyticsObject: u,
            analyticsSourceLocation: c,
            isGift: d,
            eligibleForTrial: C,
        } = e;
        E.default.track(e7.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: s,
            payment_type: e7.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: d,
            sku_id: n,
            sku_product_line: l,
            application_id: i,
            location: a ?? u,
            location_stack: o,
            source: c,
            eligible_for_trial: C,
            payment_modal_version: "v2",
            checkout_design: m.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === r.C.PREMIUM_CHECKOUT ? { subscription_type: e7.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    openCheckoutModal(e) {
        let {
                modalAPIOptions: t,
                additionalOptions: l,
                giftContextProps: o,
                onComplete: u,
                onClose: c,
                skuId: d,
                skuProductLine: _,
                discoverySessionId: E,
                applicationId: m,
                analyticsSourceLocation: T,
                analyticsLocations: I,
                analyticsObject: S,
                tenantParams: O,
                activeSubscription: A = null,
                ...h
            } = e,
            N = { current: (this.checkoutFlow === r.C.PREMIUM_CHECKOUT ? (0, p.A)() : null) ?? (0, s.A)() },
            g = { current: null },
            f = (e) => {
                (N.current = e.id), (g.current = e);
            },
            { modalKey: P } = t,
            x = this.generateRenderHeader(),
            R = m ?? this.getApplicationId(d),
            U = !!(null != o && o.isGift),
            v = !1;
        return (0, a.openModalLazy)(
            async () => {
                let { UnifiedCheckoutInstance: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: U });
                return (n) =>
                    (0, i.jsx)(e, {
                        ...h,
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != u && u(e), (v = !0);
                        },
                        onClose: c,
                        renderHeader: x,
                        skuId: d ?? null,
                        tenantParams: O ?? {},
                        loadId: N.current,
                        onOrderCreated: f,
                        discoverySessionId: E,
                        activeSubscription: A,
                        applicationId: R,
                        analyticsLocations: I,
                        analyticsObject: S,
                        analyticsSourceLocation: T,
                        renderModalProps: n,
                        giftContextProps: o,
                        additionalOptions: l,
                    });
            },
            {
                ...t,
                onCloseRequest: () => {
                    null != t.onCloseRequest && t.onCloseRequest(v, N.current),
                        t.skipCloseModalOnCloseRequest || (0, a.closeModal)(P);
                },
                onCloseCallback: () => {
                    v ||
                        (C({ checkoutSucceeded: v, order: g.current }),
                        this.trackPaymentFlowCanceled({
                            loadId: N.current,
                            skuId: d,
                            skuProductLine: _,
                            applicationId: R,
                            discoverySessionId: E,
                            analyticsLocation: h.analyticsLocation,
                            analyticsLocations: I,
                            analyticsObject: S,
                            analyticsSourceLocation: T,
                            isGift: U,
                            eligibleForTrial: null != h.trialId,
                        })),
                        null != t.onCloseCallback && t.onCloseCallback(v),
                        null != c && c(v, d);
                },
                modalKey: P,
            },
        );
    }
}
var nH = n(71804);
n(584160);
var nG = n(981036),
    nK = n(367644);
let nB = (e) => {
        let {
                paymentModalStepProps: { handleStepChange: t },
                layout: n,
                renderStepBody: l,
                renderLeftColumn: s,
                renderRightColumn: a,
                primaryCTAButtonProps: u,
                onBackClick: c,
            } = e,
            { hasPaymentSources: d } = (0, na.jm)(),
            C = d ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
            p = N.useCallback(() => t(C), [t, C]),
            _ = N.useMemo(
                () =>
                    n === r.X.CUSTOM_STEP_BODY ? l() : (0, i.jsxs)("div", { className: nK.D, children: [s(), a()] }),
                [n, l, s, a],
            ),
            E = N.useMemo(() => ({ ...u, onClick: p, text: em.intl.string(em.t.XiOHRX) }), [u, p]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ep.dZ, { children: _ }),
                (0, i.jsx)(ep.UX, { children: (0, i.jsx)(nG.cy, { onBackClick: c, primaryCTAButtonProps: E }) }),
            ],
        });
    },
    nW = null,
    nV = null,
    nY = null,
    nz = null,
    nZ = null,
    nX = null,
    nQ = null,
    nq = {
        [r.C.ORB_CHECKOUT]: {
            get: function () {
                return null == nW && (nW = new nw({ checkoutFlow: r.C.ORB_CHECKOUT })), nW;
            },
        },
        [r.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return null == nV && (nV = new nw({ checkoutFlow: r.C.COLLECTIBLES_CHECKOUT })), nV;
            },
        },
        [r.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return null == nY && (nY = new nw({ checkoutFlow: r.C.SLAYER_STOREFRONT_CHECKOUT })), nY;
            },
        },
        [r.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == nz && (nz = new nw({ checkoutFlow: r.C.PREMIUM_APPS_OTP_CHECKOUT })), nz;
            },
        },
        [r.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return null == nZ && (nZ = new nw({ checkoutFlow: r.C.GUILD_PRODUCT_CHECKOUT })), nZ;
            },
        },
        [r.C.GUILD_ROLE_CHECKOUT]: {
            get: function () {
                return null == nX && (nX = new nw({ checkoutFlow: r.C.GUILD_ROLE_CHECKOUT })), nX;
            },
        },
        [r.C.PREMIUM_CHECKOUT]: {
            get: function () {
                return null == nQ && (nQ = new nw({ checkoutFlow: r.C.PREMIUM_CHECKOUT })), nQ;
            },
        },
    };
