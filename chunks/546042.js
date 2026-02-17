"use strict";
n.d(t, { I: () => ee, PaymentModal: () => J });
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
    p = n(169797),
    g = n(357669),
    E = n(319437),
    A = n(70730),
    I = n(45787),
    T = n(51501),
    y = n(422936),
    S = n(612669),
    v = n(511484),
    C = n(251913),
    b = n(869573),
    N = n(344159),
    R = n(97352),
    O = n(469778),
    D = n(954571),
    L = n(45938),
    w = n(927578),
    x = n(937008),
    P = n(156312),
    M = n(166532),
    k = n(566980),
    U = n(379174),
    G = n(800471),
    F = n(169801),
    V = n(216641),
    B = n(462309),
    j = n(534479),
    H = n(482132);
n(322076);
var Y = n(652215),
    W = n(788868),
    K = n(985018),
    $ = n(898772);
let z = 2,
    q = "billing",
    X = { [o.rIJ.SMALL]: "sm", [o.rIJ.MEDIUM]: "md", [o.rIJ.LARGE]: "xl", [o.rIJ.DYNAMIC]: "md" },
    Z = (e, t) => {
        let { isGift: n, canPurchasePremiumGroup: r, legacyModalSize: i } = t,
            a = X[i];
        if (null == e) return a;
        let s = {
            [M.pn.PLAN_SELECT]: n ? "xl" : "md",
            [M.pn.SKU_SELECT]: r ? "xl" : "md",
            [M.pn.SELECT_FREE_SKU]: "lg",
            [M.pn.GIFT_CUSTOMIZATION]: "xl",
            [M.pn.REVIEW]: "md",
            [M.pn.ADD_PAYMENT_STEPS]: "md",
        };
        return e in s ? s[e] : a;
    },
    Q = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: i,
                isGift: a,
                legacyModalSize: s,
                returnRef: o,
                children: l,
            } = e,
            u = (0, S.PA)() && !a,
            c = Z(t, { isGift: a, canPurchasePremiumGroup: u, legacyModalSize: s });
        return (0, r.jsx)(p.Jg, {
            transitionState: n,
            size: c,
            returnRef: o,
            onClose: async () => {
                await i();
            },
            children: l,
        });
    };
