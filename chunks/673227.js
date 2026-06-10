n.d(t, { o: () => nK }), n(321073);
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
    _ = n(310829),
    m = n(174459),
    E = n(75304),
    T = n(145659),
    I = n(793574),
    S = n(529427),
    O = n(862241),
    h = n(284009),
    A = n.n(h),
    P = n(964486),
    N = n(666646),
    f = n(64700),
    g = n(17928),
    x = n(871109);
let R = f.createContext(void 0);
function M() {
    let e = f.useContext(R);
    return A()(null != e, "GuildProductPurchaseContext not found"), e;
}
function U(e) {
    let { children: t, skuId: n, ...l } = e,
        i = (0, g.bG)([x.A], () => x.A.getGuildProduct(n));
    return (
        A()(null != i, "guildProductListing cannot be null"),
        (0, r.jsx)(R.Provider, { value: { guildProductListing: i, ...l }, children: t })
    );
}
function v(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: i } = M(),
        s = (0, N.sw)();
    return (
        (0, P.Ay)(() => {
            var e;
            A()(null != s, "invoicePreview cannot be null"),
                (e = { guildId: i, guildProductListingId: l.id, invoicePreview: s }),
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("37378"),
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
var L = n(503698),
    y = n.n(L),
    j = n(939249),
    k = n(789645),
    F = n(935462),
    D = n(303612),
    b = n(916261),
    w = n(575650);
function H(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(j.D, {
        className: y()(b.cG, t),
        onClick: n,
        children: (0, r.jsx)(k.P, { size: "xs", color: "currentColor", className: b.yP }),
    });
}
function G(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, r.jsxs)(F.rQ, {
        className: y()(b.wx, w.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(D.A, { className: b.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(H, { className: b.b, onClose: n }),
        ],
    });
}
var K = n(196617);
let B = {
    CHECKOUT_FLOW: S.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [o.pn.REVIEW]: O._M },
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
            { guildProductListing: l } = M();
        return n === o.pn.CONFIRM
            ? null
            : (0, r.jsx)(G, { guildProductListing: l, className: K.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(v, { ...e }) },
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
                (0, r.jsx)(q.K, { options: l, className: y()(ee.Oh, { [ee.R]: !i }) }),
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
    e_ = n(972607),
    em = n(482132),
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
        C = f.useRef(!1);
    A()(null != l, "Expected selectedSkuId"), A()(null != u, "Expected application");
    let p = c[l];
    A()(null != p, "Expected sku");
    let _ = null != o || null != i || null != a,
        m =
            s.length > 0
                ? eI.intl.formatToPlainString(eI.t.VuV3Td, { discountOfferAmount: s[0].discount.amount })
                : void 0;
    return (f.useEffect(() => {
        null == d ||
            _ ||
            C.current ||
            ((C.current = !0),
            (0, ep.A)({
                product: d,
                overrideTitle: m,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: $.gs.FIAT,
            }));
    }, [d, n, t, _, m]),
    _)
        ? (0, r.jsx)(em.dZ, { children: (0, r.jsx)(eE.A, {}) })
        : null;
}
function eO(e) {
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
        d = f.useRef(null),
        C = (0, eo.t4)((e) => e.selectedSkuId),
        p = (0, el.bG)([eu.A], () => eu.A.getProduct(C)),
        { confettiColors: _ } = (0, ec.A)(p?.styles);
    return (
        f.useEffect(() => {
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
                      (0, r.jsx)(e_.A, {
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
                              colors: _?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(eS, { ...e })
    );
}
var eh = n(123292),
    eA = n(859040),
    eP = n(993408),
    eN = n(575593),
    ef = n(452027),
    eg = n(922016),
    ex = n(778712),
    eR = n(834730),
    eM = n(534514),
    eU = n(986687),
    ev = n(999291),
    eL = n(903209),
    ey = n(287809),
    ej = n(428262),
    ek = n(674658),
    eF = n(898461),
    eD = n(203632),
    eb = n(892118),
    ew = n(536572),
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
        c = (0, g.bG)([ey.default], () => ey.default.getCurrentUser()),
        d = ej.Ay.canUseShopDiscounts(c),
        C = (0, ev.Ay)(o?.id),
        p = f.useRef(null),
        [_, m] = f.useState(!1),
        { product: E } = (0, ek.q)(t, !0),
        T = f.useMemo(() => (0, eP.fT)(E, d), [E, d]),
        I = (0, eK.V_)(E);
    if (null == E || 0 === E.items.length) return null;
    let [S] = E.items,
        O = (0, ew.VG)(E),
        h = null != o && o.id !== c?.id && E.type !== eN.R.BUNDLE && S.type !== eN.R.NAMEPLATE && !s;
    return (0, r.jsxs)("div", {
        className: i,
        children: [
            (0, r.jsx)("div", {
                className: y()(eB.QU, a),
                children: (0, r.jsx)(ef.D, {
                    label: eI.intl.string(eI.t.PpoJzt),
                    children:
                        h &&
                        (0, r.jsx)(
                            eg.Y,
                            {
                                targetElementRef: p,
                                align: "center",
                                shouldShow: _,
                                onRequestClose: () => m(!1),
                                preload: () => (0, eL.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(eU.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, ex.FT)(ex._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, eF.T)(S) ? S : null,
                                        pendingProfileEffect: (0, eD.C3)(S) ? S : null,
                                        pendingProfileFrame: (0, eb.s)(S) ? S : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, r.jsx)(j.D, {
                                        ...l,
                                        className: eB.Nx,
                                        innerRef: p,
                                        onClick: (e) => {
                                            m((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            _ ? e.stopPropagation() : n?.(e);
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
                className: y()(eB.i1, null != u ? eB.cN : eB.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: eB.Ug,
                        children: [
                            (0, r.jsx)(eH.O, { product: E }),
                            (0, r.jsxs)("div", {
                                className: eB.JZ,
                                children: [
                                    (0, r.jsx)(eR.E, { variant: "text-md/semibold", children: O }),
                                    (0, r.jsx)(eM.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            E?.type === eN.R.BUNDLE
                                                ? null
                                                : S.type === eN.R.AVATAR_DECORATION
                                                  ? eI.intl.string(eI.t["7v0T9P"])
                                                  : S.type === eN.R.NAMEPLATE
                                                    ? eI.intl.string(eI.t.x5CoXR)
                                                    : S.type === eN.R.PROFILE_EFFECT
                                                      ? eI.intl.string(eI.t.wR5wOo)
                                                      : S.type === eN.R.PROFILE_FRAME
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
                      leading: (0, r.jsx)(eY.A, { user: e, size: ex._3.SIZE_20 }),
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
        n = f.useMemo(() => eQ().uniq([...e, ...t]), [e, t]);
    return (0, g.yK)(
        [ey.default],
        () =>
            n.reduce((e, t) => {
                let n = ey.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var e1 = n(871181),
    e2 = n(318007),
    e7 = n(285719),
    e8 = n(976860),
    e3 = n(652215),
    e6 = n(353791);
function e4(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, W.Ay)(I.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(eh.Q, {
        text: eI.intl.string(eI.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, eA.Cz)({ analyticsLocations: l, analyticsSource: I.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, e8.pX)(`${e3.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var e5 = n(818348);
let e9 = (0, f.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        onStepChange: void 0,
    }),
    te = () => (0, f.useContext)(e9),
    tt = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = te(),
            { analyticsLocations: l } = (0, W.Ay)();
        return (0, r.jsx)(eO, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
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
                            _ = (0, es.gU)(),
                            E = (0, g.bG)([ey.default], () => ey.default.getCurrentUser()),
                            T = e0(),
                            I = async (e, t) => {
                                d(!0),
                                    null != a && s(),
                                    (await (0, eA.JJ)(e.id, t)) || s(eI.intl.string(eI.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, P.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== eT.vQ.DM_CHANNEL_WISHLIST &&
                                    m.default.track(e3.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                I(u, C));
                        });
                        let S = () =>
                            (0, r.jsx)(e1.A, {
                                onTextChange: (e) => i?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: e6.iX,
                                innerClassName: e6.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, r.jsx)("div", { className: e6.qL, children: (0, r.jsx)(e2.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, eP.pA)({ invoicePreview: p, selectedSkuId: C, skusById: _ });
                                return c === eT.vQ.USER_PROFILE_WISHLIST || c === eT.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(e7.Z, { giftRecipient: u }),
                                              S(),
                                              null != e &&
                                                  null != C &&
                                                  (0, r.jsx)(eV, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e6.uW,
                                                      previewHeaderClassName: e6.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: e6.fi,
                                                  children: (0, r.jsx)(e4, { handleClose: n, selectedSkuId: C }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(eZ, {
                                                  selectedSkuId: C,
                                                  recipients: T,
                                                  className: e6.uh,
                                                  validateSelectedGift: I,
                                              }),
                                              S(),
                                              null != e &&
                                                  null != C &&
                                                  (0, r.jsx)(eV, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e6.Ng,
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
                    o = f.useMemo(() => ({ loading: s, disabled: a }), [s, a]);
                return (0, r.jsx)(S.Mw, {
                    paymentModalStepProps: e,
                    layout: S.XZ.TWO_COLUMN,
                    renderLeftColumn: l,
                    renderRightColumn: i,
                    primaryCTAButtonProps: o,
                });
            },
            [o.pn.REVIEW]: O._M,
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
                            n = f.useRef(new X.OH()),
                            [l, r] = f.useState(null),
                            [i, a] = f.useState(!1),
                            s = f.useMemo(() => (0, J.AB)({ purchaseType: $.gs.FIAT, skuId: t }), [t]);
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
                    _ = null != n ? n.onStepChange : void 0,
                    m = (0, f.useMemo)(
                        () => ({
                            skuIDs: p,
                            setCustomConfettiVisible: c,
                            hideConfirmStepConfetti: C,
                            confettiCanvas: s,
                            onStepChange: _,
                        }),
                        [p, c, C, s, _],
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
                            purchaseType: e5.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, r.jsx)(e9.Provider, { value: m, children: l }),
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
                            a = f.useCallback(() => {
                                r(!0), l?.();
                            }, [l, r]);
                        return {
                            paymentModalSkuId: i,
                            paymentModalOnClose: f.useCallback(
                                (e) => {
                                    r(!1), n(e), Q.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, r],
                            ),
                            paymentModalOnComplete: a,
                        };
                    })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: r }),
                    d = f.useCallback(
                        (e) => {
                            u(e), e && a && s();
                        },
                        [u, a, s],
                    );
                return n({ ...t, skuId: o, onClose: d, onComplete: c, applicationId: e3.FYj, onStepChange: i });
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
        CHECKOUT_STEPS: { [o.pn.REVIEW]: O._M },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: l,
                    } = e,
                    i = f.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
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
    t_ = n(960851),
    tm = n(117945),
    tE = n(561794),
    tT = n(97352),
    tI = n(166403),
    tS = n(566980),
    tO = n(615310),
    th = n(811656),
    tA = n(363373),
    tP = n(800471),
    tN = n(941796),
    tf = n(957489),
    tg = n(822426);
let tx = [
        {
            key: o.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(tf.F, { ...e }),
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
            renderStep: (e) => (0, r.jsx)(tg.K, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: o.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(tN.Z, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, tP.lp)(e) ? null : eI.intl.string(eI.t["r+SebU"])),
                sectionHeaderText: () => eI.intl.string(eI.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: o.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(tA.j, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    tR = {
        CHECKOUT_FLOW: tp.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: tx,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: O._M },
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
                        children: C,
                    } = e,
                    p = (0, g.bG)([tI.A], () => tI.A.getPremiumTypeSubscription()),
                    _ = (0, t_.cg)() ? eT.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: m, giftRecipient: E } = d;
                if (null != a && !Object.values(eT.pe).includes(a))
                    throw Error("subscriptionTier must be a premium subscription");
                let T = (0, tE.tA)({ giftRecipient: E, isGift: m ?? !1 }),
                    I = f.useMemo(
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
                    S = f.useMemo(() => [...eT.oz], []);
                return (0, r.jsx)(Y.CheckoutRootProvider, {
                    loadId: c,
                    activeSubscription: null != s ? s : p,
                    stepConfigs: I,
                    skuIDs: S,
                    isGift: m,
                    defaultPlanId: _ ?? n,
                    referralCode: l,
                    referralTrialOfferId: i,
                    unifiedCheckoutFlow: tp.C.PREMIUM_CHECKOUT,
                    children: (0, r.jsx)(ts.Qt, { confirmationFooter: t, children: C }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { onClose: l, renderPurchaseConfirmation: i, continueSessionToInitialStep: a } = t;
                f.useEffect(() => {
                    tT.A.isLoadedForPremiumSKUs() || Q.h.wait(() => (0, tC.zS)());
                }, []);
                let { selectedSkuId: s, purchaseState: u } = (0, eo.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    c = (0, tO.bB)(),
                    {
                        isGift: d,
                        selectedGiftingPromotionReward: C,
                        openGiftingBadgePostPurchaseModal: p,
                    } = (0, Z.Pv)(),
                    _ = f.useCallback(
                        (e, t) => {
                            l(e, t), e && d && null == C && p();
                        },
                        [l, d, C, p],
                    ),
                    m = (0, tm.T)(d, s),
                    E = u === tS.h.PURCHASING;
                return (0, r.jsx)(th.A, {
                    isConfirmationStep: c === o.pn.CONFIRM && null == a && null == i,
                    isEligibleForWowMoment: m,
                    shouldPrefetchWowMoment: E,
                    children: n({
                        ...t,
                        onClose: _,
                        analyticsSubscriptionType: e3.rzx.PREMIUM,
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
var tM = n(67480),
    tU = n(328968),
    tv = n(371794),
    tL = n(565756);
o.pn.GIFT_CUSTOMIZATION;
let ty = {
    CHECKOUT_FLOW: S.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, Z.Pv)(),
                i = (0, eo.t4)((e) => e.selectedSkuId),
                a = (0, g.bG)([ey.default], () => ey.default.getCurrentUser()),
                s = (0, g.bG)([tM.A], () => (null != i ? tM.A.get(i) : null), [i]),
                o = e0(),
                u = (0, g.bG)([tU.A], () => (null != i ? tU.A.getForSKU(i) : null), [i]),
                c =
                    u?.headerBackground != null && s?.applicationId != null
                        ? (0, tv.YE)(s.applicationId, u.headerBackground, 256)
                        : void 0,
                d = async (e, t) => {},
                C = null == l || l.id === a?.id || t.length > eT.Jo,
                p = f.useMemo(() => ({ disabled: C }), [C]);
            return (0, r.jsx)(S.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: S.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: tL.P6,
                        children: [
                            s?.name != null &&
                                (0, r.jsx)(eM.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: s.name,
                                }),
                            null != c && (0, r.jsx)("img", { src: c, alt: s?.name ?? "", className: tL.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, r.jsxs)("div", {
                        className: tL.P6,
                        children: [
                            (0, r.jsx)(eZ, { recipients: o, selectedSkuId: i, validateSelectedGift: d }),
                            (0, r.jsx)(e1.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: tL.iX,
                                innerClassName: tL.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: p,
            });
        },
        [o.pn.REVIEW]: O._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: u.zX,
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: I.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var tj = n(429913),
    tk = n(733391),
    tF = n(821609),
    tD = n(318254),
    tb = n(262427),
    tw = n(510022),
    tH = n(317560),
    tG = n(366523),
    tK = n(208733);
function tB(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, W.Ay)(),
        { selectedSkuId: l, entitlementsGranted: i } = (0, eo.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, ei.V)(),
        s = (0, es.gU)(),
        { isGift: o, giftRecipient: u } = (0, Z.Pv)();
    A()(null != l, "Expected selectedSkuId"), A()(null != a, "Expected application");
    let c = s[l];
    A()(null != c, "Expected sku");
    let d = i.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (f.useEffect(() => {
            o || ((0, tH.j)(), t(), (0, tw.n)({ sku: c, application: a, analyticsLocations: n, orbsReward: C }));
        }, [o, c, a, t, n, C]),
        !o)
    )
        return null;
    let p = null != C && C > 0;
    return (0, r.jsxs)(em.dZ, {
        children: [
            (0, r.jsx)(eE.A, {}),
            (0, r.jsxs)("div", {
                className: tK.EL,
                children: [
                    (0, r.jsx)(tG.e, { sku: c, shape: "square", containerClassName: tK.LC }),
                    (0, r.jsx)(eM.D, {
                        variant: "heading-xl/semibold",
                        className: tK.RS,
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
                            className: tK.Is,
                            children: (0, r.jsx)(tb.J, {
                                Icon: tD.C,
                                text: eI.intl.format(eI.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: tK.UD,
                        children: (0, r.jsx)(tF.$, { onClick: t, text: eI.intl.string(eI.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var tV = n(889137),
    tW = n(742158),
    tY = n(683071),
    tz = n(313961),
    tZ = n(238017),
    tX = n(650588),
    tQ = n(723090),
    tq = n(763827),
    tJ = n(403362),
    t$ = n(871123),
    t0 = n(832163),
    t1 = n(44724),
    t2 = n(980094),
    t7 = n(806931),
    t8 = n(107610);
function t3(e) {
    let { handleClose: t, sku: n, application: l } = e,
        i = f.useCallback(() => {
            (0, t1.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        s = f.useCallback(() => {
            t();
            let e = t0.A.getStorefrontState(n.applicationId)?.activePage;
            (0, t$.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: l?.guildId,
                skuId: n.id,
            }) ||
                ((0, a.closeAllModals)(),
                (0, t1.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, l]);
    return (0, r.jsx)("div", {
        className: t8.$O,
        children: (0, r.jsx)(eh.Q, {
            text: eI.intl.string(eI.t.ImioFL),
            onMouseDown: i,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let t6 = {
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
                            setSoundEffect: _,
                            giftingOrigin: m,
                            additionalUserIds: E,
                        } = (0, Z.Pv)(),
                        T = (0, eo.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, ei.V)(),
                        S = (0, g.bG)([ey.default], () => ey.default.getCurrentUser()),
                        O =
                            ((t = S?.id),
                            (n = e0()),
                            (l = (function (e) {
                                let t = (0, g.bG)([tq.A], () => (tq.A.isConnected() ? tq.A.getChannelId() : null)),
                                    [n, l] = f.useState([]);
                                return (
                                    f.useEffect(() => {
                                        let n = null != t ? tz.A.getParticipants(t) : [],
                                            r = [],
                                            i = new Set();
                                        for (let t of n)
                                            (!(0, t7.Xw)(t) && !(0, t7.Ay)(t)) ||
                                                t.user.id === e ||
                                                i.has(t.user.id) ||
                                                (i.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, t7.Ay)(e) && !(0, t7.Ay)(t)
                                                ? -1
                                                : (0, t7.Ay)(t) && !(0, t7.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (i = (0, g.yK)([ey.default], () => E?.map(ey.default.getUser).filter(tJ.Vq) ?? [], [E])),
                            f.useMemo(
                                () =>
                                    eQ().uniqWith(
                                        [...(null != c ? [c] : []), ...i, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, i, l, n],
                            )),
                        h = (0, g.bG)([tM.A], () => (null != T ? tM.A.get(T) : null), [T]),
                        { userPrice: A } = (0, tQ.CD)({ sku: h, priceSetAssignmentPurchaseType: e3.lid.GIFT }),
                        P = (0, t$.fq)(h),
                        N = (0, t$.xf)(h),
                        x = async (e, t) => {},
                        R = (e) => {
                            null != _ && _(null == e ? void 0 : e);
                        },
                        M = () =>
                            (0, r.jsxs)("div", {
                                className: t8.mT,
                                children: [
                                    null != P &&
                                        (0, r.jsx)(tG.A, {
                                            containerClassName: t8.T3,
                                            cardImage: P,
                                            cardBackgroundImage: N,
                                            altText: h?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: t8._T,
                                        children: [
                                            (0, r.jsx)(tX.A, { sound: C, onSelect: R }),
                                            (0, r.jsx)(tZ.A, {
                                                setEmojiConfetti: p,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        U = () => {
                            let e = h?.orbsReward;
                            return (0, r.jsxs)("div", {
                                className: t8.Tc,
                                children: [
                                    null != c && (m === eT.vQ.USER_PROFILE_WISHLIST || m === eT.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(e7.Z, { giftRecipient: c })
                                        : (0, r.jsx)(eZ, { selectedSkuId: T, validateSelectedGift: x, recipients: O }),
                                    (0, r.jsx)(e1.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: t8.iX,
                                        innerClassName: t8.pt,
                                    }),
                                    null == h
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: t8.AN,
                                              children: [
                                                  (0, r.jsx)(tW.z, {
                                                      className: t8.jr,
                                                      children: eI.intl.string(eI.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: t8.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: t8.Xb,
                                                              children:
                                                                  null != h &&
                                                                  null != P &&
                                                                  (0, r.jsx)(tG.A, {
                                                                      containerClassName: t8.Iy,
                                                                      cardImage: P,
                                                                      cardBackgroundImage: N,
                                                                      altText: h.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: t8.vz,
                                                              children: [
                                                                  null != I && (0, r.jsx)(t2.Q, { application: I }),
                                                                  (0, r.jsx)(eR.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: h.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(eR.E, {
                                                              variant: "text-md/semibold",
                                                              children: A,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != h &&
                                        (0, t$.Ri)(h) &&
                                        (0, r.jsx)(tY.w, { type: "info", children: eI.intl.string(eI.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, r.jsx)(tb.J, {
                                            Icon: tD.C,
                                            text: eI.intl.format(eI.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != h && (0, r.jsx)(t3, { handleClose: s, sku: h, application: I }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, r.jsxs)("div", { className: t8.Du, children: [M(), U()] }),
                        getLeftColumnComponent: M,
                        getRightColumnComponent: U,
                        onStepChange: a,
                        onBackClick: s,
                        disabled: null == c || c.id === S?.id || o.length > eT.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = f.useMemo(() => ({ disabled: i }), [i]);
            return (0, r.jsx)(S.Mw, {
                paymentModalStepProps: e,
                layout: S.XZ.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: a,
            });
        },
        [o.pn.REVIEW]: O._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(tB, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: l, applicationId: i, isGift: a, skuId: s, ...o } = e;
            return (
                ((e) => {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, tj.h)(t);
                    f.useEffect(() => {
                        null == l ||
                            null == n ||
                            tU.A.isFetchingForSKU(n) ||
                            null != tM.A.get(n) ||
                            (0, tk.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: i, skuId: s }),
                (0, r.jsx)(Y.CheckoutRootProvider, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: i,
                    skuIDs: [s],
                    purchaseType: e5.VV.ONE_TIME,
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
            n = (0, tV.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => eI.intl.string(eI.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => eI.intl.string(eI.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(V.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var t4 = n(274971),
    t5 = n(480642),
    t9 = n(944355),
    ne = n(977445),
    nt = n(908419),
    nn = n(211287),
    nl = n(623373),
    nr = n(739508),
    ni = n(715054);
(0, i.A)();
var na = n(136857),
    ns = n(158317),
    no = n(855104),
    nu = n(426398);
n(322076);
var nc =
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
    nd = n(289873),
    nC = n(241989),
    np = n(576052),
    n_ = n(120992),
    nm = n(194256),
    nE = n(319820),
    nT = n(327105),
    nI = n(200766);
let nS = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: i } = (0, nE.AO)({ sku: t }),
            a = (0, nm.oO)(l);
        i ? (a = eI.intl.string(nT.default.qwSlCO)) : (0, nl.Ab)(l) && (a = eI.intl.string(eI.t["0TmQRG"]));
        let s = (0, nm.dL)(t),
            o = (0, $.EZ)(t.id) ? np.m[t.id].render({ className: nI.$ }) : (0, r.jsx)(nC.WH, { sku: t, product: l });
        return (0, r.jsx)(nC.f7, {
            label: s,
            description: a,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: tD.C,
        });
    },
    nO = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, n_.c)({ applicationId: (0, _.P)(t), skuIDs: [t] });
        let l = (0, el.bG)([tM.A], () => tM.A.get(t), [t]);
        return null == l
            ? (0, r.jsx)(nd.y, { type: nd.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(nS, { sku: l, orbPriceAmount: n });
    },
    nh = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(t9.vW, { label: eI.intl.string(eI.t.y0WGqP), value: null != t ? `${t}` : "", Icon: tD.C });
    },
    nA = () => eI.intl.string(eI.t.wmcDyu);
function nP() {
    let { immediateDelivery: e } = (0, nt.U)(),
        t = nA();
    return (0, r.jsx)(t9._P, {
        variant: { type: t9.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let nN = (0, f.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    nf = () => (0, f.useContext)(nN),
    ng = { payment_gateway: e5.kM.VIRTUAL_CURRENCY, currency: e3.Yri.DISCORD_ORB },
    nx = {
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
                    } = nf(),
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
                            { enabled: c } = nn.A.useConfig({ location: "orb_checkout_review_step" }),
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
                                showCollectiblesDiscountWarning: O,
                                errorMessage: h,
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
                                    C = (0, no.gN)(),
                                    p = (0, f.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: E } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: i } = (0, ei.V)(),
                                            { hasPaymentSources: a } = (0, nu.jm)(),
                                            {
                                                loadId: s,
                                                startTime: u,
                                                discoverySessionId: c,
                                            } = (0, eo.t4)((e) => e.contextMetadata),
                                            d = (0, f.useMemo)(
                                                () => ({
                                                    load_id: s,
                                                    discovery_session_id: c,
                                                    application_id: (0, _.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: i,
                                                    payment_gateway: e5.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: e3.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: e3.frM[e3.VVm.ONE_TIME],
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
                                            emitOrbCheckoutPaymentFlowEvent: (0, f.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === e3.HAw.PAYMENT_FLOW_STARTED
                                                        ? m.default.track(e3.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...d,
                                                              has_saved_payment_source: a,
                                                              payment_gateway: e5.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === e3.HAw.PAYMENT_FLOW_LOADED
                                                          ? m.default.track(e3.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...d,
                                                                has_saved_payment_source: a,
                                                                initial_step: o.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === e3.HAw.PAYMENT_FLOW_CANCELED
                                                            ? m.default.track(e3.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...d,
                                                                  duration_ms: n,
                                                              })
                                                            : e === e3.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? m.default.track(e3.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...d,
                                                                    duration_ms: n,
                                                                })
                                                              : e === e3.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? m.default.track(e3.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                  })
                                                                : m.default.track(e3.HAw.PAYMENT_FLOW_FAILED, {
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
                                (0, f.useEffect)(() => {
                                    null != l &&
                                        null !== p.current &&
                                        (E(e3.HAw.PAYMENT_FLOW_FAILED, l), (p.current = null));
                                }, [l, E]);
                                let I = (0, f.useCallback)(() => {
                                        (p.current = C),
                                            E(e3.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(tS.h.COMPLETED),
                                                    a(o.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, C, E, a]),
                                    S = p.current ?? C,
                                    O = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, eK.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, f.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof ns.FY && null != t)
                                                    switch (t) {
                                                        case nc.INSUFFICIENT_ORB_BALANCE:
                                                            return eI.intl.string(eI.t.keFvXM);
                                                        case nc.SKU_ALREADY_OWNED:
                                                            return eI.intl.string(eI.t.m371Mx);
                                                        case nc.BUNDLE_PARTIALLY_OWNED:
                                                            return eI.intl.string(eI.t.v9oC0p);
                                                        default:
                                                            return eI.intl.string(eI.t.fqJZ11);
                                                    }
                                                return e instanceof ns.j2
                                                    ? eI.intl.string(eI.t["2BmwgV"])
                                                    : e.code === na.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? eI.intl.string(eI.t.keFvXM)
                                                      : e.code === na.tG.ALREADY_PURCHASED
                                                        ? eI.intl.string(eI.t.m371Mx)
                                                        : eI.intl.string(eI.t.fqJZ11);
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
                                orbRedemptionError: a,
                                onRedeemVirtualCurrency: s,
                                handleStepChange: u,
                            }),
                            A = (0, g.bG)([tM.A], () => tM.A.get(t), [t]),
                            P = (0, ne.uS)(A?.applicationId),
                            {
                                disabled: N,
                                tooltipText: x,
                                text: R,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: r, tooltipText: i } = (0, f.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: eI.intl.string(eI.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: eI.intl.string(eI.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: r, tooltipText: i, text: nA() };
                            })({ orbBalance: I, orbPriceAmount: c ? d : E, isInTestMode: P }),
                            M = (0, f.useMemo)(
                                () => ({ onClick: S, loading: i, text: R, disabled: N, tooltipText: x }),
                                [S, i, R, N, x],
                            ),
                            U = O ? eI.intl.format(eI.t.fsOXXO, {}) : null,
                            v = P ? eI.intl.string(eI.t.OvMyMd) : null;
                        return {
                            isStepLoading: p,
                            upperInlineNoticeProps: (0, f.useMemo)(() => {
                                if (null != v || null != U || null != h) {
                                    let e = [];
                                    return (
                                        null != v &&
                                            e.push({ type: "warning", message: v, key: "test-mode-warning-notice" }),
                                        null != U &&
                                            e.push({ type: "warning", message: U, key: "orb-checkout-warning-notice" }),
                                        null != h &&
                                            e.push({ type: "critical", message: h, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [v, U, h]),
                            purchaseItemContent: (0, r.jsx)(nO, { skuId: t, orbPriceAmount: c ? C : E }),
                            paymentMethodContent: (0, r.jsx)(nh, { orbBalance: I }),
                            legalContent: (0, r.jsx)(nP, {}),
                            primaryButtonProps: M,
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
                        (0, r.jsx)(em.dZ, { children: (0, r.jsx)(t4.T, { ...d }) }),
                        (0, r.jsx)(em.UX, { children: (0, r.jsx)(t5.lo, { primaryButtonProps: c }) }),
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
                            a = (0, g.bG)([ey.default], () => ej.Ay.canUseShopDiscounts(ey.default.getCurrentUser())),
                            s = (0, g.bG)([tM.A], () => tM.A.get(t), [t]),
                            o = (0, tQ.JL)({ sku: s }),
                            { product: u } = (0, ek.q)(t),
                            c = (0, f.useMemo)(() => {
                                if (null != o) return { orbPriceAmount: o.amount };
                                if (null != u) {
                                    let e = (0, nl.CW)({ product: u, hasShopDiscount: a });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [o, u, a]);
                        c?.orbPriceAmount == null &&
                            (0, nr.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: d,
                                isSubmitting: C,
                                error: p,
                            } = (0, ni.Q)({ skuId: t, loadId: n, order: i, onSignFailure: r }),
                            _ = (0, f.useCallback)(
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
                    })({ skuId: t, loadId: n, order: a, onSignFailure: s }),
                    C = (0, f.useMemo)(
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
                return (0, r.jsx)(nN.Provider, { value: C, children: i });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l } = nf(),
                    r = ((e) => {
                        let { orbProductContext: t, overrideAnalyticParams: n } = e;
                        return {
                            analyticsDataOverride: (0, f.useMemo)(() => {
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
    nR = {
        [E.C.ORB_CHECKOUT]: {
            flowType: E.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: e3.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nx,
        },
        [E.C.COLLECTIBLES_CHECKOUT]: {
            flowType: E.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: e3.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tr,
        },
        [E.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: E.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: e3.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: t6,
        },
        [E.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: E.C.PREMIUM_CHECKOUT,
            purchaseType: e3.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: tR,
        },
        [E.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: E.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [E.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: E.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: e3.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ty,
        },
        [E.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: E.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [E.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: e3.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: B,
            flowType: E.C.GUILD_PRODUCT_CHECKOUT,
        },
        [E.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: E.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: td,
            purchaseType: e3.VVm.SUBSCRIPTION,
        },
        [E.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: E.C.GUILD_BOOST_CHECKOUT },
    };
var nM = n(735305),
    nU = n(169801),
    nv = n(380619),
    nL = n(295405),
    ny = n(558620);
let nj = (e) => {
        let { returnStep: t = o.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
            { purchaseType: i } = (0, eo.t4)((e) => ({ purchaseType: e.purchaseType })),
            a = f.useCallback(
                () =>
                    ((e) => {
                        let {
                            paymentModalStepProps: t,
                            returnStep: n = o.pn.REVIEW,
                            returnStepIfNoPaymentSources: l,
                            purchaseType: r,
                        } = e;
                        if (0 === Object.keys(nL.A.paymentSources).length) {
                            if (null != l) return void t.handleStepChange(l);
                            r === e5.VV.SUBSCRIPTION
                                ? t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS })
                                : t.handleClose();
                        } else t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS });
                    })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l, purchaseType: i }),
                [t, n, l, i],
            );
        return (0, r.jsx)(nM.x, { ...l, onReturn: a });
    },
    nk = (e) => {
        let { initialPlanId: t, referralTrialOfferId: n } = e,
            l = (0, eo.t4)((e) => e.selectedSkuId),
            i = (0, ny.A)(),
            { isGift: a, claimableRewards: s } = (0, Z.Pv)(),
            u = (0, nU.A)({ isGift: a, skuId: l, referralTrialOfferId: n }),
            c = (0, tP.lp)(u),
            d = (0, nv.px)(i, a, s),
            C = f.useMemo(() => {
                let e = null == t ? o.pn.PLAN_SELECT : o.pn.REVIEW;
                return c && (e = o.pn.REVIEW), d && (e = o.pn.SELECT_FREE_SKU), e;
            }, [c, d, t]);
        return (0, r.jsx)(nj, { paymentModalStepProps: e, returnStep: o.pn.REVIEW, returnStepIfNoPaymentSources: C });
    },
    nF = (e) => {
        let {
            checkoutFlow: t,
            returnStep: n = o.pn.REVIEW,
            returnStepIfNoPaymentSources: l,
            paymentModalStepProps: i,
        } = e;
        return t === E.C.PREMIUM_CHECKOUT
            ? (0, r.jsx)(nk, { ...i })
            : (0, r.jsx)(nj, { paymentModalStepProps: i, returnStep: n, returnStepIfNoPaymentSources: l });
    };
var nD = n(246681),
    nb = n(86379),
    nw = n(545075);
let nH = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, f.useRef)(!1),
            i = (0, nb.Hp)(),
            { handleStepChange: a } = t;
        return ((0, f.useEffect)(() => {
            i || l.current || (a(n), (l.current = !0));
        }, [i, a, n]),
        i)
            ? (0, r.jsx)(nw.oO, {})
            : null;
    },
    nG = {
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
class nK {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = nR[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = nG[e]),
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
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? u.kO
            : "subscription" === e
              ? u.r3
              : {
                    key: null,
                    renderStep: (e) => (0, r.jsx)(nH, { paymentModalStepProps: e, defaultStep: o.pn.REVIEW }),
                };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== E.C.ORB_CHECKOUT)
            return {
                key: o.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(nF, {
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
            ? (0, _.P)(e)
            : this.checkoutFlow === E.C.COLLECTIBLES_CHECKOUT
              ? e3.FYj
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
        m.default.track(e3.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: i,
            payment_type: e3.frM[this.checkoutFlowConfiguration.purchaseType],
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
            ...(this.checkoutFlow === E.C.PREMIUM_CHECKOUT ? { subscription_type: e3.rzx.PREMIUM } : {}),
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
                discoverySessionId: _,
                applicationId: m,
                analyticsSourceLocation: T,
                analyticsLocations: I,
                analyticsObject: S,
                tenantParams: O,
                activeSubscription: h = null,
                ...A
            } = e,
            P = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            N = arguments.length > 2 ? arguments[2] : void 0,
            f = { current: (this.checkoutFlow === E.C.PREMIUM_CHECKOUT ? (0, p.A)() : null) ?? (0, i.A)() },
            g = { current: null },
            { modalKey: x } = N,
            R = this.generateRenderHeader(),
            M = m ?? this.getApplicationId(c),
            U = !!(null != l && l.isGift),
            v = !1,
            L = {
                ...A,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: U }),
                onComplete: (e) => {
                    null != o && o(e), (v = !0);
                },
                onClose: u,
                renderHeader: R,
                skuId: c ?? null,
                tenantParams: O ?? {},
                loadId: f.current,
                onOrderCreated: (e) => {
                    (f.current = e.id), (g.current = e);
                },
                discoverySessionId: _,
                activeSubscription: h,
                applicationId: M,
                analyticsLocations: I,
                analyticsObject: S,
                analyticsSourceLocation: T,
                giftContextProps: l,
                additionalOptions: t,
            };
        if ("modal" === P)
            return (0, a.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.resolve().then(n.bind(n, 246681));
                    return (t) => (0, r.jsx)(e, { ...L, renderModalProps: t });
                },
                {
                    ...N,
                    onCloseRequest: () => {
                        null != N.onCloseRequest && N.onCloseRequest(v, f.current),
                            N.skipCloseModalOnCloseRequest || (0, a.closeModal)(x);
                    },
                    onCloseCallback: () => {
                        v ||
                            (C({ checkoutSucceeded: v, order: g.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: f.current,
                                skuId: c,
                                skuProductLine: d,
                                applicationId: M,
                                discoverySessionId: _,
                                analyticsLocation: A.analyticsLocation,
                                analyticsLocations: I,
                                analyticsObject: S,
                                analyticsSourceLocation: T,
                                isGift: U,
                                eligibleForTrial: null != A.trialId,
                            })),
                            null != N.onCloseCallback && N.onCloseCallback(v),
                            null != u && u(v, c);
                    },
                    modalKey: x,
                },
            );
        {
            let e = { transitionState: s.ip.ENTERED, onClose: e3.tEg };
            return (0, r.jsx)(nD.UnifiedCheckoutInstance, { ...L, renderModalProps: e });
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
