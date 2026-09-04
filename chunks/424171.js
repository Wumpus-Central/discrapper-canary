n.d(t, { q: () => ee });
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
    f = n(655857),
    T = n(883645),
    m = n(558620),
    h = n(427675),
    I = n(169797),
    P = n(721836),
    k = n(174459),
    v = n(840251),
    y = n(688151),
    M = n(652215);
let C = new v.E([], y.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var D = n(319437),
    N = n(45787),
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
        i = (0, T.s2)();
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
        s = (0, T.s2)();
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
            returnRef: d,
            children: c,
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
        returnRef: d,
        "aria-label": B.intl.string(B.t.q9EGps),
        onClose: async () => {
            await l();
        },
        children: c,
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
            disableUnsupportedExternalSubscriptionHandler: ed = !1,
            applicationId: ec,
            guildId: e_,
            skuId: ep,
            onStepChange: eE,
            shakeWhilePurchasing: eS = !1,
            isLargeModal: eA = !1,
            isMediumModal: ef = !1,
            modalSizeOverride: eT,
            disableDefaultSlideTransformStyling: em = !1,
            returnRef: eh,
            skipConfirm: eI = !1,
            continueSessionToInitialStep: eP,
            startingStepOverride: ek,
            tenantManagesPaymentAuth: ev = !1,
            paymentModalVersion: ey = "v1",
        } = e,
        { paymentSources: eM, hasPaymentSources: eC } = (0, E.j)(),
        {
            selectedSkuId: eD,
            setSelectedSkuId: eN,
            setSelectedPlanId: eg,
            purchaseState: ew,
            setPurchaseState: eO,
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
            invoicePreview: eL,
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
        { displayCurrency: ez } = (0, f.Jn)(),
        { activitySessionId: eq } = (0, S.V)(),
        { paymentAuthenticationState: eV } = (0, A.o)(),
        eJ = (0, a.bG)([x.A], () => x.A.purchaseTokenAuthState),
        eK = (0, m.A)(),
        eZ = (0, h.S3)(),
        { isGift: eB, giftRecipient: eQ, customGiftMessage: eX, emojiConfetti: e$, soundEffect: e0 } = (0, Y.Pv)(),
        e1 = (0, T.Z8)(),
        e5 = (0, T.s2)(),
        e2 = l.useMemo(() => {
            if (null != e1) return e1.options;
        }, [e1]),
        e8 = (0, T.qv)(),
        e4 = "sm";
    eA ? (e4 = "xl") : (ef || e5 === U.pn.ADD_PAYMENT_STEPS) && (e4 = "md");
    let e9 = null != e2 ? e2.modalSizeGetter : void 0,
        e3 = (0, w.O)(),
        e6 = null != X && !eB && (0, b.U9)(e3, X),
        [e7, te] = l.useState({
            load_id: eb.loadId,
            discovery_session_id: eb.discoverySessionId,
            payment_type: M.frM[eG],
            location: I ?? v,
            source: y,
            subscription_type: O,
            subscription_plan_id: eK?.id ?? V,
            is_gift: eB,
            eligible_for_trial: null != et,
            location_stack: n,
            sku_id: ep,
            application_id: ec,
            guild_id: e_,
            payment_modal_version: ey,
            activity_session_id: eq,
            eligible_for_discount: e6,
            sku_product_line: eZ?.productLine,
            quantity: ej,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eY,
            open_invoice_id: el,
            ...t,
        }),
        tt = (0, L.W)(eM, eR),
        { giftCardBalance: tn, giftCardCurrency: ti } = (0, _.h)(),
        tl = null != eL ? eL.getDiscountIdIfExists() : void 0;
    l.useEffect(() => {
        te((e) => {
            let n = null != eK ? (0, W.y8)(eK.id, !1, eB, { paymentSourceId: ex.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eK?.id,
                price: n?.amount,
                regular_price: eK?.price,
                currency: ez,
                sku_id: eD,
                sku_product_line: eZ?.productLine,
                quantity: ej,
                ...t,
            };
        });
    }, [eK, eD, eB, ex, ez, t, eZ?.productLine, ej]),
        (0, c.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                k.default.track(M.HAw.PAYMENT_FLOW_STARTED, e, t), C.trigger();
            })({
                ...e7,
                continue_session_initial_step: eP,
                custom_checkout_flow: eW,
                has_saved_payment_source: eC,
                discount_id: null != e3 ? e3.discountId : tl,
            });
        }),
        l.useEffect(() => {
            null == eK && (null != eH && null != eP ? eg(eH) : eg(V)),
                null != ep ? eN(ep) : null != V && eN(G.A.get(V)?.skuId);
        }, [eg, eK, eN, V, ep, eH, eP]);
    let ts = l.useCallback(() => {
            let e = (0, H.lo)(eQ) === H.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            k.default.track(M.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e7,
                is_custom_message_edited: eB && e && null != eX ? eX !== B.intl.string(B.t.ZkOo1U) : void 0,
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
            let e = null != I ? (0, g.NE)(I) : null;
            eB && null != eQ && null != e && (0, N.Yd)(eQ.id, e);
        }, [I, eB, eQ]),
        tu = l.useMemo(() => () => ee?.(ew === j.h.COMPLETED, eD), [ee, ew, eD]),
        to = (0, s.A)(() => Date.now(), [e5]),
        tr = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === U.pn.CONFIRM && (ts(), z?.(l), ta(), eI)) return void tu();
                e8(e), eE?.(e), eU(null), e === U.pn.ADD_PAYMENT_STEPS && (o.h.wait(r.ET), o.h.wait(d.T3));
                let u = null != n ? n : e5;
                null === u || s
                    ? k.default.track(M.HAw.PAYMENT_FLOW_LOADED, {
                          ...e7,
                          initial_step: u ?? e,
                          continue_session_initial_step: eP,
                          has_saved_payment_source: eC,
                      })
                    : k.default.track(M.HAw.PAYMENT_FLOW_STEP, {
                          ...e7,
                          ...i,
                          from_step: u,
                          to_step: e === U.pn.ADD_PAYMENT_STEPS ? U.pn.PAYMENT_ELEMENT : e,
                          step_duration_ms: a - to,
                          flow_duration_ms: a - eb.startTime,
                          gift_card_balance: tn,
                          gift_card_currency: ti,
                      });
            },
            [e8, eE, eU, e5, eP, e7, to, eb.startTime, ts, z, ta, eI, tu, eC, tn, ti],
        );
    return (
        (0, R.b)(e5, eV, tr, eO, !1, void 0, ev),
        l.useEffect(() => {
            null != e5 && e5 !== U.pn.AWAITING_PURCHASE_TOKEN_AUTH && eJ === x.C.PENDING
                ? tr(U.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e5 === U.pn.AWAITING_PURCHASE_TOKEN_AUTH && eJ === x.C.SUCCESS && tr(U.pn.REVIEW);
        }, [e5, eJ, tr]),
        (0, D.A)(tu),
        (0, F.s)(eF, () => ee(!1), eB, !ed),
        (0, R.QR)(eV, ev),
        (0, i.jsx)(u.b, {
            className: Q.Xn,
            isShaking: eS && ew === j.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)($, {
                step: e5,
                transitionState: q,
                isGift: eB,
                giftRecipient: eQ,
                returnRef: eh,
                manaModalSize: e4,
                modalSizeOverride: eT,
                modalSizeGetter: e9,
                handleClose: tu,
                children: (0, i.jsx)(K.Ay, {
                    disableDefaultSlideTransformStyling: em,
                    header: (0, i.jsx)(J, { handleClose: tu, renderHeader: er }),
                    ...{
                        initialPlanId: V,
                        subscriptionTier: X,
                        handleStepChange: tr,
                        handleClose: tu,
                        analyticsData: e7,
                        setAnalyticsData: te,
                        trialId: et,
                        reviewWarningMessage: en,
                        planGroup: ei,
                        openInvoiceId: el,
                        analyticsLocation: I,
                        onSubscriptionConfirmation: es,
                        renderPurchaseConfirmation: ea,
                        postSuccessGuild: eu,
                        followupSKUInfo: eo,
                        skipConfirm: eI,
                        continueSessionToInitialStep: eP,
                        startingStepOverride: ek,
                    },
                }),
            }),
        })
    );
}
