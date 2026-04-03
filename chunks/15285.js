"use strict";
let r;
n.d(t, { Ay: () => te, Es: () => eR, Xr: () => ew, Zh: () => eT, hw: () => eD, xU: () => eP }), n(321073), n(667532);
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
    m = n(639841),
    E = n(830012),
    g = n(810412),
    A = n(211753),
    I = n(206885),
    T = n(41984),
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
    M = n(837921),
    x = n(9302),
    P = n(953384),
    k = n(973522),
    U = n(862775),
    G = n(652215);
let F = new p.A("RunningGameStore"),
    V = "RunningGameStore",
    B = !1,
    H = "4294967293",
    j = !__OVERLAY__ && ((0, w.isDesktop)() || I.O),
    Y = [],
    W = [
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
    K = [],
    $ = !0,
    z = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    q = new Set(),
    Z = [],
    X = [],
    Q = [],
    J = [],
    ee = null,
    et = null,
    en = [],
    er = {},
    ei = {},
    es = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    ea = function () {},
    eo = {},
    el = 0,
    eu = null,
    ec = null,
    ed = {},
    e_ = {},
    ef = new Set(),
    ep = new Set(),
    eh = null,
    em = null,
    eE = new Map(),
    eg = new Map();
function eA(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function eI(e) {
    let t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused };
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
function eT(e) {
    return e;
}
function eS(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function ey(e) {
    let t = eg.get(e.name?.toLowerCase() ?? "");
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
function ev(e) {
    let t = ey(e);
    return t?.streamerTool === !0;
}
function eN() {
    if (Q.length > 0) {
        let e = ee;
        (ee = Q[0]), null != e && ee.pid === e.pid ? (ee.start = e.start) : (ee.start = Date.now());
    } else ee = null;
    let e = [];
    for (let t of Q) t.pid in ed || ((ed[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ed)) Q.some((t) => t.pid === e.pid) || (t.push(e), delete ed[e.pid]);
    F.info("Running Games Changed", { runningGames: Q, added: e, removed: t, previousGames: ed }),
        c.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: Q, added: e, removed: t });
}
function eC() {
    et = J.length > 0 ? J[0] : null;
    let e = [];
    for (let t of J) t.pid in e_ || ((e_[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(e_)) J.some((t) => t.pid === e.pid) || (t.push(e), delete e_[e.pid]);
    F.info("Running Non-Games Changed", { runningNonGames: J, added: e, removed: t, previousNonGames: e_ }),
        c.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: J, added: e, removed: t });
}
function eR(e) {
    if ((0, y.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
W.forEach((e) => {
    eg.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            eE.set(t.name.toLowerCase(), e);
        });
});
let eO = new Set(["1314395942253756416"]);
function eb(e) {
    let t = null;
    if ("id" in e) t = e.id ?? null;
    else {
        let n = v.A.findGame(e);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && eO.has(t);
}
function eD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [v.A, N.A],
        i = eT(e);
    if (i.isLauncher)
        return {
            source: T.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: T.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in i && !S.A.acquireLock(i.pid))
        return {
            source: T.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: T.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let s = n.findGame(i);
    if (null != s) {
        let e = r.getActiveLibraryApplication(s.id);
        if (null != e)
            return {
                source: T.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: T.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let a = (0, x.supportsOutOfProcess)() && !t,
        o = eb(s ?? i),
        l = A.x.legacyEnabled,
        u = a && !o,
        c = es.enableOverlay[eR(i)],
        d = es.enableOverlayV3[eR(i)];
    if (null != c || null != d) {
        let e = null != d ? d : u,
            t = null != c ? c : l,
            n = e ? T.Ue.OutOfProcess : T.Ue.Hook;
        return {
            source: e && !o ? T.yp.OOP_DEFAULT : T.yp.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: u ? n : T.Ue.Hook,
            reason: "Enabled from persistent",
        };
    }
    let _ = null == i.id ? null : eo[i.id];
    if (null != _) {
        let e = _.enabledOOP ?? u,
            t = _.enabled ?? l,
            n = e ? T.Ue.OutOfProcess : T.Ue.Hook;
        return {
            source: e && !o ? T.yp.OOP_DEFAULT_DATABASE : T.yp.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: u ? n : T.Ue.Hook,
            reason: "Enabled from overlayOptions",
        };
    }
    return {
        source: T.yp.DEFAULT,
        enabledOOP: B || u,
        enabledLegacy: B,
        overlayMethod: u ? T.Ue.OutOfProcess : T.Ue.Disabled,
        reason: "Default enablement",
    };
}
function eL(e) {
    let t = eT(e),
        n = es.enableOverlay[eR(t)],
        r = es.enableOverlayV3[eR(t)];
    if (null != n || null != r) return n ?? r;
    let i = eD(t);
    return i.enabledLegacy || i.enabledOOP;
}
function ew(e) {
    let t = es.enableDetection[eR(e)];
    return null == t || t;
}
function eM(e) {
    return !e.hidden && ew(e);
}
function ex() {
    u.w.set(V, es);
}
function eP(e, t, n, r) {
    let i = {
        ...e,
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? o()(new Date(e.lastFocused * b.A.Millis.SECOND)).fromNow()
                : " ",
        overlay: eL(e),
        verified: n.isGameInDatabase(e),
        detectable: ew(e),
    };
    return null != e.id && null != eo[e.id] && (i.overlayWarn = eo[e.id].warn), i;
}
function ek(e) {
    return { name: e.name, exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused };
}
function eU() {
    let e = !1;
    return (
        (Z = s()
            .values(N.A.libraryApplications)
            .reduce((t, n) => {
                let r = v.A.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of R.A.getLaunchOptions(n.id, n.branchId)) {
                    let s = `${n.id}:${n.branchId}`;
                    q.has(s) || ((e = !0), q.add(s));
                    let { fullExecutablePath: a } = i,
                        o = a.replace(/\\/g, "/").toLowerCase();
                    (er[o] = r.id),
                        t.push({ id: r.id, name: r.name, exePath: o, cmdLine: "", lastFocused: 0, add: !0 });
                }
                return t;
            }, [])),
        e && eG(),
        e
    );
}
function eG() {
    if (!__OVERLAY__ && w.isPlatformEmbedded) {
        let e = [...Z, ...s().values(es.gameOverrides)];
        M.Ay.setGameCandidateOverrides(e);
    }
}
function eF(e, t) {
    let n = es.gameOverrides[e];
    null != n && ((es.gameOverrides[t] = n), delete es.gameOverrides[e]);
    let r = es.enableOverlay[e];
    null != r && ((es.enableOverlay[t] = r), delete es.enableOverlay[e]);
    let i = es.enableOverlayV3[e];
    null != i && ((es.enableOverlayV3[t] = i), delete es.enableOverlayV3[e]);
    let s = es.enableDetection[e];
    null != s && ((es.enableDetection[t] = s), delete es.enableDetection[e]);
}
function eV(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                es.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = es.gameOverrides[eR(e)];
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
                es.gamesSeen.unshift(eI(e));
            }
        }),
        es.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ex(),
        D.A.setRecentGames(eB().map((e) => eP(e, e9, v.A, N.A))));
}
function eB() {
    let e = s().values(es.gameOverrides);
    return es.gamesSeen.filter((e) => void 0 === es.gameOverrides[eR(e)]).concat(e);
}
function eH(e, t) {
    if (void 0 === t) {
        let t = M.Ay.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && "0" !== n ? n : null;
        }
        return null;
    }
    return "0" === t ? null : t;
}
function ej(e) {
    eV(Q);
}
function eY() {}
function eW(e) {
    X = e.games;
}
function eK() {
    $ = !1;
}
function e$(e) {
    let { pid: t } = e;
    (eu = t), (ec = null);
}
function ez(e) {
    let { pid: t } = e;
    (ec = t), (eu = null);
}
function eq() {
    eu = null;
}
function eZ(e) {
    let t,
        n = e.pid,
        r = Q.find((e) => e.pid === n);
    if (null == r) {
        let e = X.find((e) => e.pid === n);
        if (null == e) return;
        ((r = { ...e }).hidden = !1), Q.push(r), (ei[(t = eR(r))] = !0);
    } else (t = eR(r)), r.hidden && (ei[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)),
        (es.gameOverrides[t] = { ...r, add: !0 }),
        eV(Q),
        eG(),
        ex(),
        eN();
}
function eX() {
    eG();
}
function eQ(e) {
    (eh = e.level), (em = e.intervalSeconds);
}
function eJ() {
    (eh = null), (em = null), ef.clear();
}
function e0(e) {
    let t = e.processes
        .map((e) => ({ pid: e.pid, cleanedExePath: (0, f.v)(e.exePath) ?? e.exePath }))
        .filter((e) => {
            if (ef.has(e.pid) || ep.has(e.cleanedExePath)) return !1;
            let t = K.some((t) => e.cleanedExePath.includes(t));
            return t && ef.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        O.default.track(G.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: K,
            paths: t,
            debugging_level: eh,
            interval_seconds: em,
        });
}
function e1(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== es.enableOverlay[eR(t)],
        s = r !== es.enableOverlayV3[eR(t)];
    i && (es.enableOverlay[eR(t)] = n),
        s && null != r && (es.enableOverlayV3[eR(t)] = r),
        ex(),
        !__OVERLAY__ &&
            null != (null != t.id ? v.A.getDetectableGame(t.id) : null) &&
            (i && (0, g.Q3)(n, g.OverlayToggledClientSettingType.LEGACY_GAME, t.id ?? null),
            s && null != r && (0, g.Q3)(r, g.OverlayToggledClientSettingType.OOP_GAME, t.id ?? null));
}
function e2(e) {
    let { game: t } = e,
        n = ew(t);
    (es.enableDetection[eR(t)] = !n), ex(), O.default.track(G.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function e3(e) {
    let t = eR(e.game),
        n = es.gameOverrides[t];
    null == n && ((n = ek(e.game)).add = !0), (n.name = e.newName);
    let r = eR(n);
    delete es.gameOverrides[t],
        (es.gameOverrides[r] = n),
        eA(es.enableOverlay, t, r),
        eA(es.enableDetection, t, r),
        eA(ei, t, r),
        es.gamesSeen.forEach((n) => {
            eR(n) === t && (n.name = e.newName);
        });
    let i = !1;
    Q.forEach((n) => {
        eR(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eG(),
        ex(),
        i && eN();
}
function e6(e) {
    let t = eR(e.game);
    delete es.gameOverrides[t],
        delete es.enableOverlay[t],
        delete es.enableDetection[t],
        (es.gamesSeen = es.gamesSeen.filter((e) => eR(e) !== t)),
        ei[t] &&
            (Q.forEach((e) => {
                t === eR(e) && (e.hidden = !0);
            }),
            delete ei[t]),
        Q.some((e) => eR(e) === t) && eN(),
        eG(),
        ex();
}
function e4(e) {
    if (__OVERLAY__ || !w.isPlatformEmbedded) return;
    let t = M.Ay.getDiscordUtils().notifyGameLaunched;
    if (null == t) return;
    let n = v.A.getDetectableGame(e.applicationId);
    null != n && t(n.id, n.name, e.pids ?? []);
}
function e5() {
    j && M.Ay.setProcessObserverCollectExecutableFingerprint((0, U.Q)("running-game-store")),
        h.A.hasLoadedExperiments && Y.length > 0 && (eV(Y), (Y = []));
}
function e7(e) {
    let { status: t, modules: n } = e;
    for (let e of n) z[e] = t;
}
j &&
    (ea = function () {
        if (!v.A.hasAttemptedFetch || !P.A.hasAttemptedFetch) return !1;
        let e = [],
            t = new Set();
        r = {};
        let n = v.A.games,
            i = P.A.nonGames,
            s = (0, x.supportsOutOfProcess)();
        for (let e of n) {
            let t = eb(e),
                n = (s && !t) || d.gH.enabledOOP,
                r = e.overlay ?? d.gH.enabled;
            eo[e.id] = {
                compatibilityHook: e.overlayCompatibilityHook ?? d.gH.compatibilityHook,
                warn: e.overlayWarn ?? d.gH.warn,
                enabled: r,
                enabledOOP: n,
                allowHook: e.hook ?? d.gH.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
            };
        }
        let a = new Set();
        W.forEach((e) => {
            (e.executables ?? []).forEach((e) => {
                a.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...i].filter((e) => !(e.executables ?? []).some((e) => eE.has(e.name.toLowerCase()))),
                ...W,
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
                        null != e.id && null != P.A.getById(e.id)
                            ? (s.push(e), !1)
                            : ((e.isLauncher = e.isLauncher || t.has(e.exeName)),
                                e.isLauncher && null != e.id && (i[e.id] = e),
                                (e.windowHandle = eH(e.pid, e.windowHandle)),
                                null != ey(e))
                              ? (n.push(e), !1)
                              : !v.A.shouldBlock(e),
                    );
                    let a = n.filter(ev).length;
                    a !== el && ((el = a), c.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: el })),
                        (Q = e),
                        (J = s),
                        (en = n),
                        (r = i),
                        eN(),
                        eC();
                },
                C.default.getCurrentUser()?.id,
            ),
            eG(),
            M.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, r] of e.entries()) {
                        let e = t[n],
                            i = v.A.findGame(r),
                            s = v.A.findGame(e),
                            a = (e?.id !== H ? e?.id : s?.id) ?? "";
                        O.default.track(G.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: G.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: r.name,
                            orig_game_name_v1: r.origGameName,
                            game_id_v1: i?.id,
                            distributor_v1: r.distributor,
                            verified_v1: (0, k.PQ)(r.exePath, i?.executables ?? []),
                            is_launcher_v1: r.isLauncher,
                            game_detection_enabled_v1: ew(r),
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
                            game_detection_enabled_v2: ew(e),
                            executable_path_v2: (0, k.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, y.MT)(e),
                        });
                    }
            }),
            M.Ay.setGameDetectionErrorCallback((e, t, n, r, i) => {});
    });
