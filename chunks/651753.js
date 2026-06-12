"use strict";
n.d(t, { A: () => f, e: () => u });
var i,
    r = n(635377),
    s = n.n(r),
    a = n(994369),
    o = n(17928),
    l = n(228366),
    u = (((i = {})[(i.FETCHING = 0)] = "FETCHING"), (i[(i.FETCHED = 1)] = "FETCHED"), (i[(i.ERROR = 2)] = "ERROR"), i);
function c(e) {
    let {
        query: t,
        guildId: n,
        page: i,
        pageSize: r,
        categoryId: s,
        integrationType: o,
        minUserInstallCommandCount: l,
        excludeAppsWithCustomInstallUrl: u,
        excludeNonEmbeddedApps: c,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
        source: _ = a.V.APP_DIRECTORY,
    } = e;
    return `query:'${t}' guildId:${n} page:${i} pageSize:${r} categoryId:${s} integrationType:${o} minUserInstallCommandCount:${l} excludeAppsWithCustomInstallUrl:${u} excludeNonEmbeddedApps:${c} excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:${d} source:${_}`;
}
let d = new (s())({ max: 20 }),
    _ = {};
class h extends o.Ay.Store {
    static displayName = "ApplicationDirectorySearchStore";
    getSearchResults(e) {
        let {
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: _,
                source: h,
            } = e,
            f = c({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: _,
                source: h,
            });
        return d.get(f);
    }
    getFetchState(e) {
        let {
            query: t,
            guildId: n,
            page: i,
            pageSize: r,
            categoryId: s,
            integrationType: a,
            minUserInstallCommandCount: o,
            excludeAppsWithCustomInstallUrl: l,
            excludeNonEmbeddedApps: u,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
            source: h,
        } = e;
        return _[
            c({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: h,
            })
        ];
    }
}
let f = new h(l.h, {
    APPLICATION_DIRECTORY_FETCH_SEARCH: function (e) {
        let {
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: h,
            } = e,
            f = c({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: h,
            });
        _ = { ..._, [f]: 0 };
    },
    APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function (e) {
        let {
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                result: a,
                integrationType: o,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: u,
                excludeNonEmbeddedApps: h,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: f,
                source: p,
            } = e,
            E = c({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: o,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: u,
                excludeNonEmbeddedApps: h,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: f,
                source: p,
            });
        d.set(E, { lastFetchTimeMs: Date.now(), ...a }), (_ = { ..._, [E]: 1 });
    },
    APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function (e) {
        let {
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: h,
            } = e,
            f = c({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: h,
            });
        _ = { ..._, [f]: 2 };
    },
});
