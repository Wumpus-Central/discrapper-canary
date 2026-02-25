"use strict";
n.d(t, { A: () => m });
var r = n(311907),
    i = n(73153),
    s = n(998218);
function a(e) {
    if (null == e) return;
    let { steam: t } = e;
    if (null != t) return { steam: { rating: t.rating, ratingCount: t.rating_count } };
}
n(223273);
let o = new Map(),
    l = new Set(),
    u = new Set(),
    c = new Set();
function d() {
    (o = new Map()), (l = new Set()), (u = new Set()), (c = new Set());
}
function _(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        l.add(e), u.delete(e);
    });
}
function f(e) {
    let { applicationIds: t, supplementalGameData: n } = e,
        r = new Set(t);
    t.forEach((e) => {
        l.delete(e), u.delete(e);
    }),
        n.forEach((e) => {
            let {
                application_id: t,
                name: n,
                summary: i,
                websites: s,
                themes: l,
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
                o.set(t, {
                    applicationId: t,
                    name: n,
                    summary: i,
                    summaryLocalized: m,
                    websites: s,
                    themes: l,
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
                    reviews: a(I),
                });
        }),
        r.forEach((e) => {
            o.has(e) || c.add(e);
        });
}
function p(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        l.delete(e), u.add(e);
    });
}
class h extends r.Ay.Store {
    static displayName = "DetectableGameSupplementalStore";
    canFetch(e) {
        return !l.has(e) && !u.has(e) && !o.has(e) && !c.has(e);
    }
    isFetching(e) {
        return l.has(e);
    }
    didFetchingFail(e) {
        return u.has(e);
    }
    getGame(e) {
        return o.get(e);
    }
    getGames(e) {
        return e.map((e) => o.get(e));
    }
    getLocalizedName(e) {
        return o.get(e)?.name;
    }
    getThemes(e) {
        return o.get(e)?.themes;
    }
    getCoverImageUrl(e, t) {
        let n = o.get(e)?.coverImageUrl;
        if (null == n) return null;
        if (null == t) return n;
        let r = s.A.toURLSafe(n);
        return null == r ? n : (r.searchParams.set("size", t.size.toString()), r.toString());
    }
    noDataAvailable(e) {
        return c.has(e);
    }
    numNoDataAvailable() {
        return c.size;
    }
    numSupplementalGames() {
        return o.size;
    }
}
let m = new h(i.h, {
    LOGOUT: d,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH: _,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: f,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: p,
});
