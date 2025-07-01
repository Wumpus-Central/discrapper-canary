n.d(t, { Z: () => g });
var r,
    i = n(442837),
    a = n(570140),
    o = n(704907),
    s = n(131951);
function l(e, t, n) {
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
let c = {
        afterCompute: () => {},
        computeBonus: () => 100,
        computeFrecency: o.KX.original,
        computeWeight: o.M$.original,
        lookupKey: (e) => e,
        maxSamples: 256,
        numFrequentlyItems: 1 / 0
    },
    u = new o.ZP(c),
    d = new o.ZP(c),
    f = new o.ZP(c);
function _(e) {
    let { id: t } = e;
    u.track(t);
}
function p(e) {
    let { id: t } = e;
    d.track(t);
}
function h(e) {
    let { id: t } = e;
    f.track(t);
}
class m extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (this.waitFor(s.Z), (null == e ? void 0 : e.inputDeviceFrecency) != null && u.overwriteHistory(e.inputDeviceFrecency), (null == e ? void 0 : e.outputDeviceFrecency) != null && d.overwriteHistory(e.outputDeviceFrecency), (null == e ? void 0 : e.videoDeviceFrecency) != null && f.overwriteHistory(e.videoDeviceFrecency));
    }
    getState() {
        return {
            inputDeviceFrecency: u.usageHistory,
            outputDeviceFrecency: d.usageHistory,
            videoDeviceFrecency: f.usageHistory
        };
    }
    getInputDeviceIdsSortedByFrecency() {
        return u.frequently;
    }
    getOutputDeviceIdsSortedByFrecency() {
        return d.frequently;
    }
    getVideoDeviceIdsSortedByFrecency() {
        return f.frequently;
    }
}
(l(m, 'displayName', 'DeviceFrecencyStore'), l(m, 'persistKey', 'DeviceFrecencyStore'));
let g = new m(a.Z, {
    AUDIO_SET_INPUT_DEVICE: _,
    AUDIO_SET_OUTPUT_DEVICE: p,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: h
});
