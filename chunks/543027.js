"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(311907),
    a = n(224771),
    s = n(624210),
    o = n(573582),
    l = n(224949),
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
    let n = (0, i.bG)([l.A], () => l.A.currentOrder),
        d = (0, i.bG)([l.A], () => l.A.currentOrderId),
        f = (0, i.bG)([l.A], () => l.A.isCreatingOrder),
        p = o.A.useExperiment({ location: "payment_modal" }).enabled,
        h = (0, r.useRef)(null),
        m = (0, r.useRef)(""),
        g = (0, r.useRef)(!1),
        E = (0, r.useRef)(!1),
        A = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        if (!p || null == d || null == t.paymentSourceId) return;
        let e = t.paymentSourceId;
        async function r() {
            let r = n ?? (await (0, a.r$)(d)),
                i = r?.billing_facet;
            if (i?.payment_source_id === t.paymentSourceId) {
                (h.current = d), (m.current = e);
                return;
            }
            c(r) && (await (0, s.iY)({ orderId: d, updates: t }), (h.current = d), (m.current = e));
        }
        (h.current !== d || m.current !== e) && r();
    }, [d, n, t.paymentSourceId, p]),
        (0, r.useEffect)(() => {
            let e = A.current;
            (A.current = d),
                null == d && null != e
                    ? ((E.current = !0), (h.current = null), (m.current = ""), (g.current = !1))
                    : null != d && (E.current = !1);
        }, [d]),
        (0, r.useEffect)(() => {
            if (null != d) {
                (g.current = !1), (E.current = !1);
                return;
            }
            if (E.current || !p || f || g.current || null == e || !_(t)) return;
            g.current = !0;
            let n = t.paymentGateway === u.kM.VIRTUAL_CURRENCY;
            (0, s.fS)({
                skuId: e,
                paymentSourceId: n ? void 0 : (t.paymentSourceId ?? void 0),
                paymentGateway: t.paymentGateway,
                loadId: t.loadId,
            });
        }, [d, f, e, t, p]);
}
