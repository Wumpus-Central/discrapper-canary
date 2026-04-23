"use strict";
n.d(t, { A: () => eO });
var i = n(17928),
    r = n(228366),
    s = n(684013),
    a = n(626584),
    o = n(328153),
    l = n(495544),
    d = n(38502),
    _ = n(9302),
    u = n(206885),
    c = n(41984);
let E = new Set(["SplashScreenClass"]);
var h = n(682763),
    m = n(954571),
    f = n(777334),
    g = n(833551),
    p = n(515183),
    A = n(680243),
    I = n(652215);
let T = {};
function S(e) {
    return g.default.getTrackedGameByPid(e)?.overlayMethod ?? null;
}
function N(e) {
    return T[e] ?? {};
}
function C(e, t) {
    let n = T[e]?.error,
        i = T[e]?.error_description;
    (T[e] = { ...T[e], ...t }), null != n && (T[e].error = n), null != i && (T[e].error_description = i);
}
function R(e, t) {
    let n = o.Ay.getGameOrTransformedSubgameForPID(e);
    return { crash_type: t, gameName: n?.name };
}
class O extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Analytics-Store";
    initialize() {
        this.waitFor(g.default, A.A, o.Ay);
    }
    getData(e) {
        return N(e);
    }
    getCrashExtra(e, t) {
        return R(e, t);
    }
}
let y = new O(
    r.h,
    __OVERLAY__ || !u.O
        ? {}
        : {
              OVERLAY_V3_PRE_CREATE_POPOUT: function (e) {
                  let { createWindowTriggeringPID: t } = e;
                  return C(t, { mounting_started_at: new Date().getTime() }), !0;
              },
              OVERLAY_V3_POST_CREATE_POPOUT: function (e) {
                  let { createWindowTriggeringPID: t } = e,
                      n = N(t)?.mounting_started_at ?? new Date().getTime(),
                      i = {
                          renderer_started: !0,
                          fullscreen_type: (0, p.ph)(t),
                          graphics_info_after: new Date().getTime() - n,
                      };
                  return C(t, i), !0;
              },
              OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function (e) {
                  let { createWindowTriggeringPID: t } = e,
                      n = N(t)?.mounting_started_at ?? new Date().getTime();
                  return C(t, { renderer_started_after: new Date().getTime() - n }), !0;
              },
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function (e) {
                  let { lastAssociatedPID: t } = e;
                  if (t !== _.UNSET_PID) return m.default.track(I.HAw.OVERLAY_HOOK_RESULT, N(t)), (T = {}), !0;
              },
              OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                  let t,
                      { pid: n } = e,
                      i = N(n)?.mounting_started_at ?? new Date().getTime();
                  return (
                      C(n, { total_mount_time_ms: null != i ? new Date().getTime() - i : void 0, success: !0 }),
                      (t = S(n)),
                      (T[n] = { ...T[n], overlay_method: null != t ? c.Ue[t] : c.Ue[c.Ue.OutOfProcess] }),
                      !0
                  );
              },
              OVERLAY_CRASHED: function (e) {
                  let { pid: t, error: n, crashType: i } = e,
                      r = n instanceof Error ? n : Error(n ?? "Unknown error");
                  return (
                      "native" === i
                          ? (t !== _.UNSET_PID &&
                                C(t, { host_crash_count: 1, error: r.message, error_description: r.stack }),
                            (0, f.St)(r, c.Ue.OutOfProcess, { extra: R(t, "host") }))
                          : (t !== _.UNSET_PID &&
                                C(t, { renderer_crash_count: 1, error: r.message, error_description: r.stack }),
                            (0, f.St)(r, c.Ue.OutOfProcess, { extra: R(t, "renderer") })),
                      !0
                  );
              },
              OVERLAY_V3_NATIVE_TRACK_GAME: function (e) {
                  let { pid: t } = e;
                  return (
                      !(function (e) {
                          if (null != T[e]) return;
                          let t = o.Ay.getGameOrTransformedSubgameForPID(e),
                              n = S(e);
                          T[e] = {
                              overlay_method: null != n ? c.Ue[n] : c.Ue[c.Ue.OutOfProcess],
                              success: !1,
                              game_name: t?.name ?? null,
                              game_id: t?.id ?? null,
                              error: null,
                              error_description: null,
                              renderer_started: !1,
                              renderer_started_after: null,
                              renderer_ready_after: null,
                              renderer_load_succeeded_after: null,
                              renderer_crash_count: 0,
                              renderer_load_failures: 0,
                              renderer_ignored_paints: 0,
                              host_crash_count: 0,
                          };
                      })(t),
                      !0
                  );
              },
          },
);
var v = n(812729),
    D = n.n(v),
    L = n(118356),
    b = n(567249),
    w = n(96175),
    P = n(392164);
