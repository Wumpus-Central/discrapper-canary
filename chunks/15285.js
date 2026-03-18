"use strict";
let r;
n.d(t, { Ay: () => tt, Es: () => eO, Xr: () => eM, Zh: () => eS, hw: () => eL, xU: () => ek }), n(321073), n(667532);
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
    S = n(589051),
    y = n(763266),
    v = n(847521),
    N = n(760751),
    C = n(189081),
    R = n(287809),
    O = n(194871),
    b = n(954571),
    D = n(927813),
    L = n(25171),
    w = n(403362),
    M = n(723702),
    x = n(837921),
    P = n(9302),
    k = n(953384),
    U = n(973522),
    G = n(862775),
    F = n(652215);
let V = new p.A("RunningGameStore"),
    B = "RunningGameStore",
    H = !1,
    j = "4294967293",
    Y = !__OVERLAY__ && ((0, M.isDesktop)() || I.O),
    W = [],
    K = [
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
            name: _.A.get(F.fg2.SPOTIFY).name,
        },
    ],
    $ = [],
    z = !0,
    q = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    Z = new Set(),
    X = [],
    Q = [],
    J = [],
    ee = [],
    et = null,
    en = null,
    er = [],
    ei = {},
    es = {},
    ea = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    eo = function () {},
    el = {},
    eu = 0,
    ec = null,
    ed = null,
    e_ = {},
    ef = {},
    ep = new Set(),
    eh = new Set(),
    em = null,
    eE = null,
    eg = new Map(),
    eA = new Map();
