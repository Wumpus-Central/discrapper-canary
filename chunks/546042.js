n.d(t, { I: () => en, PaymentModal: () => et });
var l = n(627968),
    i = n(64700),
    a = n(330140),
    r = n(417597),
    s = n(568602),
    o = n(73153),
    u = n(339048),
    c = n(158032),
    d = n(830382),
    p = n(428644),
    m = n(964486),
    h = n(459793),
    A = n(725836),
    _ = n(742810),
    C = n(558620),
    E = n(427675),
    y = n(169797),
    f = n(94420),
    P = n(357669),
    S = n(319437),
    x = n(70730),
    T = n(45787),
    N = n(51501),
    g = n(422936),
    I = n(612669),
    v = n(511484),
    b = n(251913),
    R = n(869573),
    M = n(344159),
    j = n(97352),
    L = n(469778),
    O = n(954571),
    D = n(45938),
    U = n(927578),
    w = n(937008),
    k = n(156312),
    F = n(166532),
    G = n(566980),
    B = n(379174),
    Y = n(615310),
    W = n(800471),
    V = n(169801),
    H = n(216641),
    K = n(462309),
    Z = n(534479),
    q = n(482132);
n(322076);
var z = n(652215),
    $ = n(788868),
    X = n(985018),
    J = n(106451);
