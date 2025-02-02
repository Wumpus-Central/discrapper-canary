n.d(t, { Z: () => h });
var o,
    r,
    c,
    i = n(442837),
    d = n(570140),
    _ = n(358085),
    a = n(998502),
    l = n(869614),
    s = n(281083),
    u = n(672598);
let f = !1,
    g = !0,
    p = !1;
class b extends (c = i.ZP.Store) {
    initialize() {
        !_.isPlatformEmbedded ||
            __OVERLAY__ ||
            a.ZP.getGPUDriverVersions().then((e) => {
                (f = (0, u.Z)(e)), (g = (0, l.Z)(e)), (p = (0, s.Z)(e)), this.emitChange();
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
    (o = 'displayName') in b
        ? Object.defineProperty(b, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (b[o] = r);
let h = new b(d.Z, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (f = t.GPUDriversOutdated), (g = t.canUseHardwareAcceleration);
    }
});
