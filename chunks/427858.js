"use strict";
n.d(t, { A: () => z });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(319668),
    l = n(426398),
    u = n(666646),
    d = n(650170),
    c = n(937008),
    _ = n(566980),
    h = n(800471),
    f = n(222707),
    E = n(340034),
    p = n(216641),
    m = n(428262),
    g = n(615396),
    A = n(218075),
    I = n(299301),
    T = n(340287),
    S = n(289873),
    N = n(793574),
    C = n(688810),
    y = n(473617),
    v = n(848584),
    R = n(888751),
    O = n(458785),
    b = n(202541),
    L = n(375708),
    D = n(327105);
function P(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : T.createPortal(t, n);
}
function w() {
    return (0, i.jsx)(S.y, {});
}
function M(e, t) {
    let { noticeCopy: n } = t;
    r.useEffect(() => {
        null != n ? e(n) : e(null);
    }, [e, n]);
}
function x(e, t) {
    let { overrideRenewalDate: n } = t;
    r.useEffect(() => {
        e(n);
    }, [e, n]);
}
function U(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: o,
        } = e,
        l = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "premium_checkout_invoice_get_request",
                    params: { subscriptionId: t.id, preventFetch: s },
                },
                fetchRenewalInvoicePreviewRequest: null,
                shouldAllowNullState: !0,
            }),
            [t.id, s],
        );
    (0, y.E)(l);
    let { checkoutInvoicePreview: c, checkoutInvoiceError: _ } = (0, d.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, u.Tr)(c, _);
    let h = (0, m.J$)(n.paymentSourceId);
    if (null != c) {
        let e = (0, i.jsx)(O.m0, { renewalInvoice: c, isUpdate: !0, fractionalPremiumInfo: a }),
            t = (0, i.jsx)(O._J, { invoice: c, isPrepaidPaymentSource: h });
        return (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(P, { containerNode: o.current, children: e })] });
    }
    return (0, i.jsx)(w, {});
}
function k(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: s,
            priceOptions: a,
            fractionalPremiumInfo: o,
            preventFetch: l,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: c,
            setOverrideRenewalDate: _,
        } = e,
        { analyticsLocations: f } = (0, C.Ay)(),
        p = (0, m.Pg)(t, n.id, 1, new Set(s)),
        {
            proratedInvoicePreview: g,
            renewalInvoicePreview: A,
            primaryInvoiceError: T,
        } = (function (e) {
            let { premiumSubscription: t, newItems: n, priceOptions: i, preventFetch: s, analyticsLocations: a } = e,
                o = r.useMemo(
                    () => ({
                        subscriptionId: t.id,
                        items: n,
                        paymentSourceId: i.paymentSourceId,
                        currency: i.currency,
                        preventFetch: s,
                        analyticsLocations: a,
                        analyticsLocation: N.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
                    }),
                    [t.id, n, i.paymentSourceId, i.currency, s, a],
                ),
                { checkoutInvoicePreviewRequest: l, renewalInvoicePreviewRequest: u } = r.useMemo(
                    () => ({
                        checkoutInvoicePreviewRequest: {
                            type: "premium_checkout_invoice",
                            params: { ...o, renewal: !1, applyEntitlements: !0 },
                        },
                        renewalInvoicePreviewRequest: {
                            type: "premium_renewal_invoice",
                            params: { ...o, renewal: !0 },
                        },
                    }),
                    [o],
                );
            (0, y.E)({ fetchCheckoutInvoicePreviewRequest: l, fetchRenewalInvoicePreviewRequest: u });
            let {
                checkoutInvoicePreview: c,
                checkoutInvoiceError: _,
                renewalInvoicePreview: h,
                renewalInvoiceError: f,
            } = (0, d.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: r.useMemo(() => _ ?? f, [_, f]),
                proratedInvoicePreview: c,
                proratedInvoiceError: _,
                renewalInvoicePreview: h,
                renewalInvoiceError: f,
            };
        })({ premiumSubscription: t, newItems: p, priceOptions: a, preventFetch: l, analyticsLocations: f }),
        { planSwitchNoticeCopy: S, overrideRenewalDate: v } = r.useMemo(() => {
            let e;
            return (null !== o &&
                null !== g &&
                (e = (0, m._e)(g.subscriptionPeriodEnd, o.unactivatedUnits, o.currentEntitlementEndsAt)),
            null != g && null != A)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, O.DK)({
                          proratedInvoice: g,
                          renewalInvoice: A,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [g, A, o]);
    if ((x(_, { overrideRenewalDate: v }), M(c, { noticeCopy: S }), null != T)) return null;
    let R = (0, h.UB)(g, n);
    if (null == g || null == A || R) return (0, i.jsx)(w, {});
    let b = (0, m.J$)(a.paymentSourceId),
        L = (0, i.jsx)(O.m0, {
            proratedInvoice: g,
            renewalInvoice: A,
            overrideRenewalDate: v,
            fractionalPremiumInfo: o,
            isUpdate: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.W9, {
                invoiceSummaryTypeWithPreview: {
                    type: I.N$.PREMIUM_SWITCH_PLAN,
                    invoicePreview: g,
                    renewalInvoicePreview: A,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: b,
                subscriptionTrial: null,
            }),
            (0, i.jsx)(P, { containerNode: u.current, children: L }),
        ],
    });
}
function G(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: s,
            fractionalPremiumInfo: a,
            priceOptions: o,
            preventFetch: l,
            setUnifiedPlainNoticeText: c,
            setOverrideRenewalDate: _,
            unifiedSubscriptionDetailsNode: h,
        } = e,
        { analyticsLocations: f } = (0, C.Ay)(),
        { renewalInvoicePreview: E, renewalInvoiceError: p } = (0, d.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        g = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: null,
                fetchRenewalInvoicePreviewRequest: {
                    type: "premium_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        items: (0, m.Pg)(t, n.id, 1, new Set(s)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: o.paymentSourceId,
                        currency: o.currency,
                        preventFetch: l,
                        analyticsLocations: f,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
                    },
                },
                shouldAllowNullState: !0,
            }),
            [t, n.id, s, o.paymentSourceId, o.currency, l, f],
        );
    (0, y.E)(g), (0, u.F0)(E, p);
    let { renewalDate: A, planSwitchNoticeCopy: I } = r.useMemo(() => {
        if (null == E) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = E.subscriptionPeriodStart;
        return (
            a.fractionalState === b.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: L.intl.format(L.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [E, a.fractionalState, a.endsAt]);
    if ((x(_, { overrideRenewalDate: A }), M(c, { noticeCopy: I }), null != p)) return null;
    if (null == E) return (0, i.jsx)(w, {});
    let T = (0, m.J$)(o.paymentSourceId),
        S = (0, i.jsx)(O.m0, {
            renewalInvoice: E,
            isUpdate: !0,
            fractionalPremiumInfo: a,
            overrideRenewalDate: A,
            defaultExpanded: !0,
        }),
        { lineItems: N } = (0, R.Ig)(E, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: T,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.Vm, { label: L.intl.string(D.default.eoXh7B), lineItems: N, currency: E.currency }),
            (0, i.jsx)(P, { containerNode: h.current, children: S }),
        ],
    });
}
function V(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: o,
            setUnifiedPlainNoticeText: l,
        } = e,
        { analyticsLocations: u } = (0, C.Ay)(),
        c = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "premium_checkout_invoice",
                    params: {
                        subscriptionId: t.id,
                        renewal: !0,
                        applyEntitlements: !0,
                        paymentSourceId: n.paymentSourceId,
                        currency: n.currency,
                        preventFetch: s,
                        analyticsLocations: u,
                        analyticsLocation: N.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
                    },
                },
                fetchRenewalInvoicePreviewRequest: {
                    type: "premium_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        renewal: !0,
                        paymentSourceId: n.paymentSourceId,
                        currency: n.currency,
                        preventFetch: s,
                        analyticsLocations: u,
                        analyticsLocation: N.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, s, u],
        );
    (0, y.E)(c);
    let {
        resumeInvoicePreview: _,
        renewalInvoicePreview: h,
        primaryInvoiceError: f,
    } = (0, d.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((M(l, { noticeCopy: r.useMemo(() => L.intl.string(L.t.spIYou), []) }), null != f)) return null;
    if (null == _ || null == h) return (0, i.jsx)(w, {});
    let E = (0, m.J$)(n.paymentSourceId),
        p = (0, i.jsx)(O.m0, { renewalInvoice: h, isUpdate: !0, fractionalPremiumInfo: a }),
        g = (0, i.jsx)(O._J, { invoice: _, isPrepaidPaymentSource: E });
    return (0, i.jsxs)(i.Fragment, { children: [g, (0, i.jsx)(P, { containerNode: o.current, children: p })] });
}
n(321073);
var F = n(38785),
    B = n(577381),
    j = n(622631),
    H = n(755880),
    W = n(134638),
    Y = n(906234);
