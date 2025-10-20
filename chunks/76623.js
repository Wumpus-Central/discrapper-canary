n.d(t, { Z: () => P }), n(388685);
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
let _ = new s.Z("OverlayV3NativeGPUBoostManager"),
    p = new Set(),
    h = !1,
    m = !1;
function g(e, t) {
    t ? p.add(e) : p.delete(e), O();
}
function E(e) {
    (m = e), O();
}
function b() {
    p.clear(), O();
}
function y() {
    return !m && p.size > 0;
}
async function O() {
    var e, t, n;
    try {
        let n = y();
        if (h === n || !d.iP) return;
        let r = await (null === o.Z ||
        void 0 === o.Z ||
        null == (t = o.Z.processUtils) ||
        null == (e = t.getGpuProcessId)
            ? void 0
            : e.call(t));
        if (null == r) return;
        l.ZP.SetGPUBoostEnabledByPid(r, n) && (h = n), R.emitChange();
    } catch (e) {
        (null == (n = e.message) ? void 0 : n.includes("IPC method called after context was released")) && b(),
            _.error("Error during GPU boost request flush:", e);
    }
}
function v(e) {
    g(e.reason, e.enabled);
}
function I(e) {
    let { enabled: t, mode: n } = e;
    n === c.GO.DisabledGPUBoost && E(t), n === c.GO.ForceGPUBoost && g(c.zS.DEV_FORCED_GPU_BOOST, t);
}
function T() {
    b();
}
function S(e) {
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
        return p;
    }
    isGPUBoosted() {
        return h;
    }
    getIsDisabledGPUBoost() {
        return m;
    }
}
f(N, "displayName", "Overlay-v3-Native-GPU-Boost-Store");
let R = new N(
        a.Z,
        __OVERLAY__ || !d.iP
            ? {}
            : {
                  OVERLAY_SET_GPU_BOOST_REQUESTED: v,
                  OVERLAY_RENDER_DEBUG_MODE: I,
                  OVERLAY_CRASHED: T,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: A,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: C,
                  OVERLAY_SET_INPUT_LOCKED: S,
              },
    ),
    P = R;
