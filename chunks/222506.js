var i = n(855986),
    r = n(73153),
    a = n(206885),
    s = n(870373),
    l = n(887287),
    o = n(682763),
    d = n(244055),
    c = n(394072);
n(672396);
var u = n(652215);
let _ = new Set(),
    E = null,
    A = null,
    h = null;
function f(e) {
    if ((0, c.LK)()) return !0;
    if (null == A) return !1;
    let t = A?.isCrashedDisabled ?? !1;
    return !!e || !t;
}
function I(e, t) {
    if (e && null != h) {
        let e = Date.now() - h;
        ((0, s.g)(u.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (h = null));
    } else e || null != h || ((h = Date.now()), (0, s.g)(u.HAw.OVERLAY_UNLOCKED));
    (e ? _.delete(t) : _.add(t), (_ = new Set(_)));
}
function p(e, t) {
    return !!f(e) && (I(e, t), A?.setInteractionEnabled(!e), C.emitChange(), !0);
}
function m(e, t) {
    return (
        !!f(e) &&
        (I(e, t), null == E || (clearTimeout(E), (E = null), !e)) &&
        (e
            ? p(e, t)
            : (E = setTimeout(() => {
                  (p(e, t), g());
              }, 100)),
        !0)
    );
}
function g() {
    null != E && (clearTimeout(E), (E = null));
}
function T() {
    (g(), _.clear(), (_ = new Set()), (h = null));
}
function S(e) {
    let { locked: t, pid: n } = e;
    return ((0, o.dK)(n, "setInputLocked called", { locked: t }), m(t, n), !0);
}
class N extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Input-Lock-Store";
    initialize() {
        this.waitFor(d.A);
    }
    isInputLocked(e) {
        return null == e || -1 === e || !1 === _.has(e);
    }
}
let C = new N(
    r.h,
    __OVERLAY__ || !a.O
        ? { OVERLAY_SET_INPUT_LOCKED: S }
        : {
              OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                  return ((A = d.A.getNativeModule()), T(), !0);
              },
              OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                  return ((A = null), T(), !0);
              },
              OVERLAY_SET_INPUT_LOCKED: S,
              OVERLAY_ACTIVATE_REGION: function (e) {
                  let { region: t } = e,
                      n = l.A.getFocusedPID();
                  return ((0, o.dK)(n ?? null, "activate_region", { region: t }), null != n && m(!1, n), !0);
              },
              OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
                  let e = l.A.getFocusedPID();
                  return ((0, o.dK)(e ?? null, "deactivate_all_regions"), null != e && p(!0, e), !0);
              },
              OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function () {
                  (T(), A?.setInteractionEnabled(!1));
              },
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                  return (T(), !0);
              },
              OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function (e) {
                  let { lastAssociatedPID: t } = e;
                  return (null != t && p(!0, t), !0);
              },
          },
);
n.d(t, {}, { A: C });
