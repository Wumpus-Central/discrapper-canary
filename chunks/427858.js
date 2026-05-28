n.d(t, { A: () => eE });
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
    C = n(953689),
    A = n(376843),
    E = n(426398),
    y = n(666646),
    P = n(722847),
    S = n(937008),
    f = n(536302),
    _ = n(566980),
    T = n(349786),
    I = n(800471),
    N = n(71867),
    x = n(222707),
    g = n(340034),
    v = n(216641),
    M = n(615405),
    R = n(97352),
    b = n(428262),
    j = n(615396),
    L = n(735164),
    O = n(778307),
    D = n(218075),
    w = n(361597),
    U = n(299301),
    k = n(340287),
    G = n(289873),
    Y = n(793574),
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
            ? (0, l.jsx)("div", { className: J.l, children: (0, l.jsx)(G.y, { type: G.y.Type.PULSING_ELLIPSIS }) })
            : (0, l.jsx)(G.y, {});
    },
    en = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: l } = t;
        r.useEffect(() => {
            n && (null != l ? e(l) : e(null));
        }, [e, n, l]);
    },
    el = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: l } = t;
        r.useEffect(() => {
            n && e(l);
        }, [e, n, l]);
    },
    er = (e) => {
        let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: r, analyticsLocations: i } = e,
            a = {
                subscriptionId: t.id,
                items: n,
                paymentSourceId: l.paymentSourceId,
                currency: l.currency,
                preventFetch: r,
                analyticsLocations: i,
                analyticsLocation: Y.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [s, o] = (0, V.YV)({ ...a, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, V.YV)({ ...a, renewal: !0 });
        return { proratedInvoicePreview: s, proratedInvoiceError: o, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function ei(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: r,
            fractionalPremiumInfo: i,
            shouldUseUnifiedCheckoutUI: a,
            unifiedSubscriptionDetailsNode: s,
        } = e,
        [o, u] = (0, V.C8)({ subscriptionId: t.id, preventFetch: r });
    (0, y.OQ)({ checkoutInvoicePreview: o, checkoutInvoiceError: u, renewalInvoicePreview: o, renewalInvoiceError: u });
    let c = (0, b.J$)(n.paymentSourceId);
    if (null != o) {
        let e = (0, l.jsx)(K.m0, {
                premiumSubscription: t,
                renewalInvoice: o,
                isUpdate: !0,
                isPrepaidPaymentSource: c,
                fractionalPremiumInfo: i,
                shouldUseUnifiedCheckoutUI: a,
            }),
            n = (0, l.jsx)(K._J, { invoice: o, isPrepaidPaymentSource: c, shouldUseUnifiedCheckoutUI: a });
        return a
            ? (0, l.jsxs)(l.Fragment, { children: [n, (0, l.jsx)(Q, { containerNode: s.current, children: e })] })
            : (0, l.jsxs)(L.Yx, { className: J.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: a });
}
function ea(e) {
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
        m = (0, P.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: h } = (0, f.P5)(),
        { isGift: C } = (0, S.Pv)(),
        { analyticsLocations: A } = (0, F.Ay)(),
        E = (0, b.Pg)(t, n.id, 1, new Set(i)),
        {
            proratedInvoicePreview: _,
            proratedInvoiceError: T,
            renewalInvoicePreview: N,
            renewalInvoiceError: x,
        } = er({ premiumSubscription: t, newItems: E, priceOptions: a, preventFetch: o, analyticsLocations: A }),
        { primaryInvoiceError: v } = (0, y.OQ)({
            checkoutInvoicePreview: _,
            checkoutInvoiceError: T,
            renewalInvoicePreview: N,
            renewalInvoiceError: x,
        }),
        { planSwitchNoticeCopy: M, overrideRenewalDate: R } = r.useMemo(() => {
            let e;
            return (null !== s &&
                null !== _ &&
                (e = (0, b._e)(_.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != _ && null != N)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, K.DK)({
                          proratedInvoice: _,
                          renewalInvoice: N,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [_, N, s]);
    if (
        (el(d, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: R }),
        en(c, { shouldUseUnifiedCheckoutUI: p, noticeCopy: M }),
        null != v)
    )
        return ee(v, p);
    let j = (0, I.vT)({ isTrial: !1, isGift: C, selectedSkuId: m, startedPaymentFlowWithPaymentSources: h.current }),
        O = (0, I.UB)(j, _, n);
    if (null == _ || null == N || O) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: p });
    let D = (0, b.J$)(a.paymentSourceId),
        w = (0, l.jsx)(K.m0, {
            premiumSubscription: t,
            proratedInvoice: _,
            renewalInvoice: N,
            overrideRenewalDate: R,
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
                          invoicePreview: _,
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
                  (0, l.jsx)(K.wP, { proratedInvoice: _, renewalInvoice: N, overrideRenewalDate: R }),
                  (0, l.jsxs)(L.Yx, {
                      className: X.SU,
                      children: [
                          (0, l.jsx)(L.Xd, { children: z.intl.string(z.t["2eh+Co"]) }),
                          (0, l.jsx)(K.mT, { invoice: _, newPlan: n, isPrepaidPaymentSource: D }),
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
            planGroup: a,
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
            items: (0, b.Pg)(n, i.id, 1, new Set(a)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            preventFetch: u,
            analyticsLocations: h,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    (0, y.OQ)({ checkoutInvoicePreview: C, checkoutInvoiceError: A, renewalInvoicePreview: C, renewalInvoiceError: A });
    let { renewalDate: E, planSwitchNoticeCopy: P } = r.useMemo(() => {
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
        f = (0, l.jsx)("div", { className: J.o, children: P }),
        _ = (0, l.jsx)(K.m0, {
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
                (0, l.jsx)(Q, { containerNode: m.current, children: _ }),
            ],
        });
    }
    return (0, l.jsxs)("div", {
        className: X.G3,
        children: [
            f,
            (0, l.jsxs)(L.Yx, {
                className: X.SU,
                children: [
                    (0, l.jsx)(L.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                    (0, l.jsx)(L.oR, { label: t, value: (0, b.jh)(i, o, !0) }),
                    (0, l.jsx)(H.A, { invoice: C }),
                    (0, l.jsx)(L.pK, {}),
                    _,
                ],
            }),
        ],
    });
}
function eo(e) {
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
        { analyticsLocations: p } = (0, F.Ay)(),
        m = (0, b.Pg)(n, r.id, 1, new Set(i)),
        {
            proratedInvoicePreview: A,
            proratedInvoiceError: E,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        } = er({ premiumSubscription: n, newItems: m, priceOptions: a, preventFetch: s, analyticsLocations: p }),
        { primaryInvoiceError: f } = (0, y.OQ)({
            checkoutInvoicePreview: A,
            checkoutInvoiceError: E,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        }),
        _ = (0, v.g)(c, a.paymentSourceId);
    return null != f ||
        (null != P && (t = { amount: P.subtotal, currency: P.currency, tax: P.tax, taxInclusive: P.taxInclusive }),
        null == t)
        ? null
        : (0, l.jsx)(C.A, {
              onChange: d,
              finePrint: (0, l.jsx)(h.A, {
                  subscriptionPlan: r,
                  paymentSourceType: _,
                  basePrice: t,
                  proratedAmount: null != A ? A.total : void 0,
                  currentSubscription: n,
                  planGroup: i,
              }),
              forceShow: !0,
              showPricingLink: r.currency !== q.Yri.USD,
              showWithdrawalWaiver: u,
              disabled: o,
              subscriptionPlan: r,
              currentSubscription: n,
              planGroup: i,
          });
}
function eu(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
            fractionalPremiumInfo: a,
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
            analyticsLocation: Y.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [m, h] = (0, V.YV)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: i,
            analyticsLocations: c,
            analyticsLocation: Y.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        }),
        { primaryInvoiceError: C } = (0, y.OQ)({
            checkoutInvoicePreview: d,
            checkoutInvoiceError: p,
            renewalInvoicePreview: m,
            renewalInvoiceError: h,
        }),
        A = r.useMemo(() => z.intl.string(z.t.spIYou), []);
    if ((en(u, { shouldUseUnifiedCheckoutUI: s, noticeCopy: A }), null != C)) return ee(C, s);
    if (null == d || null == m) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: s });
    let E = (0, b.J$)(n.paymentSourceId),
        P = (0, l.jsx)(K.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: E,
            fractionalPremiumInfo: a,
            shouldUseUnifiedCheckoutUI: s,
        }),
        S = (0, l.jsx)("div", { className: J.o, children: A }),
        f = (0, l.jsx)(K._J, { invoice: d, isPrepaidPaymentSource: E, shouldUseUnifiedCheckoutUI: s });
    return s
        ? (0, l.jsxs)(l.Fragment, { children: [f, (0, l.jsx)(Q, { containerNode: o.current, children: P })] })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  S,
                  (0, l.jsxs)(L.Yx, {
                      className: X.SU,
                      children: [(0, l.jsx)(L.Xd, { children: z.intl.string(z.t["2eh+Co"]) }), f, P],
                  }),
              ],
          });
}
n(321073);
var ec = n(717925),
    ed = n(755880),
    ep = n(134638),
    em = n(906234);
let eh = (e) => {
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
            planId: C,
            priceOptions: A,
            premiumPlanOptions: E,
            unifiedSubscriptionDetailsNode: y,
            isInvoiceBilledImmediately: P,
            paymentMethodContent: S,
            legalContent: f,
        } = e,
        _ = r.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(g.l$, { fractionalPremiumInfo: i }),
                        key: "fractional-premium-notice",
                    }),
                a && e.push({ type: "info", message: (0, x.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, D.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [a, s, o, n, i]),
        { priceOptions: T, planPricesLoading: I } = (0, b.Pr)(A, c, o),
        v = r.useMemo(() => (p ? (0, l.jsx)(N.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        M = (0, em.G)(C),
        R = r.useMemo(() => (M ? (0, l.jsx)(ed.a, {}) : null), [M]),
        j = r.useMemo(() => (null != v ? v : null != R ? R : null), [v, R]),
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
              priceOptions: T,
              planPricesLoading: I,
          }))
        : null != c &&
          (O = (0, l.jsx)(ep._, {
              type: U.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: L,
              isPremiumGroupPurchase: a,
              bottomSubText: u,
          }));
    let k = m ? d : (0, l.jsx)("div", { ref: y }),
        G = m ? null : d;
    return (0, l.jsx)(ec.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: _,
        paymentMethodContent: S,
        subscriptionDetailsContent: k,
        purchaseItemContent: O,
        planSelectContent: w,
        invoiceSummaryContent: G,
        legalContent: f,
        invoiceTotalDueLabel: P ? z.intl.string($.default.R0cZsM) : z.intl.string($.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, K.U5)(c) : void 0,
        promotionalNoticeContent: j,
    });
};
var eC = n(88001),
    eA = n(466919);
function eE(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: i,
            handlePaymentSourceAdd: s,
            planId: k,
            setHasAcceptedTerms: G,
            legalTermsNodeRef: Y,
            hasLegalTermsFlash: F,
            planGroup: B,
            hasOpenInvoice: W,
            purchaseState: V,
            handleClose: H,
            shouldUseUnifiedCheckoutUI: K,
        } = e,
        Z = (0, y.mx)(),
        { hasPaymentSources: $ } = (0, E.jm)(),
        {
            selectedSkuId: J,
            paymentSourceId: Q,
            priceOptions: ee,
            renewalInvoicePreview: et,
            checkoutInvoicePreview: en,
            checkoutInvoiceError: el,
            checkoutContextAvailablePlans: er,
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
        { isPremiumPurchase: ec, isPremiumGroupPurchase: ed } = (0, P.t4)((e) => e.get("selectedPlanAttributes")),
        { defaultPlanId: ep, startedPaymentFlowWithPaymentSourcesRef: em } = (0, f.P5)(),
        { isGift: eE } = (0, S.Pv)(),
        ey = (0, v.g)(i, Q),
        eP = r.useMemo(() => (0, b.l6)(ee, er), [er, ee]),
        eS = (0, c.bG)([R.A], () => R.A.get(k));
    o()(null != eS, "Missing newPlan");
    let { showFractionalPremiumBanner: ef, fractionalPremiumInfo: e_ } = (0, x._V)({
            premiumSubscription: n,
            selectedPlanId: k,
            planGroup: B,
            isGift: eE,
        }),
        eT = u.M.EEA_COUNTRIES.has(M.A.ipCountryCodeWithFallback),
        eI = V === _.h.PURCHASING || V === _.h.COMPLETED,
        eN = (0, I.vT)({ isTrial: !1, isGift: eE, selectedSkuId: J, startedPaymentFlowWithPaymentSources: em.current }),
        ex = n?.isPausedAllowsResumeButNotUpdates,
        eg = r.useMemo(() => (0, b.Tm)({ skuId: J, isPremium: ec, defaultPlanId: ep }), [J, ep, ec]);
    t =
        W || ex
            ? z.intl.string(z.t.nyzoFb)
            : ed
              ? z.intl.formatToPlainString(eA.default["3m9DJK"], { premiumGroupProductName: (0, eC.DP)() })
              : (0, b.ys)(k)
                ? (0, b.ff)(n, eS)
                : z.intl.formatToPlainString(z.t["sBpy9/"], { planName: eS.name });
    let ev = r.useRef(null),
        [eM, eR] = r.useState(null),
        [eb, ej] = r.useState(void 0),
        eL = r.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: K,
                unifiedSubscriptionDetailsNode: ev,
                setUnifiedPlainNoticeText: eR,
                setOverrideRenewalDate: ej,
            }),
            [K],
        ),
        {
            content: eO,
            isInvoiceBilledImmediately: eD,
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
                        : (0, j.Ge)(o, a, c)
                          ? {
                                content: (0, l.jsx)(ea, {
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
                  { hasOpenInvoice: W, showResumeSubscriptionView: ex, planId: k },
                  {
                      disabled: eI,
                      premiumSubscription: n,
                      newPlan: eS,
                      planGroup: B,
                      fractionalPremiumInfo: e_,
                      priceOptions: ee,
                  },
                  eL,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eU = n?.eligiblePaymentGateways,
        ek = null != eU && eU.length > 0 && (null == Q || null === ey) && $ ? D.fU.SELECT_PAYMENT_METHOD : void 0,
        eG = r.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: a()({ [X.E4]: ec }),
                shouldUseUnifiedCheckoutUI: K,
            }),
            [n?.eligiblePaymentGateways, ec, K],
        ),
        eY = null != en || null != el,
        eF = r.useMemo(
            () =>
                eY
                    ? (0, l.jsx)(A.N, {
                          label: z.intl.string(z.t["mmDvV+"]),
                          onPaymentSourceAdd: s,
                          disabled: eI,
                          additionalPaymentSourceDropdownProps: eG,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: ee.paymentSourceId,
                      })
                    : null,
            [eY, ee.paymentSourceId, eG, s, eI],
        ),
        eB = null != n && (0, j.Ge)(n, k, B),
        eW = K
            ? null != en && null != et
                ? (0, l.jsx)(g.PI, {
                      overrideRenewalDate: eb,
                      planGroup: B,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eS,
                      isGift: eE,
                      paymentSourceType: ey,
                      isInvoiceBilledImmediately: eD,
                      invoiceSummaryTypeWithPreview: {
                          type: U.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: en,
                          renewalInvoicePreview: et,
                      },
                      hideLegalContent: eB && null != Z,
                  })
                : null
            : (0, l.jsx)(O.A, {
                  isActive: F,
                  ref: Y,
                  children: eB
                      ? (0, l.jsx)(eo, {
                            premiumSubscription: n,
                            newPlan: eS,
                            planGroup: B,
                            priceOptions: ee,
                            preventFetch: eI,
                            disabled: eI,
                            isEEA: eT,
                            paymentSources: i,
                            setHasAcceptedTerms: G,
                        })
                      : (0, l.jsx)(C.A, {
                            onChange: G,
                            finePrint: (0, l.jsx)(h.A, {
                                subscriptionPlan: eS,
                                paymentSourceType: ey,
                                basePrice: (0, b.y8)(eS.id, !1, eE, eP),
                                currentSubscription: n,
                                planGroup: B,
                            }),
                            forceShow: !0,
                            showPricingLink: eS.currency !== q.Yri.USD,
                            showWithdrawalWaiver: eT,
                            disabled: eI,
                            subscriptionPlan: eS,
                            currentSubscription: n,
                            planGroup: B,
                        }),
              }),
        eV = !ex && eN && !ed,
        eH = r.useMemo(() => (eV ? (0, l.jsx)(N.P, { planSkuId: eS.skuId }) : null), [eV, eS.skuId]);
    return K
        ? (0, l.jsx)(eh, {
              disabled: eI,
              showFractionalPremiumBanner: ef,
              fractionalPremiumInfo: e_,
              isPremiumGroupPurchase: ed,
              paymentRestrictionBannerType: ek,
              invoiceError: Z,
              unifiedPlainNoticeText: eM,
              invoicePreview: en,
              invoicePreviewComponent: eO,
              shouldShowPlanSelectAndPromoBanner: eV,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  ew.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eS,
              planId: k,
              priceOptions: ee,
              premiumPlanOptions: eg,
              unifiedSubscriptionDetailsNode: ev,
              isInvoiceBilledImmediately: eD,
              paymentMethodContent: eF,
              legalContent: eW,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(T.k, { location: "PremiumSwitchPlanReview", paymentSourceId: Q }),
                  (0, l.jsxs)("div", {
                      className: X.Du,
                      children: [
                          (0, l.jsx)(D.je, { paymentRestrictionBannerType: ek }),
                          eV &&
                              (0, l.jsxs)("div", {
                                  children: [
                                      eH,
                                      (0, l.jsx)(w.$p, {
                                          disabled: eI,
                                          planOptions: eg,
                                          selectedPlanId: k,
                                          planGroup: B,
                                          showTotal: !1,
                                          priceOptions: eP,
                                          handleClose: H,
                                      }),
                                      (0, l.jsx)(L.pK, {}),
                                  ],
                              }),
                          ed &&
                              (0, l.jsx)("div", {
                                  className: X.Ni,
                                  children: (0, l.jsx)(d.w, {
                                      type: "info",
                                      children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, x.Nn)() }),
                                  }),
                              }),
                          (0, l.jsx)(m.D, { label: t, children: eO }),
                          (0, l.jsx)("div", { className: X.LC, children: eF }),
                          eW,
                      ],
                  }),
              ],
          });
}
