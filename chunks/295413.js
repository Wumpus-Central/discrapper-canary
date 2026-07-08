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
    S = n(344159),
    f = n(174459),
    y = n(45938),
    P = n(937008),
    T = n(158032),
    _ = n(830382),
    I = n(243217),
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
        onNext: S,
        metadata: f,
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
                (e = await (0, _.XU)(y.applicationId, y.id, {
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
                e = await (0, _.XU)(x.tv, d.skuId, {
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
                    metadata: f,
                    referralCode: N,
                    loadId: R,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: L } = l(e);
        if (L) return;
        "subscription" in e
            ? (n = null != e.subscription ? I.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (j =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            S(n, i, j);
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
    w = n(31823),
    U = n(666646),
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
              : { ...u, tooltipText: k.intl.string(k.t.XdvBLS), onClick: v.tEg, dataTestId: "submitButton" };
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
                { checkoutPaymentSources: u } = (0, D.t)(),
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
                A = (0, U.mx)(),
                { application: S } = (0, w.V)(),
                f = (0, O.bG)([j.A], () => j.A.getFetchState()),
                y = (0, L.n)(S, v.gfo.EMBEDDED) && f === j.$.LOADING,
                P = l ?? !1,
                T = (null != A || r) ?? !1,
                _ = i.useMemo(
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
                I = i.useMemo(
                    () => _.resolveReviewButtonProps({ loading: P, disabled: T, isApplicationDevShelfLoading: y }),
                    [P, T, y, _],
                );
            return (
                i.useEffect(() => {
                    m(I.text);
                }, [I.text, m]),
                I
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
            analyticsLocation: _,
            openInvoiceId: I,
            metadata: g,
            backButtonEligible: x,
            disablePurchase: O,
            onPaymentSourceAdd: j,
            handleStepChange: L,
            postPurchaseStep: D = R.pn.CONFIRM,
            resolveTenantReviewButtonProps: w,
        } = e,
        {
            activeSubscription: U,
            selectedSkuId: k,
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
        eC = (0, M.W)(X, W),
        { giftCardBalance: eh, giftCardCurrency: eE } = (0, d.h)(),
        [eA, eS] = i.useState(!1),
        [ef, ey] = i.useState(!1),
        { hasEntitlements: eP } = (0, S.X)(ep, en),
        eT = null;
    Z === v.VVm.ONE_TIME &&
        (a()(null != k, "SKU must be selected for one-time purchases"),
        (eT = et[k] ?? null),
        a()(null != eT, "SKU must exist and be fetched."));
    let e_ = i.useCallback(() => {
            Y(b.h.PURCHASING),
                F(!0),
                eS(!0),
                s.h.wait(o.ET),
                V(null),
                f.default.track(v.HAw.PAYMENT_FLOW_COMPLETED, {
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
        eI = i.useCallback(
            (e) => {
                Y(b.h.FAIL),
                    V(e),
                    f.default.track(v.HAw.PAYMENT_FLOW_FAILED, {
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
                    ? ((0, c.fE)(), Y(b.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (ey(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (Y(b.h.COMPLETED), { shouldReturnEarly: !1 }),
            [Y],
        ),
        ev = i.useCallback(() => {
            ef || eS(!1);
        }, [ef]),
        ex = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                J(l), null != t && $(t), null != n && Q(n), L(D, { fulfillment: { subscription: l, entitlements: t } });
            },
            [L, D, J, $, Q],
        );
    async function eN() {
        await N({
            onPurchaseAttempt: e_,
            onPurchaseError: eI,
            onPurchaseComplete: eg,
            onPurchaseFinalize: ev,
            hasRedirectURL: ef,
            isGift: en,
            analyticsLocation: _,
            analyticsLocations: em,
            subscriptionPlan: ee,
            planGroup: T,
            trialId: h,
            priceOptions: K,
            paymentSource: eC,
            openInvoiceId: I,
            premiumSubscription: U ?? null,
            onNext: ex,
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
    let eR = null != I || (Z === v.VVm.ONE_TIME && !en);
    return (0, l.jsx)(B, {
        resolveTenantReviewButtonProps: w,
        showBackButton: x && !eR,
        onBackClick: t,
        disablePurchase: O,
        isSubmitting: eA,
        makePurchase: eN,
        needsPaymentSource: null == eC && !eP,
        onPaymentSourceAdd: j,
    });
}
