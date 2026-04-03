"use strict";
n.d(t, { I: () => ei, PaymentModal: () => er });
var r = n(627968),
    i = n(64700),
    s = n(330140),
    a = n(417597),
    o = n(397927),
    l = n(73153),
    u = n(339048),
    c = n(158032),
    d = n(830382),
    _ = n(428644),
    f = n(964486),
    p = n(459793),
    h = n(725836),
    m = n(742810),
    E = n(169797),
    g = n(357669),
    A = n(319437),
    I = n(70730),
    T = n(45787),
    S = n(51501),
    y = n(422936),
    v = n(612669),
    N = n(511484),
    C = n(251913),
    R = n(869573),
    O = n(344159),
    b = n(97352),
    D = n(469778),
    L = n(954571),
    w = n(45938),
    M = n(927578),
    x = n(937008),
    P = n(156312),
    k = n(166532),
    U = n(566980),
    G = n(379174),
    F = n(970077),
    V = n(987616),
    B = n(615310),
    H = n(800471),
    j = n(169801),
    Y = n(216641),
    W = n(462309),
    K = n(534479),
    $ = n(482132);
n(322076);
var z = n(652215),
    q = n(788868),
    Z = n(985018),
    X = n(840771);
let Q = 2,
    J = "billing",
    ee = { [k.pn.GIFT_CUSTOMIZATION]: "xl", [k.pn.REVIEW]: "md", [k.pn.ADD_PAYMENT_STEPS]: "md" },
    et = (e, t) => {
        let { manaModalSizeFromProps: n } = t,
            r = n ?? "md";
        return null == e ? r : e in ee ? ee[e] : r;
    },
    en = (e) => {
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
            d = (0, v.FY)({ isGift: s }),
            _ =
                null != l
                    ? l({ canCurrentlyPurchasePremiumGroup: d, isGift: s, giftRecipient: a })
                    : et(t, { manaModalSizeFromProps: o });
        return (0, r.jsx)(E.Jg, {
            transitionState: n,
            size: _,
            returnRef: u,
            onClose: async () => {
                await i();
            },
            children: c,
        });
    };
