var i = n(855986),
    r = n(73153),
    a = n(77729),
    s = n(626584),
    l = n(253400),
    o = n(206885),
    d = n(41984),
    c = n(244055);
let u = new s.A("OverlayV3NativeGPUBoostManager"),
    _ = new Set(),
    E = !1,
    A = !1;
function f(e, t) {
    (t ? _.add(e) : _.delete(e), I());
}
function h() {
    (_.clear(), I());
}
async function I() {
    try {
        let e = !A && _.size > 0;
        if (E === e || !o.O) return;
        let t = await a.A?.processUtils?.getGpuProcessId?.();
        if (null == t) return;
        (l.Ay.SetGPUBoostEnabledByPid(t, e) && (E = e), m.emitChange());
    } catch (e) {
        (e.message?.includes("IPC method called after context was released") && h(),
            u.error("Error during GPU boost request flush:", e));
    }
}
class p extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-GPU-Boost-Store";
    initialize() {
        this.waitFor(c.A);
    }
    getGPUBoostRequests() {
        return _;
    }
    isGPUBoosted() {
        return E;
    }
    getIsDisabledGPUBoost() {
        return A;
    }
}
let m = new p(
    r.h,
    __OVERLAY__ || !o.O
        ? {}
        : {
              OVERLAY_SET_GPU_BOOST_REQUESTED: function (e) {
                  f(e.reason, e.enabled);
              },
              OVERLAY_RENDER_DEBUG_MODE: function (e) {
                  let { enabled: t, mode: n } = e;
                  (n === d.x7.DisabledGPUBoost && ((A = t), I()),
                      n === d.x7.ForceGPUBoost && f(d.y7.DEV_FORCED_GPU_BOOST, t));
              },
              OVERLAY_CRASHED: function () {
                  h();
              },
              OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function () {
                  (l.Ay.IsHardwareAcceleratedGPUSchedulingEnabled() &&
                      f(d.y7.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
                      f(d.y7.OVERLAY_RENDERING, !0));
              },
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                  h();
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  f(d.y7.OVERLAY_UNLOCKED, !e.locked);
              },
          },
);
n.d(t, {}, { A: m });
