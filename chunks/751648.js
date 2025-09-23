r.d(t, {
    ZO: () => u,
    df: () => d,
    qD: () => p,
}),
    r(415506);
var n = r(544891),
    l = r(570140),
    i = r(881052),
    a = r(710845),
    o = r(960048),
    s = r(981631);
let c = new a.Z("VirtualCurrencyActionCreators");
async function u() {
    l.Z.wait(() => {
        l.Z.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await n.tn.get({
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
        let e = t instanceof i.HF ? t : new i.HF(t);
        l.Z.dispatch({
            type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL",
            error: e,
        });
    }
}
async function d(e) {
    let {
        skuId: t,
        loadId: r,
        onRedeemStart: a,
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
        null == a || a();
    try {
        let e = (
            await n.tn.post({
                url: s.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
                body: { checkout_session_id: r },
                rejectWithError: !1,
            })
        ).body;
        if (null == e || !Array.isArray(e)) {
            let t = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                r = Error(t, e);
            throw (c.error(t, e), o.Z.captureException(r, { tags: { app_context: "virtual_currency" } }), r);
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
    } catch (r) {
        let e = r instanceof i.HF ? r : new i.HF(r);
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
