"use strict";
n.d(t, { n: () => E }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(69882),
    a = n(93159),
    o = n(104745),
    l = n(222707),
    u = n(340034),
    c = n(888751),
    d = n(927578),
    _ = n(218075),
    f = n(692440),
    p = n(299301),
    h = n(985018),
    m = n(756366);
let E = (e) => {
    let {
            showFractionalPremiumBanner: t,
            fractionalPremiumInfo: n,
            isPremiumGroupPurchase: E,
            paymentRestrictionBannerType: g,
            invoiceError: A,
            unifiedPlainNoticeText: I,
            invoicePreview: T,
            invoicePreviewComponent: S,
            shouldShowPlanSelectAndPromoBanner: y,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: v,
            newPlan: N,
            planId: C,
            priceOptions: R,
            premiumPlanOptions: O,
            unifiedSubscriptionDetailsNode: b,
            isInvoiceBilledImmediately: D,
            paymentSelectContent: L,
            currencySelectComponent: w,
            legalContent: M,
        } = e,
        x = i.useMemo(() => {
            let e = [];
            return (
                t &&
                    e.push({
                        directContent: (0, r.jsx)(u.l$, { fractionalPremiumInfo: n }),
                        key: "fractional-premium-notice",
                    }),
                E && e.push({ type: "info", message: (0, l.Nn)(), key: "premium-group-purchase-notice" }),
                null != g &&
                    e.push({ type: "warning", message: (0, _.i)(g), key: "payment-restriction-banner-notice" }),
                null != A && e.push({ type: "critical", message: A.message, key: "invoice-error-notice" }),
                e
            );
        }, [E, g, A, t, n]),
        P = i.useMemo(() => (y ? (0, r.jsx)(o.P, { planSkuId: N.skuId }) : null), [y, N.skuId]),
        k = (0, d.J$)(R.paymentSourceId),
        U = null,
        G = null;
    if (y)
        G = (0, r.jsx)(u.XH, {
            headingSubText: I,
            planOptions: O,
            eligibleForMultiMonthPlans: !1,
            selectedPlanId: C,
            showSecondarySubTexts: !0,
        });
    else if (null != T) {
        let e = (0, c.BZ)({ type: p.N$.PREMIUM_SWITCH_PLAN, invoicePreview: T }, N, {
            isPrepaidPaymentSource: k,
            isPremiumGroupPurchase: E,
        });
        U = (0, r.jsx)(a.f7, { ...e, bottomSubText: I });
    }
    let F = v ? S : (0, r.jsx)("div", { ref: b }),
        V = v ? null : S;
    return (0, r.jsx)(s.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: x,
        paymentSelectContent: (0, r.jsxs)(r.Fragment, { children: [L, w] }),
        subscriptionDetailsContent: F,
        purchaseItemContent: U,
        planSelectContent: G,
        invoiceSummaryContent: V,
        legalContent: M,
        invoiceTotalDueLabel: D ? h.intl.string(m.default.R0cZsM) : h.intl.string(m.default["11g67A"]),
        invoiceTotalDueValue: null != T ? (0, f.U5)(T) : void 0,
        promotionalNoticeContent: P,
    });
};
