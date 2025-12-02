let r;
n.d(t, { Z: () => Q }), n(388685), n(539854), n(415506);
var i,
    a = n(348327),
    o = n.n(a),
    s = n(442837),
    l = n(759174),
    c = n(570140),
    u = n(709054),
    d = n(145597),
    f = n(307149),
    p = n(509140),
    _ = n(987650);
function m(e, t, n) {
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
let h = null,
    g = new Set(),
    E = null,
    b = null,
    y = 3000,
    O = new u.SnowflakeSequence();
function v(e) {
    return (0, f.lp)(e) ? "native-".concat(e.id) : null != e.nativeId ? "native-".concat(e.nativeId) : null;
}
function S(e) {
    var t, n;
    let r = [e.type, null != (n = null == (t = e.pid) ? void 0 : t.toString()) ? n : "null-pid"],
        i = v(e);
    return null != i && r.push(i), r;
}
function I(e) {
    return -e.timestamp;
}
function T(e) {
    let t = Math.floor(e);
    try {
        return O.willOverflowNext() && O.reset(), u.default.fromTimestampWithSequence(t, O);
    } catch (e) {
        return O.reset(), u.default.fromTimestampWithSequence(t, O);
    }
}
function A(e, t, n) {
    var r;
    let i = T(e.timestamp);
    return {
        id: i,
        key: i,
        nativeId: Number(e.id),
        timestamp: e.timestamp,
        name: e.name,
        data: e.data,
        type: t,
        pid: n,
        logType: f.l6.Info,
        stack: null != (r = Error().stack) ? r : "",
    };
}
function C() {
    return performance.timeOrigin + performance.now();
}
let N = new l.h(S, I),
    P = 0;
function R(e) {
    return N.set(e.id, e);
}
function w() {
    return P;
}
function D(e, t, n) {
    let r = v(e);
    if (null == r) throw Error("Native breadcrumb has no native id");
    return !(N.size(r) > 0) && ((P = Math.max(P, Number(e.id))), R(A(e, t, n)));
}
function x(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f.l6.Info,
        a = C(),
        o = T(a);
    return R({
        id: o,
        key: o,
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
            let t = null != (e = null == h ? void 0 : h.getLastAssociatedPID()) ? e : null;
            null == h ||
                h.getNativeBreadcrumbs({ minBreadcrumbId: w() }, (e) => {
                    let { breadcrumbs: n } = e;
                    for (let e of n) D(e, f.C7.NativeOOP, null != t ? t : d.UNSET_PID);
                    X.emitChange();
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
function Z(e) {
    let { enabled: t, mode: n } = e;
    t ? g.add(n) : g.delete(n), (g = new Set(g));
}
let B = 300;
function F() {
    null == E &&
        (E = setInterval(() => {
            var e;
            null == h ||
                null == (e = h.getDebuggingState) ||
                e.call(h, (e) => {
                    o()(r, e) || ((r = e), X.emitChange());
                });
        }, B));
}
function V(e) {
    let { enabled: t } = e;
    return t ? F() : G(), !0;
}
function H(e) {
    var t;
    let { enabled: n } = e;
    null == h || null == (t = h.setDetailedLogging) || t.call(h, n);
}
function Y() {
    h = p.Z.getNativeModule();
}
function W() {
    h = null;
}
function K(e) {
    let {
        breadcrumb: { pid: t, name: n, data: r, type: i, logType: a },
    } = e;
    return x(n, null != r ? r : {}, i, t, a), !0;
}
function z(e) {
    let { enabled: t } = e;
    return M(t), !0;
}
class q extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(p.Z);
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
m(q, "displayName", "Overlay-v3-Native-Debug-Module-Store");
let X = new q(
        c.Z,
        __OVERLAY__ || !_.iP
            ? {}
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: Y,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: W,
                  OVERLAY_SET_STATE_DEBUGGING: V,
                  OVERLAY_RENDER_DEBUG_MODE: Z,
                  OVERLAY_SET_DETAILED_LOGGING: H,
                  OVERLAY_ADD_DEBUG_BREADCRUMB: K,
                  OVERLAY_SET_MODULE_LOGGING: z,
              },
    ),
    Q = X;
