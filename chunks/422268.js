n.d(t, { n: () => _ }), n(321073);
var l = n(627968),
    i = n(64700),
    a = n(69882),
    r = n(104745),
    s = n(222707),
    o = n(340034),
    u = n(134638),
    c = n(927578),
    d = n(218075),
    p = n(692440),
    m = n(299301),
    h = n(985018),
    A = n(327105);
let _ = (e) => {
    let {
            disabled: t,
            showFractionalPremiumBanner: n,
            fractionalPremiumInfo: _,
            isPremiumGroupPurchase: C,
            paymentRestrictionBannerType: E,
            invoiceError: y,
            unifiedPlainNoticeText: f,
            invoicePreview: P,
            invoicePreviewComponent: S,
            shouldShowPlanSelectAndPromoBanner: x,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: T,
            newPlan: N,
            planId: g,
            priceOptions: I,
            premiumPlanOptions: v,
            unifiedSubscriptionDetailsNode: b,
            isInvoiceBilledImmediately: R,
            paymentSelectContent: M,
            currencySelectComponent: j,
            legalContent: L,
        } = e,
        O = i.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, l.jsx)(o.l$, { fractionalPremiumInfo: _ }),
                        key: "fractional-premium-notice",
                    }),
                C && e.push({ type: "info", message: (0, s.Nn)(), key: "premium-group-purchase-notice" }),
                null != E &&
                    e.push({ type: "warning", message: (0, d.i)(E), key: "payment-restriction-banner-notice" }),
                null != y && e.push({ type: "critical", message: y.message, key: "invoice-error-notice" }),
                e
            );
        }, [C, E, y, n, _]),
        D = i.useMemo(() => (0, c.l6)(I, P?.checkoutContext?.available_plans), [I, P]),
        U = i.useMemo(() => (x ? (0, l.jsx)(r.P, { planSkuId: N.skuId }) : null), [x, N.skuId]),
        w = (0, c.J$)(I.paymentSourceId),
        k = null,
        F = null;
    x
        ? (F = (0, l.jsx)(o.XH, {
              disabled: t,
              headingSubText: f,
              planOptions: v,
              selectedPlanId: g,
              showPlanStatusSubText: !0,
              priceOptions: D,
          }))
        : null != P &&
          (k = (0, l.jsx)(u._, {
              type: m.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: P,
              subscriptionPlan: N,
              isPrepaidPaymentSource: w,
              isPremiumGroupPurchase: C,
              bottomSubText: f,
          }));
    let G = T ? S : (0, l.jsx)("div", { ref: b }),
        B = T ? null : S;
    return (0, l.jsx)(a.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: O,
        paymentSelectContent: (0, l.jsxs)(l.Fragment, { children: [M, j] }),
        subscriptionDetailsContent: G,
        purchaseItemContent: k,
        planSelectContent: F,
        invoiceSummaryContent: B,
        legalContent: L,
        invoiceTotalDueLabel: R ? h.intl.string(A.default.R0cZsM) : h.intl.string(A.default["11g67A"]),
        invoiceTotalDueValue: null != P ? (0, p.U5)(P) : void 0,
        promotionalNoticeContent: U,
    });
};
