n.d(t, { U: () => B });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(228366),
    o = n(391048),
    u = n(688810),
    c = n(277984),
    d = n(11939),
    p = n(951305),
    m = n(158032),
    C = n(830382),
    h = n(243217),
    f = n(158045),
    E = n(652215),
    S = n(202541);
async function A(e) {
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
        trialId: A,
        priceOptions: y,
        paymentSource: P,
        openInvoiceId: I,
        premiumSubscription: g,
        onNext: v,
        metadata: T,
        sku: _,
        purchaseType: x,
        referralCode: N,
        loadId: b,
        giftInfoOptions: R,
        invoicePreview: j,
        quantity: M,
    } = e;
    try {
        let e, n, i, O;
        if ((t(), r)) return;
        if (x === E.VVm.ONE_TIME)
            a()(null != _, "SKU must exist and be fetched."),
                a()(null != j, "invoicePreview must exist."),
                (e = await (0, C.XU)(_.applicationId, _.id, {
                    expectedAmount: j.total,
                    expectedCurrency: j.currency,
                    isGift: s,
                    paymentSource: P,
                    loadId: b,
                    giftInfoOptions: R,
                    quantity: M,
                }));
        else {
            a()(null != d, "Missing subscriptionPlan"), a()(null != j, "Missing invoicePreview");
            let t = { amount: j.total, currency: j.currency },
                n = (0, f.l6)(y, j.checkoutContext?.available_plans),
                l = (0, f.$Q)((0, f.y8)(d.id, !1, !1, n));
            if (null != g) {
                let e = y.currency ?? j.currency,
                    t = (0, f.Pg)(g, d.id, 1, new Set(p));
                (t = (0, f.qn)(t)), (l = (0, f.UC)(t, e.toLowerCase(), y.paymentSourceId));
            }
            if (s) {
                let t = j.total,
                    n = j.currency;
                e = await (0, C.XU)(S.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: P,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: b,
                    giftInfoOptions: R,
                    quantity: M,
                });
            } else if (null != P && null != g && g.status === E.Dmq.PAST_DUE && null != I) {
                let n = y.currency ?? j.currency;
                e = E.AD1.has(P.type)
                    ? await (0, c.LD)(g, I, P, n, b)
                    : await (0, c.nV)(g, { paymentSource: P, currency: n }, t, l, u, o, b);
            } else if (null != g) {
                let n = (0, f.Pg)(g, d.id, 1, new Set(p)),
                    i = { paymentSource: P, currency: y.currency ?? j.currency };
                g.status === E.Dmq.PAUSED && (i.status = E.Dmq.ACTIVE),
                    g.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(g, i, t, l, u, o, b));
            } else
                e = await (0, m.B1)({
                    planId: d.id,
                    currency: y.currency ?? j.currency,
                    paymentSource: P,
                    trialId: A,
                    metadata: T,
                    referralCode: N,
                    loadId: b,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: L } = l(e);
        if (L) return;
        "subscription" in e
            ? (n = null != e.subscription ? h.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (O =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            v(n, i, O);
    } catch (e) {
        n(e);
    } finally {
        i();
    }
}
var y = n(166532),
    P = n(566980),
    I = n(216641),
    g = n(380619),
    v = n(344159),
    T = n(174459),
    _ = n(45938),
    x = n(708791),
    N = n(17928),
    b = n(10716),
    R = n(20015),
    j = n(202475),
    M = n(31823),
    O = n(666646),
    L = n(87725),
    k = n(327105),
    w = n(375708);
class U {
    init;
    resolveTenantReviewButtonProps;
    constructor(e, t) {
        (this.init = e), (this.resolveTenantReviewButtonProps = t ?? this.defaultResolveTenantReviewButtonProps);
    }
    defaultResolveTenantReviewButtonProps(e) {
        return {
            variant: "active",
            text:
                this.init.purchaseType === E.VVm.SUBSCRIPTION
                    ? w.intl.string(w.t.YScQSF)
                    : w.intl.string(k.default.BPzQj4),
            dataTestId: "purchase",
            onClick: this.init.onReviewButtonClick,
            loading: e.loading,
            disabled: e.disabled,
        };
    }
    resolveButtonLabel(e) {
        return null === this.init.paymentSourceId && this.init.hasPaymentSources
            ? w.intl.string(w.t.CpOiEO)
            : this.init.willRelocateStoreCountry
              ? w.intl.string(k.default["7r4HPu"])
              : null != e && null != e.text
                ? e.text
                : w.intl.string(k.default.BPzQj4);
    }
    resolvePaymentSourceRequiredProps(e) {
        let t = { text: e, tooltipText: w.intl.string(w.t.L7jbQV), type: "submit", dataTestId: "submitButton" };
        return this.init.hasPaymentSources
            ? { ...t, variant: "primary", onClick: this.init.onPaymentSourceAdd }
            : { ...t, variant: "active", disabled: !0 };
    }
    resolveApplicationDevShelfLoadingProps(e) {
        return {
            tooltipText: w.intl.string(w.t.cjA5tj),
            variant: "active",
            text: e,
            type: "submit",
            dataTestId: "submitButton",
            disabled: !0,
        };
    }
    resolveReviewButtonProps = (e) => {
        let { needsPaymentSource: t, hasAcceptedTerms: n, onReviewButtonClick: l } = this.init,
            i = { ...e, hasAcceptedTerms: n, onReviewButtonClick: l },
            r = this.resolveTenantReviewButtonProps(i),
            a = this.resolveButtonLabel(r),
            { disabled: s, isApplicationDevShelfLoading: o } = e;
        if (t) {
            let t = this.resolvePaymentSourceRequiredProps(a),
                n = null != r ? r.variant : void 0;
            return { ...t, loading: e.loading, variant: n ?? t.variant };
        }
        if (o) return this.resolveApplicationDevShelfLoadingProps(a);
        let u = { ...r, text: a };
        return s
            ? { ...u, disabled: !0, onClick: void 0 }
            : n
              ? u
              : {
                    ...u,
                    tooltipText: w.intl.string(w.t.XdvBLS),
                    disabled: !0,
                    onClick: E.tEg,
                    dataTestId: "submitButton",
                };
    };
}
var D = n(558620),
    G = n(427675),
    F = n(480642);
function H(e) {
    let {
            stripeExpressCheckoutComponent: t,
            resolveTenantReviewButtonProps: n,
            showBackButton: r,
            makePurchase: a,
            onPaymentSourceAdd: s,
            disablePurchase: o,
            isSubmitting: u,
            needsPaymentSource: c,
            onBackClick: d,
        } = e,
        p = (function (e) {
            let {
                    onReviewButtonClick: t,
                    needsPaymentSource: n,
                    isSubmitting: l,
                    disablePurchase: r,
                    onPaymentSourceAdd: a,
                    resolveTenantReviewButtonProps: s,
                } = e,
                { hasPaymentSources: o } = (0, j.j)(),
                {
                    hasAcceptedTerms: u,
                    paymentSourceId: c,
                    setCheckoutReviewButtonLabel: d,
                    purchaseType: p,
                    checkoutPaymentSources: m,
                } = (0, L.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                })),
                C = null != c && m.some((e) => e.id === c && null != e.relocationCountry),
                h = (0, O.mx)(),
                { application: f } = (0, M.V)(),
                S = (0, N.bG)([b.A], () => b.A.getFetchState()),
                A = (0, R.n)(f, E.gfo.EMBEDDED) && S === b.$.LOADING,
                y = l ?? !1,
                P = (null != h || r) ?? !1,
                I = i.useMemo(
                    () =>
                        new U(
                            {
                                purchaseType: p,
                                needsPaymentSource: n,
                                onPaymentSourceAdd: a,
                                onReviewButtonClick: t,
                                hasPaymentSources: o,
                                willRelocateStoreCountry: C,
                                paymentSourceId: c,
                                hasAcceptedTerms: u,
                            },
                            s,
                        ),
                    [p, n, a, t, o, C, c, u, s],
                ),
                g = i.useMemo(
                    () => I.resolveReviewButtonProps({ loading: y, disabled: P, isApplicationDevShelfLoading: A }),
                    [y, P, A, I],
                );
            return (
                i.useEffect(() => {
                    d(g.text);
                }, [g.text, d]),
                g
            );
        })({
            onReviewButtonClick: () => a(),
            isSubmitting: u,
            disablePurchase: o,
            onPaymentSourceAdd: s,
            resolveTenantReviewButtonProps: n,
            needsPaymentSource: c,
        });
    return (0, l.jsx)(F.lo, { onBackClick: r ? d : void 0, primaryButtonProps: p, stripeExpressCheckoutComponent: t });
}
function B(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: m,
            planGroup: C = [],
            analyticsLocation: h,
            openInvoiceId: f,
            metadata: S,
            backButtonEligible: N,
            disablePurchase: b,
            onPaymentSourceAdd: R,
            handleStepChange: M,
            postPurchaseStep: O = y.pn.CONFIRM,
            resolveTenantReviewButtonProps: k,
        } = e,
        {
            activeSubscription: w,
            selectedSkuId: U,
            invoicePreview: F,
            setHasAcceptedTerms: B,
            setPurchaseState: Y,
            contextMetadata: W,
            paymentSourceId: V,
            setPurchaseError: K,
            priceOptions: Z,
            purchaseType: q,
            referralCode: z,
            quantity: $,
            setEntitlementsGranted: Q,
            setAppliedUserDiscounts: J,
            setUpdatedSubscription: X,
            shouldUseStripeExpressCheckout: ee,
        } = (0, L.t4)((e) => ({
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
            shouldUseStripeExpressCheckout: e.getShouldUseStripeExpressCheckout(),
        })),
        { paymentSources: et } = (0, j.j)(),
        en = (0, D.A)(),
        el = (0, G.gU)(),
        {
            isGift: ei,
            selectedGiftStyle: er,
            customGiftMessage: ea,
            emojiConfetti: es,
            soundEffect: eo,
            giftRecipient: eu,
            selectedGiftingPromotionReward: ec,
        } = (0, p.Pv)(),
        ed = (0, g.Mq)(en),
        ep = (0, _.lo)(eu),
        em = {};
    (em.gift_style = er),
        (em.reward_sku_ids = ed && null != ec ? [ec] : []),
        ep === _.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eu, "Gift recipient must be set at purchase review step for these gift options."),
            (em.recipient_id = eu.id),
            (em.custom_message = ea),
            (em.emoji_id = es?.id),
            (em.emoji_name = es?.id == null ? es?.surrogates : void 0),
            (em.sound_id = eo?.soundId));
    let eC = en?.id,
        { analyticsLocations: eh } = (0, u.Ay)(),
        ef = (0, I.W)(et, V),
        { giftCardBalance: eE, giftCardCurrency: eS } = (0, d.h)(),
        [eA, ey] = i.useState(!1),
        [eP, eI] = i.useState(!1),
        { hasEntitlements: eg } = (0, v.X)(eC, ei),
        ev = null;
    q === E.VVm.ONE_TIME &&
        (a()(null != U, "SKU must be selected for one-time purchases"),
        (ev = el[U] ?? null),
        a()(null != ev, "SKU must exist and be fetched."));
    let eT = i.useCallback(() => {
            Y(P.h.PURCHASING),
                B(!0),
                ey(!0),
                s.h.wait(o.ET),
                K(null),
                T.default.track(E.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: F?.subtotal,
                    tax: F?.tax,
                    expected_amount: F?.total,
                    expected_currency: F?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: eE,
                    gift_card_currency: eS,
                });
        }, [Y, B, K, n, r, F, eE, eS]),
        e_ = i.useCallback(
            (e) => {
                Y(P.h.FAIL),
                    K(e),
                    T.default.track(E.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: ef?.id,
                        payment_source_type: ef?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: eE,
                        gift_card_currency: eS,
                    });
            },
            [Y, K, n, r, ef, eE, eS],
        ),
        ex = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), Y(P.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eI(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (Y(P.h.COMPLETED), { shouldReturnEarly: !1 }),
            [Y],
        ),
        eN = i.useCallback(() => {
            eP || ey(!1);
        }, [eP]),
        eb = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                X(l), null != t && Q(t), null != n && J(n), M(O, { fulfillment: { subscription: l, entitlements: t } });
            },
            [M, O, X, Q, J],
        );
    async function eR(e) {
        let t = e ?? ef;
        await A({
            onPurchaseAttempt: eT,
            onPurchaseError: e_,
            onPurchaseComplete: ex,
            onPurchaseFinalize: eN,
            hasRedirectURL: eP,
            isGift: ei,
            analyticsLocation: h,
            analyticsLocations: eh,
            subscriptionPlan: en,
            planGroup: C,
            trialId: m,
            priceOptions: Z,
            paymentSource: t,
            openInvoiceId: f,
            premiumSubscription: w ?? null,
            onNext: eb,
            metadata: S,
            sku: ev,
            purchaseType: q,
            referralCode: z,
            loadId: W.loadId,
            giftInfoOptions: em,
            invoicePreview: F,
            quantity: $,
        });
    }
    let ej = null != f || (q === E.VVm.ONE_TIME && !ei),
        eM = ee ? (0, l.jsx)(x.E, { makePurchase: eR, isSubmitting: eA, setIsSubmitting: ey }) : null;
    return (0, l.jsx)(H, {
        stripeExpressCheckoutComponent: eM,
        resolveTenantReviewButtonProps: k,
        showBackButton: N && !ej,
        onBackClick: t,
        disablePurchase: b,
        isSubmitting: eA,
        makePurchase: eR,
        needsPaymentSource: null == ef && !eg,
        onPaymentSourceAdd: R,
    });
}
