n.d(t, { A: () => o });
var i = n(735438),
    r = n.n(i),
    a = n(17928),
    s = n(228366);
let _ = {};
class l extends a.Ay.Store {
    static displayName = "ConnectedAppsStore";
    isConnected(e) {
        return null != _[e];
    }
    isChildConnected(e) {
        return null != e && Object.values(_).some((t) => t.parentId === e);
    }
    get connections() {
        return r().values(_);
    }
    getApplication(e) {
        return _[e];
    }
    getAllConnections() {
        return _;
    }
}
let o = new l(s.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { connectedApps: t } = e;
        _ = { ...t };
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        if (null == t.id) return !1;
        let n = t.id;
        null == _[n] &&
            (_[n] = {
                count: 0,
                id: t.id,
                parentId: t.parentId,
                name: t.name,
                icon: t.icon,
                coverImage: t.coverImage,
                authenticated: !1,
            }),
            _[n].count++;
    },
    RPC_APP_AUTHENTICATED: function (e) {
        let { application: t } = e;
        null != t.id && null != _[t.id] && (_[t.id].authenticated = !0);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        null != t.id && null != _[t.id] && (_[t.id].count--, 0 === _[t.id].count && delete _[t.id]);
    },
});
