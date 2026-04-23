"use strict";
n.d(t, { A: () => h, e: () => d });
var i,
    r = n(635377),
    s = n.n(r),
    a = n(994369),
    o = n(17928),
    l = n(228366),
    d = (((i = {})[(i.FETCHING = 0)] = "FETCHING"), (i[(i.FETCHED = 1)] = "FETCHED"), (i[(i.ERROR = 2)] = "ERROR"), i);
function _(e) {
    let {
        query: t,
        guildId: n,
        page: i,
        pageSize: r,
        categoryId: s,
        integrationType: o,
        minUserInstallCommandCount: l,
        excludeAppsWithCustomInstallUrl: d,
        excludeNonEmbeddedApps: _,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
        source: c = a.V.APP_DIRECTORY,
    } = e;
    return `query:'${t}' guildId:${n} page:${i} pageSize:${r} categoryId:${s} integrationType:${o} minUserInstallCommandCount:${l} excludeAppsWithCustomInstallUrl:${d} excludeNonEmbeddedApps:${_} excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:${u} source:${c}`;
}
let u = new (s())({ max: 20 }),
    c = {};
class E extends o.Ay.Store {
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
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: E,
            } = e,
            h = _({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: E,
            });
        return u.get(h);
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
            excludeNonEmbeddedApps: d,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
            source: E,
        } = e;
        return c[
            _({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: E,
            })
        ];
    }
}
let h = new E(l.h, {
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
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: E,
            } = e,
            h = _({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: E,
            });
        c = { ...c, [h]: 0 };
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
                excludeAppsWithCustomInstallUrl: d,
                excludeNonEmbeddedApps: E,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: h,
                source: m,
            } = e,
            f = _({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: o,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: d,
                excludeNonEmbeddedApps: E,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: h,
                source: m,
            });
        u.set(f, { lastFetchTimeMs: Date.now(), ...a }), (c = { ...c, [f]: 1 });
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
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: E,
            } = e,
            h = _({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: s,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: d,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: E,
            });
        c = { ...c, [h]: 2 };
    },
});
