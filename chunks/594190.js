let i;
n.d(t, {
    FZ: () => eh,
    ZP: () => eZ,
    b6: () => ec,
    ik: () => ef,
    rH: () => eu
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
    g = n(855403),
    E = n(454991),
    v = n(32300),
    y = n(77498),
    I = n(283595),
    b = n(417363),
    T = n(626135),
    S = n(70956),
    A = n(877481),
    N = n(823379),
    C = n(358085),
    R = n(998502),
    O = n(145597),
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
let P = new m.Z('RunningGameStore'),
    w = 'RunningGameStore',
    M = !1,
    k = [
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
    U = [],
    G = !0,
    B = new Set(),
    Z = [],
    F = [],
    V = [],
    j = null,
    H = [],
    Y = {},
    W = {},
    K = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableDetection: {}
    },
    z = function () {},
    q = {},
    Q = 0,
    X = null,
    J = null,
    $ = {},
    ee = new Set(),
    et = new Set(),
    en = null,
    ei = null;
function er(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function ea(e) {
    let t = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
    return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), es(t, e), t;
}
function es(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eo(e) {
    return k.some((t) => t.name === e.name && !0 === t.streamerTool);
}
function el() {
    if (V.length > 0) {
        let e = j;
        (j = V[0]), null != e && j.pid === e.pid ? (j.start = e.start) : (j.start = Date.now());
    } else j = null;
    let e = [];
    for (let t of V) t.pid in $ || (($[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values($)) V.some((t) => t.pid === e.pid) || (t.push(e), delete $[e.pid]);
    P.info('Running Games Changed', {
        runningGames: V,
        added: e,
        removed: t,
        previousGames: $
    }),
        d.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: V,
            added: e,
            removed: t
        });
}
function eu(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
function ec(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [y.Z, I.Z];
    if (e.isLauncher)
        return {
            source: D.d.LAUNCHER,
            enabled: !1,
            overlayMethod: f.gl.Disabled
        };
    let r = n.getGameByName(e.name);
    if (null != r) {
        let e = i.getActiveLibraryApplication(r.id);
        if (null != e)
            return {
                source: D.d.LIBRARY_APPLICATION,
                enabled: e.isOverlayEnabled(),
                overlayMethod: f.gl.Disabled
            };
    }
    let a = t || E.v.legacyEnabled,
        s = (0, v.NW)('getRawOverlayGameStatus') && (0, O.VS)() && !a,
        o = s ? f.gl.OutOfProcess : f.gl.Hook,
        l = K.enableOverlay[eu(e)];
    if (null != l)
        return {
            source: D.d.USER_OVERRIDE,
            enabled: l,
            overlayMethod: o
        };
    let u = null == e.id ? null : q[e.id];
    return null != u
        ? {
              source: D.d.DATABASE,
              enabled: u.enabled || s,
              overlayMethod: o
          }
        : {
              source: D.d.DEFAULT,
              enabled: M || s,
              overlayMethod: o
          };
}
function ed(e) {
    var t;
    return null !== (t = K.enableOverlay[eu(e)]) && void 0 !== t ? t : ec(e).enabled;
}
function ef(e) {
    let t = K.enableDetection[eu(e)];
    return null == t || t;
}
function e_(e) {
    return !e.hidden && ef(e);
}
function ep() {
    c.K.set(w, K);
}
function eh(e) {
    let t = {
        ...e,
        played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * S.Z.Millis.SECOND)).fromNow() : ' ',
        overlay: ed(e),
        verified: y.Z.isGameInDatabase(e),
        detectable: ef(e)
    };
    if (null != e.id && null != q[e.id]) {
        let n = q[e.id];
        t.overlayWarn = n.warn;
    }
    return t;
}
function em(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
}
function eg() {
    let e = !1;
    return (
        (Z = s()
            .values(I.Z.libraryApplications)
            .reduce((t, n) => {
                let i = y.Z.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of b.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = ''.concat(n.id, ':').concat(n.branchId);
                    B.has(a) || ((e = !0), B.add(a));
                    let { fullExecutablePath: s } = r,
                        o = s.replace(/\\/g, '/').toLowerCase();
                    (Y[o] = i.id),
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
        e && eE(),
        e
    );
}
function eE() {
    if (!__OVERLAY__ && C.isPlatformEmbedded) {
        let e = [...Z, ...s().values(K.gameOverrides)];
        R.ZP.setGameCandidateOverrides(e);
    }
}
function ev(e) {
    return null != Y[e.exePath] ? x.GQo.DISCORD : /steamapps/.test(e.cmdLine) ? x.GQo.STEAM : /-epicapp/.test(e.cmdLine) ? x.GQo.EPIC : e.distributor;
}
function ey(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                K.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = K.gameOverrides[eu(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return es(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                K.gamesSeen.unshift(ea(e));
            }
        }),
        K.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ep(),
        A.Z.setRecentGames(eI().map((e) => eh(e))));
}
function eI() {
    let e = s().values(K.gameOverrides);
    return K.gamesSeen.filter((e) => void 0 === K.gameOverrides[eu(e)]).concat(e);
}
function eb(e, t) {
    if (void 0 === t) {
        let t = R.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && '0' !== n ? n : null;
        }
        return null;
    }
    return '0' === t ? null : t;
}
function eT(e) {
    ey(V);
}
function eS(e) {
    F = e.games;
}
function eA() {
    G = !1;
}
function eN(e) {
    let { pid: t } = e;
    (X = t), (J = null);
}
function eC(e) {
    let { pid: t } = e;
    (J = t), (X = null);
}
function eR() {
    X = null;
}
function eO(e) {
    let t;
    let n = e.pid,
        i = V.find((e) => e.pid === n);
    if (null == i) {
        let e = F.find((e) => e.pid === n);
        if (null == e) return;
        ((i = { ...e }).hidden = !1), V.push(i), (t = eu(i));
    } else (t = eu(i)), i.hidden && (W[t] = !0), (i.hidden = !1);
    (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1000)),
        (K.gameOverrides[t] = {
            ...i,
            add: !0
        }),
        ey(V),
        eE(),
        ep(),
        el();
}
function eD() {
    eE();
}
function ex(e) {
    (en = e.level), (ei = e.intervalSeconds);
}
function eL() {
    (en = null), (ei = null), ee.clear();
}
function eP(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null !== (t = (0, h.F)(e.exePath)) && void 0 !== t ? t : e.exePath
            };
        })
        .filter((e) => {
            if (ee.has(e.pid) || et.has(e.cleanedExePath)) return !1;
            let t = U.some((t) => e.cleanedExePath.includes(t));
            return t && ee.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        T.default.track(x.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: U,
            paths: t,
            debugging_level: en,
            interval_seconds: ei
        });
}
function ew(e) {
    if (((K.enableOverlay[eu(e.game)] = e.newEnabledValue), ep(), !__OVERLAY__)) {
        let t = null != e.game.id ? y.Z.getDetectableGame(e.game.id) : null;
        null != t &&
            T.default.track(x.rMx.OVERLAY_TOGGLED, {
                enabled: e.newEnabledValue,
                setting_type: 'overlay toggled - game',
                application_id: t.id,
                application_name: t.name
            });
    }
}
function eM(e) {
    let { game: t } = e,
        n = ef(t);
    (K.enableDetection[eu(t)] = !n), ep(), T.default.track(x.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function ek(e) {
    let t = eu(e.game),
        n = K.gameOverrides[t];
    null == n && ((n = em(e.game)).add = !0), (n.name = e.newName);
    let i = eu(n);
    delete K.gameOverrides[t],
        (K.gameOverrides[i] = n),
        er(K.enableOverlay, t, i),
        er(K.enableDetection, t, i),
        er(W, t, i),
        K.gamesSeen.forEach((n) => {
            eu(n) === t && (n.name = e.newName);
        });
    let r = !1;
    V.forEach((n) => {
        eu(n) === t && ((n.name = e.newName), (r = !0));
    }),
        eE(),
        ep(),
        r && el();
}
function eU(e) {
    let t = eu(e.game);
    delete K.gameOverrides[t],
        delete K.enableOverlay[t],
        delete K.enableDetection[t],
        (K.gamesSeen = K.gamesSeen.filter((e) => eu(e) !== t)),
        W[t] &&
            (V.forEach((e) => {
                t === eu(e) && (e.hidden = !0);
            }),
            delete W[t],
            el()),
        eE(),
        ep();
}
function eG(e) {
    var t;
    if (__OVERLAY__ || !C.isPlatformEmbedded) return;
    let n = R.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let i = y.Z.getDetectableGame(e.applicationId);
    null != i && n(i.id, i.name, null !== (t = e.pids) && void 0 !== t ? t : []);
}
!__OVERLAY__ &&
    (0, C.isDesktop)() &&
    (z = function () {
        let e = [],
            t = new Set();
        i = {};
        let n = y.Z.games;
        for (let e of n) {
            var r, a, s, o;
            q[e.id] = {
                compatibilityHook: null !== (r = e.overlayCompatibilityHook) && void 0 !== r ? r : _.r.compatibilityHook,
                warn: null !== (a = e.overlayWarn) && void 0 !== a ? a : _.r.warn,
                enabled: null !== (s = e.overlay) && void 0 !== s ? s : _.r.enabled,
                allowHook: null !== (o = e.hook) && void 0 !== o ? o : _.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        [...n, ...k].forEach((n) => {
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
            R.ZP.setObservedGamesCallback(e, (e) => {
                let n = [],
                    r = {};
                e = e.filter(
                    (e) => (
                        (e.distributor = ev(e)),
                        (e.isLauncher = t.has(e.exeName)),
                        e.isLauncher && null != e.id && (r[e.id] = e),
                        (e.windowHandle = eb(e.pid, e.windowHandle)),
                        null ==
                            k.find((t) => {
                                let { name: n } = t;
                                return n === e.name;
                            }) || (n.push(e), !1)
                    )
                );
                let a = n.filter(eo).length;
                a !== Q &&
                    ((Q = a),
                    d.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: Q
                    })),
                    (V = e),
                    (H = n),
                    (i = r),
                    el();
            }),
            eE();
    });
class eB extends (r = u.ZP.Store) {
    initialize() {
        var e, t, n, i;
        let r =
            null !== (e = c.K.get(w)) && void 0 !== e
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableDetection: {}
                  };
        K.gameOverrides = {};
        let a = !1;
        if (
            (s()
                .values(null !== (t = r.gameOverrides) && void 0 !== t ? t : {})
                .forEach((e) => {
                    let t = eu(e);
                    K.gameOverrides[t] = e;
                }),
            (K.enableOverlay = null !== (n = r.enableOverlay) && void 0 !== n ? n : {}),
            (K.enableDetection = null !== (i = r.enableDetection) && void 0 !== i ? i : {}),
            eE(),
            Array.isArray(r.gamesSeen))
        )
            for (let e of r.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (a = !0));
        ey(r.gamesSeen), this.waitFor(y.Z), this.syncWith([I.Z, y.Z, b.Z], s().throttle(eg, 1000)), a && ep();
    }
    getVisibleGame() {
        return null == j || e_(j) ? j : null;
    }
    getCurrentGameForAnalytics() {
        return j;
    }
    getVisibleRunningGames() {
        return V.filter(e_);
    }
    getRunningGames() {
        return V;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of V) null != Y[t.exePath] && e.push(Y[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => y.Z.getGameByName(e.name))
            .filter(N.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var t;
        return null !== (t = V.find((t) => t.pid === e)) && void 0 !== t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? i[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...q[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != X && X === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != J && J === e;
    }
    getCandidateGames() {
        return F.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === K.gameOverrides[eu(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eI();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eu(e);
                n = n.filter((e) => eu(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return K.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return H.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(K.gameOverrides);
    }
    getOverrideForGame(e) {
        return K.gameOverrides[eu(e)];
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return P.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let t = ec(e);
        return t.enabled ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null !== (n = null === (t = H.find((t) => (0, g.Z)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null;
    }
    get canShowAdminWarning() {
        return G;
    }
    isDetectionEnabled(e) {
        return ef(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        et.add(null !== (t = (0, h.F)(e)) && void 0 !== t ? t : e);
    }
}
L(eB, 'displayName', 'RunningGameStore');
let eZ = new eB(d.Z, {
    RUNNING_GAMES_CHANGE: eT,
    CANDIDATE_GAMES_CHANGE: eS,
    PERMISSION_CLEAR_PTT_ADMIN_WARNING: eA,
    PERMISSION_REQUEST_ELEVATED_PROCESS: eN,
    PERMISSION_CLEAR_ELEVATED_PROCESS: eR,
    PERMISSION_CONTINUE_NONELEVATED_PROCESS: eC,
    RUNNING_GAME_ADD_OVERRIDE: eO,
    RUNNING_GAME_TOGGLE_OVERLAY: ew,
    RUNNING_GAME_TOGGLE_DETECTION: eM,
    RUNNING_GAME_EDIT_NAME: ek,
    RUNNING_GAME_DELETE_ENTRY: eU,
    GAMES_DATABASE_UPDATE: z,
    GAME_LAUNCH_SUCCESS: eG,
    GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eD,
    GAME_DETECTION_DEBUGGING_START: ex,
    GAME_DETECTION_DEBUGGING_STOP: eL,
    GAME_DETECTION_DEBUGGING_TICK: eP
});
