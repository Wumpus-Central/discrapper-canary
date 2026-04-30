"use strict";
n.r(t), n.d(t, { default: () => e_ }), n(321073);
var i = n(17928),
    r = n(499979),
    s = n(228366),
    a = n(684013),
    o = n(56562),
    l = n(635731),
    u = n(626584),
    c = n(736056),
    d = n(328153),
    _ = n(567249),
    f = n(495544),
    h = n(760751),
    p = n(723702),
    E = n(9302),
    m = n(211753),
    g = n(206885),
    A = n(41984),
    I = n(181435);
let T = new Set([A.AR.INITIALIZING, A.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION]);
var S = n(515183),
    N = n(592598),
    y = n(682763),
    C = n(614455),
    v = n(392164);
let O = new u.A("OverlayRenderStore"),
    R = A.V6.UNSET,
    b = !1,
    D = !1,
    L = (0, p.isWindows)() && p.isPlatformEmbedded && !__OVERLAY__,
    w = null,
    M = {},
    P = {},
    x = null,
    U = null,
    k = new Set([o.aI.FULLSCREEN, o.aI.BORDERLESS_FULLSCREEN, o.aI.UNKNOWN, o.aI.MINIMIZED]),
    G = new Set([o.aI.MINIMIZED, o.aI.UNKNOWN]),
    F = !1,
    V = new l.A(1e4);
