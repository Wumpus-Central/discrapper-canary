n.d(t, { Mw: () => tK, gf: () => tB.g, Tt: () => tZ, XZ: () => l.X, KY: () => tX, CL: () => l.C, Tx: () => tz });
var l = n(75304);
n(321073);
var i = n(627968),
    r = n(132500),
    s = n(192308),
    a = n(166532),
    o = n(546042),
    u = n(939220),
    c = n(310829),
    d = n(64700),
    C = n(20742),
    p = n(688810),
    m = n(937008),
    E = n(156312),
    T = n(623020),
    _ = n(503698),
    A = n.n(_),
    O = n(106778),
    h = n(228366),
    S = n(793574),
    I = n(213530),
    x = n(158216),
    f = n(758836),
    g = n(483764);
let P = { sliderBodyClassName: g.Bz },
    N = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(O.Fk, { ref: n, className: g.Lb, environment: t.current }),
                (0, i.jsx)(I.K, { options: l, className: A()(g.Oh, { [g.R]: !r }) }),
            ],
        });
    };
var y = n(284009),
    L = n.n(y),
    R = n(702841),
    j = n(775602),
    v = n(427675),
    M = n(94420),
    k = n(590180),
    U = n(953150),
    F = n(524246),
    D = n(14368),
    b = n(61750),
    H = n(972607),
    w = n(482132),
    G = n(921925),
    K = n(788868),
    B = n(985018);
function W(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        l = (0, M.t4)((e) => e.selectedSkuId),
        {
            application: r,
            paymentError: s,
            purchaseError: a,
            purchasePreviewError: o,
            appliedUserDiscounts: u,
        } = (0, E.P5)(),
        c = (0, v.gU)(),
        C = (0, R.bG)([k.A], () => k.A.getProduct(l)),
        p = d.useRef(!1);
    L()(null != l, "Expected selectedSkuId"), L()(null != r, "Expected application");
    let m = c[l];
    L()(null != m, "Expected sku");
    let T = null != s || null != a || null != o,
        _ =
            u.length > 0
                ? B.intl.formatToPlainString(B.t.VuV3Td, { discountOfferAmount: u[0].discount.amount })
                : void 0;
    return (d.useEffect(() => {
        null == C ||
            T ||
            p.current ||
            ((p.current = !0),
            (0, b.A)({
                product: C,
                overrideTitle: _,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: f.gs.FIAT,
            }));
    }, [C, n, t, T, _]),
    T)
        ? (0, i.jsx)(w.dZ, { children: (0, i.jsx)(G.A, {}) })
        : null;
}
function Y(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: r,
            giftRecipient: s,
            giftMessageError: a,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, m.Pv)(),
        c = (0, R.bG)([j.A], () => j.A.useReducedMotion),
        C = d.useRef(null),
        p = (0, M.t4)((e) => e.selectedSkuId),
        E = (0, R.bG)([k.A], () => k.A.getProduct(p)),
        { confettiColors: T } = (0, U.A)(E?.styles);
    return (
        d.useEffect(() => {
            t &&
                null != s &&
                null != p &&
                (u === K.vQ.USER_PROFILE_WISHLIST || u === K.vQ.DM_CHANNEL_WISHLIST) &&
                h.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: p, recipientId: s.id });
        }, [t, s, p, u]),
        t
            ? (0, i.jsxs)("div", {
                  ref: C,
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
                          !c &&
                          (0, i.jsx)(F.A, {
                              confettiTarget: C.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, D.rA)(E?.categorySkuId),
                              colors: T?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, i.jsx)(W, { ...e })
    );
}
var V = n(17928),
    Z = n(123292),
    z = n(964486),
    X = n(693477),
    q = n(993408),
    Q = n(575593),
    J = n(452027),
    $ = n(922016),
    ee = n(778712),
    et = n(939249),
    en = n(834730),
    el = n(534514),
    ei = n(986687),
    er = n(576622),
    es = n(287809),
    ea = n(927578),
    eo = n(674658),
    eu = n(898461),
    ec = n(203632),
    ed = n(892118),
    eC = n(536572),
    ep = n(14702),
    em = n(219103),
    eE = n(525723),
    eT = n(780651);
