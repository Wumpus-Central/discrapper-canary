n.d(t, {
    ZO: () => u,
    df: () => d,
    qD: () => p,
}),
    n(415506);
var r = n(544891),
    l = n(570140),
    a = n(881052),
    i = n(710845),
    o = n(960048),
    s = n(981631);
let c = new i.Z("VirtualCurrencyActionCreators");
async function u() {
    l.Z.wait(() => {
        l.Z.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await r.tn.get({
                url: s.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
                rejectWithError: !1,
            }),
            t = e.body.balance;
        return (
            l.Z.dispatch({
                type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS",
                balance: t,
            }),
            e.body
        );
    } catch (t) {
        let e = t instanceof a.HF ? t : new a.HF(t);
        l.Z.dispatch({
            type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL",
            error: e,
        });
    }
}
async function d(e) {
    let {
        skuId: t,
        loadId: n,
        onRedeemStart: i,
        onRedeemSucceed: d,
        onRedeemFail: p,
        shouldRefetchBalance: f = !0,
    } = e;
    l.Z.wait(() => {
        l.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_START",
            skuId: t,
        });
    }),
        null == i || i();
    try {
        let e = (
            await r.tn.post({
                url: s.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
                body: { checkout_session_id: n },
                rejectWithError: !1,
            })
        ).body;
        if (null == e || !Array.isArray(e)) {
            let t = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                n = Error(t, e);
            throw (c.error(t, e), o.Z.captureException(n, { tags: { app_context: "virtual_currency" } }), n);
        }
        return (
            l.Z.dispatch({
                type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
                skuId: t,
                entitlements: e,
            }),
            f && u(),
            null == d || d(e),
            e
        );
    } catch (n) {
        let e = n instanceof a.HF ? n : new a.HF(n);
        l.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
            skuId: t,
            error: e,
        }),
            f && u(),
            null == p || p(e);
    }
}
function p(e) {
    return l.Z.dispatch({
        type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY",
        balancePillOverlay: e,
    });
}
