"use strict";
let r;
n.d(t, { Ay: () => e8, Es: () => eN, Xr: () => eD, Zh: () => eA, hw: () => eO, xU: () => ex }), n(321073), n(667532);
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
    m = n(830012),
    E = n(810412),
    g = n(211753),
    A = n(206885),
    I = n(41984),
    T = n(589051),
    S = n(763266),
    y = n(847521),
    v = n(760751),
    N = n(189081),
    C = n(287809),
    R = n(194871),
    O = n(954571),
    b = n(927813),
    D = n(25171),
    L = n(403362),
    w = n(723702),
    x = n(837921),
    M = n(9302),
    P = n(953384),
    k = n(973522),
    U = n(652215);
let G = new p.A("RunningGameStore"),
    F = "RunningGameStore",
    V = !1,
    B = "4294967293",
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
            name: _.A.get(U.fg2.SPOTIFY).name,
        },
    ],
    Y = [],
    W = !0,
    K = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    $ = new Set(),
    z = [],
    q = [],
    Z = [],
    X = [],
    Q = null,
    J = null,
    ee = [],
    et = {},
    en = {},
    er = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    ei = function () {},
    es = {},
    ea = 0,
    eo = null,
    el = null,
    eu = {},
    ec = {},
    ed = new Set(),
    e_ = new Set(),
    ef = null,
    ep = null,
    eh = new Map(),
    em = new Map();
