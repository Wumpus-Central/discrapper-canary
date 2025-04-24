n.d(t, {
    KH: () => a,
    TD: () => d,
    YM: () => h,
    Z_: () => c,
    Zj: () => g,
    cn: () => u,
    jA: () => p,
    xD: () => o,
    yW: () => m
}),
    n(35282);
var i = n(544891),
    r = n(570140),
    s = n(120421),
    l = n(981631);
function a(e, t) {
    return r.Z.dispatch({
        type: 'CLICKER_GAME_ADD_POINTS',
        numPoints: t,
        itemId: e
    });
}
function o(e) {
    return r.Z.dispatch({
        type: 'CLICKER_GAME_PURCHASE_ITEM',
        id: e
    });
}
function c(e) {
    return r.Z.dispatch({
        type: 'CLICKER_GAME_PURCHASE_ITEM_UPGRADE',
        id: e
    });
}
function d(e) {
    if (!s.Z.hasUnlockedAchievement(e))
        return r.Z.dispatch({
            type: 'CLICKER_GAME_UNLOCK_ACHIEVEMENT',
            id: e
        });
}
function u(e, t) {
    return r.Z.dispatch({
        type: 'CLICKER_GAME_UPDATE_ITEM_METADATA',
        itemId: e,
        metadata: t
    });
}
function m() {
    return r.Z.dispatch({ type: 'CLICKER_GAME_RESET' });
}
function p(e) {
    return r.Z.dispatch({
        type: 'CLICKER_GAME_SET_VOLUME',
        volume: e
    });
}
function g(e) {
    return r.Z.dispatch({
        type: 'CLICKER_GAME_SET_MUTED',
        isMuted: e
    });
}
async function h(e) {
    r.Z.dispatch({ type: 'CLICKER_GAME_REDEEM_PRIZE_START' });
    try {
        await i.tn.post({
            url: l.ANM.HOLIDAY_REDEEM_PRIZE,
            body: { prize_hash: e.id.split('').reduce((e, t) => e + Number.parseInt(t), 0) },
            rejectWithError: !0
        }),
            r.Z.dispatch({ type: 'CLICKER_GAME_REDEEM_PRIZE_SUCCESS' });
    } catch (e) {
        r.Z.dispatch({ type: 'CLICKER_GAME_REDEEM_PRIZE_FAIL' });
    }
}
