"use strict";
n.d(t, { Nl: () => u, fS: () => o, iY: () => l });
var i = n(636537),
    r = n(228366),
    s = n(26279),
    a = n(652215);
async function o(e) {
    let { skuId: t, paymentSourceId: n, paymentGateway: o, loadId: l } = e;
    r.h.wait(() => {
        r.h.dispatch({ type: "ORDER_CREATE_START" });
    });
    try {
        let e = {};
        null != n && (e.payment_source_id = n), null != o && (e.payment_gateway = o);
        let u = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: s.BM.ONE_TIME }], billing_facet: e },
            c = (
                await i.Bo.post({
                    url: a.Rsh.ORDER_CREATE,
                    body: u,
                    context: null != l && "" !== l ? { load_id: l } : void 0,
                    rejectWithError: !0,
                })
            ).body;
        if (null == c || null == c.id || "" === c.id) throw Error("Invalid order response");
        return await r.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: c.id, order: c }), c;
    } catch (e) {
        throw (await r.h.dispatch({ type: "ORDER_CREATE_FAIL" }), e);
    }
}
async function l(e) {
    let { orderId: t, updates: n } = e;
    r.h.wait(() => {
        r.h.dispatch({ type: "ORDER_UPDATE_START" });
    });
    try {
        let e = {};
        "paymentSourceId" in n && (e.billing_facet = { payment_source_id: n.paymentSourceId }),
            await i.Bo.patch({ url: a.Rsh.ORDER_UPDATE(t), body: e, rejectWithError: !0 }),
            await r.h.dispatch({ type: "ORDER_UPDATE_SUCCESS", orderId: t });
    } catch (e) {
        await r.h.dispatch({ type: "ORDER_UPDATE_FAIL" });
    }
}
async function u(e) {
    try {
        let t = await i.Bo.post({ url: a.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
        if (null == t.body) throw Error("Invalid discard order response");
        return await r.h.dispatch({ type: "ORDER_DISCARD_SUCCESS", orderId: e }), t.body;
    } catch (e) {
        throw e;
    }
}
