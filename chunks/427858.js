n.d(t, { A: () => q });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(319668),
    o = n(202475),
    u = n(400612),
    c = n(666646),
    d = n(316915),
    p = n(951305),
    m = n(566980),
    C = n(222707),
    h = n(340034),
    E = n(216641),
    f = n(428262),
    A = n(615396),
    S = n(218075),
    y = n(333007),
    P = n(289873),
    I = n(793574),
    _ = n(688810),
    T = n(482419),
    g = n(473617),
    v = n(848584),
    x = n(800471),
    N = n(888751),
    R = n(692440),
    b = n(202541),
    M = n(375708),
    j = n(327105);
function O(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : y.createPortal(t, n);
}
function L() {
    return (0, l.jsx)(P.y, { type: P.y.Type.PULSING_ELLIPSIS });
}
function w(e, t) {
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
        u = i.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "subscription_checkout_invoice_get_request",
                    params: { subscriptionId: t.id, preventFetch: r },
                },
                fetchRenewalInvoicePreviewRequest: null,
                shouldAllowNullState: !0,
            }),
            [t.id, r],
        );
    (0, g.E)(u);
    let { checkoutInvoicePreview: p, checkoutInvoiceError: m } = (0, d.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, c.Tr)(p, m);
    let C = (0, f.J$)(n.paymentSourceId);
    if (null != p) {
        let e = t.items.length > 1;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(R._J, { invoice: p, isPrepaidPaymentSource: C }),
                (0, l.jsx)(O, {
                    containerNode: s.current,
                    children: (0, l.jsx)(R.Hc, {
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
    return (0, l.jsx)(L, {});
}
function U(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: r,
            priceOptions: a,
            fractionalPremiumInfo: s,
            preventFetch: o,
            unifiedSubscriptionDetailsNode: c,
            setUnifiedPlainNoticeText: p,
            setOverrideRenewalDate: m,
        } = e,
        { analyticsLocations: C } = (0, _.Ay)(),
        h = (0, f.Pg)(t, n.id, 1, new Set(r)),
        {
            proratedInvoicePreview: E,
            renewalInvoicePreview: A,
            primaryInvoiceError: S,
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
                            type: "subscription_checkout_invoice",
                            params: { ...s, renewal: !1, applyEntitlements: !0 },
                        },
                        renewalInvoicePreviewRequest: {
                            type: "subscription_renewal_invoice",
                            params: { ...s, renewal: !0 },
                        },
                    }),
                    [s],
                );
            (0, g.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
            let {
                checkoutInvoicePreview: c,
                checkoutInvoiceError: p,
                renewalInvoicePreview: m,
                renewalInvoiceError: C,
            } = (0, d.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: i.useMemo(() => p ?? C, [p, C]),
                proratedInvoicePreview: c,
                proratedInvoiceError: p,
                renewalInvoicePreview: m,
                renewalInvoiceError: C,
            };
        })({ premiumSubscription: t, newItems: h, priceOptions: a, preventFetch: o, analyticsLocations: C }),
        { planSwitchNoticeCopy: y, overrideRenewalDate: P } = i.useMemo(() => {
            let e;
            return (null !== s &&
                null !== E &&
                (e = (0, f._e)(E.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != E && null != A)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, R.DK)({
                          proratedInvoice: E,
                          renewalInvoice: A,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [E, A, s]);
    if ((w(p, { noticeCopy: y }), null != S)) return null;
    let v = (0, x.U)(E, n);
    if (null == E || null == A || v) return (0, l.jsx)(L, {});
    let N = (0, f.J$)(a.paymentSourceId);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(T.k, {
                discriminatedInvoicePreview: {
                    type: u.u$.SUBSCRIPTION_SWITCH_PLAN,
                    invoicePreview: E,
                    renewalInvoicePreview: A,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: N,
                subscriptionTrial: null,
            }),
            (0, l.jsx)(O, {
                containerNode: c.current,
                children: (0, l.jsx)(R.Hc, {
                    currentInvoice: E,
                    renewalInvoice: A,
                    overrideRenewalDate: P,
                    fractionalPremiumInfo: s,
                    onComputeRenewalDate: m,
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
            setUnifiedPlainNoticeText: u,
            setOverrideRenewalDate: p,
            unifiedSubscriptionDetailsNode: m,
        } = e,
        { analyticsLocations: C } = (0, _.Ay)(),
        { renewalInvoicePreview: h, renewalInvoiceError: E } = (0, d.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        A = i.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: null,
                fetchRenewalInvoicePreviewRequest: {
                    type: "subscription_renewal_invoice",
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
    (0, g.E)(A), (0, c.F0)(h, E);
    let { renewalDate: S, planSwitchNoticeCopy: y } = i.useMemo(() => {
        if (null == h) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = h.subscriptionPeriodStart;
        return (
            a.fractionalState === b.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: M.intl.format(M.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [h, a.fractionalState, a.endsAt]);
    if ((w(u, { noticeCopy: y }), null != E)) return null;
    if (null == h) return (0, l.jsx)(L, {});
    let P = (0, f.J$)(s.paymentSourceId),
        { lineItems: I } = (0, N.Ig)(h, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: P,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(v.Vm, { label: M.intl.string(j.default.eoXh7B), lineItems: I, currency: h.currency }),
            (0, l.jsx)(O, {
                containerNode: m.current,
                children: (0, l.jsx)(R.Hc, {
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
        c = i.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "subscription_checkout_invoice",
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
                    type: "subscription_renewal_invoice",
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
    (0, g.E)(c);
    let {
        resumeInvoicePreview: p,
        renewalInvoicePreview: m,
        primaryInvoiceError: C,
    } = (0, d.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((w(o, { noticeCopy: i.useMemo(() => M.intl.string(M.t.spIYou), []) }), null != C)) return null;
    if (null == p || null == m) return (0, l.jsx)(L, {});
    let h = (0, f.J$)(n.paymentSourceId);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R._J, { invoice: p, isPrepaidPaymentSource: h }),
            (0, l.jsx)(O, {
                containerNode: s.current,
                children: (0, l.jsx)(R.Hc, { renewalInvoice: m, isUpdate: !0, fractionalPremiumInfo: a }),
            }),
        ],
    });
}
n(321073);
var F = n(38785),
    H = n(577381),
    B = n(845012),
    Y = n(755880),
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
            invoiceError: c,
            unifiedPlainNoticeText: d,
            invoicePreview: p,
            invoicePreviewComponent: m,
            shouldShowPlanSelectAndPromoBanner: E,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: A,
            newPlan: y,
            planId: P,
            priceOptions: I,
            premiumPlanOptions: _,
            unifiedSubscriptionDetailsNode: T,
            isInvoiceBilledImmediately: g,
            paymentMethodContent: v,
            legalContent: x,
            isInPastDueCheckout: N,
        } = e,
        b = i.useMemo(() => {
            let e = [];
            return (
                N &&
                    e.push({
                        type: "warning",
                        message: M.intl.string(j.default["yrk+N6"]),
                        key: "past-due-restore-notice",
                    }),
                r &&
                    e.push({
                        directContent: (0, l.jsx)(h.l, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                s && e.push({ type: "info", message: (0, C.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({ type: "warning", message: (0, S.i)(o), key: "payment-restriction-banner-notice" }),
                null != c && e.push({ type: "critical", message: c.message, key: "invoice-error-notice" }),
                e
            );
        }, [N, s, o, c, r, a]),
        { priceOptions: O, planPricesLoading: L } = (0, f.Pr)(I, p, c),
        w = (0, H.i)({ planSkuId: y.skuId, invoice: p }),
        k = i.useMemo(() => (E && null != w ? w : null), [E, w]),
        U = (0, V.G)(P),
        D = i.useMemo(() => (U ? (0, l.jsx)(Y.a, {}) : null), [U]),
        G = i.useMemo(() => (null != k ? k : null != D ? D : null), [k, D]),
        K = (0, f.J$)(I.paymentSourceId),
        Z = null,
        q = null,
        z = N ? null : d;
    E
        ? (q = (0, l.jsx)(B.X, {
              disabled: n,
              headingSubText: z,
              planOptions: _,
              selectedPlanId: P,
              showPlanStatusSubText: !0,
              priceOptions: O,
              planPricesLoading: L,
          }))
        : null != p &&
          (Z = (0, l.jsx)(W._, {
              type: u.u$.SUBSCRIPTION_SWITCH_PLAN,
              invoicePreview: p,
              subscriptionPlan: y,
              isPrepaidPaymentSource: K,
              isPremiumGroupPurchase: s,
              bottomSubText: z,
          }));
    let Q = A ? m : (0, l.jsx)("div", { ref: T }),
        $ = A ? null : m;
    return (0, l.jsx)(F.T_, {
        isStepLoading: t,
        shouldShowGlobalNotices: !0,
        showUpperNoticesAboveGlobalNotices: N,
        upperInlineNoticeProps: b,
        paymentMethodContent: v,
        subscriptionDetailsContent: Q,
        purchaseItemContent: Z,
        planSelectContent: q,
        invoiceSummaryContent: $,
        legalContent: x,
        invoiceTotalDueLabel: g ? M.intl.string(j.default.R0cZsM) : M.intl.string(j.default["11g67A"]),
        invoiceTotalDueValue: null != p ? (0, R.U5)(p) : void 0,
        promotionalNoticeContent: G,
    });
}
var Z = n(479531);
function q(e) {
    let {
            handlePaymentSourceAdd: t,
            verifiedPlanId: n,
            selectedPlan: r,
            planGroup: y,
            hasOpenInvoice: P,
            purchaseState: I,
            isInPastDueCheckout: _,
        } = e,
        T = (0, c.mx)(),
        { paymentSources: g, hasPaymentSources: v } = (0, o.jm)(),
        {
            selectedSkuId: x,
            paymentSourceId: N,
            priceOptions: R,
            renewalInvoicePreview: b,
            checkoutInvoicePreview: O,
            isCheckoutInvoicePreviewLoading: L,
            checkoutInvoiceError: w,
            activeSubscription: F,
        } = (0, d.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            renewalInvoicePreview: e.renewalInvoicePreview,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            isCheckoutInvoicePreviewLoading: e.get("isCheckoutInvoicePreviewLoading"),
            checkoutInvoiceError: e.checkoutInvoiceError,
            activeSubscription: e.activeSubscription,
        })),
        { isPremiumPurchase: H, isPremiumGroupPurchase: B } = (0, d.t4)((e) => e.get("selectedPlanAttributes")),
        {
            defaultPlanId: Y,
            isInOneStepSubscriptionCheckout: W,
            shouldDisallowPlanSelection: V,
        } = (0, d.t4)((e) => ({
            defaultPlanId: e.defaultPlanId,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: !1 }),
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
        })),
        { isGift: q } = (0, p.Pv)(),
        z = (0, E.g)(g, N),
        { showFractionalPremiumBanner: Q, fractionalPremiumInfo: $ } = (0, C._V)({
            premiumSubscription: F,
            selectedPlanId: n,
            planGroup: y,
            isGift: q,
        }),
        J = I === m.h.PURCHASING || I === m.h.COMPLETED,
        X = F?.isPausedAllowsResumeButNotUpdates,
        ee = i.useMemo(() => (0, f.Tm)({ skuId: x, isPremium: H, defaultPlanId: Y }), [x, Y, H]),
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
                        : (0, A.Ge)(o, a, c)
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
                      disabled: J,
                      premiumSubscription: F,
                      newPlan: r,
                      planGroup: y,
                      fractionalPremiumInfo: $,
                      priceOptions: R,
                  },
                  ea,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ec = F?.eligiblePaymentGateways,
        ed = null != ec && ec.length > 0 && (null == N || null === z) && v ? S.fU.SELECT_PAYMENT_METHOD : void 0,
        ep = null != F ? F.paymentSourceId : null,
        em = i.useMemo(
            () => ({
                paymentGatewayRestrictions: F?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: _
                    ? (e) => e.map((e) => (e.id === ep ? { ...e, tooltipText: M.intl.string(j.default["hjsn+s"]) } : e))
                    : void 0,
                className: a()({ [Z.E]: H }),
            }),
            [F?.eligiblePaymentGateways, H, _, ep],
        ),
        eC = null != O || null != w,
        eh = i.useMemo(
            () =>
                eC
                    ? (0, l.jsx)(s.N, {
                          label: M.intl.string(M.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: J,
                          additionalPaymentSourceDropdownProps: em,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: R.paymentSourceId,
                      })
                    : null,
            [eC, R.paymentSourceId, em, t, J],
        ),
        eE = null != F && (0, A.Ge)(F, n, y),
        ef = !X && W && !B && !_ && !V,
        eA = eE && null != T,
        eS = i.useMemo(
            () =>
                null == O || null == b || eA
                    ? null
                    : (0, l.jsx)(h.P, {
                          fractionalPremiumInfo: $,
                          overrideRenewalDate: ei,
                          activeSubscription: F,
                          isTrial: !1,
                          plan: r,
                          isGift: q,
                          paymentSourceType: z,
                          isInvoiceBilledImmediately: eo,
                          discriminatedInvoicePreview: {
                              type: u.u$.SUBSCRIPTION_SWITCH_PLAN,
                              invoicePreview: O,
                              renewalInvoicePreview: b,
                          },
                      }),
            [$, O, b, eA, ei, F, r, q, z, eo],
        );
    return (0, l.jsx)(K, {
        loading: L,
        disabled: J,
        isInPastDueCheckout: _,
        showFractionalPremiumBanner: Q,
        fractionalPremiumInfo: $,
        isPremiumGroupPurchase: B,
        paymentRestrictionBannerType: ed,
        invoiceError: T,
        unifiedPlainNoticeText: en,
        invoicePreview: O,
        invoicePreviewComponent: es,
        shouldShowPlanSelectAndPromoBanner: ef,
        shouldRenderInvoicePreviewSubscriptionDetailsDirectly: eu.shouldRenderToUnifiedSubscriptionDetailsDirectly,
        newPlan: r,
        planId: n,
        priceOptions: R,
        premiumPlanOptions: ee,
        unifiedSubscriptionDetailsNode: et,
        isInvoiceBilledImmediately: eo,
        paymentMethodContent: eh,
        legalContent: eS,
    });
}
