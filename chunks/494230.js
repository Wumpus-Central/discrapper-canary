"use strict";
n.d(t, { A: () => z, L: () => K });
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
    g = n(937008),
    A = n(156312),
    I = n(566980),
    T = n(800471),
    S = n(104745),
    y = n(222707),
    v = n(216641),
    N = n(351906),
    C = n(615405),
    b = n(97352),
    R = n(79387),
    O = n(67480),
    D = n(45938),
    L = n(927578),
    w = n(242874),
    x = n(543767),
    M = n(735164),
    P = n(778307),
    k = n(75825),
    U = n(218075),
    G = n(446929),
    F = n(344159),
    V = n(285719),
    B = n(299301),
    H = n(788868),
    j = n(818348),
    Y = n(985018),
    W = n(982571);
let K = (e) => {
    let {
            selectedPlanId: t,
            paymentSources: n,
            priceOptions: r,
            trialId: s,
            metadata: a,
            purchaseState: o,
            isTrial: u = !1,
        } = e,
        {
            isEmbeddedIAP: d,
            activeSubscription: _,
            selectedSkuId: f,
            defaultPlanId: p,
            isPremium: h,
            startedPaymentFlowWithPaymentSourcesRef: m,
            setInvoicePreview: S,
            contextMetadata: y,
            inReverseTrial: C,
            setPurchasePreviewError: R,
            hasPaymentSources: w,
            enablePremiumBrandRefresh: M,
            premiumBrandRefreshBackgroundClassName: P,
            isPremiumGroupPurchase: k,
            isEligibleForDiscount: U,
        } = (0, A.P5)(),
        { isGift: G, giftRecipient: V, selectedGiftStyle: B } = (0, g.Pv)(),
        j = (0, c.bG)([b.A], () => b.A.get(t));
    l()(null != j, "Missing plan");
    let Y = [{ planId: j.id, quantity: 1 }],
        W = o === I.h.PURCHASING || o === I.h.COMPLETED,
        K = f ?? "",
        z = (0, c.bG)([O.A], () => O.A.get(K), [K]),
        $ = z?.eligiblePaymentGateways,
        [q, Z] = (0, x.Kq)({
            items: Y,
            renewal: !1,
            preventFetch: C || G || W,
            applyEntitlements: !0,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            trialId: s,
            metadata: a,
        }),
        [X, Q] = (0, x.Kq)({
            subscriptionId: _?.id,
            items: Y,
            renewal: !0,
            preventFetch: G || W,
            trialId: s,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            metadata: a,
        }),
        [J, ee] = (0, x.Kq)({
            items: [{ planId: H.gD.PREMIUM_MONTH_TIER_2, quantity: 1 }],
            renewal: !0,
            preventFetch: !U,
            trialId: s,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            metadata: a,
        }),
        [et, en] = (0, x.FP)({
            paymentSourceId: r.paymentSourceId,
            skuId: f,
            subscriptionPlanId: t,
            currency: r.currency,
            preventFetch: !G || W,
            loadId: y.loadId,
        }),
        er = G && (0, D.Ik)(V),
        ei = Z ?? Q ?? ee ?? en;
    i.useEffect(() => {
        R(ei);
    }, [ei, R]);
    let es = (0, c.bG)([N.A], () => N.A.enabled),
        ea = r.paymentSourceId,
        eo = (0, v.g)(n, ea),
        { hasEntitlements: el, entitlements: eu } = (0, F.X)(j.id, G),
        ec = (0, L.J$)(r.paymentSourceId),
        ed = (0, T.vT)({
            isTrial: u,
            isGift: G,
            selectedSkuId: f,
            startedPaymentFlowWithPaymentSources: m.current,
            inReverseTrial: C,
        }),
        [e_, ef] = i.useState(q?.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == e_ && ef(q?.subscriptionPeriodEnd);
    }, [q?.subscriptionPeriodEnd, e_]);
    let ep = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        eh = !ed && ep.isFractionalPremiumActive && H.JM.has(t),
        em = i.useMemo(
            () => (0, L.Tm)({ skuId: f, isPremium: h, multiMonthPlans: [], currentSubscription: _, defaultPlanId: p }),
            [f, _, p, h],
        ),
        eE = (0, T.UB)(ed, q, j),
        eg = i.useMemo(() => (u && null != q ? q : C && null != X ? X : void 0), [C, u, q, X]);
    return (
        i.useEffect(() => {
            G ? S(et) : S(q);
        }, [G, S, et, q]),
        {
            disabled: W,
            activeSubscription: _,
            subscriptionPeriodEnd: e_,
            plan: j,
            premiumPlanOptions: em,
            discountInvoicePreview: J,
            oneTimePurchaseNitroGiftInvoicePreview: et,
            trialInvoicePreview: eg,
            proratedInvoicePreview: q,
            renewalInvoicePreview: X,
            error: ei,
            isGift: G,
            isEmbeddedIAP: d,
            paymentSourceType: eo,
            hidePersonalInformation: es,
            giftRecipient: V,
            selectedGiftStyle: B,
            isInOneStepSubscriptionCheckout: ed,
            shouldAllowPlanSelect: ed && !k,
            hasPaymentSources: w,
            paymentSourceId: ea,
            eligiblePaymentGateways: $,
            inReverseTrial: C,
            fractionalPremiumInfo: ep,
            planSwitchLoading: eE,
            showFractionalPremiumBannerInInvoiceSummary: eh,
            isPrepaid: ec,
            isCustomGift: er,
            enablePremiumBrandRefresh: M,
            premiumBrandRefreshBackgroundClassName: P,
            isPremiumGroupPurchase: k,
            isEligibleForDiscount: U,
            discountInvoiceItems: U ? J?.invoiceItems : void 0,
            hasEntitlements: el,
            entitlements: eu,
        }
    );
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
            trialFooterMessageOverride: v,
            reviewWarningMessage: N,
            metadata: b,
            purchaseState: O,
            hideSubscriptionDetails: D,
            referralTrialOfferId: x,
            isTrial: F = !1,
            isDiscount: H = !1,
            handleClose: z,
        } = e,
        {
            activeSubscription: $,
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
            entitlements: eN,
        } = K({
            selectedPlanId: t,
            paymentSources: i,
            priceOptions: s,
            trialId: T,
            metadata: b,
            purchaseState: O,
            isTrial: F,
        }),
        eC = (0, B.yf)({
            error: ec,
            isGift: ed,
            oneTimePurchaseNitroGiftInvoicePreview: e_,
            trialInvoicePreview: ef,
            proratedInvoicePreview: ep,
            renewalInvoicePreview: eh,
            planSwitchLoading: em,
        });
    if (null != eC && eC.type === B.N$.LOADING)
        return (0, r.jsx)("div", { className: W.zp, children: (0, r.jsx)(_.y$y, {}) });
    let eb = (0, r.jsx)(B.eb, {
            invoiceSummaryTypeWithPreview: eC,
            priceOptions: s,
            trialFooterMessageOverride: v,
            hideSubscriptionDetails: D,
            referralTrialOfferId: x,
            isTrial: F,
            inReverseTrial: eo,
            fractionalPremiumInfo: el,
            plan: eu,
            showFractionalPremiumBanner: eE,
            isPrepaid: eg,
            isCustomGift: eA,
            enablePremiumBrandRefresh: eI,
            premiumBrandRefreshBackgroundClassName: eT,
        }),
        eR = u.M.EEA_COUNTRIES.has(C.A.ipCountryCodeWithFallback),
        eO = Y.intl.formatToPlainString(Y.t["sBpy9/"], { planName: eu.name });
    ed && !eA
        ? (eO = Y.intl.string(Y.t.J5a0eb))
        : ed && eA
          ? (eO = "")
          : (0, L.ys)(eu.id) && (eO = L.Ay.getBillingReviewSubheader(null, eu));
    let eD = null != ea && ea.length > 0 && (es === R.B || null === X) && ei ? U.f.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(U.j, { paymentRestrictionBannerType: eD }),
            null != N &&
                (0, r.jsxs)("div", {
                    className: W.Je,
                    children: [
                        (0, r.jsx)(_.mir, {
                            size: "custom",
                            color: d.A.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20,
                        }),
                        (0, r.jsx)(_.Text, { className: W.CJ, variant: "text-sm/normal", children: N }),
                    ],
                }),
            eS &&
                (0, r.jsx)("div", {
                    className: W.Ni,
                    children: (0, r.jsx)(_.wx6, {
                        type: "info",
                        children: (0, r.jsx)(_.Text, { variant: "text-sm/medium", children: (0, y.Nn)() }),
                    }),
                }),
            er &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(S.P, { planSkuId: eu?.skuId, referralTrialOfferId: x }),
                        (0, r.jsx)(G.$p, {
                            planOptions: en,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: t,
                            planGroup: n,
                            subscriptionPeriodEnd: et,
                            showTotal: !1,
                            discountInvoiceItems: ey,
                            handleClose: z,
                        }),
                        (0, r.jsx)(M.pK, {}),
                    ],
                }),
            eo &&
                (0, r.jsx)(_.Heading, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: W.KB,
                    children: Y.intl.format(Y.t["7ZS2m1"], { trialEnd: $?.currentPeriodEnd }),
                }),
            !F && "" !== eO && (0, r.jsx)(_.Heading, { variant: "heading-md/semibold", className: W.wx, children: eO }),
            eA &&
                null != ee &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(k.A, {
                            defaultAnimationState: w.oA.LOOP,
                            giftStyle: ee,
                            shouldAnimate: !0,
                            className: W.Os,
                        }),
                        (0, r.jsx)(V.Z, { giftRecipient: J }),
                    ],
                }),
            eb,
            (0, r.jsxs)("div", {
                className: W.LC,
                children: [
                    (0, r.jsx)(h.A, {
                        label: F ? Y.intl.string(Y.t["YH7B+D"]) : Y.intl.string(Y.t["mmDvV+"]),
                        paymentSources: Object.values(i),
                        selectedPaymentSourceId: es,
                        prependOption: ev && !F ? { label: Y.intl.string(Y.t.IGU7El), value: null } : null,
                        onChange: c,
                        onPaymentSourceAdd: E,
                        hidePersonalInformation: Q,
                        isTrial: F,
                        paymentGatewayRestrictions: ea,
                        className: a()({ [W.E4]: eI }),
                    }),
                    ev && null == es
                        ? (0, r.jsx)("div", {
                              className: W.QN,
                              children: Y.intl.format(Y.t["2wPRSF"], { months: eN.length }),
                          })
                        : null,
                    H
                        ? null
                        : (0, r.jsx)(f.f, {
                              currencies: o,
                              className: W.p2,
                              children: (0, r.jsx)(f.A, {
                                  label: Y.intl.string(Y.t["/AAR02"]),
                                  selectedCurrency: s.currency,
                                  currencies: o,
                                  onChange: l,
                              }),
                          }),
                ],
            }),
            (0, r.jsx)(P.A, {
                isActive: I,
                ref: A,
                children: (0, r.jsx)(m.A, {
                    onChange: g,
                    forceShow: !0,
                    finePrint:
                        (!eo && v) ??
                        (0, r.jsx)(p.A, {
                            hide: F || H,
                            subscriptionPlan: eu,
                            renewalInvoice: eh,
                            isGift: ed,
                            paymentSourceType: X,
                            isEmbeddedIAP: Z,
                            basePrice: (0, L.y8)(eu.id, !1, ed, s),
                        }),
                    showPricingLink: eu.currency !== j.Yr.USD,
                    showWithdrawalWaiver: eR,
                    disabled: q,
                    isTrial: F && null == v,
                    inReverseTrial: eo,
                    isDiscount: H,
                    subscriptionPlan: eu,
                    isGift: ed,
                }),
            }),
        ],
    });
}
