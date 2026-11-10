let i;
(n.d(t, { Ay: () => e7, Es: () => eF, hw: () => eY, Xr: () => eK, Zh: () => eP, xU: () => ez }), n(321073), n(667532));
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
    T = n(945810),
    g = n(311043),
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
let Y = (0, T.mj)({
    name: "2026-11-mac-steam-sku-detection",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var K = n(652215);
let $ = new I.A("RunningGameStore"),
    X = "RunningGameStore",
    z = !__OVERLAY__ && ((0, B.xl)() || C.O),
    q = [],
    Q = [
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
            name: f.A.get(K.fg2.SPOTIFY).name,
        },
    ],
    Z = [],
    J = !0,
    ee = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    et = new Set(),
    en = [],
    ei = [],
    er = [],
    ea = null,
    es = [],
    el = null,
    eo = null,
    ed = new W.Ig(),
    ec = new Map(),
    eu = null,
    e_ = [],
    eE = {},
    eA = {},
    ef = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    eh = function () {},
    eI = null,
    ep = null,
    em = 0,
    eT = null,
    eg = null,
    eS = {},
    eN = {},
    eC = new Set(),
    eO = new Set(),
    eR = null,
    eL = null,
    ey = null,
    eD = new Map(),
    eb = new Map();
function ev(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function eP(e) {
    return e;
}
function eM(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eU(e) {
    let t = eb.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        i = eD.get(n.toLowerCase());
    if (null != i) return i;
    for (let [t, n] of eD) {
        let i = e.exePath.toLowerCase(),
            r = t.toLowerCase();
        if (i.endsWith(r)) {
            let e = i.length - r.length;
            if (0 === e || "/" === i[e - 1] || "\\" === i[e - 1]) return n;
        }
    }
    return null;
}
function ew(e) {
    let t = eU(e);
    return t?.streamerTool === !0;
}
function eG() {
    let e = eo;
    null != (eo = er.find(e$) ?? null) && (eo.start = null != e && e.pid === eo.pid ? e.start : Date.now());
}
function ex() {
    let { games: e, changed: t } = ed.resolve(er);
    return (e !== er && ((er = e), ek()), t);
}
function ek() {
    if ((er = ed.resolve(er).games).length > 0) {
        let e = el;
        ((el = er[0]), null != e && el.pid === e.pid ? (el.start = e.start) : (el.start = Date.now()));
    } else el = null;
    eG();
    let e = [];
    for (let t of er) t.pid in eS || ((eS[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(eS)) er.some((t) => t.pid === e.pid) || (t.push(e), delete eS[e.pid], ec.delete(e.pid));
    ($.info("Running Games Changed", { runningGames: er, added: e, removed: t, previousGames: eS }),
        E.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: er, added: e, removed: t }));
}
function eF(e) {
    if ((0, v.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
Q.forEach((e) => {
    (eb.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            eD.set(t.name.toLowerCase(), e);
        }));
});
let eB = new Set(["1314395942253756416"]);
function eV(e) {
    return null != e && eB.has(e);
}
function eH(e) {
    var t;
    let n,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.A;
    if (null == e) return;
    let r = i.getGame(e);
    return null != r
        ? ((t = (0, V.T6)()),
          (n = eV(r.id)),
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
let ej = new Set();
function eW() {
    let e = new Set(er.map((e) => (0, W.Un)(e).id).filter((e) => null != e && null != g.A.getGame(e))),
        t = e.size !== ej.size || [...e].some((e) => !ej.has(e));
    return ((ej = e), t);
}
function eY(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [i, r, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [P.A, M.A, g.A],
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
        d = eV("id" in (t = l ?? s) ? (t.id ?? null) : (P.A.findGame(t)?.id ?? null)),
        c = N.x.legacyEnabled,
        u = o && !d,
        _ = ef.enableOverlay[eF(s)],
        E = ef.enableOverlayV3[eF(s)];
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
    let A = eH(s.id, a);
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
function eK(e) {
    let t = ef.enableDetection[eF(e)] ?? (null != e.processGame ? ef.enableDetection[eF((0, W.Un)(e))] : void 0);
    return null == t || t;
}
function e$(e) {
    return !e.hidden && eK(e);
}
function eX() {
    _.w.set(X, ef);
}
function ez(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : g.A,
        a = {
            ...e,
            played:
                null != e.lastFocused && 0 !== e.lastFocused
                    ? l()(new Date(e.lastFocused * x.A.Millis.SECOND)).fromNow()
                    : " ",
            overlay: (function (e) {
                let t = (0, W.Un)(e),
                    n = ef.enableOverlay[eF(t)],
                    i = ef.enableOverlayV3[eF(t)];
                if (null != n || null != i) return n ?? i;
                let r = eY(t);
                return r.enabledLegacy || r.enabledOOP;
            })(e),
            verified: n.isGameInDatabase(e),
            detectable: eK(e),
        },
        s = eH(e.id, r);
    return (null != s && (a.overlayWarn = s.warn), a);
}
function eq() {
    let e = !1;
    return (
        (en = a()
            .values(M.A.libraryApplications)
            .reduce((t, n) => {
                let i = P.A.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of w.A.getLaunchOptions(n.id, n.branchId)) {
                    let a = `${n.id}:${n.branchId}`;
                    et.has(a) || ((e = !0), et.add(a));
                    let { fullExecutablePath: s } = r,
                        l = s.replace(/\\/g, "/").toLowerCase();
                    ((eE[l] = i.id),
                        t.push({ id: i.id, name: i.name, exePath: l, cmdLine: "", lastFocused: 0, add: !0 }));
                }
                return t;
            }, [])),
        e && eQ(),
        e
    );
}
function eQ() {
    if (!__OVERLAY__ && B.isPlatformEmbedded) {
        let e = [...en, ...a().values(ef.gameOverrides)];
        y.Ay.setGameCandidateOverrides(e);
    }
}
function eZ(e, t) {
    let n = ef.gameOverrides[e];
    null != n && ((ef.gameOverrides[t] = n), delete ef.gameOverrides[e]);
    let i = ef.enableOverlay[e];
    null != i && ((ef.enableOverlay[t] = i), delete ef.enableOverlay[e]);
    let r = ef.enableOverlayV3[e];
    null != r && ((ef.enableOverlayV3[t] = r), delete ef.enableOverlayV3[e]);
    let a = ef.enableDetection[e];
    null != a && ((ef.enableDetection[t] = a), delete ef.enableDetection[e]);
}
function eJ(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                (!(function (e) {
                    if (null == e.processGame || !("pid" in e) || "number" != typeof e.pid) return;
                    let t = ec.get(e.pid);
                    null != t &&
                        (ec.delete(e.pid),
                        (ef.gamesSeen = ef.gamesSeen.filter((e) => null != e.processGame || eF(e) !== t)));
                })(e),
                !(function (e) {
                    if (
                        e.distributor !== d.D.STEAM ||
                        ef.gamesSeen.some((t) => t.name === e.name || (null != t.id && t.id === e.id))
                    )
                        return;
                    let t = ef.gamesSeen.find(
                        (t) =>
                            null == t.id && null == t.distributor && null == t.processGame && t.exePath === e.exePath,
                    );
                    null != t && (eZ(eF(t), eF(e)), (t.name = e.name), (t.id = e.id));
                })(e),
                ef.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = null == e.processGame ? ef.gameOverrides[eF(e)] : null;
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.processGame !== e.processGame && (t.processGame = e.processGame),
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eF(t) !== eF(e) && (eZ(eF(t), eF(e)), (t.exePath = e.exePath)),
                            eM(t, e),
                            !0
                        );
                    }
                    return !1;
                }))
            );
            else {
                let t;
                if (e.hidden) return;
                (ef.gamesSeen.unshift(
                    ((t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused }),
                    null != e.id && (t.id = e.id),
                    null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId),
                    null != e.name && (t.name = e.name),
                    e.add && (t.add = !0),
                    e.block && (t.block = !0),
                    null != e.distributor && (t.distributor = e.distributor),
                    null != e.gameName && (t.gameName = e.gameName),
                    null != e.processGame && (t.processGame = e.processGame),
                    eM(t, e),
                    t),
                ),
                    "number" == typeof e.pid && null == e.processGame && ec.set(e.pid, eF(e)));
            }
        }),
        ef.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eX(),
        k.A.setRecentGames(e0().map((e) => ez(e, e5, P.A, M.A))));
}
function e0() {
    let e = a().values(ef.gameOverrides);
    return ef.gamesSeen.filter((e) => void 0 === ef.gameOverrides[eF(e)]).concat(e);
}
function e1() {
    if (!(0, B.cX)()) return;
    let { enabled: e } = Y.getConfig({ location: "RunningGameStore" });
    e !== eI && ((eI = e), y.Ay.setProcessObserverSteamSkuDetection(e));
}
function e2() {
    return (null != eI && e1(), !1);
}
if (z) {
    let e = function () {
        let e = [],
            t = new Set();
        i = {};
        let n = P.A.games,
            r = H.A.nonGames,
            a = new Set();
        (Q.forEach((e) => {
            (e.executables ?? []).forEach((e) => {
                a.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...r].filter((e) => !(e.executables ?? []).some((e) => eD.has(e.name.toLowerCase()))),
                ...Q,
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
            e1(),
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
                        let e = eU(i);
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
                    ((ey = { timestamp: Date.now(), totalFromNative: l, entries: s }), (e = o));
                    let d = n.filter(ew).length;
                    for (let t of (d !== em &&
                        ((em = d), E.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: em })),
                    (er = null != ea ? [ea, ...e] : e))) {
                        let e = ef.gameOverrides[eF(t)];
                        e?.add === !0 && t.hidden && ((eA[eF(t)] = !0), (t.hidden = !1));
                    }
                    ((es = a), (e_ = n), (i = r), ek(), (eu = es.length > 0 ? es[0] : null));
                    let c = [];
                    for (let e of es) e.pid in eN || ((eN[e.pid] = e), c.push(e));
                    let u = [];
                    for (let e of Object.values(eN)) es.some((t) => t.pid === e.pid) || (u.push(e), delete eN[e.pid]);
                    ($.info("Running Non-Games Changed", {
                        runningNonGames: es,
                        added: c,
                        removed: u,
                        previousNonGames: eN,
                    }),
                        E.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: es, added: c, removed: u }));
                },
                U.default.getCurrentUser()?.id,
            ),
            eQ(),
            y.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, i] of e.entries()) {
                        let e = t[n],
                            r = P.A.findGame(i),
                            a = P.A.findGame(e),
                            s = (e?.id !== "4294967293" ? e?.id : a?.id) ?? "";
                        G.default.track(K.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: o.y.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: i.name,
                            orig_game_name_v1: i.origGameName,
                            game_id_v1: r?.id,
                            distributor_v1: i.distributor,
                            verified_v1: (0, j.PQ)(i.exePath, r?.executables ?? []),
                            is_launcher_v1: i.isLauncher,
                            game_detection_enabled_v1: eK(i),
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
                            game_detection_enabled_v2: eK(e),
                            executable_path_v2: (0, j.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, v.MT)(e),
                        });
                    }
            }),
            y.Ay.setGameDetectionErrorCallback((e, t, n, i, r) => {}));
    };
    eh = function () {
        return (
            !!P.A.hasAttemptedFetch &&
            !!H.A.hasAttemptedFetch &&
            (null != ep && ep(),
            (ep = (0, c.O)(
                () => {
                    ((ep = null), e(), e5.emitChange());
                },
                { timeout: 2e3 },
            )),
            !1)
        );
    };
}
function e3() {
    p.A.hasLoadedExperiments && q.length > 0 && (eJ(q), (q = []));
}
class e6 extends u.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = _.w.get(X) ?? {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableOverlayV3: {},
            enableDetection: {},
        };
        ef.gameOverrides = {};
        let t = !1;
        if (
            (a()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = eF(e);
                    (0, v.n1)(e) || (ef.gameOverrides[t] = e);
                }),
            (ef.enableOverlay = e.enableOverlay ?? {}),
            (ef.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (ef.enableDetection = e.enableDetection ?? {}),
            eQ(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        (this.waitFor(T.Bt, P.A, H.A, w.A, p.A, m.A, g.A, M.A, U.default),
            (q = e.gamesSeen.filter((e) => !(0, v.n1)(e))),
            this.syncWith([m.A], e3),
            this.syncWith([T.Bt], e2),
            this.syncWith([M.A, P.A, w.A], a().throttle(eq, 1e3)),
            this.syncWith([g.A], eW),
            t && eX());
    }
    getVisibleGame() {
        return eo;
    }
    getCurrentGameForAnalytics() {
        return el;
    }
    getCurrentNonGameForAnalytics() {
        return eu;
    }
    getVisibleRunningGames() {
        return er.filter(e$);
    }
    getRunningGames() {
        return er;
    }
    getDebugRunningGame() {
        return ea;
    }
    getDetectionDebug() {
        return ey;
    }
    getRunningNonGames() {
        return es;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of er) null != eE[t.exePath] && e.push(eE[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => P.A.findGame(e))
            .filter(F.Vq)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        return er.find((t) => t.pid === e) ?? null;
    }
    getSdkResolutionForPID(e) {
        return ed.getResolution(e);
    }
    getGameForName(e) {
        return er.find((t) => t.name?.toLowerCase() === e.toLowerCase()) ?? null;
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
        let i = eH(n.id);
        return null != i ? { ...i } : null;
    }
    shouldElevateProcessForPID(e) {
        return null != eT && eT === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eg && eg === e;
    }
    canCollectExecutableFingerprintsForRunningGames() {
        return z;
    }
    getCandidateGames() {
        return ei.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === ef.gameOverrides[eF(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === q.length;
    }
    isGameSeen(e) {
        return e0().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = e0();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eF(e);
                n = n.filter((e) => eF(e) !== t);
            }
        }
        return (t && n.sort((e, t) => t.lastFocused - e.lastFocused), n);
    }
    getSeenGameByName(e) {
        return ef.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return e_.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(ef.gameOverrides);
    }
    getOverrideForGame(e) {
        return null == e.processGame ? ef.gameOverrides[eF(e)] : void 0;
    }
    getOverlayEnabledForGame(e) {
        let t = (0, W.Un)(e);
        if (t.isLauncher || t.elevated || t.sandboxed)
            return ($.verbose("getOverlayEnabledForGame: Overlay not supported.", t), !1);
        let n = eY(t);
        return n.enabledLegacy || n.enabledOOP;
    }
    getGameOverlayStatus(e) {
        let t = (0, W.Un)(e);
        if (t.isLauncher || t.elevated || t.sandboxed)
            return ($.verbose("getGameOverlayStatus: Overlay not supported.", t), null);
        let n = eY(t);
        return n.enabledLegacy || n.enabledOOP ? n : null;
    }
    getObservedAppNameForWindow(e) {
        return e_.find((t) => (0, S.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return J && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eK(e);
    }
    addExecutableTrackedByAnalytics(e) {
        eO.add((0, h.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return ee[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return ee[e]?.state === "running";
    }
}
let e5 = new e6(E.h, {
        RUNNING_GAMES_CHANGE: function (e) {
            eJ(er);
        },
        RUNNING_NON_GAMES_CHANGE: function () {},
        CANDIDATE_GAMES_CHANGE: function (e) {
            ei = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            J = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ((eT = t), (eg = null));
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            eT = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ((eg = t), (eT = null));
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t,
                n = e.pid,
                i = er.find((e) => e.pid === n);
            if (i?.processGame != null) return !1;
            if (null == i) {
                let e = ei.find((e) => e.pid === n);
                if (null == e) return;
                (((i = { ...e }).hidden = !1), er.push(i), (eA[(t = eF(i))] = !0));
            } else ((t = eF(i)), i.hidden && (eA[t] = !0), (i.hidden = !1));
            ((null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)),
                (ef.gameOverrides[t] = { ...i, add: !0 }),
                eJ(er),
                eQ(),
                eX(),
                ek());
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e,
                r = (0, W.Un)(t),
                a = n !== ef.enableOverlay[eF(r)],
                s = i !== ef.enableOverlayV3[eF(r)];
            (a && (ef.enableOverlay[eF(r)] = n),
                s && null != i && (ef.enableOverlayV3[eF(r)] = i),
                eX(),
                !__OVERLAY__ &&
                    null != (null != r.id ? P.A.getDetectableGame(r.id) : null) &&
                    (a && (0, R.Q)(n, R.OverlayToggledClientSettingType.LEGACY_GAME, r.id ?? null),
                    s && null != i && (0, R.Q)(i, R.OverlayToggledClientSettingType.OOP_GAME, r.id ?? null)));
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = eK(t);
            ((ef.enableDetection[eF(t)] = !n),
                eX(),
                eG(),
                G.default.track(K.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n }));
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            if (null != e.game.processGame) return !1;
            let t = eF(e.game),
                n = ef.gameOverrides[t];
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
            let r = eF(n);
            (delete ef.gameOverrides[t],
                (ef.gameOverrides[r] = n),
                ev(ef.enableOverlay, t, r),
                ev(ef.enableDetection, t, r),
                ev(eA, t, r),
                ef.gamesSeen.forEach((n) => {
                    eF(n) === t && (n.name = e.newName);
                }));
            let a = !1;
            (er.forEach((n) => {
                eF(n) === t && ((n.name = e.newName), (a = !0));
            }),
                eQ(),
                eX(),
                a && ek());
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = eF(e.game);
            (delete ef.gameOverrides[t],
                delete ef.enableOverlay[t],
                delete ef.enableDetection[t],
                (ef.gamesSeen = ef.gamesSeen.filter((e) => eF(e) !== t)),
                eA[t] &&
                    (er.forEach((e) => {
                        t === eF(e) && (e.hidden = !0);
                    }),
                    delete eA[t]),
                er.some((e) => eF(e) === t) && ek(),
                eQ(),
                eX());
        },
        GAMES_DATABASE_UPDATE: function () {
            return (eh(), ex());
        },
        GAMES_DATABASE_FETCH_FAIL: eh,
        NON_GAMES_DATABASE_UPDATE: eh,
        NON_GAMES_DATABASE_FETCH_FAIL: eh,
        GAME_LAUNCH_SUCCESS: function (e) {
            if (__OVERLAY__ || !B.isPlatformEmbedded) return;
            let t = y.Ay.getDiscordUtils().notifyGameLaunched;
            if (null == t) return;
            let n = P.A.getDetectableGame(e.applicationId);
            null != n && t(n.id, n.name, e.pids ?? []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            eQ();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            ((eR = e.level), (eL = e.intervalSeconds));
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            ((eR = null), (eL = null), eC.clear());
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => ({ pid: e.pid, cleanedExePath: (0, h.v)(e.exePath) ?? e.exePath }))
                .filter((e) => {
                    if (eC.has(e.pid) || eO.has(e.cleanedExePath)) return !1;
                    let t = Z.some((t) => e.cleanedExePath.includes(t));
                    return (t && eC.add(e.pid), t);
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                G.default.track(K.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: Z,
                    paths: t,
                    debugging_level: eR,
                    interval_seconds: eL,
                });
        },
        SYSTEM_SERVICE_INITIALIZE: function (e) {
            let { status: t, modules: n } = e;
            for (let e of n) ee[e] = t;
        },
        RUNNING_GAME_SET_DEBUG_GAME: function (e) {
            (null != ea && (er = er.filter((e) => e !== ea)), null != (ea = e.game) && (er = [ea, ...er]), ek());
        },
        SOCIAL_SDK_GAMES_UPDATE: function (e) {
            let { canonicalGameIdByPid: t } = e;
            return (ed.setCanonicalGameIds(t), ex());
        },
    }),
    e7 = e5;
