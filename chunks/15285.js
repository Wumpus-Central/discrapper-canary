"use strict";
let r;
n.d(t, { Ay: () => e9, Es: () => eb, Xr: () => eL, Zh: () => eI, hw: () => eO, xU: () => eP }), n(321073), n(667532);
var i = n(735438),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    l = n(311907),
    u = n(506774),
    c = n(73153),
    d = n(56562),
    _ = n(573648),
    f = n(306044),
    h = n(626584),
    p = n(49463),
    g = n(830012),
    E = n(810412),
    A = n(211753),
    I = n(41984),
    T = n(589051),
    y = n(763266),
    S = n(847521),
    v = n(760751),
    C = n(189081),
    b = n(287809),
    N = n(194871),
    R = n(954571),
    O = n(927813),
    D = n(25171),
    L = n(403362),
    w = n(723702),
    x = n(837921),
    P = n(9302),
    M = n(953384),
    k = n(973522),
    U = n(652215),
    G = n(672396);
let F = new h.A("RunningGameStore"),
    V = "RunningGameStore",
    B = !1,
    j = "4294967293",
    H = [],
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
            name: _.A.get(U.fg2.SPOTIFY).name,
        },
    ],
    W = [],
    K = !0,
    $ = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    z = new Set(),
    q = [],
    X = [],
    Z = [],
    Q = [],
    J = null,
    ee = null,
    et = [],
    en = {},
    er = {},
    ei = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    ea = function () {},
    es = {},
    eo = 0,
    el = null,
    eu = null,
    ec = {},
    ed = {},
    e_ = new Set(),
    ef = new Set(),
    eh = null,
    ep = null,
    em = new Map(),
    eg = new Map();
