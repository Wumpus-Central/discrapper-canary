n.d(t, { U: () => B });
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
    h = n(427675),
    C = n(169797),
    E = n(316915),
    f = n(380619),
    A = n(344159),
    S = n(174459),
    y = n(45938),
    P = n(951305),
    I = n(158032),
    _ = n(830382),
    T = n(243217),
    g = n(428262),
    x = n(652215),
    v = n(202541);
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
        priceOptions: h,
        paymentSource: C,
        openInvoiceId: E,
        premiumSubscription: f,
        onNext: A,
        metadata: S,
        sku: y,
        purchaseType: P,
        referralCode: N,
        loadId: M,
        giftInfoOptions: R,
        invoicePreview: b,
        quantity: j,
    } = e;
    try {
        let e, n, i, O;
        if ((t(), r)) return;
        if (P === x.VVm.ONE_TIME)
            a()(null != y, "SKU must exist and be fetched."),
                a()(null != b, "invoicePreview must exist."),
                (e = await (0, _.XU)(y.applicationId, y.id, {
                    expectedAmount: b.total,
                    expectedCurrency: b.currency,
                    isGift: s,
                    paymentSource: C,
                    loadId: M,
                    giftInfoOptions: R,
                    quantity: j,
                }));
        else {
            a()(null != d, "Missing subscriptionPlan"), a()(null != b, "Missing invoicePreview");
            let t = { amount: b.total, currency: b.currency },
                n = (0, g.l6)(h, b.checkoutContext?.available_plans),
                l = (0, g.$Q)((0, g.y8)(d.id, !1, !1, n));
            if (null != f) {
                let e = h.currency ?? b.currency,
                    t = (0, g.Pg)(f, d.id, 1, new Set(p));
                (t = (0, g.qn)(t)), (l = (0, g.UC)(t, e.toLowerCase(), h.paymentSourceId));
            }
            if (s) {
                let t = b.total,
                    n = b.currency;
                e = await (0, _.XU)(v.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: C,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: M,
                    giftInfoOptions: R,
                    quantity: j,
                });
            } else if (null != C && null != f && f.status === x.Dmq.PAST_DUE && null != E) {
                let n = h.currency ?? b.currency;
                e = x.AD1.has(C.type)
                    ? await (0, c.LD)(f, E, C, n, M)
                    : await (0, c.nV)(f, { paymentSource: C, currency: n }, t, l, u, o, M);
            } else if (null != f) {
                let n = (0, g.Pg)(f, d.id, 1, new Set(p)),
                    i = { paymentSource: C, currency: h.currency ?? b.currency };
                f.status === x.Dmq.PAUSED && (i.status = x.Dmq.ACTIVE),
                    f.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(f, i, t, l, u, o, M));
            } else
                e = await (0, I.B1)({
                    planId: d.id,
                    currency: h.currency ?? b.currency,
                    paymentSource: C,
                    trialId: m,
                    metadata: S,
                    referralCode: N,
                    loadId: M,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: L } = l(e);
        if (L) return;
        "subscription" in e
            ? (n = null != e.subscription ? T.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (O =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            A(n, i, O);
    } catch (e) {
        n(e);
    } finally {
        i();
    }
}
var M = n(166532),
    R = n(566980),
    b = n(216641),
    j = n(17928),
    O = n(10716),
    L = n(20015),
    w = n(364995),
    k = n(31823),
    D = n(666646),
    U = n(375708),
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
                this.init.purchaseType === x.VVm.SUBSCRIPTION
                    ? U.intl.string(U.t.YScQSF)
                    : U.intl.string(G.default.BPzQj4),
            dataTestId: "purchase",
            onClick: this.init.onReviewButtonClick,
            loading: e.loading,
            disabled: e.disabled,
        };
    }
    resolveButtonLabel(e) {
        return null === this.init.paymentSourceId && this.init.hasPaymentSources
            ? U.intl.string(U.t.CpOiEO)
            : this.init.willRelocateStoreCountry
              ? U.intl.string(G.default["7r4HPu"])
              : null != e && null != e.text
                ? e.text
                : U.intl.string(G.default.BPzQj4);
    }
    resolvePaymentSourceRequiredProps(e) {
        let t = { text: e, tooltipText: U.intl.string(U.t.L7jbQV), type: "submit", dataTestId: "submitButton" };
        return this.init.hasPaymentSources
            ? { ...t, variant: "primary", onClick: this.init.onPaymentSourceAdd }
            : { ...t, variant: "active", disabled: !0 };
    }
    resolveApplicationDevShelfLoadingProps(e) {
        return {
            tooltipText: U.intl.string(U.t.cjA5tj),
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
            let e = this.resolvePaymentSourceRequiredProps(a),
                t = null != r ? r.variant : void 0;
            return { ...e, variant: t ?? e.variant };
        }
        if (o) return this.resolveApplicationDevShelfLoadingProps(a);
        let u = { ...r, text: a };
        return s
            ? { ...u, disabled: !0, onClick: void 0 }
            : n
              ? u
              : {
                    ...u,
                    tooltipText: U.intl.string(U.t.XdvBLS),
                    disabled: !0,
                    onClick: x.tEg,
                    dataTestId: "submitButton",
                };
    };
}
function H(e) {
    let {
            resolveTenantReviewButtonProps: t,
            showBackButton: n,
            makePurchase: r,
            onPaymentSourceAdd: a,
            disablePurchase: s,
            isSubmitting: o,
            needsPaymentSource: u,
            onBackClick: c,
        } = e,
        d = (function (e) {
            let {
                    onReviewButtonClick: t,
                    needsPaymentSource: n,
                    isSubmitting: l,
                    disablePurchase: r,
                    onPaymentSourceAdd: a,
                    resolveTenantReviewButtonProps: s,
                } = e,
                { hasPaymentSources: o } = (0, p.jm)(),
                { checkoutPaymentSources: u } = (0, w.t)(),
                {
                    hasAcceptedTerms: c,
                    paymentSourceId: d,
                    setCheckoutReviewButtonLabel: m,
                    purchaseType: h,
                } = (0, E.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                })),
                C = null != d && u.some((e) => e.id === d && null != e.relocationCountry),
                f = (0, D.mx)(),
                { application: A } = (0, k.V)(),
                S = (0, j.bG)([O.A], () => O.A.getFetchState()),
                y = (0, L.n)(A, x.gfo.EMBEDDED) && S === O.$.LOADING,
                P = l ?? !1,
                I = (null != f || r) ?? !1,
                _ = i.useMemo(
                    () =>
                        new F(
                            {
                                purchaseType: h,
                                needsPaymentSource: n,
                                onPaymentSourceAdd: a,
                                onReviewButtonClick: t,
                                hasPaymentSources: o,
                                willRelocateStoreCountry: C,
                                paymentSourceId: d,
                                hasAcceptedTerms: c,
                            },
                            s,
                        ),
                    [h, n, a, t, o, C, d, c, s],
                ),
                T = i.useMemo(
                    () => _.resolveReviewButtonProps({ loading: P, disabled: I, isApplicationDevShelfLoading: y }),
                    [P, I, y, _],
                );
            return (
                i.useEffect(() => {
                    m(T.text);
                }, [T.text, m]),
                T
            );
        })({
            onReviewButtonClick: r,
            isSubmitting: o,
            disablePurchase: s,
            onPaymentSourceAdd: a,
            resolveTenantReviewButtonProps: t,
            needsPaymentSource: u,
        });
    return (0, l.jsx)(C.lo, { onBackClick: n ? c : void 0, primaryButtonProps: d });
}
function B(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: C,
            planGroup: I = [],
            analyticsLocation: _,
            openInvoiceId: T,
            metadata: g,
            backButtonEligible: v,
            disablePurchase: j,
            onPaymentSourceAdd: O,
            handleStepChange: L,
            postPurchaseStep: w = M.pn.CONFIRM,
            resolveTenantReviewButtonProps: k,
        } = e,
        {
            activeSubscription: D,
            selectedSkuId: U,
            invoicePreview: G,
            setHasAcceptedTerms: F,
            setPurchaseState: B,
            contextMetadata: Y,
            paymentSourceId: W,
            setPurchaseError: V,
            priceOptions: K,
            purchaseType: Z,
            referralCode: q,
            quantity: z,
            setEntitlementsGranted: Q,
            setAppliedUserDiscounts: $,
            setUpdatedSubscription: J,
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
        { paymentSources: X } = (0, p.jm)(),
        ee = (0, m.A)(),
        et = (0, h.gU)(),
        {
            isGift: en,
            selectedGiftStyle: el,
            customGiftMessage: ei,
            emojiConfetti: er,
            soundEffect: ea,
            giftRecipient: es,
            selectedGiftingPromotionReward: eo,
        } = (0, P.Pv)(),
        eu = (0, f.Mq)(ee),
        ec = (0, y.lo)(es),
        ed = {};
    (ed.gift_style = el),
        (ed.reward_sku_ids = eu && null != eo ? [eo] : []),
        ec === y.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != es, "Gift recipient must be set at purchase review step for these gift options."),
            (ed.recipient_id = es.id),
            (ed.custom_message = ei),
            (ed.emoji_id = er?.id),
            (ed.emoji_name = er?.id == null ? er?.surrogates : void 0),
            (ed.sound_id = ea?.soundId));
    let ep = ee?.id,
        { analyticsLocations: em } = (0, u.Ay)(),
        eh = (0, b.W)(X, W),
        { giftCardBalance: eC, giftCardCurrency: eE } = (0, d.h)(),
        [ef, eA] = i.useState(!1),
        [eS, ey] = i.useState(!1),
        { hasEntitlements: eP } = (0, A.X)(ep, en),
        eI = null;
    Z === x.VVm.ONE_TIME &&
        (a()(null != U, "SKU must be selected for one-time purchases"),
        (eI = et[U] ?? null),
        a()(null != eI, "SKU must exist and be fetched."));
    let e_ = i.useCallback(() => {
            B(R.h.PURCHASING),
                F(!0),
                eA(!0),
                s.h.wait(o.ET),
                V(null),
                S.default.track(x.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: G?.subtotal,
                    tax: G?.tax,
                    expected_amount: G?.total,
                    expected_currency: G?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: eC,
                    gift_card_currency: eE,
                });
        }, [B, F, V, n, r, G, eC, eE]),
        eT = i.useCallback(
            (e) => {
                B(R.h.FAIL),
                    V(e),
                    S.default.track(x.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eh?.id,
                        payment_source_type: eh?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: eC,
                        gift_card_currency: eE,
                    });
            },
            [B, V, n, r, eh, eC, eE],
        ),
        eg = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), B(R.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (ey(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (B(R.h.COMPLETED), { shouldReturnEarly: !1 }),
            [B],
        ),
        ex = i.useCallback(() => {
            eS || eA(!1);
        }, [eS]),
        ev = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                J(l), null != t && Q(t), null != n && $(n), L(w, { fulfillment: { subscription: l, entitlements: t } });
            },
            [L, w, J, Q, $],
        );
    async function eN() {
        await N({
            onPurchaseAttempt: e_,
            onPurchaseError: eT,
            onPurchaseComplete: eg,
            onPurchaseFinalize: ex,
            hasRedirectURL: eS,
            isGift: en,
            analyticsLocation: _,
            analyticsLocations: em,
            subscriptionPlan: ee,
            planGroup: I,
            trialId: C,
            priceOptions: K,
            paymentSource: eh,
            openInvoiceId: T,
            premiumSubscription: D ?? null,
            onNext: ev,
            metadata: g,
            sku: eI,
            purchaseType: Z,
            referralCode: q,
            loadId: Y.loadId,
            giftInfoOptions: ed,
            invoicePreview: G,
            quantity: z,
        });
    }
    let eM = null != T || (Z === x.VVm.ONE_TIME && !en);
    return (0, l.jsx)(H, {
        resolveTenantReviewButtonProps: k,
        showBackButton: v && !eM,
        onBackClick: t,
        disablePurchase: j,
        isSubmitting: ef,
        makePurchase: eN,
        needsPaymentSource: null == eh && !eP,
        onPaymentSourceAdd: O,
    });
}
