r.d(t, { _m: () => c, jm: () => o, kc: () => p, mz: () => d });
var n = r(64700),
    l = r(17928),
    u = r(826469),
    a = r(295405),
    i = r(67480),
    s = r(571878);
let c = (e) => {
    let {
        isGift: t,
        activeSubscription: r,
        defaultPaymentSourceId: n,
        paymentSources: l,
        eligiblePaymentGateways: u,
    } = e;
    if (!t && r?.paymentSourceId != null) return r.paymentSourceId;
    if (null != u && u.length > 0) {
        if (null != n && n in l && u.includes(l[n].paymentGateway)) return n;
        for (let e in l) {
            let t = l[e];
            if (u.includes(t.paymentGateway)) return e;
        }
        return null;
    }
    return n;
};
function o() {
    let {
            defaultPaymentSourceId: e,
            paymentSources: t,
            hasFetchedPaymentSources: r,
        } = (0, l.cf)([a.A], () => ({
            defaultPaymentSourceId: a.A.defaultPaymentSourceId,
            paymentSources: a.A.paymentSources,
            hasFetchedPaymentSources: a.A.hasFetchedPaymentSources,
        })),
        { hasPaymentSources: u, defaultPaymentSource: i } = n.useMemo(
            () => ({ hasPaymentSources: Object.keys(t).length > 0, defaultPaymentSource: null != e ? t[e] : null }),
            [t, e],
        );
    return {
        defaultPaymentSourceId: e,
        paymentSources: t,
        hasFetchedPaymentSources: r,
        hasPaymentSources: u,
        defaultPaymentSource: i,
    };
}
function d(e) {
    let { skuId: t, isGift: r, activeSubscription: u } = e,
        a = (0, l.bG)([i.A], () => i.A.get(t), [t]),
        s = null != a ? a.eligiblePaymentGateways : null,
        { defaultPaymentSourceId: d, paymentSources: p, hasFetchedPaymentSources: f, hasPaymentSources: h } = o();
    return {
        initialCheckoutPaymentSourceId: n.useMemo(
            () =>
                c({
                    isGift: r,
                    activeSubscription: u,
                    defaultPaymentSourceId: d,
                    eligiblePaymentGateways: s,
                    paymentSources: p,
                }) ?? null,
            [r, u, d, s, p],
        ),
        defaultPaymentSourceId: d,
        eligiblePaymentGateways: s,
        hasFetchedPaymentSources: f,
        paymentSources: p,
        hasPaymentSources: h,
    };
}
let p = () => {
    let e = (0, s.t4)((e) => e.checkoutInvoicePreview);
    return n.useMemo(() => {
        if (null == e) return [];
        let t = e.checkoutContext;
        return null == t || null == t.payment_sources ? [] : t.payment_sources.map(u.A.createFromCheckoutContext);
    }, [e]);
};
