"use strict";
n.d(t, { A: () => ey });
var r = n(311907),
    i = n(73153),
    a = n(684013),
    s = n(626584),
    o = n(15285),
    l = n(961350),
    u = n(555528),
    c = n(9302),
    d = n(206885),
    _ = n(41984),
    f = n(870507),
    h = n(682763),
    p = n(912865),
    g = n(275115),
    E = n(321090),
    A = n(222506),
    I = n(127242),
    T = n(680243),
    y = n(96175),
    S = n(905555),
    v = n(672396),
    C = n(644434);
let b = new s.A("OverlayV3Store"),
    N = new Set(),
    R = new Set(),
    O = null,
    D = null,
    L = null,
    w = null,
    x = null,
    P = null,
    M = null,
    k = null,
    U = {},
    G = {},
    F = {};
function V(e, t) {
    null == F[e] && (F[e] = new Set()), F[e].add(t);
}
function B(e) {
    null != F[e] && (F[e] = new Set());
}
let j = (0, y.I2)();
function H() {
    j = (0, y.I2)();
}
function Y(e, t) {
    if (null != O) {
        null != t && (G[e] = t);
        try {
            if ((O.trackGame(e), N.has(e))) return;
            N.add(e),
                (0, h.dK)(e, "maybeTrackGame", { newOverlayMethod: null != t ? _.Ue[t] : null }),
                a.A.updateOverlayState(e, _.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame");
        } catch (t) {
            b.error("Error tracking game:", t), (0, h.mD)(e, t, { crashType: "renderer" });
        }
    }
}
function W(e) {
    if (!N.has(e)) return;
    let t = G[e],
        n = U[e];
    (0, h.dK)(e, "removeTrackedGame", { overlayMethod: null != t ? _.Ue[t] : null, overlayState: n }),
        N.delete(e),
        delete U[e],
        delete G[e],
        R.delete(e);
    try {
        if (null == O) return;
        O.untrackGame(e), b.verbose(`Removing tracked game ${e}`);
        let t = N.values().next().value;
        M === e && (M = t ?? null);
    } catch (t) {
        b.error("Error removing tracked game:", t), (0, h.mD)(e, t, { crashType: "native" });
    }
}
function K() {
    try {
        for (let e of N) O?.untrackGame(e);
        N.clear(),
            (0, h._r)(null, "clearTrackedGames"),
            (U = {}),
            (G = {}),
            R.clear(),
            b.verbose("Cleared all tracked games");
    } catch (e) {
        b.error("Error clearing tracked games:", e), (0, h.mD)(c.UNSET_PID, e, { crashType: "native" });
    }
}
async function $() {
    if (!T.A.isOverlayEnabled) return void K();
    await et();
    let e = new Set(
        o.Ay.getRunningGames()
            .filter((e) => o.Ay.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...N].filter((t) => !e.has(t)))) W(t);
    for (let e of N) Y(e);
}
function z(e) {
    let t = o.Ay.getGameOrTransformedSubgameForPID(e);
    a.A.setAssociatedGame(M ?? c.UNSET_PID, e, t);
}
function q() {
    null == P ||
        x !== P ||
        (null != O &&
            ((P = null),
            (0, h.dK)(x, "renderer_window_refreshing_finished"),
            O.readyToShow?.(x),
            a.A.updateOverlayState(x, _.AR.OVERLAY_RENDERING, "checkPopoutRefresh"),
            b.verbose(`Showing overlay v3 for pid ${x}`)));
}
function X(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = G[e] === _.Ue.OutOfProcessLimitedInteraction;
        if (t !== k) {
            k = t;
            try {
                "function" == typeof O?.setLimitedInteraction
                    ? (b.info("Setting limited interaction", t),
                      (0, h._r)(e, "focus_and_interaction_set", { isLimitedInteraction: t, focusable: !t }),
                      O.setLimitedInteraction(t))
                    : b.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                b.error("Error setting limited interaction mode:", t), (0, h.mD)(e, t, { crashType: "native" });
            }
        }
    }
    a.A.setFocusedPID(0 === e ? null : e, t, n);
}
function Z() {
    X(null, null, !0);
}
function Q(e) {
    if (j.allDone) {
        if (!R.has(e))
            return void a.A.updateOverlayState(e, _.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        a.A.successfullyShown(e);
    }
}
function J(e) {
    let { pid: t } = e;
    R.add(t), Q(t);
}
function ee(e) {
    let { initialized: t } = e;
    if (((j = { ...j, windowHandleSentToNative: t }), t)) {
        let e = w ?? c.UNSET_PID;
        j.reactInitializationStarted
            ? a.A.updateOverlayState(e, _.AR.WAITING_FOR_SUCCESSFUL_SHOW, "handleOverlayV3WindowHandleInitialized")
            : a.A.updateOverlayState(
                  e,
                  _.AR.WAITING_FOR_REACT_INITIALIZATION,
                  "handleOverlayV3WindowHandleInitialized",
              ),
            (0, h._r)(e, "window_handle_initialized");
    }
}
async function et() {
    T.A.isModuleLoaded || T.A.isModuleLoading || (await (0, h.P_)()), (O = await (0, S.N)());
}
async function en(e) {
    e.overlayMethod === _.Ue.OutOfProcess || e.overlayMethod === _.Ue.OutOfProcessLimitedInteraction
        ? (await et(), Y(e.pid, e.overlayMethod))
        : W(e.pid),
        eT.emitChange();
}
function er() {
    H(), (k = null);
}
function ei(e) {
    let { createWindowTriggeringPID: t } = e;
    (j = { ...j, popoutOpened: !0 }), z(t), (M = t), (w = t), (0, c.setPID)(t);
}
function ea(e) {
    let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
    a.A.updateOverlayState(t, _.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE, "handleOverlayCreateWindowHandleSuccess");
}
function es(e) {
    let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: r } = e;
    a.A.updateOverlayState(t, _.AR.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
        (j = { ...j, errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n }),
        (0, h._r)(t, "renderer_window_mounting_failed", { error: n, popoutInitializationStages: j });
}
function eo() {
    Z(), null != M && B(M), (M = null), (w = null), (0, c.setPID)(c.UNSET_PID), H();
}
function el(e) {
    let { refreshingPID: t } = e;
    return (
        b.verbose(`Refreshing OOP host window for pid ${t}`), (P = t), (M = t), (w = t), (0, c.setPID)(t), z(t), q(), !0
    );
}
function eu(e) {
    let { pid: t, windowHandle: n, windowClass: r } = e;
    null != r && f.C.has(r)
        ? Z()
        : (X(t, null != n ? (0, y.Oy)(n) : null), t !== D && b.info("OverlayStore: Focused new PID", t));
}
function ec() {
    Z();
}
function ed(e) {
    let { pid: t, windowHandle: n } = e;
    return (
        null != n && null != t && V(t, (0, y.Oy)(n)),
        (D !== t || L !== n) &&
            (0, h._r)(t ?? D ?? c.UNSET_PID, "overlay_focused", {
                focusedPID: t,
                focusedWindowHandle: L,
                windowHandle: n,
            }),
        (D = t),
        (L = n),
        !0
    );
}
function e_() {
    (j = { ...j, showInactiveCalled: !0 }), O?.onNativePopoutShowInactiveSuccess?.();
}
function ef() {
    (j = { ...j, allDone: !0 }),
        N.forEach((e) => {
            Q(e);
        });
}
function eh(e) {
    let { update: t } = e;
    j = { ...j, ...t };
}
function ep(e) {
    let { pid: t, windowHandle: n } = e;
    (x = t),
        q(),
        null != n && null != t && V(t, (0, y.Oy)(n)),
        null != O && (null != n || O.version?.() > 0) && O.setRenderingWindowHandle?.((0, y.Oy)(n ?? "0"), t);
}
function em(e) {
    b.verbose("Updating OverlayMethod", e), en(e);
}
function eg(e) {
    U[e.pid] = e.overlayState;
}
function eE() {
    (O = T.A.getNativeModule()), $();
}
function eA() {
    O = null;
}
class eI extends r.Ay.Store {
    static displayName = "Overlay-V3-Store";
    initialize() {
        this.waitFor(l.default, u.A, p.A, g.A, E.A, A.A, I.A, T.A, o.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return N.has(e);
    }
    getWidgetByType(e) {
        let t = u.A.getLayout(C.G);
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
        return v.ed && (w === c.UNSET_PID || null == w) ? c.DEV_PID : (w ?? c.UNSET_PID);
    }
    getFocusedPID() {
        return D;
    }
    getFocusedWindowHandle() {
        return L;
    }
    getKnownWindowHandlesForPID(e) {
        return null == F[e] ? null : F[e];
    }
    isFocused(e) {
        return null != D && e !== c.UNSET_PID && (!!N.has(e) || e === c.DEV_PID) && D === e;
    }
    getFocusedRunningGame() {
        return null == D ? null : (o.Ay.getGameOrTransformedSubgameForPID(D) ?? null);
    }
    getPopoutInitializationStages() {
        return j;
    }
    isWindowHandleInitialized() {
        return j.windowHandleSentToNative;
    }
    isReady(e) {
        return !!N.has(e) && U[e] === _.AR.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        return U[e] ?? null;
    }
    getIsOverlayPreShown(e) {
        let t = U[e];
        return null != t && y.Ms.has(t);
    }
    getOverlayMethod(e) {
        return G[e] ?? null;
    }
}
let eT = new eI(
        i.h,
        __OVERLAY__ || !d.O
            ? { OVERLAY_FOCUSED: ed }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: em,
                  OVERLAY_UPDATE_OVERLAY_STATE: eg,
                  OVERLAY_FOCUSED: ed,
                  OVERLAY_OOP_UI_INITIALIZED: ef,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: e_,
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: eh,
                  OVERLAY_UI_FOCUSED_PID: ep,
                  OVERLAY_V3_PRE_CREATE_POPOUT: er,
                  OVERLAY_V3_POST_CREATE_POPOUT: ei,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: ea,
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: es,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: eE,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: eA,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: el,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: eo,
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: eu,
                  OVERLAY_V3_NATIVE_FOCUS_LOST: ec,
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: J,
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: ee,
              },
    ),
    ey = eT;
