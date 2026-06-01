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
    A = n(953689),
    C = n(376843),
    E = n(426398),
    y = n(666646),
    P = n(722847),
    S = n(937008),
    _ = n(768050),
    I = n(566980),
    f = n(349786),
    T = n(800471),
    N = n(71867),
    v = n(222707),
    g = n(340034),
    x = n(216641),
    R = n(615405),
    M = n(97352),
    b = n(428262),
    L = n(615396),
    j = n(735164),
    O = n(778307),
    w = n(218075),
    D = n(361597),
    U = n(299301),
    k = n(340287),
    G = n(289873),
    Y = n(793574),
    F = n(688810),
    B = n(473617),
    W = n(848584),
    H = n(888751),
    V = n(787455),
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
        let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: i, analyticsLocations: a } = e,
            s = r.useMemo(
                () => ({
                    subscriptionId: t.id,
                    items: n,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: i,
                    analyticsLocations: a,
                    analyticsLocation: Y.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
                }),
                [t.id, n, l.paymentSourceId, l.currency, i, a],
            ),
            { checkoutInvoicePreviewRequest: o, renewalInvoicePreviewRequest: u } = r.useMemo(
                () => ({
                    checkoutInvoicePreviewRequest: {
                        type: "premium_checkout_invoice",
                        params: { ...s, renewal: !1, applyEntitlements: !0 },
                    },
                    renewalInvoicePreviewRequest: { type: "premium_renewal_invoice", params: { ...s, renewal: !0 } },
                }),
                [s],
            );
        (0, B.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
        let {
            checkoutInvoicePreview: c,
            checkoutInvoiceError: d,
            renewalInvoicePreview: p,
            renewalInvoiceError: m,
        } = (0, P.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutInvoiceError: e.checkoutInvoiceError,
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        }));
        return {
            primaryInvoiceError: r.useMemo(() => d ?? m, [d, m]),
            proratedInvoicePreview: c,
            proratedInvoiceError: d,
            renewalInvoicePreview: p,
            renewalInvoiceError: m,
        };
    };
