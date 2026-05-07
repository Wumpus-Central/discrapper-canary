n.d(t, { A: () => eE });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(997101),
    c = n(17928),
    d = n(683071),
    p = n(834730),
    m = n(452027),
    h = n(457287),
    C = n(821891),
    A = n(953689),
    E = n(61572),
    y = n(666646),
    P = n(474367),
    S = n(94420),
    _ = n(937008),
    T = n(49960),
    f = n(566980),
    x = n(800471),
    N = n(71867),
    I = n(222707),
    g = n(340034),
    v = n(216641),
    M = n(615405),
    j = n(97352),
    b = n(927578),
    R = n(615396),
    L = n(735164),
    O = n(778307),
    D = n(218075),
    w = n(337092),
    U = n(299301),
    k = n(340287),
    Y = n(289873),
    G = n(793574),
    F = n(688810),
    B = n(848584),
    W = n(888751),
    V = n(543767),
    H = n(787455),
    K = n(692440),
    Z = n(788868),
    q = n(652215),
    z = n(375708),
    $ = n(327105),
    J = n(207715),
    X = n(814304);
function Q(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : k.createPortal(t, n);
}
let ee = (e, t) => (null == e || t ? null : (0, l.jsx)(d.w, { type: "critical", children: e.message })),
    et = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, l.jsx)("div", { className: J.l, children: (0, l.jsx)(Y.y, { type: Y.y.Type.PULSING_ELLIPSIS }) })
            : (0, l.jsx)(Y.y, {});
    },
    en = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: l } = t;
        a.useEffect(() => {
            n && (null != l ? e(l) : e(null));
        }, [e, n, l]);
    },
    el = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: l } = t;
        a.useEffect(() => {
            n && e(l);
        }, [e, n, l]);
    },
    ea = (e) => {
        let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: a, analyticsLocations: i } = e,
            r = {
                subscriptionId: t.id,
                items: n,
                paymentSourceId: l.paymentSourceId,
                currency: l.currency,
                preventFetch: a,
                analyticsLocations: i,
                analyticsLocation: G.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [s, o] = (0, V.YV)({ ...r, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, V.YV)({ ...r, renewal: !0 });
        return { proratedInvoicePreview: s, proratedInvoiceError: o, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function ei(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: a,
            fractionalPremiumInfo: i,
            shouldUseUnifiedCheckoutUI: r,
            unifiedSubscriptionDetailsNode: s,
        } = e,
        [o, u] = (0, V.C8)({ subscriptionId: t.id, preventFetch: a });
    (0, y.OQ)({ checkoutInvoicePreview: o, checkoutInvoiceError: u, renewalInvoicePreview: o, renewalInvoiceError: u });
    let c = (0, b.J$)(n.paymentSourceId);
    if (null != o) {
        let e = (0, l.jsx)(K.m0, {
                premiumSubscription: t,
                renewalInvoice: o,
                isUpdate: !0,
                isPrepaidPaymentSource: c,
                fractionalPremiumInfo: i,
                shouldUseUnifiedCheckoutUI: r,
            }),
            n = (0, l.jsx)(K._J, { invoice: o, isPrepaidPaymentSource: c, shouldUseUnifiedCheckoutUI: r });
        return r
            ? (0, l.jsxs)(l.Fragment, { children: [n, (0, l.jsx)(Q, { containerNode: s.current, children: e })] })
            : (0, l.jsxs)(L.Yx, { className: J.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: r });
}
function er(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: i,
            priceOptions: r,
            fractionalPremiumInfo: s,
            preventFetch: o,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: c,
            setOverrideRenewalDate: d,
            shouldUseUnifiedCheckoutUI: p,
        } = e,
        m = (0, S.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: h } = (0, T.P5)(),
        { isGift: C } = (0, _.Pv)(),
        { analyticsLocations: A } = (0, F.Ay)(),
        E = (0, b.Pg)(t, n.id, 1, new Set(i)),
        {
            proratedInvoicePreview: P,
            proratedInvoiceError: f,
            renewalInvoicePreview: N,
            renewalInvoiceError: I,
        } = ea({ premiumSubscription: t, newItems: E, priceOptions: r, preventFetch: o, analyticsLocations: A }),
        { primaryInvoiceError: v } = (0, y.OQ)({
            checkoutInvoicePreview: P,
            checkoutInvoiceError: f,
            renewalInvoicePreview: N,
            renewalInvoiceError: I,
        }),
        { planSwitchNoticeCopy: M, overrideRenewalDate: j } = a.useMemo(() => {
            let e;
            return (null !== s &&
                null !== P &&
                (e = (0, b._e)(P.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != P && null != N)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, K.DK)({
                          proratedInvoice: P,
                          renewalInvoice: N,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [P, N, s]);
    if (
        (el(d, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: j }),
        en(c, { shouldUseUnifiedCheckoutUI: p, noticeCopy: M }),
        null != v)
    )
        return ee(v, p);
    let R = (0, x.vT)({ isTrial: !1, isGift: C, selectedSkuId: m, startedPaymentFlowWithPaymentSources: h.current }),
        O = (0, x.UB)(R, P, n);
    if (null == P || null == N || O) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: p });
    let D = (0, b.J$)(r.paymentSourceId),
        w = (0, l.jsx)(K.m0, {
            premiumSubscription: t,
            proratedInvoice: P,
            renewalInvoice: N,
            overrideRenewalDate: j,
            isPrepaidPaymentSource: D,
            fractionalPremiumInfo: s,
            isUpdate: !0,
            shouldUseUnifiedCheckoutUI: p,
        });
    return p
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(g.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: U.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: P,
                          renewalInvoicePreview: N,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: D,
                      subscriptionTrial: null,
                  }),
                  (0, l.jsx)(Q, { containerNode: u.current, children: w }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(K.wP, { proratedInvoice: P, renewalInvoice: N, overrideRenewalDate: j }),
                  (0, l.jsxs)(L.Yx, {
                      className: X.SU,
                      children: [
                          (0, l.jsx)(L.Xd, { children: z.intl.string(z.t["2eh+Co"]) }),
                          (0, l.jsx)(K.mT, { invoice: P, newPlan: n, isPrepaidPaymentSource: D }),
                          w,
                      ],
                  }),
              ],
          });
}
function es(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: i,
            planGroup: r,
            fractionalPremiumInfo: s,
            priceOptions: o,
            preventFetch: u,
            shouldUseUnifiedCheckoutUI: c,
            setUnifiedPlainNoticeText: d,
            setOverrideRenewalDate: p,
            unifiedSubscriptionDetailsNode: m,
        } = e,
        { analyticsLocations: h } = (0, F.Ay)(),
        [C, A] = (0, V.YV)({
            subscriptionId: n.id,
            items: (0, b.Pg)(n, i.id, 1, new Set(r)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            preventFetch: u,
            analyticsLocations: h,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    (0, y.OQ)({ checkoutInvoicePreview: C, checkoutInvoiceError: A, renewalInvoicePreview: C, renewalInvoiceError: A });
    let { renewalDate: E, planSwitchNoticeCopy: P } = a.useMemo(() => {
        if (null == C) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = C.subscriptionPeriodStart;
        return (
            s.fractionalState === Z.xc.FP_SUB_PAUSED && (e = s.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: z.intl.format(z.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [C, s.fractionalState, s.endsAt]);
    if (
        (el(p, { shouldUseUnifiedCheckoutUI: c, overrideRenewalDate: E }),
        en(d, { shouldUseUnifiedCheckoutUI: c, noticeCopy: P }),
        null != A)
    )
        return ee(A, c);
    if (null == C) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: c });
    t = n.type === q.rzx.PREMIUM ? (0, b.Mn)(i.id) : i.name;
    let S = (0, b.J$)(o.paymentSourceId),
        _ = (0, l.jsx)("div", { className: J.o, children: P }),
        T = (0, l.jsx)(K.m0, {
            premiumSubscription: n,
            renewalInvoice: C,
            isUpdate: !0,
            isPrepaidPaymentSource: S,
            fractionalPremiumInfo: s,
            overrideRenewalDate: E,
            shouldUseUnifiedCheckoutUI: c,
            unifiedCheckoutDefaultExpanded: !0,
        });
    if (c) {
        let { lineItems: e } = (0, W.Ig)(C, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: S,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(B.Vm, { label: z.intl.string($.default.eoXh7B), lineItems: e, currency: C.currency }),
                (0, l.jsx)(Q, { containerNode: m.current, children: T }),
            ],
        });
    }
    return (0, l.jsxs)("div", {
        className: X.G3,
        children: [
            _,
            (0, l.jsxs)(L.Yx, {
                className: X.SU,
                children: [
                    (0, l.jsx)(L.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                    (0, l.jsx)(L.oR, { label: t, value: (0, b.jh)(i, o, !0) }),
                    (0, l.jsx)(H.A, { invoice: C }),
                    (0, l.jsx)(L.pK, {}),
                    T,
                ],
            }),
        ],
    });
}
function eo(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            planGroup: i,
            priceOptions: r,
            preventFetch: s,
            disabled: o,
            isEEA: u,
            paymentSources: c,
            setHasAcceptedTerms: d,
        } = e,
        { analyticsLocations: p } = (0, F.Ay)(),
        m = (0, b.Pg)(n, a.id, 1, new Set(i)),
        {
            proratedInvoicePreview: h,
            proratedInvoiceError: E,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        } = ea({ premiumSubscription: n, newItems: m, priceOptions: r, preventFetch: s, analyticsLocations: p }),
        { primaryInvoiceError: _ } = (0, y.OQ)({
            checkoutInvoicePreview: h,
            checkoutInvoiceError: E,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        }),
        T = (0, v.g)(c, r.paymentSourceId);
    return null != _ ||
        (null != P && (t = { amount: P.subtotal, currency: P.currency, tax: P.tax, taxInclusive: P.taxInclusive }),
        null == t)
        ? null
        : (0, l.jsx)(A.A, {
              onChange: d,
              finePrint: (0, l.jsx)(C.A, {
                  subscriptionPlan: a,
                  paymentSourceType: T,
                  basePrice: t,
                  proratedAmount: null != h ? h.total : void 0,
                  currentSubscription: n,
                  planGroup: i,
              }),
              forceShow: !0,
              showPricingLink: a.currency !== q.Yri.USD,
              showWithdrawalWaiver: u,
              disabled: o,
              subscriptionPlan: a,
              currentSubscription: n,
              planGroup: i,
          });
}
function eu(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
            fractionalPremiumInfo: r,
            shouldUseUnifiedCheckoutUI: s,
            unifiedSubscriptionDetailsNode: o,
            setUnifiedPlainNoticeText: u,
        } = e,
        { analyticsLocations: c } = (0, F.Ay)(),
        [d, p] = (0, V.YV)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: i,
            analyticsLocations: c,
            analyticsLocation: G.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [m, h] = (0, V.YV)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: i,
            analyticsLocations: c,
            analyticsLocation: G.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        }),
        { primaryInvoiceError: C } = (0, y.OQ)({
            checkoutInvoicePreview: d,
            checkoutInvoiceError: p,
            renewalInvoicePreview: m,
            renewalInvoiceError: h,
        }),
        A = a.useMemo(() => z.intl.string(z.t.spIYou), []);
    if ((en(u, { shouldUseUnifiedCheckoutUI: s, noticeCopy: A }), null != C)) return ee(C, s);
    if (null == d || null == m) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: s });
    let E = (0, b.J$)(n.paymentSourceId),
        P = (0, l.jsx)(K.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: E,
            fractionalPremiumInfo: r,
            shouldUseUnifiedCheckoutUI: s,
        }),
        S = (0, l.jsx)("div", { className: J.o, children: A }),
        _ = (0, l.jsx)(K._J, { invoice: d, isPrepaidPaymentSource: E, shouldUseUnifiedCheckoutUI: s });
    return s
        ? (0, l.jsxs)(l.Fragment, { children: [_, (0, l.jsx)(Q, { containerNode: o.current, children: P })] })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  S,
                  (0, l.jsxs)(L.Yx, {
                      className: X.SU,
                      children: [(0, l.jsx)(L.Xd, { children: z.intl.string(z.t["2eh+Co"]) }), _, P],
                  }),
              ],
          });
}
n(321073);
var ec = n(164928),
    ed = n(755880),
    ep = n(134638),
    em = n(906234);