function eI(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function eT(e) {
    let t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused };
    return (
        null != e.id && (t.id = e.id),
        null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId),
        null != e.name && (t.name = e.name),
        e.add && (t.add = !0),
        e.block && (t.block = !0),
        null != e.distributor && (t.distributor = e.distributor),
        null != e.gameName && (t.gameName = e.gameName),
        ey(t, e),
        t
    );
}
function eS(e) {
    return e;
}
function ey(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function ev(e) {
    let t = eA.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        r = eg.get(n.toLowerCase());
    if (null != r) return r;
    for (let [t, n] of eg) {
        let r = e.exePath.toLowerCase(),
            i = t.toLowerCase();
        if (r.endsWith(i)) {
            let e = r.length - i.length;
            if (0 === e || "/" === r[e - 1] || "\\" === r[e - 1]) return n;
        }
    }
    return null;
}
function eN(e) {
    let t = ev(e);
    return t?.streamerTool === !0;
}
function eC() {
    if (J.length > 0) {
        let e = et;
        (et = J[0]), null != e && et.pid === e.pid ? (et.start = e.start) : (et.start = Date.now());
    } else et = null;
    let e = [];
    for (let t of J) t.pid in e_ || ((e_[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(e_)) J.some((t) => t.pid === e.pid) || (t.push(e), delete e_[e.pid]);
    V.info("Running Games Changed", { runningGames: J, added: e, removed: t, previousGames: e_ }),
        c.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: J, added: e, removed: t });
}
function eR() {
    en = ee.length > 0 ? ee[0] : null;
    let e = [];
    for (let t of ee) t.pid in ef || ((ef[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ef)) ee.some((t) => t.pid === e.pid) || (t.push(e), delete ef[e.pid]);
    V.info("Running Non-Games Changed", { runningNonGames: ee, added: e, removed: t, previousNonGames: ef }),
        c.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: ee, added: e, removed: t });
}
function eO(e) {
    if ((0, v.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
K.forEach((e) => {
    eA.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            eg.set(t.name.toLowerCase(), e);
        });
});
let eb = new Set(["1314395942253756416"]);
function eD(e) {
    let t = null;
    if ("id" in e) t = e.id ?? null;
    else {
        let n = N.A.findGame(e);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && (0, S.oA)("getRawOverlayGameStatus") && eb.has(t);
}
function eL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [N.A, C.A],
        i = eS(e);
    if (i.isLauncher)
        return {
            source: T.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: T.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in i && !y.A.acquireLock(i.pid))
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
    let a = (0, P.supportsOutOfProcess)() && !t,
        o = eD(s ?? i),
        l = A.x.legacyEnabled,
        u = a && !o,
        c = ea.enableOverlay[eO(i)],
        d = ea.enableOverlayV3[eO(i)];
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
    let _ = null == i.id ? null : el[i.id];
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
        enabledOOP: H || u,
        enabledLegacy: H,
        overlayMethod: u ? T.Ue.OutOfProcess : T.Ue.Disabled,
        reason: "Default enablement",
    };
}
function ew(e) {
    let t = eS(e),
        n = ea.enableOverlay[eO(t)],
        r = ea.enableOverlayV3[eO(t)];
    if (null != n || null != r) return n ?? r;
    let i = eL(t);
    return i.enabledLegacy || i.enabledOOP;
}
function eM(e) {
    let t = ea.enableDetection[eO(e)];
    return null == t || t;
}
function ex(e) {
    return !e.hidden && eM(e);
}
function eP() {
    u.w.set(B, ea);
}
function ek(e, t, n, r) {
    let i = {
        ...e,
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? o()(new Date(e.lastFocused * D.A.Millis.SECOND)).fromNow()
                : " ",
        overlay: ew(e),
        verified: n.isGameInDatabase(e),
        detectable: eM(e),
    };
    return null != e.id && null != el[e.id] && (i.overlayWarn = el[e.id].warn), i;
}
function eU(e) {
    return { name: e.name, exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused };
}
function eG() {
    let e = !1;
    return (
        (X = s()
            .values(C.A.libraryApplications)
            .reduce((t, n) => {
                let r = N.A.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of O.A.getLaunchOptions(n.id, n.branchId)) {
                    let s = `${n.id}:${n.branchId}`;
                    Z.has(s) || ((e = !0), Z.add(s));
                    let { fullExecutablePath: a } = i,
                        o = a.replace(/\\/g, "/").toLowerCase();
                    (ei[o] = r.id),
                        t.push({ id: r.id, name: r.name, exePath: o, cmdLine: "", lastFocused: 0, add: !0 });
                }
                return t;
            }, [])),
        e && eF(),
        e
    );
}
function eF() {
    if (!__OVERLAY__ && M.isPlatformEmbedded) {
        let e = [...X, ...s().values(ea.gameOverrides)];
        x.Ay.setGameCandidateOverrides(e);
    }
}
function eV(e, t) {
    let n = ea.gameOverrides[e];
    null != n && ((ea.gameOverrides[t] = n), delete ea.gameOverrides[e]);
    let r = ea.enableOverlay[e];
    null != r && ((ea.enableOverlay[t] = r), delete ea.enableOverlay[e]);
    let i = ea.enableOverlayV3[e];
    null != i && ((ea.enableOverlayV3[t] = i), delete ea.enableOverlayV3[e]);
    let s = ea.enableDetection[e];
    null != s && ((ea.enableDetection[t] = s), delete ea.enableDetection[e]);
}
function eB(e) {
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
                        return (
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eO(t) !== eO(e) && (eV(eO(t), eO(e)), (t.exePath = e.exePath)),
                            ey(t, e),
                            !0
                        );
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                ea.gamesSeen.unshift(eT(e));
            }
        }),
        ea.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eP(),
        L.A.setRecentGames(eH().map((e) => ek(e, te, N.A, C.A))));
}
function eH() {
    let e = s().values(ea.gameOverrides);
    return ea.gamesSeen.filter((e) => void 0 === ea.gameOverrides[eO(e)]).concat(e);
}
function ej(e, t) {
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
function eY(e) {
    eB(J);
}
function eW() {}
function eK(e) {
    Q = e.games;
}
function e$() {
    z = !1;
}
function ez(e) {
    let { pid: t } = e;
    (ec = t), (ed = null);
}
function eq(e) {
    let { pid: t } = e;
    (ed = t), (ec = null);
}
function eZ() {
    ec = null;
}
function eX(e) {
    let t,
        n = e.pid,
        r = J.find((e) => e.pid === n);
    if (null == r) {
        let e = Q.find((e) => e.pid === n);
        if (null == e) return;
        ((r = { ...e }).hidden = !1), J.push(r), (t = eO(r));
    } else (t = eO(r)), r.hidden && (es[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1e3)),
        (ea.gameOverrides[t] = { ...r, add: !0 }),
        eB(J),
        eF(),
        eP(),
        eC();
}
function eQ() {
    eF();
}
function eJ(e) {
    (em = e.level), (eE = e.intervalSeconds);
}
function e0() {
    (em = null), (eE = null), ep.clear();
}
function e1(e) {
    let t = e.processes
        .map((e) => ({ pid: e.pid, cleanedExePath: (0, f.v)(e.exePath) ?? e.exePath }))
        .filter((e) => {
            if (ep.has(e.pid) || eh.has(e.cleanedExePath)) return !1;
            let t = $.some((t) => e.cleanedExePath.includes(t));
            return t && ep.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        b.default.track(F.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: $,
            paths: t,
            debugging_level: em,
            interval_seconds: eE,
        });
}
function e2(e) {
    let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e,
        i = n !== ea.enableOverlay[eO(t)],
        s = r !== ea.enableOverlayV3[eO(t)];
    i && (ea.enableOverlay[eO(t)] = n),
        s && null != r && (ea.enableOverlayV3[eO(t)] = r),
        eP(),
        !__OVERLAY__ &&
            null != (null != t.id ? N.A.getDetectableGame(t.id) : null) &&
            (i && (0, g.Q3)(n, g.OverlayToggledClientSettingType.LEGACY_GAME, t.id ?? null),
            s && null != r && (0, g.Q3)(r, g.OverlayToggledClientSettingType.OOP_GAME, t.id ?? null));
}
function e3(e) {
    let { game: t } = e,
        n = eM(t);
    (ea.enableDetection[eO(t)] = !n), eP(), b.default.track(F.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function e6(e) {
    let t = eO(e.game),
        n = ea.gameOverrides[t];
    null == n && ((n = eU(e.game)).add = !0), (n.name = e.newName);
    let r = eO(n);
    delete ea.gameOverrides[t],
        (ea.gameOverrides[r] = n),
        eI(ea.enableOverlay, t, r),
        eI(ea.enableDetection, t, r),
        eI(es, t, r),
        ea.gamesSeen.forEach((n) => {
            eO(n) === t && (n.name = e.newName);
        });
    let i = !1;
    J.forEach((n) => {
        eO(n) === t && ((n.name = e.newName), (i = !0));
    }),
        eF(),
        eP(),
        i && eC();
}
function e4(e) {
    let t = eO(e.game);
    delete ea.gameOverrides[t],
        delete ea.enableOverlay[t],
        delete ea.enableDetection[t],
        (ea.gamesSeen = ea.gamesSeen.filter((e) => eO(e) !== t)),
        es[t] &&
            (J.forEach((e) => {
                t === eO(e) && (e.hidden = !0);
            }),
            delete es[t]),
        J.some((e) => eO(e) === t) && eC(),
        eF(),
        eP();
}
function e5(e) {
    if (__OVERLAY__ || !M.isPlatformEmbedded) return;
    let t = x.Ay.getDiscordUtils().notifyGameLaunched;
    if (null == t) return;
    let n = N.A.getDetectableGame(e.applicationId);
    null != n && t(n.id, n.name, e.pids ?? []);
}
function e7() {
    Y && x.Ay.setProcessObserverCollectExecutableFingerprint((0, G.P)("running-game-store")),
        h.A.hasLoadedExperiments && W.length > 0 && (eB(W), (W = []));
}
function e8(e) {
    let { status: t, modules: n } = e;
    for (let e of n) q[e] = t;
}
Y &&
    (eo = function () {
        if (!N.A.hasAttemptedFetch || !k.A.hasAttemptedFetch) return !1;
        let e = [],
            t = new Set();
        r = {};
        let n = N.A.games,
            i = k.A.nonGames,
            s = (0, P.supportsOutOfProcess)();
        for (let e of n) {
            let t = eD(e),
                n = (s && !t) || d.gH.enabledOOP,
                r = e.overlay ?? d.gH.enabled;
            el[e.id] = {
                compatibilityHook: e.overlayCompatibilityHook ?? d.gH.compatibilityHook,
                warn: e.overlayWarn ?? d.gH.warn,
                enabled: r,
                enabledOOP: n,
                allowHook: e.hook ?? d.gH.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
            };
        }
        let a = new Set();
        K.forEach((e) => {
            (e.executables ?? []).forEach((e) => {
                a.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...i].filter((e) => !(e.executables ?? []).some((e) => eg.has(e.name.toLowerCase()))),
                ...K,
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
                        null != e.id && null != k.A.getById(e.id)
                            ? (s.push(e), !1)
                            : ((e.isLauncher = e.isLauncher || t.has(e.exeName)),
                                e.isLauncher && null != e.id && (i[e.id] = e),
                                (e.windowHandle = ej(e.pid, e.windowHandle)),
                                null != ev(e))
                              ? (n.push(e), !1)
                              : !N.A.shouldBlock(e),
                    );
                    let a = n.filter(eN).length;
                    a !== eu && ((eu = a), c.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: eu })),
                        (J = e),
                        (ee = s),
                        (er = n),
                        (r = i),
                        eC(),
                        eR();
                },
                R.default.getCurrentUser()?.id,
            ),
            eF(),
            x.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, r] of e.entries()) {
                        let e = t[n],
                            i = N.A.findGame(r),
                            s = N.A.findGame(e),
                            a = (e?.id !== j ? e?.id : s?.id) ?? "";
                        b.default.track(F.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: F.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: r.name,
                            orig_game_name_v1: r.origGameName,
                            game_id_v1: i?.id,
                            distributor_v1: r.distributor,
                            verified_v1: (0, U.PQ)(r.exePath, i?.executables ?? []),
                            is_launcher_v1: r.isLauncher,
                            game_detection_enabled_v1: eM(r),
                            executable_path_v1: (0, U.Ic)(r.exePath),
                            distributor_game_id_v1: r.sku,
                            hidden_by_distributor_v1: r.hidden,
                            game_metadata_v1: (0, v.MT)(r),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: a,
                            distributor_v2: e.distributor,
                            verified_v2: (0, U.PQ)(e.exePath, s?.executables ?? []),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eM(e),
                            executable_path_v2: (0, U.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, v.MT)(e),
                        });
                    }
            }),
            x.Ay.setGameDetectionErrorCallback((e, t, n, r, i) => {});
    });
