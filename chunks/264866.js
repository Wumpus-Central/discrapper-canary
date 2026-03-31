"use strict";
n.d(t, { A: () => h });
var r = n(299855),
    i = n.n(r),
    s = n(574381),
    a = n(118356),
    o = n(205693),
    l = n(451988),
    u = n(73153),
    c = n(77729),
    d = n(502075);
let _ = 5e3,
    f = 1500,
    p = new a.Vy("InputWatcher");
class h {
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
        if ((0, s.uF)() && i().satisfies(c.A?.os.release, d.PH))
            try {
                let e = this.mediaEngineStore.getInputDeviceId(),
                    t = this.mediaEngineStore.getInputDevices()[e]?.guid;
                if (null != t && "" !== t) {
                    let e = n(837921).Ay;
                    await e.ensureModule("discord_voice");
                    let [r, i] = await Promise.all([
                        this.mediaEngine.getDeviceOSVolume(t),
                        this.mediaEngine.getDeviceOSMuted(t),
                    ]);
                    u.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: r, osMuted: i });
                }
            } catch (e) {
                p.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? f : _, async () => {
            p.info("Silence:", e),
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
