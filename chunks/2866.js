n.d(t, {
    A: () => g,
});
var r,
    i,
    l = n(311907),
    a = n(73153),
    s = n(723702),
    o = n(837921),
    c = n(857275),
    u = n(214335),
    d = n(625002);
let p = !1,
    f = !0,
    h = !1;
class A extends (i = l.Ay.Store) {
    initialize() {
        !s.isPlatformEmbedded ||
            __OVERLAY__ ||
            o.Ay.getGPUDriverVersions().then((e) => {
                (p = (0, d.A)(e)), (f = (0, c.A)(e)), (h = (0, u.A)(e)), this.emitChange();
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
(r = "displayName") in A
    ? Object.defineProperty(A, r, {
          value: "StreamingCapabilitiesStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (A[r] = "StreamingCapabilitiesStore");
let g = new A(a.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (p = t.GPUDriversOutdated), (f = t.canUseHardwareAcceleration);
    },
});
