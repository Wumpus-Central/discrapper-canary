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
    h = n(222707),
    C = n(340034),
    A = n(216641),
    E = n(428262),
    f = n(615396),
    y = n(218075),
    S = n(299301),
    P = n(340287),
    T = n(289873),
    I = n(793574),
    _ = n(688810),
    g = n(473617),
    x = n(270537),
    v = n(888751),
    N = n(692440),
    b = n(202541),
    R = n(375708),
    M = n(327105);
function j(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : P.createPortal(t, n);
}
function O() {
    return (0, l.jsx)(T.y, { type: T.y.Type.PULSING_ELLIPSIS });
}
function L(e, t) {
    let { noticeCopy: n } = t;
    i.useEffect(() => {
        null != n ? e(n) : e(null);
    }, [e, n]);
}
function w(e, t) {
    let { overrideRenewalDate: n } = t;
    i.useEffect(() => {
        e(n);
    }, [e, n]);
}
function D(e) {
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
    let h = i.useMemo(() => {
        if (null != p) return (0, N.de)({ currentInvoice: p, renewalInvoice: p, fractionalPremiumInfo: a });
    }, [p, a]);
    w(o, { overrideRenewalDate: h });
    let C = (0, E.J$)(n.paymentSourceId);
    if (null != p) {
        let e = t.items.length > 1,
            n = (0, l.jsx)(N.m0, { renewalInvoice: p, isUpdate: !0, overrideRenewalDate: h, defaultExpanded: e }),
            i = (0, l.jsx)(N._J, { invoice: p, isPrepaidPaymentSource: C });
        return (0, l.jsxs)(l.Fragment, { children: [i, (0, l.jsx)(j, { containerNode: s.current, children: n })] });
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
        { analyticsLocations: h } = (0, _.Ay)(),
        A = (0, E.Pg)(t, n.id, 1, new Set(r)),
        {
            proratedInvoicePreview: f,
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
            (0, g.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
            let {
                checkoutInvoicePreview: d,
                checkoutInvoiceError: p,
                renewalInvoicePreview: m,
                renewalInvoiceError: h,
            } = (0, c.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: i.useMemo(() => p ?? h, [p, h]),
                proratedInvoicePreview: d,
                proratedInvoiceError: p,
                renewalInvoicePreview: m,
                renewalInvoiceError: h,
            };
        })({ premiumSubscription: t, newItems: A, priceOptions: a, preventFetch: o, analyticsLocations: h }),
        { planSwitchNoticeCopy: T, overrideRenewalDate: x } = i.useMemo(() => {
            let e;
            return (null !== s &&
                null !== f &&
                (e = (0, E._e)(f.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != f && null != y)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, N.DK)({
                          proratedInvoice: f,
                          renewalInvoice: y,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [f, y, s]);
    if ((w(p, { overrideRenewalDate: x }), L(d, { noticeCopy: T }), null != P)) return null;
    let v = (0, m.UB)(f, n);
    if (null == f || null == y || v) return (0, l.jsx)(O, {});
    let b = (0, E.J$)(a.paymentSourceId),
        R = (0, l.jsx)(N.m0, {
            proratedInvoice: f,
            renewalInvoice: y,
            overrideRenewalDate: x,
            fractionalPremiumInfo: s,
            isUpdate: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(C.W9, {
                invoiceSummaryTypeWithPreview: {
                    type: S.N$.PREMIUM_SWITCH_PLAN,
                    invoicePreview: f,
                    renewalInvoicePreview: y,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: b,
                subscriptionTrial: null,
            }),
            (0, l.jsx)(j, { containerNode: u.current, children: R }),
        ],
    });
}
function U(e) {
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
        { analyticsLocations: h } = (0, _.Ay)(),
        { renewalInvoicePreview: C, renewalInvoiceError: A } = (0, c.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        f = i.useMemo(
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
                        analyticsLocations: h,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
                    },
                },
                shouldAllowNullState: !0,
            }),
            [t, n.id, r, s.paymentSourceId, s.currency, o, h],
        );
    (0, g.E)(f), (0, u.F0)(C, A);
    let { renewalDate: y, planSwitchNoticeCopy: S } = i.useMemo(() => {
        if (null == C) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = C.subscriptionPeriodStart;
        return (
            a.fractionalState === b.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: R.intl.format(R.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [C, a.fractionalState, a.endsAt]);
    if ((w(p, { overrideRenewalDate: y }), L(d, { noticeCopy: S }), null != A)) return null;
    if (null == C) return (0, l.jsx)(O, {});
    let P = (0, E.J$)(s.paymentSourceId),
        T = (0, l.jsx)(N.m0, {
            renewalInvoice: C,
            isUpdate: !0,
            fractionalPremiumInfo: a,
            overrideRenewalDate: y,
            defaultExpanded: !0,
        }),
        { lineItems: I } = (0, v.Ig)(C, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: P,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(x.Vm, { label: R.intl.string(M.default.eoXh7B), lineItems: I, currency: C.currency }),
            (0, l.jsx)(j, { containerNode: m.current, children: T }),
        ],
    });
}
function G(e) {
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
    (0, g.E)(d);
    let {
        resumeInvoicePreview: p,
        renewalInvoicePreview: m,
        primaryInvoiceError: h,
    } = (0, c.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((L(o, { noticeCopy: i.useMemo(() => R.intl.string(R.t.spIYou), []) }), null != h)) return null;
    if (null == p || null == m) return (0, l.jsx)(O, {});
    let C = (0, E.J$)(n.paymentSourceId),
        A = (0, l.jsx)(N.m0, { renewalInvoice: m, isUpdate: !0, fractionalPremiumInfo: a }),
        f = (0, l.jsx)(N._J, { invoice: p, isPrepaidPaymentSource: C });
    return (0, l.jsxs)(l.Fragment, { children: [f, (0, l.jsx)(j, { containerNode: s.current, children: A })] });
}
n(321073);
var F = n(38785),
    B = n(577381),
    Y = n(845012),
    H = n(755880),
    W = n(134638),
    V = n(906234);
function K(e) {
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
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: A,
            newPlan: f,
            planId: P,
            priceOptions: T,
            premiumPlanOptions: I,
            unifiedSubscriptionDetailsNode: _,
            isInvoiceBilledImmediately: g,
            paymentMethodContent: x,
            legalContent: v,
            isInPastDueCheckout: b,
        } = e,
        j = i.useMemo(() => {
            let e = [];
            return (
                b &&
                    e.push({
                        type: "warning",
                        message: R.intl.string(M.default["yrk+N6"]),
                        key: "past-due-restore-notice",
                    }),
                r &&
                    e.push({
                        directContent: (0, l.jsx)(C.l$, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                s && e.push({ type: "info", message: (0, h.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({ type: "warning", message: (0, y.i)(o), key: "payment-restriction-banner-notice" }),
                null != u && e.push({ type: "critical", message: u.message, key: "invoice-error-notice" }),
                e
            );
        }, [b, s, o, u, r, a]),
        { priceOptions: O, planPricesLoading: L } = (0, E.Pr)(T, d, u),
        w = (0, B.i)({ planSkuId: f.skuId, invoice: d }),
        D = i.useMemo(() => (m && null != w ? w : null), [m, w]),
        k = (0, V.G)(P),
        U = i.useMemo(() => (k ? (0, l.jsx)(H.a, {}) : null), [k]),
        G = i.useMemo(() => (null != D ? D : null != U ? U : null), [D, U]),
        K = (0, E.J$)(T.paymentSourceId),
        q = null,
        Z = null,
        z = b ? null : c;
    m
        ? (Z = (0, l.jsx)(Y.X, {
              disabled: n,
              headingSubText: z,
              planOptions: I,
              selectedPlanId: P,
              showPlanStatusSubText: !0,
              priceOptions: O,
              planPricesLoading: L,
          }))
        : null != d &&
          (q = (0, l.jsx)(W._, {
              type: S.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: d,
              subscriptionPlan: f,
              isPrepaidPaymentSource: K,
              isPremiumGroupPurchase: s,
              bottomSubText: z,
          }));
    let $ = A ? p : (0, l.jsx)("div", { ref: _ }),
        Q = A ? null : p;
    return (0, l.jsx)(F.T_, {
        isStepLoading: t,
        shouldShowGlobalNotices: !0,
        showUpperNoticesAboveGlobalNotices: b,
        upperInlineNoticeProps: j,
        paymentMethodContent: x,
        subscriptionDetailsContent: $,
        purchaseItemContent: q,
        planSelectContent: Z,
        invoiceSummaryContent: Q,
        legalContent: v,
        invoiceTotalDueLabel: g ? R.intl.string(M.default.R0cZsM) : R.intl.string(M.default["11g67A"]),
        invoiceTotalDueValue: null != d ? (0, N.U5)(d) : void 0,
        promotionalNoticeContent: G,
    });
}
var q = n(207715);
function Z(e) {
    let {
            handlePaymentSourceAdd: t,
            verifiedPlanId: n,
            selectedPlan: r,
            planGroup: P,
            hasOpenInvoice: T,
            purchaseState: I,
            isInPastDueCheckout: _,
        } = e,
        g = (0, u.mx)(),
        { paymentSources: x, hasPaymentSources: v } = (0, o.jm)(),
        {
            selectedSkuId: N,
            paymentSourceId: b,
            priceOptions: j,
            renewalInvoicePreview: O,
            checkoutInvoicePreview: L,
            isCheckoutInvoicePreviewLoading: w,
            checkoutInvoiceError: F,
            activeSubscription: B,
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
        { isPremiumPurchase: Y, isPremiumGroupPurchase: H } = (0, c.t4)((e) => e.get("selectedPlanAttributes")),
        W = (0, c.t4)((e) => e.defaultPlanId),
        V = (0, c.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        { isGift: Z } = (0, d.Pv)(),
        z = (0, A.g)(x, b),
        { showFractionalPremiumBanner: $, fractionalPremiumInfo: Q } = (0, h._V)({
            premiumSubscription: B,
            selectedPlanId: n,
            planGroup: P,
            isGift: Z,
        }),
        J = I === p.h.PURCHASING || I === p.h.COMPLETED,
        X = (0, m.vT)({ isTrial: !1, isGift: Z, selectedSkuId: N, startedPaymentFlowWithPaymentSources: V }),
        ee = B?.isPausedAllowsResumeButNotUpdates,
        et = i.useMemo(() => (0, E.Tm)({ skuId: N, isPremium: Y, defaultPlanId: W }), [N, W, Y]),
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
        } = null != B
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
                            content: (0, l.jsx)(D, {
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
                              content: (0, l.jsx)(G, {
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
                                content: (0, l.jsx)(U, {
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
                  { hasOpenInvoice: T, showResumeSubscriptionView: ee, planId: n },
                  {
                      disabled: J,
                      premiumSubscription: B,
                      newPlan: r,
                      planGroup: P,
                      fractionalPremiumInfo: Q,
                      priceOptions: j,
                  },
                  es,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ed = B?.eligiblePaymentGateways,
        ep = null != ed && ed.length > 0 && (null == b || null === z) && v ? y.fU.SELECT_PAYMENT_METHOD : void 0,
        em = null != B ? B.paymentSourceId : null,
        eh = i.useMemo(
            () => ({
                paymentGatewayRestrictions: B?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: _
                    ? (e) => e.map((e) => (e.id === em ? { ...e, tooltipText: R.intl.string(M.default["hjsn+s"]) } : e))
                    : void 0,
                className: a()({ [q.E]: Y }),
            }),
            [B?.eligiblePaymentGateways, Y, _, em],
        ),
        eC = null != L || null != F,
        eA = i.useMemo(
            () =>
                eC
                    ? (0, l.jsx)(s.N, {
                          label: R.intl.string(R.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: J,
                          additionalPaymentSourceDropdownProps: eh,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: j.paymentSourceId,
                      })
                    : null,
            [eC, j.paymentSourceId, eh, t, J],
        ),
        eE = null != B && (0, f.Ge)(B, n, P) && null != g,
        ef = i.useMemo(
            () =>
                null == L || null == O || eE
                    ? null
                    : (0, l.jsx)(C.PI, {
                          overrideRenewalDate: er,
                          activeSubscription: B,
                          isTrial: !1,
                          plan: r,
                          isGift: Z,
                          paymentSourceType: z,
                          isInvoiceBilledImmediately: eu,
                          invoiceSummaryTypeWithPreview: {
                              type: S.N$.PREMIUM_SWITCH_PLAN,
                              invoicePreview: L,
                              renewalInvoicePreview: O,
                          },
                      }),
            [L, O, eE, er, B, r, Z, z, eu],
        ),
        ey = !ee && X && !H && !_;
    return (0, l.jsx)(K, {
        loading: w,
        disabled: J,
        isInPastDueCheckout: _,
        showFractionalPremiumBanner: $,
        fractionalPremiumInfo: Q,
        isPremiumGroupPurchase: H,
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
        paymentMethodContent: eA,
        legalContent: ef,
    });
}
