"use strict";
n.d(t, { I: () => er, PaymentModal: () => en });
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
    F = n(987616),
    V = n(615310),
    B = n(800471),
    H = n(169801),
    j = n(216641),
    Y = n(462309),
    W = n(534479),
    K = n(482132);
n(322076);
var $ = n(652215),
    z = n(788868),
    q = n(985018),
    Z = n(840771);
let X = 2,
    Q = "billing",
    J = { [k.pn.GIFT_CUSTOMIZATION]: "xl", [k.pn.REVIEW]: "md", [k.pn.ADD_PAYMENT_STEPS]: "md" },
    ee = (e, t) => {
        let { manaModalSizeFromProps: n } = t,
            r = n ?? "md";
        return null == e ? r : e in J ? J[e] : r;
    },
    et = (e) => {
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
                    : ee(t, { manaModalSizeFromProps: o });
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
function en(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: u,
            analyticsSourceLocation: _,
            analyticsSubscriptionType: p = $.rzx.PREMIUM,
            onComplete: E,
            transitionState: v,
            initialPlanId: D,
            subscriptionTier: B,
            onClose: H,
            trialId: W,
            trialFooterMessageOverride: Q,
            reviewWarningMessage: J,
            planGroup: ee = z.LE,
            openInvoiceId: en,
            onSubscriptionConfirmation: er,
            renderPurchaseConfirmation: ei,
            postSuccessGuild: es,
            followupSKUInfo: ea,
            renderHeader: eo,
            applicationId: el,
            guildId: eu,
            referralTrialOfferId: ec,
            skuId: ed,
            onStepChange: e_,
            shakeWhilePurchasing: ef = !1,
            isLargeModal: ep = !1,
            isMediumModal: eh = !1,
            returnRef: em,
            skipConfirm: eE = !1,
            continueSessionToInitialStep: eg,
            paymentModalVersion: eA = "v1",
        } = e,
        {
            activitySessionId: eI,
            purchaseState: eT,
            setPurchaseState: eS,
            selectedSkuId: ey,
            setSelectedSkuId: ev,
            selectedPlan: eN,
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
        eH = (0, F.S3)(),
        ej = (0, G.A)(),
        { isGift: eY, giftRecipient: eW, customGiftMessage: eK, emojiConfetti: e$, soundEffect: ez } = (0, x.Pv)(),
        eq = (0, V.bB)(),
        eZ = (0, V.l)(),
        eX = "sm";
    ep ? (eX = "xl") : (eh || eq === k.pn.ADD_PAYMENT_STEPS) && (eX = "md");
    let eQ = ej?.modalSizeGetter,
        eJ = (0, m.D7)({ location: "PaymentModal" }),
        e0 = (0, y.O)(),
        e1 = null != B && !eY && (0, N.U9)(e0, B),
        [e2, e3] = i.useState({
            load_id: eb.loadId,
            payment_type: $.frM[ek],
            location: a ?? u,
            source: _,
            subscription_type: p,
            subscription_plan_id: eN?.id ?? D,
            is_gift: eY,
            eligible_for_trial: null != W,
            location_stack: n,
            sku_id: ed,
            application_id: el,
            guild_id: eu,
            payment_modal_version: eA,
            activity_session_id: eI,
            eligible_for_discount: e1,
            sku_product_line: eH?.productLine,
            checkout_design: eJ ? m.rS.UNIFIED : m.rS.LEGACY,
            checkout_flow: eB,
            ...t,
        }),
        e6 = (0, j.W)(eP, ex),
        e4 = null != eF ? eF.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e3((e) => {
            let n = null != eN ? (0, M.y8)(eN.id, !1, eY, { paymentSourceId: ew.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eN?.id,
                price: n?.amount,
                regular_price: eN?.price,
                currency: eV,
                sku_id: ey,
                sku_product_line: eH?.productLine,
                ...t,
            };
        });
    }, [eN, ey, eY, ew, eV, t, eH?.productLine]),
        (0, f.Ay)(() => {
            (0, g.b)({
                ...e2,
                continue_session_initial_step: eg,
                custom_checkout_flow: eG,
                has_saved_payment_source: eM,
                discount_id: null != e0 ? e0.discount_id : e4,
            });
        }),
        i.useEffect(() => {
            null == eN && (null != eU && null != eg ? eC(eU) : eC(D)),
                null != ed ? ev(ed) : null != D && ev(b.A.get(D)?.skuId);
        }, [eC, eN, ev, D, ed, eU, eg]);
    let e5 = i.useCallback(() => {
            let e = (0, w.lo)(eW) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            L.default.track($.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e2,
                is_custom_message_edited: eY && e && null != eK ? eK !== q.intl.string(q.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eY && e,
                emoji_name: eY && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eY && e ? ez?.soundId : void 0,
                duration_ms: t - eb.startTime,
                payment_source_type: e6?.type,
            });
            let { enabled: n } = I.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eY && null != eW && null != a && n && (0, S.W)(a) && (0, T.Yd)(eW.id);
        }, [e2, e$, eK, eW, eY, ez, eb.startTime, e6, a]),
        e7 = i.useMemo(() => () => H?.(eT === U.h.COMPLETED, ey), [H, eT, ey]),
        e8 = (0, s.A)(() => Date.now(), [eq]),
        e9 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === k.pn.CONFIRM && (e5(), E?.(i), eE)) return void e7();
                eZ(e), e_?.(e), eR(null), e === k.pn.ADD_PAYMENT_STEPS && (l.h.wait(c.ET), l.h.wait(d.T3));
                let o = null != n ? n : eq;
                null === o || s
                    ? L.default.track($.HAw.PAYMENT_FLOW_LOADED, {
                          ...e2,
                          initial_step: o ?? e,
                          continue_session_initial_step: eg,
                          has_saved_payment_source: eM,
                      })
                    : L.default.track($.HAw.PAYMENT_FLOW_STEP, {
                          ...e2,
                          ...r,
                          from_step: o,
                          to_step: e === k.pn.ADD_PAYMENT_STEPS ? k.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - e8,
                          flow_duration_ms: a - eb.startTime,
                      });
            },
            [eZ, e_, eR, eq, eg, e2, e8, eb.startTime, e5, E, eE, e7, eM],
        );
    (0, C.b)(eq, eO, e9, eS),
        (0, k.zT)(eq, eT, eS),
        (0, R.Q)(eq, eD, e9),
        (0, A.A)(e7),
        (0, O.s)(eL, () => H(!1), eY),
        (0, C.QR)(eO);
    let te = {
            initialPlanId: D,
            subscriptionTier: B,
            handleStepChange: e9,
            handleClose: e7,
            analyticsData: e2,
            setAnalyticsData: e3,
            trialId: W,
            trialFooterMessageOverride: Q,
            reviewWarningMessage: J,
            planGroup: ee,
            openInvoiceId: en,
            analyticsLocation: a,
            onSubscriptionConfirmation: er,
            renderPurchaseConfirmation: ei,
            postSuccessGuild: es,
            followupSKUInfo: ea,
            referralTrialOfferId: ec,
            skipConfirm: eE,
            continueSessionToInitialStep: eg,
        },
        tt = (0, Y.L)({ renderHeader: eo, handleClose: e7 });
    return (0, r.jsx)(h.e0, {
        children: (0, r.jsx)(o.bfh, {
            className: Z.Xn,
            isShaking: ef && eT === U.h.PURCHASING,
            intensity: X,
            children: (0, r.jsx)(et, {
                step: eq,
                transitionState: v,
                isGift: eY,
                giftRecipient: eW,
                returnRef: em,
                manaModalSize: eX,
                modalSizeGetter: eQ,
                handleClose: e7,
                children: (0, r.jsx)(K.Ay, { header: tt, ...te }),
            }),
        }),
    });
}
function er(e) {
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
        v = (0, H.A)({ isGift: S, skuId: E, referralTrialOfferId: o }),
        [N, C] = i.useState(!0),
        R = (0, a.bG)([D.A], () => D.A.applicationIdsFetched.has(z.tv));
    return (i.useEffect(() => {
        C(!f || !h || m);
    }, [m, h, f]),
    (0, _.A)(
        "Payment Modal",
        N,
        5,
        { hasFetchedSubscriptions: f, hasFetchedSubscriptionPlans: h, currencyLoading: m },
        { tags: { app_context: Q } },
    ),
    i.useEffect(() => {
        if ((R || (0, u.LM)(z.tv), N || d)) return;
        let e = (0, B.vT)({ isTrial: v, isGift: S, selectedSkuId: E, startedPaymentFlowWithPaymentSources: y });
        null != l
            ? s(k.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: l })
            : null != n
              ? n !== z.gD.PREMIUM_GROUP_MONTH || T
                  ? s(k.pn.REVIEW)
                  : s(k.pn.ADD_PAYMENT_STEPS)
              : e
                ? (g((0, B.xT)(E, c, A)), s(k.pn.REVIEW))
                : null != t
                  ? s(k.pn.PLAN_SELECT)
                  : s(k.pn.SKU_SELECT);
    }, [l, c, d, R, n, N, s, t, E, g, v, A, S, y, T]),
    N)
        ? (0, r.jsx)(W.A, {})
        : d
          ? (0, r.jsx)(p.oO, {})
          : null;
}
