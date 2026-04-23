"use strict";
n.d(t, { A: () => v });
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
function E(e) {
    if (o.e) return !0;
    if (null == p) return !1;
    let t = p?.isCrashedDisabled ?? !1;
    return !!e || !t;
}
function m(e, t) {
    if (e && null != h) {
        let e = Date.now() - h;
        s.A.track(d.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (h = null);
    } else e || null != h || ((h = Date.now()), s.A.track(d.HAw.OVERLAY_UNLOCKED));
    e ? _.delete(t) : _.add(t), (_ = new Set(_));
}
function g(e, t) {
    return !!E(e) && (m(e, t), p?.setInteractionEnabled(!e), N.emitChange(), !0);
}
function A(e, t) {
    return (
        !!E(e) &&
        (m(e, t), null == f || (clearTimeout(f), (f = null), !e)) &&
        (e
            ? g(e, t)
            : (f = setTimeout(() => {
                  g(e, t), I();
              }, 100)),
        !0)
    );
}
function I() {
    null != f && (clearTimeout(f), (f = null));
}
function T() {
    I(), _.clear(), (_ = new Set()), (h = null);
}
function S(e) {
    let { locked: t, pid: n } = e;
    return (0, u.dK)(n, "setInputLocked called", { locked: t }), A(t, n), !0;
}
class y extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-Input-Lock-Store";
    initialize() {
        this.waitFor(c.A);
    }
    isInputLocked(e) {
        return null == e || e === a.UNSET_PID || !1 === _.has(e);
    }
}
let N = new y(
        i.h,
        __OVERLAY__ || !o.O
            ? { OVERLAY_SET_INPUT_LOCKED: S }
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      return (p = c.A.getNativeModule()), T(), !0;
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      return (p = null), T(), !0;
                  },
                  OVERLAY_SET_INPUT_LOCKED: S,
                  OVERLAY_ACTIVATE_REGION: function (e) {
                      let { region: t } = e,
                          n = l.A.getFocusedPID();
                      return (0, u.dK)(n ?? null, "activate_region", { region: t }), null != n && A(!1, n), !0;
                  },
                  OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
                      let e = l.A.getFocusedPID();
                      return (0, u.dK)(e ?? null, "deactivate_all_regions"), null != e && g(!0, e), !0;
                  },
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function () {
                      T(), p?.setInteractionEnabled(!1);
                  },
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                      return T(), !0;
                  },
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function (e) {
                      let { lastAssociatedPID: t } = e;
                      return null != t && g(!0, t), !0;
                  },
              },
    ),
    v = N;
