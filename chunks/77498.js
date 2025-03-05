let r;
n.d(t, { Z: () => w }), n(47120), n(301563);
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
    g = 2147483648,
    m = f.Z.Millis.DAY,
    E = new c.Z(),
    v = {},
    b = {},
    y = null !== (i = s.K.get(h)) && void 0 !== i ? i : {},
    O = '',
    S = null;
function I(e) {
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
    for (let n of (E.set(e.id, t), (v[e.name.toLowerCase()] = t), e.aliases)) v[n.toLowerCase()] = t;
    if ((0, _.isDesktop)()) for (let n of e.executables) b[n.name] = t;
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
    for (let e of (null != n && O !== n && (O = n), t)) N(I(e));
    (r = void 0), (S = Date.now());
}
class D extends (o = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        null != e && (null != e.detectableGamesEtag && (O = e.detectableGamesEtag), null === (t = e.detectableGames) || void 0 === t || t.forEach((e) => N(e)));
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
        return Object.prototype.hasOwnProperty.call(v, t) ? v[t] : null;
    }
    isGameInDatabase(e) {
        return null != this.getGameByName(e.name) || (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & g) == 0);
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return O;
    }
    get lastFetched() {
        return S;
    }
    get detectableGamesTtl() {
        return m;
    }
    canFetchDetectableGames() {
        return !0 !== r && (null == S || Date.now() >= S + m);
    }
    getGameByExecutable(e) {
        return b[e];
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
            n = null != y[e];
        return u.G6.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (y[e] = !0), s.K.set(h, y);
    }
}
p(D, 'displayName', 'GameStore'),
    p(D, 'persistKey', 'GameStore'),
    p(D, 'migrations', [
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
            (0, _.isDesktop)()
                ? e
                : {
                      detectableGamesEtag: '',
                      detectableGames: []
                  }
    ]);
let w = new D(l.Z, {
    OVERLAY_INITIALIZE: A,
    GAMES_DATABASE_FETCH: C,
    GAMES_DATABASE_FETCH_FAIL: R,
    GAMES_DATABASE_UPDATE: P
});
