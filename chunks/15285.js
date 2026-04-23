"use strict";
let r;
n.d(t, { Ay: () => eF, Es: () => eN, Xr: () => eR, Zh: () => eA, hw: () => eO, xU: () => eL }), n(321073), n(667532);
var i = n(735438),
    s = n.n(i),
    a = n(989349),
    o = n.n(a),
    l = n(311907),
    u = n(506774),
    c = n(73153),
    d = n(56562),
    _ = n(573648),
    f = n(306044),
    p = n(626584),
    h = n(49463),
    E = n(639841),
    m = n(830012),
    g = n(810412),
    A = n(211753),
    I = n(206885),
    T = n(41984),
    S = n(763266),
    y = n(847521),
    N = n(760751),
    v = n(189081),
    C = n(287809),
    O = n(194871),
    R = n(954571),
    b = n(927813),
    D = n(25171),
    L = n(403362),
    w = n(723702),
    M = n(837921),
    P = n(9302),
    x = n(953384),
    k = n(973522),
    U = n(862775),
    G = n(652215);
let F = new p.A("RunningGameStore"),
    V = "RunningGameStore",
    B = !__OVERLAY__ && ((0, w.isDesktop)() || I.O),
    H = [],
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
            name: _.A.get(G.fg2.SPOTIFY).name,
        },
    ],
    Y = [],
    W = !0,
    K = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    $ = new Set(),
    z = [],
    q = [],
    X = [],
    Q = null,
    Z = [],
    J = null,
    ee = null,
    et = [],
    en = {},
    er = {},
    ei = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    es = function () {},
    ea = {},
    eo = 0,
    el = null,
    eu = null,
    ec = {},
    ed = {},
    e_ = new Set(),
    ef = new Set(),
    ep = null,
    eh = null,
    eE = new Map(),
    em = new Map();
