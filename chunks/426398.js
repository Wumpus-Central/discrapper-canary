"use strict";
n.d(t, { _m: () => u, jm: () => c, kc: () => _, mz: () => d });
var i = n(64700),
    r = n(17928),
    s = n(826469),
    a = n(295405),
    o = n(67480),
    l = n(94420);
let u = (e) => {
    let {
        isGift: t,
        activeSubscription: n,
        defaultPaymentSourceId: i,
        paymentSources: r,
        eligiblePaymentGateways: s,
    } = e;
    if (!t && n?.paymentSourceId != null) return n.paymentSourceId;
    if (null != s && s.length > 0) {
        if (null != i && s.includes(r[i].paymentGateway)) return i;
        for (let e in r) {
            let t = r[e];
            if (s.includes(t.paymentGateway)) return e;
        }
        return null;
    }
    return i;
};
function c() {
    let {
            defaultPaymentSourceId: e,
            paymentSources: t,
            hasFetchedPaymentSources: n,
        } = (0, r.cf)([a.A], () => ({
            defaultPaymentSourceId: a.A.defaultPaymentSourceId,
            paymentSources: a.A.paymentSources,
            hasFetchedPaymentSources: a.A.hasFetchedPaymentSources,
        })),
        { hasPaymentSources: s, defaultPaymentSource: o } = i.useMemo(
            () => ({ hasPaymentSources: Object.keys(t).length > 0, defaultPaymentSource: null != e ? t[e] : null }),
            [t, e],
        );
    return {
        defaultPaymentSourceId: e,
        paymentSources: t,
        hasFetchedPaymentSources: n,
        hasPaymentSources: s,
        defaultPaymentSource: o,
    };
}
function d(e) {
    let { skuId: t, isGift: n, activeSubscription: s } = e,
        a = (0, r.bG)([o.A], () => o.A.get(t), [t]),
        l = null != a ? a.eligiblePaymentGateways : null,
        { defaultPaymentSourceId: d, paymentSources: _, hasFetchedPaymentSources: f } = c();
    return {
        initialCheckoutPaymentSourceId: i.useMemo(
            () =>
                u({
                    isGift: n,
                    activeSubscription: s,
                    defaultPaymentSourceId: d,
                    eligiblePaymentGateways: l,
                    paymentSources: _,
                }) ?? null,
            [n, s, d, l, _],
        ),
        defaultPaymentSourceId: d,
        eligiblePaymentGateways: l,
        hasFetchedPaymentSources: f,
        paymentSources: _,
    };
}
let _ = () => {
    let e = (0, l.t4)((e) => e.checkoutInvoicePreview);
    return i.useMemo(() => {
        if (null == e) return [];
        let t = e.checkoutContext;
        return null == t || null == t.payment_sources ? [] : t.payment_sources.map(s.A.createFromCheckoutContext);
    }, [e]);
};
