"use strict";
n.d(t, { U: () => H });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(228366),
    l = n(391048),
    u = n(688810),
    c = n(234320),
    d = n(426398),
    _ = n(558620),
    h = n(427675),
    f = n(480642),
    p = n(650170),
    E = n(380619),
    m = n(155984),
    g = n(344159),
    A = n(174459),
    I = n(45938),
    T = n(937008),
    S = n(158032),
    y = n(830382),
    C = n(277984),
    N = n(243217),
    v = n(428262),
    R = n(652215),
    O = n(202541);
async function b(e) {
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
        referralCode: b,
        loadId: D,
        giftInfoOptions: L,
        invoicePreview: w,
        order: M,
    } = e;
    try {
        let e, n, r, P;
        if ((t(), s)) return;
        if (T === R.VVm.ONE_TIME)
            a()(null != I, "SKU must exist and be fetched."),
                a()(null != w, "invoicePreview must exist."),
                (e = await (0, y.XU)(I.applicationId, I.id, {
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
                n = (0, v.l6)(h, w.checkoutContext?.available_plans),
                i = (0, v.$Q)((0, v.y8)(c.id, !1, !1, n));
            if (null != m) {
                let e = h.currency ?? w.currency,
                    t = (0, v.Pg)(m, c.id, 1, new Set(d));
                (t = (0, v.qn)(t)), (i = (0, v.UC)(t, e.toLowerCase(), h.paymentSourceId));
            }
            if (o) {
                let t = w.total,
                    n = w.currency;
                e = await (0, y.XU)(O.tv, c.skuId, {
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
                e = R.AD1.has(f.type)
                    ? await (0, C.LD)(m, E, f, n, D)
                    : await (0, C.nV)(m, { paymentSource: f, currency: n }, t, i, u, l, D);
            } else if (null != m) {
                let n = (0, v.Pg)(m, c.id, 1, new Set(d)),
                    r = { paymentSource: f, currency: h.currency ?? w.currency };
                m.status === R.Dmq.PAUSED && (r.status = R.Dmq.ACTIVE),
                    m.isPausedAllowsResumeButNotUpdates || (r.items = n),
                    (e = await (0, C.nV)(m, r, t, i, u, l, D));
            } else
                e = await (0, S.B1)({
                    planId: c.id,
                    currency: h.currency ?? w.currency,
                    paymentSource: f,
                    trialId: _,
                    metadata: A,
                    referralCode: b,
                    loadId: D,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: i,
                });
        }
        let { shouldReturnEarly: x } = i(e);
        if (x) return;
        "subscription" in e
            ? (n = null != e.subscription ? N.A.createFromServer(e.subscription) : null)
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
var D = n(166532),
    L = n(566980),
    w = n(216641),
    M = n(17928),
    P = n(10716),
    x = n(20015),
    k = n(364995),
    U = n(31823),
    G = n(666646),
    F = n(375708),
    V = n(327105);
class B {
    init;
    resolveTenantReviewButtonProps;
    constructor(e, t) {
        (this.init = e), (this.resolveTenantReviewButtonProps = t ?? this.defaultResolveTenantReviewButtonProps);
    }
    defaultResolveTenantReviewButtonProps(e) {
        return {
            variant: "active",
            text:
                this.init.purchaseType === R.VVm.SUBSCRIPTION
                    ? F.intl.string(F.t.YScQSF)
                    : F.intl.string(V.default.BPzQj4),
            dataTestId: "purchase",
            onClick: this.init.onReviewButtonClick,
            loading: e.loading,
            disabled: e.disabled,
        };
    }
    resolveButtonLabel(e) {
        return null === this.init.paymentSourceId && this.init.hasPaymentSources
            ? F.intl.string(F.t.CpOiEO)
            : this.init.willRelocateStoreCountry
              ? F.intl.string(V.default["7r4HPu"])
              : null != e && null != e.text
                ? e.text
                : F.intl.string(V.default.BPzQj4);
    }
    resolvePaymentSourceRequiredProps(e) {
        let t = { text: e, tooltipText: F.intl.string(F.t.L7jbQV), type: "submit", dataTestId: "submitButton" };
        return this.init.hasPaymentSources
            ? { ...t, variant: "primary", onClick: this.init.onPaymentSourceAdd }
            : { ...t, variant: "active", disabled: !0 };
    }
    resolveApplicationDevShelfLoadingProps(e) {
        return {
            tooltipText: F.intl.string(F.t.cjA5tj),
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
        let c = { ...a, text: o };
        return l
            ? { ...c, disabled: !0, onClick: void 0 }
            : n
              ? c
              : { ...c, tooltipText: F.intl.string(F.t.XdvBLS), onClick: i, dataTestId: "submitButton" };
    };
}
function j(e) {
    let {
            resolveTenantReviewButtonProps: t,
            showBackButton: n,
            makePurchase: s,
            onPaymentSourceAdd: a,
            handleShowLegalFlash: o,
            disablePurchase: l,
            isSubmitting: u,
            needsPaymentSource: c,
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
                { hasPaymentSources: u } = (0, d.jm)(),
                { checkoutPaymentSources: c } = (0, k.t)(),
                {
                    hasAcceptedTerms: _,
                    paymentSourceId: h,
                    setCheckoutReviewButtonLabel: f,
                    purchaseType: E,
                } = (0, p.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                })),
                m = null != h && c.some((e) => e.id === h && null != e.relocationCountry),
                g = (0, G.mx)(),
                { application: A } = (0, U.V)(),
                I = (0, M.bG)([P.A], () => P.A.getFetchState()),
                T = (0, x.n)(A, R.gfo.EMBEDDED) && I === P.$.LOADING,
                S = s ?? !1,
                y = (null != g || a) ?? !1,
                C = r.useMemo(
                    () =>
                        new B(
                            {
                                purchaseType: E,
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
                    [E, i, n, o, t, u, m, h, _, l],
                ),
                N = r.useMemo(
                    () => C.resolveReviewButtonProps({ loading: S, disabled: y, isApplicationDevShelfLoading: T }),
                    [S, y, T, C],
                );
            return (
                r.useEffect(() => {
                    f(N.text);
                }, [N.text, f]),
                N
            );
        })({
            onReviewButtonClick: s,
            handleShowLegalFlash: o,
            isSubmitting: u,
            disablePurchase: l,
            onPaymentSourceAdd: a,
            resolveTenantReviewButtonProps: t,
            needsPaymentSource: c,
        });
    return (0, i.jsx)(f.lo, { onBackClick: n ? _ : void 0, primaryButtonProps: h });
}
function H(e) {
    let {
            premiumSubscription: t,
            onBack: n,
            legalTermsNodeRef: s,
            flashLegalTerms: f,
            baseAnalyticsData: S,
            flowStartTime: y,
            trialId: C,
            planGroup: N = [],
            analyticsLocation: v,
            openInvoiceId: O,
            metadata: M,
            backButtonEligible: P,
            disablePurchase: x,
            onPaymentSourceAdd: k,
            handleStepChange: U,
            postPurchaseStep: G = D.pn.CONFIRM,
            resolveTenantReviewButtonProps: F,
        } = e,
        {
            selectedSkuId: V,
            invoicePreview: B,
            setHasAcceptedTerms: H,
            setPurchaseState: Y,
            contextMetadata: W,
            paymentSourceId: K,
            setPurchaseError: $,
            order: z,
            priceOptions: q,
            purchaseType: Z,
            referralCode: X,
            setEntitlementsGranted: Q,
            setAppliedUserDiscounts: J,
            setUpdatedSubscription: ee,
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
        { paymentSources: et } = (0, d.jm)(),
        en = (0, _.A)(),
        ei = (0, h.gU)(),
        {
            isGift: er,
            selectedGiftStyle: es,
            customGiftMessage: ea,
            emojiConfetti: eo,
            soundEffect: el,
            giftRecipient: eu,
            selectedGiftingPromotionReward: ec,
        } = (0, T.Pv)(),
        ed = (0, E.Mq)(en),
        e_ = (0, I.lo)(eu),
        eh = {};
    (eh.gift_style = es),
        (eh.reward_sku_ids = ed && null != ec ? [ec] : []),
        e_ === I.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eu, "Gift recipient must be set at purchase review step for these gift options."),
            (eh.recipient_id = eu.id),
            (eh.custom_message = ea),
            (eh.emoji_id = eo?.id),
            (eh.emoji_name = eo?.id == null ? eo?.surrogates : void 0),
            (eh.sound_id = el?.soundId));
    let ef = en?.id,
        { analyticsLocations: ep } = (0, u.Ay)(),
        eE = (0, w.W)(et, K),
        { giftCardBalance: em, giftCardCurrency: eg } = (0, c.h)(),
        [eA, eI] = r.useState(!1),
        [eT, eS] = r.useState(!1),
        { hasEntitlements: ey } = (0, g.X)(ef, er),
        eC = (0, m.l)(),
        eN = null;
    Z === R.VVm.ONE_TIME &&
        (a()(null != V, "SKU must be selected for one-time purchases"),
        (eN = ei[V] ?? null),
        a()(null != eN, "SKU must exist and be fetched."));
    let ev = r.useCallback(() => {
            Y(L.h.PURCHASING),
                H(!0),
                eI(!0),
                o.h.wait(l.ET),
                $(null),
                A.default.track(R.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...S,
                    subtotal: B?.subtotal,
                    tax: B?.tax,
                    expected_amount: B?.total,
                    expected_currency: B?.currency,
                    duration_ms: Date.now() - y,
                    gift_card_balance: em,
                    gift_card_currency: eg,
                });
        }, [Y, H, $, S, y, B, em, eg]),
        eR = r.useCallback(
            (e) => {
                Y(L.h.FAIL),
                    $(e),
                    A.default.track(R.HAw.PAYMENT_FLOW_FAILED, {
                        ...S,
                        payment_error_code: e?.code,
                        payment_source_id: eE?.id,
                        payment_source_type: eE?.type,
                        duration_ms: Date.now() - y,
                        gift_card_balance: em,
                        gift_card_currency: eg,
                    });
            },
            [Y, $, S, y, eE, em, eg],
        ),
        eO = r.useCallback(
            (e) =>
                e.redirectConfirmation || e.pendingCustomerAction
                    ? (eS(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (Y(L.h.COMPLETED), { shouldReturnEarly: !1 }),
            [Y],
        ),
        eb = r.useCallback(() => {
            eT || eI(!1);
        }, [eT]),
        eD = r.useCallback(
            (e, t, n) => {
                let i = e ?? null;
                ee(i),
                    null != t && Q(t),
                    null != n && J(n),
                    U(G, { fulfillment: { subscription: i, entitlements: t } });
            },
            [U, G, ee, Q, J],
        );
    async function eL() {
        await b({
            onPurchaseAttempt: ev,
            onPurchaseError: eR,
            onPurchaseComplete: eO,
            onPurchaseFinalize: eb,
            hasRedirectURL: eT,
            isGift: er,
            analyticsLocation: v,
            analyticsLocations: ep,
            subscriptionPlan: en,
            planGroup: N,
            trialId: C,
            priceOptions: q,
            paymentSource: eE,
            isPrepaidPaymentPastDue: eC,
            openInvoiceId: O,
            premiumSubscription: t,
            onNext: eD,
            metadata: M,
            sku: eN,
            purchaseType: Z,
            referralCode: X,
            loadId: W.loadId,
            giftInfoOptions: eh,
            invoicePreview: B,
            order: z,
        });
    }
    let ew = null != O || (Z === R.VVm.ONE_TIME && !er),
        eM = r.useCallback(() => {
            null != s.current && (s.current.scrollIntoView({ behavior: "smooth" }), f());
        }, [s, f]);
    return (0, i.jsx)(j, {
        resolveTenantReviewButtonProps: F,
        showBackButton: P && !ew,
        onBackClick: n,
        handleShowLegalFlash: eM,
        disablePurchase: x,
        isSubmitting: eA,
        makePurchase: eL,
        needsPaymentSource: null == eE && !ey,
        onPaymentSourceAdd: k,
    });
}
