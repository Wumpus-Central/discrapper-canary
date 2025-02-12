let i;
n.d(t, {
    FZ: () => eE,
    ZP: () => eY,
    b6: () => e_,
    ik: () => eh,
    rH: () => ef
}),
    n(47120),
    n(653041),
    n(724458),
    n(757143),
    n(733860);
var r,
    a = n(392711),
    s = n.n(a),
    o = n(913527),
    l = n.n(o),
    u = n(442837),
    c = n(433517),
    d = n(570140),
    f = n(615287),
    _ = n(593472),
    p = n(726542),
    h = n(439849),
    m = n(710845),
    g = n(353926),
    E = n(855403),
    v = n(444295),
    y = n(454991),
    I = n(32300),
    T = n(77498),
    b = n(283595),
    S = n(417363),
    A = n(626135),
    N = n(70956),
    C = n(877481),
    R = n(823379),
    O = n(358085),
    D = n(998502),
    L = n(145597),
    x = n(370862),
    P = n(981631);
function w(e, t, n) {
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
let M = new m.Z('RunningGameStore'),
    k = 'RunningGameStore',
    U = !1,
    G = [],
    B = [
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
            name: p.Z.get(P.ABu.SPOTIFY).name
        }
    ],
    Z = [],
    F = !0,
    V = new Set(),
    j = [],
    H = [],
    Y = [],
    W = null,
    K = [],
    z = {},
    q = {},
    Q = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {}
    },
    X = function () {},
    J = {},
    $ = 0,
    ee = null,
    et = null,
    en = {},
    ei = new Set(),
    er = new Set(),
    ea = null,
    es = null;
