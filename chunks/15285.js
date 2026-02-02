let r;
n.d(t, {
    Ay: () => tn,
    Es: () => ew,
    Xr: () => ex,
    Zh: () => eA,
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
    T = n(194871),
    C = n(954571),
    N = n(927813),
    w = n(25171),
    R = n(403362),
    P = n(723702),
    D = n(837921),
    L = n(9302),
    x = n(953384),
    M = n(973522),
    j = n(652215),
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
            name: p.A.get(j.fg2.SPOTIFY).name,
        },
    ],
    q = [],
    Z = !0,
    Q = {
        "input-service": {
            state: "unknown",
        },
        "tool-service": {
            state: "unknown",
        },
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
    eh = new Set(),
    em = new Set(),
    eg = null,
    eE = null,
    ey = new Map(),
    eb = new Map();

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

function eA(e) {
    return e;
}

function eI(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}

function eS(e) {
    var t, n, r, i;
    let a = eb.get(null != (t = null == (r = e.name) ? void 0 : r.toLowerCase()) ? t : "");
    if (null != a) return a;
    let o =
            null != e.exeName && "" !== e.exeName
                ? e.exeName
                : null != (n = null == (i = e.exePath.split("/").pop()) ? void 0 : i.split("\\").pop())
                  ? n
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

function eT(e) {
    let t = eS(e);
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

function ew(e) {
    if ((0, A.n1)(e)) return "".concat(e.exePath, ":").concat(e.id);
    let t = null != e.name ? e.name : "";
    return "".concat(e.exePath, ":").concat(t);
}
z.forEach((e) => {
    var t;
    eb.set(e.name.toLowerCase(), e),
        (null != (t = e.executables) ? t : []).forEach((t) => {
            ey.set(t.name.toLowerCase(), e);
        });
});
let eR = new Set(["1314395942253756416"]);

function eP(e) {
    let t = null;
    if ("id" in e) {
        var n;
        t = null != (n = e.id) ? n : null;
    } else {
        let n = I.A.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, O.oA)("getRawOverlayGameStatus") && eR.has(t);
}

function eD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [I.A, S.A],
        i = eA(e);
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
    let o = (0, L.supportsOutOfProcess)() && !t,
        s = eP(null != a ? a : i),
        l = y.x.legacyEnabled,
        c = o && !s,
        u = es.enableOverlay[ew(i)],
        d = es.enableOverlayV3[ew(i)];
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
    let f = null == i.id ? null : ec[i.id];
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
        enabledOOP: Y || c,
        enabledLegacy: Y,
        overlayMethod: c ? b.Ue.OutOfProcess : b.Ue.Disabled,
        reason: "Default enablement",
    };
}

function eL(e) {
    let t = eA(e),
        n = es.enableOverlay[ew(t)],
        r = es.enableOverlayV3[ew(t)];
    if (null != n || null != r) return null != n ? n : r;
    let i = eD(t);
    return i.enabledLegacy || i.enabledOOP;
}

function ex(e) {
    let t = es.enableDetection[ew(e)];
    return null == t || t;
}

function eM(e) {
    return !e.hidden && ex(e);
}

function ej() {
    u.w.set(H, es);
}

function ek(e, t, n, r) {
    let i = F(G({}, e), {
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? l()(new Date(e.lastFocused * N.A.Millis.SECOND)).fromNow()
                : " ",
        overlay: eL(e),
        verified: n.isGameInDatabase(e),
        detectable: ex(e),
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
            .values(S.A.libraryApplications)
            .reduce((t, n) => {
                let r = I.A.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of T.A.getLaunchOptions(n.id, n.branchId)) {
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
        e && eV(),
        e
    );
}

function eV() {
    if (!__OVERLAY__ && P.isPlatformEmbedded) {
        let e = [...J, ...o().values(es.gameOverrides)];
        D.Ay.setGameCandidateOverrides(e);
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
                            let n = es.gameOverrides[ew(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && ew(t) !== ew(e) && (eF(ew(t), ew(e)), (t.exePath = e.exePath)),
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
        ej(),
        w.A.setRecentGames(eH().map((e) => ek(e, tt, I.A, S.A))));
}

function eH() {
    let e = o().values(es.gameOverrides);
    return es.gamesSeen.filter((e) => void 0 === es.gameOverrides[ew(e)]).concat(e);
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
    $ = e.games;
}

function eq() {
    Z = !1;
}

function eZ(e) {
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
        ((r = G({}, e)).hidden = !1), ee.push(r), (t = ew(r));
    } else (t = ew(r)), r.hidden && (eo[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)),
        (es.gameOverrides[t] = F(G({}, r), {
            add: !0,
        })),
        eB(ee),
        eV(),
        ej(),
        eC();
}

function e$() {
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
        C.default.track(j.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: q,
            paths: t,
            debugging_level: eg,
            interval_seconds: eE,
        });
}

function e3(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== es.enableOverlay[ew(t)],
        a = r !== es.enableOverlayV3[ew(t)];
    if (
        (i && (es.enableOverlay[ew(t)] = n),
        a && null != r && (es.enableOverlayV3[ew(t)] = r),
        ej(),
        !__OVERLAY__ && null != (null != t.id ? I.A.getDetectableGame(t.id) : null))
    ) {
        var o, s;
        i && (0, E.Q3)(n, E.OverlayToggledClientSettingType.LEGACY_GAME, null != (o = t.id) ? o : null),
            a && null != r && (0, E.Q3)(r, E.OverlayToggledClientSettingType.OOP_GAME, null != (s = t.id) ? s : null);
    }
}

function e6(e) {
    let { game: t } = e,
        n = ex(t);
    (es.enableDetection[ew(t)] = !n),
        ej(),
        C.default.track(j.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
            enabled: !n,
        });
}

function e4(e) {
    let t = ew(e.game),
        n = es.gameOverrides[t];
    null == n && ((n = eU(e.game)).add = !0), (n.name = e.newName);
    let r = ew(n);
    delete es.gameOverrides[t],
        (es.gameOverrides[r] = n),
        eO(es.enableOverlay, t, r),
        eO(es.enableDetection, t, r),
        eO(eo, t, r),
        es.gamesSeen.forEach((n) => {
            ew(n) === t && (n.name = e.newName);
        });
    let i = !1;
    ee.forEach((n) => {
        ew(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eV(),
        ej(),
        i && eC();
}

function e5(e) {
    let t = ew(e.game);
    delete es.gameOverrides[t],
        delete es.enableOverlay[t],
        delete es.enableDetection[t],
        (es.gamesSeen = es.gamesSeen.filter((e) => ew(e) !== t)),
        eo[t] &&
            (ee.forEach((e) => {
                t === ew(e) && (e.hidden = !0);
            }),
            delete eo[t]),
        ee.some((e) => ew(e) === t) && eC(),
        eV(),
        ej();
}

function e7(e) {
    var t;
    if (__OVERLAY__ || !P.isPlatformEmbedded) return;
    let n = D.Ay.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = I.A.getDetectableGame(e.applicationId);
    null != r && n(r.id, r.name, null != (t = e.pids) ? t : []);
}

function e8() {
    m.A.hasLoadedExperiments && K.length > 0 && (eB(K), (K = []));
}

function e9(e) {
    let { status: t, modules: n } = e;
    for (let e of n) Q[e] = t;
}
!__OVERLAY__ &&
    ((0, P.isDesktop)() || k.OX) &&
    (el = function () {
        if (!I.A.hasAttemptedFetch || !x.A.hasAttemptedFetch) return !1;
        let e = [],
            t = new Set();
        r = {};
        let n = I.A.games,
            i = x.A.nonGames,
            a = (0, L.supportsOutOfProcess)();
        for (let e of n) {
            var o, s, l, c;
            let t = eP(e),
                n = (a && !t) || f.gH.enabledOOP,
                r = null != (o = e.overlay) ? o : f.gH.enabled;
            ec[e.id] = {
                compatibilityHook: null != (s = e.overlayCompatibilityHook) ? s : f.gH.compatibilityHook,
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
            D.Ay.setObservedGamesCallback(e, !0, (e) => {
                let n = [],
                    i = {},
                    a = [];
                e = e.filter((e) =>
                    null != e.id && null != x.A.getById(e.id)
                        ? (a.push(e), !1)
                        : ((e.isLauncher = e.isLauncher || t.has(e.exeName)),
                            e.isLauncher && null != e.id && (i[e.id] = e),
                            (e.windowHandle = eY(e.pid, e.windowHandle)),
                            null != eS(e))
                          ? (n.push(e), !1)
                          : !I.A.shouldBlock(e),
                );
                let o = n.filter(eT).length;
                o !== eu &&
                    ((eu = o),
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
                    for (let [a, o] of e.entries()) {
                        var n, r, i;
                        let e = t[a],
                            s = I.A.getGameByName(o.name),
                            l = I.A.getGameByName(e.name),
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
                        C.default.track(j.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: j.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: o.name,
                            orig_game_name_v1: o.origGameName,
                            game_id_v1: null == s ? void 0 : s.id,
                            distributor_v1: o.distributor,
                            verified_v1: (0, M.PQ)(
                                o.exePath,
                                null != (r = null == s ? void 0 : s.executables) ? r : [],
                            ),
                            is_launcher_v1: o.isLauncher,
                            game_detection_enabled_v1: ex(o),
                            executable_path_v1: (0, M.Ic)(o.exePath),
                            distributor_game_id_v1: o.sku,
                            hidden_by_distributor_v1: o.hidden,
                            game_metadata_v1: (0, A.MT)(o),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: c,
                            distributor_v2: e.distributor,
                            verified_v2: (0, M.PQ)(
                                e.exePath,
                                null != (i = null == l ? void 0 : l.executables) ? i : [],
                            ),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: ex(e),
                            executable_path_v2: (0, M.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, A.MT)(e),
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
        es.gameOverrides = {};
        let s = !1;
        if (
            (o()
                .values(null != (t = a.gameOverrides) ? t : {})
                .forEach((e) => {
                    let t = ew(e);
                    (0, A.n1)(e) || (es.gameOverrides[t] = e);
                }),
            (es.enableOverlay = null != (n = a.enableOverlay) ? n : {}),
            (es.enableOverlayV3 = null != (r = a.enableOverlayV3) ? r : {}),
            (es.enableDetection = null != (i = a.enableDetection) ? i : {}),
            eV(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen)
                "number" == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        this.waitFor(T.A, m.A, I.A, S.A, x.A),
            (K = a.gamesSeen.filter((e) => !(0, A.n1)(e))),
            this.syncWith([m.A], e8),
            this.syncWith([S.A, I.A, T.A], o().throttle(eG, 1e3)),
            s && ej();
    }
    getVisibleGame() {
        return null == en || eM(en) ? en : null;
    }
    getCurrentGameForAnalytics() {
        return en;
    }
    getCurrentNonGameForAnalytics() {
        return er;
    }
    getVisibleRunningGames() {
        return ee.filter(eM);
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
            .map((e) => I.A.getGameByName(e.name))
            .filter(R.Vq)
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
        return null != t ? eA(t) : null;
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
        return $.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === es.gameOverrides[ew(e)]);
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
                let t = ew(e);
                n = n.filter((e) => ew(e) !== t);
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
        return es.gameOverrides[ew(e)];
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
        return Z && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return ex(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        em.add(null != (t = (0, _.v)(e)) ? t : e);
    }
    getSystemServiceStatus(e) {
        var t;
        return null != (t = Q[e])
            ? t
            : {
                  state: "unknown",
              };
    }
    isSystemServiceInitialized(e) {
        var t;
        return (null == (t = Q[e]) ? void 0 : t.state) === "running";
    }
}
U(te, "displayName", "RunningGameStore");
let tt = new te(d.h, {
        RUNNING_GAMES_CHANGE: eW,
        RUNNING_NON_GAMES_CHANGE: eK,
        CANDIDATE_GAMES_CHANGE: ez,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eq,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eZ,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eX,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eQ,
        RUNNING_GAME_ADD_OVERRIDE: eJ,
        RUNNING_GAME_TOGGLE_OVERLAY: e3,
        RUNNING_GAME_TOGGLE_DETECTION: e6,
        RUNNING_GAME_EDIT_NAME: e4,
        RUNNING_GAME_DELETE_ENTRY: e5,
        GAMES_DATABASE_UPDATE: el,
        GAMES_DATABASE_FETCH_FAIL: el,
        NON_GAMES_DATABASE_UPDATE: el,
        NON_GAMES_DATABASE_FETCH_FAIL: el,
        GAME_LAUNCH_SUCCESS: e7,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: e$,
        GAME_DETECTION_DEBUGGING_START: e0,
        GAME_DETECTION_DEBUGGING_STOP: e1,
        GAME_DETECTION_DEBUGGING_TICK: e2,
        SYSTEM_SERVICE_INITIALIZE: e9,
    }),
    tn = tt;
