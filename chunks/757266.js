n.d(t, { Z: () => m }), n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {};
function d(e) {
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
function f(e) {
    let { application: t } = e;
    null != t.id && null != u[t.id] && (u[t.id].authenticated = !0);
}
function _(e) {
    let { application: t } = e;
    null != t.id && null != u[t.id] && (u[t.id].count--, 0 === u[t.id].count && delete u[t.id]);
}
function p(e) {
    let { connectedApps: t } = e;
    u = c({}, t);
}
class h extends (r = a.ZP.Store) {
    isConnected(e) {
        return null != u[e];
    }
    get connections() {
        return o().values(u);
    }
    getApplication(e) {
        return u[e];
    }
    getAllConnections() {
        return u;
    }
}
l(h, 'displayName', 'ConnectedAppsStore');
let m = new h(s.Z, {
    OVERLAY_INITIALIZE: p,
    RPC_APP_CONNECTED: d,
    RPC_APP_AUTHENTICATED: f,
    RPC_APP_DISCONNECTED: _
});
