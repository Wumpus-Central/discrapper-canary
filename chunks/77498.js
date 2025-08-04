let r;
(n.d(t, { Z: () => F }), n(388685), n(35282));
var i,
    a,
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(642047),
    u = n(695346),
    d = n(973616),
    f = n(70956),
    _ = n(358085),
    p = n(709054);
function h(e, t, n) {
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
let m = 'GameStoreReportedGames',
    g = 2147483648,
    E = f.Z.Millis.DAY,
    b = new c.Z(),
    y = {},
    O = {},
    v = null != (i = s.K.get(m)) ? i : {},
    I = '',
    T = null;
function S(e) {
    var t, n, r, i, a, o, s, l;
    return {
        id: e.id,
        name: e.name,
        executables: (null != (t = e.executables) ? t : []).map(d.BA),
        overlay: null != (n = e.overlay) && n,
        overlayWarn: null != (r = e.overlay_warn) && r,
        overlayCompatibilityHook: null != (i = e.overlay_compatibility_hook) && i,
        hook: null == (a = e.hook) || a,
        aliases: null != (o = e.aliases) ? o : [],
        supportsOutOfProcessOverlay: d.ZP.supportsOutOfProcessOverlay(e.overlay_methods),
        themes: null != (s = e.themes) ? s : [],
        icon: null != (l = e.icon_hash) ? l : void 0
    };
}
function A(e) {
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
        themes: [],
        icon: e.icon
    };
}
function N(e) {
    let t = e instanceof d.ZP ? A(e) : e;
    for (let n of (b.set(e.id, t), (y[e.name.toLowerCase()] = t), e.aliases)) y[n.toLowerCase()] = t;
    if ((0, _.isDesktop)()) for (let n of e.executables) O[n.name] = t;
}
function C(e) {
    let { detectableApplications: t } = e;
    for (let e of t) N(e);
}
function R() {
    r = !0;
}
function P() {
    r = !1;
}
function w(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && I !== n && (I = n), t)) N(S(e));
    ((r = void 0), (T = Date.now()));
}
function D(e) {
    let { message: t } = e;
    B(t);
}
function L(e) {
    for (let [t, n] of p.default.entries(e.messages)) n.forEach((e) => B(e));
}
function x(e) {
    let { messages: t } = e;
    t.forEach((e) => B(e));
}
function k(e) {
    let { messages: t } = e;
    for (let e of t) B(e);
}
function M(e) {
    let { pins: t } = e;
    for (let e of t) B(e.message);
}
function j(e) {
    let { mostRecentMessages: t } = e;
    null == t || t.forEach((e) => B(e));
}
function U(e) {
    let { firstMessages: t } = e;
    null != t && t.forEach((e) => B(e));
}
function G(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n } = e;
        (null != t && B(t), null != n && B(n));
    });
}
function B(e) {
    if ('mention_games' in e && null != e.mention_games) for (let t of e.mention_games) N(S(t));
}
class V extends (a = o.ZP.PersistedStore) {
    initialize(e) {
        var t;
        null != e && (null != e.detectableGamesEtag && (I = e.detectableGamesEtag), null == (t = e.detectableGames) || t.forEach((e) => N(e)));
    }
    getState() {
        return (0, _.isDesktop)()
            ? {
                  detectableGamesEtag: I,
                  detectableGames: b.values()
              }
            : {
                  detectableGamesEtag: '',
                  detectableGames: []
              };
    }
    get games() {
        return b.values();
    }
    getDetectableGame(e) {
        return b.get(e);
    }
    getGameByName(e) {
        if (null == e) return null;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(y, t) ? y[t] : null;
    }
    isGameInDatabase(e) {
        return null != this.getGameByName(e.name) || (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & g) == 0);
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return I;
    }
    get lastFetched() {
        return T;
    }
    get detectableGamesTtl() {
        return E;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == T || Date.now() >= T + E);
    }
    getGameByExecutable(e) {
        return O[e];
    }
    getGameByGameData(e) {
        var t, n;
        let r;
        if (null == e.exePath) return null;
        let i = e.exePath.split('/').pop(),
            a = e.exePath.split('/').slice(-2).join('/');
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
            n = null != v[e];
        return u.G6.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        ((v[e] = !0), s.K.set(m, v));
    }
}
(h(V, 'displayName', 'GameStore'),
    h(V, 'persistKey', 'GameStore'),
    h(V, 'migrations', [
        (e) => {
            var t, n;
            return null == e
                ? {
                      detectableGamesEtag: '',
                      detectableGames: []
                  }
                : {
                      detectableGamesEtag: e.detectableGamesEtag,
                      detectableGames: null != (n = null == (t = e.detectableGames) ? void 0 : t.map((e) => A(new d.ZP(e)))) ? n : []
                  };
        },
        (e) =>
            (0, _.isDesktop)()
                ? e
                : {
                      detectableGamesEtag: '',
                      detectableGames: []
                  }
    ]));
let F = new V(l.Z, {
    OVERLAY_INITIALIZE: C,
    GAMES_DATABASE_FETCH: R,
    GAMES_DATABASE_FETCH_FAIL: P,
    GAMES_DATABASE_UPDATE: w,
    CACHE_LOADED: L,
    LOCAL_MESSAGES_LOADED: x,
    MESSAGE_CREATE: D,
    MESSAGE_UPDATE: D,
    LOAD_MESSAGES_SUCCESS: k,
    LOAD_PINNED_MESSAGES_SUCCESS: M,
    THREAD_LIST_SYNC: j,
    LOAD_THREADS_SUCCESS: U,
    LOAD_ARCHIVED_THREADS_SUCCESS: U,
    LOAD_FORUM_POSTS: G
});
