"use strict";
n.d(t, { A: () => v });
var i = n(17928),
    r = n(228366),
    s = n(684013),
    a = n(9302),
    o = n(206885),
    l = n(489277),
    u = n(682763),
    c = n(614455),
    d = n(652215);
let _ = new Set(),
    h = null,
    f = null,
    p = null;
function E(e) {
    if (o.e) return !0;
    if (null == f) return !1;
    let t = f?.isCrashedDisabled ?? !1;
    return !!e || !t;
}
function m(e, t) {
    if (e && null != p) {
        let e = Date.now() - p;
        s.A.track(d.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (p = null);
    } else e || null != p || ((p = Date.now()), s.A.track(d.HAw.OVERLAY_UNLOCKED));
    e ? _.delete(t) : _.add(t), (_ = new Set(_));
}
function g(e, t) {
    return !!E(e) && (m(e, t), f?.setInteractionEnabled(!e), N.emitChange(), !0);
}
function A(e, t) {
    return (
        !!E(e) &&
        (m(e, t), null == h || (clearTimeout(h), (h = null), !e)) &&
        (e
            ? g(e, t)
            : (h = setTimeout(() => {
                  g(e, t), I();
              }, 100)),
        !0)
    );
}
function I() {
    null != h && (clearTimeout(h), (h = null));
}
function T() {
    I(), _.clear(), (_ = new Set()), (p = null);
}
function S(e) {
    let { locked: t, pid: n } = e;
    return (0, u.dK)(n, "setInputLocked called", { locked: t }), A(t, n), !0;
}
class y extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Input-Lock-Store";
    initialize() {
        this.waitFor(c.A);
    }
    isInputLocked(e) {
        return null == e || e === a.UNSET_PID || !1 === _.has(e);
    }
}
let N = new y(
        r.h,
        __OVERLAY__ || !o.O
            ? { OVERLAY_SET_INPUT_LOCKED: S }
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      return (f = c.A.getNativeModule()), T(), !0;
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      return (f = null), T(), !0;
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
                      T(), f?.setInteractionEnabled(!1);
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
