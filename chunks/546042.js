"use strict";
n.d(t, { I: () => es, PaymentModal: () => ei });
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
    E = n(558620),
    g = n(427675),
    A = n(169797),
    I = n(94420),
    T = n(357669),
    S = n(319437),
    y = n(70730),
    v = n(45787),
    N = n(51501),
    C = n(422936),
    R = n(612669),
    O = n(511484),
    b = n(251913),
    D = n(869573),
    L = n(344159),
    w = n(97352),
    M = n(469778),
    P = n(954571),
    x = n(45938),
    k = n(927578),
    U = n(937008),
    G = n(156312),
    F = n(166532),
    V = n(566980),
    B = n(379174),
    H = n(615310),
    j = n(800471),
    Y = n(169801),
    W = n(216641),
    K = n(462309),
    $ = n(534479),
    z = n(482132);
n(322076);
var q = n(652215),
    Z = n(788868),
    X = n(985018),
    Q = n(106451);
let J = 2,
    ee = "billing",
    et = { [F.pn.GIFT_CUSTOMIZATION]: "xl", [F.pn.REVIEW]: "md", [F.pn.ADD_PAYMENT_STEPS]: "md" },
    en = (e, t) => {
        let { manaModalSizeFromProps: n } = t,
            r = n ?? "md";
        return null == e ? r : e in et ? et[e] : r;
    },
    er = (e) => {
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
            d = (0, R.FY)({ isGift: s }),
            _ =
                null != l
                    ? l({ canCurrentlyPurchasePremiumGroup: d, isGift: s, giftRecipient: a })
                    : en(t, { manaModalSizeFromProps: o });
        return (0, r.jsx)(A.Jg, {
            transitionState: n,
            size: _,
            returnRef: u,
            onClose: async () => {
                await i();
            },
            children: c,
        });
    };
