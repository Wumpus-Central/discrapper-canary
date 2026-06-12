i.d(e, { SimpleMuxWrapper: () => d });
var n = i(141711),
    o = i(941426),
    s = i(740644),
    r = i(497329);
let a = new o.Vy("SimpleMuxWrapper");
class d {
    isMonitoring = !1;
    videoElement;
    config;
    sessionId;
    hlsInstance;
    constructor(t) {
        (this.config = t),
            (this.videoElement = t.videoElement),
            (this.sessionId = r.C.generateSessionId()),
            (this.hlsInstance = t.hlsInstance);
    }
    initialize() {
        let t = {
            debug: this.config.debug ?? !1,
            disableCookies: !0,
            respectDoNotTrack: !0,
            data: s.H.mapDiscordToMuxMetadata(this.config, this.sessionId),
        };
        null != this.hlsInstance && ((t.hlsjs = this.hlsInstance), (t.Hls = this.hlsInstance.constructor));
        try {
            n.A.monitor(this.videoElement, t), (this.isMonitoring = !0);
        } catch (t) {
            a.error("Error creating Mux monitor", t), (this.isMonitoring = !1);
        }
    }
    endSession() {
        if (this.isMonitoring)
            try {
                "function" == typeof n.A.destroyMonitor && n.A.destroyMonitor(this.videoElement),
                    (this.isMonitoring = !1);
            } catch (t) {
                a.error("Error ending Mux session", t);
            }
    }
    destroy() {
        if (this.isMonitoring)
            try {
                "function" == typeof n.A.destroyMonitor && n.A.destroyMonitor(this.videoElement),
                    (this.isMonitoring = !1);
            } catch (t) {
                a.error("Error destroying Mux monitor", t);
            }
    }
    getSessionId() {
        return this.sessionId;
    }
}
