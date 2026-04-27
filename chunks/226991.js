n.d(t, { Tt: () => tX, KY: () => t0, CL: () => l.C, Tx: () => t$ });
var l = n(285871);
n(321073);
var r = n(627968),
    i = n(132500),
    a = n(192308),
    s = n(166532),
    o = n(546042),
    u = n(939220),
    d = n(310829),
    c = n(945477),
    C = n(64700),
    p = n(20742),
    m = n(688810),
    h = n(736843),
    _ = n(937008),
    E = n(156312),
    A = n(503698),
    g = n.n(A),
    f = n(106778),
    T = n(228366),
    S = n(793574),
    I = n(213530),
    x = n(158216),
    O = n(758836),
    y = n(483764);
let R = { sliderBodyClassName: y.Bz },
    N = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: i } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.Fk, { ref: n, className: y.Lb, environment: t.current }),
                (0, r.jsx)(I.K, { options: l, className: g()(y.Oh, { [y.R]: !i }) }),
            ],
        });
    };
var P = n(284009),
    b = n.n(P),
    L = n(702841),
    v = n(775602),
    U = n(427675),
    k = n(94420),
    j = n(590180),
    M = n(953150),
    F = n(524246),
    w = n(14368),
    D = n(61750),
    H = n(972607),
    B = n(482132),
    V = n(921925),
    G = n(788868),
    K = n(985018);
