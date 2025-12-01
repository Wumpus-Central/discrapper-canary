n.d(t, { Z: () => R }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(579806),
    s = n(710845),
    l = n(998502),
    c = n(837268),
    u = n(509140),
    d = n(987650);
function f(e, t, n) {
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
let p = new s.Z("OverlayV3NativeGPUBoostManager"),
    _ = new Set(),
    m = !1,
    h = !1;
function g(e, t) {
    t ? _.add(e) : _.delete(e), O();
}
function E(e) {
    (h = e), O();
}
function b() {
    _.clear(), O();
}
function y() {
    return !h && _.size > 0;
}
async function O() {
    var e, t, n;
    try {
        let n = y();
        if (m === n || !d.iP) return;
        let r = await (null === o.Z ||
        void 0 === o.Z ||
        null == (t = o.Z.processUtils) ||
        null == (e = t.getGpuProcessId)
            ? void 0
            : e.call(t));
        if (null == r) return;
        l.ZP.SetGPUBoostEnabledByPid(r, n) && (m = n), P.emitChange();
    } catch (e) {
        (null == (n = e.message) ? void 0 : n.includes("IPC method called after context was released")) && b(),
            p.error("Error during GPU boost request flush:", e);
    }
}
function v(e) {
    g(e.reason, e.enabled);
}
function S(e) {
    let { enabled: t, mode: n } = e;
    n === c.GO.DisabledGPUBoost && E(t), n === c.GO.ForceGPUBoost && g(c.zS.DEV_FORCED_GPU_BOOST, t);
}
function I() {
    b();
}
function T(e) {
    g(c.zS.OVERLAY_UNLOCKED, !e.locked);
}
function A() {
    l.ZP.IsHardwareAcceleratedGPUSchedulingEnabled() && g(c.zS.HARDWARE_ACCELERATED_GPU_SCHEDULING_ENABLED, !0),
        g(c.zS.OVERLAY_RENDERING, !0);
}
function C() {
    b();
}
class N extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getGPUBoostRequests() {
        return _;
    }
    isGPUBoosted() {
        return m;
    }
    getIsDisabledGPUBoost() {
        return h;
    }
}
f(N, "displayName", "Overlay-v3-Native-GPU-Boost-Store");
let P = new N(
        a.Z,
        __OVERLAY__ || !d.iP
            ? {}
            : {
                  OVERLAY_SET_GPU_BOOST_REQUESTED: v,
                  OVERLAY_RENDER_DEBUG_MODE: S,
                  OVERLAY_CRASHED: I,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: A,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: C,
                  OVERLAY_SET_INPUT_LOCKED: T,
              },
    ),
    R = P;
