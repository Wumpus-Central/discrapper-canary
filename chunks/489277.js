"use strict";
n.d(t, { A: () => eL });
var i = n(17928),
    r = n(228366),
    a = n(684013),
    s = n(626584),
    l = n(952818),
    o = n(280450),
    d = n(38502),
    c = n(9302),
    u = n(206885),
    _ = n(41984);
let E = new Set(["SplashScreenClass"]);
var A = n(682763),
    h = n(174459),
    I = n(777334),
    f = n(296027),
    p = n(515183),
    T = n(614455),
    m = n(652215);
let g = {};
function S(e) {
    return f.default.getTrackedGameByPid(e)?.overlayMethod ?? null;
}
function N(e) {
    return g[e] ?? {};
}
function C(e, t) {
    let n = g[e]?.error,
        i = g[e]?.error_description;
    (g[e] = { ...g[e], ...t }), null != n && (g[e].error = n), null != i && (g[e].error_description = i);
}
function R(e, t) {
    let n = l.Ay.getGameOrTransformedSubgameForPID(e);
    return { crash_type: t, gameName: n?.name };
}
class O extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Analytics-Store";
    initialize() {
        this.waitFor(f.default, T.A, l.Ay);
    }
    getData(e) {
        return N(e);
    }
    getCrashExtra(e, t) {
        return R(e, t);
    }
}
let L = new O(
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
                  if (t !== c.UNSET_PID) return h.default.track(m.HAw.OVERLAY_HOOK_RESULT, N(t)), (g = {}), !0;
              },
              OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                  let t,
                      { pid: n } = e,
                      i = N(n)?.mounting_started_at ?? new Date().getTime();
                  return (
                      C(n, { total_mount_time_ms: null != i ? new Date().getTime() - i : void 0, success: !0 }),
                      (t = S(n)),
                      (g[n] = { ...g[n], overlay_method: null != t ? _.Ue[t] : _.Ue[_.Ue.OutOfProcess] }),
                      !0
                  );
              },
              OVERLAY_CRASHED: function (e) {
                  let { pid: t, error: n, crashType: i } = e,
                      r = n instanceof Error ? n : Error(n ?? "Unknown error");
                  return (
                      "native" === i
                          ? (t !== c.UNSET_PID &&
                                C(t, { host_crash_count: 1, error: r.message, error_description: r.stack }),
                            (0, I.St)(r, _.Ue.OutOfProcess, { extra: R(t, "host") }))
                          : (t !== c.UNSET_PID &&
                                C(t, { renderer_crash_count: 1, error: r.message, error_description: r.stack }),
                            (0, I.St)(r, _.Ue.OutOfProcess, { extra: R(t, "renderer") })),
                      !0
                  );
              },
              OVERLAY_V3_NATIVE_TRACK_GAME: function (e) {
                  let { pid: t } = e;
                  return (
                      !(function (e) {
                          if (null != g[e]) return;
                          let t = l.Ay.getGameOrTransformedSubgameForPID(e),
                              n = S(e);
                          g[e] = {
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
var y = n(812729),
    D = n.n(y),
    v = n(941426),
    b = n(567249),
    M = n(96175),
    P = n(392164);
let U = new v.Vy("OverlayV3NativeClickZoneStore"),
    w = null,
    G = [],
    x = [],
    k = {},
    F = !1;
function V(e, t) {
    if (null == w) return void U.error("Overlay module not found");
    let n = w?.getLastAssociatedPID() ?? c.UNSET_PID;
    try {
        let i,
            r =
                ((i = setTimeout(() => {
                    !(function (e) {
                        let t = Object.keys(k).filter((t) => k[t] === e);
                        for (let n of (null != e && clearTimeout(e), t)) delete k[n];
                        let n = x.filter((e) => !t.includes(e.name));
                        (x.length > 0 && 0 === G.length) || ((G = n), V(n, "timer_expired")), (x = [...n]);
                    })(i);
                }, 3e4)),
                e.map((e) => {
                    let t = { name: e.name, left: e.left, top: e.top, right: e.right, bottom: e.bottom },
                        n = k[e.name];
                    return null != n && clearTimeout(n), (k[e.name] = i), t;
                }));
        D()(e, G) || (0, A._r)(n, "capture_zones_set", { source: t, capture_zones: r, rawZones: e }),
            w.setCaptureZones(r);
    } catch (e) {
        U.error("Error setting capture zones:", e);
    }
}
function B(e) {
    for (let e of Object.values(k)) null != e && clearTimeout(e);
    (k = {}), (G = []), (x = []), V([], e);
}
function H(e, t, n, i) {
    let r = b.A.getWindow(P.f);
    if (null == r) return;
    let a = Math.ceil(n * r.innerWidth),
        s = Math.ceil(i * r.innerHeight),
        l = new MouseEvent((0, M.Br)(t), { screenX: a, screenY: s, clientX: a, clientY: s, bubbles: !0, view: r }),
        o = r.document.elementFromPoint(a, s);
    null != o && o.dispatchEvent(l);
}
class j extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(T.A, b.A);
    }
    getClickZones() {
        return G;
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
                  return null == (w = T.A.getNativeModule()) || !!F || ((F = !0), w.setCaptureZoneCallback(H), !0);
              },
              OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                  return (w = null), !0;
              },
              OVERLAY_SET_CLICK_ZONES: function (e) {
                  let { zones: t } = e;
                  return (
                      !(function (e, t) {
                          if (!T.A.isOverlayEnabled) {
                              if (0 === G.length) return;
                              B("overlay_disabled");
                              return;
                          }
                          V(e, t), (G = e), (x = [...e]);
                      })(t, "set_click_zones"),
                      !0
                  );
              },
              OVERLAY_FOCUSED: function (e) {
                  let { pid: t } = e;
                  return (
                      0 === t
                          ? 0 !== G.length && ((x = [...G]), (G = []), V([], "store_click_zones"))
                          : G.length > 0 || V((G = [...x]), "refresh_click_zones"),
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
    $ = n(127242),
    z = n(905555),
    Z = n(394072),
    q = n(644434);
let X = new s.A("OverlayV3Store"),
    Q = new Set(),
    J = new Set(),
    ee = null,
    et = null,
    en = null,
    ei = null,
    er = null,
    ea = null,
    es = null,
    el = null,
    eo = {},
    ed = {},
    ec = {};
function eu(e, t) {
    null == ec[e] && (ec[e] = new Set()), ec[e].add(t);
}
let e_ = (0, M.I2)();
function eE() {
    e_ = (0, M.I2)();
}
function eA(e, t) {
    if (null != ee) {
        null != t && (ed[e] = t);
        try {
            if ((ee.trackGame(e), Q.has(e))) return;
            Q.add(e),
                (0, A.dK)(e, "maybeTrackGame", { newOverlayMethod: null != t ? _.Ue[t] : null }),
                a.A.updateOverlayState(e, _.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame");
        } catch (t) {
            X.error("Error tracking game:", t), (0, A.mD)(e, t, { crashType: "renderer" });
        }
    }
}
function eh(e) {
    if (!Q.has(e)) return;
    let t = ed[e],
        n = eo[e];
    (0, A.dK)(e, "removeTrackedGame", { overlayMethod: null != t ? _.Ue[t] : null, overlayState: n }),
        Q.delete(e),
        delete eo[e],
        delete ed[e],
        J.delete(e);
    try {
        if (null == ee) return;
        ee.untrackGame(e), X.verbose(`Removing tracked game ${e}`);
        let t = Q.values().next().value;
        es === e && (es = t ?? null);
    } catch (t) {
        X.error("Error removing tracked game:", t), (0, A.mD)(e, t, { crashType: "native" });
    }
}
async function eI() {
    if (!T.A.isOverlayEnabled)
        return void (function () {
            try {
                for (let e of Q) ee?.untrackGame(e);
                Q.clear(),
                    (0, A._r)(null, "clearTrackedGames"),
                    (eo = {}),
                    (ed = {}),
                    J.clear(),
                    X.verbose("Cleared all tracked games");
            } catch (e) {
                X.error("Error clearing tracked games:", e), (0, A.mD)(c.UNSET_PID, e, { crashType: "native" });
            }
        })();
    await eS();
    let e = new Set(
        l.Ay.getRunningGames()
            .filter((e) => l.Ay.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...Q].filter((t) => !e.has(t)))) eh(t);
    for (let e of Q) eA(e);
}
function ef(e) {
    let t = l.Ay.getGameOrTransformedSubgameForPID(e);
    a.A.setAssociatedGame(es ?? c.UNSET_PID, e, t);
}
function ep() {
    null == ea ||
        er !== ea ||
        (null != ee &&
            ((ea = null),
            (0, A.dK)(er, "renderer_window_refreshing_finished"),
            ee.readyToShow?.(er),
            a.A.updateOverlayState(er, _.AR.OVERLAY_RENDERING, "checkPopoutRefresh"),
            X.verbose(`Showing overlay v3 for pid ${er}`)));
}
function eT(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = ed[e] === _.Ue.OutOfProcessLimitedInteraction;
        if (t !== el) {
            el = t;
            try {
                "function" == typeof ee?.setLimitedInteraction
                    ? (X.info("Setting limited interaction", t),
                      (0, A._r)(e, "focus_and_interaction_set", { isLimitedInteraction: t, focusable: !t }),
                      ee.setLimitedInteraction(t))
                    : X.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                X.error("Error setting limited interaction mode:", t), (0, A.mD)(e, t, { crashType: "native" });
            }
        }
    }
    a.A.setFocusedPID(0 === e ? null : e, t, n);
}
function em() {
    eT(null, null, !0);
}
function eg(e) {
    if (e_.allDone) {
        if (!J.has(e))
            return void a.A.updateOverlayState(e, _.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        a.A.successfullyShown(e);
    }
}
async function eS() {
    T.A.isModuleLoaded || T.A.isModuleLoading || (await (0, A.P_)()), (ee = await (0, z.N)());
}
async function eN(e) {
    e.overlayMethod === _.Ue.OutOfProcess || e.overlayMethod === _.Ue.OutOfProcessLimitedInteraction
        ? (await eS(), eA(e.pid, e.overlayMethod))
        : eh(e.pid),
        eO.emitChange();
}
function eC(e) {
    let { pid: t, windowHandle: n } = e;
    return (
        null != n && null != t && eu(t, (0, M.Oy)(n)),
        (et !== t || en !== n) &&
            (0, A._r)(t ?? et ?? c.UNSET_PID, "overlay_focused", {
                focusedPID: t,
                focusedWindowHandle: en,
                windowHandle: n,
            }),
        (et = t),
        (en = n),
        !0
    );
}
class eR extends i.Ay.Store {
    static displayName = "Overlay-V3-Store";
    initialize() {
        this.waitFor(o.default, d.A, L, W, Y.A, K.A, $.A, T.A, l.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return Q.has(e);
    }
    getWidgetByType(e) {
        let t = d.A.getLayout(q.G);
        if (null != t) {
            let n = t.widgets.find((t) => {
                let n = d.A.getWidget(t);
                return null != n && n.type === e;
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
        return (0, Z.LK)() && (ei === c.UNSET_PID || null == ei) ? c.DEV_PID : (ei ?? c.UNSET_PID);
    }
    getFocusedPID() {
        return et;
    }
    getNativeLimitedInteraction() {
        return el;
    }
    getFocusedWindowHandle() {
        return en;
    }
    getKnownWindowHandlesForPID(e) {
        return null == ec[e] ? null : ec[e];
    }
    isFocused(e) {
        return null != et && e !== c.UNSET_PID && (!!Q.has(e) || e === c.DEV_PID) && et === e;
    }
    getFocusedRunningGame() {
        return null == et ? null : (l.Ay.getGameOrTransformedSubgameForPID(et) ?? null);
    }
    getPopoutInitializationStages() {
        return e_;
    }
    isWindowHandleInitialized() {
        return e_.windowHandleSentToNative;
    }
    isReady(e) {
        return !!Q.has(e) && eo[e] === _.AR.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        return eo[e] ?? null;
    }
    getIsOverlayPreShown(e) {
        let t = eo[e];
        return null != t && M.Ms.has(t);
    }
    getOverlayMethod(e) {
        return ed[e] ?? null;
    }
}
let eO = new eR(
        r.h,
        __OVERLAY__ || !u.O
            ? { OVERLAY_FOCUSED: eC }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: function (e) {
                      X.verbose("Updating OverlayMethod", e), eN(e);
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      eo[e.pid] = e.overlayState;
                  },
                  OVERLAY_FOCUSED: eC,
                  OVERLAY_OOP_UI_INITIALIZED: function () {
                      (e_ = { ...e_, allDone: !0 }),
                          Q.forEach((e) => {
                              eg(e);
                          });
                  },
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: function () {
                      (e_ = { ...e_, showInactiveCalled: !0 }), ee?.onNativePopoutShowInactiveSuccess?.();
                  },
                  OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: function (e) {
                      let { update: t } = e;
                      e_ = { ...e_, ...t };
                  },
                  OVERLAY_UI_FOCUSED_PID: function (e) {
                      let { pid: t, windowHandle: n } = e;
                      (er = t),
                          ep(),
                          null != n && null != t && eu(t, (0, M.Oy)(n)),
                          null != ee &&
                              (null != n || ee.version?.() > 0) &&
                              ee.setRenderingWindowHandle?.((0, M.Oy)(n ?? "0"), t);
                  },
                  OVERLAY_V3_PRE_CREATE_POPOUT: function () {
                      eE(), (el = null);
                  },
                  OVERLAY_V3_POST_CREATE_POPOUT: function (e) {
                      let { createWindowTriggeringPID: t } = e;
                      (e_ = { ...e_, popoutOpened: !0 }), ef(t), (es = t), (ei = t), (0, c.setPID)(t);
                  },
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function (e) {
                      let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
                      a.A.updateOverlayState(
                          t,
                          _.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
                          "handleOverlayCreateWindowHandleSuccess",
                      );
                  },
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: function (e) {
                      let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: i } = e;
                      a.A.updateOverlayState(t, _.AR.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
                          (e_ = { ...e_, errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + n }),
                          (0, A._r)(t, "renderer_window_mounting_failed", { error: n, popoutInitializationStages: e_ });
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      (ee = T.A.getNativeModule()), eI();
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      ee = null;
                  },
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function (e) {
                      let { refreshingPID: t } = e;
                      return (
                          X.verbose(`Refreshing OOP host window for pid ${t}`),
                          (ea = t),
                          (es = t),
                          (ei = t),
                          (0, c.setPID)(t),
                          ef(t),
                          ep(),
                          !0
                      );
                  },
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                      var e;
                      em(),
                          null != es && null != ec[(e = es)] && (ec[e] = new Set()),
                          (es = null),
                          (ei = null),
                          (0, c.setPID)(c.UNSET_PID),
                          (el = null),
                          eE();
                  },
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: function (e) {
                      let { pid: t, windowHandle: n, windowClass: i } = e;
                      null != i && E.has(i)
                          ? em()
                          : (eT(t, null != n ? (0, M.Oy)(n) : null),
                            t !== et && X.info("OverlayStore: Focused new PID", t));
                  },
                  OVERLAY_V3_NATIVE_FOCUS_LOST: function () {
                      em();
                  },
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: function (e) {
                      let { pid: t } = e;
                      J.add(t), eg(t);
                  },
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: function (e) {
                      let { initialized: t } = e;
                      if (((e_ = { ...e_, windowHandleSentToNative: t }), t)) {
                          let e = ei ?? c.UNSET_PID;
                          e_.reactInitializationStarted
                              ? a.A.updateOverlayState(
                                    e,
                                    _.AR.WAITING_FOR_SUCCESSFUL_SHOW,
                                    "handleOverlayV3WindowHandleInitialized",
                                )
                              : a.A.updateOverlayState(
                                    e,
                                    _.AR.WAITING_FOR_REACT_INITIALIZATION,
                                    "handleOverlayV3WindowHandleInitialized",
                                ),
                              (0, A._r)(e, "window_handle_initialized");
                      }
                  },
              },
    ),
    eL = eO;
