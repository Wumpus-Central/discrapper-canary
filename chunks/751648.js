n.d(t, {
    ZO: () => o,
    df: () => a,
    hF: () => c,
    j2: () => d
});
var i = n(544891),
    l = n(570140),
    r = n(881052),
    s = n(981631);
async function o() {
    l.Z.wait(() => {
        l.Z.dispatch({ type: 'VIRTUAL_CURRENCY_BALANCE_FETCH' });
    });
    try {
        let e = await i.tn.get({
                url: s.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
                rejectWithError: !1
            }),
            t = e.body.balance;
        return (
            l.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS',
                balance: t
            }),
            e.body
        );
    } catch (t) {
        let e = t instanceof r.HF ? t : new r.HF(t);
        l.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL',
            error: e
        });
    }
}
async function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    l.Z.wait(() => {
        l.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_START',
            skuId: e
        });
    });
    try {
        let n = (
            await i.tn.post({
                url: s.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(e),
                rejectWithError: !1
            })
        ).body;
        return (
            l.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_REDEEM_SUCCESS',
                skuId: e,
                entitlements: n
            }),
            t && o(),
            n
        );
    } catch (i) {
        let n = i instanceof r.HF ? i : new r.HF(i);
        l.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: e,
            error: n
        }),
            t && o();
    }
}
function c(e) {
    let { earnedOrbsQuantity: t } = e;
    return l.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN',
        earnedOrbsQuantity: t
    });
}
function d() {
    return l.Z.dispatch({ type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE' });
}
