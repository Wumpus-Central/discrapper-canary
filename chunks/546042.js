n.d(t, {
    I: () => ee,
    PaymentModal: () => J,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(330140),
    l = n(417597),
    c = n(397927),
    u = n(73153),
    d = n(339048),
    f = n(158032),
    p = n(830382),
    _ = n(428644),
    h = n(964486),
    m = n(459793),
    g = n(357669),
    E = n(319437),
    b = n(70730),
    y = n(45787),
    O = n(51501),
    A = n(422936),
    v = n(511484),
    S = n(251913),
    I = n(869573),
    T = n(344159),
    C = n(97352),
    N = n(469778),
    R = n(954571),
    w = n(45938),
    P = n(927578),
    D = n(937008),
    x = n(156312),
    L = n(166532),
    j = n(566980),
    M = n(379174),
    k = n(800471),
    U = n(169801),
    G = n(216641),
    V = n(462309),
    F = n(534479),
    B = n(482132);
n(322076);
var H = n(652215),
    Y = n(788868),
    W = n(985018),
    K = n(898772);

function z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                z(e, t, n[t]);
            });
    }
    return e;
}

function X(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Q = 2,
    $ = "billing";

function J(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: l,
            analyticsSourceLocation: d,
            analyticsSubscriptionType: _ = H.rzx.PREMIUM,
            onComplete: m,
            transitionState: N,
            initialPlanId: k,
            subscriptionTier: U,
            onClose: F,
            trialId: z,
            trialFooterMessageOverride: X,
            reviewWarningMessage: $,
            planGroup: J = Y.LE,
            openInvoiceId: ee,
            onSubscriptionConfirmation: et,
            renderPurchaseConfirmation: en,
            postSuccessGuild: er,
            followupSKUInfo: ei,
            renderHeader: ea,
            applicationId: es,
            guildId: eo,
            referralTrialOfferId: el,
            skuId: ec,
            onStepChange: eu,
            shakeWhilePurchasing: ed = !1,
            isLargeModal: ef = !1,
            isMediumModal: ep = !1,
            isDynamicModal: e_ = !1,
            hideShadow: eh = !1,
            returnRef: em,
            skipConfirm: eg = !1,
            continueSessionToInitialStep: eE,
            paymentModalVersion: eb = "v1",
        } = e,
        {
            activitySessionId: ey,
            purchaseState: eO,
            setPurchaseState: eA,
            selectedSkuId: ev,
            setSelectedSkuId: eS,
            selectedPlan: eI,
            setSelectedPlanId: eT,
            setSelectedPlanNotification: eC,
            setStep: eN,
            setPurchaseError: eR,
            paymentAuthenticationState: ew,
            step: eP,
            selectedSku: eD,
            contextMetadata: ex,
            purchaseTokenAuthState: eL,
            activeSubscription: ej,
            priceOptions: eM,
            hasPaymentSources: ek,
            paymentSourceId: eU,
            paymentSources: eG,
            purchaseType: eV,
            defaultPlanId: eF,
            premiumBrandRefreshBackgroundClassName: eB,
            customCheckoutFlow: eH,
            invoicePreview: eY,
        } = (0, x.P5)(),
        eW = (0, M.A)(),
        { isGift: eK, giftRecipient: ez, customGiftMessage: eq, emojiConfetti: eX, soundEffect: eZ } = (0, D.Pv)(),
        eQ = c.rIJ.SMALL;
    ef || (null == eW ? void 0 : eW.isLargeModal)
        ? (eQ = c.rIJ.LARGE)
        : ep || (null == eW ? void 0 : eW.isMediumModal)
          ? (eQ = c.rIJ.MEDIUM)
          : (eP === L.pn.ADD_PAYMENT_STEPS || e_ || (null == eW ? void 0 : eW.isDynamicModal)) && (eQ = c.rIJ.DYNAMIC);
    let e$ = (0, A.O)(),
        eJ = null != U && !eK && (0, v.U9)(e$, U),
        [e0, e1] = i.useState(
            q(
                {
                    load_id: ex.loadId,
                    payment_type: H.frM[eV],
                    location: null != a ? a : l,
                    source: d,
                    subscription_type: _,
                    subscription_plan_id: null == eI ? void 0 : eI.id,
                    is_gift: eK,
                    eligible_for_trial: null != z,
                    location_stack: n,
                    sku_id: ec,
                    application_id: es,
                    guild_id: eo,
                    payment_modal_version: eb,
                    activity_session_id: ey,
                    eligible_for_discount: eJ,
                    sku_product_line: null == eD ? void 0 : eD.productLine,
                },
                t,
            ),
        ),
        e2 = (0, G.W)(eG, eU),
        e3 = null != eY ? eY.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e1((e) => {
            let n = null != eI ? (0, P.y8)(eI.id, !1, eK, eM) : void 0;
            return q(
                Z(q({}, e), {
                    subscription_plan_id: null == eI ? void 0 : eI.id,
                    price: null == n ? void 0 : n.amount,
                    regular_price: null == eI ? void 0 : eI.price,
                    currency: eM.currency,
                    sku_id: ev,
                    sku_product_line: null == eD ? void 0 : eD.productLine,
                }),
                t,
            );
        });
    }, [eI, ev, eK, eM, t, null == eD ? void 0 : eD.productLine]),
        (0, h.Ay)(() => {
            (0, g.b)(
                Z(q({}, e0), {
                    continue_session_initial_step: eE,
                    custom_checkout_flow: eH,
                    has_saved_payment_source: ek,
                    discount_id: null != e$ ? e$.discount_id : e3,
                }),
            );
        }),
        i.useEffect(() => {
            if ((null == eI && (null != eF && null != eE ? eT(eF) : eT(k)), null != ec)) eS(ec);
            else if (null != k) {
                var e;
                eS(null == (e = C.A.get(k)) ? void 0 : e.skuId);
            }
        }, [eT, eI, eS, k, ec, eF, eE]);
    let e6 = i.useCallback(() => {
            let e = (0, w.lo)(ez) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            R.default.track(
                H.HAw.PAYMENT_FLOW_SUCCEEDED,
                Z(q({}, e0), {
                    is_custom_message_edited: eK && e && null != eq ? eq !== W.intl.string(W.t.ZkOo1U) : void 0,
                    is_custom_emoji_sound_available: eK && e,
                    emoji_name:
                        eK && e && (null == eX ? void 0 : eX.id) == null
                            ? null == eX
                                ? void 0
                                : eX.surrogates
                            : void 0,
                    sound_id: eK && e ? (null == eZ ? void 0 : eZ.soundId) : void 0,
                    duration_ms: t - ex.startTime,
                    payment_source_type: null == e2 ? void 0 : e2.type,
                }),
            );
            let { enabled: n } = b.u.getConfig({
                location: "PaymentModal emitPaymentFlowSuccess",
            });
            eK && null != ez && null != a && n && (0, O.W)(a) && (0, y.Yd)(ez.id);
        }, [e0, eX, eq, ez, eK, eZ, ex.startTime, e2, a]),
        e4 = i.useMemo(() => () => (null == F ? void 0 : F(eO === j.h.COMPLETED, ev)), [F, eO, ev]),
        e5 = (0, o.A)(() => Date.now(), [eP]),
        e7 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    s = Date.now();
                if (e === L.pn.CONFIRM && (e6(), null == m || m(i), eg)) return void e4();
                eN(e),
                    null == eu || eu(e),
                    eR(null),
                    eC(null),
                    e === L.pn.ADD_PAYMENT_STEPS && (u.h.wait(f.ET), u.h.wait(p.T3));
                let o = null != n ? n : eP;
                null === o || a
                    ? R.default.track(
                          H.HAw.PAYMENT_FLOW_LOADED,
                          Z(q({}, e0), {
                              initial_step: null != o ? o : e,
                              continue_session_initial_step: eE,
                              has_saved_payment_source: ek,
                          }),
                      )
                    : R.default.track(
                          H.HAw.PAYMENT_FLOW_STEP,
                          Z(q({}, e0, r), {
                              from_step: o,
                              to_step: e === L.pn.ADD_PAYMENT_STEPS ? L.pn.PAYMENT_TYPE : e,
                              step_duration_ms: s - e5,
                              flow_duration_ms: s - ex.startTime,
                          }),
                      );
            },
            [eN, eu, eR, eC, eP, eE, e0, e5, ex.startTime, e6, m, eg, e4, ek],
        );
    (0, S.b)(eP, ew, e7, eA),
        (0, L.zT)(eP, eO, eA),
        (0, I.Q)(eP, eL, e7),
        (0, E.A)(e4),
        (0, T.s)(ej, () => F(!1), eK),
        (0, S.QR)(ew);
    let e8 = {
            initialPlanId: k,
            subscriptionTier: U,
            handleStepChange: e7,
            handleClose: e4,
            analyticsData: e0,
            setAnalyticsData: e1,
            trialId: z,
            trialFooterMessageOverride: X,
            reviewWarningMessage: $,
            planGroup: J,
            openInvoiceId: ee,
            analyticsLocation: a,
            onSubscriptionConfirmation: et,
            renderPurchaseConfirmation: en,
            postSuccessGuild: er,
            followupSKUInfo: ei,
            referralTrialOfferId: el,
            skipConfirm: eg,
            continueSessionToInitialStep: eE,
        },
        e9 = (0, V.L)({
            renderHeader: ea,
            handleClose: e4,
        });
    return (0, r.jsx)(c.bfh, {
        className: K.Xn,
        isShaking: ed && eO === j.h.PURCHASING,
        intensity: Q,
        children: (0, r.jsx)(c.EOs, {
            "data-migration-pending": !0,
            className: s()(K.zr, eB, {
                [K.wf]: null != e9,
            }),
            transitionState: N,
            hideShadow: eh,
            returnRef: em,
            size: eQ,
            parentComponent: "PaymentModal",
            children: (0, r.jsx)(
                B.Ay,
                q(
                    {
                        header: e9,
                        isLargeModal: ef || (null == eW ? void 0 : eW.isLargeModal),
                        isDynamicModal: e_ || (null == eW ? void 0 : eW.isDynamicModal),
                    },
                    e8,
                ),
            ),
        }),
    });
}

