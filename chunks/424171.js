n.d(t, { q: () => et });
var i = n(477900),
    l = n(582128),
    s = n(999129),
    a = n(702841),
    u = n(568602),
    o = n(228366),
    r = n(158032),
    d = n(830382),
    c = n(964486),
    _ = n(11939),
    p = n(145659),
    E = n(202475),
    S = n(31823),
    A = n(211083),
    T = n(655857),
    f = n(883645),
    m = n(666646),
    h = n(558620),
    I = n(427675),
    P = n(480642),
    k = n(87725),
    y = n(174459),
    v = n(840251),
    M = n(688151),
    C = n(652215);
let D = new v.E([], M.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var N = n(319437),
    g = n(45787),
    w = n(51501),
    O = n(724651),
    b = n(862990),
    R = n(511484),
    U = n(251913),
    x = n(166532),
    Y = n(71319),
    F = n(344159),
    G = n(97352),
    H = n(45938),
    W = n(158045),
    j = n(951305),
    L = n(566980),
    z = n(216641),
    q = n(580133);
function V(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, f.s2)();
    return l.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function J(e) {
    let { step: t } = e;
    return t === x.pn.REVIEW ? (0, i.jsx)(q.l, {}) : (0, i.jsx)(q.f, {});
}
function K(e) {
    let { renderHeader: t, handleClose: n } = e,
        s = (0, f.s2)();
    return l.useMemo(
        () =>
            s === x.pn.REVIEW || s === x.pn.ADD_PAYMENT_STEPS
                ? (0, i.jsx)(J, { step: s })
                : (0, i.jsx)(V, { renderHeader: t, handleClose: n }),
        [t, n, s],
    );
}
var Z = n(482132);
n(322076);
var B = n(202541),
    Q = n(375708),
    X = n(796694);
let $ = { [x.pn.GIFT_CUSTOMIZATION]: "xl", [x.pn.REVIEW]: "md", [x.pn.ADD_PAYMENT_STEPS]: "md" };
function ee(e) {
    let {
            step: t,
            transitionState: n,
            handleClose: l,
            isGift: s,
            giftRecipient: a,
            manaModalSize: u,
            modalSizeGetter: o,
            returnRef: r,
            children: d,
        } = e,
        c = (0, b.FY)({ isGift: s }),
        _ =
            null != o
                ? o({ canCurrentlyPurchasePremiumGroup: c, isGift: s, giftRecipient: a })
                : (function (e, t) {
                      let { manaModalSizeFromProps: n } = t,
                          i = n ?? "md";
                      return null == e ? i : e in $ ? $[e] : i;
                  })(t, { manaModalSizeFromProps: u });
    return (0, i.jsx)(P.Jg, {
        transitionState: n,
        size: _,
        returnRef: r,
        "aria-label": Q.intl.string(Q.t.q9EGps),
        onClose: async () => {
            await l();
        },
        children: d,
    });
}
function et(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: P,
            analyticsObject: v,
            analyticsSourceLocation: M,
            analyticsSubscriptionType: b = C.rzx.PREMIUM,
            onComplete: q,
            transitionState: V,
            initialPlanId: J,
            subscriptionTier: $,
            onClose: et,
            trialId: en,
            reviewWarningMessage: ei,
            planGroup: el = B.LE,
            openInvoiceId: es,
            onSubscriptionConfirmation: ea,
            renderPurchaseConfirmation: eu,
            postSuccessGuild: eo,
            followupSKUInfo: er,
            renderHeader: ed,
            disableUnsupportedExternalSubscriptionHandler: ec = !1,
            applicationId: e_,
            guildId: ep,
            skuId: eE,
            onStepChange: eS,
            shakeWhilePurchasing: eA = !1,
            isLargeModal: eT = !1,
            isMediumModal: ef = !1,
            returnRef: em,
            skipConfirm: eh = !1,
            continueSessionToInitialStep: eI,
            startingStepOverride: eP,
            tenantManagesPaymentAuth: ek = !1,
            paymentModalVersion: ey = "v1",
        } = e,
        { paymentSources: ev, hasPaymentSources: eM } = (0, E.j)(),
        {
            selectedSkuId: eC,
            setSelectedSkuId: eD,
            setSelectedPlanId: eN,
            purchaseState: eg,
            setPurchaseState: ew,
            contextMetadata: eO,
            paymentSourceId: eb,
            setPurchaseError: eR,
            priceOptions: eU,
            activeSubscription: ex,
            purchaseType: eY,
            defaultPlanId: eF,
            customCheckoutFlow: eG,
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
        { displayCurrency: ej } = (0, T.Jn)(),
        { activitySessionId: eL } = (0, S.V)(),
        { paymentAuthenticationState: ez } = (0, A.o)(),
        eq = (0, a.bG)([Y.A], () => Y.A.purchaseTokenAuthState),
        eV = (0, m.sw)(),
        eJ = (0, h.A)(),
        eK = (0, I.S3)(),
        { isGift: eZ, giftRecipient: eB, customGiftMessage: eQ, emojiConfetti: eX, soundEffect: e$ } = (0, j.Pv)(),
        e0 = (0, f.Z8)(),
        e1 = (0, f.s2)(),
        e2 = l.useMemo(() => {
            if (null != e0) return e0.options;
        }, [e0]),
        e5 = (0, f.qv)(),
        e4 = "sm";
    eT ? (e4 = "xl") : (ef || e1 === x.pn.ADD_PAYMENT_STEPS) && (e4 = "md");
    let e8 = null != e2 ? e2.modalSizeGetter : void 0,
        e6 = (0, O.O)(),
        e3 = null != $ && !eZ && (0, R.U9)(e6, $),
        [e9, e7] = l.useState({
            load_id: eO.loadId,
            discovery_session_id: eO.discoverySessionId,
            payment_type: C.frM[eY],
            location: P ?? v,
            source: M,
            subscription_type: b,
            subscription_plan_id: eJ?.id ?? J,
            is_gift: eZ,
            eligible_for_trial: null != en,
            location_stack: n,
            sku_id: eE,
            application_id: e_,
            guild_id: ep,
            payment_modal_version: ey,
            activity_session_id: eL,
            eligible_for_discount: e3,
            sku_product_line: eK?.productLine,
            quantity: eW,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eH,
            open_invoice_id: es,
            ...t,
        }),
        te = (0, z.W)(ev, eb),
        { giftCardBalance: tt, giftCardCurrency: tn } = (0, _.h)(),
        ti = null != eV ? eV.getDiscountIdIfExists() : void 0;
    l.useEffect(() => {
        e7((e) => {
            let n = null != eJ ? (0, W.y8)(eJ.id, !1, eZ, { paymentSourceId: eU.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eJ?.id,
                price: n?.amount,
                regular_price: eJ?.price,
                currency: ej,
                sku_id: eC,
                sku_product_line: eK?.productLine,
                quantity: eW,
                ...t,
            };
        });
    }, [eJ, eC, eZ, eU, ej, t, eK?.productLine, eW]),
        (0, c.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                y.default.track(C.HAw.PAYMENT_FLOW_STARTED, e, t), D.trigger();
            })({
                ...e9,
                continue_session_initial_step: eI,
                custom_checkout_flow: eG,
                has_saved_payment_source: eM,
                discount_id: null != e6 ? e6.discountId : ti,
            });
        }),
        l.useEffect(() => {
            null == eJ && (null != eF && null != eI ? eN(eF) : eN(J)),
                null != eE ? eD(eE) : null != J && eD(G.A.get(J)?.skuId);
        }, [eN, eJ, eD, J, eE, eF, eI]);
    let tl = l.useCallback(() => {
            let e = (0, H.lo)(eB) === H.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            y.default.track(C.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e9,
                is_custom_message_edited: eZ && e && null != eQ ? eQ !== Q.intl.string(Q.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eZ && e,
                emoji_name: eZ && e && eX?.id == null ? eX?.surrogates : void 0,
                sound_id: eZ && e ? e$?.soundId : void 0,
                duration_ms: t - eO.startTime,
                payment_source_type: te?.type,
                gift_card_balance: tt,
                gift_card_currency: tn,
            });
        }, [e9, eX, eQ, eB, eZ, e$, eO.startTime, te, tt, tn]),
        ts = l.useCallback(() => {
            let e = null != P ? (0, w.NE)(P) : null;
            eZ && null != eB && null != e && (0, g.Yd)(eB.id, e);
        }, [P, eZ, eB]),
        ta = l.useMemo(() => () => et?.(eg === L.h.COMPLETED, eC), [et, eg, eC]),
        tu = (0, s.A)(() => Date.now(), [e1]),
        to = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === x.pn.CONFIRM && (tl(), q?.(l), ts(), eh)) return void ta();
                e5(e), eS?.(e), eR(null), e === x.pn.ADD_PAYMENT_STEPS && (o.h.wait(r.ET), o.h.wait(d.T3));
                let u = null != n ? n : e1;
                null === u || s
                    ? y.default.track(C.HAw.PAYMENT_FLOW_LOADED, {
                          ...e9,
                          initial_step: u ?? e,
                          continue_session_initial_step: eI,
                          has_saved_payment_source: eM,
                      })
                    : y.default.track(C.HAw.PAYMENT_FLOW_STEP, {
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
            [e5, eS, eR, e1, eI, e9, tu, eO.startTime, tl, q, ts, eh, ta, eM, tt, tn],
        );
    return (
        (0, U.b)(e1, ez, to, ew, !1, void 0, ek),
        l.useEffect(() => {
            null != e1 && e1 !== x.pn.AWAITING_PURCHASE_TOKEN_AUTH && eq === Y.C.PENDING
                ? to(x.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e1 === x.pn.AWAITING_PURCHASE_TOKEN_AUTH && eq === Y.C.SUCCESS && to(x.pn.REVIEW);
        }, [e1, eq, to]),
        (0, N.A)(ta),
        (0, F.s)(ex, () => et(!1), eZ, !ec),
        (0, U.QR)(ez, ek),
        (0, i.jsx)(u.b, {
            className: X.Xn,
            isShaking: eA && eg === L.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(ee, {
                step: e1,
                transitionState: V,
                isGift: eZ,
                giftRecipient: eB,
                returnRef: em,
                manaModalSize: e4,
                modalSizeGetter: e8,
                handleClose: ta,
                children: (0, i.jsx)(Z.Ay, {
                    header: (0, i.jsx)(K, { handleClose: ta, renderHeader: ed }),
                    ...{
                        initialPlanId: J,
                        subscriptionTier: $,
                        handleStepChange: to,
                        handleClose: ta,
                        analyticsData: e9,
                        setAnalyticsData: e7,
                        trialId: en,
                        reviewWarningMessage: ei,
                        planGroup: el,
                        openInvoiceId: es,
                        analyticsLocation: P,
                        onSubscriptionConfirmation: ea,
                        renderPurchaseConfirmation: eu,
                        postSuccessGuild: eo,
                        followupSKUInfo: er,
                        skipConfirm: eh,
                        continueSessionToInitialStep: eI,
                        startingStepOverride: eP,
                    },
                }),
            }),
        })
    );
}