function ei(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
            fractionalPremiumInfo: a,
            shouldUseUnifiedCheckoutUI: s,
            unifiedSubscriptionDetailsNode: o,
        } = e,
        u = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "premium_checkout_invoice_get_request",
                    params: { subscriptionId: t.id, preventFetch: i },
                },
                fetchRenewalInvoicePreviewRequest: null,
                shouldAllowNullState: !0,
            }),
            [t.id, i],
        );
    (0, B.E)(u);
    let { checkoutInvoicePreview: c, checkoutInvoiceError: d } = (0, P.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, y.Tr)(c, d);
    let p = (0, b.J$)(n.paymentSourceId);
    if (null != c) {
        let e = (0, l.jsx)(K.m0, {
                premiumSubscription: t,
                renewalInvoice: c,
                isUpdate: !0,
                isPrepaidPaymentSource: p,
                fractionalPremiumInfo: a,
                shouldUseUnifiedCheckoutUI: s,
            }),
            n = (0, l.jsx)(K._J, { invoice: c, isPrepaidPaymentSource: p, shouldUseUnifiedCheckoutUI: s });
        return s
            ? (0, l.jsxs)(l.Fragment, { children: [n, (0, l.jsx)(Q, { containerNode: o.current, children: e })] })
            : (0, l.jsxs)(j.Yx, { className: J.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: s });
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
        { analyticsLocations: m } = (0, F.Ay)(),
        h = (0, b.Pg)(t, n.id, 1, new Set(i)),
        {
            proratedInvoicePreview: A,
            renewalInvoicePreview: C,
            primaryInvoiceError: E,
        } = er({ premiumSubscription: t, newItems: h, priceOptions: a, preventFetch: o, analyticsLocations: m }),
        { planSwitchNoticeCopy: y, overrideRenewalDate: P } = r.useMemo(() => {
            let e;
            return (null !== s &&
                null !== A &&
                (e = (0, b._e)(A.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != A && null != C)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, K.DK)({
                          proratedInvoice: A,
                          renewalInvoice: C,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [A, C, s]);
    if (
        (el(d, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: P }),
        en(c, { shouldUseUnifiedCheckoutUI: p, noticeCopy: y }),
        null != E)
    )
        return ee(E, p);
    let S = (0, T.UB)(A, n);
    if (null == A || null == C || S) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: p });
    let _ = (0, b.J$)(a.paymentSourceId),
        I = (0, l.jsx)(K.m0, {
            premiumSubscription: t,
            proratedInvoice: A,
            renewalInvoice: C,
            overrideRenewalDate: P,
            isPrepaidPaymentSource: _,
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
                          invoicePreview: A,
                          renewalInvoicePreview: C,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: _,
                      subscriptionTrial: null,
                  }),
                  (0, l.jsx)(Q, { containerNode: u.current, children: I }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(K.wP, { proratedInvoice: A, renewalInvoice: C, overrideRenewalDate: P }),
                  (0, l.jsxs)(j.Yx, {
                      className: X.SU,
                      children: [
                          (0, l.jsx)(j.Xd, { children: z.intl.string(z.t["2eh+Co"]) }),
                          (0, l.jsx)(K.mT, { invoice: A, newPlan: n, isPrepaidPaymentSource: _ }),
                          I,
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
        { renewalInvoicePreview: A, renewalInvoiceError: C } = (0, P.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        E = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: null,
                fetchRenewalInvoicePreviewRequest: {
                    type: "premium_renewal_invoice",
                    params: {
                        subscriptionId: n.id,
                        items: (0, b.Pg)(n, i.id, 1, new Set(a)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: o.paymentSourceId,
                        currency: o.currency,
                        preventFetch: u,
                        analyticsLocations: h,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
                    },
                },
                shouldAllowNullState: !0,
            }),
            [n, i.id, a, o.paymentSourceId, o.currency, u, h],
        );
    (0, B.E)(E), (0, y.F0)(A, C);
    let { renewalDate: S, planSwitchNoticeCopy: _ } = r.useMemo(() => {
        if (null == A) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = A.subscriptionPeriodStart;
        return (
            s.fractionalState === Z.xc.FP_SUB_PAUSED && (e = s.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: z.intl.format(z.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [A, s.fractionalState, s.endsAt]);
    if (
        (el(p, { shouldUseUnifiedCheckoutUI: c, overrideRenewalDate: S }),
        en(d, { shouldUseUnifiedCheckoutUI: c, noticeCopy: _ }),
        null != C)
    )
        return ee(C, c);
    if (null == A) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: c });
    t = n.type === q.rzx.PREMIUM ? (0, b.Mn)(i.id) : i.name;
    let I = (0, b.J$)(o.paymentSourceId),
        f = (0, l.jsx)("div", { className: J.o, children: _ }),
        T = (0, l.jsx)(K.m0, {
            premiumSubscription: n,
            renewalInvoice: A,
            isUpdate: !0,
            isPrepaidPaymentSource: I,
            fractionalPremiumInfo: s,
            overrideRenewalDate: S,
            shouldUseUnifiedCheckoutUI: c,
            unifiedCheckoutDefaultExpanded: !0,
        });
    if (c) {
        let { lineItems: e } = (0, H.Ig)(A, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: I,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(W.Vm, { label: z.intl.string($.default.eoXh7B), lineItems: e, currency: A.currency }),
                (0, l.jsx)(Q, { containerNode: m.current, children: T }),
            ],
        });
    }
    return (0, l.jsxs)("div", {
        className: X.G3,
        children: [
            f,
            (0, l.jsxs)(j.Yx, {
                className: X.SU,
                children: [
                    (0, l.jsx)(j.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                    (0, l.jsx)(j.oR, { label: t, value: (0, b.jh)(i, o, !0) }),
                    (0, l.jsx)(V.A, { invoice: A }),
                    (0, l.jsx)(j.pK, {}),
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
            proratedInvoicePreview: C,
            renewalInvoicePreview: E,
            primaryInvoiceError: y,
        } = er({ premiumSubscription: n, newItems: m, priceOptions: a, preventFetch: s, analyticsLocations: p }),
        P = (0, x.g)(c, a.paymentSourceId);
    return null != y ||
        (null != E && (t = { amount: E.subtotal, currency: E.currency, tax: E.tax, taxInclusive: E.taxInclusive }),
        null == t)
        ? null
        : (0, l.jsx)(A.A, {
              onChange: d,
              finePrint: (0, l.jsx)(h.A, {
                  subscriptionPlan: r,
                  paymentSourceType: P,
                  basePrice: t,
                  proratedAmount: null != C ? C.total : void 0,
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
        d = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "premium_checkout_invoice",
                    params: {
                        subscriptionId: t.id,
                        renewal: !0,
                        applyEntitlements: !0,
                        paymentSourceId: n.paymentSourceId,
                        currency: n.currency,
                        preventFetch: i,
                        analyticsLocations: c,
                        analyticsLocation: Y.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
                    },
                },
                fetchRenewalInvoicePreviewRequest: {
                    type: "premium_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        renewal: !0,
                        paymentSourceId: n.paymentSourceId,
                        currency: n.currency,
                        preventFetch: i,
                        analyticsLocations: c,
                        analyticsLocation: Y.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, i, c],
        );
    (0, B.E)(d);
    let {
            resumeInvoicePreview: p,
            renewalInvoicePreview: m,
            primaryInvoiceError: h,
        } = (0, P.t4)((e) => ({
            resumeInvoicePreview: e.checkoutInvoicePreview,
            renewalInvoicePreview: e.renewalInvoicePreview,
            primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
        })),
        A = r.useMemo(() => z.intl.string(z.t.spIYou), []);
    if ((en(u, { shouldUseUnifiedCheckoutUI: s, noticeCopy: A }), null != h)) return ee(h, s);
    if (null == p || null == m) return (0, l.jsx)(et, { shouldUseUnifiedCheckoutUI: s });
    let C = (0, b.J$)(n.paymentSourceId),
        E = (0, l.jsx)(K.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: C,
            fractionalPremiumInfo: a,
            shouldUseUnifiedCheckoutUI: s,
        }),
        y = (0, l.jsx)("div", { className: J.o, children: A }),
        S = (0, l.jsx)(K._J, { invoice: p, isPrepaidPaymentSource: C, shouldUseUnifiedCheckoutUI: s });
    return s
        ? (0, l.jsxs)(l.Fragment, { children: [S, (0, l.jsx)(Q, { containerNode: o.current, children: E })] })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  y,
                  (0, l.jsxs)(j.Yx, {
                      className: X.SU,
                      children: [(0, l.jsx)(j.Xd, { children: z.intl.string(z.t["2eh+Co"]) }), S, E],
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
            planId: A,
            priceOptions: C,
            premiumPlanOptions: E,
            unifiedSubscriptionDetailsNode: y,
            isInvoiceBilledImmediately: P,
            paymentMethodContent: S,
            legalContent: _,
        } = e,
        I = r.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(g.l$, { fractionalPremiumInfo: i }),
                        key: "fractional-premium-notice",
                    }),
                a && e.push({ type: "info", message: (0, v.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, w.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [a, s, o, n, i]),
        { priceOptions: f, planPricesLoading: T } = (0, b.Pr)(C, c, o),
        x = r.useMemo(() => (p ? (0, l.jsx)(N.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        R = (0, em.G)(A),
        M = r.useMemo(() => (R ? (0, l.jsx)(ed.a, {}) : null), [R]),
        L = r.useMemo(() => (null != x ? x : null != M ? M : null), [x, M]),
        j = (0, b.J$)(C.paymentSourceId),
        O = null,
        D = null;
    p
        ? (D = (0, l.jsx)(g.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: E,
              selectedPlanId: A,
              showPlanStatusSubText: !0,
              priceOptions: f,
              planPricesLoading: T,
          }))
        : null != c &&
          (O = (0, l.jsx)(ep._, {
              type: U.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: j,
              isPremiumGroupPurchase: a,
              bottomSubText: u,
          }));
    let k = m ? d : (0, l.jsx)("div", { ref: y }),
        G = m ? null : d;
    return (0, l.jsx)(ec.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: I,
        paymentMethodContent: S,
        subscriptionDetailsContent: k,
        purchaseItemContent: O,
        planSelectContent: D,
        invoiceSummaryContent: G,
        legalContent: _,
        invoiceTotalDueLabel: P ? z.intl.string($.default.R0cZsM) : z.intl.string($.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, K.U5)(c) : void 0,
        promotionalNoticeContent: L,
    });
};
var eA = n(88001),
    eC = n(466919);
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
            purchaseState: H,
            handleClose: V,
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
        { defaultPlanId: ep, startedPaymentFlowWithPaymentSourcesRef: em } = (0, _.P5)(),
        { isGift: eE } = (0, S.Pv)(),
        ey = (0, x.g)(i, Q),
        eP = r.useMemo(() => (0, b.l6)(ee, er), [er, ee]),
        eS = (0, c.bG)([M.A], () => M.A.get(k));
    o()(null != eS, "Missing newPlan");
    let { showFractionalPremiumBanner: e_, fractionalPremiumInfo: eI } = (0, v._V)({
            premiumSubscription: n,
            selectedPlanId: k,
            planGroup: B,
            isGift: eE,
        }),
        ef = u.M.EEA_COUNTRIES.has(R.A.ipCountryCodeWithFallback),
        eT = H === I.h.PURCHASING || H === I.h.COMPLETED,
        eN = (0, T.vT)({ isTrial: !1, isGift: eE, selectedSkuId: J, startedPaymentFlowWithPaymentSources: em.current }),
        ev = n?.isPausedAllowsResumeButNotUpdates,
        eg = r.useMemo(() => (0, b.Tm)({ skuId: J, isPremium: ec, defaultPlanId: ep }), [J, ep, ec]);
    t =
        W || ev
            ? z.intl.string(z.t.nyzoFb)
            : ed
              ? z.intl.formatToPlainString(eC.default["3m9DJK"], { premiumGroupProductName: (0, eA.DP)() })
              : (0, b.ys)(k)
                ? (0, b.ff)(n, eS)
                : z.intl.formatToPlainString(z.t["sBpy9/"], { planName: eS.name });
    let ex = r.useRef(null),
        [eR, eM] = r.useState(null),
        [eb, eL] = r.useState(void 0),
        ej = r.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: K,
                unifiedSubscriptionDetailsNode: ex,
                setUnifiedPlainNoticeText: eM,
                setOverrideRenewalDate: eL,
            }),
            [K],
        ),
        {
            content: eO,
            isInvoiceBilledImmediately: ew,
            ...eD
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
                        : (0, L.Ge)(o, a, c)
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
                  { hasOpenInvoice: W, showResumeSubscriptionView: ev, planId: k },
                  {
                      disabled: eT,
                      premiumSubscription: n,
                      newPlan: eS,
                      planGroup: B,
                      fractionalPremiumInfo: eI,
                      priceOptions: ee,
                  },
                  ej,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eU = n?.eligiblePaymentGateways,
        ek = null != eU && eU.length > 0 && (null == Q || null === ey) && $ ? w.fU.SELECT_PAYMENT_METHOD : void 0,
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
                    ? (0, l.jsx)(C.N, {
                          label: z.intl.string(z.t["mmDvV+"]),
                          onPaymentSourceAdd: s,
                          disabled: eT,
                          additionalPaymentSourceDropdownProps: eG,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: ee.paymentSourceId,
                      })
                    : null,
            [eY, ee.paymentSourceId, eG, s, eT],
        ),
        eB = null != n && (0, L.Ge)(n, k, B),
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
                      isInvoiceBilledImmediately: ew,
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
                            preventFetch: eT,
                            disabled: eT,
                            isEEA: ef,
                            paymentSources: i,
                            setHasAcceptedTerms: G,
                        })
                      : (0, l.jsx)(A.A, {
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
                            showWithdrawalWaiver: ef,
                            disabled: eT,
                            subscriptionPlan: eS,
                            currentSubscription: n,
                            planGroup: B,
                        }),
              }),
        eH = !ev && eN && !ed,
        eV = r.useMemo(() => (eH ? (0, l.jsx)(N.P, { planSkuId: eS.skuId }) : null), [eH, eS.skuId]);
    return K
        ? (0, l.jsx)(eh, {
              disabled: eT,
              showFractionalPremiumBanner: e_,
              fractionalPremiumInfo: eI,
              isPremiumGroupPurchase: ed,
              paymentRestrictionBannerType: ek,
              invoiceError: Z,
              unifiedPlainNoticeText: eR,
              invoicePreview: en,
              invoicePreviewComponent: eO,
              shouldShowPlanSelectAndPromoBanner: eH,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eD.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eS,
              planId: k,
              priceOptions: ee,
              premiumPlanOptions: eg,
              unifiedSubscriptionDetailsNode: ex,
              isInvoiceBilledImmediately: ew,
              paymentMethodContent: eF,
              legalContent: eW,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(f.k, { location: "PremiumSwitchPlanReview", paymentSourceId: Q }),
                  (0, l.jsxs)("div", {
                      className: X.Du,
                      children: [
                          (0, l.jsx)(w.je, { paymentRestrictionBannerType: ek }),
                          eH &&
                              (0, l.jsxs)("div", {
                                  children: [
                                      eV,
                                      (0, l.jsx)(D.$p, {
                                          disabled: eT,
                                          planOptions: eg,
                                          selectedPlanId: k,
                                          planGroup: B,
                                          showTotal: !1,
                                          priceOptions: eP,
                                          handleClose: V,
                                      }),
                                      (0, l.jsx)(j.pK, {}),
                                  ],
                              }),
                          ed &&
                              (0, l.jsx)("div", {
                                  className: X.Ni,
                                  children: (0, l.jsx)(d.w, {
                                      type: "info",
                                      children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, v.Nn)() }),
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
