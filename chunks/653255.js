n.d(t, { Z: () => m });
var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(358085),
    s = n(998502),
    c = n(869614),
    u = n(281083),
    d = n(672598);
let p = !1,
    f = !0,
    g = !1;
class h extends (i = l.ZP.Store) {
    initialize() {
        !o.isPlatformEmbedded ||
            __OVERLAY__ ||
            s.ZP.getGPUDriverVersions().then((e) => {
                (p = (0, d.Z)(e)), (f = (0, c.Z)(e)), (g = (0, u.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return p;
    }
    get canUseHardwareAcceleration() {
        return f;
    }
    get problematicGPUDriver() {
        return g;
    }
    getState() {
        return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: f,
            problematicGPUDriver: g,
        };
    }
}
(r = "displayName") in h
    ? Object.defineProperty(h, r, {
          value: "StreamingCapabilitiesStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[r] = "StreamingCapabilitiesStore");
let m = new h(a.Z, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (p = t.GPUDriversOutdated), (f = t.canUseHardwareAcceleration);
    },
});
