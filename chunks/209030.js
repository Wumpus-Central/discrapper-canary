n.d(t, { A: () => el, L: () => en });
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
    f = n.n(_),
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
    O = n(995835),
    D = n(349786),
    w = n(71867),
    U = n(222707),
    k = n(421094),
    Y = n(216641),
    G = n(615405),
    F = n(67480),
    B = n(45938),
    W = n(428262),
    V = n(242874),
    H = n(735164),
    K = n(778307),
    Z = n(75825),
    q = n(218075),
    z = n(361597),
    J = n(344159),
    $ = n(285719),
    X = n(788868),
    Q = n(818348),
    ee = n(375708),
    et = n(814304);
let en = (e) => {
    let { selectedPlanId: t, paymentSources: n, trialId: l, metadata: i, isTrial: r = !1 } = e,
        { selectedSkuId: s, priceOptions: u } = (0, j.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
        })),
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
        { isGift: w, giftRecipient: U, selectedGiftStyle: k } = (0, T.Pv)(),
        G = s ?? "",
        V = (0, o.bG)([F.A], () => F.A.get(G), [G]),
        H = V?.eligiblePaymentGateways,
        K = (0, N.vT)({ isTrial: r, isGift: w, selectedSkuId: s, startedPaymentFlowWithPaymentSources: C.current }),
        {
            subscriptionPlan: Z,
            purchaseDisabled: q,
            checkoutInvoicePreview: z,
            invoiceSummaryTypeWithPreview: $,
            proratedInvoicePreview: Q,
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
                    f()(null != l, "Missing plan");
                    let a = [{ planId: l.id, quantity: 1 }],
                        i = n === x.h.PURCHASING || n === x.h.COMPLETED;
                    return { subscriptionPlan: l, purchaseState: n, purchaseDisabled: i, newItems: a };
                })({ selectedPlanId: t }),
                [S, _] = (0, g.YV)({
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
                            : { checkoutInvoicePreview: S, checkoutInvoiceError: _ },
                    [A, U, S, k, _],
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
            priceOptions: u,
            trialId: l,
            metadata: i,
            isInOneStepSubscriptionCheckout: K,
            isTrial: r,
        }),
        ea = w && (0, B.Ik)(U),
        ei = u.paymentSourceId,
        er = (0, Y.g)(n, ei),
        es = (0, y.vg)("PremiumSubscriptionReview") ? (D?.find((e) => e.id === ei)?.relocationCountry ?? null) : null,
        { hasEntitlements: eo, entitlements: eu } = (0, J.X)(Z.id, w),
        ec = (0, W.J$)(u.paymentSourceId),
        ed = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        ep = !K && (ed.isFractionalPremiumActive || A) && X.JM.has(t),
        em = a.useMemo(() => (0, W.Tm)({ skuId: s, isPremium: h, defaultPlanId: m }), [s, m, h]),
        eh = a.useMemo(
            () => (eo && null == ei ? ee.intl.format(ee.t["2wPRSF"], { months: eu.length }) : null),
            [eo, ei, eu],
        );
    return {
        disabled: q,
        activeSubscription: p,
        subscriptionPeriodEnd: el,
        plan: Z,
        premiumPlanOptions: em,
        checkoutInvoicePreview: z,
        invoiceSummaryTypeWithPreview: $,
        discountInvoicePreview: en,
        renewalInvoicePreview: et,
        proratedInvoicePreview: Q,
        isGift: w,
        isEmbeddedIAP: d,
        paymentSourceType: er,
        giftRecipient: U,
        selectedGiftStyle: k,
        isInOneStepSubscriptionCheckout: K,
        shouldAllowPlanSelect: K && !_,
        hasPaymentSources: c,
        paymentSourceId: ei,
        eligiblePaymentGateways: H,
        inReverseTrial: A,
        fractionalPremiumInfo: ed,
        showFractionalPremiumBannerInInvoiceSummary: ep,
        isPrepaid: ec,
        isCustomGift: ea,
        isPremium: h,
        isPremiumGroupPurchase: _,
        isEligibleForDiscount: O,
        hasEntitlements: eo,
        entitlements: eu,
        paymentSourceOptionalWarningCopy: eh,
        selectedSourceRelocationCountry: es,
    };
};
function el(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            paymentSources: i,
            handlePaymentSourceAdd: o,
            setHasAcceptedTerms: y,
            legalTermsNodeRef: E,
            hasLegalTermsFlash: P,
            trialId: S,
            trialFooterMessageOverride: _,
            reviewWarningMessage: f,
            metadata: T,
            hideSubscriptionDetails: I,
            referralTrialOfferId: x,
            isTrial: N = !1,
            isDiscount: g = !1,
            handleClose: v,
        } = e,
        {
            disabled: b,
            isEmbeddedIAP: R,
            paymentSourceType: L,
            giftRecipient: Y,
            selectedGiftStyle: F,
            subscriptionPeriodEnd: B,
            premiumPlanOptions: J,
            shouldAllowPlanSelect: X,
            hasPaymentSources: el,
            paymentSourceId: ea,
            eligiblePaymentGateways: ei,
            inReverseTrial: er,
            fractionalPremiumInfo: es,
            plan: eo,
            isGift: eu,
            invoiceSummaryTypeWithPreview: ec,
            checkoutInvoicePreview: ed,
            renewalInvoicePreview: ep,
            showFractionalPremiumBannerInInvoiceSummary: em,
            isPrepaid: eh,
            isCustomGift: eC,
            isPremium: eA,
            isPremiumGroupPurchase: ey,
            hasEntitlements: eE,
            paymentSourceOptionalWarningCopy: eP,
            selectedSourceRelocationCountry: eS,
        } = en({ selectedPlanId: t, paymentSources: i, trialId: S, metadata: T, isTrial: N }),
        e_ = (0, j.t4)((e) => e.checkoutPriceOptions),
        ef = a.useMemo(() => (0, W.l6)(e_, ed?.checkoutContext?.available_plans), [e_, ed]),
        eT = (0, O.I)({ skuId: eo?.skuId, isGift: eu, className: et.Gw });
    if (null != ec && ec.type === M.N$.LOADING)
        return (0, l.jsx)("div", { className: et.zp, children: (0, l.jsx)(c.y, {}) });
    let eI = (0, l.jsx)(M.eb, {
            invoiceSummaryTypeWithPreview: ec,
            priceOptions: e_,
            trialFooterMessageOverride: _,
            hideSubscriptionDetails: I,
            referralTrialOfferId: x,
            isTrial: N,
            inReverseTrial: er,
            fractionalPremiumInfo: es,
            plan: eo,
            showFractionalPremiumBanner: em,
            isPrepaid: eh,
            isCustomGift: eC,
            enablePremiumBrandRefresh: eA,
        }),
        ex = s.M.EEA_COUNTRIES.has(G.A.ipCountryCodeWithFallback),
        eN = ee.intl.formatToPlainString(ee.t["sBpy9/"], { planName: eo.name });
    eu && !eC
        ? (eN = ee.intl.string(ee.t.J5a0eb))
        : eu && eC
          ? (eN = "")
          : (0, W.ys)(eo.id) && (eN = W.Ay.getBillingReviewSubheader(null, eo));
    let eg = null != ei && ei.length > 0 && (null == ea || null === L) && el ? q.fU.SELECT_PAYMENT_METHOD : void 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(D.k, { location: "PremiumSubscriptionReview", paymentSourceId: ea }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(q.je, { paymentRestrictionBannerType: eg }),
                    null != f &&
                        (0, l.jsxs)("div", {
                            className: et.Je,
                            children: [
                                (0, l.jsx)(d.m, {
                                    size: "custom",
                                    color: u.A.unsafe_rawColors.YELLOW_300.css,
                                    width: 20,
                                    height: 20,
                                }),
                                (0, l.jsx)(p.E, { className: et.CJ, variant: "text-sm/normal", children: f }),
                            ],
                        }),
                    ey &&
                        (0, l.jsx)("div", {
                            className: et.Ni,
                            children: (0, l.jsx)(m.w, {
                                type: "info",
                                children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, U.Nn)() }),
                            }),
                        }),
                    eT,
                    X &&
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(w.P, { planSkuId: eo?.skuId, referralTrialOfferId: x }),
                                (0, l.jsx)(z.$p, {
                                    disabled: b,
                                    planOptions: J,
                                    selectedPlanId: t,
                                    planGroup: n,
                                    subscriptionPeriodEnd: B,
                                    showTotal: !1,
                                    priceOptions: ef,
                                    handleClose: v,
                                }),
                                (0, l.jsx)(H.pK, {}),
                            ],
                        }),
                    !N &&
                        "" !== eN &&
                        (0, l.jsx)(h.D, { variant: "heading-md/semibold", className: et.wx, children: eN }),
                    eC &&
                        null != F &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(Z.A, {
                                    defaultAnimationState: V.oA.LOOP,
                                    giftStyle: F,
                                    shouldAnimate: !0,
                                    className: et.Os,
                                }),
                                (0, l.jsx)($.Z, { giftRecipient: Y }),
                            ],
                        }),
                    eI,
                    (0, l.jsxs)("div", {
                        className: et.LC,
                        children: [
                            (0, l.jsx)(k.K, {
                                label: ee.intl.string(N ? ee.t["YH7B+D"] : ee.t["mmDvV+"]),
                                handlePaymentSourceAdd: o,
                                isTrial: N,
                                isDiscount: g,
                                disabled: b,
                                hasEntitlements: eE,
                                eligiblePaymentGateways: ei,
                                shouldUseUnifiedCheckoutUI: !1,
                                paymentSourceDropdownClassName: r()({ [et.E4]: eA }),
                                paymentSourceDropdownPrependOption:
                                    eE && !N ? { label: ee.intl.string(ee.t.IGU7El), value: null } : null,
                            }),
                            null != eP ? (0, l.jsx)("div", { className: et.QN, children: eP }) : null,
                        ],
                    }),
                    (0, l.jsx)(K.A, {
                        isActive: P,
                        ref: E,
                        children: (0, l.jsx)(A.A, {
                            onChange: y,
                            forceShow: !0,
                            finePrint:
                                _ ??
                                (0, l.jsx)(C.A, {
                                    hide: N || g,
                                    subscriptionPlan: eo,
                                    renewalInvoice: ep,
                                    isGift: eu,
                                    paymentSourceType: L,
                                    isEmbeddedIAP: R,
                                    basePrice: (0, W.y8)(eo.id, !1, eu, ef),
                                    willRelocateStoreCountry: null != eS,
                                }),
                            showPricingLink: eo.currency !== Q.Yr.USD,
                            showWithdrawalWaiver: ex,
                            disabled: b,
                            isTrial: N && null == _,
                            isDiscount: g,
                            subscriptionPlan: eo,
                            isGift: eu,
                        }),
                    }),
                ],
            }),
        ],
    });
}
