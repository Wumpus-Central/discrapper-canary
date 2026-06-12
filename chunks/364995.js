n.d(t, { t: () => a });
var l = n(64700),
    r = n(826469),
    i = n(211159);
let a = () => {
    let e = (0, i.t4)((e) => {
            let { checkoutInvoicePreview: t } = e;
            return null != t && null != t.checkoutContext ? t.checkoutContext : null;
        }),
        {
            paymentSourceRecords: t,
            allowedCurrencies: n,
            storeCountry: a,
        } = l.useMemo(
            () =>
                ((e) => {
                    if (null == e) return { paymentSourceRecords: [], allowedCurrencies: [], storeCountry: null };
                    let t = null != e.store_country ? e.store_country.country : null;
                    return {
                        paymentSourceRecords: e.payment_sources.map(r.A.createFromCheckoutContext),
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
};
