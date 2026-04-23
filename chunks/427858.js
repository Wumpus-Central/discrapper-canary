"use strict";
n.d(t, { A: () => em });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    d = n(997101),
    _ = n(17928),
    u = n(683071),
    c = n(834730),
    E = n(452027),
    h = n(457287),
    m = n(821891),
    f = n(953689),
    g = n(624055),
    p = n(232467),
    A = n(94420),
    I = n(937008),
    T = n(156312),
    S = n(566980),
    N = n(800471),
    C = n(71867),
    R = n(222707),
    O = n(340034),
    y = n(216641),
    v = n(615405),
    D = n(97352),
    L = n(79387),
    b = n(927578),
    w = n(615396),
    P = n(735164),
    k = n(778307),
    M = n(218075),
    U = n(337092),
    x = n(299301),
    G = n(340287),
    V = n(289873),
    F = n(793574),
    B = n(688810),
    H = n(848584),
    j = n(888751),
    W = n(543767),
    Y = n(787455),
    K = n(692440),
    z = n(788868),
    $ = n(652215),
    q = n(985018),
    X = n(327105),
    Z = n(207715),
    Q = n(814304);
function J(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : G.createPortal(t, n);
}
let ee = (e, t) => (null == e || t ? null : (0, i.jsx)(u.w, { type: "critical", children: e.message })),
    et = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, i.jsx)("div", { className: Z.l, children: (0, i.jsx)(V.y, { type: V.y.Type.PULSING_ELLIPSIS }) })
            : (0, i.jsx)(V.y, {});
    },
    en = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: i } = t;
        r.useEffect(() => {
            n && (null != i ? e(i) : e(null));
        }, [e, n, i]);
    },
    ei = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: i } = t;
        r.useEffect(() => {
            n && e(i);
        }, [e, n, i]);
    },
    er = (e) => {
        let { premiumSubscription: t, newItems: n, priceOptions: i, preventFetch: r, analyticsLocations: s } = e,
            a = {
                subscriptionId: t.id,
                items: n,
                paymentSourceId: i.paymentSourceId,
                currency: i.currency,
                preventFetch: r,
                analyticsLocations: s,
                analyticsLocation: F.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [o, l] = (0, W.Kq)({ ...a, renewal: !1, applyEntitlements: !0 }),
            [d, _] = (0, W.Kq)({ ...a, renewal: !0 });
        return { proratedInvoicePreview: o, proratedInvoiceError: l, renewalInvoicePreview: d, renewalInvoiceError: _ };
    };
function es(e) {
    let {
            premiumSubscription: t,
            onInvoiceError: n,
            priceOptions: s,
            preventFetch: a,
            fractionalPremiumInfo: o,
            shouldUseUnifiedCheckoutUI: l,
            unifiedSubscriptionDetailsNode: d,
            onRenewalInvoicePreview: _,
        } = e,
        [u, c] = (0, W.C8)({ subscriptionId: t.id, preventFetch: a });
    (0, A.F0)(u),
        r.useEffect(() => {
            _(u);
        }, [_, u]),
        r.useEffect(() => {
            n(c);
        }, [n, c]);
    let E = (0, b.J$)(s.paymentSourceId);
    if (null != u) {
        let e = (0, i.jsx)(K.m0, {
                premiumSubscription: t,
                renewalInvoice: u,
                isUpdate: !0,
                isPrepaidPaymentSource: E,
                fractionalPremiumInfo: o,
                shouldUseUnifiedCheckoutUI: l,
            }),
            n = (0, i.jsx)(K._J, { invoice: u, isPrepaidPaymentSource: E, shouldUseUnifiedCheckoutUI: l });
        return l
            ? (0, i.jsxs)(i.Fragment, { children: [n, (0, i.jsx)(J, { containerNode: d.current, children: e })] })
            : (0, i.jsxs)(P.Yx, { className: Z.__invalid_invoice, children: [n, e] });
    }
    return (0, i.jsx)(et, { shouldUseUnifiedCheckoutUI: l });
}
function ea(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            onInvoiceError: s,
            planGroup: o,
            priceOptions: l,
            fractionalPremiumInfo: d,
            preventFetch: _,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: c,
            setOverrideRenewalDate: E,
            shouldUseUnifiedCheckoutUI: h,
            onRenewalInvoicePreview: m,
        } = e,
        f = (0, A.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: g, premiumBrandRefreshBackgroundClassName: p } = (0, T.P5)(),
        { isGift: S } = (0, I.Pv)(),
        { analyticsLocations: C } = (0, B.Ay)(),
        R = (0, b.Pg)(t, n.id, 1, new Set(o)),
        {
            proratedInvoicePreview: y,
            proratedInvoiceError: v,
            renewalInvoicePreview: D,
            renewalInvoiceError: L,
        } = er({ premiumSubscription: t, newItems: R, priceOptions: l, preventFetch: _, analyticsLocations: C });
    r.useEffect(() => {
        m(D);
    }, [m, D]),
        (0, A.F0)(y);
    let w = v ?? L;
    r.useEffect(() => {
        s(w);
    }, [s, w]);
    let { planSwitchNoticeCopy: k, overrideRenewalDate: M } = r.useMemo(() => {
        let e;
        return (null !== d &&
            null !== y &&
            (e = (0, b._e)(y.subscriptionPeriodEnd, d.unactivatedUnits, d.currentEntitlementEndsAt)),
        null != y && null != D)
            ? {
                  overrideRenewalDate: e,
                  planSwitchNoticeCopy: (0, K.DK)({ proratedInvoice: y, renewalInvoice: D, overrideRenewalDate: e }),
              }
            : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
    }, [y, D, d]);
    if (
        (ei(E, { shouldUseUnifiedCheckoutUI: h, overrideRenewalDate: M }),
        en(c, { shouldUseUnifiedCheckoutUI: h, noticeCopy: k }),
        null != w)
    )
        return ee(w, h);
    let U = (0, N.vT)({ isTrial: !1, isGift: S, selectedSkuId: f, startedPaymentFlowWithPaymentSources: g.current }),
        G = (0, N.UB)(U, y, n);
    if (null == y || null == D || G) return (0, i.jsx)(et, { shouldUseUnifiedCheckoutUI: h });
    let V = (0, b.J$)(l.paymentSourceId),
        F = (0, i.jsx)(K.m0, {
            premiumSubscription: t,
            proratedInvoice: y,
            renewalInvoice: D,
            overrideRenewalDate: M,
            isPrepaidPaymentSource: V,
            fractionalPremiumInfo: d,
            isUpdate: !0,
            shouldUseUnifiedCheckoutUI: h,
        });
    return h
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(O.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: x.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: y,
                          renewalInvoicePreview: D,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: V,
                      subscriptionTrial: null,
                  }),
                  (0, i.jsx)(J, { containerNode: u.current, children: F }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(K.wP, { proratedInvoice: y, renewalInvoice: D, overrideRenewalDate: M }),
                  (0, i.jsxs)(P.Yx, {
                      className: a()(Q.SU, p),
                      children: [
                          (0, i.jsx)(P.Xd, { children: q.intl.string(q.t["2eh+Co"]) }),
                          (0, i.jsx)(K.mT, { invoice: y, newPlan: n, isPrepaidPaymentSource: V }),
                          F,
                      ],
                  }),
              ],
          });
}
function eo(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: s,
            planGroup: o,
            fractionalPremiumInfo: l,
            priceOptions: d,
            preventFetch: _,
            onInvoiceError: u,
            shouldUseUnifiedCheckoutUI: c,
            setUnifiedPlainNoticeText: E,
            setOverrideRenewalDate: h,
            onRenewalInvoicePreview: m,
            unifiedSubscriptionDetailsNode: f,
        } = e,
        { premiumBrandRefreshBackgroundClassName: g } = (0, T.P5)(),
        { analyticsLocations: p } = (0, B.Ay)(),
        [I, S] = (0, W.Kq)({
            subscriptionId: n.id,
            items: (0, b.Pg)(n, s.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: d.paymentSourceId,
            currency: d.currency,
            preventFetch: _,
            analyticsLocations: p,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    (0, A.F0)(I),
        r.useEffect(() => {
            m(I);
        }, [m, I]),
        r.useEffect(() => {
            u(S);
        }, [u, S]);
    let { renewalDate: N, planSwitchNoticeCopy: C } = r.useMemo(() => {
        if (null == I) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = I.subscriptionPeriodStart;
        return (
            l.fractionalState === z.xc.FP_SUB_PAUSED && (e = l.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: q.intl.format(q.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [I, l.fractionalState, l.endsAt]);
    if (
        (ei(h, { shouldUseUnifiedCheckoutUI: c, overrideRenewalDate: N }),
        en(E, { shouldUseUnifiedCheckoutUI: c, noticeCopy: C }),
        null != S)
    )
        return ee(S, c);
    if (null == I) return (0, i.jsx)(et, { shouldUseUnifiedCheckoutUI: c });
    t = n.type === $.rzx.PREMIUM ? (0, b.Mn)(s.id) : s.name;
    let R = (0, b.J$)(d.paymentSourceId),
        O = (0, i.jsx)("div", { className: Z.o, children: C }),
        y = (0, i.jsx)(K.m0, {
            premiumSubscription: n,
            renewalInvoice: I,
            isUpdate: !0,
            isPrepaidPaymentSource: R,
            fractionalPremiumInfo: l,
            overrideRenewalDate: N,
            shouldUseUnifiedCheckoutUI: c,
            unifiedCheckoutDefaultExpanded: !0,
        });
    if (c) {
        let { lineItems: e } = (0, j.Ig)(I, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: R,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.Vm, { label: q.intl.string(X.default.eoXh7B), lineItems: e, currency: I.currency }),
                (0, i.jsx)(J, { containerNode: f.current, children: y }),
            ],
        });
    }
    return (0, i.jsxs)("div", {
        className: Q.G3,
        children: [
            O,
            (0, i.jsxs)(P.Yx, {
                className: a()(Q.SU, g),
                children: [
                    (0, i.jsx)(P.Xd, { children: q.intl.string(q.t.iqhIp4) }),
                    (0, i.jsx)(P.oR, { label: t, value: (0, b.jh)(s, d, !0) }),
                    (0, i.jsx)(Y.A, { invoice: I }),
                    (0, i.jsx)(P.pK, {}),
                    y,
                ],
            }),
        ],
    });
}
function el(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: s,
            onInvoiceError: a,
            planGroup: o,
            priceOptions: l,
            preventFetch: d,
            disabled: _,
            isEEA: u,
            paymentSources: c,
            setHasAcceptedTerms: E,
            onRenewalInvoicePreview: h,
        } = e,
        { analyticsLocations: g } = (0, B.Ay)(),
        p = (0, b.Pg)(n, s.id, 1, new Set(o)),
        {
            proratedInvoicePreview: A,
            proratedInvoiceError: I,
            renewalInvoicePreview: T,
            renewalInvoiceError: S,
        } = er({ premiumSubscription: n, newItems: p, priceOptions: l, preventFetch: d, analyticsLocations: g });
    r.useEffect(() => {
        h(T);
    }, [h, T]);
    let N = (0, y.g)(c, l.paymentSourceId),
        C = S ?? I;
    return (r.useEffect(() => {
        a(C);
    }, [a, C]),
    null != C ||
        (null != T && (t = { amount: T.subtotal, currency: T.currency, tax: T.tax, taxInclusive: T.taxInclusive }),
        null == t))
        ? null
        : (0, i.jsx)(f.A, {
              onChange: E,
              finePrint: (0, i.jsx)(m.A, {
                  subscriptionPlan: s,
                  paymentSourceType: N,
                  basePrice: t,
                  proratedAmount: null != A ? A.total : void 0,
                  currentSubscription: n,
                  planGroup: o,
              }),
              forceShow: !0,
              showPricingLink: s.currency !== $.Yri.USD,
              showWithdrawalWaiver: u,
              disabled: _,
              subscriptionPlan: s,
              currentSubscription: n,
              planGroup: o,
          });
}
function ed(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            fractionalPremiumInfo: o,
            onInvoiceError: l,
            shouldUseUnifiedCheckoutUI: d,
            unifiedSubscriptionDetailsNode: _,
            setUnifiedPlainNoticeText: u,
            onRenewalInvoicePreview: c,
        } = e,
        { premiumBrandRefreshBackgroundClassName: E } = (0, T.P5)(),
        { analyticsLocations: h } = (0, B.Ay)(),
        [m, f] = (0, W.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: h,
            analyticsLocation: F.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [g, p] = (0, W.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: h,
            analyticsLocation: F.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    (0, A.F0)(m),
        r.useEffect(() => {
            c(g);
        }, [c, g]);
    let I = f ?? p;
    r.useEffect(() => {
        l(I);
    }, [l, I]);
    let S = r.useMemo(() => q.intl.string(q.t.spIYou), []);
    if ((en(u, { shouldUseUnifiedCheckoutUI: d, noticeCopy: S }), null != I)) return ee(I, d);
    if (null == m || null == g) return (0, i.jsx)(et, { shouldUseUnifiedCheckoutUI: d });
    let N = (0, b.J$)(n.paymentSourceId),
        C = (0, i.jsx)(K.m0, {
            premiumSubscription: t,
            renewalInvoice: g,
            isUpdate: !0,
            isPrepaidPaymentSource: N,
            fractionalPremiumInfo: o,
            shouldUseUnifiedCheckoutUI: d,
        }),
        R = (0, i.jsx)("div", { className: Z.o, children: S }),
        O = (0, i.jsx)(K._J, { invoice: m, isPrepaidPaymentSource: N, shouldUseUnifiedCheckoutUI: d });
    return d
        ? (0, i.jsxs)(i.Fragment, { children: [O, (0, i.jsx)(J, { containerNode: _.current, children: C })] })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  R,
                  (0, i.jsxs)(P.Yx, {
                      className: a()(Q.SU, E),
                      children: [(0, i.jsx)(P.Xd, { children: q.intl.string(q.t["2eh+Co"]) }), O, C],
                  }),
              ],
          });
}
n(321073);
var e_ = n(69882),
    eu = n(134638);