function er(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: u,
            analyticsSourceLocation: _,
            analyticsSubscriptionType: p = z.rzx.PREMIUM,
            onComplete: E,
            transitionState: v,
            initialPlanId: D,
            subscriptionTier: H,
            onClose: j,
            trialId: K,
            trialFooterMessageOverride: J,
            reviewWarningMessage: ee,
            planGroup: et = q.LE,
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
            isMediumModal: em = !1,
            returnRef: eE,
            skipConfirm: eg = !1,
            continueSessionToInitialStep: eA,
            paymentModalVersion: eI = "v1",
        } = e,
        {
            activitySessionId: eT,
            purchaseState: eS,
            setPurchaseState: ey,
            selectedSkuId: ev,
            setSelectedSkuId: eN,
            setSelectedPlanId: eC,
            setPurchaseError: eR,
            paymentAuthenticationState: eO,
            contextMetadata: eb,
            purchaseTokenAuthState: eD,
            activeSubscription: eL,
            priceOptions: ew,
            hasPaymentSources: eM,
            paymentSourceId: ex,
            paymentSources: eP,
            purchaseType: ek,
            defaultPlanId: eU,
            customCheckoutFlow: eG,
            invoicePreview: eF,
            displayCurrency: eV,
            unifiedCheckoutFlow: eB,
        } = (0, P.P5)(),
        eH = (0, F.A)(),
        ej = (0, V.S3)(),
        eY = (0, G.A)(),
        { isGift: eW, giftRecipient: eK, customGiftMessage: e$, emojiConfetti: ez, soundEffect: eq } = (0, x.Pv)(),
        eZ = (0, B.bB)(),
        eX = (0, B.l)(),
        eQ = "sm";
    eh ? (eQ = "xl") : (em || eZ === k.pn.ADD_PAYMENT_STEPS) && (eQ = "md");
    let eJ = eY?.modalSizeGetter,
        e0 = (0, m.D7)({ location: "PaymentModal" }),
        e1 = (0, y.O)(),
        e2 = null != H && !eW && (0, N.U9)(e1, H),
        [e3, e6] = i.useState({
            load_id: eb.loadId,
            payment_type: z.frM[ek],
            location: a ?? u,
            source: _,
            subscription_type: p,
            subscription_plan_id: eH?.id ?? D,
            is_gift: eW,
            eligible_for_trial: null != K,
            location_stack: n,
            sku_id: e_,
            application_id: eu,
            guild_id: ec,
            payment_modal_version: eI,
            activity_session_id: eT,
            eligible_for_discount: e2,
            sku_product_line: ej?.productLine,
            checkout_design: e0 ? m.rS.UNIFIED : m.rS.LEGACY,
            checkout_flow: eB,
            ...t,
        }),
        e4 = (0, Y.W)(eP, ex),
        e5 = null != eF ? eF.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e6((e) => {
            let n = null != eH ? (0, M.y8)(eH.id, !1, eW, { paymentSourceId: ew.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eH?.id,
                price: n?.amount,
                regular_price: eH?.price,
                currency: eV,
                sku_id: ev,
                sku_product_line: ej?.productLine,
                ...t,
            };
        });
    }, [eH, ev, eW, ew, eV, t, ej?.productLine]),
        (0, f.Ay)(() => {
            (0, g.b)({
                ...e3,
                continue_session_initial_step: eA,
                custom_checkout_flow: eG,
                has_saved_payment_source: eM,
                discount_id: null != e1 ? e1.discount_id : e5,
            });
        }),
        i.useEffect(() => {
            null == eH && (null != eU && null != eA ? eC(eU) : eC(D)),
                null != e_ ? eN(e_) : null != D && eN(b.A.get(D)?.skuId);
        }, [eC, eH, eN, D, e_, eU, eA]);
    let e7 = i.useCallback(() => {
            let e = (0, w.lo)(eK) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            L.default.track(z.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e3,
                is_custom_message_edited: eW && e && null != e$ ? e$ !== Z.intl.string(Z.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eW && e,
                emoji_name: eW && e && ez?.id == null ? ez?.surrogates : void 0,
                sound_id: eW && e ? eq?.soundId : void 0,
                duration_ms: t - eb.startTime,
                payment_source_type: e4?.type,
            });
            let { enabled: n } = I.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eW && null != eK && null != a && n && (0, S.W)(a) && (0, T.Yd)(eK.id);
        }, [e3, ez, e$, eK, eW, eq, eb.startTime, e4, a]),
        e8 = i.useMemo(() => () => j?.(eS === U.h.COMPLETED, ev), [j, eS, ev]),
        e9 = (0, s.A)(() => Date.now(), [eZ]),
        te = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === k.pn.CONFIRM && (e7(), E?.(i), eg)) return void e8();
                eX(e), ef?.(e), eR(null), e === k.pn.ADD_PAYMENT_STEPS && (l.h.wait(c.ET), l.h.wait(d.T3));
                let o = null != n ? n : eZ;
                null === o || s
                    ? L.default.track(z.HAw.PAYMENT_FLOW_LOADED, {
                          ...e3,
                          initial_step: o ?? e,
                          continue_session_initial_step: eA,
                          has_saved_payment_source: eM,
                      })
                    : L.default.track(z.HAw.PAYMENT_FLOW_STEP, {
                          ...e3,
                          ...r,
                          from_step: o,
                          to_step: e === k.pn.ADD_PAYMENT_STEPS ? k.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - e9,
                          flow_duration_ms: a - eb.startTime,
                      });
            },
            [eX, ef, eR, eZ, eA, e3, e9, eb.startTime, e7, E, eg, e8, eM],
        );
    (0, C.b)(eZ, eO, te, ey),
        (0, k.zT)(eZ, eS, ey),
        (0, R.Q)(eZ, eD, te),
        (0, A.A)(e8),
        (0, O.s)(eL, () => j(!1), eW),
        (0, C.QR)(eO);
    let tt = {
            initialPlanId: D,
            subscriptionTier: H,
            handleStepChange: te,
            handleClose: e8,
            analyticsData: e3,
            setAnalyticsData: e6,
            trialId: K,
            trialFooterMessageOverride: J,
            reviewWarningMessage: ee,
            planGroup: et,
            openInvoiceId: er,
            analyticsLocation: a,
            onSubscriptionConfirmation: ei,
            renderPurchaseConfirmation: es,
            postSuccessGuild: ea,
            followupSKUInfo: eo,
            referralTrialOfferId: ed,
            skipConfirm: eg,
            continueSessionToInitialStep: eA,
        },
        tn = (0, W.L)({ renderHeader: el, handleClose: e8 });
    return (0, r.jsx)(h.e0, {
        children: (0, r.jsx)(o.bfh, {
            className: X.Xn,
            isShaking: ep && eS === U.h.PURCHASING,
            intensity: Q,
            children: (0, r.jsx)(en, {
                step: eZ,
                transitionState: v,
                isGift: eW,
                giftRecipient: eK,
                returnRef: eE,
                manaModalSize: eQ,
                modalSizeGetter: eJ,
                handleClose: e8,
                children: (0, r.jsx)($.Ay, { header: tn, ...tt }),
            }),
        }),
    });
}
function ei(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: s,
            referralTrialOfferId: o,
            continueSessionToInitialStep: l,
        } = e,
        {
            activeSubscription: c,
            blockedPayments: d,
            hasFetchedSubscriptions: f,
            hasFetchedSubscriptionPlans: h,
            currencyLoading: m,
            selectedSkuId: E,
            setSelectedPlanId: g,
            defaultPlanId: A,
            startedPaymentFlowWithPaymentSourcesRef: I,
            hasPaymentSources: T,
        } = (0, P.P5)(),
        { isGift: S } = (0, x.Pv)(),
        y = I.current,
        v = (0, j.A)({ isGift: S, skuId: E, referralTrialOfferId: o }),
        [N, C] = i.useState(!0),
        R = (0, a.bG)([D.A], () => D.A.applicationIdsFetched.has(q.tv));
    return (i.useEffect(() => {
        C(!f || !h || m);
    }, [m, h, f]),
    (0, _.A)(
        "Payment Modal",
        N,
        5,
        { hasFetchedSubscriptions: f, hasFetchedSubscriptionPlans: h, currencyLoading: m },
        { tags: { app_context: J } },
    ),
    i.useEffect(() => {
        if ((R || (0, u.LM)(q.tv), N || d)) return;
        let e = (0, H.vT)({ isTrial: v, isGift: S, selectedSkuId: E, startedPaymentFlowWithPaymentSources: y });
        null != l
            ? s(k.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: l })
            : null != n
              ? n !== q.gD.PREMIUM_GROUP_MONTH || T
                  ? s(k.pn.REVIEW)
                  : s(k.pn.ADD_PAYMENT_STEPS)
              : e
                ? (g((0, H.xT)(E, c, A)), s(k.pn.REVIEW))
                : null != t
                  ? s(k.pn.PLAN_SELECT)
                  : s(k.pn.SKU_SELECT);
    }, [l, c, d, R, n, N, s, t, E, g, v, A, S, y, T]),
    N)
        ? (0, r.jsx)(K.A, {})
        : d
          ? (0, r.jsx)(p.oO, {})
          : null;
}
