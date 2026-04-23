"use strict";
n.d(t, { A: () => R });
var i = n(17928),
    r = n(228366),
    s = n(684013),
    a = n(9302),
    o = n(206885),
    l = n(489277),
    d = n(682763),
    _ = n(680243),
    u = n(652215);
let c = new Set(),
    E = null,
    h = null,
    m = null;
function f(e) {
    if (o.e) return !0;
    if (null == h) return !1;
    let t = h?.isCrashedDisabled ?? !1;
    return !!e || !t;
}
function g(e, t) {
    if (e && null != m) {
        let e = Date.now() - m;
        s.A.track(u.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (m = null);
    } else e || null != m || ((m = Date.now()), s.A.track(u.HAw.OVERLAY_UNLOCKED));
    e ? c.delete(t) : c.add(t), (c = new Set(c));
}
function p(e, t) {
    return !!f(e) && (g(e, t), h?.setInteractionEnabled(!e), C.emitChange(), !0);
}
function A(e, t) {
    return (
        !!f(e) &&
        (g(e, t), null == E || (clearTimeout(E), (E = null), !e)) &&
        (e
            ? p(e, t)
            : (E = setTimeout(() => {
                  p(e, t), I();
              }, 100)),
        !0)
    );
}
function I() {
    null != E && (clearTimeout(E), (E = null));
}
function T() {
    I(), c.clear(), (c = new Set()), (m = null);
}
function S(e) {
    let { locked: t, pid: n } = e;
    return (0, d.dK)(n, "setInputLocked called", { locked: t }), A(t, n), !0;
}
class N extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Input-Lock-Store";
    initialize() {
        this.waitFor(_.A);
    }
    isInputLocked(e) {
        return null == e || e === a.UNSET_PID || !1 === c.has(e);
    }
}
let C = new N(
        r.h,
        __OVERLAY__ || !o.O
            ? { OVERLAY_SET_INPUT_LOCKED: S }
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      return (h = _.A.getNativeModule()), T(), !0;
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      return (h = null), T(), !0;
                  },
                  OVERLAY_SET_INPUT_LOCKED: S,
                  OVERLAY_ACTIVATE_REGION: function (e) {
                      let { region: t } = e,
                          n = l.A.getFocusedPID();
                      return (0, d.dK)(n ?? null, "activate_region", { region: t }), null != n && A(!1, n), !0;
                  },
                  OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
                      let e = l.A.getFocusedPID();
                      return (0, d.dK)(e ?? null, "deactivate_all_regions"), null != e && p(!0, e), !0;
                  },
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function () {
                      T(), h?.setInteractionEnabled(!1);
                  },
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                      return T(), !0;
                  },
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function (e) {
                      let { lastAssociatedPID: t } = e;
                      return null != t && p(!0, t), !0;
                  },
              },
    ),
    R = C;