function eo(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function el(e) {
    let t = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
    return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), eu(t, e), t;
}
function eu(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function ec(e) {
    return B.some((t) => t.name === e.name && !0 === t.streamerTool);
}
function ed() {
    if (Y.length > 0) {
        let e = W;
        (W = Y[0]), null != e && W.pid === e.pid ? (W.start = e.start) : (W.start = Date.now());
    } else W = null;
    let e = [];
    for (let t of Y) t.pid in en || ((en[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(en)) Y.some((t) => t.pid === e.pid) || (t.push(e), delete en[e.pid]);
    M.info('Running Games Changed', {
        runningGames: Y,
        added: e,
        removed: t,
        previousGames: en
    }),
        d.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: Y,
            added: e,
            removed: t
        });
}
function ef(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
function e_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [T.Z, b.Z];
    if (e.isLauncher)
        return {
            source: x.d.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: f.gl.Disabled
        };
    let r = n.getGameByName(e.name);
    if (null != r) {
        let e = i.getActiveLibraryApplication(r.id);
        if (null != e)
            return {
                source: x.d.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: f.gl.Disabled
            };
    }
    let a = y.v.legacyEnabled,
        s = (0, I.NW)('getRawOverlayGameStatus') && (0, L.VS)() && !t,
        o = Q.enableOverlay[ef(e)],
        l = Q.enableOverlayV3[ef(e)];
    if (null != o || null != l) {
        let e = null != l ? l : s,
            t = null != o ? o : a,
            n = e ? f.gl.OutOfProcess : f.gl.Hook;
        return {
            source: x.d.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: s ? n : f.gl.Hook
        };
    }
    let u = null == e.id ? null : J[e.id];
    if (null != u) {
        var c, d;
        let e = null !== (c = u.enabledOOP) && void 0 !== c ? c : s,
            t = null !== (d = u.enabled) && void 0 !== d ? d : a,
            n = e ? f.gl.OutOfProcess : f.gl.Hook;
        return {
            source: x.d.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: s ? n : f.gl.Hook
        };
    }
    return {
        source: x.d.DEFAULT,
        enabledOOP: U || s,
        enabledLegacy: U,
        overlayMethod: s ? f.gl.OutOfProcess : f.gl.Disabled
    };
}
function ep(e) {
    let t = Q.enableOverlay[ef(e)],
        n = Q.enableOverlayV3[ef(e)];
    if (null != t || null != n) return null != t ? t : n;
    let i = e_(e);
    return i.enabledLegacy || i.enabledOOP;
}
function eh(e) {
    let t = Q.enableDetection[ef(e)];
    return null == t || t;
}
function em(e) {
    return !e.hidden && eh(e);
}
function eg() {
    c.K.set(k, Q);
}
function eE(e) {
    let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eH, T.Z, b.Z],
        r = {
            ...e,
            played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * N.Z.Millis.SECOND)).fromNow() : ' ',
            overlay: ep(e),
            verified: n.isGameInDatabase(e),
            detectable: eh(e)
        };
    if (null != e.id && null != J[e.id]) {
        let t = J[e.id];
        r.overlayWarn = t.warn;
    }
    return r;
}
function ev(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
}
function ey() {
    let e = !1;
    return (
        (j = s()
            .values(b.Z.libraryApplications)
            .reduce((t, n) => {
                let i = T.Z.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of S.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = ''.concat(n.id, ':').concat(n.branchId);
                    V.has(a) || ((e = !0), V.add(a));
                    let { fullExecutablePath: s } = r,
                        o = s.replace(/\\/g, '/').toLowerCase();
                    (z[o] = i.id),
                        t.push({
                            id: i.id,
                            name: i.name,
                            exePath: o,
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
    if (!__OVERLAY__ && O.isPlatformEmbedded) {
        let e = [...j, ...s().values(Q.gameOverrides)];
        D.ZP.setGameCandidateOverrides(e);
    }
}
function eT(e) {
    return null != z[e.exePath] ? P.GQo.DISCORD : /steamapps/.test(e.cmdLine) ? P.GQo.STEAM : /-epicapp/.test(e.cmdLine) ? P.GQo.EPIC : e.distributor;
}
function eb(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                Q.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = Q.gameOverrides[ef(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return eu(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                Q.gamesSeen.unshift(el(e));
            }
        }),
        Q.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eg(),
        C.Z.setRecentGames(eS().map((e) => eE(e))));
}
function eS() {
    let e = s().values(Q.gameOverrides);
    return Q.gamesSeen.filter((e) => void 0 === Q.gameOverrides[ef(e)]).concat(e);
}
function eA(e, t) {
    if (void 0 === t) {
        let t = D.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && '0' !== n ? n : null;
        }
        return null;
    }
    return '0' === t ? null : t;
}
function eN(e) {
    eb(Y);
}
function eC(e) {
    H = e.games;
}
function eR() {
    F = !1;
}
function eO(e) {
    let { pid: t } = e;
    (ee = t), (et = null);
}
function eD(e) {
    let { pid: t } = e;
    (et = t), (ee = null);
}
function eL() {
    ee = null;
}
function ex(e) {
    let t;
    let n = e.pid,
        i = Y.find((e) => e.pid === n);
    if (null == i) {
        let e = H.find((e) => e.pid === n);
        if (null == e) return;
        ((i = { ...e }).hidden = !1), Y.push(i), (t = ef(i));
    } else (t = ef(i)), i.hidden && (q[t] = !0), (i.hidden = !1);
    (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1000)),
        (Q.gameOverrides[t] = {
            ...i,
            add: !0
        }),
        eb(Y),
        eI(),
        eg(),
        ed();
}
function eP() {
    eI();
}
function ew(e) {
    (ea = e.level), (es = e.intervalSeconds);
}
function eM() {
    (ea = null), (es = null), ei.clear();
}
function ek(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null !== (t = (0, h.F)(e.exePath)) && void 0 !== t ? t : e.exePath
            };
        })
        .filter((e) => {
            if (ei.has(e.pid) || er.has(e.cleanedExePath)) return !1;
            let t = Z.some((t) => e.cleanedExePath.includes(t));
            return t && ei.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        A.default.track(P.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: Z,
            paths: t,
            debugging_level: ea,
            interval_seconds: es
        });
}
function eU(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e,
        r = n !== Q.enableOverlay[ef(t)],
        a = i !== Q.enableOverlayV3[ef(t)];
    if ((r && (Q.enableOverlay[ef(t)] = n), a && null != i && (Q.enableOverlayV3[ef(t)] = i), eg(), !__OVERLAY__ && null != (null != t.id ? T.Z.getDetectableGame(t.id) : null))) {
        var s, o;
        r && (0, v.ou)(n, v.AE.LEGACY_GAME, null !== (s = t.id) && void 0 !== s ? s : null), a && null != i && (0, v.ou)(i, v.AE.OOP_GAME, null !== (o = t.id) && void 0 !== o ? o : null);
    }
}
function eG(e) {
    let { game: t } = e,
        n = eh(t);
    (Q.enableDetection[ef(t)] = !n), eg(), A.default.track(P.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function eB(e) {
    let t = ef(e.game),
        n = Q.gameOverrides[t];
    null == n && ((n = ev(e.game)).add = !0), (n.name = e.newName);
    let i = ef(n);
    delete Q.gameOverrides[t],
        (Q.gameOverrides[i] = n),
        eo(Q.enableOverlay, t, i),
        eo(Q.enableDetection, t, i),
        eo(q, t, i),
        Q.gamesSeen.forEach((n) => {
            ef(n) === t && (n.name = e.newName);
        });
    let r = !1;
    Y.forEach((n) => {
        ef(n) === t && ((n.name = e.newName), (r = !0));
    }),
        eI(),
        eg(),
        r && ed();
}
function eZ(e) {
    let t = ef(e.game);
    delete Q.gameOverrides[t],
        delete Q.enableOverlay[t],
        delete Q.enableDetection[t],
        (Q.gamesSeen = Q.gamesSeen.filter((e) => ef(e) !== t)),
        q[t] &&
            (Y.forEach((e) => {
                t === ef(e) && (e.hidden = !0);
            }),
            delete q[t],
            ed()),
        eI(),
        eg();
}
function eF(e) {
    var t;
    if (__OVERLAY__ || !O.isPlatformEmbedded) return;
    let n = D.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let i = T.Z.getDetectableGame(e.applicationId);
    null != i && n(i.id, i.name, null !== (t = e.pids) && void 0 !== t ? t : []);
}
function eV() {
    g.Z.hasLoadedExperiments && G.length > 0 && (eb(G), (G = []));
}
!__OVERLAY__ &&
    (0, O.isDesktop)() &&
    (X = function () {
        let e = [],
            t = new Set();
        i = {};
        let n = T.Z.games,
            r = (0, I.NW)('handleGamesDatabaseUpdate') && (0, L.VS)();
        for (let e of n) {
            var a, s, o, l;
            let t = r || _.r.enabledOOP,
                n = null !== (a = e.overlay) && void 0 !== a ? a : _.r.enabled;
            J[e.id] = {
                compatibilityHook: null !== (s = e.overlayCompatibilityHook) && void 0 !== s ? s : _.r.compatibilityHook,
                warn: null !== (o = e.overlayWarn) && void 0 !== o ? o : _.r.warn,
                enabled: n,
                enabledOOP: t,
                allowHook: null !== (l = e.hook) && void 0 !== l ? l : _.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        [...n, ...B].forEach((n) => {
            let i = null != n.executables ? n.executables : [],
                r = {};
            i.forEach((e) => {
                let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : 'null';
                null == r[n] && (r[n] = []), r[n].push(e.name), e.isLauncher && t.add(e.name);
            }),
                Object.keys(r).forEach((t) =>
                    e.push({
                        name: n.name,
                        id: n.id,
                        executables: r[t],
                        cmdLine: 'null' !== t ? t : null
                    })
                );
        }),
            (e = e.filter((e) => null != e.executables && e.executables.length > 0)),
            D.ZP.setObservedGamesCallback(e, (e) => {
                let n = [],
                    r = {};
                e = e.filter(
                    (e) => (
                        (e.distributor = eT(e)),
                        (e.isLauncher = t.has(e.exeName)),
                        e.isLauncher && null != e.id && (r[e.id] = e),
                        (e.windowHandle = eA(e.pid, e.windowHandle)),
                        null ==
                            B.find((t) => {
                                let { name: n } = t;
                                return n === e.name;
                            }) || (n.push(e), !1)
                    )
                );
                let a = n.filter(ec).length;
                a !== $ &&
                    (($ = a),
                    d.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: $
                    })),
                    (Y = e),
                    (K = n),
                    (i = r),
                    ed();
            }),
            eI();
    });
class ej extends (r = u.ZP.Store) {
    initialize() {
        var e, t, n, i, r;
        let a =
            null !== (e = c.K.get(k)) && void 0 !== e
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableOverlayV3: {},
                      enableDetection: {}
                  };
        Q.gameOverrides = {};
        let o = !1;
        if (
            (s()
                .values(null !== (t = a.gameOverrides) && void 0 !== t ? t : {})
                .forEach((e) => {
                    let t = ef(e);
                    Q.gameOverrides[t] = e;
                }),
            (Q.enableOverlay = null !== (n = a.enableOverlay) && void 0 !== n ? n : {}),
            (Q.enableOverlayV3 = null !== (i = a.enableOverlayV3) && void 0 !== i ? i : {}),
            (Q.enableDetection = null !== (r = a.enableDetection) && void 0 !== r ? r : {}),
            eI(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (o = !0));
        this.waitFor(T.Z, g.Z), (G = a.gamesSeen), this.syncWith([g.Z], eV), this.syncWith([b.Z, T.Z, S.Z], s().throttle(ey, 1000)), o && eg();
    }
    getVisibleGame() {
        return null == W || em(W) ? W : null;
    }
    getCurrentGameForAnalytics() {
        return W;
    }
    getVisibleRunningGames() {
        return Y.filter(em);
    }
    getRunningGames() {
        return Y;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of Y) null != z[t.exePath] && e.push(z[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => T.Z.getGameByName(e.name))
            .filter(R.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var t;
        return null !== (t = Y.find((t) => t.pid === e)) && void 0 !== t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? i[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...J[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != ee && ee === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != et && et === e;
    }
    getCandidateGames() {
        return H.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === Q.gameOverrides[ef(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eS();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = ef(e);
                n = n.filter((e) => ef(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return Q.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return K.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(Q.gameOverrides);
    }
    getOverrideForGame(e) {
        return Q.gameOverrides[ef(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return M.verbose('getOverlayEnabledForGame: Overlay not supported.', e), !1;
        let t = e_(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return M.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let t = e_(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null !== (n = null === (t = K.find((t) => (0, E.Z)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null;
    }
    get canShowAdminWarning() {
        return F;
    }
    isDetectionEnabled(e) {
        return eh(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        er.add(null !== (t = (0, h.F)(e)) && void 0 !== t ? t : e);
    }
}
w(ej, 'displayName', 'RunningGameStore');
let eH = new ej(d.Z, {
        RUNNING_GAMES_CHANGE: eN,
        CANDIDATE_GAMES_CHANGE: eC,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eR,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eO,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eL,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eD,
        RUNNING_GAME_ADD_OVERRIDE: ex,
        RUNNING_GAME_TOGGLE_OVERLAY: eU,
        RUNNING_GAME_TOGGLE_DETECTION: eG,
        RUNNING_GAME_EDIT_NAME: eB,
        RUNNING_GAME_DELETE_ENTRY: eZ,
        GAMES_DATABASE_UPDATE: X,
        GAME_LAUNCH_SUCCESS: eF,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eP,
        GAME_DETECTION_DEBUGGING_START: ew,
        GAME_DETECTION_DEBUGGING_STOP: eM,
        GAME_DETECTION_DEBUGGING_TICK: ek
    }),
    eY = eH;
