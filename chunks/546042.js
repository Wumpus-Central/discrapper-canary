n.d(t, { I: () => el, PaymentModal: () => en });
var l = n(627968),
    a = n(64700),
    i = n(976634),
    r = n(702841),
    s = n(568602),
    o = n(228366),
    u = n(339048),
    c = n(158032),
    d = n(830382),
    p = n(428644),
    m = n(964486),
    h = n(545075),
    A = n(725836),
    C = n(742810),
    _ = n(666646),
    E = n(558620),
    y = n(427675),
    P = n(169797),
    f = n(94420),
    S = n(357669),
    T = n(319437),
    x = n(70730),
    N = n(45787),
    g = n(51501),
    I = n(422936),
    v = n(612669),
    b = n(511484),
    M = n(251913),
    L = n(869573),
    R = n(344159),
    j = n(97352),
    O = n(469778),
    D = n(954571),
    w = n(45938),
    U = n(927578),
    k = n(937008),
    Y = n(156312),
    F = n(166532),
    G = n(566980),
    B = n(379174),
    W = n(615310),
    H = n(800471),
    V = n(169801),
    K = n(216641),
    Z = n(462309),
    q = n(534479),
    z = n(482132);
n(322076);
var $ = n(652215),
    X = n(788868),
    J = n(985018),
    Q = n(106451);
let ee = { [F.pn.GIFT_CUSTOMIZATION]: "xl", [F.pn.REVIEW]: "md", [F.pn.ADD_PAYMENT_STEPS]: "md" },
    et = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: a,
                isGift: i,
                giftRecipient: r,
                manaModalSize: s,
                modalSizeGetter: o,
                returnRef: u,
                children: c,
            } = e,
            d = (0, v.FY)({ isGift: i }),
            p =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: i, giftRecipient: r })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              l = n ?? "md";
                          return null == e ? l : e in ee ? ee[e] : l;
                      })(t, { manaModalSizeFromProps: s });
        return (0, l.jsx)(P.Jg, {
            transitionState: n,
            size: p,
            returnRef: u,
            onClose: async () => {
                await a();
            },
            children: c,
        });
    };
