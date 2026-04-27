n.d(t, { SimpleMuxWrapper: () => u });
var r = n(141711),
    s = n(118356),
    a = n(740644),
    i = n(497329);
let l = new s.Vy("SimpleMuxWrapper");
class u {
    isMonitoring = !1;
    videoElement;
    config;
    sessionId;
    hlsInstance;
    constructor(e) {
        (this.config = e),
            (this.videoElement = e.videoElement),
            (this.sessionId = i.C.generateSessionId()),
            (this.hlsInstance = e.hlsInstance);
    }
    initialize() {
        let e = {
            debug: this.config.debug ?? !1,
            disableCookies: !0,
            respectDoNotTrack: !0,
            data: a.H.mapDiscordToMuxMetadata(this.config, this.sessionId),
        };
        null != this.hlsInstance && ((e.hlsjs = this.hlsInstance), (e.Hls = this.hlsInstance.constructor));
        try {
            r.A.monitor(this.videoElement, e), (this.isMonitoring = !0);
        } catch (e) {
            l.error("Error creating Mux monitor", e), (this.isMonitoring = !1);
        }
    }
    endSession() {
        if (this.isMonitoring)
            try {
                "function" == typeof r.A.destroyMonitor && r.A.destroyMonitor(this.videoElement),
                    (this.isMonitoring = !1);
            } catch (e) {
                l.error("Error ending Mux session", e);
            }
    }
    destroy() {
        if (this.isMonitoring)
            try {
                "function" == typeof r.A.destroyMonitor && r.A.destroyMonitor(this.videoElement),
                    (this.isMonitoring = !1);
            } catch (e) {
                l.error("Error destroying Mux monitor", e);
            }
    }
    getSessionId() {
        return this.sessionId;
    }
}
