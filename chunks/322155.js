n.d(t, { Z: () => P }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(610394),
    s = n(932404),
    l = n(509140),
    c = n(987650);
function u(e, t, n) {
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
let d = new Set(),
    f = null,
    _ = null;
function p(e) {
    var t;
    if (null == _) return !1;
    let n = null != (t = null == _ ? void 0 : _.isCrashedDisabled) && t;
    return !!e || !n;
}
function h(e, t) {
    e ? d.delete(t) : d.add(t), (d = new Set(d));
}
function m(e, t) {
    return !!p(e) && null != _ && (h(e, t), _.setInteractionEnabled(!e), R.emitChange(), !0);
}
function g(e, t) {
    return (
        !!p(e) &&
        (h(e, t), null == f || (clearTimeout(f), (f = null), !e)) &&
        (e
            ? m(e, t)
            : (f = setTimeout(() => {
                  m(e, t), E();
              }, 100)),
        !0)
    );
}
function E() {
    null != f && (clearTimeout(f), (f = null));
}
function b() {
    E(), d.clear(), (d = new Set());
}
function y() {
    return (_ = l.Z.getNativeModule()), b(), !0;
}
function O() {
    return (_ = null), b(), !0;
}
function v(e) {
    let { locked: t, pid: n } = e;
    return (0, s.hF)(n, "setInputLocked called", { locked: t }), g(t, n), !0;
}
function I(e) {
    let { region: t } = e,
        n = o.Z.getFocusedPID();
    return (0, s.hF)(null != n ? n : null, "activate_region", { region: t }), null != n && m(!1, n), !0;
}
function T() {
    let e = o.Z.getFocusedPID();
    return (0, s.hF)(null != e ? e : null, "deactivate_all_regions"), null != e && m(!0, e), !0;
}
function S() {
    return b(), !0;
}
function A(e) {
    let { lastAssociatedPID: t } = e;
    return null != t && m(!0, t), !0;
}
function C() {
    b(), null == _ || _.setInteractionEnabled(!1);
}
class N extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.Z);
    }
    isInputLocked(e) {
        return !d.has(e);
    }
}
u(N, "displayName", "Overlay-v3-Native-Input-Lock-Store");
let R = new N(
        a.Z,
        __OVERLAY__ || !c.iP
            ? {}
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: y,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: O,
                  OVERLAY_SET_INPUT_LOCKED: v,
                  OVERLAY_ACTIVATE_REGION: I,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: T,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: C,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: S,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: A,
              },
    ),
    P = R;
