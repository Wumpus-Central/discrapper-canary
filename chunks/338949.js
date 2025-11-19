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
    f = n(427860),
    _ = n(509140),
    p = n(987650);
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
function v(e) {
    return (0, f.lp)(e) ? "native-".concat(e.id) : null != e.nativeId ? "native-".concat(e.nativeId) : null;
}
function I(e) {
    var t, n;
    let r = [e.type, null != (n = null == (t = e.pid) ? void 0 : t.toString()) ? n : "null-pid"],
        i = v(e);
    return null != i && r.push(i), r;
}
function T(e) {
    return -e.timestamp;
}
function S(e) {
    let t = Math.floor(e);
    try {
        return O.willOverflowNext() && O.reset(), u.default.fromTimestampWithSequence(t, O);
    } catch (e) {
        return O.reset(), u.default.fromTimestampWithSequence(t, O);
    }
}
function A(e, t, n) {
    var r;
    let i = S(e.timestamp);
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
let N = new l.h(I, T),
    R = 0;
function P(e) {
    return N.set(e.id, e);
}
function D() {
    return R;
}
function w(e, t, n) {
    let r = v(e);
    if (null == r) throw Error("Native breadcrumb has no native id");
    return !(N.size(r) > 0) && ((R = Math.max(R, Number(e.id))), P(A(e, t, n)));
}
function L(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f.l6.Info,
        a = C(),
        o = S(a);
    return P({
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
function x(e) {
    return [N.values(e, !0), N.version];
}
function M() {
    null == b &&
        (b = setInterval(() => {
            var e;
            let t = null != (e = null == m ? void 0 : m.getLastAssociatedPID()) ? e : null;
            null == m ||
                m.getNativeBreadcrumbs({ minBreadcrumbId: D() }, (e) => {
                    let { breadcrumbs: n } = e;
                    for (let e of n) w(e, f.C7.NativeOOP, null != t ? t : d.UNSET_PID);
                    X.emitChange();
                });
        }, y));
}
function j(e) {
    return e ? M() : U(), !0;
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
function B(e) {
    let { enabled: t, mode: n } = e;
    t ? g.add(n) : g.delete(n), (g = new Set(g));
}
let Z = 300;
function F() {
    null == E &&
        (E = setInterval(() => {
            var e;
            null == m ||
                null == (e = m.getDebuggingState) ||
                e.call(m, (e) => {
                    o()(r, e) || ((r = e), X.emitChange());
                });
        }, Z));
}
function V(e) {
    let { enabled: t } = e;
    return t ? F() : G(), !0;
}
function H(e) {
    var t;
    let { enabled: n } = e;
    null == m || null == (t = m.setDetailedLogging) || t.call(m, n);
}
function Y() {
    m = _.Z.getNativeModule();
}
function W() {
    m = null;
}
function K(e) {
    let {
        breadcrumb: { pid: t, name: n, data: r, type: i, logType: a },
    } = e;
    return L(n, null != r ? r : {}, i, t, a), !0;
}
function z(e) {
    let { enabled: t } = e;
    return j(t), !0;
}
class q extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(_.Z);
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
        return x(e);
    }
    isModuleLoggingEnabled() {
        return k();
    }
    isStateDebuggingEnabled() {
        return null != E;
    }
}
h(q, "displayName", "Overlay-v3-Native-Debug-Module-Store");
let X = new q(
        c.Z,
        __OVERLAY__ || !p.iP
            ? {}
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: Y,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: W,
                  OVERLAY_SET_STATE_DEBUGGING: V,
                  OVERLAY_RENDER_DEBUG_MODE: B,
                  OVERLAY_SET_DETAILED_LOGGING: H,
                  OVERLAY_ADD_DEBUG_BREADCRUMB: K,
                  OVERLAY_SET_MODULE_LOGGING: z,
              },
    ),
    Q = X;
