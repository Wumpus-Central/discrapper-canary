n.d(t, { Z: () => F }), n(388685);
var r,
    i = n(348327),
    a = n.n(i),
    o = n(442837),
    s = n(579092),
    l = n(570140),
    c = n(522474),
    u = n(145597),
    d = n(932404),
    f = n(509140),
    _ = n(575140),
    p = n(987650),
    h = n(501787);
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
let g = new s.Yd("OverlayV3NativeClickZoneStore"),
    E = 30000,
    b = null,
    y = [],
    O = [],
    v = {},
    I = !1;
function T(e) {
    return !a()(e, y);
}
function S(e) {
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
            r = v[e.name];
        return null != r && clearTimeout(r), (v[e.name] = t), n;
    });
}
function A(e, t) {
    var n;
    if (null == b) return void g.error("Overlay module not found");
    let r = null != (n = null == b ? void 0 : b.getLastAssociatedPID()) ? n : u.UNSET_PID;
    try {
        let n = S(e);
        T(e) &&
            (0, d.bs)(r, "capture_zones_set", {
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
    return Object.keys(v).filter((t) => v[t] === e);
}
function N() {
    return O.length > 0 && 0 === y.length;
}
function R(e) {
    let t = C(e);
    for (let n of (null != e && clearTimeout(e), t)) delete v[n];
    let n = O.filter((e) => !t.includes(e.name));
    N() || ((y = n), A(n, "timer_expired")), (O = [...n]);
}
function P(e, t) {
    if (!f.Z.isOverlayEnabled) {
        if (0 === y.length) return;
        D("overlay_disabled");
        return;
    }
    A(e, t), (y = e), (O = [...e]);
}
function D(e) {
    for (let e of Object.values(v)) null != e && clearTimeout(e);
    (v = {}), (y = []), (O = []), A([], e);
}
function w() {
    0 !== y.length && ((O = [...y]), (y = []), A([], "store_click_zones"));
}
function L() {
    y.length > 0 || A((y = [...O]), "refresh_click_zones");
}
function x(e, t, n, r) {
    let i = c.Z.getWindow(h.$J);
    if (null == i) return;
    let a = Math.ceil(n * i.innerWidth),
        o = Math.ceil(r * i.innerHeight),
        s = new MouseEvent((0, _.oc)(t), {
            screenX: a,
            screenY: o,
            clientX: a,
            clientY: o,
            bubbles: !0,
            view: i,
        }),
        l = i.document.elementFromPoint(a, o);
    null != l && l.dispatchEvent(s);
}
function M(e) {
    return D("crashed"), !0;
}
function k(e) {
    let { zones: t } = e;
    return P(t, "set_click_zones"), !0;
}
function j() {
    return D("refresh_host_window"), !0;
}
function U() {
    return null == (b = f.Z.getNativeModule()) || !!I || ((I = !0), b.setCaptureZoneCallback(x), !0);
}
function G() {
    return (b = null), !0;
}
function B(e) {
    let { pid: t } = e;
    return 0 === t ? w() : L(), !0;
}
class Z extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, c.Z);
    }
    getClickZones() {
        return y;
    }
    getFocusLostStoredClickZones() {
        return O;
    }
}
m(Z, "displayName", "Overlay-v3-Native-Debug-Module-Store");
let F = new Z(
    l.Z,
    __OVERLAY__ || !p.iP
        ? {}
        : {
              OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: U,
              OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: G,
              OVERLAY_SET_CLICK_ZONES: k,
              OVERLAY_FOCUSED: B,
              OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: j,
              OVERLAY_CRASHED: M,
          },
);
