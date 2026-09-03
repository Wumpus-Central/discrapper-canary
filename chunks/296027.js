n.r(t), n.d(t, { default: () => eI }), n(321073);
var i = n(17928),
    r = n(499979),
    a = n(228366),
    s = n(684013),
    l = n(56562),
    o = n(635731),
    d = n(626584),
    c = n(736056),
    u = n(952818),
    _ = n(311043),
    E = n(567249),
    A = n(280450),
    h = n(760751),
    I = n(723702),
    f = n(9302),
    p = n(211753),
    T = n(206885),
    m = n(41984),
    g = n(181435);
let S = new Set([m.AR.INITIALIZING, m.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION]);
var N = n(515183),
    C = n(592598),
    O = n(682763),
    R = n(614455),
    L = n(394072),
    y = n(392164);
let D = new d.A("OverlayRenderStore"),
    v = m.V6.UNSET,
    b = !1,
    M = !1,
    P = (0, I.isWindows)() && I.isPlatformEmbedded && !__OVERLAY__,
    U = null,
    w = {},
    G = {},
    x = null,
    k = null,
    F = new Set([l.aI.FULLSCREEN, l.aI.BORDERLESS_FULLSCREEN, l.aI.UNKNOWN, l.aI.MINIMIZED]),
    V = new Set([l.aI.MINIMIZED, l.aI.UNKNOWN]),
    B = !1,
    H = new o.A(1e4);
