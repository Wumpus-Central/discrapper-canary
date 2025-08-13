n.d(t, { Z: () => b });
var r,
    i,
    l,
    a = n(442837),
    o = n(570140),
    s = n(358085),
    c = n(998502),
    u = n(869614),
    d = n(281083),
    p = n(672598);
let f = !1,
    h = !0,
    g = !1;
class m extends (l = a.ZP.Store) {
    initialize() {
        !s.isPlatformEmbedded ||
            __OVERLAY__ ||
            c.ZP.getGPUDriverVersions().then((e) => {
                (f = (0, p.Z)(e)), (h = (0, u.Z)(e)), (g = (0, d.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return f;
    }
    get canUseHardwareAcceleration() {
        return h;
    }
    get problematicGPUDriver() {
        return g;
    }
    getState() {
        return {
            GPUDriversOutdated: f,
            canUseHardwareAcceleration: h,
            problematicGPUDriver: g,
        };
    }
}
(i = "StreamingCapabilitiesStore"),
    (r = "displayName") in m
        ? Object.defineProperty(m, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
          })
        : (m[r] = i);
let b = new m(o.Z, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (f = t.GPUDriversOutdated), (h = t.canUseHardwareAcceleration);
    },
});
