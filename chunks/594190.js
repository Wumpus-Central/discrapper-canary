let r;
n.d(t, {
    FZ: () => ey,
    ZP: () => ez,
    b6: () => em,
    ik: () => eE,
    rH: () => eh
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
    x = n(981631);
function L(e, t, n) {
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
function M(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = new m.Z('RunningGameStore'),
    G = 'RunningGameStore',
    B = !1,
    Z = [],
    F = [
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
    V = [],
    H = !0,
    W = new Set(),
    Y = [],
    K = [],
    z = [],
    q = null,
    Q = [],
    X = {},
    J = {},
    $ = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {}
    },
    ee = function () {},
    et = {},
    en = 0,
    er = null,
    ei = null,
    eo = {},
    ea = new Set(),
    es = new Set(),
    el = null,
    ec = null;
function eu(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function ed(e) {
    let t = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
    return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), ef(t, e), t;
}
function ef(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function ep(e) {
    return F.some((t) => t.name === e.name && !0 === t.streamerTool);
}
function e_() {
    if (z.length > 0) {
        let e = q;
        (q = z[0]), null != e && q.pid === e.pid ? (q.start = e.start) : (q.start = Date.now());
    } else q = null;
    let e = [];
    for (let t of z) t.pid in eo || ((eo[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(eo)) z.some((t) => t.pid === e.pid) || (t.push(e), delete eo[e.pid]);
    U.info('Running Games Changed', {
        runningGames: z,
        added: e,
        removed: t,
        previousGames: eo
    }),
        d.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: z,
            added: e,
            removed: t
        });
}
function eh(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
function em(e) {
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
        s = $.enableOverlay[eh(e)],
        l = $.enableOverlayV3[eh(e)];
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
    let c = null == e.id ? null : et[e.id];
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
        enabledOOP: B || a,
        enabledLegacy: B,
        overlayMethod: a ? f.gl.OutOfProcess : f.gl.Disabled
    };
}
function eg(e) {
    let t = $.enableOverlay[eh(e)],
        n = $.enableOverlayV3[eh(e)];
    if (null != t || null != n) return null != t ? t : n;
    let r = em(e);
    return r.enabledLegacy || r.enabledOOP;
}
function eE(e) {
    let t = $.enableDetection[eh(e)];
    return null == t || t;
}
function ev(e) {
    return !e.hidden && eE(e);
}
function eb() {
    u.K.set(G, $);
}
function ey(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eK, O.Z, S.Z],
        i = j(M({}, e), {
            played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * N.Z.Millis.SECOND)).fromNow() : ' ',
            overlay: eg(e),
            verified: n.isGameInDatabase(e),
            detectable: eE(e)
        });
    if (null != e.id && null != et[e.id]) {
        let t = et[e.id];
        i.overlayWarn = t.warn;
    }
    return i;
}
function eO(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
}
function eS() {
    let e = !1;
    return (
        (Y = a()
            .values(S.Z.libraryApplications)
            .reduce((t, n) => {
                let r = O.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of I.Z.getLaunchOptions(n.id, n.branchId)) {
                    let o = ''.concat(n.id, ':').concat(n.branchId);
                    W.has(o) || ((e = !0), W.add(o));
                    let { fullExecutablePath: a } = i,
                        s = a.replace(/\\/g, '/').toLowerCase();
                    (X[s] = r.id),
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
        e && eI(),
        e
    );
}
function eI() {
    if (!__OVERLAY__ && R.isPlatformEmbedded) {
        let e = [...Y, ...a().values($.gameOverrides)];
        P.ZP.setGameCandidateOverrides(e);
    }
}
function eT(e) {
    return null != X[e.exePath] ? x.GQo.DISCORD : /steamapps/.test(e.cmdLine) ? x.GQo.STEAM : /-epicapp/.test(e.cmdLine) ? x.GQo.EPIC : e.distributor;
}
function eN(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                $.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = $.gameOverrides[eh(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return ef(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                $.gamesSeen.unshift(ed(e));
            }
        }),
        $.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eb(),
        A.Z.setRecentGames(eA().map((e) => ey(e))));
}
function eA() {
    let e = a().values($.gameOverrides);
    return $.gamesSeen.filter((e) => void 0 === $.gameOverrides[eh(e)]).concat(e);
}
function eC(e, t) {
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
function eR(e) {
    eN(z);
}
function eP(e) {
    K = e.games;
}
function ew() {
    H = !1;
}
function eD(e) {
    let { pid: t } = e;
    (er = t), (ei = null);
}
function ex(e) {
    let { pid: t } = e;
    (ei = t), (er = null);
}
function eL() {
    er = null;
}
function eM(e) {
    let t;
    let n = e.pid,
        r = z.find((e) => e.pid === n);
    if (null == r) {
        let e = K.find((e) => e.pid === n);
        if (null == e) return;
        ((r = M({}, e)).hidden = !1), z.push(r), (t = eh(r));
    } else (t = eh(r)), r.hidden && (J[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)), ($.gameOverrides[t] = j(M({}, r), { add: !0 })), eN(z), eI(), eb(), e_();
}
function ek() {
    eI();
}
function ej(e) {
    (el = e.level), (ec = e.intervalSeconds);
}
function eU() {
    (el = null), (ec = null), ea.clear();
}
function eG(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null !== (t = (0, h.F)(e.exePath)) && void 0 !== t ? t : e.exePath
            };
        })
        .filter((e) => {
            if (ea.has(e.pid) || es.has(e.cleanedExePath)) return !1;
            let t = V.some((t) => e.cleanedExePath.includes(t));
            return t && ea.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        T.default.track(x.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: V,
            paths: t,
            debugging_level: el,
            interval_seconds: ec
        });
}
function eB(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== $.enableOverlay[eh(t)],
        o = r !== $.enableOverlayV3[eh(t)];
    if ((i && ($.enableOverlay[eh(t)] = n), o && null != r && ($.enableOverlayV3[eh(t)] = r), eb(), !__OVERLAY__ && null != (null != t.id ? O.Z.getDetectableGame(t.id) : null))) {
        var a, s;
        i && (0, v.ou)(n, v.AE.LEGACY_GAME, null !== (a = t.id) && void 0 !== a ? a : null), o && null != r && (0, v.ou)(r, v.AE.OOP_GAME, null !== (s = t.id) && void 0 !== s ? s : null);
    }
}
function eZ(e) {
    let { game: t } = e,
        n = eE(t);
    ($.enableDetection[eh(t)] = !n), eb(), T.default.track(x.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function eF(e) {
    let t = eh(e.game),
        n = $.gameOverrides[t];
    null == n && ((n = eO(e.game)).add = !0), (n.name = e.newName);
    let r = eh(n);
    delete $.gameOverrides[t],
        ($.gameOverrides[r] = n),
        eu($.enableOverlay, t, r),
        eu($.enableDetection, t, r),
        eu(J, t, r),
        $.gamesSeen.forEach((n) => {
            eh(n) === t && (n.name = e.newName);
        });
    let i = !1;
    z.forEach((n) => {
        eh(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eI(),
        eb(),
        i && e_();
}
function eV(e) {
    let t = eh(e.game);
    delete $.gameOverrides[t],
        delete $.enableOverlay[t],
        delete $.enableDetection[t],
        ($.gamesSeen = $.gamesSeen.filter((e) => eh(e) !== t)),
        J[t] &&
            (z.forEach((e) => {
                t === eh(e) && (e.hidden = !0);
            }),
            delete J[t],
            e_()),
        eI(),
        eb();
}
function eH(e) {
    var t;
    if (__OVERLAY__ || !R.isPlatformEmbedded) return;
    let n = P.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = O.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null !== (t = e.pids) && void 0 !== t ? t : []);
}
function eW() {
    g.Z.hasLoadedExperiments && Z.length > 0 && (eN(Z), (Z = []));
}
!__OVERLAY__ &&
    (0, R.isDesktop)() &&
    (ee = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = O.Z.games,
            i = (0, y.NW)('handleGamesDatabaseUpdate') && (0, w.VS)();
        for (let e of n) {
            var o, a, s, l;
            let t = i || p.r.enabledOOP,
                n = null !== (o = e.overlay) && void 0 !== o ? o : p.r.enabled;
            et[e.id] = {
                compatibilityHook: null !== (a = e.overlayCompatibilityHook) && void 0 !== a ? a : p.r.compatibilityHook,
                warn: null !== (s = e.overlayWarn) && void 0 !== s ? s : p.r.warn,
                enabled: n,
                enabledOOP: t,
                allowHook: null !== (l = e.hook) && void 0 !== l ? l : p.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        [...n, ...F].forEach((n) => {
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
                        (e.distributor = eT(e)),
                        (e.isLauncher = t.has(e.exeName)),
                        e.isLauncher && null != e.id && (i[e.id] = e),
                        (e.windowHandle = eC(e.pid, e.windowHandle)),
                        null ==
                            F.find((t) => {
                                let { name: n } = t;
                                return n === e.name;
                            }) || (n.push(e), !1)
                    )
                );
                let o = n.filter(ep).length;
                o !== en &&
                    ((en = o),
                    d.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: en
                    })),
                    (z = e),
                    (Q = n),
                    (r = i),
                    e_();
            }),
            eI();
    });
class eY extends (i = c.ZP.Store) {
    initialize() {
        var e, t, n, r, i;
        let o =
            null !== (e = u.K.get(G)) && void 0 !== e
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableOverlayV3: {},
                      enableDetection: {}
                  };
        $.gameOverrides = {};
        let s = !1;
        if (
            (a()
                .values(null !== (t = o.gameOverrides) && void 0 !== t ? t : {})
                .forEach((e) => {
                    let t = eh(e);
                    $.gameOverrides[t] = e;
                }),
            ($.enableOverlay = null !== (n = o.enableOverlay) && void 0 !== n ? n : {}),
            ($.enableOverlayV3 = null !== (r = o.enableOverlayV3) && void 0 !== r ? r : {}),
            ($.enableDetection = null !== (i = o.enableDetection) && void 0 !== i ? i : {}),
            eI(),
            Array.isArray(o.gamesSeen))
        )
            for (let e of o.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        this.waitFor(O.Z, g.Z), (Z = o.gamesSeen), this.syncWith([g.Z], eW), this.syncWith([S.Z, O.Z, I.Z], a().throttle(eS, 1000)), s && eb();
    }
    getVisibleGame() {
        return null == q || ev(q) ? q : null;
    }
    getCurrentGameForAnalytics() {
        return q;
    }
    getVisibleRunningGames() {
        return z.filter(ev);
    }
    getRunningGames() {
        return z;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of z) null != X[t.exePath] && e.push(X[t.exePath]);
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
        return null !== (t = z.find((t) => t.pid === e)) && void 0 !== t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : M({}, et[t.id]);
    }
    shouldElevateProcessForPID(e) {
        return null != er && er === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != ei && ei === e;
    }
    getCandidateGames() {
        return K.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === $.gameOverrides[eh(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eA();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eh(e);
                n = n.filter((e) => eh(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return $.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return Q.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values($.gameOverrides);
    }
    getOverrideForGame(e) {
        return $.gameOverrides[eh(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return U.verbose('getOverlayEnabledForGame: Overlay not supported.', e), !1;
        let t = em(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return U.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let t = em(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null !== (n = null === (t = Q.find((t) => (0, E.Z)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null;
    }
    get canShowAdminWarning() {
        return H;
    }
    isDetectionEnabled(e) {
        return eE(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        es.add(null !== (t = (0, h.F)(e)) && void 0 !== t ? t : e);
    }
}
L(eY, 'displayName', 'RunningGameStore');
let eK = new eY(d.Z, {
        RUNNING_GAMES_CHANGE: eR,
        CANDIDATE_GAMES_CHANGE: eP,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: ew,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eD,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eL,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: ex,
        RUNNING_GAME_ADD_OVERRIDE: eM,
        RUNNING_GAME_TOGGLE_OVERLAY: eB,
        RUNNING_GAME_TOGGLE_DETECTION: eZ,
        RUNNING_GAME_EDIT_NAME: eF,
        RUNNING_GAME_DELETE_ENTRY: eV,
        GAMES_DATABASE_UPDATE: ee,
        GAME_LAUNCH_SUCCESS: eH,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: ek,
        GAME_DETECTION_DEBUGGING_START: ej,
        GAME_DETECTION_DEBUGGING_STOP: eU,
        GAME_DETECTION_DEBUGGING_TICK: eG
    }),
    ez = eK;
