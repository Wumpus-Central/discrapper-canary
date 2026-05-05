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
    C = n(457287),
    A = n(821891),
    E = n(953689),
    y = n(546605),
    P = n(531260),
    S = n(364995),
    _ = n(284009),
    T = n.n(_),
    f = n(937008),
    x = n(278521),
    N = n(566980),
    I = n(800471),
    g = n(543767),
    v = n(299301),
    M = n(97352),
    j = n(94420),
    b = n(666646),
    R = n(699595),
    L = n(788868),
    O = n(71867),
    D = n(222707),
    w = n(421094),
    U = n(216641),
    k = n(615405),
    Y = n(67480),
    G = n(45938),
    F = n(927578),
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
        { checkoutPaymentSources: k } = (0, S.t)(),
        { isGift: B, giftRecipient: W, selectedGiftStyle: V } = (0, f.Pv)(),
        H = d ?? "",
        K = (0, o.bG)([Y.A], () => Y.A.get(H), [H]),
        Z = K?.eligiblePaymentGateways,
        z = (0, I.vT)({ isTrial: c, isGift: B, selectedSkuId: d, startedPaymentFlowWithPaymentSources: A.current }),
        {
            subscriptionPlan: $,
            purchaseDisabled: X,
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
                { isGift: h } = (0, f.Pv)(),
                {
                    subscriptionPlan: C,
                    purchaseDisabled: A,
                    newItems: E,
                } = ((e) => {
                    let { selectedPlanId: t } = e,
                        n = (0, j.t4)((e) => e.purchaseState),
                        l = (0, o.bG)([M.A], () => M.A.get(t));
                    T()(null != l, "Missing plan");
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
            isInOneStepSubscriptionCheckout: z,
            isTrial: c,
        }),
        ei = B && (0, G.Ik)(W),
        er = l.paymentSourceId,
        es = (0, U.g)(n, er),
        eo = (0, y.vg)("PremiumSubscriptionReview") ? (k?.find((e) => e.id === er)?.relocationCountry ?? null) : null,
        { hasEntitlements: eu, entitlements: ec } = (0, q.X)($.id, B),
        ed = (0, F.J$)(l.paymentSourceId),
        ep = (0, P.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        em = !z && (ep.isFractionalPremiumActive || E) && L.JM.has(t),
        eh = a.useMemo(() => (0, F.Tm)({ skuId: d, isPremium: C, defaultPlanId: h }), [d, h, C]),
        eC = a.useMemo(
            () => ({
                label: J.intl.string(J.t["/AAR02"]),
                selectedCurrency: l.currency ?? w,
                currencies: s,
                onChange: u,
            }),
            [l.currency, w, s, u],
        ),
        eA = a.useMemo(
            () => (eu && null == er ? J.intl.format(J.t["2wPRSF"], { months: ec.length }) : null),
            [eu, er, ec],
        );
    return {
        disabled: X,
        activeSubscription: m,
        subscriptionPeriodEnd: ea,
        plan: $,
        premiumPlanOptions: eh,
        checkoutInvoicePreview: Q,
        invoiceSummaryTypeWithPreview: ee,
        discountInvoicePreview: el,
        renewalInvoicePreview: en,
        proratedInvoicePreview: et,
        isGift: B,
        isEmbeddedIAP: p,
        paymentSourceType: es,
        giftRecipient: W,
        selectedGiftStyle: V,
        isInOneStepSubscriptionCheckout: z,
        shouldAllowPlanSelect: z && !O,
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
function ee(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            paymentSources: i,
            priceOptions: o,
            currencies: y,
            onCurrencyChange: P,
            handlePaymentSourceAdd: S,
            setHasAcceptedTerms: _,
            legalTermsNodeRef: T,
            hasLegalTermsFlash: f,
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
            disabled: U,
            isEmbeddedIAP: Y,
            paymentSourceType: G,
            giftRecipient: q,
            selectedGiftStyle: ee,
            subscriptionPeriodEnd: et,
            premiumPlanOptions: en,
            shouldAllowPlanSelect: el,
            hasPaymentSources: ea,
            paymentSourceId: ei,
            eligiblePaymentGateways: er,
            inReverseTrial: es,
            fractionalPremiumInfo: eo,
            plan: eu,
            isGift: ec,
            invoiceSummaryTypeWithPreview: ed,
            checkoutInvoicePreview: ep,
            renewalInvoicePreview: em,
            showFractionalPremiumBannerInInvoiceSummary: eh,
            isPrepaid: eC,
            isCustomGift: eA,
            isPremium: eE,
            isPremiumGroupPurchase: ey,
            hasEntitlements: eP,
            currencyDropdownProps: eS,
            paymentSourceOptionalWarningCopy: e_,
            selectedSourceRelocationCountry: eT,
        } = Q({
            selectedPlanId: t,
            paymentSources: i,
            priceOptions: o,
            trialId: x,
            metadata: g,
            isTrial: b,
            currencies: y,
            onCurrencyChange: P,
        }),
        ef = a.useMemo(() => (0, F.l6)(o, ep?.checkoutContext?.available_plans), [o, ep]);
    if (null != ed && ed.type === v.N$.LOADING)
        return (0, l.jsx)("div", { className: X.zp, children: (0, l.jsx)(c.y, {}) });
    let ex = (0, l.jsx)(v.eb, {
            invoiceSummaryTypeWithPreview: ed,
            priceOptions: o,
            trialFooterMessageOverride: N,
            hideSubscriptionDetails: M,
            referralTrialOfferId: j,
            isTrial: b,
            inReverseTrial: es,
            fractionalPremiumInfo: eo,
            plan: eu,
            showFractionalPremiumBanner: eh,
            isPrepaid: eC,
            isCustomGift: eA,
            enablePremiumBrandRefresh: eE,
        }),
        eN = s.M.EEA_COUNTRIES.has(k.A.ipCountryCodeWithFallback),
        eI = J.intl.formatToPlainString(J.t["sBpy9/"], { planName: eu.name });
    ec && !eA
        ? (eI = J.intl.string(J.t.J5a0eb))
        : ec && eA
          ? (eI = "")
          : (0, F.ys)(eu.id) && (eI = F.Ay.getBillingReviewSubheader(null, eu));
    let eg = null != er && er.length > 0 && (null == ei || null === G) && ea ? K.fU.SELECT_PAYMENT_METHOD : void 0;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(K.je, { paymentRestrictionBannerType: eg }),
            null != I &&
                (0, l.jsxs)("div", {
                    className: X.Je,
                    children: [
                        (0, l.jsx)(d.m, {
                            size: "custom",
                            color: u.A.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20,
                        }),
                        (0, l.jsx)(p.E, { className: X.CJ, variant: "text-sm/normal", children: I }),
                    ],
                }),
            ey &&
                (0, l.jsx)("div", {
                    className: X.Ni,
                    children: (0, l.jsx)(m.w, {
                        type: "info",
                        children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, D.Nn)() }),
                    }),
                }),
            el &&
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(O.P, { planSkuId: eu?.skuId, referralTrialOfferId: j }),
                        (0, l.jsx)(Z.$p, {
                            disabled: U,
                            planOptions: en,
                            selectedPlanId: t,
                            planGroup: n,
                            subscriptionPeriodEnd: et,
                            showTotal: !1,
                            priceOptions: ef,
                            handleClose: L,
                        }),
                        (0, l.jsx)(W.pK, {}),
                    ],
                }),
            !b && "" !== eI && (0, l.jsx)(h.D, { variant: "heading-md/semibold", className: X.wx, children: eI }),
            eA &&
                null != ee &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(H.A, {
                            defaultAnimationState: B.oA.LOOP,
                            giftStyle: ee,
                            shouldAnimate: !0,
                            className: X.Os,
                        }),
                        (0, l.jsx)(z.Z, { giftRecipient: q }),
                    ],
                }),
            ex,
            (0, l.jsxs)("div", {
                className: X.LC,
                children: [
                    (0, l.jsx)(w.K, {
                        label: J.intl.string(b ? J.t["YH7B+D"] : J.t["mmDvV+"]),
                        handlePaymentSourceAdd: S,
                        isTrial: b,
                        isDiscount: R,
                        disabled: U,
                        hasEntitlements: eP,
                        eligiblePaymentGateways: er,
                        shouldUseUnifiedCheckoutUI: !1,
                        paymentSourceDropdownClassName: r()({ [X.E4]: eE }),
                        paymentSourceDropdownPrependOption:
                            eP && !b ? { label: J.intl.string(J.t.IGU7El), value: null } : null,
                    }),
                    null != e_ ? (0, l.jsx)("div", { className: X.QN, children: e_ }) : null,
                    R
                        ? null
                        : (0, l.jsx)(C.f, {
                              currencies: eS.currencies,
                              className: X.p2,
                              children: (0, l.jsx)(C.A, { ...eS }),
                          }),
                ],
            }),
            (0, l.jsx)(V.A, {
                isActive: f,
                ref: T,
                children: (0, l.jsx)(E.A, {
                    onChange: _,
                    forceShow: !0,
                    finePrint:
                        N ??
                        (0, l.jsx)(A.A, {
                            hide: b || R,
                            subscriptionPlan: eu,
                            renewalInvoice: em,
                            isGift: ec,
                            paymentSourceType: G,
                            isEmbeddedIAP: Y,
                            basePrice: (0, F.y8)(eu.id, !1, ec, ef),
                            willRelocateStoreCountry: null != eT,
                        }),
                    showPricingLink: eu.currency !== $.Yr.USD,
                    showWithdrawalWaiver: eN,
                    disabled: U,
                    isTrial: b && null == N,
                    isDiscount: R,
                    subscriptionPlan: eu,
                    isGift: ec,
                }),
            }),
        ],
    });
}
