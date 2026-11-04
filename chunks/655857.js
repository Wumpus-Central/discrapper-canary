var i = n(582128),
    r = n(855986),
    a = n(160946),
    s = n(97352),
    l = n(83617),
    o = n(516106),
    d = n(652215),
    c = n(682901);
function u(e, t, n) {
    let i = e.getPlanIdsForSkus(t).filter((e) => !n || c.JM.has(e));
    return i.length > 0 ? e.get(i[0]) : null;
}
function _(e) {
    let { subscriptionPlan: t, paymentSourceId: n, isGift: i } = e;
    return null == t ? [] : (0, l._w)(t.id, n, i);
}
function E(e) {
    return e.filter((e) => e !== c.pe.NONE);
}
function A(e) {
    let { skuIDs: t, paymentSourceId: n, isGift: l } = e,
        o = i.useMemo(() => E(t), [t]),
        d = (0, r.bG)([s.A], () => u(s.A, o, l)),
        c = null != d ? d.id : null;
    return {
        currenciesFromSubscriptionPlan: i.useMemo(
            () => _({ subscriptionPlan: d, paymentSourceId: n, isGift: l }),
            [d, n, l],
        ),
        subscriptionPlanIdForCurrency: c,
        hasFetchedRelatedSubscriptionPlans: (0, a.Y)(o),
    };
}
n.d(
    t,
    {},
    {
        Jn: function () {
            let {
                    skuIds: e,
                    isGift: t,
                    paymentSourceId: n,
                    setCheckoutCurrency: r,
                    checkoutPriceOptions: a,
                    invoiceCurrency: s,
                } = (0, o.t4)((e) => ({
                    skuIds: e.skuIds,
                    isGift: e.isGift,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutCurrency: e.setCheckoutCurrency,
                    checkoutPriceOptions: e.checkoutPriceOptions,
                    invoiceCurrency: null != e.checkoutInvoicePreview ? e.checkoutInvoicePreview.currency : null,
                })),
                {
                    currenciesFromSubscriptionPlan: l,
                    subscriptionPlanIdForCurrency: d,
                    hasFetchedRelatedSubscriptionPlans: c,
                } = A({ skuIDs: E(e), paymentSourceId: n, isGift: t }),
                { allowedCurrencies: u } = (function () {
                    let { checkoutContext: e, invoiceCurrency: t } = (0, o.t4)((e) => ({
                        checkoutContext: e.get("checkoutContext"),
                        invoiceCurrency: null != e.checkoutInvoicePreview ? e.checkoutInvoicePreview.currency : void 0,
                    }));
                    return {
                        allowedCurrencies: i.useMemo(() => (null != e ? (e.allowed_currencies ?? []) : []), [e]),
                        invoiceCurrency: t,
                    };
                })(),
                _ = i.useMemo(() => (u.length > 0 ? u : l), [u, l]),
                h = i.useMemo(() => a.paymentSourceId !== n || !a.loaded || null == d || !c, [a, n, d, c]),
                f = a.currency,
                I = i.useMemo(() => (null != f ? f : null != s ? s : _.length > 0 ? _[0] : void 0), [f, s, _]);
            return {
                checkoutPriceOptions: a,
                dropdownCurrencies: _,
                displayCurrency: I,
                setCheckoutCurrency: r,
                subscriptionPlanIdForCurrency: d,
                subscriptionPriceOptionsLoading: h,
                hasFetchedRelatedSubscriptionPlans: c,
            };
        },
        _r: E,
        el: function (e) {
            let { activeSubscription: t, skuIds: n, paymentSourceId: i, isGift: r } = e,
                a = _({ subscriptionPlan: u(s.A, E(n), r), paymentSourceId: i, isGift: r });
            return null != t && a.includes(t.currency) ? t.currency : a.length > 0 ? a[0] : d.Yri.USD;
        },
        ow: A,
    },
);
