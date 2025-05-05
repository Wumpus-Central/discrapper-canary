n.d(t, { Z: () => d });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
let l = { lastUpdateRequested: {} };
function c(e) {
    let { lastUpdateRequested: t, leaderboardId: n } = e;
    l.lastUpdateRequested[n] = t;
}
class u extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        l = s({}, l, null != e ? e : {});
    }
    getState() {
        return l;
    }
    getLastUpdateRequested(e) {
        return l.lastUpdateRequested[e];
    }
}
o(u, 'displayName', 'UserLeaderboardStore'), o(u, 'persistKey', 'UserLeaderboardStore');
let d = new u(a.Z, { SET_USER_LEADERBOARD_LAST_UPDATE_REQUESTED: c });
