n.d(t, { A: () => q });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(319668),
    o = n(426398),
    u = n(666646),
    c = n(650170),
    d = n(937008),
    p = n(566980),
    m = n(800471),
    h = n(222707),
    C = n(340034),
    E = n(216641),
    A = n(428262),
    f = n(615396),
    S = n(218075),
    y = n(299301),
    P = n(340287),
    I = n(289873),
    T = n(793574),
    _ = n(688810),
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
    return (0, l.jsx)(I.y, {});
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
function U(e) {
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
        { analyticsLocations: h } = (0, _.Ay)(),
        E = (0, A.Pg)(t, n.id, 1, new Set(r)),
        {
            proratedInvoicePreview: f,
            renewalInvoicePreview: S,
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
                        analyticsLocation: T.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
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
        })({ premiumSubscription: t, newItems: E, priceOptions: a, preventFetch: o, analyticsLocations: h }),
        { planSwitchNoticeCopy: I, overrideRenewalDate: v } = i.useMemo(() => {
            let e;
            return (null !== s &&
                null !== f &&
                (e = (0, A._e)(f.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != f && null != S)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, N.DK)({
                          proratedInvoice: f,
                          renewalInvoice: S,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [f, S, s]);
    if ((D(p, { overrideRenewalDate: v }), L(d, { noticeCopy: I }), null != P)) return null;
    let x = (0, m.UB)(f, n);
    if (null == f || null == S || x) return (0, l.jsx)(j, {});
    let R = (0, A.J$)(a.paymentSourceId),
        b = (0, l.jsx)(N.m0, {
            proratedInvoice: f,
            renewalInvoice: S,
            overrideRenewalDate: v,
            fractionalPremiumInfo: s,
            isUpdate: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(C.W9, {
                invoiceSummaryTypeWithPreview: {
                    type: y.N$.PREMIUM_SWITCH_PLAN,
                    invoicePreview: f,
                    renewalInvoicePreview: S,
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
        { analyticsLocations: h } = (0, _.Ay)(),
        { renewalInvoicePreview: C, renewalInvoiceError: E } = (0, c.t4)((e) => ({
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
                        items: (0, A.Pg)(t, n.id, 1, new Set(r)),
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
    (0, g.E)(f), (0, u.F0)(C, E);
    let { renewalDate: S, planSwitchNoticeCopy: y } = i.useMemo(() => {
        if (null == C) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = C.subscriptionPeriodStart;
        return (
            a.fractionalState === R.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: b.intl.format(b.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [C, a.fractionalState, a.endsAt]);
    if ((D(p, { overrideRenewalDate: S }), L(d, { noticeCopy: y }), null != E)) return null;
    if (null == C) return (0, l.jsx)(j, {});
    let P = (0, A.J$)(s.paymentSourceId),
        I = (0, l.jsx)(N.m0, {
            renewalInvoice: C,
            isUpdate: !0,
            fractionalPremiumInfo: a,
            overrideRenewalDate: S,
            defaultExpanded: !0,
        }),
        { lineItems: T } = (0, x.Ig)(C, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: P,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(v.Vm, { label: b.intl.string(M.default.eoXh7B), lineItems: T, currency: C.currency }),
            (0, l.jsx)(O, { containerNode: m.current, children: I }),
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
                        analyticsLocation: T.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
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
                        analyticsLocation: T.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
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
    if ((L(o, { noticeCopy: i.useMemo(() => b.intl.string(b.t.spIYou), []) }), null != h)) return null;
    if (null == p || null == m) return (0, l.jsx)(j, {});
    let C = (0, A.J$)(n.paymentSourceId),
        E = (0, l.jsx)(N.m0, { renewalInvoice: m, isUpdate: !0, fractionalPremiumInfo: a }),
        f = (0, l.jsx)(N._J, { invoice: p, isPrepaidPaymentSource: C });
    return (0, l.jsxs)(l.Fragment, { children: [f, (0, l.jsx)(O, { containerNode: s.current, children: E })] });
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
            disabled: t,
            showFractionalPremiumBanner: n,
            fractionalPremiumInfo: r,
            isPremiumGroupPurchase: a,
            paymentRestrictionBannerType: s,
            invoiceError: o,
            unifiedPlainNoticeText: u,
            invoicePreview: c,
            invoicePreviewComponent: d,
            shouldShowPlanSelectAndPromoBanner: p,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: m,
            newPlan: E,
            planId: f,
            priceOptions: P,
            premiumPlanOptions: I,
            unifiedSubscriptionDetailsNode: T,
            isInvoiceBilledImmediately: _,
            paymentMethodContent: g,
            legalContent: v,
            isInPastDueCheckout: x,
        } = e,
        R = i.useMemo(() => {
            let e = [];
            return (
                x &&
                    e.push({
                        type: "warning",
                        message: b.intl.string(M.default["yrk+N6"]),
                        key: "past-due-restore-notice",
                    }),
                n &&
                    e.push({
                        directContent: (0, l.jsx)(C.l$, { fractionalPremiumInfo: r }),
                        key: "fractional-premium-notice",
                    }),
                a && e.push({ type: "info", message: (0, h.Nn)(), key: "premium-group-purchase-notice" }),
                null != s &&
                    e.push({ type: "warning", message: (0, S.i)(s), key: "payment-restriction-banner-notice" }),
                null != o && e.push({ type: "critical", message: o.message, key: "invoice-error-notice" }),
                e
            );
        }, [x, a, s, o, n, r]),
        { priceOptions: O, planPricesLoading: j } = (0, A.Pr)(P, c, o),
        L = (0, B.i)({ planSkuId: E.skuId, invoice: c }),
        D = i.useMemo(() => (p && null != L ? L : null), [p, L]),
        U = (0, V.G)(f),
        w = i.useMemo(() => (U ? (0, l.jsx)(H.a, {}) : null), [U]),
        k = i.useMemo(() => (null != D ? D : null != w ? w : null), [D, w]),
        G = (0, A.J$)(P.paymentSourceId),
        K = null,
        Z = null,
        q = x ? null : u;
    p
        ? (Z = (0, l.jsx)(Y.X, {
              disabled: t,
              headingSubText: q,
              planOptions: I,
              selectedPlanId: f,
              showPlanStatusSubText: !0,
              priceOptions: O,
              planPricesLoading: j,
          }))
        : null != c &&
          (K = (0, l.jsx)(W._, {
              type: y.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: c,
              subscriptionPlan: E,
              isPrepaidPaymentSource: G,
              isPremiumGroupPurchase: a,
              bottomSubText: q,
          }));
    let z = m ? d : (0, l.jsx)("div", { ref: T }),
        $ = m ? null : d;
    return (0, l.jsx)(F.T, {
        shouldShowGlobalNotices: !0,
        showUpperNoticesAboveGlobalNotices: x,
        upperInlineNoticeProps: R,
        paymentMethodContent: g,
        subscriptionDetailsContent: z,
        purchaseItemContent: K,
        planSelectContent: Z,
        invoiceSummaryContent: $,
        legalContent: v,
        invoiceTotalDueLabel: _ ? b.intl.string(M.default.R0cZsM) : b.intl.string(M.default["11g67A"]),
        invoiceTotalDueValue: null != c ? (0, N.U5)(c) : void 0,
        promotionalNoticeContent: k,
    });
}
var Z = n(207715);
function q(e) {
    let {
            handlePaymentSourceAdd: t,
            verifiedPlanId: n,
            selectedPlan: r,
            planGroup: P,
            hasOpenInvoice: I,
            purchaseState: T,
            isInPastDueCheckout: _,
        } = e,
        g = (0, u.mx)(),
        { paymentSources: v, hasPaymentSources: x } = (0, o.jm)(),
        {
            selectedSkuId: N,
            paymentSourceId: R,
            priceOptions: O,
            renewalInvoicePreview: j,
            checkoutInvoicePreview: L,
            checkoutInvoiceError: D,
            activeSubscription: F,
        } = (0, c.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            renewalInvoicePreview: e.renewalInvoicePreview,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutInvoiceError: e.checkoutInvoiceError,
            activeSubscription: e.activeSubscription,
        })),
        { isPremiumPurchase: B, isPremiumGroupPurchase: Y } = (0, c.t4)((e) => e.get("selectedPlanAttributes")),
        H = (0, c.t4)((e) => e.defaultPlanId),
        W = (0, c.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        { isGift: V } = (0, d.Pv)(),
        q = (0, E.g)(v, R),
        { showFractionalPremiumBanner: z, fractionalPremiumInfo: $ } = (0, h._V)({
            premiumSubscription: F,
            selectedPlanId: n,
            planGroup: P,
            isGift: V,
        }),
        X = T === p.h.PURCHASING || T === p.h.COMPLETED,
        Q = (0, m.vT)({ isTrial: !1, isGift: V, selectedSkuId: N, startedPaymentFlowWithPaymentSources: W }),
        J = F?.isPausedAllowsResumeButNotUpdates,
        ee = i.useMemo(() => (0, A.Tm)({ skuId: N, isPremium: B, defaultPlanId: H }), [N, H, B]),
        et = i.useRef(null),
        [en, el] = i.useState(null),
        [ei, er] = i.useState(void 0),
        ea = i.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: et, setUnifiedPlainNoticeText: el, setOverrideRenewalDate: er }),
            [],
        ),
        {
            content: es,
            isInvoiceBilledImmediately: eo,
            ...eu
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
                            content: (0, l.jsx)(U, {
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
                  { hasOpenInvoice: I, showResumeSubscriptionView: J, planId: n },
                  {
                      disabled: X,
                      premiumSubscription: F,
                      newPlan: r,
                      planGroup: P,
                      fractionalPremiumInfo: $,
                      priceOptions: O,
                  },
                  ea,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ec = F?.eligiblePaymentGateways,
        ed = null != ec && ec.length > 0 && (null == R || null === q) && x ? S.fU.SELECT_PAYMENT_METHOD : void 0,
        ep = null != F ? F.paymentSourceId : null,
        em = i.useMemo(
            () => ({
                paymentGatewayRestrictions: F?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: _
                    ? (e) => e.map((e) => (e.id === ep ? { ...e, tooltipText: b.intl.string(M.default["hjsn+s"]) } : e))
                    : void 0,
                className: a()({ [Z.E]: B }),
            }),
            [F?.eligiblePaymentGateways, B, _, ep],
        ),
        eh = null != L || null != D,
        eC = i.useMemo(
            () =>
                eh
                    ? (0, l.jsx)(s.N, {
                          label: b.intl.string(b.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: X,
                          additionalPaymentSourceDropdownProps: em,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: O.paymentSourceId,
                      })
                    : null,
            [eh, O.paymentSourceId, em, t, X],
        ),
        eE = null != F && (0, f.Ge)(F, n, P),
        eA =
            null != L && null != j
                ? (0, l.jsx)(C.PI, {
                      overrideRenewalDate: ei,
                      activeSubscription: F,
                      isTrial: !1,
                      plan: r,
                      isGift: V,
                      paymentSourceType: q,
                      isInvoiceBilledImmediately: eo,
                      invoiceSummaryTypeWithPreview: {
                          type: y.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: L,
                          renewalInvoicePreview: j,
                      },
                      hideLegalContent: eE && null != g,
                  })
                : null,
        ef = !J && Q && !Y && !_;
    return (0, l.jsx)(K, {
        disabled: X,
        isInPastDueCheckout: _,
        showFractionalPremiumBanner: z,
        fractionalPremiumInfo: $,
        isPremiumGroupPurchase: Y,
        paymentRestrictionBannerType: ed,
        invoiceError: g,
        unifiedPlainNoticeText: en,
        invoicePreview: L,
        invoicePreviewComponent: es,
        shouldShowPlanSelectAndPromoBanner: ef,
        shouldRenderInvoicePreviewSubscriptionDetailsDirectly: eu.shouldRenderToUnifiedSubscriptionDetailsDirectly,
        newPlan: r,
        planId: n,
        priceOptions: O,
        premiumPlanOptions: ee,
        unifiedSubscriptionDetailsNode: et,
        isInvoiceBilledImmediately: eo,
        paymentMethodContent: eC,
        legalContent: eA,
    });
}
