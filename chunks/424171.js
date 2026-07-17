n.d(t, { q: () => en });
var i = n(627968),
    s = n(64700),
    l = n(976634),
    a = n(702841),
    u = n(568602),
    o = n(228366),
    r = n(158032),
    c = n(830382),
    d = n(964486),
    _ = n(11939),
    p = n(145659),
    E = n(31823),
    S = n(426398),
    A = n(211083),
    f = n(655857),
    m = n(883645),
    T = n(666646),
    h = n(558620),
    I = n(427675),
    P = n(169797),
    k = n(316915),
    y = n(174459),
    C = n(840251),
    M = n(688151),
    v = n(652215);
let D = new C.E([], M.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
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
    $ = n(106451);
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
            analyticsObject: C,
            analyticsSourceLocation: M,
            analyticsSubscriptionType: R = v.rzx.PREMIUM,
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
            tenantManagesPaymentAuth: ek = !1,
            paymentModalVersion: ey = "v1",
        } = e,
        { paymentSources: eC, hasPaymentSources: eM } = (0, S.jm)(),
        {
            selectedSkuId: ev,
            setSelectedSkuId: eD,
            setSelectedPlanId: eN,
            purchaseState: eg,
            setPurchaseState: eO,
            contextMetadata: ew,
            paymentSourceId: eb,
            setPurchaseError: eR,
            priceOptions: eU,
            activeSubscription: ex,
            purchaseType: eG,
            defaultPlanId: eY,
            customCheckoutFlow: eF,
            unifiedCheckoutFlow: eH,
            quantity: eW,
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
        { displayCurrency: ej } = (0, f.Jn)(),
        { activitySessionId: eL } = (0, E.V)(),
        { paymentAuthenticationState: ez } = (0, A.o)(),
        eq = (0, a.bG)([Y.A], () => Y.A.purchaseTokenAuthState),
        eV = (0, T.sw)(),
        eJ = (0, h.A)(),
        eK = (0, I.S3)(),
        { isGift: eZ, giftRecipient: eB, customGiftMessage: eQ, emojiConfetti: eX, soundEffect: e$ } = (0, L.Pv)(),
        e0 = (0, m.Z8)(),
        e1 = (0, m.s2)(),
        e6 = s.useMemo(() => {
            if (null != e0) return e0.options;
        }, [e0]),
        e2 = (0, m.qv)(),
        e5 = "sm";
    em ? (e5 = "xl") : (eT || e1 === G.pn.ADD_PAYMENT_STEPS) && (e5 = "md");
    let e3 = null != e6 ? e6.modalSizeGetter : void 0,
        e4 = (0, b.O)(),
        e8 = null != ee && !eZ && (0, U.U9)(e4, ee),
        [e9, e7] = s.useState({
            load_id: ew.loadId,
            discovery_session_id: ew.discoverySessionId,
            payment_type: v.frM[eG],
            location: P ?? C,
            source: M,
            subscription_type: R,
            subscription_plan_id: eJ?.id ?? K,
            is_gift: eZ,
            eligible_for_trial: null != ei,
            location_stack: n,
            sku_id: eS,
            application_id: ep,
            guild_id: eE,
            payment_modal_version: ey,
            activity_session_id: eL,
            eligible_for_discount: e8,
            sku_product_line: eK?.productLine,
            quantity: eW,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eH,
            ...t,
        }),
        te = (0, q.W)(eC, eb),
        { giftCardBalance: tt, giftCardCurrency: tn } = (0, _.h)(),
        ti = null != eV ? eV.getDiscountIdIfExists() : void 0;
    s.useEffect(() => {
        e7((e) => {
            let n = null != eJ ? (0, j.y8)(eJ.id, !1, eZ, { paymentSourceId: eU.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eJ?.id,
                price: n?.amount,
                regular_price: eJ?.price,
                currency: ej,
                sku_id: ev,
                sku_product_line: eK?.productLine,
                quantity: eW,
                ...t,
            };
        });
    }, [eJ, ev, eZ, eU, ej, t, eK?.productLine, eW]),
        (0, d.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                y.default.track(v.HAw.PAYMENT_FLOW_STARTED, e, t), D.trigger();
            })({
                ...e9,
                continue_session_initial_step: eP,
                custom_checkout_flow: eF,
                has_saved_payment_source: eM,
                discount_id: null != e4 ? e4.discountId : ti,
            });
        }),
        s.useEffect(() => {
            null == eJ && (null != eY && null != eP ? eN(eY) : eN(K)),
                null != eS ? eD(eS) : null != K && eD(H.A.get(K)?.skuId);
        }, [eN, eJ, eD, K, eS, eY, eP]);
    let ts = s.useCallback(() => {
            let e = (0, W.lo)(eB) === W.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            y.default.track(v.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e9,
                is_custom_message_edited: eZ && e && null != eQ ? eQ !== X.intl.string(X.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eZ && e,
                emoji_name: eZ && e && eX?.id == null ? eX?.surrogates : void 0,
                sound_id: eZ && e ? e$?.soundId : void 0,
                duration_ms: t - ew.startTime,
                payment_source_type: te?.type,
                gift_card_balance: tt,
                gift_card_currency: tn,
            });
        }, [e9, eX, eQ, eB, eZ, e$, ew.startTime, te, tt, tn]),
        tl = s.useCallback(() => {
            let { enabled: e } = g.u.getConfig({ location: "maybeSoftDismissGiftIntentOnPurchase" }),
                t = null != P ? (0, w.NE)(P) : null;
            eZ && null != eB && e && null != t && (0, O.Yd)(eB.id, t);
        }, [P, eZ, eB]),
        ta = s.useMemo(() => () => en?.(eg === z.h.COMPLETED, ev), [en, eg, ev]),
        tu = (0, l.A)(() => Date.now(), [e1]),
        to = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: s, emitPaymentFlowLoadedEvent: l } = t,
                    a = Date.now();
                if (e === G.pn.CONFIRM && (ts(), V?.(s), tl(), eI)) return void ta();
                e2(e), eA?.(e), eR(null), e === G.pn.ADD_PAYMENT_STEPS && (o.h.wait(r.ET), o.h.wait(c.T3));
                let u = null != n ? n : e1;
                null === u || l
                    ? y.default.track(v.HAw.PAYMENT_FLOW_LOADED, {
                          ...e9,
                          initial_step: u ?? e,
                          continue_session_initial_step: eP,
                          has_saved_payment_source: eM,
                      })
                    : y.default.track(v.HAw.PAYMENT_FLOW_STEP, {
                          ...e9,
                          ...i,
                          from_step: u,
                          to_step: e === G.pn.ADD_PAYMENT_STEPS ? G.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - tu,
                          flow_duration_ms: a - ew.startTime,
                          gift_card_balance: tt,
                          gift_card_currency: tn,
                      });
            },
            [e2, eA, eR, e1, eP, e9, tu, ew.startTime, ts, V, tl, eI, ta, eM, tt, tn],
        );
    return (
        (0, x.b)(e1, ez, to, eO, !1, void 0, ek),
        s.useEffect(() => {
            null != e1 && e1 !== G.pn.AWAITING_PURCHASE_TOKEN_AUTH && eq === Y.C.PENDING
                ? to(G.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e1 === G.pn.AWAITING_PURCHASE_TOKEN_AUTH && eq === Y.C.SUCCESS && to(G.pn.REVIEW);
        }, [e1, eq, to]),
        (0, N.A)(ta),
        (0, F.s)(ex, () => en(!1), eZ, !e_),
        (0, x.QR)(ez, ek),
        (0, i.jsx)(u.b, {
            className: $.Xn,
            isShaking: ef && eg === z.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(et, {
                step: e1,
                transitionState: J,
                isGift: eZ,
                giftRecipient: eB,
                returnRef: eh,
                manaModalSize: e5,
                modalSizeGetter: e3,
                handleClose: ta,
                children: (0, i.jsx)(B.Ay, {
                    header: (0, i.jsx)(Z, { handleClose: ta, renderHeader: ed }),
                    ...{
                        initialPlanId: K,
                        subscriptionTier: ee,
                        handleStepChange: to,
                        handleClose: ta,
                        analyticsData: e9,
                        setAnalyticsData: e7,
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
                    },
                }),
            }),
        })
    );
}
