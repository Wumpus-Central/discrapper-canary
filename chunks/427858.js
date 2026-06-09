n.d(t, { A: () => J });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(17928),
    o = n(71804),
    u = n(376843),
    c = n(426398),
    d = n(666646),
    p = n(211159),
    m = n(937008),
    A = n(566980),
    h = n(800471),
    E = n(222707),
    C = n(340034),
    y = n(216641),
    _ = n(97352),
    P = n(428262),
    S = n(615396),
    I = n(218075),
    T = n(299301),
    f = n(340287),
    N = n(289873),
    v = n(793574),
    g = n(688810),
    x = n(473617),
    R = n(848584),
    M = n(888751),
    b = n(458785),
    L = n(788868),
    O = n(375708),
    j = n(327105);
function w(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : f.createPortal(t, n);
}
let D = () => (0, l.jsx)(N.y, {}),
    U = (e, t) => {
        let { noticeCopy: n } = t;
        r.useEffect(() => {
            null != n ? e(n) : e(null);
        }, [e, n]);
    },
    k = (e, t) => {
        let { overrideRenewalDate: n } = t;
        r.useEffect(() => {
            e(n);
        }, [e, n]);
    };
function G(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: a,
            fractionalPremiumInfo: i,
            unifiedSubscriptionDetailsNode: s,
        } = e,
        o = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "premium_checkout_invoice_get_request",
                    params: { subscriptionId: t.id, preventFetch: a },
                },
                fetchRenewalInvoicePreviewRequest: null,
                shouldAllowNullState: !0,
            }),
            [t.id, a],
        );
    (0, x.E)(o);
    let { checkoutInvoicePreview: u, checkoutInvoiceError: c } = (0, p.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, d.Tr)(u, c);
    let m = (0, P.J$)(n.paymentSourceId);
    if (null != u) {
        let e = (0, l.jsx)(b.m0, { renewalInvoice: u, isUpdate: !0, fractionalPremiumInfo: i }),
            t = (0, l.jsx)(b._J, { invoice: u, isPrepaidPaymentSource: m });
        return (0, l.jsxs)(l.Fragment, { children: [t, (0, l.jsx)(w, { containerNode: s.current, children: e })] });
    }
    return (0, l.jsx)(D, {});
}
function F(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: a,
            priceOptions: i,
            fractionalPremiumInfo: s,
            preventFetch: o,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: c,
            setOverrideRenewalDate: d,
        } = e,
        { analyticsLocations: m } = (0, g.Ay)(),
        A = (0, P.Pg)(t, n.id, 1, new Set(a)),
        {
            proratedInvoicePreview: E,
            renewalInvoicePreview: y,
            primaryInvoiceError: _,
        } = ((e) => {
            let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: a, analyticsLocations: i } = e,
                s = r.useMemo(
                    () => ({
                        subscriptionId: t.id,
                        items: n,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: a,
                        analyticsLocations: i,
                        analyticsLocation: v.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
                    }),
                    [t.id, n, l.paymentSourceId, l.currency, a, i],
                ),
                { checkoutInvoicePreviewRequest: o, renewalInvoicePreviewRequest: u } = r.useMemo(
                    () => ({
                        checkoutInvoicePreviewRequest: {
                            type: "premium_checkout_invoice",
                            params: { ...s, renewal: !1, applyEntitlements: !0 },
                        },
                        renewalInvoicePreviewRequest: {
                            type: "premium_renewal_invoice",
                            params: { ...s, renewal: !0 },
                        },
                    }),
                    [s],
                );
            (0, x.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
            let {
                checkoutInvoicePreview: c,
                checkoutInvoiceError: d,
                renewalInvoicePreview: m,
                renewalInvoiceError: A,
            } = (0, p.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: r.useMemo(() => d ?? A, [d, A]),
                proratedInvoicePreview: c,
                proratedInvoiceError: d,
                renewalInvoicePreview: m,
                renewalInvoiceError: A,
            };
        })({ premiumSubscription: t, newItems: A, priceOptions: i, preventFetch: o, analyticsLocations: m }),
        { planSwitchNoticeCopy: S, overrideRenewalDate: I } = r.useMemo(() => {
            let e;
            return (null !== s &&
                null !== E &&
                (e = (0, P._e)(E.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != E && null != y)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, b.DK)({
                          proratedInvoice: E,
                          renewalInvoice: y,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [E, y, s]);
    if ((k(d, { overrideRenewalDate: I }), U(c, { noticeCopy: S }), null != _)) return null;
    let f = (0, h.UB)(E, n);
    if (null == E || null == y || f) return (0, l.jsx)(D, {});
    let N = (0, P.J$)(i.paymentSourceId),
        R = (0, l.jsx)(b.m0, {
            proratedInvoice: E,
            renewalInvoice: y,
            overrideRenewalDate: I,
            fractionalPremiumInfo: s,
            isUpdate: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(C.W9, {
                invoiceSummaryTypeWithPreview: {
                    type: T.N$.PREMIUM_SWITCH_PLAN,
                    invoicePreview: E,
                    renewalInvoicePreview: y,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: N,
                subscriptionTrial: null,
            }),
            (0, l.jsx)(w, { containerNode: u.current, children: R }),
        ],
    });
}
function Y(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: a,
            fractionalPremiumInfo: i,
            priceOptions: s,
            preventFetch: o,
            setUnifiedPlainNoticeText: u,
            setOverrideRenewalDate: c,
            unifiedSubscriptionDetailsNode: m,
        } = e,
        { analyticsLocations: A } = (0, g.Ay)(),
        { renewalInvoicePreview: h, renewalInvoiceError: E } = (0, p.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        C = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: null,
                fetchRenewalInvoicePreviewRequest: {
                    type: "premium_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        items: (0, P.Pg)(t, n.id, 1, new Set(a)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: s.paymentSourceId,
                        currency: s.currency,
                        preventFetch: o,
                        analyticsLocations: A,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
                    },
                },
                shouldAllowNullState: !0,
            }),
            [t, n.id, a, s.paymentSourceId, s.currency, o, A],
        );
    (0, x.E)(C), (0, d.F0)(h, E);
    let { renewalDate: y, planSwitchNoticeCopy: _ } = r.useMemo(() => {
        if (null == h) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = h.subscriptionPeriodStart;
        return (
            i.fractionalState === L.xc.FP_SUB_PAUSED && (e = i.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: O.intl.format(O.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [h, i.fractionalState, i.endsAt]);
    if ((k(c, { overrideRenewalDate: y }), U(u, { noticeCopy: _ }), null != E)) return null;
    if (null == h) return (0, l.jsx)(D, {});
    let S = (0, P.J$)(s.paymentSourceId),
        I = (0, l.jsx)(b.m0, {
            renewalInvoice: h,
            isUpdate: !0,
            fractionalPremiumInfo: i,
            overrideRenewalDate: y,
            defaultExpanded: !0,
        }),
        { lineItems: T } = (0, M.Ig)(h, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: S,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R.Vm, { label: O.intl.string(j.default.eoXh7B), lineItems: T, currency: h.currency }),
            (0, l.jsx)(w, { containerNode: m.current, children: I }),
        ],
    });
}
function B(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: a,
            fractionalPremiumInfo: i,
            unifiedSubscriptionDetailsNode: s,
            setUnifiedPlainNoticeText: o,
        } = e,
        { analyticsLocations: u } = (0, g.Ay)(),
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
                        preventFetch: a,
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
                        preventFetch: a,
                        analyticsLocations: u,
                        analyticsLocation: v.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, a, u],
        );
    (0, x.E)(c);
    let {
        resumeInvoicePreview: d,
        renewalInvoicePreview: m,
        primaryInvoiceError: A,
    } = (0, p.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((U(o, { noticeCopy: r.useMemo(() => O.intl.string(O.t.spIYou), []) }), null != A)) return null;
    if (null == d || null == m) return (0, l.jsx)(D, {});
    let h = (0, P.J$)(n.paymentSourceId),
        E = (0, l.jsx)(b.m0, { renewalInvoice: m, isUpdate: !0, fractionalPremiumInfo: i }),
        C = (0, l.jsx)(b._J, { invoice: d, isPrepaidPaymentSource: h });
    return (0, l.jsxs)(l.Fragment, { children: [C, (0, l.jsx)(w, { containerNode: s.current, children: E })] });
}
n(321073);
var W = n(274971),
    H = n(71867),
    V = n(755880),
    K = n(134638),
    Z = n(906234);
