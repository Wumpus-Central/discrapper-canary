n.d(t, {
    U9: () => u,
    ZO: () => o,
    df: () => s,
    hF: () => c,
    j2: () => d,
    jM: () => m,
    l: () => h
});
var r = n(544891),
    a = n(570140),
    i = n(881052),
    l = n(981631);
async function o() {
    a.Z.wait(() => {
        a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_BALANCE_FETCH' });
    });
    try {
        let e = await r.tn.get({
                url: l.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
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
        let e = t instanceof i.HF ? t : new i.HF(t);
        a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL',
            error: e
        });
    }
}
async function s(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    a.Z.wait(() => {
        a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_START',
            skuId: e
        });
    });
    try {
        let i = (
            await r.tn.post({
                url: l.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(e),
                rejectWithError: !1
            })
        ).body;
        return (
            a.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_REDEEM_SUCCESS',
                skuId: e,
                entitlements: i
            }),
            n && o(),
            null == t || t(!0),
            i
        );
    } catch (l) {
        let r = l instanceof i.HF ? l : new i.HF(l);
        a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: e,
            error: r
        }),
            n && o(),
            null == t || t(!1);
    }
}
function c(e) {
    let { earnedOrbsQuantity: t, dedupeKey: n } = e;
    return a.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN',
        earnedOrbsQuantity: t,
        dedupeKey: n
    });
}
function d() {
    return a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE' });
}
function u() {
    return a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_OPEN' });
}
function h() {
    return a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_CLOSE' });
}
function m() {
    return a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_SKIP' });
}
