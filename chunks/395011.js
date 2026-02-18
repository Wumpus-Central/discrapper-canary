"use strict";
n.d(t, { A: () => eT });
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
    y = n(672396),
    v = n(644434);
let N = new a.A("OverlayV3Store"),
    C = new Set(),
    b = new Set(),
    R = null,
    O = null,
    D = null,
    L = null,
    w = null,
    x = null,
    M = null,
    P = null,
    k = {},
    U = {},
    G = {};
function F(e, t) {
    null == G[e] && (G[e] = new Set()), G[e].add(t);
}
function V(e) {
    null != G[e] && (G[e] = new Set());
}
let B = (0, T.I2)();
function H() {
    B = (0, T.I2)();
}
function j(e, t) {
    if (null != R) {
        null != t && (U[e] = t);
        try {
            if ((R.trackGame(e), C.has(e))) return;
            C.add(e),
                (0, p.dK)(e, "maybeTrackGame", { newOverlayMethod: null != t ? _.Ue[t] : null }),
                s.A.updateOverlayState(e, _.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame");
        } catch (t) {
            N.error("Error tracking game:", t), (0, p.mD)(e, t, { crashType: "renderer" });
        }
    }
}
function Y(e) {
    if (!C.has(e)) return;
    let t = U[e],
        n = k[e];
    (0, p.dK)(e, "removeTrackedGame", { overlayMethod: null != t ? _.Ue[t] : null, overlayState: n }),
        C.delete(e),
        delete k[e],
        delete U[e],
        b.delete(e);
    try {
        if (null == R) return;
        R.untrackGame(e), N.verbose(`Removing tracked game ${e}`);
        let t = C.values().next().value;
        M === e && (M = t ?? null);
    } catch (t) {
        N.error("Error removing tracked game:", t), (0, p.mD)(e, t, { crashType: "native" });
    }
}
function W() {
    try {
        for (let e of C) R?.untrackGame(e);
        C.clear(),
            (0, p._r)(null, "clearTrackedGames"),
            (k = {}),
            (U = {}),
            b.clear(),
            N.verbose("Cleared all tracked games");
    } catch (e) {
        N.error("Error clearing tracked games:", e), (0, p.mD)(c.UNSET_PID, e, { crashType: "native" });
    }
}
async function K() {
    if (!I.A.isOverlayEnabled) return void W();
    await ee();
    let e = new Set(
        o.Ay.getRunningGames()
            .filter((e) => o.Ay.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...C].filter((t) => !e.has(t)))) Y(t);
    for (let e of C) j(e);
}
function z(e) {
    let t = o.Ay.getGameOrTransformedSubgameForPID(e);
    s.A.setAssociatedGame(M ?? c.UNSET_PID, e, t);
}
function $() {
    null == x ||
        w !== x ||
        (null != R &&
            ((x = null),
            (0, p.dK)(w, "renderer_window_refreshing_finished"),
            R.readyToShow?.(w),
            s.A.updateOverlayState(w, _.AR.OVERLAY_RENDERING, "checkPopoutRefresh"),
            N.verbose(`Showing overlay v3 for pid ${w}`)));
}
function q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = U[e] === _.Ue.OutOfProcessLimitedInteraction;
        if (t !== P) {
            P = t;
            try {
                "function" == typeof R?.setLimitedInteraction
                    ? (N.info("Setting limited interaction", t),
                      (0, p._r)(e, "focus_and_interaction_set", { isLimitedInteraction: t, focusable: !t }),
                      R.setLimitedInteraction(t))
                    : N.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                N.error("Error setting limited interaction mode:", t), (0, p.mD)(e, t, { crashType: "native" });
            }
        }
    }
    s.A.setFocusedPID(0 === e ? null : e, t, n);
}
function Z() {
    q(null, null, !0);
}
function X(e) {
    if (B.allDone) {
        if (!b.has(e))
            return void s.A.updateOverlayState(e, _.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        s.A.successfullyShown(e);
    }
}
function Q(e) {
    let { pid: t } = e;
    b.add(t), X(t);
}
function J(e) {
    let { initialized: t } = e;
    if (((B = { ...B, windowHandleSentToNative: t }), t)) {
        let e = L ?? c.UNSET_PID;
        B.reactInitializationStarted
            ? s.A.updateOverlayState(e, _.AR.WAITING_FOR_SUCCESSFUL_SHOW, "handleOverlayV3WindowHandleInitialized")
            : s.A.updateOverlayState(
                  e,
                  _.AR.WAITING_FOR_REACT_INITIALIZATION,
                  "handleOverlayV3WindowHandleInitialized",
              ),
            (0, p._r)(e, "window_handle_initialized");
    }
}
async function ee() {
    I.A.isModuleLoaded || I.A.isModuleLoading || (await (0, p.P_)()), (R = await (0, S.N)());
}
async function et(e) {
    e.overlayMethod === _.Ue.OutOfProcess || e.overlayMethod === _.Ue.OutOfProcessLimitedInteraction
        ? (await ee(), j(e.pid, e.overlayMethod))
        : Y(e.pid),
        eI.emitChange();
}
function en() {
    H(), (P = null);
}
function er(e) {
    let { createWindowTriggeringPID: t } = e;
    (B = { ...B, popoutOpened: !0 }), z(t), (M = t), (L = t), (0, c.setPID)(t);
}
function ei(e) {
    let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
    s.A.updateOverlayState(t, _.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE, "handleOverlayCreateWindowHandleSuccess");
}
function es(e) {
    let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: r } = e;
    s.A.updateOverlayState(t, _.AR.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
        (B = { ...B, errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n }),
        (0, p._r)(t, "renderer_window_mounting_failed", { error: n, popoutInitializationStages: B });
}
function ea() {
    Z(), null != M && V(M), (M = null), (L = null), (0, c.setPID)(c.UNSET_PID), H();
}
function eo(e) {
    let { refreshingPID: t } = e;
    return (
        N.verbose(`Refreshing OOP host window for pid ${t}`), (x = t), (M = t), (L = t), (0, c.setPID)(t), z(t), $(), !0
    );
}
function el(e) {
    let { pid: t, windowHandle: n, windowClass: r } = e;
    null != r && f.C.has(r)
        ? Z()
        : (q(t, null != n ? (0, T.Oy)(n) : null), t !== O && N.info("OverlayStore: Focused new PID", t));
}
function eu() {
    Z();
}
function ec(e) {
    let { pid: t, windowHandle: n } = e;
    return (
        null != n && null != t && F(t, (0, T.Oy)(n)),
        (O !== t || D !== n) &&
            (0, p._r)(t ?? O ?? c.UNSET_PID, "overlay_focused", {
                focusedPID: t,
                focusedWindowHandle: D,
                windowHandle: n,
            }),
        (O = t),
        (D = n),
        !0
    );
}
function ed() {
    (B = { ...B, showInactiveCalled: !0 }), R?.onNativePopoutShowInactiveSuccess?.();
}
function e_() {
    (B = { ...B, allDone: !0 }),
        C.forEach((e) => {
            X(e);
        });
}
function ef(e) {
    let { update: t } = e;
    B = { ...B, ...t };
}
function ep(e) {
    let { pid: t, windowHandle: n } = e;
    (w = t),
        $(),
        null != n && null != t && F(t, (0, T.Oy)(n)),
        null != R && (null != n || R.version?.() > 0) && R.setRenderingWindowHandle?.((0, T.Oy)(n ?? "0"), t);
}
function eh(e) {
    N.verbose("Updating OverlayMethod", e), et(e);
}
function em(e) {
    k[e.pid] = e.overlayState;
}
function eE() {
    (R = I.A.getNativeModule()), K();
}
function eg() {
    R = null;
}
class eA extends r.Ay.Store {
    static displayName = "Overlay-V3-Store";
    initialize() {
        this.waitFor(l.default, u.A, h.A, m.A, E.A, g.A, A.A, I.A, o.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return C.has(e);
    }
    getWidgetByType(e) {
        let t = u.A.getLayout(v.G);
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
        return y.ed && (L === c.UNSET_PID || null == L) ? c.DEV_PID : (L ?? c.UNSET_PID);
    }
    getFocusedPID() {
        return O;
    }
    getFocusedWindowHandle() {
        return D;
    }
    getKnownWindowHandlesForPID(e) {
        return null == G[e] ? null : G[e];
    }
    isFocused(e) {
        return null != O && e !== c.UNSET_PID && (!!C.has(e) || e === c.DEV_PID) && O === e;
    }
    getFocusedRunningGame() {
        return null == O ? null : (o.Ay.getGameOrTransformedSubgameForPID(O) ?? null);
    }
    getPopoutInitializationStages() {
        return B;
    }
    isWindowHandleInitialized() {
        return B.windowHandleSentToNative;
    }
    isReady(e) {
        return !!C.has(e) && k[e] === _.AR.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        return k[e] ?? null;
    }
    getIsOverlayPreShown(e) {
        let t = k[e];
        return null != t && T.Ms.has(t);
    }
    getOverlayMethod(e) {
        return U[e] ?? null;
    }
}
let eI = new eA(
        i.h,
        __OVERLAY__ || !d.O
            ? { OVERLAY_FOCUSED: ec }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: eh,
                  OVERLAY_UPDATE_OVERLAY_STATE: em,
                  OVERLAY_FOCUSED: ec,
                  OVERLAY_OOP_UI_INITIALIZED: e_,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ed,
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: ef,
                  OVERLAY_UI_FOCUSED_PID: ep,
                  OVERLAY_V3_PRE_CREATE_POPOUT: en,
                  OVERLAY_V3_POST_CREATE_POPOUT: er,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: ei,
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: es,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: eE,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: eg,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: eo,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: ea,
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: el,
                  OVERLAY_V3_NATIVE_FOCUS_LOST: eu,
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: Q,
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: J,
              },
    ),
    eT = eI;
