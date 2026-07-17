n.d(t, { _m: () => c, jm: () => d, kc: () => m, mz: () => p });
var l = n(64700),
    i = n(17928),
    r = n(277984),
    a = n(826469),
    s = n(295405),
    o = n(67480);
n(428262);
var u = n(316915);
function c(e) {
    let {
        isGift: t,
        activeSubscription: n,
        defaultPaymentSourceId: l,
        paymentSources: i,
        eligiblePaymentGateways: r,
    } = e;
    if (!t && n?.paymentSourceId != null) return n.paymentSourceId;
    if (null != r && r.length > 0) {
        if (null != l && l in i && r.includes(i[l].paymentGateway)) return l;
        for (let e in i) {
            let t = i[e];
            if (r.includes(t.paymentGateway)) return e;
        }
        return null;
    }
    return l;
}
function d(e) {
    let t = null != e && e.shouldAllowFetchPaymentSources,
        {
            defaultPaymentSourceId: n,
            paymentSources: a,
            hasFetchedPaymentSources: o,
        } = (0, i.cf)([s.A], () => ({
            defaultPaymentSourceId: s.A.defaultPaymentSourceId,
            paymentSources: s.A.paymentSources,
            hasFetchedPaymentSources: s.A.hasFetchedPaymentSources,
        })),
        { hasPaymentSources: u, defaultPaymentSource: c } = l.useMemo(
            () => ({ hasPaymentSources: Object.keys(a).length > 0, defaultPaymentSource: null != n ? a[n] : null }),
            [a, n],
        );
    return (
        l.useEffect(() => {
            t && !o && (0, r.$o)();
        }, [t, o]),
        {
            defaultPaymentSourceId: n,
            paymentSources: a,
            hasFetchedPaymentSources: o,
            hasPaymentSources: u,
            defaultPaymentSource: c,
        }
    );
}
function p(e) {
    let { skuId: t, isGift: n, activeSubscription: r } = e,
        a = (0, i.bG)([o.A], () => o.A.get(t), [t]),
        s = null != a ? a.eligiblePaymentGateways : null,
        { defaultPaymentSourceId: u, paymentSources: p, hasFetchedPaymentSources: m, hasPaymentSources: h } = d();
    return {
        initialCheckoutPaymentSourceId: l.useMemo(
            () =>
                c({
                    isGift: n,
                    activeSubscription: r,
                    defaultPaymentSourceId: u,
                    eligiblePaymentGateways: s,
                    paymentSources: p,
                }) ?? null,
            [n, r, u, s, p],
        ),
        defaultPaymentSourceId: u,
        eligiblePaymentGateways: s,
        hasFetchedPaymentSources: m,
        paymentSources: p,
        hasPaymentSources: h,
    };
}
function m() {
    let e = (0, u.t4)((e) => e.checkoutInvoicePreview);
    return l.useMemo(() => {
        if (null == e) return [];
        let t = e.checkoutContext;
        return null == t || null == t.payment_sources ? [] : t.payment_sources.map(a.A.createFromCheckoutContext);
    }, [e]);
}
