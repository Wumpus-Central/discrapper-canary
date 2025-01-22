var i,
    a = r(47120);
var o = r(442837),
    s = r(570140);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = new Map(),
    c = new Set(),
    d = new Set();
function f() {
    (u = new Map()), (c = new Set()), (d = new Set());
}
function p(e) {
    let { applicationIds: n } = e;
    n.forEach((e) => {
        c.add(e), d.delete(e);
    });
}
function h(e) {
    let { applicationIds: n, supplementalGameData: r } = e;
    n.forEach((e) => {
        c.delete(e), d.delete(e);
    }),
        r.forEach((e) => {
            let { application_id: n, name: r, summary: i, websites: a, themes: o, genres: s, platforms: l, artwork_urls: c, screenshot_urls: d, cover_image_url: f, first_release_date: p, summary_localized: h, publisher_names: _, developer_names: m } = e;
            u.set(n, {
                applicationId: n,
                name: r,
                summary: i,
                summaryLocalized: h,
                websites: a,
                themes: o,
                genres: s,
                platforms: l,
                artwork: c,
                screenshots: d,
                coverImageUrl: f,
                firstReleaseDate: p,
                publishers: null != _ ? _ : [],
                developers: null != m ? m : []
            });
        });
}
function _(e) {
    let { applicationIds: n } = e;
    n.forEach((e) => {
        c.delete(e), d.add(e);
    });
}
class m extends (i = o.ZP.Store) {
    canFetch(e) {
        return !c.has(e) && !d.has(e) && !u.has(e);
    }
    isFetching(e) {
        return c.has(e);
    }
    getGame(e) {
        return u.get(e);
    }
    getGames(e) {
        return e.map((e) => u.get(e));
    }
    getLocalizedName(e) {
        var n;
        return null === (n = u.get(e)) || void 0 === n ? void 0 : n.name;
    }
    getThemes(e) {
        var n;
        return null === (n = u.get(e)) || void 0 === n ? void 0 : n.themes;
    }
    getCoverImageUrl(e, n) {
        var r;
        let i = null === (r = u.get(e)) || void 0 === r ? void 0 : r.coverImageUrl;
        return null == i ? null : null == n ? i : ''.concat(i, '?width=').concat(n.width, '&height=').concat(n.height);
    }
}
l(m, 'displayName', 'DetectableGameSupplementalStore'),
    (n.Z = new m(s.Z, {
        LOGOUT: f,
        DETECTABLE_GAME_SUPPLEMENTAL_FETCH: p,
        DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: h,
        DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: _
    }));
