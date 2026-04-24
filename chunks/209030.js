n.d(t, { A: () => Q, L: () => J });
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
    A = n(457287),
    C = n(821891),
    _ = n(953689),
    E = n(546605),
    y = n(531260),
    f = n(284009),
    P = n.n(f),
    S = n(937008),
    T = n(156312),
    x = n(566980),
    N = n(800471),
    g = n(543767),
    I = n(299301),
    v = n(97352),
    b = n(94420),
    M = n(699595),
    L = n(788868),
    R = n(71867),
    j = n(222707),
    O = n(421094),
    D = n(216641),
    w = n(615405),
    U = n(79387),
    k = n(67480),
    Y = n(45938),
    F = n(927578),
    G = n(242874),
    B = n(735164),
    W = n(778307),
    H = n(75825),
    V = n(218075),
    K = n(337092),
    Z = n(344159),
    q = n(285719),
    z = n(818348),
    $ = n(985018),
    X = n(814304);
let J = (e) => {
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
        d = (0, b.t4)((e) => e.selectedSkuId),
        {
            isEmbeddedIAP: p,
            activeSubscription: m,
            defaultPlanId: h,
            isPremium: A,
            startedPaymentFlowWithPaymentSourcesRef: C,
            inReverseTrial: _,
            hasPaymentSources: f,
            enablePremiumBrandRefresh: R,
            premiumBrandRefreshBackgroundClassName: j,
            isPremiumGroupPurchase: O,
            isEligibleForDiscount: w,
            displayCurrency: U,
            checkoutPaymentSources: G,
        } = (0, T.P5)(),
        { isGift: B, giftRecipient: W, selectedGiftStyle: H } = (0, S.Pv)(),
        V = d ?? "",
        K = (0, o.bG)([k.A], () => k.A.get(V), [V]),
        q = K?.eligiblePaymentGateways,
        z = (0, N.vT)({ isTrial: c, isGift: B, selectedSkuId: d, startedPaymentFlowWithPaymentSources: C.current }),
        {
            subscriptionPlan: X,
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
                u = (0, b.t4)((e) => e.selectedSkuId),
                {
                    activeSubscription: c,
                    contextMetadata: d,
                    setPurchasePreviewError: p,
                    isEligibleForDiscount: m,
                } = (0, T.P5)(),
                { isGift: h } = (0, S.Pv)(),
                {
                    subscriptionPlan: A,
                    purchaseDisabled: C,
                    newItems: _,
                } = ((e) => {
                    let { selectedPlanId: t } = e,
                        { purchaseState: n } = (0, T.P5)(),
                        l = (0, o.bG)([v.A], () => v.A.get(t));
                    P()(null != l, "Missing plan");
                    let a = [{ planId: l.id, quantity: 1 }],
                        i = n === x.h.PURCHASING || n === x.h.COMPLETED;
                    return { subscriptionPlan: l, purchaseState: n, purchaseDisabled: i, newItems: a };
                })({ selectedPlanId: t }),
                [E, y] = (0, g.Kq)({
                    items: _,
                    renewal: !1,
                    preventFetch: h || C,
                    applyEntitlements: !0,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    trialId: l,
                    metadata: i,
                }),
                f = a.useMemo(() => {
                    if (s && null != E) return E;
                }, [s, E]),
                [R, j] = (0, g.Kq)({
                    subscriptionId: c?.id,
                    items: _,
                    renewal: !0,
                    preventFetch: h || C,
                    trialId: l,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    metadata: i,
                });
            (0, b.Tr)(R);
            let [O, D] = (0, g.FP)({
                    paymentSourceId: n.paymentSourceId,
                    skuId: u,
                    subscriptionPlanId: t,
                    currency: n.currency,
                    preventFetch: !h || C,
                    loadId: d.loadId,
                }),
                w = a.useMemo(() => (h ? O : E), [h, O, E]);
            (0, b.F0)(w);
            let [U, k] = (0, g.Kq)({
                items: [{ planId: L.gD.PREMIUM_MONTH_TIER_2, quantity: 1 }],
                renewal: !1,
                preventFetch: !m,
                trialId: l,
                paymentSourceId: n.paymentSourceId,
                currency: n.currency,
                metadata: i,
            });
            (0, M.c)(U, m);
            let Y = a.useMemo(() => y ?? j ?? k ?? D, [y, j, k, D]);
            a.useEffect(() => {
                p(Y);
            }, [Y, p]);
            let F = a.useMemo(() => (null != E ? E.subscriptionPeriodEnd : void 0), [E]),
                G = a.useMemo(() => (0, N.UB)(r, E, A), [r, E, A]),
                B = a.useMemo(
                    () =>
                        (0, I.yf)({
                            error: Y,
                            isGift: h,
                            oneTimePurchaseNitroGiftInvoicePreview: O,
                            trialInvoicePreview: f,
                            proratedInvoicePreview: E,
                            renewalInvoicePreview: R,
                            planSwitchLoading: G,
                        }),
                    [Y, h, O, f, E, R, G],
                );
            return {
                checkoutInvoicePreview: w,
                invoiceSummaryTypeWithPreview: B,
                discountInvoicePreview: U,
                oneTimePurchaseNitroGiftInvoicePreview: O,
                trialInvoicePreview: f,
                proratedInvoicePreview: E,
                renewalInvoicePreview: R,
                purchaseDisabled: C,
                subscriptionPlan: A,
                invoiceError: Y,
                subscriptionPeriodEnd: F,
            };
        })({
            selectedPlanId: t,
            priceOptions: l,
            trialId: i,
            metadata: r,
            isInOneStepSubscriptionCheckout: z,
            isTrial: c,
        }),
        ei = B && (0, Y.Ik)(W),
        er = l.paymentSourceId,
        es = (0, D.g)(n, er),
        eo = (0, E.vg)("PremiumSubscriptionReview") ? (G?.find((e) => e.id === er)?.relocationCountry ?? null) : null,
        { hasEntitlements: eu, entitlements: ec } = (0, Z.X)(X.id, B),
        ed = (0, F.J$)(l.paymentSourceId),
        ep = (0, y.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        em = !z && (ep.isFractionalPremiumActive || _) && L.JM.has(t),
        eh = a.useMemo(() => (0, F.Tm)({ skuId: d, isPremium: A, defaultPlanId: h }), [d, h, A]),
        eA = a.useMemo(
            () => ({
                label: $.intl.string($.t["/AAR02"]),
                selectedCurrency: l.currency ?? U,
                currencies: s,
                onChange: u,
            }),
            [l.currency, U, s, u],
        ),
        eC = a.useMemo(
            () => (eu && null == er ? $.intl.format($.t["2wPRSF"], { months: ec.length }) : null),
            [eu, er, ec],
        );
    return {
        disabled: J,
        activeSubscription: m,
        subscriptionPeriodEnd: ea,
        plan: X,
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
        selectedGiftStyle: H,
        isInOneStepSubscriptionCheckout: z,
        shouldAllowPlanSelect: z && !O,
        hasPaymentSources: f,
        paymentSourceId: er,
        eligiblePaymentGateways: q,
        inReverseTrial: _,
        fractionalPremiumInfo: ep,
        showFractionalPremiumBannerInInvoiceSummary: em,
        isPrepaid: ed,
        isCustomGift: ei,
        enablePremiumBrandRefresh: R,
        premiumBrandRefreshBackgroundClassName: j,
        isPremiumGroupPurchase: O,
        isEligibleForDiscount: w,
        hasEntitlements: eu,
        entitlements: ec,
        currencyDropdownProps: eA,
        paymentSourceOptionalWarningCopy: eC,
        selectedSourceRelocationCountry: eo,
    };
};
function Q(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            paymentSources: i,
            priceOptions: o,
            currencies: E,
            onCurrencyChange: y,
            handlePaymentSourceAdd: f,
            setHasAcceptedTerms: P,
            legalTermsNodeRef: S,
            hasLegalTermsFlash: T,
            trialId: x,
            trialFooterMessageOverride: N,
            reviewWarningMessage: g,
            metadata: v,
            hideSubscriptionDetails: b,
            referralTrialOfferId: M,
            isTrial: L = !1,
            isDiscount: D = !1,
            handleClose: k,
        } = e,
        {
            disabled: Y,
            isEmbeddedIAP: Z,
            paymentSourceType: Q,
            giftRecipient: ee,
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
            showFractionalPremiumBannerInInvoiceSummary: eA,
            isPrepaid: eC,
            isCustomGift: e_,
            enablePremiumBrandRefresh: eE,
            premiumBrandRefreshBackgroundClassName: ey,
            isPremiumGroupPurchase: ef,
            hasEntitlements: eP,
            currencyDropdownProps: eS,
            paymentSourceOptionalWarningCopy: eT,
            selectedSourceRelocationCountry: ex,
        } = J({
            selectedPlanId: t,
            paymentSources: i,
            priceOptions: o,
            trialId: x,
            metadata: v,
            isTrial: L,
            currencies: E,
            onCurrencyChange: y,
        }),
        eN = a.useMemo(() => (0, F.l6)(o, em?.checkoutContext?.available_plans), [o, em]);
    if (null != ep && ep.type === I.N$.LOADING)
        return (0, l.jsx)("div", { className: X.zp, children: (0, l.jsx)(c.y, {}) });
    let eg = (0, l.jsx)(I.eb, {
            invoiceSummaryTypeWithPreview: ep,
            priceOptions: o,
            trialFooterMessageOverride: N,
            hideSubscriptionDetails: b,
            referralTrialOfferId: M,
            isTrial: L,
            inReverseTrial: eo,
            fractionalPremiumInfo: eu,
            plan: ec,
            showFractionalPremiumBanner: eA,
            isPrepaid: eC,
            isCustomGift: e_,
            enablePremiumBrandRefresh: eE,
            premiumBrandRefreshBackgroundClassName: ey,
        }),
        eI = s.M.EEA_COUNTRIES.has(w.A.ipCountryCodeWithFallback),
        ev = $.intl.formatToPlainString($.t["sBpy9/"], { planName: ec.name });
    ed && !e_
        ? (ev = $.intl.string($.t.J5a0eb))
        : ed && e_
          ? (ev = "")
          : (0, F.ys)(ec.id) && (ev = F.Ay.getBillingReviewSubheader(null, ec));
    let eb = null != es && es.length > 0 && (er === U.B || null === Q) && ei ? V.fU.SELECT_PAYMENT_METHOD : void 0;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(V.je, { paymentRestrictionBannerType: eb }),
            null != g &&
                (0, l.jsxs)("div", {
                    className: X.Je,
                    children: [
                        (0, l.jsx)(d.m, {
                            size: "custom",
                            color: u.A.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20,
                        }),
                        (0, l.jsx)(p.E, { className: X.CJ, variant: "text-sm/normal", children: g }),
                    ],
                }),
            ef &&
                (0, l.jsx)("div", {
                    className: X.Ni,
                    children: (0, l.jsx)(m.w, {
                        type: "info",
                        children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, j.Nn)() }),
                    }),
                }),
            ea &&
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(R.P, { planSkuId: ec?.skuId, referralTrialOfferId: M }),
                        (0, l.jsx)(K.$p, {
                            disabled: Y,
                            planOptions: el,
                            selectedPlanId: t,
                            planGroup: n,
                            subscriptionPeriodEnd: en,
                            showTotal: !1,
                            priceOptions: eN,
                            handleClose: k,
                        }),
                        (0, l.jsx)(B.pK, {}),
                    ],
                }),
            !L && "" !== ev && (0, l.jsx)(h.D, { variant: "heading-md/semibold", className: X.wx, children: ev }),
            e_ &&
                null != et &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(H.A, {
                            defaultAnimationState: G.oA.LOOP,
                            giftStyle: et,
                            shouldAnimate: !0,
                            className: X.Os,
                        }),
                        (0, l.jsx)(q.Z, { giftRecipient: ee }),
                    ],
                }),
            eg,
            (0, l.jsxs)("div", {
                className: X.LC,
                children: [
                    (0, l.jsx)(O.K, {
                        label: $.intl.string(L ? $.t["YH7B+D"] : $.t["mmDvV+"]),
                        handlePaymentSourceAdd: f,
                        isTrial: L,
                        isDiscount: D,
                        disabled: Y,
                        hasEntitlements: eP,
                        eligiblePaymentGateways: es,
                        shouldUseUnifiedCheckoutUI: !1,
                        paymentSourceDropdownClassName: r()({ [X.E4]: eE }),
                        paymentSourceDropdownPrependOption:
                            eP && !L ? { label: $.intl.string($.t.IGU7El), value: null } : null,
                    }),
                    null != eT ? (0, l.jsx)("div", { className: X.QN, children: eT }) : null,
                    D
                        ? null
                        : (0, l.jsx)(A.f, {
                              currencies: eS.currencies,
                              className: X.p2,
                              children: (0, l.jsx)(A.A, { ...eS }),
                          }),
                ],
            }),
            (0, l.jsx)(W.A, {
                isActive: T,
                ref: S,
                children: (0, l.jsx)(_.A, {
                    onChange: P,
                    forceShow: !0,
                    finePrint:
                        N ??
                        (0, l.jsx)(C.A, {
                            hide: L || D,
                            subscriptionPlan: ec,
                            renewalInvoice: eh,
                            isGift: ed,
                            paymentSourceType: Q,
                            isEmbeddedIAP: Z,
                            basePrice: (0, F.y8)(ec.id, !1, ed, eN),
                            willRelocateStoreCountry: null != ex,
                        }),
                    showPricingLink: ec.currency !== z.Yr.USD,
                    showWithdrawalWaiver: eI,
                    disabled: Y,
                    isTrial: L && null == N,
                    isDiscount: D,
                    subscriptionPlan: ec,
                    isGift: ed,
                }),
            }),
        ],
    });
}
