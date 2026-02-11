"use strict";
n.d(t, { I: () => ee, PaymentModal: () => J });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(330140),
    l = n(417597),
    u = n(397927),
    c = n(73153),
    d = n(339048),
    _ = n(158032),
    f = n(830382),
    h = n(428644),
    p = n(964486),
    g = n(459793),
    E = n(608805),
    A = n(169797),
    I = n(357669),
    T = n(319437),
    y = n(70730),
    S = n(45787),
    v = n(51501),
    C = n(422936),
    b = n(511484),
    N = n(251913),
    R = n(869573),
    O = n(344159),
    D = n(97352),
    L = n(469778),
    w = n(954571),
    x = n(45938),
    P = n(927578),
    M = n(937008),
    k = n(156312),
    U = n(166532),
    G = n(566980),
    F = n(379174),
    V = n(800471),
    B = n(169801),
    j = n(216641),
    H = n(462309),
    Y = n(534479),
    W = n(482132);
n(322076);
var K = n(652215),
    $ = n(788868),
    z = n(985018),
    q = n(898772);
let X = 2,
    Z = "billing",
    Q = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: i,
                legacyModalClassName: a,
                legacyModalSize: s,
                hideShadow: o,
                returnRef: l,
                children: c,
            } = e,
            { enabled: d } = (0, E.T0)({ location: "PaymentModal" });
        return d && t === U.pn.REVIEW
            ? (0, r.jsx)(A.Jg, {
                  transitionState: n,
                  returnRef: l,
                  onClose: async () => {
                      await i();
                  },
                  children: c,
              })
            : (0, r.jsx)(u.EOs, {
                  "data-migration-pending": !0,
                  className: a,
                  transitionState: n,
                  hideShadow: o,
                  returnRef: l,
                  size: s,
                  parentComponent: "PaymentModal",
                  children: c,
              });
    };
