n.d(t, {
    CP: () => R,
    T4: () => O,
    XK: () => L,
    g5: () => P,
    gZ: () => N,
    i6: () => C,
    yC: () => D
}),
    n(47120);
var i = n(261470),
    r = n(535655),
    a = n(344372),
    s = n(973693),
    o = n(288385),
    l = n(544891),
    u = n(570140);
n(432877);
var c = n(706454),
    d = n(857192),
    f = n(358085),
    _ = n(264043),
    p = n(894653),
    h = n(368862),
    m = n(809547),
    g = n(303383),
    E = n(973001),
    v = n(981631);
let y = 1000,
    I = 5000,
    b = 10,
    T = 86400000,
    S = 600000,
    A = new Map();
async function N(e) {
    var t;
    let n = Date.now(),
        r = null !== (t = A.get(e)) && void 0 !== t ? t : 0;
    if (_.Z.getApplicationFetchState(e) === _.M.FETCHING || _.Z.isInvalidApplication(e) || n < r + S) return;
    A.set(e, n),
        u.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
            applicationId: e
        });
    let a = new i.Z(y, I),
        s = (e, t) =>
            429 === e.status &&
            a.fails < b &&
            (a.fail(() => {
                t(void 0, s);
            }),
            !0);
    try {
        let t = (
            await l.tn.get({
                url: v.ANM.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: a,
                retries: b,
                interceptResponse: s,
                rejectWithError: !1
            })
        ).body;
        u.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
            application: t
        });
    } catch (t) {
        u.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
            applicationId: e,
            isInvalidApplication: !0
        });
    }
}
async function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = Date.now(),
        i = _.Z.getApplicationFetchState(e),
        r = _.Z.getApplicationLastFetchTime(e),
        { dontRefetchMs: a, noCache: s } = t,
        o = null != r && r + (null != a ? a : S) > n;
    if (i !== _.M.FETCHING && !o) {
        u.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
            applicationId: e
        });
        try {
            let t = await l.tn.get({
                url: v.ANM.APPLICATION_DIRECTORY_APPLICATION(e),
                query: {
                    locale: c.default.locale,
                    nocache: s
                },
                rejectWithError: !0
            });
            u.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
                application: t.body
            });
        } catch (t) {
            u.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
                applicationId: e,
                isInvalidApplication: !0
            });
        }
    }
}
async function R() {
    let e = Date.now(),
        t = p.Z.getLastFetchTimeMs();
    if (null != t && t + S > e) return;
    let n = await l.tn.get({
        url: v.ANM.APPLICATION_DIRECTORY_CATEGORIES,
        query: { locale: c.default.locale },
        rejectWithError: !1
    });
    u.Z.dispatch({
        type: 'APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS',
        categories: n.body
    });
}
async function O(e) {
    var t;
    let { applicationId: n, guildId: i, options: r } = e,
        { page: a } = null != r ? r : {},
        s = Date.now(),
        o = g.Z.getFetchState({
            applicationId: n,
            guildId: i
        }),
        { lastFetchTimeMs: d } =
            null !==
                (t = g.Z.getSimilarApplications({
                    applicationId: n,
                    guildId: i
                })) && void 0 !== t
                ? t
                : {};
    if (o !== g.M.FETCHING && (null == d || !(d + S > s))) {
        u.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS',
            applicationId: n,
            guildId: i,
            page: a
        });
        try {
            let e = await l.tn.get({
                url: v.ANM.APPLICATION_DIRECTORY_SIMILAR(n),
                query: {
                    guild_id: i,
                    page: a,
                    locale: c.default.locale
                },
                rejectWithError: !0
            });
            u.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS',
                applicationId: n,
                guildId: i,
                similarApplications: e.body.applications,
                loadId: e.body.load_id,
                page: a,
                totalPages: e.body.num_pages
            });
        } catch (e) {
            u.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE',
                applicationId: n,
                guildId: i,
                page: a
            });
        }
    }
}
async function D(e) {
    var t;
    let { query: n, guildId: i, options: r, onSuccessCallback: a } = e,
        { page: s, pageSize: d, categoryId: f, integrationType: _, minUserInstallCommandCount: p, excludeAppsWithCustomInstallUrl: h, excludeNonEmbeddedApps: g, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E, source: y = o.F.APP_DIRECTORY } = null != r ? r : {},
        I = Date.now(),
        b = m.Z.getFetchState({
            query: n,
            guildId: i,
            page: s,
            pageSize: d,
            categoryId: f,
            integrationType: _
        }),
        { lastFetchTimeMs: T } =
            null !==
                (t = m.Z.getSearchResults({
                    query: n,
                    guildId: i,
                    page: s,
                    pageSize: d,
                    categoryId: f,
                    integrationType: _
                })) && void 0 !== t
                ? t
                : {};
    if (b !== m.M.FETCHING && (null == T || !(T + S > I))) {
        u.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_SEARCH',
            query: n,
            guildId: i,
            page: s,
            pageSize: d,
            categoryId: f,
            integrationType: _,
            minUserInstallCommandCount: p,
            excludeAppsWithCustomInstallUrl: h,
            excludeNonEmbeddedApps: g,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
            source: y
        });
        try {
            let e = await l.tn.get({
                url: v.ANM.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: n,
                    guild_id: i,
                    page: s,
                    page_size: d,
                    category_id: f,
                    locale: c.default.locale,
                    integration_type: _,
                    min_user_install_command_count: p,
                    exclude_apps_with_custom_install_url: h,
                    exclude_non_embedded_apps: g,
                    exclude_embedded_apps_without_primary_entry_point_app_command: E,
                    source: y
                },
                rejectWithError: !0
            });
            u.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS',
                query: n,
                guildId: i,
                page: s,
                pageSize: d,
                categoryId: f,
                integrationType: _,
                result: {
                    results: e.body.results,
                    countsByCategory: e.body.counts_by_category,
                    totalCount: e.body.result_count,
                    totalPages: e.body.num_pages,
                    type: e.body.type,
                    loadId: e.body.load_id
                },
                minUserInstallCommandCount: p,
                excludeAppsWithCustomInstallUrl: h,
                excludeNonEmbeddedApps: g,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
                source: y
            }),
                null == a || a(e.body.result_count);
        } catch (e) {
            u.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE',
                query: n,
                guildId: i,
                page: s,
                pageSize: d,
                categoryId: f,
                integrationType: _,
                minUserInstallCommandCount: p,
                excludeAppsWithCustomInstallUrl: h,
                excludeNonEmbeddedApps: g,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
                source: y
            });
        }
    }
}
function x() {
    return (0, f.isAndroid)() ? a.R.ANDROID : (0, f.isIOS)() ? a.R.IOS : a.R.WEB;
}
async function L() {
    let { surface: e = s.Y.APPLICATION_DIRECTORY, activeState: t = r.E.ACTIVE } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = d.default.disableAppCollectionsCache,
        i = Date.now(),
        a = h.Z.getFetchState({
            surface: e,
            activeState: t
        }),
        o = h.Z.getLastFetchTimeMs({
            surface: e,
            activeState: t
        });
    if (a === h.M.FETCHING) return;
    let f = !n && t === r.E.ACTIVE;
    if (!f || null == o || !(o + S > i)) {
        u.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS',
            surface: e,
            activeState: t
        });
        try {
            let n = await l.tn.get({
                url: v.ANM.APPLICATION_DIRECTORY_COLLECTIONS,
                query: {
                    surface: e,
                    active_state: t,
                    platform: x(),
                    locale: c.default.locale,
                    cache: f
                },
                rejectWithError: !0
            });
            u.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS',
                collections: n.body,
                surface: e,
                activeState: t
            });
        } catch (n) {
            u.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE',
                surface: e,
                activeState: t
            });
        }
    }
}
async function P() {
    let e = Date.now(),
        t = E.Z.getFetchState(),
        n = E.Z.getLastFetchTimeMs(),
        i = E.Z.getNextFetchRetryTimeMs();
    if (t !== E.M.FETCHING && (null == n || !(n + T > e)) && (null == i || !(e < i))) {
        u.Z.dispatch({ type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS' });
        try {
            let e = await l.tn.get({
                url: v.ANM.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS,
                rejectWithError: !1
            });
            u.Z.dispatch({
                type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS',
                guildIdToApplicationIds: e.body
            });
        } catch (t) {
            var r;
            let e = (null == t ? void 0 : t.status) === 429;
            u.Z.dispatch({
                type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE',
                retryAfterSeconds: e ? (null == t ? void 0 : null === (r = t.body) || void 0 === r ? void 0 : r.retry_after) : void 0
            });
        }
    }
}
