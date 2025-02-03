let i;
n.d(t, { Z: () => D }), n(47120);
var r,
    a,
    s = n(442837),
    o = n(433517),
    l = n(570140),
    u = n(642047),
    c = n(695346),
    d = n(973616),
    f = n(358085);
function _(e, t, n) {
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
let p = 'GameStoreReportedGames',
    h = 2147483648,
    m = new u.Z(),
    g = {},
    E = {},
    v = null !== (r = o.K.get(p)) && void 0 !== r ? r : {},
    y = '',
    I = null;
function b(e) {
    var t, n, i, r, a, s;
    return {
        id: e.id,
        name: e.name,
        executables: (null !== (t = e.executables) && void 0 !== t ? t : []).map(d.BA),
        overlay: null !== (n = e.overlay) && void 0 !== n && n,
        overlayWarn: null !== (i = e.overlay_warn) && void 0 !== i && i,
        overlayCompatibilityHook: null !== (r = e.overlay_compatibility_hook) && void 0 !== r && r,
        hook: null === (a = e.hook) || void 0 === a || a,
        aliases: null !== (s = e.aliases) && void 0 !== s ? s : [],
        supportsOutOfProcessOverlay: d.ZP.supportsOutOfProcessOverlay(e.overlay_methods)
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
        supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
    };
}
function S(e) {
    let t = e instanceof d.ZP ? T(e) : e;
    for (let n of (m.set(e.id, t), (g[e.name.toLowerCase()] = t), e.aliases)) g[n.toLowerCase()] = t;
    if ((0, f.isDesktop)()) for (let n of e.executables) E[n.name] = t;
}
function A(e) {
    let { detectableApplications: t } = e;
    for (let e of t) S(e);
}
function N() {
    i = !0;
}
function C() {
    i = !1;
}
function R(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && y !== n && (y = n), t)) S(b(e));
    (i = void 0), (I = Date.now());
}
class O extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        var t;
        null != e && (null != e.detectableGamesEtag && (y = e.detectableGamesEtag), null === (t = e.detectableGames) || void 0 === t || t.forEach((e) => S(e)));
    }
    getState() {
        return (0, f.isDesktop)()
            ? {
                  detectableGamesEtag: y,
                  detectableGames: m.values()
              }
            : {
                  detectableGamesEtag: '',
                  detectableGames: []
              };
    }
    get games() {
        return m.values();
    }
    getDetectableGame(e) {
        return m.get(e);
    }
    getGameByName(e) {
        if (null == e) return null;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(g, t) ? g[t] : null;
    }
    isGameInDatabase(e) {
        return null != this.getGameByName(e.name) || (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & h) == 0);
    }
    get fetching() {
        return !0 === i;
    }
    get detectableGamesEtag() {
        return y;
    }
    get lastFetched() {
        return I;
    }
    getGameByExecutable(e) {
        return E[e];
    }
    getGameByGameData(e) {
        var t, n;
        let i;
        if (null == e.exePath) return null;
        let r = e.exePath.split('/').pop(),
            a = e.exePath.split('/').slice(-2).join('/');
        if (null != e.name) {
            if (null != (i = this.getGameByName(e.name)) && null != i.executables) {
                let e = i.executables.map((e) => e.name);
                if (e.includes(r) || e.includes(a)) return i;
            } else if (null != i) return null;
        }
        return null !== (n = null !== (t = this.getGameByExecutable(r)) && void 0 !== t ? t : this.getGameByExecutable(a)) && void 0 !== n ? n : i;
    }
    shouldReport(e) {
        let t = null != this.getGameByName(e),
            n = null != v[e];
        return c.G6.getSetting() && !i && !(t || n);
    }
    markGameReported(e) {
        (v[e] = !0), o.K.set(p, v);
    }
}
_(O, 'displayName', 'GameStore'),
    _(O, 'persistKey', 'GameStore'),
    _(O, 'migrations', [
        (e) => {
            var t, n;
            return null == e
                ? {
                      detectableGamesEtag: '',
                      detectableGames: []
                  }
                : {
                      detectableGamesEtag: e.detectableGamesEtag,
                      detectableGames: null !== (n = null === (t = e.detectableGames) || void 0 === t ? void 0 : t.map((e) => T(new d.ZP(e)))) && void 0 !== n ? n : []
                  };
        },
        (e) =>
            (0, f.isDesktop)()
                ? e
                : {
                      detectableGamesEtag: '',
                      detectableGames: []
                  }
    ]);
let D = new O(l.Z, {
    OVERLAY_INITIALIZE: A,
    GAMES_DATABASE_FETCH: N,
    GAMES_DATABASE_FETCH_FAIL: C,
    GAMES_DATABASE_UPDATE: R
});
