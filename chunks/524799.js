"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153),
    a = n(998218);
let s = new Map(),
    o = new Set(),
    l = new Set(),
    u = new Set();
function c() {
    (s = new Map()), (o = new Set()), (l = new Set()), (u = new Set());
}
function d(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        o.add(e), l.delete(e);
    });
}
function _(e) {
    let { applicationIds: t, supplementalGameData: n } = e,
        r = new Set(t);
    t.forEach((e) => {
        o.delete(e), l.delete(e);
    }),
        n.forEach((e) => {
            let {
                application_id: t,
                name: n,
                summary: i,
                websites: a,
                themes: o,
                genres: l,
                platforms: u,
                artwork_urls: c,
                screenshot_urls: d,
                icon_hash: _,
                cover_image_url: f,
                first_release_date: p,
                summary_localized: h,
                publisher_names: m,
                developer_names: g,
            } = e;
            r.delete(t),
                s.set(t, {
                    applicationId: t,
                    name: n,
                    summary: i,
                    summaryLocalized: h,
                    websites: a,
                    themes: o,
                    genres: l,
                    platforms: u,
                    artwork: c,
                    screenshots: d,
                    iconHash: _,
                    coverImageUrl: f,
                    firstReleaseDate: p,
                    publishers: m ?? [],
                    developers: g ?? [],
                });
        }),
        r.forEach((e) => {
            s.has(e) || u.add(e);
        });
}
function f(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        o.delete(e), l.add(e);
    });
}
class p extends r.Ay.Store {
    static displayName = "DetectableGameSupplementalStore";
    canFetch(e) {
        return !o.has(e) && !l.has(e) && !s.has(e) && !u.has(e);
    }
    isFetching(e) {
        return o.has(e);
    }
    didFetchingFail(e) {
        return l.has(e);
    }
    getGame(e) {
        return s.get(e);
    }
    getGames(e) {
        return e.map((e) => s.get(e));
    }
    getLocalizedName(e) {
        return s.get(e)?.name;
    }
    getThemes(e) {
        return s.get(e)?.themes;
    }
    getCoverImageUrl(e, t) {
        let n = s.get(e)?.coverImageUrl;
        if (null == n) return null;
        if (null == t) return n;
        let r = a.A.toURLSafe(n);
        return null == r ? n : (r.searchParams.set("size", t.size.toString()), r.toString());
    }
    noDataAvailable(e) {
        return u.has(e);
    }
    numNoDataAvailable() {
        return u.size;
    }
    numSupplementalGames() {
        return s.size;
    }
}
let h = new p(i.h, {
    LOGOUT: c,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH: d,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: _,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: f,
});
