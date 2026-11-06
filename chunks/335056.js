n.d(t, { A: () => K });
var l,
    i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(860841),
    u = n(886767),
    c = n(202475),
    d = n(558620),
    m = n(516106),
    p = n(566980),
    h = n(792996);
n(625079);
var C =
        (((l = {}).SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD"),
        (l.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD"),
        l),
    f = n(244675),
    E = n(325010),
    S = n(216641),
    g = n(615396),
    I = n(333007),
    y = n(289873),
    A = n(793574),
    P = n(688810),
    v = n(482419),
    x = n(666646),
    _ = n(473617),
    T = n(744615),
    b = n(474463),
    N = n(722178),
    j = n(24659),
    R = n(682901),
    O = n(379912);
function M(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : I.createPortal(t, n);
}
function L() {
    return (0, i.jsx)(y.y, { type: y.y.Type.PULSING_ELLIPSIS });
}
function k(e, t) {
    let { noticeCopy: n } = t;
    r.useEffect(() => {
        null != n ? e(n) : e(null);
    }, [e, n]);
}
function w(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: l,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: s,
            setOverrideRenewalDate: o,
        } = e,
        u = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "subscription_checkout_invoice_get_request",
                    params: { subscriptionId: t.id, preventFetch: l, selectedPaymentSourceId: n.paymentSourceId },
                },
                fetchRenewalInvoicePreviewRequest: null,
                shouldAllowNullState: !0,
            }),
            [t.id, l, n.paymentSourceId],
        );
    (0, _.E)(u);
    let { checkoutInvoicePreview: c, checkoutInvoiceError: d } = (0, m.t4)((e) => ({
        checkoutInvoicePreview: e.checkoutInvoicePreview,
        checkoutInvoiceError: e.checkoutInvoiceError,
    }));
    (0, x.T)(c, d);
    let p = (0, N.J$)(n.paymentSourceId);
    if (null != c) {
        let e = t.items.length > 1;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(j._J, { invoice: c, isPrepaidPaymentSource: p }),
                (0, i.jsx)(M, {
                    containerNode: s.current,
                    children: (0, i.jsx)(j.Hc, {
                        currentInvoice: c,
                        renewalInvoice: c,
                        fractionalPremiumInfo: a,
                        isUpdate: !0,
                        defaultExpanded: e,
                        onComputeRenewalDate: o,
                    }),
                }),
            ],
        });
    }
    return (0, i.jsx)(L, {});
}
function D(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: l,
            priceOptions: a,
            fractionalPremiumInfo: s,
            preventFetch: u,
            unifiedSubscriptionDetailsNode: c,
            setUnifiedPlainNoticeText: d,
            setOverrideRenewalDate: p,
        } = e,
        { analyticsLocations: h } = (0, P.Ay)(),
        C = (0, N.Pg)(t, n.id, 1, new Set(l)),
        {
            proratedInvoicePreview: f,
            renewalInvoicePreview: E,
            primaryInvoiceError: S,
        } = (function (e) {
            let { premiumSubscription: t, newItems: n, priceOptions: l, preventFetch: i, analyticsLocations: a } = e,
                s = r.useMemo(
                    () => ({
                        subscriptionId: t.id,
                        items: n,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: i,
                        analyticsLocations: a,
                        analyticsLocation: A.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
                    }),
                    [t.id, n, l.paymentSourceId, l.currency, i, a],
                ),
                { checkoutInvoicePreviewRequest: o, renewalInvoicePreviewRequest: u } = r.useMemo(
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
                checkoutInvoiceError: d,
                renewalInvoicePreview: p,
                renewalInvoiceError: h,
            } = (0, m.t4)((e) => ({
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
            }));
            return {
                primaryInvoiceError: r.useMemo(() => d ?? h, [d, h]),
                proratedInvoicePreview: c,
                proratedInvoiceError: d,
                renewalInvoicePreview: p,
                renewalInvoiceError: h,
            };
        })({ premiumSubscription: t, newItems: C, priceOptions: a, preventFetch: u, analyticsLocations: h }),
        g = (0, m.t4)((e) => e.getIsPlanSwitchLoading()),
        { planSwitchNoticeCopy: I, overrideRenewalDate: y } = r.useMemo(() => {
            let e;
            return (null !== s &&
                null !== f &&
                (e = (0, N._e)(f.subscriptionPeriodEnd, s.unactivatedUnits, s.currentEntitlementEndsAt)),
            null != f && null != E)
                ? {
                      overrideRenewalDate: e,
                      planSwitchNoticeCopy: (0, j.DK)({
                          proratedInvoice: f,
                          renewalInvoice: E,
                          overrideRenewalDate: e,
                      }),
                  }
                : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
        }, [f, E, s]);
    if ((k(d, { noticeCopy: I }), null != S)) return null;
    if (null == f || null == E || g) return (0, i.jsx)(L, {});
    let x = (0, N.J$)(a.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.k, {
                discriminatedInvoicePreview: {
                    type: o.u$.SUBSCRIPTION_SWITCH_PLAN,
                    invoicePreview: f,
                    renewalInvoicePreview: E,
                },
                subscriptionPlan: n,
                isPrepaidPaymentSource: x,
                subscriptionTrial: null,
            }),
            (0, i.jsx)(M, {
                containerNode: c.current,
                children: (0, i.jsx)(j.Hc, {
                    currentInvoice: f,
                    renewalInvoice: E,
                    overrideRenewalDate: y,
                    fractionalPremiumInfo: s,
                    onComputeRenewalDate: p,
                    isUpdate: !0,
                }),
            }),
        ],
    });
}
function U(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            planGroup: l,
            fractionalPremiumInfo: a,
            priceOptions: s,
            preventFetch: o,
            setUnifiedPlainNoticeText: u,
            setOverrideRenewalDate: c,
            unifiedSubscriptionDetailsNode: d,
        } = e,
        { analyticsLocations: p } = (0, P.Ay)(),
        { renewalInvoicePreview: C, renewalInvoiceError: f } = (0, m.t4)((e) => ({
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
        })),
        E = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: null,
                fetchRenewalInvoicePreviewRequest: {
                    type: "subscription_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        items: (0, N.Pg)(t, n.id, 1, new Set(l)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: s.paymentSourceId,
                        currency: s.currency,
                        preventFetch: o,
                        analyticsLocations: p,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
                    },
                },
                shouldAllowNullState: !0,
            }),
            [t, n.id, l, s.paymentSourceId, s.currency, o, p],
        );
    ((0, _.E)(E), (0, x.F)(C, f));
    let { renewalDate: S, planSwitchNoticeCopy: g } = r.useMemo(() => {
        if (null == C) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = C.subscriptionPeriodStart;
        return (
            a.fractionalState === R.xc.FP_SUB_PAUSED && (e = a.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: h.intl.format(h.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [C, a.fractionalState, a.endsAt]);
    if ((k(u, { noticeCopy: g }), null != f)) return null;
    if (null == C) return (0, i.jsx)(L, {});
    let I = (0, N.J$)(s.paymentSourceId),
        { lineItems: y } = (0, b.Ig)(C, {
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: I,
            excludeDiscountsAndAdjustments: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T.Vm, { label: h.intl.string(O.default.eoXh7B), lineItems: y, currency: C.currency }),
            (0, i.jsx)(M, {
                containerNode: d.current,
                children: (0, i.jsx)(j.Hc, {
                    renewalInvoice: C,
                    isUpdate: !0,
                    fractionalPremiumInfo: a,
                    overrideRenewalDate: S,
                    onComputeRenewalDate: c,
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
            preventFetch: l,
            fractionalPremiumInfo: a,
            unifiedSubscriptionDetailsNode: s,
            setUnifiedPlainNoticeText: o,
        } = e,
        { analyticsLocations: u } = (0, P.Ay)(),
        c = r.useMemo(
            () => ({
                fetchCheckoutInvoicePreviewRequest: {
                    type: "subscription_checkout_invoice",
                    params: {
                        subscriptionId: t.id,
                        renewal: !0,
                        applyEntitlements: !0,
                        paymentSourceId: n.paymentSourceId,
                        currency: n.currency,
                        preventFetch: l,
                        analyticsLocations: u,
                        analyticsLocation: A.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
                    },
                },
                fetchRenewalInvoicePreviewRequest: {
                    type: "subscription_renewal_invoice",
                    params: {
                        subscriptionId: t.id,
                        renewal: !0,
                        paymentSourceId: n.paymentSourceId,
                        currency: n.currency,
                        preventFetch: l,
                        analyticsLocations: u,
                        analyticsLocation: A.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
                    },
                },
            }),
            [t.id, n.paymentSourceId, n.currency, l, u],
        );
    (0, _.E)(c);
    let {
        resumeInvoicePreview: d,
        renewalInvoicePreview: p,
        primaryInvoiceError: C,
    } = (0, m.t4)((e) => ({
        resumeInvoicePreview: e.checkoutInvoicePreview,
        renewalInvoicePreview: e.renewalInvoicePreview,
        primaryInvoiceError: e.checkoutInvoiceError ?? e.renewalInvoiceError,
    }));
    if ((k(o, { noticeCopy: r.useMemo(() => h.intl.string(h.t.spIYou), []) }), null != C)) return null;
    if (null == d || null == p) return (0, i.jsx)(L, {});
    let f = (0, N.J$)(n.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(j._J, { invoice: d, isPrepaidPaymentSource: f }),
            (0, i.jsx)(M, {
                containerNode: s.current,
                children: (0, i.jsx)(j.Hc, { renewalInvoice: p, isUpdate: !0, fractionalPremiumInfo: a }),
            }),
        ],
    });
}
n(321073);
var F = n(69882),
    B = n(84674),
    H = n(726775),
    W = n(498750);
function V(e) {
    let {
            loading: t,
            disabled: n,
            showFractionalPremiumBanner: l,
            fractionalPremiumInfo: a,
            isPremiumGroupPurchase: s,
            paymentRestrictionBannerType: u,
            invoiceError: c,
            unifiedPlainNoticeText: d,
            invoicePreview: m,
            invoicePreviewComponent: p,
            shouldShowPlanSelectAndPromoBanner: C,
            newPlan: S,
            planId: g,
            priceOptions: I,
            premiumPlanOptions: y,
            subscriptionDetailsContent: A,
            isInvoiceBilledImmediately: P,
            paymentMethodContent: v,
            legalContent: x,
            isInPastDueCheckout: _,
        } = e,
        T = r.useMemo(() => {
            let e = [];
            return (
                _ &&
                    e.push({
                        type: "warning",
                        message: h.intl.string(O.default["yrk+N6"]),
                        role: "none",
                        key: "past-due-restore-notice",
                    }),
                l &&
                    e.push({
                        directContent: (0, i.jsx)(E.l$, { fractionalPremiumInfo: a }),
                        key: "fractional-premium-notice",
                    }),
                s && e.push({ type: "info", message: (0, f.Nn)(), role: "none", key: "premium-group-purchase-notice" }),
                null != u &&
                    e.push({
                        type: "warning",
                        message: (function (e) {
                            switch (e) {
                                case "SELECT_PAYMENT_METHOD":
                                    return h.intl.string(h.t.Tdb5qb);
                                case "ADD_NEW_PAYMENT_METHOD":
                                    return h.intl.string(h.t["6d44F5"]);
                            }
                        })(u),
                        role: "status",
                        key: "payment-restriction-banner-notice",
                    }),
                null != c &&
                    e.push({ type: "critical", message: c.message, role: "alert", key: "invoice-error-notice" }),
                e
            );
        }, [_, s, u, c, l, a]),
        { priceOptions: b, planPricesLoading: R } = (0, N.Pr)(I, m, c),
        M = (0, B.i)({ planSkuId: S.skuId, invoice: m }),
        L = r.useMemo(() => (C && null != M ? M : null), [C, M]),
        k = r.useMemo(() => (null != L ? L : null), [L]),
        w = (0, N.J$)(I.paymentSourceId),
        D = null,
        U = null,
        G = _ ? null : d;
    return (
        C
            ? (U = (0, i.jsx)(H.X, {
                  disabled: n,
                  headingSubText: G,
                  planOptions: y,
                  selectedPlanId: g,
                  showPlanStatusSubText: !0,
                  priceOptions: b,
                  planPricesLoading: R,
              }))
            : null != m &&
              (D = (0, i.jsx)(W._, {
                  type: o.u$.SUBSCRIPTION_SWITCH_PLAN,
                  invoicePreview: m,
                  subscriptionPlan: S,
                  isPrepaidPaymentSource: w,
                  isPremiumGroupPurchase: s,
                  bottomSubText: G,
              })),
        (0, i.jsx)(F.T_, {
            isStepLoading: t,
            shouldShowGlobalNotices: !0,
            showUpperNoticesAboveGlobalNotices: _,
            upperInlineNoticeProps: T,
            paymentMethodContent: v,
            subscriptionDetailsContent: A,
            purchaseItemContent: D,
            planSelectContent: U,
            invoiceSummaryContent: p,
            legalContent: x,
            invoiceTotalDueLabel: P ? h.intl.string(O.default.R0cZsM) : h.intl.string(O.default["11g67A"]),
            invoiceTotalDueValue: null != m ? (0, j.U5)(m) : void 0,
            promotionalNoticeContent: k,
        })
    );
}
var Y = n(942537);
function K(e) {
    let { handlePaymentSourceAdd: t, planGroup: n, hasOpenInvoice: l, isInPastDueCheckout: a } = e,
        { invoiceError: I } = (0, m.t4)((e) => ({ invoiceError: e.get("primaryInvoicesError") })),
        { paymentSources: y, hasPaymentSources: A } = (0, c.j)(),
        { selectedPlanFromFluxStore: P, selectedPlanId: v } = (0, d.D)(),
        {
            purchaseState: x,
            paymentSourceId: _,
            priceOptions: T,
            renewalInvoicePreview: b,
            checkoutInvoicePreview: N,
            isCheckoutInvoicePreviewLoading: j,
            checkoutInvoiceError: R,
            activeSubscription: M,
            premiumPlanOptions: L,
            isInOneStepSubscriptionCheckout: k,
            shouldDisallowPlanSelection: F,
        } = (0, m.t4)((e) => ({
            purchaseState: e.purchaseState,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            renewalInvoicePreview: e.renewalInvoicePreview,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            isCheckoutInvoicePreviewLoading: e.get("isCheckoutInvoicePreviewLoading"),
            checkoutInvoiceError: e.checkoutInvoiceError,
            activeSubscription: e.activeSubscription,
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: !1 }),
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
        })),
        { isPremiumPurchase: B, isPremiumGroupPurchase: H } = (0, m.t4)((e) => e.get("selectedPlanAttributes")),
        W = (0, S.g)(y, _),
        { showFractionalPremiumBanner: K, fractionalPremiumInfo: Z } = (0, f._V)({
            premiumSubscription: M,
            selectedPlanId: v,
            planGroup: n,
            isGift: !1,
        }),
        q = x === p.h.PURCHASING || x === p.h.COMPLETED,
        z = M?.isPausedAllowsResumeButNotUpdates,
        $ = r.useRef(null),
        [Q, J] = r.useState(null),
        [X, ee] = r.useState(void 0),
        et = r.useMemo(
            () => ({ unifiedSubscriptionDetailsNode: $, setUnifiedPlainNoticeText: J, setOverrideRenewalDate: ee }),
            [],
        ),
        { content: en, isInvoiceBilledImmediately: el } =
            null != M
                ? (function (e, t, n) {
                      let { hasOpenInvoice: l, showResumeSubscriptionView: r, planId: a } = e,
                          {
                              disabled: s,
                              premiumSubscription: o,
                              newPlan: u,
                              planGroup: c,
                              fractionalPremiumInfo: d,
                              priceOptions: m,
                          } = t;
                      return l
                          ? {
                                content: (0, i.jsx)(w, {
                                    premiumSubscription: o,
                                    priceOptions: m,
                                    preventFetch: !1,
                                    fractionalPremiumInfo: d,
                                    ...n,
                                }),
                                isInvoiceBilledImmediately: !0,
                            }
                          : r
                            ? {
                                  content: (0, i.jsx)(G, {
                                      premiumSubscription: o,
                                      priceOptions: m,
                                      preventFetch: s,
                                      fractionalPremiumInfo: d,
                                      ...n,
                                  }),
                                  isInvoiceBilledImmediately: !0,
                              }
                            : (0, g.Ge)(o, a, c)
                              ? {
                                    content: (0, i.jsx)(D, {
                                        premiumSubscription: o,
                                        newPlan: u,
                                        planGroup: c,
                                        priceOptions: m,
                                        fractionalPremiumInfo: d,
                                        preventFetch: s,
                                        ...n,
                                    }),
                                    isInvoiceBilledImmediately: !0,
                                }
                              : {
                                    isInvoiceBilledImmediately: !1,
                                    content: (0, i.jsx)(U, {
                                        premiumSubscription: o,
                                        newPlan: u,
                                        planGroup: c,
                                        fractionalPremiumInfo: d,
                                        priceOptions: m,
                                        preventFetch: s,
                                        ...n,
                                    }),
                                };
                  })(
                      { hasOpenInvoice: l, showResumeSubscriptionView: z, planId: v },
                      {
                          disabled: q,
                          premiumSubscription: M,
                          newPlan: P,
                          planGroup: n,
                          fractionalPremiumInfo: Z,
                          priceOptions: T,
                      },
                      et,
                  )
                : { content: null, isInvoiceBilledImmediately: !0 },
        ei = M?.eligiblePaymentGateways,
        er = null != ei && ei.length > 0 && (null == _ || null === W) && A ? C.SELECT_PAYMENT_METHOD : void 0,
        ea = null != M ? M.paymentSourceId : null,
        es = r.useMemo(
            () => ({
                paymentGatewayRestrictions: M?.eligiblePaymentGateways,
                resolvePaymentSourceOptions: a
                    ? (e) => e.map((e) => (e.id === ea ? { ...e, tooltipText: h.intl.string(O.default["hjsn+s"]) } : e))
                    : void 0,
                className: s()({ [Y.E]: B }),
            }),
            [M?.eligiblePaymentGateways, B, a, ea],
        ),
        eo = null != N || null != R,
        eu = r.useMemo(
            () =>
                eo
                    ? (0, i.jsx)(u.N, {
                          label: h.intl.string(h.t["mmDvV+"]),
                          onPaymentSourceAdd: t,
                          disabled: q,
                          additionalPaymentSourceDropdownProps: es,
                          location: "PremiumSwitchPlanReview",
                          subscriptionPaymentSourceId: T.paymentSourceId,
                      })
                    : null,
            [eo, T.paymentSourceId, es, t, q],
        ),
        ec = null != M && (0, g.Ge)(M, v, n),
        ed = !z && k && !H && !a && !F,
        em = ec && null != I,
        ep = r.useMemo(
            () =>
                null == N || null == b || em
                    ? null
                    : (0, i.jsx)(E.PI, {
                          fractionalPremiumInfo: Z,
                          overrideRenewalDate: X,
                          activeSubscription: M,
                          isTrial: !1,
                          plan: P,
                          isGift: !1,
                          paymentSourceType: W,
                          isInvoiceBilledImmediately: el,
                          discriminatedInvoicePreview: {
                              type: o.u$.SUBSCRIPTION_SWITCH_PLAN,
                              invoicePreview: N,
                              renewalInvoicePreview: b,
                          },
                      }),
            [Z, N, b, em, X, M, P, W, el],
        );
    return (0, i.jsx)(V, {
        loading: j,
        disabled: q,
        isInPastDueCheckout: a,
        showFractionalPremiumBanner: K,
        fractionalPremiumInfo: Z,
        isPremiumGroupPurchase: H,
        paymentRestrictionBannerType: er,
        invoiceError: I,
        unifiedPlainNoticeText: Q,
        invoicePreview: N,
        invoicePreviewComponent: en,
        shouldShowPlanSelectAndPromoBanner: ed,
        newPlan: P,
        planId: v,
        priceOptions: T,
        premiumPlanOptions: L,
        subscriptionDetailsContent: (0, i.jsx)("div", { ref: $ }),
        isInvoiceBilledImmediately: el,
        paymentMethodContent: eu,
        legalContent: ep,
    });
}
