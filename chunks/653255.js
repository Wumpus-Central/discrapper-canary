t.d(n, { Z: () => g });
var r,
    o,
    l,
    a = t(442837),
    i = t(570140),
    c = t(358085),
    d = t(998502),
    u = t(869614),
    s = t(281083),
    _ = t(672598);
let f = !1,
    m = !0,
    p = !1;
class x extends (l = a.ZP.Store) {
    initialize() {
        !c.isPlatformEmbedded ||
            __OVERLAY__ ||
            d.ZP.getGPUDriverVersions().then((e) => {
                (f = (0, _.Z)(e)), (m = (0, u.Z)(e)), (p = (0, s.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return f;
    }
    get canUseHardwareAcceleration() {
        return m;
    }
    get problematicGPUDriver() {
        return p;
    }
    getState() {
        return {
            GPUDriversOutdated: f,
            canUseHardwareAcceleration: m,
            problematicGPUDriver: p
        };
    }
}
(o = 'StreamingCapabilitiesStore'),
    (r = 'displayName') in x
        ? Object.defineProperty(x, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (x[r] = o);
let g = new x(i.Z, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: n } = e;
        (f = n.GPUDriversOutdated), (m = n.canUseHardwareAcceleration);
    }
});
