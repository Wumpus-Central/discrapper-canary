let i;
r.d(n, {
    FZ: function () {
        return eb;
    },
    b6: function () {
        return em;
    },
    ik: function () {
        return eE;
    },
    rH: function () {
        return e_;
    }
});
var a,
    o = r(47120);
var s = r(653041);
var l = r(724458);
var u = r(757143);
var c = r(733860);
var d = r(392711),
    f = r.n(d),
    p = r(913527),
    h = r.n(p),
    _ = r(442837),
    m = r(433517),
    g = r(570140),
    E = r(615287),
    v = r(593472),
    y = r(726542),
    b = r(439849),
    I = r(710845),
    T = r(855403),
    S = r(454991),
    A = r(32300),
    C = r(77498),
    N = r(283595),
    R = r(417363),
    O = r(626135),
    D = r(70956),
    L = r(877481),
    x = r(823379),
    w = r(358085),
    P = r(998502),
    M = r(145597),
    k = r(370862),
    U = r(981631);
function B(e, n, r) {
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
let G = new I.Z('RunningGameStore'),
    Z = 'RunningGameStore',
    F = !1,
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
            name: y.Z.get(U.ABu.SPOTIFY).name
        }
    ],
    j = [],
    H = !0,
    Y = new Set(),
    W = [],
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
        enableDetection: {}
    },
    ee = function () {},
    et = {},
    en = 0,
    er = null,
    ei = null,
    ea = {},
    eo = new Set(),
    es = new Set(),
    el = null,
    eu = null;
