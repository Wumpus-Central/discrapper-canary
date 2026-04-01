"use strict";
n.d(t, { I: () => en, PaymentModal: () => et });
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
    m = n(742810),
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
    F = n(615310),
    V = n(800471),
    B = n(169801),
    H = n(216641),
    j = n(462309),
    Y = n(534479),
    W = n(482132);
n(322076);
var K = n(652215),
    $ = n(788868),
    z = n(985018),
    q = n(840771);
let Z = 2,
    X = "billing",
    Q = { [k.pn.GIFT_CUSTOMIZATION]: "xl", [k.pn.REVIEW]: "md", [k.pn.ADD_PAYMENT_STEPS]: "md" },
    J = (e, t) => {
        let { manaModalSizeFromProps: n } = t,
            r = n ?? "md";
        return null == e ? r : e in Q ? Q[e] : r;
    },
    ee = (e) => {
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
                    : J(t, { manaModalSizeFromProps: o });
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
function et(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: u,
            analyticsSourceLocation: _,
            analyticsSubscriptionType: p = K.rzx.PREMIUM,
            onComplete: E,
            transitionState: v,
            initialPlanId: D,
            subscriptionTier: V,
            onClose: B,
            trialId: Y,
            trialFooterMessageOverride: X,
            reviewWarningMessage: Q,
            planGroup: J = $.LE,
            openInvoiceId: et,
            onSubscriptionConfirmation: en,
            renderPurchaseConfirmation: er,
            postSuccessGuild: ei,
            followupSKUInfo: es,
            renderHeader: ea,
            applicationId: eo,
            guildId: el,
            referralTrialOfferId: eu,
            skuId: ec,
            onStepChange: ed,
            shakeWhilePurchasing: e_ = !1,
            isLargeModal: ef = !1,
            isMediumModal: ep = !1,
            returnRef: eh,
            skipConfirm: em = !1,
            continueSessionToInitialStep: eE,
            paymentModalVersion: eg = "v1",
        } = e,
        {
            activitySessionId: eA,
            purchaseState: eI,
            setPurchaseState: eT,
            selectedSkuId: eS,
            setSelectedSkuId: ey,
            selectedPlan: ev,
            setSelectedPlanId: eN,
            setPurchaseError: eC,
            paymentAuthenticationState: eR,
            selectedSku: eO,
            contextMetadata: eb,
            purchaseTokenAuthState: eD,
            activeSubscription: eL,
            priceOptions: ew,
            hasPaymentSources: eM,
            paymentSourceId: ex,
            paymentSources: eP,
            purchaseType: ek,
            defaultPlanId: eU,
            customCheckoutFlow: eG,
            invoicePreview: eF,
            displayCurrency: eV,
            unifiedCheckoutFlow: eB,
        } = (0, P.P5)(),
        eH = (0, G.A)(),
        { isGift: ej, giftRecipient: eY, customGiftMessage: eW, emojiConfetti: eK, soundEffect: e$ } = (0, x.Pv)(),
        ez = (0, F.bB)(),
        eq = (0, F.l)(),
        eZ = "sm";
    ef ? (eZ = "xl") : (ep || ez === k.pn.ADD_PAYMENT_STEPS) && (eZ = "md");
    let eX = eH?.modalSizeGetter,
        eQ = (0, m.D7)({ location: "PaymentModal" }),
        eJ = (0, y.O)(),
        e0 = null != V && !ej && (0, N.U9)(eJ, V),
        [e1, e2] = i.useState({
            load_id: eb.loadId,
            payment_type: K.frM[ek],
            location: a ?? u,
            source: _,
            subscription_type: p,
            subscription_plan_id: ev?.id ?? D,
            is_gift: ej,
            eligible_for_trial: null != Y,
            location_stack: n,
            sku_id: ec,
            application_id: eo,
            guild_id: el,
            payment_modal_version: eg,
            activity_session_id: eA,
            eligible_for_discount: e0,
            sku_product_line: eO?.productLine,
            checkout_design: eQ ? m.rS.UNIFIED : m.rS.LEGACY,
            checkout_flow: eB,
            ...t,
        }),
        e3 = (0, H.W)(eP, ex),
        e6 = null != eF ? eF.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e2((e) => {
            let n = null != ev ? (0, M.y8)(ev.id, !1, ej, { paymentSourceId: ew.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: ev?.id,
                price: n?.amount,
                regular_price: ev?.price,
                currency: eV,
                sku_id: eS,
                sku_product_line: eO?.productLine,
                ...t,
            };
        });
    }, [ev, eS, ej, ew, eV, t, eO?.productLine]),
        (0, f.Ay)(() => {
            (0, g.b)({
                ...e1,
                continue_session_initial_step: eE,
                custom_checkout_flow: eG,
                has_saved_payment_source: eM,
                discount_id: null != eJ ? eJ.discount_id : e6,
            });
        }),
        i.useEffect(() => {
            null == ev && (null != eU && null != eE ? eN(eU) : eN(D)),
                null != ec ? ey(ec) : null != D && ey(b.A.get(D)?.skuId);
        }, [eN, ev, ey, D, ec, eU, eE]);
    let e4 = i.useCallback(() => {
            let e = (0, w.lo)(eY) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            L.default.track(K.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e1,
                is_custom_message_edited: ej && e && null != eW ? eW !== z.intl.string(z.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: ej && e,
                emoji_name: ej && e && eK?.id == null ? eK?.surrogates : void 0,
                sound_id: ej && e ? e$?.soundId : void 0,
                duration_ms: t - eb.startTime,
                payment_source_type: e3?.type,
            });
            let { enabled: n } = I.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            ej && null != eY && null != a && n && (0, S.W)(a) && (0, T.Yd)(eY.id);
        }, [e1, eK, eW, eY, ej, e$, eb.startTime, e3, a]),
        e5 = i.useMemo(() => () => B?.(eI === U.h.COMPLETED, eS), [B, eI, eS]),
        e7 = (0, s.A)(() => Date.now(), [ez]),
        e8 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === k.pn.CONFIRM && (e4(), E?.(i), em)) return void e5();
                eq(e), ed?.(e), eC(null), e === k.pn.ADD_PAYMENT_STEPS && (l.h.wait(c.ET), l.h.wait(d.T3));
                let o = null != n ? n : ez;
                null === o || s
                    ? L.default.track(K.HAw.PAYMENT_FLOW_LOADED, {
                          ...e1,
                          initial_step: o ?? e,
                          continue_session_initial_step: eE,
                          has_saved_payment_source: eM,
                      })
                    : L.default.track(K.HAw.PAYMENT_FLOW_STEP, {
                          ...e1,
                          ...r,
                          from_step: o,
                          to_step: e === k.pn.ADD_PAYMENT_STEPS ? k.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - e7,
                          flow_duration_ms: a - eb.startTime,
                      });
            },
            [eq, ed, eC, ez, eE, e1, e7, eb.startTime, e4, E, em, e5, eM],
        );
    (0, C.b)(ez, eR, e8, eT),
        (0, k.zT)(ez, eI, eT),
        (0, R.Q)(ez, eD, e8),
        (0, A.A)(e5),
        (0, O.s)(eL, () => B(!1), ej),
        (0, C.QR)(eR);
    let e9 = {
            initialPlanId: D,
            subscriptionTier: V,
            handleStepChange: e8,
            handleClose: e5,
            analyticsData: e1,
            setAnalyticsData: e2,
            trialId: Y,
            trialFooterMessageOverride: X,
            reviewWarningMessage: Q,
            planGroup: J,
            openInvoiceId: et,
            analyticsLocation: a,
            onSubscriptionConfirmation: en,
            renderPurchaseConfirmation: er,
            postSuccessGuild: ei,
            followupSKUInfo: es,
            referralTrialOfferId: eu,
            skipConfirm: em,
            continueSessionToInitialStep: eE,
        },
        te = (0, j.L)({ renderHeader: ea, handleClose: e5 });
    return (0, r.jsx)(h.e0, {
        children: (0, r.jsx)(o.bfh, {
            className: q.Xn,
            isShaking: e_ && eI === U.h.PURCHASING,
            intensity: Z,
            children: (0, r.jsx)(ee, {
                step: ez,
                transitionState: v,
                isGift: ej,
                giftRecipient: eY,
                returnRef: eh,
                manaModalSize: eZ,
                modalSizeGetter: eX,
                handleClose: e5,
                children: (0, r.jsx)(W.Ay, { header: te, ...e9 }),
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
        v = (0, B.A)({ isGift: S, skuId: E, referralTrialOfferId: o }),
        [N, C] = i.useState(!0),
        R = (0, a.bG)([D.A], () => D.A.applicationIdsFetched.has($.tv));
    return (i.useEffect(() => {
        C(!f || !h || m);
    }, [m, h, f]),
    (0, _.A)(
        "Payment Modal",
        N,
        5,
        { hasFetchedSubscriptions: f, hasFetchedSubscriptionPlans: h, currencyLoading: m },
        { tags: { app_context: X } },
    ),
    i.useEffect(() => {
        if ((R || (0, u.LM)($.tv), N || d)) return;
        let e = (0, V.vT)({ isTrial: v, isGift: S, selectedSkuId: E, startedPaymentFlowWithPaymentSources: y });
        null != l
            ? s(k.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: l })
            : null != n
              ? n !== $.gD.PREMIUM_GROUP_MONTH || T
                  ? s(k.pn.REVIEW)
                  : s(k.pn.ADD_PAYMENT_STEPS)
              : e
                ? (g((0, V.xT)(E, c, A)), s(k.pn.REVIEW))
                : null != t
                  ? s(k.pn.PLAN_SELECT)
                  : s(k.pn.SKU_SELECT);
    }, [l, c, d, R, n, N, s, t, E, g, v, A, S, y, T]),
    N)
        ? (0, r.jsx)(Y.A, {})
        : d
          ? (0, r.jsx)(p.oO, {})
          : null;
}
