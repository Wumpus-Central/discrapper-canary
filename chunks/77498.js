let r;
n.d(t, { Z: () => P }), n(47120), n(301563);
var i,
    o,
    a = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(642047),
    u = n(695346),
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
    g = new c.Z(),
    m = {},
    E = {},
    v = null !== (i = s.K.get(p)) && void 0 !== i ? i : {},
    b = '',
    y = null;
function O(e) {
    var t, n, r, i, o, a, s;
    return {
        id: e.id,
        name: e.name,
        executables: (null !== (t = e.executables) && void 0 !== t ? t : []).map(d.BA),
        overlay: null !== (n = e.overlay) && void 0 !== n && n,
        overlayWarn: null !== (r = e.overlay_warn) && void 0 !== r && r,
        overlayCompatibilityHook: null !== (i = e.overlay_compatibility_hook) && void 0 !== i && i,
        hook: null === (o = e.hook) || void 0 === o || o,
        aliases: null !== (a = e.aliases) && void 0 !== a ? a : [],
        supportsOutOfProcessOverlay: d.ZP.supportsOutOfProcessOverlay(e.overlay_methods),
        themes: null !== (s = e.themes) && void 0 !== s ? s : []
    };
}
function S(e) {
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
function I(e) {
    let t = e instanceof d.ZP ? S(e) : e;
    for (let n of (g.set(e.id, t), (m[e.name.toLowerCase()] = t), e.aliases)) m[n.toLowerCase()] = t;
    if ((0, f.isDesktop)()) for (let n of e.executables) E[n.name] = t;
}
function T(e) {
    let { detectableApplications: t } = e;
    for (let e of t) I(e);
}
function N() {
    r = !0;
}
function A() {
    r = !1;
}
function C(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && b !== n && (b = n), t)) I(O(e));
    (r = void 0), (y = Date.now());
}
class R extends (o = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        null != e && (null != e.detectableGamesEtag && (b = e.detectableGamesEtag), null === (t = e.detectableGames) || void 0 === t || t.forEach((e) => I(e)));
    }
    getState() {
        return (0, f.isDesktop)()
            ? {
                  detectableGamesEtag: b,
                  detectableGames: g.values()
              }
            : {
                  detectableGamesEtag: '',
                  detectableGames: []
              };
    }
    get games() {
        return g.values();
    }
    getDetectableGame(e) {
        return g.get(e);
    }
    getGameByName(e) {
        if (null == e) return null;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(m, t) ? m[t] : null;
    }
    isGameInDatabase(e) {
        return null != this.getGameByName(e.name) || (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & h) == 0);
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return b;
    }
    get lastFetched() {
        return y;
    }
    getGameByExecutable(e) {
        return E[e];
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
        return null !== (n = null !== (t = this.getGameByExecutable(i)) && void 0 !== t ? t : this.getGameByExecutable(o)) && void 0 !== n ? n : r;
    }
    shouldReport(e) {
        let t = null != this.getGameByName(e),
            n = null != v[e];
        return u.G6.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (v[e] = !0), s.K.set(p, v);
    }
}
_(R, 'displayName', 'GameStore'),
    _(R, 'persistKey', 'GameStore'),
    _(R, 'migrations', [
        (e) => {
            var t, n;
            return null == e
                ? {
                      detectableGamesEtag: '',
                      detectableGames: []
                  }
                : {
                      detectableGamesEtag: e.detectableGamesEtag,
                      detectableGames: null !== (n = null === (t = e.detectableGames) || void 0 === t ? void 0 : t.map((e) => S(new d.ZP(e)))) && void 0 !== n ? n : []
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
let P = new R(l.Z, {
    OVERLAY_INITIALIZE: T,
    GAMES_DATABASE_FETCH: N,
    GAMES_DATABASE_FETCH_FAIL: A,
    GAMES_DATABASE_UPDATE: C
});
