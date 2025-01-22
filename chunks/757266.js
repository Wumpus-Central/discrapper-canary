var i,
    a = r(47120);
var o = r(392711),
    s = r.n(o),
    l = r(442837),
    u = r(570140);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = {};
function f(e) {
    let { application: n } = e;
    if (null == n.id) return !1;
    let r = n.id;
    null == d[r] &&
        (d[r] = {
            count: 0,
            id: n.id,
            name: n.name,
            icon: n.icon,
            coverImage: n.coverImage,
            authenticated: !1
        }),
        d[r].count++;
}
function p(e) {
    let { application: n } = e;
    if (null != n.id && null != d[n.id]) d[n.id].authenticated = !0;
}
function h(e) {
    let { application: n } = e;
    if (null != n.id && null != d[n.id]) d[n.id].count--, 0 === d[n.id].count && delete d[n.id];
}
function _(e) {
    let { connectedApps: n } = e;
    d = { ...n };
}
class m extends (i = l.ZP.Store) {
    isConnected(e) {
        return null != d[e];
    }
    get connections() {
        return s().values(d);
    }
    getApplication(e) {
        return d[e];
    }
    getAllConnections() {
        return d;
    }
}
c(m, 'displayName', 'ConnectedAppsStore'),
    (n.Z = new m(u.Z, {
        OVERLAY_INITIALIZE: _,
        RPC_APP_CONNECTED: f,
        RPC_APP_AUTHENTICATED: p,
        RPC_APP_DISCONNECTED: h
    }));
