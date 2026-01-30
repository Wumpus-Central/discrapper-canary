let r;
n.d(t, {
    A: () => $,
}),
    n(896048),
    n(591487),
    n(727858),
    n(747238);
var i,
    a,
    o = n(311907),
    s = n(506774),
    l = n(73153),
    c = n(155718),
    u = n(194862),
    d = n(690511),
    f = n(223273),
    p = n(253932),
    _ = n(611010),
    h = n(954571),
    m = n(927813),
    g = n(723702),
    E = n(661191),
    y = n(652215),
    b = n(705751);

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

function A(e, t) {
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
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = "GameStoreReportedGames",
    T = 0x80000000,
    C = m.A.Millis.DAY,
    N = new u.A(),
    w = {},
    R = {},
    P = null != (i = s.w.get(S)) ? i : {},
    D = "",
    L = null,
    x = !1,
    M = null,
    j = !1,
    k = "",
    U = [],
    G = [],
    F = new Map(),
    V = m.A.Millis.HOUR;

function B(e) {
    var t, n, r, i, a, o, s, l, c, u;
    return {
        id: e.id,
        name: e.name,
        executables: (null != (t = e.executables) ? t : []).map(_.lg),
        overlay: null != (n = e.overlay) && n,
        overlayWarn: null != (r = e.overlay_warn) && r,
        overlayCompatibilityHook: null != (i = e.overlay_compatibility_hook) && i,
        hook: null == (a = e.hook) || a,
        aliases: null != (o = e.aliases) ? o : [],
        supportsOutOfProcessOverlay: _.Ay.supportsOutOfProcessOverlay(e.overlay_methods),
        themes: null != (s = e.themes) ? s : [],
        icon: null != (l = e.icon_hash) ? l : void 0,
        thirdPartySkus: null != (c = e.third_party_skus) ? c : [],
        cover_image_hash: null != (u = e.cover_image_hash) ? u : void 0,
    };
}

function H(e) {
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

function Y(e) {
    let t = e instanceof f.Ay ? H(e) : e;
    for (let n of (N.set(e.id, t), (w[e.name.toLowerCase()] = t), e.aliases)) w[n.toLowerCase()] = t;
    if ((0, g.isDesktop)()) for (let n of e.executables) R[n.name] = t;
}

function W(e) {
    let { detectableApplications: t } = e;
    for (let e of (N.clear(), (w = {}), (R = {}), t)) Y(e);
}

function K() {
    r = !0;
}

function z() {
    (r = !1), (x = !0);
}

function q(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && D !== n && (N.clear(), (w = {}), (R = {}), (D = n)), t)) Y(B(e));
    (r = void 0), (L = Date.now()), (x = !0);
}

function Z() {
    j = !0;
}

function Q() {
    j = !1;
}

function X(e) {
    let { executables: t, patterns: n, etag: r } = e;
    null != r && k !== r && ((k = r), (U = t.map((e) => e.toLowerCase())), (G = n.map((e) => RegExp(e, "i")))),
        (j = !1),
        (M = Date.now());
}
class J extends (a = o.Ay.PersistedStore) {
    initialize(e) {
        var t;
        null != e &&
            (null != e.detectableGamesEtag && (D = e.detectableGamesEtag),
            null != e.blocklistEtag && (k = e.blocklistEtag),
            null != e.blocklistExecutables && (U = e.blocklistExecutables),
            null != e.blocklistPatterns && (G = e.blocklistPatterns.map((e) => RegExp(e, "i"))),
            null == (t = e.detectableGames) || t.forEach((e) => Y(e)));
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
        return Object.prototype.hasOwnProperty.call(w, t) ? w[t] : null;
    }
    getOfficialGame(e) {
        let t;
        if (null == e) return null;
        if (e.type === b.S7.GAME) t = e.id;
        else {
            var n, r;
            t = null == (r = e.linkedGames) || null == (n = r.find((e) => e.type === c.Mh.OFFICIAL)) ? void 0 : n.id;
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
            (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & T) == 0)
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
        return L;
    }
    get hasAttemptedFetch() {
        return x;
    }
    get detectableGamesTtl() {
        return C;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == L || Date.now() >= L + C);
    }
    canFetchExecutableBlocklist() {
        return (
            !!d.n.getConfig({
                location: "GameStore.shouldBlock",
            }).enabled &&
            !j &&
            (null == M || Date.now() >= M + C)
        );
    }
    getGameByExecutable(e) {
        return R[e];
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
        return null != (t = null != (n = this.getGameByExecutable(i)) ? n : this.getGameByExecutable(a)) ? t : r;
    }
    shouldBlock(e) {
        if (
            !d.n.getConfig({
                location: "GameStore.shouldBlock",
            }).enabled ||
            null == e.exePath ||
            "" === e.exePath
        )
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
            o = F.get(a),
            s = Date.now();
        (null == o || s - o >= V) &&
            (F.set(a, s),
            h.default.track(y.HAw.GAME_BLOCKLIST_TRIGGERED, {
                block_type: t,
                matched_entry: n,
                game_name: null != (i = e.gameName) ? i : e.origGameName,
                executable_name: a,
            }));
    }
    shouldReport(e) {
        if (this.shouldBlock(e)) return !1;
        let t = null != this.getGameByName(e.name),
            n = null != e.name && null != P[e.name];
        return p.tz.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (P[e] = !0), s.w.set(S, P);
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
                          null != (t = null == (n = e.detectableGames) ? void 0 : n.map((e) => H(new f.Ay(e))))
                              ? t
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
let $ = new J(l.h, {
    OVERLAY_INITIALIZE: W,
    GAMES_DATABASE_FETCH: K,
    GAMES_DATABASE_FETCH_FAIL: z,
    GAMES_DATABASE_UPDATE: q,
    GAMES_BLOCKLIST_FETCH: Z,
    GAMES_BLOCKLIST_FETCH_FAIL: Q,
    GAMES_BLOCKLIST_UPDATE: X,
});
