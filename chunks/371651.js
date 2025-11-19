n.r(t), n.d(t, { default: () => eB }), n(388685), n(539854);
var r,
    i = n(442837),
    a = n(379649),
    o = n(570140),
    s = n(13245),
    l = n(593472),
    c = n(188274),
    u = n(710845),
    d = n(353926),
    f = n(594190),
    _ = n(314897),
    p = n(77498),
    h = n(358085),
    m = n(145597),
    g = n(427860),
    E = n(454991),
    b = n(837268),
    y = n(32300),
    O = n(542750),
    v = n(829907),
    I = n(624864),
    T = n(932404),
    S = n(987650);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let w = new u.Z("OverlayRenderStore"),
    L = b.R5.UNSET,
    x = !1,
    M = !1,
    j = !1,
    k = (0, h.isWindows)() && h.isPlatformEmbedded && !__OVERLAY__,
    U = null,
    G = {},
    B = {},
    Z = null,
    F = null,
    V = new Set([l.Jx.FULLSCREEN, l.Jx.BORDERLESS_FULLSCREEN, l.Jx.UNKNOWN, l.Jx.MINIMIZED]),
    H = new Set([l.Jx.MINIMIZED, l.Jx.UNKNOWN]),
    Y = !1,
    W = new c.Z(10000);
