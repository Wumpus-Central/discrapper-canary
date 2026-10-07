n.d(t, { A: () => eR });
var i = n(17928),
    r = n(73153),
    a = n(684013),
    s = n(626584),
    l = n(952818),
    o = n(280450),
    d = n(38502),
    c = n(9302),
    u = n(206885),
    _ = n(41984);
let E = new Set(["SplashScreenClass"]);
var A = n(661886),
    h = n(682763),
    f = n(174459),
    I = n(777334),
    p = n(296027),
    T = n(515183),
    m = n(950869);
n(672396);
var g = n(652215);
let S = {};
function N(e) {
    return p.default.getTrackedGameByPid(e)?.overlayMethod ?? null;
}
function C(e) {
    return S[e] ?? {};
}
function O(e, t) {
    let n = S[e]?.error,
        i = S[e]?.error_description;
    ((S[e] = { ...S[e], ...t }), null != n && (S[e].error = n), null != i && (S[e].error_description = i));
}
function R(e, t) {
    let n = l.Ay.getGameOrTransformedSubgameForPID(e);
    return { crash_type: t, gameName: n?.name };
}
class L extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Analytics-Store";
    initialize() {
        this.waitFor(p.default, m.A, l.Ay);
    }
    getData(e) {
        return C(e);
    }
    getCrashExtra(e, t) {
        return R(e, t);
    }
}
let y = new L(
    r.h,
    __OVERLAY__ || !u.O
        ? {}
        : {
              OVERLAY_V3_PRE_CREATE_POPOUT: function (e) {
                  let { createWindowTriggeringPID: t } = e;
                  return (O(t, { mounting_started_at: new Date().getTime() }), !0);
              },
              OVERLAY_V3_POST_CREATE_POPOUT: function (e) {
                  let { createWindowTriggeringPID: t } = e,
                      n = C(t)?.mounting_started_at ?? new Date().getTime(),
                      i = {
                          renderer_started: !0,
                          fullscreen_type: (0, T.ph)(t),
                          graphics_info_after: new Date().getTime() - n,
                      };
                  return (O(t, i), !0);
              },
              OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function (e) {
                  let { createWindowTriggeringPID: t } = e,
                      n = C(t)?.mounting_started_at ?? new Date().getTime();
                  return (O(t, { renderer_started_after: new Date().getTime() - n }), !0);
              },
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function (e) {
                  let { lastAssociatedPID: t } = e;
                  if (-1 !== t) return (f.default.track(g.HAw.OVERLAY_HOOK_RESULT, C(t)), (S = {}), !0);
              },
              OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                  let t,
                      { pid: n } = e,
                      i = C(n)?.mounting_started_at ?? new Date().getTime();
                  return (
                      O(n, { total_mount_time_ms: null != i ? new Date().getTime() - i : void 0, success: !0 }),
                      (t = N(n)),
                      (S[n] = { ...S[n], overlay_method: null != t ? _.Ue[t] : _.Ue[_.Ue.OutOfProcess] }),
                      !0
                  );
              },
              OVERLAY_CRASHED: function (e) {
                  let { pid: t, error: n, crashType: i } = e,
                      r = n instanceof Error ? n : Error(n ?? "Unknown error");
                  return (
                      "native" === i
                          ? (-1 !== t && O(t, { host_crash_count: 1, error: r.message, error_description: r.stack }),
                            (0, I.St)(r, _.Ue.OutOfProcess, { extra: R(t, "host") }))
                          : (-1 !== t &&
                                O(t, { renderer_crash_count: 1, error: r.message, error_description: r.stack }),
                            (0, I.St)(r, _.Ue.OutOfProcess, { extra: R(t, "renderer") })),
                      !0
                  );
              },
              OVERLAY_V3_NATIVE_TRACK_GAME: function (e) {
                  let { pid: t } = e;
                  return (
                      !(function (e) {
                          if (null != S[e]) return;
                          let t = l.Ay.getGameOrTransformedSubgameForPID(e),
                              n = N(e);
                          S[e] = {
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
var D = n(812729),
    v = n.n(D),
    b = n(941426),
    M = n(567249),
    P = n(96175),
    U = n(392164);
let w = new b.Vy("OverlayV3NativeClickZoneStore"),
    G = null,
    x = [],
    k = [],
    F = {},
    B = !1;
function V(e, t) {
    if (null == G) return void w.error("Overlay module not found");
    let n = G?.getLastAssociatedPID() ?? -1;
    try {
        let i,
            r =
                ((i = setTimeout(() => {
                    !(function (e) {
                        let t = Object.keys(F).filter((t) => F[t] === e);
                        for (let n of (null != e && clearTimeout(e), t)) delete F[n];
                        let n = k.filter((e) => !t.includes(e.name));
                        ((k.length > 0 && 0 === x.length) || ((x = n), V(n, "timer_expired")), (k = [...n]));
                    })(i);
                }, 3e4)),
                e.map((e) => {
                    let t = { name: e.name, left: e.left, top: e.top, right: e.right, bottom: e.bottom },
                        n = F[e.name];
                    return (null != n && clearTimeout(n), (F[e.name] = i), t);
                }));
        (v()(e, x) || (0, h._r)(n, "capture_zones_set", { source: t, capture_zones: r, rawZones: e }),
            G.setCaptureZones(r));
    } catch (e) {
        w.error("Error setting capture zones:", e);
    }
}
function H(e) {
    for (let e of Object.values(F)) null != e && clearTimeout(e);
    ((F = {}), (x = []), (k = []), V([], e));
}
function j(e, t, n, i) {
    let r = M.A.getWindow(U.f);
    if (null == r) return;
    let a = Math.ceil(n * r.innerWidth),
        s = Math.ceil(i * r.innerHeight),
        l = new MouseEvent((0, P.Br)(t), { screenX: a, screenY: s, clientX: a, clientY: s, bubbles: !0, view: r }),
        o = r.document.elementFromPoint(a, s);
    null != o && o.dispatchEvent(l);
}
class W extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(m.A, M.A);
    }
    getClickZones() {
        return x;
    }
    getFocusLostStoredClickZones() {
        return k;
    }
}
let Y = new W(
    r.h,
    __OVERLAY__ || !u.O
        ? {}
        : {
              OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                  return null == (G = m.A.getNativeModule()) || !!B || ((B = !0), G.setCaptureZoneCallback(j), !0);
              },
              OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                  return ((G = null), !0);
              },
              OVERLAY_SET_CLICK_ZONES: function (e) {
                  let { zones: t } = e;
                  return (
                      !(function (e, t) {
                          if (!m.A.isOverlayEnabled) {
                              if (0 === x.length) return;
                              H("overlay_disabled");
                              return;
                          }
                          (V(e, t), (x = e), (k = [...e]));
                      })(t, "set_click_zones"),
                      !0
                  );
              },
              OVERLAY_FOCUSED: function (e) {
                  let { pid: t } = e;
                  return (
                      0 === t
                          ? 0 !== x.length && ((k = [...x]), (x = []), V([], "store_click_zones"))
                          : x.length > 0 || V((x = [...k]), "refresh_click_zones"),
                      !0
                  );
              },
              OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function () {
                  return (H("refresh_host_window"), !0);
              },
              OVERLAY_CRASHED: function (e) {
                  return (H("crashed"), !0);
              },
          },
);
var K = n(321090),
    $ = n(127242),
    z = n(499979);
async function X() {
    let e,
        t = m.A.isModuleLoaded,
        n = m.A.getNativeModule();
    if (t && null != n) return (await (0, z.yy)(1e3), n);
    if (t && null == n) throw Error("Native module loaded but not found in store");
    let i = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5e3);
    });
    function a() {
        e?.();
    }
    let s = new Promise((t) => {
        ((e = t),
            r.h.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", a),
            r.h.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", a));
    });
    try {
        await Promise.race([i, s]);
    } finally {
        (r.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", a),
            r.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", a));
    }
    return m.A.getNativeModule();
}
var Z = n(394072),
    q = n(644434);
let Q = new s.A("OverlayV3Store"),
    J = new Set(),
    ee = new Set(),
    et = null,
    en = null,
    ei = null,
    er = null,
    ea = null,
    es = null,
    el = null,
    eo = null,
    ed = {},
    ec = {},
    eu = {};
function e_(e, t) {
    (null == eu[e] && (eu[e] = new Set()), eu[e].add(t));
}
function eE(e, t) {
    if (null != et) {
        null != t && (ec[e] = t);
        try {
            if ((et.trackGame(e), J.has(e))) return;
            (J.add(e),
                (0, h.dK)(e, "maybeTrackGame", { newOverlayMethod: null != t ? _.Ue[t] : null }),
                a.A.updateOverlayState(e, _.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame"));
        } catch (t) {
            (Q.error("Error tracking game:", t), (0, h.mD)(e, t, { crashType: "renderer" }));
        }
    }
}
function eA(e) {
    if (!J.has(e)) return;
    let t = ec[e],
        n = ed[e];
    ((0, h.dK)(e, "removeTrackedGame", { overlayMethod: null != t ? _.Ue[t] : null, overlayState: n }),
        J.delete(e),
        delete ed[e],
        delete ec[e],
        ee.delete(e));
    try {
        if (null == et) return;
        (et.untrackGame(e), Q.verbose(`Removing tracked game ${e}`));
        let t = J.values().next().value;
        el === e && (el = t ?? null);
    } catch (t) {
        (Q.error("Error removing tracked game:", t), (0, h.mD)(e, t, { crashType: "native" }));
    }
}
async function eh() {
    if (!m.A.isOverlayEnabled)
        return void (function () {
            try {
                for (let e of J) et?.untrackGame(e);
                (J.clear(),
                    (0, h._r)(null, "clearTrackedGames"),
                    (ed = {}),
                    (ec = {}),
                    ee.clear(),
                    Q.verbose("Cleared all tracked games"));
            } catch (e) {
                (Q.error("Error clearing tracked games:", e), (0, h.mD)(-1, e, { crashType: "native" }));
            }
        })();
    await eg();
    let e = new Set(
        l.Ay.getRunningGames()
            .filter((e) => l.Ay.getOverlayEnabledForGame(e))
            .map((e) => e.pid),
    );
    for (let t of new Set([...J].filter((t) => !e.has(t)))) eA(t);
    for (let e of J) eE(e);
}
function ef(e) {
    let t = l.Ay.getGameOrTransformedSubgameForPID(e);
    a.A.setAssociatedGame(el ?? -1, e, t);
}
function eI() {
    null == es ||
        ea !== es ||
        (null != et &&
            ((es = null),
            (0, h.dK)(ea, "renderer_window_refreshing_finished"),
            et.readyToShow?.(ea),
            a.A.updateOverlayState(ea, _.AR.OVERLAY_RENDERING, "checkPopoutRefresh"),
            Q.verbose(`Showing overlay v3 for pid ${ea}`)));
}
function ep(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = ec[e] === _.Ue.OutOfProcessLimitedInteraction;
        if (t !== eo) {
            eo = t;
            try {
                "function" == typeof et?.setLimitedInteraction
                    ? (Q.info("Setting limited interaction", t),
                      (0, h._r)(e, "focus_and_interaction_set", { isLimitedInteraction: t, focusable: !t }),
                      et.setLimitedInteraction(t))
                    : Q.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                (Q.error("Error setting limited interaction mode:", t), (0, h.mD)(e, t, { crashType: "native" }));
            }
        }
    }
    a.A.setFocusedPID(0 === e ? null : e, t, n);
}
function eT() {
    ep(null, null, !0);
}
function em(e) {
    if (A.A.getPopoutInitializationStages().allDone) {
        if (!ee.has(e))
            return void a.A.updateOverlayState(e, _.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        a.A.successfullyShown(e);
    }
}
async function eg() {
    (m.A.isModuleLoaded || m.A.isModuleLoading || (await (0, h.P_)()), (et = await X()));
}
async function eS(e) {
    (e.overlayMethod === _.Ue.OutOfProcess || e.overlayMethod === _.Ue.OutOfProcessLimitedInteraction
        ? (await eg(), eE(e.pid, e.overlayMethod))
        : eA(e.pid),
        eO.emitChange());
}
function eN(e) {
    let { pid: t, windowHandle: n } = e;
    return (
        null != n && null != t && e_(t, (0, P.Oy)(n)),
        (en !== t || ei !== n) &&
            (0, h._r)(t ?? en ?? -1, "overlay_focused", { focusedPID: t, focusedWindowHandle: ei, windowHandle: n }),
        (en = t),
        (ei = n),
        !0
    );
}
class eC extends i.Ay.Store {
    static displayName = "Overlay-V3-Store";
    initialize() {
        this.waitFor(o.default, d.A, y, Y, K.A, $.A, m.A, A.A, l.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return J.has(e);
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
        return (0, Z.LK)() && (-1 === er || null == er) ? c.DEV_PID : (er ?? -1);
    }
    getFocusedPID() {
        return en;
    }
    getNativeLimitedInteraction() {
        return eo;
    }
    getFocusedWindowHandle() {
        return ei;
    }
    getKnownWindowHandlesForPID(e) {
        return null == eu[e] ? null : eu[e];
    }
    isFocused(e) {
        return null != en && -1 !== e && (!!J.has(e) || e === c.DEV_PID) && en === e;
    }
    getFocusedRunningGame() {
        return null == en ? null : (l.Ay.getGameOrTransformedSubgameForPID(en) ?? null);
    }
    isReady(e) {
        return !!J.has(e) && ed[e] === _.AR.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        return ed[e] ?? null;
    }
    getIsOverlayPreShown(e) {
        let t = ed[e];
        return null != t && P.Ms.has(t);
    }
    getOverlayMethod(e) {
        return ec[e] ?? null;
    }
}
let eO = new eC(
        r.h,
        __OVERLAY__ || !u.O
            ? { OVERLAY_FOCUSED: eN }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: function (e) {
                      (Q.verbose("Updating OverlayMethod", e), eS(e));
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      ed[e.pid] = e.overlayState;
                  },
                  OVERLAY_FOCUSED: eN,
                  OVERLAY_OOP_UI_INITIALIZED: function () {
                      J.forEach((e) => {
                          em(e);
                      });
                  },
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: function () {
                      et?.onNativePopoutShowInactiveSuccess?.();
                  },
                  OVERLAY_UI_FOCUSED_PID: function (e) {
                      let { pid: t, windowHandle: n } = e;
                      ((ea = t),
                          eI(),
                          null != n && null != t && e_(t, (0, P.Oy)(n)),
                          null != et &&
                              (null != n || et.version?.() > 0) &&
                              et.setRenderingWindowHandle?.((0, P.Oy)(n ?? "0"), t));
                  },
                  OVERLAY_V3_PRE_CREATE_POPOUT: function () {
                      eo = null;
                  },
                  OVERLAY_V3_POST_CREATE_POPOUT: function (e) {
                      let { createWindowTriggeringPID: t } = e;
                      (ef(t), (el = t), (er = t), (0, c.setPID)(t));
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
                      (a.A.updateOverlayState(t, _.AR.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
                          (0, h._r)(t, "renderer_window_mounting_failed", {
                              error: n,
                              popoutInitializationStages: A.A.getPopoutInitializationStages(),
                          }));
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      ((et = m.A.getNativeModule()), eh());
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      et = null;
                  },
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function (e) {
                      let { refreshingPID: t } = e;
                      return (
                          Q.verbose(`Refreshing OOP host window for pid ${t}`),
                          (es = t),
                          (el = t),
                          (er = t),
                          (0, c.setPID)(t),
                          ef(t),
                          eI(),
                          !0
                      );
                  },
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                      var e;
                      (eT(),
                          null != el && null != eu[(e = el)] && (eu[e] = new Set()),
                          (el = null),
                          (er = null),
                          (0, c.setPID)(-1),
                          (eo = null));
                  },
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: function (e) {
                      let { pid: t, windowHandle: n, windowClass: i } = e;
                      null != i && E.has(i)
                          ? eT()
                          : (ep(t, null != n ? (0, P.Oy)(n) : null),
                            t !== en && Q.info("OverlayStore: Focused new PID", t));
                  },
                  OVERLAY_V3_NATIVE_FOCUS_LOST: function () {
                      eT();
                  },
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: function (e) {
                      let { pid: t } = e;
                      (ee.add(t), em(t));
                  },
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: function (e) {
                      let { initialized: t } = e;
                      if (t) {
                          let e = er ?? -1;
                          (A.A.getPopoutInitializationStages().reactInitializationStarted
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
                              (0, h._r)(e, "window_handle_initialized"));
                      }
                  },
              },
    ),
    eR = eO;
