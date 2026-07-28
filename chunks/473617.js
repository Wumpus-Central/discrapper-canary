n.d(t, { E: () => u, TP: () => d, jq: () => c });
var l = n(582128),
    i = n(17928),
    r = n(566980),
    a = n(97352),
    s = n(71804),
    o = n(316915);
function u(e) {
    let {
            fetchCheckoutInvoicePreviewRequest: t,
            fetchRenewalInvoicePreviewRequest: n,
            shouldAllowNullState: i = !1,
        } = e,
        { setFetchCheckoutInvoicePreviewRequest: r, setFetchRenewalInvoicePreviewRequest: a } = (0, o.t4)((e) => ({
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
        }));
    l.useEffect(() => {
        (i || null != t) && r(t);
    }, [t, r, i]),
        l.useEffect(() => {
            (i || null != n) && a(n);
        }, [n, a, i]);
}
function c(e) {
    let { items: t, preventFetch: n, priceOptions: i, trialId: r, subscriptionMetadata: a } = e,
        { contextMetadata: s, activeSubscription: u } = (0, o.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            activeSubscription: e.activeSubscription,
        })),
        c = l.useMemo(
            () => ({ preventFetch: n, paymentSourceId: i.paymentSourceId, currency: i.currency, loadId: s.loadId }),
            [n, i.paymentSourceId, i.currency, s.loadId],
        ),
        d = l.useMemo(() => ({ items: t, trialId: r, ...c, metadata: a ?? void 0 }), [c, t, r, a]);
    return {
        universalInvoiceRequestParams: c,
        checkoutInvoiceRequestParams: { ...d, applyEntitlements: !0, renewal: !1 },
        renewalInvoiceRequestParams: { ...d, subscriptionId: u?.id, renewal: !0 },
    };
}
function d(e) {
    let { selectedPlanId: t, priceOptions: n } = e,
        u = (0, o.t4)((e) => e.purchaseState),
        c = (0, i.bG)([a.A], () => a.A.get(t));
    if (null == c)
        throw new s.v({
            message: "Missing plan (useSubscriptionCheckoutInvoiceFetchState)",
            extraSentryInformation: { selectedPlanId: t, purchaseState: u, priceOptions: n },
        });
    let d = l.useMemo(() => [{ planId: c.id, quantity: 1 }], [c.id]),
        p = u === r.h.PURCHASING || u === r.h.COMPLETED,
        m = !0 === n.loaded;
    return { subscriptionPlan: c, purchaseState: u, purchaseDisabled: p, newItems: d, preventInvoiceFetch: p || !m };
}