function j(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : g.QJ.Info;
    (0, O.aS)({ pid: e, name: t, type: g.ON.Renderer, data: n, logType: i });
}
function W() {
    return R.A.isOverlayEnabled;
}
function Y(e) {
    return w[e] ?? null;
}
function K() {
    return Object.keys(w).map(Number);
}
function $(e, t, n) {
    let i = w[e]?.state;
    (w = { ...w, [e]: { ...t } }), i !== t.state && s.A.trackOverlayStateChanged(e, i, t.state, n);
}
function z(e) {
    return e in w;
}
function q(e, t, n, i) {
    let r = Y(e);
    if (null == r) return void D.error(`Tried to set property ${t} to ${n} for untracked pid ${e}`);
    let a = { ...r };
    (a[t] = n), $(e, a, i);
}
function Z(e, t) {
    let n = Y(e);
    if (null == n) return;
    let i = n.timer;
    switch (t) {
        case m.sf.SCREEN_TYPE_RESOLUTION:
            i.screenTypeResolutionTimestamp = Date.now();
            break;
        case m.sf.MODULE_TRACKING:
            i.moduleTrackingTimestamp = Date.now();
            break;
        case m.sf.OVERLAY_RENDERING:
            i.overlayRenderingTimestamp = Date.now();
    }
    q(e, "timer", i, "timeOverlayEvent"), eh.emitChange();
}
async function X(e) {
    let t = Y(e);
    if (null != t) return t;
    let n = u.Ay.getGameOrTransformedSubgameForPID(e),
        i = Date.now();
    if (null == n) return D.error(`Tried to track game ${e} but it was not found in RunningGameStore`), null;
    let { enabledOOP: r, enabledLegacy: a, ...s } = (0, u.hw)(n),
        l = h.A.findGame(n),
        o = (await (0, N.E1)(e, 0)) ?? n.fullscreenType,
        d = Date.now();
    D.verbose(`Tracking game ${e} for overlay`);
    let c = {
        ...s,
        pid: e,
        oopEnabled: r,
        legacyEnabled: a,
        gameId: l?.id ?? null,
        gameName: n.name ?? null,
        state: m.AR.INITIALIZING,
        timer: { startTrackingTimestamp: Date.now() },
        fullscreenType: o,
        fullscreenHistory: { [d]: o },
        hasChangedRenderMode: !1,
        successfullyShown: !1,
    };
    return (
        o !== n.fullscreenType && (c.fullscreenHistory[i] = n.fullscreenType),
        $(e, c, "initializeTrackedGame"),
        eh.emitChange(),
        c
    );
}
function Q(e, t) {
    switch (v) {
        case m.V6.UNSET:
            break;
        case m.V6.IN_PROCESS_V2:
            return {
                source: m.yp.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: m.Ue.Hook,
                reason: "Forced in-process overlay rendering",
            };
        case m.V6.OUT_OF_PROCESS_V3:
            return {
                source: m.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: m.Ue.OutOfProcess,
                reason: "Forced out-of-process overlay rendering",
            };
        case m.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: m.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: m.Ue.OutOfProcessLimitedInteraction,
                reason: "Forced out-of-process limited interaction overlay rendering",
            };
    }
    if (!(W() || b))
        return {
            source: m.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: m.Ue.Disabled,
            reason: "Overlay globally disabled",
        };
    let n = u.Ay.getGameOrTransformedSubgameForPID(e.pid);
    if (null == n)
        return {
            source: m.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: m.Ue.Disabled,
            reason: "No running game found for tracked game",
        };
    let i = (0, u.hw)(n);
    if (!(i.enabledLegacy || i.enabledOOP))
        return { source: i.source, enabledOOP: !1, enabledLegacy: !1, overlayMethod: m.Ue.Disabled, reason: i.reason };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: m.yp.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: m.Ue.Disabled,
            reason: "Overlay disabled for specific game",
        };
    if (!W() && b) {
        let e = (0, N.O4)(n);
        return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : m.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
        };
    }
    if (!(0, f.supportsOutOfProcess)())
        return { ...(0, N.O4)(n), source: m.yp.NO_OUT_OF_PROCESS_SUPPORT, reason: "supportsOutOfProcess failed" };
    if (!i.enabledOOP && i.enabledLegacy)
        return b
            ? { ...(0, N.O4)(n), source: m.yp.LEGACY_ENABLED, reason: "Legacy overlay enabled only" }
            : { ...i, overlayMethod: m.Ue.Disabled, source: m.yp.LEGACY_ENABLED, reason: "Legacy overlay disabled" };
    let r = h.A.findGame(n)?.id,
        a = (0, N.zi)(n) || C.A.isLimitedInteractionOverrideEnabled(n.id ?? r);
    switch (t) {
        case l.aI.MINIMIZED:
        case l.aI.WINDOWED:
        case l.aI.MAXIMIZED:
        case l.aI.BORDERLESS_FULLSCREEN: {
            let e = i.enabledOOP && W(),
                r = i.enabledLegacy && b,
                s = a ? m.Ue.OutOfProcessLimitedInteraction : m.Ue.OutOfProcess;
            return {
                ...i,
                overlayMethod: e ? s : r ? (0, N.O4)(n).overlayMethod : m.Ue.Disabled,
                reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${r}, runningGameFullscreenType: ${t}`,
            };
        }
        case l.aI.FULLSCREEN: {
            let e = (0, N.O4)(n),
                t = e.enabledLegacy && b,
                i = t ? e.overlayMethod : m.Ue.Disabled;
            return { ...e, overlayMethod: i, reason: `Fullscreen - legacyEnabled: ${t}, newOverlayMethod: ${i}` };
        }
        case l.aI.UNKNOWN:
            return {
                source: m.yp.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: m.Ue.Disabled,
                reason: "Unknown fullscreen type",
            };
        default:
            return {
                source: m.yp.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: m.Ue.Disabled,
                reason: `Missing runningFullscreenType case: ${t}`,
            };
    }
}
async function J(e) {
    if (z(e)) {
        D.verbose(`Skipping track for pid ${e} - already tracked. Determining overlay method.`), await eo(new Set([e]));
        return;
    }
    if (!(W() || b)) return void D.verbose(`Skipping track for pid ${e} - overlay is disabled`);
    let t = await X(e);
    if (null == t) return void D.error(`Failed to track game ${e}`);
    j(e, "game_tracking_starting", { game_name: t.gameName, fullscreen_type: t.fullscreenType }),
        q(e, "state", m.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        eh.emitChange(),
        D.verbose(`Determining initial overlay method for pid ${e}`);
    let n = await en(e);
    D.verbose(`Overlay method for pid ${e}: ${(0, N.gK)(n.overlayMethod)}`),
        Z(e, m.sf.SCREEN_TYPE_RESOLUTION),
        await ei(e, n, "maybeTrackGame - 2"),
        (function e(t) {
            null == x &&
                (__OVERLAY__ && D.error("Running Polling While in Overlay Context!"),
                (x = setTimeout(async () => {
                    x = null;
                    let t = K();
                    t.length > 0 && (e(N.T$), await eo(new Set(t)));
                }, t)));
        })(N.T$),
        (k = n.overlayMethod),
        eh.emitChange(),
        await s.A.updateTrackedGame(e, t);
}
async function ee(e) {
    if (!z(e)) return void D.verbose(`Skipping untrack for pid ${e} - not tracked`);
    D.verbose(`Untracking game ${e}`);
    let t = Y(e),
        n = {
            source: t?.source ?? m.yp.DEFAULT,
            enabledOOP: t?.oopEnabled ?? !1,
            enabledLegacy: t?.legacyEnabled ?? !1,
            overlayMethod: m.Ue.Disabled,
            reason: "Untracking game",
        };
    await ei(e, n, "maybeUntrackGame", !0),
        null != w[e] && ((G[e] = { ...w[e], state: m.AR.GAME_UNTRACKED }), delete w[e]),
        eh.emitChange(),
        await s.A.updateTrackedGame(e, null);
}
async function et(e) {
    let t = u.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == t) return D.error(`Tried to determine first fullscreen type for untracked pid ${e}`), l.aI.UNKNOWN;
    let n = t?.fullscreenType ?? l.aI.UNKNOWN;
    if (F.has(n)) {
        let t = await (0, N.E1)(e, 2e3);
        D.verbose(`Resolved fullscreen type for pid ${e}: ${t}`), null != t && (n = t);
    }
    return n;
}
async function en(e) {
    let t = await et(e);
    if (V.has(t)) {
        let n = await (0, N.E1)(e, 3e3);
        null != n && (t = n);
    }
    if (t === l.aI.UNKNOWN) {
        let n = await (0, N.E1)(e, 3e3);
        null != n && (t = n);
    }
    let n = Y(e);
    return null == n
        ? (D.error(`Tried to determine initial overlay method for untracked pid ${e}`),
          {
              source: m.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: m.Ue.Disabled,
              reason: "No tracked game found",
          })
        : Q(n, t);
}
async function ei(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a =
            t.overlayMethod !== m.Ue.Hook ||
            null == (i = u.Ay.getGameOrTransformedSubgameForPID(e)?.id) ||
            null != _.A.getGame(i) ||
            _.A.hasNoData(i) ||
            _.A.didFetchingFail(i)
                ? t.overlayMethod
                : m.Ue.Disabled,
        l =
            a === m.Ue.Disabled
                ? r
                    ? m.AR.OVERLAY_TEARING_DOWN
                    : m.AR.OVERLAY_DISABLED
                : m.AR.WAITING_FOR_MODULE_TRACKING,
        o = `${n}: ${t.reason}`;
    q(e, "state", l, o),
        q(e, "overlayMethod", a, o),
        q(e, "source", t.source, o),
        q(e, "oopEnabled", t.enabledOOP, o),
        q(e, "legacyEnabled", t.enabledLegacy, o),
        D.verbose(`Updating overlay method for pid ${e} "${Y(e)?.gameName}" to ${(0, N.gK)(a)}`),
        eh.emitChange();
    let d = Y(e);
    return null != d && (await s.A.updateTrackedGame(e, d)), s.A.updateOverlayMethod(e, a);
}
async function er() {
    let e = new Set(
            u.Ay.getRunningGames()
                .filter((e) => u.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(K()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await ee(e), await (0, r.yy)(16);
    let i = new Set([...e].filter((e) => !t.has(e)));
    for (let e of i) await J(e), await (0, r.yy)(16);
    let a = new Set([...t].filter((t) => e.has(t)));
    await eo(a),
        (n.size > 0 || i.size > 0) &&
            D.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: i,
                pidsAlreadyTracked: a,
            });
}
let ea = new Set();
function es() {
    let e = new Set(
            u.Ay.getRunningGames()
                .map((e) => e.id)
                .filter((e) => null != e && null != _.A.getGame(e)),
        ),
        t = e.size !== ea.size || [...e].some((e) => !ea.has(e));
    return (ea = e), t && e.size > 0 && er(), !1;
}
async function el(e) {
    var t, n, i, r;
    let a = !1,
        s = Y(e);
    if (null == s) return D.error(`Tried to determine overlay method swap for untracked pid ${e}`), !1;
    if (S.has(s.state)) return D.verbose(`Skipping overlay method swap for pid ${e} - state is ${s.state}`), !1;
    let l = await (0, N.E1)(e, 0);
    if (null == l) return D.error(`Failed to get revised fullscreen type for pid ${e}`), !1;
    s.fullscreenType !== l &&
        D.verbose(`Fullscreen type different in swap for pid ${e}`, {
            oldFullscreenType: s.fullscreenType,
            newFullscreenType: l,
        });
    let o = Q(s, l);
    if (
        (s.overlayMethod === o.overlayMethod && s.oopEnabled === o.enabledOOP && s.legacyEnabled === o.enabledLegacy) ||
        ((U === f.UNSET_PID || null === U) && s.state === m.AR.OVERLAY_RENDERING)
    )
        return a;
    let d = v === m.V6.OUT_OF_PROCESS_V3 || v === m.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        c = v === m.V6.IN_PROCESS_V2,
        u = (0, N.e3)(l, W()),
        _ = (0, N.Zj)(s, l, W());
    function E() {
        null == s ||
            null == l ||
            (D.verbose(`Updating fullscreen type for pid ${e}`, {
                oldFullscreenType: s.fullscreenType,
                newFullscreenType: l,
            }),
            q(e, "fullscreenHistory", { ...s.fullscreenHistory, [Date.now()]: l }, "updateFullscreenType"),
            q(e, "fullscreenType", l, "updateFullscreenType"),
            eh.emitChange(),
            (a = !0));
    }
    switch (
        (D.verbose(`Overlay method different for pid ${e}`, {
            oldOverlayMethod: s.overlayMethod,
            revisedFullscreenType: l,
            fullscreenHistory: s.fullscreenHistory,
            newOverlayGameStatus: o,
            shouldSwitchToHook: _,
            shouldSwitchToOutOfProcess: u,
            isForcedInProcess: c,
            isForcedOutOfProcess: d,
            legacyEnabled: b,
            overlayEnabled: W(),
        }),
        o.overlayMethod)
    ) {
        case m.Ue.OutOfProcess:
        case m.Ue.OutOfProcessLimitedInteraction:
            ((u && !c) || d) &&
                (E(),
                await ((t = e),
                (n = o),
                z(t)
                    ? Y(t)?.overlayMethod === n.overlayMethod
                        ? (D.verbose(`OOP requested for pid ${t} but already enabled`), Promise.resolve())
                        : (D.verbose(`Enabling OOP for pid ${t}`),
                          q(t, "hasChangedRenderMode", !0, "enableOutOfProcess"),
                          ei(t, n, "enableOutOfProcess"))
                    : (D.verbose(`OOP requested for untracked pid ${t}`), Promise.resolve())));
            break;
        case m.Ue.Hook:
            ((_ && !d) || c || b) &&
                (E(),
                await ((i = e),
                (r = o),
                z(i)
                    ? Y(i)?.overlayMethod === m.Ue.Hook
                        ? (D.verbose(`Hook requested for pid ${i} but already enabled`), Promise.resolve())
                        : (D.verbose(`Enabling hook for pid ${i}`),
                          q(i, "hasChangedRenderMode", !0, "enableHook"),
                          ei(i, r, "enableHook"))
                    : (D.verbose(`Hook requested for untracked pid ${i}`), Promise.resolve())));
            break;
        case m.Ue.Disabled:
            E(), ei(e, o, "determineOverlayMethodSwap - disabled");
    }
    return a;
}
async function eo(e) {
    let t = !1;
    for (let n of e) (t = (await el(n)) || t), await (0, r.yy)(16);
    t &&
        (D.info("determineFullscreenOverlayMethodSwaps has changes"),
        eh.emitChange(),
        j(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
async function ed(e, t) {
    if (!T.O) return void D.verbose("setOverlayEnabled: not supported");
    if (
        (D.info("setOverlayEnabled: supported", { newLegacyEnabled: e, newOopEnabled: t }),
        (b = e),
        p.x.update({ legacyEnabled: e, oopEnabled: t }),
        D.info("setOverlayEnabled", { newOopEnabled: t, newLegacyEnabled: e }),
        e || t)
    )
        return void eu();
    for (let e of K()) await ee(e), await (0, r.yy)(16);
}
function ec() {
    er(), (M = !1), (k = null), eE();
}
async function eu() {
    await e_(), await (0, r.yy)(2e3);
    let e = K(),
        t = new Set([
            ...u.Ay.getRunningGames()
                .filter((e) => u.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (D.info(`Retracking ${t.size} games (${e.length} already tracked)`), t))
        await J(n), await (0, r.yy)(16);
    D.info(`Retracked ${e.length} games`);
}
async function e_() {
    for (let e of K()) await ee(e), await (0, r.yy)(16);
}
function eE() {
    c.A.hasLoadedExperiments && !M && ((M = !0), ed(p.x.legacyEnabled, p.x.oopEnabled));
}
class eA extends i.Ay.Store {
    static displayName = "OverlayRenderStore";
    initialize() {
        this.waitFor(A.default, h.A, c.A, _.A, C.A, R.A, E.A, u.Ay), this.syncWith([c.A], eE), this.syncWith([_.A], es);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return H;
    }
    getHasLoadedExperiments() {
        return M;
    }
    getForcedRenderMode() {
        return v;
    }
    isAnyOverlayRendering() {
        return (0, L.LK)() ? E.A.getWindowOpen(y.f) : this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        return __OVERLAY__ ? m.Ue.Hook : (Y(e)?.overlayMethod ?? m.Ue.Disabled);
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === m.Ue.OutOfProcess || t === m.Ue.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        return Y(e)?.hasChangedRenderMode ?? !1;
    }
    getTrackedGameByPid(e) {
        return Y(e);
    }
    getTrackedGames() {
        return w;
    }
    getClosedTrackedGamesHistory() {
        return G;
    }
    getGameOverlayStatus(e) {
        let t = Y(e.pid);
        return null == t ? null : { enabledOOP: t.oopEnabled, enabledLegacy: t.legacyEnabled, ...t };
    }
    getGlobalEnabledStatus() {
        return { oopEnabled: W(), legacyEnabled: b };
    }
    getAnyGlobalEnabledOverlay() {
        return W() || b;
    }
    getPerGameEnabledStatus(e) {
        if (null == e) return { oopEnabled: !1, legacyEnabled: !1 };
        let t = Y(e.pid);
        return null == t
            ? { oopEnabled: !1, legacyEnabled: !1 }
            : { oopEnabled: t.oopEnabled, legacyEnabled: t.legacyEnabled };
    }
    getRenderMethod(e) {
        if (null != e) return Y(e)?.overlayMethod ?? void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return k;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(w).filter((e) => e.overlayMethod !== m.Ue.Disabled && e.state === m.AR.OVERLAY_RENDERING);
    }
}
let eh = new eA(
        a.h,
        !P
            ? {}
            : {
                  CONNECTION_OPEN: ec,
                  LOGIN: function () {
                      (M = !1), (k = null);
                  },
                  LOGOUT: function () {
                      (M = !1), (k = null), e_();
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: ec,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { legacyEnabled: t, oopEnabled: n } = e;
                      return D.info("handleOverlaySetEnabled", { legacyEnabled: t, oopEnabled: n }), ed(t, n), !0;
                  },
                  GAME_LAUNCH_SUCCESS: function (e) {
                      if (null != e.pids) for (let t of e.pids) J(t);
                  },
                  RUNNING_GAMES_CHANGE: function (e) {
                      for (let t of (__OVERLAY__ &&
                          D.error("Running handleRunningGamesChange While in Overlay Context!"),
                      e.added))
                          J(t.pid);
                      for (let t of e.removed) ee(t.pid);
                  },
                  RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                      if (
                          (__OVERLAY__ && D.error("Running handleGameToggleOverlay While in Overlay Context!"),
                          D.verbose("handleGameToggleOverlay", { action: e }),
                          !(W() || b))
                      ) {
                          if ((D.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
                              let t = e.game.pid,
                                  n = Y(t);
                              if (null != n)
                                  return ei(t, Q(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
                          }
                          return !1;
                      }
                      if (!("pid" in e.game))
                          return D.verbose("handleGameToggleOverlay: game is not a PersistGame"), er(), !0;
                      let t = e.game.pid,
                          { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e;
                      if (z(t)) {
                          let e = Y(t);
                          e?.legacyEnabled !== n && q(t, "legacyEnabled", n, "handleGameToggleOverlay"),
                              e?.oopEnabled !== i && q(t, "oopEnabled", i ?? !1, "handleGameToggleOverlay");
                      }
                      let r = n && b,
                          a = (i ?? !1) && W();
                      return (
                          r || a
                              ? (D.verbose("handleGameToggleOverlay: game enabled changed", {
                                    pid: t,
                                    legacyEnabled: r,
                                    overlayV3Enabled: a,
                                }),
                                z(t) ? eu() : J(t))
                              : ee(t),
                          !0
                      );
                  },
                  OVERLAY_FORCE_RENDER_MODE: function (e) {
                      return (v = e.mode), eu(), !0;
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      if (null != Y(e.pid))
                          return (
                              q(e.pid, "state", e.overlayState, e.reason),
                              D.verbose(`Updating overlay state for pid ${e.pid} to ${e.overlayState}`),
                              e.overlayState === m.AR.WAITING_FOR_POPOUT_OPEN ||
                              e.overlayState === m.AR.WAITING_FOR_OVERLAY_OPEN
                                  ? Z(e.pid, m.sf.MODULE_TRACKING)
                                  : e.overlayState === m.AR.OVERLAY_RENDERING && Z(e.pid, m.sf.OVERLAY_RENDERING),
                              !0
                          );
                  },
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: function () {
                      return eu(), !0;
                  },
                  OVERLAY_CRASHED: function (e) {
                      return (
                          D.error(`Overlay crashed for pid ${e.pid}`),
                          !!z(e.pid) && (q(e.pid, "state", m.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
                      );
                  },
                  OVERLAY_RELOAD: function (e) {
                      return D.error("Overlay reload for pid", { pid: e.pid }), eu(), !0;
                  },
                  OVERLAY_FOCUSED: function (e) {
                      if (((U = e.pid), B)) {
                          let t = [performance.timeOrigin + performance.now(), e.pid ?? null, e.trackMode];
                          H.push(t);
                      }
                      return !(0, f.isValidGamePID)(e.pid) || ((0, f.setPID)(e.pid), !0);
                  },
                  OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                      s.A.updateOverlayState(e.pid, m.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
                          z(e.pid) && q(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
                          j(e.pid, "overlay_successfully_shown", { pid: e.pid });
                      let t = Y(e.pid);
                      null != t && s.A.updateTrackedGame(e.pid, t);
                  },
                  OVERLAY_RENDER_DEBUG_MODE: function (e) {
                      return e.mode === m.x7.TrackFocusPIDs && (B = e.enabled), !0;
                  },
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: function () {
                      return (H = new o.A(1e4)), !0;
                  },
              },
    ),
    eI = eh;
