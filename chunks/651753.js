"use strict";
n.d(t, { A: () => E, e: () => u });
var r,
    i = n(635377),
    s = n.n(i),
    a = n(994369),
    o = n(311907),
    l = n(73153),
    u = (((r = {})[(r.FETCHING = 0)] = "FETCHING"), (r[(r.FETCHED = 1)] = "FETCHED"), (r[(r.ERROR = 2)] = "ERROR"), r);
function d(e) {
    let {
        query: t,
        guildId: n,
        page: r,
        pageSize: i,
        categoryId: s,
        integrationType: o,
        minUserInstallCommandCount: l,
        excludeAppsWithCustomInstallUrl: u,
        excludeNonEmbeddedApps: d,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
        source: _ = a.V.APP_DIRECTORY,
    } = e;
    return `query:'${t}' guildId:${n} page:${r} pageSize:${i} categoryId:${s} integrationType:${o} minUserInstallCommandCount:${l} excludeAppsWithCustomInstallUrl:${u} excludeNonEmbeddedApps:${d} excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:${c} source:${_}`;
}
let c = new (s())({ max: 20 }),
    _ = {};
class f extends o.Ay.Store {
    static displayName = "ApplicationDirectorySearchStore";
    getSearchResults(e) {
        let {
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: _,
                source: f,
            } = e,
            E = d({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: _,
                source: f,
            });
        return c.get(E);
    }
    getFetchState(e) {
        let {
            query: t,
            guildId: n,
            page: r,
            pageSize: i,
            categoryId: s,
            integrationType: a,
            minUserInstallCommandCount: o,
            excludeAppsWithCustomInstallUrl: l,
            excludeNonEmbeddedApps: u,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
            source: f,
        } = e;
        return _[
            d({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: f,
            })
        ];
    }
}
let E = new f(l.h, {
    APPLICATION_DIRECTORY_FETCH_SEARCH: function (e) {
        let {
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: f,
            } = e,
            E = d({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: f,
            });
        _ = { ..._, [E]: 0 };
    },
    APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function (e) {
        let {
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                result: a,
                integrationType: o,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: u,
                excludeNonEmbeddedApps: f,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
                source: h,
            } = e,
            p = d({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                integrationType: o,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: u,
                excludeNonEmbeddedApps: f,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
                source: h,
            });
        c.set(p, { lastFetchTimeMs: Date.now(), ...a }), (_ = { ..._, [p]: 1 });
    },
    APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function (e) {
        let {
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: f,
            } = e,
            E = d({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: f,
            });
        _ = { ..._, [E]: 2 };
    },
});
