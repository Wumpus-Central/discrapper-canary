"use strict";
n.d(t, { Tt: () => tQ, KY: () => t0, CL: () => i.C, Tx: () => tJ });
var i = n(285871);
n(321073);
var r = n(627968),
    s = n(132500),
    a = n(192308),
    o = n(166532),
    l = n(546042),
    d = n(939220),
    _ = n(310829),
    u = n(945477),
    c = n(64700),
    E = n(20742),
    h = n(688810),
    m = n(736843),
    f = n(937008),
    g = n(156312),
    p = n(503698),
    A = n.n(p),
    I = n(106778),
    T = n(228366),
    S = n(793574),
    N = n(213530),
    C = n(158216),
    R = n(758836),
    O = n(483764);
let y = { sliderBodyClassName: O.Bz },
    v = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(I.Fk, { ref: n, className: O.Lb, environment: t.current }),
                (0, r.jsx)(N.K, { options: i, className: A()(O.Oh, { [O.R]: !s }) }),
            ],
        });
    };
var D = n(284009),
    L = n.n(D),
    b = n(702841),
    w = n(775602),
    P = n(427675),
    k = n(94420),
    M = n(590180),
    U = n(953150),
    x = n(524246),
    G = n(14368),
    V = n(61750),
    F = n(972607),
    B = n(482132),
    H = n(921925),
    j = n(788868),
    W = n(985018);
