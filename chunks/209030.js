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
    C = n(457287),
    A = n(821891),
    E = n(953689),
    y = n(546605),
    P = n(531260),
    S = n(364995),
    _ = n(284009),
    f = n.n(_),
    T = n(937008),
    x = n(49960),
    N = n(566980),
    I = n(800471),
    g = n(543767),
    v = n(299301),
    M = n(97352),
    j = n(94420),
    b = n(666646),
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
    B = n(927578),
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
    let {
            selectedPlanId: t,
            paymentSources: n,
            priceOptions: l,
            trialId: i,
            metadata: r,
            currencies: s,
            onCurrencyChange: u,
            isTrial: c = !1,
        } = e,
        d = (0, j.t4)((e) => e.selectedSkuId),
        {
            isEmbeddedIAP: p,
            activeSubscription: m,
            defaultPlanId: h,
            isPremium: C,
            startedPaymentFlowWithPaymentSourcesRef: A,
            inReverseTrial: E,
            hasPaymentSources: _,
            isPremiumGroupPurchase: O,
            isEligibleForDiscount: D,
            displayCurrency: w,
        } = (0, x.P5)(),
        { checkoutPaymentSources: U } = (0, S.t)(),
        { isGift: Y, giftRecipient: W, selectedGiftStyle: V } = (0, T.Pv)(),
        H = d ?? "",
        K = (0, o.bG)([G.A], () => G.A.get(H), [H]),
        Z = K?.eligiblePaymentGateways,
        q = (0, I.vT)({ isTrial: c, isGift: Y, selectedSkuId: d, startedPaymentFlowWithPaymentSources: A.current }),
        {
            subscriptionPlan: $,
            purchaseDisabled: J,
            checkoutInvoicePreview: Q,
            invoiceSummaryTypeWithPreview: ee,
            proratedInvoicePreview: et,
            renewalInvoicePreview: en,
            discountInvoicePreview: el,
            subscriptionPeriodEnd: ea,
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
                { activeSubscription: d, setPurchasePreviewError: p, isEligibleForDiscount: m } = (0, x.P5)(),
                { isGift: h } = (0, T.Pv)(),
                {
                    subscriptionPlan: C,
                    purchaseDisabled: A,
                    newItems: E,
                } = ((e) => {
                    let { selectedPlanId: t } = e,
                        n = (0, j.t4)((e) => e.purchaseState),
                        l = (0, o.bG)([M.A], () => M.A.get(t));
                    f()(null != l, "Missing plan");
                    let a = [{ planId: l.id, quantity: 1 }],
                        i = n === N.h.PURCHASING || n === N.h.COMPLETED;
                    return { subscriptionPlan: l, purchaseState: n, purchaseDisabled: i, newItems: a };
                })({ selectedPlanId: t }),
                [y, P] = (0, g.YV)({
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
                [_, O] = (0, g.YV)({
                    subscriptionId: d?.id,
                    items: E,
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
                            : { checkoutInvoicePreview: y, checkoutInvoiceError: P },
                    [h, D, y, w, P],
                ),
                { primaryInvoiceError: Y } = (0, b.OQ)({
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
            let W = a.useMemo(() => (null != y ? y.subscriptionPeriodEnd : void 0), [y]),
                V = a.useMemo(() => (0, I.UB)(r, y, C), [r, y, C]),
                H = a.useMemo(
                    () =>
                        (0, v.yf)({
                            error: B,
                            isGift: h,
                            oneTimePurchaseNitroGiftInvoicePreview: D,
                            trialInvoicePreview: S,
                            proratedInvoicePreview: y,
                            renewalInvoicePreview: _,
                            planSwitchLoading: V,
                        }),
                    [B, h, D, S, y, _, V],
                );
            return {
                checkoutInvoicePreview: U,
                invoiceSummaryTypeWithPreview: H,
                discountInvoicePreview: G,
                oneTimePurchaseNitroGiftInvoicePreview: D,
                trialInvoicePreview: S,
                proratedInvoicePreview: y,
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
            isInOneStepSubscriptionCheckout: q,
            isTrial: c,
        }),
        ei = Y && (0, F.Ik)(W),
        er = l.paymentSourceId,
        es = (0, k.g)(n, er),
        eo = (0, y.vg)("PremiumSubscriptionReview") ? (U?.find((e) => e.id === er)?.relocationCountry ?? null) : null,
        { hasEntitlements: eu, entitlements: ec } = (0, z.X)($.id, Y),
        ed = (0, B.J$)(l.paymentSourceId),
        ep = (0, P.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        em = !q && (ep.isFractionalPremiumActive || E) && L.JM.has(t),
        eh = a.useMemo(() => (0, B.Tm)({ skuId: d, isPremium: C, defaultPlanId: h }), [d, h, C]),
        eC = a.useMemo(
            () => ({
                label: X.intl.string(X.t["/AAR02"]),
                selectedCurrency: l.currency ?? w,
                currencies: s,
                onChange: u,
            }),
            [l.currency, w, s, u],
        ),
        eA = a.useMemo(
            () => (eu && null == er ? X.intl.format(X.t["2wPRSF"], { months: ec.length }) : null),
            [eu, er, ec],
        );
    return {
        disabled: J,
        activeSubscription: m,
        subscriptionPeriodEnd: ea,
        plan: $,
        premiumPlanOptions: eh,
        checkoutInvoicePreview: Q,
        invoiceSummaryTypeWithPreview: ee,
        discountInvoicePreview: el,
        renewalInvoicePreview: en,
        proratedInvoicePreview: et,
        isGift: Y,
        isEmbeddedIAP: p,
        paymentSourceType: es,
        giftRecipient: W,
        selectedGiftStyle: V,
        isInOneStepSubscriptionCheckout: q,
        shouldAllowPlanSelect: q && !O,
        hasPaymentSources: _,
        paymentSourceId: er,
        eligiblePaymentGateways: Z,
        inReverseTrial: E,
        fractionalPremiumInfo: ep,
        showFractionalPremiumBannerInInvoiceSummary: em,
        isPrepaid: ed,
        isCustomGift: ei,
        isPremium: C,
        isPremiumGroupPurchase: O,
        isEligibleForDiscount: D,
        hasEntitlements: eu,
        entitlements: ec,
        currencyDropdownProps: eC,
        paymentSourceOptionalWarningCopy: eA,
        selectedSourceRelocationCountry: eo,
    };
};
function et(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            paymentSources: i,
            priceOptions: o,
            currencies: y,
            onCurrencyChange: P,
            handlePaymentSourceAdd: S,
            setHasAcceptedTerms: _,
            legalTermsNodeRef: f,
            hasLegalTermsFlash: T,
            trialId: x,
            trialFooterMessageOverride: N,
            reviewWarningMessage: I,
            metadata: g,
            hideSubscriptionDetails: M,
            referralTrialOfferId: j,
            isTrial: b = !1,
            isDiscount: R = !1,
            handleClose: L,
        } = e,
        {
            disabled: k,
            isEmbeddedIAP: G,
            paymentSourceType: F,
            giftRecipient: z,
            selectedGiftStyle: et,
            subscriptionPeriodEnd: en,
            premiumPlanOptions: el,
            shouldAllowPlanSelect: ea,
            hasPaymentSources: ei,
            paymentSourceId: er,
            eligiblePaymentGateways: es,
            inReverseTrial: eo,
            fractionalPremiumInfo: eu,
            plan: ec,
            isGift: ed,
            invoiceSummaryTypeWithPreview: ep,
            checkoutInvoicePreview: em,
            renewalInvoicePreview: eh,
            showFractionalPremiumBannerInInvoiceSummary: eC,
            isPrepaid: eA,
            isCustomGift: eE,
            isPremium: ey,
            isPremiumGroupPurchase: eP,
            hasEntitlements: eS,
            currencyDropdownProps: e_,
            paymentSourceOptionalWarningCopy: ef,
            selectedSourceRelocationCountry: eT,
        } = ee({
            selectedPlanId: t,
            paymentSources: i,
            priceOptions: o,
            trialId: x,
            metadata: g,
            isTrial: b,
            currencies: y,
            onCurrencyChange: P,
        }),
        ex = a.useMemo(() => (0, B.l6)(o, em?.checkoutContext?.available_plans), [o, em]);
    if (null != ep && ep.type === v.N$.LOADING)
        return (0, l.jsx)("div", { className: Q.zp, children: (0, l.jsx)(c.y, {}) });
    let eN = (0, l.jsx)(v.eb, {
            invoiceSummaryTypeWithPreview: ep,
            priceOptions: o,
            trialFooterMessageOverride: N,
            hideSubscriptionDetails: M,
            referralTrialOfferId: j,
            isTrial: b,
            inReverseTrial: eo,
            fractionalPremiumInfo: eu,
            plan: ec,
            showFractionalPremiumBanner: eC,
            isPrepaid: eA,
            isCustomGift: eE,
            enablePremiumBrandRefresh: ey,
        }),
        eI = s.M.EEA_COUNTRIES.has(Y.A.ipCountryCodeWithFallback),
        eg = X.intl.formatToPlainString(X.t["sBpy9/"], { planName: ec.name });
    ed && !eE
        ? (eg = X.intl.string(X.t.J5a0eb))
        : ed && eE
          ? (eg = "")
          : (0, B.ys)(ec.id) && (eg = B.Ay.getBillingReviewSubheader(null, ec));
    let ev = null != es && es.length > 0 && (null == er || null === F) && ei ? Z.fU.SELECT_PAYMENT_METHOD : void 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(O.k, { location: "PremiumSubscriptionReview", paymentSourceId: er }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(Z.je, { paymentRestrictionBannerType: ev }),
                    null != I &&
                        (0, l.jsxs)("div", {
                            className: Q.Je,
                            children: [
                                (0, l.jsx)(d.m, {
                                    size: "custom",
                                    color: u.A.unsafe_rawColors.YELLOW_300.css,
                                    width: 20,
                                    height: 20,
                                }),
                                (0, l.jsx)(p.E, { className: Q.CJ, variant: "text-sm/normal", children: I }),
                            ],
                        }),
                    eP &&
                        (0, l.jsx)("div", {
                            className: Q.Ni,
                            children: (0, l.jsx)(m.w, {
                                type: "info",
                                children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, w.Nn)() }),
                            }),
                        }),
                    ea &&
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(D.P, { planSkuId: ec?.skuId, referralTrialOfferId: j }),
                                (0, l.jsx)(q.$p, {
                                    disabled: k,
                                    planOptions: el,
                                    selectedPlanId: t,
                                    planGroup: n,
                                    subscriptionPeriodEnd: en,
                                    showTotal: !1,
                                    priceOptions: ex,
                                    handleClose: L,
                                }),
                                (0, l.jsx)(V.pK, {}),
                            ],
                        }),
                    !b &&
                        "" !== eg &&
                        (0, l.jsx)(h.D, { variant: "heading-md/semibold", className: Q.wx, children: eg }),
                    eE &&
                        null != et &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(K.A, {
                                    defaultAnimationState: W.oA.LOOP,
                                    giftStyle: et,
                                    shouldAnimate: !0,
                                    className: Q.Os,
                                }),
                                (0, l.jsx)($.Z, { giftRecipient: z }),
                            ],
                        }),
                    eN,
                    (0, l.jsxs)("div", {
                        className: Q.LC,
                        children: [
                            (0, l.jsx)(U.K, {
                                label: X.intl.string(b ? X.t["YH7B+D"] : X.t["mmDvV+"]),
                                handlePaymentSourceAdd: S,
                                isTrial: b,
                                isDiscount: R,
                                disabled: k,
                                hasEntitlements: eS,
                                eligiblePaymentGateways: es,
                                shouldUseUnifiedCheckoutUI: !1,
                                paymentSourceDropdownClassName: r()({ [Q.E4]: ey }),
                                paymentSourceDropdownPrependOption:
                                    eS && !b ? { label: X.intl.string(X.t.IGU7El), value: null } : null,
                            }),
                            null != ef ? (0, l.jsx)("div", { className: Q.QN, children: ef }) : null,
                            R
                                ? null
                                : (0, l.jsx)(C.f, {
                                      currencies: e_.currencies,
                                      className: Q.p2,
                                      children: (0, l.jsx)(C.A, { ...e_ }),
                                  }),
                        ],
                    }),
                    (0, l.jsx)(H.A, {
                        isActive: T,
                        ref: f,
                        children: (0, l.jsx)(E.A, {
                            onChange: _,
                            forceShow: !0,
                            finePrint:
                                N ??
                                (0, l.jsx)(A.A, {
                                    hide: b || R,
                                    subscriptionPlan: ec,
                                    renewalInvoice: eh,
                                    isGift: ed,
                                    paymentSourceType: F,
                                    isEmbeddedIAP: G,
                                    basePrice: (0, B.y8)(ec.id, !1, ed, ex),
                                    willRelocateStoreCountry: null != eT,
                                }),
                            showPricingLink: ec.currency !== J.Yr.USD,
                            showWithdrawalWaiver: eI,
                            disabled: k,
                            isTrial: b && null == N,
                            isDiscount: R,
                            subscriptionPlan: ec,
                            isGift: ed,
                        }),
                    }),
                ],
            }),
        ],
    });
}
