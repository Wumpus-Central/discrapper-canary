n.d(t, { Mw: () => tz, gf: () => tq.g, Tt: () => t$, XZ: () => l.X, KY: () => t2, CL: () => l.C, Tx: () => t0 });
var l = n(75304);
n(321073);
var i = n(627968),
    r = n(835245),
    s = n(192308),
    a = n(166532),
    o = n(546042),
    u = n(939220),
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
    E = n(64700),
    _ = n(20742),
    T = n(688810),
    h = n(937008),
    A = n(834252),
    O = n(862241),
    S = n(503698),
    I = n.n(S),
    f = n(106778),
    x = n(228366),
    g = n(793574),
    P = n(213530),
    N = n(966971),
    y = n(758836),
    v = n(483764);
let j = { sliderBodyClassName: v.Bz },
    k = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(f.Fk, { ref: n, className: v.Lb, environment: t.current }),
                (0, i.jsx)(P.K, { options: l, className: I()(v.Oh, { [v.R]: !r }) }),
            ],
        });
    };
var R = n(284009),
    L = n.n(R),
    M = n(702841),
    U = n(775602),
    F = n(427675),
    b = n(94420),
    w = n(590180),
    D = n(953150),
    H = n(524246),
    G = n(14368),
    K = n(61750),
    B = n(972607),
    W = n(482132),
    V = n(921925),
    Y = n(788868),
    Z = n(375708);
function z(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: l,
            purchaseError: r,
            appliedUserDiscounts: s,
        } = (0, b.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { application: a, paymentError: o, purchasePreviewError: u } = (0, A.P5)(),
        c = (0, F.gU)(),
        d = (0, M.bG)([w.A], () => w.A.getProduct(l)),
        C = E.useRef(!1);
    L()(null != l, "Expected selectedSkuId"), L()(null != a, "Expected application");
    let p = c[l];
    L()(null != p, "Expected sku");
    let m = null != o || null != r || null != u,
        _ =
            s.length > 0
                ? Z.intl.formatToPlainString(Z.t.VuV3Td, { discountOfferAmount: s[0].discount.amount })
                : void 0;
    return (E.useEffect(() => {
        null == d ||
            m ||
            C.current ||
            ((C.current = !0),
            (0, K.A)({
                product: d,
                overrideTitle: _,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: y.gs.FIAT,
            }));
    }, [d, n, t, m, _]),
    m)
        ? (0, i.jsx)(W.dZ, { children: (0, i.jsx)(V.A, {}) })
        : null;
}
function q(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: r,
            giftRecipient: s,
            giftMessageError: a,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, h.Pv)(),
        c = (0, M.bG)([U.A], () => U.A.useReducedMotion),
        d = E.useRef(null),
        C = (0, b.t4)((e) => e.selectedSkuId),
        p = (0, M.bG)([w.A], () => w.A.getProduct(C)),
        { confettiColors: m } = (0, D.A)(p?.styles);
    return (
        E.useEffect(() => {
            t &&
                null != s &&
                null != C &&
                (u === Y.vQ.USER_PROFILE_WISHLIST || u === Y.vQ.DM_CHANNEL_WISHLIST) &&
                x.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: C, recipientId: s.id });
        }, [t, s, C, u]),
        t
            ? (0, i.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, i.jsx)(B.A, {
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
                          (0, i.jsx)(H.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, G.rA)(p?.categorySkuId),
                              colors: m?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, i.jsx)(z, { ...e })
    );
}
var X = n(17928),
    Q = n(123292),
    J = n(964486),
    $ = n(859040),
    ee = n(993408),
    et = n(575593),
    en = n(452027),
    el = n(922016),
    ei = n(778712),
    er = n(939249),
    es = n(834730),
    ea = n(534514),
    eo = n(986687),
    eu = n(999291),
    ec = n(903209),
    ed = n(287809),
    eC = n(428262),
    ep = n(674658),
    em = n(898461),
    eE = n(203632),
    e_ = n(892118),
    eT = n(536572),
    eh = n(14702),
    eA = n(219103),
    eO = n(525723),
    eS = n(780651);
