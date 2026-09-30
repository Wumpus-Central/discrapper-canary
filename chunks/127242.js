let i;
(n.d(t, { A: () => O }), n(321073));
var r = n(812729),
    a = n.n(r),
    s = n(17928),
    l = n(713402),
    o = n(228366),
    d = n(935208),
    c = n(206885),
    u = n(181435),
    _ = n(614455);
n(672396);
let E = null,
    A = new Set(),
    h = null,
    I = null,
    f = new d.SnowflakeSequence();
function p(e) {
    return (0, u.Vx)(e) ? `native-${e.id}` : null != e.nativeId ? `native-${e.nativeId}` : null;
}
function T(e) {
    let t = Math.floor(e);
    try {
        return (f.willOverflowNext() && f.reset(), d.default.fromTimestampWithSequence(t, f));
    } catch {
        return (f.reset(), d.default.fromTimestampWithSequence(t, f));
    }
}
let m = new l.J(
        function (e) {
            let t = [e.type, e.pid?.toString() ?? "null-pid"],
                n = p(e);
            return (null != n && t.push(n), t);
        },
        function (e) {
            return -e.timestamp;
        },
    ),
    g = 0;
function S(e) {
    return m.set(e.id, e);
}
class N extends s.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(_.A);
    }
    getDebuggingState() {
        return i;
    }
    hasRenderDebugMode(e) {
        return A.has(e);
    }
    getRenderDebugModes() {
        return A;
    }
    getOverlayLoggingBreadcrumbs(e) {
        return [m.values(e, !0), m.version];
    }
    isModuleLoggingEnabled() {
        return null != I;
    }
    isStateDebuggingEnabled() {
        return null != h;
    }
}
let C = new N(
        o.h,
        __OVERLAY__ || !c.O
            ? {}
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      E = _.A.getNativeModule();
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      E = null;
                  },
                  OVERLAY_SET_STATE_DEBUGGING: function (e) {
                      let { enabled: t } = e;
                      return (
                          t
                              ? null == h &&
                                (h = setInterval(() => {
                                    E?.getDebuggingState?.((e) => {
                                        a()(i, e) || ((i = e), C.emitChange());
                                    });
                                }, 300))
                              : null != h && (clearInterval(h), (h = null)),
                          !0
                      );
                  },
                  OVERLAY_RENDER_DEBUG_MODE: function (e) {
                      let { enabled: t, mode: n } = e;
                      (t ? A.add(n) : A.delete(n), (A = new Set(A)));
                  },
                  OVERLAY_SET_DETAILED_LOGGING: function (e) {
                      let { enabled: t } = e;
                      E?.setDetailedLogging?.(t);
                  },
                  OVERLAY_ADD_DEBUG_BREADCRUMB: function (e) {
                      let {
                          breadcrumb: { pid: t, name: n, data: i, type: r, logType: a },
                      } = e;
                      return (
                          !(function (e, t, n, i) {
                              let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.QJ.Info,
                                  a = performance.timeOrigin + performance.now(),
                                  s = T(a);
                              S({
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
                              ? null == I &&
                                (I = setInterval(() => {
                                    let e = E?.getLastAssociatedPID() ?? null;
                                    E?.getNativeBreadcrumbs({ minBreadcrumbId: g }, (t) => {
                                        let { breadcrumbs: n } = t;
                                        for (let t of n)
                                            !(function (e, t, n) {
                                                let i,
                                                    r = p(e);
                                                if (null == r) throw Error("Native breadcrumb has no native id");
                                                m.size(r) > 0 ||
                                                    ((g = Math.max(g, Number(e.id))),
                                                    S({
                                                        id: (i = T(e.timestamp)),
                                                        key: i,
                                                        nativeId: Number(e.id),
                                                        timestamp: e.timestamp,
                                                        name: e.name,
                                                        data: e.data,
                                                        type: t,
                                                        pid: n,
                                                        logType: u.QJ.Info,
                                                        stack: Error().stack ?? "",
                                                    }));
                                            })(t, u.ON.NativeOOP, e ?? -1);
                                        C.emitChange();
                                    });
                                }, 3e3))
                              : null != I && (clearInterval(I), (I = null)),
                          !0
                      );
                  },
              },
    ),
    O = C;
