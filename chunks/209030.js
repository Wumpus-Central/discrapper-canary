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
    R = n(699595),
    L = n(995835),
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
    J = n(285719),
    $ = n(788868),
    X = n(818348),
    Q = n(375708),
    ee = n(814304);
let et = (e) => {
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
            isEligibleForDiscount: L,
        } = (0, I.P5)(),
        { checkoutPaymentSources: O } = (0, P.t)(),
        { isGift: D, giftRecipient: w, selectedGiftStyle: U } = (0, T.Pv)(),
        Y = s ?? "",
        W = (0, o.bG)([G.A], () => G.A.get(Y), [Y]),
        V = W?.eligiblePaymentGateways,
        H = (0, N.vT)({ isTrial: r, isGift: D, selectedSkuId: s, startedPaymentFlowWithPaymentSources: C.current }),
        {
            subscriptionPlan: K,
            purchaseDisabled: Z,
            checkoutInvoicePreview: q,
            invoiceSummaryTypeWithPreview: J,
            proratedInvoicePreview: X,
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
                {
                    selectedSkuId: u,
                    contextMetadata: c,
                    setFetchCheckoutInvoicePreviewRequest: d,
                    setFetchRenewalInvoicePreviewRequest: p,
                    checkoutInvoicePreview: m,
                    checkoutInvoiceError: h,
                    renewalInvoicePreview: C,
                    renewalInvoiceError: A,
                } = (0, j.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    contextMetadata: e.contextMetadata,
                    setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                    setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    checkoutInvoiceError: e.checkoutInvoiceError,
                    renewalInvoicePreview: e.renewalInvoicePreview,
                    renewalInvoiceError: e.renewalInvoiceError,
                })),
                {
                    activeSubscription: y,
                    setPurchasePreviewError: E,
                    isEligibleForDiscount: P,
                    discountOffer: S,
                } = (0, I.P5)(),
                _ = (0, v.YJ)(S),
                { isGift: L } = (0, T.Pv)(),
                {
                    subscriptionPlan: O,
                    purchaseDisabled: D,
                    newItems: w,
                } = ((e) => {
                    let { selectedPlanId: t } = e,
                        n = (0, j.t4)((e) => e.purchaseState),
                        l = (0, o.bG)([b.A], () => b.A.get(t));
                    f()(null != l, "Missing plan");
                    let i = a.useMemo(() => [{ planId: l.id, quantity: 1 }], [l.id]),
                        r = n === x.h.PURCHASING || n === x.h.COMPLETED;
                    return { subscriptionPlan: l, purchaseState: n, purchaseDisabled: r, newItems: i };
                })({ selectedPlanId: t }),
                U = !0 === n.loaded,
                k = D || !U,
                Y = a.useMemo(
                    () =>
                        L
                            ? {
                                  type: "premium_one_time_gift_purchase_invoice",
                                  params: {
                                      paymentSourceId: n.paymentSourceId,
                                      skuId: u,
                                      subscriptionPlanId: t,
                                      currency: n.currency,
                                      preventFetch: k,
                                      loadId: c.loadId,
                                  },
                              }
                            : {
                                  type: "premium_checkout_invoice",
                                  params: {
                                      items: w,
                                      renewal: !1,
                                      preventFetch: k,
                                      applyEntitlements: !0,
                                      paymentSourceId: n.paymentSourceId,
                                      currency: n.currency,
                                      trialId: l,
                                      metadata: i ?? void 0,
                                  },
                              },
                    [w, L, k, n.paymentSourceId, n.currency, l, i, c.loadId, t, u],
                ),
                G = a.useMemo(
                    () =>
                        L
                            ? null
                            : {
                                  type: "premium_renewal_invoice",
                                  params: {
                                      subscriptionId: y?.id,
                                      items: w,
                                      renewal: !0,
                                      preventFetch: k,
                                      trialId: l,
                                      paymentSourceId: n.paymentSourceId,
                                      currency: n.currency,
                                      metadata: i ?? void 0,
                                  },
                              },
                    [L, k, w, l, i, y?.id, n.paymentSourceId, n.currency],
                );
            a.useEffect(() => {
                d(Y);
            }, [Y, d]),
                a.useEffect(() => {
                    p(G);
                }, [G, p]);
            let F = a.useMemo(() => (s && null != m ? m : null), [s, m]),
                { oneTimePurchaseNitroGiftInvoicePreview: B, proratedInvoicePreview: W } = a.useMemo(
                    () =>
                        L
                            ? { oneTimePurchaseNitroGiftInvoicePreview: m, proratedInvoicePreview: null }
                            : { oneTimePurchaseNitroGiftInvoicePreview: null, proratedInvoicePreview: m },
                    [L, m],
                ),
                [V, H] = (0, g.YV)({
                    items: null != _ ? [{ planId: _, quantity: 1 }] : [],
                    renewal: !1,
                    preventFetch: !P || null == _,
                    trialId: l,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    metadata: i,
                });
            (0, R.c)(V, P);
            let K = a.useMemo(() => h ?? A ?? H, [h, A, H]);
            a.useEffect(() => {
                E(K);
            }, [K, E]);
            let Z = a.useMemo(() => (null != W ? W.subscriptionPeriodEnd : void 0), [W]),
                q = a.useMemo(() => (0, N.UB)(r, W, O), [r, W, O]),
                z = a.useMemo(
                    () =>
                        (0, M.yf)({
                            error: K,
                            isGift: L,
                            oneTimePurchaseNitroGiftInvoicePreview: B,
                            trialInvoicePreview: F,
                            proratedInvoicePreview: W,
                            renewalInvoicePreview: C,
                            planSwitchLoading: q,
                        }),
                    [K, L, B, F, W, C, q],
                );
            return {
                checkoutInvoicePreview: m,
                invoiceSummaryTypeWithPreview: z,
                discountInvoicePreview: V,
                oneTimePurchaseNitroGiftInvoicePreview: B,
                trialInvoicePreview: F,
                proratedInvoicePreview: W,
                renewalInvoicePreview: C,
                purchaseDisabled: D,
                subscriptionPlan: O,
                invoiceError: K,
                subscriptionPeriodEnd: Z,
            };
        })({
            selectedPlanId: t,
            priceOptions: u,
            trialId: l,
            metadata: i,
            isInOneStepSubscriptionCheckout: H,
            isTrial: r,
        }),
        el = D && (0, F.Ik)(w),
        ea = u.paymentSourceId,
        ei = (0, k.g)(n, ea),
        er = (0, y.vg)("PremiumSubscriptionReview") ? (O?.find((e) => e.id === ea)?.relocationCountry ?? null) : null,
        { hasEntitlements: es, entitlements: eo } = (0, z.X)(K.id, D),
        eu = (0, B.J$)(u.paymentSourceId),
        ec = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        ed = !H && (ec.isFractionalPremiumActive || A) && $.JM.has(t),
        ep = a.useMemo(() => (0, B.Tm)({ skuId: s, isPremium: h, defaultPlanId: m }), [s, m, h]),
        em = a.useMemo(
            () => (es && null == ea ? Q.intl.format(Q.t["2wPRSF"], { months: eo.length }) : null),
            [es, ea, eo],
        );
    return {
        disabled: Z,
        activeSubscription: p,
        subscriptionPeriodEnd: en,
        plan: K,
        premiumPlanOptions: ep,
        checkoutInvoicePreview: q,
        invoiceSummaryTypeWithPreview: J,
        discountInvoicePreview: et,
        renewalInvoicePreview: ee,
        proratedInvoicePreview: X,
        isGift: D,
        isEmbeddedIAP: d,
        paymentSourceType: ei,
        giftRecipient: w,
        selectedGiftStyle: U,
        isInOneStepSubscriptionCheckout: H,
        shouldAllowPlanSelect: H && !_,
        hasPaymentSources: c,
        paymentSourceId: ea,
        eligiblePaymentGateways: V,
        inReverseTrial: A,
        fractionalPremiumInfo: ec,
        showFractionalPremiumBannerInInvoiceSummary: ed,
        isPrepaid: eu,
        isCustomGift: el,
        isPremium: h,
        isPremiumGroupPurchase: _,
        isEligibleForDiscount: L,
        hasEntitlements: es,
        entitlements: eo,
        paymentSourceOptionalWarningCopy: em,
        selectedSourceRelocationCountry: er,
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
            paymentSourceType: k,
            giftRecipient: G,
            selectedGiftStyle: F,
            subscriptionPeriodEnd: z,
            premiumPlanOptions: $,
            shouldAllowPlanSelect: en,
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
        } = et({ selectedPlanId: t, paymentSources: i, trialId: S, metadata: T, isTrial: N }),
        e_ = (0, j.t4)((e) => e.checkoutPriceOptions),
        ef = a.useMemo(() => (0, B.l6)(e_, ed?.checkoutContext?.available_plans), [e_, ed]),
        eT = (0, L.I)({ skuId: eo?.skuId, isGift: eu, className: ee.Gw });
    if (null != ec && ec.type === M.N$.LOADING)
        return (0, l.jsx)("div", { className: ee.zp, children: (0, l.jsx)(c.y, {}) });
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
        ex = s.M.EEA_COUNTRIES.has(Y.A.ipCountryCodeWithFallback),
        eN = Q.intl.formatToPlainString(Q.t["sBpy9/"], { planName: eo.name });
    eu && !eC
        ? (eN = Q.intl.string(Q.t.J5a0eb))
        : eu && eC
          ? (eN = "")
          : (0, B.ys)(eo.id) && (eN = B.Ay.getBillingReviewSubheader(null, eo));
    let eg = null != ei && ei.length > 0 && (null == ea || null === k) && el ? Z.fU.SELECT_PAYMENT_METHOD : void 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(O.k, { location: "PremiumSubscriptionReview", paymentSourceId: ea }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(Z.je, { paymentRestrictionBannerType: eg }),
                    null != f &&
                        (0, l.jsxs)("div", {
                            className: ee.Je,
                            children: [
                                (0, l.jsx)(d.m, {
                                    size: "custom",
                                    color: u.A.unsafe_rawColors.YELLOW_300.css,
                                    width: 20,
                                    height: 20,
                                }),
                                (0, l.jsx)(p.E, { className: ee.CJ, variant: "text-sm/normal", children: f }),
                            ],
                        }),
                    ey &&
                        (0, l.jsx)("div", {
                            className: ee.Ni,
                            children: (0, l.jsx)(m.w, {
                                type: "info",
                                children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, w.Nn)() }),
                            }),
                        }),
                    eT,
                    en &&
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(D.P, { planSkuId: eo?.skuId, referralTrialOfferId: x }),
                                (0, l.jsx)(q.$p, {
                                    disabled: b,
                                    planOptions: $,
                                    selectedPlanId: t,
                                    planGroup: n,
                                    subscriptionPeriodEnd: z,
                                    showTotal: !1,
                                    priceOptions: ef,
                                    handleClose: v,
                                }),
                                (0, l.jsx)(V.pK, {}),
                            ],
                        }),
                    !N &&
                        "" !== eN &&
                        (0, l.jsx)(h.D, { variant: "heading-md/semibold", className: ee.wx, children: eN }),
                    eC &&
                        null != F &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(K.A, {
                                    defaultAnimationState: W.oA.LOOP,
                                    giftStyle: F,
                                    shouldAnimate: !0,
                                    className: ee.Os,
                                }),
                                (0, l.jsx)(J.Z, { giftRecipient: G }),
                            ],
                        }),
                    eI,
                    (0, l.jsxs)("div", {
                        className: ee.LC,
                        children: [
                            (0, l.jsx)(U.K, {
                                label: Q.intl.string(N ? Q.t["YH7B+D"] : Q.t["mmDvV+"]),
                                handlePaymentSourceAdd: o,
                                isTrial: N,
                                isDiscount: g,
                                disabled: b,
                                hasEntitlements: eE,
                                eligiblePaymentGateways: ei,
                                shouldUseUnifiedCheckoutUI: !1,
                                paymentSourceDropdownClassName: r()({ [ee.E4]: eA }),
                                paymentSourceDropdownPrependOption:
                                    eE && !N ? { label: Q.intl.string(Q.t.IGU7El), value: null } : null,
                            }),
                            null != eP ? (0, l.jsx)("div", { className: ee.QN, children: eP }) : null,
                        ],
                    }),
                    (0, l.jsx)(H.A, {
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
                                    paymentSourceType: k,
                                    isEmbeddedIAP: R,
                                    basePrice: (0, B.y8)(eo.id, !1, eu, ef),
                                    willRelocateStoreCountry: null != eS,
                                }),
                            showPricingLink: eo.currency !== X.Yr.USD,
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