function K(e) {
    let {
            disabled: t,
            showFractionalPremiumBanner: n,
            fractionalPremiumInfo: s,
            isPremiumGroupPurchase: a,
            paymentRestrictionBannerType: o,
            invoiceError: l,
            unifiedPlainNoticeText: u,
            invoicePreview: d,
            invoicePreviewComponent: c,
            shouldShowPlanSelectAndPromoBanner: _,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: h,
            newPlan: p,
            planId: g,
            priceOptions: T,
            premiumPlanOptions: S,
            unifiedSubscriptionDetailsNode: N,
            isInvoiceBilledImmediately: C,
            paymentMethodContent: y,
            legalContent: v,
            isInPastDueCheckout: R,
        } = e,
        b = r.useMemo(() => {
            let e = [];
            return (
                R &&
                    e.push({
                        type: "warning",
                        message: L.intl.string(D.default["yrk+N6"]),
                        key: "past-due-restore-notice",
                    }),
                n &&
                    e.push({
                        directContent: (0, i.jsx)(E.l$, { fractionalPremiumInfo: s }),
                        key: "fractional-premium-notice",
                    }),
                a && e.push({ type: "info", message: (0, f.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({ type: "warning", message: (0, A.i)(o), key: "payment-restriction-banner-notice" }),
                null != l && e.push({ type: "critical", message: l.message, key: "invoice-error-notice" }),
                e
            );
        }, [R, a, o, l, n, s]),
        { priceOptions: P, planPricesLoading: w } = (0, m.Pr)(T, d, l),
        M = (0, B.i)({ planSkuId: p.skuId, invoice: d }),
        x = r.useMemo(() => (_ && null != M ? M : null), [_, M]),
        U = (0, Y.G)(g),
        k = r.useMemo(() => (U ? (0, i.jsx)(H.a, {}) : null), [U]),
        G = r.useMemo(() => (null != x ? x : null != k ? k : null), [x, k]),
        V = (0, m.J$)(T.paymentSourceId),
        K = null,
        $ = null,
        z = R ? null : u;
    _
        ? ($ = (0, i.jsx)(j.X, {
              disabled: t,
              headingSubText: z,
              planOptions: S,
              selectedPlanId: g,
              showPlanStatusSubText: !0,
              priceOptions: P,
              planPricesLoading: w,
          }))
        : null != d &&
          (K = (0, i.jsx)(W._, {
              type: I.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: d,
              subscriptionPlan: p,
              isPrepaidPaymentSource: V,
              isPremiumGroupPurchase: a,
              bottomSubText: z,
          }));
    let q = h ? c : (0, i.jsx)("div", { ref: N }),
        Z = h ? null : c;
    return (0, i.jsx)(F.T, {
        shouldShowGlobalNotices: !0,
        showUpperNoticesAboveGlobalNotices: R,
        upperInlineNoticeProps: b,
        paymentMethodContent: y,
        subscriptionDetailsContent: q,
        purchaseItemContent: K,
        planSelectContent: $,
        invoiceSummaryContent: Z,
        legalContent: v,
        invoiceTotalDueLabel: C ? L.intl.string(D.default.R0cZsM) : L.intl.string(D.default["11g67A"]),
        invoiceTotalDueValue: null != d ? (0, O.U5)(d) : void 0,
        promotionalNoticeContent: G,
    });
}
var $ = n(207715);
function z(e) {
    let {
            handlePaymentSourceAdd: t,
            verifiedPlanId: n,
            selectedPlan: s,
            planGroup: T,
            hasOpenInvoice: S,
            purchaseState: N,
            isInPastDueCheckout: C,
        } = e,
        y = (0, u.mx)(),
        { paymentSources: v, hasPaymentSources: R } = (0, l.jm)(),
        {
            selectedSkuId: O,
            paymentSourceId: b,
            priceOptions: P,
            renewalInvoicePreview: w,
            checkoutInvoicePreview: M,
            checkoutInvoiceError: x,
            activeSubscription: F,
        } = (0, d.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            renewalInvoicePreview: e.renewalInvoicePreview,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutInvoiceError: e.checkoutInvoiceError,
            activeSubscription: e.activeSubscription,
        })),
        { isPremiumPurchase: B, isPremiumGroupPurchase: j } = (0, d.t4)((e) => e.get("selectedPlanAttributes")),
        H = (0, d.t4)((e) => e.defaultPlanId),
        W = (0, d.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        { isGift: Y } = (0, c.Pv)(),
        z = (0, p.g)(v, b),
        { showFractionalPremiumBanner: q, fractionalPremiumInfo: Z } = (0, f._V)({
            premiumSubscription: F,
            selectedPlanId: n,
            planGroup: T,
            isGift: Y,
        }),
        X = N === _.h.PURCHASING || N === _.h.COMPLETED,
        Q = (0, h.vT)({ isTrial: !1, isGift: Y, selectedSkuId: O, startedPaymentFlowWithPaymentSources: W }),
        J = F?.isPausedAllowsResumeButNotUpdates,
        ee = r.useMemo(() => (0, m.Tm)({ skuId: O, isPremium: B, defaultPlanId: H }), [O, H, B]),
        et = r.useRef(null),
        [en, ei] = r.useState(null),
        [er, es] = r.useState(void 0),
        ea = r.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: et, setUnifiedPlainNoticeText: ei, setOverrideRenewalDate: es }),
            [],
        ),
        {
            content: eo,
            isInvoiceBilledImmediately: el,
            ...eu
        } = null != F
            ? (function (e, t, n) {
                  let { hasOpenInvoice: r, showResumeSubscriptionView: s, planId: a } = e,
                      {
                          disabled: o,
                          premiumSubscription: l,
                          newPlan: u,
                          planGroup: d,
                          fractionalPremiumInfo: c,
                          priceOptions: _,
                      } = t;
                  return r
                      ? {
                            content: (0, i.jsx)(U, {
                                premiumSubscription: l,
                                priceOptions: _,
                                preventFetch: !1,
                                fractionalPremiumInfo: c,
                                ...n,
                            }),
                            isInvoiceBilledImmediately: !0,
                            shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                        }
                      : s
                        ? {
                              content: (0, i.jsx)(V, {
                                  premiumSubscription: l,
                                  priceOptions: _,
                                  preventFetch: o,
                                  fractionalPremiumInfo: c,
                                  ...n,
                              }),
                              isInvoiceBilledImmediately: !0,
                              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                          }
                        : (0, g.Ge)(l, a, d)
                          ? {
                                content: (0, i.jsx)(k, {
                                    premiumSubscription: l,
                                    newPlan: u,
                                    planGroup: d,
                                    priceOptions: _,
                                    fractionalPremiumInfo: c,
                                    preventFetch: o,
                                    ...n,
                                }),
                                isInvoiceBilledImmediately: !0,
                                shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                            }
                          : {
                                isInvoiceBilledImmediately: !1,
                                shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                                content: (0, i.jsx)(G, {
                                    premiumSubscription: l,
                                    newPlan: u,
                                    planGroup: d,
                                    fractionalPremiumInfo: c,
                                    priceOptions: _,
                                    preventFetch: o,
                                    ...n,
                                }),
                            };
              })(
                  { hasOpenInvoice: S, showResumeSubscriptionView: J, planId: n },
                  {
                      disabled: X,
                      premiumSubscription: F,
                      newPlan: s,
                      planGroup: T,
                      fractionalPremiumInfo: Z,
                      priceOptions: P,
                  },
                  ea,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ed = F?.eligiblePaymentGateways,
        ec = null != ed && ed.length > 0 && (null == b || null === z) && R ? A.fU.SELECT_PAYMENT_METHOD : void 0,
        e_ = null != F ? F.paymentSourceId : null,
        eh = r.useMemo(
            () => ({
                paymentGatewayRestrictions: F?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: C
                    ? (e) => e.map((e) => (e.id === e_ ? { ...e, tooltipText: L.intl.string(D.default["hjsn+s"]) } : e))
                    : void 0,
                className: a()({ [$.E]: B }),
            }),
            [F?.eligiblePaymentGateways, B, C, e_],
        ),
        ef = null != M || null != x,
        eE = r.useMemo(
            () =>
                ef
                    ? (0, i.jsx)(o.N, {
                          label: L.intl.string(L.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: X,
                          additionalPaymentSourceDropdownProps: eh,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: P.paymentSourceId,
                      })
                    : null,
            [ef, P.paymentSourceId, eh, t, X],
        ),
        ep = null != F && (0, g.Ge)(F, n, T),
        em =
            null != M && null != w
                ? (0, i.jsx)(E.PI, {
                      overrideRenewalDate: er,
                      activeSubscription: F,
                      isTrial: !1,
                      plan: s,
                      isGift: Y,
                      paymentSourceType: z,
                      isInvoiceBilledImmediately: el,
                      invoiceSummaryTypeWithPreview: {
                          type: I.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: M,
                          renewalInvoicePreview: w,
                      },
                      hideLegalContent: ep && null != y,
                  })
                : null,
        eg = !J && Q && !j && !C;
    return (0, i.jsx)(K, {
        disabled: X,
        isInPastDueCheckout: C,
        showFractionalPremiumBanner: q,
        fractionalPremiumInfo: Z,
        isPremiumGroupPurchase: j,
        paymentRestrictionBannerType: ec,
        invoiceError: y,
        unifiedPlainNoticeText: en,
        invoicePreview: M,
        invoicePreviewComponent: eo,
        shouldShowPlanSelectAndPromoBanner: eg,
        shouldRenderInvoicePreviewSubscriptionDetailsDirectly: eu.shouldRenderToUnifiedSubscriptionDetailsDirectly,
        newPlan: s,
        planId: n,
        priceOptions: P,
        premiumPlanOptions: ee,
        unifiedSubscriptionDetailsNode: et,
        isInvoiceBilledImmediately: el,
        paymentMethodContent: eE,
        legalContent: em,
    });
}
