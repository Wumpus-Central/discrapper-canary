n.d(t, { A: () => eA });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(997101),
    o = n(17928),
    u = n(683071),
    c = n(834730),
    d = n(452027),
    p = n(821891),
    m = n(953689),
    h = n(71804),
    A = n(376843),
    E = n(426398),
    C = n(666646),
    y = n(571878),
    P = n(937008),
    S = n(566980),
    _ = n(349786),
    I = n(800471),
    f = n(71867),
    T = n(222707),
    N = n(340034),
    v = n(216641),
    g = n(615405),
    x = n(97352),
    R = n(428262),
    M = n(615396),
    b = n(735164),
    L = n(778307),
    j = n(218075),
    O = n(361597),
    w = n(299301),
    D = n(340287),
    U = n(289873),
    k = n(793574),
    G = n(688810),
    F = n(473617),
    Y = n(848584),
    B = n(888751),
    W = n(787455),
    H = n(692440),
    V = n(788868),
    K = n(652215),
    Z = n(375708),
    q = n(327105),
    z = n(207715),
    $ = n(814304);
function J(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : D.createPortal(t, n);
}
let X = (e, t) => (null == e || t ? null : (0, l.jsx)(u.w, { type: "critical", children: e.message })),
    Q = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e;
        return t
            ? (0, l.jsx)("div", { className: z.l, children: (0, l.jsx)(U.y, { type: U.y.Type.PULSING_ELLIPSIS }) })
            : (0, l.jsx)(U.y, {});
    },
    ee = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: l } = t;
        r.useEffect(() => {
            n && (null != l ? e(l) : e(null));
        }, [e, n, l]);
    },
    et = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, overrideRenewalDate: l } = t;
        r.useEffect(() => {
            n && e(l);
        }, [e, n, l]);
    },
    en = (e) => {
        let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: i, analyticsLocations: a } = e,
            s = r.useMemo(
                () => ({
                    subscriptionId: t.id,
                    items: n,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: i,
                    analyticsLocations: a,
                    analyticsLocation: k.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
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
        (0, F.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
        let {
            checkoutInvoicePreview: c,
            checkoutInvoiceError: d,
            renewalInvoicePreview: p,
            renewalInvoiceError: m,
        } = (0, y.t4)((e) => ({
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
function el(e) {
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
    (0, F.E)(u);
    let { checkoutInvoicePreview: c, checkoutInvoiceError: d } = (0, y.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, C.Tr)(c, d);
    let p = (0, R.J$)(n.paymentSourceId);
    if (null != c) {
        let e = (0, l.jsx)(H.m0, {
                premiumSubscription: t,
                renewalInvoice: c,
                isUpdate: !0,
                isPrepaidPaymentSource: p,
                fractionalPremiumInfo: a,
                shouldUseUnifiedCheckoutUI: s,
            }),
            n = (0, l.jsx)(H._J, { invoice: c, isPrepaidPaymentSource: p, shouldUseUnifiedCheckoutUI: s });
        return s
            ? (0, l.jsxs)(l.Fragment, { children: [n, (0, l.jsx)(J, { containerNode: o.current, children: e })] })
            : (0, l.jsxs)(b.Yx, { className: z.__invalid_invoice, children: [n, e] });
    }
    return (0, l.jsx)(Q, { shouldUseUnifiedCheckoutUI: s });
}
function er(e) {
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
        { analyticsLocations: m } = (0, G.Ay)(),
        h = (0, R.Pg)(t, n.id, 1, new Set(i)),
        {
            proratedInvoicePreview: A,
            renewalInvoicePreview: E,
            primaryInvoiceError: C,
        } = en({ premiumSubscription: t, newItems: h, priceOptions: a, preventFetch: o, analyticsLocations: m }),
        { planSwitchNoticeCopy: y, overrideRenewalDate: P } = r.useMemo(() => {
            let e;
            return (null !== s &&
                null !== A &&
                (e = (0, R._e)(A.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != A && null != E)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, H.DK)({
                          proratedInvoice: A,
                          renewalInvoice: E,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [A, E, s]);
    if (
        (et(d, { shouldUseUnifiedCheckoutUI: p, overrideRenewalDate: P }),
        ee(c, { shouldUseUnifiedCheckoutUI: p, noticeCopy: y }),
        null != C)
    )
        return X(C, p);
    let S = (0, I.UB)(A, n);
    if (null == A || null == E || S) return (0, l.jsx)(Q, { shouldUseUnifiedCheckoutUI: p });
    let _ = (0, R.J$)(a.paymentSourceId),
        f = (0, l.jsx)(H.m0, {
            premiumSubscription: t,
            proratedInvoice: A,
            renewalInvoice: E,
            overrideRenewalDate: P,
            isPrepaidPaymentSource: _,
            fractionalPremiumInfo: s,
            isUpdate: !0,
            shouldUseUnifiedCheckoutUI: p,
        });
    return p
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(N.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: w.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: A,
                          renewalInvoicePreview: E,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: _,
                      subscriptionTrial: null,
                  }),
                  (0, l.jsx)(J, { containerNode: u.current, children: f }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(H.wP, { proratedInvoice: A, renewalInvoice: E, overrideRenewalDate: P }),
                  (0, l.jsxs)(b.Yx, {
                      className: $.SU,
                      children: [
                          (0, l.jsx)(b.Xd, { children: Z.intl.string(Z.t["2eh+Co"]) }),
                          (0, l.jsx)(H.mT, { invoice: A, newPlan: n, isPrepaidPaymentSource: _ }),
                          f,
                      ],
                  }),
              ],
          });
}
function ei(e) {
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
        { analyticsLocations: h } = (0, G.Ay)(),
        { renewalInvoicePreview: A, renewalInvoiceError: E } = (0, y.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        P = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: null,
                fetchRenewalInvoicePreviewRequest: {
                    type: "premium_renewal_invoice",
                    params: {
                        subscriptionId: n.id,
                        items: (0, R.Pg)(n, i.id, 1, new Set(a)),
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
    (0, F.E)(P), (0, C.F0)(A, E);
    let { renewalDate: S, planSwitchNoticeCopy: _ } = r.useMemo(() => {
        if (null == A) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = A.subscriptionPeriodStart;
        return (
            s.fractionalState === V.xc.FP_SUB_PAUSED && (e = s.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: Z.intl.format(Z.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [A, s.fractionalState, s.endsAt]);
    if (
        (et(p, { shouldUseUnifiedCheckoutUI: c, overrideRenewalDate: S }),
        ee(d, { shouldUseUnifiedCheckoutUI: c, noticeCopy: _ }),
        null != E)
    )
        return X(E, c);
    if (null == A) return (0, l.jsx)(Q, { shouldUseUnifiedCheckoutUI: c });
    t = n.type === K.rzx.PREMIUM ? (0, R.Mn)(i.id) : i.name;
    let I = (0, R.J$)(o.paymentSourceId),
        f = (0, l.jsx)("div", { className: z.o, children: _ }),
        T = (0, l.jsx)(H.m0, {
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
        let { lineItems: e } = (0, B.Ig)(A, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: I,
            excludeDiscountsAndAdjustments: !0,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(Y.Vm, { label: Z.intl.string(q.default.eoXh7B), lineItems: e, currency: A.currency }),
                (0, l.jsx)(J, { containerNode: m.current, children: T }),
            ],
        });
    }
    return (0, l.jsxs)("div", {
        className: $.G3,
        children: [
            f,
            (0, l.jsxs)(b.Yx, {
                className: $.SU,
                children: [
                    (0, l.jsx)(b.Xd, { children: Z.intl.string(Z.t.iqhIp4) }),
                    (0, l.jsx)(b.oR, { label: t, value: (0, R.jh)(i, o, !0) }),
                    (0, l.jsx)(W.A, { invoice: A }),
                    (0, l.jsx)(b.pK, {}),
                    T,
                ],
            }),
        ],
    });
}
function ea(e) {
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
        { analyticsLocations: h } = (0, G.Ay)(),
        A = (0, R.Pg)(n, r.id, 1, new Set(i)),
        {
            proratedInvoicePreview: E,
            renewalInvoicePreview: C,
            primaryInvoiceError: y,
        } = en({ premiumSubscription: n, newItems: A, priceOptions: a, preventFetch: s, analyticsLocations: h }),
        P = (0, v.g)(c, a.paymentSourceId);
    return null != y ||
        (null != C && (t = { amount: C.subtotal, currency: C.currency, tax: C.tax, taxInclusive: C.taxInclusive }),
        null == t)
        ? null
        : (0, l.jsx)(m.A, {
              onChange: d,
              finePrint: (0, l.jsx)(p.A, {
                  subscriptionPlan: r,
                  paymentSourceType: P,
                  basePrice: t,
                  proratedAmount: null != E ? E.total : void 0,
                  currentSubscription: n,
                  planGroup: i,
              }),
              forceShow: !0,
              showPricingLink: r.currency !== K.Yri.USD,
              showWithdrawalWaiver: u,
              disabled: o,
              subscriptionPlan: r,
              currentSubscription: n,
              planGroup: i,
          });
}
function es(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
            fractionalPremiumInfo: a,
            shouldUseUnifiedCheckoutUI: s,
            unifiedSubscriptionDetailsNode: o,
            setUnifiedPlainNoticeText: u,
        } = e,
        { analyticsLocations: c } = (0, G.Ay)(),
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
                        analyticsLocation: k.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
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
                        analyticsLocation: k.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, i, c],
        );
    (0, F.E)(d);
    let {
            resumeInvoicePreview: p,
            renewalInvoicePreview: m,
            primaryInvoiceError: h,
        } = (0, y.t4)((e) => ({
            resumeInvoicePreview: e.checkoutInvoicePreview,
            renewalInvoicePreview: e.renewalInvoicePreview,
            primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
        })),
        A = r.useMemo(() => Z.intl.string(Z.t.spIYou), []);
    if ((ee(u, { shouldUseUnifiedCheckoutUI: s, noticeCopy: A }), null != h)) return X(h, s);
    if (null == p || null == m) return (0, l.jsx)(Q, { shouldUseUnifiedCheckoutUI: s });
    let E = (0, R.J$)(n.paymentSourceId),
        C = (0, l.jsx)(H.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: E,
            fractionalPremiumInfo: a,
            shouldUseUnifiedCheckoutUI: s,
        }),
        P = (0, l.jsx)("div", { className: z.o, children: A }),
        S = (0, l.jsx)(H._J, { invoice: p, isPrepaidPaymentSource: E, shouldUseUnifiedCheckoutUI: s });
    return s
        ? (0, l.jsxs)(l.Fragment, { children: [S, (0, l.jsx)(J, { containerNode: o.current, children: C })] })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  P,
                  (0, l.jsxs)(b.Yx, {
                      className: $.SU,
                      children: [(0, l.jsx)(b.Xd, { children: Z.intl.string(Z.t["2eh+Co"]) }), S, C],
                  }),
              ],
          });
}
n(321073);
var eo = n(717925),
    eu = n(755880),
    ec = n(134638),
    ed = n(906234);
let ep = (e) => {
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
            priceOptions: E,
            premiumPlanOptions: C,
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
                        directContent: (0, l.jsx)(N.l$, { fractionalPremiumInfo: i }),
                        key: "fractional-premium-notice",
                    }),
                a && e.push({ type: "info", message: (0, T.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, j.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [a, s, o, n, i]),
        { priceOptions: v, planPricesLoading: g } = (0, R.Pr)(E, c, o),
        x = r.useMemo(() => (p ? (0, l.jsx)(f.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        M = (0, ed.G)(A),
        b = r.useMemo(() => (M ? (0, l.jsx)(eu.a, {}) : null), [M]),
        L = r.useMemo(() => (null != x ? x : null != b ? b : null), [x, b]),
        O = (0, R.J$)(E.paymentSourceId),
        D = null,
        U = null;
    p
        ? (U = (0, l.jsx)(N.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: C,
              selectedPlanId: A,
              showPlanStatusSubText: !0,
              priceOptions: v,
              planPricesLoading: g,
          }))
        : null != c &&
          (D = (0, l.jsx)(ec._, {
              type: w.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: O,
              isPremiumGroupPurchase: a,
              bottomSubText: u,
          }));
    let k = m ? d : (0, l.jsx)("div", { ref: y }),
        G = m ? null : d;
    return (0, l.jsx)(eo.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: I,
        paymentMethodContent: S,
        subscriptionDetailsContent: k,
        purchaseItemContent: D,
        planSelectContent: U,
        invoiceSummaryContent: G,
        legalContent: _,
        invoiceTotalDueLabel: P ? Z.intl.string(q.default.R0cZsM) : Z.intl.string(q.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, H.U5)(c) : void 0,
        promotionalNoticeContent: L,
    });
};
var em = n(88001),
    eh = n(466919);
function eA(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: i,
            handlePaymentSourceAdd: D,
            planId: U,
            setHasAcceptedTerms: k,
            legalTermsNodeRef: G,
            hasLegalTermsFlash: F,
            planGroup: Y,
            hasOpenInvoice: B,
            purchaseState: W,
            handleClose: H,
            shouldUseUnifiedCheckoutUI: V,
        } = e,
        q = (0, C.mx)(),
        { hasPaymentSources: z } = (0, E.jm)(),
        {
            selectedSkuId: J,
            paymentSourceId: X,
            priceOptions: Q,
            renewalInvoicePreview: ee,
            checkoutInvoicePreview: et,
            checkoutInvoiceError: en,
            checkoutContextAvailablePlans: eo,
        } = (0, y.t4)((e) => {
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
        { isPremiumPurchase: eu, isPremiumGroupPurchase: ec } = (0, y.t4)((e) => e.get("selectedPlanAttributes")),
        ed = (0, y.t4)((e) => e.defaultPlanId),
        eA = (0, y.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        { isGift: eE } = (0, P.Pv)(),
        eC = (0, v.g)(i, X),
        ey = r.useMemo(() => (0, R.l6)(Q, eo), [eo, Q]),
        eP = (0, o.bG)([x.A], () => x.A.get(U));
    if (null == eP)
        throw new h.v({
            message: "Missing newPlan",
            extraSentryInformation: {
                defaultPlanId: ed,
                planId: U,
                newPlan: eP,
                isPremium: eu,
                isPremiumGroupPurchase: ec,
            },
        });
    let { showFractionalPremiumBanner: eS, fractionalPremiumInfo: e_ } = (0, T._V)({
            premiumSubscription: n,
            selectedPlanId: U,
            planGroup: Y,
            isGift: eE,
        }),
        eI = s.M.EEA_COUNTRIES.has(g.A.ipCountryCodeWithFallback),
        ef = W === S.h.PURCHASING || W === S.h.COMPLETED,
        eT = (0, I.vT)({ isTrial: !1, isGift: eE, selectedSkuId: J, startedPaymentFlowWithPaymentSources: eA }),
        eN = n?.isPausedAllowsResumeButNotUpdates,
        ev = r.useMemo(() => (0, R.Tm)({ skuId: J, isPremium: eu, defaultPlanId: ed }), [J, ed, eu]);
    t =
        B || eN
            ? Z.intl.string(Z.t.nyzoFb)
            : ec
              ? Z.intl.formatToPlainString(eh.default["3m9DJK"], { premiumGroupProductName: (0, em.DP)() })
              : (0, R.ys)(U)
                ? (0, R.ff)(n, eP)
                : Z.intl.formatToPlainString(Z.t["sBpy9/"], { planName: eP.name });
    let eg = r.useRef(null),
        [ex, eR] = r.useState(null),
        [eM, eb] = r.useState(void 0),
        eL = r.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: V,
                unifiedSubscriptionDetailsNode: eg,
                setUnifiedPlainNoticeText: eR,
                setOverrideRenewalDate: eb,
            }),
            [V],
        ),
        {
            content: ej,
            isInvoiceBilledImmediately: eO,
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
                            content: (0, l.jsx)(el, {
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
                              content: (0, l.jsx)(es, {
                                  premiumSubscription: o,
                                  priceOptions: p,
                                  preventFetch: s,
                                  fractionalPremiumInfo: d,
                                  ...n,
                              }),
                              isInvoiceBilledImmediately: !0,
                              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                          }
                        : (0, M.Ge)(o, a, c)
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
                                content: (0, l.jsx)(ei, {
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
                  { hasOpenInvoice: B, showResumeSubscriptionView: eN, planId: U },
                  {
                      disabled: ef,
                      premiumSubscription: n,
                      newPlan: eP,
                      planGroup: Y,
                      fractionalPremiumInfo: e_,
                      priceOptions: Q,
                  },
                  eL,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eD = n?.eligiblePaymentGateways,
        eU = null != eD && eD.length > 0 && (null == X || null === eC) && z ? j.fU.SELECT_PAYMENT_METHOD : void 0,
        ek = r.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: a()({ [$.E4]: eu }),
                shouldUseUnifiedCheckoutUI: V,
            }),
            [n?.eligiblePaymentGateways, eu, V],
        ),
        eG = null != et || null != en,
        eF = r.useMemo(
            () =>
                eG
                    ? (0, l.jsx)(A.N, {
                          label: Z.intl.string(Z.t["mmDvV+"]),
                          onPaymentSourceAdd: D,
                          disabled: ef,
                          additionalPaymentSourceDropdownProps: ek,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: Q.paymentSourceId,
                      })
                    : null,
            [eG, Q.paymentSourceId, ek, D, ef],
        ),
        eY = null != n && (0, M.Ge)(n, U, Y),
        eB = V
            ? null != et && null != ee
                ? (0, l.jsx)(N.PI, {
                      overrideRenewalDate: eM,
                      planGroup: Y,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eP,
                      isGift: eE,
                      paymentSourceType: eC,
                      isInvoiceBilledImmediately: eO,
                      invoiceSummaryTypeWithPreview: {
                          type: w.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: et,
                          renewalInvoicePreview: ee,
                      },
                      hideLegalContent: eY && null != q,
                  })
                : null
            : (0, l.jsx)(L.A, {
                  isActive: F,
                  ref: G,
                  children: eY
                      ? (0, l.jsx)(ea, {
                            premiumSubscription: n,
                            newPlan: eP,
                            planGroup: Y,
                            priceOptions: Q,
                            preventFetch: ef,
                            disabled: ef,
                            isEEA: eI,
                            paymentSources: i,
                            setHasAcceptedTerms: k,
                        })
                      : (0, l.jsx)(m.A, {
                            onChange: k,
                            finePrint: (0, l.jsx)(p.A, {
                                subscriptionPlan: eP,
                                paymentSourceType: eC,
                                basePrice: (0, R.y8)(eP.id, !1, eE, ey),
                                currentSubscription: n,
                                planGroup: Y,
                            }),
                            forceShow: !0,
                            showPricingLink: eP.currency !== K.Yri.USD,
                            showWithdrawalWaiver: eI,
                            disabled: ef,
                            subscriptionPlan: eP,
                            currentSubscription: n,
                            planGroup: Y,
                        }),
              }),
        eW = !eN && eT && !ec,
        eH = r.useMemo(() => (eW ? (0, l.jsx)(f.P, { planSkuId: eP.skuId }) : null), [eW, eP.skuId]);
    return V
        ? (0, l.jsx)(ep, {
              disabled: ef,
              showFractionalPremiumBanner: eS,
              fractionalPremiumInfo: e_,
              isPremiumGroupPurchase: ec,
              paymentRestrictionBannerType: eU,
              invoiceError: q,
              unifiedPlainNoticeText: ex,
              invoicePreview: et,
              invoicePreviewComponent: ej,
              shouldShowPlanSelectAndPromoBanner: eW,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  ew.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eP,
              planId: U,
              priceOptions: Q,
              premiumPlanOptions: ev,
              unifiedSubscriptionDetailsNode: eg,
              isInvoiceBilledImmediately: eO,
              paymentMethodContent: eF,
              legalContent: eB,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(_.k, { location: "PremiumSwitchPlanReview", paymentSourceId: X }),
                  (0, l.jsxs)("div", {
                      className: $.Du,
                      children: [
                          (0, l.jsx)(j.je, { paymentRestrictionBannerType: eU }),
                          eW &&
                              (0, l.jsxs)("div", {
                                  children: [
                                      eH,
                                      (0, l.jsx)(O.$p, {
                                          disabled: ef,
                                          planOptions: ev,
                                          selectedPlanId: U,
                                          planGroup: Y,
                                          showTotal: !1,
                                          priceOptions: ey,
                                          handleClose: H,
                                      }),
                                      (0, l.jsx)(b.pK, {}),
                                  ],
                              }),
                          ec &&
                              (0, l.jsx)("div", {
                                  className: $.Ni,
                                  children: (0, l.jsx)(u.w, {
                                      type: "info",
                                      children: (0, l.jsx)(c.E, { variant: "text-sm/medium", children: (0, T.Nn)() }),
                                  }),
                              }),
                          (0, l.jsx)(d.D, { label: t, children: ej }),
                          (0, l.jsx)("div", { className: $.LC, children: eF }),
                          eB,
                      ],
                  }),
              ],
          });
}
