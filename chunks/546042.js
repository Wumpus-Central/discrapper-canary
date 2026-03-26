"use strict";
n.d(t, { I: () => et, PaymentModal: () => ee });
var r = n(627968),
    i = n(64700),
    s = n(330140),
    a = n(417597),
    o = n(397927),
    l = n(73153),
    u = n(339048),
    c = n(158032),
    d = n(830382),
    _ = n(428644),
    f = n(964486),
    p = n(459793),
    h = n(608805),
    m = n(725836),
    E = n(169797),
    g = n(357669),
    A = n(319437),
    I = n(70730),
    T = n(45787),
    S = n(51501),
    y = n(422936),
    v = n(612669),
    N = n(511484),
    C = n(251913),
    R = n(869573),
    O = n(344159),
    b = n(97352),
    D = n(469778),
    L = n(954571),
    w = n(45938),
    M = n(927578),
    x = n(937008),
    P = n(156312),
    k = n(166532),
    U = n(566980),
    G = n(379174),
    F = n(800471),
    V = n(169801),
    B = n(216641),
    H = n(462309),
    j = n(534479),
    Y = n(482132);
n(322076);
var W = n(652215),
    K = n(788868),
    $ = n(985018),
    z = n(840771);
let q = 2,
    Z = "billing",
    X = { [k.pn.GIFT_CUSTOMIZATION]: "xl", [k.pn.REVIEW]: "md", [k.pn.ADD_PAYMENT_STEPS]: "md" },
    Q = (e, t) => {
        let { manaModalSizeFromProps: n } = t,
            r = n ?? "md";
        return null == e ? r : e in X ? X[e] : r;
    },
    J = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: i,
                isGift: s,
                giftRecipient: a,
                manaModalSize: o,
                modalSizeGetter: l,
                returnRef: u,
                children: c,
            } = e,
            d = (0, v.FY)({ isGift: s }),
            _ =
                null != l
                    ? l({ canCurrentlyPurchasePremiumGroup: d, isGift: s, giftRecipient: a })
                    : Q(t, { manaModalSizeFromProps: o });
        return (0, r.jsx)(E.Jg, {
            transitionState: n,
            size: _,
            returnRef: u,
            onClose: async () => {
                await i();
            },
            children: c,
        });
    };
