"use strict";
n.d(t, { A: () => ee });
var r = n(311907),
    i = n(73153),
    s = n(684013),
    a = n(626584),
    o = n(15285),
    l = n(961350),
    u = n(555528),
    d = n(9302),
    c = n(206885),
    _ = n(41984),
    f = n(870507),
    E = n(682763),
    h = n(912865),
    p = n(275115),
    m = n(321090),
    g = n(222506),
    A = n(127242),
    I = n(680243),
    T = n(96175),
    S = n(905555),
    y = n(644434);
let N = new a.A("OverlayV3Store"),
    O = new Set(),
    R = new Set(),
    v = null,
    C = null,
    b = null,
    D = null,
    L = null,
    w = null,
    M = null,
    P = null,
    U = {},
    k = {},
    x = {};
function G(e, t) {
    null == x[e] && (x[e] = new Set()), x[e].add(t);
}
let V = (0, T.I2)();
function F() {
    V = (0, T.I2)();
}
function B(e, t) {
    if (null != v) {
        null != t && (k[e] = t);
        try {
            if ((v.trackGame(e), O.has(e))) return;
            O.add(e),
                (0, E.dK)(e, "maybeTrackGame", { newOverlayMethod: null != t ? _.Ue[t] : null }),
                s.A.updateOverlayState(e, _.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame");
        } catch (t) {
            N.error("Error tracking game:", t), (0, E.mD)(e, t, { crashType: "renderer" });
        }
    }
}
function H(e) {
    if (!O.has(e)) return;
    let t = k[e],
        n = U[e];
    (0, E.dK)(e, "removeTrackedGame", { overlayMethod: null != t ? _.Ue[t] : null, overlayState: n }),
        O.delete(e),
        delete U[e],
        delete k[e],
        R.delete(e);
    try {
        if (null == v) return;
        v.untrackGame(e), N.verbose(`Removing tracked game ${e}`);
        let t = O.values().next().value;
        M === e && (M = t ?? null);
    } catch (t) {
        N.error("Error removing tracked game:", t), (0, E.mD)(e, t, { crashType: "native" });
    }
}
async function Y() {
    if (!I.A.isOverlayEnabled)
        return void (function () {
            try {
                for (let e of O) v?.untrackGame(e);
                O.clear(),
                    (0, E._r)(null, "clearTrackedGames"),
                    (U = {}),
                    (k = {}),
                    R.clear(),
                    N.verbose("Cleared all tracked games");
            } catch (e) {
                N.error("Error clearing tracked games:", e), (0, E.mD)(d.UNSET_PID, e, { crashType: "native" });
            }
        })();
    await q();
    let e = new Set(
        o.Ay.getRunningGames()
            .filter((e) => o.Ay.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...O].filter((t) => !e.has(t)))) H(t);
    for (let e of O) B(e);
}
function W(e) {
    let t = o.Ay.getGameOrTransformedSubgameForPID(e);
    s.A.setAssociatedGame(M ?? d.UNSET_PID, e, t);
}
function j() {
    null == w ||
        L !== w ||
        (null != v &&
            ((w = null),
            (0, E.dK)(L, "renderer_window_refreshing_finished"),
            v.readyToShow?.(L),
            s.A.updateOverlayState(L, _.AR.OVERLAY_RENDERING, "checkPopoutRefresh"),
            N.verbose(`Showing overlay v3 for pid ${L}`)));
}
function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = k[e] === _.Ue.OutOfProcessLimitedInteraction;
        if (t !== P) {
            P = t;
            try {
                "function" == typeof v?.setLimitedInteraction
                    ? (N.info("Setting limited interaction", t),
                      (0, E._r)(e, "focus_and_interaction_set", { isLimitedInteraction: t, focusable: !t }),
                      v.setLimitedInteraction(t))
                    : N.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                N.error("Error setting limited interaction mode:", t), (0, E.mD)(e, t, { crashType: "native" });
            }
        }
    }
    s.A.setFocusedPID(0 === e ? null : e, t, n);
}
function $() {
    K(null, null, !0);
}
function z(e) {
    if (V.allDone) {
        if (!R.has(e))
            return void s.A.updateOverlayState(e, _.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        s.A.successfullyShown(e);
    }
}
async function q() {
    I.A.isModuleLoaded || I.A.isModuleLoading || (await (0, E.P_)()), (v = await (0, S.N)());
}
async function X(e) {
    e.overlayMethod === _.Ue.OutOfProcess || e.overlayMethod === _.Ue.OutOfProcessLimitedInteraction
        ? (await q(), B(e.pid, e.overlayMethod))
        : H(e.pid),
        Z.emitChange();
}
function Q(e) {
    let { pid: t, windowHandle: n } = e;
    return (
        null != n && null != t && G(t, (0, T.Oy)(n)),
        (C !== t || b !== n) &&
            (0, E._r)(t ?? C ?? d.UNSET_PID, "overlay_focused", {
                focusedPID: t,
                focusedWindowHandle: b,
                windowHandle: n,
            }),
        (C = t),
        (b = n),
        !0
    );
}
class J extends r.Ay.Store {
    static displayName = "Overlay-V3-Store";
    initialize() {
        this.waitFor(l.default, u.A, h.A, p.A, m.A, g.A, A.A, I.A, o.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return O.has(e);
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
        return c.e && (D === d.UNSET_PID || null == D) ? d.DEV_PID : (D ?? d.UNSET_PID);
    }
    getFocusedPID() {
        return C;
    }
    getFocusedWindowHandle() {
        return b;
    }
    getKnownWindowHandlesForPID(e) {
        return null == x[e] ? null : x[e];
    }
    isFocused(e) {
        return null != C && e !== d.UNSET_PID && (!!O.has(e) || e === d.DEV_PID) && C === e;
    }
    getFocusedRunningGame() {
        return null == C ? null : (o.Ay.getGameOrTransformedSubgameForPID(C) ?? null);
    }
    getPopoutInitializationStages() {
        return V;
    }
    isWindowHandleInitialized() {
        return V.windowHandleSentToNative;
    }
    isReady(e) {
        return !!O.has(e) && U[e] === _.AR.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        return U[e] ?? null;
    }
    getIsOverlayPreShown(e) {
        let t = U[e];
        return null != t && T.Ms.has(t);
    }
    getOverlayMethod(e) {
        return k[e] ?? null;
    }
}
let Z = new J(
        i.h,
        __OVERLAY__ || !c.O
            ? { OVERLAY_FOCUSED: Q }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: function (e) {
                      N.verbose("Updating OverlayMethod", e), X(e);
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      U[e.pid] = e.overlayState;
                  },
                  OVERLAY_FOCUSED: Q,
                  OVERLAY_OOP_UI_INITIALIZED: function () {
                      (V = { ...V, allDone: !0 }),
                          O.forEach((e) => {
                              z(e);
                          });
                  },
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: function () {
                      (V = { ...V, showInactiveCalled: !0 }), v?.onNativePopoutShowInactiveSuccess?.();
                  },
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: function (e) {
                      let { update: t } = e;
                      V = { ...V, ...t };
                  },
                  OVERLAY_UI_FOCUSED_PID: function (e) {
                      let { pid: t, windowHandle: n } = e;
                      (L = t),
                          j(),
                          null != n && null != t && G(t, (0, T.Oy)(n)),
                          null != v &&
                              (null != n || v.version?.() > 0) &&
                              v.setRenderingWindowHandle?.((0, T.Oy)(n ?? "0"), t);
                  },
                  OVERLAY_V3_PRE_CREATE_POPOUT: function () {
                      F(), (P = null);
                  },
                  OVERLAY_V3_POST_CREATE_POPOUT: function (e) {
                      let { createWindowTriggeringPID: t } = e;
                      (V = { ...V, popoutOpened: !0 }), W(t), (M = t), (D = t), (0, d.setPID)(t);
                  },
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function (e) {
                      let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
                      s.A.updateOverlayState(
                          t,
                          _.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
                          "handleOverlayCreateWindowHandleSuccess",
                      );
                  },
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: function (e) {
                      let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: r } = e;
                      s.A.updateOverlayState(t, _.AR.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
                          (V = { ...V, errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n }),
                          (0, E._r)(t, "renderer_window_mounting_failed", { error: n, popoutInitializationStages: V });
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      (v = I.A.getNativeModule()), Y();
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      v = null;
                  },
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function (e) {
                      let { refreshingPID: t } = e;
                      return (
                          N.verbose(`Refreshing OOP host window for pid ${t}`),
                          (w = t),
                          (M = t),
                          (D = t),
                          (0, d.setPID)(t),
                          W(t),
                          j(),
                          !0
                      );
                  },
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                      var e;
                      $(),
                          null != M && null != x[(e = M)] && (x[e] = new Set()),
                          (M = null),
                          (D = null),
                          (0, d.setPID)(d.UNSET_PID),
                          F();
                  },
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: function (e) {
                      let { pid: t, windowHandle: n, windowClass: r } = e;
                      null != r && f.C.has(r)
                          ? $()
                          : (K(t, null != n ? (0, T.Oy)(n) : null),
                            t !== C && N.info("OverlayStore: Focused new PID", t));
                  },
                  OVERLAY_V3_NATIVE_FOCUS_LOST: function () {
                      $();
                  },
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: function (e) {
                      let { pid: t } = e;
                      R.add(t), z(t);
                  },
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: function (e) {
                      let { initialized: t } = e;
                      if (((V = { ...V, windowHandleSentToNative: t }), t)) {
                          let e = D ?? d.UNSET_PID;
                          V.reactInitializationStarted
                              ? s.A.updateOverlayState(
                                    e,
                                    _.AR.WAITING_FOR_SUCCESSFUL_SHOW,
                                    "handleOverlayV3WindowHandleInitialized",
                                )
                              : s.A.updateOverlayState(
                                    e,
                                    _.AR.WAITING_FOR_REACT_INITIALIZATION,
                                    "handleOverlayV3WindowHandleInitialized",
                                ),
                              (0, E._r)(e, "window_handle_initialized");
                      }
                  },
              },
    ),
    ee = Z;
