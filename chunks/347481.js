n.d(t, {
    A: () => b,
});
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(506774),
    l = n(73153),
    c = n(731854);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = "CertifiedDeviceStore",
    f = {},
    p = {},
    _ = 0;

function h(e, t, n) {
    let r = p[e];
    return null != r ? n(r) : t;
}

function m(e, t) {
    let n = f[e];
    null != n && n.forEach((e) => delete p[e.id]), (f[e] = t), t.forEach((e) => (p[e.id] = e));
}

function g(e) {
    let { applicationId: t, devices: n } = e;
    m(t, n), o.w.set(d, f), _++;
}
class E extends (r = s.Ay.Store) {
    initialize() {
        let e = o.w.get(d);
        null != e &&
            a().forEach(e, (e, t) => {
                e.forEach((e) => {
                    "audioinput" === e.type && e.hardwareMute && (e.hardwareMute = !1);
                }),
                    m(t, e);
            });
    }
    isCertified(e) {
        return null != p[e];
    }
    getCertifiedDevice(e) {
        return p[e];
    }
    getCertifiedDeviceName(e, t) {
        let n = this.getCertifiedDevice(e);
        return null != n ? "".concat(n.vendor.name, " ").concat(n.model.name) : t;
    }
    getCertifiedDeviceByType(e) {
        return a().find(p, (t) => t.type === e);
    }
    isHardwareMute(e) {
        return h(e, !1, (e) => e.type === c.oh.AUDIO_INPUT && e.hardwareMute);
    }
    hasEchoCancellation(e) {
        return h(e, !1, (e) => e.type === c.oh.AUDIO_INPUT && e.echoCancellation);
    }
    hasNoiseSuppression(e) {
        return h(e, !1, (e) => e.type === c.oh.AUDIO_INPUT && e.noiseSuppression);
    }
    hasAutomaticGainControl(e) {
        return h(e, !1, (e) => e.type === c.oh.AUDIO_INPUT && e.automaticGainControl);
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
u(E, "displayName", "CertifiedDeviceStore");
let b = new E(l.h, {
    CERTIFIED_DEVICES_SET: g,
});
