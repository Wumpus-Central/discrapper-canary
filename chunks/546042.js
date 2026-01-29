n.d(t, {
    I: () => er,
    PaymentModal: () => en,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(330140),
    l = n(417597),
    c = n(397927),
    u = n(73153),
    d = n(339048),
    f = n(158032),
    p = n(830382),
    _ = n(428644),
    h = n(964486),
    m = n(459793),
    g = n(608805),
    E = n(169797),
    y = n(357669),
    b = n(319437),
    O = n(70730),
    v = n(45787),
    A = n(51501),
    I = n(422936),
    S = n(511484),
    T = n(251913),
    C = n(869573),
    N = n(344159),
    w = n(97352),
    R = n(469778),
    P = n(954571),
    D = n(45938),
    L = n(927578),
    x = n(937008),
    M = n(156312),
    j = n(166532),
    k = n(566980),
    U = n(379174),
    G = n(800471),
    F = n(169801),
    V = n(216641),
    B = n(462309),
    H = n(534479),
    Y = n(482132);
n(322076);
var W = n(652215),
    K = n(788868),
    z = n(985018),
    q = n(898772);

function Z(e, t, n) {
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

function Q(e) {
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
                Z(e, t, n[t]);
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

function J(e, t) {
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
let $ = 2,
    ee = "billing",
    et = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: i,
                legacyModalClassName: a,
                legacyModalSize: o,
                hideShadow: s,
                returnRef: l,
                children: u,
            } = e,
            { enabled: d } = (0, g.T0)({
                location: "PaymentModal",
            });
        return d && t === j.pn.REVIEW
            ? (0, r.jsx)(E.Jg, {
                  transitionState: n,
                  returnRef: l,
                  onClose: async () => {
                      await i();
                  },
                  children: u,
              })
            : (0, r.jsx)(c.EOs, {
                  "data-migration-pending": !0,
                  className: a,
                  transitionState: n,
                  hideShadow: s,
                  returnRef: l,
                  size: o,
                  parentComponent: "PaymentModal",
                  children: u,
              });
    };

function en(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: l,
            analyticsSourceLocation: d,
            analyticsSubscriptionType: _ = W.rzx.PREMIUM,
            onComplete: m,
            transitionState: g,
            initialPlanId: E,
            subscriptionTier: R,
            onClose: G,
            trialId: F,
            trialFooterMessageOverride: H,
            reviewWarningMessage: Z,
            planGroup: X = K.LE,
            openInvoiceId: ee,
            onSubscriptionConfirmation: en,
            renderPurchaseConfirmation: er,
            postSuccessGuild: ei,
            followupSKUInfo: ea,
            renderHeader: eo,
            applicationId: es,
            guildId: el,
            referralTrialOfferId: ec,
            skuId: eu,
            onStepChange: ed,
            shakeWhilePurchasing: ef = !1,
            isLargeModal: ep = !1,
            isMediumModal: e_ = !1,
            isDynamicModal: eh = !1,
            hideShadow: em = !1,
            returnRef: eg,
            skipConfirm: eE = !1,
            continueSessionToInitialStep: ey,
            paymentModalVersion: eb = "v1",
        } = e,
        {
            activitySessionId: eO,
            purchaseState: ev,
            setPurchaseState: eA,
            selectedSkuId: eI,
            setSelectedSkuId: eS,
            selectedPlan: eT,
            setSelectedPlanId: eC,
            setSelectedPlanNotification: eN,
            setStep: ew,
            setPurchaseError: eR,
            paymentAuthenticationState: eP,
            step: eD,
            selectedSku: eL,
            contextMetadata: ex,
            purchaseTokenAuthState: eM,
            activeSubscription: ej,
            priceOptions: ek,
            hasPaymentSources: eU,
            paymentSourceId: eG,
            paymentSources: eF,
            purchaseType: eV,
            defaultPlanId: eB,
            premiumBrandRefreshBackgroundClassName: eH,
            customCheckoutFlow: eY,
            invoicePreview: eW,
        } = (0, M.P5)(),
        eK = (0, U.A)(),
        { isGift: ez, giftRecipient: eq, customGiftMessage: eZ, emojiConfetti: eQ, soundEffect: eX } = (0, x.Pv)(),
        eJ = c.rIJ.SMALL;
    ep || (null == eK ? void 0 : eK.isLargeModal)
        ? (eJ = c.rIJ.LARGE)
        : e_ || (null == eK ? void 0 : eK.isMediumModal)
          ? (eJ = c.rIJ.MEDIUM)
          : (eD === j.pn.ADD_PAYMENT_STEPS || eh || (null == eK ? void 0 : eK.isDynamicModal)) && (eJ = c.rIJ.DYNAMIC);
    let e$ = (0, I.O)(),
        e0 = null != R && !ez && (0, S.U9)(e$, R),
        [e1, e2] = i.useState(
            Q(
                {
                    load_id: ex.loadId,
                    payment_type: W.frM[eV],
                    location: null != a ? a : l,
                    source: d,
                    subscription_type: _,
                    subscription_plan_id: null == eT ? void 0 : eT.id,
                    is_gift: ez,
                    eligible_for_trial: null != F,
                    location_stack: n,
                    sku_id: eu,
                    application_id: es,
                    guild_id: el,
                    payment_modal_version: eb,
                    activity_session_id: eO,
                    eligible_for_discount: e0,
                    sku_product_line: null == eL ? void 0 : eL.productLine,
                },
                t,
            ),
        ),
        e3 = (0, V.W)(eF, eG),
        e6 = null != eW ? eW.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e2((e) => {
            let n = null != eT ? (0, L.y8)(eT.id, !1, ez, ek) : void 0;
            return Q(
                J(Q({}, e), {
                    subscription_plan_id: null == eT ? void 0 : eT.id,
                    price: null == n ? void 0 : n.amount,
                    regular_price: null == eT ? void 0 : eT.price,
                    currency: ek.currency,
                    sku_id: eI,
                    sku_product_line: null == eL ? void 0 : eL.productLine,
                }),
                t,
            );
        });
    }, [eT, eI, ez, ek, t, null == eL ? void 0 : eL.productLine]),
        (0, h.Ay)(() => {
            (0, y.b)(
                J(Q({}, e1), {
                    continue_session_initial_step: ey,
                    custom_checkout_flow: eY,
                    has_saved_payment_source: eU,
                    discount_id: null != e$ ? e$.discount_id : e6,
                }),
            );
        }),
        i.useEffect(() => {
            if ((null == eT && (null != eB && null != ey ? eC(eB) : eC(E)), null != eu)) eS(eu);
            else if (null != E) {
                var e;
                eS(null == (e = w.A.get(E)) ? void 0 : e.skuId);
            }
        }, [eC, eT, eS, E, eu, eB, ey]);
    let e4 = i.useCallback(() => {
            let e = (0, D.lo)(eq) === D.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            P.default.track(
                W.HAw.PAYMENT_FLOW_SUCCEEDED,
                J(Q({}, e1), {
                    is_custom_message_edited: ez && e && null != eZ ? eZ !== z.intl.string(z.t.ZkOo1U) : void 0,
                    is_custom_emoji_sound_available: ez && e,
                    emoji_name:
                        ez && e && (null == eQ ? void 0 : eQ.id) == null
                            ? null == eQ
                                ? void 0
                                : eQ.surrogates
                            : void 0,
                    sound_id: ez && e ? (null == eX ? void 0 : eX.soundId) : void 0,
                    duration_ms: t - ex.startTime,
                    payment_source_type: null == e3 ? void 0 : e3.type,
                }),
            );
            let { enabled: n } = O.u.getConfig({
                location: "PaymentModal emitPaymentFlowSuccess",
            });
            ez && null != eq && null != a && n && (0, A.W)(a) && (0, v.Yd)(eq.id);
        }, [e1, eQ, eZ, eq, ez, eX, ex.startTime, e3, a]),
        e5 = i.useMemo(() => () => (null == G ? void 0 : G(ev === k.h.COMPLETED, eI)), [G, ev, eI]),
        e7 = (0, s.A)(() => Date.now(), [eD]),
        e8 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    o = Date.now();
                if (e === j.pn.CONFIRM && (e4(), null == m || m(i), eE)) return void e5();
                ew(e),
                    null == ed || ed(e),
                    eR(null),
                    eN(null),
                    e === j.pn.ADD_PAYMENT_STEPS && (u.h.wait(f.ET), u.h.wait(p.T3));
                let s = null != n ? n : eD;
                null === s || a
                    ? P.default.track(
                          W.HAw.PAYMENT_FLOW_LOADED,
                          J(Q({}, e1), {
                              initial_step: null != s ? s : e,
                              continue_session_initial_step: ey,
                              has_saved_payment_source: eU,
                          }),
                      )
                    : P.default.track(
                          W.HAw.PAYMENT_FLOW_STEP,
                          J(Q({}, e1, r), {
                              from_step: s,
                              to_step: e === j.pn.ADD_PAYMENT_STEPS ? j.pn.PAYMENT_TYPE : e,
                              step_duration_ms: o - e7,
                              flow_duration_ms: o - ex.startTime,
                          }),
                      );
            },
            [ew, ed, eR, eN, eD, ey, e1, e7, ex.startTime, e4, m, eE, e5, eU],
        );
    (0, T.b)(eD, eP, e8, eA),
        (0, j.zT)(eD, ev, eA),
        (0, C.Q)(eD, eM, e8),
        (0, b.A)(e5),
        (0, N.s)(ej, () => G(!1), ez),
        (0, T.QR)(eP);
    let e9 = {
            initialPlanId: E,
            subscriptionTier: R,
            handleStepChange: e8,
            handleClose: e5,
            analyticsData: e1,
            setAnalyticsData: e2,
            trialId: F,
            trialFooterMessageOverride: H,
            reviewWarningMessage: Z,
            planGroup: X,
            openInvoiceId: ee,
            analyticsLocation: a,
            onSubscriptionConfirmation: en,
            renderPurchaseConfirmation: er,
            postSuccessGuild: ei,
            followupSKUInfo: ea,
            referralTrialOfferId: ec,
            skipConfirm: eE,
            continueSessionToInitialStep: ey,
        },
        te = (0, B.L)({
            renderHeader: eo,
            handleClose: e5,
        });
    return (0, r.jsx)(c.bfh, {
        className: q.Xn,
        isShaking: ef && ev === k.h.PURCHASING,
        intensity: $,
        children: (0, r.jsx)(et, {
            step: eD,
            transitionState: g,
            hideShadow: em,
            returnRef: eg,
            legacyModalSize: eJ,
            legacyModalClassName: o()(q.zr, eH, {
                [q.wf]: null != te,
            }),
            handleClose: e5,
            children: (0, r.jsx)(
                Y.Ay,
                Q(
                    {
                        header: te,
                        isLargeModal: ep || (null == eK ? void 0 : eK.isLargeModal),
                        isDynamicModal: eh || (null == eK ? void 0 : eK.isDynamicModal),
                    },
                    e9,
                ),
            ),
        }),
    });
}

