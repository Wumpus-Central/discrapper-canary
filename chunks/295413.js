"use strict";
n.d(t, { U: () => j });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(228366),
    l = n(391048),
    u = n(688810),
    d = n(234320),
    c = n(426398),
    _ = n(558620),
    h = n(427675),
    f = n(480642),
    E = n(650170),
    p = n(380619),
    m = n(344159),
    g = n(174459),
    A = n(45938),
    I = n(937008),
    T = n(158032),
    S = n(830382),
    N = n(277984),
    C = n(243217),
    y = n(428262),
    v = n(652215),
    R = n(202541);
async function O(e) {
    let {
        onPurchaseAttempt: t,
        onPurchaseError: n,
        onPurchaseComplete: i,
        onPurchaseFinalize: r,
        hasRedirectURL: s,
        isGift: o,
        analyticsLocation: l,
        analyticsLocations: u,
        subscriptionPlan: d,
        planGroup: c,
        trialId: _,
        priceOptions: h,
        paymentSource: f,
        openInvoiceId: E,
        premiumSubscription: p,
        onNext: m,
        metadata: g,
        sku: A,
        purchaseType: I,
        referralCode: O,
        loadId: b,
        giftInfoOptions: L,
        invoicePreview: D,
        order: P,
        quantity: w,
    } = e;
    try {
        let e, n, r, M;
        if ((t(), s)) return;
        if (I === v.VVm.ONE_TIME)
            a()(null != A, "SKU must exist and be fetched."),
                a()(null != D, "invoicePreview must exist."),
                (e = await (0, S.XU)(A.applicationId, A.id, {
                    expectedAmount: D.total,
                    expectedCurrency: D.currency,
                    isGift: o,
                    paymentSource: f,
                    loadId: b,
                    giftInfoOptions: L,
                    orderId: P?.id,
                    quantity: w,
                }));
        else {
            a()(null != d, "Missing subscriptionPlan"), a()(null != D, "Missing invoicePreview");
            let t = { amount: D.total, currency: D.currency },
                n = (0, y.l6)(h, D.checkoutContext?.available_plans),
                i = (0, y.$Q)((0, y.y8)(d.id, !1, !1, n));
            if (null != p) {
                let e = h.currency ?? D.currency,
                    t = (0, y.Pg)(p, d.id, 1, new Set(c));
                (t = (0, y.qn)(t)), (i = (0, y.UC)(t, e.toLowerCase(), h.paymentSourceId));
            }
            if (o) {
                let t = D.total,
                    n = D.currency;
                e = await (0, S.XU)(R.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: f,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: b,
                    giftInfoOptions: L,
                    orderId: P?.id,
                    quantity: w,
                });
            } else if (null != f && null != p && p.status === v.Dmq.PAST_DUE && null != E) {
                let n = h.currency ?? D.currency;
                e = v.AD1.has(f.type)
                    ? await (0, N.LD)(p, E, f, n, b)
                    : await (0, N.nV)(p, { paymentSource: f, currency: n }, t, i, u, l, b);
            } else if (null != p) {
                let n = (0, y.Pg)(p, d.id, 1, new Set(c)),
                    r = { paymentSource: f, currency: h.currency ?? D.currency };
                p.status === v.Dmq.PAUSED && (r.status = v.Dmq.ACTIVE),
                    p.isPausedAllowsResumeButNotUpdates || (r.items = n),
                    (e = await (0, N.nV)(p, r, t, i, u, l, b));
            } else
                e = await (0, T.B1)({
                    planId: d.id,
                    currency: h.currency ?? D.currency,
                    paymentSource: f,
                    trialId: _,
                    metadata: g,
                    referralCode: O,
                    loadId: b,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: i,
                });
        }
        let { shouldReturnEarly: x } = i(e);
        if (x) return;
        "subscription" in e
            ? (n = null != e.subscription ? C.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (M =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            m(n, r, M);
    } catch (e) {
        n(e);
    } finally {
        r();
    }
}
var b = n(166532),
    L = n(566980),
    D = n(216641),
    P = n(17928),
    w = n(10716),
    M = n(20015),
    x = n(364995),
    U = n(31823),
    k = n(666646),
    G = n(375708),
    V = n(327105);
class F {
    init;
    resolveTenantReviewButtonProps;
    constructor(e, t) {
        (this.init = e), (this.resolveTenantReviewButtonProps = t ?? this.defaultResolveTenantReviewButtonProps);
    }
    defaultResolveTenantReviewButtonProps(e) {
        return {
            variant: "active",
            text:
                this.init.purchaseType === v.VVm.SUBSCRIPTION
                    ? G.intl.string(G.t.YScQSF)
                    : G.intl.string(V.default.BPzQj4),
            dataTestId: "purchase",
            onClick: this.init.onReviewButtonClick,
            loading: e.loading,
            disabled: e.disabled,
        };
    }
    resolveButtonLabel(e) {
        return null === this.init.paymentSourceId && this.init.hasPaymentSources
            ? G.intl.string(G.t.CpOiEO)
            : this.init.willRelocateStoreCountry
              ? G.intl.string(V.default["7r4HPu"])
              : null != e && null != e.text
                ? e.text
                : G.intl.string(V.default.BPzQj4);
    }
    resolvePaymentSourceRequiredProps(e) {
        let t = { text: e, tooltipText: G.intl.string(G.t.L7jbQV), type: "submit", dataTestId: "submitButton" };
        return this.init.hasPaymentSources
            ? { ...t, variant: "primary", onClick: this.init.onPaymentSourceAdd }
            : { ...t, variant: "active", disabled: !0 };
    }
    resolveApplicationDevShelfLoadingProps(e) {
        return {
            tooltipText: G.intl.string(G.t.cjA5tj),
            variant: "active",
            text: e,
            type: "submit",
            dataTestId: "submitButton",
            disabled: !0,
        };
    }
    resolveReviewButtonProps = (e) => {
        let { needsPaymentSource: t, hasAcceptedTerms: n, handleShowLegalFlash: i, onReviewButtonClick: r } = this.init,
            s = { ...e, handleShowLegalFlash: i, hasAcceptedTerms: n, onReviewButtonClick: r },
            a = this.resolveTenantReviewButtonProps(s),
            o = this.resolveButtonLabel(a),
            { disabled: l, isApplicationDevShelfLoading: u } = e;
        if (t) {
            let e = this.resolvePaymentSourceRequiredProps(o),
                t = null != a ? a.variant : void 0;
            return { ...e, variant: t ?? e.variant };
        }
        if (u) return this.resolveApplicationDevShelfLoadingProps(o);
        let d = { ...a, text: o };
        return l
            ? { ...d, disabled: !0, onClick: void 0 }
            : n
              ? d
              : { ...d, tooltipText: G.intl.string(G.t.XdvBLS), onClick: i, dataTestId: "submitButton" };
    };
}
function B(e) {
    let {
            resolveTenantReviewButtonProps: t,
            showBackButton: n,
            makePurchase: s,
            onPaymentSourceAdd: a,
            handleShowLegalFlash: o,
            disablePurchase: l,
            isSubmitting: u,
            needsPaymentSource: d,
            onBackClick: _,
        } = e,
        h = ((e) => {
            let {
                    onReviewButtonClick: t,
                    handleShowLegalFlash: n,
                    needsPaymentSource: i,
                    isSubmitting: s,
                    disablePurchase: a,
                    onPaymentSourceAdd: o,
                    resolveTenantReviewButtonProps: l,
                } = e,
                { hasPaymentSources: u } = (0, c.jm)(),
                { checkoutPaymentSources: d } = (0, x.t)(),
                {
                    hasAcceptedTerms: _,
                    paymentSourceId: h,
                    setCheckoutReviewButtonLabel: f,
                    purchaseType: p,
                } = (0, E.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                })),
                m = null != h && d.some((e) => e.id === h && null != e.relocationCountry),
                g = (0, k.mx)(),
                { application: A } = (0, U.V)(),
                I = (0, P.bG)([w.A], () => w.A.getFetchState()),
                T = (0, M.n)(A, v.gfo.EMBEDDED) && I === w.$.LOADING,
                S = s ?? !1,
                N = (null != g || a) ?? !1,
                C = r.useMemo(
                    () =>
                        new F(
                            {
                                purchaseType: p,
                                needsPaymentSource: i,
                                handleShowLegalFlash: n,
                                onPaymentSourceAdd: o,
                                onReviewButtonClick: t,
                                hasPaymentSources: u,
                                willRelocateStoreCountry: m,
                                paymentSourceId: h,
                                hasAcceptedTerms: _,
                            },
                            l,
                        ),
                    [p, i, n, o, t, u, m, h, _, l],
                ),
                y = r.useMemo(
                    () => C.resolveReviewButtonProps({ loading: S, disabled: N, isApplicationDevShelfLoading: T }),
                    [S, N, T, C],
                );
            return (
                r.useEffect(() => {
                    f(y.text);
                }, [y.text, f]),
                y
            );
        })({
            onReviewButtonClick: s,
            handleShowLegalFlash: o,
            isSubmitting: u,
            disablePurchase: l,
            onPaymentSourceAdd: a,
            resolveTenantReviewButtonProps: t,
            needsPaymentSource: d,
        });
    return (0, i.jsx)(f.lo, { onBackClick: n ? _ : void 0, primaryButtonProps: h });
}
function j(e) {
    let {
            onBack: t,
            legalTermsNodeRef: n,
            flashLegalTerms: s,
            baseAnalyticsData: f,
            flowStartTime: T,
            trialId: S,
            planGroup: N = [],
            analyticsLocation: C,
            openInvoiceId: y,
            metadata: R,
            backButtonEligible: P,
            disablePurchase: w,
            onPaymentSourceAdd: M,
            handleStepChange: x,
            postPurchaseStep: U = b.pn.CONFIRM,
            resolveTenantReviewButtonProps: k,
        } = e,
        {
            activeSubscription: G,
            selectedSkuId: V,
            invoicePreview: F,
            setHasAcceptedTerms: j,
            setPurchaseState: H,
            contextMetadata: W,
            paymentSourceId: Y,
            setPurchaseError: K,
            order: $,
            priceOptions: z,
            purchaseType: q,
            referralCode: Z,
            quantity: X,
            setEntitlementsGranted: Q,
            setAppliedUserDiscounts: J,
            setUpdatedSubscription: ee,
        } = (0, E.t4)((e) => ({
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
            quantity: e.quantity,
            setEntitlementsGranted: e.setEntitlementsGranted,
            setAppliedUserDiscounts: e.setAppliedUserDiscounts,
            setUpdatedSubscription: e.setUpdatedSubscription,
            activeSubscription: e.activeSubscription,
        })),
        { paymentSources: et } = (0, c.jm)(),
        en = (0, _.A)(),
        ei = (0, h.gU)(),
        {
            isGift: er,
            selectedGiftStyle: es,
            customGiftMessage: ea,
            emojiConfetti: eo,
            soundEffect: el,
            giftRecipient: eu,
            selectedGiftingPromotionReward: ed,
        } = (0, I.Pv)(),
        ec = (0, p.Mq)(en),
        e_ = (0, A.lo)(eu),
        eh = {};
    (eh.gift_style = es),
        (eh.reward_sku_ids = ec && null != ed ? [ed] : []),
        e_ === A.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eu, "Gift recipient must be set at purchase review step for these gift options."),
            (eh.recipient_id = eu.id),
            (eh.custom_message = ea),
            (eh.emoji_id = eo?.id),
            (eh.emoji_name = eo?.id == null ? eo?.surrogates : void 0),
            (eh.sound_id = el?.soundId));
    let ef = en?.id,
        { analyticsLocations: eE } = (0, u.Ay)(),
        ep = (0, D.W)(et, Y),
        { giftCardBalance: em, giftCardCurrency: eg } = (0, d.h)(),
        [eA, eI] = r.useState(!1),
        [eT, eS] = r.useState(!1),
        { hasEntitlements: eN } = (0, m.X)(ef, er),
        eC = null;
    q === v.VVm.ONE_TIME &&
        (a()(null != V, "SKU must be selected for one-time purchases"),
        (eC = ei[V] ?? null),
        a()(null != eC, "SKU must exist and be fetched."));
    let ey = r.useCallback(() => {
            H(L.h.PURCHASING),
                j(!0),
                eI(!0),
                o.h.wait(l.ET),
                K(null),
                g.default.track(v.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...f,
                    subtotal: F?.subtotal,
                    tax: F?.tax,
                    expected_amount: F?.total,
                    expected_currency: F?.currency,
                    duration_ms: Date.now() - T,
                    gift_card_balance: em,
                    gift_card_currency: eg,
                });
        }, [H, j, K, f, T, F, em, eg]),
        ev = r.useCallback(
            (e) => {
                H(L.h.FAIL),
                    K(e),
                    g.default.track(v.HAw.PAYMENT_FLOW_FAILED, {
                        ...f,
                        payment_error_code: e?.code,
                        payment_source_id: ep?.id,
                        payment_source_type: ep?.type,
                        duration_ms: Date.now() - T,
                        gift_card_balance: em,
                        gift_card_currency: eg,
                    });
            },
            [H, K, f, T, ep, em, eg],
        ),
        eR = r.useCallback(
            (e) =>
                e.redirectConfirmation || e.pendingCustomerAction
                    ? (eS(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (H(L.h.COMPLETED), { shouldReturnEarly: !1 }),
            [H],
        ),
        eO = r.useCallback(() => {
            eT || eI(!1);
        }, [eT]),
        eb = r.useCallback(
            (e, t, n) => {
                let i = e ?? null;
                ee(i),
                    null != t && Q(t),
                    null != n && J(n),
                    x(U, { fulfillment: { subscription: i, entitlements: t } });
            },
            [x, U, ee, Q, J],
        );
    async function eL() {
        await O({
            onPurchaseAttempt: ey,
            onPurchaseError: ev,
            onPurchaseComplete: eR,
            onPurchaseFinalize: eO,
            hasRedirectURL: eT,
            isGift: er,
            analyticsLocation: C,
            analyticsLocations: eE,
            subscriptionPlan: en,
            planGroup: N,
            trialId: S,
            priceOptions: z,
            paymentSource: ep,
            openInvoiceId: y,
            premiumSubscription: G ?? null,
            onNext: eb,
            metadata: R,
            sku: eC,
            purchaseType: q,
            referralCode: Z,
            loadId: W.loadId,
            giftInfoOptions: eh,
            invoicePreview: F,
            order: $,
            quantity: X,
        });
    }
    let eD = null != y || (q === v.VVm.ONE_TIME && !er),
        eP = r.useCallback(() => {
            null != n.current && (n.current.scrollIntoView({ behavior: "smooth" }), s());
        }, [n, s]);
    return (0, i.jsx)(B, {
        resolveTenantReviewButtonProps: k,
        showBackButton: P && !eD,
        onBackClick: t,
        handleShowLegalFlash: eP,
        disablePurchase: w,
        isSubmitting: eA,
        makePurchase: eL,
        needsPaymentSource: null == ep && !eN,
        onPaymentSourceAdd: M,
    });
}
