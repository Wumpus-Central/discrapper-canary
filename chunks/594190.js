let r;
n.d(t, {
    FZ: () => ex,
    ZP: () => e5,
    b6: () => eN,
    ik: () => eP,
    ow: () => ey,
    rH: () => eS,
}),
    n(388685),
    n(35282),
    n(539854),
    n(704826),
    n(290780),
    n(642613);
var i,
    o = n(392711),
    a = n.n(o),
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
    C = n(283595),
    N = n(417363),
    R = n(626135),
    P = n(70956),
    w = n(877481),
    D = n(823379),
    x = n(358085),
    L = n(998502),
    j = n(145597),
    M = n(581567),
    k = n(220410),
    U = n(981631),
    G = n(987650);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                B(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = new h.Z("RunningGameStore"),
    Y = "RunningGameStore",
    W = !1,
    K = [],
    z = [
        {
            executables: [
                {
                    os: "win32",
                    name: "obs/obs.exe",
                },
                {
                    os: "win32",
                    name: "obs32.exe",
                },
                {
                    os: "win32",
                    name: "obs64.exe",
                },
                {
                    os: "darwin",
                    name: "OBS.app",
                },
                {
                    os: "linux",
                    name: "obs",
                },
            ],
            name: "OBS",
            streamerTool: !0,
        },
        {
            executables: [
                {
                    os: "win32",
                    name: "XSplit.Gamecaster.exe",
                },
                {
                    os: "win32",
                    name: "XSplit.Core.exe",
                },
                {
                    os: "win32",
                    name: "Gamecaster.exe",
                },
            ],
            name: "XSplit",
            streamerTool: !0,
        },
        {
            executables: [
                {
                    os: "win32",
                    name: "bebo.exe",
                },
            ],
            name: "Bebo",
            streamerTool: !0,
        },
        {
            executables: [
                {
                    os: "win32",
                    name: "Streamlabs OBS.exe",
                },
                {
                    os: "win32",
                    name: "Streamlabs Desktop.exe",
                },
                {
                    os: "darwin",
                    name: "Streamlabs Desktop.app",
                },
            ],
            name: "Streamlabs Desktop",
            streamerTool: !0,
        },
        {
            executables: [
                {
                    os: "win32",
                    name: "TwitchStudio.exe",
                },
                {
                    os: "darwin",
                    name: "Twitch Studio.app",
                },
            ],
            name: "Twitch Studio",
            streamerTool: !0,
        },
        {
            executables: [
                {
                    os: "win32",
                    name: "Spotify.exe",
                },
                {
                    os: "darwin",
                    name: "Spotify.app",
                },
                {
                    os: "linux",
                    name: "spotify",
                },
            ],
            name: _.Z.get(U.ABu.SPOTIFY).name,
        },
    ],
    q = [],
    X = !0,
    Q = new Set(),
    J = [],
    $ = [],
    ee = [],
    et = null,
    en = [],
    er = {},
    ei = {},
    eo = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {},
    },
    ea = function () {},
    es = {},
    el = 0,
    ec = null,
    eu = null,
    ed = {},
    ef = new Set(),
    e_ = new Set(),
    ep = null,
    eh = null,
    em = new Map(),
    eg = new Map();
