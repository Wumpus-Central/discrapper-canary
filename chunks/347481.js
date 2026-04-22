"use strict";
n.d(t, { A: () => p });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(506774),
    o = n(73153),
    l = n(731854);
let u = "CertifiedDeviceStore",
    d = {},
    c = {},
    _ = 0;
function f(e, t, n) {
    let r = c[e];
    return null != r ? n(r) : t;
}
function E(e, t) {
    let n = d[e];
    null != n && n.forEach((e) => delete c[e.id]), (d[e] = t), t.forEach((e) => (c[e.id] = e));
}
class h extends s.Ay.Store {
    static displayName = "CertifiedDeviceStore";
    initialize() {
        let e = a.w.get(u);
        null != e &&
            i().forEach(e, (e, t) => {
                e.forEach((e) => {
                    "audioinput" === e.type && e.hardwareMute && (e.hardwareMute = !1);
                }),
                    E(t, e);
            });
    }
    isCertified(e) {
        return null != c[e];
    }
    getCertifiedDevice(e) {
        return c[e];
    }
    getCertifiedDeviceName(e, t) {
        let n = this.getCertifiedDevice(e);
        return null != n ? `${n.vendor.name} ${n.model.name}` : t;
    }
    getCertifiedDeviceByType(e) {
        return i().find(c, (t) => t.type === e);
    }
    isHardwareMute(e) {
        return f(e, !1, (e) => e.type === l.oh.AUDIO_INPUT && e.hardwareMute);
    }
    hasEchoCancellation(e) {
        return f(e, !1, (e) => e.type === l.oh.AUDIO_INPUT && e.echoCancellation);
    }
    hasNoiseSuppression(e) {
        return f(e, !1, (e) => e.type === l.oh.AUDIO_INPUT && e.noiseSuppression);
    }
    hasAutomaticGainControl(e) {
        return f(e, !1, (e) => e.type === l.oh.AUDIO_INPUT && e.automaticGainControl);
    }
    getVendor(e) {
        return f(e, null, (e) => e.vendor);
    }
    getModel(e) {
        return f(e, null, (e) => e.model);
    }
    getRevision() {
        return _;
    }
}
let p = new h(o.h, {
    CERTIFIED_DEVICES_SET: function (e) {
        let { applicationId: t, devices: n } = e;
        E(t, n), a.w.set(u, d), _++;
    },
});
