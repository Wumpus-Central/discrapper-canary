n.d(t, { A: () => c });
var l = n(311907),
    r = n(73153);
let i = {},
    s = [];
function a() {
    i = {};
}
class d extends l.Ay.Store {
    static displayName = "GameServerRegionStore";
    getRegionStateForPingUrl(e) {
        if (null != e) return i[e];
    }
    getRegionState() {
        return i;
    }
    getRegions() {
        return s;
    }
}
let c = new d(r.h, {
    LOGOUT: a,
    GAME_SERVER_REGION_PING_STATE_UPDATE: function (e) {
        let { pingUrl: t, state: n } = e;
        i = { ...i, [t]: n };
    },
    GAME_SERVER_REGION_PING_STATE_RESET: a,
    GAME_SERVER_FETCH_REGIONS_SUCCESS: function (e) {
        let { regions: t } = e;
        s = t;
    },
});
