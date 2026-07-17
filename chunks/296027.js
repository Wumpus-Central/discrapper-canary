"use strict";
n.r(t), n.d(t, { default: () => e_ }), n(321073);
var i = n(17928),
    r = n(499979),
    a = n(228366),
    s = n(684013),
    l = n(56562),
    o = n(635731),
    d = n(626584),
    c = n(736056),
    u = n(952818),
    _ = n(567249),
    E = n(280450),
    A = n(760751),
    h = n(723702),
    I = n(9302),
    f = n(211753),
    p = n(206885),
    T = n(41984),
    m = n(181435);
let g = new Set([T.AR.INITIALIZING, T.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION]);
var S = n(515183),
    N = n(592598),
    C = n(682763),
    O = n(614455),
    R = n(392164);
let L = new d.A("OverlayRenderStore"),
    y = T.V6.UNSET,
    D = !1,
    v = !1,
    b = (0, h.isWindows)() && h.isPlatformEmbedded && !__OVERLAY__,
    M = null,
    P = {},
    U = {},
    w = null,
    G = null,
    x = new Set([l.aI.FULLSCREEN, l.aI.BORDERLESS_FULLSCREEN, l.aI.UNKNOWN, l.aI.MINIMIZED]),
    k = new Set([l.aI.MINIMIZED, l.aI.UNKNOWN]),
    F = !1,
    V = new o.A(1e4);
