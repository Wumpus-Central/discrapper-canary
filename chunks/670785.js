n.d(t, { Z: () => F }), n(388685);
var r,
    i = n(348327),
    a = n.n(i),
    o = n(442837),
    s = n(579092),
    l = n(570140),
    c = n(69004),
    u = n(928518),
    d = n(145597),
    f = n(932404),
    _ = n(509140),
    p = n(501787);
function h(e, t, n) {
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
let m = new s.Yd("OverlayV3NativeClickZoneStore"),
    g = 30000,
    E = null,
    b = [],
    y = [],
    O = {};
function v(e) {
    return !a()(e, b);
}
function I(e) {
    let t = setTimeout(() => {
        C(t);
    }, g);
    return e.map(
        (e) => (
            (O[e.name] = t),
            {
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
            }
        ),
    );
}
function T(e, t) {
    var n;
    let r = null != (n = null == E ? void 0 : E.getLastAssociatedPID()) ? n : d.UNSET_PID;
    try {
        let n = I(e);
        v(e) &&
            (0, f.Uk)(r, "capture_zones_set", {
                source: t,
                capture_zones: n,
                rawZones: e,
            }),
            null == E || E.setCaptureZones(n);
    } catch (e) {
        m.error("Error setting capture zones:", e);
    }
}
function S(e) {
    return Object.keys(O).filter((t) => O[t] === e);
}
function A() {
    return y.length > 0 && 0 === b.length;
}
function C(e) {
    let t = S(e);
    for (let n of (null != e && clearTimeout(e), t)) delete O[n];
    let n = y.filter((e) => !t.includes(e.name));
    A() || ((b = n), T(n, "timer_expired")), (y = [...n]);
}
function N(e, t) {
    T(e, t), (b = e), (y = [...e]);
}
function R(e) {
    for (let e of Object.values(O)) null != e && clearTimeout(e);
    (O = {}), (b = []), (y = []), T([], e);
}
function P() {
    0 !== b.length && ((y = [...b]), (b = []), T([], "store_click_zones"));
}
function w() {
    b.length > 0 || T((b = [...y]), "refresh_click_zones");
}
let D = new c.Z(100);
function L(e, t, n, r) {
    return "".concat(e, "-").concat(t, "-").concat(n, "-").concat(r);
}
function x(e, t, n, r) {
    let i = u.Z.getWindow(p.$J);
    if (null == i) return;
    let a = Math.ceil(n * i.innerWidth),
        o = Math.ceil(r * i.innerHeight),
        s = new MouseEvent(t, {
            screenX: a,
            screenY: o,
            clientX: a,
            clientY: o,
            bubbles: !0,
            view: i,
        }),
        l = i.document.elementFromPoint(a, o);
    if (null == l) return;
    let c = L(e, t, a, o);
    if (!D.has(c)) {
        var _;
        D.set(c, {
            eventType: t,
            event: s,
            node: l,
        });
        let n = null != (_ = null == E ? void 0 : E.getLastAssociatedPID()) ? _ : d.UNSET_PID;
        (0, f.Uk)(n, "new_click_zone_event", {
            zone: e,
            eventType: t,
            event: s,
            node: l,
        });
    }
    l.dispatchEvent(s);
}
function M(e) {
    return R("crashed"), !0;
}
function k(e) {
    let { zones: t } = e;
    return N(t, "set_click_zones"), !0;
}
function j() {
    return R("refresh_host_window"), !0;
}
function U() {
    return null != (E = _.Z.getNativeModule()) && E.setCaptureZoneCallback(x), !0;
}
function G() {
    return (E = null), !0;
}
function B(e) {
    let { pid: t } = e;
    return 0 === t ? P() : w(), !0;
}
class Z extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(_.Z);
    }
    getClickZones() {
        return b;
    }
    getFocusLostStoredClickZones() {
        return y;
    }
}
h(Z, "displayName", "Overlay-v3-Native-Debug-Module-Store");
let F = new Z(
    l.Z,
    __OVERLAY__
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
