"use strict";
n.d(t, { A: () => u });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153);
let o = {};
class l extends s.Ay.Store {
    static displayName = "ConnectedAppsStore";
    isConnected(e) {
        return null != o[e];
    }
    isChildConnected(e) {
        return null != e && Object.values(o).some((t) => t.parentId === e);
    }
    get connections() {
        return i().values(o);
    }
    getApplication(e) {
        return o[e];
    }
    getAllConnections() {
        return o;
    }
}
let u = new l(a.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { connectedApps: t } = e;
        o = { ...t };
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        if (null == t.id) return !1;
        let n = t.id;
        null == o[n] &&
            (o[n] = {
                count: 0,
                id: t.id,
                parentId: t.parentId,
                name: t.name,
                icon: t.icon,
                coverImage: t.coverImage,
                authenticated: !1,
            }),
            o[n].count++;
    },
    RPC_APP_AUTHENTICATED: function (e) {
        let { application: t } = e;
        null != t.id && null != o[t.id] && (o[t.id].authenticated = !0);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        null != t.id && null != o[t.id] && (o[t.id].count--, 0 === o[t.id].count && delete o[t.id]);
    },
});
