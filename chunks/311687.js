a.d(e, { Z: () => o });
var c,
    d = a(442837),
    s = a(570140);
function n(t, e, a) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = a),
        t
    );
}
let f = { lastUpdateRequested: {} };
class i extends (c = d.ZP.PersistedStore) {
    initialize(t) {
        f = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {},
                    c = Object.keys(a);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (c = c.concat(
                        Object.getOwnPropertySymbols(a).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(a, t).enumerable;
                        })
                    )),
                    c.forEach(function (e) {
                        n(t, e, a[e]);
                    });
            }
            return t;
        })({}, f, null != t ? t : {});
    }
    getState() {
        return f;
    }
    getLastUpdateRequested(t) {
        return f.lastUpdateRequested[t];
    }
}
n(i, 'displayName', 'UserLeaderboardStore'), n(i, 'persistKey', 'UserLeaderboardStore');
let o = new i(s.Z, {
    SET_USER_LEADERBOARD_LAST_UPDATE_REQUESTED: function (t) {
        let { lastUpdateRequested: e, leaderboardId: a } = t;
        f.lastUpdateRequested[a] = e;
    }
});
