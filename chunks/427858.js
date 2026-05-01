n.d(t, { A: () => eA });
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
    h = n(457287),
    C = n(821891),
    A = n(953689),
    E = n(61572),
    y = n(666646),
    P = n(93159),
    S = n(94420),
    _ = n(937008),
    T = n(156312),
    f = n(566980),
    N = n(800471),
    x = n(71867),
    I = n(222707),
    g = n(340034),
    v = n(216641),
    M = n(615405),
    b = n(97352),
    R = n(79387),
    j = n(927578),
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
    H = n(888751),
    V = n(543767),
    K = n(787455),
    Z = n(692440),
    q = n(788868),
    z = n(652215),
    $ = n(985018),
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
            [s, o] = (0, V.Kq)({ ...r, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, V.Kq)({ ...r, renewal: !0 });
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
        [o, u] = (0, V.C8)({ subscriptionId: t.id, preventFetch: i });
    (0, y.OQ)({ checkoutInvoicePreview: o, checkoutInvoiceError: u, renewalInvoicePreview: o, renewalInvoiceError: u });
    let c = (0, j.J$)(n.paymentSourceId);
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
        { startedPaymentFlowWithPaymentSourcesRef: h } = (0, T.P5)(),
        { isGift: C } = (0, _.Pv)(),
        { analyticsLocations: A } = (0, B.Ay)(),
        E = (0, j.Pg)(t, n.id, 1, new Set(a)),
        {
            proratedInvoicePreview: P,
            proratedInvoiceError: f,
            renewalInvoicePreview: x,
            renewalInvoiceError: I,
        } = ea({ premiumSubscription: t, newItems: E, priceOptions: r, preventFetch: o, analyticsLocations: A }),
        { primaryInvoiceError: v } = (0, y.OQ)({
            checkoutInvoicePreview: P,
            checkoutInvoiceError: f,
            renewalInvoicePreview: x,
            renewalInvoiceError: I,
        }),
        { planSwitchNoticeCopy: M, overrideRenewalDate: b } = i.useMemo(() => {
            let e;
            return (null !== s &&
                null !== P &&
                (e = (0, j._e)(P.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
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
        (ei(d, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: b }),
        el(c, { shouldUseUnifiedCheckoutUI: p, noticeCopy: M }),
        null != v)
    )
        return et(v, p);
    let R = (0, N.vT)({ isTrial: !1, isGift: C, selectedSkuId: m, startedPaymentFlowWithPaymentSources: h.current }),
        L = (0, N.UB)(R, P, n);
    if (null == P || null == x || L) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: p });
    let D = (0, j.J$)(r.paymentSourceId),
        w = (0, l.jsx)(Z.m0, {
            premiumSubscription: t,
            proratedInvoice: P,
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
                  (0, l.jsx)(Z.wP, { proratedInvoice: P, renewalInvoice: x, overrideRenewalDate: b }),
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
        [C, A] = (0, V.Kq)({
            subscriptionId: n.id,
            items: (0, j.Pg)(n, a.id, 1, new Set(r)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            preventFetch: u,
            analyticsLocations: h,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    (0, y.OQ)({ checkoutInvoicePreview: C, checkoutInvoiceError: A, renewalInvoicePreview: C, renewalInvoiceError: A });
    let { renewalDate: E, planSwitchNoticeCopy: P } = i.useMemo(() => {
        if (null == C) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = C.subscriptionPeriodStart;
        return (
            s.fractionalState === q.xc.FP_SUB_PAUSED && (e = s.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: $.intl.format($.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [C, s.fractionalState, s.endsAt]);
    if (
        (ei(p, { shouldUseUnifiedCheckoutUI: c, overrideRenewalDate: E }),
        el(d, { shouldUseUnifiedCheckoutUI: c, noticeCopy: P }),
        null != A)
    )
        return et(A, c);
    if (null == C) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: c });
    t = n.type === z.rzx.PREMIUM ? (0, j.Mn)(a.id) : a.name;
    let S = (0, j.J$)(o.paymentSourceId),
        _ = (0, l.jsx)("div", { className: X.o, children: P }),
        T = (0, l.jsx)(Z.m0, {
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
        let { lineItems: e } = (0, H.Ig)(C, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: S,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(W.Vm, { label: $.intl.string(J.default.eoXh7B), lineItems: e, currency: C.currency }),
                (0, l.jsx)(ee, { containerNode: m.current, children: T }),
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
                    (0, l.jsx)(O.oR, { label: t, value: (0, j.jh)(a, o, !0) }),
                    (0, l.jsx)(K.A, { invoice: C }),
                    (0, l.jsx)(O.pK, {}),
                    T,
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
        m = (0, j.Pg)(n, i.id, 1, new Set(a)),
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
                  subscriptionPlan: i,
                  paymentSourceType: T,
                  basePrice: t,
                  proratedAmount: null != h ? h.total : void 0,
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
        [d, p] = (0, V.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: F.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [m, h] = (0, V.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: F.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        }),
        { primaryInvoiceError: C } = (0, y.OQ)({
            checkoutInvoicePreview: d,
            checkoutInvoiceError: p,
            renewalInvoicePreview: m,
            renewalInvoiceError: h,
        }),
        A = i.useMemo(() => $.intl.string($.t.spIYou), []);
    if ((el(u, { shouldUseUnifiedCheckoutUI: s, noticeCopy: A }), null != C)) return et(C, s);
    if (null == d || null == m) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: s });
    let E = (0, j.J$)(n.paymentSourceId),
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
var ed = n(69882),
    ep = n(134638);
let em = (e) => {
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
            premiumPlanOptions: E,
            unifiedSubscriptionDetailsNode: y,
            isInvoiceBilledImmediately: P,
            paymentSelectContent: S,
            currencySelectComponent: _,
            legalContent: T,
        } = e,
        f = i.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(g.l$, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                r && e.push({ type: "info", message: (0, I.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, w.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [r, s, o, n, a]),
        N = i.useMemo(() => (0, j.l6)(A, c?.checkoutContext?.available_plans), [A, c]),
        v = i.useMemo(() => (p ? (0, l.jsx)(x.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        M = (0, j.J$)(A.paymentSourceId),
        b = null,
        R = null;
    p
        ? (R = (0, l.jsx)(g.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: E,
              selectedPlanId: C,
              showPlanStatusSubText: !0,
              priceOptions: N,
          }))
        : null != c &&
          (b = (0, l.jsx)(ep._, {
              type: k.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: M,
              isPremiumGroupPurchase: r,
              bottomSubText: u,
          }));
    let L = m ? d : (0, l.jsx)("div", { ref: y }),
        O = m ? null : d;
    return (0, l.jsx)(ed.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: f,
        paymentSelectContent: (0, l.jsxs)(l.Fragment, { children: [S, _] }),
        subscriptionDetailsContent: L,
        purchaseItemContent: b,
        planSelectContent: R,
        invoiceSummaryContent: O,
        legalContent: T,
        invoiceTotalDueLabel: P ? $.intl.string(J.default.R0cZsM) : $.intl.string(J.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, Z.U5)(c) : void 0,
        promotionalNoticeContent: v,
    });
};
var eh = n(88001),
    eC = n(466919);
function eA(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: a,
            priceOptions: s,
            handlePaymentSourceAdd: Y,
            planId: G,
            setHasAcceptedTerms: F,
            legalTermsNodeRef: B,
            hasLegalTermsFlash: W,
            planGroup: H,
            currencies: V,
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
            startedPaymentFlowWithPaymentSourcesRef: ei,
            hasPaymentSources: ea,
            enablePremiumBrandRefresh: ed,
            isPremiumGroupPurchase: ep,
            paymentSourceId: eA,
            displayCurrency: eE,
        } = (0, T.P5)(),
        ey = (0, y.sw)(),
        { isGift: eP } = (0, _.Pv)(),
        eS = (0, v.g)(a, eA),
        e_ = i.useMemo(() => (0, j.l6)(s, ey?.checkoutContext?.available_plans), [ey, s]),
        eT = (0, c.bG)([b.A], () => b.A.get(G));
    o()(null != eT, "Missing newPlan");
    let { showFractionalPremiumBanner: ef, fractionalPremiumInfo: eN } = (0, I._V)({
            premiumSubscription: n,
            selectedPlanId: G,
            planGroup: H,
            isGift: eP,
        }),
        ex = (0, y.IK)(),
        eI = u.M.EEA_COUNTRIES.has(M.A.ipCountryCodeWithFallback),
        eg = q === f.h.PURCHASING || q === f.h.COMPLETED,
        ev = (0, N.vT)({
            isTrial: !1,
            isGift: eP,
            selectedSkuId: et,
            startedPaymentFlowWithPaymentSources: ei.current,
        }),
        eM = n?.isPausedAllowsResumeButNotUpdates,
        eb = i.useMemo(() => (0, j.Tm)({ skuId: et, isPremium: el, defaultPlanId: en }), [et, en, el]);
    t =
        Z || eM
            ? $.intl.string($.t.nyzoFb)
            : ep
              ? $.intl.formatToPlainString(eC.default["3m9DJK"], { premiumGroupProductName: (0, eh.DP)() })
              : (0, j.ys)(G)
                ? (0, j.ff)(n, eT)
                : $.intl.formatToPlainString($.t["sBpy9/"], { planName: eT.name });
    let eR = i.useRef(null),
        [ej, eL] = i.useState(null),
        [eO, eD] = i.useState(void 0),
        ew = i.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: X,
                unifiedSubscriptionDetailsNode: eR,
                setUnifiedPlainNoticeText: eL,
                setOverrideRenewalDate: eD,
            }),
            [X],
        ),
        {
            content: eU,
            isInvoiceBilledImmediately: ek,
            ...eY
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
                  { hasOpenInvoice: Z, showResumeSubscriptionView: eM, planId: G },
                  {
                      disabled: eg,
                      premiumSubscription: n,
                      newPlan: eT,
                      planGroup: H,
                      fractionalPremiumInfo: eN,
                      priceOptions: s,
                  },
                  ew,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eG = n?.eligiblePaymentGateways,
        eF = null != eG && eG.length > 0 && (eA === R.B || null === eS) && ea ? w.fU.SELECT_PAYMENT_METHOD : void 0,
        eB = i.useMemo(
            () => ({
                label: $.intl.string($.t["/AAR02"]),
                selectedCurrency: s.currency ?? eE,
                currencies: V,
                onChange: K,
                disabled: eg,
            }),
            [V, K, s, eE, eg],
        ),
        eW = i.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: r()({ [Q.E4]: ed }),
                shouldUseUnifiedCheckoutUI: X,
            }),
            [n?.eligiblePaymentGateways, ed, X],
        ),
        eH = (0, l.jsx)(E.N, {
            label: $.intl.string($.t["mmDvV+"]),
            onPaymentSourceAdd: Y,
            disabled: eg,
            additionalPaymentSourceDropdownProps: eW,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: s.paymentSourceId,
        }),
        eV = null != n && (0, L.Ge)(n, G, H),
        eK = X
            ? null != ey && null != ex
                ? (0, l.jsx)(g.PI, {
                      overrideRenewalDate: eO,
                      planGroup: H,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eT,
                      isGift: eP,
                      paymentSourceType: eS,
                      isInvoiceBilledImmediately: ek,
                      invoiceSummaryTypeWithPreview: {
                          type: k.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: ey,
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
                            newPlan: eT,
                            planGroup: H,
                            priceOptions: s,
                            preventFetch: eg,
                            disabled: eg,
                            isEEA: eI,
                            paymentSources: a,
                            setHasAcceptedTerms: F,
                        })
                      : (0, l.jsx)(A.A, {
                            onChange: F,
                            finePrint: (0, l.jsx)(C.A, {
                                subscriptionPlan: eT,
                                paymentSourceType: eS,
                                basePrice: (0, j.y8)(eT.id, !1, eP, e_),
                                currentSubscription: n,
                                planGroup: H,
                            }),
                            forceShow: !0,
                            showPricingLink: eT.currency !== z.Yri.USD,
                            showWithdrawalWaiver: eI,
                            disabled: eg,
                            subscriptionPlan: eT,
                            currentSubscription: n,
                            planGroup: H,
                        }),
              }),
        eZ = !eM && ev && !ep,
        eq = i.useMemo(() => (eZ ? (0, l.jsx)(x.P, { planSkuId: eT.skuId }) : null), [eZ, eT.skuId]);
    return X
        ? (0, l.jsx)(em, {
              disabled: eg,
              showFractionalPremiumBanner: ef,
              fractionalPremiumInfo: eN,
              isPremiumGroupPurchase: ep,
              paymentRestrictionBannerType: eF,
              invoiceError: ee,
              unifiedPlainNoticeText: ej,
              invoicePreview: ey,
              invoicePreviewComponent: eU,
              shouldShowPlanSelectAndPromoBanner: eZ,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eY.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eT,
              planId: G,
              priceOptions: s,
              premiumPlanOptions: eb,
              unifiedSubscriptionDetailsNode: eR,
              isInvoiceBilledImmediately: ek,
              paymentSelectContent: eH,
              currencySelectComponent: (0, l.jsx)(P.qX, { ...eB }),
              legalContent: eK,
          })
        : (0, l.jsxs)("div", {
              className: Q.Du,
              children: [
                  (0, l.jsx)(w.je, { paymentRestrictionBannerType: eF }),
                  eZ &&
                      (0, l.jsxs)("div", {
                          children: [
                              eq,
                              (0, l.jsx)(U.$p, {
                                  disabled: eg,
                                  planOptions: eb,
                                  selectedPlanId: G,
                                  planGroup: H,
                                  showTotal: !1,
                                  priceOptions: e_,
                                  handleClose: J,
                              }),
                              (0, l.jsx)(O.pK, {}),
                          ],
                      }),
                  ep &&
                      (0, l.jsx)("div", {
                          className: Q.Ni,
                          children: (0, l.jsx)(d.w, {
                              type: "info",
                              children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, I.Nn)() }),
                          }),
                      }),
                  (0, l.jsx)(m.D, { label: t, children: eU }),
                  (0, l.jsx)("div", { className: Q.LC, children: eH }),
                  (0, l.jsx)(h.f, { currencies: V, className: Q.p2, children: (0, l.jsx)(h.A, { ...eB }) }),
                  eK,
              ],
          });
}
