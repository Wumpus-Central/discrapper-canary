let r;
n.d(t, {
    FZ: () => ek,
    ZP: () => tn,
    b6: () => eD,
    ik: () => eL,
    ow: () => eS,
    rH: () => eP,
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
    p = n(726542),
    _ = n(439849),
    m = n(710845),
    h = n(353926),
    g = n(855403),
    E = n(444295),
    b = n(454991),
    y = n(837268),
    O = n(32300),
    v = n(948897),
    S = n(509003),
    I = n(77498),
    T = n(283595),
    C = n(417363),
    A = n(626135),
    N = n(70956),
    P = n(877481),
    R = n(823379),
    w = n(358085),
    D = n(998502),
    x = n(145597),
    L = n(581567),
    j = n(569675),
    M = n(981631),
    k = n(987650);
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
let B = new m.Z("RunningGameStore"),
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
            name: p.Z.get(M.ABu.SPOTIFY).name,
        },
    ],
    z = [],
    q = !0,
    Q = {
        "input-service": { state: "unknown" },
        "tool-service": { state: "unknown" },
    },
    X = new Set(),
    J = [],
    $ = [],
    ee = [],
    et = [],
    en = null,
    er = null,
    ei = [],
    ea = {},
    eo = {},
    es = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {},
    },
    el = function () {},
    ec = {},
    eu = 0,
    ed = null,
    ef = null,
    ep = {},
    e_ = {},
    em = new Set(),
    eh = new Set(),
    eg = null,
    eE = null,
    eb = new Map(),
    ey = new Map();
