let r;
n.d(t, { Z: () => L }), n(388685), n(35282);
var i,
    a,
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(642047),
    u = n(189451),
    d = n(695346),
    f = n(973616),
    _ = n(70956),
    p = n(358085),
    h = n(709054);
function m(e, t, n) {
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
let g = "GameStoreReportedGames",
    E = 2147483648,
    b = _.Z.Millis.DAY,
    y = new c.Z(),
    O = {},
    v = {},
    I = null != (i = s.K.get(g)) ? i : {},
    T = "",
    S = null;
function A(e) {
    var t, n, r, i, a, o, s, l, c;
    return {
        id: e.id,
        name: e.name,
        executables: (null != (t = e.executables) ? t : []).map(f.BA),
        overlay: null != (n = e.overlay) && n,
        overlayWarn: null != (r = e.overlay_warn) && r,
        overlayCompatibilityHook: null != (i = e.overlay_compatibility_hook) && i,
        hook: null == (a = e.hook) || a,
        aliases: null != (o = e.aliases) ? o : [],
        supportsOutOfProcessOverlay: f.ZP.supportsOutOfProcessOverlay(e.overlay_methods),
        themes: null != (s = e.themes) ? s : [],
        icon: null != (l = e.icon_hash) ? l : void 0,
        thirdPartySkus: null != (c = e.third_party_skus) ? c : [],
    };
}
function C(e) {
    var t, n;
    return {
        id: e.id,
        name: e.name,
        executables: e.executables,
        overlayWarn: e.overlayWarn,
        overlayCompatibilityHook: e.overlayCompatibilityHook,
        overlay: e.overlay,
        hook: e.hook,
        aliases: e.aliases,
        supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
        themes: null != (t = e.themes) ? t : [],
        icon: e.icon,
        thirdPartySkus: null != (n = e.thirdPartySkus) ? n : [],
    };
}
function N(e) {
    let t = e instanceof u.ZP ? C(e) : e;
    for (let n of (y.set(e.id, t), (O[e.name.toLowerCase()] = t), e.aliases)) O[n.toLowerCase()] = t;
    if ((0, p.isDesktop)()) for (let n of e.executables) v[n.name] = t;
}
function R(e) {
    let { detectableApplications: t } = e;
    for (let e of t) N(e);
}
function P() {
    r = !0;
}
function w() {
    r = !1;
}
function D(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && T !== n && (T = n), t)) N(A(e));
    (r = void 0), (S = Date.now());
}
class x extends (a = o.ZP.PersistedStore) {
    initialize(e) {
        var t;
        null != e &&
            (null != e.detectableGamesEtag && (T = e.detectableGamesEtag),
            null == (t = e.detectableGames) || t.forEach((e) => N(e)));
    }
    getState() {
        return (0, p.isDesktop)()
            ? {
                  detectableGamesEtag: T,
                  detectableGames: y.values(),
              }
            : {
                  detectableGamesEtag: "",
                  detectableGames: [],
              };
    }
    get games() {
        return y.values();
    }
    getDetectableGame(e) {
        return y.get(h.default.cast(e));
    }
    getGameByName(e) {
        if (null == e) return null;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(O, t) ? O[t] : null;
    }
    getGameByApplication(e) {
        let t = this.getDetectableGame(e.id);
        if (null != t) return t;
        if (null != e.linkedGames) {
            for (let n of e.linkedGames) if (null != (t = this.getDetectableGame(n.id))) return t;
        }
        return this.getGameByName(e.name);
    }
    isGameInDatabase(e) {
        return (
            null != this.getGameByName(e.name) ||
            (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & E) == 0)
        );
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return T;
    }
    get lastFetched() {
        return S;
    }
    get detectableGamesTtl() {
        return b;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == S || Date.now() >= S + b);
    }
    getGameByExecutable(e) {
        return v[e];
    }
    getGameByGameData(e) {
        var t, n;
        let r;
        if (null == e.exePath) return null;
        let i = e.exePath.split("/").pop(),
            a = e.exePath.split("/").slice(-2).join("/");
        if (null != e.name) {
            if (null != (r = this.getGameByName(e.name)) && null != r.executables) {
                let e = r.executables.map((e) => e.name);
                if (e.includes(i) || e.includes(a)) return r;
            } else if (null != r) return null;
        }
        return null != (n = null != (t = this.getGameByExecutable(i)) ? t : this.getGameByExecutable(a)) ? n : r;
    }
    shouldReport(e) {
        let t = null != this.getGameByName(e),
            n = null != I[e];
        return d.G6.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (I[e] = !0), s.K.set(g, I);
    }
}
m(x, "displayName", "GameStore"),
    m(x, "persistKey", "GameStore"),
    m(x, "migrations", [
        (e) => {
            var t, n;
            return null == e
                ? {
                      detectableGamesEtag: "",
                      detectableGames: [],
                  }
                : {
                      detectableGamesEtag: e.detectableGamesEtag,
                      detectableGames:
                          null != (n = null == (t = e.detectableGames) ? void 0 : t.map((e) => C(new u.ZP(e))))
                              ? n
                              : [],
                  };
        },
        (e) =>
            (0, p.isDesktop)()
                ? e
                : {
                      detectableGamesEtag: "",
                      detectableGames: [],
                  },
        () => ({
            detectableGamesEtag: "",
            detectableGames: [],
        }),
    ]);
let L = new x(l.Z, {
    OVERLAY_INITIALIZE: R,
    GAMES_DATABASE_FETCH: P,
    GAMES_DATABASE_FETCH_FAIL: w,
    GAMES_DATABASE_UPDATE: D,
});