let Q = { [F.pn.GIFT_CUSTOMIZATION]: "xl", [F.pn.REVIEW]: "md", [F.pn.ADD_PAYMENT_STEPS]: "md" },
    ee = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: i,
                isGift: a,
                giftRecipient: r,
                manaModalSize: s,
                modalSizeGetter: o,
                returnRef: u,
                children: c,
            } = e,
            d = (0, I.FY)({ isGift: a }),
            p =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: a, giftRecipient: r })
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
                await i();
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
            initialPlanId: L,
            subscriptionTier: W,
            onClose: V,
            trialId: Z,
            trialFooterMessageOverride: Q,
            reviewWarningMessage: et,
            planGroup: en = $.LE,
            openInvoiceId: el,
            onSubscriptionConfirmation: ei,
            renderPurchaseConfirmation: ea,
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
            isMediumModal: e_ = !1,
            returnRef: eC,
            skipConfirm: eE = !1,
            continueSessionToInitialStep: ey,
            paymentModalVersion: ef = "v1",
        } = e,
        {
            selectedSkuId: eP,
            setSelectedSkuId: eS,
            setSelectedPlanId: ex,
        } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activitySessionId: eT,
            purchaseState: eN,
            setPurchaseState: eg,
            setPurchaseError: eI,
            paymentAuthenticationState: ev,
            contextMetadata: eb,
            purchaseTokenAuthState: eR,
            activeSubscription: eM,
            priceOptions: ej,
            hasPaymentSources: eL,
            paymentSourceId: eO,
            paymentSources: eD,
            purchaseType: eU,
            defaultPlanId: ew,
            customCheckoutFlow: ek,
            displayCurrency: eF,
            unifiedCheckoutFlow: eG,
        } = (0, k.P5)(),
        eB = (0, f.sw)(),
        eY = (0, C.A)(),
        eW = (0, E.S3)(),
        eV = (0, B.A)(),
        { isGift: eH, giftRecipient: eK, customGiftMessage: eZ, emojiConfetti: eq, soundEffect: ez } = (0, w.Pv)(),
        e$ = (0, Y.bB)(),
        eX = (0, Y.l)(),
        eJ = "sm";
    eA ? (eJ = "xl") : (e_ || e$ === F.pn.ADD_PAYMENT_STEPS) && (eJ = "md");
    let eQ = eV?.modalSizeGetter,
        e0 = (0, _.D7)({ location: "PaymentModal" }),
        e2 = (0, g.O)(),
        e3 = null != W && !eH && (0, v.U9)(e2, W),
        [e1, e4] = i.useState({
            load_id: eb.loadId,
            discovery_session_id: eb.discoverySessionId,
            payment_type: z.frM[eU],
            location: r ?? u,
            source: p,
            subscription_type: h,
            subscription_plan_id: eY?.id ?? L,
            is_gift: eH,
            eligible_for_trial: null != Z,
            location_stack: n,
            sku_id: ep,
            application_id: eu,
            guild_id: ec,
            payment_modal_version: ef,
            activity_session_id: eT,
            eligible_for_discount: e3,
            sku_product_line: eW?.productLine,
            checkout_design: e0 ? _.rS.UNIFIED : _.rS.LEGACY,
            checkout_flow: eG,
            ...t,
        }),
        e7 = (0, H.W)(eD, eO),
        e6 = null != eB ? eB.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e4((e) => {
            let n = null != eY ? (0, U.y8)(eY.id, !1, eH, { paymentSourceId: ej.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eY?.id,
                price: n?.amount,
                regular_price: eY?.price,
                currency: eF,
                sku_id: eP,
                sku_product_line: eW?.productLine,
                ...t,
            };
        });
    }, [eY, eP, eH, ej, eF, t, eW?.productLine]),
        (0, m.Ay)(() => {
            (0, P.b)({
                ...e1,
                continue_session_initial_step: ey,
                custom_checkout_flow: ek,
                has_saved_payment_source: eL,
                discount_id: null != e2 ? e2.discount_id : e6,
            });
        }),
        i.useEffect(() => {
            null == eY && (null != ew && null != ey ? ex(ew) : ex(L)),
                null != ep ? eS(ep) : null != L && eS(j.A.get(L)?.skuId);
        }, [ex, eY, eS, L, ep, ew, ey]);
    let e5 = i.useCallback(() => {
            let e = (0, D.lo)(eK) === D.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            O.default.track(z.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e1,
                is_custom_message_edited: eH && e && null != eZ ? eZ !== X.intl.string(X.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eH && e,
                emoji_name: eH && e && eq?.id == null ? eq?.surrogates : void 0,
                sound_id: eH && e ? ez?.soundId : void 0,
                duration_ms: t - eb.startTime,
                payment_source_type: e7?.type,
            });
            let { enabled: n } = x.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eH && null != eK && null != r && n && (0, N.W)(r) && (0, T.Yd)(eK.id);
        }, [e1, eq, eZ, eK, eH, ez, eb.startTime, e7, r]),
        e8 = i.useMemo(() => () => V?.(eN === G.h.COMPLETED, eP), [V, eN, eP]),
        e9 = (0, a.A)(() => Date.now(), [e$]),
        te = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    r = Date.now();
                if (e === F.pn.CONFIRM && (e5(), y?.(i), eE)) return void e8();
                eX(e), em?.(e), eI(null), e === F.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : e$;
                null === s || a
                    ? O.default.track(z.HAw.PAYMENT_FLOW_LOADED, {
                          ...e1,
                          initial_step: s ?? e,
                          continue_session_initial_step: ey,
                          has_saved_payment_source: eL,
                      })
                    : O.default.track(z.HAw.PAYMENT_FLOW_STEP, {
                          ...e1,
                          ...l,
                          from_step: s,
                          to_step: e === F.pn.ADD_PAYMENT_STEPS ? F.pn.PAYMENT_TYPE : e,
                          step_duration_ms: r - e9,
                          flow_duration_ms: r - eb.startTime,
                      });
            },
            [eX, em, eI, e$, ey, e1, e9, eb.startTime, e5, y, eE, e8, eL],
        );
    (0, b.b)(e$, ev, te, eg),
        (0, F.zT)(e$, eN, eg),
        (0, R.Q)(e$, eR, te),
        (0, S.A)(e8),
        (0, M.s)(eM, () => V(!1), eH),
        (0, b.QR)(ev);
    let tt = (0, K.L)({ renderHeader: eo, handleClose: e8 });
    return (0, l.jsx)(A.e0, {
        children: (0, l.jsx)(s.b, {
            className: J.Xn,
            isShaking: eh && eN === G.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(ee, {
                step: e$,
                transitionState: I,
                isGift: eH,
                giftRecipient: eK,
                returnRef: eC,
                manaModalSize: eJ,
                modalSizeGetter: eQ,
                handleClose: e8,
                children: (0, l.jsx)(q.Ay, {
                    header: tt,
                    initialPlanId: L,
                    subscriptionTier: W,
                    handleStepChange: te,
                    handleClose: e8,
                    analyticsData: e1,
                    setAnalyticsData: e4,
                    trialId: Z,
                    trialFooterMessageOverride: Q,
                    reviewWarningMessage: et,
                    planGroup: en,
                    openInvoiceId: el,
                    analyticsLocation: r,
                    onSubscriptionConfirmation: ei,
                    renderPurchaseConfirmation: ea,
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
            handleStepChange: a,
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
            hasFetchedSubscriptions: _,
            hasFetchedSubscriptionPlans: C,
            currencyLoading: E,
            defaultPlanId: y,
            startedPaymentFlowWithPaymentSourcesRef: P,
            hasPaymentSources: S,
        } = (0, k.P5)(),
        { isGift: x } = (0, w.Pv)(),
        T = P.current,
        N = (0, V.A)({ isGift: x, skuId: c, referralTrialOfferId: s }),
        [g, I] = i.useState(!0),
        v = (0, r.bG)([L.A], () => L.A.applicationIdsFetched.has($.tv));
    return (i.useEffect(() => {
        I(!_ || !C || E);
    }, [E, C, _]),
    (0, p.A)(
        "Payment Modal",
        g,
        5,
        { hasFetchedSubscriptions: _, hasFetchedSubscriptionPlans: C, currencyLoading: E },
        { tags: { app_context: "billing" } },
    ),
    i.useEffect(() => {
        if ((v || (0, u.LM)($.tv), g || A)) return;
        let e = (0, W.vT)({ isTrial: N, isGift: x, selectedSkuId: c, startedPaymentFlowWithPaymentSources: T });
        null != o
            ? a(F.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== $.gD.PREMIUM_GROUP_MONTH || S
                  ? a(F.pn.REVIEW)
                  : a(F.pn.ADD_PAYMENT_STEPS)
              : e
                ? (d((0, W.xT)(c, m, y)), a(F.pn.REVIEW))
                : null != t
                  ? a(F.pn.PLAN_SELECT)
                  : a(F.pn.SKU_SELECT);
    }, [o, m, A, v, n, g, a, t, c, d, N, y, x, T, S]),
    g)
        ? (0, l.jsx)(Z.A, {})
        : A
          ? (0, l.jsx)(h.oO, {})
          : null;
}
