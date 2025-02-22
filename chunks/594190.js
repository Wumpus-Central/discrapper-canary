let r;
n.d(t, {
    FZ: () => eO,
    ZP: () => eq,
    b6: () => eg,
    ik: () => ev,
    rH: () => em
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
    p = n(593472),
    _ = n(726542),
    h = n(439849),
    m = n(710845),
    g = n(353926),
    E = n(855403),
    v = n(444295),
    b = n(454991),
    y = n(32300),
    O = n(77498),
    S = n(283595),
    I = n(417363),
    T = n(626135),
    N = n(70956),
    A = n(877481),
    C = n(823379),
    R = n(358085),
    P = n(998502),
    w = n(145597),
    D = n(370862),
    x = n(981631),
    L = n(987650);
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
function k(e) {
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
function j(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = new m.Z('RunningGameStore'),
    B = 'RunningGameStore',
    Z = !1,
    F = [],
    V = [
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
            name: _.Z.get(x.ABu.SPOTIFY).name
        }
    ],
    H = [],
    W = !0,
    Y = new Set(),
    K = [],
    z = [],
    q = [],
    Q = null,
    X = [],
    J = {},
    $ = {},
    ee = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {}
    },
    et = function () {},
    en = {},
    er = 0,
    ei = null,
    eo = null,
    ea = {},
    es = new Set(),
    el = new Set(),
    ec = null,
    eu = null;
function ed(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function ef(e) {
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
function e_(e) {
    return V.some((t) => t.name === e.name && !0 === t.streamerTool);
}
function eh() {
    if (q.length > 0) {
        let e = Q;
        (Q = q[0]), null != e && Q.pid === e.pid ? (Q.start = e.start) : (Q.start = Date.now());
    } else Q = null;
    let e = [];
    for (let t of q) t.pid in ea || ((ea[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ea)) q.some((t) => t.pid === e.pid) || (t.push(e), delete ea[e.pid]);
    G.info('Running Games Changed', {
        runningGames: q,
        added: e,
        removed: t,
        previousGames: ea
    }),
        d.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: q,
            added: e,
            removed: t
        });
}
function em(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [O.Z, S.Z];
    if (e.isLauncher)
        return {
            source: D.d.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: f.gl.Disabled
        };
    let i = n.getGameByName(e.name);
    if (null != i) {
        let e = r.getActiveLibraryApplication(i.id);
        if (null != e)
            return {
                source: D.d.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: f.gl.Disabled
            };
    }
    let o = b.v.legacyEnabled,
        a = (0, y.NW)('getRawOverlayGameStatus') && (0, w.VS)() && !t,
        s = ee.enableOverlay[em(e)],
        l = ee.enableOverlayV3[em(e)];
    if (null != s || null != l) {
        let e = null != l ? l : a,
            t = null != s ? s : o,
            n = e ? f.gl.OutOfProcess : f.gl.Hook;
        return {
            source: D.d.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: a ? n : f.gl.Hook
        };
    }
    let c = null == e.id ? null : en[e.id];
    if (null != c) {
        var u, d;
        let e = null !== (u = c.enabledOOP) && void 0 !== u ? u : a,
            t = null !== (d = c.enabled) && void 0 !== d ? d : o,
            n = e ? f.gl.OutOfProcess : f.gl.Hook;
        return {
            source: D.d.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: a ? n : f.gl.Hook
        };
    }
    return {
        source: D.d.DEFAULT,
        enabledOOP: Z || a,
        enabledLegacy: Z,
        overlayMethod: a ? f.gl.OutOfProcess : f.gl.Disabled
    };
}
function eE(e) {
    let t = ee.enableOverlay[em(e)],
        n = ee.enableOverlayV3[em(e)];
    if (null != t || null != n) return null != t ? t : n;
    let r = eg(e);
    return r.enabledLegacy || r.enabledOOP;
}
function ev(e) {
    let t = ee.enableDetection[em(e)];
    return null == t || t;
}
function eb(e) {
    return !e.hidden && ev(e);
}
function ey() {
    u.K.set(B, ee);
}
function eO(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [ez, O.Z, S.Z],
        i = U(k({}, e), {
            played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * N.Z.Millis.SECOND)).fromNow() : ' ',
            overlay: eE(e),
            verified: n.isGameInDatabase(e),
            detectable: ev(e)
        });
    if (null != e.id && null != en[e.id]) {
        let t = en[e.id];
        i.overlayWarn = t.warn;
    }
    return i;
}
function eS(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
}
function eI() {
    let e = !1;
    return (
        (K = a()
            .values(S.Z.libraryApplications)
            .reduce((t, n) => {
                let r = O.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of I.Z.getLaunchOptions(n.id, n.branchId)) {
                    let o = ''.concat(n.id, ':').concat(n.branchId);
                    Y.has(o) || ((e = !0), Y.add(o));
                    let { fullExecutablePath: a } = i,
                        s = a.replace(/\\/g, '/').toLowerCase();
                    (J[s] = r.id),
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
        e && eT(),
        e
    );
}
function eT() {
    if (!__OVERLAY__ && R.isPlatformEmbedded) {
        let e = [...K, ...a().values(ee.gameOverrides)];
        P.ZP.setGameCandidateOverrides(e);
    }
}
function eN(e) {
    return null != J[e.exePath] ? x.GQo.DISCORD : /steamapps/.test(e.cmdLine) ? x.GQo.STEAM : /-epicapp/.test(e.cmdLine) ? x.GQo.EPIC : e.distributor;
}
function eA(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                ee.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = ee.gameOverrides[em(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return ep(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                ee.gamesSeen.unshift(ef(e));
            }
        }),
        ee.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ey(),
        A.Z.setRecentGames(eC().map((e) => eO(e))));
}
function eC() {
    let e = a().values(ee.gameOverrides);
    return ee.gamesSeen.filter((e) => void 0 === ee.gameOverrides[em(e)]).concat(e);
}
function eR(e, t) {
    if (void 0 === t) {
        let t = P.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && '0' !== n ? n : null;
        }
        return null;
    }
    return '0' === t ? null : t;
}
function eP(e) {
    eA(q);
}
function ew(e) {
    z = e.games;
}
function eD() {
    W = !1;
}
function ex(e) {
    let { pid: t } = e;
    (ei = t), (eo = null);
}
function eL(e) {
    let { pid: t } = e;
    (eo = t), (ei = null);
}
function eM() {
    ei = null;
}
function ek(e) {
    let t;
    let n = e.pid,
        r = q.find((e) => e.pid === n);
    if (null == r) {
        let e = z.find((e) => e.pid === n);
        if (null == e) return;
        ((r = k({}, e)).hidden = !1), q.push(r), (t = em(r));
    } else (t = em(r)), r.hidden && ($[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)), (ee.gameOverrides[t] = U(k({}, r), { add: !0 })), eA(q), eT(), ey(), eh();
}
function ej() {
    eT();
}
function eU(e) {
    (ec = e.level), (eu = e.intervalSeconds);
}
function eG() {
    (ec = null), (eu = null), es.clear();
}
function eB(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null !== (t = (0, h.F)(e.exePath)) && void 0 !== t ? t : e.exePath
            };
        })
        .filter((e) => {
            if (es.has(e.pid) || el.has(e.cleanedExePath)) return !1;
            let t = H.some((t) => e.cleanedExePath.includes(t));
            return t && es.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        T.default.track(x.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: H,
            paths: t,
            debugging_level: ec,
            interval_seconds: eu
        });
}
function eZ(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== ee.enableOverlay[em(t)],
        o = r !== ee.enableOverlayV3[em(t)];
    if ((i && (ee.enableOverlay[em(t)] = n), o && null != r && (ee.enableOverlayV3[em(t)] = r), ey(), !__OVERLAY__ && null != (null != t.id ? O.Z.getDetectableGame(t.id) : null))) {
        var a, s;
        i && (0, v.ou)(n, v.AE.LEGACY_GAME, null !== (a = t.id) && void 0 !== a ? a : null), o && null != r && (0, v.ou)(r, v.AE.OOP_GAME, null !== (s = t.id) && void 0 !== s ? s : null);
    }
}
function eF(e) {
    let { game: t } = e,
        n = ev(t);
    (ee.enableDetection[em(t)] = !n), ey(), T.default.track(x.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function eV(e) {
    let t = em(e.game),
        n = ee.gameOverrides[t];
    null == n && ((n = eS(e.game)).add = !0), (n.name = e.newName);
    let r = em(n);
    delete ee.gameOverrides[t],
        (ee.gameOverrides[r] = n),
        ed(ee.enableOverlay, t, r),
        ed(ee.enableDetection, t, r),
        ed($, t, r),
        ee.gamesSeen.forEach((n) => {
            em(n) === t && (n.name = e.newName);
        });
    let i = !1;
    q.forEach((n) => {
        em(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eT(),
        ey(),
        i && eh();
}
function eH(e) {
    let t = em(e.game);
    delete ee.gameOverrides[t],
        delete ee.enableOverlay[t],
        delete ee.enableDetection[t],
        (ee.gamesSeen = ee.gamesSeen.filter((e) => em(e) !== t)),
        $[t] &&
            (q.forEach((e) => {
                t === em(e) && (e.hidden = !0);
            }),
            delete $[t],
            eh()),
        eT(),
        ey();
}
function eW(e) {
    var t;
    if (__OVERLAY__ || !R.isPlatformEmbedded) return;
    let n = P.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = O.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null !== (t = e.pids) && void 0 !== t ? t : []);
}
function eY() {
    g.Z.hasLoadedExperiments && F.length > 0 && (eA(F), (F = []));
}
!__OVERLAY__ &&
    ((0, R.isDesktop)() || L.iP) &&
    (et = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = O.Z.games,
            i = (0, y.NW)('handleGamesDatabaseUpdate') && (0, w.VS)();
        for (let e of n) {
            var o, a, s, l;
            let t = i || p.r.enabledOOP,
                n = null !== (o = e.overlay) && void 0 !== o ? o : p.r.enabled;
            en[e.id] = {
                compatibilityHook: null !== (a = e.overlayCompatibilityHook) && void 0 !== a ? a : p.r.compatibilityHook,
                warn: null !== (s = e.overlayWarn) && void 0 !== s ? s : p.r.warn,
                enabled: n,
                enabledOOP: t,
                allowHook: null !== (l = e.hook) && void 0 !== l ? l : p.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        [...n, ...V].forEach((n) => {
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
            P.ZP.setObservedGamesCallback(e, (e) => {
                let n = [],
                    i = {};
                e = e.filter(
                    (e) => (
                        (e.distributor = eN(e)),
                        (e.isLauncher = t.has(e.exeName)),
                        e.isLauncher && null != e.id && (i[e.id] = e),
                        (e.windowHandle = eR(e.pid, e.windowHandle)),
                        null ==
                            V.find((t) => {
                                let { name: n } = t;
                                return n === e.name;
                            }) || (n.push(e), !1)
                    )
                );
                let o = n.filter(e_).length;
                o !== er &&
                    ((er = o),
                    d.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: er
                    })),
                    (q = e),
                    (X = n),
                    (r = i),
                    eh();
            }),
            eT();
    });
class eK extends (i = c.ZP.Store) {
    initialize() {
        var e, t, n, r, i;
        let o =
            null !== (e = u.K.get(B)) && void 0 !== e
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableOverlayV3: {},
                      enableDetection: {}
                  };
        ee.gameOverrides = {};
        let s = !1;
        if (
            (a()
                .values(null !== (t = o.gameOverrides) && void 0 !== t ? t : {})
                .forEach((e) => {
                    let t = em(e);
                    ee.gameOverrides[t] = e;
                }),
            (ee.enableOverlay = null !== (n = o.enableOverlay) && void 0 !== n ? n : {}),
            (ee.enableOverlayV3 = null !== (r = o.enableOverlayV3) && void 0 !== r ? r : {}),
            (ee.enableDetection = null !== (i = o.enableDetection) && void 0 !== i ? i : {}),
            eT(),
            Array.isArray(o.gamesSeen))
        )
            for (let e of o.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        this.waitFor(O.Z, g.Z), (F = o.gamesSeen), this.syncWith([g.Z], eY), this.syncWith([S.Z, O.Z, I.Z], a().throttle(eI, 1000)), s && ey();
    }
    getVisibleGame() {
        return null == Q || eb(Q) ? Q : null;
    }
    getCurrentGameForAnalytics() {
        return Q;
    }
    getVisibleRunningGames() {
        return q.filter(eb);
    }
    getRunningGames() {
        return q;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of q) null != J[t.exePath] && e.push(J[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => O.Z.getGameByName(e.name))
            .filter(C.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var t;
        return null !== (t = q.find((t) => t.pid === e)) && void 0 !== t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : k({}, en[t.id]);
    }
    shouldElevateProcessForPID(e) {
        return null != ei && ei === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eo && eo === e;
    }
    getCandidateGames() {
        return z.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === ee.gameOverrides[em(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eC();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = em(e);
                n = n.filter((e) => em(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return ee.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return X.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(ee.gameOverrides);
    }
    getOverrideForGame(e) {
        return ee.gameOverrides[em(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return G.verbose('getOverlayEnabledForGame: Overlay not supported.', e), !1;
        let t = eg(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return G.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let t = eg(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null !== (n = null === (t = X.find((t) => (0, E.Z)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null;
    }
    get canShowAdminWarning() {
        return W;
    }
    isDetectionEnabled(e) {
        return ev(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        el.add(null !== (t = (0, h.F)(e)) && void 0 !== t ? t : e);
    }
}
M(eK, 'displayName', 'RunningGameStore');
let ez = new eK(d.Z, {
        RUNNING_GAMES_CHANGE: eP,
        CANDIDATE_GAMES_CHANGE: ew,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eD,
        PERMISSION_REQUEST_ELEVATED_PROCESS: ex,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eM,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eL,
        RUNNING_GAME_ADD_OVERRIDE: ek,
        RUNNING_GAME_TOGGLE_OVERLAY: eZ,
        RUNNING_GAME_TOGGLE_DETECTION: eF,
        RUNNING_GAME_EDIT_NAME: eV,
        RUNNING_GAME_DELETE_ENTRY: eH,
        GAMES_DATABASE_UPDATE: et,
        GAME_LAUNCH_SUCCESS: eW,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: ej,
        GAME_DETECTION_DEBUGGING_START: eU,
        GAME_DETECTION_DEBUGGING_STOP: eG,
        GAME_DETECTION_DEBUGGING_TICK: eB
    }),
    eq = ez;
