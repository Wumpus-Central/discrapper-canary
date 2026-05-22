n.d(t, { A: () => en, L: () => et });
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
    f = n(284009),
    _ = n.n(f),
    T = n(937008),
    I = n(834252),
    x = n(566980),
    N = n(800471),
    g = n(543767),
    v = n(410516),
    M = n(299301),
    b = n(97352),
    j = n(671744),
    R = n(666646),
    L = n(699595),
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
    q = n(361597),
    z = n(344159),
    $ = n(285719),
    J = n(788868),
    X = n(818348),
    Q = n(375708),
    ee = n(814304);
let et = (e) => {
    let { selectedPlanId: t, paymentSources: n, trialId: l, metadata: i, isTrial: r = !1 } = e,
        s = (0, j.t4)((e) => e.selectedSkuId),
        { hasPaymentSources: u } = (0, S.jm)(),
        {
            priceOptions: c,
            isEmbeddedIAP: d,
            activeSubscription: p,
            defaultPlanId: m,
            isPremium: h,
            startedPaymentFlowWithPaymentSourcesRef: C,
            inReverseTrial: A,
            isPremiumGroupPurchase: f,
            isEligibleForDiscount: O,
        } = (0, I.P5)(),
        { checkoutPaymentSources: D } = (0, P.t)(),
        { isGift: w, giftRecipient: U, selectedGiftStyle: Y } = (0, T.Pv)(),
        W = s ?? "",
        V = (0, o.bG)([G.A], () => G.A.get(W), [W]),
        H = V?.eligiblePaymentGateways,
        K = (0, N.vT)({ isTrial: r, isGift: w, selectedSkuId: s, startedPaymentFlowWithPaymentSources: C.current }),
        {
            subscriptionPlan: Z,
            purchaseDisabled: q,
            checkoutInvoicePreview: $,
            invoiceSummaryTypeWithPreview: X,
            proratedInvoicePreview: ee,
            renewalInvoicePreview: et,
            discountInvoicePreview: en,
            subscriptionPeriodEnd: el,
        } = ((e) => {
            let {
                    selectedPlanId: t,
                    priceOptions: n,
                    trialId: l,
                    metadata: i,
                    isInOneStepSubscriptionCheckout: r = !1,
                    isTrial: s = !1,
                } = e,
                { selectedSkuId: u, contextMetadata: c } = (0, j.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    contextMetadata: e.contextMetadata,
                })),
                {
                    activeSubscription: d,
                    setPurchasePreviewError: p,
                    isEligibleForDiscount: m,
                    discountOffer: h,
                } = (0, I.P5)(),
                C = (0, v.YJ)(h),
                { isGift: A } = (0, T.Pv)(),
                {
                    subscriptionPlan: y,
                    purchaseDisabled: E,
                    newItems: P,
                } = ((e) => {
                    let { selectedPlanId: t } = e,
                        n = (0, j.t4)((e) => e.purchaseState),
                        l = (0, o.bG)([b.A], () => b.A.get(t));
                    _()(null != l, "Missing plan");
                    let a = [{ planId: l.id, quantity: 1 }],
                        i = n === x.h.PURCHASING || n === x.h.COMPLETED;
                    return { subscriptionPlan: l, purchaseState: n, purchaseDisabled: i, newItems: a };
                })({ selectedPlanId: t }),
                [S, f] = (0, g.YV)({
                    items: P,
                    renewal: !1,
                    preventFetch: A || E,
                    applyEntitlements: !0,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    trialId: l,
                    metadata: i,
                }),
                O = a.useMemo(() => {
                    if (s && null != S) return S;
                }, [s, S]),
                [D, w] = (0, g.YV)({
                    subscriptionId: d?.id,
                    items: P,
                    renewal: !0,
                    preventFetch: A || E,
                    trialId: l,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    metadata: i,
                }),
                [U, k] = (0, g.QQ)({
                    paymentSourceId: n.paymentSourceId,
                    skuId: u,
                    subscriptionPlanId: t,
                    currency: n.currency,
                    preventFetch: !A || E,
                    loadId: c.loadId,
                }),
                { checkoutInvoicePreview: Y, checkoutInvoiceError: G } = a.useMemo(
                    () =>
                        A
                            ? { checkoutInvoicePreview: U, checkoutInvoiceError: k }
                            : { checkoutInvoicePreview: S, checkoutInvoiceError: f },
                    [A, U, S, k, f],
                ),
                { primaryInvoiceError: F } = (0, R.OQ)({
                    checkoutInvoicePreview: Y,
                    checkoutInvoiceError: G,
                    renewalInvoicePreview: D,
                    renewalInvoiceError: w,
                }),
                [B, W] = (0, g.YV)({
                    items: null != C ? [{ planId: C, quantity: 1 }] : [],
                    renewal: !1,
                    preventFetch: !m || null == C,
                    trialId: l,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    metadata: i,
                });
            (0, L.c)(B, m);
            let V = a.useMemo(() => F ?? W, [F, W]);
            a.useEffect(() => {
                p(V);
            }, [V, p]);
            let H = a.useMemo(() => (null != S ? S.subscriptionPeriodEnd : void 0), [S]),
                K = a.useMemo(() => (0, N.UB)(r, S, y), [r, S, y]),
                Z = a.useMemo(
                    () =>
                        (0, M.yf)({
                            error: V,
                            isGift: A,
                            oneTimePurchaseNitroGiftInvoicePreview: U,
                            trialInvoicePreview: O,
                            proratedInvoicePreview: S,
                            renewalInvoicePreview: D,
                            planSwitchLoading: K,
                        }),
                    [V, A, U, O, S, D, K],
                );
            return {
                checkoutInvoicePreview: Y,
                invoiceSummaryTypeWithPreview: Z,
                discountInvoicePreview: B,
                oneTimePurchaseNitroGiftInvoicePreview: U,
                trialInvoicePreview: O,
                proratedInvoicePreview: S,
                renewalInvoicePreview: D,
                purchaseDisabled: E,
                subscriptionPlan: y,
                invoiceError: V,
                subscriptionPeriodEnd: H,
            };
        })({
            selectedPlanId: t,
            priceOptions: c,
            trialId: l,
            metadata: i,
            isInOneStepSubscriptionCheckout: K,
            isTrial: r,
        }),
        ea = w && (0, F.Ik)(U),
        ei = c.paymentSourceId,
        er = (0, k.g)(n, ei),
        es = (0, y.vg)("PremiumSubscriptionReview") ? (D?.find((e) => e.id === ei)?.relocationCountry ?? null) : null,
        { hasEntitlements: eo, entitlements: eu } = (0, z.X)(Z.id, w),
        ec = (0, B.J$)(c.paymentSourceId),
        ed = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        ep = !K && (ed.isFractionalPremiumActive || A) && J.JM.has(t),
        em = a.useMemo(() => (0, B.Tm)({ skuId: s, isPremium: h, defaultPlanId: m }), [s, m, h]),
        eh = a.useMemo(
            () => (eo && null == ei ? Q.intl.format(Q.t["2wPRSF"], { months: eu.length }) : null),
            [eo, ei, eu],
        );
    return {
        disabled: q,
        activeSubscription: p,
        subscriptionPeriodEnd: el,
        plan: Z,
        premiumPlanOptions: em,
        checkoutInvoicePreview: $,
        invoiceSummaryTypeWithPreview: X,
        discountInvoicePreview: en,
        renewalInvoicePreview: et,
        proratedInvoicePreview: ee,
        isGift: w,
        isEmbeddedIAP: d,
        paymentSourceType: er,
        giftRecipient: U,
        selectedGiftStyle: Y,
        isInOneStepSubscriptionCheckout: K,
        shouldAllowPlanSelect: K && !f,
        hasPaymentSources: u,
        paymentSourceId: ei,
        eligiblePaymentGateways: H,
        inReverseTrial: A,
        fractionalPremiumInfo: ed,
        showFractionalPremiumBannerInInvoiceSummary: ep,
        isPrepaid: ec,
        isCustomGift: ea,
        isPremium: h,
        isPremiumGroupPurchase: f,
        isEligibleForDiscount: O,
        hasEntitlements: eo,
        entitlements: eu,
        paymentSourceOptionalWarningCopy: eh,
        selectedSourceRelocationCountry: es,
    };
};
function en(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            paymentSources: i,
            handlePaymentSourceAdd: o,
            setHasAcceptedTerms: y,
            legalTermsNodeRef: E,
            hasLegalTermsFlash: P,
            trialId: S,
            trialFooterMessageOverride: f,
            reviewWarningMessage: _,
            metadata: T,
            hideSubscriptionDetails: x,
            referralTrialOfferId: N,
            isTrial: g = !1,
            isDiscount: v = !1,
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
            shouldAllowPlanSelect: J,
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
        } = et({ selectedPlanId: t, paymentSources: i, trialId: S, metadata: T, isTrial: g }),
        { priceOptions: eS } = (0, I.P5)(),
        ef = a.useMemo(() => (0, B.l6)(eS, ec?.checkoutContext?.available_plans), [eS, ec]);
    if (null != eu && eu.type === M.N$.LOADING)
        return (0, l.jsx)("div", { className: ee.zp, children: (0, l.jsx)(c.y, {}) });
    let e_ = (0, l.jsx)(M.eb, {
            invoiceSummaryTypeWithPreview: eu,
            priceOptions: eS,
            trialFooterMessageOverride: f,
            hideSubscriptionDetails: x,
            referralTrialOfferId: N,
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
        eI = Q.intl.formatToPlainString(Q.t["sBpy9/"], { planName: es.name });
    eo && !eh
        ? (eI = Q.intl.string(Q.t.J5a0eb))
        : eo && eh
          ? (eI = "")
          : (0, B.ys)(es.id) && (eI = B.Ay.getBillingReviewSubheader(null, es));
    let ex = null != ea && ea.length > 0 && (null == el || null === L) && en ? Z.fU.SELECT_PAYMENT_METHOD : void 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(O.k, { location: "PremiumSubscriptionReview", paymentSourceId: el }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(Z.je, { paymentRestrictionBannerType: ex }),
                    null != _ &&
                        (0, l.jsxs)("div", {
                            className: ee.Je,
                            children: [
                                (0, l.jsx)(d.m, {
                                    size: "custom",
                                    color: u.A.unsafe_rawColors.YELLOW_300.css,
                                    width: 20,
                                    height: 20,
                                }),
                                (0, l.jsx)(p.E, { className: ee.CJ, variant: "text-sm/normal", children: _ }),
                            ],
                        }),
                    eA &&
                        (0, l.jsx)("div", {
                            className: ee.Ni,
                            children: (0, l.jsx)(m.w, {
                                type: "info",
                                children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, w.Nn)() }),
                            }),
                        }),
                    J &&
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(D.P, { planSkuId: es?.skuId, referralTrialOfferId: N }),
                                (0, l.jsx)(q.$p, {
                                    disabled: j,
                                    planOptions: z,
                                    selectedPlanId: t,
                                    planGroup: n,
                                    subscriptionPeriodEnd: F,
                                    showTotal: !1,
                                    priceOptions: ef,
                                    handleClose: b,
                                }),
                                (0, l.jsx)(V.pK, {}),
                            ],
                        }),
                    !g &&
                        "" !== eI &&
                        (0, l.jsx)(h.D, { variant: "heading-md/semibold", className: ee.wx, children: eI }),
                    eh &&
                        null != G &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(K.A, {
                                    defaultAnimationState: W.oA.LOOP,
                                    giftStyle: G,
                                    shouldAnimate: !0,
                                    className: ee.Os,
                                }),
                                (0, l.jsx)($.Z, { giftRecipient: k }),
                            ],
                        }),
                    e_,
                    (0, l.jsxs)("div", {
                        className: ee.LC,
                        children: [
                            (0, l.jsx)(U.K, {
                                label: Q.intl.string(g ? Q.t["YH7B+D"] : Q.t["mmDvV+"]),
                                handlePaymentSourceAdd: o,
                                isTrial: g,
                                isDiscount: v,
                                disabled: j,
                                hasEntitlements: ey,
                                eligiblePaymentGateways: ea,
                                shouldUseUnifiedCheckoutUI: !1,
                                paymentSourceDropdownClassName: r()({ [ee.E4]: eC }),
                                paymentSourceDropdownPrependOption:
                                    ey && !g ? { label: Q.intl.string(Q.t.IGU7El), value: null } : null,
                            }),
                            null != eE ? (0, l.jsx)("div", { className: ee.QN, children: eE }) : null,
                        ],
                    }),
                    (0, l.jsx)(H.A, {
                        isActive: P,
                        ref: E,
                        children: (0, l.jsx)(A.A, {
                            onChange: y,
                            forceShow: !0,
                            finePrint:
                                f ??
                                (0, l.jsx)(C.A, {
                                    hide: g || v,
                                    subscriptionPlan: es,
                                    renewalInvoice: ed,
                                    isGift: eo,
                                    paymentSourceType: L,
                                    isEmbeddedIAP: R,
                                    basePrice: (0, B.y8)(es.id, !1, eo, ef),
                                    willRelocateStoreCountry: null != eP,
                                }),
                            showPricingLink: es.currency !== X.Yr.USD,
                            showWithdrawalWaiver: eT,
                            disabled: j,
                            isTrial: g && null == f,
                            isDiscount: v,
                            subscriptionPlan: es,
                            isGift: eo,
                        }),
                    }),
                ],
            }),
        ],
    });
}
