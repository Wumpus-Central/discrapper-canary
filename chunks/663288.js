n.d(t, {
    Mw: () => tq,
    gf: () => tQ.g,
    Tt: () => t8,
    KY: () => t1,
    Tx: () => t7,
    oT: () => t3,
    XZ: () => l.X,
    CL: () => l.C,
});
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
    _ = n(64700),
    T = n(20742),
    E = n(793574),
    A = n(688810),
    h = n(937008),
    O = n(834252),
    S = n(862241),
    I = n(503698),
    x = n.n(I),
    g = n(106778),
    f = n(228366),
    P = n(213530),
    N = n(966971),
    y = n(758836),
    v = n(483764);
let j = { sliderBodyClassName: v.Bz },
    k = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.Fk, { ref: n, className: v.Lb, environment: t.current }),
                (0, i.jsx)(P.K, { options: l, className: x()(v.Oh, { [v.R]: !r }) }),
            ],
        });
    };
var R = n(284009),
    M = n.n(R),
    L = n(702841),
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
        { application: a, paymentError: o, purchasePreviewError: u } = (0, O.P5)(),
        c = (0, F.gU)(),
        d = (0, L.bG)([w.A], () => w.A.getProduct(l)),
        C = _.useRef(!1);
    M()(null != l, "Expected selectedSkuId"), M()(null != a, "Expected application");
    let p = c[l];
    M()(null != p, "Expected sku");
    let m = null != o || null != r || null != u,
        T =
            s.length > 0
                ? Z.intl.formatToPlainString(Z.t.VuV3Td, { discountOfferAmount: s[0].discount.amount })
                : void 0;
    return (_.useEffect(() => {
        null == d ||
            m ||
            C.current ||
            ((C.current = !0),
            (0, K.A)({
                product: d,
                overrideTitle: T,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: y.gs.FIAT,
            }));
    }, [d, n, t, m, T]),
    m)
        ? (0, i.jsx)(W.dZ, { children: (0, i.jsx)(V.A, {}) })
        : null;
}
function X(e) {
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
        c = (0, L.bG)([U.A], () => U.A.useReducedMotion),
        d = _.useRef(null),
        C = (0, b.t4)((e) => e.selectedSkuId),
        p = (0, L.bG)([w.A], () => w.A.getProduct(C)),
        { confettiColors: m } = (0, D.A)(p?.styles);
    return (
        _.useEffect(() => {
            t &&
                null != s &&
                null != C &&
                (u === Y.vQ.USER_PROFILE_WISHLIST || u === Y.vQ.DM_CHANNEL_WISHLIST) &&
                f.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: C, recipientId: s.id });
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
var q = n(17928),
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
    e_ = n(203632),
    eT = n(892118),
    eE = n(536572),
    eA = n(14702),
    eh = n(219103),
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
        c = (0, q.bG)([ed.default], () => ed.default.getCurrentUser()),
        d = eC.Ay.canUseCollectibles(c),
        C = (0, eu.Ay)(o?.id),
        p = _.useRef(null),
        [m, T] = _.useState(!1),
        { product: E } = (0, ep.q)(t, !0),
        A = _.useMemo(() => (0, ee.fT)(E, d), [E, d]),
        O = (0, eO.V_)(E);
    if (null == E || 0 === E.items.length) return null;
    let [S] = E.items,
        I = (0, eE.VG)(E),
        g = null != o && o.id !== c?.id && E.type !== et.R.BUNDLE && S.type !== et.R.NAMEPLATE && !a;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)("div", {
                className: x()(eS.QU, s),
                children: (0, i.jsx)(en.D, {
                    label: Z.intl.string(Z.t.PpoJzt),
                    children:
                        g &&
                        (0, i.jsx)(
                            el.Y,
                            {
                                targetElementRef: p,
                                align: "center",
                                shouldShow: m,
                                onRequestClose: () => T(!1),
                                preload: () => (0, ec.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(eo.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, ei.FT)(ei._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, em.T)(S) ? S : null,
                                        pendingProfileEffect: (0, e_.C3)(S) ? S : null,
                                        pendingProfileFrame: (0, eT.s)(S) ? S : null,
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
                                            T((e) => !e), t?.(e);
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
                className: x()(eS.i1, null != u ? eS.cN : eS.no),
                children: [
                    (0, i.jsxs)("div", {
                        className: eS.Ug,
                        children: [
                            (0, i.jsx)(eA.O, { product: E }),
                            (0, i.jsxs)("div", {
                                className: eS.JZ,
                                children: [
                                    (0, i.jsx)(es.E, { variant: "text-md/semibold", children: I }),
                                    (0, i.jsx)(ea.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            E?.type === et.R.BUNDLE
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
                            (0, i.jsx)(eh.x, {
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
var ex = n(734925),
    eg = n(687033),
    ef = n(871181),
    eP = n(318007),
    eN = n(285719),
    ey = n(976860),
    ev = n(652215),
    ej = n(353791);
function ek(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, A.Ay)(E.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(Q.Q, {
        text: Z.intl.string(Z.t.J82mpK),
        onClick: function () {
            t(),
                (0, s.closeAllModals)(),
                null == n
                    ? (0, $.Cz)({ analyticsLocations: l, analyticsSource: E.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, ey.pX)(`${ev.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var eR = n(818348);
let eM = (0, _.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
    }),
    eL = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = (0, _.useContext)(eM),
            { analyticsLocations: l } = (0, A.Ay)();
        return (0, i.jsx)(X, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
    },
    eU = {
        [a.pn.GIFT_CUSTOMIZATION]: () => Z.intl.string(Z.t["JCFN/y"]),
        [a.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => Z.intl.string(Z.t.lDbi6H),
        [a.pn.CONFIRM]: () => "",
    },
    eF = (e) => {
        let { step: t } = e,
            n = eU[t];
        return null == n ? null : (0, i.jsx)(T.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
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
                            _ = (0, F.gU)(),
                            T = (0, q.bG)([ed.default], () => ed.default.getCurrentUser()),
                            E = (0, eg.A)(),
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
                            (0, i.jsx)(ef.A, {
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
                                let e = (0, ee.pA)({ invoicePreview: p, selectedSkuId: C, skusById: _ });
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
                                              (0, i.jsx)(ex.A, {
                                                  selectedSkuId: C,
                                                  recipients: E,
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
                            ctaDisabled: null != s || null == u || u.id === T?.id || l.length > Y.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = _.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, i.jsx)(tq, {
                    paymentModalStepProps: e,
                    layout: l.X.TWO_COLUMN,
                    renderLeftColumn: r,
                    renderRightColumn: s,
                    primaryCTAButtonProps: u,
                });
            },
            [a.pn.REVIEW]: S._M,
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
                            n = _.useRef(new g.OH()),
                            [l, i] = _.useState(null),
                            [r, s] = _.useState(!1),
                            a = _.useMemo(() => (0, N.AB)({ purchaseType: y.gs.FIAT, skuId: t }), [t]);
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
                    T = (0, _.useMemo)(
                        () => ({
                            skuIDs: m,
                            setCustomConfettiVisible: d,
                            hideConfirmStepConfetti: p,
                            confettiCanvas: o,
                        }),
                        [m, d, p, o],
                    ),
                    {
                        paymentModalSkuId: E,
                        paymentModalOnClose: A,
                        paymentModalOnComplete: h,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: i } = e,
                            r = t[0] ?? null,
                            s = _.useCallback(() => {
                                i(!0), l?.();
                            }, [l, i]);
                        return {
                            paymentModalSkuId: r,
                            paymentModalOnClose: _.useCallback(
                                (e) => {
                                    i(!1), n(e), f.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, i],
                            ),
                            paymentModalOnComplete: s,
                        };
                    })({
                        onClose: _.useCallback(() => {
                            n.onClose();
                        }, [n]),
                        onComplete: s.onComplete,
                        skuIDs: m,
                        setCustomConfettiVisible: d,
                    }),
                    S = null != l ? l.onStepChange : void 0,
                    I = (0, _.useMemo)(
                        () => ({
                            skuId: E,
                            onClose: A,
                            onComplete: h,
                            applicationId: ev.FYj,
                            initialPlanId: null,
                            onStepChange: S,
                            hideShadow: !0,
                            transitionState: n.transitionState,
                            returnRef: n.returnRef,
                        }),
                        [E, A, h, n.transitionState, n.returnRef, S],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(k, {
                            environment: a,
                            setConfettiCanvas: u,
                            customConfettiDisplayOptions: C,
                            customConfettiVisible: c,
                        }),
                        (0, i.jsx)(O.PaymentContextProvider, {
                            ...s,
                            skuIDs: m,
                            stepConfigs: s.stepConfigs,
                            activeSubscription: null,
                            purchaseType: eR.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, i.jsx)(eM.Provider, {
                                value: T,
                                children: (0, i.jsx)(tQ.g, { customPaymentModalProps: I, children: r }),
                            }),
                        }),
                    ],
                });
            },
            tenantAnalyticsLocation: E.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, h.Pv)();
            return n ? (0, i.jsx)(eF, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eL, { ...e }), options: j },
    };
var ew = n(674223);
let eD = {
    CHECKOUT_FLOW: l.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: { [a.pn.GIFT_CUSTOMIZATION]: ew.e, [a.pn.REVIEW]: S._M },
    CUSTOM_CONFIRM_STEP_CONFIG: u.zX,
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesPaymentContext: !1,
        tenantAnalyticsLocation: E.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var eH = n(429913),
    eG = n(67480),
    eK = n(328968),
    eB = n(733391),
    eW = n(821609),
    eV = n(318254),
    eY = n(262427),
    eZ = n(510022),
    ez = n(317560),
    eX = n(366523),
    eq = n(208733);
function eQ(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, A.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, b.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, O.P5)(),
        a = (0, F.gU)(),
        { isGift: o, giftRecipient: u } = (0, h.Pv)();
    M()(null != l, "Expected selectedSkuId"), M()(null != s, "Expected application");
    let c = a[l];
    M()(null != c, "Expected sku");
    let d = r.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (_.useEffect(() => {
            o || ((0, ez.j)(), t(), (0, eZ.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: C }));
        }, [o, c, s, t, n, C]),
        !o)
    )
        return null;
    let p = null != C && C > 0;
    return (0, i.jsxs)(W.dZ, {
        children: [
            (0, i.jsx)(V.A, {}),
            (0, i.jsxs)("div", {
                className: eq.EL,
                children: [
                    (0, i.jsx)(eX.e, { sku: c, shape: "square", containerClassName: eq.LC }),
                    (0, i.jsx)(ea.D, {
                        variant: "heading-xl/semibold",
                        className: eq.RS,
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
                            className: eq.Is,
                            children: (0, i.jsx)(eY.J, {
                                Icon: eV.C,
                                text: Z.intl.format(Z.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: eq.UD,
                        children: (0, i.jsx)(eW.$, { onClick: t, text: Z.intl.string(Z.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var eJ = n(889137),
    e$ = n(735438),
    e0 = n.n(e$),
    e2 = n(742158),
    e8 = n(683071),
    e7 = n(313961),
    e1 = n(765441),
    e3 = n(238017),
    e6 = n(650588),
    e4 = n(723090),
    e5 = n(763827),
    e9 = n(403362),
    te = n(871123),
    tt = n(832163),
    tn = n(44724),
    tl = n(980094),
    ti = n(627363),
    tr = n(587895),
    ts = n(71393),
    ta = n(806931),
    to = n(107610);
function tu(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        r = _.useCallback(() => {
            (0, tn.X)({ guildId: n.id });
        }, [n.id]),
        a = _.useCallback(() => {
            t();
            let e = tt.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(ev.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, l.id)) ||
                ((0, s.closeAllModals)(),
                (0, tn.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: l.id, slug: l.slug }));
        }, [n.id, l.id, l.slug, t]);
    return (0, i.jsx)("div", {
        className: to.$O,
        children: (0, i.jsx)(Q.Q, {
            text: Z.intl.string(Z.t.ImioFL),
            onMouseDown: r,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let tc = {
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
                            giftingOrigin: T,
                            additionalUserIds: E,
                        } = (0, h.Pv)(),
                        A = (0, b.t4)((e) => e.selectedSkuId),
                        { application: S } = (0, O.P5)(),
                        I = (0, q.bG)([ed.default], () => ed.default.getCurrentUser()),
                        x =
                            ((t = I?.id),
                            (n = (0, e1.A)()),
                            (l = (function (e) {
                                let t = (0, q.bG)([e5.A], () => (e5.A.isConnected() ? e5.A.getChannelId() : null)),
                                    [n, l] = _.useState([]);
                                return (
                                    _.useEffect(() => {
                                        let n = null != t ? e7.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, ta.Xw)(t) && !(0, ta.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, ta.Ay)(e) && !(0, ta.Ay)(t)
                                                ? -1
                                                : (0, ta.Ay)(t) && !(0, ta.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, q.yK)([ed.default], () => E?.map(ed.default.getUser).filter(e9.Vq) ?? [], [E])),
                            _.useMemo(
                                () =>
                                    e0().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        g = (0, q.bG)([eG.A], () => (null != A ? eG.A.get(A) : null), [A]),
                        { normalPrice: f, discountedPrice: P } = (0, e4.CD)({
                            sku: g,
                            priceSetAssignmentPurchaseType: ev.lid.GIFT,
                        }),
                        N = (0, te.fq)(g),
                        y = (0, te.xf)(g),
                        v = (function (e) {
                            let { shouldFetchIfMissing: t } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = (0, te.bF)(e),
                                l = e?.applicationId,
                                i = (0, q.bG)([tr.A], () => (null != l ? tr.A.getApplication(l) : null), [l]),
                                r = i?.guildId,
                                s = (0, q.bG)([ts.A], () => (null != r ? ts.A.getGuild(r) : null), [r]);
                            return (
                                _.useEffect(() => {
                                    n && t && null == s && null != e && ti.Ay.fetchApplication(e.applicationId, !0);
                                }, [s, e, t, n]),
                                n ? s : null
                            );
                        })(g, { shouldFetchIfMissing: !0 }),
                        j = async (e, t) => {},
                        k = (e) => {
                            null != m && m(null == e ? void 0 : e);
                        },
                        R = () =>
                            (0, i.jsxs)("div", {
                                className: to.mT,
                                children: [
                                    null != N &&
                                        (0, i.jsx)(eX.A, {
                                            containerClassName: to.T3,
                                            cardImage: N,
                                            cardBackgroundImage: y,
                                            altText: g?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: to._T,
                                        children: [
                                            (0, i.jsx)(e6.A, { sound: C, onSelect: k }),
                                            (0, i.jsx)(e3.A, {
                                                setEmojiConfetti: p,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        M = () => {
                            let e = g?.orbsReward;
                            return (0, i.jsxs)("div", {
                                className: to.Tc,
                                children: [
                                    null != c && (T === Y.vQ.USER_PROFILE_WISHLIST || T === Y.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(eN.Z, { giftRecipient: c })
                                        : (0, i.jsx)(ex.A, {
                                              selectedSkuId: A,
                                              validateSelectedGift: j,
                                              recipients: x,
                                          }),
                                    (0, i.jsx)(ef.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: to.iX,
                                        innerClassName: to.pt,
                                    }),
                                    null == g
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: to.AN,
                                              children: [
                                                  (0, i.jsx)(e2.z, {
                                                      className: to.jr,
                                                      children: Z.intl.string(Z.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: to.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: to.Xb,
                                                              children:
                                                                  null != g &&
                                                                  null != N &&
                                                                  (0, i.jsx)(eX.A, {
                                                                      containerClassName: to.Iy,
                                                                      cardImage: N,
                                                                      cardBackgroundImage: y,
                                                                      altText: g.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: to.vz,
                                                              children: [
                                                                  null != S && (0, i.jsx)(tl.Q, { application: S }),
                                                                  (0, i.jsx)(es.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: g.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(es.E, {
                                                              variant: "text-md/semibold",
                                                              children: P ?? f,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != g &&
                                        (0, te.Ri)(g) &&
                                        (0, i.jsx)(e8.w, { type: "info", children: Z.intl.string(Z.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(eY.J, {
                                            Icon: eV.C,
                                            text: Z.intl.format(Z.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != v && null != g && (0, i.jsx)(tu, { handleClose: a, sku: g, guild: v }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: to.Du, children: [R(), M()] }),
                        getLeftColumnComponent: R,
                        getRightColumnComponent: M,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === I?.id || o.length > Y.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = _.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(tq, {
                paymentModalStepProps: e,
                layout: l.X.CUSTOM_STEP_BODY,
                renderStepBody: r,
                primaryCTAButtonProps: a,
            });
        },
        [a.pn.REVIEW]: S._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eQ, { ...e }) },
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
                    l = (0, eH.h)(t);
                _.useEffect(() => {
                    null == l ||
                        null == l.guildId ||
                        null == n ||
                        eK.A.isFetchingForSKU(n) ||
                        null != eG.A.get(n) ||
                        (0, eB.qf)(l.guildId, n);
                }, [l, n]);
            })({ applicationId: r, skuId: a });
            let d = o.onClose,
                C = _.useCallback(() => {
                    d();
                }, [d]),
                p = _.useMemo(() => ({ onClose: C, analyticsObject: u }), [C, u]);
            return (0, i.jsx)(O.PaymentContextProvider, {
                loadId: l,
                discoverySessionId: n,
                applicationId: r,
                skuIDs: [a],
                purchaseType: eR.VV.ONE_TIME,
                isGift: s,
                ...c,
                activeSubscription: null,
                children: (0, i.jsx)(tQ.g, { customPaymentModalProps: p, children: t }),
            });
        },
        tenantAnalyticsLocation: E.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, eJ.YW)(t)
                .with(a.pn.GIFT_CUSTOMIZATION, () => Z.intl.string(Z.t["JCFN/y"]))
                .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => Z.intl.string(Z.t.lDbi6H))
                .with(a.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(T.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var td = n(717925),
    tC = n(480642),
    tp = n(944355),
    tm = n(977445),
    t_ = n(908419),
    tT = n(623373),
    tE = n(739508),
    tA = n(902130);
(0, r.A)();
var th = n(136857),
    tO = n(566980),
    tS = n(855104),
    tI = n(120700),
    tx = n(742810),
    tg = n(426398);
n(322076);
var tf = n(289873),
    tP = n(241989),
    tN = n(576052),
    ty = n(120992),
    tv = n(194256),
    tj = n(319820),
    tk = n(327105),
    tR = n(200766);
let tM = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, tj.AO)({ sku: t }),
            s = (0, tv.oO)(l);
        r ? (s = Z.intl.string(tk.default.qwSlCO)) : (0, tT.Ab)(l) && (s = Z.intl.string(Z.t["0TmQRG"]));
        let a = (0, tv.dL)(t),
            o = (0, y.EZ)(t.id) ? tN.m[t.id].render({ className: tR.$ }) : (0, i.jsx)(tP.WH, { sku: t, product: l });
        return (0, i.jsx)(tP.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: eV.C,
        });
    },
    tL = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, ty.A)({ applicationId: (0, p.P)(t), skuIDs: [t] });
        let l = (0, L.bG)([eG.A], () => eG.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(tf.y, { type: tf.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(tM, { sku: l, orbPriceAmount: n });
    },
    tU = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(tp.vW, { label: Z.intl.string(Z.t.y0WGqP), value: null != t ? `${t}` : "", Icon: eV.C });
    },
    tF = () => Z.intl.string(Z.t.wmcDyu);
function tb() {
    let { immediateDelivery: e } = (0, t_.U)(),
        t = tF();
    return (0, i.jsx)(tp._P, {
        variant: { type: tp.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let tw = (0, _.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    tD = {
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
                    } = (0, _.useContext)(tw),
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
                            {
                                isStepLoading: c,
                                orbPriceAmount: d,
                                orbBalanceToDisplay: C,
                                onClickCheckout: T,
                                showCollectiblesDiscountWarning: E,
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
                                    { analyticsLocations: o } = (0, A.Ay)(),
                                    { selectedSkuId: u, setPurchaseState: c } = (0, b.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                    })),
                                    d = (0, tS.gN)(),
                                    C = (0, _.useRef)(d),
                                    { emitOrbCheckoutPaymentFlowEvent: T } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: i,
                                            } = e,
                                            { activitySessionId: r } = (0, O.P5)(),
                                            { hasPaymentSources: s } = (0, tg.jm)(),
                                            {
                                                loadId: o,
                                                startTime: u,
                                                discoverySessionId: c,
                                            } = (0, b.t4)((e) => e.contextMetadata),
                                            d = (0, _.useMemo)(() => {
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
                                                    ...((e = (0, tx.q1)({
                                                        location: "OrbCheckoutModal",
                                                        unifiedCheckoutFlow: tI.C.ORB_CHECKOUT,
                                                    })),
                                                    {
                                                        payment_type: ev.frM[ev.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: e ? tx.rS.UNIFIED : tx.rS.LEGACY,
                                                        checkout_flow: tI.C.ORB_CHECKOUT,
                                                    }),
                                                };
                                            }, [o, c, r, t, l, i, n]);
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, _.useCallback)(
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
                                        analyticsLocations: o,
                                        analyticsSourceLocation: r,
                                    });
                                (0, _.useEffect)(() => {
                                    null != l &&
                                        null !== C.current &&
                                        (T(ev.HAw.PAYMENT_FLOW_FAILED, l), (C.current = null));
                                }, [l, T]);
                                let E = (0, _.useCallback)(() => {
                                        (C.current = d),
                                            T(ev.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(tO.h.COMPLETED),
                                                    s(a.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, d, T, s]),
                                    h = C.current ?? d,
                                    S = null != i ? i.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == i,
                                    showCollectiblesDiscountWarning: (0, eO.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, _.useMemo)(
                                        () =>
                                            null == l
                                                ? null
                                                : l.code === th.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                  ? Z.intl.string(Z.t.keFvXM)
                                                  : l.code === th.tG.ALREADY_PURCHASED
                                                    ? Z.intl.string(Z.t.m371Mx)
                                                    : Z.intl.string(Z.t.fqJZ11),
                                        [l],
                                    ),
                                    orbPriceAmount: S,
                                    orbBalanceToDisplay: h,
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
                            S = (0, q.bG)([eG.A], () => eG.A.get(t), [t]),
                            I = (0, tm.u)(S?.applicationId),
                            {
                                disabled: x,
                                tooltipText: g,
                                text: f,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: i, tooltipText: r } = (0, _.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: Z.intl.string(Z.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: Z.intl.string(Z.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: i, tooltipText: r, text: tF() };
                            })({ orbBalance: C, orbPriceAmount: d, isInTestMode: I }),
                            P = (0, _.useMemo)(
                                () => ({ onClick: T, loading: r, text: f, disabled: x, tooltipText: g }),
                                [T, r, f, x, g],
                            ),
                            N = E ? Z.intl.format(Z.t.fsOXXO, {}) : null,
                            y = I ? Z.intl.string(Z.t.OvMyMd) : null;
                        return {
                            isStepLoading: c,
                            upperInlineNoticeProps: (0, _.useMemo)(() => {
                                if (null != y || null != N || null != h) {
                                    let e = [];
                                    return (
                                        null != y &&
                                            e.push({ type: "warning", message: y, key: "test-mode-warning-notice" }),
                                        null != N &&
                                            e.push({ type: "warning", message: N, key: "orb-checkout-warning-notice" }),
                                        null != h &&
                                            e.push({ type: "critical", message: h, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [y, N, h]),
                            purchaseItemContent: (0, i.jsx)(tL, { skuId: t, orbPriceAmount: d }),
                            paymentSelectContent: (0, i.jsx)(tU, { orbBalance: C }),
                            legalContent: (0, i.jsx)(tb, {}),
                            primaryButtonProps: P,
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
                        (0, i.jsx)(W.dZ, { children: (0, i.jsx)(td.T, { ...d }) }),
                        (0, i.jsx)(W.UX, { children: (0, i.jsx)(tC.lo, { primaryButtonProps: c }) }),
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
                            r = (0, q.bG)([ed.default], () => eC.Ay.canUseShopDiscounts(ed.default.getCurrentUser())),
                            s = (0, q.bG)([eG.A], () => eG.A.get(t), [t]),
                            a = (0, e4.JL)({ sku: s }),
                            { product: o } = (0, ep.q)(t),
                            u = (0, _.useMemo)(() => {
                                if (null != a) return { orbPriceAmount: a.amount };
                                if (null != o) {
                                    let e = (0, tT.CW)({ product: o, hasShopDiscount: r });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [a, o, r]);
                        u?.orbPriceAmount == null &&
                            (0, tE.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: c,
                                isSubmitting: d,
                                error: C,
                            } = (0, tA.Q)({ skuId: t, loadId: n, order: i }),
                            p = (0, _.useCallback)(
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
                    })({ skuId: t, loadId: n, order: (0, b.t4)((e) => e.order) }),
                    C = ((e) => {
                        let { orbProductContext: t, onClose: n, overrideAnalyticParams: l } = e;
                        return {
                            analyticsDataOverride: (0, _.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...l,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, l]),
                            onClose: (0, _.useCallback)(async () => {
                                await n();
                            }, [n]),
                            skipConfirm: !0,
                        };
                    })({ onClose: r.onClose, orbProductContext: o, overrideAnalyticParams: s }),
                    p = (0, _.useMemo)(
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
                return (0, i.jsx)(tw.Provider, {
                    value: p,
                    children: (0, i.jsx)(tQ.g, { customPaymentModalProps: C, children: a }),
                });
            },
            overrideAnalyticParams: { payment_gateway: eR.kM.VIRTUAL_CURRENCY, currency: ev.Yri.DISCORD_ORB },
        },
    },
    tH = {
        [l.C.ORB_CHECKOUT]: {
            flowType: l.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: ev.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tD,
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
            TENANT_CHECKOUT_FLOW_CONFIG: tc,
        },
        [l.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_CHECKOUT },
        [l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: l.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: ev.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eD,
        },
        [l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [l.C.GUILD_PRODUCT_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_PRODUCT_CHECKOUT },
        [l.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_ROLE_CHECKOUT },
        [l.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_BOOST_CHECKOUT },
    };
var tG = n(735305),
    tK = n(295405);
let tB = (e) => {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        r = _.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(tK.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, i.jsx)(tG.x, { ...l, onReturn: r });
};
var tW = n(545075);
let tV = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, _.useRef)(!1),
            { blockedPayments: r } = (0, O.P5)(),
            { handleStepChange: s } = t;
        return ((0, _.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(tW.oO, {})
            : null;
    },
    tY = {
        [l.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, disablePaymentAuthSteps: !0, predicateStepType: "unified" },
        [l.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [l.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
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
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = tH[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = tY[e]),
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
              ? { key: null, renderStep: (e) => (0, i.jsx)(tV, { paymentModalStepProps: e, defaultStep: a.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, i.jsx)(o.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== l.C.ORB_CHECKOUT)
            return {
                key: a.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, i.jsx)(tB, {
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
            c = (0, tx.q1)({ location: "UnifiedCheckoutFlowManager", unifiedCheckoutFlow: this.checkoutFlow });
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
            checkout_design: c ? tx.rS.UNIFIED : tx.rS.LEGACY,
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
                analyticsSourceLocation: _,
                analyticsLocations: T,
                analyticsObject: E,
            } = e,
            A = { current: (0, r.A)() },
            h = { current: null },
            O = (e) => {
                (A.current = e.id), (h.current = e);
            },
            { modalKey: S } = t,
            I = this.generateRenderHeader(),
            x = m ?? this.getApplicationIdFor1PShopSKU(c),
            g = !!(null != a && a.isGift),
            f = !1;
        return (0, s.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: g });
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
                        renderHeader: I,
                        skuId: c,
                        loadId: A.current,
                        onOrderCreated: O,
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
                    null != t.onCloseRequest && t.onCloseRequest(f, A.current), (0, s.closeModal)(S);
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
                            isGift: g,
                        })),
                        null != t.onCloseCallback && t.onCloseCallback(f),
                        null != u && u(f);
                },
                modalKey: S,
            },
        );
    }
}
n(584160);
var tz = n(981036),
    tX = n(367644);
let tq = (e) => {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: r,
            renderLeftColumn: s,
            renderRightColumn: o,
            primaryCTAButtonProps: u,
            onBackClick: c,
        } = e,
        { hasPaymentSources: d } = (0, tg.jm)(),
        C = d ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS,
        p = _.useCallback(() => t(C), [t, C]),
        m = _.useMemo(
            () =>
                n === l.X.CUSTOM_STEP_BODY
                    ? r()
                    : n === l.X.TWO_COLUMN
                      ? (0, i.jsxs)("div", { className: tX.D, children: [s(), o()] })
                      : null,
            [n, r, s, o],
        ),
        T = _.useMemo(() => ({ ...u, onClick: p, text: Z.intl.string(Z.t.XiOHRX) }), [u, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(W.dZ, { children: m }),
            (0, i.jsx)(W.UX, { children: (0, i.jsx)(tz.cy, { onBackClick: c, primaryCTAButtonProps: T }) }),
        ],
    });
};
var tQ = n(551892);
let tJ = null,
    t$ = null,
    t0 = null,
    t2 = null;
function t8() {
    return null == tJ && (tJ = new tZ({ checkoutFlow: l.C.ORB_CHECKOUT })), tJ;
}
function t7() {
    return null == t$ && (t$ = new tZ({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), t$;
}
function t1() {
    return null == t0 && (t0 = new tZ({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), t0;
}
let t3 = {
    [l.C.ORB_CHECKOUT]: t8,
    [l.C.COLLECTIBLES_CHECKOUT]: t7,
    [l.C.SLAYER_STOREFRONT_CHECKOUT]: t1,
    [l.C.PREMIUM_APPS_OTP_CHECKOUT]: function () {
        return null == t2 && (t2 = new tZ({ checkoutFlow: l.C.PREMIUM_APPS_OTP_CHECKOUT })), t2;
    },
};
