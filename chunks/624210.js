var l = n(620632),
    r = n(26279),
    i = n(652215);
n.d(
    t,
    {},
    {
        Nl: async function (e) {
            let t = await l.Bo.post({ url: i.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
            if (null == t.body) throw Error("Invalid discard order response");
            return t.body;
        },
        fS: async function (e) {
            let { skuId: t, paymentSourceId: n, paymentGateway: a, loadId: s, testMode: u, promotionIdOverride: c } = e,
                o = {};
            (null != n && (o.payment_source_id = n), null != a && (o.payment_gateway = a));
            let d = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: r.BM.ONE_TIME }], billing_facet: o };
            (u && (d.application_facet = { test_mode: !0 }),
                null != c && (d.promotions_facet = { promotion_id_override: c }));
            let h = (
                await l.Bo.post({
                    url: i.Rsh.ORDER_CREATE,
                    body: d,
                    context: null != s && "" !== s ? { load_id: s } : void 0,
                    rejectWithError: !0,
                })
            ).body;
            if (null == h || null == h.id || "" === h.id) throw Error("Invalid order response");
            return h;
        },
        iY: async function (e) {
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
        },
    },
);
