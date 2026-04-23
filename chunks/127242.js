"use strict";
let i;
n.d(t, { A: () => O }), n(321073);
var r = n(812729),
    s = n.n(r),
    a = n(17928),
    o = n(713402),
    l = n(228366),
    d = n(935208),
    _ = n(9302),
    u = n(206885),
    c = n(181435),
    E = n(680243);
let h = null,
    m = new Set(),
    f = null,
    g = null,
    p = new d.SnowflakeSequence();
function A(e) {
    return (0, c.Vx)(e) ? `native-${e.id}` : null != e.nativeId ? `native-${e.nativeId}` : null;
}
function I(e) {
    let t = Math.floor(e);
    try {
        return p.willOverflowNext() && p.reset(), d.default.fromTimestampWithSequence(t, p);
    } catch {
        return p.reset(), d.default.fromTimestampWithSequence(t, p);
    }
}
let T = new o.J(
        function (e) {
            let t = [e.type, e.pid?.toString() ?? "null-pid"],
                n = A(e);
            return null != n && t.push(n), t;
        },
        function (e) {
            return -e.timestamp;
        },
    ),
    S = 0;
function N(e) {
    return T.set(e.id, e);
}
class C extends a.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(E.A);
    }
    getDebuggingState() {
        return i;
    }
    hasRenderDebugMode(e) {
        return m.has(e);
    }
    getRenderDebugModes() {
        return m;
    }
    getOverlayLoggingBreadcrumbs(e) {
        return [T.values(e, !0), T.version];
    }
    isModuleLoggingEnabled() {
        return null != g;
    }
    isStateDebuggingEnabled() {
        return null != f;
    }
}
let R = new C(
        l.h,
        __OVERLAY__ || !u.O
            ? {}
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      h = E.A.getNativeModule();
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      h = null;
                  },
                  OVERLAY_SET_STATE_DEBUGGING: function (e) {
                      let { enabled: t } = e;
                      return (
                          t
                              ? null == f &&
                                (f = setInterval(() => {
                                    h?.getDebuggingState?.((e) => {
                                        s()(i, e) || ((i = e), R.emitChange());
                                    });
                                }, 300))
                              : null != f && (clearInterval(f), (f = null)),
                          !0
                      );
                  },
                  OVERLAY_RENDER_DEBUG_MODE: function (e) {
                      let { enabled: t, mode: n } = e;
                      t ? m.add(n) : m.delete(n), (m = new Set(m));
                  },
                  OVERLAY_SET_DETAILED_LOGGING: function (e) {
                      let { enabled: t } = e;
                      h?.setDetailedLogging?.(t);
                  },
                  OVERLAY_ADD_DEBUG_BREADCRUMB: function (e) {
                      let {
                          breadcrumb: { pid: t, name: n, data: i, type: r, logType: s },
                      } = e;
                      return (
                          !(function (e, t, n, i) {
                              let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : c.QJ.Info,
                                  s = performance.timeOrigin + performance.now(),
                                  a = I(s);
                              N({
                                  id: a,
                                  key: a,
                                  nativeId: null,
                                  timestamp: s,
                                  name: e,
                                  data: t,
                                  type: n,
                                  pid: i,
                                  logType: r,
                                  stack: void 0,
                              });
                          })(n, i ?? {}, r, t, s),
                          !0
                      );
                  },
                  OVERLAY_SET_MODULE_LOGGING: function (e) {
                      let { enabled: t } = e;
                      return (
                          t
                              ? null == g &&
                                (g = setInterval(() => {
                                    let e = h?.getLastAssociatedPID() ?? null;
                                    h?.getNativeBreadcrumbs({ minBreadcrumbId: S }, (t) => {
                                        let { breadcrumbs: n } = t;
                                        for (let t of n)
                                            !(function (e, t, n) {
                                                let i,
                                                    r = A(e);
                                                if (null == r) throw Error("Native breadcrumb has no native id");
                                                T.size(r) > 0 ||
                                                    ((S = Math.max(S, Number(e.id))),
                                                    N({
                                                        id: (i = I(e.timestamp)),
                                                        key: i,
                                                        nativeId: Number(e.id),
                                                        timestamp: e.timestamp,
                                                        name: e.name,
                                                        data: e.data,
                                                        type: t,
                                                        pid: n,
                                                        logType: c.QJ.Info,
                                                        stack: Error().stack ?? "",
                                                    }));
                                            })(t, c.ON.NativeOOP, e ?? _.UNSET_PID);
                                        R.emitChange();
                                    });
                                }, 3e3))
                              : null != g && (clearInterval(g), (g = null)),
                          !0
                      );
                  },
              },
    ),
    O = R;
