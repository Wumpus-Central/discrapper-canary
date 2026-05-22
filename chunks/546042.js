n.d(t, { I: () => ei, PaymentModal: () => ea });
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
    E = n(655857),
    P = n(666646),
    S = n(558620),
    f = n(427675),
    _ = n(480642),
    T = n(671744),
    I = n(357669),
    x = n(319437),
    N = n(70730),
    g = n(45787),
    v = n(51501),
    M = n(422936),
    b = n(39423),
    j = n(410516),
    R = n(251913),
    L = n(869573),
    O = n(344159),
    D = n(97352),
    w = n(469778),
    U = n(174459),
    k = n(45938),
    Y = n(428262),
    G = n(937008),
    F = n(834252),
    B = n(166532),
    W = n(566980),
    V = n(379174),
    H = n(615310),
    K = n(800471),
    Z = n(169801),
    q = n(216641),
    z = n(462309),
    J = n(534479),
    $ = n(482132);
n(322076);
var X = n(652215),
    Q = n(788868),
    ee = n(375708),
    et = n(106451);
let en = { [B.pn.GIFT_CUSTOMIZATION]: "xl", [B.pn.REVIEW]: "md", [B.pn.ADD_PAYMENT_STEPS]: "md" },
    el = (e) => {
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
            d = (0, b.FY)({ isGift: i }),
            p =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: i, giftRecipient: r })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              l = n ?? "md";
                          return null == e ? l : e in en ? en[e] : l;
                      })(t, { manaModalSizeFromProps: s });
        return (0, l.jsx)(_.Jg, {
            transitionState: n,
            size: p,
            returnRef: u,
            "aria-label": ee.intl.string(ee.t.q9EGps),
            onClose: async () => {
                await a();
            },
            children: c,
        });
    };
