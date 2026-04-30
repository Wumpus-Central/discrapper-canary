n.d(t, { I: () => el, PaymentModal: () => en });
var l = n(627968),
    a = n(64700),
    i = n(976634),
    s = n(702841),
    r = n(568602),
    o = n(228366),
    u = n(339048),
    c = n(158032),
    d = n(830382),
    p = n(428644),
    m = n(964486),
    h = n(545075),
    A = n(725836),
    C = n(742810),
    E = n(666646),
    y = n(558620),
    P = n(427675),
    S = n(169797),
    _ = n(94420),
    T = n(357669),
    f = n(319437),
    N = n(70730),
    x = n(45787),
    I = n(51501),
    g = n(422936),
    v = n(612669),
    M = n(511484),
    b = n(251913),
    R = n(869573),
    j = n(344159),
    L = n(97352),
    O = n(469778),
    D = n(954571),
    w = n(45938),
    U = n(927578),
    k = n(937008),
    Y = n(156312),
    G = n(166532),
    F = n(566980),
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
    J = n(788868),
    X = n(985018),
    Q = n(106451);
let ee = { [G.pn.GIFT_CUSTOMIZATION]: "xl", [G.pn.REVIEW]: "md", [G.pn.ADD_PAYMENT_STEPS]: "md" },
    et = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: a,
                isGift: i,
                giftRecipient: s,
                manaModalSize: r,
                modalSizeGetter: o,
                returnRef: u,
                children: c,
            } = e,
            d = (0, v.FY)({ isGift: i }),
            p =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: i, giftRecipient: s })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              l = n ?? "md";
                          return null == e ? l : e in ee ? ee[e] : l;
                      })(t, { manaModalSizeFromProps: r });
        return (0, l.jsx)(S.Jg, {
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
            analyticsLocation: s,
            analyticsObject: u,
            analyticsSourceLocation: p,
            analyticsSubscriptionType: h = $.rzx.PREMIUM,
            onComplete: S,
            transitionState: v,
            initialPlanId: O,
            subscriptionTier: H,
            onClose: V,
            trialId: q,
            trialFooterMessageOverride: ee,
            reviewWarningMessage: en,
            planGroup: el = J.LE,
            openInvoiceId: ea,
            onSubscriptionConfirmation: ei,
            renderPurchaseConfirmation: es,
            postSuccessGuild: er,
            followupSKUInfo: eo,
            renderHeader: eu,
            applicationId: ec,
            guildId: ed,
            referralTrialOfferId: ep,
            skuId: em,
            onStepChange: eh,
            shakeWhilePurchasing: eA = !1,
            isLargeModal: eC = !1,
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
            purchaseState: ex,
            setPurchaseState: eI,
        } = (0, _.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            purchaseState: e.purchaseState,
            setPurchaseState: e.setPurchaseState,
        })),
        {
            activitySessionId: eg,
            setPurchaseError: ev,
            paymentAuthenticationState: eM,
            contextMetadata: eb,
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
        eH = (0, P.S3)(),
        eV = (0, B.A)(),
        { isGift: eK, giftRecipient: eZ, customGiftMessage: eq, emojiConfetti: ez, soundEffect: e$ } = (0, k.Pv)(),
        eJ = (0, W.bB)(),
        eX = (0, W.l)(),
        eQ = "sm";
    eC ? (eQ = "xl") : (eE || eJ === G.pn.ADD_PAYMENT_STEPS) && (eQ = "md");
    let e0 = eV?.modalSizeGetter,
        e2 = (0, C.D7)({ location: "PaymentModal" }),
        e3 = (0, g.O)(),
        e1 = null != H && !eK && (0, M.U9)(e3, H),
        [e4, e7] = a.useState({
            load_id: eb.loadId,
            discovery_session_id: eb.discoverySessionId,
            payment_type: $.frM[eU],
            location: s ?? u,
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
            activity_session_id: eg,
            eligible_for_discount: e1,
            sku_product_line: eH?.productLine,
            checkout_design: e2 ? C.rS.UNIFIED : C.rS.LEGACY,
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
                sku_product_line: eH?.productLine,
                ...t,
            };
        });
    }, [eW, eT, eK, eL, eG, t, eH?.productLine]),
        (0, m.Ay)(() => {
            (0, T.b)({
                ...e4,
                continue_session_initial_step: eS,
                custom_checkout_flow: eY,
                has_saved_payment_source: eO,
                discount_id: null != e3 ? e3.discount_id : e5,
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
                duration_ms: t - eb.startTime,
                payment_source_type: e6?.type,
            });
            let { enabled: n } = N.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eK && null != eZ && null != s && n && (0, I.W)(s) && (0, x.Yd)(eZ.id);
        }, [e4, ez, eq, eZ, eK, e$, eb.startTime, e6, s]),
        e9 = a.useMemo(() => () => V?.(ex === F.h.COMPLETED, eT), [V, ex, eT]),
        te = (0, i.A)(() => Date.now(), [eJ]),
        tt = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: a, emitPaymentFlowLoadedEvent: i } = t,
                    s = Date.now();
                if (e === G.pn.CONFIRM && (e8(), S?.(a), eP)) return void e9();
                eX(e), eh?.(e), ev(null), e === G.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let r = null != n ? n : eJ;
                null === r || i
                    ? D.default.track($.HAw.PAYMENT_FLOW_LOADED, {
                          ...e4,
                          initial_step: r ?? e,
                          continue_session_initial_step: eS,
                          has_saved_payment_source: eO,
                      })
                    : D.default.track($.HAw.PAYMENT_FLOW_STEP, {
                          ...e4,
                          ...l,
                          from_step: r,
                          to_step: e === G.pn.ADD_PAYMENT_STEPS ? G.pn.PAYMENT_TYPE : e,
                          step_duration_ms: s - te,
                          flow_duration_ms: s - eb.startTime,
                      });
            },
            [eX, eh, ev, eJ, eS, e4, te, eb.startTime, e8, S, eP, e9, eO],
        );
    (0, b.b)(eJ, eM, tt, eI), (0, R.Q)(eJ, eR, tt), (0, f.A)(e9), (0, j.s)(ej, () => V(!1), eK), (0, b.QR)(eM);
    let tn = (0, Z.L)({ renderHeader: eu, handleClose: e9 });
    return (0, l.jsx)(A.e0, {
        children: (0, l.jsx)(r.b, {
            className: Q.Xn,
            isShaking: eA && ex === F.h.PURCHASING,
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
                    analyticsLocation: s,
                    onSubscriptionConfirmation: ei,
                    renderPurchaseConfirmation: es,
                    postSuccessGuild: er,
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
            referralTrialOfferId: r,
            continueSessionToInitialStep: o,
        } = e,
        { selectedSkuId: c, setSelectedPlanId: d } = (0, _.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: m,
            blockedPayments: A,
            hasFetchedSubscriptions: C,
            hasFetchedSubscriptionPlans: E,
            currencyLoading: y,
            defaultPlanId: P,
            startedPaymentFlowWithPaymentSourcesRef: S,
            hasPaymentSources: T,
        } = (0, Y.P5)(),
        { isGift: f } = (0, k.Pv)(),
        N = S.current,
        x = (0, V.A)({ isGift: f, skuId: c, referralTrialOfferId: r }),
        [I, g] = a.useState(!0),
        v = (0, s.bG)([O.A], () => O.A.applicationIdsFetched.has(J.tv));
    return (a.useEffect(() => {
        g(!C || !E || y);
    }, [y, E, C]),
    (0, p.A)(
        "Payment Modal",
        I,
        5,
        { hasFetchedSubscriptions: C, hasFetchedSubscriptionPlans: E, currencyLoading: y },
        { tags: { app_context: "billing" } },
    ),
    a.useEffect(() => {
        if ((v || (0, u.LM)(J.tv), I || A)) return;
        let e = (0, H.vT)({ isTrial: x, isGift: f, selectedSkuId: c, startedPaymentFlowWithPaymentSources: N });
        null != o
            ? i(G.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== J.gD.PREMIUM_GROUP_MONTH || T
                  ? i(G.pn.REVIEW)
                  : i(G.pn.ADD_PAYMENT_STEPS)
              : e
                ? (d((0, H.xT)(c, m, P)), i(G.pn.REVIEW))
                : null != t
                  ? i(G.pn.PLAN_SELECT)
                  : i(G.pn.SKU_SELECT);
    }, [o, m, A, v, n, I, i, t, c, d, x, P, f, N, T]),
    I)
        ? (0, l.jsx)(q.A, {})
        : A
          ? (0, l.jsx)(h.oO, {})
          : null;
}
