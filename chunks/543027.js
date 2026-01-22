n.d(t, { A: () => p });
var r = n(64700),
    i = n(311907),
    a = n(224771),
    s = n(624210),
    o = n(573582),
    l = n(224949),
    c = n(818348);
function u(e) {
    return !d(e);
}
function d(e) {
    var t;
    return (null == e || null == (t = e.billing_facet) ? void 0 : t.payment_gateway) === c.kM.VIRTUAL_CURRENCY;
}
function f(e) {
    return null != e.paymentSourceId || null != e.paymentGateway;
}
function p(e, t) {
    let n = (0, i.bG)([l.A], () => l.A.currentOrder),
        d = (0, i.bG)([l.A], () => l.A.currentOrderId),
        p = (0, i.bG)([l.A], () => l.A.isCreatingOrder),
        _ = o.A.useExperiment({ location: "payment_modal" }).enabled,
        h = (0, r.useRef)(null),
        m = (0, r.useRef)(""),
        g = (0, r.useRef)(!1),
        E = (0, r.useRef)(!1),
        b = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        if (!_ || null == d || null == t.paymentSourceId) return;
        let e = t.paymentSourceId;
        async function r() {
            let r = null != n ? n : await (0, a.r$)(d),
                i = null == r ? void 0 : r.billing_facet;
            if ((null == i ? void 0 : i.payment_source_id) === t.paymentSourceId) {
                (h.current = d), (m.current = e);
                return;
            }
            u(r) &&
                (await (0, s.iY)({
                    orderId: d,
                    updates: t,
                }),
                (h.current = d),
                (m.current = e));
        }
        (h.current !== d || m.current !== e) && r();
    }, [d, n, t.paymentSourceId, _]),
        (0, r.useEffect)(() => {
            let e = b.current;
            (b.current = d),
                null == d && null != e
                    ? ((E.current = !0), (h.current = null), (m.current = ""), (g.current = !1))
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
            let r = t.paymentGateway === c.kM.VIRTUAL_CURRENCY;
            (0, s.fS)({
                skuId: e,
                paymentSourceId: r ? void 0 : null != (n = t.paymentSourceId) ? n : void 0,
                paymentGateway: t.paymentGateway,
                loadId: t.loadId,
            });
        }, [d, p, e, t, _]);
}
