n.d(t, { Jn: () => I, _r: () => A, el: () => _, ow: () => h });
var i = n(582128),
    r = n(17928),
    a = n(160946),
    s = n(97352),
    l = n(83617),
    o = n(206441),
    d = n(652215),
    c = n(202541);
function u(e, t, n) {
    let i = e.getPlanIdsForSkus(t).filter((e) => !n || c.JM.has(e));
    return i.length > 0 ? e.get(i[0]) : null;
}
function _(e) {
    let { activeSubscription: t, skuIds: n, paymentSourceId: i, isGift: r } = e,
        a = E({ subscriptionPlan: u(s.A, A(n), r), paymentSourceId: i, isGift: r });
    return null != t && a.includes(t.currency) ? t.currency : a.length > 0 ? a[0] : d.Yri.USD;
}
function E(e) {
    let { subscriptionPlan: t, paymentSourceId: n, isGift: i } = e;
    return null == t ? [] : (0, l._w)(t.id, n, i);
}
function A(e) {
    return e.filter((e) => e !== c.pe.NONE);
}
function h(e) {
    let { skuIDs: t, paymentSourceId: n, isGift: l } = e,
        o = i.useMemo(() => A(t), [t]),
        d = (0, r.bG)([s.A], () => u(s.A, o, l)),
        c = null != d ? d.id : null;
    return {
        currenciesFromSubscriptionPlan: i.useMemo(
            () => E({ subscriptionPlan: d, paymentSourceId: n, isGift: l }),
            [d, n, l],
        ),
        subscriptionPlanIdForCurrency: c,
        hasFetchedRelatedSubscriptionPlans: (0, a.Y)(o),
    };
}
function I() {
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
        } = h({ skuIDs: A(e), paymentSourceId: n, isGift: t }),
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
        E = i.useMemo(() => a.paymentSourceId !== n || !a.loaded || null == d || !c, [a, n, d, c]),
        I = a.currency,
        f = i.useMemo(() => (null != I ? I : null != s ? s : _.length > 0 ? _[0] : void 0), [I, s, _]);
    return {
        checkoutPriceOptions: a,
        dropdownCurrencies: _,
        displayCurrency: f,
        setCheckoutCurrency: r,
        subscriptionPlanIdForCurrency: d,
        subscriptionPriceOptionsLoading: E,
        hasFetchedRelatedSubscriptionPlans: c,
    };
}
