n.d(t, { A: () => $ });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(17928),
    o = n(71804),
    u = n(376843),
    c = n(426398),
    d = n(666646),
    p = n(211159),
    m = n(937008),
    h = n(566980),
    A = n(800471),
    E = n(222707),
    C = n(340034),
    y = n(216641),
    _ = n(97352),
    S = n(428262),
    P = n(615396),
    I = n(218075),
    f = n(299301),
    T = n(340287),
    N = n(289873),
    g = n(793574),
    v = n(688810),
    x = n(473617),
    R = n(848584),
    M = n(888751),
    b = n(458785),
    L = n(788868),
    O = n(375708),
    j = n(327105);
function w(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : T.createPortal(t, n);
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
            preventFetch: i,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: s,
        } = e,
        o = r.useMemo(
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
    (0, x.E)(o);
    let { checkoutInvoicePreview: u, checkoutInvoiceError: c } = (0, p.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, d.Tr)(u, c);
    let m = (0, S.J$)(n.paymentSourceId);
    if (null != u) {
        let e = (0, l.jsx)(b.m0, { renewalInvoice: u, isUpdate: !0, fractionalPremiumInfo: a }),
            t = (0, l.jsx)(b._J, { invoice: u, isPrepaidPaymentSource: m });
        return (0, l.jsxs)(l.Fragment, { children: [t, (0, l.jsx)(w, { containerNode: s.current, children: e })] });
    }
    return (0, l.jsx)(D, {});
}
function F(e) {
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
        } = e,
        { analyticsLocations: m } = (0, v.Ay)(),
        h = (0, S.Pg)(t, n.id, 1, new Set(i)),
        {
            proratedInvoicePreview: E,
            renewalInvoicePreview: y,
            primaryInvoiceError: _,
        } = ((e) => {
            let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: i, analyticsLocations: a } = e,
                s = r.useMemo(
                    () => ({
                        subscriptionId: t.id,
                        items: n,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: i,
                        analyticsLocations: a,
                        analyticsLocation: g.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
                    }),
                    [t.id, n, l.paymentSourceId, l.currency, i, a],
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
                renewalInvoiceError: h,
            } = (0, p.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: r.useMemo(() => d ?? h, [d, h]),
                proratedInvoicePreview: c,
                proratedInvoiceError: d,
                renewalInvoicePreview: m,
                renewalInvoiceError: h,
            };
        })({ premiumSubscription: t, newItems: h, priceOptions: a, preventFetch: o, analyticsLocations: m }),
        { planSwitchNoticeCopy: P, overrideRenewalDate: I } = r.useMemo(() => {
            let e;
            return (null !== s &&
                null !== E &&
                (e = (0, S._e)(E.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
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
    if ((k(d, { overrideRenewalDate: I }), U(c, { noticeCopy: P }), null != _)) return null;
    let T = (0, A.UB)(E, n);
    if (null == E || null == y || T) return (0, l.jsx)(D, {});
    let N = (0, S.J$)(a.paymentSourceId),
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
                    type: f.N$.PREMIUM_SWITCH_PLAN,
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
            planGroup: i,
            fractionalPremiumInfo: a,
            priceOptions: s,
            preventFetch: o,
            setUnifiedPlainNoticeText: u,
            setOverrideRenewalDate: c,
            unifiedSubscriptionDetailsNode: m,
        } = e,
        { analyticsLocations: h } = (0, v.Ay)(),
        { renewalInvoicePreview: A, renewalInvoiceError: E } = (0, p.t4)((e) => ({
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
                        items: (0, S.Pg)(t, n.id, 1, new Set(i)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: s.paymentSourceId,
                        currency: s.currency,
                        preventFetch: o,
                        analyticsLocations: h,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
                    },
                },
                shouldAllowNullState: !0,
            }),
            [t, n.id, i, s.paymentSourceId, s.currency, o, h],
        );
    (0, x.E)(C), (0, d.F0)(A, E);
    let { renewalDate: y, planSwitchNoticeCopy: _ } = r.useMemo(() => {
        if (null == A) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = A.subscriptionPeriodStart;
        return (
            a.fractionalState === L.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: O.intl.format(O.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [A, a.fractionalState, a.endsAt]);
    if ((k(c, { overrideRenewalDate: y }), U(u, { noticeCopy: _ }), null != E)) return null;
    if (null == A) return (0, l.jsx)(D, {});
    let P = (0, S.J$)(s.paymentSourceId),
        I = (0, l.jsx)(b.m0, {
            renewalInvoice: A,
            isUpdate: !0,
            fractionalPremiumInfo: a,
            overrideRenewalDate: y,
            defaultExpanded: !0,
        }),
        { lineItems: f } = (0, M.Ig)(A, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: P,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R.Vm, { label: O.intl.string(j.default.eoXh7B), lineItems: f, currency: A.currency }),
            (0, l.jsx)(w, { containerNode: m.current, children: I }),
        ],
    });
}
function B(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: i,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: s,
            setUnifiedPlainNoticeText: o,
        } = e,
        { analyticsLocations: u } = (0, v.Ay)(),
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
                        preventFetch: i,
                        analyticsLocations: u,
                        analyticsLocation: g.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
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
                        analyticsLocations: u,
                        analyticsLocation: g.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, i, u],
        );
    (0, x.E)(c);
    let {
        resumeInvoicePreview: d,
        renewalInvoicePreview: m,
        primaryInvoiceError: h,
    } = (0, p.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((U(o, { noticeCopy: r.useMemo(() => O.intl.string(O.t.spIYou), []) }), null != h)) return null;
    if (null == d || null == m) return (0, l.jsx)(D, {});
    let A = (0, S.J$)(n.paymentSourceId),
        E = (0, l.jsx)(b.m0, { renewalInvoice: m, isUpdate: !0, fractionalPremiumInfo: a }),
        C = (0, l.jsx)(b._J, { invoice: d, isPrepaidPaymentSource: A });
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
            priceOptions: y,
            premiumPlanOptions: _,
            unifiedSubscriptionDetailsNode: P,
            isInvoiceBilledImmediately: T,
            paymentMethodContent: N,
            legalContent: g,
        } = e,
        v = r.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(C.l$, { fractionalPremiumInfo: i }),
                        key: "fractional-premium-notice",
                    }),
                a && e.push({ type: "info", message: (0, E.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, I.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [a, s, o, n, i]),
        { priceOptions: x, planPricesLoading: R } = (0, S.Pr)(y, c, o),
        M = r.useMemo(() => (p ? (0, l.jsx)(H.P, { planSkuId: h.skuId }) : null), [p, h.skuId]),
        L = (0, Z.G)(A),
        w = r.useMemo(() => (L ? (0, l.jsx)(V.a, {}) : null), [L]),
        D = r.useMemo(() => (null != M ? M : null != w ? w : null), [M, w]),
        U = (0, S.J$)(y.paymentSourceId),
        k = null,
        G = null;
    p
        ? (G = (0, l.jsx)(C.XH, {
              disabled: t,
              headingSubText: u,
              planOptions: _,
              selectedPlanId: A,
              showPlanStatusSubText: !0,
              priceOptions: x,
              planPricesLoading: R,
          }))
        : null != c &&
          (k = (0, l.jsx)(K._, {
              type: f.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: h,
              isPrepaidPaymentSource: U,
              isPremiumGroupPurchase: a,
              bottomSubText: u,
          }));
    let F = m ? d : (0, l.jsx)("div", { ref: P }),
        Y = m ? null : d;
    return (0, l.jsx)(W.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: v,
        paymentMethodContent: N,
        subscriptionDetailsContent: F,
        purchaseItemContent: k,
        planSelectContent: G,
        invoiceSummaryContent: Y,
        legalContent: g,
        invoiceTotalDueLabel: T ? O.intl.string(j.default.R0cZsM) : O.intl.string(j.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, b.U5)(c) : void 0,
        promotionalNoticeContent: D,
    });
};
var z = n(814304);
function $(e) {
    let {
            premiumSubscription: t,
            paymentSources: n,
            handlePaymentSourceAdd: i,
            planId: T,
            planGroup: N,
            hasOpenInvoice: g,
            purchaseState: v,
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
        Z = (0, s.bG)([_.A], () => _.A.get(T));
    if (null == Z)
        throw new o.v({
            message: "Missing newPlan",
            extraSentryInformation: {
                defaultPlanId: W,
                planId: T,
                newPlan: Z,
                isPremium: U,
                isPremiumGroupPurchase: k,
            },
        });
    let { showFractionalPremiumBanner: $, fractionalPremiumInfo: X } = (0, E._V)({
            premiumSubscription: t,
            selectedPlanId: T,
            planGroup: N,
            isGift: V,
        }),
        J = v === h.h.PURCHASING || v === h.h.COMPLETED,
        Q = (0, A.vT)({ isTrial: !1, isGift: V, selectedSkuId: M, startedPaymentFlowWithPaymentSources: H }),
        ee = t?.isPausedAllowsResumeButNotUpdates,
        et = r.useMemo(() => (0, S.Tm)({ skuId: M, isPremium: U, defaultPlanId: W }), [M, W, U]),
        en = r.useRef(null),
        [el, er] = r.useState(null),
        [ei, ea] = r.useState(void 0),
        es = r.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: en, setUnifiedPlainNoticeText: er, setOverrideRenewalDate: ea }),
            [],
        ),
        {
            content: eo,
            isInvoiceBilledImmediately: eu,
            ...ec
        } = null != t
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
                      : i
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
                        : (0, P.Ge)(o, a, c)
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
                  { hasOpenInvoice: g, showResumeSubscriptionView: ee, planId: T },
                  {
                      disabled: J,
                      premiumSubscription: t,
                      newPlan: Z,
                      planGroup: N,
                      fractionalPremiumInfo: X,
                      priceOptions: L,
                  },
                  es,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ed = t?.eligiblePaymentGateways,
        ep = null != ed && ed.length > 0 && (null == b || null === K) && R ? I.fU.SELECT_PAYMENT_METHOD : void 0,
        em = r.useMemo(
            () => ({ paymentGatewayRestrictions: t?.eligiblePaymentGateways, className: a()({ [z.E4]: U }) }),
            [t?.eligiblePaymentGateways, U],
        ),
        eh = null != w || null != D,
        eA = r.useMemo(
            () =>
                eh
                    ? (0, l.jsx)(u.N, {
                          label: O.intl.string(O.t["mmDvV+"]),
                          onPaymentSourceAdd: i,
                          disabled: J,
                          additionalPaymentSourceDropdownProps: em,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: L.paymentSourceId,
                      })
                    : null,
            [eh, L.paymentSourceId, em, i, J],
        ),
        eE = null != t && (0, P.Ge)(t, T, N),
        eC =
            null != w && null != j
                ? (0, l.jsx)(C.PI, {
                      overrideRenewalDate: ei,
                      planGroup: N,
                      activeSubscription: t,
                      isTrial: !1,
                      plan: Z,
                      isGift: V,
                      paymentSourceType: K,
                      isInvoiceBilledImmediately: eu,
                      invoiceSummaryTypeWithPreview: {
                          type: f.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: w,
                          renewalInvoicePreview: j,
                      },
                      hideLegalContent: eE && null != x,
                  })
                : null,
        ey = !ee && Q && !k;
    return (0, l.jsx)(q, {
        disabled: J,
        showFractionalPremiumBanner: $,
        fractionalPremiumInfo: X,
        isPremiumGroupPurchase: k,
        paymentRestrictionBannerType: ep,
        invoiceError: x,
        unifiedPlainNoticeText: el,
        invoicePreview: w,
        invoicePreviewComponent: eo,
        shouldShowPlanSelectAndPromoBanner: ey,
        shouldRenderInvoicePreviewSubscriptionDetailsDirectly: ec.shouldRenderToUnifiedSubscriptionDetailsDirectly,
        newPlan: Z,
        planId: T,
        priceOptions: L,
        premiumPlanOptions: et,
        unifiedSubscriptionDetailsNode: en,
        isInvoiceBilledImmediately: eu,
        paymentMethodContent: eA,
        legalContent: eC,
    });
}
