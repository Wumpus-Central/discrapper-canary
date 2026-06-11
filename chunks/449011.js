n.d(t, { o: () => n$ }), n(321073);
var l,
    r = n(627968),
    i = n(835245),
    a = n(192308),
    s = n(231723),
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
    m = n(310829),
    _ = n(174459),
    E = n(75304),
    T = n(145659),
    I = n(793574),
    S = n(529427),
    h = n(862241),
    A = n(284009),
    O = n.n(A),
    x = n(964486),
    f = n(666646),
    P = n(64700),
    g = n(17928),
    N = n(871109);
let R = P.createContext(void 0);
function v() {
    let e = P.useContext(R);
    return O()(null != e, "GuildProductPurchaseContext not found"), e;
}
function U(e) {
    let { children: t, skuId: n, ...l } = e,
        i = (0, g.bG)([N.A], () => N.A.getGuildProduct(n));
    return (
        O()(null != i, "guildProductListing cannot be null"),
        (0, r.jsx)(R.Provider, { value: { guildProductListing: i, ...l }, children: t })
    );
}
function y(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: i } = v(),
        s = (0, f.sw)();
    return (
        (0, x.Ay)(() => {
            var e;
            O()(null != s, "invoicePreview cannot be null"),
                (e = { guildId: i, guildProductListingId: l.id, invoicePreview: s }),
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("31344"),
                        n.e("47539"),
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
var j = n(503698),
    M = n.n(j),
    L = n(939249),
    k = n(789645),
    F = n(935462),
    b = n(303612),
    w = n(916261),
    D = n(575650);
function H(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(L.D, {
        className: M()(w.cG, t),
        onClick: n,
        children: (0, r.jsx)(k.P, { size: "xs", color: "currentColor", className: w.yP }),
    });
}
function G(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, r.jsxs)(F.rQ, {
        className: M()(w.wx, D.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(b.A, { className: w.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(H, { className: w.b, onClose: n }),
        ],
    });
}
var K = n(196617);
let B = {
    CHECKOUT_FLOW: S.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [o.pn.REVIEW]: h._M },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, r.jsx)(U, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: I.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = v();
        return n === o.pn.CONFIRM
            ? null
            : (0, r.jsx)(G, { guildProductListing: l, className: K.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(y, { ...e }) },
};
var V = n(20742),
    W = n(688810),
    Y = n(197510),
    z = n(848149),
    Z = n(937008),
    X = n(106778),
    Q = n(228366),
    q = n(213530),
    J = n(966971),
    $ = n(758836),
    ee = n(483764);
let et = { sliderBodyClassName: ee.Bz },
    en = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: i } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(X.Fk, { ref: n, className: ee.Lb, environment: t.current }),
                (0, r.jsx)(q.K, { options: l, className: M()(ee.Oh, { [ee.R]: !i }) }),
            ],
        });
    };
var el = n(702841),
    er = n(775602),
    ei = n(31823),
    ea = n(211083),
    es = n(427675),
    eo = n(211159),
    eu = n(590180),
    ec = n(953150),
    ed = n(524246),
    eC = n(14368),
    ep = n(61750),
    em = n(972607),
    e_ = n(482132),
    eE = n(921925),
    eT = n(788868),
    eI = n(375708);
function eS(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: l,
            purchaseError: i,
            purchasePreviewError: a,
            appliedUserDiscounts: s,
        } = (0, eo.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: o } = (0, ea.o)(),
        { application: u } = (0, ei.V)(),
        c = (0, es.gU)(),
        d = (0, el.bG)([eu.A], () => eu.A.getProduct(l)),
        C = P.useRef(!1);
    O()(null != l, "Expected selectedSkuId"), O()(null != u, "Expected application");
    let p = c[l];
    O()(null != p, "Expected sku");
    let m = null != o || null != i || null != a,
        _ =
            s.length > 0
                ? eI.intl.formatToPlainString(eI.t.VuV3Td, { discountOfferAmount: s[0].discount.amount })
                : void 0;
    return (P.useEffect(() => {
        null == d ||
            m ||
            C.current ||
            ((C.current = !0),
            (0, ep.A)({
                product: d,
                overrideTitle: _,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: $.gs.FIAT,
            }));
    }, [d, n, t, m, _]),
    m)
        ? (0, r.jsx)(e_.dZ, { children: (0, r.jsx)(eE.A, {}) })
        : null;
}
function eh(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: i,
            giftRecipient: a,
            giftMessageError: s,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, Z.Pv)(),
        c = (0, el.bG)([er.A], () => er.A.useReducedMotion),
        d = P.useRef(null),
        C = (0, eo.t4)((e) => e.selectedSkuId),
        p = (0, el.bG)([eu.A], () => eu.A.getProduct(C)),
        { confettiColors: m } = (0, ec.A)(p?.styles);
    return (
        P.useEffect(() => {
            t &&
                null != a &&
                null != C &&
                (u === eT.vQ.USER_PROFILE_WISHLIST || u === eT.vQ.DM_CHANNEL_WISHLIST) &&
                Q.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: C, recipientId: a.id });
        }, [t, a, C, u]),
        t
            ? (0, r.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, r.jsx)(em.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: l,
                          hasSentMessage: i,
                          giftRecipient: a,
                          giftMessageError: s,
                          isSendingMessage: o,
                      }),
                      !e.hideConfetti &&
                          !c &&
                          (0, r.jsx)(ed.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, eC.rA)(p?.categorySkuId),
                              colors: m?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(eS, { ...e })
    );
}
var eA = n(123292),
    eO = n(859040),
    ex = n(993408),
    ef = n(575593),
    eP = n(452027),
    eg = n(922016),
    eN = n(778712),
    eR = n(834730),
    ev = n(534514),
    eU = n(986687),
    ey = n(999291),
    ej = n(903209),
    eM = n(287809),
    eL = n(428262),
    ek = n(674658),
    eF = n(898461),
    eb = n(203632),
    ew = n(892118),
    eD = n(536572),
    eH = n(14702),
    eG = n(219103),
    eK = n(525723),
    eB = n(780651);
