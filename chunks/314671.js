n.d(t, { I: () => eE, PaymentModal: () => ey });
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
    h = n(176095),
    C = n(545075),
    A = n(725836),
    y = n(742810),
    E = n(426398),
    P = n(655857),
    S = n(666646),
    f = n(558620),
    _ = n(427675),
    T = n(480642),
    I = n(722847),
    N = n(357669),
    x = n(319437),
    g = n(70730),
    v = n(45787),
    M = n(51501),
    R = n(422936),
    b = n(39423),
    j = n(410516),
    L = n(251913),
    O = n(166532),
    D = n(71319),
    w = n(344159),
    U = n(97352),
    k = n(469778),
    G = n(174459),
    Y = n(45938),
    F = n(428262),
    B = n(937008),
    W = n(834252),
    V = n(566980),
    H = n(615310),
    K = n(800471),
    Z = n(169801),
    q = n(216641),
    z = n(284009),
    $ = n.n(z),
    J = n(935462),
    X = n(546605),
    Q = n(364995),
    ee = n(463376),
    et = n(584160),
    en = n(242874),
    el = n(165191),
    er = n(237412),
    ei = n(897904),
    ea = n(906234),
    es = n(652215),
    eo = n(788868),
    eu = n(818348),
    ec = n(575650),
    ed = n(534479),
    ep = n(482132);
n(322076);
var em = n(375708),
    eh = n(106451);
let eC = { [O.pn.GIFT_CUSTOMIZATION]: "xl", [O.pn.REVIEW]: "md", [O.pn.ADD_PAYMENT_STEPS]: "md" },
    eA = (e) => {
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
            d = (0, b.FY)({ isGift: i }),
            p =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: i, giftRecipient: a })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              l = n ?? "md";
                          return null == e ? l : e in eC ? eC[e] : l;
                      })(t, { manaModalSizeFromProps: s });
        return (0, l.jsx)(T.Jg, {
            transitionState: n,
            size: p,
            returnRef: u,
            "aria-label": em.intl.string(em.t.q9EGps),
            onClose: async () => {
                await r();
            },
            children: c,
        });
    };
