let r;
(n.d(t, {
    FZ: () => ew,
    ZP: () => e4,
    b6: () => eA,
    ik: () => eC,
    rH: () => eI
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
    f = n(593472),
    _ = n(726542),
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
    S = n(802512),
    A = n(77498),
    N = n(283595),
    C = n(417363),
    R = n(626135),
    P = n(70956),
    w = n(877481),
    D = n(823379),
    L = n(358085),
    x = n(998502),
    M = n(145597),
    k = n(581567),
    j = n(981631),
    U = n(987650);
function G(e, t, n) {
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
function B(e) {
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
                G(e, t, n[t]);
            }));
    }
    return e;
}
function V(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = new h.Z('RunningGameStore'),
    H = 'RunningGameStore',
    Y = !1,
    W = [],
    K = [
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
            name: _.Z.get(j.ABu.SPOTIFY).name
        }
    ],
    z = [],
    q = !0,
    X = new Set(),
    Q = [],
    J = [],
    $ = [],
    ee = null,
    et = [],
    en = {},
    er = {},
    ei = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {}
    },
    ea = function () {},
    eo = {},
    es = 0,
    el = null,
    ec = null,
    eu = {},
    ed = new Set(),
    ef = new Set(),
    e_ = null,
    ep = null,
    eh = new Map(),
    em = new Map();
