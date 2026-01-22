n.d(t, { W: () => v }), n(388685);
var r = n(54381),
    i = n(481060),
    a = n(570414),
    o = n(618026),
    s = n(44379),
    l = n(639119),
    c = n(358079),
    u = n(716534),
    d = n(100413),
    f = n(74538),
    p = n(474936),
    _ = n(388032),
    h = n(475338),
    m = n(961969);
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
                case p.rV.MONTH:
                    return _.intl.string(h.default.ajn5LL);
                case p.rV.YEAR:
                    return _.intl.string(h.default.FNijW7);
            }
        return _.intl.string(h.default.jxUJkZ);
    },
    y = (e) => {
        let {
                isPrepaidPaymentSource: t,
                invoiceSummaryTypeWithPreview: n,
                subscriptionPlan: i,
                premiumTrialOffer: s,
            } = e,
            { invoicePreview: l } = n,
            { newPlanInvoiceItem: u, basePlanFullAmount: d, invoiceAdjustmentDisplayItems: f } = (0, c.A0)(l, i),
            { label: p, amount: m } = (0, c.pK)(u, {
                overrideAmount: d,
                subscriptionPlan: i,
                premiumTrialOffer: s,
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
            E = (0, a.$)(l, {
                manualLineItems: g,
                addTaxLineItem: !0,
            });
        return (0, r.jsx)(o.Q, {
            label: _.intl.string(h.default.eoXh7B),
            lineItems: E,
            currency: l.currency,
        });
    },
    O = (e, t) => {
        let n = (0, c.gI)(e),
            { intervalType: r, intervalCount: i } = (0, f.dn)(e),
            a = e.currency;
        return {
            lineItems: n.map((e) => {
                let { label: n, amount: r } = (0, c.pK)(e, {
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
            label: _.intl.format(h.default["57B1ks"], { renewalDate: e.subscriptionPeriodEnd }),
            totalLineItemLabel: b(r, i),
        };
    },
    v = (e) => {
        let { referralTrialOfferId: t } = e,
            {
                error: n,
                isGift: a,
                oneTimePurchaseNitroGiftInvoicePreview: o,
                trialInvoicePreview: c,
                proratedInvoicePreview: f,
                renewalInvoicePreview: p,
                planSwitchLoading: h,
                plan: g,
                isPrepaid: b,
            } = (0, u.w)(e),
            v = (0, d.mn)({
                error: n,
                isGift: a,
                oneTimePurchaseNitroGiftInvoicePreview: o,
                trialInvoicePreview: c,
                proratedInvoicePreview: f,
                renewalInvoicePreview: p,
                planSwitchLoading: h,
            }),
            S = (0, l.N)(t);
        if (null == v || v.type === d.G0.LOADING) return null;
        let I = (0, r.jsx)(y, {
                invoiceSummaryTypeWithPreview: v,
                subscriptionPlan: g,
                isPrepaidPaymentSource: b,
                premiumTrialOffer: S,
            }),
            T = null;
        if (
            !b &&
            (v.type === d.G0.PREMIUM_DEFAULT || v.type === d.G0.PREMIUM_WITH_TRIAL) &&
            null != v.renewalInvoicePreview
        ) {
            let e = O(v.renewalInvoicePreview, S);
            T = (0, r.jsx)(s.H, E({}, e));
        }
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("div", { style: { height: 12 } }),
                T,
                (0, r.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    className: m.paymentMethodLabel,
                    children: _.intl.string(_.t["YH7B+D"]),
                }),
                (0, r.jsx)("div", { style: { height: 30 } }),
                I,
                (0, r.jsx)("div", { style: { height: 12 } }),
            ],
        });
    };
