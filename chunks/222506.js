"use strict";
n.d(t, { A: () => x });
var r = n(311907),
    i = n(73153),
    a = n(684013),
    s = n(9302),
    o = n(395011),
    l = n(682763),
    u = n(680243),
    c = n(672396),
    d = n(652215);
let _ = new Set(),
    f = null,
    p = null,
    h = null;
function m(e) {
    if (c.ed) return !0;
    if (null == p) return !1;
    let t = p?.isCrashedDisabled ?? !1;
    return !!e || !t;
}
function g(e) {
    if (e && null != h) {
        let e = Date.now() - h;
        a.A.track(d.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (h = null);
    } else e || null != h || ((h = Date.now()), a.A.track(d.HAw.OVERLAY_UNLOCKED));
}
function E(e, t) {
    g(e), e ? _.delete(t) : _.add(t), (_ = new Set(_));
}
function A(e, t) {
    return !!m(e) && (E(e, t), p?.setInteractionEnabled(!e), w.emitChange(), !0);
}
function I(e, t) {
    return (
        !!m(e) &&
        (E(e, t), null == f || (clearTimeout(f), (f = null), !e)) &&
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
function y() {
    T(), _.clear(), (_ = new Set()), (h = null);
}
function S() {
    return (p = u.A.getNativeModule()), y(), !0;
}
function v() {
    return (p = null), y(), !0;
}
function C(e) {
    let { locked: t, pid: n } = e;
    return (0, l.dK)(n, "setInputLocked called", { locked: t }), I(t, n), !0;
}
function b(e) {
    let { region: t } = e,
        n = o.A.getFocusedPID();
    return (0, l.dK)(n ?? null, "activate_region", { region: t }), null != n && I(!1, n), !0;
}
function N() {
    let e = o.A.getFocusedPID();
    return (0, l.dK)(e ?? null, "deactivate_all_regions"), null != e && A(!0, e), !0;
}
function R() {
    return y(), !0;
}
function O(e) {
    let { lastAssociatedPID: t } = e;
    return null != t && A(!0, t), !0;
}
function D() {
    y(), p?.setInteractionEnabled(!1);
}
class L extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-Input-Lock-Store";
    initialize() {
        this.waitFor(u.A);
    }
    isInputLocked(e) {
        return null == e || e === s.UNSET_PID || !1 === _.has(e);
    }
}
let w = new L(
        i.h,
        __OVERLAY__ || !c.OX
            ? { OVERLAY_SET_INPUT_LOCKED: C }
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: S,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: v,
                  OVERLAY_SET_INPUT_LOCKED: C,
                  OVERLAY_ACTIVATE_REGION: b,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: N,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: D,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: R,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: O,
              },
    ),
    x = w;
