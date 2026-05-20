n.d(t, { Mw: () => t$, gf: () => t0.g, XZ: () => l.X, oE: () => t3, CL: () => l.C });
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
    _ = n(793574),
    T = n(862241),
    E = n(731230),
    A = n(920241);
let O = {
    CHECKOUT_FLOW: l.C.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [a.pn.REVIEW]: T._M },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(E.A, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, i.jsx)(A.u, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesPaymentContext: !1,
        tenantAnalyticsLocation: _.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
};
var h = n(64700),
    I = n(20742),
    S = n(688810),
    g = n(937008),
    x = n(834252),
    f = n(503698),
    P = n.n(f),
    N = n(106778),
    y = n(228366),
    v = n(213530),
    j = n(966971),
    R = n(758836),
    k = n(483764);
let L = { sliderBodyClassName: k.Bz },
    M = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(N.Fk, { ref: n, className: k.Lb, environment: t.current }),
                (0, i.jsx)(v.K, { options: l, className: P()(k.Oh, { [k.R]: !r }) }),
            ],
        });
    };
var U = n(284009),
    F = n.n(U),
    b = n(702841),
    D = n(775602),
    w = n(427675),
    H = n(94420),
    G = n(590180),
    K = n(953150),
    B = n(524246),
    W = n(14368),
    V = n(61750),
    Y = n(972607),
    Z = n(482132),
    z = n(921925),
    X = n(788868),
    q = n(375708);
function Q(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: l,
            purchaseError: r,
            appliedUserDiscounts: s,
        } = (0, H.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { application: a, paymentError: o, purchasePreviewError: u } = (0, x.P5)(),
        c = (0, w.gU)(),
        d = (0, b.bG)([G.A], () => G.A.getProduct(l)),
        C = h.useRef(!1);
    F()(null != l, "Expected selectedSkuId"), F()(null != a, "Expected application");
    let p = c[l];
    F()(null != p, "Expected sku");
    let m = null != o || null != r || null != u,
        _ =
            s.length > 0
                ? q.intl.formatToPlainString(q.t.VuV3Td, { discountOfferAmount: s[0].discount.amount })
                : void 0;
    return (h.useEffect(() => {
        null == d ||
            m ||
            C.current ||
            ((C.current = !0),
            (0, V.A)({
                product: d,
                overrideTitle: _,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: R.gs.FIAT,
            }));
    }, [d, n, t, m, _]),
    m)
        ? (0, i.jsx)(Z.dZ, { children: (0, i.jsx)(z.A, {}) })
        : null;
}
function J(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: r,
            giftRecipient: s,
            giftMessageError: a,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, g.Pv)(),
        c = (0, b.bG)([D.A], () => D.A.useReducedMotion),
        d = h.useRef(null),
        C = (0, H.t4)((e) => e.selectedSkuId),
        p = (0, b.bG)([G.A], () => G.A.getProduct(C)),
        { confettiColors: m } = (0, K.A)(p?.styles);
    return (
        h.useEffect(() => {
            t &&
                null != s &&
                null != C &&
                (u === X.vQ.USER_PROFILE_WISHLIST || u === X.vQ.DM_CHANNEL_WISHLIST) &&
                y.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: C, recipientId: s.id });
        }, [t, s, C, u]),
        t
            ? (0, i.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, i.jsx)(Y.A, {
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
                          (0, i.jsx)(B.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, W.rA)(p?.categorySkuId),
                              colors: m?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, i.jsx)(Q, { ...e })
    );
}
var $ = n(17928),
    ee = n(123292),
    et = n(964486),
    en = n(859040),
    el = n(993408),
    ei = n(575593),
    er = n(452027),
    es = n(922016),
    ea = n(778712),
    eo = n(939249),
    eu = n(834730),
    ec = n(534514),
    ed = n(986687),
    eC = n(999291),
    ep = n(903209),
    em = n(287809),
    e_ = n(428262),
    eT = n(674658),
    eE = n(898461),
    eA = n(203632),
    eO = n(892118),
    eh = n(536572),
    eI = n(14702),
    eS = n(219103),
    eg = n(525723),
    ex = n(780651);
