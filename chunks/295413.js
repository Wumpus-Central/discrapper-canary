n.d(t, { U: () => Y });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(228366),
    o = n(391048),
    u = n(688810),
    c = n(11939),
    d = n(426398),
    p = n(558620),
    m = n(427675),
    h = n(169797),
    C = n(650170),
    E = n(380619),
    A = n(344159),
    f = n(174459),
    S = n(45938),
    y = n(937008),
    P = n(158032),
    I = n(830382),
    T = n(277984),
    _ = n(243217),
    g = n(428262),
    v = n(652215),
    x = n(202541);
async function N(e) {
    let {
        onPurchaseAttempt: t,
        onPurchaseError: n,
        onPurchaseComplete: l,
        onPurchaseFinalize: i,
        hasRedirectURL: r,
        isGift: s,
        analyticsLocation: o,
        analyticsLocations: u,
        subscriptionPlan: c,
        planGroup: d,
        trialId: p,
        priceOptions: m,
        paymentSource: h,
        openInvoiceId: C,
        premiumSubscription: E,
        onNext: A,
        metadata: f,
        sku: S,
        purchaseType: y,
        referralCode: N,
        loadId: R,
        giftInfoOptions: b,
        invoicePreview: M,
        order: O,
        quantity: j,
    } = e;
    try {
        let e, n, i, L;
        if ((t(), r)) return;
        if (y === v.VVm.ONE_TIME)
            a()(null != S, "SKU must exist and be fetched."),
                a()(null != M, "invoicePreview must exist."),
                (e = await (0, I.XU)(S.applicationId, S.id, {
                    expectedAmount: M.total,
                    expectedCurrency: M.currency,
                    isGift: s,
                    paymentSource: h,
                    loadId: R,
                    giftInfoOptions: b,
                    orderId: O?.id,
                    quantity: j,
                }));
        else {
            a()(null != c, "Missing subscriptionPlan"), a()(null != M, "Missing invoicePreview");
            let t = { amount: M.total, currency: M.currency },
                n = (0, g.l6)(m, M.checkoutContext?.available_plans),
                l = (0, g.$Q)((0, g.y8)(c.id, !1, !1, n));
            if (null != E) {
                let e = m.currency ?? M.currency,
                    t = (0, g.Pg)(E, c.id, 1, new Set(d));
                (t = (0, g.qn)(t)), (l = (0, g.UC)(t, e.toLowerCase(), m.paymentSourceId));
            }
            if (s) {
                let t = M.total,
                    n = M.currency;
                e = await (0, I.XU)(x.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: h,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: R,
                    giftInfoOptions: b,
                    orderId: O?.id,
                    quantity: j,
                });
            } else if (null != h && null != E && E.status === v.Dmq.PAST_DUE && null != C) {
                let n = m.currency ?? M.currency;
                e = v.AD1.has(h.type)
                    ? await (0, T.LD)(E, C, h, n, R)
                    : await (0, T.nV)(E, { paymentSource: h, currency: n }, t, l, u, o, R);
            } else if (null != E) {
                let n = (0, g.Pg)(E, c.id, 1, new Set(d)),
                    i = { paymentSource: h, currency: m.currency ?? M.currency };
                E.status === v.Dmq.PAUSED && (i.status = v.Dmq.ACTIVE),
                    E.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, T.nV)(E, i, t, l, u, o, R));
            } else
                e = await (0, P.B1)({
                    planId: c.id,
                    currency: m.currency ?? M.currency,
                    paymentSource: h,
                    trialId: p,
                    metadata: f,
                    referralCode: N,
                    loadId: R,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: D } = l(e);
        if (D) return;
        "subscription" in e
            ? (n = null != e.subscription ? _.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (L =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            A(n, i, L);
    } catch (e) {
        n(e);
    } finally {
        i();
    }
}
var R = n(166532),
    b = n(566980),
    M = n(216641),
    O = n(17928),
    j = n(10716),
    L = n(20015),
    D = n(364995),
    U = n(31823),
    w = n(666646),
    k = n(375708),
    G = n(327105);
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
                    ? k.intl.string(k.t.YScQSF)
                    : k.intl.string(G.default.BPzQj4),
            dataTestId: "purchase",
            onClick: this.init.onReviewButtonClick,
            loading: e.loading,
            disabled: e.disabled,
        };
    }
    resolveButtonLabel(e) {
        return null === this.init.paymentSourceId && this.init.hasPaymentSources
            ? k.intl.string(k.t.CpOiEO)
            : this.init.willRelocateStoreCountry
              ? k.intl.string(G.default["7r4HPu"])
              : null != e && null != e.text
                ? e.text
                : k.intl.string(G.default.BPzQj4);
    }
    resolvePaymentSourceRequiredProps(e) {
        let t = { text: e, tooltipText: k.intl.string(k.t.L7jbQV), type: "submit", dataTestId: "submitButton" };
        return this.init.hasPaymentSources
            ? { ...t, variant: "primary", onClick: this.init.onPaymentSourceAdd }
            : { ...t, variant: "active", disabled: !0 };
    }
    resolveApplicationDevShelfLoadingProps(e) {
        return {
            tooltipText: k.intl.string(k.t.cjA5tj),
            variant: "active",
            text: e,
            type: "submit",
            dataTestId: "submitButton",
            disabled: !0,
        };
    }
    resolveReviewButtonProps = (e) => {
        let { needsPaymentSource: t, hasAcceptedTerms: n, handleShowLegalFlash: l, onReviewButtonClick: i } = this.init,
            r = { ...e, handleShowLegalFlash: l, hasAcceptedTerms: n, onReviewButtonClick: i },
            a = this.resolveTenantReviewButtonProps(r),
            s = this.resolveButtonLabel(a),
            { disabled: o, isApplicationDevShelfLoading: u } = e;
        if (t) {
            let e = this.resolvePaymentSourceRequiredProps(s),
                t = null != a ? a.variant : void 0;
            return { ...e, variant: t ?? e.variant };
        }
        if (u) return this.resolveApplicationDevShelfLoadingProps(s);
        let c = { ...a, text: s };
        return o
            ? { ...c, disabled: !0, onClick: void 0 }
            : n
              ? c
              : { ...c, tooltipText: k.intl.string(k.t.XdvBLS), onClick: l, dataTestId: "submitButton" };
    };
}
function B(e) {
    let {
            resolveTenantReviewButtonProps: t,
            showBackButton: n,
            makePurchase: r,
            onPaymentSourceAdd: a,
            handleShowLegalFlash: s,
            disablePurchase: o,
            isSubmitting: u,
            needsPaymentSource: c,
            onBackClick: p,
        } = e,
        m = ((e) => {
            let {
                    onReviewButtonClick: t,
                    handleShowLegalFlash: n,
                    needsPaymentSource: l,
                    isSubmitting: r,
                    disablePurchase: a,
                    onPaymentSourceAdd: s,
                    resolveTenantReviewButtonProps: o,
                } = e,
                { hasPaymentSources: u } = (0, d.jm)(),
                { checkoutPaymentSources: c } = (0, D.t)(),
                {
                    hasAcceptedTerms: p,
                    paymentSourceId: m,
                    setCheckoutReviewButtonLabel: h,
                    purchaseType: E,
                } = (0, C.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                })),
                A = null != m && c.some((e) => e.id === m && null != e.relocationCountry),
                f = (0, w.mx)(),
                { application: S } = (0, U.V)(),
                y = (0, O.bG)([j.A], () => j.A.getFetchState()),
                P = (0, L.n)(S, v.gfo.EMBEDDED) && y === j.$.LOADING,
                I = r ?? !1,
                T = (null != f || a) ?? !1,
                _ = i.useMemo(
                    () =>
                        new F(
                            {
                                purchaseType: E,
                                needsPaymentSource: l,
                                handleShowLegalFlash: n,
                                onPaymentSourceAdd: s,
                                onReviewButtonClick: t,
                                hasPaymentSources: u,
                                willRelocateStoreCountry: A,
                                paymentSourceId: m,
                                hasAcceptedTerms: p,
                            },
                            o,
                        ),
                    [E, l, n, s, t, u, A, m, p, o],
                ),
                g = i.useMemo(
                    () => _.resolveReviewButtonProps({ loading: I, disabled: T, isApplicationDevShelfLoading: P }),
                    [I, T, P, _],
                );
            return (
                i.useEffect(() => {
                    h(g.text);
                }, [g.text, h]),
                g
            );
        })({
            onReviewButtonClick: r,
            handleShowLegalFlash: s,
            isSubmitting: u,
            disablePurchase: o,
            onPaymentSourceAdd: a,
            resolveTenantReviewButtonProps: t,
            needsPaymentSource: c,
        });
    return (0, l.jsx)(h.lo, { onBackClick: n ? p : void 0, primaryButtonProps: m });
}
function Y(e) {
    let {
            onBack: t,
            legalTermsNodeRef: n,
            flashLegalTerms: r,
            baseAnalyticsData: h,
            flowStartTime: P,
            trialId: I,
            planGroup: T = [],
            analyticsLocation: _,
            openInvoiceId: g,
            metadata: x,
            backButtonEligible: O,
            disablePurchase: j,
            onPaymentSourceAdd: L,
            handleStepChange: D,
            postPurchaseStep: U = R.pn.CONFIRM,
            resolveTenantReviewButtonProps: w,
        } = e,
        {
            activeSubscription: k,
            selectedSkuId: G,
            invoicePreview: F,
            setHasAcceptedTerms: Y,
            setPurchaseState: H,
            contextMetadata: W,
            paymentSourceId: V,
            setPurchaseError: K,
            order: Z,
            priceOptions: q,
            purchaseType: z,
            referralCode: $,
            quantity: X,
            setEntitlementsGranted: Q,
            setAppliedUserDiscounts: J,
            setUpdatedSubscription: ee,
        } = (0, C.t4)((e) => ({
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
        { paymentSources: et } = (0, d.jm)(),
        en = (0, p.A)(),
        el = (0, m.gU)(),
        {
            isGift: ei,
            selectedGiftStyle: er,
            customGiftMessage: ea,
            emojiConfetti: es,
            soundEffect: eo,
            giftRecipient: eu,
            selectedGiftingPromotionReward: ec,
        } = (0, y.Pv)(),
        ed = (0, E.Mq)(en),
        ep = (0, S.lo)(eu),
        em = {};
    (em.gift_style = er),
        (em.reward_sku_ids = ed && null != ec ? [ec] : []),
        ep === S.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eu, "Gift recipient must be set at purchase review step for these gift options."),
            (em.recipient_id = eu.id),
            (em.custom_message = ea),
            (em.emoji_id = es?.id),
            (em.emoji_name = es?.id == null ? es?.surrogates : void 0),
            (em.sound_id = eo?.soundId));
    let eh = en?.id,
        { analyticsLocations: eC } = (0, u.Ay)(),
        eE = (0, M.W)(et, V),
        { giftCardBalance: eA, giftCardCurrency: ef } = (0, c.h)(),
        [eS, ey] = i.useState(!1),
        [eP, eI] = i.useState(!1),
        { hasEntitlements: eT } = (0, A.X)(eh, ei),
        e_ = null;
    z === v.VVm.ONE_TIME &&
        (a()(null != G, "SKU must be selected for one-time purchases"),
        (e_ = el[G] ?? null),
        a()(null != e_, "SKU must exist and be fetched."));
    let eg = i.useCallback(() => {
            H(b.h.PURCHASING),
                Y(!0),
                ey(!0),
                s.h.wait(o.ET),
                K(null),
                f.default.track(v.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...h,
                    subtotal: F?.subtotal,
                    tax: F?.tax,
                    expected_amount: F?.total,
                    expected_currency: F?.currency,
                    duration_ms: Date.now() - P,
                    gift_card_balance: eA,
                    gift_card_currency: ef,
                });
        }, [H, Y, K, h, P, F, eA, ef]),
        ev = i.useCallback(
            (e) => {
                H(b.h.FAIL),
                    K(e),
                    f.default.track(v.HAw.PAYMENT_FLOW_FAILED, {
                        ...h,
                        payment_error_code: e?.code,
                        payment_source_id: eE?.id,
                        payment_source_type: eE?.type,
                        duration_ms: Date.now() - P,
                        gift_card_balance: eA,
                        gift_card_currency: ef,
                    });
            },
            [H, K, h, P, eE, eA, ef],
        ),
        ex = i.useCallback(
            (e) =>
                e.redirectConfirmation || e.pendingCustomerAction
                    ? (eI(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (H(b.h.COMPLETED), { shouldReturnEarly: !1 }),
            [H],
        ),
        eN = i.useCallback(() => {
            eP || ey(!1);
        }, [eP]),
        eR = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                ee(l),
                    null != t && Q(t),
                    null != n && J(n),
                    D(U, { fulfillment: { subscription: l, entitlements: t } });
            },
            [D, U, ee, Q, J],
        );
    async function eb() {
        await N({
            onPurchaseAttempt: eg,
            onPurchaseError: ev,
            onPurchaseComplete: ex,
            onPurchaseFinalize: eN,
            hasRedirectURL: eP,
            isGift: ei,
            analyticsLocation: _,
            analyticsLocations: eC,
            subscriptionPlan: en,
            planGroup: T,
            trialId: I,
            priceOptions: q,
            paymentSource: eE,
            openInvoiceId: g,
            premiumSubscription: k ?? null,
            onNext: eR,
            metadata: x,
            sku: e_,
            purchaseType: z,
            referralCode: $,
            loadId: W.loadId,
            giftInfoOptions: em,
            invoicePreview: F,
            order: Z,
            quantity: X,
        });
    }
    let eM = null != g || (z === v.VVm.ONE_TIME && !ei),
        eO = i.useCallback(() => {
            null != n.current && (n.current.scrollIntoView({ behavior: "smooth" }), r());
        }, [n, r]);
    return (0, l.jsx)(B, {
        resolveTenantReviewButtonProps: w,
        showBackButton: O && !eM,
        onBackClick: t,
        handleShowLegalFlash: eO,
        disablePurchase: j,
        isSubmitting: eS,
        makePurchase: eb,
        needsPaymentSource: null == eE && !eT,
        onPaymentSourceAdd: L,
    });
}
