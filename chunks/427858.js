n.d(t, { A: () => eC });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(997101),
    c = n(17928),
    d = n(683071),
    p = n(834730),
    m = n(452027),
    h = n(821891),
    A = n(953689),
    C = n(376843),
    E = n(426398),
    y = n(666646),
    P = n(571878),
    S = n(937008),
    _ = n(566980),
    f = n(349786),
    I = n(800471),
    T = n(71867),
    N = n(222707),
    v = n(340034),
    g = n(216641),
    x = n(615405),
    R = n(97352),
    M = n(428262),
    b = n(615396),
    L = n(735164),
    j = n(778307),
    O = n(218075),
    w = n(361597),
    D = n(299301),
    U = n(340287),
    k = n(289873),
    G = n(793574),
    Y = n(688810),
    F = n(473617),
    B = n(848584),
    W = n(888751),
    H = n(787455),
    V = n(692440),
    K = n(788868),
    Z = n(652215),
    q = n(375708),
    z = n(327105),
    $ = n(207715),
    J = n(814304);
function X(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : U.createPortal(t, n);
}
let Q = (e, t) => (null == e || t ? null : (0, l.jsx)(d.w, { type: "critical", children: e.message })),
    ee = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, l.jsx)("div", { className: $.l, children: (0, l.jsx)(k.y, { type: k.y.Type.PULSING_ELLIPSIS }) })
            : (0, l.jsx)(k.y, {});
    },
    et = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: l } = t;
        r.useEffect(() => {
            n && (null != l ? e(l) : e(null));
        }, [e, n, l]);
    },
    en = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: l } = t;
        r.useEffect(() => {
            n && e(l);
        }, [e, n, l]);
    },
    el = (e) => {
        let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: i, analyticsLocations: a } = e,
            s = r.useMemo(
                () => ({
                    subscriptionId: t.id,
                    items: n,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: i,
                    analyticsLocations: a,
                    analyticsLocation: G.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
                }),
                [t.id, n, l.paymentSourceId, l.currency, i, a],
            ),
            { checkoutInvoicePreviewRequest: o, renewalInvoicePreviewRequest: u } = r.useMemo(
                () => ({
                    checkoutInvoicePreviewRequest: {
                        type: "premium_checkout_invoice",
                        params: { ...s, renewal: !1, applyEntitlements: !0 },
                    },
                    renewalInvoicePreviewRequest: { type: "premium_renewal_invoice", params: { ...s, renewal: !0 } },
                }),
                [s],
            );
        (0, F.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
        let {
            checkoutInvoicePreview: c,
            checkoutInvoiceError: d,
            renewalInvoicePreview: p,
            renewalInvoiceError: m,
        } = (0, P.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutInvoiceError: e.checkoutInvoiceError,
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        }));
        return {
            primaryInvoiceError: r.useMemo(() => d ?? m, [d, m]),
            proratedInvoicePreview: c,
            proratedInvoiceError: d,
            renewalInvoicePreview: p,
            renewalInvoiceError: m,
        };
    };
