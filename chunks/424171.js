n.d(t, { q: () => en });
var i = n(627968),
    l = n(64700),
    s = n(976634),
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
    m = n(666646),
    T = n(558620),
    h = n(427675),
    I = n(169797),
    P = n(6938),
    k = n(174459),
    y = n(840251),
    C = n(688151),
    M = n(652215);
let D = new y.E([], C.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var v = n(319437),
    N = n(70730),
    g = n(45787),
    b = n(51501),
    O = n(422936),
    w = n(862990),
    R = n(410516),
    U = n(251913),
    x = n(166532),
    G = n(71319),
    Y = n(344159),
    F = n(97352),
    H = n(45938),
    W = n(428262),
    j = n(951305),
    L = n(566980),
    z = n(615310),
    B = n(216641),
    V = n(580133);
function q(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, z.bB)();
    return l.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function J(e) {
    let { step: t } = e;
    return t === x.pn.REVIEW ? (0, i.jsx)(V.l, {}) : (0, i.jsx)(V.f, {});
}
function K(e) {
    let { renderHeader: t, handleClose: n } = e,
        s = (0, z.bB)();
    return l.useMemo(
        () =>
            s === x.pn.REVIEW || s === x.pn.ADD_PAYMENT_STEPS
                ? (0, i.jsx)(J, { step: s })
                : (0, i.jsx)(q, { renderHeader: t, handleClose: n }),
        [t, n, s],
    );
}
var Z = n(482132);
n(322076);
var Q = n(202541),
    X = n(375708),
    $ = n(106451);
let ee = { [x.pn.GIFT_CUSTOMIZATION]: "xl", [x.pn.REVIEW]: "md", [x.pn.ADD_PAYMENT_STEPS]: "md" };
function et(e) {
    let {
            step: t,
            transitionState: n,
            handleClose: l,
            isGift: s,
            giftRecipient: a,
            manaModalSize: u,
            modalSizeGetter: o,
            returnRef: r,
            children: c,
        } = e,
        d = (0, w.FY)({ isGift: s }),
        _ =
            null != o
                ? o({ canCurrentlyPurchasePremiumGroup: d, isGift: s, giftRecipient: a })
                : (function (e, t) {
                      let { manaModalSizeFromProps: n } = t,
                          i = n ?? "md";
                      return null == e ? i : e in ee ? ee[e] : i;
                  })(t, { manaModalSizeFromProps: u });
    return (0, i.jsx)(I.Jg, {
        transitionState: n,
        size: _,
        returnRef: r,
        "aria-label": X.intl.string(X.t.q9EGps),
        onClose: async () => {
            await l();
        },
        children: c,
    });
}
function en(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: I,
            analyticsObject: y,
            analyticsSourceLocation: C,
            analyticsSubscriptionType: w = M.rzx.PREMIUM,
            onComplete: V,
            transitionState: q,
            initialPlanId: J,
            subscriptionTier: ee,
            onClose: en,
            trialId: ei,
            reviewWarningMessage: el,
            planGroup: es = Q.LE,
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
            selectedSkuId: eD,
            setSelectedSkuId: ev,
            setSelectedPlanId: eN,
            purchaseState: eg,
            setPurchaseState: eb,
            contextMetadata: eO,
            paymentSourceId: ew,
            setPurchaseError: eR,
            priceOptions: eU,
            activeSubscription: ex,
            purchaseType: eG,
            defaultPlanId: eY,
            customCheckoutFlow: eF,
            unifiedCheckoutFlow: eH,
            quantity: eW,
        } = (0, P.t4)((e) => ({
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
        eB = (0, a.bG)([G.A], () => G.A.purchaseTokenAuthState),
        eV = (0, m.sw)(),
        eq = (0, T.A)(),
        eJ = (0, h.S3)(),
        { isGift: eK, giftRecipient: eZ, customGiftMessage: eQ, emojiConfetti: eX, soundEffect: e$ } = (0, j.Pv)(),
        e0 = (0, z.Z8)(),
        e1 = (0, z.bB)(),
        e6 = l.useMemo(() => {
            if (null != e0) return e0.options;
        }, [e0]),
        e2 = (0, z.l)(),
        e5 = "sm";
    em ? (e5 = "xl") : (eT || e1 === x.pn.ADD_PAYMENT_STEPS) && (e5 = "md");
    let e3 = null != e6 ? e6.modalSizeGetter : void 0,
        e4 = (0, O.O)(),
        e8 = null != ee && !eK && (0, R.U9)(e4, ee),
        [e9, e7] = l.useState({
            load_id: eO.loadId,
            discovery_session_id: eO.discoverySessionId,
            payment_type: M.frM[eG],
            location: I ?? y,
            source: C,
            subscription_type: w,
            subscription_plan_id: eq?.id ?? J,
            is_gift: eK,
            eligible_for_trial: null != ei,
            location_stack: n,
            sku_id: eS,
            application_id: ep,
            guild_id: eE,
            payment_modal_version: ey,
            activity_session_id: eL,
            eligible_for_discount: e8,
            sku_product_line: eJ?.productLine,
            quantity: eW,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eH,
            ...t,
        }),
        te = (0, B.W)(eC, ew),
        { giftCardBalance: tt, giftCardCurrency: tn } = (0, _.h)(),
        ti = null != eV ? eV.getDiscountIdIfExists() : void 0;
    l.useEffect(() => {
        e7((e) => {
            let n = null != eq ? (0, W.y8)(eq.id, !1, eK, { paymentSourceId: eU.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eq?.id,
                price: n?.amount,
                regular_price: eq?.price,
                currency: ej,
                sku_id: eD,
                sku_product_line: eJ?.productLine,
                quantity: eW,
                ...t,
            };
        });
    }, [eq, eD, eK, eU, ej, t, eJ?.productLine, eW]),
        (0, d.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                k.default.track(M.HAw.PAYMENT_FLOW_STARTED, e, t), D.trigger();
            })({
                ...e9,
                continue_session_initial_step: eP,
                custom_checkout_flow: eF,
                has_saved_payment_source: eM,
                discount_id: null != e4 ? e4.discountId : ti,
            });
        }),
        l.useEffect(() => {
            null == eq && (null != eY && null != eP ? eN(eY) : eN(J)),
                null != eS ? ev(eS) : null != J && ev(F.A.get(J)?.skuId);
        }, [eN, eq, ev, J, eS, eY, eP]);
    let tl = l.useCallback(() => {
            let e = (0, H.lo)(eZ) === H.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            k.default.track(M.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e9,
                is_custom_message_edited: eK && e && null != eQ ? eQ !== X.intl.string(X.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eK && e,
                emoji_name: eK && e && eX?.id == null ? eX?.surrogates : void 0,
                sound_id: eK && e ? e$?.soundId : void 0,
                duration_ms: t - eO.startTime,
                payment_source_type: te?.type,
                gift_card_balance: tt,
                gift_card_currency: tn,
            });
        }, [e9, eX, eQ, eZ, eK, e$, eO.startTime, te, tt, tn]),
        ts = l.useCallback(() => {
            let { enabled: e } = N.u.getConfig({ location: "maybeSoftDismissGiftIntentOnPurchase" }),
                t = null != I ? (0, b.NE)(I) : null;
            eK && null != eZ && e && null != t && (0, g.Yd)(eZ.id, t);
        }, [I, eK, eZ]),
        ta = l.useMemo(() => () => en?.(eg === L.h.COMPLETED, eD), [en, eg, eD]),
        tu = (0, s.A)(() => Date.now(), [e1]),
        to = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === x.pn.CONFIRM && (tl(), V?.(l), ts(), eI)) return void ta();
                e2(e), eA?.(e), eR(null), e === x.pn.ADD_PAYMENT_STEPS && (o.h.wait(r.ET), o.h.wait(c.T3));
                let u = null != n ? n : e1;
                null === u || s
                    ? k.default.track(M.HAw.PAYMENT_FLOW_LOADED, {
                          ...e9,
                          initial_step: u ?? e,
                          continue_session_initial_step: eP,
                          has_saved_payment_source: eM,
                      })
                    : k.default.track(M.HAw.PAYMENT_FLOW_STEP, {
                          ...e9,
                          ...i,
                          from_step: u,
                          to_step: e === x.pn.ADD_PAYMENT_STEPS ? x.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - tu,
                          flow_duration_ms: a - eO.startTime,
                          gift_card_balance: tt,
                          gift_card_currency: tn,
                      });
            },
            [e2, eA, eR, e1, eP, e9, tu, eO.startTime, tl, V, ts, eI, ta, eM, tt, tn],
        );
    return (
        (0, U.b)(e1, ez, to, eb, !1, void 0, ek),
        l.useEffect(() => {
            null != e1 && e1 !== x.pn.AWAITING_PURCHASE_TOKEN_AUTH && eB === G.C.PENDING
                ? to(x.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e1 === x.pn.AWAITING_PURCHASE_TOKEN_AUTH && eB === G.C.SUCCESS && to(x.pn.REVIEW);
        }, [e1, eB, to]),
        (0, v.A)(ta),
        (0, Y.s)(ex, () => en(!1), eK, !e_),
        (0, U.QR)(ez, ek),
        (0, i.jsx)(u.b, {
            className: $.Xn,
            isShaking: ef && eg === L.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(et, {
                step: e1,
                transitionState: q,
                isGift: eK,
                giftRecipient: eZ,
                returnRef: eh,
                manaModalSize: e5,
                modalSizeGetter: e3,
                handleClose: ta,
                children: (0, i.jsx)(Z.Ay, {
                    header: (0, i.jsx)(K, { handleClose: ta, renderHeader: ed }),
                    ...{
                        initialPlanId: J,
                        subscriptionTier: ee,
                        handleStepChange: to,
                        handleClose: ta,
                        analyticsData: e9,
                        setAnalyticsData: e7,
                        trialId: ei,
                        reviewWarningMessage: el,
                        planGroup: es,
                        openInvoiceId: ea,
                        analyticsLocation: I,
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
