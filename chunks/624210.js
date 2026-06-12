n.d(t, { Nl: () => u, fS: () => a, iY: () => s });
var l = n(636537),
    i = n(26279),
    r = n(652215);
async function a(e) {
    let { skuId: t, paymentSourceId: n, paymentGateway: a, loadId: s } = e,
        u = {};
    null != n && (u.payment_source_id = n), null != a && (u.payment_gateway = a);
    let o = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: i.BM.ONE_TIME }], billing_facet: u },
        c = (
            await l.Bo.post({
                url: r.Rsh.ORDER_CREATE,
                body: o,
                context: null != s && "" !== s ? { load_id: s } : void 0,
                rejectWithError: !0,
            })
        ).body;
    if (null == c || null == c.id || "" === c.id) throw Error("Invalid order response");
    return c;
}
async function s(e) {
    let { orderId: t, updates: n } = e,
        i = {};
    "paymentSourceId" in n && (i.billing_facet = { payment_source_id: n.paymentSourceId });
    let a = (await l.Bo.patch({ url: r.Rsh.ORDER_UPDATE(t), body: i, rejectWithError: !0 })).body;
    if (null == a || null == a.id || "" === a.id) throw Error("Invalid order response");
    return a;
}
async function u(e) {
    let t = await l.Bo.post({ url: r.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
    if (null == t.body) throw Error("Invalid discard order response");
    return t.body;
}