function eE(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function eb(e) {
    let t = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused,
    };
    return (
        null != e.id && (t.id = e.id),
        null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId),
        null != e.name && (t.name = e.name),
        e.add && (t.add = !0),
        e.block && (t.block = !0),
        null != e.distributor && (t.distributor = e.distributor),
        null != e.gameName && (t.gameName = e.gameName),
        eO(t, e),
        t
    );
}
function ey(e) {
    return e.distributor === U.GQo.ROBLOX ? (0, T.oK)(e) : e;
}
function eO(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function ev(e) {
    var t, n, r, i;
    let o = eg.get(null != (r = null == (t = e.name) ? void 0 : t.toLowerCase()) ? r : "");
    if (null != o) return o;
    let a =
            null != e.exeName && "" !== e.exeName
                ? e.exeName
                : null != (i = null == (n = e.exePath.split("/").pop()) ? void 0 : n.split("\\").pop())
                  ? i
                  : "",
        s = em.get(a.toLowerCase());
    if (null != s) return s;
    for (let [t, n] of em) {
        let r = e.exePath.toLowerCase(),
            i = t.toLowerCase();
        if (r.endsWith(i)) {
            let e = r.length - i.length;
            if (0 === e || "/" === r[e - 1] || "\\" === r[e - 1]) return n;
        }
    }
    return null;
}
function eI(e) {
    let t = ev(e);
    return (null == t ? void 0 : t.streamerTool) === !0;
}
function eT() {
    if (ee.length > 0) {
        let e = et;
        (et = ee[0]), null != e && et.pid === e.pid ? (et.start = e.start) : (et.start = Date.now());
    } else et = null;
    let e = [];
    for (let t of ee) t.pid in ed || ((ed[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ed)) ee.some((t) => t.pid === e.pid) || (t.push(e), delete ed[e.pid]);
    H.info("Running Games Changed", {
        runningGames: ee,
        added: e,
        removed: t,
        previousGames: ed,
    }),
        d.Z.dispatch({
            type: "RUNNING_GAMES_CHANGE",
            games: ee,
            added: e,
            removed: t,
        });
}
function eS(e) {
    if ((0, T.le)(e)) return "".concat(e.exePath, ":").concat(e.id);
    let t = null != e.name ? e.name : "";
    return "".concat(e.exePath, ":").concat(t);
}
z.forEach((e) => {
    var t;
    eg.set(e.name.toLowerCase(), e),
        (null != (t = e.executables) ? t : []).forEach((t) => {
            em.set(t.name.toLowerCase(), e);
        });
});
let eA = new Set(["1314395942253756416"]);
function eC(e) {
    let t = null;
    if ("id" in e) {
        var n;
        t = null != (n = e.id) ? n : null;
    } else {
        let n = A.Z.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, O.YB)("getRawOverlayGameStatus") && eA.has(t);
}
function eN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [A.Z, C.Z],
        i = ey(e);
    if (i.isLauncher)
        return {
            source: y.d0.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: y.gl.Disabled,
        };
    if ("pid" in i && !v.Z.acquireLock(i.pid))
        return {
            source: y.d0.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: y.gl.Disabled,
        };
    let o = n.getGameByName(i.name);
    if (null != o) {
        let e = r.getActiveLibraryApplication(o.id);
        if (null != e)
            return {
                source: y.d0.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: y.gl.Disabled,
            };
    }
    let a = (0, O.NW)("getRawOverlayGameStatus") && (0, j.supportsOutOfProcess)() && !t,
        s = eC(null != o ? o : i),
        l = b.v.legacyEnabled,
        c = a && !s,
        u = eo.enableOverlay[eS(i)],
        d = eo.enableOverlayV3[eS(i)];
    if (null != u || null != d) {
        let e = null != d ? d : c,
            t = null != u ? u : l,
            n = e ? y.gl.OutOfProcess : y.gl.Hook;
        return {
            source: e && !s ? y.d0.OOP_DEFAULT : y.d0.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: c ? n : y.gl.Hook,
        };
    }
    let f = null == i.id ? null : es[i.id];
    if (null != f) {
        var _, p;
        let e = null != (_ = f.enabledOOP) ? _ : c,
            t = null != (p = f.enabled) ? p : l,
            n = e ? y.gl.OutOfProcess : y.gl.Hook;
        return {
            source: e && !s ? y.d0.OOP_DEFAULT_DATABASE : y.d0.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: c ? n : y.gl.Hook,
        };
    }
    return {
        source: y.d0.DEFAULT,
        enabledOOP: W || c,
        enabledLegacy: W,
        overlayMethod: c ? y.gl.OutOfProcess : y.gl.Disabled,
    };
}
function eR(e) {
    let t = ey(e),
        n = eo.enableOverlay[eS(t)],
        r = eo.enableOverlayV3[eS(t)];
    if (null != n || null != r) return null != n ? n : r;
    let i = eN(t);
    return i.enabledLegacy || i.enabledOOP;
}
function eP(e) {
    let t = eo.enableDetection[eS(e)];
    return null == t || t;
}
function ew(e) {
    return !e.hidden && eP(e);
}
function eD() {
    u.K.set(Y, eo);
}
function ex(e, t, n, r) {
    let i = V(Z({}, e), {
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? l()(new Date(e.lastFocused * P.Z.Millis.SECOND)).fromNow()
                : " ",
        overlay: eR(e),
        verified: n.isGameInDatabase(e),
        detectable: eP(e),
    });
    return null != e.id && null != es[e.id] && (i.overlayWarn = es[e.id].warn), i;
}
function eL(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused,
    };
}
function ej() {
    let e = !1;
    return (
        (J = a()
            .values(C.Z.libraryApplications)
            .reduce((t, n) => {
                let r = A.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of N.Z.getLaunchOptions(n.id, n.branchId)) {
                    let o = "".concat(n.id, ":").concat(n.branchId);
                    Q.has(o) || ((e = !0), Q.add(o));
                    let { fullExecutablePath: a } = i,
                        s = a.replace(/\\/g, "/").toLowerCase();
                    (er[s] = r.id),
                        t.push({
                            id: r.id,
                            name: r.name,
                            exePath: s,
                            cmdLine: "",
                            lastFocused: 0,
                            add: !0,
                        });
                }
                return t;
            }, [])),
        e && eM(),
        e
    );
}
function eM() {
    if (!__OVERLAY__ && x.isPlatformEmbedded) {
        let e = [...J, ...a().values(eo.gameOverrides)];
        L.ZP.setGameCandidateOverrides(e);
    }
}
function ek(e, t) {
    let n = eo.gameOverrides[e];
    null != n && ((eo.gameOverrides[t] = n), delete eo.gameOverrides[e]);
    let r = eo.enableOverlay[e];
    null != r && ((eo.enableOverlay[t] = r), delete eo.enableOverlay[e]);
    let i = eo.enableOverlayV3[e];
    null != i && ((eo.enableOverlayV3[t] = i), delete eo.enableOverlayV3[e]);
    let o = eo.enableDetection[e];
    null != o && ((eo.enableDetection[t] = o), delete eo.enableDetection[e]);
}
function eU(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                eo.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = eo.gameOverrides[eS(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eS(t) !== eS(e) && (ek(eS(t), eS(e)), (t.exePath = e.exePath)),
                            eO(t, e),
                            !0
                        );
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                eo.gamesSeen.unshift(eb(e));
            }
        }),
        eo.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eD(),
        w.Z.setRecentGames(eG().map((e) => ex(e, e6, A.Z, C.Z))));
}
function eG() {
    let e = a().values(eo.gameOverrides);
    return eo.gamesSeen.filter((e) => void 0 === eo.gameOverrides[eS(e)]).concat(e);
}
function eB(e, t) {
    if (void 0 === t) {
        let t = L.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && "0" !== n ? n : null;
        }
        return null;
    }
    return "0" === t ? null : t;
}
function eZ() {
    (et =
        (ee = ee.map((e) => (e.distributor === U.GQo.ROBLOX ? (0, T.ON)(e, S.Z.getCurrentSubgameInfo()) : e))).length >
        0
            ? ee[0]
            : null),
        eU(ee);
}
function eF(e) {
    eU(ee);
}
function eV(e) {
    $ = e.games;
}
function eH() {
    X = !1;
}
function eY(e) {
    let { pid: t } = e;
    (ec = t), (eu = null);
}
function eW(e) {
    let { pid: t } = e;
    (eu = t), (ec = null);
}
function eK() {
    ec = null;
}
function ez(e) {
    let t,
        n = e.pid,
        r = ee.find((e) => e.pid === n);
    if (null == r) {
        let e = $.find((e) => e.pid === n);
        if (null == e) return;
        ((r = Z({}, e)).hidden = !1), ee.push(r), (t = eS(r));
    } else (t = eS(r)), r.hidden && (ei[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)),
        (eo.gameOverrides[t] = V(Z({}, r), { add: !0 })),
        eU(ee),
        eM(),
        eD(),
        eT();
}
function eq() {
    eM();
}
function eX(e) {
    (ep = e.level), (eh = e.intervalSeconds);
}
function eQ() {
    (ep = null), (eh = null), ef.clear();
}
function eJ(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null != (t = (0, p.F)(e.exePath)) ? t : e.exePath,
            };
        })
        .filter((e) => {
            if (ef.has(e.pid) || e_.has(e.cleanedExePath)) return !1;
            let t = q.some((t) => e.cleanedExePath.includes(t));
            return t && ef.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        R.default.track(U.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: q,
            paths: t,
            debugging_level: ep,
            interval_seconds: eh,
        });
}
function e$(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== eo.enableOverlay[eS(t)],
        o = r !== eo.enableOverlayV3[eS(t)];
    if (
        (i && (eo.enableOverlay[eS(t)] = n),
        o && null != r && (eo.enableOverlayV3[eS(t)] = r),
        eD(),
        !__OVERLAY__ && null != (null != t.id ? A.Z.getDetectableGame(t.id) : null))
    ) {
        var a, s;
        i && (0, E.ou)(n, E.AE.LEGACY_GAME, null != (a = t.id) ? a : null),
            o && null != r && (0, E.ou)(r, E.AE.OOP_GAME, null != (s = t.id) ? s : null);
    }
}
function e0(e) {
    let { game: t } = e,
        n = eP(t);
    (eo.enableDetection[eS(t)] = !n),
        eD(),
        ee.length > 0 && ee.some((e) => e.distributor === U.GQo.ROBLOX) && eZ(),
        R.default.track(U.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function e1(e) {
    let t = eS(e.game),
        n = eo.gameOverrides[t];
    null == n && ((n = eL(e.game)).add = !0), (n.name = e.newName);
    let r = eS(n);
    delete eo.gameOverrides[t],
        (eo.gameOverrides[r] = n),
        eE(eo.enableOverlay, t, r),
        eE(eo.enableDetection, t, r),
        eE(ei, t, r),
        eo.gamesSeen.forEach((n) => {
            eS(n) === t && (n.name = e.newName);
        });
    let i = !1;
    ee.forEach((n) => {
        eS(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eM(),
        eD(),
        i && eT();
}
function e2(e) {
    let t = eS(e.game);
    delete eo.gameOverrides[t],
        delete eo.enableOverlay[t],
        delete eo.enableDetection[t],
        (eo.gamesSeen = eo.gamesSeen.filter((e) => eS(e) !== t)),
        ei[t] &&
            (ee.forEach((e) => {
                t === eS(e) && (e.hidden = !0);
            }),
            delete ei[t]),
        ee.some((e) => eS(e) === t) && eT(),
        eM(),
        eD();
}
function e3(e) {
    var t;
    if (__OVERLAY__ || !x.isPlatformEmbedded) return;
    let n = L.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = A.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}
function e4() {
    m.Z.hasLoadedExperiments && K.length > 0 && (eU(K), (K = []));
}
!__OVERLAY__ &&
    ((0, x.isDesktop)() || G.iP) &&
    (ea = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = A.Z.games,
            i = (0, O.NW)("handleGamesDatabaseUpdate") && (0, j.supportsOutOfProcess)();
        for (let e of n) {
            var o, a, s, l;
            let t = eC(e),
                n = (i && !t) || f.r.enabledOOP,
                r = null != (o = e.overlay) ? o : f.r.enabled;
            es[e.id] = {
                compatibilityHook: null != (a = e.overlayCompatibilityHook) ? a : f.r.compatibilityHook,
                warn: null != (s = e.overlayWarn) ? s : f.r.warn,
                enabled: r,
                enabledOOP: n,
                allowHook: null != (l = e.hook) ? l : f.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
            };
        }
        let c = new Set();
        z.forEach((e) => {
            var t;
            (null != (t = e.executables) ? t : []).forEach((e) => {
                c.add(e.name.toLowerCase());
            });
        }),
            [
                ...n.filter((e) => {
                    var t;
                    return !(null != (t = e.executables) ? t : []).some((e) => em.has(e.name.toLowerCase()));
                }),
                ...z,
            ].forEach((n) => {
                let r = null != n.executables ? n.executables : [],
                    i = {};
                r.forEach((e) => {
                    let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
                    null == i[n] && (i[n] = []), i[n].push(e.name), e.isLauncher && t.add(e.name);
                }),
                    Object.keys(i).forEach((t) => {
                        var r;
                        return e.push({
                            name: n.name,
                            id: n.id,
                            executables: i[t],
                            cmdLine: "null" !== t ? t : null,
                            thirdPartySkus: null != (r = n.thirdPartySkus) ? r : [],
                        });
                    });
            }),
            (e = e.filter((e) => null != e.executables && e.executables.length > 0));
        let u = k.T.getConfig({ location: "RunningGameStore.handleGamesDatabaseUpdate" }).useDetectionV2;
        L.ZP.setObservedGamesCallback(e, u, (e) => {
            let n = [],
                i = {};
            e = e.filter(
                (e) => (
                    (null == e.distributor || "" === e.distributor) && e.id === I.eB && (e.distributor = U.GQo.ROBLOX),
                    (e.isLauncher = e.isLauncher || t.has(e.exeName)),
                    e.isLauncher && null != e.id && (i[e.id] = e),
                    (e.windowHandle = eB(e.pid, e.windowHandle)),
                    null == ev(e) || (n.push(e), !1)
                ),
            );
            let o = n.filter(eI).length;
            o !== el &&
                ((el = o),
                d.Z.dispatch({
                    type: "RUNNING_STREAMER_TOOLS_CHANGE",
                    count: el,
                })),
                (ee = e),
                (en = n),
                (r = i),
                eT();
        }),
            eM(),
            L.ZP.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [i, o] of e.entries()) {
                        var n, r;
                        let e = t[i],
                            a = A.Z.getGameByName(o.name),
                            s = A.Z.getGameByName(e.name);
                        R.default.track(U.rMx.GAME_DETECTION_COMPARISON, {
                            game_platform: U.M7m.DESKTOP,
                            detection_method: u ? "process_observer_v2" : "process_observer_v1",
                            game_v1: o.name,
                            orig_game_name_v1: o.origGameName,
                            game_id_v1: null == a ? void 0 : a.id,
                            distributor_v1: o.distributor,
                            verified_v1: (0, M.vp)(
                                o.exePath,
                                null != (n = null == a ? void 0 : a.executables) ? n : [],
                            ),
                            is_launcher_v1: o.isLauncher,
                            game_detection_enabled_v1: eP(o),
                            executable_path_v1: (0, M.N6)(o.exePath),
                            distributor_game_id_v1: o.sku,
                            hidden_by_distributor_v1: o.hidden,
                            game_metadata_v1: (0, T.sD)(o),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: null == s ? void 0 : s.id,
                            distributor_v2: e.distributor,
                            verified_v2: (0, M.vp)(
                                e.exePath,
                                null != (r = null == s ? void 0 : s.executables) ? r : [],
                            ),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eP(e),
                            executable_path_v2: (0, M.N6)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, T.sD)(e),
                        });
                    }
            }),
            L.ZP.setGameDetectionErrorCallback((e, t, n, r, i) => {
                R.default.track(U.rMx.GAME_DETECTION_ERROR, {
                    error_code: e.toString(),
                    distributor: t,
                    commit_hash: n,
                    file_name: r,
                    line_number: i,
                });
            });
    });
