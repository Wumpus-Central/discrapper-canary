"use strict";
n.d(t, { I: () => en, PaymentModal: () => et });
var r = n(627968),
    i = n(64700),
    s = n(330140),
    a = n(417597),
    o = n(568602),
    l = n(73153),
    u = n(339048),
    c = n(158032),
    d = n(830382),
    _ = n(428644),
    f = n(964486),
    p = n(459793),
    h = n(725836),
    E = n(742810),
    m = n(558620),
    g = n(427675),
    A = n(169797),
    I = n(94420),
    T = n(357669),
    S = n(319437),
    y = n(70730),
    N = n(45787),
    v = n(51501),
    C = n(422936),
    O = n(612669),
    R = n(511484),
    b = n(251913),
    D = n(869573),
    L = n(344159),
    w = n(97352),
    M = n(469778),
    P = n(954571),
    x = n(45938),
    k = n(927578),
    U = n(937008),
    G = n(156312),
    F = n(166532),
    V = n(566980),
    B = n(379174),
    H = n(615310),
    j = n(800471),
    Y = n(169801),
    W = n(216641),
    K = n(462309),
    $ = n(534479),
    z = n(482132);
n(322076);
var q = n(652215),
    X = n(788868),
    Q = n(985018),
    Z = n(106451);
