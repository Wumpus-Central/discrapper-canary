"use strict";
n.d(t, { IJ: () => _, N$: () => d, eb: () => p, yf: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(580630),
    a = n(735164),
    o = n(156962),
    l = n(692440),
    u = n(985018),
    c = n(110448),
    d = (function (e) {
        return (
            (e.PREMIUM_GIFT = "PREMIUM_GIFT"),
            (e.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
            (e.PREMIUM_DEFAULT = "PREMIUM_DEFAULT"),
            (e.PREMIUM_SWITCH_PLAN = "PREMIUM_SWITCH_PLAN"),
            (e.LOADING = "LOADING"),
            e
        );
    })({});
let _ = new Set(["PREMIUM_DEFAULT", "PREMIUM_SWITCH_PLAN"]),
    f = (e) => {
        let {
            error: t,
            isGift: n,
            oneTimePurchaseNitroGiftInvoicePreview: r,
            trialInvoicePreview: i,
            proratedInvoicePreview: s,
            renewalInvoicePreview: a,
            planSwitchLoading: o,
        } = e;
        return null != t
            ? null
            : n && null != r
              ? { type: "PREMIUM_GIFT", invoicePreview: r }
              : null != i
                ? { type: "PREMIUM_WITH_TRIAL", invoicePreview: i, renewalInvoicePreview: a }
                : null == s || null == a || o
                  ? { type: "LOADING", invoicePreview: null }
                  : { type: "PREMIUM_DEFAULT", invoicePreview: s, renewalInvoicePreview: a };
    },
    p = (e) => {
        let {
            invoiceSummaryTypeWithPreview: t,
            priceOptions: n,
            trialFooterMessageOverride: d,
            hideSubscriptionDetails: _,
            referralTrialOfferId: f,
            isTrial: p,
            inReverseTrial: h,
            fractionalPremiumInfo: m,
            plan: E,
            showFractionalPremiumBanner: g,
            isPrepaid: A,
            isCustomGift: I,
            enablePremiumBrandRefresh: T,
        } = e;
        if (null == t || "LOADING" === t.type) return null;
        let { invoicePreview: S } = t;
        if ("PREMIUM_GIFT" === t.type)
            return (0, r.jsx)(l.DP, {
                plan: E,
                className: c.SU,
                isPrepaidPaymentSource: A,
                isCustomGift: I,
                invoicePreview: S,
            });
        if ("PREMIUM_WITH_TRIAL" === t.type)
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(a.pK, { negativeMarginTop: !h, invisible: !0 }),
                    (0, r.jsxs)(a.Yx, {
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
                                            price: (0, s.$g)(0, S.currency, {
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
                p && S.subscriptionPeriodEnd !== i.subscriptionPeriodEnd && (e = S.subscriptionPeriodEnd),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        g &&
                            (0, r.jsx)(o.vi, {
                                fractionalPremiumInfo: m,
                                enablePremiumBrandRefresh: T,
                                variant: h ? o.uA.REVERSE_TRIAL : void 0,
                            }),
                        (0, r.jsxs)(a.Yx, {
                            className: c.SU,
                            children: [
                                (0, r.jsx)(a.Xd, { children: u.intl.string(u.t["2eh+Co"]) }),
                                (0, r.jsx)(l.mT, {
                                    invoice: S,
                                    newPlan: E,
                                    isPrepaidPaymentSource: A,
                                    referralTrialOfferId: f,
                                }),
                                A
                                    ? null
                                    : (0, r.jsx)(l.m0, {
                                          renewalInvoice: i,
                                          isTrial: p,
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
