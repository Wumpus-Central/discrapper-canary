n.d(t, { Z: () => c });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = { lastUpdateRequested: {} };
function l(e) {
    let { lastUpdateRequested: t, leaderboardId: n } = e;
    o.lastUpdateRequested[n] = t;
}
class u extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        o = {
            ...o,
            ...(null != e ? e : {})
        };
    }
    getState() {
        return o;
    }
    getLastUpdateRequested(e) {
        return o.lastUpdateRequested[e];
    }
}
s(u, 'displayName', 'UserLeaderboardStore'), s(u, 'persistKey', 'UserLeaderboardStore');
let c = new u(a.Z, { SET_USER_LEADERBOARD_LAST_UPDATE_REQUESTED: l });
