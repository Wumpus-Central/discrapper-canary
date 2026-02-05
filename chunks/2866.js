n.d(t, { A: () => _ });
var i = n(311907),
    r = n(73153),
    a = n(723702),
    l = n(837921),
    s = n(857275),
    o = n(214335),
    d = n(625002);
let c = !1,
    u = !0,
    A = !1;
class h extends i.Ay.Store {
    static displayName = "StreamingCapabilitiesStore";
    initialize() {
        !a.isPlatformEmbedded ||
            __OVERLAY__ ||
            l.Ay.getGPUDriverVersions().then((e) => {
                (c = (0, d.A)(e)), (u = (0, s.A)(e)), (A = (0, o.A)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return c;
    }
    get canUseHardwareAcceleration() {
        return u;
    }
    get problematicGPUDriver() {
        return A;
    }
    getState() {
        return { GPUDriversOutdated: c, canUseHardwareAcceleration: u, problematicGPUDriver: A };
    }
}
let _ = new h(r.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (c = t.GPUDriversOutdated), (u = t.canUseHardwareAcceleration);
    },
});
