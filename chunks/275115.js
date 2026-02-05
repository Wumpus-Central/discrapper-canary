"use strict";
n.d(t, { A: () => F });
var r = n(812729),
    i = n.n(r),
    a = n(311907),
    s = n(118356),
    o = n(73153),
    l = n(87001),
    u = n(9302),
    c = n(682763),
    d = n(680243),
    _ = n(96175),
    f = n(672396),
    p = n(392164);
let h = new s.Vy("OverlayV3NativeClickZoneStore"),
    m = 3e4,
    g = null,
    E = [],
    A = [],
    I = {},
    T = !1;
function y(e) {
    return !i()(e, E);
}
function S(e) {
    let t = setTimeout(() => {
        N(t);
    }, m);
    return e.map((e) => {
        let n = { name: e.name, left: e.left, top: e.top, right: e.right, bottom: e.bottom },
            r = I[e.name];
        return null != r && clearTimeout(r), (I[e.name] = t), n;
    });
}
function v(e, t) {
    if (null == g) return void h.error("Overlay module not found");
    let n = g?.getLastAssociatedPID() ?? u.UNSET_PID;
    try {
        let r = S(e);
        y(e) && (0, c._r)(n, "capture_zones_set", { source: t, capture_zones: r, rawZones: e }), g.setCaptureZones(r);
    } catch (e) {
        h.error("Error setting capture zones:", e);
    }
}
function C(e) {
    return Object.keys(I).filter((t) => I[t] === e);
}
function b() {
    return A.length > 0 && 0 === E.length;
}
function N(e) {
    let t = C(e);
    for (let n of (null != e && clearTimeout(e), t)) delete I[n];
    let n = A.filter((e) => !t.includes(e.name));
    b() || ((E = n), v(n, "timer_expired")), (A = [...n]);
}
function R(e, t) {
    if (!d.A.isOverlayEnabled) {
        if (0 === E.length) return;
        O("overlay_disabled");
        return;
    }
    v(e, t), (E = e), (A = [...e]);
}
function O(e) {
    for (let e of Object.values(I)) null != e && clearTimeout(e);
    (I = {}), (E = []), (A = []), v([], e);
}
function D() {
    0 !== E.length && ((A = [...E]), (E = []), v([], "store_click_zones"));
}
function L() {
    E.length > 0 || v((E = [...A]), "refresh_click_zones");
}
function w(e, t, n, r) {
    let i = l.A.getWindow(p.f);
    if (null == i) return;
    let a = Math.ceil(n * i.innerWidth),
        s = Math.ceil(r * i.innerHeight),
        o = new MouseEvent((0, _.Br)(t), { screenX: a, screenY: s, clientX: a, clientY: s, bubbles: !0, view: i }),
        u = i.document.elementFromPoint(a, s);
    null != u && u.dispatchEvent(o);
}
function x(e) {
    return O("crashed"), !0;
}
function P(e) {
    let { zones: t } = e;
    return R(t, "set_click_zones"), !0;
}
function M() {
    return O("refresh_host_window"), !0;
}
function k() {
    return null == (g = d.A.getNativeModule()) || !!T || ((T = !0), g.setCaptureZoneCallback(w), !0);
}
function U() {
    return (g = null), !0;
}
function G(e) {
    let { pid: t } = e;
    return 0 === t ? D() : L(), !0;
}
class V extends a.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(d.A, l.A);
    }
    getClickZones() {
        return E;
    }
    getFocusLostStoredClickZones() {
        return A;
    }
}
let F = new V(
    o.h,
    __OVERLAY__ || !f.OX
        ? {}
        : {
              OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: k,
              OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: U,
              OVERLAY_SET_CLICK_ZONES: P,
              OVERLAY_FOCUSED: G,
              OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: M,
              OVERLAY_CRASHED: x,
          },
);
