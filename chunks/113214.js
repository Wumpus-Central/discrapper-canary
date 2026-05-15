"use strict";
n.d(t, { P: () => m });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(444927),
    o = n(38405),
    l = n(426398),
    u = n(166532),
    c = n(615310),
    d = n(94420),
    _ = n(753390);
let f = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: i,
            eligiblePaymentGateways: s,
            hasFetchedPaymentSources: a,
            paymentSources: o,
        } = e,
        u = (0, d.t4)((e) => e.setPaymentSourceId),
        c = r.useCallback(() => {
            u(
                (0, l._m)({
                    isGift: t,
                    activeSubscription: n,
                    defaultPaymentSourceId: i,
                    eligiblePaymentGateways: s,
                    paymentSources: o,
                }),
            );
        }, [t, n, i, s, u]);
    return (
        r.useEffect(() => {
            a ? c() : (0, _.$o)();
        }, [a, c]),
        null
    );
};
var h = n(679374);
let p = { skuIds: [], isGift: !1, referralTrialOfferId: null, activeSubscription: null };
function E() {
    return (
        !(function () {
            let e = (0, c.bB)(),
                { purchaseState: t, setPurchaseState: n } = (0, d.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, u.zT)(e, t, n);
        })(),
        null
    );
}
function m(e) {
    let { checkoutInitParameters: t = p, loadId: n, discoverySessionId: u, children: c } = e,
        _ = (0, h._5)(),
        m = (0, a.A)(() => {
            let e = _?.id ?? n ?? (0, s.A)();
            return (
                o.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: u, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: g,
            defaultPaymentSourceId: A,
            eligiblePaymentGateways: I,
            hasFetchedPaymentSources: T,
            paymentSources: S,
        } = (0, l.mz)({ skuId: t.skuIds[0], isGift: t.isGift, activeSubscription: t.activeSubscription }),
        [N] = r.useState(() =>
            (0, d.y$)({ checkoutInitParameters: t, contextMetadata: m, order: _, initialPaymentSourceId: g }),
        ),
        y = r.useRef(null != _);
    return (
        r.useEffect(() => {
            y.current || null == _ || (N.setState({ order: _ }), (y.current = !0));
        }, [_, N]),
        r.useEffect(() => {
            N.setState({ checkoutInitParameters: t });
        }, [N, t]),
        (0, i.jsxs)(d.Ni, {
            value: N,
            children: [
                (0, i.jsx)(E, {}),
                (0, i.jsx)(f, {
                    isGift: t.isGift,
                    activeSubscription: t.activeSubscription,
                    defaultPaymentSourceId: A,
                    eligiblePaymentGateways: I,
                    hasFetchedPaymentSources: T,
                    paymentSources: S,
                }),
                c,
            ],
        })
    );
}
