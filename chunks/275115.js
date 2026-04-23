"use strict";
n.d(t, { A: () => v });
var r = n(812729),
    i = n.n(r),
    s = n(311907),
    a = n(118356),
    o = n(73153),
    l = n(87001),
    u = n(9302),
    c = n(206885),
    d = n(682763),
    _ = n(680243),
    f = n(96175),
    p = n(392164);
let h = new a.Vy("OverlayV3NativeClickZoneStore"),
    E = null,
    m = [],
    g = [],
    A = {},
    I = !1;
function T(e, t) {
    if (null == E) return void h.error("Overlay module not found");
    let n = E?.getLastAssociatedPID() ?? u.UNSET_PID;
    try {
        let r,
            s =
                ((r = setTimeout(() => {
                    !(function (e) {
                        let t = Object.keys(A).filter((t) => A[t] === e);
                        for (let n of (null != e && clearTimeout(e), t)) delete A[n];
                        let n = g.filter((e) => !t.includes(e.name));
                        (g.length > 0 && 0 === m.length) || ((m = n), T(n, "timer_expired")), (g = [...n]);
                    })(r);
                }, 3e4)),
                e.map((e) => {
                    let t = { name: e.name, left: e.left, top: e.top, right: e.right, bottom: e.bottom },
                        n = A[e.name];
                    return null != n && clearTimeout(n), (A[e.name] = r), t;
                }));
        i()(e, m) || (0, d._r)(n, "capture_zones_set", { source: t, capture_zones: s, rawZones: e }),
            E.setCaptureZones(s);
    } catch (e) {
        h.error("Error setting capture zones:", e);
    }
}
function S(e) {
    for (let e of Object.values(A)) null != e && clearTimeout(e);
    (A = {}), (m = []), (g = []), T([], e);
}
function y(e, t, n, r) {
    let i = l.A.getWindow(p.f);
    if (null == i) return;
    let s = Math.ceil(n * i.innerWidth),
        a = Math.ceil(r * i.innerHeight),
        o = new MouseEvent((0, f.Br)(t), { screenX: s, screenY: a, clientX: s, clientY: a, bubbles: !0, view: i }),
        u = i.document.elementFromPoint(s, a);
    null != u && u.dispatchEvent(o);
}
class N extends s.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(_.A, l.A);
    }
    getClickZones() {
        return m;
    }
    getFocusLostStoredClickZones() {
        return g;
    }
}
let v = new N(
    o.h,
    __OVERLAY__ || !c.O
        ? {}
        : {
              OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                  return null == (E = _.A.getNativeModule()) || !!I || ((I = !0), E.setCaptureZoneCallback(y), !0);
              },
              OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                  return (E = null), !0;
              },
              OVERLAY_SET_CLICK_ZONES: function (e) {
                  let { zones: t } = e;
                  return (
                      !(function (e, t) {
                          if (!_.A.isOverlayEnabled) {
                              if (0 === m.length) return;
                              S("overlay_disabled");
                              return;
                          }
                          T(e, t), (m = e), (g = [...e]);
                      })(t, "set_click_zones"),
                      !0
                  );
              },
              OVERLAY_FOCUSED: function (e) {
                  let { pid: t } = e;
                  return (
                      0 === t
                          ? 0 !== m.length && ((g = [...m]), (m = []), T([], "store_click_zones"))
                          : m.length > 0 || T((m = [...g]), "refresh_click_zones"),
                      !0
                  );
              },
              OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function () {
                  return S("refresh_host_window"), !0;
              },
              OVERLAY_CRASHED: function (e) {
                  return S("crashed"), !0;
              },
          },
);
