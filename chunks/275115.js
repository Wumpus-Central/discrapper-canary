"use strict";
n.d(t, { A: () => B });
var r = n(812729),
    i = n.n(r),
    a = n(311907),
    s = n(118356),
    o = n(73153),
    l = n(87001),
    u = n(9302),
    c = n(206885),
    d = n(682763),
    _ = n(680243),
    f = n(96175),
    h = n(392164);
let p = new s.Vy("OverlayV3NativeClickZoneStore"),
    g = 3e4,
    E = null,
    A = [],
    I = [],
    T = {},
    y = !1;
function S(e) {
    return !i()(e, A);
}
function v(e) {
    let t = setTimeout(() => {
        R(t);
    }, g);
    return e.map((e) => {
        let n = { name: e.name, left: e.left, top: e.top, right: e.right, bottom: e.bottom },
            r = T[e.name];
        return null != r && clearTimeout(r), (T[e.name] = t), n;
    });
}
function C(e, t) {
    if (null == E) return void p.error("Overlay module not found");
    let n = E?.getLastAssociatedPID() ?? u.UNSET_PID;
    try {
        let r = v(e);
        S(e) && (0, d._r)(n, "capture_zones_set", { source: t, capture_zones: r, rawZones: e }), E.setCaptureZones(r);
    } catch (e) {
        p.error("Error setting capture zones:", e);
    }
}
function b(e) {
    return Object.keys(T).filter((t) => T[t] === e);
}
function N() {
    return I.length > 0 && 0 === A.length;
}
function R(e) {
    let t = b(e);
    for (let n of (null != e && clearTimeout(e), t)) delete T[n];
    let n = I.filter((e) => !t.includes(e.name));
    N() || ((A = n), C(n, "timer_expired")), (I = [...n]);
}
function O(e, t) {
    if (!_.A.isOverlayEnabled) {
        if (0 === A.length) return;
        D("overlay_disabled");
        return;
    }
    C(e, t), (A = e), (I = [...e]);
}
function D(e) {
    for (let e of Object.values(T)) null != e && clearTimeout(e);
    (T = {}), (A = []), (I = []), C([], e);
}
function L() {
    0 !== A.length && ((I = [...A]), (A = []), C([], "store_click_zones"));
}
function w() {
    A.length > 0 || C((A = [...I]), "refresh_click_zones");
}
function x(e, t, n, r) {
    let i = l.A.getWindow(h.f);
    if (null == i) return;
    let a = Math.ceil(n * i.innerWidth),
        s = Math.ceil(r * i.innerHeight),
        o = new MouseEvent((0, f.Br)(t), { screenX: a, screenY: s, clientX: a, clientY: s, bubbles: !0, view: i }),
        u = i.document.elementFromPoint(a, s);
    null != u && u.dispatchEvent(o);
}
function P(e) {
    return D("crashed"), !0;
}
function M(e) {
    let { zones: t } = e;
    return O(t, "set_click_zones"), !0;
}
function k() {
    return D("refresh_host_window"), !0;
}
function U() {
    return null == (E = _.A.getNativeModule()) || !!y || ((y = !0), E.setCaptureZoneCallback(x), !0);
}
function G() {
    return (E = null), !0;
}
function F(e) {
    let { pid: t } = e;
    return 0 === t ? L() : w(), !0;
}
class V extends a.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(_.A, l.A);
    }
    getClickZones() {
        return A;
    }
    getFocusLostStoredClickZones() {
        return I;
    }
}
let B = new V(
    o.h,
    __OVERLAY__ || !c.O
        ? {}
        : {
              OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: U,
              OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: G,
              OVERLAY_SET_CLICK_ZONES: M,
              OVERLAY_FOCUSED: F,
              OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: k,
              OVERLAY_CRASHED: P,
          },
);
