"use strict";
n.d(t, { A: () => o });
var r = n(118356),
    i = n(205693),
    a = n(731854);
let s = new r.Vy("ConnectionEventFramerateReducer");
class o {
    connection;
    sinkWants;
    framerateReductionTimeout;
    constructor(e, t) {
        (this.connection = e),
            (this.sinkWants = t),
            s.enableNativeLogger(!0),
            e.on(i.yq.Speaking, this.handleSpeaking),
            e.on(i.yq.Mute, this.handleSelfMute),
            this.initialize();
    }
    initialize() {
        this.userSpeakingChange(!0);
    }
    handleSpeaking = (e, t) => {
        e === this.connection.userId && this.userSpeakingChange(t === a.ME.NONE);
    };
    handleSelfMute = (e) => {
        this.connection.hasDesktopSource() ||
            (this.destroyFramerateScaleFactorTimers(), (this.sinkWants.isMuted = e), this.updateRemoteWantsFramerate());
    };
    userSpeakingChange(e) {
        if (!this.connection.hasDesktopSource()) {
            if ((this.destroyFramerateScaleFactorTimers(), !e)) {
                this.sinkWants.isMuted && ((this.sinkWants.isMuted = !1), this.updateRemoteWantsFramerate());
                return;
            }
            this.framerateReductionTimeout = setTimeout(() => {
                this.connection.destroyed ||
                    (s.info(`BaseConnection.userSpeakingChange: Reduced framerate after ${a.qm} ms.`),
                    (this.framerateReductionTimeout = void 0),
                    (this.sinkWants.isMuted = !0),
                    this.updateRemoteWantsFramerate());
            }, a.qm);
        }
    }
    destroyFramerateScaleFactorTimers() {
        "number" == typeof this.framerateReductionTimeout &&
            (clearTimeout(this.framerateReductionTimeout), (this.framerateReductionTimeout = void 0));
    }
    updateRemoteWantsFramerate() {
        this.connection.updateVideoQuality(["remoteSinkWantsMaxFramerate"]);
    }
    destroy() {
        this.destroyFramerateScaleFactorTimers();
    }
}
