n.d(t, { gf: () => tY.g, Tt: () => tq, KY: () => tX, CL: () => l.C, Tx: () => tQ });
var l = n(285871);
n(321073);
var i = n(627968),
    r = n(132500),
    s = n(192308),
    a = n(166532),
    o = n(546042),
    u = n(939220),
    c = n(310829),
    d = n(945477),
    C = n(64700),
    p = n(20742),
    m = n(688810),
    E = n(937008),
    _ = n(156312),
    T = n(503698),
    A = n.n(T),
    h = n(106778),
    f = n(228366),
    S = n(793574),
    I = n(213530),
    x = n(158216),
    O = n(758836),
    g = n(483764);
let P = { sliderBodyClassName: g.Bz },
    y = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h.Fk, { ref: n, className: g.Lb, environment: t.current }),
                (0, i.jsx)(I.K, { options: l, className: A()(g.Oh, { [g.R]: !r }) }),
            ],
        });
    };
var N = n(284009),
    v = n.n(N),
    L = n(702841),
    j = n(775602),
    R = n(427675),
    k = n(94420),
    M = n(590180),
    U = n(953150),
    D = n(524246),
    F = n(14368),
    b = n(61750),
    w = n(972607),
    H = n(482132),
    G = n(921925),
    K = n(788868),
    B = n(985018);
