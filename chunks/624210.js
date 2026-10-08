n.d(t, { Nl: () => u, fS: () => s, iY: () => a });
var r = n(636537),
    l = n(26279),
    i = n(652215);
async function s(e) {
    let { skuId: t, paymentSourceId: n, paymentGateway: s, loadId: a, testMode: u } = e,
        o = {};
    (null != n && (o.payment_source_id = n), null != s && (o.payment_gateway = s));
    let c = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: l.BM.ONE_TIME }], billing_facet: o };
    u && (c.application_facet = { test_mode: !0 });
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
        s = {};
    ("paymentSourceId" in n && (s.billing_facet = { ...s.billing_facet, payment_source_id: n.paymentSourceId }),
        "currency" in n && (s.billing_facet = { ...s.billing_facet, currency: n.currency }),
        null != l && (s.expected_revision = l));
    let a = (await r.Bo.patch({ url: i.Rsh.ORDER_UPDATE(t), body: s, rejectWithError: !0 })).body;
    if (null == a || null == a.id || "" === a.id) throw Error("Invalid order response");
    return a;
}
async function u(e) {
    let t = await r.Bo.post({ url: i.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
    if (null == t.body) throw Error("Invalid discard order response");
    return t.body;
}