let J = { [F.pn.GIFT_CUSTOMIZATION]: "xl", [F.pn.REVIEW]: "md", [F.pn.ADD_PAYMENT_STEPS]: "md" },
    ee = (e) => {
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
            d = (0, O.FY)({ isGift: s }),
            _ =
                null != l
                    ? l({ canCurrentlyPurchasePremiumGroup: d, isGift: s, giftRecipient: a })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              r = n ?? "md";
                          return null == e ? r : e in J ? J[e] : r;
                      })(t, { manaModalSizeFromProps: o });
        return (0, r.jsx)(A.Jg, {
            transitionState: n,
            size: _,
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
            analyticsLocation: a,
            analyticsObject: u,
            analyticsSourceLocation: _,
            analyticsSubscriptionType: p = q.rzx.PREMIUM,
            onComplete: A,
            transitionState: O,
            initialPlanId: M,
            subscriptionTier: j,
            onClose: Y,
            trialId: $,
            trialFooterMessageOverride: J,
            reviewWarningMessage: et,
            planGroup: en = X.LE,
            openInvoiceId: er,
            onSubscriptionConfirmation: ei,
            renderPurchaseConfirmation: es,
            postSuccessGuild: ea,
            followupSKUInfo: eo,
            renderHeader: el,
            applicationId: eu,
            guildId: ec,
            referralTrialOfferId: ed,
            skuId: e_,
            onStepChange: ef,
            shakeWhilePurchasing: ep = !1,
            isLargeModal: eh = !1,
            isMediumModal: eE = !1,
            returnRef: em,
            skipConfirm: eg = !1,
            continueSessionToInitialStep: eA,
            paymentModalVersion: eI = "v1",
        } = e,
        {
            selectedSkuId: eT,
            setSelectedSkuId: eS,
            setSelectedPlanId: ey,
        } = (0, I.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activitySessionId: eN,
            purchaseState: ev,
            setPurchaseState: eC,
            setPurchaseError: eO,
            paymentAuthenticationState: eR,
            contextMetadata: eb,
            purchaseTokenAuthState: eD,
            activeSubscription: eL,
            priceOptions: ew,
            hasPaymentSources: eM,
            paymentSourceId: eP,
            paymentSources: ex,
            purchaseType: ek,
            defaultPlanId: eU,
            customCheckoutFlow: eG,
            displayCurrency: eF,
            unifiedCheckoutFlow: eV,
        } = (0, G.P5)(),
        eB = (0, I.sw)(),
        eH = (0, m.A)(),
        ej = (0, g.S3)(),
        eY = (0, B.A)(),
        { isGift: eW, giftRecipient: eK, customGiftMessage: e$, emojiConfetti: ez, soundEffect: eq } = (0, U.Pv)(),
        eX = (0, H.bB)(),
        eQ = (0, H.l)(),
        eZ = "sm";
    eh ? (eZ = "xl") : (eE || eX === F.pn.ADD_PAYMENT_STEPS) && (eZ = "md");
    let eJ = eY?.modalSizeGetter,
        e0 = (0, E.D7)({ location: "PaymentModal" }),
        e1 = (0, C.O)(),
        e2 = null != j && !eW && (0, R.U9)(e1, j),
        [e3, e6] = i.useState({
            load_id: eb.loadId,
            discovery_session_id: eb.discoverySessionId,
            payment_type: q.frM[ek],
            location: a ?? u,
            source: _,
            subscription_type: p,
            subscription_plan_id: eH?.id ?? M,
            is_gift: eW,
            eligible_for_trial: null != $,
            location_stack: n,
            sku_id: e_,
            application_id: eu,
            guild_id: ec,
            payment_modal_version: eI,
            activity_session_id: eN,
            eligible_for_discount: e2,
            sku_product_line: ej?.productLine,
            checkout_design: e0 ? E.rS.UNIFIED : E.rS.LEGACY,
            checkout_flow: eV,
            ...t,
        }),
        e4 = (0, W.W)(ex, eP),
        e7 = null != eB ? eB.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e6((e) => {
            let n = null != eH ? (0, k.y8)(eH.id, !1, eW, { paymentSourceId: ew.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eH?.id,
                price: n?.amount,
                regular_price: eH?.price,
                currency: eF,
                sku_id: eT,
                sku_product_line: ej?.productLine,
                ...t,
            };
        });
    }, [eH, eT, eW, ew, eF, t, ej?.productLine]),
        (0, f.Ay)(() => {
            (0, T.b)({
                ...e3,
                continue_session_initial_step: eA,
                custom_checkout_flow: eG,
                has_saved_payment_source: eM,
                discount_id: null != e1 ? e1.discount_id : e7,
            });
        }),
        i.useEffect(() => {
            null == eH && (null != eU && null != eA ? ey(eU) : ey(M)),
                null != e_ ? eS(e_) : null != M && eS(w.A.get(M)?.skuId);
        }, [ey, eH, eS, M, e_, eU, eA]);
    let e5 = i.useCallback(() => {
            let e = (0, x.lo)(eK) === x.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            P.default.track(q.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e3,
                is_custom_message_edited: eW && e && null != e$ ? e$ !== Q.intl.string(Q.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eW && e,
                emoji_name: eW && e && ez?.id == null ? ez?.surrogates : void 0,
                sound_id: eW && e ? eq?.soundId : void 0,
                duration_ms: t - eb.startTime,
                payment_source_type: e4?.type,
            });
            let { enabled: n } = y.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eW && null != eK && null != a && n && (0, v.W)(a) && (0, N.Yd)(eK.id);
        }, [e3, ez, e$, eK, eW, eq, eb.startTime, e4, a]),
        e8 = i.useMemo(() => () => Y?.(ev === V.h.COMPLETED, eT), [Y, ev, eT]),
        e9 = (0, s.A)(() => Date.now(), [eX]),
        te = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === F.pn.CONFIRM && (e5(), A?.(i), eg)) return void e8();
                eQ(e), ef?.(e), eO(null), e === F.pn.ADD_PAYMENT_STEPS && (l.h.wait(c.ET), l.h.wait(d.T3));
                let o = null != n ? n : eX;
                null === o || s
                    ? P.default.track(q.HAw.PAYMENT_FLOW_LOADED, {
                          ...e3,
                          initial_step: o ?? e,
                          continue_session_initial_step: eA,
                          has_saved_payment_source: eM,
                      })
                    : P.default.track(q.HAw.PAYMENT_FLOW_STEP, {
                          ...e3,
                          ...r,
                          from_step: o,
                          to_step: e === F.pn.ADD_PAYMENT_STEPS ? F.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - e9,
                          flow_duration_ms: a - eb.startTime,
                      });
            },
            [eQ, ef, eO, eX, eA, e3, e9, eb.startTime, e5, A, eg, e8, eM],
        );
    (0, b.b)(eX, eR, te, eC),
        (0, F.zT)(eX, ev, eC),
        (0, D.Q)(eX, eD, te),
        (0, S.A)(e8),
        (0, L.s)(eL, () => Y(!1), eW),
        (0, b.QR)(eR);
    let tt = (0, K.L)({ renderHeader: el, handleClose: e8 });
    return (0, r.jsx)(h.e0, {
        children: (0, r.jsx)(o.b, {
            className: Z.Xn,
            isShaking: ep && ev === V.h.PURCHASING,
            intensity: 2,
            children: (0, r.jsx)(ee, {
                step: eX,
                transitionState: O,
                isGift: eW,
                giftRecipient: eK,
                returnRef: em,
                manaModalSize: eZ,
                modalSizeGetter: eJ,
                handleClose: e8,
                children: (0, r.jsx)(z.Ay, {
                    header: tt,
                    initialPlanId: M,
                    subscriptionTier: j,
                    handleStepChange: te,
                    handleClose: e8,
                    analyticsData: e3,
                    setAnalyticsData: e6,
                    trialId: $,
                    trialFooterMessageOverride: J,
                    reviewWarningMessage: et,
                    planGroup: en,
                    openInvoiceId: er,
                    analyticsLocation: a,
                    onSubscriptionConfirmation: ei,
                    renderPurchaseConfirmation: es,
                    postSuccessGuild: ea,
                    followupSKUInfo: eo,
                    referralTrialOfferId: ed,
                    skipConfirm: eg,
                    continueSessionToInitialStep: eA,
                }),
            }),
        }),
    });
}
function en(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: s,
            referralTrialOfferId: o,
            continueSessionToInitialStep: l,
        } = e,
        { selectedSkuId: c, setSelectedPlanId: d } = (0, I.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: f,
            blockedPayments: h,
            hasFetchedSubscriptions: E,
            hasFetchedSubscriptionPlans: m,
            currencyLoading: g,
            defaultPlanId: A,
            startedPaymentFlowWithPaymentSourcesRef: T,
            hasPaymentSources: S,
        } = (0, G.P5)(),
        { isGift: y } = (0, U.Pv)(),
        N = T.current,
        v = (0, Y.A)({ isGift: y, skuId: c, referralTrialOfferId: o }),
        [C, O] = i.useState(!0),
        R = (0, a.bG)([M.A], () => M.A.applicationIdsFetched.has(X.tv));
    return (i.useEffect(() => {
        O(!E || !m || g);
    }, [g, m, E]),
    (0, _.A)(
        "Payment Modal",
        C,
        5,
        { hasFetchedSubscriptions: E, hasFetchedSubscriptionPlans: m, currencyLoading: g },
        { tags: { app_context: "billing" } },
    ),
    i.useEffect(() => {
        if ((R || (0, u.LM)(X.tv), C || h)) return;
        let e = (0, j.vT)({ isTrial: v, isGift: y, selectedSkuId: c, startedPaymentFlowWithPaymentSources: N });
        null != l
            ? s(F.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: l })
            : null != n
              ? n !== X.gD.PREMIUM_GROUP_MONTH || S
                  ? s(F.pn.REVIEW)
                  : s(F.pn.ADD_PAYMENT_STEPS)
              : e
                ? (d((0, j.xT)(c, f, A)), s(F.pn.REVIEW))
                : null != t
                  ? s(F.pn.PLAN_SELECT)
                  : s(F.pn.SKU_SELECT);
    }, [l, f, h, R, n, C, s, t, c, d, v, A, y, N, S]),
    C)
        ? (0, r.jsx)($.A, {})
        : h
          ? (0, r.jsx)(p.oO, {})
          : null;
}
