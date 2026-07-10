n.d(t, { q: () => ea });
var i = n(627968),
    l = n(64700),
    u = n(976634),
    s = n(702841),
    o = n(568602),
    r = n(228366),
    a = n(158032),
    d = n(830382),
    c = n(964486),
    _ = n(11939),
    p = n(145659),
    S = n(31823),
    m = n(426398),
    f = n(211083),
    E = n(655857),
    A = n(666646),
    I = n(558620),
    T = n(427675),
    h = n(169797),
    P = n(6938),
    C = n(174459),
    k = n(840251),
    y = n(688151),
    M = n(652215);
let D = new k.E([], y.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var g = n(319437),
    v = n(70730),
    b = n(45787),
    N = n(51501),
    O = n(422936),
    w = n(862990),
    U = n(410516),
    R = n(251913),
    x = n(166532),
    H = n(71319),
    F = n(344159),
    G = n(97352),
    Y = n(45938),
    j = n(428262),
    L = n(937008),
    W = n(566980),
    B = n(615310),
    z = n(216641),
    q = n(120700),
    K = n(364995),
    V = n(463376),
    J = n(584160),
    Z = n(35587),
    Q = n(906234),
    X = n(375708);
function $(e) {
    let { headerBadgeConfig: t } = e,
        { selectedSkuId: n, paymentSourceId: u } = (0, P.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
        })),
        s = (0, T.S3)(),
        o = (0, B.bB)(),
        { checkoutPaymentSources: r, storeCountry: a } = (0, K.t)(),
        d = l.useMemo(() => {
            if (null == u) return null;
            let e = r.find((e) => e.id === u);
            return null == e ? null : (e.relocationCountry ?? null);
        }, [r, u]),
        c = l.useMemo(
            () =>
                (0, J.uO)({
                    step: o ?? void 0,
                    skuId: n ?? (null != s ? s.id : null),
                    storeCountryFromCheckoutContext: a,
                    relocationCountry: d,
                    ...t,
                }),
            [o, s, n, a, d, t],
        );
    return (0, i.jsx)(h.s3, { ...c });
}
function ee() {
    let {
            premiumDiscountPercent: e,
            selectedPlanId: t,
            isPremiumDiscountAppliedToCheckoutInvoice: n,
        } = (0, P.t4)((e) => ({
            premiumDiscountPercent: e.get("premiumDiscountPercent"),
            isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
            selectedPlanId: e.selectedPlanId,
        })),
        { isPremiumGroupPurchase: u, isEligibleForTrial: s, isEligibleForDiscount: o } = (0, V.i)(),
        r = (0, Q.G)(t ?? "") && !s,
        a = (0, Z.Sq)(),
        d = l.useMemo(() => {
            let t, i;
            return (
                u
                    ? (i = "beta")
                    : s
                      ? (i = "trial")
                      : (o || r || a) &&
                        (n && null != e && (t = X.intl.formatToPlainString(X.t.iiLbvu, { percent: e })), (i = "promo")),
                null != t ? { customHeaderBadgeText: t } : { headerBadgePreset: i }
            );
        }, [u, s, o, r, a, e, n]);
    return (0, i.jsx)($, { headerBadgeConfig: d });
}
let et = { [q.C.PREMIUM_CHECKOUT]: () => (0, i.jsx)(ee, {}) };
function en(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, B.bB)();
    return l.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function ei(e) {
    let { renderHeader: t, handleClose: n, skipUnifiedHeaderForSteps: u } = e,
        s = (0, B.bB)(),
        o = (0, P.t4)((e) => e.unifiedCheckoutFlow),
        { shouldRenderCoreUnifiedHeader: r, renderCoreUnifiedHeader: a } = l.useMemo(
            () => ({
                shouldRenderCoreUnifiedHeader: (function (e) {
                    let { step: t, skipUnifiedHeaderForSteps: n } = e;
                    if (null == t) return !1;
                    if (t === x.pn.REVIEW || t === x.pn.ADD_PAYMENT_STEPS) return !0;
                    let i = null != n && n.includes(t);
                    return J.MU.includes(t) && !i;
                })({ step: s, skipUnifiedHeaderForSteps: u }),
                renderCoreUnifiedHeader: null != o && o in et ? et[o] : null,
            }),
            [s, u, o],
        );
    return l.useMemo(
        () => (r ? (null != a ? a() : (0, i.jsx)($, {})) : (0, i.jsx)(en, { renderHeader: t, handleClose: n })),
        [r, a, t, n],
    );
}
var el = n(482132);
n(322076);
var eu = n(202541),
    es = n(106451);
