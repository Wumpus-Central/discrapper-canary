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
    p = n(314897),
    _ = n(77498),
    m = n(358085),
    h = n(145597),
    g = n(454991),
    E = n(837268),
    b = n(307149),
    y = n(542750),
    O = n(829907),
    v = n(624864),
    S = n(932404),
    I = n(509140),
    T = n(987650);
function C(e, t, n) {
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
function A(e) {
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
                C(e, t, n[t]);
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
function P(e, t) {
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
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let D = new u.Z("OverlayRenderStore"),
    x = E.R5.UNSET,
    L = !1,
    j = !1,
    M = (0, m.isWindows)() && m.isPlatformEmbedded && !__OVERLAY__,
    k = null,
    U = {},
    G = {},
    Z = null,
    F = null,
    B = new Set([l.Jx.FULLSCREEN, l.Jx.BORDERLESS_FULLSCREEN, l.Jx.UNKNOWN, l.Jx.MINIMIZED]),
    V = new Set([l.Jx.MINIMIZED, l.Jx.UNKNOWN]),
    H = !1,
    Y = new c.Z(10000);
function W(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b.l6.Info;
    (0, S._l)({
        pid: e,
        name: t,
        type: b.C7.Renderer,
        data: n,
        logType: r,
    });
}
function K() {
    return L;
}
function z() {
    return I.Z.isOverlayEnabled;
}
function q() {
    return z() || K();
}
function Q(e) {
    var t;
    return null != (t = U[e]) ? t : null;
}
function X() {
    return Object.keys(U).map(Number);
}
function J(e, t, n) {
    var r;
    let i = null == (r = U[e]) ? void 0 : r.state;
    (U = P(A({}, U), { [e]: A({}, t) })), i !== t.state && s.Z.trackOverlayStateChanged(e, i, t.state, n);
}
function $(e) {
    null != U[e] && ((G[e] = P(A({}, U[e]), { state: E.mM.GAME_UNTRACKED })), delete U[e]);
}
function ee(e) {
    return e in U;
}
function et(e, t, n, r) {
    let i = Q(e);
    if (null == i)
        return void D.error("Tried to set property ".concat(t, " to ").concat(n, " for untracked pid ").concat(e));
    let a = A({}, i);
    (a[t] = n), J(e, a, r);
}
function en() {
    return { startTrackingTimestamp: Date.now() };
}
function er(e, t) {
    let n = Q(e);
    if (null == n) return;
    let r = n.timer;
    switch (t) {
        case E.zE.SCREEN_TYPE_RESOLUTION:
            r.screenTypeResolutionTimestamp = Date.now();
            break;
        case E.zE.MODULE_TRACKING:
            r.moduleTrackingTimestamp = Date.now();
            break;
        case E.zE.OVERLAY_RENDERING:
            r.overlayRenderingTimestamp = Date.now();
    }
    et(e, "timer", r, "timeOverlayEvent"), eU.emitChange();
}
async function ei(e) {
    var t, n, r, i;
    let a = Q(e);
    if (null != a) return a;
    let o = f.ZP.getGameOrTransformedSubgameForPID(e),
        s = Date.now();
    if (null == o) return D.error("Tried to track game ".concat(e, " but it was not found in RunningGameStore")), null;
    let l = (0, f.b6)(o),
        { enabledOOP: c, enabledLegacy: u } = l,
        d = R(l, ["enabledOOP", "enabledLegacy"]),
        p = _.Z.getGameByName(o.name),
        m = null != (t = await (0, O.hj)(e, 0)) ? t : o.fullscreenType,
        h = Date.now();
    D.verbose("Tracking game ".concat(e, " for overlay"));
    let g = P(A({}, d), {
        pid: e,
        oopEnabled: c,
        legacyEnabled: u,
        applicationId: null != (n = null == p ? void 0 : p.id) ? n : null,
        gameName: null != (r = o.name) ? r : null,
        state: E.mM.INITIALIZING,
        timer: en(),
        fullscreenType: m,
        fullscreenHistory: { [h]: m },
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null == (i = null == p ? void 0 : p.supportsOutOfProcessOverlay) || i,
        successfullyShown: !1,
    });
    return (
        m !== o.fullscreenType && (g.fullscreenHistory[s] = o.fullscreenType),
        J(e, g, "initializeTrackedGame"),
        eU.emitChange(),
        g
    );
}
function ea(e, t) {
    var n, r;
    switch (x) {
        case E.R5.UNSET:
            break;
        case E.R5.IN_PROCESS_V2:
            return {
                source: E.d0.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: E.gl.Hook,
                reason: "Forced in-process overlay rendering",
            };
        case E.R5.OUT_OF_PROCESS_V3:
            return {
                source: E.d0.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: E.gl.OutOfProcess,
                reason: "Forced out-of-process overlay rendering",
            };
        case E.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: E.d0.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: E.gl.OutOfProcessLimitedInteraction,
                reason: "Forced out-of-process limited interaction overlay rendering",
            };
    }
    if (!q())
        return {
            source: E.d0.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: E.gl.Disabled,
            reason: "Overlay globally disabled",
        };
    let i = f.ZP.getGameOrTransformedSubgameForPID(e.pid);
    if (null == i)
        return {
            source: E.d0.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: E.gl.Disabled,
            reason: "No running game found for tracked game",
        };
    let a = (0, f.b6)(i);
    if (!(a.enabledLegacy || a.enabledOOP))
        return {
            source: a.source,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: E.gl.Disabled,
            reason: a.reason,
        };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: E.d0.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: E.gl.Disabled,
            reason: "Overlay disabled for specific game",
        };
    if (!z() && K()) {
        let e = (0, O.qT)(i);
        return P(A({}, e), {
            overlayMethod: e.enabledLegacy ? e.overlayMethod : E.gl.Disabled,
            reason: "isOverlayV3Enabled failed",
        });
    }
    if (!(0, h.supportsOutOfProcess)())
        return P(A({}, (0, O.qT)(i)), {
            source: E.d0.NO_OUT_OF_PROCESS_SUPPORT,
            reason: "supportsOutOfProcess failed",
        });
    if (!a.enabledOOP && a.enabledLegacy)
        return K()
            ? P(A({}, (0, O.qT)(i)), {
                  source: E.d0.LEGACY_ENABLED,
                  reason: "Legacy overlay enabled only",
              })
            : P(A({}, a), {
                  overlayMethod: E.gl.Disabled,
                  source: E.d0.LEGACY_ENABLED,
                  reason: "Legacy overlay disabled",
              });
    let o = null == (n = _.Z.getGameByName(i.name)) ? void 0 : n.id,
        s = (0, O.qc)(i) || v.Z.isLimitedInteractionOverrideEnabled(null != (r = i.id) ? r : o);
    switch (t) {
        case l.Jx.MINIMIZED:
        case l.Jx.WINDOWED:
        case l.Jx.MAXIMIZED:
        case l.Jx.BORDERLESS_FULLSCREEN: {
            let e = a.enabledOOP && z(),
                n = a.enabledLegacy && K(),
                r = s ? E.gl.OutOfProcessLimitedInteraction : E.gl.OutOfProcess;
            return P(A({}, a), {
                overlayMethod: e ? r : n ? (0, O.qT)(i).overlayMethod : E.gl.Disabled,
                reason: "Normal case - overlayOOPEnabled: "
                    .concat(e, ", overlayLegacyEnabled: ")
                    .concat(n, ", runningGameFullscreenType: ")
                    .concat(t),
            });
        }
        case l.Jx.FULLSCREEN: {
            let e = (0, O.qT)(i),
                t = e.enabledLegacy && K(),
                n = t ? e.overlayMethod : E.gl.Disabled;
            return P(A({}, e), {
                overlayMethod: n,
                reason: "Fullscreen - legacyEnabled: ".concat(t, ", newOverlayMethod: ").concat(n),
            });
        }
        case l.Jx.UNKNOWN:
            return {
                source: E.d0.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: E.gl.Disabled,
                reason: "Unknown fullscreen type",
            };
        default:
            return {
                source: E.d0.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: E.gl.Disabled,
                reason: "Missing runningFullscreenType case: ".concat(t),
            };
    }
}
async function eo(e) {
    if (ee(e)) {
        D.verbose("Skipping track for pid ".concat(e, " - already tracked. Determining overlay method.")),
            await em(new Set([e]));
        return;
    }
    if (!q()) return void D.verbose("Skipping track for pid ".concat(e, " - overlay is disabled"));
    let t = await ei(e);
    if (null == t) return void D.error("Failed to track game ".concat(e));
    W(e, "game_tracking_starting", {
        game_name: t.gameName,
        fullscreen_type: t.fullscreenType,
    }),
        et(e, "state", E.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        eU.emitChange(),
        D.verbose("Determining initial overlay method for pid ".concat(e));
    let n = await ec(e);
    D.verbose("Overlay method for pid ".concat(e, ": ").concat((0, O.P_)(n.overlayMethod))),
        er(e, E.zE.SCREEN_TYPE_RESOLUTION),
        await eu(e, n, "maybeTrackGame - 2"),
        eh(O.HD),
        (F = n.overlayMethod),
        eU.emitChange(),
        await s.Z.updateTrackedGame(e, t);
}
async function es(e) {
    var t, n, r;
    if (!ee(e)) return void D.verbose("Skipping untrack for pid ".concat(e, " - not tracked"));
    D.verbose("Untracking game ".concat(e));
    let i = Q(e),
        a = {
            source: null != (t = null == i ? void 0 : i.source) ? t : E.d0.DEFAULT,
            enabledOOP: null != (n = null == i ? void 0 : i.oopEnabled) && n,
            enabledLegacy: null != (r = null == i ? void 0 : i.legacyEnabled) && r,
            overlayMethod: E.gl.Disabled,
            reason: "Untracking game",
        };
    await eu(e, a, "maybeUntrackGame", !0), $(e), eU.emitChange(), await s.Z.updateTrackedGame(e, null);
}
async function el(e) {
    var t;
    let n = f.ZP.getGameOrTransformedSubgameForPID(e);
    if (null == n)
        return D.error("Tried to determine first fullscreen type for untracked pid ".concat(e)), l.Jx.UNKNOWN;
    let r = null != (t = null == n ? void 0 : n.fullscreenType) ? t : l.Jx.UNKNOWN;
    if (B.has(r)) {
        let t = await (0, O.hj)(e, (0, O.O0)("first_fullscreen"));
        D.verbose("Resolved fullscreen type for pid ".concat(e, ": ").concat(t)), null != t && (r = t);
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
    let n = Q(e);
    return null == n
        ? (D.error("Tried to determine initial overlay method for untracked pid ".concat(e)),
          {
              source: E.d0.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: E.gl.Disabled,
              reason: "No tracked game found",
          })
        : ea(n, t);
}
async function eu(e, t, n) {
    var r;
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = t.overlayMethod,
        o =
            a === E.gl.Disabled
                ? i
                    ? E.mM.OVERLAY_TEARING_DOWN
                    : E.mM.OVERLAY_DISABLED
                : E.mM.WAITING_FOR_MODULE_TRACKING,
        l = "".concat(n, ": ").concat(t.reason);
    et(e, "state", o, l),
        et(e, "overlayMethod", a, l),
        et(e, "source", t.source, l),
        et(e, "oopEnabled", t.enabledOOP, l),
        et(e, "legacyEnabled", t.enabledLegacy, l),
        D.verbose(
            "Updating overlay method for pid "
                .concat(e, ' "')
                .concat(null == (r = Q(e)) ? void 0 : r.gameName, '" to ')
                .concat((0, O.P_)(a)),
        ),
        eU.emitChange();
    let c = Q(e);
    return null != c && (await s.Z.updateTrackedGame(e, c)), s.Z.updateOverlayMethod(e, a);
}
async function ed() {
    let e = new Set(
            f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(X()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await es(e), await (0, a._v)(16);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await eo(e), await (0, a._v)(16);
    let i = new Set([...t].filter((t) => e.has(t)));
    await em(i),
        (n.size > 0 || r.size > 0) &&
            D.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: i,
            });
}
async function ef(e) {
    let t = !1,
        n = Q(e);
    if (null == n) return D.error("Tried to determine overlay method swap for untracked pid ".concat(e)), !1;
    if (y.l.has(n.state))
        return D.verbose("Skipping overlay method swap for pid ".concat(e, " - state is ").concat(n.state)), !1;
    let r = await (0, O.hj)(e, 0);
    if (null == r) return D.error("Failed to get revised fullscreen type for pid ".concat(e)), !1;
    n.fullscreenType !== r &&
        D.verbose("Fullscreen type different in swap for pid ".concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        });
    let i = ea(n, r);
    if (
        (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy) ||
        ((k === h.UNSET_PID || null === k) && n.state === E.mM.OVERLAY_RENDERING)
    )
        return t;
    let a = x === E.R5.OUT_OF_PROCESS_V3 || x === E.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        o = x === E.R5.IN_PROCESS_V2,
        s = (0, O.PD)(r, z()),
        l = (0, O.DH)(n, r, z());
    D.verbose("Overlay method different for pid ".concat(e), {
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
        D.verbose("Updating fullscreen type for pid ".concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        }),
            et(e, "fullscreenHistory", P(A({}, n.fullscreenHistory), { [Date.now()]: r }), "updateFullscreenType"),
            et(e, "fullscreenType", r, "updateFullscreenType"),
            eU.emitChange(),
            (t = !0);
    };
    switch (i.overlayMethod) {
        case E.gl.OutOfProcess:
        case E.gl.OutOfProcessLimitedInteraction:
            ((s && !o) || a) && (c(), await e_(e, i));
            break;
        case E.gl.Hook:
            ((l && !a) || o || K()) && (c(), await ep(e, i));
            break;
        case E.gl.Disabled:
            c(), eu(e, i, "determineOverlayMethodSwap - disabled");
    }
    return t;
}
function ep(e, t) {
    var n;
    return ee(e)
        ? (null == (n = Q(e)) ? void 0 : n.overlayMethod) === E.gl.Hook
            ? (D.verbose("Hook requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (D.verbose("Enabling hook for pid ".concat(e)),
              et(e, "hasChangedRenderMode", !0, "enableHook"),
              eu(e, t, "enableHook"))
        : (D.verbose("Hook requested for untracked pid ".concat(e)), Promise.resolve());
}
function e_(e, t) {
    var n;
    return ee(e)
        ? (null == (n = Q(e)) ? void 0 : n.overlayMethod) === t.overlayMethod
            ? (D.verbose("OOP requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (D.verbose("Enabling OOP for pid ".concat(e)),
              et(e, "hasChangedRenderMode", !0, "enableOutOfProcess"),
              eu(e, t, "enableOutOfProcess"))
        : (D.verbose("OOP requested for untracked pid ".concat(e)), Promise.resolve());
}
async function em(e) {
    let t = !1;
    for (let n of e) (t = (await ef(n)) || t), await (0, a._v)(16);
    t &&
        (D.info("determineFullscreenOverlayMethodSwaps has changes"),
        eU.emitChange(),
        W(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
function eh(e) {
    null == Z &&
        (__OVERLAY__ && D.error("Running Polling While in Overlay Context!"),
        (Z = setTimeout(async () => {
            Z = null;
            let e = X();
            e.length > 0 && (eh(O.HD), await em(new Set(e)));
        }, e)));
}
async function eg(e, t) {
    if (!T.iP) return void D.verbose("setOverlayEnabled: not supported");
    if (
        (D.info("setOverlayEnabled: supported", {
            newLegacyEnabled: e,
            newOopEnabled: t,
        }),
        (L = e),
        g.v.update({
            legacyEnabled: e,
            oopEnabled: t,
        }),
        D.info("setOverlayEnabled", {
            newOopEnabled: t,
            newLegacyEnabled: e,
        }),
        e || t)
    )
        return void eS();
    for (let e of X()) await es(e), await (0, a._v)(16);
}
function eE() {
    ed(), (j = !1), (F = null), eL();
}
function eb(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return (
        D.info("handleOverlaySetEnabled", {
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
    for (let t of (__OVERLAY__ && D.error("Running handleRunningGamesChange While in Overlay Context!"), e.added))
        eo(t.pid);
    for (let t of e.removed) es(t.pid);
}
function ev(e) {
    if (
        (__OVERLAY__ && D.error("Running handleGameToggleOverlay While in Overlay Context!"),
        D.verbose("handleGameToggleOverlay", { action: e }),
        !q())
    ) {
        if ((D.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
            let t = e.game.pid,
                n = Q(t);
            if (null != n) return eu(t, ea(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
        }
        return !1;
    }
    if (!("pid" in e.game)) return D.verbose("handleGameToggleOverlay: game is not a PersistGame"), ed(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (ee(t)) {
        let e = Q(t);
        (null == e ? void 0 : e.legacyEnabled) !== n && et(t, "legacyEnabled", n, "handleGameToggleOverlay"),
            (null == e ? void 0 : e.oopEnabled) !== r && et(t, "oopEnabled", null != r && r, "handleGameToggleOverlay");
    }
    let i = n && K(),
        a = null != r && r && z();
    return (
        i || a
            ? (D.verbose("handleGameToggleOverlay: game enabled changed", {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: a,
              }),
              ee(t) ? eS() : eo(t))
            : es(t),
        !0
    );
}
async function eS() {
    await eI(), await (0, a._v)(2000);
    let e = X(),
        t = new Set([
            ...f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (D.info("Retracking ".concat(t.size, " games (").concat(e.length, " already tracked)")), t))
        await eo(n), await (0, a._v)(16);
    D.info("Retracked ".concat(e.length, " games"));
}
async function eI() {
    for (let e of X()) await es(e), await (0, a._v)(16);
}
function eT(e) {
    return D.error("Overlay reload for pid", { pid: e.pid }), eS(), !0;
}
function eC(e) {
    return (
        D.error("Overlay crashed for pid ".concat(e.pid)),
        !!ee(e.pid) && (et(e.pid, "state", E.mM.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
    );
}
function eA(e) {
    return (x = e.mode), eS(), !0;
}
function eN(e) {
    if (null != Q(e.pid))
        return (
            et(e.pid, "state", e.overlayState, e.reason),
            D.verbose("Updating overlay state for pid ".concat(e.pid, " to ").concat(e.overlayState)),
            e.overlayState === E.mM.WAITING_FOR_POPOUT_OPEN || e.overlayState === E.mM.WAITING_FOR_OVERLAY_OPEN
                ? er(e.pid, E.zE.MODULE_TRACKING)
                : e.overlayState === E.mM.OVERLAY_RENDERING && er(e.pid, E.zE.OVERLAY_RENDERING),
            !0
        );
}
function eP() {
    return eS(), !0;
}
function eR(e) {
    return e.mode === E.GO.TrackFocusPIDs && (H = e.enabled), !0;
}
function ew() {
    return (Y = new c.Z(10000)), !0;
}
function eD(e) {
    if (((k = e.pid), H)) {
        var t;
        let n = [performance.timeOrigin + performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
        Y.push(n);
    }
    return !(0, h.isValidGamePID)(e.pid) || ((0, h.setPID)(e.pid), !0);
}
function ex(e) {
    s.Z.updateOverlayState(e.pid, E.mM.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
        ee(e.pid) && et(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
        W(e.pid, "overlay_successfully_shown", { pid: e.pid });
    let t = Q(e.pid);
    null != t && s.Z.updateTrackedGame(e.pid, t);
}
function eL() {
    d.Z.hasLoadedExperiments && !j && ((j = !0), eg(g.v.legacyEnabled, g.v.oopEnabled));
}
function ej() {
    (j = !1), (F = null);
}
function eM() {
    (j = !1), (F = null), eI();
}
class ek extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(p.default, d.Z, _.Z, v.Z, f.ZP, I.Z), this.syncWith([d.Z], eL);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return Y;
    }
    getHasLoadedExperiments() {
        return j;
    }
    getForcedRenderMode() {
        return x;
    }
    isAnyOverlayRendering() {
        return this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        var t, n;
        return __OVERLAY__
            ? E.gl.Hook
            : null != (n = null == (t = Q(e)) ? void 0 : t.overlayMethod)
              ? n
              : E.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === E.gl.OutOfProcess || t === E.gl.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null != (n = null == (t = Q(e)) ? void 0 : t.hasChangedRenderMode) && n;
    }
    getTrackedGameByPid(e) {
        return Q(e);
    }
    getTrackedGames() {
        return U;
    }
    getClosedTrackedGamesHistory() {
        return G;
    }
    getGameOverlayStatus(e) {
        let t = Q(e.pid);
        return null == t
            ? null
            : A(
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
        return Object.values(U).filter((e) => e.overlayMethod !== E.gl.Disabled && e.state === E.mM.OVERLAY_RENDERING);
    }
}
C(ek, "displayName", "OverlayRenderStore");
let eU = new ek(
        o.Z,
        !M
            ? {}
            : {
                  CONNECTION_OPEN: eE,
                  LOGIN: ej,
                  LOGOUT: eM,
                  EXPERIMENT_OVERRIDE_BUCKET: eE,
                  OVERLAY_SET_ENABLED: eb,
                  GAME_LAUNCH_SUCCESS: ey,
                  RUNNING_GAMES_CHANGE: eO,
                  RUNNING_GAME_TOGGLE_OVERLAY: ev,
                  OVERLAY_FORCE_RENDER_MODE: eA,
                  OVERLAY_UPDATE_OVERLAY_STATE: eN,
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eP,
                  OVERLAY_CRASHED: eC,
                  OVERLAY_RELOAD: eT,
                  OVERLAY_FOCUSED: eD,
                  OVERLAY_SUCCESSFULLY_SHOWN: ex,
                  OVERLAY_RENDER_DEBUG_MODE: eR,
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: ew,
              },
    ),
    eG = eU;