function eg(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function eA(e) {
    return e;
}
function eI(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eT(e) {
    let t = em.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        r = eE.get(n.toLowerCase());
    if (null != r) return r;
    for (let [t, n] of eE) {
        let r = e.exePath.toLowerCase(),
            i = t.toLowerCase();
        if (r.endsWith(i)) {
            let e = r.length - i.length;
            if (0 === e || "/" === r[e - 1] || "\\" === r[e - 1]) return n;
        }
    }
    return null;
}
function eS(e) {
    let t = eT(e);
    return t?.streamerTool === !0;
}
function ey() {
    if (X.length > 0) {
        let e = J;
        (J = X[0]), null != e && J.pid === e.pid ? (J.start = e.start) : (J.start = Date.now());
    } else J = null;
    let e = [];
    for (let t of X) t.pid in ec || ((ec[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ec)) X.some((t) => t.pid === e.pid) || (t.push(e), delete ec[e.pid]);
    F.info("Running Games Changed", { runningGames: X, added: e, removed: t, previousGames: ec }),
        c.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: X, added: e, removed: t });
}
function eN(e) {
    if ((0, y.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
j.forEach((e) => {
    em.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            eE.set(t.name.toLowerCase(), e);
        });
});
let ev = new Set(["1314395942253756416"]);
function eC(e) {
    let t = null;
    if ("id" in e) t = e.id ?? null;
    else {
        let n = N.A.findGame(e);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && ev.has(t);
}
function eO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [N.A, v.A];
    if (e.isLauncher)
        return {
            source: T.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: T.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in e && !S.A.acquireLock(e.pid))
        return {
            source: T.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: T.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let i = n.findGame(e);
    if (null != i) {
        let e = r.getActiveLibraryApplication(i.id);
        if (null != e)
            return {
                source: T.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: T.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let s = (0, P.supportsOutOfProcess)() && !t,
        a = eC(i ?? e),
        o = A.x.legacyEnabled,
        l = s && !a,
        u = ei.enableOverlay[eN(e)],
        c = ei.enableOverlayV3[eN(e)];
    if (null != u || null != c) {
        let e = null != c ? c : l,
            t = e ? T.Ue.OutOfProcess : T.Ue.Hook;
        return {
            source: e && !a ? T.yp.OOP_DEFAULT : T.yp.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: null != u ? u : o,
            overlayMethod: l ? t : T.Ue.Hook,
            reason: "Enabled from persistent",
        };
    }
    let d = null == e.id ? null : ea[e.id];
    if (null != d) {
        let e = d.enabledOOP ?? l,
            t = d.enabled ?? o,
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
function eR(e) {
    let t = ei.enableDetection[eN(e)];
    return null == t || t;
}
function eb(e) {
    return !e.hidden && eR(e);
}
function eD() {
    u.w.set(V, ei);
}
function eL(e, t, n, r) {
    let i = {
        ...e,
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? o()(new Date(e.lastFocused * b.A.Millis.SECOND)).fromNow()
                : " ",
        overlay: (function (e) {
            let t = ei.enableOverlay[eN(e)],
                n = ei.enableOverlayV3[eN(e)];
            if (null != t || null != n) return t ?? n;
            let r = eO(e);
            return r.enabledLegacy || r.enabledOOP;
        })(e),
        verified: n.isGameInDatabase(e),
        detectable: eR(e),
    };
    return null != e.id && null != ea[e.id] && (i.overlayWarn = ea[e.id].warn), i;
}
function ew() {
    let e = !1;
    return (
        (z = s()
            .values(v.A.libraryApplications)
            .reduce((t, n) => {
                let r = N.A.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of O.A.getLaunchOptions(n.id, n.branchId)) {
                    let s = `${n.id}:${n.branchId}`;
                    $.has(s) || ((e = !0), $.add(s));
                    let { fullExecutablePath: a } = i,
                        o = a.replace(/\\/g, "/").toLowerCase();
                    (en[o] = r.id),
                        t.push({ id: r.id, name: r.name, exePath: o, cmdLine: "", lastFocused: 0, add: !0 });
                }
                return t;
            }, [])),
        e && eM(),
        e
    );
}
function eM() {
    if (!__OVERLAY__ && w.isPlatformEmbedded) {
        let e = [...z, ...s().values(ei.gameOverrides)];
        M.Ay.setGameCandidateOverrides(e);
    }
}
function eP(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                ei.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = ei.gameOverrides[eN(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        if (
                            (t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eN(t) !== eN(e))
                        ) {
                            var n, r;
                            let i, s, a, o;
                            (n = eN(t)),
                                (r = eN(e)),
                                null != (i = ei.gameOverrides[n]) &&
                                    ((ei.gameOverrides[r] = i), delete ei.gameOverrides[n]),
                                null != (s = ei.enableOverlay[n]) &&
                                    ((ei.enableOverlay[r] = s), delete ei.enableOverlay[n]),
                                null != (a = ei.enableOverlayV3[n]) &&
                                    ((ei.enableOverlayV3[r] = a), delete ei.enableOverlayV3[n]),
                                null != (o = ei.enableDetection[n]) &&
                                    ((ei.enableDetection[r] = o), delete ei.enableDetection[n]),
                                (t.exePath = e.exePath);
                        }
                        return eI(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                let t;
                if (e.hidden) return;
                ei.gamesSeen.unshift(
                    ((t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused }),
                    null != e.id && (t.id = e.id),
                    null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId),
                    null != e.name && (t.name = e.name),
                    e.add && (t.add = !0),
                    e.block && (t.block = !0),
                    null != e.distributor && (t.distributor = e.distributor),
                    null != e.gameName && (t.gameName = e.gameName),
                    eI(t, e),
                    t),
                );
            }
        }),
        ei.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eD(),
        D.A.setRecentGames(ex().map((e) => eL(e, eG, N.A, v.A))));
}
function ex() {
    let e = s().values(ei.gameOverrides);
    return ei.gamesSeen.filter((e) => void 0 === ei.gameOverrides[eN(e)]).concat(e);
}
function ek() {
    B && M.Ay.setProcessObserverCollectExecutableFingerprint((0, U.Q)("running-game-store")),
        h.A.hasLoadedExperiments && H.length > 0 && (eP(H), (H = []));
}
B &&
    (es = function () {
        if (!N.A.hasAttemptedFetch || !x.A.hasAttemptedFetch) return !1;
        let e = [],
            t = new Set();
        r = {};
        let n = N.A.games,
            i = x.A.nonGames,
            s = (0, P.supportsOutOfProcess)();
        for (let e of n) {
            let t = eC(e),
                n = (s && !t) || d.gH.enabledOOP,
                r = e.overlay ?? d.gH.enabled;
            ea[e.id] = {
                compatibilityHook: e.overlayCompatibilityHook ?? d.gH.compatibilityHook,
                warn: e.overlayWarn ?? d.gH.warn,
                enabled: r,
                enabledOOP: n,
                allowHook: e.hook ?? d.gH.allowHook,
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
                ...[...n, ...i].filter((e) => !(e.executables ?? []).some((e) => eE.has(e.name.toLowerCase()))),
                ...j,
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
                    Object.keys(i).forEach((t) =>
                        e.push({
                            name: n.name,
                            id: n.id,
                            executables: i[t],
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
            M.Ay.setObservedGamesCallback(
                e,
                !0,
                (e) => {
                    let n = [],
                        i = {},
                        s = [];
                    e = e.filter((e) =>
                        null != e.id && null != x.A.getById(e.id)
                            ? (s.push(e), !1)
                            : ((e.isLauncher = e.isLauncher || t.has(e.exeName)),
                                e.isLauncher && null != e.id && (i[e.id] = e),
                                (e.windowHandle = (function (e, t) {
                                    if (void 0 === t) {
                                        let t = M.Ay.getDiscordUtils();
                                        if (null != t && null != t.getWindowHandleFromPid) {
                                            let n = t.getWindowHandleFromPid(e);
                                            return null != n && "0" !== n ? n : null;
                                        }
                                        return null;
                                    }
                                    return "0" === t ? null : t;
                                })(e.pid, e.windowHandle)),
                                null != eT(e))
                              ? (n.push(e), !1)
                              : !N.A.shouldBlock(e),
                    );
                    let a = n.filter(eS).length;
                    a !== eo && ((eo = a), c.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: eo })),
                        (X = null != Q ? [Q, ...e] : e),
                        (Z = s),
                        (et = n),
                        (r = i),
                        ey(),
                        (ee = Z.length > 0 ? Z[0] : null);
                    let o = [];
                    for (let e of Z) e.pid in ed || ((ed[e.pid] = e), o.push(e));
                    let l = [];
                    for (let e of Object.values(ed)) Z.some((t) => t.pid === e.pid) || (l.push(e), delete ed[e.pid]);
                    F.info("Running Non-Games Changed", {
                        runningNonGames: Z,
                        added: o,
                        removed: l,
                        previousNonGames: ed,
                    }),
                        c.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: Z, added: o, removed: l });
                },
                C.default.getCurrentUser()?.id,
            ),
            eM(),
            M.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, r] of e.entries()) {
                        let e = t[n],
                            i = N.A.findGame(r),
                            s = N.A.findGame(e),
                            a = (e?.id !== "4294967293" ? e?.id : s?.id) ?? "";
                        R.default.track(G.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: G.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: r.name,
                            orig_game_name_v1: r.origGameName,
                            game_id_v1: i?.id,
                            distributor_v1: r.distributor,
                            verified_v1: (0, k.PQ)(r.exePath, i?.executables ?? []),
                            is_launcher_v1: r.isLauncher,
                            game_detection_enabled_v1: eR(r),
                            executable_path_v1: (0, k.Ic)(r.exePath),
                            distributor_game_id_v1: r.sku,
                            hidden_by_distributor_v1: r.hidden,
                            game_metadata_v1: (0, y.MT)(r),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: a,
                            distributor_v2: e.distributor,
                            verified_v2: (0, k.PQ)(e.exePath, s?.executables ?? []),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eR(e),
                            executable_path_v2: (0, k.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, y.MT)(e),
                        });
                    }
            }),
            M.Ay.setGameDetectionErrorCallback((e, t, n, r, i) => {});
    });
