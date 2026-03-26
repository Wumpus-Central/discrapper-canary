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
            displayCurrency: Y,
        } = (0, I.P5)(),
        { isGift: K, giftRecipient: $, selectedGiftStyle: z } = (0, A.Pv)(),
        q = (0, c.bG)([O.A], () => O.A.get(t));
    l()(null != q, "Missing plan");
    let Z = [{ planId: q.id, quantity: 1 }],
        X = o === T.h.PURCHASING || o === T.h.COMPLETED,
        Q = h ?? "",
        J = (0, c.bG)([D.A], () => D.A.get(Q), [Q]),
        ee = J?.eligiblePaymentGateways,
        [et, en] = (0, x.Kq)({
            items: Z,
            renewal: !1,
            preventFetch: M || K || X,
            applyEntitlements: !0,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            trialId: s,
            metadata: a,
        }),
        [er, ei] = (0, x.Kq)({
            subscriptionId: p?.id,
            items: Z,
            renewal: !0,
            preventFetch: K || X,
            trialId: s,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            metadata: a,
        }),
        [es, ea] = (0, x.Kq)({
            items: [{ planId: j.gD.PREMIUM_MONTH_TIER_2, quantity: 1 }],
            renewal: !0,
            preventFetch: !B,
            trialId: s,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            metadata: a,
        }),
        [eo, el] = (0, x.FP)({
            paymentSourceId: r.paymentSourceId,
            skuId: h,
            subscriptionPlanId: t,
            currency: r.currency,
            preventFetch: !K || X,
            loadId: b.loadId,
        }),
        eu = i.useMemo(() => {
            let e = K ? eo?.checkoutContext : et?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(g.A.createFromCheckoutContext);
        }, [K, et?.checkoutContext, eo?.checkoutContext]),
        ec = i.useRef(!1);
    i.useEffect(() => {
        if (eu.length > 0 && !ec.current) {
            ec.current = !0;
            let e = eu.find((e) => e.enabled) ?? null;
            null != e ? H(e.id) : H(null);
        }
    }, [eu, H]);
    let ed = K && (0, L.Ik)($),
        e_ = en ?? ei ?? ea ?? el;
    i.useEffect(() => {
        P(e_);
    }, [e_, P]);
    let ef = (0, c.bG)([C.A], () => C.A.enabled),
        ep = r.paymentSourceId,
        eh = (0, N.g)(n, ep),
        { hasEntitlements: em, entitlements: eE } = (0, V.X)(q.id, K),
        eg = (0, w.J$)(r.paymentSourceId),
        eA = (0, S.vT)({
            isTrial: _,
            isGift: K,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: v.current,
            inReverseTrial: M,
        }),
        [eI, eT] = i.useState(et?.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == eI && eT(et?.subscriptionPeriodEnd);
    }, [et?.subscriptionPeriodEnd, eI]);
    let eS = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        ey = !eA && eS.isFractionalPremiumActive && j.JM.has(t),
        ev = i.useMemo(
            () => (0, w.Tm)({ skuId: h, isPremium: y, multiMonthPlans: [], currentSubscription: p, defaultPlanId: m }),
            [h, p, m, y],
        ),
        eN = (0, S.UB)(eA, et, q),
        eC = i.useMemo(() => (_ && null != et ? et : M && null != er ? er : void 0), [M, _, et, er]);
    i.useEffect(() => {
        K ? R(eo) : R(et);
    }, [K, R, eo, et]);
    let eR = i.useMemo(
            () => ({
                label: W.intl.string(W.t["/AAR02"]),
                selectedCurrency: r.currency ?? Y,
                currencies: u,
                onChange: d,
            }),
            [r.currency, Y, u, d],
        ),
        eO = i.useMemo(
            () => (em && null == ep ? W.intl.format(W.t["2wPRSF"], { months: eE.length }) : null),
            [em, ep, eE],
        );
    return {
        disabled: X,
        activeSubscription: p,
        subscriptionPeriodEnd: eI,
        plan: q,
        premiumPlanOptions: ev,
        discountInvoicePreview: es,
        oneTimePurchaseNitroGiftInvoicePreview: eo,
        trialInvoicePreview: eC,
        proratedInvoicePreview: et,
        renewalInvoicePreview: er,
        error: e_,
        isGift: K,
        isEmbeddedIAP: f,
        paymentSourceType: eh,
        hidePersonalInformation: ef,
        giftRecipient: $,
        selectedGiftStyle: z,
        isInOneStepSubscriptionCheckout: eA,
        shouldAllowPlanSelect: eA && !F,
        hasPaymentSources: k,
        paymentSourceId: ep,
        eligiblePaymentGateways: ee,
        inReverseTrial: M,
        fractionalPremiumInfo: eS,
        planSwitchLoading: eN,
        showFractionalPremiumBannerInInvoiceSummary: ey,
        isPrepaid: eg,
        isCustomGift: ed,
        enablePremiumBrandRefresh: U,
        premiumBrandRefreshBackgroundClassName: G,
        isPremiumGroupPurchase: F,
        isEligibleForDiscount: B,
        discountInvoiceItems: B ? es?.invoiceItems : void 0,
        hasEntitlements: em,
        entitlements: eE,
        currencyDropdownProps: eR,
        checkoutPaymentSources: eu,
        paymentSourcesForDropdown: eu.length > 0 ? eu : Object.values(n),
        defaultPaymentSourceId: eu.find((e) => e.isDefault)?.id,
        paymentSourceOptionalWarningCopy: eO,
    };
};
function z(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            paymentSources: s,
            priceOptions: o,
            currencies: l,
            onCurrencyChange: c,
            onPaymentSourceChange: E,
            handlePaymentSourceAdd: g,
            setHasAcceptedTerms: A,
            legalTermsNodeRef: I,
            hasLegalTermsFlash: T,
            trialId: S,
            trialFooterMessageOverride: N,
            reviewWarningMessage: C,
            metadata: O,
            purchaseState: D,
            hideSubscriptionDetails: L,
            referralTrialOfferId: x,
            isTrial: V = !1,
            isDiscount: j = !1,
            handleClose: z,
        } = e,
        {
            activeSubscription: q,
            disabled: Z,
            isEmbeddedIAP: X,
            paymentSourceType: Q,
            hidePersonalInformation: J,
            giftRecipient: ee,
            selectedGiftStyle: et,
            subscriptionPeriodEnd: en,
            premiumPlanOptions: er,
            shouldAllowPlanSelect: ei,
            hasPaymentSources: es,
            paymentSourceId: ea,
            eligiblePaymentGateways: eo,
            inReverseTrial: el,
            fractionalPremiumInfo: eu,
            plan: ec,
            error: ed,
            isGift: e_,
            oneTimePurchaseNitroGiftInvoicePreview: ef,
            trialInvoicePreview: ep,
            proratedInvoicePreview: eh,
            renewalInvoicePreview: em,
            planSwitchLoading: eE,
            showFractionalPremiumBannerInInvoiceSummary: eg,
            isPrepaid: eA,
            isCustomGift: eI,
            enablePremiumBrandRefresh: eT,
            premiumBrandRefreshBackgroundClassName: eS,
            isPremiumGroupPurchase: ey,
            discountInvoiceItems: ev,
            hasEntitlements: eN,
            currencyDropdownProps: eC,
            paymentSourcesForDropdown: eR,
            defaultPaymentSourceId: eO,
            paymentSourceOptionalWarningCopy: eb,
        } = $({
            selectedPlanId: t,
            paymentSources: s,
            priceOptions: o,
            trialId: S,
            metadata: O,
            purchaseState: D,
            isTrial: V,
            currencies: l,
            onCurrencyChange: c,
        }),
        eD = (0, H.yf)({
            error: ed,
            isGift: e_,
            oneTimePurchaseNitroGiftInvoicePreview: ef,
            trialInvoicePreview: ep,
            proratedInvoicePreview: eh,
            renewalInvoicePreview: em,
            planSwitchLoading: eE,
        }),
        eL = e_ ? ef : eh,
        ew = i.useMemo(() => (0, w.l6)(o, eL?.checkoutContext?.available_plans), [o, eL]);
    if (null != eD && eD.type === H.N$.LOADING)
        return (0, r.jsx)("div", { className: K.zp, children: (0, r.jsx)(_.y$y, {}) });
    let eM = (0, r.jsx)(H.eb, {
            invoiceSummaryTypeWithPreview: eD,
            priceOptions: o,
            trialFooterMessageOverride: N,
            hideSubscriptionDetails: L,
            referralTrialOfferId: x,
            isTrial: V,
            inReverseTrial: el,
            fractionalPremiumInfo: eu,
            plan: ec,
            showFractionalPremiumBanner: eg,
            isPrepaid: eA,
            isCustomGift: eI,
            enablePremiumBrandRefresh: eT,
            premiumBrandRefreshBackgroundClassName: eS,
        }),
        ex = u.M.EEA_COUNTRIES.has(R.A.ipCountryCodeWithFallback),
        eP = W.intl.formatToPlainString(W.t["sBpy9/"], { planName: ec.name });
    e_ && !eI
        ? (eP = W.intl.string(W.t.J5a0eb))
        : e_ && eI
          ? (eP = "")
          : (0, w.ys)(ec.id) && (eP = w.Ay.getBillingReviewSubheader(null, ec));
    let ek = null != eo && eo.length > 0 && (ea === b.B || null === Q) && es ? G.fU.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(G.je, { paymentRestrictionBannerType: ek }),
            null != C &&
                (0, r.jsxs)("div", {
                    className: K.Je,
                    children: [
                        (0, r.jsx)(_.mir, {
                            size: "custom",
                            color: d.A.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20,
                        }),
                        (0, r.jsx)(_.Text, { className: K.CJ, variant: "text-sm/normal", children: C }),
                    ],
                }),
            ey &&
                (0, r.jsx)("div", {
                    className: K.Ni,
                    children: (0, r.jsx)(_.wx6, {
                        type: "info",
                        children: (0, r.jsx)(_.Text, { variant: "text-sm/medium", children: (0, v.Nn)() }),
                    }),
                }),
            ei &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(y.P, { planSkuId: ec?.skuId, referralTrialOfferId: x }),
                        (0, r.jsx)(F.$p, {
                            disabled: Z,
                            planOptions: er,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: t,
                            planGroup: n,
                            subscriptionPeriodEnd: en,
                            showTotal: !1,
                            discountInvoiceItems: ev,
                            priceOptions: ew,
                            handleClose: z,
                        }),
                        (0, r.jsx)(P.pK, {}),
                    ],
                }),
            el &&
                (0, r.jsx)(_.Heading, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: K.KB,
                    children: W.intl.format(W.t["7ZS2m1"], { trialEnd: q?.currentPeriodEnd }),
                }),
            !V && "" !== eP && (0, r.jsx)(_.Heading, { variant: "heading-md/semibold", className: K.wx, children: eP }),
            eI &&
                null != et &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(U.A, {
                            defaultAnimationState: M.oA.LOOP,
                            giftStyle: et,
                            shouldAnimate: !0,
                            className: K.Os,
                        }),
                        (0, r.jsx)(B.Z, { giftRecipient: ee }),
                    ],
                }),
            eM,
            (0, r.jsxs)("div", {
                className: K.LC,
                children: [
                    (0, r.jsx)(h.A, {
                        label: V ? W.intl.string(W.t["YH7B+D"]) : W.intl.string(W.t["mmDvV+"]),
                        paymentSources: eR,
                        selectedPaymentSourceId: ea,
                        defaultPaymentSourceId: eO,
                        prependOption: eN && !V ? { label: W.intl.string(W.t.IGU7El), value: null } : null,
                        onChange: E,
                        onPaymentSourceAdd: g,
                        hidePersonalInformation: J,
                        isTrial: V,
                        paymentGatewayRestrictions: eo,
                        className: a()({ [K.E4]: eT }),
                    }),
                    null != eb ? (0, r.jsx)("div", { className: K.QN, children: eb }) : null,
                    j
                        ? null
                        : (0, r.jsx)(f.f, {
                              currencies: eC.currencies,
                              className: K.p2,
                              children: (0, r.jsx)(f.A, { ...eC }),
                          }),
                ],
            }),
            (0, r.jsx)(k.A, {
                isActive: T,
                ref: I,
                children: (0, r.jsx)(m.A, {
                    onChange: A,
                    forceShow: !0,
                    finePrint:
                        (!el && N) ??
                        (0, r.jsx)(p.A, {
                            hide: V || j,
                            subscriptionPlan: ec,
                            renewalInvoice: em,
                            isGift: e_,
                            paymentSourceType: Q,
                            isEmbeddedIAP: X,
                            basePrice: (0, w.y8)(ec.id, !1, e_, ew),
                        }),
                    showPricingLink: ec.currency !== Y.Yr.USD,
                    showWithdrawalWaiver: ex,
                    disabled: Z,
                    isTrial: V && null == N,
                    inReverseTrial: el,
                    isDiscount: j,
                    subscriptionPlan: ec,
                    isGift: e_,
                }),
            }),
        ],
    });
}