function ee(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: u,
            analyticsSourceLocation: _,
            analyticsSubscriptionType: p = W.rzx.PREMIUM,
            onComplete: E,
            transitionState: v,
            initialPlanId: D,
            subscriptionTier: F,
            onClose: V,
            trialId: j,
            trialFooterMessageOverride: Z,
            reviewWarningMessage: X,
            planGroup: Q = K.LE,
            openInvoiceId: ee,
            onSubscriptionConfirmation: et,
            renderPurchaseConfirmation: en,
            postSuccessGuild: er,
            followupSKUInfo: ei,
            renderHeader: es,
            applicationId: ea,
            guildId: eo,
            referralTrialOfferId: el,
            skuId: eu,
            onStepChange: ec,
            shakeWhilePurchasing: ed = !1,
            isLargeModal: e_ = !1,
            isMediumModal: ef = !1,
            returnRef: ep,
            skipConfirm: eh = !1,
            continueSessionToInitialStep: em,
            paymentModalVersion: eE = "v1",
        } = e,
        {
            activitySessionId: eg,
            purchaseState: eA,
            setPurchaseState: eI,
            selectedSkuId: eT,
            setSelectedSkuId: eS,
            selectedPlan: ey,
            setSelectedPlanId: ev,
            setSelectedPlanNotification: eN,
            setStep: eC,
            setPurchaseError: eR,
            paymentAuthenticationState: eO,
            step: eb,
            selectedSku: eD,
            contextMetadata: eL,
            purchaseTokenAuthState: ew,
            activeSubscription: eM,
            priceOptions: ex,
            hasPaymentSources: eP,
            paymentSourceId: ek,
            paymentSources: eU,
            purchaseType: eG,
            defaultPlanId: eF,
            customCheckoutFlow: eV,
            invoicePreview: eB,
            displayCurrency: eH,
        } = (0, P.P5)(),
        ej = (0, G.A)(),
        { isGift: eY, giftRecipient: eW, customGiftMessage: eK, emojiConfetti: e$, soundEffect: ez } = (0, x.Pv)(),
        eq = "sm";
    e_ ? (eq = "xl") : (ef || eb === k.pn.ADD_PAYMENT_STEPS) && (eq = "md");
    let eZ = ej?.modalSizeGetter,
        eX = (0, h.D7)({ location: "PaymentModal" }),
        eQ = (0, y.O)(),
        eJ = null != F && !eY && (0, N.U9)(eQ, F),
        [e0, e1] = i.useState({
            load_id: eL.loadId,
            payment_type: W.frM[eG],
            location: a ?? u,
            source: _,
            subscription_type: p,
            subscription_plan_id: ey?.id ?? D,
            is_gift: eY,
            eligible_for_trial: null != j,
            location_stack: n,
            sku_id: eu,
            application_id: ea,
            guild_id: eo,
            payment_modal_version: eE,
            activity_session_id: eg,
            eligible_for_discount: eJ,
            sku_product_line: eD?.productLine,
            checkout_design: eX ? h.rS.UNIFIED : h.rS.LEGACY,
            ...t,
        }),
        e2 = (0, B.W)(eU, ek),
        e3 = null != eB ? eB.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e1((e) => {
            let n = null != ey ? (0, M.y8)(ey.id, !1, eY, { paymentSourceId: ex.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: ey?.id,
                price: n?.amount,
                regular_price: ey?.price,
                currency: eH,
                sku_id: eT,
                sku_product_line: eD?.productLine,
                ...t,
            };
        });
    }, [ey, eT, eY, ex, eH, t, eD?.productLine]),
        (0, f.Ay)(() => {
            (0, g.b)({
                ...e0,
                continue_session_initial_step: em,
                custom_checkout_flow: eV,
                has_saved_payment_source: eP,
                discount_id: null != eQ ? eQ.discount_id : e3,
            });
        }),
        i.useEffect(() => {
            null == ey && (null != eF && null != em ? ev(eF) : ev(D)),
                null != eu ? eS(eu) : null != D && eS(b.A.get(D)?.skuId);
        }, [ev, ey, eS, D, eu, eF, em]);
    let e6 = i.useCallback(() => {
            let e = (0, w.lo)(eW) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            L.default.track(W.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e0,
                is_custom_message_edited: eY && e && null != eK ? eK !== $.intl.string($.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eY && e,
                emoji_name: eY && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eY && e ? ez?.soundId : void 0,
                duration_ms: t - eL.startTime,
                payment_source_type: e2?.type,
            });
            let { enabled: n } = I.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eY && null != eW && null != a && n && (0, S.W)(a) && (0, T.Yd)(eW.id);
        }, [e0, e$, eK, eW, eY, ez, eL.startTime, e2, a]),
        e4 = i.useMemo(() => () => V?.(eA === U.h.COMPLETED, eT), [V, eA, eT]),
        e5 = (0, s.A)(() => Date.now(), [eb]),
        e7 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === k.pn.CONFIRM && (e6(), E?.(i), eh)) return void e4();
                eC(e), ec?.(e), eR(null), eN(null), e === k.pn.ADD_PAYMENT_STEPS && (l.h.wait(c.ET), l.h.wait(d.T3));
                let o = null != n ? n : eb;
                null === o || s
                    ? L.default.track(W.HAw.PAYMENT_FLOW_LOADED, {
                          ...e0,
                          initial_step: o ?? e,
                          continue_session_initial_step: em,
                          has_saved_payment_source: eP,
                      })
                    : L.default.track(W.HAw.PAYMENT_FLOW_STEP, {
                          ...e0,
                          ...r,
                          from_step: o,
                          to_step: e === k.pn.ADD_PAYMENT_STEPS ? k.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - e5,
                          flow_duration_ms: a - eL.startTime,
                      });
            },
            [eC, ec, eR, eN, eb, em, e0, e5, eL.startTime, e6, E, eh, e4, eP],
        );
    (0, C.b)(eb, eO, e7, eI),
        (0, k.zT)(eb, eA, eI),
        (0, R.Q)(eb, ew, e7),
        (0, A.A)(e4),
        (0, O.s)(eM, () => V(!1), eY),
        (0, C.QR)(eO);
    let e8 = {
            initialPlanId: D,
            subscriptionTier: F,
            handleStepChange: e7,
            handleClose: e4,
            analyticsData: e0,
            setAnalyticsData: e1,
            trialId: j,
            trialFooterMessageOverride: Z,
            reviewWarningMessage: X,
            planGroup: Q,
            openInvoiceId: ee,
            analyticsLocation: a,
            onSubscriptionConfirmation: et,
            renderPurchaseConfirmation: en,
            postSuccessGuild: er,
            followupSKUInfo: ei,
            referralTrialOfferId: el,
            skipConfirm: eh,
            continueSessionToInitialStep: em,
        },
        e9 = (0, H.L)({ renderHeader: es, handleClose: e4 });
    return (0, r.jsx)(m.e0, {
        children: (0, r.jsx)(o.bfh, {
            className: z.Xn,
            isShaking: ed && eA === U.h.PURCHASING,
            intensity: q,
            children: (0, r.jsx)(J, {
                step: eb,
                transitionState: v,
                isGift: eY,
                giftRecipient: eW,
                returnRef: ep,
                manaModalSize: eq,
                modalSizeGetter: eZ,
                handleClose: e4,
                children: (0, r.jsx)(Y.Ay, { header: e9, ...e8 }),
            }),
        }),
    });
}
function et(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: s,
            referralTrialOfferId: o,
            continueSessionToInitialStep: l,
        } = e,
        {
            activeSubscription: c,
            blockedPayments: d,
            hasFetchedSubscriptions: f,
            hasFetchedSubscriptionPlans: h,
            currencyLoading: m,
            selectedSkuId: E,
            setSelectedPlanId: g,
            defaultPlanId: A,
            startedPaymentFlowWithPaymentSourcesRef: I,
            hasPaymentSources: T,
        } = (0, P.P5)(),
        { isGift: S } = (0, x.Pv)(),
        y = I.current,
        v = (0, V.A)({ isGift: S, skuId: E, referralTrialOfferId: o }),
        [N, C] = i.useState(!0),
        R = (0, a.bG)([D.A], () => D.A.applicationIdsFetched.has(K.tv));
    return (i.useEffect(() => {
        C(!f || !h || m);
    }, [m, h, f]),
    (0, _.A)(
        "Payment Modal",
        N,
        5,
        { hasFetchedSubscriptions: f, hasFetchedSubscriptionPlans: h, currencyLoading: m },
        { tags: { app_context: Z } },
    ),
    i.useEffect(() => {
        if ((R || (0, u.LM)(K.tv), N || d)) return;
        let e = (0, F.vT)({ isTrial: v, isGift: S, selectedSkuId: E, startedPaymentFlowWithPaymentSources: y });
        null != l
            ? s(k.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: l })
            : null != n
              ? n !== K.gD.PREMIUM_GROUP_MONTH || T
                  ? s(k.pn.REVIEW)
                  : s(k.pn.ADD_PAYMENT_STEPS)
              : e
                ? (g((0, F.xT)(E, c, A)), s(k.pn.REVIEW))
                : null != t
                  ? s(k.pn.PLAN_SELECT)
                  : s(k.pn.SKU_SELECT);
    }, [l, c, d, R, n, N, s, t, E, g, v, A, S, y, T]),
    N)
        ? (0, r.jsx)(j.A, {})
        : d
          ? (0, r.jsx)(p.oO, {})
          : null;
}
