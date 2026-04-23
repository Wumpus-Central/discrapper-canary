"use strict";
n.d(t, { A: () => J, L: () => Q });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(997101),
    l = n(17928),
    d = n(661531),
    _ = n(289873),
    u = n(885574),
    c = n(834730),
    E = n(683071),
    h = n(534514),
    m = n(457287),
    f = n(821891),
    g = n(953689),
    p = n(546605),
    A = n(531260),
    I = n(284009),
    T = n.n(I),
    S = n(937008),
    N = n(156312),
    C = n(566980),
    R = n(800471),
    O = n(543767),
    y = n(299301),
    v = n(97352),
    D = n(94420),
    L = n(699595),
    b = n(788868),
    w = n(71867),
    P = n(222707),
    k = n(421094),
    M = n(216641),
    U = n(615405),
    x = n(79387),
    G = n(67480),
    V = n(45938),
    F = n(927578),
    B = n(242874),
    H = n(735164),
    j = n(778307),
    W = n(75825),
    Y = n(218075),
    K = n(337092),
    z = n(344159),
    $ = n(285719),
    q = n(818348),
    X = n(985018),
    Z = n(814304);
let Q = (e) => {
    let {
            selectedPlanId: t,
            paymentSources: n,
            priceOptions: i,
            trialId: s,
            metadata: a,
            currencies: o,
            onCurrencyChange: d,
            isTrial: _ = !1,
        } = e,
        u = (0, D.t4)((e) => e.selectedSkuId),
        {
            isEmbeddedIAP: c,
            activeSubscription: E,
            defaultPlanId: h,
            isPremium: m,
            startedPaymentFlowWithPaymentSourcesRef: f,
            inReverseTrial: g,
            hasPaymentSources: I,
            enablePremiumBrandRefresh: w,
            premiumBrandRefreshBackgroundClassName: P,
            isPremiumGroupPurchase: k,
            isEligibleForDiscount: U,
            displayCurrency: x,
            checkoutPaymentSources: B,
        } = (0, N.P5)(),
        { isGift: H, giftRecipient: j, selectedGiftStyle: W } = (0, S.Pv)(),
        Y = u ?? "",
        K = (0, l.bG)([G.A], () => G.A.get(Y), [Y]),
        $ = K?.eligiblePaymentGateways,
        q = (0, R.vT)({ isTrial: _, isGift: H, selectedSkuId: u, startedPaymentFlowWithPaymentSources: f.current }),
        {
            subscriptionPlan: Z,
            purchaseDisabled: Q,
            checkoutInvoicePreview: J,
            invoiceSummaryTypeWithPreview: ee,
            proratedInvoicePreview: et,
            renewalInvoicePreview: en,
            discountInvoicePreview: ei,
            subscriptionPeriodEnd: er,
        } = ((e) => {
            let {
                    selectedPlanId: t,
                    priceOptions: n,
                    trialId: i,
                    metadata: s,
                    isInOneStepSubscriptionCheckout: a = !1,
                    isTrial: o = !1,
                } = e,
                d = (0, D.t4)((e) => e.selectedSkuId),
                {
                    activeSubscription: _,
                    contextMetadata: u,
                    setPurchasePreviewError: c,
                    isEligibleForDiscount: E,
                } = (0, N.P5)(),
                { isGift: h } = (0, S.Pv)(),
                {
                    subscriptionPlan: m,
                    purchaseDisabled: f,
                    newItems: g,
                } = ((e) => {
                    let { selectedPlanId: t } = e,
                        { purchaseState: n } = (0, N.P5)(),
                        i = (0, l.bG)([v.A], () => v.A.get(t));
                    T()(null != i, "Missing plan");
                    let r = [{ planId: i.id, quantity: 1 }],
                        s = n === C.h.PURCHASING || n === C.h.COMPLETED;
                    return { subscriptionPlan: i, purchaseState: n, purchaseDisabled: s, newItems: r };
                })({ selectedPlanId: t }),
                [p, A] = (0, O.Kq)({
                    items: g,
                    renewal: !1,
                    preventFetch: h || f,
                    applyEntitlements: !0,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    trialId: i,
                    metadata: s,
                }),
                I = r.useMemo(() => {
                    if (o && null != p) return p;
                }, [o, p]),
                [w, P] = (0, O.Kq)({
                    subscriptionId: _?.id,
                    items: g,
                    renewal: !0,
                    preventFetch: h || f,
                    trialId: i,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    metadata: s,
                });
            (0, D.Tr)(w);
            let [k, M] = (0, O.FP)({
                    paymentSourceId: n.paymentSourceId,
                    skuId: d,
                    subscriptionPlanId: t,
                    currency: n.currency,
                    preventFetch: !h || f,
                    loadId: u.loadId,
                }),
                U = r.useMemo(() => (h ? k : p), [h, k, p]);
            (0, D.F0)(U);
            let [x, G] = (0, O.Kq)({
                items: [{ planId: b.gD.PREMIUM_MONTH_TIER_2, quantity: 1 }],
                renewal: !1,
                preventFetch: !E,
                trialId: i,
                paymentSourceId: n.paymentSourceId,
                currency: n.currency,
                metadata: s,
            });
            (0, L.c)(x, E);
            let V = r.useMemo(() => A ?? P ?? G ?? M, [A, P, G, M]);
            r.useEffect(() => {
                c(V);
            }, [V, c]);
            let F = r.useMemo(() => (null != p ? p.subscriptionPeriodEnd : void 0), [p]),
                B = r.useMemo(() => (0, R.UB)(a, p, m), [a, p, m]),
                H = r.useMemo(
                    () =>
                        (0, y.yf)({
                            error: V,
                            isGift: h,
                            oneTimePurchaseNitroGiftInvoicePreview: k,
                            trialInvoicePreview: I,
                            proratedInvoicePreview: p,
                            renewalInvoicePreview: w,
                            planSwitchLoading: B,
                        }),
                    [V, h, k, I, p, w, B],
                );
            return {
                checkoutInvoicePreview: U,
                invoiceSummaryTypeWithPreview: H,
                discountInvoicePreview: x,
                oneTimePurchaseNitroGiftInvoicePreview: k,
                trialInvoicePreview: I,
                proratedInvoicePreview: p,
                renewalInvoicePreview: w,
                purchaseDisabled: f,
                subscriptionPlan: m,
                invoiceError: V,
                subscriptionPeriodEnd: F,
            };
        })({
            selectedPlanId: t,
            priceOptions: i,
            trialId: s,
            metadata: a,
            isInOneStepSubscriptionCheckout: q,
            isTrial: _,
        }),
        es = H && (0, V.Ik)(j),
        ea = i.paymentSourceId,
        eo = (0, M.g)(n, ea),
        el = (0, p.vg)("PremiumSubscriptionReview") ? (B?.find((e) => e.id === ea)?.relocationCountry ?? null) : null,
        { hasEntitlements: ed, entitlements: e_ } = (0, z.X)(Z.id, H),
        eu = (0, F.J$)(i.paymentSourceId),
        ec = (0, A.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        eE = !q && (ec.isFractionalPremiumActive || g) && b.JM.has(t),
        eh = r.useMemo(() => (0, F.Tm)({ skuId: u, isPremium: m, defaultPlanId: h }), [u, h, m]),
        em = r.useMemo(
            () => ({
                label: X.intl.string(X.t["/AAR02"]),
                selectedCurrency: i.currency ?? x,
                currencies: o,
                onChange: d,
            }),
            [i.currency, x, o, d],
        ),
        ef = r.useMemo(
            () => (ed && null == ea ? X.intl.format(X.t["2wPRSF"], { months: e_.length }) : null),
            [ed, ea, e_],
        );
    return {
        disabled: Q,
        activeSubscription: E,
        subscriptionPeriodEnd: er,
        plan: Z,
        premiumPlanOptions: eh,
        checkoutInvoicePreview: J,
        invoiceSummaryTypeWithPreview: ee,
        discountInvoicePreview: ei,
        renewalInvoicePreview: en,
        proratedInvoicePreview: et,
        isGift: H,
        isEmbeddedIAP: c,
        paymentSourceType: eo,
        giftRecipient: j,
        selectedGiftStyle: W,
        isInOneStepSubscriptionCheckout: q,
        shouldAllowPlanSelect: q && !k,
        hasPaymentSources: I,
        paymentSourceId: ea,
        eligiblePaymentGateways: $,
        inReverseTrial: g,
        fractionalPremiumInfo: ec,
        showFractionalPremiumBannerInInvoiceSummary: eE,
        isPrepaid: eu,
        isCustomGift: es,
        enablePremiumBrandRefresh: w,
        premiumBrandRefreshBackgroundClassName: P,
        isPremiumGroupPurchase: k,
        isEligibleForDiscount: U,
        hasEntitlements: ed,
        entitlements: e_,
        currencyDropdownProps: em,
        paymentSourceOptionalWarningCopy: ef,
        selectedSourceRelocationCountry: el,
    };
};
function J(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            paymentSources: s,
            priceOptions: l,
            currencies: p,
            onCurrencyChange: A,
            handlePaymentSourceAdd: I,
            setHasAcceptedTerms: T,
            legalTermsNodeRef: S,
            hasLegalTermsFlash: N,
            trialId: C,
            trialFooterMessageOverride: R,
            reviewWarningMessage: O,
            metadata: v,
            hideSubscriptionDetails: D,
            referralTrialOfferId: L,
            isTrial: b = !1,
            isDiscount: M = !1,
            handleClose: G,
        } = e,
        {
            disabled: V,
            isEmbeddedIAP: z,
            paymentSourceType: J,
            giftRecipient: ee,
            selectedGiftStyle: et,
            subscriptionPeriodEnd: en,
            premiumPlanOptions: ei,
            shouldAllowPlanSelect: er,
            hasPaymentSources: es,
            paymentSourceId: ea,
            eligiblePaymentGateways: eo,
            inReverseTrial: el,
            fractionalPremiumInfo: ed,
            plan: e_,
            isGift: eu,
            invoiceSummaryTypeWithPreview: ec,
            checkoutInvoicePreview: eE,
            renewalInvoicePreview: eh,
            showFractionalPremiumBannerInInvoiceSummary: em,
            isPrepaid: ef,
            isCustomGift: eg,
            enablePremiumBrandRefresh: ep,
            premiumBrandRefreshBackgroundClassName: eA,
            isPremiumGroupPurchase: eI,
            hasEntitlements: eT,
            currencyDropdownProps: eS,
            paymentSourceOptionalWarningCopy: eN,
            selectedSourceRelocationCountry: eC,
        } = Q({
            selectedPlanId: t,
            paymentSources: s,
            priceOptions: l,
            trialId: C,
            metadata: v,
            isTrial: b,
            currencies: p,
            onCurrencyChange: A,
        }),
        eR = r.useMemo(() => (0, F.l6)(l, eE?.checkoutContext?.available_plans), [l, eE]);
    if (null != ec && ec.type === y.N$.LOADING)
        return (0, i.jsx)("div", { className: Z.zp, children: (0, i.jsx)(_.y, {}) });
    let eO = (0, i.jsx)(y.eb, {
            invoiceSummaryTypeWithPreview: ec,
            priceOptions: l,
            trialFooterMessageOverride: R,
            hideSubscriptionDetails: D,
            referralTrialOfferId: L,
            isTrial: b,
            inReverseTrial: el,
            fractionalPremiumInfo: ed,
            plan: e_,
            showFractionalPremiumBanner: em,
            isPrepaid: ef,
            isCustomGift: eg,
            enablePremiumBrandRefresh: ep,
            premiumBrandRefreshBackgroundClassName: eA,
        }),
        ey = o.M.EEA_COUNTRIES.has(U.A.ipCountryCodeWithFallback),
        ev = X.intl.formatToPlainString(X.t["sBpy9/"], { planName: e_.name });
    eu && !eg
        ? (ev = X.intl.string(X.t.J5a0eb))
        : eu && eg
          ? (ev = "")
          : (0, F.ys)(e_.id) && (ev = F.Ay.getBillingReviewSubheader(null, e_));
    let eD = null != eo && eo.length > 0 && (ea === x.B || null === J) && es ? Y.fU.SELECT_PAYMENT_METHOD : void 0;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(Y.je, { paymentRestrictionBannerType: eD }),
            null != O &&
                (0, i.jsxs)("div", {
                    className: Z.Je,
                    children: [
                        (0, i.jsx)(u.m, {
                            size: "custom",
                            color: d.A.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20,
                        }),
                        (0, i.jsx)(c.E, { className: Z.CJ, variant: "text-sm/normal", children: O }),
                    ],
                }),
            eI &&
                (0, i.jsx)("div", {
                    className: Z.Ni,
                    children: (0, i.jsx)(E.w, {
                        type: "info",
                        children: (0, i.jsx)(c.E, { variant: "text-sm/medium", children: (0, P.Nn)() }),
                    }),
                }),
            er &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(w.P, { planSkuId: e_?.skuId, referralTrialOfferId: L }),
                        (0, i.jsx)(K.$p, {
                            disabled: V,
                            planOptions: ei,
                            selectedPlanId: t,
                            planGroup: n,
                            subscriptionPeriodEnd: en,
                            showTotal: !1,
                            priceOptions: eR,
                            handleClose: G,
                        }),
                        (0, i.jsx)(H.pK, {}),
                    ],
                }),
            !b && "" !== ev && (0, i.jsx)(h.D, { variant: "heading-md/semibold", className: Z.wx, children: ev }),
            eg &&
                null != et &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(W.A, {
                            defaultAnimationState: B.oA.LOOP,
                            giftStyle: et,
                            shouldAnimate: !0,
                            className: Z.Os,
                        }),
                        (0, i.jsx)($.Z, { giftRecipient: ee }),
                    ],
                }),
            eO,
            (0, i.jsxs)("div", {
                className: Z.LC,
                children: [
                    (0, i.jsx)(k.K, {
                        label: X.intl.string(b ? X.t["YH7B+D"] : X.t["mmDvV+"]),
                        handlePaymentSourceAdd: I,
                        isTrial: b,
                        isDiscount: M,
                        disabled: V,
                        hasEntitlements: eT,
                        eligiblePaymentGateways: eo,
                        shouldUseUnifiedCheckoutUI: !1,
                        paymentSourceDropdownClassName: a()({ [Z.E4]: ep }),
                        paymentSourceDropdownPrependOption:
                            eT && !b ? { label: X.intl.string(X.t.IGU7El), value: null } : null,
                    }),
                    null != eN ? (0, i.jsx)("div", { className: Z.QN, children: eN }) : null,
                    M
                        ? null
                        : (0, i.jsx)(m.f, {
                              currencies: eS.currencies,
                              className: Z.p2,
                              children: (0, i.jsx)(m.A, { ...eS }),
                          }),
                ],
            }),
            (0, i.jsx)(j.A, {
                isActive: N,
                ref: S,
                children: (0, i.jsx)(g.A, {
                    onChange: T,
                    forceShow: !0,
                    finePrint:
                        R ??
                        (0, i.jsx)(f.A, {
                            hide: b || M,
                            subscriptionPlan: e_,
                            renewalInvoice: eh,
                            isGift: eu,
                            paymentSourceType: J,
                            isEmbeddedIAP: z,
                            basePrice: (0, F.y8)(e_.id, !1, eu, eR),
                            willRelocateStoreCountry: null != eC,
                        }),
                    showPricingLink: e_.currency !== q.Yr.USD,
                    showWithdrawalWaiver: ey,
                    disabled: V,
                    isTrial: b && null == R,
                    isDiscount: M,
                    subscriptionPlan: e_,
                    isGift: eu,
                }),
            }),
        ],
    });
}
