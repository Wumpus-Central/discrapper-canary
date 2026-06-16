"use strict";
n.d(t, { A: () => E });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(506774),
    o = n(228366),
    l = n(731854);
let u = "CertifiedDeviceStore",
    c = {},
    d = {},
    _ = 0;
function h(e, t, n) {
    let i = d[e];
    return null != i ? n(i) : t;
}
function f(e, t) {
    let n = c[e];
    null != n && n.forEach((e) => delete d[e.id]), (c[e] = t), t.forEach((e) => (d[e.id] = e));
}
class p extends s.Ay.Store {
    static displayName = "CertifiedDeviceStore";
    initialize() {
        let e = a.w.get(u);
        null != e &&
            r().forEach(e, (e, t) => {
                e.forEach((e) => {
                    "audioinput" === e.type && e.hardwareMute && (e.hardwareMute = !1);
                }),
                    f(t, e);
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
        return r().find(d, (t) => t.type === e);
    }
    isHardwareMute(e) {
        return h(e, !1, (e) => e.type === l.oh.AUDIO_INPUT && e.hardwareMute);
    }
    hasEchoCancellation(e) {
        return h(e, !1, (e) => e.type === l.oh.AUDIO_INPUT && e.echoCancellation);
    }
    hasNoiseSuppression(e) {
        return h(e, !1, (e) => e.type === l.oh.AUDIO_INPUT && e.noiseSuppression);
    }
    hasAutomaticGainControl(e) {
        return h(e, !1, (e) => e.type === l.oh.AUDIO_INPUT && e.automaticGainControl);
    }
    getVendor(e) {
        return h(e, null, (e) => e.vendor);
    }
    getModel(e) {
        return h(e, null, (e) => e.model);
    }
    getRevision() {
        return _;
    }
}
let E = new p(o.h, {
    CERTIFIED_DEVICES_SET: function (e) {
        let { applicationId: t, devices: n } = e;
        f(t, n), a.w.set(u, c), _++;
    },
});
