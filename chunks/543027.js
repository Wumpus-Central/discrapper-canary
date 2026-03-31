"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(311907),
    s = n(158317),
    a = n(123633),
    o = n(624210),
    l = n(573582),
    u = n(818348);
function c(e) {
    return !d(e);
}
function d(e) {
    return e?.billing_facet?.payment_gateway === u.kM.VIRTUAL_CURRENCY;
}
function _(e) {
    return null != e.paymentSourceId || null != e.paymentGateway;
}
function f(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.currentOrder),
        d = (0, i.bG)([a.A], () => a.A.currentOrderId),
        f = (0, i.bG)([a.A], () => a.A.isCreatingOrder),
        p = l.A.useConfig({ location: "payment_modal" }).enabled,
        h = (0, r.useRef)(null),
        m = (0, r.useRef)(""),
        E = (0, r.useRef)(!1),
        g = (0, r.useRef)(!1),
        A = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        if (!p || null == d || null == t.paymentSourceId) return;
        let e = t.paymentSourceId;
        async function r() {
            let r = n ?? (await (0, s.r)(d)),
                i = r?.billing_facet;
            if (i?.payment_source_id === t.paymentSourceId) {
                (h.current = d), (m.current = e);
                return;
            }
            c(r) && (await (0, o.iY)({ orderId: d, updates: t }), (h.current = d), (m.current = e));
        }
        (h.current !== d || m.current !== e) && r();
    }, [d, n, t.paymentSourceId, p]),
        (0, r.useEffect)(() => {
            let e = A.current;
            (A.current = d),
                null == d && null != e
                    ? ((g.current = !0), (h.current = null), (m.current = ""), (E.current = !1))
                    : null != d && (g.current = !1);
        }, [d]),
        (0, r.useEffect)(() => {
            if (null != d) {
                (E.current = !1), (g.current = !1);
                return;
            }
            if (g.current || !p || f || E.current || null == e || !_(t)) return;
            E.current = !0;
            let n = t.paymentGateway === u.kM.VIRTUAL_CURRENCY;
            (0, o.fS)({
                skuId: e,
                paymentSourceId: n ? void 0 : (t.paymentSourceId ?? void 0),
                paymentGateway: t.paymentGateway,
                loadId: t.loadId,
            });
        }, [d, f, e, t, p]);
}
