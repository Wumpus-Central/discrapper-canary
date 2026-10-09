n.d(t, { q: () => ee });
var i = n(477900),
    l = n(582128),
    a = n(999129),
    s = n(568602),
    u = n(158032),
    r = n(830382),
    o = n(964486),
    c = n(11939),
    d = n(145659),
    _ = n(202475),
    p = n(31823),
    E = n(211083),
    S = n(655857),
    f = n(883645),
    A = n(166532),
    T = n(642639),
    m = n(442467),
    I = n(558620),
    h = n(427675),
    v = n(169797),
    P = n(174459),
    k = n(840251),
    y = n(688151),
    D = n(652215);
let M = new k.E([], y.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var C = n(319437),
    N = n(45787),
    g = n(51501),
    b = n(724651),
    O = n(989790),
    w = n(511484),
    R = n(251913),
    x = n(436102),
    U = n(478996),
    W = n(97352),
    F = n(45938),
    H = n(158045),
    Y = n(951305),
    j = n(566980),
    G = n(800471),
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
    return t === A.pn.REVIEW ? (0, i.jsx)(z.l, {}) : (0, i.jsx)(z.f, {});
}
function J(e) {
    let { renderHeader: t, handleClose: n } = e,
        a = (0, f.s2)();
    return l.useMemo(
        () =>
            a === A.pn.REVIEW || a === A.pn.ADD_PAYMENT_STEPS
                ? (0, i.jsx)(V, { step: a })
                : (0, i.jsx)(q, { renderHeader: t, handleClose: n }),
        [t, n, a],
    );
}
var K = n(482132);
n(322076);
var Z = n(202541),
    B = n(660183),
    Q = n(796694);
