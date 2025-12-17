let r;
n.d(t, {
    FZ: () => eU,
    ZP: () => tr,
    b6: () => ex,
    ik: () => ej,
    ow: () => eI,
    rH: () => eR,
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
    j = n(624126),
    M = n(569675),
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
                G(e, t, n[t]);
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
function B(e, t) {
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
let V = new m.Z("RunningGameStore"),
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
            name: p.Z.get(k.ABu.SPOTIFY).name,
        },
    ],
    q = [],
    Q = !0,
    X = {
        "input-service": { state: "unknown" },
        "tool-service": { state: "unknown" },
    },
    J = new Set(),
    $ = [],
    ee = [],
    et = [],
    en = [],
    er = null,
    ei = null,
    ea = [],
    eo = {},
    es = {},
    el = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableOverlayV3: {},
        enableDetection: {},
    },
    ec = function () {},
    eu = {},
    ed = 0,
    ef = null,
    ep = null,
    e_ = {},
    em = {},
    eh = new Set(),
    eg = new Set(),
    eE = null,
    eb = null,
    ey = new Map(),
    eO = new Map();
function ev(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function eS(e) {
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
        eT(t, e),
        t
    );
}
function eI(e) {
    return e;
}
function eT(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eC(e) {
    var t, n, r, i;
    let a = eO.get(null != (r = null == (t = e.name) ? void 0 : t.toLowerCase()) ? r : "");
    if (null != a) return a;
    let o =
            null != e.exeName && "" !== e.exeName
                ? e.exeName
                : null != (i = null == (n = e.exePath.split("/").pop()) ? void 0 : n.split("\\").pop())
                  ? i
                  : "",
        s = ey.get(o.toLowerCase());
    if (null != s) return s;
    for (let [t, n] of ey) {
        let r = e.exePath.toLowerCase(),
            i = t.toLowerCase();
        if (r.endsWith(i)) {
            let e = r.length - i.length;
            if (0 === e || "/" === r[e - 1] || "\\" === r[e - 1]) return n;
        }
    }
    return null;
}
function eA(e) {
    let t = eC(e);
    return (null == t ? void 0 : t.streamerTool) === !0;
}
function eN() {
    if (et.length > 0) {
        let e = er;
        (er = et[0]), null != e && er.pid === e.pid ? (er.start = e.start) : (er.start = Date.now());
    } else er = null;
    let e = [];
    for (let t of et) t.pid in e_ || ((e_[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(e_)) et.some((t) => t.pid === e.pid) || (t.push(e), delete e_[e.pid]);
    (e.length > 0 || t.length > 0) &&
        (V.info("Running Games Changed", {
            runningGames: et,
            added: e,
            removed: t,
            previousGames: e_,
        }),
        d.Z.dispatch({
            type: "RUNNING_GAMES_CHANGE",
            games: et,
            added: e,
            removed: t,
        }));
}
function eP() {
    ei = en.length > 0 ? en[0] : null;
    let e = [];
    for (let t of en) t.pid in em || ((em[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(em)) en.some((t) => t.pid === e.pid) || (t.push(e), delete em[e.pid]);
    (e.length > 0 || t.length > 0) &&
        (V.info("Running Non-Games Changed", {
            runningNonGames: en,
            added: e,
            removed: t,
            previousNonGames: em,
        }),
        d.Z.dispatch({
            type: "RUNNING_NON_GAMES_CHANGE",
            nonGames: en,
            added: e,
            removed: t,
        }));
}
function eR(e) {
    if ((0, S.le)(e)) return "".concat(e.exePath, ":").concat(e.id);
    let t = null != e.name ? e.name : "";
    return "".concat(e.exePath, ":").concat(t);
}
z.forEach((e) => {
    var t;
    eO.set(e.name.toLowerCase(), e),
        (null != (t = e.executables) ? t : []).forEach((t) => {
            ey.set(t.name.toLowerCase(), e);
        });
});
let ew = new Set(["1314395942253756416"]);
function eD(e) {
    let t = null;
    if ("id" in e) {
        var n;
        t = null != (n = e.id) ? n : null;
    } else {
        let n = I.Z.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, O.YB)("getRawOverlayGameStatus") && ew.has(t);
}
function ex(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [I.Z, T.Z],
        i = eI(e);
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
        s = eD(null != a ? a : i),
        l = b.v.legacyEnabled,
        c = o && !s,
        u = el.enableOverlay[eR(i)],
        d = el.enableOverlayV3[eR(i)];
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
    let f = null == i.id ? null : eu[i.id];
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
        enabledOOP: Y || c,
        enabledLegacy: Y,
        overlayMethod: c ? y.gl.OutOfProcess : y.gl.Disabled,
        reason: "Default enablement",
    };
}
function eL(e) {
    let t = eI(e),
        n = el.enableOverlay[eR(t)],
        r = el.enableOverlayV3[eR(t)];
    if (null != n || null != r) return null != n ? n : r;
    let i = ex(t);
    return i.enabledLegacy || i.enabledOOP;
}
function ej(e) {
    let t = el.enableDetection[eR(e)];
    return null == t || t;
}
function eM(e) {
    return !e.hidden && ej(e);
}
function ek() {
    u.K.set(H, el);
}
function eU(e, t, n, r) {
    let i = B(Z({}, e), {
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? l()(new Date(e.lastFocused * N.Z.Millis.SECOND)).fromNow()
                : " ",
        overlay: eL(e),
        verified: n.isGameInDatabase(e),
        detectable: ej(e),
    });
    return null != e.id && null != eu[e.id] && (i.overlayWarn = eu[e.id].warn), i;
}
function eG(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused,
    };
}
function eZ() {
    let e = !1;
    return (
        ($ = o()
            .values(T.Z.libraryApplications)
            .reduce((t, n) => {
                let r = I.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of C.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = "".concat(n.id, ":").concat(n.branchId);
                    J.has(a) || ((e = !0), J.add(a));
                    let { fullExecutablePath: o } = i,
                        s = o.replace(/\\/g, "/").toLowerCase();
                    (eo[s] = r.id),
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
        e && eF(),
        e
    );
}
function eF() {
    if (!__OVERLAY__ && w.isPlatformEmbedded) {
        let e = [...$, ...o().values(el.gameOverrides)];
        D.ZP.setGameCandidateOverrides(e);
    }
}
function eB(e, t) {
    let n = el.gameOverrides[e];
    null != n && ((el.gameOverrides[t] = n), delete el.gameOverrides[e]);
    let r = el.enableOverlay[e];
    null != r && ((el.enableOverlay[t] = r), delete el.enableOverlay[e]);
    let i = el.enableOverlayV3[e];
    null != i && ((el.enableOverlayV3[t] = i), delete el.enableOverlayV3[e]);
    let a = el.enableDetection[e];
    null != a && ((el.enableDetection[t] = a), delete el.enableDetection[e]);
}
function eV(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                el.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = el.gameOverrides[eR(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eR(t) !== eR(e) && (eB(eR(t), eR(e)), (t.exePath = e.exePath)),
                            eT(t, e),
                            !0
                        );
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                el.gamesSeen.unshift(eS(e));
            }
        }),
        el.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ek(),
        P.Z.setRecentGames(eH().map((e) => eU(e, tn, I.Z, T.Z))));
}
function eH() {
    let e = o().values(el.gameOverrides);
    return el.gamesSeen.filter((e) => void 0 === el.gameOverrides[eR(e)]).concat(e);
}
function eY(e, t) {
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
function eW(e) {
    eV(et);
}
function eK() {}
function ez(e) {
    ee = e.games;
}
function eq() {
    Q = !1;
}
function eQ(e) {
    let { pid: t } = e;
    (ef = t), (ep = null);
}
function eX(e) {
    let { pid: t } = e;
    (ep = t), (ef = null);
}
function eJ() {
    ef = null;
}
function e$(e) {
    let t,
        n = e.pid,
        r = et.find((e) => e.pid === n);
    if (null == r) {
        let e = ee.find((e) => e.pid === n);
        if (null == e) return;
        ((r = Z({}, e)).hidden = !1), et.push(r), (t = eR(r));
    } else (t = eR(r)), r.hidden && (es[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)),
        (el.gameOverrides[t] = B(Z({}, r), { add: !0 })),
        eV(et),
        eF(),
        ek(),
        eN();
}
function e0() {
    eF();
}
function e1(e) {
    (eE = e.level), (eb = e.intervalSeconds);
}
function e3() {
    (eE = null), (eb = null), eh.clear();
}
function e2(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null != (t = (0, _.F)(e.exePath)) ? t : e.exePath,
            };
        })
        .filter((e) => {
            if (eh.has(e.pid) || eg.has(e.cleanedExePath)) return !1;
            let t = q.some((t) => e.cleanedExePath.includes(t));
            return t && eh.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        A.default.track(k.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: q,
            paths: t,
            debugging_level: eE,
            interval_seconds: eb,
        });
}
function e4(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== el.enableOverlay[eR(t)],
        a = r !== el.enableOverlayV3[eR(t)];
    if (
        (i && (el.enableOverlay[eR(t)] = n),
        a && null != r && (el.enableOverlayV3[eR(t)] = r),
        ek(),
        !__OVERLAY__ && null != (null != t.id ? I.Z.getDetectableGame(t.id) : null))
    ) {
        var o, s;
        i && (0, E.ou)(n, E.OverlayToggledClientSettingType.LEGACY_GAME, null != (o = t.id) ? o : null),
            a && null != r && (0, E.ou)(r, E.OverlayToggledClientSettingType.OOP_GAME, null != (s = t.id) ? s : null);
    }
}
function e5(e) {
    let { game: t } = e,
        n = ej(t);
    (el.enableDetection[eR(t)] = !n), ek(), A.default.track(k.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function e8(e) {
    let t = eR(e.game),
        n = el.gameOverrides[t];
    null == n && ((n = eG(e.game)).add = !0), (n.name = e.newName);
    let r = eR(n);
    delete el.gameOverrides[t],
        (el.gameOverrides[r] = n),
        ev(el.enableOverlay, t, r),
        ev(el.enableDetection, t, r),
        ev(es, t, r),
        el.gamesSeen.forEach((n) => {
            eR(n) === t && (n.name = e.newName);
        });
    let i = !1;
    et.forEach((n) => {
        eR(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eF(),
        ek(),
        i && eN();
}
function e6(e) {
    let t = eR(e.game);
    delete el.gameOverrides[t],
        delete el.enableOverlay[t],
        delete el.enableDetection[t],
        (el.gamesSeen = el.gamesSeen.filter((e) => eR(e) !== t)),
        es[t] &&
            (et.forEach((e) => {
                t === eR(e) && (e.hidden = !0);
            }),
            delete es[t]),
        et.some((e) => eR(e) === t) && eN(),
        eF(),
        ek();
}
function e7(e) {
    var t;
    if (__OVERLAY__ || !w.isPlatformEmbedded) return;
    let n = D.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = I.Z.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}
function e9() {
    h.Z.hasLoadedExperiments && K.length > 0 && (eV(K), (K = []));
}
function te(e) {
    let { status: t, modules: n } = e;
    for (let e of n) X[e] = t;
}
!__OVERLAY__ &&
    ((0, w.isDesktop)() || U.iP) &&
    (ec = function () {
        if (!I.Z.hasAttemptedFetch || !M.Z.hasAttemptedFetch) return !1;
        let e = [],
            t = new Set();
        r = {};
        let n = I.Z.games,
            i = M.Z.nonGames,
            a = (0, x.supportsOutOfProcess)();
        for (let e of n) {
            var o, s, l, c;
            let t = eD(e),
                n = (a && !t) || f.r.enabledOOP,
                r = null != (o = e.overlay) ? o : f.r.enabled;
            eu[e.id] = {
                compatibilityHook: null != (s = e.overlayCompatibilityHook) ? s : f.r.compatibilityHook,
                warn: null != (l = e.overlayWarn) ? l : f.r.warn,
                enabled: r,
                enabledOOP: n,
                allowHook: null != (c = e.hook) ? c : f.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
            };
        }
        let u = new Set();
        z.forEach((e) => {
            var t;
            (null != (t = e.executables) ? t : []).forEach((e) => {
                u.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...i].filter((e) => {
                    var t;
                    return !(null != (t = e.executables) ? t : []).some((e) => ey.has(e.name.toLowerCase()));
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
            )),
            D.ZP.setObservedGamesCallback(e, !0, (e) => {
                let n = [],
                    i = {},
                    a = [];
                e = e.filter((e) =>
                    null != e.id && null != M.Z.getById(e.id)
                        ? (a.push(e), !1)
                        : ((e.isLauncher = e.isLauncher || t.has(e.exeName)),
                          e.isLauncher && null != e.id && (i[e.id] = e),
                          (e.windowHandle = eY(e.pid, e.windowHandle)),
                          null == eC(e) || (n.push(e), !1)),
                );
                let o = n.filter(eA).length;
                o !== ed &&
                    ((ed = o),
                    d.Z.dispatch({
                        type: "RUNNING_STREAMER_TOOLS_CHANGE",
                        count: ed,
                    })),
                    (et = e),
                    (en = a),
                    (ea = n),
                    (r = i),
                    eN(),
                    eP();
            }),
            eF(),
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
                                    (null == e ? void 0 : e.id) !== W
                                        ? null == e
                                            ? void 0
                                            : e.id
                                        : null == l
                                          ? void 0
                                          : l.id)
                                    ? n
                                    : "";
                        A.default.track(k.rMx.GAME_DETECTION_COMPARISON, {
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
                            game_detection_enabled_v1: ej(o),
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
                            game_detection_enabled_v2: ej(e),
                            executable_path_v2: (0, L.N6)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, S.sD)(e),
                        });
                    }
            });
        let p = j.g.getConfig({ location: "RunningGameStore.handleGamesDatabaseUpdate" }).enabled;
        D.ZP.setGameDetectionErrorCallback((e, t, n, r, i) => {
            p &&
                A.default.track(k.rMx.GAME_DETECTION_ERROR, {
                    error_code: e.toString(),
                    distributor: t,
                    commit_hash: n,
                    file_name: r,
                    line_number: i,
                });
        });
    });
class tt extends (i = c.ZP.Store) {
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
        el.gameOverrides = {};
        let s = !1;
        if (
            (o()
                .values(null != (t = a.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = eR(e);
                    (0, S.le)(e) || (el.gameOverrides[t] = e);
                }),
            (el.enableOverlay = null != (n = a.enableOverlay) ? n : {}),
            (el.enableOverlayV3 = null != (r = a.enableOverlayV3) ? r : {}),
            (el.enableDetection = null != (i = a.enableDetection) ? i : {}),
            eF(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen)
                "number" == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        this.waitFor(C.Z, h.Z, I.Z, T.Z, M.Z),
            (K = a.gamesSeen.filter((e) => !(0, S.le)(e))),
            this.syncWith([h.Z], e9),
            this.syncWith([T.Z, I.Z, C.Z], o().throttle(eZ, 1000)),
            s && ek();
    }
    getVisibleGame() {
        return null == er || eM(er) ? er : null;
    }
    getCurrentGameForAnalytics() {
        return er;
    }
    getCurrentNonGameForAnalytics() {
        return ei;
    }
    getVisibleRunningGames() {
        return et.filter(eM);
    }
    getRunningGames() {
        return et;
    }
    getRunningNonGames() {
        return en;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of et) null != eo[t.exePath] && e.push(eo[t.exePath]);
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
        return null != t ? eI(t) : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : Z({}, eu[t.id]);
    }
    shouldElevateProcessForPID(e) {
        return null != ef && ef === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != ep && ep === e;
    }
    getCandidateGames() {
        return ee.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === el.gameOverrides[eR(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === K.length;
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eH();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eR(e);
                n = n.filter((e) => eR(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return el.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return ea.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(el.gameOverrides);
    }
    getOverrideForGame(e) {
        return el.gameOverrides[eR(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return V.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = ex(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return V.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = ex(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null != (n = null == (t = ea.find((t) => (0, g.Z)(e, t.windowHandle))) ? void 0 : t.name) ? n : null;
    }
    get canShowAdminWarning() {
        return Q && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return ej(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        eg.add(null != (t = (0, _.F)(e)) ? t : e);
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
G(tt, "displayName", "RunningGameStore");
let tn = new tt(d.Z, {
        RUNNING_GAMES_CHANGE: eW,
        RUNNING_NON_GAMES_CHANGE: eK,
        CANDIDATE_GAMES_CHANGE: ez,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eq,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eQ,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eJ,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eX,
        RUNNING_GAME_ADD_OVERRIDE: e$,
        RUNNING_GAME_TOGGLE_OVERLAY: e4,
        RUNNING_GAME_TOGGLE_DETECTION: e5,
        RUNNING_GAME_EDIT_NAME: e8,
        RUNNING_GAME_DELETE_ENTRY: e6,
        GAMES_DATABASE_UPDATE: ec,
        GAMES_DATABASE_FETCH_FAIL: ec,
        NON_GAMES_DATABASE_UPDATE: ec,
        NON_GAMES_DATABASE_FETCH_FAIL: ec,
        GAME_LAUNCH_SUCCESS: e7,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: e0,
        GAME_DETECTION_DEBUGGING_START: e1,
        GAME_DETECTION_DEBUGGING_STOP: e3,
        GAME_DETECTION_DEBUGGING_TICK: e2,
        SYSTEM_SERVICE_INITIALIZE: te,
    }),
    tr = tn;
