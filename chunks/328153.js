"use strict";
let i;
n.d(t, { Xr: () => eL, Ay: () => eB, hw: () => eD, Es: () => eO, Zh: () => eT, xU: () => eP }), n(321073), n(667532);
var r = n(735438),
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    l = n(17928),
    d = n(506774),
    _ = n(228366),
    u = n(56562),
    c = n(573648),
    E = n(306044),
    h = n(626584),
    m = n(736056),
    f = n(639841),
    g = n(830012),
    p = n(810412),
    A = n(211753),
    I = n(206885),
    T = n(41984),
    S = n(439372),
    N = n(19575);
class C extends S.A {
    ownedLocks = new Set();
    acquireLock = (e) => {
        if (this.ownedLocks.has(e)) return !0;
        let t = `discord-overlay-global-owner-lock-${e}`;
        return !1 !== N.Ay.AcquireGlobalLock(t) && (this.ownedLocks.add(e), !0);
    };
}
let R = new C();
var O = n(871633),
    y = n(760751),
    v = n(189081),
    D = n(287809),
    L = n(340829),
    b = n(954571),
    w = n(927813),
    P = n(738533),
    k = n(403362),
    M = n(723702),
    U = n(9302),
    x = n(953384),
    G = n(973522);
let V = (0, n(945810).mj)({
    name: "2026-03-game-detection-collect-executable-fingerprint",
    kind: "user",
    defaultConfig: { enabledForAllGames: !1, enabledForRunningGames: !1 },
    variations: {
        0: { enabledForAllGames: !1, enabledForRunningGames: !1 },
        1: { enabledForAllGames: !0, enabledForRunningGames: !1 },
        2: { enabledForAllGames: !1, enabledForRunningGames: !0 },
    },
});
var F = n(652215);
let B = new h.A("RunningGameStore"),
    H = "RunningGameStore",
    j = !__OVERLAY__ && ((0, M.isDesktop)() || I.O),
    W = [],
    Y = [
        {
            executables: [
                { os: "win32", name: "obs/obs.exe" },
                { os: "win32", name: "obs32.exe" },
                { os: "win32", name: "obs64.exe" },
                { os: "darwin", name: "OBS.app" },
                { os: "linux", name: "obs" },
            ],
            name: "OBS",
            streamerTool: !0,
        },
        {
            executables: [
                { os: "win32", name: "XSplit.Gamecaster.exe" },
                { os: "win32", name: "XSplit.Core.exe" },
                { os: "win32", name: "Gamecaster.exe" },
            ],
            name: "XSplit",
            streamerTool: !0,
        },
        { executables: [{ os: "win32", name: "bebo.exe" }], name: "Bebo", streamerTool: !0 },
        {
            executables: [
                { os: "win32", name: "Streamlabs OBS.exe" },
                { os: "win32", name: "Streamlabs Desktop.exe" },
                { os: "darwin", name: "Streamlabs Desktop.app" },
            ],
            name: "Streamlabs Desktop",
            streamerTool: !0,
        },
        {
            executables: [
                { os: "win32", name: "TwitchStudio.exe" },
                { os: "darwin", name: "Twitch Studio.app" },
            ],
            name: "Twitch Studio",
            streamerTool: !0,
        },
        {
            executables: [
                { os: "win32", name: "Spotify.exe" },
                { os: "darwin", name: "Spotify.app" },
                { os: "linux", name: "spotify" },
            ],
            name: c.A.get(F.fg2.SPOTIFY).name,
        },
    ],
    K = [],
    z = !0,
    $ = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    q = new Set(),
    X = [],
    Z = [],
    Q = [],
    J = null,
    ee = [],
    et = null,
    en = null,
    ei = [],
    er = {},
    es = {},
    ea = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    eo = function () {},
    el = {},
    ed = 0,
    e_ = null,
    eu = null,
    ec = {},
    eE = {},
    eh = new Set(),
    em = new Set(),
    ef = null,
    eg = null,
    ep = new Map(),
    eA = new Map();
