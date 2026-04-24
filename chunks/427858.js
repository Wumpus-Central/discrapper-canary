n.d(t, { A: () => eA });
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
    A = n(821891),
    C = n(953689),
    _ = n(61572),
    E = n(93159),
    y = n(94420),
    f = n(937008),
    P = n(156312),
    S = n(566980),
    T = n(800471),
    x = n(71867),
    N = n(222707),
    g = n(340034),
    I = n(216641),
    v = n(615405),
    b = n(97352),
    M = n(79387),
    L = n(927578),
    R = n(615396),
    j = n(735164),
    O = n(778307),
    D = n(218075),
    w = n(337092),
    U = n(299301),
    k = n(340287),
    Y = n(289873),
    F = n(793574),
    G = n(688810),
    B = n(848584),
    W = n(888751),
    H = n(543767),
    V = n(787455),
    K = n(692440),
    Z = n(788868),
    q = n(652215),
    z = n(985018),
    $ = n(327105),
    X = n(207715),
    J = n(814304);
function Q(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : k.createPortal(t, n);
}
let ee = (e, t) => (null == e || t ? null : (0, l.jsx)(d.w, { type: "critical", children: e.message })),
    et = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, l.jsx)("div", { className: X.l, children: (0, l.jsx)(Y.y, { type: Y.y.Type.PULSING_ELLIPSIS }) })
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
                analyticsLocation: F.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [s, o] = (0, H.Kq)({ ...r, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, H.Kq)({ ...r, renewal: !0 });
        return { proratedInvoicePreview: s, proratedInvoiceError: o, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function ei(e) {
    let {
            premiumSubscription: t,
            onInvoiceError: n,
            priceOptions: i,
            preventFetch: r,
            fractionalPremiumInfo: s,
            shouldUseUnifiedCheckoutUI: o,
            unifiedSubscriptionDetailsNode: u,
            onRenewalInvoicePreview: c,
        } = e,
        [d, p] = (0, H.C8)({ subscriptionId: t.id, preventFetch: r });
    (0, y.F0)(d),
        a.useEffect(() => {
            c(d);
        }, [c, d]),
        a.useEffect(() => {
            n(p);
        }, [n, p]);
    let m = (0, L.J$)(i.paymentSourceId);
    if (null != d) {
        let e = (0, l.jsx)(K.m0, {
                premiumSubscription: t,
                renewalInvoice: d,
                isUpdate: !0,
                isPrepaidPaymentSource: m,
                fractionalPremiumInfo: s,
                shouldUseUnifiedCheckoutUI: o,
            }),
            n = (0, l.jsx)(K._J, { invoice: d, isPrepaidPaymentSource: m, shouldUseUnifiedCheckoutUI: o });
        return o
            ? (0, l.jsxs)(l.Fragment, { children: [n, (0, l.jsx)(Q, { containerNode: u.current, children: e })] })
            : (0, l.jsxs)(j.Yx, { className: X.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: o });
}
function er(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            onInvoiceError: i,
            planGroup: s,
            priceOptions: o,
            fractionalPremiumInfo: u,
            preventFetch: c,
            unifiedSubscriptionDetailsNode: d,
            setUnifiedPlainNoticeText: p,
            setOverrideRenewalDate: m,
            shouldUseUnifiedCheckoutUI: h,
            onRenewalInvoicePreview: A,
        } = e,
        C = (0, y.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: _, premiumBrandRefreshBackgroundClassName: E } = (0, P.P5)(),
        { isGift: S } = (0, f.Pv)(),
        { analyticsLocations: x } = (0, G.Ay)(),
        N = (0, L.Pg)(t, n.id, 1, new Set(s)),
        {
            proratedInvoicePreview: I,
            proratedInvoiceError: v,
            renewalInvoicePreview: b,
            renewalInvoiceError: M,
        } = ea({ premiumSubscription: t, newItems: N, priceOptions: o, preventFetch: c, analyticsLocations: x });
    a.useEffect(() => {
        A(b);
    }, [A, b]),
        (0, y.F0)(I);
    let R = v ?? M;
    a.useEffect(() => {
        i(R);
    }, [i, R]);
    let { planSwitchNoticeCopy: O, overrideRenewalDate: D } = a.useMemo(() => {
        let e;
        return (null !== u &&
            null !== I &&
            (e = (0, L._e)(I.subscriptionPeriodEnd, u.unactivatedUnits, u.currentEntitlementEndsAt)),
        null != I && null != b)
            ? {
                  overrideRenewalDate: e,
                  planSwitchNoticeCopy: (0, K.DK)({ proratedInvoice: I, renewalInvoice: b, overrideRenewalDate: e }),
              }
            : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
    }, [I, b, u]);
    if (
        (el(m, { shouldUseUnifiedCheckoutUI: h, overrideRenewalDate: D }),
        en(p, { shouldUseUnifiedCheckoutUI: h, noticeCopy: O }),
        null != R)
    )
        return ee(R, h);
    let w = (0, T.vT)({ isTrial: !1, isGift: S, selectedSkuId: C, startedPaymentFlowWithPaymentSources: _.current }),
        k = (0, T.UB)(w, I, n);
    if (null == I || null == b || k) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: h });
    let Y = (0, L.J$)(o.paymentSourceId),
        F = (0, l.jsx)(K.m0, {
            premiumSubscription: t,
            proratedInvoice: I,
            renewalInvoice: b,
            overrideRenewalDate: D,
            isPrepaidPaymentSource: Y,
            fractionalPremiumInfo: u,
            isUpdate: !0,
            shouldUseUnifiedCheckoutUI: h,
        });
    return h
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(g.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: U.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: I,
                          renewalInvoicePreview: b,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: Y,
                      subscriptionTrial: null,
                  }),
                  (0, l.jsx)(Q, { containerNode: d.current, children: F }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(K.wP, { proratedInvoice: I, renewalInvoice: b, overrideRenewalDate: D }),
                  (0, l.jsxs)(j.Yx, {
                      className: r()(J.SU, E),
                      children: [
                          (0, l.jsx)(j.Xd, { children: z.intl.string(z.t["2eh+Co"]) }),
                          (0, l.jsx)(K.mT, { invoice: I, newPlan: n, isPrepaidPaymentSource: Y }),
                          F,
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
            planGroup: s,
            fractionalPremiumInfo: o,
            priceOptions: u,
            preventFetch: c,
            onInvoiceError: d,
            shouldUseUnifiedCheckoutUI: p,
            setUnifiedPlainNoticeText: m,
            setOverrideRenewalDate: h,
            onRenewalInvoicePreview: A,
            unifiedSubscriptionDetailsNode: C,
        } = e,
        { premiumBrandRefreshBackgroundClassName: _ } = (0, P.P5)(),
        { analyticsLocations: E } = (0, G.Ay)(),
        [f, S] = (0, H.Kq)({
            subscriptionId: n.id,
            items: (0, L.Pg)(n, i.id, 1, new Set(s)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: E,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    (0, y.F0)(f),
        a.useEffect(() => {
            A(f);
        }, [A, f]),
        a.useEffect(() => {
            d(S);
        }, [d, S]);
    let { renewalDate: T, planSwitchNoticeCopy: x } = a.useMemo(() => {
        if (null == f) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = f.subscriptionPeriodStart;
        return (
            o.fractionalState === Z.xc.FP_SUB_PAUSED && (e = o.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: z.intl.format(z.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [f, o.fractionalState, o.endsAt]);
    if (
        (el(h, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: T }),
        en(m, { shouldUseUnifiedCheckoutUI: p, noticeCopy: x }),
        null != S)
    )
        return ee(S, p);
    if (null == f) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: p });
    t = n.type === q.rzx.PREMIUM ? (0, L.Mn)(i.id) : i.name;
    let N = (0, L.J$)(u.paymentSourceId),
        g = (0, l.jsx)("div", { className: X.o, children: x }),
        I = (0, l.jsx)(K.m0, {
            premiumSubscription: n,
            renewalInvoice: f,
            isUpdate: !0,
            isPrepaidPaymentSource: N,
            fractionalPremiumInfo: o,
            overrideRenewalDate: T,
            shouldUseUnifiedCheckoutUI: p,
            unifiedCheckoutDefaultExpanded: !0,
        });
    if (p) {
        let { lineItems: e } = (0, W.Ig)(f, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: N,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(B.Vm, { label: z.intl.string($.default.eoXh7B), lineItems: e, currency: f.currency }),
                (0, l.jsx)(Q, { containerNode: C.current, children: I }),
            ],
        });
    }
    return (0, l.jsxs)("div", {
        className: J.G3,
        children: [
            g,
            (0, l.jsxs)(j.Yx, {
                className: r()(J.SU, _),
                children: [
                    (0, l.jsx)(j.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                    (0, l.jsx)(j.oR, { label: t, value: (0, L.jh)(i, u, !0) }),
                    (0, l.jsx)(V.A, { invoice: f }),
                    (0, l.jsx)(j.pK, {}),
                    I,
                ],
            }),
        ],
    });
}
function eo(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: i,
            onInvoiceError: r,
            planGroup: s,
            priceOptions: o,
            preventFetch: u,
            disabled: c,
            isEEA: d,
            paymentSources: p,
            setHasAcceptedTerms: m,
            onRenewalInvoicePreview: h,
        } = e,
        { analyticsLocations: _ } = (0, G.Ay)(),
        E = (0, L.Pg)(n, i.id, 1, new Set(s)),
        {
            proratedInvoicePreview: y,
            proratedInvoiceError: f,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        } = ea({ premiumSubscription: n, newItems: E, priceOptions: o, preventFetch: u, analyticsLocations: _ });
    a.useEffect(() => {
        h(P);
    }, [h, P]);
    let T = (0, I.g)(p, o.paymentSourceId),
        x = S ?? f;
    return (a.useEffect(() => {
        r(x);
    }, [r, x]),
    null != x ||
        (null != P && (t = { amount: P.subtotal, currency: P.currency, tax: P.tax, taxInclusive: P.taxInclusive }),
        null == t))
        ? null
        : (0, l.jsx)(C.A, {
              onChange: m,
              finePrint: (0, l.jsx)(A.A, {
                  subscriptionPlan: i,
                  paymentSourceType: T,
                  basePrice: t,
                  proratedAmount: null != y ? y.total : void 0,
                  currentSubscription: n,
                  planGroup: s,
              }),
              forceShow: !0,
              showPricingLink: i.currency !== q.Yri.USD,
              showWithdrawalWaiver: d,
              disabled: c,
              subscriptionPlan: i,
              currentSubscription: n,
              planGroup: s,
          });
}
function eu(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
            fractionalPremiumInfo: s,
            onInvoiceError: o,
            shouldUseUnifiedCheckoutUI: u,
            unifiedSubscriptionDetailsNode: c,
            setUnifiedPlainNoticeText: d,
            onRenewalInvoicePreview: p,
        } = e,
        { premiumBrandRefreshBackgroundClassName: m } = (0, P.P5)(),
        { analyticsLocations: h } = (0, G.Ay)(),
        [A, C] = (0, H.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: i,
            analyticsLocations: h,
            analyticsLocation: F.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [_, E] = (0, H.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: i,
            analyticsLocations: h,
            analyticsLocation: F.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    (0, y.F0)(A),
        a.useEffect(() => {
            p(_);
        }, [p, _]);
    let f = C ?? E;
    a.useEffect(() => {
        o(f);
    }, [o, f]);
    let S = a.useMemo(() => z.intl.string(z.t.spIYou), []);
    if ((en(d, { shouldUseUnifiedCheckoutUI: u, noticeCopy: S }), null != f)) return ee(f, u);
    if (null == A || null == _) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: u });
    let T = (0, L.J$)(n.paymentSourceId),
        x = (0, l.jsx)(K.m0, {
            premiumSubscription: t,
            renewalInvoice: _,
            isUpdate: !0,
            isPrepaidPaymentSource: T,
            fractionalPremiumInfo: s,
            shouldUseUnifiedCheckoutUI: u,
        }),
        N = (0, l.jsx)("div", { className: X.o, children: S }),
        g = (0, l.jsx)(K._J, { invoice: A, isPrepaidPaymentSource: T, shouldUseUnifiedCheckoutUI: u });
    return u
        ? (0, l.jsxs)(l.Fragment, { children: [g, (0, l.jsx)(Q, { containerNode: c.current, children: x })] })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  N,
                  (0, l.jsxs)(j.Yx, {
                      className: r()(J.SU, m),
                      children: [(0, l.jsx)(j.Xd, { children: z.intl.string(z.t["2eh+Co"]) }), g, x],
                  }),
              ],
          });
}
n(321073);
var ec = n(69882),
    ed = n(134638);
