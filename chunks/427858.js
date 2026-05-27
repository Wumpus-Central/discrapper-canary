n.d(t, { A: () => eE });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(284009),
    o = n.n(s),
    u = n(997101),
    c = n(17928),
    d = n(683071),
    p = n(834730),
    m = n(452027),
    h = n(821891),
    C = n(953689),
    A = n(682481),
    y = n(61572),
    E = n(426398),
    P = n(666646),
    S = n(722847),
    _ = n(937008),
    f = n(834252),
    T = n(566980),
    I = n(349786),
    x = n(800471),
    N = n(71867),
    g = n(222707),
    v = n(340034),
    M = n(216641),
    b = n(615405),
    j = n(97352),
    R = n(428262),
    L = n(615396),
    O = n(735164),
    D = n(778307),
    w = n(218075),
    U = n(361597),
    k = n(299301),
    G = n(340287),
    Y = n(289873),
    F = n(793574),
    B = n(688810),
    W = n(848584),
    V = n(888751),
    H = n(543767),
    K = n(787455),
    Z = n(692440),
    q = n(788868),
    z = n(652215),
    J = n(375708),
    $ = n(327105),
    X = n(207715),
    Q = n(814304);
function ee(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : G.createPortal(t, n);
}
let et = (e, t) => (null == e || t ? null : (0, l.jsx)(d.w, { type: "critical", children: e.message })),
    en = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, l.jsx)("div", { className: X.l, children: (0, l.jsx)(Y.y, { type: Y.y.Type.PULSING_ELLIPSIS }) })
            : (0, l.jsx)(Y.y, {});
    },
    el = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: l } = t;
        i.useEffect(() => {
            n && (null != l ? e(l) : e(null));
        }, [e, n, l]);
    },
    ei = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: l } = t;
        i.useEffect(() => {
            n && e(l);
        }, [e, n, l]);
    },
    ea = (e) => {
        let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: i, analyticsLocations: a } = e,
            r = {
                subscriptionId: t.id,
                items: n,
                paymentSourceId: l.paymentSourceId,
                currency: l.currency,
                preventFetch: i,
                analyticsLocations: a,
                analyticsLocation: F.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [s, o] = (0, H.YV)({ ...r, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, H.YV)({ ...r, renewal: !0 });
        return { proratedInvoicePreview: s, proratedInvoiceError: o, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function er(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
            fractionalPremiumInfo: a,
            shouldUseUnifiedCheckoutUI: r,
            unifiedSubscriptionDetailsNode: s,
        } = e,
        [o, u] = (0, H.C8)({ subscriptionId: t.id, preventFetch: i });
    (0, P.OQ)({ checkoutInvoicePreview: o, checkoutInvoiceError: u, renewalInvoicePreview: o, renewalInvoiceError: u });
    let c = (0, R.J$)(n.paymentSourceId);
    if (null != o) {
        let e = (0, l.jsx)(Z.m0, {
                premiumSubscription: t,
                renewalInvoice: o,
                isUpdate: !0,
                isPrepaidPaymentSource: c,
                fractionalPremiumInfo: a,
                shouldUseUnifiedCheckoutUI: r,
            }),
            n = (0, l.jsx)(Z._J, { invoice: o, isPrepaidPaymentSource: c, shouldUseUnifiedCheckoutUI: r });
        return r
            ? (0, l.jsxs)(l.Fragment, { children: [n, (0, l.jsx)(ee, { containerNode: s.current, children: e })] })
            : (0, l.jsxs)(O.Yx, { className: X.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: r });
}
function es(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: a,
            priceOptions: r,
            fractionalPremiumInfo: s,
            preventFetch: o,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: c,
            setOverrideRenewalDate: d,
            shouldUseUnifiedCheckoutUI: p,
        } = e,
        m = (0, S.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: h } = (0, f.P5)(),
        { isGift: C } = (0, _.Pv)(),
        { analyticsLocations: A } = (0, B.Ay)(),
        y = (0, R.Pg)(t, n.id, 1, new Set(a)),
        {
            proratedInvoicePreview: E,
            proratedInvoiceError: T,
            renewalInvoicePreview: I,
            renewalInvoiceError: N,
        } = ea({ premiumSubscription: t, newItems: y, priceOptions: r, preventFetch: o, analyticsLocations: A }),
        { primaryInvoiceError: g } = (0, P.OQ)({
            checkoutInvoicePreview: E,
            checkoutInvoiceError: T,
            renewalInvoicePreview: I,
            renewalInvoiceError: N,
        }),
        { planSwitchNoticeCopy: M, overrideRenewalDate: b } = i.useMemo(() => {
            let e;
            return (null !== s &&
                null !== E &&
                (e = (0, R._e)(E.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != E && null != I)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, Z.DK)({
                          proratedInvoice: E,
                          renewalInvoice: I,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [E, I, s]);
    if (
        (ei(d, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: b }),
        el(c, { shouldUseUnifiedCheckoutUI: p, noticeCopy: M }),
        null != g)
    )
        return et(g, p);
    let j = (0, x.vT)({ isTrial: !1, isGift: C, selectedSkuId: m, startedPaymentFlowWithPaymentSources: h.current }),
        L = (0, x.UB)(j, E, n);
    if (null == E || null == I || L) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: p });
    let D = (0, R.J$)(r.paymentSourceId),
        w = (0, l.jsx)(Z.m0, {
            premiumSubscription: t,
            proratedInvoice: E,
            renewalInvoice: I,
            overrideRenewalDate: b,
            isPrepaidPaymentSource: D,
            fractionalPremiumInfo: s,
            isUpdate: !0,
            shouldUseUnifiedCheckoutUI: p,
        });
    return p
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(v.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: k.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: E,
                          renewalInvoicePreview: I,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: D,
                      subscriptionTrial: null,
                  }),
                  (0, l.jsx)(ee, { containerNode: u.current, children: w }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(Z.wP, { proratedInvoice: E, renewalInvoice: I, overrideRenewalDate: b }),
                  (0, l.jsxs)(O.Yx, {
                      className: Q.SU,
                      children: [
                          (0, l.jsx)(O.Xd, { children: J.intl.string(J.t["2eh+Co"]) }),
                          (0, l.jsx)(Z.mT, { invoice: E, newPlan: n, isPrepaidPaymentSource: D }),
                          w,
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
            planGroup: r,
            fractionalPremiumInfo: s,
            priceOptions: o,
            preventFetch: u,
            shouldUseUnifiedCheckoutUI: c,
            setUnifiedPlainNoticeText: d,
            setOverrideRenewalDate: p,
            unifiedSubscriptionDetailsNode: m,
        } = e,
        { analyticsLocations: h } = (0, B.Ay)(),
        [C, A] = (0, H.YV)({
            subscriptionId: n.id,
            items: (0, R.Pg)(n, a.id, 1, new Set(r)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            preventFetch: u,
            analyticsLocations: h,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    (0, P.OQ)({ checkoutInvoicePreview: C, checkoutInvoiceError: A, renewalInvoicePreview: C, renewalInvoiceError: A });
    let { renewalDate: y, planSwitchNoticeCopy: E } = i.useMemo(() => {
        if (null == C) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = C.subscriptionPeriodStart;
        return (
            s.fractionalState === q.xc.FP_SUB_PAUSED && (e = s.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: J.intl.format(J.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [C, s.fractionalState, s.endsAt]);
    if (
        (ei(p, { shouldUseUnifiedCheckoutUI: c, overrideRenewalDate: y }),
        el(d, { shouldUseUnifiedCheckoutUI: c, noticeCopy: E }),
        null != A)
    )
        return et(A, c);
    if (null == C) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: c });
    t = n.type === z.rzx.PREMIUM ? (0, R.Mn)(a.id) : a.name;
    let S = (0, R.J$)(o.paymentSourceId),
        _ = (0, l.jsx)("div", { className: X.o, children: E }),
        f = (0, l.jsx)(Z.m0, {
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
        let { lineItems: e } = (0, V.Ig)(C, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: S,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(W.Vm, { label: J.intl.string($.default.eoXh7B), lineItems: e, currency: C.currency }),
                (0, l.jsx)(ee, { containerNode: m.current, children: f }),
            ],
        });
    }
    return (0, l.jsxs)("div", {
        className: Q.G3,
        children: [
            _,
            (0, l.jsxs)(O.Yx, {
                className: Q.SU,
                children: [
                    (0, l.jsx)(O.Xd, { children: J.intl.string(J.t.iqhIp4) }),
                    (0, l.jsx)(O.oR, { label: t, value: (0, R.jh)(a, o, !0) }),
                    (0, l.jsx)(K.A, { invoice: C }),
                    (0, l.jsx)(O.pK, {}),
                    f,
                ],
            }),
        ],
    });
}
function eu(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: i,
            planGroup: a,
            priceOptions: r,
            preventFetch: s,
            disabled: o,
            isEEA: u,
            paymentSources: c,
            setHasAcceptedTerms: d,
        } = e,
        { analyticsLocations: p } = (0, B.Ay)(),
        m = (0, R.Pg)(n, i.id, 1, new Set(a)),
        {
            proratedInvoicePreview: A,
            proratedInvoiceError: y,
            renewalInvoicePreview: E,
            renewalInvoiceError: S,
        } = ea({ premiumSubscription: n, newItems: m, priceOptions: r, preventFetch: s, analyticsLocations: p }),
        { primaryInvoiceError: _ } = (0, P.OQ)({
            checkoutInvoicePreview: A,
            checkoutInvoiceError: y,
            renewalInvoicePreview: E,
            renewalInvoiceError: S,
        }),
        f = (0, M.g)(c, r.paymentSourceId);
    return null != _ ||
        (null != E && (t = { amount: E.subtotal, currency: E.currency, tax: E.tax, taxInclusive: E.taxInclusive }),
        null == t)
        ? null
        : (0, l.jsx)(C.A, {
              onChange: d,
              finePrint: (0, l.jsx)(h.A, {
                  subscriptionPlan: i,
                  paymentSourceType: f,
                  basePrice: t,
                  proratedAmount: null != A ? A.total : void 0,
                  currentSubscription: n,
                  planGroup: a,
              }),
              forceShow: !0,
              showPricingLink: i.currency !== z.Yri.USD,
              showWithdrawalWaiver: u,
              disabled: o,
              subscriptionPlan: i,
              currentSubscription: n,
              planGroup: a,
          });
}
function ec(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: a,
            fractionalPremiumInfo: r,
            shouldUseUnifiedCheckoutUI: s,
            unifiedSubscriptionDetailsNode: o,
            setUnifiedPlainNoticeText: u,
        } = e,
        { analyticsLocations: c } = (0, B.Ay)(),
        [d, p] = (0, H.YV)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: F.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [m, h] = (0, H.YV)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: F.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        }),
        { primaryInvoiceError: C } = (0, P.OQ)({
            checkoutInvoicePreview: d,
            checkoutInvoiceError: p,
            renewalInvoicePreview: m,
            renewalInvoiceError: h,
        }),
        A = i.useMemo(() => J.intl.string(J.t.spIYou), []);
    if ((el(u, { shouldUseUnifiedCheckoutUI: s, noticeCopy: A }), null != C)) return et(C, s);
    if (null == d || null == m) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: s });
    let y = (0, R.J$)(n.paymentSourceId),
        E = (0, l.jsx)(Z.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: y,
            fractionalPremiumInfo: r,
            shouldUseUnifiedCheckoutUI: s,
        }),
        S = (0, l.jsx)("div", { className: X.o, children: A }),
        _ = (0, l.jsx)(Z._J, { invoice: d, isPrepaidPaymentSource: y, shouldUseUnifiedCheckoutUI: s });
    return s
        ? (0, l.jsxs)(l.Fragment, { children: [_, (0, l.jsx)(ee, { containerNode: o.current, children: E })] })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  S,
                  (0, l.jsxs)(O.Yx, {
                      className: Q.SU,
                      children: [(0, l.jsx)(O.Xd, { children: J.intl.string(J.t["2eh+Co"]) }), _, E],
                  }),
              ],
          });
}
n(321073);
var ed = n(717925),
    ep = n(755880),
    em = n(134638),
    eh = n(906234);
