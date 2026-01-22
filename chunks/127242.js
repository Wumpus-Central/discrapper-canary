let r;
n.d(t, { A: () => Q }), n(896048), n(321073), n(65821);
var i,
    a = n(812729),
    s = n.n(a),
    o = n(311907),
    l = n(713402),
    c = n(73153),
    u = n(661191),
    d = n(9302),
    f = n(181435),
    p = n(680243),
    _ = n(672396);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let m = null,
    g = new Set(),
    E = null,
    b = null,
    y = 3000,
    O = new u.SnowflakeSequence();
function A(e) {
    return (0, f.Vx)(e) ? "native-".concat(e.id) : null != e.nativeId ? "native-".concat(e.nativeId) : null;
}
function v(e) {
    var t, n;
    let r = [e.type, null != (t = null == (n = e.pid) ? void 0 : n.toString()) ? t : "null-pid"],
        i = A(e);
    return null != i && r.push(i), r;
}
function S(e) {
    return -e.timestamp;
}
function I(e) {
    let t = Math.floor(e);
    try {
        return O.willOverflowNext() && O.reset(), u.default.fromTimestampWithSequence(t, O);
    } catch (e) {
        return O.reset(), u.default.fromTimestampWithSequence(t, O);
    }
}
function T(e, t, n) {
    var r;
    let i = I(e.timestamp);
    return {
        id: i,
        key: i,
        nativeId: Number(e.id),
        timestamp: e.timestamp,
        name: e.name,
        data: e.data,
        type: t,
        pid: n,
        logType: f.QJ.Info,
        stack: null != (r = Error().stack) ? r : "",
    };
}
function C() {
    return performance.timeOrigin + performance.now();
}
let N = new l.J(v, S),
    R = 0;
function w(e) {
    return N.set(e.id, e);
}
function P() {
    return R;
}
function D(e, t, n) {
    let r = A(e);
    if (null == r) throw Error("Native breadcrumb has no native id");
    return !(N.size(r) > 0) && ((R = Math.max(R, Number(e.id))), w(T(e, t, n)));
}
function x(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f.QJ.Info,
        a = C(),
        s = I(a);
    return w({
        id: s,
        key: s,
        nativeId: null,
        timestamp: a,
        name: e,
        data: t,
        type: n,
        pid: r,
        logType: i,
        stack: void 0,
    });
}
function L(e) {
    return [N.values(e, !0), N.version];
}
function j() {
    null == b &&
        (b = setInterval(() => {
            var e;
            let t = null != (e = null == m ? void 0 : m.getLastAssociatedPID()) ? e : null;
            null == m ||
                m.getNativeBreadcrumbs({ minBreadcrumbId: P() }, (e) => {
                    let { breadcrumbs: n } = e;
                    for (let e of n) D(e, f.ON.NativeOOP, null != t ? t : d.UNSET_PID);
                    Z.emitChange();
                });
        }, y));
}
function M(e) {
    return e ? j() : U(), !0;
}
function k() {
    return null != b;
}
function U() {
    null != b && (clearInterval(b), (b = null));
}
function G() {
    null != E && (clearInterval(E), (E = null));
}
function V(e) {
    let { enabled: t, mode: n } = e;
    t ? g.add(n) : g.delete(n), (g = new Set(g));
}
let F = 300;
function B() {
    null == E &&
        (E = setInterval(() => {
            var e;
            null == m ||
                null == (e = m.getDebuggingState) ||
                e.call(m, (e) => {
                    s()(r, e) || ((r = e), Z.emitChange());
                });
        }, F));
}
function H(e) {
    let { enabled: t } = e;
    return t ? B() : G(), !0;
}
function Y(e) {
    var t;
    let { enabled: n } = e;
    null == m || null == (t = m.setDetailedLogging) || t.call(m, n);
}
function W() {
    m = p.A.getNativeModule();
}
function K() {
    m = null;
}
function z(e) {
    let {
        breadcrumb: { pid: t, name: n, data: r, type: i, logType: a },
    } = e;
    return x(n, null != r ? r : {}, i, t, a), !0;
}
function q(e) {
    let { enabled: t } = e;
    return M(t), !0;
}
class X extends (i = o.Ay.Store) {
    initialize() {
        this.waitFor(p.A);
    }
    getDebuggingState() {
        return r;
    }
    hasRenderDebugMode(e) {
        return g.has(e);
    }
    getRenderDebugModes() {
        return g;
    }
    getOverlayLoggingBreadcrumbs(e) {
        return L(e);
    }
    isModuleLoggingEnabled() {
        return k();
    }
    isStateDebuggingEnabled() {
        return null != E;
    }
}
h(X, "displayName", "Overlay-v3-Native-Debug-Module-Store");
let Z = new X(
        c.h,
        __OVERLAY__ || !_.OX
            ? {}
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: W,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: K,
                  OVERLAY_SET_STATE_DEBUGGING: H,
                  OVERLAY_RENDER_DEBUG_MODE: V,
                  OVERLAY_SET_DETAILED_LOGGING: Y,
                  OVERLAY_ADD_DEBUG_BREADCRUMB: z,
                  OVERLAY_SET_MODULE_LOGGING: q,
              },
    ),
    Q = Z;
