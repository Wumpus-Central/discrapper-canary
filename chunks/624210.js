n.d(t, { Nl: () => s, fS: () => l, iY: () => u });
var o = n(636537),
    r = n(228366),
    a = n(26279),
    i = n(652215);
async function l(e) {
    let { skuId: t, paymentSourceId: n, paymentGateway: l, loadId: u } = e;
    r.h.wait(() => {
        r.h.dispatch({ type: "ORDER_CREATE_START" });
    });
    try {
        let e = {};
        null != n && (e.payment_source_id = n), null != l && (e.payment_gateway = l);
        let s = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: a.BM.ONE_TIME }], billing_facet: e },
            _ = (
                await o.Bo.post({
                    url: i.Rsh.ORDER_CREATE,
                    body: s,
                    context: null != u && "" !== u ? { load_id: u } : void 0,
                    rejectWithError: !0,
                })
            ).body;
        if (null == _ || null == _.id || "" === _.id) throw Error("Invalid order response");
        return await r.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: _.id, order: _ }), _;
    } catch (e) {
        throw (await r.h.dispatch({ type: "ORDER_CREATE_FAIL" }), e);
    }
}
async function u(e) {
    let { orderId: t, updates: n } = e;
    r.h.wait(() => {
        r.h.dispatch({ type: "ORDER_UPDATE_START" });
    });
    try {
        let e = {};
        "paymentSourceId" in n && (e.billing_facet = { payment_source_id: n.paymentSourceId }),
            await o.Bo.patch({ url: i.Rsh.ORDER_UPDATE(t), body: e, rejectWithError: !0 }),
            await r.h.dispatch({ type: "ORDER_UPDATE_SUCCESS", orderId: t });
    } catch (e) {
        await r.h.dispatch({ type: "ORDER_UPDATE_FAIL" });
    }
}
async function s(e) {
    try {
        let t = await o.Bo.post({ url: i.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
        if (null == t.body) throw Error("Invalid discard order response");
        return await r.h.dispatch({ type: "ORDER_DISCARD_SUCCESS", orderId: e }), t.body;
    } catch (e) {
        throw e;
    }
}
