n.d(t, { Z: () => h }), n(47120);
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = new Map(),
    l = new Set(),
    u = new Set();
function c() {
    (o = new Map()), (l = new Set()), (u = new Set());
}
function d(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        l.add(e), u.delete(e);
    });
}
function f(e) {
    let { applicationIds: t, supplementalGameData: n } = e;
    t.forEach((e) => {
        l.delete(e), u.delete(e);
    }),
        n.forEach((e) => {
            let { application_id: t, name: n, summary: i, websites: r, themes: a, genres: s, platforms: l, artwork_urls: u, screenshot_urls: c, cover_image_url: d, first_release_date: f, summary_localized: _, publisher_names: p, developer_names: h } = e;
            o.set(t, {
                applicationId: t,
                name: n,
                summary: i,
                summaryLocalized: _,
                websites: r,
                themes: a,
                genres: s,
                platforms: l,
                artwork: u,
                screenshots: c,
                coverImageUrl: d,
                firstReleaseDate: f,
                publishers: null != p ? p : [],
                developers: null != h ? h : []
            });
        });
}
function _(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        l.delete(e), u.add(e);
    });
}
class p extends (i = r.ZP.Store) {
    canFetch(e) {
        return !l.has(e) && !u.has(e) && !o.has(e);
    }
    isFetching(e) {
        return l.has(e);
    }
    getGame(e) {
        return o.get(e);
    }
    getGames(e) {
        return e.map((e) => o.get(e));
    }
    getLocalizedName(e) {
        var t;
        return null === (t = o.get(e)) || void 0 === t ? void 0 : t.name;
    }
    getThemes(e) {
        var t;
        return null === (t = o.get(e)) || void 0 === t ? void 0 : t.themes;
    }
    getCoverImageUrl(e, t) {
        var n;
        let i = null === (n = o.get(e)) || void 0 === n ? void 0 : n.coverImageUrl;
        return null == i ? null : null == t ? i : ''.concat(i, '?width=').concat(t.width, '&height=').concat(t.height);
    }
}
s(p, 'displayName', 'DetectableGameSupplementalStore');
let h = new p(a.Z, {
    LOGOUT: c,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH: d,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: f,
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: _
});
