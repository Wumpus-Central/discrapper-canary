n.d(t, {
    Cs: () => l,
    GP: () => c,
    J0: () => u,
    LV: () => s,
}),
    n(415506);
var r = n(544891),
    i = n(570140),
    a = n(197550),
    o = n(981631);
async function s(e) {
    let { skuId: t, paymentSourceId: n, paymentGateway: s, loadId: l } = e;
    i.Z.wait(() => {
        i.Z.dispatch({ type: "ORDER_CREATE_START" });
    });
    try {
        let e = {};
        null != n && (e.payment_source_id = n), null != s && (e.payment_gateway = s);
        let c = {
                order_line_items: [
                    {
                        sku_id: t,
                        quantity: 1,
                        purchase_type: a.bl.ONE_TIME,
                    },
                ],
                billing_facet: e,
            },
            u = (
                await r.tn.post({
                    url: o.ANM.ORDER_CREATE,
                    body: c,
                    context: null != l && "" !== l ? { load_id: l } : void 0,
                    rejectWithError: !0,
                })
            ).body;
        if (null == u || null == u.id || "" === u.id) throw Error("Invalid order response");
        return (
            await i.Z.dispatch({
                type: "ORDER_CREATE_SUCCESS",
                orderId: u.id,
                order: u,
            }),
            u
        );
    } catch (e) {
        throw (await i.Z.dispatch({ type: "ORDER_CREATE_FAIL" }), e);
    }
}
async function l(e) {
    let { orderId: t, updates: n } = e;
    i.Z.wait(() => {
        i.Z.dispatch({ type: "ORDER_UPDATE_START" });
    });
    try {
        let e = {};
        "paymentSourceId" in n && (e.billing_facet = { payment_source_id: n.paymentSourceId }),
            await r.tn.patch({
                url: o.ANM.ORDER_UPDATE(t),
                body: e,
                rejectWithError: !0,
            }),
            await i.Z.dispatch({
                type: "ORDER_UPDATE_SUCCESS",
                orderId: t,
            });
    } catch (e) {
        await i.Z.dispatch({ type: "ORDER_UPDATE_FAIL" });
    }
}
async function c(e) {
    let { orderId: t, expectedRevision: n, loadId: i } = e;
    try {
        let e = {};
        null != n && (e.expected_revision = n);
        let a = await r.tn.post({
            url: o.ANM.ORDER_SIGN(t),
            body: e,
            context: null != i && "" !== i ? { load_id: i } : void 0,
            rejectWithError: !1,
        });
        if (null == a.body) throw Error("Invalid sign order response");
        return a.body;
    } catch (e) {
        throw e;
    }
}
async function u(e) {
    try {
        let t = await r.tn.post({
            url: o.ANM.ORDER_DISCARD(e),
            rejectWithError: !1,
        });
        if (null == t.body) throw Error("Invalid discard order response");
        return (
            await i.Z.dispatch({
                type: "ORDER_DISCARD_SUCCESS",
                orderId: e,
            }),
            t.body
        );
    } catch (e) {
        throw e;
    }
}