class e8 extends l.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = u.w.get(V) ?? {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableOverlayV3: {},
            enableDetection: {},
        };
        es.gameOverrides = {};
        let t = !1;
        if (
            (s()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = eR(e);
                    (0, y.n1)(e) || (es.gameOverrides[t] = e);
                }),
            (es.enableOverlay = e.enableOverlay ?? {}),
            (es.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (es.enableDetection = e.enableDetection ?? {}),
            eG(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        this.waitFor(v.A, P.A, R.A, h.A, m.A, N.A, C.default),
            (Y = e.gamesSeen.filter((e) => !(0, y.n1)(e))),
            this.syncWith([m.A], e5),
            this.syncWith([N.A, v.A, R.A], s().throttle(eU, 1e3)),
            t && ex();
    }
    getVisibleGame() {
        return null == ee || eM(ee) ? ee : null;
    }
    getCurrentGameForAnalytics() {
        return ee;
    }
    getCurrentNonGameForAnalytics() {
        return et;
    }
    getVisibleRunningGames() {
        return Q.filter(eM);
    }
    getRunningGames() {
        return Q;
    }
    getRunningNonGames() {
        return J;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of Q) null != er[t.exePath] && e.push(er[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => v.A.findGame(e))
            .filter(L.Vq)
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
        return null != t ? eT(t) : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...eo[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != eu && eu === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != ec && ec === e;
    }
    canCollectExecutableFingerprintsForRunningGames() {
        return j && (0, U.M)("running-game-store");
    }
    getCandidateGames() {
        return X.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === es.gameOverrides[eR(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === Y.length;
    }
    isGameSeen(e) {
        return eB().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eB();
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
        return es.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return en.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(es.gameOverrides);
    }
    getOverrideForGame(e) {
        return es.gameOverrides[eR(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return F.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eD(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return F.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eD(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        return en.find((t) => (0, E.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return $ && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return ew(e);
    }
    addExecutableTrackedByAnalytics(e) {
        ep.add((0, f.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return z[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return z[e]?.state === "running";
    }
}
let e9 = new e8(c.h, {
        RUNNING_GAMES_CHANGE: ej,
        RUNNING_NON_GAMES_CHANGE: eY,
        CANDIDATE_GAMES_CHANGE: eW,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eK,
        PERMISSION_REQUEST_ELEVATED_PROCESS: e$,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eq,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: ez,
        RUNNING_GAME_ADD_OVERRIDE: eZ,
        RUNNING_GAME_TOGGLE_OVERLAY: e1,
        RUNNING_GAME_TOGGLE_DETECTION: e2,
        RUNNING_GAME_EDIT_NAME: e3,
        RUNNING_GAME_DELETE_ENTRY: e6,
        GAMES_DATABASE_UPDATE: ea,
        GAMES_DATABASE_FETCH_FAIL: ea,
        NON_GAMES_DATABASE_UPDATE: ea,
        NON_GAMES_DATABASE_FETCH_FAIL: ea,
        GAME_LAUNCH_SUCCESS: e4,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eX,
        GAME_DETECTION_DEBUGGING_START: eQ,
        GAME_DETECTION_DEBUGGING_STOP: eJ,
        GAME_DETECTION_DEBUGGING_TICK: e0,
        SYSTEM_SERVICE_INITIALIZE: e7,
    }),
    te = e9;
