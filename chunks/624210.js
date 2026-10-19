n.d(t, { Nl: () => u, fS: () => s, iY: () => a });
var l = n(636537),
    r = n(26279),
    i = n(652215);
async function s(e) {
    let { skuId: t, paymentSourceId: n, paymentGateway: s, loadId: a, testMode: u } = e,
        c = {};
    (null != n && (c.payment_source_id = n), null != s && (c.payment_gateway = s));
    let o = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: r.BM.ONE_TIME }], billing_facet: c };
    u && (o.application_facet = { test_mode: !0 });
    let d = (
        await l.Bo.post({
            url: i.Rsh.ORDER_CREATE,
            body: o,
            context: null != a && "" !== a ? { load_id: a } : void 0,
            rejectWithError: !0,
        })
    ).body;
    if (null == d || null == d.id || "" === d.id) throw Error("Invalid order response");
    return d;
}
async function a(e) {
    let { orderId: t, updates: n, expectedRevision: r } = e,
        s = {};
    ("paymentSourceId" in n && (s.billing_facet = { ...s.billing_facet, payment_source_id: n.paymentSourceId }),
        "currency" in n && (s.billing_facet = { ...s.billing_facet, currency: n.currency }),
        null != r && (s.expected_revision = r));
    let a = (await l.Bo.patch({ url: i.Rsh.ORDER_UPDATE(t), body: s, rejectWithError: !0 })).body;
    if (null == a || null == a.id || "" === a.id) throw Error("Invalid order response");
    return a;
}
async function u(e) {
    let t = await l.Bo.post({ url: i.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
    if (null == t.body) throw Error("Invalid discard order response");
    return t.body;
}
