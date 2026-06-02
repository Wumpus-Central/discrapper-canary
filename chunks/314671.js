n.d(t, { I: () => eT, PaymentModal: () => eI });
var l = n(627968),
    r = n(64700),
    i = n(976634),
    a = n(702841),
    s = n(568602),
    o = n(228366),
    u = n(339048),
    c = n(158032),
    d = n(830382),
    p = n(428644),
    m = n(964486),
    h = n(86379),
    A = n(176095),
    C = n(545075),
    E = n(725836),
    y = n(742810),
    P = n(31823),
    S = n(426398),
    _ = n(211083),
    f = n(655857),
    I = n(666646),
    T = n(558620),
    N = n(427675),
    v = n(480642),
    g = n(722847),
    x = n(357669),
    R = n(319437),
    M = n(70730),
    b = n(45787),
    L = n(51501),
    j = n(422936),
    O = n(39423),
    w = n(410516),
    D = n(251913),
    U = n(166532),
    k = n(71319),
    G = n(344159),
    Y = n(97352),
    F = n(469778),
    B = n(174459),
    W = n(45938),
    H = n(428262),
    V = n(259160),
    K = n(768050),
    Z = n(566980),
    q = n(615310),
    z = n(121005),
    $ = n(800471),
    J = n(169801),
    X = n(216641),
    Q = n(284009),
    ee = n.n(Q),
    et = n(17928),
    en = n(935462),
    el = n(546605),
    er = n(364995),
    ei = n(463376),
    ea = n(584160),
    es = n(242874),
    eo = n(573359),
    eu = n(165191),
    ec = n(237412),
    ed = n(897904),
    ep = n(906234),
    em = n(652215),
    eh = n(788868),
    eA = n(818348),
    eC = n(575650),
    eE = n(534479),
    ey = n(482132);
n(322076);
var eP = n(375708),
    eS = n(106451);
