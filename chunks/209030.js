n.d(t, { A: () => ee, L: () => Q });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(997101),
    o = n(17928),
    u = n(661531),
    c = n(289873),
    d = n(885574),
    p = n(834730),
    m = n(683071),
    h = n(534514),
    C = n(821891),
    A = n(953689),
    E = n(546605),
    y = n(531260),
    P = n(364995),
    S = n(284009),
    _ = n.n(S),
    T = n(937008),
    f = n(49960),
    x = n(566980),
    N = n(800471),
    I = n(543767),
    g = n(299301),
    v = n(97352),
    M = n(94420),
    j = n(666646),
    b = n(699595),
    R = n(788868),
    L = n(349786),
    O = n(71867),
    D = n(222707),
    w = n(421094),
    U = n(216641),
    k = n(615405),
    Y = n(67480),
    G = n(45938),
    F = n(428262),
    B = n(242874),
    W = n(735164),
    V = n(778307),
    H = n(75825),
    K = n(218075),
    Z = n(337092),
    q = n(344159),
    z = n(285719),
    $ = n(818348),
    J = n(375708),
    X = n(814304);
let Q = (e) => {
    let { selectedPlanId: t, paymentSources: n, priceOptions: l, trialId: i, metadata: r, isTrial: s = !1 } = e,
        u = (0, M.t4)((e) => e.selectedSkuId),
        {
            isEmbeddedIAP: c,
            activeSubscription: d,
            defaultPlanId: p,
            isPremium: m,
            startedPaymentFlowWithPaymentSourcesRef: h,
            inReverseTrial: C,
            hasPaymentSources: A,
            isPremiumGroupPurchase: S,
            isEligibleForDiscount: L,
        } = (0, f.P5)(),
        { checkoutPaymentSources: O } = (0, P.t)(),
        { isGift: D, giftRecipient: w, selectedGiftStyle: k } = (0, T.Pv)(),
        B = u ?? "",
        W = (0, o.bG)([Y.A], () => Y.A.get(B), [B]),
        V = W?.eligiblePaymentGateways,
        H = (0, N.vT)({ isTrial: s, isGift: D, selectedSkuId: u, startedPaymentFlowWithPaymentSources: h.current }),
        {
            subscriptionPlan: K,
            purchaseDisabled: Z,
            checkoutInvoicePreview: z,
            invoiceSummaryTypeWithPreview: $,
            proratedInvoicePreview: X,
            renewalInvoicePreview: Q,
            discountInvoicePreview: ee,
            subscriptionPeriodEnd: et,
        } = ((e) => {
            let {
                    selectedPlanId: t,
                    priceOptions: n,
                    trialId: l,
                    metadata: i,
                    isInOneStepSubscriptionCheckout: r = !1,
                    isTrial: s = !1,
                } = e,
                { selectedSkuId: u, contextMetadata: c } = (0, M.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    contextMetadata: e.contextMetadata,
                })),
                { activeSubscription: d, setPurchasePreviewError: p, isEligibleForDiscount: m } = (0, f.P5)(),
                { isGift: h } = (0, T.Pv)(),
                {
                    subscriptionPlan: C,
                    purchaseDisabled: A,
                    newItems: E,
                } = ((e) => {
                    let { selectedPlanId: t } = e,
                        n = (0, M.t4)((e) => e.purchaseState),
                        l = (0, o.bG)([v.A], () => v.A.get(t));
                    _()(null != l, "Missing plan");
                    let a = [{ planId: l.id, quantity: 1 }],
                        i = n === x.h.PURCHASING || n === x.h.COMPLETED;
                    return { subscriptionPlan: l, purchaseState: n, purchaseDisabled: i, newItems: a };
                })({ selectedPlanId: t }),
                [y, P] = (0, I.YV)({
                    items: E,
                    renewal: !1,
                    preventFetch: h || A,
                    applyEntitlements: !0,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    trialId: l,
                    metadata: i,
                }),
                S = a.useMemo(() => {
                    if (s && null != y) return y;
                }, [s, y]),
                [L, O] = (0, I.YV)({
                    subscriptionId: d?.id,
                    items: E,
                    renewal: !0,
                    preventFetch: h || A,
                    trialId: l,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    metadata: i,
                }),
                [D, w] = (0, I.QQ)({
                    paymentSourceId: n.paymentSourceId,
                    skuId: u,
                    subscriptionPlanId: t,
                    currency: n.currency,
                    preventFetch: !h || A,
                    loadId: c.loadId,
                }),
                { checkoutInvoicePreview: U, checkoutInvoiceError: k } = a.useMemo(
                    () =>
                        h
                            ? { checkoutInvoicePreview: D, checkoutInvoiceError: w }
                            : { checkoutInvoicePreview: y, checkoutInvoiceError: P },
                    [h, D, y, w, P],
                ),
                { primaryInvoiceError: Y } = (0, j.OQ)({
                    checkoutInvoicePreview: U,
                    checkoutInvoiceError: k,
                    renewalInvoicePreview: L,
                    renewalInvoiceError: O,
                }),
                [G, F] = (0, I.YV)({
                    items: [{ planId: R.gD.PREMIUM_MONTH_TIER_2, quantity: 1 }],
                    renewal: !1,
                    preventFetch: !m,
                    trialId: l,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    metadata: i,
                });
            (0, b.c)(G, m);
            let B = a.useMemo(() => Y ?? F, [Y, F]);
            a.useEffect(() => {
                p(B);
            }, [B, p]);
            let W = a.useMemo(() => (null != y ? y.subscriptionPeriodEnd : void 0), [y]),
                V = a.useMemo(() => (0, N.UB)(r, y, C), [r, y, C]),
                H = a.useMemo(
                    () =>
                        (0, g.yf)({
                            error: B,
                            isGift: h,
                            oneTimePurchaseNitroGiftInvoicePreview: D,
                            trialInvoicePreview: S,
                            proratedInvoicePreview: y,
                            renewalInvoicePreview: L,
                            planSwitchLoading: V,
                        }),
                    [B, h, D, S, y, L, V],
                );
            return {
                checkoutInvoicePreview: U,
                invoiceSummaryTypeWithPreview: H,
                discountInvoicePreview: G,
                oneTimePurchaseNitroGiftInvoicePreview: D,
                trialInvoicePreview: S,
                proratedInvoicePreview: y,
                renewalInvoicePreview: L,
                purchaseDisabled: A,
                subscriptionPlan: C,
                invoiceError: B,
                subscriptionPeriodEnd: W,
            };
        })({
            selectedPlanId: t,
            priceOptions: l,
            trialId: i,
            metadata: r,
            isInOneStepSubscriptionCheckout: H,
            isTrial: s,
        }),
        en = D && (0, G.Ik)(w),
        el = l.paymentSourceId,
        ea = (0, U.g)(n, el),
        ei = (0, E.vg)("PremiumSubscriptionReview") ? (O?.find((e) => e.id === el)?.relocationCountry ?? null) : null,
        { hasEntitlements: er, entitlements: es } = (0, q.X)(K.id, D),
        eo = (0, F.J$)(l.paymentSourceId),
        eu = (0, y.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        ec = !H && (eu.isFractionalPremiumActive || C) && R.JM.has(t),
        ed = a.useMemo(() => (0, F.Tm)({ skuId: u, isPremium: m, defaultPlanId: p }), [u, p, m]),
        ep = a.useMemo(
            () => (er && null == el ? J.intl.format(J.t["2wPRSF"], { months: es.length }) : null),
            [er, el, es],
        );
    return {
        disabled: Z,
        activeSubscription: d,
        subscriptionPeriodEnd: et,
        plan: K,
        premiumPlanOptions: ed,
        checkoutInvoicePreview: z,
        invoiceSummaryTypeWithPreview: $,
        discountInvoicePreview: ee,
        renewalInvoicePreview: Q,
        proratedInvoicePreview: X,
        isGift: D,
        isEmbeddedIAP: c,
        paymentSourceType: ea,
        giftRecipient: w,
        selectedGiftStyle: k,
        isInOneStepSubscriptionCheckout: H,
        shouldAllowPlanSelect: H && !S,
        hasPaymentSources: A,
        paymentSourceId: el,
        eligiblePaymentGateways: V,
        inReverseTrial: C,
        fractionalPremiumInfo: eu,
        showFractionalPremiumBannerInInvoiceSummary: ec,
        isPrepaid: eo,
        isCustomGift: en,
        isPremium: m,
        isPremiumGroupPurchase: S,
        isEligibleForDiscount: L,
        hasEntitlements: er,
        entitlements: es,
        paymentSourceOptionalWarningCopy: ep,
        selectedSourceRelocationCountry: ei,
    };
};
function ee(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            paymentSources: i,
            priceOptions: o,
            handlePaymentSourceAdd: E,
            setHasAcceptedTerms: y,
            legalTermsNodeRef: P,
            hasLegalTermsFlash: S,
            trialId: _,
            trialFooterMessageOverride: T,
            reviewWarningMessage: f,
            metadata: x,
            hideSubscriptionDetails: N,
            referralTrialOfferId: I,
            isTrial: v = !1,
            isDiscount: M = !1,
            handleClose: j,
        } = e,
        {
            disabled: b,
            isEmbeddedIAP: R,
            paymentSourceType: U,
            giftRecipient: Y,
            selectedGiftStyle: G,
            subscriptionPeriodEnd: q,
            premiumPlanOptions: ee,
            shouldAllowPlanSelect: et,
            hasPaymentSources: en,
            paymentSourceId: el,
            eligiblePaymentGateways: ea,
            inReverseTrial: ei,
            fractionalPremiumInfo: er,
            plan: es,
            isGift: eo,
            invoiceSummaryTypeWithPreview: eu,
            checkoutInvoicePreview: ec,
            renewalInvoicePreview: ed,
            showFractionalPremiumBannerInInvoiceSummary: ep,
            isPrepaid: em,
            isCustomGift: eh,
            isPremium: eC,
            isPremiumGroupPurchase: eA,
            hasEntitlements: eE,
            paymentSourceOptionalWarningCopy: ey,
            selectedSourceRelocationCountry: eP,
        } = Q({ selectedPlanId: t, paymentSources: i, priceOptions: o, trialId: _, metadata: x, isTrial: v }),
        eS = a.useMemo(() => (0, F.l6)(o, ec?.checkoutContext?.available_plans), [o, ec]);
    if (null != eu && eu.type === g.N$.LOADING)
        return (0, l.jsx)("div", { className: X.zp, children: (0, l.jsx)(c.y, {}) });
    let e_ = (0, l.jsx)(g.eb, {
            invoiceSummaryTypeWithPreview: eu,
            priceOptions: o,
            trialFooterMessageOverride: T,
            hideSubscriptionDetails: N,
            referralTrialOfferId: I,
            isTrial: v,
            inReverseTrial: ei,
            fractionalPremiumInfo: er,
            plan: es,
            showFractionalPremiumBanner: ep,
            isPrepaid: em,
            isCustomGift: eh,
            enablePremiumBrandRefresh: eC,
        }),
        eT = s.M.EEA_COUNTRIES.has(k.A.ipCountryCodeWithFallback),
        ef = J.intl.formatToPlainString(J.t["sBpy9/"], { planName: es.name });
    eo && !eh
        ? (ef = J.intl.string(J.t.J5a0eb))
        : eo && eh
          ? (ef = "")
          : (0, F.ys)(es.id) && (ef = F.Ay.getBillingReviewSubheader(null, es));
    let ex = null != ea && ea.length > 0 && (null == el || null === U) && en ? K.fU.SELECT_PAYMENT_METHOD : void 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.k, { location: "PremiumSubscriptionReview", paymentSourceId: el }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(K.je, { paymentRestrictionBannerType: ex }),
                    null != f &&
                        (0, l.jsxs)("div", {
                            className: X.Je,
                            children: [
                                (0, l.jsx)(d.m, {
                                    size: "custom",
                                    color: u.A.unsafe_rawColors.YELLOW_300.css,
                                    width: 20,
                                    height: 20,
                                }),
                                (0, l.jsx)(p.E, { className: X.CJ, variant: "text-sm/normal", children: f }),
                            ],
                        }),
                    eA &&
                        (0, l.jsx)("div", {
                            className: X.Ni,
                            children: (0, l.jsx)(m.w, {
                                type: "info",
                                children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, D.Nn)() }),
                            }),
                        }),
                    et &&
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(O.P, { planSkuId: es?.skuId, referralTrialOfferId: I }),
                                (0, l.jsx)(Z.$p, {
                                    disabled: b,
                                    planOptions: ee,
                                    selectedPlanId: t,
                                    planGroup: n,
                                    subscriptionPeriodEnd: q,
                                    showTotal: !1,
                                    priceOptions: eS,
                                    handleClose: j,
                                }),
                                (0, l.jsx)(W.pK, {}),
                            ],
                        }),
                    !v &&
                        "" !== ef &&
                        (0, l.jsx)(h.D, { variant: "heading-md/semibold", className: X.wx, children: ef }),
                    eh &&
                        null != G &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(H.A, {
                                    defaultAnimationState: B.oA.LOOP,
                                    giftStyle: G,
                                    shouldAnimate: !0,
                                    className: X.Os,
                                }),
                                (0, l.jsx)(z.Z, { giftRecipient: Y }),
                            ],
                        }),
                    e_,
                    (0, l.jsxs)("div", {
                        className: X.LC,
                        children: [
                            (0, l.jsx)(w.K, {
                                label: J.intl.string(v ? J.t["YH7B+D"] : J.t["mmDvV+"]),
                                handlePaymentSourceAdd: E,
                                isTrial: v,
                                isDiscount: M,
                                disabled: b,
                                hasEntitlements: eE,
                                eligiblePaymentGateways: ea,
                                shouldUseUnifiedCheckoutUI: !1,
                                paymentSourceDropdownClassName: r()({ [X.E4]: eC }),
                                paymentSourceDropdownPrependOption:
                                    eE && !v ? { label: J.intl.string(J.t.IGU7El), value: null } : null,
                            }),
                            null != ey ? (0, l.jsx)("div", { className: X.QN, children: ey }) : null,
                        ],
                    }),
                    (0, l.jsx)(V.A, {
                        isActive: S,
                        ref: P,
                        children: (0, l.jsx)(A.A, {
                            onChange: y,
                            forceShow: !0,
                            finePrint:
                                T ??
                                (0, l.jsx)(C.A, {
                                    hide: v || M,
                                    subscriptionPlan: es,
                                    renewalInvoice: ed,
                                    isGift: eo,
                                    paymentSourceType: U,
                                    isEmbeddedIAP: R,
                                    basePrice: (0, F.y8)(es.id, !1, eo, eS),
                                    willRelocateStoreCountry: null != eP,
                                }),
                            showPricingLink: es.currency !== $.Yr.USD,
                            showWithdrawalWaiver: eT,
                            disabled: b,
                            isTrial: v && null == T,
                            isDiscount: M,
                            subscriptionPlan: es,
                            isGift: eo,
                        }),
                    }),
                ],
            }),
        ],
    });
}
