n.d(t, {
    C: () => s,
    L: () => o,
});
var r = n(544891),
    i = n(570140),
    a = n(981631);
async function o(e) {
    let { skuId: t, paymentSourceId: n } = e;
    i.Z.wait(() => {
        i.Z.dispatch({ type: "ORDER_CREATE_START" });
    });
    try {
        let e = {
                order_line_items: [
                    {
                        sku_id: t,
                        quantity: 1,
                        purchase_type: 0,
                    },
                ],
                billing_facet: { payment_source_id: n },
            },
            o = (
                await r.tn.post({
                    url: a.ANM.ORDER_CREATE,
                    body: e,
                    rejectWithError: !0,
                })
            ).body.id;
        await i.Z.dispatch({
            type: "ORDER_CREATE_SUCCESS",
            orderId: o,
        });
    } catch (e) {
        await i.Z.dispatch({ type: "ORDER_CREATE_FAIL" });
    }
}
async function s(e) {
    let {
        orderId: t,
        updates: { paymentSourceId: n },
    } = e;
    i.Z.wait(() => {
        i.Z.dispatch({ type: "ORDER_UPDATE_START" });
    });
    try {
        let e = { billing_facet: { payment_source_id: n } };
        await r.tn.patch({
            url: a.ANM.ORDER_UPDATE(t),
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
