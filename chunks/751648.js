n.d(t, {
    S6: () => c,
    ZO: () => s,
    df: () => l,
    hF: () => d,
    j2: () => f,
    vp: () => u
});
var r = n(544891),
    i = n(570140),
    o = n(881052),
    a = n(981631);
async function s() {
    i.Z.wait(() => {
        i.Z.dispatch({ type: 'VIRTUAL_CURRENCY_BALANCE_FETCH' });
    });
    try {
        let e = await r.tn.get({
                url: a.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
                rejectWithError: !1
            }),
            t = e.body.balance;
        return (
            i.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS',
                balance: t
            }),
            e.body
        );
    } catch (t) {
        let e = t instanceof o.HF ? t : new o.HF(t);
        i.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL',
            error: e
        });
    }
}
async function l(e) {
    let { skuId: t, onRedeemStart: n, onRedeemSucceed: l, onRedeemFail: c, shouldRefetchBalance: u = !0 } = e;
    i.Z.wait(() => {
        i.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_START',
            skuId: t
        });
    }),
        null == n || n();
    try {
        let e = (
            await r.tn.post({
                url: a.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
                rejectWithError: !1
            })
        ).body;
        return (
            i.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_REDEEM_SUCCESS',
                skuId: t,
                entitlements: e
            }),
            u && s(),
            null == l || l(e),
            e
        );
    } catch (n) {
        let e = n instanceof o.HF ? n : new o.HF(n);
        i.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: t,
            error: e
        }),
            u && s(),
            null == c || c(e);
    }
}
function c() {
    return i.Z.dispatch({ type: 'VIRTUAL_CURRENCY_BALANCE_PILL_OVERLAY_OPEN' });
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return i.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_BALANCE_PILL_OVERLAY_CLOSE',
        hideImmediately: e
    });
}
function d(e) {
    let { earnedOrbsQuantity: t, dedupeKey: n } = e;
    return i.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN',
        earnedOrbsQuantity: t,
        dedupeKey: n
    });
}
function f() {
    return i.Z.dispatch({ type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE' });
}
