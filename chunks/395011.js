"use strict";
n.d(t, { A: () => eI });
var r = n(311907),
    i = n(73153),
    a = n(684013),
    s = n(626584),
    o = n(15285),
    l = n(961350),
    u = n(555528),
    c = n(9302),
    d = n(41984),
    _ = n(870507),
    f = n(682763),
    p = n(912865),
    h = n(275115),
    m = n(321090),
    g = n(222506),
    E = n(127242),
    A = n(680243),
    I = n(96175),
    T = n(905555),
    y = n(672396),
    S = n(644434);
let v = new s.A("OverlayV3Store"),
    C = new Set(),
    b = new Set(),
    N = null,
    R = null,
    O = null,
    D = null,
    L = null,
    w = null,
    x = null,
    P = null,
    M = {},
    k = {},
    U = {};
function G(e, t) {
    null == U[e] && (U[e] = new Set()), U[e].add(t);
}
function V(e) {
    null != U[e] && (U[e] = new Set());
}
let F = (0, I.I2)();
function B() {
    F = (0, I.I2)();
}
function j(e, t) {
    if (null != N) {
        null != t && (k[e] = t);
        try {
            if ((N.trackGame(e), C.has(e))) return;
            C.add(e),
                (0, f.dK)(e, "maybeTrackGame", { newOverlayMethod: null != t ? d.Ue[t] : null }),
                a.A.updateOverlayState(e, d.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame");
        } catch (t) {
            v.error("Error tracking game:", t), (0, f.mD)(e, t, { crashType: "renderer" });
        }
    }
}
function H(e) {
    if (!C.has(e)) return;
    let t = k[e],
        n = M[e];
    (0, f.dK)(e, "removeTrackedGame", { overlayMethod: null != t ? d.Ue[t] : null, overlayState: n }),
        C.delete(e),
        delete M[e],
        delete k[e],
        b.delete(e);
    try {
        if (null == N) return;
        N.untrackGame(e), v.verbose(`Removing tracked game ${e}`);
        let t = C.values().next().value;
        x === e && (x = t ?? null);
    } catch (t) {
        v.error("Error removing tracked game:", t), (0, f.mD)(e, t, { crashType: "native" });
    }
}
function Y() {
    try {
        for (let e of C) N?.untrackGame(e);
        C.clear(),
            (0, f._r)(null, "clearTrackedGames"),
            (M = {}),
            (k = {}),
            b.clear(),
            v.verbose("Cleared all tracked games");
    } catch (e) {
        v.error("Error clearing tracked games:", e), (0, f.mD)(c.UNSET_PID, e, { crashType: "native" });
    }
}
async function W() {
    if (!A.A.isOverlayEnabled) return void Y();
    await J();
    let e = new Set(
        o.Ay.getRunningGames()
            .filter((e) => o.Ay.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...C].filter((t) => !e.has(t)))) H(t);
    for (let e of C) j(e);
}
function K(e) {
    let t = o.Ay.getGameOrTransformedSubgameForPID(e);
    a.A.setAssociatedGame(x ?? c.UNSET_PID, e, t);
}
function z() {
    null == w ||
        L !== w ||
        (null != N &&
            ((w = null),
            (0, f.dK)(L, "renderer_window_refreshing_finished"),
            N.readyToShow?.(L),
            a.A.updateOverlayState(L, d.AR.OVERLAY_RENDERING, "checkPopoutRefresh"),
            v.verbose(`Showing overlay v3 for pid ${L}`)));
}
function $(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = k[e] === d.Ue.OutOfProcessLimitedInteraction;
        if (t !== P) {
            P = t;
            try {
                "function" == typeof N?.setLimitedInteraction
                    ? (v.info("Setting limited interaction", t),
                      (0, f._r)(e, "focus_and_interaction_set", { isLimitedInteraction: t, focusable: !t }),
                      N.setLimitedInteraction(t))
                    : v.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                v.error("Error setting limited interaction mode:", t), (0, f.mD)(e, t, { crashType: "native" });
            }
        }
    }
    a.A.setFocusedPID(0 === e ? null : e, t, n);
}
function q() {
    $(null, null, !0);
}
function Z(e) {
    if (F.allDone) {
        if (!b.has(e))
            return void a.A.updateOverlayState(e, d.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        a.A.successfullyShown(e);
    }
}
function Q(e) {
    let { pid: t } = e;
    b.add(t), Z(t);
}
function X(e) {
    let { initialized: t } = e;
    if (((F = { ...F, windowHandleSentToNative: t }), t)) {
        let e = D ?? c.UNSET_PID;
        F.reactInitializationStarted
            ? a.A.updateOverlayState(e, d.AR.WAITING_FOR_SUCCESSFUL_SHOW, "handleOverlayV3WindowHandleInitialized")
            : a.A.updateOverlayState(
                  e,
                  d.AR.WAITING_FOR_REACT_INITIALIZATION,
                  "handleOverlayV3WindowHandleInitialized",
              ),
            (0, f._r)(e, "window_handle_initialized");
    }
}
async function J() {
    A.A.isModuleLoaded || A.A.isModuleLoading || (await (0, f.P_)()), (N = await (0, T.N)());
}
async function ee(e) {
    e.overlayMethod === d.Ue.OutOfProcess || e.overlayMethod === d.Ue.OutOfProcessLimitedInteraction
        ? (await J(), j(e.pid, e.overlayMethod))
        : H(e.pid),
        eA.emitChange();
}
function et() {
    B(), (P = null);
}
function en(e) {
    let { createWindowTriggeringPID: t } = e;
    (F = { ...F, popoutOpened: !0 }), K(t), (x = t), (D = t), (0, c.setPID)(t);
}
function er(e) {
    let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
    a.A.updateOverlayState(t, d.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE, "handleOverlayCreateWindowHandleSuccess");
}
function ei(e) {
    let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: r } = e;
    a.A.updateOverlayState(t, d.AR.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
        (F = { ...F, errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n }),
        (0, f._r)(t, "renderer_window_mounting_failed", { error: n, popoutInitializationStages: F });
}
function ea() {
    q(), null != x && V(x), (x = null), (D = null), (0, c.setPID)(c.UNSET_PID), B();
}
function es(e) {
    let { refreshingPID: t } = e;
    return (
        v.verbose(`Refreshing OOP host window for pid ${t}`), (w = t), (x = t), (D = t), (0, c.setPID)(t), K(t), z(), !0
    );
}
function eo(e) {
    let { pid: t, windowHandle: n, windowClass: r } = e;
    null != r && _.C.has(r)
        ? q()
        : ($(t, null != n ? (0, I.Oy)(n) : null), t !== R && v.info("OverlayStore: Focused new PID", t));
}
function el() {
    q();
}
function eu(e) {
    let { pid: t, windowHandle: n } = e;
    return (
        null != n && null != t && G(t, (0, I.Oy)(n)),
        (R !== t || O !== n) &&
            (0, f._r)(t ?? R ?? c.UNSET_PID, "overlay_focused", {
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
    (F = { ...F, showInactiveCalled: !0 }), N?.onNativePopoutShowInactiveSuccess?.();
}
function ed() {
    (F = { ...F, allDone: !0 }),
        C.forEach((e) => {
            Z(e);
        });
}
function e_(e) {
    let { update: t } = e;
    F = { ...F, ...t };
}
function ef(e) {
    let { pid: t, windowHandle: n } = e;
    (L = t),
        z(),
        null != n && null != t && G(t, (0, I.Oy)(n)),
        null != N && (null != n || N.version?.() > 0) && N.setRenderingWindowHandle?.((0, I.Oy)(n ?? "0"), t);
}
function ep(e) {
    v.verbose("Updating OverlayMethod", e), ee(e);
}
function eh(e) {
    M[e.pid] = e.overlayState;
}
function em() {
    (N = A.A.getNativeModule()), W();
}
function eg() {
    N = null;
}
class eE extends r.Ay.Store {
    static displayName = "Overlay-V3-Store";
    initialize() {
        this.waitFor(l.default, u.A, p.A, h.A, m.A, g.A, E.A, A.A, o.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return C.has(e);
    }
    getWidgetByType(e) {
        let t = u.A.getLayout(S.G);
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
        return y.ed && (D === c.UNSET_PID || null == D) ? c.DEV_PID : (D ?? c.UNSET_PID);
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
        return null != R && e !== c.UNSET_PID && (!!C.has(e) || e === c.DEV_PID) && R === e;
    }
    getFocusedRunningGame() {
        return null == R ? null : (o.Ay.getGameOrTransformedSubgameForPID(R) ?? null);
    }
    getPopoutInitializationStages() {
        return F;
    }
    isWindowHandleInitialized() {
        return F.windowHandleSentToNative;
    }
    isReady(e) {
        return !!C.has(e) && M[e] === d.AR.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        return M[e] ?? null;
    }
    getIsOverlayPreShown(e) {
        let t = M[e];
        return null != t && I.Ms.has(t);
    }
    getOverlayMethod(e) {
        return k[e] ?? null;
    }
}
let eA = new eE(
        i.h,
        __OVERLAY__ || !y.OX
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
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: eg,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: es,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: ea,
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: eo,
                  OVERLAY_V3_NATIVE_FOCUS_LOST: el,
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: Q,
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: X,
              },
    ),
    eI = eA;