function eI(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: r,
            previewHeaderClassName: s,
            hideProfilePreview: a,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, h.Pv)(),
        c = (0, X.bG)([ed.default], () => ed.default.getCurrentUser()),
        d = eC.Ay.canUseCollectibles(c),
        C = (0, eu.Ay)(o?.id),
        p = E.useRef(null),
        [m, _] = E.useState(!1),
        { product: T } = (0, ep.q)(t, !0),
        A = E.useMemo(() => (0, ee.fT)(T, d), [T, d]),
        O = (0, eO.V_)(T);
    if (null == T || 0 === T.items.length) return null;
    let [S] = T.items,
        f = (0, eT.VG)(T),
        x = null != o && o.id !== c?.id && T.type !== et.R.BUNDLE && S.type !== et.R.NAMEPLATE && !a;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)("div", {
                className: I()(eS.QU, s),
                children: (0, i.jsx)(en.D, {
                    label: Z.intl.string(Z.t.PpoJzt),
                    children:
                        x &&
                        (0, i.jsx)(
                            el.Y,
                            {
                                targetElementRef: p,
                                align: "center",
                                shouldShow: m,
                                onRequestClose: () => _(!1),
                                preload: () => (0, ec.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(eo.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, ei.FT)(ei._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, em.T)(S) ? S : null,
                                        pendingProfileEffect: (0, eE.C3)(S) ? S : null,
                                        pendingProfileFrame: (0, e_.s)(S) ? S : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, i.jsx)(er.D, {
                                        ...l,
                                        className: eS.Nx,
                                        innerRef: p,
                                        onClick: (e) => {
                                            _((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            m ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, i.jsx)(es.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: Z.intl.string(Z.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            C?.userId,
                        ),
                }),
            }),
            (0, i.jsxs)("div", {
                className: I()(eS.i1, null != u ? eS.cN : eS.no),
                children: [
                    (0, i.jsxs)("div", {
                        className: eS.Ug,
                        children: [
                            (0, i.jsx)(eh.O, { product: T }),
                            (0, i.jsxs)("div", {
                                className: eS.JZ,
                                children: [
                                    (0, i.jsx)(es.E, { variant: "text-md/semibold", children: f }),
                                    (0, i.jsx)(ea.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            T?.type === et.R.BUNDLE
                                                ? null
                                                : S.type === et.R.AVATAR_DECORATION
                                                  ? Z.intl.string(Z.t["7v0T9P"])
                                                  : S.type === et.R.NAMEPLATE
                                                    ? Z.intl.string(Z.t.x5CoXR)
                                                    : S.type === et.R.PROFILE_EFFECT
                                                      ? Z.intl.string(Z.t.wR5wOo)
                                                      : S.type === et.R.PROFILE_FRAME
                                                        ? Z.intl.string(Z.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(eA.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: A,
                                discountOfferAmount: O,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, i.jsx)("div", {
                            className: eS.Wh,
                            children: (0, i.jsx)(es.E, {
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
var ef = n(734925),
    ex = n(687033),
    eg = n(871181),
    eP = n(318007),
    eN = n(285719),
    ey = n(976860),
    ev = n(652215),
    ej = n(353791);
function ek(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, T.Ay)(g.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(Q.Q, {
        text: Z.intl.string(Z.t.J82mpK),
        onClick: function () {
            t(),
                (0, s.closeAllModals)(),
                null == n
                    ? (0, $.Cz)({ analyticsLocations: l, analyticsSource: g.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, ey.pX)(`${ev.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var eR = n(818348);
let eL = (0, E.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    eM = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: l } = (0, E.useContext)(eL);
        return (0, i.jsx)(q, { analyticsLocations: t, hideConfetti: n, confettiCanvas: l, ...e });
    },
    eU = {
        [a.pn.GIFT_CUSTOMIZATION]: () => Z.intl.string(Z.t["JCFN/y"]),
        [a.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => Z.intl.string(Z.t.lDbi6H),
        [a.pn.CONFIRM]: () => "",
    },
    eF = (e) => {
        let { step: t } = e,
            n = eU[t];
        return null == n ? null : (0, i.jsx)(_.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    eb = {
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
                            } = (0, h.Pv)(),
                            { selectedSkuId: C, checkoutInvoicePreview: p } = (0, b.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            E = (0, F.gU)(),
                            _ = (0, X.bG)([ed.default], () => ed.default.getCurrentUser()),
                            T = (0, ex.A)(),
                            A = async (e, t) => {
                                d(!0),
                                    null != s && a(),
                                    (await (0, $.JJ)(e.id, t)) || a(Z.intl.string(Z.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, J.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== Y.vQ.DM_CHANNEL_WISHLIST &&
                                    m.default.track(ev.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                A(u, C));
                        });
                        let O = () =>
                            (0, i.jsx)(eg.A, {
                                onTextChange: (e) => r?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: ej.iX,
                                innerClassName: ej.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, i.jsx)("div", { className: ej.qL, children: (0, i.jsx)(eP.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, ee.pA)({ invoicePreview: p, selectedSkuId: C, skusById: E });
                                return c === Y.vQ.USER_PROFILE_WISHLIST || c === Y.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(eN.Z, { giftRecipient: u }),
                                              O(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(eI, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: ej.uW,
                                                      previewHeaderClassName: ej.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, i.jsx)("div", {
                                                  className: ej.fi,
                                                  children: (0, i.jsx)(ek, { handleClose: n, selectedSkuId: C }),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(ef.A, {
                                                  selectedSkuId: C,
                                                  recipients: T,
                                                  className: ej.uh,
                                                  validateSelectedGift: A,
                                              }),
                                              O(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(eI, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: ej.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == u || u.id === _?.id || l.length > Y.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = E.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, i.jsx)(tz, {
                    paymentModalStepProps: e,
                    layout: l.X.TWO_COLUMN,
                    renderLeftColumn: r,
                    renderRightColumn: s,
                    primaryCTAButtonProps: u,
                });
            },
            [a.pn.REVIEW]: O._M,
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
                        setCustomConfettiVisible: C,
                        customConfettiDisplayOptions: p,
                        hideConfirmStepConfetti: m,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = E.useRef(new f.OH()),
                            [l, i] = E.useState(null),
                            [r, s] = E.useState(!1),
                            a = E.useMemo(() => (0, N.AB)({ purchaseType: y.gs.FIAT, skuId: t }), [t]);
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
                    { analyticsLocations: _ } = ((e) => {
                        let { analyticsLocations: t } = e,
                            { analyticsLocations: n } = (0, T.Ay)([...t, g.A.COLLECTIBLES_PAYMENT_MODAL]);
                        return { analyticsLocations: n };
                    })({ analyticsLocations: n ?? [] }),
                    h = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    O = (0, E.useMemo)(
                        () => ({
                            analyticsLocations: _,
                            skuIDs: h,
                            setCustomConfettiVisible: C,
                            hideConfirmStepConfetti: m,
                            confettiCanvas: u,
                        }),
                        [_, h, C, m, u],
                    ),
                    S = a.onClose,
                    {
                        paymentModalSkuId: I,
                        paymentModalOnClose: P,
                        paymentModalOnComplete: v,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: i } = e,
                            r = t[0] ?? null,
                            s = E.useCallback(() => {
                                i(!0), l?.();
                            }, [l, i]);
                        return {
                            paymentModalSkuId: r,
                            paymentModalOnClose: E.useCallback(
                                (e) => {
                                    i(!1), n(e), x.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, i],
                            ),
                            paymentModalOnComplete: s,
                        };
                    })({
                        onClose: E.useCallback(
                            (e) => {
                                l.onClose(), null != S && S(e);
                            },
                            [l, S],
                        ),
                        onComplete: a.onComplete,
                        skuIDs: h,
                        setCustomConfettiVisible: C,
                    }),
                    j = null != r ? r.onStepChange : void 0,
                    R = (0, E.useMemo)(
                        () => ({
                            skuId: I,
                            onClose: P,
                            onComplete: v,
                            applicationId: ev.FYj,
                            initialPlanId: null,
                            analyticsLocations: _,
                            onStepChange: j,
                            hideShadow: !0,
                            transitionState: l.transitionState,
                            returnRef: l.returnRef,
                        }),
                        [I, P, v, _, l.transitionState, l.returnRef, j],
                    );
                return (0, i.jsxs)(T.f5, {
                    value: _,
                    children: [
                        (0, i.jsx)(k, {
                            environment: o,
                            setConfettiCanvas: c,
                            customConfettiDisplayOptions: p,
                            customConfettiVisible: d,
                        }),
                        (0, i.jsx)(A.PaymentContextProvider, {
                            ...a,
                            skuIDs: h,
                            stepConfigs: a.stepConfigs,
                            activeSubscription: null,
                            purchaseType: eR.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, i.jsx)(eL.Provider, {
                                value: O,
                                children: (0, i.jsx)(tq.g, { customPaymentModalProps: R, children: s }),
                            }),
                        }),
                    ],
                });
            },
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, h.Pv)();
            return n ? (0, i.jsx)(eF, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eM, { ...e }), options: j },
    };
var ew = n(429913),
    eD = n(67480),
    eH = n(328968),
    eG = n(733391),
    eK = n(821609),
    eB = n(318254),
    eW = n(262427),
    eV = n(510022),
    eY = n(317560),
    eZ = n(366523),
    ez = n(208733);
function eq(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, T.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, b.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, A.P5)(),
        a = (0, F.gU)(),
        { isGift: o, giftRecipient: u } = (0, h.Pv)();
    L()(null != l, "Expected selectedSkuId"), L()(null != s, "Expected application");
    let c = a[l];
    L()(null != c, "Expected sku");
    let d = r.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (E.useEffect(() => {
            o || ((0, eY.j)(), t(), (0, eV.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: C }));
        }, [o, c, s, t, n, C]),
        !o)
    )
        return null;
    let p = null != C && C > 0;
    return (0, i.jsxs)(W.dZ, {
        children: [
            (0, i.jsx)(V.A, {}),
            (0, i.jsxs)("div", {
                className: ez.EL,
                children: [
                    (0, i.jsx)(eZ.e, { sku: c, shape: "square", containerClassName: ez.LC }),
                    (0, i.jsx)(ea.D, {
                        variant: "heading-xl/semibold",
                        className: ez.RS,
                        children: Z.intl.string(Z.t["5glWta"]),
                    }),
                    (0, i.jsx)(es.E, {
                        variant: "text-md/normal",
                        children: Z.intl.formatToPlainString(Z.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    p &&
                        (0, i.jsx)("div", {
                            className: ez.Is,
                            children: (0, i.jsx)(eW.J, {
                                Icon: eB.C,
                                text: Z.intl.format(Z.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: ez.UD,
                        children: (0, i.jsx)(eK.$, { onClick: t, text: Z.intl.string(Z.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var eX = n(889137),
    eQ = n(735438),
    eJ = n.n(eQ),
    e$ = n(742158),
    e0 = n(683071),
    e2 = n(313961),
    e7 = n(765441),
    e8 = n(238017),
    e1 = n(650588),
    e3 = n(723090),
    e5 = n(763827),
    e6 = n(403362),
    e4 = n(871123),
    e9 = n(832163),
    te = n(44724),
    tt = n(980094),
    tn = n(627363),
    tl = n(587895),
    ti = n(71393),
    tr = n(806931),
    ts = n(107610);
function ta(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        r = E.useCallback(() => {
            (0, te.X)({ guildId: n.id });
        }, [n.id]),
        a = E.useCallback(() => {
            t();
            let e = e9.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(ev.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, l.id)) ||
                ((0, s.closeAllModals)(),
                (0, te.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: l.id, slug: l.slug }));
        }, [n.id, l.id, l.slug, t]);
    return (0, i.jsx)("div", {
        className: ts.$O,
        children: (0, i.jsx)(Q.Q, {
            text: Z.intl.string(Z.t.ImioFL),
            onMouseDown: r,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let to = {
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
                        } = (0, h.Pv)(),
                        O = (0, b.t4)((e) => e.selectedSkuId),
                        { application: S } = (0, A.P5)(),
                        I = (0, X.bG)([ed.default], () => ed.default.getCurrentUser()),
                        f =
                            ((t = I?.id),
                            (n = (0, e7.A)()),
                            (l = (function (e) {
                                let t = (0, X.bG)([e5.A], () => (e5.A.isConnected() ? e5.A.getChannelId() : null)),
                                    [n, l] = E.useState([]);
                                return (
                                    E.useEffect(() => {
                                        let n = null != t ? e2.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, tr.Xw)(t) && !(0, tr.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, tr.Ay)(e) && !(0, tr.Ay)(t)
                                                ? -1
                                                : (0, tr.Ay)(t) && !(0, tr.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, X.yK)([ed.default], () => T?.map(ed.default.getUser).filter(e6.Vq) ?? [], [T])),
                            E.useMemo(
                                () =>
                                    eJ().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        x = (0, X.bG)([eD.A], () => (null != O ? eD.A.get(O) : null), [O]),
                        { normalPrice: g, discountedPrice: P } = (0, e3.CD)({
                            sku: x,
                            priceSetAssignmentPurchaseType: ev.lid.GIFT,
                        }),
                        N = (0, e4.fq)(x),
                        y = (0, e4.xf)(x),
                        v = (function (e) {
                            let { shouldFetchIfMissing: t } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = (0, e4.bF)(e),
                                l = e?.applicationId,
                                i = (0, X.bG)([tl.A], () => (null != l ? tl.A.getApplication(l) : null), [l]),
                                r = i?.guildId,
                                s = (0, X.bG)([ti.A], () => (null != r ? ti.A.getGuild(r) : null), [r]);
                            return (
                                E.useEffect(() => {
                                    n && t && null == s && null != e && tn.Ay.fetchApplication(e.applicationId, !0);
                                }, [s, e, t, n]),
                                n ? s : null
                            );
                        })(x, { shouldFetchIfMissing: !0 }),
                        j = async (e, t) => {},
                        k = (e) => {
                            null != m && m(null == e ? void 0 : e);
                        },
                        R = () =>
                            (0, i.jsxs)("div", {
                                className: ts.mT,
                                children: [
                                    null != N &&
                                        (0, i.jsx)(eZ.A, {
                                            containerClassName: ts.T3,
                                            cardImage: N,
                                            cardBackgroundImage: y,
                                            altText: x?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: ts._T,
                                        children: [
                                            (0, i.jsx)(e1.A, { sound: C, onSelect: k }),
                                            (0, i.jsx)(e8.A, {
                                                setEmojiConfetti: p,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        L = () => {
                            let e = x?.orbsReward;
                            return (0, i.jsxs)("div", {
                                className: ts.Tc,
                                children: [
                                    null != c && (_ === Y.vQ.USER_PROFILE_WISHLIST || _ === Y.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(eN.Z, { giftRecipient: c })
                                        : (0, i.jsx)(ef.A, {
                                              selectedSkuId: O,
                                              validateSelectedGift: j,
                                              recipients: f,
                                          }),
                                    (0, i.jsx)(eg.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: ts.iX,
                                        innerClassName: ts.pt,
                                    }),
                                    null == x
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: ts.AN,
                                              children: [
                                                  (0, i.jsx)(e$.z, {
                                                      className: ts.jr,
                                                      children: Z.intl.string(Z.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: ts.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: ts.Xb,
                                                              children:
                                                                  null != x &&
                                                                  null != N &&
                                                                  (0, i.jsx)(eZ.A, {
                                                                      containerClassName: ts.Iy,
                                                                      cardImage: N,
                                                                      cardBackgroundImage: y,
                                                                      altText: x.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: ts.vz,
                                                              children: [
                                                                  null != S && (0, i.jsx)(tt.Q, { application: S }),
                                                                  (0, i.jsx)(es.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: x.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(es.E, {
                                                              variant: "text-md/semibold",
                                                              children: P ?? g,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != x &&
                                        (0, e4.Ri)(x) &&
                                        (0, i.jsx)(e0.w, { type: "info", children: Z.intl.string(Z.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(eW.J, {
                                            Icon: eB.C,
                                            text: Z.intl.format(Z.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != v && null != x && (0, i.jsx)(ta, { handleClose: a, sku: x, guild: v }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: ts.Du, children: [R(), L()] }),
                        getLeftColumnComponent: R,
                        getRightColumnComponent: L,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === I?.id || o.length > Y.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = E.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(tz, {
                paymentModalStepProps: e,
                layout: l.X.CUSTOM_STEP_BODY,
                renderStepBody: r,
                primaryCTAButtonProps: a,
            });
        },
        [a.pn.REVIEW]: O._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eq, { ...e }) },
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
                    analyticsSourceLocation: C,
                    ...p
                } = e,
                { analyticsLocations: m } = ((e) => {
                    let { applicationId: t, skuId: n, analyticsLocations: l } = e,
                        { analyticsLocations: i } = (0, T.Ay)(l, g.A.SLAYER_STOREFRONT_PAYMENT_MODAL),
                        r = (0, ew.h)(t);
                    return (
                        E.useEffect(() => {
                            null == r ||
                                null == r.guildId ||
                                null == n ||
                                eH.A.isFetchingForSKU(n) ||
                                null != eD.A.get(n) ||
                                (0, eG.qf)(r.guildId, n);
                        }, [r, n]),
                        { analyticsLocations: i }
                    );
                })({ applicationId: r, skuId: a, analyticsLocations: o }),
                _ = u.onClose,
                h = E.useCallback(
                    (e) => {
                        _(), null != c && c(e);
                    },
                    [_, c],
                ),
                O = E.useMemo(
                    () => ({
                        onClose: h,
                        onComplete: d,
                        applicationId: r,
                        skuId: a,
                        initialPlanId: null,
                        analyticsObject: C,
                        analyticsLocations: m,
                    }),
                    [h, d, r, a, C, m],
                );
            return (0, i.jsx)(T.f5, {
                value: m,
                children: (0, i.jsx)(A.PaymentContextProvider, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: r,
                    skuIDs: [a],
                    purchaseType: eR.VV.ONE_TIME,
                    isGift: s,
                    ...p,
                    activeSubscription: null,
                    children: (0, i.jsx)(tq.g, { customPaymentModalProps: O, children: t }),
                }),
            });
        },
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, eX.YW)(t)
                .with(a.pn.GIFT_CUSTOMIZATION, () => Z.intl.string(Z.t["JCFN/y"]))
                .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => Z.intl.string(Z.t.lDbi6H))
                .with(a.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(_.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var tu = n(717925),
    tc = n(480642),
    td = n(944355),
    tC = n(977445),
    tp = n(908419),
    tm = n(623373),
    tE = n(739508),
    t_ = n(902130);
(0, r.A)();
var tT = n(136857),
    th = n(566980),
    tA = n(855104),
    tO = n(120700),
    tS = n(742810),
    tI = n(426398);
n(322076);
var tf = n(289873),
    tx = n(241989),
    tg = n(576052),
    tP = n(120992),
    tN = n(194256),
    ty = n(319820),
    tv = n(327105),
    tj = n(200766);
let tk = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, ty.AO)({ sku: t }),
            s = (0, tN.oO)(l);
        r ? (s = Z.intl.string(tv.default.qwSlCO)) : (0, tm.Ab)(l) && (s = Z.intl.string(Z.t["0TmQRG"]));
        let a = (0, tN.dL)(t),
            o = (0, y.EZ)(t.id) ? tg.m[t.id].render({ className: tj.$ }) : (0, i.jsx)(tx.WH, { sku: t, product: l });
        return (0, i.jsx)(tx.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: eB.C,
        });
    },
    tR = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, tP.A)({ applicationId: (0, p.P)(t), skuIDs: [t] });
        let l = (0, M.bG)([eD.A], () => eD.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(tf.y, { type: tf.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(tk, { sku: l, orbPriceAmount: n });
    },
    tL = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(td.vW, { label: Z.intl.string(Z.t.y0WGqP), value: null != t ? `${t}` : "", Icon: eB.C });
    },
    tM = () => Z.intl.string(Z.t.wmcDyu);
function tU() {
    let { immediateDelivery: e } = (0, tp.U)(),
        t = tM();
    return (0, i.jsx)(td._P, {
        variant: { type: td.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let tF = (0, E.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsLocations: [],
        analyticsSourceLocation: void 0,
    }),
    tb = {
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
                        analyticsSourceLocation: c,
                    } = (0, E.useContext)(tF),
                    { primaryButtonProps: d, ...C } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                analyticsLocations: l,
                                orbProductContext: r,
                                isRedeeming: s,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: u,
                                handleStepChange: c,
                            } = e,
                            {
                                isStepLoading: d,
                                orbPriceAmount: C,
                                orbBalanceToDisplay: _,
                                onClickCheckout: T,
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
                                    { selectedSkuId: u, setPurchaseState: c } = (0, b.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                    })),
                                    d = (0, tA.gN)(),
                                    C = (0, E.useRef)(d),
                                    { emitOrbCheckoutPaymentFlowEvent: _ } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: i,
                                            } = e,
                                            { activitySessionId: r } = (0, A.P5)(),
                                            { hasPaymentSources: s } = (0, tI.jm)(),
                                            {
                                                loadId: o,
                                                startTime: u,
                                                discoverySessionId: c,
                                            } = (0, b.t4)((e) => e.contextMetadata),
                                            d = (0, E.useMemo)(() => {
                                                let e;
                                                return {
                                                    load_id: o,
                                                    discovery_session_id: c,
                                                    application_id: (0, p.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: r,
                                                    payment_gateway: eR.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: ev.Yri.DISCORD_ORB,
                                                    ...(null != i && { source: i }),
                                                    ...((e = (0, tS.q1)({
                                                        location: "OrbCheckoutModal",
                                                        unifiedCheckoutFlow: tO.C.ORB_CHECKOUT,
                                                    })),
                                                    {
                                                        payment_type: ev.frM[ev.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: e ? tS.rS.UNIFIED : tS.rS.LEGACY,
                                                        checkout_flow: tO.C.ORB_CHECKOUT,
                                                    }),
                                                };
                                            }, [o, c, r, t, l, i, n]);
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, E.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === ev.HAw.PAYMENT_FLOW_STARTED
                                                        ? m.default.track(ev.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...d,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: eR.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === ev.HAw.PAYMENT_FLOW_LOADED
                                                          ? m.default.track(ev.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...d,
                                                                has_saved_payment_source: s,
                                                                initial_step: a.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === ev.HAw.PAYMENT_FLOW_CANCELED
                                                            ? m.default.track(ev.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...d,
                                                                  duration_ms: n,
                                                              })
                                                            : e === ev.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? m.default.track(ev.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...d,
                                                                    duration_ms: n,
                                                                })
                                                              : e === ev.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? m.default.track(ev.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                  })
                                                                : e === ev.HAw.PAYMENT_FLOW_FAILED &&
                                                                  m.default.track(ev.HAw.PAYMENT_FLOW_FAILED, {
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
                                        analyticsLocations: r,
                                        analyticsSourceLocation: s,
                                    });
                                (0, J.Ay)(() => {
                                    _(ev.HAw.PAYMENT_FLOW_LOADED);
                                }),
                                    (0, E.useEffect)(() => {
                                        null != l &&
                                            null !== C.current &&
                                            (_(ev.HAw.PAYMENT_FLOW_FAILED, l), (C.current = null));
                                    }, [l, _]);
                                let T = (0, E.useCallback)(() => {
                                        (C.current = d),
                                            _(ev.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(th.h.COMPLETED),
                                                    o(a.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, d, _, o]),
                                    h = C.current ?? d,
                                    O = null != i ? i.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == i,
                                    showCollectiblesDiscountWarning: (0, eO.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, E.useMemo)(
                                        () =>
                                            null == l
                                                ? null
                                                : l.code === tT.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                  ? Z.intl.string(Z.t.keFvXM)
                                                  : l.code === tT.tG.ALREADY_PURCHASED
                                                    ? Z.intl.string(Z.t.m371Mx)
                                                    : Z.intl.string(Z.t.fqJZ11),
                                        [l],
                                    ),
                                    orbPriceAmount: O,
                                    orbBalanceToDisplay: h,
                                    onClickCheckout: T,
                                    selectedSkuId: u,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                analyticsLocations: l,
                                orbProductContext: r,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: u,
                                handleStepChange: c,
                            }),
                            S = (0, X.bG)([eD.A], () => eD.A.get(t), [t]),
                            I = (0, tC.u)(S?.applicationId),
                            {
                                disabled: f,
                                tooltipText: x,
                                text: g,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: i, tooltipText: r } = (0, E.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: Z.intl.string(Z.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: Z.intl.string(Z.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: i, tooltipText: r, text: tM() };
                            })({ orbBalance: _, orbPriceAmount: C, isInTestMode: I }),
                            P = (0, E.useMemo)(
                                () => ({ onClick: T, loading: s, text: g, disabled: f, tooltipText: x }),
                                [T, s, g, f, x],
                            ),
                            N = h ? Z.intl.format(Z.t.fsOXXO, {}) : null,
                            y = I ? Z.intl.string(Z.t.OvMyMd) : null;
                        return {
                            isStepLoading: d,
                            upperInlineNoticeProps: (0, E.useMemo)(() => {
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
                            purchaseItemContent: (0, i.jsx)(tR, { skuId: t, orbPriceAmount: C }),
                            paymentSelectContent: (0, i.jsx)(tL, { orbBalance: _ }),
                            legalContent: (0, i.jsx)(tU, {}),
                            primaryButtonProps: P,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: o,
                        analyticsLocations: u,
                        analyticsSourceLocation: c,
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: r,
                        onRedeemVirtualCurrency: s,
                        handleStepChange: t,
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(W.dZ, { children: (0, i.jsx)(tu.T, { ...C }) }),
                        (0, i.jsx)(W.UX, { children: (0, i.jsx)(tc.lo, { primaryButtonProps: d }) }),
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
                        onRedeemVirtualCurrency: C,
                    } = ((e) => {
                        let { skuId: t, loadId: n, analyticsLocations: l, onCheckoutSuccess: i, order: r } = e,
                            s = (0, X.bG)([ed.default], () => eC.Ay.canUseShopDiscounts(ed.default.getCurrentUser())),
                            a = (0, X.bG)([eD.A], () => eD.A.get(t), [t]),
                            o = (0, e3.JL)({ sku: a }),
                            { product: u } = (0, ep.q)(t),
                            c = (0, E.useMemo)(() => {
                                if (null != o) return { orbPriceAmount: o.amount };
                                if (null != u) {
                                    let e = (0, tm.CW)({ product: u, hasShopDiscount: s });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [o, u, s]);
                        c?.orbPriceAmount == null &&
                            (0, tE.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: d,
                                isSubmitting: C,
                                error: p,
                            } = (0, t_.Q)({ skuId: t, loadId: n, order: r }),
                            m = (0, E.useCallback)(
                                (e) => {
                                    d(t, n, (n) => {
                                        i?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, d, i],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            analyticsLocations: l ?? [],
                            orbProductContext: c,
                            onRedeemVirtualCurrency: m,
                            isRedeeming: C,
                            orbRedemptionError: p,
                        };
                    })({ skuId: t, loadId: l, analyticsLocations: n, order: (0, b.t4)((e) => e.order) }),
                    p = ((e) => {
                        let { orbProductContext: t, onClose: n, overrideAnalyticParams: l } = e;
                        return {
                            analyticsDataOverride: (0, E.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...l,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, l]),
                            onClose: (0, E.useCallback)(async () => {
                                await n();
                            }, [n]),
                            skipConfirm: !0,
                        };
                    })({ onClose: s.onClose, orbProductContext: u, overrideAnalyticParams: a }),
                    m = (0, E.useMemo)(
                        () => ({
                            orbProductContext: u,
                            isRedeeming: c,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: C,
                            skuId: t,
                            analyticsLocations: n,
                            analyticsSourceLocation: r,
                        }),
                        [u, c, d, C, t, n, r],
                    );
                return (0, i.jsx)(tF.Provider, {
                    value: m,
                    children: (0, i.jsx)(tq.g, { customPaymentModalProps: p, children: o }),
                });
            },
            overrideAnalyticParams: { payment_gateway: eR.kM.VIRTUAL_CURRENCY, currency: ev.Yri.DISCORD_ORB },
        },
    },
    tw = {
        [l.C.ORB_CHECKOUT]: {
            flowType: l.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: ev.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tb,
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            flowType: l.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: ev.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eb,
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: l.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: ev.VVm.ONE_TIME,
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
var tD = n(735305),
    tH = n(295405);
let tG = (e) => {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        r = E.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(tH.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, i.jsx)(tD.x, { ...l, onReturn: r });
};
var tK = n(545075);
let tB = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, E.useRef)(!1),
            { blockedPayments: r } = (0, A.P5)(),
            { handleStepChange: s } = t;
        return ((0, E.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(tK.oO, {})
            : null;
    },
    tW = {
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
class tV {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = tw[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = tW[e]),
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
              ? { key: null, renderStep: (e) => (0, i.jsx)(tB, { paymentModalStepProps: e, defaultStep: a.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, i.jsx)(o.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== l.C.ORB_CHECKOUT)
            return {
                key: a.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, i.jsx)(tG, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => Z.intl.string(Z.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(a.pn.REVIEW);
        return {
            key: a.pn.REVIEW,
            renderStep: (t) => (0, i.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => Z.intl.string(Z.t.QBnNHq) },
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
              ? ev.FYj
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
            c = (0, tS.q1)({ location: "UnifiedCheckoutFlowManager", unifiedCheckoutFlow: this.checkoutFlow });
        m.default.track(ev.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: r,
            payment_type: ev.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: u,
            sku_id: n,
            sku_product_line: l,
            application_id: i,
            location: a,
            location_stack: s,
            source: o,
            payment_modal_version: "v2",
            checkout_design: c ? tS.rS.UNIFIED : tS.rS.LEGACY,
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
                discoverySessionId: p,
                applicationId: m,
                analyticsSourceLocation: E,
                analyticsLocations: _,
                analyticsObject: T,
            } = e,
            h = { current: (0, r.A)() },
            A = { current: null },
            O = (e) => {
                (h.current = e.id), (A.current = e);
            },
            { modalKey: S } = t,
            I = this.generateRenderHeader(),
            f = m ?? this.getApplicationIdFor1PShopSKU(c),
            x = !!(null != a && a.isGift),
            g = !1;
        return (0, s.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: x });
                return (n) =>
                    (0, i.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != o && o(e), (g = !0);
                        },
                        onClose: u,
                        renderHeader: I,
                        skuId: c,
                        loadId: h.current,
                        onOrderCreated: O,
                        discoverySessionId: p,
                        applicationId: f,
                        analyticsLocations: _,
                        analyticsSourceLocation: E,
                        renderModalProps: n,
                        giftContextProps: a,
                        additionalOptions: l,
                    });
            },
            {
                ...t,
                onCloseRequest: () => {
                    null != t.onCloseRequest && t.onCloseRequest(g, h.current), (0, s.closeModal)(S);
                },
                onCloseCallback: () => {
                    g ||
                        (C({ checkoutSucceeded: g, order: A.current }),
                        this.trackPaymentFlowCanceled({
                            loadId: h.current,
                            skuId: c,
                            skuProductLine: d,
                            applicationId: f,
                            discoverySessionId: p,
                            analyticsLocations: _,
                            analyticsObject: T,
                            analyticsSourceLocation: E,
                            isGift: x,
                        })),
                        t.onCloseCallback?.();
                },
                modalKey: S,
            },
        );
    }
}
n(584160);
var tY = n(981036),
    tZ = n(367644);
let tz = (e) => {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: r,
            renderLeftColumn: s,
            renderRightColumn: o,
            primaryCTAButtonProps: u,
            onBackClick: c,
        } = e,
        { hasPaymentSources: d } = (0, tI.jm)(),
        C = d ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS,
        p = E.useCallback(() => t(C), [t, C]),
        m = E.useMemo(
            () =>
                n === l.X.CUSTOM_STEP_BODY
                    ? r()
                    : n === l.X.TWO_COLUMN
                      ? (0, i.jsxs)("div", { className: tZ.D, children: [s(), o()] })
                      : null,
            [n, r, s, o],
        ),
        _ = E.useMemo(() => ({ ...u, onClick: p, text: Z.intl.string(Z.t.XiOHRX) }), [u, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(W.dZ, { children: m }),
            (0, i.jsx)(W.UX, { children: (0, i.jsx)(tY.cy, { onBackClick: c, primaryCTAButtonProps: _ }) }),
        ],
    });
};
var tq = n(551892);
let tX = null,
    tQ = null,
    tJ = null;
function t$() {
    return null == tX && (tX = new tV({ checkoutFlow: l.C.ORB_CHECKOUT })), tX;
}
function t0() {
    return null == tQ && (tQ = new tV({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), tQ;
}
function t2() {
    return null == tJ && (tJ = new tV({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), tJ;
}
l.C.ORB_CHECKOUT, l.C.COLLECTIBLES_CHECKOUT, l.C.SLAYER_STOREFRONT_CHECKOUT;
