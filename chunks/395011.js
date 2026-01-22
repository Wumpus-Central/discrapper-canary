n.d(t, {
    A: () => eI,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(684013),
    o = n(626584),
    l = n(15285),
    c = n(961350),
    u = n(555528),
    d = n(9302),
    f = n(41984),
    p = n(870507),
    _ = n(682763),
    h = n(912865),
    m = n(275115),
    g = n(321090),
    E = n(222506),
    b = n(127242),
    y = n(680243),
    O = n(96175),
    A = n(905555),
    v = n(672396),
    S = n(644434);

function I(e, t, n) {
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
                I(e, t, n[t]);
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
let R = new o.A("OverlayV3Store"),
    w = new Set(),
    P = new Set(),
    D = null,
    x = null,
    L = null,
    j = null,
    M = null,
    k = null,
    U = null,
    G = null,
    V = {},
    F = {},
    B = {};

function H(e, t) {
    null == B[e] && (B[e] = new Set()), B[e].add(t);
}

function Y(e) {
    null != B[e] && (B[e] = new Set());
}
let W = (0, O.I2)();

function K() {
    W = (0, O.I2)();
}

function z(e, t) {
    if (null != D) {
        null != t && (F[e] = t);
        try {
            if ((D.trackGame(e), w.has(e))) return;
            w.add(e),
                (0, _.dK)(e, "maybeTrackGame", {
                    newOverlayMethod: null != t ? f.Ue[t] : null,
                }),
                s.A.updateOverlayState(e, f.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame");
        } catch (t) {
            R.error("Error tracking game:", t),
                (0, _.mD)(e, t, {
                    crashType: "renderer",
                });
        }
    }
}

function q(e) {
    if (!w.has(e)) return;
    let t = F[e],
        n = V[e];
    (0, _.dK)(e, "removeTrackedGame", {
        overlayMethod: null != t ? f.Ue[t] : null,
        overlayState: n,
    }),
        w.delete(e),
        delete V[e],
        delete F[e],
        P.delete(e);
    try {
        if (null == D) return;
        D.untrackGame(e), R.verbose("Removing tracked game ".concat(e));
        let t = w.values().next().value;
        U === e && (U = null != t ? t : null);
    } catch (t) {
        R.error("Error removing tracked game:", t),
            (0, _.mD)(e, t, {
                crashType: "native",
            });
    }
}

function X() {
    try {
        for (let e of w) null == D || D.untrackGame(e);
        w.clear(),
            (0, _._r)(null, "clearTrackedGames"),
            (V = {}),
            (F = {}),
            P.clear(),
            R.verbose("Cleared all tracked games");
    } catch (e) {
        R.error("Error clearing tracked games:", e),
            (0, _.mD)(d.UNSET_PID, e, {
                crashType: "native",
            });
    }
}
async function Z() {
    if (!y.A.isOverlayEnabled) return void X();
    await ei();
    let e = new Set(
        l.Ay.getRunningGames()
            .filter((e) => l.Ay.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...w].filter((t) => !e.has(t)))) q(t);
    for (let e of w) z(e);
}

function Q(e) {
    let t = l.Ay.getGameOrTransformedSubgameForPID(e);
    s.A.setAssociatedGame(null != U ? U : d.UNSET_PID, e, t);
}

function $() {
    var e;
    null == k ||
        M !== k ||
        (null != D &&
            ((k = null),
            (0, _.dK)(M, "renderer_window_refreshing_finished"),
            null == (e = D.readyToShow) || e.call(D, M),
            s.A.updateOverlayState(M, f.AR.OVERLAY_RENDERING, "checkPopoutRefresh"),
            R.verbose("Showing overlay v3 for pid ".concat(M))));
}

function J(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = F[e] === f.Ue.OutOfProcessLimitedInteraction;
        if (t !== G) {
            G = t;
            try {
                "function" == typeof (null == D ? void 0 : D.setLimitedInteraction)
                    ? (R.info("Setting limited interaction", t),
                      (0, _._r)(e, "focus_and_interaction_set", {
                          isLimitedInteraction: t,
                          focusable: !t,
                      }),
                      D.setLimitedInteraction(t))
                    : R.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                R.error("Error setting limited interaction mode:", t),
                    (0, _.mD)(e, t, {
                        crashType: "native",
                    });
            }
        }
    }
    s.A.setFocusedPID(0 === e ? null : e, t, n);
}

function ee() {
    J(null, null, !0);
}

function et(e) {
    if (W.allDone) {
        if (!P.has(e))
            return void s.A.updateOverlayState(e, f.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        s.A.successfullyShown(e);
    }
}

function en(e) {
    let { pid: t } = e;
    P.add(t), et(t);
}

function er(e) {
    let { initialized: t } = e;
    if (
        ((W = N(T({}, W), {
            windowHandleSentToNative: t,
        })),
        t)
    ) {
        let e = null != j ? j : d.UNSET_PID;
        W.reactInitializationStarted
            ? s.A.updateOverlayState(e, f.AR.WAITING_FOR_SUCCESSFUL_SHOW, "handleOverlayV3WindowHandleInitialized")
            : s.A.updateOverlayState(
                  e,
                  f.AR.WAITING_FOR_REACT_INITIALIZATION,
                  "handleOverlayV3WindowHandleInitialized",
              ),
            (0, _._r)(e, "window_handle_initialized");
    }
}
async function ei() {
    y.A.isModuleLoaded || y.A.isModuleLoading || (await (0, _.P_)()), (D = await (0, A.N)());
}
async function ea(e) {
    e.overlayMethod === f.Ue.OutOfProcess || e.overlayMethod === f.Ue.OutOfProcessLimitedInteraction
        ? (await ei(), z(e.pid, e.overlayMethod))
        : q(e.pid),
        eS.emitChange();
}

function es() {
    K(), (G = null);
}

function eo(e) {
    let { createWindowTriggeringPID: t } = e;
    (W = N(T({}, W), {
        popoutOpened: !0,
    })),
        Q(t),
        (U = t),
        (j = t),
        (0, d.setPID)(t);
}

function el(e) {
    let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
    s.A.updateOverlayState(t, f.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE, "handleOverlayCreateWindowHandleSuccess");
}

function ec(e) {
    let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: r } = e;
    s.A.updateOverlayState(t, f.AR.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
        (W = N(T({}, W), {
            errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n,
        })),
        (0, _._r)(t, "renderer_window_mounting_failed", {
            error: n,
            popoutInitializationStages: W,
        });
}

function eu() {
    ee(), null != U && Y(U), (U = null), (j = null), (0, d.setPID)(d.UNSET_PID), K();
}

function ed(e) {
    let { refreshingPID: t } = e;
    return (
        R.verbose("Refreshing OOP host window for pid ".concat(t)),
        (k = t),
        (U = t),
        (j = t),
        (0, d.setPID)(t),
        Q(t),
        $(),
        !0
    );
}

function ef(e) {
    let { pid: t, windowHandle: n, windowClass: r } = e;
    null != r && p.C.has(r)
        ? ee()
        : (J(t, null != n ? (0, O.Oy)(n) : null), t !== x && R.info("OverlayStore: Focused new PID", t));
}

function ep() {
    ee();
}

function e_(e) {
    let { pid: t, windowHandle: n } = e;
    if ((null != n && null != t && H(t, (0, O.Oy)(n)), x !== t || L !== n)) {
        var r;
        (0, _._r)(null != (r = null != t ? t : x) ? r : d.UNSET_PID, "overlay_focused", {
            focusedPID: t,
            focusedWindowHandle: L,
            windowHandle: n,
        });
    }
    return (x = t), (L = n), !0;
}

function eh() {
    var e;
    (W = N(T({}, W), {
        showInactiveCalled: !0,
    })),
        null == D || null == (e = D.onNativePopoutShowInactiveSuccess) || e.call(D);
}

function em() {
    (W = N(T({}, W), {
        allDone: !0,
    })),
        w.forEach((e) => {
            et(e);
        });
}

function eg(e) {
    let { update: t } = e;
    W = T({}, W, t);
}

function eE(e) {
    var t, n;
    let { pid: r, windowHandle: i } = e;
    (M = r),
        $(),
        null != i && null != r && H(r, (0, O.Oy)(i)),
        null != D &&
            (null != i || (null == (t = D.version) ? void 0 : t.call(D)) > 0) &&
            (null == (n = D.setRenderingWindowHandle) || n.call(D, (0, O.Oy)(null != i ? i : "0"), r));
}

function eb(e) {
    R.verbose("Updating OverlayMethod", e), ea(e);
}

function ey(e) {
    V[e.pid] = e.overlayState;
}

function eO() {
    (D = y.A.getNativeModule()), Z();
}

function eA() {
    D = null;
}
class ev extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(c.default, u.A, h.A, m.A, g.A, E.A, b.A, y.A, l.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return w.has(e);
    }
    getWidgetByType(e) {
        let t = u.A.getLayout(S.G);
        if (null != t) {
            let r = t.widgets.find((t) => {
                let n = u.A.getWidget(t);
                return null != n && n.type === e ? t : null;
            });
            if (null != r) {
                var n;
                return null != (n = u.A.getWidget(r)) ? n : null;
            }
        }
        return null;
    }
    isPinned(e) {
        let t = this.getWidgetByType(e);
        return null != t && t.pinned;
    }
    getTargetPID() {
        return v.ed && (j === d.UNSET_PID || null == j) ? d.DEV_PID : null != j ? j : d.UNSET_PID;
    }
    getFocusedPID() {
        return x;
    }
    getFocusedWindowHandle() {
        return L;
    }
    getKnownWindowHandlesForPID(e) {
        return null == B[e] ? null : B[e];
    }
    isFocused(e) {
        return null != x && e !== d.UNSET_PID && (!!w.has(e) || e === d.DEV_PID) && x === e;
    }
    getFocusedRunningGame() {
        var e;
        return null == x ? null : null != (e = l.Ay.getGameOrTransformedSubgameForPID(x)) ? e : null;
    }
    getPopoutInitializationStages() {
        return W;
    }
    isWindowHandleInitialized() {
        return W.windowHandleSentToNative;
    }
    isReady(e) {
        return !!w.has(e) && V[e] === f.AR.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        var t;
        return null != (t = V[e]) ? t : null;
    }
    getIsOverlayPreShown(e) {
        let t = V[e];
        return null != t && O.Ms.has(t);
    }
    getOverlayMethod(e) {
        var t;
        return null != (t = F[e]) ? t : null;
    }
}
I(ev, "displayName", "Overlay-V3-Store");
let eS = new ev(
        a.h,
        __OVERLAY__ || !v.OX
            ? {
                  OVERLAY_FOCUSED: e_,
              }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: eb,
                  OVERLAY_UPDATE_OVERLAY_STATE: ey,
                  OVERLAY_FOCUSED: e_,
                  OVERLAY_OOP_UI_INITIALIZED: em,
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: eh,
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: eg,
                  OVERLAY_UI_FOCUSED_PID: eE,
                  OVERLAY_V3_PRE_CREATE_POPOUT: es,
                  OVERLAY_V3_POST_CREATE_POPOUT: eo,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: el,
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: ec,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: eO,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: eA,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: ed,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: eu,
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: ef,
                  OVERLAY_V3_NATIVE_FOCUS_LOST: ep,
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: en,
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: er,
              },
    ),
    eI = eS;
