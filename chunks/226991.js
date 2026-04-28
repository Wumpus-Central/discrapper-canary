n.d(t, { Tt: () => t$, KY: () => t1, CL: () => l.C, Tx: () => t0 });
var l = n(285871);
n(321073);
var i = n(627968),
    r = n(132500),
    s = n(192308),
    a = n(166532),
    o = n(546042),
    u = n(939220),
    d = n(310829),
    c = n(945477),
    C = n(64700),
    p = n(20742),
    m = n(688810),
    E = n(736843),
    _ = n(937008),
    A = n(156312),
    T = n(503698),
    h = n.n(T),
    f = n(106778),
    S = n(228366),
    I = n(793574),
    x = n(213530),
    O = n(158216),
    g = n(758836),
    P = n(483764);
let N = { sliderBodyClassName: P.Bz },
    y = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(f.Fk, { ref: n, className: P.Lb, environment: t.current }),
                (0, i.jsx)(x.K, { options: l, className: h()(P.Oh, { [P.R]: !r }) }),
            ],
        });
    };
var v = n(284009),
    j = n.n(v),
    L = n(702841),
    R = n(775602),
    k = n(427675),
    M = n(94420),
    U = n(590180),
    D = n(953150),
    F = n(524246),
    b = n(14368),
    w = n(61750),
    H = n(972607),
    G = n(482132),
    K = n(921925),
    B = n(788868),
    W = n(985018);
function Y(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        l = (0, M.t4)((e) => e.selectedSkuId),
        {
            application: r,
            paymentError: s,
            purchaseError: a,
            purchasePreviewError: o,
            appliedUserDiscounts: u,
        } = (0, A.P5)(),
        d = (0, k.gU)(),
        c = (0, L.bG)([U.A], () => U.A.getProduct(l)),
        p = C.useRef(!1);
    j()(null != l, "Expected selectedSkuId"), j()(null != r, "Expected application");
    let m = d[l];
    j()(null != m, "Expected sku");
    let E = null != s || null != a || null != o,
        _ =
            u.length > 0
                ? W.intl.formatToPlainString(W.t.VuV3Td, { discountOfferAmount: u[0].discount.amount })
                : void 0;
    return (C.useEffect(() => {
        null == c ||
            E ||
            p.current ||
            ((p.current = !0),
            (0, w.A)({
                product: c,
                overrideTitle: _,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: g.gs.FIAT,
            }));
    }, [c, n, t, E, _]),
    E)
        ? (0, i.jsx)(G.dZ, { children: (0, i.jsx)(K.A, {}) })
        : null;
}
function V(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: r,
            giftRecipient: s,
            giftMessageError: a,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, _.Pv)(),
        d = (0, L.bG)([R.A], () => R.A.useReducedMotion),
        c = C.useRef(null),
        p = (0, M.t4)((e) => e.selectedSkuId),
        m = (0, L.bG)([U.A], () => U.A.getProduct(p)),
        { confettiColors: E } = (0, D.A)(m?.styles);
    return (
        C.useEffect(() => {
            t &&
                null != s &&
                null != p &&
                (u === B.vQ.USER_PROFILE_WISHLIST || u === B.vQ.DM_CHANNEL_WISHLIST) &&
                S.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: p, recipientId: s.id });
        }, [t, s, p, u]),
        t
            ? (0, i.jsxs)("div", {
                  ref: c,
                  children: [
                      (0, i.jsx)(H.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: l,
                          hasSentMessage: r,
                          giftRecipient: s,
                          giftMessageError: a,
                          isSendingMessage: o,
                      }),
                      !e.hideConfetti &&
                          !d &&
                          (0, i.jsx)(F.A, {
                              confettiTarget: c.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, b.rA)(m?.categorySkuId),
                              colors: E?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, i.jsx)(Y, { ...e })
    );
}
var z = n(17928),
    Z = n(123292),
    q = n(964486),
    Q = n(693477),
    X = n(993408),
    J = n(575593),
    $ = n(452027),
    ee = n(922016),
    et = n(778712),
    en = n(939249),
    el = n(834730),
    ei = n(534514),
    er = n(986687),
    es = n(576622),
    ea = n(287809),
    eo = n(927578),
    eu = n(674658),
    ed = n(898461),
    ec = n(203632),
    eC = n(892118),
    ep = n(536572),
    em = n(14702),
    eE = n(219103),
    e_ = n(525723),
    eA = n(780651);