class e8 extends (i = c.ZP.Store) {
    initialize() {
        var e, t, n, r, i;
        let o =
            null != (e = u.K.get(Y))
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableOverlayV3: {},
                      enableDetection: {},
                  };
        eo.gameOverrides = {};
        let s = !1;
        if (
            (a()
                .values(null != (t = o.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = eS(e);
                    eo.gameOverrides[t] = e;
                }),
            (eo.enableOverlay = null != (n = o.enableOverlay) ? n : {}),
            (eo.enableOverlayV3 = null != (r = o.enableOverlayV3) ? r : {}),
            (eo.enableDetection = null != (i = o.enableDetection) ? i : {}),
            eM(),
            Array.isArray(o.gamesSeen))
        )
            for (let e of o.gamesSeen)
                "number" == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        this.waitFor(A.Z, m.Z, S.Z),
            (K = o.gamesSeen),
            this.syncWith([m.Z], e4),
            this.syncWith([C.Z, A.Z, N.Z], a().throttle(ej, 1000)),
            s && eD();
    }
    getVisibleGame() {
        return null == et || ew(et) ? et : null;
    }
    getCurrentGameForAnalytics() {
        return et;
    }
    getVisibleRunningGames() {
        return ee.filter(ew);
    }
    getRunningGames() {
        return ee;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of ee) null != er[t.exePath] && e.push(er[t.exePath]);
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
        return null != (t = ee.find((t) => t.pid === e)) ? t : null;
    }
    getGameOrTransformedSubgameForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? ey(t) : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : Z({}, es[t.id]);
    }
    shouldElevateProcessForPID(e) {
        return null != ec && ec === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eu && eu === e;
    }
    getCandidateGames() {
        return $.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === eo.gameOverrides[eS(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eG();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eS(e);
                n = n.filter((e) => eS(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return eo.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return en.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(eo.gameOverrides);
    }
    getOverrideForGame(e) {
        return eo.gameOverrides[eS(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return H.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eN(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return H.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eN(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null != (n = null == (t = en.find((t) => (0, g.Z)(e, t.windowHandle))) ? void 0 : t.name) ? n : null;
    }
    get canShowAdminWarning() {
        return X;
    }
    isDetectionEnabled(e) {
        return eP(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        e_.add(null != (t = (0, p.F)(e)) ? t : e);
    }
}
B(e8, "displayName", "RunningGameStore");
let e6 = new e8(d.Z, {
        ROBLOX_SUBGAME_UPDATE: eZ,
        ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: eZ,
        RUNNING_GAMES_CHANGE: eF,
        CANDIDATE_GAMES_CHANGE: eV,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eH,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eY,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eK,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eW,
        RUNNING_GAME_ADD_OVERRIDE: ez,
        RUNNING_GAME_TOGGLE_OVERLAY: e$,
        RUNNING_GAME_TOGGLE_DETECTION: e0,
        RUNNING_GAME_EDIT_NAME: e1,
        RUNNING_GAME_DELETE_ENTRY: e2,
        GAMES_DATABASE_UPDATE: ea,
        GAME_LAUNCH_SUCCESS: e3,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eq,
        GAME_DETECTION_DEBUGGING_START: eX,
        GAME_DETECTION_DEBUGGING_STOP: eQ,
        GAME_DETECTION_DEBUGGING_TICK: eJ,
    }),
    e5 = e6;
