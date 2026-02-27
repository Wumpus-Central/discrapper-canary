"use strict";
n.d(t, { I: () => et, PaymentModal: () => ee });
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
    h = n(608805),
    m = n(725836),
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
    b = n(869573),
    R = n(344159),
    O = n(97352),
    D = n(469778),
    L = n(954571),
    w = n(45938),
    x = n(927578),
    M = n(937008),
    P = n(156312),
    k = n(166532),
    U = n(566980),
    G = n(379174),
    F = n(800471),
    V = n(169801),
    B = n(216641),
    H = n(462309),
    j = n(534479),
    Y = n(482132);
n(322076);
var W = n(652215),
    K = n(788868),
    z = n(985018),
    $ = n(898772);
let q = 2,
    Z = "billing",
    X = { [o.rIJ.SMALL]: "sm", [o.rIJ.MEDIUM]: "md", [o.rIJ.LARGE]: "xl", [o.rIJ.DYNAMIC]: "md" },
    Q = (e, t) => {
        let { isGift: n, canPurchasePremiumGroupNow: r, legacyModalSize: i } = t,
            s = X[i];
        if (null == e) return s;
        let a = {
            [k.pn.PLAN_SELECT]: n ? "xl" : "md",
            [k.pn.SKU_SELECT]: r ? "xl" : "md",
            [k.pn.SELECT_FREE_SKU]: "lg",
            [k.pn.GIFT_CUSTOMIZATION]: "xl",
            [k.pn.REVIEW]: "md",
            [k.pn.ADD_PAYMENT_STEPS]: "md",
        };
        return e in a ? a[e] : s;
    },
    J = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: i,
                isGift: s,
                legacyModalSize: a,
                returnRef: o,
                children: l,
            } = e,
            u = (0, v.FY)({ isGift: s }),
            c = Q(t, { isGift: s, canPurchasePremiumGroupNow: u, legacyModalSize: a });
        return (0, r.jsx)(E.Jg, {
            transitionState: n,
            size: c,
            returnRef: o,
            onClose: async () => {
                await i();
            },
            children: l,
        });
    };