function B(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m.QJ.Info;
    (0, C.aS)({ pid: e, name: t, type: m.ON.Renderer, data: n, logType: i });
}
function H() {
    return O.A.isOverlayEnabled;
}
function j(e) {
    return P[e] ?? null;
}
function W() {
    return Object.keys(P).map(Number);
}
function Y(e, t, n) {
    let i = P[e]?.state;
    (P = { ...P, [e]: { ...t } }), i !== t.state && s.A.trackOverlayStateChanged(e, i, t.state, n);
}
function K(e) {
    return e in P;
}
function $(e, t, n, i) {
    let r = j(e);
    if (null == r) return void L.error(`Tried to set property ${t} to ${n} for untracked pid ${e}`);
    let a = { ...r };
    (a[t] = n), Y(e, a, i);
}
function z(e, t) {
    let n = j(e);
    if (null == n) return;
    let i = n.timer;
    switch (t) {
        case T.sf.SCREEN_TYPE_RESOLUTION:
            i.screenTypeResolutionTimestamp = Date.now();
            break;
        case T.sf.MODULE_TRACKING:
            i.moduleTrackingTimestamp = Date.now();
            break;
        case T.sf.OVERLAY_RENDERING:
            i.overlayRenderingTimestamp = Date.now();
    }
    $(e, "timer", i, "timeOverlayEvent"), eu.emitChange();
}
async function q(e) {
    let t = j(e);
    if (null != t) return t;
    let n = u.Ay.getGameOrTransformedSubgameForPID(e),
        i = Date.now();
    if (null == n) return L.error(`Tried to track game ${e} but it was not found in RunningGameStore`), null;
    let { enabledOOP: r, enabledLegacy: a, ...s } = (0, u.hw)(n),
        l = A.A.findGame(n),
        o = (await (0, S.E1)(e, 0)) ?? n.fullscreenType,
        d = Date.now();
    L.verbose(`Tracking game ${e} for overlay`);
    let c = {
        ...s,
        pid: e,
        oopEnabled: r,
        legacyEnabled: a,
        applicationId: l?.id ?? null,
        gameName: n.name ?? null,
        state: T.AR.INITIALIZING,
        timer: { startTrackingTimestamp: Date.now() },
        fullscreenType: o,
        fullscreenHistory: { [d]: o },
        hasChangedRenderMode: !1,
        supportsOutOfProcess: l?.supportsOutOfProcessOverlay ?? !0,
        successfullyShown: !1,
    };
    return (
        o !== n.fullscreenType && (c.fullscreenHistory[i] = n.fullscreenType),
        Y(e, c, "initializeTrackedGame"),
        eu.emitChange(),
        c
    );
}
function Z(e, t) {
    switch (y) {
        case T.V6.UNSET:
            break;
        case T.V6.IN_PROCESS_V2:
            return {
                source: T.yp.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: T.Ue.Hook,
                reason: "Forced in-process overlay rendering",
            };
        case T.V6.OUT_OF_PROCESS_V3:
            return {
                source: T.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: T.Ue.OutOfProcess,
                reason: "Forced out-of-process overlay rendering",
            };
        case T.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: T.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: T.Ue.OutOfProcessLimitedInteraction,
                reason: "Forced out-of-process limited interaction overlay rendering",
            };
    }
    if (!(H() || D))
        return {
            source: T.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: T.Ue.Disabled,
            reason: "Overlay globally disabled",
        };
    let n = u.Ay.getGameOrTransformedSubgameForPID(e.pid);
    if (null == n)
        return {
            source: T.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: T.Ue.Disabled,
            reason: "No running game found for tracked game",
        };
    let i = (0, u.hw)(n);
    if (!(i.enabledLegacy || i.enabledOOP))
        return { source: i.source, enabledOOP: !1, enabledLegacy: !1, overlayMethod: T.Ue.Disabled, reason: i.reason };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: T.yp.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: T.Ue.Disabled,
            reason: "Overlay disabled for specific game",
        };
    if (!H() && D) {
        let e = (0, S.O4)(n);
        return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : T.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
        };
    }
    if (!(0, I.supportsOutOfProcess)())
        return { ...(0, S.O4)(n), source: T.yp.NO_OUT_OF_PROCESS_SUPPORT, reason: "supportsOutOfProcess failed" };
    if (!i.enabledOOP && i.enabledLegacy)
        return D
            ? { ...(0, S.O4)(n), source: T.yp.LEGACY_ENABLED, reason: "Legacy overlay enabled only" }
            : { ...i, overlayMethod: T.Ue.Disabled, source: T.yp.LEGACY_ENABLED, reason: "Legacy overlay disabled" };
    let r = A.A.findGame(n)?.id,
        a = (0, S.zi)(n) || N.A.isLimitedInteractionOverrideEnabled(n.id ?? r);
    switch (t) {
        case l.aI.MINIMIZED:
        case l.aI.WINDOWED:
        case l.aI.MAXIMIZED:
        case l.aI.BORDERLESS_FULLSCREEN: {
            let e = i.enabledOOP && H(),
                r = i.enabledLegacy && D,
                s = a ? T.Ue.OutOfProcessLimitedInteraction : T.Ue.OutOfProcess;
            return {
                ...i,
                overlayMethod: e ? s : r ? (0, S.O4)(n).overlayMethod : T.Ue.Disabled,
                reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${r}, runningGameFullscreenType: ${t}`,
            };
        }
        case l.aI.FULLSCREEN: {
            let e = (0, S.O4)(n),
                t = e.enabledLegacy && D,
                i = t ? e.overlayMethod : T.Ue.Disabled;
            return { ...e, overlayMethod: i, reason: `Fullscreen - legacyEnabled: ${t}, newOverlayMethod: ${i}` };
        }
        case l.aI.UNKNOWN:
            return {
                source: T.yp.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: T.Ue.Disabled,
                reason: "Unknown fullscreen type",
            };
        default:
            return {
                source: T.yp.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: T.Ue.Disabled,
                reason: `Missing runningFullscreenType case: ${t}`,
            };
    }
}
async function X(e) {
    if (K(e)) {
        L.verbose(`Skipping track for pid ${e} - already tracked. Determining overlay method.`), await er(new Set([e]));
        return;
    }
    if (!(H() || D)) return void L.verbose(`Skipping track for pid ${e} - overlay is disabled`);
    let t = await q(e);
    if (null == t) return void L.error(`Failed to track game ${e}`);
    B(e, "game_tracking_starting", { game_name: t.gameName, fullscreen_type: t.fullscreenType }),
        $(e, "state", T.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        eu.emitChange(),
        L.verbose(`Determining initial overlay method for pid ${e}`);
    let n = await ee(e);
    L.verbose(`Overlay method for pid ${e}: ${(0, S.gK)(n.overlayMethod)}`),
        z(e, T.sf.SCREEN_TYPE_RESOLUTION),
        await et(e, n, "maybeTrackGame - 2"),
        (function e(t) {
            null == w &&
                (__OVERLAY__ && L.error("Running Polling While in Overlay Context!"),
                (w = setTimeout(async () => {
                    w = null;
                    let t = W();
                    t.length > 0 && (e(S.T$), await er(new Set(t)));
                }, t)));
        })(S.T$),
        (G = n.overlayMethod),
        eu.emitChange(),
        await s.A.updateTrackedGame(e, t);
}
async function Q(e) {
    if (!K(e)) return void L.verbose(`Skipping untrack for pid ${e} - not tracked`);
    L.verbose(`Untracking game ${e}`);
    let t = j(e),
        n = {
            source: t?.source ?? T.yp.DEFAULT,
            enabledOOP: t?.oopEnabled ?? !1,
            enabledLegacy: t?.legacyEnabled ?? !1,
            overlayMethod: T.Ue.Disabled,
            reason: "Untracking game",
        };
    await et(e, n, "maybeUntrackGame", !0),
        null != P[e] && ((U[e] = { ...P[e], state: T.AR.GAME_UNTRACKED }), delete P[e]),
        eu.emitChange(),
        await s.A.updateTrackedGame(e, null);
}
async function J(e) {
    let t = u.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == t) return L.error(`Tried to determine first fullscreen type for untracked pid ${e}`), l.aI.UNKNOWN;
    let n = t?.fullscreenType ?? l.aI.UNKNOWN;
    if (x.has(n)) {
        let t = await (0, S.E1)(e, 2e3);
        L.verbose(`Resolved fullscreen type for pid ${e}: ${t}`), null != t && (n = t);
    }
    return n;
}
async function ee(e) {
    let t = await J(e);
    if (k.has(t)) {
        let n = await (0, S.E1)(e, 3e3);
        null != n && (t = n);
    }
    if (t === l.aI.UNKNOWN) {
        let n = await (0, S.E1)(e, 3e3);
        null != n && (t = n);
    }
    let n = j(e);
    return null == n
        ? (L.error(`Tried to determine initial overlay method for untracked pid ${e}`),
          {
              source: T.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: T.Ue.Disabled,
              reason: "No tracked game found",
          })
        : Z(n, t);
}
async function et(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = t.overlayMethod,
        a =
            r === T.Ue.Disabled
                ? i
                    ? T.AR.OVERLAY_TEARING_DOWN
                    : T.AR.OVERLAY_DISABLED
                : T.AR.WAITING_FOR_MODULE_TRACKING,
        l = `${n}: ${t.reason}`;
    $(e, "state", a, l),
        $(e, "overlayMethod", r, l),
        $(e, "source", t.source, l),
        $(e, "oopEnabled", t.enabledOOP, l),
        $(e, "legacyEnabled", t.enabledLegacy, l),
        L.verbose(`Updating overlay method for pid ${e} "${j(e)?.gameName}" to ${(0, S.gK)(r)}`),
        eu.emitChange();
    let o = j(e);
    return null != o && (await s.A.updateTrackedGame(e, o)), s.A.updateOverlayMethod(e, r);
}
async function en() {
    let e = new Set(
            u.Ay.getRunningGames()
                .filter((e) => u.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(W()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await Q(e), await (0, r.yy)(16);
    let i = new Set([...e].filter((e) => !t.has(e)));
    for (let e of i) await X(e), await (0, r.yy)(16);
    let a = new Set([...t].filter((t) => e.has(t)));
    await er(a),
        (n.size > 0 || i.size > 0) &&
            L.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: i,
                pidsAlreadyTracked: a,
            });
}
async function ei(e) {
    var t, n, i, r;
    let a = !1,
        s = j(e);
    if (null == s) return L.error(`Tried to determine overlay method swap for untracked pid ${e}`), !1;
    if (g.has(s.state)) return L.verbose(`Skipping overlay method swap for pid ${e} - state is ${s.state}`), !1;
    let l = await (0, S.E1)(e, 0);
    if (null == l) return L.error(`Failed to get revised fullscreen type for pid ${e}`), !1;
    s.fullscreenType !== l &&
        L.verbose(`Fullscreen type different in swap for pid ${e}`, {
            oldFullscreenType: s.fullscreenType,
            newFullscreenType: l,
        });
    let o = Z(s, l);
    if (
        (s.overlayMethod === o.overlayMethod && s.oopEnabled === o.enabledOOP && s.legacyEnabled === o.enabledLegacy) ||
        ((M === I.UNSET_PID || null === M) && s.state === T.AR.OVERLAY_RENDERING)
    )
        return a;
    let d = y === T.V6.OUT_OF_PROCESS_V3 || y === T.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        c = y === T.V6.IN_PROCESS_V2,
        u = (0, S.e3)(l, H()),
        _ = (0, S.Zj)(s, l, H());
    function E() {
        null == s ||
            null == l ||
            (L.verbose(`Updating fullscreen type for pid ${e}`, {
                oldFullscreenType: s.fullscreenType,
                newFullscreenType: l,
            }),
            $(e, "fullscreenHistory", { ...s.fullscreenHistory, [Date.now()]: l }, "updateFullscreenType"),
            $(e, "fullscreenType", l, "updateFullscreenType"),
            eu.emitChange(),
            (a = !0));
    }
    switch (
        (L.verbose(`Overlay method different for pid ${e}`, {
            oldOverlayMethod: s.overlayMethod,
            revisedFullscreenType: l,
            fullscreenHistory: s.fullscreenHistory,
            newOverlayGameStatus: o,
            shouldSwitchToHook: _,
            shouldSwitchToOutOfProcess: u,
            isForcedInProcess: c,
            isForcedOutOfProcess: d,
            legacyEnabled: D,
            overlayEnabled: H(),
        }),
        o.overlayMethod)
    ) {
        case T.Ue.OutOfProcess:
        case T.Ue.OutOfProcessLimitedInteraction:
            ((u && !c) || d) &&
                (E(),
                await ((t = e),
                (n = o),
                K(t)
                    ? j(t)?.overlayMethod === n.overlayMethod
                        ? (L.verbose(`OOP requested for pid ${t} but already enabled`), Promise.resolve())
                        : (L.verbose(`Enabling OOP for pid ${t}`),
                          $(t, "hasChangedRenderMode", !0, "enableOutOfProcess"),
                          et(t, n, "enableOutOfProcess"))
                    : (L.verbose(`OOP requested for untracked pid ${t}`), Promise.resolve())));
            break;
        case T.Ue.Hook:
            ((_ && !d) || c || D) &&
                (E(),
                await ((i = e),
                (r = o),
                K(i)
                    ? j(i)?.overlayMethod === T.Ue.Hook
                        ? (L.verbose(`Hook requested for pid ${i} but already enabled`), Promise.resolve())
                        : (L.verbose(`Enabling hook for pid ${i}`),
                          $(i, "hasChangedRenderMode", !0, "enableHook"),
                          et(i, r, "enableHook"))
                    : (L.verbose(`Hook requested for untracked pid ${i}`), Promise.resolve())));
            break;
        case T.Ue.Disabled:
            E(), et(e, o, "determineOverlayMethodSwap - disabled");
    }
    return a;
}
async function er(e) {
    let t = !1;
    for (let n of e) (t = (await ei(n)) || t), await (0, r.yy)(16);
    t &&
        (L.info("determineFullscreenOverlayMethodSwaps has changes"),
        eu.emitChange(),
        B(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
async function ea(e, t) {
    if (!p.O) return void L.verbose("setOverlayEnabled: not supported");
    if (
        (L.info("setOverlayEnabled: supported", { newLegacyEnabled: e, newOopEnabled: t }),
        (D = e),
        f.x.update({ legacyEnabled: e, oopEnabled: t }),
        L.info("setOverlayEnabled", { newOopEnabled: t, newLegacyEnabled: e }),
        e || t)
    )
        return void el();
    for (let e of W()) await Q(e), await (0, r.yy)(16);
}
function es() {
    en(), (v = !1), (G = null), ed();
}
async function el() {
    await eo(), await (0, r.yy)(2e3);
    let e = W(),
        t = new Set([
            ...u.Ay.getRunningGames()
                .filter((e) => u.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (L.info(`Retracking ${t.size} games (${e.length} already tracked)`), t))
        await X(n), await (0, r.yy)(16);
    L.info(`Retracked ${e.length} games`);
}
async function eo() {
    for (let e of W()) await Q(e), await (0, r.yy)(16);
}
function ed() {
    c.A.hasLoadedExperiments && !v && ((v = !0), ea(f.x.legacyEnabled, f.x.oopEnabled));
}
class ec extends i.Ay.Store {
    static displayName = "OverlayRenderStore";
    initialize() {
        this.waitFor(E.default, c.A, A.A, N.A, u.Ay, O.A, _.A), this.syncWith([c.A], ed);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return V;
    }
    getHasLoadedExperiments() {
        return v;
    }
    getForcedRenderMode() {
        return y;
    }
    isAnyOverlayRendering() {
        return p.e ? _.A.getWindowOpen(R.f) : this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        return __OVERLAY__ ? T.Ue.Hook : (j(e)?.overlayMethod ?? T.Ue.Disabled);
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === T.Ue.OutOfProcess || t === T.Ue.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        return j(e)?.hasChangedRenderMode ?? !1;
    }
    getTrackedGameByPid(e) {
        return j(e);
    }
    getTrackedGames() {
        return P;
    }
    getClosedTrackedGamesHistory() {
        return U;
    }
    getGameOverlayStatus(e) {
        let t = j(e.pid);
        return null == t ? null : { enabledOOP: t.oopEnabled, enabledLegacy: t.legacyEnabled, ...t };
    }
    getGlobalEnabledStatus() {
        return { oopEnabled: H(), legacyEnabled: D };
    }
    getAnyGlobalEnabledOverlay() {
        return H() || D;
    }
    getPerGameEnabledStatus(e) {
        if (null == e) return { oopEnabled: !1, legacyEnabled: !1 };
        let t = j(e.pid);
        return null == t
            ? { oopEnabled: !1, legacyEnabled: !1 }
            : { oopEnabled: t.oopEnabled, legacyEnabled: t.legacyEnabled };
    }
    getRenderMethod(e) {
        if (null != e) return j(e)?.overlayMethod ?? void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return G;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(P).filter((e) => e.overlayMethod !== T.Ue.Disabled && e.state === T.AR.OVERLAY_RENDERING);
    }
}
let eu = new ec(
        a.h,
        !b
            ? {}
            : {
                  CONNECTION_OPEN: es,
                  LOGIN: function () {
                      (v = !1), (G = null);
                  },
                  LOGOUT: function () {
                      (v = !1), (G = null), eo();
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: es,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { legacyEnabled: t, oopEnabled: n } = e;
                      return L.info("handleOverlaySetEnabled", { legacyEnabled: t, oopEnabled: n }), ea(t, n), !0;
                  },
                  GAME_LAUNCH_SUCCESS: function (e) {
                      if (null != e.pids) for (let t of e.pids) X(t);
                  },
                  RUNNING_GAMES_CHANGE: function (e) {
                      for (let t of (__OVERLAY__ &&
                          L.error("Running handleRunningGamesChange While in Overlay Context!"),
                      e.added))
                          X(t.pid);
                      for (let t of e.removed) Q(t.pid);
                  },
                  RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                      if (
                          (__OVERLAY__ && L.error("Running handleGameToggleOverlay While in Overlay Context!"),
                          L.verbose("handleGameToggleOverlay", { action: e }),
                          !(H() || D))
                      ) {
                          if ((L.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
                              let t = e.game.pid,
                                  n = j(t);
                              if (null != n)
                                  return et(t, Z(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
                          }
                          return !1;
                      }
                      if (!("pid" in e.game))
                          return L.verbose("handleGameToggleOverlay: game is not a PersistGame"), en(), !0;
                      let t = e.game.pid,
                          { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e;
                      if (K(t)) {
                          let e = j(t);
                          e?.legacyEnabled !== n && $(t, "legacyEnabled", n, "handleGameToggleOverlay"),
                              e?.oopEnabled !== i && $(t, "oopEnabled", i ?? !1, "handleGameToggleOverlay");
                      }
                      let r = n && D,
                          a = (i ?? !1) && H();
                      return (
                          r || a
                              ? (L.verbose("handleGameToggleOverlay: game enabled changed", {
                                    pid: t,
                                    legacyEnabled: r,
                                    overlayV3Enabled: a,
                                }),
                                K(t) ? el() : X(t))
                              : Q(t),
                          !0
                      );
                  },
                  OVERLAY_FORCE_RENDER_MODE: function (e) {
                      return (y = e.mode), el(), !0;
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      if (null != j(e.pid))
                          return (
                              $(e.pid, "state", e.overlayState, e.reason),
                              L.verbose(`Updating overlay state for pid ${e.pid} to ${e.overlayState}`),
                              e.overlayState === T.AR.WAITING_FOR_POPOUT_OPEN ||
                              e.overlayState === T.AR.WAITING_FOR_OVERLAY_OPEN
                                  ? z(e.pid, T.sf.MODULE_TRACKING)
                                  : e.overlayState === T.AR.OVERLAY_RENDERING && z(e.pid, T.sf.OVERLAY_RENDERING),
                              !0
                          );
                  },
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: function () {
                      return el(), !0;
                  },
                  OVERLAY_CRASHED: function (e) {
                      return (
                          L.error(`Overlay crashed for pid ${e.pid}`),
                          !!K(e.pid) && ($(e.pid, "state", T.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
                      );
                  },
                  OVERLAY_RELOAD: function (e) {
                      return L.error("Overlay reload for pid", { pid: e.pid }), el(), !0;
                  },
                  OVERLAY_FOCUSED: function (e) {
                      if (((M = e.pid), F)) {
                          let t = [performance.timeOrigin + performance.now(), e.pid ?? null, e.trackMode];
                          V.push(t);
                      }
                      return !(0, I.isValidGamePID)(e.pid) || ((0, I.setPID)(e.pid), !0);
                  },
                  OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                      s.A.updateOverlayState(e.pid, T.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
                          K(e.pid) && $(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
                          B(e.pid, "overlay_successfully_shown", { pid: e.pid });
                      let t = j(e.pid);
                      null != t && s.A.updateTrackedGame(e.pid, t);
                  },
                  OVERLAY_RENDER_DEBUG_MODE: function (e) {
                      return e.mode === T.x7.TrackFocusPIDs && (F = e.enabled), !0;
                  },
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: function () {
                      return (V = new o.A(1e4)), !0;
                  },
              },
    ),
    e_ = eu;
