n.d(t, { I: () => ea, PaymentModal: () => el });
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
    C = n(725836),
    A = n(742810),
    y = n(426398),
    E = n(666646),
    P = n(558620),
    S = n(427675),
    f = n(480642),
    _ = n(671744),
    T = n(357669),
    I = n(319437),
    x = n(70730),
    N = n(45787),
    g = n(51501),
    v = n(422936),
    M = n(39423),
    b = n(410516),
    j = n(251913),
    R = n(869573),
    L = n(344159),
    O = n(97352),
    D = n(469778),
    w = n(174459),
    U = n(45938),
    k = n(428262),
    Y = n(937008),
    G = n(834252),
    F = n(166532),
    B = n(566980),
    W = n(379174),
    V = n(615310),
    H = n(800471),
    K = n(169801),
    Z = n(216641),
    q = n(462309),
    z = n(534479),
    $ = n(482132);
n(322076);
var J = n(652215),
    X = n(788868),
    Q = n(375708),
    ee = n(106451);
let et = { [F.pn.GIFT_CUSTOMIZATION]: "xl", [F.pn.REVIEW]: "md", [F.pn.ADD_PAYMENT_STEPS]: "md" },
    en = (e) => {
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
            d = (0, M.FY)({ isGift: i }),
            p =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: i, giftRecipient: r })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              l = n ?? "md";
                          return null == e ? l : e in et ? et[e] : l;
                      })(t, { manaModalSizeFromProps: s });
        return (0, l.jsx)(f.Jg, {
            transitionState: n,
            size: p,
            returnRef: u,
            "aria-label": Q.intl.string(Q.t.q9EGps),
            onClose: async () => {
                await a();
            },
            children: c,
        });
    };
