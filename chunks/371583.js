c.d(e, {
    j: () => o,
    r: () => n
});
var d = c(99815),
    a = c(81063),
    s = c(463031);
function n(t) {
    return t.leaderboard_id === s.z
        ? (function (t) {
              var e;
              let a = t.users[0],
                  s = null == a ? void 0 : null === (e = a.statistics[d.E.LOL_MOST_PLAYED_CHAMPION_ID]) || void 0 === e ? void 0 : e.value;
              try {
                  return null != s ? c(624119)('./champion_'.concat(s, '.jpg')).default : c(721191).Z;
              } catch {
                  return c(721191).Z;
              }
          })(t)
        : null != t.settings.splash_asset_id
          ? (0, a.getAssetImage)(t.settings.application_id, t.settings.splash_asset_id)
          : null;
}
function o(t) {
    return t.leaderboard_id === s.z
        ? (function (t) {
              var e, a;
              let s = null == t ? void 0 : null === (e = t.users) || void 0 === e ? void 0 : e[0],
                  n = null == s ? void 0 : null === (a = s.statistics[d.E.LOL_MOST_PLAYED_CHAMPION_ID]) || void 0 === a ? void 0 : a.value;
              try {
                  return null != n ? c(692425)('./champion_'.concat(n, '.jpg')).default : null;
              } catch {
                  return null;
              }
          })(t)
        : (0, a.getAssetImage)(t.settings.application_id, t.settings.winner_asset_id);
}
