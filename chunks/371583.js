n.d(t, {
    j: () => c,
    r: () => s
});
var r = n(99815),
    i = n(81063),
    a = n(463031);
function o(e) {
    var t;
    let i = e.users[0],
        a = null == i || null == (t = i.statistics[r.E.LOL_MOST_PLAYED_CHAMPION_ID]) ? void 0 : t.value;
    try {
        return null != a ? n(624119)('./champion_'.concat(a, '.jpg')).default : n(610067).Z;
    } catch (e) {
        return n(610067).Z;
    }
}
function s(e) {
    return e.leaderboard_id === a.z ? o(e) : null != e.settings.splash_asset_id ? (0, i.xF)(e.settings.application_id, e.settings.splash_asset_id) : null;
}
function l(e) {
    var t, i;
    let a = null == e || null == (t = e.users) ? void 0 : t[0],
        o = null == a || null == (i = a.statistics[r.E.LOL_MOST_PLAYED_CHAMPION_ID]) ? void 0 : i.value;
    try {
        return null != o ? n(692425)('./champion_'.concat(o, '.jpg')).default : null;
    } catch (e) {
        return null;
    }
}
function c(e) {
    return e.leaderboard_id === a.z ? l(e) : (0, i.xF)(e.settings.application_id, e.settings.winner_asset_id);
}
