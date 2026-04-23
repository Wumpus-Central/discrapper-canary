"use strict";
n.d(t, { IJ: () => f, N$: () => _, eb: () => h, yf: () => p });
var r,
    i = n(627968);
n(64700);
var s = n(834730),
    a = n(580630),
    o = n(735164),
    l = n(156962),
    u = n(692440),
    c = n(985018),
    d = n(814304),
    _ =
        (((r = {}).PREMIUM_GIFT = "PREMIUM_GIFT"),
        (r.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
        (r.PREMIUM_DEFAULT = "PREMIUM_DEFAULT"),
        (r.PREMIUM_SWITCH_PLAN = "PREMIUM_SWITCH_PLAN"),
        (r.LOADING = "LOADING"),
        r);
let f = new Set(["PREMIUM_DEFAULT", "PREMIUM_SWITCH_PLAN"]),
    p = (e) => {
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
    h = (e) => {
        let {
            invoiceSummaryTypeWithPreview: t,
            priceOptions: n,
            trialFooterMessageOverride: r,
            hideSubscriptionDetails: _,
            referralTrialOfferId: f,
            isTrial: p,
            inReverseTrial: h,
            fractionalPremiumInfo: E,
            plan: m,
            showFractionalPremiumBanner: g,
            isPrepaid: A,
            isCustomGift: I,
            enablePremiumBrandRefresh: T,
        } = e;
        if (null == t || "LOADING" === t.type) return null;
        let { invoicePreview: S } = t;
        if ("PREMIUM_GIFT" === t.type)
            return (0, i.jsx)(u.DP, {
                plan: m,
                className: d.SU,
                isPrepaidPaymentSource: A,
                isCustomGift: I,
                invoicePreview: S,
            });
        if ("PREMIUM_WITH_TRIAL" === t.type)
            return (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(o.pK, { negativeMarginTop: !h, invisible: !0 }),
                    (0, i.jsxs)(o.Yx, {
                        className: d.SU,
                        children: [
                            (0, i.jsxs)("div", {
                                className: d.W3,
                                children: [
                                    (0, i.jsx)(s.E, { variant: "text-md/bold", children: c.intl.string(c.t.txajQG) }),
                                    (0, i.jsx)(s.E, {
                                        variant: "text-md/normal",
                                        children: c.intl.format(c.t.hXcaLT, {
                                            price: (0, a.$g)(0, S.currency, {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", { className: d.SV, children: (0, i.jsx)(u.tC, { invoice: S, plan: m }) }),
                        ],
                    }),
                ],
            });
        if ("PREMIUM_DEFAULT" === t.type) {
            let e,
                { renewalInvoicePreview: s } = t;
            return (
                p && S.subscriptionPeriodEnd !== s.subscriptionPeriodEnd && (e = S.subscriptionPeriodEnd),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        g && !h && (0, i.jsx)(l.vi, { fractionalPremiumInfo: E, enablePremiumBrandRefresh: T }),
                        (0, i.jsxs)(o.Yx, {
                            className: d.SU,
                            children: [
                                (0, i.jsx)(o.Xd, { children: c.intl.string(c.t["2eh+Co"]) }),
                                (0, i.jsx)(u.mT, {
                                    invoice: S,
                                    newPlan: m,
                                    isPrepaidPaymentSource: A,
                                    referralTrialOfferId: f,
                                }),
                                A
                                    ? null
                                    : (0, i.jsx)(u.m0, {
                                          renewalInvoice: s,
                                          isTrial: p,
                                          priceOptions: n,
                                          overrideRenewalDate: e,
                                          trialFooterMessageOverride: r,
                                          hideSubscriptionDetails: _,
                                      }),
                            ],
                        }),
                    ],
                })
            );
        }
    };
