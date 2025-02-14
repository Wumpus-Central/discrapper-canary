n.d(t, { Z: () => b });
var o,
    r,
    i,
    c = n(442837),
    d = n(570140),
    l = n(358085),
    a = n(998502),
    s = n(869614),
    _ = n(281083),
    u = n(672598);
let f = !1,
    g = !0,
    p = !1;
class h extends (i = c.ZP.Store) {
    initialize() {
        !l.isPlatformEmbedded ||
            __OVERLAY__ ||
            a.ZP.getGPUDriverVersions().then((e) => {
                (f = (0, u.Z)(e)), (g = (0, s.Z)(e)), (p = (0, _.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return f;
    }
    get canUseHardwareAcceleration() {
        return g;
    }
    get problematicGPUDriver() {
        return p;
    }
    getState() {
        return {
            GPUDriversOutdated: f,
            canUseHardwareAcceleration: g,
            problematicGPUDriver: p
        };
    }
}
(r = 'StreamingCapabilitiesStore'),
    (o = 'displayName') in h
        ? Object.defineProperty(h, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[o] = r);
let b = new h(d.Z, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (f = t.GPUDriversOutdated), (g = t.canUseHardwareAcceleration);
    }
});
