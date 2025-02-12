n.d(t, {
    U9: () => d,
    ZO: () => l,
    df: () => c,
    hF: () => s,
    j2: () => _,
    jM: () => f,
    l: () => u
});
var i = n(544891),
    a = n(570140),
    o = n(881052),
    r = n(981631);
async function l() {
    a.Z.wait(() => {
        a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_BALANCE_FETCH' });
    });
    try {
        let e = await i.tn.get({
                url: r.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
                rejectWithError: !1
            }),
            t = e.body.balance;
        return (
            a.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS',
                balance: t
            }),
            e.body
        );
    } catch (t) {
        let e = t instanceof o.HF ? t : new o.HF(t);
        a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL',
            error: e
        });
    }
}
async function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    a.Z.wait(() => {
        a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_START',
            skuId: e
        });
    });
    try {
        let n = (
            await i.tn.post({
                url: r.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(e),
                rejectWithError: !1
            })
        ).body;
        return (
            a.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_REDEEM_SUCCESS',
                skuId: e,
                entitlements: n
            }),
            t && l(),
            n
        );
    } catch (i) {
        let n = i instanceof o.HF ? i : new o.HF(i);
        a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: e,
            error: n
        }),
            t && l();
    }
}
function s(e) {
    let { earnedOrbsQuantity: t, dedupeKey: n } = e;
    return a.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN',
        earnedOrbsQuantity: t,
        dedupeKey: n
    });
}
function _() {
    return a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE' });
}
function d() {
    return a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_OPEN' });
}
function u() {
    return a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_CLOSE' });
}
function f() {
    return a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_SKIP' });
}
