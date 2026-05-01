n.d(t, { Mw: () => tB, gf: () => tW.g, Tt: () => tz, XZ: () => l.X, KY: () => tX, CL: () => l.C, Tx: () => tq });
var l = n(75304);
n(321073);
var i = n(627968),
    r = n(835245),
    s = n(192308),
    a = n(166532),
    o = n(546042),
    u = n(939220),
    c = n(310829),
    d = n(174459),
    C = n(64700),
    p = n(20742),
    m = n(688810),
    E = n(937008),
    _ = n(902958),
    T = n(623020),
    h = n(503698),
    A = n.n(h),
    O = n(106778),
    S = n(228366),
    I = n(793574),
    f = n(213530),
    x = n(966971),
    g = n(758836),
    P = n(483764);
let N = { sliderBodyClassName: P.Bz },
    y = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(O.Fk, { ref: n, className: P.Lb, environment: t.current }),
                (0, i.jsx)(f.K, { options: l, className: A()(P.Oh, { [P.R]: !r }) }),
            ],
        });
    };
var R = n(284009),
    v = n.n(R),
    L = n(702841),
    j = n(775602),
    k = n(427675),
    M = n(94420),
    U = n(590180),
    F = n(953150),
    b = n(524246),
    w = n(14368),
    D = n(61750),
    H = n(972607),
    G = n(482132),
    K = n(921925),
    B = n(788868),
    W = n(375708);
function V(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        l = (0, M.t4)((e) => e.selectedSkuId),
        {
            application: r,
            paymentError: s,
            purchaseError: a,
            purchasePreviewError: o,
            appliedUserDiscounts: u,
        } = (0, _.P5)(),
        c = (0, k.gU)(),
        d = (0, L.bG)([U.A], () => U.A.getProduct(l)),
        p = C.useRef(!1);
    v()(null != l, "Expected selectedSkuId"), v()(null != r, "Expected application");
    let m = c[l];
    v()(null != m, "Expected sku");
    let E = null != s || null != a || null != o,
        T =
            u.length > 0
                ? W.intl.formatToPlainString(W.t.VuV3Td, { discountOfferAmount: u[0].discount.amount })
                : void 0;
    return (C.useEffect(() => {
        null == d ||
            E ||
            p.current ||
            ((p.current = !0),
            (0, D.A)({
                product: d,
                overrideTitle: T,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: g.gs.FIAT,
            }));
    }, [d, n, t, E, T]),
    E)
        ? (0, i.jsx)(G.dZ, { children: (0, i.jsx)(K.A, {}) })
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
        p = (0, M.t4)((e) => e.selectedSkuId),
        m = (0, L.bG)([U.A], () => U.A.getProduct(p)),
        { confettiColors: _ } = (0, F.A)(m?.styles);
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
                  ref: d,
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
                          (0, i.jsx)(b.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, w.rA)(m?.categorySkuId),
                              colors: _?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, i.jsx)(V, { ...e })
    );
}
var Z = n(17928),
    z = n(123292),
    q = n(964486),
    X = n(859040),
    Q = n(993408),
    J = n(575593),
    $ = n(452027),
    ee = n(922016),
    et = n(778712),
    en = n(939249),
    el = n(834730),
    ei = n(534514),
    er = n(986687),
    es = n(903209),
    ea = n(287809),
    eo = n(927578),
    eu = n(674658),
    ec = n(898461),
    ed = n(203632),
    eC = n(892118),
    ep = n(536572),
    em = n(14702),
    eE = n(219103),
    e_ = n(525723),
    eT = n(780651);