function eg(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function eE(e) {
    let t = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
    return (null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), null != e.distributor && (t.distributor = e.distributor), eb(t, e), t);
}
function eb(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function ey(e) {
    var t, n, r, i;
    let a = em.get(null != (r = null == (t = e.name) ? void 0 : t.toLowerCase()) ? r : '');
    if (null != a) return a;
    let o = null != e.exeName && '' !== e.exeName ? e.exeName : null != (i = null == (n = e.exePath.split('/').pop()) ? void 0 : n.split('\\').pop()) ? i : '',
        s = eh.get(o.toLowerCase());
    if (null != s) return s;
    for (let [t, n] of eh) {
        let r = e.exePath.toLowerCase(),
            i = t.toLowerCase();
        if (r.endsWith(i)) {
            let e = r.length - i.length;
            if (0 === e || '/' === r[e - 1] || '\\' === r[e - 1]) return n;
        }
    }
    return null;
}
function eO(e) {
    let t = ey(e);
    return (null == t ? void 0 : t.streamerTool) === !0;
}
function ev() {
    if ($.length > 0) {
        let e = ee;
        ((ee = $[0]), null != e && ee.pid === e.pid ? (ee.start = e.start) : (ee.start = Date.now()));
    } else ee = null;
    let e = [];
    for (let n of $)
        if (!(n.pid in eu)) {
            var t;
            ((eu[n.pid] = n), e.push(n));
            let r = A.Z.getGameByName(n.name);
            R.default.track(j.rMx.GAME_DETECTED, {
                game: n.name,
                orig_game_name: n.origGameName,
                game_id: null == r ? void 0 : r.id,
                distributor: n.distributor,
                verified: (0, k.vp)(n.exePath, null != (t = null == r ? void 0 : r.executables) ? t : []),
                game_platform: j.M7m.DESKTOP,
                is_launcher: n.isLauncher,
                detection_method: 'process_observer',
                game_detection_enabled: eC(n),
                executable_path: n.exePath,
                distributor_game_id: n.sku,
                hidden_by_distributor: n.hidden,
                game_metadata: (0, T.sD)(n)
            });
        }
    let n = [];
    for (let e of Object.values(eu)) $.some((t) => t.pid === e.pid) || (n.push(e), delete eu[e.pid]);
    (Z.info('Running Games Changed', {
        runningGames: $,
        added: e,
        removed: n,
        previousGames: eu
    }),
        d.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: $,
            added: e,
            removed: n
        }));
}
function eI(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
K.forEach((e) => {
    var t;
    (em.set(e.name.toLowerCase(), e),
        (null != (t = e.executables) ? t : []).forEach((t) => {
            eh.set(t.name.toLowerCase(), e);
        }));
});
let eT = new Set(['1314395942253756416']);
function eS(e) {
    let t = null;
    if ('id' in e) {
        var n;
        t = null != (n = e.id) ? n : null;
    } else {
        let n = A.Z.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, O.YB)('getRawOverlayGameStatus') && eT.has(t);
}
function eA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [A.Z, N.Z];
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
    let a = (0, O.NW)('getRawOverlayGameStatus') && (0, M.supportsOutOfProcess)() && !t,
        o = eS(null != i ? i : e),
        s = b.v.legacyEnabled,
        l = a && !o,
        c = ei.enableOverlay[eI(e)],
        u = ei.enableOverlayV3[eI(e)];
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
    let d = null == e.id ? null : eo[e.id];
    if (null != d) {
        var f, _;
        let e = null != (f = d.enabledOOP) ? f : l,
            t = null != (_ = d.enabled) ? _ : s,
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
        enabledOOP: Y || l,
        enabledLegacy: Y,
        overlayMethod: l ? y.gl.OutOfProcess : y.gl.Disabled
    };
}
function eN(e) {
    let t = ei.enableOverlay[eI(e)],
        n = ei.enableOverlayV3[eI(e)];
    if (null != t || null != n) return null != t ? t : n;
    let r = eA(e);
    return r.enabledLegacy || r.enabledOOP;
}
function eC(e) {
    let t = ei.enableDetection[eI(e)];
    return null == t || t;
}
function eR(e) {
    return !e.hidden && eC(e);
}
function eP() {
    u.K.set(H, ei);
}
function ew(e, t, n, r) {
    let i = F(B({}, e), {
        played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * P.Z.Millis.SECOND)).fromNow() : ' ',
        overlay: eN(e),
        verified: n.isGameInDatabase(e),
        detectable: eC(e)
    });
    return (null != e.id && null != eo[e.id] && (i.overlayWarn = eo[e.id].warn), i);
}
function eD(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
}
function eL() {
    let e = !1;
    return (
        (Q = o()
            .values(N.Z.libraryApplications)
            .reduce((t, n) => {
                let r = A.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of C.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = ''.concat(n.id, ':').concat(n.branchId);
                    X.has(a) || ((e = !0), X.add(a));
                    let { fullExecutablePath: o } = i,
                        s = o.replace(/\\/g, '/').toLowerCase();
                    ((en[s] = r.id),
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
        e && ex(),
        e
    );
}
function ex() {
    if (!__OVERLAY__ && L.isPlatformEmbedded) {
        let e = [...Q, ...o().values(ei.gameOverrides)];
        x.ZP.setGameCandidateOverrides(e);
    }
}
function eM(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                ei.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = ei.gameOverrides[eI(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (t.distributor !== e.distributor && (t.distributor = e.distributor), eb(t, e), !0);
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                ei.gamesSeen.unshift(eE(e));
            }
        }),
        ei.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eP(),
        w.Z.setRecentGames(ek().map((e) => ew(e, e3, A.Z, N.Z))));
}
function ek() {
    let e = o().values(ei.gameOverrides);
    return ei.gamesSeen.filter((e) => void 0 === ei.gameOverrides[eI(e)]).concat(e);
}
function ej(e, t) {
    if (void 0 === t) {
        let t = x.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && '0' !== n ? n : null;
        }
        return null;
    }
    return '0' === t ? null : t;
}
function eU() {
    ((ee = ($ = $.map((e) => (e.distributor === j.GQo.ROBLOX ? (0, T.ON)(e, S.Z.getCurrentSubgameInfo()) : e))).length > 0 ? $[0] : null), eM($));
}
function eG(e) {
    eM($);
}
function eB(e) {
    J = e.games;
}
function eV() {
    q = !1;
}
function eF(e) {
    let { pid: t } = e;
    ((el = t), (ec = null));
}
function eZ(e) {
    let { pid: t } = e;
    ((ec = t), (el = null));
}
function eH() {
    el = null;
}
function eY(e) {
    let t,
        n = e.pid,
        r = $.find((e) => e.pid === n);
    if (null == r) {
        let e = J.find((e) => e.pid === n);
        if (null == e) return;
        (((r = B({}, e)).hidden = !1), $.push(r), (t = eI(r)));
    } else ((t = eI(r)), r.hidden && (er[t] = !0), (r.hidden = !1));
    ((null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)), (ei.gameOverrides[t] = F(B({}, r), { add: !0 })), eM($), ex(), eP(), ev());
}
function eW() {
    ex();
}
function eK(e) {
    ((e_ = e.level), (ep = e.intervalSeconds));
}
function ez() {
    ((e_ = null), (ep = null), ed.clear());
}
function eq(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null != (t = (0, p.F)(e.exePath)) ? t : e.exePath
            };
        })
        .filter((e) => {
            if (ed.has(e.pid) || ef.has(e.cleanedExePath)) return !1;
            let t = z.some((t) => e.cleanedExePath.includes(t));
            return (t && ed.add(e.pid), t);
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        R.default.track(j.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: z,
            paths: t,
            debugging_level: e_,
            interval_seconds: ep
        });
}
function eX(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== ei.enableOverlay[eI(t)],
        a = r !== ei.enableOverlayV3[eI(t)];
    if ((i && (ei.enableOverlay[eI(t)] = n), a && null != r && (ei.enableOverlayV3[eI(t)] = r), eP(), !__OVERLAY__ && null != (null != t.id ? A.Z.getDetectableGame(t.id) : null))) {
        var o, s;
        (i && (0, E.ou)(n, E.AE.LEGACY_GAME, null != (o = t.id) ? o : null), a && null != r && (0, E.ou)(r, E.AE.OOP_GAME, null != (s = t.id) ? s : null));
    }
}
function eQ(e) {
    let { game: t } = e,
        n = eC(t);
    ((ei.enableDetection[eI(t)] = !n), eP(), $.length > 0 && $.some((e) => e.distributor === j.GQo.ROBLOX) && eU(), R.default.track(j.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n }));
}
function eJ(e) {
    let t = eI(e.game),
        n = ei.gameOverrides[t];
    (null == n && ((n = eD(e.game)).add = !0), (n.name = e.newName));
    let r = eI(n);
    (delete ei.gameOverrides[t],
        (ei.gameOverrides[r] = n),
        eg(ei.enableOverlay, t, r),
        eg(ei.enableDetection, t, r),
        eg(er, t, r),
        ei.gamesSeen.forEach((n) => {
            eI(n) === t && (n.name = e.newName);
        }));
    let i = !1;
    ($.forEach((n) => {
        eI(n) === t && ((n.name = e.newName), (i = !0));
    }),
        ex(),
        eP(),
        i && ev());
}
function e$(e) {
    let t = eI(e.game);
    (delete ei.gameOverrides[t],
        delete ei.enableOverlay[t],
        delete ei.enableDetection[t],
        (ei.gamesSeen = ei.gamesSeen.filter((e) => eI(e) !== t)),
        er[t] &&
            ($.forEach((e) => {
                t === eI(e) && (e.hidden = !0);
            }),
            delete er[t],
            ev()),
        ex(),
        eP());
}
function e0(e) {
    var t;
    if (__OVERLAY__ || !L.isPlatformEmbedded) return;
    let n = x.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = A.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}
