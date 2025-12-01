n.d(t, { Z: () => j }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(13245),
    s = n(145597),
    l = n(610394),
    c = n(932404),
    u = n(509140),
    d = n(987650),
    f = n(981631);
function p(e, t, n) {
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
    m = null,
    h = null,
    g = null;
function E(e) {
    var t;
    if (d.y3) return !0;
    if (null == h) return !1;
    let n = null != (t = null == h ? void 0 : h.isCrashedDisabled) && t;
    return !!e || !n;
}
function b(e) {
    if (e && null != g) {
        let e = Date.now() - g;
        o.Z.track(f.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (g = null);
    } else e || null != g || ((g = Date.now()), o.Z.track(f.rMx.OVERLAY_UNLOCKED));
}
function y(e, t) {
    b(e), e ? _.delete(t) : _.add(t), (_ = new Set(_));
}
function O(e, t) {
    return !!E(e) && (y(e, t), null == h || h.setInteractionEnabled(!e), L.emitChange(), !0);
}
function v(e, t) {
    return (
        !!E(e) &&
        (y(e, t), null == m || (clearTimeout(m), (m = null), !e)) &&
        (e
            ? O(e, t)
            : (m = setTimeout(() => {
                  O(e, t), S();
              }, 100)),
        !0)
    );
}
function S() {
    null != m && (clearTimeout(m), (m = null));
}
function I() {
    S(), _.clear(), (_ = new Set()), (g = null);
}
function T() {
    return (h = u.Z.getNativeModule()), I(), !0;
}
function A() {
    return (h = null), I(), !0;
}
function C(e) {
    let { locked: t, pid: n } = e;
    return (0, c.PY)(n, "setInputLocked called", { locked: t }), v(t, n), !0;
}
function N(e) {
    let { region: t } = e,
        n = l.Z.getFocusedPID();
    return (0, c.PY)(null != n ? n : null, "activate_region", { region: t }), null != n && v(!1, n), !0;
}
function P() {
    let e = l.Z.getFocusedPID();
    return (0, c.PY)(null != e ? e : null, "deactivate_all_regions"), null != e && O(!0, e), !0;
}
function R() {
    return I(), !0;
}
function w(e) {
    let { lastAssociatedPID: t } = e;
    return null != t && O(!0, t), !0;
}
function D() {
    I(), null == h || h.setInteractionEnabled(!1);
}
class x extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    isInputLocked(e) {
        return null == e || e === s.UNSET_PID || !1 === _.has(e);
    }
}
p(x, "displayName", "Overlay-v3-Native-Input-Lock-Store");
let L = new x(
        a.Z,
        __OVERLAY__ || !d.iP
            ? { OVERLAY_SET_INPUT_LOCKED: C }
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: T,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: A,
                  OVERLAY_SET_INPUT_LOCKED: C,
                  OVERLAY_ACTIVATE_REGION: N,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: P,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: D,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: R,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: w,
              },
    ),
    j = L;
