n.d(t, { Z: () => eT }), n(388685);
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
    j = null,
    k = null,
    U = null,
    G = {},
    B = {},
    Z = {};
function F(e, t) {
    null == Z[e] && (Z[e] = new Set()), Z[e].add(t);
}
function V(e) {
    null != Z[e] && (Z[e] = new Set());
}
let H = (0, y.r4)();
function Y() {
    H = (0, y.r4)();
}
function W(e, t) {
    if (null != D) {
        null != t && (B[e] = t);
        try {
            if ((D.trackGame(e), R.has(e))) return;
            R.add(e),
                (0, _.PY)(e, "maybeTrackGame", { newOverlayMethod: null != t ? f.gl[t] : null }),
                o.Z.updateOverlayState(e, f.mM.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame");
        } catch (t) {
            N.error("Error tracking game:", t), (0, _.PV)(e, t, { crashType: "renderer" });
        }
    }
}
function K(e) {
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
        if (null == D) return;
        D.untrackGame(e), N.verbose("Removing tracked game ".concat(e));
        let t = R.values().next().value;
        k === e && (k = null != t ? t : null);
    } catch (t) {
        N.error("Error removing tracked game:", t), (0, _.PV)(e, t, { crashType: "native" });
    }
}
function z() {
    try {
        for (let e of R) null == D || D.untrackGame(e);
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
async function q() {
    if (!b.Z.isOverlayEnabled) return void z();
    await er();
    let e = new Set(
        l.ZP.getRunningGames()
            .filter((e) => l.ZP.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...R].filter((t) => !e.has(t)))) K(t);
    for (let e of R) W(e);
}
function X(e) {
    let t = l.ZP.getGameOrTransformedSubgameForPID(e);
    o.Z.setAssociatedGame(null != k ? k : d.UNSET_PID, e, t);
}
function Q() {
    var e;
    null != j &&
        M === j &&
        null != D &&
        ((j = null),
        (0, _.PY)(M, "renderer_window_refreshing_finished"),
        null == (e = D.readyToShow) || e.call(D, M),
        o.Z.updateOverlayState(M, f.mM.OVERLAY_RENDERING, "checkPopoutRefresh"),
        N.verbose("Showing overlay v3 for pid ".concat(M)));
}
function J(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = B[e] === f.gl.OutOfProcessLimitedInteraction;
        if (t !== U) {
            U = t;
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
    o.Z.setFocusedPID(0 === e ? null : e, t, n);
}
function $() {
    J(null, null, !0);
}
function ee(e) {
    if (H.allDone) {
        if (!P.has(e))
            return void o.Z.updateOverlayState(e, f.mM.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        o.Z.successfullyShown(e);
    }
}
function et(e) {
    let { pid: t } = e;
    P.add(t), ee(t);
}
function en(e) {
    let { initialized: t } = e;
    if (((H = C(S({}, H), { windowHandleSentToNative: t })), t)) {
        let e = null != x ? x : d.UNSET_PID;
        H.reactInitializationStarted
            ? o.Z.updateOverlayState(e, f.mM.WAITING_FOR_SUCCESSFUL_SHOW, "handleOverlayV3WindowHandleInitialized")
            : o.Z.updateOverlayState(
                  e,
                  f.mM.WAITING_FOR_REACT_INITIALIZATION,
                  "handleOverlayV3WindowHandleInitialized",
              ),
            (0, _.bs)(e, "window_handle_initialized");
    }
}
async function er() {
    b.Z.isModuleLoaded || b.Z.isModuleLoading || (await (0, _.Nk)()), (D = await (0, O.H)());
}
async function ei(e) {
    e.overlayMethod === f.gl.OutOfProcess || e.overlayMethod === f.gl.OutOfProcessLimitedInteraction
        ? (await er(), W(e.pid, e.overlayMethod))
        : K(e.pid),
        eI.emitChange();
}
function ea() {
    Y(), (U = null);
}
function eo(e) {
    let { createWindowTriggeringPID: t } = e;
    (H = C(S({}, H), { popoutOpened: !0 })), X(t), (k = t), (x = t), (0, d.setPID)(t);
}
function es(e) {
    let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
    o.Z.updateOverlayState(t, f.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE, "handleOverlayCreateWindowHandleSuccess");
}
function el(e) {
    let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: r } = e;
    o.Z.updateOverlayState(t, f.mM.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
        (H = C(S({}, H), { errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n })),
        (0, _.bs)(t, "renderer_window_mounting_failed", {
            error: n,
            popoutInitializationStages: H,
        });
}
function ec() {
    $(), null != k && V(k), (k = null), (x = null), (0, d.setPID)(d.UNSET_PID), Y();
}
function eu(e) {
    let { refreshingPID: t } = e;
    return (
        N.verbose("Refreshing OOP host window for pid ".concat(t)),
        (j = t),
        (k = t),
        (x = t),
        (0, d.setPID)(t),
        X(t),
        Q(),
        !0
    );
}
function ed(e) {
    let { pid: t, windowHandle: n } = e;
    J(t, null != n ? (0, y.rd)(n) : null), t !== w && N.info("OverlayStore: Focused new PID", t);
}
function ef() {
    $();
}
function e_(e) {
    let { pid: t, windowHandle: n } = e;
    if ((null != n && null != t && F(t, (0, y.rd)(n)), w !== t || L !== n)) {
        var r;
        (0, _.bs)(null != (r = null != t ? t : w) ? r : d.UNSET_PID, "overlay_focused", {
            focusedPID: t,
            focusedWindowHandle: L,
            windowHandle: n,
        });
    }
    return (w = t), (L = n), !0;
}
function ep() {
    var e;
    (H = C(S({}, H), { showInactiveCalled: !0 })),
        null == D || null == (e = D.onNativePopoutShowInactiveSuccess) || e.call(D);
}
function eh() {
    (H = C(S({}, H), { allDone: !0 })),
        R.forEach((e) => {
            ee(e);
        });
}
function em(e) {
    let { update: t } = e;
    H = S({}, H, t);
}
function eg(e) {
    let { pid: t, windowHandle: n } = e;
    if (((M = t), Q(), null != n && null != t && F(t, (0, y.rd)(n)), null != n && null != D)) {
        var r;
        null == (r = D.setRenderingWindowHandle) || r.call(D, (0, y.rd)(n), t);
    }
}
function eE(e) {
    N.verbose("Updating OverlayMethod", e), ei(e);
}
function eb(e) {
    G[e.pid] = e.overlayState;
}
function ey() {
    (D = b.Z.getNativeModule()), q();
}
function eO() {
    D = null;
}
class ev extends (r = i.ZP.Store) {
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
        return v.y3 && (x === d.UNSET_PID || null == x) ? d.DEV_PID : null != x ? x : d.UNSET_PID;
    }
    getFocusedPID() {
        return w;
    }
    getFocusedWindowHandle() {
        return L;
    }
    getKnownWindowHandlesForPID(e) {
        return null == Z[e] ? null : Z[e];
    }
    isFocused(e) {
        return null != w && e !== d.UNSET_PID && (!!R.has(e) || e === d.DEV_PID) && w === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == w ? null : null != (e = l.ZP.getGameOrTransformedSubgameForPID(w)) ? e : null;
    }
    getPopoutInitializationStages() {
        return H;
    }
    isWindowHandleInitialized() {
        return H.windowHandleSentToNative;
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
T(ev, "displayName", "Overlay-V3-Store");
let eI = new ev(
        a.Z,
        __OVERLAY__ || !v.iP
            ? { OVERLAY_FOCUSED: e_ }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: eE,
                  OVERLAY_UPDATE_OVERLAY_STATE: eb,
                  OVERLAY_FOCUSED: e_,
                  OVERLAY_OOP_UI_INITIALIZED: eh,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: ep,
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: em,
                  OVERLAY_UI_FOCUSED_PID: eg,
                  OVERLAY_V3_PRE_CREATE_POPOUT: ea,
                  OVERLAY_V3_POST_CREATE_POPOUT: eo,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: es,
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: el,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: ey,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: eO,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: eu,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: ec,
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: ed,
                  OVERLAY_V3_NATIVE_FOCUS_LOST: ef,
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: et,
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: en,
              },
    ),
    eT = eI;
