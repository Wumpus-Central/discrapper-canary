let r;
n.d(t, {
    Ay: () => tr,
    Es: () => eR,
    Xr: () => eM,
    Zh: () => eI,
    hw: () => eL,
    xU: () => eU,
}),
    n(896048),
    n(747238),
    n(321073),
    n(812715),
    n(667532),
    n(638769);
var i,
    a = n(735438),
    o = n.n(a),
    s = n(989349),
    l = n.n(s),
    c = n(311907),
    u = n(506774),
    d = n(73153),
    f = n(56562),
    p = n(573648),
    _ = n(306044),
    h = n(626584),
    m = n(49463),
    g = n(830012),
    E = n(810412),
    y = n(211753),
    b = n(41984),
    O = n(589051),
    v = n(763266),
    A = n(847521),
    I = n(760751),
    S = n(189081),
    T = n(287809),
    C = n(194871),
    N = n(954571),
    w = n(927813),
    R = n(25171),
    P = n(403362),
    D = n(723702),
    L = n(837921),
    x = n(9302),
    M = n(953384),
    j = n(973522),
    k = n(652215),
    U = n(672396);

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

function F(e) {
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

function B(e, t) {
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
let H = new h.A("RunningGameStore"),
    Y = "RunningGameStore",
    W = !1,
    K = "4294967293",
    z = [],
    q = [
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
            name: p.A.get(k.fg2.SPOTIFY).name,
        },
    ],
    Z = [],
    Q = !0,
    X = {
        "input-service": {
            state: "unknown",
        },
        "tool-service": {
            state: "unknown",
        },
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
    eh = {},
    em = new Set(),
    eg = new Set(),
    eE = null,
    ey = null,
    eb = new Map(),
    eO = new Map();

function ev(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}

function eA(e) {
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
        eS(t, e),
        t
    );
}

function eI(e) {
    return e;
}

function eS(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}

function eT(e) {
    var t, n, r, i;
    let a = eO.get(null != (t = null == (r = e.name) ? void 0 : r.toLowerCase()) ? t : "");
    if (null != a) return a;
    let o =
            null != e.exeName && "" !== e.exeName
                ? e.exeName
                : null != (n = null == (i = e.exePath.split("/").pop()) ? void 0 : i.split("\\").pop())
                  ? n
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
        (H.info("Running Games Changed", {
            runningGames: et,
            added: e,
            removed: t,
            previousGames: e_,
        }),
        d.h.dispatch({
            type: "RUNNING_GAMES_CHANGE",
            games: et,
            added: e,
            removed: t,
        }));
}

function ew() {
    ei = en.length > 0 ? en[0] : null;
    let e = [];
    for (let t of en) t.pid in eh || ((eh[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(eh)) en.some((t) => t.pid === e.pid) || (t.push(e), delete eh[e.pid]);
    (e.length > 0 || t.length > 0) &&
        (H.info("Running Non-Games Changed", {
            runningNonGames: en,
            added: e,
            removed: t,
            previousNonGames: eh,
        }),
        d.h.dispatch({
            type: "RUNNING_NON_GAMES_CHANGE",
            nonGames: en,
            added: e,
            removed: t,
        }));
}

function eR(e) {
    if ((0, A.n1)(e)) return "".concat(e.exePath, ":").concat(e.id);
    let t = null != e.name ? e.name : "";
    return "".concat(e.exePath, ":").concat(t);
}
q.forEach((e) => {
    var t;
    eO.set(e.name.toLowerCase(), e),
        (null != (t = e.executables) ? t : []).forEach((t) => {
            eb.set(t.name.toLowerCase(), e);
        });
});
let eP = new Set(["1314395942253756416"]);

function eD(e) {
    let t = null;
    if ("id" in e) {
        var n;
        t = null != (n = e.id) ? n : null;
    } else {
        let n = I.A.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, O.oA)("getRawOverlayGameStatus") && eP.has(t);
}

function eL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [I.A, S.A],
        i = eI(e);
    if (i.isLauncher)
        return {
            source: b.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: b.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in i && !v.A.acquireLock(i.pid))
        return {
            source: b.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: b.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let a = n.getGameByName(i.name);
    if (null != a) {
        let e = r.getActiveLibraryApplication(a.id);
        if (null != e)
            return {
                source: b.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: b.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let o = (0, x.supportsOutOfProcess)() && !t,
        s = eD(null != a ? a : i),
        l = y.x.legacyEnabled,
        c = o && !s,
        u = el.enableOverlay[eR(i)],
        d = el.enableOverlayV3[eR(i)];
    if (null != u || null != d) {
        let e = null != d ? d : c,
            t = null != u ? u : l,
            n = e ? b.Ue.OutOfProcess : b.Ue.Hook;
        return {
            source: e && !s ? b.yp.OOP_DEFAULT : b.yp.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: c ? n : b.Ue.Hook,
            reason: "Enabled from persistent",
        };
    }
    let f = null == i.id ? null : eu[i.id];
    if (null != f) {
        var p, _;
        let e = null != (p = f.enabledOOP) ? p : c,
            t = null != (_ = f.enabled) ? _ : l,
            n = e ? b.Ue.OutOfProcess : b.Ue.Hook;
        return {
            source: e && !s ? b.yp.OOP_DEFAULT_DATABASE : b.yp.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: c ? n : b.Ue.Hook,
            reason: "Enabled from overlayOptions",
        };
    }
    return {
        source: b.yp.DEFAULT,
        enabledOOP: W || c,
        enabledLegacy: W,
        overlayMethod: c ? b.Ue.OutOfProcess : b.Ue.Disabled,
        reason: "Default enablement",
    };
}

function ex(e) {
    let t = eI(e),
        n = el.enableOverlay[eR(t)],
        r = el.enableOverlayV3[eR(t)];
    if (null != n || null != r) return null != n ? n : r;
    let i = eL(t);
    return i.enabledLegacy || i.enabledOOP;
}

function eM(e) {
    let t = el.enableDetection[eR(e)];
    return null == t || t;
}

function ej(e) {
    return !e.hidden && eM(e);
}

function ek() {
    u.w.set(Y, el);
}

function eU(e, t, n, r) {
    let i = B(F({}, e), {
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? l()(new Date(e.lastFocused * w.A.Millis.SECOND)).fromNow()
                : " ",
        overlay: ex(e),
        verified: n.isGameInDatabase(e),
        detectable: eM(e),
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

function eF() {
    let e = !1;
    return (
        ($ = o()
            .values(S.A.libraryApplications)
            .reduce((t, n) => {
                let r = I.A.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of C.A.getLaunchOptions(n.id, n.branchId)) {
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
        e && eV(),
        e
    );
}

function eV() {
    if (!__OVERLAY__ && D.isPlatformEmbedded) {
        let e = [...$, ...o().values(el.gameOverrides)];
        L.Ay.setGameCandidateOverrides(e);
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

function eH(e) {
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
                            eS(t, e),
                            !0
                        );
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                el.gamesSeen.unshift(eA(e));
            }
        }),
        el.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ek(),
        R.A.setRecentGames(eY().map((e) => eU(e, tn, I.A, S.A))));
}

function eY() {
    let e = o().values(el.gameOverrides);
    return el.gamesSeen.filter((e) => void 0 === el.gameOverrides[eR(e)]).concat(e);
}

function eW(e, t) {
    if (void 0 === t) {
        let t = L.Ay.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && "0" !== n ? n : null;
        }
        return null;
    }
    return "0" === t ? null : t;
}

function eK(e) {
    eH(et);
}

function ez() {}

function eq(e) {
    ee = e.games;
}

function eZ() {
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
        ((r = F({}, e)).hidden = !1), et.push(r), (t = eR(r));
    } else (t = eR(r)), r.hidden && (es[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)),
        (el.gameOverrides[t] = B(F({}, r), {
            add: !0,
        })),
        eH(et),
        eV(),
        ek(),
        eN();
}

function e0() {
    eV();
}

function e1(e) {
    (eE = e.level), (ey = e.intervalSeconds);
}

function e2() {
    (eE = null), (ey = null), em.clear();
}

function e3(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null != (t = (0, _.v)(e.exePath)) ? t : e.exePath,
            };
        })
        .filter((e) => {
            if (em.has(e.pid) || eg.has(e.cleanedExePath)) return !1;
            let t = Z.some((t) => e.cleanedExePath.includes(t));
            return t && em.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        N.default.track(k.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: Z,
            paths: t,
            debugging_level: eE,
            interval_seconds: ey,
        });
}

function e6(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== el.enableOverlay[eR(t)],
        a = r !== el.enableOverlayV3[eR(t)];
    if (
        (i && (el.enableOverlay[eR(t)] = n),
        a && null != r && (el.enableOverlayV3[eR(t)] = r),
        ek(),
        !__OVERLAY__ && null != (null != t.id ? I.A.getDetectableGame(t.id) : null))
    ) {
        var o, s;
        i && (0, E.Q3)(n, E.OverlayToggledClientSettingType.LEGACY_GAME, null != (o = t.id) ? o : null),
            a && null != r && (0, E.Q3)(r, E.OverlayToggledClientSettingType.OOP_GAME, null != (s = t.id) ? s : null);
    }
}

function e4(e) {
    let { game: t } = e,
        n = eM(t);
    (el.enableDetection[eR(t)] = !n),
        ek(),
        N.default.track(k.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
            enabled: !n,
        });
}

function e5(e) {
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
        eV(),
        ek(),
        i && eN();
}

function e7(e) {
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
        eV(),
        ek();
}

function e8(e) {
    var t;
    if (__OVERLAY__ || !D.isPlatformEmbedded) return;
    let n = L.Ay.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = I.A.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}

function e9() {
    m.A.hasLoadedExperiments && z.length > 0 && (eH(z), (z = []));
}

function te(e) {
    let { status: t, modules: n } = e;
    for (let e of n) X[e] = t;
}
!__OVERLAY__ &&
    ((0, D.isDesktop)() || U.OX) &&
    (ec = function () {
        var e, t, n, i, a;
        if (!I.A.hasAttemptedFetch || !M.A.hasAttemptedFetch) return !1;
        let o = [],
            s = new Set();
        r = {};
        let l = I.A.games,
            c = M.A.nonGames,
            u = (0, x.supportsOutOfProcess)();
        for (let e of l) {
            let r = eD(e),
                o = (u && !r) || f.gH.enabledOOP,
                s = null != (t = e.overlay) ? t : f.gH.enabled;
            eu[e.id] = {
                compatibilityHook: null != (n = e.overlayCompatibilityHook) ? n : f.gH.compatibilityHook,
                warn: null != (i = e.overlayWarn) ? i : f.gH.warn,
                enabled: s,
                enabledOOP: o,
                allowHook: null != (a = e.hook) ? a : f.gH.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
            };
        }
        let p = new Set();
        q.forEach((e) => {
            var t;
            (null != (t = e.executables) ? t : []).forEach((e) => {
                p.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...l, ...c].filter((e) => {
                    var t;
                    return !(null != (t = e.executables) ? t : []).some((e) => eb.has(e.name.toLowerCase()));
                }),
                ...q,
            ].forEach((e) => {
                let t = null != e.executables ? e.executables : [],
                    n = {};
                if (
                    (t.forEach((e) => {
                        let t = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
                        null == n[t] && (n[t] = []), n[t].push(e.name), e.isLauncher && s.add(e.name);
                    }),
                    Object.keys(n).length > 0)
                )
                    Object.keys(n).forEach((t) => {
                        var r;
                        return o.push({
                            name: e.name,
                            id: e.id,
                            executables: n[t],
                            cmdLine: "null" !== t ? t : null,
                            thirdPartySkus: null != (r = e.thirdPartySkus) ? r : [],
                        });
                    });
                else {
                    var r;
                    let t = null != (r = e.thirdPartySkus) ? r : [];
                    t.length > 0 &&
                        o.push({
                            name: e.name,
                            id: e.id,
                            executables: [],
                            cmdLine: null,
                            thirdPartySkus: t,
                        });
                }
            }),
            (o = o.filter(
                (e) =>
                    (null != e.executables && e.executables.length > 0) ||
                    (null != e.thirdPartySkus && e.thirdPartySkus.length > 0),
            )),
            L.Ay.setObservedGamesCallback(
                o,
                !0,
                (e) => {
                    let t = [],
                        n = {},
                        i = [];
                    e = e.filter((e) =>
                        null != e.id && null != M.A.getById(e.id)
                            ? (i.push(e), !1)
                            : ((e.isLauncher = e.isLauncher || s.has(e.exeName)),
                                e.isLauncher && null != e.id && (n[e.id] = e),
                                (e.windowHandle = eW(e.pid, e.windowHandle)),
                                null != eT(e))
                              ? (t.push(e), !1)
                              : !I.A.shouldBlock(e),
                    );
                    let a = t.filter(eC).length;
                    a !== ed &&
                        ((ed = a),
                        d.h.dispatch({
                            type: "RUNNING_STREAMER_TOOLS_CHANGE",
                            count: ed,
                        })),
                        (et = e),
                        (en = i),
                        (ea = t),
                        (r = n),
                        eN(),
                        ew();
                },
                null == (e = T.default.getCurrentUser()) ? void 0 : e.id,
            ),
            eV(),
            L.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [a, o] of e.entries()) {
                        var n, r, i;
                        let e = t[a],
                            s = I.A.getGameByName(o.name),
                            l = I.A.getGameByName(e.name),
                            c =
                                null !=
                                (n =
                                    (null == e ? void 0 : e.id) !== K
                                        ? null == e
                                            ? void 0
                                            : e.id
                                        : null == l
                                          ? void 0
                                          : l.id)
                                    ? n
                                    : "";
                        N.default.track(k.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: k.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: o.name,
                            orig_game_name_v1: o.origGameName,
                            game_id_v1: null == s ? void 0 : s.id,
                            distributor_v1: o.distributor,
                            verified_v1: (0, j.PQ)(
                                o.exePath,
                                null != (r = null == s ? void 0 : s.executables) ? r : [],
                            ),
                            is_launcher_v1: o.isLauncher,
                            game_detection_enabled_v1: eM(o),
                            executable_path_v1: (0, j.Ic)(o.exePath),
                            distributor_game_id_v1: o.sku,
                            hidden_by_distributor_v1: o.hidden,
                            game_metadata_v1: (0, A.MT)(o),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: c,
                            distributor_v2: e.distributor,
                            verified_v2: (0, j.PQ)(
                                e.exePath,
                                null != (i = null == l ? void 0 : l.executables) ? i : [],
                            ),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eM(e),
                            executable_path_v2: (0, j.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, A.MT)(e),
                        });
                    }
            }),
            L.Ay.setGameDetectionErrorCallback((e, t, n, r, i) => {});
    });
class tt extends (i = c.Ay.Store) {
    initialize() {
        var e, t, n, r, i;
        let a =
            null != (e = u.w.get(Y))
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
                    (0, A.n1)(e) || (el.gameOverrides[t] = e);
                }),
            (el.enableOverlay = null != (n = a.enableOverlay) ? n : {}),
            (el.enableOverlayV3 = null != (r = a.enableOverlayV3) ? r : {}),
            (el.enableDetection = null != (i = a.enableDetection) ? i : {}),
            eV(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen)
                "number" == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        this.waitFor(I.A, M.A, C.A, m.A, S.A, T.default),
            (z = a.gamesSeen.filter((e) => !(0, A.n1)(e))),
            this.syncWith([m.A], e9),
            this.syncWith([S.A, I.A, C.A], o().throttle(eF, 1e3)),
            s && ek();
    }
    getVisibleGame() {
        return null == er || ej(er) ? er : null;
    }
    getCurrentGameForAnalytics() {
        return er;
    }
    getCurrentNonGameForAnalytics() {
        return ei;
    }
    getVisibleRunningGames() {
        return et.filter(ej);
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
            .map((e) => I.A.getGameByName(e.name))
            .filter(P.Vq)
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
        return null == t || t.isLauncher || null == t.id ? null : F({}, eu[t.id]);
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
        return 0 === z.length;
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eY();
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
            return H.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eL(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return H.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eL(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null != (t = null == (n = ea.find((t) => (0, g.A)(e, t.windowHandle))) ? void 0 : n.name) ? t : null;
    }
    get canShowAdminWarning() {
        return Q && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eM(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        eg.add(null != (t = (0, _.v)(e)) ? t : e);
    }
    getSystemServiceStatus(e) {
        var t;
        return null != (t = X[e])
            ? t
            : {
                  state: "unknown",
              };
    }
    isSystemServiceInitialized(e) {
        var t;
        return (null == (t = X[e]) ? void 0 : t.state) === "running";
    }
}
G(tt, "displayName", "RunningGameStore");
let tn = new tt(d.h, {
        RUNNING_GAMES_CHANGE: eK,
        RUNNING_NON_GAMES_CHANGE: ez,
        CANDIDATE_GAMES_CHANGE: eq,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eZ,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eQ,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eJ,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eX,
        RUNNING_GAME_ADD_OVERRIDE: e$,
        RUNNING_GAME_TOGGLE_OVERLAY: e6,
        RUNNING_GAME_TOGGLE_DETECTION: e4,
        RUNNING_GAME_EDIT_NAME: e5,
        RUNNING_GAME_DELETE_ENTRY: e7,
        GAMES_DATABASE_UPDATE: ec,
        GAMES_DATABASE_FETCH_FAIL: ec,
        NON_GAMES_DATABASE_UPDATE: ec,
        NON_GAMES_DATABASE_FETCH_FAIL: ec,
        CONNECTION_OPEN: ec,
        GAME_LAUNCH_SUCCESS: e8,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: e0,
        GAME_DETECTION_DEBUGGING_START: e1,
        GAME_DETECTION_DEBUGGING_STOP: e2,
        GAME_DETECTION_DEBUGGING_TICK: e3,
        SYSTEM_SERVICE_INITIALIZE: te,
    }),
    tr = tn;
