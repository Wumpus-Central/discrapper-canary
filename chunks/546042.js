"use strict";
n.d(t, { I: () => ee, PaymentModal: () => J });
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
    h = n(725836),
    m = n(169797),
    E = n(357669),
    g = n(319437),
    A = n(70730),
    I = n(45787),
    T = n(51501),
    S = n(422936),
    y = n(612669),
    v = n(511484),
    N = n(251913),
    C = n(869573),
    b = n(344159),
    R = n(97352),
    O = n(469778),
    D = n(954571),
    L = n(45938),
    w = n(927578),
    x = n(937008),
    M = n(156312),
    P = n(166532),
    k = n(566980),
    U = n(379174),
    G = n(800471),
    F = n(169801),
    V = n(216641),
    B = n(462309),
    H = n(534479),
    j = n(482132);
n(322076);
var Y = n(652215),
    W = n(788868),
    K = n(985018),
    z = n(898772);
let $ = 2,
    q = "billing",
    Z = { [o.rIJ.SMALL]: "sm", [o.rIJ.MEDIUM]: "md", [o.rIJ.LARGE]: "xl", [o.rIJ.DYNAMIC]: "md" },
    X = (e, t) => {
        let { isGift: n, canPurchasePremiumGroupNow: r, legacyModalSize: i } = t,
            s = Z[i];
        if (null == e) return s;
        let a = {
            [P.pn.PLAN_SELECT]: n ? "xl" : "md",
            [P.pn.SKU_SELECT]: r ? "xl" : "md",
            [P.pn.SELECT_FREE_SKU]: "lg",
            [P.pn.GIFT_CUSTOMIZATION]: "xl",
            [P.pn.REVIEW]: "md",
            [P.pn.ADD_PAYMENT_STEPS]: "md",
        };
        return e in a ? a[e] : s;
    },
    Q = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: i,
                isGift: s,
                legacyModalSize: a,
                returnRef: o,
                children: l,
            } = e,
            u = (0, y.FY)({ isGift: s }),
            c = X(t, { isGift: s, canPurchasePremiumGroupNow: u, legacyModalSize: a });
        return (0, r.jsx)(m.Jg, {
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
            analyticsLocation: a,
            analyticsObject: u,
            analyticsSourceLocation: _,
            analyticsSubscriptionType: p = Y.rzx.PREMIUM,
            onComplete: m,
            transitionState: y,
            initialPlanId: O,
            subscriptionTier: G,
            onClose: F,
            trialId: H,
            trialFooterMessageOverride: q,
            reviewWarningMessage: Z,
            planGroup: X = W.LE,
            openInvoiceId: J,
            onSubscriptionConfirmation: ee,
            renderPurchaseConfirmation: et,
            postSuccessGuild: en,
            followupSKUInfo: er,
            renderHeader: ei,
            applicationId: es,
            guildId: ea,
            referralTrialOfferId: eo,
            skuId: el,
            onStepChange: eu,
            shakeWhilePurchasing: ec = !1,
            isLargeModal: ed = !1,
            isMediumModal: e_ = !1,
            isDynamicModal: ef = !1,
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
            setPurchaseError: eb,
            paymentAuthenticationState: eR,
            step: eO,
            selectedSku: eD,
            contextMetadata: eL,
            purchaseTokenAuthState: ew,
            activeSubscription: ex,
            priceOptions: eM,
            hasPaymentSources: eP,
            paymentSourceId: ek,
            paymentSources: eU,
            purchaseType: eG,
            defaultPlanId: eF,
            customCheckoutFlow: eV,
            invoicePreview: eB,
        } = (0, M.P5)(),
        eH = (0, U.A)(),
        { isGift: ej, giftRecipient: eY, customGiftMessage: eW, emojiConfetti: eK, soundEffect: ez } = (0, x.Pv)(),
        e$ = o.rIJ.SMALL;
    ed || eH?.isLargeModal
        ? (e$ = o.rIJ.LARGE)
        : e_ || eH?.isMediumModal
          ? (e$ = o.rIJ.MEDIUM)
          : (eO === P.pn.ADD_PAYMENT_STEPS || ef || eH?.isDynamicModal) && (e$ = o.rIJ.DYNAMIC);
    let eq = (0, S.O)(),
        eZ = null != G && !ej && (0, v.U9)(eq, G),
        [eX, eQ] = i.useState({
            load_id: eL.loadId,
            payment_type: Y.frM[eG],
            location: a ?? u,
            source: _,
            subscription_type: p,
            subscription_plan_id: ey?.id,
            is_gift: ej,
            eligible_for_trial: null != H,
            location_stack: n,
            sku_id: el,
            application_id: es,
            guild_id: ea,
            payment_modal_version: eE,
            activity_session_id: eg,
            eligible_for_discount: eZ,
            sku_product_line: eD?.productLine,
            ...t,
        }),
        eJ = (0, V.W)(eU, ek),
        e0 = null != eB ? eB.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        eQ((e) => {
            let n = null != ey ? (0, w.y8)(ey.id, !1, ej, eM) : void 0;
            return {
                ...e,
                subscription_plan_id: ey?.id,
                price: n?.amount,
                regular_price: ey?.price,
                currency: eM.currency,
                sku_id: eT,
                sku_product_line: eD?.productLine,
                ...t,
            };
        });
    }, [ey, eT, ej, eM, t, eD?.productLine]),
        (0, f.Ay)(() => {
            (0, E.b)({
                ...eX,
                continue_session_initial_step: em,
                custom_checkout_flow: eV,
                has_saved_payment_source: eP,
                discount_id: null != eq ? eq.discount_id : e0,
            });
        }),
        i.useEffect(() => {
            null == ey && (null != eF && null != em ? ev(eF) : ev(O)),
                null != el ? eS(el) : null != O && eS(R.A.get(O)?.skuId);
        }, [ev, ey, eS, O, el, eF, em]);
    let e1 = i.useCallback(() => {
            let e = (0, L.lo)(eY) === L.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            D.default.track(Y.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...eX,
                is_custom_message_edited: ej && e && null != eW ? eW !== K.intl.string(K.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: ej && e,
                emoji_name: ej && e && eK?.id == null ? eK?.surrogates : void 0,
                sound_id: ej && e ? ez?.soundId : void 0,
                duration_ms: t - eL.startTime,
                payment_source_type: eJ?.type,
            });
            let { enabled: n } = A.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            ej && null != eY && null != a && n && (0, T.W)(a) && (0, I.Yd)(eY.id);
        }, [eX, eK, eW, eY, ej, ez, eL.startTime, eJ, a]),
        e2 = i.useMemo(() => () => F?.(eA === k.h.COMPLETED, eT), [F, eA, eT]),
        e3 = (0, s.A)(() => Date.now(), [eO]),
        e6 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === P.pn.CONFIRM && (e1(), m?.(i), eh)) return void e2();
                eC(e), eu?.(e), eb(null), eN(null), e === P.pn.ADD_PAYMENT_STEPS && (l.h.wait(c.ET), l.h.wait(d.T3));
                let o = null != n ? n : eO;
                null === o || s
                    ? D.default.track(Y.HAw.PAYMENT_FLOW_LOADED, {
                          ...eX,
                          initial_step: o ?? e,
                          continue_session_initial_step: em,
                          has_saved_payment_source: eP,
                      })
                    : D.default.track(Y.HAw.PAYMENT_FLOW_STEP, {
                          ...eX,
                          ...r,
                          from_step: o,
                          to_step: e === P.pn.ADD_PAYMENT_STEPS ? P.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - e3,
                          flow_duration_ms: a - eL.startTime,
                      });
            },
            [eC, eu, eb, eN, eO, em, eX, e3, eL.startTime, e1, m, eh, e2, eP],
        );
    (0, N.b)(eO, eR, e6, eI),
        (0, P.zT)(eO, eA, eI),
        (0, C.Q)(eO, ew, e6),
        (0, g.A)(e2),
        (0, b.s)(ex, () => F(!1), ej),
        (0, N.QR)(eR);
    let e4 = {
            initialPlanId: O,
            subscriptionTier: G,
            handleStepChange: e6,
            handleClose: e2,
            analyticsData: eX,
            setAnalyticsData: eQ,
            trialId: H,
            trialFooterMessageOverride: q,
            reviewWarningMessage: Z,
            planGroup: X,
            openInvoiceId: J,
            analyticsLocation: a,
            onSubscriptionConfirmation: ee,
            renderPurchaseConfirmation: et,
            postSuccessGuild: en,
            followupSKUInfo: er,
            referralTrialOfferId: eo,
            skipConfirm: eh,
            continueSessionToInitialStep: em,
        },
        e5 = (0, B.L)({ renderHeader: ei, handleClose: e2 });
    return (0, r.jsx)(h.e0, {
        children: (0, r.jsx)(o.bfh, {
            className: z.Xn,
            isShaking: ec && eA === k.h.PURCHASING,
            intensity: $,
            children: (0, r.jsx)(Q, {
                step: eO,
                transitionState: y,
                isGift: ej,
                returnRef: ep,
                legacyModalSize: e$,
                handleClose: e2,
                children: (0, r.jsx)(j.Ay, {
                    header: e5,
                    isLargeModal: ed || eH?.isLargeModal,
                    isDynamicModal: ef || eH?.isDynamicModal,
                    ...e4,
                }),
            }),
        }),
    });
}
function ee(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: s,
            referralTrialOfferId: o,
            handleClose: l,
            continueSessionToInitialStep: c,
        } = e,
        {
            activeSubscription: d,
            blockedPayments: f,
            hasFetchedSubscriptions: h,
            hasFetchedSubscriptionPlans: m,
            currencyLoading: E,
            selectedSkuId: g,
            setSelectedPlanId: A,
            defaultPlanId: I,
            startedPaymentFlowWithPaymentSourcesRef: T,
            hasPaymentSources: S,
        } = (0, M.P5)(),
        { isGift: y } = (0, x.Pv)(),
        v = T.current,
        N = (0, F.A)({ isGift: y, skuId: g, referralTrialOfferId: o }),
        [C, b] = i.useState(!0),
        R = (0, a.bG)([O.A], () => O.A.applicationIdsFetched.has(W.tv));
    return (i.useEffect(() => {
        b(!h || !m || E);
    }, [E, m, h]),
    (0, _.A)(
        "Payment Modal",
        C,
        5,
        { hasFetchedSubscriptions: h, hasFetchedSubscriptionPlans: m, currencyLoading: E },
        { tags: { app_context: q } },
    ),
    i.useEffect(() => {
        if ((R || (0, u.LM)(W.tv), C || f)) return;
        let e = (0, G.vT)({ isTrial: N, isGift: y, selectedSkuId: g, startedPaymentFlowWithPaymentSources: v });
        null != c
            ? s(P.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: c })
            : null != n
              ? n !== W.gD.PREMIUM_GROUP_MONTH || S
                  ? s(P.pn.REVIEW)
                  : s(P.pn.ADD_PAYMENT_STEPS)
              : e
                ? (A((0, G.xT)(g, d, I)), s(P.pn.REVIEW))
                : null != t
                  ? s(P.pn.PLAN_SELECT)
                  : s(P.pn.SKU_SELECT);
    }, [c, d, f, R, n, C, s, t, g, A, N, I, y, v, S]),
    C)
        ? (0, r.jsx)(H.A, {})
        : f
          ? (0, r.jsx)(p.oO, { onClose: l })
          : null;
}
