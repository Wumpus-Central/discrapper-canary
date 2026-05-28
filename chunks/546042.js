n.d(t, { I: () => ea, PaymentModal: () => er });
var l = n(627968),
    i = n(64700),
    r = n(976634),
    a = n(702841),
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
    f = n(558620),
    _ = n(427675),
    T = n(480642),
    I = n(722847),
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
    G = n(45938),
    Y = n(428262),
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
    ei = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: i,
                isGift: r,
                giftRecipient: a,
                manaModalSize: s,
                modalSizeGetter: o,
                returnRef: u,
                children: c,
            } = e,
            d = (0, j.FY)({ isGift: r }),
            p =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: r, giftRecipient: a })
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
                await i();
            },
            children: c,
        });
    };
function er(e) {
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
            trialFooterMessageOverride: er,
            reviewWarningMessage: ea,
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
            isMediumModal: ef = !1,
            returnRef: e_,
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
            paymentAuthenticationState: eG,
            purchaseTokenAuthState: eY,
            activeSubscription: eF,
            purchaseType: eB,
            defaultPlanId: eW,
            customCheckoutFlow: eV,
            unifiedCheckoutFlow: eH,
        } = (0, B.P5)(),
        eK = (0, S.sw)(),
        eZ = (0, f.A)(),
        eq = (0, _.S3)(),
        ez = (0, H.A)(),
        { isGift: eJ, giftRecipient: e$, customGiftMessage: eX, emojiConfetti: eQ, soundEffect: e0 } = (0, F.Pv)(),
        e2 = (0, K.bB)(),
        e3 = (0, K.l)(),
        e1 = "sm";
    eS ? (e1 = "xl") : (ef || e2 === W.pn.ADD_PAYMENT_STEPS) && (e1 = "md");
    let e4 = ez?.modalSizeGetter,
        e7 = (0, y.D7)({ location: "PaymentModal" }),
        e6 = (0, b.O)(),
        e5 = null != q && !eJ && (0, R.U9)(e6, q),
        [e8, e9] = i.useState({
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
        tt = (0, a.bG)([h.A], () => h.A.getBalance(eO ?? ""), [eO]),
        tn = null != tt ? tt.amount : null,
        tl = null != tt ? tt.currency : null,
        ti = null != eK ? eK.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e9((e) => {
            let n = null != eZ ? (0, Y.y8)(eZ.id, !1, eJ, { paymentSourceId: ew.paymentSourceId }) : void 0;
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
                discount_id: null != e6 ? e6.discountId : ti,
            });
        }),
        i.useEffect(() => {
            null == eZ && (null != eW && null != eI ? eb(eW) : eb(Z)),
                null != ey ? eM(ey) : null != Z && eM(w.A.get(Z)?.skuId);
        }, [eb, eZ, eM, Z, ey, eW, eI]);
    let tr = i.useCallback(() => {
            let e = (0, G.lo)(e$) === G.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
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
            eJ && null != e$ && null != u && n && (0, M.WO)(u) && (0, v.Yd)(e$.id);
        }, [e8, eQ, eX, e$, eJ, e0, eL.startTime, te, tn, tl, u]),
        ta = i.useMemo(() => () => $?.(ej === V.h.COMPLETED, ev), [$, ej, ev]),
        ts = (0, r.A)(() => Date.now(), [e2]),
        to = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: i, emitPaymentFlowLoadedEvent: r } = t,
                    a = Date.now();
                if (e === W.pn.CONFIRM && (tr(), j?.(i), eT)) return void ta();
                e3(e), eE?.(e), eD(null), e === W.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : e2;
                null === s || r
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
                          step_duration_ms: a - ts,
                          flow_duration_ms: a - eL.startTime,
                          gift_card_balance: tn,
                          gift_card_currency: tl,
                      });
            },
            [e3, eE, eD, e2, eI, e8, ts, eL.startTime, tr, j, eT, ta, eg, tn, tl],
        );
    (0, L.b)(e2, eG, to, eR), (0, O.Q)(e2, eY, to), (0, N.A)(ta), (0, D.s)(eF, () => $(!1), eJ), (0, L.QR)(eG);
    let tu = (0, J.L)({ renderHeader: em, handleClose: ta });
    return (0, l.jsx)(A.e0, {
        children: (0, l.jsx)(s.b, {
            className: en.Xn,
            isShaking: eP && ej === V.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(ei, {
                step: e2,
                transitionState: U,
                isGift: eJ,
                giftRecipient: e$,
                returnRef: e_,
                manaModalSize: e1,
                modalSizeGetter: e4,
                handleClose: ta,
                children: (0, l.jsx)(X.Ay, {
                    header: tu,
                    initialPlanId: Z,
                    subscriptionTier: q,
                    handleStepChange: to,
                    handleClose: ta,
                    analyticsData: e8,
                    setAnalyticsData: e9,
                    trialId: el,
                    trialFooterMessageOverride: er,
                    reviewWarningMessage: ea,
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
function ea(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: r,
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
            startedPaymentFlowWithPaymentSourcesRef: f,
        } = (0, B.P5)(),
        { hasFetchedRelatedSubscriptionPlans: _, subscriptionPriceOptionsLoading: T } = (0, P.Jn)(),
        { isGift: x } = (0, F.Pv)(),
        N = f.current,
        g = (0, q.A)({ isGift: x, skuId: d, referralTrialOfferId: s }),
        [v, M] = i.useState(!0),
        b = (0, a.bG)([U.A], () => U.A.applicationIdsFetched.has(ee.tv));
    return (i.useEffect(() => {
        M(!y || !_ || T);
    }, [T, _, y]),
    (0, p.A)(
        "Payment Modal",
        v,
        5,
        { hasFetchedSubscriptions: y, hasFetchedSubscriptionPlans: _, subscriptionPriceOptionsLoading: T },
        { tags: { app_context: "billing" } },
    ),
    i.useEffect(() => {
        if ((b || (0, u.LM)(ee.tv), v || A)) return;
        let e = (0, Z.vT)({ isTrial: g, isGift: x, selectedSkuId: d, startedPaymentFlowWithPaymentSources: N });
        null != o
            ? r(W.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== ee.gD.PREMIUM_GROUP_MONTH || c
                  ? r(W.pn.REVIEW)
                  : r(W.pn.ADD_PAYMENT_STEPS)
              : e
                ? (m((0, Z.xT)(d, h, S)), r(W.pn.REVIEW))
                : null != t
                  ? r(W.pn.PLAN_SELECT)
                  : r(W.pn.SKU_SELECT);
    }, [o, h, A, b, n, v, r, t, d, m, g, S, x, N, c]),
    v)
        ? (0, l.jsx)($.A, {})
        : A
          ? (0, l.jsx)(C.oO, {})
          : null;
}
