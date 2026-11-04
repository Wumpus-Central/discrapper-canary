a.d(t, { A: () => m });
var r = a(855986),
    i = a(73153),
    l = a(723702),
    n = a(253400);
let s = new Set(["nvidia"]);
var u = a(299855),
    o = a.n(u);
let A = { [l.fg.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" } },
    d = { [l.fg.WINDOWS]: { nvidia: ">=397.93.0" } },
    g = !1,
    c = !0,
    S = !1;
class f extends r.Ay.Store {
    static displayName = "StreamingCapabilitiesStore";
    initialize() {
        !l.isPlatformEmbedded ||
            __OVERLAY__ ||
            n.Ay.getGPUDriverVersions().then((e) => {
                ((g = (function (e) {
                    let t = d[(0, l.uo)()];
                    if (null == t) return !1;
                    for (let a of Object.keys(e)) {
                        let r = e[a],
                            i = t[a];
                        if (null == r || null == i || null != r.error) continue;
                        let l = `${r.major ?? 0}.${r.minor ?? 0}.0`;
                        if (!o().satisfies(l, i)) return !0;
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
                    (S = (function (e) {
                        let t = A[(0, l.uo)()];
                        if (null == t) return !1;
                        for (let a of Object.keys(e)) {
                            let r = e[a],
                                i = t[a];
                            if (null == r || null == i || null != r.error) continue;
                            let l = `${r.major ?? 0}.${r.minor ?? 0}.0`;
                            if (!o().satisfies(l, i)) return !0;
                        }
                        return !1;
                    })(e)),
                    this.emitChange());
            });
    }
    get GPUDriversOutdated() {
        return g;
    }
    get canUseHardwareAcceleration() {
        return c;
    }
    get problematicGPUDriver() {
        return S;
    }
    getState() {
        return { GPUDriversOutdated: g, canUseHardwareAcceleration: c, problematicGPUDriver: S };
    }
}
let m = new f(i.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        ((g = t.GPUDriversOutdated), (c = t.canUseHardwareAcceleration));
    },
});
