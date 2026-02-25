"use strict";
n.d(t, { A: () => eI });
var r = n(311907),
    i = n(73153),
    s = n(684013),
    a = n(626584),
    o = n(15285),
    l = n(961350),
    u = n(555528),
    c = n(9302),
    d = n(206885),
    _ = n(41984),
    f = n(870507),
    p = n(682763),
    h = n(912865),
    m = n(275115),
    E = n(321090),
    g = n(222506),
    A = n(127242),
    I = n(680243),
    T = n(96175),
    S = n(905555),
    y = n(644434);
let v = new a.A("OverlayV3Store"),
    N = new Set(),
    C = new Set(),
    b = null,
    R = null,
    O = null,
    D = null,
    L = null,
    w = null,
    x = null,
    M = null,
    P = {},
    k = {},
    U = {};
function G(e, t) {
    null == U[e] && (U[e] = new Set()), U[e].add(t);
}
function F(e) {
    null != U[e] && (U[e] = new Set());
}
let V = (0, T.I2)();
function B() {
    V = (0, T.I2)();
}
function H(e, t) {
    if (null != b) {
        null != t && (k[e] = t);
        try {
            if ((b.trackGame(e), N.has(e))) return;
            N.add(e),
                (0, p.dK)(e, "maybeTrackGame", { newOverlayMethod: null != t ? _.Ue[t] : null }),
                s.A.updateOverlayState(e, _.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame");
        } catch (t) {
            v.error("Error tracking game:", t), (0, p.mD)(e, t, { crashType: "renderer" });
        }
    }
}
function j(e) {
    if (!N.has(e)) return;
    let t = k[e],
        n = P[e];
    (0, p.dK)(e, "removeTrackedGame", { overlayMethod: null != t ? _.Ue[t] : null, overlayState: n }),
        N.delete(e),
        delete P[e],
        delete k[e],
        C.delete(e);
    try {
        if (null == b) return;
        b.untrackGame(e), v.verbose(`Removing tracked game ${e}`);
        let t = N.values().next().value;
        x === e && (x = t ?? null);
    } catch (t) {
        v.error("Error removing tracked game:", t), (0, p.mD)(e, t, { crashType: "native" });
    }
}
function Y() {
    try {
        for (let e of N) b?.untrackGame(e);
        N.clear(),
            (0, p._r)(null, "clearTrackedGames"),
            (P = {}),
            (k = {}),
            C.clear(),
            v.verbose("Cleared all tracked games");
    } catch (e) {
        v.error("Error clearing tracked games:", e), (0, p.mD)(c.UNSET_PID, e, { crashType: "native" });
    }
}
async function W() {
    if (!I.A.isOverlayEnabled) return void Y();
    await J();
    let e = new Set(
        o.Ay.getRunningGames()
            .filter((e) => o.Ay.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...N].filter((t) => !e.has(t)))) j(t);
    for (let e of N) H(e);
}
function K(e) {
    let t = o.Ay.getGameOrTransformedSubgameForPID(e);
    s.A.setAssociatedGame(x ?? c.UNSET_PID, e, t);
}
function z() {
    null == w ||
        L !== w ||
        (null != b &&
            ((w = null),
            (0, p.dK)(L, "renderer_window_refreshing_finished"),
            b.readyToShow?.(L),
            s.A.updateOverlayState(L, _.AR.OVERLAY_RENDERING, "checkPopoutRefresh"),
            v.verbose(`Showing overlay v3 for pid ${L}`)));
}
function $(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = k[e] === _.Ue.OutOfProcessLimitedInteraction;
        if (t !== M) {
            M = t;
            try {
                "function" == typeof b?.setLimitedInteraction
                    ? (v.info("Setting limited interaction", t),
                      (0, p._r)(e, "focus_and_interaction_set", { isLimitedInteraction: t, focusable: !t }),
                      b.setLimitedInteraction(t))
                    : v.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                v.error("Error setting limited interaction mode:", t), (0, p.mD)(e, t, { crashType: "native" });
            }
        }
    }
    s.A.setFocusedPID(0 === e ? null : e, t, n);
}
function q() {
    $(null, null, !0);
}
function Z(e) {
    if (V.allDone) {
        if (!C.has(e))
            return void s.A.updateOverlayState(e, _.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        s.A.successfullyShown(e);
    }
}
function X(e) {
    let { pid: t } = e;
    C.add(t), Z(t);
}
function Q(e) {
    let { initialized: t } = e;
    if (((V = { ...V, windowHandleSentToNative: t }), t)) {
        let e = D ?? c.UNSET_PID;
        V.reactInitializationStarted
            ? s.A.updateOverlayState(e, _.AR.WAITING_FOR_SUCCESSFUL_SHOW, "handleOverlayV3WindowHandleInitialized")
            : s.A.updateOverlayState(
                  e,
                  _.AR.WAITING_FOR_REACT_INITIALIZATION,
                  "handleOverlayV3WindowHandleInitialized",
              ),
            (0, p._r)(e, "window_handle_initialized");
    }
}
async function J() {
    I.A.isModuleLoaded || I.A.isModuleLoading || (await (0, p.P_)()), (b = await (0, S.N)());
}
async function ee(e) {
    e.overlayMethod === _.Ue.OutOfProcess || e.overlayMethod === _.Ue.OutOfProcessLimitedInteraction
        ? (await J(), H(e.pid, e.overlayMethod))
        : j(e.pid),
        eA.emitChange();
}
function et() {
    B(), (M = null);
}
function en(e) {
    let { createWindowTriggeringPID: t } = e;
    (V = { ...V, popoutOpened: !0 }), K(t), (x = t), (D = t), (0, c.setPID)(t);
}
function er(e) {
    let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
    s.A.updateOverlayState(t, _.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE, "handleOverlayCreateWindowHandleSuccess");
}
function ei(e) {
    let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: r } = e;
    s.A.updateOverlayState(t, _.AR.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
        (V = { ...V, errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n }),
        (0, p._r)(t, "renderer_window_mounting_failed", { error: n, popoutInitializationStages: V });
}
function es() {
    q(), null != x && F(x), (x = null), (D = null), (0, c.setPID)(c.UNSET_PID), B();
}
function ea(e) {
    let { refreshingPID: t } = e;
    return (
        v.verbose(`Refreshing OOP host window for pid ${t}`), (w = t), (x = t), (D = t), (0, c.setPID)(t), K(t), z(), !0
    );
}
function eo(e) {
    let { pid: t, windowHandle: n, windowClass: r } = e;
    null != r && f.C.has(r)
        ? q()
        : ($(t, null != n ? (0, T.Oy)(n) : null), t !== R && v.info("OverlayStore: Focused new PID", t));
}
function el() {
    q();
}
function eu(e) {
    let { pid: t, windowHandle: n } = e;
    return (
        null != n && null != t && G(t, (0, T.Oy)(n)),
        (R !== t || O !== n) &&
            (0, p._r)(t ?? R ?? c.UNSET_PID, "overlay_focused", {
                focusedPID: t,
                focusedWindowHandle: O,
                windowHandle: n,
            }),
        (R = t),
        (O = n),
        !0
    );
}
function ec() {
    (V = { ...V, showInactiveCalled: !0 }), b?.onNativePopoutShowInactiveSuccess?.();
}
function ed() {
    (V = { ...V, allDone: !0 }),
        N.forEach((e) => {
            Z(e);
        });
}
function e_(e) {
    let { update: t } = e;
    V = { ...V, ...t };
}
function ef(e) {
    let { pid: t, windowHandle: n } = e;
    (L = t),
        z(),
        null != n && null != t && G(t, (0, T.Oy)(n)),
        null != b && (null != n || b.version?.() > 0) && b.setRenderingWindowHandle?.((0, T.Oy)(n ?? "0"), t);
}
function ep(e) {
    v.verbose("Updating OverlayMethod", e), ee(e);
}
function eh(e) {
    P[e.pid] = e.overlayState;
}
function em() {
    (b = I.A.getNativeModule()), W();
}
function eE() {
    b = null;
}
class eg extends r.Ay.Store {
    static displayName = "Overlay-V3-Store";
    initialize() {
        this.waitFor(l.default, u.A, h.A, m.A, E.A, g.A, A.A, I.A, o.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return N.has(e);
    }
    getWidgetByType(e) {
        let t = u.A.getLayout(y.G);
        if (null != t) {
            let n = t.widgets.find((t) => {
                let n = u.A.getWidget(t);
                return null != n && n.type === e ? t : null;
            });
            if (null != n) return u.A.getWidget(n) ?? null;
        }
        return null;
    }
    isPinned(e) {
        let t = this.getWidgetByType(e);
        return null != t && t.pinned;
    }
    getTargetPID() {
        return d.e && (D === c.UNSET_PID || null == D) ? c.DEV_PID : (D ?? c.UNSET_PID);
    }
    getFocusedPID() {
        return R;
    }
    getFocusedWindowHandle() {
        return O;
    }
    getKnownWindowHandlesForPID(e) {
        return null == U[e] ? null : U[e];
    }
    isFocused(e) {
        return null != R && e !== c.UNSET_PID && (!!N.has(e) || e === c.DEV_PID) && R === e;
    }
    getFocusedRunningGame() {
        return null == R ? null : (o.Ay.getGameOrTransformedSubgameForPID(R) ?? null);
    }
    getPopoutInitializationStages() {
        return V;
    }
    isWindowHandleInitialized() {
        return V.windowHandleSentToNative;
    }
    isReady(e) {
        return !!N.has(e) && P[e] === _.AR.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        return P[e] ?? null;
    }
    getIsOverlayPreShown(e) {
        let t = P[e];
        return null != t && T.Ms.has(t);
    }
    getOverlayMethod(e) {
        return k[e] ?? null;
    }
}
let eA = new eg(
        i.h,
        __OVERLAY__ || !d.O
            ? { OVERLAY_FOCUSED: eu }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: ep,
                  OVERLAY_UPDATE_OVERLAY_STATE: eh,
                  OVERLAY_FOCUSED: eu,
                  OVERLAY_OOP_UI_INITIALIZED: ed,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ec,
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: e_,
                  OVERLAY_UI_FOCUSED_PID: ef,
                  OVERLAY_V3_PRE_CREATE_POPOUT: et,
                  OVERLAY_V3_POST_CREATE_POPOUT: en,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: er,
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: ei,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: em,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: eE,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: ea,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: es,
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: eo,
                  OVERLAY_V3_NATIVE_FOCUS_LOST: el,
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: X,
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: Q,
              },
    ),
    eI = eA;
