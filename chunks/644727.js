let i;
(n.d(t, { Ay: () => e4, Es: () => eB, hw: () => eK, Xr: () => e$, Zh: () => eM, xU: () => eq }), n(321073), n(667532));
var r = n(435558),
    a = n.n(r),
    s = n(536637),
    l = n.n(s),
    o = n(570138),
    d = n(989441),
    c = n(167789),
    u = n(855986),
    _ = n(506774),
    E = n(73153),
    A = n(56562),
    f = n(573648),
    h = n(306044),
    I = n(626584),
    p = n(343446),
    m = n(148883),
    g = n(945810),
    T = n(311043),
    S = n(830012),
    N = n(211753),
    C = n(206885),
    O = n(41984),
    R = n(918825),
    L = n(439372),
    y = n(253400);
class D extends L.A {
    ownedLocks = new Set();
    acquireLock = (e) => {
        if (this.ownedLocks.has(e)) return !0;
        let t = `discord-overlay-global-owner-lock-${e}`;
        return !1 !== y.Ay.AcquireGlobalLock(t) && (this.ownedLocks.add(e), !0);
    };
}
let b = new D();
var v = n(977556),
    P = n(760751),
    M = n(189081),
    U = n(287809),
    w = n(659096),
    G = n(129230),
    x = n(927813),
    k = n(292702),
    F = n(403362),
    B = n(723702),
    V = n(9302),
    H = n(953384),
    j = n(973522),
    W = n(863160);
