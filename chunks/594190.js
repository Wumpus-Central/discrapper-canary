let r;
(n.d(t, {
    FZ: () => eR,
    ZP: () => e3,
    b6: () => eT,
    ik: () => eA,
    rH: () => eO
}),
    n(388685),
    n(35282),
    n(539854),
    n(704826),
    n(290780),
    n(642613));
var i,
    a = n(392711),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(433517),
    d = n(570140),
    _ = n(593472),
    f = n(726542),
    p = n(439849),
    h = n(710845),
    m = n(353926),
    g = n(855403),
    E = n(444295),
    b = n(454991),
    y = n(837268),
    O = n(32300),
    v = n(948897),
    I = n(817788),
    T = n(509003),
    S = n(77498),
    A = n(283595),
    N = n(417363),
    C = n(626135),
    R = n(70956),
    P = n(877481),
    w = n(823379),
    D = n(358085),
    L = n(998502),
    x = n(145597),
    M = n(981631),
    k = n(987650);
function j(e, t, n) {
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
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            }));
    }
    return e;
}
function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = new h.Z('RunningGameStore'),
    F = 'RunningGameStore',
    Z = !1,
    H = [],
    Y = [
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
            name: f.Z.get(M.ABu.SPOTIFY).name
        }
    ],
    W = [],
    K = !0,
    z = new Set(),
    q = [],
    X = [],
    Q = [],
    J = null,
    $ = [],
    ee = {},
    et = {},
    en = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {}
    },
    er = function () {},
    ei = {},
    ea = 0,
    eo = null,
    es = null,
    el = {},
    ec = new Set(),
    eu = new Set(),
    ed = null,
    e_ = null,
    ef = new Map(),
    ep = new Map();
