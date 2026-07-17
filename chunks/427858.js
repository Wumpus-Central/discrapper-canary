n.d(t, { A: () => Z });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(319668),
    o = n(426398),
    u = n(666646),
    c = n(6938),
    d = n(951305),
    p = n(566980),
    m = n(222707),
    C = n(340034),
    h = n(216641),
    E = n(428262),
    f = n(615396),
    A = n(218075),
    S = n(299301),
    y = n(340287),
    P = n(289873),
    I = n(793574),
    _ = n(688810),
    T = n(473617),
    g = n(270537),
    x = n(800471),
    v = n(888751),
    N = n(692440),
    M = n(202541),
    R = n(375708),
    b = n(327105);
function j(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : y.createPortal(t, n);
}
function O() {
    return (0, l.jsx)(P.y, { type: P.y.Type.PULSING_ELLIPSIS });
}
function L(e, t) {
    let { noticeCopy: n } = t;
    i.useEffect(() => {
        null != n ? e(n) : e(null);
    }, [e, n]);
}
function k(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: r,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: s,
            setOverrideRenewalDate: o,
        } = e,
        d = i.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "premium_checkout_invoice_get_request",
                    params: { subscriptionId: t.id, preventFetch: r },
                },
                fetchRenewalInvoicePreviewRequest: null,
                shouldAllowNullState: !0,
            }),
            [t.id, r],
        );
    (0, T.E)(d);
    let { checkoutInvoicePreview: p, checkoutInvoiceError: m } = (0, c.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, u.Tr)(p, m);
    let C = (0, E.J$)(n.paymentSourceId);
    if (null != p) {
        let e = t.items.length > 1;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(N._J, { invoice: p, isPrepaidPaymentSource: C }),
                (0, l.jsx)(j, {
                    containerNode: s.current,
                    children: (0, l.jsx)(N.Hc, {
                        currentInvoice: p,
                        renewalInvoice: p,
                        fractionalPremiumInfo: a,
                        isUpdate: !0,
                        defaultExpanded: e,
                        onComputeRenewalDate: o,
                    }),
                }),
            ],
        });
    }
    return (0, l.jsx)(O, {});
}
function w(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: r,
            priceOptions: a,
            fractionalPremiumInfo: s,
            preventFetch: o,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: d,
            setOverrideRenewalDate: p,
        } = e,
        { analyticsLocations: m } = (0, _.Ay)(),
        h = (0, E.Pg)(t, n.id, 1, new Set(r)),
        {
            proratedInvoicePreview: f,
            renewalInvoicePreview: A,
            primaryInvoiceError: y,
        } = (function (e) {
            let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: r, analyticsLocations: a } = e,
                s = i.useMemo(
                    () => ({
                        subscriptionId: t.id,
                        items: n,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: r,
                        analyticsLocations: a,
                        analyticsLocation: I.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
                    }),
                    [t.id, n, l.paymentSourceId, l.currency, r, a],
                ),
                { checkoutInvoicePreviewRequest: o, renewalInvoicePreviewRequest: u } = i.useMemo(
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
            (0, T.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
            let {
                checkoutInvoicePreview: d,
                checkoutInvoiceError: p,
                renewalInvoicePreview: m,
                renewalInvoiceError: C,
            } = (0, c.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: i.useMemo(() => p ?? C, [p, C]),
                proratedInvoicePreview: d,
                proratedInvoiceError: p,
                renewalInvoicePreview: m,
                renewalInvoiceError: C,
            };
        })({ premiumSubscription: t, newItems: h, priceOptions: a, preventFetch: o, analyticsLocations: m }),
        { planSwitchNoticeCopy: P, overrideRenewalDate: g } = i.useMemo(() => {
            let e;
            return (null !== s &&
                null !== f &&
                (e = (0, E._e)(f.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != f && null != A)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, N.DK)({
                          proratedInvoice: f,
                          renewalInvoice: A,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [f, A, s]);
    if ((L(d, { noticeCopy: P }), null != y)) return null;
    let v = (0, x.U)(f, n);
    if (null == f || null == A || v) return (0, l.jsx)(O, {});
    let M = (0, E.J$)(a.paymentSourceId);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(C.W9, {
                invoiceSummaryTypeWithPreview: {
                    type: S.N$.PREMIUM_SWITCH_PLAN,
                    invoicePreview: f,
                    renewalInvoicePreview: A,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: M,
                subscriptionTrial: null,
            }),
            (0, l.jsx)(j, {
                containerNode: u.current,
                children: (0, l.jsx)(N.Hc, {
                    currentInvoice: f,
                    renewalInvoice: A,
                    overrideRenewalDate: g,
                    fractionalPremiumInfo: s,
                    onComputeRenewalDate: p,
                    isUpdate: !0,
                }),
            }),
        ],
    });
}
function D(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: r,
            fractionalPremiumInfo: a,
            priceOptions: s,
            preventFetch: o,
            setUnifiedPlainNoticeText: d,
            setOverrideRenewalDate: p,
            unifiedSubscriptionDetailsNode: m,
        } = e,
        { analyticsLocations: C } = (0, _.Ay)(),
        { renewalInvoicePreview: h, renewalInvoiceError: f } = (0, c.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        A = i.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: null,
                fetchRenewalInvoicePreviewRequest: {
                    type: "premium_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        items: (0, E.Pg)(t, n.id, 1, new Set(r)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: s.paymentSourceId,
                        currency: s.currency,
                        preventFetch: o,
                        analyticsLocations: C,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
                    },
                },
                shouldAllowNullState: !0,
            }),
            [t, n.id, r, s.paymentSourceId, s.currency, o, C],
        );
    (0, T.E)(A), (0, u.F0)(h, f);
    let { renewalDate: S, planSwitchNoticeCopy: y } = i.useMemo(() => {
        if (null == h) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = h.subscriptionPeriodStart;
        return (
            a.fractionalState === M.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: R.intl.format(R.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [h, a.fractionalState, a.endsAt]);
    if ((L(d, { noticeCopy: y }), null != f)) return null;
    if (null == h) return (0, l.jsx)(O, {});
    let P = (0, E.J$)(s.paymentSourceId),
        { lineItems: I } = (0, v.Ig)(h, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: P,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(g.Vm, { label: R.intl.string(b.default.eoXh7B), lineItems: I, currency: h.currency }),
            (0, l.jsx)(j, {
                containerNode: m.current,
                children: (0, l.jsx)(N.Hc, {
                    renewalInvoice: h,
                    isUpdate: !0,
                    fractionalPremiumInfo: a,
                    overrideRenewalDate: S,
                    onComputeRenewalDate: p,
                    defaultExpanded: !0,
                }),
            }),
        ],
    });
}
function U(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: r,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: s,
            setUnifiedPlainNoticeText: o,
        } = e,
        { analyticsLocations: u } = (0, _.Ay)(),
        d = i.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "premium_checkout_invoice",
                    params: {
                        subscriptionId: t.id,
                        renewal: !0,
                        applyEntitlements: !0,
                        paymentSourceId: n.paymentSourceId,
                        currency: n.currency,
                        preventFetch: r,
                        analyticsLocations: u,
                        analyticsLocation: I.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
                    },
                },
                fetchRenewalInvoicePreviewRequest: {
                    type: "premium_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        renewal: !0,
                        paymentSourceId: n.paymentSourceId,
                        currency: n.currency,
                        preventFetch: r,
                        analyticsLocations: u,
                        analyticsLocation: I.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, r, u],
        );
    (0, T.E)(d);
    let {
        resumeInvoicePreview: p,
        renewalInvoicePreview: m,
        primaryInvoiceError: C,
    } = (0, c.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((L(o, { noticeCopy: i.useMemo(() => R.intl.string(R.t.spIYou), []) }), null != C)) return null;
    if (null == p || null == m) return (0, l.jsx)(O, {});
    let h = (0, E.J$)(n.paymentSourceId);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N._J, { invoice: p, isPrepaidPaymentSource: h }),
            (0, l.jsx)(j, {
                containerNode: s.current,
                children: (0, l.jsx)(N.Hc, { renewalInvoice: m, isUpdate: !0, fractionalPremiumInfo: a }),
            }),
        ],
    });
}
n(321073);
var G = n(38785),
    F = n(577381),
    H = n(845012),
    B = n(755880),
    Y = n(134638),
    W = n(906234);
