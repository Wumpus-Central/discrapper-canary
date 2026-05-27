n.d(t, { A: () => ei, L: () => el });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
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
    f = n(463376),
    _ = n(284009),
    T = n.n(_),
    I = n(937008),
    x = n(834252),
    N = n(566980),
    g = n(800471),
    v = n(543767),
    M = n(410516),
    b = n(299301),
    j = n(97352),
    R = n(722847),
    L = n(699595),
    O = n(995835),
    D = n(349786),
    w = n(71867),
    U = n(222707),
    k = n(421094),
    G = n(216641),
    Y = n(615405),
    F = n(67480),
    B = n(45938),
    W = n(428262),
    V = n(242874),
    H = n(881489),
    K = n(735164),
    Z = n(778307),
    q = n(75825),
    z = n(218075),
    J = n(361597),
    $ = n(344159),
    X = n(285719),
    Q = n(788868),
    ee = n(818348),
    et = n(375708),
    en = n(814304);
let el = (e) => {
    let { selectedPlanId: t, paymentSources: n, trialId: l, metadata: r, isTrial: a = !1 } = e,
        { selectedSkuId: s, priceOptions: u } = (0, R.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { hasPaymentSources: c } = (0, S.jm)(),
        {
            isEmbeddedIAP: d,
            activeSubscription: p,
            defaultPlanId: m,
            startedPaymentFlowWithPaymentSourcesRef: h,
        } = (0, x.P5)(),
        { isPremium: C, isPremiumGroupPurchase: A, isEligibleForDiscount: _ } = (0, f.i)(),
        { checkoutPaymentSources: O } = (0, P.t)(),
        { isGift: D, giftRecipient: w, selectedGiftStyle: U } = (0, I.Pv)(),
        k = (0, H.ds)() && !D,
        Y = s ?? "",
        V = (0, o.bG)([F.A], () => F.A.get(Y), [Y]),
        K = V?.eligiblePaymentGateways,
        Z = (0, g.vT)({ isTrial: a, isGift: D, selectedSkuId: s, startedPaymentFlowWithPaymentSources: h.current }),
        {
            subscriptionPlan: q,
            purchaseDisabled: z,
            checkoutInvoicePreview: J,
            invoiceSummaryTypeWithPreview: X,
            proratedInvoicePreview: ee,
            renewalInvoicePreview: en,
            discountInvoicePreview: el,
            subscriptionPeriodEnd: ei,
        } = ((e) => {
            let {
                    selectedPlanId: t,
                    priceOptions: n,
                    trialId: l,
                    metadata: r,
                    isInOneStepSubscriptionCheckout: a = !1,
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
                } = (0, R.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    contextMetadata: e.contextMetadata,
                    setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                    setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    checkoutInvoiceError: e.checkoutInvoiceError,
                    renewalInvoicePreview: e.renewalInvoicePreview,
                    renewalInvoiceError: e.renewalInvoiceError,
                })),
                { activeSubscription: y, setPurchasePreviewError: E } = (0, x.P5)(),
                { isEligibleForDiscount: P, discountOffer: S } = (0, f.i)(),
                _ = (0, M.YJ)(S),
                { isGift: O } = (0, I.Pv)(),
                {
                    subscriptionPlan: D,
                    purchaseDisabled: w,
                    newItems: U,
                } = ((e) => {
                    let { selectedPlanId: t } = e,
                        n = (0, R.t4)((e) => e.purchaseState),
                        l = (0, o.bG)([j.A], () => j.A.get(t));
                    T()(null != l, "Missing plan");
                    let r = i.useMemo(() => [{ planId: l.id, quantity: 1 }], [l.id]),
                        a = n === N.h.PURCHASING || n === N.h.COMPLETED;
                    return { subscriptionPlan: l, purchaseState: n, purchaseDisabled: a, newItems: r };
                })({ selectedPlanId: t }),
                k = !0 === n.loaded,
                G = w || !k,
                Y = i.useMemo(
                    () =>
                        O
                            ? {
                                  type: "premium_one_time_gift_purchase_invoice",
                                  params: {
                                      paymentSourceId: n.paymentSourceId,
                                      skuId: u,
                                      subscriptionPlanId: t,
                                      currency: n.currency,
                                      preventFetch: G,
                                      loadId: c.loadId,
                                  },
                              }
                            : {
                                  type: "premium_checkout_invoice",
                                  params: {
                                      items: U,
                                      renewal: !1,
                                      preventFetch: G,
                                      applyEntitlements: !0,
                                      paymentSourceId: n.paymentSourceId,
                                      currency: n.currency,
                                      trialId: l,
                                      metadata: r ?? void 0,
                                  },
                              },
                    [U, O, G, n.paymentSourceId, n.currency, l, r, c.loadId, t, u],
                ),
                F = i.useMemo(
                    () =>
                        O
                            ? null
                            : {
                                  type: "premium_renewal_invoice",
                                  params: {
                                      subscriptionId: y?.id,
                                      items: U,
                                      renewal: !0,
                                      preventFetch: G,
                                      trialId: l,
                                      paymentSourceId: n.paymentSourceId,
                                      currency: n.currency,
                                      metadata: r ?? void 0,
                                  },
                              },
                    [O, G, U, l, r, y?.id, n.paymentSourceId, n.currency],
                );
            i.useEffect(() => {
                d(Y);
            }, [Y, d]),
                i.useEffect(() => {
                    p(F);
                }, [F, p]);
            let B = i.useMemo(() => (s && null != m ? m : null), [s, m]),
                { oneTimePurchaseNitroGiftInvoicePreview: W, proratedInvoicePreview: V } = i.useMemo(
                    () =>
                        O
                            ? { oneTimePurchaseNitroGiftInvoicePreview: m, proratedInvoicePreview: null }
                            : { oneTimePurchaseNitroGiftInvoicePreview: null, proratedInvoicePreview: m },
                    [O, m],
                ),
                [H, K] = (0, v.YV)({
                    items: null != _ ? [{ planId: _, quantity: 1 }] : [],
                    renewal: !1,
                    preventFetch: !P || null == _ || !k,
                    trialId: l,
                    paymentSourceId: n.paymentSourceId,
                    currency: n.currency,
                    metadata: r,
                });
            (0, L.c)(H, P);
            let Z = i.useMemo(() => h ?? A ?? K, [h, A, K]);
            i.useEffect(() => {
                E(Z);
            }, [Z, E]);
            let q = i.useMemo(() => (null != V ? V.subscriptionPeriodEnd : void 0), [V]),
                z = i.useMemo(() => (0, g.UB)(a, V, D), [a, V, D]),
                J = i.useMemo(
                    () =>
                        (0, b.yf)({
                            error: Z,
                            isGift: O,
                            oneTimePurchaseNitroGiftInvoicePreview: W,
                            trialInvoicePreview: B,
                            proratedInvoicePreview: V,
                            renewalInvoicePreview: C,
                            planSwitchLoading: z,
                        }),
                    [Z, O, W, B, V, C, z],
                );
            return {
                checkoutInvoicePreview: m,
                invoiceSummaryTypeWithPreview: J,
                discountInvoicePreview: H,
                oneTimePurchaseNitroGiftInvoicePreview: W,
                trialInvoicePreview: B,
                proratedInvoicePreview: V,
                renewalInvoicePreview: C,
                purchaseDisabled: w,
                subscriptionPlan: D,
                invoiceError: Z,
                subscriptionPeriodEnd: q,
            };
        })({
            selectedPlanId: t,
            priceOptions: u,
            trialId: l,
            metadata: r,
            isInOneStepSubscriptionCheckout: Z,
            isTrial: a,
        }),
        er = D && (0, B.Ik)(w),
        ea = u.paymentSourceId,
        es = (0, G.g)(n, ea),
        eo = (0, y.vg)("PremiumSubscriptionReview") ? (O?.find((e) => e.id === ea)?.relocationCountry ?? null) : null,
        { hasEntitlements: eu, entitlements: ec } = (0, $.X)(q.id, D),
        ed = (0, W.J$)(u.paymentSourceId),
        ep = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        em = !Z && (ep.isFractionalPremiumActive || k) && Q.JM.has(t),
        eh = i.useMemo(() => (0, W.Tm)({ skuId: s, isPremium: C, defaultPlanId: m }), [s, m, C]),
        eC = i.useMemo(
            () => (eu && null == ea ? et.intl.format(et.t["2wPRSF"], { months: ec.length }) : null),
            [eu, ea, ec],
        );
    return {
        disabled: z,
        activeSubscription: p,
        subscriptionPeriodEnd: ei,
        plan: q,
        premiumPlanOptions: eh,
        checkoutInvoicePreview: J,
        invoiceSummaryTypeWithPreview: X,
        discountInvoicePreview: el,
        renewalInvoicePreview: en,
        proratedInvoicePreview: ee,
        isGift: D,
        isEmbeddedIAP: d,
        paymentSourceType: es,
        giftRecipient: w,
        selectedGiftStyle: U,
        isInOneStepSubscriptionCheckout: Z,
        shouldAllowPlanSelect: Z && !A,
        hasPaymentSources: c,
        paymentSourceId: ea,
        eligiblePaymentGateways: K,
        inReverseTrial: k,
        fractionalPremiumInfo: ep,
        showFractionalPremiumBannerInInvoiceSummary: em,
        isPrepaid: ed,
        isCustomGift: er,
        isPremium: C,
        isPremiumGroupPurchase: A,
        isEligibleForDiscount: _,
        hasEntitlements: eu,
        entitlements: ec,
        paymentSourceOptionalWarningCopy: eC,
        selectedSourceRelocationCountry: eo,
    };
};
function ei(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            paymentSources: r,
            handlePaymentSourceAdd: o,
            setHasAcceptedTerms: y,
            legalTermsNodeRef: E,
            hasLegalTermsFlash: P,
            trialId: S,
            trialFooterMessageOverride: f,
            reviewWarningMessage: _,
            metadata: T,
            hideSubscriptionDetails: I,
            referralTrialOfferId: x,
            isTrial: N = !1,
            isDiscount: g = !1,
            handleClose: v,
        } = e,
        {
            disabled: M,
            isEmbeddedIAP: j,
            paymentSourceType: L,
            giftRecipient: G,
            selectedGiftStyle: F,
            subscriptionPeriodEnd: B,
            premiumPlanOptions: H,
            shouldAllowPlanSelect: $,
            hasPaymentSources: Q,
            paymentSourceId: ei,
            eligiblePaymentGateways: er,
            inReverseTrial: ea,
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
        } = el({ selectedPlanId: t, paymentSources: r, trialId: S, metadata: T, isTrial: N }),
        ef = (0, R.t4)((e) => e.checkoutPriceOptions),
        e_ = i.useMemo(() => (0, W.l6)(ef, ed?.checkoutContext?.available_plans), [ef, ed]),
        eT = (0, O.I)({ skuId: eo?.skuId, isGift: eu, className: en.Gw });
    if (null != ec && ec.type === b.N$.LOADING)
        return (0, l.jsx)("div", { className: en.zp, children: (0, l.jsx)(c.y, {}) });
    let eI = (0, l.jsx)(b.eb, {
            invoiceSummaryTypeWithPreview: ec,
            priceOptions: ef,
            trialFooterMessageOverride: f,
            hideSubscriptionDetails: I,
            referralTrialOfferId: x,
            isTrial: N,
            inReverseTrial: ea,
            fractionalPremiumInfo: es,
            plan: eo,
            showFractionalPremiumBanner: em,
            isPrepaid: eh,
            isCustomGift: eC,
            enablePremiumBrandRefresh: eA,
        }),
        ex = s.M.EEA_COUNTRIES.has(Y.A.ipCountryCodeWithFallback),
        eN = et.intl.formatToPlainString(et.t["sBpy9/"], { planName: eo.name });
    eu && !eC
        ? (eN = et.intl.string(et.t.J5a0eb))
        : eu && eC
          ? (eN = "")
          : (0, W.ys)(eo.id) && (eN = W.Ay.getBillingReviewSubheader(null, eo));
    let eg = null != er && er.length > 0 && (null == ei || null === L) && Q ? z.fU.SELECT_PAYMENT_METHOD : void 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(D.k, { location: "PremiumSubscriptionReview", paymentSourceId: ei }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(z.je, { paymentRestrictionBannerType: eg }),
                    null != _ &&
                        (0, l.jsxs)("div", {
                            className: en.Je,
                            children: [
                                (0, l.jsx)(d.m, {
                                    size: "custom",
                                    color: u.A.unsafe_rawColors.YELLOW_300.css,
                                    width: 20,
                                    height: 20,
                                }),
                                (0, l.jsx)(p.E, { className: en.CJ, variant: "text-sm/normal", children: _ }),
                            ],
                        }),
                    ey &&
                        (0, l.jsx)("div", {
                            className: en.Ni,
                            children: (0, l.jsx)(m.w, {
                                type: "info",
                                children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, U.Nn)() }),
                            }),
                        }),
                    eT,
                    $ &&
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(w.P, { planSkuId: eo?.skuId, referralTrialOfferId: x }),
                                (0, l.jsx)(J.$p, {
                                    disabled: M,
                                    planOptions: H,
                                    selectedPlanId: t,
                                    planGroup: n,
                                    subscriptionPeriodEnd: B,
                                    showTotal: !1,
                                    priceOptions: e_,
                                    handleClose: v,
                                }),
                                (0, l.jsx)(K.pK, {}),
                            ],
                        }),
                    !N &&
                        "" !== eN &&
                        (0, l.jsx)(h.D, { variant: "heading-md/semibold", className: en.wx, children: eN }),
                    eC &&
                        null != F &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(q.A, {
                                    defaultAnimationState: V.oA.LOOP,
                                    giftStyle: F,
                                    shouldAnimate: !0,
                                    className: en.Os,
                                }),
                                (0, l.jsx)(X.Z, { giftRecipient: G }),
                            ],
                        }),
                    eI,
                    (0, l.jsxs)("div", {
                        className: en.LC,
                        children: [
                            (0, l.jsx)(k.K, {
                                label: et.intl.string(N ? et.t["YH7B+D"] : et.t["mmDvV+"]),
                                handlePaymentSourceAdd: o,
                                isTrial: N,
                                isDiscount: g,
                                disabled: M,
                                hasEntitlements: eE,
                                eligiblePaymentGateways: er,
                                shouldUseUnifiedCheckoutUI: !1,
                                paymentSourceDropdownClassName: a()({ [en.E4]: eA }),
                                paymentSourceDropdownPrependOption:
                                    eE && !N ? { label: et.intl.string(et.t.IGU7El), value: null } : null,
                            }),
                            null != eP ? (0, l.jsx)("div", { className: en.QN, children: eP }) : null,
                        ],
                    }),
                    (0, l.jsx)(Z.A, {
                        isActive: P,
                        ref: E,
                        children: (0, l.jsx)(A.A, {
                            onChange: y,
                            forceShow: !0,
                            finePrint:
                                f ??
                                (0, l.jsx)(C.A, {
                                    hide: N || g,
                                    subscriptionPlan: eo,
                                    renewalInvoice: ep,
                                    isGift: eu,
                                    paymentSourceType: L,
                                    isEmbeddedIAP: j,
                                    basePrice: (0, W.y8)(eo.id, !1, eu, e_),
                                    willRelocateStoreCountry: null != eS,
                                }),
                            showPricingLink: eo.currency !== ee.Yr.USD,
                            showWithdrawalWaiver: ex,
                            disabled: M,
                            isTrial: N && null == f,
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
