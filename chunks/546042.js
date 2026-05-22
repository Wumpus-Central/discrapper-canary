n.d(t, { I: () => er, PaymentModal: () => ei });
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
    h = n(176095),
    C = n(545075),
    A = n(725836),
    y = n(742810),
    E = n(426398),
    P = n(655857),
    S = n(666646),
    _ = n(558620),
    f = n(427675),
    T = n(480642),
    I = n(671744),
    x = n(357669),
    N = n(319437),
    g = n(70730),
    v = n(45787),
    M = n(51501),
    b = n(422936),
    j = n(39423),
    R = n(410516),
    L = n(251913),
    O = n(869573),
    D = n(344159),
    w = n(97352),
    U = n(469778),
    k = n(174459),
    Y = n(45938),
    G = n(428262),
    F = n(937008),
    B = n(834252),
    W = n(166532),
    V = n(566980),
    H = n(379174),
    K = n(615310),
    Z = n(800471),
    q = n(169801),
    z = n(216641),
    J = n(462309),
    $ = n(534479),
    X = n(482132);
n(322076);
var Q = n(652215),
    ee = n(788868),
    et = n(375708),
    en = n(106451);
let el = { [W.pn.GIFT_CUSTOMIZATION]: "xl", [W.pn.REVIEW]: "md", [W.pn.ADD_PAYMENT_STEPS]: "md" },
    ea = (e) => {
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
            d = (0, j.FY)({ isGift: i }),
            p =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: i, giftRecipient: r })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              l = n ?? "md";
                          return null == e ? l : e in el ? el[e] : l;
                      })(t, { manaModalSizeFromProps: s });
        return (0, l.jsx)(T.Jg, {
            transitionState: n,
            size: p,
            returnRef: u,
            "aria-label": et.intl.string(et.t.q9EGps),
            onClose: async () => {
                await a();
            },
            children: c,
        });
    };
