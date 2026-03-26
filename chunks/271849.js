"use strict";
n.d(t, { A: () => z, L: () => $ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(997101),
    c = n(311907),
    d = n(827734),
    _ = n(397927),
    f = n(821189),
    p = n(821891),
    h = n(637141),
    m = n(953689),
    E = n(531260),
    g = n(826469),
    A = n(937008),
    I = n(156312),
    T = n(566980),
    S = n(800471),
    y = n(104745),
    v = n(222707),
    N = n(216641),
    C = n(351906),
    R = n(615405),
    O = n(97352),
    b = n(79387),
    D = n(67480),
    L = n(45938),
    w = n(927578),
    M = n(242874),
    x = n(543767),
    P = n(735164),
    k = n(778307),
    U = n(75825),
    G = n(218075),
    F = n(446929),
    V = n(344159),
    B = n(285719),
    H = n(299301),
    j = n(788868),
    Y = n(818348),
    W = n(985018),
    K = n(110448);
let $ = (e) => {
    let {
            selectedPlanId: t,
            paymentSources: n,
            priceOptions: r,
            trialId: s,
            metadata: a,
            purchaseState: o,
            currencies: u,
            onCurrencyChange: d,
            isTrial: _ = !1,
        } = e,
        {
            isEmbeddedIAP: f,
            activeSubscription: p,
            selectedSkuId: h,
            defaultPlanId: m,
            isPremium: y,
            startedPaymentFlowWithPaymentSourcesRef: v,
            setInvoicePreview: R,
            contextMetadata: b,
            inReverseTrial: M,
            setPurchasePreviewError: P,
            hasPaymentSources: k,
            enablePremiumBrandRefresh: U,
            premiumBrandRefreshBackgroundClassName: G,
            isPremiumGroupPurchase: F,
            isEligibleForDiscount: B,
            setPaymentSourceId: H,
        } = (0, I.P5)(),
        { isGift: Y, giftRecipient: K, selectedGiftStyle: $ } = (0, A.Pv)(),
        z = (0, c.bG)([O.A], () => O.A.get(t));
    l()(null != z, "Missing plan");
    let q = [{ planId: z.id, quantity: 1 }],
        Z = o === T.h.PURCHASING || o === T.h.COMPLETED,
        X = h ?? "",
        Q = (0, c.bG)([D.A], () => D.A.get(X), [X]),
        J = Q?.eligiblePaymentGateways,
        [ee, et] = (0, x.Kq)({
            items: q,
            renewal: !1,
            preventFetch: M || Y || Z,
            applyEntitlements: !0,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            trialId: s,
            metadata: a,
        }),
        [en, er] = (0, x.Kq)({
            subscriptionId: p?.id,
            items: q,
            renewal: !0,
            preventFetch: Y || Z,
            trialId: s,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            metadata: a,
        }),
        [ei, es] = (0, x.Kq)({
            items: [{ planId: j.gD.PREMIUM_MONTH_TIER_2, quantity: 1 }],
            renewal: !0,
            preventFetch: !B,
            trialId: s,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            metadata: a,
        }),
        [ea, eo] = (0, x.FP)({
            paymentSourceId: r.paymentSourceId,
            skuId: h,
            subscriptionPlanId: t,
            currency: r.currency,
            preventFetch: !Y || Z,
            loadId: b.loadId,
        }),
        el = i.useMemo(() => {
            let e = Y ? ea?.checkoutContext : ee?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(g.A.createFromCheckoutContext);
        }, [Y, ee?.checkoutContext, ea?.checkoutContext]),
        eu = i.useRef(!1);
    i.useEffect(() => {
        if (el.length > 0 && !eu.current) {
            eu.current = !0;
            let e = el.find((e) => e.enabled) ?? null;
            null != e ? H(e.id) : H(null);
        }
    }, [el, H]);
    let ec = Y && (0, L.Ik)(K),
        ed = et ?? er ?? es ?? eo;
    i.useEffect(() => {
        P(ed);
    }, [ed, P]);
    let e_ = (0, c.bG)([C.A], () => C.A.enabled),
        ef = r.paymentSourceId,
        ep = (0, N.g)(n, ef),
        { hasEntitlements: eh, entitlements: em } = (0, V.X)(z.id, Y),
        eE = (0, w.J$)(r.paymentSourceId),
        eg = (0, S.vT)({
            isTrial: _,
            isGift: Y,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: v.current,
            inReverseTrial: M,
        }),
        [eA, eI] = i.useState(ee?.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == eA && eI(ee?.subscriptionPeriodEnd);
    }, [ee?.subscriptionPeriodEnd, eA]);
    let eT = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        eS = !eg && eT.isFractionalPremiumActive && j.JM.has(t),
        ey = i.useMemo(
            () => (0, w.Tm)({ skuId: h, isPremium: y, multiMonthPlans: [], currentSubscription: p, defaultPlanId: m }),
            [h, p, m, y],
        ),
        ev = (0, S.UB)(eg, ee, z),
        eN = i.useMemo(() => (_ && null != ee ? ee : M && null != en ? en : void 0), [M, _, ee, en]);
    i.useEffect(() => {
        Y ? R(ea) : R(ee);
    }, [Y, R, ea, ee]);
    let eC = i.useMemo(
            () => ({ label: W.intl.string(W.t["/AAR02"]), selectedCurrency: r.currency, currencies: u, onChange: d }),
            [r.currency, u, d],
        ),
        eR = i.useMemo(
            () => (eh && null == ef ? W.intl.format(W.t["2wPRSF"], { months: em.length }) : null),
            [eh, ef, em],
        );
    return {
        disabled: Z,
        activeSubscription: p,
        subscriptionPeriodEnd: eA,
        plan: z,
        premiumPlanOptions: ey,
        discountInvoicePreview: ei,
        oneTimePurchaseNitroGiftInvoicePreview: ea,
        trialInvoicePreview: eN,
        proratedInvoicePreview: ee,
        renewalInvoicePreview: en,
        error: ed,
        isGift: Y,
        isEmbeddedIAP: f,
        paymentSourceType: ep,
        hidePersonalInformation: e_,
        giftRecipient: K,
        selectedGiftStyle: $,
        isInOneStepSubscriptionCheckout: eg,
        shouldAllowPlanSelect: eg && !F,
        hasPaymentSources: k,
        paymentSourceId: ef,
        eligiblePaymentGateways: J,
        inReverseTrial: M,
        fractionalPremiumInfo: eT,
        planSwitchLoading: ev,
        showFractionalPremiumBannerInInvoiceSummary: eS,
        isPrepaid: eE,
        isCustomGift: ec,
        enablePremiumBrandRefresh: U,
        premiumBrandRefreshBackgroundClassName: G,
        isPremiumGroupPurchase: F,
        isEligibleForDiscount: B,
        discountInvoiceItems: B ? ei?.invoiceItems : void 0,
        hasEntitlements: eh,
        entitlements: em,
        currencyDropdownProps: eC,
        checkoutPaymentSources: el,
        paymentSourcesForDropdown: el.length > 0 ? el : Object.values(n),
        defaultPaymentSourceId: el.find((e) => e.isDefault)?.id,
        paymentSourceOptionalWarningCopy: eR,
    };
};
function z(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            paymentSources: i,
            priceOptions: s,
            currencies: o,
            onCurrencyChange: l,
            onPaymentSourceChange: c,
            handlePaymentSourceAdd: E,
            setHasAcceptedTerms: g,
            legalTermsNodeRef: A,
            hasLegalTermsFlash: I,
            trialId: T,
            trialFooterMessageOverride: S,
            reviewWarningMessage: N,
            metadata: C,
            purchaseState: O,
            hideSubscriptionDetails: D,
            referralTrialOfferId: L,
            isTrial: x = !1,
            isDiscount: V = !1,
            handleClose: j,
        } = e,
        {
            activeSubscription: z,
            disabled: q,
            isEmbeddedIAP: Z,
            paymentSourceType: X,
            hidePersonalInformation: Q,
            giftRecipient: J,
            selectedGiftStyle: ee,
            subscriptionPeriodEnd: et,
            premiumPlanOptions: en,
            shouldAllowPlanSelect: er,
            hasPaymentSources: ei,
            paymentSourceId: es,
            eligiblePaymentGateways: ea,
            inReverseTrial: eo,
            fractionalPremiumInfo: el,
            plan: eu,
            error: ec,
            isGift: ed,
            oneTimePurchaseNitroGiftInvoicePreview: e_,
            trialInvoicePreview: ef,
            proratedInvoicePreview: ep,
            renewalInvoicePreview: eh,
            planSwitchLoading: em,
            showFractionalPremiumBannerInInvoiceSummary: eE,
            isPrepaid: eg,
            isCustomGift: eA,
            enablePremiumBrandRefresh: eI,
            premiumBrandRefreshBackgroundClassName: eT,
            isPremiumGroupPurchase: eS,
            discountInvoiceItems: ey,
            hasEntitlements: ev,
            currencyDropdownProps: eN,
            paymentSourcesForDropdown: eC,
            defaultPaymentSourceId: eR,
            paymentSourceOptionalWarningCopy: eO,
        } = $({
            selectedPlanId: t,
            paymentSources: i,
            priceOptions: s,
            trialId: T,
            metadata: C,
            purchaseState: O,
            isTrial: x,
            currencies: o,
            onCurrencyChange: l,
        }),
        eb = (0, H.yf)({
            error: ec,
            isGift: ed,
            oneTimePurchaseNitroGiftInvoicePreview: e_,
            trialInvoicePreview: ef,
            proratedInvoicePreview: ep,
            renewalInvoicePreview: eh,
            planSwitchLoading: em,
        });
    if (null != eb && eb.type === H.N$.LOADING)
        return (0, r.jsx)("div", { className: K.zp, children: (0, r.jsx)(_.y$y, {}) });
    let eD = (0, r.jsx)(H.eb, {
            invoiceSummaryTypeWithPreview: eb,
            priceOptions: s,
            trialFooterMessageOverride: S,
            hideSubscriptionDetails: D,
            referralTrialOfferId: L,
            isTrial: x,
            inReverseTrial: eo,
            fractionalPremiumInfo: el,
            plan: eu,
            showFractionalPremiumBanner: eE,
            isPrepaid: eg,
            isCustomGift: eA,
            enablePremiumBrandRefresh: eI,
            premiumBrandRefreshBackgroundClassName: eT,
        }),
        eL = u.M.EEA_COUNTRIES.has(R.A.ipCountryCodeWithFallback),
        ew = W.intl.formatToPlainString(W.t["sBpy9/"], { planName: eu.name });
    ed && !eA
        ? (ew = W.intl.string(W.t.J5a0eb))
        : ed && eA
          ? (ew = "")
          : (0, w.ys)(eu.id) && (ew = w.Ay.getBillingReviewSubheader(null, eu));
    let eM = null != ea && ea.length > 0 && (es === b.B || null === X) && ei ? G.fU.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(G.je, { paymentRestrictionBannerType: eM }),
            null != N &&
                (0, r.jsxs)("div", {
                    className: K.Je,
                    children: [
                        (0, r.jsx)(_.mir, {
                            size: "custom",
                            color: d.A.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20,
                        }),
                        (0, r.jsx)(_.Text, { className: K.CJ, variant: "text-sm/normal", children: N }),
                    ],
                }),
            eS &&
                (0, r.jsx)("div", {
                    className: K.Ni,
                    children: (0, r.jsx)(_.wx6, {
                        type: "info",
                        children: (0, r.jsx)(_.Text, { variant: "text-sm/medium", children: (0, v.Nn)() }),
                    }),
                }),
            er &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(y.P, { planSkuId: eu?.skuId, referralTrialOfferId: L }),
                        (0, r.jsx)(F.$p, {
                            disabled: q,
                            planOptions: en,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: t,
                            planGroup: n,
                            subscriptionPeriodEnd: et,
                            showTotal: !1,
                            discountInvoiceItems: ey,
                            handleClose: j,
                        }),
                        (0, r.jsx)(P.pK, {}),
                    ],
                }),
            eo &&
                (0, r.jsx)(_.Heading, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: K.KB,
                    children: W.intl.format(W.t["7ZS2m1"], { trialEnd: z?.currentPeriodEnd }),
                }),
            !x && "" !== ew && (0, r.jsx)(_.Heading, { variant: "heading-md/semibold", className: K.wx, children: ew }),
            eA &&
                null != ee &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(U.A, {
                            defaultAnimationState: M.oA.LOOP,
                            giftStyle: ee,
                            shouldAnimate: !0,
                            className: K.Os,
                        }),
                        (0, r.jsx)(B.Z, { giftRecipient: J }),
                    ],
                }),
            eD,
            (0, r.jsxs)("div", {
                className: K.LC,
                children: [
                    (0, r.jsx)(h.A, {
                        label: x ? W.intl.string(W.t["YH7B+D"]) : W.intl.string(W.t["mmDvV+"]),
                        paymentSources: eC,
                        selectedPaymentSourceId: es,
                        defaultPaymentSourceId: eR,
                        prependOption: ev && !x ? { label: W.intl.string(W.t.IGU7El), value: null } : null,
                        onChange: c,
                        onPaymentSourceAdd: E,
                        hidePersonalInformation: Q,
                        isTrial: x,
                        paymentGatewayRestrictions: ea,
                        className: a()({ [K.E4]: eI }),
                    }),
                    null != eO ? (0, r.jsx)("div", { className: K.QN, children: eO }) : null,
                    V
                        ? null
                        : (0, r.jsx)(f.f, {
                              currencies: eN.currencies,
                              className: K.p2,
                              children: (0, r.jsx)(f.A, { ...eN }),
                          }),
                ],
            }),
            (0, r.jsx)(k.A, {
                isActive: I,
                ref: A,
                children: (0, r.jsx)(m.A, {
                    onChange: g,
                    forceShow: !0,
                    finePrint:
                        (!eo && S) ??
                        (0, r.jsx)(p.A, {
                            hide: x || V,
                            subscriptionPlan: eu,
                            renewalInvoice: eh,
                            isGift: ed,
                            paymentSourceType: X,
                            isEmbeddedIAP: Z,
                            basePrice: (0, w.y8)(eu.id, !1, ed, s),
                        }),
                    showPricingLink: eu.currency !== Y.Yr.USD,
                    showWithdrawalWaiver: eL,
                    disabled: q,
                    isTrial: x && null == S,
                    inReverseTrial: eo,
                    isDiscount: V,
                    subscriptionPlan: eu,
                    isGift: ed,
                }),
            }),
        ],
    });
}
