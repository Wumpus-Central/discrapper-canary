let r;
n.d(t, {
    FZ: () => eI,
    ZP: () => eQ,
    b6: () => eE,
    ik: () => ey,
    rH: () => eg
}),
    n(47120),
    n(653041),
    n(757143),
    n(301563),
    n(733860),
    n(230036);
var i,
    o = n(392711),
    a = n.n(o),
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
    v = n(32300),
    O = n(948897),
    I = n(77498),
    S = n(283595),
    T = n(417363),
    N = n(626135),
    A = n(70956),
    C = n(877481),
    R = n(823379),
    P = n(358085),
    w = n(998502),
    D = n(145597),
    L = n(370862),
    x = n(981631),
    M = n(987650);
function k(e, t, n) {
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
                k(e, t, n[t]);
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
    F = 'RunningGameStore',
    V = !1,
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
    W = [],
    Y = !0,
    K = new Set(),
    z = [],
    q = [],
    Q = [],
    X = null,
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
    eo = null,
    ea = null,
    es = {},
    el = new Set(),
    ec = new Set(),
    eu = null,
    ed = null;
function ef(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function e_(e) {
    let t = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
    return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), ep(t, e), t;
}
function ep(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eh(e) {
    return H.some((t) => t.name === e.name && !0 === t.streamerTool);
}
function em() {
    if (Q.length > 0) {
        let e = X;
        (X = Q[0]), null != e && X.pid === e.pid ? (X.start = e.start) : (X.start = Date.now());
    } else X = null;
    let e = [];
    for (let t of Q) t.pid in es || ((es[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(es)) Q.some((t) => t.pid === e.pid) || (t.push(e), delete es[e.pid]);
    B.info('Running Games Changed', {
        runningGames: Q,
        added: e,
        removed: t,
        previousGames: es
    }),
        d.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: Q,
            added: e,
            removed: t
        });
}
function eg(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
function eE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [I.Z, S.Z];
    if (e.isLauncher)
        return {
            source: L.d.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: f.gl.Disabled
        };
    if ('pid' in e && !O.Z.acquireLock(e.pid))
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
    let o = y.v.legacyEnabled,
        a = (0, v.NW)('getRawOverlayGameStatus') && (0, D.supportsOutOfProcess)() && !t,
        s = et.enableOverlay[eg(e)],
        l = et.enableOverlayV3[eg(e)];
    if (null != s || null != l) {
        let e = null != l ? l : a,
            t = null != s ? s : o,
            n = e ? f.gl.OutOfProcess : f.gl.Hook;
        return {
            source: L.d.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: a ? n : f.gl.Hook
        };
    }
    let c = null == e.id ? null : er[e.id];
    if (null != c) {
        var u, d;
        let e = null != (u = c.enabledOOP) ? u : a,
            t = null != (d = c.enabled) ? d : o,
            n = e ? f.gl.OutOfProcess : f.gl.Hook;
        return {
            source: L.d.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: a ? n : f.gl.Hook
        };
    }
    return {
        source: L.d.DEFAULT,
        enabledOOP: V || a,
        enabledLegacy: V,
        overlayMethod: a ? f.gl.OutOfProcess : f.gl.Disabled
    };
}
function eb(e) {
    let t = et.enableOverlay[eg(e)],
        n = et.enableOverlayV3[eg(e)];
    if (null != t || null != n) return null != t ? t : n;
    let r = eE(e);
    return r.enabledLegacy || r.enabledOOP;
}
function ey(e) {
    let t = et.enableDetection[eg(e)];
    return null == t || t;
}
function ev(e) {
    return !e.hidden && ey(e);
}
function eO() {
    u.K.set(F, et);
}
function eI(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eq, I.Z, S.Z],
        i = G(j({}, e), {
            played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * A.Z.Millis.SECOND)).fromNow() : ' ',
            overlay: eb(e),
            verified: n.isGameInDatabase(e),
            detectable: ey(e)
        });
    return null != e.id && null != er[e.id] && (i.overlayWarn = er[e.id].warn), i;
}
function eS(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
}
function eT() {
    let e = !1;
    return (
        (z = a()
            .values(S.Z.libraryApplications)
            .reduce((t, n) => {
                let r = I.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of T.Z.getLaunchOptions(n.id, n.branchId)) {
                    let o = ''.concat(n.id, ':').concat(n.branchId);
                    K.has(o) || ((e = !0), K.add(o));
                    let { fullExecutablePath: a } = i,
                        s = a.replace(/\\/g, '/').toLowerCase();
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
        e && eN(),
        e
    );
}
function eN() {
    if (!__OVERLAY__ && P.isPlatformEmbedded) {
        let e = [...z, ...a().values(et.gameOverrides)];
        w.ZP.setGameCandidateOverrides(e);
    }
}
function eA(e) {
    return null != $[e.exePath] ? x.GQo.DISCORD : /steamapps/.test(e.cmdLine) ? x.GQo.STEAM : /-epicapp/.test(e.cmdLine) ? x.GQo.EPIC : e.distributor;
}
function eC(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                et.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = et.gameOverrides[eg(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return ep(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                et.gamesSeen.unshift(e_(e));
            }
        }),
        et.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eO(),
        C.Z.setRecentGames(eR().map((e) => eI(e))));
}
function eR() {
    let e = a().values(et.gameOverrides);
    return et.gamesSeen.filter((e) => void 0 === et.gameOverrides[eg(e)]).concat(e);
}
function eP(e, t) {
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
function ew(e) {
    eC(Q);
}
function eD(e) {
    q = e.games;
}
function eL() {
    Y = !1;
}
function ex(e) {
    let { pid: t } = e;
    (eo = t), (ea = null);
}
function eM(e) {
    let { pid: t } = e;
    (ea = t), (eo = null);
}
function ek() {
    eo = null;
}
function ej(e) {
    let t,
        n = e.pid,
        r = Q.find((e) => e.pid === n);
    if (null == r) {
        let e = q.find((e) => e.pid === n);
        if (null == e) return;
        ((r = j({}, e)).hidden = !1), Q.push(r), (t = eg(r));
    } else (t = eg(r)), r.hidden && (ee[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)), (et.gameOverrides[t] = G(j({}, r), { add: !0 })), eC(Q), eN(), eO(), em();
}
function eU() {
    eN();
}
function eG(e) {
    (eu = e.level), (ed = e.intervalSeconds);
}
function eB() {
    (eu = null), (ed = null), el.clear();
}
function eF(e) {
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
            let t = W.some((t) => e.cleanedExePath.includes(t));
            return t && el.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        N.default.track(x.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: W,
            paths: t,
            debugging_level: eu,
            interval_seconds: ed
        });
}
function eV(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== et.enableOverlay[eg(t)],
        o = r !== et.enableOverlayV3[eg(t)];
    if ((i && (et.enableOverlay[eg(t)] = n), o && null != r && (et.enableOverlayV3[eg(t)] = r), eO(), !__OVERLAY__ && null != (null != t.id ? I.Z.getDetectableGame(t.id) : null))) {
        var a, s;
        i && (0, b.ou)(n, b.AE.LEGACY_GAME, null != (a = t.id) ? a : null), o && null != r && (0, b.ou)(r, b.AE.OOP_GAME, null != (s = t.id) ? s : null);
    }
}
function eZ(e) {
    let { game: t } = e,
        n = ey(t);
    (et.enableDetection[eg(t)] = !n), eO(), N.default.track(x.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function eH(e) {
    let t = eg(e.game),
        n = et.gameOverrides[t];
    null == n && ((n = eS(e.game)).add = !0), (n.name = e.newName);
    let r = eg(n);
    delete et.gameOverrides[t],
        (et.gameOverrides[r] = n),
        ef(et.enableOverlay, t, r),
        ef(et.enableDetection, t, r),
        ef(ee, t, r),
        et.gamesSeen.forEach((n) => {
            eg(n) === t && (n.name = e.newName);
        });
    let i = !1;
    Q.forEach((n) => {
        eg(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eN(),
        eO(),
        i && em();
}
function eW(e) {
    let t = eg(e.game);
    delete et.gameOverrides[t],
        delete et.enableOverlay[t],
        delete et.enableDetection[t],
        (et.gamesSeen = et.gamesSeen.filter((e) => eg(e) !== t)),
        ee[t] &&
            (Q.forEach((e) => {
                t === eg(e) && (e.hidden = !0);
            }),
            delete ee[t],
            em()),
        eN(),
        eO();
}
function eY(e) {
    var t;
    if (__OVERLAY__ || !P.isPlatformEmbedded) return;
    let n = w.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = I.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}
function eK() {
    g.Z.hasLoadedExperiments && Z.length > 0 && (eC(Z), (Z = []));
}
!__OVERLAY__ &&
    ((0, P.isDesktop)() || M.iP) &&
    (en = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = I.Z.games,
            i = (0, v.NW)('handleGamesDatabaseUpdate') && (0, D.supportsOutOfProcess)();
        for (let e of n) {
            var o, a, s, l;
            let t = i || _.r.enabledOOP,
                n = null != (o = e.overlay) ? o : _.r.enabled;
            er[e.id] = {
                compatibilityHook: null != (a = e.overlayCompatibilityHook) ? a : _.r.compatibilityHook,
                warn: null != (s = e.overlayWarn) ? s : _.r.warn,
                enabled: n,
                enabledOOP: t,
                allowHook: null != (l = e.hook) ? l : _.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        [...n, ...H].forEach((n) => {
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
                e = e.filter(
                    (e) => (
                        (e.distributor = eA(e)),
                        (e.isLauncher = e.isLauncher || t.has(e.exeName)),
                        e.isLauncher && null != e.id && (i[e.id] = e),
                        (e.windowHandle = eP(e.pid, e.windowHandle)),
                        null ==
                            H.find((t) => {
                                let { name: n } = t;
                                return n === e.name;
                            }) || (n.push(e), !1)
                    )
                );
                let o = n.filter(eh).length;
                o !== ei &&
                    ((ei = o),
                    d.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: ei
                    })),
                    (Q = e),
                    (J = n),
                    (r = i),
                    em();
            }),
            eN();
    });
class ez extends (i = c.ZP.Store) {
    initialize() {
        var e, t, n, r, i;
        let o =
            null != (e = u.K.get(F))
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
            (a()
                .values(null != (t = o.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = eg(e);
                    et.gameOverrides[t] = e;
                }),
            (et.enableOverlay = null != (n = o.enableOverlay) ? n : {}),
            (et.enableOverlayV3 = null != (r = o.enableOverlayV3) ? r : {}),
            (et.enableDetection = null != (i = o.enableDetection) ? i : {}),
            eN(),
            Array.isArray(o.gamesSeen))
        )
            for (let e of o.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        this.waitFor(I.Z, g.Z), (Z = o.gamesSeen), this.syncWith([g.Z], eK), this.syncWith([S.Z, I.Z, T.Z], a().throttle(eT, 1000)), s && eO();
    }
    getVisibleGame() {
        return null == X || ev(X) ? X : null;
    }
    getCurrentGameForAnalytics() {
        return X;
    }
    getVisibleRunningGames() {
        return Q.filter(ev);
    }
    getRunningGames() {
        return Q;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of Q) null != $[t.exePath] && e.push($[t.exePath]);
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
        return null != (t = Q.find((t) => t.pid === e)) ? t : null;
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
        return null != eo && eo === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != ea && ea === e;
    }
    getCandidateGames() {
        return q.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === et.gameOverrides[eg(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eR();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eg(e);
                n = n.filter((e) => eg(e) !== t);
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
        return et.gameOverrides[eg(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return B.verbose('getOverlayEnabledForGame: Overlay not supported.', e), !1;
        let t = eE(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return B.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let t = eE(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null != (n = null == (t = J.find((t) => (0, E.Z)(e, t.windowHandle))) ? void 0 : t.name) ? n : null;
    }
    get canShowAdminWarning() {
        return Y;
    }
    isDetectionEnabled(e) {
        return ey(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        ec.add(null != (t = (0, h.F)(e)) ? t : e);
    }
}
k(ez, 'displayName', 'RunningGameStore');
let eq = new ez(d.Z, {
        RUNNING_GAMES_CHANGE: ew,
        CANDIDATE_GAMES_CHANGE: eD,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eL,
        PERMISSION_REQUEST_ELEVATED_PROCESS: ex,
        PERMISSION_CLEAR_ELEVATED_PROCESS: ek,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eM,
        RUNNING_GAME_ADD_OVERRIDE: ej,
        RUNNING_GAME_TOGGLE_OVERLAY: eV,
        RUNNING_GAME_TOGGLE_DETECTION: eZ,
        RUNNING_GAME_EDIT_NAME: eH,
        RUNNING_GAME_DELETE_ENTRY: eW,
        GAMES_DATABASE_UPDATE: en,
        GAME_LAUNCH_SUCCESS: eY,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eU,
        GAME_DETECTION_DEBUGGING_START: eG,
        GAME_DETECTION_DEBUGGING_STOP: eB,
        GAME_DETECTION_DEBUGGING_TICK: eF
    }),
    eQ = eq;
