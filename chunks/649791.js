n.d(t, { U: () => H });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(228366),
    o = n(391048),
    u = n(688810),
    c = n(277984),
    d = n(11939),
    m = n(951305),
    p = n(158032),
    C = n(830382),
    h = n(243217),
    f = n(158045),
    E = n(652215),
    S = n(202541);
async function y(e) {
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
        planGroup: m,
        trialId: y,
        priceOptions: I,
        paymentSource: A,
        openInvoiceId: g,
        premiumSubscription: P,
        onNext: v,
        metadata: x,
        sku: _,
        purchaseType: T,
        referralCode: N,
        loadId: b,
        giftInfoOptions: j,
        invoicePreview: R,
        quantity: M,
    } = e;
    try {
        let e, n, i, O;
        if ((t(), r)) return;
        if (T === E.VVm.ONE_TIME)
            a()(null != _, "SKU must exist and be fetched."),
                a()(null != R, "invoicePreview must exist."),
                (e = await (0, C.XU)(_.applicationId, _.id, {
                    expectedAmount: R.total,
                    expectedCurrency: R.currency,
                    isGift: s,
                    paymentSource: A,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: M,
                }));
        else {
            a()(null != d, "Missing subscriptionPlan"), a()(null != R, "Missing invoicePreview");
            let t = { amount: R.total, currency: R.currency },
                n = (0, f.l6)(I, R.checkoutContext?.available_plans),
                l = (0, f.$Q)((0, f.y8)(d.id, !1, !1, n));
            if (null != P) {
                let e = I.currency ?? R.currency,
                    t = (0, f.Pg)(P, d.id, 1, new Set(m));
                (t = (0, f.qn)(t)), (l = (0, f.UC)(t, e.toLowerCase(), I.paymentSourceId));
            }
            if (s) {
                let t = R.total,
                    n = R.currency;
                e = await (0, C.XU)(S.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: A,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: M,
                });
            } else if (null != A && null != P && P.status === E.Dmq.PAST_DUE && null != g) {
                let n = I.currency ?? R.currency;
                e = E.AD1.has(A.type)
                    ? await (0, c.LD)(P, g, A, n, b)
                    : await (0, c.nV)(P, { paymentSource: A, currency: n }, t, l, u, o, b);
            } else if (null != P) {
                let n = (0, f.Pg)(P, d.id, 1, new Set(m)),
                    i = { paymentSource: A, currency: I.currency ?? R.currency };
                P.status === E.Dmq.PAUSED && (i.status = E.Dmq.ACTIVE),
                    P.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(P, i, t, l, u, o, b));
            } else
                e = await (0, p.B1)({
                    planId: d.id,
                    currency: I.currency ?? R.currency,
                    paymentSource: A,
                    trialId: y,
                    metadata: x,
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
var I = n(166532),
    A = n(566980),
    g = n(216641),
    P = n(580194),
    v = n(344159),
    x = n(174459),
    _ = n(45938),
    T = n(708791),
    N = n(17928),
    b = n(10716),
    j = n(20015),
    R = n(202475),
    M = n(31823),
    O = n(666646),
    L = n(87725),
    k = n(477729),
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
function B(e) {
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
        m = (function (e) {
            let {
                    onReviewButtonClick: t,
                    needsPaymentSource: n,
                    isSubmitting: l,
                    disablePurchase: r,
                    onPaymentSourceAdd: a,
                    resolveTenantReviewButtonProps: s,
                } = e,
                { hasPaymentSources: o } = (0, R.j)(),
                {
                    hasAcceptedTerms: u,
                    paymentSourceId: c,
                    setCheckoutReviewButtonLabel: d,
                    purchaseType: m,
                    checkoutPaymentSources: p,
                } = (0, L.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                })),
                C = null != c && p.some((e) => e.id === c && null != e.relocationCountry),
                h = (0, O.mx)(),
                { application: f } = (0, M.V)(),
                S = (0, N.bG)([b.A], () => b.A.getFetchState()),
                y = (0, j.n)(f, E.gfo.EMBEDDED) && S === b.$.LOADING,
                I = l ?? !1,
                A = (null != h || r) ?? !1,
                g = i.useMemo(
                    () =>
                        new U(
                            {
                                purchaseType: m,
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
                    [m, n, a, t, o, C, c, u, s],
                ),
                P = i.useMemo(
                    () => g.resolveReviewButtonProps({ loading: I, disabled: A, isApplicationDevShelfLoading: y }),
                    [I, A, y, g],
                );
            return (
                i.useEffect(() => {
                    d(P.text);
                }, [P.text, d]),
                P
            );
        })({
            onReviewButtonClick: () => a(),
            isSubmitting: u,
            disablePurchase: o,
            onPaymentSourceAdd: s,
            resolveTenantReviewButtonProps: n,
            needsPaymentSource: c,
        });
    return (0, l.jsx)(F.lo, { onBackClick: r ? d : void 0, primaryButtonProps: m, stripeExpressCheckoutComponent: t });
}
function H(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: p,
            planGroup: C = [],
            analyticsLocation: h,
            openInvoiceId: f,
            metadata: S,
            backButtonEligible: N,
            disablePurchase: b,
            onPaymentSourceAdd: j,
            handleStepChange: M,
            postPurchaseStep: O = I.pn.CONFIRM,
            resolveTenantReviewButtonProps: k,
        } = e,
        {
            activeSubscription: w,
            selectedSkuId: U,
            invoicePreview: F,
            setHasAcceptedTerms: H,
            setPurchaseState: W,
            contextMetadata: Y,
            paymentSourceId: V,
            setPurchaseError: K,
            priceOptions: Z,
            purchaseType: q,
            referralCode: z,
            quantity: Q,
            setEntitlementsGranted: $,
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
        { paymentSources: et } = (0, R.j)(),
        en = (0, D.A)(),
        el = (0, G.gU)(),
        {
            isGift: ei,
            selectedGiftStyle: er,
            customGiftMessage: ea,
            emojiConfetti: es,
            soundEffect: eo,
            giftRecipient: eu,
            selectedGiftingPromotionRewards: ec,
        } = (0, m.Pv)(),
        ed = (0, P.Mq)(en),
        em = (0, _.lo)(eu),
        ep = {};
    (ep.gift_style = er),
        (ep.reward_sku_ids = ed ? ec : []),
        em === _.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eu, "Gift recipient must be set at purchase review step for these gift options."),
            (ep.recipient_id = eu.id),
            (ep.custom_message = ea),
            (ep.emoji_id = es?.id),
            (ep.emoji_name = es?.id == null ? es?.surrogates : void 0),
            (ep.sound_id = eo?.soundId));
    let eC = en?.id,
        { analyticsLocations: eh } = (0, u.Ay)(),
        ef = (0, g.W)(et, V),
        { giftCardBalance: eE, giftCardCurrency: eS } = (0, d.h)(),
        [ey, eI] = i.useState(!1),
        [eA, eg] = i.useState(!1),
        { hasEntitlements: eP } = (0, v.X)(eC, ei),
        ev = null;
    q === E.VVm.ONE_TIME &&
        (a()(null != U, "SKU must be selected for one-time purchases"),
        (ev = el[U] ?? null),
        a()(null != ev, "SKU must exist and be fetched."));
    let ex = i.useCallback(() => {
            W(A.h.PURCHASING),
                H(!0),
                eI(!0),
                s.h.wait(o.ET),
                K(null),
                x.default.track(E.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: F?.subtotal,
                    tax: F?.tax,
                    expected_amount: F?.total,
                    expected_currency: F?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: eE,
                    gift_card_currency: eS,
                });
        }, [W, H, K, n, r, F, eE, eS]),
        e_ = i.useCallback(
            (e) => {
                W(A.h.FAIL),
                    K(e),
                    x.default.track(E.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: ef?.id,
                        payment_source_type: ef?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: eE,
                        gift_card_currency: eS,
                    });
            },
            [W, K, n, r, ef, eE, eS],
        ),
        eT = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), W(A.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eg(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (W(A.h.COMPLETED), { shouldReturnEarly: !1 }),
            [W],
        ),
        eN = i.useCallback(() => {
            eA || eI(!1);
        }, [eA]),
        eb = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                X(l), null != t && $(t), null != n && J(n), M(O, { fulfillment: { subscription: l, entitlements: t } });
            },
            [M, O, X, $, J],
        );
    async function ej(e) {
        let t = e ?? ef;
        await y({
            onPurchaseAttempt: ex,
            onPurchaseError: e_,
            onPurchaseComplete: eT,
            onPurchaseFinalize: eN,
            hasRedirectURL: eA,
            isGift: ei,
            analyticsLocation: h,
            analyticsLocations: eh,
            subscriptionPlan: en,
            planGroup: C,
            trialId: p,
            priceOptions: Z,
            paymentSource: t,
            openInvoiceId: f,
            premiumSubscription: w ?? null,
            onNext: eb,
            metadata: S,
            sku: ev,
            purchaseType: q,
            referralCode: z,
            loadId: Y.loadId,
            giftInfoOptions: ep,
            invoicePreview: F,
            quantity: Q,
        });
    }
    let eR = null != f || (q === E.VVm.ONE_TIME && !ei),
        eM = ee ? (0, l.jsx)(T.E, { makePurchase: ej, isSubmitting: ey, setIsSubmitting: eI }) : null;
    return (0, l.jsx)(B, {
        stripeExpressCheckoutComponent: eM,
        resolveTenantReviewButtonProps: k,
        showBackButton: N && !eR,
        onBackClick: t,
        disablePurchase: b,
        isSubmitting: ey,
        makePurchase: ej,
        needsPaymentSource: null == ef && !eP,
        onPaymentSourceAdd: j,
    });
}
