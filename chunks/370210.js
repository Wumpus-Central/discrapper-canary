n.d(t, {
    M: () => d,
    Z: () => y
}),
    n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(973616);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var d = (function (e) {
    return (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR'), e;
})({});
let f = {},
    _ = {},
    p = new Set(),
    h = {};
function m(e) {
    let { applicationId: t } = e;
    _ = u(l({}, _), { [t]: 0 });
}
function g(e) {
    let { application: t } = e;
    (f = u(l({}, f), { [t.id]: t })), (_ = u(l({}, _), { [t.id]: 1 }));
    let n = Date.now();
    (h = u(l({}, h), { [t.id]: n })), p.has(t.id) && (p.delete(t.id), (p = new Set(p)));
}
function E(e) {
    let { applicationId: t, isInvalidApplication: n } = e;
    (_ = u(l({}, _), { [t]: 2 })), n && (p.add(t), (p = new Set(p)));
}
class b extends (r = i.ZP.Store) {
    getApplication(e) {
        if (null != e) return f[e];
    }
    getApplicationRecord(e) {
        if (null == e) return;
        let t = f[e];
        if (null != t) return a.ZP.createFromServer(t);
    }
    getApplications() {
        return f;
    }
    getApplicationFetchState(e) {
        if (null != e) return _[e];
    }
    getApplicationFetchStates() {
        return _;
    }
    isInvalidApplication(e) {
        return null != e && p.has(e);
    }
    getInvalidApplicationIds() {
        return p;
    }
    isFetching(e) {
        return 0 === this.getApplicationFetchState(e);
    }
    getApplicationLastFetchTime(e) {
        if (null != e) return h[e];
    }
}
s(b, 'displayName', 'ApplicationDirectoryApplicationsStore');
let y = new b(o.Z, {
    APPLICATION_DIRECTORY_FETCH_APPLICATION: m,
    APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: g,
    APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: E
});
