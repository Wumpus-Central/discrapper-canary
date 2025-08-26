n.d(t, {
    ZO: () => u,
    df: () => d,
    qD: () => f,
}),
    n(415506);
var r = n(544891),
    i = n(570140),
    o = n(881052),
    a = n(710845),
    s = n(960048),
    l = n(981631);
let c = new a.Z("VirtualCurrencyActionCreators");
async function u() {
    i.Z.wait(() => {
        i.Z.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await r.tn.get({
                url: l.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
                rejectWithError: !1,
            }),
            t = e.body.balance;
        return (
            i.Z.dispatch({
                type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS",
                balance: t,
            }),
            e.body
        );
    } catch (t) {
        let e = t instanceof o.HF ? t : new o.HF(t);
        i.Z.dispatch({
            type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL",
            error: e,
        });
    }
}
async function d(e) {
    let {
        skuId: t,
        loadId: n,
        onRedeemStart: a,
        onRedeemSucceed: d,
        onRedeemFail: f,
        shouldRefetchBalance: _ = !0,
    } = e;
    i.Z.wait(() => {
        i.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_START",
            skuId: t,
        });
    }),
        null == a || a();
    try {
        let e = { checkout_session_id: n },
            o = (
                await r.tn.post({
                    url: l.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
                    body: e,
                    rejectWithError: !1,
                })
            ).body;
        if (null == o || !Array.isArray(o)) {
            let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                t = Error(e, o);
            throw (c.error(e, o), s.Z.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
        }
        return (
            i.Z.dispatch({
                type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
                skuId: t,
                entitlements: o,
            }),
            _ && u(),
            null == d || d(o),
            o
        );
    } catch (n) {
        let e = n instanceof o.HF ? n : new o.HF(n);
        i.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
            skuId: t,
            error: e,
        }),
            _ && u(),
            null == f || f(e);
    }
}
function f(e) {
    return i.Z.dispatch({
        type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY",
        balancePillOverlay: e,
    });
}
