"use strict";
n.d(t, { U: () => l, r: () => u });
var r = n(562465),
    i = n(626584),
    s = n(739508),
    a = n(652215);
let o = new i.A("OrderActionCreators");
async function l(e) {
    let { orderId: t, expectedRevision: n, loadId: i } = e;
    try {
        let e = {};
        null != n && (e.expected_revision = n);
        let s = await r.Bo.post({
            url: a.Rsh.ORDER_SIGN(t),
            body: e,
            context: null != i && "" !== i ? { load_id: i } : void 0,
            rejectWithError: !1,
        });
        if (null == s.body) throw Error("Invalid sign order response");
        return s.body;
    } catch (e) {
        throw e;
    }
}
async function u(e) {
    try {
        return (await r.Bo.get({ url: a.Rsh.ORDER_GET(e), rejectWithError: !0 })).body || null;
    } catch (t) {
        return (
            o.error("failed to fetch order", { error: t, orderId: e }),
            (0, s.pM)(t, { tags: { source: "OrderActionCreators_getOrder" }, extra: { orderId: e } }),
            null
        );
    }
}
