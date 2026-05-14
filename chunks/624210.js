"use strict";
n.d(t, { Nl: () => l, fS: () => a, iY: () => o });
var i = n(636537),
    r = n(26279),
    s = n(652215);
async function a(e) {
    let { skuId: t, paymentSourceId: n, paymentGateway: a, loadId: o } = e,
        l = {};
    null != n && (l.payment_source_id = n), null != a && (l.payment_gateway = a);
    let u = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: r.BM.ONE_TIME }], billing_facet: l },
        c = (
            await i.Bo.post({
                url: s.Rsh.ORDER_CREATE,
                body: u,
                context: null != o && "" !== o ? { load_id: o } : void 0,
                rejectWithError: !0,
            })
        ).body;
    if (null == c || null == c.id || "" === c.id) throw Error("Invalid order response");
    return c;
}
async function o(e) {
    let { orderId: t, updates: n } = e,
        r = {};
    "paymentSourceId" in n && (r.billing_facet = { payment_source_id: n.paymentSourceId });
    let a = (await i.Bo.patch({ url: s.Rsh.ORDER_UPDATE(t), body: r, rejectWithError: !0 })).body;
    if (null == a || null == a.id || "" === a.id) throw Error("Invalid order response");
    return a;
}
async function l(e) {
    let t = await i.Bo.post({ url: s.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
    if (null == t.body) throw Error("Invalid discard order response");
    return t.body;
}
