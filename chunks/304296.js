"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    s = n(723702),
    a = n(19575);
let o = new Set(["nvidia"]);
var l = n(299855),
    u = n.n(l);
let c = { [s.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" } },
    d = { [s.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } },
    _ = !1,
    f = !0,
    h = !1;
class p extends i.Ay.Store {
    static displayName = "StreamingCapabilitiesStore";
    initialize() {
        !s.isPlatformEmbedded ||
            __OVERLAY__ ||
            a.Ay.getGPUDriverVersions().then((e) => {
                (_ = (function (e) {
                    let t = d[(0, s.getPlatform)()];
                    if (null == t) return !1;
                    for (let n of Object.keys(e)) {
                        let i = e[n],
                            r = t[n];
                        if (null == i || null == r || null != i.error) continue;
                        let s = `${i.major ?? 0}.${i.minor ?? 0}.0`;
                        if (!u().satisfies(s, r)) return !0;
                    }
                    return !1;
                })(e)),
                    (f = (function (e) {
                        for (let t of Object.keys(e)) {
                            let n = e[t];
                            if (null != n && null == n.error && o.has(t)) return !0;
                        }
                        return !1;
                    })(e)),
                    (h = (function (e) {
                        let t = c[(0, s.getPlatform)()];
                        if (null == t) return !1;
                        for (let n of Object.keys(e)) {
                            let i = e[n],
                                r = t[n];
                            if (null == i || null == r || null != i.error) continue;
                            let s = `${i.major ?? 0}.${i.minor ?? 0}.0`;
                            if (!u().satisfies(s, r)) return !0;
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
        return f;
    }
    get problematicGPUDriver() {
        return h;
    }
    getState() {
        return { GPUDriversOutdated: _, canUseHardwareAcceleration: f, problematicGPUDriver: h };
    }
}
let E = new p(r.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { streamingCapabilitiesStoreState: t } = e;
        (_ = t.GPUDriversOutdated), (f = t.canUseHardwareAcceleration);
    },
});
