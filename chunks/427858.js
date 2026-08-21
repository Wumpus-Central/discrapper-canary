n.d(t, { A: () => Z });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(377058),
    o = n(202475),
    u = n(400612),
    c = n(666646),
    d = n(87725),
    p = n(951305),
    m = n(566980),
    h = n(222707),
    C = n(340034),
    f = n(216641),
    E = n(158045),
    S = n(615396),
    y = n(218075),
    A = n(333007),
    P = n(289873),
    I = n(793574),
    g = n(688810),
    v = n(482419),
    _ = n(473617),
    T = n(848584),
    x = n(800471),
    N = n(888751),
    b = n(692440),
    R = n(202541),
    j = n(375708),
    M = n(893292);
function O(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : A.createPortal(t, n);
}
function L() {
    return (0, l.jsx)(P.y, { type: P.y.Type.PULSING_ELLIPSIS });
}
function k(e, t) {
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
    (0, _.E)(u);
    let { checkoutInvoicePreview: p, checkoutInvoiceError: m } = (0, d.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, c.Tr)(p, m);
    let h = (0, E.J$)(n.paymentSourceId);
    if (null != p) {
        let e = t.items.length > 1;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(b._J, { invoice: p, isPrepaidPaymentSource: h }),
                (0, l.jsx)(O, {
                    containerNode: s.current,
                    children: (0, l.jsx)(b.Hc, {
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
        { analyticsLocations: h } = (0, g.Ay)(),
        C = (0, E.Pg)(t, n.id, 1, new Set(r)),
        {
            proratedInvoicePreview: f,
            renewalInvoicePreview: S,
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
            (0, _.E)({ fetchCheckoutInvoicePreviewRequest: o, fetchRenewalInvoicePreviewRequest: u });
            let {
                checkoutInvoicePreview: c,
                checkoutInvoiceError: p,
                renewalInvoicePreview: m,
                renewalInvoiceError: h,
            } = (0, d.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: i.useMemo(() => p ?? h, [p, h]),
                proratedInvoicePreview: c,
                proratedInvoiceError: p,
                renewalInvoicePreview: m,
                renewalInvoiceError: h,
            };
        })({ premiumSubscription: t, newItems: C, priceOptions: a, preventFetch: o, analyticsLocations: h }),
        { planSwitchNoticeCopy: A, overrideRenewalDate: P } = i.useMemo(() => {
            let e;
            return (null !== s &&
                null !== f &&
                (e = (0, E._e)(f.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != f && null != S)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, b.DK)({
                          proratedInvoice: f,
                          renewalInvoice: S,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [f, S, s]);
    if ((k(p, { noticeCopy: A }), null != y)) return null;
    let T = (0, x.U)(f, n);
    if (null == f || null == S || T) return (0, l.jsx)(L, {});
    let N = (0, E.J$)(a.paymentSourceId);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(v.k, {
                discriminatedInvoicePreview: {
                    type: u.u$.SUBSCRIPTION_SWITCH_PLAN,
                    invoicePreview: f,
                    renewalInvoicePreview: S,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: N,
                subscriptionTrial: null,
            }),
            (0, l.jsx)(O, {
                containerNode: c.current,
                children: (0, l.jsx)(b.Hc, {
                    currentInvoice: f,
                    renewalInvoice: S,
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
        { analyticsLocations: h } = (0, g.Ay)(),
        { renewalInvoicePreview: C, renewalInvoiceError: f } = (0, d.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        S = i.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: null,
                fetchRenewalInvoicePreviewRequest: {
                    type: "subscription_renewal_invoice",
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
    (0, _.E)(S), (0, c.F0)(C, f);
    let { renewalDate: y, planSwitchNoticeCopy: A } = i.useMemo(() => {
        if (null == C) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = C.subscriptionPeriodStart;
        return (
            a.fractionalState === R.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: j.intl.format(j.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [C, a.fractionalState, a.endsAt]);
    if ((k(u, { noticeCopy: A }), null != f)) return null;
    if (null == C) return (0, l.jsx)(L, {});
    let P = (0, E.J$)(s.paymentSourceId),
        { lineItems: I } = (0, N.Ig)(C, {
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: P,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(T.Vm, { label: j.intl.string(M.default.eoXh7B), lineItems: I, currency: C.currency }),
            (0, l.jsx)(O, {
                containerNode: m.current,
                children: (0, l.jsx)(b.Hc, {
                    renewalInvoice: C,
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
function G(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: r,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: s,
            setUnifiedPlainNoticeText: o,
        } = e,
        { analyticsLocations: u } = (0, g.Ay)(),
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
    (0, _.E)(c);
    let {
        resumeInvoicePreview: p,
        renewalInvoicePreview: m,
        primaryInvoiceError: h,
    } = (0, d.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((k(o, { noticeCopy: i.useMemo(() => j.intl.string(j.t.spIYou), []) }), null != h)) return null;
    if (null == p || null == m) return (0, l.jsx)(L, {});
    let C = (0, E.J$)(n.paymentSourceId);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(b._J, { invoice: p, isPrepaidPaymentSource: C }),
            (0, l.jsx)(O, {
                containerNode: s.current,
                children: (0, l.jsx)(b.Hc, { renewalInvoice: m, isUpdate: !0, fractionalPremiumInfo: a }),
            }),
        ],
    });
}
n(321073);
var F = n(38785),
    B = n(577381),
    H = n(845012),
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
            shouldShowPlanSelectAndPromoBanner: f,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: S,
            newPlan: A,
            planId: P,
            priceOptions: I,
            premiumPlanOptions: g,
            unifiedSubscriptionDetailsNode: v,
            isInvoiceBilledImmediately: _,
            paymentMethodContent: T,
            legalContent: x,
            isInPastDueCheckout: N,
        } = e,
        R = i.useMemo(() => {
            let e = [];
            return (
                N &&
                    e.push({
                        type: "warning",
                        message: j.intl.string(M.default["yrk+N6"]),
                        key: "past-due-restore-notice",
                    }),
                r &&
                    e.push({
                        directContent: (0, l.jsx)(C.l, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                s && e.push({ type: "info", message: (0, h.Nn)(), key: "premium-group-purchase-notice" }),
                null != o &&
                    e.push({ type: "warning", message: (0, y.i)(o), key: "payment-restriction-banner-notice" }),
                null != c && e.push({ type: "critical", message: c.message, key: "invoice-error-notice" }),
                e
            );
        }, [N, s, o, c, r, a]),
        { priceOptions: O, planPricesLoading: L } = (0, E.Pr)(I, p, c),
        k = (0, B.i)({ planSkuId: A.skuId, invoice: p }),
        w = i.useMemo(() => (f && null != k ? k : null), [f, k]),
        U = (0, V.G)(P),
        D = i.useMemo(() => (U ? (0, l.jsx)(Y.a, {}) : null), [U]),
        G = i.useMemo(() => (null != w ? w : null != D ? D : null), [w, D]),
        K = (0, E.J$)(I.paymentSourceId),
        q = null,
        Z = null,
        z = N ? null : d;
    f
        ? (Z = (0, l.jsx)(H.X, {
              disabled: n,
              headingSubText: z,
              planOptions: g,
              selectedPlanId: P,
              showPlanStatusSubText: !0,
              priceOptions: O,
              planPricesLoading: L,
          }))
        : null != p &&
          (q = (0, l.jsx)(W._, {
              type: u.u$.SUBSCRIPTION_SWITCH_PLAN,
              invoicePreview: p,
              subscriptionPlan: A,
              isPrepaidPaymentSource: K,
              isPremiumGroupPurchase: s,
              bottomSubText: z,
          }));
    let Q = S ? m : (0, l.jsx)("div", { ref: v }),
        $ = S ? null : m;
    return (0, l.jsx)(F.T_, {
        isStepLoading: t,
        shouldShowGlobalNotices: !0,
        showUpperNoticesAboveGlobalNotices: N,
        upperInlineNoticeProps: R,
        paymentMethodContent: T,
        subscriptionDetailsContent: Q,
        purchaseItemContent: q,
        planSelectContent: Z,
        invoiceSummaryContent: $,
        legalContent: x,
        invoiceTotalDueLabel: _ ? j.intl.string(M.default.R0cZsM) : j.intl.string(M.default["11g67A"]),
        invoiceTotalDueValue: null != p ? (0, b.U5)(p) : void 0,
        promotionalNoticeContent: G,
    });
}
var q = n(510552);
function Z(e) {
    let {
            handlePaymentSourceAdd: t,
            verifiedPlanId: n,
            selectedPlan: r,
            planGroup: A,
            hasOpenInvoice: P,
            purchaseState: I,
            isInPastDueCheckout: g,
        } = e,
        v = (0, c.mx)(),
        { paymentSources: _, hasPaymentSources: T } = (0, o.j)(),
        {
            selectedSkuId: x,
            paymentSourceId: N,
            priceOptions: b,
            renewalInvoicePreview: R,
            checkoutInvoicePreview: O,
            isCheckoutInvoicePreviewLoading: L,
            checkoutInvoiceError: k,
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
        { isPremiumPurchase: B, isPremiumGroupPurchase: H } = (0, d.t4)((e) => e.get("selectedPlanAttributes")),
        {
            defaultPlanId: Y,
            isInOneStepSubscriptionCheckout: W,
            shouldDisallowPlanSelection: V,
        } = (0, d.t4)((e) => ({
            defaultPlanId: e.defaultPlanId,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: !1 }),
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
        })),
        { isGift: Z } = (0, p.Pv)(),
        z = (0, f.g)(_, N),
        { showFractionalPremiumBanner: Q, fractionalPremiumInfo: $ } = (0, h._V)({
            premiumSubscription: F,
            selectedPlanId: n,
            planGroup: A,
            isGift: Z,
        }),
        J = I === m.h.PURCHASING || I === m.h.COMPLETED,
        X = F?.isPausedAllowsResumeButNotUpdates,
        ee = i.useMemo(() => (0, E.Tm)({ skuId: x, isPremium: B, defaultPlanId: Y }), [x, Y, B]),
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
                      planGroup: A,
                      fractionalPremiumInfo: $,
                      priceOptions: b,
                  },
                  ea,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ec = F?.eligiblePaymentGateways,
        ed = null != ec && ec.length > 0 && (null == N || null === z) && T ? y.fU.SELECT_PAYMENT_METHOD : void 0,
        ep = null != F ? F.paymentSourceId : null,
        em = i.useMemo(
            () => ({
                paymentGatewayRestrictions: F?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: g
                    ? (e) => e.map((e) => (e.id === ep ? { ...e, tooltipText: j.intl.string(M.default["hjsn+s"]) } : e))
                    : void 0,
                className: a()({ [q.E]: B }),
            }),
            [F?.eligiblePaymentGateways, B, g, ep],
        ),
        eh = null != O || null != k,
        eC = i.useMemo(
            () =>
                eh
                    ? (0, l.jsx)(s.N, {
                          label: j.intl.string(j.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: J,
                          additionalPaymentSourceDropdownProps: em,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: b.paymentSourceId,
                      })
                    : null,
            [eh, b.paymentSourceId, em, t, J],
        ),
        ef = null != F && (0, S.Ge)(F, n, A),
        eE = !X && W && !H && !g && !V,
        eS = ef && null != v,
        ey = i.useMemo(
            () =>
                null == O || null == R || eS
                    ? null
                    : (0, l.jsx)(C.P, {
                          fractionalPremiumInfo: $,
                          overrideRenewalDate: ei,
                          activeSubscription: F,
                          isTrial: !1,
                          plan: r,
                          isGift: Z,
                          paymentSourceType: z,
                          isInvoiceBilledImmediately: eo,
                          discriminatedInvoicePreview: {
                              type: u.u$.SUBSCRIPTION_SWITCH_PLAN,
                              invoicePreview: O,
                              renewalInvoicePreview: R,
                          },
                      }),
            [$, O, R, eS, ei, F, r, Z, z, eo],
        );
    return (0, l.jsx)(K, {
        loading: L,
        disabled: J,
        isInPastDueCheckout: g,
        showFractionalPremiumBanner: Q,
        fractionalPremiumInfo: $,
        isPremiumGroupPurchase: H,
        paymentRestrictionBannerType: ed,
        invoiceError: v,
        unifiedPlainNoticeText: en,
        invoicePreview: O,
        invoicePreviewComponent: es,
        shouldShowPlanSelectAndPromoBanner: eE,
        shouldRenderInvoicePreviewSubscriptionDetailsDirectly: eu.shouldRenderToUnifiedSubscriptionDetailsDirectly,
        newPlan: r,
        planId: n,
        priceOptions: b,
        premiumPlanOptions: ee,
        unifiedSubscriptionDetailsNode: et,
        isInvoiceBilledImmediately: eo,
        paymentMethodContent: eC,
        legalContent: ey,
    });
}
