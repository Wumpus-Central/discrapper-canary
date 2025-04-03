n.d(t, {
    KH: () => l,
    TD: () => d,
    YM: () => h,
    Z_: () => c,
    Zj: () => p,
    cn: () => u,
    jA: () => g,
    xD: () => o,
    yW: () => m
}),
    n(301563);
var r = n(544891),
    i = n(570140),
    s = n(120421),
    a = n(981631);
function l(e, t) {
    return i.Z.dispatch({
        type: 'CLICKER_GAME_ADD_POINTS',
        numPoints: t,
        itemId: e
    });
}
function o(e) {
    return i.Z.dispatch({
        type: 'CLICKER_GAME_PURCHASE_ITEM',
        id: e
    });
}
function c(e) {
    return i.Z.dispatch({
        type: 'CLICKER_GAME_PURCHASE_ITEM_UPGRADE',
        id: e
    });
}
function d(e) {
    if (!s.Z.hasUnlockedAchievement(e))
        return i.Z.dispatch({
            type: 'CLICKER_GAME_UNLOCK_ACHIEVEMENT',
            id: e
        });
}
function u(e, t) {
    return i.Z.dispatch({
        type: 'CLICKER_GAME_UPDATE_ITEM_METADATA',
        itemId: e,
        metadata: t
    });
}
function m() {
    return i.Z.dispatch({ type: 'CLICKER_GAME_RESET' });
}
function g(e) {
    return i.Z.dispatch({
        type: 'CLICKER_GAME_SET_VOLUME',
        volume: e
    });
}
function p(e) {
    return i.Z.dispatch({
        type: 'CLICKER_GAME_SET_MUTED',
        isMuted: e
    });
}
async function h(e) {
    i.Z.dispatch({ type: 'CLICKER_GAME_REDEEM_PRIZE_START' });
    try {
        await r.tn.post({
            url: a.ANM.HOLIDAY_REDEEM_PRIZE,
            body: { prize_hash: e.id.split('').reduce((e, t) => e + Number.parseInt(t), 0) },
            rejectWithError: !0
        }),
            i.Z.dispatch({ type: 'CLICKER_GAME_REDEEM_PRIZE_SUCCESS' });
    } catch (e) {
        i.Z.dispatch({ type: 'CLICKER_GAME_REDEEM_PRIZE_FAIL' });
    }
}