function eh(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function em(e) {
    let t = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
    return (null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), eg(t, e), t);
}
function eg(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eE(e) {
    var t, n, r, i;
    let a = ep.get(null != (r = null == (t = e.name) ? void 0 : t.toLowerCase()) ? r : '');
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
function eb(e) {
    let t = eE(e);
    return (null == t ? void 0 : t.streamerTool) === !0;
}
function ey() {
    if (Q.length > 0) {
        let e = J;
        ((J = Q[0]), null != e && J.pid === e.pid ? (J.start = e.start) : (J.start = Date.now()));
    } else J = null;
    let e = [];
    for (let t of Q) t.pid in el || ((el[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(el)) Q.some((t) => t.pid === e.pid) || (t.push(e), delete el[e.pid]);
    (V.info('Running Games Changed', {
        runningGames: Q,
        added: e,
        removed: t,
        previousGames: el
    }),
        d.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: Q,
            added: e,
            removed: t
        }));
}
function eO(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
Y.forEach((e) => {
    var t;
    (ep.set(e.name.toLowerCase(), e),
        (null != (t = e.executables) ? t : []).forEach((t) => {
            ef.set(t.name.toLowerCase(), e);
        }));
});
let ev = new Set(['1314395942253756416']);
function eI(e) {
    let t = null;
    if ('id' in e) {
        var n;
        t = null != (n = e.id) ? n : null;
    } else {
        let n = S.Z.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, O.YB)('getRawOverlayGameStatus') && ev.has(t);
}
function eT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [S.Z, A.Z];
    if (e.isLauncher)
        return {
            source: y.d0.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: y.gl.Disabled
        };
    if ('pid' in e && !v.Z.acquireLock(e.pid))
        return {
            source: y.d0.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: y.gl.Disabled
        };
    let i = n.getGameByName(e.name);
    if (null != i) {
        let e = r.getActiveLibraryApplication(i.id);
        if (null != e)
            return {
                source: y.d0.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: y.gl.Disabled
            };
    }
    let a = (0, O.NW)('getRawOverlayGameStatus') && (0, x.supportsOutOfProcess)() && !t,
        o = eI(null != i ? i : e),
        s = b.v.legacyEnabled,
        l = a && !o,
        c = en.enableOverlay[eO(e)],
        u = en.enableOverlayV3[eO(e)];
    if (null != c || null != u) {
        let e = null != u ? u : l,
            t = null != c ? c : s,
            n = e ? y.gl.OutOfProcess : y.gl.Hook;
        return {
            source: e && !o ? y.d0.OOP_DEFAULT : y.d0.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: l ? n : y.gl.Hook
        };
    }
    let d = null == e.id ? null : ei[e.id];
    if (null != d) {
        var _, f;
        let e = null != (_ = d.enabledOOP) ? _ : l,
            t = null != (f = d.enabled) ? f : s,
            n = e ? y.gl.OutOfProcess : y.gl.Hook;
        return {
            source: e && !o ? y.d0.OOP_DEFAULT_DATABASE : y.d0.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: l ? n : y.gl.Hook
        };
    }
    return {
        source: y.d0.DEFAULT,
        enabledOOP: Z || l,
        enabledLegacy: Z,
        overlayMethod: l ? y.gl.OutOfProcess : y.gl.Disabled
    };
}
function eS(e) {
    let t = en.enableOverlay[eO(e)],
        n = en.enableOverlayV3[eO(e)];
    if (null != t || null != n) return null != t ? t : n;
    let r = eT(e);
    return r.enabledLegacy || r.enabledOOP;
}
function eA(e) {
    let t = en.enableDetection[eO(e)];
    return null == t || t;
}
function eN(e) {
    return !e.hidden && eA(e);
}
function eC() {
    u.K.set(F, en);
}
function eR(e, t, n, r) {
    let i = B(U({}, e), {
        played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * R.Z.Millis.SECOND)).fromNow() : ' ',
        overlay: eS(e),
        verified: n.isGameInDatabase(e),
        detectable: eA(e)
    });
    return (null != e.id && null != ei[e.id] && (i.overlayWarn = ei[e.id].warn), i);
}
function eP(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
}
function ew() {
    let e = !1;
    return (
        (q = o()
            .values(A.Z.libraryApplications)
            .reduce((t, n) => {
                let r = S.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of N.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = ''.concat(n.id, ':').concat(n.branchId);
                    z.has(a) || ((e = !0), z.add(a));
                    let { fullExecutablePath: o } = i,
                        s = o.replace(/\\/g, '/').toLowerCase();
                    ((ee[s] = r.id),
                        t.push({
                            id: r.id,
                            name: r.name,
                            exePath: s,
                            cmdLine: '',
                            lastFocused: 0,
                            add: !0
                        }));
                }
                return t;
            }, [])),
        e && eD(),
        e
    );
}
function eD() {
    if (!__OVERLAY__ && D.isPlatformEmbedded) {
        let e = [...q, ...o().values(en.gameOverrides)];
        L.ZP.setGameCandidateOverrides(e);
    }
}
function eL(e) {
    return null != ee[e.exePath] ? M.GQo.DISCORD : /steamapps/.test(e.cmdLine) ? M.GQo.STEAM : /-epicapp/.test(e.cmdLine) ? M.GQo.EPIC : e.id === I.eB ? M.GQo.ROBLOX : e.distributor;
}
function ex(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                en.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = en.gameOverrides[eO(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (eg(t, e), !0);
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                en.gamesSeen.unshift(em(e));
            }
        }),
        en.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eC(),
        P.Z.setRecentGames(eM().map((e) => eR(e, e2, S.Z, A.Z))));
}
function eM() {
    let e = o().values(en.gameOverrides);
    return en.gamesSeen.filter((e) => void 0 === en.gameOverrides[eO(e)]).concat(e);
}
function ek(e, t) {
    if (void 0 === t) {
        let t = L.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && '0' !== n ? n : null;
        }
        return null;
    }
    return '0' === t ? null : t;
}
function ej(e) {
    let { subgameInfo: t } = e;
    J = (Q = Q.map((e) => (e.distributor === M.GQo.ROBLOX ? (0, T.ON)(e, t) : e))).length > 0 ? Q[0] : null;
}
function eU(e) {
    ex(Q);
}
function eG(e) {
    X = e.games;
}
function eB() {
    K = !1;
}
function eV(e) {
    let { pid: t } = e;
    ((eo = t), (es = null));
}
function eF(e) {
    let { pid: t } = e;
    ((es = t), (eo = null));
}
function eZ() {
    eo = null;
}
function eH(e) {
    let t,
        n = e.pid,
        r = Q.find((e) => e.pid === n);
    if (null == r) {
        let e = X.find((e) => e.pid === n);
        if (null == e) return;
        (((r = U({}, e)).hidden = !1), Q.push(r), (t = eO(r)));
    } else ((t = eO(r)), r.hidden && (et[t] = !0), (r.hidden = !1));
    ((null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)), (en.gameOverrides[t] = B(U({}, r), { add: !0 })), ex(Q), eD(), eC(), ey());
}
function eY() {
    eD();
}
function eW(e) {
    ((ed = e.level), (e_ = e.intervalSeconds));
}
function eK() {
    ((ed = null), (e_ = null), ec.clear());
}
function ez(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null != (t = (0, p.F)(e.exePath)) ? t : e.exePath
            };
        })
        .filter((e) => {
            if (ec.has(e.pid) || eu.has(e.cleanedExePath)) return !1;
            let t = W.some((t) => e.cleanedExePath.includes(t));
            return (t && ec.add(e.pid), t);
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        C.default.track(M.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: W,
            paths: t,
            debugging_level: ed,
            interval_seconds: e_
        });
}
function eq(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== en.enableOverlay[eO(t)],
        a = r !== en.enableOverlayV3[eO(t)];
    if ((i && (en.enableOverlay[eO(t)] = n), a && null != r && (en.enableOverlayV3[eO(t)] = r), eC(), !__OVERLAY__ && null != (null != t.id ? S.Z.getDetectableGame(t.id) : null))) {
        var o, s;
        (i && (0, E.ou)(n, E.AE.LEGACY_GAME, null != (o = t.id) ? o : null), a && null != r && (0, E.ou)(r, E.AE.OOP_GAME, null != (s = t.id) ? s : null));
    }
}
function eX(e) {
    let { game: t } = e,
        n = eA(t);
    ((en.enableDetection[eO(t)] = !n), eC(), C.default.track(M.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n }));
}
function eQ(e) {
    let t = eO(e.game),
        n = en.gameOverrides[t];
    (null == n && ((n = eP(e.game)).add = !0), (n.name = e.newName));
    let r = eO(n);
    (delete en.gameOverrides[t],
        (en.gameOverrides[r] = n),
        eh(en.enableOverlay, t, r),
        eh(en.enableDetection, t, r),
        eh(et, t, r),
        en.gamesSeen.forEach((n) => {
            eO(n) === t && (n.name = e.newName);
        }));
    let i = !1;
    (Q.forEach((n) => {
        eO(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eD(),
        eC(),
        i && ey());
}
function eJ(e) {
    let t = eO(e.game);
    (delete en.gameOverrides[t],
        delete en.enableOverlay[t],
        delete en.enableDetection[t],
        (en.gamesSeen = en.gamesSeen.filter((e) => eO(e) !== t)),
        et[t] &&
            (Q.forEach((e) => {
                t === eO(e) && (e.hidden = !0);
            }),
            delete et[t],
            ey()),
        eD(),
        eC());
}
function e$(e) {
    var t;
    if (__OVERLAY__ || !D.isPlatformEmbedded) return;
    let n = L.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = S.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}
function e0() {
    m.Z.hasLoadedExperiments && H.length > 0 && (ex(H), (H = []));
}
!__OVERLAY__ &&
    ((0, D.isDesktop)() || k.iP) &&
    (er = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = S.Z.games,
            i = (0, O.NW)('handleGamesDatabaseUpdate') && (0, x.supportsOutOfProcess)();
        for (let e of n) {
            var a, o, s, l;
            let t = eI(e),
                n = (i && !t) || _.r.enabledOOP,
                r = null != (a = e.overlay) ? a : _.r.enabled;
            ei[e.id] = {
                compatibilityHook: null != (o = e.overlayCompatibilityHook) ? o : _.r.compatibilityHook,
                warn: null != (s = e.overlayWarn) ? s : _.r.warn,
                enabled: r,
                enabledOOP: n,
                allowHook: null != (l = e.hook) ? l : _.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        let c = new Set();
        (Y.forEach((e) => {
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
                ...Y
            ].forEach((n) => {
                let r = null != n.executables ? n.executables : [],
                    i = {};
                (r.forEach((e) => {
                    let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : 'null';
                    (null == i[n] && (i[n] = []), i[n].push(e.name), e.isLauncher && t.add(e.name));
                }),
                    Object.keys(i).forEach((t) =>
                        e.push({
                            name: n.name,
                            id: n.id,
                            executables: i[t],
                            cmdLine: 'null' !== t ? t : null
                        })
                    ));
            }),
            (e = e.filter((e) => null != e.executables && e.executables.length > 0)),
            L.ZP.setObservedGamesCallback(e, (e) => {
                let n = [],
                    i = {};
                e = e.filter((e) => ((e.distributor = eL(e)), (e.isLauncher = e.isLauncher || t.has(e.exeName)), e.isLauncher && null != e.id && (i[e.id] = e), (e.windowHandle = ek(e.pid, e.windowHandle)), null == eE(e) || (n.push(e), !1)));
                let a = n.filter(eb).length;
                (a !== ea &&
                    ((ea = a),
                    d.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: ea
                    })),
                    (Q = e),
                    ($ = n),
                    (r = i),
                    ey());
            }),
            eD());
    });
class e1 extends (i = c.ZP.Store) {
    initialize() {
        var e, t, n, r, i;
        let a =
            null != (e = u.K.get(F))
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableOverlayV3: {},
                      enableDetection: {}
                  };
        en.gameOverrides = {};
        let s = !1;
        if (
            (o()
                .values(null != (t = a.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = eO(e);
                    en.gameOverrides[t] = e;
                }),
            (en.enableOverlay = null != (n = a.enableOverlay) ? n : {}),
            (en.enableOverlayV3 = null != (r = a.enableOverlayV3) ? r : {}),
            (en.enableDetection = null != (i = a.enableDetection) ? i : {}),
            eD(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        (this.waitFor(S.Z, m.Z), (H = a.gamesSeen), this.syncWith([m.Z], e0), this.syncWith([A.Z, S.Z, N.Z], o().throttle(ew, 1000)), s && eC());
    }
    getVisibleGame() {
        return null == J || eN(J) ? J : null;
    }
    getCurrentGameForAnalytics() {
        return J;
    }
    getVisibleRunningGames() {
        return Q.filter(eN);
    }
    getRunningGames() {
        return Q;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of Q) null != ee[t.exePath] && e.push(ee[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => S.Z.getGameByName(e.name))
            .filter(w.lm)
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
        return null == t || t.isLauncher || null == t.id ? null : U({}, ei[t.id]);
    }
    shouldElevateProcessForPID(e) {
        return null != eo && eo === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != es && es === e;
    }
    getCandidateGames() {
        return X.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === en.gameOverrides[eO(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eM();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eO(e);
                n = n.filter((e) => eO(e) !== t);
            }
        }
        return (t && n.sort((e, t) => t.lastFocused - e.lastFocused), n);
    }
    getSeenGameByName(e) {
        return en.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return $.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(en.gameOverrides);
    }
    getOverrideForGame(e) {
        return en.gameOverrides[eO(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return (V.verbose('getOverlayEnabledForGame: Overlay not supported.', e), !1);
        let t = eT(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return (V.verbose('getGameOverlayStatus: Overlay not supported.', e), null);
        let t = eT(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null != (n = null == (t = $.find((t) => (0, g.Z)(e, t.windowHandle))) ? void 0 : t.name) ? n : null;
    }
    get canShowAdminWarning() {
        return K;
    }
    isDetectionEnabled(e) {
        return eA(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        eu.add(null != (t = (0, p.F)(e)) ? t : e);
    }
}
j(e1, 'displayName', 'RunningGameStore');
let e2 = new e1(d.Z, {
        ROBLOX_SUBGAME_UPDATE: ej,
        RUNNING_GAMES_CHANGE: eU,
        CANDIDATE_GAMES_CHANGE: eG,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eB,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eV,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eZ,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eF,
        RUNNING_GAME_ADD_OVERRIDE: eH,
        RUNNING_GAME_TOGGLE_OVERLAY: eq,
        RUNNING_GAME_TOGGLE_DETECTION: eX,
        RUNNING_GAME_EDIT_NAME: eQ,
        RUNNING_GAME_DELETE_ENTRY: eJ,
        GAMES_DATABASE_UPDATE: er,
        GAME_LAUNCH_SUCCESS: e$,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eY,
        GAME_DETECTION_DEBUGGING_START: eW,
        GAME_DETECTION_DEBUGGING_STOP: eK,
        GAME_DETECTION_DEBUGGING_TICK: ez
    }),
    e3 = e2;
