n.d(t, { A: () => ey });
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
    f = n(49960),
    T = n(566980),
    x = n(349786),
    N = n(800471),
    I = n(71867),
    g = n(222707),
    v = n(340034),
    M = n(216641),
    j = n(615405),
    b = n(97352),
    R = n(927578),
    L = n(615396),
    O = n(735164),
    D = n(778307),
    w = n(218075),
    U = n(337092),
    k = n(299301),
    Y = n(340287),
    G = n(289873),
    F = n(793574),
    B = n(688810),
    W = n(848584),
    V = n(888751),
    H = n(543767),
    K = n(787455),
    Z = n(692440),
    q = n(788868),
    z = n(652215),
    $ = n(375708),
    J = n(327105),
    X = n(207715),
    Q = n(814304);
function ee(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : Y.createPortal(t, n);
}
let et = (e, t) => (null == e || t ? null : (0, l.jsx)(d.w, { type: "critical", children: e.message })),
    en = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, l.jsx)("div", { className: X.l, children: (0, l.jsx)(G.y, { type: G.y.Type.PULSING_ELLIPSIS }) })
            : (0, l.jsx)(G.y, {});
    },
    el = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: l } = t;
        a.useEffect(() => {
            n && (null != l ? e(l) : e(null));
        }, [e, n, l]);
    },
    ea = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: l } = t;
        a.useEffect(() => {
            n && e(l);
        }, [e, n, l]);
    },
    ei = (e) => {
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
            [s, o] = (0, H.YV)({ ...r, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, H.YV)({ ...r, renewal: !0 });
        return { proratedInvoicePreview: s, proratedInvoiceError: o, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function er(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: a,
            fractionalPremiumInfo: i,
            shouldUseUnifiedCheckoutUI: r,
            unifiedSubscriptionDetailsNode: s,
        } = e,
        [o, u] = (0, H.C8)({ subscriptionId: t.id, preventFetch: a });
    (0, y.OQ)({ checkoutInvoicePreview: o, checkoutInvoiceError: u, renewalInvoicePreview: o, renewalInvoiceError: u });
    let c = (0, R.J$)(n.paymentSourceId);
    if (null != o) {
        let e = (0, l.jsx)(Z.m0, {
                premiumSubscription: t,
                renewalInvoice: o,
                isUpdate: !0,
                isPrepaidPaymentSource: c,
                fractionalPremiumInfo: i,
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
        { startedPaymentFlowWithPaymentSourcesRef: h } = (0, f.P5)(),
        { isGift: C } = (0, _.Pv)(),
        { analyticsLocations: A } = (0, B.Ay)(),
        E = (0, R.Pg)(t, n.id, 1, new Set(i)),
        {
            proratedInvoicePreview: P,
            proratedInvoiceError: T,
            renewalInvoicePreview: x,
            renewalInvoiceError: I,
        } = ei({ premiumSubscription: t, newItems: E, priceOptions: r, preventFetch: o, analyticsLocations: A }),
        { primaryInvoiceError: g } = (0, y.OQ)({
            checkoutInvoicePreview: P,
            checkoutInvoiceError: T,
            renewalInvoicePreview: x,
            renewalInvoiceError: I,
        }),
        { planSwitchNoticeCopy: M, overrideRenewalDate: j } = a.useMemo(() => {
            let e;
            return (null !== s &&
                null !== P &&
                (e = (0, R._e)(P.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != P && null != x)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, Z.DK)({
                          proratedInvoice: P,
                          renewalInvoice: x,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [P, x, s]);
    if (
        (ea(d, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: j }),
        el(c, { shouldUseUnifiedCheckoutUI: p, noticeCopy: M }),
        null != g)
    )
        return et(g, p);
    let b = (0, N.vT)({ isTrial: !1, isGift: C, selectedSkuId: m, startedPaymentFlowWithPaymentSources: h.current }),
        L = (0, N.UB)(b, P, n);
    if (null == P || null == x || L) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: p });
    let D = (0, R.J$)(r.paymentSourceId),
        w = (0, l.jsx)(Z.m0, {
            premiumSubscription: t,
            proratedInvoice: P,
            renewalInvoice: x,
            overrideRenewalDate: j,
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
                          invoicePreview: P,
                          renewalInvoicePreview: x,
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
                  (0, l.jsx)(Z.wP, { proratedInvoice: P, renewalInvoice: x, overrideRenewalDate: j }),
                  (0, l.jsxs)(O.Yx, {
                      className: Q.SU,
                      children: [
                          (0, l.jsx)(O.Xd, { children: $.intl.string($.t["2eh+Co"]) }),
                          (0, l.jsx)(Z.mT, { invoice: P, newPlan: n, isPrepaidPaymentSource: D }),
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
        { analyticsLocations: h } = (0, B.Ay)(),
        [C, A] = (0, H.YV)({
            subscriptionId: n.id,
            items: (0, R.Pg)(n, i.id, 1, new Set(r)),
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
            s.fractionalState === q.xc.FP_SUB_PAUSED && (e = s.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: $.intl.format($.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [C, s.fractionalState, s.endsAt]);
    if (
        (ea(p, { shouldUseUnifiedCheckoutUI: c, overrideRenewalDate: E }),
        el(d, { shouldUseUnifiedCheckoutUI: c, noticeCopy: P }),
        null != A)
    )
        return et(A, c);
    if (null == C) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: c });
    t = n.type === z.rzx.PREMIUM ? (0, R.Mn)(i.id) : i.name;
    let S = (0, R.J$)(o.paymentSourceId),
        _ = (0, l.jsx)("div", { className: X.o, children: P }),
        f = (0, l.jsx)(Z.m0, {
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
        let { lineItems: e } = (0, V.Ig)(C, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: S,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(W.Vm, { label: $.intl.string(J.default.eoXh7B), lineItems: e, currency: C.currency }),
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
                    (0, l.jsx)(O.Xd, { children: $.intl.string($.t.iqhIp4) }),
                    (0, l.jsx)(O.oR, { label: t, value: (0, R.jh)(i, o, !0) }),
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
            newPlan: a,
            planGroup: i,
            priceOptions: r,
            preventFetch: s,
            disabled: o,
            isEEA: u,
            paymentSources: c,
            setHasAcceptedTerms: d,
        } = e,
        { analyticsLocations: p } = (0, B.Ay)(),
        m = (0, R.Pg)(n, a.id, 1, new Set(i)),
        {
            proratedInvoicePreview: h,
            proratedInvoiceError: E,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        } = ei({ premiumSubscription: n, newItems: m, priceOptions: r, preventFetch: s, analyticsLocations: p }),
        { primaryInvoiceError: _ } = (0, y.OQ)({
            checkoutInvoicePreview: h,
            checkoutInvoiceError: E,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        }),
        f = (0, M.g)(c, r.paymentSourceId);
    return null != _ ||
        (null != P && (t = { amount: P.subtotal, currency: P.currency, tax: P.tax, taxInclusive: P.taxInclusive }),
        null == t)
        ? null
        : (0, l.jsx)(A.A, {
              onChange: d,
              finePrint: (0, l.jsx)(C.A, {
                  subscriptionPlan: a,
                  paymentSourceType: f,
                  basePrice: t,
                  proratedAmount: null != h ? h.total : void 0,
                  currentSubscription: n,
                  planGroup: i,
              }),
              forceShow: !0,
              showPricingLink: a.currency !== z.Yri.USD,
              showWithdrawalWaiver: u,
              disabled: o,
              subscriptionPlan: a,
              currentSubscription: n,
              planGroup: i,
          });
}
function ec(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
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
            preventFetch: i,
            analyticsLocations: c,
            analyticsLocation: F.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [m, h] = (0, H.YV)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: i,
            analyticsLocations: c,
            analyticsLocation: F.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        }),
        { primaryInvoiceError: C } = (0, y.OQ)({
            checkoutInvoicePreview: d,
            checkoutInvoiceError: p,
            renewalInvoicePreview: m,
            renewalInvoiceError: h,
        }),
        A = a.useMemo(() => $.intl.string($.t.spIYou), []);
    if ((el(u, { shouldUseUnifiedCheckoutUI: s, noticeCopy: A }), null != C)) return et(C, s);
    if (null == d || null == m) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: s });
    let E = (0, R.J$)(n.paymentSourceId),
        P = (0, l.jsx)(Z.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: E,
            fractionalPremiumInfo: r,
            shouldUseUnifiedCheckoutUI: s,
        }),
        S = (0, l.jsx)("div", { className: X.o, children: A }),
        _ = (0, l.jsx)(Z._J, { invoice: d, isPrepaidPaymentSource: E, shouldUseUnifiedCheckoutUI: s });
    return s
        ? (0, l.jsxs)(l.Fragment, { children: [_, (0, l.jsx)(ee, { containerNode: o.current, children: P })] })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  S,
                  (0, l.jsxs)(O.Yx, {
                      className: Q.SU,
                      children: [(0, l.jsx)(O.Xd, { children: $.intl.string($.t["2eh+Co"]) }), _, P],
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
            legalContent: f,
        } = e,
        T = a.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(v.l$, { fractionalPremiumInfo: i }),
                        key: "fractional-premium-notice",
                    }),
                r && e.push({ type: "info", message: (0, g.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, w.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [r, s, o, n, i]),
        x = a.useMemo(() => (0, R.l6)(A, c?.checkoutContext?.available_plans), [A, c]),
        N = a.useMemo(() => (p ? (0, l.jsx)(I.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        M = (0, eh.G)(C),
        j = a.useMemo(() => (M ? (0, l.jsx)(ep.a, {}) : null), [M]),
        b = a.useMemo(() => (null != N ? N : null != j ? j : null), [N, j]),
        L = (0, R.J$)(A.paymentSourceId),
        O = null,
        D = null;
    p
        ? (D = (0, l.jsx)(v.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: E,
              selectedPlanId: C,
              showPlanStatusSubText: !0,
              priceOptions: x,
          }))
        : null != c &&
          (O = (0, l.jsx)(em._, {
              type: k.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: L,
              isPremiumGroupPurchase: r,
              bottomSubText: u,
          }));
    let U = m ? d : (0, l.jsx)("div", { ref: y }),
        Y = m ? null : d;
    return (0, l.jsx)(ed.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: T,
        paymentSelectContent: (0, l.jsxs)(l.Fragment, { children: [S, _] }),
        subscriptionDetailsContent: U,
        purchaseItemContent: O,
        planSelectContent: D,
        invoiceSummaryContent: Y,
        legalContent: f,
        invoiceTotalDueLabel: P ? $.intl.string(J.default.R0cZsM) : $.intl.string(J.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, Z.U5)(c) : void 0,
        promotionalNoticeContent: b,
    });
};
var eA = n(88001),
    eE = n(466919);
function ey(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: i,
            priceOptions: s,
            handlePaymentSourceAdd: Y,
            planId: G,
            setHasAcceptedTerms: F,
            legalTermsNodeRef: B,
            hasLegalTermsFlash: W,
            planGroup: V,
            currencies: H,
            onCurrencyChange: K,
            hasOpenInvoice: Z,
            purchaseState: q,
            handleClose: J,
            shouldUseUnifiedCheckoutUI: X,
        } = e,
        ee = (0, y.mx)(),
        et = (0, S.t4)((e) => e.selectedSkuId),
        {
            defaultPlanId: en,
            isPremium: el,
            startedPaymentFlowWithPaymentSourcesRef: ea,
            hasPaymentSources: ei,
            isPremiumGroupPurchase: ed,
            paymentSourceId: ep,
            displayCurrency: em,
        } = (0, f.P5)(),
        eh = (0, y.sw)(),
        { isGift: ey } = (0, _.Pv)(),
        eP = (0, M.g)(i, ep),
        eS = a.useMemo(() => (0, R.l6)(s, eh?.checkoutContext?.available_plans), [eh, s]),
        e_ = (0, c.bG)([b.A], () => b.A.get(G));
    o()(null != e_, "Missing newPlan");
    let { showFractionalPremiumBanner: ef, fractionalPremiumInfo: eT } = (0, g._V)({
            premiumSubscription: n,
            selectedPlanId: G,
            planGroup: V,
            isGift: ey,
        }),
        ex = (0, y.IK)(),
        eN = u.M.EEA_COUNTRIES.has(j.A.ipCountryCodeWithFallback),
        eI = q === T.h.PURCHASING || q === T.h.COMPLETED,
        eg = (0, N.vT)({
            isTrial: !1,
            isGift: ey,
            selectedSkuId: et,
            startedPaymentFlowWithPaymentSources: ea.current,
        }),
        ev = n?.isPausedAllowsResumeButNotUpdates,
        eM = a.useMemo(() => (0, R.Tm)({ skuId: et, isPremium: el, defaultPlanId: en }), [et, en, el]);
    t =
        Z || ev
            ? $.intl.string($.t.nyzoFb)
            : ed
              ? $.intl.formatToPlainString(eE.default["3m9DJK"], { premiumGroupProductName: (0, eA.DP)() })
              : (0, R.ys)(G)
                ? (0, R.ff)(n, e_)
                : $.intl.formatToPlainString($.t["sBpy9/"], { planName: e_.name });
    let ej = a.useRef(null),
        [eb, eR] = a.useState(null),
        [eL, eO] = a.useState(void 0),
        eD = a.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: X,
                unifiedSubscriptionDetailsNode: ej,
                setUnifiedPlainNoticeText: eR,
                setOverrideRenewalDate: eO,
            }),
            [X],
        ),
        {
            content: ew,
            isInvoiceBilledImmediately: eU,
            ...ek
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
                  { hasOpenInvoice: Z, showResumeSubscriptionView: ev, planId: G },
                  {
                      disabled: eI,
                      premiumSubscription: n,
                      newPlan: e_,
                      planGroup: V,
                      fractionalPremiumInfo: eT,
                      priceOptions: s,
                  },
                  eD,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eY = n?.eligiblePaymentGateways,
        eG = null != eY && eY.length > 0 && (null == ep || null === eP) && ei ? w.fU.SELECT_PAYMENT_METHOD : void 0,
        eF = a.useMemo(
            () => ({
                label: $.intl.string($.t["/AAR02"]),
                selectedCurrency: s.currency ?? em,
                currencies: H,
                onChange: K,
                disabled: eI,
            }),
            [H, K, s, em, eI],
        ),
        eB = a.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: r()({ [Q.E4]: el }),
                shouldUseUnifiedCheckoutUI: X,
            }),
            [n?.eligiblePaymentGateways, el, X],
        ),
        eW = (0, l.jsx)(E.N, {
            label: $.intl.string($.t["mmDvV+"]),
            onPaymentSourceAdd: Y,
            disabled: eI,
            additionalPaymentSourceDropdownProps: eB,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: s.paymentSourceId,
        }),
        eV = null != n && (0, L.Ge)(n, G, V),
        eH = X
            ? null != eh && null != ex
                ? (0, l.jsx)(v.PI, {
                      overrideRenewalDate: eL,
                      planGroup: V,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: e_,
                      isGift: ey,
                      paymentSourceType: eP,
                      isInvoiceBilledImmediately: eU,
                      invoiceSummaryTypeWithPreview: {
                          type: k.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: eh,
                          renewalInvoicePreview: ex,
                      },
                      hideLegalContent: eV && null != ee,
                  })
                : null
            : (0, l.jsx)(D.A, {
                  isActive: W,
                  ref: B,
                  children: eV
                      ? (0, l.jsx)(eu, {
                            premiumSubscription: n,
                            newPlan: e_,
                            planGroup: V,
                            priceOptions: s,
                            preventFetch: eI,
                            disabled: eI,
                            isEEA: eN,
                            paymentSources: i,
                            setHasAcceptedTerms: F,
                        })
                      : (0, l.jsx)(A.A, {
                            onChange: F,
                            finePrint: (0, l.jsx)(C.A, {
                                subscriptionPlan: e_,
                                paymentSourceType: eP,
                                basePrice: (0, R.y8)(e_.id, !1, ey, eS),
                                currentSubscription: n,
                                planGroup: V,
                            }),
                            forceShow: !0,
                            showPricingLink: e_.currency !== z.Yri.USD,
                            showWithdrawalWaiver: eN,
                            disabled: eI,
                            subscriptionPlan: e_,
                            currentSubscription: n,
                            planGroup: V,
                        }),
              }),
        eK = !ev && eg && !ed,
        eZ = a.useMemo(() => (eK ? (0, l.jsx)(I.P, { planSkuId: e_.skuId }) : null), [eK, e_.skuId]);
    return X
        ? (0, l.jsx)(eC, {
              disabled: eI,
              showFractionalPremiumBanner: ef,
              fractionalPremiumInfo: eT,
              isPremiumGroupPurchase: ed,
              paymentRestrictionBannerType: eG,
              invoiceError: ee,
              unifiedPlainNoticeText: eb,
              invoicePreview: eh,
              invoicePreviewComponent: ew,
              shouldShowPlanSelectAndPromoBanner: eK,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  ek.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: e_,
              planId: G,
              priceOptions: s,
              premiumPlanOptions: eM,
              unifiedSubscriptionDetailsNode: ej,
              isInvoiceBilledImmediately: eU,
              paymentSelectContent: eW,
              currencySelectComponent: (0, l.jsx)(P.qX, { ...eF }),
              legalContent: eH,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(x.k, { location: "PremiumSwitchPlanReview", paymentSourceId: ep }),
                  (0, l.jsxs)("div", {
                      className: Q.Du,
                      children: [
                          (0, l.jsx)(w.je, { paymentRestrictionBannerType: eG }),
                          eK &&
                              (0, l.jsxs)("div", {
                                  children: [
                                      eZ,
                                      (0, l.jsx)(U.$p, {
                                          disabled: eI,
                                          planOptions: eM,
                                          selectedPlanId: G,
                                          planGroup: V,
                                          showTotal: !1,
                                          priceOptions: eS,
                                          handleClose: J,
                                      }),
                                      (0, l.jsx)(O.pK, {}),
                                  ],
                              }),
                          ed &&
                              (0, l.jsx)("div", {
                                  className: Q.Ni,
                                  children: (0, l.jsx)(d.w, {
                                      type: "info",
                                      children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, g.Nn)() }),
                                  }),
                              }),
                          (0, l.jsx)(m.D, { label: t, children: ew }),
                          (0, l.jsx)("div", { className: Q.LC, children: eW }),
                          (0, l.jsx)(h.f, { currencies: H, className: Q.p2, children: (0, l.jsx)(h.A, { ...eF }) }),
                          eH,
                      ],
                  }),
              ],
          });
}
