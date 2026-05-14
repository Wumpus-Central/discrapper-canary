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
    C = n(725836),
    A = n(742810),
    E = n(666646),
    y = n(558620),
    P = n(427675),
    S = n(480642),
    _ = n(94420),
    T = n(357669),
    f = n(319437),
    N = n(70730),
    I = n(45787),
    x = n(51501),
    g = n(422936),
    v = n(39423),
    M = n(511484),
    b = n(251913),
    R = n(869573),
    j = n(344159),
    L = n(97352),
    O = n(469778),
    D = n(174459),
    w = n(45938),
    U = n(428262),
    k = n(937008),
    Y = n(834252),
    G = n(166532),
    F = n(566980),
    B = n(379174),
    W = n(615310),
    V = n(800471),
    H = n(169801),
    K = n(216641),
    Z = n(462309),
    q = n(534479),
    z = n(482132);
n(322076);
var $ = n(652215),
    J = n(788868),
    X = n(375708),
    Q = n(106451);
let ee = { [G.pn.GIFT_CUSTOMIZATION]: "xl", [G.pn.REVIEW]: "md", [G.pn.ADD_PAYMENT_STEPS]: "md" },
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
        return (0, l.jsx)(S.Jg, {
            transitionState: n,
            size: p,
            returnRef: u,
            "aria-label": X.intl.string(X.t.q9EGps),
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
            onComplete: S,
            transitionState: v,
            initialPlanId: O,
            subscriptionTier: V,
            onClose: H,
            trialId: q,
            trialFooterMessageOverride: ee,
            reviewWarningMessage: en,
            planGroup: el = J.LE,
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
            shakeWhilePurchasing: eC = !1,
            isLargeModal: eA = !1,
            isMediumModal: eE = !1,
            returnRef: ey,
            skipConfirm: eP = !1,
            continueSessionToInitialStep: eS,
            paymentModalVersion: e_ = "v1",
        } = e,
        {
            selectedSkuId: eT,
            setSelectedSkuId: ef,
            setSelectedPlanId: eN,
            purchaseState: eI,
            setPurchaseState: ex,
            contextMetadata: eg,
        } = (0, _.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            purchaseState: e.purchaseState,
            setPurchaseState: e.setPurchaseState,
            contextMetadata: e.contextMetadata,
        })),
        {
            activitySessionId: ev,
            setPurchaseError: eM,
            paymentAuthenticationState: eb,
            purchaseTokenAuthState: eR,
            activeSubscription: ej,
            priceOptions: eL,
            hasPaymentSources: eO,
            paymentSourceId: eD,
            paymentSources: ew,
            purchaseType: eU,
            defaultPlanId: ek,
            customCheckoutFlow: eY,
            displayCurrency: eG,
            unifiedCheckoutFlow: eF,
        } = (0, Y.P5)(),
        eB = (0, E.sw)(),
        eW = (0, y.A)(),
        eV = (0, P.S3)(),
        eH = (0, B.A)(),
        { isGift: eK, giftRecipient: eZ, customGiftMessage: eq, emojiConfetti: ez, soundEffect: e$ } = (0, k.Pv)(),
        eJ = (0, W.bB)(),
        eX = (0, W.l)(),
        eQ = "sm";
    eA ? (eQ = "xl") : (eE || eJ === G.pn.ADD_PAYMENT_STEPS) && (eQ = "md");
    let e0 = eH?.modalSizeGetter,
        e2 = (0, A.D7)({ location: "PaymentModal" }),
        e3 = (0, g.O)(),
        e1 = null != V && !eK && (0, M.U9)(e3, V),
        [e4, e7] = a.useState({
            load_id: eg.loadId,
            discovery_session_id: eg.discoverySessionId,
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
            payment_modal_version: e_,
            activity_session_id: ev,
            eligible_for_discount: e1,
            sku_product_line: eV?.productLine,
            checkout_design: e2 ? A.rS.UNIFIED : A.rS.LEGACY,
            checkout_flow: eF,
            ...t,
        }),
        e6 = (0, K.W)(ew, eD),
        e5 = null != eB ? eB.getDiscountIdIfExists() : void 0;
    a.useEffect(() => {
        e7((e) => {
            let n = null != eW ? (0, U.y8)(eW.id, !1, eK, { paymentSourceId: eL.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eW?.id,
                price: n?.amount,
                regular_price: eW?.price,
                currency: eG,
                sku_id: eT,
                sku_product_line: eV?.productLine,
                ...t,
            };
        });
    }, [eW, eT, eK, eL, eG, t, eV?.productLine]),
        (0, m.Ay)(() => {
            (0, T.b)({
                ...e4,
                continue_session_initial_step: eS,
                custom_checkout_flow: eY,
                has_saved_payment_source: eO,
                discount_id: null != e3 ? e3.discountId : e5,
            });
        }),
        a.useEffect(() => {
            null == eW && (null != ek && null != eS ? eN(ek) : eN(O)),
                null != em ? ef(em) : null != O && ef(L.A.get(O)?.skuId);
        }, [eN, eW, ef, O, em, ek, eS]);
    let e8 = a.useCallback(() => {
            let e = (0, w.lo)(eZ) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            D.default.track($.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e4,
                is_custom_message_edited: eK && e && null != eq ? eq !== X.intl.string(X.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eK && e,
                emoji_name: eK && e && ez?.id == null ? ez?.surrogates : void 0,
                sound_id: eK && e ? e$?.soundId : void 0,
                duration_ms: t - eg.startTime,
                payment_source_type: e6?.type,
            });
            let { enabled: n } = N.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eK && null != eZ && null != r && n && (0, x.W)(r) && (0, I.Yd)(eZ.id);
        }, [e4, ez, eq, eZ, eK, e$, eg.startTime, e6, r]),
        e9 = a.useMemo(() => () => H?.(eI === F.h.COMPLETED, eT), [H, eI, eT]),
        te = (0, i.A)(() => Date.now(), [eJ]),
        tt = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: a, emitPaymentFlowLoadedEvent: i } = t,
                    r = Date.now();
                if (e === G.pn.CONFIRM && (e8(), S?.(a), eP)) return void e9();
                eX(e), eh?.(e), eM(null), e === G.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : eJ;
                null === s || i
                    ? D.default.track($.HAw.PAYMENT_FLOW_LOADED, {
                          ...e4,
                          initial_step: s ?? e,
                          continue_session_initial_step: eS,
                          has_saved_payment_source: eO,
                      })
                    : D.default.track($.HAw.PAYMENT_FLOW_STEP, {
                          ...e4,
                          ...l,
                          from_step: s,
                          to_step: e === G.pn.ADD_PAYMENT_STEPS ? G.pn.PAYMENT_TYPE : e,
                          step_duration_ms: r - te,
                          flow_duration_ms: r - eg.startTime,
                      });
            },
            [eX, eh, eM, eJ, eS, e4, te, eg.startTime, e8, S, eP, e9, eO],
        );
    (0, b.b)(eJ, eb, tt, ex), (0, R.Q)(eJ, eR, tt), (0, f.A)(e9), (0, j.s)(ej, () => H(!1), eK), (0, b.QR)(eb);
    let tn = (0, Z.L)({ renderHeader: eu, handleClose: e9 });
    return (0, l.jsx)(C.e0, {
        children: (0, l.jsx)(s.b, {
            className: Q.Xn,
            isShaking: eC && eI === F.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(et, {
                step: eJ,
                transitionState: v,
                isGift: eK,
                giftRecipient: eZ,
                returnRef: ey,
                manaModalSize: eQ,
                modalSizeGetter: e0,
                handleClose: e9,
                children: (0, l.jsx)(z.Ay, {
                    header: tn,
                    initialPlanId: O,
                    subscriptionTier: V,
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
                    skipConfirm: eP,
                    continueSessionToInitialStep: eS,
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
        { selectedSkuId: c, setSelectedPlanId: d } = (0, _.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: m,
            blockedPayments: C,
            hasFetchedSubscriptions: A,
            hasFetchedSubscriptionPlans: E,
            currencyLoading: y,
            defaultPlanId: P,
            startedPaymentFlowWithPaymentSourcesRef: S,
            hasPaymentSources: T,
        } = (0, Y.P5)(),
        { isGift: f } = (0, k.Pv)(),
        N = S.current,
        I = (0, H.A)({ isGift: f, skuId: c, referralTrialOfferId: s }),
        [x, g] = a.useState(!0),
        v = (0, r.bG)([O.A], () => O.A.applicationIdsFetched.has(J.tv));
    return (a.useEffect(() => {
        g(!A || !E || y);
    }, [y, E, A]),
    (0, p.A)(
        "Payment Modal",
        x,
        5,
        { hasFetchedSubscriptions: A, hasFetchedSubscriptionPlans: E, currencyLoading: y },
        { tags: { app_context: "billing" } },
    ),
    a.useEffect(() => {
        if ((v || (0, u.LM)(J.tv), x || C)) return;
        let e = (0, V.vT)({ isTrial: I, isGift: f, selectedSkuId: c, startedPaymentFlowWithPaymentSources: N });
        null != o
            ? i(G.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== J.gD.PREMIUM_GROUP_MONTH || T
                  ? i(G.pn.REVIEW)
                  : i(G.pn.ADD_PAYMENT_STEPS)
              : e
                ? (d((0, V.xT)(c, m, P)), i(G.pn.REVIEW))
                : null != t
                  ? i(G.pn.PLAN_SELECT)
                  : i(G.pn.SKU_SELECT);
    }, [o, m, C, v, n, x, i, t, c, d, I, P, f, N, T]),
    x)
        ? (0, l.jsx)(q.A, {})
        : C
          ? (0, l.jsx)(h.oO, {})
          : null;
}
