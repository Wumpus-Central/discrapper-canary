"use strict";
n.d(t, { A: () => eC });
var i = n(17928),
    r = n(228366),
    s = n(684013),
    a = n(626584),
    o = n(952818),
    l = n(495544),
    u = n(38502),
    c = n(9302),
    d = n(206885),
    _ = n(41984);
let h = new Set(["SplashScreenClass"]);
var f = n(682763),
    p = n(174459),
    E = n(777334),
    m = n(296027),
    g = n(515183),
    A = n(614455),
    I = n(652215);
let T = {};
function S(e) {
    return m.default.getTrackedGameByPid(e)?.overlayMethod ?? null;
}
function y(e) {
    return T[e] ?? {};
}
function N(e, t) {
    let n = T[e]?.error,
        i = T[e]?.error_description;
    (T[e] = { ...T[e], ...t }), null != n && (T[e].error = n), null != i && (T[e].error_description = i);
}
function v(e, t) {
    let n = o.Ay.getGameOrTransformedSubgameForPID(e);
    return { crash_type: t, gameName: n?.name };
}
class C extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Analytics-Store";
    initialize() {
        this.waitFor(m.default, A.A, o.Ay);
    }
    getData(e) {
        return y(e);
    }
    getCrashExtra(e, t) {
        return v(e, t);
    }
}
let R = new C(
    r.h,
    __OVERLAY__ || !d.O
        ? {}
        : {
              OVERLAY_V3_PRE_CREATE_POPOUT: function (e) {
                  let { createWindowTriggeringPID: t } = e;
                  return N(t, { mounting_started_at: new Date().getTime() }), !0;
              },
              OVERLAY_V3_POST_CREATE_POPOUT: function (e) {
                  let { createWindowTriggeringPID: t } = e,
                      n = y(t)?.mounting_started_at ?? new Date().getTime(),
                      i = {
                          renderer_started: !0,
                          fullscreen_type: (0, g.ph)(t),
                          graphics_info_after: new Date().getTime() - n,
                      };
                  return N(t, i), !0;
              },
              OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function (e) {
                  let { createWindowTriggeringPID: t } = e,
                      n = y(t)?.mounting_started_at ?? new Date().getTime();
                  return N(t, { renderer_started_after: new Date().getTime() - n }), !0;
              },
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function (e) {
                  let { lastAssociatedPID: t } = e;
                  if (t !== c.UNSET_PID) return p.default.track(I.HAw.OVERLAY_HOOK_RESULT, y(t)), (T = {}), !0;
              },
              OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                  let t,
                      { pid: n } = e,
                      i = y(n)?.mounting_started_at ?? new Date().getTime();
                  return (
                      N(n, { total_mount_time_ms: null != i ? new Date().getTime() - i : void 0, success: !0 }),
                      (t = S(n)),
                      (T[n] = { ...T[n], overlay_method: null != t ? _.Ue[t] : _.Ue[_.Ue.OutOfProcess] }),
                      !0
                  );
              },
              OVERLAY_CRASHED: function (e) {
                  let { pid: t, error: n, crashType: i } = e,
                      r = n instanceof Error ? n : Error(n ?? "Unknown error");
                  return (
                      "native" === i
                          ? (t !== c.UNSET_PID &&
                                N(t, { host_crash_count: 1, error: r.message, error_description: r.stack }),
                            (0, E.St)(r, _.Ue.OutOfProcess, { extra: v(t, "host") }))
                          : (t !== c.UNSET_PID &&
                                N(t, { renderer_crash_count: 1, error: r.message, error_description: r.stack }),
                            (0, E.St)(r, _.Ue.OutOfProcess, { extra: v(t, "renderer") })),
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
                              overlay_method: null != n ? _.Ue[n] : _.Ue[_.Ue.OutOfProcess],
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
var O = n(812729),
    b = n.n(O),
    D = n(941426),
    L = n(567249),
    w = n(96175),
    M = n(392164);
let P = new D.Vy("OverlayV3NativeClickZoneStore"),
    x = null,
    k = [],
    U = [],
    G = {},
    F = !1;
function V(e, t) {
    if (null == x) return void P.error("Overlay module not found");
    let n = x?.getLastAssociatedPID() ?? c.UNSET_PID;
    try {
        let i,
            r =
                ((i = setTimeout(() => {
                    !(function (e) {
                        let t = Object.keys(G).filter((t) => G[t] === e);
                        for (let n of (null != e && clearTimeout(e), t)) delete G[n];
                        let n = U.filter((e) => !t.includes(e.name));
                        (U.length > 0 && 0 === k.length) || ((k = n), V(n, "timer_expired")), (U = [...n]);
                    })(i);
                }, 3e4)),
                e.map((e) => {
                    let t = { name: e.name, left: e.left, top: e.top, right: e.right, bottom: e.bottom },
                        n = G[e.name];
                    return null != n && clearTimeout(n), (G[e.name] = i), t;
                }));
        b()(e, k) || (0, f._r)(n, "capture_zones_set", { source: t, capture_zones: r, rawZones: e }),
            x.setCaptureZones(r);
    } catch (e) {
        P.error("Error setting capture zones:", e);
    }
}
function B(e) {
    for (let e of Object.values(G)) null != e && clearTimeout(e);
    (G = {}), (k = []), (U = []), V([], e);
}
function H(e, t, n, i) {
    let r = L.A.getWindow(M.f);
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
        this.waitFor(A.A, L.A);
    }
    getClickZones() {
        return k;
    }
    getFocusLostStoredClickZones() {
        return U;
    }
}
let Y = new j(
    r.h,
    __OVERLAY__ || !d.O
        ? {}
        : {
              OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                  return null == (x = A.A.getNativeModule()) || !!F || ((F = !0), x.setCaptureZoneCallback(H), !0);
              },
              OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                  return (x = null), !0;
              },
              OVERLAY_SET_CLICK_ZONES: function (e) {
                  let { zones: t } = e;
                  return (
                      !(function (e, t) {
                          if (!A.A.isOverlayEnabled) {
                              if (0 === k.length) return;
                              B("overlay_disabled");
                              return;
                          }
                          V(e, t), (k = e), (U = [...e]);
                      })(t, "set_click_zones"),
                      !0
                  );
              },
              OVERLAY_FOCUSED: function (e) {
                  let { pid: t } = e;
                  return (
                      0 === t
                          ? 0 !== k.length && ((U = [...k]), (k = []), V([], "store_click_zones"))
                          : k.length > 0 || V((k = [...U]), "refresh_click_zones"),
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
var W = n(321090),
    K = n(222506),
    $ = n(127242),
    z = n(905555),
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
    eu = {};
function ec(e, t) {
    null == eu[e] && (eu[e] = new Set()), eu[e].add(t);
}
let ed = (0, w.I2)();
function e_() {
    ed = (0, w.I2)();
}
function eh(e, t) {
    if (null != J) {
        null != t && (el[e] = t);
        try {
            if ((J.trackGame(e), Z.has(e))) return;
            Z.add(e),
                (0, f.dK)(e, "maybeTrackGame", { newOverlayMethod: null != t ? _.Ue[t] : null }),
                s.A.updateOverlayState(e, _.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame");
        } catch (t) {
            X.error("Error tracking game:", t), (0, f.mD)(e, t, { crashType: "renderer" });
        }
    }
}
function ef(e) {
    if (!Z.has(e)) return;
    let t = el[e],
        n = eo[e];
    (0, f.dK)(e, "removeTrackedGame", { overlayMethod: null != t ? _.Ue[t] : null, overlayState: n }),
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
        X.error("Error removing tracked game:", t), (0, f.mD)(e, t, { crashType: "native" });
    }
}
async function ep() {
    if (!A.A.isOverlayEnabled)
        return void (function () {
            try {
                for (let e of Z) J?.untrackGame(e);
                Z.clear(),
                    (0, f._r)(null, "clearTrackedGames"),
                    (eo = {}),
                    (el = {}),
                    Q.clear(),
                    X.verbose("Cleared all tracked games");
            } catch (e) {
                X.error("Error clearing tracked games:", e), (0, f.mD)(c.UNSET_PID, e, { crashType: "native" });
            }
        })();
    await eT();
    let e = new Set(
        o.Ay.getRunningGames()
            .filter((e) => o.Ay.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...Z].filter((t) => !e.has(t)))) ef(t);
    for (let e of Z) eh(e);
}
function eE(e) {
    let t = o.Ay.getGameOrTransformedSubgameForPID(e);
    s.A.setAssociatedGame(es ?? c.UNSET_PID, e, t);
}
function em() {
    null == er ||
        ei !== er ||
        (null != J &&
            ((er = null),
            (0, f.dK)(ei, "renderer_window_refreshing_finished"),
            J.readyToShow?.(ei),
            s.A.updateOverlayState(ei, _.AR.OVERLAY_RENDERING, "checkPopoutRefresh"),
            X.verbose(`Showing overlay v3 for pid ${ei}`)));
}
function eg(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = el[e] === _.Ue.OutOfProcessLimitedInteraction;
        if (t !== ea) {
            ea = t;
            try {
                "function" == typeof J?.setLimitedInteraction
                    ? (X.info("Setting limited interaction", t),
                      (0, f._r)(e, "focus_and_interaction_set", { isLimitedInteraction: t, focusable: !t }),
                      J.setLimitedInteraction(t))
                    : X.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                X.error("Error setting limited interaction mode:", t), (0, f.mD)(e, t, { crashType: "native" });
            }
        }
    }
    s.A.setFocusedPID(0 === e ? null : e, t, n);
}
function eA() {
    eg(null, null, !0);
}
function eI(e) {
    if (ed.allDone) {
        if (!Q.has(e))
            return void s.A.updateOverlayState(e, _.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        s.A.successfullyShown(e);
    }
}
async function eT() {
    A.A.isModuleLoaded || A.A.isModuleLoading || (await (0, f.P_)()), (J = await (0, z.N)());
}
async function eS(e) {
    e.overlayMethod === _.Ue.OutOfProcess || e.overlayMethod === _.Ue.OutOfProcessLimitedInteraction
        ? (await eT(), eh(e.pid, e.overlayMethod))
        : ef(e.pid),
        ev.emitChange();
}
function ey(e) {
    let { pid: t, windowHandle: n } = e;
    return (
        null != n && null != t && ec(t, (0, w.Oy)(n)),
        (ee !== t || et !== n) &&
            (0, f._r)(t ?? ee ?? c.UNSET_PID, "overlay_focused", {
                focusedPID: t,
                focusedWindowHandle: et,
                windowHandle: n,
            }),
        (ee = t),
        (et = n),
        !0
    );
}
class eN extends i.Ay.Store {
    static displayName = "Overlay-V3-Store";
    initialize() {
        this.waitFor(l.default, u.A, R, Y, W.A, K.A, $.A, A.A, o.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return Z.has(e);
    }
    getWidgetByType(e) {
        let t = u.A.getLayout(q.G);
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
        return d.e && (en === c.UNSET_PID || null == en) ? c.DEV_PID : (en ?? c.UNSET_PID);
    }
    getFocusedPID() {
        return ee;
    }
    getFocusedWindowHandle() {
        return et;
    }
    getKnownWindowHandlesForPID(e) {
        return null == eu[e] ? null : eu[e];
    }
    isFocused(e) {
        return null != ee && e !== c.UNSET_PID && (!!Z.has(e) || e === c.DEV_PID) && ee === e;
    }
    getFocusedRunningGame() {
        return null == ee ? null : (o.Ay.getGameOrTransformedSubgameForPID(ee) ?? null);
    }
    getPopoutInitializationStages() {
        return ed;
    }
    isWindowHandleInitialized() {
        return ed.windowHandleSentToNative;
    }
    isReady(e) {
        return !!Z.has(e) && eo[e] === _.AR.OVERLAY_RENDERING;
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
let ev = new eN(
        r.h,
        __OVERLAY__ || !d.O
            ? { OVERLAY_FOCUSED: ey }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: function (e) {
                      X.verbose("Updating OverlayMethod", e), eS(e);
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      eo[e.pid] = e.overlayState;
                  },
                  OVERLAY_FOCUSED: ey,
                  OVERLAY_OOP_UI_INITIALIZED: function () {
                      (ed = { ...ed, allDone: !0 }),
                          Z.forEach((e) => {
                              eI(e);
                          });
                  },
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: function () {
                      (ed = { ...ed, showInactiveCalled: !0 }), J?.onNativePopoutShowInactiveSuccess?.();
                  },
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: function (e) {
                      let { update: t } = e;
                      ed = { ...ed, ...t };
                  },
                  OVERLAY_UI_FOCUSED_PID: function (e) {
                      let { pid: t, windowHandle: n } = e;
                      (ei = t),
                          em(),
                          null != n && null != t && ec(t, (0, w.Oy)(n)),
                          null != J &&
                              (null != n || J.version?.() > 0) &&
                              J.setRenderingWindowHandle?.((0, w.Oy)(n ?? "0"), t);
                  },
                  OVERLAY_V3_PRE_CREATE_POPOUT: function () {
                      e_(), (ea = null);
                  },
                  OVERLAY_V3_POST_CREATE_POPOUT: function (e) {
                      let { createWindowTriggeringPID: t } = e;
                      (ed = { ...ed, popoutOpened: !0 }), eE(t), (es = t), (en = t), (0, c.setPID)(t);
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
                      let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: i } = e;
                      s.A.updateOverlayState(t, _.AR.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
                          (ed = { ...ed, errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n }),
                          (0, f._r)(t, "renderer_window_mounting_failed", { error: n, popoutInitializationStages: ed });
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      (J = A.A.getNativeModule()), ep();
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
                          (0, c.setPID)(t),
                          eE(t),
                          em(),
                          !0
                      );
                  },
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                      var e;
                      eA(),
                          null != es && null != eu[(e = es)] && (eu[e] = new Set()),
                          (es = null),
                          (en = null),
                          (0, c.setPID)(c.UNSET_PID),
                          e_();
                  },
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: function (e) {
                      let { pid: t, windowHandle: n, windowClass: i } = e;
                      null != i && h.has(i)
                          ? eA()
                          : (eg(t, null != n ? (0, w.Oy)(n) : null),
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
                      if (((ed = { ...ed, windowHandleSentToNative: t }), t)) {
                          let e = en ?? c.UNSET_PID;
                          ed.reactInitializationStarted
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
                              (0, f._r)(e, "window_handle_initialized");
                      }
                  },
              },
    ),
    eC = ev;
