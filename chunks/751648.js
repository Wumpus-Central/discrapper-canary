n.d(t, {
    ZO: () => d,
    df: () => u,
    qD: () => m,
}),
    n(415506);
var a = n(544891),
    r = n(570140),
    i = n(881052),
    s = n(710845),
    o = n(960048),
    l = n(981631);
let c = new s.Z("VirtualCurrencyActionCreators");
async function d() {
    r.Z.wait(() => {
        r.Z.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await a.tn.get({
                url: l.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
                rejectWithError: !1,
            }),
            t = e.body.balance;
        return (
            r.Z.dispatch({
                type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS",
                balance: t,
            }),
            e.body
        );
    } catch (t) {
        let e = t instanceof i.HF ? t : new i.HF(t);
        r.Z.dispatch({
            type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL",
            error: e,
        });
    }
}
async function u(e) {
    let {
        skuId: t,
        loadId: n,
        onRedeemStart: s,
        onRedeemSucceed: u,
        onRedeemFail: m,
        shouldRefetchBalance: p = !0,
    } = e;
    r.Z.wait(() => {
        r.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_START",
            skuId: t,
        });
    }),
        null == s || s();
    try {
        let e = (
            await a.tn.post({
                url: l.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
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
            r.Z.dispatch({
                type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
                skuId: t,
                entitlements: e,
            }),
            p && d(),
            null == u || u(e),
            e
        );
    } catch (n) {
        let e = n instanceof i.HF ? n : new i.HF(n);
        r.Z.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
            skuId: t,
            error: e,
        }),
            p && d(),
            null == m || m(e);
    }
}
function m(e) {
    return r.Z.dispatch({
        type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY",
        balancePillOverlay: e,
    });
}
