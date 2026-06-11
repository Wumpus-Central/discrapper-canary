n.d(t, { U: () => w });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(228366),
    o = n(391048),
    u = n(688810),
    c = n(11939),
    d = n(426398),
    p = n(558620),
    m = n(427675),
    h = n(480642),
    A = n(211159),
    E = n(380619),
    C = n(155984),
    y = n(344159),
    _ = n(367921),
    S = n(174459),
    P = n(45938),
    I = n(428262),
    f = n(937008),
    T = n(158032),
    N = n(830382),
    g = n(753390),
    v = n(243217),
    x = n(652215),
    R = n(788868);
async function M(e) {
    let {
        onPurchaseAttempt: t,
        onPurchaseError: n,
        onPurchaseComplete: l,
        onPurchaseFinalize: r,
        hasRedirectURL: i,
        isGift: s,
        analyticsLocation: o,
        analyticsLocations: u,
        subscriptionPlan: c,
        planGroup: d,
        trialId: p,
        priceOptions: m,
        paymentSource: h,
        isPrepaidPaymentPastDue: A,
        openInvoiceId: E,
        premiumSubscription: C,
        onNext: y,
        metadata: _,
        sku: S,
        purchaseType: P,
        referralCode: f,
        loadId: M,
        giftInfoOptions: b,
        invoicePreview: L,
        order: O,
    } = e;
    try {
        let e, n, r, j;
        if ((t(), i)) return;
        if (P === x.VVm.ONE_TIME)
            a()(null != S, "SKU must exist and be fetched."),
                a()(null != L, "invoicePreview must exist."),
                (e = await (0, N.XU)(S.applicationId, S.id, {
                    expectedAmount: L.total,
                    expectedCurrency: L.currency,
                    isGift: s,
                    paymentSource: h,
                    loadId: M,
                    giftInfoOptions: b,
                    orderId: O?.id,
                }));
        else {
            a()(null != c, "Missing subscriptionPlan"), a()(null != L, "Missing invoicePreview");
            let t = { amount: L.total, currency: L.currency },
                n = (0, I.l6)(m, L.checkoutContext?.available_plans),
                l = (0, I.$Q)((0, I.y8)(c.id, !1, !1, n));
            if (null != C) {
                let e = m.currency ?? L.currency,
                    t = (0, I.Pg)(C, c.id, 1, new Set(d));
                (t = (0, I.qn)(t)), (l = (0, I.UC)(t, e.toLowerCase(), m.paymentSourceId));
            }
            if (s) {
                let t = L.total,
                    n = L.currency;
                e = await (0, N.XU)(R.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: h,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: M,
                    giftInfoOptions: b,
                    orderId: O?.id,
                });
            } else if (A && null != E && null != h && null != C) {
                let n = m.currency ?? L.currency;
                e = x.AD1.has(h.type)
                    ? await (0, g.LD)(C, E, h, n, M)
                    : await (0, g.nV)(C, { paymentSource: h, currency: n }, t, l, u, o, M);
            } else if (null != C) {
                let n = (0, I.Pg)(C, c.id, 1, new Set(d)),
                    r = { paymentSource: h, currency: m.currency ?? L.currency };
                C.status === x.Dmq.PAUSED && (r.status = x.Dmq.ACTIVE),
                    C.isPausedAllowsResumeButNotUpdates || (r.items = n),
                    (e = await (0, g.nV)(C, r, t, l, u, o, M));
            } else
                e = await (0, T.B1)({
                    planId: c.id,
                    currency: m.currency ?? L.currency,
                    paymentSource: h,
                    trialId: p,
                    metadata: _,
                    referralCode: f,
                    loadId: M,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: w } = l(e);
        if (w) return;
        "subscription" in e
            ? (n = null != e.subscription ? v.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (j =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            y(n, r, j);
    } catch (e) {
        n(e);
    } finally {
        r();
    }
}
var b = n(166532),
    L = n(566980),
    O = n(216641);
let j = (e) => {
    let { showBackButton: t, onBackClick: n } = e,
        { premiumSubscription: i, isGift: a, planGroup: s, isPrepaid: o } = e,
        {
            buttonLabel: u,
            analyticsLocations: c,
            application: d,
            hasAcceptedTerms: p,
            paymentSourceId: m,
            activeSubscription: A,
            devShelfFetchState: E,
            hasPaymentSources: C,
        } = (0, _.Ke)({ premiumSubscription: i, isGift: a, planGroup: s, isPrepaid: o }),
        y = r.useMemo(
            () =>
                (0, _.X1)(e, {
                    buttonLabel: u,
                    analyticsLocations: c,
                    application: d,
                    hasAcceptedTerms: p,
                    paymentSourceId: m,
                    activeSubscription: A,
                    devShelfFetchState: E,
                    hasPaymentSources: C,
                }),
            [e, u, c, d, p, m, A, E, C],
        );
    return (0, l.jsx)(h.lo, { onBackClick: t ? n : void 0, primaryButtonProps: y });
};
function w(e) {
    let {
            premiumSubscription: t,
            onBack: n,
            legalTermsNodeRef: i,
            flashLegalTerms: h,
            invoiceError: _,
            planError: T,
            baseAnalyticsData: N,
            flowStartTime: g,
            trialId: v,
            planGroup: R = [],
            analyticsLocation: w,
            openInvoiceId: D,
            metadata: U,
            backButtonEligible: k,
            disablePurchase: G,
            isTrial: F = !1,
            onPaymentSourceAdd: Y,
            handleStepChange: B,
            postPurchaseStep: W = b.pn.CONFIRM,
        } = e,
        {
            selectedSkuId: H,
            invoicePreview: V,
            setHasAcceptedTerms: K,
            setPurchaseState: Z,
            contextMetadata: q,
            paymentSourceId: z,
            setPurchaseError: $,
            order: X,
            priceOptions: J,
            purchaseType: Q,
            referralCode: ee,
            setEntitlementsGranted: et,
            setAppliedUserDiscounts: en,
            setUpdatedSubscription: el,
        } = (0, A.t4)((e) => ({
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
        ei = (0, p.A)(),
        ea = (0, m.gU)(),
        {
            isGift: es,
            selectedGiftStyle: eo,
            customGiftMessage: eu,
            emojiConfetti: ec,
            soundEffect: ed,
            giftRecipient: ep,
            selectedGiftingPromotionReward: em,
        } = (0, f.Pv)(),
        eh = (0, E.Mq)(ei),
        eA = (0, P.lo)(ep),
        eE = {};
    (eE.gift_style = eo),
        (eE.reward_sku_ids = eh && null != em ? [em] : []),
        eA === P.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != ep, "Gift recipient must be set at purchase review step for these gift options."),
            (eE.recipient_id = ep.id),
            (eE.custom_message = eu),
            (eE.emoji_id = ec?.id),
            (eE.emoji_name = ec?.id == null ? ec?.surrogates : void 0),
            (eE.sound_id = ed?.soundId));
    let eC = ei?.id,
        { analyticsLocations: ey } = (0, u.Ay)(),
        e_ = (0, O.W)(er, z),
        { giftCardBalance: eS, giftCardCurrency: eP } = (0, c.h)(),
        [eI, ef] = r.useState(!1),
        [eT, eN] = r.useState(!1),
        { hasEntitlements: eg } = (0, y.X)(eC, es),
        ev = (0, I.J$)(J.paymentSourceId),
        ex = (0, C.l)(),
        eR = null;
    Q === x.VVm.ONE_TIME &&
        (a()(null != H, "SKU must be selected for one-time purchases"),
        (eR = ea[H] ?? null),
        a()(null != eR, "SKU must exist and be fetched."));
    let eM = r.useCallback(() => {
            Z(L.h.PURCHASING),
                K(!0),
                ef(!0),
                s.h.wait(o.ET),
                $(null),
                S.default.track(x.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...N,
                    subtotal: V?.subtotal,
                    tax: V?.tax,
                    expected_amount: V?.total,
                    expected_currency: V?.currency,
                    duration_ms: Date.now() - g,
                    gift_card_balance: eS,
                    gift_card_currency: eP,
                });
        }, [Z, K, $, N, g, V, eS, eP]),
        eb = r.useCallback(
            (e) => {
                Z(L.h.FAIL),
                    $(e),
                    S.default.track(x.HAw.PAYMENT_FLOW_FAILED, {
                        ...N,
                        payment_error_code: e?.code,
                        payment_source_id: e_?.id,
                        payment_source_type: e_?.type,
                        duration_ms: Date.now() - g,
                        gift_card_balance: eS,
                        gift_card_currency: eP,
                    });
            },
            [Z, $, N, g, e_, eS, eP],
        ),
        eL = r.useCallback(
            (e) =>
                e.redirectConfirmation
                    ? (eN(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (Z(L.h.COMPLETED), { shouldReturnEarly: !1 }),
            [Z],
        ),
        eO = r.useCallback(() => {
            eT || ef(!1);
        }, [eT]),
        ej = r.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                el(l),
                    null != t && et(t),
                    null != n && en(n),
                    B(W, { fulfillment: { subscription: l, entitlements: t } });
            },
            [B, W, el, et, en],
        ),
        ew = async () => {
            await M({
                onPurchaseAttempt: eM,
                onPurchaseError: eb,
                onPurchaseComplete: eL,
                onPurchaseFinalize: eO,
                hasRedirectURL: eT,
                isGift: es,
                analyticsLocation: w,
                analyticsLocations: ey,
                subscriptionPlan: ei,
                planGroup: R,
                trialId: v,
                priceOptions: J,
                paymentSource: e_,
                isPrepaidPaymentPastDue: ex,
                openInvoiceId: D,
                premiumSubscription: t,
                onNext: ej,
                metadata: U,
                sku: eR,
                purchaseType: Q,
                referralCode: ee,
                loadId: q.loadId,
                giftInfoOptions: eE,
                invoicePreview: V,
                order: X,
            });
        },
        eD = null != D || (Q === x.VVm.ONE_TIME && !es);
    return (0, l.jsx)(j, {
        legalTermsNodeRef: i,
        invoiceError: _,
        planError: T,
        disablePurchase: G,
        flashLegalTerms: h,
        isSubmitting: eI,
        premiumSubscription: t,
        isGift: es,
        planGroup: R,
        isPrepaid: ev,
        isTrial: F,
        makePurchase: ew,
        needsPaymentSource: null == e_ && !eg,
        onNext: ej,
        onPaymentSourceAdd: Y,
        selectedSkuId: H,
        showBackButton: k && !eD,
        onBackClick: n,
    });
}
