"use strict";
n.d(t, { A: () => p, e: () => u });
var r,
    i = n(635377),
    s = n.n(i),
    a = n(994369),
    o = n(311907),
    l = n(73153),
    u = (((r = {})[(r.FETCHING = 0)] = "FETCHING"), (r[(r.FETCHED = 1)] = "FETCHED"), (r[(r.ERROR = 2)] = "ERROR"), r);
function c(e) {
    let {
        query: t,
        guildId: n,
        page: r,
        pageSize: i,
        categoryId: s,
        integrationType: o,
        minUserInstallCommandCount: l,
        excludeAppsWithCustomInstallUrl: u,
        excludeNonEmbeddedApps: c,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
        source: _ = a.V.APP_DIRECTORY,
    } = e;
    return `query:'${t}' guildId:${n} page:${r} pageSize:${i} categoryId:${s} integrationType:${o} minUserInstallCommandCount:${l} excludeAppsWithCustomInstallUrl:${u} excludeNonEmbeddedApps:${c} excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:${d} source:${_}`;
}
let d = new (s())({ max: 20 }),
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
            p = c({
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
        return d.get(p);
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
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
            source: f,
        } = e;
        return _[
            c({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: f,
            })
        ];
    }
}
let p = new f(l.h, {
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
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: f,
            } = e,
            p = c({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: f,
            });
        _ = { ..._, [p]: 0 };
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
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: p,
                source: h,
            } = e,
            E = c({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                integrationType: o,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: u,
                excludeNonEmbeddedApps: f,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: p,
                source: h,
            });
        d.set(E, { lastFetchTimeMs: Date.now(), ...a }), (_ = { ..._, [E]: 1 });
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
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: f,
            } = e,
            p = c({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: f,
            });
        _ = { ..._, [p]: 2 };
    },
});
