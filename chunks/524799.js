n.d(t, { A: () => g }), n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(998218);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = new Map(),
    c = new Set(),
    u = new Set(),
    d = new Set();
function f() {
    (l = new Map()), (c = new Set()), (u = new Set()), (d = new Set());
}
function p(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        c.add(e), u.delete(e);
    });
}
function _(e) {
    let { applicationIds: t, supplementalGameData: n } = e,
        r = new Set(t);
    t.forEach((e) => {
        c.delete(e), u.delete(e);
    }),
        n.forEach((e) => {
            let {
                application_id: t,
                name: n,
                summary: i,
                websites: a,
                themes: s,
                genres: o,
                platforms: c,
                artwork_urls: u,
                screenshot_urls: d,
                icon_hash: f,
                cover_image_url: p,
                first_release_date: _,
                summary_localized: h,
                publisher_names: m,
                developer_names: g,
            } = e;
            r.delete(t),
                l.set(t, {
                    applicationId: t,
                    name: n,
                    summary: i,
                    summaryLocalized: h,
                    websites: a,
                    themes: s,
                    genres: o,
                    platforms: c,
                    artwork: u,
                    screenshots: d,
                    iconHash: f,
                    coverImageUrl: p,
                    firstReleaseDate: _,
                    publishers: null != m ? m : [],
                    developers: null != g ? g : [],
                });
        }),
        r.forEach((e) => {
            l.has(e) || d.add(e);
        });
}
function h(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        c.delete(e), u.add(e);
    });
}
class m extends (r = i.Ay.Store) {
    canFetch(e) {
        return !c.has(e) && !u.has(e) && !l.has(e) && !d.has(e);
    }
    isFetching(e) {
        return c.has(e);
    }
    didFetchingFail(e) {
        return u.has(e);
    }
    getGame(e) {
        return l.get(e);
    }
    getGames(e) {
        return e.map((e) => l.get(e));
    }
    getLocalizedName(e) {
        var t;
        return null == (t = l.get(e)) ? void 0 : t.name;
    }
    getThemes(e) {
        var t;
        return null == (t = l.get(e)) ? void 0 : t.themes;
    }
    getCoverImageUrl(e, t) {
        var n;
        let r = null == (n = l.get(e)) ? void 0 : n.coverImageUrl;
        if (null == r) return null;
        if (null == t) return r;
        let i = s.A.toURLSafe(r);
        return null == i ? r : (i.searchParams.set("size", t.size.toString()), i.toString());
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
o(m, "displayName", "DetectableGameSupplementalStore");
let g = new m(a.h, {
    LOGOUT: f,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH: p,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: _,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: h,
});
