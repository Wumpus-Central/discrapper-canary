var r,
    o,
    a,
    l,
    i = t(442837),
    c = t(570140),
    u = t(358085),
    d = t(998502),
    s = t(869614),
    f = t(281083),
    m = t(672598);
let _ = !1,
    p = !0,
    x = !1;
class h extends (l = i.ZP.Store) {
    initialize() {
        !(!u.isPlatformEmbedded || __OVERLAY__) &&
            d.ZP.getGPUDriverVersions().then((e) => {
                (_ = (0, m.Z)(e)), (p = (0, s.Z)(e)), (x = (0, f.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return _;
    }
    get canUseHardwareAcceleration() {
        return p;
    }
    get problematicGPUDriver() {
        return x;
    }
    getState() {
        return {
            GPUDriversOutdated: _,
            canUseHardwareAcceleration: p,
            problematicGPUDriver: x
        };
    }
}
(a = 'StreamingCapabilitiesStore'),
    (o = 'displayName') in (r = h)
        ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[o] = a),
    (n.Z = new h(c.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: n } = e;
            (_ = n.GPUDriversOutdated), (p = n.canUseHardwareAcceleration);
        }
    }));
