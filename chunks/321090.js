"use strict";
n.d(t, { A: () => I });
var i = n(17928),
    r = n(228366),
    s = n(77729),
    a = n(626584),
    o = n(19575),
    l = n(206885),
    d = n(41984),
    _ = n(680243);
let u = new a.A("OverlayV3NativeGPUBoostManager"),
    c = new Set(),
    E = !1,
    h = !1;
function m(e, t) {
    t ? c.add(e) : c.delete(e), g();
}
function f() {
    c.clear(), g();
}
async function g() {
    try {
        let e = !h && c.size > 0;
        if (E === e || !l.O) return;
        let t = await s.A?.processUtils?.getGpuProcessId?.();
        if (null == t) return;
        o.Ay.SetGPUBoostEnabledByPid(t, e) && (E = e), A.emitChange();
    } catch (e) {
        e.message?.includes("IPC method called after context was released") && f(),
            u.error("Error during GPU boost request flush:", e);
    }
}
class p extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-GPU-Boost-Store";
    initialize() {
        this.waitFor(_.A);
    }
    getGPUBoostRequests() {
        return c;
    }
    isGPUBoosted() {
        return E;
    }
    getIsDisabledGPUBoost() {
        return h;
    }
}
let A = new p(
        r.h,
        __OVERLAY__ || !l.O
            ? {}
            : {
                  OVERLAY_SET_GPU_BOOST_REQUESTED: function (e) {
                      m(e.reason, e.enabled);
                  },
                  OVERLAY_RENDER_DEBUG_MODE: function (e) {
                      let { enabled: t, mode: n } = e;
                      n === d.x7.DisabledGPUBoost && ((h = t), g()),
                          n === d.x7.ForceGPUBoost && m(d.y7.DEV_FORCED_GPU_BOOST, t);
                  },
                  OVERLAY_CRASHED: function () {
                      f();
                  },
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function () {
                      o.Ay.IsHardwareAcceleratedGPUSchedulingEnabled() &&
                          m(d.y7.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
                          m(d.y7.OVERLAY_RENDERING, !0);
                  },
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                      f();
                  },
                  OVERLAY_SET_INPUT_LOCKED: function (e) {
                      m(d.y7.OVERLAY_UNLOCKED, !e.locked);
                  },
              },
    ),
    I = A;