function ef(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: r,
            previewHeaderClassName: s,
            hideProfilePreview: a,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, g.Pv)(),
        c = (0, $.bG)([em.default], () => em.default.getCurrentUser()),
        d = e_.Ay.canUseCollectibles(c),
        C = (0, eC.Ay)(o?.id),
        p = h.useRef(null),
        [m, _] = h.useState(!1),
        { product: T } = (0, eT.q)(t, !0),
        E = h.useMemo(() => (0, el.fT)(T, d), [T, d]),
        A = (0, eg.V_)(T);
    if (null == T || 0 === T.items.length) return null;
    let [O] = T.items,
        I = (0, eh.VG)(T),
        S = null != o && o.id !== c?.id && T.type !== ei.R.BUNDLE && O.type !== ei.R.NAMEPLATE && !a;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)("div", {
                className: P()(ex.QU, s),
                children: (0, i.jsx)(er.D, {
                    label: q.intl.string(q.t.PpoJzt),
                    children:
                        S &&
                        (0, i.jsx)(
                            es.Y,
                            {
                                targetElementRef: p,
                                align: "center",
                                shouldShow: m,
                                onRequestClose: () => _(!1),
                                preload: () => (0, ep.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(ed.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, ea.FT)(ea._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, eE.T)(O) ? O : null,
                                        pendingProfileEffect: (0, eA.C3)(O) ? O : null,
                                        pendingProfileFrame: (0, eO.s)(O) ? O : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, i.jsx)(eo.D, {
                                        ...l,
                                        className: ex.Nx,
                                        innerRef: p,
                                        onClick: (e) => {
                                            _((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            m ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, i.jsx)(eu.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: q.intl.string(q.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            C?.userId,
                        ),
                }),
            }),
            (0, i.jsxs)("div", {
                className: P()(ex.i1, null != u ? ex.cN : ex.no),
                children: [
                    (0, i.jsxs)("div", {
                        className: ex.Ug,
                        children: [
                            (0, i.jsx)(eI.O, { product: T }),
                            (0, i.jsxs)("div", {
                                className: ex.JZ,
                                children: [
                                    (0, i.jsx)(eu.E, { variant: "text-md/semibold", children: I }),
                                    (0, i.jsx)(ec.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            T?.type === ei.R.BUNDLE
                                                ? null
                                                : O.type === ei.R.AVATAR_DECORATION
                                                  ? q.intl.string(q.t["7v0T9P"])
                                                  : O.type === ei.R.NAMEPLATE
                                                    ? q.intl.string(q.t.x5CoXR)
                                                    : O.type === ei.R.PROFILE_EFFECT
                                                      ? q.intl.string(q.t.wR5wOo)
                                                      : O.type === ei.R.PROFILE_FRAME
                                                        ? q.intl.string(q.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(eS.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: E,
                                discountOfferAmount: A,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, i.jsx)("div", {
                            className: ex.Wh,
                            children: (0, i.jsx)(eu.E, {
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
var eP = n(734925),
    eN = n(687033),
    ey = n(871181),
    ev = n(318007),
    ej = n(285719),
    eR = n(976860),
    ek = n(652215),
    eL = n(353791);
function eM(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, S.Ay)(_.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(ee.Q, {
        text: q.intl.string(q.t.J82mpK),
        onClick: function () {
            t(),
                (0, s.closeAllModals)(),
                null == n
                    ? (0, en.Cz)({ analyticsLocations: l, analyticsSource: _.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, eR.pX)(`${ek.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var eU = n(818348);
let eF = (0, h.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
    }),
    eb = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = (0, h.useContext)(eF),
            { analyticsLocations: l } = (0, S.Ay)();
        return (0, i.jsx)(J, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
    },
    eD = {
        [a.pn.GIFT_CUSTOMIZATION]: () => q.intl.string(q.t["JCFN/y"]),
        [a.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => q.intl.string(q.t.lDbi6H),
        [a.pn.CONFIRM]: () => "",
    },
    ew = (e) => {
        let { step: t } = e,
            n = eD[t];
        return null == n ? null : (0, i.jsx)(I.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    eH = {
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
                            } = (0, g.Pv)(),
                            { selectedSkuId: C, checkoutInvoicePreview: p } = (0, H.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            _ = (0, w.gU)(),
                            T = (0, $.bG)([em.default], () => em.default.getCurrentUser()),
                            E = (0, eN.A)(),
                            A = async (e, t) => {
                                d(!0),
                                    null != s && a(),
                                    (await (0, en.JJ)(e.id, t)) || a(q.intl.string(q.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, et.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== X.vQ.DM_CHANNEL_WISHLIST &&
                                    m.default.track(ek.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                A(u, C));
                        });
                        let O = () =>
                            (0, i.jsx)(ey.A, {
                                onTextChange: (e) => r?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: eL.iX,
                                innerClassName: eL.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, i.jsx)("div", { className: eL.qL, children: (0, i.jsx)(ev.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, el.pA)({ invoicePreview: p, selectedSkuId: C, skusById: _ });
                                return c === X.vQ.USER_PROFILE_WISHLIST || c === X.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(ej.Z, { giftRecipient: u }),
                                              O(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(ef, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: eL.uW,
                                                      previewHeaderClassName: eL.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, i.jsx)("div", {
                                                  className: eL.fi,
                                                  children: (0, i.jsx)(eM, { handleClose: n, selectedSkuId: C }),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(eP.A, {
                                                  selectedSkuId: C,
                                                  recipients: E,
                                                  className: eL.uh,
                                                  validateSelectedGift: A,
                                              }),
                                              O(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(ef, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: eL.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == u || u.id === T?.id || l.length > X.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = h.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, i.jsx)(t$, {
                    paymentModalStepProps: e,
                    layout: l.X.TWO_COLUMN,
                    renderLeftColumn: r,
                    renderRightColumn: s,
                    primaryCTAButtonProps: u,
                });
            },
            [a.pn.REVIEW]: T._M,
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
                            n = h.useRef(new N.OH()),
                            [l, i] = h.useState(null),
                            [r, s] = h.useState(!1),
                            a = h.useMemo(() => (0, j.AB)({ purchaseType: R.gs.FIAT, skuId: t }), [t]);
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
                    _ = (0, h.useMemo)(
                        () => ({
                            skuIDs: m,
                            setCustomConfettiVisible: d,
                            hideConfirmStepConfetti: p,
                            confettiCanvas: o,
                        }),
                        [m, d, p, o],
                    ),
                    {
                        paymentModalSkuId: T,
                        paymentModalOnClose: E,
                        paymentModalOnComplete: A,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: i } = e,
                            r = t[0] ?? null,
                            s = h.useCallback(() => {
                                i(!0), l?.();
                            }, [l, i]);
                        return {
                            paymentModalSkuId: r,
                            paymentModalOnClose: h.useCallback(
                                (e) => {
                                    i(!1), n(e), y.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, i],
                            ),
                            paymentModalOnComplete: s,
                        };
                    })({
                        onClose: h.useCallback(() => {
                            n.onClose();
                        }, [n]),
                        onComplete: s.onComplete,
                        skuIDs: m,
                        setCustomConfettiVisible: d,
                    }),
                    O = null != l ? l.onStepChange : void 0,
                    I = (0, h.useMemo)(
                        () => ({
                            skuId: T,
                            onClose: E,
                            onComplete: A,
                            applicationId: ek.FYj,
                            initialPlanId: null,
                            onStepChange: O,
                            hideShadow: !0,
                            transitionState: n.transitionState,
                            returnRef: n.returnRef,
                        }),
                        [T, E, A, n.transitionState, n.returnRef, O],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(M, {
                            environment: a,
                            setConfettiCanvas: u,
                            customConfettiDisplayOptions: C,
                            customConfettiVisible: c,
                        }),
                        (0, i.jsx)(x.PaymentContextProvider, {
                            ...s,
                            skuIDs: m,
                            stepConfigs: s.stepConfigs,
                            activeSubscription: null,
                            purchaseType: eU.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, i.jsx)(eF.Provider, {
                                value: _,
                                children: (0, i.jsx)(t0.g, { customPaymentModalProps: I, children: r }),
                            }),
                        }),
                    ],
                });
            },
            tenantAnalyticsLocation: _.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, g.Pv)();
            return n ? (0, i.jsx)(ew, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(eb, { ...e }), options: L },
    };
var eG = n(674223);
let eK = {
    CHECKOUT_FLOW: l.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: { [a.pn.GIFT_CUSTOMIZATION]: eG.e, [a.pn.REVIEW]: T._M },
    CUSTOM_CONFIRM_STEP_CONFIG: u.zX,
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesPaymentContext: !1,
        tenantAnalyticsLocation: _.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var eB = n(429913),
    eW = n(67480),
    eV = n(328968),
    eY = n(733391),
    eZ = n(821609),
    ez = n(318254),
    eX = n(262427),
    eq = n(510022),
    eQ = n(317560),
    eJ = n(366523),
    e$ = n(208733);
function e0(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, S.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, H.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, x.P5)(),
        a = (0, w.gU)(),
        { isGift: o, giftRecipient: u } = (0, g.Pv)();
    F()(null != l, "Expected selectedSkuId"), F()(null != s, "Expected application");
    let c = a[l];
    F()(null != c, "Expected sku");
    let d = r.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (h.useEffect(() => {
            o || ((0, eQ.j)(), t(), (0, eq.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: C }));
        }, [o, c, s, t, n, C]),
        !o)
    )
        return null;
    let p = null != C && C > 0;
    return (0, i.jsxs)(Z.dZ, {
        children: [
            (0, i.jsx)(z.A, {}),
            (0, i.jsxs)("div", {
                className: e$.EL,
                children: [
                    (0, i.jsx)(eJ.e, { sku: c, shape: "square", containerClassName: e$.LC }),
                    (0, i.jsx)(ec.D, {
                        variant: "heading-xl/semibold",
                        className: e$.RS,
                        children: q.intl.string(q.t["5glWta"]),
                    }),
                    (0, i.jsx)(eu.E, {
                        variant: "text-md/normal",
                        children: q.intl.formatToPlainString(q.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    p &&
                        (0, i.jsx)("div", {
                            className: e$.Is,
                            children: (0, i.jsx)(eX.J, {
                                Icon: ez.C,
                                text: q.intl.format(q.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: e$.UD,
                        children: (0, i.jsx)(eZ.$, { onClick: t, text: q.intl.string(q.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var e2 = n(889137),
    e7 = n(735438),
    e8 = n.n(e7),
    e1 = n(742158),
    e6 = n(683071),
    e3 = n(313961),
    e4 = n(765441),
    e9 = n(238017),
    e5 = n(650588),
    te = n(723090),
    tt = n(763827),
    tn = n(403362),
    tl = n(871123),
    ti = n(832163),
    tr = n(44724),
    ts = n(980094),
    ta = n(627363),
    to = n(587895),
    tu = n(71393),
    tc = n(806931),
    td = n(107610);
function tC(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        r = h.useCallback(() => {
            (0, tr.X)({ guildId: n.id });
        }, [n.id]),
        a = h.useCallback(() => {
            t();
            let e = ti.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(ek.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, l.id)) ||
                ((0, s.closeAllModals)(),
                (0, tr.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: l.id, slug: l.slug }));
        }, [n.id, l.id, l.slug, t]);
    return (0, i.jsx)("div", {
        className: td.$O,
        children: (0, i.jsx)(ee.Q, {
            text: q.intl.string(q.t.ImioFL),
            onMouseDown: r,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let tp = {
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
                        } = (0, g.Pv)(),
                        E = (0, H.t4)((e) => e.selectedSkuId),
                        { application: A } = (0, x.P5)(),
                        O = (0, $.bG)([em.default], () => em.default.getCurrentUser()),
                        I =
                            ((t = O?.id),
                            (n = (0, e4.A)()),
                            (l = (function (e) {
                                let t = (0, $.bG)([tt.A], () => (tt.A.isConnected() ? tt.A.getChannelId() : null)),
                                    [n, l] = h.useState([]);
                                return (
                                    h.useEffect(() => {
                                        let n = null != t ? e3.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, tc.Xw)(t) && !(0, tc.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, tc.Ay)(e) && !(0, tc.Ay)(t)
                                                ? -1
                                                : (0, tc.Ay)(t) && !(0, tc.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, $.yK)([em.default], () => T?.map(em.default.getUser).filter(tn.Vq) ?? [], [T])),
                            h.useMemo(
                                () =>
                                    e8().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        S = (0, $.bG)([eW.A], () => (null != E ? eW.A.get(E) : null), [E]),
                        { normalPrice: f, discountedPrice: P } = (0, te.CD)({
                            sku: S,
                            priceSetAssignmentPurchaseType: ek.lid.GIFT,
                        }),
                        N = (0, tl.fq)(S),
                        y = (0, tl.xf)(S),
                        v = (function (e) {
                            let { shouldFetchIfMissing: t } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = (0, tl.bF)(e),
                                l = e?.applicationId,
                                i = (0, $.bG)([to.A], () => (null != l ? to.A.getApplication(l) : null), [l]),
                                r = i?.guildId,
                                s = (0, $.bG)([tu.A], () => (null != r ? tu.A.getGuild(r) : null), [r]);
                            return (
                                h.useEffect(() => {
                                    n && t && null == s && null != e && ta.Ay.fetchApplication(e.applicationId, !0);
                                }, [s, e, t, n]),
                                n ? s : null
                            );
                        })(S, { shouldFetchIfMissing: !0 }),
                        j = async (e, t) => {},
                        R = (e) => {
                            null != m && m(null == e ? void 0 : e);
                        },
                        k = () =>
                            (0, i.jsxs)("div", {
                                className: td.mT,
                                children: [
                                    null != N &&
                                        (0, i.jsx)(eJ.A, {
                                            containerClassName: td.T3,
                                            cardImage: N,
                                            cardBackgroundImage: y,
                                            altText: S?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: td._T,
                                        children: [
                                            (0, i.jsx)(e5.A, { sound: C, onSelect: R }),
                                            (0, i.jsx)(e9.A, {
                                                setEmojiConfetti: p,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        L = () => {
                            let e = S?.orbsReward;
                            return (0, i.jsxs)("div", {
                                className: td.Tc,
                                children: [
                                    null != c && (_ === X.vQ.USER_PROFILE_WISHLIST || _ === X.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(ej.Z, { giftRecipient: c })
                                        : (0, i.jsx)(eP.A, {
                                              selectedSkuId: E,
                                              validateSelectedGift: j,
                                              recipients: I,
                                          }),
                                    (0, i.jsx)(ey.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: td.iX,
                                        innerClassName: td.pt,
                                    }),
                                    null == S
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: td.AN,
                                              children: [
                                                  (0, i.jsx)(e1.z, {
                                                      className: td.jr,
                                                      children: q.intl.string(q.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: td.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: td.Xb,
                                                              children:
                                                                  null != S &&
                                                                  null != N &&
                                                                  (0, i.jsx)(eJ.A, {
                                                                      containerClassName: td.Iy,
                                                                      cardImage: N,
                                                                      cardBackgroundImage: y,
                                                                      altText: S.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: td.vz,
                                                              children: [
                                                                  null != A && (0, i.jsx)(ts.Q, { application: A }),
                                                                  (0, i.jsx)(eu.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: S.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(eu.E, {
                                                              variant: "text-md/semibold",
                                                              children: P ?? f,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != S &&
                                        (0, tl.Ri)(S) &&
                                        (0, i.jsx)(e6.w, { type: "info", children: q.intl.string(q.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(eX.J, {
                                            Icon: ez.C,
                                            text: q.intl.format(q.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != v && null != S && (0, i.jsx)(tC, { handleClose: a, sku: S, guild: v }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: td.Du, children: [k(), L()] }),
                        getLeftColumnComponent: k,
                        getRightColumnComponent: L,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === O?.id || o.length > X.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = h.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(t$, {
                paymentModalStepProps: e,
                layout: l.X.CUSTOM_STEP_BODY,
                renderStepBody: r,
                primaryCTAButtonProps: a,
            });
        },
        [a.pn.REVIEW]: T._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(e0, { ...e }) },
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
                    l = (0, eB.h)(t);
                h.useEffect(() => {
                    null == l ||
                        null == l.guildId ||
                        null == n ||
                        eV.A.isFetchingForSKU(n) ||
                        null != eW.A.get(n) ||
                        (0, eY.qf)(l.guildId, n);
                }, [l, n]);
            })({ applicationId: r, skuId: a });
            let d = o.onClose,
                C = h.useCallback(() => {
                    d();
                }, [d]),
                p = h.useMemo(() => ({ onClose: C, analyticsObject: u }), [C, u]);
            return (0, i.jsx)(x.PaymentContextProvider, {
                loadId: l,
                discoverySessionId: n,
                applicationId: r,
                skuIDs: [a],
                purchaseType: eU.VV.ONE_TIME,
                isGift: s,
                ...c,
                activeSubscription: null,
                children: (0, i.jsx)(t0.g, { customPaymentModalProps: p, children: t }),
            });
        },
        tenantAnalyticsLocation: _.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, e2.YW)(t)
                .with(a.pn.GIFT_CUSTOMIZATION, () => q.intl.string(q.t["JCFN/y"]))
                .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => q.intl.string(q.t.lDbi6H))
                .with(a.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(I.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var tm = n(717925),
    t_ = n(480642),
    tT = n(944355),
    tE = n(977445),
    tA = n(908419),
    tO = n(623373),
    th = n(739508),
    tI = n(902130);
(0, r.A)();
var tS = n(136857),
    tg = n(566980),
    tx = n(855104),
    tf = n(120700),
    tP = n(742810),
    tN = n(426398);
n(322076);
var ty = n(289873),
    tv = n(241989),
    tj = n(576052),
    tR = n(120992),
    tk = n(194256),
    tL = n(319820),
    tM = n(327105),
    tU = n(200766);
let tF = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, tL.AO)({ sku: t }),
            s = (0, tk.oO)(l);
        r ? (s = q.intl.string(tM.default.qwSlCO)) : (0, tO.Ab)(l) && (s = q.intl.string(q.t["0TmQRG"]));
        let a = (0, tk.dL)(t),
            o = (0, R.EZ)(t.id) ? tj.m[t.id].render({ className: tU.$ }) : (0, i.jsx)(tv.WH, { sku: t, product: l });
        return (0, i.jsx)(tv.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: ez.C,
        });
    },
    tb = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, tR.A)({ applicationId: (0, p.P)(t), skuIDs: [t] });
        let l = (0, b.bG)([eW.A], () => eW.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(ty.y, { type: ty.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(tF, { sku: l, orbPriceAmount: n });
    },
    tD = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(tT.vW, { label: q.intl.string(q.t.y0WGqP), value: null != t ? `${t}` : "", Icon: ez.C });
    },
    tw = () => q.intl.string(q.t.wmcDyu);
function tH() {
    let { immediateDelivery: e } = (0, tA.U)(),
        t = tw();
    return (0, i.jsx)(tT._P, {
        variant: { type: tT.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let tG = (0, h.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    tK = {
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
                    } = (0, h.useContext)(tG),
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
                                onClickCheckout: _,
                                showCollectiblesDiscountWarning: T,
                                errorMessage: E,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: l,
                                        orbProductContext: i,
                                        analyticsSourceLocation: r,
                                        handleStepChange: s,
                                    } = e,
                                    { analyticsLocations: o } = (0, S.Ay)(),
                                    { selectedSkuId: u, setPurchaseState: c } = (0, H.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                    })),
                                    d = (0, tx.gN)(),
                                    C = (0, h.useRef)(d),
                                    { emitOrbCheckoutPaymentFlowEvent: _ } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: i,
                                            } = e,
                                            { activitySessionId: r } = (0, x.P5)(),
                                            { hasPaymentSources: s } = (0, tN.jm)(),
                                            {
                                                loadId: o,
                                                startTime: u,
                                                discoverySessionId: c,
                                            } = (0, H.t4)((e) => e.contextMetadata),
                                            d = (0, h.useMemo)(() => {
                                                let e;
                                                return {
                                                    load_id: o,
                                                    discovery_session_id: c,
                                                    application_id: (0, p.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: r,
                                                    payment_gateway: eU.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: ek.Yri.DISCORD_ORB,
                                                    ...(null != i && { source: i }),
                                                    ...((e = (0, tP.q1)({
                                                        location: "OrbCheckoutModal",
                                                        unifiedCheckoutFlow: tf.C.ORB_CHECKOUT,
                                                    })),
                                                    {
                                                        payment_type: ek.frM[ek.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: e ? tP.rS.UNIFIED : tP.rS.LEGACY,
                                                        checkout_flow: tf.C.ORB_CHECKOUT,
                                                    }),
                                                };
                                            }, [o, c, r, t, l, i, n]);
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, h.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === ek.HAw.PAYMENT_FLOW_STARTED
                                                        ? m.default.track(ek.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...d,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: eU.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === ek.HAw.PAYMENT_FLOW_LOADED
                                                          ? m.default.track(ek.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...d,
                                                                has_saved_payment_source: s,
                                                                initial_step: a.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === ek.HAw.PAYMENT_FLOW_CANCELED
                                                            ? m.default.track(ek.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...d,
                                                                  duration_ms: n,
                                                              })
                                                            : e === ek.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? m.default.track(ek.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...d,
                                                                    duration_ms: n,
                                                                })
                                                              : e === ek.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? m.default.track(ek.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                  })
                                                                : e === ek.HAw.PAYMENT_FLOW_FAILED &&
                                                                  m.default.track(ek.HAw.PAYMENT_FLOW_FAILED, {
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
                                (0, h.useEffect)(() => {
                                    null != l &&
                                        null !== C.current &&
                                        (_(ek.HAw.PAYMENT_FLOW_FAILED, l), (C.current = null));
                                }, [l, _]);
                                let T = (0, h.useCallback)(() => {
                                        (C.current = d),
                                            _(ek.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(tg.h.COMPLETED),
                                                    s(a.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, d, _, s]),
                                    E = C.current ?? d,
                                    A = null != i ? i.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == i,
                                    showCollectiblesDiscountWarning: (0, eg.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, h.useMemo)(
                                        () =>
                                            null == l
                                                ? null
                                                : l.code === tS.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                  ? q.intl.string(q.t.keFvXM)
                                                  : l.code === tS.tG.ALREADY_PURCHASED
                                                    ? q.intl.string(q.t.m371Mx)
                                                    : q.intl.string(q.t.fqJZ11),
                                        [l],
                                    ),
                                    orbPriceAmount: A,
                                    orbBalanceToDisplay: E,
                                    onClickCheckout: T,
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
                            A = (0, $.bG)([eW.A], () => eW.A.get(t), [t]),
                            O = (0, tE.u)(A?.applicationId),
                            {
                                disabled: I,
                                tooltipText: g,
                                text: f,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: i, tooltipText: r } = (0, h.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: q.intl.string(q.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: q.intl.string(q.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: i, tooltipText: r, text: tw() };
                            })({ orbBalance: C, orbPriceAmount: d, isInTestMode: O }),
                            P = (0, h.useMemo)(
                                () => ({ onClick: _, loading: r, text: f, disabled: I, tooltipText: g }),
                                [_, r, f, I, g],
                            ),
                            N = T ? q.intl.format(q.t.fsOXXO, {}) : null,
                            y = O ? q.intl.string(q.t.OvMyMd) : null;
                        return {
                            isStepLoading: c,
                            upperInlineNoticeProps: (0, h.useMemo)(() => {
                                if (null != y || null != N || null != E) {
                                    let e = [];
                                    return (
                                        null != y &&
                                            e.push({ type: "warning", message: y, key: "test-mode-warning-notice" }),
                                        null != N &&
                                            e.push({ type: "warning", message: N, key: "orb-checkout-warning-notice" }),
                                        null != E &&
                                            e.push({ type: "critical", message: E, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [y, N, E]),
                            purchaseItemContent: (0, i.jsx)(tb, { skuId: t, orbPriceAmount: d }),
                            paymentSelectContent: (0, i.jsx)(tD, { orbBalance: C }),
                            legalContent: (0, i.jsx)(tH, {}),
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
                        (0, i.jsx)(Z.dZ, { children: (0, i.jsx)(tm.T, { ...d }) }),
                        (0, i.jsx)(Z.UX, { children: (0, i.jsx)(t_.lo, { primaryButtonProps: c }) }),
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
                            r = (0, $.bG)([em.default], () => e_.Ay.canUseShopDiscounts(em.default.getCurrentUser())),
                            s = (0, $.bG)([eW.A], () => eW.A.get(t), [t]),
                            a = (0, te.JL)({ sku: s }),
                            { product: o } = (0, eT.q)(t),
                            u = (0, h.useMemo)(() => {
                                if (null != a) return { orbPriceAmount: a.amount };
                                if (null != o) {
                                    let e = (0, tO.CW)({ product: o, hasShopDiscount: r });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [a, o, r]);
                        u?.orbPriceAmount == null &&
                            (0, th.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: c,
                                isSubmitting: d,
                                error: C,
                            } = (0, tI.Q)({ skuId: t, loadId: n, order: i }),
                            p = (0, h.useCallback)(
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
                    })({ skuId: t, loadId: n, order: (0, H.t4)((e) => e.order) }),
                    C = ((e) => {
                        let { orbProductContext: t, onClose: n, overrideAnalyticParams: l } = e;
                        return {
                            analyticsDataOverride: (0, h.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...l,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, l]),
                            onClose: (0, h.useCallback)(async () => {
                                await n();
                            }, [n]),
                            skipConfirm: !0,
                        };
                    })({ onClose: r.onClose, orbProductContext: o, overrideAnalyticParams: s }),
                    p = (0, h.useMemo)(
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
                return (0, i.jsx)(tG.Provider, {
                    value: p,
                    children: (0, i.jsx)(t0.g, { customPaymentModalProps: C, children: a }),
                });
            },
            overrideAnalyticParams: { payment_gateway: eU.kM.VIRTUAL_CURRENCY, currency: ek.Yri.DISCORD_ORB },
        },
    },
    tB = {
        [l.C.ORB_CHECKOUT]: {
            flowType: l.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: ek.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tK,
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            flowType: l.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: ek.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eH,
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: l.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: ek.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tp,
        },
        [l.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_CHECKOUT },
        [l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: l.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: ek.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eK,
        },
        [l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [l.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: ek.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: O,
            flowType: l.C.GUILD_PRODUCT_CHECKOUT,
        },
        [l.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_ROLE_CHECKOUT },
        [l.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: l.C.GUILD_BOOST_CHECKOUT },
    };
var tW = n(735305),
    tV = n(295405);
let tY = (e) => {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        r = h.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(tV.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, i.jsx)(tW.x, { ...l, onReturn: r });
};
var tZ = n(545075);
let tz = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, h.useRef)(!1),
            { blockedPayments: r } = (0, x.P5)(),
            { handleStepChange: s } = t;
        return ((0, h.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(tZ.oO, {})
            : null;
    },
    tX = {
        [l.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, disablePaymentAuthSteps: !0, predicateStepType: "unified" },
        [l.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [l.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [l.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [l.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1 },
    };
class tq {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = tB[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = tX[e]),
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
                    (0, i.jsx)(tY, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => q.intl.string(q.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(a.pn.REVIEW);
        return {
            key: a.pn.REVIEW,
            renderStep: (t) => (0, i.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => q.intl.string(q.t.QBnNHq) },
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
              ? ek.FYj
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
            c = (0, tP.q1)({ location: "UnifiedCheckoutFlowManager", unifiedCheckoutFlow: this.checkoutFlow });
        m.default.track(ek.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: r,
            payment_type: ek.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: u,
            sku_id: n,
            sku_product_line: l,
            application_id: i,
            location: a,
            location_stack: s,
            source: o,
            payment_modal_version: "v2",
            checkout_design: c ? tP.rS.UNIFIED : tP.rS.LEGACY,
            checkout_flow: this.checkoutFlow,
            ...this.override_analytic_params,
        });
    }
    openCheckoutModal(e) {
        let {
                modalAPIOptions: t,
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
                tenantParams: A,
            } = e,
            O = { current: (0, r.A)() },
            h = { current: null },
            I = (e) => {
                (O.current = e.id), (h.current = e);
            },
            { modalKey: S } = t,
            g = this.generateRenderHeader(),
            x = m ?? this.getApplicationIdFor1PShopSKU(c),
            f = !!(null != a && a.isGift),
            P = !1;
        return (0, s.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: f });
                return (n) =>
                    (0, i.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != o && o(e), (P = !0);
                        },
                        onClose: u,
                        renderHeader: g,
                        skuId: c,
                        tenantParams: A ?? {},
                        loadId: O.current,
                        onOrderCreated: I,
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
                    null != t.onCloseRequest && t.onCloseRequest(P, O.current), (0, s.closeModal)(S);
                },
                onCloseCallback: () => {
                    P ||
                        (C({ checkoutSucceeded: P, order: h.current }),
                        this.trackPaymentFlowCanceled({
                            loadId: O.current,
                            skuId: c,
                            skuProductLine: d,
                            applicationId: x,
                            discoverySessionId: p,
                            analyticsLocations: T,
                            analyticsObject: E,
                            analyticsSourceLocation: _,
                            isGift: f,
                        })),
                        null != t.onCloseCallback && t.onCloseCallback(P),
                        null != u && u(P, c);
                },
                modalKey: S,
            },
        );
    }
}
n(584160);
var tQ = n(981036),
    tJ = n(367644);
let t$ = (e) => {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: r,
            renderLeftColumn: s,
            renderRightColumn: o,
            primaryCTAButtonProps: u,
            onBackClick: c,
        } = e,
        { hasPaymentSources: d } = (0, tN.jm)(),
        C = d ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS,
        p = h.useCallback(() => t(C), [t, C]),
        m = h.useMemo(
            () =>
                n === l.X.CUSTOM_STEP_BODY
                    ? r()
                    : n === l.X.TWO_COLUMN
                      ? (0, i.jsxs)("div", { className: tJ.D, children: [s(), o()] })
                      : null,
            [n, r, s, o],
        ),
        _ = h.useMemo(() => ({ ...u, onClick: p, text: q.intl.string(q.t.XiOHRX) }), [u, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Z.dZ, { children: m }),
            (0, i.jsx)(Z.UX, { children: (0, i.jsx)(tQ.cy, { onBackClick: c, primaryCTAButtonProps: _ }) }),
        ],
    });
};
var t0 = n(551892);
let t2 = null,
    t7 = null,
    t8 = null,
    t1 = null,
    t6 = null,
    t3 = {
        [l.C.ORB_CHECKOUT]: {
            get: function () {
                return null == t2 && (t2 = new tq({ checkoutFlow: l.C.ORB_CHECKOUT })), t2;
            },
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return null == t7 && (t7 = new tq({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), t7;
            },
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return null == t8 && (t8 = new tq({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), t8;
            },
        },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == t1 && (t1 = new tq({ checkoutFlow: l.C.PREMIUM_APPS_OTP_CHECKOUT })), t1;
            },
        },
        [l.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return null == t6 && (t6 = new tq({ checkoutFlow: l.C.GUILD_PRODUCT_CHECKOUT })), t6;
            },
        },
    };