let ep = (e) => {
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
            planId: A,
            priceOptions: C,
            premiumPlanOptions: _,
            unifiedSubscriptionDetailsNode: E,
            isInvoiceBilledImmediately: y,
            paymentSelectContent: f,
            currencySelectComponent: P,
            legalContent: S,
        } = e,
        T = a.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(g.l$, { fractionalPremiumInfo: i }),
                        key: "fractional-premium-notice",
                    }),
                r && e.push({ type: "info", message: (0, N.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, D.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [r, s, o, n, i]),
        I = a.useMemo(() => (0, L.l6)(C, c?.checkoutContext?.available_plans), [C, c]),
        v = a.useMemo(() => (p ? (0, l.jsx)(x.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        b = (0, L.J$)(C.paymentSourceId),
        M = null,
        R = null;
    p
        ? (R = (0, l.jsx)(g.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: _,
              selectedPlanId: A,
              showPlanStatusSubText: !0,
              priceOptions: I,
          }))
        : null != c &&
          (M = (0, l.jsx)(ed._, {
              type: U.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: b,
              isPremiumGroupPurchase: r,
              bottomSubText: u,
          }));
    let j = m ? d : (0, l.jsx)("div", { ref: E }),
        O = m ? null : d;
    return (0, l.jsx)(ec.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: T,
        paymentSelectContent: (0, l.jsxs)(l.Fragment, { children: [f, P] }),
        subscriptionDetailsContent: j,
        purchaseItemContent: M,
        planSelectContent: R,
        invoiceSummaryContent: O,
        legalContent: S,
        invoiceTotalDueLabel: y ? z.intl.string($.default.R0cZsM) : z.intl.string($.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, K.U5)(c) : void 0,
        promotionalNoticeContent: v,
    });
};
var em = n(88001),
    eh = n(466919);
function eA(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: i,
            priceOptions: s,
            onPaymentSourceAdd: k,
            planId: Y,
            setHasAcceptedTerms: F,
            legalTermsNodeRef: G,
            hasLegalTermsFlash: B,
            onInvoiceError: W,
            invoiceError: H,
            planGroup: V,
            currencies: K,
            onCurrencyChange: Z,
            hasOpenInvoice: $,
            purchaseState: X,
            handleClose: Q,
            shouldUseUnifiedCheckoutUI: ee,
        } = e,
        et = (0, y.t4)((e) => e.selectedSkuId),
        {
            defaultPlanId: en,
            isPremium: el,
            startedPaymentFlowWithPaymentSourcesRef: ea,
            hasPaymentSources: ec,
            enablePremiumBrandRefresh: ed,
            isPremiumGroupPurchase: eA,
            paymentSourceId: eC,
            displayCurrency: e_,
        } = (0, P.P5)(),
        eE = (0, y.sw)(),
        { isGift: ey } = (0, f.Pv)(),
        ef = (0, I.g)(i, eC),
        eP = a.useMemo(() => (0, L.l6)(s, eE?.checkoutContext?.available_plans), [eE, s]),
        eS = (0, c.bG)([b.A], () => b.A.get(Y));
    o()(null != eS, "Missing newPlan");
    let { showFractionalPremiumBanner: eT, fractionalPremiumInfo: ex } = (0, N._V)({
            premiumSubscription: n,
            selectedPlanId: Y,
            planGroup: V,
            isGift: ey,
        }),
        [eN, eg] = a.useState(null),
        eI = u.M.EEA_COUNTRIES.has(v.A.ipCountryCodeWithFallback),
        ev = X === S.h.PURCHASING || X === S.h.COMPLETED,
        eb = (0, T.vT)({
            isTrial: !1,
            isGift: ey,
            selectedSkuId: et,
            startedPaymentFlowWithPaymentSources: ea.current,
        }),
        eM = n?.isPausedAllowsResumeButNotUpdates,
        eL = a.useMemo(() => (0, L.Tm)({ skuId: et, isPremium: el, defaultPlanId: en }), [et, en, el]);
    t =
        $ || eM
            ? z.intl.string(z.t.nyzoFb)
            : eA
              ? z.intl.formatToPlainString(eh.default["3m9DJK"], { premiumGroupProductName: (0, em.DP)() })
              : (0, L.ys)(Y)
                ? (0, L.ff)(n, eS)
                : z.intl.formatToPlainString(z.t["sBpy9/"], { planName: eS.name });
    let eR = a.useRef(null),
        [ej, eO] = a.useState(null),
        [eD, ew] = a.useState(void 0),
        eU = a.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: ee,
                unifiedSubscriptionDetailsNode: eR,
                setUnifiedPlainNoticeText: eO,
                setOverrideRenewalDate: ew,
            }),
            [ee],
        ),
        {
            content: ek,
            isInvoiceBilledImmediately: eY,
            ...eF
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
                          onInvoiceError: m,
                          onRenewalInvoicePreview: h,
                      } = t;
                  return a
                      ? {
                            content: (0, l.jsx)(ei, {
                                premiumSubscription: o,
                                onInvoiceError: m,
                                priceOptions: p,
                                preventFetch: !1,
                                onRenewalInvoicePreview: h,
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
                                  onInvoiceError: m,
                                  priceOptions: p,
                                  preventFetch: s,
                                  onRenewalInvoicePreview: h,
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
                                    onInvoiceError: m,
                                    planGroup: c,
                                    priceOptions: p,
                                    fractionalPremiumInfo: d,
                                    preventFetch: s,
                                    onRenewalInvoicePreview: h,
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
                                    onInvoiceError: m,
                                    onRenewalInvoicePreview: h,
                                    ...n,
                                }),
                            };
              })(
                  { hasOpenInvoice: $, showResumeSubscriptionView: eM, planId: Y },
                  {
                      disabled: ev,
                      premiumSubscription: n,
                      newPlan: eS,
                      planGroup: V,
                      fractionalPremiumInfo: ex,
                      priceOptions: s,
                      onInvoiceError: W,
                      onRenewalInvoicePreview: eg,
                  },
                  eU,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eG = n?.eligiblePaymentGateways,
        eB = null != eG && eG.length > 0 && (eC === M.B || null === ef) && ec ? D.fU.SELECT_PAYMENT_METHOD : void 0,
        eW = a.useMemo(
            () => ({
                label: z.intl.string(z.t["/AAR02"]),
                selectedCurrency: s.currency ?? e_,
                currencies: K,
                onChange: Z,
                disabled: ev,
            }),
            [K, Z, s, e_, ev],
        ),
        eH = a.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: r()({ [J.E4]: ed }),
                shouldUseUnifiedCheckoutUI: ee,
            }),
            [n?.eligiblePaymentGateways, ed, ee],
        ),
        eV = (0, l.jsx)(_.N, {
            label: z.intl.string(z.t["mmDvV+"]),
            onPaymentSourceAdd: k,
            disabled: ev,
            additionalPaymentSourceDropdownProps: eH,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: s.paymentSourceId,
        }),
        eK = null != n && (0, R.Ge)(n, Y, V),
        eZ = ee
            ? null != eE && null != eN
                ? (0, l.jsx)(g.PI, {
                      overrideRenewalDate: eD,
                      planGroup: V,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eS,
                      isGift: ey,
                      paymentSourceType: ef,
                      isInvoiceBilledImmediately: eY,
                      invoiceSummaryTypeWithPreview: {
                          type: U.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: eE,
                          renewalInvoicePreview: eN,
                      },
                      hideLegalContent: eK && null != H,
                  })
                : null
            : (0, l.jsx)(O.A, {
                  isActive: B,
                  ref: G,
                  children: eK
                      ? (0, l.jsx)(eo, {
                            premiumSubscription: n,
                            newPlan: eS,
                            onInvoiceError: W,
                            planGroup: V,
                            priceOptions: s,
                            preventFetch: ev,
                            disabled: ev,
                            isEEA: eI,
                            paymentSources: i,
                            setHasAcceptedTerms: F,
                            onRenewalInvoicePreview: eg,
                        })
                      : (0, l.jsx)(C.A, {
                            onChange: F,
                            finePrint: (0, l.jsx)(A.A, {
                                subscriptionPlan: eS,
                                paymentSourceType: ef,
                                basePrice: (0, L.y8)(eS.id, !1, ey, eP),
                                currentSubscription: n,
                                planGroup: V,
                            }),
                            forceShow: !0,
                            showPricingLink: eS.currency !== q.Yri.USD,
                            showWithdrawalWaiver: eI,
                            disabled: ev,
                            subscriptionPlan: eS,
                            currentSubscription: n,
                            planGroup: V,
                        }),
              }),
        eq = !eM && eb && !eA,
        ez = a.useMemo(() => (eq ? (0, l.jsx)(x.P, { planSkuId: eS.skuId }) : null), [eq, eS.skuId]);
    return ee
        ? (0, l.jsx)(ep, {
              disabled: ev,
              showFractionalPremiumBanner: eT,
              fractionalPremiumInfo: ex,
              isPremiumGroupPurchase: eA,
              paymentRestrictionBannerType: eB,
              invoiceError: H,
              unifiedPlainNoticeText: ej,
              invoicePreview: eE,
              invoicePreviewComponent: ek,
              shouldShowPlanSelectAndPromoBanner: eq,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eF.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eS,
              planId: Y,
              priceOptions: s,
              premiumPlanOptions: eL,
              unifiedSubscriptionDetailsNode: eR,
              isInvoiceBilledImmediately: eY,
              paymentSelectContent: eV,
              currencySelectComponent: (0, l.jsx)(E.qX, { ...eW }),
              legalContent: eZ,
          })
        : (0, l.jsxs)("div", {
              className: J.Du,
              children: [
                  (0, l.jsx)(D.je, { paymentRestrictionBannerType: eB }),
                  eq &&
                      (0, l.jsxs)("div", {
                          children: [
                              ez,
                              (0, l.jsx)(w.$p, {
                                  disabled: ev,
                                  planOptions: eL,
                                  selectedPlanId: Y,
                                  planGroup: V,
                                  showTotal: !1,
                                  priceOptions: eP,
                                  handleClose: Q,
                              }),
                              (0, l.jsx)(j.pK, {}),
                          ],
                      }),
                  eA &&
                      (0, l.jsx)("div", {
                          className: J.Ni,
                          children: (0, l.jsx)(d.w, {
                              type: "info",
                              children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, N.Nn)() }),
                          }),
                      }),
                  (0, l.jsx)(m.D, { label: t, children: ek }),
                  (0, l.jsx)("div", { className: J.LC, children: eV }),
                  (0, l.jsx)(h.f, { currencies: K, className: J.p2, children: (0, l.jsx)(h.A, { ...eW }) }),
                  eZ,
              ],
          });
}
