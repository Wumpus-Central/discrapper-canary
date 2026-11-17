let i;
(n.d(t, { Ay: () => e5, Es: () => ek, hw: () => eW, Xr: () => eY, Zh: () => ev, xU: () => eX }), n(321073), n(667532));
var r = n(435558),
    a = n.n(r),
    s = n(536637),
    l = n.n(s),
    o = n(989441),
    d = n(167789),
    c = n(855986),
    u = n(506774),
    _ = n(73153),
    E = n(56562),
    A = n(573648),
    f = n(306044),
    h = n(626584),
    I = n(343446),
    p = n(148883),
    m = n(945810),
    g = n(311043),
    T = n(830012),
    S = n(211753),
    N = n(206885),
    C = n(41984),
    O = n(918825),
    R = n(439372),
    L = n(253400);
class y extends R.A {
    ownedLocks = new Set();
    acquireLock = (e) => {
        if (this.ownedLocks.has(e)) return !0;
        let t = `discord-overlay-global-owner-lock-${e}`;
        return !1 !== L.Ay.AcquireGlobalLock(t) && (this.ownedLocks.add(e), !0);
    };
}
let D = new y();
var b = n(977556),
    v = n(760751),
    P = n(189081),
    M = n(287809),
    U = n(659096),
    w = n(129230),
    G = n(927813),
    x = n(292702),
    k = n(403362),
    F = n(723702),
    B = n(9302),
    V = n(953384),
    H = n(863160);
