n.d(t, { U: () => Y });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(228366),
    o = n(391048),
    u = n(688810),
    c = n(277984),
    d = n(11939),
    p = n(426398),
    m = n(558620),
    C = n(427675),
    h = n(169797),
    E = n(6938),
    A = n(380619),
    f = n(344159),
    S = n(174459),
    y = n(45938),
    P = n(937008),
    T = n(158032),
    I = n(830382),
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
        subscriptionPlan: d,
        planGroup: p,
        trialId: m,
        priceOptions: C,
        paymentSource: h,
        openInvoiceId: E,
        premiumSubscription: A,
        onNext: f,
        metadata: S,
        sku: y,
        purchaseType: P,
        referralCode: N,
        loadId: R,
        giftInfoOptions: b,
        invoicePreview: M,
        quantity: O,
    } = e;
    try {
        let e, n, i, j;
        if ((t(), r)) return;
        if (P === v.VVm.ONE_TIME)
            a()(null != y, "SKU must exist and be fetched."),
                a()(null != M, "invoicePreview must exist."),
                (e = await (0, I.XU)(y.applicationId, y.id, {
                    expectedAmount: M.total,
                    expectedCurrency: M.currency,
                    isGift: s,
                    paymentSource: h,
                    loadId: R,
                    giftInfoOptions: b,
                    quantity: O,
                }));
        else {
            a()(null != d, "Missing subscriptionPlan"), a()(null != M, "Missing invoicePreview");
            let t = { amount: M.total, currency: M.currency },
                n = (0, g.l6)(C, M.checkoutContext?.available_plans),
                l = (0, g.$Q)((0, g.y8)(d.id, !1, !1, n));
            if (null != A) {
                let e = C.currency ?? M.currency,
                    t = (0, g.Pg)(A, d.id, 1, new Set(p));
                (t = (0, g.qn)(t)), (l = (0, g.UC)(t, e.toLowerCase(), C.paymentSourceId));
            }
            if (s) {
                let t = M.total,
                    n = M.currency;
                e = await (0, I.XU)(x.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: h,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: R,
                    giftInfoOptions: b,
                    quantity: O,
                });
            } else if (null != h && null != A && A.status === v.Dmq.PAST_DUE && null != E) {
                let n = C.currency ?? M.currency;
                e = v.AD1.has(h.type)
                    ? await (0, c.LD)(A, E, h, n, R)
                    : await (0, c.nV)(A, { paymentSource: h, currency: n }, t, l, u, o, R);
            } else if (null != A) {
                let n = (0, g.Pg)(A, d.id, 1, new Set(p)),
                    i = { paymentSource: h, currency: C.currency ?? M.currency };
                A.status === v.Dmq.PAUSED && (i.status = v.Dmq.ACTIVE),
                    A.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(A, i, t, l, u, o, R));
            } else
                e = await (0, T.B1)({
                    planId: d.id,
                    currency: C.currency ?? M.currency,
                    paymentSource: h,
                    trialId: m,
                    metadata: S,
                    referralCode: N,
                    loadId: R,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: L } = l(e);
        if (L) return;
        "subscription" in e
            ? (n = null != e.subscription ? _.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (j =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            f(n, i, j);
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
            onBackClick: d,
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
                { hasPaymentSources: u } = (0, p.jm)(),
                { checkoutPaymentSources: c } = (0, D.t)(),
                {
                    hasAcceptedTerms: d,
                    paymentSourceId: m,
                    setCheckoutReviewButtonLabel: C,
                    purchaseType: h,
                } = (0, E.t4)((e) => ({
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
                T = r ?? !1,
                I = (null != f || a) ?? !1,
                _ = i.useMemo(
                    () =>
                        new F(
                            {
                                purchaseType: h,
                                needsPaymentSource: l,
                                handleShowLegalFlash: n,
                                onPaymentSourceAdd: s,
                                onReviewButtonClick: t,
                                hasPaymentSources: u,
                                willRelocateStoreCountry: A,
                                paymentSourceId: m,
                                hasAcceptedTerms: d,
                            },
                            o,
                        ),
                    [h, l, n, s, t, u, A, m, d, o],
                ),
                g = i.useMemo(
                    () => _.resolveReviewButtonProps({ loading: T, disabled: I, isApplicationDevShelfLoading: P }),
                    [T, I, P, _],
                );
            return (
                i.useEffect(() => {
                    C(g.text);
                }, [g.text, C]),
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
    return (0, l.jsx)(h.lo, { onBackClick: n ? d : void 0, primaryButtonProps: m });
}
function Y(e) {
    let {
            onBack: t,
            legalTermsNodeRef: n,
            flashLegalTerms: r,
            baseAnalyticsData: h,
            flowStartTime: T,
            trialId: I,
            planGroup: _ = [],
            analyticsLocation: g,
            openInvoiceId: x,
            metadata: O,
            backButtonEligible: j,
            disablePurchase: L,
            onPaymentSourceAdd: D,
            handleStepChange: U,
            postPurchaseStep: w = R.pn.CONFIRM,
            resolveTenantReviewButtonProps: k,
        } = e,
        {
            activeSubscription: G,
            selectedSkuId: F,
            invoicePreview: Y,
            setHasAcceptedTerms: H,
            setPurchaseState: W,
            contextMetadata: V,
            paymentSourceId: K,
            setPurchaseError: Z,
            priceOptions: q,
            purchaseType: z,
            referralCode: $,
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
        { paymentSources: et } = (0, p.jm)(),
        en = (0, m.A)(),
        el = (0, C.gU)(),
        {
            isGift: ei,
            selectedGiftStyle: er,
            customGiftMessage: ea,
            emojiConfetti: es,
            soundEffect: eo,
            giftRecipient: eu,
            selectedGiftingPromotionReward: ec,
        } = (0, P.Pv)(),
        ed = (0, A.Mq)(en),
        ep = (0, y.lo)(eu),
        em = {};
    (em.gift_style = er),
        (em.reward_sku_ids = ed && null != ec ? [ec] : []),
        ep === y.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eu, "Gift recipient must be set at purchase review step for these gift options."),
            (em.recipient_id = eu.id),
            (em.custom_message = ea),
            (em.emoji_id = es?.id),
            (em.emoji_name = es?.id == null ? es?.surrogates : void 0),
            (em.sound_id = eo?.soundId));
    let eC = en?.id,
        { analyticsLocations: eh } = (0, u.Ay)(),
        eE = (0, M.W)(et, K),
        { giftCardBalance: eA, giftCardCurrency: ef } = (0, d.h)(),
        [eS, ey] = i.useState(!1),
        [eP, eT] = i.useState(!1),
        { hasEntitlements: eI } = (0, f.X)(eC, ei),
        e_ = null;
    z === v.VVm.ONE_TIME &&
        (a()(null != F, "SKU must be selected for one-time purchases"),
        (e_ = el[F] ?? null),
        a()(null != e_, "SKU must exist and be fetched."));
    let eg = i.useCallback(() => {
            W(b.h.PURCHASING),
                H(!0),
                ey(!0),
                s.h.wait(o.ET),
                Z(null),
                S.default.track(v.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...h,
                    subtotal: Y?.subtotal,
                    tax: Y?.tax,
                    expected_amount: Y?.total,
                    expected_currency: Y?.currency,
                    duration_ms: Date.now() - T,
                    gift_card_balance: eA,
                    gift_card_currency: ef,
                });
        }, [W, H, Z, h, T, Y, eA, ef]),
        ev = i.useCallback(
            (e) => {
                W(b.h.FAIL),
                    Z(e),
                    S.default.track(v.HAw.PAYMENT_FLOW_FAILED, {
                        ...h,
                        payment_error_code: e?.code,
                        payment_source_id: eE?.id,
                        payment_source_type: eE?.type,
                        duration_ms: Date.now() - T,
                        gift_card_balance: eA,
                        gift_card_currency: ef,
                    });
            },
            [W, Z, h, T, eE, eA, ef],
        ),
        ex = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), W(b.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eT(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (W(b.h.COMPLETED), { shouldReturnEarly: !1 }),
            [W],
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
                    U(w, { fulfillment: { subscription: l, entitlements: t } });
            },
            [U, w, ee, Q, J],
        );
    async function eb() {
        await N({
            onPurchaseAttempt: eg,
            onPurchaseError: ev,
            onPurchaseComplete: ex,
            onPurchaseFinalize: eN,
            hasRedirectURL: eP,
            isGift: ei,
            analyticsLocation: g,
            analyticsLocations: eh,
            subscriptionPlan: en,
            planGroup: _,
            trialId: I,
            priceOptions: q,
            paymentSource: eE,
            openInvoiceId: x,
            premiumSubscription: G ?? null,
            onNext: eR,
            metadata: O,
            sku: e_,
            purchaseType: z,
            referralCode: $,
            loadId: V.loadId,
            giftInfoOptions: em,
            invoicePreview: Y,
            quantity: X,
        });
    }
    let eM = null != x || (z === v.VVm.ONE_TIME && !ei),
        eO = i.useCallback(() => {
            null != n.current && (n.current.scrollIntoView({ behavior: "smooth" }), r());
        }, [n, r]);
    return (0, l.jsx)(B, {
        resolveTenantReviewButtonProps: k,
        showBackButton: j && !eM,
        onBackClick: t,
        handleShowLegalFlash: eO,
        disablePurchase: L,
        isSubmitting: eS,
        makePurchase: eb,
        needsPaymentSource: null == eE && !eI,
        onPaymentSourceAdd: D,
    });
}
