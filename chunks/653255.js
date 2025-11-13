n.d(t, { Z: () => m });
var r,
    i,
    l = n(442837),
    a = n(570140),
    s = n(358085),
    o = n(998502),
    c = n(869614),
    u = n(281083),
    d = n(672598);
let p = !1,
    f = !0,
    h = !1;
class g extends (i = l.ZP.Store) {
    initialize() {
        !s.isPlatformEmbedded ||
            __OVERLAY__ ||
            o.ZP.getGPUDriverVersions().then((e) => {
                (p = (0, d.Z)(e)), (f = (0, c.Z)(e)), (h = (0, u.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return p;
    }
    get canUseHardwareAcceleration() {
        return f;
    }
    get problematicGPUDriver() {
        return h;
    }
    getState() {
        return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: f,
            problematicGPUDriver: h,
        };
    }
}
(r = "displayName") in g
    ? Object.defineProperty(g, r, {
          value: "StreamingCapabilitiesStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (g[r] = "StreamingCapabilitiesStore");
let m = new g(a.Z, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (p = t.GPUDriversOutdated), (f = t.canUseHardwareAcceleration);
    },
});
