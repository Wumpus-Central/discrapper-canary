let r;
(n.d(t, {
    FZ: () => eP,
    ZP: () => e4,
    b6: () => eS,
    ik: () => eN,
    rH: () => ev
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
    k = n(370862),
    M = n(981631),
    j = n(987650);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            }));
    }
    return e;
}
function B(e, t) {
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
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = new m.Z('RunningGameStore'),
    Z = 'RunningGameStore',
    H = !1,
    Y = [],
    W = [
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
            name: p.Z.get(M.ABu.SPOTIFY).name
        }
    ],
    K = [],
    z = !0,
    q = new Set(),
    X = [],
    Q = [],
    J = [],
    $ = null,
    ee = [],
    et = {},
    en = {},
    er = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {}
    },
    ei = function () {},
    ea = {},
    eo = 0,
    es = null,
    el = null,
    ec = {},
    eu = new Set(),
    ed = new Set(),
    ef = null,
    e_ = null,
    ep = new Map(),
    eh = new Map();
function em(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function eg(e) {
    let t = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
    return (null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), eE(t, e), t);
}
function eE(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eb(e) {
    var t, n, r, i;
    let a = eh.get(null != (r = null == (t = e.name) ? void 0 : t.toLowerCase()) ? r : '');
    if (null != a) return a;
    let o = null != e.exeName && '' !== e.exeName ? e.exeName : null != (i = null == (n = e.exePath.split('/').pop()) ? void 0 : n.split('\\').pop()) ? i : '',
        s = ep.get(o.toLowerCase());
    if (null != s) return s;
    for (let [t, n] of ep) {
        let r = e.exePath.toLowerCase(),
            i = t.toLowerCase();
        if (r.endsWith(i)) {
            let e = r.length - i.length;
            if (0 === e || '/' === r[e - 1] || '\\' === r[e - 1]) return n;
        }
    }
    return null;
}
function ey(e) {
    let t = eb(e);
    return (null == t ? void 0 : t.streamerTool) === !0;
}
function eO() {
    if (J.length > 0) {
        let e = $;
        (($ = J[0]), null != e && $.pid === e.pid ? ($.start = e.start) : ($.start = Date.now()));
    } else $ = null;
    let e = [];
    for (let t of J) t.pid in ec || ((ec[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ec)) J.some((t) => t.pid === e.pid) || (t.push(e), delete ec[e.pid]);
    (F.info('Running Games Changed', {
        runningGames: J,
        added: e,
        removed: t,
        previousGames: ec
    }),
        d.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: J,
            added: e,
            removed: t
        }));
}
function ev(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
W.forEach((e) => {
    var t;
    (eh.set(e.name.toLowerCase(), e),
        (null != (t = e.executables) ? t : []).forEach((t) => {
            ep.set(t.name.toLowerCase(), e);
        }));
});
let eI = new Set(['1314395942253756416']);
function eT(e) {
    let t = null;
    if ('id' in e) {
        var n;
        t = null != (n = e.id) ? n : null;
    } else {
        let n = S.Z.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, O.wd)('getRawOverlayGameStatus') && eI.has(t);
}
function eS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [S.Z, A.Z];
    if (e.isLauncher)
        return {
            source: k.d.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: f.gl.Disabled
        };
    if ('pid' in e && !v.Z.acquireLock(e.pid))
        return {
            source: k.d.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: f.gl.Disabled
        };
    let i = n.getGameByName(e.name);
    if (null != i) {
        let e = r.getActiveLibraryApplication(i.id);
        if (null != e)
            return {
                source: k.d.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: f.gl.Disabled
            };
    }
    let a = (0, O.NW)('getRawOverlayGameStatus') && (0, x.supportsOutOfProcess)() && !t,
        o = eT(null != i ? i : e),
        s = y.v.legacyEnabled,
        l = a && !o,
        c = er.enableOverlay[ev(e)],
        u = er.enableOverlayV3[ev(e)];
    if (null != c || null != u) {
        let e = null != u ? u : l,
            t = null != c ? c : s,
            n = e ? f.gl.OutOfProcess : f.gl.Hook;
        return {
            source: e && !o ? k.d.OOP_DEFAULT : k.d.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: l ? n : f.gl.Hook
        };
    }
    let d = null == e.id ? null : ea[e.id];
    if (null != d) {
        var _, p;
        let e = null != (_ = d.enabledOOP) ? _ : l,
            t = null != (p = d.enabled) ? p : s,
            n = e ? f.gl.OutOfProcess : f.gl.Hook;
        return {
            source: e && !o ? k.d.OOP_DEFAULT_DATABASE : k.d.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: l ? n : f.gl.Hook
        };
    }
    return {
        source: k.d.DEFAULT,
        enabledOOP: H || l,
        enabledLegacy: H,
        overlayMethod: l ? f.gl.OutOfProcess : f.gl.Disabled
    };
}
function eA(e) {
    let t = er.enableOverlay[ev(e)],
        n = er.enableOverlayV3[ev(e)];
    if (null != t || null != n) return null != t ? t : n;
    let r = eS(e);
    return r.enabledLegacy || r.enabledOOP;
}
function eN(e) {
    let t = er.enableDetection[ev(e)];
    return null == t || t;
}
function eC(e) {
    return !e.hidden && eN(e);
}
function eR() {
    u.K.set(Z, er);
}
function eP(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [e3, S.Z, A.Z],
        i = V(G({}, e), {
            played: null != e.lastFocused && 0 !== e.lastFocused ? l()(new Date(e.lastFocused * R.Z.Millis.SECOND)).fromNow() : ' ',
            overlay: eA(e),
            verified: n.isGameInDatabase(e),
            detectable: eN(e)
        });
    return (null != e.id && null != ea[e.id] && (i.overlayWarn = ea[e.id].warn), i);
}
function ew(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
}
function eD() {
    let e = !1;
    return (
        (X = o()
            .values(A.Z.libraryApplications)
            .reduce((t, n) => {
                let r = S.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of N.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = ''.concat(n.id, ':').concat(n.branchId);
                    q.has(a) || ((e = !0), q.add(a));
                    let { fullExecutablePath: o } = i,
                        s = o.replace(/\\/g, '/').toLowerCase();
                    ((et[s] = r.id),
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
        e && eL(),
        e
    );
}
function eL() {
    if (!__OVERLAY__ && D.isPlatformEmbedded) {
        let e = [...X, ...o().values(er.gameOverrides)];
        L.ZP.setGameCandidateOverrides(e);
    }
}
function ex(e) {
    return null != et[e.exePath] ? M.GQo.DISCORD : /steamapps/.test(e.cmdLine) ? M.GQo.STEAM : /-epicapp/.test(e.cmdLine) ? M.GQo.EPIC : e.id === I.eB ? M.GQo.ROBLOX : e.distributor;
}
function ek(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                er.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = er.gameOverrides[ev(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (eE(t, e), !0);
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                er.gamesSeen.unshift(eg(e));
            }
        }),
        er.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eR(),
        P.Z.setRecentGames(eM().map((e) => eP(e))));
}
function eM() {
    let e = o().values(er.gameOverrides);
    return er.gamesSeen.filter((e) => void 0 === er.gameOverrides[ev(e)]).concat(e);
}
function ej(e, t) {
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
function eU(e) {
    let { subgameInfo: t } = e;
    $ = (J = J.map((e) => (e.distributor === M.GQo.ROBLOX ? (0, T.ON)(e, t) : e))).length > 0 ? J[0] : null;
}
function eG(e) {
    ek(J);
}
function eB(e) {
    Q = e.games;
}
function eV() {
    z = !1;
}
function eF(e) {
    let { pid: t } = e;
    ((es = t), (el = null));
}
function eZ(e) {
    let { pid: t } = e;
    ((el = t), (es = null));
}
function eH() {
    es = null;
}
function eY(e) {
    let t,
        n = e.pid,
        r = J.find((e) => e.pid === n);
    if (null == r) {
        let e = Q.find((e) => e.pid === n);
        if (null == e) return;
        (((r = G({}, e)).hidden = !1), J.push(r), (t = ev(r)));
    } else ((t = ev(r)), r.hidden && (en[t] = !0), (r.hidden = !1));
    ((null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)), (er.gameOverrides[t] = V(G({}, r), { add: !0 })), ek(J), eL(), eR(), eO());
}
function eW() {
    eL();
}
function eK(e) {
    ((ef = e.level), (e_ = e.intervalSeconds));
}
function ez() {
    ((ef = null), (e_ = null), eu.clear());
}
function eq(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null != (t = (0, h.F)(e.exePath)) ? t : e.exePath
            };
        })
        .filter((e) => {
            if (eu.has(e.pid) || ed.has(e.cleanedExePath)) return !1;
            let t = K.some((t) => e.cleanedExePath.includes(t));
            return (t && eu.add(e.pid), t);
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        C.default.track(M.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: K,
            paths: t,
            debugging_level: ef,
            interval_seconds: e_
        });
}
function eX(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== er.enableOverlay[ev(t)],
        a = r !== er.enableOverlayV3[ev(t)];
    if ((i && (er.enableOverlay[ev(t)] = n), a && null != r && (er.enableOverlayV3[ev(t)] = r), eR(), !__OVERLAY__ && null != (null != t.id ? S.Z.getDetectableGame(t.id) : null))) {
        var o, s;
        (i && (0, b.ou)(n, b.AE.LEGACY_GAME, null != (o = t.id) ? o : null), a && null != r && (0, b.ou)(r, b.AE.OOP_GAME, null != (s = t.id) ? s : null));
    }
}
function eQ(e) {
    let { game: t } = e,
        n = eN(t);
    ((er.enableDetection[ev(t)] = !n), eR(), C.default.track(M.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n }));
}
function eJ(e) {
    let t = ev(e.game),
        n = er.gameOverrides[t];
    (null == n && ((n = ew(e.game)).add = !0), (n.name = e.newName));
    let r = ev(n);
    (delete er.gameOverrides[t],
        (er.gameOverrides[r] = n),
        em(er.enableOverlay, t, r),
        em(er.enableDetection, t, r),
        em(en, t, r),
        er.gamesSeen.forEach((n) => {
            ev(n) === t && (n.name = e.newName);
        }));
    let i = !1;
    (J.forEach((n) => {
        ev(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eL(),
        eR(),
        i && eO());
}
function e$(e) {
    let t = ev(e.game);
    (delete er.gameOverrides[t],
        delete er.enableOverlay[t],
        delete er.enableDetection[t],
        (er.gamesSeen = er.gamesSeen.filter((e) => ev(e) !== t)),
        en[t] &&
            (J.forEach((e) => {
                t === ev(e) && (e.hidden = !0);
            }),
            delete en[t],
            eO()),
        eL(),
        eR());
}
function e0(e) {
    var t;
    if (__OVERLAY__ || !D.isPlatformEmbedded) return;
    let n = L.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = S.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}
function e1() {
    g.Z.hasLoadedExperiments && Y.length > 0 && (ek(Y), (Y = []));
}
!__OVERLAY__ &&
    ((0, D.isDesktop)() || j.iP) &&
    (ei = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = S.Z.games,
            i = (0, O.NW)('handleGamesDatabaseUpdate') && (0, x.supportsOutOfProcess)();
        for (let e of n) {
            var a, o, s, l;
            let t = eT(e),
                n = (i && !t) || _.r.enabledOOP,
                r = null != (a = e.overlay) ? a : _.r.enabled;
            ea[e.id] = {
                compatibilityHook: null != (o = e.overlayCompatibilityHook) ? o : _.r.compatibilityHook,
                warn: null != (s = e.overlayWarn) ? s : _.r.warn,
                enabled: r,
                enabledOOP: n,
                allowHook: null != (l = e.hook) ? l : _.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        let c = new Set();
        (W.forEach((e) => {
            var t;
            (null != (t = e.executables) ? t : []).forEach((e) => {
                c.add(e.name.toLowerCase());
            });
        }),
            [
                ...n.filter((e) => {
                    var t;
                    return !(null != (t = e.executables) ? t : []).some((e) => ep.has(e.name.toLowerCase()));
                }),
                ...W
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
                e = e.filter((e) => ((e.distributor = ex(e)), (e.isLauncher = e.isLauncher || t.has(e.exeName)), e.isLauncher && null != e.id && (i[e.id] = e), (e.windowHandle = ej(e.pid, e.windowHandle)), null == eb(e) || (n.push(e), !1)));
                let a = n.filter(ey).length;
                (a !== eo &&
                    ((eo = a),
                    d.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: eo
                    })),
                    (J = e),
                    (ee = n),
                    (r = i),
                    eO());
            }),
            eL());
    });
class e2 extends (i = c.ZP.Store) {
    initialize() {
        var e, t, n, r, i;
        let a =
            null != (e = u.K.get(Z))
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableOverlayV3: {},
                      enableDetection: {}
                  };
        er.gameOverrides = {};
        let s = !1;
        if (
            (o()
                .values(null != (t = a.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = ev(e);
                    er.gameOverrides[t] = e;
                }),
            (er.enableOverlay = null != (n = a.enableOverlay) ? n : {}),
            (er.enableOverlayV3 = null != (r = a.enableOverlayV3) ? r : {}),
            (er.enableDetection = null != (i = a.enableDetection) ? i : {}),
            eL(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        (this.waitFor(S.Z, g.Z), (Y = a.gamesSeen), this.syncWith([g.Z], e1), this.syncWith([A.Z, S.Z, N.Z], o().throttle(eD, 1000)), s && eR());
    }
    getVisibleGame() {
        return null == $ || eC($) ? $ : null;
    }
    getCurrentGameForAnalytics() {
        return $;
    }
    getVisibleRunningGames() {
        return J.filter(eC);
    }
    getRunningGames() {
        return J;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of J) null != et[t.exePath] && e.push(et[t.exePath]);
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
        return null != (t = J.find((t) => t.pid === e)) ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : G({}, ea[t.id]);
    }
    shouldElevateProcessForPID(e) {
        return null != es && es === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != el && el === e;
    }
    getCandidateGames() {
        return Q.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === er.gameOverrides[ev(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eM();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = ev(e);
                n = n.filter((e) => ev(e) !== t);
            }
        }
        return (t && n.sort((e, t) => t.lastFocused - e.lastFocused), n);
    }
    getSeenGameByName(e) {
        return er.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return ee.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(er.gameOverrides);
    }
    getOverrideForGame(e) {
        return er.gameOverrides[ev(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return (F.verbose('getOverlayEnabledForGame: Overlay not supported.', e), !1);
        let t = eS(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return (F.verbose('getGameOverlayStatus: Overlay not supported.', e), null);
        let t = eS(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null != (n = null == (t = ee.find((t) => (0, E.Z)(e, t.windowHandle))) ? void 0 : t.name) ? n : null;
    }
    get canShowAdminWarning() {
        return z;
    }
    isDetectionEnabled(e) {
        return eN(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        ed.add(null != (t = (0, h.F)(e)) ? t : e);
    }
}
U(e2, 'displayName', 'RunningGameStore');
let e3 = new e2(d.Z, {
        ROBLOX_SUBGAME_UPDATE: eU,
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
        GAMES_DATABASE_UPDATE: ei,
        GAME_LAUNCH_SUCCESS: e0,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eW,
        GAME_DETECTION_DEBUGGING_START: eK,
        GAME_DETECTION_DEBUGGING_STOP: ez,
        GAME_DETECTION_DEBUGGING_TICK: eq
    }),
    e4 = e3;