function B(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : I.QJ.Info;
    (0, y.aS)({ pid: e, name: t, type: I.ON.Renderer, data: n, logType: i });
}
function H() {
    return C.A.isOverlayEnabled;
}
function j(e) {
    return M[e] ?? null;
}
function Y() {
    return Object.keys(M).map(Number);
}
function W(e, t, n) {
    let i = M[e]?.state;
    (M = { ...M, [e]: { ...t } }), i !== t.state && a.A.trackOverlayStateChanged(e, i, t.state, n);
}
function K(e) {
    return e in M;
}
function z(e, t, n, i) {
    let r = j(e);
    if (null == r) return void O.error(`Tried to set property ${t} to ${n} for untracked pid ${e}`);
    let s = { ...r };
    (s[t] = n), W(e, s, i);
}
function $(e, t) {
    let n = j(e);
    if (null == n) return;
    let i = n.timer;
    switch (t) {
        case A.sf.SCREEN_TYPE_RESOLUTION:
            i.screenTypeResolutionTimestamp = Date.now();
            break;
        case A.sf.MODULE_TRACKING:
            i.moduleTrackingTimestamp = Date.now();
            break;
        case A.sf.OVERLAY_RENDERING:
            i.overlayRenderingTimestamp = Date.now();
    }
    z(e, "timer", i, "timeOverlayEvent"), ed.emitChange();
}
async function q(e) {
    let t = j(e);
    if (null != t) return t;
    let n = d.Ay.getGameOrTransformedSubgameForPID(e),
        i = Date.now();
    if (null == n) return O.error(`Tried to track game ${e} but it was not found in RunningGameStore`), null;
    let { enabledOOP: r, enabledLegacy: s, ...a } = (0, d.hw)(n),
        o = h.A.findGame(n),
        l = (await (0, S.E1)(e, 0)) ?? n.fullscreenType,
        u = Date.now();
    O.verbose(`Tracking game ${e} for overlay`);
    let c = {
        ...a,
        pid: e,
        oopEnabled: r,
        legacyEnabled: s,
        applicationId: o?.id ?? null,
        gameName: n.name ?? null,
        state: A.AR.INITIALIZING,
        timer: { startTrackingTimestamp: Date.now() },
        fullscreenType: l,
        fullscreenHistory: { [u]: l },
        hasChangedRenderMode: !1,
        supportsOutOfProcess: o?.supportsOutOfProcessOverlay ?? !0,
        successfullyShown: !1,
    };
    return (
        l !== n.fullscreenType && (c.fullscreenHistory[i] = n.fullscreenType),
        W(e, c, "initializeTrackedGame"),
        ed.emitChange(),
        c
    );
}
function Z(e, t) {
    switch (R) {
        case A.V6.UNSET:
            break;
        case A.V6.IN_PROCESS_V2:
            return {
                source: A.yp.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: A.Ue.Hook,
                reason: "Forced in-process overlay rendering",
            };
        case A.V6.OUT_OF_PROCESS_V3:
            return {
                source: A.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: A.Ue.OutOfProcess,
                reason: "Forced out-of-process overlay rendering",
            };
        case A.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: A.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: A.Ue.OutOfProcessLimitedInteraction,
                reason: "Forced out-of-process limited interaction overlay rendering",
            };
    }
    if (!(H() || b))
        return {
            source: A.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: A.Ue.Disabled,
            reason: "Overlay globally disabled",
        };
    let n = d.Ay.getGameOrTransformedSubgameForPID(e.pid);
    if (null == n)
        return {
            source: A.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: A.Ue.Disabled,
            reason: "No running game found for tracked game",
        };
    let i = (0, d.hw)(n);
    if (!(i.enabledLegacy || i.enabledOOP))
        return { source: i.source, enabledOOP: !1, enabledLegacy: !1, overlayMethod: A.Ue.Disabled, reason: i.reason };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: A.yp.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: A.Ue.Disabled,
            reason: "Overlay disabled for specific game",
        };
    if (!H() && b) {
        let e = (0, S.O4)(n);
        return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : A.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
        };
    }
    if (!(0, E.supportsOutOfProcess)())
        return { ...(0, S.O4)(n), source: A.yp.NO_OUT_OF_PROCESS_SUPPORT, reason: "supportsOutOfProcess failed" };
    if (!i.enabledOOP && i.enabledLegacy)
        return b
            ? { ...(0, S.O4)(n), source: A.yp.LEGACY_ENABLED, reason: "Legacy overlay enabled only" }
            : { ...i, overlayMethod: A.Ue.Disabled, source: A.yp.LEGACY_ENABLED, reason: "Legacy overlay disabled" };
    let r = h.A.findGame(n)?.id,
        s = (0, S.zi)(n) || N.A.isLimitedInteractionOverrideEnabled(n.id ?? r);
    switch (t) {
        case o.aI.MINIMIZED:
        case o.aI.WINDOWED:
        case o.aI.MAXIMIZED:
        case o.aI.BORDERLESS_FULLSCREEN: {
            let e = i.enabledOOP && H(),
                r = i.enabledLegacy && b,
                a = s ? A.Ue.OutOfProcessLimitedInteraction : A.Ue.OutOfProcess;
            return {
                ...i,
                overlayMethod: e ? a : r ? (0, S.O4)(n).overlayMethod : A.Ue.Disabled,
                reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${r}, runningGameFullscreenType: ${t}`,
            };
        }
        case o.aI.FULLSCREEN: {
            let e = (0, S.O4)(n),
                t = e.enabledLegacy && b,
                i = t ? e.overlayMethod : A.Ue.Disabled;
            return { ...e, overlayMethod: i, reason: `Fullscreen - legacyEnabled: ${t}, newOverlayMethod: ${i}` };
        }
        case o.aI.UNKNOWN:
            return {
                source: A.yp.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: A.Ue.Disabled,
                reason: "Unknown fullscreen type",
            };
        default:
            return {
                source: A.yp.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: A.Ue.Disabled,
                reason: `Missing runningFullscreenType case: ${t}`,
            };
    }
}
async function X(e) {
    if (K(e)) {
        O.verbose(`Skipping track for pid ${e} - already tracked. Determining overlay method.`), await er(new Set([e]));
        return;
    }
    if (!(H() || b)) return void O.verbose(`Skipping track for pid ${e} - overlay is disabled`);
    let t = await q(e);
    if (null == t) return void O.error(`Failed to track game ${e}`);
    B(e, "game_tracking_starting", { game_name: t.gameName, fullscreen_type: t.fullscreenType }),
        z(e, "state", A.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        ed.emitChange(),
        O.verbose(`Determining initial overlay method for pid ${e}`);
    let n = await ee(e);
    O.verbose(`Overlay method for pid ${e}: ${(0, S.gK)(n.overlayMethod)}`),
        $(e, A.sf.SCREEN_TYPE_RESOLUTION),
        await et(e, n, "maybeTrackGame - 2"),
        (function e(t) {
            null == x &&
                (__OVERLAY__ && O.error("Running Polling While in Overlay Context!"),
                (x = setTimeout(async () => {
                    x = null;
                    let t = Y();
                    t.length > 0 && (e(S.T$), await er(new Set(t)));
                }, t)));
        })(S.T$),
        (U = n.overlayMethod),
        ed.emitChange(),
        await a.A.updateTrackedGame(e, t);
}
async function Q(e) {
    if (!K(e)) return void O.verbose(`Skipping untrack for pid ${e} - not tracked`);
    O.verbose(`Untracking game ${e}`);
    let t = j(e),
        n = {
            source: t?.source ?? A.yp.DEFAULT,
            enabledOOP: t?.oopEnabled ?? !1,
            enabledLegacy: t?.legacyEnabled ?? !1,
            overlayMethod: A.Ue.Disabled,
            reason: "Untracking game",
        };
    await et(e, n, "maybeUntrackGame", !0),
        null != M[e] && ((P[e] = { ...M[e], state: A.AR.GAME_UNTRACKED }), delete M[e]),
        ed.emitChange(),
        await a.A.updateTrackedGame(e, null);
}
async function J(e) {
    let t = d.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == t) return O.error(`Tried to determine first fullscreen type for untracked pid ${e}`), o.aI.UNKNOWN;
    let n = t?.fullscreenType ?? o.aI.UNKNOWN;
    if (k.has(n)) {
        let t = await (0, S.E1)(e, 2e3);
        O.verbose(`Resolved fullscreen type for pid ${e}: ${t}`), null != t && (n = t);
    }
    return n;
}
async function ee(e) {
    let t = await J(e);
    if (G.has(t)) {
        let n = await (0, S.E1)(e, 3e3);
        null != n && (t = n);
    }
    if (t === o.aI.UNKNOWN) {
        let n = await (0, S.E1)(e, 3e3);
        null != n && (t = n);
    }
    let n = j(e);
    return null == n
        ? (O.error(`Tried to determine initial overlay method for untracked pid ${e}`),
          {
              source: A.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: A.Ue.Disabled,
              reason: "No tracked game found",
          })
        : Z(n, t);
}
async function et(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = t.overlayMethod,
        s =
            r === A.Ue.Disabled
                ? i
                    ? A.AR.OVERLAY_TEARING_DOWN
                    : A.AR.OVERLAY_DISABLED
                : A.AR.WAITING_FOR_MODULE_TRACKING,
        o = `${n}: ${t.reason}`;
    z(e, "state", s, o),
        z(e, "overlayMethod", r, o),
        z(e, "source", t.source, o),
        z(e, "oopEnabled", t.enabledOOP, o),
        z(e, "legacyEnabled", t.enabledLegacy, o),
        O.verbose(`Updating overlay method for pid ${e} "${j(e)?.gameName}" to ${(0, S.gK)(r)}`),
        ed.emitChange();
    let l = j(e);
    return null != l && (await a.A.updateTrackedGame(e, l)), a.A.updateOverlayMethod(e, r);
}
async function en() {
    let e = new Set(
            d.Ay.getRunningGames()
                .filter((e) => d.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(Y()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await Q(e), await (0, r.yy)(16);
    let i = new Set([...e].filter((e) => !t.has(e)));
    for (let e of i) await X(e), await (0, r.yy)(16);
    let s = new Set([...t].filter((t) => e.has(t)));
    await er(s),
        (n.size > 0 || i.size > 0) &&
            O.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: i,
                pidsAlreadyTracked: s,
            });
}
async function ei(e) {
    var t, n, i, r;
    let s = !1,
        a = j(e);
    if (null == a) return O.error(`Tried to determine overlay method swap for untracked pid ${e}`), !1;
    if (T.has(a.state)) return O.verbose(`Skipping overlay method swap for pid ${e} - state is ${a.state}`), !1;
    let o = await (0, S.E1)(e, 0);
    if (null == o) return O.error(`Failed to get revised fullscreen type for pid ${e}`), !1;
    a.fullscreenType !== o &&
        O.verbose(`Fullscreen type different in swap for pid ${e}`, {
            oldFullscreenType: a.fullscreenType,
            newFullscreenType: o,
        });
    let l = Z(a, o);
    if (
        (a.overlayMethod === l.overlayMethod && a.oopEnabled === l.enabledOOP && a.legacyEnabled === l.enabledLegacy) ||
        ((w === E.UNSET_PID || null === w) && a.state === A.AR.OVERLAY_RENDERING)
    )
        return s;
    let u = R === A.V6.OUT_OF_PROCESS_V3 || R === A.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        c = R === A.V6.IN_PROCESS_V2,
        d = (0, S.e3)(o, H()),
        _ = (0, S.Zj)(a, o, H());
    O.verbose(`Overlay method different for pid ${e}`, {
        oldOverlayMethod: a.overlayMethod,
        revisedFullscreenType: o,
        fullscreenHistory: a.fullscreenHistory,
        newOverlayGameStatus: l,
        shouldSwitchToHook: _,
        shouldSwitchToOutOfProcess: d,
        isForcedInProcess: c,
        isForcedOutOfProcess: u,
        legacyEnabled: b,
        overlayEnabled: H(),
    });
    let f = () => {
        O.verbose(`Updating fullscreen type for pid ${e}`, {
            oldFullscreenType: a.fullscreenType,
            newFullscreenType: o,
        }),
            z(e, "fullscreenHistory", { ...a.fullscreenHistory, [Date.now()]: o }, "updateFullscreenType"),
            z(e, "fullscreenType", o, "updateFullscreenType"),
            ed.emitChange(),
            (s = !0);
    };
    switch (l.overlayMethod) {
        case A.Ue.OutOfProcess:
        case A.Ue.OutOfProcessLimitedInteraction:
            ((d && !c) || u) &&
                (f(),
                await ((t = e),
                (n = l),
                K(t)
                    ? j(t)?.overlayMethod === n.overlayMethod
                        ? (O.verbose(`OOP requested for pid ${t} but already enabled`), Promise.resolve())
                        : (O.verbose(`Enabling OOP for pid ${t}`),
                          z(t, "hasChangedRenderMode", !0, "enableOutOfProcess"),
                          et(t, n, "enableOutOfProcess"))
                    : (O.verbose(`OOP requested for untracked pid ${t}`), Promise.resolve())));
            break;
        case A.Ue.Hook:
            ((_ && !u) || c || b) &&
                (f(),
                await ((i = e),
                (r = l),
                K(i)
                    ? j(i)?.overlayMethod === A.Ue.Hook
                        ? (O.verbose(`Hook requested for pid ${i} but already enabled`), Promise.resolve())
                        : (O.verbose(`Enabling hook for pid ${i}`),
                          z(i, "hasChangedRenderMode", !0, "enableHook"),
                          et(i, r, "enableHook"))
                    : (O.verbose(`Hook requested for untracked pid ${i}`), Promise.resolve())));
            break;
        case A.Ue.Disabled:
            f(), et(e, l, "determineOverlayMethodSwap - disabled");
    }
    return s;
}
async function er(e) {
    let t = !1;
    for (let n of e) (t = (await ei(n)) || t), await (0, r.yy)(16);
    t &&
        (O.info("determineFullscreenOverlayMethodSwaps has changes"),
        ed.emitChange(),
        B(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
async function es(e, t) {
    if (!g.O) return void O.verbose("setOverlayEnabled: not supported");
    if (
        (O.info("setOverlayEnabled: supported", { newLegacyEnabled: e, newOopEnabled: t }),
        (b = e),
        m.x.update({ legacyEnabled: e, oopEnabled: t }),
        O.info("setOverlayEnabled", { newOopEnabled: t, newLegacyEnabled: e }),
        e || t)
    )
        return void eo();
    for (let e of Y()) await Q(e), await (0, r.yy)(16);
}
function ea() {
    en(), (D = !1), (U = null), eu();
}
async function eo() {
    await el(), await (0, r.yy)(2e3);
    let e = Y(),
        t = new Set([
            ...d.Ay.getRunningGames()
                .filter((e) => d.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (O.info(`Retracking ${t.size} games (${e.length} already tracked)`), t))
        await X(n), await (0, r.yy)(16);
    O.info(`Retracked ${e.length} games`);
}
async function el() {
    for (let e of Y()) await Q(e), await (0, r.yy)(16);
}
function eu() {
    c.A.hasLoadedExperiments && !D && ((D = !0), es(m.x.legacyEnabled, m.x.oopEnabled));
}
class ec extends i.Ay.Store {
    static displayName = "OverlayRenderStore";
    initialize() {
        this.waitFor(f.default, c.A, h.A, N.A, d.Ay, C.A, _.A), this.syncWith([c.A], eu);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return V;
    }
    getHasLoadedExperiments() {
        return D;
    }
    getForcedRenderMode() {
        return R;
    }
    isAnyOverlayRendering() {
        return g.e ? _.A.getWindowOpen(v.f) : this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        return __OVERLAY__ ? A.Ue.Hook : (j(e)?.overlayMethod ?? A.Ue.Disabled);
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === A.Ue.OutOfProcess || t === A.Ue.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        return j(e)?.hasChangedRenderMode ?? !1;
    }
    getTrackedGameByPid(e) {
        return j(e);
    }
    getTrackedGames() {
        return M;
    }
    getClosedTrackedGamesHistory() {
        return P;
    }
    getGameOverlayStatus(e) {
        let t = j(e.pid);
        return null == t ? null : { enabledOOP: t.oopEnabled, enabledLegacy: t.legacyEnabled, ...t };
    }
    getGlobalEnabledStatus() {
        return { oopEnabled: H(), legacyEnabled: b };
    }
    getAnyGlobalEnabledOverlay() {
        return H() || b;
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
        return U;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(M).filter((e) => e.overlayMethod !== A.Ue.Disabled && e.state === A.AR.OVERLAY_RENDERING);
    }
}
let ed = new ec(
        s.h,
        !L
            ? {}
            : {
                  CONNECTION_OPEN: ea,
                  LOGIN: function () {
                      (D = !1), (U = null);
                  },
                  LOGOUT: function () {
                      (D = !1), (U = null), el();
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: ea,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { legacyEnabled: t, oopEnabled: n } = e;
                      return O.info("handleOverlaySetEnabled", { legacyEnabled: t, oopEnabled: n }), es(t, n), !0;
                  },
                  GAME_LAUNCH_SUCCESS: function (e) {
                      if (null != e.pids) for (let t of e.pids) X(t);
                  },
                  RUNNING_GAMES_CHANGE: function (e) {
                      for (let t of (__OVERLAY__ &&
                          O.error("Running handleRunningGamesChange While in Overlay Context!"),
                      e.added))
                          X(t.pid);
                      for (let t of e.removed) Q(t.pid);
                  },
                  RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                      if (
                          (__OVERLAY__ && O.error("Running handleGameToggleOverlay While in Overlay Context!"),
                          O.verbose("handleGameToggleOverlay", { action: e }),
                          !(H() || b))
                      ) {
                          if ((O.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
                              let t = e.game.pid,
                                  n = j(t);
                              if (null != n)
                                  return et(t, Z(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
                          }
                          return !1;
                      }
                      if (!("pid" in e.game))
                          return O.verbose("handleGameToggleOverlay: game is not a PersistGame"), en(), !0;
                      let t = e.game.pid,
                          { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e;
                      if (K(t)) {
                          let e = j(t);
                          e?.legacyEnabled !== n && z(t, "legacyEnabled", n, "handleGameToggleOverlay"),
                              e?.oopEnabled !== i && z(t, "oopEnabled", i ?? !1, "handleGameToggleOverlay");
                      }
                      let r = n && b,
                          s = (i ?? !1) && H();
                      return (
                          r || s
                              ? (O.verbose("handleGameToggleOverlay: game enabled changed", {
                                    pid: t,
                                    legacyEnabled: r,
                                    overlayV3Enabled: s,
                                }),
                                K(t) ? eo() : X(t))
                              : Q(t),
                          !0
                      );
                  },
                  OVERLAY_FORCE_RENDER_MODE: function (e) {
                      return (R = e.mode), eo(), !0;
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      if (null != j(e.pid))
                          return (
                              z(e.pid, "state", e.overlayState, e.reason),
                              O.verbose(`Updating overlay state for pid ${e.pid} to ${e.overlayState}`),
                              e.overlayState === A.AR.WAITING_FOR_POPOUT_OPEN ||
                              e.overlayState === A.AR.WAITING_FOR_OVERLAY_OPEN
                                  ? $(e.pid, A.sf.MODULE_TRACKING)
                                  : e.overlayState === A.AR.OVERLAY_RENDERING && $(e.pid, A.sf.OVERLAY_RENDERING),
                              !0
                          );
                  },
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: function () {
                      return eo(), !0;
                  },
                  OVERLAY_CRASHED: function (e) {
                      return (
                          O.error(`Overlay crashed for pid ${e.pid}`),
                          !!K(e.pid) && (z(e.pid, "state", A.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
                      );
                  },
                  OVERLAY_RELOAD: function (e) {
                      return O.error("Overlay reload for pid", { pid: e.pid }), eo(), !0;
                  },
                  OVERLAY_FOCUSED: function (e) {
                      if (((w = e.pid), F)) {
                          let t = [performance.timeOrigin + performance.now(), e.pid ?? null, e.trackMode];
                          V.push(t);
                      }
                      return !(0, E.isValidGamePID)(e.pid) || ((0, E.setPID)(e.pid), !0);
                  },
                  OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                      a.A.updateOverlayState(e.pid, A.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
                          K(e.pid) && z(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
                          B(e.pid, "overlay_successfully_shown", { pid: e.pid });
                      let t = j(e.pid);
                      null != t && a.A.updateTrackedGame(e.pid, t);
                  },
                  OVERLAY_RENDER_DEBUG_MODE: function (e) {
                      return e.mode === A.x7.TrackFocusPIDs && (F = e.enabled), !0;
                  },
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: function () {
                      return (V = new l.A(1e4)), !0;
                  },
              },
    ),
    e_ = ed;
