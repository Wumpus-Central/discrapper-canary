let r;
n.d(t, {
    Ay: () => tn,
    Es: () => eR,
    Xr: () => eL,
    Zh: () => ev,
    hw: () => eD,
    xU: () => ek,
}),
    n(896048),
    n(747238),
    n(321073),
    n(812715),
    n(667532),
    n(638769);
var i,
    a = n(735438),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
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
    b = n(211753),
    y = n(41984),
    O = n(589051),
    A = n(763266),
    v = n(847521),
    S = n(760751),
    I = n(189081),
    T = n(194871),
    C = n(954571),
    N = n(927813),
    R = n(25171),
    w = n(403362),
    P = n(723702),
    D = n(837921),
    x = n(9302),
    L = n(953384),
    j = n(973522),
    M = n(652215),
    k = n(672396);

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
let B = new h.A("RunningGameStore"),
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
            name: p.A.get(M.fg2.SPOTIFY).name,
        },
    ],
    q = [],
    X = !0,
    Z = {
        "input-service": {
            state: "unknown",
        },
        "tool-service": {
            state: "unknown",
        },
    },
    Q = new Set(),
    $ = [],
    J = [],
    ee = [],
    et = [],
    en = null,
    er = null,
    ei = [],
    ea = {},
    es = {},
    eo = {
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
    eh = new Set(),
    em = new Set(),
    eg = null,
    eE = null,
    eb = new Map(),
    ey = new Map();

function eO(e, t, n) {
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

function ev(e) {
    return e;
}

function eS(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}

function eI(e) {
    var t, n, r, i;
    let a = ey.get(null != (t = null == (r = e.name) ? void 0 : r.toLowerCase()) ? t : "");
    if (null != a) return a;
    let s =
            null != e.exeName && "" !== e.exeName
                ? e.exeName
                : null != (n = null == (i = e.exePath.split("/").pop()) ? void 0 : i.split("\\").pop())
                  ? n
                  : "",
        o = eb.get(s.toLowerCase());
    if (null != o) return o;
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

function eT(e) {
    let t = eI(e);
    return (null == t ? void 0 : t.streamerTool) === !0;
}

function eC() {
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
        d.h.dispatch({
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
        d.h.dispatch({
            type: "RUNNING_NON_GAMES_CHANGE",
            nonGames: et,
            added: e,
            removed: t,
        }));
}

function eR(e) {
    if ((0, v.n1)(e)) return "".concat(e.exePath, ":").concat(e.id);
    let t = null != e.name ? e.name : "";
    return "".concat(e.exePath, ":").concat(t);
}
z.forEach((e) => {
    var t;
    ey.set(e.name.toLowerCase(), e),
        (null != (t = e.executables) ? t : []).forEach((t) => {
            eb.set(t.name.toLowerCase(), e);
        });
});
let ew = new Set(["1314395942253756416"]);

function eP(e) {
    let t = null;
    if ("id" in e) {
        var n;
        t = null != (n = e.id) ? n : null;
    } else {
        let n = S.A.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, O.oA)("getRawOverlayGameStatus") && ew.has(t);
}

function eD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [S.A, I.A],
        i = ev(e);
    if (i.isLauncher)
        return {
            source: y.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: y.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in i && !A.A.acquireLock(i.pid))
        return {
            source: y.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: y.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let a = n.getGameByName(i.name);
    if (null != a) {
        let e = r.getActiveLibraryApplication(a.id);
        if (null != e)
            return {
                source: y.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: y.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let s = (0, x.supportsOutOfProcess)() && !t,
        o = eP(null != a ? a : i),
        l = b.x.legacyEnabled,
        c = s && !o,
        u = eo.enableOverlay[eR(i)],
        d = eo.enableOverlayV3[eR(i)];
    if (null != u || null != d) {
        let e = null != d ? d : c,
            t = null != u ? u : l,
            n = e ? y.Ue.OutOfProcess : y.Ue.Hook;
        return {
            source: e && !o ? y.yp.OOP_DEFAULT : y.yp.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: c ? n : y.Ue.Hook,
            reason: "Enabled from persistent",
        };
    }
    let f = null == i.id ? null : ec[i.id];
    if (null != f) {
        var p, _;
        let e = null != (p = f.enabledOOP) ? p : c,
            t = null != (_ = f.enabled) ? _ : l,
            n = e ? y.Ue.OutOfProcess : y.Ue.Hook;
        return {
            source: e && !o ? y.yp.OOP_DEFAULT_DATABASE : y.yp.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: c ? n : y.Ue.Hook,
            reason: "Enabled from overlayOptions",
        };
    }
    return {
        source: y.yp.DEFAULT,
        enabledOOP: Y || c,
        enabledLegacy: Y,
        overlayMethod: c ? y.Ue.OutOfProcess : y.Ue.Disabled,
        reason: "Default enablement",
    };
}

function ex(e) {
    let t = ev(e),
        n = eo.enableOverlay[eR(t)],
        r = eo.enableOverlayV3[eR(t)];
    if (null != n || null != r) return null != n ? n : r;
    let i = eD(t);
    return i.enabledLegacy || i.enabledOOP;
}

function eL(e) {
    let t = eo.enableDetection[eR(e)];
    return null == t || t;
}

function ej(e) {
    return !e.hidden && eL(e);
}

function eM() {
    u.w.set(H, eo);
}

function ek(e, t, n, r) {
    let i = F(G({}, e), {
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? l()(new Date(e.lastFocused * N.A.Millis.SECOND)).fromNow()
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
        ($ = s()
            .values(I.A.libraryApplications)
            .reduce((t, n) => {
                let r = S.A.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of T.A.getLaunchOptions(n.id, n.branchId)) {
                    let a = "".concat(n.id, ":").concat(n.branchId);
                    Q.has(a) || ((e = !0), Q.add(a));
                    let { fullExecutablePath: s } = i,
                        o = s.replace(/\\/g, "/").toLowerCase();
                    (ea[o] = r.id),
                        t.push({
                            id: r.id,
                            name: r.name,
                            exePath: o,
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
    if (!__OVERLAY__ && P.isPlatformEmbedded) {
        let e = [...$, ...s().values(eo.gameOverrides)];
        D.Ay.setGameCandidateOverrides(e);
    }
}

function eF(e, t) {
    let n = eo.gameOverrides[e];
    null != n && ((eo.gameOverrides[t] = n), delete eo.gameOverrides[e]);
    let r = eo.enableOverlay[e];
    null != r && ((eo.enableOverlay[t] = r), delete eo.enableOverlay[e]);
    let i = eo.enableOverlayV3[e];
    null != i && ((eo.enableOverlayV3[t] = i), delete eo.enableOverlayV3[e]);
    let a = eo.enableDetection[e];
    null != a && ((eo.enableDetection[t] = a), delete eo.enableDetection[e]);
}

function eB(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                eo.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = eo.gameOverrides[eR(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eR(t) !== eR(e) && (eF(eR(t), eR(e)), (t.exePath = e.exePath)),
                            eS(t, e),
                            !0
                        );
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                eo.gamesSeen.unshift(eA(e));
            }
        }),
        eo.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eM(),
        R.A.setRecentGames(eH().map((e) => ek(e, tt, S.A, I.A))));
}

function eH() {
    let e = s().values(eo.gameOverrides);
    return eo.gamesSeen.filter((e) => void 0 === eo.gameOverrides[eR(e)]).concat(e);
}

function eY(e, t) {
    if (void 0 === t) {
        let t = D.Ay.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && "0" !== n ? n : null;
        }
        return null;
    }
    return "0" === t ? null : t;
}

function eW(e) {
    eB(ee);
}

function eK() {}

function ez(e) {
    J = e.games;
}

function eq() {
    X = !1;
}

function eX(e) {
    let { pid: t } = e;
    (ed = t), (ef = null);
}

function eZ(e) {
    let { pid: t } = e;
    (ef = t), (ed = null);
}

function eQ() {
    ed = null;
}

function e$(e) {
    let t,
        n = e.pid,
        r = ee.find((e) => e.pid === n);
    if (null == r) {
        let e = J.find((e) => e.pid === n);
        if (null == e) return;
        ((r = G({}, e)).hidden = !1), ee.push(r), (t = eR(r));
    } else (t = eR(r)), r.hidden && (es[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)),
        (eo.gameOverrides[t] = F(G({}, r), {
            add: !0,
        })),
        eB(ee),
        eV(),
        eM(),
        eC();
}

function eJ() {
    eV();
}

function e0(e) {
    (eg = e.level), (eE = e.intervalSeconds);
}

function e1() {
    (eg = null), (eE = null), eh.clear();
}

function e2(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null != (t = (0, _.v)(e.exePath)) ? t : e.exePath,
            };
        })
        .filter((e) => {
            if (eh.has(e.pid) || em.has(e.cleanedExePath)) return !1;
            let t = q.some((t) => e.cleanedExePath.includes(t));
            return t && eh.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        C.default.track(M.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: q,
            paths: t,
            debugging_level: eg,
            interval_seconds: eE,
        });
}

function e3(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== eo.enableOverlay[eR(t)],
        a = r !== eo.enableOverlayV3[eR(t)];
    if (
        (i && (eo.enableOverlay[eR(t)] = n),
        a && null != r && (eo.enableOverlayV3[eR(t)] = r),
        eM(),
        !__OVERLAY__ && null != (null != t.id ? S.A.getDetectableGame(t.id) : null))
    ) {
        var s, o;
        i && (0, E.Q3)(n, E.OverlayToggledClientSettingType.LEGACY_GAME, null != (s = t.id) ? s : null),
            a && null != r && (0, E.Q3)(r, E.OverlayToggledClientSettingType.OOP_GAME, null != (o = t.id) ? o : null);
    }
}

function e6(e) {
    let { game: t } = e,
        n = eL(t);
    (eo.enableDetection[eR(t)] = !n),
        eM(),
        C.default.track(M.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
            enabled: !n,
        });
}

function e4(e) {
    let t = eR(e.game),
        n = eo.gameOverrides[t];
    null == n && ((n = eU(e.game)).add = !0), (n.name = e.newName);
    let r = eR(n);
    delete eo.gameOverrides[t],
        (eo.gameOverrides[r] = n),
        eO(eo.enableOverlay, t, r),
        eO(eo.enableDetection, t, r),
        eO(es, t, r),
        eo.gamesSeen.forEach((n) => {
            eR(n) === t && (n.name = e.newName);
        });
    let i = !1;
    ee.forEach((n) => {
        eR(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eV(),
        eM(),
        i && eC();
}

function e5(e) {
    let t = eR(e.game);
    delete eo.gameOverrides[t],
        delete eo.enableOverlay[t],
        delete eo.enableDetection[t],
        (eo.gamesSeen = eo.gamesSeen.filter((e) => eR(e) !== t)),
        es[t] &&
            (ee.forEach((e) => {
                t === eR(e) && (e.hidden = !0);
            }),
            delete es[t]),
        ee.some((e) => eR(e) === t) && eC(),
        eV(),
        eM();
}

function e7(e) {
    var t;
    if (__OVERLAY__ || !P.isPlatformEmbedded) return;
    let n = D.Ay.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = S.A.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}

function e8() {
    m.A.hasLoadedExperiments && K.length > 0 && (eB(K), (K = []));
}

function e9(e) {
    let { status: t, modules: n } = e;
    for (let e of n) Z[e] = t;
}
!__OVERLAY__ &&
    ((0, P.isDesktop)() || k.OX) &&
    (el = function () {
        if (!S.A.hasAttemptedFetch || !L.A.hasAttemptedFetch) return !1;
        let e = [],
            t = new Set();
        r = {};
        let n = S.A.games,
            i = L.A.nonGames,
            a = (0, x.supportsOutOfProcess)();
        for (let e of n) {
            var s, o, l, c;
            let t = eP(e),
                n = (a && !t) || f.gH.enabledOOP,
                r = null != (s = e.overlay) ? s : f.gH.enabled;
            ec[e.id] = {
                compatibilityHook: null != (o = e.overlayCompatibilityHook) ? o : f.gH.compatibilityHook,
                warn: null != (l = e.overlayWarn) ? l : f.gH.warn,
                enabled: r,
                enabledOOP: n,
                allowHook: null != (c = e.hook) ? c : f.gH.allowHook,
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
                    return !(null != (t = e.executables) ? t : []).some((e) => eb.has(e.name.toLowerCase()));
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
            D.Ay.setObservedGamesCallback(e, !0, (e) => {
                let n = [],
                    i = {},
                    a = [];
                e = e.filter((e) =>
                    null != e.id && null != L.A.getById(e.id)
                        ? (a.push(e), !1)
                        : ((e.isLauncher = e.isLauncher || t.has(e.exeName)),
                            e.isLauncher && null != e.id && (i[e.id] = e),
                            (e.windowHandle = eY(e.pid, e.windowHandle)),
                            null != eI(e))
                          ? (n.push(e), !1)
                          : !S.A.shouldBlock(e),
                );
                let s = n.filter(eT).length;
                s !== eu &&
                    ((eu = s),
                    d.h.dispatch({
                        type: "RUNNING_STREAMER_TOOLS_CHANGE",
                        count: eu,
                    })),
                    (ee = e),
                    (et = a),
                    (ei = n),
                    (r = i),
                    eC(),
                    eN();
            }),
            eV(),
            D.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [a, s] of e.entries()) {
                        var n, r, i;
                        let e = t[a],
                            o = S.A.getGameByName(s.name),
                            l = S.A.getGameByName(e.name),
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
                        C.default.track(M.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: M.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: s.name,
                            orig_game_name_v1: s.origGameName,
                            game_id_v1: null == o ? void 0 : o.id,
                            distributor_v1: s.distributor,
                            verified_v1: (0, j.PQ)(
                                s.exePath,
                                null != (r = null == o ? void 0 : o.executables) ? r : [],
                            ),
                            is_launcher_v1: s.isLauncher,
                            game_detection_enabled_v1: eL(s),
                            executable_path_v1: (0, j.Ic)(s.exePath),
                            distributor_game_id_v1: s.sku,
                            hidden_by_distributor_v1: s.hidden,
                            game_metadata_v1: (0, v.MT)(s),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: c,
                            distributor_v2: e.distributor,
                            verified_v2: (0, j.PQ)(
                                e.exePath,
                                null != (i = null == l ? void 0 : l.executables) ? i : [],
                            ),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eL(e),
                            executable_path_v2: (0, j.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, v.MT)(e),
                        });
                    }
            }),
            D.Ay.setGameDetectionErrorCallback((e, t, n, r, i) => {});
    });
class te extends (i = c.Ay.Store) {
    initialize() {
        var e, t, n, r, i;
        let a =
            null != (e = u.w.get(H))
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableOverlayV3: {},
                      enableDetection: {},
                  };
        eo.gameOverrides = {};
        let o = !1;
        if (
            (s()
                .values(null != (t = a.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = eR(e);
                    (0, v.n1)(e) || (eo.gameOverrides[t] = e);
                }),
            (eo.enableOverlay = null != (n = a.enableOverlay) ? n : {}),
            (eo.enableOverlayV3 = null != (r = a.enableOverlayV3) ? r : {}),
            (eo.enableDetection = null != (i = a.enableDetection) ? i : {}),
            eV(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen)
                "number" == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (o = !0));
        this.waitFor(T.A, m.A, S.A, I.A, L.A),
            (K = a.gamesSeen.filter((e) => !(0, v.n1)(e))),
            this.syncWith([m.A], e8),
            this.syncWith([I.A, S.A, T.A], s().throttle(eG, 1e3)),
            o && eM();
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
            .map((e) => S.A.getGameByName(e.name))
            .filter(w.Vq)
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
        return null != t ? ev(t) : null;
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
        return J.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === eo.gameOverrides[eR(e)]);
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
        return eo.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return ei.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(eo.gameOverrides);
    }
    getOverrideForGame(e) {
        return eo.gameOverrides[eR(e)];
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
        return null != (t = null == (n = ei.find((t) => (0, g.A)(e, t.windowHandle))) ? void 0 : n.name) ? t : null;
    }
    get canShowAdminWarning() {
        return X && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eL(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        em.add(null != (t = (0, _.v)(e)) ? t : e);
    }
    getSystemServiceStatus(e) {
        var t;
        return null != (t = Z[e])
            ? t
            : {
                  state: "unknown",
              };
    }
    isSystemServiceInitialized(e) {
        var t;
        return (null == (t = Z[e]) ? void 0 : t.state) === "running";
    }
}
U(te, "displayName", "RunningGameStore");
let tt = new te(d.h, {
        RUNNING_GAMES_CHANGE: eW,
        RUNNING_NON_GAMES_CHANGE: eK,
        CANDIDATE_GAMES_CHANGE: ez,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eq,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eX,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eQ,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eZ,
        RUNNING_GAME_ADD_OVERRIDE: e$,
        RUNNING_GAME_TOGGLE_OVERLAY: e3,
        RUNNING_GAME_TOGGLE_DETECTION: e6,
        RUNNING_GAME_EDIT_NAME: e4,
        RUNNING_GAME_DELETE_ENTRY: e5,
        GAMES_DATABASE_UPDATE: el,
        GAMES_DATABASE_FETCH_FAIL: el,
        NON_GAMES_DATABASE_UPDATE: el,
        NON_GAMES_DATABASE_FETCH_FAIL: el,
        GAME_LAUNCH_SUCCESS: e7,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eJ,
        GAME_DETECTION_DEBUGGING_START: e0,
        GAME_DETECTION_DEBUGGING_STOP: e1,
        GAME_DETECTION_DEBUGGING_TICK: e2,
        SYSTEM_SERVICE_INITIALIZE: e9,
    }),
    tn = tt;
