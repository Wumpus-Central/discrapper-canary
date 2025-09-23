n.d(t, { Z: () => S }), n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(379649),
    l = n(570140),
    c = n(704907),
    u = n(131951),
    d = n(594174),
    f = n(65154);
function _(e, t, n) {
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
let p = {
        inputDeviceFrecency: f.h7.AUDIO_INPUT,
        outputDeviceFrecency: f.h7.AUDIO_OUTPUT,
        videoDeviceFrecency: f.h7.VIDEO_INPUT,
    },
    h = {
        afterCompute: () => {},
        computeBonus: () => 100,
        lookupKey: (e) => e,
        maxSamples: 256,
        numFrequentlyItems: 1 / 0,
    };
function m(e) {
    return {
        [f.h7.AUDIO_INPUT]: { getCurrentDeviceId: (e) => e.getInputDeviceId() },
        [f.h7.AUDIO_OUTPUT]: { getCurrentDeviceId: (e) => e.getOutputDeviceId() },
        [f.h7.VIDEO_INPUT]: { getCurrentDeviceId: (e) => e.getVideoDeviceId() },
    }[e];
}
function g(e, t) {
    let { oldId: n } = t;
    if (!T.isSampling(e)) return !1;
    T.stopSampling(e, n), T.startSampling(e);
}
function E(e) {
    var t;
    let { context: n, userId: r, speakingFlags: i } = e;
    if (n !== f.Yn.DEFAULT) return !1;
    let a = null == (t = d.default.getCurrentUser()) ? void 0 : t.id;
    if (null == a) return !1;
    let o = r === a ? f.h7.AUDIO_INPUT : f.h7.AUDIO_OUTPUT;
    if (i === f.Dg.NONE && T.isSampling(o)) T.stopSampling(o);
    else {
        if (i === f.Dg.NONE || T.isSampling(o)) return !1;
        T.startSampling(o);
    }
}
function b() {
    T.reset();
}
let y = {
        [f.h7.AUDIO_INPUT]: new s.G9(),
        [f.h7.AUDIO_OUTPUT]: new s.G9(),
        [f.h7.VIDEO_INPUT]: new s.G9(),
    },
    O = {
        [f.h7.AUDIO_INPUT]: {},
        [f.h7.AUDIO_OUTPUT]: {},
        [f.h7.VIDEO_INPUT]: {},
    },
    v = {
        [f.h7.AUDIO_INPUT]: new c.Z(h),
        [f.h7.AUDIO_OUTPUT]: new c.Z(h),
        [f.h7.VIDEO_INPUT]: new c.Z(h),
    };
class I extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(u.Z, d.default),
            [f.h7.AUDIO_INPUT, f.h7.AUDIO_OUTPUT, f.h7.VIDEO_INPUT].forEach((t) => {
                (null == e ? void 0 : e[t]) != null && v[t].overwriteHistory(e[t]), y[t].reset();
            });
    }
    reset() {
        [f.h7.AUDIO_INPUT, f.h7.AUDIO_OUTPUT, f.h7.VIDEO_INPUT].forEach((e) => {
            y[e].reset(), (O[e] = {});
        });
    }
    track(e, t, n) {
        null == O[e][t] && (O[e][t] = 0), (O[e][t] += n), v[e].track(t, { usesSinceLastTrack: n });
    }
    isSampling(e) {
        return y[e].isRunning();
    }
    startSampling(e) {
        y[e].start();
    }
    stopSampling(e, t) {
        let n = y[e];
        n.stop();
        let r = n.elapsed().asMilliseconds();
        if (r > 0) {
            let n = null != t ? t : m(e).getCurrentDeviceId(u.Z);
            this.track(e, n, r);
        }
        n.reset();
    }
    getState() {
        return {
            [f.h7.AUDIO_INPUT]: v[f.h7.AUDIO_INPUT].usageHistory,
            [f.h7.AUDIO_OUTPUT]: v[f.h7.AUDIO_OUTPUT].usageHistory,
            [f.h7.VIDEO_INPUT]: v[f.h7.VIDEO_INPUT].usageHistory,
        };
    }
    getDeviceIdsSortedByFrecency(e) {
        return v[e].frequently;
    }
    getUsageStats() {
        let e = {
            [f.h7.AUDIO_INPUT]: [],
            [f.h7.AUDIO_OUTPUT]: [],
            [f.h7.VIDEO_INPUT]: [],
        };
        return (
            [f.h7.AUDIO_INPUT, f.h7.AUDIO_OUTPUT].forEach((t) => {
                this.isSampling(t) && (this.stopSampling(t), this.startSampling(t)), (e[t] = Object.entries(O[t]));
            }),
            {
                duration_input_device_used_ids: e[f.h7.AUDIO_INPUT].map((e) => {
                    let [t, n] = e;
                    return t;
                }),
                duration_input_device_used_ms: e[f.h7.AUDIO_INPUT].map((e) => {
                    let [t, n] = e;
                    return n;
                }),
                duration_output_device_used_ids: e[f.h7.AUDIO_OUTPUT].map((e) => {
                    let [t, n] = e;
                    return t;
                }),
                duration_output_device_used_ms: e[f.h7.AUDIO_OUTPUT].map((e) => {
                    let [t, n] = e;
                    return n;
                }),
            }
        );
    }
}
_(I, "displayName", "DeviceFrecencyStore"),
    _(I, "persistKey", "DeviceFrecencyStore"),
    _(I, "migrations", [(e) => a().mapKeys(e, (e, t) => p[t])]);
let T = new I(l.Z, {
        AUDIO_SET_INPUT_DEVICE: (e) => g(f.h7.AUDIO_INPUT, e),
        AUDIO_SET_OUTPUT_DEVICE: (e) => g(f.h7.AUDIO_OUTPUT, e),
        MEDIA_ENGINE_SET_VIDEO_DEVICE: (e) => g(f.h7.VIDEO_INPUT, e),
        SPEAKING: E,
        RTC_CONNECTION_CLIENT_CONNECT: b,
    }),
    S = T;