function ec(e, n, r) {
    let i = e[n];
    void 0 !== i && (delete e[n], (e[r] = i));
}
function ed(e) {
    let n = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
    return null != e.id && (n.id = e.id), null != e.nativeProcessObserverId && (n.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (n.name = e.name), e.add && (n.add = !0), e.block && (n.block = !0), ef(n, e), n;
}
function ef(e, n) {
    null != n.lastLaunched ? (e.lastLaunched = n.lastLaunched) : null != n.start && (e.lastLaunched = n.start);
}
function ep(e) {
    return V.some((n) => n.name === e.name && !0 === n.streamerTool);
}
function eh() {
    if (z.length > 0) {
        let e = q;
        (q = z[0]), null != e && q.pid === e.pid ? (q.start = e.start) : (q.start = Date.now());
    } else q = null;
    let e = [];
    for (let n of z) !(n.pid in ea) && ((ea[n.pid] = n), e.push(n));
    let n = [];
    for (let e of Object.values(ea)) !z.some((n) => n.pid === e.pid) && (n.push(e), delete ea[e.pid]);
    G.info('Running Games Changed', {
        runningGames: z,
        added: e,
        removed: n,
        previousGames: ea
    }),
        g.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: z,
            added: e,
            removed: n
        });
}
function e_(e) {
    let n = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(n);
}
function em(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [r, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [C.Z, N.Z];
    if (e.isLauncher)
        return {
            source: k.d.LAUNCHER,
            enabled: !1,
            overlayMethod: E.gl.Disabled
        };
    let a = r.getGameByName(e.name);
    if (null != a) {
        let e = i.getActiveLibraryApplication(a.id);
        if (null != e)
            return {
                source: k.d.LIBRARY_APPLICATION,
                enabled: e.isOverlayEnabled(),
                overlayMethod: E.gl.Disabled
            };
    }
    let o = n || S.v.legacyEnabled,
        s = (0, A.NW)('getRawOverlayGameStatus') && (0, M.VS)() && !o,
        l = s ? E.gl.OutOfProcess : E.gl.Hook,
        u = $.enableOverlay[e_(e)];
    if (null != u)
        return {
            source: k.d.USER_OVERRIDE,
            enabled: u,
            overlayMethod: l
        };
    let c = null == e.id ? null : et[e.id];
    return null != c
        ? {
              source: k.d.DATABASE,
              enabled: c.enabled || s,
              overlayMethod: l
          }
        : {
              source: k.d.DEFAULT,
              enabled: F || s,
              overlayMethod: l
          };
}
function eg(e) {
    var n;
    return null !== (n = $.enableOverlay[e_(e)]) && void 0 !== n ? n : em(e).enabled;
}
function eE(e) {
    let n = $.enableDetection[e_(e)];
    return null == n || n;
}
function ev(e) {
    return !e.hidden && eE(e);
}
function ey() {
    m.K.set(Z, $);
}
function eb(e) {
    let n = {
        ...e,
        played: null != e.lastFocused && 0 !== e.lastFocused ? h()(new Date(e.lastFocused * D.Z.Millis.SECOND)).fromNow() : ' ',
        overlay: eg(e),
        verified: C.Z.isGameInDatabase(e),
        detectable: eE(e)
    };
    if (null != e.id && null != et[e.id]) {
        let r = et[e.id];
        n.overlayWarn = r.warn;
    }
    return n;
}
function eI(e) {
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
        (W = f()
            .values(N.Z.libraryApplications)
            .reduce((n, r) => {
                let i = C.Z.getDetectableGame(r.id);
                if (null == i) return n;
                for (let a of R.Z.getLaunchOptions(r.id, r.branchId)) {
                    let o = ''.concat(r.id, ':').concat(r.branchId);
                    !Y.has(o) && ((e = !0), Y.add(o));
                    let { fullExecutablePath: s } = a,
                        l = s.replace(/\\/g, '/').toLowerCase();
                    (X[l] = i.id),
                        n.push({
                            id: i.id,
                            name: i.name,
                            exePath: l,
                            cmdLine: '',
                            lastFocused: 0,
                            add: !0
                        });
                }
                return n;
            }, [])),
        e && eS(),
        e
    );
}
function eS() {
    if (!__OVERLAY__ && w.isPlatformEmbedded) {
        let e = [...W, ...f().values($.gameOverrides)];
        P.ZP.setGameCandidateOverrides(e);
    }
}
function eA(e) {
    if (null != X[e.exePath]) return U.GQo.DISCORD;
    if (/steamapps/.test(e.cmdLine)) return U.GQo.STEAM;
    if (/-epicapp/.test(e.cmdLine)) return U.GQo.EPIC;
    return e.distributor;
}
function eC(e) {
    if (null != e && 0 !== e.length)
        e.forEach((e) => {
            if (
                $.gamesSeen.some((n) => {
                    if (n.name === e.name) {
                        if (e.lastFocused) {
                            n.lastFocused = e.lastFocused;
                            let r = $.gameOverrides[e_(e)];
                            null != r && (r.lastFocused = e.lastFocused);
                        }
                        return ef(n, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                $.gamesSeen.unshift(ed(e));
            }
        }),
            $.gamesSeen.sort((e, n) => n.lastFocused - e.lastFocused),
            ey(),
            L.Z.setRecentGames(eN().map((e) => eb(e)));
}
function eN() {
    let e = f().values($.gameOverrides);
    return $.gamesSeen.filter((e) => void 0 === $.gameOverrides[e_(e)]).concat(e);
}
function eR(e, n) {
    if (void 0 === n) {
        let n = P.ZP.getDiscordUtils();
        if (null != n && null != n.getWindowHandleFromPid) {
            let r = n.getWindowHandleFromPid(e);
            return null != r && '0' !== r ? r : null;
        }
        return null;
    }
    return '0' === n ? null : n;
}
function eO(e) {
    eC(z);
}
function eD(e) {
    K = e.games;
}
function eL() {
    H = !1;
}
function ex(e) {
    let { pid: n } = e;
    (er = n), (ei = null);
}
function ew(e) {
    let { pid: n } = e;
    (ei = n), (er = null);
}
function eP() {
    er = null;
}
function eM(e) {
    let n;
    let r = e.pid,
        i = z.find((e) => e.pid === r);
    if (null == i) {
        let e = K.find((e) => e.pid === r);
        if (null == e) return;
        ((i = { ...e }).hidden = !1), z.push(i), (n = e_(i));
    } else (n = e_(i)), i.hidden && (J[n] = !0), (i.hidden = !1);
    (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1000)),
        ($.gameOverrides[n] = {
            ...i,
            add: !0
        }),
        eC(z),
        eS(),
        ey(),
        eh();
}
function ek() {
    eS();
}
function eU(e) {
    (el = e.level), (eu = e.intervalSeconds);
}
function eB() {
    (el = null), (eu = null), eo.clear();
}
function eG(e) {
    let n = e.processes
        .map((e) => {
            var n;
            return {
                pid: e.pid,
                cleanedExePath: null !== (n = (0, b.F)(e.exePath)) && void 0 !== n ? n : e.exePath
            };
        })
        .filter((e) => {
            if (eo.has(e.pid) || es.has(e.cleanedExePath)) return !1;
            let n = j.some((n) => e.cleanedExePath.includes(n));
            return n && eo.add(e.pid), n;
        })
        .map((e) => e.cleanedExePath);
    n.length > 0 &&
        O.default.track(U.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: j,
            paths: n,
            debugging_level: el,
            interval_seconds: eu
        });
}
function eZ(e) {
    if ((($.enableOverlay[e_(e.game)] = e.newEnabledValue), ey(), !__OVERLAY__)) {
        let n = null != e.game.id ? C.Z.getDetectableGame(e.game.id) : null;
        null != n &&
            O.default.track(U.rMx.OVERLAY_TOGGLED, {
                enabled: e.newEnabledValue,
                setting_type: 'overlay toggled - game',
                application_id: n.id,
                application_name: n.name
            });
    }
}
function eF(e) {
    let { game: n } = e,
        r = eE(n);
    ($.enableDetection[e_(n)] = !r), ey(), O.default.track(U.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !r });
}
function eV(e) {
    let n = e_(e.game),
        r = $.gameOverrides[n];
    null == r && ((r = eI(e.game)).add = !0), (r.name = e.newName);
    let i = e_(r);
    delete $.gameOverrides[n],
        ($.gameOverrides[i] = r),
        ec($.enableOverlay, n, i),
        ec($.enableDetection, n, i),
        ec(J, n, i),
        $.gamesSeen.forEach((r) => {
            e_(r) === n && (r.name = e.newName);
        });
    let a = !1;
    z.forEach((r) => {
        e_(r) === n && ((r.name = e.newName), (a = !0));
    }),
        eS(),
        ey(),
        a && eh();
}
function ej(e) {
    let n = e_(e.game);
    delete $.gameOverrides[n],
        delete $.enableOverlay[n],
        delete $.enableDetection[n],
        ($.gamesSeen = $.gamesSeen.filter((e) => e_(e) !== n)),
        J[n] &&
            (z.forEach((e) => {
                n === e_(e) && (e.hidden = !0);
            }),
            delete J[n],
            eh()),
        eS(),
        ey();
}
function eH(e) {
    var n;
    if (__OVERLAY__ || !w.isPlatformEmbedded) return;
    let r = P.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == r) return;
    let i = C.Z.getDetectableGame(e.applicationId);
    if (null != i) r(i.id, i.name, null !== (n = e.pids) && void 0 !== n ? n : []);
}
!__OVERLAY__ &&
    (0, w.isDesktop)() &&
    (ee = function () {
        let e = [],
            n = new Set();
        i = {};
        let r = C.Z.games;
        for (let e of r) {
            var a, o, s, l;
            et[e.id] = {
                compatibilityHook: null !== (a = e.overlayCompatibilityHook) && void 0 !== a ? a : v.r.compatibilityHook,
                warn: null !== (o = e.overlayWarn) && void 0 !== o ? o : v.r.warn,
                enabled: null !== (s = e.overlay) && void 0 !== s ? s : v.r.enabled,
                allowHook: null !== (l = e.hook) && void 0 !== l ? l : v.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        [...r, ...V].forEach((r) => {
            let i = null != r.executables ? r.executables : [],
                a = {};
            i.forEach((e) => {
                let r = null != e.arguments && e.arguments.length > 0 ? e.arguments : 'null';
                null == a[r] && (a[r] = []), a[r].push(e.name), e.isLauncher && n.add(e.name);
            }),
                Object.keys(a).forEach((n) =>
                    e.push({
                        name: r.name,
                        id: r.id,
                        executables: a[n],
                        cmdLine: 'null' !== n ? n : null
                    })
                );
        }),
            (e = e.filter((e) => null != e.executables && e.executables.length > 0)),
            P.ZP.setObservedGamesCallback(e, (e) => {
                let r = [],
                    a = {};
                e = e.filter(
                    (e) => (
                        (e.distributor = eA(e)),
                        (e.isLauncher = n.has(e.exeName)),
                        e.isLauncher && null != e.id && (a[e.id] = e),
                        (e.windowHandle = eR(e.pid, e.windowHandle)),
                        null ==
                            V.find((n) => {
                                let { name: r } = n;
                                return r === e.name;
                            }) || (r.push(e), !1)
                    )
                );
                let o = r.filter(ep).length;
                o !== en &&
                    ((en = o),
                    g.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: en
                    })),
                    (z = e),
                    (Q = r),
                    (i = a),
                    eh();
            }),
            eS();
    });
