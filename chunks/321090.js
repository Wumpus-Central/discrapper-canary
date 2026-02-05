"use strict";
n.d(t, { A: () => R });
var r = n(311907),
    i = n(73153),
    a = n(77729),
    s = n(626584),
    o = n(837921),
    l = n(41984),
    u = n(680243),
    c = n(672396);
let d = new s.A("OverlayV3NativeGPUBoostManager"),
    _ = new Set(),
    f = !1,
    p = !1;
function h(e, t) {
    t ? _.add(e) : _.delete(e), A();
}
function m(e) {
    (p = e), A();
}
function g() {
    _.clear(), A();
}
function E() {
    return !p && _.size > 0;
}
async function A() {
    try {
        let e = E();
        if (f === e || !c.OX) return;
        let t = await a.A?.processUtils?.getGpuProcessId?.();
        if (null == t) return;
        o.Ay.SetGPUBoostEnabledByPid(t, e) && (f = e), N.emitChange();
    } catch (e) {
        e.message?.includes("IPC method called after context was released") && g(),
            d.error("Error during GPU boost request flush:", e);
    }
}
function I(e) {
    h(e.reason, e.enabled);
}
function T(e) {
    let { enabled: t, mode: n } = e;
    n === l.x7.DisabledGPUBoost && m(t), n === l.x7.ForceGPUBoost && h(l.y7.DEV_FORCED_GPU_BOOST, t);
}
function y() {
    g();
}
function S(e) {
    h(l.y7.OVERLAY_UNLOCKED, !e.locked);
}
function v() {
    o.Ay.IsHardwareAcceleratedGPUSchedulingEnabled() && h(l.y7.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
        h(l.y7.OVERLAY_RENDERING, !0);
}
function C() {
    g();
}
class b extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-GPU-Boost-Store";
    initialize() {
        this.waitFor(u.A);
    }
    getGPUBoostRequests() {
        return _;
    }
    isGPUBoosted() {
        return f;
    }
    getIsDisabledGPUBoost() {
        return p;
    }
}
let N = new b(
        i.h,
        __OVERLAY__ || !c.OX
            ? {}
            : {
                  OVERLAY_SET_GPU_BOOST_REQUESTED: I,
                  OVERLAY_RENDER_DEBUG_MODE: T,
                  OVERLAY_CRASHED: y,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: v,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: C,
                  OVERLAY_SET_INPUT_LOCKED: S,
              },
    ),
    R = N;