function eI(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function eT(e) {
    return e;
}
function eS(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eN(e) {
    let t = eA.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        i = ep.get(n.toLowerCase());
    if (null != i) return i;
    for (let [t, n] of ep) {
        let i = e.exePath.toLowerCase(),
            r = t.toLowerCase();
        if (i.endsWith(r)) {
            let e = i.length - r.length;
            if (0 === e || "/" === i[e - 1] || "\\" === i[e - 1]) return n;
        }
    }
    return null;
}
function eC(e) {
    let t = eN(e);
    return t?.streamerTool === !0;
}
function eR() {
    if (Q.length > 0) {
        let e = et;
        (et = Q[0]), null != e && et.pid === e.pid ? (et.start = e.start) : (et.start = Date.now());
    } else et = null;
    let e = [];
    for (let t of Q) t.pid in ec || ((ec[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ec)) Q.some((t) => t.pid === e.pid) || (t.push(e), delete ec[e.pid]);
    B.info("Running Games Changed", { runningGames: Q, added: e, removed: t, previousGames: ec }),
        _.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: Q, added: e, removed: t });
}
function eO(e) {
    if ((0, O.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
Y.forEach((e) => {
    eA.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            ep.set(t.name.toLowerCase(), e);
        });
});
let ey = new Set(["1314395942253756416"]);
function ev(e) {
    let t = null;
    if ("id" in e) t = e.id ?? null;
    else {
        let n = y.A.findGame(e);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && ey.has(t);
}
function eD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [y.A, v.A];
    if (e.isLauncher)
        return {
            source: T.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: T.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in e && !R.acquireLock(e.pid))
        return {
            source: T.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: T.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let r = n.findGame(e);
    if (null != r) {
        let e = i.getActiveLibraryApplication(r.id);
        if (null != e)
            return {
                source: T.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: T.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let s = (0, U.supportsOutOfProcess)() && !t,
        a = ev(r ?? e),
        o = A.x.legacyEnabled,
        l = s && !a,
        d = ea.enableOverlay[eO(e)],
        _ = ea.enableOverlayV3[eO(e)];
    if (null != d || null != _) {
        let e = null != _ ? _ : l,
            t = e ? T.Ue.OutOfProcess : T.Ue.Hook;
        return {
            source: e && !a ? T.yp.OOP_DEFAULT : T.yp.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: null != d ? d : o,
            overlayMethod: l ? t : T.Ue.Hook,
            reason: "Enabled from persistent",
        };
    }
    let u = null == e.id ? null : el[e.id];
    if (null != u) {
        let e = u.enabledOOP ?? l,
            t = u.enabled ?? o,
            n = e ? T.Ue.OutOfProcess : T.Ue.Hook;
        return {
            source: e && !a ? T.yp.OOP_DEFAULT_DATABASE : T.yp.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: l ? n : T.Ue.Hook,
            reason: "Enabled from overlayOptions",
        };
    }
    return {
        source: T.yp.DEFAULT,
        enabledOOP: l,
        enabledLegacy: !1,
        overlayMethod: l ? T.Ue.OutOfProcess : T.Ue.Disabled,
        reason: "Default enablement",
    };
}
function eL(e) {
    let t = ea.enableDetection[eO(e)];
    return null == t || t;
}
function eb(e) {
    return !e.hidden && eL(e);
}
function ew() {
    d.w.set(H, ea);
}
function eP(e, t, n, i) {
    let r = {
        ...e,
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? o()(new Date(e.lastFocused * w.A.Millis.SECOND)).fromNow()
                : " ",
        overlay: (function (e) {
            let t = ea.enableOverlay[eO(e)],
                n = ea.enableOverlayV3[eO(e)];
            if (null != t || null != n) return t ?? n;
            let i = eD(e);
            return i.enabledLegacy || i.enabledOOP;
        })(e),
        verified: n.isGameInDatabase(e),
        detectable: eL(e),
    };
    return null != e.id && null != el[e.id] && (r.overlayWarn = el[e.id].warn), r;
}
function ek() {
    let e = !1;
    return (
        (X = s()
            .values(v.A.libraryApplications)
            .reduce((t, n) => {
                let i = y.A.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of L.A.getLaunchOptions(n.id, n.branchId)) {
                    let s = `${n.id}:${n.branchId}`;
                    q.has(s) || ((e = !0), q.add(s));
                    let { fullExecutablePath: a } = r,
                        o = a.replace(/\\/g, "/").toLowerCase();
                    (er[o] = i.id),
                        t.push({ id: i.id, name: i.name, exePath: o, cmdLine: "", lastFocused: 0, add: !0 });
                }
                return t;
            }, [])),
        e && eM(),
        e
    );
}
function eM() {
    if (!__OVERLAY__ && M.isPlatformEmbedded) {
        let e = [...X, ...s().values(ea.gameOverrides)];
        N.Ay.setGameCandidateOverrides(e);
    }
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
                            let n = ea.gameOverrides[eO(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        if (
                            (t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eO(t) !== eO(e))
                        ) {
                            var n, i;
                            let r, s, a, o;
                            (n = eO(t)),
                                (i = eO(e)),
                                null != (r = ea.gameOverrides[n]) &&
                                    ((ea.gameOverrides[i] = r), delete ea.gameOverrides[n]),
                                null != (s = ea.enableOverlay[n]) &&
                                    ((ea.enableOverlay[i] = s), delete ea.enableOverlay[n]),
                                null != (a = ea.enableOverlayV3[n]) &&
                                    ((ea.enableOverlayV3[i] = a), delete ea.enableOverlayV3[n]),
                                null != (o = ea.enableDetection[n]) &&
                                    ((ea.enableDetection[i] = o), delete ea.enableDetection[n]),
                                (t.exePath = e.exePath);
                        }
                        return eS(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                let t;
                if (e.hidden) return;
                ea.gamesSeen.unshift(
                    ((t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused }),
                    null != e.id && (t.id = e.id),
                    null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId),
                    null != e.name && (t.name = e.name),
                    e.add && (t.add = !0),
                    e.block && (t.block = !0),
                    null != e.distributor && (t.distributor = e.distributor),
                    null != e.gameName && (t.gameName = e.gameName),
                    eS(t, e),
                    t),
                );
            }
        }),
        ea.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ew(),
        P.A.setRecentGames(ex().map((e) => eP(e, eF, y.A, v.A))));
}
function ex() {
    let e = s().values(ea.gameOverrides);
    return ea.gamesSeen.filter((e) => void 0 === ea.gameOverrides[eO(e)]).concat(e);
}
function eG() {
    j &&
        N.Ay.setProcessObserverCollectExecutableFingerprint(
            V.getConfig({ location: "running-game-store" }).enabledForAllGames,
        ),
        m.A.hasLoadedExperiments && W.length > 0 && (eU(W), (W = []));
}
j &&
    (eo = function () {
        if (!y.A.hasAttemptedFetch || !x.A.hasAttemptedFetch) return !1;
        let e = [],
            t = new Set();
        i = {};
        let n = y.A.games,
            r = x.A.nonGames,
            s = (0, U.supportsOutOfProcess)();
        for (let e of n) {
            let t = ev(e),
                n = (s && !t) || u.gH.enabledOOP,
                i = e.overlay ?? u.gH.enabled;
            el[e.id] = {
                compatibilityHook: e.overlayCompatibilityHook ?? u.gH.compatibilityHook,
                warn: e.overlayWarn ?? u.gH.warn,
                enabled: i,
                enabledOOP: n,
                allowHook: e.hook ?? u.gH.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
            };
        }
        let a = new Set();
        Y.forEach((e) => {
            (e.executables ?? []).forEach((e) => {
                a.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...r].filter((e) => !(e.executables ?? []).some((e) => ep.has(e.name.toLowerCase()))),
                ...Y,
            ].forEach((n) => {
                let i = null != n.executables ? n.executables : [],
                    r = {};
                if (
                    (i.forEach((e) => {
                        let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
                        null == r[n] && (r[n] = []), r[n].push(e.name), e.isLauncher && t.add(e.name);
                    }),
                    Object.keys(r).length > 0)
                )
                    Object.keys(r).forEach((t) =>
                        e.push({
                            name: n.name,
                            id: n.id,
                            executables: r[t],
                            cmdLine: "null" !== t ? t : null,
                            thirdPartySkus: n.thirdPartySkus ?? [],
                        }),
                    );
                else {
                    let t = n.thirdPartySkus ?? [];
                    t.length > 0 &&
                        e.push({ name: n.name, id: n.id, executables: [], cmdLine: null, thirdPartySkus: t });
                }
            }),
            (e = e.filter(
                (e) =>
                    (null != e.executables && e.executables.length > 0) ||
                    (null != e.thirdPartySkus && e.thirdPartySkus.length > 0),
            )),
            N.Ay.setObservedGamesCallback(
                e,
                !0,
                (e) => {
                    let n = [],
                        r = {},
                        s = [];
                    e = e.filter((e) =>
                        null != e.id && null != x.A.getById(e.id)
                            ? (s.push(e), !1)
                            : ((e.isLauncher = e.isLauncher || t.has(e.exeName)),
                                e.isLauncher && null != e.id && (r[e.id] = e),
                                (e.windowHandle = (function (e, t) {
                                    if (void 0 === t) {
                                        let t = N.Ay.getDiscordUtils();
                                        if (null != t && null != t.getWindowHandleFromPid) {
                                            let n = t.getWindowHandleFromPid(e);
                                            return null != n && "0" !== n ? n : null;
                                        }
                                        return null;
                                    }
                                    return "0" === t ? null : t;
                                })(e.pid, e.windowHandle)),
                                null != eN(e))
                              ? (n.push(e), !1)
                              : !y.A.shouldBlock(e),
                    );
                    let a = n.filter(eC).length;
                    a !== ed && ((ed = a), _.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: ed })),
                        (Q = null != J ? [J, ...e] : e),
                        (ee = s),
                        (ei = n),
                        (i = r),
                        eR(),
                        (en = ee.length > 0 ? ee[0] : null);
                    let o = [];
                    for (let e of ee) e.pid in eE || ((eE[e.pid] = e), o.push(e));
                    let l = [];
                    for (let e of Object.values(eE)) ee.some((t) => t.pid === e.pid) || (l.push(e), delete eE[e.pid]);
                    B.info("Running Non-Games Changed", {
                        runningNonGames: ee,
                        added: o,
                        removed: l,
                        previousNonGames: eE,
                    }),
                        _.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: ee, added: o, removed: l });
                },
                D.default.getCurrentUser()?.id,
            ),
            eM(),
            N.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, i] of e.entries()) {
                        let e = t[n],
                            r = y.A.findGame(i),
                            s = y.A.findGame(e),
                            a = (e?.id !== "4294967293" ? e?.id : s?.id) ?? "";
                        b.default.track(F.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: F.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: i.name,
                            orig_game_name_v1: i.origGameName,
                            game_id_v1: r?.id,
                            distributor_v1: i.distributor,
                            verified_v1: (0, G.PQ)(i.exePath, r?.executables ?? []),
                            is_launcher_v1: i.isLauncher,
                            game_detection_enabled_v1: eL(i),
                            executable_path_v1: (0, G.Ic)(i.exePath),
                            distributor_game_id_v1: i.sku,
                            hidden_by_distributor_v1: i.hidden,
                            game_metadata_v1: (0, O.MT)(i),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: a,
                            distributor_v2: e.distributor,
                            verified_v2: (0, G.PQ)(e.exePath, s?.executables ?? []),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eL(e),
                            executable_path_v2: (0, G.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, O.MT)(e),
                        });
                    }
            }),
            N.Ay.setGameDetectionErrorCallback((e, t, n, i, r) => {});
    });
