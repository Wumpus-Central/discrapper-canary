n.d(t, { c: () => c });
var r = n(841992),
    o = n(579092),
    l = n(82328),
    i = n(869950);
function a(e, t, n) {
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
let s = new o.Yd("SimpleMuxWrapper");
class c {
    initialize() {
        var e;
        let t = {
            debug: null != (e = this.config.debug) && e,
            disableCookies: !0,
            respectDoNotTrack: !0,
            data: l.v.mapDiscordToMuxMetadata(this.config, this.sessionId),
        };
        null != this.hlsInstance && ((t.hlsjs = this.hlsInstance), (t.Hls = this.hlsInstance.constructor));
        try {
            r.Z.monitor(this.videoElement, t), (this.isMonitoring = !0);
        } catch (e) {
            s.error("Error creating Mux monitor", e), (this.isMonitoring = !1);
        }
    }
    endSession() {
        if (this.isMonitoring)
            try {
                "function" == typeof r.Z.destroyMonitor && r.Z.destroyMonitor(this.videoElement),
                    (this.isMonitoring = !1);
            } catch (e) {
                s.error("Error ending Mux session", e);
            }
    }
    destroy() {
        if (this.isMonitoring)
            try {
                "function" == typeof r.Z.destroyMonitor && r.Z.destroyMonitor(this.videoElement),
                    (this.isMonitoring = !1);
            } catch (e) {
                s.error("Error destroying Mux monitor", e);
            }
    }
    getSessionId() {
        return this.sessionId;
    }
    constructor(e) {
        a(this, "isMonitoring", !1),
            a(this, "videoElement", void 0),
            a(this, "config", void 0),
            a(this, "sessionId", void 0),
            a(this, "hlsInstance", void 0),
            (this.config = e),
            (this.videoElement = e.videoElement),
            (this.sessionId = i.S.generateSessionId()),
            (this.hlsInstance = e.hlsInstance);
    }
}
