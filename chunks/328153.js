"use strict";
let i;
n.d(t, { Xr: () => eP, Ay: () => eY, hw: () => ew, Es: () => eD, Zh: () => eN, xU: () => eU }), n(321073), n(667532);
var r = n(735438),
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    l = n(167789),
    _ = n(17928),
    d = n(506774),
    u = n(228366),
    c = n(56562),
    E = n(573648),
    h = n(306044),
    m = n(626584),
    f = n(736056),
    g = n(639841),
    A = n(830012),
    I = n(810412),
    p = n(211753),
    T = n(206885),
    S = n(41984),
    N = n(439372),
    O = n(19575);
class R extends N.A {
    ownedLocks = new Set();
    acquireLock = (e) => {
        if (this.ownedLocks.has(e)) return !0;
        let t = `discord-overlay-global-owner-lock-${e}`;
        return !1 !== O.Ay.AcquireGlobalLock(t) && (this.ownedLocks.add(e), !0);
    };
}
let C = new R();
var y = n(871633),
    D = n(760751),
    L = n(189081),
    v = n(287809),
    w = n(340829),
    P = n(954571),
    b = n(927813),
    k = n(738533),
    U = n(403362),
    M = n(723702),
    G = n(9302),
    x = n(953384),
    V = n(973522);
let F = (0, n(945810).mj)({
    name: "2026-03-game-detection-collect-executable-fingerprint",
    kind: "user",
    defaultConfig: { enabledForAllGames: !1, enabledForRunningGames: !1 },
    variations: {
        0: { enabledForAllGames: !1, enabledForRunningGames: !1 },
        1: { enabledForAllGames: !0, enabledForRunningGames: !1 },
        2: { enabledForAllGames: !1, enabledForRunningGames: !0 },
    },
});
var B = n(652215);
let H = new m.A("RunningGameStore"),
    Y = "RunningGameStore",
    W = !__OVERLAY__ && ((0, M.isDesktop)() || T.O),
    K = [],
    j = [
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
            name: E.A.get(B.fg2.SPOTIFY).name,
        },
    ],
    $ = [],
    z = !0,
    q = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    X = new Set(),
    Q = [],
    J = [],
    Z = [],
    ee = null,
    et = [],
    en = null,
    ei = null,
    er = [],
    es = {},
    ea = {},
    eo = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    el = function () {},
    e_ = null,
    ed = {},
    eu = 0,
    ec = null,
    eE = null,
    eh = {},
    em = {},
    ef = new Set(),
    eg = new Set(),
    eA = null,
    eI = null,
    ep = new Map(),
    eT = new Map();
