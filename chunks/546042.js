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
    P = n(413748),
    x = n(937008),
    k = n(156312),
    U = n(166532),
    G = n(566980),
    F = n(379174),
    V = n(970077),
    B = n(987616),
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
    Q = n(840771);
let J = 2,
    ee = "billing",
    et = { [U.pn.GIFT_CUSTOMIZATION]: "xl", [U.pn.REVIEW]: "md", [U.pn.ADD_PAYMENT_STEPS]: "md" },
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
            d = (0, v.FY)({ isGift: s }),
            _ =
                null != l
                    ? l({ canCurrentlyPurchasePremiumGroup: d, isGift: s, giftRecipient: a })
                    : en(t, { manaModalSizeFromProps: o });
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
function ei(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: u,
            analyticsSourceLocation: _,
            analyticsSubscriptionType: p = q.rzx.PREMIUM,
            onComplete: E,
            transitionState: v,
            initialPlanId: D,
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
        } = (0, P.t4)((e) => ({
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
        } = (0, k.P5)(),
        eH = (0, P.sw)(),
        ej = (0, V.A)(),
        eY = (0, B.S3)(),
        eW = (0, F.A)(),
        { isGift: eK, giftRecipient: e$, customGiftMessage: ez, emojiConfetti: eq, soundEffect: eZ } = (0, x.Pv)(),
        eX = (0, H.bB)(),
        eQ = (0, H.l)(),
        eJ = "sm";
    em ? (eJ = "xl") : (eE || eX === U.pn.ADD_PAYMENT_STEPS) && (eJ = "md");
    let e0 = eW?.modalSizeGetter,
        e1 = (0, m.D7)({ location: "PaymentModal" }),
        e2 = (0, y.O)(),
        e3 = null != j && !eK && (0, N.U9)(e2, j),
        [e6, e4] = i.useState({
            load_id: eD.loadId,
            payment_type: q.frM[eU],
            location: a ?? u,
            source: _,
            subscription_type: p,
            subscription_plan_id: ej?.id ?? D,
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
            let n = null != ej ? (0, M.y8)(ej.id, !1, eK, { paymentSourceId: eM.paymentSourceId }) : void 0;
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
            (0, g.b)({
                ...e6,
                continue_session_initial_step: eI,
                custom_checkout_flow: eF,
                has_saved_payment_source: eP,
                discount_id: null != e2 ? e2.discount_id : e7,
            });
        }),
        i.useEffect(() => {
            null == ej && (null != eG && null != eI ? ev(eG) : ev(D)),
                null != ef ? ey(ef) : null != D && ey(b.A.get(D)?.skuId);
        }, [ev, ej, ey, D, ef, eG, eI]);
    let e8 = i.useCallback(() => {
            let e = (0, w.lo)(e$) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            L.default.track(q.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e6,
                is_custom_message_edited: eK && e && null != ez ? ez !== X.intl.string(X.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eK && e,
                emoji_name: eK && e && eq?.id == null ? eq?.surrogates : void 0,
                sound_id: eK && e ? eZ?.soundId : void 0,
                duration_ms: t - eD.startTime,
                payment_source_type: e5?.type,
            });
            let { enabled: n } = I.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eK && null != e$ && null != a && n && (0, S.W)(a) && (0, T.Yd)(e$.id);
        }, [e6, eq, ez, e$, eK, eZ, eD.startTime, e5, a]),
        e9 = i.useMemo(() => () => Y?.(eC === G.h.COMPLETED, eS), [Y, eC, eS]),
        te = (0, s.A)(() => Date.now(), [eX]),
        tt = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === U.pn.CONFIRM && (e8(), E?.(i), eA)) return void e9();
                eQ(e), ep?.(e), eO(null), e === U.pn.ADD_PAYMENT_STEPS && (l.h.wait(c.ET), l.h.wait(d.T3));
                let o = null != n ? n : eX;
                null === o || s
                    ? L.default.track(q.HAw.PAYMENT_FLOW_LOADED, {
                          ...e6,
                          initial_step: o ?? e,
                          continue_session_initial_step: eI,
                          has_saved_payment_source: eP,
                      })
                    : L.default.track(q.HAw.PAYMENT_FLOW_STEP, {
                          ...e6,
                          ...r,
                          from_step: o,
                          to_step: e === U.pn.ADD_PAYMENT_STEPS ? U.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - te,
                          flow_duration_ms: a - eD.startTime,
                      });
            },
            [eQ, ep, eO, eX, eI, e6, te, eD.startTime, e8, E, eA, e9, eP],
        );
    (0, C.b)(eX, eb, tt, eR),
        (0, U.zT)(eX, eC, eR),
        (0, R.Q)(eX, eL, tt),
        (0, A.A)(e9),
        (0, O.s)(ew, () => Y(!1), eK),
        (0, C.QR)(eb);
    let tn = {
            initialPlanId: D,
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
            isShaking: eh && eC === G.h.PURCHASING,
            intensity: J,
            children: (0, r.jsx)(er, {
                step: eX,
                transitionState: v,
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
        { selectedSkuId: c, setSelectedPlanId: d } = (0, P.t4)((e) => ({
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
            startedPaymentFlowWithPaymentSourcesRef: I,
            hasPaymentSources: T,
        } = (0, k.P5)(),
        { isGift: S } = (0, x.Pv)(),
        y = I.current,
        v = (0, Y.A)({ isGift: S, skuId: c, referralTrialOfferId: o }),
        [N, C] = i.useState(!0),
        R = (0, a.bG)([D.A], () => D.A.applicationIdsFetched.has(Z.tv));
    return (i.useEffect(() => {
        C(!m || !E || g);
    }, [g, E, m]),
    (0, _.A)(
        "Payment Modal",
        N,
        5,
        { hasFetchedSubscriptions: m, hasFetchedSubscriptionPlans: E, currencyLoading: g },
        { tags: { app_context: ee } },
    ),
    i.useEffect(() => {
        if ((R || (0, u.LM)(Z.tv), N || h)) return;
        let e = (0, j.vT)({ isTrial: v, isGift: S, selectedSkuId: c, startedPaymentFlowWithPaymentSources: y });
        null != l
            ? s(U.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: l })
            : null != n
              ? n !== Z.gD.PREMIUM_GROUP_MONTH || T
                  ? s(U.pn.REVIEW)
                  : s(U.pn.ADD_PAYMENT_STEPS)
              : e
                ? (d((0, j.xT)(c, f, A)), s(U.pn.REVIEW))
                : null != t
                  ? s(U.pn.PLAN_SELECT)
                  : s(U.pn.SKU_SELECT);
    }, [l, f, h, R, n, N, s, t, c, d, v, A, S, y, T]),
    N)
        ? (0, r.jsx)($.A, {})
        : h
          ? (0, r.jsx)(p.oO, {})
          : null;
}