function eV(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: i,
            previewHeaderClassName: a,
            hideProfilePreview: s,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, Z.Pv)(),
        c = (0, g.bG)([eM.default], () => eM.default.getCurrentUser()),
        d = eL.Ay.canUseShopDiscounts(c),
        C = (0, ey.Ay)(o?.id),
        p = P.useRef(null),
        [m, _] = P.useState(!1),
        { product: E } = (0, ek.q)(t, !0),
        T = P.useMemo(() => (0, ex.fT)(E, d), [E, d]),
        I = (0, eK.V_)(E);
    if (null == E || 0 === E.items.length) return null;
    let [S] = E.items,
        h = (0, eD.VG)(E),
        A = null != o && o.id !== c?.id && E.type !== ef.R.BUNDLE && S.type !== ef.R.NAMEPLATE && !s;
    return (0, r.jsxs)("div", {
        className: i,
        children: [
            (0, r.jsx)("div", {
                className: M()(eB.QU, a),
                children: (0, r.jsx)(eP.D, {
                    label: eI.intl.string(eI.t.PpoJzt),
                    children:
                        A &&
                        (0, r.jsx)(
                            eg.Y,
                            {
                                targetElementRef: p,
                                align: "center",
                                shouldShow: m,
                                onRequestClose: () => _(!1),
                                preload: () => (0, ej.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(eU.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, eN.FT)(eN._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, eF.T)(S) ? S : null,
                                        pendingProfileEffect: (0, eb.C3)(S) ? S : null,
                                        pendingProfileFrame: (0, ew.s)(S) ? S : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, r.jsx)(L.D, {
                                        ...l,
                                        className: eB.Nx,
                                        innerRef: p,
                                        onClick: (e) => {
                                            _((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            m ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(eR.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eI.intl.string(eI.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            C?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: M()(eB.i1, null != u ? eB.cN : eB.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: eB.Ug,
                        children: [
                            (0, r.jsx)(eH.O, { product: E }),
                            (0, r.jsxs)("div", {
                                className: eB.JZ,
                                children: [
                                    (0, r.jsx)(eR.E, { variant: "text-md/semibold", children: h }),
                                    (0, r.jsx)(ev.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            E?.type === ef.R.BUNDLE
                                                ? null
                                                : S.type === ef.R.AVATAR_DECORATION
                                                  ? eI.intl.string(eI.t["7v0T9P"])
                                                  : S.type === ef.R.NAMEPLATE
                                                    ? eI.intl.string(eI.t.x5CoXR)
                                                    : S.type === ef.R.PROFILE_EFFECT
                                                      ? eI.intl.string(eI.t.wR5wOo)
                                                      : S.type === ef.R.PROFILE_FRAME
                                                        ? eI.intl.string(eI.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(eG.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: T,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, r.jsx)("div", {
                            className: eB.Wh,
                            children: (0, r.jsx)(eR.E, {
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
var eW = n(783878),
    eY = n(966327),
    ez = n(427262);
let eZ = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: i } = e,
        { giftRecipient: a, setGiftRecipient: s } = (0, Z.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: l,
              children: (0, r.jsx)(eW.Z, {
                  selectionMode: "single",
                  label: eI.intl.string(eI.t.xFn72s),
                  placeholder: eI.intl.string(eI.t.R0vK0N),
                  value: a?.id,
                  onSelectionChange: (e) => {
                      let l = i.find((t) => t.id === e);
                      null != l && (n(l, t), s(l));
                  },
                  options: i.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${ez.Ay.getUserTag(e)}`,
                      leading: (0, r.jsx)(eY.A, { user: e, size: eN._3.SIZE_20 }),
                  })),
              }),
          });
};
var eX = n(735438),
    eQ = n.n(eX),
    eq = n(427358),
    eJ = n(570287),
    e$ = n(994500);
function e0() {
    let e = (0, g.yK)([e$.A], () => e$.A.getFriendIDs()),
        t = (0, g.yK)([eq.A], () =>
            eq.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: r } = e,
                        i = (0, eJ.q)(r);
                    return !t && (n >= 0.1 || l >= 0.1) && i;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = P.useMemo(() => eQ().uniq([...e, ...t]), [e, t]);
    return (0, g.yK)(
        [eM.default],
        () =>
            n.reduce((e, t) => {
                let n = eM.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var e1 = n(871181),
    e7 = n(318007),
    e6 = n(285719),
    e2 = n(976860),
    e5 = n(652215),
    e3 = n(353791);
function e8(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, W.Ay)(I.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(eA.Q, {
        text: eI.intl.string(eI.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, eO.Cz)({ analyticsLocations: l, analyticsSource: I.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, e2.pX)(`${e5.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var e4 = n(818348);
let e9 = (0, P.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        onStepChange: void 0,
    }),
    te = () => (0, P.useContext)(e9),
    tt = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = te(),
            { analyticsLocations: l } = (0, W.Ay)();
        return (0, r.jsx)(eh, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
    },
    tn = {
        [o.pn.GIFT_CUSTOMIZATION]: () => eI.intl.string(eI.t["JCFN/y"]),
        [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => eI.intl.string(eI.t.lDbi6H),
        [o.pn.CONFIRM]: () => "",
    },
    tl = (e) => {
        let { step: t } = e,
            n = tn[t];
        return null == n ? null : (0, r.jsx)(V.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    tr = {
        CHECKOUT_FLOW: S.CL.COLLECTIBLES_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.GIFT_CUSTOMIZATION]: (e) => {
                let { handleStepChange: t, handleClose: n } = e,
                    {
                        renderLeftColumn: l,
                        renderRightColumn: i,
                        ctaDisabled: a,
                        loading: s,
                    } = ((e) => {
                        let { handleStepChange: t, handleClose: n } = e,
                            {
                                customGiftMessage: l = "",
                                setCustomGiftMessage: i,
                                giftRecipientError: a,
                                setGiftRecipientError: s,
                                validatingGiftRecipient: o,
                                giftRecipient: u,
                                giftingOrigin: c,
                                setValidatingGiftRecipient: d,
                            } = (0, Z.Pv)(),
                            { selectedSkuId: C, checkoutInvoicePreview: p } = (0, eo.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            m = (0, es.gU)(),
                            E = (0, g.bG)([eM.default], () => eM.default.getCurrentUser()),
                            T = e0(),
                            I = async (e, t) => {
                                d(!0),
                                    null != a && s(),
                                    (await (0, eO.JJ)(e.id, t)) || s(eI.intl.string(eI.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, x.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== eT.vQ.DM_CHANNEL_WISHLIST &&
                                    _.default.track(e5.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                I(u, C));
                        });
                        let S = () =>
                            (0, r.jsx)(e1.A, {
                                onTextChange: (e) => i?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: e3.iX,
                                innerClassName: e3.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, r.jsx)("div", { className: e3.qL, children: (0, r.jsx)(e7.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, ex.pA)({ invoicePreview: p, selectedSkuId: C, skusById: m });
                                return c === eT.vQ.USER_PROFILE_WISHLIST || c === eT.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(e6.Z, { giftRecipient: u }),
                                              S(),
                                              null != e &&
                                                  null != C &&
                                                  (0, r.jsx)(eV, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e3.uW,
                                                      previewHeaderClassName: e3.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: e3.fi,
                                                  children: (0, r.jsx)(e8, { handleClose: n, selectedSkuId: C }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(eZ, {
                                                  selectedSkuId: C,
                                                  recipients: T,
                                                  className: e3.uh,
                                                  validateSelectedGift: I,
                                              }),
                                              S(),
                                              null != e &&
                                                  null != C &&
                                                  (0, r.jsx)(eV, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e3.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != a || null == u || u.id === E?.id || l.length > eT.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    o = P.useMemo(() => ({ loading: s, disabled: a }), [s, a]);
                return (0, r.jsx)(S.Mw, {
                    paymentModalStepProps: e,
                    layout: S.XZ.TWO_COLUMN,
                    renderLeftColumn: l,
                    renderRightColumn: i,
                    primaryCTAButtonProps: o,
                });
            },
            [o.pn.REVIEW]: h._M,
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let { skuId: t, additionalOptions: n, children: l, ...i } = e,
                    {
                        environment: a,
                        confettiCanvas: s,
                        setConfettiCanvas: o,
                        customConfettiVisible: u,
                        setCustomConfettiVisible: c,
                        customConfettiDisplayOptions: d,
                        hideConfirmStepConfetti: C,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = P.useRef(new X.OH()),
                            [l, r] = P.useState(null),
                            [i, a] = P.useState(!1),
                            s = P.useMemo(() => (0, J.AB)({ purchaseType: $.gs.FIAT, skuId: t }), [t]);
                        return {
                            environment: n,
                            confettiCanvas: l,
                            setConfettiCanvas: r,
                            customConfettiVisible: i,
                            setCustomConfettiVisible: a,
                            customConfettiDisplayOptions: s,
                            hideConfirmStepConfetti: null != s,
                        };
                    })({ skuId: t }),
                    p = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    m = null != n ? n.onStepChange : void 0,
                    _ = (0, P.useMemo)(
                        () => ({
                            skuIDs: p,
                            setCustomConfettiVisible: c,
                            hideConfirmStepConfetti: C,
                            confettiCanvas: s,
                            onStepChange: m,
                        }),
                        [p, c, C, s, m],
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(en, {
                            environment: a,
                            setConfettiCanvas: o,
                            customConfettiDisplayOptions: d,
                            customConfettiVisible: u,
                        }),
                        (0, r.jsx)(Y.CheckoutRootProvider, {
                            ...i,
                            skuIDs: p,
                            stepConfigs: i.stepConfigs,
                            activeSubscription: null,
                            purchaseType: e4.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, r.jsx)(e9.Provider, { value: _, children: l }),
                        }),
                    ],
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { skuIDs: l, setCustomConfettiVisible: r, onStepChange: i } = te(),
                    { isGift: a } = (0, Z.Pv)(),
                    s = (0, z.J)(),
                    {
                        paymentModalSkuId: o,
                        paymentModalOnClose: u,
                        paymentModalOnComplete: c,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: r } = e,
                            i = t[0] ?? null,
                            a = P.useCallback(() => {
                                r(!0), l?.();
                            }, [l, r]);
                        return {
                            paymentModalSkuId: i,
                            paymentModalOnClose: P.useCallback(
                                (e) => {
                                    r(!1), n(e), Q.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, r],
                            ),
                            paymentModalOnComplete: a,
                        };
                    })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: r }),
                    d = P.useCallback(
                        (e) => {
                            u(e), e && a && s();
                        },
                        [u, a, s],
                    );
                return n({ ...t, skuId: o, onClose: d, onComplete: c, applicationId: e5.FYj, onStepChange: i });
            },
            tenantAnalyticsLocation: I.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, Z.Pv)();
            return n ? (0, r.jsx)(tl, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(tt, { ...e }), options: et },
    };
var ti = n(354033),
    ta = n(786300),
    ts = n(491057),
    to = n(394584);
let [tu, tc] = (0, ta.A)(),
    td = {
        CHECKOUT_FLOW: S.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: h._M },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: l,
                    } = e,
                    i = P.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(tu.Provider, { value: i, children: (0, r.jsx)(ts.Qt, { children: l }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: (e) => {
            let { onClose: t, step: n } = e,
                { guildId: l, listing: i } = tc();
            return (0, r.jsx)(ti.Y, { onClose: t, listing: i, step: n, guildId: l });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(to._, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var tC = n(73825),
    tp = n(120700),
    tm = n(960851),
    t_ = n(117945),
    tE = n(344159),
    tT = n(561794),
    tI = n(97352),
    tS = n(166403),
    th = n(566980),
    tA = n(615310),
    tO = n(811656),
    tx = n(363373),
    tf = n(800471),
    tP = n(941796),
    tg = n(957489),
    tN = n(822426);
let tR = [
        {
            key: o.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(tg.F, { ...e }),
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
            renderStep: (e) => (0, r.jsx)(tN.K, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: o.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(tP.Z, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, tf.lp)(e) ? null : eI.intl.string(eI.t["r+SebU"])),
                sectionHeaderText: () => eI.intl.string(eI.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: o.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(tx.j, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    tv = {
        CHECKOUT_FLOW: tp.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: tR,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: h._M },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            confirmationFooter: t,
                            defaultPlanId: n,
                            referralCode: l,
                            referralTrialOfferId: i,
                            subscriptionTier: a,
                            subscription: s,
                        },
                        stepConfigs: u,
                        loadId: c,
                        giftContextProps: d = { isGift: !1, giftRecipient: null },
                        renderModalProps: C,
                        children: p,
                    } = e,
                    m = (0, g.bG)([tS.A], () => tS.A.getPremiumTypeSubscription()),
                    _ = (0, tm.cg)() ? eT.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: E, giftRecipient: T } = d;
                if (null != a && !Object.values(eT.pe).includes(a))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, tT.tA)({ giftRecipient: T, isGift: E ?? !1 }),
                    S = P.useMemo(
                        () =>
                            I
                                ? u.map((e) =>
                                      e.key === o.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : u,
                        [u, I],
                    ),
                    h = null != s ? s : m,
                    A = !E && null != h && h.isPurchasedExternally && null != h.paymentGateway;
                (0, tE.s)(h, () => C.onClose(), E ?? !1);
                let O = P.useMemo(() => [...eT.oz], []);
                return A
                    ? null
                    : (0, r.jsx)(Y.CheckoutRootProvider, {
                          loadId: c,
                          activeSubscription: h,
                          stepConfigs: S,
                          skuIDs: O,
                          isGift: E,
                          defaultPlanId: _ ?? n,
                          referralCode: l,
                          referralTrialOfferId: i,
                          unifiedCheckoutFlow: tp.C.PREMIUM_CHECKOUT,
                          children: (0, r.jsx)(ts.Qt, { confirmationFooter: t, children: p }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { onClose: l, renderPurchaseConfirmation: i, continueSessionToInitialStep: a } = t;
                P.useEffect(() => {
                    tI.A.isLoadedForPremiumSKUs() || Q.h.wait(() => (0, tC.zS)());
                }, []);
                let { selectedSkuId: s, purchaseState: u } = (0, eo.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    c = (0, tA.bB)(),
                    {
                        isGift: d,
                        selectedGiftingPromotionReward: C,
                        openGiftingBadgePostPurchaseModal: p,
                    } = (0, Z.Pv)(),
                    m = P.useCallback(
                        (e, t) => {
                            l(e, t), e && d && null == C && p();
                        },
                        [l, d, C, p],
                    ),
                    _ = (0, t_.T)(d, s),
                    E = u === th.h.PURCHASING;
                return (0, r.jsx)(tO.A, {
                    isConfirmationStep: c === o.pn.CONFIRM && null == a && null == i,
                    isEligibleForWowMoment: _,
                    shouldPrefetchWowMoment: E,
                    children: n({
                        ...t,
                        onClose: m,
                        analyticsSubscriptionType: e5.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: eT.LE,
                    }),
                });
            },
            tenantAnalyticsLocation: I.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(to._, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var tU = n(753390),
    ty = n(143582),
    tj = n(897904),
    tM = n(967198),
    tL = n(975965),
    tk = n(924076),
    tF = n(984742),
    tb = n(155301),
    tw = n(758655);
let tD = {
    CHECKOUT_FLOW: tp.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    CustomCheckoutPredicateStep: tb.A,
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            l = P.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(tj.fs, { step: t, onClose: l });
    },
    STEPS_BEFORE_CHECKOUT: [
        {
            key: o.pn.BENEFITS,
            renderStep: (e) => (0, r.jsx)(tk.A, { ...e }),
            options: { useBreadcrumbLabel: () => eI.intl.string(eI.t["5LD2+B"]) },
        },
    ],
    CHECKOUT_STEPS: { [o.pn.REVIEW]: tw.A },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let {
                    loadId: t,
                    applicationId: n,
                    activeSubscription: l,
                    stepConfigs: i,
                    skuId: a,
                    tenantParams: s,
                    children: o,
                } = e,
                { guildId: u, showBenefitsFirst: c } = s;
            return (0, r.jsx)(Y.CheckoutRootProvider, {
                loadId: t,
                applicationId: n,
                activeSubscription: l,
                stepConfigs: i,
                skuIDs: [a],
                unifiedCheckoutFlow: tp.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                children: (0, r.jsx)(tL.ApplicationCheckoutContextProvider, {
                    guildId: u,
                    showBenefitsFirst: c,
                    children: (0, r.jsx)(ts.Qt, { children: o }),
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
                a = t.onComplete,
                s = P.useCallback(
                    (e) => {
                        i(e),
                            e &&
                                null != r &&
                                (tU.hP(),
                                (0, ty.f5)(r),
                                null != a && a(),
                                null != r && (l || tM.A.getGuildId() !== r) && (0, e2.pX)(e5.BVt.CHANNEL(r)));
                    },
                    [i, a, l, r],
                );
            return n({ ...t, onClose: s, forceNewPaymentModal: !0 });
        },
        tenantAnalyticsLocation: I.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(tF.A, { ...e }) },
};
var tH = n(67480),
    tG = n(328968),
    tK = n(371794),
    tB = n(565756);
o.pn.GIFT_CUSTOMIZATION;
let tV = {
    CHECKOUT_FLOW: S.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, Z.Pv)(),
                i = (0, eo.t4)((e) => e.selectedSkuId),
                a = (0, g.bG)([eM.default], () => eM.default.getCurrentUser()),
                s = (0, g.bG)([tH.A], () => (null != i ? tH.A.get(i) : null), [i]),
                o = e0(),
                u = (0, g.bG)([tG.A], () => (null != i ? tG.A.getForSKU(i) : null), [i]),
                c =
                    u?.headerBackground != null && s?.applicationId != null
                        ? (0, tK.YE)(s.applicationId, u.headerBackground, 256)
                        : void 0,
                d = async (e, t) => {},
                C = null == l || l.id === a?.id || t.length > eT.Jo,
                p = P.useMemo(() => ({ disabled: C }), [C]);
            return (0, r.jsx)(S.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: S.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: tB.P6,
                        children: [
                            s?.name != null &&
                                (0, r.jsx)(ev.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: s.name,
                                }),
                            null != c && (0, r.jsx)("img", { src: c, alt: s?.name ?? "", className: tB.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, r.jsxs)("div", {
                        className: tB.P6,
                        children: [
                            (0, r.jsx)(eZ, { recipients: o, selectedSkuId: i, validateSelectedGift: d }),
                            (0, r.jsx)(e1.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: tB.iX,
                                innerClassName: tB.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: p,
            });
        },
        [o.pn.REVIEW]: h._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: u.zX,
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: I.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var tW = n(429913),
    tY = n(733391),
    tz = n(821609),
    tZ = n(318254),
    tX = n(262427),
    tQ = n(510022),
    tq = n(317560),
    tJ = n(366523),
    t$ = n(208733);
function t0(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, W.Ay)(),
        { selectedSkuId: l, entitlementsGranted: i } = (0, eo.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, ei.V)(),
        s = (0, es.gU)(),
        { isGift: o, giftRecipient: u } = (0, Z.Pv)();
    O()(null != l, "Expected selectedSkuId"), O()(null != a, "Expected application");
    let c = s[l];
    O()(null != c, "Expected sku");
    let d = i.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (P.useEffect(() => {
            o || ((0, tq.j)(), t(), (0, tQ.n)({ sku: c, application: a, analyticsLocations: n, orbsReward: C }));
        }, [o, c, a, t, n, C]),
        !o)
    )
        return null;
    let p = null != C && C > 0;
    return (0, r.jsxs)(e_.dZ, {
        children: [
            (0, r.jsx)(eE.A, {}),
            (0, r.jsxs)("div", {
                className: t$.EL,
                children: [
                    (0, r.jsx)(tJ.e, { sku: c, shape: "square", containerClassName: t$.LC }),
                    (0, r.jsx)(ev.D, {
                        variant: "heading-xl/semibold",
                        className: t$.RS,
                        children: eI.intl.string(eI.t["5glWta"]),
                    }),
                    (0, r.jsx)(eR.E, {
                        variant: "text-md/normal",
                        children: eI.intl.formatToPlainString(eI.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    p &&
                        (0, r.jsx)("div", {
                            className: t$.Is,
                            children: (0, r.jsx)(tX.J, {
                                Icon: tZ.C,
                                text: eI.intl.format(eI.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: t$.UD,
                        children: (0, r.jsx)(tz.$, { onClick: t, text: eI.intl.string(eI.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var t1 = n(889137),
    t7 = n(742158),
    t6 = n(683071),
    t2 = n(313961),
    t5 = n(238017),
    t3 = n(650588),
    t8 = n(723090),
    t4 = n(763827),
    t9 = n(403362),
    ne = n(871123),
    nt = n(832163),
    nn = n(44724),
    nl = n(980094),
    nr = n(806931),
    ni = n(107610);
function na(e) {
    let { handleClose: t, sku: n, application: l } = e,
        i = P.useCallback(() => {
            (0, nn.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        s = P.useCallback(() => {
            t();
            let e = nt.A.getStorefrontState(n.applicationId)?.activePage;
            (0, ne.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: l?.guildId,
                skuId: n.id,
            }) ||
                ((0, a.closeAllModals)(),
                (0, nn.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, l]);
    return (0, r.jsx)("div", {
        className: ni.$O,
        children: (0, r.jsx)(eA.Q, {
            text: eI.intl.string(eI.t.ImioFL),
            onMouseDown: i,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let ns = {
    CHECKOUT_FLOW: S.CL.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: l, disabled: i } = ((e) => {
                    var t;
                    let n,
                        l,
                        i,
                        { handleStepChange: a, handleClose: s } = e,
                        {
                            customGiftMessage: o = "",
                            setCustomGiftMessage: u,
                            giftRecipient: c,
                            emojiConfetti: d,
                            soundEffect: C,
                            setEmojiConfetti: p,
                            setSoundEffect: m,
                            giftingOrigin: _,
                            additionalUserIds: E,
                        } = (0, Z.Pv)(),
                        T = (0, eo.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, ei.V)(),
                        S = (0, g.bG)([eM.default], () => eM.default.getCurrentUser()),
                        h =
                            ((t = S?.id),
                            (n = e0()),
                            (l = (function (e) {
                                let t = (0, g.bG)([t4.A], () => (t4.A.isConnected() ? t4.A.getChannelId() : null)),
                                    [n, l] = P.useState([]);
                                return (
                                    P.useEffect(() => {
                                        let n = null != t ? t2.A.getParticipants(t) : [],
                                            r = [],
                                            i = new Set();
                                        for (let t of n)
                                            (!(0, nr.Xw)(t) && !(0, nr.Ay)(t)) ||
                                                t.user.id === e ||
                                                i.has(t.user.id) ||
                                                (i.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, nr.Ay)(e) && !(0, nr.Ay)(t)
                                                ? -1
                                                : (0, nr.Ay)(t) && !(0, nr.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (i = (0, g.yK)([eM.default], () => E?.map(eM.default.getUser).filter(t9.Vq) ?? [], [E])),
                            P.useMemo(
                                () =>
                                    eQ().uniqWith(
                                        [...(null != c ? [c] : []), ...i, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, i, l, n],
                            )),
                        A = (0, g.bG)([tH.A], () => (null != T ? tH.A.get(T) : null), [T]),
                        { userPrice: O } = (0, t8.CD)({ sku: A, priceSetAssignmentPurchaseType: e5.lid.GIFT }),
                        x = (0, ne.fq)(A),
                        f = (0, ne.xf)(A),
                        N = async (e, t) => {},
                        R = (e) => {
                            null != m && m(null == e ? void 0 : e);
                        },
                        v = () =>
                            (0, r.jsxs)("div", {
                                className: ni.mT,
                                children: [
                                    null != x &&
                                        (0, r.jsx)(tJ.A, {
                                            containerClassName: ni.T3,
                                            cardImage: x,
                                            cardBackgroundImage: f,
                                            altText: A?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: ni._T,
                                        children: [
                                            (0, r.jsx)(t3.A, { sound: C, onSelect: R }),
                                            (0, r.jsx)(t5.A, {
                                                setEmojiConfetti: p,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        U = () => {
                            let e = A?.orbsReward;
                            return (0, r.jsxs)("div", {
                                className: ni.Tc,
                                children: [
                                    null != c && (_ === eT.vQ.USER_PROFILE_WISHLIST || _ === eT.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(e6.Z, { giftRecipient: c })
                                        : (0, r.jsx)(eZ, { selectedSkuId: T, validateSelectedGift: N, recipients: h }),
                                    (0, r.jsx)(e1.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: ni.iX,
                                        innerClassName: ni.pt,
                                    }),
                                    null == A
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: ni.AN,
                                              children: [
                                                  (0, r.jsx)(t7.z, {
                                                      className: ni.jr,
                                                      children: eI.intl.string(eI.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: ni.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: ni.Xb,
                                                              children:
                                                                  null != A &&
                                                                  null != x &&
                                                                  (0, r.jsx)(tJ.A, {
                                                                      containerClassName: ni.Iy,
                                                                      cardImage: x,
                                                                      cardBackgroundImage: f,
                                                                      altText: A.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: ni.vz,
                                                              children: [
                                                                  null != I && (0, r.jsx)(nl.Q, { application: I }),
                                                                  (0, r.jsx)(eR.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: A.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(eR.E, {
                                                              variant: "text-md/semibold",
                                                              children: O,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != A &&
                                        (0, ne.Ri)(A) &&
                                        (0, r.jsx)(t6.w, { type: "info", children: eI.intl.string(eI.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, r.jsx)(tX.J, {
                                            Icon: tZ.C,
                                            text: eI.intl.format(eI.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != A && (0, r.jsx)(na, { handleClose: s, sku: A, application: I }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, r.jsxs)("div", { className: ni.Du, children: [v(), U()] }),
                        getLeftColumnComponent: v,
                        getRightColumnComponent: U,
                        onStepChange: a,
                        onBackClick: s,
                        disabled: null == c || c.id === S?.id || o.length > eT.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = P.useMemo(() => ({ disabled: i }), [i]);
            return (0, r.jsx)(S.Mw, {
                paymentModalStepProps: e,
                layout: S.XZ.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: a,
            });
        },
        [o.pn.REVIEW]: h._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(t0, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: l, applicationId: i, isGift: a, skuId: s, ...o } = e;
            return (
                ((e) => {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, tW.h)(t);
                    P.useEffect(() => {
                        null == l ||
                            null == n ||
                            tG.A.isFetchingForSKU(n) ||
                            null != tH.A.get(n) ||
                            (0, tY.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: i, skuId: s }),
                (0, r.jsx)(Y.CheckoutRootProvider, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: i,
                    skuIDs: [s],
                    purchaseType: e4.VV.ONE_TIME,
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
        tenantAnalyticsLocation: I.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, t1.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => eI.intl.string(eI.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => eI.intl.string(eI.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(V.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var no = n(274971),
    nu = n(480642),
    nc = n(944355),
    nd = n(977445),
    nC = n(908419),
    np = n(211287),
    nm = n(623373),
    n_ = n(739508),
    nE = n(715054);
(0, i.A)();
var nT = n(136857),
    nI = n(158317),
    nS = n(855104),
    nh = n(426398);
n(322076);
var nA =
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
    nO = n(289873),
    nx = n(241989),
    nf = n(576052),
    nP = n(120992),
    ng = n(194256),
    nN = n(319820),
    nR = n(327105),
    nv = n(200766);
let nU = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: i } = (0, nN.AO)({ sku: t }),
            a = (0, ng.oO)(l);
        i ? (a = eI.intl.string(nR.default.qwSlCO)) : (0, nm.Ab)(l) && (a = eI.intl.string(eI.t["0TmQRG"]));
        let s = (0, ng.dL)(t),
            o = (0, $.EZ)(t.id) ? nf.m[t.id].render({ className: nv.$ }) : (0, r.jsx)(nx.WH, { sku: t, product: l });
        return (0, r.jsx)(nx.f7, {
            label: s,
            description: a,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: tZ.C,
        });
    },
    ny = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, nP.c)({ applicationId: (0, m.P)(t), skuIDs: [t] });
        let l = (0, el.bG)([tH.A], () => tH.A.get(t), [t]);
        return null == l
            ? (0, r.jsx)(nO.y, { type: nO.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(nU, { sku: l, orbPriceAmount: n });
    },
    nj = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(nc.vW, { label: eI.intl.string(eI.t.y0WGqP), value: null != t ? `${t}` : "", Icon: tZ.C });
    },
    nM = () => eI.intl.string(eI.t.wmcDyu);
function nL() {
    let { immediateDelivery: e } = (0, nC.U)(),
        t = nM();
    return (0, r.jsx)(nc._P, {
        variant: { type: nc.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let nk = (0, P.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    nF = () => (0, P.useContext)(nk),
    nb = { payment_gateway: e4.kM.VIRTUAL_CURRENCY, currency: e5.Yri.DISCORD_ORB },
    nw = {
        CHECKOUT_FLOW: S.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: i,
                        onRedeemVirtualCurrency: a,
                        skuId: s,
                        analyticsSourceLocation: u,
                    } = nF(),
                    { primaryButtonProps: c, ...d } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                isRedeeming: i,
                                orbRedemptionError: a,
                                onRedeemVirtualCurrency: s,
                                handleStepChange: u,
                            } = e,
                            { enabled: c } = np.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: d, orderOrbPriceAmount: C } = (0, eo.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: p,
                                orbPriceAmount: E,
                                orbBalanceToDisplay: I,
                                onClickCheckout: S,
                                showCollectiblesDiscountWarning: h,
                                errorMessage: A,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: l,
                                        orbProductContext: r,
                                        analyticsSourceLocation: i,
                                        handleStepChange: a,
                                    } = e,
                                    { analyticsLocations: s } = (0, W.Ay)(),
                                    {
                                        selectedSkuId: u,
                                        setPurchaseState: c,
                                        firstConstraintReasonCode: d,
                                    } = (0, eo.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    C = (0, nS.gN)(),
                                    p = (0, P.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: E } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: i } = (0, ei.V)(),
                                            { hasPaymentSources: a } = (0, nh.jm)(),
                                            {
                                                loadId: s,
                                                startTime: u,
                                                discoverySessionId: c,
                                            } = (0, eo.t4)((e) => e.contextMetadata),
                                            d = (0, P.useMemo)(
                                                () => ({
                                                    load_id: s,
                                                    discovery_session_id: c,
                                                    application_id: (0, m.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: i,
                                                    payment_gateway: e4.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: e5.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: e5.frM[e5.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: T.r.UNIFIED,
                                                        checkout_flow: tp.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [s, c, i, t, l, r, n],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, P.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === e5.HAw.PAYMENT_FLOW_STARTED
                                                        ? _.default.track(e5.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...d,
                                                              has_saved_payment_source: a,
                                                              payment_gateway: e4.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === e5.HAw.PAYMENT_FLOW_LOADED
                                                          ? _.default.track(e5.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...d,
                                                                has_saved_payment_source: a,
                                                                initial_step: o.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === e5.HAw.PAYMENT_FLOW_CANCELED
                                                            ? _.default.track(e5.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...d,
                                                                  duration_ms: n,
                                                              })
                                                            : e === e5.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? _.default.track(e5.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...d,
                                                                    duration_ms: n,
                                                                })
                                                              : e === e5.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? _.default.track(e5.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                  })
                                                                : _.default.track(e5.HAw.PAYMENT_FLOW_FAILED, {
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
                                                [u, d, a],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: r,
                                        analyticsLocations: s,
                                        analyticsSourceLocation: i,
                                    });
                                (0, P.useEffect)(() => {
                                    null != l &&
                                        null !== p.current &&
                                        (E(e5.HAw.PAYMENT_FLOW_FAILED, l), (p.current = null));
                                }, [l, E]);
                                let I = (0, P.useCallback)(() => {
                                        (p.current = C),
                                            E(e5.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(th.h.COMPLETED),
                                                    a(o.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, C, E, a]),
                                    S = p.current ?? C,
                                    h = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, eK.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, P.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof nI.FY && null != t)
                                                    switch (t) {
                                                        case nA.INSUFFICIENT_ORB_BALANCE:
                                                            return eI.intl.string(eI.t.keFvXM);
                                                        case nA.SKU_ALREADY_OWNED:
                                                            return eI.intl.string(eI.t.m371Mx);
                                                        case nA.BUNDLE_PARTIALLY_OWNED:
                                                            return eI.intl.string(eI.t.v9oC0p);
                                                        default:
                                                            return eI.intl.string(eI.t.fqJZ11);
                                                    }
                                                return e instanceof nI.j2
                                                    ? eI.intl.string(eI.t["2BmwgV"])
                                                    : e.code === nT.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? eI.intl.string(eI.t.keFvXM)
                                                      : e.code === nT.tG.ALREADY_PURCHASED
                                                        ? eI.intl.string(eI.t.m371Mx)
                                                        : eI.intl.string(eI.t.fqJZ11);
                                            })(l, d),
                                        [l, d],
                                    ),
                                    orbPriceAmount: h,
                                    orbBalanceToDisplay: S,
                                    onClickCheckout: I,
                                    selectedSkuId: u,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                orbRedemptionError: a,
                                onRedeemVirtualCurrency: s,
                                handleStepChange: u,
                            }),
                            O = (0, g.bG)([tH.A], () => tH.A.get(t), [t]),
                            x = (0, nd.uS)(O?.applicationId),
                            {
                                disabled: f,
                                tooltipText: N,
                                text: R,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: r, tooltipText: i } = (0, P.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: eI.intl.string(eI.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: eI.intl.string(eI.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: r, tooltipText: i, text: nM() };
                            })({ orbBalance: I, orbPriceAmount: c ? d : E, isInTestMode: x }),
                            v = (0, P.useMemo)(
                                () => ({ onClick: S, loading: i, text: R, disabled: f, tooltipText: N }),
                                [S, i, R, f, N],
                            ),
                            U = h ? eI.intl.format(eI.t.fsOXXO, {}) : null,
                            y = x ? eI.intl.string(eI.t.OvMyMd) : null;
                        return {
                            isStepLoading: p,
                            upperInlineNoticeProps: (0, P.useMemo)(() => {
                                if (null != y || null != U || null != A) {
                                    let e = [];
                                    return (
                                        null != y &&
                                            e.push({ type: "warning", message: y, key: "test-mode-warning-notice" }),
                                        null != U &&
                                            e.push({ type: "warning", message: U, key: "orb-checkout-warning-notice" }),
                                        null != A &&
                                            e.push({ type: "critical", message: A, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [y, U, A]),
                            purchaseItemContent: (0, r.jsx)(ny, { skuId: t, orbPriceAmount: c ? C : E }),
                            paymentMethodContent: (0, r.jsx)(nj, { orbBalance: I }),
                            legalContent: (0, r.jsx)(nL, {}),
                            primaryButtonProps: v,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: s,
                        analyticsSourceLocation: u,
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: i,
                        onRedeemVirtualCurrency: a,
                        handleStepChange: t,
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(e_.dZ, { children: (0, r.jsx)(no.T, { ...d }) }),
                        (0, r.jsx)(e_.UX, { children: (0, r.jsx)(nu.lo, { primaryButtonProps: c }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: l, children: i } = e,
                    { order: a, setOrder: s } = (0, eo.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: o,
                        isRedeeming: u,
                        orbRedemptionError: c,
                        onRedeemVirtualCurrency: d,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: r, order: i } = e,
                            a = (0, g.bG)([eM.default], () => eL.Ay.canUseShopDiscounts(eM.default.getCurrentUser())),
                            s = (0, g.bG)([tH.A], () => tH.A.get(t), [t]),
                            o = (0, t8.JL)({ sku: s }),
                            { product: u } = (0, ek.q)(t),
                            c = (0, P.useMemo)(() => {
                                if (null != o) return { orbPriceAmount: o.amount };
                                if (null != u) {
                                    let e = (0, nm.CW)({ product: u, hasShopDiscount: a });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [o, u, a]);
                        c?.orbPriceAmount == null &&
                            (0, n_.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: d,
                                isSubmitting: C,
                                error: p,
                            } = (0, nE.Q)({ skuId: t, loadId: n, order: i, onSignFailure: r }),
                            m = (0, P.useCallback)(
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
                            onRedeemVirtualCurrency: m,
                            isRedeeming: C,
                            orbRedemptionError: p,
                        };
                    })({ skuId: t, loadId: n, order: a, onSignFailure: s }),
                    C = (0, P.useMemo)(
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
                return (0, r.jsx)(nk.Provider, { value: C, children: i });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l } = nF(),
                    r = ((e) => {
                        let { orbProductContext: t, overrideAnalyticParams: n } = e;
                        return {
                            analyticsDataOverride: (0, P.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...n,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, n]),
                            skipConfirm: !0,
                        };
                    })({ orbProductContext: l, overrideAnalyticParams: nb });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: nb,
        },
    },
    nD = {
        [E.C.ORB_CHECKOUT]: {
            flowType: E.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: e5.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nw,
        },
        [E.C.COLLECTIBLES_CHECKOUT]: {
            flowType: E.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: e5.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tr,
        },
        [E.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: E.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: e5.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ns,
        },
        [E.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: E.C.PREMIUM_CHECKOUT,
            purchaseType: e5.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: tv,
        },
        [E.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: E.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [E.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: E.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: e5.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tV,
        },
        [E.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: E.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: e5.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: tD,
        },
        [E.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: e5.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: B,
            flowType: E.C.GUILD_PRODUCT_CHECKOUT,
        },
        [E.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: E.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: td,
            purchaseType: e5.VVm.SUBSCRIPTION,
        },
        [E.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: E.C.GUILD_BOOST_CHECKOUT },
    };
var nH = n(735305),
    nG = n(169801),
    nK = n(380619),
    nB = n(295405),
    nV = n(558620);
let nW = (e) => {
        let { returnStep: t = o.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
            { purchaseType: i } = (0, eo.t4)((e) => ({ purchaseType: e.purchaseType })),
            a = P.useCallback(
                () =>
                    ((e) => {
                        let {
                            paymentModalStepProps: t,
                            returnStep: n = o.pn.REVIEW,
                            returnStepIfNoPaymentSources: l,
                            purchaseType: r,
                        } = e;
                        if (0 === Object.keys(nB.A.paymentSources).length) {
                            if (null != l) return void t.handleStepChange(l);
                            r === e4.VV.SUBSCRIPTION
                                ? t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS })
                                : t.handleClose();
                        } else t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS });
                    })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l, purchaseType: i }),
                [t, n, l, i],
            );
        return (0, r.jsx)(nH.x, { ...l, onReturn: a });
    },
    nY = (e) => {
        let { initialPlanId: t, referralTrialOfferId: n } = e,
            l = (0, eo.t4)((e) => e.selectedSkuId),
            i = (0, nV.A)(),
            { isGift: a, claimableRewards: s } = (0, Z.Pv)(),
            u = (0, nG.A)({ isGift: a, skuId: l, referralTrialOfferId: n }),
            c = (0, tf.lp)(u),
            d = (0, nK.px)(i, a, s),
            C = P.useMemo(() => {
                let e = null == t ? o.pn.PLAN_SELECT : o.pn.REVIEW;
                return c && (e = o.pn.REVIEW), d && (e = o.pn.SELECT_FREE_SKU), e;
            }, [c, d, t]);
        return (0, r.jsx)(nW, { paymentModalStepProps: e, returnStep: o.pn.REVIEW, returnStepIfNoPaymentSources: C });
    },
    nz = (e) => {
        let {
            checkoutFlow: t,
            returnStep: n = o.pn.REVIEW,
            returnStepIfNoPaymentSources: l,
            paymentModalStepProps: i,
        } = e;
        return t === E.C.PREMIUM_CHECKOUT
            ? (0, r.jsx)(nY, { ...i })
            : (0, r.jsx)(nW, { paymentModalStepProps: i, returnStep: n, returnStepIfNoPaymentSources: l });
    };
var nZ = n(246681),
    nX = n(86379),
    nQ = n(545075);
let nq = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, P.useRef)(!1),
            i = (0, nX.Hp)(),
            { handleStepChange: a } = t;
        return ((0, P.useEffect)(() => {
            i || l.current || (a(n), (l.current = !0));
        }, [i, a, n]),
        i)
            ? (0, r.jsx)(nQ.oO, {})
            : null;
    },
    nJ = {
        [E.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [E.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [E.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [E.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [E.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [E.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [E.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [E.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [E.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [E.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    };
class n$ {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = nD[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = nJ[e]),
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
              ? u.kO
              : "subscription" === t
                ? u.r3
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(nq, { paymentModalStepProps: e, defaultStep: o.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== E.C.ORB_CHECKOUT)
            return {
                key: o.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(nz, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => eI.intl.string(eI.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(o.pn.REVIEW);
        return {
            key: o.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => eI.intl.string(eI.t.QBnNHq) },
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
            a = this.getGiftCustomizationStepConfig({ isGift: t }),
            s = this.getAddPaymentStepConfig({ isGift: t }),
            c = this.getReviewStepConfig(),
            d = this.createDefinedStepConfigsArray([i, ...(null != a ? [a] : []), ...l, s, ...(r ? [] : u.hh), c]);
        return null != n && d.push({ key: o.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), d;
    }
    getApplicationId(e) {
        return this.checkoutFlow === E.C.ORB_CHECKOUT && null != e
            ? (0, m.P)(e)
            : this.checkoutFlow === E.C.COLLECTIBLES_CHECKOUT
              ? e5.FYj
              : this.checkoutFlow === E.C.PREMIUM_CHECKOUT
                ? eT.tv
                : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
            loadId: t,
            skuId: n,
            skuProductLine: l,
            applicationId: r,
            discoverySessionId: i,
            analyticsLocation: a,
            analyticsLocations: s,
            analyticsObject: o,
            analyticsSourceLocation: u,
            isGift: c,
            eligibleForTrial: d,
        } = e;
        _.default.track(e5.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: i,
            payment_type: e5.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: l,
            application_id: r,
            location: a ?? o,
            location_stack: s,
            source: u,
            eligible_for_trial: d,
            payment_modal_version: "v2",
            checkout_design: T.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === E.C.PREMIUM_CHECKOUT ? { subscription_type: e5.rzx.PREMIUM } : {}),
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
                discoverySessionId: m,
                applicationId: _,
                analyticsSourceLocation: T,
                analyticsLocations: I,
                analyticsObject: S,
                tenantParams: h,
                activeSubscription: A = null,
                ...O
            } = e,
            x = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            f = arguments.length > 2 ? arguments[2] : void 0,
            P = { current: (this.checkoutFlow === E.C.PREMIUM_CHECKOUT ? (0, p.A)() : null) ?? (0, i.A)() },
            g = { current: null },
            { modalKey: N } = f,
            R = this.generateRenderHeader(),
            v = _ ?? this.getApplicationId(c),
            U = !!(null != l && l.isGift),
            y = !1,
            j = {
                ...O,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: U }),
                onComplete: (e) => {
                    null != o && o(e), (y = !0);
                },
                onClose: u,
                renderHeader: R,
                skuId: c ?? null,
                tenantParams: h ?? {},
                loadId: P.current,
                onOrderCreated: (e) => {
                    (P.current = e.id), (g.current = e);
                },
                discoverySessionId: m,
                activeSubscription: A,
                applicationId: v,
                analyticsLocations: I,
                analyticsObject: S,
                analyticsSourceLocation: T,
                giftContextProps: l,
                additionalOptions: t,
            };
        if ("modal" === x)
            return (0, a.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.resolve().then(n.bind(n, 246681));
                    return (t) => (0, r.jsx)(e, { ...j, renderModalProps: t });
                },
                {
                    ...f,
                    onCloseRequest: () => {
                        null != f.onCloseRequest && f.onCloseRequest(y, P.current),
                            f.skipCloseModalOnCloseRequest || (0, a.closeModal)(N);
                    },
                    onCloseCallback: () => {
                        y ||
                            (C({ checkoutSucceeded: y, order: g.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: P.current,
                                skuId: c,
                                skuProductLine: d,
                                applicationId: v,
                                discoverySessionId: m,
                                analyticsLocation: O.analyticsLocation,
                                analyticsLocations: I,
                                analyticsObject: S,
                                analyticsSourceLocation: T,
                                isGift: U,
                                eligibleForTrial: null != O.trialId,
                            })),
                            null != f.onCloseCallback && f.onCloseCallback(y),
                            null != u && u(y, c);
                    },
                    modalKey: N,
                },
            );
        {
            let e = { transitionState: s.ip.ENTERED, onClose: e5.tEg };
            return (0, r.jsx)(nZ.UnifiedCheckoutInstance, { ...j, renderModalProps: e });
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
