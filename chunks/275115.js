n.d(t, {
    A: () => B,
}),
    n(896048);
var r,
    i = n(812729),
    a = n.n(i),
    s = n(311907),
    o = n(118356),
    l = n(73153),
    c = n(87001),
    u = n(9302),
    d = n(682763),
    f = n(680243),
    p = n(96175),
    _ = n(672396),
    h = n(392164);

function m(e, t, n) {
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
let g = new o.Vy("OverlayV3NativeClickZoneStore"),
    E = 3e4,
    b = null,
    y = [],
    O = [],
    A = {},
    v = !1;

function S(e) {
    return !a()(e, y);
}

function I(e) {
    let t = setTimeout(() => {
        R(t);
    }, E);
    return e.map((e) => {
        let n = {
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
            },
            r = A[e.name];
        return null != r && clearTimeout(r), (A[e.name] = t), n;
    });
}

function T(e, t) {
    var n;
    if (null == b) return void g.error("Overlay module not found");
    let r = null != (n = null == b ? void 0 : b.getLastAssociatedPID()) ? n : u.UNSET_PID;
    try {
        let n = I(e);
        S(e) &&
            (0, d._r)(r, "capture_zones_set", {
                source: t,
                capture_zones: n,
                rawZones: e,
            }),
            b.setCaptureZones(n);
    } catch (e) {
        g.error("Error setting capture zones:", e);
    }
}

function C(e) {
    return Object.keys(A).filter((t) => A[t] === e);
}

function N() {
    return O.length > 0 && 0 === y.length;
}

function R(e) {
    let t = C(e);
    for (let n of (null != e && clearTimeout(e), t)) delete A[n];
    let n = O.filter((e) => !t.includes(e.name));
    N() || ((y = n), T(n, "timer_expired")), (O = [...n]);
}

function w(e, t) {
    if (!f.A.isOverlayEnabled) {
        if (0 === y.length) return;
        P("overlay_disabled");
        return;
    }
    T(e, t), (y = e), (O = [...e]);
}

function P(e) {
    for (let e of Object.values(A)) null != e && clearTimeout(e);
    (A = {}), (y = []), (O = []), T([], e);
}

function D() {
    0 !== y.length && ((O = [...y]), (y = []), T([], "store_click_zones"));
}

function x() {
    y.length > 0 || T((y = [...O]), "refresh_click_zones");
}

function L(e, t, n, r) {
    let i = c.A.getWindow(h.f);
    if (null == i) return;
    let a = Math.ceil(n * i.innerWidth),
        s = Math.ceil(r * i.innerHeight),
        o = new MouseEvent((0, p.Br)(t), {
            screenX: a,
            screenY: s,
            clientX: a,
            clientY: s,
            bubbles: !0,
            view: i,
        }),
        l = i.document.elementFromPoint(a, s);
    null != l && l.dispatchEvent(o);
}

function j(e) {
    return P("crashed"), !0;
}

function M(e) {
    let { zones: t } = e;
    return w(t, "set_click_zones"), !0;
}

function k() {
    return P("refresh_host_window"), !0;
}

function U() {
    return null == (b = f.A.getNativeModule()) || !!v || ((v = !0), b.setCaptureZoneCallback(L), !0);
}

function G() {
    return (b = null), !0;
}

function V(e) {
    let { pid: t } = e;
    return 0 === t ? D() : x(), !0;
}
class F extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(f.A, c.A);
    }
    getClickZones() {
        return y;
    }
    getFocusLostStoredClickZones() {
        return O;
    }
}
m(F, "displayName", "Overlay-v3-Native-Debug-Module-Store");
let B = new F(
    l.h,
    __OVERLAY__ || !_.OX
        ? {}
        : {
              OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: U,
              OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: G,
              OVERLAY_SET_CLICK_ZONES: M,
              OVERLAY_FOCUSED: V,
              OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: k,
              OVERLAY_CRASHED: j,
          },
);
