"use strict";
n.d(t, { A: () => O });
var i = n(17928),
    r = n(228366),
    a = n(684013),
    s = n(9302),
    l = n(206885),
    o = n(489277),
    d = n(682763),
    c = n(614455),
    u = n(394072),
    _ = n(652215);
let E = new Set(),
    A = null,
    h = null,
    I = null;
function f(e) {
    if ((0, u.LK)()) return !0;
    if (null == h) return !1;
    let t = h?.isCrashedDisabled ?? !1;
    return !!e || !t;
}
function p(e, t) {
    if (e && null != I) {
        let e = Date.now() - I;
        a.A.track(_.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (I = null);
    } else e || null != I || ((I = Date.now()), a.A.track(_.HAw.OVERLAY_UNLOCKED));
    e ? E.delete(t) : E.add(t), (E = new Set(E));
}
function T(e, t) {
    return !!f(e) && (p(e, t), h?.setInteractionEnabled(!e), R.emitChange(), !0);
}
function m(e, t) {
    return (
        !!f(e) &&
        (p(e, t), null == A || (clearTimeout(A), (A = null), !e)) &&
        (e
            ? T(e, t)
            : (A = setTimeout(() => {
                  T(e, t), g();
              }, 100)),
        !0)
    );
}
function g() {
    null != A && (clearTimeout(A), (A = null));
}
function S() {
    g(), E.clear(), (E = new Set()), (I = null);
}
function N(e) {
    let { locked: t, pid: n } = e;
    return (0, d.dK)(n, "setInputLocked called", { locked: t }), m(t, n), !0;
}
class C extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Input-Lock-Store";
    initialize() {
        this.waitFor(c.A);
    }
    isInputLocked(e) {
        return null == e || e === s.UNSET_PID || !1 === E.has(e);
    }
}
let R = new C(
        r.h,
        __OVERLAY__ || !l.O
            ? { OVERLAY_SET_INPUT_LOCKED: N }
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      return (h = c.A.getNativeModule()), S(), !0;
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      return (h = null), S(), !0;
                  },
                  OVERLAY_SET_INPUT_LOCKED: N,
                  OVERLAY_ACTIVATE_REGION: function (e) {
                      let { region: t } = e,
                          n = o.A.getFocusedPID();
                      return (0, d.dK)(n ?? null, "activate_region", { region: t }), null != n && m(!1, n), !0;
                  },
                  OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
                      let e = o.A.getFocusedPID();
                      return (0, d.dK)(e ?? null, "deactivate_all_regions"), null != e && T(!0, e), !0;
                  },
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function () {
                      S(), h?.setInteractionEnabled(!1);
                  },
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                      return S(), !0;
                  },
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function (e) {
                      let { lastAssociatedPID: t } = e;
                      return null != t && T(!0, t), !0;
                  },
              },
    ),
    O = R;
