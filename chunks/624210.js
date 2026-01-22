n.d(t, {
    Nl: () => u,
    Ub: () => c,
    fS: () => o,
    iY: () => l,
}),
    n(65821);
var r = n(562465),
    i = n(73153),
    a = n(224771),
    s = n(652215);
async function o(e) {
    let { skuId: t, paymentSourceId: n, paymentGateway: o, loadId: l } = e;
    i.h.wait(() => {
        i.h.dispatch({ type: "ORDER_CREATE_START" });
    });
    try {
        let e = {};
        null != n && (e.payment_source_id = n), null != o && (e.payment_gateway = o);
        let c = {
                order_line_items: [
                    {
                        sku_id: t,
                        quantity: 1,
                        purchase_type: a.BM.ONE_TIME,
                    },
                ],
                billing_facet: e,
            },
            u = (
                await r.Bo.post({
                    url: s.Rsh.ORDER_CREATE,
                    body: c,
                    context: null != l && "" !== l ? { load_id: l } : void 0,
                    rejectWithError: !0,
                })
            ).body;
        if (null == u || null == u.id || "" === u.id) throw Error("Invalid order response");
        return (
            await i.h.dispatch({
                type: "ORDER_CREATE_SUCCESS",
                orderId: u.id,
                order: u,
            }),
            u
        );
    } catch (e) {
        throw (await i.h.dispatch({ type: "ORDER_CREATE_FAIL" }), e);
    }
}
async function l(e) {
    let { orderId: t, updates: n } = e;
    i.h.wait(() => {
        i.h.dispatch({ type: "ORDER_UPDATE_START" });
    });
    try {
        let e = {};
        "paymentSourceId" in n && (e.billing_facet = { payment_source_id: n.paymentSourceId }),
            await r.Bo.patch({
                url: s.Rsh.ORDER_UPDATE(t),
                body: e,
                rejectWithError: !0,
            }),
            await i.h.dispatch({
                type: "ORDER_UPDATE_SUCCESS",
                orderId: t,
            });
    } catch (e) {
        await i.h.dispatch({ type: "ORDER_UPDATE_FAIL" });
    }
}
async function c(e) {
    let { orderId: t, expectedRevision: n, loadId: i } = e;
    try {
        let e = {};
        null != n && (e.expected_revision = n);
        let a = await r.Bo.post({
            url: s.Rsh.ORDER_SIGN(t),
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
        let t = await r.Bo.post({
            url: s.Rsh.ORDER_DISCARD(e),
            rejectWithError: !1,
        });
        if (null == t.body) throw Error("Invalid discard order response");
        return (
            await i.h.dispatch({
                type: "ORDER_DISCARD_SUCCESS",
                orderId: e,
            }),
            t.body
        );
    } catch (e) {
        throw e;
    }
}
