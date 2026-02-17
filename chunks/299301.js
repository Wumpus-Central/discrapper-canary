"use strict";
n.d(t, { N$: () => d, eb: () => f, yf: () => _ });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(580630),
    s = n(735164),
    o = n(934581),
    l = n(692440),
    u = n(985018),
    c = n(982571),
    d = (function (e) {
        return (
            (e.PREMIUM_GIFT = "PREMIUM_GIFT"),
            (e.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
            (e.PREMIUM_DEFAULT = "PREMIUM_DEFAULT"),
            (e.LOADING = "LOADING"),
            e
        );
    })({});
let _ = (e) => {
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
    f = (e) => {
        let {
            invoiceSummaryTypeWithPreview: t,
            priceOptions: n,
            trialFooterMessageOverride: d,
            hideSubscriptionDetails: _,
            referralTrialOfferId: f,
            isTrial: h,
            inReverseTrial: p,
            fractionalPremiumInfo: g,
            plan: E,
            showFractionalPremiumBanner: A,
            isPrepaid: I,
            isCustomGift: T,
            enablePremiumBrandRefresh: y,
        } = e;
        if (null == t || "LOADING" === t.type) return null;
        let { invoicePreview: S } = t;
        if ("PREMIUM_GIFT" === t.type)
            return (0, r.jsx)(l.DP, {
                plan: E,
                className: c.SU,
                isPrepaidPaymentSource: I,
                isCustomGift: T,
                invoicePreview: S,
            });
        if ("PREMIUM_WITH_TRIAL" === t.type)
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.pK, { negativeMarginTop: !p, invisible: !0 }),
                    (0, r.jsxs)(s.Yx, {
                        className: c.SU,
                        children: [
                            (0, r.jsxs)("div", {
                                className: c.W3,
                                children: [
                                    (0, r.jsx)(i.Text, {
                                        variant: "text-md/bold",
                                        children: u.intl.string(u.t.txajQG),
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: "text-md/normal",
                                        children: u.intl.format(u.t.hXcaLT, {
                                            price: (0, a.$g)(0, S.currency, {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: c.SV, children: (0, r.jsx)(l.tC, { invoice: S, plan: E }) }),
                        ],
                    }),
                ],
            });
        if ("PREMIUM_DEFAULT" === t.type) {
            let e,
                { renewalInvoicePreview: i } = t;
            return (
                h && S.subscriptionPeriodEnd !== i.subscriptionPeriodEnd && (e = S.subscriptionPeriodEnd),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        A && (0, r.jsx)(o.vi, { fractionalPremiumInfo: g, enablePremiumBrandRefresh: y }),
                        (0, r.jsxs)(s.Yx, {
                            className: c.SU,
                            children: [
                                (0, r.jsx)(s.Xd, { children: u.intl.string(u.t["2eh+Co"]) }),
                                (0, r.jsx)(l.mT, {
                                    invoice: S,
                                    newPlan: E,
                                    isPrepaidPaymentSource: I,
                                    referralTrialOfferId: f,
                                }),
                                I
                                    ? null
                                    : (0, r.jsx)(l.m0, {
                                          renewalInvoice: i,
                                          isTrial: h,
                                          priceOptions: n,
                                          overrideRenewalDate: e,
                                          trialFooterMessageOverride: d,
                                          hideSubscriptionDetails: _,
                                      }),
                            ],
                        }),
                    ],
                })
            );
        }
    };
