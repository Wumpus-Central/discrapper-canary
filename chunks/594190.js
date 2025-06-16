let r;
n.d(t, {
    FZ: () => eA,
    ZP: () => e$,
    b6: () => eO,
    ik: () => eI,
    rH: () => ey
}),
    n(388685),
    n(35282),
    n(539854),
    n(704826),
    n(290780),
    n(642613);
var i,
    a = n(392711),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(433517),
    d = n(570140),
    f = n(615287),
    _ = n(593472),
    p = n(726542),
    h = n(439849),
    m = n(710845),
    g = n(353926),
    E = n(855403),
    b = n(444295),
    y = n(454991),
    O = n(32300),
    v = n(948897),
    I = n(77498),
    T = n(283595),
    S = n(417363),
    A = n(626135),
    N = n(70956),
    C = n(877481),
    R = n(823379),
    P = n(358085),
    w = n(998502),
    D = n(145597),
    L = n(370862),
    x = n(981631),
    k = n(987650);
function M(e, t, n) {
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
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = new m.Z('RunningGameStore'),
    V = 'RunningGameStore',
    F = !1,
    Z = [],
    H = [
        {
            executables: [
                {
                    os: 'win32',
                    name: 'obs/obs.exe'
                },
                {
                    os: 'win32',
                    name: 'obs32.exe'
                },
                {
                    os: 'win32',
                    name: 'obs64.exe'
                },
                {
                    os: 'darwin',
                    name: 'OBS.app'
                },
                {
                    os: 'linux',
                    name: 'obs'
                }
            ],
            name: 'OBS',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'XSplit.Gamecaster.exe'
                },
                {
                    os: 'win32',
                    name: 'XSplit.Core.exe'
                },
                {
                    os: 'win32',
                    name: 'Gamecaster.exe'
                }
            ],
            name: 'XSplit',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'bebo.exe'
                }
            ],
            name: 'Bebo',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'Streamlabs OBS.exe'
                },
                {
                    os: 'win32',
                    name: 'Streamlabs Desktop.exe'
                },
                {
                    os: 'darwin',
                    name: 'Streamlabs Desktop.app'
                }
            ],
            name: 'Streamlabs Desktop',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'TwitchStudio.exe'
                },
                {
                    os: 'darwin',
                    name: 'Twitch Studio.app'
                }
            ],
            name: 'Twitch Studio',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'Spotify.exe'
                },
                {
                    os: 'darwin',
                    name: 'Spotify.app'
                },
                {
                    os: 'linux',
                    name: 'spotify'
                }
            ],
            name: p.Z.get(x.ABu.SPOTIFY).name
        }
    ],
    Y = [],
    W = !0,
    K = new Set(),
    z = [],
    q = [],
    X = [],
    Q = null,
    J = [],
    $ = {},
    ee = {},
    et = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {}
    },
    en = function () {},
    er = {},
    ei = 0,
    ea = null,
    eo = null,
    es = {},
    el = new Set(),
    ec = new Set(),
    eu = null,
    ed = null,
    ef = new Map(),
    e_ = new Map();
