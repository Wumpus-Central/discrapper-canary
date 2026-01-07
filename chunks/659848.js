n.d(t, { m: () => p });
var r = n(473749),
    i = n(442837),
    a = n(197550),
    o = n(711959),
    s = n(526056),
    l = n(877820),
    c = n(231338);
function u(e) {
    return !d(e);
}
function d(e) {
    var t;
    return (null == e || null == (t = e.billing_facet) ? void 0 : t.payment_gateway) === c.gg.VIRTUAL_CURRENCY;
}
function f(e) {
    return null != e.paymentSourceId || null != e.paymentGateway;
}
function p(e, t) {
    let n = (0, i.e7)([l.Z], () => l.Z.currentOrder),
        d = (0, i.e7)([l.Z], () => l.Z.currentOrderId),
        p = (0, i.e7)([l.Z], () => l.Z.isCreatingOrder),
        _ = s.Z.useExperiment({ location: "payment_modal" }).enabled,
        m = (0, r.useRef)(null),
        h = (0, r.useRef)(""),
        g = (0, r.useRef)(!1),
        E = (0, r.useRef)(!1),
        b = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        if (!_ || null == d || null == t.paymentSourceId) return;
        let e = t.paymentSourceId;
        async function r() {
            let r = null != n ? n : await (0, a.co)(d),
                i = null == r ? void 0 : r.billing_facet;
            if ((null == i ? void 0 : i.payment_source_id) === t.paymentSourceId) {
                (m.current = d), (h.current = e);
                return;
            }
            u(r) &&
                (await (0, o.Cs)({
                    orderId: d,
                    updates: t,
                }),
                (m.current = d),
                (h.current = e));
        }
        (m.current !== d || h.current !== e) && r();
    }, [d, n, t.paymentSourceId, _]),
        (0, r.useEffect)(() => {
            let e = b.current;
            (b.current = d),
                null == d && null != e
                    ? ((E.current = !0), (m.current = null), (h.current = ""), (g.current = !1))
                    : null != d && (E.current = !1);
        }, [d]),
        (0, r.useEffect)(() => {
            var n;
            if (null != d) {
                (g.current = !1), (E.current = !1);
                return;
            }
            if (E.current || !_ || p || g.current || null == e || !f(t)) return;
            g.current = !0;
            let r = t.paymentGateway === c.gg.VIRTUAL_CURRENCY;
            (0, o.LV)({
                skuId: e,
                paymentSourceId: r ? void 0 : null != (n = t.paymentSourceId) ? n : void 0,
                paymentGateway: t.paymentGateway,
                loadId: t.loadId,
            });
        }, [d, p, e, t, _]);
}
