n.d(t, { Nl: () => d, fS: () => l, iY: () => s });
var r = n(636537),
    a = n(228366),
    i = n(26279),
    o = n(652215);
async function l(e) {
    let { skuId: t, paymentSourceId: n, paymentGateway: l, loadId: s } = e;
    a.h.wait(() => {
        a.h.dispatch({ type: "ORDER_CREATE_START" });
    });
    try {
        let e = {};
        null != n && (e.payment_source_id = n), null != l && (e.payment_gateway = l);
        let d = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: i.BM.ONE_TIME }], billing_facet: e },
            u = (
                await r.Bo.post({
                    url: o.Rsh.ORDER_CREATE,
                    body: d,
                    context: null != s && "" !== s ? { load_id: s } : void 0,
                    rejectWithError: !0,
                })
            ).body;
        if (null == u || null == u.id || "" === u.id) throw Error("Invalid order response");
        return await a.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: u.id, order: u }), u;
    } catch (e) {
        throw (await a.h.dispatch({ type: "ORDER_CREATE_FAIL" }), e);
    }
}
async function s(e) {
    let { orderId: t, updates: n } = e;
    a.h.wait(() => {
        a.h.dispatch({ type: "ORDER_UPDATE_START" });
    });
    try {
        let e = {};
        "paymentSourceId" in n && (e.billing_facet = { payment_source_id: n.paymentSourceId }),
            await r.Bo.patch({ url: o.Rsh.ORDER_UPDATE(t), body: e, rejectWithError: !0 }),
            await a.h.dispatch({ type: "ORDER_UPDATE_SUCCESS", orderId: t });
    } catch (e) {
        await a.h.dispatch({ type: "ORDER_UPDATE_FAIL" });
    }
}
async function d(e) {
    try {
        let t = await r.Bo.post({ url: o.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
        if (null == t.body) throw Error("Invalid discard order response");
        return await a.h.dispatch({ type: "ORDER_DISCARD_SUCCESS", orderId: e }), t.body;
    } catch (e) {
        throw e;
    }
}
