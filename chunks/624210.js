n.d(t, { Nl: () => u, fS: () => a, iY: () => s });
var l = n(636537),
    r = n(26279),
    i = n(652215);
async function a(e) {
    let { skuId: t, paymentSourceId: n, paymentGateway: a, loadId: s, testMode: u } = e,
        c = {};
    (null != n && (c.payment_source_id = n), null != a && (c.payment_gateway = a));
    let o = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: r.BM.ONE_TIME }], billing_facet: c };
    u && (o.application_facet = { test_mode: !0 });
    let d = (
        await l.Bo.post({
            url: i.Rsh.ORDER_CREATE,
            body: o,
            context: null != s && "" !== s ? { load_id: s } : void 0,
            rejectWithError: !0,
        })
    ).body;
    if (null == d || null == d.id || "" === d.id) throw Error("Invalid order response");
    return d;
}
async function s(e) {
    let { orderId: t, updates: n, expectedRevision: r } = e,
        a = {};
    ("paymentSourceId" in n && (a.billing_facet = { ...a.billing_facet, payment_source_id: n.paymentSourceId }),
        "currency" in n && (a.billing_facet = { ...a.billing_facet, currency: n.currency }),
        "applyWalletBalance" in n &&
            (a.billing_facet = { ...a.billing_facet, apply_wallet_balance: n.applyWalletBalance }),
        null != r && (a.expected_revision = r));
    let s = (await l.Bo.patch({ url: i.Rsh.ORDER_UPDATE(t), body: a, rejectWithError: !0 })).body;
    if (null == s || null == s.id || "" === s.id) throw Error("Invalid order response");
    return s;
}
async function u(e) {
    let t = await l.Bo.post({ url: i.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
    if (null == t.body) throw Error("Invalid discard order response");
    return t.body;
}
