var l = n(620632),
    r = n(927813),
    i = n(158317),
    a = n(26279),
    s = n(652215);
let u = 15 * r.A.Millis.SECOND;
class c extends Error {
    name = "OrderCreateTimeout";
    constructor() {
        super(`Order creation took longer than ${u}ms`);
    }
}
n.d(
    t,
    {},
    {
        Nl: async function (e) {
            let t = await l.Bo.post({ url: s.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
            if (null == t.body) throw Error("Invalid discard order response");
            return t.body;
        },
        fS: async function (e) {
            let t,
                { skuId: n, paymentSourceId: r, paymentGateway: o, loadId: d, testMode: h, promotionIdOverride: p } = e,
                f = {};
            (null != r && (f.payment_source_id = r), null != o && (f.payment_gateway = o));
            let m = { order_line_items: [{ sku_id: n, quantity: 1, purchase_type: a.BM.ONE_TIME }], billing_facet: f };
            (h && (m.application_facet = { test_mode: !0 }),
                null != p && (m.promotions_facet = { promotion_id_override: p }));
            try {
                t = await l.Bo.post({
                    url: s.Rsh.ORDER_CREATE,
                    body: m,
                    context: null != d && "" !== d ? { load_id: d } : void 0,
                    timeout: u,
                    rejectWithError: !0,
                });
            } catch (e) {
                throw e instanceof Error && "timeout" in e ? new c() : e;
            }
            let C = t.body;
            if (null == C || null == C.id || "" === C.id) throw new i.LG();
            return C;
        },
        iY: async function (e) {
            let { orderId: t, updates: n, expectedRevision: r } = e,
                a = {};
            ("paymentSourceId" in n && (a.billing_facet = { ...a.billing_facet, payment_source_id: n.paymentSourceId }),
                "currency" in n && (a.billing_facet = { ...a.billing_facet, currency: n.currency }),
                "applyWalletBalance" in n &&
                    (a.billing_facet = { ...a.billing_facet, apply_wallet_balance: n.applyWalletBalance }),
                null != r && (a.expected_revision = r));
            let u = (await l.Bo.patch({ url: s.Rsh.ORDER_UPDATE(t), body: a, rejectWithError: !0 })).body;
            if (null == u || null == u.id || "" === u.id) throw new i.LG();
            return u;
        },
    },
);