let X = { [A.pn.GIFT_CUSTOMIZATION]: "xl", [A.pn.REVIEW]: "md", [A.pn.ADD_PAYMENT_STEPS]: "md" };
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
    return (0, i.jsx)(v.Jg, {
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
            analyticsLocation: v,
            analyticsObject: k,
            analyticsSourceLocation: y,
            analyticsSubscriptionType: O = D.rzx.PREMIUM,
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
            returnRef: eI,
            skipConfirm: eh = !1,
            continueSessionToInitialStep: ev,
            startingStepOverride: eP,
            tenantManagesPaymentAuth: ek = !1,
            paymentModalVersion: ey = "v1",
        } = e,
        { paymentSources: eD, hasPaymentSources: eM } = (0, _.j)(),
        {
            selectedSkuId: eC,
            setSelectedSkuId: eN,
            setSelectedPlanId: eg,
            purchaseState: eb,
            setPurchaseState: eO,
            contextMetadata: ew,
            paymentSourceId: eR,
            setPurchaseError: ex,
            priceOptions: eU,
            activeSubscription: eW,
            purchaseType: eF,
            defaultPlanId: eH,
            getAvailableDefaultPlanId: eY,
            customCheckoutFlow: ej,
            unifiedCheckoutFlow: eG,
            quantity: eL,
            invoicePreview: ez,
        } = (0, T.t4)((e) => ({
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
            getAvailableDefaultPlanId: e.getAvailableDefaultPlanId,
            customCheckoutFlow: e.customCheckoutFlow,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            quantity: e.quantity,
            invoicePreview: e.checkoutInvoicePreview,
        })),
        { displayCurrency: eq } = (0, S.Jn)(),
        { activitySessionId: eV } = (0, p.V)(),
        { paymentAuthenticationState: eJ } = (0, E.o)(),
        eK = (0, I.A)(),
        eZ = (0, h.S3)(),
        { isGift: eB, giftRecipient: eQ, customGiftMessage: eX, emojiConfetti: e$, soundEffect: e0 } = (0, Y.Pv)(),
        e1 = (0, f.Z8)(),
        e2 = (0, f.s2)(),
        e5 = l.useMemo(() => {
            if (null != e1) return e1.options;
        }, [e1]),
        e6 = (0, f.qv)(),
        e8 = "sm";
    ef ? (e8 = "xl") : (eA || e2 === A.pn.ADD_PAYMENT_STEPS) && (e8 = "md");
    let e4 = null != e5 ? e5.modalSizeGetter : void 0,
        e9 = (0, b.O)(),
        e3 = null != X && !eB && (0, w.U9)(e9, X),
        [e7, te] = l.useState({
            load_id: ew.loadId,
            discovery_session_id: ew.discoverySessionId,
            payment_type: D.frM[eF],
            location: v ?? k,
            source: y,
            subscription_type: O,
            subscription_plan_id: eK?.id ?? V,
            is_gift: eB,
            eligible_for_trial: null != et,
            location_stack: n,
            sku_id: ep,
            application_id: ed,
            guild_id: e_,
            payment_modal_version: ey,
            activity_session_id: eV,
            eligible_for_discount: e3,
            sku_product_line: eZ?.productLine,
            quantity: eL,
            checkout_design: d.r.UNIFIED,
            checkout_flow: eG,
            open_invoice_id: el,
            ...t,
        }),
        tt = (0, L.W)(eD, eR),
        { giftCardBalance: tn, giftCardCurrency: ti } = (0, c.h)(),
        { balance: tl } = (0, U.W0)(),
        ta = null != ez ? ez.getDiscountIdIfExists() : void 0;
    (l.useEffect(() => {
        te((e) => {
            let n = null != eK ? (0, H.y8)(eK.id, !1, eB, { paymentSourceId: eU.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eK?.id,
                price: n?.amount,
                regular_price: eK?.price,
                currency: eq,
                sku_id: eC,
                sku_product_line: eZ?.productLine,
                quantity: eL,
                virtual_currency_balance: tl,
                ...t,
            };
        });
    }, [eK, eC, eB, eU, eq, t, eZ?.productLine, eL, tl]),
        (0, o.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (P.default.track(D.HAw.PAYMENT_FLOW_STARTED, e, t), M.trigger());
            })({
                ...e7,
                virtual_currency_balance: tl,
                continue_session_initial_step: ev,
                custom_checkout_flow: ej,
                has_saved_payment_source: eM,
                discount_id: null != e9 ? e9.discountId : ta,
            });
        }),
        l.useEffect(() => {
            if (null == eK)
                if (null != eH && null != ev) {
                    let e = ep ?? eC;
                    eg(eY({ skuId: e }) ?? (0, G.x)(e, eW));
                } else eg(V);
            null != ep ? eN(ep) : null != V && eN(W.A.get(V)?.skuId);
        }, [eg, eK, eN, V, ep, eC, eH, eY, eW, ev]));
    let ts = l.useCallback(() => {
            let e = (0, F.lo)(eQ) === F.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            P.default.track(D.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e7,
                is_custom_message_edited: eB && e && null != eX ? eX !== B.intl.string(B.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eB && e,
                emoji_name: eB && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eB && e ? e0?.soundId : void 0,
                duration_ms: t - ew.startTime,
                payment_source_type: tt?.type,
                gift_card_balance: tn,
                gift_card_currency: ti,
                virtual_currency_balance: tl,
            });
        }, [e7, e$, eX, eQ, eB, e0, ew.startTime, tt, tn, ti, tl]),
        tu = l.useCallback(() => {
            let e = null != v ? (0, g.NE)(v) : null;
            eB && null != eQ && null != e && (0, N.Yd)(eQ.id, e);
        }, [v, eB, eQ]),
        tr = l.useMemo(() => () => ee?.(eb === j.h.COMPLETED, eC), [ee, eb, eC]),
        to = (0, a.A)(() => Date.now(), [e2]),
        tc = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: a } = t,
                    s = Date.now();
                if (e === A.pn.CONFIRM && (ts(), z?.(l), tu(), eh)) return void tr();
                (e6(e), eE?.(e), ex(null), e === A.pn.ADD_PAYMENT_STEPS && ((0, u.ET)(), (0, r.T3)()));
                let o = null != n ? n : e2;
                null === o || a
                    ? P.default.track(D.HAw.PAYMENT_FLOW_LOADED, {
                          ...e7,
                          initial_step: o ?? e,
                          continue_session_initial_step: ev,
                          has_saved_payment_source: eM,
                      })
                    : P.default.track(D.HAw.PAYMENT_FLOW_STEP, {
                          ...e7,
                          ...i,
                          from_step: o,
                          to_step: e === A.pn.ADD_PAYMENT_STEPS ? A.pn.PAYMENT_ELEMENT : e,
                          step_duration_ms: s - to,
                          flow_duration_ms: s - ew.startTime,
                          gift_card_balance: tn,
                          gift_card_currency: ti,
                      });
            },
            [e6, eE, ex, e2, ev, e7, to, ew.startTime, ts, z, tu, eh, tr, eM, tn, ti],
        );
    return (
        (0, R.b)(e2, eJ, tc, eO, !1, void 0, ek),
        !(function (e) {
            let t = (0, f.s2)(),
                { purchaseTokenAuthState: n } = (0, T.t4)((e) => ({
                    purchaseTokenAuthState: e.purchaseTokenAuthState,
                }));
            l.useEffect(() => {
                null != t && t !== A.pn.AWAITING_PURCHASE_TOKEN_AUTH && n === m.C.PENDING
                    ? e(A.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                    : t === A.pn.AWAITING_PURCHASE_TOKEN_AUTH && n === m.C.SUCCESS && e(A.pn.REVIEW);
            }, [t, n, e]);
        })(tc),
        (0, C.A)(tr),
        (0, x.s)(eW, () => ee(!1), eB, !ec),
        (0, R.QR)(eJ, ek),
        (0, i.jsx)(s.b, {
            className: Q.Xn,
            isShaking: eS && eb === j.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)($, {
                step: e2,
                transitionState: q,
                isGift: eB,
                giftRecipient: eQ,
                returnRef: eI,
                manaModalSize: e8,
                modalSizeOverride: eT,
                modalSizeGetter: e4,
                handleClose: tr,
                children: (0, i.jsx)(K.Ay, {
                    disableDefaultSlideTransformStyling: em,
                    header: (0, i.jsx)(J, { handleClose: tr, renderHeader: eo }),
                    ...{
                        initialPlanId: V,
                        subscriptionTier: X,
                        handleStepChange: tc,
                        handleClose: tr,
                        analyticsData: e7,
                        setAnalyticsData: te,
                        trialId: et,
                        reviewWarningMessage: en,
                        planGroup: ei,
                        openInvoiceId: el,
                        analyticsLocation: v,
                        onSubscriptionConfirmation: ea,
                        renderPurchaseConfirmation: es,
                        postSuccessGuild: eu,
                        followupSKUInfo: er,
                        skipConfirm: eh,
                        continueSessionToInitialStep: ev,
                        startingStepOverride: eP,
                    },
                }),
            }),
        })
    );
}
