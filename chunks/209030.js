n.d(t, { A: () => et, L: () => ee });
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
    y = n(546605),
    E = n(531260),
    P = n(364995),
    S = n(426398),
    _ = n(284009),
    T = n.n(_),
    f = n(937008),
    I = n(834252),
    N = n(566980),
    x = n(800471),
    g = n(543767),
    v = n(299301),
    M = n(97352),
    b = n(94420),
    j = n(666646),
    R = n(699595),
    L = n(788868),
    O = n(349786),
    D = n(71867),
    w = n(222707),
    U = n(421094),
    k = n(216641),
    Y = n(615405),
    G = n(67480),
    F = n(45938),
    B = n(428262),
    W = n(242874),
    V = n(735164),
    H = n(778307),
    K = n(75825),
    Z = n(218075),
    q = n(337092),
    z = n(344159),
    $ = n(285719),
    J = n(818348),
    X = n(375708),
    Q = n(814304);
let ee = (e) => {
    let { selectedPlanId: t, paymentSources: n, priceOptions: l, trialId: i, metadata: r, isTrial: s = !1 } = e,
        u = (0, b.t4)((e) => e.selectedSkuId),
        { hasPaymentSources: c } = (0, S.jm)(),
        {
            isEmbeddedIAP: d,
            activeSubscription: p,
            defaultPlanId: m,
            isPremium: h,
            startedPaymentFlowWithPaymentSourcesRef: C,
            inReverseTrial: A,
            isPremiumGroupPurchase: _,
            isEligibleForDiscount: O,
        } = (0, I.P5)(),
        { checkoutPaymentSources: D } = (0, P.t)(),
        { isGift: w, giftRecipient: U, selectedGiftStyle: Y } = (0, f.Pv)(),
        W = u ?? "",
        V = (0, o.bG)([G.A], () => G.A.get(W), [W]),
        H = V?.eligiblePaymentGateways,
        K = (0, x.vT)({ isTrial: s, isGift: w, selectedSkuId: u, startedPaymentFlowWithPaymentSources: C.current }),
        {
            subscriptionPlan: Z,
            purchaseDisabled: q,
            checkoutInvoicePreview: $,
            invoiceSummaryTypeWithPreview: J,
            proratedInvoicePreview: Q,
            renewalInvoicePreview: ee,
            discountInvoicePreview: et,
            subscriptionPeriodEnd: en,
        } = ((e) => {
            let {
                    selectedPlanId: t,
                    priceOptions: n,
                    trialId: l,
                    metadata: i,
                    isInOneStepSubscriptionCheckout: r = !1,
                    isTrial: s = !1,
                } = e,
                { selectedSkuId: u, contextMetadata: c } = (0, b.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    contextMetadata: e.contextMetadata,
                })),
                { activeSubscription: d, setPurchasePreviewError: p, isEligibleForDiscount: m } = (0, I.P5)(),
                { isGift: h } = (0, f.Pv)(),
                {
                    subscriptionPlan: C,
                    purchaseDisabled: A,
                    newItems: y,
                } = ((e) => {
                    let { selectedPlanId: t } = e,
                        n = (0, b.t4)((e) => e.purchaseState),
                        l = (0, o.bG)([M.A], () => M.A.get(t));
                    T()(null != l, "Missing plan");
                    let a = [{ planId: l.id, quantity: 1 }],
                        i = n === N.h.PURCHASING || n === N.h.COMPLETED;
                    return { subscriptionPlan: l, purchaseState: n, purchaseDisabled: i, newItems: a };
                })({ selectedPlanId: t }),
                [E, P] = (0, g.YV)({
                    items: y,
                    renewal: !1,
                    preventFetch: h || A,
                    applyEntitlements: !0,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    trialId: l,
                    metadata: i,
                }),
                S = a.useMemo(() => {
                    if (s && null != E) return E;
                }, [s, E]),
                [_, O] = (0, g.YV)({
                    subscriptionId: d?.id,
                    items: y,
                    renewal: !0,
                    preventFetch: h || A,
                    trialId: l,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    metadata: i,
                }),
                [D, w] = (0, g.QQ)({
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
                            : { checkoutInvoicePreview: E, checkoutInvoiceError: P },
                    [h, D, E, w, P],
                ),
                { primaryInvoiceError: Y } = (0, j.OQ)({
                    checkoutInvoicePreview: U,
                    checkoutInvoiceError: k,
                    renewalInvoicePreview: _,
                    renewalInvoiceError: O,
                }),
                [G, F] = (0, g.YV)({
                    items: [{ planId: L.gD.PREMIUM_MONTH_TIER_2, quantity: 1 }],
                    renewal: !1,
                    preventFetch: !m,
                    trialId: l,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    metadata: i,
                });
            (0, R.c)(G, m);
            let B = a.useMemo(() => Y ?? F, [Y, F]);
            a.useEffect(() => {
                p(B);
            }, [B, p]);
            let W = a.useMemo(() => (null != E ? E.subscriptionPeriodEnd : void 0), [E]),
                V = a.useMemo(() => (0, x.UB)(r, E, C), [r, E, C]),
                H = a.useMemo(
                    () =>
                        (0, v.yf)({
                            error: B,
                            isGift: h,
                            oneTimePurchaseNitroGiftInvoicePreview: D,
                            trialInvoicePreview: S,
                            proratedInvoicePreview: E,
                            renewalInvoicePreview: _,
                            planSwitchLoading: V,
                        }),
                    [B, h, D, S, E, _, V],
                );
            return {
                checkoutInvoicePreview: U,
                invoiceSummaryTypeWithPreview: H,
                discountInvoicePreview: G,
                oneTimePurchaseNitroGiftInvoicePreview: D,
                trialInvoicePreview: S,
                proratedInvoicePreview: E,
                renewalInvoicePreview: _,
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
            isInOneStepSubscriptionCheckout: K,
            isTrial: s,
        }),
        el = w && (0, F.Ik)(U),
        ea = l.paymentSourceId,
        ei = (0, k.g)(n, ea),
        er = (0, y.vg)("PremiumSubscriptionReview") ? (D?.find((e) => e.id === ea)?.relocationCountry ?? null) : null,
        { hasEntitlements: es, entitlements: eo } = (0, z.X)(Z.id, w),
        eu = (0, B.J$)(l.paymentSourceId),
        ec = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        ed = !K && (ec.isFractionalPremiumActive || A) && L.JM.has(t),
        ep = a.useMemo(() => (0, B.Tm)({ skuId: u, isPremium: h, defaultPlanId: m }), [u, m, h]),
        em = a.useMemo(
            () => (es && null == ea ? X.intl.format(X.t["2wPRSF"], { months: eo.length }) : null),
            [es, ea, eo],
        );
    return {
        disabled: q,
        activeSubscription: p,
        subscriptionPeriodEnd: en,
        plan: Z,
        premiumPlanOptions: ep,
        checkoutInvoicePreview: $,
        invoiceSummaryTypeWithPreview: J,
        discountInvoicePreview: et,
        renewalInvoicePreview: ee,
        proratedInvoicePreview: Q,
        isGift: w,
        isEmbeddedIAP: d,
        paymentSourceType: ei,
        giftRecipient: U,
        selectedGiftStyle: Y,
        isInOneStepSubscriptionCheckout: K,
        shouldAllowPlanSelect: K && !_,
        hasPaymentSources: c,
        paymentSourceId: ea,
        eligiblePaymentGateways: H,
        inReverseTrial: A,
        fractionalPremiumInfo: ec,
        showFractionalPremiumBannerInInvoiceSummary: ed,
        isPrepaid: eu,
        isCustomGift: el,
        isPremium: h,
        isPremiumGroupPurchase: _,
        isEligibleForDiscount: O,
        hasEntitlements: es,
        entitlements: eo,
        paymentSourceOptionalWarningCopy: em,
        selectedSourceRelocationCountry: er,
    };
};
function et(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            paymentSources: i,
            priceOptions: o,
            handlePaymentSourceAdd: y,
            setHasAcceptedTerms: E,
            legalTermsNodeRef: P,
            hasLegalTermsFlash: S,
            trialId: _,
            trialFooterMessageOverride: T,
            reviewWarningMessage: f,
            metadata: I,
            hideSubscriptionDetails: N,
            referralTrialOfferId: x,
            isTrial: g = !1,
            isDiscount: M = !1,
            handleClose: b,
        } = e,
        {
            disabled: j,
            isEmbeddedIAP: R,
            paymentSourceType: L,
            giftRecipient: k,
            selectedGiftStyle: G,
            subscriptionPeriodEnd: F,
            premiumPlanOptions: z,
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
            hasEntitlements: ey,
            paymentSourceOptionalWarningCopy: eE,
            selectedSourceRelocationCountry: eP,
        } = ee({ selectedPlanId: t, paymentSources: i, priceOptions: o, trialId: _, metadata: I, isTrial: g }),
        eS = a.useMemo(() => (0, B.l6)(o, ec?.checkoutContext?.available_plans), [o, ec]);
    if (null != eu && eu.type === v.N$.LOADING)
        return (0, l.jsx)("div", { className: Q.zp, children: (0, l.jsx)(c.y, {}) });
    let e_ = (0, l.jsx)(v.eb, {
            invoiceSummaryTypeWithPreview: eu,
            priceOptions: o,
            trialFooterMessageOverride: T,
            hideSubscriptionDetails: N,
            referralTrialOfferId: x,
            isTrial: g,
            inReverseTrial: ei,
            fractionalPremiumInfo: er,
            plan: es,
            showFractionalPremiumBanner: ep,
            isPrepaid: em,
            isCustomGift: eh,
            enablePremiumBrandRefresh: eC,
        }),
        eT = s.M.EEA_COUNTRIES.has(Y.A.ipCountryCodeWithFallback),
        ef = X.intl.formatToPlainString(X.t["sBpy9/"], { planName: es.name });
    eo && !eh
        ? (ef = X.intl.string(X.t.J5a0eb))
        : eo && eh
          ? (ef = "")
          : (0, B.ys)(es.id) && (ef = B.Ay.getBillingReviewSubheader(null, es));
    let eI = null != ea && ea.length > 0 && (null == el || null === L) && en ? Z.fU.SELECT_PAYMENT_METHOD : void 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(O.k, { location: "PremiumSubscriptionReview", paymentSourceId: el }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(Z.je, { paymentRestrictionBannerType: eI }),
                    null != f &&
                        (0, l.jsxs)("div", {
                            className: Q.Je,
                            children: [
                                (0, l.jsx)(d.m, {
                                    size: "custom",
                                    color: u.A.unsafe_rawColors.YELLOW_300.css,
                                    width: 20,
                                    height: 20,
                                }),
                                (0, l.jsx)(p.E, { className: Q.CJ, variant: "text-sm/normal", children: f }),
                            ],
                        }),
                    eA &&
                        (0, l.jsx)("div", {
                            className: Q.Ni,
                            children: (0, l.jsx)(m.w, {
                                type: "info",
                                children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, w.Nn)() }),
                            }),
                        }),
                    et &&
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(D.P, { planSkuId: es?.skuId, referralTrialOfferId: x }),
                                (0, l.jsx)(q.$p, {
                                    disabled: j,
                                    planOptions: z,
                                    selectedPlanId: t,
                                    planGroup: n,
                                    subscriptionPeriodEnd: F,
                                    showTotal: !1,
                                    priceOptions: eS,
                                    handleClose: b,
                                }),
                                (0, l.jsx)(V.pK, {}),
                            ],
                        }),
                    !g &&
                        "" !== ef &&
                        (0, l.jsx)(h.D, { variant: "heading-md/semibold", className: Q.wx, children: ef }),
                    eh &&
                        null != G &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(K.A, {
                                    defaultAnimationState: W.oA.LOOP,
                                    giftStyle: G,
                                    shouldAnimate: !0,
                                    className: Q.Os,
                                }),
                                (0, l.jsx)($.Z, { giftRecipient: k }),
                            ],
                        }),
                    e_,
                    (0, l.jsxs)("div", {
                        className: Q.LC,
                        children: [
                            (0, l.jsx)(U.K, {
                                label: X.intl.string(g ? X.t["YH7B+D"] : X.t["mmDvV+"]),
                                handlePaymentSourceAdd: y,
                                isTrial: g,
                                isDiscount: M,
                                disabled: j,
                                hasEntitlements: ey,
                                eligiblePaymentGateways: ea,
                                shouldUseUnifiedCheckoutUI: !1,
                                paymentSourceDropdownClassName: r()({ [Q.E4]: eC }),
                                paymentSourceDropdownPrependOption:
                                    ey && !g ? { label: X.intl.string(X.t.IGU7El), value: null } : null,
                            }),
                            null != eE ? (0, l.jsx)("div", { className: Q.QN, children: eE }) : null,
                        ],
                    }),
                    (0, l.jsx)(H.A, {
                        isActive: S,
                        ref: P,
                        children: (0, l.jsx)(A.A, {
                            onChange: E,
                            forceShow: !0,
                            finePrint:
                                T ??
                                (0, l.jsx)(C.A, {
                                    hide: g || M,
                                    subscriptionPlan: es,
                                    renewalInvoice: ed,
                                    isGift: eo,
                                    paymentSourceType: L,
                                    isEmbeddedIAP: R,
                                    basePrice: (0, B.y8)(es.id, !1, eo, eS),
                                    willRelocateStoreCountry: null != eP,
                                }),
                            showPricingLink: es.currency !== J.Yr.USD,
                            showWithdrawalWaiver: eT,
                            disabled: j,
                            isTrial: g && null == T,
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
