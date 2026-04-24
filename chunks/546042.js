n.d(t, { I: () => en, PaymentModal: () => et });
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
    _ = n(558620),
    E = n(427675),
    y = n(169797),
    f = n(94420),
    P = n(357669),
    S = n(319437),
    T = n(70730),
    x = n(45787),
    N = n(51501),
    g = n(422936),
    I = n(612669),
    v = n(511484),
    b = n(251913),
    M = n(869573),
    L = n(344159),
    R = n(97352),
    j = n(469778),
    O = n(954571),
    D = n(45938),
    w = n(927578),
    U = n(937008),
    k = n(156312),
    Y = n(166532),
    F = n(566980),
    G = n(379174),
    B = n(615310),
    W = n(800471),
    H = n(169801),
    V = n(216641),
    K = n(462309),
    Z = n(534479),
    q = n(482132);
n(322076);
var z = n(652215),
    $ = n(788868),
    X = n(985018),
    J = n(106451);
let Q = { [Y.pn.GIFT_CUSTOMIZATION]: "xl", [Y.pn.REVIEW]: "md", [Y.pn.ADD_PAYMENT_STEPS]: "md" },
    ee = (e) => {
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
            d = (0, I.FY)({ isGift: i }),
            p =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: i, giftRecipient: r })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              l = n ?? "md";
                          return null == e ? l : e in Q ? Q[e] : l;
                      })(t, { manaModalSizeFromProps: s });
        return (0, l.jsx)(y.Jg, {
            transitionState: n,
            size: p,
            returnRef: u,
            onClose: async () => {
                await a();
            },
            children: c,
        });
    };
