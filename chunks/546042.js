"use strict";
n.d(t, { I: () => et, PaymentModal: () => ee });
var r = n(627968),
    i = n(64700),
    a = n(330140),
    s = n(417597),
    o = n(397927),
    l = n(73153),
    u = n(339048),
    c = n(158032),
    d = n(830382),
    _ = n(428644),
    f = n(964486),
    h = n(459793),
    p = n(725836),
    g = n(169797),
    E = n(357669),
    A = n(319437),
    I = n(70730),
    T = n(45787),
    y = n(51501),
    S = n(422936),
    v = n(612669),
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
    F = n(800471),
    V = n(169801),
    B = n(216641),
    j = n(462309),
    H = n(534479),
    Y = n(482132);
n(322076);
var W = n(652215),
    K = n(788868),
    $ = n(985018),
    z = n(898772);
let q = 2,
    X = "billing",
    Z = { [o.rIJ.SMALL]: "sm", [o.rIJ.MEDIUM]: "md", [o.rIJ.LARGE]: "xl", [o.rIJ.DYNAMIC]: "md" },
    Q = (e, t) => {
        let { isGift: n, canPurchasePremiumGroup: r, legacyModalSize: i } = t,
            a = Z[i];
        if (null == e) return a;
        let s = {
            [k.pn.PLAN_SELECT]: n ? "xl" : "md",
            [k.pn.SKU_SELECT]: r ? "xl" : "md",
            [k.pn.SELECT_FREE_SKU]: "lg",
            [k.pn.GIFT_CUSTOMIZATION]: "xl",
            [k.pn.REVIEW]: "md",
            [k.pn.ADD_PAYMENT_STEPS]: "md",
        };
        return e in s ? s[e] : a;
    },
    J = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: i,
                isGift: a,
                legacyModalSize: s,
                returnRef: o,
                children: l,
            } = e,
            u = (0, v.PA)() && !a,
            c = Q(t, { isGift: a, canPurchasePremiumGroup: u, legacyModalSize: s });
        return (0, r.jsx)(g.Jg, {
            transitionState: n,
            size: c,
            returnRef: o,
            onClose: async () => {
                await i();
            },
            children: l,
        });
    };
