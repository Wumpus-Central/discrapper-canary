t.d(r, { A: () => c });
var n = t(17928),
    l = t(228366);
let o = {},
    i = [],
    u = !1;
function a() {
    o = {};
}
class s extends n.Ay.Store {
    static displayName = "GameServerRegionStore";
    getRegionStateForPingUrl(e) {
        if (null != e) return o[e];
    }
    getRegionState() {
        return o;
    }
    getRegions() {
        return i;
    }
    isCreationDisabled() {
        return u;
    }
}
let c = new s(l.h, {
    LOGOUT: a,
    GAME_SERVER_REGION_PING_STATE_UPDATE: function (e) {
        let { pingUrl: r, state: t } = e;
        o = { ...o, [r]: t };
    },
    GAME_SERVER_REGION_PING_STATE_RESET: a,
    GAME_SERVER_FETCH_REGIONS_SUCCESS: function (e) {
        let { regions: r, creationDisabled: t } = e;
        (i = r), null != t && (u = t);
    },
});