let eT = (e) => {
    let {
            skuId: t,
            isSelected: n,
            priceAmount: l,
            priceCurrency: r,
            onSelect: s,
            shouldDisplayHeader: a = !1,
            className: o,
            previewHeaderClassName: u,
            hideProfilePreview: d = !1,
        } = e,
        { product: c } = (0, eu.q)(t, !0),
        { giftRecipient: p, giftRecipientError: m } = (0, _.Pv)(),
        E = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
        A = (0, ep.VG)(c),
        T = C.useRef(null),
        f = eo.Ay.canUseCollectibles(E),
        S = C.useMemo(() => (0, X.fT)(c, f), [c, f]),
        I = (0, e_.V_)(c);
    if (null == c) return null;
    let [x] = c.items;
    j()(null != x, "Product item should not be empty");
    let O = null != p && p.id !== E?.id && c.type !== J.R.BUNDLE && x.type !== J.R.NAMEPLATE && !d;
    return (0, i.jsxs)("div", {
        className: o,
        children: [
            a &&
                (0, i.jsx)("div", {
                    className: h()(eA.QU, u),
                    children: (0, i.jsx)($.D, {
                        label: W.intl.string(W.t.PpoJzt),
                        children:
                            O &&
                            (0, i.jsx)(
                                ee.Y,
                                {
                                    targetElementRef: T,
                                    preload: () => (0, es.A)(p.id, p.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, i.jsx)(er.A, {
                                            ...e,
                                            user: p,
                                            pendingAvatar: p.getAvatarURL(null, (0, et.FT)(et._3.SIZE_80)),
                                            pendingAvatarDecoration: (0, ed.T)(x) ? x : null,
                                            pendingProfileEffect: (0, ec.C3)(x) ? x : null,
                                            pendingProfileFrame: (0, eC.s)(x) ? x : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0,
                                            hideExampleButton: !0,
                                        }),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, i.jsx)(en.D, {
                                            ...e,
                                            className: eA.Nx,
                                            innerRef: T,
                                            children: (0, i.jsx)(el.E, {
                                                variant: "text-xs/medium",
                                                color: "text-link",
                                                children: W.intl.string(W.t["2GnJQL"]),
                                            }),
                                        }),
                                },
                                p.id,
                            ),
                    }),
                }),
            (0, i.jsxs)(en.D, {
                tag: "div",
                onClick: () => {
                    null != t && null != s && s(t);
                },
                className: h()(eA.i1, { [eA.no]: n && null == m, [eA.cN]: n && null != m }),
                children: [
                    (0, i.jsxs)("div", {
                        className: eA.Ug,
                        children: [
                            (0, i.jsx)(em.O, { product: c }),
                            (0, i.jsxs)("div", {
                                className: eA.JZ,
                                children: [
                                    (0, i.jsx)(el.E, { variant: "text-md/semibold", children: A }),
                                    (0, i.jsx)(ei.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: (() => {
                                            if (c?.type === J.R.BUNDLE) return null;
                                            switch (x.type) {
                                                case J.R.AVATAR_DECORATION:
                                                    return W.intl.string(W.t["7v0T9P"]);
                                                case J.R.PROFILE_EFFECT:
                                                    return W.intl.string(W.t.wR5wOo);
                                                case J.R.PROFILE_FRAME:
                                                    return W.intl.string(W.t.GWrZOd);
                                                case J.R.NAMEPLATE:
                                                    return W.intl.string(W.t.x5CoXR);
                                                default:
                                                    return null;
                                            }
                                        })(),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(eE.x, {
                                priceAmount: l,
                                priceCurrency: r,
                                discount: S,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    n &&
                        null != m &&
                        (0, i.jsx)("div", {
                            className: eA.Wh,
                            children: (0, i.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: m,
                            }),
                        }),
                ],
            }),
        ],
    });
};
var eh = n(734925),
    ef = n(687033),
    eS = n(871181),
    eI = n(318007),
    ex = n(285719),
    eO = n(976860),
    eg = n(954571),
    eP = n(652215),
    eN = n(353791);
function ey(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, m.Ay)(I.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(Z.Q, {
        text: W.intl.string(W.t.J82mpK),
        onClick: function () {
            t(),
                (0, s.closeAllModals)(),
                null == n
                    ? (0, Q.Cz)({ analyticsLocations: l, analyticsSource: I.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, eO.pX)(`${eP.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var ev = n(818348);
let ej = (0, C.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    eL = () => (0, C.useContext)(ej),
    eR = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: l } = eL();
        return (0, i.jsx)(V, { analyticsLocations: t, hideConfetti: n, confettiCanvas: l, ...e });
    },
    ek = (0, E.Mz)(),
    eM = {
        [a.pn.GIFT_CUSTOMIZATION]: () => W.intl.string(W.t["JCFN/y"]),
        [a.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => W.intl.string(W.t.lDbi6H),
        [a.pn.CONFIRM]: () => "",
    },
    eU = (e) => {
        let { step: t } = e,
            n = eM[t];
        return null == n ? null : (0, i.jsx)(p.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    eD = {
        CustomPaymentContextProvider: (e) => {
            let { skuId: t, analyticsLocations: n, children: l, ...r } = e,
                {
                    environment: s,
                    confettiCanvas: a,
                    setConfettiCanvas: o,
                    customConfettiVisible: u,
                    setCustomConfettiVisible: d,
                    customConfettiDisplayOptions: c,
                    hideConfirmStepConfetti: p,
                } = ((e) => {
                    let { skuId: t } = e,
                        n = C.useRef(new f.OH()),
                        [l, i] = C.useState(null),
                        [r, s] = C.useState(!1),
                        a = C.useMemo(() => (0, O.AB)({ purchaseType: g.gs.FIAT, skuId: t }), [t]);
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
                { analyticsLocations: E } = ((e) => {
                    let { analyticsLocations: t } = e,
                        { analyticsLocations: n } = (0, m.Ay)([...t, I.A.COLLECTIBLES_PAYMENT_MODAL]);
                    return { analyticsLocations: n };
                })({ analyticsLocations: n ?? [] }),
                _ = ((e) => {
                    let { skuId: t } = e;
                    return null != t ? [t] : [];
                })({ skuId: t }),
                T = (0, C.useMemo)(
                    () => ({
                        analyticsLocations: E,
                        skuIDs: _,
                        setCustomConfettiVisible: d,
                        hideConfirmStepConfetti: p,
                        confettiCanvas: a,
                    }),
                    [E, _, d, p, a],
                );
            return (0, i.jsxs)(m.f5, {
                value: E,
                children: [
                    (0, i.jsx)(y, {
                        environment: s,
                        setConfettiCanvas: o,
                        customConfettiDisplayOptions: c,
                        customConfettiVisible: u,
                    }),
                    (0, i.jsx)(A.PaymentContextProvider, {
                        ...r,
                        skuIDs: _,
                        stepConfigs: r.stepConfigs,
                        activeSubscription: null,
                        purchaseType: ev.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, i.jsx)(ej.Provider, { value: T, children: l }),
                    }),
                ],
            });
        },
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsSourceLocation: l,
                    renderModalProps: r,
                    onClose: s,
                    onComplete: a,
                    flowSpecificOptions: o,
                    children: u,
                } = e,
                d = r.onClose,
                { skuIDs: c, setCustomConfettiVisible: p, analyticsLocations: m } = eL(),
                {
                    paymentModalSkuId: E,
                    paymentModalOnClose: _,
                    paymentModalOnComplete: A,
                } = ((e) => {
                    let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: i } = e,
                        r = t[0] ?? null,
                        s = C.useCallback(() => {
                            i(!0), l?.();
                        }, [l, i]);
                    return {
                        paymentModalSkuId: r,
                        paymentModalOnClose: C.useCallback(
                            (e) => {
                                i(!1), n(e), S.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                            },
                            [n, i],
                        ),
                        paymentModalOnComplete: s,
                    };
                })({
                    onClose: (e) => {
                        d(), s?.(e);
                    },
                    onComplete: a,
                    skuIDs: c,
                    setCustomConfettiVisible: p,
                }),
                T = (0, C.useMemo)(
                    () => ({
                        loadId: n,
                        skuId: t,
                        analyticsLocations: m,
                        analyticsSourceLocation: l,
                        flowSpecificOptions: o,
                    }),
                    [n, t, m, l, o],
                ),
                h = (0, C.useMemo)(
                    () => ({
                        skuId: E,
                        onClose: _,
                        onComplete: A,
                        applicationId: eP.FYj,
                        initialPlanId: null,
                        analyticsLocations: m,
                        onStepChange: o.onStepChange,
                        hideShadow: !0,
                        transitionState: r.transitionState,
                        returnRef: r.returnRef,
                    }),
                    [E, _, A, m, o.onStepChange, r.transitionState, r.returnRef],
                );
            return (0, i.jsx)(ek.Provider, {
                value: { sharedCheckoutContext: T, paymentModalProps: h, renderModalProps: r },
                children: u,
            });
        },
        UnifiedCheckoutCustomHeader: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, _.Pv)();
            return n ? (0, i.jsx)(eU, { step: t }) : null;
        },
        UnifiedCheckoutStepDefinitions: {
            [a.pn.GIFT_CUSTOMIZATION]: {
                StepController: (e) => {
                    let { renderStep: t, paymentModalStepProps: n } = e,
                        { handleStepChange: l, handleClose: r } = n,
                        {
                            renderLeftColumn: s,
                            renderRightColumn: a,
                            ctaDisabled: o,
                            loading: u,
                        } = ((e) => {
                            let { handleStepChange: t, handleClose: n } = e,
                                {
                                    customGiftMessage: l = "",
                                    setCustomGiftMessage: r,
                                    giftRecipientError: s,
                                    setGiftRecipientError: a,
                                    validatingGiftRecipient: o,
                                    giftRecipient: u,
                                    giftingOrigin: d,
                                    setValidatingGiftRecipient: c,
                                } = (0, _.Pv)(),
                                C = (0, M.t4)((e) => e.selectedSkuId),
                                { paymentSourceId: p } = (0, A.P5)(),
                                m = (0, k.Hf)(),
                                E = (0, k.RR)(),
                                T = (0, k.gU)(),
                                h = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
                                f = (0, ef.A)(),
                                S = async (e, t) => {
                                    c(!0),
                                        null != s && a(),
                                        (await (0, Q.JJ)(e.id, t)) || a(W.intl.string(W.t["4kgVqQ"])),
                                        c(!1);
                                };
                            (0, q.Ay)(() => {
                                null != C &&
                                    null != u &&
                                    (d !== B.vQ.DM_CHANNEL_WISHLIST &&
                                        eg.default.track(eP.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                    S(u, C));
                            });
                            let I = () =>
                                (0, i.jsx)(eS.A, {
                                    onTextChange: (e) => r?.(e),
                                    pendingText: l,
                                    currentText: l,
                                    disableThemedBackground: !0,
                                    className: eN.iX,
                                    innerClassName: eN.pt,
                                });
                            return {
                                renderLeftColumn: () =>
                                    (0, i.jsx)("div", {
                                        className: eN.qL,
                                        children: (0, i.jsx)(eI.t, { isShopGift: !0 }),
                                    }),
                                renderRightColumn: () => {
                                    let e = (0, X.pA)({
                                        selectedSkuPricePreview: m,
                                        paymentSourceId: p,
                                        selectedSkuId: C,
                                        skuPricePreviewsById: E,
                                        skusById: T,
                                    });
                                    return d === B.vQ.USER_PROFILE_WISHLIST || d === B.vQ.DM_CHANNEL_WISHLIST
                                        ? (0, i.jsxs)("div", {
                                              children: [
                                                  (0, i.jsx)(ex.Z, { giftRecipient: u }),
                                                  I(),
                                                  null != e &&
                                                      null != C &&
                                                      (0, i.jsx)(eT, {
                                                          skuId: C,
                                                          priceAmount: e.amount,
                                                          priceCurrency: e.currency,
                                                          className: eN.uW,
                                                          previewHeaderClassName: eN.vX,
                                                          isSelected: !0,
                                                          shouldDisplayHeader: !0,
                                                          hideProfilePreview: !0,
                                                      }),
                                                  (0, i.jsx)("div", {
                                                      className: eN.fi,
                                                      children: (0, i.jsx)(ey, { handleClose: n, selectedSkuId: C }),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              children: [
                                                  (0, i.jsx)(eh.A, {
                                                      selectedSkuId: C,
                                                      recipients: f,
                                                      className: eN.uh,
                                                      validateSelectedGift: S,
                                                  }),
                                                  I(),
                                                  null != e &&
                                                      null != C &&
                                                      (0, i.jsx)(eT, {
                                                          skuId: C,
                                                          priceAmount: e.amount,
                                                          priceCurrency: e.currency,
                                                          className: eN.Ng,
                                                          isSelected: !0,
                                                          shouldDisplayHeader: !0,
                                                      }),
                                              ],
                                          });
                                },
                                onStepChange: t,
                                onBackClick: n,
                                ctaDisabled: null != s || null == u || u.id === h?.id || l.length > B.Jo,
                                loading: o,
                            };
                        })({ handleStepChange: l, handleClose: r });
                    return t({
                        paymentModalStepProps: n,
                        unifiedStepProps: {
                            layout: "two-column",
                            renderLeftColumn: s,
                            renderRightColumn: a,
                            primaryCTAButtonProps: { loading: u, disabled: o },
                        },
                    });
                },
            },
            [a.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eR, { ...e }), options: N },
    };
var eF = n(429913),
    eb = n(67480),
    ew = n(328968),
    eH = n(733391),
    eG = n(821609),
    eK = n(318254),
    eB = n(262427),
    eW = n(510022),
    eY = n(317560),
    eV = n(366523),
    ez = n(208733);
function eZ(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, m.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, M.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, A.P5)(),
        a = (0, k.gU)(),
        { isGift: o, giftRecipient: u } = (0, _.Pv)();
    j()(null != l, "Expected selectedSkuId"), j()(null != s, "Expected application");
    let d = a[l];
    j()(null != d, "Expected sku");
    let c = r.find((e) => e.sku_id === l),
        p = c?.metadata?.orbs_reward;
    if (
        (C.useEffect(() => {
            o || ((0, eY.j)(), t(), (0, eW.n)({ sku: d, application: s, analyticsLocations: n, orbsReward: p }));
        }, [o, d, s, t, n, p]),
        !o)
    )
        return null;
    let E = null != p && p > 0;
    return (0, i.jsxs)(G.dZ, {
        children: [
            (0, i.jsx)(K.A, {}),
            (0, i.jsxs)("div", {
                className: ez.EL,
                children: [
                    (0, i.jsx)(eV.e, { sku: d, shape: "square", containerClassName: ez.LC }),
                    (0, i.jsx)(ei.D, {
                        variant: "heading-xl/semibold",
                        className: ez.RS,
                        children: W.intl.string(W.t["5glWta"]),
                    }),
                    (0, i.jsx)(el.E, {
                        variant: "text-md/normal",
                        children: W.intl.formatToPlainString(W.t["2VjPTw"], {
                            itemName: d.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    E &&
                        (0, i.jsx)("div", {
                            className: ez.Is,
                            children: (0, i.jsx)(eB.J, {
                                Icon: eK.C,
                                text: W.intl.format(W.t["ZV+aS9"], { orbCount: p }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: ez.UD,
                        children: (0, i.jsx)(eG.$, { onClick: t, text: W.intl.string(W.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var eq = n(889137),
    eQ = n(735438),
    eX = n.n(eQ),
    eJ = n(742158),
    e$ = n(683071),
    e0 = n(313961),
    e1 = n(765441),
    e8 = n(238017),
    e2 = n(650588),
    e7 = n(723090),
    e5 = n(763827),
    e3 = n(403362),
    e6 = n(871123),
    e9 = n(832163),
    e4 = n(44724),
    te = n(980094),
    tt = n(627363),
    tn = n(587895),
    tl = n(71393),
    ti = n(806931),
    tr = n(107610);
function ts(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        r = C.useCallback(() => {
            (0, e4.X)({ guildId: n.id });
        }, [n.id]),
        a = C.useCallback(() => {
            t();
            let e = e9.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(eP.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, l.id)) ||
                ((0, s.closeAllModals)(),
                (0, e4.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: l.id, slug: l.slug }));
        }, [n.id, l.id, l.slug, t]);
    return (0, i.jsx)("div", {
        className: tr.$O,
        children: (0, i.jsx)(Z.Q, {
            text: W.intl.string(W.t.ImioFL),
            onMouseDown: r,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let ta = (0, E.Mz)(),
    to = {
        CustomPaymentContextProvider: (e) => {
            let {
                    children: t,
                    discoverySessionId: n,
                    loadId: l,
                    applicationId: r,
                    isGift: s,
                    skuId: a,
                    analyticsLocations: o = [],
                    ...u
                } = e,
                { analyticsLocations: d } = ((e) => {
                    let { applicationId: t, skuId: n, analyticsLocations: l } = e,
                        { analyticsLocations: i } = (0, m.Ay)(l, I.A.SLAYER_STOREFRONT_PAYMENT_MODAL),
                        r = (0, eF.h)(t);
                    return (
                        C.useEffect(() => {
                            null == r ||
                                null == r.guildId ||
                                null == n ||
                                ew.A.isFetchingForSKU(n) ||
                                null != eb.A.get(n) ||
                                (0, eH.qf)(r.guildId, n);
                        }, [r, n]),
                        { analyticsLocations: i }
                    );
                })({ applicationId: r, skuId: a, analyticsLocations: o, ...u });
            return (0, i.jsx)(m.f5, {
                value: d,
                children: (0, i.jsx)(A.PaymentContextProvider, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: r,
                    skuIDs: null != a ? [a] : [],
                    purchaseType: ev.VV.ONE_TIME,
                    isGift: s,
                    ...u,
                    activeSubscription: null,
                    children: t,
                }),
            });
        },
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    applicationId: l,
                    analyticsSourceLocation: r,
                    renderModalProps: s,
                    onClose: a,
                    onComplete: o,
                    flowSpecificOptions: u,
                    children: d,
                } = e,
                { analyticsLocations: c } = (0, m.Ay)(),
                p = s.onClose,
                E = C.useCallback(
                    (e) => {
                        p(), null != a && a(e);
                    },
                    [p, a],
                ),
                _ = C.useMemo(
                    () => ({
                        onClose: E,
                        onComplete: o,
                        applicationId: l,
                        skuId: t,
                        initialPlanId: null,
                        analyticsObject: r,
                        analyticsLocations: c,
                    }),
                    [E, o, l, t, r, c],
                ),
                A = C.useMemo(
                    () => ({ skuId: t, loadId: n, applicationId: l, flowSpecificOptions: u, analyticsLocations: c }),
                    [t, n, l, u, c],
                ),
                T = C.useMemo(
                    () => ({ sharedCheckoutContext: A, paymentModalProps: _, renderModalProps: s }),
                    [A, _, s],
                );
            return (0, i.jsx)(ta.Provider, { value: T, children: d });
        },
        UnifiedCheckoutCustomHeader: function (e) {
            let { step: t } = e,
                n = (0, eq.YW)(t)
                    .with(a.pn.GIFT_CUSTOMIZATION, () => W.intl.string(W.t["JCFN/y"]))
                    .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => W.intl.string(W.t.lDbi6H))
                    .with(a.pn.CONFIRM, () => "")
                    .otherwise(() => null);
            return null == n ? null : (0, i.jsx)(p.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
        },
        UnifiedCheckoutStepDefinitions: {
            [a.pn.GIFT_CUSTOMIZATION]: {
                StepController: (e) => {
                    let { renderStep: t, paymentModalStepProps: n } = e,
                        { handleStepChange: l, handleClose: r } = n,
                        { renderStepBody: s, disabled: a } = ((e) => {
                            var t;
                            let n,
                                l,
                                r,
                                { handleStepChange: s, handleClose: a } = e,
                                {
                                    customGiftMessage: o = "",
                                    setCustomGiftMessage: u,
                                    giftRecipient: d,
                                    emojiConfetti: c,
                                    soundEffect: p,
                                    setEmojiConfetti: m,
                                    setSoundEffect: E,
                                    giftingOrigin: T,
                                    additionalUserIds: h,
                                } = (0, _.Pv)(),
                                f = (0, M.t4)((e) => e.selectedSkuId),
                                { application: S } = (0, A.P5)(),
                                I = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
                                x =
                                    ((t = I?.id),
                                    (n = (0, e1.A)()),
                                    (l = (function (e) {
                                        let t = (0, z.bG)([e5.A], () =>
                                                e5.A.isConnected() ? e5.A.getChannelId() : null,
                                            ),
                                            [n, l] = C.useState([]);
                                        return (
                                            C.useEffect(() => {
                                                let n = null != t ? e0.A.getParticipants(t) : [],
                                                    i = [],
                                                    r = new Set();
                                                for (let t of n)
                                                    (!(0, ti.Xw)(t) && !(0, ti.Ay)(t)) ||
                                                        t.user.id === e ||
                                                        r.has(t.user.id) ||
                                                        (r.add(t.user.id), i.push(t));
                                                i.sort((e, t) =>
                                                    (0, ti.Ay)(e) && !(0, ti.Ay)(t)
                                                        ? -1
                                                        : (0, ti.Ay)(t) && !(0, ti.Ay)(e)
                                                          ? 1
                                                          : 0,
                                                ),
                                                    l(i.map((e) => e.user));
                                            }, [t, e]),
                                            n
                                        );
                                    })(t)),
                                    (r = (0, z.yK)([ea.default], () => h?.map(ea.default.getUser).filter(e3.Vq) ?? [], [
                                        h,
                                    ])),
                                    C.useMemo(
                                        () =>
                                            eX().uniqWith(
                                                [...(null != d ? [d] : []), ...r, ...l, ...n],
                                                (e, t) => e.id === t.id,
                                            ),
                                        [d, r, l, n],
                                    )),
                                O = (0, z.bG)([eb.A], () => (null != f ? eb.A.get(f) : null), [f]),
                                { normalPrice: g, discountedPrice: P } = (0, e7.CD)({
                                    sku: O,
                                    priceSetAssignmentPurchaseType: eP.lid.GIFT,
                                }),
                                N = (0, e6.fq)(O),
                                y = (0, e6.xf)(O),
                                v = (function (e) {
                                    let { shouldFetchIfMissing: t } =
                                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = (0, e6.bF)(e),
                                        l = e?.applicationId,
                                        i = (0, z.bG)([tn.A], () => (null != l ? tn.A.getApplication(l) : null), [l]),
                                        r = i?.guildId,
                                        s = (0, z.bG)([tl.A], () => (null != r ? tl.A.getGuild(r) : null), [r]);
                                    return (
                                        C.useEffect(() => {
                                            n &&
                                                t &&
                                                null == s &&
                                                null != e &&
                                                tt.Ay.fetchApplication(e.applicationId, !0);
                                        }, [s, e, t, n]),
                                        n ? s : null
                                    );
                                })(O, { shouldFetchIfMissing: !0 }),
                                j = async (e, t) => {},
                                L = (e) => {
                                    null != E && E(null == e ? void 0 : e);
                                },
                                R = () =>
                                    (0, i.jsxs)("div", {
                                        className: tr.mT,
                                        children: [
                                            null != N &&
                                                (0, i.jsx)(eV.A, {
                                                    containerClassName: tr.T3,
                                                    cardImage: N,
                                                    cardBackgroundImage: y,
                                                    altText: O?.name ?? "",
                                                    shape: "square",
                                                }),
                                            (0, i.jsxs)("div", {
                                                className: tr._T,
                                                children: [
                                                    (0, i.jsx)(e2.A, { sound: p, onSelect: L }),
                                                    (0, i.jsx)(e8.A, {
                                                        setEmojiConfetti: m,
                                                        emojiConfetti: null == c ? void 0 : c,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                k = () => {
                                    let e = O?.orbsReward;
                                    return (0, i.jsxs)("div", {
                                        className: tr.Tc,
                                        children: [
                                            null != d &&
                                            (T === B.vQ.USER_PROFILE_WISHLIST || T === B.vQ.DM_CHANNEL_WISHLIST)
                                                ? (0, i.jsx)(ex.Z, { giftRecipient: d })
                                                : (0, i.jsx)(eh.A, {
                                                      selectedSkuId: f,
                                                      validateSelectedGift: j,
                                                      recipients: x,
                                                  }),
                                            (0, i.jsx)(eS.A, {
                                                onTextChange: (e) => u?.(e),
                                                pendingText: o,
                                                currentText: o,
                                                disableThemedBackground: !0,
                                                className: tr.iX,
                                                innerClassName: tr.pt,
                                            }),
                                            null == O
                                                ? null
                                                : (0, i.jsxs)("div", {
                                                      className: tr.AN,
                                                      children: [
                                                          (0, i.jsx)(eJ.z, {
                                                              className: tr.jr,
                                                              children: W.intl.string(W.t.PpoJzt),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: tr.Wx,
                                                              children: [
                                                                  (0, i.jsx)("div", {
                                                                      className: tr.Xb,
                                                                      children:
                                                                          null != O &&
                                                                          null != N &&
                                                                          (0, i.jsx)(eV.A, {
                                                                              containerClassName: tr.Iy,
                                                                              cardImage: N,
                                                                              cardBackgroundImage: y,
                                                                              altText: O.name,
                                                                              shape: "square",
                                                                          }),
                                                                  }),
                                                                  (0, i.jsxs)("div", {
                                                                      className: tr.vz,
                                                                      children: [
                                                                          null != S &&
                                                                              (0, i.jsx)(te.Q, { application: S }),
                                                                          (0, i.jsx)(el.E, {
                                                                              variant: "text-sm/semibold",
                                                                              children: O.name,
                                                                          }),
                                                                      ],
                                                                  }),
                                                                  (0, i.jsx)(el.E, {
                                                                      variant: "text-md/semibold",
                                                                      children: P ?? g,
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            null != O &&
                                                (0, e6.Ri)(O) &&
                                                (0, i.jsx)(e$.w, { type: "info", children: W.intl.string(W.t.lORYb6) }),
                                            null != e &&
                                                e > 0 &&
                                                (0, i.jsx)(eB.J, {
                                                    Icon: eK.C,
                                                    text: W.intl.format(W.t["ZV+aS9"], { orbCount: e }),
                                                }),
                                            null != v &&
                                                null != O &&
                                                (0, i.jsx)(ts, { handleClose: a, sku: O, guild: v }),
                                        ],
                                    });
                                };
                            return {
                                renderStepBody: () => (0, i.jsxs)("div", { className: tr.Du, children: [R(), k()] }),
                                getLeftColumnComponent: R,
                                getRightColumnComponent: k,
                                onStepChange: s,
                                onBackClick: a,
                                disabled: null == d || d.id === I?.id || o.length > B.Jo,
                            };
                        })({ handleStepChange: l, handleClose: r });
                    return t({
                        paymentModalStepProps: n,
                        unifiedStepProps: C.useMemo(
                            () => ({
                                layout: "custom-step-body",
                                renderStepBody: s,
                                primaryCTAButtonProps: { disabled: a },
                            }),
                            [s, a],
                        ),
                    });
                },
            },
            [a.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eZ, { ...e }) },
    };
var tu = n(69882),
    td = n(169797),
    tc = n(93159),
    tC = n(977445),
    tp = n(908419),
    tm = n(623373),
    tE = n(739508),
    t_ = n(715054);
(0, r.A)();
var tA = n(136857),
    tT = n(566980),
    th = n(855104),
    tf = n(373856),
    tS = n(289873),
    tI = n(241989),
    tx = n(132198),
    tO = n(252293),
    tg = n(971875),
    tP = n(319820),
    tN = n(327105),
    ty = n(200766);
let tv = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, tP.AO)({ sku: t }),
            s = (0, tg.oO)(l);
        r ? (s = W.intl.string(tN.default.qwSlCO)) : (0, tm.Ab)(l) && (s = W.intl.string(W.t["0TmQRG"]));
        let a = (0, tg.dL)(t),
            o =
                t.id === g.Dp.FRACTIONAL_PREMIUM
                    ? tx.m[g.Dp.FRACTIONAL_PREMIUM].render({ className: ty.$ })
                    : (0, i.jsx)(tI.WH, { sku: t, product: l });
        return (0, i.jsx)(tI.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: eK.C,
        });
    },
    tj = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, tO.A)({
            applicationId: (0, d.P)(t),
            skuIDs: [t],
            isGift: !1,
            currentPaymentSourceId: null,
            excludeSKUPurchasePreviews: !0,
        });
        let l = (0, L.bG)([eb.A], () => eb.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(tS.y, { type: tS.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(tv, { sku: l, orbPriceAmount: n });
    },
    tL = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(tc.vW, { label: W.intl.string(W.t.y0WGqP), value: null != t ? `${t}` : "", Icon: eK.C });
    },
    tR = () => W.intl.string(W.t.wmcDyu);
function tk() {
    let { immediateDelivery: e } = (0, tp.U)(),
        t = tR();
    return (0, i.jsx)(tc._P, {
        variant: { type: tc.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let tM = (0, E.Mz)(),
    tU = (0, C.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    tD = {
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsLocations: l,
                    analyticsSourceLocation: r,
                    renderModalProps: s,
                    flowSpecificOptions: a,
                    children: o,
                } = e,
                { onCheckoutSuccess: u } = a,
                {
                    orbProductContext: d,
                    isRedeeming: c,
                    orbRedemptionError: p,
                    onRedeemVirtualCurrency: m,
                } = ((e) => {
                    let { skuId: t, loadId: n, analyticsLocations: l, onCheckoutSuccess: i } = e,
                        r = (0, z.bG)([ea.default], () => eo.Ay.canUseShopDiscounts(ea.default.getCurrentUser())),
                        s = (0, z.bG)([eb.A], () => eb.A.get(t), [t]),
                        a = (0, e7.JL)({ sku: s }),
                        { product: o } = (0, eu.q)(t),
                        u = (0, C.useMemo)(() => {
                            if (null != a) return { orbPriceAmount: a.amount };
                            if (null != o) {
                                let e = (0, tm.CW)({ product: o, hasShopDiscount: r });
                                return { orbPriceAmount: null !== e ? e.amount : null };
                            }
                            return null;
                        }, [a, o, r]);
                    u?.orbPriceAmount == null && (0, tE.hD)("Orb price not found for product", { tags: { sku_id: t } });
                    let { redeemVirtualCurrency: d, isSubmitting: c, error: p } = (0, t_.Q)({ skuId: t, loadId: n }),
                        m = (0, C.useCallback)(
                            (e) => {
                                d(t, n, (n) => {
                                    i({ entitlements: n, skuId: t }), e();
                                });
                            },
                            [t, n, d, i],
                        );
                    return {
                        skuId: t,
                        loadId: n,
                        analyticsLocations: l ?? [],
                        orbProductContext: u,
                        onRedeemVirtualCurrency: m,
                        isRedeeming: c,
                        orbRedemptionError: p,
                    };
                })({ skuId: t, loadId: n, onCheckoutSuccess: u, analyticsLocations: l }),
                E = ((e) => {
                    let {
                            skuId: t,
                            analyticsLocations: n,
                            analyticsSourceLocation: l,
                            orbProductContext: i,
                            onClose: r,
                        } = e,
                        { emitOrbCheckoutPaymentFlowEvent: s } = (0, tf.O)({
                            skuId: t,
                            orbProductContext: i,
                            analyticsLocations: n,
                            analyticsSourceLocation: l,
                        });
                    return {
                        analyticsDataOverride: (0, C.useMemo)(() => {
                            if (null != i)
                                return {
                                    price: i.orbPriceAmount ?? void 0,
                                    regular_price: i.orbPriceAmount ?? void 0,
                                    currency: eP.Yri.DISCORD_ORB,
                                };
                        }, [i]),
                        onClose: (0, C.useCallback)(
                            async (e) => {
                                e || s(eP.HAw.PAYMENT_FLOW_CANCELED), await r();
                            },
                            [r, s],
                        ),
                    };
                })({
                    onClose: s.onClose,
                    skuId: t,
                    analyticsLocations: l,
                    analyticsSourceLocation: r,
                    orbProductContext: d,
                });
            return (0, i.jsx)(tM.Provider, {
                value: {
                    sharedCheckoutContext: {
                        loadId: n,
                        skuId: t,
                        analyticsLocations: l,
                        analyticsSourceLocation: r,
                        flowSpecificOptions: a,
                    },
                    paymentModalProps: E,
                    renderModalProps: s,
                },
                children: (0, i.jsx)(tU.Provider, {
                    value: { orbProductContext: d, isRedeeming: c, orbRedemptionError: p, onRedeemVirtualCurrency: m },
                    children: o,
                }),
            });
        },
        UnifiedCheckoutStepDefinitions: {
            [a.pn.REVIEW]: {
                StepController: (e) => {
                    let {
                            paymentModalStepProps: t,
                            sharedCheckoutContext: { skuId: n, analyticsLocations: l, analyticsSourceLocation: r },
                        } = e,
                        { handleClose: s } = t;
                    ((e) => {
                        let { handleClose: t } = e,
                            { purchaseState: n } = (0, A.P5)();
                        (0, C.useEffect)(() => {
                            n === tT.h.COMPLETED && t();
                        }, [n, t]);
                    })({ handleClose: s });
                    let {
                            orbProductContext: a,
                            isRedeeming: o,
                            orbRedemptionError: u,
                            onRedeemVirtualCurrency: d,
                        } = (0, C.useContext)(tU),
                        { primaryButtonProps: c, ...p } = ((e) => {
                            let {
                                    skuId: t,
                                    analyticsSourceLocation: n,
                                    analyticsLocations: l,
                                    orbProductContext: r,
                                    isRedeeming: s,
                                    orbRedemptionError: a,
                                    onRedeemVirtualCurrency: o,
                                } = e,
                                {
                                    isStepLoading: u,
                                    orbPriceAmount: d,
                                    orbBalanceToDisplay: c,
                                    onClickCheckout: p,
                                    showCollectiblesDiscountWarning: m,
                                    errorMessage: E,
                                } = ((e) => {
                                    let {
                                            skuId: t,
                                            onRedeemVirtualCurrency: n,
                                            orbRedemptionError: l,
                                            orbProductContext: i,
                                            analyticsLocations: r,
                                            analyticsSourceLocation: s,
                                        } = e,
                                        a = (0, M.t4)((e) => e.selectedSkuId),
                                        { setPurchaseState: o } = (0, A.P5)(),
                                        u = (0, th.gN)(),
                                        d = (0, C.useRef)(u),
                                        { emitOrbCheckoutPaymentFlowEvent: c } = (0, tf.O)({
                                            skuId: t,
                                            orbProductContext: i,
                                            analyticsLocations: r,
                                            analyticsSourceLocation: s,
                                        });
                                    (0, q.Ay)(() => {
                                        c(eP.HAw.PAYMENT_FLOW_LOADED);
                                    }),
                                        (0, C.useEffect)(() => {
                                            null != l &&
                                                null !== d.current &&
                                                (c(eP.HAw.PAYMENT_FLOW_FAILED, l), (d.current = null));
                                        }, [l, c]);
                                    let p = (0, C.useCallback)(() => {
                                            (d.current = u),
                                                c(eP.HAw.PAYMENT_FLOW_COMPLETED),
                                                n(() => {
                                                    o(tT.h.COMPLETED), c(eP.HAw.PAYMENT_FLOW_SUCCEEDED);
                                                });
                                        }, [n, o, u, c]),
                                        m = d.current ?? u,
                                        E = null != i ? i.orbPriceAmount : null;
                                    return {
                                        isStepLoading: null == i,
                                        showCollectiblesDiscountWarning: (0, e_.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                        errorMessage: (0, C.useMemo)(
                                            () =>
                                                null == l
                                                    ? null
                                                    : l.code === tA.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? W.intl.string(W.t.keFvXM)
                                                      : l.code === tA.tG.ALREADY_PURCHASED
                                                        ? W.intl.string(W.t.m371Mx)
                                                        : W.intl.string(W.t.fqJZ11),
                                            [l],
                                        ),
                                        orbPriceAmount: E,
                                        orbBalanceToDisplay: m,
                                        onClickCheckout: p,
                                        selectedSkuId: a,
                                    };
                                })({
                                    skuId: t,
                                    analyticsSourceLocation: n,
                                    analyticsLocations: l,
                                    orbProductContext: r,
                                    orbRedemptionError: a,
                                    onRedeemVirtualCurrency: o,
                                }),
                                _ = (0, z.bG)([eb.A], () => eb.A.get(t), [t]),
                                T = (0, tC.u)(_?.applicationId),
                                {
                                    disabled: h,
                                    tooltipText: f,
                                    text: S,
                                } = ((e) => {
                                    let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                        { disabled: i, tooltipText: r } = (0, C.useMemo)(
                                            () =>
                                                null == n
                                                    ? { disabled: !0, tooltipText: W.intl.string(W.t["c/rcUu"]) }
                                                    : !l && (null == t || n > t)
                                                      ? { disabled: !0, tooltipText: W.intl.string(W.t.keFvXM) }
                                                      : { disabled: !1, tooltipText: null },
                                            [n, t, l],
                                        );
                                    return { disabled: i, tooltipText: r, text: tR() };
                                })({ orbBalance: c, orbPriceAmount: d, isInTestMode: T }),
                                I = (0, C.useMemo)(
                                    () => ({ onClick: p, loading: s, text: S, disabled: h, tooltipText: f }),
                                    [p, s, S, h, f],
                                ),
                                x = m ? W.intl.format(W.t.fsOXXO, {}) : null,
                                O = T ? W.intl.string(W.t.OvMyMd) : null;
                            return {
                                isStepLoading: u,
                                upperInlineNoticeProps: (0, C.useMemo)(() => {
                                    if (null != O || null != x || null != E) {
                                        let e = [];
                                        return (
                                            null != O &&
                                                e.push({
                                                    type: "warning",
                                                    message: O,
                                                    key: "test-mode-warning-notice",
                                                }),
                                            null != x &&
                                                e.push({
                                                    type: "warning",
                                                    message: x,
                                                    key: "orb-checkout-warning-notice",
                                                }),
                                            null != E &&
                                                e.push({
                                                    type: "critical",
                                                    message: E,
                                                    key: "orb-checkout-error-notice",
                                                }),
                                            e
                                        );
                                    }
                                    return null;
                                }, [O, x, E]),
                                purchaseItemContent: (0, i.jsx)(tj, { skuId: t, orbPriceAmount: d }),
                                paymentSelectContent: (0, i.jsx)(tL, { orbBalance: c }),
                                legalContent: (0, i.jsx)(tk, {}),
                                primaryButtonProps: I,
                                invoiceSummaryContent: null,
                                invoiceTotalDueLabel: null,
                                invoiceTotalDueValue: null,
                            };
                        })({
                            skuId: n,
                            analyticsLocations: l,
                            analyticsSourceLocation: r,
                            orbProductContext: a,
                            isRedeeming: o,
                            orbRedemptionError: u,
                            onRedeemVirtualCurrency: d,
                        });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(G.dZ, { children: (0, i.jsx)(tu.T_, { ...p }) }),
                            (0, i.jsx)(G.UX, { children: (0, i.jsx)(td.lo, { primaryButtonProps: c }) }),
                        ],
                    });
                },
            },
        },
    },
    tF = {
        [l.C.ORB_CHECKOUT]: {
            flowType: l.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: eP.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tD,
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            flowType: l.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: eP.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eD,
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: l.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: eP.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: to,
        },
        [l.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_CHECKOUT },
        [l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_APPS_OTP_CHECKOUT },
        [l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [l.C.GUILD_PRODUCT_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_PRODUCT_CHECKOUT },
        [l.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_ROLE_CHECKOUT },
        [l.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_BOOST_CHECKOUT },
    };
var tb = n(735305),
    tw = n(295405);
let tH = (e) => {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        r = C.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(tw.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, i.jsx)(tb.x, { ...l, onReturn: r });
};
var tG = n(866485),
    tK = n(981036),
    tB = n(367644);
let tW = (e) => {
        let {
                paymentModalStepProps: { handleStepChange: t },
                unifiedStepProps: n,
            } = e,
            {
                layout: l,
                renderStepBody: r,
                renderLeftColumn: s,
                renderRightColumn: o,
                primaryCTAButtonProps: u,
                onBackClick: d,
            } = n,
            { hasPaymentSources: c } = (0, A.P5)(),
            p = c ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS,
            m = C.useCallback(() => t(p), [t, p]),
            E = C.useMemo(
                () =>
                    "custom-step-body" === l
                        ? r()
                        : "two-column" === l
                          ? (0, i.jsxs)("div", { className: tB.D, children: [s(), o()] })
                          : null,
                [l, r, s, o],
            ),
            _ = C.useMemo(() => ({ ...u, onClick: m, text: W.intl.string(W.t.XiOHRX) }), [u, m]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(G.dZ, { children: E }),
                (0, i.jsx)(G.UX, { children: (0, i.jsx)(tK.cy, { onBackClick: d, primaryCTAButtonProps: _ }) }),
            ],
        });
    },
    tY = (0, tG.R)({ step: a.pn.GIFT_CUSTOMIZATION, renderStep: (e) => (0, i.jsx)(tW, { ...e }) });
var tV = n(545075);
let tz = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, C.useRef)(!1),
            { blockedPayments: r } = (0, A.P5)(),
            { handleStepChange: s } = t;
        return ((0, C.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(tV.oO, {})
            : null;
    },
    tZ = {
        [l.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, disablePaymentAuthSteps: !0, predicateStepType: "unified" },
        [l.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [l.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1 },
    };
class tq {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = tF[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = tZ[e]);
    }
    getUnifiedStepDefinition(e) {
        return this.tenantCheckoutFlowConfig.UnifiedCheckoutStepDefinitions[e];
    }
    generateRenderHeader() {
        let { UnifiedCheckoutCustomHeader: e } = this.tenantCheckoutFlowConfig;
        if (null != e) return (t, n, l) => (0, i.jsx)(e, { plan: t, onClose: n, step: l });
    }
    getPredicateStepConfig() {
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? u.kJ
            : "unified" === e
              ? { key: null, renderStep: (e) => (0, i.jsx)(tz, { paymentModalStepProps: e, defaultStep: a.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, i.jsx)(o.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== l.C.ORB_CHECKOUT)
            return {
                key: a.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, i.jsx)(tH, {
                        paymentModalStepProps: e,
                        returnStep: a.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? a.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        return t && n
            ? {
                  key: a.pn.GIFT_CUSTOMIZATION,
                  renderStep: (e) =>
                      (0, i.jsx)(tY, {
                          paymentModalStepProps: e,
                          unifiedStepDefinition: this.getUnifiedStepDefinition(a.pn.GIFT_CUSTOMIZATION),
                      }),
                  options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => W.intl.string(W.t["W685+b"]) },
              }
            : void 0;
    }
    getReviewStepConfig() {
        let e = this.getUnifiedStepDefinition(a.pn.REVIEW);
        return (0, c.B)(e)
            ? u.r2
            : {
                  key: a.pn.REVIEW,
                  renderStep: (t) => (0, i.jsx)(tu.Pw, { paymentModalStepProps: t, unifiedStepDefinition: e }),
                  options: { useBreadcrumbLabel: () => W.intl.string(W.t.QBnNHq) },
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
            d = this.createDefinedStepConfigsArray([i, r, s, ...(l ? [] : u.hh), o]);
        return null != n && d.push({ key: a.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), d;
    }
    getApplicationIdFor1PShopSKU(e) {
        return this.checkoutFlow === l.C.ORB_CHECKOUT
            ? (0, d.P)(e)
            : this.checkoutFlow === l.C.COLLECTIBLES_CHECKOUT
              ? eP.FYj
              : void 0;
    }
    openCheckoutModal(e) {
        let {
                openModalOptions: t,
                flowSpecificOptions: l,
                giftContextProps: a,
                onComplete: o,
                onClose: u,
                skuId: d,
                loadId: c,
                discoverySessionId: C,
                applicationId: p,
                analyticsSourceLocation: m,
                analyticsLocations: E,
            } = e,
            _ = c ?? (0, r.A)(),
            { modalKey: A } = t,
            T = this.generateRenderHeader(),
            h = p ?? this.getApplicationIdFor1PShopSKU(d),
            f = !1,
            S = l ?? void 0;
        return (0, s.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: !!(null != a && a.isGift) });
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
                        renderHeader: T,
                        skuId: d,
                        loadId: _,
                        discoverySessionId: C,
                        applicationId: h,
                        analyticsLocations: E,
                        analyticsSourceLocation: m,
                        renderModalProps: n,
                        giftContextProps: a,
                        flowSpecificOptions: S,
                    });
            },
            {
                ...t,
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(f, _), (0, s.closeModal)(A);
                },
                modalKey: A,
            },
        );
    }
}
n(584160);
let tQ = null,
    tX = null,
    tJ = null;
function t$() {
    return null == tQ && (tQ = new tq({ checkoutFlow: l.C.ORB_CHECKOUT })), tQ;
}
function t0() {
    return null == tX && (tX = new tq({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), tX;
}
function t1() {
    return null == tJ && (tJ = new tq({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), tJ;
}
l.C.ORB_CHECKOUT, l.C.COLLECTIBLES_CHECKOUT, l.C.SLAYER_STOREFRONT_CHECKOUT;
