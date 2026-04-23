"use strict";
n.d(t, { A: () => E });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(506774),
    o = n(73153),
    l = n(731854);
let u = "CertifiedDeviceStore",
    c = {},
    d = {},
    _ = 0;
function f(e, t, n) {
    let r = d[e];
    return null != r ? n(r) : t;
}
function p(e, t) {
    let n = c[e];
    null != n && n.forEach((e) => delete d[e.id]), (c[e] = t), t.forEach((e) => (d[e.id] = e));
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
                    p(t, e);
            });
    }
    isCertified(e) {
        return null != d[e];
    }
    getCertifiedDevice(e) {
        return d[e];
    }
    getCertifiedDeviceName(e, t) {
        let n = this.getCertifiedDevice(e);
        return null != n ? `${n.vendor.name} ${n.model.name}` : t;
    }
    getCertifiedDeviceByType(e) {
        return i().find(d, (t) => t.type === e);
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
let E = new h(o.h, {
    CERTIFIED_DEVICES_SET: function (e) {
        let { applicationId: t, devices: n } = e;
        p(t, n), a.w.set(u, c), _++;
    },
});