function er(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
            fractionalPremiumInfo: a,
            shouldUseUnifiedCheckoutUI: s,
            unifiedSubscriptionDetailsNode: o,
        } = e,
        u = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "premium_checkout_invoice_get_request",
                    params: { subscriptionId: t.id, preventFetch: i },
                },
                fetchRenewalInvoicePreviewRequest: null,
                shouldAllowNullState: !0,
            }),
            [t.id, i],
        );
    (0, F.E)(u);
    let { checkoutInvoicePreview: c, checkoutInvoiceError: d } = (0, P.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, y.Tr)(c, d);
    let p = (0, M.J$)(n.paymentSourceId);
    if (null != c) {
        let e = (0, l.jsx)(V.m0, {
                premiumSubscription: t,
                renewalInvoice: c,
                isUpdate: !0,
                isPrepaidPaymentSource: p,
                fractionalPremiumInfo: a,
                shouldUseUnifiedCheckoutUI: s,
            }),
            n = (0, l.jsx)(V._J, { invoice: c, isPrepaidPaymentSource: p, shouldUseUnifiedCheckoutUI: s });
        return s
            ? (0, l.jsxs)(l.Fragment, { children: [n, (0, l.jsx)(X, { containerNode: o.current, children: e })] })
            : (0, l.jsxs)(L.Yx, { className: $.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(ee, { shouldUseUnifiedCheckoutUI: s });
}
function ei(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: i,
            priceOptions: a,
            fractionalPremiumInfo: s,
            preventFetch: o,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: c,
            setOverrideRenewalDate: d,
            shouldUseUnifiedCheckoutUI: p,
        } = e,
        { analyticsLocations: m } = (0, Y.Ay)(),
        h = (0, M.Pg)(t, n.id, 1, new Set(i)),
        {
            proratedInvoicePreview: A,
            renewalInvoicePreview: C,
            primaryInvoiceError: E,
        } = el({ premiumSubscription: t, newItems: h, priceOptions: a, preventFetch: o, analyticsLocations: m }),
        { planSwitchNoticeCopy: y, overrideRenewalDate: P } = r.useMemo(() => {
            let e;
            return (null !== s &&
                null !== A &&
                (e = (0, M._e)(A.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != A && null != C)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, V.DK)({
                          proratedInvoice: A,
                          renewalInvoice: C,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [A, C, s]);
    if (
        (en(d, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: P }),
        et(c, { shouldUseUnifiedCheckoutUI: p, noticeCopy: y }),
        null != E)
    )
        return Q(E, p);
    let S = (0, I.UB)(A, n);
    if (null == A || null == C || S) return (0, l.jsx)(ee, { shouldUseUnifiedCheckoutUI: p });
    let _ = (0, M.J$)(a.paymentSourceId),
        f = (0, l.jsx)(V.m0, {
            premiumSubscription: t,
            proratedInvoice: A,
            renewalInvoice: C,
            overrideRenewalDate: P,
            isPrepaidPaymentSource: _,
            fractionalPremiumInfo: s,
            isUpdate: !0,
            shouldUseUnifiedCheckoutUI: p,
        });
    return p
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(v.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: D.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: A,
                          renewalInvoicePreview: C,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: _,
                      subscriptionTrial: null,
                  }),
                  (0, l.jsx)(X, { containerNode: u.current, children: f }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(V.wP, { proratedInvoice: A, renewalInvoice: C, overrideRenewalDate: P }),
                  (0, l.jsxs)(L.Yx, {
                      className: J.SU,
                      children: [
                          (0, l.jsx)(L.Xd, { children: q.intl.string(q.t["2eh+Co"]) }),
                          (0, l.jsx)(V.mT, { invoice: A, newPlan: n, isPrepaidPaymentSource: _ }),
                          f,
                      ],
                  }),
              ],
          });
}
function ea(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: i,
            planGroup: a,
            fractionalPremiumInfo: s,
            priceOptions: o,
            preventFetch: u,
            shouldUseUnifiedCheckoutUI: c,
            setUnifiedPlainNoticeText: d,
            setOverrideRenewalDate: p,
            unifiedSubscriptionDetailsNode: m,
        } = e,
        { analyticsLocations: h } = (0, Y.Ay)(),
        { renewalInvoicePreview: A, renewalInvoiceError: C } = (0, P.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        E = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: null,
                fetchRenewalInvoicePreviewRequest: {
                    type: "premium_renewal_invoice",
                    params: {
                        subscriptionId: n.id,
                        items: (0, M.Pg)(n, i.id, 1, new Set(a)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: o.paymentSourceId,
                        currency: o.currency,
                        preventFetch: u,
                        analyticsLocations: h,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
                    },
                },
                shouldAllowNullState: !0,
            }),
            [n, i.id, a, o.paymentSourceId, o.currency, u, h],
        );
    (0, F.E)(E), (0, y.F0)(A, C);
    let { renewalDate: S, planSwitchNoticeCopy: _ } = r.useMemo(() => {
        if (null == A) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = A.subscriptionPeriodStart;
        return (
            s.fractionalState === K.xc.FP_SUB_PAUSED && (e = s.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: q.intl.format(q.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [A, s.fractionalState, s.endsAt]);
    if (
        (en(p, { shouldUseUnifiedCheckoutUI: c, overrideRenewalDate: S }),
        et(d, { shouldUseUnifiedCheckoutUI: c, noticeCopy: _ }),
        null != C)
    )
        return Q(C, c);
    if (null == A) return (0, l.jsx)(ee, { shouldUseUnifiedCheckoutUI: c });
    t = n.type === Z.rzx.PREMIUM ? (0, M.Mn)(i.id) : i.name;
    let f = (0, M.J$)(o.paymentSourceId),
        I = (0, l.jsx)("div", { className: $.o, children: _ }),
        T = (0, l.jsx)(V.m0, {
            premiumSubscription: n,
            renewalInvoice: A,
            isUpdate: !0,
            isPrepaidPaymentSource: f,
            fractionalPremiumInfo: s,
            overrideRenewalDate: S,
            shouldUseUnifiedCheckoutUI: c,
            unifiedCheckoutDefaultExpanded: !0,
        });
    if (c) {
        let { lineItems: e } = (0, W.Ig)(A, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: f,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(B.Vm, { label: q.intl.string(z.default.eoXh7B), lineItems: e, currency: A.currency }),
                (0, l.jsx)(X, { containerNode: m.current, children: T }),
            ],
        });
    }
    return (0, l.jsxs)("div", {
        className: J.G3,
        children: [
            I,
            (0, l.jsxs)(L.Yx, {
                className: J.SU,
                children: [
                    (0, l.jsx)(L.Xd, { children: q.intl.string(q.t.iqhIp4) }),
                    (0, l.jsx)(L.oR, { label: t, value: (0, M.jh)(i, o, !0) }),
                    (0, l.jsx)(H.A, { invoice: A }),
                    (0, l.jsx)(L.pK, {}),
                    T,
                ],
            }),
        ],
    });
}
function es(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: r,
            planGroup: i,
            priceOptions: a,
            preventFetch: s,
            disabled: o,
            isEEA: u,
            paymentSources: c,
            setHasAcceptedTerms: d,
        } = e,
        { analyticsLocations: p } = (0, Y.Ay)(),
        m = (0, M.Pg)(n, r.id, 1, new Set(i)),
        {
            proratedInvoicePreview: C,
            renewalInvoicePreview: E,
            primaryInvoiceError: y,
        } = el({ premiumSubscription: n, newItems: m, priceOptions: a, preventFetch: s, analyticsLocations: p }),
        P = (0, g.g)(c, a.paymentSourceId);
    return null != y ||
        (null != E && (t = { amount: E.subtotal, currency: E.currency, tax: E.tax, taxInclusive: E.taxInclusive }),
        null == t)
        ? null
        : (0, l.jsx)(A.A, {
              onChange: d,
              finePrint: (0, l.jsx)(h.A, {
                  subscriptionPlan: r,
                  paymentSourceType: P,
                  basePrice: t,
                  proratedAmount: null != C ? C.total : void 0,
                  currentSubscription: n,
                  planGroup: i,
              }),
              forceShow: !0,
              showPricingLink: r.currency !== Z.Yri.USD,
              showWithdrawalWaiver: u,
              disabled: o,
              subscriptionPlan: r,
              currentSubscription: n,
              planGroup: i,
          });
}
function eo(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
            fractionalPremiumInfo: a,
            shouldUseUnifiedCheckoutUI: s,
            unifiedSubscriptionDetailsNode: o,
            setUnifiedPlainNoticeText: u,
        } = e,
        { analyticsLocations: c } = (0, Y.Ay)(),
        d = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "premium_checkout_invoice",
                    params: {
                        subscriptionId: t.id,
                        renewal: !0,
                        applyEntitlements: !0,
                        paymentSourceId: n.paymentSourceId,
                        currency: n.currency,
                        preventFetch: i,
                        analyticsLocations: c,
                        analyticsLocation: G.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
                    },
                },
                fetchRenewalInvoicePreviewRequest: {
                    type: "premium_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        renewal: !0,
                        paymentSourceId: n.paymentSourceId,
                        currency: n.currency,
                        preventFetch: i,
                        analyticsLocations: c,
                        analyticsLocation: G.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, i, c],
        );
    (0, F.E)(d);
    let {
            resumeInvoicePreview: p,
            renewalInvoicePreview: m,
            primaryInvoiceError: h,
        } = (0, P.t4)((e) => ({
            resumeInvoicePreview: e.checkoutInvoicePreview,
            renewalInvoicePreview: e.renewalInvoicePreview,
            primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
        })),
        A = r.useMemo(() => q.intl.string(q.t.spIYou), []);
    if ((et(u, { shouldUseUnifiedCheckoutUI: s, noticeCopy: A }), null != h)) return Q(h, s);
    if (null == p || null == m) return (0, l.jsx)(ee, { shouldUseUnifiedCheckoutUI: s });
    let C = (0, M.J$)(n.paymentSourceId),
        E = (0, l.jsx)(V.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: C,
            fractionalPremiumInfo: a,
            shouldUseUnifiedCheckoutUI: s,
        }),
        y = (0, l.jsx)("div", { className: $.o, children: A }),
        S = (0, l.jsx)(V._J, { invoice: p, isPrepaidPaymentSource: C, shouldUseUnifiedCheckoutUI: s });
    return s
        ? (0, l.jsxs)(l.Fragment, { children: [S, (0, l.jsx)(X, { containerNode: o.current, children: E })] })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  y,
                  (0, l.jsxs)(L.Yx, {
                      className: J.SU,
                      children: [(0, l.jsx)(L.Xd, { children: q.intl.string(q.t["2eh+Co"]) }), S, E],
                  }),
              ],
          });
}
n(321073);
var eu = n(717925),
    ec = n(755880),
    ed = n(134638),
    ep = n(906234);
