n.d(t, { A: () => eC });
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
    E = n(666646),
    y = n(93159),
    P = n(94420),
    f = n(937008),
    S = n(156312),
    T = n(566980),
    x = n(800471),
    N = n(71867),
    g = n(222707),
    I = n(340034),
    v = n(216641),
    b = n(615405),
    M = n(97352),
    L = n(79387),
    R = n(927578),
    j = n(615396),
    O = n(735164),
    D = n(778307),
    w = n(218075),
    U = n(337092),
    k = n(299301),
    Y = n(340287),
    F = n(289873),
    G = n(793574),
    B = n(688810),
    W = n(848584),
    H = n(888751),
    V = n(543767),
    K = n(787455),
    Z = n(692440),
    q = n(788868),
    z = n(652215),
    $ = n(985018),
    X = n(327105),
    J = n(207715),
    Q = n(814304);
function ee(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : Y.createPortal(t, n);
}
let et = (e, t) => (null == e || t ? null : (0, l.jsx)(d.w, { type: "critical", children: e.message })),
    en = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, l.jsx)("div", { className: J.l, children: (0, l.jsx)(F.y, { type: F.y.Type.PULSING_ELLIPSIS }) })
            : (0, l.jsx)(F.y, {});
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
                analyticsLocation: G.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [s, o] = (0, V.Kq)({ ...r, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, V.Kq)({ ...r, renewal: !0 });
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
        [o, u] = (0, V.C8)({ subscriptionId: t.id, preventFetch: a });
    (0, E.OQ)({ checkoutInvoicePreview: o, checkoutInvoiceError: u, renewalInvoicePreview: o, renewalInvoiceError: u });
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
            : (0, l.jsxs)(O.Yx, { className: J.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: r });
}
function es(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: i,
            priceOptions: s,
            fractionalPremiumInfo: o,
            preventFetch: u,
            unifiedSubscriptionDetailsNode: c,
            setUnifiedPlainNoticeText: d,
            setOverrideRenewalDate: p,
            shouldUseUnifiedCheckoutUI: m,
        } = e,
        h = (0, P.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: A, premiumBrandRefreshBackgroundClassName: C } = (0, S.P5)(),
        { isGift: _ } = (0, f.Pv)(),
        { analyticsLocations: y } = (0, B.Ay)(),
        T = (0, R.Pg)(t, n.id, 1, new Set(i)),
        {
            proratedInvoicePreview: N,
            proratedInvoiceError: g,
            renewalInvoicePreview: v,
            renewalInvoiceError: b,
        } = ei({ premiumSubscription: t, newItems: T, priceOptions: s, preventFetch: u, analyticsLocations: y }),
        { primaryInvoiceError: M } = (0, E.OQ)({
            checkoutInvoicePreview: N,
            checkoutInvoiceError: g,
            renewalInvoicePreview: v,
            renewalInvoiceError: b,
        }),
        { planSwitchNoticeCopy: L, overrideRenewalDate: j } = a.useMemo(() => {
            let e;
            return (null !== o &&
                null !== N &&
                (e = (0, R._e)(N.subscriptionPeriodEnd, o.unactivatedUnits, o.currentEntitlementEndsAt)),
            null != N && null != v)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, Z.DK)({
                          proratedInvoice: N,
                          renewalInvoice: v,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [N, v, o]);
    if (
        (ea(p, { shouldUseUnifiedCheckoutUI: m, overrideRenewalDate: j }),
        el(d, { shouldUseUnifiedCheckoutUI: m, noticeCopy: L }),
        null != M)
    )
        return et(M, m);
    let D = (0, x.vT)({ isTrial: !1, isGift: _, selectedSkuId: h, startedPaymentFlowWithPaymentSources: A.current }),
        w = (0, x.UB)(D, N, n);
    if (null == N || null == v || w) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: m });
    let U = (0, R.J$)(s.paymentSourceId),
        Y = (0, l.jsx)(Z.m0, {
            premiumSubscription: t,
            proratedInvoice: N,
            renewalInvoice: v,
            overrideRenewalDate: j,
            isPrepaidPaymentSource: U,
            fractionalPremiumInfo: o,
            isUpdate: !0,
            shouldUseUnifiedCheckoutUI: m,
        });
    return m
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(I.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: k.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: N,
                          renewalInvoicePreview: v,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: U,
                      subscriptionTrial: null,
                  }),
                  (0, l.jsx)(ee, { containerNode: c.current, children: Y }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(Z.wP, { proratedInvoice: N, renewalInvoice: v, overrideRenewalDate: j }),
                  (0, l.jsxs)(O.Yx, {
                      className: r()(Q.SU, C),
                      children: [
                          (0, l.jsx)(O.Xd, { children: $.intl.string($.t["2eh+Co"]) }),
                          (0, l.jsx)(Z.mT, { invoice: N, newPlan: n, isPrepaidPaymentSource: U }),
                          Y,
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
            planGroup: s,
            fractionalPremiumInfo: o,
            priceOptions: u,
            preventFetch: c,
            shouldUseUnifiedCheckoutUI: d,
            setUnifiedPlainNoticeText: p,
            setOverrideRenewalDate: m,
            unifiedSubscriptionDetailsNode: h,
        } = e,
        { premiumBrandRefreshBackgroundClassName: A } = (0, S.P5)(),
        { analyticsLocations: C } = (0, B.Ay)(),
        [_, y] = (0, V.Kq)({
            subscriptionId: n.id,
            items: (0, R.Pg)(n, i.id, 1, new Set(s)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: C,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    (0, E.OQ)({ checkoutInvoicePreview: _, checkoutInvoiceError: y, renewalInvoicePreview: _, renewalInvoiceError: y });
    let { renewalDate: P, planSwitchNoticeCopy: f } = a.useMemo(() => {
        if (null == _) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = _.subscriptionPeriodStart;
        return (
            o.fractionalState === q.xc.FP_SUB_PAUSED && (e = o.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: $.intl.format($.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [_, o.fractionalState, o.endsAt]);
    if (
        (ea(m, { shouldUseUnifiedCheckoutUI: d, overrideRenewalDate: P }),
        el(p, { shouldUseUnifiedCheckoutUI: d, noticeCopy: f }),
        null != y)
    )
        return et(y, d);
    if (null == _) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: d });
    t = n.type === z.rzx.PREMIUM ? (0, R.Mn)(i.id) : i.name;
    let T = (0, R.J$)(u.paymentSourceId),
        x = (0, l.jsx)("div", { className: J.o, children: f }),
        N = (0, l.jsx)(Z.m0, {
            premiumSubscription: n,
            renewalInvoice: _,
            isUpdate: !0,
            isPrepaidPaymentSource: T,
            fractionalPremiumInfo: o,
            overrideRenewalDate: P,
            shouldUseUnifiedCheckoutUI: d,
            unifiedCheckoutDefaultExpanded: !0,
        });
    if (d) {
        let { lineItems: e } = (0, H.Ig)(_, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: T,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(W.Vm, { label: $.intl.string(X.default.eoXh7B), lineItems: e, currency: _.currency }),
                (0, l.jsx)(ee, { containerNode: h.current, children: N }),
            ],
        });
    }
    return (0, l.jsxs)("div", {
        className: Q.G3,
        children: [
            x,
            (0, l.jsxs)(O.Yx, {
                className: r()(Q.SU, A),
                children: [
                    (0, l.jsx)(O.Xd, { children: $.intl.string($.t.iqhIp4) }),
                    (0, l.jsx)(O.oR, { label: t, value: (0, R.jh)(i, u, !0) }),
                    (0, l.jsx)(K.A, { invoice: _ }),
                    (0, l.jsx)(O.pK, {}),
                    N,
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
            proratedInvoiceError: _,
            renewalInvoicePreview: y,
            renewalInvoiceError: P,
        } = ei({ premiumSubscription: n, newItems: m, priceOptions: r, preventFetch: s, analyticsLocations: p }),
        { primaryInvoiceError: f } = (0, E.OQ)({
            checkoutInvoicePreview: h,
            checkoutInvoiceError: _,
            renewalInvoicePreview: y,
            renewalInvoiceError: P,
        }),
        S = (0, v.g)(c, r.paymentSourceId);
    return null != f ||
        (null != y && (t = { amount: y.subtotal, currency: y.currency, tax: y.tax, taxInclusive: y.taxInclusive }),
        null == t)
        ? null
        : (0, l.jsx)(C.A, {
              onChange: d,
              finePrint: (0, l.jsx)(A.A, {
                  subscriptionPlan: a,
                  paymentSourceType: S,
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
            fractionalPremiumInfo: s,
            shouldUseUnifiedCheckoutUI: o,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: c,
        } = e,
        { premiumBrandRefreshBackgroundClassName: d } = (0, S.P5)(),
        { analyticsLocations: p } = (0, B.Ay)(),
        [m, h] = (0, V.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: i,
            analyticsLocations: p,
            analyticsLocation: G.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [A, C] = (0, V.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: i,
            analyticsLocations: p,
            analyticsLocation: G.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        }),
        { primaryInvoiceError: _ } = (0, E.OQ)({
            checkoutInvoicePreview: m,
            checkoutInvoiceError: h,
            renewalInvoicePreview: A,
            renewalInvoiceError: C,
        }),
        y = a.useMemo(() => $.intl.string($.t.spIYou), []);
    if ((el(c, { shouldUseUnifiedCheckoutUI: o, noticeCopy: y }), null != _)) return et(_, o);
    if (null == m || null == A) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: o });
    let P = (0, R.J$)(n.paymentSourceId),
        f = (0, l.jsx)(Z.m0, {
            premiumSubscription: t,
            renewalInvoice: A,
            isUpdate: !0,
            isPrepaidPaymentSource: P,
            fractionalPremiumInfo: s,
            shouldUseUnifiedCheckoutUI: o,
        }),
        T = (0, l.jsx)("div", { className: J.o, children: y }),
        x = (0, l.jsx)(Z._J, { invoice: m, isPrepaidPaymentSource: P, shouldUseUnifiedCheckoutUI: o });
    return o
        ? (0, l.jsxs)(l.Fragment, { children: [x, (0, l.jsx)(ee, { containerNode: u.current, children: f })] })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  T,
                  (0, l.jsxs)(O.Yx, {
                      className: r()(Q.SU, d),
                      children: [(0, l.jsx)(O.Xd, { children: $.intl.string($.t["2eh+Co"]) }), x, f],
                  }),
              ],
          });
}
n(321073);
var ed = n(69882),
    ep = n(134638);
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
            planId: A,
            priceOptions: C,
            premiumPlanOptions: _,
            unifiedSubscriptionDetailsNode: E,
            isInvoiceBilledImmediately: y,
            paymentSelectContent: P,
            currencySelectComponent: f,
            legalContent: S,
        } = e,
        T = a.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(I.l$, { fractionalPremiumInfo: i }),
                        key: "fractional-premium-notice",
                    }),
                r && e.push({ type: "info", message: (0, g.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, w.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [r, s, o, n, i]),
        x = a.useMemo(() => (0, R.l6)(C, c?.checkoutContext?.available_plans), [C, c]),
        v = a.useMemo(() => (p ? (0, l.jsx)(N.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        b = (0, R.J$)(C.paymentSourceId),
        M = null,
        L = null;
    p
        ? (L = (0, l.jsx)(I.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: _,
              selectedPlanId: A,
              showPlanStatusSubText: !0,
              priceOptions: x,
          }))
        : null != c &&
          (M = (0, l.jsx)(ep._, {
              type: k.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: b,
              isPremiumGroupPurchase: r,
              bottomSubText: u,
          }));
    let j = m ? d : (0, l.jsx)("div", { ref: E }),
        O = m ? null : d;
    return (0, l.jsx)(ed.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: T,
        paymentSelectContent: (0, l.jsxs)(l.Fragment, { children: [P, f] }),
        subscriptionDetailsContent: j,
        purchaseItemContent: M,
        planSelectContent: L,
        invoiceSummaryContent: O,
        legalContent: S,
        invoiceTotalDueLabel: y ? $.intl.string(X.default.R0cZsM) : $.intl.string(X.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, Z.U5)(c) : void 0,
        promotionalNoticeContent: v,
    });
};
var eh = n(88001),
    eA = n(466919);
function eC(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: i,
            priceOptions: s,
            onPaymentSourceAdd: Y,
            planId: F,
            setHasAcceptedTerms: G,
            legalTermsNodeRef: B,
            hasLegalTermsFlash: W,
            planGroup: H,
            currencies: V,
            onCurrencyChange: K,
            hasOpenInvoice: Z,
            purchaseState: q,
            handleClose: X,
            shouldUseUnifiedCheckoutUI: J,
        } = e,
        ee = (0, E.mx)(),
        et = (0, P.t4)((e) => e.selectedSkuId),
        {
            defaultPlanId: en,
            isPremium: el,
            startedPaymentFlowWithPaymentSourcesRef: ea,
            hasPaymentSources: ei,
            enablePremiumBrandRefresh: ed,
            isPremiumGroupPurchase: ep,
            paymentSourceId: eC,
            displayCurrency: e_,
        } = (0, S.P5)(),
        eE = (0, E.sw)(),
        { isGift: ey } = (0, f.Pv)(),
        eP = (0, v.g)(i, eC),
        ef = a.useMemo(() => (0, R.l6)(s, eE?.checkoutContext?.available_plans), [eE, s]),
        eS = (0, c.bG)([M.A], () => M.A.get(F));
    o()(null != eS, "Missing newPlan");
    let { showFractionalPremiumBanner: eT, fractionalPremiumInfo: ex } = (0, g._V)({
            premiumSubscription: n,
            selectedPlanId: F,
            planGroup: H,
            isGift: ey,
        }),
        eN = (0, E.IK)(),
        eg = u.M.EEA_COUNTRIES.has(b.A.ipCountryCodeWithFallback),
        eI = q === T.h.PURCHASING || q === T.h.COMPLETED,
        ev = (0, x.vT)({
            isTrial: !1,
            isGift: ey,
            selectedSkuId: et,
            startedPaymentFlowWithPaymentSources: ea.current,
        }),
        eb = n?.isPausedAllowsResumeButNotUpdates,
        eM = a.useMemo(() => (0, R.Tm)({ skuId: et, isPremium: el, defaultPlanId: en }), [et, en, el]);
    t =
        Z || eb
            ? $.intl.string($.t.nyzoFb)
            : ep
              ? $.intl.formatToPlainString(eA.default["3m9DJK"], { premiumGroupProductName: (0, eh.DP)() })
              : (0, R.ys)(F)
                ? (0, R.ff)(n, eS)
                : $.intl.formatToPlainString($.t["sBpy9/"], { planName: eS.name });
    let eL = a.useRef(null),
        [eR, ej] = a.useState(null),
        [eO, eD] = a.useState(void 0),
        ew = a.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: J,
                unifiedSubscriptionDetailsNode: eL,
                setUnifiedPlainNoticeText: ej,
                setOverrideRenewalDate: eD,
            }),
            [J],
        ),
        {
            content: eU,
            isInvoiceBilledImmediately: ek,
            ...eY
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
                        : (0, j.Ge)(o, r, c)
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
                  { hasOpenInvoice: Z, showResumeSubscriptionView: eb, planId: F },
                  {
                      disabled: eI,
                      premiumSubscription: n,
                      newPlan: eS,
                      planGroup: H,
                      fractionalPremiumInfo: ex,
                      priceOptions: s,
                  },
                  ew,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eF = n?.eligiblePaymentGateways,
        eG = null != eF && eF.length > 0 && (eC === L.B || null === eP) && ei ? w.fU.SELECT_PAYMENT_METHOD : void 0,
        eB = a.useMemo(
            () => ({
                label: $.intl.string($.t["/AAR02"]),
                selectedCurrency: s.currency ?? e_,
                currencies: V,
                onChange: K,
                disabled: eI,
            }),
            [V, K, s, e_, eI],
        ),
        eW = a.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: r()({ [Q.E4]: ed }),
                shouldUseUnifiedCheckoutUI: J,
            }),
            [n?.eligiblePaymentGateways, ed, J],
        ),
        eH = (0, l.jsx)(_.N, {
            label: $.intl.string($.t["mmDvV+"]),
            onPaymentSourceAdd: Y,
            disabled: eI,
            additionalPaymentSourceDropdownProps: eW,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: s.paymentSourceId,
        }),
        eV = null != n && (0, j.Ge)(n, F, H),
        eK = J
            ? null != eE && null != eN
                ? (0, l.jsx)(I.PI, {
                      overrideRenewalDate: eO,
                      planGroup: H,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eS,
                      isGift: ey,
                      paymentSourceType: eP,
                      isInvoiceBilledImmediately: ek,
                      invoiceSummaryTypeWithPreview: {
                          type: k.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: eE,
                          renewalInvoicePreview: eN,
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
                            newPlan: eS,
                            planGroup: H,
                            priceOptions: s,
                            preventFetch: eI,
                            disabled: eI,
                            isEEA: eg,
                            paymentSources: i,
                            setHasAcceptedTerms: G,
                        })
                      : (0, l.jsx)(C.A, {
                            onChange: G,
                            finePrint: (0, l.jsx)(A.A, {
                                subscriptionPlan: eS,
                                paymentSourceType: eP,
                                basePrice: (0, R.y8)(eS.id, !1, ey, ef),
                                currentSubscription: n,
                                planGroup: H,
                            }),
                            forceShow: !0,
                            showPricingLink: eS.currency !== z.Yri.USD,
                            showWithdrawalWaiver: eg,
                            disabled: eI,
                            subscriptionPlan: eS,
                            currentSubscription: n,
                            planGroup: H,
                        }),
              }),
        eZ = !eb && ev && !ep,
        eq = a.useMemo(() => (eZ ? (0, l.jsx)(N.P, { planSkuId: eS.skuId }) : null), [eZ, eS.skuId]);
    return J
        ? (0, l.jsx)(em, {
              disabled: eI,
              showFractionalPremiumBanner: eT,
              fractionalPremiumInfo: ex,
              isPremiumGroupPurchase: ep,
              paymentRestrictionBannerType: eG,
              invoiceError: ee,
              unifiedPlainNoticeText: eR,
              invoicePreview: eE,
              invoicePreviewComponent: eU,
              shouldShowPlanSelectAndPromoBanner: eZ,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eY.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eS,
              planId: F,
              priceOptions: s,
              premiumPlanOptions: eM,
              unifiedSubscriptionDetailsNode: eL,
              isInvoiceBilledImmediately: ek,
              paymentSelectContent: eH,
              currencySelectComponent: (0, l.jsx)(y.qX, { ...eB }),
              legalContent: eK,
          })
        : (0, l.jsxs)("div", {
              className: Q.Du,
              children: [
                  (0, l.jsx)(w.je, { paymentRestrictionBannerType: eG }),
                  eZ &&
                      (0, l.jsxs)("div", {
                          children: [
                              eq,
                              (0, l.jsx)(U.$p, {
                                  disabled: eI,
                                  planOptions: eM,
                                  selectedPlanId: F,
                                  planGroup: H,
                                  showTotal: !1,
                                  priceOptions: ef,
                                  handleClose: X,
                              }),
                              (0, l.jsx)(O.pK, {}),
                          ],
                      }),
                  ep &&
                      (0, l.jsx)("div", {
                          className: Q.Ni,
                          children: (0, l.jsx)(d.w, {
                              type: "info",
                              children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, g.Nn)() }),
                          }),
                      }),
                  (0, l.jsx)(m.D, { label: t, children: eU }),
                  (0, l.jsx)("div", { className: Q.LC, children: eH }),
                  (0, l.jsx)(h.f, { currencies: V, className: Q.p2, children: (0, l.jsx)(h.A, { ...eB }) }),
                  eK,
              ],
          });
}
