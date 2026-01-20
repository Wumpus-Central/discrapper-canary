let r;
n.d(t, {
    Z: () => $,
    m: () => B,
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
    h = n(626135),
    m = n(70956),
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
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = "GameStoreReportedGames",
    C = 2147483648,
    A = m.Z.Millis.DAY,
    N = new u.Z(),
    P = {},
    w = {},
    R = null != (i = s.K.get(T)) ? i : {},
    D = "",
    x = null,
    L = !1,
    j = null,
    M = !1,
    k = "",
    U = [],
    G = [],
    Z = new Map(),
    F = m.Z.Millis.HOUR;
function B(e) {
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
function V(e) {
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
function H(e) {
    let t = e instanceof f.ZP ? V(e) : e;
    for (let n of (N.set(e.id, t), (P[e.name.toLowerCase()] = t), e.aliases)) P[n.toLowerCase()] = t;
    if ((0, g.isDesktop)()) for (let n of e.executables) w[n.name] = t;
}
function Y(e) {
    let { detectableApplications: t } = e;
    for (let e of (N.clear(), (P = {}), (w = {}), t)) H(e);
}
function W() {
    r = !0;
}
function K() {
    (r = !1), (L = !0);
}
function z(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && D !== n && (N.clear(), (P = {}), (w = {}), (D = n)), t)) H(B(e));
    (r = void 0), (x = Date.now()), (L = !0);
}
function q() {
    M = !0;
}
function Q() {
    M = !1;
}
function X(e) {
    let { executables: t, patterns: n, etag: r } = e;
    null != r && k !== r && ((k = r), (U = t.map((e) => e.toLowerCase())), (G = n.map((e) => RegExp(e, "i")))),
        (M = !1),
        (j = Date.now());
}
class J extends (a = o.ZP.PersistedStore) {
    initialize(e) {
        var t;
        null != e &&
            (null != e.detectableGamesEtag && (D = e.detectableGamesEtag),
            null != e.blocklistEtag && (k = e.blocklistEtag),
            null != e.blocklistExecutables && (U = e.blocklistExecutables),
            null != e.blocklistPatterns && (G = e.blocklistPatterns.map((e) => RegExp(e, "i"))),
            null == (t = e.detectableGames) || t.forEach((e) => H(e)));
    }
    getState() {
        return (0, g.isDesktop)()
            ? {
                  detectableGamesEtag: D,
                  detectableGames: N.values(),
                  blocklistEtag: k,
                  blocklistExecutables: U,
                  blocklistPatterns: G.map((e) => e.source),
              }
            : {
                  detectableGamesEtag: "",
                  detectableGames: [],
                  blocklistEtag: "",
                  blocklistExecutables: [],
                  blocklistPatterns: [],
              };
    }
    get games() {
        return N.values();
    }
    getDetectableGame(e) {
        return N.get(E.default.cast(e));
    }
    getGameByName(e) {
        if (null == e) return null;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(P, t) ? P[t] : null;
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
            (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & C) == 0)
        );
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return D;
    }
    get blocklistEtag() {
        return k;
    }
    get lastFetched() {
        return x;
    }
    get hasAttemptedFetch() {
        return L;
    }
    get detectableGamesTtl() {
        return A;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == x || Date.now() >= x + A);
    }
    canFetchExecutableBlocklist() {
        return (
            !!d.x.getConfig({ location: "GameStore.shouldBlock" }).enabled && !M && (null == j || Date.now() >= j + A)
        );
    }
    getGameByExecutable(e) {
        return w[e];
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
            n = U.find((e) => t.includes(e));
        if (null != n) return this.maybeTrackBlock(e, "explicit_list", n), !0;
        let r = G.find((t) => t.test(e.exePath));
        return null != r && (this.maybeTrackBlock(e, "pattern_match", r.source), !0);
    }
    maybeTrackBlock(e, t, n) {
        var r, i;
        let a = null != (r = e.exePath.split(/[/\\]/).pop()) ? r : "unknown",
            o = Z.get(a),
            s = Date.now();
        (null == o || s - o >= F) &&
            (Z.set(a, s),
            h.default.track(b.rMx.GAME_BLOCKLIST_TRIGGERED, {
                block_type: t,
                matched_entry: n,
                game_name: null != (i = e.gameName) ? i : e.origGameName,
                executable_name: a,
            }));
    }
    shouldReport(e) {
        if (this.shouldBlock(e)) return !1;
        let t = null != this.getGameByName(e.name),
            n = null != e.name && null != R[e.name];
        return p.G6.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (R[e] = !0), s.K.set(T, R);
    }
}
O(J, "displayName", "GameStore"),
    O(J, "persistKey", "GameStore"),
    O(J, "migrations", [
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
                          null != (n = null == (t = e.detectableGames) ? void 0 : t.map((e) => V(new f.ZP(e))))
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
        (e) => {
            var t, n, r;
            return I(v({}, e), {
                blocklistEtag: null != (t = e.blocklistEtag) ? t : "",
                blocklistExecutables: null != (n = e.blocklistExecutables) ? n : [],
                blocklistPatterns: null != (r = e.blocklistPatterns) ? r : [],
            });
        },
    ]);
let $ = new J(l.Z, {
    OVERLAY_INITIALIZE: Y,
    GAMES_DATABASE_FETCH: W,
    GAMES_DATABASE_FETCH_FAIL: K,
    GAMES_DATABASE_UPDATE: z,
    GAMES_BLOCKLIST_FETCH: q,
    GAMES_BLOCKLIST_FETCH_FAIL: Q,
    GAMES_BLOCKLIST_UPDATE: X,
});
