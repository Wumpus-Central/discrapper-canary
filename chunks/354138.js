n.d(t, { $P: () => L, An: () => D, Di: () => C, bW: () => p, eP: () => f, wD: () => h, xZ: () => m });
var i = n(158390),
    r = n(724002),
    a = n(277419),
    s = n(287174),
    _ = n(994369),
    l = n(636537),
    o = n(228366);
n(865116);
var E = n(773669),
    d = n(111162),
    c = n(723702),
    u = n(212534),
    I = n(38181),
    A = n(111042),
    T = n(651753),
    S = n(82293),
    N = n(680646),
    O = n(652215);
let R = new Map();
async function f(e) {
    let t = Date.now(),
        n = R.get(e) ?? 0;
    if (u.A.getApplicationFetchState(e) === u.e.FETCHING || u.A.isInvalidApplication(e) || t < n + 6e5) return;
    R.set(e, t), o.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: e });
    let r = new i.A(1e3, 5e3),
        a = (e, t) =>
            429 === e.status &&
            r.fails < 10 &&
            (r.fail(() => {
                t(void 0, a);
            }),
            !0);
    try {
        let t = (
            await l.Bo.get({
                url: O.Rsh.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: r,
                retries: 10,
                interceptResponse: a,
                rejectWithError: !1,
            })
        ).body;
        o.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: t });
    } catch (t) {
        o.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
            applicationId: e,
            isInvalidApplication: !0,
        });
    }
}
async function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = Date.now(),
        i = u.A.getApplicationFetchState(e),
        r = u.A.getApplicationLastFetchTime(e),
        { dontRefetchMs: a, noCache: s } = t;
    if (i !== u.e.FETCHING && !(null != r && r + (a ?? 6e5) > n)) {
        o.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: e });
        try {
            let t = await l.Bo.get({
                url: O.Rsh.APPLICATION_DIRECTORY_APPLICATION(e),
                query: { locale: E.default.locale, nocache: s },
                rejectWithError: !0,
            });
            o.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: t.body });
        } catch (t) {
            o.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                applicationId: e,
                isInvalidApplication: !0,
            });
        }
    }
}
async function p() {
    let e = Date.now(),
        t = I.A.getLastFetchTimeMs();
    if (null != t && t + 6e5 > e) return;
    let n = await l.Bo.get({
        url: O.Rsh.APPLICATION_DIRECTORY_CATEGORIES,
        query: { locale: E.default.locale },
        rejectWithError: !1,
    });
    o.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS", categories: n.body });
}
async function m(e) {
    let { applicationId: t, guildId: n, options: i } = e,
        { page: r } = i ?? {},
        a = Date.now(),
        s = S.A.getFetchState({ applicationId: t, guildId: n }),
        { lastFetchTimeMs: _ } = S.A.getSimilarApplications({ applicationId: t, guildId: n }) ?? {};
    if (s !== S.e.FETCHING && (null == _ || !(_ + 6e5 > a))) {
        o.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
            applicationId: t,
            guildId: n,
            page: r,
        });
        try {
            let e = await l.Bo.get({
                url: O.Rsh.APPLICATION_DIRECTORY_SIMILAR(t),
                query: { guild_id: n, page: r, locale: E.default.locale },
                rejectWithError: !0,
            });
            o.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                applicationId: t,
                guildId: n,
                similarApplications: e.body.applications,
                loadId: e.body.load_id,
                page: r,
                totalPages: e.body.num_pages,
            });
        } catch (e) {
            o.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                applicationId: t,
                guildId: n,
                page: r,
            });
        }
    }
}
async function L(e) {
    let { query: t, guildId: n, options: i, onSuccessCallback: r } = e,
        {
            page: a,
            pageSize: s,
            categoryId: d,
            integrationType: c,
            minUserInstallCommandCount: u,
            excludeAppsWithCustomInstallUrl: I,
            excludeNonEmbeddedApps: A,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: S,
            source: N = _.V.APP_DIRECTORY,
        } = i ?? {},
        R = Date.now(),
        f = T.A.getFetchState({ query: t, guildId: n, page: a, pageSize: s, categoryId: d, integrationType: c }),
        { lastFetchTimeMs: C } =
            T.A.getSearchResults({ query: t, guildId: n, page: a, pageSize: s, categoryId: d, integrationType: c }) ??
            {};
    if (f !== T.e.FETCHING && (null == C || !(C + 6e5 > R))) {
        o.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
            query: t,
            guildId: n,
            page: a,
            pageSize: s,
            categoryId: d,
            integrationType: c,
            minUserInstallCommandCount: u,
            excludeAppsWithCustomInstallUrl: I,
            excludeNonEmbeddedApps: A,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: S,
            source: N,
        });
        try {
            let e = await l.Bo.get({
                url: O.Rsh.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: t,
                    guild_id: n,
                    page: a,
                    page_size: s,
                    category_id: d,
                    locale: E.default.locale,
                    integration_type: c,
                    min_user_install_command_count: u,
                    exclude_apps_with_custom_install_url: I,
                    exclude_non_embedded_apps: A,
                    exclude_embedded_apps_without_primary_entry_point_app_command: S,
                    source: N,
                },
                rejectWithError: !0,
            });
            o.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                query: t,
                guildId: n,
                page: a,
                pageSize: s,
                categoryId: d,
                integrationType: c,
                result: {
                    results: e.body.results,
                    countsByCategory: e.body.counts_by_category,
                    totalCount: e.body.result_count,
                    totalPages: e.body.num_pages,
                    type: e.body.type,
                    loadId: e.body.load_id,
                },
                minUserInstallCommandCount: u,
                excludeAppsWithCustomInstallUrl: I,
                excludeNonEmbeddedApps: A,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: S,
                source: N,
            }),
                r?.(e.body.result_count);
        } catch (e) {
            o.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                query: t,
                guildId: n,
                page: a,
                pageSize: s,
                categoryId: d,
                integrationType: c,
                minUserInstallCommandCount: u,
                excludeAppsWithCustomInstallUrl: I,
                excludeNonEmbeddedApps: A,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: S,
                source: N,
            });
        }
    }
}
async function D() {
    let { surface: e = s.K.APPLICATION_DIRECTORY, activeState: t = r.W.ACTIVE } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = d.default.disableAppCollectionsCache,
        i = Date.now(),
        _ = A.A.getFetchState({ surface: e, activeState: t }),
        u = A.A.getLastFetchTimeMs({ surface: e, activeState: t });
    if (_ === A.e.FETCHING) return;
    let I = !n && t === r.W.ACTIVE;
    if (!I || null == u || !(u + 6e5 > i)) {
        o.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS", surface: e, activeState: t });
        try {
            let n = await l.Bo.get({
                url: O.Rsh.APPLICATION_DIRECTORY_COLLECTIONS,
                query: {
                    surface: e,
                    active_state: t,
                    platform: (0, c.isAndroid)() ? a.T.ANDROID : (0, c.isIOS)() ? a.T.IOS : a.T.WEB,
                    locale: E.default.locale,
                    cache: I,
                },
                rejectWithError: !0,
            });
            o.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
                collections: n.body,
                surface: e,
                activeState: t,
            });
        } catch (n) {
            o.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE", surface: e, activeState: t });
        }
    }
}
async function h() {
    let e = Date.now(),
        t = N.A.getFetchState(),
        n = N.A.getLastFetchTimeMs(),
        i = N.A.getNextFetchRetryTimeMs();
    if (t !== N.e.FETCHING && (null == n || !(n + 864e5 > e)) && (null == i || !(e < i))) {
        o.h.dispatch({ type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS" });
        try {
            let e = await l.Bo.get({ url: O.Rsh.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS, rejectWithError: !1 });
            o.h.dispatch({
                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
                guildIdToApplicationIds: e.body,
            });
        } catch (t) {
            let e = t?.status === 429;
            o.h.dispatch({
                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
                retryAfterSeconds: e ? t?.body?.retry_after : void 0,
            });
        }
    }
}
