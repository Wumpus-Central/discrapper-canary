n.d(t, { Z: () => M }), n(388685);
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
function _(e, t, n) {
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
let p = new Set(),
    h = null,
    m = null,
    g = null;
function E(e) {
    var t;
    if (d.y3) return !0;
    if (null == m) return !1;
    let n = null != (t = null == m ? void 0 : m.isCrashedDisabled) && t;
    return !!e || !n;
}
function b(e) {
    if (e && null != g) {
        let e = Date.now() - g;
        o.Z.track(f.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (g = null);
    } else e || null != g || ((g = Date.now()), o.Z.track(f.rMx.OVERLAY_UNLOCKED));
}
function y(e, t) {
    b(e), e ? p.delete(t) : p.add(t), (p = new Set(p));
}
function O(e, t) {
    return !!E(e) && (y(e, t), null == m || m.setInteractionEnabled(!e), x.emitChange(), !0);
}
function v(e, t) {
    return (
        !!E(e) &&
        (y(e, t), null == h || (clearTimeout(h), (h = null), !e)) &&
        (e
            ? O(e, t)
            : (h = setTimeout(() => {
                  O(e, t), I();
              }, 100)),
        !0)
    );
}
function I() {
    null != h && (clearTimeout(h), (h = null));
}
function T() {
    I(), p.clear(), (p = new Set()), (g = null);
}
function S() {
    return (m = u.Z.getNativeModule()), T(), !0;
}
function A() {
    return (m = null), T(), !0;
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
function R() {
    let e = l.Z.getFocusedPID();
    return (0, c.PY)(null != e ? e : null, "deactivate_all_regions"), null != e && O(!0, e), !0;
}
function P() {
    return T(), !0;
}
function D(e) {
    let { lastAssociatedPID: t } = e;
    return null != t && O(!0, t), !0;
}
function w() {
    T(), null == m || m.setInteractionEnabled(!1);
}
class L extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    isInputLocked(e) {
        return null == e || e === s.UNSET_PID || !1 === p.has(e);
    }
}
_(L, "displayName", "Overlay-v3-Native-Input-Lock-Store");
let x = new L(
        a.Z,
        __OVERLAY__ || !d.iP
            ? { OVERLAY_SET_INPUT_LOCKED: C }
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: S,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: A,
                  OVERLAY_SET_INPUT_LOCKED: C,
                  OVERLAY_ACTIVATE_REGION: N,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: R,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: w,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: P,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: D,
              },
    ),
    M = x;
