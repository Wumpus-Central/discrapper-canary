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
    E = n(428262),
    f = n(652215),
    A = n(202541);
async function S(e) {
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
        trialId: S,
        priceOptions: y,
        paymentSource: P,
        openInvoiceId: I,
        premiumSubscription: _,
        onNext: T,
        metadata: g,
        sku: v,
        purchaseType: x,
        referralCode: N,
        loadId: R,
        giftInfoOptions: b,
        invoicePreview: M,
        quantity: j,
    } = e;
    try {
        let e, n, i, O;
        if ((t(), r)) return;
        if (x === f.VVm.ONE_TIME)
            a()(null != v, "SKU must exist and be fetched."),
                a()(null != M, "invoicePreview must exist."),
                (e = await (0, C.XU)(v.applicationId, v.id, {
                    expectedAmount: M.total,
                    expectedCurrency: M.currency,
                    isGift: s,
                    paymentSource: P,
                    loadId: R,
                    giftInfoOptions: b,
                    quantity: j,
                }));
        else {
            a()(null != d, "Missing subscriptionPlan"), a()(null != M, "Missing invoicePreview");
            let t = { amount: M.total, currency: M.currency },
                n = (0, E.l6)(y, M.checkoutContext?.available_plans),
                l = (0, E.$Q)((0, E.y8)(d.id, !1, !1, n));
            if (null != _) {
                let e = y.currency ?? M.currency,
                    t = (0, E.Pg)(_, d.id, 1, new Set(p));
                (t = (0, E.qn)(t)), (l = (0, E.UC)(t, e.toLowerCase(), y.paymentSourceId));
            }
            if (s) {
                let t = M.total,
                    n = M.currency;
                e = await (0, C.XU)(A.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: P,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: R,
                    giftInfoOptions: b,
                    quantity: j,
                });
            } else if (null != P && null != _ && _.status === f.Dmq.PAST_DUE && null != I) {
                let n = y.currency ?? M.currency;
                e = f.AD1.has(P.type)
                    ? await (0, c.LD)(_, I, P, n, R)
                    : await (0, c.nV)(_, { paymentSource: P, currency: n }, t, l, u, o, R);
            } else if (null != _) {
                let n = (0, E.Pg)(_, d.id, 1, new Set(p)),
                    i = { paymentSource: P, currency: y.currency ?? M.currency };
                _.status === f.Dmq.PAUSED && (i.status = f.Dmq.ACTIVE),
                    _.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(_, i, t, l, u, o, R));
            } else
                e = await (0, m.B1)({
                    planId: d.id,
                    currency: y.currency ?? M.currency,
                    paymentSource: P,
                    trialId: S,
                    metadata: g,
                    referralCode: N,
                    loadId: R,
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
            T(n, i, O);
    } catch (e) {
        n(e);
    } finally {
        i();
    }
}
var y = n(166532),
    P = n(566980),
    I = n(216641),
    _ = n(380619),
    T = n(344159),
    g = n(174459),
    v = n(45938),
    x = n(17928),
    N = n(10716),
    R = n(20015),
    b = n(202475),
    M = n(364995),
    j = n(31823),
    O = n(666646),
    L = n(316915),
    w = n(327105),
    k = n(375708);
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
                this.init.purchaseType === f.VVm.SUBSCRIPTION
                    ? k.intl.string(k.t.YScQSF)
                    : k.intl.string(w.default.BPzQj4),
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
              ? k.intl.string(w.default["7r4HPu"])
              : null != e && null != e.text
                ? e.text
                : k.intl.string(w.default.BPzQj4);
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
                    tooltipText: k.intl.string(k.t.XdvBLS),
                    disabled: !0,
                    onClick: f.tEg,
                    dataTestId: "submitButton",
                };
    };
}
var D = n(558620),
    G = n(427675),
    F = n(480642);
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
                { hasPaymentSources: o } = (0, b.jm)(),
                { checkoutPaymentSources: u } = (0, M.t)(),
                {
                    hasAcceptedTerms: c,
                    paymentSourceId: d,
                    setCheckoutReviewButtonLabel: p,
                    purchaseType: m,
                } = (0, L.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                })),
                C = null != d && u.some((e) => e.id === d && null != e.relocationCountry),
                h = (0, O.mx)(),
                { application: E } = (0, j.V)(),
                A = (0, x.bG)([N.A], () => N.A.getFetchState()),
                S = (0, R.n)(E, f.gfo.EMBEDDED) && A === N.$.LOADING,
                y = l ?? !1,
                P = (null != h || r) ?? !1,
                I = i.useMemo(
                    () =>
                        new U(
                            {
                                purchaseType: m,
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
                    [m, n, a, t, o, C, d, c, s],
                ),
                _ = i.useMemo(
                    () => I.resolveReviewButtonProps({ loading: y, disabled: P, isApplicationDevShelfLoading: S }),
                    [y, P, S, I],
                );
            return (
                i.useEffect(() => {
                    p(_.text);
                }, [_.text, p]),
                _
            );
        })({
            onReviewButtonClick: r,
            isSubmitting: o,
            disablePurchase: s,
            onPaymentSourceAdd: a,
            resolveTenantReviewButtonProps: t,
            needsPaymentSource: u,
        });
    return (0, l.jsx)(F.lo, { onBackClick: n ? c : void 0, primaryButtonProps: d });
}
function B(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: m,
            planGroup: C = [],
            analyticsLocation: h,
            openInvoiceId: E,
            metadata: A,
            backButtonEligible: x,
            disablePurchase: N,
            onPaymentSourceAdd: R,
            handleStepChange: M,
            postPurchaseStep: j = y.pn.CONFIRM,
            resolveTenantReviewButtonProps: O,
        } = e,
        {
            activeSubscription: w,
            selectedSkuId: k,
            invoicePreview: U,
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
        })),
        { paymentSources: X } = (0, b.jm)(),
        ee = (0, D.A)(),
        et = (0, G.gU)(),
        {
            isGift: en,
            selectedGiftStyle: el,
            customGiftMessage: ei,
            emojiConfetti: er,
            soundEffect: ea,
            giftRecipient: es,
            selectedGiftingPromotionReward: eo,
        } = (0, p.Pv)(),
        eu = (0, _.Mq)(ee),
        ec = (0, v.lo)(es),
        ed = {};
    (ed.gift_style = el),
        (ed.reward_sku_ids = eu && null != eo ? [eo] : []),
        ec === v.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != es, "Gift recipient must be set at purchase review step for these gift options."),
            (ed.recipient_id = es.id),
            (ed.custom_message = ei),
            (ed.emoji_id = er?.id),
            (ed.emoji_name = er?.id == null ? er?.surrogates : void 0),
            (ed.sound_id = ea?.soundId));
    let ep = ee?.id,
        { analyticsLocations: em } = (0, u.Ay)(),
        eC = (0, I.W)(X, W),
        { giftCardBalance: eh, giftCardCurrency: eE } = (0, d.h)(),
        [ef, eA] = i.useState(!1),
        [eS, ey] = i.useState(!1),
        { hasEntitlements: eP } = (0, T.X)(ep, en),
        eI = null;
    Z === f.VVm.ONE_TIME &&
        (a()(null != k, "SKU must be selected for one-time purchases"),
        (eI = et[k] ?? null),
        a()(null != eI, "SKU must exist and be fetched."));
    let e_ = i.useCallback(() => {
            B(P.h.PURCHASING),
                F(!0),
                eA(!0),
                s.h.wait(o.ET),
                V(null),
                g.default.track(f.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: U?.subtotal,
                    tax: U?.tax,
                    expected_amount: U?.total,
                    expected_currency: U?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: eh,
                    gift_card_currency: eE,
                });
        }, [B, F, V, n, r, U, eh, eE]),
        eT = i.useCallback(
            (e) => {
                B(P.h.FAIL),
                    V(e),
                    g.default.track(f.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eC?.id,
                        payment_source_type: eC?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: eh,
                        gift_card_currency: eE,
                    });
            },
            [B, V, n, r, eC, eh, eE],
        ),
        eg = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), B(P.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (ey(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (B(P.h.COMPLETED), { shouldReturnEarly: !1 }),
            [B],
        ),
        ev = i.useCallback(() => {
            eS || eA(!1);
        }, [eS]),
        ex = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                J(l), null != t && Q(t), null != n && $(n), M(j, { fulfillment: { subscription: l, entitlements: t } });
            },
            [M, j, J, Q, $],
        );
    async function eN() {
        await S({
            onPurchaseAttempt: e_,
            onPurchaseError: eT,
            onPurchaseComplete: eg,
            onPurchaseFinalize: ev,
            hasRedirectURL: eS,
            isGift: en,
            analyticsLocation: h,
            analyticsLocations: em,
            subscriptionPlan: ee,
            planGroup: C,
            trialId: m,
            priceOptions: K,
            paymentSource: eC,
            openInvoiceId: E,
            premiumSubscription: w ?? null,
            onNext: ex,
            metadata: A,
            sku: eI,
            purchaseType: Z,
            referralCode: q,
            loadId: Y.loadId,
            giftInfoOptions: ed,
            invoicePreview: U,
            quantity: z,
        });
    }
    let eR = null != E || (Z === f.VVm.ONE_TIME && !en);
    return (0, l.jsx)(H, {
        resolveTenantReviewButtonProps: O,
        showBackButton: x && !eR,
        onBackClick: t,
        disablePurchase: N,
        isSubmitting: ef,
        makePurchase: eN,
        needsPaymentSource: null == eC && !eP,
        onPaymentSourceAdd: R,
    });
}