function ea(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: r,
            analyticsObject: u,
            analyticsSourceLocation: p,
            analyticsSubscriptionType: h = X.rzx.PREMIUM,
            onComplete: _,
            transitionState: b,
            initialPlanId: w,
            subscriptionTier: K,
            onClose: Z,
            trialId: J,
            trialFooterMessageOverride: en,
            reviewWarningMessage: ea,
            planGroup: ei = Q.LE,
            openInvoiceId: er,
            onSubscriptionConfirmation: es,
            renderPurchaseConfirmation: eo,
            postSuccessGuild: eu,
            followupSKUInfo: ec,
            renderHeader: ed,
            applicationId: ep,
            guildId: em,
            referralTrialOfferId: eh,
            skuId: eC,
            onStepChange: eA,
            shakeWhilePurchasing: ey = !1,
            isLargeModal: eE = !1,
            isMediumModal: eP = !1,
            returnRef: eS,
            skipConfirm: ef = !1,
            continueSessionToInitialStep: e_,
            paymentModalVersion: eT = "v1",
        } = e,
        { paymentSources: eI, hasPaymentSources: ex } = (0, y.jm)(),
        {
            selectedSkuId: eN,
            setSelectedSkuId: eg,
            setSelectedPlanId: ev,
            purchaseState: eM,
            setPurchaseState: eb,
            contextMetadata: ej,
            paymentSourceId: eR,
            setPurchaseError: eL,
            priceOptions: eO,
        } = (0, T.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            purchaseState: e.purchaseState,
            setPurchaseState: e.setPurchaseState,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            setPurchaseError: e.setPurchaseError,
            priceOptions: e.checkoutPriceOptions,
        })),
        { displayCurrency: eD } = (0, E.Jn)(),
        {
            activitySessionId: ew,
            paymentAuthenticationState: eU,
            purchaseTokenAuthState: ek,
            activeSubscription: eY,
            purchaseType: eG,
            defaultPlanId: eF,
            customCheckoutFlow: eB,
            unifiedCheckoutFlow: eW,
        } = (0, F.P5)(),
        eV = (0, P.sw)(),
        eH = (0, S.A)(),
        eK = (0, f.S3)(),
        eZ = (0, V.A)(),
        { isGift: eq, giftRecipient: ez, customGiftMessage: eJ, emojiConfetti: e$, soundEffect: eX } = (0, G.Pv)(),
        eQ = (0, H.bB)(),
        e0 = (0, H.l)(),
        e2 = "sm";
    eE ? (e2 = "xl") : (eP || eQ === B.pn.ADD_PAYMENT_STEPS) && (e2 = "md");
    let e3 = eZ?.modalSizeGetter,
        e1 = (0, A.D7)({ location: "PaymentModal" }),
        e4 = (0, M.O)(),
        e7 = null != K && !eq && (0, j.U9)(e4, K),
        [e6, e5] = a.useState({
            load_id: ej.loadId,
            discovery_session_id: ej.discoverySessionId,
            payment_type: X.frM[eG],
            location: r ?? u,
            source: p,
            subscription_type: h,
            subscription_plan_id: eH?.id ?? w,
            is_gift: eq,
            eligible_for_trial: null != J,
            location_stack: n,
            sku_id: eC,
            application_id: ep,
            guild_id: em,
            payment_modal_version: eT,
            activity_session_id: ew,
            eligible_for_discount: e7,
            sku_product_line: eK?.productLine,
            checkout_design: e1 ? A.rS.UNIFIED : A.rS.LEGACY,
            checkout_flow: eW,
            ...t,
        }),
        e8 = (0, q.W)(eI, eR),
        e9 = null != eV ? eV.getDiscountIdIfExists() : void 0;
    a.useEffect(() => {
        e5((e) => {
            let n = null != eH ? (0, Y.y8)(eH.id, !1, eq, { paymentSourceId: eO.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eH?.id,
                price: n?.amount,
                regular_price: eH?.price,
                currency: eD,
                sku_id: eN,
                sku_product_line: eK?.productLine,
                ...t,
            };
        });
    }, [eH, eN, eq, eO, eD, t, eK?.productLine]),
        (0, m.Ay)(() => {
            (0, I.b)({
                ...e6,
                continue_session_initial_step: e_,
                custom_checkout_flow: eB,
                has_saved_payment_source: ex,
                discount_id: null != e4 ? e4.discountId : e9,
            });
        }),
        a.useEffect(() => {
            null == eH && (null != eF && null != e_ ? ev(eF) : ev(w)),
                null != eC ? eg(eC) : null != w && eg(D.A.get(w)?.skuId);
        }, [ev, eH, eg, w, eC, eF, e_]);
    let te = a.useCallback(() => {
            let e = (0, k.lo)(ez) === k.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            U.default.track(X.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e6,
                is_custom_message_edited: eq && e && null != eJ ? eJ !== ee.intl.string(ee.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eq && e,
                emoji_name: eq && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eq && e ? eX?.soundId : void 0,
                duration_ms: t - ej.startTime,
                payment_source_type: e8?.type,
            });
            let { enabled: n } = N.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eq && null != ez && null != r && n && (0, v.W)(r) && (0, g.Yd)(ez.id);
        }, [e6, e$, eJ, ez, eq, eX, ej.startTime, e8, r]),
        tt = a.useMemo(() => () => Z?.(eM === W.h.COMPLETED, eN), [Z, eM, eN]),
        tn = (0, i.A)(() => Date.now(), [eQ]),
        tl = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: a, emitPaymentFlowLoadedEvent: i } = t,
                    r = Date.now();
                if (e === B.pn.CONFIRM && (te(), _?.(a), ef)) return void tt();
                e0(e), eA?.(e), eL(null), e === B.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : eQ;
                null === s || i
                    ? U.default.track(X.HAw.PAYMENT_FLOW_LOADED, {
                          ...e6,
                          initial_step: s ?? e,
                          continue_session_initial_step: e_,
                          has_saved_payment_source: ex,
                      })
                    : U.default.track(X.HAw.PAYMENT_FLOW_STEP, {
                          ...e6,
                          ...l,
                          from_step: s,
                          to_step: e === B.pn.ADD_PAYMENT_STEPS ? B.pn.PAYMENT_TYPE : e,
                          step_duration_ms: r - tn,
                          flow_duration_ms: r - ej.startTime,
                      });
            },
            [e0, eA, eL, eQ, e_, e6, tn, ej.startTime, te, _, ef, tt, ex],
        );
    (0, R.b)(eQ, eU, tl, eb), (0, L.Q)(eQ, ek, tl), (0, x.A)(tt), (0, O.s)(eY, () => Z(!1), eq), (0, R.QR)(eU);
    let ta = (0, z.L)({ renderHeader: ed, handleClose: tt });
    return (0, l.jsx)(C.e0, {
        children: (0, l.jsx)(s.b, {
            className: et.Xn,
            isShaking: ey && eM === W.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(el, {
                step: eQ,
                transitionState: b,
                isGift: eq,
                giftRecipient: ez,
                returnRef: eS,
                manaModalSize: e2,
                modalSizeGetter: e3,
                handleClose: tt,
                children: (0, l.jsx)($.Ay, {
                    header: ta,
                    initialPlanId: w,
                    subscriptionTier: K,
                    handleStepChange: tl,
                    handleClose: tt,
                    analyticsData: e6,
                    setAnalyticsData: e5,
                    trialId: J,
                    trialFooterMessageOverride: en,
                    reviewWarningMessage: ea,
                    planGroup: ei,
                    openInvoiceId: er,
                    analyticsLocation: r,
                    onSubscriptionConfirmation: es,
                    renderPurchaseConfirmation: eo,
                    postSuccessGuild: eu,
                    followupSKUInfo: ec,
                    referralTrialOfferId: eh,
                    skipConfirm: ef,
                    continueSessionToInitialStep: e_,
                }),
            }),
        }),
    });
}
function ei(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: i,
            referralTrialOfferId: s,
            continueSessionToInitialStep: o,
        } = e,
        { hasPaymentSources: c } = (0, y.jm)(),
        { selectedSkuId: d, setSelectedPlanId: m } = (0, T.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: C,
            blockedPayments: A,
            hasFetchedSubscriptions: P,
            defaultPlanId: S,
            startedPaymentFlowWithPaymentSourcesRef: f,
        } = (0, F.P5)(),
        { hasFetchedRelatedSubscriptionPlans: _, subscriptionPriceOptionsLoading: I } = (0, E.Jn)(),
        { isGift: x } = (0, G.Pv)(),
        N = f.current,
        g = (0, Z.A)({ isGift: x, skuId: d, referralTrialOfferId: s }),
        [v, M] = a.useState(!0),
        b = (0, r.bG)([w.A], () => w.A.applicationIdsFetched.has(Q.tv));
    return (a.useEffect(() => {
        M(!P || !_ || I);
    }, [I, _, P]),
    (0, p.A)(
        "Payment Modal",
        v,
        5,
        { hasFetchedSubscriptions: P, hasFetchedSubscriptionPlans: _, subscriptionPriceOptionsLoading: I },
        { tags: { app_context: "billing" } },
    ),
    a.useEffect(() => {
        if ((b || (0, u.LM)(Q.tv), v || A)) return;
        let e = (0, K.vT)({ isTrial: g, isGift: x, selectedSkuId: d, startedPaymentFlowWithPaymentSources: N });
        null != o
            ? i(B.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== Q.gD.PREMIUM_GROUP_MONTH || c
                  ? i(B.pn.REVIEW)
                  : i(B.pn.ADD_PAYMENT_STEPS)
              : e
                ? (m((0, K.xT)(d, C, S)), i(B.pn.REVIEW))
                : null != t
                  ? i(B.pn.PLAN_SELECT)
                  : i(B.pn.SKU_SELECT);
    }, [o, C, A, b, n, v, i, t, d, m, g, S, x, N, c]),
    v)
        ? (0, l.jsx)(J.A, {})
        : A
          ? (0, l.jsx)(h.oO, {})
          : null;
}
