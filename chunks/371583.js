n.d(t, {
    j: () => u,
    r: () => o
});
var i = n(99815),
    r = n(81063),
    a = n(463031);
function s(e) {
    var t;
    let r = e.users[0],
        a = null == r ? void 0 : null === (t = r.statistics[i.E.LOL_MOST_PLAYED_CHAMPION_ID]) || void 0 === t ? void 0 : t.value;
    try {
        return null != a ? n(624119)('./champion_'.concat(a, '.jpg')).default : n(721191).Z;
    } catch {
        return n(721191).Z;
    }
}
function o(e) {
    return e.leaderboard_id === a.z ? s(e) : null != e.settings.splash_asset_id ? (0, r.getAssetImage)(e.settings.application_id, e.settings.splash_asset_id) : null;
}
function l(e) {
    var t, r;
    let a = null == e ? void 0 : null === (t = e.users) || void 0 === t ? void 0 : t[0],
        s = null == a ? void 0 : null === (r = a.statistics[i.E.LOL_MOST_PLAYED_CHAMPION_ID]) || void 0 === r ? void 0 : r.value;
    try {
        return null != s ? n(692425)('./champion_'.concat(s, '.jpg')).default : null;
    } catch {
        return null;
    }
}
function u(e) {
    return e.leaderboard_id === a.z ? l(e) : (0, r.getAssetImage)(e.settings.application_id, e.settings.winner_asset_id);
}
