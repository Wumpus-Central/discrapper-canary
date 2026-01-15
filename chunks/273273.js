let r;
n.d(t, { Z: () => v }), n(388685);
var i,
    a = n(442837),
    o = n(570140),
    s = n(642047),
    l = n(973616),
    c = n(70956),
    u = n(358085);
function d(e, t, n) {
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
let f = c.Z.Millis.DAY,
    p = new s.Z(),
    _ = "",
    h = null,
    m = !1;
function g(e) {
    var t, n, r, i;
    return {
        id: e.id,
        name: e.name,
        executables: (null != (t = e.executables) ? t : []).map(l.BA),
        aliases: null != (n = e.aliases) ? n : [],
        icon: null != (r = e.icon_hash) ? r : void 0,
        thirdPartySkus: null != (i = e.third_party_skus) ? i : [],
    };
}
function E() {
    r = !0;
}
function b() {
    (r = !1), (m = !0);
}
function y(e) {
    let { nonGames: t, etag: n } = e;
    for (let e of (null != n && _ !== n && (p.clear(), (_ = n)), t)) p.set(e.id, g(e));
    (r = void 0), (h = Date.now()), (m = !0);
}
class O extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        null != e && (null != e.etag && (_ = e.etag), null == (t = e.nonGames) || t.forEach((e) => p.set(e.id, e)));
    }
    getState() {
        return (0, u.isDesktop)()
            ? {
                  etag: _,
                  nonGames: p.values(),
              }
            : {
                  etag: "",
                  nonGames: [],
              };
    }
    get nonGames() {
        return p.values();
    }
    get fetching() {
        return !0 === r;
    }
    get etag() {
        return _;
    }
    get lastFetched() {
        return h;
    }
    get hasAttemptedFetch() {
        return m;
    }
    get ttl() {
        return f;
    }
    getById(e) {
        return p.get(e);
    }
    canFetch() {
        return !r && (null == h || Date.now() >= h + f);
    }
}
d(O, "displayName", "NonGameStore"), d(O, "persistKey", "NonGameStore");
let v = new O(o.Z, {
    NON_GAMES_DATABASE_FETCH: E,
    NON_GAMES_DATABASE_FETCH_FAIL: b,
    NON_GAMES_DATABASE_UPDATE: y,
});
