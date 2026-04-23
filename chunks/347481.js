"use strict";
n.d(t, { A: () => f });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(506774),
    o = n(228366),
    l = n(731854);
let d = "CertifiedDeviceStore",
    _ = {},
    u = {},
    c = 0;
function E(e, t, n) {
    let i = u[e];
    return null != i ? n(i) : t;
}
function h(e, t) {
    let n = _[e];
    null != n && n.forEach((e) => delete u[e.id]), (_[e] = t), t.forEach((e) => (u[e.id] = e));
}
class m extends s.Ay.Store {
    static displayName = "CertifiedDeviceStore";
    initialize() {
        let e = a.w.get(d);
        null != e &&
            r().forEach(e, (e, t) => {
                e.forEach((e) => {
                    "audioinput" === e.type && e.hardwareMute && (e.hardwareMute = !1);
                }),
                    h(t, e);
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
        return E(e, !1, (e) => e.type === l.oh.AUDIO_INPUT && e.hardwareMute);
    }
    hasEchoCancellation(e) {
        return E(e, !1, (e) => e.type === l.oh.AUDIO_INPUT && e.echoCancellation);
    }
    hasNoiseSuppression(e) {
        return E(e, !1, (e) => e.type === l.oh.AUDIO_INPUT && e.noiseSuppression);
    }
    hasAutomaticGainControl(e) {
        return E(e, !1, (e) => e.type === l.oh.AUDIO_INPUT && e.automaticGainControl);
    }
    getVendor(e) {
        return E(e, null, (e) => e.vendor);
    }
    getModel(e) {
        return E(e, null, (e) => e.model);
    }
    getRevision() {
        return c;
    }
}
let f = new m(o.h, {
    CERTIFIED_DEVICES_SET: function (e) {
        let { applicationId: t, devices: n } = e;
        h(t, n), a.w.set(d, _), c++;
    },
});