function W(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        l = (0, k.t4)((e) => e.selectedSkuId),
        {
            application: r,
            paymentError: s,
            purchaseError: a,
            purchasePreviewError: o,
            appliedUserDiscounts: u,
        } = (0, _.P5)(),
        c = (0, R.gU)(),
        d = (0, L.bG)([M.A], () => M.A.getProduct(l)),
        p = C.useRef(!1);
    v()(null != l, "Expected selectedSkuId"), v()(null != r, "Expected application");
    let m = c[l];
    v()(null != m, "Expected sku");
    let E = null != s || null != a || null != o,
        T =
            u.length > 0
                ? B.intl.formatToPlainString(B.t.VuV3Td, { discountOfferAmount: u[0].discount.amount })
                : void 0;
    return (C.useEffect(() => {
        null == d ||
            E ||
            p.current ||
            ((p.current = !0),
            (0, b.A)({
                product: d,
                overrideTitle: T,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: O.gs.FIAT,
            }));
    }, [d, n, t, E, T]),
    E)
        ? (0, i.jsx)(H.dZ, { children: (0, i.jsx)(G.A, {}) })
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
        } = (0, E.Pv)(),
        c = (0, L.bG)([j.A], () => j.A.useReducedMotion),
        d = C.useRef(null),
        p = (0, k.t4)((e) => e.selectedSkuId),
        m = (0, L.bG)([M.A], () => M.A.getProduct(p)),
        { confettiColors: _ } = (0, U.A)(m?.styles);
    return (
        C.useEffect(() => {
            t &&
                null != s &&
                null != p &&
                (u === K.vQ.USER_PROFILE_WISHLIST || u === K.vQ.DM_CHANNEL_WISHLIST) &&
                f.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: p, recipientId: s.id });
        }, [t, s, p, u]),
        t
            ? (0, i.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, i.jsx)(w.A, {
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
                          (0, i.jsx)(D.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, F.rA)(m?.categorySkuId),
                              colors: _?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, i.jsx)(W, { ...e })
    );
}
var V = n(17928),
    Z = n(123292),
    z = n(964486),
    q = n(693477),
    Q = n(993408),
    X = n(575593),
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
    e_ = n(780651);
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
            hideProfilePreview: c = !1,
        } = e,
        { product: d } = (0, eo.q)(t, !0),
        { giftRecipient: p, giftRecipientError: m } = (0, E.Pv)(),
        _ = (0, V.bG)([es.default], () => es.default.getCurrentUser()),
        T = (0, eC.VG)(d),
        h = C.useRef(null),
        f = ea.Ay.canUseCollectibles(_),
        S = C.useMemo(() => (0, Q.fT)(d, f), [d, f]),
        I = (0, eE.V_)(d);
    if (null == d) return null;
    let [x] = d.items;
    v()(null != x, "Product item should not be empty");
    let O = null != p && p.id !== _?.id && d.type !== X.R.BUNDLE && x.type !== X.R.NAMEPLATE && !c;
    return (0, i.jsxs)("div", {
        className: o,
        children: [
            a &&
                (0, i.jsx)("div", {
                    className: A()(e_.QU, u),
                    children: (0, i.jsx)(J.D, {
                        label: B.intl.string(B.t.PpoJzt),
                        children:
                            O &&
                            (0, i.jsx)(
                                $.Y,
                                {
                                    targetElementRef: h,
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
                                            className: e_.Nx,
                                            innerRef: h,
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
                className: A()(e_.i1, { [e_.no]: n && null == m, [e_.cN]: n && null != m }),
                children: [
                    (0, i.jsxs)("div", {
                        className: e_.Ug,
                        children: [
                            (0, i.jsx)(ep.O, { product: d }),
                            (0, i.jsxs)("div", {
                                className: e_.JZ,
                                children: [
                                    (0, i.jsx)(en.E, { variant: "text-md/semibold", children: T }),
                                    (0, i.jsx)(el.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: (() => {
                                            if (d?.type === X.R.BUNDLE) return null;
                                            switch (x.type) {
                                                case X.R.AVATAR_DECORATION:
                                                    return B.intl.string(B.t["7v0T9P"]);
                                                case X.R.PROFILE_EFFECT:
                                                    return B.intl.string(B.t.wR5wOo);
                                                case X.R.PROFILE_FRAME:
                                                    return B.intl.string(B.t.GWrZOd);
                                                case X.R.NAMEPLATE:
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
                        null != m &&
                        (0, i.jsx)("div", {
                            className: e_.Wh,
                            children: (0, i.jsx)(en.E, {
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
    eh = n(687033),
    ef = n(871181),
    eS = n(318007),
    eI = n(285719),
    ex = n(976860),
    eO = n(954571),
    eg = n(652215),
    eP = n(353791);
function ey(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, m.Ay)(S.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(Z.Q, {
        text: B.intl.string(B.t.J82mpK),
        onClick: function () {
            t(),
                (0, s.closeAllModals)(),
                null == n
                    ? (0, q.Cz)({ analyticsLocations: l, analyticsSource: S.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, ex.pX)(`${eg.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var eN = n(818348);
let ev = (0, C.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    eL = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: l } = (0, C.useContext)(ev);
        return (0, i.jsx)(Y, { analyticsLocations: t, hideConfetti: n, confettiCanvas: l, ...e });
    },
    ej = {
        [a.pn.GIFT_CUSTOMIZATION]: () => B.intl.string(B.t["JCFN/y"]),
        [a.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => B.intl.string(B.t.lDbi6H),
        [a.pn.CONFIRM]: () => "",
    },
    eR = (e) => {
        let { step: t } = e,
            n = ej[t];
        return null == n ? null : (0, i.jsx)(p.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    ek = {
        tenantProvidesPaymentContext: !0,
        UnifiedCheckoutTenantProvider: (e) => {
            let { skuId: t, analyticsLocations: n, renderModalProps: l, additionalOptions: r, children: s, ...a } = e,
                {
                    environment: o,
                    confettiCanvas: u,
                    setConfettiCanvas: c,
                    customConfettiVisible: d,
                    setCustomConfettiVisible: p,
                    customConfettiDisplayOptions: E,
                    hideConfirmStepConfetti: T,
                } = ((e) => {
                    let { skuId: t } = e,
                        n = C.useRef(new h.OH()),
                        [l, i] = C.useState(null),
                        [r, s] = C.useState(!1),
                        a = C.useMemo(() => (0, x.AB)({ purchaseType: O.gs.FIAT, skuId: t }), [t]);
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
                        { analyticsLocations: n } = (0, m.Ay)([...t, S.A.COLLECTIBLES_PAYMENT_MODAL]);
                    return { analyticsLocations: n };
                })({ analyticsLocations: n ?? [] }),
                I = ((e) => {
                    let { skuId: t } = e;
                    return null != t ? [t] : [];
                })({ skuId: t }),
                g = (0, C.useMemo)(
                    () => ({
                        analyticsLocations: A,
                        skuIDs: I,
                        setCustomConfettiVisible: p,
                        hideConfirmStepConfetti: T,
                        confettiCanvas: u,
                    }),
                    [A, I, p, T, u],
                ),
                P = a.onClose,
                {
                    paymentModalSkuId: N,
                    paymentModalOnClose: v,
                    paymentModalOnComplete: L,
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
                                i(!1), n(e), f.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                            },
                            [n, i],
                        ),
                        paymentModalOnComplete: s,
                    };
                })({
                    onClose: C.useCallback(
                        (e) => {
                            l.onClose(), null != P && P(e);
                        },
                        [l, P],
                    ),
                    onComplete: a.onComplete,
                    skuIDs: I,
                    setCustomConfettiVisible: p,
                }),
                j = null != r ? r.onStepChange : void 0,
                R = (0, C.useMemo)(
                    () => ({
                        skuId: N,
                        onClose: v,
                        onComplete: L,
                        applicationId: eg.FYj,
                        initialPlanId: null,
                        analyticsLocations: A,
                        onStepChange: j,
                        hideShadow: !0,
                        transitionState: l.transitionState,
                        returnRef: l.returnRef,
                    }),
                    [N, v, L, A, l.transitionState, l.returnRef, j],
                );
            return (0, i.jsxs)(m.f5, {
                value: A,
                children: [
                    (0, i.jsx)(y, {
                        environment: o,
                        setConfettiCanvas: c,
                        customConfettiDisplayOptions: E,
                        customConfettiVisible: d,
                    }),
                    (0, i.jsx)(_.PaymentContextProvider, {
                        ...a,
                        skuIDs: I,
                        stepConfigs: a.stepConfigs,
                        activeSubscription: null,
                        purchaseType: eN.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, i.jsx)(ev.Provider, {
                            value: g,
                            children: (0, i.jsx)(tY.g, { customPaymentModalProps: R, children: s }),
                        }),
                    }),
                ],
            });
        },
        UnifiedCheckoutCustomHeader: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, E.Pv)();
            return n ? (0, i.jsx)(eR, { step: t }) : null;
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
                                    giftingOrigin: c,
                                    setValidatingGiftRecipient: d,
                                } = (0, E.Pv)(),
                                C = (0, k.t4)((e) => e.selectedSkuId),
                                { paymentSourceId: p } = (0, _.P5)(),
                                m = (0, R.Hf)(),
                                T = (0, R.RR)(),
                                A = (0, R.gU)(),
                                h = (0, V.bG)([es.default], () => es.default.getCurrentUser()),
                                f = (0, eh.A)(),
                                S = async (e, t) => {
                                    d(!0),
                                        null != s && a(),
                                        (await (0, q.JJ)(e.id, t)) || a(B.intl.string(B.t["4kgVqQ"])),
                                        d(!1);
                                };
                            (0, z.Ay)(() => {
                                null != C &&
                                    null != u &&
                                    (c !== K.vQ.DM_CHANNEL_WISHLIST &&
                                        eO.default.track(eg.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                    S(u, C));
                            });
                            let I = () =>
                                (0, i.jsx)(ef.A, {
                                    onTextChange: (e) => r?.(e),
                                    pendingText: l,
                                    currentText: l,
                                    disableThemedBackground: !0,
                                    className: eP.iX,
                                    innerClassName: eP.pt,
                                });
                            return {
                                renderLeftColumn: () =>
                                    (0, i.jsx)("div", {
                                        className: eP.qL,
                                        children: (0, i.jsx)(eS.t, { isShopGift: !0 }),
                                    }),
                                renderRightColumn: () => {
                                    let e = (0, Q.pA)({
                                        selectedSkuPricePreview: m,
                                        paymentSourceId: p,
                                        selectedSkuId: C,
                                        skuPricePreviewsById: T,
                                        skusById: A,
                                    });
                                    return c === K.vQ.USER_PROFILE_WISHLIST || c === K.vQ.DM_CHANNEL_WISHLIST
                                        ? (0, i.jsxs)("div", {
                                              children: [
                                                  (0, i.jsx)(eI.Z, { giftRecipient: u }),
                                                  I(),
                                                  null != e &&
                                                      null != C &&
                                                      (0, i.jsx)(eT, {
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
                                                      children: (0, i.jsx)(ey, { handleClose: n, selectedSkuId: C }),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              children: [
                                                  (0, i.jsx)(eA.A, {
                                                      selectedSkuId: C,
                                                      recipients: f,
                                                      className: eP.uh,
                                                      validateSelectedGift: S,
                                                  }),
                                                  I(),
                                                  null != e &&
                                                      null != C &&
                                                      (0, i.jsx)(eT, {
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
                                ctaDisabled: null != s || null == u || u.id === h?.id || l.length > K.Jo,
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
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eL, { ...e }), options: P },
    };
var eM = n(429913),
    eU = n(67480),
    eD = n(328968),
    eF = n(733391),
    eb = n(821609),
    ew = n(318254),
    eH = n(262427),
    eG = n(510022),
    eK = n(317560),
    eB = n(366523),
    eW = n(208733);
function eY(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, m.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, k.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, _.P5)(),
        a = (0, R.gU)(),
        { isGift: o, giftRecipient: u } = (0, E.Pv)();
    v()(null != l, "Expected selectedSkuId"), v()(null != s, "Expected application");
    let c = a[l];
    v()(null != c, "Expected sku");
    let d = r.find((e) => e.sku_id === l),
        p = d?.metadata?.orbs_reward;
    if (
        (C.useEffect(() => {
            o || ((0, eK.j)(), t(), (0, eG.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: p }));
        }, [o, c, s, t, n, p]),
        !o)
    )
        return null;
    let T = null != p && p > 0;
    return (0, i.jsxs)(H.dZ, {
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
                    T &&
                        (0, i.jsx)("div", {
                            className: eW.Is,
                            children: (0, i.jsx)(eH.J, {
                                Icon: ew.C,
                                text: B.intl.format(B.t["ZV+aS9"], { orbCount: p }),
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
    eq = n(742158),
    eQ = n(683071),
    eX = n(313961),
    eJ = n(765441),
    e$ = n(238017),
    e0 = n(650588),
    e1 = n(723090),
    e8 = n(763827),
    e2 = n(403362),
    e7 = n(871123),
    e5 = n(832163),
    e6 = n(44724),
    e3 = n(980094),
    e9 = n(627363),
    e4 = n(587895),
    te = n(71393),
    tt = n(806931),
    tn = n(107610);
function tl(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        r = C.useCallback(() => {
            (0, e6.X)({ guildId: n.id });
        }, [n.id]),
        a = C.useCallback(() => {
            t();
            let e = e5.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(eg.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, l.id)) ||
                ((0, s.closeAllModals)(),
                (0, e6.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: l.id, slug: l.slug }));
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
    tenantProvidesPaymentContext: !0,
    UnifiedCheckoutTenantProvider: (e) => {
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
                onComplete: d,
                analyticsSourceLocation: p,
                ...E
            } = e,
            { analyticsLocations: T } = ((e) => {
                let { applicationId: t, skuId: n, analyticsLocations: l } = e,
                    { analyticsLocations: i } = (0, m.Ay)(l, S.A.SLAYER_STOREFRONT_PAYMENT_MODAL),
                    r = (0, eM.h)(t);
                return (
                    C.useEffect(() => {
                        null == r ||
                            null == r.guildId ||
                            null == n ||
                            eD.A.isFetchingForSKU(n) ||
                            null != eU.A.get(n) ||
                            (0, eF.qf)(r.guildId, n);
                    }, [r, n]),
                    { analyticsLocations: i }
                );
            })({ applicationId: r, skuId: a, analyticsLocations: o }),
            A = u.onClose,
            h = C.useCallback(
                (e) => {
                    A(), null != c && c(e);
                },
                [A, c],
            ),
            f = C.useMemo(
                () => ({
                    onClose: h,
                    onComplete: d,
                    applicationId: r,
                    skuId: a,
                    initialPlanId: null,
                    analyticsObject: p,
                    analyticsLocations: T,
                }),
                [h, d, r, a, p, T],
            );
        return (0, i.jsx)(m.f5, {
            value: T,
            children: (0, i.jsx)(_.PaymentContextProvider, {
                loadId: l,
                discoverySessionId: n,
                applicationId: r,
                skuIDs: [a],
                purchaseType: eN.VV.ONE_TIME,
                isGift: s,
                ...E,
                activeSubscription: null,
                children: (0, i.jsx)(tY.g, { customPaymentModalProps: f, children: t }),
            }),
        });
    },
    UnifiedCheckoutCustomHeader: function (e) {
        let { step: t } = e,
            n = (0, eV.YW)(t)
                .with(a.pn.GIFT_CUSTOMIZATION, () => B.intl.string(B.t["JCFN/y"]))
                .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => B.intl.string(B.t.lDbi6H))
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
                                giftRecipient: c,
                                emojiConfetti: d,
                                soundEffect: p,
                                setEmojiConfetti: m,
                                setSoundEffect: T,
                                giftingOrigin: A,
                                additionalUserIds: h,
                            } = (0, E.Pv)(),
                            f = (0, k.t4)((e) => e.selectedSkuId),
                            { application: S } = (0, _.P5)(),
                            I = (0, V.bG)([es.default], () => es.default.getCurrentUser()),
                            x =
                                ((t = I?.id),
                                (n = (0, eJ.A)()),
                                (l = (function (e) {
                                    let t = (0, V.bG)([e8.A], () => (e8.A.isConnected() ? e8.A.getChannelId() : null)),
                                        [n, l] = C.useState([]);
                                    return (
                                        C.useEffect(() => {
                                            let n = null != t ? eX.A.getParticipants(t) : [],
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
                                (r = (0, V.yK)([es.default], () => h?.map(es.default.getUser).filter(e2.Vq) ?? [], [
                                    h,
                                ])),
                                C.useMemo(
                                    () =>
                                        ez().uniqWith(
                                            [...(null != c ? [c] : []), ...r, ...l, ...n],
                                            (e, t) => e.id === t.id,
                                        ),
                                    [c, r, l, n],
                                )),
                            O = (0, V.bG)([eU.A], () => (null != f ? eU.A.get(f) : null), [f]),
                            { normalPrice: g, discountedPrice: P } = (0, e1.CD)({
                                sku: O,
                                priceSetAssignmentPurchaseType: eg.lid.GIFT,
                            }),
                            y = (0, e7.fq)(O),
                            N = (0, e7.xf)(O),
                            v = (function (e) {
                                let { shouldFetchIfMissing: t } =
                                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = (0, e7.bF)(e),
                                    l = e?.applicationId,
                                    i = (0, V.bG)([e4.A], () => (null != l ? e4.A.getApplication(l) : null), [l]),
                                    r = i?.guildId,
                                    s = (0, V.bG)([te.A], () => (null != r ? te.A.getGuild(r) : null), [r]);
                                return (
                                    C.useEffect(() => {
                                        n && t && null == s && null != e && e9.Ay.fetchApplication(e.applicationId, !0);
                                    }, [s, e, t, n]),
                                    n ? s : null
                                );
                            })(O, { shouldFetchIfMissing: !0 }),
                            L = async (e, t) => {},
                            j = (e) => {
                                null != T && T(null == e ? void 0 : e);
                            },
                            R = () =>
                                (0, i.jsxs)("div", {
                                    className: tn.mT,
                                    children: [
                                        null != y &&
                                            (0, i.jsx)(eB.A, {
                                                containerClassName: tn.T3,
                                                cardImage: y,
                                                cardBackgroundImage: N,
                                                altText: O?.name ?? "",
                                                shape: "square",
                                            }),
                                        (0, i.jsxs)("div", {
                                            className: tn._T,
                                            children: [
                                                (0, i.jsx)(e0.A, { sound: p, onSelect: j }),
                                                (0, i.jsx)(e$.A, {
                                                    setEmojiConfetti: m,
                                                    emojiConfetti: null == d ? void 0 : d,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            M = () => {
                                let e = O?.orbsReward;
                                return (0, i.jsxs)("div", {
                                    className: tn.Tc,
                                    children: [
                                        null != c &&
                                        (A === K.vQ.USER_PROFILE_WISHLIST || A === K.vQ.DM_CHANNEL_WISHLIST)
                                            ? (0, i.jsx)(eI.Z, { giftRecipient: c })
                                            : (0, i.jsx)(eA.A, {
                                                  selectedSkuId: f,
                                                  validateSelectedGift: L,
                                                  recipients: x,
                                              }),
                                        (0, i.jsx)(ef.A, {
                                            onTextChange: (e) => u?.(e),
                                            pendingText: o,
                                            currentText: o,
                                            disableThemedBackground: !0,
                                            className: tn.iX,
                                            innerClassName: tn.pt,
                                        }),
                                        null == O
                                            ? null
                                            : (0, i.jsxs)("div", {
                                                  className: tn.AN,
                                                  children: [
                                                      (0, i.jsx)(eq.z, {
                                                          className: tn.jr,
                                                          children: B.intl.string(B.t.PpoJzt),
                                                      }),
                                                      (0, i.jsxs)("div", {
                                                          className: tn.Wx,
                                                          children: [
                                                              (0, i.jsx)("div", {
                                                                  className: tn.Xb,
                                                                  children:
                                                                      null != O &&
                                                                      null != y &&
                                                                      (0, i.jsx)(eB.A, {
                                                                          containerClassName: tn.Iy,
                                                                          cardImage: y,
                                                                          cardBackgroundImage: N,
                                                                          altText: O.name,
                                                                          shape: "square",
                                                                      }),
                                                              }),
                                                              (0, i.jsxs)("div", {
                                                                  className: tn.vz,
                                                                  children: [
                                                                      null != S && (0, i.jsx)(e3.Q, { application: S }),
                                                                      (0, i.jsx)(en.E, {
                                                                          variant: "text-sm/semibold",
                                                                          children: O.name,
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
                                        null != O &&
                                            (0, e7.Ri)(O) &&
                                            (0, i.jsx)(eQ.w, { type: "info", children: B.intl.string(B.t.lORYb6) }),
                                        null != e &&
                                            e > 0 &&
                                            (0, i.jsx)(eH.J, {
                                                Icon: ew.C,
                                                text: B.intl.format(B.t["ZV+aS9"], { orbCount: e }),
                                            }),
                                        null != v && null != O && (0, i.jsx)(tl, { handleClose: a, sku: O, guild: v }),
                                    ],
                                });
                            };
                        return {
                            renderStepBody: () => (0, i.jsxs)("div", { className: tn.Du, children: [R(), M()] }),
                            getLeftColumnComponent: R,
                            getRightColumnComponent: M,
                            onStepChange: s,
                            onBackClick: a,
                            disabled: null == c || c.id === I?.id || o.length > K.Jo,
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
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eY, { ...e }) },
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
    t_ = n(373856),
    tT = n(289873),
    tA = n(241989),
    th = n(132198),
    tf = n(252293),
    tS = n(971875),
    tI = n(319820),
    tx = n(327105),
    tO = n(200766);
let tg = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, tI.AO)({ sku: t }),
            s = (0, tS.oO)(l);
        r ? (s = B.intl.string(tx.default.qwSlCO)) : (0, tc.Ab)(l) && (s = B.intl.string(B.t["0TmQRG"]));
        let a = (0, tS.dL)(t),
            o =
                t.id === O.Dp.FRACTIONAL_PREMIUM
                    ? th.m[O.Dp.FRACTIONAL_PREMIUM].render({ className: tO.$ })
                    : (0, i.jsx)(tA.WH, { sku: t, product: l });
        return (0, i.jsx)(tA.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: ew.C,
        });
    },
    tP = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, tf.A)({
            applicationId: (0, c.P)(t),
            skuIDs: [t],
            isGift: !1,
            currentPaymentSourceId: null,
            excludeSKUPurchasePreviews: !0,
        });
        let l = (0, L.bG)([eU.A], () => eU.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(tT.y, { type: tT.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(tg, { sku: l, orbPriceAmount: n });
    },
    ty = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(ta.vW, { label: B.intl.string(B.t.y0WGqP), value: null != t ? `${t}` : "", Icon: ew.C });
    },
    tN = () => B.intl.string(B.t.wmcDyu);
function tv() {
    let { immediateDelivery: e } = (0, tu.U)(),
        t = tN();
    return (0, i.jsx)(ta._P, {
        variant: { type: ta.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let tL = (0, C.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsLocations: [],
        analyticsSourceLocation: void 0,
    }),
    tj = {
        tenantProvidesPaymentContext: !1,
        UnifiedCheckoutTenantProvider: (e) => {
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
                    orbRedemptionError: d,
                    onRedeemVirtualCurrency: p,
                } = ((e) => {
                    let { skuId: t, loadId: n, analyticsLocations: l, onCheckoutSuccess: i } = e,
                        r = (0, V.bG)([es.default], () => ea.Ay.canUseShopDiscounts(es.default.getCurrentUser())),
                        s = (0, V.bG)([eU.A], () => eU.A.get(t), [t]),
                        a = (0, e1.JL)({ sku: s }),
                        { product: o } = (0, eo.q)(t),
                        u = (0, C.useMemo)(() => {
                            if (null != a) return { orbPriceAmount: a.amount };
                            if (null != o) {
                                let e = (0, tc.CW)({ product: o, hasShopDiscount: r });
                                return { orbPriceAmount: null !== e ? e.amount : null };
                            }
                            return null;
                        }, [a, o, r]);
                    u?.orbPriceAmount == null && (0, td.hD)("Orb price not found for product", { tags: { sku_id: t } });
                    let { redeemVirtualCurrency: c, isSubmitting: d, error: p } = (0, tC.Q)({ skuId: t, loadId: n }),
                        m = (0, C.useCallback)(
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
                        isRedeeming: d,
                        orbRedemptionError: p,
                    };
                })({
                    skuId: t,
                    loadId: l,
                    onCheckoutSuccess: (0, C.useMemo)(
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
                        { emitOrbCheckoutPaymentFlowEvent: s } = (0, t_.O)({
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
                                    currency: eg.Yri.DISCORD_ORB,
                                };
                        }, [i]),
                        onClose: (0, C.useCallback)(
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
                E = (0, C.useMemo)(
                    () => ({
                        orbProductContext: u,
                        isRedeeming: c,
                        orbRedemptionError: d,
                        onRedeemVirtualCurrency: p,
                        skuId: t,
                        analyticsLocations: n,
                        analyticsSourceLocation: r,
                    }),
                    [u, c, d, p, t, n, r],
                );
            return (0, i.jsx)(tL.Provider, {
                value: E,
                children: (0, i.jsx)(tY.g, { customPaymentModalProps: m, children: o }),
            });
        },
        UnifiedCheckoutStepDefinitions: {
            [a.pn.REVIEW]: {
                StepController: (e) => {
                    let { paymentModalStepProps: t } = e,
                        { handleClose: n } = t;
                    ((e) => {
                        let { handleClose: t } = e,
                            { purchaseState: n } = (0, _.P5)();
                        (0, C.useEffect)(() => {
                            n === tm.h.COMPLETED && t();
                        }, [n, t]);
                    })({ handleClose: n });
                    let {
                            orbProductContext: l,
                            isRedeeming: r,
                            orbRedemptionError: s,
                            onRedeemVirtualCurrency: a,
                            skuId: o,
                            analyticsLocations: u,
                            analyticsSourceLocation: c,
                        } = (0, C.useContext)(tL),
                        { primaryButtonProps: d, ...p } = ((e) => {
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
                                    orbBalanceToDisplay: d,
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
                                        a = (0, k.t4)((e) => e.selectedSkuId),
                                        { setPurchaseState: o } = (0, _.P5)(),
                                        u = (0, tE.gN)(),
                                        c = (0, C.useRef)(u),
                                        { emitOrbCheckoutPaymentFlowEvent: d } = (0, t_.O)({
                                            skuId: t,
                                            orbProductContext: i,
                                            analyticsLocations: r,
                                            analyticsSourceLocation: s,
                                        });
                                    (0, z.Ay)(() => {
                                        d(eg.HAw.PAYMENT_FLOW_LOADED);
                                    }),
                                        (0, C.useEffect)(() => {
                                            null != l &&
                                                null !== c.current &&
                                                (d(eg.HAw.PAYMENT_FLOW_FAILED, l), (c.current = null));
                                        }, [l, d]);
                                    let p = (0, C.useCallback)(() => {
                                            (c.current = u),
                                                d(eg.HAw.PAYMENT_FLOW_COMPLETED),
                                                n(() => {
                                                    o(tm.h.COMPLETED), d(eg.HAw.PAYMENT_FLOW_SUCCEEDED);
                                                });
                                        }, [n, o, u, d]),
                                        m = c.current ?? u,
                                        E = null != i ? i.orbPriceAmount : null;
                                    return {
                                        isStepLoading: null == i,
                                        showCollectiblesDiscountWarning: (0, eE.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                        errorMessage: (0, C.useMemo)(
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
                                T = (0, V.bG)([eU.A], () => eU.A.get(t), [t]),
                                A = (0, to.u)(T?.applicationId),
                                {
                                    disabled: h,
                                    tooltipText: f,
                                    text: S,
                                } = ((e) => {
                                    let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                        { disabled: i, tooltipText: r } = (0, C.useMemo)(
                                            () =>
                                                null == n
                                                    ? { disabled: !0, tooltipText: B.intl.string(B.t["c/rcUu"]) }
                                                    : !l && (null == t || n > t)
                                                      ? { disabled: !0, tooltipText: B.intl.string(B.t.keFvXM) }
                                                      : { disabled: !1, tooltipText: null },
                                            [n, t, l],
                                        );
                                    return { disabled: i, tooltipText: r, text: tN() };
                                })({ orbBalance: d, orbPriceAmount: c, isInTestMode: A }),
                                I = (0, C.useMemo)(
                                    () => ({ onClick: p, loading: s, text: S, disabled: h, tooltipText: f }),
                                    [p, s, S, h, f],
                                ),
                                x = m ? B.intl.format(B.t.fsOXXO, {}) : null,
                                O = A ? B.intl.string(B.t.OvMyMd) : null;
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
                                purchaseItemContent: (0, i.jsx)(tP, { skuId: t, orbPriceAmount: c }),
                                paymentSelectContent: (0, i.jsx)(ty, { orbBalance: d }),
                                legalContent: (0, i.jsx)(tv, {}),
                                primaryButtonProps: I,
                                invoiceSummaryContent: null,
                                invoiceTotalDueLabel: null,
                                invoiceTotalDueValue: null,
                            };
                        })({
                            skuId: o,
                            analyticsLocations: u,
                            analyticsSourceLocation: c,
                            orbProductContext: l,
                            isRedeeming: r,
                            orbRedemptionError: s,
                            onRedeemVirtualCurrency: a,
                        });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(H.dZ, { children: (0, i.jsx)(tr.T_, { ...p }) }),
                            (0, i.jsx)(H.UX, { children: (0, i.jsx)(ts.lo, { primaryButtonProps: d }) }),
                        ],
                    });
                },
            },
        },
    },
    tR = {
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
            TENANT_CHECKOUT_FLOW_CONFIG: ek,
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
var tk = n(735305),
    tM = n(295405);
let tU = (e) => {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        r = C.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(tM.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, i.jsx)(tk.x, { ...l, onReturn: r });
};
var tD = n(866485),
    tF = n(981036),
    tb = n(367644);
let tw = (e) => {
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
                onBackClick: c,
            } = n,
            { hasPaymentSources: d } = (0, _.P5)(),
            p = d ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS,
            m = C.useCallback(() => t(p), [t, p]),
            E = C.useMemo(
                () =>
                    "custom-step-body" === l
                        ? r()
                        : "two-column" === l
                          ? (0, i.jsxs)("div", { className: tb.D, children: [s(), o()] })
                          : null,
                [l, r, s, o],
            ),
            T = C.useMemo(() => ({ ...u, onClick: m, text: B.intl.string(B.t.XiOHRX) }), [u, m]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.dZ, { children: E }),
                (0, i.jsx)(H.UX, { children: (0, i.jsx)(tF.cy, { onBackClick: c, primaryCTAButtonProps: T }) }),
            ],
        });
    },
    tH = (0, tD.R)({ step: a.pn.GIFT_CUSTOMIZATION, renderStep: (e) => (0, i.jsx)(tw, { ...e }) });
var tG = n(545075);
let tK = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, C.useRef)(!1),
            { blockedPayments: r } = (0, _.P5)(),
            { handleStepChange: s } = t;
        return ((0, C.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(tG.oO, {})
            : null;
    },
    tB = {
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
class tW {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = tR[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = tB[e]);
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
              ? { key: null, renderStep: (e) => (0, i.jsx)(tK, { paymentModalStepProps: e, defaultStep: a.pn.REVIEW }) }
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
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        return t && n
            ? {
                  key: a.pn.GIFT_CUSTOMIZATION,
                  renderStep: (e) =>
                      (0, i.jsx)(tH, {
                          paymentModalStepProps: e,
                          unifiedStepDefinition: this.getUnifiedStepDefinition(a.pn.GIFT_CUSTOMIZATION),
                      }),
                  options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => B.intl.string(B.t["W685+b"]) },
              }
            : void 0;
    }
    getReviewStepConfig() {
        let e = this.getUnifiedStepDefinition(a.pn.REVIEW);
        return (0, d.B)(e)
            ? u.r2
            : {
                  key: a.pn.REVIEW,
                  renderStep: (t) => (0, i.jsx)(tr.Pw, { paymentModalStepProps: t, unifiedStepDefinition: e }),
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
                flowSpecificOptions: a,
                giftContextProps: o,
                onComplete: u,
                onClose: c,
                skuId: d,
                loadId: C,
                discoverySessionId: p,
                applicationId: m,
                analyticsSourceLocation: E,
                analyticsLocations: _,
            } = e,
            T = C ?? (0, r.A)(),
            { modalKey: A } = t,
            h = this.generateRenderHeader(),
            f = m ?? this.getApplicationIdFor1PShopSKU(d),
            S = !1;
        return (0, s.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: !!(null != o && o.isGift) });
                return (n) =>
                    (0, i.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != u && u(e), (S = !0);
                        },
                        onClose: c,
                        renderHeader: h,
                        skuId: d,
                        loadId: T,
                        discoverySessionId: p,
                        applicationId: f,
                        analyticsLocations: _,
                        analyticsSourceLocation: E,
                        renderModalProps: n,
                        giftContextProps: o,
                        flowSpecificOptions: a,
                        additionalOptions: l,
                    });
            },
            {
                ...t,
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(S, T), (0, s.closeModal)(A);
                },
                modalKey: A,
            },
        );
    }
}
n(584160);
var tY = n(551892);
let tV = null,
    tZ = null,
    tz = null;
function tq() {
    return null == tV && (tV = new tW({ checkoutFlow: l.C.ORB_CHECKOUT })), tV;
}
function tQ() {
    return null == tZ && (tZ = new tW({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), tZ;
}
function tX() {
    return null == tz && (tz = new tW({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), tz;
}
l.C.ORB_CHECKOUT, l.C.COLLECTIBLES_CHECKOUT, l.C.SLAYER_STOREFRONT_CHECKOUT;
