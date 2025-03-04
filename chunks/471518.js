n.d(t, {
    CP: () => C,
    T4: () => R,
    XK: () => w,
    g5: () => L,
    gZ: () => N,
    i6: () => A,
    yC: () => P
}),
    n(47120);
var r = n(261470),
    i = n(535655),
    o = n(344372),
    a = n(973693),
    s = n(288385),
    l = n(544891),
    c = n(570140);
n(432877);
var u = n(706454),
    d = n(857192),
    f = n(358085),
    _ = n(370210),
    p = n(678694),
    h = n(425986),
    g = n(177653),
    m = n(255333),
    E = n(204298),
    v = n(981631);
let b = 1000,
    y = 5000,
    O = 10,
    S = 86400000,
    I = 600000,
    T = new Map();
async function N(e) {
    var t;
    let n = Date.now(),
        i = null !== (t = T.get(e)) && void 0 !== t ? t : 0;
    if (_.Z.getApplicationFetchState(e) === _.M.FETCHING || _.Z.isInvalidApplication(e) || n < i + I) return;
    T.set(e, n),
        c.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
            applicationId: e
        });
    let o = new r.Z(b, y),
        a = (e, t) =>
            429 === e.status &&
            o.fails < O &&
            (o.fail(() => {
                t(void 0, a);
            }),
            !0);
    try {
        let t = (
            await l.tn.get({
                url: v.ANM.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: o,
                retries: O,
                interceptResponse: a,
                rejectWithError: !1
            })
        ).body;
        c.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
            application: t
        });
    } catch (t) {
        c.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
            applicationId: e,
            isInvalidApplication: !0
        });
    }
}
async function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = Date.now(),
        r = _.Z.getApplicationFetchState(e),
        i = _.Z.getApplicationLastFetchTime(e),
        { dontRefetchMs: o, noCache: a } = t,
        s = null != i && i + (null != o ? o : I) > n;
    if (r !== _.M.FETCHING && !s) {
        c.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
            applicationId: e
        });
        try {
            let t = await l.tn.get({
                url: v.ANM.APPLICATION_DIRECTORY_APPLICATION(e),
                query: {
                    locale: u.default.locale,
                    nocache: a
                },
                rejectWithError: !0
            });
            c.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
                application: t.body
            });
        } catch (t) {
            c.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
                applicationId: e,
                isInvalidApplication: !0
            });
        }
    }
}
async function C() {
    let e = Date.now(),
        t = p.Z.getLastFetchTimeMs();
    if (null != t && t + I > e) return;
    let n = await l.tn.get({
        url: v.ANM.APPLICATION_DIRECTORY_CATEGORIES,
        query: { locale: u.default.locale },
        rejectWithError: !1
    });
    c.Z.dispatch({
        type: 'APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS',
        categories: n.body
    });
}
async function R(e) {
    var t;
    let { applicationId: n, guildId: r, options: i } = e,
        { page: o } = null != i ? i : {},
        a = Date.now(),
        s = m.Z.getFetchState({
            applicationId: n,
            guildId: r
        }),
        { lastFetchTimeMs: d } =
            null !==
                (t = m.Z.getSimilarApplications({
                    applicationId: n,
                    guildId: r
                })) && void 0 !== t
                ? t
                : {};
    if (s !== m.M.FETCHING && (null == d || !(d + I > a))) {
        c.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS',
            applicationId: n,
            guildId: r,
            page: o
        });
        try {
            let e = await l.tn.get({
                url: v.ANM.APPLICATION_DIRECTORY_SIMILAR(n),
                query: {
                    guild_id: r,
                    page: o,
                    locale: u.default.locale
                },
                rejectWithError: !0
            });
            c.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS',
                applicationId: n,
                guildId: r,
                similarApplications: e.body.applications,
                loadId: e.body.load_id,
                page: o,
                totalPages: e.body.num_pages
            });
        } catch (e) {
            c.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE',
                applicationId: n,
                guildId: r,
                page: o
            });
        }
    }
}
async function P(e) {
    var t;
    let { query: n, guildId: r, options: i, onSuccessCallback: o } = e,
        { page: a, pageSize: d, categoryId: f, integrationType: _, minUserInstallCommandCount: p, excludeAppsWithCustomInstallUrl: h, excludeNonEmbeddedApps: m, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E, source: b = s.F.APP_DIRECTORY } = null != i ? i : {},
        y = Date.now(),
        O = g.Z.getFetchState({
            query: n,
            guildId: r,
            page: a,
            pageSize: d,
            categoryId: f,
            integrationType: _
        }),
        { lastFetchTimeMs: S } =
            null !==
                (t = g.Z.getSearchResults({
                    query: n,
                    guildId: r,
                    page: a,
                    pageSize: d,
                    categoryId: f,
                    integrationType: _
                })) && void 0 !== t
                ? t
                : {};
    if (O !== g.M.FETCHING && (null == S || !(S + I > y))) {
        c.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_SEARCH',
            query: n,
            guildId: r,
            page: a,
            pageSize: d,
            categoryId: f,
            integrationType: _,
            minUserInstallCommandCount: p,
            excludeAppsWithCustomInstallUrl: h,
            excludeNonEmbeddedApps: m,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
            source: b
        });
        try {
            let e = await l.tn.get({
                url: v.ANM.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: n,
                    guild_id: r,
                    page: a,
                    page_size: d,
                    category_id: f,
                    locale: u.default.locale,
                    integration_type: _,
                    min_user_install_command_count: p,
                    exclude_apps_with_custom_install_url: h,
                    exclude_non_embedded_apps: m,
                    exclude_embedded_apps_without_primary_entry_point_app_command: E,
                    source: b
                },
                rejectWithError: !0
            });
            c.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS',
                query: n,
                guildId: r,
                page: a,
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
                excludeNonEmbeddedApps: m,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
                source: b
            }),
                null == o || o(e.body.result_count);
        } catch (e) {
            c.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE',
                query: n,
                guildId: r,
                page: a,
                pageSize: d,
                categoryId: f,
                integrationType: _,
                minUserInstallCommandCount: p,
                excludeAppsWithCustomInstallUrl: h,
                excludeNonEmbeddedApps: m,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
                source: b
            });
        }
    }
}
function D() {
    return (0, f.isAndroid)() ? o.R.ANDROID : (0, f.isIOS)() ? o.R.IOS : o.R.WEB;
}
async function w() {
    let { surface: e = a.Y.APPLICATION_DIRECTORY, activeState: t = i.E.ACTIVE } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = d.default.disableAppCollectionsCache,
        r = Date.now(),
        o = h.Z.getFetchState({
            surface: e,
            activeState: t
        }),
        s = h.Z.getLastFetchTimeMs({
            surface: e,
            activeState: t
        });
    if (o === h.M.FETCHING) return;
    let f = !n && t === i.E.ACTIVE;
    if (!f || null == s || !(s + I > r)) {
        c.Z.dispatch({
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
                    platform: D(),
                    locale: u.default.locale,
                    cache: f
                },
                rejectWithError: !0
            });
            c.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS',
                collections: n.body,
                surface: e,
                activeState: t
            });
        } catch (n) {
            c.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE',
                surface: e,
                activeState: t
            });
        }
    }
}
async function L() {
    let e = Date.now(),
        t = E.Z.getFetchState(),
        n = E.Z.getLastFetchTimeMs(),
        r = E.Z.getNextFetchRetryTimeMs();
    if (t !== E.M.FETCHING && (null == n || !(n + S > e)) && (null == r || !(e < r))) {
        c.Z.dispatch({ type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS' });
        try {
            let e = await l.tn.get({
                url: v.ANM.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS,
                rejectWithError: !1
            });
            c.Z.dispatch({
                type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS',
                guildIdToApplicationIds: e.body
            });
        } catch (t) {
            var i;
            let e = (null == t ? void 0 : t.status) === 429;
            c.Z.dispatch({
                type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE',
                retryAfterSeconds: e ? (null == t ? void 0 : null === (i = t.body) || void 0 === i ? void 0 : i.retry_after) : void 0
            });
        }
    }
}