function eE(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function eA(e) {
    let t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused };
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
function ey(e) {
    let t = eg.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        r = em.get(n.toLowerCase());
    if (null != r) return r;
    for (let [t, n] of em) {
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
    let t = ey(e);
    return t?.streamerTool === !0;
}
function ev() {
    if (Z.length > 0) {
        let e = J;
        (J = Z[0]), null != e && J.pid === e.pid ? (J.start = e.start) : (J.start = Date.now());
    } else J = null;
    let e = [];
    for (let t of Z) t.pid in ec || ((ec[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ec)) Z.some((t) => t.pid === e.pid) || (t.push(e), delete ec[e.pid]);
    F.info("Running Games Changed", { runningGames: Z, added: e, removed: t, previousGames: ec }),
        c.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: Z, added: e, removed: t });
}
function eC() {
    ee = Q.length > 0 ? Q[0] : null;
    let e = [];
    for (let t of Q) t.pid in ed || ((ed[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ed)) Q.some((t) => t.pid === e.pid) || (t.push(e), delete ed[e.pid]);
    F.info("Running Non-Games Changed", { runningNonGames: Q, added: e, removed: t, previousNonGames: ed }),
        c.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: Q, added: e, removed: t });
}
function eb(e) {
    if ((0, S.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
Y.forEach((e) => {
    eg.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            em.set(t.name.toLowerCase(), e);
        });
});
let eN = new Set(["1314395942253756416"]);
function eR(e) {
    let t = null;
    if ("id" in e) t = e.id ?? null;
    else {
        let n = v.A.getGameByName(e.name);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, T.oA)("getRawOverlayGameStatus") && eN.has(t);
}
function eO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [v.A, C.A],
        i = eI(e);
    if (i.isLauncher)
        return {
            source: I.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in i && !y.A.acquireLock(i.pid))
        return {
            source: I.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let a = n.getGameByName(i.name);
    if (null != a) {
        let e = r.getActiveLibraryApplication(a.id);
        if (null != e)
            return {
                source: I.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: I.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let s = (0, P.supportsOutOfProcess)() && !t,
        o = eR(a ?? i),
        l = A.x.legacyEnabled,
        u = s && !o,
        c = ei.enableOverlay[eb(i)],
        d = ei.enableOverlayV3[eb(i)];
    if (null != c || null != d) {
        let e = null != d ? d : u,
            t = null != c ? c : l,
            n = e ? I.Ue.OutOfProcess : I.Ue.Hook;
        return {
            source: e && !o ? I.yp.OOP_DEFAULT : I.yp.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: u ? n : I.Ue.Hook,
            reason: "Enabled from persistent",
        };
    }
    let _ = null == i.id ? null : es[i.id];
    if (null != _) {
        let e = _.enabledOOP ?? u,
            t = _.enabled ?? l,
            n = e ? I.Ue.OutOfProcess : I.Ue.Hook;
        return {
            source: e && !o ? I.yp.OOP_DEFAULT_DATABASE : I.yp.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: u ? n : I.Ue.Hook,
            reason: "Enabled from overlayOptions",
        };
    }
    return {
        source: I.yp.DEFAULT,
        enabledOOP: B || u,
        enabledLegacy: B,
        overlayMethod: u ? I.Ue.OutOfProcess : I.Ue.Disabled,
        reason: "Default enablement",
    };
}
function eD(e) {
    let t = eI(e),
        n = ei.enableOverlay[eb(t)],
        r = ei.enableOverlayV3[eb(t)];
    if (null != n || null != r) return n ?? r;
    let i = eO(t);
    return i.enabledLegacy || i.enabledOOP;
}
function eL(e) {
    let t = ei.enableDetection[eb(e)];
    return null == t || t;
}
function ew(e) {
    return !e.hidden && eL(e);
}
function ex() {
    u.w.set(V, ei);
}
function eP(e, t, n, r) {
    let i = {
        ...e,
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? o()(new Date(e.lastFocused * O.A.Millis.SECOND)).fromNow()
                : " ",
        overlay: eD(e),
        verified: n.isGameInDatabase(e),
        detectable: eL(e),
    };
    return null != e.id && null != es[e.id] && (i.overlayWarn = es[e.id].warn), i;
}
function eM(e) {
    return { name: e.name, exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused };
}
function ek() {
    let e = !1;
    return (
        (q = a()
            .values(C.A.libraryApplications)
            .reduce((t, n) => {
                let r = v.A.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of N.A.getLaunchOptions(n.id, n.branchId)) {
                    let a = `${n.id}:${n.branchId}`;
                    z.has(a) || ((e = !0), z.add(a));
                    let { fullExecutablePath: s } = i,
                        o = s.replace(/\\/g, "/").toLowerCase();
                    (en[o] = r.id),
                        t.push({ id: r.id, name: r.name, exePath: o, cmdLine: "", lastFocused: 0, add: !0 });
                }
                return t;
            }, [])),
        e && eU(),
        e
    );
}
function eU() {
    if (!__OVERLAY__ && w.isPlatformEmbedded) {
        let e = [...q, ...a().values(ei.gameOverrides)];
        x.Ay.setGameCandidateOverrides(e);
    }
}
function eG(e, t) {
    let n = ei.gameOverrides[e];
    null != n && ((ei.gameOverrides[t] = n), delete ei.gameOverrides[e]);
    let r = ei.enableOverlay[e];
    null != r && ((ei.enableOverlay[t] = r), delete ei.enableOverlay[e]);
    let i = ei.enableOverlayV3[e];
    null != i && ((ei.enableOverlayV3[t] = i), delete ei.enableOverlayV3[e]);
    let a = ei.enableDetection[e];
    null != a && ((ei.enableDetection[t] = a), delete ei.enableDetection[e]);
}
function eF(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                ei.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = ei.gameOverrides[eb(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eb(t) !== eb(e) && (eG(eb(t), eb(e)), (t.exePath = e.exePath)),
                            eT(t, e),
                            !0
                        );
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                ei.gamesSeen.unshift(eA(e));
            }
        }),
        ei.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ex(),
        D.A.setRecentGames(eV().map((e) => eP(e, e8, v.A, C.A))));
}
function eV() {
    let e = a().values(ei.gameOverrides);
    return ei.gamesSeen.filter((e) => void 0 === ei.gameOverrides[eb(e)]).concat(e);
}
function eB(e, t) {
    if (void 0 === t) {
        let t = x.Ay.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && "0" !== n ? n : null;
        }
        return null;
    }
    return "0" === t ? null : t;
}
function ej(e) {
    eF(Z);
}
function eH() {}
function eY(e) {
    X = e.games;
}
function eW() {
    K = !1;
}
function eK(e) {
    let { pid: t } = e;
    (el = t), (eu = null);
}
function e$(e) {
    let { pid: t } = e;
    (eu = t), (el = null);
}
function ez() {
    el = null;
}
function eq(e) {
    let t,
        n = e.pid,
        r = Z.find((e) => e.pid === n);
    if (null == r) {
        let e = X.find((e) => e.pid === n);
        if (null == e) return;
        ((r = { ...e }).hidden = !1), Z.push(r), (t = eb(r));
    } else (t = eb(r)), r.hidden && (er[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)),
        (ei.gameOverrides[t] = { ...r, add: !0 }),
        eF(Z),
        eU(),
        ex(),
        ev();
}
function eX() {
    eU();
}
function eZ(e) {
    (eh = e.level), (ep = e.intervalSeconds);
}
function eQ() {
    (eh = null), (ep = null), e_.clear();
}
function eJ(e) {
    let t = e.processes
        .map((e) => ({ pid: e.pid, cleanedExePath: (0, f.v)(e.exePath) ?? e.exePath }))
        .filter((e) => {
            if (e_.has(e.pid) || ef.has(e.cleanedExePath)) return !1;
            let t = W.some((t) => e.cleanedExePath.includes(t));
            return t && e_.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        R.default.track(U.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: W,
            paths: t,
            debugging_level: eh,
            interval_seconds: ep,
        });
}
function e0(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== ei.enableOverlay[eb(t)],
        a = r !== ei.enableOverlayV3[eb(t)];
    i && (ei.enableOverlay[eb(t)] = n),
        a && null != r && (ei.enableOverlayV3[eb(t)] = r),
        ex(),
        !__OVERLAY__ &&
            null != (null != t.id ? v.A.getDetectableGame(t.id) : null) &&
            (i && (0, E.Q3)(n, E.OverlayToggledClientSettingType.LEGACY_GAME, t.id ?? null),
            a && null != r && (0, E.Q3)(r, E.OverlayToggledClientSettingType.OOP_GAME, t.id ?? null));
}
function e1(e) {
    let { game: t } = e,
        n = eL(t);
    (ei.enableDetection[eb(t)] = !n), ex(), R.default.track(U.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function e2(e) {
    let t = eb(e.game),
        n = ei.gameOverrides[t];
    null == n && ((n = eM(e.game)).add = !0), (n.name = e.newName);
    let r = eb(n);
    delete ei.gameOverrides[t],
        (ei.gameOverrides[r] = n),
        eE(ei.enableOverlay, t, r),
        eE(ei.enableDetection, t, r),
        eE(er, t, r),
        ei.gamesSeen.forEach((n) => {
            eb(n) === t && (n.name = e.newName);
        });
    let i = !1;
    Z.forEach((n) => {
        eb(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eU(),
        ex(),
        i && ev();
}
function e3(e) {
    let t = eb(e.game);
    delete ei.gameOverrides[t],
        delete ei.enableOverlay[t],
        delete ei.enableDetection[t],
        (ei.gamesSeen = ei.gamesSeen.filter((e) => eb(e) !== t)),
        er[t] &&
            (Z.forEach((e) => {
                t === eb(e) && (e.hidden = !0);
            }),
            delete er[t]),
        Z.some((e) => eb(e) === t) && ev(),
        eU(),
        ex();
}
function e6(e) {
    if (__OVERLAY__ || !w.isPlatformEmbedded) return;
    let t = x.Ay.getDiscordUtils().notifyGameLaunched;
    if (null == t) return;
    let n = v.A.getDetectableGame(e.applicationId);
    null != n && t(n.id, n.name, e.pids ?? []);
}
function e4() {
    p.A.hasLoadedExperiments && H.length > 0 && (eF(H), (H = []));
}
function e5(e) {
    let { status: t, modules: n } = e;
    for (let e of n) $[e] = t;
}
!__OVERLAY__ &&
    ((0, w.isDesktop)() || G.OX) &&
    (ea = function () {
        if (!v.A.hasAttemptedFetch || !M.A.hasAttemptedFetch) return !1;
        let e = [],
            t = new Set();
        r = {};
        let n = v.A.games,
            i = M.A.nonGames,
            a = (0, P.supportsOutOfProcess)();
        for (let e of n) {
            let t = eR(e),
                n = (a && !t) || d.gH.enabledOOP,
                r = e.overlay ?? d.gH.enabled;
            es[e.id] = {
                compatibilityHook: e.overlayCompatibilityHook ?? d.gH.compatibilityHook,
                warn: e.overlayWarn ?? d.gH.warn,
                enabled: r,
                enabledOOP: n,
                allowHook: e.hook ?? d.gH.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
            };
        }
        let s = new Set();
        Y.forEach((e) => {
            (e.executables ?? []).forEach((e) => {
                s.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...i].filter((e) => !(e.executables ?? []).some((e) => em.has(e.name.toLowerCase()))),
                ...Y,
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
            x.Ay.setObservedGamesCallback(
                e,
                !0,
                (e) => {
                    let n = [],
                        i = {},
                        a = [];
                    e = e.filter((e) =>
                        null != e.id && null != M.A.getById(e.id)
                            ? (a.push(e), !1)
                            : ((e.isLauncher = e.isLauncher || t.has(e.exeName)),
                                e.isLauncher && null != e.id && (i[e.id] = e),
                                (e.windowHandle = eB(e.pid, e.windowHandle)),
                                null != ey(e))
                              ? (n.push(e), !1)
                              : !v.A.shouldBlock(e),
                    );
                    let s = n.filter(eS).length;
                    s !== eo && ((eo = s), c.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: eo })),
                        (Z = e),
                        (Q = a),
                        (et = n),
                        (r = i),
                        ev(),
                        eC();
                },
                b.default.getCurrentUser()?.id,
            ),
            eU(),
            x.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, r] of e.entries()) {
                        let e = t[n],
                            i = v.A.getGameByName(r.name),
                            a = v.A.getGameByName(e.name),
                            s = (e?.id !== j ? e?.id : a?.id) ?? "";
                        R.default.track(U.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: U.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: r.name,
                            orig_game_name_v1: r.origGameName,
                            game_id_v1: i?.id,
                            distributor_v1: r.distributor,
                            verified_v1: (0, k.PQ)(r.exePath, i?.executables ?? []),
                            is_launcher_v1: r.isLauncher,
                            game_detection_enabled_v1: eL(r),
                            executable_path_v1: (0, k.Ic)(r.exePath),
                            distributor_game_id_v1: r.sku,
                            hidden_by_distributor_v1: r.hidden,
                            game_metadata_v1: (0, S.MT)(r),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: s,
                            distributor_v2: e.distributor,
                            verified_v2: (0, k.PQ)(e.exePath, a?.executables ?? []),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eL(e),
                            executable_path_v2: (0, k.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, S.MT)(e),
                        });
                    }
            }),
            x.Ay.setGameDetectionErrorCallback((e, t, n, r, i) => {});
    });
class e7 extends l.Ay.Store {
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
            (a()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = eb(e);
                    (0, S.n1)(e) || (ei.gameOverrides[t] = e);
                }),
            (ei.enableOverlay = e.enableOverlay ?? {}),
            (ei.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (ei.enableDetection = e.enableDetection ?? {}),
            eU(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        this.waitFor(v.A, M.A, N.A, p.A, C.A, b.default),
            (H = e.gamesSeen.filter((e) => !(0, S.n1)(e))),
            this.syncWith([p.A], e4),
            this.syncWith([C.A, v.A, N.A], a().throttle(ek, 1e3)),
            t && ex();
    }
    getVisibleGame() {
        return null == J || ew(J) ? J : null;
    }
    getCurrentGameForAnalytics() {
        return J;
    }
    getCurrentNonGameForAnalytics() {
        return ee;
    }
    getVisibleRunningGames() {
        return Z.filter(ew);
    }
    getRunningGames() {
        return Z;
    }
    getRunningNonGames() {
        return Q;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of Z) null != en[t.exePath] && e.push(en[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => v.A.getGameByName(e.name))
            .filter(L.Vq)
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
        return null != t ? eI(t) : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...es[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != el && el === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eu && eu === e;
    }
    getCandidateGames() {
        return X.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === ei.gameOverrides[eb(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === H.length;
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
                let t = eb(e);
                n = n.filter((e) => eb(e) !== t);
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
        return ei.gameOverrides[eb(e)];
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
        return et.find((t) => (0, g.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return K && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eL(e);
    }
    addExecutableTrackedByAnalytics(e) {
        ef.add((0, f.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return $[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return $[e]?.state === "running";
    }
}
let e8 = new e7(c.h, {
        RUNNING_GAMES_CHANGE: ej,
        RUNNING_NON_GAMES_CHANGE: eH,
        CANDIDATE_GAMES_CHANGE: eY,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eW,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eK,
        PERMISSION_CLEAR_ELEVATED_PROCESS: ez,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: e$,
        RUNNING_GAME_ADD_OVERRIDE: eq,
        RUNNING_GAME_TOGGLE_OVERLAY: e0,
        RUNNING_GAME_TOGGLE_DETECTION: e1,
        RUNNING_GAME_EDIT_NAME: e2,
        RUNNING_GAME_DELETE_ENTRY: e3,
        GAMES_DATABASE_UPDATE: ea,
        GAMES_DATABASE_FETCH_FAIL: ea,
        NON_GAMES_DATABASE_UPDATE: ea,
        NON_GAMES_DATABASE_FETCH_FAIL: ea,
        CONNECTION_OPEN: ea,
        GAME_LAUNCH_SUCCESS: e6,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eX,
        GAME_DETECTION_DEBUGGING_START: eZ,
        GAME_DETECTION_DEBUGGING_STOP: eQ,
        GAME_DETECTION_DEBUGGING_TICK: eJ,
        SYSTEM_SERVICE_INITIALIZE: e5,
    }),
    e9 = e8;