let q = (e) => {
    let {
            disabled: t,
            showFractionalPremiumBanner: n,
            fractionalPremiumInfo: a,
            isPremiumGroupPurchase: i,
            paymentRestrictionBannerType: s,
            invoiceError: o,
            unifiedPlainNoticeText: u,
            invoicePreview: c,
            invoicePreviewComponent: d,
            shouldShowPlanSelectAndPromoBanner: p,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: m,
            newPlan: A,
            planId: h,
            priceOptions: y,
            premiumPlanOptions: _,
            unifiedSubscriptionDetailsNode: S,
            isInvoiceBilledImmediately: f,
            paymentMethodContent: N,
            legalContent: v,
        } = e,
        g = r.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(C.l$, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                i && e.push({ type: "info", message: (0, E.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, I.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [i, s, o, n, a]),
        { priceOptions: x, planPricesLoading: R } = (0, P.Pr)(y, c, o),
        M = r.useMemo(() => (p ? (0, l.jsx)(H.P, { planSkuId: A.skuId }) : null), [p, A.skuId]),
        L = (0, Z.G)(h),
        w = r.useMemo(() => (L ? (0, l.jsx)(V.a, {}) : null), [L]),
        D = r.useMemo(() => (null != M ? M : null != w ? w : null), [M, w]),
        U = (0, P.J$)(y.paymentSourceId),
        k = null,
        G = null;
    p
        ? (G = (0, l.jsx)(C.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: _,
              selectedPlanId: h,
              showPlanStatusSubText: !0,
              priceOptions: x,
              planPricesLoading: R,
          }))
        : null != c &&
          (k = (0, l.jsx)(K._, {
              type: T.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: A,
              isPrepaidPaymentSource: U,
              isPremiumGroupPurchase: i,
              bottomSubText: u,
          }));
    let F = m ? d : (0, l.jsx)("div", { ref: S }),
        Y = m ? null : d;
    return (0, l.jsx)(W.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: g,
        paymentMethodContent: N,
        subscriptionDetailsContent: F,
        purchaseItemContent: k,
        planSelectContent: G,
        invoiceSummaryContent: Y,
        legalContent: v,
        invoiceTotalDueLabel: f ? O.intl.string(j.default.R0cZsM) : O.intl.string(j.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, b.U5)(c) : void 0,
        promotionalNoticeContent: D,
    });
};
var z = n(814304);
function J(e) {
    let {
            premiumSubscription: t,
            paymentSources: n,
            handlePaymentSourceAdd: a,
            planId: f,
            planGroup: N,
            hasOpenInvoice: v,
            purchaseState: g,
        } = e,
        x = (0, d.mx)(),
        { hasPaymentSources: R } = (0, c.jm)(),
        {
            selectedSkuId: M,
            paymentSourceId: b,
            priceOptions: L,
            renewalInvoicePreview: j,
            checkoutInvoicePreview: w,
            checkoutInvoiceError: D,
        } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            renewalInvoicePreview: e.renewalInvoicePreview,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutInvoiceError: e.checkoutInvoiceError,
        })),
        { isPremiumPurchase: U, isPremiumGroupPurchase: k } = (0, p.t4)((e) => e.get("selectedPlanAttributes")),
        W = (0, p.t4)((e) => e.defaultPlanId),
        H = (0, p.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        { isGift: V } = (0, m.Pv)(),
        K = (0, y.g)(n, b),
        Z = (0, s.bG)([_.A], () => _.A.get(f));
    if (null == Z)
        throw new o.v({
            message: "Missing newPlan",
            extraSentryInformation: {
                defaultPlanId: W,
                planId: f,
                newPlan: Z,
                isPremium: U,
                isPremiumGroupPurchase: k,
            },
        });
    let { showFractionalPremiumBanner: J, fractionalPremiumInfo: $ } = (0, E._V)({
            premiumSubscription: t,
            selectedPlanId: f,
            planGroup: N,
            isGift: V,
        }),
        X = g === A.h.PURCHASING || g === A.h.COMPLETED,
        Q = (0, h.vT)({ isTrial: !1, isGift: V, selectedSkuId: M, startedPaymentFlowWithPaymentSources: H }),
        ee = t?.isPausedAllowsResumeButNotUpdates,
        et = r.useMemo(() => (0, P.Tm)({ skuId: M, isPremium: U, defaultPlanId: W }), [M, W, U]),
        en = r.useRef(null),
        [el, er] = r.useState(null),
        [ea, ei] = r.useState(void 0),
        es = r.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: en, setUnifiedPlainNoticeText: er, setOverrideRenewalDate: ei }),
            [],
        ),
        {
            content: eo,
            isInvoiceBilledImmediately: eu,
            ...ec
        } = null != t
            ? (function (e, t, n) {
                  let { hasOpenInvoice: r, showResumeSubscriptionView: a, planId: i } = e,
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
                            content: (0, l.jsx)(G, {
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
                              content: (0, l.jsx)(B, {
                                  premiumSubscription: o,
                                  priceOptions: p,
                                  preventFetch: s,
                                  fractionalPremiumInfo: d,
                                  ...n,
                              }),
                              isInvoiceBilledImmediately: !0,
                              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                          }
                        : (0, S.Ge)(o, i, c)
                          ? {
                                content: (0, l.jsx)(F, {
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
                                content: (0, l.jsx)(Y, {
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
                  { hasOpenInvoice: v, showResumeSubscriptionView: ee, planId: f },
                  {
                      disabled: X,
                      premiumSubscription: t,
                      newPlan: Z,
                      planGroup: N,
                      fractionalPremiumInfo: $,
                      priceOptions: L,
                  },
                  es,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ed = t?.eligiblePaymentGateways,
        ep = null != ed && ed.length > 0 && (null == b || null === K) && R ? I.fU.SELECT_PAYMENT_METHOD : void 0,
        em = r.useMemo(
            () => ({ paymentGatewayRestrictions: t?.eligiblePaymentGateways, className: i()({ [z.E4]: U }) }),
            [t?.eligiblePaymentGateways, U],
        ),
        eA = null != w || null != D,
        eh = r.useMemo(
            () =>
                eA
                    ? (0, l.jsx)(u.N, {
                          label: O.intl.string(O.t["mmDvV+"]),
                          onPaymentSourceAdd: a,
                          disabled: X,
                          additionalPaymentSourceDropdownProps: em,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: L.paymentSourceId,
                      })
                    : null,
            [eA, L.paymentSourceId, em, a, X],
        ),
        eE = null != t && (0, S.Ge)(t, f, N),
        eC =
            null != w && null != j
                ? (0, l.jsx)(C.PI, {
                      overrideRenewalDate: ea,
                      planGroup: N,
                      activeSubscription: t,
                      isTrial: !1,
                      plan: Z,
                      isGift: V,
                      paymentSourceType: K,
                      isInvoiceBilledImmediately: eu,
                      invoiceSummaryTypeWithPreview: {
                          type: T.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: w,
                          renewalInvoicePreview: j,
                      },
                      hideLegalContent: eE && null != x,
                  })
                : null,
        ey = !ee && Q && !k;
    return (0, l.jsx)(q, {
        disabled: X,
        showFractionalPremiumBanner: J,
        fractionalPremiumInfo: $,
        isPremiumGroupPurchase: k,
        paymentRestrictionBannerType: ep,
        invoiceError: x,
        unifiedPlainNoticeText: el,
        invoicePreview: w,
        invoicePreviewComponent: eo,
        shouldShowPlanSelectAndPromoBanner: ey,
        shouldRenderInvoicePreviewSubscriptionDetailsDirectly: ec.shouldRenderToUnifiedSubscriptionDetailsDirectly,
        newPlan: Z,
        planId: f,
        priceOptions: L,
        premiumPlanOptions: et,
        unifiedSubscriptionDetailsNode: en,
        isInvoiceBilledImmediately: eu,
        paymentMethodContent: eh,
        legalContent: eC,
    });
}
