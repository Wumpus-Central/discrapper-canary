n.d(t, { A: () => ey });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
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
    y = n(426398),
    E = n(666646),
    P = n(722847),
    S = n(937008),
    f = n(834252),
    _ = n(566980),
    T = n(349786),
    I = n(800471),
    x = n(71867),
    N = n(222707),
    g = n(340034),
    v = n(216641),
    M = n(615405),
    b = n(97352),
    j = n(428262),
    R = n(615396),
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
    J = n(327105),
    $ = n(207715),
    X = n(814304);
function Q(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : k.createPortal(t, n);
}
let ee = (e, t) => (null == e || t ? null : (0, l.jsx)(d.w, { type: "critical", children: e.message })),
    et = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, l.jsx)("div", { className: $.l, children: (0, l.jsx)(G.y, { type: G.y.Type.PULSING_ELLIPSIS }) })
            : (0, l.jsx)(G.y, {});
    },
    en = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: l } = t;
        i.useEffect(() => {
            n && (null != l ? e(l) : e(null));
        }, [e, n, l]);
    },
    el = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: l } = t;
        i.useEffect(() => {
            n && e(l);
        }, [e, n, l]);
    },
    ei = (e) => {
        let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: i, analyticsLocations: r } = e,
            a = {
                subscriptionId: t.id,
                items: n,
                paymentSourceId: l.paymentSourceId,
                currency: l.currency,
                preventFetch: i,
                analyticsLocations: r,
                analyticsLocation: Y.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [s, o] = (0, V.YV)({ ...a, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, V.YV)({ ...a, renewal: !0 });
        return { proratedInvoicePreview: s, proratedInvoiceError: o, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function er(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
            fractionalPremiumInfo: r,
            shouldUseUnifiedCheckoutUI: a,
            unifiedSubscriptionDetailsNode: s,
        } = e,
        [o, u] = (0, V.C8)({ subscriptionId: t.id, preventFetch: i });
    (0, E.OQ)({ checkoutInvoicePreview: o, checkoutInvoiceError: u, renewalInvoicePreview: o, renewalInvoiceError: u });
    let c = (0, j.J$)(n.paymentSourceId);
    if (null != o) {
        let e = (0, l.jsx)(K.m0, {
                premiumSubscription: t,
                renewalInvoice: o,
                isUpdate: !0,
                isPrepaidPaymentSource: c,
                fractionalPremiumInfo: r,
                shouldUseUnifiedCheckoutUI: a,
            }),
            n = (0, l.jsx)(K._J, { invoice: o, isPrepaidPaymentSource: c, shouldUseUnifiedCheckoutUI: a });
        return a
            ? (0, l.jsxs)(l.Fragment, { children: [n, (0, l.jsx)(Q, { containerNode: s.current, children: e })] })
            : (0, l.jsxs)(L.Yx, { className: $.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: a });
}
function ea(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: r,
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
        y = (0, j.Pg)(t, n.id, 1, new Set(r)),
        {
            proratedInvoicePreview: _,
            proratedInvoiceError: T,
            renewalInvoicePreview: x,
            renewalInvoiceError: N,
        } = ei({ premiumSubscription: t, newItems: y, priceOptions: a, preventFetch: o, analyticsLocations: A }),
        { primaryInvoiceError: v } = (0, E.OQ)({
            checkoutInvoicePreview: _,
            checkoutInvoiceError: T,
            renewalInvoicePreview: x,
            renewalInvoiceError: N,
        }),
        { planSwitchNoticeCopy: M, overrideRenewalDate: b } = i.useMemo(() => {
            let e;
            return (null !== s &&
                null !== _ &&
                (e = (0, j._e)(_.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != _ && null != x)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, K.DK)({
                          proratedInvoice: _,
                          renewalInvoice: x,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [_, x, s]);
    if (
        (el(d, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: b }),
        en(c, { shouldUseUnifiedCheckoutUI: p, noticeCopy: M }),
        null != v)
    )
        return ee(v, p);
    let R = (0, I.vT)({ isTrial: !1, isGift: C, selectedSkuId: m, startedPaymentFlowWithPaymentSources: h.current }),
        O = (0, I.UB)(R, _, n);
    if (null == _ || null == x || O) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: p });
    let D = (0, j.J$)(a.paymentSourceId),
        w = (0, l.jsx)(K.m0, {
            premiumSubscription: t,
            proratedInvoice: _,
            renewalInvoice: x,
            overrideRenewalDate: b,
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
                          renewalInvoicePreview: x,
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
                  (0, l.jsx)(K.wP, { proratedInvoice: _, renewalInvoice: x, overrideRenewalDate: b }),
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
            newPlan: r,
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
            items: (0, j.Pg)(n, r.id, 1, new Set(a)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            preventFetch: u,
            analyticsLocations: h,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    (0, E.OQ)({ checkoutInvoicePreview: C, checkoutInvoiceError: A, renewalInvoicePreview: C, renewalInvoiceError: A });
    let { renewalDate: y, planSwitchNoticeCopy: P } = i.useMemo(() => {
        if (null == C) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = C.subscriptionPeriodStart;
        return (
            s.fractionalState === Z.xc.FP_SUB_PAUSED && (e = s.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: z.intl.format(z.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [C, s.fractionalState, s.endsAt]);
    if (
        (el(p, { shouldUseUnifiedCheckoutUI: c, overrideRenewalDate: y }),
        en(d, { shouldUseUnifiedCheckoutUI: c, noticeCopy: P }),
        null != A)
    )
        return ee(A, c);
    if (null == C) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: c });
    t = n.type === q.rzx.PREMIUM ? (0, j.Mn)(r.id) : r.name;
    let S = (0, j.J$)(o.paymentSourceId),
        f = (0, l.jsx)("div", { className: $.o, children: P }),
        _ = (0, l.jsx)(K.m0, {
            premiumSubscription: n,
            renewalInvoice: C,
            isUpdate: !0,
            isPrepaidPaymentSource: S,
            fractionalPremiumInfo: s,
            overrideRenewalDate: y,
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
                (0, l.jsx)(B.Vm, { label: z.intl.string(J.default.eoXh7B), lineItems: e, currency: C.currency }),
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
                    (0, l.jsx)(L.oR, { label: t, value: (0, j.jh)(r, o, !0) }),
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
            newPlan: i,
            planGroup: r,
            priceOptions: a,
            preventFetch: s,
            disabled: o,
            isEEA: u,
            paymentSources: c,
            setHasAcceptedTerms: d,
        } = e,
        { analyticsLocations: p } = (0, F.Ay)(),
        m = (0, j.Pg)(n, i.id, 1, new Set(r)),
        {
            proratedInvoicePreview: A,
            proratedInvoiceError: y,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        } = ei({ premiumSubscription: n, newItems: m, priceOptions: a, preventFetch: s, analyticsLocations: p }),
        { primaryInvoiceError: f } = (0, E.OQ)({
            checkoutInvoicePreview: A,
            checkoutInvoiceError: y,
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
                  subscriptionPlan: i,
                  paymentSourceType: _,
                  basePrice: t,
                  proratedAmount: null != A ? A.total : void 0,
                  currentSubscription: n,
                  planGroup: r,
              }),
              forceShow: !0,
              showPricingLink: i.currency !== q.Yri.USD,
              showWithdrawalWaiver: u,
              disabled: o,
              subscriptionPlan: i,
              currentSubscription: n,
              planGroup: r,
          });
}
function eu(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: r,
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
            preventFetch: r,
            analyticsLocations: c,
            analyticsLocation: Y.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [m, h] = (0, V.YV)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: r,
            analyticsLocations: c,
            analyticsLocation: Y.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        }),
        { primaryInvoiceError: C } = (0, E.OQ)({
            checkoutInvoicePreview: d,
            checkoutInvoiceError: p,
            renewalInvoicePreview: m,
            renewalInvoiceError: h,
        }),
        A = i.useMemo(() => z.intl.string(z.t.spIYou), []);
    if ((en(u, { shouldUseUnifiedCheckoutUI: s, noticeCopy: A }), null != C)) return ee(C, s);
    if (null == d || null == m) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: s });
    let y = (0, j.J$)(n.paymentSourceId),
        P = (0, l.jsx)(K.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: y,
            fractionalPremiumInfo: a,
            shouldUseUnifiedCheckoutUI: s,
        }),
        S = (0, l.jsx)("div", { className: $.o, children: A }),
        f = (0, l.jsx)(K._J, { invoice: d, isPrepaidPaymentSource: y, shouldUseUnifiedCheckoutUI: s });
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
            fractionalPremiumInfo: r,
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
            premiumPlanOptions: y,
            unifiedSubscriptionDetailsNode: E,
            isInvoiceBilledImmediately: P,
            paymentMethodContent: S,
            legalContent: f,
        } = e,
        _ = i.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(g.l$, { fractionalPremiumInfo: r }),
                        key: "fractional-premium-notice",
                    }),
                a && e.push({ type: "info", message: (0, N.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, D.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [a, s, o, n, r]),
        { priceOptions: T, planPricesLoading: I } = (0, j.Pr)(A, c, o),
        v = i.useMemo(() => (p ? (0, l.jsx)(x.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        M = (0, em.G)(C),
        b = i.useMemo(() => (M ? (0, l.jsx)(ed.a, {}) : null), [M]),
        R = i.useMemo(() => (null != v ? v : null != b ? b : null), [v, b]),
        L = (0, j.J$)(A.paymentSourceId),
        O = null,
        w = null;
    p
        ? (w = (0, l.jsx)(g.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: y,
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
    let k = m ? d : (0, l.jsx)("div", { ref: E }),
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
        invoiceTotalDueLabel: P ? z.intl.string(J.default.R0cZsM) : z.intl.string(J.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, K.U5)(c) : void 0,
        promotionalNoticeContent: R,
    });
};
var eC = n(88001),
    eA = n(466919);
function ey(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: r,
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
        Z = (0, E.mx)(),
        { hasPaymentSources: J } = (0, y.jm)(),
        {
            selectedSkuId: $,
            paymentSourceId: Q,
            priceOptions: ee,
            renewalInvoicePreview: et,
            checkoutInvoicePreview: en,
            checkoutInvoiceError: el,
            checkoutContextAvailablePlans: ei,
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
        { isPremium: ec, isPremiumGroupPurchase: ed } = (0, P.t4)((e) => e.getSelectedPlanAttributes()),
        { defaultPlanId: ep, startedPaymentFlowWithPaymentSourcesRef: em } = (0, f.P5)(),
        { isGift: ey } = (0, S.Pv)(),
        eE = (0, v.g)(r, Q),
        eP = i.useMemo(() => (0, j.l6)(ee, ei), [ei, ee]),
        eS = (0, c.bG)([b.A], () => b.A.get(k));
    o()(null != eS, "Missing newPlan");
    let { showFractionalPremiumBanner: ef, fractionalPremiumInfo: e_ } = (0, N._V)({
            premiumSubscription: n,
            selectedPlanId: k,
            planGroup: B,
            isGift: ey,
        }),
        eT = u.M.EEA_COUNTRIES.has(M.A.ipCountryCodeWithFallback),
        eI = V === _.h.PURCHASING || V === _.h.COMPLETED,
        ex = (0, I.vT)({ isTrial: !1, isGift: ey, selectedSkuId: $, startedPaymentFlowWithPaymentSources: em.current }),
        eN = n?.isPausedAllowsResumeButNotUpdates,
        eg = i.useMemo(() => (0, j.Tm)({ skuId: $, isPremium: ec, defaultPlanId: ep }), [$, ep, ec]);
    t =
        W || eN
            ? z.intl.string(z.t.nyzoFb)
            : ed
              ? z.intl.formatToPlainString(eA.default["3m9DJK"], { premiumGroupProductName: (0, eC.DP)() })
              : (0, j.ys)(k)
                ? (0, j.ff)(n, eS)
                : z.intl.formatToPlainString(z.t["sBpy9/"], { planName: eS.name });
    let ev = i.useRef(null),
        [eM, eb] = i.useState(null),
        [ej, eR] = i.useState(void 0),
        eL = i.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: K,
                unifiedSubscriptionDetailsNode: ev,
                setUnifiedPlainNoticeText: eb,
                setOverrideRenewalDate: eR,
            }),
            [K],
        ),
        {
            content: eO,
            isInvoiceBilledImmediately: eD,
            ...ew
        } = null != n
            ? (function (e, t, n) {
                  let { hasOpenInvoice: i, showResumeSubscriptionView: r, planId: a } = e,
                      {
                          disabled: s,
                          premiumSubscription: o,
                          newPlan: u,
                          planGroup: c,
                          fractionalPremiumInfo: d,
                          priceOptions: p,
                      } = t;
                  return i
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
                      : r
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
                        : (0, R.Ge)(o, a, c)
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
                  { hasOpenInvoice: W, showResumeSubscriptionView: eN, planId: k },
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
        ek = null != eU && eU.length > 0 && (null == Q || null === eE) && J ? D.fU.SELECT_PAYMENT_METHOD : void 0,
        eG = i.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: a()({ [X.E4]: ec }),
                shouldUseUnifiedCheckoutUI: K,
            }),
            [n?.eligiblePaymentGateways, ec, K],
        ),
        eY = null != en || null != el,
        eF = i.useMemo(
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
        eB = null != n && (0, R.Ge)(n, k, B),
        eW = K
            ? null != en && null != et
                ? (0, l.jsx)(g.PI, {
                      overrideRenewalDate: ej,
                      planGroup: B,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eS,
                      isGift: ey,
                      paymentSourceType: eE,
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
                            paymentSources: r,
                            setHasAcceptedTerms: G,
                        })
                      : (0, l.jsx)(C.A, {
                            onChange: G,
                            finePrint: (0, l.jsx)(h.A, {
                                subscriptionPlan: eS,
                                paymentSourceType: eE,
                                basePrice: (0, j.y8)(eS.id, !1, ey, eP),
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
        eV = !eN && ex && !ed,
        eH = i.useMemo(() => (eV ? (0, l.jsx)(x.P, { planSkuId: eS.skuId }) : null), [eV, eS.skuId]);
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
                                      children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, N.Nn)() }),
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
