"use strict";
n.d(t, { A: () => g });
var r = n(299855),
    i = n.n(r),
    a = n(574381),
    s = n(118356),
    o = n(205693),
    l = n(451988),
    u = n(73153),
    c = n(77729),
    d = n(837921),
    _ = n(37770),
    f = n(502075);
let p = 5e3,
    h = 1500,
    m = new s.Vy("InputWatcher");
class g {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new l.Ep();
    inputDetected = void 0;
    lastUpdateTime = performance.now();
    constructor(e, t) {
        (this.mediaEngine = e), (this.mediaEngineStore = t), this.mediaEngine.on(o.bg.Silence, this.handleSilence);
    }
    reset() {
        this.stateChangeTimeout.stop(),
            null != this.inputDetected && this.handleSilence(!this.inputDetected),
            (this.inputDetected = void 0);
    }
    fetchInputDeviceOSConfig = async () => {
        let { windowsMuteAndZeroVolumeDetectionEnabled: e } = (0, _.F)({
            location: "MediaEngineStore.fetchInputDeviceOSConfig",
        });
        if ((0, a.uF)() && i().satisfies(c.A?.os.release, f.PH) && e)
            try {
                let e = this.mediaEngineStore.getInputDeviceId(),
                    t = this.mediaEngineStore.getInputDevices()[e]?.guid;
                if (null != t && "" !== t) {
                    await d.Ay.ensureModule("discord_voice");
                    let [e, n] = await Promise.all([
                        this.mediaEngine.getDeviceOSVolume(t),
                        this.mediaEngine.getDeviceOSMuted(t),
                    ]);
                    u.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: e, osMuted: n });
                }
            } catch (e) {
                m.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? h : p, async () => {
            m.info("Silence:", e),
                (this.inputDetected = t),
                (this.lastUpdateTime = performance.now()),
                e && (await this.fetchInputDeviceOSConfig()),
                u.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                });
        });
    };
}
