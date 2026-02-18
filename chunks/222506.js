"use strict";
n.d(t, { A: () => M });
var r = n(311907),
    i = n(73153),
    a = n(684013),
    s = n(9302),
    o = n(206885),
    l = n(395011),
    u = n(682763),
    c = n(680243),
    d = n(672396),
    _ = n(652215);
let f = new Set(),
    h = null,
    p = null,
    g = null;
function E(e) {
    if (d.ed) return !0;
    if (null == p) return !1;
    let t = p?.isCrashedDisabled ?? !1;
    return !!e || !t;
}
function A(e) {
    if (e && null != g) {
        let e = Date.now() - g;
        a.A.track(_.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (g = null);
    } else e || null != g || ((g = Date.now()), a.A.track(_.HAw.OVERLAY_UNLOCKED));
}
function I(e, t) {
    A(e), e ? f.delete(t) : f.add(t), (f = new Set(f));
}
function T(e, t) {
    return !!E(e) && (I(e, t), p?.setInteractionEnabled(!e), P.emitChange(), !0);
}
function y(e, t) {
    return (
        !!E(e) &&
        (I(e, t), null == h || (clearTimeout(h), (h = null), !e)) &&
        (e
            ? T(e, t)
            : (h = setTimeout(() => {
                  T(e, t), S();
              }, 100)),
        !0)
    );
}
function S() {
    null != h && (clearTimeout(h), (h = null));
}
function v() {
    S(), f.clear(), (f = new Set()), (g = null);
}
function C() {
    return (p = c.A.getNativeModule()), v(), !0;
}
function b() {
    return (p = null), v(), !0;
}
function N(e) {
    let { locked: t, pid: n } = e;
    return (0, u.dK)(n, "setInputLocked called", { locked: t }), y(t, n), !0;
}
function R(e) {
    let { region: t } = e,
        n = l.A.getFocusedPID();
    return (0, u.dK)(n ?? null, "activate_region", { region: t }), null != n && y(!1, n), !0;
}
function O() {
    let e = l.A.getFocusedPID();
    return (0, u.dK)(e ?? null, "deactivate_all_regions"), null != e && T(!0, e), !0;
}
function D() {
    return v(), !0;
}
function L(e) {
    let { lastAssociatedPID: t } = e;
    return null != t && T(!0, t), !0;
}
function w() {
    v(), p?.setInteractionEnabled(!1);
}
class x extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-Input-Lock-Store";
    initialize() {
        this.waitFor(c.A);
    }
    isInputLocked(e) {
        return null == e || e === s.UNSET_PID || !1 === f.has(e);
    }
}
let P = new x(
        i.h,
        __OVERLAY__ || !o.O
            ? { OVERLAY_SET_INPUT_LOCKED: N }
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: C,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: b,
                  OVERLAY_SET_INPUT_LOCKED: N,
                  OVERLAY_ACTIVATE_REGION: R,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: O,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: w,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: D,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: L,
              },
    ),
    M = P;
