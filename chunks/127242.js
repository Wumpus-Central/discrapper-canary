"use strict";
let i;
n.d(t, { A: () => R }), n(321073);
var r = n(812729),
    a = n.n(r),
    s = n(17928),
    l = n(713402),
    o = n(228366),
    d = n(935208),
    c = n(9302),
    u = n(206885),
    _ = n(181435),
    E = n(614455);
let A = null,
    h = new Set(),
    I = null,
    f = null,
    p = new d.SnowflakeSequence();
function T(e) {
    return (0, _.Vx)(e) ? `native-${e.id}` : null != e.nativeId ? `native-${e.nativeId}` : null;
}
function m(e) {
    let t = Math.floor(e);
    try {
        return p.willOverflowNext() && p.reset(), d.default.fromTimestampWithSequence(t, p);
    } catch {
        return p.reset(), d.default.fromTimestampWithSequence(t, p);
    }
}
let g = new l.J(
        function (e) {
            let t = [e.type, e.pid?.toString() ?? "null-pid"],
                n = T(e);
            return null != n && t.push(n), t;
        },
        function (e) {
            return -e.timestamp;
        },
    ),
    S = 0;
function N(e) {
    return g.set(e.id, e);
}
class C extends s.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(E.A);
    }
    getDebuggingState() {
        return i;
    }
    hasRenderDebugMode(e) {
        return h.has(e);
    }
    getRenderDebugModes() {
        return h;
    }
    getOverlayLoggingBreadcrumbs(e) {
        return [g.values(e, !0), g.version];
    }
    isModuleLoggingEnabled() {
        return null != f;
    }
    isStateDebuggingEnabled() {
        return null != I;
    }
}
let O = new C(
        o.h,
        __OVERLAY__ || !u.O
            ? {}
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      A = E.A.getNativeModule();
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      A = null;
                  },
                  OVERLAY_SET_STATE_DEBUGGING: function (e) {
                      let { enabled: t } = e;
                      return (
                          t
                              ? null == I &&
                                (I = setInterval(() => {
                                    A?.getDebuggingState?.((e) => {
                                        a()(i, e) || ((i = e), O.emitChange());
                                    });
                                }, 300))
                              : null != I && (clearInterval(I), (I = null)),
                          !0
                      );
                  },
                  OVERLAY_RENDER_DEBUG_MODE: function (e) {
                      let { enabled: t, mode: n } = e;
                      t ? h.add(n) : h.delete(n), (h = new Set(h));
                  },
                  OVERLAY_SET_DETAILED_LOGGING: function (e) {
                      let { enabled: t } = e;
                      A?.setDetailedLogging?.(t);
                  },
                  OVERLAY_ADD_DEBUG_BREADCRUMB: function (e) {
                      let {
                          breadcrumb: { pid: t, name: n, data: i, type: r, logType: a },
                      } = e;
                      return (
                          !(function (e, t, n, i) {
                              let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _.QJ.Info,
                                  a = performance.timeOrigin + performance.now(),
                                  s = m(a);
                              N({
                                  id: s,
                                  key: s,
                                  nativeId: null,
                                  timestamp: a,
                                  name: e,
                                  data: t,
                                  type: n,
                                  pid: i,
                                  logType: r,
                                  stack: void 0,
                              });
                          })(n, i ?? {}, r, t, a),
                          !0
                      );
                  },
                  OVERLAY_SET_MODULE_LOGGING: function (e) {
                      let { enabled: t } = e;
                      return (
                          t
                              ? null == f &&
                                (f = setInterval(() => {
                                    let e = A?.getLastAssociatedPID() ?? null;
                                    A?.getNativeBreadcrumbs({ minBreadcrumbId: S }, (t) => {
                                        let { breadcrumbs: n } = t;
                                        for (let t of n)
                                            !(function (e, t, n) {
                                                let i,
                                                    r = T(e);
                                                if (null == r) throw Error("Native breadcrumb has no native id");
                                                g.size(r) > 0 ||
                                                    ((S = Math.max(S, Number(e.id))),
                                                    N({
                                                        id: (i = m(e.timestamp)),
                                                        key: i,
                                                        nativeId: Number(e.id),
                                                        timestamp: e.timestamp,
                                                        name: e.name,
                                                        data: e.data,
                                                        type: t,
                                                        pid: n,
                                                        logType: _.QJ.Info,
                                                        stack: Error().stack ?? "",
                                                    }));
                                            })(t, _.ON.NativeOOP, e ?? c.UNSET_PID);
                                        O.emitChange();
                                    });
                                }, 3e3))
                              : null != f && (clearInterval(f), (f = null)),
                          !0
                      );
                  },
              },
    ),
    R = O;