let eC = (e) => {
    let {
            disabled: t,
            showFractionalPremiumBanner: n,
            fractionalPremiumInfo: a,
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
            premiumPlanOptions: y,
            unifiedSubscriptionDetailsNode: E,
            isInvoiceBilledImmediately: P,
            paymentMethodContent: S,
            legalContent: _,
        } = e,
        f = i.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(v.l$, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                r && e.push({ type: "info", message: (0, g.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, w.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [r, s, o, n, a]),
        T = i.useMemo(() => (0, R.l6)(A, c?.checkoutContext?.available_plans), [A, c]),
        I = i.useMemo(() => (p ? (0, l.jsx)(N.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        x = (0, eh.G)(C),
        M = i.useMemo(() => (x ? (0, l.jsx)(ep.a, {}) : null), [x]),
        b = i.useMemo(() => (null != I ? I : null != M ? M : null), [I, M]),
        j = (0, R.J$)(A.paymentSourceId),
        L = null,
        O = null;
    p
        ? (O = (0, l.jsx)(v.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: y,
              selectedPlanId: C,
              showPlanStatusSubText: !0,
              priceOptions: T,
          }))
        : null != c &&
          (L = (0, l.jsx)(em._, {
              type: k.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: j,
              isPremiumGroupPurchase: r,
              bottomSubText: u,
          }));
    let D = m ? d : (0, l.jsx)("div", { ref: E }),
        U = m ? null : d;
    return (0, l.jsx)(ed.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: f,
        paymentMethodContent: S,
        subscriptionDetailsContent: D,
        purchaseItemContent: L,
        planSelectContent: O,
        invoiceSummaryContent: U,
        legalContent: _,
        invoiceTotalDueLabel: P ? J.intl.string($.default.R0cZsM) : J.intl.string($.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, Z.U5)(c) : void 0,
        promotionalNoticeContent: b,
    });
};
var eA = n(88001),
    ey = n(466919);
function eE(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: a,
            handlePaymentSourceAdd: s,
            planId: G,
            setHasAcceptedTerms: Y,
            legalTermsNodeRef: F,
            hasLegalTermsFlash: B,
            planGroup: W,
            hasOpenInvoice: V,
            purchaseState: H,
            handleClose: K,
            shouldUseUnifiedCheckoutUI: Z,
        } = e,
        q = (0, P.mx)(),
        { hasPaymentSources: $ } = (0, E.jm)(),
        {
            selectedSkuId: X,
            paymentSourceId: ee,
            priceOptions: et,
            isPremium: en,
            isPremiumGroupPurchase: el,
        } = (0, S.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            ...e.getSelectedPlanAttributes(),
        })),
        { defaultPlanId: ei, startedPaymentFlowWithPaymentSourcesRef: ea } = (0, f.P5)(),
        ed = (0, P.sw)(),
        { isGift: ep } = (0, _.Pv)(),
        em = (0, M.g)(a, ee),
        eh = i.useMemo(() => (0, R.l6)(et, ed?.checkoutContext?.available_plans), [ed, et]),
        eE = (0, c.bG)([j.A], () => j.A.get(G));
    o()(null != eE, "Missing newPlan");
    let { showFractionalPremiumBanner: eP, fractionalPremiumInfo: eS } = (0, g._V)({
            premiumSubscription: n,
            selectedPlanId: G,
            planGroup: W,
            isGift: ep,
        }),
        e_ = (0, P.IK)(),
        ef = u.M.EEA_COUNTRIES.has(b.A.ipCountryCodeWithFallback),
        eT = H === T.h.PURCHASING || H === T.h.COMPLETED,
        eI = (0, x.vT)({ isTrial: !1, isGift: ep, selectedSkuId: X, startedPaymentFlowWithPaymentSources: ea.current }),
        ex = n?.isPausedAllowsResumeButNotUpdates,
        eN = i.useMemo(() => (0, R.Tm)({ skuId: X, isPremium: en, defaultPlanId: ei }), [X, ei, en]);
    t =
        V || ex
            ? J.intl.string(J.t.nyzoFb)
            : el
              ? J.intl.formatToPlainString(ey.default["3m9DJK"], { premiumGroupProductName: (0, eA.DP)() })
              : (0, R.ys)(G)
                ? (0, R.ff)(n, eE)
                : J.intl.formatToPlainString(J.t["sBpy9/"], { planName: eE.name });
    let eg = i.useRef(null),
        [ev, eM] = i.useState(null),
        [eb, ej] = i.useState(void 0),
        eR = i.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: Z,
                unifiedSubscriptionDetailsNode: eg,
                setUnifiedPlainNoticeText: eM,
                setOverrideRenewalDate: ej,
            }),
            [Z],
        ),
        {
            content: eL,
            isInvoiceBilledImmediately: eO,
            ...eD
        } = null != n
            ? (function (e, t, n) {
                  let { hasOpenInvoice: i, showResumeSubscriptionView: a, planId: r } = e,
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
                      : a
                        ? {
                              content: (0, l.jsx)(ec, {
                                  premiumSubscription: o,
                                  priceOptions: p,
                                  preventFetch: s,
                                  fractionalPremiumInfo: d,
                                  ...n,
                              }),
                              isInvoiceBilledImmediately: !0,
                              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                          }
                        : (0, L.Ge)(o, r, c)
                          ? {
                                content: (0, l.jsx)(es, {
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
                                content: (0, l.jsx)(eo, {
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
                  { hasOpenInvoice: V, showResumeSubscriptionView: ex, planId: G },
                  {
                      disabled: eT,
                      premiumSubscription: n,
                      newPlan: eE,
                      planGroup: W,
                      fractionalPremiumInfo: eS,
                      priceOptions: et,
                  },
                  eR,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ew = n?.eligiblePaymentGateways,
        eU = null != ew && ew.length > 0 && (null == ee || null === em) && $ ? w.fU.SELECT_PAYMENT_METHOD : void 0,
        ek = i.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: r()({ [Q.E4]: en }),
                shouldUseUnifiedCheckoutUI: Z,
            }),
            [n?.eligiblePaymentGateways, en, Z],
        ),
        eG = (0, l.jsx)(A.y, {
            children: (0, l.jsx)(y.N, {
                label: J.intl.string(J.t["mmDvV+"]),
                onPaymentSourceAdd: s,
                disabled: eT,
                additionalPaymentSourceDropdownProps: ek,
                location: "PremiumSwitchPlanReview",
                subscriptionPaymentSourceId: et.paymentSourceId,
            }),
        }),
        eY = null != n && (0, L.Ge)(n, G, W),
        eF = Z
            ? null != ed && null != e_
                ? (0, l.jsx)(v.PI, {
                      overrideRenewalDate: eb,
                      planGroup: W,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eE,
                      isGift: ep,
                      paymentSourceType: em,
                      isInvoiceBilledImmediately: eO,
                      invoiceSummaryTypeWithPreview: {
                          type: k.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: ed,
                          renewalInvoicePreview: e_,
                      },
                      hideLegalContent: eY && null != q,
                  })
                : null
            : (0, l.jsx)(D.A, {
                  isActive: B,
                  ref: F,
                  children: eY
                      ? (0, l.jsx)(eu, {
                            premiumSubscription: n,
                            newPlan: eE,
                            planGroup: W,
                            priceOptions: et,
                            preventFetch: eT,
                            disabled: eT,
                            isEEA: ef,
                            paymentSources: a,
                            setHasAcceptedTerms: Y,
                        })
                      : (0, l.jsx)(C.A, {
                            onChange: Y,
                            finePrint: (0, l.jsx)(h.A, {
                                subscriptionPlan: eE,
                                paymentSourceType: em,
                                basePrice: (0, R.y8)(eE.id, !1, ep, eh),
                                currentSubscription: n,
                                planGroup: W,
                            }),
                            forceShow: !0,
                            showPricingLink: eE.currency !== z.Yri.USD,
                            showWithdrawalWaiver: ef,
                            disabled: eT,
                            subscriptionPlan: eE,
                            currentSubscription: n,
                            planGroup: W,
                        }),
              }),
        eB = !ex && eI && !el,
        eW = i.useMemo(() => (eB ? (0, l.jsx)(N.P, { planSkuId: eE.skuId }) : null), [eB, eE.skuId]);
    return Z
        ? (0, l.jsx)(eC, {
              disabled: eT,
              showFractionalPremiumBanner: eP,
              fractionalPremiumInfo: eS,
              isPremiumGroupPurchase: el,
              paymentRestrictionBannerType: eU,
              invoiceError: q,
              unifiedPlainNoticeText: ev,
              invoicePreview: ed,
              invoicePreviewComponent: eL,
              shouldShowPlanSelectAndPromoBanner: eB,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eD.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eE,
              planId: G,
              priceOptions: et,
              premiumPlanOptions: eN,
              unifiedSubscriptionDetailsNode: eg,
              isInvoiceBilledImmediately: eO,
              paymentMethodContent: eG,
              legalContent: eF,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(I.k, { location: "PremiumSwitchPlanReview", paymentSourceId: ee }),
                  (0, l.jsxs)("div", {
                      className: Q.Du,
                      children: [
                          (0, l.jsx)(w.je, { paymentRestrictionBannerType: eU }),
                          eB &&
                              (0, l.jsxs)("div", {
                                  children: [
                                      eW,
                                      (0, l.jsx)(U.$p, {
                                          disabled: eT,
                                          planOptions: eN,
                                          selectedPlanId: G,
                                          planGroup: W,
                                          showTotal: !1,
                                          priceOptions: eh,
                                          handleClose: K,
                                      }),
                                      (0, l.jsx)(O.pK, {}),
                                  ],
                              }),
                          el &&
                              (0, l.jsx)("div", {
                                  className: Q.Ni,
                                  children: (0, l.jsx)(d.w, {
                                      type: "info",
                                      children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, g.Nn)() }),
                                  }),
                              }),
                          (0, l.jsx)(m.D, { label: t, children: eL }),
                          (0, l.jsx)("div", { className: Q.LC, children: eG }),
                          eF,
                      ],
                  }),
              ],
          });
}
