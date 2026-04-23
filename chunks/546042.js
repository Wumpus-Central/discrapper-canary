"use strict";
n.d(t, { I: () => en, PaymentModal: () => et });
var i = n(627968),
    r = n(64700),
    s = n(976634),
    a = n(702841),
    o = n(568602),
    l = n(228366),
    d = n(339048),
    _ = n(158032),
    u = n(830382),
    c = n(428644),
    E = n(964486),
    h = n(545075),
    m = n(725836),
    f = n(742810),
    g = n(558620),
    p = n(427675),
    A = n(169797),
    I = n(94420),
    T = n(357669),
    S = n(319437),
    N = n(70730),
    C = n(45787),
    R = n(51501),
    O = n(422936),
    y = n(612669),
    v = n(511484),
    D = n(251913),
    L = n(869573),
    b = n(344159),
    w = n(97352),
    P = n(469778),
    k = n(954571),
    M = n(45938),
    U = n(927578),
    x = n(937008),
    G = n(156312),
    V = n(166532),
    F = n(566980),
    B = n(379174),
    H = n(615310),
    j = n(800471),
    W = n(169801),
    Y = n(216641),
    K = n(462309),
    z = n(534479),
    $ = n(482132);
n(322076);
var q = n(652215),
    X = n(788868),
    Z = n(985018),
    Q = n(106451);
let J = { [V.pn.GIFT_CUSTOMIZATION]: "xl", [V.pn.REVIEW]: "md", [V.pn.ADD_PAYMENT_STEPS]: "md" },
    ee = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: r,
                isGift: s,
                giftRecipient: a,
                manaModalSize: o,
                modalSizeGetter: l,
                returnRef: d,
                children: _,
            } = e,
            u = (0, y.FY)({ isGift: s }),
            c =
                null != l
                    ? l({ canCurrentlyPurchasePremiumGroup: u, isGift: s, giftRecipient: a })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              i = n ?? "md";
                          return null == e ? i : e in J ? J[e] : i;
                      })(t, { manaModalSizeFromProps: o });
        return (0, i.jsx)(A.Jg, {
            transitionState: n,
            size: c,
            returnRef: d,
            onClose: async () => {
                await r();
            },
            children: _,
        });
    };