function ee(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: a,
            referralTrialOfferId: s,
            handleClose: o,
            continueSessionToInitialStep: c,
        } = e,
        {
            activeSubscription: u,
            blockedPayments: f,
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: h,
            currencyLoading: g,
            selectedSkuId: E,
            setSelectedPlanId: b,
            defaultPlanId: y,
            startedPaymentFlowWithPaymentSourcesRef: O,
            hasPaymentSources: A,
        } = (0, x.P5)(),
        { isGift: v } = (0, D.Pv)(),
        S = O.current,
        I = (0, U.A)({
            isGift: v,
            skuId: E,
            referralTrialOfferId: s,
        }),
        [T, C] = i.useState(!0),
        R = (0, l.bG)([N.A], () => N.A.applicationIdsFetched.has(Y.tv));
    return (i.useEffect(() => {
        C(!p || !h || g);
    }, [g, h, p]),
    (0, _.A)(
        "Payment Modal",
        T,
        5,
        {
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: h,
            currencyLoading: g,
        },
        {
            tags: {
                app_context: $,
            },
        },
    ),
    i.useEffect(() => {
        if ((R || (0, d.LM)(Y.tv), T || f)) return;
        let e = (0, k.vT)({
            isTrial: I,
            isGift: v,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: S,
        });
        null != c
            ? a(L.pn.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: c,
              })
            : null != n
              ? n !== Y.gD.PREMIUM_GROUP_MONTH || A
                  ? a(L.pn.REVIEW)
                  : a(L.pn.ADD_PAYMENT_STEPS)
              : e
                ? (b((0, k.xT)(E, u, y)), a(L.pn.REVIEW))
                : null != t
                  ? a(L.pn.PLAN_SELECT)
                  : a(L.pn.SKU_SELECT);
    }, [c, u, f, R, n, T, a, t, E, b, I, y, v, S, A]),
    T)
        ? (0, r.jsx)(F.A, {})
        : f
          ? (0, r.jsx)(m.oO, {
                onClose: o,
            })
          : null;
}
