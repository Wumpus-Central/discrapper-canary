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
    y = n(31823),
    _ = n(426398),
    P = n(211083),
    S = n(655857),
    I = n(666646),
    T = n(558620),
    f = n(427675),
    N = n(480642),
    v = n(211159),
    g = n(357669),
    x = n(319437),
    R = n(70730),
    M = n(45787),
    b = n(51501),
    L = n(422936),
    O = n(862990),
    j = n(410516),
    w = n(251913),
    D = n(166532),
    U = n(71319),
    k = n(344159),
    G = n(97352),
    F = n(469778),
    Y = n(174459),
    B = n(45938),
    W = n(428262),
    H = n(937008),
    V = n(566980),
    K = n(615310),
    Z = n(121005),
    q = n(800471),
    z = n(169801),
    J = n(216641),
    $ = n(284009),
    X = n.n($),
    Q = n(17928),
    ee = n(935462),
    et = n(546605),
    en = n(364995),
    el = n(463376),
    er = n(584160),
    ea = n(242874),
    ei = n(573359),
    es = n(165191),
    eo = n(237412),
    eu = n(897904),
    ec = n(906234),
    ed = n(652215),
    ep = n(788868),
    em = n(818348),
    eA = n(575650);
function eh(e) {
    let { renderHeader: t, handleClose: n, skipUnifiedHeaderForSteps: a } = e,
        {
            selectedSkuId: i,
            purchaseState: s,
            paymentSourceId: o,
            purchaseType: u,
            premiumDiscountPercent: c,
            isPremiumDiscountAppliedToCheckoutInvoice: d,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            paymentSourceId: e.paymentSourceId,
            purchaseType: e.purchaseType,
            premiumDiscountPercent: e.get("premiumDiscountPercent"),
            isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
        })),
        p = (0, Q.bG)([ei.A], () => ei.A.isDisplayingWowMomentConfirmation),
        { isPremium: m, isPremiumGroupPurchase: A, isEligibleForTrial: h, isEligibleForDiscount: E } = (0, el.i)(),
        C = (0, T.A)(),
        y = (0, f.S3)(),
        _ = (0, K.bB)(),
        { checkoutPaymentSources: P, storeCountry: S } = (0, en.t)(),
        I = r.useMemo(() => {
            if (null == o) return null;
            let e = P.find((e) => e.id === o);
            return e?.relocationCountry ?? null;
        }, [P, o]),
        { isGift: g, selectedGiftStyle: x, giftRecipient: R } = (0, H.Pv)(),
        M = (0, et.vg)("PaymentModalHeader"),
        b = y?.productLine === ed.EZt.COLLECTIBLES,
        L = y?.productLine === ed.EZt.SOCIAL_LAYER_GAME_ITEM,
        O = g && (0, B.Ik)(R) && _ === D.pn.CONFIRM && null != x && !b && !L,
        j = null != t && null != _,
        w = [D.pn.SKU_SELECT, D.pn.SELECT_FREE_SKU],
        U = null != _ && !w.includes(_) && null != i,
        k = (0, ec.G)(C?.id ?? "") && !h;
    return r.useMemo(() => {
        if (null == _) return;
        if (
            (function (e) {
                let { step: t, skipUnifiedHeaderForSteps: n } = e,
                    l = null != n && n.includes(t);
                return er.M.includes(t) && !l;
            })({ step: _, skipUnifiedHeaderForSteps: a })
        ) {
            let e = (0, er.u)({
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
            return (0, l.jsx)(N.s3, { ...e });
        }
        let e = null;
        return (
            O
                ? (e = (0, l.jsxs)("div", {
                      className: eA.kL,
                      children: [
                          (0, l.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, l.jsx)(es.A, {
                                  defaultAnimationState: ea.oA.LOOP,
                                  giftStyle: x,
                                  className: eA.qq,
                              }),
                          }),
                          (0, l.jsx)(ee.s_, { onClick: n, className: eA.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : j
                  ? (e = t(C ?? null, n, _))
                  : u === em.VV.ONE_TIME
                    ? (e = (0, l.jsx)(eu.fs, { step: _, onClose: n }))
                    : U &&
                      (X()(i in ep.WN, `invalid sku id: ${i}`),
                      (e = (0, l.jsx)(eo.A, {
                          currentStep: _ ?? void 0,
                          purchaseState: s,
                          premiumType: ep.WN[i],
                          onClose: n,
                          showTrialBadge: h,
                          showDiscountBadge: E,
                          isGift: g,
                          giftRecipient: R,
                          isEligibleForTrial: h,
                          enablePremiumBrandRefresh: m,
                          isDisplayingWowMomentConfirmation: p,
                          isPremiumGroupPurchase: A,
                      }))),
            e
        );
    }, [a, M, S, I, x, n, s, t, C, y, i, _, h, E, c, d, k, O, U, j, u, g, R, m, p, A]);
}
var eE = n(534479),
    eC = n(482132);
n(322076);
var ey = n(375708),
    e_ = n(106451);
let eP = { [D.pn.GIFT_CUSTOMIZATION]: "xl", [D.pn.REVIEW]: "md", [D.pn.ADD_PAYMENT_STEPS]: "md" },
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
            d = (0, O.FY)({ isGift: a }),
            p =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: a, giftRecipient: i })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              l = n ?? "md";
                          return null == e ? l : e in eP ? eP[e] : l;
                      })(t, { manaModalSizeFromProps: s });
        return (0, l.jsx)(N.Jg, {
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
            analyticsSubscriptionType: E = ed.rzx.PREMIUM,
            onComplete: N,
            transitionState: O,
            initialPlanId: F,
            subscriptionTier: Z,
            onClose: q,
            trialId: z,
            reviewWarningMessage: $,
            planGroup: X = ep.LE,
            openInvoiceId: Q,
            onSubscriptionConfirmation: ee,
            renderPurchaseConfirmation: et,
            postSuccessGuild: en,
            followupSKUInfo: el,
            renderHeader: er,
            skipUnifiedHeaderForSteps: ea,
            disableUnsupportedExternalSubscriptionHandler: ei = !1,
            applicationId: es,
            guildId: eo,
            referralTrialOfferId: eu,
            skuId: ec,
            onStepChange: em,
            shakeWhilePurchasing: eA = !1,
            isLargeModal: eE = !1,
            isMediumModal: eP = !1,
            returnRef: eI,
            skipConfirm: eT = !1,
            continueSessionToInitialStep: ef,
            paymentModalVersion: eN = "v1",
        } = e,
        { paymentSources: ev, hasPaymentSources: eg } = (0, _.jm)(),
        {
            selectedSkuId: ex,
            setSelectedSkuId: eR,
            setSelectedPlanId: eM,
            purchaseState: eb,
            setPurchaseState: eL,
            contextMetadata: eO,
            paymentSourceId: ej,
            setPurchaseError: ew,
            priceOptions: eD,
            activeSubscription: eU,
            purchaseType: ek,
            defaultPlanId: eG,
            customCheckoutFlow: eF,
            unifiedCheckoutFlow: eY,
        } = (0, v.t4)((e) => ({
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
        { displayCurrency: eB } = (0, S.Jn)(),
        { activitySessionId: eW } = (0, y.V)(),
        { paymentAuthenticationState: eH } = (0, P.o)(),
        eV = (0, i.bG)([U.A], () => U.A.purchaseTokenAuthState),
        eK = (0, I.sw)(),
        eZ = (0, T.A)(),
        eq = (0, f.S3)(),
        ez = (function () {
            let { step: e, stepConfigs: t } = (0, K.Ay)(),
                n = t.find((t) => t.key === e);
            return n?.options;
        })(),
        { isGift: eJ, giftRecipient: e$, customGiftMessage: eX, emojiConfetti: eQ, soundEffect: e0 } = (0, H.Pv)(),
        e2 = (0, K.bB)(),
        e3 = (0, K.l)(),
        e1 = "sm";
    eE ? (e1 = "xl") : (eP || e2 === D.pn.ADD_PAYMENT_STEPS) && (e1 = "md");
    let e4 = ez?.modalSizeGetter,
        e7 = (0, L.O)(),
        e6 = null != Z && !eJ && (0, j.U9)(e7, Z),
        [e5, e8] = r.useState({
            load_id: eO.loadId,
            discovery_session_id: eO.discoverySessionId,
            payment_type: ed.frM[ek],
            location: u ?? p,
            source: A,
            subscription_type: E,
            subscription_plan_id: eZ?.id ?? F,
            is_gift: eJ,
            eligible_for_trial: null != z,
            location_stack: n,
            sku_id: ec,
            application_id: es,
            guild_id: eo,
            payment_modal_version: eN,
            activity_session_id: eW,
            eligible_for_discount: e6,
            sku_product_line: eq?.productLine,
            checkout_design: C.r.UNIFIED,
            checkout_flow: eY,
            ...t,
        }),
        e9 = (0, J.W)(ev, ej),
        { giftCardBalance: te, giftCardCurrency: tt } = (0, h.h)(),
        tn = null != eK ? eK.getDiscountIdIfExists() : void 0;
    r.useEffect(() => {
        e8((e) => {
            let n = null != eZ ? (0, W.y8)(eZ.id, !1, eJ, { paymentSourceId: eD.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eZ?.id,
                price: n?.amount,
                regular_price: eZ?.price,
                currency: eB,
                sku_id: ex,
                sku_product_line: eq?.productLine,
                ...t,
            };
        });
    }, [eZ, ex, eJ, eD, eB, t, eq?.productLine]),
        (0, m.Ay)(() => {
            (0, g.b)({
                ...e5,
                continue_session_initial_step: ef,
                custom_checkout_flow: eF,
                has_saved_payment_source: eg,
                discount_id: null != e7 ? e7.discountId : tn,
            });
        }),
        r.useEffect(() => {
            null == eZ && (null != eG && null != ef ? eM(eG) : eM(F)),
                null != ec ? eR(ec) : null != F && eR(G.A.get(F)?.skuId);
        }, [eM, eZ, eR, F, ec, eG, ef]);
    let tl = r.useCallback(() => {
            let e = (0, B.lo)(e$) === B.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            Y.default.track(ed.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e5,
                is_custom_message_edited: eJ && e && null != eX ? eX !== ey.intl.string(ey.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eJ && e,
                emoji_name: eJ && e && eQ?.id == null ? eQ?.surrogates : void 0,
                sound_id: eJ && e ? e0?.soundId : void 0,
                duration_ms: t - eO.startTime,
                payment_source_type: e9?.type,
                gift_card_balance: te,
                gift_card_currency: tt,
            });
            let { enabled: n } = R.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eJ && null != e$ && null != u && n && (0, b.WO)(u) && (0, M.Yd)(e$.id);
        }, [e5, eQ, eX, e$, eJ, e0, eO.startTime, e9, te, tt, u]),
        tr = r.useMemo(() => () => q?.(eb === V.h.COMPLETED, ex), [q, eb, ex]),
        ta = (0, a.A)(() => Date.now(), [e2]),
        ti = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: r, emitPaymentFlowLoadedEvent: a } = t,
                    i = Date.now();
                if (e === D.pn.CONFIRM && (tl(), N?.(r), eT)) return void tr();
                e3(e), em?.(e), ew(null), e === D.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : e2;
                null === s || a
                    ? Y.default.track(ed.HAw.PAYMENT_FLOW_LOADED, {
                          ...e5,
                          initial_step: s ?? e,
                          continue_session_initial_step: ef,
                          has_saved_payment_source: eg,
                      })
                    : Y.default.track(ed.HAw.PAYMENT_FLOW_STEP, {
                          ...e5,
                          ...l,
                          from_step: s,
                          to_step: e === D.pn.ADD_PAYMENT_STEPS ? D.pn.PAYMENT_TYPE : e,
                          step_duration_ms: i - ta,
                          flow_duration_ms: i - eO.startTime,
                          gift_card_balance: te,
                          gift_card_currency: tt,
                      });
            },
            [e3, em, ew, e2, ef, e5, ta, eO.startTime, tl, N, eT, tr, eg, te, tt],
        );
    return (
        (0, w.b)(e2, eH, ti, eL),
        r.useEffect(() => {
            null != e2 && e2 !== D.pn.AWAITING_PURCHASE_TOKEN_AUTH && eV === U.C.PENDING
                ? ti(D.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e2 === D.pn.AWAITING_PURCHASE_TOKEN_AUTH && eV === U.C.SUCCESS && ti(D.pn.REVIEW);
        }, [e2, eV, ti]),
        (0, x.A)(tr),
        (0, k.s)(eU, () => q(!1), eJ, !ei),
        (0, w.QR)(eH),
        (0, l.jsx)(s.b, {
            className: e_.Xn,
            isShaking: eA && eb === V.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(eS, {
                step: e2,
                transitionState: O,
                isGift: eJ,
                giftRecipient: e$,
                returnRef: eI,
                manaModalSize: e1,
                modalSizeGetter: e4,
                handleClose: tr,
                children: (0, l.jsx)(eC.Ay, {
                    header: (0, l.jsx)(eh, { handleClose: tr, skipUnifiedHeaderForSteps: ea, renderHeader: er }),
                    ...{
                        initialPlanId: F,
                        subscriptionTier: Z,
                        handleStepChange: ti,
                        handleClose: tr,
                        analyticsData: e5,
                        setAnalyticsData: e8,
                        trialId: z,
                        reviewWarningMessage: $,
                        planGroup: X,
                        openInvoiceId: Q,
                        analyticsLocation: u,
                        onSubscriptionConfirmation: ee,
                        renderPurchaseConfirmation: et,
                        postSuccessGuild: en,
                        followupSKUInfo: el,
                        referralTrialOfferId: eu,
                        skipConfirm: eT,
                        continueSessionToInitialStep: ef,
                    },
                }),
            }),
        })
    );
}
function eT(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: a,
            referralTrialOfferId: s,
            continueSessionToInitialStep: o,
        } = e,
        { hasPaymentSources: c } = (0, _.jm)(),
        {
            selectedSkuId: d,
            setSelectedPlanId: m,
            activeSubscription: h,
            defaultPlanId: C,
            startedPaymentFlowWithPaymentSources: y,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        P = (0, A.Hp)(),
        I = (0, Z.A)(),
        { hasFetchedRelatedSubscriptionPlans: T, subscriptionPriceOptionsLoading: f } = (0, S.Jn)(),
        { isGift: N } = (0, H.Pv)(),
        g = (0, z.A)({ isGift: N, skuId: d, referralTrialOfferId: s }),
        x = !I || !T || f,
        R = (0, i.bG)([F.A], () => F.A.applicationIdsFetched.has(ep.tv));
    return ((0, p.A)(
        "Payment Modal",
        x,
        5,
        { hasFetchedSubscriptions: I, hasFetchedSubscriptionPlans: T, subscriptionPriceOptionsLoading: f },
        { tags: { app_context: "billing" } },
    ),
    r.useEffect(() => {
        if ((R || (0, u.LM)(ep.tv), x || P)) return;
        let e = (0, q.vT)({ isTrial: g, isGift: N, selectedSkuId: d, startedPaymentFlowWithPaymentSources: y });
        null != o
            ? a(D.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== ep.gD.PREMIUM_GROUP_MONTH || c
                  ? a(D.pn.REVIEW)
                  : a(D.pn.ADD_PAYMENT_STEPS)
              : e
                ? (m((0, q.xT)(d, h, C)), a(D.pn.REVIEW))
                : null != t
                  ? a(D.pn.PLAN_SELECT)
                  : a(D.pn.SKU_SELECT);
    }, [o, h, P, R, n, x, a, t, d, m, g, C, N, y, c]),
    x)
        ? (0, l.jsx)(eE.A, {})
        : P
          ? (0, l.jsx)(E.oO, {})
          : null;
}
