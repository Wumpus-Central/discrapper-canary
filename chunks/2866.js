n.d(t, { A: () => _ });
var i = n(311907),
    r = n(73153),
    a = n(723702),
    l = n(837921),
    s = n(857275),
    o = n(214335),
    d = n(625002);
let u = !1,
    c = !0,
    A = !1;
class h extends i.Ay.Store {
    static displayName = "StreamingCapabilitiesStore";
    initialize() {
        !a.isPlatformEmbedded ||
            __OVERLAY__ ||
            l.Ay.getGPUDriverVersions().then((e) => {
                (u = (0, d.A)(e)), (c = (0, s.A)(e)), (A = (0, o.A)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return u;
    }
    get canUseHardwareAcceleration() {
        return c;
    }
    get problematicGPUDriver() {
        return A;
    }
    getState() {
        return { GPUDriversOutdated: u, canUseHardwareAcceleration: c, problematicGPUDriver: A };
    }
}
let _ = new h(r.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (u = t.GPUDriversOutdated), (c = t.canUseHardwareAcceleration);
    },
});
