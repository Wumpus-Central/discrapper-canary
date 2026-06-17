"use strict";
n.d(t, { Jn: () => m, St: () => p, el: () => _, ow: () => E });
var i = n(64700),
    r = n(17928),
    s = n(160946),
    a = n(97352),
    o = n(83617),
    l = n(211159),
    u = n(652215),
    c = n(788868);
let d = (e, t, n) => {
    let i = e.getPlanIdsForSkus(t).filter((e) => !n || c.JM.has(e));
    return i.length > 0 ? e.get(i[0]) : null;
};
function _(e) {
    let { activeSubscription: t, skuIds: n, currencySkuIds: i, paymentSourceId: r, isGift: s } = e,
        o = h({ subscriptionPlan: d(a.A, p(n, i), s), paymentSourceId: r, isGift: s });
    return null != t && o.includes(t.currency) ? t.currency : o.length > 0 ? o[0] : u.Yri.USD;
}
let h = (e) => {
        let { subscriptionPlan: t, paymentSourceId: n, isGift: i } = e;
        return null == t ? [] : (0, o._w)(t.id, n, i);
    },
    f = (e) => e.filter((e) => e !== c.pe.NONE),
    p = (e, t) => f(t.length > 0 ? t : e),
    E = (e) => {
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
    m = () => {
        let {
                skuIds: e,
                currencySkuIds: t,
                isGift: n,
                paymentSourceId: r,
                setCheckoutCurrency: s,
                checkoutPriceOptions: a,
                invoiceCurrency: o,
            } = (0, l.t4)((e) => ({
                skuIds: e.skuIds,
                currencySkuIds: e.currencySkuIds,
                isGift: e.isGift,
                paymentSourceId: e.paymentSourceId,
                setCheckoutCurrency: e.setCheckoutCurrency,
                checkoutPriceOptions: e.checkoutPriceOptions,
                invoiceCurrency: null != e.checkoutInvoicePreview ? e.checkoutInvoicePreview.currency : null,
            })),
            {
                currenciesFromSubscriptionPlan: u,
                subscriptionPlanIdForCurrency: c,
                hasFetchedRelatedSubscriptionPlans: d,
            } = E({ skuIDs: p(e, t), paymentSourceId: r, isGift: n }),
            { allowedCurrencies: _ } = (() => {
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
            h = i.useMemo(() => (_.length > 0 ? _ : u), [_, u]),
            f = i.useMemo(() => a.paymentSourceId !== r || !a.loaded || null == c || !d, [a, r, c, d]),
            m = a.currency,
            g = i.useMemo(() => (null != m ? m : null != o ? o : h.length > 0 ? h[0] : void 0), [m, o, h]);
        return {
            checkoutPriceOptions: a,
            dropdownCurrencies: h,
            displayCurrency: g,
            setCheckoutCurrency: s,
            subscriptionPlanIdForCurrency: c,
            subscriptionPriceOptionsLoading: f,
            hasFetchedRelatedSubscriptionPlans: d,
        };
    };
