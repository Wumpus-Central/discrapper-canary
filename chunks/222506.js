"use strict";
n.d(t, { A: () => x });
var r = n(311907),
    i = n(73153),
    s = n(684013),
    a = n(9302),
    o = n(206885),
    l = n(395011),
    u = n(682763),
    c = n(680243),
    d = n(652215);
let _ = new Set(),
    f = null,
    p = null,
    h = null;
function m(e) {
    if (o.e) return !0;
    if (null == p) return !1;
    let t = p?.isCrashedDisabled ?? !1;
    return !!e || !t;
}
function E(e) {
    if (e && null != h) {
        let e = Date.now() - h;
        s.A.track(d.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (h = null);
    } else e || null != h || ((h = Date.now()), s.A.track(d.HAw.OVERLAY_UNLOCKED));
}
function g(e, t) {
    E(e), e ? _.delete(t) : _.add(t), (_ = new Set(_));
}
function A(e, t) {
    return !!m(e) && (g(e, t), p?.setInteractionEnabled(!e), w.emitChange(), !0);
}
function I(e, t) {
    return (
        !!m(e) &&
        (g(e, t), null == f || (clearTimeout(f), (f = null), !e)) &&
        (e
            ? A(e, t)
            : (f = setTimeout(() => {
                  A(e, t), T();
              }, 100)),
        !0)
    );
}
function T() {
    null != f && (clearTimeout(f), (f = null));
}
function S() {
    T(), _.clear(), (_ = new Set()), (h = null);
}
function y() {
    return (p = c.A.getNativeModule()), S(), !0;
}
function v() {
    return (p = null), S(), !0;
}
function N(e) {
    let { locked: t, pid: n } = e;
    return (0, u.dK)(n, "setInputLocked called", { locked: t }), I(t, n), !0;
}
function C(e) {
    let { region: t } = e,
        n = l.A.getFocusedPID();
    return (0, u.dK)(n ?? null, "activate_region", { region: t }), null != n && I(!1, n), !0;
}
function b() {
    let e = l.A.getFocusedPID();
    return (0, u.dK)(e ?? null, "deactivate_all_regions"), null != e && A(!0, e), !0;
}
function R() {
    return S(), !0;
}
function O(e) {
    let { lastAssociatedPID: t } = e;
    return null != t && A(!0, t), !0;
}
function D() {
    S(), p?.setInteractionEnabled(!1);
}
class L extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-Input-Lock-Store";
    initialize() {
        this.waitFor(c.A);
    }
    isInputLocked(e) {
        return null == e || e === a.UNSET_PID || !1 === _.has(e);
    }
}
let w = new L(
        i.h,
        __OVERLAY__ || !o.O
            ? { OVERLAY_SET_INPUT_LOCKED: N }
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: y,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: v,
                  OVERLAY_SET_INPUT_LOCKED: N,
                  OVERLAY_ACTIVATE_REGION: C,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: b,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: D,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: R,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: O,
              },
    ),
    x = w;