let ec = (e) => {
    let {
            disabled: t,
            showFractionalPremiumBanner: n,
            fractionalPremiumInfo: s,
            isPremiumGroupPurchase: a,
            paymentRestrictionBannerType: o,
            invoiceError: l,
            unifiedPlainNoticeText: d,
            invoicePreview: _,
            invoicePreviewComponent: u,
            shouldShowPlanSelectAndPromoBanner: c,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: E,
            newPlan: h,
            planId: m,
            priceOptions: f,
            premiumPlanOptions: g,
            unifiedSubscriptionDetailsNode: p,
            isInvoiceBilledImmediately: A,
            paymentSelectContent: I,
            currencySelectComponent: T,
            legalContent: S,
        } = e,
        N = r.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, i.jsx)(O.l$, { fractionalPremiumInfo: s }),
                        key: "fractional-premium-notice",
                    }),
                a && e.push({ type: "info", message: (0, R.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({ type: "warning", message: (0, M.i)(o), key: "payment-restriction-banner-notice" }),
                null != l && e.push({ type: "critical", message: l.message, key: "invoice-error-notice" }),
                e
            );
        }, [a, o, l, n, s]),
        y = r.useMemo(() => (0, b.l6)(f, _?.checkoutContext?.available_plans), [f, _]),
        v = r.useMemo(() => (c ? (0, i.jsx)(C.P, { planSkuId: h.skuId }) : null), [c, h.skuId]),
        D = (0, b.J$)(f.paymentSourceId),
        L = null,
        w = null;
    c
        ? (w = (0, i.jsx)(O.XH, {
              disabled: t,
              headingSubText: d,
              planOptions: g,
              selectedPlanId: m,
              showPlanStatusSubText: !0,
              priceOptions: y,
          }))
        : null != _ &&
          (L = (0, i.jsx)(eu._, {
              type: x.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: _,
              subscriptionPlan: h,
              isPrepaidPaymentSource: D,
              isPremiumGroupPurchase: a,
              bottomSubText: d,
          }));
    let P = E ? u : (0, i.jsx)("div", { ref: p }),
        k = E ? null : u;
    return (0, i.jsx)(e_.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: N,
        paymentSelectContent: (0, i.jsxs)(i.Fragment, { children: [I, T] }),
        subscriptionDetailsContent: P,
        purchaseItemContent: L,
        planSelectContent: w,
        invoiceSummaryContent: k,
        legalContent: S,
        invoiceTotalDueLabel: A ? q.intl.string(X.default.R0cZsM) : q.intl.string(X.default["11g67A"]),
        invoiceTotalDueValue: null != _ ? (0, K.U5)(_) : void 0,
        promotionalNoticeContent: v,
    });
};
var eE = n(88001),
    eh = n(466919);
