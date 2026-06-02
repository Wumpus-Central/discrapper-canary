r.d(t, { _m: () => o, jm: () => c, kc: () => p, mz: () => d });
var n = r(64700),
    a = r(17928),
    l = r(826469),
    i = r(295405),
    u = r(67480),
    s = r(722847);
let o = (e) => {
    let {
        isGift: t,
        activeSubscription: r,
        defaultPaymentSourceId: n,
        paymentSources: a,
        eligiblePaymentGateways: l,
    } = e;
    if (!t && r?.paymentSourceId != null) return r.paymentSourceId;
    if (null != l && l.length > 0) {
        if (null != n && n in a && l.includes(a[n].paymentGateway)) return n;
        for (let e in a) {
            let t = a[e];
            if (l.includes(t.paymentGateway)) return e;
        }
        return null;
    }
    return n;
};
function c() {
    let {
            defaultPaymentSourceId: e,
            paymentSources: t,
            hasFetchedPaymentSources: r,
        } = (0, a.cf)([i.A], () => ({
            defaultPaymentSourceId: i.A.defaultPaymentSourceId,
            paymentSources: i.A.paymentSources,
            hasFetchedPaymentSources: i.A.hasFetchedPaymentSources,
        })),
        { hasPaymentSources: l, defaultPaymentSource: u } = n.useMemo(
            () => ({ hasPaymentSources: Object.keys(t).length > 0, defaultPaymentSource: null != e ? t[e] : null }),
            [t, e],
        );
    return {
        defaultPaymentSourceId: e,
        paymentSources: t,
        hasFetchedPaymentSources: r,
        hasPaymentSources: l,
        defaultPaymentSource: u,
    };
}
function d(e) {
    let { skuId: t, isGift: r, activeSubscription: l } = e,
        i = (0, a.bG)([u.A], () => u.A.get(t), [t]),
        s = null != i ? i.eligiblePaymentGateways : null,
        { defaultPaymentSourceId: d, paymentSources: p, hasFetchedPaymentSources: f } = c();
    return {
        initialCheckoutPaymentSourceId: n.useMemo(
            () =>
                o({
                    isGift: r,
                    activeSubscription: l,
                    defaultPaymentSourceId: d,
                    eligiblePaymentGateways: s,
                    paymentSources: p,
                }) ?? null,
            [r, l, d, s, p],
        ),
        defaultPaymentSourceId: d,
        eligiblePaymentGateways: s,
        hasFetchedPaymentSources: f,
        paymentSources: p,
    };
}
let p = () => {
    let e = (0, s.t4)((e) => e.checkoutInvoicePreview);
    return n.useMemo(() => {
        if (null == e) return [];
        let t = e.checkoutContext;
        return null == t || null == t.payment_sources ? [] : t.payment_sources.map(l.A.createFromCheckoutContext);
    }, [e]);
};
