n.d(t, { A: () => eC });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    r = n(284009),
    o = n.n(r),
    u = n(997101),
    c = n(17928),
    d = n(683071),
    p = n(834730),
    m = n(452027),
    h = n(457287),
    A = n(821891),
    C = n(953689),
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
            s = {
                subscriptionId: t.id,
                items: n,
                paymentSourceId: l.paymentSourceId,
                currency: l.currency,
                preventFetch: a,
                analyticsLocations: i,
                analyticsLocation: F.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [r, o] = (0, V.Kq)({ ...s, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, V.Kq)({ ...s, renewal: !0 });
        return { proratedInvoicePreview: r, proratedInvoiceError: o, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function es(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: a,
            fractionalPremiumInfo: i,
            shouldUseUnifiedCheckoutUI: s,
            unifiedSubscriptionDetailsNode: r,
        } = e,
        [o, u] = (0, V.C8)({ subscriptionId: t.id, preventFetch: a });
    (0, y.OQ)({ checkoutInvoicePreview: o, checkoutInvoiceError: u, renewalInvoicePreview: o, renewalInvoiceError: u });
    let c = (0, j.J$)(n.paymentSourceId);
    if (null != o) {
        let e = (0, l.jsx)(Z.m0, {
                premiumSubscription: t,
                renewalInvoice: o,
                isUpdate: !0,
                isPrepaidPaymentSource: c,
                fractionalPremiumInfo: i,
                shouldUseUnifiedCheckoutUI: s,
            }),
            n = (0, l.jsx)(Z._J, { invoice: o, isPrepaidPaymentSource: c, shouldUseUnifiedCheckoutUI: s });
        return s
            ? (0, l.jsxs)(l.Fragment, { children: [n, (0, l.jsx)(ee, { containerNode: r.current, children: e })] })
            : (0, l.jsxs)(O.Yx, { className: X.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: s });
}
function er(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: i,
            priceOptions: s,
            fractionalPremiumInfo: r,
            preventFetch: o,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: c,
            setOverrideRenewalDate: d,
            shouldUseUnifiedCheckoutUI: p,
        } = e,
        m = (0, S.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: h } = (0, T.P5)(),
        { isGift: A } = (0, _.Pv)(),
        { analyticsLocations: C } = (0, B.Ay)(),
        E = (0, j.Pg)(t, n.id, 1, new Set(i)),
        {
            proratedInvoicePreview: P,
            proratedInvoiceError: f,
            renewalInvoicePreview: x,
            renewalInvoiceError: I,
        } = ei({ premiumSubscription: t, newItems: E, priceOptions: s, preventFetch: o, analyticsLocations: C }),
        { primaryInvoiceError: v } = (0, y.OQ)({
            checkoutInvoicePreview: P,
            checkoutInvoiceError: f,
            renewalInvoicePreview: x,
            renewalInvoiceError: I,
        }),
        { planSwitchNoticeCopy: M, overrideRenewalDate: b } = a.useMemo(() => {
            let e;
            return (null !== r &&
                null !== P &&
                (e = (0, j._e)(P.subscriptionPeriodEnd, r.unactivatedUnits, r.currentEntitlementEndsAt)),
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
        }, [P, x, r]);
    if (
        (ea(d, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: b }),
        el(c, { shouldUseUnifiedCheckoutUI: p, noticeCopy: M }),
        null != v)
    )
        return et(v, p);
    let R = (0, N.vT)({ isTrial: !1, isGift: A, selectedSkuId: m, startedPaymentFlowWithPaymentSources: h.current }),
        L = (0, N.UB)(R, P, n);
    if (null == P || null == x || L) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: p });
    let D = (0, j.J$)(s.paymentSourceId),
        w = (0, l.jsx)(Z.m0, {
            premiumSubscription: t,
            proratedInvoice: P,
            renewalInvoice: x,
            overrideRenewalDate: b,
            isPrepaidPaymentSource: D,
            fractionalPremiumInfo: r,
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
            newPlan: i,
            planGroup: s,
            fractionalPremiumInfo: r,
            priceOptions: o,
            preventFetch: u,
            shouldUseUnifiedCheckoutUI: c,
            setUnifiedPlainNoticeText: d,
            setOverrideRenewalDate: p,
            unifiedSubscriptionDetailsNode: m,
        } = e,
        { analyticsLocations: h } = (0, B.Ay)(),
        [A, C] = (0, V.Kq)({
            subscriptionId: n.id,
            items: (0, j.Pg)(n, i.id, 1, new Set(s)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            preventFetch: u,
            analyticsLocations: h,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    (0, y.OQ)({ checkoutInvoicePreview: A, checkoutInvoiceError: C, renewalInvoicePreview: A, renewalInvoiceError: C });
    let { renewalDate: E, planSwitchNoticeCopy: P } = a.useMemo(() => {
        if (null == A) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = A.subscriptionPeriodStart;
        return (
            r.fractionalState === q.xc.FP_SUB_PAUSED && (e = r.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: $.intl.format($.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [A, r.fractionalState, r.endsAt]);
    if (
        (ea(p, { shouldUseUnifiedCheckoutUI: c, overrideRenewalDate: E }),
        el(d, { shouldUseUnifiedCheckoutUI: c, noticeCopy: P }),
        null != C)
    )
        return et(C, c);
    if (null == A) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: c });
    t = n.type === z.rzx.PREMIUM ? (0, j.Mn)(i.id) : i.name;
    let S = (0, j.J$)(o.paymentSourceId),
        _ = (0, l.jsx)("div", { className: X.o, children: P }),
        T = (0, l.jsx)(Z.m0, {
            premiumSubscription: n,
            renewalInvoice: A,
            isUpdate: !0,
            isPrepaidPaymentSource: S,
            fractionalPremiumInfo: r,
            overrideRenewalDate: E,
            shouldUseUnifiedCheckoutUI: c,
            unifiedCheckoutDefaultExpanded: !0,
        });
    if (c) {
        let { lineItems: e } = (0, H.Ig)(A, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: S,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(W.Vm, { label: $.intl.string(J.default.eoXh7B), lineItems: e, currency: A.currency }),
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
                    (0, l.jsx)(O.oR, { label: t, value: (0, j.jh)(i, o, !0) }),
                    (0, l.jsx)(K.A, { invoice: A }),
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
            newPlan: a,
            planGroup: i,
            priceOptions: s,
            preventFetch: r,
            disabled: o,
            isEEA: u,
            paymentSources: c,
            setHasAcceptedTerms: d,
        } = e,
        { analyticsLocations: p } = (0, B.Ay)(),
        m = (0, j.Pg)(n, a.id, 1, new Set(i)),
        {
            proratedInvoicePreview: h,
            proratedInvoiceError: E,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        } = ei({ premiumSubscription: n, newItems: m, priceOptions: s, preventFetch: r, analyticsLocations: p }),
        { primaryInvoiceError: _ } = (0, y.OQ)({
            checkoutInvoicePreview: h,
            checkoutInvoiceError: E,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        }),
        T = (0, v.g)(c, s.paymentSourceId);
    return null != _ ||
        (null != P && (t = { amount: P.subtotal, currency: P.currency, tax: P.tax, taxInclusive: P.taxInclusive }),
        null == t)
        ? null
        : (0, l.jsx)(C.A, {
              onChange: d,
              finePrint: (0, l.jsx)(A.A, {
                  subscriptionPlan: a,
                  paymentSourceType: T,
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
            shouldUseUnifiedCheckoutUI: r,
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
            preventFetch: i,
            analyticsLocations: c,
            analyticsLocation: F.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [m, h] = (0, V.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: i,
            analyticsLocations: c,
            analyticsLocation: F.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        }),
        { primaryInvoiceError: A } = (0, y.OQ)({
            checkoutInvoicePreview: d,
            checkoutInvoiceError: p,
            renewalInvoicePreview: m,
            renewalInvoiceError: h,
        }),
        C = a.useMemo(() => $.intl.string($.t.spIYou), []);
    if ((el(u, { shouldUseUnifiedCheckoutUI: r, noticeCopy: C }), null != A)) return et(A, r);
    if (null == d || null == m) return (0, l.jsx)(en, { shouldUseUnifiedCheckoutUI: r });
    let E = (0, j.J$)(n.paymentSourceId),
        P = (0, l.jsx)(Z.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: E,
            fractionalPremiumInfo: s,
            shouldUseUnifiedCheckoutUI: r,
        }),
        S = (0, l.jsx)("div", { className: X.o, children: C }),
        _ = (0, l.jsx)(Z._J, { invoice: d, isPrepaidPaymentSource: E, shouldUseUnifiedCheckoutUI: r });
    return r
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
            fractionalPremiumInfo: i,
            isPremiumGroupPurchase: s,
            paymentRestrictionBannerType: r,
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
            paymentSelectContent: S,
            currencySelectComponent: _,
            legalContent: T,
        } = e,
        f = a.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(g.l$, { fractionalPremiumInfo: i }),
                        key: "fractional-premium-notice",
                    }),
                s && e.push({ type: "info", message: (0, I.Nn)(), key: "premium-group-purchase-notice" }),
                null != r &&
                    e.push({ type: "warning", message: (0, w.i)(r), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [s, r, o, n, i]),
        N = a.useMemo(() => (0, j.l6)(C, c?.checkoutContext?.available_plans), [C, c]),
        v = a.useMemo(() => (p ? (0, l.jsx)(x.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        M = (0, j.J$)(C.paymentSourceId),
        b = null,
        R = null;
    p
        ? (R = (0, l.jsx)(g.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: E,
              selectedPlanId: A,
              showPlanStatusSubText: !0,
              priceOptions: N,
          }))
        : null != c &&
          (b = (0, l.jsx)(ep._, {
              type: k.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: M,
              isPremiumGroupPurchase: s,
              bottomSubText: u,
          }));
    let L = m ? d : (0, l.jsx)("div", { ref: y }),
        O = m ? null : d;
    return (0, l.jsx)(ed.T, {
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
    eA = n(466919);
function eC(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: i,
            priceOptions: r,
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
            startedPaymentFlowWithPaymentSourcesRef: ea,
            hasPaymentSources: ei,
            enablePremiumBrandRefresh: ed,
            isPremiumGroupPurchase: ep,
            paymentSourceId: eC,
            displayCurrency: eE,
        } = (0, T.P5)(),
        ey = (0, y.sw)(),
        { isGift: eP } = (0, _.Pv)(),
        eS = (0, v.g)(i, eC),
        e_ = a.useMemo(() => (0, j.l6)(r, ey?.checkoutContext?.available_plans), [ey, r]),
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
            startedPaymentFlowWithPaymentSources: ea.current,
        }),
        eM = n?.isPausedAllowsResumeButNotUpdates,
        eb = a.useMemo(() => (0, j.Tm)({ skuId: et, isPremium: el, defaultPlanId: en }), [et, en, el]);
    t =
        Z || eM
            ? $.intl.string($.t.nyzoFb)
            : ep
              ? $.intl.formatToPlainString(eA.default["3m9DJK"], { premiumGroupProductName: (0, eh.DP)() })
              : (0, j.ys)(G)
                ? (0, j.ff)(n, eT)
                : $.intl.formatToPlainString($.t["sBpy9/"], { planName: eT.name });
    let eR = a.useRef(null),
        [ej, eL] = a.useState(null),
        [eO, eD] = a.useState(void 0),
        ew = a.useMemo(
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
                  let { hasOpenInvoice: a, showResumeSubscriptionView: i, planId: s } = e,
                      {
                          disabled: r,
                          premiumSubscription: o,
                          newPlan: u,
                          planGroup: c,
                          fractionalPremiumInfo: d,
                          priceOptions: p,
                      } = t;
                  return a
                      ? {
                            content: (0, l.jsx)(es, {
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
                                  preventFetch: r,
                                  fractionalPremiumInfo: d,
                                  ...n,
                              }),
                              isInvoiceBilledImmediately: !0,
                              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                          }
                        : (0, L.Ge)(o, s, c)
                          ? {
                                content: (0, l.jsx)(er, {
                                    premiumSubscription: o,
                                    newPlan: u,
                                    planGroup: c,
                                    priceOptions: p,
                                    fractionalPremiumInfo: d,
                                    preventFetch: r,
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
                                    preventFetch: r,
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
                      priceOptions: r,
                  },
                  ew,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eG = n?.eligiblePaymentGateways,
        eF = null != eG && eG.length > 0 && (eC === R.B || null === eS) && ei ? w.fU.SELECT_PAYMENT_METHOD : void 0,
        eB = a.useMemo(
            () => ({
                label: $.intl.string($.t["/AAR02"]),
                selectedCurrency: r.currency ?? eE,
                currencies: V,
                onChange: K,
                disabled: eg,
            }),
            [V, K, r, eE, eg],
        ),
        eW = a.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: s()({ [Q.E4]: ed }),
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
            subscriptionPaymentSourceId: r.paymentSourceId,
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
                            priceOptions: r,
                            preventFetch: eg,
                            disabled: eg,
                            isEEA: eI,
                            paymentSources: i,
                            setHasAcceptedTerms: F,
                        })
                      : (0, l.jsx)(C.A, {
                            onChange: F,
                            finePrint: (0, l.jsx)(A.A, {
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
        eq = a.useMemo(() => (eZ ? (0, l.jsx)(x.P, { planSkuId: eT.skuId }) : null), [eZ, eT.skuId]);
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
              priceOptions: r,
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
