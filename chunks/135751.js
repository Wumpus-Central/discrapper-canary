n.d(t, { c: () => c });
var r = n(745200),
    o = n(579092),
    a = n(82328),
    l = n(869950);
function i(e, t, n) {
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
        var e, t, n;
        let o = null != (t = null == (e = window.GLOBAL_ENV) ? void 0 : e.MUX_ENV_KEY) ? t : null;
        if (null == o || 0 === o.length) return;
        let l = {
            debug: null != (n = this.config.debug) && n,
            disableCookies: !0,
            respectDoNotTrack: !0,
            data: a.v.mapDiscordToMuxMetadata(this.config, this.sessionId),
        };
        null != this.hlsInstance && ((l.hlsjs = this.hlsInstance), (l.Hls = this.hlsInstance.constructor));
        try {
            r.Z.monitor(this.videoElement, l), (this.isMonitoring = !0);
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
        i(this, "isMonitoring", !1),
            i(this, "videoElement", void 0),
            i(this, "config", void 0),
            i(this, "sessionId", void 0),
            i(this, "hlsInstance", void 0),
            (this.config = e),
            (this.videoElement = e.videoElement),
            (this.sessionId = l.S.generateSessionId()),
            (this.hlsInstance = e.hlsInstance);
    }
}
