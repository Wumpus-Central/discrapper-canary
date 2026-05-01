n.d(t, { A: () => d });
var i = n(735438),
    a = n.n(i),
    r = n(17928),
    s = n(228366);
let l = {};
class o extends r.Ay.Store {
    static displayName = "ConnectedAppsStore";
    isConnected(e) {
        return null != l[e];
    }
    isChildConnected(e) {
        return null != e && Object.values(l).some((t) => t.parentId === e);
    }
    get connections() {
        return a().values(l);
    }
    getApplication(e) {
        return l[e];
    }
    getAllConnections() {
        return l;
    }
}
let d = new o(s.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { connectedApps: t } = e;
        l = { ...t };
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        if (null == t.id) return !1;
        let n = t.id;
        null == l[n] &&
            (l[n] = {
                count: 0,
                id: t.id,
                parentId: t.parentId,
                name: t.name,
                icon: t.icon,
                coverImage: t.coverImage,
                authenticated: !1,
            }),
            l[n].count++;
    },
    RPC_APP_AUTHENTICATED: function (e) {
        let { application: t } = e;
        null != t.id && null != l[t.id] && (l[t.id].authenticated = !0);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        null != t.id && null != l[t.id] && (l[t.id].count--, 0 === l[t.id].count && delete l[t.id]);
    },
});
