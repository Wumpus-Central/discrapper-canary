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
    A = n(11939),
    E = n(545075),
    C = n(725836),
    y = n(742810),
    P = n(31823),
    S = n(426398),
    _ = n(211083),
    I = n(655857),
    T = n(666646),
    f = n(558620),
    N = n(427675),
    v = n(480642),
    g = n(571878),
    x = n(357669),
    R = n(319437),
    M = n(70730),
    b = n(45787),
    L = n(51501),
    j = n(422936),
    O = n(862990),
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
    $ = n(169801),
    J = n(216641),
    X = n(284009),
    Q = n.n(X),
    ee = n(17928),
    et = n(935462),
    en = n(546605),
    el = n(364995),
    er = n(463376),
    ei = n(584160),
    ea = n(242874),
    es = n(573359),
    eo = n(165191),
    eu = n(237412),
    ec = n(897904),
    ed = n(906234),
    ep = n(652215),
    em = n(788868),
    eh = n(818348),
    eA = n(575650),
    eE = n(534479),
    eC = n(482132);
n(322076);
var ey = n(375708),
    eP = n(106451);
let eS = { [U.pn.GIFT_CUSTOMIZATION]: "xl", [U.pn.REVIEW]: "md", [U.pn.ADD_PAYMENT_STEPS]: "md" },
    e_ = (e) => {
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
                          return null == e ? l : e in eS ? eS[e] : l;
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
            analyticsSourceLocation: h,
            analyticsSubscriptionType: E = ep.rzx.PREMIUM,
            onComplete: O,
            transitionState: Y,
            initialPlanId: q,
            subscriptionTier: z,
            onClose: $,
            trialId: X,
            trialFooterMessageOverride: eE,
            reviewWarningMessage: eS,
            planGroup: eI = em.LE,
            openInvoiceId: eT,
            onSubscriptionConfirmation: ef,
            renderPurchaseConfirmation: eN,
            postSuccessGuild: ev,
            followupSKUInfo: eg,
            renderHeader: ex,
            skipUnifiedHeaderForSteps: eR,
            disableUnsupportedExternalSubscriptionHandler: eM = !1,
            applicationId: eb,
            guildId: eL,
            referralTrialOfferId: ej,
            skuId: eO,
            onStepChange: ew,
            shakeWhilePurchasing: eD = !1,
            isLargeModal: eU = !1,
            isMediumModal: ek = !1,
            returnRef: eG,
            skipConfirm: eF = !1,
            continueSessionToInitialStep: eY,
            paymentModalVersion: eB = "v1",
        } = e,
        { paymentSources: eW, hasPaymentSources: eH } = (0, S.jm)(),
        {
            selectedSkuId: eV,
            setSelectedSkuId: eK,
            setSelectedPlanId: eZ,
            purchaseState: eq,
            setPurchaseState: ez,
            contextMetadata: e$,
            paymentSourceId: eJ,
            setPurchaseError: eX,
            priceOptions: eQ,
            activeSubscription: e0,
            purchaseType: e2,
            defaultPlanId: e3,
            customCheckoutFlow: e1,
            unifiedCheckoutFlow: e4,
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
        { displayCurrency: e7 } = (0, I.Jn)(),
        { activitySessionId: e6 } = (0, P.V)(),
        { paymentAuthenticationState: e5 } = (0, _.o)(),
        e8 = (0, a.bG)([k.A], () => k.A.purchaseTokenAuthState),
        e9 = (0, T.sw)(),
        te = (0, f.A)(),
        tt = (0, N.S3)(),
        tn = (function () {
            let { step: e, stepConfigs: t } = (0, Z.Ay)(),
                n = t.find((t) => t.key === e);
            return n?.options;
        })(),
        { isGift: tl, giftRecipient: tr, customGiftMessage: ti, emojiConfetti: ta, soundEffect: ts } = (0, V.Pv)(),
        to = (0, Z.bB)(),
        tu = (0, Z.l)(),
        tc = "sm";
    eU ? (tc = "xl") : (ek || to === U.pn.ADD_PAYMENT_STEPS) && (tc = "md");
    let td = tn?.modalSizeGetter,
        tp = (0, y.D7)({ location: "PaymentModal" }),
        tm = (0, j.O)(),
        th = null != z && !tl && (0, w.U9)(tm, z),
        [tA, tE] = r.useState({
            load_id: e$.loadId,
            discovery_session_id: e$.discoverySessionId,
            payment_type: ep.frM[e2],
            location: u ?? p,
            source: h,
            subscription_type: E,
            subscription_plan_id: te?.id ?? q,
            is_gift: tl,
            eligible_for_trial: null != X,
            location_stack: n,
            sku_id: eO,
            application_id: eb,
            guild_id: eL,
            payment_modal_version: eB,
            activity_session_id: e6,
            eligible_for_discount: th,
            sku_product_line: tt?.productLine,
            checkout_design: tp ? y.rS.UNIFIED : y.rS.LEGACY,
            checkout_flow: e4,
            ...t,
        }),
        tC = (0, J.W)(eW, eJ),
        { giftCardBalance: ty, giftCardCurrency: tP } = (0, A.h)(),
        tS = null != e9 ? e9.getDiscountIdIfExists() : void 0;
    r.useEffect(() => {
        tE((e) => {
            let n = null != te ? (0, H.y8)(te.id, !1, tl, { paymentSourceId: eQ.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: te?.id,
                price: n?.amount,
                regular_price: te?.price,
                currency: e7,
                sku_id: eV,
                sku_product_line: tt?.productLine,
                ...t,
            };
        });
    }, [te, eV, tl, eQ, e7, t, tt?.productLine]),
        (0, m.Ay)(() => {
            (0, x.b)({
                ...tA,
                continue_session_initial_step: eY,
                custom_checkout_flow: e1,
                has_saved_payment_source: eH,
                discount_id: null != tm ? tm.discountId : tS,
            });
        }),
        r.useEffect(() => {
            null == te && (null != e3 && null != eY ? eZ(e3) : eZ(q)),
                null != eO ? eK(eO) : null != q && eK(F.A.get(q)?.skuId);
        }, [eZ, te, eK, q, eO, e3, eY]);
    let t_ = r.useCallback(() => {
            let e = (0, W.lo)(tr) === W.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            B.default.track(ep.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...tA,
                is_custom_message_edited: tl && e && null != ti ? ti !== ey.intl.string(ey.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: tl && e,
                emoji_name: tl && e && ta?.id == null ? ta?.surrogates : void 0,
                sound_id: tl && e ? ts?.soundId : void 0,
                duration_ms: t - e$.startTime,
                payment_source_type: tC?.type,
                gift_card_balance: ty,
                gift_card_currency: tP,
            });
            let { enabled: n } = M.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            tl && null != tr && null != u && n && (0, L.WO)(u) && (0, b.Yd)(tr.id);
        }, [tA, ta, ti, tr, tl, ts, e$.startTime, tC, ty, tP, u]),
        tI = r.useMemo(() => () => $?.(eq === K.h.COMPLETED, eV), [$, eq, eV]),
        tT = (0, i.A)(() => Date.now(), [to]),
        tf = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: r, emitPaymentFlowLoadedEvent: i } = t,
                    a = Date.now();
                if (e === U.pn.CONFIRM && (t_(), O?.(r), eF)) return void tI();
                tu(e), ew?.(e), eX(null), e === U.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : to;
                null === s || i
                    ? B.default.track(ep.HAw.PAYMENT_FLOW_LOADED, {
                          ...tA,
                          initial_step: s ?? e,
                          continue_session_initial_step: eY,
                          has_saved_payment_source: eH,
                      })
                    : B.default.track(ep.HAw.PAYMENT_FLOW_STEP, {
                          ...tA,
                          ...l,
                          from_step: s,
                          to_step: e === U.pn.ADD_PAYMENT_STEPS ? U.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - tT,
                          flow_duration_ms: a - e$.startTime,
                          gift_card_balance: ty,
                          gift_card_currency: tP,
                      });
            },
            [tu, ew, eX, to, eY, tA, tT, e$.startTime, t_, O, eF, tI, eH, ty, tP],
        );
    (0, D.b)(to, e5, tf, ez),
        r.useEffect(() => {
            null != to && to !== U.pn.AWAITING_PURCHASE_TOKEN_AUTH && e8 === k.C.PENDING
                ? tf(U.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : to === U.pn.AWAITING_PURCHASE_TOKEN_AUTH && e8 === k.C.SUCCESS && tf(U.pn.REVIEW);
        }, [to, e8, tf]),
        (0, R.A)(tI),
        (0, G.s)(e0, () => $(!1), tl, !eM),
        (0, D.QR)(e5);
    let tN = (function (e) {
        let { renderHeader: t, handleClose: n, skipUnifiedHeaderForSteps: i } = e,
            {
                selectedSkuId: a,
                purchaseState: s,
                paymentSourceId: o,
                purchaseType: u,
            } = (0, g.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                purchaseState: e.purchaseState,
                paymentSourceId: e.paymentSourceId,
                purchaseType: e.purchaseType,
            })),
            c = (0, ee.bG)([es.A], () => es.A.isDisplayingWowMomentConfirmation),
            { isPremium: d, isPremiumGroupPurchase: p, isEligibleForTrial: m, isEligibleForDiscount: h } = (0, er.i)(),
            A = (0, f.A)(),
            E = (0, N.S3)(),
            C = (0, Z.bB)(),
            { checkoutPaymentSources: P, storeCountry: S } = (0, el.t)(),
            _ = r.useMemo(() => {
                if (null == o) return null;
                let e = P.find((e) => e.id === o);
                return e?.relocationCountry ?? null;
            }, [P, o]),
            { isGift: I, selectedGiftStyle: T, giftRecipient: x } = (0, V.Pv)(),
            R = (0, en.vg)("PaymentModalHeader"),
            M = E?.productLine === ep.EZt.COLLECTIBLES,
            b = E?.productLine === ep.EZt.SOCIAL_LAYER_GAME_ITEM,
            L = I && (0, W.Ik)(x) && C === U.pn.CONFIRM && null != T && !M && !b,
            j = null != t && null != C,
            O = [U.pn.SKU_SELECT, U.pn.SELECT_FREE_SKU],
            w = null != C && !O.includes(C) && null != a,
            D = (0, y.D7)({ location: "PaymentModalHeader" }),
            k = (0, ed.G)(A?.id ?? "") && !m;
        return r.useMemo(() => {
            if (null == C) return;
            if (
                (function (e) {
                    let { step: t, isUnifiedCheckoutUIEnabled: n, skipUnifiedHeaderForSteps: l } = e,
                        r = null != l && l.includes(t);
                    return n && ei.M.includes(t) && !r;
                })({ step: C, isUnifiedCheckoutUIEnabled: D, skipUnifiedHeaderForSteps: i })
            ) {
                let e = (0, ei.u)({
                    step: C,
                    skuId: a ?? (null != E ? E.id : null),
                    showBetaBadge: p,
                    showTrialBadge: m,
                    showPromoBadge: h || k,
                    storeCountryFromCheckoutContext: S,
                    isStoreCountryEnabled: R,
                    relocationCountry: _,
                });
                return (0, l.jsx)(v.s3, { ...e });
            }
            let e = null;
            return (
                L
                    ? (e = (0, l.jsxs)("div", {
                          className: eA.kL,
                          children: [
                              (0, l.jsx)("div", {
                                  "aria-hidden": !0,
                                  style: { display: "contents" },
                                  children: (0, l.jsx)(eo.A, {
                                      defaultAnimationState: ea.oA.LOOP,
                                      giftStyle: T,
                                      className: eA.qq,
                                  }),
                              }),
                              (0, l.jsx)(et.s_, { onClick: n, className: eA.b, "data-migration-pending": !0 }),
                          ],
                      }))
                    : j
                      ? (e = t(A ?? null, n, C))
                      : u === eh.VV.ONE_TIME
                        ? (e = (0, l.jsx)(ec.fs, { step: C, onClose: n }))
                        : w &&
                          (Q()(a in em.WN, `invalid sku id: ${a}`),
                          (e = (0, l.jsx)(eu.A, {
                              currentStep: C ?? void 0,
                              purchaseState: s,
                              premiumType: em.WN[a],
                              onClose: n,
                              showTrialBadge: m,
                              showDiscountBadge: h,
                              isGift: I,
                              giftRecipient: x,
                              isEligibleForTrial: m,
                              enablePremiumBrandRefresh: d,
                              isDisplayingWowMomentConfirmation: c,
                              isPremiumGroupPurchase: p,
                          }))),
                e
            );
        }, [D, i, R, S, _, T, n, s, t, A, E, a, C, m, h, k, L, w, j, u, I, x, d, c, p]);
    })({ renderHeader: ex, handleClose: tI, skipUnifiedHeaderForSteps: eR });
    return (0, l.jsx)(C.e0, {
        children: (0, l.jsx)(s.b, {
            className: eP.Xn,
            isShaking: eD && eq === K.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(e_, {
                step: to,
                transitionState: Y,
                isGift: tl,
                giftRecipient: tr,
                returnRef: eG,
                manaModalSize: tc,
                modalSizeGetter: td,
                handleClose: tI,
                children: (0, l.jsx)(eC.Ay, {
                    header: tN,
                    initialPlanId: q,
                    subscriptionTier: z,
                    handleStepChange: tf,
                    handleClose: tI,
                    analyticsData: tA,
                    setAnalyticsData: tE,
                    trialId: X,
                    trialFooterMessageOverride: eE,
                    reviewWarningMessage: eS,
                    planGroup: eI,
                    openInvoiceId: eT,
                    analyticsLocation: u,
                    onSubscriptionConfirmation: ef,
                    renderPurchaseConfirmation: eN,
                    postSuccessGuild: ev,
                    followupSKUInfo: eg,
                    referralTrialOfferId: ej,
                    skipConfirm: eF,
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
        {
            selectedSkuId: d,
            setSelectedPlanId: m,
            activeSubscription: A,
            defaultPlanId: C,
            startedPaymentFlowWithPaymentSources: y,
        } = (0, g.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        P = (0, h.Hp)(),
        _ = (0, q.A)(),
        { hasFetchedRelatedSubscriptionPlans: T, subscriptionPriceOptionsLoading: f } = (0, I.Jn)(),
        { isGift: N } = (0, V.Pv)(),
        v = (0, $.A)({ isGift: N, skuId: d, referralTrialOfferId: s }),
        x = !_ || !T || f,
        R = (0, a.bG)([Y.A], () => Y.A.applicationIdsFetched.has(em.tv));
    return ((0, p.A)(
        "Payment Modal",
        x,
        5,
        { hasFetchedSubscriptions: _, hasFetchedSubscriptionPlans: T, subscriptionPriceOptionsLoading: f },
        { tags: { app_context: "billing" } },
    ),
    r.useEffect(() => {
        if ((R || (0, u.LM)(em.tv), x || P)) return;
        let e = (0, z.vT)({ isTrial: v, isGift: N, selectedSkuId: d, startedPaymentFlowWithPaymentSources: y });
        null != o
            ? i(U.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== em.gD.PREMIUM_GROUP_MONTH || c
                  ? i(U.pn.REVIEW)
                  : i(U.pn.ADD_PAYMENT_STEPS)
              : e
                ? (m((0, z.xT)(d, A, C)), i(U.pn.REVIEW))
                : null != t
                  ? i(U.pn.PLAN_SELECT)
                  : i(U.pn.SKU_SELECT);
    }, [o, A, P, R, n, x, i, t, d, m, v, C, N, y, c]),
    x)
        ? (0, l.jsx)(eE.A, {})
        : P
          ? (0, l.jsx)(E.oO, {})
          : null;
}
