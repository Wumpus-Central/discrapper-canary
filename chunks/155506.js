n.d(t, { Mw: () => nd, gf: () => nC.g, XZ: () => l.X, oE: () => nA, CL: () => l.C });
var l = n(75304);
n(321073);
var i = n(627968),
    r = n(835245),
    s = n(192308),
    a = n(166532),
    o = n(546042),
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
var p = n(310829),
    m = n(174459),
    _ = n(793574),
    T = n(862241),
    E = n(284009),
    A = n.n(E),
    O = n(964486),
    h = n(666646),
    I = n(64700),
    g = n(17928),
    S = n(871109);
let x = I.createContext(void 0);
function f() {
    let e = I.useContext(x);
    return A()(null != e, "GuildProductPurchaseContext not found"), e;
}
function P(e) {
    let { children: t, skuId: n, ...l } = e,
        r = (0, g.bG)([S.A], () => S.A.getGuildProduct(n));
    return (
        A()(null != r, "guildProductListing cannot be null"),
        (0, i.jsx)(x.Provider, { value: { guildProductListing: r, ...l }, children: t })
    );
}
function N(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: r } = f(),
        a = (0, h.sw)();
    return (
        (0, O.Ay)(() => {
            var e;
            A()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: r, guildProductListingId: l.id, invoicePreview: a }),
                (0, s.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("89534"),
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
    y = n.n(v),
    j = n(939249),
    R = n(789645),
    k = n(935462),
    L = n(303612),
    M = n(916261),
    U = n(575650);
function F(e) {
    let { className: t, onClose: n } = e;
    return (0, i.jsx)(j.D, {
        className: y()(M.cG, t),
        onClick: n,
        children: (0, i.jsx)(R.P, { size: "xs", color: "currentColor", className: M.yP }),
    });
}
function b(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, i.jsxs)(k.rQ, {
        className: y()(M.wx, U.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)(L.A, { className: M.F0, listing: t, imageSize: 500, alt: "" }),
            (0, i.jsx)(F, { className: M.b, onClose: n }),
        ],
    });
}
var w = n(196617);
let D = {
    CHECKOUT_FLOW: l.C.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [a.pn.REVIEW]: T._M },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, i.jsx)(P, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesPaymentContext: !1,
        tenantAnalyticsLocation: _.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = f();
        return n === a.pn.CONFIRM
            ? null
            : (0, i.jsx)(b, { guildProductListing: l, className: w.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(N, { ...e }) },
};
var H = n(20742),
    G = n(688810),
    K = n(937008),
    B = n(834252),
    W = n(106778),
    V = n(228366),
    Y = n(213530),
    Z = n(966971),
    z = n(758836),
    X = n(483764);
let q = { sliderBodyClassName: X.Bz },
    Q = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(W.Fk, { ref: n, className: X.Lb, environment: t.current }),
                (0, i.jsx)(Y.K, { options: l, className: y()(X.Oh, { [X.R]: !r }) }),
            ],
        });
    };
var J = n(702841),
    $ = n(775602),
    ee = n(427675),
    et = n(671744),
    en = n(590180),
    el = n(953150),
    ei = n(524246),
    er = n(14368),
    es = n(61750),
    ea = n(972607),
    eo = n(482132),
    eu = n(921925),
    ec = n(788868),
    ed = n(375708);
function eC(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: l,
            purchaseError: r,
            appliedUserDiscounts: s,
        } = (0, et.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { application: a, paymentError: o, purchasePreviewError: u } = (0, B.P5)(),
        c = (0, ee.gU)(),
        d = (0, J.bG)([en.A], () => en.A.getProduct(l)),
        C = I.useRef(!1);
    A()(null != l, "Expected selectedSkuId"), A()(null != a, "Expected application");
    let p = c[l];
    A()(null != p, "Expected sku");
    let m = null != o || null != r || null != u,
        _ =
            s.length > 0
                ? ed.intl.formatToPlainString(ed.t.VuV3Td, { discountOfferAmount: s[0].discount.amount })
                : void 0;
    return (I.useEffect(() => {
        null == d ||
            m ||
            C.current ||
            ((C.current = !0),
            (0, es.A)({
                product: d,
                overrideTitle: _,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: z.gs.FIAT,
            }));
    }, [d, n, t, m, _]),
    m)
        ? (0, i.jsx)(eo.dZ, { children: (0, i.jsx)(eu.A, {}) })
        : null;
}
function ep(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: r,
            giftRecipient: s,
            giftMessageError: a,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, K.Pv)(),
        c = (0, J.bG)([$.A], () => $.A.useReducedMotion),
        d = I.useRef(null),
        C = (0, et.t4)((e) => e.selectedSkuId),
        p = (0, J.bG)([en.A], () => en.A.getProduct(C)),
        { confettiColors: m } = (0, el.A)(p?.styles);
    return (
        I.useEffect(() => {
            t &&
                null != s &&
                null != C &&
                (u === ec.vQ.USER_PROFILE_WISHLIST || u === ec.vQ.DM_CHANNEL_WISHLIST) &&
                V.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: C, recipientId: s.id });
        }, [t, s, C, u]),
        t
            ? (0, i.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, i.jsx)(ea.A, {
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
                          (0, i.jsx)(ei.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, er.rA)(p?.categorySkuId),
                              colors: m?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, i.jsx)(eC, { ...e })
    );
}
var em = n(123292),
    e_ = n(859040),
    eT = n(993408),
    eE = n(575593),
    eA = n(452027),
    eO = n(922016),
    eh = n(778712),
    eI = n(834730),
    eg = n(534514),
    eS = n(986687),
    ex = n(999291),
    ef = n(903209),
    eP = n(287809),
    eN = n(428262),
    ev = n(674658),
    ey = n(898461),
    ej = n(203632),
    eR = n(892118),
    ek = n(536572),
    eL = n(14702),
    eM = n(219103),
    eU = n(525723),
    eF = n(780651);
