r.d(n, {
    CP: function () {
        return D;
    },
    T4: function () {
        return L;
    },
    XK: function () {
        return P;
    },
    g5: function () {
        return M;
    },
    gZ: function () {
        return R;
    },
    i6: function () {
        return O;
    },
    yC: function () {
        return x;
    }
});
var i = r(47120);
var a = r(261470),
    s = r(535655),
    o = r(344372),
    l = r(973693),
    u = r(288385),
    c = r(544891),
    d = r(570140);
r(432877);
var f = r(706454),
    _ = r(857192),
    h = r(358085),
    p = r(264043),
    m = r(894653),
    g = r(368862),
    E = r(809547),
    v = r(303383),
    I = r(973001),
    T = r(981631);
let b = 1000,
    y = 5000,
    S = 10,
    A = 86400000,
    N = 600000,
    C = new Map();
async function R(e) {
    var n;
    let r = Date.now(),
        i = null !== (n = C.get(e)) && void 0 !== n ? n : 0;
    if (p.Z.getApplicationFetchState(e) === p.M.FETCHING || p.Z.isInvalidApplication(e) || r < i + N) return;
    C.set(e, r),
        d.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
            applicationId: e
        });
    let s = new a.Z(b, y),
        o = (e, n) =>
            429 === e.status &&
            !!(s.fails < S) &&
            (s.fail(() => {
                n(void 0, o);
            }),
            !0);
    try {
        let n = (
            await c.tn.get({
                url: T.ANM.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: s,
                retries: S,
                interceptResponse: o,
                rejectWithError: !1
            })
        ).body;
        d.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
            application: n
        });
    } catch (n) {
        d.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
            applicationId: e,
            isInvalidApplication: !0
        });
    }
}
async function O(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = Date.now(),
        i = p.Z.getApplicationFetchState(e),
        a = p.Z.getApplicationLastFetchTime(e),
        { dontRefetchMs: s, noCache: o } = n,
        l = null != a && a + (null != s ? s : N) > r;
    if (i !== p.M.FETCHING && !l) {
        d.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
            applicationId: e
        });
        try {
            let n = await c.tn.get({
                url: T.ANM.APPLICATION_DIRECTORY_APPLICATION(e),
                query: {
                    locale: f.default.locale,
                    nocache: o
                },
                rejectWithError: !0
            });
            d.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
                application: n.body
            });
        } catch (n) {
            d.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
                applicationId: e,
                isInvalidApplication: !0
            });
        }
    }
}
async function D() {
    let e = Date.now(),
        n = m.Z.getLastFetchTimeMs();
    if (null != n && n + N > e) return;
    let r = await c.tn.get({
        url: T.ANM.APPLICATION_DIRECTORY_CATEGORIES,
        query: { locale: f.default.locale },
        rejectWithError: !1
    });
    d.Z.dispatch({
        type: 'APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS',
        categories: r.body
    });
}
async function L(e) {
    var n;
    let { applicationId: r, guildId: i, options: a } = e,
        { page: s } = null != a ? a : {},
        o = Date.now(),
        l = v.Z.getFetchState({
            applicationId: r,
            guildId: i
        }),
        { lastFetchTimeMs: u } =
            null !==
                (n = v.Z.getSimilarApplications({
                    applicationId: r,
                    guildId: i
                })) && void 0 !== n
                ? n
                : {};
    if (l !== v.M.FETCHING && (null == u || !(u + N > o))) {
        d.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS',
            applicationId: r,
            guildId: i,
            page: s
        });
        try {
            let e = await c.tn.get({
                url: T.ANM.APPLICATION_DIRECTORY_SIMILAR(r),
                query: {
                    guild_id: i,
                    page: s,
                    locale: f.default.locale
                },
                rejectWithError: !0
            });
            d.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS',
                applicationId: r,
                guildId: i,
                similarApplications: e.body.applications,
                loadId: e.body.load_id,
                page: s,
                totalPages: e.body.num_pages
            });
        } catch (e) {
            d.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE',
                applicationId: r,
                guildId: i,
                page: s
            });
        }
    }
}
async function x(e) {
    var n;
    let { query: r, guildId: i, options: a, onSuccessCallback: s } = e,
        { page: o, pageSize: l, categoryId: _, integrationType: h, minUserInstallCommandCount: p, excludeAppsWithCustomInstallUrl: m, excludeNonEmbeddedApps: g, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: v, source: I = u.F.APP_DIRECTORY } = null != a ? a : {},
        b = Date.now(),
        y = E.Z.getFetchState({
            query: r,
            guildId: i,
            page: o,
            pageSize: l,
            categoryId: _,
            integrationType: h
        }),
        { lastFetchTimeMs: S } =
            null !==
                (n = E.Z.getSearchResults({
                    query: r,
                    guildId: i,
                    page: o,
                    pageSize: l,
                    categoryId: _,
                    integrationType: h
                })) && void 0 !== n
                ? n
                : {};
    if (y !== E.M.FETCHING && (null == S || !(S + N > b))) {
        d.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_SEARCH',
            query: r,
            guildId: i,
            page: o,
            pageSize: l,
            categoryId: _,
            integrationType: h,
            minUserInstallCommandCount: p,
            excludeAppsWithCustomInstallUrl: m,
            excludeNonEmbeddedApps: g,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: v,
            source: I
        });
        try {
            let e = await c.tn.get({
                url: T.ANM.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: r,
                    guild_id: i,
                    page: o,
                    page_size: l,
                    category_id: _,
                    locale: f.default.locale,
                    integration_type: h,
                    min_user_install_command_count: p,
                    exclude_apps_with_custom_install_url: m,
                    exclude_non_embedded_apps: g,
                    exclude_embedded_apps_without_primary_entry_point_app_command: v,
                    source: I
                },
                rejectWithError: !0
            });
            d.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS',
                query: r,
                guildId: i,
                page: o,
                pageSize: l,
                categoryId: _,
                integrationType: h,
                result: {
                    results: e.body.results,
                    countsByCategory: e.body.counts_by_category,
                    totalCount: e.body.result_count,
                    totalPages: e.body.num_pages,
                    type: e.body.type,
                    loadId: e.body.load_id
                },
                minUserInstallCommandCount: p,
                excludeAppsWithCustomInstallUrl: m,
                excludeNonEmbeddedApps: g,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: v,
                source: I
            }),
                null == s || s(e.body.result_count);
        } catch (e) {
            d.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE',
                query: r,
                guildId: i,
                page: o,
                pageSize: l,
                categoryId: _,
                integrationType: h,
                minUserInstallCommandCount: p,
                excludeAppsWithCustomInstallUrl: m,
                excludeNonEmbeddedApps: g,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: v,
                source: I
            });
        }
    }
}
function w() {
    return (0, h.isAndroid)() ? o.R.ANDROID : (0, h.isIOS)() ? o.R.IOS : o.R.WEB;
}
async function P() {
    let { surface: e = l.Y.APPLICATION_DIRECTORY, activeState: n = s.E.ACTIVE } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = _.default.disableAppCollectionsCache,
        i = Date.now(),
        a = g.Z.getFetchState({
            surface: e,
            activeState: n
        }),
        o = g.Z.getLastFetchTimeMs({
            surface: e,
            activeState: n
        });
    if (a === g.M.FETCHING) return;
    let u = !r && n === s.E.ACTIVE;
    if (!u || null == o || !(o + N > i)) {
        d.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS',
            surface: e,
            activeState: n
        });
        try {
            let r = await c.tn.get({
                url: T.ANM.APPLICATION_DIRECTORY_COLLECTIONS,
                query: {
                    surface: e,
                    active_state: n,
                    platform: w(),
                    locale: f.default.locale,
                    cache: u
                },
                rejectWithError: !0
            });
            d.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS',
                collections: r.body,
                surface: e,
                activeState: n
            });
        } catch (r) {
            d.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE',
                surface: e,
                activeState: n
            });
        }
    }
}
async function M() {
    let e = Date.now(),
        n = I.Z.getFetchState(),
        r = I.Z.getLastFetchTimeMs(),
        i = I.Z.getNextFetchRetryTimeMs();
    if (n !== I.M.FETCHING && (null == r || !(r + A > e)) && (null == i || !(e < i))) {
        d.Z.dispatch({ type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS' });
        try {
            let e = await c.tn.get({
                url: T.ANM.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS,
                rejectWithError: !1
            });
            d.Z.dispatch({
                type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS',
                guildIdToApplicationIds: e.body
            });
        } catch (n) {
            var a;
            let e = (null == n ? void 0 : n.status) === 429;
            d.Z.dispatch({
                type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE',
                retryAfterSeconds: e ? (null == n ? void 0 : null === (a = n.body) || void 0 === a ? void 0 : a.retry_after) : void 0
            });
        }
    }
}
