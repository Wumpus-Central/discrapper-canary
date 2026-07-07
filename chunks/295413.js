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
    E = n(650170),
    A = n(380619),
    f = n(344159),
    S = n(174459),
    y = n(45938),
    P = n(937008),
    I = n(158032),
    T = n(830382),
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
        order: O,
        quantity: j,
    } = e;
    try {
        let e, n, i, L;
        if ((t(), r)) return;
        if (P === v.VVm.ONE_TIME)
            a()(null != y, "SKU must exist and be fetched."),
                a()(null != M, "invoicePreview must exist."),
                (e = await (0, T.XU)(y.applicationId, y.id, {
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
                e = await (0, T.XU)(x.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: h,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: R,
                    giftInfoOptions: b,
                    orderId: O?.id,
                    quantity: j,
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
                e = await (0, I.B1)({
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
            f(n, i, L);
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
                I = r ?? !1,
                T = (null != f || a) ?? !1,
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
                    () => _.resolveReviewButtonProps({ loading: I, disabled: T, isApplicationDevShelfLoading: P }),
                    [I, T, P, _],
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
            flowStartTime: I,
            trialId: T,
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
            order: q,
            priceOptions: z,
            purchaseType: $,
            referralCode: X,
            quantity: Q,
            setEntitlementsGranted: J,
            setAppliedUserDiscounts: ee,
            setUpdatedSubscription: et,
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
        { paymentSources: en } = (0, p.jm)(),
        el = (0, m.A)(),
        ei = (0, C.gU)(),
        {
            isGift: er,
            selectedGiftStyle: ea,
            customGiftMessage: es,
            emojiConfetti: eo,
            soundEffect: eu,
            giftRecipient: ec,
            selectedGiftingPromotionReward: ed,
        } = (0, P.Pv)(),
        ep = (0, A.Mq)(el),
        em = (0, y.lo)(ec),
        eC = {};
    (eC.gift_style = ea),
        (eC.reward_sku_ids = ep && null != ed ? [ed] : []),
        em === y.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != ec, "Gift recipient must be set at purchase review step for these gift options."),
            (eC.recipient_id = ec.id),
            (eC.custom_message = es),
            (eC.emoji_id = eo?.id),
            (eC.emoji_name = eo?.id == null ? eo?.surrogates : void 0),
            (eC.sound_id = eu?.soundId));
    let eh = el?.id,
        { analyticsLocations: eE } = (0, u.Ay)(),
        eA = (0, M.W)(en, K),
        { giftCardBalance: ef, giftCardCurrency: eS } = (0, d.h)(),
        [ey, eP] = i.useState(!1),
        [eI, eT] = i.useState(!1),
        { hasEntitlements: e_ } = (0, f.X)(eh, er),
        eg = null;
    $ === v.VVm.ONE_TIME &&
        (a()(null != F, "SKU must be selected for one-time purchases"),
        (eg = ei[F] ?? null),
        a()(null != eg, "SKU must exist and be fetched."));
    let ev = i.useCallback(() => {
            W(b.h.PURCHASING),
                H(!0),
                eP(!0),
                s.h.wait(o.ET),
                Z(null),
                S.default.track(v.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...h,
                    subtotal: Y?.subtotal,
                    tax: Y?.tax,
                    expected_amount: Y?.total,
                    expected_currency: Y?.currency,
                    duration_ms: Date.now() - I,
                    gift_card_balance: ef,
                    gift_card_currency: eS,
                });
        }, [W, H, Z, h, I, Y, ef, eS]),
        ex = i.useCallback(
            (e) => {
                W(b.h.FAIL),
                    Z(e),
                    S.default.track(v.HAw.PAYMENT_FLOW_FAILED, {
                        ...h,
                        payment_error_code: e?.code,
                        payment_source_id: eA?.id,
                        payment_source_type: eA?.type,
                        duration_ms: Date.now() - I,
                        gift_card_balance: ef,
                        gift_card_currency: eS,
                    });
            },
            [W, Z, h, I, eA, ef, eS],
        ),
        eN = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), W(b.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eT(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (W(b.h.COMPLETED), { shouldReturnEarly: !1 }),
            [W],
        ),
        eR = i.useCallback(() => {
            eI || eP(!1);
        }, [eI]),
        eb = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                et(l),
                    null != t && J(t),
                    null != n && ee(n),
                    U(w, { fulfillment: { subscription: l, entitlements: t } });
            },
            [U, w, et, J, ee],
        );
    async function eM() {
        await N({
            onPurchaseAttempt: ev,
            onPurchaseError: ex,
            onPurchaseComplete: eN,
            onPurchaseFinalize: eR,
            hasRedirectURL: eI,
            isGift: er,
            analyticsLocation: g,
            analyticsLocations: eE,
            subscriptionPlan: el,
            planGroup: _,
            trialId: T,
            priceOptions: z,
            paymentSource: eA,
            openInvoiceId: x,
            premiumSubscription: G ?? null,
            onNext: eb,
            metadata: O,
            sku: eg,
            purchaseType: $,
            referralCode: X,
            loadId: V.loadId,
            giftInfoOptions: eC,
            invoicePreview: Y,
            order: q,
            quantity: Q,
        });
    }
    let eO = null != x || ($ === v.VVm.ONE_TIME && !er),
        ej = i.useCallback(() => {
            null != n.current && (n.current.scrollIntoView({ behavior: "smooth" }), r());
        }, [n, r]);
    return (0, l.jsx)(B, {
        resolveTenantReviewButtonProps: k,
        showBackButton: j && !eO,
        onBackClick: t,
        handleShowLegalFlash: ej,
        disablePurchase: L,
        isSubmitting: ey,
        makePurchase: eM,
        needsPaymentSource: null == eA && !e_,
        onPaymentSourceAdd: D,
    });
}