let e_ = { [U.pn.GIFT_CUSTOMIZATION]: "xl", [U.pn.REVIEW]: "md", [U.pn.ADD_PAYMENT_STEPS]: "md" },
    ef = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: r,
                isGift: i,
                giftRecipient: a,
                manaModalSize: s,
                modalSizeGetter: o,
                returnRef: u,
                children: c,
            } = e,
            d = (0, O.FY)({ isGift: i }),
            p =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: i, giftRecipient: a })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              l = n ?? "md";
                          return null == e ? l : e in e_ ? e_[e] : l;
                      })(t, { manaModalSizeFromProps: s });
        return (0, l.jsx)(v.Jg, {
            transitionState: n,
            size: p,
            returnRef: u,
            "aria-label": eP.intl.string(eP.t.q9EGps),
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
            analyticsSourceLocation: h,
            analyticsSubscriptionType: C = em.rzx.PREMIUM,
            onComplete: O,
            transitionState: F,
            initialPlanId: z,
            subscriptionTier: $,
            onClose: J,
            trialId: Q,
            trialFooterMessageOverride: eE,
            reviewWarningMessage: e_,
            planGroup: eI = eh.LE,
            openInvoiceId: eT,
            onSubscriptionConfirmation: eN,
            renderPurchaseConfirmation: ev,
            postSuccessGuild: eg,
            followupSKUInfo: ex,
            renderHeader: eR,
            applicationId: eM,
            guildId: eb,
            referralTrialOfferId: eL,
            skuId: ej,
            onStepChange: eO,
            shakeWhilePurchasing: ew = !1,
            isLargeModal: eD = !1,
            isMediumModal: eU = !1,
            returnRef: ek,
            skipConfirm: eG = !1,
            continueSessionToInitialStep: eY,
            paymentModalVersion: eF = "v1",
        } = e,
        { paymentSources: eB, hasPaymentSources: eW } = (0, S.jm)(),
        {
            selectedSkuId: eH,
            setSelectedSkuId: eV,
            setSelectedPlanId: eK,
            purchaseState: eZ,
            setPurchaseState: eq,
            contextMetadata: ez,
            paymentSourceId: e$,
            setPurchaseError: eJ,
            priceOptions: eX,
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
        })),
        { displayCurrency: eQ } = (0, f.Jn)(),
        { activitySessionId: e0 } = (0, P.V)(),
        { paymentAuthenticationState: e2 } = (0, _.o)(),
        {
            activeSubscription: e3,
            purchaseType: e1,
            defaultPlanId: e4,
            customCheckoutFlow: e7,
            unifiedCheckoutFlow: e6,
        } = (0, K.P5)(),
        e5 = (0, a.bG)([k.A], () => k.A.purchaseTokenAuthState),
        e8 = (0, I.sw)(),
        e9 = (0, T.A)(),
        te = (0, N.S3)(),
        tt = (function () {
            let { step: e, stepConfigs: t } = (0, q.Ay)(),
                n = t.find((t) => t.key === e);
            return n?.options;
        })(),
        { isGift: tn, giftRecipient: tl, customGiftMessage: tr, emojiConfetti: ti, soundEffect: ta } = (0, V.Pv)(),
        ts = (0, q.bB)(),
        to = (0, q.l)(),
        tu = "sm";
    eD ? (tu = "xl") : (eU || ts === U.pn.ADD_PAYMENT_STEPS) && (tu = "md");
    let tc = tt?.modalSizeGetter,
        td = (0, y.D7)({ location: "PaymentModal" }),
        tp = (0, j.O)(),
        tm = null != $ && !tn && (0, w.U9)(tp, $),
        [th, tA] = r.useState({
            load_id: ez.loadId,
            discovery_session_id: ez.discoverySessionId,
            payment_type: em.frM[e1],
            location: u ?? p,
            source: h,
            subscription_type: C,
            subscription_plan_id: e9?.id ?? z,
            is_gift: tn,
            eligible_for_trial: null != Q,
            location_stack: n,
            sku_id: ej,
            application_id: eM,
            guild_id: eb,
            payment_modal_version: eF,
            activity_session_id: e0,
            eligible_for_discount: tm,
            sku_product_line: te?.productLine,
            checkout_design: td ? y.rS.UNIFIED : y.rS.LEGACY,
            checkout_flow: e6,
            ...t,
        }),
        tC = (0, X.W)(eB, e$),
        tE = (0, a.bG)([A.A], () => A.A.getBalance(e$ ?? ""), [e$]),
        ty = null != tE ? tE.amount : null,
        tP = null != tE ? tE.currency : null,
        tS = null != e8 ? e8.getDiscountIdIfExists() : void 0;
    r.useEffect(() => {
        tA((e) => {
            let n = null != e9 ? (0, H.y8)(e9.id, !1, tn, { paymentSourceId: eX.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: e9?.id,
                price: n?.amount,
                regular_price: e9?.price,
                currency: eQ,
                sku_id: eH,
                sku_product_line: te?.productLine,
                ...t,
            };
        });
    }, [e9, eH, tn, eX, eQ, t, te?.productLine]),
        (0, m.Ay)(() => {
            (0, x.b)({
                ...th,
                continue_session_initial_step: eY,
                custom_checkout_flow: e7,
                has_saved_payment_source: eW,
                discount_id: null != tp ? tp.discountId : tS,
            });
        }),
        r.useEffect(() => {
            null == e9 && (null != e4 && null != eY ? eK(e4) : eK(z)),
                null != ej ? eV(ej) : null != z && eV(Y.A.get(z)?.skuId);
        }, [eK, e9, eV, z, ej, e4, eY]);
    let t_ = r.useCallback(() => {
            let e = (0, W.lo)(tl) === W.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            B.default.track(em.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...th,
                is_custom_message_edited: tn && e && null != tr ? tr !== eP.intl.string(eP.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: tn && e,
                emoji_name: tn && e && ti?.id == null ? ti?.surrogates : void 0,
                sound_id: tn && e ? ta?.soundId : void 0,
                duration_ms: t - ez.startTime,
                payment_source_type: tC?.type,
                gift_card_balance: ty,
                gift_card_currency: tP,
            });
            let { enabled: n } = M.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            tn && null != tl && null != u && n && (0, L.WO)(u) && (0, b.Yd)(tl.id);
        }, [th, ti, tr, tl, tn, ta, ez.startTime, tC, ty, tP, u]),
        tf = r.useMemo(() => () => J?.(eZ === Z.h.COMPLETED, eH), [J, eZ, eH]),
        tI = (0, i.A)(() => Date.now(), [ts]),
        tT = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: r, emitPaymentFlowLoadedEvent: i } = t,
                    a = Date.now();
                if (e === U.pn.CONFIRM && (t_(), O?.(r), eG)) return void tf();
                to(e), eO?.(e), eJ(null), e === U.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : ts;
                null === s || i
                    ? B.default.track(em.HAw.PAYMENT_FLOW_LOADED, {
                          ...th,
                          initial_step: s ?? e,
                          continue_session_initial_step: eY,
                          has_saved_payment_source: eW,
                      })
                    : B.default.track(em.HAw.PAYMENT_FLOW_STEP, {
                          ...th,
                          ...l,
                          from_step: s,
                          to_step: e === U.pn.ADD_PAYMENT_STEPS ? U.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - tI,
                          flow_duration_ms: a - ez.startTime,
                          gift_card_balance: ty,
                          gift_card_currency: tP,
                      });
            },
            [to, eO, eJ, ts, eY, th, tI, ez.startTime, t_, O, eG, tf, eW, ty, tP],
        );
    (0, D.b)(ts, e2, tT, eq),
        r.useEffect(() => {
            null != ts && ts !== U.pn.AWAITING_PURCHASE_TOKEN_AUTH && e5 === k.C.PENDING
                ? tT(U.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : ts === U.pn.AWAITING_PURCHASE_TOKEN_AUTH && e5 === k.C.SUCCESS && tT(U.pn.REVIEW);
        }, [ts, e5, tT]),
        (0, R.A)(tf),
        (0, G.s)(e3, () => J(!1), tn),
        (0, D.QR)(e2);
    let tN = (function (e) {
        let { renderHeader: t, handleClose: n } = e,
            {
                selectedSkuId: i,
                purchaseState: a,
                paymentSourceId: s,
            } = (0, g.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                purchaseState: e.purchaseState,
                paymentSourceId: e.paymentSourceId,
            })),
            { purchaseType: o } = (0, K.P5)(),
            u = (0, et.bG)([eo.A], () => eo.A.isDisplayingWowMomentConfirmation),
            { isPremium: c, isPremiumGroupPurchase: d, isEligibleForTrial: p, isEligibleForDiscount: m } = (0, ei.i)(),
            h = (0, T.A)(),
            A = (0, N.S3)(),
            C = (0, q.bB)(),
            { checkoutPaymentSources: E, storeCountry: P } = (0, er.t)(),
            S = r.useMemo(() => {
                if (null == s) return null;
                let e = E.find((e) => e.id === s);
                return e?.relocationCountry ?? null;
            }, [E, s]),
            { isGift: _, selectedGiftStyle: f, giftRecipient: I } = (0, V.Pv)(),
            x = (0, el.vg)("PaymentModalHeader"),
            R = A?.productLine === em.EZt.COLLECTIBLES,
            M = A?.productLine === em.EZt.SOCIAL_LAYER_GAME_ITEM,
            b = _ && (0, W.Ik)(I) && C === U.pn.CONFIRM && null != f && !R && !M,
            L = null != t && null != C,
            j = [U.pn.SKU_SELECT, U.pn.SELECT_FREE_SKU],
            O = null != C && !j.includes(C) && null != i,
            w = (0, y.D7)({ location: "PaymentModalHeader" }),
            D = (0, ep.G)(h?.id ?? "") && !p;
        return r.useMemo(() => {
            if (null == C) return;
            if (w && ea.M.includes(C)) {
                let e = (0, ea.u)({
                    step: C,
                    skuId: i ?? (null != A ? A.id : null),
                    showTrialBadge: p,
                    showPromoBadge: m || D,
                    showBetaBadge: d,
                    storeCountryFromCheckoutContext: P,
                    isStoreCountryEnabled: x,
                    relocationCountry: S,
                });
                return (0, l.jsx)(v.s3, { ...e });
            }
            let e = null;
            return (
                b
                    ? (e = (0, l.jsxs)("div", {
                          className: eC.kL,
                          children: [
                              (0, l.jsx)("div", {
                                  "aria-hidden": !0,
                                  style: { display: "contents" },
                                  children: (0, l.jsx)(eu.A, {
                                      defaultAnimationState: es.oA.LOOP,
                                      giftStyle: f,
                                      className: eC.qq,
                                  }),
                              }),
                              (0, l.jsx)(en.s_, { onClick: n, className: eC.b, "data-migration-pending": !0 }),
                          ],
                      }))
                    : L
                      ? (e = t(h ?? null, n, C))
                      : o === eA.VV.ONE_TIME
                        ? (e = (0, l.jsx)(ed.fs, { step: C, onClose: n }))
                        : O &&
                          (ee()(i in eh.WN, `invalid sku id: ${i}`),
                          (e = (0, l.jsx)(ec.A, {
                              currentStep: C ?? void 0,
                              purchaseState: a,
                              premiumType: eh.WN[i],
                              onClose: n,
                              showTrialBadge: p,
                              showDiscountBadge: m,
                              isGift: _,
                              giftRecipient: I,
                              isEligibleForTrial: p,
                              enablePremiumBrandRefresh: c,
                              isDisplayingWowMomentConfirmation: u,
                              isPremiumGroupPurchase: d,
                          }))),
                e
            );
        }, [w, x, P, S, f, n, a, t, h, A, i, C, p, m, D, b, O, L, o, _, I, c, u, d]);
    })({ renderHeader: eR, handleClose: tf });
    return (0, l.jsx)(E.e0, {
        children: (0, l.jsx)(s.b, {
            className: eS.Xn,
            isShaking: ew && eZ === Z.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(ef, {
                step: ts,
                transitionState: F,
                isGift: tn,
                giftRecipient: tl,
                returnRef: ek,
                manaModalSize: tu,
                modalSizeGetter: tc,
                handleClose: tf,
                children: (0, l.jsx)(ey.Ay, {
                    header: tN,
                    initialPlanId: z,
                    subscriptionTier: $,
                    handleStepChange: tT,
                    handleClose: tf,
                    analyticsData: th,
                    setAnalyticsData: tA,
                    trialId: Q,
                    trialFooterMessageOverride: eE,
                    reviewWarningMessage: e_,
                    planGroup: eI,
                    openInvoiceId: eT,
                    analyticsLocation: u,
                    onSubscriptionConfirmation: eN,
                    renderPurchaseConfirmation: ev,
                    postSuccessGuild: eg,
                    followupSKUInfo: ex,
                    referralTrialOfferId: eL,
                    skipConfirm: eG,
                    continueSessionToInitialStep: eY,
                }),
            }),
        }),
    });
}
function eT(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: i,
            referralTrialOfferId: s,
            continueSessionToInitialStep: o,
        } = e,
        { hasPaymentSources: c } = (0, S.jm)(),
        { selectedSkuId: d, setSelectedPlanId: m } = (0, g.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        { activeSubscription: A, defaultPlanId: E, startedPaymentFlowWithPaymentSourcesRef: y } = (0, K.P5)(),
        P = (0, h.Hp)(),
        _ = (0, z.A)(),
        { hasFetchedRelatedSubscriptionPlans: I, subscriptionPriceOptionsLoading: T } = (0, f.Jn)(),
        { isGift: N } = (0, V.Pv)(),
        v = y.current,
        x = (0, J.A)({ isGift: N, skuId: d, referralTrialOfferId: s }),
        [R, M] = r.useState(!0),
        b = (0, a.bG)([F.A], () => F.A.applicationIdsFetched.has(eh.tv));
    return (r.useEffect(() => {
        M(!_ || !I || T);
    }, [T, I, _]),
    (0, p.A)(
        "Payment Modal",
        R,
        5,
        { hasFetchedSubscriptions: _, hasFetchedSubscriptionPlans: I, subscriptionPriceOptionsLoading: T },
        { tags: { app_context: "billing" } },
    ),
    r.useEffect(() => {
        if ((b || (0, u.LM)(eh.tv), R || P)) return;
        let e = (0, $.vT)({ isTrial: x, isGift: N, selectedSkuId: d, startedPaymentFlowWithPaymentSources: v });
        null != o
            ? i(U.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== eh.gD.PREMIUM_GROUP_MONTH || c
                  ? i(U.pn.REVIEW)
                  : i(U.pn.ADD_PAYMENT_STEPS)
              : e
                ? (m((0, $.xT)(d, A, E)), i(U.pn.REVIEW))
                : null != t
                  ? i(U.pn.PLAN_SELECT)
                  : i(U.pn.SKU_SELECT);
    }, [o, A, P, b, n, R, i, t, d, m, x, E, N, v, c]),
    R)
        ? (0, l.jsx)(eE.A, {})
        : P
          ? (0, l.jsx)(C.oO, {})
          : null;
}
