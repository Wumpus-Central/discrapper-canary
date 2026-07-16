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
    m = n(800471),
    C = n(222707),
    h = n(340034),
    E = n(216641),
    f = n(428262),
    A = n(615396),
    y = n(218075),
    S = n(299301),
    P = n(340287),
    I = n(289873),
    _ = n(793574),
    T = n(688810),
    g = n(473617),
    x = n(270537),
    v = n(888751),
    N = n(692440),
    M = n(202541),
    R = n(375708),
    b = n(327105);
function j(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : P.createPortal(t, n);
}
function O() {
    return (0, l.jsx)(I.y, { type: I.y.Type.PULSING_ELLIPSIS });
}
function L(e, t) {
    let { noticeCopy: n } = t;
    i.useEffect(() => {
        null != n ? e(n) : e(null);
    }, [e, n]);
}
function w(e) {
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
    (0, g.E)(d);
    let { checkoutInvoicePreview: p, checkoutInvoiceError: m } = (0, c.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, u.Tr)(p, m);
    let C = (0, f.J$)(n.paymentSourceId);
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
function k(e) {
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
        { analyticsLocations: C } = (0, T.Ay)(),
        E = (0, f.Pg)(t, n.id, 1, new Set(r)),
        {
            proratedInvoicePreview: A,
            renewalInvoicePreview: y,
            primaryInvoiceError: P,
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
                        analyticsLocation: _.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
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
            (0, g.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
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
        })({ premiumSubscription: t, newItems: E, priceOptions: a, preventFetch: o, analyticsLocations: C }),
        { planSwitchNoticeCopy: I, overrideRenewalDate: x } = i.useMemo(() => {
            let e;
            return (null !== s &&
                null !== A &&
                (e = (0, f._e)(A.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != A && null != y)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, N.DK)({
                          proratedInvoice: A,
                          renewalInvoice: y,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [A, y, s]);
    if ((L(d, { noticeCopy: I }), null != P)) return null;
    let v = (0, m.UB)(A, n);
    if (null == A || null == y || v) return (0, l.jsx)(O, {});
    let M = (0, f.J$)(a.paymentSourceId);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.W9, {
                invoiceSummaryTypeWithPreview: {
                    type: S.N$.PREMIUM_SWITCH_PLAN,
                    invoicePreview: A,
                    renewalInvoicePreview: y,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: M,
                subscriptionTrial: null,
            }),
            (0, l.jsx)(j, {
                containerNode: u.current,
                children: (0, l.jsx)(N.Hc, {
                    currentInvoice: A,
                    renewalInvoice: y,
                    overrideRenewalDate: x,
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
        { analyticsLocations: C } = (0, T.Ay)(),
        { renewalInvoicePreview: h, renewalInvoiceError: E } = (0, c.t4)((e) => ({
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
                        items: (0, f.Pg)(t, n.id, 1, new Set(r)),
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
    (0, g.E)(A), (0, u.F0)(h, E);
    let { renewalDate: y, planSwitchNoticeCopy: S } = i.useMemo(() => {
        if (null == h) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = h.subscriptionPeriodStart;
        return (
            a.fractionalState === M.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: R.intl.format(R.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [h, a.fractionalState, a.endsAt]);
    if ((L(d, { noticeCopy: S }), null != E)) return null;
    if (null == h) return (0, l.jsx)(O, {});
    let P = (0, f.J$)(s.paymentSourceId),
        { lineItems: I } = (0, v.Ig)(h, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: P,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(x.Vm, { label: R.intl.string(b.default.eoXh7B), lineItems: I, currency: h.currency }),
            (0, l.jsx)(j, {
                containerNode: m.current,
                children: (0, l.jsx)(N.Hc, {
                    renewalInvoice: h,
                    isUpdate: !0,
                    fractionalPremiumInfo: a,
                    overrideRenewalDate: y,
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
        { analyticsLocations: u } = (0, T.Ay)(),
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
                        analyticsLocation: _.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
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
                        analyticsLocation: _.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, r, u],
        );
    (0, g.E)(d);
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
    let h = (0, f.J$)(n.paymentSourceId);
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
            shouldShowPlanSelectAndPromoBanner: m,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: E,
            newPlan: A,
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
                        directContent: (0, l.jsx)(h.l$, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                s && e.push({ type: "info", message: (0, C.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({ type: "warning", message: (0, y.i)(o), key: "payment-restriction-banner-notice" }),
                null != u && e.push({ type: "critical", message: u.message, key: "invoice-error-notice" }),
                e
            );
        }, [M, s, o, u, r, a]),
        { priceOptions: O, planPricesLoading: L } = (0, f.Pr)(I, d, u),
        w = (0, F.i)({ planSkuId: A.skuId, invoice: d }),
        k = i.useMemo(() => (m && null != w ? w : null), [m, w]),
        D = (0, W.G)(P),
        U = i.useMemo(() => (D ? (0, l.jsx)(B.a, {}) : null), [D]),
        V = i.useMemo(() => (null != k ? k : null != U ? U : null), [k, U]),
        K = (0, f.J$)(I.paymentSourceId),
        Z = null,
        q = null,
        z = M ? null : c;
    m
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
              subscriptionPlan: A,
              isPrepaidPaymentSource: K,
              isPremiumGroupPurchase: s,
              bottomSubText: z,
          }));
    let Q = E ? p : (0, l.jsx)("div", { ref: T }),
        $ = E ? null : p;
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
            planGroup: P,
            hasOpenInvoice: I,
            purchaseState: _,
            isInPastDueCheckout: T,
        } = e,
        g = (0, u.mx)(),
        { paymentSources: x, hasPaymentSources: v } = (0, o.jm)(),
        {
            selectedSkuId: N,
            paymentSourceId: M,
            priceOptions: j,
            renewalInvoicePreview: O,
            checkoutInvoicePreview: L,
            isCheckoutInvoicePreviewLoading: G,
            checkoutInvoiceError: F,
            activeSubscription: H,
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
        { isPremiumPurchase: B, isPremiumGroupPurchase: Y } = (0, c.t4)((e) => e.get("selectedPlanAttributes")),
        W = (0, c.t4)((e) => e.defaultPlanId),
        Z = (0, c.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        { isGift: q } = (0, d.Pv)(),
        z = (0, E.g)(x, M),
        { showFractionalPremiumBanner: Q, fractionalPremiumInfo: $ } = (0, C._V)({
            premiumSubscription: H,
            selectedPlanId: n,
            planGroup: P,
            isGift: q,
        }),
        X = _ === p.h.PURCHASING || _ === p.h.COMPLETED,
        J = (0, m.vT)({ isTrial: !1, isGift: q, selectedSkuId: N, startedPaymentFlowWithPaymentSources: Z }),
        ee = H?.isPausedAllowsResumeButNotUpdates,
        et = i.useMemo(() => (0, f.Tm)({ skuId: N, isPremium: B, defaultPlanId: W }), [N, W, B]),
        en = i.useRef(null),
        [el, ei] = i.useState(null),
        [er, ea] = i.useState(void 0),
        es = i.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: en, setUnifiedPlainNoticeText: ei, setOverrideRenewalDate: ea }),
            [],
        ),
        {
            content: eo,
            isInvoiceBilledImmediately: eu,
            ...ec
        } = null != H
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
                            content: (0, l.jsx)(w, {
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
                        : (0, A.Ge)(o, a, c)
                          ? {
                                content: (0, l.jsx)(k, {
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
                  { hasOpenInvoice: I, showResumeSubscriptionView: ee, planId: n },
                  {
                      disabled: X,
                      premiumSubscription: H,
                      newPlan: r,
                      planGroup: P,
                      fractionalPremiumInfo: $,
                      priceOptions: j,
                  },
                  es,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ed = H?.eligiblePaymentGateways,
        ep = null != ed && ed.length > 0 && (null == M || null === z) && v ? y.fU.SELECT_PAYMENT_METHOD : void 0,
        em = null != H ? H.paymentSourceId : null,
        eC = i.useMemo(
            () => ({
                paymentGatewayRestrictions: H?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: T
                    ? (e) => e.map((e) => (e.id === em ? { ...e, tooltipText: R.intl.string(b.default["hjsn+s"]) } : e))
                    : void 0,
                className: a()({ [K.E]: B }),
            }),
            [H?.eligiblePaymentGateways, B, T, em],
        ),
        eh = null != L || null != F,
        eE = i.useMemo(
            () =>
                eh
                    ? (0, l.jsx)(s.N, {
                          label: R.intl.string(R.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: X,
                          additionalPaymentSourceDropdownProps: eC,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: j.paymentSourceId,
                      })
                    : null,
            [eh, j.paymentSourceId, eC, t, X],
        ),
        ef = null != H && (0, A.Ge)(H, n, P) && null != g,
        eA = i.useMemo(
            () =>
                null == L || null == O || ef
                    ? null
                    : (0, l.jsx)(h.PI, {
                          fractionalPremiumInfo: $,
                          overrideRenewalDate: er,
                          activeSubscription: H,
                          isTrial: !1,
                          plan: r,
                          isGift: q,
                          paymentSourceType: z,
                          isInvoiceBilledImmediately: eu,
                          invoiceSummaryTypeWithPreview: {
                              type: S.N$.PREMIUM_SWITCH_PLAN,
                              invoicePreview: L,
                              renewalInvoicePreview: O,
                          },
                      }),
            [$, L, O, ef, er, H, r, q, z, eu],
        ),
        ey = !ee && J && !Y && !T;
    return (0, l.jsx)(V, {
        loading: G,
        disabled: X,
        isInPastDueCheckout: T,
        showFractionalPremiumBanner: Q,
        fractionalPremiumInfo: $,
        isPremiumGroupPurchase: Y,
        paymentRestrictionBannerType: ep,
        invoiceError: g,
        unifiedPlainNoticeText: el,
        invoicePreview: L,
        invoicePreviewComponent: eo,
        shouldShowPlanSelectAndPromoBanner: ey,
        shouldRenderInvoicePreviewSubscriptionDetailsDirectly: ec.shouldRenderToUnifiedSubscriptionDetailsDirectly,
        newPlan: r,
        planId: n,
        priceOptions: j,
        premiumPlanOptions: et,
        unifiedSubscriptionDetailsNode: en,
        isInvoiceBilledImmediately: eu,
        paymentMethodContent: eE,
        legalContent: eA,
    });
}
