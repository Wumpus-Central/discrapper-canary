"use strict";
n.d(t, { Fy: () => u, P7: () => l, aN: () => c });
var r = n(64700),
    i = n(73153),
    s = n(826469),
    a = n(94420);
let o = (e) =>
        null == e
            ? { paymentSourceRecords: [], allowedCurrencies: [] }
            : {
                  paymentSourceRecords: e.payment_sources.map(s.A.createFromCheckoutContext),
                  allowedCurrencies: e.allowed_currencies ?? [],
              },
    l = () => {
        let e = (0, a.t4)((e) => {
            let { invoiceOrderContext: t } = e;
            return t;
        });
        return r.useMemo(() => (null == e || null == e.store_country ? null : e.store_country.country), [e]);
    },
    u = () => {
        let { invoiceOrderContext: e } = (0, a.t4)((e) => {
                let { invoiceOrderContext: t } = e;
                return { invoiceOrderContext: t };
            }),
            t = null != e;
        return { ...r.useMemo(() => o(e), [e]), hasCheckoutContextForSession: t };
    },
    c = (e) => {
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
                i.h.subscribe("SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", t),
                i.h.subscribe("SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", n),
                () => {
                    i.h.unsubscribe("SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", t),
                        i.h.unsubscribe("SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", n);
                }
            ),
            [t, n],
        );
    };
