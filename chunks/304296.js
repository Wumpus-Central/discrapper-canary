a.d(t, { A: () => S });
var r = a(17928),
    l = a(228366),
    i = a(723702),
    n = a(19575);
let s = new Set(["nvidia"]);
var u = a(299855),
    o = a.n(u);
let A = { [i.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" } },
    d = { [i.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } },
    g = !1,
    c = !0,
    m = !1;
class f extends r.Ay.Store {
    static displayName = "StreamingCapabilitiesStore";
    initialize() {
        !i.isPlatformEmbedded ||
            __OVERLAY__ ||
            n.Ay.getGPUDriverVersions().then((e) => {
                (g = (function (e) {
                    let t = d[(0, i.getPlatform)()];
                    if (null == t) return !1;
                    for (let a of Object.keys(e)) {
                        let r = e[a],
                            l = t[a];
                        if (null == r || null == l || null != r.error) continue;
                        let i = `${r.major ?? 0}.${r.minor ?? 0}.0`;
                        if (!o().satisfies(i, l)) return !0;
                    }
                    return !1;
                })(e)),
                    (c = (function (e) {
                        for (let t of Object.keys(e)) {
                            let a = e[t];
                            if (null != a && null == a.error && s.has(t)) return !0;
                        }
                        return !1;
                    })(e)),
                    (m = (function (e) {
                        let t = A[(0, i.getPlatform)()];
                        if (null == t) return !1;
                        for (let a of Object.keys(e)) {
                            let r = e[a],
                                l = t[a];
                            if (null == r || null == l || null != r.error) continue;
                            let i = `${r.major ?? 0}.${r.minor ?? 0}.0`;
                            if (!o().satisfies(i, l)) return !0;
                        }
                        return !1;
                    })(e)),
                    this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return g;
    }
    get canUseHardwareAcceleration() {
        return c;
    }
    get problematicGPUDriver() {
        return m;
    }
    getState() {
        return { GPUDriversOutdated: g, canUseHardwareAcceleration: c, problematicGPUDriver: m };
    }
}
let S = new f(l.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (g = t.GPUDriversOutdated), (c = t.canUseHardwareAcceleration);
    },
});
