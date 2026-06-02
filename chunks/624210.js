r.d(t, { Nl: () => s, fS: () => i, iY: () => u });
var n = r(636537),
    a = r(26279),
    l = r(652215);
async function i(e) {
    let { skuId: t, paymentSourceId: r, paymentGateway: i, loadId: u } = e,
        s = {};
    null != r && (s.payment_source_id = r), null != i && (s.payment_gateway = i);
    let o = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: a.BM.ONE_TIME }], billing_facet: s },
        c = (
            await n.Bo.post({
                url: l.Rsh.ORDER_CREATE,
                body: o,
                context: null != u && "" !== u ? { load_id: u } : void 0,
                rejectWithError: !0,
            })
        ).body;
    if (null == c || null == c.id || "" === c.id) throw Error("Invalid order response");
    return c;
}
async function u(e) {
    let { orderId: t, updates: r } = e,
        a = {};
    "paymentSourceId" in r && (a.billing_facet = { payment_source_id: r.paymentSourceId });
    let i = (await n.Bo.patch({ url: l.Rsh.ORDER_UPDATE(t), body: a, rejectWithError: !0 })).body;
    if (null == i || null == i.id || "" === i.id) throw Error("Invalid order response");
    return i;
}
async function s(e) {
    let t = await n.Bo.post({ url: l.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
    if (null == t.body) throw Error("Invalid discard order response");
    return t.body;
}
