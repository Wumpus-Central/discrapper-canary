n.d(t, { Z: () => p });
var o,
    c,
    r,
    i = n(442837),
    d = n(570140),
    _ = n(358085),
    a = n(998502),
    l = n(869614),
    s = n(281083),
    u = n(672598);
let f = !1,
    g = !0,
    b = !1;
class h extends (r = i.ZP.Store) {
    initialize() {
        !_.isPlatformEmbedded ||
            __OVERLAY__ ||
            a.ZP.getGPUDriverVersions().then((e) => {
                (f = (0, u.Z)(e)), (g = (0, l.Z)(e)), (b = (0, s.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return f;
    }
    get canUseHardwareAcceleration() {
        return g;
    }
    get problematicGPUDriver() {
        return b;
    }
    getState() {
        return {
            GPUDriversOutdated: f,
            canUseHardwareAcceleration: g,
            problematicGPUDriver: b
        };
    }
}
(c = 'StreamingCapabilitiesStore'),
    (o = 'displayName') in h
        ? Object.defineProperty(h, o, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[o] = c);
let p = new h(d.Z, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (f = t.GPUDriversOutdated), (g = t.canUseHardwareAcceleration);
    }
});
