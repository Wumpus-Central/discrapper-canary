n.d(t, { m: () => l });
var r = n(73800),
    i = n(442837),
    o = n(711959),
    a = n(526056),
    s = n(877820);
function l(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.currentOrderId),
        l = a.Z.useExperiment({ location: "payment_modal" }).enabled;
    (0, r.useEffect)(() => {
        l &&
            null != n &&
            (0, o.C)({
                orderId: n,
                updates: { paymentSourceId: t },
            });
    }, [e, t, l]),
        (0, r.useEffect)(() => {
            l &&
                null == n &&
                null != e &&
                null != t &&
                (0, o.L)({
                    skuId: e,
                    paymentSourceId: t,
                });
        }, [n, e, t, l]);
}
