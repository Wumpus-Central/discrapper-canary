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
    h = n(821891),
    C = n(953689),
    A = n(61572),
    y = n(426398),
    E = n(666646),
    P = n(94420),
    S = n(937008),
    _ = n(834252),
    T = n(566980),
    f = n(349786),
    I = n(800471),
    N = n(71867),
    x = n(222707),
    g = n(340034),
    v = n(216641),
    M = n(615405),
    b = n(97352),
    j = n(428262),
    R = n(615396),
    L = n(735164),
    O = n(778307),
    D = n(218075),
    w = n(337092),
    U = n(299301),
    k = n(340287),
    Y = n(289873),
    G = n(793574),
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
            ? (0, l.jsx)("div", { className: J.l, children: (0, l.jsx)(Y.y, { type: Y.y.Type.PULSING_ELLIPSIS }) })
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
                analyticsLocation: G.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
            },
            [s, o] = (0, V.YV)({ ...r, renewal: !1, applyEntitlements: !0 }),
            [u, c] = (0, V.YV)({ ...r, renewal: !0 });
        return { proratedInvoicePreview: s, proratedInvoiceError: o, renewalInvoicePreview: u, renewalInvoiceError: c };
    };
function ei(e) {
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
    let c = (0, j.J$)(n.paymentSourceId);
    if (null != o) {
        let e = (0, l.jsx)(K.m0, {
                premiumSubscription: t,
                renewalInvoice: o,
                isUpdate: !0,
                isPrepaidPaymentSource: c,
                fractionalPremiumInfo: i,
                shouldUseUnifiedCheckoutUI: r,
            }),
            n = (0, l.jsx)(K._J, { invoice: o, isPrepaidPaymentSource: c, shouldUseUnifiedCheckoutUI: r });
        return r
            ? (0, l.jsxs)(l.Fragment, { children: [n, (0, l.jsx)(Q, { containerNode: s.current, children: e })] })
            : (0, l.jsxs)(L.Yx, { className: J.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: r });
}
function er(e) {
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
        m = (0, P.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: h } = (0, _.P5)(),
        { isGift: C } = (0, S.Pv)(),
        { analyticsLocations: A } = (0, F.Ay)(),
        y = (0, j.Pg)(t, n.id, 1, new Set(i)),
        {
            proratedInvoicePreview: T,
            proratedInvoiceError: f,
            renewalInvoicePreview: N,
            renewalInvoiceError: x,
        } = ea({ premiumSubscription: t, newItems: y, priceOptions: r, preventFetch: o, analyticsLocations: A }),
        { primaryInvoiceError: v } = (0, E.OQ)({
            checkoutInvoicePreview: T,
            checkoutInvoiceError: f,
            renewalInvoicePreview: N,
            renewalInvoiceError: x,
        }),
        { planSwitchNoticeCopy: M, overrideRenewalDate: b } = a.useMemo(() => {
            let e;
            return (null !== s &&
                null !== T &&
                (e = (0, j._e)(T.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != T && null != N)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, K.DK)({
                          proratedInvoice: T,
                          renewalInvoice: N,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [T, N, s]);
    if (
        (el(d, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: b }),
        en(c, { shouldUseUnifiedCheckoutUI: p, noticeCopy: M }),
        null != v)
    )
        return ee(v, p);
    let R = (0, I.vT)({ isTrial: !1, isGift: C, selectedSkuId: m, startedPaymentFlowWithPaymentSources: h.current }),
        O = (0, I.UB)(R, T, n);
    if (null == T || null == N || O) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: p });
    let D = (0, j.J$)(r.paymentSourceId),
        w = (0, l.jsx)(K.m0, {
            premiumSubscription: t,
            proratedInvoice: T,
            renewalInvoice: N,
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
                          invoicePreview: T,
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
                  (0, l.jsx)(K.wP, { proratedInvoice: T, renewalInvoice: N, overrideRenewalDate: b }),
                  (0, l.jsxs)(L.Yx, {
                      className: X.SU,
                      children: [
                          (0, l.jsx)(L.Xd, { children: z.intl.string(z.t["2eh+Co"]) }),
                          (0, l.jsx)(K.mT, { invoice: T, newPlan: n, isPrepaidPaymentSource: D }),
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
            planGroup: r,
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
            items: (0, j.Pg)(n, i.id, 1, new Set(r)),
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
    t = n.type === q.rzx.PREMIUM ? (0, j.Mn)(i.id) : i.name;
    let S = (0, j.J$)(o.paymentSourceId),
        _ = (0, l.jsx)("div", { className: J.o, children: P }),
        T = (0, l.jsx)(K.m0, {
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
                (0, l.jsx)(B.Vm, { label: z.intl.string($.default.eoXh7B), lineItems: e, currency: C.currency }),
                (0, l.jsx)(Q, { containerNode: m.current, children: T }),
            ],
        });
    }
    return (0, l.jsxs)("div", {
        className: X.G3,
        children: [
            _,
            (0, l.jsxs)(L.Yx, {
                className: X.SU,
                children: [
                    (0, l.jsx)(L.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                    (0, l.jsx)(L.oR, { label: t, value: (0, j.jh)(i, o, !0) }),
                    (0, l.jsx)(H.A, { invoice: C }),
                    (0, l.jsx)(L.pK, {}),
                    T,
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
            planGroup: i,
            priceOptions: r,
            preventFetch: s,
            disabled: o,
            isEEA: u,
            paymentSources: c,
            setHasAcceptedTerms: d,
        } = e,
        { analyticsLocations: p } = (0, F.Ay)(),
        m = (0, j.Pg)(n, a.id, 1, new Set(i)),
        {
            proratedInvoicePreview: A,
            proratedInvoiceError: y,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        } = ea({ premiumSubscription: n, newItems: m, priceOptions: r, preventFetch: s, analyticsLocations: p }),
        { primaryInvoiceError: _ } = (0, E.OQ)({
            checkoutInvoicePreview: A,
            checkoutInvoiceError: y,
            renewalInvoicePreview: P,
            renewalInvoiceError: S,
        }),
        T = (0, v.g)(c, r.paymentSourceId);
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
              showPricingLink: a.currency !== q.Yri.USD,
              showWithdrawalWaiver: u,
              disabled: o,
              subscriptionPlan: a,
              currentSubscription: n,
              planGroup: i,
          });
}
function eu(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
            fractionalPremiumInfo: r,
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
            analyticsLocation: G.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [m, h] = (0, V.YV)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: i,
            analyticsLocations: c,
            analyticsLocation: G.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        }),
        { primaryInvoiceError: C } = (0, E.OQ)({
            checkoutInvoicePreview: d,
            checkoutInvoiceError: p,
            renewalInvoicePreview: m,
            renewalInvoiceError: h,
        }),
        A = a.useMemo(() => z.intl.string(z.t.spIYou), []);
    if ((en(u, { shouldUseUnifiedCheckoutUI: s, noticeCopy: A }), null != C)) return ee(C, s);
    if (null == d || null == m) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: s });
    let y = (0, j.J$)(n.paymentSourceId),
        P = (0, l.jsx)(K.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: y,
            fractionalPremiumInfo: r,
            shouldUseUnifiedCheckoutUI: s,
        }),
        S = (0, l.jsx)("div", { className: J.o, children: A }),
        _ = (0, l.jsx)(K._J, { invoice: d, isPrepaidPaymentSource: y, shouldUseUnifiedCheckoutUI: s });
    return s
        ? (0, l.jsxs)(l.Fragment, { children: [_, (0, l.jsx)(Q, { containerNode: o.current, children: P })] })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  S,
                  (0, l.jsxs)(L.Yx, {
                      className: X.SU,
                      children: [(0, l.jsx)(L.Xd, { children: z.intl.string(z.t["2eh+Co"]) }), _, P],
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
            paymentSelectContent: S,
            legalContent: _,
        } = e,
        T = a.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(g.l$, { fractionalPremiumInfo: i }),
                        key: "fractional-premium-notice",
                    }),
                r && e.push({ type: "info", message: (0, x.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, D.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [r, s, o, n, i]),
        f = a.useMemo(() => (0, j.l6)(A, c?.checkoutContext?.available_plans), [A, c]),
        I = a.useMemo(() => (p ? (0, l.jsx)(N.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        v = (0, em.G)(C),
        M = a.useMemo(() => (v ? (0, l.jsx)(ed.a, {}) : null), [v]),
        b = a.useMemo(() => (null != I ? I : null != M ? M : null), [I, M]),
        R = (0, j.J$)(A.paymentSourceId),
        L = null,
        O = null;
    p
        ? (O = (0, l.jsx)(g.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: y,
              selectedPlanId: C,
              showPlanStatusSubText: !0,
              priceOptions: f,
          }))
        : null != c &&
          (L = (0, l.jsx)(ep._, {
              type: U.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: R,
              isPremiumGroupPurchase: r,
              bottomSubText: u,
          }));
    let w = m ? d : (0, l.jsx)("div", { ref: E }),
        k = m ? null : d;
    return (0, l.jsx)(ec.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: T,
        paymentSelectContent: S,
        subscriptionDetailsContent: w,
        purchaseItemContent: L,
        planSelectContent: O,
        invoiceSummaryContent: k,
        legalContent: _,
        invoiceTotalDueLabel: P ? z.intl.string($.default.R0cZsM) : z.intl.string($.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, K.U5)(c) : void 0,
        promotionalNoticeContent: b,
    });
};
var eC = n(88001),
    eA = n(466919);
function ey(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: i,
            priceOptions: s,
            handlePaymentSourceAdd: k,
            planId: Y,
            setHasAcceptedTerms: G,
            legalTermsNodeRef: F,
            hasLegalTermsFlash: B,
            planGroup: W,
            hasOpenInvoice: V,
            purchaseState: H,
            handleClose: K,
            shouldUseUnifiedCheckoutUI: Z,
        } = e,
        $ = (0, E.mx)(),
        { hasPaymentSources: J } = (0, y.jm)(),
        { selectedSkuId: Q, paymentSourceId: ee } = (0, P.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
        })),
        {
            defaultPlanId: et,
            isPremium: en,
            startedPaymentFlowWithPaymentSourcesRef: el,
            isPremiumGroupPurchase: ea,
        } = (0, _.P5)(),
        ec = (0, E.sw)(),
        { isGift: ed } = (0, S.Pv)(),
        ep = (0, v.g)(i, ee),
        em = a.useMemo(() => (0, j.l6)(s, ec?.checkoutContext?.available_plans), [ec, s]),
        ey = (0, c.bG)([b.A], () => b.A.get(Y));
    o()(null != ey, "Missing newPlan");
    let { showFractionalPremiumBanner: eE, fractionalPremiumInfo: eP } = (0, x._V)({
            premiumSubscription: n,
            selectedPlanId: Y,
            planGroup: W,
            isGift: ed,
        }),
        eS = (0, E.IK)(),
        e_ = u.M.EEA_COUNTRIES.has(M.A.ipCountryCodeWithFallback),
        eT = H === T.h.PURCHASING || H === T.h.COMPLETED,
        ef = (0, I.vT)({ isTrial: !1, isGift: ed, selectedSkuId: Q, startedPaymentFlowWithPaymentSources: el.current }),
        eI = n?.isPausedAllowsResumeButNotUpdates,
        eN = a.useMemo(() => (0, j.Tm)({ skuId: Q, isPremium: en, defaultPlanId: et }), [Q, et, en]);
    t =
        V || eI
            ? z.intl.string(z.t.nyzoFb)
            : ea
              ? z.intl.formatToPlainString(eA.default["3m9DJK"], { premiumGroupProductName: (0, eC.DP)() })
              : (0, j.ys)(Y)
                ? (0, j.ff)(n, ey)
                : z.intl.formatToPlainString(z.t["sBpy9/"], { planName: ey.name });
    let ex = a.useRef(null),
        [eg, ev] = a.useState(null),
        [eM, eb] = a.useState(void 0),
        ej = a.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: Z,
                unifiedSubscriptionDetailsNode: ex,
                setUnifiedPlainNoticeText: ev,
                setOverrideRenewalDate: eb,
            }),
            [Z],
        ),
        {
            content: eR,
            isInvoiceBilledImmediately: eL,
            ...eO
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
                        : (0, R.Ge)(o, r, c)
                          ? {
                                content: (0, l.jsx)(er, {
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
                  { hasOpenInvoice: V, showResumeSubscriptionView: eI, planId: Y },
                  {
                      disabled: eT,
                      premiumSubscription: n,
                      newPlan: ey,
                      planGroup: W,
                      fractionalPremiumInfo: eP,
                      priceOptions: s,
                  },
                  ej,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eD = n?.eligiblePaymentGateways,
        ew = null != eD && eD.length > 0 && (null == ee || null === ep) && J ? D.fU.SELECT_PAYMENT_METHOD : void 0,
        eU = a.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: r()({ [X.E4]: en }),
                shouldUseUnifiedCheckoutUI: Z,
            }),
            [n?.eligiblePaymentGateways, en, Z],
        ),
        ek = (0, l.jsx)(A.N, {
            label: z.intl.string(z.t["mmDvV+"]),
            onPaymentSourceAdd: k,
            disabled: eT,
            additionalPaymentSourceDropdownProps: eU,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: s.paymentSourceId,
        }),
        eY = null != n && (0, R.Ge)(n, Y, W),
        eG = Z
            ? null != ec && null != eS
                ? (0, l.jsx)(g.PI, {
                      overrideRenewalDate: eM,
                      planGroup: W,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: ey,
                      isGift: ed,
                      paymentSourceType: ep,
                      isInvoiceBilledImmediately: eL,
                      invoiceSummaryTypeWithPreview: {
                          type: U.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: ec,
                          renewalInvoicePreview: eS,
                      },
                      hideLegalContent: eY && null != $,
                  })
                : null
            : (0, l.jsx)(O.A, {
                  isActive: B,
                  ref: F,
                  children: eY
                      ? (0, l.jsx)(eo, {
                            premiumSubscription: n,
                            newPlan: ey,
                            planGroup: W,
                            priceOptions: s,
                            preventFetch: eT,
                            disabled: eT,
                            isEEA: e_,
                            paymentSources: i,
                            setHasAcceptedTerms: G,
                        })
                      : (0, l.jsx)(C.A, {
                            onChange: G,
                            finePrint: (0, l.jsx)(h.A, {
                                subscriptionPlan: ey,
                                paymentSourceType: ep,
                                basePrice: (0, j.y8)(ey.id, !1, ed, em),
                                currentSubscription: n,
                                planGroup: W,
                            }),
                            forceShow: !0,
                            showPricingLink: ey.currency !== q.Yri.USD,
                            showWithdrawalWaiver: e_,
                            disabled: eT,
                            subscriptionPlan: ey,
                            currentSubscription: n,
                            planGroup: W,
                        }),
              }),
        eF = !eI && ef && !ea,
        eB = a.useMemo(() => (eF ? (0, l.jsx)(N.P, { planSkuId: ey.skuId }) : null), [eF, ey.skuId]);
    return Z
        ? (0, l.jsx)(eh, {
              disabled: eT,
              showFractionalPremiumBanner: eE,
              fractionalPremiumInfo: eP,
              isPremiumGroupPurchase: ea,
              paymentRestrictionBannerType: ew,
              invoiceError: $,
              unifiedPlainNoticeText: eg,
              invoicePreview: ec,
              invoicePreviewComponent: eR,
              shouldShowPlanSelectAndPromoBanner: eF,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eO.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: ey,
              planId: Y,
              priceOptions: s,
              premiumPlanOptions: eN,
              unifiedSubscriptionDetailsNode: ex,
              isInvoiceBilledImmediately: eL,
              paymentSelectContent: ek,
              legalContent: eG,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(f.k, { location: "PremiumSwitchPlanReview", paymentSourceId: ee }),
                  (0, l.jsxs)("div", {
                      className: X.Du,
                      children: [
                          (0, l.jsx)(D.je, { paymentRestrictionBannerType: ew }),
                          eF &&
                              (0, l.jsxs)("div", {
                                  children: [
                                      eB,
                                      (0, l.jsx)(w.$p, {
                                          disabled: eT,
                                          planOptions: eN,
                                          selectedPlanId: Y,
                                          planGroup: W,
                                          showTotal: !1,
                                          priceOptions: em,
                                          handleClose: K,
                                      }),
                                      (0, l.jsx)(L.pK, {}),
                                  ],
                              }),
                          ea &&
                              (0, l.jsx)("div", {
                                  className: X.Ni,
                                  children: (0, l.jsx)(d.w, {
                                      type: "info",
                                      children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, x.Nn)() }),
                                  }),
                              }),
                          (0, l.jsx)(m.D, { label: t, children: eR }),
                          (0, l.jsx)("div", { className: X.LC, children: ek }),
                          eG,
                      ],
                  }),
              ],
          });
}