function e1() {
    m.Z.hasLoadedExperiments && W.length > 0 && (eM(W), (W = []));
}
!__OVERLAY__ &&
    ((0, L.isDesktop)() || U.iP) &&
    (ea = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = A.Z.games,
            i = (0, O.NW)('handleGamesDatabaseUpdate') && (0, M.supportsOutOfProcess)();
        for (let e of n) {
            var a, o, s, l;
            let t = eS(e),
                n = (i && !t) || f.r.enabledOOP,
                r = null != (a = e.overlay) ? a : f.r.enabled;
            eo[e.id] = {
                compatibilityHook: null != (o = e.overlayCompatibilityHook) ? o : f.r.compatibilityHook,
                warn: null != (s = e.overlayWarn) ? s : f.r.warn,
                enabled: r,
                enabledOOP: n,
                allowHook: null != (l = e.hook) ? l : f.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        let c = new Set();
        (K.forEach((e) => {
            var t;
            (null != (t = e.executables) ? t : []).forEach((e) => {
                c.add(e.name.toLowerCase());
            });
        }),
            [
                ...n.filter((e) => {
                    var t;
                    return !(null != (t = e.executables) ? t : []).some((e) => eh.has(e.name.toLowerCase()));
                }),
                ...K
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
            x.ZP.setObservedGamesCallback(e, (e) => {
                let n = [],
                    i = {};
                e = e.filter((e) => ((null == e.distributor || '' === e.distributor) && e.id === I.eB && (e.distributor = j.GQo.ROBLOX), (e.isLauncher = e.isLauncher || t.has(e.exeName)), e.isLauncher && null != e.id && (i[e.id] = e), (e.windowHandle = ej(e.pid, e.windowHandle)), null == ey(e) || (n.push(e), !1)));
                let a = n.filter(eO).length;
                (a !== es &&
                    ((es = a),
                    d.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: es
                    })),
                    ($ = e),
                    (et = n),
                    (r = i),
                    ev());
            }),
            ex());
    });