function eE(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function eg(e) {
    let t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused };
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
function eT(e) {
    let t = em.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        r = eh.get(n.toLowerCase());
    if (null != r) return r;
    for (let [t, n] of eh) {
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
    if (Z.length > 0) {
        let e = Q;
        (Q = Z[0]), null != e && Q.pid === e.pid ? (Q.start = e.start) : (Q.start = Date.now());
    } else Q = null;
    let e = [];
    for (let t of Z) t.pid in eu || ((eu[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(eu)) Z.some((t) => t.pid === e.pid) || (t.push(e), delete eu[e.pid]);
    G.info("Running Games Changed", { runningGames: Z, added: e, removed: t, previousGames: eu }),
        c.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: Z, added: e, removed: t });
}
function ev() {
    J = X.length > 0 ? X[0] : null;
    let e = [];
    for (let t of X) t.pid in ec || ((ec[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ec)) X.some((t) => t.pid === e.pid) || (t.push(e), delete ec[e.pid]);
    G.info("Running Non-Games Changed", { runningNonGames: X, added: e, removed: t, previousNonGames: ec }),
        c.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: X, added: e, removed: t });
}
function eN(e) {
    if ((0, y.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
j.forEach((e) => {
    em.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            eh.set(t.name.toLowerCase(), e);
        });
});
let eC = new Set(["1314395942253756416"]);
function eR(e) {
    let t = null;
    if ("id" in e) t = e.id ?? null;
    else {
        let n = v.A.findGame(e);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, T.oA)("getRawOverlayGameStatus") && eC.has(t);
}
function eO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [v.A, N.A],
        i = eA(e);
    if (i.isLauncher)
        return {
            source: I.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in i && !S.A.acquireLock(i.pid))
        return {
            source: I.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let s = n.findGame(i);
    if (null != s) {
        let e = r.getActiveLibraryApplication(s.id);
        if (null != e)
            return {
                source: I.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: I.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let a = (0, M.supportsOutOfProcess)() && !t,
        o = eR(s ?? i),
        l = g.x.legacyEnabled,
        u = a && !o,
        c = er.enableOverlay[eN(i)],
        d = er.enableOverlayV3[eN(i)];
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
        enabledOOP: V || u,
        enabledLegacy: V,
        overlayMethod: u ? I.Ue.OutOfProcess : I.Ue.Disabled,
        reason: "Default enablement",
    };
}
function eb(e) {
    let t = eA(e),
        n = er.enableOverlay[eN(t)],
        r = er.enableOverlayV3[eN(t)];
    if (null != n || null != r) return n ?? r;
    let i = eO(t);
    return i.enabledLegacy || i.enabledOOP;
}
function eD(e) {
    let t = er.enableDetection[eN(e)];
    return null == t || t;
}
function eL(e) {
    return !e.hidden && eD(e);
}
function ew() {
    u.w.set(F, er);
}
function ex(e, t, n, r) {
    let i = {
        ...e,
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? o()(new Date(e.lastFocused * b.A.Millis.SECOND)).fromNow()
                : " ",
        overlay: eb(e),
        verified: n.isGameInDatabase(e),
        detectable: eD(e),
    };
    return null != e.id && null != es[e.id] && (i.overlayWarn = es[e.id].warn), i;
}
function eM(e) {
    return { name: e.name, exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused };
}
function eP() {
    let e = !1;
    return (
        (z = s()
            .values(N.A.libraryApplications)
            .reduce((t, n) => {
                let r = v.A.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of R.A.getLaunchOptions(n.id, n.branchId)) {
                    let s = `${n.id}:${n.branchId}`;
                    $.has(s) || ((e = !0), $.add(s));
                    let { fullExecutablePath: a } = i,
                        o = a.replace(/\\/g, "/").toLowerCase();
                    (et[o] = r.id),
                        t.push({ id: r.id, name: r.name, exePath: o, cmdLine: "", lastFocused: 0, add: !0 });
                }
                return t;
            }, [])),
        e && ek(),
        e
    );
}
function ek() {
    if (!__OVERLAY__ && w.isPlatformEmbedded) {
        let e = [...z, ...s().values(er.gameOverrides)];
        x.Ay.setGameCandidateOverrides(e);
    }
}
function eU(e, t) {
    let n = er.gameOverrides[e];
    null != n && ((er.gameOverrides[t] = n), delete er.gameOverrides[e]);
    let r = er.enableOverlay[e];
    null != r && ((er.enableOverlay[t] = r), delete er.enableOverlay[e]);
    let i = er.enableOverlayV3[e];
    null != i && ((er.enableOverlayV3[t] = i), delete er.enableOverlayV3[e]);
    let s = er.enableDetection[e];
    null != s && ((er.enableDetection[t] = s), delete er.enableDetection[e]);
}
function eG(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                er.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = er.gameOverrides[eN(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return (
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eN(t) !== eN(e) && (eU(eN(t), eN(e)), (t.exePath = e.exePath)),
                            eI(t, e),
                            !0
                        );
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                er.gamesSeen.unshift(eg(e));
            }
        }),
        er.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ew(),
        D.A.setRecentGames(eF().map((e) => ex(e, e7, v.A, N.A))));
}
function eF() {
    let e = s().values(er.gameOverrides);
    return er.gamesSeen.filter((e) => void 0 === er.gameOverrides[eN(e)]).concat(e);
}
function eV(e, t) {
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
function eB(e) {
    eG(Z);
}
function eH() {}
function ej(e) {
    q = e.games;
}
function eY() {
    W = !1;
}
function eW(e) {
    let { pid: t } = e;
    (eo = t), (el = null);
}
function eK(e) {
    let { pid: t } = e;
    (el = t), (eo = null);
}
function e$() {
    eo = null;
}
function ez(e) {
    let t,
        n = e.pid,
        r = Z.find((e) => e.pid === n);
    if (null == r) {
        let e = q.find((e) => e.pid === n);
        if (null == e) return;
        ((r = { ...e }).hidden = !1), Z.push(r), (t = eN(r));
    } else (t = eN(r)), r.hidden && (en[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)),
        (er.gameOverrides[t] = { ...r, add: !0 }),
        eG(Z),
        ek(),
        ew(),
        ey();
}
function eq() {
    ek();
}
function eZ(e) {
    (ef = e.level), (ep = e.intervalSeconds);
}
function eX() {
    (ef = null), (ep = null), ed.clear();
}
function eQ(e) {
    let t = e.processes
        .map((e) => ({ pid: e.pid, cleanedExePath: (0, f.v)(e.exePath) ?? e.exePath }))
        .filter((e) => {
            if (ed.has(e.pid) || e_.has(e.cleanedExePath)) return !1;
            let t = Y.some((t) => e.cleanedExePath.includes(t));
            return t && ed.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        O.default.track(U.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: Y,
            paths: t,
            debugging_level: ef,
            interval_seconds: ep,
        });
}
function eJ(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== er.enableOverlay[eN(t)],
        s = r !== er.enableOverlayV3[eN(t)];
    i && (er.enableOverlay[eN(t)] = n),
        s && null != r && (er.enableOverlayV3[eN(t)] = r),
        ew(),
        !__OVERLAY__ &&
            null != (null != t.id ? v.A.getDetectableGame(t.id) : null) &&
            (i && (0, E.Q3)(n, E.OverlayToggledClientSettingType.LEGACY_GAME, t.id ?? null),
            s && null != r && (0, E.Q3)(r, E.OverlayToggledClientSettingType.OOP_GAME, t.id ?? null));
}
function e0(e) {
    let { game: t } = e,
        n = eD(t);
    (er.enableDetection[eN(t)] = !n), ew(), O.default.track(U.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function e1(e) {
    let t = eN(e.game),
        n = er.gameOverrides[t];
    null == n && ((n = eM(e.game)).add = !0), (n.name = e.newName);
    let r = eN(n);
    delete er.gameOverrides[t],
        (er.gameOverrides[r] = n),
        eE(er.enableOverlay, t, r),
        eE(er.enableDetection, t, r),
        eE(en, t, r),
        er.gamesSeen.forEach((n) => {
            eN(n) === t && (n.name = e.newName);
        });
    let i = !1;
    Z.forEach((n) => {
        eN(n) === t && ((n.name = e.newName), (i = !0));
    }),
        ek(),
        ew(),
        i && ey();
}
function e2(e) {
    let t = eN(e.game);
    delete er.gameOverrides[t],
        delete er.enableOverlay[t],
        delete er.enableDetection[t],
        (er.gamesSeen = er.gamesSeen.filter((e) => eN(e) !== t)),
        en[t] &&
            (Z.forEach((e) => {
                t === eN(e) && (e.hidden = !0);
            }),
            delete en[t]),
        Z.some((e) => eN(e) === t) && ey(),
        ek(),
        ew();
}
function e3(e) {
    if (__OVERLAY__ || !w.isPlatformEmbedded) return;
    let t = x.Ay.getDiscordUtils().notifyGameLaunched;
    if (null == t) return;
    let n = v.A.getDetectableGame(e.applicationId);
    null != n && t(n.id, n.name, e.pids ?? []);
}
function e6() {
    h.A.hasLoadedExperiments && H.length > 0 && (eG(H), (H = []));
}
function e4(e) {
    let { status: t, modules: n } = e;
    for (let e of n) K[e] = t;
}
!__OVERLAY__ &&
    ((0, w.isDesktop)() || A.O) &&
    (ei = function () {
        if (!v.A.hasAttemptedFetch || !P.A.hasAttemptedFetch) return !1;
        let e = [],
            t = new Set();
        r = {};
        let n = v.A.games,
            i = P.A.nonGames,
            s = (0, M.supportsOutOfProcess)();
        for (let e of n) {
            let t = eR(e),
                n = (s && !t) || d.gH.enabledOOP,
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
        let a = new Set();
        j.forEach((e) => {
            (e.executables ?? []).forEach((e) => {
                a.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...i].filter((e) => !(e.executables ?? []).some((e) => eh.has(e.name.toLowerCase()))),
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
            x.Ay.setObservedGamesCallback(
                e,
                !0,
                (e) => {
                    let n = [],
                        i = {},
                        s = [];
                    e = e.filter((e) =>
                        null != e.id && null != P.A.getById(e.id)
                            ? (s.push(e), !1)
                            : ((e.isLauncher = e.isLauncher || t.has(e.exeName)),
                                e.isLauncher && null != e.id && (i[e.id] = e),
                                (e.windowHandle = eV(e.pid, e.windowHandle)),
                                null != eT(e))
                              ? (n.push(e), !1)
                              : !v.A.shouldBlock(e),
                    );
                    let a = n.filter(eS).length;
                    a !== ea && ((ea = a), c.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: ea })),
                        (Z = e),
                        (X = s),
                        (ee = n),
                        (r = i),
                        ey(),
                        ev();
                },
                C.default.getCurrentUser()?.id,
            ),
            ek(),
            x.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, r] of e.entries()) {
                        let e = t[n],
                            i = v.A.findGame(r),
                            s = v.A.findGame(e),
                            a = (e?.id !== B ? e?.id : s?.id) ?? "";
                        O.default.track(U.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: U.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: r.name,
                            orig_game_name_v1: r.origGameName,
                            game_id_v1: i?.id,
                            distributor_v1: r.distributor,
                            verified_v1: (0, k.PQ)(r.exePath, i?.executables ?? []),
                            is_launcher_v1: r.isLauncher,
                            game_detection_enabled_v1: eD(r),
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
                            game_detection_enabled_v2: eD(e),
                            executable_path_v2: (0, k.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, y.MT)(e),
                        });
                    }
            }),
            x.Ay.setGameDetectionErrorCallback((e, t, n, r, i) => {});
    });
class e5 extends l.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = u.w.get(F) ?? {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableOverlayV3: {},
            enableDetection: {},
        };
        er.gameOverrides = {};
        let t = !1;
        if (
            (s()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = eN(e);
                    (0, y.n1)(e) || (er.gameOverrides[t] = e);
                }),
            (er.enableOverlay = e.enableOverlay ?? {}),
            (er.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (er.enableDetection = e.enableDetection ?? {}),
            ek(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        this.waitFor(v.A, P.A, R.A, h.A, N.A, C.default),
            (H = e.gamesSeen.filter((e) => !(0, y.n1)(e))),
            this.syncWith([h.A], e6),
            this.syncWith([N.A, v.A, R.A], s().throttle(eP, 1e3)),
            t && ew();
    }
    getVisibleGame() {
        return null == Q || eL(Q) ? Q : null;
    }
    getCurrentGameForAnalytics() {
        return Q;
    }
    getCurrentNonGameForAnalytics() {
        return J;
    }
    getVisibleRunningGames() {
        return Z.filter(eL);
    }
    getRunningGames() {
        return Z;
    }
    getRunningNonGames() {
        return X;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of Z) null != et[t.exePath] && e.push(et[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => v.A.findGame(e))
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
        return null != t ? eA(t) : null;
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
        return null != eo && eo === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != el && el === e;
    }
    getCandidateGames() {
        return q.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === er.gameOverrides[eN(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === H.length;
    }
    isGameSeen(e) {
        return eF().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eF();
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
        return er.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return ee.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(er.gameOverrides);
    }
    getOverrideForGame(e) {
        return er.gameOverrides[eN(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return G.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eO(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return G.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eO(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        return ee.find((t) => (0, m.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return W && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eD(e);
    }
    addExecutableTrackedByAnalytics(e) {
        e_.add((0, f.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return K[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return K[e]?.state === "running";
    }
}
let e7 = new e5(c.h, {
        RUNNING_GAMES_CHANGE: eB,
        RUNNING_NON_GAMES_CHANGE: eH,
        CANDIDATE_GAMES_CHANGE: ej,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eY,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eW,
        PERMISSION_CLEAR_ELEVATED_PROCESS: e$,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eK,
        RUNNING_GAME_ADD_OVERRIDE: ez,
        RUNNING_GAME_TOGGLE_OVERLAY: eJ,
        RUNNING_GAME_TOGGLE_DETECTION: e0,
        RUNNING_GAME_EDIT_NAME: e1,
        RUNNING_GAME_DELETE_ENTRY: e2,
        GAMES_DATABASE_UPDATE: ei,
        GAMES_DATABASE_FETCH_FAIL: ei,
        NON_GAMES_DATABASE_UPDATE: ei,
        NON_GAMES_DATABASE_FETCH_FAIL: ei,
        GAME_LAUNCH_SUCCESS: e3,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eq,
        GAME_DETECTION_DEBUGGING_START: eZ,
        GAME_DETECTION_DEBUGGING_STOP: eX,
        GAME_DETECTION_DEBUGGING_TICK: eQ,
        SYSTEM_SERVICE_INITIALIZE: e4,
    }),
    e8 = e7;