let e_ = (e) => {
    let {
            skuId: t,
            isSelected: n,
            priceAmount: l,
            priceCurrency: r,
            onSelect: s,
            shouldDisplayHeader: a = !1,
            className: o,
            previewHeaderClassName: u,
            hideProfilePreview: c = !1,
        } = e,
        { product: C } = (0, eo.q)(t, !0),
        { giftRecipient: p, giftRecipientError: E } = (0, m.Pv)(),
        T = (0, V.bG)([es.default], () => es.default.getCurrentUser()),
        _ = (0, eC.VG)(C),
        O = d.useRef(null),
        h = ea.Ay.canUseCollectibles(T),
        S = d.useMemo(() => (0, q.fT)(C, h), [C, h]),
        I = (0, eE.V_)(C);
    if (null == C) return null;
    let [x] = C.items;
    L()(null != x, "Product item should not be empty");
    let f = null != p && p.id !== T?.id && C.type !== Q.R.BUNDLE && x.type !== Q.R.NAMEPLATE && !c;
    return (0, i.jsxs)("div", {
        className: o,
        children: [
            a &&
                (0, i.jsx)("div", {
                    className: A()(eT.QU, u),
                    children: (0, i.jsx)(J.D, {
                        label: B.intl.string(B.t.PpoJzt),
                        children:
                            f &&
                            (0, i.jsx)(
                                $.Y,
                                {
                                    targetElementRef: O,
                                    preload: () => (0, er.A)(p.id, p.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, i.jsx)(ei.A, {
                                            ...e,
                                            user: p,
                                            pendingAvatar: p.getAvatarURL(null, (0, ee.FT)(ee._3.SIZE_80)),
                                            pendingAvatarDecoration: (0, eu.T)(x) ? x : null,
                                            pendingProfileEffect: (0, ec.C3)(x) ? x : null,
                                            pendingProfileFrame: (0, ed.s)(x) ? x : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0,
                                            hideExampleButton: !0,
                                        }),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, i.jsx)(et.D, {
                                            ...e,
                                            className: eT.Nx,
                                            innerRef: O,
                                            children: (0, i.jsx)(en.E, {
                                                variant: "text-xs/medium",
                                                color: "text-link",
                                                children: B.intl.string(B.t["2GnJQL"]),
                                            }),
                                        }),
                                },
                                p.id,
                            ),
                    }),
                }),
            (0, i.jsxs)(et.D, {
                tag: "div",
                onClick: () => {
                    null != t && null != s && s(t);
                },
                className: A()(eT.i1, { [eT.no]: n && null == E, [eT.cN]: n && null != E }),
                children: [
                    (0, i.jsxs)("div", {
                        className: eT.Ug,
                        children: [
                            (0, i.jsx)(ep.O, { product: C }),
                            (0, i.jsxs)("div", {
                                className: eT.JZ,
                                children: [
                                    (0, i.jsx)(en.E, { variant: "text-md/semibold", children: _ }),
                                    (0, i.jsx)(el.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: (() => {
                                            if (C?.type === Q.R.BUNDLE) return null;
                                            switch (x.type) {
                                                case Q.R.AVATAR_DECORATION:
                                                    return B.intl.string(B.t["7v0T9P"]);
                                                case Q.R.PROFILE_EFFECT:
                                                    return B.intl.string(B.t.wR5wOo);
                                                case Q.R.PROFILE_FRAME:
                                                    return B.intl.string(B.t.GWrZOd);
                                                case Q.R.NAMEPLATE:
                                                    return B.intl.string(B.t.x5CoXR);
                                                default:
                                                    return null;
                                            }
                                        })(),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(em.x, {
                                priceAmount: l,
                                priceCurrency: r,
                                discount: S,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    n &&
                        null != E &&
                        (0, i.jsx)("div", {
                            className: eT.Wh,
                            children: (0, i.jsx)(en.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: E,
                            }),
                        }),
                ],
            }),
        ],
    });
};
var eA = n(734925),
    eO = n(687033),
    eh = n(871181),
    eS = n(318007),
    eI = n(285719),
    ex = n(976860),
    ef = n(954571),
    eg = n(652215),
    eP = n(353791);
function eN(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, p.Ay)(S.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(Z.Q, {
        text: B.intl.string(B.t.J82mpK),
        onClick: function () {
            t(),
                (0, s.closeAllModals)(),
                null == n
                    ? (0, X.Cz)({ analyticsLocations: l, analyticsSource: S.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, ex.pX)(`${eg.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var ey = n(818348);
let eL = (0, d.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    eR = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: l } = (0, d.useContext)(eL);
        return (0, i.jsx)(Y, { analyticsLocations: t, hideConfetti: n, confettiCanvas: l, ...e });
    },
    ej = {
        [a.pn.GIFT_CUSTOMIZATION]: () => B.intl.string(B.t["JCFN/y"]),
        [a.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => B.intl.string(B.t.lDbi6H),
        [a.pn.CONFIRM]: () => "",
    },
    ev = (e) => {
        let { step: t } = e,
            n = ej[t];
        return null == n ? null : (0, i.jsx)(C.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    eM = {
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
                            } = (0, m.Pv)(),
                            C = (0, M.t4)((e) => e.selectedSkuId),
                            { paymentSourceId: p } = (0, E.P5)(),
                            T = (0, v.Hf)(),
                            _ = (0, v.RR)(),
                            A = (0, v.gU)(),
                            O = (0, V.bG)([es.default], () => es.default.getCurrentUser()),
                            h = (0, eO.A)(),
                            S = async (e, t) => {
                                d(!0),
                                    null != s && a(),
                                    (await (0, X.JJ)(e.id, t)) || a(B.intl.string(B.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, z.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== K.vQ.DM_CHANNEL_WISHLIST &&
                                    ef.default.track(eg.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                S(u, C));
                        });
                        let I = () =>
                            (0, i.jsx)(eh.A, {
                                onTextChange: (e) => r?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: eP.iX,
                                innerClassName: eP.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, i.jsx)("div", { className: eP.qL, children: (0, i.jsx)(eS.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, q.pA)({
                                    selectedSkuPricePreview: T,
                                    paymentSourceId: p,
                                    selectedSkuId: C,
                                    skuPricePreviewsById: _,
                                    skusById: A,
                                });
                                return c === K.vQ.USER_PROFILE_WISHLIST || c === K.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(eI.Z, { giftRecipient: u }),
                                              I(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(e_, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: eP.uW,
                                                      previewHeaderClassName: eP.vX,
                                                      isSelected: !0,
                                                      shouldDisplayHeader: !0,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, i.jsx)("div", {
                                                  className: eP.fi,
                                                  children: (0, i.jsx)(eN, { handleClose: n, selectedSkuId: C }),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(eA.A, {
                                                  selectedSkuId: C,
                                                  recipients: h,
                                                  className: eP.uh,
                                                  validateSelectedGift: S,
                                              }),
                                              I(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(e_, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: eP.Ng,
                                                      isSelected: !0,
                                                      shouldDisplayHeader: !0,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == u || u.id === O?.id || l.length > K.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = d.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, i.jsx)(tK, {
                    paymentModalStepProps: e,
                    layout: l.X.TWO_COLUMN,
                    renderLeftColumn: r,
                    renderRightColumn: s,
                    primaryCTAButtonProps: u,
                });
            },
            [a.pn.REVIEW]: T._,
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesPaymentContext: !0,
            CustomTenantProvider: (e) => {
                let {
                        skuId: t,
                        analyticsLocations: n,
                        renderModalProps: l,
                        additionalOptions: r,
                        children: s,
                        ...a
                    } = e,
                    {
                        environment: o,
                        confettiCanvas: u,
                        setConfettiCanvas: c,
                        customConfettiVisible: C,
                        setCustomConfettiVisible: m,
                        customConfettiDisplayOptions: T,
                        hideConfirmStepConfetti: _,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = d.useRef(new O.OH()),
                            [l, i] = d.useState(null),
                            [r, s] = d.useState(!1),
                            a = d.useMemo(() => (0, x.AB)({ purchaseType: f.gs.FIAT, skuId: t }), [t]);
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
                    { analyticsLocations: A } = ((e) => {
                        let { analyticsLocations: t } = e,
                            { analyticsLocations: n } = (0, p.Ay)([...t, S.A.COLLECTIBLES_PAYMENT_MODAL]);
                        return { analyticsLocations: n };
                    })({ analyticsLocations: n ?? [] }),
                    I = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    g = (0, d.useMemo)(
                        () => ({
                            analyticsLocations: A,
                            skuIDs: I,
                            setCustomConfettiVisible: m,
                            hideConfirmStepConfetti: _,
                            confettiCanvas: u,
                        }),
                        [A, I, m, _, u],
                    ),
                    P = a.onClose,
                    {
                        paymentModalSkuId: y,
                        paymentModalOnClose: L,
                        paymentModalOnComplete: R,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: i } = e,
                            r = t[0] ?? null,
                            s = d.useCallback(() => {
                                i(!0), l?.();
                            }, [l, i]);
                        return {
                            paymentModalSkuId: r,
                            paymentModalOnClose: d.useCallback(
                                (e) => {
                                    i(!1), n(e), h.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, i],
                            ),
                            paymentModalOnComplete: s,
                        };
                    })({
                        onClose: d.useCallback(
                            (e) => {
                                l.onClose(), null != P && P(e);
                            },
                            [l, P],
                        ),
                        onComplete: a.onComplete,
                        skuIDs: I,
                        setCustomConfettiVisible: m,
                    }),
                    j = null != r ? r.onStepChange : void 0,
                    v = (0, d.useMemo)(
                        () => ({
                            skuId: y,
                            onClose: L,
                            onComplete: R,
                            applicationId: eg.FYj,
                            initialPlanId: null,
                            analyticsLocations: A,
                            onStepChange: j,
                            hideShadow: !0,
                            transitionState: l.transitionState,
                            returnRef: l.returnRef,
                        }),
                        [y, L, R, A, l.transitionState, l.returnRef, j],
                    );
                return (0, i.jsxs)(p.f5, {
                    value: A,
                    children: [
                        (0, i.jsx)(N, {
                            environment: o,
                            setConfettiCanvas: c,
                            customConfettiDisplayOptions: T,
                            customConfettiVisible: C,
                        }),
                        (0, i.jsx)(E.PaymentContextProvider, {
                            ...a,
                            skuIDs: I,
                            stepConfigs: a.stepConfigs,
                            activeSubscription: null,
                            purchaseType: ey.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, i.jsx)(eL.Provider, {
                                value: g,
                                children: (0, i.jsx)(tB.g, { customPaymentModalProps: v, children: s }),
                            }),
                        }),
                    ],
                });
            },
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, m.Pv)();
            return n ? (0, i.jsx)(ev, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eR, { ...e }), options: P },
    };
var ek = n(429913),
    eU = n(67480),
    eF = n(328968),
    eD = n(733391),
    eb = n(821609),
    eH = n(318254),
    ew = n(262427),
    eG = n(510022),
    eK = n(317560),
    eB = n(366523),
    eW = n(208733);
function eY(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, p.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, M.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, E.P5)(),
        a = (0, v.gU)(),
        { isGift: o, giftRecipient: u } = (0, m.Pv)();
    L()(null != l, "Expected selectedSkuId"), L()(null != s, "Expected application");
    let c = a[l];
    L()(null != c, "Expected sku");
    let C = r.find((e) => e.sku_id === l),
        T = C?.metadata?.orbs_reward;
    if (
        (d.useEffect(() => {
            o || ((0, eK.j)(), t(), (0, eG.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: T }));
        }, [o, c, s, t, n, T]),
        !o)
    )
        return null;
    let _ = null != T && T > 0;
    return (0, i.jsxs)(w.dZ, {
        children: [
            (0, i.jsx)(G.A, {}),
            (0, i.jsxs)("div", {
                className: eW.EL,
                children: [
                    (0, i.jsx)(eB.e, { sku: c, shape: "square", containerClassName: eW.LC }),
                    (0, i.jsx)(el.D, {
                        variant: "heading-xl/semibold",
                        className: eW.RS,
                        children: B.intl.string(B.t["5glWta"]),
                    }),
                    (0, i.jsx)(en.E, {
                        variant: "text-md/normal",
                        children: B.intl.formatToPlainString(B.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    _ &&
                        (0, i.jsx)("div", {
                            className: eW.Is,
                            children: (0, i.jsx)(ew.J, {
                                Icon: eH.C,
                                text: B.intl.format(B.t["ZV+aS9"], { orbCount: T }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: eW.UD,
                        children: (0, i.jsx)(eb.$, { onClick: t, text: B.intl.string(B.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var eV = n(889137),
    eZ = n(735438),
    ez = n.n(eZ),
    eX = n(742158),
    eq = n(683071),
    eQ = n(313961),
    eJ = n(765441),
    e$ = n(238017),
    e0 = n(650588),
    e1 = n(723090),
    e2 = n(763827),
    e8 = n(403362),
    e7 = n(871123),
    e5 = n(832163),
    e3 = n(44724),
    e6 = n(980094),
    e9 = n(627363),
    e4 = n(587895),
    te = n(71393),
    tt = n(806931),
    tn = n(107610);
function tl(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        r = d.useCallback(() => {
            (0, e3.X)({ guildId: n.id });
        }, [n.id]),
        a = d.useCallback(() => {
            t();
            let e = e5.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(eg.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, l.id)) ||
                ((0, s.closeAllModals)(),
                (0, e3.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: l.id, slug: l.slug }));
        }, [n.id, l.id, l.slug, t]);
    return (0, i.jsx)("div", {
        className: tn.$O,
        children: (0, i.jsx)(Z.Q, {
            text: B.intl.string(B.t.ImioFL),
            onMouseDown: r,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let ti = {
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
                            emojiConfetti: C,
                            soundEffect: p,
                            setEmojiConfetti: T,
                            setSoundEffect: _,
                            giftingOrigin: A,
                            additionalUserIds: O,
                        } = (0, m.Pv)(),
                        h = (0, M.t4)((e) => e.selectedSkuId),
                        { application: S } = (0, E.P5)(),
                        I = (0, V.bG)([es.default], () => es.default.getCurrentUser()),
                        x =
                            ((t = I?.id),
                            (n = (0, eJ.A)()),
                            (l = (function (e) {
                                let t = (0, V.bG)([e2.A], () => (e2.A.isConnected() ? e2.A.getChannelId() : null)),
                                    [n, l] = d.useState([]);
                                return (
                                    d.useEffect(() => {
                                        let n = null != t ? eQ.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, tt.Xw)(t) && !(0, tt.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, tt.Ay)(e) && !(0, tt.Ay)(t)
                                                ? -1
                                                : (0, tt.Ay)(t) && !(0, tt.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, V.yK)([es.default], () => O?.map(es.default.getUser).filter(e8.Vq) ?? [], [O])),
                            d.useMemo(
                                () =>
                                    ez().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        f = (0, V.bG)([eU.A], () => (null != h ? eU.A.get(h) : null), [h]),
                        { normalPrice: g, discountedPrice: P } = (0, e1.CD)({
                            sku: f,
                            priceSetAssignmentPurchaseType: eg.lid.GIFT,
                        }),
                        N = (0, e7.fq)(f),
                        y = (0, e7.xf)(f),
                        L = (function (e) {
                            let { shouldFetchIfMissing: t } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = (0, e7.bF)(e),
                                l = e?.applicationId,
                                i = (0, V.bG)([e4.A], () => (null != l ? e4.A.getApplication(l) : null), [l]),
                                r = i?.guildId,
                                s = (0, V.bG)([te.A], () => (null != r ? te.A.getGuild(r) : null), [r]);
                            return (
                                d.useEffect(() => {
                                    n && t && null == s && null != e && e9.Ay.fetchApplication(e.applicationId, !0);
                                }, [s, e, t, n]),
                                n ? s : null
                            );
                        })(f, { shouldFetchIfMissing: !0 }),
                        R = async (e, t) => {},
                        j = (e) => {
                            null != _ && _(null == e ? void 0 : e);
                        },
                        v = () =>
                            (0, i.jsxs)("div", {
                                className: tn.mT,
                                children: [
                                    null != N &&
                                        (0, i.jsx)(eB.A, {
                                            containerClassName: tn.T3,
                                            cardImage: N,
                                            cardBackgroundImage: y,
                                            altText: f?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: tn._T,
                                        children: [
                                            (0, i.jsx)(e0.A, { sound: p, onSelect: j }),
                                            (0, i.jsx)(e$.A, {
                                                setEmojiConfetti: T,
                                                emojiConfetti: null == C ? void 0 : C,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        k = () => {
                            let e = f?.orbsReward;
                            return (0, i.jsxs)("div", {
                                className: tn.Tc,
                                children: [
                                    null != c && (A === K.vQ.USER_PROFILE_WISHLIST || A === K.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(eI.Z, { giftRecipient: c })
                                        : (0, i.jsx)(eA.A, {
                                              selectedSkuId: h,
                                              validateSelectedGift: R,
                                              recipients: x,
                                          }),
                                    (0, i.jsx)(eh.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: tn.iX,
                                        innerClassName: tn.pt,
                                    }),
                                    null == f
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: tn.AN,
                                              children: [
                                                  (0, i.jsx)(eX.z, {
                                                      className: tn.jr,
                                                      children: B.intl.string(B.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: tn.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: tn.Xb,
                                                              children:
                                                                  null != f &&
                                                                  null != N &&
                                                                  (0, i.jsx)(eB.A, {
                                                                      containerClassName: tn.Iy,
                                                                      cardImage: N,
                                                                      cardBackgroundImage: y,
                                                                      altText: f.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: tn.vz,
                                                              children: [
                                                                  null != S && (0, i.jsx)(e6.Q, { application: S }),
                                                                  (0, i.jsx)(en.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: f.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(en.E, {
                                                              variant: "text-md/semibold",
                                                              children: P ?? g,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != f &&
                                        (0, e7.Ri)(f) &&
                                        (0, i.jsx)(eq.w, { type: "info", children: B.intl.string(B.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(ew.J, {
                                            Icon: eH.C,
                                            text: B.intl.format(B.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != L && null != f && (0, i.jsx)(tl, { handleClose: a, sku: f, guild: L }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: tn.Du, children: [v(), k()] }),
                        getLeftColumnComponent: v,
                        getRightColumnComponent: k,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === I?.id || o.length > K.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = d.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(tK, {
                paymentModalStepProps: e,
                layout: l.X.CUSTOM_STEP_BODY,
                renderStepBody: r,
                primaryCTAButtonProps: a,
            });
        },
        [a.pn.REVIEW]: T._,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eY, { ...e }) },
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
                    analyticsLocations: o = [],
                    renderModalProps: u,
                    onClose: c,
                    onComplete: C,
                    analyticsSourceLocation: m,
                    ...T
                } = e,
                { analyticsLocations: _ } = ((e) => {
                    let { applicationId: t, skuId: n, analyticsLocations: l } = e,
                        { analyticsLocations: i } = (0, p.Ay)(l, S.A.SLAYER_STOREFRONT_PAYMENT_MODAL),
                        r = (0, ek.h)(t);
                    return (
                        d.useEffect(() => {
                            null == r ||
                                null == r.guildId ||
                                null == n ||
                                eF.A.isFetchingForSKU(n) ||
                                null != eU.A.get(n) ||
                                (0, eD.qf)(r.guildId, n);
                        }, [r, n]),
                        { analyticsLocations: i }
                    );
                })({ applicationId: r, skuId: a, analyticsLocations: o }),
                A = u.onClose,
                O = d.useCallback(
                    (e) => {
                        A(), null != c && c(e);
                    },
                    [A, c],
                ),
                h = d.useMemo(
                    () => ({
                        onClose: O,
                        onComplete: C,
                        applicationId: r,
                        skuId: a,
                        initialPlanId: null,
                        analyticsObject: m,
                        analyticsLocations: _,
                    }),
                    [O, C, r, a, m, _],
                );
            return (0, i.jsx)(p.f5, {
                value: _,
                children: (0, i.jsx)(E.PaymentContextProvider, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: r,
                    skuIDs: [a],
                    purchaseType: ey.VV.ONE_TIME,
                    isGift: s,
                    ...T,
                    activeSubscription: null,
                    children: (0, i.jsx)(tB.g, { customPaymentModalProps: h, children: t }),
                }),
            });
        },
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, eV.YW)(t)
                .with(a.pn.GIFT_CUSTOMIZATION, () => B.intl.string(B.t["JCFN/y"]))
                .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => B.intl.string(B.t.lDbi6H))
                .with(a.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(C.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var tr = n(69882),
    ts = n(169797),
    ta = n(93159),
    to = n(977445),
    tu = n(908419),
    tc = n(623373),
    td = n(739508),
    tC = n(715054);
(0, r.A)();
var tp = n(136857),
    tm = n(566980),
    tE = n(855104),
    tT = n(373856),
    t_ = n(289873),
    tA = n(241989),
    tO = n(132198),
    th = n(252293),
    tS = n(971875),
    tI = n(319820),
    tx = n(327105),
    tf = n(200766);
let tg = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, tI.AO)({ sku: t }),
            s = (0, tS.oO)(l);
        r ? (s = B.intl.string(tx.default.qwSlCO)) : (0, tc.Ab)(l) && (s = B.intl.string(B.t["0TmQRG"]));
        let a = (0, tS.dL)(t),
            o =
                t.id === f.Dp.FRACTIONAL_PREMIUM
                    ? tO.m[f.Dp.FRACTIONAL_PREMIUM].render({ className: tf.$ })
                    : (0, i.jsx)(tA.WH, { sku: t, product: l });
        return (0, i.jsx)(tA.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: eH.C,
        });
    },
    tP = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, th.A)({
            applicationId: (0, c.P)(t),
            skuIDs: [t],
            isGift: !1,
            currentPaymentSourceId: null,
            excludeSKUPurchasePreviews: !0,
        });
        let l = (0, R.bG)([eU.A], () => eU.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(t_.y, { type: t_.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(tg, { sku: l, orbPriceAmount: n });
    },
    tN = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(ta.vW, { label: B.intl.string(B.t.y0WGqP), value: null != t ? `${t}` : "", Icon: eH.C });
    },
    ty = () => B.intl.string(B.t.wmcDyu);
function tL() {
    let { immediateDelivery: e } = (0, tu.U)(),
        t = ty();
    return (0, i.jsx)(ta._P, {
        variant: { type: ta.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let tR = (0, d.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsLocations: [],
        analyticsSourceLocation: void 0,
    }),
    tj = {
        CHECKOUT_FLOW: l.C.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [a.pn.REVIEW]: (e) => {
                let { handleClose: t } = e;
                ((e) => {
                    let { handleClose: t } = e,
                        { purchaseState: n } = (0, E.P5)();
                    (0, d.useEffect)(() => {
                        n === tm.h.COMPLETED && t();
                    }, [n, t]);
                })({ handleClose: t });
                let {
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: r,
                        onRedeemVirtualCurrency: s,
                        skuId: a,
                        analyticsLocations: o,
                        analyticsSourceLocation: u,
                    } = (0, d.useContext)(tR),
                    { primaryButtonProps: c, ...C } = ((e) => {
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
                                orbPriceAmount: c,
                                orbBalanceToDisplay: C,
                                onClickCheckout: p,
                                showCollectiblesDiscountWarning: m,
                                errorMessage: T,
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
                                    { setPurchaseState: o } = (0, E.P5)(),
                                    u = (0, tE.gN)(),
                                    c = (0, d.useRef)(u),
                                    { emitOrbCheckoutPaymentFlowEvent: C } = (0, tT.O)({
                                        skuId: t,
                                        orbProductContext: i,
                                        analyticsLocations: r,
                                        analyticsSourceLocation: s,
                                    });
                                (0, z.Ay)(() => {
                                    C(eg.HAw.PAYMENT_FLOW_LOADED);
                                }),
                                    (0, d.useEffect)(() => {
                                        null != l &&
                                            null !== c.current &&
                                            (C(eg.HAw.PAYMENT_FLOW_FAILED, l), (c.current = null));
                                    }, [l, C]);
                                let p = (0, d.useCallback)(() => {
                                        (c.current = u),
                                            C(eg.HAw.PAYMENT_FLOW_COMPLETED),
                                            n(() => {
                                                o(tm.h.COMPLETED), C(eg.HAw.PAYMENT_FLOW_SUCCEEDED);
                                            });
                                    }, [n, o, u, C]),
                                    m = c.current ?? u,
                                    T = null != i ? i.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == i,
                                    showCollectiblesDiscountWarning: (0, eE.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, d.useMemo)(
                                        () =>
                                            null == l
                                                ? null
                                                : l.code === tp.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                  ? B.intl.string(B.t.keFvXM)
                                                  : l.code === tp.tG.ALREADY_PURCHASED
                                                    ? B.intl.string(B.t.m371Mx)
                                                    : B.intl.string(B.t.fqJZ11),
                                        [l],
                                    ),
                                    orbPriceAmount: T,
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
                            _ = (0, V.bG)([eU.A], () => eU.A.get(t), [t]),
                            A = (0, to.u)(_?.applicationId),
                            {
                                disabled: O,
                                tooltipText: h,
                                text: S,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: i, tooltipText: r } = (0, d.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: B.intl.string(B.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: B.intl.string(B.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: i, tooltipText: r, text: ty() };
                            })({ orbBalance: C, orbPriceAmount: c, isInTestMode: A }),
                            I = (0, d.useMemo)(
                                () => ({ onClick: p, loading: s, text: S, disabled: O, tooltipText: h }),
                                [p, s, S, O, h],
                            ),
                            x = m ? B.intl.format(B.t.fsOXXO, {}) : null,
                            f = A ? B.intl.string(B.t.OvMyMd) : null;
                        return {
                            isStepLoading: u,
                            upperInlineNoticeProps: (0, d.useMemo)(() => {
                                if (null != f || null != x || null != T) {
                                    let e = [];
                                    return (
                                        null != f &&
                                            e.push({ type: "warning", message: f, key: "test-mode-warning-notice" }),
                                        null != x &&
                                            e.push({ type: "warning", message: x, key: "orb-checkout-warning-notice" }),
                                        null != T &&
                                            e.push({ type: "critical", message: T, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [f, x, T]),
                            purchaseItemContent: (0, i.jsx)(tP, { skuId: t, orbPriceAmount: c }),
                            paymentSelectContent: (0, i.jsx)(tN, { orbBalance: C }),
                            legalContent: (0, i.jsx)(tL, {}),
                            primaryButtonProps: I,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: a,
                        analyticsLocations: o,
                        analyticsSourceLocation: u,
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: r,
                        onRedeemVirtualCurrency: s,
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(w.dZ, { children: (0, i.jsx)(tr.T, { ...C }) }),
                        (0, i.jsx)(w.UX, { children: (0, i.jsx)(ts.lo, { primaryButtonProps: c }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesPaymentContext: !1,
            CustomTenantProvider: (e) => {
                let {
                        skuId: t,
                        analyticsLocations: n,
                        loadId: l,
                        analyticsSourceLocation: r,
                        renderModalProps: s,
                        additionalOptions: a,
                        children: o,
                    } = e,
                    {
                        orbProductContext: u,
                        isRedeeming: c,
                        orbRedemptionError: C,
                        onRedeemVirtualCurrency: p,
                    } = ((e) => {
                        let { skuId: t, loadId: n, analyticsLocations: l, onCheckoutSuccess: i } = e,
                            r = (0, V.bG)([es.default], () => ea.Ay.canUseShopDiscounts(es.default.getCurrentUser())),
                            s = (0, V.bG)([eU.A], () => eU.A.get(t), [t]),
                            a = (0, e1.JL)({ sku: s }),
                            { product: o } = (0, eo.q)(t),
                            u = (0, d.useMemo)(() => {
                                if (null != a) return { orbPriceAmount: a.amount };
                                if (null != o) {
                                    let e = (0, tc.CW)({ product: o, hasShopDiscount: r });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [a, o, r]);
                        u?.orbPriceAmount == null &&
                            (0, td.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: c,
                                isSubmitting: C,
                                error: p,
                            } = (0, tC.Q)({ skuId: t, loadId: n }),
                            m = (0, d.useCallback)(
                                (e) => {
                                    c(t, n, (n) => {
                                        i({ entitlements: n, skuId: t }), e();
                                    });
                                },
                                [t, n, c, i],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            analyticsLocations: l ?? [],
                            orbProductContext: u,
                            onRedeemVirtualCurrency: m,
                            isRedeeming: C,
                            orbRedemptionError: p,
                        };
                    })({
                        skuId: t,
                        loadId: l,
                        onCheckoutSuccess: (0, d.useMemo)(
                            () => (null != a && null != a.onCheckoutSuccess ? a.onCheckoutSuccess : () => {}),
                            [a],
                        ),
                        analyticsLocations: n,
                    }),
                    m = ((e) => {
                        let {
                                skuId: t,
                                analyticsLocations: n,
                                analyticsSourceLocation: l,
                                orbProductContext: i,
                                onClose: r,
                            } = e,
                            { emitOrbCheckoutPaymentFlowEvent: s } = (0, tT.O)({
                                skuId: t,
                                orbProductContext: i,
                                analyticsLocations: n,
                                analyticsSourceLocation: l,
                            });
                        return {
                            analyticsDataOverride: (0, d.useMemo)(() => {
                                if (null != i)
                                    return {
                                        price: i.orbPriceAmount ?? void 0,
                                        regular_price: i.orbPriceAmount ?? void 0,
                                        currency: eg.Yri.DISCORD_ORB,
                                    };
                            }, [i]),
                            onClose: (0, d.useCallback)(
                                async (e) => {
                                    e || s(eg.HAw.PAYMENT_FLOW_CANCELED), await r();
                                },
                                [r, s],
                            ),
                        };
                    })({
                        onClose: s.onClose,
                        skuId: t,
                        analyticsLocations: n,
                        analyticsSourceLocation: r,
                        orbProductContext: u,
                    }),
                    E = (0, d.useMemo)(
                        () => ({
                            orbProductContext: u,
                            isRedeeming: c,
                            orbRedemptionError: C,
                            onRedeemVirtualCurrency: p,
                            skuId: t,
                            analyticsLocations: n,
                            analyticsSourceLocation: r,
                        }),
                        [u, c, C, p, t, n, r],
                    );
                return (0, i.jsx)(tR.Provider, {
                    value: E,
                    children: (0, i.jsx)(tB.g, { customPaymentModalProps: m, children: o }),
                });
            },
        },
    },
    tv = {
        [l.C.ORB_CHECKOUT]: {
            flowType: l.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: eg.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tj,
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            flowType: l.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: eg.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eM,
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: l.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: eg.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ti,
        },
        [l.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_CHECKOUT },
        [l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_APPS_OTP_CHECKOUT },
        [l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [l.C.GUILD_PRODUCT_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_PRODUCT_CHECKOUT },
        [l.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_ROLE_CHECKOUT },
        [l.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_BOOST_CHECKOUT },
    };
var tM = n(735305),
    tk = n(295405);
let tU = (e) => {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        r = d.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(tk.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, i.jsx)(tM.x, { ...l, onReturn: r });
};
var tF = n(545075);
let tD = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, d.useRef)(!1),
            { blockedPayments: r } = (0, E.P5)(),
            { handleStepChange: s } = t;
        return ((0, d.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(tF.oO, {})
            : null;
    },
    tb = {
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
class tH {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = tv[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = tb[e]);
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
              ? { key: null, renderStep: (e) => (0, i.jsx)(tD, { paymentModalStepProps: e, defaultStep: a.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, i.jsx)(o.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== l.C.ORB_CHECKOUT)
            return {
                key: a.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, i.jsx)(tU, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => B.intl.string(B.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(a.pn.REVIEW);
        return {
            key: a.pn.REVIEW,
            renderStep: (t) => (0, i.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => B.intl.string(B.t.QBnNHq) },
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
            ? (0, c.P)(e)
            : this.checkoutFlow === l.C.COLLECTIBLES_CHECKOUT
              ? eg.FYj
              : void 0;
    }
    openCheckoutModal(e) {
        let {
                openModalOptions: t,
                additionalOptions: l,
                giftContextProps: a,
                onComplete: o,
                onClose: u,
                skuId: c,
                loadId: d,
                discoverySessionId: C,
                applicationId: p,
                analyticsSourceLocation: m,
                analyticsLocations: E,
            } = e,
            T = d ?? (0, r.A)(),
            { modalKey: _ } = t,
            A = this.generateRenderHeader(),
            O = p ?? this.getApplicationIdFor1PShopSKU(c),
            h = !1;
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
                            null != o && o(e), (h = !0);
                        },
                        onClose: u,
                        renderHeader: A,
                        skuId: c,
                        loadId: T,
                        discoverySessionId: C,
                        applicationId: O,
                        analyticsLocations: E,
                        analyticsSourceLocation: m,
                        renderModalProps: n,
                        giftContextProps: a,
                        additionalOptions: l,
                    });
            },
            {
                ...t,
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(h, T), (0, s.closeModal)(_);
                },
                modalKey: _,
            },
        );
    }
}
n(584160);
var tw = n(981036),
    tG = n(367644);
let tK = (e) => {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: r,
            renderLeftColumn: s,
            renderRightColumn: o,
            primaryCTAButtonProps: u,
            onBackClick: c,
        } = e,
        { hasPaymentSources: C } = (0, E.P5)(),
        p = C ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS,
        m = d.useCallback(() => t(p), [t, p]),
        T = d.useMemo(
            () =>
                n === l.X.CUSTOM_STEP_BODY
                    ? r()
                    : n === l.X.TWO_COLUMN
                      ? (0, i.jsxs)("div", { className: tG.D, children: [s(), o()] })
                      : null,
            [n, r, s, o],
        ),
        _ = d.useMemo(() => ({ ...u, onClick: m, text: B.intl.string(B.t.XiOHRX) }), [u, m]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(w.dZ, { children: T }),
            (0, i.jsx)(w.UX, { children: (0, i.jsx)(tw.cy, { onBackClick: c, primaryCTAButtonProps: _ }) }),
        ],
    });
};
var tB = n(551892);
let tW = null,
    tY = null,
    tV = null;
function tZ() {
    return null == tW && (tW = new tH({ checkoutFlow: l.C.ORB_CHECKOUT })), tW;
}
function tz() {
    return null == tY && (tY = new tH({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), tY;
}
function tX() {
    return null == tV && (tV = new tH({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), tV;
}
l.C.ORB_CHECKOUT, l.C.COLLECTIBLES_CHECKOUT, l.C.SLAYER_STOREFRONT_CHECKOUT;
