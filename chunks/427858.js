"use strict";
n.d(t, { A: () => z });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(376843),
    l = n(426398),
    u = n(666646),
    c = n(211159),
    d = n(937008),
    _ = n(566980),
    h = n(800471),
    f = n(222707),
    p = n(340034),
    E = n(216641),
    m = n(428262),
    g = n(615396),
    A = n(218075),
    I = n(299301),
    T = n(340287),
    S = n(289873),
    y = n(793574),
    C = n(688810),
    N = n(473617),
    v = n(270537),
    R = n(888751),
    O = n(458785),
    b = n(788868),
    D = n(375708),
    L = n(982772);
function w(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : T.createPortal(t, n);
}
function M() {
    return (0, i.jsx)(S.y, {});
}
function P(e, t) {
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
function k(e) {
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
    (0, N.E)(l);
    let { checkoutInvoicePreview: d, checkoutInvoiceError: _ } = (0, c.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, u.Tr)(d, _);
    let h = (0, m.J$)(n.paymentSourceId);
    if (null != d) {
        let e = (0, i.jsx)(O.m0, { renewalInvoice: d, isUpdate: !0, fractionalPremiumInfo: a }),
            t = (0, i.jsx)(O._J, { invoice: d, isPrepaidPaymentSource: h });
        return (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(w, { containerNode: o.current, children: e })] });
    }
    return (0, i.jsx)(M, {});
}
function U(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: s,
            priceOptions: a,
            fractionalPremiumInfo: o,
            preventFetch: l,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: d,
            setOverrideRenewalDate: _,
        } = e,
        { analyticsLocations: f } = (0, C.Ay)(),
        E = (0, m.Pg)(t, n.id, 1, new Set(s)),
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
                        analyticsLocation: y.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
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
            (0, N.E)({ fetchCheckoutInvoicePreviewRequest: l, fetchRenewalInvoicePreviewRequest: u });
            let {
                checkoutInvoicePreview: d,
                checkoutInvoiceError: _,
                renewalInvoicePreview: h,
                renewalInvoiceError: f,
            } = (0, c.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: r.useMemo(() => _ ?? f, [_, f]),
                proratedInvoicePreview: d,
                proratedInvoiceError: _,
                renewalInvoicePreview: h,
                renewalInvoiceError: f,
            };
        })({ premiumSubscription: t, newItems: E, priceOptions: a, preventFetch: l, analyticsLocations: f }),
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
    if ((x(_, { overrideRenewalDate: v }), P(d, { noticeCopy: S }), null != T)) return null;
    let R = (0, h.UB)(g, n);
    if (null == g || null == A || R) return (0, i.jsx)(M, {});
    let b = (0, m.J$)(a.paymentSourceId),
        D = (0, i.jsx)(O.m0, {
            proratedInvoice: g,
            renewalInvoice: A,
            overrideRenewalDate: v,
            fractionalPremiumInfo: o,
            isUpdate: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.W9, {
                invoiceSummaryTypeWithPreview: {
                    type: I.N$.PREMIUM_SWITCH_PLAN,
                    invoicePreview: g,
                    renewalInvoicePreview: A,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: b,
                subscriptionTrial: null,
            }),
            (0, i.jsx)(w, { containerNode: u.current, children: D }),
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
            setUnifiedPlainNoticeText: d,
            setOverrideRenewalDate: _,
            unifiedSubscriptionDetailsNode: h,
        } = e,
        { analyticsLocations: f } = (0, C.Ay)(),
        { renewalInvoicePreview: p, renewalInvoiceError: E } = (0, c.t4)((e) => ({
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
    (0, N.E)(g), (0, u.F0)(p, E);
    let { renewalDate: A, planSwitchNoticeCopy: I } = r.useMemo(() => {
        if (null == p) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = p.subscriptionPeriodStart;
        return (
            a.fractionalState === b.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: D.intl.format(D.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [p, a.fractionalState, a.endsAt]);
    if ((x(_, { overrideRenewalDate: A }), P(d, { noticeCopy: I }), null != E)) return null;
    if (null == p) return (0, i.jsx)(M, {});
    let T = (0, m.J$)(o.paymentSourceId),
        S = (0, i.jsx)(O.m0, {
            renewalInvoice: p,
            isUpdate: !0,
            fractionalPremiumInfo: a,
            overrideRenewalDate: A,
            defaultExpanded: !0,
        }),
        { lineItems: y } = (0, R.Ig)(p, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: T,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.Vm, { label: D.intl.string(L.default.eoXh7B), lineItems: y, currency: p.currency }),
            (0, i.jsx)(w, { containerNode: h.current, children: S }),
        ],
    });
}
function F(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: o,
            setUnifiedPlainNoticeText: l,
        } = e,
        { analyticsLocations: u } = (0, C.Ay)(),
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
                        preventFetch: s,
                        analyticsLocations: u,
                        analyticsLocation: y.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
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
                        analyticsLocation: y.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, s, u],
        );
    (0, N.E)(d);
    let {
        resumeInvoicePreview: _,
        renewalInvoicePreview: h,
        primaryInvoiceError: f,
    } = (0, c.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((P(l, { noticeCopy: r.useMemo(() => D.intl.string(D.t.spIYou), []) }), null != f)) return null;
    if (null == _ || null == h) return (0, i.jsx)(M, {});
    let p = (0, m.J$)(n.paymentSourceId),
        E = (0, i.jsx)(O.m0, { renewalInvoice: h, isUpdate: !0, fractionalPremiumInfo: a }),
        g = (0, i.jsx)(O._J, { invoice: _, isPrepaidPaymentSource: p });
    return (0, i.jsxs)(i.Fragment, { children: [g, (0, i.jsx)(w, { containerNode: o.current, children: E })] });
}
n(321073);
var V = n(38785),
    B = n(71867),
    j = n(622631),
    H = n(755880),
    Y = n(134638),
    W = n(906234);
function K(e) {
    let {
            disabled: t,
            showFractionalPremiumBanner: n,
            fractionalPremiumInfo: s,
            isPremiumGroupPurchase: a,
            paymentRestrictionBannerType: o,
            invoiceError: l,
            unifiedPlainNoticeText: u,
            invoicePreview: c,
            invoicePreviewComponent: d,
            shouldShowPlanSelectAndPromoBanner: _,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: h,
            newPlan: E,
            planId: g,
            priceOptions: T,
            premiumPlanOptions: S,
            unifiedSubscriptionDetailsNode: y,
            isInvoiceBilledImmediately: C,
            paymentMethodContent: N,
            legalContent: v,
        } = e,
        R = r.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, i.jsx)(p.l$, { fractionalPremiumInfo: s }),
                        key: "fractional-premium-notice",
                    }),
                a && e.push({ type: "info", message: (0, f.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({ type: "warning", message: (0, A.i)(o), key: "payment-restriction-banner-notice" }),
                null != l && e.push({ type: "critical", message: l.message, key: "invoice-error-notice" }),
                e
            );
        }, [a, o, l, n, s]),
        { priceOptions: b, planPricesLoading: w } = (0, m.Pr)(T, c, l),
        M = r.useMemo(() => (_ ? (0, i.jsx)(B.P, { planSkuId: E.skuId }) : null), [_, E.skuId]),
        P = (0, W.G)(g),
        x = r.useMemo(() => (P ? (0, i.jsx)(H.a, {}) : null), [P]),
        k = r.useMemo(() => (null != M ? M : null != x ? x : null), [M, x]),
        U = (0, m.J$)(T.paymentSourceId),
        G = null,
        F = null;
    _
        ? (F = (0, i.jsx)(j.X, {
              disabled: t,
              headingSubText: u,
              planOptions: S,
              selectedPlanId: g,
              showPlanStatusSubText: !0,
              priceOptions: b,
              planPricesLoading: w,
          }))
        : null != c &&
          (G = (0, i.jsx)(Y._, {
              type: I.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: E,
              isPrepaidPaymentSource: U,
              isPremiumGroupPurchase: a,
              bottomSubText: u,
          }));
    let K = h ? d : (0, i.jsx)("div", { ref: y }),
        $ = h ? null : d;
    return (0, i.jsx)(V.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: R,
        paymentMethodContent: N,
        subscriptionDetailsContent: K,
        purchaseItemContent: G,
        planSelectContent: F,
        invoiceSummaryContent: $,
        legalContent: v,
        invoiceTotalDueLabel: C ? D.intl.string(L.default.R0cZsM) : D.intl.string(L.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, O.U5)(c) : void 0,
        promotionalNoticeContent: k,
    });
}
var $ = n(845347);
function z(e) {
    let {
            premiumSubscription: t,
            handlePaymentSourceAdd: n,
            verifiedPlanId: s,
            selectedPlan: T,
            planGroup: S,
            hasOpenInvoice: y,
            purchaseState: C,
        } = e,
        N = (0, u.mx)(),
        { paymentSources: v, hasPaymentSources: R } = (0, l.jm)(),
        {
            selectedSkuId: O,
            paymentSourceId: b,
            priceOptions: L,
            renewalInvoicePreview: w,
            checkoutInvoicePreview: M,
            checkoutInvoiceError: P,
        } = (0, c.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            renewalInvoicePreview: e.renewalInvoicePreview,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutInvoiceError: e.checkoutInvoiceError,
        })),
        { isPremiumPurchase: x, isPremiumGroupPurchase: V } = (0, c.t4)((e) => e.get("selectedPlanAttributes")),
        B = (0, c.t4)((e) => e.defaultPlanId),
        j = (0, c.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        { isGift: H } = (0, d.Pv)(),
        Y = (0, E.g)(v, b),
        { showFractionalPremiumBanner: W, fractionalPremiumInfo: z } = (0, f._V)({
            premiumSubscription: t,
            selectedPlanId: s,
            planGroup: S,
            isGift: H,
        }),
        q = C === _.h.PURCHASING || C === _.h.COMPLETED,
        Z = (0, h.vT)({ isTrial: !1, isGift: H, selectedSkuId: O, startedPaymentFlowWithPaymentSources: j }),
        X = t?.isPausedAllowsResumeButNotUpdates,
        Q = r.useMemo(() => (0, m.Tm)({ skuId: O, isPremium: x, defaultPlanId: B }), [O, B, x]),
        J = r.useRef(null),
        [ee, et] = r.useState(null),
        [en, ei] = r.useState(void 0),
        er = r.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: J, setUnifiedPlainNoticeText: et, setOverrideRenewalDate: ei }),
            [],
        ),
        {
            content: es,
            isInvoiceBilledImmediately: ea,
            ...eo
        } = null != t
            ? (function (e, t, n) {
                  let { hasOpenInvoice: r, showResumeSubscriptionView: s, planId: a } = e,
                      {
                          disabled: o,
                          premiumSubscription: l,
                          newPlan: u,
                          planGroup: c,
                          fractionalPremiumInfo: d,
                          priceOptions: _,
                      } = t;
                  return r
                      ? {
                            content: (0, i.jsx)(k, {
                                premiumSubscription: l,
                                priceOptions: _,
                                preventFetch: !1,
                                fractionalPremiumInfo: d,
                                ...n,
                            }),
                            isInvoiceBilledImmediately: !0,
                            shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                        }
                      : s
                        ? {
                              content: (0, i.jsx)(F, {
                                  premiumSubscription: l,
                                  priceOptions: _,
                                  preventFetch: o,
                                  fractionalPremiumInfo: d,
                                  ...n,
                              }),
                              isInvoiceBilledImmediately: !0,
                              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                          }
                        : (0, g.Ge)(l, a, c)
                          ? {
                                content: (0, i.jsx)(U, {
                                    premiumSubscription: l,
                                    newPlan: u,
                                    planGroup: c,
                                    priceOptions: _,
                                    fractionalPremiumInfo: d,
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
                                    planGroup: c,
                                    fractionalPremiumInfo: d,
                                    priceOptions: _,
                                    preventFetch: o,
                                    ...n,
                                }),
                            };
              })(
                  { hasOpenInvoice: y, showResumeSubscriptionView: X, planId: s },
                  {
                      disabled: q,
                      premiumSubscription: t,
                      newPlan: T,
                      planGroup: S,
                      fractionalPremiumInfo: z,
                      priceOptions: L,
                  },
                  er,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        el = t?.eligiblePaymentGateways,
        eu = null != el && el.length > 0 && (null == b || null === Y) && R ? A.fU.SELECT_PAYMENT_METHOD : void 0,
        ec = r.useMemo(
            () => ({ paymentGatewayRestrictions: t?.eligiblePaymentGateways, className: a()({ [$.E]: x }) }),
            [t?.eligiblePaymentGateways, x],
        ),
        ed = null != M || null != P,
        e_ = r.useMemo(
            () =>
                ed
                    ? (0, i.jsx)(o.N, {
                          label: D.intl.string(D.t["mmDvV+"]),
                          onPaymentSourceAdd: n,
                          disabled: q,
                          additionalPaymentSourceDropdownProps: ec,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: L.paymentSourceId,
                      })
                    : null,
            [ed, L.paymentSourceId, ec, n, q],
        ),
        eh = null != t && (0, g.Ge)(t, s, S),
        ef =
            null != M && null != w
                ? (0, i.jsx)(p.PI, {
                      overrideRenewalDate: en,
                      planGroup: S,
                      activeSubscription: t,
                      isTrial: !1,
                      plan: T,
                      isGift: H,
                      paymentSourceType: Y,
                      isInvoiceBilledImmediately: ea,
                      invoiceSummaryTypeWithPreview: {
                          type: I.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: M,
                          renewalInvoicePreview: w,
                      },
                      hideLegalContent: eh && null != N,
                  })
                : null;
    return (0, i.jsx)(K, {
        disabled: q,
        showFractionalPremiumBanner: W,
        fractionalPremiumInfo: z,
        isPremiumGroupPurchase: V,
        paymentRestrictionBannerType: eu,
        invoiceError: N,
        unifiedPlainNoticeText: ee,
        invoicePreview: M,
        invoicePreviewComponent: es,
        shouldShowPlanSelectAndPromoBanner: !X && Z && !V,
        shouldRenderInvoicePreviewSubscriptionDetailsDirectly: eo.shouldRenderToUnifiedSubscriptionDetailsDirectly,
        newPlan: T,
        planId: s,
        priceOptions: L,
        premiumPlanOptions: Q,
        unifiedSubscriptionDetailsNode: J,
        isInvoiceBilledImmediately: ea,
        paymentMethodContent: e_,
        legalContent: ef,
    });
}
