n.d(t, {
    Z: () => a,
    d: () => o
});
var i = n(544891),
    s = n(570140),
    r = n(881052),
    l = n(981631);
async function a() {
    s.Z.wait(() => {
        s.Z.dispatch({ type: 'VIRTUAL_CURRENCY_BALANCE_FETCH' });
    });
    try {
        let e = await i.tn.get({
                url: l.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
                rejectWithError: !1
            }),
            t = e.body.balance;
        return (
            s.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS',
                balance: t
            }),
            e.body
        );
    } catch (t) {
        let e = t instanceof r.HF ? t : new r.HF(t);
        s.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL',
            error: e
        });
    }
}
async function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    s.Z.wait(() => {
        s.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_START',
            skuId: e
        });
    });
    try {
        let n = (
            await i.tn.post({
                url: l.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(e),
                rejectWithError: !1
            })
        ).body;
        return (
            s.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_REDEEM_SUCCESS',
                skuId: e,
                entitlements: n
            }),
            t && a(),
            n
        );
    } catch (i) {
        let n = i instanceof r.HF ? i : new r.HF(i);
        s.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: e,
            error: n
        }),
            t && a();
    }
}