function eb(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: r,
            previewHeaderClassName: s,
            hideProfilePreview: a,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, K.Pv)(),
        c = (0, g.bG)([eP.default], () => eP.default.getCurrentUser()),
        d = eN.Ay.canUseShopDiscounts(c),
        C = (0, ex.Ay)(o?.id),
        p = I.useRef(null),
        [m, _] = I.useState(!1),
        { product: T } = (0, ev.q)(t, !0),
        E = I.useMemo(() => (0, eT.fT)(T, d), [T, d]),
        A = (0, eU.V_)(T);
    if (null == T || 0 === T.items.length) return null;
    let [O] = T.items,
        h = (0, ek.VG)(T),
        S = null != o && o.id !== c?.id && T.type !== eE.R.BUNDLE && O.type !== eE.R.NAMEPLATE && !a;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)("div", {
                className: y()(eF.QU, s),
                children: (0, i.jsx)(eA.D, {
                    label: ed.intl.string(ed.t.PpoJzt),
                    children:
                        S &&
                        (0, i.jsx)(
                            eO.Y,
                            {
                                targetElementRef: p,
                                align: "center",
                                shouldShow: m,
                                onRequestClose: () => _(!1),
                                preload: () => (0, ef.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(eS.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, eh.FT)(eh._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, ey.T)(O) ? O : null,
                                        pendingProfileEffect: (0, ej.C3)(O) ? O : null,
                                        pendingProfileFrame: (0, eR.s)(O) ? O : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, i.jsx)(j.D, {
                                        ...l,
                                        className: eF.Nx,
                                        innerRef: p,
                                        onClick: (e) => {
                                            _((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            m ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, i.jsx)(eI.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ed.intl.string(ed.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            C?.userId,
                        ),
                }),
            }),
            (0, i.jsxs)("div", {
                className: y()(eF.i1, null != u ? eF.cN : eF.no),
                children: [
                    (0, i.jsxs)("div", {
                        className: eF.Ug,
                        children: [
                            (0, i.jsx)(eL.O, { product: T }),
                            (0, i.jsxs)("div", {
                                className: eF.JZ,
                                children: [
                                    (0, i.jsx)(eI.E, { variant: "text-md/semibold", children: h }),
                                    (0, i.jsx)(eg.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            T?.type === eE.R.BUNDLE
                                                ? null
                                                : O.type === eE.R.AVATAR_DECORATION
                                                  ? ed.intl.string(ed.t["7v0T9P"])
                                                  : O.type === eE.R.NAMEPLATE
                                                    ? ed.intl.string(ed.t.x5CoXR)
                                                    : O.type === eE.R.PROFILE_EFFECT
                                                      ? ed.intl.string(ed.t.wR5wOo)
                                                      : O.type === eE.R.PROFILE_FRAME
                                                        ? ed.intl.string(ed.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(eM.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: E,
                                discountOfferAmount: A,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, i.jsx)("div", {
                            className: eF.Wh,
                            children: (0, i.jsx)(eI.E, {
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
var ew = n(783878),
    eD = n(966327),
    eH = n(427262);
let eG = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: r } = e,
        { giftRecipient: s, setGiftRecipient: a } = (0, K.Pv)();
    return null == t
        ? null
        : (0, i.jsx)("div", {
              className: l,
              children: (0, i.jsx)(ew.Z, {
                  selectionMode: "single",
                  label: ed.intl.string(ed.t.xFn72s),
                  placeholder: ed.intl.string(ed.t.R0vK0N),
                  value: s?.id,
                  onSelectionChange: (e) => {
                      let l = r.find((t) => t.id === e);
                      null != l && (n(l, t), a(l));
                  },
                  options: r.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${eH.Ay.getUserTag(e)}`,
                      leading: (0, i.jsx)(eD.A, { user: e, size: eh._3.SIZE_20 }),
                  })),
              }),
          });
};
var eK = n(735438),
    eB = n.n(eK),
    eW = n(427358),
    eV = n(570287),
    eY = n(994500);
function eZ() {
    let e = (0, g.yK)([eY.A], () => eY.A.getFriendIDs()),
        t = (0, g.yK)([eW.A], () =>
            eW.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: i } = e,
                        r = (0, eV.q)(i);
                    return !t && (n >= 0.1 || l >= 0.1) && r;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = I.useMemo(() => eB().uniq([...e, ...t]), [e, t]);
    return (0, g.yK)(
        [eP.default],
        () =>
            n.reduce((e, t) => {
                let n = eP.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var ez = n(871181),
    eX = n(318007),
    eq = n(285719),
    eQ = n(976860),
    eJ = n(652215),
    e$ = n(353791);
function e0(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, G.Ay)(_.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(em.Q, {
        text: ed.intl.string(ed.t.J82mpK),
        onClick: function () {
            t(),
                (0, s.closeAllModals)(),
                null == n
                    ? (0, e_.Cz)({ analyticsLocations: l, analyticsSource: _.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, eQ.pX)(`${eJ.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var e2 = n(818348);
let e1 = (0, I.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
    }),
    e7 = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = (0, I.useContext)(e1),
            { analyticsLocations: l } = (0, G.Ay)();
        return (0, i.jsx)(ep, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
    },
    e8 = {
        [a.pn.GIFT_CUSTOMIZATION]: () => ed.intl.string(ed.t["JCFN/y"]),
        [a.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => ed.intl.string(ed.t.lDbi6H),
        [a.pn.CONFIRM]: () => "",
    },
    e6 = (e) => {
        let { step: t } = e,
            n = e8[t];
        return null == n ? null : (0, i.jsx)(H.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    e3 = {
        CHECKOUT_FLOW: l.C.COLLECTIBLES_CHECKOUT,
        CHECKOUT_STEPS: {
            [a.pn.GIFT_CUSTOMIZATION]: (e) => {
                let { handleStepChange: t, handleClose: n } = e,
                    {
                        renderLeftColumn: r,
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
                            } = (0, K.Pv)(),
                            { selectedSkuId: C, checkoutInvoicePreview: p } = (0, et.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            _ = (0, ee.gU)(),
                            T = (0, g.bG)([eP.default], () => eP.default.getCurrentUser()),
                            E = eZ(),
                            A = async (e, t) => {
                                d(!0),
                                    null != s && a(),
                                    (await (0, e_.JJ)(e.id, t)) || a(ed.intl.string(ed.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, O.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== ec.vQ.DM_CHANNEL_WISHLIST &&
                                    m.default.track(eJ.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                A(u, C));
                        });
                        let h = () =>
                            (0, i.jsx)(ez.A, {
                                onTextChange: (e) => r?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: e$.iX,
                                innerClassName: e$.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, i.jsx)("div", { className: e$.qL, children: (0, i.jsx)(eX.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, eT.pA)({ invoicePreview: p, selectedSkuId: C, skusById: _ });
                                return c === ec.vQ.USER_PROFILE_WISHLIST || c === ec.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(eq.Z, { giftRecipient: u }),
                                              h(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(eb, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e$.uW,
                                                      previewHeaderClassName: e$.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, i.jsx)("div", {
                                                  className: e$.fi,
                                                  children: (0, i.jsx)(e0, { handleClose: n, selectedSkuId: C }),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(eG, {
                                                  selectedSkuId: C,
                                                  recipients: E,
                                                  className: e$.uh,
                                                  validateSelectedGift: A,
                                              }),
                                              h(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(eb, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e$.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == u || u.id === T?.id || l.length > ec.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = I.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, i.jsx)(nd, {
                    paymentModalStepProps: e,
                    layout: l.X.TWO_COLUMN,
                    renderLeftColumn: r,
                    renderRightColumn: s,
                    primaryCTAButtonProps: u,
                });
            },
            [a.pn.REVIEW]: T._M,
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesPaymentContext: !0,
            CustomTenantProvider: (e) => {
                let { skuId: t, renderModalProps: n, additionalOptions: l, children: r, ...s } = e,
                    {
                        environment: a,
                        confettiCanvas: o,
                        setConfettiCanvas: u,
                        customConfettiVisible: c,
                        setCustomConfettiVisible: d,
                        customConfettiDisplayOptions: C,
                        hideConfirmStepConfetti: p,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = I.useRef(new W.OH()),
                            [l, i] = I.useState(null),
                            [r, s] = I.useState(!1),
                            a = I.useMemo(() => (0, Z.AB)({ purchaseType: z.gs.FIAT, skuId: t }), [t]);
                        return {
                            environment: n,
                            confettiCanvas: l,
                            setConfettiCanvas: i,
                            customConfettiVisible: r,
                            setCustomConfettiVisible: s,
                            customConfettiDisplayOptions: a,
                            hideConfirmStepConfetti: null != a,
                        };
                    })({ skuId: t }),
                    m = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    _ = (0, I.useMemo)(
                        () => ({
                            skuIDs: m,
                            setCustomConfettiVisible: d,
                            hideConfirmStepConfetti: p,
                            confettiCanvas: o,
                        }),
                        [m, d, p, o],
                    ),
                    {
                        paymentModalSkuId: T,
                        paymentModalOnClose: E,
                        paymentModalOnComplete: A,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: i } = e,
                            r = t[0] ?? null,
                            s = I.useCallback(() => {
                                i(!0), l?.();
                            }, [l, i]);
                        return {
                            paymentModalSkuId: r,
                            paymentModalOnClose: I.useCallback(
                                (e) => {
                                    i(!1), n(e), V.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, i],
                            ),
                            paymentModalOnComplete: s,
                        };
                    })({
                        onClose: I.useCallback(() => {
                            n.onClose();
                        }, [n]),
                        onComplete: s.onComplete,
                        skuIDs: m,
                        setCustomConfettiVisible: d,
                    }),
                    O = null != l ? l.onStepChange : void 0,
                    h = (0, I.useMemo)(
                        () => ({
                            skuId: T,
                            onClose: E,
                            onComplete: A,
                            applicationId: eJ.FYj,
                            initialPlanId: null,
                            onStepChange: O,
                            hideShadow: !0,
                            transitionState: n.transitionState,
                            returnRef: n.returnRef,
                        }),
                        [T, E, A, n.transitionState, n.returnRef, O],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(Q, {
                            environment: a,
                            setConfettiCanvas: u,
                            customConfettiDisplayOptions: C,
                            customConfettiVisible: c,
                        }),
                        (0, i.jsx)(B.PaymentContextProvider, {
                            ...s,
                            skuIDs: m,
                            stepConfigs: s.stepConfigs,
                            activeSubscription: null,
                            purchaseType: e2.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, i.jsx)(e1.Provider, {
                                value: _,
                                children: (0, i.jsx)(nC.g, { customPaymentModalProps: h, children: r }),
                            }),
                        }),
                    ],
                });
            },
            tenantAnalyticsLocation: _.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, K.Pv)();
            return n ? (0, i.jsx)(e6, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(e7, { ...e }), options: q },
    };
var e5 = n(696208),
    e4 = n(426398),
    e9 = n(683433),
    te = n(67480),
    tt = n(328968),
    tn = n(371794),
    tl = n(565756);
function ti(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: l = !1, disabled: r = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, e4.jm)(),
        u = o ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS,
        c = I.useMemo(
            () => [
                { variant: "primary", onClick: () => t(u), disabled: r, loading: s, text: ed.intl.string(ed.t.XiOHRX) },
            ],
            [t, u, r, s],
        );
    return (0, i.jsx)(e5.H, { actions: c, leading: l ? (0, i.jsx)(e9.A, { onClick: n }) : void 0 });
}
a.pn.GIFT_CUSTOMIZATION;
let tr = {
    CHECKOUT_FLOW: l.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [a.pn.GIFT_CUSTOMIZATION]: function (e) {
            let { handleStepChange: t, handleClose: n } = e,
                { customGiftMessage: l = "", setCustomGiftMessage: r, giftRecipient: s } = (0, K.Pv)(),
                a = (0, et.t4)((e) => e.selectedSkuId),
                o = (0, g.bG)([eP.default], () => eP.default.getCurrentUser()),
                u = (0, g.bG)([te.A], () => (null != a ? te.A.get(a) : null), [a]),
                c = eZ(),
                d = (0, g.bG)([tt.A], () => (null != a ? tt.A.getForSKU(a) : null), [a]),
                C =
                    d?.headerBackground != null && u?.applicationId != null
                        ? (0, tn.YE)(u.applicationId, d.headerBackground, 256)
                        : void 0,
                p = async (e, t) => {};
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eo.dZ, {
                        children: (0, i.jsxs)("div", {
                            className: tl.Du,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: tl.mT,
                                    children: [
                                        u?.name != null &&
                                            (0, i.jsx)(eg.D, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: u.name,
                                            }),
                                        null != C &&
                                            (0, i.jsx)("img", { src: C, alt: u?.name ?? "", className: tl.LC }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: tl.Tc,
                                    children: [
                                        (0, i.jsx)(eG, { recipients: c, selectedSkuId: a, validateSelectedGift: p }),
                                        (0, i.jsx)(ez.A, {
                                            onTextChange: (e) => r?.(e),
                                            pendingText: l,
                                            currentText: l,
                                            disableThemedBackground: !0,
                                            className: tl.iX,
                                            innerClassName: tl.pt,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(eo.UX, {
                        children: (0, i.jsx)(ti, {
                            onStepChange: t,
                            onBackClick: n,
                            disabled: null == s || s.id === o?.id || l.length > ec.Jo,
                        }),
                    }),
                ],
            });
        },
        [a.pn.REVIEW]: T._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: u.zX,
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesPaymentContext: !1,
        tenantAnalyticsLocation: _.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var ts = n(429913),
    ta = n(733391),
    to = n(821609),
    tu = n(318254),
    tc = n(262427),
    td = n(510022),
    tC = n(317560),
    tp = n(366523),
    tm = n(208733);
function t_(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, G.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, et.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, B.P5)(),
        a = (0, ee.gU)(),
        { isGift: o, giftRecipient: u } = (0, K.Pv)();
    A()(null != l, "Expected selectedSkuId"), A()(null != s, "Expected application");
    let c = a[l];
    A()(null != c, "Expected sku");
    let d = r.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (I.useEffect(() => {
            o || ((0, tC.j)(), t(), (0, td.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: C }));
        }, [o, c, s, t, n, C]),
        !o)
    )
        return null;
    let p = null != C && C > 0;
    return (0, i.jsxs)(eo.dZ, {
        children: [
            (0, i.jsx)(eu.A, {}),
            (0, i.jsxs)("div", {
                className: tm.EL,
                children: [
                    (0, i.jsx)(tp.e, { sku: c, shape: "square", containerClassName: tm.LC }),
                    (0, i.jsx)(eg.D, {
                        variant: "heading-xl/semibold",
                        className: tm.RS,
                        children: ed.intl.string(ed.t["5glWta"]),
                    }),
                    (0, i.jsx)(eI.E, {
                        variant: "text-md/normal",
                        children: ed.intl.formatToPlainString(ed.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    p &&
                        (0, i.jsx)("div", {
                            className: tm.Is,
                            children: (0, i.jsx)(tc.J, {
                                Icon: tu.C,
                                text: ed.intl.format(ed.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: tm.UD,
                        children: (0, i.jsx)(to.$, { onClick: t, text: ed.intl.string(ed.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var tT = n(889137),
    tE = n(742158),
    tA = n(683071),
    tO = n(313961),
    th = n(238017),
    tI = n(650588),
    tg = n(723090),
    tS = n(763827),
    tx = n(403362),
    tf = n(871123),
    tP = n(832163),
    tN = n(44724),
    tv = n(980094),
    ty = n(627363),
    tj = n(587895),
    tR = n(71393),
    tk = n(806931),
    tL = n(107610);
function tM(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        r = I.useCallback(() => {
            (0, tN.X)({ guildId: n.id });
        }, [n.id]),
        a = I.useCallback(() => {
            t();
            let e = tP.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(eJ.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, l.id)) ||
                ((0, s.closeAllModals)(),
                (0, tN.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: l.id, slug: l.slug }));
        }, [n.id, l.id, l.slug, t]);
    return (0, i.jsx)("div", {
        className: tL.$O,
        children: (0, i.jsx)(em.Q, {
            text: ed.intl.string(ed.t.ImioFL),
            onMouseDown: r,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let tU = {
    CHECKOUT_FLOW: l.C.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [a.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: r, disabled: s } = ((e) => {
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
                            setSoundEffect: m,
                            giftingOrigin: _,
                            additionalUserIds: T,
                        } = (0, K.Pv)(),
                        E = (0, et.t4)((e) => e.selectedSkuId),
                        { application: A } = (0, B.P5)(),
                        O = (0, g.bG)([eP.default], () => eP.default.getCurrentUser()),
                        h =
                            ((t = O?.id),
                            (n = eZ()),
                            (l = (function (e) {
                                let t = (0, g.bG)([tS.A], () => (tS.A.isConnected() ? tS.A.getChannelId() : null)),
                                    [n, l] = I.useState([]);
                                return (
                                    I.useEffect(() => {
                                        let n = null != t ? tO.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, tk.Xw)(t) && !(0, tk.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, tk.Ay)(e) && !(0, tk.Ay)(t)
                                                ? -1
                                                : (0, tk.Ay)(t) && !(0, tk.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, g.yK)([eP.default], () => T?.map(eP.default.getUser).filter(tx.Vq) ?? [], [T])),
                            I.useMemo(
                                () =>
                                    eB().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        S = (0, g.bG)([te.A], () => (null != E ? te.A.get(E) : null), [E]),
                        { normalPrice: x, discountedPrice: f } = (0, tg.CD)({
                            sku: S,
                            priceSetAssignmentPurchaseType: eJ.lid.GIFT,
                        }),
                        P = (0, tf.fq)(S),
                        N = (0, tf.xf)(S),
                        v = (function (e) {
                            let { shouldFetchIfMissing: t } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = (0, tf.bF)(e),
                                l = e?.applicationId,
                                i = (0, g.bG)([tj.A], () => (null != l ? tj.A.getApplication(l) : null), [l]),
                                r = i?.guildId,
                                s = (0, g.bG)([tR.A], () => (null != r ? tR.A.getGuild(r) : null), [r]);
                            return (
                                I.useEffect(() => {
                                    n && t && null == s && null != e && ty.Ay.fetchApplication(e.applicationId, !0);
                                }, [s, e, t, n]),
                                n ? s : null
                            );
                        })(S, { shouldFetchIfMissing: !0 }),
                        y = async (e, t) => {},
                        j = (e) => {
                            null != m && m(null == e ? void 0 : e);
                        },
                        R = () =>
                            (0, i.jsxs)("div", {
                                className: tL.mT,
                                children: [
                                    null != P &&
                                        (0, i.jsx)(tp.A, {
                                            containerClassName: tL.T3,
                                            cardImage: P,
                                            cardBackgroundImage: N,
                                            altText: S?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: tL._T,
                                        children: [
                                            (0, i.jsx)(tI.A, { sound: C, onSelect: j }),
                                            (0, i.jsx)(th.A, {
                                                setEmojiConfetti: p,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        k = () => {
                            let e = S?.orbsReward;
                            return (0, i.jsxs)("div", {
                                className: tL.Tc,
                                children: [
                                    null != c && (_ === ec.vQ.USER_PROFILE_WISHLIST || _ === ec.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(eq.Z, { giftRecipient: c })
                                        : (0, i.jsx)(eG, { selectedSkuId: E, validateSelectedGift: y, recipients: h }),
                                    (0, i.jsx)(ez.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: tL.iX,
                                        innerClassName: tL.pt,
                                    }),
                                    null == S
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: tL.AN,
                                              children: [
                                                  (0, i.jsx)(tE.z, {
                                                      className: tL.jr,
                                                      children: ed.intl.string(ed.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: tL.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: tL.Xb,
                                                              children:
                                                                  null != S &&
                                                                  null != P &&
                                                                  (0, i.jsx)(tp.A, {
                                                                      containerClassName: tL.Iy,
                                                                      cardImage: P,
                                                                      cardBackgroundImage: N,
                                                                      altText: S.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: tL.vz,
                                                              children: [
                                                                  null != A && (0, i.jsx)(tv.Q, { application: A }),
                                                                  (0, i.jsx)(eI.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: S.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(eI.E, {
                                                              variant: "text-md/semibold",
                                                              children: f ?? x,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != S &&
                                        (0, tf.Ri)(S) &&
                                        (0, i.jsx)(tA.w, { type: "info", children: ed.intl.string(ed.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(tc.J, {
                                            Icon: tu.C,
                                            text: ed.intl.format(ed.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != v && null != S && (0, i.jsx)(tM, { handleClose: a, sku: S, guild: v }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: tL.Du, children: [R(), k()] }),
                        getLeftColumnComponent: R,
                        getRightColumnComponent: k,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === O?.id || o.length > ec.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = I.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(nd, {
                paymentModalStepProps: e,
                layout: l.X.CUSTOM_STEP_BODY,
                renderStepBody: r,
                primaryCTAButtonProps: a,
            });
        },
        [a.pn.REVIEW]: T._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(t_, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesPaymentContext: !0,
        CustomTenantProvider: (e) => {
            let {
                children: t,
                discoverySessionId: n,
                loadId: l,
                applicationId: r,
                isGift: s,
                skuId: a,
                renderModalProps: o,
                analyticsSourceLocation: u,
                ...c
            } = e;
            ((e) => {
                let { applicationId: t, skuId: n } = e,
                    l = (0, ts.h)(t);
                I.useEffect(() => {
                    null == l ||
                        null == l.guildId ||
                        null == n ||
                        tt.A.isFetchingForSKU(n) ||
                        null != te.A.get(n) ||
                        (0, ta.qf)(l.guildId, n);
                }, [l, n]);
            })({ applicationId: r, skuId: a });
            let d = o.onClose,
                C = I.useCallback(() => {
                    d();
                }, [d]),
                p = I.useMemo(() => ({ onClose: C, analyticsObject: u }), [C, u]);
            return (0, i.jsx)(B.PaymentContextProvider, {
                loadId: l,
                discoverySessionId: n,
                applicationId: r,
                skuIDs: [a],
                purchaseType: e2.VV.ONE_TIME,
                isGift: s,
                ...c,
                activeSubscription: null,
                children: (0, i.jsx)(nC.g, { customPaymentModalProps: p, children: t }),
            });
        },
        tenantAnalyticsLocation: _.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, tT.YW)(t)
                .with(a.pn.GIFT_CUSTOMIZATION, () => ed.intl.string(ed.t["JCFN/y"]))
                .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => ed.intl.string(ed.t.lDbi6H))
                .with(a.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(H.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var tF = n(717925),
    tb = n(480642),
    tw = n(944355),
    tD = n(977445),
    tH = n(908419),
    tG = n(211287),
    tK = n(623373),
    tB = n(739508),
    tW = n(902130);
(0, r.A)();
var tV = n(136857),
    tY = n(566980),
    tZ = n(855104),
    tz = n(120700),
    tX = n(742810);
n(322076);
var tq = n(289873),
    tQ = n(241989),
    tJ = n(576052),
    t$ = n(120992),
    t0 = n(194256),
    t2 = n(319820),
    t1 = n(327105),
    t7 = n(200766);
let t8 = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, t2.AO)({ sku: t }),
            s = (0, t0.oO)(l);
        r ? (s = ed.intl.string(t1.default.qwSlCO)) : (0, tK.Ab)(l) && (s = ed.intl.string(ed.t["0TmQRG"]));
        let a = (0, t0.dL)(t),
            o = (0, z.EZ)(t.id) ? tJ.m[t.id].render({ className: t7.$ }) : (0, i.jsx)(tQ.WH, { sku: t, product: l });
        return (0, i.jsx)(tQ.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: tu.C,
        });
    },
    t6 = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, t$.A)({ applicationId: (0, p.P)(t), skuIDs: [t] });
        let l = (0, J.bG)([te.A], () => te.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(tq.y, { type: tq.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(t8, { sku: l, orbPriceAmount: n });
    },
    t3 = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(tw.vW, { label: ed.intl.string(ed.t.y0WGqP), value: null != t ? `${t}` : "", Icon: tu.C });
    },
    t5 = () => ed.intl.string(ed.t.wmcDyu);
function t4() {
    let { immediateDelivery: e } = (0, tH.U)(),
        t = t5();
    return (0, i.jsx)(tw._P, {
        variant: { type: tw.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let t9 = (0, I.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    ne = {
        CHECKOUT_FLOW: l.C.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [a.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: r,
                        onRedeemVirtualCurrency: s,
                        skuId: o,
                        analyticsSourceLocation: u,
                    } = (0, I.useContext)(t9),
                    { primaryButtonProps: c, ...d } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                isRedeeming: r,
                                orbRedemptionError: s,
                                onRedeemVirtualCurrency: o,
                                handleStepChange: u,
                            } = e,
                            { enabled: c } = tG.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: d, orderOrbPriceAmount: C } = (0, et.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: _,
                                orbPriceAmount: T,
                                orbBalanceToDisplay: E,
                                onClickCheckout: A,
                                showCollectiblesDiscountWarning: O,
                                errorMessage: h,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: l,
                                        orbProductContext: i,
                                        analyticsSourceLocation: r,
                                        handleStepChange: s,
                                    } = e,
                                    { analyticsLocations: o } = (0, G.Ay)(),
                                    {
                                        selectedSkuId: u,
                                        setPurchaseState: c,
                                        order: d,
                                    } = (0, et.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        order: e.order,
                                    })),
                                    C = (0, tZ.gN)(),
                                    _ = (0, I.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: T } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: i,
                                            } = e,
                                            { activitySessionId: r } = (0, B.P5)(),
                                            { hasPaymentSources: s } = (0, e4.jm)(),
                                            {
                                                loadId: o,
                                                startTime: u,
                                                discoverySessionId: c,
                                            } = (0, et.t4)((e) => e.contextMetadata),
                                            d = (0, I.useMemo)(() => {
                                                let e;
                                                return {
                                                    load_id: o,
                                                    discovery_session_id: c,
                                                    application_id: (0, p.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: r,
                                                    payment_gateway: e2.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: eJ.Yri.DISCORD_ORB,
                                                    ...(null != i && { source: i }),
                                                    ...((e = (0, tX.q1)({
                                                        location: "OrbCheckoutModal",
                                                        unifiedCheckoutFlow: tz.C.ORB_CHECKOUT,
                                                    })),
                                                    {
                                                        payment_type: eJ.frM[eJ.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: e ? tX.rS.UNIFIED : tX.rS.LEGACY,
                                                        checkout_flow: tz.C.ORB_CHECKOUT,
                                                    }),
                                                };
                                            }, [o, c, r, t, l, i, n]);
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, I.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === eJ.HAw.PAYMENT_FLOW_STARTED
                                                        ? m.default.track(eJ.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...d,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: e2.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === eJ.HAw.PAYMENT_FLOW_LOADED
                                                          ? m.default.track(eJ.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...d,
                                                                has_saved_payment_source: s,
                                                                initial_step: a.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === eJ.HAw.PAYMENT_FLOW_CANCELED
                                                            ? m.default.track(eJ.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...d,
                                                                  duration_ms: n,
                                                              })
                                                            : e === eJ.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? m.default.track(eJ.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...d,
                                                                    duration_ms: n,
                                                                })
                                                              : e === eJ.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? m.default.track(eJ.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                  })
                                                                : e === eJ.HAw.PAYMENT_FLOW_FAILED &&
                                                                  m.default.track(eJ.HAw.PAYMENT_FLOW_FAILED, {
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
                                        orbProductContext: i,
                                        analyticsLocations: o,
                                        analyticsSourceLocation: r,
                                    });
                                (0, I.useEffect)(() => {
                                    null != l &&
                                        null !== _.current &&
                                        (T(eJ.HAw.PAYMENT_FLOW_FAILED, l), (_.current = null));
                                }, [l, T]);
                                let E = (0, I.useCallback)(() => {
                                        (_.current = C),
                                            T(eJ.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(tY.h.COMPLETED),
                                                    s(a.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, C, T, s]),
                                    A = _.current ?? C,
                                    O = null != i ? i.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == i,
                                    showCollectiblesDiscountWarning: (0, eU.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, I.useMemo)(
                                        () =>
                                            null == l
                                                ? null
                                                : l.code === tV.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                  ? ed.intl.string(ed.t.keFvXM)
                                                  : l.code === tV.tG.ALREADY_PURCHASED
                                                    ? ed.intl.string(ed.t.m371Mx)
                                                    : ed.intl.string(ed.t.fqJZ11),
                                        [l],
                                    ),
                                    orbPriceAmount: O,
                                    order: d,
                                    orbBalanceToDisplay: A,
                                    onClickCheckout: E,
                                    selectedSkuId: u,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                orbRedemptionError: s,
                                onRedeemVirtualCurrency: o,
                                handleStepChange: u,
                            }),
                            S = (0, g.bG)([te.A], () => te.A.get(t), [t]),
                            x = (0, tD.u)(S?.applicationId),
                            {
                                disabled: f,
                                tooltipText: P,
                                text: N,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: i, tooltipText: r } = (0, I.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: ed.intl.string(ed.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: ed.intl.string(ed.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: i, tooltipText: r, text: t5() };
                            })({ orbBalance: E, orbPriceAmount: c ? d : T, isInTestMode: x }),
                            v = (0, I.useMemo)(
                                () => ({ onClick: A, loading: r, text: N, disabled: f, tooltipText: P }),
                                [A, r, N, f, P],
                            ),
                            y = O ? ed.intl.format(ed.t.fsOXXO, {}) : null,
                            j = x ? ed.intl.string(ed.t.OvMyMd) : null;
                        return {
                            isStepLoading: _,
                            upperInlineNoticeProps: (0, I.useMemo)(() => {
                                if (null != j || null != y || null != h) {
                                    let e = [];
                                    return (
                                        null != j &&
                                            e.push({ type: "warning", message: j, key: "test-mode-warning-notice" }),
                                        null != y &&
                                            e.push({ type: "warning", message: y, key: "orb-checkout-warning-notice" }),
                                        null != h &&
                                            e.push({ type: "critical", message: h, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [j, y, h]),
                            purchaseItemContent: (0, i.jsx)(t6, { skuId: t, orbPriceAmount: c ? C : T }),
                            paymentSelectContent: (0, i.jsx)(t3, { orbBalance: E }),
                            legalContent: (0, i.jsx)(t4, {}),
                            primaryButtonProps: v,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: o,
                        analyticsSourceLocation: u,
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: r,
                        onRedeemVirtualCurrency: s,
                        handleStepChange: t,
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eo.dZ, { children: (0, i.jsx)(tF.T, { ...d }) }),
                        (0, i.jsx)(eo.UX, { children: (0, i.jsx)(tb.lo, { primaryButtonProps: c }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesPaymentContext: !1,
            CustomTenantProvider: (e) => {
                let {
                        skuId: t,
                        loadId: n,
                        analyticsSourceLocation: l,
                        renderModalProps: r,
                        overrideAnalyticParams: s,
                        children: a,
                    } = e,
                    {
                        orbProductContext: o,
                        isRedeeming: u,
                        orbRedemptionError: c,
                        onRedeemVirtualCurrency: d,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, order: i } = e,
                            r = (0, g.bG)([eP.default], () => eN.Ay.canUseShopDiscounts(eP.default.getCurrentUser())),
                            s = (0, g.bG)([te.A], () => te.A.get(t), [t]),
                            a = (0, tg.JL)({ sku: s }),
                            { product: o } = (0, ev.q)(t),
                            u = (0, I.useMemo)(() => {
                                if (null != a) return { orbPriceAmount: a.amount };
                                if (null != o) {
                                    let e = (0, tK.CW)({ product: o, hasShopDiscount: r });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [a, o, r]);
                        u?.orbPriceAmount == null &&
                            (0, tB.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: c,
                                isSubmitting: d,
                                error: C,
                            } = (0, tW.Q)({ skuId: t, loadId: n, order: i }),
                            p = (0, I.useCallback)(
                                (e) => {
                                    c(t, n, (n) => {
                                        l?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, c, l],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            orbProductContext: u,
                            onRedeemVirtualCurrency: p,
                            isRedeeming: d,
                            orbRedemptionError: C,
                        };
                    })({ skuId: t, loadId: n, order: (0, et.t4)((e) => e.order) }),
                    C = ((e) => {
                        let { orbProductContext: t, onClose: n, overrideAnalyticParams: l } = e;
                        return {
                            analyticsDataOverride: (0, I.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...l,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, l]),
                            onClose: (0, I.useCallback)(async () => {
                                await n();
                            }, [n]),
                            skipConfirm: !0,
                        };
                    })({ onClose: r.onClose, orbProductContext: o, overrideAnalyticParams: s }),
                    p = (0, I.useMemo)(
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
                return (0, i.jsx)(t9.Provider, {
                    value: p,
                    children: (0, i.jsx)(nC.g, { customPaymentModalProps: C, children: a }),
                });
            },
            overrideAnalyticParams: { payment_gateway: e2.kM.VIRTUAL_CURRENCY, currency: eJ.Yri.DISCORD_ORB },
        },
    },
    nt = {
        [l.C.ORB_CHECKOUT]: {
            flowType: l.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: eJ.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ne,
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            flowType: l.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: eJ.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: e3,
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: l.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: eJ.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tU,
        },
        [l.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_CHECKOUT },
        [l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: l.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: eJ.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tr,
        },
        [l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [l.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: eJ.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: D,
            flowType: l.C.GUILD_PRODUCT_CHECKOUT,
        },
        [l.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_ROLE_CHECKOUT },
        [l.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_BOOST_CHECKOUT },
    };
var nn = n(735305),
    nl = n(295405);
let ni = (e) => {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        r = I.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(nl.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, i.jsx)(nn.x, { ...l, onReturn: r });
};
var nr = n(545075);
let ns = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, I.useRef)(!1),
            { blockedPayments: r } = (0, B.P5)(),
            { handleStepChange: s } = t;
        return ((0, I.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(nr.oO, {})
            : null;
    },
    na = {
        [l.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, disablePaymentAuthSteps: !0, predicateStepType: "unified" },
        [l.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [l.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [l.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1 },
    };
class no {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = nt[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = na[e]),
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
            ? u.kJ
            : "unified" === e
              ? { key: null, renderStep: (e) => (0, i.jsx)(ns, { paymentModalStepProps: e, defaultStep: a.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, i.jsx)(o.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== l.C.ORB_CHECKOUT)
            return {
                key: a.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, i.jsx)(ni, {
                        paymentModalStepProps: e,
                        returnStep: a.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? a.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
            l = this.getCheckoutStep(a.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != l)
            return {
                key: a.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, i.jsx)(l, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => ed.intl.string(ed.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(a.pn.REVIEW);
        return {
            key: a.pn.REVIEW,
            renderStep: (t) => (0, i.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => ed.intl.string(ed.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n } = this.tenantCheckoutFlowConfig,
            { disablePaymentAuthSteps: l } = this.internalCheckoutFlowControls,
            i = this.getPredicateStepConfig(),
            r = this.getGiftCustomizationStepConfig({ isGift: t }),
            s = this.getAddPaymentStepConfig({ isGift: t }),
            o = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([i, r, s, ...(l ? [] : u.hh), o]);
        return null != n && c.push({ key: a.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationIdFor1PShopSKU(e) {
        return this.checkoutFlow === l.C.ORB_CHECKOUT
            ? (0, p.P)(e)
            : this.checkoutFlow === l.C.COLLECTIBLES_CHECKOUT
              ? eJ.FYj
              : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
                loadId: t,
                skuId: n,
                skuProductLine: l,
                applicationId: i,
                discoverySessionId: r,
                analyticsLocations: s,
                analyticsObject: a,
                analyticsSourceLocation: o,
                isGift: u,
            } = e,
            c = (0, tX.q1)({ location: "UnifiedCheckoutFlowManager", unifiedCheckoutFlow: this.checkoutFlow });
        m.default.track(eJ.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: r,
            payment_type: eJ.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: u,
            sku_id: n,
            sku_product_line: l,
            application_id: i,
            location: a,
            location_stack: s,
            source: o,
            payment_modal_version: "v2",
            checkout_design: c ? tX.rS.UNIFIED : tX.rS.LEGACY,
            checkout_flow: this.checkoutFlow,
            ...this.override_analytic_params,
        });
    }
    openCheckoutModal(e) {
        let {
                modalAPIOptions: t,
                additionalOptions: l,
                giftContextProps: a,
                onComplete: o,
                onClose: u,
                skuId: c,
                skuProductLine: d,
                discoverySessionId: p,
                applicationId: m,
                analyticsSourceLocation: _,
                analyticsLocations: T,
                analyticsObject: E,
                tenantParams: A,
            } = e,
            O = { current: (0, r.A)() },
            h = { current: null },
            I = (e) => {
                (O.current = e.id), (h.current = e);
            },
            { modalKey: g } = t,
            S = this.generateRenderHeader(),
            x = m ?? this.getApplicationIdFor1PShopSKU(c),
            f = !!(null != a && a.isGift),
            P = !1;
        return (0, s.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: f });
                return (n) =>
                    (0, i.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != o && o(e), (P = !0);
                        },
                        onClose: u,
                        renderHeader: S,
                        skuId: c,
                        tenantParams: A ?? {},
                        loadId: O.current,
                        onOrderCreated: I,
                        discoverySessionId: p,
                        applicationId: x,
                        analyticsLocations: T,
                        analyticsObject: E,
                        analyticsSourceLocation: _,
                        renderModalProps: n,
                        giftContextProps: a,
                        additionalOptions: l,
                    });
            },
            {
                ...t,
                onCloseRequest: () => {
                    null != t.onCloseRequest && t.onCloseRequest(P, O.current), (0, s.closeModal)(g);
                },
                onCloseCallback: () => {
                    P ||
                        (C({ checkoutSucceeded: P, order: h.current }),
                        this.trackPaymentFlowCanceled({
                            loadId: O.current,
                            skuId: c,
                            skuProductLine: d,
                            applicationId: x,
                            discoverySessionId: p,
                            analyticsLocations: T,
                            analyticsObject: E,
                            analyticsSourceLocation: _,
                            isGift: f,
                        })),
                        null != t.onCloseCallback && t.onCloseCallback(P),
                        null != u && u(P, c);
                },
                modalKey: g,
            },
        );
    }
}
n(584160);
var nu = n(981036),
    nc = n(367644);
let nd = (e) => {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: r,
            renderLeftColumn: s,
            renderRightColumn: o,
            primaryCTAButtonProps: u,
            onBackClick: c,
        } = e,
        { hasPaymentSources: d } = (0, e4.jm)(),
        C = d ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS,
        p = I.useCallback(() => t(C), [t, C]),
        m = I.useMemo(
            () =>
                n === l.X.CUSTOM_STEP_BODY
                    ? r()
                    : n === l.X.TWO_COLUMN
                      ? (0, i.jsxs)("div", { className: nc.D, children: [s(), o()] })
                      : null,
            [n, r, s, o],
        ),
        _ = I.useMemo(() => ({ ...u, onClick: p, text: ed.intl.string(ed.t.XiOHRX) }), [u, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eo.dZ, { children: m }),
            (0, i.jsx)(eo.UX, { children: (0, i.jsx)(nu.cy, { onBackClick: c, primaryCTAButtonProps: _ }) }),
        ],
    });
};
var nC = n(551892);
let np = null,
    nm = null,
    n_ = null,
    nT = null,
    nE = null,
    nA = {
        [l.C.ORB_CHECKOUT]: {
            get: function () {
                return null == np && (np = new no({ checkoutFlow: l.C.ORB_CHECKOUT })), np;
            },
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return null == nm && (nm = new no({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), nm;
            },
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return null == n_ && (n_ = new no({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), n_;
            },
        },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == nT && (nT = new no({ checkoutFlow: l.C.PREMIUM_APPS_OTP_CHECKOUT })), nT;
            },
        },
        [l.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return null == nE && (nE = new no({ checkoutFlow: l.C.GUILD_PRODUCT_CHECKOUT })), nE;
            },
        },
    };
