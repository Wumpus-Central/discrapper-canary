n.d(t, { Mw: () => tW, gf: () => tV.g, Tt: () => tq, XZ: () => l.X, KY: () => tQ, CL: () => l.C, Tx: () => tX });
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
    _ = n(937008),
    E = n(278521),
    T = n(623020),
    A = n(503698),
    h = n.n(A),
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
                (0, i.jsx)(f.K, { options: l, className: h()(P.Oh, { [P.R]: !r }) }),
            ],
        });
    };
var v = n(284009),
    R = n.n(v),
    L = n(702841),
    k = n(775602),
    j = n(427675),
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
        r = (0, M.t4)((e) => e.appliedUserDiscounts),
        { application: s, paymentError: a, purchaseError: o, purchasePreviewError: u } = (0, E.P5)(),
        c = (0, j.gU)(),
        d = (0, L.bG)([U.A], () => U.A.getProduct(l)),
        p = C.useRef(!1);
    R()(null != l, "Expected selectedSkuId"), R()(null != s, "Expected application");
    let m = c[l];
    R()(null != m, "Expected sku");
    let _ = null != a || null != o || null != u,
        T =
            r.length > 0
                ? W.intl.formatToPlainString(W.t.VuV3Td, { discountOfferAmount: r[0].discount.amount })
                : void 0;
    return (C.useEffect(() => {
        null == d ||
            _ ||
            p.current ||
            ((p.current = !0),
            (0, D.A)({
                product: d,
                overrideTitle: T,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: g.gs.FIAT,
            }));
    }, [d, n, t, _, T]),
    _)
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
        } = (0, _.Pv)(),
        c = (0, L.bG)([k.A], () => k.A.useReducedMotion),
        d = C.useRef(null),
        p = (0, M.t4)((e) => e.selectedSkuId),
        m = (0, L.bG)([U.A], () => U.A.getProduct(p)),
        { confettiColors: E } = (0, F.A)(m?.styles);
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
                              colors: E?.map((e) => e.toHexString()),
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
    es = n(999291),
    ea = n(903209),
    eo = n(287809),
    eu = n(927578),
    ec = n(674658),
    ed = n(898461),
    eC = n(203632),
    ep = n(892118),
    em = n(536572),
    e_ = n(14702),
    eE = n(219103),
    eT = n(525723),
    eA = n(780651);
