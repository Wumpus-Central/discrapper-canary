r.d(n, {
    CP: function () {
        return D;
    },
    T4: function () {
        return x;
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
        return L;
    }
});
var i = r(47120);
var a = r(261470),
    o = r(535655),
    s = r(344372),
    l = r(973693),
    u = r(288385),
    c = r(544891),
    d = r(570140);
r(432877);
var f = r(706454),
    p = r(857192),
    h = r(358085),
    _ = r(264043),
    m = r(894653),
    g = r(368862),
    E = r(809547),
    v = r(303383),
    y = r(973001),
    b = r(981631);
let I = 1000,
    T = 5000,
    S = 10,
    A = 86400000,
    C = 600000,
    N = new Map();
async function R(e) {
    var n;
    let r = Date.now(),
        i = null !== (n = N.get(e)) && void 0 !== n ? n : 0;
    if (_.Z.getApplicationFetchState(e) === _.M.FETCHING || _.Z.isInvalidApplication(e) || r < i + C) return;
    N.set(e, r),
        d.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
            applicationId: e
        });
    let o = new a.Z(I, T),
        s = (e, n) =>
            429 === e.status &&
            !!(o.fails < S) &&
            (o.fail(() => {
                n(void 0, s);
            }),
            !0);
    try {
        let n = (
            await c.tn.get({
                url: b.ANM.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: o,
                retries: S,
                interceptResponse: s,
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
        i = _.Z.getApplicationFetchState(e),
        a = _.Z.getApplicationLastFetchTime(e),
        { dontRefetchMs: o, noCache: s } = n,
        l = null != a && a + (null != o ? o : C) > r;
    if (i !== _.M.FETCHING && !l) {
        d.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
            applicationId: e
        });
        try {
            let n = await c.tn.get({
                url: b.ANM.APPLICATION_DIRECTORY_APPLICATION(e),
                query: {
                    locale: f.default.locale,
                    nocache: s
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
    if (null != n && n + C > e) return;
    let r = await c.tn.get({
        url: b.ANM.APPLICATION_DIRECTORY_CATEGORIES,
        query: { locale: f.default.locale },
        rejectWithError: !1
    });
    d.Z.dispatch({
        type: 'APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS',
        categories: r.body
    });
}
async function x(e) {
    var n;
    let { applicationId: r, guildId: i, options: a } = e,
        { page: o } = null != a ? a : {},
        s = Date.now(),
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
    if (l !== v.M.FETCHING && (null == u || !(u + C > s))) {
        d.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS',
            applicationId: r,
            guildId: i,
            page: o
        });
        try {
            let e = await c.tn.get({
                url: b.ANM.APPLICATION_DIRECTORY_SIMILAR(r),
                query: {
                    guild_id: i,
                    page: o,
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
                page: o,
                totalPages: e.body.num_pages
            });
        } catch (e) {
            d.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE',
                applicationId: r,
                guildId: i,
                page: o
            });
        }
    }
}
async function L(e) {
    var n;
    let { query: r, guildId: i, options: a, onSuccessCallback: o } = e,
        { page: s, pageSize: l, categoryId: p, integrationType: h, minUserInstallCommandCount: _, excludeAppsWithCustomInstallUrl: m, excludeNonEmbeddedApps: g, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: v, source: y = u.F.APP_DIRECTORY } = null != a ? a : {},
        I = Date.now(),
        T = E.Z.getFetchState({
            query: r,
            guildId: i,
            page: s,
            pageSize: l,
            categoryId: p,
            integrationType: h
        }),
        { lastFetchTimeMs: S } =
            null !==
                (n = E.Z.getSearchResults({
                    query: r,
                    guildId: i,
                    page: s,
                    pageSize: l,
                    categoryId: p,
                    integrationType: h
                })) && void 0 !== n
                ? n
                : {};
    if (T !== E.M.FETCHING && (null == S || !(S + C > I))) {
        d.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_SEARCH',
            query: r,
            guildId: i,
            page: s,
            pageSize: l,
            categoryId: p,
            integrationType: h,
            minUserInstallCommandCount: _,
            excludeAppsWithCustomInstallUrl: m,
            excludeNonEmbeddedApps: g,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: v,
            source: y
        });
        try {
            let e = await c.tn.get({
                url: b.ANM.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: r,
                    guild_id: i,
                    page: s,
                    page_size: l,
                    category_id: p,
                    locale: f.default.locale,
                    integration_type: h,
                    min_user_install_command_count: _,
                    exclude_apps_with_custom_install_url: m,
                    exclude_non_embedded_apps: g,
                    exclude_embedded_apps_without_primary_entry_point_app_command: v,
                    source: y
                },
                rejectWithError: !0
            });
            d.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS',
                query: r,
                guildId: i,
                page: s,
                pageSize: l,
                categoryId: p,
                integrationType: h,
                result: {
                    results: e.body.results,
                    countsByCategory: e.body.counts_by_category,
                    totalCount: e.body.result_count,
                    totalPages: e.body.num_pages,
                    type: e.body.type,
                    loadId: e.body.load_id
                },
                minUserInstallCommandCount: _,
                excludeAppsWithCustomInstallUrl: m,
                excludeNonEmbeddedApps: g,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: v,
                source: y
            }),
                null == o || o(e.body.result_count);
        } catch (e) {
            d.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE',
                query: r,
                guildId: i,
                page: s,
                pageSize: l,
                categoryId: p,
                integrationType: h,
                minUserInstallCommandCount: _,
                excludeAppsWithCustomInstallUrl: m,
                excludeNonEmbeddedApps: g,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: v,
                source: y
            });
        }
    }
}
function w() {
    return (0, h.isAndroid)() ? s.R.ANDROID : (0, h.isIOS)() ? s.R.IOS : s.R.WEB;
}
async function P() {
    let { surface: e = l.Y.APPLICATION_DIRECTORY, activeState: n = o.E.ACTIVE } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = p.default.disableAppCollectionsCache,
        i = Date.now(),
        a = g.Z.getFetchState({
            surface: e,
            activeState: n
        }),
        s = g.Z.getLastFetchTimeMs({
            surface: e,
            activeState: n
        });
    if (a === g.M.FETCHING) return;
    let u = !r && n === o.E.ACTIVE;
    if (!u || null == s || !(s + C > i)) {
        d.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS',
            surface: e,
            activeState: n
        });
        try {
            let r = await c.tn.get({
                url: b.ANM.APPLICATION_DIRECTORY_COLLECTIONS,
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
        n = y.Z.getFetchState(),
        r = y.Z.getLastFetchTimeMs(),
        i = y.Z.getNextFetchRetryTimeMs();
    if (n !== y.M.FETCHING && (null == r || !(r + A > e)) && (null == i || !(e < i))) {
        d.Z.dispatch({ type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS' });
        try {
            let e = await c.tn.get({
                url: b.ANM.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS,
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
