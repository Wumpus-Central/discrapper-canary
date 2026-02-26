"use strict";
n.d(t, { A: () => g, j: () => E });
var r = n(311907),
    i = n(73153),
    s = n(998218),
    a = n(223273);
function o(e) {
    if (null == e) return;
    let { steam: t } = e;
    if (null != t) return { steam: { rating: t.rating, ratingCount: t.rating_count } };
}
let l = new Map(),
    u = new Set(),
    c = new Set(),
    d = new Set();
function _() {
    (l = new Map()), (u = new Set()), (c = new Set()), (d = new Set());
}
function f(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        u.add(e), c.delete(e);
    });
}
function p(e) {
    let { applicationIds: t, supplementalGameData: n } = e,
        r = new Set(t);
    t.forEach((e) => {
        u.delete(e), c.delete(e);
    }),
        n.forEach((e) => {
            let {
                application_id: t,
                name: n,
                summary: i,
                websites: s,
                themes: a,
                genres: u,
                platforms: c,
                artwork_urls: d,
                screenshot_urls: _,
                icon_hash: f,
                cover_image_url: p,
                first_release_date: h,
                summary_localized: m,
                publisher_names: E,
                developer_names: g,
                steam_release_status: A,
                reviews: I,
            } = e;
            r.delete(t),
                l.set(t, {
                    applicationId: t,
                    name: n,
                    summary: i,
                    summaryLocalized: m,
                    websites: s,
                    themes: a,
                    genres: u,
                    platforms: c,
                    artwork: d,
                    screenshots: _,
                    iconHash: f,
                    coverImageUrl: p,
                    firstReleaseDate: h,
                    publishers: E ?? [],
                    developers: g ?? [],
                    steamReleaseStatus: A,
                    reviews: o(I),
                });
        }),
        r.forEach((e) => {
            l.has(e) || d.add(e);
        });
}
function h(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        u.delete(e), c.add(e);
    });
}
class m extends r.Ay.Store {
    static displayName = "DetectableGameSupplementalStore";
    canFetch(e) {
        return !u.has(e) && !c.has(e) && !l.has(e) && !d.has(e);
    }
    isFetching(e) {
        return u.has(e);
    }
    didFetchingFail(e) {
        return c.has(e);
    }
    getGame(e) {
        return l.get(e);
    }
    getGames(e) {
        return e.map((e) => l.get(e));
    }
    getLocalizedName(e) {
        return l.get(e)?.name;
    }
    getThemes(e) {
        return l.get(e)?.themes;
    }
    getCoverImageUrl(e, t) {
        let n = l.get(e)?.coverImageUrl;
        if (null == n) return null;
        if (null == t) return n;
        let r = s.A.toURLSafe(n);
        return null == r ? n : (r.searchParams.set("size", t.size.toString()), r.toString());
    }
    noDataAvailable(e) {
        return d.has(e);
    }
    numNoDataAvailable() {
        return d.size;
    }
    numSupplementalGames() {
        return l.size;
    }
}
function E(e, t) {
    if (null == e || null == t || t < 10) return a.vI.NO_USER_REVIEWS;
    if (e >= 80) return t < 50 ? a.vI.POSITIVE : t < 500 || e < 95 ? a.vI.VERY_POSITIVE : a.vI.OVERWHELMINGLY_POSITIVE;
    if (e >= 70) return a.vI.MOSTLY_POSITIVE;
    if (e >= 40) return a.vI.MIXED;
    if (e >= 20) return a.vI.MOSTLY_NEGATIVE;
    else if (t < 50) return a.vI.NEGATIVE;
    else if (t < 500) return a.vI.VERY_NEGATIVE;
    return a.vI.OVERWHELMINGLY_NEGATIVE;
}
let g = new m(i.h, {
    LOGOUT: _,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH: f,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: p,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: h,
});
