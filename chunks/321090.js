"use strict";
n.d(t, { A: () => I });
var r = n(311907),
    i = n(73153),
    s = n(77729),
    a = n(626584),
    o = n(837921),
    l = n(206885),
    u = n(41984),
    d = n(680243);
let c = new a.A("OverlayV3NativeGPUBoostManager"),
    _ = new Set(),
    f = !1,
    E = !1;
function h(e, t) {
    t ? _.add(e) : _.delete(e), m();
}
function p() {
    _.clear(), m();
}
async function m() {
    try {
        let e = !E && _.size > 0;
        if (f === e || !l.O) return;
        let t = await s.A?.processUtils?.getGpuProcessId?.();
        if (null == t) return;
        o.Ay.SetGPUBoostEnabledByPid(t, e) && (f = e), A.emitChange();
    } catch (e) {
        e.message?.includes("IPC method called after context was released") && p(),
            c.error("Error during GPU boost request flush:", e);
    }
}
class g extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-GPU-Boost-Store";
    initialize() {
        this.waitFor(d.A);
    }
    getGPUBoostRequests() {
        return _;
    }
    isGPUBoosted() {
        return f;
    }
    getIsDisabledGPUBoost() {
        return E;
    }
}
let A = new g(
        i.h,
        __OVERLAY__ || !l.O
            ? {}
            : {
                  OVERLAY_SET_GPU_BOOST_REQUESTED: function (e) {
                      h(e.reason, e.enabled);
                  },
                  OVERLAY_RENDER_DEBUG_MODE: function (e) {
                      let { enabled: t, mode: n } = e;
                      n === u.x7.DisabledGPUBoost && ((E = t), m()),
                          n === u.x7.ForceGPUBoost && h(u.y7.DEV_FORCED_GPU_BOOST, t);
                  },
                  OVERLAY_CRASHED: function () {
                      p();
                  },
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function () {
                      o.Ay.IsHardwareAcceleratedGPUSchedulingEnabled() &&
                          h(u.y7.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
                          h(u.y7.OVERLAY_RENDERING, !0);
                  },
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                      p();
                  },
                  OVERLAY_SET_INPUT_LOCKED: function (e) {
                      h(u.y7.OVERLAY_UNLOCKED, !e.locked);
                  },
              },
    ),
    I = A;
