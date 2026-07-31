n.d(t, { P: () => s, t: () => a });
var l = n(582128),
    i = n(826469),
    r = n(316915);
function a() {
    let e = (0, r.t4)((e) => e.get("checkoutContext")),
        {
            paymentSourceRecords: t,
            allowedCurrencies: n,
            storeCountry: a,
        } = l.useMemo(
            () =>
                (function (e) {
                    if (null == e) return { paymentSourceRecords: [], allowedCurrencies: [], storeCountry: null };
                    let t = null != e.store_country ? e.store_country.country : null;
                    return {
                        paymentSourceRecords: e.payment_sources.map(i.A.createFromCheckoutContext),
                        allowedCurrencies: e.allowed_currencies ?? [],
                        storeCountry: t,
                    };
                })(e),
            [e],
        );
    return {
        checkoutPaymentSources: t,
        allowedCurrencies: n,
        storeCountry: a,
        hasInvoiceOrderContextLoaded: null != e,
        invoiceOrderContext: e,
    };
}
function s() {
    return (0, r.t4)((e) => {
        let t = e.get("checkoutContext");
        return null == t || null == t.store_country ? null : t.store_country.country;
    });
}
