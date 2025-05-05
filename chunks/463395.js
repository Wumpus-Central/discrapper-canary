n.d(t, { Z: () => b });
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
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
    f = {},
    _ = {},
    p = 0;
function h(e, t, n) {
    let r = _[e];
    return null != r ? n(r) : t;
}
function m(e, t) {
    let n = f[e];
    null != n && n.forEach((e) => delete _[e.id]), (f[e] = t), t.forEach((e) => (_[e.id] = e));
}
function g(e) {
    let { applicationId: t, devices: n } = e;
    m(t, n), s.K.set(d, f), p++;
}
class E extends (r = a.ZP.Store) {
    initialize() {
        let e = s.K.get(d);
        null != e &&
            o().forEach(e, (e, t) => {
                e.forEach((e) => {
                    'audioinput' === e.type && e.hardwareMute && (e.hardwareMute = !1);
                }),
                    m(t, e);
            });
    }
    isCertified(e) {
        return null != _[e];
    }
    getCertifiedDevice(e) {
        return _[e];
    }
    getCertifiedDeviceName(e, t) {
        let n = this.getCertifiedDevice(e);
        return null != n ? ''.concat(n.vendor.name, ' ').concat(n.model.name) : t;
    }
    getCertifiedDeviceByType(e) {
        return o().find(_, (t) => t.type === e);
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
