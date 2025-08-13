n.r(t), n.d(t, { default: () => eM }), n(388685);
var r,
    i = n(442837),
    o = n(379649),
    a = n(570140),
    s = n(13245),
    l = n(593472),
    c = n(710845),
    u = n(353926),
    d = n(594190),
    f = n(314897),
    _ = n(77498),
    p = n(145597),
    h = n(427860),
    m = n(454991),
    g = n(837268),
    E = n(32300),
    b = n(542750),
    y = n(829907),
    O = n(624864),
    v = n(987650);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = new c.Z("OverlayRenderStore"),
    P = g.R5.UNSET,
    w = !1,
    D = !1,
    L = !1,
    x = null,
    M = {},
    j = null,
    k = null,
    U = new Set([l.Jx.FULLSCREEN, l.Jx.BORDERLESS_FULLSCREEN, l.Jx.UNKNOWN, l.Jx.MINIMIZED]),
    G = new Set([l.Jx.MINIMIZED, l.Jx.UNKNOWN]),
    B = !1,
    Z = [];
function F(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.l6.Info;
    h.JC.addModuleBreadcrumb(t, null != n ? n : {}, h.C7.Renderer, e, r);
}
function V() {
    return w;
}
function H() {
    return D;
}
function Y() {
    return H() || V();
}
function W(e) {
    var t;
    return null != (t = M[e]) ? t : null;
}
function K() {
    return Object.keys(M).map(Number);
}
function z(e, t) {
    M = A(T({}, M), { [e]: T({}, t) });
}
function q(e) {
    delete M[e];
}
function X(e) {
    return null != M[e];
}
function Q(e, t, n) {
    let r = W(e);
    if (null == r)
        return void R.error("Tried to set property ".concat(t, " to ").concat(n, " for untracked pid ").concat(e));
    (r[t] = n), z(e, r);
}
function J() {
    return { startTrackingTimestamp: Date.now() };
}
function $(e, t) {
    let n = W(e);
    if (null == n) return;
    let r = n.timer;
    switch (t) {
        case g.zE.SCREEN_TYPE_RESOLUTION:
            r.screenTypeResolutionTimestamp = Date.now();
            break;
        case g.zE.MODULE_TRACKING:
            r.moduleTrackingTimestamp = Date.now();
            break;
        case g.zE.OVERLAY_RENDERING:
            r.overlayRenderingTimestamp = Date.now();
    }
    Q(e, "timer", r), ex.emitChange();
}
async function ee(e) {
    var t, n, r, i;
    let o = W(e);
    if (null != o) return o;
    let a = d.ZP.getGameForPID(e);
    if (null == a) return R.error("Tried to track game ".concat(e, " but it was not found in RunningGameStore")), null;
    let s = (0, d.b6)(a),
        { enabledOOP: l, enabledLegacy: c } = s,
        u = N(s, ["enabledOOP", "enabledLegacy"]),
        f = _.Z.getGameByName(a.name),
        p = null != (t = await (0, y.hj)(e, 0)) ? t : a.fullscreenType;
    R.verbose("Tracking game ".concat(e, " for overlay"));
    let h = A(T({}, u), {
        pid: e,
        oopEnabled: l,
        legacyEnabled: c,
        applicationId: null != (n = null == f ? void 0 : f.id) ? n : null,
        gameName: null != (r = a.name) ? r : null,
        state: g.mM.INITIALIZING,
        timer: J(),
        fullscreenType: p,
        previousFullscreenType: a.fullscreenType,
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null == (i = null == f ? void 0 : f.supportsOutOfProcessOverlay) || i,
        successfullyShown: !1,
    });
    return z(e, h), ex.emitChange(), h;
}
function et(e, t) {
    var n, r;
    switch (P) {
        case g.R5.UNSET:
            break;
        case g.R5.IN_PROCESS_V2:
            return {
                source: g.d0.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: g.gl.Hook,
            };
        case g.R5.OUT_OF_PROCESS_V3:
            return {
                source: g.d0.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: g.gl.OutOfProcess,
            };
        case g.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: g.d0.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: g.gl.OutOfProcessLimitedInteraction,
            };
    }
    if (!Y())
        return {
            source: g.d0.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: g.gl.Disabled,
        };
    let i = d.ZP.getGameForPID(e.pid);
    if (null == i)
        return {
            source: g.d0.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: g.gl.Disabled,
        };
    let o = (0, d.b6)(i);
    if (!(o.enabledLegacy || o.enabledOOP))
        return {
            source: o.source,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: g.gl.Disabled,
        };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: g.d0.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: g.gl.Disabled,
        };
    if (!(0, E.NW)("determineOverlayMethod", !1)) {
        let e = (0, y.qT)(i),
            t = e.enabledLegacy && V();
        return A(T({}, e), { overlayMethod: t ? e.overlayMethod : g.gl.Disabled });
    }
    if (!H() && V()) {
        let e = (0, y.qT)(i);
        return A(T({}, e), { overlayMethod: e.enabledLegacy ? e.overlayMethod : g.gl.Disabled });
    }
    if (!(0, p.supportsOutOfProcess)()) return A(T({}, (0, y.qT)(i)), { source: g.d0.NO_OUT_OF_PROCESS_SUPPORT });
    if (!o.enabledOOP && o.enabledLegacy)
        return V()
            ? A(T({}, (0, y.qT)(i)), { source: g.d0.LEGACY_ENABLED })
            : A(T({}, o), {
                  overlayMethod: g.gl.Disabled,
                  source: g.d0.LEGACY_ENABLED,
              });
    let a = null == (n = _.Z.getGameByName(i.name)) ? void 0 : n.id,
        s = (0, y.qc)(i) || O.Z.isLimitedInteractionOverrideEnabled(null != (r = i.id) ? r : a);
    switch (t) {
        case l.Jx.MINIMIZED:
        case l.Jx.WINDOWED:
        case l.Jx.MAXIMIZED:
        case l.Jx.BORDERLESS_FULLSCREEN: {
            let e = o.enabledOOP && H(),
                t = o.enabledLegacy && V(),
                n = s ? g.gl.OutOfProcessLimitedInteraction : g.gl.OutOfProcess;
            return A(T({}, o), { overlayMethod: e ? n : t ? (0, y.qT)(i).overlayMethod : g.gl.Disabled });
        }
        case l.Jx.FULLSCREEN: {
            let e = (0, y.qT)(i),
                t = e.enabledLegacy && V();
            return A(T({}, e), { overlayMethod: t ? e.overlayMethod : g.gl.Disabled });
        }
        case l.Jx.UNKNOWN:
            return {
                source: g.d0.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: g.gl.Disabled,
            };
        default:
            return {
                source: g.d0.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: g.gl.Disabled,
            };
    }
}
async function en(e) {
    if (X(e)) {
        R.verbose("Skipping track for pid ".concat(e, " - already tracked. Determining overlay method.")),
            await ed(new Set([e]));
        return;
    }
    if (!Y()) return void R.verbose("Skipping track for pid ".concat(e, " - overlay is disabled"));
    let t = await ee(e);
    if (null == t) return void R.error("Failed to track game ".concat(e));
    F(e, "game_tracking_starting", {
        game_name: t.gameName,
        fullscreen_type: t.fullscreenType,
    }),
        Q(e, "state", g.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION),
        ex.emitChange(),
        R.verbose("Determining initial overlay method for pid ".concat(e));
    let n = await eo(e);
    R.verbose("Overlay method for pid ".concat(e, ": ").concat((0, y.P_)(n.overlayMethod))),
        $(e, g.zE.SCREEN_TYPE_RESOLUTION),
        await ea(e, n),
        ef(y.HD),
        (k = n.overlayMethod),
        ex.emitChange(),
        await s.Z.updateTrackedGame(e, t);
}
async function er(e) {
    var t, n, r;
    if (!X(e)) return void R.verbose("Skipping untrack for pid ".concat(e, " - not tracked"));
    R.verbose("Untracking game ".concat(e));
    let i = W(e),
        o = {
            source: null != (t = null == i ? void 0 : i.source) ? t : g.d0.DEFAULT,
            enabledOOP: null != (n = null == i ? void 0 : i.oopEnabled) && n,
            enabledLegacy: null != (r = null == i ? void 0 : i.legacyEnabled) && r,
            overlayMethod: g.gl.Disabled,
        };
    await ea(e, o), q(e), ex.emitChange(), await s.Z.updateTrackedGame(e, null);
}
async function ei(e) {
    var t;
    let n = d.ZP.getGameForPID(e),
        r = null != (t = null == n ? void 0 : n.fullscreenType) ? t : l.Jx.UNKNOWN;
    if (U.has(r)) {
        let t = await (0, y.hj)(e, (0, y.O0)("first_fullscreen"));
        R.verbose("Resolved fullscreen type for pid ".concat(e, ": ").concat(t)), null != t && (r = t);
    }
    return r;
}
async function eo(e) {
    let t = await ei(e);
    if (G.has(t)) {
        let n = await (0, y.hj)(e, (0, y.aW)("initial_status"));
        null != n && (t = n);
    }
    if (t === l.Jx.UNKNOWN) {
        let n = await (0, y.hj)(e, (0, y.aW)("initial_status"));
        null != n && (t = n);
    }
    let n = W(e);
    return null == n
        ? (R.error("Tried to determine initial overlay method for untracked pid ".concat(e)),
          {
              source: g.d0.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: g.gl.Disabled,
          })
        : et(n, t);
}
async function ea(e, t) {
    var n;
    let r = t.overlayMethod;
    Q(e, "state", r === g.gl.Disabled ? g.mM.OVERLAY_DISABLED : g.mM.WAITING_FOR_MODULE_TRACKING),
        Q(e, "overlayMethod", r),
        Q(e, "source", t.source),
        Q(e, "oopEnabled", t.enabledOOP),
        Q(e, "legacyEnabled", t.enabledLegacy),
        R.verbose(
            "Updating overlay method for pid "
                .concat(e, ' "')
                .concat(null == (n = W(e)) ? void 0 : n.gameName, '" to ')
                .concat((0, y.P_)(r)),
        ),
        ex.emitChange();
    let i = W(e);
    return null != i && (await s.Z.updateTrackedGame(e, i)), s.Z.updateOverlayMethod(e, r);
}
async function es() {
    let e = new Set(
            d.ZP.getRunningGames()
                .filter((e) => d.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(K()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await er(e), await (0, o._v)(16);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await en(e), await (0, o._v)(16);
    let i = new Set([...t].filter((t) => e.has(t)));
    await ed(i),
        (n.size > 0 || r.size > 0) &&
            R.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: i,
            });
}
async function el(e) {
    let t = !1,
        n = W(e);
    if (null == n) return R.error("Tried to determine overlay method swap for untracked pid ".concat(e)), !1;
    if (b.l.has(n.state))
        return R.verbose("Skipping overlay method swap for pid ".concat(e, " - state is ").concat(n.state)), !1;
    let r = await (0, y.hj)(e, 0);
    if (null == r) return R.error("Failed to get revised fullscreen type for pid ".concat(e)), !1;
    n.fullscreenType !== r &&
        (R.verbose("Fullscreen type different in swap for pid ".concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        }),
        Q(e, "previousFullscreenType", n.fullscreenType),
        Q(e, "fullscreenType", r),
        ex.emitChange(),
        (t = !0));
    let i = et(n, r);
    if (
        (n.overlayMethod === i.overlayMethod &&
            n.oopEnabled === i.enabledOOP &&
            n.legacyEnabled === i.enabledLegacy &&
            i.overlayMethod !== g.gl.Disabled) ||
        ((x === p.UNSET_PID || null === x) && n.state === g.mM.OVERLAY_RENDERING)
    )
        return t;
    let o = P === g.R5.OUT_OF_PROCESS_V3 || P === g.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        a = P === g.R5.IN_PROCESS_V2,
        s = (0, y.PD)(n, r, H()),
        l = (0, y.DH)(n, r, H());
    switch (
        (R.verbose("Overlay method different for pid ".concat(e), {
            oldOverlayMethod: n.overlayMethod,
            revisedFullscreenType: r,
            previousFullscreenType: n.previousFullscreenType,
            newOverlayGameStatus: i,
            shouldSwitchToHook: l,
            shouldSwitchToOutOfProcess: s,
            isForcedInProcess: a,
            isForcedOutOfProcess: o,
            legacyEnabled: V(),
            overlayEnabled: H(),
        }),
        i.overlayMethod)
    ) {
        case g.gl.OutOfProcess:
        case g.gl.OutOfProcessLimitedInteraction:
            ((s && !a) || o) && (await eu(e, i));
            break;
        case g.gl.Hook:
            ((l && !o) || a || V()) && (await ec(e, i));
            break;
        case g.gl.Disabled:
            await er(e);
    }
    return t;
}
function ec(e, t) {
    var n;
    return X(e)
        ? (null == (n = W(e)) ? void 0 : n.overlayMethod) === g.gl.Hook
            ? (R.verbose("Hook requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (R.verbose("Enabling hook for pid ".concat(e)), Q(e, "hasChangedRenderMode", !0), ea(e, t))
        : (R.verbose("Hook requested for untracked pid ".concat(e)), Promise.resolve());
}
function eu(e, t) {
    var n;
    return X(e)
        ? (null == (n = W(e)) ? void 0 : n.overlayMethod) === t.overlayMethod
            ? (R.verbose("OOP requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (R.verbose("Enabling OOP for pid ".concat(e)), Q(e, "hasChangedRenderMode", !0), ea(e, t))
        : (R.verbose("OOP requested for untracked pid ".concat(e)), Promise.resolve());
}
async function ed(e) {
    let t = !1;
    for (let n of e) (t = (await el(n)) || t), await (0, o._v)(16);
    t &&
        (R.info("determineFullscreenOverlayMethodSwaps has changes"),
        ex.emitChange(),
        F(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
function ef(e) {
    null == j &&
        (__OVERLAY__ && R.error("Running Polling While in Overlay Context!"),
        (j = setTimeout(async () => {
            j = null;
            let e = K();
            e.length > 0 && (ef(y.HD), await ed(new Set(e)));
        }, e)));
}
async function e_(e, t) {
    if (!v.iP) return void R.verbose("setOverlayEnabled: not supported");
    R.info("setOverlayEnabled: supported", {
        newLegacyEnabled: e,
        newOopEnabled: t,
    });
    let n = e !== w,
        r = t !== D;
    if (
        ((w = e),
        (D = t),
        m.v.update({
            legacyEnabled: w,
            oopEnabled: D,
        }),
        R.info("setOverlayEnabled", {
            newOopEnabled: t,
            newLegacyEnabled: e,
        }),
        D && r && (0, p.setOutOfProcessSupport)(!0),
        w || D)
    )
        n && R.info("Legacy change"), r && R.info("OOP change"), eb();
    else for (let e of K()) await er(e), await (0, o._v)(16);
}
function ep() {
    es(), (L = !1), (k = null), eP();
}
function eh(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return (
        R.info("handleOverlaySetEnabled", {
            legacyEnabled: t,
            oopEnabled: n,
        }),
        e_(t, n),
        !0
    );
}
function em(e) {
    if (null != e.pids) for (let t of e.pids) en(t);
}
function eg(e) {
    for (let t of (__OVERLAY__ && R.error("Running handleRunningGamesChange While in Overlay Context!"), e.added))
        en(t.pid);
    for (let t of e.removed) er(t.pid);
}
function eE(e) {
    if (
        (__OVERLAY__ && R.error("Running handleGameToggleOverlay While in Overlay Context!"),
        R.verbose("handleGameToggleOverlay", { action: e }),
        !Y())
    ) {
        if ((R.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
            let t = e.game.pid,
                n = W(t);
            if (null != n) return ea(t, et(n, n.fullscreenType)), !0;
        }
        return !1;
    }
    if (!("pid" in e.game)) return R.verbose("handleGameToggleOverlay: game is not a PersistGame"), es(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (X(t)) {
        let e = W(t);
        (null == e ? void 0 : e.legacyEnabled) !== n && Q(t, "legacyEnabled", n),
            (null == e ? void 0 : e.oopEnabled) !== r && Q(t, "oopEnabled", null != r && r);
    }
    let i = n && V(),
        o = null != r && r && H();
    return (
        i || o
            ? (R.verbose("handleGameToggleOverlay: game enabled changed", {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: o,
              }),
              X(t) ? eb() : en(t))
            : er(t),
        !0
    );
}
async function eb() {
    await ey(), await (0, o._v)(2000);
    let e = K(),
        t = new Set([
            ...d.ZP.getRunningGames()
                .filter((e) => d.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (R.info("Retracking ".concat(t.size, " games (").concat(e.length, " already tracked)")), t))
        await en(n), await (0, o._v)(16);
    R.info("Retracked ".concat(e.length, " games"));
}
async function ey() {
    for (let e of K()) await er(e), await (0, o._v)(16);
}
function eO(e) {
    return R.error("Overlay reload for pid", { pid: e.pid }), eb(), !0;
}
function ev(e) {
    return (
        R.error("Overlay crashed for pid ".concat(e.pid)), !!X(e.pid) && (Q(e.pid, "state", g.mM.OVERLAY_CRASHED), !0)
    );
}
function eI(e) {
    return (P = e.mode), eb(), !0;
}
function eT(e) {
    if (null != W(e.pid))
        return (
            Q(e.pid, "state", e.overlayState),
            R.verbose("Updating overlay state for pid ".concat(e.pid, " to ").concat(e.overlayState)),
            e.overlayState === g.mM.WAITING_FOR_OVERLAY_OPEN
                ? $(e.pid, g.zE.MODULE_TRACKING)
                : e.overlayState === g.mM.OVERLAY_RENDERING && $(e.pid, g.zE.OVERLAY_RENDERING),
            !0
        );
}
function eS() {
    return eb(), !0;
}
function eA(e) {
    return e.mode === g.GO.TrackFocusPIDs && (B = e.enabled), !0;
}
function eN() {
    return (Z = []), !0;
}
function eC(e) {
    if (((x = e.pid), B)) {
        var t;
        let n = [performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
        Z = [...Z, n];
    }
    return !(0, p.isValidGamePID)(e.pid) || ((0, p.setPID)(e.pid), !0);
}
function eR(e) {
    X(e.pid) && Q(e.pid, "successfullyShown", !0), F(e.pid, "overlay_successfully_shown");
    let t = W(e.pid);
    return null == t || (s.Z.updateTrackedGame(e.pid, t), !0);
}
function eP() {
    u.Z.hasLoadedExperiments && !L && ((L = !0), e_(m.v.legacyEnabled, m.v.oopEnabled));
}
function ew() {
    (L = !1), (k = null);
}
function eD() {
    (L = !1), (k = null), ey();
}
class eL extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(d.ZP, f.default, u.Z, O.Z), this.syncWith([u.Z], eP);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return Z;
    }
    getHasLoadedExperiments() {
        return L;
    }
    getForcedRenderMode() {
        return P;
    }
    isAnyOverlayRendering() {
        return Object.values(M).some((e) => e.state === g.mM.OVERLAY_RENDERING);
    }
    getOverlayMethod(e) {
        var t, n;
        return null != (n = null == (t = W(e)) ? void 0 : t.overlayMethod) ? n : g.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === g.gl.OutOfProcess || t === g.gl.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null != (n = null == (t = W(e)) ? void 0 : t.hasChangedRenderMode) && n;
    }
    getTrackedGameByPid(e) {
        return W(e);
    }
    getTrackedGames() {
        return M;
    }
    getGameOverlayStatus(e) {
        let t = W(e.pid);
        return null == t
            ? null
            : T(
                  {
                      enabledOOP: t.oopEnabled,
                      enabledLegacy: t.legacyEnabled,
                  },
                  t,
              );
    }
    getGlobalEnabledStatus() {
        return {
            oopEnabled: H(),
            legacyEnabled: V(),
        };
    }
    getAnyGlobalEnabledOverlay() {
        return H() || V();
    }
    getPerGameEnabledStatus(e) {
        if (null == e)
            return {
                oopEnabled: !1,
                legacyEnabled: !1,
            };
        let t = W(e.pid);
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
        if (null != e) return null != (n = null == (t = W(e)) ? void 0 : t.overlayMethod) ? n : void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return k;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(M).filter((e) => e.overlayMethod !== g.gl.Disabled && e.state === g.mM.OVERLAY_RENDERING);
    }
}
I(eL, "displayName", "OverlayRenderStore");
let ex = new eL(
        a.Z,
        __OVERLAY__
            ? {}
            : {
                  CONNECTION_OPEN: ep,
                  LOGIN: ew,
                  LOGOUT: eD,
                  EXPERIMENT_OVERRIDE_BUCKET: ep,
                  OVERLAY_SET_ENABLED: eh,
                  GAME_LAUNCH_SUCCESS: em,
                  RUNNING_GAMES_CHANGE: eg,
                  RUNNING_GAME_TOGGLE_OVERLAY: eE,
                  OVERLAY_FORCE_RENDER_MODE: eI,
                  OVERLAY_UPDATE_OVERLAY_STATE: eT,
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eS,
                  OVERLAY_CRASHED: ev,
                  OVERLAY_RELOAD: eO,
                  OVERLAY_FOCUSED: eC,
                  OVERLAY_SUCCESSFULLY_SHOWN: eR,
                  OVERLAY_RENDER_DEBUG_MODE: eA,
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eN,
              },
    ),
    eM = ex;