function K(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : g.l6.Info;
    (0, T._l)({
        pid: e,
        name: t,
        type: g.C7.Renderer,
        data: n,
        logType: r,
    });
}
function z() {
    return x;
}
function q() {
    return M;
}
function X() {
    return q() || z();
}
function Q(e) {
    var t;
    return null != (t = G[e]) ? t : null;
}
function J() {
    return Object.keys(G).map(Number);
}
function $(e, t, n) {
    var r;
    let i = null == (r = G[e]) ? void 0 : r.state;
    (G = R(C({}, G), { [e]: C({}, t) })), i !== t.state && s.Z.trackOverlayStateChanged(e, i, t.state, n);
}
function ee(e) {
    null != G[e] && ((B[e] = R(C({}, G[e]), { state: b.mM.GAME_UNTRACKED })), delete G[e]);
}
function et(e) {
    return e in G;
}
function en(e, t, n, r) {
    let i = Q(e);
    if (null == i)
        return void w.error("Tried to set property ".concat(t, " to ").concat(n, " for untracked pid ").concat(e));
    let a = C({}, i);
    (a[t] = n), $(e, a, r);
}
function er() {
    return { startTrackingTimestamp: Date.now() };
}
function ei(e, t) {
    let n = Q(e);
    if (null == n) return;
    let r = n.timer;
    switch (t) {
        case b.zE.SCREEN_TYPE_RESOLUTION:
            r.screenTypeResolutionTimestamp = Date.now();
            break;
        case b.zE.MODULE_TRACKING:
            r.moduleTrackingTimestamp = Date.now();
            break;
        case b.zE.OVERLAY_RENDERING:
            r.overlayRenderingTimestamp = Date.now();
    }
    en(e, "timer", r, "timeOverlayEvent"), eG.emitChange();
}
async function ea(e) {
    var t, n, r, i;
    let a = Q(e);
    if (null != a) return a;
    let o = f.ZP.getGameOrTransformedSubgameForPID(e),
        s = Date.now();
    if (null == o) return w.error("Tried to track game ".concat(e, " but it was not found in RunningGameStore")), null;
    let l = (0, f.b6)(o),
        { enabledOOP: c, enabledLegacy: u } = l,
        d = P(l, ["enabledOOP", "enabledLegacy"]),
        _ = p.Z.getGameByName(o.name),
        h = null != (t = await (0, v.hj)(e, 0)) ? t : o.fullscreenType,
        m = Date.now();
    w.verbose("Tracking game ".concat(e, " for overlay"));
    let g = R(C({}, d), {
        pid: e,
        oopEnabled: c,
        legacyEnabled: u,
        applicationId: null != (n = null == _ ? void 0 : _.id) ? n : null,
        gameName: null != (r = o.name) ? r : null,
        state: b.mM.INITIALIZING,
        timer: er(),
        fullscreenType: h,
        fullscreenHistory: { [m]: h },
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null == (i = null == _ ? void 0 : _.supportsOutOfProcessOverlay) || i,
        successfullyShown: !1,
    });
    return (
        h !== o.fullscreenType && (g.fullscreenHistory[s] = o.fullscreenType),
        $(e, g, "initializeTrackedGame"),
        eG.emitChange(),
        g
    );
}
function eo(e, t) {
    var n, r;
    switch (L) {
        case b.R5.UNSET:
            break;
        case b.R5.IN_PROCESS_V2:
            return {
                source: b.d0.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: b.gl.Hook,
                reason: "Forced in-process overlay rendering",
            };
        case b.R5.OUT_OF_PROCESS_V3:
            return {
                source: b.d0.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: b.gl.OutOfProcess,
                reason: "Forced out-of-process overlay rendering",
            };
        case b.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: b.d0.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: b.gl.OutOfProcessLimitedInteraction,
                reason: "Forced out-of-process limited interaction overlay rendering",
            };
    }
    if (!X())
        return {
            source: b.d0.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: b.gl.Disabled,
            reason: "Overlay globally disabled",
        };
    let i = f.ZP.getGameOrTransformedSubgameForPID(e.pid);
    if (null == i)
        return {
            source: b.d0.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: b.gl.Disabled,
            reason: "No running game found for tracked game",
        };
    let a = (0, f.b6)(i);
    if (!(a.enabledLegacy || a.enabledOOP))
        return {
            source: a.source,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: b.gl.Disabled,
            reason: a.reason,
        };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: b.d0.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: b.gl.Disabled,
            reason: "Overlay disabled for specific game",
        };
    if (!(0, y.NW)("determineOverlayMethod", !1)) {
        let e = (0, v.qT)(i),
            t = e.enabledLegacy && z();
        return R(C({}, e), {
            overlayMethod: t ? e.overlayMethod : b.gl.Disabled,
            reason: "Overlay V3 Experiment check failed",
        });
    }
    if (!q() && z()) {
        let e = (0, v.qT)(i);
        return R(C({}, e), {
            overlayMethod: e.enabledLegacy ? e.overlayMethod : b.gl.Disabled,
            reason: "isOverlayV3Enabled failed",
        });
    }
    if (!(0, m.supportsOutOfProcess)())
        return R(C({}, (0, v.qT)(i)), {
            source: b.d0.NO_OUT_OF_PROCESS_SUPPORT,
            reason: "supportsOutOfProcess failed",
        });
    if (!a.enabledOOP && a.enabledLegacy)
        return z()
            ? R(C({}, (0, v.qT)(i)), {
                  source: b.d0.LEGACY_ENABLED,
                  reason: "Legacy overlay enabled only",
              })
            : R(C({}, a), {
                  overlayMethod: b.gl.Disabled,
                  source: b.d0.LEGACY_ENABLED,
                  reason: "Legacy overlay disabled",
              });
    let o = null == (n = p.Z.getGameByName(i.name)) ? void 0 : n.id,
        s = (0, v.qc)(i) || I.Z.isLimitedInteractionOverrideEnabled(null != (r = i.id) ? r : o);
    switch (t) {
        case l.Jx.MINIMIZED:
        case l.Jx.WINDOWED:
        case l.Jx.MAXIMIZED:
        case l.Jx.BORDERLESS_FULLSCREEN: {
            let e = a.enabledOOP && q(),
                n = a.enabledLegacy && z(),
                r = s ? b.gl.OutOfProcessLimitedInteraction : b.gl.OutOfProcess;
            return R(C({}, a), {
                overlayMethod: e ? r : n ? (0, v.qT)(i).overlayMethod : b.gl.Disabled,
                reason: "Normal case - overlayOOPEnabled: "
                    .concat(e, ", overlayLegacyEnabled: ")
                    .concat(n, ", runningGameFullscreenType: ")
                    .concat(t),
            });
        }
        case l.Jx.FULLSCREEN: {
            let e = (0, v.qT)(i),
                t = e.enabledLegacy && z();
            return R(C({}, e), {
                overlayMethod: t ? e.overlayMethod : b.gl.Disabled,
                reason: "Fullscreen - using legacy overlay",
            });
        }
        case l.Jx.UNKNOWN:
            return {
                source: b.d0.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: b.gl.Disabled,
                reason: "Unknown fullscreen type",
            };
        default:
            return {
                source: b.d0.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: b.gl.Disabled,
                reason: "Missing runningFullscreenType case: ".concat(t),
            };
    }
}
async function es(e) {
    if (et(e)) {
        w.verbose("Skipping track for pid ".concat(e, " - already tracked. Determining overlay method.")),
            await em(new Set([e]));
        return;
    }
    if (!X()) return void w.verbose("Skipping track for pid ".concat(e, " - overlay is disabled"));
    let t = await ea(e);
    if (null == t) return void w.error("Failed to track game ".concat(e));
    K(e, "game_tracking_starting", {
        game_name: t.gameName,
        fullscreen_type: t.fullscreenType,
    }),
        en(e, "state", b.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        eG.emitChange(),
        w.verbose("Determining initial overlay method for pid ".concat(e));
    let n = await eu(e);
    w.verbose("Overlay method for pid ".concat(e, ": ").concat((0, v.P_)(n.overlayMethod))),
        ei(e, b.zE.SCREEN_TYPE_RESOLUTION),
        await ed(e, n, "maybeTrackGame - 2"),
        eg(v.HD),
        (F = n.overlayMethod),
        eG.emitChange(),
        await s.Z.updateTrackedGame(e, t);
}
async function el(e) {
    var t, n, r;
    if (!et(e)) return void w.verbose("Skipping untrack for pid ".concat(e, " - not tracked"));
    w.verbose("Untracking game ".concat(e));
    let i = Q(e),
        a = {
            source: null != (t = null == i ? void 0 : i.source) ? t : b.d0.DEFAULT,
            enabledOOP: null != (n = null == i ? void 0 : i.oopEnabled) && n,
            enabledLegacy: null != (r = null == i ? void 0 : i.legacyEnabled) && r,
            overlayMethod: b.gl.Disabled,
            reason: "Untracking game",
        };
    await ed(e, a, "maybeUntrackGame", !0), ee(e), eG.emitChange(), await s.Z.updateTrackedGame(e, null);
}
async function ec(e) {
    var t;
    let n = f.ZP.getGameOrTransformedSubgameForPID(e);
    if (null == n)
        return w.error("Tried to determine first fullscreen type for untracked pid ".concat(e)), l.Jx.UNKNOWN;
    let r = null != (t = null == n ? void 0 : n.fullscreenType) ? t : l.Jx.UNKNOWN;
    if (V.has(r)) {
        let t = await (0, v.hj)(e, (0, v.O0)("first_fullscreen"));
        w.verbose("Resolved fullscreen type for pid ".concat(e, ": ").concat(t)), null != t && (r = t);
    }
    return r;
}
async function eu(e) {
    let t = await ec(e);
    if (H.has(t)) {
        let n = await (0, v.hj)(e, (0, v.aW)("initial_status"));
        null != n && (t = n);
    }
    if (t === l.Jx.UNKNOWN) {
        let n = await (0, v.hj)(e, (0, v.aW)("initial_status"));
        null != n && (t = n);
    }
    let n = Q(e);
    return null == n
        ? (w.error("Tried to determine initial overlay method for untracked pid ".concat(e)),
          {
              source: b.d0.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: b.gl.Disabled,
              reason: "No tracked game found",
          })
        : eo(n, t);
}
async function ed(e, t, n) {
    var r;
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = t.overlayMethod,
        o =
            a === b.gl.Disabled
                ? i
                    ? b.mM.OVERLAY_TEARING_DOWN
                    : b.mM.OVERLAY_DISABLED
                : b.mM.WAITING_FOR_MODULE_TRACKING,
        l = "".concat(n, ": ").concat(t.reason);
    en(e, "state", o, l),
        en(e, "overlayMethod", a, l),
        en(e, "source", t.source, l),
        en(e, "oopEnabled", t.enabledOOP, l),
        en(e, "legacyEnabled", t.enabledLegacy, l),
        w.verbose(
            "Updating overlay method for pid "
                .concat(e, ' "')
                .concat(null == (r = Q(e)) ? void 0 : r.gameName, '" to ')
                .concat((0, v.P_)(a)),
        ),
        eG.emitChange();
    let c = Q(e);
    return null != c && (await s.Z.updateTrackedGame(e, c)), s.Z.updateOverlayMethod(e, a);
}
async function ef() {
    let e = new Set(
            f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(J()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await el(e), await (0, a._v)(16);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await es(e), await (0, a._v)(16);
    let i = new Set([...t].filter((t) => e.has(t)));
    await em(i),
        (n.size > 0 || r.size > 0) &&
            w.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: i,
            });
}
async function e_(e) {
    let t = !1,
        n = Q(e);
    if (null == n) return w.error("Tried to determine overlay method swap for untracked pid ".concat(e)), !1;
    if (O.l.has(n.state))
        return w.verbose("Skipping overlay method swap for pid ".concat(e, " - state is ").concat(n.state)), !1;
    let r = await (0, v.hj)(e, 0);
    if (null == r) return w.error("Failed to get revised fullscreen type for pid ".concat(e)), !1;
    n.fullscreenType !== r &&
        w.verbose("Fullscreen type different in swap for pid ".concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        });
    let i = eo(n, r);
    if (
        (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy) ||
        ((U === m.UNSET_PID || null === U) && n.state === b.mM.OVERLAY_RENDERING)
    )
        return t;
    let a = L === b.R5.OUT_OF_PROCESS_V3 || L === b.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        o = L === b.R5.IN_PROCESS_V2,
        s = (0, v.PD)(r, q()),
        l = (0, v.DH)(n, r, q());
    w.verbose("Overlay method different for pid ".concat(e), {
        oldOverlayMethod: n.overlayMethod,
        revisedFullscreenType: r,
        fullscreenHistory: n.fullscreenHistory,
        newOverlayGameStatus: i,
        shouldSwitchToHook: l,
        shouldSwitchToOutOfProcess: s,
        isForcedInProcess: o,
        isForcedOutOfProcess: a,
        legacyEnabled: z(),
        overlayEnabled: q(),
    });
    let c = () => {
        w.verbose("Updating fullscreen type for pid ".concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        }),
            en(e, "fullscreenHistory", R(C({}, n.fullscreenHistory), { [Date.now()]: r }), "updateFullscreenType"),
            en(e, "fullscreenType", r, "updateFullscreenType"),
            eG.emitChange(),
            (t = !0);
    };
    switch (i.overlayMethod) {
        case b.gl.OutOfProcess:
        case b.gl.OutOfProcessLimitedInteraction:
            ((s && !o) || a) && (c(), await eh(e, i));
            break;
        case b.gl.Hook:
            ((l && !a) || o || z()) && (c(), await ep(e, i));
            break;
        case b.gl.Disabled:
            c(), ed(e, i, "determineOverlayMethodSwap - disabled");
    }
    return t;
}
function ep(e, t) {
    var n;
    return et(e)
        ? (null == (n = Q(e)) ? void 0 : n.overlayMethod) === b.gl.Hook
            ? (w.verbose("Hook requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (w.verbose("Enabling hook for pid ".concat(e)),
              en(e, "hasChangedRenderMode", !0, "enableHook"),
              ed(e, t, "enableHook"))
        : (w.verbose("Hook requested for untracked pid ".concat(e)), Promise.resolve());
}
function eh(e, t) {
    var n;
    return et(e)
        ? (null == (n = Q(e)) ? void 0 : n.overlayMethod) === t.overlayMethod
            ? (w.verbose("OOP requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (w.verbose("Enabling OOP for pid ".concat(e)),
              en(e, "hasChangedRenderMode", !0, "enableOutOfProcess"),
              ed(e, t, "enableOutOfProcess"))
        : (w.verbose("OOP requested for untracked pid ".concat(e)), Promise.resolve());
}
async function em(e) {
    let t = !1;
    for (let n of e) (t = (await e_(n)) || t), await (0, a._v)(16);
    t &&
        (w.info("determineFullscreenOverlayMethodSwaps has changes"),
        eG.emitChange(),
        K(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
function eg(e) {
    null == Z &&
        (__OVERLAY__ && w.error("Running Polling While in Overlay Context!"),
        (Z = setTimeout(async () => {
            Z = null;
            let e = J();
            e.length > 0 && (eg(v.HD), await em(new Set(e)));
        }, e)));
}
async function eE(e, t) {
    if (!S.iP) return void w.verbose("setOverlayEnabled: not supported");
    w.info("setOverlayEnabled: supported", {
        newLegacyEnabled: e,
        newOopEnabled: t,
    });
    let n = e !== x,
        r = t !== M;
    if (
        ((x = e),
        (M = t),
        E.v.update({
            legacyEnabled: x,
            oopEnabled: M,
        }),
        w.info("setOverlayEnabled", {
            newOopEnabled: t,
            newLegacyEnabled: e,
        }),
        M && r && (0, m.setOutOfProcessSupport)(!0),
        x || M)
    )
        n && w.info("Legacy change"), r && w.info("OOP change"), eT();
    else for (let e of J()) await el(e), await (0, a._v)(16);
}
function eb() {
    ef(), (j = !1), (F = null), eM();
}
function ey(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return (
        w.info("handleOverlaySetEnabled", {
            legacyEnabled: t,
            oopEnabled: n,
        }),
        eE(t, n),
        !0
    );
}
function eO(e) {
    if (null != e.pids) for (let t of e.pids) es(t);
}
function ev(e) {
    for (let t of (__OVERLAY__ && w.error("Running handleRunningGamesChange While in Overlay Context!"), e.added))
        es(t.pid);
    for (let t of e.removed) el(t.pid);
}
function eI(e) {
    if (
        (__OVERLAY__ && w.error("Running handleGameToggleOverlay While in Overlay Context!"),
        w.verbose("handleGameToggleOverlay", { action: e }),
        !X())
    ) {
        if ((w.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
            let t = e.game.pid,
                n = Q(t);
            if (null != n) return ed(t, eo(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
        }
        return !1;
    }
    if (!("pid" in e.game)) return w.verbose("handleGameToggleOverlay: game is not a PersistGame"), ef(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (et(t)) {
        let e = Q(t);
        (null == e ? void 0 : e.legacyEnabled) !== n && en(t, "legacyEnabled", n, "handleGameToggleOverlay"),
            (null == e ? void 0 : e.oopEnabled) !== r && en(t, "oopEnabled", null != r && r, "handleGameToggleOverlay");
    }
    let i = n && z(),
        a = null != r && r && q();
    return (
        i || a
            ? (w.verbose("handleGameToggleOverlay: game enabled changed", {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: a,
              }),
              et(t) ? eT() : es(t))
            : el(t),
        !0
    );
}
async function eT() {
    await eS(), await (0, a._v)(2000);
    let e = J(),
        t = new Set([
            ...f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (w.info("Retracking ".concat(t.size, " games (").concat(e.length, " already tracked)")), t))
        await es(n), await (0, a._v)(16);
    w.info("Retracked ".concat(e.length, " games"));
}
async function eS() {
    for (let e of J()) await el(e), await (0, a._v)(16);
}
function eA(e) {
    return w.error("Overlay reload for pid", { pid: e.pid }), eT(), !0;
}
function eC(e) {
    return (
        w.error("Overlay crashed for pid ".concat(e.pid)),
        !!et(e.pid) && (en(e.pid, "state", b.mM.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
    );
}
function eN(e) {
    return (L = e.mode), eT(), !0;
}
function eR(e) {
    if (null != Q(e.pid))
        return (
            en(e.pid, "state", e.overlayState, e.reason),
            w.verbose("Updating overlay state for pid ".concat(e.pid, " to ").concat(e.overlayState)),
            e.overlayState === b.mM.WAITING_FOR_POPOUT_OPEN || e.overlayState === b.mM.WAITING_FOR_OVERLAY_OPEN
                ? ei(e.pid, b.zE.MODULE_TRACKING)
                : e.overlayState === b.mM.OVERLAY_RENDERING && ei(e.pid, b.zE.OVERLAY_RENDERING),
            !0
        );
}
function eP() {
    return eT(), !0;
}
function eD(e) {
    return e.mode === b.GO.TrackFocusPIDs && (Y = e.enabled), !0;
}
function ew() {
    return (W = new c.Z(10000)), !0;
}
function eL(e) {
    if (((U = e.pid), Y)) {
        var t;
        let n = [performance.timeOrigin + performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
        W.push(n);
    }
    return !(0, m.isValidGamePID)(e.pid) || ((0, m.setPID)(e.pid), !0);
}
function ex(e) {
    s.Z.updateOverlayState(e.pid, b.mM.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
        et(e.pid) && en(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
        K(e.pid, "overlay_successfully_shown", { pid: e.pid });
    let t = Q(e.pid);
    null != t && s.Z.updateTrackedGame(e.pid, t);
}
function eM() {
    d.Z.hasLoadedExperiments && !j && ((j = !0), eE(E.v.legacyEnabled, E.v.oopEnabled));
}
function ej() {
    (j = !1), (F = null);
}
function ek() {
    (j = !1), (F = null), eS();
}
class eU extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(_.default, d.Z, p.Z, I.Z, f.ZP), this.syncWith([d.Z], eM);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return W;
    }
    getHasLoadedExperiments() {
        return j;
    }
    getForcedRenderMode() {
        return L;
    }
    isAnyOverlayRendering() {
        return this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        var t, n;
        return __OVERLAY__
            ? b.gl.Hook
            : null != (n = null == (t = Q(e)) ? void 0 : t.overlayMethod)
              ? n
              : b.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === b.gl.OutOfProcess || t === b.gl.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null != (n = null == (t = Q(e)) ? void 0 : t.hasChangedRenderMode) && n;
    }
    getTrackedGameByPid(e) {
        return Q(e);
    }
    getTrackedGames() {
        return G;
    }
    getClosedTrackedGamesHistory() {
        return B;
    }
    getGameOverlayStatus(e) {
        let t = Q(e.pid);
        return null == t
            ? null
            : C(
                  {
                      enabledOOP: t.oopEnabled,
                      enabledLegacy: t.legacyEnabled,
                  },
                  t,
              );
    }
    getGlobalEnabledStatus() {
        return {
            oopEnabled: q(),
            legacyEnabled: z(),
        };
    }
    getAnyGlobalEnabledOverlay() {
        return q() || z();
    }
    getPerGameEnabledStatus(e) {
        if (null == e)
            return {
                oopEnabled: !1,
                legacyEnabled: !1,
            };
        let t = Q(e.pid);
        return null == t
            ? {
                  oopEnabled: !1,
                  legacyEnabled: !1,
              }
            : {
                  oopEnabled: t.oopEnabled,
                  legacyEnabled: t.legacyEnabled,
              };
    }
    getRenderMethod(e) {
        var t, n;
        if (null != e) return null != (n = null == (t = Q(e)) ? void 0 : t.overlayMethod) ? n : void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return F;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(G).filter((e) => e.overlayMethod !== b.gl.Disabled && e.state === b.mM.OVERLAY_RENDERING);
    }
}
A(eU, "displayName", "OverlayRenderStore");
let eG = new eU(
        o.Z,
        !k
            ? {}
            : {
                  CONNECTION_OPEN: eb,
                  LOGIN: ej,
                  LOGOUT: ek,
                  EXPERIMENT_OVERRIDE_BUCKET: eb,
                  OVERLAY_SET_ENABLED: ey,
                  GAME_LAUNCH_SUCCESS: eO,
                  RUNNING_GAMES_CHANGE: ev,
                  RUNNING_GAME_TOGGLE_OVERLAY: eI,
                  OVERLAY_FORCE_RENDER_MODE: eN,
                  OVERLAY_UPDATE_OVERLAY_STATE: eR,
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eP,
                  OVERLAY_CRASHED: eC,
                  OVERLAY_RELOAD: eA,
                  OVERLAY_FOCUSED: eL,
                  OVERLAY_SUCCESSFULLY_SHOWN: ex,
                  OVERLAY_RENDER_DEBUG_MODE: eD,
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: ew,
              },
    ),
    eB = eG;
