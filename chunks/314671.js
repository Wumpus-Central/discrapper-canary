n.d(t, { I: () => ef, PaymentModal: () => eI });
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
    C = n(145659),
    y = n(31823),
    _ = n(426398),
    S = n(211083),
    P = n(655857),
    I = n(666646),
    f = n(558620),
    T = n(427675),
    N = n(480642),
    g = n(211159),
    v = n(357669),
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
    $ = n(216641),
    X = n(284009),
    J = n.n(X),
    Q = n(17928),
    ee = n(935462),
    et = n(546605),
    en = n(364995),
    el = n(463376),
    er = n(584160),
    ei = n(242874),
    ea = n(573359),
    es = n(165191),
    eo = n(237412),
    eu = n(897904),
    ec = n(906234),
    ed = n(652215),
    ep = n(788868),
    em = n(818348),
    eh = n(575650);
function eA(e) {
    let { renderHeader: t, handleClose: n, skipUnifiedHeaderForSteps: i } = e,
        {
            selectedSkuId: a,
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
        p = (0, Q.bG)([ea.A], () => ea.A.isDisplayingWowMomentConfirmation),
        { isPremium: m, isPremiumGroupPurchase: h, isEligibleForTrial: A, isEligibleForDiscount: E } = (0, el.i)(),
        C = (0, f.A)(),
        y = (0, T.S3)(),
        _ = (0, K.bB)(),
        { checkoutPaymentSources: S, storeCountry: P } = (0, en.t)(),
        I = r.useMemo(() => {
            if (null == o) return null;
            let e = S.find((e) => e.id === o);
            return e?.relocationCountry ?? null;
        }, [S, o]),
        { isGift: v, selectedGiftStyle: x, giftRecipient: R } = (0, H.Pv)(),
        M = (0, et.vg)("PaymentModalHeader"),
        b = y?.productLine === ed.EZt.COLLECTIBLES,
        L = y?.productLine === ed.EZt.SOCIAL_LAYER_GAME_ITEM,
        O = v && (0, B.Ik)(R) && _ === D.pn.CONFIRM && null != x && !b && !L,
        j = null != t && null != _,
        w = [D.pn.SKU_SELECT, D.pn.SELECT_FREE_SKU],
        U = null != _ && !w.includes(_) && null != a,
        k = (0, ec.G)(C?.id ?? "") && !A;
    return r.useMemo(() => {
        if (null == _) return;
        if (
            (function (e) {
                let { step: t, skipUnifiedHeaderForSteps: n } = e,
                    l = null != n && n.includes(t);
                return er.M.includes(t) && !l;
            })({ step: _, skipUnifiedHeaderForSteps: i })
        ) {
            let e = (0, er.u)({
                step: _,
                skuId: a ?? (null != y ? y.id : null),
                showBetaBadge: h,
                showTrialBadge: A,
                showPromoBadge: E || k,
                premiumDiscountPercent: d ? c : null,
                storeCountryFromCheckoutContext: P,
                isStoreCountryEnabled: M,
                relocationCountry: I,
            });
            return (0, l.jsx)(N.s3, { ...e });
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
                              children: (0, l.jsx)(es.A, {
                                  defaultAnimationState: ei.oA.LOOP,
                                  giftStyle: x,
                                  className: eh.qq,
                              }),
                          }),
                          (0, l.jsx)(ee.s_, { onClick: n, className: eh.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : j
                  ? (e = t(C ?? null, n, _))
                  : u === em.VV.ONE_TIME
                    ? (e = (0, l.jsx)(eu.fs, { step: _, onClose: n }))
                    : U &&
                      (J()(a in ep.WN, `invalid sku id: ${a}`),
                      (e = (0, l.jsx)(eo.A, {
                          currentStep: _ ?? void 0,
                          purchaseState: s,
                          premiumType: ep.WN[a],
                          onClose: n,
                          showTrialBadge: A,
                          showDiscountBadge: E,
                          isGift: v,
                          giftRecipient: R,
                          isEligibleForTrial: A,
                          enablePremiumBrandRefresh: m,
                          isDisplayingWowMomentConfirmation: p,
                          isPremiumGroupPurchase: h,
                      }))),
            e
        );
    }, [i, M, P, I, x, n, s, t, C, y, a, _, A, E, c, d, k, O, U, j, u, v, R, m, p, h]);
}
var eE = n(534479),
    eC = n(482132);
n(322076);
var ey = n(375708),
    e_ = n(106451);
let eS = { [D.pn.GIFT_CUSTOMIZATION]: "xl", [D.pn.REVIEW]: "md", [D.pn.ADD_PAYMENT_STEPS]: "md" },
    eP = (e) => {
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
            analyticsSourceLocation: h,
            analyticsSubscriptionType: E = ed.rzx.PREMIUM,
            onComplete: N,
            transitionState: O,
            initialPlanId: F,
            subscriptionTier: Z,
            onClose: q,
            trialId: z,
            reviewWarningMessage: X,
            planGroup: J = ep.LE,
            openInvoiceId: Q,
            onSubscriptionConfirmation: ee,
            renderPurchaseConfirmation: et,
            postSuccessGuild: en,
            followupSKUInfo: el,
            renderHeader: er,
            skipUnifiedHeaderForSteps: ei,
            disableUnsupportedExternalSubscriptionHandler: ea = !1,
            applicationId: es,
            guildId: eo,
            referralTrialOfferId: eu,
            skuId: ec,
            onStepChange: em,
            shakeWhilePurchasing: eh = !1,
            isLargeModal: eE = !1,
            isMediumModal: eS = !1,
            returnRef: eI,
            skipConfirm: ef = !1,
            continueSessionToInitialStep: eT,
            paymentModalVersion: eN = "v1",
        } = e,
        { paymentSources: eg, hasPaymentSources: ev } = (0, _.jm)(),
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
        { displayCurrency: eB } = (0, P.Jn)(),
        { activitySessionId: eW } = (0, y.V)(),
        { paymentAuthenticationState: eH } = (0, S.o)(),
        eV = (0, a.bG)([U.A], () => U.A.purchaseTokenAuthState),
        eK = (0, I.sw)(),
        eZ = (0, f.A)(),
        eq = (0, T.S3)(),
        ez = (function () {
            let { step: e, stepConfigs: t } = (0, K.Ay)(),
                n = t.find((t) => t.key === e);
            return n?.options;
        })(),
        { isGift: e$, giftRecipient: eX, customGiftMessage: eJ, emojiConfetti: eQ, soundEffect: e0 } = (0, H.Pv)(),
        e2 = (0, K.bB)(),
        e1 = (0, K.l)(),
        e3 = "sm";
    eE ? (e3 = "xl") : (eS || e2 === D.pn.ADD_PAYMENT_STEPS) && (e3 = "md");
    let e4 = ez?.modalSizeGetter,
        e7 = (0, L.O)(),
        e6 = null != Z && !e$ && (0, j.U9)(e7, Z),
        [e5, e8] = r.useState({
            load_id: eO.loadId,
            discovery_session_id: eO.discoverySessionId,
            payment_type: ed.frM[ek],
            location: u ?? p,
            source: h,
            subscription_type: E,
            subscription_plan_id: eZ?.id ?? F,
            is_gift: e$,
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
        e9 = (0, $.W)(eg, ej),
        { giftCardBalance: te, giftCardCurrency: tt } = (0, A.h)(),
        tn = null != eK ? eK.getDiscountIdIfExists() : void 0;
    r.useEffect(() => {
        e8((e) => {
            let n = null != eZ ? (0, W.y8)(eZ.id, !1, e$, { paymentSourceId: eD.paymentSourceId }) : void 0;
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
    }, [eZ, ex, e$, eD, eB, t, eq?.productLine]),
        (0, m.Ay)(() => {
            (0, v.b)({
                ...e5,
                continue_session_initial_step: eT,
                custom_checkout_flow: eF,
                has_saved_payment_source: ev,
                discount_id: null != e7 ? e7.discountId : tn,
            });
        }),
        r.useEffect(() => {
            null == eZ && (null != eG && null != eT ? eM(eG) : eM(F)),
                null != ec ? eR(ec) : null != F && eR(G.A.get(F)?.skuId);
        }, [eM, eZ, eR, F, ec, eG, eT]);
    let tl = r.useCallback(() => {
            let e = (0, B.lo)(eX) === B.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            Y.default.track(ed.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e5,
                is_custom_message_edited: e$ && e && null != eJ ? eJ !== ey.intl.string(ey.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: e$ && e,
                emoji_name: e$ && e && eQ?.id == null ? eQ?.surrogates : void 0,
                sound_id: e$ && e ? e0?.soundId : void 0,
                duration_ms: t - eO.startTime,
                payment_source_type: e9?.type,
                gift_card_balance: te,
                gift_card_currency: tt,
            });
            let { enabled: n } = R.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            e$ && null != eX && null != u && n && (0, b.WO)(u) && (0, M.Yd)(eX.id);
        }, [e5, eQ, eJ, eX, e$, e0, eO.startTime, e9, te, tt, u]),
        tr = r.useMemo(() => () => q?.(eb === V.h.COMPLETED, ex), [q, eb, ex]),
        ti = (0, i.A)(() => Date.now(), [e2]),
        ta = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: r, emitPaymentFlowLoadedEvent: i } = t,
                    a = Date.now();
                if (e === D.pn.CONFIRM && (tl(), N?.(r), ef)) return void tr();
                e1(e), em?.(e), ew(null), e === D.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : e2;
                null === s || i
                    ? Y.default.track(ed.HAw.PAYMENT_FLOW_LOADED, {
                          ...e5,
                          initial_step: s ?? e,
                          continue_session_initial_step: eT,
                          has_saved_payment_source: ev,
                      })
                    : Y.default.track(ed.HAw.PAYMENT_FLOW_STEP, {
                          ...e5,
                          ...l,
                          from_step: s,
                          to_step: e === D.pn.ADD_PAYMENT_STEPS ? D.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - ti,
                          flow_duration_ms: a - eO.startTime,
                          gift_card_balance: te,
                          gift_card_currency: tt,
                      });
            },
            [e1, em, ew, e2, eT, e5, ti, eO.startTime, tl, N, ef, tr, ev, te, tt],
        );
    return (
        (0, w.b)(e2, eH, ta, eL),
        r.useEffect(() => {
            null != e2 && e2 !== D.pn.AWAITING_PURCHASE_TOKEN_AUTH && eV === U.C.PENDING
                ? ta(D.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e2 === D.pn.AWAITING_PURCHASE_TOKEN_AUTH && eV === U.C.SUCCESS && ta(D.pn.REVIEW);
        }, [e2, eV, ta]),
        (0, x.A)(tr),
        (0, k.s)(eU, () => q(!1), e$, !ea),
        (0, w.QR)(eH),
        (0, l.jsx)(s.b, {
            className: e_.Xn,
            isShaking: eh && eb === V.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(eP, {
                step: e2,
                transitionState: O,
                isGift: e$,
                giftRecipient: eX,
                returnRef: eI,
                manaModalSize: e3,
                modalSizeGetter: e4,
                handleClose: tr,
                children: (0, l.jsx)(eC.Ay, {
                    header: (0, l.jsx)(eA, { handleClose: tr, skipUnifiedHeaderForSteps: ei, renderHeader: er }),
                    ...{
                        initialPlanId: F,
                        subscriptionTier: Z,
                        handleStepChange: ta,
                        handleClose: tr,
                        analyticsData: e5,
                        setAnalyticsData: e8,
                        trialId: z,
                        reviewWarningMessage: X,
                        planGroup: J,
                        openInvoiceId: Q,
                        analyticsLocation: u,
                        onSubscriptionConfirmation: ee,
                        renderPurchaseConfirmation: et,
                        postSuccessGuild: en,
                        followupSKUInfo: el,
                        referralTrialOfferId: eu,
                        skipConfirm: ef,
                        continueSessionToInitialStep: eT,
                    },
                }),
            }),
        })
    );
}
function ef(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: i,
            referralTrialOfferId: s,
            continueSessionToInitialStep: o,
        } = e,
        { hasPaymentSources: c } = (0, _.jm)(),
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
        S = (0, h.Hp)(),
        I = (0, Z.A)(),
        { hasFetchedRelatedSubscriptionPlans: f, subscriptionPriceOptionsLoading: T } = (0, P.Jn)(),
        { isGift: N } = (0, H.Pv)(),
        v = (0, z.A)({ isGift: N, skuId: d, referralTrialOfferId: s }),
        x = !I || !f || T,
        R = (0, a.bG)([F.A], () => F.A.applicationIdsFetched.has(ep.tv));
    return ((0, p.A)(
        "Payment Modal",
        x,
        5,
        { hasFetchedSubscriptions: I, hasFetchedSubscriptionPlans: f, subscriptionPriceOptionsLoading: T },
        { tags: { app_context: "billing" } },
    ),
    r.useEffect(() => {
        if ((R || (0, u.LM)(ep.tv), x || S)) return;
        let e = (0, q.vT)({ isTrial: v, isGift: N, selectedSkuId: d, startedPaymentFlowWithPaymentSources: y });
        null != o
            ? i(D.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== ep.gD.PREMIUM_GROUP_MONTH || c
                  ? i(D.pn.REVIEW)
                  : i(D.pn.ADD_PAYMENT_STEPS)
              : e
                ? (m((0, q.xT)(d, A, C)), i(D.pn.REVIEW))
                : null != t
                  ? i(D.pn.PLAN_SELECT)
                  : i(D.pn.SKU_SELECT);
    }, [o, A, S, R, n, x, i, t, d, m, v, C, N, y, c]),
    x)
        ? (0, l.jsx)(eE.A, {})
        : S
          ? (0, l.jsx)(E.oO, {})
          : null;
}
