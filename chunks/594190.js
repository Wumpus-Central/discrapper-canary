let r;
n.d(t, {
    FZ: () => eD,
    ZP: () => e6,
    b6: () => eN,
    ik: () => eR,
    ow: () => eb,
    rH: () => eT,
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function B(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
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
let Z = new h.Z("RunningGameStore"),
    H = "RunningGameStore",
    Y = !1,
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
            name: _.Z.get(j.ABu.SPOTIFY).name,
        },
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
        enableDetection: {},
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
        ey(t, e),
        t
    );
}
function eb(e) {
    return e.distributor === j.GQo.ROBLOX ? (0, T.oK)(e) : e;
}
function ey(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eO(e) {
    var t, n, r, i;
    let a = em.get(null != (r = null == (t = e.name) ? void 0 : t.toLowerCase()) ? r : "");
    if (null != a) return a;
    let o =
            null != e.exeName && "" !== e.exeName
                ? e.exeName
                : null != (i = null == (n = e.exePath.split("/").pop()) ? void 0 : n.split("\\").pop())
                  ? i
                  : "",
        s = eh.get(o.toLowerCase());
    if (null != s) return s;
    for (let [t, n] of eh) {
        let r = e.exePath.toLowerCase(),
            i = t.toLowerCase();
        if (r.endsWith(i)) {
            let e = r.length - i.length;
            if (0 === e || "/" === r[e - 1] || "\\" === r[e - 1]) return n;
        }
    }
    return null;
}
function ev(e) {
    let t = eO(e);
    return (null == t ? void 0 : t.streamerTool) === !0;
}
function eI() {
    if ($.length > 0) {
        let e = ee;
        (ee = $[0]), null != e && ee.pid === e.pid ? (ee.start = e.start) : (ee.start = Date.now());
    } else ee = null;
    let e = [];
    for (let n of $)
        if (!(n.pid in eu)) {
            var t;
            (eu[n.pid] = n), e.push(n);
            let r = A.Z.getGameByName(n.name);
            R.default.track(j.rMx.GAME_DETECTED, {
                game: n.name,
                orig_game_name: n.origGameName,
                game_id: null == r ? void 0 : r.id,
                distributor: n.distributor,
                verified: (0, k.vp)(n.exePath, null != (t = null == r ? void 0 : r.executables) ? t : []),
                game_platform: j.M7m.DESKTOP,
                is_launcher: n.isLauncher,
                detection_method: "process_observer",
                game_detection_enabled: eR(n),
                executable_path: n.exePath,
                distributor_game_id: n.sku,
                hidden_by_distributor: n.hidden,
                game_metadata: (0, T.sD)(n),
            });
        }
    let n = [];
    for (let e of Object.values(eu)) $.some((t) => t.pid === e.pid) || (n.push(e), delete eu[e.pid]);
    Z.info("Running Games Changed", {
        runningGames: $,
        added: e,
        removed: n,
        previousGames: eu,
    }),
        d.Z.dispatch({
            type: "RUNNING_GAMES_CHANGE",
            games: $,
            added: e,
            removed: n,
        });
}
function eT(e) {
    if ((0, T.le)(e)) return "".concat(e.exePath, ":").concat(e.id);
    let t = null != e.name ? e.name : "";
    return "".concat(e.exePath, ":").concat(t);
}
K.forEach((e) => {
    var t;
    em.set(e.name.toLowerCase(), e),
        (null != (t = e.executables) ? t : []).forEach((t) => {
            eh.set(t.name.toLowerCase(), e);
        });
});
let eS = new Set(["1314395942253756416"]);
function eA(e) {
    let t = null;
    if ("id" in e) {
        var n;
        t = null != (n = e.id) ? n : null;
    } else {
        let n = A.Z.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, O.YB)("getRawOverlayGameStatus") && eS.has(t);
}
function eN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [A.Z, N.Z],
        i = eb(e);
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
    let a = n.getGameByName(i.name);
    if (null != a) {
        let e = r.getActiveLibraryApplication(a.id);
        if (null != e)
            return {
                source: y.d0.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: y.gl.Disabled,
            };
    }
    let o = (0, O.NW)("getRawOverlayGameStatus") && (0, M.supportsOutOfProcess)() && !t,
        s = eA(null != a ? a : i),
        l = b.v.legacyEnabled,
        c = o && !s,
        u = ei.enableOverlay[eT(i)],
        d = ei.enableOverlayV3[eT(i)];
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
    let f = null == i.id ? null : eo[i.id];
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
        enabledOOP: Y || c,
        enabledLegacy: Y,
        overlayMethod: c ? y.gl.OutOfProcess : y.gl.Disabled,
    };
}
function eC(e) {
    let t = eb(e),
        n = ei.enableOverlay[eT(t)],
        r = ei.enableOverlayV3[eT(t)];
    if (null != n || null != r) return null != n ? n : r;
    let i = eN(t);
    return i.enabledLegacy || i.enabledOOP;
}
function eR(e) {
    let t = ei.enableDetection[eT(e)];
    return null == t || t;
}
function eP(e) {
    return !e.hidden && eR(e);
}
function ew() {
    u.K.set(H, ei);
}
function eD(e, t, n, r) {
    let i = F(B({}, e), {
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? l()(new Date(e.lastFocused * P.Z.Millis.SECOND)).fromNow()
                : " ",
        overlay: eC(e),
        verified: n.isGameInDatabase(e),
        detectable: eR(e),
    });
    return null != e.id && null != eo[e.id] && (i.overlayWarn = eo[e.id].warn), i;
}
function eL(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused,
    };
}
function ex() {
    let e = !1;
    return (
        (Q = o()
            .values(N.Z.libraryApplications)
            .reduce((t, n) => {
                let r = A.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of C.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = "".concat(n.id, ":").concat(n.branchId);
                    X.has(a) || ((e = !0), X.add(a));
                    let { fullExecutablePath: o } = i,
                        s = o.replace(/\\/g, "/").toLowerCase();
                    (en[s] = r.id),
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
    if (!__OVERLAY__ && L.isPlatformEmbedded) {
        let e = [...Q, ...o().values(ei.gameOverrides)];
        x.ZP.setGameCandidateOverrides(e);
    }
}
function ek(e, t) {
    let n = ei.gameOverrides[e];
    null != n && ((ei.gameOverrides[t] = n), delete ei.gameOverrides[e]);
    let r = ei.enableOverlay[e];
    null != r && ((ei.enableOverlay[t] = r), delete ei.enableOverlay[e]);
    let i = ei.enableOverlayV3[e];
    null != i && ((ei.enableOverlayV3[t] = i), delete ei.enableOverlayV3[e]);
    let a = ei.enableDetection[e];
    null != a && ((ei.enableDetection[t] = a), delete ei.enableDetection[e]);
}
function ej(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                ei.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = ei.gameOverrides[eT(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eT(t) !== eT(e) && (ek(eT(t), eT(e)), (t.exePath = e.exePath)),
                            ey(t, e),
                            !0
                        );
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
        ew(),
        w.Z.setRecentGames(eU().map((e) => eD(e, e5, A.Z, N.Z))));
}
function eU() {
    let e = o().values(ei.gameOverrides);
    return ei.gamesSeen.filter((e) => void 0 === ei.gameOverrides[eT(e)]).concat(e);
}
function eG(e, t) {
    if (void 0 === t) {
        let t = x.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && "0" !== n ? n : null;
        }
        return null;
    }
    return "0" === t ? null : t;
}
function eB() {
    (ee =
        ($ = $.map((e) => (e.distributor === j.GQo.ROBLOX ? (0, T.ON)(e, S.Z.getCurrentSubgameInfo()) : e))).length > 0
            ? $[0]
            : null),
        ej($);
}
function eV(e) {
    ej($);
}
function eF(e) {
    J = e.games;
}
function eZ() {
    q = !1;
}
function eH(e) {
    let { pid: t } = e;
    (el = t), (ec = null);
}
function eY(e) {
    let { pid: t } = e;
    (ec = t), (el = null);
}
function eW() {
    el = null;
}
function eK(e) {
    let t,
        n = e.pid,
        r = $.find((e) => e.pid === n);
    if (null == r) {
        let e = J.find((e) => e.pid === n);
        if (null == e) return;
        ((r = B({}, e)).hidden = !1), $.push(r), (t = eT(r));
    } else (t = eT(r)), r.hidden && (er[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)),
        (ei.gameOverrides[t] = F(B({}, r), { add: !0 })),
        ej($),
        eM(),
        ew(),
        eI();
}
function ez() {
    eM();
}
function eq(e) {
    (e_ = e.level), (ep = e.intervalSeconds);
}
function eX() {
    (e_ = null), (ep = null), ed.clear();
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
            if (ed.has(e.pid) || ef.has(e.cleanedExePath)) return !1;
            let t = z.some((t) => e.cleanedExePath.includes(t));
            return t && ed.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        R.default.track(j.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: z,
            paths: t,
            debugging_level: e_,
            interval_seconds: ep,
        });
}
function eJ(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== ei.enableOverlay[eT(t)],
        a = r !== ei.enableOverlayV3[eT(t)];
    if (
        (i && (ei.enableOverlay[eT(t)] = n),
        a && null != r && (ei.enableOverlayV3[eT(t)] = r),
        ew(),
        !__OVERLAY__ && null != (null != t.id ? A.Z.getDetectableGame(t.id) : null))
    ) {
        var o, s;
        i && (0, E.ou)(n, E.AE.LEGACY_GAME, null != (o = t.id) ? o : null),
            a && null != r && (0, E.ou)(r, E.AE.OOP_GAME, null != (s = t.id) ? s : null);
    }
}
function e$(e) {
    let { game: t } = e,
        n = eR(t);
    (ei.enableDetection[eT(t)] = !n),
        ew(),
        $.length > 0 && $.some((e) => e.distributor === j.GQo.ROBLOX) && eB(),
        R.default.track(j.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function e0(e) {
    let t = eT(e.game),
        n = ei.gameOverrides[t];
    null == n && ((n = eL(e.game)).add = !0), (n.name = e.newName);
    let r = eT(n);
    delete ei.gameOverrides[t],
        (ei.gameOverrides[r] = n),
        eg(ei.enableOverlay, t, r),
        eg(ei.enableDetection, t, r),
        eg(er, t, r),
        ei.gamesSeen.forEach((n) => {
            eT(n) === t && (n.name = e.newName);
        });
    let i = !1;
    $.forEach((n) => {
        eT(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eM(),
        ew(),
        i && eI();
}
function e1(e) {
    let t = eT(e.game);
    delete ei.gameOverrides[t],
        delete ei.enableOverlay[t],
        delete ei.enableDetection[t],
        (ei.gamesSeen = ei.gamesSeen.filter((e) => eT(e) !== t)),
        er[t] &&
            ($.forEach((e) => {
                t === eT(e) && (e.hidden = !0);
            }),
            delete er[t]),
        $.some((e) => eT(e) === t) && eI(),
        eM(),
        ew();
}
function e2(e) {
    var t;
    if (__OVERLAY__ || !L.isPlatformEmbedded) return;
    let n = x.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = A.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}
function e3() {
    m.Z.hasLoadedExperiments && W.length > 0 && (ej(W), (W = []));
}
!__OVERLAY__ &&
    ((0, L.isDesktop)() || U.iP) &&
    (ea = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = A.Z.games,
            i = (0, O.NW)("handleGamesDatabaseUpdate") && (0, M.supportsOutOfProcess)();
        for (let e of n) {
            var a, o, s, l;
            let t = eA(e),
                n = (i && !t) || f.r.enabledOOP,
                r = null != (a = e.overlay) ? a : f.r.enabled;
            eo[e.id] = {
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
                    return !(null != (t = e.executables) ? t : []).some((e) => eh.has(e.name.toLowerCase()));
                }),
                ...K,
            ].forEach((n) => {
                let r = null != n.executables ? n.executables : [],
                    i = {};
                r.forEach((e) => {
                    let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
                    null == i[n] && (i[n] = []), i[n].push(e.name), e.isLauncher && t.add(e.name);
                }),
                    Object.keys(i).forEach((t) =>
                        e.push({
                            name: n.name,
                            id: n.id,
                            executables: i[t],
                            cmdLine: "null" !== t ? t : null,
                        }),
                    );
            }),
            (e = e.filter((e) => null != e.executables && e.executables.length > 0)),
            x.ZP.setObservedGamesCallback(e, (e) => {
                let n = [],
                    i = {};
                e = e.filter(
                    (e) => (
                        (null == e.distributor || "" === e.distributor) &&
                            e.id === I.eB &&
                            (e.distributor = j.GQo.ROBLOX),
                        (e.isLauncher = e.isLauncher || t.has(e.exeName)),
                        e.isLauncher && null != e.id && (i[e.id] = e),
                        (e.windowHandle = eG(e.pid, e.windowHandle)),
                        null == eO(e) || (n.push(e), !1)
                    ),
                );
                let a = n.filter(ev).length;
                a !== es &&
                    ((es = a),
                    d.Z.dispatch({
                        type: "RUNNING_STREAMER_TOOLS_CHANGE",
                        count: es,
                    })),
                    ($ = e),
                    (et = n),
                    (r = i),
                    eI();
            }),
            eM();
    });
class e4 extends (i = c.ZP.Store) {
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
                      enableDetection: {},
                  };
        ei.gameOverrides = {};
        let s = !1;
        if (
            (o()
                .values(null != (t = a.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = eT(e);
                    ei.gameOverrides[t] = e;
                }),
            (ei.enableOverlay = null != (n = a.enableOverlay) ? n : {}),
            (ei.enableOverlayV3 = null != (r = a.enableOverlayV3) ? r : {}),
            (ei.enableDetection = null != (i = a.enableDetection) ? i : {}),
            eM(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen)
                "number" == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        this.waitFor(A.Z, m.Z, S.Z),
            (W = a.gamesSeen),
            this.syncWith([m.Z], e3),
            this.syncWith([N.Z, A.Z, C.Z], o().throttle(ex, 1000)),
            s && ew();
    }
    getVisibleGame() {
        return null == ee || eP(ee) ? ee : null;
    }
    getCurrentGameForAnalytics() {
        return ee;
    }
    getVisibleRunningGames() {
        return $.filter(eP);
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
    getGameOrTransformedSubgameForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? eb(t) : null;
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
        return J.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === ei.gameOverrides[eT(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eU();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eT(e);
                n = n.filter((e) => eT(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
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
        return ei.gameOverrides[eT(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return Z.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eN(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return Z.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eN(e);
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
        return eR(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        ef.add(null != (t = (0, p.F)(e)) ? t : e);
    }
}
G(e4, "displayName", "RunningGameStore");
let e5 = new e4(d.Z, {
        ROBLOX_SUBGAME_UPDATE: eB,
        ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: eB,
        RUNNING_GAMES_CHANGE: eV,
        CANDIDATE_GAMES_CHANGE: eF,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eZ,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eH,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eW,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eY,
        RUNNING_GAME_ADD_OVERRIDE: eK,
        RUNNING_GAME_TOGGLE_OVERLAY: eJ,
        RUNNING_GAME_TOGGLE_DETECTION: e$,
        RUNNING_GAME_EDIT_NAME: e0,
        RUNNING_GAME_DELETE_ENTRY: e1,
        GAMES_DATABASE_UPDATE: ea,
        GAME_LAUNCH_SUCCESS: e2,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: ez,
        GAME_DETECTION_DEBUGGING_START: eq,
        GAME_DETECTION_DEBUGGING_STOP: eX,
        GAME_DETECTION_DEBUGGING_TICK: eQ,
    }),
    e6 = e5;