let Y = (0, g.mj)({
        name: "2026-11-linux-steam-sku-detection",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    K = (0, g.mj)({
        name: "2026-11-mac-steam-sku-detection",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var $ = n(652215);
let X = new I.A("RunningGameStore"),
    z = "RunningGameStore",
    q = !__OVERLAY__ && ((0, B.xl)() || C.O),
    Q = [],
    J = [
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
            name: f.A.get($.fg2.SPOTIFY).name,
        },
    ],
    Z = [],
    ee = !0,
    et = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    en = new Set(),
    ei = [],
    er = [],
    ea = [],
    es = null,
    el = [],
    eo = null,
    ed = null,
    ec = new W.Ig(),
    eu = new Map(),
    e_ = null,
    eE = [],
    eA = {},
    ef = {},
    eh = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    eI = function () {},
    ep = null,
    em = null,
    eg = 0,
    eT = null,
    eS = null,
    eN = {},
    eC = {},
    eO = new Set(),
    eR = new Set(),
    eL = null,
    ey = null,
    eD = null,
    eb = new Map(),
    ev = new Map();
function eP(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function eM(e) {
    return e;
}
function eU(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function ew(e) {
    let t = ev.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        i = eb.get(n.toLowerCase());
    if (null != i) return i;
    for (let [t, n] of eb) {
        let i = e.exePath.toLowerCase(),
            r = t.toLowerCase();
        if (i.endsWith(r)) {
            let e = i.length - r.length;
            if (0 === e || "/" === i[e - 1] || "\\" === i[e - 1]) return n;
        }
    }
    return null;
}
function eG(e) {
    let t = ew(e);
    return t?.streamerTool === !0;
}
function ex() {
    let e = ed;
    null != (ed = ea.find(eX) ?? null) && (ed.start = null != e && e.pid === ed.pid ? e.start : Date.now());
}
function ek() {
    let { games: e, changed: t } = ec.resolve(ea);
    return (e !== ea && ((ea = e), eF()), t);
}
function eF() {
    if ((ea = ec.resolve(ea).games).length > 0) {
        let e = eo;
        ((eo = ea[0]), null != e && eo.pid === e.pid ? (eo.start = e.start) : (eo.start = Date.now()));
    } else eo = null;
    ex();
    let e = [];
    for (let t of ea) t.pid in eN || ((eN[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(eN)) ea.some((t) => t.pid === e.pid) || (t.push(e), delete eN[e.pid], eu.delete(e.pid));
    (X.info("Running Games Changed", { runningGames: ea, added: e, removed: t, previousGames: eN }),
        E.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: ea, added: e, removed: t }));
}
function eB(e) {
    if ((0, v.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
J.forEach((e) => {
    (ev.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            eb.set(t.name.toLowerCase(), e);
        }));
});
let eV = new Set(["1314395942253756416"]);
function eH(e) {
    return null != e && eV.has(e);
}
function ej(e) {
    var t;
    let n,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.A;
    if (null == e) return;
    let r = i.getGame(e);
    return null != r
        ? ((t = (0, V.T6)()),
          (n = eH(r.id)),
          {
              compatibilityHook: r.overlayCompatibilityHook ?? A.gH.compatibilityHook,
              warn: r.overlayWarn ?? A.gH.warn,
              enabled: r.overlay ?? A.gH.enabled,
              enabledOOP: (t && !n) || A.gH.enabledOOP,
              allowHook: r.hook ?? A.gH.allowHook,
              supportsOutOfProcessOverlay: r.supportsOutOfProcessOverlay ?? A.gH.supportsOutOfProcessOverlay,
          })
        : void 0;
}
let eW = new Set();
function eY() {
    let e = new Set(ea.map((e) => (0, W.Un)(e).id).filter((e) => null != e && null != T.A.getGame(e))),
        t = e.size !== eW.size || [...e].some((e) => !eW.has(e));
    return ((eW = e), t);
}
function eK(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [i, r, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [P.A, M.A, T.A],
        s = (0, W.Un)(e);
    if (s.isLauncher)
        return {
            source: O.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: O.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in s && !b.acquireLock(s.pid))
        return {
            source: O.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: O.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let l = i.findGame(s);
    if (null != l) {
        let e = r.getActiveLibraryApplication(l.id);
        if (null != e)
            return {
                source: O.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: O.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let o = (0, V.T6)() && !n,
        d = eH("id" in (t = l ?? s) ? (t.id ?? null) : (P.A.findGame(t)?.id ?? null)),
        c = N.x.legacyEnabled,
        u = o && !d,
        _ = eh.enableOverlay[eB(s)],
        E = eh.enableOverlayV3[eB(s)];
    if (null != _ || null != E) {
        let e = null != E ? E : u,
            t = e ? O.Ue.OutOfProcess : O.Ue.Hook;
        return {
            source: e && !d ? O.yp.OOP_DEFAULT : O.yp.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: null != _ ? _ : c,
            overlayMethod: u ? t : O.Ue.Hook,
            reason: "Enabled from persistent",
        };
    }
    let A = ej(s.id, a);
    if (null != A) {
        let e = A.enabledOOP,
            t = A.enabled,
            n = e ? O.Ue.OutOfProcess : O.Ue.Hook;
        return {
            source: e && !d ? O.yp.OOP_DEFAULT_DATABASE : O.yp.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: u ? n : O.Ue.Hook,
            reason: "Enabled from game record",
        };
    }
    return {
        source: O.yp.DEFAULT,
        enabledOOP: u,
        enabledLegacy: !1,
        overlayMethod: u ? O.Ue.OutOfProcess : O.Ue.Disabled,
        reason: "Default enablement",
    };
}
function e$(e) {
    let t = eh.enableDetection[eB(e)] ?? (null != e.processGame ? eh.enableDetection[eB((0, W.Un)(e))] : void 0);
    return null == t || t;
}
function eX(e) {
    return !e.hidden && e$(e);
}
function ez() {
    _.w.set(z, eh);
}
function eq(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : T.A,
        a = {
            ...e,
            played:
                null != e.lastFocused && 0 !== e.lastFocused
                    ? l()(new Date(e.lastFocused * x.A.Millis.SECOND)).fromNow()
                    : " ",
            overlay: (function (e) {
                let t = (0, W.Un)(e),
                    n = eh.enableOverlay[eB(t)],
                    i = eh.enableOverlayV3[eB(t)];
                if (null != n || null != i) return n ?? i;
                let r = eK(t);
                return r.enabledLegacy || r.enabledOOP;
            })(e),
            verified: n.isGameInDatabase(e),
            detectable: e$(e),
        },
        s = ej(e.id, r);
    return (null != s && (a.overlayWarn = s.warn), a);
}
function eQ() {
    let e = !1;
    return (
        (ei = a()
            .values(M.A.libraryApplications)
            .reduce((t, n) => {
                let i = P.A.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of w.A.getLaunchOptions(n.id, n.branchId)) {
                    let a = `${n.id}:${n.branchId}`;
                    en.has(a) || ((e = !0), en.add(a));
                    let { fullExecutablePath: s } = r,
                        l = s.replace(/\\/g, "/").toLowerCase();
                    ((eA[l] = i.id),
                        t.push({ id: i.id, name: i.name, exePath: l, cmdLine: "", lastFocused: 0, add: !0 }));
                }
                return t;
            }, [])),
        e && eJ(),
        e
    );
}
function eJ() {
    if (!__OVERLAY__ && B.isPlatformEmbedded) {
        let e = [...ei, ...a().values(eh.gameOverrides)];
        y.Ay.setGameCandidateOverrides(e);
    }
}
function eZ(e, t) {
    let n = eh.gameOverrides[e];
    null != n && ((eh.gameOverrides[t] = n), delete eh.gameOverrides[e]);
    let i = eh.enableOverlay[e];
    null != i && ((eh.enableOverlay[t] = i), delete eh.enableOverlay[e]);
    let r = eh.enableOverlayV3[e];
    null != r && ((eh.enableOverlayV3[t] = r), delete eh.enableOverlayV3[e]);
    let a = eh.enableDetection[e];
    null != a && ((eh.enableDetection[t] = a), delete eh.enableDetection[e]);
}
function e0(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                (!(function (e) {
                    if (null == e.processGame || !("pid" in e) || "number" != typeof e.pid) return;
                    let t = eu.get(e.pid);
                    null != t &&
                        (eu.delete(e.pid),
                        (eh.gamesSeen = eh.gamesSeen.filter((e) => null != e.processGame || eB(e) !== t)));
                })(e),
                !(function (e) {
                    if (
                        e.distributor !== d.D.STEAM ||
                        eh.gamesSeen.some((t) => t.name === e.name || (null != t.id && t.id === e.id))
                    )
                        return;
                    let t = eh.gamesSeen.find(
                        (t) =>
                            null == t.id && null == t.distributor && null == t.processGame && t.exePath === e.exePath,
                    );
                    null != t && (eZ(eB(t), eB(e)), (t.name = e.name), (t.id = e.id));
                })(e),
                eh.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = null == e.processGame ? eh.gameOverrides[eB(e)] : null;
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.processGame !== e.processGame && (t.processGame = e.processGame),
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eB(t) !== eB(e) && (eZ(eB(t), eB(e)), (t.exePath = e.exePath)),
                            eU(t, e),
                            !0
                        );
                    }
                    return !1;
                }))
            );
            else {
                let t;
                if (e.hidden) return;
                (eh.gamesSeen.unshift(
                    ((t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused }),
                    null != e.id && (t.id = e.id),
                    null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId),
                    null != e.name && (t.name = e.name),
                    e.add && (t.add = !0),
                    e.block && (t.block = !0),
                    null != e.distributor && (t.distributor = e.distributor),
                    null != e.gameName && (t.gameName = e.gameName),
                    null != e.processGame && (t.processGame = e.processGame),
                    eU(t, e),
                    t),
                ),
                    "number" == typeof e.pid && null == e.processGame && eu.set(e.pid, eB(e)));
            }
        }),
        eh.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ez(),
        k.A.setRecentGames(e1().map((e) => eq(e, e7, P.A, M.A))));
}
function e1() {
    let e = a().values(eh.gameOverrides);
    return eh.gamesSeen.filter((e) => void 0 === eh.gameOverrides[eB(e)]).concat(e);
}
function e2() {
    let e = (0, B.cX)()
        ? K.getConfig({ location: "RunningGameStore" }).enabled
        : (0, B.j9)()
          ? Y.getConfig({ location: "RunningGameStore" }).enabled
          : null;
    null != e && e !== ep && ((ep = e), y.Ay.setProcessObserverSteamSkuDetection(e));
}
function e3() {
    return (null != ep && e2(), !1);
}
if (q) {
    let e = function () {
        let e = [],
            t = new Set();
        i = {};
        let n = P.A.games,
            r = H.A.nonGames,
            a = new Set();
        (J.forEach((e) => {
            (e.executables ?? []).forEach((e) => {
                a.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...r].filter((e) => !(e.executables ?? []).some((e) => eb.has(e.name.toLowerCase()))),
                ...J,
            ].forEach((n) => {
                let i = null != n.executables ? n.executables : [],
                    r = {};
                if (
                    (i.forEach((e) => {
                        let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
                        (null == r[n] && (r[n] = []), r[n].push(e.name), e.isLauncher && t.add(e.name));
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
            e2(),
            y.Ay.setObservedGamesCallback(
                e,
                !0,
                (e) => {
                    let n = [],
                        r = {},
                        a = [],
                        s = [],
                        l = e.length,
                        o = [];
                    for (let i of e) {
                        if (null != i.id && null != H.A.getById(i.id)) {
                            (a.push(i), s.push({ game: i, outcome: { kind: "non_game" } }));
                            continue;
                        }
                        ((i.isLauncher = i.isLauncher || t.has(i.exeName)),
                            i.isLauncher && null != i.id && (r[i.id] = i),
                            (i.windowHandle = (function (e, t) {
                                if (void 0 === t) {
                                    let t = y.Ay.getDiscordUtils();
                                    if (null != t && null != t.getWindowHandleFromPid) {
                                        let n = t.getWindowHandleFromPid(e);
                                        return null != n && "0" !== n ? n : null;
                                    }
                                    return null;
                                }
                                return "0" === t ? null : t;
                            })(i.pid, i.windowHandle)));
                        let e = ew(i);
                        if (null != e) {
                            (n.push(i),
                                s.push({
                                    game: i,
                                    outcome: {
                                        kind: "observed_app",
                                        appName: e.name,
                                        streamerTool: e.streamerTool ?? !1,
                                    },
                                }));
                            continue;
                        }
                        if (P.A.shouldBlock(i)) {
                            let e = P.A.getBlockReason(i);
                            s.push({
                                game: i,
                                outcome: {
                                    kind: "blocked",
                                    matchedExe: e?.matchedExe ?? null,
                                    matchedPattern: e?.matchedPattern ?? null,
                                },
                            });
                            continue;
                        }
                        (o.push(i), s.push({ game: i, outcome: { kind: "passed" } }));
                    }
                    ((eD = { timestamp: Date.now(), totalFromNative: l, entries: s }), (e = o));
                    let d = n.filter(eG).length;
                    for (let t of (d !== eg &&
                        ((eg = d), E.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: eg })),
                    (ea = null != es ? [es, ...e] : e))) {
                        let e = eh.gameOverrides[eB(t)];
                        e?.add === !0 && t.hidden && ((ef[eB(t)] = !0), (t.hidden = !1));
                    }
                    ((el = a), (eE = n), (i = r), eF(), (e_ = el.length > 0 ? el[0] : null));
                    let c = [];
                    for (let e of el) e.pid in eC || ((eC[e.pid] = e), c.push(e));
                    let u = [];
                    for (let e of Object.values(eC)) el.some((t) => t.pid === e.pid) || (u.push(e), delete eC[e.pid]);
                    (X.info("Running Non-Games Changed", {
                        runningNonGames: el,
                        added: c,
                        removed: u,
                        previousNonGames: eC,
                    }),
                        E.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: el, added: c, removed: u }));
                },
                U.default.getCurrentUser()?.id,
            ),
            eJ(),
            y.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, i] of e.entries()) {
                        let e = t[n],
                            r = P.A.findGame(i),
                            a = P.A.findGame(e),
                            s = (e?.id !== "4294967293" ? e?.id : a?.id) ?? "";
                        G.default.track($.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: o.y.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: i.name,
                            orig_game_name_v1: i.origGameName,
                            game_id_v1: r?.id,
                            distributor_v1: i.distributor,
                            verified_v1: (0, j.PQ)(i.exePath, r?.executables ?? []),
                            is_launcher_v1: i.isLauncher,
                            game_detection_enabled_v1: e$(i),
                            executable_path_v1: (0, j.Ic)(i.exePath),
                            distributor_game_id_v1: i.sku,
                            hidden_by_distributor_v1: i.hidden,
                            game_metadata_v1: (0, v.MT)(i),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: s,
                            distributor_v2: e.distributor,
                            verified_v2: (0, j.PQ)(e.exePath, a?.executables ?? []),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: e$(e),
                            executable_path_v2: (0, j.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, v.MT)(e),
                        });
                    }
            }),
            y.Ay.setGameDetectionErrorCallback((e, t, n, i, r) => {}));
    };
    eI = function () {
        return (
            !!P.A.hasAttemptedFetch &&
            !!H.A.hasAttemptedFetch &&
            (null != em && em(),
            (em = (0, c.O)(
                () => {
                    ((em = null), e(), e7.emitChange());
                },
                { timeout: 2e3 },
            )),
            !1)
        );
    };
}
function e6() {
    p.A.hasLoadedExperiments && Q.length > 0 && (e0(Q), (Q = []));
}
class e5 extends u.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = _.w.get(z) ?? {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableOverlayV3: {},
            enableDetection: {},
        };
        eh.gameOverrides = {};
        let t = !1;
        if (
            (a()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = eB(e);
                    (0, v.n1)(e) || (eh.gameOverrides[t] = e);
                }),
            (eh.enableOverlay = e.enableOverlay ?? {}),
            (eh.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (eh.enableDetection = e.enableDetection ?? {}),
            eJ(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        (this.waitFor(g.Bt, P.A, H.A, w.A, p.A, m.A, T.A, M.A, U.default),
            (Q = e.gamesSeen.filter((e) => !(0, v.n1)(e))),
            this.syncWith([m.A], e6),
            this.syncWith([g.Bt], e3),
            this.syncWith([M.A, P.A, w.A], a().throttle(eQ, 1e3)),
            this.syncWith([T.A], eY),
            t && ez());
    }
    getVisibleGame() {
        return ed;
    }
    getCurrentGameForAnalytics() {
        return eo;
    }
    getCurrentNonGameForAnalytics() {
        return e_;
    }
    getVisibleRunningGames() {
        return ea.filter(eX);
    }
    getRunningGames() {
        return ea;
    }
    getDebugRunningGame() {
        return es;
    }
    getDetectionDebug() {
        return eD;
    }
    getRunningNonGames() {
        return el;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of ea) null != eA[t.exePath] && e.push(eA[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => P.A.findGame(e))
            .filter(F.Vq)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        return ea.find((t) => t.pid === e) ?? null;
    }
    getSdkResolutionForPID(e) {
        return ec.getResolution(e);
    }
    getGameForName(e) {
        return ea.find((t) => t.name?.toLowerCase() === e.toLowerCase()) ?? null;
    }
    getGameOrTransformedSubgameForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? (0, W.Un)(t) : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        if (null != t) {
            let { id: e } = (0, W.Un)(t);
            return null != e ? i[e] : null;
        }
        return null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e),
            n = null != t ? (0, W.Un)(t) : null;
        if (null == n || n.isLauncher || null == n.id) return null;
        let i = ej(n.id);
        return null != i ? { ...i } : null;
    }
    shouldElevateProcessForPID(e) {
        return null != eT && eT === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eS && eS === e;
    }
    canCollectExecutableFingerprintsForRunningGames() {
        return q;
    }
    getCandidateGames() {
        return er.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === eh.gameOverrides[eB(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === Q.length;
    }
    isGameSeen(e) {
        return e1().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = e1();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eB(e);
                n = n.filter((e) => eB(e) !== t);
            }
        }
        return (t && n.sort((e, t) => t.lastFocused - e.lastFocused), n);
    }
    getSeenGameByName(e) {
        return eh.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return eE.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(eh.gameOverrides);
    }
    getOverrideForGame(e) {
        return null == e.processGame ? eh.gameOverrides[eB(e)] : void 0;
    }
    getOverlayEnabledForGame(e) {
        let t = (0, W.Un)(e);
        if (t.isLauncher || t.elevated || t.sandboxed)
            return (X.verbose("getOverlayEnabledForGame: Overlay not supported.", t), !1);
        let n = eK(t);
        return n.enabledLegacy || n.enabledOOP;
    }
    getGameOverlayStatus(e) {
        let t = (0, W.Un)(e);
        if (t.isLauncher || t.elevated || t.sandboxed)
            return (X.verbose("getGameOverlayStatus: Overlay not supported.", t), null);
        let n = eK(t);
        return n.enabledLegacy || n.enabledOOP ? n : null;
    }
    getObservedAppNameForWindow(e) {
        return eE.find((t) => (0, S.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return ee && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return e$(e);
    }
    addExecutableTrackedByAnalytics(e) {
        eR.add((0, h.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return et[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return et[e]?.state === "running";
    }
}
let e7 = new e5(E.h, {
        RUNNING_GAMES_CHANGE: function (e) {
            e0(ea);
        },
        RUNNING_NON_GAMES_CHANGE: function () {},
        CANDIDATE_GAMES_CHANGE: function (e) {
            er = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            ee = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ((eT = t), (eS = null));
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            eT = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ((eS = t), (eT = null));
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t,
                n = e.pid,
                i = ea.find((e) => e.pid === n);
            if (i?.processGame != null) return !1;
            if (null == i) {
                let e = er.find((e) => e.pid === n);
                if (null == e) return;
                (((i = { ...e }).hidden = !1), ea.push(i), (ef[(t = eB(i))] = !0));
            } else ((t = eB(i)), i.hidden && (ef[t] = !0), (i.hidden = !1));
            ((null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)),
                (eh.gameOverrides[t] = { ...i, add: !0 }),
                e0(ea),
                eJ(),
                ez(),
                eF());
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e,
                r = (0, W.Un)(t),
                a = n !== eh.enableOverlay[eB(r)],
                s = i !== eh.enableOverlayV3[eB(r)];
            (a && (eh.enableOverlay[eB(r)] = n),
                s && null != i && (eh.enableOverlayV3[eB(r)] = i),
                ez(),
                !__OVERLAY__ &&
                    null != (null != r.id ? P.A.getDetectableGame(r.id) : null) &&
                    (a && (0, R.Q)(n, R.OverlayToggledClientSettingType.LEGACY_GAME, r.id ?? null),
                    s && null != i && (0, R.Q)(i, R.OverlayToggledClientSettingType.OOP_GAME, r.id ?? null)));
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = e$(t);
            ((eh.enableDetection[eB(t)] = !n),
                ez(),
                ex(),
                G.default.track($.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n }));
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            if (null != e.game.processGame) return !1;
            let t = eB(e.game),
                n = eh.gameOverrides[t];
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
            let r = eB(n);
            (delete eh.gameOverrides[t],
                (eh.gameOverrides[r] = n),
                eP(eh.enableOverlay, t, r),
                eP(eh.enableDetection, t, r),
                eP(ef, t, r),
                eh.gamesSeen.forEach((n) => {
                    eB(n) === t && (n.name = e.newName);
                }));
            let a = !1;
            (ea.forEach((n) => {
                eB(n) === t && ((n.name = e.newName), (a = !0));
            }),
                eJ(),
                ez(),
                a && eF());
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = eB(e.game);
            (delete eh.gameOverrides[t],
                delete eh.enableOverlay[t],
                delete eh.enableDetection[t],
                (eh.gamesSeen = eh.gamesSeen.filter((e) => eB(e) !== t)),
                ef[t] &&
                    (ea.forEach((e) => {
                        t === eB(e) && (e.hidden = !0);
                    }),
                    delete ef[t]),
                ea.some((e) => eB(e) === t) && eF(),
                eJ(),
                ez());
        },
        GAMES_DATABASE_UPDATE: function () {
            return (eI(), ek());
        },
        GAMES_DATABASE_FETCH_FAIL: eI,
        NON_GAMES_DATABASE_UPDATE: eI,
        NON_GAMES_DATABASE_FETCH_FAIL: eI,
        GAME_LAUNCH_SUCCESS: function (e) {
            if (__OVERLAY__ || !B.isPlatformEmbedded) return;
            let t = y.Ay.getDiscordUtils().notifyGameLaunched;
            if (null == t) return;
            let n = P.A.getDetectableGame(e.applicationId);
            null != n && t(n.id, n.name, e.pids ?? []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            eJ();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            ((eL = e.level), (ey = e.intervalSeconds));
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            ((eL = null), (ey = null), eO.clear());
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => ({ pid: e.pid, cleanedExePath: (0, h.v)(e.exePath) ?? e.exePath }))
                .filter((e) => {
                    if (eO.has(e.pid) || eR.has(e.cleanedExePath)) return !1;
                    let t = Z.some((t) => e.cleanedExePath.includes(t));
                    return (t && eO.add(e.pid), t);
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                G.default.track($.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: Z,
                    paths: t,
                    debugging_level: eL,
                    interval_seconds: ey,
                });
        },
        SYSTEM_SERVICE_INITIALIZE: function (e) {
            let { status: t, modules: n } = e;
            for (let e of n) et[e] = t;
        },
        RUNNING_GAME_SET_DEBUG_GAME: function (e) {
            (null != es && (ea = ea.filter((e) => e !== es)), null != (es = e.game) && (ea = [es, ...ea]), eF());
        },
        SOCIAL_SDK_GAMES_UPDATE: function (e) {
            let { canonicalGameIdByPid: t } = e;
            return (ec.setCanonicalGameIds(t), ek());
        },
    }),
    e4 = e7;