function et(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: d,
            analyticsSourceLocation: c,
            analyticsSubscriptionType: h = q.rzx.PREMIUM,
            onComplete: A,
            transitionState: y,
            initialPlanId: P,
            subscriptionTier: j,
            onClose: W,
            trialId: z,
            trialFooterMessageOverride: J,
            reviewWarningMessage: et,
            planGroup: en = X.LE,
            openInvoiceId: ei,
            onSubscriptionConfirmation: er,
            renderPurchaseConfirmation: es,
            postSuccessGuild: ea,
            followupSKUInfo: eo,
            renderHeader: el,
            applicationId: ed,
            guildId: e_,
            referralTrialOfferId: eu,
            skuId: ec,
            onStepChange: eE,
            shakeWhilePurchasing: eh = !1,
            isLargeModal: em = !1,
            isMediumModal: ef = !1,
            returnRef: eg,
            skipConfirm: ep = !1,
            continueSessionToInitialStep: eA,
            paymentModalVersion: eI = "v1",
        } = e,
        {
            selectedSkuId: eT,
            setSelectedSkuId: eS,
            setSelectedPlanId: eN,
        } = (0, I.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activitySessionId: eC,
            purchaseState: eR,
            setPurchaseState: eO,
            setPurchaseError: ey,
            paymentAuthenticationState: ev,
            contextMetadata: eD,
            purchaseTokenAuthState: eL,
            activeSubscription: eb,
            priceOptions: ew,
            hasPaymentSources: eP,
            paymentSourceId: ek,
            paymentSources: eM,
            purchaseType: eU,
            defaultPlanId: ex,
            customCheckoutFlow: eG,
            displayCurrency: eV,
            unifiedCheckoutFlow: eF,
        } = (0, G.P5)(),
        eB = (0, I.sw)(),
        eH = (0, g.A)(),
        ej = (0, p.S3)(),
        eW = (0, B.A)(),
        { isGift: eY, giftRecipient: eK, customGiftMessage: ez, emojiConfetti: e$, soundEffect: eq } = (0, x.Pv)(),
        eX = (0, H.bB)(),
        eZ = (0, H.l)(),
        eQ = "sm";
    em ? (eQ = "xl") : (ef || eX === V.pn.ADD_PAYMENT_STEPS) && (eQ = "md");
    let eJ = eW?.modalSizeGetter,
        e0 = (0, f.D7)({ location: "PaymentModal" }),
        e1 = (0, O.O)(),
        e2 = null != j && !eY && (0, v.U9)(e1, j),
        [e3, e6] = r.useState({
            load_id: eD.loadId,
            discovery_session_id: eD.discoverySessionId,
            payment_type: q.frM[eU],
            location: a ?? d,
            source: c,
            subscription_type: h,
            subscription_plan_id: eH?.id ?? P,
            is_gift: eY,
            eligible_for_trial: null != z,
            location_stack: n,
            sku_id: ec,
            application_id: ed,
            guild_id: e_,
            payment_modal_version: eI,
            activity_session_id: eC,
            eligible_for_discount: e2,
            sku_product_line: ej?.productLine,
            checkout_design: e0 ? f.rS.UNIFIED : f.rS.LEGACY,
            checkout_flow: eF,
            ...t,
        }),
        e4 = (0, Y.W)(eM, ek),
        e7 = null != eB ? eB.getDiscountIdIfExists() : void 0;
    r.useEffect(() => {
        e6((e) => {
            let n = null != eH ? (0, U.y8)(eH.id, !1, eY, { paymentSourceId: ew.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eH?.id,
                price: n?.amount,
                regular_price: eH?.price,
                currency: eV,
                sku_id: eT,
                sku_product_line: ej?.productLine,
                ...t,
            };
        });
    }, [eH, eT, eY, ew, eV, t, ej?.productLine]),
        (0, E.Ay)(() => {
            (0, T.b)({
                ...e3,
                continue_session_initial_step: eA,
                custom_checkout_flow: eG,
                has_saved_payment_source: eP,
                discount_id: null != e1 ? e1.discount_id : e7,
            });
        }),
        r.useEffect(() => {
            null == eH && (null != ex && null != eA ? eN(ex) : eN(P)),
                null != ec ? eS(ec) : null != P && eS(w.A.get(P)?.skuId);
        }, [eN, eH, eS, P, ec, ex, eA]);
    let e5 = r.useCallback(() => {
            let e = (0, M.lo)(eK) === M.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            k.default.track(q.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e3,
                is_custom_message_edited: eY && e && null != ez ? ez !== Z.intl.string(Z.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eY && e,
                emoji_name: eY && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eY && e ? eq?.soundId : void 0,
                duration_ms: t - eD.startTime,
                payment_source_type: e4?.type,
            });
            let { enabled: n } = N.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eY && null != eK && null != a && n && (0, R.W)(a) && (0, C.Yd)(eK.id);
        }, [e3, e$, ez, eK, eY, eq, eD.startTime, e4, a]),
        e8 = r.useMemo(() => () => W?.(eR === F.h.COMPLETED, eT), [W, eR, eT]),
        e9 = (0, s.A)(() => Date.now(), [eX]),
        te = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: r, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === V.pn.CONFIRM && (e5(), A?.(r), ep)) return void e8();
                eZ(e), eE?.(e), ey(null), e === V.pn.ADD_PAYMENT_STEPS && (l.h.wait(_.ET), l.h.wait(u.T3));
                let o = null != n ? n : eX;
                null === o || s
                    ? k.default.track(q.HAw.PAYMENT_FLOW_LOADED, {
                          ...e3,
                          initial_step: o ?? e,
                          continue_session_initial_step: eA,
                          has_saved_payment_source: eP,
                      })
                    : k.default.track(q.HAw.PAYMENT_FLOW_STEP, {
                          ...e3,
                          ...i,
                          from_step: o,
                          to_step: e === V.pn.ADD_PAYMENT_STEPS ? V.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - e9,
                          flow_duration_ms: a - eD.startTime,
                      });
            },
            [eZ, eE, ey, eX, eA, e3, e9, eD.startTime, e5, A, ep, e8, eP],
        );
    (0, D.b)(eX, ev, te, eO),
        (0, V.zT)(eX, eR, eO),
        (0, L.Q)(eX, eL, te),
        (0, S.A)(e8),
        (0, b.s)(eb, () => W(!1), eY),
        (0, D.QR)(ev);
    let tt = (0, K.L)({ renderHeader: el, handleClose: e8 });
    return (0, i.jsx)(m.e0, {
        children: (0, i.jsx)(o.b, {
            className: Q.Xn,
            isShaking: eh && eR === F.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(ee, {
                step: eX,
                transitionState: y,
                isGift: eY,
                giftRecipient: eK,
                returnRef: eg,
                manaModalSize: eQ,
                modalSizeGetter: eJ,
                handleClose: e8,
                children: (0, i.jsx)($.Ay, {
                    header: tt,
                    initialPlanId: P,
                    subscriptionTier: j,
                    handleStepChange: te,
                    handleClose: e8,
                    analyticsData: e3,
                    setAnalyticsData: e6,
                    trialId: z,
                    trialFooterMessageOverride: J,
                    reviewWarningMessage: et,
                    planGroup: en,
                    openInvoiceId: ei,
                    analyticsLocation: a,
                    onSubscriptionConfirmation: er,
                    renderPurchaseConfirmation: es,
                    postSuccessGuild: ea,
                    followupSKUInfo: eo,
                    referralTrialOfferId: eu,
                    skipConfirm: ep,
                    continueSessionToInitialStep: eA,
                }),
            }),
        }),
    });
}
function en(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: s,
            referralTrialOfferId: o,
            continueSessionToInitialStep: l,
        } = e,
        { selectedSkuId: _, setSelectedPlanId: u } = (0, I.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: E,
            blockedPayments: m,
            hasFetchedSubscriptions: f,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: p,
            defaultPlanId: A,
            startedPaymentFlowWithPaymentSourcesRef: T,
            hasPaymentSources: S,
        } = (0, G.P5)(),
        { isGift: N } = (0, x.Pv)(),
        C = T.current,
        R = (0, W.A)({ isGift: N, skuId: _, referralTrialOfferId: o }),
        [O, y] = r.useState(!0),
        v = (0, a.bG)([P.A], () => P.A.applicationIdsFetched.has(X.tv));
    return (r.useEffect(() => {
        y(!f || !g || p);
    }, [p, g, f]),
    (0, c.A)(
        "Payment Modal",
        O,
        5,
        { hasFetchedSubscriptions: f, hasFetchedSubscriptionPlans: g, currencyLoading: p },
        { tags: { app_context: "billing" } },
    ),
    r.useEffect(() => {
        if ((v || (0, d.LM)(X.tv), O || m)) return;
        let e = (0, j.vT)({ isTrial: R, isGift: N, selectedSkuId: _, startedPaymentFlowWithPaymentSources: C });
        null != l
            ? s(V.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: l })
            : null != n
              ? n !== X.gD.PREMIUM_GROUP_MONTH || S
                  ? s(V.pn.REVIEW)
                  : s(V.pn.ADD_PAYMENT_STEPS)
              : e
                ? (u((0, j.xT)(_, E, A)), s(V.pn.REVIEW))
                : null != t
                  ? s(V.pn.PLAN_SELECT)
                  : s(V.pn.SKU_SELECT);
    }, [l, E, m, v, n, O, s, t, _, u, R, A, N, C, S]),
    O)
        ? (0, i.jsx)(z.A, {})
        : m
          ? (0, i.jsx)(h.oO, {})
          : null;
}
