"use strict";
let r;
n.d(t, { A: () => X }), n(321073);
var i = n(812729),
    a = n.n(i),
    s = n(311907),
    o = n(713402),
    l = n(73153),
    u = n(661191),
    c = n(9302),
    d = n(206885),
    _ = n(181435),
    f = n(680243);
let h = null,
    p = new Set(),
    g = null,
    E = null,
    A = 3e3,
    I = new u.SnowflakeSequence();
function T(e) {
    return (0, _.Vx)(e) ? `native-${e.id}` : null != e.nativeId ? `native-${e.nativeId}` : null;
}
function y(e) {
    let t = [e.type, e.pid?.toString() ?? "null-pid"],
        n = T(e);
    return null != n && t.push(n), t;
}
function S(e) {
    return -e.timestamp;
}
function v(e) {
    let t = Math.floor(e);
    try {
        return I.willOverflowNext() && I.reset(), u.default.fromTimestampWithSequence(t, I);
    } catch {
        return I.reset(), u.default.fromTimestampWithSequence(t, I);
    }
}
function C(e, t, n) {
    let r = v(e.timestamp);
    return {
        id: r,
        key: r,
        nativeId: Number(e.id),
        timestamp: e.timestamp,
        name: e.name,
        data: e.data,
        type: t,
        pid: n,
        logType: _.QJ.Info,
        stack: Error().stack ?? "",
    };
}
function b() {
    return performance.timeOrigin + performance.now();
}
let N = new o.J(y, S),
    R = 0;
function O(e) {
    return N.set(e.id, e);
}
function D() {
    return R;
}
function L(e, t, n) {
    let r = T(e);
    if (null == r) throw Error("Native breadcrumb has no native id");
    return !(N.size(r) > 0) && ((R = Math.max(R, Number(e.id))), O(C(e, t, n)));
}
function w(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _.QJ.Info,
        a = b(),
        s = v(a);
    return O({
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
function x(e) {
    return [N.values(e, !0), N.version];
}
function P() {
    null == E &&
        (E = setInterval(() => {
            let e = h?.getLastAssociatedPID() ?? null;
            h?.getNativeBreadcrumbs({ minBreadcrumbId: D() }, (t) => {
                let { breadcrumbs: n } = t;
                for (let t of n) L(t, _.ON.NativeOOP, e ?? c.UNSET_PID);
                q.emitChange();
            });
        }, A));
}
function M(e) {
    return e ? P() : U(), !0;
}
function k() {
    return null != E;
}
function U() {
    null != E && (clearInterval(E), (E = null));
}
function G() {
    null != g && (clearInterval(g), (g = null));
}
function F(e) {
    let { enabled: t, mode: n } = e;
    t ? p.add(n) : p.delete(n), (p = new Set(p));
}
let V = 300;
function B() {
    null == g &&
        (g = setInterval(() => {
            h?.getDebuggingState?.((e) => {
                a()(r, e) || ((r = e), q.emitChange());
            });
        }, V));
}
function j(e) {
    let { enabled: t } = e;
    return t ? B() : G(), !0;
}
function H(e) {
    let { enabled: t } = e;
    h?.setDetailedLogging?.(t);
}
function Y() {
    h = f.A.getNativeModule();
}
function W() {
    h = null;
}
function K(e) {
    let {
        breadcrumb: { pid: t, name: n, data: r, type: i, logType: a },
    } = e;
    return w(n, r ?? {}, i, t, a), !0;
}
function $(e) {
    let { enabled: t } = e;
    return M(t), !0;
}
class z extends s.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(f.A);
    }
    getDebuggingState() {
        return r;
    }
    hasRenderDebugMode(e) {
        return p.has(e);
    }
    getRenderDebugModes() {
        return p;
    }
    getOverlayLoggingBreadcrumbs(e) {
        return x(e);
    }
    isModuleLoggingEnabled() {
        return k();
    }
    isStateDebuggingEnabled() {
        return null != g;
    }
}
let q = new z(
        l.h,
        __OVERLAY__ || !d.O
            ? {}
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: Y,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: W,
                  OVERLAY_SET_STATE_DEBUGGING: j,
                  OVERLAY_RENDER_DEBUG_MODE: F,
                  OVERLAY_SET_DETAILED_LOGGING: H,
                  OVERLAY_ADD_DEBUG_BREADCRUMB: K,
                  OVERLAY_SET_MODULE_LOGGING: $,
              },
    ),
    X = q;
