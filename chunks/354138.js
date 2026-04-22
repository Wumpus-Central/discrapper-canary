"use strict";
n.d(t, { $P: () => O, An: () => R, Di: () => S, bW: () => y, eP: () => T, wD: () => v, xZ: () => N });
var r = n(158390),
    i = n(724002),
    s = n(277419),
    a = n(287174),
    o = n(994369),
    l = n(562465),
    u = n(73153);
n(865116);
var d = n(773669),
    c = n(111162),
    _ = n(723702),
    f = n(212534),
    E = n(38181),
    h = n(111042),
    p = n(651753),
    m = n(82293),
    g = n(680646),
    A = n(652215);
let I = new Map();
async function T(e) {
    let t = Date.now(),
        n = I.get(e) ?? 0;
    if (f.A.getApplicationFetchState(e) === f.e.FETCHING || f.A.isInvalidApplication(e) || t < n + 6e5) return;
    I.set(e, t), u.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: e });
    let i = new r.A(1e3, 5e3),
        s = (e, t) =>
            429 === e.status &&
            i.fails < 10 &&
            (i.fail(() => {
                t(void 0, s);
            }),
            !0);
    try {
        let t = (
            await l.Bo.get({
                url: A.Rsh.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: i,
                retries: 10,
                interceptResponse: s,
                rejectWithError: !1,
            })
        ).body;
        u.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: t });
    } catch (t) {
        u.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
            applicationId: e,
            isInvalidApplication: !0,
        });
    }
}
async function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = Date.now(),
        r = f.A.getApplicationFetchState(e),
        i = f.A.getApplicationLastFetchTime(e),
        { dontRefetchMs: s, noCache: a } = t;
    if (r !== f.e.FETCHING && !(null != i && i + (s ?? 6e5) > n)) {
        u.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: e });
        try {
            let t = await l.Bo.get({
                url: A.Rsh.APPLICATION_DIRECTORY_APPLICATION(e),
                query: { locale: d.default.locale, nocache: a },
                rejectWithError: !0,
            });
            u.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: t.body });
        } catch (t) {
            u.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                applicationId: e,
                isInvalidApplication: !0,
            });
        }
    }
}
async function y() {
    let e = Date.now(),
        t = E.A.getLastFetchTimeMs();
    if (null != t && t + 6e5 > e) return;
    let n = await l.Bo.get({
        url: A.Rsh.APPLICATION_DIRECTORY_CATEGORIES,
        query: { locale: d.default.locale },
        rejectWithError: !1,
    });
    u.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS", categories: n.body });
}
async function N(e) {
    let { applicationId: t, guildId: n, options: r } = e,
        { page: i } = r ?? {},
        s = Date.now(),
        a = m.A.getFetchState({ applicationId: t, guildId: n }),
        { lastFetchTimeMs: o } = m.A.getSimilarApplications({ applicationId: t, guildId: n }) ?? {};
    if (a !== m.e.FETCHING && (null == o || !(o + 6e5 > s))) {
        u.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
            applicationId: t,
            guildId: n,
            page: i,
        });
        try {
            let e = await l.Bo.get({
                url: A.Rsh.APPLICATION_DIRECTORY_SIMILAR(t),
                query: { guild_id: n, page: i, locale: d.default.locale },
                rejectWithError: !0,
            });
            u.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                applicationId: t,
                guildId: n,
                similarApplications: e.body.applications,
                loadId: e.body.load_id,
                page: i,
                totalPages: e.body.num_pages,
            });
        } catch (e) {
            u.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                applicationId: t,
                guildId: n,
                page: i,
            });
        }
    }
}
async function O(e) {
    let { query: t, guildId: n, options: r, onSuccessCallback: i } = e,
        {
            page: s,
            pageSize: a,
            categoryId: c,
            integrationType: _,
            minUserInstallCommandCount: f,
            excludeAppsWithCustomInstallUrl: E,
            excludeNonEmbeddedApps: h,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: m,
            source: g = o.V.APP_DIRECTORY,
        } = r ?? {},
        I = Date.now(),
        T = p.A.getFetchState({ query: t, guildId: n, page: s, pageSize: a, categoryId: c, integrationType: _ }),
        { lastFetchTimeMs: S } =
            p.A.getSearchResults({ query: t, guildId: n, page: s, pageSize: a, categoryId: c, integrationType: _ }) ??
            {};
    if (T !== p.e.FETCHING && (null == S || !(S + 6e5 > I))) {
        u.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
            query: t,
            guildId: n,
            page: s,
            pageSize: a,
            categoryId: c,
            integrationType: _,
            minUserInstallCommandCount: f,
            excludeAppsWithCustomInstallUrl: E,
            excludeNonEmbeddedApps: h,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: m,
            source: g,
        });
        try {
            let e = await l.Bo.get({
                url: A.Rsh.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: t,
                    guild_id: n,
                    page: s,
                    page_size: a,
                    category_id: c,
                    locale: d.default.locale,
                    integration_type: _,
                    min_user_install_command_count: f,
                    exclude_apps_with_custom_install_url: E,
                    exclude_non_embedded_apps: h,
                    exclude_embedded_apps_without_primary_entry_point_app_command: m,
                    source: g,
                },
                rejectWithError: !0,
            });
            u.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                query: t,
                guildId: n,
                page: s,
                pageSize: a,
                categoryId: c,
                integrationType: _,
                result: {
                    results: e.body.results,
                    countsByCategory: e.body.counts_by_category,
                    totalCount: e.body.result_count,
                    totalPages: e.body.num_pages,
                    type: e.body.type,
                    loadId: e.body.load_id,
                },
                minUserInstallCommandCount: f,
                excludeAppsWithCustomInstallUrl: E,
                excludeNonEmbeddedApps: h,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: m,
                source: g,
            }),
                i?.(e.body.result_count);
        } catch (e) {
            u.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                query: t,
                guildId: n,
                page: s,
                pageSize: a,
                categoryId: c,
                integrationType: _,
                minUserInstallCommandCount: f,
                excludeAppsWithCustomInstallUrl: E,
                excludeNonEmbeddedApps: h,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: m,
                source: g,
            });
        }
    }
}
async function R() {
    let { surface: e = a.K.APPLICATION_DIRECTORY, activeState: t = i.W.ACTIVE } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = c.default.disableAppCollectionsCache,
        r = Date.now(),
        o = h.A.getFetchState({ surface: e, activeState: t }),
        f = h.A.getLastFetchTimeMs({ surface: e, activeState: t });
    if (o === h.e.FETCHING) return;
    let E = !n && t === i.W.ACTIVE;
    if (!E || null == f || !(f + 6e5 > r)) {
        u.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS", surface: e, activeState: t });
        try {
            let n = await l.Bo.get({
                url: A.Rsh.APPLICATION_DIRECTORY_COLLECTIONS,
                query: {
                    surface: e,
                    active_state: t,
                    platform: (0, _.isAndroid)() ? s.T.ANDROID : (0, _.isIOS)() ? s.T.IOS : s.T.WEB,
                    locale: d.default.locale,
                    cache: E,
                },
                rejectWithError: !0,
            });
            u.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
                collections: n.body,
                surface: e,
                activeState: t,
            });
        } catch (n) {
            u.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE", surface: e, activeState: t });
        }
    }
}
async function v() {
    let e = Date.now(),
        t = g.A.getFetchState(),
        n = g.A.getLastFetchTimeMs(),
        r = g.A.getNextFetchRetryTimeMs();
    if (t !== g.e.FETCHING && (null == n || !(n + 864e5 > e)) && (null == r || !(e < r))) {
        u.h.dispatch({ type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS" });
        try {
            let e = await l.Bo.get({ url: A.Rsh.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS, rejectWithError: !1 });
            u.h.dispatch({
                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
                guildIdToApplicationIds: e.body,
            });
        } catch (t) {
            let e = t?.status === 429;
            u.h.dispatch({
                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
                retryAfterSeconds: e ? t?.body?.retry_after : void 0,
            });
        }
    }
}