let k = new L.Vy("OverlayV3NativeClickZoneStore"),
    M = null,
    U = [],
    x = [],
    G = {},
    V = !1;
function F(e, t) {
    if (null == M) return void k.error("Overlay module not found");
    let n = M?.getLastAssociatedPID() ?? _.UNSET_PID;
    try {
        let i,
            r =
                ((i = setTimeout(() => {
                    !(function (e) {
                        let t = Object.keys(G).filter((t) => G[t] === e);
                        for (let n of (null != e && clearTimeout(e), t)) delete G[n];
                        let n = x.filter((e) => !t.includes(e.name));
                        (x.length > 0 && 0 === U.length) || ((U = n), F(n, "timer_expired")), (x = [...n]);
                    })(i);
                }, 3e4)),
                e.map((e) => {
                    let t = { name: e.name, left: e.left, top: e.top, right: e.right, bottom: e.bottom },
                        n = G[e.name];
                    return null != n && clearTimeout(n), (G[e.name] = i), t;
                }));
        D()(e, U) || (0, h._r)(n, "capture_zones_set", { source: t, capture_zones: r, rawZones: e }),
            M.setCaptureZones(r);
    } catch (e) {
        k.error("Error setting capture zones:", e);
    }
}
function B(e) {
    for (let e of Object.values(G)) null != e && clearTimeout(e);
    (G = {}), (U = []), (x = []), F([], e);
}
function H(e, t, n, i) {
    let r = b.A.getWindow(P.f);
    if (null == r) return;
    let s = Math.ceil(n * r.innerWidth),
        a = Math.ceil(i * r.innerHeight),
        o = new MouseEvent((0, w.Br)(t), { screenX: s, screenY: a, clientX: s, clientY: a, bubbles: !0, view: r }),
        l = r.document.elementFromPoint(s, a);
    null != l && l.dispatchEvent(o);
}
class j extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(A.A, b.A);
    }
    getClickZones() {
        return U;
    }
    getFocusLostStoredClickZones() {
        return x;
    }
}
let W = new j(
    r.h,
    __OVERLAY__ || !u.O
        ? {}
        : {
              OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                  return null == (M = A.A.getNativeModule()) || !!V || ((V = !0), M.setCaptureZoneCallback(H), !0);
              },
              OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                  return (M = null), !0;
              },
              OVERLAY_SET_CLICK_ZONES: function (e) {
                  let { zones: t } = e;
                  return (
                      !(function (e, t) {
                          if (!A.A.isOverlayEnabled) {
                              if (0 === U.length) return;
                              B("overlay_disabled");
                              return;
                          }
                          F(e, t), (U = e), (x = [...e]);
                      })(t, "set_click_zones"),
                      !0
                  );
              },
              OVERLAY_FOCUSED: function (e) {
                  let { pid: t } = e;
                  return (
                      0 === t
                          ? 0 !== U.length && ((x = [...U]), (U = []), F([], "store_click_zones"))
                          : U.length > 0 || F((U = [...x]), "refresh_click_zones"),
                      !0
                  );
              },
              OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function () {
                  return B("refresh_host_window"), !0;
              },
              OVERLAY_CRASHED: function (e) {
                  return B("crashed"), !0;
              },
          },
);
var Y = n(321090),
    K = n(222506),
    z = n(127242),
    $ = n(905555),
    q = n(644434);
let X = new a.A("OverlayV3Store"),
    Z = new Set(),
    Q = new Set(),
    J = null,
    ee = null,
    et = null,
    en = null,
    ei = null,
    er = null,
    es = null,
    ea = null,
    eo = {},
    el = {},
    ed = {};
