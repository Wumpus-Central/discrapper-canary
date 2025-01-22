let i;
var a,
    o,
    s = r(47120);
var l = r(442837),
    u = r(433517),
    c = r(570140),
    d = r(642047),
    f = r(695346),
    p = r(973616),
    h = r(358085);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = 'GameStoreReportedGames',
    g = 2147483648,
    E = new d.Z(),
    v = {},
    y = {},
    b = null !== (a = u.K.get(m)) && void 0 !== a ? a : {},
    I = '';
let T = null;
function S(e) {
    var n, r, i, a, o, s;
    return {
        id: e.id,
        name: e.name,
        executables: (null !== (n = e.executables) && void 0 !== n ? n : []).map(p.BA),
        overlay: null !== (r = e.overlay) && void 0 !== r && r,
        overlayWarn: null !== (i = e.overlay_warn) && void 0 !== i && i,
        overlayCompatibilityHook: null !== (a = e.overlay_compatibility_hook) && void 0 !== a && a,
        hook: null === (o = e.hook) || void 0 === o || o,
        aliases: null !== (s = e.aliases) && void 0 !== s ? s : [],
        supportsOutOfProcessOverlay: p.ZP.supportsOutOfProcessOverlay(e.overlay_methods)
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
        supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
    };
}
function C(e) {
    let n = e instanceof p.ZP ? A(e) : e;
    for (let r of (E.set(e.id, n), (v[e.name.toLowerCase()] = n), e.aliases)) v[r.toLowerCase()] = n;
    if ((0, h.isDesktop)()) for (let r of e.executables) y[r.name] = n;
}
function N(e) {
    let { detectableApplications: n } = e;
    for (let e of n) C(e);
}
function R() {
    i = !0;
}
function O() {
    i = !1;
}
function D(e) {
    let { games: n, etag: r } = e;
    for (let e of (null != r && I !== r && (I = r), n)) C(S(e));
    (i = void 0), (T = Date.now());
}
class L extends (o = l.ZP.PersistedStore) {
    initialize(e) {
        var n;
        null != e && (null != e.detectableGamesEtag && (I = e.detectableGamesEtag), null === (n = e.detectableGames) || void 0 === n || n.forEach((e) => C(e)));
    }
    getState() {
        return (0, h.isDesktop)()
            ? {
                  detectableGamesEtag: I,
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
        let n = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(v, n) ? v[n] : null;
    }
    isGameInDatabase(e) {
        return null != this.getGameByName(e.name) || (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & g) == 0);
    }
    get fetching() {
        return !0 === i;
    }
    get detectableGamesEtag() {
        return I;
    }
    get lastFetched() {
        return T;
    }
    getGameByExecutable(e) {
        return y[e];
    }
    getGameByGameData(e) {
        var n, r;
        let i;
        if (null == e.exePath) return null;
        let a = e.exePath.split('/').pop(),
            o = e.exePath.split('/').slice(-2).join('/');
        if (null != e.name) {
            if (null != (i = this.getGameByName(e.name)) && null != i.executables) {
                let e = i.executables.map((e) => e.name);
                if (e.includes(a) || e.includes(o)) return i;
            } else if (null != i) return null;
        }
        return null !== (r = null !== (n = this.getGameByExecutable(a)) && void 0 !== n ? n : this.getGameByExecutable(o)) && void 0 !== r ? r : i;
    }
    shouldReport(e) {
        let n = null != this.getGameByName(e),
            r = null != b[e];
        return f.G6.getSetting() && !i && !(n || r);
    }
    markGameReported(e) {
        (b[e] = !0), u.K.set(m, b);
    }
}
_(L, 'displayName', 'GameStore'),
    _(L, 'persistKey', 'GameStore'),
    _(L, 'migrations', [
        (e) => {
            var n, r;
            if (null == e)
                return {
                    detectableGamesEtag: '',
                    detectableGames: []
                };
            return {
                detectableGamesEtag: e.detectableGamesEtag,
                detectableGames: null !== (r = null === (n = e.detectableGames) || void 0 === n ? void 0 : n.map((e) => A(new p.ZP(e)))) && void 0 !== r ? r : []
            };
        },
        (e) =>
            (0, h.isDesktop)()
                ? e
                : {
                      detectableGamesEtag: '',
                      detectableGames: []
                  }
    ]),
    (n.Z = new L(c.Z, {
        OVERLAY_INITIALIZE: N,
        GAMES_DATABASE_FETCH: R,
        GAMES_DATABASE_FETCH_FAIL: O,
        GAMES_DATABASE_UPDATE: D
    }));
