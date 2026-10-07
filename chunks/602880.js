n.d(t, { q: () => et });
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
    m = n(642639),
    h = n(442467),
    I = n(558620),
    v = n(427675),
    P = n(169797),
    k = n(174459),
    y = n(840251),
    D = n(688151),
    M = n(652215);
let C = new y.E([], D.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var N = n(319437),
    g = n(45787),
    b = n(51501),
    w = n(724651),
    O = n(989790),
    R = n(511484),
    x = n(251913),
    U = n(436102),
    W = n(478996),
    F = n(97352),
    H = n(45938),
    Y = n(158045),
    j = n(951305),
    G = n(566980),
    L = n(800471),
    z = n(216641),
    q = n(580133);
function V(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, A.s2)();
    return l.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function J(e) {
    let { step: t } = e;
    return t === T.pn.REVIEW ? (0, i.jsx)(q.l, {}) : (0, i.jsx)(q.f, {});
}
function K(e) {
    let { renderHeader: t, handleClose: n } = e,
        a = (0, A.s2)();
    return l.useMemo(
        () =>
            a === T.pn.REVIEW || a === T.pn.ADD_PAYMENT_STEPS
                ? (0, i.jsx)(J, { step: a })
                : (0, i.jsx)(V, { renderHeader: t, handleClose: n }),
        [t, n, a],
    );
}
var Z = n(482132);
n(322076);
var B = n(202541),
    Q = n(660183),
    X = n(796694);
let $ = { [T.pn.GIFT_CUSTOMIZATION]: "xl", [T.pn.REVIEW]: "md", [T.pn.ADD_PAYMENT_STEPS]: "md" };
function ee(e) {
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
                      return null == e ? i : e in $ ? $[e] : i;
                  })(t, { manaModalSizeFromProps: u }));
    return (0, i.jsx)(P.Jg, {
        transitionState: n,
        size: p,
        returnRef: c,
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
            analyticsObject: y,
            analyticsSourceLocation: D,
            analyticsSubscriptionType: O = M.rzx.PREMIUM,
            onComplete: q,
            transitionState: V,
            initialPlanId: J,
            subscriptionTier: $,
            onClose: et,
            trialId: en,
            reviewWarningMessage: ei,
            planGroup: el = B.LE,
            openInvoiceId: ea,
            onSubscriptionConfirmation: es,
            renderPurchaseConfirmation: eu,
            postSuccessGuild: er,
            followupSKUInfo: eo,
            renderHeader: ec,
            disableUnsupportedExternalSubscriptionHandler: ed = !1,
            applicationId: e_,
            guildId: ep,
            skuId: eE,
            onStepChange: eS,
            shakeWhilePurchasing: ef = !1,
            isLargeModal: eA = !1,
            isMediumModal: eT = !1,
            modalSizeOverride: em,
            disableDefaultSlideTransformStyling: eh = !1,
            returnRef: eI,
            skipConfirm: ev = !1,
            continueSessionToInitialStep: eP,
            startingStepOverride: ek,
            tenantManagesPaymentAuth: ey = !1,
            paymentModalVersion: eD = "v1",
        } = e,
        { paymentSources: eM, hasPaymentSources: eC } = (0, p.j)(),
        {
            selectedSkuId: eN,
            setSelectedSkuId: eg,
            setSelectedPlanId: eb,
            purchaseState: ew,
            setPurchaseState: eO,
            contextMetadata: eR,
            paymentSourceId: ex,
            setPurchaseError: eU,
            priceOptions: eW,
            activeSubscription: eF,
            purchaseType: eH,
            defaultPlanId: eY,
            getAvailableDefaultPlanId: ej,
            customCheckoutFlow: eG,
            unifiedCheckoutFlow: eL,
            quantity: ez,
            invoicePreview: eq,
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
            getAvailableDefaultPlanId: e.getAvailableDefaultPlanId,
            customCheckoutFlow: e.customCheckoutFlow,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            quantity: e.quantity,
            invoicePreview: e.checkoutInvoicePreview,
        })),
        { displayCurrency: eV } = (0, f.Jn)(),
        { activitySessionId: eJ } = (0, E.V)(),
        { paymentAuthenticationState: eK } = (0, S.o)(),
        eZ = (0, I.A)(),
        eB = (0, v.S3)(),
        { isGift: eQ, giftRecipient: eX, customGiftMessage: e$, emojiConfetti: e0, soundEffect: e1 } = (0, j.Pv)(),
        e2 = (0, A.Z8)(),
        e5 = (0, A.s2)(),
        e6 = l.useMemo(() => {
            if (null != e2) return e2.options;
        }, [e2]),
        e8 = (0, A.qv)(),
        e4 = "sm";
    eA ? (e4 = "xl") : (eT || e5 === T.pn.ADD_PAYMENT_STEPS) && (e4 = "md");
    let e9 = null != e6 ? e6.modalSizeGetter : void 0,
        e3 = (0, w.O)(),
        e7 = null != $ && !eQ && (0, R.U9)(e3, $),
        [te, tt] = l.useState({
            load_id: eR.loadId,
            discovery_session_id: eR.discoverySessionId,
            payment_type: M.frM[eH],
            location: P ?? y,
            source: D,
            subscription_type: O,
            subscription_plan_id: eZ?.id ?? J,
            is_gift: eQ,
            eligible_for_trial: null != en,
            location_stack: n,
            sku_id: eE,
            application_id: e_,
            guild_id: ep,
            payment_modal_version: eD,
            activity_session_id: eJ,
            eligible_for_discount: e7,
            sku_product_line: eB?.productLine,
            quantity: ez,
            checkout_design: _.r.UNIFIED,
            checkout_flow: eL,
            open_invoice_id: ea,
            ...t,
        }),
        tn = (0, z.W)(eM, ex),
        { giftCardBalance: ti, giftCardCurrency: tl } = (0, d.h)(),
        { balance: ta } = (0, W.W0)(),
        ts = null != eq ? eq.getDiscountIdIfExists() : void 0;
    (l.useEffect(() => {
        tt((e) => {
            let n = null != eZ ? (0, Y.y8)(eZ.id, !1, eQ, { paymentSourceId: eW.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eZ?.id,
                price: n?.amount,
                regular_price: eZ?.price,
                currency: eV,
                sku_id: eN,
                sku_product_line: eB?.productLine,
                quantity: ez,
                virtual_currency_balance: ta,
                ...t,
            };
        });
    }, [eZ, eN, eQ, eW, eV, t, eB?.productLine, ez, ta]),
        (0, c.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (k.default.track(M.HAw.PAYMENT_FLOW_STARTED, e, t), C.trigger());
            })({
                ...te,
                virtual_currency_balance: ta,
                continue_session_initial_step: eP,
                custom_checkout_flow: eG,
                has_saved_payment_source: eC,
                discount_id: null != e3 ? e3.discountId : ts,
            });
        }),
        l.useEffect(() => {
            if (null == eZ)
                if (null != eY && null != eP) {
                    let e = eE ?? eN;
                    eb(ej({ skuId: e }) ?? (0, L.x)(e, eF));
                } else eb(J);
            null != eE ? eg(eE) : null != J && eg(F.A.get(J)?.skuId);
        }, [eb, eZ, eg, J, eE, eN, eY, ej, eF, eP]));
    let tu = l.useCallback(() => {
            let e = (0, H.lo)(eX) === H.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            k.default.track(M.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...te,
                is_custom_message_edited: eQ && e && null != e$ ? e$ !== Q.intl.string(Q.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eQ && e,
                emoji_name: eQ && e && e0?.id == null ? e0?.surrogates : void 0,
                sound_id: eQ && e ? e1?.soundId : void 0,
                duration_ms: t - eR.startTime,
                payment_source_type: tn?.type,
                gift_card_balance: ti,
                gift_card_currency: tl,
                virtual_currency_balance: ta,
            });
        }, [te, e0, e$, eX, eQ, e1, eR.startTime, tn, ti, tl, ta]),
        tr = l.useCallback(() => {
            let e = null != P ? (0, b.NE)(P) : null;
            eQ && null != eX && null != e && (0, g.Yd)(eX.id, e);
        }, [P, eQ, eX]),
        to = l.useMemo(() => () => et?.(ew === G.h.COMPLETED, eN), [et, ew, eN]),
        tc = (0, a.A)(() => Date.now(), [e5]),
        td = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: a } = t,
                    s = Date.now();
                if (e === T.pn.CONFIRM && (tu(), q?.(l), tr(), ev)) return void to();
                (e8(e), eS?.(e), eU(null), e === T.pn.ADD_PAYMENT_STEPS && (u.h.wait(r.ET), u.h.wait(o.T3)));
                let c = null != n ? n : e5;
                null === c || a
                    ? k.default.track(M.HAw.PAYMENT_FLOW_LOADED, {
                          ...te,
                          initial_step: c ?? e,
                          continue_session_initial_step: eP,
                          has_saved_payment_source: eC,
                      })
                    : k.default.track(M.HAw.PAYMENT_FLOW_STEP, {
                          ...te,
                          ...i,
                          from_step: c,
                          to_step: e === T.pn.ADD_PAYMENT_STEPS ? T.pn.PAYMENT_ELEMENT : e,
                          step_duration_ms: s - tc,
                          flow_duration_ms: s - eR.startTime,
                          gift_card_balance: ti,
                          gift_card_currency: tl,
                      });
            },
            [e8, eS, eU, e5, eP, te, tc, eR.startTime, tu, q, tr, ev, to, eC, ti, tl],
        );
    return (
        (0, x.b)(e5, eK, td, eO, !1, void 0, ey),
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
        })(td),
        (0, N.A)(to),
        (0, U.s)(eF, () => et(!1), eQ, !ed),
        (0, x.QR)(eK, ey),
        (0, i.jsx)(s.b, {
            className: X.Xn,
            isShaking: ef && ew === G.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(ee, {
                step: e5,
                transitionState: V,
                isGift: eQ,
                giftRecipient: eX,
                returnRef: eI,
                manaModalSize: e4,
                modalSizeOverride: em,
                modalSizeGetter: e9,
                handleClose: to,
                children: (0, i.jsx)(Z.Ay, {
                    disableDefaultSlideTransformStyling: eh,
                    header: (0, i.jsx)(K, { handleClose: to, renderHeader: ec }),
                    ...{
                        initialPlanId: J,
                        subscriptionTier: $,
                        handleStepChange: td,
                        handleClose: to,
                        analyticsData: te,
                        setAnalyticsData: tt,
                        trialId: en,
                        reviewWarningMessage: ei,
                        planGroup: el,
                        openInvoiceId: ea,
                        analyticsLocation: P,
                        onSubscriptionConfirmation: es,
                        renderPurchaseConfirmation: eu,
                        postSuccessGuild: er,
                        followupSKUInfo: eo,
                        skipConfirm: ev,
                        continueSessionToInitialStep: eP,
                        startingStepOverride: ek,
                    },
                }),
            }),
        })
    );
}
