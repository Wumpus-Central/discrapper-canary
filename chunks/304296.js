n.d(t, { A: () => p });
var i = n(17928),
    r = n(228366),
    a = n(723702),
    l = n(19575);
let s = new Set(["nvidia"]);
var o = n(299855),
    d = n.n(o);
let u = { [a.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" } },
    c = { [a.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } },
    _ = !1,
    A = !0,
    h = !1;
class E extends i.Ay.Store {
    static displayName = "StreamingCapabilitiesStore";
    initialize() {
        !a.isPlatformEmbedded ||
            __OVERLAY__ ||
            l.Ay.getGPUDriverVersions().then((e) => {
                (_ = (function (e) {
                    let t = c[(0, a.getPlatform)()];
                    if (null == t) return !1;
                    for (let n of Object.keys(e)) {
                        let i = e[n],
                            r = t[n];
                        if (null == i || null == r || null != i.error) continue;
                        let a = `${i.major ?? 0}.${i.minor ?? 0}.0`;
                        if (!d().satisfies(a, r)) return !0;
                    }
                    return !1;
                })(e)),
                    (A = (function (e) {
                        for (let t of Object.keys(e)) {
                            let n = e[t];
                            if (null != n && null == n.error && s.has(t)) return !0;
                        }
                        return !1;
                    })(e)),
                    (h = (function (e) {
                        let t = u[(0, a.getPlatform)()];
                        if (null == t) return !1;
                        for (let n of Object.keys(e)) {
                            let i = e[n],
                                r = t[n];
                            if (null == i || null == r || null != i.error) continue;
                            let a = `${i.major ?? 0}.${i.minor ?? 0}.0`;
                            if (!d().satisfies(a, r)) return !0;
                        }
                        return !1;
                    })(e)),
                    this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return _;
    }
    get canUseHardwareAcceleration() {
        return A;
    }
    get problematicGPUDriver() {
        return h;
    }
    getState() {
        return { GPUDriversOutdated: _, canUseHardwareAcceleration: A, problematicGPUDriver: h };
    }
}
let p = new E(r.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (_ = t.GPUDriversOutdated), (A = t.canUseHardwareAcceleration);
    },
});
