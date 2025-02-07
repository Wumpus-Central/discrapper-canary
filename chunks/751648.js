n.d(t, {
    U9: () => u,
    ZO: () => o,
    df: () => s,
    hF: () => c,
    j2: () => d,
    jM: () => m,
    l: () => h
});
var a = n(544891),
    r = n(570140),
    l = n(881052),
    i = n(981631);
async function o() {
    r.Z.wait(() => {
        r.Z.dispatch({ type: 'VIRTUAL_CURRENCY_BALANCE_FETCH' });
    });
    try {
        let e = await a.tn.get({
                url: i.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
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
        let e = t instanceof l.HF ? t : new l.HF(t);
        r.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL',
            error: e
        });
    }
}
async function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    r.Z.wait(() => {
        r.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_START',
            skuId: e
        });
    });
    try {
        let n = (
            await a.tn.post({
                url: i.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(e),
                rejectWithError: !1
            })
        ).body;
        return (
            r.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_REDEEM_SUCCESS',
                skuId: e,
                entitlements: n
            }),
            t && o(),
            n
        );
    } catch (a) {
        let n = a instanceof l.HF ? a : new l.HF(a);
        r.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: e,
            error: n
        }),
            t && o();
    }
}
function c(e) {
    let { earnedOrbsQuantity: t } = e;
    return r.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN',
        earnedOrbsQuantity: t
    });
}
function d() {
    return r.Z.dispatch({ type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE' });
}
function u() {
    return r.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_OPEN' });
}
function h() {
    return r.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_CLOSE' });
}
function m() {
    return r.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_SKIP' });
}
