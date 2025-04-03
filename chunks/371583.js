a.d(e, {
    j: () => f,
    r: () => n
});
var c = a(99815),
    d = a(81063),
    s = a(463031);
function n(t) {
    if (t.leaderboard_id === s.z) {
        var e;
        let d = t.users[0],
            s = null == d || null == (e = d.statistics[c.E.LOL_MOST_PLAYED_CHAMPION_ID]) ? void 0 : e.value;
        try {
            return null != s ? a(624119)('./champion_'.concat(s, '.jpg')).default : a(721191).Z;
        } catch (t) {
            return a(721191).Z;
        }
    }
    return null != t.settings.splash_asset_id ? (0, d.xF)(t.settings.application_id, t.settings.splash_asset_id) : null;
}
function f(t) {
    if (t.leaderboard_id === s.z) {
        var e, n;
        let d = null == t || null == (e = t.users) ? void 0 : e[0],
            s = null == d || null == (n = d.statistics[c.E.LOL_MOST_PLAYED_CHAMPION_ID]) ? void 0 : n.value;
        try {
            return null != s ? a(692425)('./champion_'.concat(s, '.jpg')).default : null;
        } catch (t) {
            return null;
        }
    }
    return (0, d.xF)(t.settings.application_id, t.settings.winner_asset_id);
}
