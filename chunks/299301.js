"use strict";
n.d(t, { N$: () => f, eb: () => h, yf: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(580630),
    l = n(735164),
    u = n(934581),
    c = n(692440),
    d = n(985018),
    _ = n(982571),
    f = (function (e) {
        return (
            (e.PREMIUM_GIFT = "PREMIUM_GIFT"),
            (e.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
            (e.PREMIUM_DEFAULT = "PREMIUM_DEFAULT"),
            (e.LOADING = "LOADING"),
            e
        );
    })({});
let p = (e) => {
        let {
            error: t,
            isGift: n,
            oneTimePurchaseNitroGiftInvoicePreview: r,
            trialInvoicePreview: i,
            proratedInvoicePreview: a,
            renewalInvoicePreview: s,
            planSwitchLoading: o,
        } = e;
        return null != t
            ? null
            : n && null != r
              ? { type: "PREMIUM_GIFT", invoicePreview: r }
              : null != i
                ? { type: "PREMIUM_WITH_TRIAL", invoicePreview: i, renewalInvoicePreview: s }
                : null == a || null == s || o
                  ? { type: "LOADING", invoicePreview: null }
                  : { type: "PREMIUM_DEFAULT", invoicePreview: a, renewalInvoicePreview: s };
    },
    h = (e) => {
        let {
            invoiceSummaryTypeWithPreview: t,
            priceOptions: n,
            trialFooterMessageOverride: i,
            hideSubscriptionDetails: f,
            referralTrialOfferId: p,
            isTrial: h,
            inReverseTrial: m,
            fractionalPremiumInfo: g,
            plan: E,
            showFractionalPremiumBanner: A,
            isPrepaid: I,
            isCustomGift: T,
            enablePremiumBrandRefresh: y,
            premiumBrandRefreshBackgroundClassName: S,
        } = e;
        if (null == t || "LOADING" === t.type) return null;
        let { invoicePreview: v } = t;
        if ("PREMIUM_GIFT" === t.type)
            return (0, r.jsx)(c.DP, {
                plan: E,
                className: a()(_.SU, S),
                isPrepaidPaymentSource: I,
                isCustomGift: T,
                invoicePreview: v,
            });
        if ("PREMIUM_WITH_TRIAL" === t.type)
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.pK, { negativeMarginTop: !m }),
                    (0, r.jsxs)(l.Yx, {
                        className: a()(_.SU, S),
                        children: [
                            (0, r.jsxs)("div", {
                                className: _.W3,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/bold",
                                        children: d.intl.string(d.t.txajQG),
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: d.intl.format(d.t.hXcaLT, {
                                            price: (0, o.$g)(0, v.currency, {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: _.SV, children: (0, r.jsx)(c.tC, { invoice: v, plan: E }) }),
                        ],
                    }),
                ],
            });
        if ("PREMIUM_DEFAULT" === t.type) {
            let e,
                { renewalInvoicePreview: s } = t;
            return (
                h && v.subscriptionPeriodEnd !== s.subscriptionPeriodEnd && (e = v.subscriptionPeriodEnd),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        A && (0, r.jsx)(u.vi, { fractionalPremiumInfo: g, enablePremiumBrandRefresh: y }),
                        (0, r.jsxs)(l.Yx, {
                            className: a()(_.SU, S),
                            children: [
                                (0, r.jsx)(l.Xd, { children: d.intl.string(d.t["2eh+Co"]) }),
                                (0, r.jsx)(c.mT, {
                                    invoice: v,
                                    newPlan: E,
                                    isPrepaidPaymentSource: I,
                                    referralTrialOfferId: p,
                                }),
                                I
                                    ? null
                                    : (0, r.jsx)(c.m0, {
                                          renewalInvoice: s,
                                          isTrial: h,
                                          priceOptions: n,
                                          overrideRenewalDate: e,
                                          trialFooterMessageOverride: i,
                                          hideSubscriptionDetails: f,
                                      }),
                            ],
                        }),
                    ],
                })
            );
        }
    };
