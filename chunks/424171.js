n.d(t, { q: () => en });
var i = n(477900),
    s = n(582128),
    l = n(999129),
    a = n(702841),
    u = n(568602),
    o = n(228366),
    r = n(158032),
    c = n(830382),
    d = n(964486),
    _ = n(11939),
    p = n(145659),
    E = n(202475),
    S = n(31823),
    A = n(211083),
    f = n(655857),
    m = n(883645),
    T = n(666646),
    h = n(558620),
    I = n(427675),
    P = n(480642),
    k = n(316915),
    y = n(174459),
    v = n(840251),
    C = n(688151),
    M = n(652215);
let D = new v.E([], C.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var N = n(319437),
    g = n(70730),
    O = n(45787),
    w = n(51501),
    b = n(422936),
    R = n(862990),
    U = n(410516),
    x = n(251913),
    G = n(166532),
    Y = n(71319),
    F = n(344159),
    H = n(97352),
    W = n(45938),
    j = n(428262),
    L = n(951305),
    z = n(566980),
    q = n(216641),
    V = n(580133);
function J(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, m.s2)();
    return s.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function K(e) {
    let { step: t } = e;
    return t === G.pn.REVIEW ? (0, i.jsx)(V.l, {}) : (0, i.jsx)(V.f, {});
}
function Z(e) {
    let { renderHeader: t, handleClose: n } = e,
        l = (0, m.s2)();
    return s.useMemo(
        () =>
            l === G.pn.REVIEW || l === G.pn.ADD_PAYMENT_STEPS
                ? (0, i.jsx)(K, { step: l })
                : (0, i.jsx)(J, { renderHeader: t, handleClose: n }),
        [t, n, l],
    );
}
var B = n(482132);
n(322076);
var Q = n(202541),
    X = n(375708),
    $ = n(821547);
let ee = { [G.pn.GIFT_CUSTOMIZATION]: "xl", [G.pn.REVIEW]: "md", [G.pn.ADD_PAYMENT_STEPS]: "md" };
function et(e) {
    let {
            step: t,
            transitionState: n,
            handleClose: s,
            isGift: l,
            giftRecipient: a,
            manaModalSize: u,
            modalSizeGetter: o,
            returnRef: r,
            children: c,
        } = e,
        d = (0, R.FY)({ isGift: l }),
        _ =
            null != o
                ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: l, giftRecipient: a })
                : (function (e, t) {
                      let { manaModalSizeFromProps: n } = t,
                          i = n ?? "md";
                      return null == e ? i : e in ee ? ee[e] : i;
                  })(t, { manaModalSizeFromProps: u });
    return (0, i.jsx)(P.Jg, {
        transitionState: n,
        size: _,
        returnRef: r,
        "aria-label": X.intl.string(X.t.q9EGps),
        onClose: async () => {
            await s();
        },
        children: c,
    });
}
function en(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: P,
            analyticsObject: v,
            analyticsSourceLocation: C,
            analyticsSubscriptionType: R = M.rzx.PREMIUM,
            onComplete: V,
            transitionState: J,
            initialPlanId: K,
            subscriptionTier: ee,
            onClose: en,
            trialId: ei,
            reviewWarningMessage: es,
            planGroup: el = Q.LE,
            openInvoiceId: ea,
            onSubscriptionConfirmation: eu,
            renderPurchaseConfirmation: eo,
            postSuccessGuild: er,
            followupSKUInfo: ec,
            renderHeader: ed,
            disableUnsupportedExternalSubscriptionHandler: e_ = !1,
            applicationId: ep,
            guildId: eE,
            skuId: eS,
            onStepChange: eA,
            shakeWhilePurchasing: ef = !1,
            isLargeModal: em = !1,
            isMediumModal: eT = !1,
            returnRef: eh,
            skipConfirm: eI = !1,
            continueSessionToInitialStep: eP,
            startingStepOverride: ek,
            tenantManagesPaymentAuth: ey = !1,
            paymentModalVersion: ev = "v1",
        } = e,
        { paymentSources: eC, hasPaymentSources: eM } = (0, E.jm)(),
        {
            selectedSkuId: eD,
            setSelectedSkuId: eN,
            setSelectedPlanId: eg,
            purchaseState: eO,
            setPurchaseState: ew,
            contextMetadata: eb,
            paymentSourceId: eR,
            setPurchaseError: eU,
            priceOptions: ex,
            activeSubscription: eG,
            purchaseType: eY,
            defaultPlanId: eF,
            customCheckoutFlow: eH,
            unifiedCheckoutFlow: eW,
            quantity: ej,
        } = (0, k.t4)((e) => ({
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
            quantity: e.quantity,
        })),
        { displayCurrency: eL } = (0, f.Jn)(),
        { activitySessionId: ez } = (0, S.V)(),
        { paymentAuthenticationState: eq } = (0, A.o)(),
        eV = (0, a.bG)([Y.A], () => Y.A.purchaseTokenAuthState),
        eJ = (0, T.sw)(),
        eK = (0, h.A)(),
        eZ = (0, I.S3)(),
        { isGift: eB, giftRecipient: eQ, customGiftMessage: eX, emojiConfetti: e$, soundEffect: e0 } = (0, L.Pv)(),
        e1 = (0, m.Z8)(),
        e2 = (0, m.s2)(),
        e5 = s.useMemo(() => {
            if (null != e1) return e1.options;
        }, [e1]),
        e6 = (0, m.qv)(),
        e4 = "sm";
    em ? (e4 = "xl") : (eT || e2 === G.pn.ADD_PAYMENT_STEPS) && (e4 = "md");
    let e8 = null != e5 ? e5.modalSizeGetter : void 0,
        e3 = (0, b.O)(),
        e9 = null != ee && !eB && (0, U.U9)(e3, ee),
        [e7, te] = s.useState({
            load_id: eb.loadId,
            discovery_session_id: eb.discoverySessionId,
            payment_type: M.frM[eY],
            location: P ?? v,
            source: C,
            subscription_type: R,
            subscription_plan_id: eK?.id ?? K,
            is_gift: eB,
            eligible_for_trial: null != ei,
            location_stack: n,
            sku_id: eS,
            application_id: ep,
            guild_id: eE,
            payment_modal_version: ev,
            activity_session_id: ez,
            eligible_for_discount: e9,
            sku_product_line: eZ?.productLine,
            quantity: ej,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eW,
            open_invoice_id: ea,
            ...t,
        }),
        tt = (0, q.W)(eC, eR),
        { giftCardBalance: tn, giftCardCurrency: ti } = (0, _.h)(),
        ts = null != eJ ? eJ.getDiscountIdIfExists() : void 0;
    s.useEffect(() => {
        te((e) => {
            let n = null != eK ? (0, j.y8)(eK.id, !1, eB, { paymentSourceId: ex.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eK?.id,
                price: n?.amount,
                regular_price: eK?.price,
                currency: eL,
                sku_id: eD,
                sku_product_line: eZ?.productLine,
                quantity: ej,
                ...t,
            };
        });
    }, [eK, eD, eB, ex, eL, t, eZ?.productLine, ej]),
        (0, d.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                y.default.track(M.HAw.PAYMENT_FLOW_STARTED, e, t), D.trigger();
            })({
                ...e7,
                continue_session_initial_step: eP,
                custom_checkout_flow: eH,
                has_saved_payment_source: eM,
                discount_id: null != e3 ? e3.discountId : ts,
            });
        }),
        s.useEffect(() => {
            null == eK && (null != eF && null != eP ? eg(eF) : eg(K)),
                null != eS ? eN(eS) : null != K && eN(H.A.get(K)?.skuId);
        }, [eg, eK, eN, K, eS, eF, eP]);
    let tl = s.useCallback(() => {
            let e = (0, W.lo)(eQ) === W.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            y.default.track(M.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e7,
                is_custom_message_edited: eB && e && null != eX ? eX !== X.intl.string(X.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eB && e,
                emoji_name: eB && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eB && e ? e0?.soundId : void 0,
                duration_ms: t - eb.startTime,
                payment_source_type: tt?.type,
                gift_card_balance: tn,
                gift_card_currency: ti,
            });
        }, [e7, e$, eX, eQ, eB, e0, eb.startTime, tt, tn, ti]),
        ta = s.useCallback(() => {
            let { enabled: e } = g.u.getConfig({ location: "maybeSoftDismissGiftIntentOnPurchase" }),
                t = null != P ? (0, w.NE)(P) : null;
            eB && null != eQ && e && null != t && (0, O.Yd)(eQ.id, t);
        }, [P, eB, eQ]),
        tu = s.useMemo(() => () => en?.(eO === z.h.COMPLETED, eD), [en, eO, eD]),
        to = (0, l.A)(() => Date.now(), [e2]),
        tr = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: s, emitPaymentFlowLoadedEvent: l } = t,
                    a = Date.now();
                if (e === G.pn.CONFIRM && (tl(), V?.(s), ta(), eI)) return void tu();
                e6(e), eA?.(e), eU(null), e === G.pn.ADD_PAYMENT_STEPS && (o.h.wait(r.ET), o.h.wait(c.T3));
                let u = null != n ? n : e2;
                null === u || l
                    ? y.default.track(M.HAw.PAYMENT_FLOW_LOADED, {
                          ...e7,
                          initial_step: u ?? e,
                          continue_session_initial_step: eP,
                          has_saved_payment_source: eM,
                      })
                    : y.default.track(M.HAw.PAYMENT_FLOW_STEP, {
                          ...e7,
                          ...i,
                          from_step: u,
                          to_step: e === G.pn.ADD_PAYMENT_STEPS ? G.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - to,
                          flow_duration_ms: a - eb.startTime,
                          gift_card_balance: tn,
                          gift_card_currency: ti,
                      });
            },
            [e6, eA, eU, e2, eP, e7, to, eb.startTime, tl, V, ta, eI, tu, eM, tn, ti],
        );
    return (
        (0, x.b)(e2, eq, tr, ew, !1, void 0, ey),
        s.useEffect(() => {
            null != e2 && e2 !== G.pn.AWAITING_PURCHASE_TOKEN_AUTH && eV === Y.C.PENDING
                ? tr(G.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e2 === G.pn.AWAITING_PURCHASE_TOKEN_AUTH && eV === Y.C.SUCCESS && tr(G.pn.REVIEW);
        }, [e2, eV, tr]),
        (0, N.A)(tu),
        (0, F.s)(eG, () => en(!1), eB, !e_),
        (0, x.QR)(eq, ey),
        (0, i.jsx)(u.b, {
            className: $.Xn,
            isShaking: ef && eO === z.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(et, {
                step: e2,
                transitionState: J,
                isGift: eB,
                giftRecipient: eQ,
                returnRef: eh,
                manaModalSize: e4,
                modalSizeGetter: e8,
                handleClose: tu,
                children: (0, i.jsx)(B.Ay, {
                    header: (0, i.jsx)(Z, { handleClose: tu, renderHeader: ed }),
                    ...{
                        initialPlanId: K,
                        subscriptionTier: ee,
                        handleStepChange: tr,
                        handleClose: tu,
                        analyticsData: e7,
                        setAnalyticsData: te,
                        trialId: ei,
                        reviewWarningMessage: es,
                        planGroup: el,
                        openInvoiceId: ea,
                        analyticsLocation: P,
                        onSubscriptionConfirmation: eu,
                        renderPurchaseConfirmation: eo,
                        postSuccessGuild: er,
                        followupSKUInfo: ec,
                        skipConfirm: eI,
                        continueSessionToInitialStep: eP,
                        startingStepOverride: ek,
                    },
                }),
            }),
        })
    );
}
