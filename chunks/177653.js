n.d(t, {
    M: () => p,
    Z: () => O
});
var r,
    i = n(31775),
    o = n.n(i),
    a = n(288385),
    s = n(442837),
    l = n(570140);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 20;
var p = (function (e) {
    return (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR'), e;
})({});
function h(e) {
    let { query: t, guildId: n, page: r, pageSize: i, categoryId: o, integrationType: s, minUserInstallCommandCount: l, excludeAppsWithCustomInstallUrl: c, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d, source: f = a.F.APP_DIRECTORY } = e;
    return "query:'".concat(t, "' guildId:").concat(n, ' page:').concat(r, ' pageSize:').concat(i, ' categoryId:').concat(o, ' integrationType:').concat(s, ' minUserInstallCommandCount:').concat(l, ' excludeAppsWithCustomInstallUrl:').concat(c, ' excludeNonEmbeddedApps:').concat(u, ' excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:').concat(d, ' source:').concat(f);
}
let m = new (o())({ max: _ }),
    g = {};
function E(e) {
    let { query: t, guildId: n, page: r, pageSize: i, categoryId: o, integrationType: a, minUserInstallCommandCount: s, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: c, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d, source: _ } = e,
        p = h({
            query: t,
            guildId: n,
            page: r,
            pageSize: i,
            categoryId: o,
            integrationType: a,
            minUserInstallCommandCount: s,
            excludeAppsWithCustomInstallUrl: l,
            excludeNonEmbeddedApps: c,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
            source: _
        });
    g = f(u({}, g), { [p]: 0 });
}
function b(e) {
    let { query: t, guildId: n, page: r, pageSize: i, categoryId: o, result: a, integrationType: s, minUserInstallCommandCount: l, excludeAppsWithCustomInstallUrl: c, excludeNonEmbeddedApps: d, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: _, source: p } = e,
        E = h({
            query: t,
            guildId: n,
            page: r,
            pageSize: i,
            categoryId: o,
            integrationType: s,
            minUserInstallCommandCount: l,
            excludeAppsWithCustomInstallUrl: c,
            excludeNonEmbeddedApps: d,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: _,
            source: p
        });
    m.set(E, u({ lastFetchTimeMs: Date.now() }, a)), (g = f(u({}, g), { [E]: 1 }));
}
function y(e) {
    let { query: t, guildId: n, page: r, pageSize: i, categoryId: o, integrationType: a, minUserInstallCommandCount: s, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: c, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d, source: _ } = e,
        p = h({
            query: t,
            guildId: n,
            page: r,
            pageSize: i,
            categoryId: o,
            integrationType: a,
            minUserInstallCommandCount: s,
            excludeAppsWithCustomInstallUrl: l,
            excludeNonEmbeddedApps: c,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
            source: _
        });
    g = f(u({}, g), { [p]: 2 });
}
class v extends (r = s.ZP.Store) {
    getSearchResults(e) {
        let { query: t, guildId: n, page: r, pageSize: i, categoryId: o, integrationType: a, minUserInstallCommandCount: s, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: c, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u, source: d } = e,
            f = h({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: o,
                integrationType: a,
                minUserInstallCommandCount: s,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: c,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: d
            });
        return m.get(f);
    }
    getFetchState(e) {
        let { query: t, guildId: n, page: r, pageSize: i, categoryId: o, integrationType: a, minUserInstallCommandCount: s, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: c, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u, source: d } = e;
        return g[
            h({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: o,
                integrationType: a,
                minUserInstallCommandCount: s,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: c,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: d
            })
        ];
    }
}
c(v, 'displayName', 'ApplicationDirectorySearchStore');
let O = new v(l.Z, {
    APPLICATION_DIRECTORY_FETCH_SEARCH: E,
    APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: b,
    APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: y
});
