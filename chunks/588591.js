t.d(n, { A: () => o });
var l = t(311907),
    r = t(73153);
let a = {},
    i = [];
function s() {
    a = {};
}
class d extends l.Ay.Store {
    static displayName = "GameServerRegionStore";
    getRegionStateForPingUrl(e) {
        if (null != e) return a[e];
    }
    getRegionState() {
        return a;
    }
    getRegions() {
        return i;
    }
}
let o = new d(r.h, {
    LOGOUT: s,
    GAME_SERVER_REGION_PING_STATE_UPDATE: function (e) {
        let { pingUrl: n, state: t } = e;
        a = { ...a, [n]: t };
    },
    GAME_SERVER_REGION_PING_STATE_RESET: s,
    GAME_SERVER_FETCH_REGIONS_SUCCESS: function (e) {
        let { regions: n } = e;
        i = n;
    },
});
