n.d(t, { q: () => $ });
var i = n(477900),
    l = n(582128),
    s = n(999129),
    a = n(568602),
    u = n(228366),
    o = n(158032),
    r = n(830382),
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
    P = n(427675),
    k = n(169797),
    v = n(174459),
    y = n(840251),
    M = n(688151),
    C = n(652215);
let D = new y.E([], M.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var N = n(319437),
    g = n(45787),
    w = n(51501),
    O = n(724651),
    b = n(989790),
    R = n(511484),
    U = n(251913),
    x = n(344159),
    F = n(97352),
    H = n(45938),
    W = n(158045),
    Y = n(951305),
    j = n(566980),
    G = n(216641),
    L = n(580133);
function z(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, A.s2)();
    return l.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function q(e) {
    let { step: t } = e;
    return t === T.pn.REVIEW ? (0, i.jsx)(L.l, {}) : (0, i.jsx)(L.f, {});
}
function V(e) {
    let { renderHeader: t, handleClose: n } = e,
        s = (0, A.s2)();
    return l.useMemo(
        () =>
            s === T.pn.REVIEW || s === T.pn.ADD_PAYMENT_STEPS
                ? (0, i.jsx)(q, { step: s })
                : (0, i.jsx)(z, { renderHeader: t, handleClose: n }),
        [t, n, s],
    );
}
var J = n(482132);
n(322076);
var K = n(202541),
    Z = n(375708),
    B = n(796694);
let Q = { [T.pn.GIFT_CUSTOMIZATION]: "xl", [T.pn.REVIEW]: "md", [T.pn.ADD_PAYMENT_STEPS]: "md" };
function X(e) {
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
        _ = (0, b.FY)({ isGift: s }),
        p =
            o ??
            (null != r
                ? r({ canCurrentlyPurchasePremiumGroup: _, isGift: s, giftRecipient: a })
                : (function (e, t) {
                      let { manaModalSizeFromProps: n } = t,
                          i = n ?? "md";
                      return null == e ? i : e in Q ? Q[e] : i;
                  })(t, { manaModalSizeFromProps: u }));
    return (0, i.jsx)(k.Jg, {
        transitionState: n,
        size: p,
        returnRef: c,
        "aria-label": Z.intl.string(Z.t.q9EGps),
        onClose: async () => {
            await l();
        },
        children: d,
    });
}
function $(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: k,
            analyticsObject: y,
            analyticsSourceLocation: M,
            analyticsSubscriptionType: b = C.rzx.PREMIUM,
            onComplete: L,
            transitionState: z,
            initialPlanId: q,
            subscriptionTier: Q,
            onClose: $,
            trialId: ee,
            reviewWarningMessage: et,
            planGroup: en = K.LE,
            openInvoiceId: ei,
            onSubscriptionConfirmation: el,
            renderPurchaseConfirmation: es,
            postSuccessGuild: ea,
            followupSKUInfo: eu,
            renderHeader: eo,
            disableUnsupportedExternalSubscriptionHandler: er = !1,
            applicationId: ec,
            guildId: ed,
            skuId: e_,
            onStepChange: ep,
            shakeWhilePurchasing: eE = !1,
            isLargeModal: eS = !1,
            isMediumModal: ef = !1,
            modalSizeOverride: eA,
            disableDefaultSlideTransformStyling: eT = !1,
            returnRef: em,
            skipConfirm: eh = !1,
            continueSessionToInitialStep: eI,
            startingStepOverride: eP,
            tenantManagesPaymentAuth: ek = !1,
            paymentModalVersion: ev = "v1",
        } = e,
        { paymentSources: ey, hasPaymentSources: eM } = (0, p.j)(),
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
            purchaseType: eF,
            defaultPlanId: eH,
            customCheckoutFlow: eW,
            unifiedCheckoutFlow: eY,
            quantity: ej,
            invoicePreview: eG,
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
        { displayCurrency: eL } = (0, f.Jn)(),
        { activitySessionId: ez } = (0, E.V)(),
        { paymentAuthenticationState: eq } = (0, S.o)(),
        eV = (0, I.A)(),
        eJ = (0, P.S3)(),
        { isGift: eK, giftRecipient: eZ, customGiftMessage: eB, emojiConfetti: eQ, soundEffect: eX } = (0, Y.Pv)(),
        e$ = (0, A.Z8)(),
        e0 = (0, A.s2)(),
        e1 = l.useMemo(() => {
            if (null != e$) return e$.options;
        }, [e$]),
        e2 = (0, A.qv)(),
        e5 = "sm";
    eS ? (e5 = "xl") : (ef || e0 === T.pn.ADD_PAYMENT_STEPS) && (e5 = "md");
    let e8 = null != e1 ? e1.modalSizeGetter : void 0,
        e6 = (0, O.O)(),
        e4 = null != Q && !eK && (0, R.U9)(e6, Q),
        [e3, e9] = l.useState({
            load_id: eO.loadId,
            discovery_session_id: eO.discoverySessionId,
            payment_type: C.frM[eF],
            location: k ?? y,
            source: M,
            subscription_type: b,
            subscription_plan_id: eV?.id ?? q,
            is_gift: eK,
            eligible_for_trial: null != ee,
            location_stack: n,
            sku_id: e_,
            application_id: ec,
            guild_id: ed,
            payment_modal_version: ev,
            activity_session_id: ez,
            eligible_for_discount: e4,
            sku_product_line: eJ?.productLine,
            quantity: ej,
            checkout_design: _.r.UNIFIED,
            checkout_flow: eY,
            open_invoice_id: ei,
            ...t,
        }),
        e7 = (0, G.W)(ey, eb),
        { giftCardBalance: te, giftCardCurrency: tt } = (0, d.h)(),
        tn = null != eG ? eG.getDiscountIdIfExists() : void 0;
    (l.useEffect(() => {
        e9((e) => {
            let n = null != eV ? (0, W.y8)(eV.id, !1, eK, { paymentSourceId: eU.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eV?.id,
                price: n?.amount,
                regular_price: eV?.price,
                currency: eL,
                sku_id: eC,
                sku_product_line: eJ?.productLine,
                quantity: ej,
                ...t,
            };
        });
    }, [eV, eC, eK, eU, eL, t, eJ?.productLine, ej]),
        (0, c.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (v.default.track(C.HAw.PAYMENT_FLOW_STARTED, e, t), D.trigger());
            })({
                ...e3,
                continue_session_initial_step: eI,
                custom_checkout_flow: eW,
                has_saved_payment_source: eM,
                discount_id: null != e6 ? e6.discountId : tn,
            });
        }),
        l.useEffect(() => {
            (null == eV && (null != eH && null != eI ? eN(eH) : eN(q)),
                null != e_ ? eD(e_) : null != q && eD(F.A.get(q)?.skuId));
        }, [eN, eV, eD, q, e_, eH, eI]));
    let ti = l.useCallback(() => {
            let e = (0, H.lo)(eZ) === H.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            v.default.track(C.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e3,
                is_custom_message_edited: eK && e && null != eB ? eB !== Z.intl.string(Z.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eK && e,
                emoji_name: eK && e && eQ?.id == null ? eQ?.surrogates : void 0,
                sound_id: eK && e ? eX?.soundId : void 0,
                duration_ms: t - eO.startTime,
                payment_source_type: e7?.type,
                gift_card_balance: te,
                gift_card_currency: tt,
            });
        }, [e3, eQ, eB, eZ, eK, eX, eO.startTime, e7, te, tt]),
        tl = l.useCallback(() => {
            let e = null != k ? (0, w.NE)(k) : null;
            eK && null != eZ && null != e && (0, g.Yd)(eZ.id, e);
        }, [k, eK, eZ]),
        ts = l.useMemo(() => () => $?.(eg === j.h.COMPLETED, eC), [$, eg, eC]),
        ta = (0, s.A)(() => Date.now(), [e0]),
        tu = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === T.pn.CONFIRM && (ti(), L?.(l), tl(), eh)) return void ts();
                (e2(e), ep?.(e), eR(null), e === T.pn.ADD_PAYMENT_STEPS && (u.h.wait(o.ET), u.h.wait(r.T3)));
                let c = null != n ? n : e0;
                null === c || s
                    ? v.default.track(C.HAw.PAYMENT_FLOW_LOADED, {
                          ...e3,
                          initial_step: c ?? e,
                          continue_session_initial_step: eI,
                          has_saved_payment_source: eM,
                      })
                    : v.default.track(C.HAw.PAYMENT_FLOW_STEP, {
                          ...e3,
                          ...i,
                          from_step: c,
                          to_step: e === T.pn.ADD_PAYMENT_STEPS ? T.pn.PAYMENT_ELEMENT : e,
                          step_duration_ms: a - ta,
                          flow_duration_ms: a - eO.startTime,
                          gift_card_balance: te,
                          gift_card_currency: tt,
                      });
            },
            [e2, ep, eR, e0, eI, e3, ta, eO.startTime, ti, L, tl, eh, ts, eM, te, tt],
        );
    return (
        (0, U.b)(e0, eq, tu, ew, !1, void 0, ek),
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
        })(tu),
        (0, N.A)(ts),
        (0, x.s)(ex, () => $(!1), eK, !er),
        (0, U.QR)(eq, ek),
        (0, i.jsx)(a.b, {
            className: B.Xn,
            isShaking: eE && eg === j.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(X, {
                step: e0,
                transitionState: z,
                isGift: eK,
                giftRecipient: eZ,
                returnRef: em,
                manaModalSize: e5,
                modalSizeOverride: eA,
                modalSizeGetter: e8,
                handleClose: ts,
                children: (0, i.jsx)(J.Ay, {
                    disableDefaultSlideTransformStyling: eT,
                    header: (0, i.jsx)(V, { handleClose: ts, renderHeader: eo }),
                    ...{
                        initialPlanId: q,
                        subscriptionTier: Q,
                        handleStepChange: tu,
                        handleClose: ts,
                        analyticsData: e3,
                        setAnalyticsData: e9,
                        trialId: ee,
                        reviewWarningMessage: et,
                        planGroup: en,
                        openInvoiceId: ei,
                        analyticsLocation: k,
                        onSubscriptionConfirmation: el,
                        renderPurchaseConfirmation: es,
                        postSuccessGuild: ea,
                        followupSKUInfo: eu,
                        skipConfirm: eh,
                        continueSessionToInitialStep: eI,
                        startingStepOverride: eP,
                    },
                }),
            }),
        })
    );
}
