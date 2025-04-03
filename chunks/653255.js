n.d(t, { Z: () => b });
var r,
    i,
    l,
    o = n(442837),
    u = n(570140),
    s = n(358085),
    a = n(998502),
    c = n(869614),
    d = n(281083),
    f = n(672598);
let v = !1,
    p = !0,
    h = !1;
class g extends (l = o.ZP.Store) {
    initialize() {
        !s.isPlatformEmbedded ||
            __OVERLAY__ ||
            a.ZP.getGPUDriverVersions().then((e) => {
                (v = (0, f.Z)(e)), (p = (0, c.Z)(e)), (h = (0, d.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return v;
    }
    get canUseHardwareAcceleration() {
        return p;
    }
    get problematicGPUDriver() {
        return h;
    }
    getState() {
        return {
            GPUDriversOutdated: v,
            canUseHardwareAcceleration: p,
            problematicGPUDriver: h
        };
    }
}
(i = 'StreamingCapabilitiesStore'),
    (r = 'displayName') in g
        ? Object.defineProperty(g, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[r] = i);
let b = new g(u.Z, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (v = t.GPUDriversOutdated), (p = t.canUseHardwareAcceleration);
    }
});
