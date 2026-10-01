n.d(t, { q: () => ee });
var i = n(477900),
    l = n(582128),
    a = n(999129),
    s = n(568602),
    u = n(73153),
    r = n(158032),
    o = n(830382),
    c = n(964486),
    d = n(11939),
    _ = n(145659),
    p = n(202475),
    E = n(31823),
    S = n(211083),
    f = n(655857),
    A = n(883645),
    T = n(166532),
    m = n(263532),
    h = n(442467),
    I = n(558620),
    v = n(427675),
    P = n(169797),
    k = n(174459),
    y = n(840251),
    M = n(688151),
    C = n(652215);
let D = new y.E([], M.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var N = n(319437),
    g = n(45787),
    b = n(51501),
    w = n(724651),
    O = n(989790),
    R = n(511484),
    U = n(251913),
    x = n(436102),
    W = n(478996),
    F = n(97352),
    H = n(45938),
    Y = n(158045),
    j = n(951305),
    G = n(566980),
    L = n(216641),
    z = n(580133);
function q(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, A.s2)();
    return l.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function V(e) {
    let { step: t } = e;
    return t === T.pn.REVIEW ? (0, i.jsx)(z.l, {}) : (0, i.jsx)(z.f, {});
}
function J(e) {
    let { renderHeader: t, handleClose: n } = e,
        a = (0, A.s2)();
    return l.useMemo(
        () =>
            a === T.pn.REVIEW || a === T.pn.ADD_PAYMENT_STEPS
                ? (0, i.jsx)(V, { step: a })
                : (0, i.jsx)(q, { renderHeader: t, handleClose: n }),
        [t, n, a],
    );
}
var K = n(482132);
n(322076);
var Z = n(202541),
    B = n(375708),
    Q = n(796694);
let X = { [T.pn.GIFT_CUSTOMIZATION]: "xl", [T.pn.REVIEW]: "md", [T.pn.ADD_PAYMENT_STEPS]: "md" };
function $(e) {
    let {
            step: t,
            transitionState: n,
            handleClose: l,
            isGift: a,
            giftRecipient: s,
            manaModalSize: u,
            modalSizeOverride: r,
            modalSizeGetter: o,
            returnRef: c,
            children: d,
        } = e,
        _ = (0, O.FY)({ isGift: a }),
        p =
            r ??
            (null != o
                ? o({ canCurrentlyPurchasePremiumGroup: _, isGift: a, giftRecipient: s })
                : (function (e, t) {
                      let { manaModalSizeFromProps: n } = t,
                          i = n ?? "md";
                      return null == e ? i : e in X ? X[e] : i;
                  })(t, { manaModalSizeFromProps: u }));
    return (0, i.jsx)(P.Jg, {
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
            analyticsLocation: P,
            analyticsObject: y,
            analyticsSourceLocation: M,
            analyticsSubscriptionType: O = C.rzx.PREMIUM,
            onComplete: z,
            transitionState: q,
            initialPlanId: V,
            subscriptionTier: X,
            onClose: ee,
            trialId: et,
            reviewWarningMessage: en,
            planGroup: ei = Z.LE,
            openInvoiceId: el,
            onSubscriptionConfirmation: ea,
            renderPurchaseConfirmation: es,
            postSuccessGuild: eu,
            followupSKUInfo: er,
            renderHeader: eo,
            disableUnsupportedExternalSubscriptionHandler: ec = !1,
            applicationId: ed,
            guildId: e_,
            skuId: ep,
            onStepChange: eE,
            shakeWhilePurchasing: eS = !1,
            isLargeModal: ef = !1,
            isMediumModal: eA = !1,
            modalSizeOverride: eT,
            disableDefaultSlideTransformStyling: em = !1,
            returnRef: eh,
            skipConfirm: eI = !1,
            continueSessionToInitialStep: ev,
            startingStepOverride: eP,
            tenantManagesPaymentAuth: ek = !1,
            paymentModalVersion: ey = "v1",
        } = e,
        { paymentSources: eM, hasPaymentSources: eC } = (0, p.j)(),
        {
            selectedSkuId: eD,
            setSelectedSkuId: eN,
            setSelectedPlanId: eg,
            purchaseState: eb,
            setPurchaseState: ew,
            contextMetadata: eO,
            paymentSourceId: eR,
            setPurchaseError: eU,
            priceOptions: ex,
            activeSubscription: eW,
            purchaseType: eF,
            defaultPlanId: eH,
            customCheckoutFlow: eY,
            unifiedCheckoutFlow: ej,
            quantity: eG,
            invoicePreview: eL,
        } = (0, m.t4)((e) => ({
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
        { displayCurrency: ez } = (0, f.Jn)(),
        { activitySessionId: eq } = (0, E.V)(),
        { paymentAuthenticationState: eV } = (0, S.o)(),
        eJ = (0, I.A)(),
        eK = (0, v.S3)(),
        { isGift: eZ, giftRecipient: eB, customGiftMessage: eQ, emojiConfetti: eX, soundEffect: e$ } = (0, j.Pv)(),
        e0 = (0, A.Z8)(),
        e1 = (0, A.s2)(),
        e5 = l.useMemo(() => {
            if (null != e0) return e0.options;
        }, [e0]),
        e2 = (0, A.qv)(),
        e8 = "sm";
    ef ? (e8 = "xl") : (eA || e1 === T.pn.ADD_PAYMENT_STEPS) && (e8 = "md");
    let e6 = null != e5 ? e5.modalSizeGetter : void 0,
        e3 = (0, w.O)(),
        e4 = null != X && !eZ && (0, R.U9)(e3, X),
        [e9, e7] = l.useState({
            load_id: eO.loadId,
            discovery_session_id: eO.discoverySessionId,
            payment_type: C.frM[eF],
            location: P ?? y,
            source: M,
            subscription_type: O,
            subscription_plan_id: eJ?.id ?? V,
            is_gift: eZ,
            eligible_for_trial: null != et,
            location_stack: n,
            sku_id: ep,
            application_id: ed,
            guild_id: e_,
            payment_modal_version: ey,
            activity_session_id: eq,
            eligible_for_discount: e4,
            sku_product_line: eK?.productLine,
            quantity: eG,
            checkout_design: _.r.UNIFIED,
            checkout_flow: ej,
            open_invoice_id: el,
            ...t,
        }),
        te = (0, L.W)(eM, eR),
        { giftCardBalance: tt, giftCardCurrency: tn } = (0, d.h)(),
        { balance: ti } = (0, W.W0)(),
        tl = null != eL ? eL.getDiscountIdIfExists() : void 0;
    (l.useEffect(() => {
        e7((e) => {
            let n = null != eJ ? (0, Y.y8)(eJ.id, !1, eZ, { paymentSourceId: ex.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eJ?.id,
                price: n?.amount,
                regular_price: eJ?.price,
                currency: ez,
                sku_id: eD,
                sku_product_line: eK?.productLine,
                quantity: eG,
                virtual_currency_balance: ti,
                ...t,
            };
        });
    }, [eJ, eD, eZ, ex, ez, t, eK?.productLine, eG, ti]),
        (0, c.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (k.default.track(C.HAw.PAYMENT_FLOW_STARTED, e, t), D.trigger());
            })({
                ...e9,
                virtual_currency_balance: ti,
                continue_session_initial_step: ev,
                custom_checkout_flow: eY,
                has_saved_payment_source: eC,
                discount_id: null != e3 ? e3.discountId : tl,
            });
        }),
        l.useEffect(() => {
            (null == eJ && (null != eH && null != ev ? eg(eH) : eg(V)),
                null != ep ? eN(ep) : null != V && eN(F.A.get(V)?.skuId));
        }, [eg, eJ, eN, V, ep, eH, ev]));
    let ta = l.useCallback(() => {
            let e = (0, H.lo)(eB) === H.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            k.default.track(C.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e9,
                is_custom_message_edited: eZ && e && null != eQ ? eQ !== B.intl.string(B.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eZ && e,
                emoji_name: eZ && e && eX?.id == null ? eX?.surrogates : void 0,
                sound_id: eZ && e ? e$?.soundId : void 0,
                duration_ms: t - eO.startTime,
                payment_source_type: te?.type,
                gift_card_balance: tt,
                gift_card_currency: tn,
                virtual_currency_balance: ti,
            });
        }, [e9, eX, eQ, eB, eZ, e$, eO.startTime, te, tt, tn, ti]),
        ts = l.useCallback(() => {
            let e = null != P ? (0, b.NE)(P) : null;
            eZ && null != eB && null != e && (0, g.Yd)(eB.id, e);
        }, [P, eZ, eB]),
        tu = l.useMemo(() => () => ee?.(eb === G.h.COMPLETED, eD), [ee, eb, eD]),
        tr = (0, a.A)(() => Date.now(), [e1]),
        to = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: a } = t,
                    s = Date.now();
                if (e === T.pn.CONFIRM && (ta(), z?.(l), ts(), eI)) return void tu();
                (e2(e), eE?.(e), eU(null), e === T.pn.ADD_PAYMENT_STEPS && (u.h.wait(r.ET), u.h.wait(o.T3)));
                let c = null != n ? n : e1;
                null === c || a
                    ? k.default.track(C.HAw.PAYMENT_FLOW_LOADED, {
                          ...e9,
                          initial_step: c ?? e,
                          continue_session_initial_step: ev,
                          has_saved_payment_source: eC,
                      })
                    : k.default.track(C.HAw.PAYMENT_FLOW_STEP, {
                          ...e9,
                          ...i,
                          from_step: c,
                          to_step: e === T.pn.ADD_PAYMENT_STEPS ? T.pn.PAYMENT_ELEMENT : e,
                          step_duration_ms: s - tr,
                          flow_duration_ms: s - eO.startTime,
                          gift_card_balance: tt,
                          gift_card_currency: tn,
                      });
            },
            [e2, eE, eU, e1, ev, e9, tr, eO.startTime, ta, z, ts, eI, tu, eC, tt, tn],
        );
    return (
        (0, U.b)(e1, eV, to, ew, !1, void 0, ek),
        !(function (e) {
            let t = (0, A.s2)(),
                { purchaseTokenAuthState: n } = (0, m.t4)((e) => ({
                    purchaseTokenAuthState: e.purchaseTokenAuthState,
                }));
            l.useEffect(() => {
                null != t && t !== T.pn.AWAITING_PURCHASE_TOKEN_AUTH && n === h.C.PENDING
                    ? e(T.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                    : t === T.pn.AWAITING_PURCHASE_TOKEN_AUTH && n === h.C.SUCCESS && e(T.pn.REVIEW);
            }, [t, n, e]);
        })(to),
        (0, N.A)(tu),
        (0, x.s)(eW, () => ee(!1), eZ, !ec),
        (0, U.QR)(eV, ek),
        (0, i.jsx)(s.b, {
            className: Q.Xn,
            isShaking: eS && eb === G.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)($, {
                step: e1,
                transitionState: q,
                isGift: eZ,
                giftRecipient: eB,
                returnRef: eh,
                manaModalSize: e8,
                modalSizeOverride: eT,
                modalSizeGetter: e6,
                handleClose: tu,
                children: (0, i.jsx)(K.Ay, {
                    disableDefaultSlideTransformStyling: em,
                    header: (0, i.jsx)(J, { handleClose: tu, renderHeader: eo }),
                    ...{
                        initialPlanId: V,
                        subscriptionTier: X,
                        handleStepChange: to,
                        handleClose: tu,
                        analyticsData: e9,
                        setAnalyticsData: e7,
                        trialId: et,
                        reviewWarningMessage: en,
                        planGroup: ei,
                        openInvoiceId: el,
                        analyticsLocation: P,
                        onSubscriptionConfirmation: ea,
                        renderPurchaseConfirmation: es,
                        postSuccessGuild: eu,
                        followupSKUInfo: er,
                        skipConfirm: eI,
                        continueSessionToInitialStep: ev,
                        startingStepOverride: eP,
                    },
                }),
            }),
        })
    );
}
