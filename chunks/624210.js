n.d(t, { Nl: () => s, fS: () => o, iY: () => a });
var r = n(636537),
    l = n(26279),
    i = n(652215);
async function o(e) {
    let { skuId: t, paymentSourceId: n, paymentGateway: o, loadId: a, testMode: s } = e,
        u = {};
    null != n && (u.payment_source_id = n), null != o && (u.payment_gateway = o);
    let c = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: l.BM.ONE_TIME }], billing_facet: u };
    s && (c.application_facet = { test_mode: !0 });
    let d = (
        await r.Bo.post({
            url: i.Rsh.ORDER_CREATE,
            body: c,
            context: null != a && "" !== a ? { load_id: a } : void 0,
            rejectWithError: !0,
        })
    ).body;
    if (null == d || null == d.id || "" === d.id) throw Error("Invalid order response");
    return d;
}
async function a(e) {
    let { orderId: t, updates: n, expectedRevision: l } = e,
        o = {};
    "paymentSourceId" in n && (o.billing_facet = { payment_source_id: n.paymentSourceId }),
        null != l && (o.expected_revision = l);
    let a = (await r.Bo.patch({ url: i.Rsh.ORDER_UPDATE(t), body: o, rejectWithError: !0 })).body;
    if (null == a || null == a.id || "" === a.id) throw Error("Invalid order response");
    return a;
}
async function s(e) {
    let t = await r.Bo.post({ url: i.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
    if (null == t.body) throw Error("Invalid discard order response");
    return t.body;
}