function eS(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function eN(e) {
    return e;
}
function eO(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eR(e) {
    let t = eT.get(e.name?.toLowerCase() ?? "");
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
    let t = eR(e);
    return t?.streamerTool === !0;
}
function ey() {
    if (Z.length > 0) {
        let e = en;
        (en = Z[0]), null != e && en.pid === e.pid ? (en.start = e.start) : (en.start = Date.now());
    } else en = null;
    let e = [];
    for (let t of Z) t.pid in eh || ((eh[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(eh)) Z.some((t) => t.pid === e.pid) || (t.push(e), delete eh[e.pid]);
    H.info("Running Games Changed", { runningGames: Z, added: e, removed: t, previousGames: eh }),
        u.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: Z, added: e, removed: t });
}
function eD(e) {
    if ((0, y.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
j.forEach((e) => {
    eT.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            ep.set(t.name.toLowerCase(), e);
        });
});
let eL = new Set(["1314395942253756416"]);
function ev(e) {
    let t = null;
    if ("id" in e) t = e.id ?? null;
    else {
        let n = D.A.findGame(e);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && eL.has(t);
}
function ew(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [D.A, L.A];
    if (e.isLauncher)
        return {
            source: S.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: S.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in e && !C.acquireLock(e.pid))
        return {
            source: S.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: S.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let r = n.findGame(e);
    if (null != r) {
        let e = i.getActiveLibraryApplication(r.id);
        if (null != e)
            return {
                source: S.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: S.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let s = (0, G.supportsOutOfProcess)() && !t,
        a = ev(r ?? e),
        o = p.x.legacyEnabled,
        l = s && !a,
        _ = eo.enableOverlay[eD(e)],
        d = eo.enableOverlayV3[eD(e)];
    if (null != _ || null != d) {
        let e = null != d ? d : l,
            t = e ? S.Ue.OutOfProcess : S.Ue.Hook;
        return {
            source: e && !a ? S.yp.OOP_DEFAULT : S.yp.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: null != _ ? _ : o,
            overlayMethod: l ? t : S.Ue.Hook,
            reason: "Enabled from persistent",
        };
    }
    let u = null == e.id ? null : ed[e.id];
    if (null != u) {
        let e = u.enabledOOP ?? l,
            t = u.enabled ?? o,
            n = e ? S.Ue.OutOfProcess : S.Ue.Hook;
        return {
            source: e && !a ? S.yp.OOP_DEFAULT_DATABASE : S.yp.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: l ? n : S.Ue.Hook,
            reason: "Enabled from overlayOptions",
        };
    }
    return {
        source: S.yp.DEFAULT,
        enabledOOP: l,
        enabledLegacy: !1,
        overlayMethod: l ? S.Ue.OutOfProcess : S.Ue.Disabled,
        reason: "Default enablement",
    };
}
function eP(e) {
    let t = eo.enableDetection[eD(e)];
    return null == t || t;
}
function eb(e) {
    return !e.hidden && eP(e);
}
function ek() {
    d.w.set(Y, eo);
}
function eU(e, t, n, i) {
    let r = {
        ...e,
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? o()(new Date(e.lastFocused * b.A.Millis.SECOND)).fromNow()
                : " ",
        overlay: (function (e) {
            let t = eo.enableOverlay[eD(e)],
                n = eo.enableOverlayV3[eD(e)];
            if (null != t || null != n) return t ?? n;
            let i = ew(e);
            return i.enabledLegacy || i.enabledOOP;
        })(e),
        verified: n.isGameInDatabase(e),
        detectable: eP(e),
    };
    return null != e.id && null != ed[e.id] && (r.overlayWarn = ed[e.id].warn), r;
}
function eM() {
    let e = !1;
    return (
        (Q = s()
            .values(L.A.libraryApplications)
            .reduce((t, n) => {
                let i = D.A.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of w.A.getLaunchOptions(n.id, n.branchId)) {
                    let s = `${n.id}:${n.branchId}`;
                    X.has(s) || ((e = !0), X.add(s));
                    let { fullExecutablePath: a } = r,
                        o = a.replace(/\\/g, "/").toLowerCase();
                    (es[o] = i.id),
                        t.push({ id: i.id, name: i.name, exePath: o, cmdLine: "", lastFocused: 0, add: !0 });
                }
                return t;
            }, [])),
        e && eG(),
        e
    );
}
function eG() {
    if (!__OVERLAY__ && M.isPlatformEmbedded) {
        let e = [...Q, ...s().values(eo.gameOverrides)];
        O.Ay.setGameCandidateOverrides(e);
    }
}
function ex(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                eo.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = eo.gameOverrides[eD(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        if (
                            (t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eD(t) !== eD(e))
                        ) {
                            var n, i;
                            let r, s, a, o;
                            (n = eD(t)),
                                (i = eD(e)),
                                null != (r = eo.gameOverrides[n]) &&
                                    ((eo.gameOverrides[i] = r), delete eo.gameOverrides[n]),
                                null != (s = eo.enableOverlay[n]) &&
                                    ((eo.enableOverlay[i] = s), delete eo.enableOverlay[n]),
                                null != (a = eo.enableOverlayV3[n]) &&
                                    ((eo.enableOverlayV3[i] = a), delete eo.enableOverlayV3[n]),
                                null != (o = eo.enableDetection[n]) &&
                                    ((eo.enableDetection[i] = o), delete eo.enableDetection[n]),
                                (t.exePath = e.exePath);
                        }
                        return eO(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                let t;
                if (e.hidden) return;
                eo.gamesSeen.unshift(
                    ((t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused }),
                    null != e.id && (t.id = e.id),
                    null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId),
                    null != e.name && (t.name = e.name),
                    e.add && (t.add = !0),
                    e.block && (t.block = !0),
                    null != e.distributor && (t.distributor = e.distributor),
                    null != e.gameName && (t.gameName = e.gameName),
                    eO(t, e),
                    t),
                );
            }
        }),
        eo.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ek(),
        k.A.setRecentGames(eV().map((e) => eU(e, eH, D.A, L.A))));
}
function eV() {
    let e = s().values(eo.gameOverrides);
    return eo.gamesSeen.filter((e) => void 0 === eo.gameOverrides[eD(e)]).concat(e);
}
if (W) {
    let e = function () {
        let e = [],
            t = new Set();
        i = {};
        let n = D.A.games,
            r = x.A.nonGames,
            s = (0, G.supportsOutOfProcess)();
        for (let e of n) {
            let t = ev(e),
                n = (s && !t) || c.gH.enabledOOP,
                i = e.overlay ?? c.gH.enabled;
            ed[e.id] = {
                compatibilityHook: e.overlayCompatibilityHook ?? c.gH.compatibilityHook,
                warn: e.overlayWarn ?? c.gH.warn,
                enabled: i,
                enabledOOP: n,
                allowHook: e.hook ?? c.gH.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
            };
        }
        let a = new Set();
        j.forEach((e) => {
            (e.executables ?? []).forEach((e) => {
                a.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...r].filter((e) => !(e.executables ?? []).some((e) => ep.has(e.name.toLowerCase()))),
                ...j,
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
            O.Ay.setObservedGamesCallback(
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
                                        let t = O.Ay.getDiscordUtils();
                                        if (null != t && null != t.getWindowHandleFromPid) {
                                            let n = t.getWindowHandleFromPid(e);
                                            return null != n && "0" !== n ? n : null;
                                        }
                                        return null;
                                    }
                                    return "0" === t ? null : t;
                                })(e.pid, e.windowHandle)),
                                null != eR(e))
                              ? (n.push(e), !1)
                              : !D.A.shouldBlock(e),
                    );
                    let a = n.filter(eC).length;
                    a !== eu && ((eu = a), u.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: eu })),
                        (Z = null != ee ? [ee, ...e] : e),
                        (et = s),
                        (er = n),
                        (i = r),
                        ey(),
                        (ei = et.length > 0 ? et[0] : null);
                    let o = [];
                    for (let e of et) e.pid in em || ((em[e.pid] = e), o.push(e));
                    let l = [];
                    for (let e of Object.values(em)) et.some((t) => t.pid === e.pid) || (l.push(e), delete em[e.pid]);
                    H.info("Running Non-Games Changed", {
                        runningNonGames: et,
                        added: o,
                        removed: l,
                        previousNonGames: em,
                    }),
                        u.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: et, added: o, removed: l });
                },
                v.default.getCurrentUser()?.id,
            ),
            eG(),
            O.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, i] of e.entries()) {
                        let e = t[n],
                            r = D.A.findGame(i),
                            s = D.A.findGame(e),
                            a = (e?.id !== "4294967293" ? e?.id : s?.id) ?? "";
                        P.default.track(B.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: B.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: i.name,
                            orig_game_name_v1: i.origGameName,
                            game_id_v1: r?.id,
                            distributor_v1: i.distributor,
                            verified_v1: (0, V.PQ)(i.exePath, r?.executables ?? []),
                            is_launcher_v1: i.isLauncher,
                            game_detection_enabled_v1: eP(i),
                            executable_path_v1: (0, V.Ic)(i.exePath),
                            distributor_game_id_v1: i.sku,
                            hidden_by_distributor_v1: i.hidden,
                            game_metadata_v1: (0, y.MT)(i),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: a,
                            distributor_v2: e.distributor,
                            verified_v2: (0, V.PQ)(e.exePath, s?.executables ?? []),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eP(e),
                            executable_path_v2: (0, V.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, y.MT)(e),
                        });
                    }
            }),
            O.Ay.setGameDetectionErrorCallback((e, t, n, i, r) => {});
    };
    el = function () {
        return (
            !!D.A.hasAttemptedFetch &&
            !!x.A.hasAttemptedFetch &&
            (null != e_ && e_(),
            (e_ = (0, l.O)(
                () => {
                    (e_ = null), e(), eH.emitChange();
                },
                { timeout: 2e3 },
            )),
            !1)
        );
    };
}
function eF() {
    W &&
        O.Ay.setProcessObserverCollectExecutableFingerprint(
            F.getConfig({ location: "running-game-store" }).enabledForAllGames,
        ),
        f.A.hasLoadedExperiments && K.length > 0 && (ex(K), (K = []));
}
class eB extends _.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = d.w.get(Y) ?? {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableOverlayV3: {},
            enableDetection: {},
        };
        eo.gameOverrides = {};
        let t = !1;
        if (
            (s()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = eD(e);
                    (0, y.n1)(e) || (eo.gameOverrides[t] = e);
                }),
            (eo.enableOverlay = e.enableOverlay ?? {}),
            (eo.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (eo.enableDetection = e.enableDetection ?? {}),
            eG(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        this.waitFor(D.A, x.A, w.A, f.A, g.A, L.A, v.default),
            (K = e.gamesSeen.filter((e) => !(0, y.n1)(e))),
            this.syncWith([g.A], eF),
            this.syncWith([L.A, D.A, w.A], s().throttle(eM, 1e3)),
            t && ek();
    }
    getVisibleGame() {
        return null == en || eb(en) ? en : null;
    }
    getCurrentGameForAnalytics() {
        return en;
    }
    getCurrentNonGameForAnalytics() {
        return ei;
    }
    getVisibleRunningGames() {
        return Z.filter(eb);
    }
    getRunningGames() {
        return Z;
    }
    getDebugRunningGame() {
        return ee;
    }
    getRunningNonGames() {
        return et;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of Z) null != es[t.exePath] && e.push(es[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => D.A.findGame(e))
            .filter(U.Vq)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        return Z.find((t) => t.pid === e) ?? null;
    }
    getGameForName(e) {
        return Z.find((t) => t.name?.toLowerCase() === e.toLowerCase()) ?? null;
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
        return null == t || t.isLauncher || null == t.id ? null : { ...ed[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != ec && ec === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eE && eE === e;
    }
    canCollectExecutableFingerprintsForRunningGames() {
        return W && F.getConfig({ location: "running-game-store" }).enabledForRunningGames;
    }
    getCandidateGames() {
        return J.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === eo.gameOverrides[eD(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === K.length;
    }
    isGameSeen(e) {
        return eV().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eV();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eD(e);
                n = n.filter((e) => eD(e) !== t);
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
        return eo.gameOverrides[eD(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return H.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = ew(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return H.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = ew(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        return er.find((t) => (0, A.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return z && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eP(e);
    }
    addExecutableTrackedByAnalytics(e) {
        eg.add((0, h.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return q[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return q[e]?.state === "running";
    }
}
let eH = new eB(u.h, {
        RUNNING_GAMES_CHANGE: function (e) {
            ex(Z);
        },
        RUNNING_NON_GAMES_CHANGE: function () {},
        CANDIDATE_GAMES_CHANGE: function (e) {
            J = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            z = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (ec = t), (eE = null);
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            ec = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (eE = t), (ec = null);
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t,
                n = e.pid,
                i = Z.find((e) => e.pid === n);
            if (null == i) {
                let e = J.find((e) => e.pid === n);
                if (null == e) return;
                ((i = { ...e }).hidden = !1), Z.push(i), (ea[(t = eD(i))] = !0);
            } else (t = eD(i)), i.hidden && (ea[t] = !0), (i.hidden = !1);
            (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)),
                (eo.gameOverrides[t] = { ...i, add: !0 }),
                ex(Z),
                eG(),
                ek(),
                ey();
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e,
                r = n !== eo.enableOverlay[eD(t)],
                s = i !== eo.enableOverlayV3[eD(t)];
            r && (eo.enableOverlay[eD(t)] = n),
                s && null != i && (eo.enableOverlayV3[eD(t)] = i),
                ek(),
                !__OVERLAY__ &&
                    null != (null != t.id ? D.A.getDetectableGame(t.id) : null) &&
                    (r && (0, I.Q3)(n, I.OverlayToggledClientSettingType.LEGACY_GAME, t.id ?? null),
                    s && null != i && (0, I.Q3)(i, I.OverlayToggledClientSettingType.OOP_GAME, t.id ?? null));
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = eP(t);
            (eo.enableDetection[eD(t)] = !n),
                ek(),
                P.default.track(B.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            let t = eD(e.game),
                n = eo.gameOverrides[t];
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
            let r = eD(n);
            delete eo.gameOverrides[t],
                (eo.gameOverrides[r] = n),
                eS(eo.enableOverlay, t, r),
                eS(eo.enableDetection, t, r),
                eS(ea, t, r),
                eo.gamesSeen.forEach((n) => {
                    eD(n) === t && (n.name = e.newName);
                });
            let s = !1;
            Z.forEach((n) => {
                eD(n) === t && ((n.name = e.newName), (s = !0));
            }),
                eG(),
                ek(),
                s && ey();
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = eD(e.game);
            delete eo.gameOverrides[t],
                delete eo.enableOverlay[t],
                delete eo.enableDetection[t],
                (eo.gamesSeen = eo.gamesSeen.filter((e) => eD(e) !== t)),
                ea[t] &&
                    (Z.forEach((e) => {
                        t === eD(e) && (e.hidden = !0);
                    }),
                    delete ea[t]),
                Z.some((e) => eD(e) === t) && ey(),
                eG(),
                ek();
        },
        GAMES_DATABASE_UPDATE: el,
        GAMES_DATABASE_FETCH_FAIL: el,
        NON_GAMES_DATABASE_UPDATE: el,
        NON_GAMES_DATABASE_FETCH_FAIL: el,
        GAME_LAUNCH_SUCCESS: function (e) {
            if (__OVERLAY__ || !M.isPlatformEmbedded) return;
            let t = O.Ay.getDiscordUtils().notifyGameLaunched;
            if (null == t) return;
            let n = D.A.getDetectableGame(e.applicationId);
            null != n && t(n.id, n.name, e.pids ?? []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            eG();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            (eA = e.level), (eI = e.intervalSeconds);
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            (eA = null), (eI = null), ef.clear();
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => ({ pid: e.pid, cleanedExePath: (0, h.v)(e.exePath) ?? e.exePath }))
                .filter((e) => {
                    if (ef.has(e.pid) || eg.has(e.cleanedExePath)) return !1;
                    let t = $.some((t) => e.cleanedExePath.includes(t));
                    return t && ef.add(e.pid), t;
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                P.default.track(B.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: $,
                    paths: t,
                    debugging_level: eA,
                    interval_seconds: eI,
                });
        },
        SYSTEM_SERVICE_INITIALIZE: function (e) {
            let { status: t, modules: n } = e;
            for (let e of n) q[e] = t;
        },
        RUNNING_GAME_SET_DEBUG_GAME: function (e) {
            null != ee && (Z = Z.filter((e) => e !== ee)), null != (ee = e.game) && (Z = [ee, ...Z]), ey();
        },
    }),
    eY = eH;