function ep(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function eh(e) {
    let t = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
    return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), em(t, e), t;
}
function em(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eg(e) {
    var t, n, r, i;
    let a = e_.get(null != (r = null == (t = e.name) ? void 0 : t.toLowerCase()) ? r : '');
    if (null != a) return a;
    let o = null != e.exeName && '' !== e.exeName ? e.exeName : null != (i = null == (n = e.exePath.split('/').pop()) ? void 0 : n.split('\\').pop()) ? i : '',
        s = ef.get(o.toLowerCase());
    if (null != s) return s;
    for (let [t, n] of ef) {
        let r = e.exePath.toLowerCase(),
            i = t.toLowerCase();
        if (r.endsWith(i)) {
            let e = r.length - i.length;
            if (0 === e || '/' === r[e - 1] || '\\' === r[e - 1]) return n;
        }
    }
    return null;
}
function eE(e) {
    let t = eg(e);
    return (null == t ? void 0 : t.streamerTool) === !0;
}
function eb() {
    if (X.length > 0) {
        let e = Q;
        (Q = X[0]), null != e && Q.pid === e.pid ? (Q.start = e.start) : (Q.start = Date.now());
    } else Q = null;
    let e = [];
    for (let t of X) t.pid in es || ((es[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(es)) X.some((t) => t.pid === e.pid) || (t.push(e), delete es[e.pid]);
    B.info('Running Games Changed', {
        runningGames: X,
        added: e,
        removed: t,
        previousGames: es
    }),
        d.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: X,
            added: e,
            removed: t
        });
}
function ey(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
function eO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [I.Z, T.Z];
    if (e.isLauncher)
        return {
            source: L.d.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: f.gl.Disabled
        };
    if ('pid' in e && !v.Z.acquireLock(e.pid))
        return {
            source: L.d.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: f.gl.Disabled
        };
    let i = n.getGameByName(e.name);
    if (null != i) {
        let e = r.getActiveLibraryApplication(i.id);
        if (null != e)
            return {
                source: L.d.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: f.gl.Disabled
            };
    }
    let a = y.v.legacyEnabled,
        o = (0, O.NW)('getRawOverlayGameStatus') && (0, D.supportsOutOfProcess)() && !t,
        s = et.enableOverlay[ey(e)],
        l = et.enableOverlayV3[ey(e)];
    if (null != s || null != l) {
        let e = null != l ? l : o,
            t = null != s ? s : a,
            n = e ? f.gl.OutOfProcess : f.gl.Hook;
        return {
            source: L.d.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: o ? n : f.gl.Hook
        };
    }
    let c = null == e.id ? null : er[e.id];
    if (null != c) {
        var u, d;
        let e = null != (u = c.enabledOOP) ? u : o,
            t = null != (d = c.enabled) ? d : a,
            n = e ? f.gl.OutOfProcess : f.gl.Hook;
        return {
            source: L.d.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: o ? n : f.gl.Hook
        };
    }
    return {
        source: L.d.DEFAULT,
        enabledOOP: F || o,
        enabledLegacy: F,
        overlayMethod: o ? f.gl.OutOfProcess : f.gl.Disabled
    };
}
function ev(e) {
    let t = et.enableOverlay[ey(e)],
        n = et.enableOverlayV3[ey(e)];
    if (null != t || null != n) return null != t ? t : n;
    let r = eO(e);
    return r.enabledLegacy || r.enabledOOP;
}
function eI(e) {
    let t = et.enableDetection[ey(e)];
    return null == t || t;
}
function eT(e) {
    return !e.hidden && eI(e);
}
function eS() {
    u.K.set(V, et);
}
function eA(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eJ, I.Z, T.Z],
        i = G(j({}, e), {
            played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * N.Z.Millis.SECOND)).fromNow() : ' ',
            overlay: ev(e),
            verified: n.isGameInDatabase(e),
            detectable: eI(e)
        });
    return null != e.id && null != er[e.id] && (i.overlayWarn = er[e.id].warn), i;
}
function eN(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
}
function eC() {
    let e = !1;
    return (
        (z = o()
            .values(T.Z.libraryApplications)
            .reduce((t, n) => {
                let r = I.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of S.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = ''.concat(n.id, ':').concat(n.branchId);
                    K.has(a) || ((e = !0), K.add(a));
                    let { fullExecutablePath: o } = i,
                        s = o.replace(/\\/g, '/').toLowerCase();
                    ($[s] = r.id),
                        t.push({
                            id: r.id,
                            name: r.name,
                            exePath: s,
                            cmdLine: '',
                            lastFocused: 0,
                            add: !0
                        });
                }
                return t;
            }, [])),
        e && eR(),
        e
    );
}
function eR() {
    if (!__OVERLAY__ && P.isPlatformEmbedded) {
        let e = [...z, ...o().values(et.gameOverrides)];
        w.ZP.setGameCandidateOverrides(e);
    }
}
function eP(e) {
    return null != $[e.exePath] ? x.GQo.DISCORD : /steamapps/.test(e.cmdLine) ? x.GQo.STEAM : /-epicapp/.test(e.cmdLine) ? x.GQo.EPIC : e.distributor;
}
function ew(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                et.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = et.gameOverrides[ey(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return em(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                et.gamesSeen.unshift(eh(e));
            }
        }),
        et.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eS(),
        C.Z.setRecentGames(eD().map((e) => eA(e))));
}
function eD() {
    let e = o().values(et.gameOverrides);
    return et.gamesSeen.filter((e) => void 0 === et.gameOverrides[ey(e)]).concat(e);
}
function eL(e, t) {
    if (void 0 === t) {
        let t = w.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && '0' !== n ? n : null;
        }
        return null;
    }
    return '0' === t ? null : t;
}
function ex(e) {
    ew(X);
}
function ek(e) {
    q = e.games;
}
function eM() {
    W = !1;
}
function ej(e) {
    let { pid: t } = e;
    (ea = t), (eo = null);
}
function eU(e) {
    let { pid: t } = e;
    (eo = t), (ea = null);
}
function eG() {
    ea = null;
}
function eB(e) {
    let t,
        n = e.pid,
        r = X.find((e) => e.pid === n);
    if (null == r) {
        let e = q.find((e) => e.pid === n);
        if (null == e) return;
        ((r = j({}, e)).hidden = !1), X.push(r), (t = ey(r));
    } else (t = ey(r)), r.hidden && (ee[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)), (et.gameOverrides[t] = G(j({}, r), { add: !0 })), ew(X), eR(), eS(), eb();
}
function eV() {
    eR();
}
function eF(e) {
    (eu = e.level), (ed = e.intervalSeconds);
}
function eZ() {
    (eu = null), (ed = null), el.clear();
}
function eH(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null != (t = (0, h.F)(e.exePath)) ? t : e.exePath
            };
        })
        .filter((e) => {
            if (el.has(e.pid) || ec.has(e.cleanedExePath)) return !1;
            let t = Y.some((t) => e.cleanedExePath.includes(t));
            return t && el.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        A.default.track(x.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: Y,
            paths: t,
            debugging_level: eu,
            interval_seconds: ed
        });
}
function eY(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== et.enableOverlay[ey(t)],
        a = r !== et.enableOverlayV3[ey(t)];
    if ((i && (et.enableOverlay[ey(t)] = n), a && null != r && (et.enableOverlayV3[ey(t)] = r), eS(), !__OVERLAY__ && null != (null != t.id ? I.Z.getDetectableGame(t.id) : null))) {
        var o, s;
        i && (0, b.ou)(n, b.AE.LEGACY_GAME, null != (o = t.id) ? o : null), a && null != r && (0, b.ou)(r, b.AE.OOP_GAME, null != (s = t.id) ? s : null);
    }
}
function eW(e) {
    let { game: t } = e,
        n = eI(t);
    (et.enableDetection[ey(t)] = !n), eS(), A.default.track(x.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function eK(e) {
    let t = ey(e.game),
        n = et.gameOverrides[t];
    null == n && ((n = eN(e.game)).add = !0), (n.name = e.newName);
    let r = ey(n);
    delete et.gameOverrides[t],
        (et.gameOverrides[r] = n),
        ep(et.enableOverlay, t, r),
        ep(et.enableDetection, t, r),
        ep(ee, t, r),
        et.gamesSeen.forEach((n) => {
            ey(n) === t && (n.name = e.newName);
        });
    let i = !1;
    X.forEach((n) => {
        ey(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eR(),
        eS(),
        i && eb();
}
function ez(e) {
    let t = ey(e.game);
    delete et.gameOverrides[t],
        delete et.enableOverlay[t],
        delete et.enableDetection[t],
        (et.gamesSeen = et.gamesSeen.filter((e) => ey(e) !== t)),
        ee[t] &&
            (X.forEach((e) => {
                t === ey(e) && (e.hidden = !0);
            }),
            delete ee[t],
            eb()),
        eR(),
        eS();
}
function eq(e) {
    var t;
    if (__OVERLAY__ || !P.isPlatformEmbedded) return;
    let n = w.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = I.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}
function eX() {
    g.Z.hasLoadedExperiments && Z.length > 0 && (ew(Z), (Z = []));
}
H.forEach((e) => {
    var t;
    e_.set(e.name.toLowerCase(), e),
        (null != (t = e.executables) ? t : []).forEach((t) => {
            ef.set(t.name.toLowerCase(), e);
        });
}),
    !__OVERLAY__ &&
        ((0, P.isDesktop)() || k.iP) &&
        (en = function () {
            let e = [],
                t = new Set();
            r = {};
            let n = I.Z.games,
                i = (0, O.NW)('handleGamesDatabaseUpdate') && (0, D.supportsOutOfProcess)();
            for (let e of n) {
                var a, o, s, l;
                let t = i || _.r.enabledOOP,
                    n = null != (a = e.overlay) ? a : _.r.enabled;
                er[e.id] = {
                    compatibilityHook: null != (o = e.overlayCompatibilityHook) ? o : _.r.compatibilityHook,
                    warn: null != (s = e.overlayWarn) ? s : _.r.warn,
                    enabled: n,
                    enabledOOP: t,
                    allowHook: null != (l = e.hook) ? l : _.r.allowHook,
                    supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
                };
            }
            let c = new Set();
            H.forEach((e) => {
                var t;
                (null != (t = e.executables) ? t : []).forEach((e) => {
                    c.add(e.name.toLowerCase());
                });
            }),
                [
                    ...n.filter((e) => {
                        var t;
                        return !(null != (t = e.executables) ? t : []).some((e) => ef.has(e.name.toLowerCase()));
                    }),
                    ...H
                ].forEach((n) => {
                    let r = null != n.executables ? n.executables : [],
                        i = {};
                    r.forEach((e) => {
                        let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : 'null';
                        null == i[n] && (i[n] = []), i[n].push(e.name), e.isLauncher && t.add(e.name);
                    }),
                        Object.keys(i).forEach((t) =>
                            e.push({
                                name: n.name,
                                id: n.id,
                                executables: i[t],
                                cmdLine: 'null' !== t ? t : null
                            })
                        );
                }),
                (e = e.filter((e) => null != e.executables && e.executables.length > 0)),
                w.ZP.setObservedGamesCallback(e, (e) => {
                    let n = [],
                        i = {};
                    e = e.filter((e) => ((e.distributor = eP(e)), (e.isLauncher = e.isLauncher || t.has(e.exeName)), e.isLauncher && null != e.id && (i[e.id] = e), (e.windowHandle = eL(e.pid, e.windowHandle)), null == eg(e) || (n.push(e), !1)));
                    let a = n.filter(eE).length;
                    a !== ei &&
                        ((ei = a),
                        d.Z.dispatch({
                            type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                            count: ei
                        })),
                        (X = e),
                        (J = n),
                        (r = i),
                        eb();
                }),
                eR();
        });
class eQ extends (i = c.ZP.Store) {
    initialize() {
        var e, t, n, r, i;
        let a =
            null != (e = u.K.get(V))
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableOverlayV3: {},
                      enableDetection: {}
                  };
        et.gameOverrides = {};
        let s = !1;
        if (
            (o()
                .values(null != (t = a.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = ey(e);
                    et.gameOverrides[t] = e;
                }),
            (et.enableOverlay = null != (n = a.enableOverlay) ? n : {}),
            (et.enableOverlayV3 = null != (r = a.enableOverlayV3) ? r : {}),
            (et.enableDetection = null != (i = a.enableDetection) ? i : {}),
            eR(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        this.waitFor(I.Z, g.Z), (Z = a.gamesSeen), this.syncWith([g.Z], eX), this.syncWith([T.Z, I.Z, S.Z], o().throttle(eC, 1000)), s && eS();
    }
    getVisibleGame() {
        return null == Q || eT(Q) ? Q : null;
    }
    getCurrentGameForAnalytics() {
        return Q;
    }
    getVisibleRunningGames() {
        return X.filter(eT);
    }
    getRunningGames() {
        return X;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of X) null != $[t.exePath] && e.push($[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => I.Z.getGameByName(e.name))
            .filter(R.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var t;
        return null != (t = X.find((t) => t.pid === e)) ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : j({}, er[t.id]);
    }
    shouldElevateProcessForPID(e) {
        return null != ea && ea === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eo && eo === e;
    }
    getCandidateGames() {
        return q.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === et.gameOverrides[ey(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eD();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = ey(e);
                n = n.filter((e) => ey(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return et.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return J.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(et.gameOverrides);
    }
    getOverrideForGame(e) {
        return et.gameOverrides[ey(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return B.verbose('getOverlayEnabledForGame: Overlay not supported.', e), !1;
        let t = eO(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return B.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let t = eO(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null != (n = null == (t = J.find((t) => (0, E.Z)(e, t.windowHandle))) ? void 0 : t.name) ? n : null;
    }
    get canShowAdminWarning() {
        return W;
    }
    isDetectionEnabled(e) {
        return eI(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        ec.add(null != (t = (0, h.F)(e)) ? t : e);
    }
}
M(eQ, 'displayName', 'RunningGameStore');
let eJ = new eQ(d.Z, {
        RUNNING_GAMES_CHANGE: ex,
        CANDIDATE_GAMES_CHANGE: ek,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eM,
        PERMISSION_REQUEST_ELEVATED_PROCESS: ej,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eG,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eU,
        RUNNING_GAME_ADD_OVERRIDE: eB,
        RUNNING_GAME_TOGGLE_OVERLAY: eY,
        RUNNING_GAME_TOGGLE_DETECTION: eW,
        RUNNING_GAME_EDIT_NAME: eK,
        RUNNING_GAME_DELETE_ENTRY: ez,
        GAMES_DATABASE_UPDATE: en,
        GAME_LAUNCH_SUCCESS: eq,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eV,
        GAME_DETECTION_DEBUGGING_START: eF,
        GAME_DETECTION_DEBUGGING_STOP: eZ,
        GAME_DETECTION_DEBUGGING_TICK: eH
    }),
    e$ = eJ;
