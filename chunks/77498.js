let r;
n.d(t, {
    Z: () => q,
    m: () => U,
}),
    n(388685),
    n(413496),
    n(433524),
    n(35282);
var i,
    a,
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(911969),
    u = n(642047),
    d = n(180138),
    f = n(189451),
    p = n(695346),
    _ = n(973616),
    m = n(626135),
    h = n(70956),
    g = n(358085),
    E = n(709054),
    b = n(981631),
    y = n(674563);
function O(e, t, n) {
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
let v = "GameStoreReportedGames",
    S = 2147483648,
    I = h.Z.Millis.DAY,
    T = new u.Z(),
    C = {},
    A = {},
    N = null != (i = s.K.get(v)) ? i : {},
    P = "",
    R = null,
    w = !1,
    D = null,
    x = !1,
    L = [],
    j = [],
    M = new Map(),
    k = h.Z.Millis.HOUR;
function U(e) {
    var t, n, r, i, a, o, s, l, c, u;
    return {
        id: e.id,
        name: e.name,
        executables: (null != (t = e.executables) ? t : []).map(_.BA),
        overlay: null != (n = e.overlay) && n,
        overlayWarn: null != (r = e.overlay_warn) && r,
        overlayCompatibilityHook: null != (i = e.overlay_compatibility_hook) && i,
        hook: null == (a = e.hook) || a,
        aliases: null != (o = e.aliases) ? o : [],
        supportsOutOfProcessOverlay: _.ZP.supportsOutOfProcessOverlay(e.overlay_methods),
        themes: null != (s = e.themes) ? s : [],
        icon: null != (l = e.icon_hash) ? l : void 0,
        thirdPartySkus: null != (c = e.third_party_skus) ? c : [],
        cover_image_hash: null != (u = e.cover_image_hash) ? u : void 0,
    };
}
function G(e) {
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
function Z(e) {
    let t = e instanceof f.ZP ? G(e) : e;
    for (let n of (T.set(e.id, t), (C[e.name.toLowerCase()] = t), e.aliases)) C[n.toLowerCase()] = t;
    if ((0, g.isDesktop)()) for (let n of e.executables) A[n.name] = t;
}
function F(e) {
    let { detectableApplications: t } = e;
    for (let e of (T.clear(), (C = {}), (A = {}), t)) Z(e);
}
function B() {
    r = !0;
}
function V() {
    (r = !1), (w = !0);
}
function H(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && P !== n && (T.clear(), (C = {}), (A = {}), (P = n)), t)) Z(U(e));
    (r = void 0), (R = Date.now()), (w = !0);
}
function Y() {
    x = !0;
}
function W() {
    x = !1;
}
function K(e) {
    let { executables: t, patterns: n } = e;
    (L = t.map((e) => e.toLowerCase())), (j = n.map((e) => RegExp(e, "i"))), (x = !1), (D = Date.now());
}
class z extends (a = o.ZP.PersistedStore) {
    initialize(e) {
        var t;
        null != e &&
            (null != e.detectableGamesEtag && (P = e.detectableGamesEtag),
            null == (t = e.detectableGames) || t.forEach((e) => Z(e)));
    }
    getState() {
        return (0, g.isDesktop)()
            ? {
                  detectableGamesEtag: P,
                  detectableGames: T.values(),
              }
            : {
                  detectableGamesEtag: "",
                  detectableGames: [],
              };
    }
    get games() {
        return T.values();
    }
    getDetectableGame(e) {
        return T.get(E.default.cast(e));
    }
    getGameByName(e) {
        if (null == e) return null;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(C, t) ? C[t] : null;
    }
    getOfficialGame(e) {
        let t;
        if (null == e) return null;
        if (e.type === y.wW.GAME) t = e.id;
        else {
            var n, r;
            t = null == (r = e.linkedGames) || null == (n = r.find((e) => e.type === c.tE.OFFICIAL)) ? void 0 : n.id;
        }
        return null == t ? null : this.getDetectableGame(t);
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
            (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & S) == 0)
        );
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return P;
    }
    get lastFetched() {
        return R;
    }
    get hasAttemptedFetch() {
        return w;
    }
    get detectableGamesTtl() {
        return I;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == R || Date.now() >= R + I);
    }
    canFetchExecutableBlocklist() {
        return (
            !!d.x.getConfig({ location: "GameStore.shouldBlock" }).enabled && !x && (null == D || Date.now() >= D + I)
        );
    }
    getGameByExecutable(e) {
        return A[e];
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
    shouldBlock(e) {
        if (!d.x.getConfig({ location: "GameStore.shouldBlock" }).enabled || null == e.exePath || "" === e.exePath)
            return !1;
        let t = e.exePath.toLowerCase(),
            n = L.find((e) => t.includes(e));
        if (null != n) return this.maybeTrackBlock(e, "explicit_list", n), !0;
        let r = j.find((t) => t.test(e.exePath));
        return null != r && (this.maybeTrackBlock(e, "pattern_match", r.source), !0);
    }
    maybeTrackBlock(e, t, n) {
        var r, i;
        let a = null != (r = e.exePath.split(/[/\\]/).pop()) ? r : "unknown",
            o = M.get(a),
            s = Date.now();
        (null == o || s - o >= k) &&
            (M.set(a, s),
            m.default.track(b.rMx.GAME_BLOCKLIST_TRIGGERED, {
                block_type: t,
                matched_entry: n,
                game_name: null != (i = e.gameName) ? i : e.origGameName,
                executable_name: a,
            }));
    }
    shouldReport(e) {
        if (this.shouldBlock(e)) return !1;
        let t = null != this.getGameByName(e.name),
            n = null != e.name && null != N[e.name];
        return p.G6.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (N[e] = !0), s.K.set(v, N);
    }
}
O(z, "displayName", "GameStore"),
    O(z, "persistKey", "GameStore"),
    O(z, "migrations", [
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
                          null != (n = null == (t = e.detectableGames) ? void 0 : t.map((e) => G(new f.ZP(e))))
                              ? n
                              : [],
                  };
        },
        (e) =>
            (0, g.isDesktop)()
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
let q = new z(l.Z, {
    OVERLAY_INITIALIZE: F,
    GAMES_DATABASE_FETCH: B,
    GAMES_DATABASE_FETCH_FAIL: V,
    GAMES_DATABASE_UPDATE: H,
    GAMES_BLOCKLIST_FETCH: Y,
    GAMES_BLOCKLIST_FETCH_FAIL: W,
    GAMES_BLOCKLIST_UPDATE: K,
});
