"use strict";
n.d(t, { A: () => A, e: () => d });
var i,
    r = n(635377),
    a = n.n(r),
    s = n(994369),
    l = n(17928),
    o = n(228366),
    d = (((i = {})[(i.FETCHING = 0)] = "FETCHING"), (i[(i.FETCHED = 1)] = "FETCHED"), (i[(i.ERROR = 2)] = "ERROR"), i);
function c(e) {
    let {
        query: t,
        guildId: n,
        page: i,
        pageSize: r,
        categoryId: a,
        integrationType: l,
        minUserInstallCommandCount: o,
        excludeAppsWithCustomInstallUrl: d,
        excludeNonEmbeddedApps: c,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
        source: _ = s.V.APP_DIRECTORY,
    } = e;
    return `query:'${t}' guildId:${n} page:${i} pageSize:${r} categoryId:${a} integrationType:${l} minUserInstallCommandCount:${o} excludeAppsWithCustomInstallUrl:${d} excludeNonEmbeddedApps:${c} excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:${u} source:${_}`;
}
let u = new (a())({ max: 20 }),
    _ = {};
class E extends l.Ay.Store {
    static displayName = "ApplicationDirectorySearchStore";
    getSearchResults(e) {
        let {
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: o,
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: _,
                source: E,
            } = e,
            A = c({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: o,
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: _,
                source: E,
            });
        return u.get(A);
    }
    getFetchState(e) {
        let {
            query: t,
            guildId: n,
            page: i,
            pageSize: r,
            categoryId: a,
            integrationType: s,
            minUserInstallCommandCount: l,
            excludeAppsWithCustomInstallUrl: o,
            excludeNonEmbeddedApps: d,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
            source: E,
        } = e;
        return _[
            c({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: o,
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: E,
            })
        ];
    }
}
let A = new E(o.h, {
    APPLICATION_DIRECTORY_FETCH_SEARCH: function (e) {
        let {
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: o,
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: E,
            } = e,
            A = c({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: o,
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: E,
            });
        _ = { ..._, [A]: 0 };
    },
    APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function (e) {
        let {
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: a,
                result: s,
                integrationType: l,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: d,
                excludeNonEmbeddedApps: E,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: A,
                source: h,
            } = e,
            I = c({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: a,
                integrationType: l,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: d,
                excludeNonEmbeddedApps: E,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: A,
                source: h,
            });
        u.set(I, { lastFetchTimeMs: Date.now(), ...s }), (_ = { ..._, [I]: 1 });
    },
    APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function (e) {
        let {
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: o,
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: E,
            } = e,
            A = c({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: o,
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: E,
            });
        _ = { ..._, [A]: 2 };
    },
});