let j = (0, m.mj)({
        name: "2026-11-linux-steam-sku-detection",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    W = (0, m.mj)({
        name: "2026-11-mac-steam-sku-detection",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var Y = n(652215);
let K = new h.A("RunningGameStore"),
    $ = "RunningGameStore",
    X = !__OVERLAY__ && ((0, F.xl)() || N.O),
    z = [],
    q = [
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
            name: A.A.get(Y.fg2.SPOTIFY).name,
        },
    ],
    Q = [],
    J = !0,
    Z = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    ee = new Set(),
    et = [],
    en = [],
    ei = [],
    er = null,
    ea = [],
    es = null,
    el = null,
    eo = new H.Ig(),
    ed = new Map(),
    ec = null,
    eu = [],
    e_ = {},
    eE = {},
    eA = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    ef = function () {},
    eh = null,
    eI = null,
    ep = 0,
    em = null,
    eg = null,
    eT = {},
    eS = {},
    eN = new Set(),
    eC = new Set(),
    eO = null,
    eR = null,
    eL = null,
    ey = new Map(),
    eD = new Map();
function eb(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function ev(e) {
    return e;
}
function eP(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eM(e) {
    let t = eD.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        i = ey.get(n.toLowerCase());
    if (null != i) return i;
    for (let [t, n] of ey) {
        let i = e.exePath.toLowerCase(),
            r = t.toLowerCase();
        if (i.endsWith(r)) {
            let e = i.length - r.length;
            if (0 === e || "/" === i[e - 1] || "\\" === i[e - 1]) return n;
        }
    }
    return null;
}
function eU(e) {
    let t = eM(e);
    return t?.streamerTool === !0;
}
function ew() {
    let e = el;
    null != (el = ei.find(eK) ?? null) && (el.start = null != e && e.pid === el.pid ? e.start : Date.now());
}
function eG() {
    let { games: e, changed: t } = eo.resolve(ei);
    return (e !== ei && ((ei = e), ex()), t);
}
function ex() {
    if ((ei = eo.resolve(ei).games).length > 0) {
        let e = es;
        ((es = ei[0]), null != e && es.pid === e.pid ? (es.start = e.start) : (es.start = Date.now()));
    } else es = null;
    ew();
    let e = [];
    for (let t of ei) t.pid in eT || ((eT[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(eT)) ei.some((t) => t.pid === e.pid) || (t.push(e), delete eT[e.pid], ed.delete(e.pid));
    (K.info("Running Games Changed", { runningGames: ei, added: e, removed: t, previousGames: eT }),
        _.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: ei, added: e, removed: t }));
}
function ek(e) {
    if ((0, b.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
q.forEach((e) => {
    (eD.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            ey.set(t.name.toLowerCase(), e);
        }));
});
let eF = new Set(["1314395942253756416"]);
function eB(e) {
    return null != e && eF.has(e);
}
function eV(e) {
    var t;
    let n,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.A;
    if (null == e) return;
    let r = i.getGame(e);
    return null != r
        ? ((t = (0, B.T6)()),
          (n = eB(r.id)),
          {
              compatibilityHook: r.overlayCompatibilityHook ?? E.gH.compatibilityHook,
              warn: r.overlayWarn ?? E.gH.warn,
              enabled: r.overlay ?? E.gH.enabled,
              enabledOOP: (t && !n) || E.gH.enabledOOP,
              allowHook: r.hook ?? E.gH.allowHook,
              supportsOutOfProcessOverlay: r.supportsOutOfProcessOverlay ?? E.gH.supportsOutOfProcessOverlay,
          })
        : void 0;
}
let eH = new Set();
function ej() {
    let e = new Set(ei.map((e) => (0, H.Un)(e).id).filter((e) => null != e && null != g.A.getGame(e))),
        t = e.size !== eH.size || [...e].some((e) => !eH.has(e));
    return ((eH = e), t);
}
function eW(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [i, r, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [v.A, P.A, g.A],
        s = (0, H.Un)(e);
    if (s.isLauncher)
        return {
            source: C.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: C.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in s && !D.acquireLock(s.pid))
        return {
            source: C.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: C.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let l = i.findGame(s);
    if (null != l) {
        let e = r.getActiveLibraryApplication(l.id);
        if (null != e)
            return {
                source: C.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: C.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let o = (0, B.T6)() && !n,
        d = eB("id" in (t = l ?? s) ? (t.id ?? null) : (v.A.findGame(t)?.id ?? null)),
        c = S.x.legacyEnabled,
        u = o && !d,
        _ = eA.enableOverlay[ek(s)],
        E = eA.enableOverlayV3[ek(s)];
    if (null != _ || null != E) {
        let e = null != E ? E : u,
            t = e ? C.Ue.OutOfProcess : C.Ue.Hook;
        return {
            source: e && !d ? C.yp.OOP_DEFAULT : C.yp.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: null != _ ? _ : c,
            overlayMethod: u ? t : C.Ue.Hook,
            reason: "Enabled from persistent",
        };
    }
    let A = eV(s.id, a);
    if (null != A) {
        let e = A.enabledOOP,
            t = A.enabled,
            n = e ? C.Ue.OutOfProcess : C.Ue.Hook;
        return {
            source: e && !d ? C.yp.OOP_DEFAULT_DATABASE : C.yp.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: u ? n : C.Ue.Hook,
            reason: "Enabled from game record",
        };
    }
    return {
        source: C.yp.DEFAULT,
        enabledOOP: u,
        enabledLegacy: !1,
        overlayMethod: u ? C.Ue.OutOfProcess : C.Ue.Disabled,
        reason: "Default enablement",
    };
}
function eY(e) {
    let t = eA.enableDetection[ek(e)] ?? (null != e.processGame ? eA.enableDetection[ek((0, H.Un)(e))] : void 0);
    return null == t || t;
}
function eK(e) {
    return !e.hidden && eY(e);
}
function e$() {
    u.w.set($, eA);
}
function eX(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : g.A,
        a = {
            ...e,
            played:
                null != e.lastFocused && 0 !== e.lastFocused
                    ? l()(new Date(e.lastFocused * G.A.Millis.SECOND)).fromNow()
                    : " ",
            overlay: (function (e) {
                let t = (0, H.Un)(e),
                    n = eA.enableOverlay[ek(t)],
                    i = eA.enableOverlayV3[ek(t)];
                if (null != n || null != i) return n ?? i;
                let r = eW(t);
                return r.enabledLegacy || r.enabledOOP;
            })(e),
            verified: n.isGameInDatabase(e),
            detectable: eY(e),
        },
        s = eV(e.id, r);
    return (null != s && (a.overlayWarn = s.warn), a);
}
function ez() {
    let e = !1;
    return (
        (et = a()
            .values(P.A.libraryApplications)
            .reduce((t, n) => {
                let i = v.A.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of U.A.getLaunchOptions(n.id, n.branchId)) {
                    let a = `${n.id}:${n.branchId}`;
                    ee.has(a) || ((e = !0), ee.add(a));
                    let { fullExecutablePath: s } = r,
                        l = s.replace(/\\/g, "/").toLowerCase();
                    ((e_[l] = i.id),
                        t.push({ id: i.id, name: i.name, exePath: l, cmdLine: "", lastFocused: 0, add: !0 }));
                }
                return t;
            }, [])),
        e && eq(),
        e
    );
}
function eq() {
    if (!__OVERLAY__ && F.isPlatformEmbedded) {
        let e = [...et, ...a().values(eA.gameOverrides)];
        L.Ay.setGameCandidateOverrides(e);
    }
}
function eQ(e, t) {
    let n = eA.gameOverrides[e];
    null != n && ((eA.gameOverrides[t] = n), delete eA.gameOverrides[e]);
    let i = eA.enableOverlay[e];
    null != i && ((eA.enableOverlay[t] = i), delete eA.enableOverlay[e]);
    let r = eA.enableOverlayV3[e];
    null != r && ((eA.enableOverlayV3[t] = r), delete eA.enableOverlayV3[e]);
    let a = eA.enableDetection[e];
    null != a && ((eA.enableDetection[t] = a), delete eA.enableDetection[e]);
}
function eJ(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                (!(function (e) {
                    if (null == e.processGame || !("pid" in e) || "number" != typeof e.pid) return;
                    let t = ed.get(e.pid);
                    null != t &&
                        (ed.delete(e.pid),
                        (eA.gamesSeen = eA.gamesSeen.filter((e) => null != e.processGame || ek(e) !== t)));
                })(e),
                !(function (e) {
                    if (
                        e.distributor !== o.D.STEAM ||
                        eA.gamesSeen.some((t) => t.name === e.name || (null != t.id && t.id === e.id))
                    )
                        return;
                    let t = eA.gamesSeen.find(
                        (t) =>
                            null == t.id && null == t.distributor && null == t.processGame && t.exePath === e.exePath,
                    );
                    null != t && (eQ(ek(t), ek(e)), (t.name = e.name), (t.id = e.id));
                })(e),
                eA.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = null == e.processGame ? eA.gameOverrides[ek(e)] : null;
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.processGame !== e.processGame && (t.processGame = e.processGame),
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && ek(t) !== ek(e) && (eQ(ek(t), ek(e)), (t.exePath = e.exePath)),
                            eP(t, e),
                            !0
                        );
                    }
                    return !1;
                }))
            );
            else {
                let t;
                if (e.hidden) return;
                (eA.gamesSeen.unshift(
                    ((t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused }),
                    null != e.id && (t.id = e.id),
                    null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId),
                    null != e.name && (t.name = e.name),
                    e.add && (t.add = !0),
                    e.block && (t.block = !0),
                    null != e.distributor && (t.distributor = e.distributor),
                    null != e.gameName && (t.gameName = e.gameName),
                    null != e.processGame && (t.processGame = e.processGame),
                    eP(t, e),
                    t),
                ),
                    "number" == typeof e.pid && null == e.processGame && ed.set(e.pid, ek(e)));
            }
        }),
        eA.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        e$(),
        x.A.setRecentGames(eZ().map((e) => eX(e, e6, v.A, P.A))));
}
function eZ() {
    let e = a().values(eA.gameOverrides);
    return eA.gamesSeen.filter((e) => void 0 === eA.gameOverrides[ek(e)]).concat(e);
}
function e0() {
    let e = (0, F.cX)()
        ? W.getConfig({ location: "RunningGameStore" }).enabled
        : (0, F.j9)()
          ? j.getConfig({ location: "RunningGameStore" }).enabled
          : null;
    null != e && e !== eh && ((eh = e), L.Ay.setProcessObserverSteamSkuDetection(e));
}
function e1() {
    return (null != eh && e0(), !1);
}
if (X) {
    let e,
        t,
        n = function () {
            let e = [],
                t = new Set();
            i = {};
            let n = v.A.games,
                r = V.A.nonGames,
                a = new Set();
            (q.forEach((e) => {
                (e.executables ?? []).forEach((e) => {
                    a.add(e.name.toLowerCase());
                });
            }),
                [
                    ...[...n, ...r].filter((e) => !(e.executables ?? []).some((e) => ey.has(e.name.toLowerCase()))),
                    ...q,
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
                e0(),
                L.Ay.setObservedGamesCallback(
                    e,
                    (e) => {
                        let n = [],
                            r = {},
                            a = [],
                            s = [],
                            l = e.length,
                            o = [];
                        for (let i of e) {
                            if (null != i.id && null != V.A.getById(i.id)) {
                                (a.push(i), s.push({ game: i, outcome: { kind: "non_game" } }));
                                continue;
                            }
                            ((i.isLauncher = i.isLauncher || t.has(i.exeName)),
                                i.isLauncher && null != i.id && (r[i.id] = i),
                                (i.windowHandle = (function (e, t) {
                                    if (void 0 === t) {
                                        let t = L.Ay.getDiscordUtils();
                                        if (null != t && null != t.getWindowHandleFromPid) {
                                            let n = t.getWindowHandleFromPid(e);
                                            return null != n && "0" !== n ? n : null;
                                        }
                                        return null;
                                    }
                                    return "0" === t ? null : t;
                                })(i.pid, i.windowHandle)));
                            let e = eM(i);
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
                            if (v.A.shouldBlock(i)) {
                                let e = v.A.getBlockReason(i);
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
                        ((eL = { timestamp: Date.now(), totalFromNative: l, entries: s }), (e = o));
                        let d = n.filter(eU).length;
                        for (let t of (d !== ep &&
                            ((ep = d), _.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: ep })),
                        (ei = null != er ? [er, ...e] : e))) {
                            let e = eA.gameOverrides[ek(t)];
                            e?.add === !0 && t.hidden && ((eE[ek(t)] = !0), (t.hidden = !1));
                        }
                        ((ea = a), (eu = n), (i = r), ex(), (ec = ea.length > 0 ? ea[0] : null));
                        let c = [];
                        for (let e of ea) e.pid in eS || ((eS[e.pid] = e), c.push(e));
                        let u = [];
                        for (let e of Object.values(eS))
                            ea.some((t) => t.pid === e.pid) || (u.push(e), delete eS[e.pid]);
                        (K.info("Running Non-Games Changed", {
                            runningNonGames: ea,
                            added: c,
                            removed: u,
                            previousNonGames: eS,
                        }),
                            _.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: ea, added: c, removed: u }));
                    },
                    M.default.getCurrentUser()?.id,
                ),
                eq(),
                L.Ay.setGameDetectionErrorCallback((e, t, n, i, r) => {}));
        };
    ef = function () {
        return (
            !!v.A.hasAttemptedFetch &&
            !!V.A.hasAttemptedFetch &&
            (e !== v.A.games || t !== V.A.nonGames) &&
            (null != eI && eI(),
            (eI = (0, d.O)(
                () => {
                    ((eI = null), n(), (e = v.A.games), (t = V.A.nonGames), e6.emitChange());
                },
                { timeout: 2e3 },
            )),
            !1)
        );
    };
}
function e2() {
    I.A.hasLoadedExperiments && z.length > 0 && (eJ(z), (z = []));
}
class e3 extends c.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = u.w.get($) ?? {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableOverlayV3: {},
            enableDetection: {},
        };
        eA.gameOverrides = {};
        let t = !1;
        if (
            (a()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = ek(e);
                    (0, b.n1)(e) || (eA.gameOverrides[t] = e);
                }),
            (eA.enableOverlay = e.enableOverlay ?? {}),
            (eA.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (eA.enableDetection = e.enableDetection ?? {}),
            eq(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        (this.waitFor(m.Bt, v.A, V.A, U.A, I.A, p.A, g.A, P.A, M.default),
            (z = e.gamesSeen.filter((e) => !(0, b.n1)(e))),
            this.syncWith([p.A], e2),
            this.syncWith([m.Bt], e1),
            this.syncWith([P.A, v.A, U.A], a().throttle(ez, 1e3)),
            this.syncWith([g.A], ej),
            t && e$());
    }
    getVisibleGame() {
        return el;
    }
    getCurrentGameForAnalytics() {
        return es;
    }
    getCurrentNonGameForAnalytics() {
        return ec;
    }
    getVisibleRunningGames() {
        return ei.filter(eK);
    }
    getRunningGames() {
        return ei;
    }
    getDebugRunningGame() {
        return er;
    }
    getDetectionDebug() {
        return eL;
    }
    getRunningNonGames() {
        return ea;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of ei) null != e_[t.exePath] && e.push(e_[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => v.A.findGame(e))
            .filter(k.Vq)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        return ei.find((t) => t.pid === e) ?? null;
    }
    getSdkResolutionForPID(e) {
        return eo.getResolution(e);
    }
    getGameForName(e) {
        return ei.find((t) => t.name?.toLowerCase() === e.toLowerCase()) ?? null;
    }
    getGameOrTransformedSubgameForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? (0, H.Un)(t) : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        if (null != t) {
            let { id: e } = (0, H.Un)(t);
            return null != e ? i[e] : null;
        }
        return null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e),
            n = null != t ? (0, H.Un)(t) : null;
        if (null == n || n.isLauncher || null == n.id) return null;
        let i = eV(n.id);
        return null != i ? { ...i } : null;
    }
    shouldElevateProcessForPID(e) {
        return null != em && em === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eg && eg === e;
    }
    canCollectExecutableFingerprintsForRunningGames() {
        return X;
    }
    getCandidateGames() {
        return en.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === eA.gameOverrides[ek(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === z.length;
    }
    isGameSeen(e) {
        return eZ().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eZ();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = ek(e);
                n = n.filter((e) => ek(e) !== t);
            }
        }
        return (t && n.sort((e, t) => t.lastFocused - e.lastFocused), n);
    }
    getSeenGameByName(e) {
        return eA.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return eu.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(eA.gameOverrides);
    }
    getOverrideForGame(e) {
        return null == e.processGame ? eA.gameOverrides[ek(e)] : void 0;
    }
    getOverlayEnabledForGame(e) {
        let t = (0, H.Un)(e);
        if (t.isLauncher || t.elevated || t.sandboxed)
            return (K.verbose("getOverlayEnabledForGame: Overlay not supported.", t), !1);
        let n = eW(t);
        return n.enabledLegacy || n.enabledOOP;
    }
    getGameOverlayStatus(e) {
        let t = (0, H.Un)(e);
        if (t.isLauncher || t.elevated || t.sandboxed)
            return (K.verbose("getGameOverlayStatus: Overlay not supported.", t), null);
        let n = eW(t);
        return n.enabledLegacy || n.enabledOOP ? n : null;
    }
    getObservedAppNameForWindow(e) {
        return eu.find((t) => (0, T.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return J && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eY(e);
    }
    addExecutableTrackedByAnalytics(e) {
        eC.add((0, f.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return Z[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return Z[e]?.state === "running";
    }
}
let e6 = new e3(_.h, {
        RUNNING_GAMES_CHANGE: function (e) {
            eJ(ei);
        },
        RUNNING_NON_GAMES_CHANGE: function () {},
        CANDIDATE_GAMES_CHANGE: function (e) {
            en = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            J = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ((em = t), (eg = null));
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            em = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ((eg = t), (em = null));
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t,
                n = e.pid,
                i = ei.find((e) => e.pid === n);
            if (i?.processGame != null) return !1;
            if (null == i) {
                let e = en.find((e) => e.pid === n);
                if (null == e) return;
                (((i = { ...e }).hidden = !1), ei.push(i), (eE[(t = ek(i))] = !0));
            } else ((t = ek(i)), i.hidden && (eE[t] = !0), (i.hidden = !1));
            ((null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)),
                (eA.gameOverrides[t] = { ...i, add: !0 }),
                eJ(ei),
                eq(),
                e$(),
                ex());
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e,
                r = (0, H.Un)(t),
                a = n !== eA.enableOverlay[ek(r)],
                s = i !== eA.enableOverlayV3[ek(r)];
            (a && (eA.enableOverlay[ek(r)] = n),
                s && null != i && (eA.enableOverlayV3[ek(r)] = i),
                e$(),
                !__OVERLAY__ &&
                    null != (null != r.id ? v.A.getDetectableGame(r.id) : null) &&
                    (a && (0, O.Q)(n, O.OverlayToggledClientSettingType.LEGACY_GAME, r.id ?? null),
                    s && null != i && (0, O.Q)(i, O.OverlayToggledClientSettingType.OOP_GAME, r.id ?? null)));
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = eY(t);
            ((eA.enableDetection[ek(t)] = !n),
                e$(),
                ew(),
                w.default.track(Y.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n }));
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            if (null != e.game.processGame) return !1;
            let t = ek(e.game),
                n = eA.gameOverrides[t];
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
            let r = ek(n);
            (delete eA.gameOverrides[t],
                (eA.gameOverrides[r] = n),
                eb(eA.enableOverlay, t, r),
                eb(eA.enableDetection, t, r),
                eb(eE, t, r),
                eA.gamesSeen.forEach((n) => {
                    ek(n) === t && (n.name = e.newName);
                }));
            let a = !1;
            (ei.forEach((n) => {
                ek(n) === t && ((n.name = e.newName), (a = !0));
            }),
                eq(),
                e$(),
                a && ex());
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = ek(e.game);
            (delete eA.gameOverrides[t],
                delete eA.enableOverlay[t],
                delete eA.enableDetection[t],
                (eA.gamesSeen = eA.gamesSeen.filter((e) => ek(e) !== t)),
                eE[t] &&
                    (ei.forEach((e) => {
                        t === ek(e) && (e.hidden = !0);
                    }),
                    delete eE[t]),
                ei.some((e) => ek(e) === t) && ex(),
                eq(),
                e$());
        },
        GAMES_DATABASE_UPDATE: function () {
            return (ef(), eG());
        },
        GAMES_DATABASE_FETCH_FAIL: ef,
        NON_GAMES_DATABASE_UPDATE: ef,
        NON_GAMES_DATABASE_FETCH_FAIL: ef,
        GAME_LAUNCH_SUCCESS: function (e) {
            if (__OVERLAY__ || !F.isPlatformEmbedded) return;
            let t = L.Ay.getDiscordUtils().notifyGameLaunched;
            if (null == t) return;
            let n = v.A.getDetectableGame(e.applicationId);
            null != n && t(n.id, n.name, e.pids ?? []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            eq();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            ((eO = e.level), (eR = e.intervalSeconds));
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            ((eO = null), (eR = null), eN.clear());
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => ({ pid: e.pid, cleanedExePath: (0, f.v)(e.exePath) ?? e.exePath }))
                .filter((e) => {
                    if (eN.has(e.pid) || eC.has(e.cleanedExePath)) return !1;
                    let t = Q.some((t) => e.cleanedExePath.includes(t));
                    return (t && eN.add(e.pid), t);
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                w.default.track(Y.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: Q,
                    paths: t,
                    debugging_level: eO,
                    interval_seconds: eR,
                });
        },
        SYSTEM_SERVICE_INITIALIZE: function (e) {
            let { status: t, modules: n } = e;
            for (let e of n) Z[e] = t;
        },
        RUNNING_GAME_SET_DEBUG_GAME: function (e) {
            (null != er && (ei = ei.filter((e) => e !== er)), null != (er = e.game) && (ei = [er, ...ei]), ex());
        },
        SOCIAL_SDK_GAMES_UPDATE: function (e) {
            let { canonicalGameIdByPid: t } = e;
            return (eo.setCanonicalGameIds(t), eG());
        },
    }),
    e5 = e6;