function er(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: a,
            referralTrialOfferId: o,
            handleClose: s,
            continueSessionToInitialStep: c,
        } = e,
        {
            activeSubscription: u,
            blockedPayments: f,
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: h,
            currencyLoading: g,
            selectedSkuId: E,
            setSelectedPlanId: y,
            defaultPlanId: b,
            startedPaymentFlowWithPaymentSourcesRef: O,
            hasPaymentSources: v,
        } = (0, M.P5)(),
        { isGift: A } = (0, x.Pv)(),
        I = O.current,
        S = (0, F.A)({
            isGift: A,
            skuId: E,
            referralTrialOfferId: o,
        }),
        [T, C] = i.useState(!0),
        N = (0, l.bG)([R.A], () => R.A.applicationIdsFetched.has(K.tv));
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
                app_context: ee,
            },
        },
    ),
    i.useEffect(() => {
        if ((N || (0, d.LM)(K.tv), T || f)) return;
        let e = (0, G.vT)({
            isTrial: S,
            isGift: A,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: I,
        });
        null != c
            ? a(j.pn.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: c,
              })
            : null != n
              ? n !== K.gD.PREMIUM_GROUP_MONTH || v
                  ? a(j.pn.REVIEW)
                  : a(j.pn.ADD_PAYMENT_STEPS)
              : e
                ? (y((0, G.xT)(E, u, b)), a(j.pn.REVIEW))
                : null != t
                  ? a(j.pn.PLAN_SELECT)
                  : a(j.pn.SKU_SELECT);
    }, [c, u, f, N, n, T, a, t, E, y, S, b, A, I, v]),
    T)
        ? (0, r.jsx)(H.A, {})
        : f
          ? (0, r.jsx)(m.oO, {
                onClose: s,
            })
          : null;
}
