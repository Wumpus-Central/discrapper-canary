var i,
    a = r(392711),
    o = r.n(a),
    s = r(442837),
    l = r(433517),
    u = r(570140),
    c = r(65154);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = 'CertifiedDeviceStore',
    p = {},
    h = {},
    _ = 0;
function m(e, n, r) {
    let i = h[e];
    return null != i ? r(i) : n;
}
function g(e, n) {
    let r = p[e];
    null != r && r.forEach((e) => delete h[e.id]), (p[e] = n), n.forEach((e) => (h[e.id] = e));
}
function E(e) {
    let { applicationId: n, devices: r } = e;
    g(n, r), l.K.set(f, p), _++;
}
class v extends (i = s.ZP.Store) {
    initialize() {
        let e = l.K.get(f);
        null != e &&
            o().forEach(e, (e, n) => {
                e.forEach((e) => {
                    'audioinput' === e.type && e.hardwareMute && (e.hardwareMute = !1);
                }),
                    g(n, e);
            });
    }
    isCertified(e) {
        return null != h[e];
    }
    getCertifiedDevice(e) {
        return h[e];
    }
    getCertifiedDeviceName(e, n) {
        let r = this.getCertifiedDevice(e);
        return null != r ? ''.concat(r.vendor.name, ' ').concat(r.model.name) : n;
    }
    getCertifiedDeviceByType(e) {
        return o().find(h, (n) => n.type === e);
    }
    isHardwareMute(e) {
        return m(e, !1, (e) => e.type === c.h7.AUDIO_INPUT && e.hardwareMute);
    }
    hasEchoCancellation(e) {
        return m(e, !1, (e) => e.type === c.h7.AUDIO_INPUT && e.echoCancellation);
    }
    hasNoiseSuppression(e) {
        return m(e, !1, (e) => e.type === c.h7.AUDIO_INPUT && e.noiseSuppression);
    }
    hasAutomaticGainControl(e) {
        return m(e, !1, (e) => e.type === c.h7.AUDIO_INPUT && e.automaticGainControl);
    }
    getVendor(e) {
        return m(e, null, (e) => e.vendor);
    }
    getModel(e) {
        return m(e, null, (e) => e.model);
    }
    getRevision() {
        return _;
    }
}
d(v, 'displayName', 'CertifiedDeviceStore'), (n.Z = new v(u.Z, { CERTIFIED_DEVICES_SET: E }));
