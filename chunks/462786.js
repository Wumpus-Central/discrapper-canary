n.d(t, { q: () => ee });
var i = n(477900),
    l = n(582128),
    a = n(476231),
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
    T = n(516106),
    m = n(442467),
    I = n(558620),
    h = n(427675),
    P = n(169797),
    k = n(129230),
    v = n(840251),
    y = n(688151),
    D = n(652215);
let M = new v.E([], y.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var b = n(319437),
    C = n(45787),
    N = n(51501),
    g = n(423814),
    O = n(728666),
    w = n(511484),
    R = n(251913),
    W = n(436102),
    x = n(672619),
    U = n(97352),
    L = n(45938),
    Y = n(879610),
    F = n(418200),
    H = n(566980),
    j = n(800471),
    G = n(216641),
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
var Z = n(682901),
    B = n(792996),
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
            analyticsObject: v,
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
            continueSessionToInitialStep: eP,
            startingStepOverride: ek,
            tenantManagesPaymentAuth: ev = !1,
            paymentModalVersion: ey = "v1",
        } = e,
        { paymentSources: eD, hasPaymentSources: eM } = (0, _.j)(),
        {
            selectedSkuId: eb,
            setSelectedSkuId: eC,
            setSelectedPlanId: eN,
            purchaseState: eg,
            setPurchaseState: eO,
            contextMetadata: ew,
            paymentSourceId: eR,
            setPurchaseError: eW,
            priceOptions: ex,
            activeSubscription: eU,
            purchaseType: eL,
            defaultPlanId: eY,
            getAvailableDefaultPlanId: eF,
            customCheckoutFlow: eH,
            unifiedCheckoutFlow: ej,
            quantity: eG,
            invoicePreview: ez,
            setLinkWalletEnabled: eq,
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
            setLinkWalletEnabled: e.setLinkWalletEnabled,
        })),
        { displayCurrency: eV } = (0, S.Jn)(),
        { activitySessionId: eJ } = (0, p.V)(),
        { paymentAuthenticationState: eK } = (0, E.o)(),
        eZ = (0, I.A)(),
        eB = (0, h.S3)(),
        { isGift: eQ, giftRecipient: eX, customGiftMessage: e$, emojiConfetti: e0, soundEffect: e1 } = (0, F.Pv)(),
        e2 = (0, f.Z8)(),
        e6 = (0, f.s2)(),
        e8 = l.useMemo(() => {
            if (null != e2) return e2.options;
        }, [e2]),
        e4 = (0, f.qv)(),
        e5 = "sm";
    ef ? (e5 = "xl") : (eA || e6 === A.pn.ADD_PAYMENT_STEPS) && (e5 = "md");
    let e3 = null != e8 ? e8.modalSizeGetter : void 0,
        e9 = (0, g.O)(),
        e7 = null != X && !eQ && (0, w.U9)(e9, X),
        [te, tt] = l.useState({
            load_id: ew.loadId,
            discovery_session_id: ew.discoverySessionId,
            payment_type: D.frM[eL],
            location: P ?? v,
            source: y,
            subscription_type: O,
            subscription_plan_id: eZ?.id ?? V,
            is_gift: eQ,
            eligible_for_trial: null != et,
            location_stack: n,
            sku_id: ep,
            application_id: ed,
            guild_id: e_,
            payment_modal_version: ey,
            activity_session_id: eJ,
            eligible_for_discount: e7,
            sku_product_line: eB?.productLine,
            quantity: eG,
            checkout_design: d.r.UNIFIED,
            checkout_flow: ej,
            open_invoice_id: el,
            ...t,
        }),
        tn = (0, G.W)(eD, eR),
        { giftCardBalance: ti, giftCardCurrency: tl } = (0, c.h)(),
        { balance: ta } = (0, x.W0)(),
        ts = null != ez ? ez.getDiscountIdIfExists() : void 0;
    (l.useEffect(() => {
        tt((e) => {
            let n = null != eZ ? (0, Y.y8)(eZ.id, !1, eQ, { paymentSourceId: ex.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eZ?.id,
                price: n?.amount,
                regular_price: eZ?.price,
                currency: eV,
                sku_id: eb,
                sku_product_line: eB?.productLine,
                quantity: eG,
                virtual_currency_balance: ta,
                ...t,
            };
        });
    }, [eZ, eb, eQ, ex, eV, t, eB?.productLine, eG, ta]),
        (0, o.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (k.default.track(D.HAw.PAYMENT_FLOW_STARTED, e, t), M.trigger());
            })({
                ...te,
                virtual_currency_balance: ta,
                continue_session_initial_step: eP,
                custom_checkout_flow: eH,
                has_saved_payment_source: eM,
                discount_id: null != e9 ? e9.discountId : ts,
            });
        }),
        l.useEffect(() => {
            if (null == eZ)
                if (null != eY && null != eP) {
                    let e = ep ?? eb;
                    eN(eF({ skuId: e }) ?? (0, j.x)(e, eU));
                } else eN(V);
            null != ep ? eC(ep) : null != V && eC(U.A.get(V)?.skuId);
        }, [eN, eZ, eC, V, ep, eb, eY, eF, eU, eP]));
    let tu = l.useCallback(() => {
            let e = (0, L.lo)(eX) === L.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            k.default.track(D.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...te,
                is_custom_message_edited: eQ && e && null != e$ ? e$ !== B.intl.string(B.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eQ && e,
                emoji_name: eQ && e && e0?.id == null ? e0?.surrogates : void 0,
                sound_id: eQ && e ? e1?.soundId : void 0,
                duration_ms: t - ew.startTime,
                payment_source_type: tn?.type,
                gift_card_balance: ti,
                gift_card_currency: tl,
                virtual_currency_balance: ta,
            });
        }, [te, e0, e$, eX, eQ, e1, ew.startTime, tn, ti, tl, ta]),
        tr = l.useCallback(() => {
            let e = null != P ? (0, N.NE)(P) : null;
            eQ && null != eX && null != e && (0, C.Yd)(eX.id, e);
        }, [P, eQ, eX]),
        to = l.useMemo(() => () => ee?.(eg === H.h.COMPLETED, eb), [ee, eg, eb]),
        tc = (0, a.A)(() => Date.now(), [e6]),
        td = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: a } = t,
                    s = Date.now();
                if (e === A.pn.CONFIRM && (tu(), z?.(l), tr(), eh)) return void to();
                (e4(e), eE?.(e), eW(null), e === A.pn.ADD_PAYMENT_STEPS && ((0, u.ET)(), (0, r.T3)()));
                let o = null != n ? n : e6;
                null === o || a
                    ? k.default.track(D.HAw.PAYMENT_FLOW_LOADED, {
                          ...te,
                          initial_step: o ?? e,
                          continue_session_initial_step: eP,
                          has_saved_payment_source: eM,
                      })
                    : k.default.track(D.HAw.PAYMENT_FLOW_STEP, {
                          ...te,
                          ...i,
                          from_step: o,
                          to_step: e === A.pn.ADD_PAYMENT_STEPS ? A.pn.PAYMENT_ELEMENT : e,
                          step_duration_ms: s - tc,
                          flow_duration_ms: s - ew.startTime,
                          gift_card_balance: ti,
                          gift_card_currency: tl,
                      });
            },
            [e4, eE, eW, e6, eP, te, tc, ew.startTime, tu, z, tr, eh, to, eM, ti, tl],
        );
    ((0, R.b)(e6, eK, td, eO, !1, void 0, ev),
        (function (e) {
            let t = (0, f.s2)(),
                { purchaseTokenAuthState: n } = (0, T.t4)((e) => ({
                    purchaseTokenAuthState: e.purchaseTokenAuthState,
                }));
            l.useEffect(() => {
                null != t && t !== A.pn.AWAITING_PURCHASE_TOKEN_AUTH && n === m.C.PENDING
                    ? e(A.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                    : t === A.pn.AWAITING_PURCHASE_TOKEN_AUTH && n === m.C.SUCCESS && e(A.pn.REVIEW);
            }, [t, n, e]);
        })(td),
        (0, b.A)(to),
        (0, W.s)(eU, () => ee(!1), eQ, !ec),
        (0, R.QR)(eK, ev));
    let t_ = l.useCallback(
        (e) => {
            (eq(e?.linkWalletEnabled ?? !0), td(A.pn.ADD_PAYMENT_STEPS));
        },
        [td, eq],
    );
    return (0, i.jsx)(s.b, {
        className: Q.Xn,
        isShaking: eS && eg === H.h.PURCHASING,
        intensity: 2,
        children: (0, i.jsx)($, {
            step: e6,
            transitionState: q,
            isGift: eQ,
            giftRecipient: eX,
            returnRef: eI,
            manaModalSize: e5,
            modalSizeOverride: eT,
            modalSizeGetter: e3,
            handleClose: to,
            children: (0, i.jsx)(K.Ay, {
                disableDefaultSlideTransformStyling: em,
                header: (0, i.jsx)(J, { handleClose: to, renderHeader: eo }),
                ...{
                    initialPlanId: V,
                    subscriptionTier: X,
                    handleStepChange: td,
                    handleClose: to,
                    handlePaymentSourceAdd: t_,
                    analyticsData: te,
                    setAnalyticsData: tt,
                    trialId: et,
                    reviewWarningMessage: en,
                    planGroup: ei,
                    openInvoiceId: el,
                    analyticsLocation: P,
                    onSubscriptionConfirmation: ea,
                    renderPurchaseConfirmation: es,
                    postSuccessGuild: eu,
                    followupSKUInfo: er,
                    skipConfirm: eh,
                    continueSessionToInitialStep: eP,
                    startingStepOverride: ek,
                    analyticsSourceLocation: y,
                },
            }),
        }),
    });
}
