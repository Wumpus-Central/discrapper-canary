n.d(t, { Z: () => eI }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(13245),
    s = n(710845),
    l = n(594190),
    c = n(314897),
    u = n(355863),
    d = n(145597),
    f = n(837268),
    _ = n(932404),
    p = n(381367),
    h = n(670785),
    m = n(76623),
    g = n(322155),
    E = n(338949),
    b = n(509140),
    y = n(575140),
    O = n(886189),
    v = n(987650),
    I = n(757744);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = new s.Z("OverlayV3Store"),
    R = new Set(),
    P = new Set(),
    D = null,
    w = null,
    L = null,
    x = null,
    M = null,
    k = null,
    j = null,
    U = {},
    G = {},
    B = !1,
    Z = (0, y.r4)();
function F() {
    (Z = (0, y.r4)()), ev.emitChange();
}
function V(e, t) {
    try {
        if (null == D || (null != t && (G[e] = t), R.has(e))) return;
        D.trackGame(e),
            R.add(e),
            (0, _.PY)(e, "maybeTrackGame", { newOverlayMethod: null != t ? f.gl[t] : null }),
            o.Z.updateOverlayState(e, f.mM.WAITING_FOR_POPOUT_OPEN);
    } catch (t) {
        N.error("Error tracking game:", t), (0, _.PV)(e, t, { crashType: "renderer" });
    }
}
function H(e) {
    let t = G[e],
        n = U[e];
    (0, _.PY)(e, "removeTrackedGame", {
        overlayMethod: null != t ? f.gl[t] : null,
        overlayState: n,
    }),
        R.delete(e),
        delete U[e],
        delete G[e],
        P.delete(e);
    try {
        if (null == D) return;
        D.untrackGame(e), N.verbose("Removing tracked game ".concat(e));
        let t = R.values().next().value;
        k === e && (k = null != t ? t : null);
    } catch (t) {
        N.error("Error removing tracked game:", t), (0, _.PV)(e, t, { crashType: "native" });
    }
}
function Y() {
    try {
        for (let e of R) null == D || D.untrackGame(e);
        R.clear(),
            (0, _.bs)(null, "clearTrackedGames"),
            (U = {}),
            (G = {}),
            P.clear(),
            N.verbose("Cleared all tracked games");
    } catch (e) {
        N.error("Error clearing tracked games:", e), (0, _.PV)(d.UNSET_PID, e, { crashType: "native" });
    }
}
function W() {
    if (!b.Z.isOverlayEnabled) return void Y();
    let e = new Set(
        l.ZP.getRunningGames()
            .filter((e) => l.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...R].filter((t) => !e.has(t)))) H(t);
    for (let e of R) V(e);
    ev.emitChange();
}
function K(e) {
    let t = l.ZP.getGameOrTransformedSubgameForPID(e);
    o.Z.setAssociatedGame(null != k ? k : d.UNSET_PID, e, t);
}
function z() {
    var e;
    null != M &&
        x === M &&
        null != D &&
        ((M = null),
        (0, _.PY)(x, "renderer_window_refreshing_finished"),
        null == (e = D.readyToShow) || e.call(D, x),
        o.Z.updateOverlayState(x, f.mM.OVERLAY_RENDERING),
        N.verbose("Showing overlay v3 for pid ".concat(x)));
}
function q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = G[e] === f.gl.OutOfProcessLimitedInteraction;
        if (t !== j) {
            j = t;
            try {
                "function" == typeof (null == D ? void 0 : D.setLimitedInteraction)
                    ? (N.info("Setting limited interaction", t),
                      (0, _.bs)(e, "focus_and_interaction_set", {
                          isLimitedInteraction: t,
                          focusable: !t,
                      }),
                      D.setLimitedInteraction(t))
                    : N.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                N.error("Error setting limited interaction mode:", t), (0, _.PV)(e, t, { crashType: "native" });
            }
        }
    }
    ev.emitChange(), o.Z.setFocusedPID(0 === e ? null : e, t, n);
}
function X() {
    q(null, null, !0), ev.emitChange();
}
function Q(e) {
    P.has(e) && Z.allDone && o.Z.successfullyShown(e);
}
function J(e) {
    P.add(e), Q(e);
}
function $(e) {
    (Z = C(S({}, Z), { windowHandleSentToNative: e })),
        e &&
            (o.Z.updateOverlayState((0, d.getPID)(), f.mM.WAITING_FOR_REACT_INITIALIZATION),
            (0, _.bs)((0, d.getPID)(), "window_handle_initialized")),
        ev.emitChange();
}
async function ee() {
    await (0, _.Nk)(), await (0, O.H)();
}
function et(e) {
    return (
        null == e ||
            B ||
            ((B = !0),
            e.setFocusCallback(ec),
            e.setFocusLostCallback(eu),
            e.setSuccessfullyShownCallback(J),
            e.setOnWindowHandleInitializedCallback($),
            (0, _.PY)((0, d.getPID)(), "native_module_callbacks_setup"),
            N.verbose("Native module callbacks setup")),
        Promise.resolve()
    );
}
async function en(e) {
    e.overlayMethod === f.gl.OutOfProcess || e.overlayMethod === f.gl.OutOfProcessLimitedInteraction
        ? (null == D && (await ee()), V(e.pid, e.overlayMethod))
        : H(e.pid),
        ev.emitChange();
}
function er() {
    F(), (j = null);
}
function ei(e) {
    let { createWindowTriggeringPID: t } = e;
    (Z = C(S({}, Z), { popoutOpened: !0 })), K(t), (k = t), (0, d.setPID)(t);
}
function ea(e) {
    let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
    o.Z.updateOverlayState(t, f.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE),
        (null == D ? void 0 : D.setOnWindowHandleInitializedCallback) == null && $(!0);
}
function eo(e) {
    let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: r } = e;
    o.Z.updateOverlayState(t, f.mM.OVERLAY_CRASHED_DISABLED),
        (Z = C(S({}, Z), { errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n })),
        (0, _.bs)(t, "renderer_window_mounting_failed", {
            error: n,
            popoutInitializationStages: Z,
        });
}
function es() {
    X(), (k = null), (0, d.setPID)(null != k ? k : d.UNSET_PID), F();
}
function el(e) {
    let { refreshingPID: t } = e;
    return (
        N.verbose("Refreshing OOP host window for pid ".concat(t)),
        (M = t),
        (k = t),
        (0, d.setPID)(null != k ? k : d.UNSET_PID),
        K(t),
        z(),
        !0
    );
}
function ec(e, t) {
    q(e, null != t ? (0, y.rd)(t) : null), e !== w && N.info("OverlayStore: Focused new PID", e);
}
function eu(e) {
    return X(), !0;
}
function ed(e) {
    let { pid: t, windowHandle: n } = e;
    if (w !== t || L !== n) {
        var r;
        (0, _.bs)(null != (r = null != t ? t : w) ? r : d.UNSET_PID, "overlay_focused", {
            focusedPID: t,
            focusedWindowHandle: L,
            windowHandle: n,
        });
    }
    return (w = t), (L = n), !0;
}
function ef() {
    var e;
    (Z = C(S({}, Z), { showInactiveCalled: !0 })),
        null == D || null == (e = D.onNativePopoutShowInactiveSuccess) || e.call(D);
}
function e_() {
    (Z = C(S({}, Z), { allDone: !0 })),
        P.forEach((e) => {
            Q(e);
        });
}
function ep(e) {
    let { update: t } = e;
    Z = S({}, Z, t);
}
function eh(e) {
    let { pid: t, windowHandle: n } = e;
    if (((x = t), z(), null != n && null != D)) {
        var r;
        null == (r = D.setRenderingWindowHandle) || r.call(D, (0, y.rd)(n), t);
    }
}
function em(e) {
    N.verbose("Updating OverlayMethod", e), en(e);
}
function eg(e) {
    U[e.pid] = e.overlayState;
}
async function eE() {
    return null != (D = b.Z.getNativeModule()) && (await et(D)), W(), !0;
}
function eb() {
    return eE(), !0;
}
function ey() {
    return (D = null), !0;
}
class eO extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.default, u.Z, p.Z, h.Z, m.Z, g.Z, E.Z, b.Z, l.ZP);
    }
    isOverlayV3EnabledForPID(e) {
        return R.has(e);
    }
    getWidgetByType(e) {
        let t = u.Z.getLayout(I.$S);
        if (null != t) {
            let r = t.widgets.find((t) => {
                let n = u.Z.getWidget(t);
                return null != n && n.type === e ? t : null;
            });
            if (null != r) {
                var n;
                return null != (n = u.Z.getWidget(r)) ? n : null;
            }
        }
        return null;
    }
    isPinned(e) {
        let t = this.getWidgetByType(e);
        return null != t && t.pinned;
    }
    getFocusedPID() {
        return w;
    }
    getFocusedWindowHandle() {
        return L;
    }
    isFocused(e) {
        return null != w && e !== d.UNSET_PID && (!!R.has(e) || e === d.DEV_PID) && w === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == w ? null : null != (e = l.ZP.getGameOrTransformedSubgameForPID(w)) ? e : null;
    }
    getPopoutInitializationStages() {
        return Z;
    }
    isWindowHandleInitialized() {
        return Z.windowHandleSentToNative;
    }
    isReady(e) {
        return !!R.has(e) && U[e] === f.mM.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        var t;
        return null != (t = U[e]) ? t : null;
    }
    getIsOverlayPreShown(e) {
        let t = U[e];
        return null != t && y.FX.has(t);
    }
    getOverlayMethod(e) {
        var t;
        return null != (t = G[e]) ? t : null;
    }
}
T(eO, "displayName", "Overlay-V3-Store");
let ev = new eO(
        a.Z,
        __OVERLAY__ || !v.iP
            ? {}
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: em,
                  OVERLAY_UPDATE_OVERLAY_STATE: eg,
                  OVERLAY_FOCUSED: ed,
                  OVERLAY_OOP_UI_INITIALIZED: e_,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ef,
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: ep,
                  OVERLAY_UI_FOCUSED_PID: eh,
                  OVERLAY_V3_PRE_CREATE_POPOUT: er,
                  OVERLAY_V3_POST_CREATE_POPOUT: ei,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: ea,
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: eo,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: eb,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: ey,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: el,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: es,
              },
    ),
    eI = ev;
