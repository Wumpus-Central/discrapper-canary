n.d(t, {
    A: () => m,
}),
    n(896048);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
            authenticated: !1,
        }),
        u[n].count++;
}

function f(e) {
    let { application: t } = e;
    null != t.id && null != u[t.id] && (u[t.id].authenticated = !0);
}

function p(e) {
    let { application: t } = e;
    null != t.id && null != u[t.id] && (u[t.id].count--, 0 === u[t.id].count && delete u[t.id]);
}

function _(e) {
    let { connectedApps: t } = e;
    u = c({}, t);
}
class h extends (r = s.Ay.Store) {
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
l(h, "displayName", "ConnectedAppsStore");
let m = new h(o.h, {
    OVERLAY_INITIALIZE: _,
    RPC_APP_CONNECTED: d,
    RPC_APP_AUTHENTICATED: f,
    RPC_APP_DISCONNECTED: p,
});
