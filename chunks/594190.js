let i;
n.d(t, {
    FZ: () => eg,
    ZP: () => eH,
    b6: () => ef,
    ik: () => ep,
    rH: () => ed
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
    v = n(454991),
    y = n(32300),
    I = n(77498),
    b = n(283595),
    T = n(417363),
    S = n(626135),
    A = n(70956),
    N = n(877481),
    C = n(823379),
    R = n(358085),
    O = n(998502),
    D = n(145597),
    x = n(370862),
    L = n(981631);
function P(e, t, n) {
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
let w = new m.Z('RunningGameStore'),
    M = 'RunningGameStore',
    k = !1,
    U = [],
    G = [
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
            name: p.Z.get(L.ABu.SPOTIFY).name
        }
    ],
    B = [],
    Z = !0,
    F = new Set(),
    V = [],
    j = [],
    H = [],
    Y = null,
    W = [],
    K = {},
    z = {},
    q = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {}
    },
    Q = function () {},
    X = {},
    J = 0,
    $ = null,
    ee = null,
    et = {},
    en = new Set(),
    ei = new Set(),
    er = null,
    ea = null;
function es(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function eo(e) {
    let t = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
    return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), el(t, e), t;
}
function el(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eu(e) {
    return G.some((t) => t.name === e.name && !0 === t.streamerTool);
}
function ec() {
    if (H.length > 0) {
        let e = Y;
        (Y = H[0]), null != e && Y.pid === e.pid ? (Y.start = e.start) : (Y.start = Date.now());
    } else Y = null;
    let e = [];
    for (let t of H) t.pid in et || ((et[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(et)) H.some((t) => t.pid === e.pid) || (t.push(e), delete et[e.pid]);
    w.info('Running Games Changed', {
        runningGames: H,
        added: e,
        removed: t,
        previousGames: et
    }),
        d.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: H,
            added: e,
            removed: t
        });
}
function ed(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
function ef(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [I.Z, b.Z];
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
    let a = v.v.legacyEnabled,
        s = (0, y.NW)('getRawOverlayGameStatus') && (0, D.VS)() && !t,
        o = q.enableOverlay[ed(e)],
        l = q.enableOverlayV3[ed(e)];
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
    let u = null == e.id ? null : X[e.id];
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
        enabledOOP: k || s,
        enabledLegacy: k,
        overlayMethod: s ? f.gl.OutOfProcess : f.gl.Disabled
    };
}
function e_(e) {
    let t = q.enableOverlay[ed(e)],
        n = q.enableOverlayV3[ed(e)];
    if (null != t || null != n) return null != t ? t : n;
    let i = ef(e);
    return i.enabledLegacy || i.enabledOOP;
}
function ep(e) {
    let t = q.enableDetection[ed(e)];
    return null == t || t;
}
function eh(e) {
    return !e.hidden && ep(e);
}
function em() {
    c.K.set(M, q);
}
function eg(e) {
    let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [ej, I.Z, b.Z],
        r = {
            ...e,
            played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * A.Z.Millis.SECOND)).fromNow() : ' ',
            overlay: e_(e),
            verified: n.isGameInDatabase(e),
            detectable: ep(e)
        };
    if (null != e.id && null != X[e.id]) {
        let t = X[e.id];
        r.overlayWarn = t.warn;
    }
    return r;
}
function eE(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
}
function ev() {
    let e = !1;
    return (
        (V = s()
            .values(b.Z.libraryApplications)
            .reduce((t, n) => {
                let i = I.Z.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of T.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = ''.concat(n.id, ':').concat(n.branchId);
                    F.has(a) || ((e = !0), F.add(a));
                    let { fullExecutablePath: s } = r,
                        o = s.replace(/\\/g, '/').toLowerCase();
                    (K[o] = i.id),
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
        e && ey(),
        e
    );
}
function ey() {
    if (!__OVERLAY__ && R.isPlatformEmbedded) {
        let e = [...V, ...s().values(q.gameOverrides)];
        O.ZP.setGameCandidateOverrides(e);
    }
}
function eI(e) {
    return null != K[e.exePath] ? L.GQo.DISCORD : /steamapps/.test(e.cmdLine) ? L.GQo.STEAM : /-epicapp/.test(e.cmdLine) ? L.GQo.EPIC : e.distributor;
}
function eb(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                q.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = q.gameOverrides[ed(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return el(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                q.gamesSeen.unshift(eo(e));
            }
        }),
        q.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        em(),
        N.Z.setRecentGames(eT().map((e) => eg(e))));
}
function eT() {
    let e = s().values(q.gameOverrides);
    return q.gamesSeen.filter((e) => void 0 === q.gameOverrides[ed(e)]).concat(e);
}
function eS(e, t) {
    if (void 0 === t) {
        let t = O.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && '0' !== n ? n : null;
        }
        return null;
    }
    return '0' === t ? null : t;
}
function eA(e) {
    eb(H);
}
function eN(e) {
    j = e.games;
}
function eC() {
    Z = !1;
}
function eR(e) {
    let { pid: t } = e;
    ($ = t), (ee = null);
}
function eO(e) {
    let { pid: t } = e;
    (ee = t), ($ = null);
}
function eD() {
    $ = null;
}
function ex(e) {
    let t;
    let n = e.pid,
        i = H.find((e) => e.pid === n);
    if (null == i) {
        let e = j.find((e) => e.pid === n);
        if (null == e) return;
        ((i = { ...e }).hidden = !1), H.push(i), (t = ed(i));
    } else (t = ed(i)), i.hidden && (z[t] = !0), (i.hidden = !1);
    (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1000)),
        (q.gameOverrides[t] = {
            ...i,
            add: !0
        }),
        eb(H),
        ey(),
        em(),
        ec();
}
function eL() {
    ey();
}
function eP(e) {
    (er = e.level), (ea = e.intervalSeconds);
}
function ew() {
    (er = null), (ea = null), en.clear();
}
function eM(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null !== (t = (0, h.F)(e.exePath)) && void 0 !== t ? t : e.exePath
            };
        })
        .filter((e) => {
            if (en.has(e.pid) || ei.has(e.cleanedExePath)) return !1;
            let t = B.some((t) => e.cleanedExePath.includes(t));
            return t && en.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        S.default.track(L.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: B,
            paths: t,
            debugging_level: er,
            interval_seconds: ea
        });
}
function ek(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e,
        r = n !== q.enableOverlay[ed(t)],
        a = i !== q.enableOverlayV3[ed(t)];
    if ((r && (q.enableOverlay[ed(t)] = n), a && null != i && (q.enableOverlayV3[ed(t)] = i), em(), !__OVERLAY__)) {
        let e = null != t.id ? I.Z.getDetectableGame(t.id) : null;
        null != e &&
            (r &&
                S.default.track(L.rMx.OVERLAY_TOGGLED, {
                    enabled: n,
                    setting_type: 'overlay toggled - legacy',
                    application_id: e.id,
                    application_name: e.name
                }),
            a &&
                S.default.track(L.rMx.OVERLAY_TOGGLED, {
                    enabled: i,
                    setting_type: 'overlay toggled - v3',
                    application_id: e.id,
                    application_name: e.name
                }));
    }
}
function eU(e) {
    let { game: t } = e,
        n = ep(t);
    (q.enableDetection[ed(t)] = !n), em(), S.default.track(L.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function eG(e) {
    let t = ed(e.game),
        n = q.gameOverrides[t];
    null == n && ((n = eE(e.game)).add = !0), (n.name = e.newName);
    let i = ed(n);
    delete q.gameOverrides[t],
        (q.gameOverrides[i] = n),
        es(q.enableOverlay, t, i),
        es(q.enableDetection, t, i),
        es(z, t, i),
        q.gamesSeen.forEach((n) => {
            ed(n) === t && (n.name = e.newName);
        });
    let r = !1;
    H.forEach((n) => {
        ed(n) === t && ((n.name = e.newName), (r = !0));
    }),
        ey(),
        em(),
        r && ec();
}
function eB(e) {
    let t = ed(e.game);
    delete q.gameOverrides[t],
        delete q.enableOverlay[t],
        delete q.enableDetection[t],
        (q.gamesSeen = q.gamesSeen.filter((e) => ed(e) !== t)),
        z[t] &&
            (H.forEach((e) => {
                t === ed(e) && (e.hidden = !0);
            }),
            delete z[t],
            ec()),
        ey(),
        em();
}
function eZ(e) {
    var t;
    if (__OVERLAY__ || !R.isPlatformEmbedded) return;
    let n = O.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let i = I.Z.getDetectableGame(e.applicationId);
    null != i && n(i.id, i.name, null !== (t = e.pids) && void 0 !== t ? t : []);
}
function eF() {
    g.Z.hasLoadedExperiments && U.length > 0 && (eb(U), (U = []));
}
!__OVERLAY__ &&
    (0, R.isDesktop)() &&
    (Q = function () {
        let e = [],
            t = new Set();
        i = {};
        let n = I.Z.games,
            r = (0, y.NW)('handleGamesDatabaseUpdate') && (0, D.VS)();
        for (let e of n) {
            var a, s, o, l;
            let t = r || _.r.enabledOOP,
                n = null !== (a = e.overlay) && void 0 !== a ? a : _.r.enabled;
            X[e.id] = {
                compatibilityHook: null !== (s = e.overlayCompatibilityHook) && void 0 !== s ? s : _.r.compatibilityHook,
                warn: null !== (o = e.overlayWarn) && void 0 !== o ? o : _.r.warn,
                enabled: n,
                enabledOOP: t,
                allowHook: null !== (l = e.hook) && void 0 !== l ? l : _.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        [...n, ...G].forEach((n) => {
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
            O.ZP.setObservedGamesCallback(e, (e) => {
                let n = [],
                    r = {};
                e = e.filter(
                    (e) => (
                        (e.distributor = eI(e)),
                        (e.isLauncher = t.has(e.exeName)),
                        e.isLauncher && null != e.id && (r[e.id] = e),
                        (e.windowHandle = eS(e.pid, e.windowHandle)),
                        null ==
                            G.find((t) => {
                                let { name: n } = t;
                                return n === e.name;
                            }) || (n.push(e), !1)
                    )
                );
                let a = n.filter(eu).length;
                a !== J &&
                    ((J = a),
                    d.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: J
                    })),
                    (H = e),
                    (W = n),
                    (i = r),
                    ec();
            }),
            ey();
    });
class eV extends (r = u.ZP.Store) {
    initialize() {
        var e, t, n, i, r;
        let a =
            null !== (e = c.K.get(M)) && void 0 !== e
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableOverlayV3: {},
                      enableDetection: {}
                  };
        q.gameOverrides = {};
        let o = !1;
        if (
            (s()
                .values(null !== (t = a.gameOverrides) && void 0 !== t ? t : {})
                .forEach((e) => {
                    let t = ed(e);
                    q.gameOverrides[t] = e;
                }),
            (q.enableOverlay = null !== (n = a.enableOverlay) && void 0 !== n ? n : {}),
            (q.enableOverlayV3 = null !== (i = a.enableOverlayV3) && void 0 !== i ? i : {}),
            (q.enableDetection = null !== (r = a.enableDetection) && void 0 !== r ? r : {}),
            ey(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (o = !0));
        this.waitFor(I.Z, g.Z), (U = a.gamesSeen), this.syncWith([g.Z], eF), this.syncWith([b.Z, I.Z, T.Z], s().throttle(ev, 1000)), o && em();
    }
    getVisibleGame() {
        return null == Y || eh(Y) ? Y : null;
    }
    getCurrentGameForAnalytics() {
        return Y;
    }
    getVisibleRunningGames() {
        return H.filter(eh);
    }
    getRunningGames() {
        return H;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of H) null != K[t.exePath] && e.push(K[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => I.Z.getGameByName(e.name))
            .filter(C.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var t;
        return null !== (t = H.find((t) => t.pid === e)) && void 0 !== t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? i[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...X[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != $ && $ === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != ee && ee === e;
    }
    getCandidateGames() {
        return j.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === q.gameOverrides[ed(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eT();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = ed(e);
                n = n.filter((e) => ed(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return q.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return W.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(q.gameOverrides);
    }
    getOverrideForGame(e) {
        return q.gameOverrides[ed(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return w.verbose('getOverlayEnabledForGame: Overlay not supported.', e), !1;
        let t = ef(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return w.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let t = ef(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null !== (n = null === (t = W.find((t) => (0, E.Z)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null;
    }
    get canShowAdminWarning() {
        return Z;
    }
    isDetectionEnabled(e) {
        return ep(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        ei.add(null !== (t = (0, h.F)(e)) && void 0 !== t ? t : e);
    }
}
P(eV, 'displayName', 'RunningGameStore');
let ej = new eV(d.Z, {
        RUNNING_GAMES_CHANGE: eA,
        CANDIDATE_GAMES_CHANGE: eN,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eC,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eR,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eD,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eO,
        RUNNING_GAME_ADD_OVERRIDE: ex,
        RUNNING_GAME_TOGGLE_OVERLAY: ek,
        RUNNING_GAME_TOGGLE_DETECTION: eU,
        RUNNING_GAME_EDIT_NAME: eG,
        RUNNING_GAME_DELETE_ENTRY: eB,
        GAMES_DATABASE_UPDATE: Q,
        GAME_LAUNCH_SUCCESS: eZ,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eL,
        GAME_DETECTION_DEBUGGING_START: eP,
        GAME_DETECTION_DEBUGGING_STOP: ew,
        GAME_DETECTION_DEBUGGING_TICK: eM
    }),
    eH = ej;
