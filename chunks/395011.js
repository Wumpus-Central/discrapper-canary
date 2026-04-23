"use strict";
n.d(t, { A: () => ee });
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
    E = n(275115),
    m = n(321090),
    g = n(222506),
    A = n(127242),
    I = n(680243),
    T = n(96175),
    S = n(905555),
    y = n(644434);
let N = new a.A("OverlayV3Store"),
    v = new Set(),
    C = new Set(),
    O = null,
    R = null,
    b = null,
    D = null,
    L = null,
    w = null,
    M = null,
    P = null,
    x = {},
    k = {},
    U = {};
function G(e, t) {
    null == U[e] && (U[e] = new Set()), U[e].add(t);
}
let F = (0, T.I2)();
function V() {
    F = (0, T.I2)();
}
function B(e, t) {
    if (null != O) {
        null != t && (k[e] = t);
        try {
            if ((O.trackGame(e), v.has(e))) return;
            v.add(e),
                (0, p.dK)(e, "maybeTrackGame", { newOverlayMethod: null != t ? _.Ue[t] : null }),
                s.A.updateOverlayState(e, _.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame");
        } catch (t) {
            N.error("Error tracking game:", t), (0, p.mD)(e, t, { crashType: "renderer" });
        }
    }
}
function H(e) {
    if (!v.has(e)) return;
    let t = k[e],
        n = x[e];
    (0, p.dK)(e, "removeTrackedGame", { overlayMethod: null != t ? _.Ue[t] : null, overlayState: n }),
        v.delete(e),
        delete x[e],
        delete k[e],
        C.delete(e);
    try {
        if (null == O) return;
        O.untrackGame(e), N.verbose(`Removing tracked game ${e}`);
        let t = v.values().next().value;
        M === e && (M = t ?? null);
    } catch (t) {
        N.error("Error removing tracked game:", t), (0, p.mD)(e, t, { crashType: "native" });
    }
}
async function j() {
    if (!I.A.isOverlayEnabled)
        return void (function () {
            try {
                for (let e of v) O?.untrackGame(e);
                v.clear(),
                    (0, p._r)(null, "clearTrackedGames"),
                    (x = {}),
                    (k = {}),
                    C.clear(),
                    N.verbose("Cleared all tracked games");
            } catch (e) {
                N.error("Error clearing tracked games:", e), (0, p.mD)(c.UNSET_PID, e, { crashType: "native" });
            }
        })();
    await q();
    let e = new Set(
        o.Ay.getRunningGames()
            .filter((e) => o.Ay.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...v].filter((t) => !e.has(t)))) H(t);
    for (let e of v) B(e);
}
function Y(e) {
    let t = o.Ay.getGameOrTransformedSubgameForPID(e);
    s.A.setAssociatedGame(M ?? c.UNSET_PID, e, t);
}
function W() {
    null == w ||
        L !== w ||
        (null != O &&
            ((w = null),
            (0, p.dK)(L, "renderer_window_refreshing_finished"),
            O.readyToShow?.(L),
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
                "function" == typeof O?.setLimitedInteraction
                    ? (N.info("Setting limited interaction", t),
                      (0, p._r)(e, "focus_and_interaction_set", { isLimitedInteraction: t, focusable: !t }),
                      O.setLimitedInteraction(t))
                    : N.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                N.error("Error setting limited interaction mode:", t), (0, p.mD)(e, t, { crashType: "native" });
            }
        }
    }
    s.A.setFocusedPID(0 === e ? null : e, t, n);
}
function $() {
    K(null, null, !0);
}
function z(e) {
    if (F.allDone) {
        if (!C.has(e))
            return void s.A.updateOverlayState(e, _.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        s.A.successfullyShown(e);
    }
}
async function q() {
    I.A.isModuleLoaded || I.A.isModuleLoading || (await (0, p.P_)()), (O = await (0, S.N)());
}
async function X(e) {
    e.overlayMethod === _.Ue.OutOfProcess || e.overlayMethod === _.Ue.OutOfProcessLimitedInteraction
        ? (await q(), B(e.pid, e.overlayMethod))
        : H(e.pid),
        J.emitChange();
}
function Q(e) {
    let { pid: t, windowHandle: n } = e;
    return (
        null != n && null != t && G(t, (0, T.Oy)(n)),
        (R !== t || b !== n) &&
            (0, p._r)(t ?? R ?? c.UNSET_PID, "overlay_focused", {
                focusedPID: t,
                focusedWindowHandle: b,
                windowHandle: n,
            }),
        (R = t),
        (b = n),
        !0
    );
}
class Z extends r.Ay.Store {
    static displayName = "Overlay-V3-Store";
    initialize() {
        this.waitFor(l.default, u.A, h.A, E.A, m.A, g.A, A.A, I.A, o.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return v.has(e);
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
        return b;
    }
    getKnownWindowHandlesForPID(e) {
        return null == U[e] ? null : U[e];
    }
    isFocused(e) {
        return null != R && e !== c.UNSET_PID && (!!v.has(e) || e === c.DEV_PID) && R === e;
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
        return !!v.has(e) && x[e] === _.AR.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        return x[e] ?? null;
    }
    getIsOverlayPreShown(e) {
        let t = x[e];
        return null != t && T.Ms.has(t);
    }
    getOverlayMethod(e) {
        return k[e] ?? null;
    }
}
let J = new Z(
        i.h,
        __OVERLAY__ || !d.O
            ? { OVERLAY_FOCUSED: Q }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: function (e) {
                      N.verbose("Updating OverlayMethod", e), X(e);
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      x[e.pid] = e.overlayState;
                  },
                  OVERLAY_FOCUSED: Q,
                  OVERLAY_OOP_UI_INITIALIZED: function () {
                      (F = { ...F, allDone: !0 }),
                          v.forEach((e) => {
                              z(e);
                          });
                  },
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: function () {
                      (F = { ...F, showInactiveCalled: !0 }), O?.onNativePopoutShowInactiveSuccess?.();
                  },
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: function (e) {
                      let { update: t } = e;
                      F = { ...F, ...t };
                  },
                  OVERLAY_UI_FOCUSED_PID: function (e) {
                      let { pid: t, windowHandle: n } = e;
                      (L = t),
                          W(),
                          null != n && null != t && G(t, (0, T.Oy)(n)),
                          null != O &&
                              (null != n || O.version?.() > 0) &&
                              O.setRenderingWindowHandle?.((0, T.Oy)(n ?? "0"), t);
                  },
                  OVERLAY_V3_PRE_CREATE_POPOUT: function () {
                      V(), (P = null);
                  },
                  OVERLAY_V3_POST_CREATE_POPOUT: function (e) {
                      let { createWindowTriggeringPID: t } = e;
                      (F = { ...F, popoutOpened: !0 }), Y(t), (M = t), (D = t), (0, c.setPID)(t);
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
                          (F = { ...F, errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n }),
                          (0, p._r)(t, "renderer_window_mounting_failed", { error: n, popoutInitializationStages: F });
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      (O = I.A.getNativeModule()), j();
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      O = null;
                  },
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function (e) {
                      let { refreshingPID: t } = e;
                      return (
                          N.verbose(`Refreshing OOP host window for pid ${t}`),
                          (w = t),
                          (M = t),
                          (D = t),
                          (0, c.setPID)(t),
                          Y(t),
                          W(),
                          !0
                      );
                  },
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                      var e;
                      $(),
                          null != M && null != U[(e = M)] && (U[e] = new Set()),
                          (M = null),
                          (D = null),
                          (0, c.setPID)(c.UNSET_PID),
                          V();
                  },
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: function (e) {
                      let { pid: t, windowHandle: n, windowClass: r } = e;
                      null != r && f.C.has(r)
                          ? $()
                          : (K(t, null != n ? (0, T.Oy)(n) : null),
                            t !== R && N.info("OverlayStore: Focused new PID", t));
                  },
                  OVERLAY_V3_NATIVE_FOCUS_LOST: function () {
                      $();
                  },
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: function (e) {
                      let { pid: t } = e;
                      C.add(t), z(t);
                  },
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: function (e) {
                      let { initialized: t } = e;
                      if (((F = { ...F, windowHandleSentToNative: t }), t)) {
                          let e = D ?? c.UNSET_PID;
                          F.reactInitializationStarted
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
                              (0, p._r)(e, "window_handle_initialized");
                      }
                  },
              },
    ),
    ee = J;
