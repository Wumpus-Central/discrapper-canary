n.d(t, { Z: () => eO }), n(388685);
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
                S(e, t, n[t]);
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
    w = null,
    D = null,
    x = null,
    L = null,
    M = null,
    j = null,
    k = null,
    U = null,
    G = {},
    B = {},
    Z = (0, y.r4)();
function F() {
    Z = (0, y.r4)();
}
function V(e, t) {
    if (null != w) {
        null != t && (B[e] = t);
        try {
            if ((w.trackGame(e), R.has(e))) return;
            R.add(e),
                (0, _.PY)(e, "maybeTrackGame", { newOverlayMethod: null != t ? f.gl[t] : null }),
                o.Z.updateOverlayState(e, f.mM.WAITING_FOR_POPOUT_OPEN);
        } catch (t) {
            N.error("Error tracking game:", t), (0, _.PV)(e, t, { crashType: "renderer" });
        }
    }
}
function H(e) {
    if (!R.has(e)) return;
    let t = B[e],
        n = G[e];
    (0, _.PY)(e, "removeTrackedGame", {
        overlayMethod: null != t ? f.gl[t] : null,
        overlayState: n,
    }),
        R.delete(e),
        delete G[e],
        delete B[e],
        P.delete(e);
    try {
        if (null == w) return;
        w.untrackGame(e), N.verbose("Removing tracked game ".concat(e));
        let t = R.values().next().value;
        k === e && (k = null != t ? t : null);
    } catch (t) {
        N.error("Error removing tracked game:", t), (0, _.PV)(e, t, { crashType: "native" });
    }
}
function Y() {
    try {
        for (let e of R) null == w || w.untrackGame(e);
        R.clear(),
            (0, _.bs)(null, "clearTrackedGames"),
            (G = {}),
            (B = {}),
            P.clear(),
            N.verbose("Cleared all tracked games");
    } catch (e) {
        N.error("Error clearing tracked games:", e), (0, _.PV)(d.UNSET_PID, e, { crashType: "native" });
    }
}
async function W() {
    if (!b.Z.isOverlayEnabled) return void Y();
    await ee();
    let e = new Set(
        l.ZP.getRunningGames()
            .filter((e) => l.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...R].filter((t) => !e.has(t)))) H(t);
    for (let e of R) V(e);
}
function K(e) {
    let t = l.ZP.getGameOrTransformedSubgameForPID(e);
    o.Z.setAssociatedGame(null != k ? k : d.UNSET_PID, e, t);
}
function z() {
    var e;
    null != j &&
        M === j &&
        null != w &&
        ((j = null),
        (0, _.PY)(M, "renderer_window_refreshing_finished"),
        null == (e = w.readyToShow) || e.call(w, M),
        o.Z.updateOverlayState(M, f.mM.OVERLAY_RENDERING),
        N.verbose("Showing overlay v3 for pid ".concat(M)));
}
function q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = B[e] === f.gl.OutOfProcessLimitedInteraction;
        if (t !== U) {
            U = t;
            try {
                "function" == typeof (null == w ? void 0 : w.setLimitedInteraction)
                    ? (N.info("Setting limited interaction", t),
                      (0, _.bs)(e, "focus_and_interaction_set", {
                          isLimitedInteraction: t,
                          focusable: !t,
                      }),
                      w.setLimitedInteraction(t))
                    : N.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                N.error("Error setting limited interaction mode:", t), (0, _.PV)(e, t, { crashType: "native" });
            }
        }
    }
    o.Z.setFocusedPID(0 === e ? null : e, t, n);
}
function X() {
    q(null, null, !0);
}
function Q(e) {
    if (Z.allDone) {
        if (!P.has(e)) return void o.Z.updateOverlayState(e, f.mM.WAITING_FOR_SUCCESSFUL_SHOW);
        o.Z.successfullyShown(e);
    }
}
function J(e) {
    let { pid: t } = e;
    P.add(t), Q(t);
}
function $(e) {
    let { initialized: t } = e;
    if (((Z = C(T({}, Z), { windowHandleSentToNative: t })), t)) {
        let e = null != L ? L : d.UNSET_PID;
        Z.reactInitializationStarted
            ? o.Z.updateOverlayState(e, f.mM.WAITING_FOR_SUCCESSFUL_SHOW)
            : o.Z.updateOverlayState(e, f.mM.WAITING_FOR_REACT_INITIALIZATION),
            (0, _.bs)(e, "window_handle_initialized");
    }
}
async function ee() {
    b.Z.isModuleLoaded || b.Z.isModuleLoading || (await (0, _.Nk)()), (w = await (0, O.H)());
}
async function et(e) {
    e.overlayMethod === f.gl.OutOfProcess || e.overlayMethod === f.gl.OutOfProcessLimitedInteraction
        ? (await ee(), V(e.pid, e.overlayMethod))
        : H(e.pid),
        ey.emitChange();
}
function en() {
    F(), (U = null);
}
function er(e) {
    let { createWindowTriggeringPID: t } = e;
    (Z = C(T({}, Z), { popoutOpened: !0 })), K(t), (k = t), (L = t), (0, d.setPID)(t);
}
function ei(e) {
    let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
    o.Z.updateOverlayState(t, f.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE);
}
function ea(e) {
    let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: r } = e;
    o.Z.updateOverlayState(t, f.mM.OVERLAY_CRASHED_DISABLED),
        (Z = C(T({}, Z), { errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n })),
        (0, _.bs)(t, "renderer_window_mounting_failed", {
            error: n,
            popoutInitializationStages: Z,
        });
}
function eo() {
    X(), (k = null), (L = null), (0, d.setPID)(d.UNSET_PID), F();
}
function es(e) {
    let { refreshingPID: t } = e;
    return (
        N.verbose("Refreshing OOP host window for pid ".concat(t)),
        (j = t),
        (k = t),
        (L = t),
        (0, d.setPID)(t),
        K(t),
        z(),
        !0
    );
}
function el(e) {
    let { pid: t, windowHandle: n } = e;
    q(t, null != n ? (0, y.rd)(n) : null), t !== D && N.info("OverlayStore: Focused new PID", t);
}
function ec() {
    X();
}
function eu(e) {
    let { pid: t, windowHandle: n } = e;
    if (D !== t || x !== n) {
        var r;
        (0, _.bs)(null != (r = null != t ? t : D) ? r : d.UNSET_PID, "overlay_focused", {
            focusedPID: t,
            focusedWindowHandle: x,
            windowHandle: n,
        });
    }
    return (D = t), (x = n), !0;
}
function ed() {
    var e;
    (Z = C(T({}, Z), { showInactiveCalled: !0 })),
        null == w || null == (e = w.onNativePopoutShowInactiveSuccess) || e.call(w);
}
function ef() {
    (Z = C(T({}, Z), { allDone: !0 })),
        R.forEach((e) => {
            Q(e);
        });
}
function e_(e) {
    let { update: t } = e;
    Z = T({}, Z, t);
}
function ep(e) {
    let { pid: t, windowHandle: n } = e;
    if (((M = t), z(), null != n && null != w)) {
        var r;
        null == (r = w.setRenderingWindowHandle) || r.call(w, (0, y.rd)(n), t);
    }
}
function eh(e) {
    N.verbose("Updating OverlayMethod", e), et(e);
}
function em(e) {
    G[e.pid] = e.overlayState;
}
function eg() {
    (w = b.Z.getNativeModule()), W();
}
function eE() {
    w = null;
}
class eb extends (r = i.ZP.Store) {
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
    getTargetPID() {
        return null != L ? L : d.UNSET_PID;
    }
    getFocusedPID() {
        return D;
    }
    getFocusedWindowHandle() {
        return x;
    }
    isFocused(e) {
        return null != D && e !== d.UNSET_PID && (!!R.has(e) || e === d.DEV_PID) && D === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == D ? null : null != (e = l.ZP.getGameOrTransformedSubgameForPID(D)) ? e : null;
    }
    getPopoutInitializationStages() {
        return Z;
    }
    isWindowHandleInitialized() {
        return Z.windowHandleSentToNative;
    }
    isReady(e) {
        return !!R.has(e) && G[e] === f.mM.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        var t;
        return null != (t = G[e]) ? t : null;
    }
    getIsOverlayPreShown(e) {
        let t = G[e];
        return null != t && y.FX.has(t);
    }
    getOverlayMethod(e) {
        var t;
        return null != (t = B[e]) ? t : null;
    }
}
S(eb, "displayName", "Overlay-V3-Store");
let ey = new eb(
        a.Z,
        __OVERLAY__ || !v.iP
            ? {}
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: eh,
                  OVERLAY_UPDATE_OVERLAY_STATE: em,
                  OVERLAY_FOCUSED: eu,
                  OVERLAY_OOP_UI_INITIALIZED: ef,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ed,
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: e_,
                  OVERLAY_UI_FOCUSED_PID: ep,
                  OVERLAY_V3_PRE_CREATE_POPOUT: en,
                  OVERLAY_V3_POST_CREATE_POPOUT: er,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: ei,
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: ea,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: eg,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: eE,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: es,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: eo,
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: el,
                  OVERLAY_V3_NATIVE_FOCUS_LOST: ec,
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: J,
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: $,
              },
    ),
    eO = ey;
