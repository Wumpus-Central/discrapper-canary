n.d(t, {
    Z: function () {
        return l;
    },
    d: function () {
        return o;
    }
});
var i = n(544891),
    r = n(570140),
    s = n(881052),
    a = n(981631);
async function l() {
    r.Z.wait(() => {
        r.Z.dispatch({ type: 'VIRTUAL_CURRENCY_BALANCE_FETCH' });
    });
    try {
        let e = await i.tn.get({
                url: a.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
                rejectWithError: !1
            }),
            t = e.body.balance;
        return (
            r.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS',
                balance: t
            }),
            e.body
        );
    } catch (t) {
        let e = t instanceof s.HF ? t : new s.HF(t);
        r.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL',
            error: e
        });
    }
}
async function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    r.Z.wait(() => {
        r.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_START',
            skuId: e
        });
    });
    try {
        let n = (
            await i.tn.post({
                url: a.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(e),
                rejectWithError: !1
            })
        ).body;
        return (
            r.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_REDEEM_SUCCESS',
                skuId: e,
                entitlements: n
            }),
            t && l(),
            n
        );
    } catch (i) {
        let n = i instanceof s.HF ? i : new s.HF(i);
        r.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: e,
            error: n
        }),
            t && l();
    }
}