let eo = { [x.pn.GIFT_CUSTOMIZATION]: "xl", [x.pn.REVIEW]: "md", [x.pn.ADD_PAYMENT_STEPS]: "md" };
function er(e) {
    let {
            step: t,
            transitionState: n,
            handleClose: l,
            isGift: u,
            giftRecipient: s,
            manaModalSize: o,
            modalSizeGetter: r,
            returnRef: a,
            children: d,
        } = e,
        c = (0, w.FY)({ isGift: u }),
        _ =
            null != r
                ? r({ canCurrentlyPurchasePremiumGroup: c, isGift: u, giftRecipient: s })
                : (function (e, t) {
                      let { manaModalSizeFromProps: n } = t,
                          i = n ?? "md";
                      return null == e ? i : e in eo ? eo[e] : i;
                  })(t, { manaModalSizeFromProps: o });
    return (0, i.jsx)(h.Jg, {
        transitionState: n,
        size: _,
        returnRef: a,
        "aria-label": X.intl.string(X.t.q9EGps),
        onClose: async () => {
            await l();
        },
        children: d,
    });
}
function ea(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: h,
            analyticsObject: k,
            analyticsSourceLocation: y,
            analyticsSubscriptionType: w = M.rzx.PREMIUM,
            onComplete: q,
            transitionState: K,
            initialPlanId: V,
            subscriptionTier: J,
            onClose: Z,
            trialId: Q,
            reviewWarningMessage: $,
            planGroup: ee = eu.LE,
            openInvoiceId: et,
            onSubscriptionConfirmation: en,
            renderPurchaseConfirmation: eo,
            postSuccessGuild: ea,
            followupSKUInfo: ed,
            renderHeader: ec,
            skipUnifiedHeaderForSteps: e_,
            disableUnsupportedExternalSubscriptionHandler: ep = !1,
            applicationId: eS,
            guildId: em,
            skuId: ef,
            onStepChange: eE,
            shakeWhilePurchasing: eA = !1,
            isLargeModal: eI = !1,
            isMediumModal: eT = !1,
            returnRef: eh,
            skipConfirm: eP = !1,
            continueSessionToInitialStep: eC,
            tenantManagesPaymentAuth: ek = !1,
            paymentModalVersion: ey = "v1",
        } = e,
        { paymentSources: eM, hasPaymentSources: eD } = (0, m.jm)(),
        {
            selectedSkuId: eg,
            setSelectedSkuId: ev,
            setSelectedPlanId: eb,
            purchaseState: eN,
            setPurchaseState: eO,
            contextMetadata: ew,
            paymentSourceId: eU,
            setPurchaseError: eR,
            priceOptions: ex,
            activeSubscription: eH,
            purchaseType: eF,
            defaultPlanId: eG,
            customCheckoutFlow: eY,
            unifiedCheckoutFlow: ej,
            quantity: eL,
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
        { displayCurrency: eW } = (0, E.Jn)(),
        { activitySessionId: eB } = (0, S.V)(),
        { paymentAuthenticationState: ez } = (0, f.o)(),
        eq = (0, s.bG)([H.A], () => H.A.purchaseTokenAuthState),
        eK = (0, A.sw)(),
        eV = (0, I.A)(),
        eJ = (0, T.S3)(),
        { isGift: eZ, giftRecipient: eQ, customGiftMessage: eX, emojiConfetti: e$, soundEffect: e0 } = (0, L.Pv)(),
        e1 = (0, B.Z8)(),
        e6 = (0, B.bB)(),
        e4 = l.useMemo(() => {
            if (null != e1) return e1.options;
        }, [e1]),
        e2 = (0, B.l)(),
        e3 = "sm";
    eI ? (e3 = "xl") : (eT || e6 === x.pn.ADD_PAYMENT_STEPS) && (e3 = "md");
    let e5 = null != e4 ? e4.modalSizeGetter : void 0,
        e8 = (0, O.O)(),
        e9 = null != J && !eZ && (0, U.U9)(e8, J),
        [e7, te] = l.useState({
            load_id: ew.loadId,
            discovery_session_id: ew.discoverySessionId,
            payment_type: M.frM[eF],
            location: h ?? k,
            source: y,
            subscription_type: w,
            subscription_plan_id: eV?.id ?? V,
            is_gift: eZ,
            eligible_for_trial: null != Q,
            location_stack: n,
            sku_id: ef,
            application_id: eS,
            guild_id: em,
            payment_modal_version: ey,
            activity_session_id: eB,
            eligible_for_discount: e9,
            sku_product_line: eJ?.productLine,
            quantity: eL,
            checkout_design: p.r.UNIFIED,
            checkout_flow: ej,
            ...t,
        }),
        tt = (0, z.W)(eM, eU),
        { giftCardBalance: tn, giftCardCurrency: ti } = (0, _.h)(),
        tl = null != eK ? eK.getDiscountIdIfExists() : void 0;
    l.useEffect(() => {
        te((e) => {
            let n = null != eV ? (0, j.y8)(eV.id, !1, eZ, { paymentSourceId: ex.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eV?.id,
                price: n?.amount,
                regular_price: eV?.price,
                currency: eW,
                sku_id: eg,
                sku_product_line: eJ?.productLine,
                quantity: eL,
                ...t,
            };
        });
    }, [eV, eg, eZ, ex, eW, t, eJ?.productLine, eL]),
        (0, c.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                C.default.track(M.HAw.PAYMENT_FLOW_STARTED, e, t), D.trigger();
            })({
                ...e7,
                continue_session_initial_step: eC,
                custom_checkout_flow: eY,
                has_saved_payment_source: eD,
                discount_id: null != e8 ? e8.discountId : tl,
            });
        }),
        l.useEffect(() => {
            null == eV && (null != eG && null != eC ? eb(eG) : eb(V)),
                null != ef ? ev(ef) : null != V && ev(G.A.get(V)?.skuId);
        }, [eb, eV, ev, V, ef, eG, eC]);
    let tu = l.useCallback(() => {
            let e = (0, Y.lo)(eQ) === Y.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            C.default.track(M.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e7,
                is_custom_message_edited: eZ && e && null != eX ? eX !== X.intl.string(X.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eZ && e,
                emoji_name: eZ && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eZ && e ? e0?.soundId : void 0,
                duration_ms: t - ew.startTime,
                payment_source_type: tt?.type,
                gift_card_balance: tn,
                gift_card_currency: ti,
            });
        }, [e7, e$, eX, eQ, eZ, e0, ew.startTime, tt, tn, ti]),
        ts = l.useCallback(() => {
            let { enabled: e } = v.u.getConfig({ location: "maybeSoftDismissGiftIntentOnPurchase" }),
                t = null != h ? (0, N.NE)(h) : null;
            eZ && null != eQ && e && null != t && (0, b.Yd)(eQ.id, t);
        }, [h, eZ, eQ]),
        to = l.useMemo(() => () => Z?.(eN === W.h.COMPLETED, eg), [Z, eN, eg]),
        tr = (0, u.A)(() => Date.now(), [e6]),
        ta = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: u } = t,
                    s = Date.now();
                if (e === x.pn.CONFIRM && (tu(), q?.(l), ts(), eP)) return void to();
                e2(e), eE?.(e), eR(null), e === x.pn.ADD_PAYMENT_STEPS && (r.h.wait(a.ET), r.h.wait(d.T3));
                let o = null != n ? n : e6;
                null === o || u
                    ? C.default.track(M.HAw.PAYMENT_FLOW_LOADED, {
                          ...e7,
                          initial_step: o ?? e,
                          continue_session_initial_step: eC,
                          has_saved_payment_source: eD,
                      })
                    : C.default.track(M.HAw.PAYMENT_FLOW_STEP, {
                          ...e7,
                          ...i,
                          from_step: o,
                          to_step: e === x.pn.ADD_PAYMENT_STEPS ? x.pn.PAYMENT_TYPE : e,
                          step_duration_ms: s - tr,
                          flow_duration_ms: s - ew.startTime,
                          gift_card_balance: tn,
                          gift_card_currency: ti,
                      });
            },
            [e2, eE, eR, e6, eC, e7, tr, ew.startTime, tu, q, ts, eP, to, eD, tn, ti],
        );
    return (
        (0, R.b)(e6, ez, ta, eO, !1, void 0, ek),
        l.useEffect(() => {
            null != e6 && e6 !== x.pn.AWAITING_PURCHASE_TOKEN_AUTH && eq === H.C.PENDING
                ? ta(x.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e6 === x.pn.AWAITING_PURCHASE_TOKEN_AUTH && eq === H.C.SUCCESS && ta(x.pn.REVIEW);
        }, [e6, eq, ta]),
        (0, g.A)(to),
        (0, F.s)(eH, () => Z(!1), eZ, !ep),
        (0, R.QR)(ez, ek),
        (0, i.jsx)(o.b, {
            className: es.Xn,
            isShaking: eA && eN === W.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(er, {
                step: e6,
                transitionState: K,
                isGift: eZ,
                giftRecipient: eQ,
                returnRef: eh,
                manaModalSize: e3,
                modalSizeGetter: e5,
                handleClose: to,
                children: (0, i.jsx)(el.Ay, {
                    header: (0, i.jsx)(ei, { handleClose: to, skipUnifiedHeaderForSteps: e_, renderHeader: ec }),
                    ...{
                        initialPlanId: V,
                        subscriptionTier: J,
                        handleStepChange: ta,
                        handleClose: to,
                        analyticsData: e7,
                        setAnalyticsData: te,
                        trialId: Q,
                        reviewWarningMessage: $,
                        planGroup: ee,
                        openInvoiceId: et,
                        analyticsLocation: h,
                        onSubscriptionConfirmation: en,
                        renderPurchaseConfirmation: eo,
                        postSuccessGuild: ea,
                        followupSKUInfo: ed,
                        skipConfirm: eP,
                        continueSessionToInitialStep: eC,
                    },
                }),
            }),
        })
    );
}
