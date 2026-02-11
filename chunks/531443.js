"use strict";
n.d(t, { G: () => l });
var r = n(141711),
    i = n(118356),
    a = n(740644),
    s = n(497329);
let o = new i.Vy("SimpleMuxWrapper");
class l {
    isMonitoring = !1;
    videoElement;
    config;
    sessionId;
    hlsInstance;
    constructor(e) {
        (this.config = e),
            (this.videoElement = e.videoElement),
            (this.sessionId = s.C.generateSessionId()),
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
            o.error("Error creating Mux monitor", e), (this.isMonitoring = !1);
        }
    }
    endSession() {
        if (this.isMonitoring)
            try {
                "function" == typeof r.A.destroyMonitor && r.A.destroyMonitor(this.videoElement),
                    (this.isMonitoring = !1);
            } catch (e) {
                o.error("Error ending Mux session", e);
            }
    }
    destroy() {
        if (this.isMonitoring)
            try {
                "function" == typeof r.A.destroyMonitor && r.A.destroyMonitor(this.videoElement),
                    (this.isMonitoring = !1);
            } catch (e) {
                o.error("Error destroying Mux monitor", e);
            }
    }
    getSessionId() {
        return this.sessionId;
    }
}
