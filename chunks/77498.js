let r;
n.d(t, { Z: () => D }), n(47120), n(301563);
var i,
    o,
    a = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(642047),
    u = n(695346),
    d = n(973616),
    f = n(70956),
    _ = n(358085);
function p(e, t, n) {
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
let h = 'GameStoreReportedGames',
    m = 2147483648,
    g = f.Z.Millis.DAY,
    E = new c.Z(),
    b = {},
    y = {},
    v = null != (i = s.K.get(h)) ? i : {},
    O = '',
    I = null;
function S(e) {
    var t, n, r, i, o, a, s;
    return {
        id: e.id,
        name: e.name,
        executables: (null != (t = e.executables) ? t : []).map(d.BA),
        overlay: null != (n = e.overlay) && n,
        overlayWarn: null != (r = e.overlay_warn) && r,
        overlayCompatibilityHook: null != (i = e.overlay_compatibility_hook) && i,
        hook: null == (o = e.hook) || o,
        aliases: null != (a = e.aliases) ? a : [],
        supportsOutOfProcessOverlay: d.ZP.supportsOutOfProcessOverlay(e.overlay_methods),
        themes: null != (s = e.themes) ? s : []
    };
}
function T(e) {
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
        themes: []
    };
}
function N(e) {
    let t = e instanceof d.ZP ? T(e) : e;
    for (let n of (E.set(e.id, t), (b[e.name.toLowerCase()] = t), e.aliases)) b[n.toLowerCase()] = t;
    if ((0, _.isDesktop)()) for (let n of e.executables) y[n.name] = t;
}
function A(e) {
    let { detectableApplications: t } = e;
    for (let e of t) N(e);
}
function C() {
    r = !0;
}
function R() {
    r = !1;
}
function P(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && O !== n && (O = n), t)) N(S(e));
    (r = void 0), (I = Date.now());
}
class w extends (o = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        null != e && (null != e.detectableGamesEtag && (O = e.detectableGamesEtag), null == (t = e.detectableGames) || t.forEach((e) => N(e)));
    }
    getState() {
        return (0, _.isDesktop)()
            ? {
                  detectableGamesEtag: O,
                  detectableGames: E.values()
              }
            : {
                  detectableGamesEtag: '',
                  detectableGames: []
              };
    }
    get games() {
        return E.values();
    }
    getDetectableGame(e) {
        return E.get(e);
    }
    getGameByName(e) {
        if (null == e) return null;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(b, t) ? b[t] : null;
    }
    isGameInDatabase(e) {
        return null != this.getGameByName(e.name) || (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & m) == 0);
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return O;
    }
    get lastFetched() {
        return I;
    }
    get detectableGamesTtl() {
        return g;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == I || Date.now() >= I + g);
    }
    getGameByExecutable(e) {
        return y[e];
    }
    getGameByGameData(e) {
        var t, n;
        let r;
        if (null == e.exePath) return null;
        let i = e.exePath.split('/').pop(),
            o = e.exePath.split('/').slice(-2).join('/');
        if (null != e.name) {
            if (null != (r = this.getGameByName(e.name)) && null != r.executables) {
                let e = r.executables.map((e) => e.name);
                if (e.includes(i) || e.includes(o)) return r;
            } else if (null != r) return null;
        }
        return null != (n = null != (t = this.getGameByExecutable(i)) ? t : this.getGameByExecutable(o)) ? n : r;
    }
    shouldReport(e) {
        let t = null != this.getGameByName(e),
            n = null != v[e];
        return u.G6.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (v[e] = !0), s.K.set(h, v);
    }
}
p(w, 'displayName', 'GameStore'),
    p(w, 'persistKey', 'GameStore'),
    p(w, 'migrations', [
        (e) => {
            var t, n;
            return null == e
                ? {
                      detectableGamesEtag: '',
                      detectableGames: []
                  }
                : {
                      detectableGamesEtag: e.detectableGamesEtag,
                      detectableGames: null != (n = null == (t = e.detectableGames) ? void 0 : t.map((e) => T(new d.ZP(e)))) ? n : []
                  };
        },
        (e) =>
            (0, _.isDesktop)()
                ? e
                : {
                      detectableGamesEtag: '',
                      detectableGames: []
                  }
    ]);
let D = new w(l.Z, {
    OVERLAY_INITIALIZE: A,
    GAMES_DATABASE_FETCH: C,
    GAMES_DATABASE_FETCH_FAIL: R,
    GAMES_DATABASE_UPDATE: P
});
