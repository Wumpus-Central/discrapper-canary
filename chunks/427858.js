n.d(t, { A: () => q });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(319668),
    o = n(426398),
    u = n(666646),
    c = n(6938),
    d = n(937008),
    p = n(566980),
    m = n(800471),
    C = n(222707),
    h = n(340034),
    E = n(216641),
    A = n(428262),
    S = n(615396),
    f = n(218075),
    y = n(299301),
    P = n(340287),
    T = n(289873),
    _ = n(793574),
    I = n(688810),
    g = n(473617),
    v = n(270537),
    x = n(888751),
    N = n(458785),
    R = n(202541),
    b = n(375708),
    M = n(327105);
function O(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : P.createPortal(t, n);
}
function j() {
    return (0, l.jsx)(T.y, { type: T.y.Type.PULSING_ELLIPSIS });
}
function L(e, t) {
    let { noticeCopy: n } = t;
    i.useEffect(() => {
        null != n ? e(n) : e(null);
    }, [e, n]);
}
function D(e, t) {
    let { overrideRenewalDate: n } = t;
    i.useEffect(() => {
        e(n);
    }, [e, n]);
}
function w(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: r,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: s,
        } = e,
        o = i.useMemo(
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
    (0, g.E)(o);
    let { checkoutInvoicePreview: d, checkoutInvoiceError: p } = (0, c.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, u.Tr)(d, p);
    let m = (0, A.J$)(n.paymentSourceId);
    if (null != d) {
        let e = (0, l.jsx)(N.m0, { renewalInvoice: d, isUpdate: !0, fractionalPremiumInfo: a }),
            t = (0, l.jsx)(N._J, { invoice: d, isPrepaidPaymentSource: m });
        return (0, l.jsxs)(l.Fragment, { children: [t, (0, l.jsx)(O, { containerNode: s.current, children: e })] });
    }
    return (0, l.jsx)(j, {});
}
function U(e) {
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
        { analyticsLocations: C } = (0, I.Ay)(),
        E = (0, A.Pg)(t, n.id, 1, new Set(r)),
        {
            proratedInvoicePreview: S,
            renewalInvoicePreview: f,
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
        { planSwitchNoticeCopy: T, overrideRenewalDate: v } = i.useMemo(() => {
            let e;
            return (null !== s &&
                null !== S &&
                (e = (0, A._e)(S.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != S && null != f)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, N.DK)({
                          proratedInvoice: S,
                          renewalInvoice: f,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [S, f, s]);
    if ((D(p, { overrideRenewalDate: v }), L(d, { noticeCopy: T }), null != P)) return null;
    let x = (0, m.UB)(S, n);
    if (null == S || null == f || x) return (0, l.jsx)(j, {});
    let R = (0, A.J$)(a.paymentSourceId),
        b = (0, l.jsx)(N.m0, {
            proratedInvoice: S,
            renewalInvoice: f,
            overrideRenewalDate: v,
            fractionalPremiumInfo: s,
            isUpdate: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.W9, {
                invoiceSummaryTypeWithPreview: {
                    type: y.N$.PREMIUM_SWITCH_PLAN,
                    invoicePreview: S,
                    renewalInvoicePreview: f,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: R,
                subscriptionTrial: null,
            }),
            (0, l.jsx)(O, { containerNode: u.current, children: b }),
        ],
    });
}
function k(e) {
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
        { analyticsLocations: C } = (0, I.Ay)(),
        { renewalInvoicePreview: h, renewalInvoiceError: E } = (0, c.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        S = i.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: null,
                fetchRenewalInvoicePreviewRequest: {
                    type: "premium_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        items: (0, A.Pg)(t, n.id, 1, new Set(r)),
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
    (0, g.E)(S), (0, u.F0)(h, E);
    let { renewalDate: f, planSwitchNoticeCopy: y } = i.useMemo(() => {
        if (null == h) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = h.subscriptionPeriodStart;
        return (
            a.fractionalState === R.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: b.intl.format(b.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [h, a.fractionalState, a.endsAt]);
    if ((D(p, { overrideRenewalDate: f }), L(d, { noticeCopy: y }), null != E)) return null;
    if (null == h) return (0, l.jsx)(j, {});
    let P = (0, A.J$)(s.paymentSourceId),
        T = (0, l.jsx)(N.m0, {
            renewalInvoice: h,
            isUpdate: !0,
            fractionalPremiumInfo: a,
            overrideRenewalDate: f,
            defaultExpanded: !0,
        }),
        { lineItems: _ } = (0, x.Ig)(h, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: P,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(v.Vm, { label: b.intl.string(M.default.eoXh7B), lineItems: _, currency: h.currency }),
            (0, l.jsx)(O, { containerNode: m.current, children: T }),
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
        { analyticsLocations: u } = (0, I.Ay)(),
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
    if ((L(o, { noticeCopy: i.useMemo(() => b.intl.string(b.t.spIYou), []) }), null != C)) return null;
    if (null == p || null == m) return (0, l.jsx)(j, {});
    let h = (0, A.J$)(n.paymentSourceId),
        E = (0, l.jsx)(N.m0, { renewalInvoice: m, isUpdate: !0, fractionalPremiumInfo: a }),
        S = (0, l.jsx)(N._J, { invoice: p, isPrepaidPaymentSource: h });
    return (0, l.jsxs)(l.Fragment, { children: [S, (0, l.jsx)(O, { containerNode: s.current, children: E })] });
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
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: E,
            newPlan: S,
            planId: P,
            priceOptions: T,
            premiumPlanOptions: _,
            unifiedSubscriptionDetailsNode: I,
            isInvoiceBilledImmediately: g,
            paymentMethodContent: v,
            legalContent: x,
            isInPastDueCheckout: R,
        } = e,
        O = i.useMemo(() => {
            let e = [];
            return (
                R &&
                    e.push({
                        type: "warning",
                        message: b.intl.string(M.default["yrk+N6"]),
                        key: "past-due-restore-notice",
                    }),
                r &&
                    e.push({
                        directContent: (0, l.jsx)(h.l$, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                s && e.push({ type: "info", message: (0, C.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({ type: "warning", message: (0, f.i)(o), key: "payment-restriction-banner-notice" }),
                null != u && e.push({ type: "critical", message: u.message, key: "invoice-error-notice" }),
                e
            );
        }, [R, s, o, u, r, a]),
        { priceOptions: j, planPricesLoading: L } = (0, A.Pr)(T, d, u),
        D = (0, B.i)({ planSkuId: S.skuId, invoice: d }),
        w = i.useMemo(() => (m && null != D ? D : null), [m, D]),
        U = (0, V.G)(P),
        k = i.useMemo(() => (U ? (0, l.jsx)(H.a, {}) : null), [U]),
        G = i.useMemo(() => (null != w ? w : null != k ? k : null), [w, k]),
        K = (0, A.J$)(T.paymentSourceId),
        Z = null,
        q = null,
        z = R ? null : c;
    m
        ? (q = (0, l.jsx)(Y.X, {
              disabled: n,
              headingSubText: z,
              planOptions: _,
              selectedPlanId: P,
              showPlanStatusSubText: !0,
              priceOptions: j,
              planPricesLoading: L,
          }))
        : null != d &&
          (Z = (0, l.jsx)(W._, {
              type: y.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: d,
              subscriptionPlan: S,
              isPrepaidPaymentSource: K,
              isPremiumGroupPurchase: s,
              bottomSubText: z,
          }));
    let $ = E ? p : (0, l.jsx)("div", { ref: I }),
        Q = E ? null : p;
    return (0, l.jsx)(F.T_, {
        isStepLoading: t,
        shouldShowGlobalNotices: !0,
        showUpperNoticesAboveGlobalNotices: R,
        upperInlineNoticeProps: O,
        paymentMethodContent: v,
        subscriptionDetailsContent: $,
        purchaseItemContent: Z,
        planSelectContent: q,
        invoiceSummaryContent: Q,
        legalContent: x,
        invoiceTotalDueLabel: g ? b.intl.string(M.default.R0cZsM) : b.intl.string(M.default["11g67A"]),
        invoiceTotalDueValue: null != d ? (0, N.U5)(d) : void 0,
        promotionalNoticeContent: G,
    });
}
var Z = n(207715);
function q(e) {
    let {
            handlePaymentSourceAdd: t,
            verifiedPlanId: n,
            selectedPlan: r,
            planGroup: P,
            hasOpenInvoice: T,
            purchaseState: _,
            isInPastDueCheckout: I,
        } = e,
        g = (0, u.mx)(),
        { paymentSources: v, hasPaymentSources: x } = (0, o.jm)(),
        {
            selectedSkuId: N,
            paymentSourceId: R,
            priceOptions: O,
            renewalInvoicePreview: j,
            checkoutInvoicePreview: L,
            isCheckoutInvoicePreviewLoading: D,
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
        { isGift: q } = (0, d.Pv)(),
        z = (0, E.g)(v, R),
        { showFractionalPremiumBanner: $, fractionalPremiumInfo: Q } = (0, C._V)({
            premiumSubscription: B,
            selectedPlanId: n,
            planGroup: P,
            isGift: q,
        }),
        J = _ === p.h.PURCHASING || _ === p.h.COMPLETED,
        X = (0, m.vT)({ isTrial: !1, isGift: q, selectedSkuId: N, startedPaymentFlowWithPaymentSources: V }),
        ee = B?.isPausedAllowsResumeButNotUpdates,
        et = i.useMemo(() => (0, A.Tm)({ skuId: N, isPremium: Y, defaultPlanId: W }), [N, W, Y]),
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
                        : (0, S.Ge)(o, a, c)
                          ? {
                                content: (0, l.jsx)(U, {
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
                                content: (0, l.jsx)(k, {
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
                      priceOptions: O,
                  },
                  es,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ed = B?.eligiblePaymentGateways,
        ep = null != ed && ed.length > 0 && (null == R || null === z) && x ? f.fU.SELECT_PAYMENT_METHOD : void 0,
        em = null != B ? B.paymentSourceId : null,
        eC = i.useMemo(
            () => ({
                paymentGatewayRestrictions: B?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: I
                    ? (e) => e.map((e) => (e.id === em ? { ...e, tooltipText: b.intl.string(M.default["hjsn+s"]) } : e))
                    : void 0,
                className: a()({ [Z.E]: Y }),
            }),
            [B?.eligiblePaymentGateways, Y, I, em],
        ),
        eh = null != L || null != F,
        eE = i.useMemo(
            () =>
                eh
                    ? (0, l.jsx)(s.N, {
                          label: b.intl.string(b.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: J,
                          additionalPaymentSourceDropdownProps: eC,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: O.paymentSourceId,
                      })
                    : null,
            [eh, O.paymentSourceId, eC, t, J],
        ),
        eA = null != B && (0, S.Ge)(B, n, P) && null != g,
        eS = i.useMemo(
            () =>
                null == L || null == j || eA
                    ? null
                    : (0, l.jsx)(h.PI, {
                          overrideRenewalDate: er,
                          activeSubscription: B,
                          isTrial: !1,
                          plan: r,
                          isGift: q,
                          paymentSourceType: z,
                          isInvoiceBilledImmediately: eu,
                          invoiceSummaryTypeWithPreview: {
                              type: y.N$.PREMIUM_SWITCH_PLAN,
                              invoicePreview: L,
                              renewalInvoicePreview: j,
                          },
                      }),
            [L, j, eA, er, B, r, q, z, eu],
        ),
        ef = !ee && X && !H && !I;
    return (0, l.jsx)(K, {
        loading: D,
        disabled: J,
        isInPastDueCheckout: I,
        showFractionalPremiumBanner: $,
        fractionalPremiumInfo: Q,
        isPremiumGroupPurchase: H,
        paymentRestrictionBannerType: ep,
        invoiceError: g,
        unifiedPlainNoticeText: el,
        invoicePreview: L,
        invoicePreviewComponent: eo,
        shouldShowPlanSelectAndPromoBanner: ef,
        shouldRenderInvoicePreviewSubscriptionDetailsDirectly: ec.shouldRenderToUnifiedSubscriptionDetailsDirectly,
        newPlan: r,
        planId: n,
        priceOptions: O,
        premiumPlanOptions: et,
        unifiedSubscriptionDetailsNode: en,
        isInvoiceBilledImmediately: eu,
        paymentMethodContent: eE,
        legalContent: eS,
    });
}