function J(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: l,
            analyticsSourceLocation: d,
            analyticsSubscriptionType: h = K.rzx.PREMIUM,
            onComplete: g,
            transitionState: E,
            initialPlanId: A,
            subscriptionTier: L,
            onClose: V,
            trialId: B,
            trialFooterMessageOverride: Y,
            reviewWarningMessage: Z,
            planGroup: J = $.LE,
            openInvoiceId: ee,
            onSubscriptionConfirmation: et,
            renderPurchaseConfirmation: en,
            postSuccessGuild: er,
            followupSKUInfo: ei,
            renderHeader: ea,
            applicationId: es,
            guildId: eo,
            referralTrialOfferId: el,
            skuId: eu,
            onStepChange: ec,
            shakeWhilePurchasing: ed = !1,
            isLargeModal: e_ = !1,
            isMediumModal: ef = !1,
            isDynamicModal: eh = !1,
            hideShadow: ep = !1,
            returnRef: em,
            skipConfirm: eg = !1,
            continueSessionToInitialStep: eE,
            paymentModalVersion: eA = "v1",
        } = e,
        {
            activitySessionId: eI,
            purchaseState: eT,
            setPurchaseState: ey,
            selectedSkuId: eS,
            setSelectedSkuId: ev,
            selectedPlan: eC,
            setSelectedPlanId: eb,
            setSelectedPlanNotification: eN,
            setStep: eR,
            setPurchaseError: eO,
            paymentAuthenticationState: eD,
            step: eL,
            selectedSku: ew,
            contextMetadata: ex,
            purchaseTokenAuthState: eP,
            activeSubscription: eM,
            priceOptions: ek,
            hasPaymentSources: eU,
            paymentSourceId: eG,
            paymentSources: eF,
            purchaseType: eV,
            defaultPlanId: eB,
            premiumBrandRefreshBackgroundClassName: ej,
            customCheckoutFlow: eH,
            invoicePreview: eY,
        } = (0, k.P5)(),
        eW = (0, F.A)(),
        { isGift: eK, giftRecipient: e$, customGiftMessage: ez, emojiConfetti: eq, soundEffect: eX } = (0, M.Pv)(),
        eZ = u.rIJ.SMALL;
    e_ || eW?.isLargeModal
        ? (eZ = u.rIJ.LARGE)
        : ef || eW?.isMediumModal
          ? (eZ = u.rIJ.MEDIUM)
          : (eL === U.pn.ADD_PAYMENT_STEPS || eh || eW?.isDynamicModal) && (eZ = u.rIJ.DYNAMIC);
    let eQ = (0, C.O)(),
        eJ = null != L && !eK && (0, b.U9)(eQ, L),
        [e0, e1] = i.useState({
            load_id: ex.loadId,
            payment_type: K.frM[eV],
            location: a ?? l,
            source: d,
            subscription_type: h,
            subscription_plan_id: eC?.id,
            is_gift: eK,
            eligible_for_trial: null != B,
            location_stack: n,
            sku_id: eu,
            application_id: es,
            guild_id: eo,
            payment_modal_version: eA,
            activity_session_id: eI,
            eligible_for_discount: eJ,
            sku_product_line: ew?.productLine,
            ...t,
        }),
        e2 = (0, j.W)(eF, eG),
        e3 = null != eY ? eY.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e1((e) => {
            let n = null != eC ? (0, P.y8)(eC.id, !1, eK, ek) : void 0;
            return {
                ...e,
                subscription_plan_id: eC?.id,
                price: n?.amount,
                regular_price: eC?.price,
                currency: ek.currency,
                sku_id: eS,
                sku_product_line: ew?.productLine,
                ...t,
            };
        });
    }, [eC, eS, eK, ek, t, ew?.productLine]),
        (0, p.Ay)(() => {
            (0, I.b)({
                ...e0,
                continue_session_initial_step: eE,
                custom_checkout_flow: eH,
                has_saved_payment_source: eU,
                discount_id: null != eQ ? eQ.discount_id : e3,
            });
        }),
        i.useEffect(() => {
            null == eC && (null != eB && null != eE ? eb(eB) : eb(A)),
                null != eu ? ev(eu) : null != A && ev(D.A.get(A)?.skuId);
        }, [eb, eC, ev, A, eu, eB, eE]);
    let e6 = i.useCallback(() => {
            let e = (0, x.lo)(e$) === x.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            w.default.track(K.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e0,
                is_custom_message_edited: eK && e && null != ez ? ez !== z.intl.string(z.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eK && e,
                emoji_name: eK && e && eq?.id == null ? eq?.surrogates : void 0,
                sound_id: eK && e ? eX?.soundId : void 0,
                duration_ms: t - ex.startTime,
                payment_source_type: e2?.type,
            });
            let { enabled: n } = y.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eK && null != e$ && null != a && n && (0, v.W)(a) && (0, S.Yd)(e$.id);
        }, [e0, eq, ez, e$, eK, eX, ex.startTime, e2, a]),
        e4 = i.useMemo(() => () => V?.(eT === G.h.COMPLETED, eS), [V, eT, eS]),
        e5 = (0, o.A)(() => Date.now(), [eL]),
        e7 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    s = Date.now();
                if (e === U.pn.CONFIRM && (e6(), g?.(i), eg)) return void e4();
                eR(e), ec?.(e), eO(null), eN(null), e === U.pn.ADD_PAYMENT_STEPS && (c.h.wait(_.ET), c.h.wait(f.T3));
                let o = null != n ? n : eL;
                null === o || a
                    ? w.default.track(K.HAw.PAYMENT_FLOW_LOADED, {
                          ...e0,
                          initial_step: o ?? e,
                          continue_session_initial_step: eE,
                          has_saved_payment_source: eU,
                      })
                    : w.default.track(K.HAw.PAYMENT_FLOW_STEP, {
                          ...e0,
                          ...r,
                          from_step: o,
                          to_step: e === U.pn.ADD_PAYMENT_STEPS ? U.pn.PAYMENT_TYPE : e,
                          step_duration_ms: s - e5,
                          flow_duration_ms: s - ex.startTime,
                      });
            },
            [eR, ec, eO, eN, eL, eE, e0, e5, ex.startTime, e6, g, eg, e4, eU],
        );
    (0, N.b)(eL, eD, e7, ey),
        (0, U.zT)(eL, eT, ey),
        (0, R.Q)(eL, eP, e7),
        (0, T.A)(e4),
        (0, O.s)(eM, () => V(!1), eK),
        (0, N.QR)(eD);
    let e8 = {
            initialPlanId: A,
            subscriptionTier: L,
            handleStepChange: e7,
            handleClose: e4,
            analyticsData: e0,
            setAnalyticsData: e1,
            trialId: B,
            trialFooterMessageOverride: Y,
            reviewWarningMessage: Z,
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
        e9 = (0, H.L)({ renderHeader: ea, handleClose: e4 });
    return (0, r.jsx)(u.bfh, {
        className: q.Xn,
        isShaking: ed && eT === G.h.PURCHASING,
        intensity: X,
        children: (0, r.jsx)(Q, {
            step: eL,
            transitionState: E,
            hideShadow: ep,
            returnRef: em,
            legacyModalSize: eZ,
            legacyModalClassName: s()(q.zr, ej, { [q.wf]: null != e9 }),
            handleClose: e4,
            children: (0, r.jsx)(W.Ay, {
                header: e9,
                isLargeModal: e_ || eW?.isLargeModal,
                isDynamicModal: eh || eW?.isDynamicModal,
                ...e8,
            }),
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
            continueSessionToInitialStep: u,
        } = e,
        {
            activeSubscription: c,
            blockedPayments: _,
            hasFetchedSubscriptions: f,
            hasFetchedSubscriptionPlans: p,
            currencyLoading: E,
            selectedSkuId: A,
            setSelectedPlanId: I,
            defaultPlanId: T,
            startedPaymentFlowWithPaymentSourcesRef: y,
            hasPaymentSources: S,
        } = (0, k.P5)(),
        { isGift: v } = (0, M.Pv)(),
        C = y.current,
        b = (0, B.A)({ isGift: v, skuId: A, referralTrialOfferId: s }),
        [N, R] = i.useState(!0),
        O = (0, l.bG)([L.A], () => L.A.applicationIdsFetched.has($.tv));
    return (i.useEffect(() => {
        R(!f || !p || E);
    }, [E, p, f]),
    (0, h.A)(
        "Payment Modal",
        N,
        5,
        { hasFetchedSubscriptions: f, hasFetchedSubscriptionPlans: p, currencyLoading: E },
        { tags: { app_context: Z } },
    ),
    i.useEffect(() => {
        if ((O || (0, d.LM)($.tv), N || _)) return;
        let e = (0, V.vT)({ isTrial: b, isGift: v, selectedSkuId: A, startedPaymentFlowWithPaymentSources: C });
        null != u
            ? a(U.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: u })
            : null != n
              ? n !== $.gD.PREMIUM_GROUP_MONTH || S
                  ? a(U.pn.REVIEW)
                  : a(U.pn.ADD_PAYMENT_STEPS)
              : e
                ? (I((0, V.xT)(A, c, T)), a(U.pn.REVIEW))
                : null != t
                  ? a(U.pn.PLAN_SELECT)
                  : a(U.pn.SKU_SELECT);
    }, [u, c, _, O, n, N, a, t, A, I, b, T, v, C, S]),
    N)
        ? (0, r.jsx)(Y.A, {})
        : _
          ? (0, r.jsx)(g.oO, { onClose: o })
          : null;
}