class eV extends l.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = d.w.get(H) ?? {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableOverlayV3: {},
            enableDetection: {},
        };
        ea.gameOverrides = {};
        let t = !1;
        if (
            (s()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = eO(e);
                    (0, O.n1)(e) || (ea.gameOverrides[t] = e);
                }),
            (ea.enableOverlay = e.enableOverlay ?? {}),
            (ea.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (ea.enableDetection = e.enableDetection ?? {}),
            eM(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        this.waitFor(y.A, x.A, L.A, m.A, f.A, v.A, D.default),
            (W = e.gamesSeen.filter((e) => !(0, O.n1)(e))),
            this.syncWith([f.A], eG),
            this.syncWith([v.A, y.A, L.A], s().throttle(ek, 1e3)),
            t && ew();
    }
    getVisibleGame() {
        return null == et || eb(et) ? et : null;
    }
    getCurrentGameForAnalytics() {
        return et;
    }
    getCurrentNonGameForAnalytics() {
        return en;
    }
    getVisibleRunningGames() {
        return Q.filter(eb);
    }
    getRunningGames() {
        return Q;
    }
    getDebugRunningGame() {
        return J;
    }
    getRunningNonGames() {
        return ee;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of Q) null != er[t.exePath] && e.push(er[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => y.A.findGame(e))
            .filter(k.Vq)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        return Q.find((t) => t.pid === e) ?? null;
    }
    getGameForName(e) {
        return Q.find((t) => t.name?.toLowerCase() === e.toLowerCase()) ?? null;
    }
    getGameOrTransformedSubgameForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? i[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...el[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != e_ && e_ === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eu && eu === e;
    }
    canCollectExecutableFingerprintsForRunningGames() {
        return j && V.getConfig({ location: "running-game-store" }).enabledForRunningGames;
    }
    getCandidateGames() {
        return Z.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === ea.gameOverrides[eO(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === W.length;
    }
    isGameSeen(e) {
        return ex().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = ex();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eO(e);
                n = n.filter((e) => eO(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return ea.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return ei.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(ea.gameOverrides);
    }
    getOverrideForGame(e) {
        return ea.gameOverrides[eO(e)];
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
        return ei.find((t) => (0, g.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return z && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eL(e);
    }
    addExecutableTrackedByAnalytics(e) {
        em.add((0, E.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return $[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return $[e]?.state === "running";
    }
}
let eF = new eV(_.h, {
        RUNNING_GAMES_CHANGE: function (e) {
            eU(Q);
        },
        RUNNING_NON_GAMES_CHANGE: function () {},
        CANDIDATE_GAMES_CHANGE: function (e) {
            Z = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            z = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (e_ = t), (eu = null);
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            e_ = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (eu = t), (e_ = null);
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t,
                n = e.pid,
                i = Q.find((e) => e.pid === n);
            if (null == i) {
                let e = Z.find((e) => e.pid === n);
                if (null == e) return;
                ((i = { ...e }).hidden = !1), Q.push(i), (es[(t = eO(i))] = !0);
            } else (t = eO(i)), i.hidden && (es[t] = !0), (i.hidden = !1);
            (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)),
                (ea.gameOverrides[t] = { ...i, add: !0 }),
                eU(Q),
                eM(),
                ew(),
                eR();
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e,
                r = n !== ea.enableOverlay[eO(t)],
                s = i !== ea.enableOverlayV3[eO(t)];
            r && (ea.enableOverlay[eO(t)] = n),
                s && null != i && (ea.enableOverlayV3[eO(t)] = i),
                ew(),
                !__OVERLAY__ &&
                    null != (null != t.id ? y.A.getDetectableGame(t.id) : null) &&
                    (r && (0, p.Q3)(n, p.OverlayToggledClientSettingType.LEGACY_GAME, t.id ?? null),
                    s && null != i && (0, p.Q3)(i, p.OverlayToggledClientSettingType.OOP_GAME, t.id ?? null));
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = eL(t);
            (ea.enableDetection[eO(t)] = !n),
                ew(),
                b.default.track(F.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            let t = eO(e.game),
                n = ea.gameOverrides[t];
            if (null == n) {
                var i;
                (n = {
                    name: (i = e.game).name,
                    exePath: i.exePath,
                    cmdLine: i.cmdLine,
                    lastFocused: i.lastFocused,
                }).add = !0;
            }
            n.name = e.newName;
            let r = eO(n);
            delete ea.gameOverrides[t],
                (ea.gameOverrides[r] = n),
                eI(ea.enableOverlay, t, r),
                eI(ea.enableDetection, t, r),
                eI(es, t, r),
                ea.gamesSeen.forEach((n) => {
                    eO(n) === t && (n.name = e.newName);
                });
            let s = !1;
            Q.forEach((n) => {
                eO(n) === t && ((n.name = e.newName), (s = !0));
            }),
                eM(),
                ew(),
                s && eR();
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = eO(e.game);
            delete ea.gameOverrides[t],
                delete ea.enableOverlay[t],
                delete ea.enableDetection[t],
                (ea.gamesSeen = ea.gamesSeen.filter((e) => eO(e) !== t)),
                es[t] &&
                    (Q.forEach((e) => {
                        t === eO(e) && (e.hidden = !0);
                    }),
                    delete es[t]),
                Q.some((e) => eO(e) === t) && eR(),
                eM(),
                ew();
        },
        GAMES_DATABASE_UPDATE: eo,
        GAMES_DATABASE_FETCH_FAIL: eo,
        NON_GAMES_DATABASE_UPDATE: eo,
        NON_GAMES_DATABASE_FETCH_FAIL: eo,
        GAME_LAUNCH_SUCCESS: function (e) {
            if (__OVERLAY__ || !M.isPlatformEmbedded) return;
            let t = N.Ay.getDiscordUtils().notifyGameLaunched;
            if (null == t) return;
            let n = y.A.getDetectableGame(e.applicationId);
            null != n && t(n.id, n.name, e.pids ?? []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            eM();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            (ef = e.level), (eg = e.intervalSeconds);
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            (ef = null), (eg = null), eh.clear();
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => ({ pid: e.pid, cleanedExePath: (0, E.v)(e.exePath) ?? e.exePath }))
                .filter((e) => {
                    if (eh.has(e.pid) || em.has(e.cleanedExePath)) return !1;
                    let t = K.some((t) => e.cleanedExePath.includes(t));
                    return t && eh.add(e.pid), t;
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                b.default.track(F.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: K,
                    paths: t,
                    debugging_level: ef,
                    interval_seconds: eg,
                });
        },
        SYSTEM_SERVICE_INITIALIZE: function (e) {
            let { status: t, modules: n } = e;
            for (let e of n) $[e] = t;
        },
        RUNNING_GAME_SET_DEBUG_GAME: function (e) {
            null != J && (Q = Q.filter((e) => e !== J)), null != (J = e.game) && (Q = [J, ...Q]), eR();
        },
    }),
    eB = eF;