class eY extends (a = _.ZP.Store) {
    initialize() {
        var e, n, r, i;
        let a =
            null !== (e = m.K.get(Z)) && void 0 !== e
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableDetection: {}
                  };
        $.gameOverrides = {};
        let o = !1;
        if (
            (f()
                .values(null !== (n = a.gameOverrides) && void 0 !== n ? n : {})
                .forEach((e) => {
                    let n = e_(e);
                    $.gameOverrides[n] = e;
                }),
            ($.enableOverlay = null !== (r = a.enableOverlay) && void 0 !== r ? r : {}),
            ($.enableDetection = null !== (i = a.enableDetection) && void 0 !== i ? i : {}),
            eS(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (o = !0));
        eC(a.gamesSeen), this.waitFor(C.Z), this.syncWith([N.Z, C.Z, R.Z], f().throttle(eT, 1000)), o && ey();
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
        for (let n of z) null != X[n.exePath] && e.push(X[n.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => C.Z.getGameByName(e.name))
            .filter(x.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var n;
        return null !== (n = z.find((n) => n.pid === e)) && void 0 !== n ? n : null;
    }
    getLauncherForPID(e) {
        let n = this.getGameForPID(e);
        return null != n ? (null != n.id ? i[n.id] : null) : null;
    }
    getOverlayOptionsForPID(e) {
        let n = this.getGameForPID(e);
        return null == n || n.isLauncher || null == n.id ? null : { ...et[n.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != er && er === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != ei && ei === e;
    }
    getCandidateGames() {
        return K.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === $.gameOverrides[e_(e)]);
    }
    getGamesSeen(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = eN();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let n = e_(e);
                r = r.filter((e) => e_(e) !== n);
            }
        }
        return n && r.sort((e, n) => n.lastFocused - e.lastFocused), r;
    }
    getSeenGameByName(e) {
        return $.gamesSeen.find((n) => null != n.name && n.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return Q.some((n) => n.name === e);
    }
    getOverrides() {
        return Object.values($.gameOverrides);
    }
    getOverrideForGame(e) {
        return $.gameOverrides[e_(e)];
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return G.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let n = em(e);
        return n.enabled ? n : null;
    }
    getObservedAppNameForWindow(e) {
        var n, r;
        return null !== (r = null === (n = Q.find((n) => (0, T.Z)(e, n.windowHandle))) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : null;
    }
    get canShowAdminWarning() {
        return H;
    }
    isDetectionEnabled(e) {
        return eE(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var n;
        es.add(null !== (n = (0, b.F)(e)) && void 0 !== n ? n : e);
    }
}
B(eY, 'displayName', 'RunningGameStore');
let eW = new eY(g.Z, {
    RUNNING_GAMES_CHANGE: eO,
    CANDIDATE_GAMES_CHANGE: eD,
    PERMISSION_CLEAR_PTT_ADMIN_WARNING: eL,
    PERMISSION_REQUEST_ELEVATED_PROCESS: ex,
    PERMISSION_CLEAR_ELEVATED_PROCESS: eP,
    PERMISSION_CONTINUE_NONELEVATED_PROCESS: ew,
    RUNNING_GAME_ADD_OVERRIDE: eM,
    RUNNING_GAME_TOGGLE_OVERLAY: eZ,
    RUNNING_GAME_TOGGLE_DETECTION: eF,
    RUNNING_GAME_EDIT_NAME: eV,
    RUNNING_GAME_DELETE_ENTRY: ej,
    GAMES_DATABASE_UPDATE: ee,
    GAME_LAUNCH_SUCCESS: eH,
    GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: ek,
    GAME_DETECTION_DEBUGGING_START: eU,
    GAME_DETECTION_DEBUGGING_STOP: eB,
    GAME_DETECTION_DEBUGGING_TICK: eG
});
n.ZP = eW;