let eh = (e) => {
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
        { product: d } = (0, eu.q)(t, !0),
        { giftRecipient: p, giftRecipientError: m } = (0, E.Pv)(),
        _ = (0, Z.bG)([ea.default], () => ea.default.getCurrentUser()),
        T = (0, ep.VG)(d),
        h = C.useRef(null),
        O = eo.Ay.canUseCollectibles(_),
        S = C.useMemo(() => (0, Q.fT)(d, O), [d, O]),
        I = (0, e_.V_)(d);
    if (null == d) return null;
    let [f] = d.items;
    v()(null != f, "Product item should not be empty");
    let x = null != p && p.id !== _?.id && d.type !== J.R.BUNDLE && f.type !== J.R.NAMEPLATE && !c;
    return (0, i.jsxs)("div", {
        className: o,
        children: [
            a &&
                (0, i.jsx)("div", {
                    className: A()(eT.QU, u),
                    children: (0, i.jsx)($.D, {
                        label: W.intl.string(W.t.PpoJzt),
                        children:
                            x &&
                            (0, i.jsx)(
                                ee.Y,
                                {
                                    targetElementRef: h,
                                    preload: () => (0, es.A)(p.id, p.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, i.jsx)(er.A, {
                                            ...e,
                                            user: p,
                                            pendingAvatar: p.getAvatarURL(null, (0, et.FT)(et._3.SIZE_80)),
                                            pendingAvatarDecoration: (0, ec.T)(f) ? f : null,
                                            pendingProfileEffect: (0, ed.C3)(f) ? f : null,
                                            pendingProfileFrame: (0, eC.s)(f) ? f : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0,
                                            hideExampleButton: !0,
                                        }),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, i.jsx)(en.D, {
                                            ...e,
                                            className: eT.Nx,
                                            innerRef: h,
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
                className: A()(eT.i1, { [eT.no]: n && null == m, [eT.cN]: n && null != m }),
                children: [
                    (0, i.jsxs)("div", {
                        className: eT.Ug,
                        children: [
                            (0, i.jsx)(em.O, { product: d }),
                            (0, i.jsxs)("div", {
                                className: eT.JZ,
                                children: [
                                    (0, i.jsx)(el.E, { variant: "text-md/semibold", children: T }),
                                    (0, i.jsx)(ei.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: (() => {
                                            if (d?.type === J.R.BUNDLE) return null;
                                            switch (f.type) {
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
                            className: eT.Wh,
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
var eA = n(734925),
    eO = n(687033),
    eS = n(871181),
    eI = n(318007),
    ef = n(285719),
    ex = n(976860),
    eg = n(652215),
    eP = n(353791);
function eN(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, m.Ay)(I.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(z.Q, {
        text: W.intl.string(W.t.J82mpK),
        onClick: function () {
            t(),
                (0, s.closeAllModals)(),
                null == n
                    ? (0, X.Cz)({ analyticsLocations: l, analyticsSource: I.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, ex.pX)(`${eg.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var ey = n(818348);
let eR = (0, C.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    ev = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: l } = (0, C.useContext)(eR);
        return (0, i.jsx)(Y, { analyticsLocations: t, hideConfetti: n, confettiCanvas: l, ...e });
    },
    eL = {
        [a.pn.GIFT_CUSTOMIZATION]: () => W.intl.string(W.t["JCFN/y"]),
        [a.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => W.intl.string(W.t.lDbi6H),
        [a.pn.CONFIRM]: () => "",
    },
    ej = (e) => {
        let { step: t } = e,
            n = eL[t];
        return null == n ? null : (0, i.jsx)(p.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    ek = {
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
                                setValidatingGiftRecipient: C,
                            } = (0, E.Pv)(),
                            p = (0, M.t4)((e) => e.selectedSkuId),
                            { paymentSourceId: m } = (0, _.P5)(),
                            T = (0, k.Hf)(),
                            h = (0, k.RR)(),
                            A = (0, k.gU)(),
                            O = (0, Z.bG)([ea.default], () => ea.default.getCurrentUser()),
                            S = (0, eO.A)(),
                            I = async (e, t) => {
                                C(!0),
                                    null != s && a(),
                                    (await (0, X.JJ)(e.id, t)) || a(W.intl.string(W.t["4kgVqQ"])),
                                    C(!1);
                            };
                        (0, q.Ay)(() => {
                            null != p &&
                                null != u &&
                                (c !== B.vQ.DM_CHANNEL_WISHLIST &&
                                    d.default.track(eg.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: p }),
                                I(u, p));
                        });
                        let f = () =>
                            (0, i.jsx)(eS.A, {
                                onTextChange: (e) => r?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: eP.iX,
                                innerClassName: eP.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, i.jsx)("div", { className: eP.qL, children: (0, i.jsx)(eI.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, Q.pA)({
                                    selectedSkuPricePreview: T,
                                    paymentSourceId: m,
                                    selectedSkuId: p,
                                    skuPricePreviewsById: h,
                                    skusById: A,
                                });
                                return c === B.vQ.USER_PROFILE_WISHLIST || c === B.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(ef.Z, { giftRecipient: u }),
                                              f(),
                                              null != e &&
                                                  null != p &&
                                                  (0, i.jsx)(eh, {
                                                      skuId: p,
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
                                                  children: (0, i.jsx)(eN, { handleClose: n, selectedSkuId: p }),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(eA.A, {
                                                  selectedSkuId: p,
                                                  recipients: S,
                                                  className: eP.uh,
                                                  validateSelectedGift: I,
                                              }),
                                              f(),
                                              null != e &&
                                                  null != p &&
                                                  (0, i.jsx)(eh, {
                                                      skuId: p,
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
                            ctaDisabled: null != s || null == u || u.id === O?.id || l.length > B.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = C.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, i.jsx)(tB, {
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
                        customConfettiVisible: d,
                        setCustomConfettiVisible: p,
                        customConfettiDisplayOptions: E,
                        hideConfirmStepConfetti: T,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = C.useRef(new O.OH()),
                            [l, i] = C.useState(null),
                            [r, s] = C.useState(!1),
                            a = C.useMemo(() => (0, x.AB)({ purchaseType: g.gs.FIAT, skuId: t }), [t]);
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
                    { analyticsLocations: h } = ((e) => {
                        let { analyticsLocations: t } = e,
                            { analyticsLocations: n } = (0, m.Ay)([...t, I.A.COLLECTIBLES_PAYMENT_MODAL]);
                        return { analyticsLocations: n };
                    })({ analyticsLocations: n ?? [] }),
                    A = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    f = (0, C.useMemo)(
                        () => ({
                            analyticsLocations: h,
                            skuIDs: A,
                            setCustomConfettiVisible: p,
                            hideConfirmStepConfetti: T,
                            confettiCanvas: u,
                        }),
                        [h, A, p, T, u],
                    ),
                    P = a.onClose,
                    {
                        paymentModalSkuId: N,
                        paymentModalOnClose: R,
                        paymentModalOnComplete: v,
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
                        onClose: C.useCallback(
                            (e) => {
                                l.onClose(), null != P && P(e);
                            },
                            [l, P],
                        ),
                        onComplete: a.onComplete,
                        skuIDs: A,
                        setCustomConfettiVisible: p,
                    }),
                    L = null != r ? r.onStepChange : void 0,
                    j = (0, C.useMemo)(
                        () => ({
                            skuId: N,
                            onClose: R,
                            onComplete: v,
                            applicationId: eg.FYj,
                            initialPlanId: null,
                            analyticsLocations: h,
                            onStepChange: L,
                            hideShadow: !0,
                            transitionState: l.transitionState,
                            returnRef: l.returnRef,
                        }),
                        [N, R, v, h, l.transitionState, l.returnRef, L],
                    );
                return (0, i.jsxs)(m.f5, {
                    value: h,
                    children: [
                        (0, i.jsx)(y, {
                            environment: o,
                            setConfettiCanvas: c,
                            customConfettiDisplayOptions: E,
                            customConfettiVisible: d,
                        }),
                        (0, i.jsx)(_.PaymentContextProvider, {
                            ...a,
                            skuIDs: A,
                            stepConfigs: a.stepConfigs,
                            activeSubscription: null,
                            purchaseType: ey.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, i.jsx)(eR.Provider, {
                                value: f,
                                children: (0, i.jsx)(tW.g, { customPaymentModalProps: j, children: s }),
                            }),
                        }),
                    ],
                });
            },
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, E.Pv)();
            return n ? (0, i.jsx)(ej, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(ev, { ...e }), options: N },
    };
var eM = n(429913),
    eU = n(67480),
    eF = n(328968),
    eb = n(733391),
    ew = n(821609),
    eD = n(318254),
    eH = n(262427),
    eG = n(510022),
    eK = n(317560),
    eB = n(366523),
    eW = n(208733);
function eV(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, m.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, M.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, _.P5)(),
        a = (0, k.gU)(),
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
    return (0, i.jsxs)(G.dZ, {
        children: [
            (0, i.jsx)(K.A, {}),
            (0, i.jsxs)("div", {
                className: eW.EL,
                children: [
                    (0, i.jsx)(eB.e, { sku: c, shape: "square", containerClassName: eW.LC }),
                    (0, i.jsx)(ei.D, {
                        variant: "heading-xl/semibold",
                        className: eW.RS,
                        children: W.intl.string(W.t["5glWta"]),
                    }),
                    (0, i.jsx)(el.E, {
                        variant: "text-md/normal",
                        children: W.intl.formatToPlainString(W.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    T &&
                        (0, i.jsx)("div", {
                            className: eW.Is,
                            children: (0, i.jsx)(eH.J, {
                                Icon: eD.C,
                                text: W.intl.format(W.t["ZV+aS9"], { orbCount: p }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: eW.UD,
                        children: (0, i.jsx)(ew.$, { onClick: t, text: W.intl.string(W.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var eY = n(889137),
    eZ = n(735438),
    ez = n.n(eZ),
    eq = n(742158),
    eX = n(683071),
    eQ = n(313961),
    eJ = n(765441),
    e$ = n(238017),
    e0 = n(650588),
    e7 = n(723090),
    e2 = n(763827),
    e8 = n(403362),
    e1 = n(871123),
    e3 = n(832163),
    e5 = n(44724),
    e6 = n(980094),
    e9 = n(627363),
    e4 = n(587895),
    te = n(71393),
    tt = n(806931),
    tn = n(107610);
function tl(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        r = C.useCallback(() => {
            (0, e5.X)({ guildId: n.id });
        }, [n.id]),
        a = C.useCallback(() => {
            t();
            let e = e3.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(eg.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, l.id)) ||
                ((0, s.closeAllModals)(),
                (0, e5.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: l.id, slug: l.slug }));
        }, [n.id, l.id, l.slug, t]);
    return (0, i.jsx)("div", {
        className: tn.$O,
        children: (0, i.jsx)(z.Q, {
            text: W.intl.string(W.t.ImioFL),
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
                            emojiConfetti: d,
                            soundEffect: p,
                            setEmojiConfetti: m,
                            setSoundEffect: T,
                            giftingOrigin: h,
                            additionalUserIds: A,
                        } = (0, E.Pv)(),
                        O = (0, M.t4)((e) => e.selectedSkuId),
                        { application: S } = (0, _.P5)(),
                        I = (0, Z.bG)([ea.default], () => ea.default.getCurrentUser()),
                        f =
                            ((t = I?.id),
                            (n = (0, eJ.A)()),
                            (l = (function (e) {
                                let t = (0, Z.bG)([e2.A], () => (e2.A.isConnected() ? e2.A.getChannelId() : null)),
                                    [n, l] = C.useState([]);
                                return (
                                    C.useEffect(() => {
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
                            (r = (0, Z.yK)([ea.default], () => A?.map(ea.default.getUser).filter(e8.Vq) ?? [], [A])),
                            C.useMemo(
                                () =>
                                    ez().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        x = (0, Z.bG)([eU.A], () => (null != O ? eU.A.get(O) : null), [O]),
                        { normalPrice: g, discountedPrice: P } = (0, e7.CD)({
                            sku: x,
                            priceSetAssignmentPurchaseType: eg.lid.GIFT,
                        }),
                        N = (0, e1.fq)(x),
                        y = (0, e1.xf)(x),
                        R = (function (e) {
                            let { shouldFetchIfMissing: t } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = (0, e1.bF)(e),
                                l = e?.applicationId,
                                i = (0, Z.bG)([e4.A], () => (null != l ? e4.A.getApplication(l) : null), [l]),
                                r = i?.guildId,
                                s = (0, Z.bG)([te.A], () => (null != r ? te.A.getGuild(r) : null), [r]);
                            return (
                                C.useEffect(() => {
                                    n && t && null == s && null != e && e9.Ay.fetchApplication(e.applicationId, !0);
                                }, [s, e, t, n]),
                                n ? s : null
                            );
                        })(x, { shouldFetchIfMissing: !0 }),
                        v = async (e, t) => {},
                        L = (e) => {
                            null != T && T(null == e ? void 0 : e);
                        },
                        j = () =>
                            (0, i.jsxs)("div", {
                                className: tn.mT,
                                children: [
                                    null != N &&
                                        (0, i.jsx)(eB.A, {
                                            containerClassName: tn.T3,
                                            cardImage: N,
                                            cardBackgroundImage: y,
                                            altText: x?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: tn._T,
                                        children: [
                                            (0, i.jsx)(e0.A, { sound: p, onSelect: L }),
                                            (0, i.jsx)(e$.A, {
                                                setEmojiConfetti: m,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        k = () => {
                            let e = x?.orbsReward;
                            return (0, i.jsxs)("div", {
                                className: tn.Tc,
                                children: [
                                    null != c && (h === B.vQ.USER_PROFILE_WISHLIST || h === B.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(ef.Z, { giftRecipient: c })
                                        : (0, i.jsx)(eA.A, {
                                              selectedSkuId: O,
                                              validateSelectedGift: v,
                                              recipients: f,
                                          }),
                                    (0, i.jsx)(eS.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: tn.iX,
                                        innerClassName: tn.pt,
                                    }),
                                    null == x
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: tn.AN,
                                              children: [
                                                  (0, i.jsx)(eq.z, {
                                                      className: tn.jr,
                                                      children: W.intl.string(W.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: tn.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: tn.Xb,
                                                              children:
                                                                  null != x &&
                                                                  null != N &&
                                                                  (0, i.jsx)(eB.A, {
                                                                      containerClassName: tn.Iy,
                                                                      cardImage: N,
                                                                      cardBackgroundImage: y,
                                                                      altText: x.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: tn.vz,
                                                              children: [
                                                                  null != S && (0, i.jsx)(e6.Q, { application: S }),
                                                                  (0, i.jsx)(el.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: x.name,
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
                                    null != x &&
                                        (0, e1.Ri)(x) &&
                                        (0, i.jsx)(eX.w, { type: "info", children: W.intl.string(W.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(eH.J, {
                                            Icon: eD.C,
                                            text: W.intl.format(W.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != R && null != x && (0, i.jsx)(tl, { handleClose: a, sku: x, guild: R }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: tn.Du, children: [j(), k()] }),
                        getLeftColumnComponent: j,
                        getRightColumnComponent: k,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === I?.id || o.length > B.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = C.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(tB, {
                paymentModalStepProps: e,
                layout: l.X.CUSTOM_STEP_BODY,
                renderStepBody: r,
                primaryCTAButtonProps: a,
            });
        },
        [a.pn.REVIEW]: T._,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eV, { ...e }) },
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
                    onComplete: d,
                    analyticsSourceLocation: p,
                    ...E
                } = e,
                { analyticsLocations: T } = ((e) => {
                    let { applicationId: t, skuId: n, analyticsLocations: l } = e,
                        { analyticsLocations: i } = (0, m.Ay)(l, I.A.SLAYER_STOREFRONT_PAYMENT_MODAL),
                        r = (0, eM.h)(t);
                    return (
                        C.useEffect(() => {
                            null == r ||
                                null == r.guildId ||
                                null == n ||
                                eF.A.isFetchingForSKU(n) ||
                                null != eU.A.get(n) ||
                                (0, eb.qf)(r.guildId, n);
                        }, [r, n]),
                        { analyticsLocations: i }
                    );
                })({ applicationId: r, skuId: a, analyticsLocations: o }),
                h = u.onClose,
                A = C.useCallback(
                    (e) => {
                        h(), null != c && c(e);
                    },
                    [h, c],
                ),
                O = C.useMemo(
                    () => ({
                        onClose: A,
                        onComplete: d,
                        applicationId: r,
                        skuId: a,
                        initialPlanId: null,
                        analyticsObject: p,
                        analyticsLocations: T,
                    }),
                    [A, d, r, a, p, T],
                );
            return (0, i.jsx)(m.f5, {
                value: T,
                children: (0, i.jsx)(_.PaymentContextProvider, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: r,
                    skuIDs: [a],
                    purchaseType: ey.VV.ONE_TIME,
                    isGift: s,
                    ...E,
                    activeSubscription: null,
                    children: (0, i.jsx)(tW.g, { customPaymentModalProps: O, children: t }),
                }),
            });
        },
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, eY.YW)(t)
                .with(a.pn.GIFT_CUSTOMIZATION, () => W.intl.string(W.t["JCFN/y"]))
                .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => W.intl.string(W.t.lDbi6H))
                .with(a.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(p.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var tr = n(164928),
    ts = n(169797),
    ta = n(474367),
    to = n(977445),
    tu = n(908419),
    tc = n(623373),
    td = n(739508),
    tC = n(715054);
(0, r.A)();
var tp = n(136857),
    tm = n(566980),
    tE = n(855104),
    t_ = n(120700),
    tT = n(742810);
n(322076);
var th = n(289873),
    tA = n(241989),
    tO = n(576052),
    tS = n(252293),
    tI = n(971875),
    tf = n(319820),
    tx = n(327105),
    tg = n(200766);
let tP = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, tf.AO)({ sku: t }),
            s = (0, tI.oO)(l);
        r ? (s = W.intl.string(tx.default.qwSlCO)) : (0, tc.Ab)(l) && (s = W.intl.string(W.t["0TmQRG"]));
        let a = (0, tI.dL)(t),
            o =
                t.id === g.Dp.FRACTIONAL_PREMIUM
                    ? tO.m[g.Dp.FRACTIONAL_PREMIUM].render({ className: tg.$ })
                    : (0, i.jsx)(tA.WH, { sku: t, product: l });
        return (0, i.jsx)(tA.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: eD.C,
        });
    },
    tN = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, tS.A)({
            applicationId: (0, c.P)(t),
            skuIDs: [t],
            isGift: !1,
            currentPaymentSourceId: null,
            excludeSKUPurchasePreviews: !0,
        });
        let l = (0, L.bG)([eU.A], () => eU.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(th.y, { type: th.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(tP, { sku: l, orbPriceAmount: n });
    },
    ty = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(ta.vW, { label: W.intl.string(W.t.y0WGqP), value: null != t ? `${t}` : "", Icon: eD.C });
    },
    tR = () => W.intl.string(W.t.wmcDyu);
function tv() {
    let { immediateDelivery: e } = (0, tu.U)(),
        t = tR();
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
                        analyticsLocations: u,
                        analyticsSourceLocation: p,
                    } = (0, C.useContext)(tL),
                    { primaryButtonProps: m, ...E } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                analyticsLocations: l,
                                orbProductContext: r,
                                isRedeeming: s,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: u,
                                handleStepChange: p,
                            } = e,
                            {
                                isStepLoading: m,
                                orbPriceAmount: E,
                                orbBalanceToDisplay: T,
                                onClickCheckout: h,
                                showCollectiblesDiscountWarning: A,
                                errorMessage: O,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: l,
                                        orbProductContext: i,
                                        analyticsLocations: r,
                                        analyticsSourceLocation: s,
                                        handleStepChange: o,
                                    } = e,
                                    { selectedSkuId: u, setPurchaseState: p } = (0, M.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                    })),
                                    m = (0, tE.gN)(),
                                    E = (0, C.useRef)(m),
                                    { emitOrbCheckoutPaymentFlowEvent: T } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: i,
                                            } = e,
                                            {
                                                activitySessionId: r,
                                                hasPaymentSources: s,
                                                contextMetadata: o,
                                            } = (0, _.P5)(),
                                            { loadId: u, startTime: p, discoverySessionId: m } = o,
                                            E = (0, C.useMemo)(() => {
                                                let e;
                                                return {
                                                    load_id: u,
                                                    discovery_session_id: m,
                                                    application_id: (0, c.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: r,
                                                    payment_gateway: ey.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: eg.Yri.DISCORD_ORB,
                                                    ...(null != i && { source: i }),
                                                    ...((e = (0, tT.q1)({
                                                        location: "OrbCheckoutModal",
                                                        unifiedCheckoutFlow: t_.C.ORB_CHECKOUT,
                                                    })),
                                                    {
                                                        payment_type: eg.frM[eg.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: e ? tT.rS.UNIFIED : tT.rS.LEGACY,
                                                        checkout_flow: t_.C.ORB_CHECKOUT,
                                                    }),
                                                };
                                            }, [u, m, r, t, l, i, n]);
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, C.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - p;
                                                    e === eg.HAw.PAYMENT_FLOW_STARTED
                                                        ? d.default.track(eg.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...E,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: ey.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === eg.HAw.PAYMENT_FLOW_LOADED
                                                          ? d.default.track(eg.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...E,
                                                                has_saved_payment_source: s,
                                                                initial_step: a.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === eg.HAw.PAYMENT_FLOW_CANCELED
                                                            ? d.default.track(eg.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...E,
                                                                  duration_ms: n,
                                                              })
                                                            : e === eg.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? d.default.track(eg.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...E,
                                                                    duration_ms: n,
                                                                })
                                                              : e === eg.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? d.default.track(eg.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...E,
                                                                      duration_ms: n,
                                                                  })
                                                                : e === eg.HAw.PAYMENT_FLOW_FAILED &&
                                                                  d.default.track(eg.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...E,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [p, E, s],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: i,
                                        analyticsLocations: r,
                                        analyticsSourceLocation: s,
                                    });
                                (0, q.Ay)(() => {
                                    T(eg.HAw.PAYMENT_FLOW_LOADED);
                                }),
                                    (0, C.useEffect)(() => {
                                        null != l &&
                                            null !== E.current &&
                                            (T(eg.HAw.PAYMENT_FLOW_FAILED, l), (E.current = null));
                                    }, [l, T]);
                                let h = (0, C.useCallback)(() => {
                                        (E.current = m),
                                            T(eg.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                p(tm.h.COMPLETED),
                                                    o(a.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, p, m, T, o]),
                                    A = E.current ?? m,
                                    O = null != i ? i.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == i,
                                    showCollectiblesDiscountWarning: (0, e_.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, C.useMemo)(
                                        () =>
                                            null == l
                                                ? null
                                                : l.code === tp.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                  ? W.intl.string(W.t.keFvXM)
                                                  : l.code === tp.tG.ALREADY_PURCHASED
                                                    ? W.intl.string(W.t.m371Mx)
                                                    : W.intl.string(W.t.fqJZ11),
                                        [l],
                                    ),
                                    orbPriceAmount: O,
                                    orbBalanceToDisplay: A,
                                    onClickCheckout: h,
                                    selectedSkuId: u,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                analyticsLocations: l,
                                orbProductContext: r,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: u,
                                handleStepChange: p,
                            }),
                            S = (0, Z.bG)([eU.A], () => eU.A.get(t), [t]),
                            I = (0, to.u)(S?.applicationId),
                            {
                                disabled: f,
                                tooltipText: x,
                                text: g,
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
                            })({ orbBalance: T, orbPriceAmount: E, isInTestMode: I }),
                            P = (0, C.useMemo)(
                                () => ({ onClick: h, loading: s, text: g, disabled: f, tooltipText: x }),
                                [h, s, g, f, x],
                            ),
                            N = A ? W.intl.format(W.t.fsOXXO, {}) : null,
                            y = I ? W.intl.string(W.t.OvMyMd) : null;
                        return {
                            isStepLoading: m,
                            upperInlineNoticeProps: (0, C.useMemo)(() => {
                                if (null != y || null != N || null != O) {
                                    let e = [];
                                    return (
                                        null != y &&
                                            e.push({ type: "warning", message: y, key: "test-mode-warning-notice" }),
                                        null != N &&
                                            e.push({ type: "warning", message: N, key: "orb-checkout-warning-notice" }),
                                        null != O &&
                                            e.push({ type: "critical", message: O, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [y, N, O]),
                            purchaseItemContent: (0, i.jsx)(tN, { skuId: t, orbPriceAmount: E }),
                            paymentSelectContent: (0, i.jsx)(ty, { orbBalance: T }),
                            legalContent: (0, i.jsx)(tv, {}),
                            primaryButtonProps: P,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: o,
                        analyticsLocations: u,
                        analyticsSourceLocation: p,
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: r,
                        onRedeemVirtualCurrency: s,
                        handleStepChange: t,
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(G.dZ, { children: (0, i.jsx)(tr.T, { ...E }) }),
                        (0, i.jsx)(G.UX, { children: (0, i.jsx)(ts.lo, { primaryButtonProps: m }) }),
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
                        overrideAnalyticParams: a,
                        children: o,
                    } = e,
                    {
                        orbProductContext: u,
                        isRedeeming: c,
                        orbRedemptionError: d,
                        onRedeemVirtualCurrency: p,
                    } = ((e) => {
                        let { skuId: t, loadId: n, analyticsLocations: l, onCheckoutSuccess: i } = e,
                            r = (0, Z.bG)([ea.default], () => eo.Ay.canUseShopDiscounts(ea.default.getCurrentUser())),
                            s = (0, Z.bG)([eU.A], () => eU.A.get(t), [t]),
                            a = (0, e7.JL)({ sku: s }),
                            { product: o } = (0, eu.q)(t),
                            u = (0, C.useMemo)(() => {
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
                                isSubmitting: d,
                                error: p,
                            } = (0, tC.Q)({ skuId: t, loadId: n }),
                            m = (0, C.useCallback)(
                                (e) => {
                                    c(t, n, (n) => {
                                        i?.({ entitlements: n, skuId: t }), e(n);
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
                    })({ skuId: t, loadId: l, analyticsLocations: n }),
                    m = ((e) => {
                        let { orbProductContext: t, onClose: n, overrideAnalyticParams: l } = e;
                        return {
                            analyticsDataOverride: (0, C.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...l,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, l]),
                            onClose: (0, C.useCallback)(async () => {
                                await n();
                            }, [n]),
                            skipConfirm: !0,
                        };
                    })({ onClose: s.onClose, orbProductContext: u, overrideAnalyticParams: a }),
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
                    children: (0, i.jsx)(tW.g, { customPaymentModalProps: m, children: o }),
                });
            },
            overrideAnalyticParams: { payment_gateway: ey.kM.VIRTUAL_CURRENCY, currency: eg.Yri.DISCORD_ORB },
        },
    },
    tk = {
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
var tM = n(735305),
    tU = n(295405);
let tF = (e) => {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        r = C.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(tU.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, i.jsx)(tM.x, { ...l, onReturn: r });
};
var tb = n(545075);
let tw = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, C.useRef)(!1),
            { blockedPayments: r } = (0, _.P5)(),
            { handleStepChange: s } = t;
        return ((0, C.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(tb.oO, {})
            : null;
    },
    tD = {
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
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = tk[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = tD[e]),
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
              ? { key: null, renderStep: (e) => (0, i.jsx)(tw, { paymentModalStepProps: e, defaultStep: a.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, i.jsx)(o.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== l.C.ORB_CHECKOUT)
            return {
                key: a.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, i.jsx)(tF, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => W.intl.string(W.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(a.pn.REVIEW);
        return {
            key: a.pn.REVIEW,
            renderStep: (t) => (0, i.jsx)(e, { ...t }),
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
            c = (0, tT.q1)({ location: "UnifiedCheckoutFlowManager", unifiedCheckoutFlow: this.checkoutFlow });
        d.default.track(eg.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: r,
            payment_type: eg.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: u,
            sku_id: n,
            sku_product_line: l,
            application_id: i,
            location: a,
            location_stack: s,
            source: o,
            payment_modal_version: "v2",
            checkout_design: c ? tT.rS.UNIFIED : tT.rS.LEGACY,
            checkout_flow: this.checkoutFlow,
            ...this.override_analytic_params,
        });
    }
    openCheckoutModal(e) {
        let {
                openModalOptions: t,
                additionalOptions: l,
                giftContextProps: a,
                onComplete: o,
                onClose: u,
                skuId: c,
                skuProductLine: d,
                discoverySessionId: C,
                applicationId: p,
                analyticsSourceLocation: m,
                analyticsLocations: E,
                analyticsObject: _,
            } = e,
            T = (0, r.A)(),
            { modalKey: h } = t,
            A = this.generateRenderHeader(),
            O = p ?? this.getApplicationIdFor1PShopSKU(c),
            S = !!(null != a && a.isGift),
            I = !1;
        return (0, s.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: S });
                return (n) =>
                    (0, i.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != o && o(e), (I = !0);
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
                onCloseRequest: () => {
                    null != t.onCloseRequest && t.onCloseRequest(I, T), (0, s.closeModal)(h);
                },
                onCloseCallback: () => {
                    I ||
                        this.trackPaymentFlowCanceled({
                            loadId: T,
                            skuId: c,
                            skuProductLine: d,
                            applicationId: O,
                            discoverySessionId: C,
                            analyticsLocations: E,
                            analyticsObject: _,
                            analyticsSourceLocation: m,
                            isGift: S,
                        }),
                        t.onCloseCallback?.();
                },
                modalKey: h,
            },
        );
    }
}
n(584160);
var tG = n(981036),
    tK = n(367644);
let tB = (e) => {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: r,
            renderLeftColumn: s,
            renderRightColumn: o,
            primaryCTAButtonProps: u,
            onBackClick: c,
        } = e,
        { hasPaymentSources: d } = (0, _.P5)(),
        p = d ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS,
        m = C.useCallback(() => t(p), [t, p]),
        E = C.useMemo(
            () =>
                n === l.X.CUSTOM_STEP_BODY
                    ? r()
                    : n === l.X.TWO_COLUMN
                      ? (0, i.jsxs)("div", { className: tK.D, children: [s(), o()] })
                      : null,
            [n, r, s, o],
        ),
        T = C.useMemo(() => ({ ...u, onClick: m, text: W.intl.string(W.t.XiOHRX) }), [u, m]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(G.dZ, { children: E }),
            (0, i.jsx)(G.UX, { children: (0, i.jsx)(tG.cy, { onBackClick: c, primaryCTAButtonProps: T }) }),
        ],
    });
};
var tW = n(551892);
let tV = null,
    tY = null,
    tZ = null;
function tz() {
    return null == tV && (tV = new tH({ checkoutFlow: l.C.ORB_CHECKOUT })), tV;
}
function tq() {
    return null == tY && (tY = new tH({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), tY;
}
function tX() {
    return null == tZ && (tZ = new tH({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), tZ;
}
l.C.ORB_CHECKOUT, l.C.COLLECTIBLES_CHECKOUT, l.C.SLAYER_STOREFRONT_CHECKOUT;