function eO(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function ev(e) {
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
        eI(t, e),
        t
    );
}
function eS(e) {
    return e;
}
function eI(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eT(e) {
    var t, n, r, i;
    let a = ey.get(null != (r = null == (t = e.name) ? void 0 : t.toLowerCase()) ? r : "");
    if (null != a) return a;
    let o =
            null != e.exeName && "" !== e.exeName
                ? e.exeName
                : null != (i = null == (n = e.exePath.split("/").pop()) ? void 0 : n.split("\\").pop())
                  ? i
                  : "",
        s = eb.get(o.toLowerCase());
    if (null != s) return s;
    for (let [t, n] of eb) {
        let r = e.exePath.toLowerCase(),
            i = t.toLowerCase();
        if (r.endsWith(i)) {
            let e = r.length - i.length;
            if (0 === e || "/" === r[e - 1] || "\\" === r[e - 1]) return n;
        }
    }
    return null;
}
function eC(e) {
    let t = eT(e);
    return (null == t ? void 0 : t.streamerTool) === !0;
}
function eA() {
    if (ee.length > 0) {
        let e = en;
        (en = ee[0]), null != e && en.pid === e.pid ? (en.start = e.start) : (en.start = Date.now());
    } else en = null;
    let e = [];
    for (let t of ee) t.pid in ep || ((ep[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ep)) ee.some((t) => t.pid === e.pid) || (t.push(e), delete ep[e.pid]);
    (e.length > 0 || t.length > 0) &&
        (B.info("Running Games Changed", {
            runningGames: ee,
            added: e,
            removed: t,
            previousGames: ep,
        }),
        d.Z.dispatch({
            type: "RUNNING_GAMES_CHANGE",
            games: ee,
            added: e,
            removed: t,
        }));
}
function eN() {
    er = et.length > 0 ? et[0] : null;
    let e = [];
    for (let t of et) t.pid in e_ || ((e_[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(e_)) et.some((t) => t.pid === e.pid) || (t.push(e), delete e_[e.pid]);
    (e.length > 0 || t.length > 0) &&
        (B.info("Running Non-Games Changed", {
            runningNonGames: et,
            added: e,
            removed: t,
            previousNonGames: e_,
        }),
        d.Z.dispatch({
            type: "RUNNING_NON_GAMES_CHANGE",
            nonGames: et,
            added: e,
            removed: t,
        }));
}
function eP(e) {
    if ((0, S.le)(e)) return "".concat(e.exePath, ":").concat(e.id);
    let t = null != e.name ? e.name : "";
    return "".concat(e.exePath, ":").concat(t);
}
K.forEach((e) => {
    var t;
    ey.set(e.name.toLowerCase(), e),
        (null != (t = e.executables) ? t : []).forEach((t) => {
            eb.set(t.name.toLowerCase(), e);
        });
});
let eR = new Set(["1314395942253756416"]);
function ew(e) {
    let t = null;
    if ("id" in e) {
        var n;
        t = null != (n = e.id) ? n : null;
    } else {
        let n = I.Z.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, O.YB)("getRawOverlayGameStatus") && eR.has(t);
}
function eD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [I.Z, T.Z],
        i = eS(e);
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
    let o = (0, x.supportsOutOfProcess)() && !t,
        s = ew(null != a ? a : i),
        l = b.v.legacyEnabled,
        c = o && !s,
        u = es.enableOverlay[eP(i)],
        d = es.enableOverlayV3[eP(i)];
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
    let f = null == i.id ? null : ec[i.id];
    if (null != f) {
        var p, _;
        let e = null != (p = f.enabledOOP) ? p : c,
            t = null != (_ = f.enabled) ? _ : l,
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
function ex(e) {
    let t = eS(e),
        n = es.enableOverlay[eP(t)],
        r = es.enableOverlayV3[eP(t)];
    if (null != n || null != r) return null != n ? n : r;
    let i = eD(t);
    return i.enabledLegacy || i.enabledOOP;
}
function eL(e) {
    let t = es.enableDetection[eP(e)];
    return null == t || t;
}
function ej(e) {
    return !e.hidden && eL(e);
}
function eM() {
    u.K.set(V, es);
}
function ek(e, t, n, r) {
    let i = F(G({}, e), {
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? l()(new Date(e.lastFocused * N.Z.Millis.SECOND)).fromNow()
                : " ",
        overlay: ex(e),
        verified: n.isGameInDatabase(e),
        detectable: eL(e),
    });
    return null != e.id && null != ec[e.id] && (i.overlayWarn = ec[e.id].warn), i;
}
function eU(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused,
    };
}
function eG() {
    let e = !1;
    return (
        (J = o()
            .values(T.Z.libraryApplications)
            .reduce((t, n) => {
                let r = I.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of C.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = "".concat(n.id, ":").concat(n.branchId);
                    X.has(a) || ((e = !0), X.add(a));
                    let { fullExecutablePath: o } = i,
                        s = o.replace(/\\/g, "/").toLowerCase();
                    (ea[s] = r.id),
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
        e && eZ(),
        e
    );
}
function eZ() {
    if (!__OVERLAY__ && w.isPlatformEmbedded) {
        let e = [...J, ...o().values(es.gameOverrides)];
        D.ZP.setGameCandidateOverrides(e);
    }
}
function eF(e, t) {
    let n = es.gameOverrides[e];
    null != n && ((es.gameOverrides[t] = n), delete es.gameOverrides[e]);
    let r = es.enableOverlay[e];
    null != r && ((es.enableOverlay[t] = r), delete es.enableOverlay[e]);
    let i = es.enableOverlayV3[e];
    null != i && ((es.enableOverlayV3[t] = i), delete es.enableOverlayV3[e]);
    let a = es.enableDetection[e];
    null != a && ((es.enableDetection[t] = a), delete es.enableDetection[e]);
}
function eB(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                es.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = es.gameOverrides[eP(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eP(t) !== eP(e) && (eF(eP(t), eP(e)), (t.exePath = e.exePath)),
                            eI(t, e),
                            !0
                        );
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                es.gamesSeen.unshift(ev(e));
            }
        }),
        es.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eM(),
        P.Z.setRecentGames(eV().map((e) => ek(e, tt, I.Z, T.Z))));
}
function eV() {
    let e = o().values(es.gameOverrides);
    return es.gamesSeen.filter((e) => void 0 === es.gameOverrides[eP(e)]).concat(e);
}
function eH(e, t) {
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
function eY(e) {
    eB(ee);
}
function eW() {}
function eK(e) {
    $ = e.games;
}
function ez() {
    q = !1;
}
function eq(e) {
    let { pid: t } = e;
    (ed = t), (ef = null);
}
function eQ(e) {
    let { pid: t } = e;
    (ef = t), (ed = null);
}
function eX() {
    ed = null;
}
function eJ(e) {
    let t,
        n = e.pid,
        r = ee.find((e) => e.pid === n);
    if (null == r) {
        let e = $.find((e) => e.pid === n);
        if (null == e) return;
        ((r = G({}, e)).hidden = !1), ee.push(r), (t = eP(r));
    } else (t = eP(r)), r.hidden && (eo[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)),
        (es.gameOverrides[t] = F(G({}, r), { add: !0 })),
        eB(ee),
        eZ(),
        eM(),
        eA();
}
function e$() {
    eZ();
}
function e0(e) {
    (eg = e.level), (eE = e.intervalSeconds);
}
function e1() {
    (eg = null), (eE = null), em.clear();
}
function e3(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null != (t = (0, _.F)(e.exePath)) ? t : e.exePath,
            };
        })
        .filter((e) => {
            if (em.has(e.pid) || eh.has(e.cleanedExePath)) return !1;
            let t = z.some((t) => e.cleanedExePath.includes(t));
            return t && em.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        A.default.track(M.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: z,
            paths: t,
            debugging_level: eg,
            interval_seconds: eE,
        });
}
function e2(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== es.enableOverlay[eP(t)],
        a = r !== es.enableOverlayV3[eP(t)];
    if (
        (i && (es.enableOverlay[eP(t)] = n),
        a && null != r && (es.enableOverlayV3[eP(t)] = r),
        eM(),
        !__OVERLAY__ && null != (null != t.id ? I.Z.getDetectableGame(t.id) : null))
    ) {
        var o, s;
        i && (0, E.ou)(n, E.OverlayToggledClientSettingType.LEGACY_GAME, null != (o = t.id) ? o : null),
            a && null != r && (0, E.ou)(r, E.OverlayToggledClientSettingType.OOP_GAME, null != (s = t.id) ? s : null);
    }
}
function e4(e) {
    let { game: t } = e,
        n = eL(t);
    (es.enableDetection[eP(t)] = !n), eM(), A.default.track(M.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function e5(e) {
    let t = eP(e.game),
        n = es.gameOverrides[t];
    null == n && ((n = eU(e.game)).add = !0), (n.name = e.newName);
    let r = eP(n);
    delete es.gameOverrides[t],
        (es.gameOverrides[r] = n),
        eO(es.enableOverlay, t, r),
        eO(es.enableDetection, t, r),
        eO(eo, t, r),
        es.gamesSeen.forEach((n) => {
            eP(n) === t && (n.name = e.newName);
        });
    let i = !1;
    ee.forEach((n) => {
        eP(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eZ(),
        eM(),
        i && eA();
}
function e8(e) {
    let t = eP(e.game);
    delete es.gameOverrides[t],
        delete es.enableOverlay[t],
        delete es.enableDetection[t],
        (es.gamesSeen = es.gamesSeen.filter((e) => eP(e) !== t)),
        eo[t] &&
            (ee.forEach((e) => {
                t === eP(e) && (e.hidden = !0);
            }),
            delete eo[t]),
        ee.some((e) => eP(e) === t) && eA(),
        eZ(),
        eM();
}
function e6(e) {
    var t;
    if (__OVERLAY__ || !w.isPlatformEmbedded) return;
    let n = D.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = I.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}
function e7() {
    h.Z.hasLoadedExperiments && W.length > 0 && (eB(W), (W = []));
}
function e9(e) {
    let { status: t, modules: n } = e;
    for (let e of n) Q[e] = t;
}
!__OVERLAY__ &&
    ((0, w.isDesktop)() || k.iP) &&
    (el = function () {
        if (!I.Z.hasAttemptedFetch || !j.Z.hasAttemptedFetch) return !1;
        let e = [],
            t = new Set();
        r = {};
        let n = I.Z.games,
            i = j.Z.nonGames,
            a = (0, x.supportsOutOfProcess)();
        for (let e of n) {
            var o, s, l, c;
            let t = ew(e),
                n = (a && !t) || f.r.enabledOOP,
                r = null != (o = e.overlay) ? o : f.r.enabled;
            ec[e.id] = {
                compatibilityHook: null != (s = e.overlayCompatibilityHook) ? s : f.r.compatibilityHook,
                warn: null != (l = e.overlayWarn) ? l : f.r.warn,
                enabled: r,
                enabledOOP: n,
                allowHook: null != (c = e.hook) ? c : f.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
            };
        }
        let u = new Set();
        K.forEach((e) => {
            var t;
            (null != (t = e.executables) ? t : []).forEach((e) => {
                u.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...i].filter((e) => {
                    var t;
                    return !(null != (t = e.executables) ? t : []).some((e) => eb.has(e.name.toLowerCase()));
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
            D.ZP.setObservedGamesCallback(e, !0, (e) => {
                let n = [],
                    i = {},
                    a = [];
                e = e.filter((e) =>
                    null != e.id && null != j.Z.getById(e.id)
                        ? (a.push(e), !1)
                        : ((e.isLauncher = e.isLauncher || t.has(e.exeName)),
                            e.isLauncher && null != e.id && (i[e.id] = e),
                            (e.windowHandle = eH(e.pid, e.windowHandle)),
                            null != eT(e))
                          ? (n.push(e), !1)
                          : !I.Z.shouldBlock(e),
                );
                let o = n.filter(eC).length;
                o !== eu &&
                    ((eu = o),
                    d.Z.dispatch({
                        type: "RUNNING_STREAMER_TOOLS_CHANGE",
                        count: eu,
                    })),
                    (ee = e),
                    (et = a),
                    (ei = n),
                    (r = i),
                    eA(),
                    eN();
            }),
            eZ(),
            D.ZP.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [a, o] of e.entries()) {
                        var n, r, i;
                        let e = t[a],
                            s = I.Z.getGameByName(o.name),
                            l = I.Z.getGameByName(e.name),
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
                        A.default.track(M.rMx.GAME_DETECTION_COMPARISON, {
                            game_platform: M.M7m.DESKTOP,
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
                            game_detection_enabled_v1: eL(o),
                            executable_path_v1: (0, L.N6)(o.exePath),
                            distributor_game_id_v1: o.sku,
                            hidden_by_distributor_v1: o.hidden,
                            game_metadata_v1: (0, S.sD)(o),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: c,
                            distributor_v2: e.distributor,
                            verified_v2: (0, L.vp)(
                                e.exePath,
                                null != (i = null == l ? void 0 : l.executables) ? i : [],
                            ),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eL(e),
                            executable_path_v2: (0, L.N6)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, S.sD)(e),
                        });
                    }
            }),
            D.ZP.setGameDetectionErrorCallback((e, t, n, r, i) => {});
    });
class te extends (i = c.ZP.Store) {
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
        es.gameOverrides = {};
        let s = !1;
        if (
            (o()
                .values(null != (t = a.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = eP(e);
                    (0, S.le)(e) || (es.gameOverrides[t] = e);
                }),
            (es.enableOverlay = null != (n = a.enableOverlay) ? n : {}),
            (es.enableOverlayV3 = null != (r = a.enableOverlayV3) ? r : {}),
            (es.enableDetection = null != (i = a.enableDetection) ? i : {}),
            eZ(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen)
                "number" == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        this.waitFor(C.Z, h.Z, I.Z, T.Z, j.Z),
            (W = a.gamesSeen.filter((e) => !(0, S.le)(e))),
            this.syncWith([h.Z], e7),
            this.syncWith([T.Z, I.Z, C.Z], o().throttle(eG, 1000)),
            s && eM();
    }
    getVisibleGame() {
        return null == en || ej(en) ? en : null;
    }
    getCurrentGameForAnalytics() {
        return en;
    }
    getCurrentNonGameForAnalytics() {
        return er;
    }
    getVisibleRunningGames() {
        return ee.filter(ej);
    }
    getRunningGames() {
        return ee;
    }
    getRunningNonGames() {
        return et;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of ee) null != ea[t.exePath] && e.push(ea[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => I.Z.getGameByName(e.name))
            .filter(R.lm)
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
        return null != t ? eS(t) : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : G({}, ec[t.id]);
    }
    shouldElevateProcessForPID(e) {
        return null != ed && ed === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != ef && ef === e;
    }
    getCandidateGames() {
        return $.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === es.gameOverrides[eP(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === W.length;
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eV();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eP(e);
                n = n.filter((e) => eP(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return es.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return ei.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(es.gameOverrides);
    }
    getOverrideForGame(e) {
        return es.gameOverrides[eP(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return B.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eD(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return B.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eD(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null != (n = null == (t = ei.find((t) => (0, g.Z)(e, t.windowHandle))) ? void 0 : t.name) ? n : null;
    }
    get canShowAdminWarning() {
        return q && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eL(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        eh.add(null != (t = (0, _.F)(e)) ? t : e);
    }
    getSystemServiceStatus(e) {
        var t;
        return null != (t = Q[e]) ? t : { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        var t;
        return (null == (t = Q[e]) ? void 0 : t.state) === "running";
    }
}
U(te, "displayName", "RunningGameStore");
let tt = new te(d.Z, {
        RUNNING_GAMES_CHANGE: eY,
        RUNNING_NON_GAMES_CHANGE: eW,
        CANDIDATE_GAMES_CHANGE: eK,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: ez,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eq,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eX,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eQ,
        RUNNING_GAME_ADD_OVERRIDE: eJ,
        RUNNING_GAME_TOGGLE_OVERLAY: e2,
        RUNNING_GAME_TOGGLE_DETECTION: e4,
        RUNNING_GAME_EDIT_NAME: e5,
        RUNNING_GAME_DELETE_ENTRY: e8,
        GAMES_DATABASE_UPDATE: el,
        GAMES_DATABASE_FETCH_FAIL: el,
        NON_GAMES_DATABASE_UPDATE: el,
        NON_GAMES_DATABASE_FETCH_FAIL: el,
        GAME_LAUNCH_SUCCESS: e6,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: e$,
        GAME_DETECTION_DEBUGGING_START: e0,
        GAME_DETECTION_DEBUGGING_STOP: e1,
        GAME_DETECTION_DEBUGGING_TICK: e3,
        SYSTEM_SERVICE_INITIALIZE: e9,
    }),
    tn = tt;
