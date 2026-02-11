"use strict";
n.d(t, { A: () => eT });
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
    h = n(912865),
    p = n(275115),
    g = n(321090),
    E = n(222506),
    A = n(127242),
    I = n(680243),
    T = n(96175),
    y = n(905555),
    S = n(672396),
    v = n(644434);
let C = new s.A("OverlayV3Store"),
    b = new Set(),
    N = new Set(),
    R = null,
    O = null,
    D = null,
    L = null,
    w = null,
    x = null,
    P = null,
    M = null,
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
function j() {
    B = (0, T.I2)();
}
function H(e, t) {
    if (null != R) {
        null != t && (U[e] = t);
        try {
            if ((R.trackGame(e), b.has(e))) return;
            b.add(e),
                (0, f.dK)(e, "maybeTrackGame", { newOverlayMethod: null != t ? d.Ue[t] : null }),
                a.A.updateOverlayState(e, d.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame");
        } catch (t) {
            C.error("Error tracking game:", t), (0, f.mD)(e, t, { crashType: "renderer" });
        }
    }
}
function Y(e) {
    if (!b.has(e)) return;
    let t = U[e],
        n = k[e];
    (0, f.dK)(e, "removeTrackedGame", { overlayMethod: null != t ? d.Ue[t] : null, overlayState: n }),
        b.delete(e),
        delete k[e],
        delete U[e],
        N.delete(e);
    try {
        if (null == R) return;
        R.untrackGame(e), C.verbose(`Removing tracked game ${e}`);
        let t = b.values().next().value;
        P === e && (P = t ?? null);
    } catch (t) {
        C.error("Error removing tracked game:", t), (0, f.mD)(e, t, { crashType: "native" });
    }
}
function W() {
    try {
        for (let e of b) R?.untrackGame(e);
        b.clear(),
            (0, f._r)(null, "clearTrackedGames"),
            (k = {}),
            (U = {}),
            N.clear(),
            C.verbose("Cleared all tracked games");
    } catch (e) {
        C.error("Error clearing tracked games:", e), (0, f.mD)(c.UNSET_PID, e, { crashType: "native" });
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
    for (let t of new Set([...b].filter((t) => !e.has(t)))) Y(t);
    for (let e of b) H(e);
}
function $(e) {
    let t = o.Ay.getGameOrTransformedSubgameForPID(e);
    a.A.setAssociatedGame(P ?? c.UNSET_PID, e, t);
}
function z() {
    null == x ||
        w !== x ||
        (null != R &&
            ((x = null),
            (0, f.dK)(w, "renderer_window_refreshing_finished"),
            R.readyToShow?.(w),
            a.A.updateOverlayState(w, d.AR.OVERLAY_RENDERING, "checkPopoutRefresh"),
            C.verbose(`Showing overlay v3 for pid ${w}`)));
}
function q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = U[e] === d.Ue.OutOfProcessLimitedInteraction;
        if (t !== M) {
            M = t;
            try {
                "function" == typeof R?.setLimitedInteraction
                    ? (C.info("Setting limited interaction", t),
                      (0, f._r)(e, "focus_and_interaction_set", { isLimitedInteraction: t, focusable: !t }),
                      R.setLimitedInteraction(t))
                    : C.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                C.error("Error setting limited interaction mode:", t), (0, f.mD)(e, t, { crashType: "native" });
            }
        }
    }
    a.A.setFocusedPID(0 === e ? null : e, t, n);
}
function X() {
    q(null, null, !0);
}
function Z(e) {
    if (B.allDone) {
        if (!N.has(e))
            return void a.A.updateOverlayState(e, d.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        a.A.successfullyShown(e);
    }
}
function Q(e) {
    let { pid: t } = e;
    N.add(t), Z(t);
}
function J(e) {
    let { initialized: t } = e;
    if (((B = { ...B, windowHandleSentToNative: t }), t)) {
        let e = L ?? c.UNSET_PID;
        B.reactInitializationStarted
            ? a.A.updateOverlayState(e, d.AR.WAITING_FOR_SUCCESSFUL_SHOW, "handleOverlayV3WindowHandleInitialized")
            : a.A.updateOverlayState(
                  e,
                  d.AR.WAITING_FOR_REACT_INITIALIZATION,
                  "handleOverlayV3WindowHandleInitialized",
              ),
            (0, f._r)(e, "window_handle_initialized");
    }
}
async function ee() {
    I.A.isModuleLoaded || I.A.isModuleLoading || (await (0, f.P_)()), (R = await (0, y.N)());
}
async function et(e) {
    e.overlayMethod === d.Ue.OutOfProcess || e.overlayMethod === d.Ue.OutOfProcessLimitedInteraction
        ? (await ee(), H(e.pid, e.overlayMethod))
        : Y(e.pid),
        eI.emitChange();
}
function en() {
    j(), (M = null);
}
function er(e) {
    let { createWindowTriggeringPID: t } = e;
    (B = { ...B, popoutOpened: !0 }), $(t), (P = t), (L = t), (0, c.setPID)(t);
}
function ei(e) {
    let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
    a.A.updateOverlayState(t, d.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE, "handleOverlayCreateWindowHandleSuccess");
}
function ea(e) {
    let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: r } = e;
    a.A.updateOverlayState(t, d.AR.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
        (B = { ...B, errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n }),
        (0, f._r)(t, "renderer_window_mounting_failed", { error: n, popoutInitializationStages: B });
}
function es() {
    X(), null != P && V(P), (P = null), (L = null), (0, c.setPID)(c.UNSET_PID), j();
}
function eo(e) {
    let { refreshingPID: t } = e;
    return (
        C.verbose(`Refreshing OOP host window for pid ${t}`), (x = t), (P = t), (L = t), (0, c.setPID)(t), $(t), z(), !0
    );
}
function el(e) {
    let { pid: t, windowHandle: n, windowClass: r } = e;
    null != r && _.C.has(r)
        ? X()
        : (q(t, null != n ? (0, T.Oy)(n) : null), t !== O && C.info("OverlayStore: Focused new PID", t));
}
function eu() {
    X();
}
function ec(e) {
    let { pid: t, windowHandle: n } = e;
    return (
        null != n && null != t && F(t, (0, T.Oy)(n)),
        (O !== t || D !== n) &&
            (0, f._r)(t ?? O ?? c.UNSET_PID, "overlay_focused", {
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
        b.forEach((e) => {
            Z(e);
        });
}
function ef(e) {
    let { update: t } = e;
    B = { ...B, ...t };
}
function eh(e) {
    let { pid: t, windowHandle: n } = e;
    (w = t),
        z(),
        null != n && null != t && F(t, (0, T.Oy)(n)),
        null != R && (null != n || R.version?.() > 0) && R.setRenderingWindowHandle?.((0, T.Oy)(n ?? "0"), t);
}
function ep(e) {
    C.verbose("Updating OverlayMethod", e), et(e);
}
function em(e) {
    k[e.pid] = e.overlayState;
}
function eg() {
    (R = I.A.getNativeModule()), K();
}
function eE() {
    R = null;
}
class eA extends r.Ay.Store {
    static displayName = "Overlay-V3-Store";
    initialize() {
        this.waitFor(l.default, u.A, h.A, p.A, g.A, E.A, A.A, I.A, o.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return b.has(e);
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
        return S.ed && (L === c.UNSET_PID || null == L) ? c.DEV_PID : (L ?? c.UNSET_PID);
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
        return null != O && e !== c.UNSET_PID && (!!b.has(e) || e === c.DEV_PID) && O === e;
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
        return !!b.has(e) && k[e] === d.AR.OVERLAY_RENDERING;
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
        __OVERLAY__ || !S.OX
            ? { OVERLAY_FOCUSED: ec }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: ep,
                  OVERLAY_UPDATE_OVERLAY_STATE: em,
                  OVERLAY_FOCUSED: ec,
                  OVERLAY_OOP_UI_INITIALIZED: e_,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ed,
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: ef,
                  OVERLAY_UI_FOCUSED_PID: eh,
                  OVERLAY_V3_PRE_CREATE_POPOUT: en,
                  OVERLAY_V3_POST_CREATE_POPOUT: er,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: ei,
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: ea,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: eg,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: eE,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: eo,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: es,
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: el,
                  OVERLAY_V3_NATIVE_FOCUS_LOST: eu,
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: Q,
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: J,
              },
    ),
    eT = eI;
