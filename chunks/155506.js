n.d(t, { Mw: () => no, gf: () => nu.g, XZ: () => l.X, oE: () => n_, CL: () => l.C });
var l = n(75304);
n(321073);
var i = n(627968),
    r = n(835245),
    s = n(192308),
    a = n(166532),
    o = n(314671),
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
    O = n.n(E),
    A = n(964486),
    h = n(666646),
    I = n(64700),
    g = n(17928),
    S = n(871109);
let x = I.createContext(void 0);
function P() {
    let e = I.useContext(x);
    return O()(null != e, "GuildProductPurchaseContext not found"), e;
}
function f(e) {
    let { children: t, skuId: n, ...l } = e,
        r = (0, g.bG)([S.A], () => S.A.getGuildProduct(n));
    return (
        O()(null != r, "guildProductListing cannot be null"),
        (0, i.jsx)(x.Provider, { value: { guildProductListing: r, ...l }, children: t })
    );
}
function N(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: r } = P(),
        a = (0, h.sw)();
    return (
        (0, A.Ay)(() => {
            var e;
            O()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: r, guildProductListingId: l.id, invoicePreview: a }),
                (0, s.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("24716"),
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
    R = n(939249),
    j = n(789645),
    k = n(935462),
    L = n(303612),
    M = n(916261),
    U = n(575650);
function F(e) {
    let { className: t, onClose: n } = e;
    return (0, i.jsx)(R.D, {
        className: y()(M.cG, t),
        onClick: n,
        children: (0, i.jsx)(j.P, { size: "xs", color: "currentColor", className: M.yP }),
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
            return (0, i.jsx)(f, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesPaymentContext: !1,
        tenantAnalyticsLocation: _.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = P();
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
    z = n(966971),
    Z = n(758836),
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
    et = n(722847),
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
    O()(null != l, "Expected selectedSkuId"), O()(null != a, "Expected application");
    let p = c[l];
    O()(null != p, "Expected sku");
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
                purchaseType: Z.gs.FIAT,
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
    eO = n(452027),
    eA = n(922016),
    eh = n(778712),
    eI = n(834730),
    eg = n(534514),
    eS = n(986687),
    ex = n(999291),
    eP = n(903209),
    ef = n(287809),
    eN = n(428262),
    ev = n(674658),
    ey = n(898461),
    eR = n(203632),
    ej = n(892118),
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
        c = (0, g.bG)([ef.default], () => ef.default.getCurrentUser()),
        d = eN.Ay.canUseShopDiscounts(c),
        C = (0, ex.Ay)(o?.id),
        p = I.useRef(null),
        [m, _] = I.useState(!1),
        { product: T } = (0, ev.q)(t, !0),
        E = I.useMemo(() => (0, eT.fT)(T, d), [T, d]),
        O = (0, eU.V_)(T);
    if (null == T || 0 === T.items.length) return null;
    let [A] = T.items,
        h = (0, ek.VG)(T),
        S = null != o && o.id !== c?.id && T.type !== eE.R.BUNDLE && A.type !== eE.R.NAMEPLATE && !a;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)("div", {
                className: y()(eF.QU, s),
                children: (0, i.jsx)(eO.D, {
                    label: ed.intl.string(ed.t.PpoJzt),
                    children:
                        S &&
                        (0, i.jsx)(
                            eA.Y,
                            {
                                targetElementRef: p,
                                align: "center",
                                shouldShow: m,
                                onRequestClose: () => _(!1),
                                preload: () => (0, eP.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(eS.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, eh.FT)(eh._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, ey.T)(A) ? A : null,
                                        pendingProfileEffect: (0, eR.C3)(A) ? A : null,
                                        pendingProfileFrame: (0, ej.s)(A) ? A : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, i.jsx)(R.D, {
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
                                                : A.type === eE.R.AVATAR_DECORATION
                                                  ? ed.intl.string(ed.t["7v0T9P"])
                                                  : A.type === eE.R.NAMEPLATE
                                                    ? ed.intl.string(ed.t.x5CoXR)
                                                    : A.type === eE.R.PROFILE_EFFECT
                                                      ? ed.intl.string(ed.t.wR5wOo)
                                                      : A.type === eE.R.PROFILE_FRAME
                                                        ? ed.intl.string(ed.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(eM.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: E,
                                discountOfferAmount: O,
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
function ez() {
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
        [ef.default],
        () =>
            n.reduce((e, t) => {
                let n = ef.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var eZ = n(871181),
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
                            T = (0, g.bG)([ef.default], () => ef.default.getCurrentUser()),
                            E = ez(),
                            O = async (e, t) => {
                                d(!0),
                                    null != s && a(),
                                    (await (0, e_.JJ)(e.id, t)) || a(ed.intl.string(ed.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, A.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== ec.vQ.DM_CHANNEL_WISHLIST &&
                                    m.default.track(eJ.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                O(u, C));
                        });
                        let h = () =>
                            (0, i.jsx)(eZ.A, {
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
                                                  validateSelectedGift: O,
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
                return (0, i.jsx)(no, {
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
                            a = I.useMemo(() => (0, z.AB)({ purchaseType: Z.gs.FIAT, skuId: t }), [t]);
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
                        paymentModalOnComplete: O,
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
                    A = null != l ? l.onStepChange : void 0,
                    h = (0, I.useMemo)(
                        () => ({
                            skuId: T,
                            onClose: E,
                            onComplete: O,
                            applicationId: eJ.FYj,
                            initialPlanId: null,
                            onStepChange: A,
                            hideShadow: !0,
                            transitionState: n.transitionState,
                            returnRef: n.returnRef,
                        }),
                        [T, E, O, n.transitionState, n.returnRef, A],
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
                                children: (0, i.jsx)(nu.g, { customPaymentModalProps: h, children: r }),
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
var e5 = n(67480),
    e4 = n(328968),
    e9 = n(371794),
    te = n(565756);
a.pn.GIFT_CUSTOMIZATION;
let tt = {
    CHECKOUT_FLOW: l.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [a.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: r } = (0, K.Pv)(),
                s = (0, et.t4)((e) => e.selectedSkuId),
                a = (0, g.bG)([ef.default], () => ef.default.getCurrentUser()),
                o = (0, g.bG)([e5.A], () => (null != s ? e5.A.get(s) : null), [s]),
                u = ez(),
                c = (0, g.bG)([e4.A], () => (null != s ? e4.A.getForSKU(s) : null), [s]),
                d =
                    c?.headerBackground != null && o?.applicationId != null
                        ? (0, e9.YE)(o.applicationId, c.headerBackground, 256)
                        : void 0,
                C = async (e, t) => {},
                p = null == r || r.id === a?.id || t.length > ec.Jo,
                m = I.useMemo(() => ({ disabled: p }), [p]);
            return (0, i.jsx)(no, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: l.X.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, i.jsxs)("div", {
                        className: te.P6,
                        children: [
                            o?.name != null &&
                                (0, i.jsx)(eg.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != d && (0, i.jsx)("img", { src: d, alt: o?.name ?? "", className: te.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, i.jsxs)("div", {
                        className: te.P6,
                        children: [
                            (0, i.jsx)(eG, { recipients: u, selectedSkuId: s, validateSelectedGift: C }),
                            (0, i.jsx)(eZ.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: te.iX,
                                innerClassName: te.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: m,
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
var tn = n(429913),
    tl = n(733391),
    ti = n(821609),
    tr = n(318254),
    ts = n(262427),
    ta = n(510022),
    to = n(317560),
    tu = n(366523),
    tc = n(208733);
function td(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, G.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, et.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, B.P5)(),
        a = (0, ee.gU)(),
        { isGift: o, giftRecipient: u } = (0, K.Pv)();
    O()(null != l, "Expected selectedSkuId"), O()(null != s, "Expected application");
    let c = a[l];
    O()(null != c, "Expected sku");
    let d = r.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (I.useEffect(() => {
            o || ((0, to.j)(), t(), (0, ta.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: C }));
        }, [o, c, s, t, n, C]),
        !o)
    )
        return null;
    let p = null != C && C > 0;
    return (0, i.jsxs)(eo.dZ, {
        children: [
            (0, i.jsx)(eu.A, {}),
            (0, i.jsxs)("div", {
                className: tc.EL,
                children: [
                    (0, i.jsx)(tu.e, { sku: c, shape: "square", containerClassName: tc.LC }),
                    (0, i.jsx)(eg.D, {
                        variant: "heading-xl/semibold",
                        className: tc.RS,
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
                            className: tc.Is,
                            children: (0, i.jsx)(ts.J, {
                                Icon: tr.C,
                                text: ed.intl.format(ed.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: tc.UD,
                        children: (0, i.jsx)(ti.$, { onClick: t, text: ed.intl.string(ed.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var tC = n(889137),
    tp = n(742158),
    tm = n(683071),
    t_ = n(313961),
    tT = n(238017),
    tE = n(650588),
    tO = n(723090),
    tA = n(763827),
    th = n(403362),
    tI = n(871123),
    tg = n(832163),
    tS = n(44724),
    tx = n(980094),
    tP = n(627363),
    tf = n(587895),
    tN = n(71393),
    tv = n(806931),
    ty = n(107610);
function tR(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        r = I.useCallback(() => {
            (0, tS.X)({ guildId: n.id });
        }, [n.id]),
        a = I.useCallback(() => {
            t();
            let e = tg.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(eJ.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, l.id)) ||
                ((0, s.closeAllModals)(),
                (0, tS.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: l.id, slug: l.slug }));
        }, [n.id, l.id, l.slug, t]);
    return (0, i.jsx)("div", {
        className: ty.$O,
        children: (0, i.jsx)(em.Q, {
            text: ed.intl.string(ed.t.ImioFL),
            onMouseDown: r,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let tj = {
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
                        { application: O } = (0, B.P5)(),
                        A = (0, g.bG)([ef.default], () => ef.default.getCurrentUser()),
                        h =
                            ((t = A?.id),
                            (n = ez()),
                            (l = (function (e) {
                                let t = (0, g.bG)([tA.A], () => (tA.A.isConnected() ? tA.A.getChannelId() : null)),
                                    [n, l] = I.useState([]);
                                return (
                                    I.useEffect(() => {
                                        let n = null != t ? t_.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, tv.Xw)(t) && !(0, tv.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, tv.Ay)(e) && !(0, tv.Ay)(t)
                                                ? -1
                                                : (0, tv.Ay)(t) && !(0, tv.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, g.yK)([ef.default], () => T?.map(ef.default.getUser).filter(th.Vq) ?? [], [T])),
                            I.useMemo(
                                () =>
                                    eB().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        S = (0, g.bG)([e5.A], () => (null != E ? e5.A.get(E) : null), [E]),
                        { normalPrice: x, discountedPrice: P } = (0, tO.CD)({
                            sku: S,
                            priceSetAssignmentPurchaseType: eJ.lid.GIFT,
                        }),
                        f = (0, tI.fq)(S),
                        N = (0, tI.xf)(S),
                        v = (function (e) {
                            let { shouldFetchIfMissing: t } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = (0, tI.bF)(e),
                                l = e?.applicationId,
                                i = (0, g.bG)([tf.A], () => (null != l ? tf.A.getApplication(l) : null), [l]),
                                r = i?.guildId,
                                s = (0, g.bG)([tN.A], () => (null != r ? tN.A.getGuild(r) : null), [r]);
                            return (
                                I.useEffect(() => {
                                    n && t && null == s && null != e && tP.Ay.fetchApplication(e.applicationId, !0);
                                }, [s, e, t, n]),
                                n ? s : null
                            );
                        })(S, { shouldFetchIfMissing: !0 }),
                        y = async (e, t) => {},
                        R = (e) => {
                            null != m && m(null == e ? void 0 : e);
                        },
                        j = () =>
                            (0, i.jsxs)("div", {
                                className: ty.mT,
                                children: [
                                    null != f &&
                                        (0, i.jsx)(tu.A, {
                                            containerClassName: ty.T3,
                                            cardImage: f,
                                            cardBackgroundImage: N,
                                            altText: S?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: ty._T,
                                        children: [
                                            (0, i.jsx)(tE.A, { sound: C, onSelect: R }),
                                            (0, i.jsx)(tT.A, {
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
                                className: ty.Tc,
                                children: [
                                    null != c && (_ === ec.vQ.USER_PROFILE_WISHLIST || _ === ec.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(eq.Z, { giftRecipient: c })
                                        : (0, i.jsx)(eG, { selectedSkuId: E, validateSelectedGift: y, recipients: h }),
                                    (0, i.jsx)(eZ.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: ty.iX,
                                        innerClassName: ty.pt,
                                    }),
                                    null == S
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: ty.AN,
                                              children: [
                                                  (0, i.jsx)(tp.z, {
                                                      className: ty.jr,
                                                      children: ed.intl.string(ed.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: ty.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: ty.Xb,
                                                              children:
                                                                  null != S &&
                                                                  null != f &&
                                                                  (0, i.jsx)(tu.A, {
                                                                      containerClassName: ty.Iy,
                                                                      cardImage: f,
                                                                      cardBackgroundImage: N,
                                                                      altText: S.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: ty.vz,
                                                              children: [
                                                                  null != O && (0, i.jsx)(tx.Q, { application: O }),
                                                                  (0, i.jsx)(eI.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: S.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(eI.E, {
                                                              variant: "text-md/semibold",
                                                              children: P ?? x,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != S &&
                                        (0, tI.Ri)(S) &&
                                        (0, i.jsx)(tm.w, { type: "info", children: ed.intl.string(ed.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(ts.J, {
                                            Icon: tr.C,
                                            text: ed.intl.format(ed.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != v && null != S && (0, i.jsx)(tR, { handleClose: a, sku: S, guild: v }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: ty.Du, children: [j(), k()] }),
                        getLeftColumnComponent: j,
                        getRightColumnComponent: k,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === A?.id || o.length > ec.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = I.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(no, {
                paymentModalStepProps: e,
                layout: l.X.CUSTOM_STEP_BODY,
                renderStepBody: r,
                primaryCTAButtonProps: a,
            });
        },
        [a.pn.REVIEW]: T._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(td, { ...e }) },
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
                    l = (0, tn.h)(t);
                I.useEffect(() => {
                    null == l ||
                        null == l.guildId ||
                        null == n ||
                        e4.A.isFetchingForSKU(n) ||
                        null != e5.A.get(n) ||
                        (0, tl.qf)(l.guildId, n);
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
                children: (0, i.jsx)(nu.g, { customPaymentModalProps: p, children: t }),
            });
        },
        tenantAnalyticsLocation: _.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, tC.YW)(t)
                .with(a.pn.GIFT_CUSTOMIZATION, () => ed.intl.string(ed.t["JCFN/y"]))
                .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => ed.intl.string(ed.t.lDbi6H))
                .with(a.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(H.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var tk = n(717925),
    tL = n(480642),
    tM = n(944355),
    tU = n(977445),
    tF = n(908419),
    tb = n(211287),
    tw = n(623373),
    tD = n(739508),
    tH = n(902130);
(0, r.A)();
var tG = n(136857),
    tK = n(566980),
    tB = n(855104),
    tW = n(120700),
    tV = n(742810),
    tY = n(426398);
n(322076);
var tz = n(289873),
    tZ = n(241989),
    tX = n(576052),
    tq = n(120992),
    tQ = n(194256),
    tJ = n(319820),
    t$ = n(327105),
    t0 = n(200766);
let t2 = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, tJ.AO)({ sku: t }),
            s = (0, tQ.oO)(l);
        r ? (s = ed.intl.string(t$.default.qwSlCO)) : (0, tw.Ab)(l) && (s = ed.intl.string(ed.t["0TmQRG"]));
        let a = (0, tQ.dL)(t),
            o = (0, Z.EZ)(t.id) ? tX.m[t.id].render({ className: t0.$ }) : (0, i.jsx)(tZ.WH, { sku: t, product: l });
        return (0, i.jsx)(tZ.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: tr.C,
        });
    },
    t1 = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, tq.A)({ applicationId: (0, p.P)(t), skuIDs: [t] });
        let l = (0, J.bG)([e5.A], () => e5.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(tz.y, { type: tz.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(t2, { sku: l, orbPriceAmount: n });
    },
    t7 = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(tM.vW, { label: ed.intl.string(ed.t.y0WGqP), value: null != t ? `${t}` : "", Icon: tr.C });
    },
    t8 = () => ed.intl.string(ed.t.wmcDyu);
function t6() {
    let { immediateDelivery: e } = (0, tF.U)(),
        t = t8();
    return (0, i.jsx)(tM._P, {
        variant: { type: tM.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let t3 = (0, I.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    t5 = {
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
                    } = (0, I.useContext)(t3),
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
                            { enabled: c } = tb.A.useConfig({ location: "orb_checkout_review_step" }),
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
                                onClickCheckout: O,
                                showCollectiblesDiscountWarning: A,
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
                                    C = (0, tB.gN)(),
                                    _ = (0, I.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: T } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: i,
                                            } = e,
                                            { activitySessionId: r } = (0, B.P5)(),
                                            { hasPaymentSources: s } = (0, tY.jm)(),
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
                                                    ...((e = (0, tV.q1)({
                                                        location: "OrbCheckoutModal",
                                                        unifiedCheckoutFlow: tW.C.ORB_CHECKOUT,
                                                    })),
                                                    {
                                                        payment_type: eJ.frM[eJ.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: e ? tV.rS.UNIFIED : tV.rS.LEGACY,
                                                        checkout_flow: tW.C.ORB_CHECKOUT,
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
                                                c(tK.h.COMPLETED),
                                                    s(a.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, C, T, s]),
                                    O = _.current ?? C,
                                    A = null != i ? i.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == i,
                                    showCollectiblesDiscountWarning: (0, eU.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, I.useMemo)(
                                        () =>
                                            null == l
                                                ? null
                                                : l.code === tG.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                  ? ed.intl.string(ed.t.keFvXM)
                                                  : l.code === tG.tG.ALREADY_PURCHASED
                                                    ? ed.intl.string(ed.t.m371Mx)
                                                    : ed.intl.string(ed.t.fqJZ11),
                                        [l],
                                    ),
                                    orbPriceAmount: A,
                                    order: d,
                                    orbBalanceToDisplay: O,
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
                            S = (0, g.bG)([e5.A], () => e5.A.get(t), [t]),
                            x = (0, tU.u)(S?.applicationId),
                            {
                                disabled: P,
                                tooltipText: f,
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
                                return { disabled: i, tooltipText: r, text: t8() };
                            })({ orbBalance: E, orbPriceAmount: c ? d : T, isInTestMode: x }),
                            v = (0, I.useMemo)(
                                () => ({ onClick: O, loading: r, text: N, disabled: P, tooltipText: f }),
                                [O, r, N, P, f],
                            ),
                            y = A ? ed.intl.format(ed.t.fsOXXO, {}) : null,
                            R = x ? ed.intl.string(ed.t.OvMyMd) : null;
                        return {
                            isStepLoading: _,
                            upperInlineNoticeProps: (0, I.useMemo)(() => {
                                if (null != R || null != y || null != h) {
                                    let e = [];
                                    return (
                                        null != R &&
                                            e.push({ type: "warning", message: R, key: "test-mode-warning-notice" }),
                                        null != y &&
                                            e.push({ type: "warning", message: y, key: "orb-checkout-warning-notice" }),
                                        null != h &&
                                            e.push({ type: "critical", message: h, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [R, y, h]),
                            purchaseItemContent: (0, i.jsx)(t1, { skuId: t, orbPriceAmount: c ? C : T }),
                            paymentMethodContent: (0, i.jsx)(t7, { orbBalance: E }),
                            legalContent: (0, i.jsx)(t6, {}),
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
                        (0, i.jsx)(eo.dZ, { children: (0, i.jsx)(tk.T, { ...d }) }),
                        (0, i.jsx)(eo.UX, { children: (0, i.jsx)(tL.lo, { primaryButtonProps: c }) }),
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
                            r = (0, g.bG)([ef.default], () => eN.Ay.canUseShopDiscounts(ef.default.getCurrentUser())),
                            s = (0, g.bG)([e5.A], () => e5.A.get(t), [t]),
                            a = (0, tO.JL)({ sku: s }),
                            { product: o } = (0, ev.q)(t),
                            u = (0, I.useMemo)(() => {
                                if (null != a) return { orbPriceAmount: a.amount };
                                if (null != o) {
                                    let e = (0, tw.CW)({ product: o, hasShopDiscount: r });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [a, o, r]);
                        u?.orbPriceAmount == null &&
                            (0, tD.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: c,
                                isSubmitting: d,
                                error: C,
                            } = (0, tH.Q)({ skuId: t, loadId: n, order: i }),
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
                return (0, i.jsx)(t3.Provider, {
                    value: p,
                    children: (0, i.jsx)(nu.g, { customPaymentModalProps: C, children: a }),
                });
            },
            overrideAnalyticParams: { payment_gateway: e2.kM.VIRTUAL_CURRENCY, currency: eJ.Yri.DISCORD_ORB },
        },
    },
    t4 = {
        [l.C.ORB_CHECKOUT]: {
            flowType: l.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: eJ.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: t5,
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
            TENANT_CHECKOUT_FLOW_CONFIG: tj,
        },
        [l.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_CHECKOUT },
        [l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: l.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: eJ.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tt,
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
var t9 = n(735305),
    ne = n(295405);
let nt = (e) => {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        r = I.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(ne.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, i.jsx)(t9.x, { ...l, onReturn: r });
};
var nn = n(545075);
let nl = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, I.useRef)(!1),
            { blockedPayments: r } = (0, B.P5)(),
            { handleStepChange: s } = t;
        return ((0, I.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(nn.oO, {})
            : null;
    },
    ni = {
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
class nr {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = t4[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = ni[e]),
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
              ? { key: null, renderStep: (e) => (0, i.jsx)(nl, { paymentModalStepProps: e, defaultStep: a.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, i.jsx)(o.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== l.C.ORB_CHECKOUT)
            return {
                key: a.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, i.jsx)(nt, {
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
            c = (0, tV.q1)({ location: "UnifiedCheckoutFlowManager", unifiedCheckoutFlow: this.checkoutFlow });
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
            checkout_design: c ? tV.rS.UNIFIED : tV.rS.LEGACY,
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
                tenantParams: O,
            } = e,
            A = { current: (0, r.A)() },
            h = { current: null },
            I = (e) => {
                (A.current = e.id), (h.current = e);
            },
            { modalKey: g } = t,
            S = this.generateRenderHeader(),
            x = m ?? this.getApplicationIdFor1PShopSKU(c),
            P = !!(null != a && a.isGift),
            f = !1;
        return (0, s.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: P });
                return (n) =>
                    (0, i.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != o && o(e), (f = !0);
                        },
                        onClose: u,
                        renderHeader: S,
                        skuId: c,
                        tenantParams: O ?? {},
                        loadId: A.current,
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
                    null != t.onCloseRequest && t.onCloseRequest(f, A.current), (0, s.closeModal)(g);
                },
                onCloseCallback: () => {
                    f ||
                        (C({ checkoutSucceeded: f, order: h.current }),
                        this.trackPaymentFlowCanceled({
                            loadId: A.current,
                            skuId: c,
                            skuProductLine: d,
                            applicationId: x,
                            discoverySessionId: p,
                            analyticsLocations: T,
                            analyticsObject: E,
                            analyticsSourceLocation: _,
                            isGift: P,
                        })),
                        null != t.onCloseCallback && t.onCloseCallback(f),
                        null != u && u(f, c);
                },
                modalKey: g,
            },
        );
    }
}
n(584160);
var ns = n(981036),
    na = n(367644);
let no = (e) => {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: r,
            renderLeftColumn: s,
            renderRightColumn: o,
            primaryCTAButtonProps: u,
            onBackClick: c,
        } = e,
        { hasPaymentSources: d } = (0, tY.jm)(),
        C = d ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS,
        p = I.useCallback(() => t(C), [t, C]),
        m = I.useMemo(
            () =>
                n === l.X.CUSTOM_STEP_BODY
                    ? r()
                    : n === l.X.TWO_COLUMN
                      ? (0, i.jsxs)("div", { className: na.D, children: [s(), o()] })
                      : null,
            [n, r, s, o],
        ),
        _ = I.useMemo(() => ({ ...u, onClick: p, text: ed.intl.string(ed.t.XiOHRX) }), [u, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eo.dZ, { children: m }),
            (0, i.jsx)(eo.UX, { children: (0, i.jsx)(ns.cy, { onBackClick: c, primaryCTAButtonProps: _ }) }),
        ],
    });
};
var nu = n(551892);
let nc = null,
    nd = null,
    nC = null,
    np = null,
    nm = null,
    n_ = {
        [l.C.ORB_CHECKOUT]: {
            get: function () {
                return null == nc && (nc = new nr({ checkoutFlow: l.C.ORB_CHECKOUT })), nc;
            },
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return null == nd && (nd = new nr({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), nd;
            },
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return null == nC && (nC = new nr({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), nC;
            },
        },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == np && (np = new nr({ checkoutFlow: l.C.PREMIUM_APPS_OTP_CHECKOUT })), np;
            },
        },
        [l.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return null == nm && (nm = new nr({ checkoutFlow: l.C.GUILD_PRODUCT_CHECKOUT })), nm;
            },
        },
    };