function Y(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        l = (0, k.t4)((e) => e.selectedSkuId),
        {
            application: i,
            paymentError: a,
            purchaseError: s,
            purchasePreviewError: o,
            appliedUserDiscounts: u,
        } = (0, E.P5)(),
        d = (0, U.gU)(),
        c = (0, L.bG)([j.A], () => j.A.getProduct(l)),
        p = C.useRef(!1);
    b()(null != l, "Expected selectedSkuId"), b()(null != i, "Expected application");
    let m = d[l];
    b()(null != m, "Expected sku");
    let h = null != a || null != s || null != o,
        _ =
            u.length > 0
                ? K.intl.formatToPlainString(K.t.VuV3Td, { discountOfferAmount: u[0].discount.amount })
                : void 0;
    return (C.useEffect(() => {
        null == c ||
            h ||
            p.current ||
            ((p.current = !0),
            (0, D.A)({
                product: c,
                overrideTitle: _,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: O.gs.FIAT,
            }));
    }, [c, n, t, h, _]),
    h)
        ? (0, r.jsx)(B.dZ, { children: (0, r.jsx)(V.A, {}) })
        : null;
}
function W(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: i,
            giftRecipient: a,
            giftMessageError: s,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, _.Pv)(),
        d = (0, L.bG)([v.A], () => v.A.useReducedMotion),
        c = C.useRef(null),
        p = (0, k.t4)((e) => e.selectedSkuId),
        m = (0, L.bG)([j.A], () => j.A.getProduct(p)),
        { confettiColors: h } = (0, M.A)(m?.styles);
    return (
        C.useEffect(() => {
            t &&
                null != a &&
                null != p &&
                (u === G.vQ.USER_PROFILE_WISHLIST || u === G.vQ.DM_CHANNEL_WISHLIST) &&
                T.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: p, recipientId: a.id });
        }, [t, a, p, u]),
        t
            ? (0, r.jsxs)("div", {
                  ref: c,
                  children: [
                      (0, r.jsx)(H.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: l,
                          hasSentMessage: i,
                          giftRecipient: a,
                          giftMessageError: s,
                          isSendingMessage: o,
                      }),
                      !e.hideConfetti &&
                          !d &&
                          (0, r.jsx)(F.A, {
                              confettiTarget: c.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, w.rA)(m?.categorySkuId),
                              colors: h?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(Y, { ...e })
    );
}
var z = n(17928),
    Z = n(123292),
    q = n(964486),
    Q = n(693477),
    J = n(993408),
    X = n(575593),
    $ = n(452027),
    ee = n(922016),
    et = n(778712),
    en = n(939249),
    el = n(834730),
    er = n(534514),
    ei = n(986687),
    ea = n(576622),
    es = n(287809),
    eo = n(927578),
    eu = n(674658),
    ed = n(898461),
    ec = n(203632),
    eC = n(536572),
    ep = n(14702),
    em = n(219103),
    eh = n(525723),
    e_ = n(780651);
let eE = (e) => {
    let {
            skuId: t,
            isSelected: n,
            priceAmount: l,
            priceCurrency: i,
            onSelect: a,
            shouldDisplayHeader: s = !1,
            className: o,
            previewHeaderClassName: u,
            hideProfilePreview: d = !1,
        } = e,
        { product: c } = (0, eu.q)(t, !0),
        { giftRecipient: p, giftRecipientError: m } = (0, _.Pv)(),
        h = (0, z.bG)([es.default], () => es.default.getCurrentUser()),
        E = (0, eC.VG)(c),
        A = C.useRef(null),
        f = eo.Ay.canUseCollectibles(h),
        T = C.useMemo(() => (0, J.fT)(c, f), [c, f]),
        S = (0, eh.V_)(c);
    if (null == c) return null;
    let [I] = c.items;
    b()(null != I, "Product item should not be empty");
    let x = null != p && p.id !== h?.id && c.type !== X.R.BUNDLE && I.type !== X.R.NAMEPLATE && !d;
    return (0, r.jsxs)("div", {
        className: o,
        children: [
            s &&
                (0, r.jsx)("div", {
                    className: g()(e_.QU, u),
                    children: (0, r.jsx)($.D, {
                        label: K.intl.string(K.t.PpoJzt),
                        children:
                            x &&
                            (0, r.jsx)(
                                ee.Y,
                                {
                                    targetElementRef: A,
                                    preload: () => (0, ea.A)(p.id, p.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(ei.A, {
                                            ...e,
                                            user: p,
                                            pendingAvatar: p.getAvatarURL(null, (0, et.FT)(et._3.SIZE_80)),
                                            pendingAvatarDecoration: (0, ed.T)(I) ? I : null,
                                            pendingProfileEffect: (0, ec.C3)(I) ? I : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0,
                                            hideExampleButton: !0,
                                        }),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, r.jsx)(en.D, {
                                            ...e,
                                            className: e_.Nx,
                                            innerRef: A,
                                            children: (0, r.jsx)(el.E, {
                                                variant: "text-xs/medium",
                                                color: "text-link",
                                                children: K.intl.string(K.t["2GnJQL"]),
                                            }),
                                        }),
                                },
                                p.id,
                            ),
                    }),
                }),
            (0, r.jsxs)(en.D, {
                tag: "div",
                onClick: () => {
                    null != t && null != a && a(t);
                },
                className: g()(e_.i1, { [e_.no]: n && null == m, [e_.cN]: n && null != m }),
                children: [
                    (0, r.jsxs)("div", {
                        className: e_.Ug,
                        children: [
                            (0, r.jsx)(ep.O, { product: c }),
                            (0, r.jsxs)("div", {
                                className: e_.JZ,
                                children: [
                                    (0, r.jsx)(el.E, { variant: "text-md/semibold", children: E }),
                                    (0, r.jsx)(er.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: (() => {
                                            if (c?.type === X.R.BUNDLE) return null;
                                            switch (I.type) {
                                                case X.R.AVATAR_DECORATION:
                                                    return K.intl.string(K.t["7v0T9P"]);
                                                case X.R.PROFILE_EFFECT:
                                                    return K.intl.string(K.t.wR5wOo);
                                                case X.R.PROFILE_FRAME:
                                                    return K.intl.string(K.t.GWrZOd);
                                                case X.R.NAMEPLATE:
                                                    return K.intl.string(K.t.x5CoXR);
                                                default:
                                                    return null;
                                            }
                                        })(),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(em.x, {
                                priceAmount: l,
                                priceCurrency: i,
                                discount: T,
                                discountOfferAmount: S,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    n &&
                        null != m &&
                        (0, r.jsx)("div", {
                            className: e_.Wh,
                            children: (0, r.jsx)(el.E, {
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
var eA = n(734925),
    eg = n(687033),
    ef = n(871181),
    eT = n(318007),
    eS = n(285719),
    eI = n(976860),
    ex = n(954571),
    eO = n(652215),
    ey = n(353791);
function eR(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, m.Ay)(S.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(Z.Q, {
        text: K.intl.string(K.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, Q.Cz)({ analyticsLocations: l, analyticsSource: S.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, eI.pX)(`${eO.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var eN = n(818348);
let eP = (0, C.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    eb = () => (0, C.useContext)(eP),
    eL = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: l } = eb();
        return (0, r.jsx)(W, { analyticsLocations: t, hideConfetti: n, confettiCanvas: l, ...e });
    },
    ev = (0, h.Mz)(),
    eU = {
        [s.pn.GIFT_CUSTOMIZATION]: () => K.intl.string(K.t["JCFN/y"]),
        [s.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => K.intl.string(K.t.lDbi6H),
        [s.pn.CONFIRM]: () => "",
    },
    ek = (e) => {
        let { step: t } = e,
            n = eU[t];
        return null == n ? null : (0, r.jsx)(p.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    ej = {
        CustomPaymentContextProvider: (e) => {
            let { skuId: t, analyticsLocations: n, children: l, ...i } = e,
                {
                    environment: a,
                    confettiCanvas: s,
                    setConfettiCanvas: o,
                    customConfettiVisible: u,
                    setCustomConfettiVisible: d,
                    customConfettiDisplayOptions: c,
                    hideConfirmStepConfetti: p,
                } = ((e) => {
                    let { skuId: t } = e,
                        n = C.useRef(new f.OH()),
                        [l, r] = C.useState(null),
                        [i, a] = C.useState(!1),
                        s = C.useMemo(() => (0, x.AB)({ purchaseType: O.gs.FIAT, skuId: t }), [t]);
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
                { analyticsLocations: h } = ((e) => {
                    let { analyticsLocations: t } = e,
                        { analyticsLocations: n } = (0, m.Ay)([...t, S.A.COLLECTIBLES_PAYMENT_MODAL]);
                    return { analyticsLocations: n };
                })({ analyticsLocations: n ?? [] }),
                _ = ((e) => {
                    let { skuId: t } = e;
                    return null != t ? [t] : [];
                })({ skuId: t }),
                A = (0, C.useMemo)(
                    () => ({
                        analyticsLocations: h,
                        skuIDs: _,
                        setCustomConfettiVisible: d,
                        hideConfirmStepConfetti: p,
                        confettiCanvas: s,
                    }),
                    [h, _, d, p, s],
                );
            return (0, r.jsxs)(m.f5, {
                value: h,
                children: [
                    (0, r.jsx)(N, {
                        environment: a,
                        setConfettiCanvas: o,
                        customConfettiDisplayOptions: c,
                        customConfettiVisible: u,
                    }),
                    (0, r.jsx)(E.PaymentContextProvider, {
                        ...i,
                        skuIDs: _,
                        stepConfigs: i.stepConfigs,
                        activeSubscription: null,
                        purchaseType: eN.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, r.jsx)(eP.Provider, { value: A, children: l }),
                    }),
                ],
            });
        },
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsSourceLocation: l,
                    renderModalProps: i,
                    onClose: a,
                    onComplete: s,
                    flowSpecificOptions: o,
                    children: u,
                } = e,
                d = i.onClose,
                { skuIDs: c, setCustomConfettiVisible: p, analyticsLocations: m } = eb(),
                {
                    paymentModalSkuId: h,
                    paymentModalOnClose: _,
                    paymentModalOnComplete: E,
                } = ((e) => {
                    let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: r } = e,
                        i = t[0] ?? null,
                        a = C.useCallback(() => {
                            r(!0), l?.();
                        }, [l, r]);
                    return {
                        paymentModalSkuId: i,
                        paymentModalOnClose: C.useCallback(
                            (e) => {
                                r(!1), n(e), T.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                            },
                            [n, r],
                        ),
                        paymentModalOnComplete: a,
                    };
                })({
                    onClose: (e) => {
                        d(), a?.(e);
                    },
                    onComplete: s,
                    skuIDs: c,
                    setCustomConfettiVisible: p,
                }),
                A = (0, C.useMemo)(
                    () => ({
                        loadId: n,
                        skuId: t,
                        analyticsLocations: m,
                        analyticsSourceLocation: l,
                        flowSpecificOptions: o,
                    }),
                    [n, t, m, l, o],
                ),
                g = (0, C.useMemo)(
                    () => ({
                        skuId: h,
                        onClose: _,
                        onComplete: E,
                        applicationId: eO.FYj,
                        initialPlanId: null,
                        analyticsLocations: m,
                        onStepChange: o.onStepChange,
                        hideShadow: !0,
                        transitionState: i.transitionState,
                        returnRef: i.returnRef,
                    }),
                    [h, _, E, m, o.onStepChange, i.transitionState, i.returnRef],
                );
            return (0, r.jsx)(ev.Provider, {
                value: { sharedCheckoutContext: A, paymentModalProps: g, renderModalProps: i },
                children: u,
            });
        },
        UnifiedCheckoutCustomHeader: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, _.Pv)();
            return n ? (0, r.jsx)(ek, { step: t }) : null;
        },
        UnifiedCheckoutStepDefinitions: {
            [s.pn.GIFT_CUSTOMIZATION]: {
                StepController: (e) => {
                    let { renderStep: t, paymentModalStepProps: n } = e,
                        { handleStepChange: l, handleClose: i } = n,
                        {
                            renderLeftColumn: a,
                            renderRightColumn: s,
                            ctaDisabled: o,
                            loading: u,
                        } = ((e) => {
                            let { handleStepChange: t, handleClose: n } = e,
                                {
                                    customGiftMessage: l = "",
                                    setCustomGiftMessage: i,
                                    giftRecipientError: a,
                                    setGiftRecipientError: s,
                                    validatingGiftRecipient: o,
                                    giftRecipient: u,
                                    giftingOrigin: d,
                                    setValidatingGiftRecipient: c,
                                } = (0, _.Pv)(),
                                C = (0, k.t4)((e) => e.selectedSkuId),
                                { paymentSourceId: p } = (0, E.P5)(),
                                m = (0, U.Hf)(),
                                h = (0, U.RR)(),
                                A = (0, U.gU)(),
                                g = (0, z.bG)([es.default], () => es.default.getCurrentUser()),
                                f = (0, eg.A)(),
                                T = async (e, t) => {
                                    c(!0),
                                        null != a && s(),
                                        (await (0, Q.JJ)(e.id, t)) || s(K.intl.string(K.t["4kgVqQ"])),
                                        c(!1);
                                };
                            (0, q.Ay)(() => {
                                null != C &&
                                    null != u &&
                                    (d !== G.vQ.DM_CHANNEL_WISHLIST &&
                                        ex.default.track(eO.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                    T(u, C));
                            });
                            let S = () =>
                                (0, r.jsx)(ef.A, {
                                    onTextChange: (e) => i?.(e),
                                    pendingText: l,
                                    currentText: l,
                                    disableThemedBackground: !0,
                                    className: ey.iX,
                                    innerClassName: ey.pt,
                                });
                            return {
                                renderLeftColumn: () =>
                                    (0, r.jsx)("div", {
                                        className: ey.qL,
                                        children: (0, r.jsx)(eT.t, { isShopGift: !0 }),
                                    }),
                                renderRightColumn: () => {
                                    let e = (0, J.pA)({
                                        selectedSkuPricePreview: m,
                                        paymentSourceId: p,
                                        selectedSkuId: C,
                                        skuPricePreviewsById: h,
                                        skusById: A,
                                    });
                                    return d === G.vQ.USER_PROFILE_WISHLIST || d === G.vQ.DM_CHANNEL_WISHLIST
                                        ? (0, r.jsxs)("div", {
                                              children: [
                                                  (0, r.jsx)(eS.Z, { giftRecipient: u }),
                                                  S(),
                                                  null != e &&
                                                      null != C &&
                                                      (0, r.jsx)(eE, {
                                                          skuId: C,
                                                          priceAmount: e.amount,
                                                          priceCurrency: e.currency,
                                                          className: ey.uW,
                                                          previewHeaderClassName: ey.vX,
                                                          isSelected: !0,
                                                          shouldDisplayHeader: !0,
                                                          hideProfilePreview: !0,
                                                      }),
                                                  (0, r.jsx)("div", {
                                                      className: ey.fi,
                                                      children: (0, r.jsx)(eR, { handleClose: n, selectedSkuId: C }),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsxs)("div", {
                                              children: [
                                                  (0, r.jsx)(eA.A, {
                                                      selectedSkuId: C,
                                                      recipients: f,
                                                      className: ey.uh,
                                                      validateSelectedGift: T,
                                                  }),
                                                  S(),
                                                  null != e &&
                                                      null != C &&
                                                      (0, r.jsx)(eE, {
                                                          skuId: C,
                                                          priceAmount: e.amount,
                                                          priceCurrency: e.currency,
                                                          className: ey.Ng,
                                                          isSelected: !0,
                                                          shouldDisplayHeader: !0,
                                                      }),
                                              ],
                                          });
                                },
                                onStepChange: t,
                                onBackClick: n,
                                ctaDisabled: null != a || null == u || u.id === g?.id || l.length > G.Jo,
                                loading: o,
                            };
                        })({ handleStepChange: l, handleClose: i });
                    return t({
                        paymentModalStepProps: n,
                        unifiedStepProps: {
                            layout: "two-column",
                            renderLeftColumn: a,
                            renderRightColumn: s,
                            primaryCTAButtonProps: { loading: u, disabled: o },
                        },
                    });
                },
            },
            [s.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eL, { ...e }), options: R },
    };
var eM = n(429913),
    eF = n(67480),
    ew = n(328968),
    eD = n(733391),
    eH = n(821609),
    eB = n(318254),
    eV = n(262427),
    eG = n(510022),
    eK = n(317560),
    eY = n(366523),
    eW = n(208733);
function ez(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, m.Ay)(),
        { selectedSkuId: l, entitlementsGranted: i } = (0, k.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, E.P5)(),
        s = (0, U.gU)(),
        { isGift: o, giftRecipient: u } = (0, _.Pv)();
    b()(null != l, "Expected selectedSkuId"), b()(null != a, "Expected application");
    let d = s[l];
    b()(null != d, "Expected sku");
    let c = i.find((e) => e.sku_id === l),
        p = c?.metadata?.orbs_reward;
    if (
        (C.useEffect(() => {
            o || ((0, eK.j)(), t(), (0, eG.n)({ sku: d, application: a, analyticsLocations: n, orbsReward: p }));
        }, [o, d, a, t, n, p]),
        !o)
    )
        return null;
    let h = null != p && p > 0;
    return (0, r.jsxs)(B.dZ, {
        children: [
            (0, r.jsx)(V.A, {}),
            (0, r.jsxs)("div", {
                className: eW.EL,
                children: [
                    (0, r.jsx)(eY.e, { sku: d, shape: "square", containerClassName: eW.LC }),
                    (0, r.jsx)(er.D, {
                        variant: "heading-xl/semibold",
                        className: eW.RS,
                        children: K.intl.string(K.t["5glWta"]),
                    }),
                    (0, r.jsx)(el.E, {
                        variant: "text-md/normal",
                        children: K.intl.formatToPlainString(K.t["2VjPTw"], {
                            itemName: d.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    h &&
                        (0, r.jsx)("div", {
                            className: eW.Is,
                            children: (0, r.jsx)(eV.J, {
                                Icon: eB.C,
                                text: K.intl.format(K.t["ZV+aS9"], { orbCount: p }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: eW.UD,
                        children: (0, r.jsx)(eH.$, { onClick: t, text: K.intl.string(K.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var eZ = n(889137),
    eq = n(735438),
    eQ = n.n(eq),
    eJ = n(742158),
    eX = n(683071),
    e$ = n(313961),
    e0 = n(765441),
    e1 = n(238017),
    e8 = n(650588),
    e2 = n(723090),
    e5 = n(763827),
    e6 = n(403362),
    e7 = n(871123),
    e3 = n(832163),
    e4 = n(44724),
    e9 = n(980094),
    te = n(627363),
    tt = n(587895),
    tn = n(71393),
    tl = n(806931),
    tr = n(107610);
function ti(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        i = C.useCallback(() => {
            (0, e4.X)({ guildId: n.id });
        }, [n.id]),
        s = C.useCallback(() => {
            t();
            let e = e3.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(eO.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, l.id)) ||
                ((0, a.closeAllModals)(),
                (0, e4.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: l.id, slug: l.slug }));
        }, [n.id, l.id, l.slug, t]);
    return (0, r.jsx)("div", {
        className: tr.$O,
        children: (0, r.jsx)(Z.Q, {
            text: K.intl.string(K.t.ImioFL),
            onMouseDown: i,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let ta = (0, h.Mz)(),
    ts = {
        CustomPaymentContextProvider: (e) => {
            let {
                    children: t,
                    discoverySessionId: n,
                    loadId: l,
                    applicationId: i,
                    isGift: a,
                    skuId: s,
                    analyticsLocations: o = [],
                    ...u
                } = e,
                { analyticsLocations: d } = ((e) => {
                    let { applicationId: t, skuId: n, analyticsLocations: l } = e,
                        { analyticsLocations: r } = (0, m.Ay)(l, S.A.SLAYER_STOREFRONT_PAYMENT_MODAL),
                        i = (0, eM.h)(t);
                    return (
                        C.useEffect(() => {
                            null == i ||
                                null == i.guildId ||
                                null == n ||
                                ew.A.isFetchingForSKU(n) ||
                                null != eF.A.get(n) ||
                                (0, eD.qf)(i.guildId, n);
                        }, [i, n]),
                        { analyticsLocations: r }
                    );
                })({ applicationId: i, skuId: s, analyticsLocations: o, ...u });
            return (0, r.jsx)(m.f5, {
                value: d,
                children: (0, r.jsx)(E.PaymentContextProvider, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: i,
                    skuIDs: null != s ? [s] : [],
                    purchaseType: eN.VV.ONE_TIME,
                    isGift: a,
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
                    analyticsSourceLocation: i,
                    renderModalProps: a,
                    onClose: s,
                    onComplete: o,
                    flowSpecificOptions: u,
                    children: d,
                } = e,
                { analyticsLocations: c } = (0, m.Ay)(),
                p = a.onClose,
                h = C.useCallback(
                    (e) => {
                        p(), null != s && s(e);
                    },
                    [p, s],
                ),
                _ = C.useMemo(
                    () => ({
                        onClose: h,
                        onComplete: o,
                        applicationId: l,
                        skuId: t,
                        initialPlanId: null,
                        analyticsObject: i,
                        analyticsLocations: c,
                    }),
                    [h, o, l, t, i, c],
                ),
                E = C.useMemo(
                    () => ({ skuId: t, loadId: n, applicationId: l, flowSpecificOptions: u, analyticsLocations: c }),
                    [t, n, l, u, c],
                ),
                A = C.useMemo(
                    () => ({ sharedCheckoutContext: E, paymentModalProps: _, renderModalProps: a }),
                    [E, _, a],
                );
            return (0, r.jsx)(ta.Provider, { value: A, children: d });
        },
        UnifiedCheckoutCustomHeader: function (e) {
            let { step: t } = e,
                n = (0, eZ.YW)(t)
                    .with(s.pn.GIFT_CUSTOMIZATION, () => K.intl.string(K.t["JCFN/y"]))
                    .with(s.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => K.intl.string(K.t.lDbi6H))
                    .with(s.pn.CONFIRM, () => "")
                    .otherwise(() => null);
            return null == n ? null : (0, r.jsx)(p.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
        },
        UnifiedCheckoutStepDefinitions: {
            [s.pn.GIFT_CUSTOMIZATION]: {
                StepController: (e) => {
                    let { renderStep: t, paymentModalStepProps: n } = e,
                        { handleStepChange: l, handleClose: i } = n,
                        { renderStepBody: a, disabled: s } = ((e) => {
                            var t;
                            let n,
                                l,
                                i,
                                { handleStepChange: a, handleClose: s } = e,
                                {
                                    customGiftMessage: o = "",
                                    setCustomGiftMessage: u,
                                    giftRecipient: d,
                                    emojiConfetti: c,
                                    soundEffect: p,
                                    setEmojiConfetti: m,
                                    setSoundEffect: h,
                                    giftingOrigin: A,
                                    additionalUserIds: g,
                                } = (0, _.Pv)(),
                                f = (0, k.t4)((e) => e.selectedSkuId),
                                { application: T } = (0, E.P5)(),
                                S = (0, z.bG)([es.default], () => es.default.getCurrentUser()),
                                I =
                                    ((t = S?.id),
                                    (n = (0, e0.A)()),
                                    (l = (function (e) {
                                        let t = (0, z.bG)([e5.A], () =>
                                                e5.A.isConnected() ? e5.A.getChannelId() : null,
                                            ),
                                            [n, l] = C.useState([]);
                                        return (
                                            C.useEffect(() => {
                                                let n = null != t ? e$.A.getParticipants(t) : [],
                                                    r = [],
                                                    i = new Set();
                                                for (let t of n)
                                                    (!(0, tl.Xw)(t) && !(0, tl.Ay)(t)) ||
                                                        t.user.id === e ||
                                                        i.has(t.user.id) ||
                                                        (i.add(t.user.id), r.push(t));
                                                r.sort((e, t) =>
                                                    (0, tl.Ay)(e) && !(0, tl.Ay)(t)
                                                        ? -1
                                                        : (0, tl.Ay)(t) && !(0, tl.Ay)(e)
                                                          ? 1
                                                          : 0,
                                                ),
                                                    l(r.map((e) => e.user));
                                            }, [t, e]),
                                            n
                                        );
                                    })(t)),
                                    (i = (0, z.yK)([es.default], () => g?.map(es.default.getUser).filter(e6.Vq) ?? [], [
                                        g,
                                    ])),
                                    C.useMemo(
                                        () =>
                                            eQ().uniqWith(
                                                [...(null != d ? [d] : []), ...i, ...l, ...n],
                                                (e, t) => e.id === t.id,
                                            ),
                                        [d, i, l, n],
                                    )),
                                x = (0, z.bG)([eF.A], () => (null != f ? eF.A.get(f) : null), [f]),
                                { normalPrice: O, discountedPrice: y } = (0, e2.CD)({
                                    sku: x,
                                    priceSetAssignmentPurchaseType: eO.lid.GIFT,
                                }),
                                R = (0, e7.fq)(x),
                                N = (0, e7.xf)(x),
                                P = (function (e) {
                                    let { shouldFetchIfMissing: t } =
                                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = (0, e7.bF)(e),
                                        l = e?.applicationId,
                                        r = (0, z.bG)([tt.A], () => (null != l ? tt.A.getApplication(l) : null), [l]),
                                        i = r?.guildId,
                                        a = (0, z.bG)([tn.A], () => (null != i ? tn.A.getGuild(i) : null), [i]);
                                    return (
                                        C.useEffect(() => {
                                            n &&
                                                t &&
                                                null == a &&
                                                null != e &&
                                                te.Ay.fetchApplication(e.applicationId, !0);
                                        }, [a, e, t, n]),
                                        n ? a : null
                                    );
                                })(x, { shouldFetchIfMissing: !0 }),
                                b = async (e, t) => {},
                                L = (e) => {
                                    null != h && h(null == e ? void 0 : e);
                                },
                                v = () =>
                                    (0, r.jsxs)("div", {
                                        className: tr.mT,
                                        children: [
                                            null != R &&
                                                (0, r.jsx)(eY.A, {
                                                    containerClassName: tr.T3,
                                                    cardImage: R,
                                                    cardBackgroundImage: N,
                                                    altText: x?.name ?? "",
                                                    shape: "square",
                                                }),
                                            (0, r.jsxs)("div", {
                                                className: tr._T,
                                                children: [
                                                    (0, r.jsx)(e8.A, { sound: p, onSelect: L }),
                                                    (0, r.jsx)(e1.A, {
                                                        setEmojiConfetti: m,
                                                        emojiConfetti: null == c ? void 0 : c,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                U = () => {
                                    let e = x?.orbsReward;
                                    return (0, r.jsxs)("div", {
                                        className: tr.Tc,
                                        children: [
                                            null != d &&
                                            (A === G.vQ.USER_PROFILE_WISHLIST || A === G.vQ.DM_CHANNEL_WISHLIST)
                                                ? (0, r.jsx)(eS.Z, { giftRecipient: d })
                                                : (0, r.jsx)(eA.A, {
                                                      selectedSkuId: f,
                                                      validateSelectedGift: b,
                                                      recipients: I,
                                                  }),
                                            (0, r.jsx)(ef.A, {
                                                onTextChange: (e) => u?.(e),
                                                pendingText: o,
                                                currentText: o,
                                                disableThemedBackground: !0,
                                                className: tr.iX,
                                                innerClassName: tr.pt,
                                            }),
                                            null == x
                                                ? null
                                                : (0, r.jsxs)("div", {
                                                      className: tr.AN,
                                                      children: [
                                                          (0, r.jsx)(eJ.z, {
                                                              className: tr.jr,
                                                              children: K.intl.string(K.t.PpoJzt),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: tr.Wx,
                                                              children: [
                                                                  (0, r.jsx)("div", {
                                                                      className: tr.Xb,
                                                                      children:
                                                                          null != x &&
                                                                          null != R &&
                                                                          (0, r.jsx)(eY.A, {
                                                                              containerClassName: tr.Iy,
                                                                              cardImage: R,
                                                                              cardBackgroundImage: N,
                                                                              altText: x.name,
                                                                              shape: "square",
                                                                          }),
                                                                  }),
                                                                  (0, r.jsxs)("div", {
                                                                      className: tr.vz,
                                                                      children: [
                                                                          null != T &&
                                                                              (0, r.jsx)(e9.Q, { application: T }),
                                                                          (0, r.jsx)(el.E, {
                                                                              variant: "text-sm/semibold",
                                                                              children: x.name,
                                                                          }),
                                                                      ],
                                                                  }),
                                                                  (0, r.jsx)(el.E, {
                                                                      variant: "text-md/semibold",
                                                                      children: y ?? O,
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            null != x &&
                                                (0, e7.Ri)(x) &&
                                                (0, r.jsx)(eX.w, { type: "info", children: K.intl.string(K.t.lORYb6) }),
                                            null != e &&
                                                e > 0 &&
                                                (0, r.jsx)(eV.J, {
                                                    Icon: eB.C,
                                                    text: K.intl.format(K.t["ZV+aS9"], { orbCount: e }),
                                                }),
                                            null != P &&
                                                null != x &&
                                                (0, r.jsx)(ti, { handleClose: s, sku: x, guild: P }),
                                        ],
                                    });
                                };
                            return {
                                renderStepBody: () => (0, r.jsxs)("div", { className: tr.Du, children: [v(), U()] }),
                                getLeftColumnComponent: v,
                                getRightColumnComponent: U,
                                onStepChange: a,
                                onBackClick: s,
                                disabled: null == d || d.id === S?.id || o.length > G.Jo,
                            };
                        })({ handleStepChange: l, handleClose: i });
                    return t({
                        paymentModalStepProps: n,
                        unifiedStepProps: C.useMemo(
                            () => ({
                                layout: "custom-step-body",
                                renderStepBody: a,
                                primaryCTAButtonProps: { disabled: s },
                            }),
                            [a, s],
                        ),
                    });
                },
            },
            [s.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(ez, { ...e }) },
    };
var to = n(69882),
    tu = n(169797),
    td = n(93159),
    tc = n(977445),
    tC = n(908419),
    tp = n(623373),
    tm = n(739508),
    th = n(715054);
(0, i.A)();
var t_ = n(136857),
    tE = n(566980),
    tA = n(855104),
    tg = n(373856),
    tf = n(289873),
    tT = n(241989),
    tS = n(132198),
    tI = n(252293),
    tx = n(971875),
    tO = n(319820),
    ty = n(327105),
    tR = n(200766);
let tN = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: i } = (0, tO.AO)({ sku: t }),
            a = (0, tx.oO)(l);
        i ? (a = K.intl.string(ty.default.qwSlCO)) : (0, tp.Ab)(l) && (a = K.intl.string(K.t["0TmQRG"]));
        let s = (0, tx.dL)(t),
            o =
                t.id === O.Dp.FRACTIONAL_PREMIUM
                    ? tS.m[O.Dp.FRACTIONAL_PREMIUM].render({ className: tR.$ })
                    : (0, r.jsx)(tT.WH, { sku: t, product: l });
        return (0, r.jsx)(tT.f7, {
            label: s,
            description: a,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: eB.C,
        });
    },
    tP = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, tI.A)({
            applicationId: (0, d.P)(t),
            skuIDs: [t],
            isGift: !1,
            currentPaymentSourceId: null,
            excludeSKUPurchasePreviews: !0,
        });
        let l = (0, L.bG)([eF.A], () => eF.A.get(t), [t]);
        return null == l
            ? (0, r.jsx)(tf.y, { type: tf.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(tN, { sku: l, orbPriceAmount: n });
    },
    tb = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(td.vW, { label: K.intl.string(K.t.y0WGqP), value: null != t ? `${t}` : "", Icon: eB.C });
    },
    tL = () => K.intl.string(K.t.wmcDyu);
function tv() {
    let { immediateDelivery: e } = (0, tC.U)(),
        t = tL();
    return (0, r.jsx)(td._P, {
        variant: { type: td.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let tU = (0, h.Mz)(),
    tk = (0, C.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    tj = {
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsLocations: l,
                    analyticsSourceLocation: i,
                    renderModalProps: a,
                    flowSpecificOptions: s,
                    children: o,
                } = e,
                { onCheckoutSuccess: u } = s,
                {
                    orbProductContext: d,
                    isRedeeming: c,
                    orbRedemptionError: p,
                    onRedeemVirtualCurrency: m,
                } = ((e) => {
                    let { skuId: t, loadId: n, analyticsLocations: l, onCheckoutSuccess: r } = e,
                        i = (0, z.bG)([es.default], () => eo.Ay.canUseShopDiscounts(es.default.getCurrentUser())),
                        a = (0, z.bG)([eF.A], () => eF.A.get(t), [t]),
                        s = (0, e2.JL)({ sku: a }),
                        { product: o } = (0, eu.q)(t),
                        u = (0, C.useMemo)(() => {
                            if (null != s) return { orbPriceAmount: s.amount };
                            if (null != o) {
                                let e = (0, tp.CW)({ product: o, hasShopDiscount: i });
                                return { orbPriceAmount: null !== e ? e.amount : null };
                            }
                            return null;
                        }, [s, o, i]);
                    u?.orbPriceAmount == null && (0, tm.hD)("Orb price not found for product", { tags: { sku_id: t } });
                    let { redeemVirtualCurrency: d, isSubmitting: c, error: p } = (0, th.Q)({ skuId: t, loadId: n }),
                        m = (0, C.useCallback)(
                            (e) => {
                                d(t, n, (n) => {
                                    r({ entitlements: n, skuId: t }), e();
                                });
                            },
                            [t, n, d, r],
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
                h = ((e) => {
                    let {
                            skuId: t,
                            analyticsLocations: n,
                            analyticsSourceLocation: l,
                            orbProductContext: r,
                            onClose: i,
                        } = e,
                        { emitOrbCheckoutPaymentFlowEvent: a } = (0, tg.O)({
                            skuId: t,
                            orbProductContext: r,
                            analyticsLocations: n,
                            analyticsSourceLocation: l,
                        });
                    return {
                        analyticsDataOverride: (0, C.useMemo)(() => {
                            if (null != r)
                                return {
                                    price: r.orbPriceAmount ?? void 0,
                                    regular_price: r.orbPriceAmount ?? void 0,
                                    currency: eO.Yri.DISCORD_ORB,
                                };
                        }, [r]),
                        onClose: (0, C.useCallback)(
                            async (e) => {
                                e || a(eO.HAw.PAYMENT_FLOW_CANCELED), await i();
                            },
                            [i, a],
                        ),
                    };
                })({
                    onClose: a.onClose,
                    skuId: t,
                    analyticsLocations: l,
                    analyticsSourceLocation: i,
                    orbProductContext: d,
                });
            return (0, r.jsx)(tU.Provider, {
                value: {
                    sharedCheckoutContext: {
                        loadId: n,
                        skuId: t,
                        analyticsLocations: l,
                        analyticsSourceLocation: i,
                        flowSpecificOptions: s,
                    },
                    paymentModalProps: h,
                    renderModalProps: a,
                },
                children: (0, r.jsx)(tk.Provider, {
                    value: { orbProductContext: d, isRedeeming: c, orbRedemptionError: p, onRedeemVirtualCurrency: m },
                    children: o,
                }),
            });
        },
        UnifiedCheckoutStepDefinitions: {
            [s.pn.REVIEW]: {
                StepController: (e) => {
                    let {
                            paymentModalStepProps: t,
                            sharedCheckoutContext: { skuId: n, analyticsLocations: l, analyticsSourceLocation: i },
                        } = e,
                        { handleClose: a } = t;
                    ((e) => {
                        let { handleClose: t } = e,
                            { purchaseState: n } = (0, E.P5)();
                        (0, C.useEffect)(() => {
                            n === tE.h.COMPLETED && t();
                        }, [n, t]);
                    })({ handleClose: a });
                    let {
                            orbProductContext: s,
                            isRedeeming: o,
                            orbRedemptionError: u,
                            onRedeemVirtualCurrency: d,
                        } = (0, C.useContext)(tk),
                        { primaryButtonProps: c, ...p } = ((e) => {
                            let {
                                    skuId: t,
                                    analyticsSourceLocation: n,
                                    analyticsLocations: l,
                                    orbProductContext: i,
                                    isRedeeming: a,
                                    orbRedemptionError: s,
                                    onRedeemVirtualCurrency: o,
                                } = e,
                                {
                                    isStepLoading: u,
                                    orbPriceAmount: d,
                                    orbBalanceToDisplay: c,
                                    onClickCheckout: p,
                                    showCollectiblesDiscountWarning: m,
                                    errorMessage: h,
                                } = ((e) => {
                                    let {
                                            skuId: t,
                                            onRedeemVirtualCurrency: n,
                                            orbRedemptionError: l,
                                            orbProductContext: r,
                                            analyticsLocations: i,
                                            analyticsSourceLocation: a,
                                        } = e,
                                        s = (0, k.t4)((e) => e.selectedSkuId),
                                        { setPurchaseState: o } = (0, E.P5)(),
                                        u = (0, tA.gN)(),
                                        d = (0, C.useRef)(u),
                                        { emitOrbCheckoutPaymentFlowEvent: c } = (0, tg.O)({
                                            skuId: t,
                                            orbProductContext: r,
                                            analyticsLocations: i,
                                            analyticsSourceLocation: a,
                                        });
                                    (0, q.Ay)(() => {
                                        c(eO.HAw.PAYMENT_FLOW_LOADED);
                                    }),
                                        (0, C.useEffect)(() => {
                                            null != l &&
                                                null !== d.current &&
                                                (c(eO.HAw.PAYMENT_FLOW_FAILED, l), (d.current = null));
                                        }, [l, c]);
                                    let p = (0, C.useCallback)(() => {
                                            (d.current = u),
                                                c(eO.HAw.PAYMENT_FLOW_COMPLETED),
                                                n(() => {
                                                    o(tE.h.COMPLETED), c(eO.HAw.PAYMENT_FLOW_SUCCEEDED);
                                                });
                                        }, [n, o, u, c]),
                                        m = d.current ?? u,
                                        h = null != r ? r.orbPriceAmount : null;
                                    return {
                                        isStepLoading: null == r,
                                        showCollectiblesDiscountWarning: (0, eh.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                        errorMessage: (0, C.useMemo)(
                                            () =>
                                                null == l
                                                    ? null
                                                    : l.code === t_.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? K.intl.string(K.t.keFvXM)
                                                      : l.code === t_.tG.ALREADY_PURCHASED
                                                        ? K.intl.string(K.t.m371Mx)
                                                        : K.intl.string(K.t.fqJZ11),
                                            [l],
                                        ),
                                        orbPriceAmount: h,
                                        orbBalanceToDisplay: m,
                                        onClickCheckout: p,
                                        selectedSkuId: s,
                                    };
                                })({
                                    skuId: t,
                                    analyticsSourceLocation: n,
                                    analyticsLocations: l,
                                    orbProductContext: i,
                                    orbRedemptionError: s,
                                    onRedeemVirtualCurrency: o,
                                }),
                                _ = (0, z.bG)([eF.A], () => eF.A.get(t), [t]),
                                A = (0, tc.u)(_?.applicationId),
                                {
                                    disabled: g,
                                    tooltipText: f,
                                    text: T,
                                } = ((e) => {
                                    let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                        { disabled: r, tooltipText: i } = (0, C.useMemo)(
                                            () =>
                                                null == n
                                                    ? { disabled: !0, tooltipText: K.intl.string(K.t["c/rcUu"]) }
                                                    : !l && (null == t || n > t)
                                                      ? { disabled: !0, tooltipText: K.intl.string(K.t.keFvXM) }
                                                      : { disabled: !1, tooltipText: null },
                                            [n, t, l],
                                        );
                                    return { disabled: r, tooltipText: i, text: tL() };
                                })({ orbBalance: c, orbPriceAmount: d, isInTestMode: A }),
                                S = (0, C.useMemo)(
                                    () => ({ onClick: p, loading: a, text: T, disabled: g, tooltipText: f }),
                                    [p, a, T, g, f],
                                ),
                                I = m ? K.intl.format(K.t.fsOXXO, {}) : null,
                                x = A ? K.intl.string(K.t.OvMyMd) : null;
                            return {
                                isStepLoading: u,
                                upperInlineNoticeProps: (0, C.useMemo)(() => {
                                    if (null != x || null != I || null != h) {
                                        let e = [];
                                        return (
                                            null != x &&
                                                e.push({
                                                    type: "warning",
                                                    message: x,
                                                    key: "test-mode-warning-notice",
                                                }),
                                            null != I &&
                                                e.push({
                                                    type: "warning",
                                                    message: I,
                                                    key: "orb-checkout-warning-notice",
                                                }),
                                            null != h &&
                                                e.push({
                                                    type: "critical",
                                                    message: h,
                                                    key: "orb-checkout-error-notice",
                                                }),
                                            e
                                        );
                                    }
                                    return null;
                                }, [x, I, h]),
                                purchaseItemContent: (0, r.jsx)(tP, { skuId: t, orbPriceAmount: d }),
                                paymentSelectContent: (0, r.jsx)(tb, { orbBalance: c }),
                                legalContent: (0, r.jsx)(tv, {}),
                                primaryButtonProps: S,
                                invoiceSummaryContent: null,
                                invoiceTotalDueLabel: null,
                                invoiceTotalDueValue: null,
                            };
                        })({
                            skuId: n,
                            analyticsLocations: l,
                            analyticsSourceLocation: i,
                            orbProductContext: s,
                            isRedeeming: o,
                            orbRedemptionError: u,
                            onRedeemVirtualCurrency: d,
                        });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(B.dZ, { children: (0, r.jsx)(to.T_, { ...p }) }),
                            (0, r.jsx)(B.UX, { children: (0, r.jsx)(tu.lo, { primaryButtonProps: c }) }),
                        ],
                    });
                },
            },
        },
    },
    tM = {
        [l.C.ORB_CHECKOUT]: {
            flowType: l.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: eO.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tj,
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            flowType: l.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: eO.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ej,
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: l.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: eO.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ts,
        },
        [l.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_CHECKOUT },
        [l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_APPS_OTP_CHECKOUT },
        [l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [l.C.GUILD_PRODUCT_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_PRODUCT_CHECKOUT },
        [l.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_ROLE_CHECKOUT },
        [l.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_BOOST_CHECKOUT },
    };
var tF = n(735305),
    tw = n(295405);
let tD = (e) => {
    let { returnStep: t = s.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        i = C.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = s.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(tw.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: s.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, r.jsx)(tF.x, { ...l, onReturn: i });
};
var tH = n(866485),
    tB = n(981036),
    tV = n(367644);
let tG = (e) => {
        let {
                paymentModalStepProps: { handleStepChange: t },
                unifiedStepProps: n,
            } = e,
            {
                layout: l,
                renderStepBody: i,
                renderLeftColumn: a,
                renderRightColumn: o,
                primaryCTAButtonProps: u,
                onBackClick: d,
            } = n,
            { hasPaymentSources: c } = (0, E.P5)(),
            p = c ? s.pn.REVIEW : s.pn.ADD_PAYMENT_STEPS,
            m = C.useCallback(() => t(p), [t, p]),
            h = C.useMemo(
                () =>
                    "custom-step-body" === l
                        ? i()
                        : "two-column" === l
                          ? (0, r.jsxs)("div", { className: tV.D, children: [a(), o()] })
                          : null,
                [l, i, a, o],
            ),
            _ = C.useMemo(() => ({ ...u, onClick: m, text: K.intl.string(K.t.XiOHRX) }), [u, m]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(B.dZ, { children: h }),
                (0, r.jsx)(B.UX, { children: (0, r.jsx)(tB.cy, { onBackClick: d, primaryCTAButtonProps: _ }) }),
            ],
        });
    },
    tK = (0, tH.R)({ step: s.pn.GIFT_CUSTOMIZATION, renderStep: (e) => (0, r.jsx)(tG, { ...e }) });
var tY = n(545075);
let tW = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, C.useRef)(!1),
            { blockedPayments: i } = (0, E.P5)(),
            { handleStepChange: a } = t;
        return ((0, C.useEffect)(() => {
            i || l.current || (a(n), (l.current = !0));
        }, [i, a, n]),
        i)
            ? (0, r.jsx)(tY.oO, {})
            : null;
    },
    tz = {
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
class tZ {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = tM[e];
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
        if (null != e) return (t, n, l) => (0, r.jsx)(e, { plan: t, onClose: n, step: l });
    }
    getPredicateStepConfig() {
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? u.kJ
            : "unified" === e
              ? { key: null, renderStep: (e) => (0, r.jsx)(tW, { paymentModalStepProps: e, defaultStep: s.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, r.jsx)(o.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== l.C.ORB_CHECKOUT)
            return {
                key: s.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(tD, {
                        paymentModalStepProps: e,
                        returnStep: s.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? s.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        return t && n
            ? {
                  key: s.pn.GIFT_CUSTOMIZATION,
                  renderStep: (e) =>
                      (0, r.jsx)(tK, {
                          paymentModalStepProps: e,
                          unifiedStepDefinition: this.getUnifiedStepDefinition(s.pn.GIFT_CUSTOMIZATION),
                      }),
                  options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => K.intl.string(K.t["W685+b"]) },
              }
            : void 0;
    }
    getReviewStepConfig() {
        let e = this.getUnifiedStepDefinition(s.pn.REVIEW);
        return (0, c.B)(e)
            ? u.r2
            : {
                  key: s.pn.REVIEW,
                  renderStep: (t) => (0, r.jsx)(to.Pw, { paymentModalStepProps: t, unifiedStepDefinition: e }),
                  options: { useBreadcrumbLabel: () => K.intl.string(K.t.QBnNHq) },
              };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n } = this.tenantCheckoutFlowConfig,
            { disablePaymentAuthSteps: l } = this.internalCheckoutFlowControls,
            r = this.getPredicateStepConfig(),
            i = this.getGiftCustomizationStepConfig({ isGift: t }),
            a = this.getAddPaymentStepConfig({ isGift: t }),
            o = this.getReviewStepConfig(),
            d = this.createDefinedStepConfigsArray([r, i, a, ...(l ? [] : u.hh), o]);
        return null != n && d.push({ key: s.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), d;
    }
    getApplicationIdFor1PShopSKU(e) {
        return this.checkoutFlow === l.C.ORB_CHECKOUT
            ? (0, d.P)(e)
            : this.checkoutFlow === l.C.COLLECTIBLES_CHECKOUT
              ? eO.FYj
              : void 0;
    }
    openCheckoutModal(e) {
        let {
                openModalOptions: t,
                flowSpecificOptions: l,
                giftContextProps: s,
                onComplete: o,
                onClose: u,
                skuId: d,
                loadId: c,
                discoverySessionId: C,
                applicationId: p,
                analyticsSourceLocation: m,
                analyticsLocations: h,
            } = e,
            _ = c ?? (0, i.A)(),
            { modalKey: E } = t,
            A = this.generateRenderHeader(),
            g = p ?? this.getApplicationIdFor1PShopSKU(d),
            f = !1,
            T = l ?? void 0;
        return (0, a.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: !!(null != s && s.isGift) });
                return (n) =>
                    (0, r.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != o && o(e), (f = !0);
                        },
                        onClose: u,
                        renderHeader: A,
                        skuId: d,
                        loadId: _,
                        discoverySessionId: C,
                        applicationId: g,
                        analyticsLocations: h,
                        analyticsSourceLocation: m,
                        renderModalProps: n,
                        giftContextProps: s,
                        flowSpecificOptions: T,
                    });
            },
            {
                ...t,
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(f, _), (0, a.closeModal)(E);
                },
                modalKey: E,
            },
        );
    }
}
n(584160);
let tq = null,
    tQ = null,
    tJ = null;
function tX() {
    return null == tq && (tq = new tZ({ checkoutFlow: l.C.ORB_CHECKOUT })), tq;
}
function t$() {
    return null == tQ && (tQ = new tZ({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), tQ;
}
function t0() {
    return null == tJ && (tJ = new tZ({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), tJ;
}
l.C.ORB_CHECKOUT, l.C.COLLECTIBLES_CHECKOUT, l.C.SLAYER_STOREFRONT_CHECKOUT;
