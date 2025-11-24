n.r(t), n.d(t, { default: () => eG }), n(388685), n(539854);
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
    y = n(542750),
    O = n(829907),
    v = n(624864),
    I = n(932404),
    T = n(509140),
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
    k = (0, h.isWindows)() && h.isPlatformEmbedded && !__OVERLAY__,
    j = null,
    U = {},
    G = {},
    B = null,
    Z = null,
    F = new Set([l.Jx.FULLSCREEN, l.Jx.BORDERLESS_FULLSCREEN, l.Jx.UNKNOWN, l.Jx.MINIMIZED]),
    V = new Set([l.Jx.MINIMIZED, l.Jx.UNKNOWN]),
    H = !1,
    Y = new c.Z(10000);
function W(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : g.l6.Info;
    (0, I._l)({
        pid: e,
        name: t,
        type: g.C7.Renderer,
        data: n,
        logType: r,
    });
}
function K() {
    return x;
}
function z() {
    return T.Z.isOverlayEnabled;
}
function q() {
    return z() || K();
}
function X(e) {
    var t;
    return null != (t = U[e]) ? t : null;
}
function Q() {
    return Object.keys(U).map(Number);
}
function J(e, t, n) {
    var r;
    let i = null == (r = U[e]) ? void 0 : r.state;
    (U = R(C({}, U), { [e]: C({}, t) })), i !== t.state && s.Z.trackOverlayStateChanged(e, i, t.state, n);
}
function $(e) {
    null != U[e] && ((G[e] = R(C({}, U[e]), { state: b.mM.GAME_UNTRACKED })), delete U[e]);
}
function ee(e) {
    return e in U;
}
function et(e, t, n, r) {
    let i = X(e);
    if (null == i)
        return void w.error("Tried to set property ".concat(t, " to ").concat(n, " for untracked pid ").concat(e));
    let a = C({}, i);
    (a[t] = n), J(e, a, r);
}
function en() {
    return { startTrackingTimestamp: Date.now() };
}
function er(e, t) {
    let n = X(e);
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
    et(e, "timer", r, "timeOverlayEvent"), eU.emitChange();
}
async function ei(e) {
    var t, n, r, i;
    let a = X(e);
    if (null != a) return a;
    let o = f.ZP.getGameOrTransformedSubgameForPID(e),
        s = Date.now();
    if (null == o) return w.error("Tried to track game ".concat(e, " but it was not found in RunningGameStore")), null;
    let l = (0, f.b6)(o),
        { enabledOOP: c, enabledLegacy: u } = l,
        d = P(l, ["enabledOOP", "enabledLegacy"]),
        _ = p.Z.getGameByName(o.name),
        h = null != (t = await (0, O.hj)(e, 0)) ? t : o.fullscreenType,
        m = Date.now();
    w.verbose("Tracking game ".concat(e, " for overlay"));
    let g = R(C({}, d), {
        pid: e,
        oopEnabled: c,
        legacyEnabled: u,
        applicationId: null != (n = null == _ ? void 0 : _.id) ? n : null,
        gameName: null != (r = o.name) ? r : null,
        state: b.mM.INITIALIZING,
        timer: en(),
        fullscreenType: h,
        fullscreenHistory: { [m]: h },
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null == (i = null == _ ? void 0 : _.supportsOutOfProcessOverlay) || i,
        successfullyShown: !1,
    });
    return (
        h !== o.fullscreenType && (g.fullscreenHistory[s] = o.fullscreenType),
        J(e, g, "initializeTrackedGame"),
        eU.emitChange(),
        g
    );
}
function ea(e, t) {
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
    if (!q())
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
    if (!z() && K()) {
        let e = (0, O.qT)(i);
        return R(C({}, e), {
            overlayMethod: e.enabledLegacy ? e.overlayMethod : b.gl.Disabled,
            reason: "isOverlayV3Enabled failed",
        });
    }
    if (!(0, m.supportsOutOfProcess)())
        return R(C({}, (0, O.qT)(i)), {
            source: b.d0.NO_OUT_OF_PROCESS_SUPPORT,
            reason: "supportsOutOfProcess failed",
        });
    if (!a.enabledOOP && a.enabledLegacy)
        return K()
            ? R(C({}, (0, O.qT)(i)), {
                  source: b.d0.LEGACY_ENABLED,
                  reason: "Legacy overlay enabled only",
              })
            : R(C({}, a), {
                  overlayMethod: b.gl.Disabled,
                  source: b.d0.LEGACY_ENABLED,
                  reason: "Legacy overlay disabled",
              });
    let o = null == (n = p.Z.getGameByName(i.name)) ? void 0 : n.id,
        s = (0, O.qc)(i) || v.Z.isLimitedInteractionOverrideEnabled(null != (r = i.id) ? r : o);
    switch (t) {
        case l.Jx.MINIMIZED:
        case l.Jx.WINDOWED:
        case l.Jx.MAXIMIZED:
        case l.Jx.BORDERLESS_FULLSCREEN: {
            let e = a.enabledOOP && z(),
                n = a.enabledLegacy && K(),
                r = s ? b.gl.OutOfProcessLimitedInteraction : b.gl.OutOfProcess;
            return R(C({}, a), {
                overlayMethod: e ? r : n ? (0, O.qT)(i).overlayMethod : b.gl.Disabled,
                reason: "Normal case - overlayOOPEnabled: "
                    .concat(e, ", overlayLegacyEnabled: ")
                    .concat(n, ", runningGameFullscreenType: ")
                    .concat(t),
            });
        }
        case l.Jx.FULLSCREEN: {
            let e = (0, O.qT)(i),
                t = e.enabledLegacy && K(),
                n = t ? e.overlayMethod : b.gl.Disabled;
            return R(C({}, e), {
                overlayMethod: n,
                reason: "Fullscreen - legacyEnabled: ".concat(t, ", newOverlayMethod: ").concat(n),
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
async function eo(e) {
    if (ee(e)) {
        w.verbose("Skipping track for pid ".concat(e, " - already tracked. Determining overlay method.")),
            await eh(new Set([e]));
        return;
    }
    if (!q()) return void w.verbose("Skipping track for pid ".concat(e, " - overlay is disabled"));
    let t = await ei(e);
    if (null == t) return void w.error("Failed to track game ".concat(e));
    W(e, "game_tracking_starting", {
        game_name: t.gameName,
        fullscreen_type: t.fullscreenType,
    }),
        et(e, "state", b.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        eU.emitChange(),
        w.verbose("Determining initial overlay method for pid ".concat(e));
    let n = await ec(e);
    w.verbose("Overlay method for pid ".concat(e, ": ").concat((0, O.P_)(n.overlayMethod))),
        er(e, b.zE.SCREEN_TYPE_RESOLUTION),
        await eu(e, n, "maybeTrackGame - 2"),
        em(O.HD),
        (Z = n.overlayMethod),
        eU.emitChange(),
        await s.Z.updateTrackedGame(e, t);
}
async function es(e) {
    var t, n, r;
    if (!ee(e)) return void w.verbose("Skipping untrack for pid ".concat(e, " - not tracked"));
    w.verbose("Untracking game ".concat(e));
    let i = X(e),
        a = {
            source: null != (t = null == i ? void 0 : i.source) ? t : b.d0.DEFAULT,
            enabledOOP: null != (n = null == i ? void 0 : i.oopEnabled) && n,
            enabledLegacy: null != (r = null == i ? void 0 : i.legacyEnabled) && r,
            overlayMethod: b.gl.Disabled,
            reason: "Untracking game",
        };
    await eu(e, a, "maybeUntrackGame", !0), $(e), eU.emitChange(), await s.Z.updateTrackedGame(e, null);
}
async function el(e) {
    var t;
    let n = f.ZP.getGameOrTransformedSubgameForPID(e);
    if (null == n)
        return w.error("Tried to determine first fullscreen type for untracked pid ".concat(e)), l.Jx.UNKNOWN;
    let r = null != (t = null == n ? void 0 : n.fullscreenType) ? t : l.Jx.UNKNOWN;
    if (F.has(r)) {
        let t = await (0, O.hj)(e, (0, O.O0)("first_fullscreen"));
        w.verbose("Resolved fullscreen type for pid ".concat(e, ": ").concat(t)), null != t && (r = t);
    }
    return r;
}
async function ec(e) {
    let t = await el(e);
    if (V.has(t)) {
        let n = await (0, O.hj)(e, (0, O.aW)("initial_status"));
        null != n && (t = n);
    }
    if (t === l.Jx.UNKNOWN) {
        let n = await (0, O.hj)(e, (0, O.aW)("initial_status"));
        null != n && (t = n);
    }
    let n = X(e);
    return null == n
        ? (w.error("Tried to determine initial overlay method for untracked pid ".concat(e)),
          {
              source: b.d0.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: b.gl.Disabled,
              reason: "No tracked game found",
          })
        : ea(n, t);
}
async function eu(e, t, n) {
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
    et(e, "state", o, l),
        et(e, "overlayMethod", a, l),
        et(e, "source", t.source, l),
        et(e, "oopEnabled", t.enabledOOP, l),
        et(e, "legacyEnabled", t.enabledLegacy, l),
        w.verbose(
            "Updating overlay method for pid "
                .concat(e, ' "')
                .concat(null == (r = X(e)) ? void 0 : r.gameName, '" to ')
                .concat((0, O.P_)(a)),
        ),
        eU.emitChange();
    let c = X(e);
    return null != c && (await s.Z.updateTrackedGame(e, c)), s.Z.updateOverlayMethod(e, a);
}
async function ed() {
    let e = new Set(
            f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(Q()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await es(e), await (0, a._v)(16);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await eo(e), await (0, a._v)(16);
    let i = new Set([...t].filter((t) => e.has(t)));
    await eh(i),
        (n.size > 0 || r.size > 0) &&
            w.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: i,
            });
}
async function ef(e) {
    let t = !1,
        n = X(e);
    if (null == n) return w.error("Tried to determine overlay method swap for untracked pid ".concat(e)), !1;
    if (y.l.has(n.state))
        return w.verbose("Skipping overlay method swap for pid ".concat(e, " - state is ").concat(n.state)), !1;
    let r = await (0, O.hj)(e, 0);
    if (null == r) return w.error("Failed to get revised fullscreen type for pid ".concat(e)), !1;
    n.fullscreenType !== r &&
        w.verbose("Fullscreen type different in swap for pid ".concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        });
    let i = ea(n, r);
    if (
        (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy) ||
        ((j === m.UNSET_PID || null === j) && n.state === b.mM.OVERLAY_RENDERING)
    )
        return t;
    let a = L === b.R5.OUT_OF_PROCESS_V3 || L === b.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        o = L === b.R5.IN_PROCESS_V2,
        s = (0, O.PD)(r, z()),
        l = (0, O.DH)(n, r, z());
    w.verbose("Overlay method different for pid ".concat(e), {
        oldOverlayMethod: n.overlayMethod,
        revisedFullscreenType: r,
        fullscreenHistory: n.fullscreenHistory,
        newOverlayGameStatus: i,
        shouldSwitchToHook: l,
        shouldSwitchToOutOfProcess: s,
        isForcedInProcess: o,
        isForcedOutOfProcess: a,
        legacyEnabled: K(),
        overlayEnabled: z(),
    });
    let c = () => {
        w.verbose("Updating fullscreen type for pid ".concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        }),
            et(e, "fullscreenHistory", R(C({}, n.fullscreenHistory), { [Date.now()]: r }), "updateFullscreenType"),
            et(e, "fullscreenType", r, "updateFullscreenType"),
            eU.emitChange(),
            (t = !0);
    };
    switch (i.overlayMethod) {
        case b.gl.OutOfProcess:
        case b.gl.OutOfProcessLimitedInteraction:
            ((s && !o) || a) && (c(), await ep(e, i));
            break;
        case b.gl.Hook:
            ((l && !a) || o || K()) && (c(), await e_(e, i));
            break;
        case b.gl.Disabled:
            c(), eu(e, i, "determineOverlayMethodSwap - disabled");
    }
    return t;
}
function e_(e, t) {
    var n;
    return ee(e)
        ? (null == (n = X(e)) ? void 0 : n.overlayMethod) === b.gl.Hook
            ? (w.verbose("Hook requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (w.verbose("Enabling hook for pid ".concat(e)),
              et(e, "hasChangedRenderMode", !0, "enableHook"),
              eu(e, t, "enableHook"))
        : (w.verbose("Hook requested for untracked pid ".concat(e)), Promise.resolve());
}
function ep(e, t) {
    var n;
    return ee(e)
        ? (null == (n = X(e)) ? void 0 : n.overlayMethod) === t.overlayMethod
            ? (w.verbose("OOP requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (w.verbose("Enabling OOP for pid ".concat(e)),
              et(e, "hasChangedRenderMode", !0, "enableOutOfProcess"),
              eu(e, t, "enableOutOfProcess"))
        : (w.verbose("OOP requested for untracked pid ".concat(e)), Promise.resolve());
}
async function eh(e) {
    let t = !1;
    for (let n of e) (t = (await ef(n)) || t), await (0, a._v)(16);
    t &&
        (w.info("determineFullscreenOverlayMethodSwaps has changes"),
        eU.emitChange(),
        W(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
function em(e) {
    null == B &&
        (__OVERLAY__ && w.error("Running Polling While in Overlay Context!"),
        (B = setTimeout(async () => {
            B = null;
            let e = Q();
            e.length > 0 && (em(O.HD), await eh(new Set(e)));
        }, e)));
}
async function eg(e, t) {
    if (!S.iP) return void w.verbose("setOverlayEnabled: not supported");
    if (
        (w.info("setOverlayEnabled: supported", {
            newLegacyEnabled: e,
            newOopEnabled: t,
        }),
        (x = e),
        E.v.update({
            legacyEnabled: e,
            oopEnabled: t,
        }),
        w.info("setOverlayEnabled", {
            newOopEnabled: t,
            newLegacyEnabled: e,
        }),
        e || t)
    )
        return void eI();
    for (let e of Q()) await es(e), await (0, a._v)(16);
}
function eE() {
    ed(), (M = !1), (Z = null), ex();
}
function eb(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return (
        w.info("handleOverlaySetEnabled", {
            legacyEnabled: t,
            oopEnabled: n,
        }),
        eg(t, n),
        !0
    );
}
function ey(e) {
    if (null != e.pids) for (let t of e.pids) eo(t);
}
function eO(e) {
    for (let t of (__OVERLAY__ && w.error("Running handleRunningGamesChange While in Overlay Context!"), e.added))
        eo(t.pid);
    for (let t of e.removed) es(t.pid);
}
function ev(e) {
    if (
        (__OVERLAY__ && w.error("Running handleGameToggleOverlay While in Overlay Context!"),
        w.verbose("handleGameToggleOverlay", { action: e }),
        !q())
    ) {
        if ((w.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
            let t = e.game.pid,
                n = X(t);
            if (null != n) return eu(t, ea(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
        }
        return !1;
    }
    if (!("pid" in e.game)) return w.verbose("handleGameToggleOverlay: game is not a PersistGame"), ed(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (ee(t)) {
        let e = X(t);
        (null == e ? void 0 : e.legacyEnabled) !== n && et(t, "legacyEnabled", n, "handleGameToggleOverlay"),
            (null == e ? void 0 : e.oopEnabled) !== r && et(t, "oopEnabled", null != r && r, "handleGameToggleOverlay");
    }
    let i = n && K(),
        a = null != r && r && z();
    return (
        i || a
            ? (w.verbose("handleGameToggleOverlay: game enabled changed", {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: a,
              }),
              ee(t) ? eI() : eo(t))
            : es(t),
        !0
    );
}
async function eI() {
    await eT(), await (0, a._v)(2000);
    let e = Q(),
        t = new Set([
            ...f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (w.info("Retracking ".concat(t.size, " games (").concat(e.length, " already tracked)")), t))
        await eo(n), await (0, a._v)(16);
    w.info("Retracked ".concat(e.length, " games"));
}
async function eT() {
    for (let e of Q()) await es(e), await (0, a._v)(16);
}
function eS(e) {
    return w.error("Overlay reload for pid", { pid: e.pid }), eI(), !0;
}
function eA(e) {
    return (
        w.error("Overlay crashed for pid ".concat(e.pid)),
        !!ee(e.pid) && (et(e.pid, "state", b.mM.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
    );
}
function eC(e) {
    return (L = e.mode), eI(), !0;
}
function eN(e) {
    if (null != X(e.pid))
        return (
            et(e.pid, "state", e.overlayState, e.reason),
            w.verbose("Updating overlay state for pid ".concat(e.pid, " to ").concat(e.overlayState)),
            e.overlayState === b.mM.WAITING_FOR_POPOUT_OPEN || e.overlayState === b.mM.WAITING_FOR_OVERLAY_OPEN
                ? er(e.pid, b.zE.MODULE_TRACKING)
                : e.overlayState === b.mM.OVERLAY_RENDERING && er(e.pid, b.zE.OVERLAY_RENDERING),
            !0
        );
}
function eR() {
    return eI(), !0;
}
function eP(e) {
    return e.mode === b.GO.TrackFocusPIDs && (H = e.enabled), !0;
}
function eD() {
    return (Y = new c.Z(10000)), !0;
}
function ew(e) {
    if (((j = e.pid), H)) {
        var t;
        let n = [performance.timeOrigin + performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
        Y.push(n);
    }
    return !(0, m.isValidGamePID)(e.pid) || ((0, m.setPID)(e.pid), !0);
}
function eL(e) {
    s.Z.updateOverlayState(e.pid, b.mM.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
        ee(e.pid) && et(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
        W(e.pid, "overlay_successfully_shown", { pid: e.pid });
    let t = X(e.pid);
    null != t && s.Z.updateTrackedGame(e.pid, t);
}
function ex() {
    d.Z.hasLoadedExperiments && !M && ((M = !0), eg(E.v.legacyEnabled, E.v.oopEnabled));
}
function eM() {
    (M = !1), (Z = null);
}
function ek() {
    (M = !1), (Z = null), eT();
}
class ej extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(_.default, d.Z, p.Z, v.Z, f.ZP, T.Z), this.syncWith([d.Z], ex);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return Y;
    }
    getHasLoadedExperiments() {
        return M;
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
            : null != (n = null == (t = X(e)) ? void 0 : t.overlayMethod)
              ? n
              : b.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === b.gl.OutOfProcess || t === b.gl.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null != (n = null == (t = X(e)) ? void 0 : t.hasChangedRenderMode) && n;
    }
    getTrackedGameByPid(e) {
        return X(e);
    }
    getTrackedGames() {
        return U;
    }
    getClosedTrackedGamesHistory() {
        return G;
    }
    getGameOverlayStatus(e) {
        let t = X(e.pid);
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
            oopEnabled: z(),
            legacyEnabled: K(),
        };
    }
    getAnyGlobalEnabledOverlay() {
        return z() || K();
    }
    getPerGameEnabledStatus(e) {
        if (null == e)
            return {
                oopEnabled: !1,
                legacyEnabled: !1,
            };
        let t = X(e.pid);
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
        if (null != e) return null != (n = null == (t = X(e)) ? void 0 : t.overlayMethod) ? n : void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return Z;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(U).filter((e) => e.overlayMethod !== b.gl.Disabled && e.state === b.mM.OVERLAY_RENDERING);
    }
}
A(ej, "displayName", "OverlayRenderStore");
let eU = new ej(
        o.Z,
        !k
            ? {}
            : {
                  CONNECTION_OPEN: eE,
                  LOGIN: eM,
                  LOGOUT: ek,
                  EXPERIMENT_OVERRIDE_BUCKET: eE,
                  OVERLAY_SET_ENABLED: eb,
                  GAME_LAUNCH_SUCCESS: ey,
                  RUNNING_GAMES_CHANGE: eO,
                  RUNNING_GAME_TOGGLE_OVERLAY: ev,
                  OVERLAY_FORCE_RENDER_MODE: eC,
                  OVERLAY_UPDATE_OVERLAY_STATE: eN,
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eR,
                  OVERLAY_CRASHED: eA,
                  OVERLAY_RELOAD: eS,
                  OVERLAY_FOCUSED: ew,
                  OVERLAY_SUCCESSFULLY_SHOWN: eL,
                  OVERLAY_RENDER_DEBUG_MODE: eP,
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eD,
              },
    ),
    eG = eU;
