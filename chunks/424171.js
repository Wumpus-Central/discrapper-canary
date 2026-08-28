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
    k = n(206441),
    y = n(174459),
    v = n(840251),
    M = n(688151),
    C = n(652215);
let N = new v.E([], M.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var D = n(319437),
    g = n(45787),
    O = n(51501),
    w = n(724651),
    b = n(862990),
    R = n(511484),
    U = n(251913),
    x = n(166532),
    F = n(71319),
    G = n(344159),
    H = n(97352),
    W = n(45938),
    Y = n(158045),
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
            modalSizeOverride: o,
            modalSizeGetter: r,
            returnRef: d,
            children: c,
        } = e,
        _ = (0, b.FY)({ isGift: s }),
        p =
            o ??
            (null != r
                ? r({ canCurrentlyPurchasePremiumGroup: _, isGift: s, giftRecipient: a })
                : (function (e, t) {
                      let { manaModalSizeFromProps: n } = t,
                          i = n ?? "md";
                      return null == e ? i : e in $ ? $[e] : i;
                  })(t, { manaModalSizeFromProps: u }));
    return (0, i.jsx)(P.Jg, {
        transitionState: n,
        size: p,
        returnRef: d,
        "aria-label": Q.intl.string(Q.t.q9EGps),
        onClose: async () => {
            await l();
        },
        children: c,
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
            modalSizeOverride: em,
            returnRef: eh,
            skipConfirm: eI = !1,
            continueSessionToInitialStep: eP,
            startingStepOverride: ek,
            tenantManagesPaymentAuth: ey = !1,
            paymentModalVersion: ev = "v1",
        } = e,
        { paymentSources: eM, hasPaymentSources: eC } = (0, E.j)(),
        {
            selectedSkuId: eN,
            setSelectedSkuId: eD,
            setSelectedPlanId: eg,
            purchaseState: eO,
            setPurchaseState: ew,
            contextMetadata: eb,
            paymentSourceId: eR,
            setPurchaseError: eU,
            priceOptions: ex,
            activeSubscription: eF,
            purchaseType: eG,
            defaultPlanId: eH,
            customCheckoutFlow: eW,
            unifiedCheckoutFlow: eY,
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
        { displayCurrency: eL } = (0, T.Jn)(),
        { activitySessionId: ez } = (0, S.V)(),
        { paymentAuthenticationState: eq } = (0, A.o)(),
        eV = (0, a.bG)([F.A], () => F.A.purchaseTokenAuthState),
        eJ = (0, m.sw)(),
        eK = (0, h.A)(),
        eZ = (0, I.S3)(),
        { isGift: eB, giftRecipient: eQ, customGiftMessage: eX, emojiConfetti: e$, soundEffect: e0 } = (0, j.Pv)(),
        e1 = (0, f.Z8)(),
        e2 = (0, f.s2)(),
        e5 = l.useMemo(() => {
            if (null != e1) return e1.options;
        }, [e1]),
        e4 = (0, f.qv)(),
        e6 = "sm";
    eT ? (e6 = "xl") : (ef || e2 === x.pn.ADD_PAYMENT_STEPS) && (e6 = "md");
    let e8 = null != e5 ? e5.modalSizeGetter : void 0,
        e3 = (0, w.O)(),
        e9 = null != $ && !eB && (0, R.U9)(e3, $),
        [e7, te] = l.useState({
            load_id: eb.loadId,
            discovery_session_id: eb.discoverySessionId,
            payment_type: C.frM[eG],
            location: P ?? v,
            source: M,
            subscription_type: b,
            subscription_plan_id: eK?.id ?? J,
            is_gift: eB,
            eligible_for_trial: null != en,
            location_stack: n,
            sku_id: eE,
            application_id: e_,
            guild_id: ep,
            payment_modal_version: ev,
            activity_session_id: ez,
            eligible_for_discount: e9,
            sku_product_line: eZ?.productLine,
            quantity: ej,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eY,
            open_invoice_id: es,
            ...t,
        }),
        tt = (0, z.W)(eM, eR),
        { giftCardBalance: tn, giftCardCurrency: ti } = (0, _.h)(),
        tl = null != eJ ? eJ.getDiscountIdIfExists() : void 0;
    l.useEffect(() => {
        te((e) => {
            let n = null != eK ? (0, Y.y8)(eK.id, !1, eB, { paymentSourceId: ex.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eK?.id,
                price: n?.amount,
                regular_price: eK?.price,
                currency: eL,
                sku_id: eN,
                sku_product_line: eZ?.productLine,
                quantity: ej,
                ...t,
            };
        });
    }, [eK, eN, eB, ex, eL, t, eZ?.productLine, ej]),
        (0, c.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                y.default.track(C.HAw.PAYMENT_FLOW_STARTED, e, t), N.trigger();
            })({
                ...e7,
                continue_session_initial_step: eP,
                custom_checkout_flow: eW,
                has_saved_payment_source: eC,
                discount_id: null != e3 ? e3.discountId : tl,
            });
        }),
        l.useEffect(() => {
            null == eK && (null != eH && null != eP ? eg(eH) : eg(J)),
                null != eE ? eD(eE) : null != J && eD(H.A.get(J)?.skuId);
        }, [eg, eK, eD, J, eE, eH, eP]);
    let ts = l.useCallback(() => {
            let e = (0, W.lo)(eQ) === W.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            y.default.track(C.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e7,
                is_custom_message_edited: eB && e && null != eX ? eX !== Q.intl.string(Q.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eB && e,
                emoji_name: eB && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eB && e ? e0?.soundId : void 0,
                duration_ms: t - eb.startTime,
                payment_source_type: tt?.type,
                gift_card_balance: tn,
                gift_card_currency: ti,
            });
        }, [e7, e$, eX, eQ, eB, e0, eb.startTime, tt, tn, ti]),
        ta = l.useCallback(() => {
            let e = null != P ? (0, O.NE)(P) : null;
            eB && null != eQ && null != e && (0, g.Yd)(eQ.id, e);
        }, [P, eB, eQ]),
        tu = l.useMemo(() => () => et?.(eO === L.h.COMPLETED, eN), [et, eO, eN]),
        to = (0, s.A)(() => Date.now(), [e2]),
        tr = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === x.pn.CONFIRM && (ts(), q?.(l), ta(), eI)) return void tu();
                e4(e), eS?.(e), eU(null), e === x.pn.ADD_PAYMENT_STEPS && (o.h.wait(r.ET), o.h.wait(d.T3));
                let u = null != n ? n : e2;
                null === u || s
                    ? y.default.track(C.HAw.PAYMENT_FLOW_LOADED, {
                          ...e7,
                          initial_step: u ?? e,
                          continue_session_initial_step: eP,
                          has_saved_payment_source: eC,
                      })
                    : y.default.track(C.HAw.PAYMENT_FLOW_STEP, {
                          ...e7,
                          ...i,
                          from_step: u,
                          to_step: e === x.pn.ADD_PAYMENT_STEPS ? x.pn.PAYMENT_ELEMENT : e,
                          step_duration_ms: a - to,
                          flow_duration_ms: a - eb.startTime,
                          gift_card_balance: tn,
                          gift_card_currency: ti,
                      });
            },
            [e4, eS, eU, e2, eP, e7, to, eb.startTime, ts, q, ta, eI, tu, eC, tn, ti],
        );
    return (
        (0, U.b)(e2, eq, tr, ew, !1, void 0, ey),
        l.useEffect(() => {
            null != e2 && e2 !== x.pn.AWAITING_PURCHASE_TOKEN_AUTH && eV === F.C.PENDING
                ? tr(x.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e2 === x.pn.AWAITING_PURCHASE_TOKEN_AUTH && eV === F.C.SUCCESS && tr(x.pn.REVIEW);
        }, [e2, eV, tr]),
        (0, D.A)(tu),
        (0, G.s)(eF, () => et(!1), eB, !ec),
        (0, U.QR)(eq, ey),
        (0, i.jsx)(u.b, {
            className: X.Xn,
            isShaking: eA && eO === L.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(ee, {
                step: e2,
                transitionState: V,
                isGift: eB,
                giftRecipient: eQ,
                returnRef: eh,
                manaModalSize: e6,
                modalSizeOverride: em,
                modalSizeGetter: e8,
                handleClose: tu,
                children: (0, i.jsx)(Z.Ay, {
                    header: (0, i.jsx)(K, { handleClose: tu, renderHeader: ed }),
                    ...{
                        initialPlanId: J,
                        subscriptionTier: $,
                        handleStepChange: tr,
                        handleClose: tu,
                        analyticsData: e7,
                        setAnalyticsData: te,
                        trialId: en,
                        reviewWarningMessage: ei,
                        planGroup: el,
                        openInvoiceId: es,
                        analyticsLocation: P,
                        onSubscriptionConfirmation: ea,
                        renderPurchaseConfirmation: eu,
                        postSuccessGuild: eo,
                        followupSKUInfo: er,
                        skipConfirm: eI,
                        continueSessionToInitialStep: eP,
                        startingStepOverride: ek,
                    },
                }),
            }),
        })
    );
}