function ei(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: u,
            analyticsObject: p,
            analyticsSourceLocation: C,
            analyticsSubscriptionType: T = Q.rzx.PREMIUM,
            onComplete: j,
            transitionState: U,
            initialPlanId: Z,
            subscriptionTier: q,
            onClose: $,
            trialId: el,
            trialFooterMessageOverride: ei,
            reviewWarningMessage: er,
            planGroup: es = ee.LE,
            openInvoiceId: eo,
            onSubscriptionConfirmation: eu,
            renderPurchaseConfirmation: ec,
            postSuccessGuild: ed,
            followupSKUInfo: ep,
            renderHeader: em,
            applicationId: eh,
            guildId: eC,
            referralTrialOfferId: eA,
            skuId: ey,
            onStepChange: eE,
            shakeWhilePurchasing: eP = !1,
            isLargeModal: eS = !1,
            isMediumModal: e_ = !1,
            returnRef: ef,
            skipConfirm: eT = !1,
            continueSessionToInitialStep: eI,
            paymentModalVersion: ex = "v1",
        } = e,
        { paymentSources: eN, hasPaymentSources: eg } = (0, E.jm)(),
        {
            selectedSkuId: ev,
            setSelectedSkuId: eM,
            setSelectedPlanId: eb,
            purchaseState: ej,
            setPurchaseState: eR,
            contextMetadata: eL,
            paymentSourceId: eO,
            setPurchaseError: eD,
            priceOptions: ew,
        } = (0, I.t4)((e) => ({
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
        { displayCurrency: eU } = (0, P.Jn)(),
        {
            activitySessionId: ek,
            paymentAuthenticationState: eY,
            purchaseTokenAuthState: eG,
            activeSubscription: eF,
            purchaseType: eB,
            defaultPlanId: eW,
            customCheckoutFlow: eV,
            unifiedCheckoutFlow: eH,
        } = (0, B.P5)(),
        eK = (0, S.sw)(),
        eZ = (0, _.A)(),
        eq = (0, f.S3)(),
        ez = (0, H.A)(),
        { isGift: eJ, giftRecipient: e$, customGiftMessage: eX, emojiConfetti: eQ, soundEffect: e0 } = (0, F.Pv)(),
        e2 = (0, K.bB)(),
        e3 = (0, K.l)(),
        e1 = "sm";
    eS ? (e1 = "xl") : (e_ || e2 === W.pn.ADD_PAYMENT_STEPS) && (e1 = "md");
    let e4 = ez?.modalSizeGetter,
        e7 = (0, y.D7)({ location: "PaymentModal" }),
        e6 = (0, b.O)(),
        e5 = null != q && !eJ && (0, R.U9)(e6, q),
        [e8, e9] = a.useState({
            load_id: eL.loadId,
            discovery_session_id: eL.discoverySessionId,
            payment_type: Q.frM[eB],
            location: u ?? p,
            source: C,
            subscription_type: T,
            subscription_plan_id: eZ?.id ?? Z,
            is_gift: eJ,
            eligible_for_trial: null != el,
            location_stack: n,
            sku_id: ey,
            application_id: eh,
            guild_id: eC,
            payment_modal_version: ex,
            activity_session_id: ek,
            eligible_for_discount: e5,
            sku_product_line: eq?.productLine,
            checkout_design: e7 ? y.rS.UNIFIED : y.rS.LEGACY,
            checkout_flow: eH,
            ...t,
        }),
        te = (0, z.W)(eN, eO),
        tt = (0, r.bG)([h.A], () => h.A.getBalance(eO ?? ""), [eO]),
        tn = null != tt ? tt.amount : null,
        tl = null != tt ? tt.currency : null,
        ta = null != eK ? eK.getDiscountIdIfExists() : void 0;
    a.useEffect(() => {
        e9((e) => {
            let n = null != eZ ? (0, G.y8)(eZ.id, !1, eJ, { paymentSourceId: ew.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eZ?.id,
                price: n?.amount,
                regular_price: eZ?.price,
                currency: eU,
                sku_id: ev,
                sku_product_line: eq?.productLine,
                ...t,
            };
        });
    }, [eZ, ev, eJ, ew, eU, t, eq?.productLine]),
        (0, m.Ay)(() => {
            (0, x.b)({
                ...e8,
                continue_session_initial_step: eI,
                custom_checkout_flow: eV,
                has_saved_payment_source: eg,
                discount_id: null != e6 ? e6.discountId : ta,
            });
        }),
        a.useEffect(() => {
            null == eZ && (null != eW && null != eI ? eb(eW) : eb(Z)),
                null != ey ? eM(ey) : null != Z && eM(w.A.get(Z)?.skuId);
        }, [eb, eZ, eM, Z, ey, eW, eI]);
    let ti = a.useCallback(() => {
            let e = (0, Y.lo)(e$) === Y.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            k.default.track(Q.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e8,
                is_custom_message_edited: eJ && e && null != eX ? eX !== et.intl.string(et.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eJ && e,
                emoji_name: eJ && e && eQ?.id == null ? eQ?.surrogates : void 0,
                sound_id: eJ && e ? e0?.soundId : void 0,
                duration_ms: t - eL.startTime,
                payment_source_type: te?.type,
                gift_card_balance: tn,
                gift_card_currency: tl,
            });
            let { enabled: n } = g.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eJ && null != e$ && null != u && n && (0, M.W)(u) && (0, v.Yd)(e$.id);
        }, [e8, eQ, eX, e$, eJ, e0, eL.startTime, te, tn, tl, u]),
        tr = a.useMemo(() => () => $?.(ej === V.h.COMPLETED, ev), [$, ej, ev]),
        ts = (0, i.A)(() => Date.now(), [e2]),
        to = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: a, emitPaymentFlowLoadedEvent: i } = t,
                    r = Date.now();
                if (e === W.pn.CONFIRM && (ti(), j?.(a), eT)) return void tr();
                e3(e), eE?.(e), eD(null), e === W.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : e2;
                null === s || i
                    ? k.default.track(Q.HAw.PAYMENT_FLOW_LOADED, {
                          ...e8,
                          initial_step: s ?? e,
                          continue_session_initial_step: eI,
                          has_saved_payment_source: eg,
                      })
                    : k.default.track(Q.HAw.PAYMENT_FLOW_STEP, {
                          ...e8,
                          ...l,
                          from_step: s,
                          to_step: e === W.pn.ADD_PAYMENT_STEPS ? W.pn.PAYMENT_TYPE : e,
                          step_duration_ms: r - ts,
                          flow_duration_ms: r - eL.startTime,
                          gift_card_balance: tn,
                          gift_card_currency: tl,
                      });
            },
            [e3, eE, eD, e2, eI, e8, ts, eL.startTime, ti, j, eT, tr, eg, tn, tl],
        );
    (0, L.b)(e2, eY, to, eR), (0, O.Q)(e2, eG, to), (0, N.A)(tr), (0, D.s)(eF, () => $(!1), eJ), (0, L.QR)(eY);
    let tu = (0, J.L)({ renderHeader: em, handleClose: tr });
    return (0, l.jsx)(A.e0, {
        children: (0, l.jsx)(s.b, {
            className: en.Xn,
            isShaking: eP && ej === V.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(ea, {
                step: e2,
                transitionState: U,
                isGift: eJ,
                giftRecipient: e$,
                returnRef: ef,
                manaModalSize: e1,
                modalSizeGetter: e4,
                handleClose: tr,
                children: (0, l.jsx)(X.Ay, {
                    header: tu,
                    initialPlanId: Z,
                    subscriptionTier: q,
                    handleStepChange: to,
                    handleClose: tr,
                    analyticsData: e8,
                    setAnalyticsData: e9,
                    trialId: el,
                    trialFooterMessageOverride: ei,
                    reviewWarningMessage: er,
                    planGroup: es,
                    openInvoiceId: eo,
                    analyticsLocation: u,
                    onSubscriptionConfirmation: eu,
                    renderPurchaseConfirmation: ec,
                    postSuccessGuild: ed,
                    followupSKUInfo: ep,
                    referralTrialOfferId: eA,
                    skipConfirm: eT,
                    continueSessionToInitialStep: eI,
                }),
            }),
        }),
    });
}
function er(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: i,
            referralTrialOfferId: s,
            continueSessionToInitialStep: o,
        } = e,
        { hasPaymentSources: c } = (0, E.jm)(),
        { selectedSkuId: d, setSelectedPlanId: m } = (0, I.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: h,
            blockedPayments: A,
            hasFetchedSubscriptions: y,
            defaultPlanId: S,
            startedPaymentFlowWithPaymentSourcesRef: _,
        } = (0, B.P5)(),
        { hasFetchedRelatedSubscriptionPlans: f, subscriptionPriceOptionsLoading: T } = (0, P.Jn)(),
        { isGift: x } = (0, F.Pv)(),
        N = _.current,
        g = (0, q.A)({ isGift: x, skuId: d, referralTrialOfferId: s }),
        [v, M] = a.useState(!0),
        b = (0, r.bG)([U.A], () => U.A.applicationIdsFetched.has(ee.tv));
    return (a.useEffect(() => {
        M(!y || !f || T);
    }, [T, f, y]),
    (0, p.A)(
        "Payment Modal",
        v,
        5,
        { hasFetchedSubscriptions: y, hasFetchedSubscriptionPlans: f, subscriptionPriceOptionsLoading: T },
        { tags: { app_context: "billing" } },
    ),
    a.useEffect(() => {
        if ((b || (0, u.LM)(ee.tv), v || A)) return;
        let e = (0, Z.vT)({ isTrial: g, isGift: x, selectedSkuId: d, startedPaymentFlowWithPaymentSources: N });
        null != o
            ? i(W.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== ee.gD.PREMIUM_GROUP_MONTH || c
                  ? i(W.pn.REVIEW)
                  : i(W.pn.ADD_PAYMENT_STEPS)
              : e
                ? (m((0, Z.xT)(d, h, S)), i(W.pn.REVIEW))
                : null != t
                  ? i(W.pn.PLAN_SELECT)
                  : i(W.pn.SKU_SELECT);
    }, [o, h, A, b, n, v, i, t, d, m, g, S, x, N, c]),
    v)
        ? (0, l.jsx)($.A, {})
        : A
          ? (0, l.jsx)(C.oO, {})
          : null;
}
