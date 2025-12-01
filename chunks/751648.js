n.d(t, {
    ZO: () => u,
    df: () => d,
}),
    n(415506);
var r = n(544891),
    i = n(570140),
    a = n(881052),
    o = n(710845),
    s = n(960048),
    l = n(981631);
let c = new o.Z("VirtualCurrencyActionCreators");
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
        let e = t instanceof a.HF ? t : new a.HF(t);
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
        onRedeemStart: o,
        onRedeemSucceed: d,
        onRedeemFail: f,
        shouldRefetchBalance: p = !0,
        isRental: _ = !1,
    } = e;
    i.Z.wait(() => {
        i.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_START",
            skuId: t,
        });
    }),
        null == o || o();
    try {
        let e = {
                checkout_session_id: n,
                is_rental: _,
            },
            a = (
                await r.tn.post({
                    url: l.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
                    body: e,
                    rejectWithError: !1,
                })
            ).body;
        if (null == a || !Array.isArray(a)) {
            let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                t = Error(e, a);
            throw (c.error(e, a), s.Z.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
        }
        return (
            i.Z.dispatch({
                type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
                skuId: t,
                entitlements: a,
            }),
            p && u(),
            null == d || d(a),
            a
        );
    } catch (n) {
        let e = n instanceof a.HF ? n : new a.HF(n);
        i.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
            skuId: t,
            error: e,
        }),
            p && u(),
            null == f || f(e);
    }
}
