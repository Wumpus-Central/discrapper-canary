r.d(t, { _m: () => o, jm: () => d, kc: () => p, mz: () => f });
var n = r(64700),
    u = r(17928),
    i = r(277984),
    c = r(826469),
    s = r(295405),
    l = r(67480);
r(428262);
var a = r(6938);
function o(e) {
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
function d(e) {
    let t = null != e && e.shouldAllowFetchPaymentSources,
        {
            defaultPaymentSourceId: r,
            paymentSources: c,
            hasFetchedPaymentSources: l,
        } = (0, u.cf)([s.A], () => ({
            defaultPaymentSourceId: s.A.defaultPaymentSourceId,
            paymentSources: s.A.paymentSources,
            hasFetchedPaymentSources: s.A.hasFetchedPaymentSources,
        })),
        { hasPaymentSources: a, defaultPaymentSource: o } = n.useMemo(
            () => ({ hasPaymentSources: Object.keys(c).length > 0, defaultPaymentSource: null != r ? c[r] : null }),
            [c, r],
        );
    return (
        n.useEffect(() => {
            t && !l && (0, i.$o)();
        }, [t, l]),
        {
            defaultPaymentSourceId: r,
            paymentSources: c,
            hasFetchedPaymentSources: l,
            hasPaymentSources: a,
            defaultPaymentSource: o,
        }
    );
}
function f(e) {
    let { skuId: t, isGift: r, activeSubscription: i } = e,
        c = (0, u.bG)([l.A], () => l.A.get(t), [t]),
        s = null != c ? c.eligiblePaymentGateways : null,
        { defaultPaymentSourceId: a, paymentSources: f, hasFetchedPaymentSources: p, hasPaymentSources: h } = d();
    return {
        initialCheckoutPaymentSourceId: n.useMemo(
            () =>
                o({
                    isGift: r,
                    activeSubscription: i,
                    defaultPaymentSourceId: a,
                    eligiblePaymentGateways: s,
                    paymentSources: f,
                }) ?? null,
            [r, i, a, s, f],
        ),
        defaultPaymentSourceId: a,
        eligiblePaymentGateways: s,
        hasFetchedPaymentSources: p,
        paymentSources: f,
        hasPaymentSources: h,
    };
}
function p() {
    let e = (0, a.t4)((e) => e.checkoutInvoicePreview);
    return n.useMemo(() => {
        if (null == e) return [];
        let t = e.checkoutContext;
        return null == t || null == t.payment_sources ? [] : t.payment_sources.map(c.A.createFromCheckoutContext);
    }, [e]);
}
