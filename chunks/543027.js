"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(311907),
    s = n(158317),
    a = n(123633),
    o = n(624210),
    l = n(573582),
    u = n(818348);
function d(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.currentOrder),
        d = (0, i.bG)([a.A], () => a.A.currentOrderId),
        c = (0, i.bG)([a.A], () => a.A.isCreatingOrder),
        _ = l.A.useConfig({ location: "payment_modal" }).enabled,
        f = (0, r.useRef)(null),
        E = (0, r.useRef)(""),
        h = (0, r.useRef)(!1),
        p = (0, r.useRef)(!1),
        m = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        if (!_ || null == d || null == t.paymentSourceId) return;
        let e = t.paymentSourceId;
        async function r() {
            var r;
            let i = n ?? (await (0, s.r)(d)),
                a = i?.billing_facet;
            if (a?.payment_source_id === t.paymentSourceId) {
                (f.current = d), (E.current = e);
                return;
            }
            (r = i),
                r?.billing_facet?.payment_gateway !== u.kM.VIRTUAL_CURRENCY &&
                    (await (0, o.iY)({ orderId: d, updates: t }), (f.current = d), (E.current = e));
        }
        (f.current !== d || E.current !== e) && r();
    }, [d, n, t.paymentSourceId, _]),
        (0, r.useEffect)(() => {
            let e = m.current;
            (m.current = d),
                null == d && null != e
                    ? ((p.current = !0), (f.current = null), (E.current = ""), (h.current = !1))
                    : null != d && (p.current = !1);
        }, [d]),
        (0, r.useEffect)(() => {
            if (null != d) {
                (h.current = !1), (p.current = !1);
                return;
            }
            if (
                p.current ||
                !_ ||
                c ||
                h.current ||
                null == e ||
                (null == t.paymentSourceId && null == t.paymentGateway)
            )
                return;
            h.current = !0;
            let n = t.paymentGateway === u.kM.VIRTUAL_CURRENCY;
            (0, o.fS)({
                skuId: e,
                paymentSourceId: n ? void 0 : (t.paymentSourceId ?? void 0),
                paymentGateway: t.paymentGateway,
                loadId: t.loadId,
            });
        }, [d, c, e, t, _]);
}