function eh(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: r,
            previewHeaderClassName: s,
            hideProfilePreview: a,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, _.Pv)(),
        c = (0, Z.bG)([eo.default], () => eo.default.getCurrentUser()),
        d = eu.Ay.canUseCollectibles(c),
        p = (0, es.Ay)(o?.id),
        m = C.useRef(null),
        [E, T] = C.useState(!1),
        { product: A } = (0, ec.q)(t, !0),
        O = C.useMemo(() => (0, Q.fT)(A, d), [A, d]),
        S = (0, eT.V_)(A);
    if (null == A || 0 === A.items.length) return null;
    let [I] = A.items,
        f = (0, em.VG)(A),
        x = null != o && o.id !== c?.id && A.type !== J.R.BUNDLE && I.type !== J.R.NAMEPLATE && !a;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)("div", {
                className: h()(eA.QU, s),
                children: (0, i.jsx)($.D, {
                    label: W.intl.string(W.t.PpoJzt),
                    children:
                        x &&
                        (0, i.jsx)(
                            ee.Y,
                            {
                                targetElementRef: m,
                                align: "center",
                                shouldShow: E,
                                onRequestClose: () => T(!1),
                                preload: () => (0, ea.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(er.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, et.FT)(et._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, ed.T)(I) ? I : null,
                                        pendingProfileEffect: (0, eC.C3)(I) ? I : null,
                                        pendingProfileFrame: (0, ep.s)(I) ? I : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, i.jsx)(en.D, {
                                        ...l,
                                        className: eA.Nx,
                                        innerRef: m,
                                        onClick: (e) => {
                                            T((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            E ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, i.jsx)(el.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: W.intl.string(W.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            p?.userId,
                        ),
                }),
            }),
            (0, i.jsxs)("div", {
                className: h()(eA.i1, null != u ? eA.cN : eA.no),
                children: [
                    (0, i.jsxs)("div", {
                        className: eA.Ug,
                        children: [
                            (0, i.jsx)(e_.O, { product: A }),
                            (0, i.jsxs)("div", {
                                className: eA.JZ,
                                children: [
                                    (0, i.jsx)(el.E, { variant: "text-md/semibold", children: f }),
                                    (0, i.jsx)(ei.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            A?.type === J.R.BUNDLE
                                                ? null
                                                : I.type === J.R.AVATAR_DECORATION
                                                  ? W.intl.string(W.t["7v0T9P"])
                                                  : I.type === J.R.NAMEPLATE
                                                    ? W.intl.string(W.t.x5CoXR)
                                                    : I.type === J.R.PROFILE_EFFECT
                                                      ? W.intl.string(W.t.wR5wOo)
                                                      : I.type === J.R.PROFILE_FRAME
                                                        ? W.intl.string(W.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(eE.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: O,
                                discountOfferAmount: S,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, i.jsx)("div", {
                            className: eA.Wh,
                            children: (0, i.jsx)(el.E, {
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
var eO = n(734925),
    eS = n(687033),
    eI = n(871181),
    ef = n(318007),
    ex = n(285719),
    eg = n(976860),
    eP = n(652215),
    eN = n(353791);
function ey(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, m.Ay)(I.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(z.Q, {
        text: W.intl.string(W.t.J82mpK),
        onClick: function () {
            t(),
                (0, s.closeAllModals)(),
                null == n
                    ? (0, X.Cz)({ analyticsLocations: l, analyticsSource: I.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, eg.pX)(`${eP.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var ev = n(818348);
let eR = (0, C.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    eL = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: l } = (0, C.useContext)(eR);
        return (0, i.jsx)(Y, { analyticsLocations: t, hideConfetti: n, confettiCanvas: l, ...e });
    },
    ek = {
        [a.pn.GIFT_CUSTOMIZATION]: () => W.intl.string(W.t["JCFN/y"]),
        [a.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => W.intl.string(W.t.lDbi6H),
        [a.pn.CONFIRM]: () => "",
    },
    ej = (e) => {
        let { step: t } = e,
            n = ek[t];
        return null == n ? null : (0, i.jsx)(p.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
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
                                setValidatingGiftRecipient: C,
                            } = (0, _.Pv)(),
                            { selectedSkuId: p, checkoutInvoicePreview: m } = (0, M.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            E = (0, j.gU)(),
                            T = (0, Z.bG)([eo.default], () => eo.default.getCurrentUser()),
                            A = (0, eS.A)(),
                            h = async (e, t) => {
                                C(!0),
                                    null != s && a(),
                                    (await (0, X.JJ)(e.id, t)) || a(W.intl.string(W.t["4kgVqQ"])),
                                    C(!1);
                            };
                        (0, q.Ay)(() => {
                            null != p &&
                                null != u &&
                                (c !== B.vQ.DM_CHANNEL_WISHLIST &&
                                    d.default.track(eP.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: p }),
                                h(u, p));
                        });
                        let O = () =>
                            (0, i.jsx)(eI.A, {
                                onTextChange: (e) => r?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: eN.iX,
                                innerClassName: eN.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, i.jsx)("div", { className: eN.qL, children: (0, i.jsx)(ef.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, Q.pA)({ invoicePreview: m, selectedSkuId: p, skusById: E });
                                return c === B.vQ.USER_PROFILE_WISHLIST || c === B.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(ex.Z, { giftRecipient: u }),
                                              O(),
                                              null != e &&
                                                  null != p &&
                                                  (0, i.jsx)(eh, {
                                                      skuId: p,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: eN.uW,
                                                      previewHeaderClassName: eN.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, i.jsx)("div", {
                                                  className: eN.fi,
                                                  children: (0, i.jsx)(ey, { handleClose: n, selectedSkuId: p }),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(eO.A, {
                                                  selectedSkuId: p,
                                                  recipients: A,
                                                  className: eN.uh,
                                                  validateSelectedGift: h,
                                              }),
                                              O(),
                                              null != e &&
                                                  null != p &&
                                                  (0, i.jsx)(eh, {
                                                      skuId: p,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: eN.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == u || u.id === T?.id || l.length > B.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = C.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, i.jsx)(tW, {
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
                        customConfettiDisplayOptions: _,
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
                    { analyticsLocations: A } = ((e) => {
                        let { analyticsLocations: t } = e,
                            { analyticsLocations: n } = (0, m.Ay)([...t, I.A.COLLECTIBLES_PAYMENT_MODAL]);
                        return { analyticsLocations: n };
                    })({ analyticsLocations: n ?? [] }),
                    h = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    f = (0, C.useMemo)(
                        () => ({
                            analyticsLocations: A,
                            skuIDs: h,
                            setCustomConfettiVisible: p,
                            hideConfirmStepConfetti: T,
                            confettiCanvas: u,
                        }),
                        [A, h, p, T, u],
                    ),
                    P = a.onClose,
                    {
                        paymentModalSkuId: N,
                        paymentModalOnClose: v,
                        paymentModalOnComplete: R,
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
                        skuIDs: h,
                        setCustomConfettiVisible: p,
                    }),
                    L = null != r ? r.onStepChange : void 0,
                    k = (0, C.useMemo)(
                        () => ({
                            skuId: N,
                            onClose: v,
                            onComplete: R,
                            applicationId: eP.FYj,
                            initialPlanId: null,
                            analyticsLocations: A,
                            onStepChange: L,
                            hideShadow: !0,
                            transitionState: l.transitionState,
                            returnRef: l.returnRef,
                        }),
                        [N, v, R, A, l.transitionState, l.returnRef, L],
                    );
                return (0, i.jsxs)(m.f5, {
                    value: A,
                    children: [
                        (0, i.jsx)(y, {
                            environment: o,
                            setConfettiCanvas: c,
                            customConfettiDisplayOptions: _,
                            customConfettiVisible: d,
                        }),
                        (0, i.jsx)(E.PaymentContextProvider, {
                            ...a,
                            skuIDs: h,
                            stepConfigs: a.stepConfigs,
                            activeSubscription: null,
                            purchaseType: ev.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, i.jsx)(eR.Provider, {
                                value: f,
                                children: (0, i.jsx)(tV.g, { customPaymentModalProps: k, children: s }),
                            }),
                        }),
                    ],
                });
            },
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, _.Pv)();
            return n ? (0, i.jsx)(ej, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eL, { ...e }), options: N },
    };
var eU = n(429913),
    eF = n(67480),
    eb = n(328968),
    ew = n(733391),
    eD = n(821609),
    eH = n(318254),
    eG = n(262427),
    eK = n(510022),
    eB = n(317560),
    eW = n(366523),
    eV = n(208733);
function eY(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, m.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, M.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, E.P5)(),
        a = (0, j.gU)(),
        { isGift: o, giftRecipient: u } = (0, _.Pv)();
    R()(null != l, "Expected selectedSkuId"), R()(null != s, "Expected application");
    let c = a[l];
    R()(null != c, "Expected sku");
    let d = r.find((e) => e.sku_id === l),
        p = d?.metadata?.orbs_reward;
    if (
        (C.useEffect(() => {
            o || ((0, eB.j)(), t(), (0, eK.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: p }));
        }, [o, c, s, t, n, p]),
        !o)
    )
        return null;
    let T = null != p && p > 0;
    return (0, i.jsxs)(G.dZ, {
        children: [
            (0, i.jsx)(K.A, {}),
            (0, i.jsxs)("div", {
                className: eV.EL,
                children: [
                    (0, i.jsx)(eW.e, { sku: c, shape: "square", containerClassName: eV.LC }),
                    (0, i.jsx)(ei.D, {
                        variant: "heading-xl/semibold",
                        className: eV.RS,
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
                            className: eV.Is,
                            children: (0, i.jsx)(eG.J, {
                                Icon: eH.C,
                                text: W.intl.format(W.t["ZV+aS9"], { orbCount: p }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: eV.UD,
                        children: (0, i.jsx)(eD.$, { onClick: t, text: W.intl.string(W.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var eZ = n(889137),
    ez = n(735438),
    eq = n.n(ez),
    eX = n(742158),
    eQ = n(683071),
    eJ = n(313961),
    e$ = n(765441),
    e0 = n(238017),
    e7 = n(650588),
    e2 = n(723090),
    e1 = n(763827),
    e8 = n(403362),
    e3 = n(871123),
    e5 = n(832163),
    e6 = n(44724),
    e9 = n(980094),
    e4 = n(627363),
    te = n(587895),
    tt = n(71393),
    tn = n(806931),
    tl = n(107610);
function ti(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        r = C.useCallback(() => {
            (0, e6.X)({ guildId: n.id });
        }, [n.id]),
        a = C.useCallback(() => {
            t();
            let e = e5.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(eP.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, l.id)) ||
                ((0, s.closeAllModals)(),
                (0, e6.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: l.id, slug: l.slug }));
        }, [n.id, l.id, l.slug, t]);
    return (0, i.jsx)("div", {
        className: tl.$O,
        children: (0, i.jsx)(z.Q, {
            text: W.intl.string(W.t.ImioFL),
            onMouseDown: r,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let tr = {
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
                            giftingOrigin: A,
                            additionalUserIds: h,
                        } = (0, _.Pv)(),
                        O = (0, M.t4)((e) => e.selectedSkuId),
                        { application: S } = (0, E.P5)(),
                        I = (0, Z.bG)([eo.default], () => eo.default.getCurrentUser()),
                        f =
                            ((t = I?.id),
                            (n = (0, e$.A)()),
                            (l = (function (e) {
                                let t = (0, Z.bG)([e1.A], () => (e1.A.isConnected() ? e1.A.getChannelId() : null)),
                                    [n, l] = C.useState([]);
                                return (
                                    C.useEffect(() => {
                                        let n = null != t ? eJ.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, tn.Xw)(t) && !(0, tn.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, tn.Ay)(e) && !(0, tn.Ay)(t)
                                                ? -1
                                                : (0, tn.Ay)(t) && !(0, tn.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, Z.yK)([eo.default], () => h?.map(eo.default.getUser).filter(e8.Vq) ?? [], [h])),
                            C.useMemo(
                                () =>
                                    eq().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        x = (0, Z.bG)([eF.A], () => (null != O ? eF.A.get(O) : null), [O]),
                        { normalPrice: g, discountedPrice: P } = (0, e2.CD)({
                            sku: x,
                            priceSetAssignmentPurchaseType: eP.lid.GIFT,
                        }),
                        N = (0, e3.fq)(x),
                        y = (0, e3.xf)(x),
                        v = (function (e) {
                            let { shouldFetchIfMissing: t } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = (0, e3.bF)(e),
                                l = e?.applicationId,
                                i = (0, Z.bG)([te.A], () => (null != l ? te.A.getApplication(l) : null), [l]),
                                r = i?.guildId,
                                s = (0, Z.bG)([tt.A], () => (null != r ? tt.A.getGuild(r) : null), [r]);
                            return (
                                C.useEffect(() => {
                                    n && t && null == s && null != e && e4.Ay.fetchApplication(e.applicationId, !0);
                                }, [s, e, t, n]),
                                n ? s : null
                            );
                        })(x, { shouldFetchIfMissing: !0 }),
                        R = async (e, t) => {},
                        L = (e) => {
                            null != T && T(null == e ? void 0 : e);
                        },
                        k = () =>
                            (0, i.jsxs)("div", {
                                className: tl.mT,
                                children: [
                                    null != N &&
                                        (0, i.jsx)(eW.A, {
                                            containerClassName: tl.T3,
                                            cardImage: N,
                                            cardBackgroundImage: y,
                                            altText: x?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: tl._T,
                                        children: [
                                            (0, i.jsx)(e7.A, { sound: p, onSelect: L }),
                                            (0, i.jsx)(e0.A, {
                                                setEmojiConfetti: m,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        j = () => {
                            let e = x?.orbsReward;
                            return (0, i.jsxs)("div", {
                                className: tl.Tc,
                                children: [
                                    null != c && (A === B.vQ.USER_PROFILE_WISHLIST || A === B.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(ex.Z, { giftRecipient: c })
                                        : (0, i.jsx)(eO.A, {
                                              selectedSkuId: O,
                                              validateSelectedGift: R,
                                              recipients: f,
                                          }),
                                    (0, i.jsx)(eI.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: tl.iX,
                                        innerClassName: tl.pt,
                                    }),
                                    null == x
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: tl.AN,
                                              children: [
                                                  (0, i.jsx)(eX.z, {
                                                      className: tl.jr,
                                                      children: W.intl.string(W.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: tl.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: tl.Xb,
                                                              children:
                                                                  null != x &&
                                                                  null != N &&
                                                                  (0, i.jsx)(eW.A, {
                                                                      containerClassName: tl.Iy,
                                                                      cardImage: N,
                                                                      cardBackgroundImage: y,
                                                                      altText: x.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: tl.vz,
                                                              children: [
                                                                  null != S && (0, i.jsx)(e9.Q, { application: S }),
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
                                        (0, e3.Ri)(x) &&
                                        (0, i.jsx)(eQ.w, { type: "info", children: W.intl.string(W.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(eG.J, {
                                            Icon: eH.C,
                                            text: W.intl.format(W.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != v && null != x && (0, i.jsx)(ti, { handleClose: a, sku: x, guild: v }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: tl.Du, children: [k(), j()] }),
                        getLeftColumnComponent: k,
                        getRightColumnComponent: j,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === I?.id || o.length > B.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = C.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(tW, {
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
                    onComplete: d,
                    analyticsSourceLocation: p,
                    ..._
                } = e,
                { analyticsLocations: T } = ((e) => {
                    let { applicationId: t, skuId: n, analyticsLocations: l } = e,
                        { analyticsLocations: i } = (0, m.Ay)(l, I.A.SLAYER_STOREFRONT_PAYMENT_MODAL),
                        r = (0, eU.h)(t);
                    return (
                        C.useEffect(() => {
                            null == r ||
                                null == r.guildId ||
                                null == n ||
                                eb.A.isFetchingForSKU(n) ||
                                null != eF.A.get(n) ||
                                (0, ew.qf)(r.guildId, n);
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
                O = C.useMemo(
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
                children: (0, i.jsx)(E.PaymentContextProvider, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: r,
                    skuIDs: [a],
                    purchaseType: ev.VV.ONE_TIME,
                    isGift: s,
                    ..._,
                    activeSubscription: null,
                    children: (0, i.jsx)(tV.g, { customPaymentModalProps: O, children: t }),
                }),
            });
        },
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, eZ.YW)(t)
                .with(a.pn.GIFT_CUSTOMIZATION, () => W.intl.string(W.t["JCFN/y"]))
                .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => W.intl.string(W.t.lDbi6H))
                .with(a.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(p.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var ts = n(164928),
    ta = n(169797),
    to = n(474367),
    tu = n(977445),
    tc = n(908419),
    td = n(623373),
    tC = n(739508),
    tp = n(715054);
(0, r.A)();
var tm = n(136857),
    t_ = n(566980),
    tE = n(855104),
    tT = n(120700),
    tA = n(742810);
n(322076);
var th = n(289873),
    tO = n(241989),
    tS = n(576052),
    tI = n(120992),
    tf = n(971875),
    tx = n(319820),
    tg = n(327105),
    tP = n(200766);
let tN = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, tx.AO)({ sku: t }),
            s = (0, tf.oO)(l);
        r ? (s = W.intl.string(tg.default.qwSlCO)) : (0, td.Ab)(l) && (s = W.intl.string(W.t["0TmQRG"]));
        let a = (0, tf.dL)(t),
            o =
                t.id === g.Dp.FRACTIONAL_PREMIUM
                    ? tS.m[g.Dp.FRACTIONAL_PREMIUM].render({ className: tP.$ })
                    : (0, i.jsx)(tO.WH, { sku: t, product: l });
        return (0, i.jsx)(tO.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: eH.C,
        });
    },
    ty = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, tI.A)({ applicationId: (0, c.P)(t), skuIDs: [t] });
        let l = (0, L.bG)([eF.A], () => eF.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(th.y, { type: th.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(tN, { sku: l, orbPriceAmount: n });
    },
    tv = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(to.vW, { label: W.intl.string(W.t.y0WGqP), value: null != t ? `${t}` : "", Icon: eH.C });
    },
    tR = () => W.intl.string(W.t.wmcDyu);
function tL() {
    let { immediateDelivery: e } = (0, tc.U)(),
        t = tR();
    return (0, i.jsx)(to._P, {
        variant: { type: to.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let tk = (0, C.createContext)({
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
                    } = (0, C.useContext)(tk),
                    { primaryButtonProps: m, ..._ } = ((e) => {
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
                                orbPriceAmount: _,
                                orbBalanceToDisplay: T,
                                onClickCheckout: A,
                                showCollectiblesDiscountWarning: h,
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
                                    _ = (0, C.useRef)(m),
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
                                            } = (0, E.P5)(),
                                            { loadId: u, startTime: p, discoverySessionId: m } = o,
                                            _ = (0, C.useMemo)(() => {
                                                let e;
                                                return {
                                                    load_id: u,
                                                    discovery_session_id: m,
                                                    application_id: (0, c.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: r,
                                                    payment_gateway: ev.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: eP.Yri.DISCORD_ORB,
                                                    ...(null != i && { source: i }),
                                                    ...((e = (0, tA.q1)({
                                                        location: "OrbCheckoutModal",
                                                        unifiedCheckoutFlow: tT.C.ORB_CHECKOUT,
                                                    })),
                                                    {
                                                        payment_type: eP.frM[eP.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: e ? tA.rS.UNIFIED : tA.rS.LEGACY,
                                                        checkout_flow: tT.C.ORB_CHECKOUT,
                                                    }),
                                                };
                                            }, [u, m, r, t, l, i, n]);
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, C.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - p;
                                                    e === eP.HAw.PAYMENT_FLOW_STARTED
                                                        ? d.default.track(eP.HAw.PAYMENT_FLOW_STARTED, {
                                                              ..._,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: ev.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === eP.HAw.PAYMENT_FLOW_LOADED
                                                          ? d.default.track(eP.HAw.PAYMENT_FLOW_LOADED, {
                                                                ..._,
                                                                has_saved_payment_source: s,
                                                                initial_step: a.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === eP.HAw.PAYMENT_FLOW_CANCELED
                                                            ? d.default.track(eP.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ..._,
                                                                  duration_ms: n,
                                                              })
                                                            : e === eP.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? d.default.track(eP.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ..._,
                                                                    duration_ms: n,
                                                                })
                                                              : e === eP.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? d.default.track(eP.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ..._,
                                                                      duration_ms: n,
                                                                  })
                                                                : e === eP.HAw.PAYMENT_FLOW_FAILED &&
                                                                  d.default.track(eP.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ..._,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [p, _, s],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: i,
                                        analyticsLocations: r,
                                        analyticsSourceLocation: s,
                                    });
                                (0, q.Ay)(() => {
                                    T(eP.HAw.PAYMENT_FLOW_LOADED);
                                }),
                                    (0, C.useEffect)(() => {
                                        null != l &&
                                            null !== _.current &&
                                            (T(eP.HAw.PAYMENT_FLOW_FAILED, l), (_.current = null));
                                    }, [l, T]);
                                let A = (0, C.useCallback)(() => {
                                        (_.current = m),
                                            T(eP.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                p(t_.h.COMPLETED),
                                                    o(a.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, p, m, T, o]),
                                    h = _.current ?? m,
                                    O = null != i ? i.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == i,
                                    showCollectiblesDiscountWarning: (0, eT.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, C.useMemo)(
                                        () =>
                                            null == l
                                                ? null
                                                : l.code === tm.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                  ? W.intl.string(W.t.keFvXM)
                                                  : l.code === tm.tG.ALREADY_PURCHASED
                                                    ? W.intl.string(W.t.m371Mx)
                                                    : W.intl.string(W.t.fqJZ11),
                                        [l],
                                    ),
                                    orbPriceAmount: O,
                                    orbBalanceToDisplay: h,
                                    onClickCheckout: A,
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
                            S = (0, Z.bG)([eF.A], () => eF.A.get(t), [t]),
                            I = (0, tu.u)(S?.applicationId),
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
                            })({ orbBalance: T, orbPriceAmount: _, isInTestMode: I }),
                            P = (0, C.useMemo)(
                                () => ({ onClick: A, loading: s, text: g, disabled: f, tooltipText: x }),
                                [A, s, g, f, x],
                            ),
                            N = h ? W.intl.format(W.t.fsOXXO, {}) : null,
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
                            purchaseItemContent: (0, i.jsx)(ty, { skuId: t, orbPriceAmount: _ }),
                            paymentSelectContent: (0, i.jsx)(tv, { orbBalance: T }),
                            legalContent: (0, i.jsx)(tL, {}),
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
                        (0, i.jsx)(G.dZ, { children: (0, i.jsx)(ts.T, { ..._ }) }),
                        (0, i.jsx)(G.UX, { children: (0, i.jsx)(ta.lo, { primaryButtonProps: m }) }),
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
                            r = (0, Z.bG)([eo.default], () => eu.Ay.canUseShopDiscounts(eo.default.getCurrentUser())),
                            s = (0, Z.bG)([eF.A], () => eF.A.get(t), [t]),
                            a = (0, e2.JL)({ sku: s }),
                            { product: o } = (0, ec.q)(t),
                            u = (0, C.useMemo)(() => {
                                if (null != a) return { orbPriceAmount: a.amount };
                                if (null != o) {
                                    let e = (0, td.CW)({ product: o, hasShopDiscount: r });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [a, o, r]);
                        u?.orbPriceAmount == null &&
                            (0, tC.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: c,
                                isSubmitting: d,
                                error: p,
                            } = (0, tp.Q)({ skuId: t, loadId: n }),
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
                    _ = (0, C.useMemo)(
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
                return (0, i.jsx)(tk.Provider, {
                    value: _,
                    children: (0, i.jsx)(tV.g, { customPaymentModalProps: m, children: o }),
                });
            },
            overrideAnalyticParams: { payment_gateway: ev.kM.VIRTUAL_CURRENCY, currency: eP.Yri.DISCORD_ORB },
        },
    },
    tM = {
        [l.C.ORB_CHECKOUT]: {
            flowType: l.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: eP.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tj,
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            flowType: l.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: eP.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eM,
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: l.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: eP.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tr,
        },
        [l.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_CHECKOUT },
        [l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_APPS_OTP_CHECKOUT },
        [l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [l.C.GUILD_PRODUCT_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_PRODUCT_CHECKOUT },
        [l.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_ROLE_CHECKOUT },
        [l.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_BOOST_CHECKOUT },
    };
var tU = n(735305),
    tF = n(295405);
let tb = (e) => {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        r = C.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(tF.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, i.jsx)(tU.x, { ...l, onReturn: r });
};
var tw = n(545075);
let tD = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, C.useRef)(!1),
            { blockedPayments: r } = (0, E.P5)(),
            { handleStepChange: s } = t;
        return ((0, C.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(tw.oO, {})
            : null;
    },
    tH = {
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
class tG {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = tM[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = tH[e]),
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
                    (0, i.jsx)(tb, {
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
              ? eP.FYj
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
            c = (0, tA.q1)({ location: "UnifiedCheckoutFlowManager", unifiedCheckoutFlow: this.checkoutFlow });
        d.default.track(eP.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: r,
            payment_type: eP.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: u,
            sku_id: n,
            sku_product_line: l,
            application_id: i,
            location: a,
            location_stack: s,
            source: o,
            payment_modal_version: "v2",
            checkout_design: c ? tA.rS.UNIFIED : tA.rS.LEGACY,
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
                analyticsLocations: _,
                analyticsObject: E,
            } = e,
            T = (0, r.A)(),
            { modalKey: A } = t,
            h = this.generateRenderHeader(),
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
                        renderHeader: h,
                        skuId: c,
                        loadId: T,
                        discoverySessionId: C,
                        applicationId: O,
                        analyticsLocations: _,
                        analyticsSourceLocation: m,
                        renderModalProps: n,
                        giftContextProps: a,
                        additionalOptions: l,
                    });
            },
            {
                ...t,
                onCloseRequest: () => {
                    null != t.onCloseRequest && t.onCloseRequest(I, T), (0, s.closeModal)(A);
                },
                onCloseCallback: () => {
                    I ||
                        this.trackPaymentFlowCanceled({
                            loadId: T,
                            skuId: c,
                            skuProductLine: d,
                            applicationId: O,
                            discoverySessionId: C,
                            analyticsLocations: _,
                            analyticsObject: E,
                            analyticsSourceLocation: m,
                            isGift: S,
                        }),
                        t.onCloseCallback?.();
                },
                modalKey: A,
            },
        );
    }
}
n(584160);
var tK = n(981036),
    tB = n(367644);
let tW = (e) => {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: r,
            renderLeftColumn: s,
            renderRightColumn: o,
            primaryCTAButtonProps: u,
            onBackClick: c,
        } = e,
        { hasPaymentSources: d } = (0, E.P5)(),
        p = d ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS,
        m = C.useCallback(() => t(p), [t, p]),
        _ = C.useMemo(
            () =>
                n === l.X.CUSTOM_STEP_BODY
                    ? r()
                    : n === l.X.TWO_COLUMN
                      ? (0, i.jsxs)("div", { className: tB.D, children: [s(), o()] })
                      : null,
            [n, r, s, o],
        ),
        T = C.useMemo(() => ({ ...u, onClick: m, text: W.intl.string(W.t.XiOHRX) }), [u, m]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(G.dZ, { children: _ }),
            (0, i.jsx)(G.UX, { children: (0, i.jsx)(tK.cy, { onBackClick: c, primaryCTAButtonProps: T }) }),
        ],
    });
};
var tV = n(551892);
let tY = null,
    tZ = null,
    tz = null;
function tq() {
    return null == tY && (tY = new tG({ checkoutFlow: l.C.ORB_CHECKOUT })), tY;
}
function tX() {
    return null == tZ && (tZ = new tG({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), tZ;
}
function tQ() {
    return null == tz && (tz = new tG({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), tz;
}
l.C.ORB_CHECKOUT, l.C.COLLECTIBLES_CHECKOUT, l.C.SLAYER_STOREFRONT_CHECKOUT;
