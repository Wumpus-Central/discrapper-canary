n.d(t, { P: () => o, t: () => s });
var l = n(64700),
    i = n(826469),
    r = n(6938);
function a(e) {
    return null != e && null != e.checkoutContext ? e.checkoutContext : null;
}
function s() {
    let e = (0, r.t4)((e) => {
            let { checkoutInvoicePreview: t } = e;
            return a(t);
        }),
        {
            paymentSourceRecords: t,
            allowedCurrencies: n,
            storeCountry: s,
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
        storeCountry: s,
        hasInvoiceOrderContextLoaded: null != e,
        invoiceOrderContext: e,
    };
}
function o() {
    return (0, r.t4)((e) => {
        let t = a(e.checkoutInvoicePreview);
        return null == t || null == t.store_country ? null : t.store_country.country;
    });
}
