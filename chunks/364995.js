"use strict";
n.d(t, { P: () => l, t: () => o });
var i = n(64700),
    r = n(826469),
    s = n(46332);
function a(e) {
    return null != e && null != e.checkoutContext ? e.checkoutContext : null;
}
function o() {
    let e = (0, s.t4)((e) => {
            let { checkoutInvoicePreview: t } = e;
            return a(t);
        }),
        {
            paymentSourceRecords: t,
            allowedCurrencies: n,
            storeCountry: o,
        } = i.useMemo(
            () =>
                (function (e) {
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
        storeCountry: o,
        hasInvoiceOrderContextLoaded: null != e,
        invoiceOrderContext: e,
    };
}
function l() {
    return (0, s.t4)((e) => {
        let t = a(e.checkoutInvoicePreview);
        return null == t || null == t.store_country ? null : t.store_country.country;
    });
}
