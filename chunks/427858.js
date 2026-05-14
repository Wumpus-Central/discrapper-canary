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
    h = n(821891),
    C = n(953689),
    A = n(61572),
    E = n(666646),
    y = n(94420),
    P = n(937008),
    S = n(834252),
    _ = n(566980),
    T = n(349786),
    f = n(800471),
    N = n(71867),
    I = n(222707),
    x = n(340034),
    g = n(216641),
    v = n(615405),
    M = n(97352),
    b = n(428262),
    R = n(615396),
    j = n(735164),
    L = n(778307),
    O = n(218075),
    D = n(337092),
    w = n(299301),
    U = n(340287),
    k = n(289873),
    Y = n(793574),
    G = n(688810),
    F = n(848584),
    B = n(888751),
    W = n(543767),
    V = n(787455),
    H = n(692440),
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
        a.useEffect(() => {
            n && (null != l ? e(l) : e(null));
        }, [e, n, l]);
    },
    en = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: l } = t;
        a.useEffect(() => {
            n && e(l);
        }, [e, n, l]);
    },
    el = (e) => {
        let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: a, analyticsLocations: i } = e,
            r = {
                subscriptionId: t.id,
                items: n,
                paymentSourceId: l.paymentSourceId,
                currency: l.currency,
                preventFetch: a,
                analyticsLocations: i,
                analyticsLocation: Y.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [s, o] = (0, W.YV)({ ...r, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, W.YV)({ ...r, renewal: !0 });
        return { proratedInvoicePreview: s, proratedInvoiceError: o, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function ea(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: a,
            fractionalPremiumInfo: i,
            shouldUseUnifiedCheckoutUI: r,
            unifiedSubscriptionDetailsNode: s,
        } = e,
        [o, u] = (0, W.C8)({ subscriptionId: t.id, preventFetch: a });
    (0, E.OQ)({ checkoutInvoicePreview: o, checkoutInvoiceError: u, renewalInvoicePreview: o, renewalInvoiceError: u });
    let c = (0, b.J$)(n.paymentSourceId);
    if (null != o) {
        let e = (0, l.jsx)(H.m0, {
                premiumSubscription: t,
                renewalInvoice: o,
                isUpdate: !0,
                isPrepaidPaymentSource: c,
                fractionalPremiumInfo: i,
                shouldUseUnifiedCheckoutUI: r,
            }),
            n = (0, l.jsx)(H._J, { invoice: o, isPrepaidPaymentSource: c, shouldUseUnifiedCheckoutUI: r });
        return r
            ? (0, l.jsxs)(l.Fragment, { children: [n, (0, l.jsx)(X, { containerNode: s.current, children: e })] })
            : (0, l.jsxs)(j.Yx, { className: $.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(ee, { shouldUseUnifiedCheckoutUI: r });
}
function ei(e) {
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
        m = (0, y.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: h } = (0, S.P5)(),
        { isGift: C } = (0, P.Pv)(),
        { analyticsLocations: A } = (0, G.Ay)(),
        _ = (0, b.Pg)(t, n.id, 1, new Set(i)),
        {
            proratedInvoicePreview: T,
            proratedInvoiceError: N,
            renewalInvoicePreview: I,
            renewalInvoiceError: g,
        } = el({ premiumSubscription: t, newItems: _, priceOptions: r, preventFetch: o, analyticsLocations: A }),
        { primaryInvoiceError: v } = (0, E.OQ)({
            checkoutInvoicePreview: T,
            checkoutInvoiceError: N,
            renewalInvoicePreview: I,
            renewalInvoiceError: g,
        }),
        { planSwitchNoticeCopy: M, overrideRenewalDate: R } = a.useMemo(() => {
            let e;
            return (null !== s &&
                null !== T &&
                (e = (0, b._e)(T.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != T && null != I)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, H.DK)({
                          proratedInvoice: T,
                          renewalInvoice: I,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [T, I, s]);
    if (
        (en(d, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: R }),
        et(c, { shouldUseUnifiedCheckoutUI: p, noticeCopy: M }),
        null != v)
    )
        return Q(v, p);
    let L = (0, f.vT)({ isTrial: !1, isGift: C, selectedSkuId: m, startedPaymentFlowWithPaymentSources: h.current }),
        O = (0, f.UB)(L, T, n);
    if (null == T || null == I || O) return (0, l.jsx)(ee, { shouldUseUnifiedCheckoutUI: p });
    let D = (0, b.J$)(r.paymentSourceId),
        U = (0, l.jsx)(H.m0, {
            premiumSubscription: t,
            proratedInvoice: T,
            renewalInvoice: I,
            overrideRenewalDate: R,
            isPrepaidPaymentSource: D,
            fractionalPremiumInfo: s,
            isUpdate: !0,
            shouldUseUnifiedCheckoutUI: p,
        });
    return p
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(x.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: w.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: T,
                          renewalInvoicePreview: I,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: D,
                      subscriptionTrial: null,
                  }),
                  (0, l.jsx)(X, { containerNode: u.current, children: U }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(H.wP, { proratedInvoice: T, renewalInvoice: I, overrideRenewalDate: R }),
                  (0, l.jsxs)(j.Yx, {
                      className: J.SU,
                      children: [
                          (0, l.jsx)(j.Xd, { children: q.intl.string(q.t["2eh+Co"]) }),
                          (0, l.jsx)(H.mT, { invoice: T, newPlan: n, isPrepaidPaymentSource: D }),
                          U,
                      ],
                  }),
              ],
          });
}
function er(e) {
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
        { analyticsLocations: h } = (0, G.Ay)(),
        [C, A] = (0, W.YV)({
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
    (0, E.OQ)({ checkoutInvoicePreview: C, checkoutInvoiceError: A, renewalInvoicePreview: C, renewalInvoiceError: A });
    let { renewalDate: y, planSwitchNoticeCopy: P } = a.useMemo(() => {
        if (null == C) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = C.subscriptionPeriodStart;
        return (
            s.fractionalState === K.xc.FP_SUB_PAUSED && (e = s.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: q.intl.format(q.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [C, s.fractionalState, s.endsAt]);
    if (
        (en(p, { shouldUseUnifiedCheckoutUI: c, overrideRenewalDate: y }),
        et(d, { shouldUseUnifiedCheckoutUI: c, noticeCopy: P }),
        null != A)
    )
        return Q(A, c);
    if (null == C) return (0, l.jsx)(ee, { shouldUseUnifiedCheckoutUI: c });
    t = n.type === Z.rzx.PREMIUM ? (0, b.Mn)(i.id) : i.name;
    let S = (0, b.J$)(o.paymentSourceId),
        _ = (0, l.jsx)("div", { className: $.o, children: P }),
        T = (0, l.jsx)(H.m0, {
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
        let { lineItems: e } = (0, B.Ig)(C, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: S,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(F.Vm, { label: q.intl.string(z.default.eoXh7B), lineItems: e, currency: C.currency }),
                (0, l.jsx)(X, { containerNode: m.current, children: T }),
            ],
        });
    }
    return (0, l.jsxs)("div", {
        className: J.G3,
        children: [
            _,
            (0, l.jsxs)(j.Yx, {
                className: J.SU,
                children: [
                    (0, l.jsx)(j.Xd, { children: q.intl.string(q.t.iqhIp4) }),
                    (0, l.jsx)(j.oR, { label: t, value: (0, b.jh)(i, o, !0) }),
                    (0, l.jsx)(V.A, { invoice: C }),
                    (0, l.jsx)(j.pK, {}),
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
            newPlan: a,
            planGroup: i,
            priceOptions: r,
            preventFetch: s,
            disabled: o,
            isEEA: u,
            paymentSources: c,
            setHasAcceptedTerms: d,
        } = e,
        { analyticsLocations: p } = (0, G.Ay)(),
        m = (0, b.Pg)(n, a.id, 1, new Set(i)),
        {
            proratedInvoicePreview: A,
            proratedInvoiceError: y,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        } = el({ premiumSubscription: n, newItems: m, priceOptions: r, preventFetch: s, analyticsLocations: p }),
        { primaryInvoiceError: _ } = (0, E.OQ)({
            checkoutInvoicePreview: A,
            checkoutInvoiceError: y,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        }),
        T = (0, g.g)(c, r.paymentSourceId);
    return null != _ ||
        (null != P && (t = { amount: P.subtotal, currency: P.currency, tax: P.tax, taxInclusive: P.taxInclusive }),
        null == t)
        ? null
        : (0, l.jsx)(C.A, {
              onChange: d,
              finePrint: (0, l.jsx)(h.A, {
                  subscriptionPlan: a,
                  paymentSourceType: T,
                  basePrice: t,
                  proratedAmount: null != A ? A.total : void 0,
                  currentSubscription: n,
                  planGroup: i,
              }),
              forceShow: !0,
              showPricingLink: a.currency !== Z.Yri.USD,
              showWithdrawalWaiver: u,
              disabled: o,
              subscriptionPlan: a,
              currentSubscription: n,
              planGroup: i,
          });
}
function eo(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
            fractionalPremiumInfo: r,
            shouldUseUnifiedCheckoutUI: s,
            unifiedSubscriptionDetailsNode: o,
            setUnifiedPlainNoticeText: u,
        } = e,
        { analyticsLocations: c } = (0, G.Ay)(),
        [d, p] = (0, W.YV)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: i,
            analyticsLocations: c,
            analyticsLocation: Y.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [m, h] = (0, W.YV)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: i,
            analyticsLocations: c,
            analyticsLocation: Y.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        }),
        { primaryInvoiceError: C } = (0, E.OQ)({
            checkoutInvoicePreview: d,
            checkoutInvoiceError: p,
            renewalInvoicePreview: m,
            renewalInvoiceError: h,
        }),
        A = a.useMemo(() => q.intl.string(q.t.spIYou), []);
    if ((et(u, { shouldUseUnifiedCheckoutUI: s, noticeCopy: A }), null != C)) return Q(C, s);
    if (null == d || null == m) return (0, l.jsx)(ee, { shouldUseUnifiedCheckoutUI: s });
    let y = (0, b.J$)(n.paymentSourceId),
        P = (0, l.jsx)(H.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: y,
            fractionalPremiumInfo: r,
            shouldUseUnifiedCheckoutUI: s,
        }),
        S = (0, l.jsx)("div", { className: $.o, children: A }),
        _ = (0, l.jsx)(H._J, { invoice: d, isPrepaidPaymentSource: y, shouldUseUnifiedCheckoutUI: s });
    return s
        ? (0, l.jsxs)(l.Fragment, { children: [_, (0, l.jsx)(X, { containerNode: o.current, children: P })] })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  S,
                  (0, l.jsxs)(j.Yx, {
                      className: J.SU,
                      children: [(0, l.jsx)(j.Xd, { children: q.intl.string(q.t["2eh+Co"]) }), _, P],
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
            legalContent: _,
        } = e,
        T = a.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(x.l$, { fractionalPremiumInfo: i }),
                        key: "fractional-premium-notice",
                    }),
                r && e.push({ type: "info", message: (0, I.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, O.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [r, s, o, n, i]),
        f = a.useMemo(() => (0, b.l6)(A, c?.checkoutContext?.available_plans), [A, c]),
        g = a.useMemo(() => (p ? (0, l.jsx)(N.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        v = (0, ep.G)(C),
        M = a.useMemo(() => (v ? (0, l.jsx)(ec.a, {}) : null), [v]),
        R = a.useMemo(() => (null != g ? g : null != M ? M : null), [g, M]),
        j = (0, b.J$)(A.paymentSourceId),
        L = null,
        D = null;
    p
        ? (D = (0, l.jsx)(x.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: E,
              selectedPlanId: C,
              showPlanStatusSubText: !0,
              priceOptions: f,
          }))
        : null != c &&
          (L = (0, l.jsx)(ed._, {
              type: w.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: j,
              isPremiumGroupPurchase: r,
              bottomSubText: u,
          }));
    let U = m ? d : (0, l.jsx)("div", { ref: y }),
        k = m ? null : d;
    return (0, l.jsx)(eu.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: T,
        paymentSelectContent: S,
        subscriptionDetailsContent: U,
        purchaseItemContent: L,
        planSelectContent: D,
        invoiceSummaryContent: k,
        legalContent: _,
        invoiceTotalDueLabel: P ? q.intl.string(z.default.R0cZsM) : q.intl.string(z.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, H.U5)(c) : void 0,
        promotionalNoticeContent: R,
    });
};
var eh = n(88001),
    eC = n(466919);
function eA(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: i,
            priceOptions: s,
            handlePaymentSourceAdd: U,
            planId: k,
            setHasAcceptedTerms: Y,
            legalTermsNodeRef: G,
            hasLegalTermsFlash: F,
            planGroup: B,
            hasOpenInvoice: W,
            purchaseState: V,
            handleClose: H,
            shouldUseUnifiedCheckoutUI: K,
        } = e,
        z = (0, E.mx)(),
        $ = (0, y.t4)((e) => e.selectedSkuId),
        {
            defaultPlanId: X,
            isPremium: Q,
            startedPaymentFlowWithPaymentSourcesRef: ee,
            hasPaymentSources: et,
            isPremiumGroupPurchase: en,
            paymentSourceId: el,
        } = (0, S.P5)(),
        eu = (0, E.sw)(),
        { isGift: ec } = (0, P.Pv)(),
        ed = (0, g.g)(i, el),
        ep = a.useMemo(() => (0, b.l6)(s, eu?.checkoutContext?.available_plans), [eu, s]),
        eA = (0, c.bG)([M.A], () => M.A.get(k));
    o()(null != eA, "Missing newPlan");
    let { showFractionalPremiumBanner: eE, fractionalPremiumInfo: ey } = (0, I._V)({
            premiumSubscription: n,
            selectedPlanId: k,
            planGroup: B,
            isGift: ec,
        }),
        eP = (0, E.IK)(),
        eS = u.M.EEA_COUNTRIES.has(v.A.ipCountryCodeWithFallback),
        e_ = V === _.h.PURCHASING || V === _.h.COMPLETED,
        eT = (0, f.vT)({ isTrial: !1, isGift: ec, selectedSkuId: $, startedPaymentFlowWithPaymentSources: ee.current }),
        ef = n?.isPausedAllowsResumeButNotUpdates,
        eN = a.useMemo(() => (0, b.Tm)({ skuId: $, isPremium: Q, defaultPlanId: X }), [$, X, Q]);
    t =
        W || ef
            ? q.intl.string(q.t.nyzoFb)
            : en
              ? q.intl.formatToPlainString(eC.default["3m9DJK"], { premiumGroupProductName: (0, eh.DP)() })
              : (0, b.ys)(k)
                ? (0, b.ff)(n, eA)
                : q.intl.formatToPlainString(q.t["sBpy9/"], { planName: eA.name });
    let eI = a.useRef(null),
        [ex, eg] = a.useState(null),
        [ev, eM] = a.useState(void 0),
        eb = a.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: K,
                unifiedSubscriptionDetailsNode: eI,
                setUnifiedPlainNoticeText: eg,
                setOverrideRenewalDate: eM,
            }),
            [K],
        ),
        {
            content: eR,
            isInvoiceBilledImmediately: ej,
            ...eL
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
                            content: (0, l.jsx)(ea, {
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
                        : (0, R.Ge)(o, r, c)
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
                                content: (0, l.jsx)(er, {
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
                  { hasOpenInvoice: W, showResumeSubscriptionView: ef, planId: k },
                  {
                      disabled: e_,
                      premiumSubscription: n,
                      newPlan: eA,
                      planGroup: B,
                      fractionalPremiumInfo: ey,
                      priceOptions: s,
                  },
                  eb,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eO = n?.eligiblePaymentGateways,
        eD = null != eO && eO.length > 0 && (null == el || null === ed) && et ? O.fU.SELECT_PAYMENT_METHOD : void 0,
        ew = a.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: r()({ [J.E4]: Q }),
                shouldUseUnifiedCheckoutUI: K,
            }),
            [n?.eligiblePaymentGateways, Q, K],
        ),
        eU = (0, l.jsx)(A.N, {
            label: q.intl.string(q.t["mmDvV+"]),
            onPaymentSourceAdd: U,
            disabled: e_,
            additionalPaymentSourceDropdownProps: ew,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: s.paymentSourceId,
        }),
        ek = null != n && (0, R.Ge)(n, k, B),
        eY = K
            ? null != eu && null != eP
                ? (0, l.jsx)(x.PI, {
                      overrideRenewalDate: ev,
                      planGroup: B,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eA,
                      isGift: ec,
                      paymentSourceType: ed,
                      isInvoiceBilledImmediately: ej,
                      invoiceSummaryTypeWithPreview: {
                          type: w.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: eu,
                          renewalInvoicePreview: eP,
                      },
                      hideLegalContent: ek && null != z,
                  })
                : null
            : (0, l.jsx)(L.A, {
                  isActive: F,
                  ref: G,
                  children: ek
                      ? (0, l.jsx)(es, {
                            premiumSubscription: n,
                            newPlan: eA,
                            planGroup: B,
                            priceOptions: s,
                            preventFetch: e_,
                            disabled: e_,
                            isEEA: eS,
                            paymentSources: i,
                            setHasAcceptedTerms: Y,
                        })
                      : (0, l.jsx)(C.A, {
                            onChange: Y,
                            finePrint: (0, l.jsx)(h.A, {
                                subscriptionPlan: eA,
                                paymentSourceType: ed,
                                basePrice: (0, b.y8)(eA.id, !1, ec, ep),
                                currentSubscription: n,
                                planGroup: B,
                            }),
                            forceShow: !0,
                            showPricingLink: eA.currency !== Z.Yri.USD,
                            showWithdrawalWaiver: eS,
                            disabled: e_,
                            subscriptionPlan: eA,
                            currentSubscription: n,
                            planGroup: B,
                        }),
              }),
        eG = !ef && eT && !en,
        eF = a.useMemo(() => (eG ? (0, l.jsx)(N.P, { planSkuId: eA.skuId }) : null), [eG, eA.skuId]);
    return K
        ? (0, l.jsx)(em, {
              disabled: e_,
              showFractionalPremiumBanner: eE,
              fractionalPremiumInfo: ey,
              isPremiumGroupPurchase: en,
              paymentRestrictionBannerType: eD,
              invoiceError: z,
              unifiedPlainNoticeText: ex,
              invoicePreview: eu,
              invoicePreviewComponent: eR,
              shouldShowPlanSelectAndPromoBanner: eG,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eL.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eA,
              planId: k,
              priceOptions: s,
              premiumPlanOptions: eN,
              unifiedSubscriptionDetailsNode: eI,
              isInvoiceBilledImmediately: ej,
              paymentSelectContent: eU,
              legalContent: eY,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(T.k, { location: "PremiumSwitchPlanReview", paymentSourceId: el }),
                  (0, l.jsxs)("div", {
                      className: J.Du,
                      children: [
                          (0, l.jsx)(O.je, { paymentRestrictionBannerType: eD }),
                          eG &&
                              (0, l.jsxs)("div", {
                                  children: [
                                      eF,
                                      (0, l.jsx)(D.$p, {
                                          disabled: e_,
                                          planOptions: eN,
                                          selectedPlanId: k,
                                          planGroup: B,
                                          showTotal: !1,
                                          priceOptions: ep,
                                          handleClose: H,
                                      }),
                                      (0, l.jsx)(j.pK, {}),
                                  ],
                              }),
                          en &&
                              (0, l.jsx)("div", {
                                  className: J.Ni,
                                  children: (0, l.jsx)(d.w, {
                                      type: "info",
                                      children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, I.Nn)() }),
                                  }),
                              }),
                          (0, l.jsx)(m.D, { label: t, children: eR }),
                          (0, l.jsx)("div", { className: J.LC, children: eU }),
                          eY,
                      ],
                  }),
              ],
          });
}