function ee(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: s,
            analyticsObject: u,
            analyticsSourceLocation: _,
            analyticsSubscriptionType: h = W.rzx.PREMIUM,
            onComplete: g,
            transitionState: v,
            initialPlanId: D,
            subscriptionTier: F,
            onClose: V,
            trialId: H,
            trialFooterMessageOverride: X,
            reviewWarningMessage: Z,
            planGroup: Q = K.LE,
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
            returnRef: ep,
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
            purchaseType: eF,
            defaultPlanId: eV,
            customCheckoutFlow: eB,
            invoicePreview: ej,
        } = (0, M.P5)(),
        eH = (0, G.A)(),
        { isGift: eY, giftRecipient: eW, customGiftMessage: eK, emojiConfetti: e$, soundEffect: ez } = (0, P.Pv)(),
        eq = o.rIJ.SMALL;
    e_ || eH?.isLargeModal
        ? (eq = o.rIJ.LARGE)
        : ef || eH?.isMediumModal
          ? (eq = o.rIJ.MEDIUM)
          : (eD === k.pn.ADD_PAYMENT_STEPS || eh || eH?.isDynamicModal) && (eq = o.rIJ.DYNAMIC);
    let eX = (0, S.O)(),
        eZ = null != F && !eY && (0, C.U9)(eX, F),
        [eQ, eJ] = i.useState({
            load_id: ew.loadId,
            payment_type: W.frM[eF],
            location: s ?? u,
            source: _,
            subscription_type: h,
            subscription_plan_id: ev?.id,
            is_gift: eY,
            eligible_for_trial: null != H,
            location_stack: n,
            sku_id: eu,
            application_id: es,
            guild_id: eo,
            payment_modal_version: eE,
            activity_session_id: eA,
            eligible_for_discount: eZ,
            sku_product_line: eL?.productLine,
            ...t,
        }),
        e0 = (0, B.W)(eG, eU),
        e1 = null != ej ? ej.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        eJ((e) => {
            let n = null != ev ? (0, x.y8)(ev.id, !1, eY, eM) : void 0;
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
    }, [ev, ey, eY, eM, t, eL?.productLine]),
        (0, f.Ay)(() => {
            (0, E.b)({
                ...eQ,
                continue_session_initial_step: eg,
                custom_checkout_flow: eB,
                has_saved_payment_source: ek,
                discount_id: null != eX ? eX.discount_id : e1,
            });
        }),
        i.useEffect(() => {
            null == ev && (null != eV && null != eg ? eC(eV) : eC(D)),
                null != eu ? eS(eu) : null != D && eS(O.A.get(D)?.skuId);
        }, [eC, ev, eS, D, eu, eV, eg]);
    let e2 = i.useCallback(() => {
            let e = (0, w.lo)(eW) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            L.default.track(W.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...eQ,
                is_custom_message_edited: eY && e && null != eK ? eK !== $.intl.string($.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eY && e,
                emoji_name: eY && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eY && e ? ez?.soundId : void 0,
                duration_ms: t - ew.startTime,
                payment_source_type: e0?.type,
            });
            let { enabled: n } = I.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eY && null != eW && null != s && n && (0, y.W)(s) && (0, T.Yd)(eW.id);
        }, [eQ, e$, eK, eW, eY, ez, ew.startTime, e0, s]),
        e3 = i.useMemo(() => () => V?.(eI === U.h.COMPLETED, ey), [V, eI, ey]),
        e6 = (0, a.A)(() => Date.now(), [eD]),
        e4 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    s = Date.now();
                if (e === k.pn.CONFIRM && (e2(), g?.(i), em)) return void e3();
                eN(e), ec?.(e), eR(null), eb(null), e === k.pn.ADD_PAYMENT_STEPS && (l.h.wait(c.ET), l.h.wait(d.T3));
                let o = null != n ? n : eD;
                null === o || a
                    ? L.default.track(W.HAw.PAYMENT_FLOW_LOADED, {
                          ...eQ,
                          initial_step: o ?? e,
                          continue_session_initial_step: eg,
                          has_saved_payment_source: ek,
                      })
                    : L.default.track(W.HAw.PAYMENT_FLOW_STEP, {
                          ...eQ,
                          ...r,
                          from_step: o,
                          to_step: e === k.pn.ADD_PAYMENT_STEPS ? k.pn.PAYMENT_TYPE : e,
                          step_duration_ms: s - e6,
                          flow_duration_ms: s - ew.startTime,
                      });
            },
            [eN, ec, eR, eb, eD, eg, eQ, e6, ew.startTime, e2, g, em, e3, ek],
        );
    (0, b.b)(eD, eO, e4, eT),
        (0, k.zT)(eD, eI, eT),
        (0, N.Q)(eD, ex, e4),
        (0, A.A)(e3),
        (0, R.s)(eP, () => V(!1), eY),
        (0, b.QR)(eO);
    let e5 = {
            initialPlanId: D,
            subscriptionTier: F,
            handleStepChange: e4,
            handleClose: e3,
            analyticsData: eQ,
            setAnalyticsData: eJ,
            trialId: H,
            trialFooterMessageOverride: X,
            reviewWarningMessage: Z,
            planGroup: Q,
            openInvoiceId: ee,
            analyticsLocation: s,
            onSubscriptionConfirmation: et,
            renderPurchaseConfirmation: en,
            postSuccessGuild: er,
            followupSKUInfo: ei,
            referralTrialOfferId: el,
            skipConfirm: em,
            continueSessionToInitialStep: eg,
        },
        e7 = (0, j.L)({ renderHeader: ea, handleClose: e3 });
    return (0, r.jsx)(p.e0, {
        children: (0, r.jsx)(o.bfh, {
            className: z.Xn,
            isShaking: ed && eI === U.h.PURCHASING,
            intensity: q,
            children: (0, r.jsx)(J, {
                step: eD,
                transitionState: v,
                isGift: eY,
                returnRef: ep,
                legacyModalSize: eq,
                handleClose: e3,
                children: (0, r.jsx)(Y.Ay, {
                    header: e7,
                    isLargeModal: e_ || eH?.isLargeModal,
                    isDynamicModal: eh || eH?.isDynamicModal,
                    ...e5,
                }),
            }),
        }),
    });
}
function et(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: a,
            referralTrialOfferId: o,
            handleClose: l,
            continueSessionToInitialStep: c,
        } = e,
        {
            activeSubscription: d,
            blockedPayments: f,
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: E,
            selectedSkuId: A,
            setSelectedPlanId: I,
            defaultPlanId: T,
            startedPaymentFlowWithPaymentSourcesRef: y,
            hasPaymentSources: S,
        } = (0, M.P5)(),
        { isGift: v } = (0, P.Pv)(),
        C = y.current,
        b = (0, V.A)({ isGift: v, skuId: A, referralTrialOfferId: o }),
        [N, R] = i.useState(!0),
        O = (0, s.bG)([D.A], () => D.A.applicationIdsFetched.has(K.tv));
    return (i.useEffect(() => {
        R(!p || !g || E);
    }, [E, g, p]),
    (0, _.A)(
        "Payment Modal",
        N,
        5,
        { hasFetchedSubscriptions: p, hasFetchedSubscriptionPlans: g, currencyLoading: E },
        { tags: { app_context: X } },
    ),
    i.useEffect(() => {
        if ((O || (0, u.LM)(K.tv), N || f)) return;
        let e = (0, F.vT)({ isTrial: b, isGift: v, selectedSkuId: A, startedPaymentFlowWithPaymentSources: C });
        null != c
            ? a(k.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: c })
            : null != n
              ? n !== K.gD.PREMIUM_GROUP_MONTH || S
                  ? a(k.pn.REVIEW)
                  : a(k.pn.ADD_PAYMENT_STEPS)
              : e
                ? (I((0, F.xT)(A, d, T)), a(k.pn.REVIEW))
                : null != t
                  ? a(k.pn.PLAN_SELECT)
                  : a(k.pn.SKU_SELECT);
    }, [c, d, f, O, n, N, a, t, A, I, b, T, v, C, S]),
    N)
        ? (0, r.jsx)(H.A, {})
        : f
          ? (0, r.jsx)(h.oO, { onClose: l })
          : null;
}
