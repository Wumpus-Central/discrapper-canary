n.d(t, {
    U9: () => d,
    ZO: () => s,
    df: () => a,
    hF: () => c,
    j2: () => u,
    jM: () => E,
    l: () => _
});
var r = n(544891),
    i = n(570140),
    l = n(881052),
    o = n(981631);
async function s() {
    i.Z.wait(() => {
        i.Z.dispatch({ type: 'VIRTUAL_CURRENCY_BALANCE_FETCH' });
    });
    try {
        let e = await r.tn.get({
                url: o.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
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
        let e = t instanceof l.HF ? t : new l.HF(t);
        i.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL',
            error: e
        });
    }
}
async function a(e) {
    let { skuId: t, onRedeemStart: n, onRedeemSucceed: a, onRedeemFail: c, shouldRefetchBalance: u = !0 } = e;
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
                url: o.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
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
            null == a || a(e),
            e
        );
    } catch (n) {
        let e = n instanceof l.HF ? n : new l.HF(n);
        i.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: t,
            error: e
        }),
            u && s(),
            null == c || c(e);
    }
}
function c(e) {
    let { earnedOrbsQuantity: t, dedupeKey: n } = e;
    return i.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN',
        earnedOrbsQuantity: t,
        dedupeKey: n
    });
}
function u() {
    return i.Z.dispatch({ type: 'VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE' });
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return i.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_OPEN',
        onboardingCoachmarkTypes: e
    });
}
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return i.Z.dispatch({
        type: 'VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_CLOSE',
        onboardingCoachmarkTypes: e
    });
}
function E() {
    return i.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_SKIP' });
}