function ee(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: u,
            analyticsSourceLocation: _,
            analyticsSubscriptionType: p = W.rzx.PREMIUM,
            onComplete: E,
            transitionState: v,
            initialPlanId: D,
            subscriptionTier: F,
            onClose: V,
            trialId: j,
            trialFooterMessageOverride: Z,
            reviewWarningMessage: X,
            planGroup: Q = K.LE,
            openInvoiceId: ee,
            onSubscriptionConfirmation: et,
            renderPurchaseConfirmation: en,
            postSuccessGuild: er,
            followupSKUInfo: ei,
            renderHeader: es,
            applicationId: ea,
            guildId: eo,
            referralTrialOfferId: el,
            skuId: eu,
            onStepChange: ec,
            shakeWhilePurchasing: ed = !1,
            isLargeModal: e_ = !1,
            isMediumModal: ef = !1,
            isDynamicModal: ep = !1,
            returnRef: eh,
            skipConfirm: em = !1,
            continueSessionToInitialStep: eE,
            paymentModalVersion: eg = "v1",
        } = e,
        {
            activitySessionId: eA,
            purchaseState: eI,
            setPurchaseState: eT,
            selectedSkuId: eS,
            setSelectedSkuId: ey,
            selectedPlan: ev,
            setSelectedPlanId: eN,
            setSelectedPlanNotification: eC,
            setStep: eb,
            setPurchaseError: eR,
            paymentAuthenticationState: eO,
            step: eD,
            selectedSku: eL,
            contextMetadata: ew,
            purchaseTokenAuthState: ex,
            activeSubscription: eM,
            priceOptions: eP,
            hasPaymentSources: ek,
            paymentSourceId: eU,
            paymentSources: eG,
            purchaseType: eF,
            defaultPlanId: eV,
            customCheckoutFlow: eB,
            invoicePreview: eH,
        } = (0, P.P5)(),
        ej = (0, G.A)(),
        { isGift: eY, giftRecipient: eW, customGiftMessage: eK, emojiConfetti: ez, soundEffect: e$ } = (0, M.Pv)(),
        eq = o.rIJ.SMALL;
    e_ || ej?.isLargeModal
        ? (eq = o.rIJ.LARGE)
        : ef || ej?.isMediumModal
          ? (eq = o.rIJ.MEDIUM)
          : (eD === k.pn.ADD_PAYMENT_STEPS || ep || ej?.isDynamicModal) && (eq = o.rIJ.DYNAMIC);
    let eZ = (0, h.D7)({ location: "PaymentModal" }),
        eX = (0, y.O)(),
        eQ = null != F && !eY && (0, N.U9)(eX, F),
        [eJ, e0] = i.useState({
            load_id: ew.loadId,
            payment_type: W.frM[eF],
            location: a ?? u,
            source: _,
            subscription_type: p,
            subscription_plan_id: ev?.id,
            is_gift: eY,
            eligible_for_trial: null != j,
            location_stack: n,
            sku_id: eu,
            application_id: ea,
            guild_id: eo,
            payment_modal_version: eg,
            activity_session_id: eA,
            eligible_for_discount: eQ,
            sku_product_line: eL?.productLine,
            checkout_design: eZ ? h.rS.UNIFIED : h.rS.LEGACY,
            ...t,
        }),
        e1 = (0, B.W)(eG, eU),
        e2 = null != eH ? eH.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e0((e) => {
            let n = null != ev ? (0, x.y8)(ev.id, !1, eY, eP) : void 0;
            return {
                ...e,
                subscription_plan_id: ev?.id,
                price: n?.amount,
                regular_price: ev?.price,
                currency: eP.currency,
                sku_id: eS,
                sku_product_line: eL?.productLine,
                ...t,
            };
        });
    }, [ev, eS, eY, eP, t, eL?.productLine]),
        (0, f.Ay)(() => {
            (0, g.b)({
                ...eJ,
                continue_session_initial_step: eE,
                custom_checkout_flow: eB,
                has_saved_payment_source: ek,
                discount_id: null != eX ? eX.discount_id : e2,
            });
        }),
        i.useEffect(() => {
            null == ev && (null != eV && null != eE ? eN(eV) : eN(D)),
                null != eu ? ey(eu) : null != D && ey(O.A.get(D)?.skuId);
        }, [eN, ev, ey, D, eu, eV, eE]);
    let e3 = i.useCallback(() => {
            let e = (0, w.lo)(eW) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            L.default.track(W.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...eJ,
                is_custom_message_edited: eY && e && null != eK ? eK !== z.intl.string(z.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eY && e,
                emoji_name: eY && e && ez?.id == null ? ez?.surrogates : void 0,
                sound_id: eY && e ? e$?.soundId : void 0,
                duration_ms: t - ew.startTime,
                payment_source_type: e1?.type,
            });
            let { enabled: n } = I.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eY && null != eW && null != a && n && (0, S.W)(a) && (0, T.Yd)(eW.id);
        }, [eJ, ez, eK, eW, eY, e$, ew.startTime, e1, a]),
        e6 = i.useMemo(() => () => V?.(eI === U.h.COMPLETED, eS), [V, eI, eS]),
        e4 = (0, s.A)(() => Date.now(), [eD]),
        e5 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === k.pn.CONFIRM && (e3(), E?.(i), em)) return void e6();
                eb(e), ec?.(e), eR(null), eC(null), e === k.pn.ADD_PAYMENT_STEPS && (l.h.wait(c.ET), l.h.wait(d.T3));
                let o = null != n ? n : eD;
                null === o || s
                    ? L.default.track(W.HAw.PAYMENT_FLOW_LOADED, {
                          ...eJ,
                          initial_step: o ?? e,
                          continue_session_initial_step: eE,
                          has_saved_payment_source: ek,
                      })
                    : L.default.track(W.HAw.PAYMENT_FLOW_STEP, {
                          ...eJ,
                          ...r,
                          from_step: o,
                          to_step: e === k.pn.ADD_PAYMENT_STEPS ? k.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - e4,
                          flow_duration_ms: a - ew.startTime,
                      });
            },
            [eb, ec, eR, eC, eD, eE, eJ, e4, ew.startTime, e3, E, em, e6, ek],
        );
    (0, C.b)(eD, eO, e5, eT),
        (0, k.zT)(eD, eI, eT),
        (0, b.Q)(eD, ex, e5),
        (0, A.A)(e6),
        (0, R.s)(eM, () => V(!1), eY),
        (0, C.QR)(eO);
    let e7 = {
            initialPlanId: D,
            subscriptionTier: F,
            handleStepChange: e5,
            handleClose: e6,
            analyticsData: eJ,
            setAnalyticsData: e0,
            trialId: j,
            trialFooterMessageOverride: Z,
            reviewWarningMessage: X,
            planGroup: Q,
            openInvoiceId: ee,
            analyticsLocation: a,
            onSubscriptionConfirmation: et,
            renderPurchaseConfirmation: en,
            postSuccessGuild: er,
            followupSKUInfo: ei,
            referralTrialOfferId: el,
            skipConfirm: em,
            continueSessionToInitialStep: eE,
        },
        e8 = (0, H.L)({ renderHeader: es, handleClose: e6 });
    return (0, r.jsx)(m.e0, {
        children: (0, r.jsx)(o.bfh, {
            className: $.Xn,
            isShaking: ed && eI === U.h.PURCHASING,
            intensity: q,
            children: (0, r.jsx)(J, {
                step: eD,
                transitionState: v,
                isGift: eY,
                returnRef: eh,
                legacyModalSize: eq,
                handleClose: e6,
                children: (0, r.jsx)(Y.Ay, {
                    header: e8,
                    isLargeModal: e_ || ej?.isLargeModal,
                    isDynamicModal: ep || ej?.isDynamicModal,
                    ...e7,
                }),
            }),
        }),
    });
}
function et(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: s,
            referralTrialOfferId: o,
            handleClose: l,
            continueSessionToInitialStep: c,
        } = e,
        {
            activeSubscription: d,
            blockedPayments: f,
            hasFetchedSubscriptions: h,
            hasFetchedSubscriptionPlans: m,
            currencyLoading: E,
            selectedSkuId: g,
            setSelectedPlanId: A,
            defaultPlanId: I,
            startedPaymentFlowWithPaymentSourcesRef: T,
            hasPaymentSources: S,
        } = (0, P.P5)(),
        { isGift: y } = (0, M.Pv)(),
        v = T.current,
        N = (0, V.A)({ isGift: y, skuId: g, referralTrialOfferId: o }),
        [C, b] = i.useState(!0),
        R = (0, a.bG)([D.A], () => D.A.applicationIdsFetched.has(K.tv));
    return (i.useEffect(() => {
        b(!h || !m || E);
    }, [E, m, h]),
    (0, _.A)(
        "Payment Modal",
        C,
        5,
        { hasFetchedSubscriptions: h, hasFetchedSubscriptionPlans: m, currencyLoading: E },
        { tags: { app_context: Z } },
    ),
    i.useEffect(() => {
        if ((R || (0, u.LM)(K.tv), C || f)) return;
        let e = (0, F.vT)({ isTrial: N, isGift: y, selectedSkuId: g, startedPaymentFlowWithPaymentSources: v });
        null != c
            ? s(k.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: c })
            : null != n
              ? n !== K.gD.PREMIUM_GROUP_MONTH || S
                  ? s(k.pn.REVIEW)
                  : s(k.pn.ADD_PAYMENT_STEPS)
              : e
                ? (A((0, F.xT)(g, d, I)), s(k.pn.REVIEW))
                : null != t
                  ? s(k.pn.PLAN_SELECT)
                  : s(k.pn.SKU_SELECT);
    }, [c, d, f, R, n, C, s, t, g, A, N, I, y, v, S]),
    C)
        ? (0, r.jsx)(j.A, {})
        : f
          ? (0, r.jsx)(p.oO, { onClose: l })
          : null;
}
