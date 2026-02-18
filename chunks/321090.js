"use strict";
n.d(t, { A: () => O });
var r = n(311907),
    i = n(73153),
    a = n(77729),
    s = n(626584),
    o = n(837921),
    l = n(206885),
    u = n(41984),
    c = n(680243);
let d = new s.A("OverlayV3NativeGPUBoostManager"),
    _ = new Set(),
    f = !1,
    h = !1;
function p(e, t) {
    t ? _.add(e) : _.delete(e), I();
}
function g(e) {
    (h = e), I();
}
function E() {
    _.clear(), I();
}
function A() {
    return !h && _.size > 0;
}
async function I() {
    try {
        let e = A();
        if (f === e || !l.O) return;
        let t = await a.A?.processUtils?.getGpuProcessId?.();
        if (null == t) return;
        o.Ay.SetGPUBoostEnabledByPid(t, e) && (f = e), R.emitChange();
    } catch (e) {
        e.message?.includes("IPC method called after context was released") && E(),
            d.error("Error during GPU boost request flush:", e);
    }
}
function T(e) {
    p(e.reason, e.enabled);
}
function y(e) {
    let { enabled: t, mode: n } = e;
    n === u.x7.DisabledGPUBoost && g(t), n === u.x7.ForceGPUBoost && p(u.y7.DEV_FORCED_GPU_BOOST, t);
}
function S() {
    E();
}
function v(e) {
    p(u.y7.OVERLAY_UNLOCKED, !e.locked);
}
function C() {
    o.Ay.IsHardwareAcceleratedGPUSchedulingEnabled() && p(u.y7.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
        p(u.y7.OVERLAY_RENDERING, !0);
}
function b() {
    E();
}
class N extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-GPU-Boost-Store";
    initialize() {
        this.waitFor(c.A);
    }
    getGPUBoostRequests() {
        return _;
    }
    isGPUBoosted() {
        return f;
    }
    getIsDisabledGPUBoost() {
        return h;
    }
}
let R = new N(
        i.h,
        __OVERLAY__ || !l.O
            ? {}
            : {
                  OVERLAY_SET_GPU_BOOST_REQUESTED: T,
                  OVERLAY_RENDER_DEBUG_MODE: y,
                  OVERLAY_CRASHED: S,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: C,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: b,
                  OVERLAY_SET_INPUT_LOCKED: v,
              },
    ),
    O = R;
