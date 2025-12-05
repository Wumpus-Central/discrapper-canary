let r;
n.d(t, {
    Z: () => B,
    m: () => D,
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
    d = n(189451),
    f = n(695346),
    p = n(973616),
    _ = n(70956),
    m = n(358085),
    h = n(709054),
    g = n(674563);
function E(e, t, n) {
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
let b = "GameStoreReportedGames",
    y = 2147483648,
    O = _.Z.Millis.DAY,
    v = new u.Z(),
    S = {},
    I = {},
    T = null != (i = s.K.get(b)) ? i : {},
    A = "",
    C = null,
    N = !1,
    P = null,
    R = [],
    w = [];
function D(e) {
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
function x(e) {
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
function L(e) {
    let t = e instanceof d.ZP ? x(e) : e;
    for (let n of (v.set(e.id, t), (S[e.name.toLowerCase()] = t), e.aliases)) S[n.toLowerCase()] = t;
    if ((0, m.isDesktop)()) for (let n of e.executables) I[n.name] = t;
}
function j(e) {
    let { detectableApplications: t } = e;
    for (let e of (v.clear(), (S = {}), (I = {}), t)) L(e);
}
function M() {
    r = !0;
}
function k() {
    (r = !1), (N = !0);
}
function U(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && A !== n && (v.clear(), (S = {}), (I = {}), (A = n)), t)) L(D(e));
    (r = void 0), (C = Date.now()), (N = !0);
}
function G(e) {
    let { executables: t, patterns: n } = e;
    (R = t.map((e) => e.toLowerCase())), (w = n.map((e) => RegExp(e, "i"))), (P = Date.now());
}
class Z extends (a = o.ZP.PersistedStore) {
    initialize(e) {
        var t;
        null != e &&
            (null != e.detectableGamesEtag && (A = e.detectableGamesEtag),
            null == (t = e.detectableGames) || t.forEach((e) => L(e)));
    }
    getState() {
        return (0, m.isDesktop)()
            ? {
                  detectableGamesEtag: A,
                  detectableGames: v.values(),
              }
            : {
                  detectableGamesEtag: "",
                  detectableGames: [],
              };
    }
    get games() {
        return v.values();
    }
    getDetectableGame(e) {
        return v.get(h.default.cast(e));
    }
    getGameByName(e) {
        if (null == e) return null;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(S, t) ? S[t] : null;
    }
    getOfficialGame(e) {
        let t;
        if (null == e) return null;
        if (e.type === g.wW.GAME) t = e.id;
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
            (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & y) == 0)
        );
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return A;
    }
    get lastFetched() {
        return C;
    }
    get hasAttemptedFetch() {
        return N;
    }
    get detectableGamesTtl() {
        return O;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == C || Date.now() >= C + O);
    }
    canFetchExecutableBlocklist() {
        return null == P || Date.now() >= P + O;
    }
    getGameByExecutable(e) {
        return I[e];
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
        return (
            !!(
                null != e.exePath &&
                (null != R.find((t) => e.exePath.includes(t)) || w.some((t) => t.test(e.exePath)))
            ) || !1
        );
    }
    shouldReport(e) {
        if (this.shouldBlock(e)) return !1;
        let t = null != this.getGameByName(e.name),
            n = null != e.name && null != T[e.name];
        return f.G6.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (T[e] = !0), s.K.set(b, T);
    }
}
E(Z, "displayName", "GameStore"),
    E(Z, "persistKey", "GameStore"),
    E(Z, "migrations", [
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
                          null != (n = null == (t = e.detectableGames) ? void 0 : t.map((e) => x(new d.ZP(e))))
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
let B = new Z(l.Z, {
    OVERLAY_INITIALIZE: j,
    GAMES_DATABASE_FETCH: M,
    GAMES_DATABASE_FETCH_FAIL: k,
    GAMES_DATABASE_UPDATE: U,
    GAMES_BLOCKLIST_UPDATE: G,
});
