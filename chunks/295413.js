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
    y = n(174459),
    S = n(45938),
    P = n(937008),
    T = n(158032),
    I = n(830382),
    _ = n(243217),
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
        priceOptions: C,
        paymentSource: h,
        openInvoiceId: E,
        premiumSubscription: A,
        onNext: f,
        metadata: y,
        sku: S,
        purchaseType: P,
        referralCode: N,
        loadId: b,
        giftInfoOptions: R,
        invoicePreview: M,
        quantity: O,
    } = e;
    try {
        let e, n, i, j;
        if ((t(), r)) return;
        if (P === x.VVm.ONE_TIME)
            a()(null != S, "SKU must exist and be fetched."),
                a()(null != M, "invoicePreview must exist."),
                (e = await (0, I.XU)(S.applicationId, S.id, {
                    expectedAmount: M.total,
                    expectedCurrency: M.currency,
                    isGift: s,
                    paymentSource: h,
                    loadId: b,
                    giftInfoOptions: R,
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
                e = await (0, I.XU)(v.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: h,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: b,
                    giftInfoOptions: R,
                    quantity: O,
                });
            } else if (null != h && null != A && A.status === x.Dmq.PAST_DUE && null != E) {
                let n = C.currency ?? M.currency;
                e = x.AD1.has(h.type)
                    ? await (0, c.LD)(A, E, h, n, b)
                    : await (0, c.nV)(A, { paymentSource: h, currency: n }, t, l, u, o, b);
            } else if (null != A) {
                let n = (0, g.Pg)(A, d.id, 1, new Set(p)),
                    i = { paymentSource: h, currency: C.currency ?? M.currency };
                A.status === x.Dmq.PAUSED && (i.status = x.Dmq.ACTIVE),
                    A.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(A, i, t, l, u, o, b));
            } else
                e = await (0, T.B1)({
                    planId: d.id,
                    currency: C.currency ?? M.currency,
                    paymentSource: h,
                    trialId: m,
                    metadata: y,
                    referralCode: N,
                    loadId: b,
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
var b = n(166532),
    R = n(566980),
    M = n(216641),
    O = n(17928),
    j = n(10716),
    L = n(20015),
    w = n(364995),
    D = n(31823),
    k = n(666646),
    U = n(375708),
    G = n(982772);
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
function B(e) {
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
        d = ((e) => {
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
                    purchaseType: C,
                } = (0, E.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                })),
                h = null != d && u.some((e) => e.id === d && null != e.relocationCountry),
                A = (0, k.mx)(),
                { application: f } = (0, D.V)(),
                y = (0, O.bG)([j.A], () => j.A.getFetchState()),
                S = (0, L.n)(f, x.gfo.EMBEDDED) && y === j.$.LOADING,
                P = l ?? !1,
                T = (null != A || r) ?? !1,
                I = i.useMemo(
                    () =>
                        new F(
                            {
                                purchaseType: C,
                                needsPaymentSource: n,
                                onPaymentSourceAdd: a,
                                onReviewButtonClick: t,
                                hasPaymentSources: o,
                                willRelocateStoreCountry: h,
                                paymentSourceId: d,
                                hasAcceptedTerms: c,
                            },
                            s,
                        ),
                    [C, n, a, t, o, h, d, c, s],
                ),
                _ = i.useMemo(
                    () => I.resolveReviewButtonProps({ loading: P, disabled: T, isApplicationDevShelfLoading: S }),
                    [P, T, S, I],
                );
            return (
                i.useEffect(() => {
                    m(_.text);
                }, [_.text, m]),
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
    return (0, l.jsx)(h.lo, { onBackClick: n ? c : void 0, primaryButtonProps: d });
}
function Y(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: h,
            planGroup: T = [],
            analyticsLocation: I,
            openInvoiceId: _,
            metadata: g,
            backButtonEligible: v,
            disablePurchase: O,
            onPaymentSourceAdd: j,
            handleStepChange: L,
            postPurchaseStep: w = b.pn.CONFIRM,
            resolveTenantReviewButtonProps: D,
        } = e,
        {
            activeSubscription: k,
            selectedSkuId: U,
            invoicePreview: G,
            setHasAcceptedTerms: F,
            setPurchaseState: Y,
            contextMetadata: H,
            paymentSourceId: W,
            setPurchaseError: V,
            priceOptions: K,
            purchaseType: Z,
            referralCode: q,
            quantity: z,
            setEntitlementsGranted: $,
            setAppliedUserDiscounts: Q,
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
        et = (0, C.gU)(),
        {
            isGift: en,
            selectedGiftStyle: el,
            customGiftMessage: ei,
            emojiConfetti: er,
            soundEffect: ea,
            giftRecipient: es,
            selectedGiftingPromotionReward: eo,
        } = (0, P.Pv)(),
        eu = (0, A.Mq)(ee),
        ec = (0, S.lo)(es),
        ed = {};
    (ed.gift_style = el),
        (ed.reward_sku_ids = eu && null != eo ? [eo] : []),
        ec === S.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != es, "Gift recipient must be set at purchase review step for these gift options."),
            (ed.recipient_id = es.id),
            (ed.custom_message = ei),
            (ed.emoji_id = er?.id),
            (ed.emoji_name = er?.id == null ? er?.surrogates : void 0),
            (ed.sound_id = ea?.soundId));
    let ep = ee?.id,
        { analyticsLocations: em } = (0, u.Ay)(),
        eC = (0, M.W)(X, W),
        { giftCardBalance: eh, giftCardCurrency: eE } = (0, d.h)(),
        [eA, ef] = i.useState(!1),
        [ey, eS] = i.useState(!1),
        { hasEntitlements: eP } = (0, f.X)(ep, en),
        eT = null;
    Z === x.VVm.ONE_TIME &&
        (a()(null != U, "SKU must be selected for one-time purchases"),
        (eT = et[U] ?? null),
        a()(null != eT, "SKU must exist and be fetched."));
    let eI = i.useCallback(() => {
            Y(R.h.PURCHASING),
                F(!0),
                ef(!0),
                s.h.wait(o.ET),
                V(null),
                y.default.track(x.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: G?.subtotal,
                    tax: G?.tax,
                    expected_amount: G?.total,
                    expected_currency: G?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: eh,
                    gift_card_currency: eE,
                });
        }, [Y, F, V, n, r, G, eh, eE]),
        e_ = i.useCallback(
            (e) => {
                Y(R.h.FAIL),
                    V(e),
                    y.default.track(x.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eC?.id,
                        payment_source_type: eC?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: eh,
                        gift_card_currency: eE,
                    });
            },
            [Y, V, n, r, eC, eh, eE],
        ),
        eg = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), Y(R.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eS(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (Y(R.h.COMPLETED), { shouldReturnEarly: !1 }),
            [Y],
        ),
        ex = i.useCallback(() => {
            ey || ef(!1);
        }, [ey]),
        ev = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                J(l), null != t && $(t), null != n && Q(n), L(w, { fulfillment: { subscription: l, entitlements: t } });
            },
            [L, w, J, $, Q],
        );
    async function eN() {
        await N({
            onPurchaseAttempt: eI,
            onPurchaseError: e_,
            onPurchaseComplete: eg,
            onPurchaseFinalize: ex,
            hasRedirectURL: ey,
            isGift: en,
            analyticsLocation: I,
            analyticsLocations: em,
            subscriptionPlan: ee,
            planGroup: T,
            trialId: h,
            priceOptions: K,
            paymentSource: eC,
            openInvoiceId: _,
            premiumSubscription: k ?? null,
            onNext: ev,
            metadata: g,
            sku: eT,
            purchaseType: Z,
            referralCode: q,
            loadId: H.loadId,
            giftInfoOptions: ed,
            invoicePreview: G,
            quantity: z,
        });
    }
    let eb = null != _ || (Z === x.VVm.ONE_TIME && !en);
    return (0, l.jsx)(B, {
        resolveTenantReviewButtonProps: D,
        showBackButton: v && !eb,
        onBackClick: t,
        disablePurchase: O,
        isSubmitting: eA,
        makePurchase: eN,
        needsPaymentSource: null == eC && !eP,
        onPaymentSourceAdd: j,
    });
}
