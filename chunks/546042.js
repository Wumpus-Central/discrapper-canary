"use strict";
n.d(t, { I: () => J, PaymentModal: () => X });
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
    p = n(428644),
    h = n(964486),
    m = n(459793),
    g = n(608805),
    E = n(169797),
    A = n(357669),
    I = n(319437),
    T = n(70730),
    y = n(45787),
    S = n(51501),
    v = n(422936),
    C = n(511484),
    b = n(251913),
    N = n(869573),
    R = n(344159),
    O = n(97352),
    D = n(469778),
    L = n(954571),
    w = n(45938),
    x = n(927578),
    P = n(937008),
    M = n(156312),
    k = n(166532),
    U = n(566980),
    G = n(379174),
    V = n(800471),
    F = n(169801),
    B = n(216641),
    j = n(462309),
    H = n(534479),
    Y = n(482132);
n(322076);
var W = n(652215),
    K = n(788868),
    z = n(985018),
    $ = n(898772);
let q = 2,
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
            { enabled: d } = (0, g.T0)({ location: "PaymentModal" });
        return d && t === k.pn.REVIEW
            ? (0, r.jsx)(E.Jg, {
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
function X(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: l,
            analyticsSourceLocation: d,
            analyticsSubscriptionType: p = W.rzx.PREMIUM,
            onComplete: m,
            transitionState: g,
            initialPlanId: E,
            subscriptionTier: D,
            onClose: V,
            trialId: F,
            trialFooterMessageOverride: H,
            reviewWarningMessage: Z,
            planGroup: X = K.LE,
            openInvoiceId: J,
            onSubscriptionConfirmation: ee,
            renderPurchaseConfirmation: et,
            postSuccessGuild: en,
            followupSKUInfo: er,
            renderHeader: ei,
            applicationId: ea,
            guildId: es,
            referralTrialOfferId: eo,
            skuId: el,
            onStepChange: eu,
            shakeWhilePurchasing: ec = !1,
            isLargeModal: ed = !1,
            isMediumModal: e_ = !1,
            isDynamicModal: ef = !1,
            hideShadow: ep = !1,
            returnRef: eh,
            skipConfirm: em = !1,
            continueSessionToInitialStep: eg,
            paymentModalVersion: eE = "v1",
        } = e,
        {
            activitySessionId: eA,
            purchaseState: eI,
            setPurchaseState: eT,
            selectedSkuId: ey,
            setSelectedSkuId: eS,
            selectedPlan: ev,
            setSelectedPlanId: eC,
            setSelectedPlanNotification: eb,
            setStep: eN,
            setPurchaseError: eR,
            paymentAuthenticationState: eO,
            step: eD,
            selectedSku: eL,
            contextMetadata: ew,
            purchaseTokenAuthState: ex,
            activeSubscription: eP,
            priceOptions: eM,
            hasPaymentSources: ek,
            paymentSourceId: eU,
            paymentSources: eG,
            purchaseType: eV,
            defaultPlanId: eF,
            premiumBrandRefreshBackgroundClassName: eB,
            customCheckoutFlow: ej,
            invoicePreview: eH,
        } = (0, M.P5)(),
        eY = (0, G.A)(),
        { isGift: eW, giftRecipient: eK, customGiftMessage: ez, emojiConfetti: e$, soundEffect: eq } = (0, P.Pv)(),
        eZ = u.rIJ.SMALL;
    ed || eY?.isLargeModal
        ? (eZ = u.rIJ.LARGE)
        : e_ || eY?.isMediumModal
          ? (eZ = u.rIJ.MEDIUM)
          : (eD === k.pn.ADD_PAYMENT_STEPS || ef || eY?.isDynamicModal) && (eZ = u.rIJ.DYNAMIC);
    let eQ = (0, v.O)(),
        eX = null != D && !eW && (0, C.U9)(eQ, D),
        [eJ, e0] = i.useState({
            load_id: ew.loadId,
            payment_type: W.frM[eV],
            location: a ?? l,
            source: d,
            subscription_type: p,
            subscription_plan_id: ev?.id,
            is_gift: eW,
            eligible_for_trial: null != F,
            location_stack: n,
            sku_id: el,
            application_id: ea,
            guild_id: es,
            payment_modal_version: eE,
            activity_session_id: eA,
            eligible_for_discount: eX,
            sku_product_line: eL?.productLine,
            ...t,
        }),
        e1 = (0, B.W)(eG, eU),
        e2 = null != eH ? eH.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e0((e) => {
            let n = null != ev ? (0, x.y8)(ev.id, !1, eW, eM) : void 0;
            return {
                ...e,
                subscription_plan_id: ev?.id,
                price: n?.amount,
                regular_price: ev?.price,
                currency: eM.currency,
                sku_id: ey,
                sku_product_line: eL?.productLine,
                ...t,
            };
        });
    }, [ev, ey, eW, eM, t, eL?.productLine]),
        (0, h.Ay)(() => {
            (0, A.b)({
                ...eJ,
                continue_session_initial_step: eg,
                custom_checkout_flow: ej,
                has_saved_payment_source: ek,
                discount_id: null != eQ ? eQ.discount_id : e2,
            });
        }),
        i.useEffect(() => {
            null == ev && (null != eF && null != eg ? eC(eF) : eC(E)),
                null != el ? eS(el) : null != E && eS(O.A.get(E)?.skuId);
        }, [eC, ev, eS, E, el, eF, eg]);
    let e3 = i.useCallback(() => {
            let e = (0, w.lo)(eK) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            L.default.track(W.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...eJ,
                is_custom_message_edited: eW && e && null != ez ? ez !== z.intl.string(z.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eW && e,
                emoji_name: eW && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eW && e ? eq?.soundId : void 0,
                duration_ms: t - ew.startTime,
                payment_source_type: e1?.type,
            });
            let { enabled: n } = T.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eW && null != eK && null != a && n && (0, S.W)(a) && (0, y.Yd)(eK.id);
        }, [eJ, e$, ez, eK, eW, eq, ew.startTime, e1, a]),
        e6 = i.useMemo(() => () => V?.(eI === U.h.COMPLETED, ey), [V, eI, ey]),
        e4 = (0, o.A)(() => Date.now(), [eD]),
        e5 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    s = Date.now();
                if (e === k.pn.CONFIRM && (e3(), m?.(i), em)) return void e6();
                eN(e), eu?.(e), eR(null), eb(null), e === k.pn.ADD_PAYMENT_STEPS && (c.h.wait(_.ET), c.h.wait(f.T3));
                let o = null != n ? n : eD;
                null === o || a
                    ? L.default.track(W.HAw.PAYMENT_FLOW_LOADED, {
                          ...eJ,
                          initial_step: o ?? e,
                          continue_session_initial_step: eg,
                          has_saved_payment_source: ek,
                      })
                    : L.default.track(W.HAw.PAYMENT_FLOW_STEP, {
                          ...eJ,
                          ...r,
                          from_step: o,
                          to_step: e === k.pn.ADD_PAYMENT_STEPS ? k.pn.PAYMENT_TYPE : e,
                          step_duration_ms: s - e4,
                          flow_duration_ms: s - ew.startTime,
                      });
            },
            [eN, eu, eR, eb, eD, eg, eJ, e4, ew.startTime, e3, m, em, e6, ek],
        );
    (0, b.b)(eD, eO, e5, eT),
        (0, k.zT)(eD, eI, eT),
        (0, N.Q)(eD, ex, e5),
        (0, I.A)(e6),
        (0, R.s)(eP, () => V(!1), eW),
        (0, b.QR)(eO);
    let e7 = {
            initialPlanId: E,
            subscriptionTier: D,
            handleStepChange: e5,
            handleClose: e6,
            analyticsData: eJ,
            setAnalyticsData: e0,
            trialId: F,
            trialFooterMessageOverride: H,
            reviewWarningMessage: Z,
            planGroup: X,
            openInvoiceId: J,
            analyticsLocation: a,
            onSubscriptionConfirmation: ee,
            renderPurchaseConfirmation: et,
            postSuccessGuild: en,
            followupSKUInfo: er,
            referralTrialOfferId: eo,
            skipConfirm: em,
            continueSessionToInitialStep: eg,
        },
        e8 = (0, j.L)({ renderHeader: ei, handleClose: e6 });
    return (0, r.jsx)(u.bfh, {
        className: $.Xn,
        isShaking: ec && eI === U.h.PURCHASING,
        intensity: q,
        children: (0, r.jsx)(Q, {
            step: eD,
            transitionState: g,
            hideShadow: ep,
            returnRef: eh,
            legacyModalSize: eZ,
            legacyModalClassName: s()($.zr, eB, { [$.wf]: null != e8 }),
            handleClose: e6,
            children: (0, r.jsx)(Y.Ay, {
                header: e8,
                isLargeModal: ed || eY?.isLargeModal,
                isDynamicModal: ef || eY?.isDynamicModal,
                ...e7,
            }),
        }),
    });
}
function J(e) {
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
            hasFetchedSubscriptionPlans: h,
            currencyLoading: g,
            selectedSkuId: E,
            setSelectedPlanId: A,
            defaultPlanId: I,
            startedPaymentFlowWithPaymentSourcesRef: T,
            hasPaymentSources: y,
        } = (0, M.P5)(),
        { isGift: S } = (0, P.Pv)(),
        v = T.current,
        C = (0, F.A)({ isGift: S, skuId: E, referralTrialOfferId: s }),
        [b, N] = i.useState(!0),
        R = (0, l.bG)([D.A], () => D.A.applicationIdsFetched.has(K.tv));
    return (i.useEffect(() => {
        N(!f || !h || g);
    }, [g, h, f]),
    (0, p.A)(
        "Payment Modal",
        b,
        5,
        { hasFetchedSubscriptions: f, hasFetchedSubscriptionPlans: h, currencyLoading: g },
        { tags: { app_context: Z } },
    ),
    i.useEffect(() => {
        if ((R || (0, d.LM)(K.tv), b || _)) return;
        let e = (0, V.vT)({ isTrial: C, isGift: S, selectedSkuId: E, startedPaymentFlowWithPaymentSources: v });
        null != u
            ? a(k.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: u })
            : null != n
              ? n !== K.gD.PREMIUM_GROUP_MONTH || y
                  ? a(k.pn.REVIEW)
                  : a(k.pn.ADD_PAYMENT_STEPS)
              : e
                ? (A((0, V.xT)(E, c, I)), a(k.pn.REVIEW))
                : null != t
                  ? a(k.pn.PLAN_SELECT)
                  : a(k.pn.SKU_SELECT);
    }, [u, c, _, R, n, b, a, t, E, A, C, I, S, v, y]),
    b)
        ? (0, r.jsx)(H.A, {})
        : _
          ? (0, r.jsx)(m.oO, { onClose: o })
          : null;
}
