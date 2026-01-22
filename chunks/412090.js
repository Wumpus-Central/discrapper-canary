n.d(t, {
    _: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(397927),
    a = n(854354),
    s = n(270537),
    o = n(669510),
    l = n(234419),
    c = n(815545),
    u = n(494230),
    d = n(299301),
    f = n(927578),
    p = n(788868),
    _ = n(985018),
    h = n(756366),
    m = n(220264);

function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
let b = (e, t) => {
        if (1 === t)
            switch (e) {
                case p.WT.MONTH:
                    return _.intl.string(h.default.ajn5LL);
                case p.WT.YEAR:
                    return _.intl.string(h.default.FNijW7);
            }
        return _.intl.string(h.default.jxUJkZ);
    },
    y = (e) => {
        let {
                isPrepaidPaymentSource: t,
                invoiceSummaryTypeWithPreview: n,
                subscriptionPlan: i,
                premiumTrialOffer: o,
            } = e,
            { invoicePreview: l } = n,
            { newPlanInvoiceItem: u, basePlanFullAmount: d, invoiceAdjustmentDisplayItems: f } = (0, c.qi)(l, i),
            { label: p, amount: m } = (0, c.Ol)(u, {
                overrideAmount: d,
                subscriptionPlan: i,
                premiumTrialOffer: o,
                isPrepaidPaymentSource: t,
                currency: l.currency,
            }),
            g = [
                {
                    id: u.id,
                    label: p,
                    amount: m,
                },
                ...f.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                })),
            ],
            E = (0, a.l)(l, {
                manualLineItems: g,
                addTaxLineItem: !0,
            });
        return (0, r.jsx)(s.V, {
            label: _.intl.string(h.default.eoXh7B),
            lineItems: E,
            currency: l.currency,
        });
    },
    O = (e, t) => {
        let n = (0, c.Q8)(e),
            { intervalType: r, intervalCount: i } = (0, f.Ge)(e),
            a = e.currency;
        return {
            lineItems: n.map((e) => {
                let { label: n, amount: r } = (0, c.Ol)(e, {
                    premiumTrialOffer: t,
                    currency: a,
                });
                return {
                    id: e.id,
                    label: n,
                    amount: r,
                    tooltip: e.tooltipText,
                };
            }),
            intervalType: r,
            intervalCount: i,
            currency: a,
            label: _.intl.format(h.default["57B1ks"], {
                renewalDate: e.subscriptionPeriodEnd,
            }),
            totalLineItemLabel: b(r, i),
        };
    },
    A = (e) => {
        let { referralTrialOfferId: t } = e,
            {
                error: n,
                isGift: a,
                oneTimePurchaseNitroGiftInvoicePreview: s,
                trialInvoicePreview: c,
                proratedInvoicePreview: f,
                renewalInvoicePreview: p,
                planSwitchLoading: h,
                plan: g,
                isPrepaid: b,
            } = (0, u.L)(e),
            A = (0, d.yf)({
                error: n,
                isGift: a,
                oneTimePurchaseNitroGiftInvoicePreview: s,
                trialInvoicePreview: c,
                proratedInvoicePreview: f,
                renewalInvoicePreview: p,
                planSwitchLoading: h,
            }),
            v = (0, l.V)(t);
        if (null == A || A.type === d.N$.LOADING) return null;
        let S = (0, r.jsx)(y, {
                invoiceSummaryTypeWithPreview: A,
                subscriptionPlan: g,
                isPrepaidPaymentSource: b,
                premiumTrialOffer: v,
            }),
            I = null;
        if (
            !b &&
            (A.type === d.N$.PREMIUM_DEFAULT || A.type === d.N$.PREMIUM_WITH_TRIAL) &&
            null != A.renewalInvoicePreview
        ) {
            let e = O(A.renewalInvoicePreview, v);
            I = (0, r.jsx)(o._, E({}, e));
        }
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("div", {
                    style: {
                        height: 12,
                    },
                }),
                I,
                (0, r.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    className: m.S,
                    children: _.intl.string(_.t["YH7B+D"]),
                }),
                (0, r.jsx)("div", {
                    style: {
                        height: 30,
                    },
                }),
                S,
                (0, r.jsx)("div", {
                    style: {
                        height: 12,
                    },
                }),
            ],
        });
    };
