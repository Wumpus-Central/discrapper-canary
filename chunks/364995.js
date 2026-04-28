"use strict";
n.d(t, { aN: () => o, t6: () => l });
var i = n(64700),
    r = n(228366),
    s = n(826469),
    a = n(94420);
let o = (e) => {
        let t = i.useCallback(
            (t) => {
                null != t.price &&
                    null != t.price.checkout_context &&
                    null != t.price.checkout_context.payment_sources &&
                    null != t.checkoutSessionId &&
                    e.setState({
                        standaloneInvoiceOrderContext: t.price.checkout_context,
                        standaloneInvoiceOrderCheckoutSessionId: t.checkoutSessionId,
                    });
            },
            [e],
        );
        i.useEffect(
            () => (
                r.h.subscribe("SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", t),
                () => {
                    r.h.unsubscribe("SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", t);
                }
            ),
            [t],
        );
    },
    l = () => {
        let e = (0, a.t4)((e) => {
                let { checkoutInvoicePreview: t, standaloneInvoiceOrderContext: n } = e;
                return null != t && null != t.checkoutContext ? t.checkoutContext : n;
            }),
            {
                paymentSourceRecords: t,
                allowedCurrencies: n,
                storeCountry: r,
            } = i.useMemo(
                () =>
                    ((e) => {
                        if (null == e) return { paymentSourceRecords: [], allowedCurrencies: [], storeCountry: null };
                        let t = null != e.store_country ? e.store_country.country : null;
                        return {
                            paymentSourceRecords: e.payment_sources.map(s.A.createFromCheckoutContext),
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
