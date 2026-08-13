n.d(t, { Nl: () => o, fS: () => a, iY: () => s });
var l = n(636537),
    i = n(26279),
    r = n(652215);
async function a(e) {
    let { skuId: t, paymentSourceId: n, paymentGateway: a, loadId: s, testMode: o } = e,
        u = {};
    null != n && (u.payment_source_id = n), null != a && (u.payment_gateway = a);
    let c = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: i.BM.ONE_TIME }], billing_facet: u };
    o && (c.application_facet = { test_mode: !0 });
    let d = (
        await l.Bo.post({
            url: r.Rsh.ORDER_CREATE,
            body: c,
            context: null != s && "" !== s ? { load_id: s } : void 0,
            rejectWithError: !0,
        })
    ).body;
    if (null == d || null == d.id || "" === d.id) throw Error("Invalid order response");
    return d;
}
async function s(e) {
    let { orderId: t, updates: n, expectedRevision: i } = e,
        a = {};
    "paymentSourceId" in n && (a.billing_facet = { ...a.billing_facet, payment_source_id: n.paymentSourceId }),
        "currency" in n && (a.billing_facet = { ...a.billing_facet, currency: n.currency }),
        null != i && (a.expected_revision = i);
    let s = (await l.Bo.patch({ url: r.Rsh.ORDER_UPDATE(t), body: a, rejectWithError: !0 })).body;
    if (null == s || null == s.id || "" === s.id) throw Error("Invalid order response");
    return s;
}
async function o(e) {
    let t = await l.Bo.post({ url: r.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
    if (null == t.body) throw Error("Invalid discard order response");
    return t.body;
}
