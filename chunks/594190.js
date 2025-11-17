let r;
n.d(t, {
    FZ: () => ex,
    ZP: () => e6,
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
    I = n(509003),
    T = n(77498),
    S = n(283595),
    A = n(417363),
    C = n(626135),
    N = n(70956),
    R = n(877481),
    P = n(823379),
    D = n(358085),
    w = n(998502),
    x = n(145597),
    L = n(581567),
    M = n(624126),
    k = n(981631),
    j = n(987650);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function Z(e, t) {
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
let F = new h.Z("RunningGameStore"),
    V = "RunningGameStore",
    H = !1,
    Y = "4294967293",
    W = [],
    K = [
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
            name: _.Z.get(k.ABu.SPOTIFY).name,
        },
    ],
    z = [],
    q = !0,
    X = {
        "input-service": { state: "unknown" },
        "tool-service": { state: "unknown" },
    },
    Q = new Set(),
    J = [],
    $ = [],
    ee = [],
    et = null,
    en = [],
    er = {},
    ei = {},
    ea = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {},
    },
    eo = function () {},
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
    return e;
}
function eO(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function ev(e) {
    var t, n, r, i;
    let a = eg.get(null != (r = null == (t = e.name) ? void 0 : t.toLowerCase()) ? r : "");
    if (null != a) return a;
    let o =
            null != e.exeName && "" !== e.exeName
                ? e.exeName
                : null != (i = null == (n = e.exePath.split("/").pop()) ? void 0 : n.split("\\").pop())
                  ? i
                  : "",
        s = em.get(o.toLowerCase());
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
    F.info("Running Games Changed", {
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
    if ((0, I.le)(e)) return "".concat(e.exePath, ":").concat(e.id);
    let t = null != e.name ? e.name : "";
    return "".concat(e.exePath, ":").concat(t);
}
K.forEach((e) => {
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
        let n = T.Z.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, O.YB)("getRawOverlayGameStatus") && eA.has(t);
}
function eN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [T.Z, S.Z],
        i = ey(e);
    if (i.isLauncher)
        return {
            source: y.d0.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: y.gl.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in i && !v.Z.acquireLock(i.pid))
        return {
            source: y.d0.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: y.gl.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let a = n.getGameByName(i.name);
    if (null != a) {
        let e = r.getActiveLibraryApplication(a.id);
        if (null != e)
            return {
                source: y.d0.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: y.gl.Disabled,
                reason: "Some library application thing?",
            };
    }
    let o = (0, O.NW)("getRawOverlayGameStatus") && (0, x.supportsOutOfProcess)() && !t,
        s = eC(null != a ? a : i),
        l = b.v.legacyEnabled,
        c = o && !s,
        u = ea.enableOverlay[eS(i)],
        d = ea.enableOverlayV3[eS(i)];
    if (null != u || null != d) {
        let e = null != d ? d : c,
            t = null != u ? u : l,
            n = e ? y.gl.OutOfProcess : y.gl.Hook;
        return {
            source: e && !s ? y.d0.OOP_DEFAULT : y.d0.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: c ? n : y.gl.Hook,
            reason: "Enabled from persistent",
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
            reason: "Enabled from overlayOptions",
        };
    }
    return {
        source: y.d0.DEFAULT,
        enabledOOP: H || c,
        enabledLegacy: H,
        overlayMethod: c ? y.gl.OutOfProcess : y.gl.Disabled,
        reason: "Default enablement",
    };
}
function eR(e) {
    let t = ey(e),
        n = ea.enableOverlay[eS(t)],
        r = ea.enableOverlayV3[eS(t)];
    if (null != n || null != r) return null != n ? n : r;
    let i = eN(t);
    return i.enabledLegacy || i.enabledOOP;
}
function eP(e) {
    let t = ea.enableDetection[eS(e)];
    return null == t || t;
}
function eD(e) {
    return !e.hidden && eP(e);
}
function ew() {
    u.K.set(V, ea);
}
function ex(e, t, n, r) {
    let i = Z(G({}, e), {
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? l()(new Date(e.lastFocused * N.Z.Millis.SECOND)).fromNow()
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
function eM() {
    let e = !1;
    return (
        (J = o()
            .values(S.Z.libraryApplications)
            .reduce((t, n) => {
                let r = T.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of A.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = "".concat(n.id, ":").concat(n.branchId);
                    Q.has(a) || ((e = !0), Q.add(a));
                    let { fullExecutablePath: o } = i,
                        s = o.replace(/\\/g, "/").toLowerCase();
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
        e && ek(),
        e
    );
}
function ek() {
    if (!__OVERLAY__ && D.isPlatformEmbedded) {
        let e = [...J, ...o().values(ea.gameOverrides)];
        w.ZP.setGameCandidateOverrides(e);
    }
}
function ej(e, t) {
    let n = ea.gameOverrides[e];
    null != n && ((ea.gameOverrides[t] = n), delete ea.gameOverrides[e]);
    let r = ea.enableOverlay[e];
    null != r && ((ea.enableOverlay[t] = r), delete ea.enableOverlay[e]);
    let i = ea.enableOverlayV3[e];
    null != i && ((ea.enableOverlayV3[t] = i), delete ea.enableOverlayV3[e]);
    let a = ea.enableDetection[e];
    null != a && ((ea.enableDetection[t] = a), delete ea.enableDetection[e]);
}
function eU(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                ea.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = ea.gameOverrides[eS(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eS(t) !== eS(e) && (ej(eS(t), eS(e)), (t.exePath = e.exePath)),
                            eO(t, e),
                            !0
                        );
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                ea.gamesSeen.unshift(eb(e));
            }
        }),
        ea.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ew(),
        R.Z.setRecentGames(eG().map((e) => ex(e, e8, T.Z, S.Z))));
}
function eG() {
    let e = o().values(ea.gameOverrides);
    return ea.gamesSeen.filter((e) => void 0 === ea.gameOverrides[eS(e)]).concat(e);
}
function eB(e, t) {
    if (void 0 === t) {
        let t = w.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && "0" !== n ? n : null;
        }
        return null;
    }
    return "0" === t ? null : t;
}
function eZ(e) {
    eU(ee);
}
function eF(e) {
    $ = e.games;
}
function eV() {
    q = !1;
}
function eH(e) {
    let { pid: t } = e;
    (ec = t), (eu = null);
}
function eY(e) {
    let { pid: t } = e;
    (eu = t), (ec = null);
}
function eW() {
    ec = null;
}
function eK(e) {
    let t,
        n = e.pid,
        r = ee.find((e) => e.pid === n);
    if (null == r) {
        let e = $.find((e) => e.pid === n);
        if (null == e) return;
        ((r = G({}, e)).hidden = !1), ee.push(r), (t = eS(r));
    } else (t = eS(r)), r.hidden && (ei[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)),
        (ea.gameOverrides[t] = Z(G({}, r), { add: !0 })),
        eU(ee),
        ek(),
        ew(),
        eT();
}
function ez() {
    ek();
}
function eq(e) {
    (ep = e.level), (eh = e.intervalSeconds);
}
function eX() {
    (ep = null), (eh = null), ef.clear();
}
function eQ(e) {
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
            let t = z.some((t) => e.cleanedExePath.includes(t));
            return t && ef.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        C.default.track(k.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: z,
            paths: t,
            debugging_level: ep,
            interval_seconds: eh,
        });
}
function eJ(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== ea.enableOverlay[eS(t)],
        a = r !== ea.enableOverlayV3[eS(t)];
    if (
        (i && (ea.enableOverlay[eS(t)] = n),
        a && null != r && (ea.enableOverlayV3[eS(t)] = r),
        ew(),
        !__OVERLAY__ && null != (null != t.id ? T.Z.getDetectableGame(t.id) : null))
    ) {
        var o, s;
        i && (0, E.ou)(n, E.OverlayToggledClientSettingType.LEGACY_GAME, null != (o = t.id) ? o : null),
            a && null != r && (0, E.ou)(r, E.OverlayToggledClientSettingType.OOP_GAME, null != (s = t.id) ? s : null);
    }
}
function e$(e) {
    let { game: t } = e,
        n = eP(t);
    (ea.enableDetection[eS(t)] = !n), ew(), C.default.track(k.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function e0(e) {
    let t = eS(e.game),
        n = ea.gameOverrides[t];
    null == n && ((n = eL(e.game)).add = !0), (n.name = e.newName);
    let r = eS(n);
    delete ea.gameOverrides[t],
        (ea.gameOverrides[r] = n),
        eE(ea.enableOverlay, t, r),
        eE(ea.enableDetection, t, r),
        eE(ei, t, r),
        ea.gamesSeen.forEach((n) => {
            eS(n) === t && (n.name = e.newName);
        });
    let i = !1;
    ee.forEach((n) => {
        eS(n) === t && ((n.name = e.newName), (i = !0));
    }),
        ek(),
        ew(),
        i && eT();
}
function e1(e) {
    let t = eS(e.game);
    delete ea.gameOverrides[t],
        delete ea.enableOverlay[t],
        delete ea.enableDetection[t],
        (ea.gamesSeen = ea.gamesSeen.filter((e) => eS(e) !== t)),
        ei[t] &&
            (ee.forEach((e) => {
                t === eS(e) && (e.hidden = !0);
            }),
            delete ei[t]),
        ee.some((e) => eS(e) === t) && eT(),
        ek(),
        ew();
}
function e3(e) {
    var t;
    if (__OVERLAY__ || !D.isPlatformEmbedded) return;
    let n = w.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = T.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}
function e2() {
    m.Z.hasLoadedExperiments && W.length > 0 && (eU(W), (W = []));
}
function e4(e) {
    let { status: t, modules: n } = e;
    for (let e of n) X[e] = t;
}
!__OVERLAY__ &&
    ((0, D.isDesktop)() || j.iP) &&
    (eo = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = T.Z.games,
            i = (0, O.NW)("handleGamesDatabaseUpdate") && (0, x.supportsOutOfProcess)();
        for (let e of n) {
            var a, o, s, l;
            let t = eC(e),
                n = (i && !t) || f.r.enabledOOP,
                r = null != (a = e.overlay) ? a : f.r.enabled;
            es[e.id] = {
                compatibilityHook: null != (o = e.overlayCompatibilityHook) ? o : f.r.compatibilityHook,
                warn: null != (s = e.overlayWarn) ? s : f.r.warn,
                enabled: r,
                enabledOOP: n,
                allowHook: null != (l = e.hook) ? l : f.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
            };
        }
        let c = new Set();
        K.forEach((e) => {
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
                ...K,
            ].forEach((n) => {
                let r = null != n.executables ? n.executables : [],
                    i = {};
                if (
                    (r.forEach((e) => {
                        let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
                        null == i[n] && (i[n] = []), i[n].push(e.name), e.isLauncher && t.add(e.name);
                    }),
                    Object.keys(i).length > 0)
                )
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
                else {
                    var a;
                    let t = null != (a = n.thirdPartySkus) ? a : [];
                    t.length > 0 &&
                        e.push({
                            name: n.name,
                            id: n.id,
                            executables: [],
                            cmdLine: null,
                            thirdPartySkus: t,
                        });
                }
            }),
            (e = e.filter(
                (e) =>
                    (null != e.executables && e.executables.length > 0) ||
                    (null != e.thirdPartySkus && e.thirdPartySkus.length > 0),
            )),
            w.ZP.setObservedGamesCallback(e, !0, (e) => {
                let n = [],
                    i = {};
                e = e.filter(
                    (e) => (
                        (e.isLauncher = e.isLauncher || t.has(e.exeName)),
                        e.isLauncher && null != e.id && (i[e.id] = e),
                        (e.windowHandle = eB(e.pid, e.windowHandle)),
                        null == ev(e) || (n.push(e), !1)
                    ),
                );
                let a = n.filter(eI).length;
                a !== el &&
                    ((el = a),
                    d.Z.dispatch({
                        type: "RUNNING_STREAMER_TOOLS_CHANGE",
                        count: el,
                    })),
                    (ee = e),
                    (en = n),
                    (r = i),
                    eT();
            }),
            ek(),
            w.ZP.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [a, o] of e.entries()) {
                        var n, r, i;
                        let e = t[a],
                            s = T.Z.getGameByName(o.name),
                            l = T.Z.getGameByName(e.name),
                            c =
                                null !=
                                (n =
                                    (null == e ? void 0 : e.id) !== Y
                                        ? null == e
                                            ? void 0
                                            : e.id
                                        : null == l
                                          ? void 0
                                          : l.id)
                                    ? n
                                    : "";
                        C.default.track(k.rMx.GAME_DETECTION_COMPARISON, {
                            game_platform: k.M7m.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: o.name,
                            orig_game_name_v1: o.origGameName,
                            game_id_v1: null == s ? void 0 : s.id,
                            distributor_v1: o.distributor,
                            verified_v1: (0, L.vp)(
                                o.exePath,
                                null != (r = null == s ? void 0 : s.executables) ? r : [],
                            ),
                            is_launcher_v1: o.isLauncher,
                            game_detection_enabled_v1: eP(o),
                            executable_path_v1: (0, L.N6)(o.exePath),
                            distributor_game_id_v1: o.sku,
                            hidden_by_distributor_v1: o.hidden,
                            game_metadata_v1: (0, I.sD)(o),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: c,
                            distributor_v2: e.distributor,
                            verified_v2: (0, L.vp)(
                                e.exePath,
                                null != (i = null == l ? void 0 : l.executables) ? i : [],
                            ),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eP(e),
                            executable_path_v2: (0, L.N6)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, I.sD)(e),
                        });
                    }
            });
        let u = M.g.getConfig({ location: "RunningGameStore.handleGamesDatabaseUpdate" }).enabled;
        w.ZP.setGameDetectionErrorCallback((e, t, n, r, i) => {
            u &&
                C.default.track(k.rMx.GAME_DETECTION_ERROR, {
                    error_code: e.toString(),
                    distributor: t,
                    commit_hash: n,
                    file_name: r,
                    line_number: i,
                });
        });
    });
class e5 extends (i = c.ZP.Store) {
    initialize() {
        var e, t, n, r, i;
        let a =
            null != (e = u.K.get(V))
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableOverlayV3: {},
                      enableDetection: {},
                  };
        ea.gameOverrides = {};
        let s = !1;
        if (
            (o()
                .values(null != (t = a.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = eS(e);
                    (0, I.le)(e) || (ea.gameOverrides[t] = e);
                }),
            (ea.enableOverlay = null != (n = a.enableOverlay) ? n : {}),
            (ea.enableOverlayV3 = null != (r = a.enableOverlayV3) ? r : {}),
            (ea.enableDetection = null != (i = a.enableDetection) ? i : {}),
            ek(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen)
                "number" == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        this.waitFor(A.Z, m.Z, T.Z, S.Z),
            (W = a.gamesSeen.filter((e) => !(0, I.le)(e))),
            this.syncWith([m.Z], e2),
            this.syncWith([S.Z, T.Z, A.Z], o().throttle(eM, 1000)),
            s && ew();
    }
    getVisibleGame() {
        return null == et || eD(et) ? et : null;
    }
    getCurrentGameForAnalytics() {
        return et;
    }
    getVisibleRunningGames() {
        return ee.filter(eD);
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
            .map((e) => T.Z.getGameByName(e.name))
            .filter(P.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var t;
        return null != (t = ee.find((t) => t.pid === e)) ? t : null;
    }
    getGameForName(e) {
        var t;
        return null !=
            (t = ee.find((t) => {
                var n;
                return (null == (n = t.name) ? void 0 : n.toLowerCase()) === e.toLowerCase();
            }))
            ? t
            : null;
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
        return null == t || t.isLauncher || null == t.id ? null : G({}, es[t.id]);
    }
    shouldElevateProcessForPID(e) {
        return null != ec && ec === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eu && eu === e;
    }
    getCandidateGames() {
        return $.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === ea.gameOverrides[eS(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === W.length;
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
        return ea.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return en.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(ea.gameOverrides);
    }
    getOverrideForGame(e) {
        return ea.gameOverrides[eS(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return F.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eN(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return F.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eN(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null != (n = null == (t = en.find((t) => (0, g.Z)(e, t.windowHandle))) ? void 0 : t.name) ? n : null;
    }
    get canShowAdminWarning() {
        return q && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eP(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        e_.add(null != (t = (0, p.F)(e)) ? t : e);
    }
    getSystemServiceStatus(e) {
        var t;
        return null != (t = X[e]) ? t : { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        var t;
        return (null == (t = X[e]) ? void 0 : t.state) === "running";
    }
}
U(e5, "displayName", "RunningGameStore");
let e8 = new e5(d.Z, {
        RUNNING_GAMES_CHANGE: eZ,
        CANDIDATE_GAMES_CHANGE: eF,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eV,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eH,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eW,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eY,
        RUNNING_GAME_ADD_OVERRIDE: eK,
        RUNNING_GAME_TOGGLE_OVERLAY: eJ,
        RUNNING_GAME_TOGGLE_DETECTION: e$,
        RUNNING_GAME_EDIT_NAME: e0,
        RUNNING_GAME_DELETE_ENTRY: e1,
        GAMES_DATABASE_UPDATE: eo,
        GAME_LAUNCH_SUCCESS: e3,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: ez,
        GAME_DETECTION_DEBUGGING_START: eq,
        GAME_DETECTION_DEBUGGING_STOP: eX,
        GAME_DETECTION_DEBUGGING_TICK: eQ,
        SYSTEM_SERVICE_INITIALIZE: e4,
    }),
    e6 = e8;
