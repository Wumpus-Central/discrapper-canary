"use strict";
n.d(t, { A: () => g, e: () => u });
var r = n(635377),
    i = n.n(r),
    a = n(994369),
    s = n(311907),
    o = n(73153);
let l = 20;
var u = (function (e) {
    return (e[(e.FETCHING = 0)] = "FETCHING"), (e[(e.FETCHED = 1)] = "FETCHED"), (e[(e.ERROR = 2)] = "ERROR"), e;
})({});
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
let d = new (i())({ max: l }),
    _ = {};
function f(e) {
    let {
            query: t,
            guildId: n,
            page: r,
            pageSize: i,
            categoryId: a,
            integrationType: s,
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
            categoryId: a,
            integrationType: s,
            minUserInstallCommandCount: o,
            excludeAppsWithCustomInstallUrl: l,
            excludeNonEmbeddedApps: u,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
            source: f,
        });
    _ = { ..._, [p]: 0 };
}
function p(e) {
    let {
            query: t,
            guildId: n,
            page: r,
            pageSize: i,
            categoryId: a,
            result: s,
            integrationType: o,
            minUserInstallCommandCount: l,
            excludeAppsWithCustomInstallUrl: u,
            excludeNonEmbeddedApps: f,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: p,
            source: h,
        } = e,
        m = c({
            query: t,
            guildId: n,
            page: r,
            pageSize: i,
            categoryId: a,
            integrationType: o,
            minUserInstallCommandCount: l,
            excludeAppsWithCustomInstallUrl: u,
            excludeNonEmbeddedApps: f,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: p,
            source: h,
        });
    d.set(m, { lastFetchTimeMs: Date.now(), ...s }), (_ = { ..._, [m]: 1 });
}
function h(e) {
    let {
            query: t,
            guildId: n,
            page: r,
            pageSize: i,
            categoryId: a,
            integrationType: s,
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
            categoryId: a,
            integrationType: s,
            minUserInstallCommandCount: o,
            excludeAppsWithCustomInstallUrl: l,
            excludeNonEmbeddedApps: u,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
            source: f,
        });
    _ = { ..._, [p]: 2 };
}
class m extends s.Ay.Store {
    static displayName = "ApplicationDirectorySearchStore";
    getSearchResults(e) {
        let {
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: a,
                integrationType: s,
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
                categoryId: a,
                integrationType: s,
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
            categoryId: a,
            integrationType: s,
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
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: f,
            })
        ];
    }
}
let g = new m(o.h, {
    APPLICATION_DIRECTORY_FETCH_SEARCH: f,
    APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: p,
    APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: h,
});
