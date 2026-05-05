n.d(t, { t: () => r });
var l = n(64700),
    a = n(826469),
    i = n(94420);
let r = () => {
    let e = (0, i.t4)((e) => {
            let { checkoutInvoicePreview: t } = e;
            return null != t && null != t.checkoutContext ? t.checkoutContext : null;
        }),
        {
            paymentSourceRecords: t,
            allowedCurrencies: n,
            storeCountry: r,
        } = l.useMemo(
            () =>
                ((e) => {
                    if (null == e) return { paymentSourceRecords: [], allowedCurrencies: [], storeCountry: null };
                    let t = null != e.store_country ? e.store_country.country : null;
                    return {
                        paymentSourceRecords: e.payment_sources.map(a.A.createFromCheckoutContext),
                        allowedCurrencies: e.allowed_currencies ?? [],
                        storeCountry: t,
                    };
                })(e),
            [e],
        );
    return {
        checkoutPaymentSources: t,
        allowedCurrencies: n,
        storeCountry: r,
        hasInvoiceOrderContextLoaded: null != e,
        invoiceOrderContext: e,
    };
};
