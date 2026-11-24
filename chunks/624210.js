var l = n(620632),
    r = n(158317),
    i = n(26279),
    a = n(652215);
n.d(
    t,
    {},
    {
        Nl: async function (e) {
            let t = await l.Bo.post({ url: a.Rsh.ORDER_DISCARD(e), rejectWithError: !1 });
            if (null == t.body) throw Error("Invalid discard order response");
            return t.body;
        },
        fS: async function (e) {
            let { skuId: t, paymentSourceId: n, paymentGateway: s, loadId: u, testMode: c, promotionIdOverride: o } = e,
                d = {};
            (null != n && (d.payment_source_id = n), null != s && (d.payment_gateway = s));
            let h = { order_line_items: [{ sku_id: t, quantity: 1, purchase_type: i.BM.ONE_TIME }], billing_facet: d };
            (c && (h.application_facet = { test_mode: !0 }),
                null != o && (h.promotions_facet = { promotion_id_override: o }));
            let p = (
                await l.Bo.post({
                    url: a.Rsh.ORDER_CREATE,
                    body: h,
                    context: null != u && "" !== u ? { load_id: u } : void 0,
                    rejectWithError: !0,
                })
            ).body;
            if (null == p || null == p.id || "" === p.id) throw new r.LG();
            return p;
        },
        iY: async function (e) {
            let { orderId: t, updates: n, expectedRevision: i } = e,
                s = {};
            ("paymentSourceId" in n && (s.billing_facet = { ...s.billing_facet, payment_source_id: n.paymentSourceId }),
                "currency" in n && (s.billing_facet = { ...s.billing_facet, currency: n.currency }),
                "applyWalletBalance" in n &&
                    (s.billing_facet = { ...s.billing_facet, apply_wallet_balance: n.applyWalletBalance }),
                null != i && (s.expected_revision = i));
            let u = (await l.Bo.patch({ url: a.Rsh.ORDER_UPDATE(t), body: s, rejectWithError: !0 })).body;
            if (null == u || null == u.id || "" === u.id) throw new r.LG();
            return u;
        },
    },
);