function et(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: r,
            analyticsObject: u,
            analyticsSourceLocation: p,
            analyticsSubscriptionType: h = z.rzx.PREMIUM,
            onComplete: y,
            transitionState: I,
            initialPlanId: j,
            subscriptionTier: W,
            onClose: H,
            trialId: Z,
            trialFooterMessageOverride: Q,
            reviewWarningMessage: et,
            planGroup: en = $.LE,
            openInvoiceId: el,
            onSubscriptionConfirmation: ea,
            renderPurchaseConfirmation: ei,
            postSuccessGuild: er,
            followupSKUInfo: es,
            renderHeader: eo,
            applicationId: eu,
            guildId: ec,
            referralTrialOfferId: ed,
            skuId: ep,
            onStepChange: em,
            shakeWhilePurchasing: eh = !1,
            isLargeModal: eA = !1,
            isMediumModal: eC = !1,
            returnRef: e_,
            skipConfirm: eE = !1,
            continueSessionToInitialStep: ey,
            paymentModalVersion: ef = "v1",
        } = e,
        {
            selectedSkuId: eP,
            setSelectedSkuId: eS,
            setSelectedPlanId: eT,
        } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activitySessionId: ex,
            purchaseState: eN,
            setPurchaseState: eg,
            setPurchaseError: eI,
            paymentAuthenticationState: ev,
            contextMetadata: eb,
            purchaseTokenAuthState: eM,
            activeSubscription: eL,
            priceOptions: eR,
            hasPaymentSources: ej,
            paymentSourceId: eO,
            paymentSources: eD,
            purchaseType: ew,
            defaultPlanId: eU,
            customCheckoutFlow: ek,
            displayCurrency: eY,
            unifiedCheckoutFlow: eF,
        } = (0, k.P5)(),
        eG = (0, f.sw)(),
        eB = (0, _.A)(),
        eW = (0, E.S3)(),
        eH = (0, G.A)(),
        { isGift: eV, giftRecipient: eK, customGiftMessage: eZ, emojiConfetti: eq, soundEffect: ez } = (0, U.Pv)(),
        e$ = (0, B.bB)(),
        eX = (0, B.l)(),
        eJ = "sm";
    eA ? (eJ = "xl") : (eC || e$ === Y.pn.ADD_PAYMENT_STEPS) && (eJ = "md");
    let eQ = eH?.modalSizeGetter,
        e0 = (0, C.D7)({ location: "PaymentModal" }),
        e2 = (0, g.O)(),
        e1 = null != W && !eV && (0, v.U9)(e2, W),
        [e3, e4] = a.useState({
            load_id: eb.loadId,
            discovery_session_id: eb.discoverySessionId,
            payment_type: z.frM[ew],
            location: r ?? u,
            source: p,
            subscription_type: h,
            subscription_plan_id: eB?.id ?? j,
            is_gift: eV,
            eligible_for_trial: null != Z,
            location_stack: n,
            sku_id: ep,
            application_id: eu,
            guild_id: ec,
            payment_modal_version: ef,
            activity_session_id: ex,
            eligible_for_discount: e1,
            sku_product_line: eW?.productLine,
            checkout_design: e0 ? C.rS.UNIFIED : C.rS.LEGACY,
            checkout_flow: eF,
            ...t,
        }),
        e7 = (0, V.W)(eD, eO),
        e6 = null != eG ? eG.getDiscountIdIfExists() : void 0;
    a.useEffect(() => {
        e4((e) => {
            let n = null != eB ? (0, w.y8)(eB.id, !1, eV, { paymentSourceId: eR.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eB?.id,
                price: n?.amount,
                regular_price: eB?.price,
                currency: eY,
                sku_id: eP,
                sku_product_line: eW?.productLine,
                ...t,
            };
        });
    }, [eB, eP, eV, eR, eY, t, eW?.productLine]),
        (0, m.Ay)(() => {
            (0, P.b)({
                ...e3,
                continue_session_initial_step: ey,
                custom_checkout_flow: ek,
                has_saved_payment_source: ej,
                discount_id: null != e2 ? e2.discount_id : e6,
            });
        }),
        a.useEffect(() => {
            null == eB && (null != eU && null != ey ? eT(eU) : eT(j)),
                null != ep ? eS(ep) : null != j && eS(R.A.get(j)?.skuId);
        }, [eT, eB, eS, j, ep, eU, ey]);
    let e5 = a.useCallback(() => {
            let e = (0, D.lo)(eK) === D.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            O.default.track(z.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e3,
                is_custom_message_edited: eV && e && null != eZ ? eZ !== X.intl.string(X.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eV && e,
                emoji_name: eV && e && eq?.id == null ? eq?.surrogates : void 0,
                sound_id: eV && e ? ez?.soundId : void 0,
                duration_ms: t - eb.startTime,
                payment_source_type: e7?.type,
            });
            let { enabled: n } = T.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eV && null != eK && null != r && n && (0, N.W)(r) && (0, x.Yd)(eK.id);
        }, [e3, eq, eZ, eK, eV, ez, eb.startTime, e7, r]),
        e8 = a.useMemo(() => () => H?.(eN === F.h.COMPLETED, eP), [H, eN, eP]),
        e9 = (0, i.A)(() => Date.now(), [e$]),
        te = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: a, emitPaymentFlowLoadedEvent: i } = t,
                    r = Date.now();
                if (e === Y.pn.CONFIRM && (e5(), y?.(a), eE)) return void e8();
                eX(e), em?.(e), eI(null), e === Y.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : e$;
                null === s || i
                    ? O.default.track(z.HAw.PAYMENT_FLOW_LOADED, {
                          ...e3,
                          initial_step: s ?? e,
                          continue_session_initial_step: ey,
                          has_saved_payment_source: ej,
                      })
                    : O.default.track(z.HAw.PAYMENT_FLOW_STEP, {
                          ...e3,
                          ...l,
                          from_step: s,
                          to_step: e === Y.pn.ADD_PAYMENT_STEPS ? Y.pn.PAYMENT_TYPE : e,
                          step_duration_ms: r - e9,
                          flow_duration_ms: r - eb.startTime,
                      });
            },
            [eX, em, eI, e$, ey, e3, e9, eb.startTime, e5, y, eE, e8, ej],
        );
    (0, b.b)(e$, ev, te, eg),
        (0, Y.zT)(e$, eN, eg),
        (0, M.Q)(e$, eM, te),
        (0, S.A)(e8),
        (0, L.s)(eL, () => H(!1), eV),
        (0, b.QR)(ev);
    let tt = (0, K.L)({ renderHeader: eo, handleClose: e8 });
    return (0, l.jsx)(A.e0, {
        children: (0, l.jsx)(s.b, {
            className: J.Xn,
            isShaking: eh && eN === F.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(ee, {
                step: e$,
                transitionState: I,
                isGift: eV,
                giftRecipient: eK,
                returnRef: e_,
                manaModalSize: eJ,
                modalSizeGetter: eQ,
                handleClose: e8,
                children: (0, l.jsx)(q.Ay, {
                    header: tt,
                    initialPlanId: j,
                    subscriptionTier: W,
                    handleStepChange: te,
                    handleClose: e8,
                    analyticsData: e3,
                    setAnalyticsData: e4,
                    trialId: Z,
                    trialFooterMessageOverride: Q,
                    reviewWarningMessage: et,
                    planGroup: en,
                    openInvoiceId: el,
                    analyticsLocation: r,
                    onSubscriptionConfirmation: ea,
                    renderPurchaseConfirmation: ei,
                    postSuccessGuild: er,
                    followupSKUInfo: es,
                    referralTrialOfferId: ed,
                    skipConfirm: eE,
                    continueSessionToInitialStep: ey,
                }),
            }),
        }),
    });
}
function en(e) {
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
        } = (0, k.P5)(),
        { isGift: T } = (0, U.Pv)(),
        x = P.current,
        N = (0, H.A)({ isGift: T, skuId: c, referralTrialOfferId: s }),
        [g, I] = a.useState(!0),
        v = (0, r.bG)([j.A], () => j.A.applicationIdsFetched.has($.tv));
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
        if ((v || (0, u.LM)($.tv), g || A)) return;
        let e = (0, W.vT)({ isTrial: N, isGift: T, selectedSkuId: c, startedPaymentFlowWithPaymentSources: x });
        null != o
            ? i(Y.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== $.gD.PREMIUM_GROUP_MONTH || S
                  ? i(Y.pn.REVIEW)
                  : i(Y.pn.ADD_PAYMENT_STEPS)
              : e
                ? (d((0, W.xT)(c, m, y)), i(Y.pn.REVIEW))
                : null != t
                  ? i(Y.pn.PLAN_SELECT)
                  : i(Y.pn.SKU_SELECT);
    }, [o, m, A, v, n, g, i, t, c, d, N, y, T, x, S]),
    g)
        ? (0, l.jsx)(Z.A, {})
        : A
          ? (0, l.jsx)(h.oO, {})
          : null;
}
