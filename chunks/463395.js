n.d(t, { Z: () => v });
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(433517),
    l = n(570140),
    u = n(65154);
function c(e, t, n) {
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
    let i = _[e];
    return null != i ? n(i) : t;
}
function m(e, t) {
    let n = f[e];
    null != n && n.forEach((e) => delete _[e.id]), (f[e] = t), t.forEach((e) => (_[e.id] = e));
}
function g(e) {
    let { applicationId: t, devices: n } = e;
    m(t, n), o.K.set(d, f), p++;
}
class E extends (i = s.ZP.Store) {
    initialize() {
        let e = o.K.get(d);
        null != e &&
            a().forEach(e, (e, t) => {
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
        return a().find(_, (t) => t.type === e);
    }
    isHardwareMute(e) {
        return h(e, !1, (e) => e.type === u.h7.AUDIO_INPUT && e.hardwareMute);
    }
    hasEchoCancellation(e) {
        return h(e, !1, (e) => e.type === u.h7.AUDIO_INPUT && e.echoCancellation);
    }
    hasNoiseSuppression(e) {
        return h(e, !1, (e) => e.type === u.h7.AUDIO_INPUT && e.noiseSuppression);
    }
    hasAutomaticGainControl(e) {
        return h(e, !1, (e) => e.type === u.h7.AUDIO_INPUT && e.automaticGainControl);
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
c(E, 'displayName', 'CertifiedDeviceStore');
let v = new E(l.Z, { CERTIFIED_DEVICES_SET: g });
