"use strict";
n.d(t, { A: () => I });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(506774),
    l = n(228366),
    o = n(731854);
let d = "CertifiedDeviceStore",
    c = {},
    u = {},
    _ = 0;
function E(e, t, n) {
    let i = u[e];
    return null != i ? n(i) : t;
}
function A(e, t) {
    let n = c[e];
    null != n && n.forEach((e) => delete u[e.id]), (c[e] = t), t.forEach((e) => (u[e.id] = e));
}
class h extends a.Ay.Store {
    static displayName = "CertifiedDeviceStore";
    initialize() {
        let e = s.w.get(d);
        null != e &&
            r().forEach(e, (e, t) => {
                e.forEach((e) => {
                    "audioinput" === e.type && e.hardwareMute && (e.hardwareMute = !1);
                }),
                    A(t, e);
            });
    }
    isCertified(e) {
        return null != u[e];
    }
    getCertifiedDevice(e) {
        return u[e];
    }
    getCertifiedDeviceName(e, t) {
        let n = this.getCertifiedDevice(e);
        return null != n ? `${n.vendor.name} ${n.model.name}` : t;
    }
    getCertifiedDeviceByType(e) {
        return r().find(u, (t) => t.type === e);
    }
    isHardwareMute(e) {
        return E(e, !1, (e) => e.type === o.oh.AUDIO_INPUT && e.hardwareMute);
    }
    hasEchoCancellation(e) {
        return E(e, !1, (e) => e.type === o.oh.AUDIO_INPUT && e.echoCancellation);
    }
    hasNoiseSuppression(e) {
        return E(e, !1, (e) => e.type === o.oh.AUDIO_INPUT && e.noiseSuppression);
    }
    hasAutomaticGainControl(e) {
        return E(e, !1, (e) => e.type === o.oh.AUDIO_INPUT && e.automaticGainControl);
    }
    getVendor(e) {
        return E(e, null, (e) => e.vendor);
    }
    getModel(e) {
        return E(e, null, (e) => e.model);
    }
    getRevision() {
        return _;
    }
}
let I = new h(l.h, {
    CERTIFIED_DEVICES_SET: function (e) {
        let { applicationId: t, devices: n } = e;
        A(t, n), s.w.set(d, c), _++;
    },
});
