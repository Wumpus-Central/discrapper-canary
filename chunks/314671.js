n.d(t, { I: () => eT, PaymentModal: () => eI });
var l = n(627968),
    r = n(64700),
    a = n(976634),
    i = n(702841),
    s = n(568602),
    o = n(228366),
    u = n(339048),
    c = n(158032),
    d = n(830382),
    p = n(428644),
    m = n(964486),
    A = n(86379),
    h = n(11939),
    E = n(545075),
    C = n(145659),
    y = n(725836),
    _ = n(31823),
    P = n(426398),
    S = n(211083),
    I = n(655857),
    T = n(666646),
    f = n(558620),
    N = n(427675),
    v = n(480642),
    g = n(211159),
    x = n(357669),
    R = n(319437),
    M = n(70730),
    b = n(45787),
    L = n(51501),
    O = n(422936),
    j = n(862990),
    w = n(410516),
    D = n(251913),
    U = n(166532),
    k = n(71319),
    G = n(344159),
    F = n(97352),
    Y = n(469778),
    B = n(174459),
    W = n(45938),
    H = n(428262),
    V = n(937008),
    K = n(566980),
    Z = n(615310),
    q = n(121005),
    z = n(800471),
    J = n(169801),
    $ = n(216641),
    X = n(284009),
    Q = n.n(X),
    ee = n(17928),
    et = n(935462),
    en = n(546605),
    el = n(364995),
    er = n(463376),
    ea = n(584160),
    ei = n(242874),
    es = n(573359),
    eo = n(165191),
    eu = n(237412),
    ec = n(897904),
    ed = n(906234),
    ep = n(652215),
    em = n(788868),
    eA = n(818348),
    eh = n(575650),
    eE = n(534479),
    eC = n(482132);
n(322076);
var ey = n(375708),
    e_ = n(106451);
let eP = { [U.pn.GIFT_CUSTOMIZATION]: "xl", [U.pn.REVIEW]: "md", [U.pn.ADD_PAYMENT_STEPS]: "md" },
    eS = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: r,
                isGift: a,
                giftRecipient: i,
                manaModalSize: s,
                modalSizeGetter: o,
                returnRef: u,
                children: c,
            } = e,
            d = (0, j.FY)({ isGift: a }),
            p =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: a, giftRecipient: i })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              l = n ?? "md";
                          return null == e ? l : e in eP ? eP[e] : l;
                      })(t, { manaModalSizeFromProps: s });
        return (0, l.jsx)(v.Jg, {
            transitionState: n,
            size: p,
            returnRef: u,
            "aria-label": ey.intl.string(ey.t.q9EGps),
            onClose: async () => {
                await r();
            },
            children: c,
        });
    };
