n.d(t, {
    $P: () => w,
    An: () => D,
    Di: () => C,
    bW: () => N,
    eP: () => T,
    wD: () => x,
    xZ: () => R,
}),
    n(896048);
var r = n(158390),
    i = n(724002),
    a = n(277419),
    s = n(287174),
    o = n(994369),
    l = n(562465),
    c = n(73153);
n(865116);
var u = n(773669),
    d = n(111162),
    f = n(723702),
    p = n(212534),
    _ = n(38181),
    h = n(111042),
    m = n(651753),
    g = n(82293),
    E = n(680646),
    b = n(652215);
let y = 1e3,
    O = 5e3,
    A = 10,
    v = 864e5,
    S = 6e5,
    I = new Map();
async function T(e) {
    var t;
    let n = Date.now(),
        i = null != (t = I.get(e)) ? t : 0;
    if (p.A.getApplicationFetchState(e) === p.e.FETCHING || p.A.isInvalidApplication(e) || n < i + S) return;
    I.set(e, n),
        c.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
            applicationId: e,
        });
    let a = new r.A(y, O),
        s = (e, t) =>
            429 === e.status &&
            a.fails < A &&
            (a.fail(() => {
                t(void 0, s);
            }),
            !0);
    try {
        let t = (
            await l.Bo.get({
                url: b.Rsh.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: a,
                retries: A,
                interceptResponse: s,
                rejectWithError: !1,
            })
        ).body;
        c.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
            application: t,
        });
    } catch (t) {
        c.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
            applicationId: e,
            isInvalidApplication: !0,
        });
    }
}
async function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = Date.now(),
        r = p.A.getApplicationFetchState(e),
        i = p.A.getApplicationLastFetchTime(e),
        { dontRefetchMs: a, noCache: s } = t,
        o = null != i && i + (null != a ? a : S) > n;
    if (r !== p.e.FETCHING && !o) {
        c.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
            applicationId: e,
        });
        try {
            let t = await l.Bo.get({
                url: b.Rsh.APPLICATION_DIRECTORY_APPLICATION(e),
                query: {
                    locale: u.default.locale,
                    nocache: s,
                },
                rejectWithError: !0,
            });
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                application: t.body,
            });
        } catch (t) {
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                applicationId: e,
                isInvalidApplication: !0,
            });
        }
    }
}
async function N() {
    let e = Date.now(),
        t = _.A.getLastFetchTimeMs();
    if (null != t && t + S > e) return;
    let n = await l.Bo.get({
        url: b.Rsh.APPLICATION_DIRECTORY_CATEGORIES,
        query: {
            locale: u.default.locale,
        },
        rejectWithError: !1,
    });
    c.h.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
        categories: n.body,
    });
}
async function R(e) {
    var t;
    let { applicationId: n, guildId: r, options: i } = e,
        { page: a } = null != i ? i : {},
        s = Date.now(),
        o = g.A.getFetchState({
            applicationId: n,
            guildId: r,
        }),
        { lastFetchTimeMs: d } =
            null !=
            (t = g.A.getSimilarApplications({
                applicationId: n,
                guildId: r,
            }))
                ? t
                : {};
    if (o !== g.e.FETCHING && (null == d || !(d + S > s))) {
        c.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
            applicationId: n,
            guildId: r,
            page: a,
        });
        try {
            let e = await l.Bo.get({
                url: b.Rsh.APPLICATION_DIRECTORY_SIMILAR(n),
                query: {
                    guild_id: r,
                    page: a,
                    locale: u.default.locale,
                },
                rejectWithError: !0,
            });
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                applicationId: n,
                guildId: r,
                similarApplications: e.body.applications,
                loadId: e.body.load_id,
                page: a,
                totalPages: e.body.num_pages,
            });
        } catch (e) {
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                applicationId: n,
                guildId: r,
                page: a,
            });
        }
    }
}
async function w(e) {
    var t;
    let { query: n, guildId: r, options: i, onSuccessCallback: a } = e,
        {
            page: s,
            pageSize: d,
            categoryId: f,
            integrationType: p,
            minUserInstallCommandCount: _,
            excludeAppsWithCustomInstallUrl: h,
            excludeNonEmbeddedApps: g,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
            source: y = o.V.APP_DIRECTORY,
        } = null != i ? i : {},
        O = Date.now(),
        A = m.A.getFetchState({
            query: n,
            guildId: r,
            page: s,
            pageSize: d,
            categoryId: f,
            integrationType: p,
        }),
        { lastFetchTimeMs: v } =
            null !=
            (t = m.A.getSearchResults({
                query: n,
                guildId: r,
                page: s,
                pageSize: d,
                categoryId: f,
                integrationType: p,
            }))
                ? t
                : {};
    if (A !== m.e.FETCHING && (null == v || !(v + S > O))) {
        c.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
            query: n,
            guildId: r,
            page: s,
            pageSize: d,
            categoryId: f,
            integrationType: p,
            minUserInstallCommandCount: _,
            excludeAppsWithCustomInstallUrl: h,
            excludeNonEmbeddedApps: g,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
            source: y,
        });
        try {
            let e = await l.Bo.get({
                url: b.Rsh.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: n,
                    guild_id: r,
                    page: s,
                    page_size: d,
                    category_id: f,
                    locale: u.default.locale,
                    integration_type: p,
                    min_user_install_command_count: _,
                    exclude_apps_with_custom_install_url: h,
                    exclude_non_embedded_apps: g,
                    exclude_embedded_apps_without_primary_entry_point_app_command: E,
                    source: y,
                },
                rejectWithError: !0,
            });
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                query: n,
                guildId: r,
                page: s,
                pageSize: d,
                categoryId: f,
                integrationType: p,
                result: {
                    results: e.body.results,
                    countsByCategory: e.body.counts_by_category,
                    totalCount: e.body.result_count,
                    totalPages: e.body.num_pages,
                    type: e.body.type,
                    loadId: e.body.load_id,
                },
                minUserInstallCommandCount: _,
                excludeAppsWithCustomInstallUrl: h,
                excludeNonEmbeddedApps: g,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
                source: y,
            }),
                null == a || a(e.body.result_count);
        } catch (e) {
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                query: n,
                guildId: r,
                page: s,
                pageSize: d,
                categoryId: f,
                integrationType: p,
                minUserInstallCommandCount: _,
                excludeAppsWithCustomInstallUrl: h,
                excludeNonEmbeddedApps: g,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
                source: y,
            });
        }
    }
}

