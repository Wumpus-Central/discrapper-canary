n(321073);
var l = n(477900);
n(582128);
var i = n(888751),
    r = n(860841),
    a = n(854354),
    s = n(744615),
    o = n(516106),
    u = n(379912),
    c = n(792996);
n.d(
    t,
    {},
    {
        k: function (e) {
            let {
                    discriminatedInvoicePreview: t,
                    subscriptionPlan: n,
                    subscriptionTrial: d,
                    isPrepaidPaymentSource: m,
                    isCustomGift: p,
                } = e,
                { invoicePreview: C } = t,
                h = (0, o.t4)((e) => e.getGiftSubscriptionPlanId()),
                f = [];
            f =
                t.type === r.u$.PREMIUM_GIFT
                    ? (0, i.fk)(C, { isCustomGift: p, isPrepaidPaymentSource: m, subscriptionPlan: n })
                    : (0, i.IY)(C, {
                          isPrepaidPaymentSource: m,
                          invoiceSummaryType: t.type,
                          subscriptionPlan: n,
                          subscriptionTrial: d,
                          invoicePlanId: h ?? void 0,
                      }).lineItems;
            let E = (0, a.lp)(C, { manualLineItems: f, includeTaxLineItem: !0 }),
                S = (0, a.Dn)(C);
            return (
                null != S && E.push(S),
                (0, l.jsx)(s.Vm, {
                    label: c.intl.string(u.default.eoXh7B),
                    lineItems: E,
                    currency: C.currency,
                    defaultExpanded: null != S,
                })
            );
        },
    },
);