function V(e) {
    let {
            loading: t,
            disabled: n,
            showFractionalPremiumBanner: r,
            fractionalPremiumInfo: a,
            isPremiumGroupPurchase: s,
            paymentRestrictionBannerType: o,
            invoiceError: u,
            unifiedPlainNoticeText: c,
            invoicePreview: d,
            invoicePreviewComponent: p,
            shouldShowPlanSelectAndPromoBanner: h,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: f,
            newPlan: y,
            planId: P,
            priceOptions: I,
            premiumPlanOptions: _,
            unifiedSubscriptionDetailsNode: T,
            isInvoiceBilledImmediately: g,
            paymentMethodContent: x,
            legalContent: v,
            isInPastDueCheckout: M,
        } = e,
        j = i.useMemo(() => {
            let e = [];
            return (
                M &&
                    e.push({
                        type: "warning",
                        message: R.intl.string(b.default["yrk+N6"]),
                        key: "past-due-restore-notice",
                    }),
                r &&
                    e.push({
                        directContent: (0, l.jsx)(C.l$, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                s && e.push({ type: "info", message: (0, m.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({ type: "warning", message: (0, A.i)(o), key: "payment-restriction-banner-notice" }),
                null != u && e.push({ type: "critical", message: u.message, key: "invoice-error-notice" }),
                e
            );
        }, [M, s, o, u, r, a]),
        { priceOptions: O, planPricesLoading: L } = (0, E.Pr)(I, d, u),
        k = (0, F.i)({ planSkuId: y.skuId, invoice: d }),
        w = i.useMemo(() => (h && null != k ? k : null), [h, k]),
        D = (0, W.G)(P),
        U = i.useMemo(() => (D ? (0, l.jsx)(B.a, {}) : null), [D]),
        V = i.useMemo(() => (null != w ? w : null != U ? U : null), [w, U]),
        K = (0, E.J$)(I.paymentSourceId),
        Z = null,
        q = null,
        z = M ? null : c;
    h
        ? (q = (0, l.jsx)(H.X, {
              disabled: n,
              headingSubText: z,
              planOptions: _,
              selectedPlanId: P,
              showPlanStatusSubText: !0,
              priceOptions: O,
              planPricesLoading: L,
          }))
        : null != d &&
          (Z = (0, l.jsx)(Y._, {
              type: S.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: d,
              subscriptionPlan: y,
              isPrepaidPaymentSource: K,
              isPremiumGroupPurchase: s,
              bottomSubText: z,
          }));
    let Q = f ? p : (0, l.jsx)("div", { ref: T }),
        $ = f ? null : p;
    return (0, l.jsx)(G.T_, {
        isStepLoading: t,
        shouldShowGlobalNotices: !0,
        showUpperNoticesAboveGlobalNotices: M,
        upperInlineNoticeProps: j,
        paymentMethodContent: x,
        subscriptionDetailsContent: Q,
        purchaseItemContent: Z,
        planSelectContent: q,
        invoiceSummaryContent: $,
        legalContent: v,
        invoiceTotalDueLabel: g ? R.intl.string(b.default.R0cZsM) : R.intl.string(b.default["11g67A"]),
        invoiceTotalDueValue: null != d ? (0, N.U5)(d) : void 0,
        promotionalNoticeContent: V,
    });
}
var K = n(207715);
function Z(e) {
    let {
            handlePaymentSourceAdd: t,
            verifiedPlanId: n,
            selectedPlan: r,
            planGroup: y,
            hasOpenInvoice: P,
            purchaseState: I,
            isInPastDueCheckout: _,
        } = e,
        T = (0, u.mx)(),
        { paymentSources: g, hasPaymentSources: x } = (0, o.jm)(),
        {
            selectedSkuId: v,
            paymentSourceId: N,
            priceOptions: M,
            renewalInvoicePreview: j,
            checkoutInvoicePreview: O,
            isCheckoutInvoicePreviewLoading: L,
            checkoutInvoiceError: G,
            activeSubscription: F,
        } = (0, c.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            renewalInvoicePreview: e.renewalInvoicePreview,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            isCheckoutInvoicePreviewLoading: e.get("isCheckoutInvoicePreviewLoading"),
            checkoutInvoiceError: e.checkoutInvoiceError,
            activeSubscription: e.activeSubscription,
        })),
        { isPremiumPurchase: H, isPremiumGroupPurchase: B } = (0, c.t4)((e) => e.get("selectedPlanAttributes")),
        { defaultPlanId: Y, isInOneStepSubscriptionCheckout: W } = (0, c.t4)((e) => ({
            defaultPlanId: e.defaultPlanId,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: !1 }),
        })),
        { isGift: Z } = (0, d.Pv)(),
        q = (0, h.g)(g, N),
        { showFractionalPremiumBanner: z, fractionalPremiumInfo: Q } = (0, m._V)({
            premiumSubscription: F,
            selectedPlanId: n,
            planGroup: y,
            isGift: Z,
        }),
        $ = I === p.h.PURCHASING || I === p.h.COMPLETED,
        X = F?.isPausedAllowsResumeButNotUpdates,
        J = i.useMemo(() => (0, E.Tm)({ skuId: v, isPremium: H, defaultPlanId: Y }), [v, Y, H]),
        ee = i.useRef(null),
        [et, en] = i.useState(null),
        [el, ei] = i.useState(void 0),
        er = i.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: ee, setUnifiedPlainNoticeText: en, setOverrideRenewalDate: ei }),
            [],
        ),
        {
            content: ea,
            isInvoiceBilledImmediately: es,
            ...eo
        } = null != F
            ? (function (e, t, n) {
                  let { hasOpenInvoice: i, showResumeSubscriptionView: r, planId: a } = e,
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
                            content: (0, l.jsx)(k, {
                                premiumSubscription: o,
                                priceOptions: p,
                                preventFetch: !1,
                                fractionalPremiumInfo: d,
                                ...n,
                            }),
                            isInvoiceBilledImmediately: !0,
                            shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                        }
                      : r
                        ? {
                              content: (0, l.jsx)(U, {
                                  premiumSubscription: o,
                                  priceOptions: p,
                                  preventFetch: s,
                                  fractionalPremiumInfo: d,
                                  ...n,
                              }),
                              isInvoiceBilledImmediately: !0,
                              shouldRenderToUnifiedSubscriptionDetailsDirectly: !1,
                          }
                        : (0, f.Ge)(o, a, c)
                          ? {
                                content: (0, l.jsx)(w, {
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
                                content: (0, l.jsx)(D, {
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
                  { hasOpenInvoice: P, showResumeSubscriptionView: X, planId: n },
                  {
                      disabled: $,
                      premiumSubscription: F,
                      newPlan: r,
                      planGroup: y,
                      fractionalPremiumInfo: Q,
                      priceOptions: M,
                  },
                  er,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eu = F?.eligiblePaymentGateways,
        ec = null != eu && eu.length > 0 && (null == N || null === q) && x ? A.fU.SELECT_PAYMENT_METHOD : void 0,
        ed = null != F ? F.paymentSourceId : null,
        ep = i.useMemo(
            () => ({
                paymentGatewayRestrictions: F?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: _
                    ? (e) => e.map((e) => (e.id === ed ? { ...e, tooltipText: R.intl.string(b.default["hjsn+s"]) } : e))
                    : void 0,
                className: a()({ [K.E]: H }),
            }),
            [F?.eligiblePaymentGateways, H, _, ed],
        ),
        em = null != O || null != G,
        eC = i.useMemo(
            () =>
                em
                    ? (0, l.jsx)(s.N, {
                          label: R.intl.string(R.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: $,
                          additionalPaymentSourceDropdownProps: ep,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: M.paymentSourceId,
                      })
                    : null,
            [em, M.paymentSourceId, ep, t, $],
        ),
        eh = null != F && (0, f.Ge)(F, n, y) && null != T,
        eE = i.useMemo(
            () =>
                null == O || null == j || eh
                    ? null
                    : (0, l.jsx)(C.PI, {
                          fractionalPremiumInfo: Q,
                          overrideRenewalDate: el,
                          activeSubscription: F,
                          isTrial: !1,
                          plan: r,
                          isGift: Z,
                          paymentSourceType: q,
                          isInvoiceBilledImmediately: es,
                          invoiceSummaryTypeWithPreview: {
                              type: S.N$.PREMIUM_SWITCH_PLAN,
                              invoicePreview: O,
                              renewalInvoicePreview: j,
                          },
                      }),
            [Q, O, j, eh, el, F, r, Z, q, es],
        ),
        ef = !X && W && !B && !_;
    return (0, l.jsx)(V, {
        loading: L,
        disabled: $,
        isInPastDueCheckout: _,
        showFractionalPremiumBanner: z,
        fractionalPremiumInfo: Q,
        isPremiumGroupPurchase: B,
        paymentRestrictionBannerType: ec,
        invoiceError: T,
        unifiedPlainNoticeText: et,
        invoicePreview: O,
        invoicePreviewComponent: ea,
        shouldShowPlanSelectAndPromoBanner: ef,
        shouldRenderInvoicePreviewSubscriptionDetailsDirectly: eo.shouldRenderToUnifiedSubscriptionDetailsDirectly,
        newPlan: r,
        planId: n,
        priceOptions: M,
        premiumPlanOptions: J,
        unifiedSubscriptionDetailsNode: ee,
        isInvoiceBilledImmediately: es,
        paymentMethodContent: eC,
        legalContent: eE,
    });
}
