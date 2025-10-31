let r;
n.d(t, {
    FZ: () => eL,
    ZP: () => e7,
    b6: () => eR,
    ik: () => ew,
    ow: () => eO,
    rH: () => eA,
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
    w = n(358085),
    D = n(998502),
    x = n(145597),
    L = n(581567),
    M = n(624126),
    j = n(272304),
    k = n(981631),
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
function Z(e, t) {
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
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = new h.Z("RunningGameStore"),
    H = "RunningGameStore",
    Y = !1,
    W = "4294967293",
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
            name: _.Z.get(k.ABu.SPOTIFY).name,
        },
    ],
    q = [],
    X = !0,
    Q = { state: "unknown" },
    J = new Set(),
    $ = [],
    ee = [],
    et = [],
    en = null,
    er = [],
    ei = {},
    ea = {},
    eo = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {},
    },
    es = function () {},
    el = {},
    ec = 0,
    eu = null,
    ed = null,
    ef = {},
    e_ = new Set(),
    ep = new Set(),
    eh = null,
    em = null,
    eg = new Map(),
    eE = new Map();
function eb(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function ey(e) {
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
        ev(t, e),
        t
    );
}
function eO(e) {
    return e;
}
function ev(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eI(e) {
    var t, n, r, i;
    let a = eE.get(null != (r = null == (t = e.name) ? void 0 : t.toLowerCase()) ? r : "");
    if (null != a) return a;
    let o =
            null != e.exeName && "" !== e.exeName
                ? e.exeName
                : null != (i = null == (n = e.exePath.split("/").pop()) ? void 0 : n.split("\\").pop())
                  ? i
                  : "",
        s = eg.get(o.toLowerCase());
    if (null != s) return s;
    for (let [t, n] of eg) {
        let r = e.exePath.toLowerCase(),
            i = t.toLowerCase();
        if (r.endsWith(i)) {
            let e = r.length - i.length;
            if (0 === e || "/" === r[e - 1] || "\\" === r[e - 1]) return n;
        }
    }
    return null;
}
function eT(e) {
    let t = eI(e);
    return (null == t ? void 0 : t.streamerTool) === !0;
}
function eS() {
    if (et.length > 0) {
        let e = en;
        (en = et[0]), null != e && en.pid === e.pid ? (en.start = e.start) : (en.start = Date.now());
    } else en = null;
    let e = [];
    for (let t of et) t.pid in ef || ((ef[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ef)) et.some((t) => t.pid === e.pid) || (t.push(e), delete ef[e.pid]);
    V.info("Running Games Changed", {
        runningGames: et,
        added: e,
        removed: t,
        previousGames: ef,
    }),
        d.Z.dispatch({
            type: "RUNNING_GAMES_CHANGE",
            games: et,
            added: e,
            removed: t,
        });
}
function eA(e) {
    if ((0, I.le)(e)) return "".concat(e.exePath, ":").concat(e.id);
    let t = null != e.name ? e.name : "";
    return "".concat(e.exePath, ":").concat(t);
}
z.forEach((e) => {
    var t;
    eE.set(e.name.toLowerCase(), e),
        (null != (t = e.executables) ? t : []).forEach((t) => {
            eg.set(t.name.toLowerCase(), e);
        });
});
let eC = new Set(["1314395942253756416"]);
function eN(e) {
    let t = null;
    if ("id" in e) {
        var n;
        t = null != (n = e.id) ? n : null;
    } else {
        let n = T.Z.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, O.YB)("getRawOverlayGameStatus") && eC.has(t);
}
function eR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [T.Z, S.Z],
        i = eO(e);
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
    let o = (0, O.NW)("getRawOverlayGameStatus") && (0, x.supportsOutOfProcess)() && !t,
        s = eN(null != a ? a : i),
        l = b.v.legacyEnabled,
        c = o && !s,
        u = eo.enableOverlay[eA(i)],
        d = eo.enableOverlayV3[eA(i)];
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
    let f = null == i.id ? null : el[i.id];
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
function eP(e) {
    let t = eO(e),
        n = eo.enableOverlay[eA(t)],
        r = eo.enableOverlayV3[eA(t)];
    if (null != n || null != r) return null != n ? n : r;
    let i = eR(t);
    return i.enabledLegacy || i.enabledOOP;
}
function ew(e) {
    let t = eo.enableDetection[eA(e)];
    return null == t || t;
}
function eD(e) {
    return !e.hidden && ew(e);
}
function ex() {
    u.K.set(H, eo);
}
function eL(e, t, n, r) {
    let i = F(B({}, e), {
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? l()(new Date(e.lastFocused * N.Z.Millis.SECOND)).fromNow()
                : " ",
        overlay: eP(e),
        verified: n.isGameInDatabase(e),
        detectable: ew(e),
    });
    return null != e.id && null != el[e.id] && (i.overlayWarn = el[e.id].warn), i;
}
function eM(e) {
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
        ($ = o()
            .values(S.Z.libraryApplications)
            .reduce((t, n) => {
                let r = T.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of A.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = "".concat(n.id, ":").concat(n.branchId);
                    J.has(a) || ((e = !0), J.add(a));
                    let { fullExecutablePath: o } = i,
                        s = o.replace(/\\/g, "/").toLowerCase();
                    (ei[s] = r.id),
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
    if (!__OVERLAY__ && w.isPlatformEmbedded) {
        let e = [...$, ...o().values(eo.gameOverrides)];
        D.ZP.setGameCandidateOverrides(e);
    }
}
function eU(e, t) {
    let n = eo.gameOverrides[e];
    null != n && ((eo.gameOverrides[t] = n), delete eo.gameOverrides[e]);
    let r = eo.enableOverlay[e];
    null != r && ((eo.enableOverlay[t] = r), delete eo.enableOverlay[e]);
    let i = eo.enableOverlayV3[e];
    null != i && ((eo.enableOverlayV3[t] = i), delete eo.enableOverlayV3[e]);
    let a = eo.enableDetection[e];
    null != a && ((eo.enableDetection[t] = a), delete eo.enableDetection[e]);
}
function eG(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                eo.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = eo.gameOverrides[eA(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eA(t) !== eA(e) && (eU(eA(t), eA(e)), (t.exePath = e.exePath)),
                            ev(t, e),
                            !0
                        );
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                eo.gamesSeen.unshift(ey(e));
            }
        }),
        eo.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ex(),
        R.Z.setRecentGames(eB().map((e) => eL(e, e6, T.Z, S.Z))));
}
function eB() {
    let e = o().values(eo.gameOverrides);
    return eo.gamesSeen.filter((e) => void 0 === eo.gameOverrides[eA(e)]).concat(e);
}
function eZ(e, t) {
    if (void 0 === t) {
        let t = D.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && "0" !== n ? n : null;
        }
        return null;
    }
    return "0" === t ? null : t;
}
function eF(e) {
    eG(et);
}
function eV(e) {
    ee = e.games;
}
function eH() {
    X = !1;
}
function eY(e) {
    let { pid: t } = e;
    (eu = t), (ed = null);
}
function eW(e) {
    let { pid: t } = e;
    (ed = t), (eu = null);
}
function eK() {
    eu = null;
}
function ez(e) {
    let t,
        n = e.pid,
        r = et.find((e) => e.pid === n);
    if (null == r) {
        let e = ee.find((e) => e.pid === n);
        if (null == e) return;
        ((r = B({}, e)).hidden = !1), et.push(r), (t = eA(r));
    } else (t = eA(r)), r.hidden && (ea[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)),
        (eo.gameOverrides[t] = F(B({}, r), { add: !0 })),
        eG(et),
        ek(),
        ex(),
        eS();
}
function eq() {
    ek();
}
function eX(e) {
    (eh = e.level), (em = e.intervalSeconds);
}
function eQ() {
    (eh = null), (em = null), e_.clear();
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
            if (e_.has(e.pid) || ep.has(e.cleanedExePath)) return !1;
            let t = q.some((t) => e.cleanedExePath.includes(t));
            return t && e_.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        C.default.track(k.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: q,
            paths: t,
            debugging_level: eh,
            interval_seconds: em,
        });
}
function e$(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== eo.enableOverlay[eA(t)],
        a = r !== eo.enableOverlayV3[eA(t)];
    if (
        (i && (eo.enableOverlay[eA(t)] = n),
        a && null != r && (eo.enableOverlayV3[eA(t)] = r),
        ex(),
        !__OVERLAY__ && null != (null != t.id ? T.Z.getDetectableGame(t.id) : null))
    ) {
        var o, s;
        i && (0, E.ou)(n, E.OverlayToggledClientSettingType.LEGACY_GAME, null != (o = t.id) ? o : null),
            a && null != r && (0, E.ou)(r, E.OverlayToggledClientSettingType.OOP_GAME, null != (s = t.id) ? s : null);
    }
}
function e0(e) {
    let { game: t } = e,
        n = ew(t);
    (eo.enableDetection[eA(t)] = !n), ex(), C.default.track(k.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function e1(e) {
    let t = eA(e.game),
        n = eo.gameOverrides[t];
    null == n && ((n = eM(e.game)).add = !0), (n.name = e.newName);
    let r = eA(n);
    delete eo.gameOverrides[t],
        (eo.gameOverrides[r] = n),
        eb(eo.enableOverlay, t, r),
        eb(eo.enableDetection, t, r),
        eb(ea, t, r),
        eo.gamesSeen.forEach((n) => {
            eA(n) === t && (n.name = e.newName);
        });
    let i = !1;
    et.forEach((n) => {
        eA(n) === t && ((n.name = e.newName), (i = !0));
    }),
        ek(),
        ex(),
        i && eS();
}
function e3(e) {
    let t = eA(e.game);
    delete eo.gameOverrides[t],
        delete eo.enableOverlay[t],
        delete eo.enableDetection[t],
        (eo.gamesSeen = eo.gamesSeen.filter((e) => eA(e) !== t)),
        ea[t] &&
            (et.forEach((e) => {
                t === eA(e) && (e.hidden = !0);
            }),
            delete ea[t]),
        et.some((e) => eA(e) === t) && eS(),
        ek(),
        ex();
}
function e2(e) {
    var t;
    if (__OVERLAY__ || !w.isPlatformEmbedded) return;
    let n = D.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = T.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}
function e4() {
    m.Z.hasLoadedExperiments && K.length > 0 && (eG(K), (K = []));
}
function e8(e) {
    let { inputServiceStatus: t, modules: n } = e;
    if (!n.includes("input-service")) return !1;
    Q = t;
}
!__OVERLAY__ &&
    ((0, w.isDesktop)() || U.iP) &&
    (es = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = T.Z.games,
            i = (0, O.NW)("handleGamesDatabaseUpdate") && (0, x.supportsOutOfProcess)();
        for (let e of n) {
            var a, o, s, l;
            let t = eN(e),
                n = (i && !t) || f.r.enabledOOP,
                r = null != (a = e.overlay) ? a : f.r.enabled;
            el[e.id] = {
                compatibilityHook: null != (o = e.overlayCompatibilityHook) ? o : f.r.compatibilityHook,
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
                    return !(null != (t = e.executables) ? t : []).some((e) => eg.has(e.name.toLowerCase()));
                }),
                ...z,
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
            ));
        let u = j.Tf.getConfig({ location: "RunningGameStore.handleGamesDatabaseUpdate" }).useDetectionV2;
        D.ZP.setObservedGamesCallback(e, u, (e) => {
            let n = [],
                i = {};
            e = e.filter(
                (e) => (
                    (e.isLauncher = e.isLauncher || t.has(e.exeName)),
                    e.isLauncher && null != e.id && (i[e.id] = e),
                    (e.windowHandle = eZ(e.pid, e.windowHandle)),
                    null == eI(e) || (n.push(e), !1)
                ),
            );
            let a = n.filter(eT).length;
            a !== ec &&
                ((ec = a),
                d.Z.dispatch({
                    type: "RUNNING_STREAMER_TOOLS_CHANGE",
                    count: ec,
                })),
                (et = e),
                (er = n),
                (r = i),
                eS();
        }),
            ek(),
            D.ZP.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [a, o] of e.entries()) {
                        var n, r, i;
                        let e = t[a],
                            s = T.Z.getGameByName(o.name),
                            l = T.Z.getGameByName(e.name),
                            c =
                                null !=
                                (n =
                                    (null == e ? void 0 : e.id) !== W
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
                            detection_method: u ? "process_observer_v2" : "process_observer_v1",
                            game_v1: o.name,
                            orig_game_name_v1: o.origGameName,
                            game_id_v1: null == s ? void 0 : s.id,
                            distributor_v1: o.distributor,
                            verified_v1: (0, L.vp)(
                                o.exePath,
                                null != (r = null == s ? void 0 : s.executables) ? r : [],
                            ),
                            is_launcher_v1: o.isLauncher,
                            game_detection_enabled_v1: ew(o),
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
                            game_detection_enabled_v2: ew(e),
                            executable_path_v2: (0, L.N6)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, I.sD)(e),
                        });
                    }
            });
        let _ = M.g.getConfig({ location: "RunningGameStore.handleGamesDatabaseUpdate" }).enabled;
        D.ZP.setGameDetectionErrorCallback((e, t, n, r, i) => {
            _ &&
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
            null != (e = u.K.get(H))
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
            (o()
                .values(null != (t = a.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = eA(e);
                    (0, I.le)(e) || (eo.gameOverrides[t] = e);
                }),
            (eo.enableOverlay = null != (n = a.enableOverlay) ? n : {}),
            (eo.enableOverlayV3 = null != (r = a.enableOverlayV3) ? r : {}),
            (eo.enableDetection = null != (i = a.enableDetection) ? i : {}),
            ek(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen)
                "number" == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        this.waitFor(A.Z, m.Z, T.Z, S.Z),
            (K = a.gamesSeen.filter((e) => !(0, I.le)(e))),
            this.syncWith([m.Z], e4),
            this.syncWith([S.Z, T.Z, A.Z], o().throttle(ej, 1000)),
            s && ex();
    }
    getVisibleGame() {
        return null == en || eD(en) ? en : null;
    }
    getCurrentGameForAnalytics() {
        return en;
    }
    getVisibleRunningGames() {
        return et.filter(eD);
    }
    getRunningGames() {
        return et;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of et) null != ei[t.exePath] && e.push(ei[t.exePath]);
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
        return null != (t = et.find((t) => t.pid === e)) ? t : null;
    }
    getGameForName(e) {
        var t;
        return null !=
            (t = et.find((t) => {
                var n;
                return (null == (n = t.name) ? void 0 : n.toLowerCase()) === e.toLowerCase();
            }))
            ? t
            : null;
    }
    getGameOrTransformedSubgameForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? eO(t) : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : B({}, el[t.id]);
    }
    shouldElevateProcessForPID(e) {
        return null != eu && eu === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != ed && ed === e;
    }
    getCandidateGames() {
        return ee.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === eo.gameOverrides[eA(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eB();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eA(e);
                n = n.filter((e) => eA(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return eo.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return er.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(eo.gameOverrides);
    }
    getOverrideForGame(e) {
        return eo.gameOverrides[eA(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return V.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eR(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return V.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eR(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null != (n = null == (t = er.find((t) => (0, g.Z)(e, t.windowHandle))) ? void 0 : t.name) ? n : null;
    }
    get canShowAdminWarning() {
        return X && !this.isInputServiceInitialized();
    }
    isDetectionEnabled(e) {
        return ew(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        ep.add(null != (t = (0, p.F)(e)) ? t : e);
    }
    getInputServiceStatus() {
        return Q;
    }
    isInputServiceInitialized() {
        return "running" === Q.state;
    }
}
G(e5, "displayName", "RunningGameStore");
let e6 = new e5(d.Z, {
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
        RUNNING_GAME_DELETE_ENTRY: e3,
        GAMES_DATABASE_UPDATE: es,
        GAME_LAUNCH_SUCCESS: e2,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eq,
        GAME_DETECTION_DEBUGGING_START: eX,
        GAME_DETECTION_DEBUGGING_STOP: eQ,
        GAME_DETECTION_DEBUGGING_TICK: eJ,
        SYSTEM_SERVICE_INITIALIZE: e8,
    }),
    e7 = e6;
