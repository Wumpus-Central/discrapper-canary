n.d(t, { Z: () => h }), n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140);
function l(e, t, n) {
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
let u = {};
function c(e) {
    let { application: t } = e;
    if (null == t.id) return !1;
    let n = t.id;
    null == u[n] &&
        (u[n] = {
            count: 0,
            id: t.id,
            name: t.name,
            icon: t.icon,
            coverImage: t.coverImage,
            authenticated: !1
        }),
        u[n].count++;
}
function d(e) {
    let { application: t } = e;
    null != t.id && null != u[t.id] && (u[t.id].authenticated = !0);
}
function f(e) {
    let { application: t } = e;
    null != t.id && null != u[t.id] && (u[t.id].count--, 0 === u[t.id].count && delete u[t.id]);
}
function _(e) {
    let { connectedApps: t } = e;
    u = { ...t };
}
class p extends (i = s.ZP.Store) {
    isConnected(e) {
        return null != u[e];
    }
    get connections() {
        return a().values(u);
    }
    getApplication(e) {
        return u[e];
    }
    getAllConnections() {
        return u;
    }
}
l(p, 'displayName', 'ConnectedAppsStore');
let h = new p(o.Z, {
    OVERLAY_INITIALIZE: _,
    RPC_APP_CONNECTED: c,
    RPC_APP_AUTHENTICATED: d,
    RPC_APP_DISCONNECTED: f
});
