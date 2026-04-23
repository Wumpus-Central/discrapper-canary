n.d(t, { _o: () => c, Gb: () => u });
var r = n(141711),
    s = n(118356);
class a {
    static mapDiscordToMuxMetadata(e, t) {
        return {
            env_key: "1qd16mdmdjasipqg3irobln4u",
            session_id: t,
            player_name: "discord",
            player_version: "1.0.0",
            video_id: e.contentMetadata.contentId,
            video_title: e.contentMetadata.title,
            video_duration:
                e.contentMetadata.durationMs ??
                (null != e.contentMetadata.durationSec ? 1e3 * e.contentMetadata.durationSec : void 0),
            video_content_type: e.contentMetadata.contentType,
            video_series: e.contentMetadata.questId,
            video_producer: e.contentMetadata.gameId,
            video_brand: e.contentMetadata.gameName ?? "Discord",
            video_cdn: "Cloudflare",
            video_stream_type: e.contentMetadata.videoStreamType,
            view_client_application_name: this.getBuildChannel(),
            view_client_application_version: this.getAppVersion(),
            viewer_user_id: e.userContext?.userId,
            viewer_plan: e.userContext?.userTier,
        };
    }
    static getAppVersion() {
        try {
            return "534148";
        } catch {
            return "unknown";
        }
    }
    static getBuildChannel() {
        try {
            return window.GLOBAL_ENV?.RELEASE_CHANNEL ?? "stable";
        } catch {
            return "stable";
        }
    }
}
class l {
    static generateSessionId() {
        return `discord-video-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
}
let i = new s.Vy("SimpleMuxWrapper");
class u {
    isMonitoring = !1;
    videoElement;
    config;
    sessionId;
    hlsInstance;
    constructor(e) {
        (this.config = e),
            (this.videoElement = e.videoElement),
            (this.sessionId = l.generateSessionId()),
            (this.hlsInstance = e.hlsInstance);
    }
    initialize() {
        let e = {
            debug: this.config.debug ?? !1,
            disableCookies: !0,
            respectDoNotTrack: !0,
            data: a.mapDiscordToMuxMetadata(this.config, this.sessionId),
        };
        null != this.hlsInstance && ((e.hlsjs = this.hlsInstance), (e.Hls = this.hlsInstance.constructor));
        try {
            r.A.monitor(this.videoElement, e), (this.isMonitoring = !0);
        } catch (e) {
            i.error("Error creating Mux monitor", e), (this.isMonitoring = !1);
        }
    }
    endSession() {
        if (this.isMonitoring)
            try {
                "function" == typeof r.A.destroyMonitor && r.A.destroyMonitor(this.videoElement),
                    (this.isMonitoring = !1);
            } catch (e) {
                i.error("Error ending Mux session", e);
            }
    }
    destroy() {
        if (this.isMonitoring)
            try {
                "function" == typeof r.A.destroyMonitor && r.A.destroyMonitor(this.videoElement),
                    (this.isMonitoring = !1);
            } catch (e) {
                i.error("Error destroying Mux monitor", e);
            }
    }
    getSessionId() {
        return this.sessionId;
    }
}
new s.Vy("MobileCustomMuxIntegration"), new s.Vy("MobileMuxWrapper");
let o = (0, n(945810).mj)({
    name: "2025-09-video-qoe-metrics-tracking",
    kind: "user",
    defaultConfig: { externalAnalyticsEnabled: !1 },
    variations: { 0: { externalAnalyticsEnabled: !1 }, 1: { externalAnalyticsEnabled: !0 } },
});
function c(e) {
    let { location: t } = e;
    return o.getConfig({ location: t });
}
