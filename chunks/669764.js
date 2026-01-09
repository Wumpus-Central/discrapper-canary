n.d(t, { Z: () => g }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(591759);
function s(e, t, n) {
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
                themes: o,
                genres: s,
                platforms: c,
                artwork_urls: u,
                screenshot_urls: d,
                icon_hash: f,
                cover_image_url: p,
                first_release_date: _,
                summary_localized: m,
                publisher_names: h,
                developer_names: g,
            } = e;
            r.delete(t),
                l.set(t, {
                    applicationId: t,
                    name: n,
                    summary: i,
                    summaryLocalized: m,
                    websites: a,
                    themes: o,
                    genres: s,
                    platforms: c,
                    artwork: u,
                    screenshots: d,
                    iconHash: f,
                    coverImageUrl: p,
                    firstReleaseDate: _,
                    publishers: null != h ? h : [],
                    developers: null != g ? g : [],
                });
        }),
        r.forEach((e) => {
            l.has(e) || d.add(e);
        });
}
function m(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        c.delete(e), u.add(e);
    });
}
class h extends (r = i.ZP.Store) {
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
        let i = o.Z.toURLSafe(r);
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
s(h, "displayName", "DetectableGameSupplementalStore");
let g = new h(a.Z, {
    LOGOUT: f,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH: p,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: _,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: m,
});