function ei(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: u,
            analyticsSourceLocation: _,
            analyticsSubscriptionType: p = q.rzx.PREMIUM,
            onComplete: A,
            transitionState: R,
            initialPlanId: M,
            subscriptionTier: j,
            onClose: Y,
            trialId: $,
            trialFooterMessageOverride: ee,
            reviewWarningMessage: et,
            planGroup: en = Z.LE,
            openInvoiceId: ei,
            onSubscriptionConfirmation: es,
            renderPurchaseConfirmation: ea,
            postSuccessGuild: eo,
            followupSKUInfo: el,
            renderHeader: eu,
            applicationId: ec,
            guildId: ed,
            referralTrialOfferId: e_,
            skuId: ef,
            onStepChange: ep,
            shakeWhilePurchasing: eh = !1,
            isLargeModal: em = !1,
            isMediumModal: eE = !1,
            returnRef: eg,
            skipConfirm: eA = !1,
            continueSessionToInitialStep: eI,
            paymentModalVersion: eT = "v1",
        } = e,
        {
            selectedSkuId: eS,
            setSelectedSkuId: ey,
            setSelectedPlanId: ev,
        } = (0, I.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activitySessionId: eN,
            purchaseState: eC,
            setPurchaseState: eR,
            setPurchaseError: eO,
            paymentAuthenticationState: eb,
            contextMetadata: eD,
            purchaseTokenAuthState: eL,
            activeSubscription: ew,
            priceOptions: eM,
            hasPaymentSources: eP,
            paymentSourceId: ex,
            paymentSources: ek,
            purchaseType: eU,
            defaultPlanId: eG,
            customCheckoutFlow: eF,
            displayCurrency: eV,
            unifiedCheckoutFlow: eB,
        } = (0, G.P5)(),
        eH = (0, I.sw)(),
        ej = (0, E.A)(),
        eY = (0, g.S3)(),
        eW = (0, B.A)(),
        { isGift: eK, giftRecipient: e$, customGiftMessage: ez, emojiConfetti: eq, soundEffect: eZ } = (0, U.Pv)(),
        eX = (0, H.bB)(),
        eQ = (0, H.l)(),
        eJ = "sm";
    em ? (eJ = "xl") : (eE || eX === F.pn.ADD_PAYMENT_STEPS) && (eJ = "md");
    let e0 = eW?.modalSizeGetter,
        e1 = (0, m.D7)({ location: "PaymentModal" }),
        e2 = (0, C.O)(),
        e3 = null != j && !eK && (0, O.U9)(e2, j),
        [e6, e4] = i.useState({
            load_id: eD.loadId,
            discovery_session_id: eD.discoverySessionId,
            payment_type: q.frM[eU],
            location: a ?? u,
            source: _,
            subscription_type: p,
            subscription_plan_id: ej?.id ?? M,
            is_gift: eK,
            eligible_for_trial: null != $,
            location_stack: n,
            sku_id: ef,
            application_id: ec,
            guild_id: ed,
            payment_modal_version: eT,
            activity_session_id: eN,
            eligible_for_discount: e3,
            sku_product_line: eY?.productLine,
            checkout_design: e1 ? m.rS.UNIFIED : m.rS.LEGACY,
            checkout_flow: eB,
            ...t,
        }),
        e5 = (0, W.W)(ek, ex),
        e7 = null != eH ? eH.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e4((e) => {
            let n = null != ej ? (0, k.y8)(ej.id, !1, eK, { paymentSourceId: eM.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: ej?.id,
                price: n?.amount,
                regular_price: ej?.price,
                currency: eV,
                sku_id: eS,
                sku_product_line: eY?.productLine,
                ...t,
            };
        });
    }, [ej, eS, eK, eM, eV, t, eY?.productLine]),
        (0, f.Ay)(() => {
            (0, T.b)({
                ...e6,
                continue_session_initial_step: eI,
                custom_checkout_flow: eF,
                has_saved_payment_source: eP,
                discount_id: null != e2 ? e2.discount_id : e7,
            });
        }),
        i.useEffect(() => {
            null == ej && (null != eG && null != eI ? ev(eG) : ev(M)),
                null != ef ? ey(ef) : null != M && ey(w.A.get(M)?.skuId);
        }, [ev, ej, ey, M, ef, eG, eI]);
    let e8 = i.useCallback(() => {
            let e = (0, x.lo)(e$) === x.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            P.default.track(q.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e6,
                is_custom_message_edited: eK && e && null != ez ? ez !== X.intl.string(X.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eK && e,
                emoji_name: eK && e && eq?.id == null ? eq?.surrogates : void 0,
                sound_id: eK && e ? eZ?.soundId : void 0,
                duration_ms: t - eD.startTime,
                payment_source_type: e5?.type,
            });
            let { enabled: n } = y.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eK && null != e$ && null != a && n && (0, N.W)(a) && (0, v.Yd)(e$.id);
        }, [e6, eq, ez, e$, eK, eZ, eD.startTime, e5, a]),
        e9 = i.useMemo(() => () => Y?.(eC === V.h.COMPLETED, eS), [Y, eC, eS]),
        te = (0, s.A)(() => Date.now(), [eX]),
        tt = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === F.pn.CONFIRM && (e8(), A?.(i), eA)) return void e9();
                eQ(e), ep?.(e), eO(null), e === F.pn.ADD_PAYMENT_STEPS && (l.h.wait(c.ET), l.h.wait(d.T3));
                let o = null != n ? n : eX;
                null === o || s
                    ? P.default.track(q.HAw.PAYMENT_FLOW_LOADED, {
                          ...e6,
                          initial_step: o ?? e,
                          continue_session_initial_step: eI,
                          has_saved_payment_source: eP,
                      })
                    : P.default.track(q.HAw.PAYMENT_FLOW_STEP, {
                          ...e6,
                          ...r,
                          from_step: o,
                          to_step: e === F.pn.ADD_PAYMENT_STEPS ? F.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - te,
                          flow_duration_ms: a - eD.startTime,
                      });
            },
            [eQ, ep, eO, eX, eI, e6, te, eD.startTime, e8, A, eA, e9, eP],
        );
    (0, b.b)(eX, eb, tt, eR),
        (0, F.zT)(eX, eC, eR),
        (0, D.Q)(eX, eL, tt),
        (0, S.A)(e9),
        (0, L.s)(ew, () => Y(!1), eK),
        (0, b.QR)(eb);
    let tn = {
            initialPlanId: M,
            subscriptionTier: j,
            handleStepChange: tt,
            handleClose: e9,
            analyticsData: e6,
            setAnalyticsData: e4,
            trialId: $,
            trialFooterMessageOverride: ee,
            reviewWarningMessage: et,
            planGroup: en,
            openInvoiceId: ei,
            analyticsLocation: a,
            onSubscriptionConfirmation: es,
            renderPurchaseConfirmation: ea,
            postSuccessGuild: eo,
            followupSKUInfo: el,
            referralTrialOfferId: e_,
            skipConfirm: eA,
            continueSessionToInitialStep: eI,
        },
        tr = (0, K.L)({ renderHeader: eu, handleClose: e9 });
    return (0, r.jsx)(h.e0, {
        children: (0, r.jsx)(o.bfh, {
            className: Q.Xn,
            isShaking: eh && eC === V.h.PURCHASING,
            intensity: J,
            children: (0, r.jsx)(er, {
                step: eX,
                transitionState: R,
                isGift: eK,
                giftRecipient: e$,
                returnRef: eg,
                manaModalSize: eJ,
                modalSizeGetter: e0,
                handleClose: e9,
                children: (0, r.jsx)(z.Ay, { header: tr, ...tn }),
            }),
        }),
    });
}
function es(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: s,
            referralTrialOfferId: o,
            continueSessionToInitialStep: l,
        } = e,
        { selectedSkuId: c, setSelectedPlanId: d } = (0, I.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: f,
            blockedPayments: h,
            hasFetchedSubscriptions: m,
            hasFetchedSubscriptionPlans: E,
            currencyLoading: g,
            defaultPlanId: A,
            startedPaymentFlowWithPaymentSourcesRef: T,
            hasPaymentSources: S,
        } = (0, G.P5)(),
        { isGift: y } = (0, U.Pv)(),
        v = T.current,
        N = (0, Y.A)({ isGift: y, skuId: c, referralTrialOfferId: o }),
        [C, R] = i.useState(!0),
        O = (0, a.bG)([M.A], () => M.A.applicationIdsFetched.has(Z.tv));
    return (i.useEffect(() => {
        R(!m || !E || g);
    }, [g, E, m]),
    (0, _.A)(
        "Payment Modal",
        C,
        5,
        { hasFetchedSubscriptions: m, hasFetchedSubscriptionPlans: E, currencyLoading: g },
        { tags: { app_context: ee } },
    ),
    i.useEffect(() => {
        if ((O || (0, u.LM)(Z.tv), C || h)) return;
        let e = (0, j.vT)({ isTrial: N, isGift: y, selectedSkuId: c, startedPaymentFlowWithPaymentSources: v });
        null != l
            ? s(F.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: l })
            : null != n
              ? n !== Z.gD.PREMIUM_GROUP_MONTH || S
                  ? s(F.pn.REVIEW)
                  : s(F.pn.ADD_PAYMENT_STEPS)
              : e
                ? (d((0, j.xT)(c, f, A)), s(F.pn.REVIEW))
                : null != t
                  ? s(F.pn.PLAN_SELECT)
                  : s(F.pn.SKU_SELECT);
    }, [l, f, h, O, n, C, s, t, c, d, N, A, y, v, S]),
    C)
        ? (0, r.jsx)($.A, {})
        : h
          ? (0, r.jsx)(p.oO, {})
          : null;
}
