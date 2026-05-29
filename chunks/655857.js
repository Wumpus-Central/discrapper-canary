"use strict";
n.d(t, { Jn: () => E, _r: () => f, el: () => _, ow: () => p });
var i = n(64700),
    r = n(17928),
    s = n(160946),
    a = n(97352),
    o = n(83617),
    l = n(722847),
    u = n(652215),
    c = n(788868);
let d = (e, t, n) => {
    let i = e.getPlanIdsForSkus(t).filter((e) => !n || c.JM.has(e));
    return i.length > 0 ? e.get(i[0]) : null;
};
function _(e) {
    let { activeSubscription: t, skuIds: n, paymentSourceId: i, isGift: r } = e,
        s = h({ subscriptionPlan: d(a.A, f(n), r), paymentSourceId: i, isGift: r });
    return null != t && s.includes(t.currency) ? t.currency : s.length > 0 ? s[0] : u.Yri.USD;
}
let h = (e) => {
        let { subscriptionPlan: t, paymentSourceId: n, isGift: i } = e;
        return null == t ? [] : (0, o._w)(t.id, n, i);
    },
    f = (e) => e.filter((e) => e !== c.pe.NONE),
    p = (e) => {
        let { skuIDs: t, paymentSourceId: n, isGift: o } = e,
            l = i.useMemo(() => f(t), [t]),
            u = (0, r.bG)([a.A], () => d(a.A, l, o)),
            c = null != u ? u.id : null;
        return {
            currenciesFromSubscriptionPlan: i.useMemo(
                () => h({ subscriptionPlan: u, paymentSourceId: n, isGift: o }),
                [u, n, o],
            ),
            subscriptionPlanIdForCurrency: c,
            hasFetchedRelatedSubscriptionPlans: (0, s.Y)(l),
        };
    },
    E = () => {
        let {
                skuIds: e,
                isGift: t,
                paymentSourceId: n,
                setCheckoutCurrency: r,
                checkoutPriceOptions: s,
                invoiceCurrency: a,
            } = (0, l.t4)((e) => ({
                skuIds: e.skuIds,
                isGift: e.isGift,
                paymentSourceId: e.paymentSourceId,
                setCheckoutCurrency: e.setCheckoutCurrency,
                checkoutPriceOptions: e.checkoutPriceOptions,
                invoiceCurrency: null != e.checkoutInvoicePreview ? e.checkoutInvoicePreview.currency : null,
            })),
            {
                currenciesFromSubscriptionPlan: o,
                subscriptionPlanIdForCurrency: u,
                hasFetchedRelatedSubscriptionPlans: c,
            } = p({ skuIDs: e, paymentSourceId: n, isGift: t }),
            { allowedCurrencies: d } = (() => {
                let e = (0, l.t4)((e) => e.checkoutInvoicePreview),
                    { allowedCurrencies: t, invoiceCurrency: n } = i.useMemo(
                        () =>
                            null == e
                                ? { allowedCurrencies: [], invoiceCurrency: void 0 }
                                : {
                                      allowedCurrencies:
                                          null != e.checkoutContext ? (e.checkoutContext.allowed_currencies ?? []) : [],
                                      invoiceCurrency: e.currency,
                                  },
                        [e],
                    );
                return { allowedCurrencies: t, invoiceCurrency: n };
            })(),
            _ = i.useMemo(() => (d.length > 0 ? d : o), [d, o]),
            h = i.useMemo(() => s.paymentSourceId !== n || !s.loaded || null == u || !c, [s, n, u, c]),
            f = s.currency,
            E = i.useMemo(() => (null != f ? f : null != a ? a : _.length > 0 ? _[0] : void 0), [f, a, _]);
        return {
            checkoutPriceOptions: s,
            dropdownCurrencies: _,
            displayCurrency: E,
            setCheckoutCurrency: r,
            subscriptionPlanIdForCurrency: u,
            subscriptionPriceOptionsLoading: h,
            hasFetchedRelatedSubscriptionPlans: c,
        };
    };