function en(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: r,
            analyticsObject: u,
            analyticsSourceLocation: p,
            analyticsSubscriptionType: h = $.rzx.PREMIUM,
            onComplete: P,
            transitionState: v,
            initialPlanId: O,
            subscriptionTier: H,
            onClose: V,
            trialId: q,
            trialFooterMessageOverride: ee,
            reviewWarningMessage: en,
            planGroup: el = X.LE,
            openInvoiceId: ea,
            onSubscriptionConfirmation: ei,
            renderPurchaseConfirmation: er,
            postSuccessGuild: es,
            followupSKUInfo: eo,
            renderHeader: eu,
            applicationId: ec,
            guildId: ed,
            referralTrialOfferId: ep,
            skuId: em,
            onStepChange: eh,
            shakeWhilePurchasing: eA = !1,
            isLargeModal: eC = !1,
            isMediumModal: e_ = !1,
            returnRef: eE,
            skipConfirm: ey = !1,
            continueSessionToInitialStep: eP,
            paymentModalVersion: ef = "v1",
        } = e,
        {
            selectedSkuId: eS,
            setSelectedSkuId: eT,
            setSelectedPlanId: ex,
        } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activitySessionId: eN,
            purchaseState: eg,
            setPurchaseState: eI,
            setPurchaseError: ev,
            paymentAuthenticationState: eb,
            contextMetadata: eM,
            purchaseTokenAuthState: eL,
            activeSubscription: eR,
            priceOptions: ej,
            hasPaymentSources: eO,
            paymentSourceId: eD,
            paymentSources: ew,
            purchaseType: eU,
            defaultPlanId: ek,
            customCheckoutFlow: eY,
            displayCurrency: eF,
            unifiedCheckoutFlow: eG,
        } = (0, Y.P5)(),
        eB = (0, _.sw)(),
        eW = (0, E.A)(),
        eH = (0, y.S3)(),
        eV = (0, B.A)(),
        { isGift: eK, giftRecipient: eZ, customGiftMessage: eq, emojiConfetti: ez, soundEffect: e$ } = (0, k.Pv)(),
        eX = (0, W.bB)(),
        eJ = (0, W.l)(),
        eQ = "sm";
    eC ? (eQ = "xl") : (e_ || eX === F.pn.ADD_PAYMENT_STEPS) && (eQ = "md");
    let e0 = eV?.modalSizeGetter,
        e2 = (0, C.D7)({ location: "PaymentModal" }),
        e1 = (0, I.O)(),
        e3 = null != H && !eK && (0, b.U9)(e1, H),
        [e4, e7] = a.useState({
            load_id: eM.loadId,
            discovery_session_id: eM.discoverySessionId,
            payment_type: $.frM[eU],
            location: r ?? u,
            source: p,
            subscription_type: h,
            subscription_plan_id: eW?.id ?? O,
            is_gift: eK,
            eligible_for_trial: null != q,
            location_stack: n,
            sku_id: em,
            application_id: ec,
            guild_id: ed,
            payment_modal_version: ef,
            activity_session_id: eN,
            eligible_for_discount: e3,
            sku_product_line: eH?.productLine,
            checkout_design: e2 ? C.rS.UNIFIED : C.rS.LEGACY,
            checkout_flow: eG,
            ...t,
        }),
        e6 = (0, K.W)(ew, eD),
        e5 = null != eB ? eB.getDiscountIdIfExists() : void 0;
    a.useEffect(() => {
        e7((e) => {
            let n = null != eW ? (0, U.y8)(eW.id, !1, eK, { paymentSourceId: ej.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eW?.id,
                price: n?.amount,
                regular_price: eW?.price,
                currency: eF,
                sku_id: eS,
                sku_product_line: eH?.productLine,
                ...t,
            };
        });
    }, [eW, eS, eK, ej, eF, t, eH?.productLine]),
        (0, m.Ay)(() => {
            (0, S.b)({
                ...e4,
                continue_session_initial_step: eP,
                custom_checkout_flow: eY,
                has_saved_payment_source: eO,
                discount_id: null != e1 ? e1.discount_id : e5,
            });
        }),
        a.useEffect(() => {
            null == eW && (null != ek && null != eP ? ex(ek) : ex(O)),
                null != em ? eT(em) : null != O && eT(j.A.get(O)?.skuId);
        }, [ex, eW, eT, O, em, ek, eP]);
    let e8 = a.useCallback(() => {
            let e = (0, w.lo)(eZ) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            D.default.track($.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e4,
                is_custom_message_edited: eK && e && null != eq ? eq !== J.intl.string(J.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eK && e,
                emoji_name: eK && e && ez?.id == null ? ez?.surrogates : void 0,
                sound_id: eK && e ? e$?.soundId : void 0,
                duration_ms: t - eM.startTime,
                payment_source_type: e6?.type,
            });
            let { enabled: n } = x.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eK && null != eZ && null != r && n && (0, g.W)(r) && (0, N.Yd)(eZ.id);
        }, [e4, ez, eq, eZ, eK, e$, eM.startTime, e6, r]),
        e9 = a.useMemo(() => () => V?.(eg === G.h.COMPLETED, eS), [V, eg, eS]),
        te = (0, i.A)(() => Date.now(), [eX]),
        tt = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: a, emitPaymentFlowLoadedEvent: i } = t,
                    r = Date.now();
                if (e === F.pn.CONFIRM && (e8(), P?.(a), ey)) return void e9();
                eJ(e), eh?.(e), ev(null), e === F.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : eX;
                null === s || i
                    ? D.default.track($.HAw.PAYMENT_FLOW_LOADED, {
                          ...e4,
                          initial_step: s ?? e,
                          continue_session_initial_step: eP,
                          has_saved_payment_source: eO,
                      })
                    : D.default.track($.HAw.PAYMENT_FLOW_STEP, {
                          ...e4,
                          ...l,
                          from_step: s,
                          to_step: e === F.pn.ADD_PAYMENT_STEPS ? F.pn.PAYMENT_TYPE : e,
                          step_duration_ms: r - te,
                          flow_duration_ms: r - eM.startTime,
                      });
            },
            [eJ, eh, ev, eX, eP, e4, te, eM.startTime, e8, P, ey, e9, eO],
        );
    (0, M.b)(eX, eb, tt, eI),
        (0, F.zT)(eX, eg, eI),
        (0, L.Q)(eX, eL, tt),
        (0, T.A)(e9),
        (0, R.s)(eR, () => V(!1), eK),
        (0, M.QR)(eb);
    let tn = (0, Z.L)({ renderHeader: eu, handleClose: e9 });
    return (0, l.jsx)(A.e0, {
        children: (0, l.jsx)(s.b, {
            className: Q.Xn,
            isShaking: eA && eg === G.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(et, {
                step: eX,
                transitionState: v,
                isGift: eK,
                giftRecipient: eZ,
                returnRef: eE,
                manaModalSize: eQ,
                modalSizeGetter: e0,
                handleClose: e9,
                children: (0, l.jsx)(z.Ay, {
                    header: tn,
                    initialPlanId: O,
                    subscriptionTier: H,
                    handleStepChange: tt,
                    handleClose: e9,
                    analyticsData: e4,
                    setAnalyticsData: e7,
                    trialId: q,
                    trialFooterMessageOverride: ee,
                    reviewWarningMessage: en,
                    planGroup: el,
                    openInvoiceId: ea,
                    analyticsLocation: r,
                    onSubscriptionConfirmation: ei,
                    renderPurchaseConfirmation: er,
                    postSuccessGuild: es,
                    followupSKUInfo: eo,
                    referralTrialOfferId: ep,
                    skipConfirm: ey,
                    continueSessionToInitialStep: eP,
                }),
            }),
        }),
    });
}
function el(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: i,
            referralTrialOfferId: s,
            continueSessionToInitialStep: o,
        } = e,
        { selectedSkuId: c, setSelectedPlanId: d } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: m,
            blockedPayments: A,
            hasFetchedSubscriptions: C,
            hasFetchedSubscriptionPlans: _,
            currencyLoading: E,
            defaultPlanId: y,
            startedPaymentFlowWithPaymentSourcesRef: P,
            hasPaymentSources: S,
        } = (0, Y.P5)(),
        { isGift: T } = (0, k.Pv)(),
        x = P.current,
        N = (0, V.A)({ isGift: T, skuId: c, referralTrialOfferId: s }),
        [g, I] = a.useState(!0),
        v = (0, r.bG)([O.A], () => O.A.applicationIdsFetched.has(X.tv));
    return (a.useEffect(() => {
        I(!C || !_ || E);
    }, [E, _, C]),
    (0, p.A)(
        "Payment Modal",
        g,
        5,
        { hasFetchedSubscriptions: C, hasFetchedSubscriptionPlans: _, currencyLoading: E },
        { tags: { app_context: "billing" } },
    ),
    a.useEffect(() => {
        if ((v || (0, u.LM)(X.tv), g || A)) return;
        let e = (0, H.vT)({ isTrial: N, isGift: T, selectedSkuId: c, startedPaymentFlowWithPaymentSources: x });
        null != o
            ? i(F.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== X.gD.PREMIUM_GROUP_MONTH || S
                  ? i(F.pn.REVIEW)
                  : i(F.pn.ADD_PAYMENT_STEPS)
              : e
                ? (d((0, H.xT)(c, m, y)), i(F.pn.REVIEW))
                : null != t
                  ? i(F.pn.PLAN_SELECT)
                  : i(F.pn.SKU_SELECT);
    }, [o, m, A, v, n, g, i, t, c, d, N, y, T, x, S]),
    g)
        ? (0, l.jsx)(q.A, {})
        : A
          ? (0, l.jsx)(h.oO, {})
          : null;
}