function ey(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: u,
            analyticsObject: p,
            analyticsSourceLocation: C,
            analyticsSubscriptionType: b = es.rzx.PREMIUM,
            onComplete: k,
            transitionState: K,
            initialPlanId: Z,
            subscriptionTier: z,
            onClose: ed,
            trialId: eC,
            trialFooterMessageOverride: ey,
            reviewWarningMessage: eE,
            planGroup: eP = eo.LE,
            openInvoiceId: eS,
            onSubscriptionConfirmation: ef,
            renderPurchaseConfirmation: e_,
            postSuccessGuild: eT,
            followupSKUInfo: eI,
            renderHeader: eN,
            applicationId: ex,
            guildId: eg,
            referralTrialOfferId: ev,
            skuId: eM,
            onStepChange: eR,
            shakeWhilePurchasing: eb = !1,
            isLargeModal: ej = !1,
            isMediumModal: eL = !1,
            returnRef: eO,
            skipConfirm: eD = !1,
            continueSessionToInitialStep: ew,
            paymentModalVersion: eU = "v1",
        } = e,
        { paymentSources: ek, hasPaymentSources: eG } = (0, E.jm)(),
        {
            selectedSkuId: eY,
            setSelectedSkuId: eF,
            setSelectedPlanId: eB,
            purchaseState: eW,
            setPurchaseState: eV,
            contextMetadata: eH,
            paymentSourceId: eK,
            setPurchaseError: eZ,
            priceOptions: eq,
        } = (0, I.t4)((e) => ({
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
        { displayCurrency: ez } = (0, P.Jn)(),
        {
            activitySessionId: e$,
            paymentAuthenticationState: eJ,
            purchaseTokenAuthState: eX,
            activeSubscription: eQ,
            purchaseType: e0,
            defaultPlanId: e2,
            customCheckoutFlow: e3,
            unifiedCheckoutFlow: e1,
        } = (0, W.P5)(),
        e4 = (0, S.sw)(),
        e7 = (0, f.A)(),
        e6 = (0, _.S3)(),
        e5 = (function () {
            let { step: e, stepConfigs: t } = (0, H.Ay)(),
                n = t.find((t) => t.key === e);
            return n?.options;
        })(),
        { isGift: e8, giftRecipient: e9, customGiftMessage: te, emojiConfetti: tt, soundEffect: tn } = (0, B.Pv)(),
        tl = (0, H.bB)(),
        tr = (0, H.l)(),
        ti = "sm";
    ej ? (ti = "xl") : (eL || tl === O.pn.ADD_PAYMENT_STEPS) && (ti = "md");
    let ta = e5?.modalSizeGetter,
        ts = (0, y.D7)({ location: "PaymentModal" }),
        to = (0, R.O)(),
        tu = null != z && !e8 && (0, j.U9)(to, z),
        [tc, td] = r.useState({
            load_id: eH.loadId,
            discovery_session_id: eH.discoverySessionId,
            payment_type: es.frM[e0],
            location: u ?? p,
            source: C,
            subscription_type: b,
            subscription_plan_id: e7?.id ?? Z,
            is_gift: e8,
            eligible_for_trial: null != eC,
            location_stack: n,
            sku_id: eM,
            application_id: ex,
            guild_id: eg,
            payment_modal_version: eU,
            activity_session_id: e$,
            eligible_for_discount: tu,
            sku_product_line: e6?.productLine,
            checkout_design: ts ? y.rS.UNIFIED : y.rS.LEGACY,
            checkout_flow: e1,
            ...t,
        }),
        tp = (0, q.W)(ek, eK),
        tm = (0, a.bG)([h.A], () => h.A.getBalance(eK ?? ""), [eK]),
        th = null != tm ? tm.amount : null,
        tC = null != tm ? tm.currency : null,
        tA = null != e4 ? e4.getDiscountIdIfExists() : void 0;
    r.useEffect(() => {
        td((e) => {
            let n = null != e7 ? (0, F.y8)(e7.id, !1, e8, { paymentSourceId: eq.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: e7?.id,
                price: n?.amount,
                regular_price: e7?.price,
                currency: ez,
                sku_id: eY,
                sku_product_line: e6?.productLine,
                ...t,
            };
        });
    }, [e7, eY, e8, eq, ez, t, e6?.productLine]),
        (0, m.Ay)(() => {
            (0, N.b)({
                ...tc,
                continue_session_initial_step: ew,
                custom_checkout_flow: e3,
                has_saved_payment_source: eG,
                discount_id: null != to ? to.discountId : tA,
            });
        }),
        r.useEffect(() => {
            null == e7 && (null != e2 && null != ew ? eB(e2) : eB(Z)),
                null != eM ? eF(eM) : null != Z && eF(U.A.get(Z)?.skuId);
        }, [eB, e7, eF, Z, eM, e2, ew]);
    let ty = r.useCallback(() => {
            let e = (0, Y.lo)(e9) === Y.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            G.default.track(es.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...tc,
                is_custom_message_edited: e8 && e && null != te ? te !== em.intl.string(em.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: e8 && e,
                emoji_name: e8 && e && tt?.id == null ? tt?.surrogates : void 0,
                sound_id: e8 && e ? tn?.soundId : void 0,
                duration_ms: t - eH.startTime,
                payment_source_type: tp?.type,
                gift_card_balance: th,
                gift_card_currency: tC,
            });
            let { enabled: n } = g.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            e8 && null != e9 && null != u && n && (0, M.WO)(u) && (0, v.Yd)(e9.id);
        }, [tc, tt, te, e9, e8, tn, eH.startTime, tp, th, tC, u]),
        tE = r.useMemo(() => () => ed?.(eW === V.h.COMPLETED, eY), [ed, eW, eY]),
        tP = (0, i.A)(() => Date.now(), [tl]),
        tS = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: r, emitPaymentFlowLoadedEvent: i } = t,
                    a = Date.now();
                if (e === O.pn.CONFIRM && (ty(), k?.(r), eD)) return void tE();
                tr(e), eR?.(e), eZ(null), e === O.pn.ADD_PAYMENT_STEPS && (o.h.wait(c.ET), o.h.wait(d.T3));
                let s = null != n ? n : tl;
                null === s || i
                    ? G.default.track(es.HAw.PAYMENT_FLOW_LOADED, {
                          ...tc,
                          initial_step: s ?? e,
                          continue_session_initial_step: ew,
                          has_saved_payment_source: eG,
                      })
                    : G.default.track(es.HAw.PAYMENT_FLOW_STEP, {
                          ...tc,
                          ...l,
                          from_step: s,
                          to_step: e === O.pn.ADD_PAYMENT_STEPS ? O.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - tP,
                          flow_duration_ms: a - eH.startTime,
                          gift_card_balance: th,
                          gift_card_currency: tC,
                      });
            },
            [tr, eR, eZ, tl, ew, tc, tP, eH.startTime, ty, k, eD, tE, eG, th, tC],
        );
    (0, L.b)(tl, eJ, tS, eV),
        r.useEffect(() => {
            null != tl && tl !== O.pn.AWAITING_PURCHASE_TOKEN_AUTH && eX === D.C.PENDING
                ? tS(O.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : tl === O.pn.AWAITING_PURCHASE_TOKEN_AUTH && eX === D.C.SUCCESS && tS(O.pn.REVIEW);
        }, [tl, eX, tS]),
        (0, x.A)(tE),
        (0, w.s)(eQ, () => ed(!1), e8),
        (0, L.QR)(eJ);
    let tf = (function (e) {
        let { renderHeader: t, handleClose: n } = e,
            {
                selectedSkuId: i,
                purchaseState: a,
                paymentSourceId: s,
            } = (0, I.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                purchaseState: e.purchaseState,
                paymentSourceId: e.paymentSourceId,
            })),
            { purchaseType: o, isDisplayingWowMomentConfirmation: u } = (0, W.P5)(),
            { isPremium: c, isPremiumGroupPurchase: d, isEligibleForTrial: p, isEligibleForDiscount: m } = (0, ee.i)(),
            h = (0, f.A)(),
            C = (0, _.S3)(),
            A = (0, H.bB)(),
            { checkoutPaymentSources: E, storeCountry: P } = (0, Q.t)(),
            S = r.useMemo(() => {
                if (null == s) return null;
                let e = E.find((e) => e.id === s);
                return e?.relocationCountry ?? null;
            }, [E, s]),
            { isGift: N, selectedGiftStyle: x, giftRecipient: g } = (0, B.Pv)(),
            v = (0, X.vg)("PaymentModalHeader"),
            M = C?.productLine === es.EZt.COLLECTIBLES,
            R = C?.productLine === es.EZt.SOCIAL_LAYER_GAME_ITEM,
            b = N && (0, Y.Ik)(g) && A === O.pn.CONFIRM && null != x && !M && !R,
            j = null != t && null != A,
            L = [O.pn.SKU_SELECT, O.pn.SELECT_FREE_SKU],
            D = null != A && !L.includes(A) && null != i,
            w = (0, y.D7)({ location: "PaymentModalHeader" }),
            U = (0, ea.G)(h?.id ?? "") && !p;
        return r.useMemo(() => {
            if (null == A) return;
            if (w && et.M.includes(A)) {
                let e = (0, et.u)({
                    step: A,
                    skuId: i ?? (null != C ? C.id : null),
                    showTrialBadge: p,
                    showPromoBadge: m || U,
                    storeCountryFromCheckoutContext: P,
                    isStoreCountryEnabled: v,
                    relocationCountry: S,
                });
                return (0, l.jsx)(T.s3, { ...e });
            }
            let e = null;
            return (
                b
                    ? (e = (0, l.jsxs)("div", {
                          className: ec.kL,
                          children: [
                              (0, l.jsx)("div", {
                                  "aria-hidden": !0,
                                  style: { display: "contents" },
                                  children: (0, l.jsx)(el.A, {
                                      defaultAnimationState: en.oA.LOOP,
                                      giftStyle: x,
                                      className: ec.qq,
                                  }),
                              }),
                              (0, l.jsx)(J.s_, { onClick: n, className: ec.b, "data-migration-pending": !0 }),
                          ],
                      }))
                    : j
                      ? (e = t(h ?? null, n, A))
                      : o === eu.VV.ONE_TIME
                        ? (e = (0, l.jsx)(ei.fs, { step: A, onClose: n }))
                        : D &&
                          ($()(i in eo.WN, `invalid sku id: ${i}`),
                          (e = (0, l.jsx)(er.A, {
                              currentStep: A ?? void 0,
                              purchaseState: a,
                              premiumType: eo.WN[i],
                              onClose: n,
                              showTrialBadge: p,
                              showDiscountBadge: m,
                              isGift: N,
                              giftRecipient: g,
                              isEligibleForTrial: p,
                              enablePremiumBrandRefresh: c,
                              isDisplayingWowMomentConfirmation: u,
                              isPremiumGroupPurchase: d,
                          }))),
                e
            );
        }, [w, v, P, S, x, n, a, t, h, C, i, A, p, m, U, b, D, j, o, N, g, c, u, d]);
    })({ renderHeader: eN, handleClose: tE });
    return (0, l.jsx)(A.e0, {
        children: (0, l.jsx)(s.b, {
            className: eh.Xn,
            isShaking: eb && eW === V.h.PURCHASING,
            intensity: 2,
            children: (0, l.jsx)(eA, {
                step: tl,
                transitionState: K,
                isGift: e8,
                giftRecipient: e9,
                returnRef: eO,
                manaModalSize: ti,
                modalSizeGetter: ta,
                handleClose: tE,
                children: (0, l.jsx)(ep.Ay, {
                    header: tf,
                    initialPlanId: Z,
                    subscriptionTier: z,
                    handleStepChange: tS,
                    handleClose: tE,
                    analyticsData: tc,
                    setAnalyticsData: td,
                    trialId: eC,
                    trialFooterMessageOverride: ey,
                    reviewWarningMessage: eE,
                    planGroup: eP,
                    openInvoiceId: eS,
                    analyticsLocation: u,
                    onSubscriptionConfirmation: ef,
                    renderPurchaseConfirmation: e_,
                    postSuccessGuild: eT,
                    followupSKUInfo: eI,
                    referralTrialOfferId: ev,
                    skipConfirm: eD,
                    continueSessionToInitialStep: ew,
                }),
            }),
        }),
    });
}
function eE(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: i,
            referralTrialOfferId: s,
            continueSessionToInitialStep: o,
        } = e,
        { hasPaymentSources: c } = (0, E.jm)(),
        { selectedSkuId: d, setSelectedPlanId: m } = (0, I.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: h,
            blockedPayments: A,
            hasFetchedSubscriptions: y,
            defaultPlanId: S,
            startedPaymentFlowWithPaymentSourcesRef: f,
        } = (0, W.P5)(),
        { hasFetchedRelatedSubscriptionPlans: _, subscriptionPriceOptionsLoading: T } = (0, P.Jn)(),
        { isGift: N } = (0, B.Pv)(),
        x = f.current,
        g = (0, Z.A)({ isGift: N, skuId: d, referralTrialOfferId: s }),
        [v, M] = r.useState(!0),
        R = (0, a.bG)([k.A], () => k.A.applicationIdsFetched.has(eo.tv));
    return (r.useEffect(() => {
        M(!y || !_ || T);
    }, [T, _, y]),
    (0, p.A)(
        "Payment Modal",
        v,
        5,
        { hasFetchedSubscriptions: y, hasFetchedSubscriptionPlans: _, subscriptionPriceOptionsLoading: T },
        { tags: { app_context: "billing" } },
    ),
    r.useEffect(() => {
        if ((R || (0, u.LM)(eo.tv), v || A)) return;
        let e = (0, K.vT)({ isTrial: g, isGift: N, selectedSkuId: d, startedPaymentFlowWithPaymentSources: x });
        null != o
            ? i(O.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: o })
            : null != n
              ? n !== eo.gD.PREMIUM_GROUP_MONTH || c
                  ? i(O.pn.REVIEW)
                  : i(O.pn.ADD_PAYMENT_STEPS)
              : e
                ? (m((0, K.xT)(d, h, S)), i(O.pn.REVIEW))
                : null != t
                  ? i(O.pn.PLAN_SELECT)
                  : i(O.pn.SKU_SELECT);
    }, [o, h, A, R, n, v, i, t, d, m, g, S, N, x, c]),
    v)
        ? (0, l.jsx)(ed.A, {})
        : A
          ? (0, l.jsx)(C.oO, {})
          : null;
}