function J(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: s,
            analyticsObject: u,
            analyticsSourceLocation: _,
            analyticsSubscriptionType: h = Y.rzx.PREMIUM,
            onComplete: p,
            transitionState: S,
            initialPlanId: O,
            subscriptionTier: G,
            onClose: F,
            trialId: j,
            trialFooterMessageOverride: q,
            reviewWarningMessage: X,
            planGroup: Z = W.LE,
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
            returnRef: eh,
            skipConfirm: ep = !1,
            continueSessionToInitialStep: em,
            paymentModalVersion: eg = "v1",
        } = e,
        {
            activitySessionId: eE,
            purchaseState: eA,
            setPurchaseState: eI,
            selectedSkuId: eT,
            setSelectedSkuId: ey,
            selectedPlan: eS,
            setSelectedPlanId: ev,
            setSelectedPlanNotification: eC,
            setStep: eb,
            setPurchaseError: eN,
            paymentAuthenticationState: eR,
            step: eO,
            selectedSku: eD,
            contextMetadata: eL,
            purchaseTokenAuthState: ew,
            activeSubscription: ex,
            priceOptions: eP,
            hasPaymentSources: eM,
            paymentSourceId: ek,
            paymentSources: eU,
            purchaseType: eG,
            defaultPlanId: eF,
            customCheckoutFlow: eV,
            invoicePreview: eB,
        } = (0, P.P5)(),
        ej = (0, U.A)(),
        { isGift: eH, giftRecipient: eY, customGiftMessage: eW, emojiConfetti: eK, soundEffect: e$ } = (0, x.Pv)(),
        ez = o.rIJ.SMALL;
    ed || ej?.isLargeModal
        ? (ez = o.rIJ.LARGE)
        : e_ || ej?.isMediumModal
          ? (ez = o.rIJ.MEDIUM)
          : (eO === M.pn.ADD_PAYMENT_STEPS || ef || ej?.isDynamicModal) && (ez = o.rIJ.DYNAMIC);
    let eq = (0, y.O)(),
        eX = null != G && !eH && (0, v.U9)(eq, G),
        [eZ, eQ] = i.useState({
            load_id: eL.loadId,
            payment_type: Y.frM[eG],
            location: s ?? u,
            source: _,
            subscription_type: h,
            subscription_plan_id: eS?.id,
            is_gift: eH,
            eligible_for_trial: null != j,
            location_stack: n,
            sku_id: el,
            application_id: ea,
            guild_id: es,
            payment_modal_version: eg,
            activity_session_id: eE,
            eligible_for_discount: eX,
            sku_product_line: eD?.productLine,
            ...t,
        }),
        eJ = (0, V.W)(eU, ek),
        e0 = null != eB ? eB.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        eQ((e) => {
            let n = null != eS ? (0, w.y8)(eS.id, !1, eH, eP) : void 0;
            return {
                ...e,
                subscription_plan_id: eS?.id,
                price: n?.amount,
                regular_price: eS?.price,
                currency: eP.currency,
                sku_id: eT,
                sku_product_line: eD?.productLine,
                ...t,
            };
        });
    }, [eS, eT, eH, eP, t, eD?.productLine]),
        (0, f.Ay)(() => {
            (0, g.b)({
                ...eZ,
                continue_session_initial_step: em,
                custom_checkout_flow: eV,
                has_saved_payment_source: eM,
                discount_id: null != eq ? eq.discount_id : e0,
            });
        }),
        i.useEffect(() => {
            null == eS && (null != eF && null != em ? ev(eF) : ev(O)),
                null != el ? ey(el) : null != O && ey(R.A.get(O)?.skuId);
        }, [ev, eS, ey, O, el, eF, em]);
    let e1 = i.useCallback(() => {
            let e = (0, L.lo)(eY) === L.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            D.default.track(Y.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...eZ,
                is_custom_message_edited: eH && e && null != eW ? eW !== K.intl.string(K.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eH && e,
                emoji_name: eH && e && eK?.id == null ? eK?.surrogates : void 0,
                sound_id: eH && e ? e$?.soundId : void 0,
                duration_ms: t - eL.startTime,
                payment_source_type: eJ?.type,
            });
            let { enabled: n } = A.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eH && null != eY && null != s && n && (0, T.W)(s) && (0, I.Yd)(eY.id);
        }, [eZ, eK, eW, eY, eH, e$, eL.startTime, eJ, s]),
        e2 = i.useMemo(() => () => F?.(eA === k.h.COMPLETED, eT), [F, eA, eT]),
        e3 = (0, a.A)(() => Date.now(), [eO]),
        e6 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    s = Date.now();
                if (e === M.pn.CONFIRM && (e1(), p?.(i), ep)) return void e2();
                eb(e), eu?.(e), eN(null), eC(null), e === M.pn.ADD_PAYMENT_STEPS && (l.h.wait(c.ET), l.h.wait(d.T3));
                let o = null != n ? n : eO;
                null === o || a
                    ? D.default.track(Y.HAw.PAYMENT_FLOW_LOADED, {
                          ...eZ,
                          initial_step: o ?? e,
                          continue_session_initial_step: em,
                          has_saved_payment_source: eM,
                      })
                    : D.default.track(Y.HAw.PAYMENT_FLOW_STEP, {
                          ...eZ,
                          ...r,
                          from_step: o,
                          to_step: e === M.pn.ADD_PAYMENT_STEPS ? M.pn.PAYMENT_TYPE : e,
                          step_duration_ms: s - e3,
                          flow_duration_ms: s - eL.startTime,
                      });
            },
            [eb, eu, eN, eC, eO, em, eZ, e3, eL.startTime, e1, p, ep, e2, eM],
        );
    (0, C.b)(eO, eR, e6, eI),
        (0, M.zT)(eO, eA, eI),
        (0, b.Q)(eO, ew, e6),
        (0, E.A)(e2),
        (0, N.s)(ex, () => F(!1), eH),
        (0, C.QR)(eR);
    let e4 = {
            initialPlanId: O,
            subscriptionTier: G,
            handleStepChange: e6,
            handleClose: e2,
            analyticsData: eZ,
            setAnalyticsData: eQ,
            trialId: j,
            trialFooterMessageOverride: q,
            reviewWarningMessage: X,
            planGroup: Z,
            openInvoiceId: J,
            analyticsLocation: s,
            onSubscriptionConfirmation: ee,
            renderPurchaseConfirmation: et,
            postSuccessGuild: en,
            followupSKUInfo: er,
            referralTrialOfferId: eo,
            skipConfirm: ep,
            continueSessionToInitialStep: em,
        },
        e5 = (0, B.L)({ renderHeader: ei, handleClose: e2 });
    return (0, r.jsx)(o.bfh, {
        className: $.Xn,
        isShaking: ec && eA === k.h.PURCHASING,
        intensity: z,
        children: (0, r.jsx)(Q, {
            step: eO,
            transitionState: S,
            isGift: eH,
            returnRef: eh,
            legacyModalSize: ez,
            handleClose: e2,
            children: (0, r.jsx)(H.Ay, {
                header: e5,
                isLargeModal: ed || ej?.isLargeModal,
                isDynamicModal: ef || ej?.isDynamicModal,
                ...e4,
            }),
        }),
    });
}
function ee(e) {
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
        } = (0, P.P5)(),
        { isGift: v } = (0, x.Pv)(),
        C = y.current,
        b = (0, F.A)({ isGift: v, skuId: A, referralTrialOfferId: o }),
        [N, R] = i.useState(!0),
        D = (0, s.bG)([O.A], () => O.A.applicationIdsFetched.has(W.tv));
    return (i.useEffect(() => {
        R(!p || !g || E);
    }, [E, g, p]),
    (0, _.A)(
        "Payment Modal",
        N,
        5,
        { hasFetchedSubscriptions: p, hasFetchedSubscriptionPlans: g, currencyLoading: E },
        { tags: { app_context: q } },
    ),
    i.useEffect(() => {
        if ((D || (0, u.LM)(W.tv), N || f)) return;
        let e = (0, G.vT)({ isTrial: b, isGift: v, selectedSkuId: A, startedPaymentFlowWithPaymentSources: C });
        null != c
            ? a(M.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: c })
            : null != n
              ? n !== W.gD.PREMIUM_GROUP_MONTH || S
                  ? a(M.pn.REVIEW)
                  : a(M.pn.ADD_PAYMENT_STEPS)
              : e
                ? (I((0, G.xT)(A, d, T)), a(M.pn.REVIEW))
                : null != t
                  ? a(M.pn.PLAN_SELECT)
                  : a(M.pn.SKU_SELECT);
    }, [c, d, f, D, n, N, a, t, A, I, b, T, v, C, S]),
    N)
        ? (0, r.jsx)(j.A, {})
        : f
          ? (0, r.jsx)(h.oO, { onClose: l })
          : null;
}
