r.d(t, { _m: () => a, jm: () => o, kc: () => f, mz: () => d });
var n = r(64700),
    u = r(17928),
    i = r(826469),
    c = r(295405),
    s = r(67480),
    l = r(6938);
function a(e) {
    let {
        isGift: t,
        activeSubscription: r,
        defaultPaymentSourceId: n,
        paymentSources: u,
        eligiblePaymentGateways: i,
    } = e;
    if (!t && r?.paymentSourceId != null) return r.paymentSourceId;
    if (null != i && i.length > 0) {
        if (null != n && n in u && i.includes(u[n].paymentGateway)) return n;
        for (let e in u) {
            let t = u[e];
            if (i.includes(t.paymentGateway)) return e;
        }
        return null;
    }
    return n;
}
function o() {
    let {
            defaultPaymentSourceId: e,
            paymentSources: t,
            hasFetchedPaymentSources: r,
        } = (0, u.cf)([c.A], () => ({
            defaultPaymentSourceId: c.A.defaultPaymentSourceId,
            paymentSources: c.A.paymentSources,
            hasFetchedPaymentSources: c.A.hasFetchedPaymentSources,
        })),
        { hasPaymentSources: i, defaultPaymentSource: s } = n.useMemo(
            () => ({ hasPaymentSources: Object.keys(t).length > 0, defaultPaymentSource: null != e ? t[e] : null }),
            [t, e],
        );
    return {
        defaultPaymentSourceId: e,
        paymentSources: t,
        hasFetchedPaymentSources: r,
        hasPaymentSources: i,
        defaultPaymentSource: s,
    };
}
function d(e) {
    let { skuId: t, isGift: r, activeSubscription: i } = e,
        c = (0, u.bG)([s.A], () => s.A.get(t), [t]),
        l = null != c ? c.eligiblePaymentGateways : null,
        { defaultPaymentSourceId: d, paymentSources: f, hasFetchedPaymentSources: p, hasPaymentSources: h } = o();
    return {
        initialCheckoutPaymentSourceId: n.useMemo(
            () =>
                a({
                    isGift: r,
                    activeSubscription: i,
                    defaultPaymentSourceId: d,
                    eligiblePaymentGateways: l,
                    paymentSources: f,
                }) ?? null,
            [r, i, d, l, f],
        ),
        defaultPaymentSourceId: d,
        eligiblePaymentGateways: l,
        hasFetchedPaymentSources: p,
        paymentSources: f,
        hasPaymentSources: h,
    };
}
function f() {
    let e = (0, l.t4)((e) => e.checkoutInvoicePreview);
    return n.useMemo(() => {
        if (null == e) return [];
        let t = e.checkoutContext;
        return null == t || null == t.payment_sources ? [] : t.payment_sources.map(i.A.createFromCheckoutContext);
    }, [e]);
}
