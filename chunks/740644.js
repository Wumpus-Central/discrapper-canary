n.d(t, { H: () => r });
class r {
    static mapDiscordToMuxMetadata(e, t) {
        var n, r, l, o;
        return {
            env_key: "1qd16mdmdjasipqg3irobln4u",
            session_id: t,
            player_name: "discord",
            player_version: "1.0.0",
            video_id: e.contentMetadata.contentId,
            video_title: e.contentMetadata.title,
            video_duration: null != (n = e.contentMetadata.durationMs) ? n : 1000 * e.contentMetadata.durationSec,
            video_content_type: e.contentMetadata.contentType,
            video_series: e.contentMetadata.questId,
            video_producer: e.contentMetadata.gameId,
            video_brand: null != (r = e.contentMetadata.gameName) ? r : "Discord",
            video_cdn: "Cloudflare",
            video_stream_type: e.contentMetadata.videoStreamType,
            view_client_application_name: this.getBuildChannel(),
            view_client_application_version: this.getAppVersion(),
            viewer_user_id: null == (l = e.userContext) ? void 0 : l.userId,
            viewer_plan: null == (o = e.userContext) ? void 0 : o.userTier,
        };
    }
    static getAppVersion() {
        try {
            var e;
            return ((e = "488133"), void 0 !== e) ? e : "unknown";
        } catch (e) {
            return "unknown";
        }
    }
    static getBuildChannel() {
        try {
            var e, t;
            return null != (e = null == (t = window.GLOBAL_ENV) ? void 0 : t.RELEASE_CHANNEL) ? e : "stable";
        } catch (e) {
            return "stable";
        }
    }
}
