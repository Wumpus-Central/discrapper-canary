n.d(t, { $P: () => R, An: () => g, Di: () => m, bW: () => O, eP: () => p, wD: () => L, xZ: () => C });
var i = n(158390),
    a = n(724002),
    r = n(277419),
    s = n(287174),
    l = n(994369),
    o = n(636537),
    d = n(228366);
n(865116);
var c = n(773669),
    _ = n(111162),
    E = n(723702),
    u = n(212534),
    A = n(38181),
    I = n(111042),
    T = n(651753),
    h = n(82293),
    S = n(680646),
    N = n(652215);
let f = new Map();
async function p(e) {
    let t = Date.now(),
        n = f.get(e) ?? 0;
    if (u.A.getApplicationFetchState(e) === u.e.FETCHING || u.A.isInvalidApplication(e) || t < n + 6e5) return;
    f.set(e, t), d.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: e });
    let a = new i.A(1e3, 5e3),
        r = (e, t) =>
            429 === e.status &&
            a.fails < 10 &&
            (a.fail(() => {
                t(void 0, r);
            }),
            !0);
    try {
        let t = (
            await o.Bo.get({
                url: N.Rsh.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: a,
                retries: 10,
                interceptResponse: r,
                rejectWithError: !1,
            })
        ).body;
        d.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: t });
    } catch (t) {
        d.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
            applicationId: e,
            isInvalidApplication: !0,
        });
    }
}
async function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = Date.now(),
        i = u.A.getApplicationFetchState(e),
        a = u.A.getApplicationLastFetchTime(e),
        { dontRefetchMs: r, noCache: s } = t;
    if (i !== u.e.FETCHING && !(null != a && a + (r ?? 6e5) > n)) {
        d.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: e });
        try {
            let t = await o.Bo.get({
                url: N.Rsh.APPLICATION_DIRECTORY_APPLICATION(e),
                query: { locale: c.default.locale, nocache: s },
                rejectWithError: !0,
            });
            d.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: t.body });
        } catch (t) {
            d.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                applicationId: e,
                isInvalidApplication: !0,
            });
        }
    }
}
async function O() {
    let e = Date.now(),
        t = A.A.getLastFetchTimeMs();
    if (null != t && t + 6e5 > e) return;
    let n = await o.Bo.get({
        url: N.Rsh.APPLICATION_DIRECTORY_CATEGORIES,
        query: { locale: c.default.locale },
        rejectWithError: !1,
    });
    d.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS", categories: n.body });
}
async function C(e) {
    let { applicationId: t, guildId: n, options: i } = e,
        { page: a } = i ?? {},
        r = Date.now(),
        s = h.A.getFetchState({ applicationId: t, guildId: n }),
        { lastFetchTimeMs: l } = h.A.getSimilarApplications({ applicationId: t, guildId: n }) ?? {};
    if (s !== h.e.FETCHING && (null == l || !(l + 6e5 > r))) {
        d.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
            applicationId: t,
            guildId: n,
            page: a,
        });
        try {
            let e = await o.Bo.get({
                url: N.Rsh.APPLICATION_DIRECTORY_SIMILAR(t),
                query: { guild_id: n, page: a, locale: c.default.locale },
                rejectWithError: !0,
            });
            d.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                applicationId: t,
                guildId: n,
                similarApplications: e.body.applications,
                loadId: e.body.load_id,
                page: a,
                totalPages: e.body.num_pages,
            });
        } catch (e) {
            d.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                applicationId: t,
                guildId: n,
                page: a,
            });
        }
    }
}
async function R(e) {
    let { query: t, guildId: n, options: i, onSuccessCallback: a } = e,
        {
            page: r,
            pageSize: s,
            categoryId: _,
            integrationType: E,
            minUserInstallCommandCount: u,
            excludeAppsWithCustomInstallUrl: A,
            excludeNonEmbeddedApps: I,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: h,
            source: S = l.V.APP_DIRECTORY,
        } = i ?? {},
        f = Date.now(),
        p = T.A.getFetchState({ query: t, guildId: n, page: r, pageSize: s, categoryId: _, integrationType: E }),
        { lastFetchTimeMs: m } =
            T.A.getSearchResults({ query: t, guildId: n, page: r, pageSize: s, categoryId: _, integrationType: E }) ??
            {};
    if (p !== T.e.FETCHING && (null == m || !(m + 6e5 > f))) {
        d.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
            query: t,
            guildId: n,
            page: r,
            pageSize: s,
            categoryId: _,
            integrationType: E,
            minUserInstallCommandCount: u,
            excludeAppsWithCustomInstallUrl: A,
            excludeNonEmbeddedApps: I,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: h,
            source: S,
        });
        try {
            let e = await o.Bo.get({
                url: N.Rsh.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: t,
                    guild_id: n,
                    page: r,
                    page_size: s,
                    category_id: _,
                    locale: c.default.locale,
                    integration_type: E,
                    min_user_install_command_count: u,
                    exclude_apps_with_custom_install_url: A,
                    exclude_non_embedded_apps: I,
                    exclude_embedded_apps_without_primary_entry_point_app_command: h,
                    source: S,
                },
                rejectWithError: !0,
            });
            d.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                query: t,
                guildId: n,
                page: r,
                pageSize: s,
                categoryId: _,
                integrationType: E,
                result: {
                    results: e.body.results,
                    countsByCategory: e.body.counts_by_category,
                    totalCount: e.body.result_count,
                    totalPages: e.body.num_pages,
                    type: e.body.type,
                    loadId: e.body.load_id,
                },
                minUserInstallCommandCount: u,
                excludeAppsWithCustomInstallUrl: A,
                excludeNonEmbeddedApps: I,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: h,
                source: S,
            }),
                a?.(e.body.result_count);
        } catch (e) {
            d.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                query: t,
                guildId: n,
                page: r,
                pageSize: s,
                categoryId: _,
                integrationType: E,
                minUserInstallCommandCount: u,
                excludeAppsWithCustomInstallUrl: A,
                excludeNonEmbeddedApps: I,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: h,
                source: S,
            });
        }
    }
}
async function g() {
    let { surface: e = s.K.APPLICATION_DIRECTORY, activeState: t = a.W.ACTIVE } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = _.default.disableAppCollectionsCache,
        i = Date.now(),
        l = I.A.getFetchState({ surface: e, activeState: t }),
        u = I.A.getLastFetchTimeMs({ surface: e, activeState: t });
    if (l === I.e.FETCHING) return;
    let A = !n && t === a.W.ACTIVE;
    if (!A || null == u || !(u + 6e5 > i)) {
        d.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS", surface: e, activeState: t });
        try {
            let n = await o.Bo.get({
                url: N.Rsh.APPLICATION_DIRECTORY_COLLECTIONS,
                query: {
                    surface: e,
                    active_state: t,
                    platform: (0, E.isAndroid)() ? r.T.ANDROID : (0, E.isIOS)() ? r.T.IOS : r.T.WEB,
                    locale: c.default.locale,
                    cache: A,
                },
                rejectWithError: !0,
            });
            d.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
                collections: n.body,
                surface: e,
                activeState: t,
            });
        } catch (n) {
            d.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE", surface: e, activeState: t });
        }
    }
}
async function L() {
    let e = Date.now(),
        t = S.A.getFetchState(),
        n = S.A.getLastFetchTimeMs(),
        i = S.A.getNextFetchRetryTimeMs();
    if (t !== S.e.FETCHING && (null == n || !(n + 864e5 > e)) && (null == i || !(e < i))) {
        d.h.dispatch({ type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS" });
        try {
            let e = await o.Bo.get({ url: N.Rsh.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS, rejectWithError: !1 });
            d.h.dispatch({
                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
                guildIdToApplicationIds: e.body,
            });
        } catch (t) {
            let e = t?.status === 429;
            d.h.dispatch({
                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
                retryAfterSeconds: e ? t?.body?.retry_after : void 0,
            });
        }
    }
}
