n.d(t, { I: () => eI, PaymentModal: () => ef });
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
    Y = n(97352),
    F = n(469778),
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
    eC = n(534479),
    eE = n(482132);
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
function ef(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: u,
            analyticsObject: p,
            analyticsSourceLocation: h,
            analyticsSubscriptionType: C = ep.rzx.PREMIUM,
            onComplete: O,
            transitionState: F,
            initialPlanId: q,
            subscriptionTier: z,
            onClose: $,
            trialId: X,
            trialFooterMessageOverride: eC,
            reviewWarningMessage: eS,
            planGroup: ef = em.LE,
            openInvoiceId: eI,
            onSubscriptionConfirmation: eT,
            renderPurchaseConfirmation: eN,
            postSuccessGuild: ev,
            followupSKUInfo: eg,
            renderHeader: ex,
            applicationId: eR,
            guildId: eM,
            referralTrialOfferId: eb,
            skuId: eL,
            onStepChange: ej,
            shakeWhilePurchasing: eO = !1,
            isLargeModal: ew = !1,
            isMediumModal: eD = !1,
            returnRef: eU,
            skipConfirm: ek = !1,
            continueSessionToInitialStep: eG,
            paymentModalVersion: eY = "v1",
        } = e,
        { paymentSources: eF, hasPaymentSources: eB } = (0, S.jm)(),
        {
            selectedSkuId: eW,
            setSelectedSkuId: eH,
            setSelectedPlanId: eV,
            purchaseState: eK,
            setPurchaseState: eZ,
            contextMetadata: eq,
            paymentSourceId: ez,
            setPurchaseError: e$,
            priceOptions: eJ,
            activeSubscription: eX,
            purchaseType: eQ,
            defaultPlanId: e0,
            customCheckoutFlow: e2,
            unifiedCheckoutFlow: e3,
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
        { displayCurrency: e1 } = (0, f.Jn)(),
        { activitySessionId: e4 } = (0, P.V)(),
        { paymentAuthenticationState: e7 } = (0, _.o)(),
        e6 = (0, a.bG)([k.A], () => k.A.purchaseTokenAuthState),
        e5 = (0, I.sw)(),
        e8 = (0, T.A)(),
        e9 = (0, N.S3)(),
        te = (function () {
            let { step: e, stepConfigs: t } = (0, Z.Ay)(),
                n = t.find((t) => t.key === e);
            return n?.options;
        })(),
        { isGift: tt, giftRecipient: tn, customGiftMessage: tl, emojiConfetti: tr, soundEffect: ti } = (0, V.Pv)(),
        ta = (0, Z.bB)(),
        ts = (0, Z.l)(),
        to = "sm";
    ew ? (to = "xl") : (eD || ta === U.pn.ADD_PAYMENT_STEPS) && (to = "md");
    let tu = te?.modalSizeGetter,
        tc = (0, y.D7)({ location: "PaymentModal" }),
        td = (0, j.O)(),
        tp = null != z && !tt && (0, w.U9)(td, z),
        [tm, th] = r.useState({
            load_id: eq.loadId,
            discovery_session_id: eq.discoverySessionId,
            payment_type: ep.frM[eQ],
            location: u ?? p,
            source: h,
            subscription_type: C,
            subscription_plan_id: e8?.id ?? q,
            is_gift: tt,
            eligible_for_trial: null != X,
            location_stack: n,
            sku_id: eL,
            application_id: eR,
            guild_id: eM,
            payment_modal_version: eY,
            activity_session_id: e4,
            eligible_for_discount: tp,
            sku_product_line: e9?.productLine,
            checkout_design: tc ? y.rS.UNIFIED : y.rS.LEGACY,
            checkout_flow: e3,
            ...t,
        }),
        tA = (0, J.W)(eF, ez),
        { giftCardBalance: tC, giftCardCurrency: tE } = (0, A.h)(),
        ty = null != e5 ? e5.getDiscountIdIfExists() : void 0;
    r.useEffect(() => {
        th((e) => {
            let n = null != e8 ? (0, H.y8)(e8.id, !1, tt, { paymentSourceId: eJ.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: e8?.id,
                price: n?.amount,
                regular_price: e8?.price,
                currency: e1,
                sku_id: eW,
                sku_product_line: e9?.productLine,
                ...t,
            };
        });
    }, [e8, eW, tt, eJ, e1, t, e9?.productLine]),
        (0, m.Ay)(() => {
            (0, x.b)({
                ...tm,
                continue_session_initial_step: eG,
                custom_checkout_flow: e2,
                has_saved_payment_source: eB,
                discount_id: null != td ? td.discountId : ty,
            });
        }),
        r.useEffect(() => {
            null == e8 && (null != e0 && null != eG ? eV(e0) : eV(q)),
                null != eL ? eH(eL) : null != q && eH(Y.A.get(q)?.skuId);
        }, [eV, e8, eH, q, eL, e0, eG]);
    let tP = r.useCallback(() => {
            let e = (0, W.lo)(tn) === W.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            B.default.track(ep.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...tm,
                is_custom_message_edited: tt && e && null != tl ? tl !== ey.intl.string(ey.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: tt && e,
                emoji_name: tt && e && tr?.id == null ? tr?.surrogates : void 0,
                sound_id: tt && e ? ti?.soundId : void 0,
                duration_ms: t - eq.startTime,
                payment_source_type: tA?.type,
                gift_card_balance: tC,
                gift_card_currency: tE,
            });
            let { enabled: n } = M.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            tt && null != tn && null != u && n && (0, L.WO)(u) && (0, b.Yd)(tn.id);
        }, [tm, tr, tl, tn, tt, ti, eq.startTime, tA, tC, tE, u]),
        tS = r.useMemo(() => () => $?.(eK === K.h.COMPLETED, eW), [$, eK, eW]),
        t_ = (0, i.A)(() => Date.now(), [ta]),
        tf = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: r, emitPaymentFlowLoadedEvent: i } = t,
                    a = Date.now();
                if (e === U.pn.CONFIRM && (tP(), O?.(r), ek)) return void tS();
                ts(e), ej?.(e), e$(null), e === U.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : ta;
                null === s || i
                    ? B.default.track(ep.HAw.PAYMENT_FLOW_LOADED, {
                          ...tm,
                          initial_step: s ?? e,
                          continue_session_initial_step: eG,
                          has_saved_payment_source: eB,
                      })
                    : B.default.track(ep.HAw.PAYMENT_FLOW_STEP, {
                          ...tm,
                          ...l,
                          from_step: s,
                          to_step: e === U.pn.ADD_PAYMENT_STEPS ? U.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - t_,
                          flow_duration_ms: a - eq.startTime,
                          gift_card_balance: tC,
                          gift_card_currency: tE,
                      });
            },
            [ts, ej, e$, ta, eG, tm, t_, eq.startTime, tP, O, ek, tS, eB, tC, tE],
        );
    (0, D.b)(ta, e7, tf, eZ),
        r.useEffect(() => {
            null != ta && ta !== U.pn.AWAITING_PURCHASE_TOKEN_AUTH && e6 === k.C.PENDING
                ? tf(U.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : ta === U.pn.AWAITING_PURCHASE_TOKEN_AUTH && e6 === k.C.SUCCESS && tf(U.pn.REVIEW);
        }, [ta, e6, tf]),
        (0, R.A)(tS),
        (0, G.s)(eX, () => $(!1), tt),
        (0, D.QR)(e7);
    let tI = (function (e) {
        let { renderHeader: t, handleClose: n } = e,
            {
                selectedSkuId: i,
                purchaseState: a,
                paymentSourceId: s,
                purchaseType: o,
            } = (0, g.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                purchaseState: e.purchaseState,
                paymentSourceId: e.paymentSourceId,
                purchaseType: e.purchaseType,
            })),
            u = (0, ee.bG)([es.A], () => es.A.isDisplayingWowMomentConfirmation),
            { isPremium: c, isPremiumGroupPurchase: d, isEligibleForTrial: p, isEligibleForDiscount: m } = (0, er.i)(),
            h = (0, T.A)(),
            A = (0, N.S3)(),
            C = (0, Z.bB)(),
            { checkoutPaymentSources: E, storeCountry: P } = (0, el.t)(),
            S = r.useMemo(() => {
                if (null == s) return null;
                let e = E.find((e) => e.id === s);
                return e?.relocationCountry ?? null;
            }, [E, s]),
            { isGift: _, selectedGiftStyle: f, giftRecipient: I } = (0, V.Pv)(),
            x = (0, en.vg)("PaymentModalHeader"),
            R = A?.productLine === ep.EZt.COLLECTIBLES,
            M = A?.productLine === ep.EZt.SOCIAL_LAYER_GAME_ITEM,
            b = _ && (0, W.Ik)(I) && C === U.pn.CONFIRM && null != f && !R && !M,
            L = null != t && null != C,
            j = [U.pn.SKU_SELECT, U.pn.SELECT_FREE_SKU],
            O = null != C && !j.includes(C) && null != i,
            w = (0, y.D7)({ location: "PaymentModalHeader" }),
            D = (0, ed.G)(h?.id ?? "") && !p;
        return r.useMemo(() => {
            if (null == C) return;
            if (w && ei.M.includes(C)) {
                let e = (0, ei.u)({
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
                          className: eA.kL,
                          children: [
                              (0, l.jsx)("div", {
                                  "aria-hidden": !0,
                                  style: { display: "contents" },
                                  children: (0, l.jsx)(eo.A, {
                                      defaultAnimationState: ea.oA.LOOP,
                                      giftStyle: f,
                                      className: eA.qq,
                                  }),
                              }),
                              (0, l.jsx)(et.s_, { onClick: n, className: eA.b, "data-migration-pending": !0 }),
                          ],
                      }))
                    : L
                      ? (e = t(h ?? null, n, C))
                      : o === eh.VV.ONE_TIME
                        ? (e = (0, l.jsx)(ec.fs, { step: C, onClose: n }))
                        : O &&
                          (Q()(i in em.WN, `invalid sku id: ${i}`),
                          (e = (0, l.jsx)(eu.A, {
                              currentStep: C ?? void 0,
                              purchaseState: a,
                              premiumType: em.WN[i],
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
    })({ renderHeader: ex, handleClose: tS });
    return (0, l.jsx)(E.e0, {
        children: (0, l.jsx)(s.b, {
            className: eP.Xn,
            isShaking: eO && eK === K.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(e_, {
                step: ta,
                transitionState: F,
                isGift: tt,
                giftRecipient: tn,
                returnRef: eU,
                manaModalSize: to,
                modalSizeGetter: tu,
                handleClose: tS,
                children: (0, l.jsx)(eE.Ay, {
                    header: tI,
                    initialPlanId: q,
                    subscriptionTier: z,
                    handleStepChange: tf,
                    handleClose: tS,
                    analyticsData: tm,
                    setAnalyticsData: th,
                    trialId: X,
                    trialFooterMessageOverride: eC,
                    reviewWarningMessage: eS,
                    planGroup: ef,
                    openInvoiceId: eI,
                    analyticsLocation: u,
                    onSubscriptionConfirmation: eT,
                    renderPurchaseConfirmation: eN,
                    postSuccessGuild: ev,
                    followupSKUInfo: eg,
                    referralTrialOfferId: eb,
                    skipConfirm: ek,
                    continueSessionToInitialStep: eG,
                }),
            }),
        }),
    });
}
function eI(e) {
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
            defaultPlanId: E,
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
        { hasFetchedRelatedSubscriptionPlans: I, subscriptionPriceOptionsLoading: T } = (0, f.Jn)(),
        { isGift: N } = (0, V.Pv)(),
        v = (0, $.A)({ isGift: N, skuId: d, referralTrialOfferId: s }),
        x = !_ || !I || T,
        R = (0, a.bG)([F.A], () => F.A.applicationIdsFetched.has(em.tv));
    return ((0, p.A)(
        "Payment Modal",
        x,
        5,
        { hasFetchedSubscriptions: _, hasFetchedSubscriptionPlans: I, subscriptionPriceOptionsLoading: T },
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
                ? (m((0, z.xT)(d, A, E)), i(U.pn.REVIEW))
                : null != t
                  ? i(U.pn.PLAN_SELECT)
                  : i(U.pn.SKU_SELECT);
    }, [o, A, P, R, n, x, i, t, d, m, v, E, N, y, c]),
    x)
        ? (0, l.jsx)(eC.A, {})
        : P
          ? (0, l.jsx)(C.oO, {})
          : null;
}