function P() {
    return (0, f.isAndroid)() ? a.T.ANDROID : (0, f.isIOS)() ? a.T.IOS : a.T.WEB;
}
async function D() {
    let { surface: e = s.K.APPLICATION_DIRECTORY, activeState: t = i.W.ACTIVE } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = d.default.disableAppCollectionsCache,
        r = Date.now(),
        a = h.A.getFetchState({
            surface: e,
            activeState: t,
        }),
        o = h.A.getLastFetchTimeMs({
            surface: e,
            activeState: t,
        });
    if (a === h.e.FETCHING) return;
    let f = !n && t === i.W.ACTIVE;
    if (!f || null == o || !(o + S > r)) {
        c.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
            surface: e,
            activeState: t,
        });
        try {
            let n = await l.Bo.get({
                url: b.Rsh.APPLICATION_DIRECTORY_COLLECTIONS,
                query: {
                    surface: e,
                    active_state: t,
                    platform: P(),
                    locale: u.default.locale,
                    cache: f,
                },
                rejectWithError: !0,
            });
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
                collections: n.body,
                surface: e,
                activeState: t,
            });
        } catch (n) {
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
                surface: e,
                activeState: t,
            });
        }
    }
}
async function x() {
    let e = Date.now(),
        t = E.A.getFetchState(),
        n = E.A.getLastFetchTimeMs(),
        r = E.A.getNextFetchRetryTimeMs();
    if (t !== E.e.FETCHING && (null == n || !(n + v > e)) && (null == r || !(e < r))) {
        c.h.dispatch({
            type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS",
        });
        try {
            let e = await l.Bo.get({
                url: b.Rsh.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS,
                rejectWithError: !1,
            });
            c.h.dispatch({
                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
                guildIdToApplicationIds: e.body,
            });
        } catch (t) {
            var i;
            let e = (null == t ? void 0 : t.status) === 429;
            c.h.dispatch({
                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
                retryAfterSeconds: e ? (null == t || null == (i = t.body) ? void 0 : i.retry_after) : void 0,
            });
        }
    }
}