let em = (e) => {
    let {
            disabled: t,
            showFractionalPremiumBanner: n,
            fractionalPremiumInfo: i,
            isPremiumGroupPurchase: a,
            paymentRestrictionBannerType: s,
            invoiceError: o,
            unifiedPlainNoticeText: u,
            invoicePreview: c,
            invoicePreviewComponent: d,
            shouldShowPlanSelectAndPromoBanner: p,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: m,
            newPlan: h,
            planId: A,
            priceOptions: C,
            premiumPlanOptions: E,
            unifiedSubscriptionDetailsNode: y,
            isInvoiceBilledImmediately: P,
            paymentMethodContent: S,
            legalContent: _,
        } = e,
        f = r.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(v.l$, { fractionalPremiumInfo: i }),
                        key: "fractional-premium-notice",
                    }),
                a && e.push({ type: "info", message: (0, N.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, O.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [a, s, o, n, i]),
        { priceOptions: I, planPricesLoading: g } = (0, M.Pr)(C, c, o),
        x = r.useMemo(() => (p ? (0, l.jsx)(T.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        R = (0, ep.G)(A),
        b = r.useMemo(() => (R ? (0, l.jsx)(ec.a, {}) : null), [R]),
        L = r.useMemo(() => (null != x ? x : null != b ? b : null), [x, b]),
        j = (0, M.J$)(C.paymentSourceId),
        w = null,
        U = null;
    p
        ? (U = (0, l.jsx)(v.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: E,
              selectedPlanId: A,
              showPlanStatusSubText: !0,
              priceOptions: I,
              planPricesLoading: g,
          }))
        : null != c &&
          (w = (0, l.jsx)(ed._, {
              type: D.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: j,
              isPremiumGroupPurchase: a,
              bottomSubText: u,
          }));
    let k = m ? d : (0, l.jsx)("div", { ref: y }),
        G = m ? null : d;
    return (0, l.jsx)(eu.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: f,
        paymentMethodContent: S,
        subscriptionDetailsContent: k,
        purchaseItemContent: w,
        planSelectContent: U,
        invoiceSummaryContent: G,
        legalContent: _,
        invoiceTotalDueLabel: P ? q.intl.string(z.default.R0cZsM) : q.intl.string(z.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, V.U5)(c) : void 0,
        promotionalNoticeContent: L,
    });
};
var eh = n(88001),
    eA = n(466919);
function eC(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: i,
            handlePaymentSourceAdd: s,
            planId: U,
            setHasAcceptedTerms: k,
            legalTermsNodeRef: G,
            hasLegalTermsFlash: Y,
            planGroup: F,
            hasOpenInvoice: B,
            purchaseState: W,
            handleClose: H,
            shouldUseUnifiedCheckoutUI: V,
        } = e,
        K = (0, y.mx)(),
        { hasPaymentSources: z } = (0, E.jm)(),
        {
            selectedSkuId: $,
            paymentSourceId: X,
            priceOptions: Q,
            renewalInvoicePreview: ee,
            checkoutInvoicePreview: et,
            checkoutInvoiceError: en,
            checkoutContextAvailablePlans: el,
        } = (0, P.t4)((e) => {
            let t = e.checkoutInvoicePreview,
                n = null != t && null != t.checkoutContext ? t.checkoutContext.available_plans : null;
            return {
                selectedSkuId: e.selectedSkuId,
                paymentSourceId: e.paymentSourceId,
                priceOptions: e.checkoutPriceOptions,
                renewalInvoicePreview: e.renewalInvoicePreview,
                checkoutInvoicePreview: t,
                checkoutContextAvailablePlans: n,
                checkoutInvoiceError: e.checkoutInvoiceError,
            };
        }),
        { isPremiumPurchase: eu, isPremiumGroupPurchase: ec } = (0, P.t4)((e) => e.get("selectedPlanAttributes")),
        ed = (0, P.t4)((e) => e.defaultPlanId),
        ep = (0, P.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        { isGift: eC } = (0, S.Pv)(),
        eE = (0, g.g)(i, X),
        ey = r.useMemo(() => (0, M.l6)(Q, el), [el, Q]),
        eP = (0, c.bG)([R.A], () => R.A.get(U));
    o()(null != eP, "Missing newPlan");
    let { showFractionalPremiumBanner: eS, fractionalPremiumInfo: e_ } = (0, N._V)({
            premiumSubscription: n,
            selectedPlanId: U,
            planGroup: F,
            isGift: eC,
        }),
        ef = u.M.EEA_COUNTRIES.has(x.A.ipCountryCodeWithFallback),
        eI = W === _.h.PURCHASING || W === _.h.COMPLETED,
        eT = (0, I.vT)({ isTrial: !1, isGift: eC, selectedSkuId: $, startedPaymentFlowWithPaymentSources: ep }),
        eN = n?.isPausedAllowsResumeButNotUpdates,
        ev = r.useMemo(() => (0, M.Tm)({ skuId: $, isPremium: eu, defaultPlanId: ed }), [$, ed, eu]);
    t =
        B || eN
            ? q.intl.string(q.t.nyzoFb)
            : ec
              ? q.intl.formatToPlainString(eA.default["3m9DJK"], { premiumGroupProductName: (0, eh.DP)() })
              : (0, M.ys)(U)
                ? (0, M.ff)(n, eP)
                : q.intl.formatToPlainString(q.t["sBpy9/"], { planName: eP.name });
    let eg = r.useRef(null),
        [ex, eR] = r.useState(null),
        [eM, eb] = r.useState(void 0),
        eL = r.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: V,
                unifiedSubscriptionDetailsNode: eg,
                setUnifiedPlainNoticeText: eR,
                setOverrideRenewalDate: eb,
            }),
            [V],
        ),
        {
            content: ej,
            isInvoiceBilledImmediately: eO,
            ...ew
        } = null != n
            ? (function (e, t, n) {
                  let { hasOpenInvoice: r, showResumeSubscriptionView: i, planId: a } = e,
                      {
                          disabled: s,
                          premiumSubscription: o,
                          newPlan: u,
                          planGroup: c,
                          fractionalPremiumInfo: d,
                          priceOptions: p,
                      } = t;
                  return r
                      ? {
                            content: (0, l.jsx)(er, {
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
                              content: (0, l.jsx)(eo, {
                                  premiumSubscription: o,
                                  priceOptions: p,
                                  preventFetch: s,
                                  fractionalPremiumInfo: d,
                                  ...n,
                              }),
                              isInvoiceBilledImmediately: !0,
                              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                          }
                        : (0, b.Ge)(o, a, c)
                          ? {
                                content: (0, l.jsx)(ei, {
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
                                content: (0, l.jsx)(ea, {
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
                  { hasOpenInvoice: B, showResumeSubscriptionView: eN, planId: U },
                  {
                      disabled: eI,
                      premiumSubscription: n,
                      newPlan: eP,
                      planGroup: F,
                      fractionalPremiumInfo: e_,
                      priceOptions: Q,
                  },
                  eL,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eD = n?.eligiblePaymentGateways,
        eU = null != eD && eD.length > 0 && (null == X || null === eE) && z ? O.fU.SELECT_PAYMENT_METHOD : void 0,
        ek = r.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: a()({ [J.E4]: eu }),
                shouldUseUnifiedCheckoutUI: V,
            }),
            [n?.eligiblePaymentGateways, eu, V],
        ),
        eG = null != et || null != en,
        eY = r.useMemo(
            () =>
                eG
                    ? (0, l.jsx)(C.N, {
                          label: q.intl.string(q.t["mmDvV+"]),
                          onPaymentSourceAdd: s,
                          disabled: eI,
                          additionalPaymentSourceDropdownProps: ek,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: Q.paymentSourceId,
                      })
                    : null,
            [eG, Q.paymentSourceId, ek, s, eI],
        ),
        eF = null != n && (0, b.Ge)(n, U, F),
        eB = V
            ? null != et && null != ee
                ? (0, l.jsx)(v.PI, {
                      overrideRenewalDate: eM,
                      planGroup: F,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eP,
                      isGift: eC,
                      paymentSourceType: eE,
                      isInvoiceBilledImmediately: eO,
                      invoiceSummaryTypeWithPreview: {
                          type: D.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: et,
                          renewalInvoicePreview: ee,
                      },
                      hideLegalContent: eF && null != K,
                  })
                : null
            : (0, l.jsx)(j.A, {
                  isActive: Y,
                  ref: G,
                  children: eF
                      ? (0, l.jsx)(es, {
                            premiumSubscription: n,
                            newPlan: eP,
                            planGroup: F,
                            priceOptions: Q,
                            preventFetch: eI,
                            disabled: eI,
                            isEEA: ef,
                            paymentSources: i,
                            setHasAcceptedTerms: k,
                        })
                      : (0, l.jsx)(A.A, {
                            onChange: k,
                            finePrint: (0, l.jsx)(h.A, {
                                subscriptionPlan: eP,
                                paymentSourceType: eE,
                                basePrice: (0, M.y8)(eP.id, !1, eC, ey),
                                currentSubscription: n,
                                planGroup: F,
                            }),
                            forceShow: !0,
                            showPricingLink: eP.currency !== Z.Yri.USD,
                            showWithdrawalWaiver: ef,
                            disabled: eI,
                            subscriptionPlan: eP,
                            currentSubscription: n,
                            planGroup: F,
                        }),
              }),
        eW = !eN && eT && !ec,
        eH = r.useMemo(() => (eW ? (0, l.jsx)(T.P, { planSkuId: eP.skuId }) : null), [eW, eP.skuId]);
    return V
        ? (0, l.jsx)(em, {
              disabled: eI,
              showFractionalPremiumBanner: eS,
              fractionalPremiumInfo: e_,
              isPremiumGroupPurchase: ec,
              paymentRestrictionBannerType: eU,
              invoiceError: K,
              unifiedPlainNoticeText: ex,
              invoicePreview: et,
              invoicePreviewComponent: ej,
              shouldShowPlanSelectAndPromoBanner: eW,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  ew.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eP,
              planId: U,
              priceOptions: Q,
              premiumPlanOptions: ev,
              unifiedSubscriptionDetailsNode: eg,
              isInvoiceBilledImmediately: eO,
              paymentMethodContent: eY,
              legalContent: eB,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(f.k, { location: "PremiumSwitchPlanReview", paymentSourceId: X }),
                  (0, l.jsxs)("div", {
                      className: J.Du,
                      children: [
                          (0, l.jsx)(O.je, { paymentRestrictionBannerType: eU }),
                          eW &&
                              (0, l.jsxs)("div", {
                                  children: [
                                      eH,
                                      (0, l.jsx)(w.$p, {
                                          disabled: eI,
                                          planOptions: ev,
                                          selectedPlanId: U,
                                          planGroup: F,
                                          showTotal: !1,
                                          priceOptions: ey,
                                          handleClose: H,
                                      }),
                                      (0, l.jsx)(L.pK, {}),
                                  ],
                              }),
                          ec &&
                              (0, l.jsx)("div", {
                                  className: J.Ni,
                                  children: (0, l.jsx)(d.w, {
                                      type: "info",
                                      children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, N.Nn)() }),
                                  }),
                              }),
                          (0, l.jsx)(m.D, { label: t, children: ej }),
                          (0, l.jsx)("div", { className: J.LC, children: eY }),
                          eB,
                      ],
                  }),
              ],
          });
}