let eh = (e) => {
    let {
            disabled: t,
            showFractionalPremiumBanner: n,
            fractionalPremiumInfo: i,
            isPremiumGroupPurchase: r,
            paymentRestrictionBannerType: s,
            invoiceError: o,
            unifiedPlainNoticeText: u,
            invoicePreview: c,
            invoicePreviewComponent: d,
            shouldShowPlanSelectAndPromoBanner: p,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: m,
            newPlan: h,
            planId: C,
            priceOptions: A,
            premiumPlanOptions: E,
            unifiedSubscriptionDetailsNode: y,
            isInvoiceBilledImmediately: P,
            paymentSelectContent: S,
            currencySelectComponent: _,
            legalContent: T,
        } = e,
        f = a.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(g.l$, { fractionalPremiumInfo: i }),
                        key: "fractional-premium-notice",
                    }),
                r && e.push({ type: "info", message: (0, I.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, D.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [r, s, o, n, i]),
        x = a.useMemo(() => (0, b.l6)(A, c?.checkoutContext?.available_plans), [A, c]),
        v = a.useMemo(() => (p ? (0, l.jsx)(N.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        M = (0, em.G)(C),
        j = a.useMemo(() => (M ? (0, l.jsx)(ed.a, {}) : null), [M]),
        R = a.useMemo(() => (null != v ? v : null != j ? j : null), [v, j]),
        L = (0, b.J$)(A.paymentSourceId),
        O = null,
        w = null;
    p
        ? (w = (0, l.jsx)(g.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: E,
              selectedPlanId: C,
              showPlanStatusSubText: !0,
              priceOptions: x,
          }))
        : null != c &&
          (O = (0, l.jsx)(ep._, {
              type: U.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: L,
              isPremiumGroupPurchase: r,
              bottomSubText: u,
          }));
    let k = m ? d : (0, l.jsx)("div", { ref: y }),
        Y = m ? null : d;
    return (0, l.jsx)(ec.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: f,
        paymentSelectContent: (0, l.jsxs)(l.Fragment, { children: [S, _] }),
        subscriptionDetailsContent: k,
        purchaseItemContent: O,
        planSelectContent: w,
        invoiceSummaryContent: Y,
        legalContent: T,
        invoiceTotalDueLabel: P ? z.intl.string($.default.R0cZsM) : z.intl.string($.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, K.U5)(c) : void 0,
        promotionalNoticeContent: R,
    });
};
var eC = n(88001),
    eA = n(466919);
function eE(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: i,
            priceOptions: s,
            handlePaymentSourceAdd: k,
            planId: Y,
            setHasAcceptedTerms: G,
            legalTermsNodeRef: F,
            hasLegalTermsFlash: B,
            planGroup: W,
            currencies: V,
            onCurrencyChange: H,
            hasOpenInvoice: K,
            purchaseState: Z,
            handleClose: $,
            shouldUseUnifiedCheckoutUI: J,
        } = e,
        Q = (0, y.mx)(),
        ee = (0, S.t4)((e) => e.selectedSkuId),
        {
            defaultPlanId: et,
            isPremium: en,
            startedPaymentFlowWithPaymentSourcesRef: el,
            hasPaymentSources: ea,
            isPremiumGroupPurchase: ec,
            paymentSourceId: ed,
            displayCurrency: ep,
        } = (0, T.P5)(),
        em = (0, y.sw)(),
        { isGift: eE } = (0, _.Pv)(),
        ey = (0, v.g)(i, ed),
        eP = a.useMemo(() => (0, b.l6)(s, em?.checkoutContext?.available_plans), [em, s]),
        eS = (0, c.bG)([j.A], () => j.A.get(Y));
    o()(null != eS, "Missing newPlan");
    let { showFractionalPremiumBanner: e_, fractionalPremiumInfo: eT } = (0, I._V)({
            premiumSubscription: n,
            selectedPlanId: Y,
            planGroup: W,
            isGift: eE,
        }),
        ef = (0, y.IK)(),
        ex = u.M.EEA_COUNTRIES.has(M.A.ipCountryCodeWithFallback),
        eN = Z === f.h.PURCHASING || Z === f.h.COMPLETED,
        eI = (0, x.vT)({
            isTrial: !1,
            isGift: eE,
            selectedSkuId: ee,
            startedPaymentFlowWithPaymentSources: el.current,
        }),
        eg = n?.isPausedAllowsResumeButNotUpdates,
        ev = a.useMemo(() => (0, b.Tm)({ skuId: ee, isPremium: en, defaultPlanId: et }), [ee, et, en]);
    t =
        K || eg
            ? z.intl.string(z.t.nyzoFb)
            : ec
              ? z.intl.formatToPlainString(eA.default["3m9DJK"], { premiumGroupProductName: (0, eC.DP)() })
              : (0, b.ys)(Y)
                ? (0, b.ff)(n, eS)
                : z.intl.formatToPlainString(z.t["sBpy9/"], { planName: eS.name });
    let eM = a.useRef(null),
        [ej, eb] = a.useState(null),
        [eR, eL] = a.useState(void 0),
        eO = a.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: J,
                unifiedSubscriptionDetailsNode: eM,
                setUnifiedPlainNoticeText: eb,
                setOverrideRenewalDate: eL,
            }),
            [J],
        ),
        {
            content: eD,
            isInvoiceBilledImmediately: ew,
            ...eU
        } = null != n
            ? (function (e, t, n) {
                  let { hasOpenInvoice: a, showResumeSubscriptionView: i, planId: r } = e,
                      {
                          disabled: s,
                          premiumSubscription: o,
                          newPlan: u,
                          planGroup: c,
                          fractionalPremiumInfo: d,
                          priceOptions: p,
                      } = t;
                  return a
                      ? {
                            content: (0, l.jsx)(ei, {
                                premiumSubscription: o,
                                priceOptions: p,
                                preventFetch: !1,
                                fractionalPremiumInfo: d,
                                ...n,
                            }),
                            isInvoiceBilledImmediately: !0,
                            shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                        }
                      : i
                        ? {
                              content: (0, l.jsx)(eu, {
                                  premiumSubscription: o,
                                  priceOptions: p,
                                  preventFetch: s,
                                  fractionalPremiumInfo: d,
                                  ...n,
                              }),
                              isInvoiceBilledImmediately: !0,
                              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                          }
                        : (0, R.Ge)(o, r, c)
                          ? {
                                content: (0, l.jsx)(er, {
                                    premiumSubscription: o,
                                    newPlan: u,
                                    planGroup: c,
                                    priceOptions: p,
                                    fractionalPremiumInfo: d,
                                    preventFetch: s,
                                    ...n,
                                }),
                                isInvoiceBilledImmediately: !0,
                                shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                            }
                          : {
                                isInvoiceBilledImmediately: !1,
                                shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                                content: (0, l.jsx)(es, {
                                    premiumSubscription: o,
                                    newPlan: u,
                                    planGroup: c,
                                    fractionalPremiumInfo: d,
                                    priceOptions: p,
                                    preventFetch: s,
                                    ...n,
                                }),
                            };
              })(
                  { hasOpenInvoice: K, showResumeSubscriptionView: eg, planId: Y },
                  {
                      disabled: eN,
                      premiumSubscription: n,
                      newPlan: eS,
                      planGroup: W,
                      fractionalPremiumInfo: eT,
                      priceOptions: s,
                  },
                  eO,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ek = n?.eligiblePaymentGateways,
        eY = null != ek && ek.length > 0 && (null == ed || null === ey) && ea ? D.fU.SELECT_PAYMENT_METHOD : void 0,
        eG = a.useMemo(
            () => ({
                label: z.intl.string(z.t["/AAR02"]),
                selectedCurrency: s.currency ?? ep,
                currencies: V,
                onChange: H,
                disabled: eN,
            }),
            [V, H, s, ep, eN],
        ),
        eF = a.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: r()({ [X.E4]: en }),
                shouldUseUnifiedCheckoutUI: J,
            }),
            [n?.eligiblePaymentGateways, en, J],
        ),
        eB = (0, l.jsx)(E.N, {
            label: z.intl.string(z.t["mmDvV+"]),
            onPaymentSourceAdd: k,
            disabled: eN,
            additionalPaymentSourceDropdownProps: eF,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: s.paymentSourceId,
        }),
        eW = null != n && (0, R.Ge)(n, Y, W),
        eV = J
            ? null != em && null != ef
                ? (0, l.jsx)(g.PI, {
                      overrideRenewalDate: eR,
                      planGroup: W,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eS,
                      isGift: eE,
                      paymentSourceType: ey,
                      isInvoiceBilledImmediately: ew,
                      invoiceSummaryTypeWithPreview: {
                          type: U.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: em,
                          renewalInvoicePreview: ef,
                      },
                      hideLegalContent: eW && null != Q,
                  })
                : null
            : (0, l.jsx)(O.A, {
                  isActive: B,
                  ref: F,
                  children: eW
                      ? (0, l.jsx)(eo, {
                            premiumSubscription: n,
                            newPlan: eS,
                            planGroup: W,
                            priceOptions: s,
                            preventFetch: eN,
                            disabled: eN,
                            isEEA: ex,
                            paymentSources: i,
                            setHasAcceptedTerms: G,
                        })
                      : (0, l.jsx)(A.A, {
                            onChange: G,
                            finePrint: (0, l.jsx)(C.A, {
                                subscriptionPlan: eS,
                                paymentSourceType: ey,
                                basePrice: (0, b.y8)(eS.id, !1, eE, eP),
                                currentSubscription: n,
                                planGroup: W,
                            }),
                            forceShow: !0,
                            showPricingLink: eS.currency !== q.Yri.USD,
                            showWithdrawalWaiver: ex,
                            disabled: eN,
                            subscriptionPlan: eS,
                            currentSubscription: n,
                            planGroup: W,
                        }),
              }),
        eH = !eg && eI && !ec,
        eK = a.useMemo(() => (eH ? (0, l.jsx)(N.P, { planSkuId: eS.skuId }) : null), [eH, eS.skuId]);
    return J
        ? (0, l.jsx)(eh, {
              disabled: eN,
              showFractionalPremiumBanner: e_,
              fractionalPremiumInfo: eT,
              isPremiumGroupPurchase: ec,
              paymentRestrictionBannerType: eY,
              invoiceError: Q,
              unifiedPlainNoticeText: ej,
              invoicePreview: em,
              invoicePreviewComponent: eD,
              shouldShowPlanSelectAndPromoBanner: eH,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eU.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eS,
              planId: Y,
              priceOptions: s,
              premiumPlanOptions: ev,
              unifiedSubscriptionDetailsNode: eM,
              isInvoiceBilledImmediately: ew,
              paymentSelectContent: eB,
              currencySelectComponent: (0, l.jsx)(P.qX, { ...eG }),
              legalContent: eV,
          })
        : (0, l.jsxs)("div", {
              className: X.Du,
              children: [
                  (0, l.jsx)(D.je, { paymentRestrictionBannerType: eY }),
                  eH &&
                      (0, l.jsxs)("div", {
                          children: [
                              eK,
                              (0, l.jsx)(w.$p, {
                                  disabled: eN,
                                  planOptions: ev,
                                  selectedPlanId: Y,
                                  planGroup: W,
                                  showTotal: !1,
                                  priceOptions: eP,
                                  handleClose: $,
                              }),
                              (0, l.jsx)(L.pK, {}),
                          ],
                      }),
                  ec &&
                      (0, l.jsx)("div", {
                          className: X.Ni,
                          children: (0, l.jsx)(d.w, {
                              type: "info",
                              children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, I.Nn)() }),
                          }),
                      }),
                  (0, l.jsx)(m.D, { label: t, children: eD }),
                  (0, l.jsx)("div", { className: X.LC, children: eB }),
                  (0, l.jsx)(h.f, { currencies: V, className: X.p2, children: (0, l.jsx)(h.A, { ...eG }) }),
                  eV,
              ],
          });
}