function e_(e, t) {
    null == ed[e] && (ed[e] = new Set()), ed[e].add(t);
}
let eu = (0, w.I2)();
function ec() {
    eu = (0, w.I2)();
}
function eE(e, t) {
    if (null != J) {
        null != t && (el[e] = t);
        try {
            if ((J.trackGame(e), Z.has(e))) return;
            Z.add(e),
                (0, h.dK)(e, "maybeTrackGame", { newOverlayMethod: null != t ? c.Ue[t] : null }),
                s.A.updateOverlayState(e, c.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame");
        } catch (t) {
            X.error("Error tracking game:", t), (0, h.mD)(e, t, { crashType: "renderer" });
        }
    }
}
function eh(e) {
    if (!Z.has(e)) return;
    let t = el[e],
        n = eo[e];
    (0, h.dK)(e, "removeTrackedGame", { overlayMethod: null != t ? c.Ue[t] : null, overlayState: n }),
        Z.delete(e),
        delete eo[e],
        delete el[e],
        Q.delete(e);
    try {
        if (null == J) return;
        J.untrackGame(e), X.verbose(`Removing tracked game ${e}`);
        let t = Z.values().next().value;
        es === e && (es = t ?? null);
    } catch (t) {
        X.error("Error removing tracked game:", t), (0, h.mD)(e, t, { crashType: "native" });
    }
}
async function em() {
    if (!A.A.isOverlayEnabled)
        return void (function () {
            try {
                for (let e of Z) J?.untrackGame(e);
                Z.clear(),
                    (0, h._r)(null, "clearTrackedGames"),
                    (eo = {}),
                    (el = {}),
                    Q.clear(),
                    X.verbose("Cleared all tracked games");
            } catch (e) {
                X.error("Error clearing tracked games:", e), (0, h.mD)(_.UNSET_PID, e, { crashType: "native" });
            }
        })();
    await eT();
    let e = new Set(
        o.Ay.getRunningGames()
            .filter((e) => o.Ay.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...Z].filter((t) => !e.has(t)))) eh(t);
    for (let e of Z) eE(e);
}
function ef(e) {
    let t = o.Ay.getGameOrTransformedSubgameForPID(e);
    s.A.setAssociatedGame(es ?? _.UNSET_PID, e, t);
}
function eg() {
    null == er ||
        ei !== er ||
        (null != J &&
            ((er = null),
            (0, h.dK)(ei, "renderer_window_refreshing_finished"),
            J.readyToShow?.(ei),
            s.A.updateOverlayState(ei, c.AR.OVERLAY_RENDERING, "checkPopoutRefresh"),
            X.verbose(`Showing overlay v3 for pid ${ei}`)));
}
function ep(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = el[e] === c.Ue.OutOfProcessLimitedInteraction;
        if (t !== ea) {
            ea = t;
            try {
                "function" == typeof J?.setLimitedInteraction
                    ? (X.info("Setting limited interaction", t),
                      (0, h._r)(e, "focus_and_interaction_set", { isLimitedInteraction: t, focusable: !t }),
                      J.setLimitedInteraction(t))
                    : X.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                X.error("Error setting limited interaction mode:", t), (0, h.mD)(e, t, { crashType: "native" });
            }
        }
    }
    s.A.setFocusedPID(0 === e ? null : e, t, n);
}
function eA() {
    ep(null, null, !0);
}
function eI(e) {
    if (eu.allDone) {
        if (!Q.has(e))
            return void s.A.updateOverlayState(e, c.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        s.A.successfullyShown(e);
    }
}
async function eT() {
    A.A.isModuleLoaded || A.A.isModuleLoading || (await (0, h.P_)()), (J = await (0, $.N)());
}
async function eS(e) {
    e.overlayMethod === c.Ue.OutOfProcess || e.overlayMethod === c.Ue.OutOfProcessLimitedInteraction
        ? (await eT(), eE(e.pid, e.overlayMethod))
        : eh(e.pid),
        eR.emitChange();
}
function eN(e) {
    let { pid: t, windowHandle: n } = e;
    return (
        null != n && null != t && e_(t, (0, w.Oy)(n)),
        (ee !== t || et !== n) &&
            (0, h._r)(t ?? ee ?? _.UNSET_PID, "overlay_focused", {
                focusedPID: t,
                focusedWindowHandle: et,
                windowHandle: n,
            }),
        (ee = t),
        (et = n),
        !0
    );
}
class eC extends i.Ay.Store {
    static displayName = "Overlay-V3-Store";
    initialize() {
        this.waitFor(l.default, d.A, y, W, Y.A, K.A, z.A, A.A, o.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return Z.has(e);
    }
    getWidgetByType(e) {
        let t = d.A.getLayout(q.G);
        if (null != t) {
            let n = t.widgets.find((t) => {
                let n = d.A.getWidget(t);
                return null != n && n.type === e ? t : null;
            });
            if (null != n) return d.A.getWidget(n) ?? null;
        }
        return null;
    }
    isPinned(e) {
        let t = this.getWidgetByType(e);
        return null != t && t.pinned;
    }
    getTargetPID() {
        return u.e && (en === _.UNSET_PID || null == en) ? _.DEV_PID : (en ?? _.UNSET_PID);
    }
    getFocusedPID() {
        return ee;
    }
    getFocusedWindowHandle() {
        return et;
    }
    getKnownWindowHandlesForPID(e) {
        return null == ed[e] ? null : ed[e];
    }
    isFocused(e) {
        return null != ee && e !== _.UNSET_PID && (!!Z.has(e) || e === _.DEV_PID) && ee === e;
    }
    getFocusedRunningGame() {
        return null == ee ? null : (o.Ay.getGameOrTransformedSubgameForPID(ee) ?? null);
    }
    getPopoutInitializationStages() {
        return eu;
    }
    isWindowHandleInitialized() {
        return eu.windowHandleSentToNative;
    }
    isReady(e) {
        return !!Z.has(e) && eo[e] === c.AR.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        return eo[e] ?? null;
    }
    getIsOverlayPreShown(e) {
        let t = eo[e];
        return null != t && w.Ms.has(t);
    }
    getOverlayMethod(e) {
        return el[e] ?? null;
    }
}
let eR = new eC(
        r.h,
        __OVERLAY__ || !u.O
            ? { OVERLAY_FOCUSED: eN }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: function (e) {
                      X.verbose("Updating OverlayMethod", e), eS(e);
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      eo[e.pid] = e.overlayState;
                  },
                  OVERLAY_FOCUSED: eN,
                  OVERLAY_OOP_UI_INITIALIZED: function () {
                      (eu = { ...eu, allDone: !0 }),
                          Z.forEach((e) => {
                              eI(e);
                          });
                  },
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: function () {
                      (eu = { ...eu, showInactiveCalled: !0 }), J?.onNativePopoutShowInactiveSuccess?.();
                  },
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: function (e) {
                      let { update: t } = e;
                      eu = { ...eu, ...t };
                  },
                  OVERLAY_UI_FOCUSED_PID: function (e) {
                      let { pid: t, windowHandle: n } = e;
                      (ei = t),
                          eg(),
                          null != n && null != t && e_(t, (0, w.Oy)(n)),
                          null != J &&
                              (null != n || J.version?.() > 0) &&
                              J.setRenderingWindowHandle?.((0, w.Oy)(n ?? "0"), t);
                  },
                  OVERLAY_V3_PRE_CREATE_POPOUT: function () {
                      ec(), (ea = null);
                  },
                  OVERLAY_V3_POST_CREATE_POPOUT: function (e) {
                      let { createWindowTriggeringPID: t } = e;
                      (eu = { ...eu, popoutOpened: !0 }), ef(t), (es = t), (en = t), (0, _.setPID)(t);
                  },
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function (e) {
                      let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
                      s.A.updateOverlayState(
                          t,
                          c.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
                          "handleOverlayCreateWindowHandleSuccess",
                      );
                  },
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: function (e) {
                      let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: i } = e;
                      s.A.updateOverlayState(t, c.AR.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
                          (eu = { ...eu, errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n }),
                          (0, h._r)(t, "renderer_window_mounting_failed", { error: n, popoutInitializationStages: eu });
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      (J = A.A.getNativeModule()), em();
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      J = null;
                  },
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function (e) {
                      let { refreshingPID: t } = e;
                      return (
                          X.verbose(`Refreshing OOP host window for pid ${t}`),
                          (er = t),
                          (es = t),
                          (en = t),
                          (0, _.setPID)(t),
                          ef(t),
                          eg(),
                          !0
                      );
                  },
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                      var e;
                      eA(),
                          null != es && null != ed[(e = es)] && (ed[e] = new Set()),
                          (es = null),
                          (en = null),
                          (0, _.setPID)(_.UNSET_PID),
                          ec();
                  },
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: function (e) {
                      let { pid: t, windowHandle: n, windowClass: i } = e;
                      null != i && E.has(i)
                          ? eA()
                          : (ep(t, null != n ? (0, w.Oy)(n) : null),
                            t !== ee && X.info("OverlayStore: Focused new PID", t));
                  },
                  OVERLAY_V3_NATIVE_FOCUS_LOST: function () {
                      eA();
                  },
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: function (e) {
                      let { pid: t } = e;
                      Q.add(t), eI(t);
                  },
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: function (e) {
                      let { initialized: t } = e;
                      if (((eu = { ...eu, windowHandleSentToNative: t }), t)) {
                          let e = en ?? _.UNSET_PID;
                          eu.reactInitializationStarted
                              ? s.A.updateOverlayState(
                                    e,
                                    c.AR.WAITING_FOR_SUCCESSFUL_SHOW,
                                    "handleOverlayV3WindowHandleInitialized",
                                )
                              : s.A.updateOverlayState(
                                    e,
                                    c.AR.WAITING_FOR_REACT_INITIALIZATION,
                                    "handleOverlayV3WindowHandleInitialized",
                                ),
                              (0, h._r)(e, "window_handle_initialized");
                      }
                  },
              },
    ),
    eO = eR;
