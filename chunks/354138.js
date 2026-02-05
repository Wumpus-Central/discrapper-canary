"use strict";
n.d(t, { $P: () => D, An: () => w, Di: () => N, bW: () => R, eP: () => b, wD: () => x, xZ: () => O });
var r = n(158390),
    i = n(724002),
    a = n(277419),
    s = n(287174),
    o = n(994369),
    l = n(562465),
    u = n(73153);
n(865116);
var c = n(773669),
    d = n(111162),
    _ = n(723702),
    f = n(212534),
    p = n(38181),
    h = n(111042),
    m = n(651753),
    g = n(82293),
    E = n(680646),
    A = n(652215);
let I = 1e3,
    T = 5e3,
    y = 10,
    S = 864e5,
    v = 6e5,
    C = new Map();
async function b(e) {
    let t = Date.now(),
        n = C.get(e) ?? 0;
    if (f.A.getApplicationFetchState(e) === f.e.FETCHING || f.A.isInvalidApplication(e) || t < n + v) return;
    C.set(e, t), u.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: e });
    let i = new r.A(I, T),
        a = (e, t) =>
            429 === e.status &&
            i.fails < y &&
            (i.fail(() => {
                t(void 0, a);
            }),
            !0);
    try {
        let t = (
            await l.Bo.get({
                url: A.Rsh.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: i,
                retries: y,
                interceptResponse: a,
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
async function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = Date.now(),
        r = f.A.getApplicationFetchState(e),
        i = f.A.getApplicationLastFetchTime(e),
        { dontRefetchMs: a, noCache: s } = t,
        o = null != i && i + (a ?? v) > n;
    if (r !== f.e.FETCHING && !o) {
        u.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: e });
        try {
            let t = await l.Bo.get({
                url: A.Rsh.APPLICATION_DIRECTORY_APPLICATION(e),
                query: { locale: c.default.locale, nocache: s },
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
async function R() {
    let e = Date.now(),
        t = p.A.getLastFetchTimeMs();
    if (null != t && t + v > e) return;
    let n = await l.Bo.get({
        url: A.Rsh.APPLICATION_DIRECTORY_CATEGORIES,
        query: { locale: c.default.locale },
        rejectWithError: !1,
    });
    u.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS", categories: n.body });
}
async function O(e) {
    let { applicationId: t, guildId: n, options: r } = e,
        { page: i } = r ?? {},
        a = Date.now(),
        s = g.A.getFetchState({ applicationId: t, guildId: n }),
        { lastFetchTimeMs: o } = g.A.getSimilarApplications({ applicationId: t, guildId: n }) ?? {};
    if (s !== g.e.FETCHING && (null == o || !(o + v > a))) {
        u.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
            applicationId: t,
            guildId: n,
            page: i,
        });
        try {
            let e = await l.Bo.get({
                url: A.Rsh.APPLICATION_DIRECTORY_SIMILAR(t),
                query: { guild_id: n, page: i, locale: c.default.locale },
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
async function D(e) {
    let { query: t, guildId: n, options: r, onSuccessCallback: i } = e,
        {
            page: a,
            pageSize: s,
            categoryId: d,
            integrationType: _,
            minUserInstallCommandCount: f,
            excludeAppsWithCustomInstallUrl: p,
            excludeNonEmbeddedApps: h,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: g,
            source: E = o.V.APP_DIRECTORY,
        } = r ?? {},
        I = Date.now(),
        T = m.A.getFetchState({ query: t, guildId: n, page: a, pageSize: s, categoryId: d, integrationType: _ }),
        { lastFetchTimeMs: y } =
            m.A.getSearchResults({ query: t, guildId: n, page: a, pageSize: s, categoryId: d, integrationType: _ }) ??
            {};
    if (T !== m.e.FETCHING && (null == y || !(y + v > I))) {
        u.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
            query: t,
            guildId: n,
            page: a,
            pageSize: s,
            categoryId: d,
            integrationType: _,
            minUserInstallCommandCount: f,
            excludeAppsWithCustomInstallUrl: p,
            excludeNonEmbeddedApps: h,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: g,
            source: E,
        });
        try {
            let e = await l.Bo.get({
                url: A.Rsh.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: t,
                    guild_id: n,
                    page: a,
                    page_size: s,
                    category_id: d,
                    locale: c.default.locale,
                    integration_type: _,
                    min_user_install_command_count: f,
                    exclude_apps_with_custom_install_url: p,
                    exclude_non_embedded_apps: h,
                    exclude_embedded_apps_without_primary_entry_point_app_command: g,
                    source: E,
                },
                rejectWithError: !0,
            });
            u.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                query: t,
                guildId: n,
                page: a,
                pageSize: s,
                categoryId: d,
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
                excludeAppsWithCustomInstallUrl: p,
                excludeNonEmbeddedApps: h,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: g,
                source: E,
            }),
                i?.(e.body.result_count);
        } catch (e) {
            u.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                query: t,
                guildId: n,
                page: a,
                pageSize: s,
                categoryId: d,
                integrationType: _,
                minUserInstallCommandCount: f,
                excludeAppsWithCustomInstallUrl: p,
                excludeNonEmbeddedApps: h,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: g,
                source: E,
            });
        }
    }
}
function L() {
    return (0, _.isAndroid)() ? a.T.ANDROID : (0, _.isIOS)() ? a.T.IOS : a.T.WEB;
}
async function w() {
    let { surface: e = s.K.APPLICATION_DIRECTORY, activeState: t = i.W.ACTIVE } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = d.default.disableAppCollectionsCache,
        r = Date.now(),
        a = h.A.getFetchState({ surface: e, activeState: t }),
        o = h.A.getLastFetchTimeMs({ surface: e, activeState: t });
    if (a === h.e.FETCHING) return;
    let _ = !n && t === i.W.ACTIVE;
    if (!_ || null == o || !(o + v > r)) {
        u.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS", surface: e, activeState: t });
        try {
            let n = await l.Bo.get({
                url: A.Rsh.APPLICATION_DIRECTORY_COLLECTIONS,
                query: { surface: e, active_state: t, platform: L(), locale: c.default.locale, cache: _ },
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
async function x() {
    let e = Date.now(),
        t = E.A.getFetchState(),
        n = E.A.getLastFetchTimeMs(),
        r = E.A.getNextFetchRetryTimeMs();
    if (t !== E.e.FETCHING && (null == n || !(n + S > e)) && (null == r || !(e < r))) {
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
