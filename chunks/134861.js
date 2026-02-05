"use strict";
n.d(t, { A: () => f });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153);
let o = {};
function l(e) {
    let { application: t } = e;
    if (null == t.id) return !1;
    let n = t.id;
    null == o[n] &&
        (o[n] = { count: 0, id: t.id, name: t.name, icon: t.icon, coverImage: t.coverImage, authenticated: !1 }),
        o[n].count++;
}
function u(e) {
    let { application: t } = e;
    null != t.id && null != o[t.id] && (o[t.id].authenticated = !0);
}
function c(e) {
    let { application: t } = e;
    null != t.id && null != o[t.id] && (o[t.id].count--, 0 === o[t.id].count && delete o[t.id]);
}
function d(e) {
    let { connectedApps: t } = e;
    o = { ...t };
}
class _ extends a.Ay.Store {
    static displayName = "ConnectedAppsStore";
    isConnected(e) {
        return null != o[e];
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
let f = new _(s.h, { OVERLAY_INITIALIZE: d, RPC_APP_CONNECTED: l, RPC_APP_AUTHENTICATED: u, RPC_APP_DISCONNECTED: c });
