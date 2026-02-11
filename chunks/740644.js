"use strict";
n.d(t, { H: () => a });
let r = "1qd16mdmdjasipqg3irobln4u",
    i = "1.0.0";
class a {
    static mapDiscordToMuxMetadata(e, t) {
        return {
            env_key: r,
            session_id: t,
            player_name: "discord",
            player_version: i,
            video_id: e.contentMetadata.contentId,
            video_title: e.contentMetadata.title,
            video_duration: e.contentMetadata.durationMs ?? 1e3 * e.contentMetadata.durationSec,
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
            return "495496";
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
