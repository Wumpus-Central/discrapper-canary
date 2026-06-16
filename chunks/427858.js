"use strict";
n.d(t, { A: () => X });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(71804),
    u = n(376843),
    c = n(426398),
    d = n(666646),
    _ = n(211159),
    h = n(937008),
    f = n(566980),
    p = n(800471),
    E = n(222707),
    m = n(340034),
    g = n(216641),
    A = n(97352),
    I = n(428262),
    T = n(615396),
    S = n(218075),
    y = n(299301),
    C = n(340287),
    N = n(289873),
    v = n(793574),
    R = n(688810),
    O = n(473617),
    b = n(848584),
    D = n(888751),
    L = n(458785),
    w = n(788868),
    M = n(375708),
    P = n(327105);
function x(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : C.createPortal(t, n);
}
let k = () => (0, i.jsx)(N.y, {}),
    U = (e, t) => {
        let { noticeCopy: n } = t;
        r.useEffect(() => {
            null != n ? e(n) : e(null);
        }, [e, n]);
    },
    G = (e, t) => {
        let { overrideRenewalDate: n } = t;
        r.useEffect(() => {
            e(n);
        }, [e, n]);
    };
function F(e) {
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
    (0, O.E)(l);
    let { checkoutInvoicePreview: u, checkoutInvoiceError: c } = (0, _.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, d.Tr)(u, c);
    let h = (0, I.J$)(n.paymentSourceId);
    if (null != u) {
        let e = (0, i.jsx)(L.m0, { renewalInvoice: u, isUpdate: !0, fractionalPremiumInfo: a }),
            t = (0, i.jsx)(L._J, { invoice: u, isPrepaidPaymentSource: h });
        return (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(x, { containerNode: o.current, children: e })] });
    }
    return (0, i.jsx)(k, {});
}
function V(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: s,
            priceOptions: a,
            fractionalPremiumInfo: o,
            preventFetch: l,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: c,
            setOverrideRenewalDate: d,
        } = e,
        { analyticsLocations: h } = (0, R.Ay)(),
        f = (0, I.Pg)(t, n.id, 1, new Set(s)),
        {
            proratedInvoicePreview: E,
            renewalInvoicePreview: g,
            primaryInvoiceError: A,
        } = ((e) => {
            let { premiumSubscription: t, newItems: n, priceOptions: i, preventFetch: s, analyticsLocations: a } = e,
                o = r.useMemo(
                    () => ({
                        subscriptionId: t.id,
                        items: n,
                        paymentSourceId: i.paymentSourceId,
                        currency: i.currency,
                        preventFetch: s,
                        analyticsLocations: a,
                        analyticsLocation: v.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
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
            (0, O.E)({ fetchCheckoutInvoicePreviewRequest: l, fetchRenewalInvoicePreviewRequest: u });
            let {
                checkoutInvoicePreview: c,
                checkoutInvoiceError: d,
                renewalInvoicePreview: h,
                renewalInvoiceError: f,
            } = (0, _.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: r.useMemo(() => d ?? f, [d, f]),
                proratedInvoicePreview: c,
                proratedInvoiceError: d,
                renewalInvoicePreview: h,
                renewalInvoiceError: f,
            };
        })({ premiumSubscription: t, newItems: f, priceOptions: a, preventFetch: l, analyticsLocations: h }),
        { planSwitchNoticeCopy: T, overrideRenewalDate: S } = r.useMemo(() => {
            let e;
            return (null !== o &&
                null !== E &&
                (e = (0, I._e)(E.subscriptionPeriodEnd, o.unactivatedUnits, o.currentEntitlementEndsAt)),
            null != E && null != g)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, L.DK)({
                          proratedInvoice: E,
                          renewalInvoice: g,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [E, g, o]);
    if ((G(d, { overrideRenewalDate: S }), U(c, { noticeCopy: T }), null != A)) return null;
    let C = (0, p.UB)(E, n);
    if (null == E || null == g || C) return (0, i.jsx)(k, {});
    let N = (0, I.J$)(a.paymentSourceId),
        b = (0, i.jsx)(L.m0, {
            proratedInvoice: E,
            renewalInvoice: g,
            overrideRenewalDate: S,
            fractionalPremiumInfo: o,
            isUpdate: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.W9, {
                invoiceSummaryTypeWithPreview: {
                    type: y.N$.PREMIUM_SWITCH_PLAN,
                    invoicePreview: E,
                    renewalInvoicePreview: g,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: N,
                subscriptionTrial: null,
            }),
            (0, i.jsx)(x, { containerNode: u.current, children: b }),
        ],
    });
}
function B(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: s,
            fractionalPremiumInfo: a,
            priceOptions: o,
            preventFetch: l,
            setUnifiedPlainNoticeText: u,
            setOverrideRenewalDate: c,
            unifiedSubscriptionDetailsNode: h,
        } = e,
        { analyticsLocations: f } = (0, R.Ay)(),
        { renewalInvoicePreview: p, renewalInvoiceError: E } = (0, _.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        m = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: null,
                fetchRenewalInvoicePreviewRequest: {
                    type: "premium_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        items: (0, I.Pg)(t, n.id, 1, new Set(s)),
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
    (0, O.E)(m), (0, d.F0)(p, E);
    let { renewalDate: g, planSwitchNoticeCopy: A } = r.useMemo(() => {
        if (null == p) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = p.subscriptionPeriodStart;
        return (
            a.fractionalState === w.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: M.intl.format(M.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [p, a.fractionalState, a.endsAt]);
    if ((G(c, { overrideRenewalDate: g }), U(u, { noticeCopy: A }), null != E)) return null;
    if (null == p) return (0, i.jsx)(k, {});
    let T = (0, I.J$)(o.paymentSourceId),
        S = (0, i.jsx)(L.m0, {
            renewalInvoice: p,
            isUpdate: !0,
            fractionalPremiumInfo: a,
            overrideRenewalDate: g,
            defaultExpanded: !0,
        }),
        { lineItems: y } = (0, D.Ig)(p, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: T,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b.Vm, { label: M.intl.string(P.default.eoXh7B), lineItems: y, currency: p.currency }),
            (0, i.jsx)(x, { containerNode: h.current, children: S }),
        ],
    });
}
function j(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: o,
            setUnifiedPlainNoticeText: l,
        } = e,
        { analyticsLocations: u } = (0, R.Ay)(),
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
                        analyticsLocation: v.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
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
                        analyticsLocation: v.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, s, u],
        );
    (0, O.E)(c);
    let {
        resumeInvoicePreview: d,
        renewalInvoicePreview: h,
        primaryInvoiceError: f,
    } = (0, _.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((U(l, { noticeCopy: r.useMemo(() => M.intl.string(M.t.spIYou), []) }), null != f)) return null;
    if (null == d || null == h) return (0, i.jsx)(k, {});
    let p = (0, I.J$)(n.paymentSourceId),
        E = (0, i.jsx)(L.m0, { renewalInvoice: h, isUpdate: !0, fractionalPremiumInfo: a }),
        m = (0, i.jsx)(L._J, { invoice: d, isPrepaidPaymentSource: p });
    return (0, i.jsxs)(i.Fragment, { children: [m, (0, i.jsx)(x, { containerNode: o.current, children: E })] });
}
n(321073);
var H = n(274971),
    Y = n(71867),
    W = n(622631),
    K = n(755880),
    $ = n(134638),
    z = n(906234);
let q = (e) => {
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
            newPlan: f,
            planId: p,
            priceOptions: g,
            premiumPlanOptions: A,
            unifiedSubscriptionDetailsNode: T,
            isInvoiceBilledImmediately: C,
            paymentMethodContent: N,
            legalContent: v,
        } = e,
        R = r.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, i.jsx)(m.l$, { fractionalPremiumInfo: s }),
                        key: "fractional-premium-notice",
                    }),
                a && e.push({ type: "info", message: (0, E.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({ type: "warning", message: (0, S.i)(o), key: "payment-restriction-banner-notice" }),
                null != l && e.push({ type: "critical", message: l.message, key: "invoice-error-notice" }),
                e
            );
        }, [a, o, l, n, s]),
        { priceOptions: O, planPricesLoading: b } = (0, I.Pr)(g, c, l),
        D = r.useMemo(() => (_ ? (0, i.jsx)(Y.P, { planSkuId: f.skuId }) : null), [_, f.skuId]),
        w = (0, z.G)(p),
        x = r.useMemo(() => (w ? (0, i.jsx)(K.a, {}) : null), [w]),
        k = r.useMemo(() => (null != D ? D : null != x ? x : null), [D, x]),
        U = (0, I.J$)(g.paymentSourceId),
        G = null,
        F = null;
    _
        ? (F = (0, i.jsx)(W.X, {
              disabled: t,
              headingSubText: u,
              planOptions: A,
              selectedPlanId: p,
              showPlanStatusSubText: !0,
              priceOptions: O,
              planPricesLoading: b,
          }))
        : null != c &&
          (G = (0, i.jsx)($._, {
              type: y.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: f,
              isPrepaidPaymentSource: U,
              isPremiumGroupPurchase: a,
              bottomSubText: u,
          }));
    let V = h ? d : (0, i.jsx)("div", { ref: T }),
        B = h ? null : d;
    return (0, i.jsx)(H.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: R,
        paymentMethodContent: N,
        subscriptionDetailsContent: V,
        purchaseItemContent: G,
        planSelectContent: F,
        invoiceSummaryContent: B,
        legalContent: v,
        invoiceTotalDueLabel: C ? M.intl.string(P.default.R0cZsM) : M.intl.string(P.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, L.U5)(c) : void 0,
        promotionalNoticeContent: k,
    });
};
var Z = n(814304);
function X(e) {
    let {
            premiumSubscription: t,
            paymentSources: n,
            handlePaymentSourceAdd: s,
            planId: C,
            planGroup: N,
            hasOpenInvoice: v,
            purchaseState: R,
        } = e,
        O = (0, d.mx)(),
        { hasPaymentSources: b } = (0, c.jm)(),
        {
            selectedSkuId: D,
            paymentSourceId: L,
            priceOptions: w,
            renewalInvoicePreview: P,
            checkoutInvoicePreview: x,
            checkoutInvoiceError: k,
        } = (0, _.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            renewalInvoicePreview: e.renewalInvoicePreview,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutInvoiceError: e.checkoutInvoiceError,
        })),
        { isPremiumPurchase: U, isPremiumGroupPurchase: G } = (0, _.t4)((e) => e.get("selectedPlanAttributes")),
        H = (0, _.t4)((e) => e.defaultPlanId),
        Y = (0, _.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        { isGift: W } = (0, h.Pv)(),
        K = (0, g.g)(n, L),
        $ = (0, o.bG)([A.A], () => A.A.get(C));
    if (null == $)
        throw new l.v({
            message: "Missing newPlan",
            extraSentryInformation: {
                defaultPlanId: H,
                planId: C,
                newPlan: $,
                isPremium: U,
                isPremiumGroupPurchase: G,
            },
        });
    let { showFractionalPremiumBanner: z, fractionalPremiumInfo: X } = (0, E._V)({
            premiumSubscription: t,
            selectedPlanId: C,
            planGroup: N,
            isGift: W,
        }),
        Q = R === f.h.PURCHASING || R === f.h.COMPLETED,
        J = (0, p.vT)({ isTrial: !1, isGift: W, selectedSkuId: D, startedPaymentFlowWithPaymentSources: Y }),
        ee = t?.isPausedAllowsResumeButNotUpdates,
        et = r.useMemo(() => (0, I.Tm)({ skuId: D, isPremium: U, defaultPlanId: H }), [D, H, U]),
        en = r.useRef(null),
        [ei, er] = r.useState(null),
        [es, ea] = r.useState(void 0),
        eo = r.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: en, setUnifiedPlainNoticeText: er, setOverrideRenewalDate: ea }),
            [],
        ),
        {
            content: el,
            isInvoiceBilledImmediately: eu,
            ...ec
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
                            content: (0, i.jsx)(F, {
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
                              content: (0, i.jsx)(j, {
                                  premiumSubscription: l,
                                  priceOptions: _,
                                  preventFetch: o,
                                  fractionalPremiumInfo: d,
                                  ...n,
                              }),
                              isInvoiceBilledImmediately: !0,
                              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                          }
                        : (0, T.Ge)(l, a, c)
                          ? {
                                content: (0, i.jsx)(V, {
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
                                content: (0, i.jsx)(B, {
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
                  { hasOpenInvoice: v, showResumeSubscriptionView: ee, planId: C },
                  {
                      disabled: Q,
                      premiumSubscription: t,
                      newPlan: $,
                      planGroup: N,
                      fractionalPremiumInfo: X,
                      priceOptions: w,
                  },
                  eo,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ed = t?.eligiblePaymentGateways,
        e_ = null != ed && ed.length > 0 && (null == L || null === K) && b ? S.fU.SELECT_PAYMENT_METHOD : void 0,
        eh = r.useMemo(
            () => ({ paymentGatewayRestrictions: t?.eligiblePaymentGateways, className: a()({ [Z.E4]: U }) }),
            [t?.eligiblePaymentGateways, U],
        ),
        ef = null != x || null != k,
        ep = r.useMemo(
            () =>
                ef
                    ? (0, i.jsx)(u.N, {
                          label: M.intl.string(M.t["mmDvV+"]),
                          onPaymentSourceAdd: s,
                          disabled: Q,
                          additionalPaymentSourceDropdownProps: eh,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: w.paymentSourceId,
                      })
                    : null,
            [ef, w.paymentSourceId, eh, s, Q],
        ),
        eE = null != t && (0, T.Ge)(t, C, N),
        em =
            null != x && null != P
                ? (0, i.jsx)(m.PI, {
                      overrideRenewalDate: es,
                      planGroup: N,
                      activeSubscription: t,
                      isTrial: !1,
                      plan: $,
                      isGift: W,
                      paymentSourceType: K,
                      isInvoiceBilledImmediately: eu,
                      invoiceSummaryTypeWithPreview: {
                          type: y.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: x,
                          renewalInvoicePreview: P,
                      },
                      hideLegalContent: eE && null != O,
                  })
                : null,
        eg = !ee && J && !G;
    return (0, i.jsx)(q, {
        disabled: Q,
        showFractionalPremiumBanner: z,
        fractionalPremiumInfo: X,
        isPremiumGroupPurchase: G,
        paymentRestrictionBannerType: e_,
        invoiceError: O,
        unifiedPlainNoticeText: ei,
        invoicePreview: x,
        invoicePreviewComponent: el,
        shouldShowPlanSelectAndPromoBanner: eg,
        shouldRenderInvoicePreviewSubscriptionDetailsDirectly: ec.shouldRenderToUnifiedSubscriptionDetailsDirectly,
        newPlan: $,
        planId: C,
        priceOptions: w,
        premiumPlanOptions: et,
        unifiedSubscriptionDetailsNode: en,
        isInvoiceBilledImmediately: eu,
        paymentMethodContent: ep,
        legalContent: em,
    });
}
