var r,
    o,
    i,
    l,
    a = n(442837),
    c = n(570140),
    u = n(358085),
    s = n(998502),
    d = n(869614),
    f = n(281083),
    m = n(672598);
let p = !1,
    _ = !0,
    h = !1;
class g extends (l = a.ZP.Store) {
    initialize() {
        !(!u.isPlatformEmbedded || __OVERLAY__) &&
            s.ZP.getGPUDriverVersions().then((e) => {
                (p = (0, m.Z)(e)), (_ = (0, d.Z)(e)), (h = (0, f.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return p;
    }
    get canUseHardwareAcceleration() {
        return _;
    }
    get problematicGPUDriver() {
        return h;
    }
    getState() {
        return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: _,
            problematicGPUDriver: h
        };
    }
}
(i = 'StreamingCapabilitiesStore'),
    (o = 'displayName') in (r = g)
        ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[o] = i),
    (t.Z = new g(c.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (p = t.GPUDriversOutdated), (_ = t.canUseHardwareAcceleration);
        }
    }));
