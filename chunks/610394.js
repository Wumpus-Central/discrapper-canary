n.d(t, { Z: () => ey }), n(388685);
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
    w = null,
    D = null,
    x = null,
    L = null,
    M = null,
    j = null,
    k = null,
    U = {},
    G = {},
    B = (0, y.r4)();
function Z() {
    B = (0, y.r4)();
}
function F(e, t) {
    if (null != w && (null != t && (G[e] = t), !R.has(e)))
        try {
            w.trackGame(e),
                R.add(e),
                (0, _.PY)(e, "maybeTrackGame", { newOverlayMethod: null != t ? f.gl[t] : null }),
                o.Z.updateOverlayState(e, f.mM.WAITING_FOR_POPOUT_OPEN);
        } catch (t) {
            N.error("Error tracking game:", t), (0, _.PV)(e, t, { crashType: "renderer" });
        }
}
function V(e) {
    if (!R.has(e)) return;
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
        if (null == w) return;
        w.untrackGame(e), N.verbose("Removing tracked game ".concat(e));
        let t = R.values().next().value;
        j === e && (j = null != t ? t : null);
    } catch (t) {
        N.error("Error removing tracked game:", t), (0, _.PV)(e, t, { crashType: "native" });
    }
}
function H() {
    try {
        for (let e of R) null == w || w.untrackGame(e);
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
function Y() {
    if (!b.Z.isOverlayEnabled) return void H();
    let e = new Set(
        l.ZP.getRunningGames()
            .filter((e) => l.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...R].filter((t) => !e.has(t)))) V(t);
    for (let e of R) F(e);
}
function W(e) {
    let t = l.ZP.getGameOrTransformedSubgameForPID(e);
    o.Z.setAssociatedGame(null != j ? j : d.UNSET_PID, e, t);
}
function K() {
    var e;
    null != M &&
        L === M &&
        null != w &&
        ((M = null),
        (0, _.PY)(L, "renderer_window_refreshing_finished"),
        null == (e = w.readyToShow) || e.call(w, L),
        o.Z.updateOverlayState(L, f.mM.OVERLAY_RENDERING),
        N.verbose("Showing overlay v3 for pid ".concat(L)));
}
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = G[e] === f.gl.OutOfProcessLimitedInteraction;
        if (t !== k) {
            k = t;
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
function q() {
    z(null, null, !0);
}
function X(e) {
    P.has(e) && B.allDone && o.Z.successfullyShown(e);
}
function Q(e) {
    let { pid: t } = e;
    P.add(t), X(t);
}
function J(e) {
    let { initialized: t } = e;
    (B = C(S({}, B), { windowHandleSentToNative: t })),
        t &&
            (o.Z.updateOverlayState((0, d.getPID)(), f.mM.WAITING_FOR_REACT_INITIALIZATION),
            (0, _.bs)((0, d.getPID)(), "window_handle_initialized"));
}
async function $() {
    await (0, _.Nk)(), await (0, O.H)();
}
async function ee(e) {
    e.overlayMethod === f.gl.OutOfProcess || e.overlayMethod === f.gl.OutOfProcessLimitedInteraction
        ? (null == w && (await $()), F(e.pid, e.overlayMethod))
        : V(e.pid),
        eb.emitChange();
}
function et() {
    Z(), (k = null);
}
function en(e) {
    let { createWindowTriggeringPID: t } = e;
    (B = C(S({}, B), { popoutOpened: !0 })), W(t), (j = t), (0, d.setPID)(t);
}
function er(e) {
    let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
    o.Z.updateOverlayState(t, f.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE);
}
function ei(e) {
    let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: r } = e;
    o.Z.updateOverlayState(t, f.mM.OVERLAY_CRASHED_DISABLED),
        (B = C(S({}, B), { errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n })),
        (0, _.bs)(t, "renderer_window_mounting_failed", {
            error: n,
            popoutInitializationStages: B,
        });
}
function ea() {
    q(), (j = null), (0, d.setPID)(null != j ? j : d.UNSET_PID), Z();
}
function eo(e) {
    let { refreshingPID: t } = e;
    return (
        N.verbose("Refreshing OOP host window for pid ".concat(t)),
        (M = t),
        (j = t),
        (0, d.setPID)(null != j ? j : d.UNSET_PID),
        W(t),
        K(),
        !0
    );
}
function es(e) {
    let { pid: t, windowHandle: n } = e;
    z(t, null != n ? (0, y.rd)(n) : null), t !== D && N.info("OverlayStore: Focused new PID", t);
}
function el() {
    q();
}
function ec(e) {
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
function eu() {
    var e;
    (B = C(S({}, B), { showInactiveCalled: !0 })),
        null == w || null == (e = w.onNativePopoutShowInactiveSuccess) || e.call(w);
}
function ed() {
    (B = C(S({}, B), { allDone: !0 })),
        P.forEach((e) => {
            X(e);
        });
}
function ef(e) {
    let { update: t } = e;
    B = S({}, B, t);
}
function e_(e) {
    let { pid: t, windowHandle: n } = e;
    if (((L = t), K(), null != n && null != w)) {
        var r;
        null == (r = w.setRenderingWindowHandle) || r.call(w, (0, y.rd)(n), t);
    }
}
function ep(e) {
    N.verbose("Updating OverlayMethod", e), ee(e);
}
function eh(e) {
    U[e.pid] = e.overlayState;
}
function em() {
    (w = b.Z.getNativeModule()), Y();
}
function eg() {
    w = null;
}
class eE extends (r = i.ZP.Store) {
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
        return B;
    }
    isWindowHandleInitialized() {
        return B.windowHandleSentToNative;
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
T(eE, "displayName", "Overlay-V3-Store");
let eb = new eE(
        a.Z,
        __OVERLAY__ || !v.iP
            ? {}
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: ep,
                  OVERLAY_UPDATE_OVERLAY_STATE: eh,
                  OVERLAY_FOCUSED: ec,
                  OVERLAY_OOP_UI_INITIALIZED: ed,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: eu,
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: ef,
                  OVERLAY_UI_FOCUSED_PID: e_,
                  OVERLAY_V3_PRE_CREATE_POPOUT: et,
                  OVERLAY_V3_POST_CREATE_POPOUT: en,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: er,
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: ei,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: em,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: eg,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: eo,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: ea,
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: es,
                  OVERLAY_V3_NATIVE_FOCUS_LOST: el,
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: Q,
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: J,
              },
    ),
    ey = eb;
