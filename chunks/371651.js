n.r(t), n.d(t, { default: () => eU }), n(388685), n(539854);
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
    T = n(987650);
function S(e, t, n) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let w = new u.Z("OverlayRenderStore"),
    D = b.R5.UNSET,
    L = !1,
    x = !1,
    M = !1,
    k = (0, h.isWindows)() && h.isPlatformEmbedded && !__OVERLAY__,
    j = null,
    U = {},
    G = null,
    B = null,
    Z = new Set([l.Jx.FULLSCREEN, l.Jx.BORDERLESS_FULLSCREEN, l.Jx.UNKNOWN, l.Jx.MINIMIZED]),
    F = new Set([l.Jx.MINIMIZED, l.Jx.UNKNOWN]),
    V = !1,
    H = new c.Z(10000);
function Y(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : g.l6.Info;
    g.JC.addModuleBreadcrumb(t, null != n ? n : {}, g.C7.Renderer, e, r);
}
function W() {
    return L;
}
function K() {
    return x;
}
function z() {
    return K() || W();
}
function q(e) {
    var t;
    return null != (t = U[e]) ? t : null;
}
function X() {
    return Object.keys(U).map(Number);
}
function Q(e, t) {
    var n;
    let r = null == (n = U[e]) ? void 0 : n.state;
    (U = N(A({}, U), { [e]: A({}, t) })), r !== t.state && s.Z.trackOverlayStateChanged(e, r, t.state);
}
function J(e) {
    delete U[e];
}
function $(e) {
    return e in U;
}
function ee(e, t, n) {
    let r = q(e);
    if (null == r)
        return void w.error("Tried to set property ".concat(t, " to ").concat(n, " for untracked pid ").concat(e));
    let i = A({}, r);
    (i[t] = n), Q(e, i);
}
function et() {
    return { startTrackingTimestamp: Date.now() };
}
function en(e, t) {
    let n = q(e);
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
    ee(e, "timer", r), ej.emitChange();
}
async function er(e) {
    var t, n, r, i;
    let a = q(e);
    if (null != a) return a;
    let o = f.ZP.getGameOrTransformedSubgameForPID(e);
    if (null == o) return w.error("Tried to track game ".concat(e, " but it was not found in RunningGameStore")), null;
    let s = (0, f.b6)(o),
        { enabledOOP: l, enabledLegacy: c } = s,
        u = R(s, ["enabledOOP", "enabledLegacy"]),
        d = p.Z.getGameByName(o.name),
        _ = null != (t = await (0, v.hj)(e, 0)) ? t : o.fullscreenType;
    w.verbose("Tracking game ".concat(e, " for overlay"));
    let h = N(A({}, u), {
        pid: e,
        oopEnabled: l,
        legacyEnabled: c,
        applicationId: null != (n = null == d ? void 0 : d.id) ? n : null,
        gameName: null != (r = o.name) ? r : null,
        state: b.mM.INITIALIZING,
        timer: et(),
        fullscreenType: _,
        previousFullscreenType: o.fullscreenType,
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null == (i = null == d ? void 0 : d.supportsOutOfProcessOverlay) || i,
        successfullyShown: !1,
    });
    return Q(e, h), ej.emitChange(), h;
}
function ei(e, t) {
    var n, r;
    switch (D) {
        case b.R5.UNSET:
            break;
        case b.R5.IN_PROCESS_V2:
            return {
                source: b.d0.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: b.gl.Hook,
            };
        case b.R5.OUT_OF_PROCESS_V3:
            return {
                source: b.d0.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: b.gl.OutOfProcess,
            };
        case b.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: b.d0.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: b.gl.OutOfProcessLimitedInteraction,
            };
    }
    if (!z())
        return {
            source: b.d0.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: b.gl.Disabled,
        };
    let i = f.ZP.getGameOrTransformedSubgameForPID(e.pid);
    if (null == i)
        return {
            source: b.d0.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: b.gl.Disabled,
        };
    let a = (0, f.b6)(i);
    if (!(a.enabledLegacy || a.enabledOOP))
        return {
            source: a.source,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: b.gl.Disabled,
        };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: b.d0.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: b.gl.Disabled,
        };
    if (!(0, y.NW)("determineOverlayMethod", !1)) {
        let e = (0, v.qT)(i),
            t = e.enabledLegacy && W();
        return N(A({}, e), { overlayMethod: t ? e.overlayMethod : b.gl.Disabled });
    }
    if (!K() && W()) {
        let e = (0, v.qT)(i);
        return N(A({}, e), { overlayMethod: e.enabledLegacy ? e.overlayMethod : b.gl.Disabled });
    }
    if (!(0, m.supportsOutOfProcess)()) return N(A({}, (0, v.qT)(i)), { source: b.d0.NO_OUT_OF_PROCESS_SUPPORT });
    if (!a.enabledOOP && a.enabledLegacy)
        return W()
            ? N(A({}, (0, v.qT)(i)), { source: b.d0.LEGACY_ENABLED })
            : N(A({}, a), {
                  overlayMethod: b.gl.Disabled,
                  source: b.d0.LEGACY_ENABLED,
              });
    let o = null == (n = p.Z.getGameByName(i.name)) ? void 0 : n.id,
        s = (0, v.qc)(i) || I.Z.isLimitedInteractionOverrideEnabled(null != (r = i.id) ? r : o);
    switch (t) {
        case l.Jx.MINIMIZED:
        case l.Jx.WINDOWED:
        case l.Jx.MAXIMIZED:
        case l.Jx.BORDERLESS_FULLSCREEN: {
            let e = a.enabledOOP && K(),
                t = a.enabledLegacy && W(),
                n = s ? b.gl.OutOfProcessLimitedInteraction : b.gl.OutOfProcess;
            return N(A({}, a), { overlayMethod: e ? n : t ? (0, v.qT)(i).overlayMethod : b.gl.Disabled });
        }
        case l.Jx.FULLSCREEN: {
            let e = (0, v.qT)(i),
                t = e.enabledLegacy && W();
            return N(A({}, e), { overlayMethod: t ? e.overlayMethod : b.gl.Disabled });
        }
        case l.Jx.UNKNOWN:
            return {
                source: b.d0.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: b.gl.Disabled,
            };
        default:
            return {
                source: b.d0.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: b.gl.Disabled,
            };
    }
}
async function ea(e) {
    if ($(e)) {
        w.verbose("Skipping track for pid ".concat(e, " - already tracked. Determining overlay method.")),
            await ep(new Set([e]));
        return;
    }
    if (!z()) return void w.verbose("Skipping track for pid ".concat(e, " - overlay is disabled"));
    let t = await er(e);
    if (null == t) return void w.error("Failed to track game ".concat(e));
    Y(e, "game_tracking_starting", {
        game_name: t.gameName,
        fullscreen_type: t.fullscreenType,
    }),
        ee(e, "state", b.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION),
        ej.emitChange(),
        w.verbose("Determining initial overlay method for pid ".concat(e));
    let n = await el(e);
    w.verbose("Overlay method for pid ".concat(e, ": ").concat((0, v.P_)(n.overlayMethod))),
        en(e, b.zE.SCREEN_TYPE_RESOLUTION),
        await ec(e, n),
        eh(v.HD),
        (B = n.overlayMethod),
        ej.emitChange(),
        await s.Z.updateTrackedGame(e, t);
}
async function eo(e) {
    var t, n, r;
    if (!$(e)) return void w.verbose("Skipping untrack for pid ".concat(e, " - not tracked"));
    w.verbose("Untracking game ".concat(e));
    let i = q(e),
        a = {
            source: null != (t = null == i ? void 0 : i.source) ? t : b.d0.DEFAULT,
            enabledOOP: null != (n = null == i ? void 0 : i.oopEnabled) && n,
            enabledLegacy: null != (r = null == i ? void 0 : i.legacyEnabled) && r,
            overlayMethod: b.gl.Disabled,
        };
    await ec(e, a), J(e), ej.emitChange(), await s.Z.updateTrackedGame(e, null);
}
async function es(e) {
    var t;
    let n = f.ZP.getGameOrTransformedSubgameForPID(e);
    if (null == n)
        return w.error("Tried to determine first fullscreen type for untracked pid ".concat(e)), l.Jx.UNKNOWN;
    let r = null != (t = null == n ? void 0 : n.fullscreenType) ? t : l.Jx.UNKNOWN;
    if (Z.has(r)) {
        let t = await (0, v.hj)(e, (0, v.O0)("first_fullscreen"));
        w.verbose("Resolved fullscreen type for pid ".concat(e, ": ").concat(t)), null != t && (r = t);
    }
    return r;
}
async function el(e) {
    let t = await es(e);
    if (F.has(t)) {
        let n = await (0, v.hj)(e, (0, v.aW)("initial_status"));
        null != n && (t = n);
    }
    if (t === l.Jx.UNKNOWN) {
        let n = await (0, v.hj)(e, (0, v.aW)("initial_status"));
        null != n && (t = n);
    }
    let n = q(e);
    return null == n
        ? (w.error("Tried to determine initial overlay method for untracked pid ".concat(e)),
          {
              source: b.d0.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: b.gl.Disabled,
          })
        : ei(n, t);
}
async function ec(e, t) {
    var n;
    let r = t.overlayMethod;
    ee(e, "state", r === b.gl.Disabled ? b.mM.OVERLAY_DISABLED : b.mM.WAITING_FOR_MODULE_TRACKING),
        ee(e, "overlayMethod", r),
        ee(e, "source", t.source),
        ee(e, "oopEnabled", t.enabledOOP),
        ee(e, "legacyEnabled", t.enabledLegacy),
        w.verbose(
            "Updating overlay method for pid "
                .concat(e, ' "')
                .concat(null == (n = q(e)) ? void 0 : n.gameName, '" to ')
                .concat((0, v.P_)(r)),
        ),
        ej.emitChange();
    let i = q(e);
    return null != i && (await s.Z.updateTrackedGame(e, i)), s.Z.updateOverlayMethod(e, r);
}
async function eu() {
    let e = new Set(
            f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(X()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await eo(e), await (0, a._v)(16);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await ea(e), await (0, a._v)(16);
    let i = new Set([...t].filter((t) => e.has(t)));
    await ep(i),
        (n.size > 0 || r.size > 0) &&
            w.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: i,
            });
}
async function ed(e) {
    let t = !1,
        n = q(e);
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
    let i = ei(n, r);
    if (
        (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy) ||
        ((j === m.UNSET_PID || null === j) && n.state === b.mM.OVERLAY_RENDERING)
    )
        return t;
    let a = D === b.R5.OUT_OF_PROCESS_V3 || D === b.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        o = D === b.R5.IN_PROCESS_V2,
        s = (0, v.PD)(r, K()),
        l = (0, v.DH)(n, r, K());
    w.verbose("Overlay method different for pid ".concat(e), {
        oldOverlayMethod: n.overlayMethod,
        revisedFullscreenType: r,
        previousFullscreenType: n.previousFullscreenType,
        newOverlayGameStatus: i,
        shouldSwitchToHook: l,
        shouldSwitchToOutOfProcess: s,
        isForcedInProcess: o,
        isForcedOutOfProcess: a,
        legacyEnabled: W(),
        overlayEnabled: K(),
    });
    let c = () => {
        w.verbose("Updating fullscreen type for pid ".concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        }),
            ee(e, "previousFullscreenType", n.fullscreenType),
            ee(e, "fullscreenType", r),
            ej.emitChange(),
            (t = !0);
    };
    switch (i.overlayMethod) {
        case b.gl.OutOfProcess:
        case b.gl.OutOfProcessLimitedInteraction:
            ((s && !o) || a) && (c(), await e_(e, i));
            break;
        case b.gl.Hook:
            ((l && !a) || o || W()) && (c(), await ef(e, i));
            break;
        case b.gl.Disabled:
            c(), ec(e, i);
    }
    return t;
}
function ef(e, t) {
    var n;
    return $(e)
        ? (null == (n = q(e)) ? void 0 : n.overlayMethod) === b.gl.Hook
            ? (w.verbose("Hook requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (w.verbose("Enabling hook for pid ".concat(e)), ee(e, "hasChangedRenderMode", !0), ec(e, t))
        : (w.verbose("Hook requested for untracked pid ".concat(e)), Promise.resolve());
}
function e_(e, t) {
    var n;
    return $(e)
        ? (null == (n = q(e)) ? void 0 : n.overlayMethod) === t.overlayMethod
            ? (w.verbose("OOP requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (w.verbose("Enabling OOP for pid ".concat(e)), ee(e, "hasChangedRenderMode", !0), ec(e, t))
        : (w.verbose("OOP requested for untracked pid ".concat(e)), Promise.resolve());
}
async function ep(e) {
    let t = !1;
    for (let n of e) (t = (await ed(n)) || t), await (0, a._v)(16);
    t &&
        (w.info("determineFullscreenOverlayMethodSwaps has changes"),
        ej.emitChange(),
        Y(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
function eh(e) {
    null == G &&
        (__OVERLAY__ && w.error("Running Polling While in Overlay Context!"),
        (G = setTimeout(async () => {
            G = null;
            let e = X();
            e.length > 0 && (eh(v.HD), await ep(new Set(e)));
        }, e)));
}
async function em(e, t) {
    if (!T.iP) return void w.verbose("setOverlayEnabled: not supported");
    w.info("setOverlayEnabled: supported", {
        newLegacyEnabled: e,
        newOopEnabled: t,
    });
    let n = e !== L,
        r = t !== x;
    if (
        ((L = e),
        (x = t),
        E.v.update({
            legacyEnabled: L,
            oopEnabled: x,
        }),
        w.info("setOverlayEnabled", {
            newOopEnabled: t,
            newLegacyEnabled: e,
        }),
        x && r && (0, m.setOutOfProcessSupport)(!0),
        L || x)
    )
        n && w.info("Legacy change"), r && w.info("OOP change"), ev();
    else for (let e of X()) await eo(e), await (0, a._v)(16);
}
function eg() {
    eu(), (M = !1), (B = null), eL();
}
function eE(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return (
        w.info("handleOverlaySetEnabled", {
            legacyEnabled: t,
            oopEnabled: n,
        }),
        em(t, n),
        !0
    );
}
function eb(e) {
    if (null != e.pids) for (let t of e.pids) ea(t);
}
function ey(e) {
    for (let t of (__OVERLAY__ && w.error("Running handleRunningGamesChange While in Overlay Context!"), e.added))
        ea(t.pid);
    for (let t of e.removed) eo(t.pid);
}
function eO(e) {
    if (
        (__OVERLAY__ && w.error("Running handleGameToggleOverlay While in Overlay Context!"),
        w.verbose("handleGameToggleOverlay", { action: e }),
        !z())
    ) {
        if ((w.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
            let t = e.game.pid,
                n = q(t);
            if (null != n) return ec(t, ei(n, n.fullscreenType)), !0;
        }
        return !1;
    }
    if (!("pid" in e.game)) return w.verbose("handleGameToggleOverlay: game is not a PersistGame"), eu(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if ($(t)) {
        let e = q(t);
        (null == e ? void 0 : e.legacyEnabled) !== n && ee(t, "legacyEnabled", n),
            (null == e ? void 0 : e.oopEnabled) !== r && ee(t, "oopEnabled", null != r && r);
    }
    let i = n && W(),
        a = null != r && r && K();
    return (
        i || a
            ? (w.verbose("handleGameToggleOverlay: game enabled changed", {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: a,
              }),
              $(t) ? ev() : ea(t))
            : eo(t),
        !0
    );
}
async function ev() {
    await eI(), await (0, a._v)(2000);
    let e = X(),
        t = new Set([
            ...f.ZP.getRunningGames()
                .filter((e) => f.ZP.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (w.info("Retracking ".concat(t.size, " games (").concat(e.length, " already tracked)")), t))
        await ea(n), await (0, a._v)(16);
    w.info("Retracked ".concat(e.length, " games"));
}
async function eI() {
    for (let e of X()) await eo(e), await (0, a._v)(16);
}
function eT(e) {
    return w.error("Overlay reload for pid", { pid: e.pid }), ev(), !0;
}
function eS(e) {
    return (
        w.error("Overlay crashed for pid ".concat(e.pid)), !!$(e.pid) && (ee(e.pid, "state", b.mM.OVERLAY_CRASHED), !0)
    );
}
function eA(e) {
    return (D = e.mode), ev(), !0;
}
function eC(e) {
    if (null != q(e.pid))
        return (
            ee(e.pid, "state", e.overlayState),
            w.verbose("Updating overlay state for pid ".concat(e.pid, " to ").concat(e.overlayState)),
            e.overlayState === b.mM.WAITING_FOR_POPOUT_OPEN || e.overlayState === b.mM.WAITING_FOR_OVERLAY_OPEN
                ? en(e.pid, b.zE.MODULE_TRACKING)
                : e.overlayState === b.mM.OVERLAY_RENDERING && en(e.pid, b.zE.OVERLAY_RENDERING),
            !0
        );
}
function eN() {
    return ev(), !0;
}
function eR(e) {
    return e.mode === b.GO.TrackFocusPIDs && (V = e.enabled), !0;
}
function eP() {
    return (H = new c.Z(10000)), !0;
}
function ew(e) {
    if (((j = e.pid), V)) {
        var t;
        let n = [performance.timeOrigin + performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
        H.push(n);
    }
    return !(0, m.isValidGamePID)(e.pid) || ((0, m.setPID)(e.pid), !0);
}
function eD(e) {
    s.Z.updateOverlayState(e.pid, b.mM.OVERLAY_RENDERING),
        $(e.pid) && ee(e.pid, "successfullyShown", !0),
        Y(e.pid, "overlay_successfully_shown", { pid: e.pid });
    let t = q(e.pid);
    null != t && s.Z.updateTrackedGame(e.pid, t);
}
function eL() {
    d.Z.hasLoadedExperiments && !M && ((M = !0), em(E.v.legacyEnabled, E.v.oopEnabled));
}
function ex() {
    (M = !1), (B = null);
}
function eM() {
    (M = !1), (B = null), eI();
}
class ek extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, _.default, d.Z, I.Z), this.syncWith([d.Z], eL);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return H;
    }
    getHasLoadedExperiments() {
        return M;
    }
    getForcedRenderMode() {
        return D;
    }
    isAnyOverlayRendering() {
        return this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        var t, n;
        return __OVERLAY__
            ? b.gl.Hook
            : null != (n = null == (t = q(e)) ? void 0 : t.overlayMethod)
              ? n
              : b.gl.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === b.gl.OutOfProcess || t === b.gl.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null != (n = null == (t = q(e)) ? void 0 : t.hasChangedRenderMode) && n;
    }
    getTrackedGameByPid(e) {
        return q(e);
    }
    getTrackedGames() {
        return U;
    }
    getGameOverlayStatus(e) {
        let t = q(e.pid);
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
            oopEnabled: K(),
            legacyEnabled: W(),
        };
    }
    getAnyGlobalEnabledOverlay() {
        return K() || W();
    }
    getPerGameEnabledStatus(e) {
        if (null == e)
            return {
                oopEnabled: !1,
                legacyEnabled: !1,
            };
        let t = q(e.pid);
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
        if (null != e) return null != (n = null == (t = q(e)) ? void 0 : t.overlayMethod) ? n : void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return B;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(U).filter((e) => e.overlayMethod !== b.gl.Disabled && e.state === b.mM.OVERLAY_RENDERING);
    }
}
S(ek, "displayName", "OverlayRenderStore");
let ej = new ek(
        o.Z,
        !k
            ? {}
            : {
                  CONNECTION_OPEN: eg,
                  LOGIN: ex,
                  LOGOUT: eM,
                  EXPERIMENT_OVERRIDE_BUCKET: eg,
                  OVERLAY_SET_ENABLED: eE,
                  GAME_LAUNCH_SUCCESS: eb,
                  RUNNING_GAMES_CHANGE: ey,
                  RUNNING_GAME_TOGGLE_OVERLAY: eO,
                  OVERLAY_FORCE_RENDER_MODE: eA,
                  OVERLAY_UPDATE_OVERLAY_STATE: eC,
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eN,
                  OVERLAY_CRASHED: eS,
                  OVERLAY_RELOAD: eT,
                  OVERLAY_FOCUSED: ew,
                  OVERLAY_SUCCESSFULLY_SHOWN: eD,
                  OVERLAY_RENDER_DEBUG_MODE: eR,
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eP,
              },
    ),
    eU = ej;
