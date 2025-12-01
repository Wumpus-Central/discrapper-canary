let r;
n.d(t, { Z: () => j }), n(388685), n(35282);
var i,
    a,
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(911969),
    u = n(642047),
    d = n(189451),
    f = n(695346),
    p = n(973616),
    _ = n(70956),
    m = n(358085),
    h = n(709054);
function g(e, t, n) {
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
let E = "GameStoreReportedGames",
    b = 2147483648,
    y = _.Z.Millis.DAY,
    O = new u.Z(),
    v = {},
    S = {},
    I = null != (i = s.K.get(E)) ? i : {},
    T = "",
    A = null;
function C(e) {
    var t, n, r, i, a, o, s, l, c, u;
    return {
        id: e.id,
        name: e.name,
        executables: (null != (t = e.executables) ? t : []).map(p.BA),
        overlay: null != (n = e.overlay) && n,
        overlayWarn: null != (r = e.overlay_warn) && r,
        overlayCompatibilityHook: null != (i = e.overlay_compatibility_hook) && i,
        hook: null == (a = e.hook) || a,
        aliases: null != (o = e.aliases) ? o : [],
        supportsOutOfProcessOverlay: p.ZP.supportsOutOfProcessOverlay(e.overlay_methods),
        themes: null != (s = e.themes) ? s : [],
        icon: null != (l = e.icon_hash) ? l : void 0,
        thirdPartySkus: null != (c = e.third_party_skus) ? c : [],
        cover_image_hash: null != (u = e.cover_image_hash) ? u : void 0,
    };
}
function N(e) {
    var t, n, r;
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
        cover_image_hash: null != (r = e.cover_image_hash) ? r : void 0,
    };
}
function P(e) {
    let t = e instanceof d.ZP ? N(e) : e;
    for (let n of (O.set(e.id, t), (v[e.name.toLowerCase()] = t), e.aliases)) v[n.toLowerCase()] = t;
    if ((0, m.isDesktop)()) for (let n of e.executables) S[n.name] = t;
}
function R(e) {
    let { detectableApplications: t } = e;
    for (let e of (O.clear(), (v = {}), (S = {}), t)) P(e);
}
function w() {
    r = !0;
}
function D() {
    r = !1;
}
function x(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && T !== n && (O.clear(), (v = {}), (S = {}), (T = n)), t)) P(C(e));
    (r = void 0), (A = Date.now());
}
class L extends (a = o.ZP.PersistedStore) {
    initialize(e) {
        var t;
        null != e &&
            (null != e.detectableGamesEtag && (T = e.detectableGamesEtag),
            null == (t = e.detectableGames) || t.forEach((e) => P(e)));
    }
    getState() {
        return (0, m.isDesktop)()
            ? {
                  detectableGamesEtag: T,
                  detectableGames: O.values(),
              }
            : {
                  detectableGamesEtag: "",
                  detectableGames: [],
              };
    }
    get games() {
        return O.values();
    }
    getDetectableGame(e) {
        return O.get(h.default.cast(e));
    }
    getGameByName(e) {
        if (null == e) return null;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(v, t) ? v[t] : null;
    }
    getOfficialGame(e) {
        var t;
        let n = null == e || null == (t = e.linkedGames) ? void 0 : t.find((e) => e.type === c.tE.OFFICIAL);
        return null != n ? this.getDetectableGame(n.id) : null;
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
            (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & b) == 0)
        );
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return T;
    }
    get lastFetched() {
        return A;
    }
    get detectableGamesTtl() {
        return y;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == A || Date.now() >= A + y);
    }
    getGameByExecutable(e) {
        return S[e];
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
        return f.G6.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (I[e] = !0), s.K.set(E, I);
    }
}
g(L, "displayName", "GameStore"),
    g(L, "persistKey", "GameStore"),
    g(L, "migrations", [
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
                          null != (n = null == (t = e.detectableGames) ? void 0 : t.map((e) => N(new d.ZP(e))))
                              ? n
                              : [],
                  };
        },
        (e) =>
            (0, m.isDesktop)()
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
let j = new L(l.Z, {
    OVERLAY_INITIALIZE: R,
    GAMES_DATABASE_FETCH: w,
    GAMES_DATABASE_FETCH_FAIL: D,
    GAMES_DATABASE_UPDATE: x,
});
