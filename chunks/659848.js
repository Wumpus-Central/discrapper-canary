n.d(t, { m: () => l });
var r = n(73800),
    i = n(442837),
    a = n(711959),
    o = n(526056),
    s = n(877820);
function l(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.currentOrderId),
        l = o.Z.useExperiment({ location: 'payment_modal' }).enabled;
    ((0, r.useEffect)(() => {
        l &&
            null != n &&
            (0, a.C)({
                orderId: n,
                updates: { paymentSourceId: t }
            });
    }, [e, t, l]),
        (0, r.useEffect)(() => {
            l &&
                null == n &&
                null != e &&
                null != t &&
                (0, a.L)({
                    skuId: e,
                    paymentSourceId: t
                });
        }, [n, e, t, l]));
}