class eU extends l.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = u.w.get(V) ?? {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableOverlayV3: {},
            enableDetection: {},
        };
        ei.gameOverrides = {};
        let t = !1;
        if (
            (s()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = eN(e);
                    (0, y.n1)(e) || (ei.gameOverrides[t] = e);
                }),
            (ei.enableOverlay = e.enableOverlay ?? {}),
            (ei.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (ei.enableDetection = e.enableDetection ?? {}),
            eM(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        this.waitFor(N.A, x.A, O.A, h.A, E.A, v.A, C.default),
            (H = e.gamesSeen.filter((e) => !(0, y.n1)(e))),
            this.syncWith([E.A], ek),
            this.syncWith([v.A, N.A, O.A], s().throttle(ew, 1e3)),
            t && eD();
    }
    getVisibleGame() {
        return null == J || eb(J) ? J : null;
    }
    getCurrentGameForAnalytics() {
        return J;
    }
    getCurrentNonGameForAnalytics() {
        return ee;
    }
    getVisibleRunningGames() {
        return X.filter(eb);
    }
    getRunningGames() {
        return X;
    }
    getDebugRunningGame() {
        return Q;
    }
    getRunningNonGames() {
        return Z;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of X) null != en[t.exePath] && e.push(en[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => N.A.findGame(e))
            .filter(L.Vq)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        return X.find((t) => t.pid === e) ?? null;
    }
    getGameForName(e) {
        return X.find((t) => t.name?.toLowerCase() === e.toLowerCase()) ?? null;
    }
    getGameOrTransformedSubgameForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...ea[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != el && el === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eu && eu === e;
    }
    canCollectExecutableFingerprintsForRunningGames() {
        return B && (0, U.M)("running-game-store");
    }
    getCandidateGames() {
        return q.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === ei.gameOverrides[eN(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === H.length;
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
                let t = eN(e);
                n = n.filter((e) => eN(e) !== t);
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
        return ei.gameOverrides[eN(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return F.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eO(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return F.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eO(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        return et.find((t) => (0, m.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return W && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eR(e);
    }
    addExecutableTrackedByAnalytics(e) {
        ef.add((0, f.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return K[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return K[e]?.state === "running";
    }
}
let eG = new eU(c.h, {
        RUNNING_GAMES_CHANGE: function (e) {
            eP(X);
        },
        RUNNING_NON_GAMES_CHANGE: function () {},
        CANDIDATE_GAMES_CHANGE: function (e) {
            q = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            W = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (el = t), (eu = null);
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            el = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (eu = t), (el = null);
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t,
                n = e.pid,
                r = X.find((e) => e.pid === n);
            if (null == r) {
                let e = q.find((e) => e.pid === n);
                if (null == e) return;
                ((r = { ...e }).hidden = !1), X.push(r), (er[(t = eN(r))] = !0);
            } else (t = eN(r)), r.hidden && (er[t] = !0), (r.hidden = !1);
            (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)),
                (ei.gameOverrides[t] = { ...r, add: !0 }),
                eP(X),
                eM(),
                eD(),
                ey();
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
                i = n !== ei.enableOverlay[eN(t)],
                s = r !== ei.enableOverlayV3[eN(t)];
            i && (ei.enableOverlay[eN(t)] = n),
                s && null != r && (ei.enableOverlayV3[eN(t)] = r),
                eD(),
                !__OVERLAY__ &&
                    null != (null != t.id ? N.A.getDetectableGame(t.id) : null) &&
                    (i && (0, g.Q3)(n, g.OverlayToggledClientSettingType.LEGACY_GAME, t.id ?? null),
                    s && null != r && (0, g.Q3)(r, g.OverlayToggledClientSettingType.OOP_GAME, t.id ?? null));
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = eR(t);
            (ei.enableDetection[eN(t)] = !n),
                eD(),
                R.default.track(G.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            let t = eN(e.game),
                n = ei.gameOverrides[t];
            if (null == n) {
                var r;
                (n = {
                    name: (r = e.game).name,
                    exePath: r.exePath,
                    cmdLine: r.cmdLine,
                    lastFocused: r.lastFocused,
                }).add = !0;
            }
            n.name = e.newName;
            let i = eN(n);
            delete ei.gameOverrides[t],
                (ei.gameOverrides[i] = n),
                eg(ei.enableOverlay, t, i),
                eg(ei.enableDetection, t, i),
                eg(er, t, i),
                ei.gamesSeen.forEach((n) => {
                    eN(n) === t && (n.name = e.newName);
                });
            let s = !1;
            X.forEach((n) => {
                eN(n) === t && ((n.name = e.newName), (s = !0));
            }),
                eM(),
                eD(),
                s && ey();
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = eN(e.game);
            delete ei.gameOverrides[t],
                delete ei.enableOverlay[t],
                delete ei.enableDetection[t],
                (ei.gamesSeen = ei.gamesSeen.filter((e) => eN(e) !== t)),
                er[t] &&
                    (X.forEach((e) => {
                        t === eN(e) && (e.hidden = !0);
                    }),
                    delete er[t]),
                X.some((e) => eN(e) === t) && ey(),
                eM(),
                eD();
        },
        GAMES_DATABASE_UPDATE: es,
        GAMES_DATABASE_FETCH_FAIL: es,
        NON_GAMES_DATABASE_UPDATE: es,
        NON_GAMES_DATABASE_FETCH_FAIL: es,
        GAME_LAUNCH_SUCCESS: function (e) {
            if (__OVERLAY__ || !w.isPlatformEmbedded) return;
            let t = M.Ay.getDiscordUtils().notifyGameLaunched;
            if (null == t) return;
            let n = N.A.getDetectableGame(e.applicationId);
            null != n && t(n.id, n.name, e.pids ?? []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            eM();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            (ep = e.level), (eh = e.intervalSeconds);
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            (ep = null), (eh = null), e_.clear();
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => ({ pid: e.pid, cleanedExePath: (0, f.v)(e.exePath) ?? e.exePath }))
                .filter((e) => {
                    if (e_.has(e.pid) || ef.has(e.cleanedExePath)) return !1;
                    let t = Y.some((t) => e.cleanedExePath.includes(t));
                    return t && e_.add(e.pid), t;
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                R.default.track(G.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: Y,
                    paths: t,
                    debugging_level: ep,
                    interval_seconds: eh,
                });
        },
        SYSTEM_SERVICE_INITIALIZE: function (e) {
            let { status: t, modules: n } = e;
            for (let e of n) K[e] = t;
        },
        RUNNING_GAME_SET_DEBUG_GAME: function (e) {
            null != Q && (X = X.filter((e) => e !== Q)), null != (Q = e.game) && (X = [Q, ...X]), ey();
        },
    }),
    eF = eG;
