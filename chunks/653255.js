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
let h = !1,
    f = !0,
    g = !1;
class m extends (l = a.ZP.Store) {
    initialize() {
        !s.isPlatformEmbedded ||
            __OVERLAY__ ||
            c.ZP.getGPUDriverVersions().then((e) => {
                (h = (0, p.Z)(e)), (f = (0, u.Z)(e)), (g = (0, d.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return h;
    }
    get canUseHardwareAcceleration() {
        return f;
    }
    get problematicGPUDriver() {
        return g;
    }
    getState() {
        return {
            GPUDriversOutdated: h,
            canUseHardwareAcceleration: f,
            problematicGPUDriver: g
        };
    }
}
(i = 'StreamingCapabilitiesStore'),
    (r = 'displayName') in m
        ? Object.defineProperty(m, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[r] = i);
let b = new m(o.Z, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (h = t.GPUDriversOutdated), (f = t.canUseHardwareAcceleration);
    }
});
