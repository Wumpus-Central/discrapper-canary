"use strict";
let r;
n.d(t, { A: () => q }), n(321073);
var i = n(812729),
    a = n.n(i),
    s = n(311907),
    o = n(713402),
    l = n(73153),
    u = n(661191),
    c = n(9302),
    d = n(181435),
    _ = n(680243),
    f = n(672396);
let p = null,
    h = new Set(),
    m = null,
    g = null,
    E = 3e3,
    A = new u.SnowflakeSequence();
function I(e) {
    return (0, d.Vx)(e) ? `native-${e.id}` : null != e.nativeId ? `native-${e.nativeId}` : null;
}
function T(e) {
    let t = [e.type, e.pid?.toString() ?? "null-pid"],
        n = I(e);
    return null != n && t.push(n), t;
}
function y(e) {
    return -e.timestamp;
}
function S(e) {
    let t = Math.floor(e);
    try {
        return A.willOverflowNext() && A.reset(), u.default.fromTimestampWithSequence(t, A);
    } catch {
        return A.reset(), u.default.fromTimestampWithSequence(t, A);
    }
}
function v(e, t, n) {
    let r = S(e.timestamp);
    return {
        id: r,
        key: r,
        nativeId: Number(e.id),
        timestamp: e.timestamp,
        name: e.name,
        data: e.data,
        type: t,
        pid: n,
        logType: d.QJ.Info,
        stack: Error().stack ?? "",
    };
}
function C() {
    return performance.timeOrigin + performance.now();
}
let b = new o.J(T, y),
    N = 0;
function R(e) {
    return b.set(e.id, e);
}
function O() {
    return N;
}
function D(e, t, n) {
    let r = I(e);
    if (null == r) throw Error("Native breadcrumb has no native id");
    return !(b.size(r) > 0) && ((N = Math.max(N, Number(e.id))), R(v(e, t, n)));
}
function L(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d.QJ.Info,
        a = C(),
        s = S(a);
    return R({
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
function w(e) {
    return [b.values(e, !0), b.version];
}
function x() {
    null == g &&
        (g = setInterval(() => {
            let e = p?.getLastAssociatedPID() ?? null;
            p?.getNativeBreadcrumbs({ minBreadcrumbId: O() }, (t) => {
                let { breadcrumbs: n } = t;
                for (let t of n) D(t, d.ON.NativeOOP, e ?? c.UNSET_PID);
                $.emitChange();
            });
        }, E));
}
function P(e) {
    return e ? x() : k(), !0;
}
function M() {
    return null != g;
}
function k() {
    null != g && (clearInterval(g), (g = null));
}
function U() {
    null != m && (clearInterval(m), (m = null));
}
function G(e) {
    let { enabled: t, mode: n } = e;
    t ? h.add(n) : h.delete(n), (h = new Set(h));
}
let V = 300;
function F() {
    null == m &&
        (m = setInterval(() => {
            p?.getDebuggingState?.((e) => {
                a()(r, e) || ((r = e), $.emitChange());
            });
        }, V));
}
function B(e) {
    let { enabled: t } = e;
    return t ? F() : U(), !0;
}
function j(e) {
    let { enabled: t } = e;
    p?.setDetailedLogging?.(t);
}
function H() {
    p = _.A.getNativeModule();
}
function Y() {
    p = null;
}
function W(e) {
    let {
        breadcrumb: { pid: t, name: n, data: r, type: i, logType: a },
    } = e;
    return L(n, r ?? {}, i, t, a), !0;
}
function K(e) {
    let { enabled: t } = e;
    return P(t), !0;
}
class z extends s.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(_.A);
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
        return w(e);
    }
    isModuleLoggingEnabled() {
        return M();
    }
    isStateDebuggingEnabled() {
        return null != m;
    }
}
let $ = new z(
        l.h,
        __OVERLAY__ || !f.OX
            ? {}
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: H,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: Y,
                  OVERLAY_SET_STATE_DEBUGGING: B,
                  OVERLAY_RENDER_DEBUG_MODE: G,
                  OVERLAY_SET_DETAILED_LOGGING: j,
                  OVERLAY_ADD_DEBUG_BREADCRUMB: W,
                  OVERLAY_SET_MODULE_LOGGING: K,
              },
    ),
    q = $;
