n.d(t, {
    G: () => c,
});
var r = n(141711),
    l = n(118356),
    o = n(740644),
    i = n(497329);

function s(e, t, n) {
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
let a = new l.Vy("SimpleMuxWrapper");
class c {
    initialize() {
        var e;
        let t = {
            debug: null != (e = this.config.debug) && e,
            disableCookies: !0,
            respectDoNotTrack: !0,
            data: o.H.mapDiscordToMuxMetadata(this.config, this.sessionId),
        };
        null != this.hlsInstance && ((t.hlsjs = this.hlsInstance), (t.Hls = this.hlsInstance.constructor));
        try {
            r.A.monitor(this.videoElement, t), (this.isMonitoring = !0);
        } catch (e) {
            a.error("Error creating Mux monitor", e), (this.isMonitoring = !1);
        }
    }
    endSession() {
        if (this.isMonitoring)
            try {
                "function" == typeof r.A.destroyMonitor && r.A.destroyMonitor(this.videoElement),
                    (this.isMonitoring = !1);
            } catch (e) {
                a.error("Error ending Mux session", e);
            }
    }
    destroy() {
        if (this.isMonitoring)
            try {
                "function" == typeof r.A.destroyMonitor && r.A.destroyMonitor(this.videoElement),
                    (this.isMonitoring = !1);
            } catch (e) {
                a.error("Error destroying Mux monitor", e);
            }
    }
    getSessionId() {
        return this.sessionId;
    }
    constructor(e) {
        s(this, "isMonitoring", !1),
            s(this, "videoElement", void 0),
            s(this, "config", void 0),
            s(this, "sessionId", void 0),
            s(this, "hlsInstance", void 0),
            (this.config = e),
            (this.videoElement = e.videoElement),
            (this.sessionId = i.C.generateSessionId()),
            (this.hlsInstance = e.hlsInstance);
    }
}