function em(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: s,
            priceOptions: o,
            onPaymentSourceAdd: G,
            planId: V,
            setHasAcceptedTerms: F,
            legalTermsNodeRef: B,
            hasLegalTermsFlash: H,
            onInvoiceError: j,
            invoiceError: W,
            planGroup: Y,
            currencies: K,
            onCurrencyChange: z,
            hasOpenInvoice: X,
            purchaseState: Z,
            handleClose: J,
            shouldUseUnifiedCheckoutUI: ee,
        } = e,
        et = (0, A.t4)((e) => e.selectedSkuId),
        {
            defaultPlanId: en,
            isPremium: ei,
            startedPaymentFlowWithPaymentSourcesRef: er,
            hasPaymentSources: e_,
            enablePremiumBrandRefresh: eu,
            isPremiumGroupPurchase: em,
            paymentSourceId: ef,
            displayCurrency: eg,
        } = (0, T.P5)(),
        ep = (0, A.sw)(),
        { isGift: eA } = (0, I.Pv)(),
        eI = (0, y.g)(s, ef),
        eT = r.useMemo(() => (0, b.l6)(o, ep?.checkoutContext?.available_plans), [ep, o]),
        eS = (0, _.bG)([D.A], () => D.A.get(V));
    l()(null != eS, "Missing newPlan");
    let { showFractionalPremiumBanner: eN, fractionalPremiumInfo: eC } = (0, R._V)({
            premiumSubscription: n,
            selectedPlanId: V,
            planGroup: Y,
            isGift: eA,
        }),
        [eR, eO] = r.useState(null),
        ey = d.M.EEA_COUNTRIES.has(v.A.ipCountryCodeWithFallback),
        ev = Z === S.h.PURCHASING || Z === S.h.COMPLETED,
        eD = (0, N.vT)({
            isTrial: !1,
            isGift: eA,
            selectedSkuId: et,
            startedPaymentFlowWithPaymentSources: er.current,
        }),
        eL = n?.isPausedAllowsResumeButNotUpdates,
        eb = r.useMemo(() => (0, b.Tm)({ skuId: et, isPremium: ei, defaultPlanId: en }), [et, en, ei]);
    t =
        X || eL
            ? q.intl.string(q.t.nyzoFb)
            : em
              ? q.intl.formatToPlainString(eh.default["3m9DJK"], { premiumGroupProductName: (0, eE.DP)() })
              : (0, b.ys)(V)
                ? (0, b.ff)(n, eS)
                : q.intl.formatToPlainString(q.t["sBpy9/"], { planName: eS.name });
    let ew = r.useRef(null),
        [eP, ek] = r.useState(null),
        [eM, eU] = r.useState(void 0),
        ex = r.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: ee,
                unifiedSubscriptionDetailsNode: ew,
                setUnifiedPlainNoticeText: ek,
                setOverrideRenewalDate: eU,
            }),
            [ee],
        ),
        {
            content: eG,
            isInvoiceBilledImmediately: eV,
            ...eF
        } = null != n
            ? (function (e, t, n) {
                  let { hasOpenInvoice: r, showResumeSubscriptionView: s, planId: a } = e,
                      {
                          disabled: o,
                          premiumSubscription: l,
                          newPlan: d,
                          planGroup: _,
                          fractionalPremiumInfo: u,
                          priceOptions: c,
                          onInvoiceError: E,
                          onRenewalInvoicePreview: h,
                      } = t;
                  return r
                      ? {
                            content: (0, i.jsx)(es, {
                                premiumSubscription: l,
                                onInvoiceError: E,
                                priceOptions: c,
                                preventFetch: !1,
                                onRenewalInvoicePreview: h,
                                fractionalPremiumInfo: u,
                                ...n,
                            }),
                            isInvoiceBilledImmediately: !0,
                            shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                        }
                      : s
                        ? {
                              content: (0, i.jsx)(ed, {
                                  premiumSubscription: l,
                                  onInvoiceError: E,
                                  priceOptions: c,
                                  preventFetch: o,
                                  onRenewalInvoicePreview: h,
                                  fractionalPremiumInfo: u,
                                  ...n,
                              }),
                              isInvoiceBilledImmediately: !0,
                              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                          }
                        : (0, w.Ge)(l, a, _)
                          ? {
                                content: (0, i.jsx)(ea, {
                                    premiumSubscription: l,
                                    newPlan: d,
                                    onInvoiceError: E,
                                    planGroup: _,
                                    priceOptions: c,
                                    fractionalPremiumInfo: u,
                                    preventFetch: o,
                                    onRenewalInvoicePreview: h,
                                    ...n,
                                }),
                                isInvoiceBilledImmediately: !0,
                                shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                            }
                          : {
                                isInvoiceBilledImmediately: !1,
                                shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                                content: (0, i.jsx)(eo, {
                                    premiumSubscription: l,
                                    newPlan: d,
                                    planGroup: _,
                                    fractionalPremiumInfo: u,
                                    priceOptions: c,
                                    preventFetch: o,
                                    onInvoiceError: E,
                                    onRenewalInvoicePreview: h,
                                    ...n,
                                }),
                            };
              })(
                  { hasOpenInvoice: X, showResumeSubscriptionView: eL, planId: V },
                  {
                      disabled: ev,
                      premiumSubscription: n,
                      newPlan: eS,
                      planGroup: Y,
                      fractionalPremiumInfo: eC,
                      priceOptions: o,
                      onInvoiceError: j,
                      onRenewalInvoicePreview: eO,
                  },
                  ex,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eB = n?.eligiblePaymentGateways,
        eH = null != eB && eB.length > 0 && (ef === L.B || null === eI) && e_ ? M.fU.SELECT_PAYMENT_METHOD : void 0,
        ej = r.useMemo(
            () => ({
                label: q.intl.string(q.t["/AAR02"]),
                selectedCurrency: o.currency ?? eg,
                currencies: K,
                onChange: z,
                disabled: ev,
            }),
            [K, z, o, eg, ev],
        ),
        eW = r.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: a()({ [Q.E4]: eu }),
                shouldUseUnifiedCheckoutUI: ee,
            }),
            [n?.eligiblePaymentGateways, eu, ee],
        ),
        eY = (0, i.jsx)(g.N, {
            label: q.intl.string(q.t["mmDvV+"]),
            onPaymentSourceAdd: G,
            disabled: ev,
            additionalPaymentSourceDropdownProps: eW,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: o.paymentSourceId,
        }),
        eK = null != n && (0, w.Ge)(n, V, Y),
        ez = ee
            ? null != ep && null != eR
                ? (0, i.jsx)(O.PI, {
                      overrideRenewalDate: eM,
                      planGroup: Y,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eS,
                      isGift: eA,
                      paymentSourceType: eI,
                      isInvoiceBilledImmediately: eV,
                      invoiceSummaryTypeWithPreview: {
                          type: x.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: ep,
                          renewalInvoicePreview: eR,
                      },
                      hideLegalContent: eK && null != W,
                  })
                : null
            : (0, i.jsx)(k.A, {
                  isActive: H,
                  ref: B,
                  children: eK
                      ? (0, i.jsx)(el, {
                            premiumSubscription: n,
                            newPlan: eS,
                            onInvoiceError: j,
                            planGroup: Y,
                            priceOptions: o,
                            preventFetch: ev,
                            disabled: ev,
                            isEEA: ey,
                            paymentSources: s,
                            setHasAcceptedTerms: F,
                            onRenewalInvoicePreview: eO,
                        })
                      : (0, i.jsx)(f.A, {
                            onChange: F,
                            finePrint: (0, i.jsx)(m.A, {
                                subscriptionPlan: eS,
                                paymentSourceType: eI,
                                basePrice: (0, b.y8)(eS.id, !1, eA, eT),
                                currentSubscription: n,
                                planGroup: Y,
                            }),
                            forceShow: !0,
                            showPricingLink: eS.currency !== $.Yri.USD,
                            showWithdrawalWaiver: ey,
                            disabled: ev,
                            subscriptionPlan: eS,
                            currentSubscription: n,
                            planGroup: Y,
                        }),
              }),
        e$ = !eL && eD && !em,
        eq = r.useMemo(() => (e$ ? (0, i.jsx)(C.P, { planSkuId: eS.skuId }) : null), [e$, eS.skuId]);
    return ee
        ? (0, i.jsx)(ec, {
              disabled: ev,
              showFractionalPremiumBanner: eN,
              fractionalPremiumInfo: eC,
              isPremiumGroupPurchase: em,
              paymentRestrictionBannerType: eH,
              invoiceError: W,
              unifiedPlainNoticeText: eP,
              invoicePreview: ep,
              invoicePreviewComponent: eG,
              shouldShowPlanSelectAndPromoBanner: e$,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eF.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eS,
              planId: V,
              priceOptions: o,
              premiumPlanOptions: eb,
              unifiedSubscriptionDetailsNode: ew,
              isInvoiceBilledImmediately: eV,
              paymentSelectContent: eY,
              currencySelectComponent: (0, i.jsx)(p.qX, { ...ej }),
              legalContent: ez,
          })
        : (0, i.jsxs)("div", {
              className: Q.Du,
              children: [
                  (0, i.jsx)(M.je, { paymentRestrictionBannerType: eH }),
                  e$ &&
                      (0, i.jsxs)("div", {
                          children: [
                              eq,
                              (0, i.jsx)(U.$p, {
                                  disabled: ev,
                                  planOptions: eb,
                                  selectedPlanId: V,
                                  planGroup: Y,
                                  showTotal: !1,
                                  priceOptions: eT,
                                  handleClose: J,
                              }),
                              (0, i.jsx)(P.pK, {}),
                          ],
                      }),
                  em &&
                      (0, i.jsx)("div", {
                          className: Q.Ni,
                          children: (0, i.jsx)(u.w, {
                              type: "info",
                              children: (0, i.jsx)(c.E, { variant: "text-sm/medium", children: (0, R.Nn)() }),
                          }),
                      }),
                  (0, i.jsx)(E.D, { label: t, children: eG }),
                  (0, i.jsx)("div", { className: Q.LC, children: eY }),
                  (0, i.jsx)(h.f, { currencies: K, className: Q.p2, children: (0, i.jsx)(h.A, { ...ej }) }),
                  ez,
              ],
          });
}
