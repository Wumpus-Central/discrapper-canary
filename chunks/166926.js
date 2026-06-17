"use strict";
n.d(t, { U: () => x });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(228366),
    l = n(391048),
    u = n(688810),
    c = n(11939),
    d = n(426398),
    _ = n(558620),
    h = n(427675),
    f = n(480642),
    p = n(211159),
    E = n(380619),
    m = n(155984),
    g = n(344159),
    A = n(367921),
    I = n(174459),
    T = n(45938),
    S = n(428262),
    y = n(937008),
    C = n(158032),
    N = n(830382),
    v = n(753390),
    R = n(243217),
    O = n(652215),
    b = n(788868);
async function D(e) {
    let {
        onPurchaseAttempt: t,
        onPurchaseError: n,
        onPurchaseComplete: i,
        onPurchaseFinalize: r,
        hasRedirectURL: s,
        isGift: o,
        analyticsLocation: l,
        analyticsLocations: u,
        subscriptionPlan: c,
        planGroup: d,
        trialId: _,
        priceOptions: h,
        paymentSource: f,
        isPrepaidPaymentPastDue: p,
        openInvoiceId: E,
        premiumSubscription: m,
        onNext: g,
        metadata: A,
        sku: I,
        purchaseType: T,
        referralCode: y,
        loadId: D,
        giftInfoOptions: L,
        invoicePreview: w,
        order: M,
    } = e;
    try {
        let e, n, r, P;
        if ((t(), s)) return;
        if (T === O.VVm.ONE_TIME)
            a()(null != I, "SKU must exist and be fetched."),
                a()(null != w, "invoicePreview must exist."),
                (e = await (0, N.XU)(I.applicationId, I.id, {
                    expectedAmount: w.total,
                    expectedCurrency: w.currency,
                    isGift: o,
                    paymentSource: f,
                    loadId: D,
                    giftInfoOptions: L,
                    orderId: M?.id,
                }));
        else {
            a()(null != c, "Missing subscriptionPlan"), a()(null != w, "Missing invoicePreview");
            let t = { amount: w.total, currency: w.currency },
                n = (0, S.l6)(h, w.checkoutContext?.available_plans),
                i = (0, S.$Q)((0, S.y8)(c.id, !1, !1, n));
            if (null != m) {
                let e = h.currency ?? w.currency,
                    t = (0, S.Pg)(m, c.id, 1, new Set(d));
                (t = (0, S.qn)(t)), (i = (0, S.UC)(t, e.toLowerCase(), h.paymentSourceId));
            }
            if (o) {
                let t = w.total,
                    n = w.currency;
                e = await (0, N.XU)(b.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: f,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: D,
                    giftInfoOptions: L,
                    orderId: M?.id,
                });
            } else if (p && null != E && null != f && null != m) {
                let n = h.currency ?? w.currency;
                e = O.AD1.has(f.type)
                    ? await (0, v.LD)(m, E, f, n, D)
                    : await (0, v.nV)(m, { paymentSource: f, currency: n }, t, i, u, l, D);
            } else if (null != m) {
                let n = (0, S.Pg)(m, c.id, 1, new Set(d)),
                    r = { paymentSource: f, currency: h.currency ?? w.currency };
                m.status === O.Dmq.PAUSED && (r.status = O.Dmq.ACTIVE),
                    m.isPausedAllowsResumeButNotUpdates || (r.items = n),
                    (e = await (0, v.nV)(m, r, t, i, u, l, D));
            } else
                e = await (0, C.B1)({
                    planId: c.id,
                    currency: h.currency ?? w.currency,
                    paymentSource: f,
                    trialId: _,
                    metadata: A,
                    referralCode: y,
                    loadId: D,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: i,
                });
        }
        let { shouldReturnEarly: x } = i(e);
        if (x) return;
        "subscription" in e
            ? (n = null != e.subscription ? R.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (P =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            g(n, r, P);
    } catch (e) {
        n(e);
    } finally {
        r();
    }
}
var L = n(166532),
    w = n(566980),
    M = n(216641);
let P = (e) => {
    let { showBackButton: t, onBackClick: n } = e,
        { premiumSubscription: s, isGift: a, planGroup: o, isPrepaid: l } = e,
        {
            buttonLabel: u,
            analyticsLocations: c,
            application: d,
            hasAcceptedTerms: _,
            paymentSourceId: h,
            activeSubscription: p,
            devShelfFetchState: E,
            hasPaymentSources: m,
        } = (0, A.Ke)({ premiumSubscription: s, isGift: a, planGroup: o, isPrepaid: l }),
        g = r.useMemo(
            () =>
                (0, A.X1)(e, {
                    buttonLabel: u,
                    analyticsLocations: c,
                    application: d,
                    hasAcceptedTerms: _,
                    paymentSourceId: h,
                    activeSubscription: p,
                    devShelfFetchState: E,
                    hasPaymentSources: m,
                }),
            [e, u, c, d, _, h, p, E, m],
        );
    return (0, i.jsx)(f.lo, { onBackClick: t ? n : void 0, primaryButtonProps: g });
};
function x(e) {
    let {
            premiumSubscription: t,
            onBack: n,
            legalTermsNodeRef: s,
            flashLegalTerms: f,
            invoiceError: A,
            planError: C,
            baseAnalyticsData: N,
            flowStartTime: v,
            trialId: R,
            planGroup: b = [],
            analyticsLocation: x,
            openInvoiceId: k,
            metadata: U,
            backButtonEligible: G,
            disablePurchase: F,
            isTrial: V = !1,
            onPaymentSourceAdd: B,
            handleStepChange: j,
            postPurchaseStep: H = L.pn.CONFIRM,
        } = e,
        {
            selectedSkuId: Y,
            invoicePreview: W,
            setHasAcceptedTerms: K,
            setPurchaseState: $,
            contextMetadata: z,
            paymentSourceId: q,
            setPurchaseError: Z,
            order: X,
            priceOptions: Q,
            purchaseType: J,
            referralCode: ee,
            setEntitlementsGranted: et,
            setAppliedUserDiscounts: en,
            setUpdatedSubscription: ei,
        } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            invoicePreview: e.checkoutInvoicePreview,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            contextMetadata: e.contextMetadata,
            order: e.order,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            purchaseType: e.purchaseType,
            referralCode: e.referralCode,
            setEntitlementsGranted: e.setEntitlementsGranted,
            setAppliedUserDiscounts: e.setAppliedUserDiscounts,
            setUpdatedSubscription: e.setUpdatedSubscription,
        })),
        { paymentSources: er } = (0, d.jm)(),
        es = (0, _.A)(),
        ea = (0, h.gU)(),
        {
            isGift: eo,
            selectedGiftStyle: el,
            customGiftMessage: eu,
            emojiConfetti: ec,
            soundEffect: ed,
            giftRecipient: e_,
            selectedGiftingPromotionReward: eh,
        } = (0, y.Pv)(),
        ef = (0, E.Mq)(es),
        ep = (0, T.lo)(e_),
        eE = {};
    (eE.gift_style = el),
        (eE.reward_sku_ids = ef && null != eh ? [eh] : []),
        ep === T.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != e_, "Gift recipient must be set at purchase review step for these gift options."),
            (eE.recipient_id = e_.id),
            (eE.custom_message = eu),
            (eE.emoji_id = ec?.id),
            (eE.emoji_name = ec?.id == null ? ec?.surrogates : void 0),
            (eE.sound_id = ed?.soundId));
    let em = es?.id,
        { analyticsLocations: eg } = (0, u.Ay)(),
        eA = (0, M.W)(er, q),
        { giftCardBalance: eI, giftCardCurrency: eT } = (0, c.h)(),
        [eS, ey] = r.useState(!1),
        [eC, eN] = r.useState(!1),
        { hasEntitlements: ev } = (0, g.X)(em, eo),
        eR = (0, S.J$)(Q.paymentSourceId),
        eO = (0, m.l)(),
        eb = null;
    J === O.VVm.ONE_TIME &&
        (a()(null != Y, "SKU must be selected for one-time purchases"),
        (eb = ea[Y] ?? null),
        a()(null != eb, "SKU must exist and be fetched."));
    let eD = r.useCallback(() => {
            $(w.h.PURCHASING),
                K(!0),
                ey(!0),
                o.h.wait(l.ET),
                Z(null),
                I.default.track(O.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...N,
                    subtotal: W?.subtotal,
                    tax: W?.tax,
                    expected_amount: W?.total,
                    expected_currency: W?.currency,
                    duration_ms: Date.now() - v,
                    gift_card_balance: eI,
                    gift_card_currency: eT,
                });
        }, [$, K, Z, N, v, W, eI, eT]),
        eL = r.useCallback(
            (e) => {
                $(w.h.FAIL),
                    Z(e),
                    I.default.track(O.HAw.PAYMENT_FLOW_FAILED, {
                        ...N,
                        payment_error_code: e?.code,
                        payment_source_id: eA?.id,
                        payment_source_type: eA?.type,
                        duration_ms: Date.now() - v,
                        gift_card_balance: eI,
                        gift_card_currency: eT,
                    });
            },
            [$, Z, N, v, eA, eI, eT],
        ),
        ew = r.useCallback(
            (e) =>
                e.redirectConfirmation
                    ? (eN(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : ($(w.h.COMPLETED), { shouldReturnEarly: !1 }),
            [$],
        ),
        eM = r.useCallback(() => {
            eC || ey(!1);
        }, [eC]),
        eP = r.useCallback(
            (e, t, n) => {
                let i = e ?? null;
                ei(i),
                    null != t && et(t),
                    null != n && en(n),
                    j(H, { fulfillment: { subscription: i, entitlements: t } });
            },
            [j, H, ei, et, en],
        ),
        ex = async () => {
            await D({
                onPurchaseAttempt: eD,
                onPurchaseError: eL,
                onPurchaseComplete: ew,
                onPurchaseFinalize: eM,
                hasRedirectURL: eC,
                isGift: eo,
                analyticsLocation: x,
                analyticsLocations: eg,
                subscriptionPlan: es,
                planGroup: b,
                trialId: R,
                priceOptions: Q,
                paymentSource: eA,
                isPrepaidPaymentPastDue: eO,
                openInvoiceId: k,
                premiumSubscription: t,
                onNext: eP,
                metadata: U,
                sku: eb,
                purchaseType: J,
                referralCode: ee,
                loadId: z.loadId,
                giftInfoOptions: eE,
                invoicePreview: W,
                order: X,
            });
        },
        ek = null != k || (J === O.VVm.ONE_TIME && !eo);
    return (0, i.jsx)(P, {
        legalTermsNodeRef: s,
        invoiceError: A,
        planError: C,
        disablePurchase: F,
        flashLegalTerms: f,
        isSubmitting: eS,
        premiumSubscription: t,
        isGift: eo,
        planGroup: b,
        isPrepaid: eR,
        isTrial: V,
        makePurchase: ex,
        needsPaymentSource: null == eA && !ev,
        onNext: eP,
        onPaymentSourceAdd: B,
        selectedSkuId: Y,
        showBackButton: G && !ek,
        onBackClick: n,
    });
}
