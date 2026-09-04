n.d(t, { q: () => ee });
var i = n(477900),
    l = n(582128),
    s = n(999129),
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
    T = n(655857),
    f = n(883645),
    m = n(558620),
    h = n(427675),
    I = n(169797),
    P = n(721836),
    k = n(174459),
    v = n(840251),
    y = n(688151),
    M = n(652215);
let C = new v.E([], y.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var N = n(319437),
    D = n(45787),
    g = n(51501),
    w = n(724651),
    O = n(989790),
    b = n(511484),
    R = n(251913),
    U = n(166532),
    x = n(71319),
    F = n(344159),
    G = n(97352),
    H = n(45938),
    W = n(158045),
    Y = n(951305),
    j = n(566980),
    L = n(216641),
    z = n(580133);
function q(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, f.s2)();
    return l.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function V(e) {
    let { step: t } = e;
    return t === U.pn.REVIEW ? (0, i.jsx)(z.l, {}) : (0, i.jsx)(z.f, {});
}
function J(e) {
    let { renderHeader: t, handleClose: n } = e,
        s = (0, f.s2)();
    return l.useMemo(
        () =>
            s === U.pn.REVIEW || s === U.pn.ADD_PAYMENT_STEPS
                ? (0, i.jsx)(V, { step: s })
                : (0, i.jsx)(q, { renderHeader: t, handleClose: n }),
        [t, n, s],
    );
}
var K = n(482132);
n(322076);
var Z = n(202541),
    B = n(375708),
    Q = n(796694);
let X = { [U.pn.GIFT_CUSTOMIZATION]: "xl", [U.pn.REVIEW]: "md", [U.pn.ADD_PAYMENT_STEPS]: "md" };
function $(e) {
    let {
            step: t,
            transitionState: n,
            handleClose: l,
            isGift: s,
            giftRecipient: a,
            manaModalSize: u,
            modalSizeOverride: o,
            modalSizeGetter: r,
            returnRef: c,
            children: d,
        } = e,
        _ = (0, O.FY)({ isGift: s }),
        p =
            o ??
            (null != r
                ? r({ canCurrentlyPurchasePremiumGroup: _, isGift: s, giftRecipient: a })
                : (function (e, t) {
                      let { manaModalSizeFromProps: n } = t,
                          i = n ?? "md";
                      return null == e ? i : e in X ? X[e] : i;
                  })(t, { manaModalSizeFromProps: u }));
    return (0, i.jsx)(I.Jg, {
        transitionState: n,
        size: p,
        returnRef: c,
        "aria-label": B.intl.string(B.t.q9EGps),
        onClose: async () => {
            await l();
        },
        children: d,
    });
}
function ee(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: I,
            analyticsObject: v,
            analyticsSourceLocation: y,
            analyticsSubscriptionType: O = M.rzx.PREMIUM,
            onComplete: z,
            transitionState: q,
            initialPlanId: V,
            subscriptionTier: X,
            onClose: ee,
            trialId: et,
            reviewWarningMessage: en,
            planGroup: ei = Z.LE,
            openInvoiceId: el,
            onSubscriptionConfirmation: es,
            renderPurchaseConfirmation: ea,
            postSuccessGuild: eu,
            followupSKUInfo: eo,
            renderHeader: er,
            disableUnsupportedExternalSubscriptionHandler: ec = !1,
            applicationId: ed,
            guildId: e_,
            skuId: ep,
            onStepChange: eE,
            shakeWhilePurchasing: eS = !1,
            isLargeModal: eA = !1,
            isMediumModal: eT = !1,
            modalSizeOverride: ef,
            returnRef: em,
            skipConfirm: eh = !1,
            continueSessionToInitialStep: eI,
            startingStepOverride: eP,
            tenantManagesPaymentAuth: ek = !1,
            paymentModalVersion: ev = "v1",
        } = e,
        { paymentSources: ey, hasPaymentSources: eM } = (0, E.j)(),
        {
            selectedSkuId: eC,
            setSelectedSkuId: eN,
            setSelectedPlanId: eD,
            purchaseState: eg,
            setPurchaseState: ew,
            contextMetadata: eO,
            paymentSourceId: eb,
            setPurchaseError: eR,
            priceOptions: eU,
            activeSubscription: ex,
            purchaseType: eF,
            defaultPlanId: eG,
            customCheckoutFlow: eH,
            unifiedCheckoutFlow: eW,
            quantity: eY,
            invoicePreview: ej,
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
            invoicePreview: e.checkoutInvoicePreview,
        })),
        { displayCurrency: eL } = (0, T.Jn)(),
        { activitySessionId: ez } = (0, S.V)(),
        { paymentAuthenticationState: eq } = (0, A.o)(),
        eV = (0, a.bG)([x.A], () => x.A.purchaseTokenAuthState),
        eJ = (0, m.A)(),
        eK = (0, h.S3)(),
        { isGift: eZ, giftRecipient: eB, customGiftMessage: eQ, emojiConfetti: eX, soundEffect: e$ } = (0, Y.Pv)(),
        e0 = (0, f.Z8)(),
        e1 = (0, f.s2)(),
        e5 = l.useMemo(() => {
            if (null != e0) return e0.options;
        }, [e0]),
        e2 = (0, f.qv)(),
        e8 = "sm";
    eA ? (e8 = "xl") : (eT || e1 === U.pn.ADD_PAYMENT_STEPS) && (e8 = "md");
    let e4 = null != e5 ? e5.modalSizeGetter : void 0,
        e9 = (0, w.O)(),
        e3 = null != X && !eZ && (0, b.U9)(e9, X),
        [e6, e7] = l.useState({
            load_id: eO.loadId,
            discovery_session_id: eO.discoverySessionId,
            payment_type: M.frM[eF],
            location: I ?? v,
            source: y,
            subscription_type: O,
            subscription_plan_id: eJ?.id ?? V,
            is_gift: eZ,
            eligible_for_trial: null != et,
            location_stack: n,
            sku_id: ep,
            application_id: ed,
            guild_id: e_,
            payment_modal_version: ev,
            activity_session_id: ez,
            eligible_for_discount: e3,
            sku_product_line: eK?.productLine,
            quantity: eY,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eW,
            open_invoice_id: el,
            ...t,
        }),
        te = (0, L.W)(ey, eb),
        { giftCardBalance: tt, giftCardCurrency: tn } = (0, _.h)(),
        ti = null != ej ? ej.getDiscountIdIfExists() : void 0;
    l.useEffect(() => {
        e7((e) => {
            let n = null != eJ ? (0, W.y8)(eJ.id, !1, eZ, { paymentSourceId: eU.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eJ?.id,
                price: n?.amount,
                regular_price: eJ?.price,
                currency: eL,
                sku_id: eC,
                sku_product_line: eK?.productLine,
                quantity: eY,
                ...t,
            };
        });
    }, [eJ, eC, eZ, eU, eL, t, eK?.productLine, eY]),
        (0, d.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                k.default.track(M.HAw.PAYMENT_FLOW_STARTED, e, t), C.trigger();
            })({
                ...e6,
                continue_session_initial_step: eI,
                custom_checkout_flow: eH,
                has_saved_payment_source: eM,
                discount_id: null != e9 ? e9.discountId : ti,
            });
        }),
        l.useEffect(() => {
            null == eJ && (null != eG && null != eI ? eD(eG) : eD(V)),
                null != ep ? eN(ep) : null != V && eN(G.A.get(V)?.skuId);
        }, [eD, eJ, eN, V, ep, eG, eI]);
    let tl = l.useCallback(() => {
            let e = (0, H.lo)(eB) === H.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            k.default.track(M.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e6,
                is_custom_message_edited: eZ && e && null != eQ ? eQ !== B.intl.string(B.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eZ && e,
                emoji_name: eZ && e && eX?.id == null ? eX?.surrogates : void 0,
                sound_id: eZ && e ? e$?.soundId : void 0,
                duration_ms: t - eO.startTime,
                payment_source_type: te?.type,
                gift_card_balance: tt,
                gift_card_currency: tn,
            });
        }, [e6, eX, eQ, eB, eZ, e$, eO.startTime, te, tt, tn]),
        ts = l.useCallback(() => {
            let e = null != I ? (0, g.NE)(I) : null;
            eZ && null != eB && null != e && (0, D.Yd)(eB.id, e);
        }, [I, eZ, eB]),
        ta = l.useMemo(() => () => ee?.(eg === j.h.COMPLETED, eC), [ee, eg, eC]),
        tu = (0, s.A)(() => Date.now(), [e1]),
        to = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === U.pn.CONFIRM && (tl(), z?.(l), ts(), eh)) return void ta();
                e2(e), eE?.(e), eR(null), e === U.pn.ADD_PAYMENT_STEPS && (o.h.wait(r.ET), o.h.wait(c.T3));
                let u = null != n ? n : e1;
                null === u || s
                    ? k.default.track(M.HAw.PAYMENT_FLOW_LOADED, {
                          ...e6,
                          initial_step: u ?? e,
                          continue_session_initial_step: eI,
                          has_saved_payment_source: eM,
                      })
                    : k.default.track(M.HAw.PAYMENT_FLOW_STEP, {
                          ...e6,
                          ...i,
                          from_step: u,
                          to_step: e === U.pn.ADD_PAYMENT_STEPS ? U.pn.PAYMENT_ELEMENT : e,
                          step_duration_ms: a - tu,
                          flow_duration_ms: a - eO.startTime,
                          gift_card_balance: tt,
                          gift_card_currency: tn,
                      });
            },
            [e2, eE, eR, e1, eI, e6, tu, eO.startTime, tl, z, ts, eh, ta, eM, tt, tn],
        );
    return (
        (0, R.b)(e1, eq, to, ew, !1, void 0, ek),
        l.useEffect(() => {
            null != e1 && e1 !== U.pn.AWAITING_PURCHASE_TOKEN_AUTH && eV === x.C.PENDING
                ? to(U.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e1 === U.pn.AWAITING_PURCHASE_TOKEN_AUTH && eV === x.C.SUCCESS && to(U.pn.REVIEW);
        }, [e1, eV, to]),
        (0, N.A)(ta),
        (0, F.s)(ex, () => ee(!1), eZ, !ec),
        (0, R.QR)(eq, ek),
        (0, i.jsx)(u.b, {
            className: Q.Xn,
            isShaking: eS && eg === j.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)($, {
                step: e1,
                transitionState: q,
                isGift: eZ,
                giftRecipient: eB,
                returnRef: em,
                manaModalSize: e8,
                modalSizeOverride: ef,
                modalSizeGetter: e4,
                handleClose: ta,
                children: (0, i.jsx)(K.Ay, {
                    header: (0, i.jsx)(J, { handleClose: ta, renderHeader: er }),
                    ...{
                        initialPlanId: V,
                        subscriptionTier: X,
                        handleStepChange: to,
                        handleClose: ta,
                        analyticsData: e6,
                        setAnalyticsData: e7,
                        trialId: et,
                        reviewWarningMessage: en,
                        planGroup: ei,
                        openInvoiceId: el,
                        analyticsLocation: I,
                        onSubscriptionConfirmation: es,
                        renderPurchaseConfirmation: ea,
                        postSuccessGuild: eu,
                        followupSKUInfo: eo,
                        skipConfirm: eh,
                        continueSessionToInitialStep: eI,
                        startingStepOverride: eP,
                    },
                }),
            }),
        })
    );
}
