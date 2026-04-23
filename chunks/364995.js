n.d(t, { Fy: () => s, P7: () => l, aN: () => d });
var r = n(64700),
    a = n(228366),
    i = n(826469),
    o = n(94420);
let l = () => {
        let e = (0, o.t4)((e) => {
            let { invoiceOrderContext: t } = e;
            return t;
        });
        return r.useMemo(() => (null == e || null == e.store_country ? null : e.store_country.country), [e]);
    },
    s = () => {
        let { invoiceOrderContext: e } = (0, o.t4)((e) => {
                let { invoiceOrderContext: t } = e;
                return { invoiceOrderContext: t };
            }),
            t = null != e;
        return {
            ...r.useMemo(
                () =>
                    null == e
                        ? { paymentSourceRecords: [], allowedCurrencies: [] }
                        : {
                              paymentSourceRecords: e.payment_sources.map(i.A.createFromCheckoutContext),
                              allowedCurrencies: e.allowed_currencies ?? [],
                          },
                [e],
            ),
            hasCheckoutContextForSession: t,
        };
    },
    d = (e) => {
        let t = r.useCallback(
                (t) => {
                    null != t.price &&
                        null != t.price.checkout_context &&
                        null != t.price.checkout_context.payment_sources &&
                        null != t.checkoutSessionId &&
                        e.setState({
                            invoiceOrderContext: t.price.checkout_context,
                            invoiceOrderCheckoutSessionId: t.checkoutSessionId,
                        });
                },
                [e],
            ),
            n = r.useCallback(
                (t) => {
                    e.setState({
                        invoiceOrderContext: t.checkoutContext,
                        invoiceOrderPreviewPaymentSourceId: t.paymentSourceId ?? null,
                    });
                },
                [e],
            );
        r.useEffect(
            () => (
                a.h.subscribe("SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", t),
                a.h.subscribe("SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", n),
                () => {
                    a.h.unsubscribe("SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", t),
                        a.h.unsubscribe("SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", n);
                }
            ),
            [t, n],
        );
    };
