"use strict";
let r;
n.d(t, { A: () => C }), n(321073);
var i = n(812729),
    s = n.n(i),
    a = n(311907),
    o = n(713402),
    l = n(73153),
    u = n(661191),
    c = n(9302),
    d = n(206885),
    _ = n(181435),
    f = n(680243);
let p = null,
    h = new Set(),
    E = null,
    m = null,
    g = new u.SnowflakeSequence();
function A(e) {
    return (0, _.Vx)(e) ? `native-${e.id}` : null != e.nativeId ? `native-${e.nativeId}` : null;
}
function I(e) {
    let t = Math.floor(e);
    try {
        return g.willOverflowNext() && g.reset(), u.default.fromTimestampWithSequence(t, g);
    } catch {
        return g.reset(), u.default.fromTimestampWithSequence(t, g);
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
function y(e) {
    return T.set(e.id, e);
}
class N extends a.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(f.A);
    }
    getDebuggingState() {
        return r;
    }
    hasRenderDebugMode(e) {
        return h.has(e);
    }
    getRenderDebugModes() {
        return h;
    }
    getOverlayLoggingBreadcrumbs(e) {
        return [T.values(e, !0), T.version];
    }
    isModuleLoggingEnabled() {
        return null != m;
    }
    isStateDebuggingEnabled() {
        return null != E;
    }
}
let v = new N(
        l.h,
        __OVERLAY__ || !d.O
            ? {}
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      p = f.A.getNativeModule();
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      p = null;
                  },
                  OVERLAY_SET_STATE_DEBUGGING: function (e) {
                      let { enabled: t } = e;
                      return (
                          t
                              ? null == E &&
                                (E = setInterval(() => {
                                    p?.getDebuggingState?.((e) => {
                                        s()(r, e) || ((r = e), v.emitChange());
                                    });
                                }, 300))
                              : null != E && (clearInterval(E), (E = null)),
                          !0
                      );
                  },
                  OVERLAY_RENDER_DEBUG_MODE: function (e) {
                      let { enabled: t, mode: n } = e;
                      t ? h.add(n) : h.delete(n), (h = new Set(h));
                  },
                  OVERLAY_SET_DETAILED_LOGGING: function (e) {
                      let { enabled: t } = e;
                      p?.setDetailedLogging?.(t);
                  },
                  OVERLAY_ADD_DEBUG_BREADCRUMB: function (e) {
                      let {
                          breadcrumb: { pid: t, name: n, data: r, type: i, logType: s },
                      } = e;
                      return (
                          !(function (e, t, n, r) {
                              let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _.QJ.Info,
                                  s = performance.timeOrigin + performance.now(),
                                  a = I(s);
                              y({
                                  id: a,
                                  key: a,
                                  nativeId: null,
                                  timestamp: s,
                                  name: e,
                                  data: t,
                                  type: n,
                                  pid: r,
                                  logType: i,
                                  stack: void 0,
                              });
                          })(n, r ?? {}, i, t, s),
                          !0
                      );
                  },
                  OVERLAY_SET_MODULE_LOGGING: function (e) {
                      let { enabled: t } = e;
                      return (
                          t
                              ? null == m &&
                                (m = setInterval(() => {
                                    let e = p?.getLastAssociatedPID() ?? null;
                                    p?.getNativeBreadcrumbs({ minBreadcrumbId: S }, (t) => {
                                        let { breadcrumbs: n } = t;
                                        for (let t of n)
                                            !(function (e, t, n) {
                                                let r,
                                                    i = A(e);
                                                if (null == i) throw Error("Native breadcrumb has no native id");
                                                T.size(i) > 0 ||
                                                    ((S = Math.max(S, Number(e.id))),
                                                    y({
                                                        id: (r = I(e.timestamp)),
                                                        key: r,
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
                                        v.emitChange();
                                    });
                                }, 3e3))
                              : null != m && (clearInterval(m), (m = null)),
                          !0
                      );
                  },
              },
    ),
    C = v;
