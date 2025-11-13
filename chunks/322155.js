n.d(t, { Z: () => L }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(13245),
    s = n(610394),
    l = n(932404),
    c = n(509140),
    u = n(987650),
    d = n(981631);
function f(e, t, n) {
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
let _ = new Set(),
    p = null,
    h = null,
    m = null;
function g(e) {
    var t;
    if (u.y3) return !0;
    if (null == h) return !1;
    let n = null != (t = null == h ? void 0 : h.isCrashedDisabled) && t;
    return !!e || !n;
}
function E(e) {
    if (e && null != m) {
        let e = Date.now() - m;
        o.Z.track(d.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (m = null);
    } else e || null != m || ((m = Date.now()), o.Z.track(d.rMx.OVERLAY_UNLOCKED));
}
function b(e, t) {
    E(e), e ? _.delete(t) : _.add(t), (_ = new Set(_));
}
function y(e, t) {
    return !!g(e) && null != h && (b(e, t), h.setInteractionEnabled(!e), x.emitChange(), !0);
}
function O(e, t) {
    return (
        !!g(e) &&
        (b(e, t), null == p || (clearTimeout(p), (p = null), !e)) &&
        (e
            ? y(e, t)
            : (p = setTimeout(() => {
                  y(e, t), v();
              }, 100)),
        !0)
    );
}
function v() {
    null != p && (clearTimeout(p), (p = null));
}
function I() {
    v(), _.clear(), (_ = new Set()), (m = null);
}
function T() {
    return (h = c.Z.getNativeModule()), I(), !0;
}
function S() {
    return (h = null), I(), !0;
}
function A(e) {
    let { locked: t, pid: n } = e;
    return (0, l.PY)(n, "setInputLocked called", { locked: t }), O(t, n), !0;
}
function C(e) {
    let { region: t } = e,
        n = s.Z.getFocusedPID();
    return (0, l.PY)(null != n ? n : null, "activate_region", { region: t }), null != n && O(!1, n), !0;
}
function N() {
    let e = s.Z.getFocusedPID();
    return (0, l.PY)(null != e ? e : null, "deactivate_all_regions"), null != e && y(!0, e), !0;
}
function R() {
    return I(), !0;
}
function P(e) {
    let { lastAssociatedPID: t } = e;
    return null != t && y(!0, t), !0;
}
function D() {
    I(), null == h || h.setInteractionEnabled(!1);
}
class w extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    isInputLocked(e) {
        return !_.has(e);
    }
}
f(w, "displayName", "Overlay-v3-Native-Input-Lock-Store");
let x = new w(
        a.Z,
        __OVERLAY__ || !u.iP
            ? { OVERLAY_SET_INPUT_LOCKED: A }
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: T,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: S,
                  OVERLAY_SET_INPUT_LOCKED: A,
                  OVERLAY_ACTIVATE_REGION: C,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: N,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: D,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: R,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: P,
              },
    ),
    L = x;