class e9 extends l.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = u.w.get(B) ?? {
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
                    (0, v.n1)(e) || (ea.gameOverrides[t] = e);
                }),
            (ea.enableOverlay = e.enableOverlay ?? {}),
            (ea.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (ea.enableDetection = e.enableDetection ?? {}),
            eF(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        this.waitFor(N.A, k.A, O.A, h.A, m.A, C.A, R.default),
            (W = e.gamesSeen.filter((e) => !(0, v.n1)(e))),
            this.syncWith([m.A], e7),
            this.syncWith([C.A, N.A, O.A], s().throttle(eG, 1e3)),
            t && eP();
    }
    getVisibleGame() {
        return null == et || ex(et) ? et : null;
    }
    getCurrentGameForAnalytics() {
        return et;
    }
    getCurrentNonGameForAnalytics() {
        return en;
    }
    getVisibleRunningGames() {
        return J.filter(ex);
    }
    getRunningGames() {
        return J;
    }
    getRunningNonGames() {
        return ee;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of J) null != ei[t.exePath] && e.push(ei[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => N.A.findGame(e))
            .filter(w.Vq)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        return J.find((t) => t.pid === e) ?? null;
    }
    getGameForName(e) {
        return J.find((t) => t.name?.toLowerCase() === e.toLowerCase()) ?? null;
    }
    getGameOrTransformedSubgameForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? eS(t) : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? r[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...el[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != ec && ec === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != ed && ed === e;
    }
    getCandidateGames() {
        return Q.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === ea.gameOverrides[eO(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === W.length;
    }
    isGameSeen(e) {
        return eH().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eH();
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
        return er.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(ea.gameOverrides);
    }
    getOverrideForGame(e) {
        return ea.gameOverrides[eO(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return V.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eL(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return V.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eL(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        return er.find((t) => (0, E.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return z && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eM(e);
    }
    addExecutableTrackedByAnalytics(e) {
        eh.add((0, f.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return q[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return q[e]?.state === "running";
    }
}
let te = new e9(c.h, {
        RUNNING_GAMES_CHANGE: eY,
        RUNNING_NON_GAMES_CHANGE: eW,
        CANDIDATE_GAMES_CHANGE: eK,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: e$,
        PERMISSION_REQUEST_ELEVATED_PROCESS: ez,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eZ,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eq,
        RUNNING_GAME_ADD_OVERRIDE: eX,
        RUNNING_GAME_TOGGLE_OVERLAY: e2,
        RUNNING_GAME_TOGGLE_DETECTION: e3,
        RUNNING_GAME_EDIT_NAME: e6,
        RUNNING_GAME_DELETE_ENTRY: e4,
        GAMES_DATABASE_UPDATE: eo,
        GAMES_DATABASE_FETCH_FAIL: eo,
        NON_GAMES_DATABASE_UPDATE: eo,
        NON_GAMES_DATABASE_FETCH_FAIL: eo,
        GAME_LAUNCH_SUCCESS: e5,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eQ,
        GAME_DETECTION_DEBUGGING_START: eJ,
        GAME_DETECTION_DEBUGGING_STOP: e0,
        GAME_DETECTION_DEBUGGING_TICK: e1,
        SYSTEM_SERVICE_INITIALIZE: e8,
    }),
    tt = te;
