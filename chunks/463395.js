n.d(t, { Z: () => b });
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(65154);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = 'CertifiedDeviceStore',
    _ = {},
    f = {},
    p = 0;
function h(e, t, n) {
    let r = f[e];
    return null != r ? n(r) : t;
}
function m(e, t) {
    let n = _[e];
    null != n && n.forEach((e) => delete f[e.id]), (_[e] = t), t.forEach((e) => (f[e.id] = e));
}
function g(e) {
    let { applicationId: t, devices: n } = e;
    m(t, n), s.K.set(d, _), p++;
}
class E extends (r = o.ZP.Store) {
    initialize() {
        let e = s.K.get(d);
        null != e &&
            a().forEach(e, (e, t) => {
                e.forEach((e) => {
                    'audioinput' === e.type && e.hardwareMute && (e.hardwareMute = !1);
                }),
                    m(t, e);
            });
    }
    isCertified(e) {
        return null != f[e];
    }
    getCertifiedDevice(e) {
        return f[e];
    }
    getCertifiedDeviceName(e, t) {
        let n = this.getCertifiedDevice(e);
        return null != n ? ''.concat(n.vendor.name, ' ').concat(n.model.name) : t;
    }
    getCertifiedDeviceByType(e) {
        return a().find(f, (t) => t.type === e);
    }
    isHardwareMute(e) {
        return h(e, !1, (e) => e.type === c.h7.AUDIO_INPUT && e.hardwareMute);
    }
    hasEchoCancellation(e) {
        return h(e, !1, (e) => e.type === c.h7.AUDIO_INPUT && e.echoCancellation);
    }
    hasNoiseSuppression(e) {
        return h(e, !1, (e) => e.type === c.h7.AUDIO_INPUT && e.noiseSuppression);
    }
    hasAutomaticGainControl(e) {
        return h(e, !1, (e) => e.type === c.h7.AUDIO_INPUT && e.automaticGainControl);
    }
    getVendor(e) {
        return h(e, null, (e) => e.vendor);
    }
    getModel(e) {
        return h(e, null, (e) => e.model);
    }
    getRevision() {
        return p;
    }
}
u(E, 'displayName', 'CertifiedDeviceStore');
let b = new E(l.Z, { CERTIFIED_DEVICES_SET: g });