function el(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: r,
            analyticsObject: u,
            analyticsSourceLocation: p,
            analyticsSubscriptionType: h = J.rzx.PREMIUM,
            onComplete: f,
            transitionState: M,
            initialPlanId: D,
            subscriptionTier: H,
            onClose: K,
            trialId: z,
            trialFooterMessageOverride: et,
            reviewWarningMessage: el,
            planGroup: ea = X.LE,
            openInvoiceId: ei,
            onSubscriptionConfirmation: er,
            renderPurchaseConfirmation: es,
            postSuccessGuild: eo,
            followupSKUInfo: eu,
            renderHeader: ec,
            applicationId: ed,
            guildId: ep,
            referralTrialOfferId: em,
            skuId: eh,
            onStepChange: eC,
            shakeWhilePurchasing: eA = !1,
            isLargeModal: ey = !1,
            isMediumModal: eE = !1,
            returnRef: eP,
            skipConfirm: eS = !1,
            continueSessionToInitialStep: ef,
            paymentModalVersion: e_ = "v1",
        } = e,
        { paymentSources: eT, hasPaymentSources: eI } = (0, y.jm)(),
        {
            selectedSkuId: ex,
            setSelectedSkuId: eN,
            setSelectedPlanId: eg,
            purchaseState: ev,
            setPurchaseState: eM,
            contextMetadata: eb,
            paymentSourceId: ej,
            setPurchaseError: eR,
        } = (0, _.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            purchaseState: e.purchaseState,
            setPurchaseState: e.setPurchaseState,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            setPurchaseError: e.setPurchaseError,
        })),
        {
            activitySessionId: eL,
            paymentAuthenticationState: eO,
            purchaseTokenAuthState: eD,
            activeSubscription: ew,
            priceOptions: eU,
            purchaseType: ek,
            defaultPlanId: eY,
            customCheckoutFlow: eG,
            displayCurrency: eF,
            unifiedCheckoutFlow: eB,
        } = (0, G.P5)(),
        eW = (0, E.sw)(),
        eV = (0, P.A)(),
        eH = (0, S.S3)(),
        eK = (0, W.A)(),
        { isGift: eZ, giftRecipient: eq, customGiftMessage: ez, emojiConfetti: e$, soundEffect: eJ } = (0, Y.Pv)(),
        eX = (0, V.bB)(),
        eQ = (0, V.l)(),
        e0 = "sm";
    ey ? (e0 = "xl") : (eE || eX === F.pn.ADD_PAYMENT_STEPS) && (e0 = "md");
    let e2 = eK?.modalSizeGetter,
        e3 = (0, A.D7)({ location: "PaymentModal" }),
        e1 = (0, v.O)(),
        e4 = null != H && !eZ && (0, b.U9)(e1, H),
        [e7, e6] = a.useState({
            load_id: eb.loadId,
            discovery_session_id: eb.discoverySessionId,
            payment_type: J.frM[ek],
            location: r ?? u,
            source: p,
            subscription_type: h,
            subscription_plan_id: eV?.id ?? D,
            is_gift: eZ,
            eligible_for_trial: null != z,
            location_stack: n,
            sku_id: eh,
            application_id: ed,
            guild_id: ep,
            payment_modal_version: e_,
            activity_session_id: eL,
            eligible_for_discount: e4,
            sku_product_line: eH?.productLine,
            checkout_design: e3 ? A.rS.UNIFIED : A.rS.LEGACY,
            checkout_flow: eB,
            ...t,
        }),
        e5 = (0, Z.W)(eT, ej),
        e8 = null != eW ? eW.getDiscountIdIfExists() : void 0;
    a.useEffect(() => {
        e6((e) => {
            let n = null != eV ? (0, k.y8)(eV.id, !1, eZ, { paymentSourceId: eU.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eV?.id,
                price: n?.amount,
                regular_price: eV?.price,
                currency: eF,
                sku_id: ex,
                sku_product_line: eH?.productLine,
                ...t,
            };
        });
    }, [eV, ex, eZ, eU, eF, t, eH?.productLine]),
        (0, m.Ay)(() => {
            (0, T.b)({
                ...e7,
                continue_session_initial_step: ef,
                custom_checkout_flow: eG,
                has_saved_payment_source: eI,
                discount_id: null != e1 ? e1.discountId : e8,
            });
        }),
        a.useEffect(() => {
            null == eV && (null != eY && null != ef ? eg(eY) : eg(D)),
                null != eh ? eN(eh) : null != D && eN(O.A.get(D)?.skuId);
        }, [eg, eV, eN, D, eh, eY, ef]);
    let e9 = a.useCallback(() => {
            let e = (0, U.lo)(eq) === U.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            w.default.track(J.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e7,
                is_custom_message_edited: eZ && e && null != ez ? ez !== Q.intl.string(Q.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eZ && e,
                emoji_name: eZ && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eZ && e ? eJ?.soundId : void 0,
                duration_ms: t - eb.startTime,
                payment_source_type: e5?.type,
            });
            let { enabled: n } = x.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eZ && null != eq && null != r && n && (0, g.W)(r) && (0, N.Yd)(eq.id);
        }, [e7, e$, ez, eq, eZ, eJ, eb.startTime, e5, r]),
        te = a.useMemo(() => () => K?.(ev === B.h.COMPLETED, ex), [K, ev, ex]),
        tt = (0, i.A)(() => Date.now(), [eX]),
        tn = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: a, emitPaymentFlowLoadedEvent: i } = t,
                    r = Date.now();
                if (e === F.pn.CONFIRM && (e9(), f?.(a), eS)) return void te();
                eQ(e), eC?.(e), eR(null), e === F.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : eX;
                null === s || i
                    ? w.default.track(J.HAw.PAYMENT_FLOW_LOADED, {
                          ...e7,
                          initial_step: s ?? e,
                          continue_session_initial_step: ef,
                          has_saved_payment_source: eI,
                      })
                    : w.default.track(J.HAw.PAYMENT_FLOW_STEP, {
                          ...e7,
                          ...l,
                          from_step: s,
                          to_step: e === F.pn.ADD_PAYMENT_STEPS ? F.pn.PAYMENT_TYPE : e,
                          step_duration_ms: r - tt,
                          flow_duration_ms: r - eb.startTime,
                      });
            },
            [eQ, eC, eR, eX, ef, e7, tt, eb.startTime, e9, f, eS, te, eI],
        );
    (0, j.b)(eX, eO, tn, eM), (0, R.Q)(eX, eD, tn), (0, I.A)(te), (0, L.s)(ew, () => K(!1), eZ), (0, j.QR)(eO);
    let tl = (0, q.L)({ renderHeader: ec, handleClose: te });
    return (0, l.jsx)(C.e0, {
        children: (0, l.jsx)(s.b, {
            className: ee.Xn,
            isShaking: eA && ev === B.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(en, {
                step: eX,
                transitionState: M,
                isGift: eZ,
                giftRecipient: eq,
                returnRef: eP,
                manaModalSize: e0,
                modalSizeGetter: e2,
                handleClose: te,
                children: (0, l.jsx)($.Ay, {
                    header: tl,
                    initialPlanId: D,
                    subscriptionTier: H,
                    handleStepChange: tn,
                    handleClose: te,
                    analyticsData: e7,
                    setAnalyticsData: e6,
                    trialId: z,
                    trialFooterMessageOverride: et,
                    reviewWarningMessage: el,
                    planGroup: ea,
                    openInvoiceId: ei,
                    analyticsLocation: r,
                    onSubscriptionConfirmation: er,
                    renderPurchaseConfirmation: es,
                    postSuccessGuild: eo,
                    followupSKUInfo: eu,
                    referralTrialOfferId: em,
                    skipConfirm: eS,
                    continueSessionToInitialStep: ef,
                }),
            }),
        }),
    });
}
function ea(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: i,
            referralTrialOfferId: s,
            continueSessionToInitialStep: o,
        } = e,
        { hasPaymentSources: c } = (0, y.jm)(),
        { selectedSkuId: d, setSelectedPlanId: m } = (0, _.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: C,
            blockedPayments: A,
            hasFetchedSubscriptions: E,
            hasFetchedSubscriptionPlans: P,
            currencyLoading: S,
            defaultPlanId: f,
            startedPaymentFlowWithPaymentSourcesRef: T,
        } = (0, G.P5)(),
        { isGift: I } = (0, Y.Pv)(),
        x = T.current,
        N = (0, K.A)({ isGift: I, skuId: d, referralTrialOfferId: s }),
        [g, v] = a.useState(!0),
        M = (0, r.bG)([D.A], () => D.A.applicationIdsFetched.has(X.tv));
    return (a.useEffect(() => {
        v(!E || !P || S);
    }, [S, P, E]),
    (0, p.A)(
        "Payment Modal",
        g,
        5,
        { hasFetchedSubscriptions: E, hasFetchedSubscriptionPlans: P, currencyLoading: S },
        { tags: { app_context: "billing" } },
    ),
    a.useEffect(() => {
        if ((M || (0, u.LM)(X.tv), g || A)) return;
        let e = (0, H.vT)({ isTrial: N, isGift: I, selectedSkuId: d, startedPaymentFlowWithPaymentSources: x });
        null != o
            ? i(F.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== X.gD.PREMIUM_GROUP_MONTH || c
                  ? i(F.pn.REVIEW)
                  : i(F.pn.ADD_PAYMENT_STEPS)
              : e
                ? (m((0, H.xT)(d, C, f)), i(F.pn.REVIEW))
                : null != t
                  ? i(F.pn.PLAN_SELECT)
                  : i(F.pn.SKU_SELECT);
    }, [o, C, A, M, n, g, i, t, d, m, N, f, I, x, c]),
    g)
        ? (0, l.jsx)(z.A, {})
        : A
          ? (0, l.jsx)(h.oO, {})
          : null;
}
