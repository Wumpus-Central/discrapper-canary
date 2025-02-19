c.d(e, { Z: () => p });
var d,
    a = c(442837),
    s = c(570140);
function n(t, e, c) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: c,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = c),
        t
    );
}
let o = { lastUpdateRequested: {} };
class f extends (d = a.ZP.PersistedStore) {
    initialize(t) {
        o = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var c = null != arguments[e] ? arguments[e] : {},
                    d = Object.keys(c);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (d = d.concat(
                        Object.getOwnPropertySymbols(c).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(c, t).enumerable;
                        })
                    )),
                    d.forEach(function (e) {
                        n(t, e, c[e]);
                    });
            }
            return t;
        })({}, o, null != t ? t : {});
    }
    getState() {
        return o;
    }
    getLastUpdateRequested(t) {
        return o.lastUpdateRequested[t];
    }
}
n(f, 'displayName', 'UserLeaderboardStore'), n(f, 'persistKey', 'UserLeaderboardStore');
let p = new f(s.Z, {
    SET_USER_LEADERBOARD_LAST_UPDATE_REQUESTED: function (t) {
        let { lastUpdateRequested: e, leaderboardId: c } = t;
        o.lastUpdateRequested[c] = e;
    }
});