class e2 extends (i = c.ZP.Store) {
    initialize() {
        var e, t, n, r, i;
        let a =
            null != (e = u.K.get(H))
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableOverlayV3: {},
                      enableDetection: {}
                  };
        ei.gameOverrides = {};
        let s = !1;
        if (
            (o()
                .values(null != (t = a.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = eI(e);
                    ei.gameOverrides[t] = e;
                }),
            (ei.enableOverlay = null != (n = a.enableOverlay) ? n : {}),
            (ei.enableOverlayV3 = null != (r = a.enableOverlayV3) ? r : {}),
            (ei.enableDetection = null != (i = a.enableDetection) ? i : {}),
            ex(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        (this.waitFor(A.Z, m.Z, S.Z), (W = a.gamesSeen), this.syncWith([m.Z], e1), this.syncWith([N.Z, A.Z, C.Z], o().throttle(eL, 1000)), s && eP());
    }
    getVisibleGame() {
        return null == ee || eR(ee) ? ee : null;
    }
    getCurrentGameForAnalytics() {
        return ee;
    }
    getVisibleRunningGames() {
        return $.filter(eR);
    }
    getRunningGames() {
        return $;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of $) null != en[t.exePath] && e.push(en[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => A.Z.getGameByName(e.name))
            .filter(D.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var t;
        return null != (t = $.find((t) => t.pid === e)) ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : B({}, eo[t.id]);
    }
    shouldElevateProcessForPID(e) {
        return null != el && el === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != ec && ec === e;
    }
    getCandidateGames() {
        return J.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === ei.gameOverrides[eI(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = ek();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eI(e);
                n = n.filter((e) => eI(e) !== t);
            }
        }
        return (t && n.sort((e, t) => t.lastFocused - e.lastFocused), n);
    }
    getSeenGameByName(e) {
        return ei.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return et.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(ei.gameOverrides);
    }
    getOverrideForGame(e) {
        return ei.gameOverrides[eI(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return (Z.verbose('getOverlayEnabledForGame: Overlay not supported.', e), !1);
        let t = eA(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return (Z.verbose('getGameOverlayStatus: Overlay not supported.', e), null);
        let t = eA(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null != (n = null == (t = et.find((t) => (0, g.Z)(e, t.windowHandle))) ? void 0 : t.name) ? n : null;
    }
    get canShowAdminWarning() {
        return q;
    }
    isDetectionEnabled(e) {
        return eC(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        ef.add(null != (t = (0, p.F)(e)) ? t : e);
    }
}
G(e2, 'displayName', 'RunningGameStore');
let e3 = new e2(d.Z, {
        ROBLOX_SUBGAME_UPDATE: eU,
        ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: eU,
        RUNNING_GAMES_CHANGE: eG,
        CANDIDATE_GAMES_CHANGE: eB,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eV,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eF,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eH,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eZ,
        RUNNING_GAME_ADD_OVERRIDE: eY,
        RUNNING_GAME_TOGGLE_OVERLAY: eX,
        RUNNING_GAME_TOGGLE_DETECTION: eQ,
        RUNNING_GAME_EDIT_NAME: eJ,
        RUNNING_GAME_DELETE_ENTRY: e$,
        GAMES_DATABASE_UPDATE: ea,
        GAME_LAUNCH_SUCCESS: e0,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eW,
        GAME_DETECTION_DEBUGGING_START: eK,
        GAME_DETECTION_DEBUGGING_STOP: ez,
        GAME_DETECTION_DEBUGGING_TICK: eq
    }),
    e4 = e3;