function eI(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: u,
            analyticsObject: p,
            analyticsSourceLocation: A,
            analyticsSubscriptionType: E = ep.rzx.PREMIUM,
            onComplete: j,
            transitionState: Y,
            initialPlanId: q,
            subscriptionTier: z,
            onClose: J,
            trialId: X,
            reviewWarningMessage: eE,
            planGroup: eP = em.LE,
            openInvoiceId: eI,
            onSubscriptionConfirmation: eT,
            renderPurchaseConfirmation: ef,
            postSuccessGuild: eN,
            followupSKUInfo: ev,
            renderHeader: eg,
            skipUnifiedHeaderForSteps: ex,
            disableUnsupportedExternalSubscriptionHandler: eR = !1,
            applicationId: eM,
            guildId: eb,
            referralTrialOfferId: eL,
            skuId: eO,
            onStepChange: ej,
            shakeWhilePurchasing: ew = !1,
            isLargeModal: eD = !1,
            isMediumModal: eU = !1,
            returnRef: ek,
            skipConfirm: eG = !1,
            continueSessionToInitialStep: eF,
            paymentModalVersion: eY = "v1",
        } = e,
        { paymentSources: eB, hasPaymentSources: eW } = (0, P.jm)(),
        {
            selectedSkuId: eH,
            setSelectedSkuId: eV,
            setSelectedPlanId: eK,
            purchaseState: eZ,
            setPurchaseState: eq,
            contextMetadata: ez,
            paymentSourceId: eJ,
            setPurchaseError: e$,
            priceOptions: eX,
            activeSubscription: eQ,
            purchaseType: e0,
            defaultPlanId: e2,
            customCheckoutFlow: e3,
            unifiedCheckoutFlow: e1,
        } = (0, g.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            purchaseState: e.purchaseState,
            setPurchaseState: e.setPurchaseState,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            setPurchaseError: e.setPurchaseError,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            purchaseType: e.purchaseType,
            defaultPlanId: e.defaultPlanId,
            customCheckoutFlow: e.customCheckoutFlow,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        { displayCurrency: e4 } = (0, I.Jn)(),
        { activitySessionId: e7 } = (0, _.V)(),
        { paymentAuthenticationState: e6 } = (0, S.o)(),
        e5 = (0, i.bG)([k.A], () => k.A.purchaseTokenAuthState),
        e8 = (0, T.sw)(),
        e9 = (0, f.A)(),
        te = (0, N.S3)(),
        tt = (function () {
            let { step: e, stepConfigs: t } = (0, Z.Ay)(),
                n = t.find((t) => t.key === e);
            return n?.options;
        })(),
        { isGift: tn, giftRecipient: tl, customGiftMessage: tr, emojiConfetti: ta, soundEffect: ti } = (0, V.Pv)(),
        ts = (0, Z.bB)(),
        to = (0, Z.l)(),
        tu = "sm";
    eD ? (tu = "xl") : (eU || ts === U.pn.ADD_PAYMENT_STEPS) && (tu = "md");
    let tc = tt?.modalSizeGetter,
        td = (0, O.O)(),
        tp = null != z && !tn && (0, w.U9)(td, z),
        [tm, tA] = r.useState({
            load_id: ez.loadId,
            discovery_session_id: ez.discoverySessionId,
            payment_type: ep.frM[e0],
            location: u ?? p,
            source: A,
            subscription_type: E,
            subscription_plan_id: e9?.id ?? q,
            is_gift: tn,
            eligible_for_trial: null != X,
            location_stack: n,
            sku_id: eO,
            application_id: eM,
            guild_id: eb,
            payment_modal_version: eY,
            activity_session_id: e7,
            eligible_for_discount: tp,
            sku_product_line: te?.productLine,
            checkout_design: C.r.UNIFIED,
            checkout_flow: e1,
            ...t,
        }),
        th = (0, $.W)(eB, eJ),
        { giftCardBalance: tE, giftCardCurrency: tC } = (0, h.h)(),
        ty = null != e8 ? e8.getDiscountIdIfExists() : void 0;
    r.useEffect(() => {
        tA((e) => {
            let n = null != e9 ? (0, H.y8)(e9.id, !1, tn, { paymentSourceId: eX.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: e9?.id,
                price: n?.amount,
                regular_price: e9?.price,
                currency: e4,
                sku_id: eH,
                sku_product_line: te?.productLine,
                ...t,
            };
        });
    }, [e9, eH, tn, eX, e4, t, te?.productLine]),
        (0, m.Ay)(() => {
            (0, x.b)({
                ...tm,
                continue_session_initial_step: eF,
                custom_checkout_flow: e3,
                has_saved_payment_source: eW,
                discount_id: null != td ? td.discountId : ty,
            });
        }),
        r.useEffect(() => {
            null == e9 && (null != e2 && null != eF ? eK(e2) : eK(q)),
                null != eO ? eV(eO) : null != q && eV(F.A.get(q)?.skuId);
        }, [eK, e9, eV, q, eO, e2, eF]);
    let t_ = r.useCallback(() => {
            let e = (0, W.lo)(tl) === W.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            B.default.track(ep.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...tm,
                is_custom_message_edited: tn && e && null != tr ? tr !== ey.intl.string(ey.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: tn && e,
                emoji_name: tn && e && ta?.id == null ? ta?.surrogates : void 0,
                sound_id: tn && e ? ti?.soundId : void 0,
                duration_ms: t - ez.startTime,
                payment_source_type: th?.type,
                gift_card_balance: tE,
                gift_card_currency: tC,
            });
            let { enabled: n } = M.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            tn && null != tl && null != u && n && (0, L.WO)(u) && (0, b.Yd)(tl.id);
        }, [tm, ta, tr, tl, tn, ti, ez.startTime, th, tE, tC, u]),
        tP = r.useMemo(() => () => J?.(eZ === K.h.COMPLETED, eH), [J, eZ, eH]),
        tS = (0, a.A)(() => Date.now(), [ts]),
        tI = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: r, emitPaymentFlowLoadedEvent: a } = t,
                    i = Date.now();
                if (e === U.pn.CONFIRM && (t_(), j?.(r), eG)) return void tP();
                to(e), ej?.(e), e$(null), e === U.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : ts;
                null === s || a
                    ? B.default.track(ep.HAw.PAYMENT_FLOW_LOADED, {
                          ...tm,
                          initial_step: s ?? e,
                          continue_session_initial_step: eF,
                          has_saved_payment_source: eW,
                      })
                    : B.default.track(ep.HAw.PAYMENT_FLOW_STEP, {
                          ...tm,
                          ...l,
                          from_step: s,
                          to_step: e === U.pn.ADD_PAYMENT_STEPS ? U.pn.PAYMENT_TYPE : e,
                          step_duration_ms: i - tS,
                          flow_duration_ms: i - ez.startTime,
                          gift_card_balance: tE,
                          gift_card_currency: tC,
                      });
            },
            [to, ej, e$, ts, eF, tm, tS, ez.startTime, t_, j, eG, tP, eW, tE, tC],
        );
    (0, D.b)(ts, e6, tI, eq),
        r.useEffect(() => {
            null != ts && ts !== U.pn.AWAITING_PURCHASE_TOKEN_AUTH && e5 === k.C.PENDING
                ? tI(U.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : ts === U.pn.AWAITING_PURCHASE_TOKEN_AUTH && e5 === k.C.SUCCESS && tI(U.pn.REVIEW);
        }, [ts, e5, tI]),
        (0, R.A)(tP),
        (0, G.s)(eQ, () => J(!1), tn, !eR),
        (0, D.QR)(e6);
    let tT = (function (e) {
        let { renderHeader: t, handleClose: n, skipUnifiedHeaderForSteps: a } = e,
            {
                selectedSkuId: i,
                purchaseState: s,
                paymentSourceId: o,
                purchaseType: u,
                premiumDiscountPercent: c,
                isPremiumDiscountAppliedToCheckoutInvoice: d,
            } = (0, g.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                purchaseState: e.purchaseState,
                paymentSourceId: e.paymentSourceId,
                purchaseType: e.purchaseType,
                premiumDiscountPercent: e.get("premiumDiscountPercent"),
                isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
            })),
            p = (0, ee.bG)([es.A], () => es.A.isDisplayingWowMomentConfirmation),
            { isPremium: m, isPremiumGroupPurchase: A, isEligibleForTrial: h, isEligibleForDiscount: E } = (0, er.i)(),
            C = (0, f.A)(),
            y = (0, N.S3)(),
            _ = (0, Z.bB)(),
            { checkoutPaymentSources: P, storeCountry: S } = (0, el.t)(),
            I = r.useMemo(() => {
                if (null == o) return null;
                let e = P.find((e) => e.id === o);
                return e?.relocationCountry ?? null;
            }, [P, o]),
            { isGift: T, selectedGiftStyle: x, giftRecipient: R } = (0, V.Pv)(),
            M = (0, en.vg)("PaymentModalHeader"),
            b = y?.productLine === ep.EZt.COLLECTIBLES,
            L = y?.productLine === ep.EZt.SOCIAL_LAYER_GAME_ITEM,
            O = T && (0, W.Ik)(R) && _ === U.pn.CONFIRM && null != x && !b && !L,
            j = null != t && null != _,
            w = [U.pn.SKU_SELECT, U.pn.SELECT_FREE_SKU],
            D = null != _ && !w.includes(_) && null != i,
            k = (0, ed.G)(C?.id ?? "") && !h;
        return r.useMemo(() => {
            if (null == _) return;
            if (
                (function (e) {
                    let { step: t, skipUnifiedHeaderForSteps: n } = e,
                        l = null != n && n.includes(t);
                    return ea.M.includes(t) && !l;
                })({ step: _, skipUnifiedHeaderForSteps: a })
            ) {
                let e = (0, ea.u)({
                    step: _,
                    skuId: i ?? (null != y ? y.id : null),
                    showBetaBadge: A,
                    showTrialBadge: h,
                    showPromoBadge: E || k,
                    premiumDiscountPercent: d ? c : null,
                    storeCountryFromCheckoutContext: S,
                    isStoreCountryEnabled: M,
                    relocationCountry: I,
                });
                return (0, l.jsx)(v.s3, { ...e });
            }
            let e = null;
            return (
                O
                    ? (e = (0, l.jsxs)("div", {
                          className: eh.kL,
                          children: [
                              (0, l.jsx)("div", {
                                  "aria-hidden": !0,
                                  style: { display: "contents" },
                                  children: (0, l.jsx)(eo.A, {
                                      defaultAnimationState: ei.oA.LOOP,
                                      giftStyle: x,
                                      className: eh.qq,
                                  }),
                              }),
                              (0, l.jsx)(et.s_, { onClick: n, className: eh.b, "data-migration-pending": !0 }),
                          ],
                      }))
                    : j
                      ? (e = t(C ?? null, n, _))
                      : u === eA.VV.ONE_TIME
                        ? (e = (0, l.jsx)(ec.fs, { step: _, onClose: n }))
                        : D &&
                          (Q()(i in em.WN, `invalid sku id: ${i}`),
                          (e = (0, l.jsx)(eu.A, {
                              currentStep: _ ?? void 0,
                              purchaseState: s,
                              premiumType: em.WN[i],
                              onClose: n,
                              showTrialBadge: h,
                              showDiscountBadge: E,
                              isGift: T,
                              giftRecipient: R,
                              isEligibleForTrial: h,
                              enablePremiumBrandRefresh: m,
                              isDisplayingWowMomentConfirmation: p,
                              isPremiumGroupPurchase: A,
                          }))),
                e
            );
        }, [a, M, S, I, x, n, s, t, C, y, i, _, h, E, c, d, k, O, D, j, u, T, R, m, p, A]);
    })({ renderHeader: eg, handleClose: tP, skipUnifiedHeaderForSteps: ex });
    return (0, l.jsx)(y.e0, {
        children: (0, l.jsx)(s.b, {
            className: e_.Xn,
            isShaking: ew && eZ === K.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(eS, {
                step: ts,
                transitionState: Y,
                isGift: tn,
                giftRecipient: tl,
                returnRef: ek,
                manaModalSize: tu,
                modalSizeGetter: tc,
                handleClose: tP,
                children: (0, l.jsx)(eC.Ay, {
                    header: tT,
                    initialPlanId: q,
                    subscriptionTier: z,
                    handleStepChange: tI,
                    handleClose: tP,
                    analyticsData: tm,
                    setAnalyticsData: tA,
                    trialId: X,
                    reviewWarningMessage: eE,
                    planGroup: eP,
                    openInvoiceId: eI,
                    analyticsLocation: u,
                    onSubscriptionConfirmation: eT,
                    renderPurchaseConfirmation: ef,
                    postSuccessGuild: eN,
                    followupSKUInfo: ev,
                    referralTrialOfferId: eL,
                    skipConfirm: eG,
                    continueSessionToInitialStep: eF,
                }),
            }),
        }),
    });
}
function eT(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: a,
            referralTrialOfferId: s,
            continueSessionToInitialStep: o,
        } = e,
        { hasPaymentSources: c } = (0, P.jm)(),
        {
            selectedSkuId: d,
            setSelectedPlanId: m,
            activeSubscription: h,
            defaultPlanId: C,
            startedPaymentFlowWithPaymentSources: y,
        } = (0, g.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        _ = (0, A.Hp)(),
        S = (0, q.A)(),
        { hasFetchedRelatedSubscriptionPlans: T, subscriptionPriceOptionsLoading: f } = (0, I.Jn)(),
        { isGift: N } = (0, V.Pv)(),
        v = (0, J.A)({ isGift: N, skuId: d, referralTrialOfferId: s }),
        x = !S || !T || f,
        R = (0, i.bG)([Y.A], () => Y.A.applicationIdsFetched.has(em.tv));
    return ((0, p.A)(
        "Payment Modal",
        x,
        5,
        { hasFetchedSubscriptions: S, hasFetchedSubscriptionPlans: T, subscriptionPriceOptionsLoading: f },
        { tags: { app_context: "billing" } },
    ),
    r.useEffect(() => {
        if ((R || (0, u.LM)(em.tv), x || _)) return;
        let e = (0, z.vT)({ isTrial: v, isGift: N, selectedSkuId: d, startedPaymentFlowWithPaymentSources: y });
        null != o
            ? a(U.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== em.gD.PREMIUM_GROUP_MONTH || c
                  ? a(U.pn.REVIEW)
                  : a(U.pn.ADD_PAYMENT_STEPS)
              : e
                ? (m((0, z.xT)(d, h, C)), a(U.pn.REVIEW))
                : null != t
                  ? a(U.pn.PLAN_SELECT)
                  : a(U.pn.SKU_SELECT);
    }, [o, h, _, R, n, x, a, t, d, m, v, C, N, y, c]),
    x)
        ? (0, l.jsx)(eE.A, {})
        : _
          ? (0, l.jsx)(E.oO, {})
          : null;
}
