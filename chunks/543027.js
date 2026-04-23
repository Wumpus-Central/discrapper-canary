"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(311907),
    s = n(158317),
    a = n(123633),
    o = n(624210),
    l = n(573582),
    u = n(818348);
function c(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.currentOrder),
        c = (0, i.bG)([a.A], () => a.A.currentOrderId),
        d = (0, i.bG)([a.A], () => a.A.isCreatingOrder),
        _ = l.A.useConfig({ location: "payment_modal" }).enabled,
        f = (0, r.useRef)(null),
        p = (0, r.useRef)(""),
        h = (0, r.useRef)(!1),
        E = (0, r.useRef)(!1),
        m = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        if (!_ || null == c || null == t.paymentSourceId) return;
        let e = t.paymentSourceId;
        async function r() {
            var r;
            let i = n ?? (await (0, s.r)(c)),
                a = i?.billing_facet;
            if (a?.payment_source_id === t.paymentSourceId) {
                (f.current = c), (p.current = e);
                return;
            }
            (r = i),
                r?.billing_facet?.payment_gateway !== u.kM.VIRTUAL_CURRENCY &&
                    (await (0, o.iY)({ orderId: c, updates: t }), (f.current = c), (p.current = e));
        }
        (f.current !== c || p.current !== e) && r();
    }, [c, n, t.paymentSourceId, _]),
        (0, r.useEffect)(() => {
            let e = m.current;
            (m.current = c),
                null == c && null != e
                    ? ((E.current = !0), (f.current = null), (p.current = ""), (h.current = !1))
                    : null != c && (E.current = !1);
        }, [c]),
        (0, r.useEffect)(() => {
            if (null != c) {
                (h.current = !1), (E.current = !1);
                return;
            }
            if (
                E.current ||
                !_ ||
                d ||
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
        }, [c, d, e, t, _]);
}