function Y(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        i = (0, k.t4)((e) => e.selectedSkuId),
        {
            application: s,
            paymentError: a,
            purchaseError: o,
            purchasePreviewError: l,
            appliedUserDiscounts: d,
        } = (0, g.P5)(),
        _ = (0, P.gU)(),
        u = (0, b.bG)([M.A], () => M.A.getProduct(i)),
        E = c.useRef(!1);
    L()(null != i, "Expected selectedSkuId"), L()(null != s, "Expected application");
    let h = _[i];
    L()(null != h, "Expected sku");
    let m = null != a || null != o || null != l,
        f =
            d.length > 0
                ? W.intl.formatToPlainString(W.t.VuV3Td, { discountOfferAmount: d[0].discount.amount })
                : void 0;
    return (c.useEffect(() => {
        null == u ||
            m ||
            E.current ||
            ((E.current = !0),
            (0, V.A)({
                product: u,
                overrideTitle: f,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: R.gs.FIAT,
            }));
    }, [u, n, t, m, f]),
    m)
        ? (0, r.jsx)(B.dZ, { children: (0, r.jsx)(H.A, {}) })
        : null;
}
function K(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: i,
            hasSentMessage: s,
            giftRecipient: a,
            giftMessageError: o,
            isSendingMessage: l,
            giftingOrigin: d,
        } = (0, f.Pv)(),
        _ = (0, b.bG)([w.A], () => w.A.useReducedMotion),
        u = c.useRef(null),
        E = (0, k.t4)((e) => e.selectedSkuId),
        h = (0, b.bG)([M.A], () => M.A.getProduct(E)),
        { confettiColors: m } = (0, U.A)(h?.styles);
    return (
        c.useEffect(() => {
            t &&
                null != a &&
                null != E &&
                (d === j.vQ.USER_PROFILE_WISHLIST || d === j.vQ.DM_CHANNEL_WISHLIST) &&
                T.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: E, recipientId: a.id });
        }, [t, a, E, d]),
        t
            ? (0, r.jsxs)("div", {
                  ref: u,
                  children: [
                      (0, r.jsx)(F.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: i,
                          hasSentMessage: s,
                          giftRecipient: a,
                          giftMessageError: o,
                          isSendingMessage: l,
                      }),
                      !e.hideConfetti &&
                          !_ &&
                          (0, r.jsx)(x.A, {
                              confettiTarget: u.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, G.rA)(h?.categorySkuId),
                              colors: m?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(Y, { ...e })
    );
}
var z = n(17928),
    $ = n(123292),
    q = n(964486),
    X = n(29292),
    Z = n(993408),
    Q = n(575593),
    J = n(452027),
    ee = n(922016),
    et = n(778712),
    en = n(939249),
    ei = n(834730),
    er = n(534514),
    es = n(986687),
    ea = n(576622),
    eo = n(287809),
    el = n(927578),
    ed = n(674658),
    e_ = n(898461),
    eu = n(203632),
    ec = n(536572),
    eE = n(14702),
    eh = n(219103),
    em = n(525723),
    ef = n(780651);
let eg = (e) => {
    let {
            skuId: t,
            isSelected: n,
            priceAmount: i,
            priceCurrency: s,
            onSelect: a,
            shouldDisplayHeader: o = !1,
            className: l,
            previewHeaderClassName: d,
            hideProfilePreview: _ = !1,
        } = e,
        { product: u } = (0, ed.q)(t, !0),
        { giftRecipient: E, giftRecipientError: h } = (0, f.Pv)(),
        m = (0, z.bG)([eo.default], () => eo.default.getCurrentUser()),
        g = (0, ec.VG)(u),
        p = c.useRef(null),
        I = el.Ay.canUseCollectibles(m),
        T = c.useMemo(() => (0, Z.fT)(u, I), [u, I]),
        S = (0, em.V_)(u);
    if (null == u) return null;
    let [N] = u.items;
    L()(null != N, "Product item should not be empty");
    let C = null != E && E.id !== m?.id && u.type !== Q.R.BUNDLE && N.type !== Q.R.NAMEPLATE && !_;
    return (0, r.jsxs)("div", {
        className: l,
        children: [
            o &&
                (0, r.jsx)("div", {
                    className: A()(ef.QU, d),
                    children: (0, r.jsx)(J.D, {
                        label: W.intl.string(W.t.PpoJzt),
                        children:
                            C &&
                            (0, r.jsx)(
                                ee.Y,
                                {
                                    targetElementRef: p,
                                    preload: () => (0, ea.A)(E.id, E.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(es.A, {
                                            ...e,
                                            user: E,
                                            pendingAvatar: E.getAvatarURL(null, (0, et.FT)(et._3.SIZE_80)),
                                            pendingAvatarDecoration: (0, e_.T)(N) ? N : null,
                                            pendingProfileEffect: (0, eu.C3)(N) ? N : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0,
                                            hideExampleButton: !0,
                                        }),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, r.jsx)(en.D, {
                                            ...e,
                                            className: ef.Nx,
                                            innerRef: p,
                                            children: (0, r.jsx)(ei.E, {
                                                variant: "text-xs/medium",
                                                color: "text-link",
                                                children: W.intl.string(W.t["2GnJQL"]),
                                            }),
                                        }),
                                },
                                E.id,
                            ),
                    }),
                }),
            (0, r.jsxs)(en.D, {
                tag: "div",
                onClick: () => {
                    null != t && null != a && a(t);
                },
                className: A()(ef.i1, { [ef.no]: n && null == h, [ef.cN]: n && null != h }),
                children: [
                    (0, r.jsxs)("div", {
                        className: ef.Ug,
                        children: [
                            (0, r.jsx)(eE.O, { product: u, fallbackLabel: null }),
                            (0, r.jsxs)("div", {
                                className: ef.JZ,
                                children: [
                                    (0, r.jsx)(ei.E, { variant: "text-md/semibold", children: g }),
                                    (0, r.jsx)(er.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: (() => {
                                            if (u?.type === Q.R.BUNDLE) return null;
                                            switch (N.type) {
                                                case Q.R.AVATAR_DECORATION:
                                                    return W.intl.string(W.t["7v0T9P"]);
                                                case Q.R.PROFILE_EFFECT:
                                                    return W.intl.string(W.t.wR5wOo);
                                                case Q.R.NAMEPLATE:
                                                    return W.intl.string(W.t.x5CoXR);
                                                default:
                                                    return null;
                                            }
                                        })(),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(eh.x, {
                                priceAmount: i,
                                priceCurrency: s,
                                discount: T,
                                discountOfferAmount: S,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    n &&
                        null != h &&
                        (0, r.jsx)("div", {
                            className: ef.Wh,
                            children: (0, r.jsx)(ei.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: h,
                            }),
                        }),
                ],
            }),
        ],
    });
};
var ep = n(734925),
    eA = n(687033),
    eI = n(871181),
    eT = n(318007),
    eS = n(285719),
    eN = n(976860),
    eC = n(954571),
    eR = n(652215),
    eO = n(353791);
function ey(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, h.Ay)(S.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)($.Q, {
        text: W.intl.string(W.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, X.Cz)({ analyticsLocations: i, analyticsSource: S.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, eN.pX)(`${eR.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var ev = n(818348);
let eD = (0, c.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    eL = () => (0, c.useContext)(eD),
    eb = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: i } = eL();
        return (0, r.jsx)(K, { analyticsLocations: t, hideConfetti: n, confettiCanvas: i, ...e });
    },
    ew = (0, m.Mz)(),
    eP = {
        [o.pn.GIFT_CUSTOMIZATION]: () => W.intl.string(W.t["JCFN/y"]),
        [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => W.intl.string(W.t.lDbi6H),
        [o.pn.CONFIRM]: () => "",
    },
    ek = (e) => {
        let { step: t } = e,
            n = eP[t];
        return null == n ? null : (0, r.jsx)(E.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    eM = {
        CustomPaymentContextProvider: (e) => {
            let { skuId: t, analyticsLocations: n, children: i, ...s } = e,
                {
                    environment: a,
                    confettiCanvas: o,
                    setConfettiCanvas: l,
                    customConfettiVisible: d,
                    setCustomConfettiVisible: _,
                    customConfettiDisplayOptions: u,
                    hideConfirmStepConfetti: E,
                } = ((e) => {
                    let { skuId: t } = e,
                        n = c.useRef(new I.OH()),
                        [i, r] = c.useState(null),
                        [s, a] = c.useState(!1),
                        o = c.useMemo(() => (0, C.AB)({ purchaseType: R.gs.FIAT, skuId: t }), [t]);
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
                { analyticsLocations: m } = ((e) => {
                    let { analyticsLocations: t } = e,
                        { analyticsLocations: n } = (0, h.Ay)([...t, S.A.COLLECTIBLES_PAYMENT_MODAL]);
                    return { analyticsLocations: n };
                })({ analyticsLocations: n ?? [] }),
                f = ((e) => {
                    let { skuId: t } = e;
                    return null != t ? [t] : [];
                })({ skuId: t }),
                p = (0, c.useMemo)(
                    () => ({
                        analyticsLocations: m,
                        skuIDs: f,
                        setCustomConfettiVisible: _,
                        hideConfirmStepConfetti: E,
                        confettiCanvas: o,
                    }),
                    [m, f, _, E, o],
                );
            return (0, r.jsxs)(h.f5, {
                value: m,
                children: [
                    (0, r.jsx)(v, {
                        environment: a,
                        setConfettiCanvas: l,
                        customConfettiDisplayOptions: u,
                        customConfettiVisible: d,
                    }),
                    (0, r.jsx)(g.PaymentContextProvider, {
                        ...s,
                        skuIDs: f,
                        stepConfigs: s.stepConfigs,
                        activeSubscription: null,
                        purchaseType: ev.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, r.jsx)(eD.Provider, { value: p, children: i }),
                    }),
                ],
            });
        },
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsSourceLocation: i,
                    renderModalProps: s,
                    onClose: a,
                    onComplete: o,
                    flowSpecificOptions: l,
                    children: d,
                } = e,
                _ = s.onClose,
                { skuIDs: u, setCustomConfettiVisible: E, analyticsLocations: h } = eL(),
                {
                    paymentModalSkuId: m,
                    paymentModalOnClose: f,
                    paymentModalOnComplete: g,
                } = ((e) => {
                    let { skuIDs: t, onClose: n, onComplete: i, setCustomConfettiVisible: r } = e,
                        s = t[0] ?? null,
                        a = c.useCallback(() => {
                            r(!0), i?.();
                        }, [i, r]);
                    return {
                        paymentModalSkuId: s,
                        paymentModalOnClose: c.useCallback(
                            (e) => {
                                r(!1), n(e), T.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                            },
                            [n, r],
                        ),
                        paymentModalOnComplete: a,
                    };
                })({
                    onClose: (e) => {
                        _(), a?.(e);
                    },
                    onComplete: o,
                    skuIDs: u,
                    setCustomConfettiVisible: E,
                }),
                p = (0, c.useMemo)(
                    () => ({
                        loadId: n,
                        skuId: t,
                        analyticsLocations: h,
                        analyticsSourceLocation: i,
                        flowSpecificOptions: l,
                    }),
                    [n, t, h, i, l],
                ),
                A = (0, c.useMemo)(
                    () => ({
                        skuId: m,
                        onClose: f,
                        onComplete: g,
                        applicationId: eR.FYj,
                        initialPlanId: null,
                        analyticsLocations: h,
                        onStepChange: l.onStepChange,
                        hideShadow: !0,
                        transitionState: s.transitionState,
                        returnRef: s.returnRef,
                    }),
                    [m, f, g, h, l.onStepChange, s.transitionState, s.returnRef],
                );
            return (0, r.jsx)(ew.Provider, {
                value: { sharedCheckoutContext: p, paymentModalProps: A, renderModalProps: s },
                children: d,
            });
        },
        UnifiedCheckoutCustomHeader: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, f.Pv)();
            return n ? (0, r.jsx)(ek, { step: t }) : null;
        },
        UnifiedCheckoutStepDefinitions: {
            [o.pn.GIFT_CUSTOMIZATION]: {
                StepController: (e) => {
                    let { renderStep: t, paymentModalStepProps: n } = e,
                        { handleStepChange: i, handleClose: s } = n,
                        {
                            renderLeftColumn: a,
                            renderRightColumn: o,
                            ctaDisabled: l,
                            loading: d,
                        } = ((e) => {
                            let { handleStepChange: t, handleClose: n } = e,
                                {
                                    customGiftMessage: i = "",
                                    setCustomGiftMessage: s,
                                    giftRecipientError: a,
                                    setGiftRecipientError: o,
                                    validatingGiftRecipient: l,
                                    giftRecipient: d,
                                    giftingOrigin: _,
                                    setValidatingGiftRecipient: u,
                                } = (0, f.Pv)(),
                                c = (0, k.t4)((e) => e.selectedSkuId),
                                { paymentSourceId: E } = (0, g.P5)(),
                                h = (0, P.Hf)(),
                                m = (0, P.RR)(),
                                p = (0, P.gU)(),
                                A = (0, z.bG)([eo.default], () => eo.default.getCurrentUser()),
                                I = (0, eA.A)(),
                                T = async (e, t) => {
                                    u(!0),
                                        null != a && o(),
                                        (await (0, X.JJ)(e.id, t)) || o(W.intl.string(W.t["4kgVqQ"])),
                                        u(!1);
                                };
                            (0, q.Ay)(() => {
                                null != c &&
                                    null != d &&
                                    (_ !== j.vQ.DM_CHANNEL_WISHLIST &&
                                        eC.default.track(eR.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: c }),
                                    T(d, c));
                            });
                            let S = () =>
                                (0, r.jsx)(eI.A, {
                                    onTextChange: (e) => s?.(e),
                                    pendingText: i,
                                    currentText: i,
                                    disableThemedBackground: !0,
                                    className: eO.iX,
                                    innerClassName: eO.pt,
                                });
                            return {
                                renderLeftColumn: () =>
                                    (0, r.jsx)("div", {
                                        className: eO.qL,
                                        children: (0, r.jsx)(eT.t, { isShopGift: !0 }),
                                    }),
                                renderRightColumn: () => {
                                    let e = (0, Z.pA)({
                                        selectedSkuPricePreview: h,
                                        paymentSourceId: E,
                                        selectedSkuId: c,
                                        skuPricePreviewsById: m,
                                        skusById: p,
                                    });
                                    return _ === j.vQ.USER_PROFILE_WISHLIST || _ === j.vQ.DM_CHANNEL_WISHLIST
                                        ? (0, r.jsxs)("div", {
                                              children: [
                                                  (0, r.jsx)(eS.Z, { giftRecipient: d }),
                                                  S(),
                                                  null != e &&
                                                      null != c &&
                                                      (0, r.jsx)(eg, {
                                                          skuId: c,
                                                          priceAmount: e.amount,
                                                          priceCurrency: e.currency,
                                                          className: eO.uW,
                                                          previewHeaderClassName: eO.vX,
                                                          isSelected: !0,
                                                          shouldDisplayHeader: !0,
                                                          hideProfilePreview: !0,
                                                      }),
                                                  (0, r.jsx)("div", {
                                                      className: eO.fi,
                                                      children: (0, r.jsx)(ey, { handleClose: n, selectedSkuId: c }),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)("div", {
                                              children: [
                                                  (0, r.jsx)(ep.A, {
                                                      selectedSkuId: c,
                                                      recipients: I,
                                                      className: eO.uh,
                                                      validateSelectedGift: T,
                                                  }),
                                                  S(),
                                                  null != e &&
                                                      null != c &&
                                                      (0, r.jsx)(eg, {
                                                          skuId: c,
                                                          priceAmount: e.amount,
                                                          priceCurrency: e.currency,
                                                          className: eO.Ng,
                                                          isSelected: !0,
                                                          shouldDisplayHeader: !0,
                                                      }),
                                              ],
                                          });
                                },
                                onStepChange: t,
                                onBackClick: n,
                                ctaDisabled: null != a || null == d || d.id === A?.id || i.length > j.Jo,
                                loading: l,
                            };
                        })({ handleStepChange: i, handleClose: s });
                    return t({
                        paymentModalStepProps: n,
                        unifiedStepProps: {
                            layout: "two-column",
                            renderLeftColumn: a,
                            renderRightColumn: o,
                            primaryCTAButtonProps: { loading: d, disabled: l },
                        },
                    });
                },
            },
            [o.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eb, { ...e }), options: y },
    };
var eU = n(429913),
    ex = n(67480),
    eG = n(328968),
    eV = n(733391),
    eF = n(821609),
    eB = n(318254),
    eH = n(262427),
    ej = n(510022),
    eW = n(317560),
    eY = n(366523),
    eK = n(208733);
function ez(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, h.Ay)(),
        { selectedSkuId: i, entitlementsGranted: s } = (0, k.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, g.P5)(),
        o = (0, P.gU)(),
        { isGift: l, giftRecipient: d } = (0, f.Pv)();
    L()(null != i, "Expected selectedSkuId"), L()(null != a, "Expected application");
    let _ = o[i];
    L()(null != _, "Expected sku");
    let u = s.find((e) => e.sku_id === i),
        E = u?.metadata?.orbs_reward;
    if (
        (c.useEffect(() => {
            l || ((0, eW.j)(), t(), (0, ej.n)({ sku: _, application: a, analyticsLocations: n, orbsReward: E }));
        }, [l, _, a, t, n, E]),
        !l)
    )
        return null;
    let m = null != E && E > 0;
    return (0, r.jsxs)(B.dZ, {
        children: [
            (0, r.jsx)(H.A, {}),
            (0, r.jsxs)("div", {
                className: eK.EL,
                children: [
                    (0, r.jsx)(eY.e, { sku: _, shape: "square", containerClassName: eK.LC }),
                    (0, r.jsx)(er.D, {
                        variant: "heading-xl/semibold",
                        className: eK.RS,
                        children: W.intl.string(W.t["5glWta"]),
                    }),
                    (0, r.jsx)(ei.E, {
                        variant: "text-md/normal",
                        children: W.intl.formatToPlainString(W.t["2VjPTw"], {
                            itemName: _.name,
                            giftRecipient: d?.username ?? "your recipient",
                        }),
                    }),
                    m &&
                        (0, r.jsx)("div", {
                            className: eK.Is,
                            children: (0, r.jsx)(eH.J, {
                                Icon: eB.C,
                                text: W.intl.format(W.t["ZV+aS9"], { orbCount: E }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: eK.UD,
                        children: (0, r.jsx)(eF.$, { onClick: t, text: W.intl.string(W.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var e$ = n(889137),
    eq = n(735438),
    eX = n.n(eq),
    eZ = n(742158),
    eQ = n(683071),
    eJ = n(313961),
    e0 = n(765441),
    e1 = n(238017),
    e2 = n(650588),
    e3 = n(723090),
    e6 = n(763827),
    e4 = n(403362),
    e7 = n(871123),
    e5 = n(832163),
    e8 = n(44724),
    e9 = n(980094),
    te = n(627363),
    tt = n(587895),
    tn = n(71393),
    ti = n(806931),
    tr = n(107610);
function ts(e) {
    let { handleClose: t, guild: n, sku: i } = e,
        s = c.useCallback(() => {
            (0, e8.X)({ guildId: n.id });
        }, [n.id]),
        o = c.useCallback(() => {
            t();
            let e = e5.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(eR.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, i.id)) ||
                ((0, a.closeAllModals)(),
                (0, e8.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: i.id, slug: i.slug }));
        }, [n.id, i.id, i.slug, t]);
    return (0, r.jsx)("div", {
        className: tr.$O,
        children: (0, r.jsx)($.Q, {
            text: W.intl.string(W.t.ImioFL),
            onMouseDown: s,
            onClick: o,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let ta = (0, m.Mz)(),
    to = {
        CustomPaymentContextProvider: (e) => {
            let {
                    children: t,
                    discoverySessionId: n,
                    loadId: i,
                    applicationId: s,
                    isGift: a,
                    skuId: o,
                    analyticsLocations: l = [],
                    ...d
                } = e,
                { analyticsLocations: _ } = ((e) => {
                    let { applicationId: t, skuId: n, analyticsLocations: i } = e,
                        { analyticsLocations: r } = (0, h.Ay)(i, S.A.SLAYER_STOREFRONT_PAYMENT_MODAL),
                        s = (0, eU.h)(t);
                    return (
                        c.useEffect(() => {
                            null == s ||
                                null == s.guildId ||
                                null == n ||
                                eG.A.isFetchingForSKU(n) ||
                                null != ex.A.get(n) ||
                                (0, eV.qf)(s.guildId, n);
                        }, [s, n]),
                        { analyticsLocations: r }
                    );
                })({ applicationId: s, skuId: o, analyticsLocations: l, ...d });
            return (0, r.jsx)(h.f5, {
                value: _,
                children: (0, r.jsx)(g.PaymentContextProvider, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: s,
                    skuIDs: null != o ? [o] : [],
                    purchaseType: ev.VV.ONE_TIME,
                    isGift: a,
                    ...d,
                    activeSubscription: null,
                    children: t,
                }),
            });
        },
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    applicationId: i,
                    analyticsSourceLocation: s,
                    renderModalProps: a,
                    onClose: o,
                    onComplete: l,
                    flowSpecificOptions: d,
                    children: _,
                } = e,
                { analyticsLocations: u } = (0, h.Ay)(),
                E = a.onClose,
                m = c.useCallback(
                    (e) => {
                        E(), null != o && o(e);
                    },
                    [E, o],
                ),
                f = c.useMemo(
                    () => ({
                        onClose: m,
                        onComplete: l,
                        applicationId: i,
                        skuId: t,
                        initialPlanId: null,
                        analyticsObject: s,
                        analyticsLocations: u,
                    }),
                    [m, l, i, t, s, u],
                ),
                g = c.useMemo(
                    () => ({ skuId: t, loadId: n, applicationId: i, flowSpecificOptions: d, analyticsLocations: u }),
                    [t, n, i, d, u],
                ),
                p = c.useMemo(
                    () => ({ sharedCheckoutContext: g, paymentModalProps: f, renderModalProps: a }),
                    [g, f, a],
                );
            return (0, r.jsx)(ta.Provider, { value: p, children: _ });
        },
        UnifiedCheckoutCustomHeader: function (e) {
            let { step: t } = e,
                n = (0, e$.YW)(t)
                    .with(o.pn.GIFT_CUSTOMIZATION, () => W.intl.string(W.t["JCFN/y"]))
                    .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => W.intl.string(W.t.lDbi6H))
                    .with(o.pn.CONFIRM, () => "")
                    .otherwise(() => null);
            return null == n ? null : (0, r.jsx)(E.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
        },
        UnifiedCheckoutStepDefinitions: {
            [o.pn.GIFT_CUSTOMIZATION]: {
                StepController: (e) => {
                    let { renderStep: t, paymentModalStepProps: n } = e,
                        { handleStepChange: i, handleClose: s } = n,
                        { renderStepBody: a, disabled: o } = ((e) => {
                            var t;
                            let n,
                                i,
                                s,
                                { handleStepChange: a, handleClose: o } = e,
                                {
                                    customGiftMessage: l = "",
                                    setCustomGiftMessage: d,
                                    giftRecipient: _,
                                    emojiConfetti: u,
                                    soundEffect: E,
                                    setEmojiConfetti: h,
                                    setSoundEffect: m,
                                    giftingOrigin: p,
                                    additionalUserIds: A,
                                } = (0, f.Pv)(),
                                I = (0, k.t4)((e) => e.selectedSkuId),
                                { application: T } = (0, g.P5)(),
                                S = (0, z.bG)([eo.default], () => eo.default.getCurrentUser()),
                                N =
                                    ((t = S?.id),
                                    (n = (0, e0.A)()),
                                    (i = (function (e) {
                                        let t = (0, z.bG)([e6.A], () =>
                                                e6.A.isConnected() ? e6.A.getChannelId() : null,
                                            ),
                                            [n, i] = c.useState([]);
                                        return (
                                            c.useEffect(() => {
                                                let n = null != t ? eJ.A.getParticipants(t) : [],
                                                    r = [],
                                                    s = new Set();
                                                for (let t of n)
                                                    (!(0, ti.Xw)(t) && !(0, ti.Ay)(t)) ||
                                                        t.user.id === e ||
                                                        s.has(t.user.id) ||
                                                        (s.add(t.user.id), r.push(t));
                                                r.sort((e, t) =>
                                                    (0, ti.Ay)(e) && !(0, ti.Ay)(t)
                                                        ? -1
                                                        : (0, ti.Ay)(t) && !(0, ti.Ay)(e)
                                                          ? 1
                                                          : 0,
                                                ),
                                                    i(r.map((e) => e.user));
                                            }, [t, e]),
                                            n
                                        );
                                    })(t)),
                                    (s = (0, z.yK)([eo.default], () => A?.map(eo.default.getUser).filter(e4.Vq) ?? [], [
                                        A,
                                    ])),
                                    c.useMemo(
                                        () =>
                                            eX().uniqWith(
                                                [...(null != _ ? [_] : []), ...s, ...i, ...n],
                                                (e, t) => e.id === t.id,
                                            ),
                                        [_, s, i, n],
                                    )),
                                C = (0, z.bG)([ex.A], () => (null != I ? ex.A.get(I) : null), [I]),
                                { normalPrice: R, discountedPrice: O } = (0, e3.CD)({
                                    sku: C,
                                    priceSetAssignmentPurchaseType: eR.lid.GIFT,
                                }),
                                y = (0, e7.fq)(C),
                                v = (0, e7.xf)(C),
                                D = (function (e) {
                                    let { shouldFetchIfMissing: t } =
                                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = (0, e7.bF)(e),
                                        i = e?.applicationId,
                                        r = (0, z.bG)([tt.A], () => (null != i ? tt.A.getApplication(i) : null), [i]),
                                        s = r?.guildId,
                                        a = (0, z.bG)([tn.A], () => (null != s ? tn.A.getGuild(s) : null), [s]);
                                    return (
                                        c.useEffect(() => {
                                            n &&
                                                t &&
                                                null == a &&
                                                null != e &&
                                                te.Ay.fetchApplication(e.applicationId, !0);
                                        }, [a, e, t, n]),
                                        n ? a : null
                                    );
                                })(C, { shouldFetchIfMissing: !0 }),
                                L = async (e, t) => {},
                                b = (e) => {
                                    null != m && m(null == e ? void 0 : e);
                                },
                                w = () =>
                                    (0, r.jsxs)("div", {
                                        className: tr.mT,
                                        children: [
                                            null != y &&
                                                (0, r.jsx)(eY.A, {
                                                    containerClassName: tr.T3,
                                                    cardImage: y,
                                                    cardBackgroundImage: v,
                                                    altText: C?.name ?? "",
                                                    shape: "square",
                                                }),
                                            (0, r.jsxs)("div", {
                                                className: tr._T,
                                                children: [
                                                    (0, r.jsx)(e2.A, { sound: E, onSelect: b }),
                                                    (0, r.jsx)(e1.A, {
                                                        setEmojiConfetti: h,
                                                        emojiConfetti: null == u ? void 0 : u,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                P = () => {
                                    let e = C?.orbsReward;
                                    return (0, r.jsxs)("div", {
                                        className: tr.Tc,
                                        children: [
                                            null != _ &&
                                            (p === j.vQ.USER_PROFILE_WISHLIST || p === j.vQ.DM_CHANNEL_WISHLIST)
                                                ? (0, r.jsx)(eS.Z, { giftRecipient: _ })
                                                : (0, r.jsx)(ep.A, {
                                                      selectedSkuId: I,
                                                      validateSelectedGift: L,
                                                      recipients: N,
                                                  }),
                                            (0, r.jsx)(eI.A, {
                                                onTextChange: (e) => d?.(e),
                                                pendingText: l,
                                                currentText: l,
                                                disableThemedBackground: !0,
                                                className: tr.iX,
                                                innerClassName: tr.pt,
                                            }),
                                            null == C
                                                ? null
                                                : (0, r.jsxs)("div", {
                                                      className: tr.AN,
                                                      children: [
                                                          (0, r.jsx)(eZ.z, {
                                                              className: tr.jr,
                                                              children: W.intl.string(W.t.PpoJzt),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: tr.Wx,
                                                              children: [
                                                                  (0, r.jsx)("div", {
                                                                      className: tr.Xb,
                                                                      children:
                                                                          null != C &&
                                                                          null != y &&
                                                                          (0, r.jsx)(eY.A, {
                                                                              containerClassName: tr.Iy,
                                                                              cardImage: y,
                                                                              cardBackgroundImage: v,
                                                                              altText: C.name,
                                                                              shape: "square",
                                                                          }),
                                                                  }),
                                                                  (0, r.jsxs)("div", {
                                                                      className: tr.vz,
                                                                      children: [
                                                                          null != T &&
                                                                              (0, r.jsx)(e9.Q, { application: T }),
                                                                          (0, r.jsx)(ei.E, {
                                                                              variant: "text-sm/semibold",
                                                                              children: C.name,
                                                                          }),
                                                                      ],
                                                                  }),
                                                                  (0, r.jsx)(ei.E, {
                                                                      variant: "text-md/semibold",
                                                                      children: O ?? R,
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            null != C &&
                                                (0, e7.Ri)(C) &&
                                                (0, r.jsx)(eQ.w, { type: "info", children: W.intl.string(W.t.lORYb6) }),
                                            null != e &&
                                                e > 0 &&
                                                (0, r.jsx)(eH.J, {
                                                    Icon: eB.C,
                                                    text: W.intl.format(W.t["ZV+aS9"], { orbCount: e }),
                                                }),
                                            null != D &&
                                                null != C &&
                                                (0, r.jsx)(ts, { handleClose: o, sku: C, guild: D }),
                                        ],
                                    });
                                };
                            return {
                                renderStepBody: () => (0, r.jsxs)("div", { className: tr.Du, children: [w(), P()] }),
                                getLeftColumnComponent: w,
                                getRightColumnComponent: P,
                                onStepChange: a,
                                onBackClick: o,
                                disabled: null == _ || _.id === S?.id || l.length > j.Jo,
                            };
                        })({ handleStepChange: i, handleClose: s });
                    return t({
                        paymentModalStepProps: n,
                        unifiedStepProps: c.useMemo(
                            () => ({
                                layout: "custom-step-body",
                                renderStepBody: a,
                                primaryCTAButtonProps: { disabled: o },
                            }),
                            [a, o],
                        ),
                    });
                },
            },
            [o.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(ez, { ...e }) },
    };
var tl = n(69882),
    td = n(169797),
    t_ = n(232467),
    tu = n(977445),
    tc = n(908419),
    tE = n(623373),
    th = n(739508),
    tm = n(715054);
(0, s.A)();
var tf = n(136857),
    tg = n(566980),
    tp = n(855104),
    tA = n(373856),
    tI = n(289873),
    tT = n(241989),
    tS = n(132198),
    tN = n(252293),
    tC = n(971875),
    tR = n(319820),
    tO = n(327105),
    ty = n(200766);
let tv = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: i, isSocialLayerGameItem: s } = (0, tR.AO)({ sku: t }),
            a = (0, tC.oO)(i);
        s ? (a = W.intl.string(tO.default.qwSlCO)) : (0, tE.Ab)(i) && (a = W.intl.string(W.t["0TmQRG"]));
        let o = (0, tC.dL)(t),
            l =
                t.id === R.Dp.FRACTIONAL_PREMIUM
                    ? tS.m[R.Dp.FRACTIONAL_PREMIUM].render({ className: ty.$ })
                    : (0, r.jsx)(tT.WH, { sku: t, product: i });
        return (0, r.jsx)(tT.f7, {
            label: o,
            description: a,
            graphic: l,
            price: null != n ? `${n}` : "",
            PriceIcon: eB.C,
        });
    },
    tD = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, tN.A)({
            applicationId: (0, _.P)(t),
            skuIDs: [t],
            isGift: !1,
            currentPaymentSourceId: null,
            excludeSKUPurchasePreviews: !0,
        });
        let i = (0, b.bG)([ex.A], () => ex.A.get(t), [t]);
        return null == i
            ? (0, r.jsx)(tI.y, { type: tI.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(tv, { sku: i, orbPriceAmount: n });
    },
    tL = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(t_.vW, { label: W.intl.string(W.t.y0WGqP), value: null != t ? `${t}` : "", Icon: eB.C });
    },
    tb = () => W.intl.string(W.t.wmcDyu);
function tw() {
    let { immediateDelivery: e } = (0, tc.U)(),
        t = tb();
    return (0, r.jsx)(t_._P, {
        variant: { type: t_.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let tP = (0, m.Mz)(),
    tk = (0, c.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    tM = {
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsLocations: i,
                    analyticsSourceLocation: s,
                    renderModalProps: a,
                    flowSpecificOptions: o,
                    children: l,
                } = e,
                { onCheckoutSuccess: d } = o,
                {
                    orbProductContext: _,
                    isRedeeming: u,
                    orbRedemptionError: E,
                    onRedeemVirtualCurrency: h,
                } = ((e) => {
                    let { skuId: t, loadId: n, analyticsLocations: i, onCheckoutSuccess: r } = e,
                        s = (0, z.bG)([eo.default], () =>
                            el.Ay.isPremium(eo.default.getCurrentUser(), j.PremiumTypes.TIER_2),
                        ),
                        a = (0, z.bG)([ex.A], () => ex.A.get(t), [t]),
                        o = (0, e3.JL)({ sku: a }),
                        { product: l } = (0, ed.q)(t),
                        d = (0, c.useMemo)(() => {
                            if (null != o) return { orbPriceAmount: o.amount };
                            if (null != l) {
                                let e = (0, tE.CW)({ product: l, isPremiumUser: s });
                                return { orbPriceAmount: null !== e ? e.amount : null };
                            }
                            return null;
                        }, [o, l, s]);
                    d?.orbPriceAmount == null && (0, th.hD)("Orb price not found for product", { tags: { sku_id: t } });
                    let { redeemVirtualCurrency: _, isSubmitting: u, error: E } = (0, tm.Q)({ skuId: t, loadId: n }),
                        h = (0, c.useCallback)(
                            (e) => {
                                _(t, n, (n) => {
                                    r({ entitlements: n, skuId: t }), e();
                                });
                            },
                            [t, n, _, r],
                        );
                    return {
                        skuId: t,
                        loadId: n,
                        analyticsLocations: i ?? [],
                        orbProductContext: d,
                        onRedeemVirtualCurrency: h,
                        isRedeeming: u,
                        orbRedemptionError: E,
                    };
                })({ skuId: t, loadId: n, onCheckoutSuccess: d, analyticsLocations: i }),
                m = ((e) => {
                    let {
                            skuId: t,
                            analyticsLocations: n,
                            analyticsSourceLocation: i,
                            orbProductContext: r,
                            onClose: s,
                        } = e,
                        { emitOrbCheckoutPaymentFlowEvent: a } = (0, tA.O)({
                            skuId: t,
                            orbProductContext: r,
                            analyticsLocations: n,
                            analyticsSourceLocation: i,
                        });
                    return {
                        analyticsDataOverride: (0, c.useMemo)(() => {
                            if (null != r)
                                return {
                                    price: r.orbPriceAmount ?? void 0,
                                    regular_price: r.orbPriceAmount ?? void 0,
                                    currency: eR.Yri.DISCORD_ORB,
                                };
                        }, [r]),
                        onClose: (0, c.useCallback)(
                            async (e) => {
                                e || a(eR.HAw.PAYMENT_FLOW_CANCELED), await s();
                            },
                            [s, a],
                        ),
                    };
                })({
                    onClose: a.onClose,
                    skuId: t,
                    analyticsLocations: i,
                    analyticsSourceLocation: s,
                    orbProductContext: _,
                });
            return (0, r.jsx)(tP.Provider, {
                value: {
                    sharedCheckoutContext: {
                        loadId: n,
                        skuId: t,
                        analyticsLocations: i,
                        analyticsSourceLocation: s,
                        flowSpecificOptions: o,
                    },
                    paymentModalProps: m,
                    renderModalProps: a,
                },
                children: (0, r.jsx)(tk.Provider, {
                    value: { orbProductContext: _, isRedeeming: u, orbRedemptionError: E, onRedeemVirtualCurrency: h },
                    children: l,
                }),
            });
        },
        UnifiedCheckoutStepDefinitions: {
            [o.pn.REVIEW]: {
                StepController: (e) => {
                    let {
                            paymentModalStepProps: t,
                            sharedCheckoutContext: { skuId: n, analyticsLocations: i, analyticsSourceLocation: s },
                        } = e,
                        { handleClose: a } = t;
                    ((e) => {
                        let { handleClose: t } = e,
                            { purchaseState: n } = (0, g.P5)();
                        (0, c.useEffect)(() => {
                            n === tg.h.COMPLETED && t();
                        }, [n, t]);
                    })({ handleClose: a });
                    let {
                            orbProductContext: o,
                            isRedeeming: l,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: _,
                        } = (0, c.useContext)(tk),
                        { primaryButtonProps: u, ...E } = ((e) => {
                            let {
                                    skuId: t,
                                    analyticsSourceLocation: n,
                                    analyticsLocations: i,
                                    orbProductContext: s,
                                    isRedeeming: a,
                                    orbRedemptionError: o,
                                    onRedeemVirtualCurrency: l,
                                } = e,
                                {
                                    isStepLoading: d,
                                    orbPriceAmount: _,
                                    orbBalanceToDisplay: u,
                                    onClickCheckout: E,
                                    showCollectiblesDiscountWarning: h,
                                    errorMessage: m,
                                } = ((e) => {
                                    let {
                                            skuId: t,
                                            onRedeemVirtualCurrency: n,
                                            orbRedemptionError: i,
                                            orbProductContext: r,
                                            analyticsLocations: s,
                                            analyticsSourceLocation: a,
                                        } = e,
                                        o = (0, k.t4)((e) => e.selectedSkuId),
                                        { setPurchaseState: l } = (0, g.P5)(),
                                        d = (0, tp.gN)(),
                                        _ = (0, c.useRef)(d),
                                        { emitOrbCheckoutPaymentFlowEvent: u } = (0, tA.O)({
                                            skuId: t,
                                            orbProductContext: r,
                                            analyticsLocations: s,
                                            analyticsSourceLocation: a,
                                        });
                                    (0, q.Ay)(() => {
                                        u(eR.HAw.PAYMENT_FLOW_LOADED);
                                    }),
                                        (0, c.useEffect)(() => {
                                            null != i &&
                                                null !== _.current &&
                                                (u(eR.HAw.PAYMENT_FLOW_FAILED, i), (_.current = null));
                                        }, [i, u]);
                                    let E = (0, c.useCallback)(() => {
                                            (_.current = d),
                                                u(eR.HAw.PAYMENT_FLOW_COMPLETED),
                                                n(() => {
                                                    l(tg.h.COMPLETED), u(eR.HAw.PAYMENT_FLOW_SUCCEEDED);
                                                });
                                        }, [n, l, d, u]),
                                        h = _.current ?? d,
                                        m = null != r ? r.orbPriceAmount : null;
                                    return {
                                        isStepLoading: null == r,
                                        showCollectiblesDiscountWarning: (0, em.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                        errorMessage: (0, c.useMemo)(
                                            () =>
                                                null == i
                                                    ? null
                                                    : i.code === tf.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? W.intl.string(W.t.keFvXM)
                                                      : i.code === tf.tG.ALREADY_PURCHASED
                                                        ? W.intl.string(W.t.m371Mx)
                                                        : W.intl.string(W.t.fqJZ11),
                                            [i],
                                        ),
                                        orbPriceAmount: m,
                                        orbBalanceToDisplay: h,
                                        onClickCheckout: E,
                                        selectedSkuId: o,
                                    };
                                })({
                                    skuId: t,
                                    analyticsSourceLocation: n,
                                    analyticsLocations: i,
                                    orbProductContext: s,
                                    orbRedemptionError: o,
                                    onRedeemVirtualCurrency: l,
                                }),
                                f = (0, z.bG)([ex.A], () => ex.A.get(t), [t]),
                                p = (0, tu.u)(f?.applicationId),
                                {
                                    disabled: A,
                                    tooltipText: I,
                                    text: T,
                                } = ((e) => {
                                    let { orbBalance: t, orbPriceAmount: n, isInTestMode: i = !1 } = e,
                                        { disabled: r, tooltipText: s } = (0, c.useMemo)(
                                            () =>
                                                null == n
                                                    ? { disabled: !0, tooltipText: W.intl.string(W.t["c/rcUu"]) }
                                                    : !i && (null == t || n > t)
                                                      ? { disabled: !0, tooltipText: W.intl.string(W.t.keFvXM) }
                                                      : { disabled: !1, tooltipText: null },
                                            [n, t, i],
                                        );
                                    return { disabled: r, tooltipText: s, text: tb() };
                                })({ orbBalance: u, orbPriceAmount: _, isInTestMode: p }),
                                S = (0, c.useMemo)(
                                    () => ({ onClick: E, loading: a, text: T, disabled: A, tooltipText: I }),
                                    [E, a, T, A, I],
                                ),
                                N = h ? W.intl.format(W.t.fsOXXO, {}) : null,
                                C = p ? W.intl.string(W.t.OvMyMd) : null;
                            return {
                                isStepLoading: d,
                                upperInlineNoticeProps: (0, c.useMemo)(() => {
                                    if (null != C || null != N || null != m) {
                                        let e = [];
                                        return (
                                            null != C &&
                                                e.push({
                                                    type: "warning",
                                                    message: C,
                                                    key: "test-mode-warning-notice",
                                                }),
                                            null != N &&
                                                e.push({
                                                    type: "warning",
                                                    message: N,
                                                    key: "orb-checkout-warning-notice",
                                                }),
                                            null != m &&
                                                e.push({
                                                    type: "critical",
                                                    message: m,
                                                    key: "orb-checkout-error-notice",
                                                }),
                                            e
                                        );
                                    }
                                    return null;
                                }, [C, N, m]),
                                purchaseItemContent: (0, r.jsx)(tD, { skuId: t, orbPriceAmount: _ }),
                                paymentSelectContent: (0, r.jsx)(tL, { orbBalance: u }),
                                legalContent: (0, r.jsx)(tw, {}),
                                primaryButtonProps: S,
                                invoiceSummaryContent: null,
                                invoiceTotalDueLabel: null,
                                invoiceTotalDueValue: null,
                            };
                        })({
                            skuId: n,
                            analyticsLocations: i,
                            analyticsSourceLocation: s,
                            orbProductContext: o,
                            isRedeeming: l,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: _,
                        });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(B.dZ, { children: (0, r.jsx)(tl.T_, { ...E }) }),
                            (0, r.jsx)(B.UX, { children: (0, r.jsx)(td.lo, { primaryButtonProps: u }) }),
                        ],
                    });
                },
            },
        },
    },
    tU = {
        [i.C.ORB_CHECKOUT]: {
            flowType: i.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: eR.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tM,
        },
        [i.C.COLLECTIBLES_CHECKOUT]: {
            flowType: i.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: eR.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eM,
        },
        [i.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: i.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: eR.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: to,
        },
        [i.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: i.C.PREMIUM_CHECKOUT },
        [i.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: i.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [i.C.PREMIUM_APPS_OTP_CHECKOUT]: { implemented: !1, flowType: i.C.PREMIUM_APPS_OTP_CHECKOUT },
        [i.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: i.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [i.C.GUILD_PRODUCT_CHECKOUT]: { implemented: !1, flowType: i.C.GUILD_PRODUCT_CHECKOUT },
        [i.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: i.C.GUILD_ROLE_CHECKOUT },
        [i.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: i.C.GUILD_BOOST_CHECKOUT },
    };
var tx = n(735305),
    tG = n(295405);
let tV = (e) => {
    let { returnStep: t = o.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: i } = e,
        s = c.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = o.pn.REVIEW, returnStepIfNoPaymentSources: i } = e;
                    if (0 === Object.keys(tG.A.paymentSources).length) {
                        if (null != i) return void t.handleStepChange(i);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: i }),
            [t, n, i],
        );
    return (0, r.jsx)(tx.x, { ...i, onReturn: s });
};
var tF = n(866485),
    tB = n(981036),
    tH = n(367644);
let tj = (e) => {
        let {
                paymentModalStepProps: { handleStepChange: t },
                unifiedStepProps: n,
            } = e,
            {
                layout: i,
                renderStepBody: s,
                renderLeftColumn: a,
                renderRightColumn: l,
                primaryCTAButtonProps: d,
                onBackClick: _,
            } = n,
            { hasPaymentSources: u } = (0, g.P5)(),
            E = u ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
            h = c.useCallback(() => t(E), [t, E]),
            m = c.useMemo(
                () =>
                    "custom-step-body" === i
                        ? s()
                        : "two-column" === i
                          ? (0, r.jsxs)("div", { className: tH.D, children: [a(), l()] })
                          : null,
                [i, s, a, l],
            ),
            f = c.useMemo(() => ({ ...d, onClick: h, text: W.intl.string(W.t.XiOHRX) }), [d, h]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(B.dZ, { children: m }),
                (0, r.jsx)(B.UX, { children: (0, r.jsx)(tB.cy, { onBackClick: _, primaryCTAButtonProps: f }) }),
            ],
        });
    },
    tW = (0, tF.R)({ step: o.pn.GIFT_CUSTOMIZATION, renderStep: (e) => (0, r.jsx)(tj, { ...e }) });
var tY = n(545075);
let tK = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            i = (0, c.useRef)(!1),
            { blockedPayments: s } = (0, g.P5)(),
            { handleStepChange: a } = t;
        return ((0, c.useEffect)(() => {
            s || i.current || (a(n), (i.current = !0));
        }, [s, a, n]),
        s)
            ? (0, r.jsx)(tY.oO, {})
            : null;
    },
    tz = {
        [i.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, disablePaymentAuthSteps: !0, predicateStepType: "unified" },
        [i.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [i.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [i.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
        [i.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [i.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !1 },
        [i.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [i.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [i.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1 },
        [i.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1 },
    };
class t$ {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = tU[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = tz[e]);
    }
    getUnifiedStepDefinition(e) {
        return this.tenantCheckoutFlowConfig.UnifiedCheckoutStepDefinitions[e];
    }
    generateRenderHeader() {
        let { UnifiedCheckoutCustomHeader: e } = this.tenantCheckoutFlowConfig;
        if (null != e) return (t, n, i) => (0, r.jsx)(e, { plan: t, onClose: n, step: i });
    }
    getPredicateStepConfig() {
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? d.kJ
            : "unified" === e
              ? { key: null, renderStep: (e) => (0, r.jsx)(tK, { paymentModalStepProps: e, defaultStep: o.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, r.jsx)(l.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== i.C.ORB_CHECKOUT)
            return {
                key: o.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(tV, {
                        paymentModalStepProps: e,
                        returnStep: o.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? o.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        return t && n
            ? {
                  key: o.pn.GIFT_CUSTOMIZATION,
                  renderStep: (e) =>
                      (0, r.jsx)(tW, {
                          paymentModalStepProps: e,
                          unifiedStepDefinition: this.getUnifiedStepDefinition(o.pn.GIFT_CUSTOMIZATION),
                      }),
                  options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => W.intl.string(W.t["W685+b"]) },
              }
            : void 0;
    }
    getReviewStepConfig() {
        let e = this.getUnifiedStepDefinition(o.pn.REVIEW);
        return (0, u.B)(e)
            ? d.r2
            : {
                  key: o.pn.REVIEW,
                  renderStep: (t) => (0, r.jsx)(tl.Pw, { paymentModalStepProps: t, unifiedStepDefinition: e }),
                  options: { useBreadcrumbLabel: () => W.intl.string(W.t.QBnNHq) },
              };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n } = this.tenantCheckoutFlowConfig,
            { disablePaymentAuthSteps: i } = this.internalCheckoutFlowControls,
            r = this.getPredicateStepConfig(),
            s = this.getGiftCustomizationStepConfig({ isGift: t }),
            a = this.getAddPaymentStepConfig({ isGift: t }),
            l = this.getReviewStepConfig(),
            _ = this.createDefinedStepConfigsArray([r, s, a, ...(i ? [] : d.hh), l]);
        return null != n && _.push({ key: o.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), _;
    }
    getApplicationIdFor1PShopSKU(e) {
        return this.checkoutFlow === i.C.ORB_CHECKOUT
            ? (0, _.P)(e)
            : this.checkoutFlow === i.C.COLLECTIBLES_CHECKOUT
              ? eR.FYj
              : void 0;
    }
    openCheckoutModal(e) {
        let {
                openModalOptions: t,
                flowSpecificOptions: i,
                giftContextProps: o,
                onComplete: l,
                onClose: d,
                skuId: _,
                loadId: u,
                discoverySessionId: c,
                applicationId: E,
                analyticsSourceLocation: h,
                analyticsLocations: m,
            } = e,
            f = u ?? (0, s.A)(),
            { modalKey: g } = t,
            p = this.generateRenderHeader(),
            A = E ?? this.getApplicationIdFor1PShopSKU(_),
            I = !1,
            T = i ?? void 0;
        return (0, a.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: !!(null != o && o.isGift) });
                return (n) =>
                    (0, r.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != l && l(e), (I = !0);
                        },
                        onClose: d,
                        renderHeader: p,
                        skuId: _,
                        loadId: f,
                        discoverySessionId: c,
                        applicationId: A,
                        analyticsLocations: m,
                        analyticsSourceLocation: h,
                        renderModalProps: n,
                        giftContextProps: o,
                        flowSpecificOptions: T,
                    });
            },
            {
                ...t,
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(I, f), (0, a.closeModal)(g);
                },
                modalKey: g,
            },
        );
    }
}
n(584160);
let tq = null,
    tX = null,
    tZ = null;
function tQ() {
    return null == tq && (tq = new t$({ checkoutFlow: i.C.ORB_CHECKOUT })), tq;
}
function tJ() {
    return null == tX && (tX = new t$({ checkoutFlow: i.C.COLLECTIBLES_CHECKOUT })), tX;
}
function t0() {
    return null == tZ && (tZ = new t$({ checkoutFlow: i.C.SLAYER_STOREFRONT_CHECKOUT })), tZ;
}
i.C.ORB_CHECKOUT, i.C.COLLECTIBLES_CHECKOUT, i.C.SLAYER_STOREFRONT_CHECKOUT;
